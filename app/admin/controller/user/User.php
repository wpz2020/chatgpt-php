<?php

namespace app\admin\controller\user;

use Exception;
use ba\Random;
use think\facade\Db;
use app\common\controller\Backend;
use app\admin\model\User as UserModel;
use think\db\exception\PDOException;
use think\exception\ValidateException;
use app\common\model\ProductModel;

class User extends Backend
{
    protected $model = null;

    protected $withJoinTable = ['group'];

    // 排除字段
    protected $preExcludeFields = ['lastlogintime', 'loginfailure', 'password', 'salt'];

    protected $quickSearchField = ['username', 'nickname', 'id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new UserModel();
    }

    /**
     * 查看
     */
    public function index()
    {
        $this->request->filter(['strip_tags', 'trim']);
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->withoutField('password,salt')
            ->withJoin($this->withJoinTable, $this->withJoinType)
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);

            $product = $this->setProduct();



       

            $pitems = $res->items();
    
            // var_dump(count($pitems));
            $index = 0;
    
            for(; $index < count($pitems); $index++){
    
                if($pitems[$index]['product_id'] != ''){
                    $key = $pitems[$index]['product_id'];
                // $pitems[$index]['product_id'] = "dddddddddd";
    
                    $pitems[$index]['product_name'] = $product[$key];
                }
                
            }
    
            $this->success('', [
                'list'   => $pitems,
                'total'  => $res->total(),
                'remark' => get_route_remark(),
            ]);
    }


    public function setProduct(){

        $product = new ProductModel;
        $pd_data = $product->select();   
        
        $data = [
            0=>'无套餐'
        ];

        for($index = 0; $index < count($pd_data); $index++){

            // echo $pd_data[$index]['id'];
            // echo $pd_data[$index]['name'];
            $data[$pd_data[$index]['id']] = $pd_data[$index]['name'];
        }

       

        return $data;
    }


    public function add()
    {
        if ($this->request->isPost()) {
            $data = $this->request->post();
            if (!$data) {
                $this->error(__('Parameter %s can not be empty', ['']));
            }

            $salt   = Random::build('alnum', 16);
            $passwd = encrypt_password($data['password'], $salt);

            $data   = $this->excludeFields($data);
            $result = false;
            Db::startTrans();
            try {
                $data['salt']     = $salt;
                $data['password'] = $passwd;
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
            } catch (ValidateException|Exception|PDOException $e) {
                Db::rollback();
                $this->error($e->getMessage());
            }
            if ($result !== false) {
                $this->success(__('Added successfully'));
            } else {
                $this->error(__('No rows were added'));
            }
        }

        $this->error(__('Parameter error'));
    }

    public function edit($id = null)
    {
        $row = $this->model->find($id);
        if (!$row) {
            $this->error(__('Record not found'));
        }

        if ($this->request->isPost()) {
            $password = $this->request->post('password', '');
            if ($password) {
                $this->model->resetPassword($id, $password);
            }

            $this->parentEdit();
        }

        unset($row->salt);
        $row->password = '';
        $this->success('', [
            'row' => $row
        ]);
    }



    /**
     * 编辑
     */
    public function parentEdit()
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

            //    暂时只修改套餐名称，不修改套餐时间和次数

                // $product_id = $this->request->post('product_id', '');

                // if($product_id){
                //         $uid = $row->id;
                //         $product = Db::table('ba_product')->where('id',$product_id)->find();
                //         $start_time = time();
                //         $end_time = time()+ 86400*$product['num'];
                //         $data['start_time'] = $start_time;
                //         $data['end_time'] = $end_time;
                //         $data['num'] = $product['num'];

                // }



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
            'row' => $row
        ]);
    }

    /**
     * 重写select
     */
    public function select()
    {
        $this->request->filter(['strip_tags', 'trim']);

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->withJoin($this->withJoinTable, $this->withJoinType)
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);

        foreach ($res as $re) {
            $re->nickname_text = $re->username . '(ID:' . $re->id . ')';
        }

        $this->success('', [
            'list'   => $res->items(),
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }
}