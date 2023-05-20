<?php

namespace app\admin\controller;


use app\common\controller\Backend;
use think\facade\Db;
/**
 * 卡密列管理
 *
 */
class Carmi extends Backend
{
    /**
     * Carmi模型对象
     * @var \app\admin\model\Carmi
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id'];

    protected $withJoinTable = ['user'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Carmi;
    }

    /**
     * 查看
     */
    public function index()
    {
        $this->request->filter(['strip_tags', 'trim']);
        // 如果是select则转发到select方法,若select未重写,其实还是继续执行index
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->withJoin($this->withJoinTable, $this->withJoinType)
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);
        $res->visible(['user' => ['username']]);

        $this->success('', [
            'list'   => $res->items(),
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }

    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */

     public function pladd(){

        if($this->request->isPost()){

            $addnum = $this->request->post('addnum');
            $num = $this->request->post('num');
            $day = $this->request->post('day');

            $list = [];

            $carmiSetting = Db::table('ba_config')->where('name','carmi_chat_num')->find();

            $configNum = intval( $carmiSetting['value']);// 设置的总次数


            for($index = 0; $index < $addnum; $index++){
    
                 array_push($list, [
                     'key' => $this->creatNumcode(),
                     'num' => $num,
                     'day' => $day,
                     'status' => 0,
                     'add_time'=>time(),
                 ]);
            }

            $znum = $addnum*$num;

            if( $configNum < $znum){
                $this->error('总次数不足，请联系超级管理员处理');
            }

            $synum = $configNum - ($addnum*$num);

            $this->model->saveAll($list);

            Db::table('ba_config')->where('name','carmi_chat_num')->update([
                'value'=> $synum,
            ]);

            $this->success('新增成功');
        }

    }

    //卡密 随机数字
    public function creatNumcode(){

        $n1 = strval(rand(100, 999));
        $n3 = strval(rand(100, 999));
        $n2 = date("md",time());
        
        return $n1.$n2.$n3;
    }


    public function createInvitecode() {
        // 生成字母和数字组成的6位字符串
    
        $str = range('A', 'Z');
        // 去除大写的O，以防止与0混淆 
        unset($str[array_search('O', $str)]);
        $arr = array_merge(range(0, 9), $str);
        shuffle($arr);
        $invitecode = '';
        $arr_len = count($arr);
        for ($i = 0; $i < 6; $i++) {
            $rand = mt_rand(0, $arr_len - 1);
            $invitecode .= $arr[$rand];
        }
    
        return $invitecode;
    
    }
}