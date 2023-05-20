<?php

namespace app\admin\controller\pay;

use pay\PayConfig;
use think\facade\Config as sysConfig;
use app\common\controller\Backend;
use Yansongda\Pay\Pay;

class Config extends Backend
{
    static $payConfigFile = 'pay.php';

    public function getConfigKey()
    {
        //支付宝
        $ali = sysConfig::get('pay.ali');
        //微信
        $wx = sysConfig::get('pay.wx');

        $this->success('', [
            'ali' => $ali,
            'wx'  => $wx,
        ]);
    }

    public function saveConfig()
    {
        $type = $this->request->get('type', '');
        $data = $this->request->post();
        if (!$type) {
            $this->error(__('Parameter error'));
        }
        $pay              = sysConfig::get('pay');
        $payConfigPath    = config_path() . self::$payConfigFile;
        $payConfigContent = @file_get_contents($payConfigPath);

        if (in_array($type, ['ali', 'wx'])) {
            foreach ($pay[$type] as $key => $item) {
                $item             = str_replace('/', '\/', $item);
                $payConfigContent = preg_replace("/'$key'(\s+)=>(\s+)'$item',#$type#/", "'$key'\$1=>\$2'{$data[$key]}',#$type#", $payConfigContent);
            }
        }

        $result = @file_put_contents($payConfigPath, $payConfigContent);
        if (!$result) {
            $this->error(__('Configuration write failed: %s', ['config/' . self::$payConfigFile]));
        }
        $this->success();
    }

    /**
     * 支付宝支付测试
     */
    public function ali_pay()
    {

        $config = PayConfig::getAliConfig();

        $order = [
            'out_trade_no' => time(),
            'total_amount' => '0.01',
            'subject'      => 'test subject - 测试',
        ];
        $res   = Pay::alipay($config)->scan($order);
        var_dump($res);
        die;
    }

    /**
     * 微信支付测试
     */
    public function wx_pay()
    {

        $config = PayConfig::getWxConfig();

        $order = [
            'out_trade_no' => time(),
            'total_fee'    => 1,
            'body'         => 'test subject - 测试',
            'notify_url'   => request()->domain() . 'xxx'
        ];
        $res   = Pay::wechat($config)->scan($order);
        var_dump($res);
        die;
    }
}