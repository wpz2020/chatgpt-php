<?php

namespace modules\dataexport;

use app\common\library\Menu;
use app\admin\model\MenuRule;
use ba\module\moduleException;
use ba\module\Server;
use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use think\Exception;

class Dataexport
{
    private $uid = 'dataexport';

    public function install()
    {
        $pMenu = MenuRule::where('name', 'routine')->value('id');
        $menu  = [
            [
                'type'      => 'menu',
                'title'     => '数据导出管理',
                'name'      => 'routine/dataexport',
                'path'      => 'routine/dataexport',
                'icon'      => 'fa fa-cloud-download',
                'menu_type' => 'tab',
                'component' => '/src/views/backend/routine/dataexport/index.vue',
                'keepalive' => '1',
                'pid'       => $pMenu ? $pMenu : 0,
                'children'  => [
                    ['type' => 'button', 'title' => '查看', 'name' => 'routine/dataexport/index'],
                    ['type' => 'button', 'title' => '添加', 'name' => 'routine/dataexport/add'],
                    ['type' => 'button', 'title' => '编辑', 'name' => 'routine/dataexport/edit'],
                    ['type' => 'button', 'title' => '删除', 'name' => 'routine/dataexport/del'],
                    ['type' => 'button', 'title' => '执行任务', 'name' => 'routine/dataexport/start'],
                ],
            ],
            [
                'type'      => 'menu',
                'title'     => '导出任务控制',
                'name'      => 'routine/dataexport/taskControl',
                'path'      => 'routine/dataexport/taskControl/:id',
                'icon'      => 'fa fa-cloud-download',
                'menu_type' => 'tab',
                'component' => '/src/views/backend/routine/dataexport/taskControl.vue',
                'keepalive' => '1',
                'extend'    => 'add_rules_only',
                'pid'       => $pMenu ? $pMenu : 0,
            ]
        ];
        Menu::create($menu);
    }

    public function uninstall()
    {
        Menu::delete('routine/dataexport', true);
        Menu::delete('routine/dataexport/taskControl', true);
    }

    public function enable()
    {
        Menu::enable('routine/dataexport');
        Menu::enable('routine/dataexport/taskControl');
    }

    public function disable()
    {
        Menu::disable('routine/dataexport');
        Menu::disable('routine/dataexport/taskControl');
    }

    public function update()
    {
        // 兼容系统v1.1.2的语言包按需加载
        // 寻找安装时备份中的lang/pages文件，如果有，还原到lang/backend内而不是原位置
        $ebakDir = root_path() . 'modules' . DIRECTORY_SEPARATOR . 'ebak' . DIRECTORY_SEPARATOR;
        $zipFile = $ebakDir . $this->uid . '-install.zip';
        $zipDir  = false;
        if (is_file($zipFile)) {
            try {
                $zipDir = Server::unzip($zipFile);
            } catch (moduleException|Exception $e) {
                // skip
            }
        }
        if ($zipDir) {
            $oldBaInputs = [
                path_transform('web\src\lang\pages\zh-cn\routine\dataexport.ts'),
                path_transform('web\src\lang\pages\en\routine\dataexport.ts')
            ];
            foreach ($oldBaInputs as $oldBaInput) {
                @unlink(root_path() . $oldBaInput);
            }

            foreach (
                $iterator = new RecursiveIteratorIterator(
                    new RecursiveDirectoryIterator($zipDir, FilesystemIterator::SKIP_DOTS),
                    RecursiveIteratorIterator::SELF_FIRST
                ) as $item
            ) {
                $ebakFile = path_transform($iterator->getSubPathName());
                if (!$item->isDir() && in_array($ebakFile, $oldBaInputs)) {
                    $newFileName = str_replace(DIRECTORY_SEPARATOR . 'pages' . DIRECTORY_SEPARATOR, DIRECTORY_SEPARATOR . 'backend' . DIRECTORY_SEPARATOR, $ebakFile);
                    copy($item, root_path() . $newFileName);
                }
            }
        }
        deldir($zipDir);
        del_empty_dir(root_path() . 'web/src/lang/pages/en');
        del_empty_dir(root_path() . 'web/src/lang/pages/zh-cn');
    }
}