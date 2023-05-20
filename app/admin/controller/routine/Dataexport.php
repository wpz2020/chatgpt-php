<?php

namespace app\admin\controller\routine;

use app\common\controller\Backend;
use ba\Random;
use PhpZip\Exception\ZipException;
use PhpZip\ZipFile;
use think\db\exception\PDOException;
use think\exception\ValidateException;
use modules\dataexport\library\ExportLib;
use think\facade\Db;
use think\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Cell\DataType;

/**
 * 导出任务管理
 *
 */
class Dataexport extends Backend
{
    /**
     * Dataexport模型对象
     * @var \app\admin\model\routine\Dataexport
     */
    protected $model = null;

    protected $quickSearchField = ['name'];

    protected $defaultSortField = 'id,desc';

    protected $withJoinTable = ['admin'];

    protected $preExcludeFields = ['createtime'];

    protected $noNeedPermission = ['getFieldList', 'test', 'task', 'taskControl', 'taskZip'];

    protected $saveDir = null;

    protected $exportZipDir = null;

    public function initialize()
    {
        parent::initialize();
        $this->model        = new \app\admin\model\routine\Dataexport;
        $this->saveDir      = runtime_path() . 'export' . DIRECTORY_SEPARATOR;// 临时文件保存位置(每次开始任务时清空)
        $this->exportZipDir = root_path() . 'public' . DIRECTORY_SEPARATOR . 'export' . DIRECTORY_SEPARATOR;
    }

    public function test()
    {
        if (!$this->auth->check('routine/dataexport/start')) {
            $this->error(__('You have no permission'), ['routePath' => '/admin'], 302);
        }
        $id     = $this->request->param($this->model->getPk());
        $row    = $this->model->find($id);
        $export = new ExportLib($id);

        try {
            $exportNumber = $row->export_number ? $row->export_number : $export->getCount();
            if (!$exportNumber) {
                $this->error('没有数据需要导出~');
            }

            $subtask = [
                [
                    'id'     => 1,
                    'status' => 0,// 状态:0=准备好,1=进行中,2=完成,3=失败
                    'min'    => 0,
                    'max'    => 10,
                    'sql'    => $export->getSql('test')
                ]
            ];

            // 测试sql
            Db::query($subtask[0]['sql']);

            $row->subtask = $subtask;
            $row->save();
        } catch (PDOException|Exception $e) {
            $this->error($e->getMessage());
        }

        $this->success('', [
            'taskId' => $id
        ]);
    }

    public function start()
    {
        $id     = $this->request->param($this->model->getPk());
        $row    = $this->model->find($id);
        $export = new ExportLib($id);

        try {
            $exportNumber = $row->export_number ? $row->export_number : $export->getCount();
            $xlsMaxNumber = ($exportNumber >= $row->xls_max_number) ? $row->xls_max_number : $exportNumber;
            if (!$exportNumber) {
                $this->error('没有数据需要导出~');
            }

            $subtask      = [];
            $subtaskCount = ceil($exportNumber / $xlsMaxNumber);// 子任务数量
            for ($i = 0; $i < $subtaskCount; $i++) {
                $min         = $i * $xlsMaxNumber;
                $subtask[$i] = [
                    'id'     => $i,
                    'status' => 0,// 状态:0=准备好,1=进行中,2=完成,3=失败
                    'min'    => $min,
                    'max'    => $xlsMaxNumber,
                    'sql'    => $export->getSql('limit', [$min, $xlsMaxNumber])
                ];
            }

            // 测试sql
            Db::query($subtask[0]['sql']);

            //echo $subtask[0]['sql'];

            if (!is_dir($this->exportZipDir)) {
                mkdir($this->exportZipDir, 0777, true);
            }

            if ($subtaskCount > 1) {
                // 清理任务临时文件目录
                if (!is_dir($this->saveDir . $id)) {
                    mkdir($this->saveDir . $id . DIRECTORY_SEPARATOR, 0777, true);
                } else {
                    deldir($this->saveDir . $id, false);
                }

                $row->lastprogress = 5;
            } else {
                $row->lastprogress = 0;
            }

            // 删除上次任务的zip包
            if ($row->lastfile) {
                $fileName = explode(DIRECTORY_SEPARATOR, path_transform($row->lastfile));
                if (file_exists($this->exportZipDir . end($fileName))) {
                    unlink($this->exportZipDir . end($fileName));
                }
                $row->lastfile = '';
            }
            $row->subtask        = $subtask;
            $row->lastexporttime = time();
            $row->save();
        } catch (PDOException|Exception $e) {
            $this->error($e->getMessage());
        }

      

        $this->success('导出任务初始化成功！', [
            'download' => ($subtaskCount == 1) ? true : false,
            'subtask'  => $subtask,
            'id'       => $id
        ]);
    }

    public function task(int $id, int $subId, bool $download)
    {
        if (!$this->auth->check('routine/dataexport/start')) {
            $this->error(__('You have no permission'), ['routePath' => '/admin'], 302);
        }
        $row    = $this->model->find($id);
        $export = new ExportLib($id);

        if (isset($row->subtask[$subId]) && is_array($row->subtask[$subId])) {
            $subTask  = $row['subtask'][$subId];
            $taskName = $row['name'];
        } else {
            $this->error('导出子任务未找到，请重新开始！', ['subId' => $subId]);
        }

        set_time_limit(0);// 脚本执行时间限制
        ini_set('memory_limit', $row->memory_limit . 'M');// 脚本内存限制

        // 检查任务状态
        if (!$download) {
            if ($subTask['status'] == 1) {
                $this->error('此子任务正在执行中~', ['subId' => $subId]);
            } else if ($subTask['status'] == 2) {
                if (file_exists($this->saveDir . $id . DIRECTORY_SEPARATOR . $subId . '.xlsx')) {
                    $this->error('此子任务已经处理过啦~', ['subId' => $subId]);
                }
            }
        }

        $spreadsheet = new Spreadsheet();
        $worksheet   = $spreadsheet->getActiveSheet();
        $worksheet->setTitle($taskName);

        // 设置表头
        $head      = $export->getXlsTitle();
        $headCount = count($head);
        for ($i = 0; $i < $headCount; $i++) {
            $worksheet->setCellValueByColumnAndRow($i + 1, 1, $head[$i]);
        }

        //var_dump("dddddddd");

        // 写入数据
        try {
            // var_dump($subTask['sql']);
            $data = Db::query($subTask['sql']);
           

        } catch (PDOException $e) {
            $this->error('任务失败！', ['subId' => $subId, 'msg' => $e->getMessage()]);
        }
        $y      = 2;
        $fields = $export->getFields();


        //判断是否为卡密 
        $isCarMi =  false;
        if(strpos($subTask['sql'], 'ba_carmi') !== false){
            $isCarMi = true;
        }


        //var_dump($data);exit;
        

        foreach ($data as $rowKey => $row) {
            $i = 1;

            //更新卡密下载次数
            if($isCarMi){
                Db::table('ba_carmi')->where('key',$row['carmi_key'])->inc('download')->update();
            }

            foreach ($fields as $key => $value) {
                $field = $value['field'];
                if ($value['discern'] == 'text') {
                    // 文本
                    $worksheet->setCellValueExplicitByColumnAndRow($i, $y, $row[$field], DataType::TYPE_STRING);
                } else if ($value['discern'] == 'int') {
                    // 数字
                    $worksheet->setCellValueExplicitByColumnAndRow($i, $y, (int)$row[$field], DataType::TYPE_NUMERIC);
                } else if ($value['discern'] == 'time') {
                    // 日期时间
                    if ($row[$field]) {
                        if (is_numeric($row[$field])) {
                            $excelDateValue = date('Y-m-d H:i:s', $row[$field]);
                        } else {
                            $excelDateValue = $row[$field];
                        }
                        $worksheet->setCellValueByColumnAndRow($i, $y, $excelDateValue);
                    } else {
                        $worksheet->setCellValueByColumnAndRow($i, $y, '-');
                    }
                } else if ($value['discern'] == 'valuation') {
                    // 赋值
                    $fieldValue = $export->assignment($row[$field], $value['comment']);
                    $worksheet->setCellValueByColumnAndRow($i, $y, $fieldValue);
                }

                $i++;
            }
            $y++;
            unset($data[$rowKey]); // 能节约一点内存
        }

        // xls文件处理
        if ($download) {
            // 直接下载
            ob_end_clean();
            header("Pragma: public");
            header("Expires: 0");
            header("Cache-Control:must-revalidate, post-check=0, pre-check=0");
            header("Content-Type:application/force-download");
            header("Content-Type:application/vnd.ms-execl");
            header("Content-Type:application/octet-stream");
            header("Content-Type:application/download");

            $taskName        = $id . '.' . $taskName . '.xlsx';
            $encodedFilename = urlencode($taskName);
            $ua              = $_SERVER["HTTP_USER_AGENT"];
            if (preg_match("/MSIE/", $ua)) {
                header('Content-Disposition: attachment; filename="' . $encodedFilename . '"');
            } else if (preg_match("/Firefox/", $ua)) {
                header('Content-Disposition: attachment; filename*="utf8\'\'' . $taskName . '"');
            } else {
                header('Content-Disposition: attachment; filename="' . $taskName . '"');
            }
            header("Content-Transfer-Encoding:binary");
            header('Cache-Control: max-age=0');

            $writer = new Xlsx($spreadsheet);
            $writer->save('php://output');
            $spreadsheet->disconnectWorksheets();
            unset($spreadsheet);
        } else {
            // 保存
            $writer = new Xlsx($spreadsheet);
            $writer->save($this->saveDir . $id . DIRECTORY_SEPARATOR . $subId . '.xlsx');

            $result = false;
            Db::startTrans();
            try {
                // 获取最新状态
                $row          = $this->model->find($id);
                $lastprogress = $row->lastprogress + round(92 / count($row->subtask), 2);
                $lastprogress = ($lastprogress > 100) ? 100 : $lastprogress;

                if (isset($row->subtask[$subId]) && is_array($row->subtask[$subId])) {
                    $subTaskTemp                   = $row->subtask;
                    $subTaskTemp[$subId]['status'] = 2;
                    $row->subtask                  = $subTaskTemp;
                    $row->lastprogress             = $lastprogress;
                    $row->save();
                    $result = true;
                }
                Db::commit();
            } catch (PDOException|Exception $e) {
                Db::rollback();
                $this->error('任务失败！', ['subId' => $subId, 'msg' => $e->getMessage()]);
            }
            $spreadsheet->disconnectWorksheets();
            unset($spreadsheet);
            if ($result) {
                $this->success('', [
                    'subId' => $subId,
                ]);
            } else {
                $this->error('', [
                    'subId' => $subId,
                ]);
            }
        }
    }

    public function taskControl()
    {
        if (!$this->auth->check('routine/dataexport/start')) {
            $this->error(__('You have no permission'), ['routePath' => '/admin'], 302);
        }
        $id  = $this->request->param($this->model->getPk());
        $row = $this->model->find($id);
        if (!$row) {
            $this->error('任务找不到啦~');
        }
        if (!isset($row->subtask) || !is_array($row->subtask)) {
            $this->error('子任务找不到啦，请重新开始任务~');
        }
        $row = $row->toArray();

        $currentPage = 0;
        $subtaskPage = [];
        foreach ($row['subtask'] as $value) {
            $value['status']             = 0;// 用户可能会刷新任务控制页面，js将重新确定状态
            $subtaskPage[$currentPage][] = $value;
            if (count($subtaskPage[$currentPage]) >= $row['concurrent_create_xls']) {
                $currentPage++;
            }
        }

        $subtaskCount            = is_array($row['subtask']) ? count($row['subtask']) : 0;
        $row['subtask_progress'] = round(92 / $subtaskCount, 2);
        $row['lastprogress']     = 5;

        $this->success('', [
            'task'        => $row,
            'subtaskPage' => $subtaskPage,
        ]);
    }

    public function taskZip()
    {
        if (!$this->auth->check('routine/dataexport/start')) {
            $this->error(__('You have no permission'), ['routePath' => '/admin'], 302);
        }
        $id  = $this->request->param($this->model->getPk());
        $row = $this->model->find($id);
        if (!$row) {
            $this->error(__('Record not found'));
        }
        if (!isset($row->subtask) || !is_array($row->subtask)) {
            $this->error('打包失败，任务找不到啦~');
        }
        if ($row->lastfile) {
            $this->success('', ['file' => $row->lastfile]);
        }

        foreach ($row->subtask as $subtask) {
            if (!file_exists($this->saveDir . $id . DIRECTORY_SEPARATOR . $subtask['id'] . '.xlsx')) {
                $this->error('子任务未处理完毕！');
            }
        }
        $taskDir = $this->saveDir . $id . DIRECTORY_SEPARATOR;// 导出任务的临时文件目录
        $zipName = $id . '.export_' . Random::build() . '.zip';
        $zipUrl  = full_url(path_transform(DIRECTORY_SEPARATOR . 'export' . DIRECTORY_SEPARATOR . $zipName));// 绝对地址,以便各处直接点击下载
        $zipName = $this->exportZipDir . $zipName;

        $zip = new ZipFile();
        try {
            $dh = opendir($taskDir);
            while ($file = readdir($dh)) {
                if ($file != "." && $file != "..") {
                    $fullPath = $taskDir . $file;
                    if (!is_dir($fullPath)) {
                        $zip->addFile($fullPath, $file);
                    }
                }
            }
            closedir($dh);
            $zip->saveAsFile($zipName);

            deldir($taskDir);
        } catch (ZipException $e) {
            $this->error('打包失败：' . $e->getMessage());
        } finally {
            $zip->close();
        }

        $row->lastfile     = $zipUrl;
        $row->lastprogress = 100;
        $row->save();
        $this->success('', ['url' => $zipUrl]);
    }

    public function add()
    {
        if ($this->request->isPost()) {
            $this->request->filter(['trim']);
            $data = $this->request->post();
            if (!$data) {
                $this->error(__('Parameter %s can not be empty', ['']));
            }

            $data             = $this->excludeFields($data);
            $data['admin_id'] = $this->auth->id;

            $result = false;
            Db::startTrans();
            try {
                // 模型验证
                if ($this->modelValidate) {
                    $validate = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                    if (class_exists($validate)) {
                        $validate = new $validate;
                        if ($this->modelSceneValidate) $validate->scene('add');
                        $validate->check($data);
                    }
                }
                $result = $this->model->save($data);
                Db::commit();
            } catch (ValidateException|PDOException|Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($result !== false) {
                $this->success(__('Added successfully'));
            } else {
                $this->error(__('No rows were added'));
            }
        }

        $this->success('', [
            'tables' => $this->getTableList(),
        ]);
    }

    /**
     * 编辑
     */
    public function edit()
    {
        $id  = $this->request->param($this->model->getPk());
        $row = $this->model->find($id);
        if (!$row) {
            $this->error(__('Record not found'));
        }

        $dataLimitAdminIds = $this->getDataLimitAdminIds();
        if ($dataLimitAdminIds && !in_array($row[$this->dataLimitField], $dataLimitAdminIds)) {
            $this->error(__('You have no permission'));
        }

        if ($this->request->isPost()) {
            $this->request->filter(['trim']);
            $data = $this->request->post();
            if (!$data) {
                $this->error(__('Parameter %s can not be empty', ['']));
            }

            $data   = $this->excludeFields($data);
            $result = false;
            Db::startTrans();
            try {
                // 模型验证
                if ($this->modelValidate) {
                    $validate = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                    if (class_exists($validate)) {
                        $validate = new $validate;
                        if ($this->modelSceneValidate) $validate->scene('edit');
                        $validate->check($data);
                    }
                }
                $result = $row->save($data);
                Db::commit();
            } catch (ValidateException|PDOException|Exception $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($result !== false) {
                $this->success(__('Update successful'));
            } else {
                $this->error(__('No rows updated'));
            }

        }

        $this->success('', [
            'row'    => $row,
            'tables' => $this->getTableList(),
        ]);
    }

    /**
     * 查看
     */
    public function index()
    {
        // 设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);

        // 如果是select则转发到select方法,若select未重写,其实还是继续执行index
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->withJoin($this->withJoinTable, $this->withJoinType)
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);
        $res->visible(['admin' => ['nickname']]);

        $this->success('', [
            'list'   => $res->items(),
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }

    protected function getTableList()
    {
        $tablePrefix     = config('database.connections.mysql.prefix');
        $outExcludeTable = [
            // 功能表
            'area',
            'config',
            'token',
            'captcha',
            'admin_group_access',
        ];

        $outTables = [];
        $tables    = get_table_list();
        $pattern   = '/^' . $tablePrefix . '/i';
        foreach ($tables as $table => $tableComment) {
            $table = preg_replace($pattern, '', $table);
            if (!in_array($table, $outExcludeTable)) {
                $outTables[$table] = $tableComment;
            }
        }
        return $outTables;
    }

    public function getFieldList($table = null)
    {
        if (!$table) {
            $this->error(__('Parameter error'));
        }

        // 字段类型识别
        $dataTypeInt = [
            'tinyint',
            'int',
            'smallint',
            'mediumint',
            'integer',
            'bigint'
        ];

        $fieldList = get_table_fields($table);

        $fields = [];
        foreach ($fieldList as $key => $item) {
            $discern = 'text'; // 文本
            if (in_array($item['DATA_TYPE'], $dataTypeInt)) {
                $discern = 'int'; // 数字
            }
            if (preg_match("/time$|datetime$/i", $key)) {
                $discern = 'time'; // 日期时间
            }
            if (preg_match("/switch$|toggle$/i", $key)) {
                $discern    = 'valuation';// 赋值
                $commentVal = '0=关闭,1=开启';
            }

            $comment = str_replace('，', ',', $item['COLUMN_COMMENT']);
            $comment = str_replace(['(多选)', '(单选)', '（多选）', '（单选）'], '', $comment);
            if (stripos($comment, ':') !== false && stripos($comment, ',') && stripos($comment, '=') !== false) {
                list($fieldName, $commentVal) = explode(':', $comment);
                $discern = 'valuation';// 赋值
            }

            $fields[$key] = [
                'name'    => $key,
                'discern' => $discern,
                'title'   => $fieldName ?? ($item['COLUMN_COMMENT'] ? $item['COLUMN_COMMENT'] : $key),
                'comment' => $commentVal ?? '',
            ];
            unset($commentVal, $fieldName);
        }

        $this->success('', [
            'fields' => $fields,
        ]);
    }
}