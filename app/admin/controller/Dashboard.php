<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use think\facade\Db;

class Dashboard extends Backend
{
    public function dashboard()
    {


        //会员总充值
        $userPay = Db::table('ba_pay')->where('status',1)->sum('money');


        //今日充值
        $day = date('Y-m-d').' 00:00:00';  
        $ntime = strtotime($day);
        $currentPay = Db::table('ba_pay')->where('status',1)->where('order_time','>', $ntime)->sum('money');

        //总会员
        $userCount = Db::table('ba_user')->where('status','enable')->count();

         //今日新增会员
        $CurrentUserCount = Db::table('ba_user')->where('status','enable')->where('createtime','>', $ntime)->count();


        //七天
        $day7 = [
            date("Y-m-d",strtotime("-6 day")),
            date("Y-m-d",strtotime("-5 day")),
            date("Y-m-d",strtotime("-4 day")),
            date("Y-m-d",strtotime("-3 day")),
            date("Y-m-d",strtotime("-2 day")),
            date("Y-m-d",strtotime("-1 day")),
            date("Y-m-d"),
        ];

        $day7_user = [0,0,0,0,0,0,0];
        $day7_pay = [0,0,0,0,0,0,0];

        $day8 = time() - 86400*8; 


        //最近7天的会员数据
        $day7_data_user = Db::table('ba_user')->where('status','enable')->where('createtime','>',  $day8)->select()->toArray();

        foreach($day7_data_user as $key => $value){
              $utime = date("Y-m-d",$value['createtime']);

              $r = array_search($utime, $day7);

              if($r){
                $day7_user[$r] = intval($day7_user[$r])+1; //加1
              }

        }
        //最近7天的收入数据
        $day7_data_pay = Db::table('ba_pay')->where('status',1)->where('order_time','>',  $day8)->select()->toArray();

        foreach($day7_data_pay as $key => $value){
              $utime = date("Y-m-d",$value['order_time']);

              $r = array_search($utime, $day7);

              if($r){
                $day7_pay[$r] = intval($day7_pay[$r])+1; //加1
              }

        }         


        $this->success('', [
            'userPay' =>$userPay,
            'currentPay' => $currentPay,
            'userCount' => $userCount,
            'CurrentUserCount'=>$CurrentUserCount,
            'remark' => get_route_remark(),
            'day7' =>  $day7,
            'day7_user' => $day7_user,
            'day7_pay' => $day7_pay,
        ]);
    }
}