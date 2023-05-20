<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;
use think\worker\Server;

class Balance extends Frontend
{
    protected $noNeedLogin = ['index', 'search'];
  

    public function initialize()
    {
       
        parent::initialize();
    }

    public function index()
    {
        $this->success('', [
            'openMemberCenter' => "niubi",
        ]);
    }

    public function search()
    {

        $parm = $this->request->param('key');
        $this->success('', [
            'openMemberCenter' => $parm,
        ]);
    }
}