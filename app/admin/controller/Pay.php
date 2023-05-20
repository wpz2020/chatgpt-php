<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * 订单管理
 *
 */
class Pay extends Backend
{
    /**
     * Pay模型对象
     * @var \app\admin\model\Pay
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Pay;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}