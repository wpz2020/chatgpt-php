<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;

class Index extends Frontend
{
    protected $noNeedLogin = ['index'];

    public function initialize()
    {
        parent::initialize();
    }

    public function index()
    {
        $arr = get_sys_config();

        //var_dump($arr['index_content']);

     
        $this->success('', [
            'site'             => [
                'siteName'     => get_sys_config('site_name'),
                'recordNumber' => get_sys_config('record_number'),
                'version'      => get_sys_config('version'),
                'cdnUrl'       => full_url(),
                'upload'       => get_upload_config(),
                'openCheck'    => get_sys_config('open_check'),
                'loginCheck'   => get_sys_config('login_check'),
                'youkeNum'   => intval(get_sys_config('youke_num')),
                'indexContent'   => $arr['index_content'],
            ],
            'openMemberCenter' => Config::get('buildadmin.open_member_center'),
        ]);
    }
}