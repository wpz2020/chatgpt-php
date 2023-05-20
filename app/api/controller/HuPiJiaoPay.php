<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;
use Xunhu\Hupijiao\Hupijiao;
use app\common\model\PayModel;
use app\common\model\User;



class HuPiJiaoPay extends Frontend
{
    protected $noNeedLogin = ['index','notify','test'];

    public function initialize()
    {
        parent::initialize();
    }

    public function index()
    {
        if(!$this->request->isPost()){
            $this->success('非法请求', '',0);
        }

        $product = $this->request->post('product');
        $userinfo = $this->request->post('userinfo');

        $orderid = (string)date('YmdHis')+(string)random_int(100,999); //订单id

        $payinfo = $this->save($product, $userinfo, $orderid);

        // var_dump($payinfo);
        // exit;

        if($payinfo['code']){
            $re = $this->pay($product['price'], $product['name'], $orderid);
            $this->success('', $re);
        }else{
            $this->success('支付失败，请重试', '',0);
        } 
    }

    public function test(){


        echo "123123";
    }

    //支付回调地址
    public function notify(){
        if(!$this->request->isPost()){
            $this->success('非法请求', '',0);
        }
        
        $data = [
            'trade_order_id' => $this->request->post('trade_order_id'),
            'total_fee'      => $this->request->post('total_fee'),
            'transaction_id' => $this->request->post('transaction_id'),
            'open_order_id'  => $this->request->post('open_order_id'),
            'order_title'    => $this->request->post('order_title'),
            'status'         => $this->request->post('status'),
            'appid'          => $this->request->post('appid'),
            'time'           => $this->request->post('time'),
            'nonce_str'      => $this->request->post('nonce_str'),
            'hash'           => $this->request->post('product'),
        ];

        $md = PayModel::where('orderid', $data['trade_order_id'])->find();

        // echo PayModel::getLastsql();
        // var_dump($data);
        // var_dump($md);exit;

        if($md->status != 1){
          
            $md->status = 1;
            $md->remark = json_encode($data);
    
            if($md->save()){
                  //更新会员信息
                  $u = User::where('id',$md['uid'])->find();
                  $u-> start_time = time()-10;
                  $u-> end_time = time()+86400*$md['day'];
                  $u->num = $u['num']+ $md['num'];
                  $u->product_id = $md['product_id'];
                  $u->save();
            }
        }


        echo 'success';
    }


    //保存数据
    public function  save($product, $userinfo, $orderid){

         $data = [
            'orderid' => $orderid,
            'product_id' => $product['id'],
            'product_name' => $product['name'],
            'uid' => $userinfo['id'],
            'username' => $userinfo['username'],
            'money' => $product['price'],
            'day' => $product['expire'],
            'num' => $product['num'],
            'order_time' => time(),
            'status' => 0,
         ];

         $md = new PayModel();
         $re = $md->save($data);
         $data = [
            'code' => $re,
            'id' => $md->id
         ];

         return $data;
    }


   

    public function pay($price,$title, $orderid){

        $config = [
            'app_id'       => get_sys_config('appid'),   // 配置商户号
            'app_secret'   => get_sys_config('miyao'),   // 配置密钥
            'api_url'      => get_sys_config('wangguan')
        ];

        $data = [
           "version" => '1.0',
           "appid"   => get_sys_config('appid'),
           "trade_order_id" => $orderid,        
           "total_fee" => $price,        
           "title" => $title,        
           "time" => time(),        
           "nonce_str" => md5((string)time()+(string)random_int(100,999)),           
        ];

        //var_dump('data=',$data);

        // echo "发起支付了";

        // 初始化
        $Hupijiao=new Hupijiao($config);
      
        //回调地址，服务器post发送成功支付参数到此地址
        $data['notify_url']= get_sys_config('huitiao_url');
        //异步跳转地址，支付成功后跳转地址
        $data['return_url']= get_sys_config('pay_ok_url');
        $response=$Hupijiao->request('wx_native',$data);
        return $response;
    }
}