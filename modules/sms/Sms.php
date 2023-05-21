<?php

namespace modules\sms;

use ba\module\moduleException;
use ba\module\Server;
use ba\Version;
use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use think\Exception;
use think\facade\Cache;
use think\facade\Db;
use think\facade\Event;
use think\facade\Validate;
use app\common\model\Config;
use app\common\library\Menu;
use Overtrue\EasySms\EasySms;
use modules\sms\library\Helper;
use Overtrue\EasySms\Exceptions\NoGatewayAvailableException;

class Sms
{
    private $uid = 'sms';

    public static function send($templateCode, $mobile, $tplVar = []): bool
    {
        // 环境检查
        if (!extension_loaded('curl')) {
            throw new Exception('Please install curl extension');
        }
        if (!ini_get('curl.cainfo')) {
            throw new Exception('Please configure curl.cainfo in the php.ini file');
        }

        // 数据检查
        $validate = Validate::rule(['mobile' => 'require|mobile'])->message(['mobile' => 'Mobile format error']);
        if (!$validate->check(['mobile' => $mobile])) {
            throw new Exception($validate->getError());
        }
        $templateData = Db::name('sms_template')
            ->where('code', $templateCode)
            ->where('status', 1)
            ->find();
        if (!$templateData) {
            throw new Exception('SMS template does not exist');
        }
        if (!$templateData['template'] && !$templateData['content']) {
            throw new Exception('SMS template error');
        }

        // 配置检查
        $config = config('sms');

       // var_dump($config);
        if (!is_array($config['default']['gateways']) || count($config['default']['gateways']) <= 0) {
            throw new Exception('Please configure available service providers for SMS sending');
        }

        // 解析模板
        $template = Helper::analysisVariable($templateData['content'], $templateData['variables'], $tplVar);
        Event::trigger('TemplateAnalysisAfter', $template);

        try {
            $easySms = new EasySms($config);
            $res     = $easySms->send($mobile, [
                'template' => $templateData['template'],
                'content'  => $template['content'],
                'data'     => $template['variables'],
            ]);
        } catch (NoGatewayAvailableException $e) {
            throw new Exception($e->getLastException()->getMessage());
        }
        return true;
    }

    public function install()
    {
        $menu = [
            [
                'type'      => 'menu_dir',
                'title'     => '短信管理',
                'name'      => 'sms',
                'path'      => 'sms',
                'icon'      => 'el-icon-ChatLineRound',
                'menu_type' => 'tab',
                'children'  => [
                    [
                        'type'      => 'menu',
                        'title'     => '短信配置',
                        'name'      => 'sms/config',
                        'path'      => 'sms/config',
                        'icon'      => 'el-icon-Setting',
                        'menu_type' => 'tab',
                        'component' => '/src/views/backend/sms/config.vue',
                        'keepalive' => '1',
                        'children'  => [
                            ['type' => 'button', 'title' => '查看', 'name' => 'sms/config/getConfigKey'],
                            ['type' => 'button', 'title' => '修改配置', 'name' => 'sms/config/saveConfig'],
                        ]
                    ],
                    [
                        'type'      => 'menu',
                        'title'     => '模板变量管理',
                        'name'      => 'sms/variable',
                        'path'      => 'sms/variable',
                        'icon'      => 'fa fa-asterisk',
                        'menu_type' => 'tab',
                        'component' => '/src/views/backend/sms/variable/index.vue',
                        'keepalive' => '1',
                        'children'  => [
                            ['type' => 'button', 'title' => '查看', 'name' => 'sms/variable/index'],
                            ['type' => 'button', 'title' => '添加', 'name' => 'sms/variable/add'],
                            ['type' => 'button', 'title' => '编辑', 'name' => 'sms/variable/edit'],
                            ['type' => 'button', 'title' => '删除', 'name' => 'sms/variable/del'],
                        ]
                    ],
                    [
                        'type'      => 'menu',
                        'title'     => '短信模板管理',
                        'name'      => 'sms/template',
                        'path'      => 'sms/template',
                        'icon'      => 'el-icon-Document',
                        'menu_type' => 'tab',
                        'component' => '/src/views/backend/sms/template/index.vue',
                        'keepalive' => '1',
                        'remark'    => '不同服务商可能需要不同的模板ID，所以单个模板并不一定适用于所有服务商，若有轮询服务商发送的需求，多数情况需自行通过代码实现',
                        'children'  => [
                            ['type' => 'button', 'title' => '查看', 'name' => 'sms/template/index'],
                            ['type' => 'button', 'title' => '添加', 'name' => 'sms/template/add'],
                            ['type' => 'button', 'title' => '编辑', 'name' => 'sms/template/edit'],
                            ['type' => 'button', 'title' => '删除', 'name' => 'sms/template/del'],
                        ]
                    ]
                ]
            ]
        ];
        Menu::create($menu);
    }

    public function uninstall()
    {
        Menu::delete('sms', true);
    }

    public function enable()
    {
        Menu::enable('sms');
        Config::addQuickEntrance('短信配置', '/admin/sms/config');

        // 恢复短信配置
        if (Version::compare('v1.1.0', \think\facade\Config::get('buildadmin.version'))) {
            $config = Cache::pull('sms-module-config');
            if ($config) {
                @file_put_contents(config_path() . 'sms.php', $config);
            }
        }
    }

    public function disable()
    {
        Menu::disable('sms');
        Config::removeQuickEntrance('短信配置');

        // 备份短信配置
        if (Version::compare('v1.1.0', \think\facade\Config::get('buildadmin.version'))) {
            $config = @file_get_contents(config_path() . 'sms.php');
            if ($config) {
                Cache::set('sms-module-config', $config, 3600);
            }
        }
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
                path_transform('web\src\lang\pages\zh-cn\sms\config.ts'),
                path_transform('web\src\lang\pages\en\sms\config.ts'),
                path_transform('web\src\lang\pages\zh-cn\sms\template.ts'),
                path_transform('web\src\lang\pages\en\sms\template.ts'),
                path_transform('web\src\lang\pages\zh-cn\sms\variable.ts'),
                path_transform('web\src\lang\pages\en\sms\variable.ts'),
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