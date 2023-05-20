<?php
// +----------------------------------------------------------------------
// | 短信配置
// +----------------------------------------------------------------------

return [
    // 发送短信HTTP请求的超时时间（秒）
    'timeout'  => '100',
    // 默认发送配置
    'default'  => [
        // 网关调用策略，默认：顺序调用
        'strategy' => 'Overtrue\EasySms\Strategies\OrderStrategy',
        // 默认可用的发送网关
        'gateways' => ['aliyun'],
    ],
    // 可用的网关配置
    'gateways' => [
        // 配置项后面的注释用于动态修改配置时定位
        'aliyun'  => [
            'access_key_id'     => '',#aliyun#
            'access_key_secret' => '',#aliyun#
            'sign_name'         => '',#aliyun#
        ],
        'qcloud'  => [
            'sdk_app_id' => '',#qcloud#
            'secret_id'  => '',#qcloud#
            'secret_key' => '',#qcloud#
            'sign_name'  => '',#qcloud#
        ],
        'qiniu'   => [
            'secret_key' => '',#qiniu#
            'access_key' => '',#qiniu#
        ],
        'yunpian' => [
            'api_key'   => '',#yunpian#
            'signature' => '【默认签名】',#yunpian#
        ],
    ],
];