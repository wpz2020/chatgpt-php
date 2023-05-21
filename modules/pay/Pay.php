<?php

namespace modules\pay;

use app\common\model\Config;
use app\common\library\Menu;
use app\admin\model\MenuRule;

class Pay
{
    public function install()
    {
        $routineMenu = MenuRule::where('name', 'routine')->value('id');
        $menu        = [
            [
                'type'      => 'menu',
                'title'     => '支付配置',
                'name'      => 'pay/config',
                'path'      => 'pay/config',
                'icon'      => 'el-icon-Tools',
                'menu_type' => 'tab',
                'component' => '/src/views/backend/pay/config.vue',
                'keepalive' => '1',
                'pid'       => $routineMenu ?? 0,
                'children'  => [
                    ['type' => 'button', 'title' => '查看', 'name' => 'pay/config/getConfigKey'],
                    ['type' => 'button', 'title' => '修改配置', 'name' => 'pay/config/saveConfig'],
                ]
            ]
        ];
        Menu::create($menu);
    }

    public function uninstall()
    {
        Menu::delete('pay/config', true);
    }

    public function enable()
    {
        Menu::enable('pay/config');
        Config::addQuickEntrance('支付配置', '/admin/pay/config');
    }

    public function disable()
    {
        Menu::disable('pay/config');
        Config::removeQuickEntrance('支付配置');
    }
}