<?php

namespace app\admin\controller\sms;

use app\common\controller\Backend;

/**
 * 短信模板管理
 *
 */
class Template extends Backend
{
    /**
     * Template模型对象
     * @var \app\admin\model\sms\Template
     */
    protected $model = null;

    protected $quickSearchField = ['title', 'code'];

    protected $defaultSortField = 'id,desc';

    protected $preExcludeFields = ['createtime', 'updatetime'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\sms\Template;
    }

    public function add()
    {
        $this->request->filter('trim,htmlspecialchars');
        parent::add();
    }

    public function edit($id = null)
    {
        $this->request->filter('trim,htmlspecialchars');
        parent::edit($id);
    }

    /**
     * 查看
     */
    public function index()
    {
        // 设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);

        // 如果是select则转发到select方法,若select未重写,其实还是继续执行index
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);

        $this->success('', [
            'list'   => $res->items(),
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }
}