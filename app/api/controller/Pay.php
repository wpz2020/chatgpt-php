<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;
use app\common\model\PayModel;
use app\common\model\User;
use think\facade\Db;


class Pay extends Frontend
{
    protected $noNeedLogin = [];

    public function initialize()
    {
        parent::initialize();
    }

   
    //列表
    public function list()
    {
        $limit         = $this->request->request('limit');
        $payModel = new PayModel();
        $res           = $payModel->where('uid', $this->auth->id)
            ->order('order_time desc')
            ->paginate($limit);

        $this->success('', [
            'list'  => $res->items(),
            'total' => $res->total(),
        ]);
    }

}