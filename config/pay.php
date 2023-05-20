<?php
// +----------------------------------------------------------------------
// | 支付配置
// +----------------------------------------------------------------------

return [
    // 支付宝配置
    'ali' => [
        'app_id'         => '11111',#ali#
        'notify_url'     => '',#ali#
        'return_url'     => '',#ali#
        'ali_public_key' => '',#ali#
        'private_key'    => '',#ali#
        'log_url'        => 'runtime/pay/alipay.log',#ali#
        'log_level'      => 'debug',#ali#
        'mode'           => '0',#ali#
        'pid'            => '',#ali#
    ],
    // 微信配置
    'wx'  => [
        'mch_id'         => '',#wx#
        'key'            => '',#wx#
        'appid'          => '',#wx#
        'app_id'         => '',#wx#
        'miniapp_id'     => '',#wx#
        'notify_url'     => '',#wx#
        'log_url'        => 'runtime/pay/wxpay.log',#wx#
        'log_level'      => 'debug',#wx#
        'mode'           => '0',#wx#
        'cert_client'    => 'public/pem/apiclient_cert.pem',#wx#
        'cert_key'       => 'public/pem/apiclient_key.pem',#wx#
        'sub_mch_id'     => '',#wx#
        'sub_appid'      => '',#wx#
        'sub_miniapp_id' => '',#wx#
        'sub_app_id'     => '',#wx#
    ],
];