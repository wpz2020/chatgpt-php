<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * 问题列管理
 *
 */
class Questions extends Backend
{
    /**
     * Questions模型对象
     * @var \app\admin\model\Questions
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Questions;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}