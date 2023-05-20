<?php

namespace pay;

class PayConfig
{

    /***
     * 获取支付宝配置
     */
    static function getAliConfig()
    {
        $ali    = config('pay.ali');
        $config = [
            'app_id'         => $ali['app_id'],                  //应用app_id
            'notify_url'     => $ali['notify_url'],              //支付回调地址
            'return_url'     => $ali['return_url'],              //支付跳转地址
            'ali_public_key' => $ali['ali_public_key'],          //支付宝公钥
            'private_key'    => $ali['private_key'],             //应用私钥
            'log'            => [
                'file'     => root_path() . $ali['log_url'],     //日志存储位置
                'level'    => $ali['log_level'],               // 建议生产环境等级调整为 info，开发环境为 debug
                'type'     => 'daily',                         // optional, 可选 daily. single
                'max_file' => 30,                              // optional, 当 type 为 daily 时有效，默认 30 天
            ],
            'http'           => [
                'timeout'         => 10,
                'connect_timeout' => 10,
            ]
        ];
        if (intval($ali['mode']) == 0) {
            $config['mode'] = 'dev';
        } elseif (intval($ali['mode']) == 2) {
            $config['mode'] = 'service';
            $config['pid']  = $ali['pid'];
        }
        return $config;
    }

    /***
     * 获取微信配置
     */
    static function getWxConfig()
    {

        $wx     = config('pay.wx');
        $config = [
            'appid'          => $wx['appid'],                  //APP的AppID
            'miniapp_id'     => $wx['miniapp_id'],             //小程序的AppID
            'app_id'         => $wx['app_id'],                 //公众号的AppID
            'mch_id'         => $wx['mch_id'],                 //商户号
            'key'            => $wx['key'],                    //商户秘钥
            'cert_client'    => root_path() . $wx['cert_client'],//支付证书 pem
            'cert_key'       => root_path() . $wx['cert_key'],   //支付证书 pem
            'sub_mch_id'     => $wx['sub_mch_id'],             //服务商子商户号
            'sub_appid'      => $wx['sub_appid'],              //子商户的APP的AppID
            'sub_miniapp_id' => $wx['sub_miniapp_id'],         //子商户的小程序的AppID
            'sub_app_id'     => $wx['sub_app_id'],             //子商户的公众号的AppID
            'notify_url'     => $wx['notify_url'],             //支付回调地址
            'log'            => [
                'file'     => root_path() . $wx['log_url'],     //日志存储位置
                'level'    => $wx['log_level'],               // 建议生产环境等级调整为 info，开发环境为 debug
                'type'     => 'daily',                        // optional, 可选 daily. single
                'max_file' => 30,                             // optional, 当 type 为 daily 时有效，默认 30 天
            ],
            'http'           => [
                'timeout'         => 10,
                'connect_timeout' => 10,
            ]
        ];

        if (intval($wx['mode']) == 0) {
            $config['mode'] = 'dev';
        } elseif (intval($wx['mode']) == 2) {
            $config['mode'] = 'service';
        }

        return $config;
    }
}