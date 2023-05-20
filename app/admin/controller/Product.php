<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * 套餐设置
 *
 */
class Product extends Backend
{
    /**
     * Product模型对象
     * @var \app\admin\model\Product
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Product;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}