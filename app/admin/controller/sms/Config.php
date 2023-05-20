<?php

namespace app\admin\controller\sms;

use app\common\controller\Backend;
use think\facade\Config as sysConfig;

class Config extends Backend
{
    static $smsConfigFile = 'sms.php';

    public function getConfigKey()
    {
        $name = $this->request->get('name', '');
        if (!$name) {
            $this->error(__('Parameter error'));
        }
        if ($name == 'base') {
            $this->success('', [
                'timeout'  => sysConfig::get('sms.timeout'),
                'strategy' => sysConfig::get('sms.default.strategy'),
                'gateways' => sysConfig::get('sms.default.gateways'),
            ]);
        }
        $config = sysConfig::get('sms.gateways.' . $name);
        $this->success('', [
            'config' => $config,
        ]);
    }

    public function saveConfig()
    {
        $type = $this->request->get('type', '');
        $data = $this->request->post();
        if (!$type) {
            $this->error(__('Parameter error'));
        }
        $sms              = sysConfig::get('sms');
        $smsConfigPath    = config_path() . self::$smsConfigFile;
        $smsConfigContent = @file_get_contents($smsConfigPath);

        if ($type == 'base') {
            $timeout                    = (int)$data['timeout'];
            $strategy                   = $data['strategy'] == 'order' ? 'Overtrue\EasySms\Strategies\OrderStrategy' : 'Overtrue\EasySms\Strategies\RandomStrategy';
            $sms['default']['strategy'] = str_replace('\\', '\\\\', $sms['default']['strategy']);

            $gatewaysText = '[';
            if ($data['gateways']) {
                foreach ($data['gateways'] as $gateway) {
                    $gatewaysText .= "'$gateway', ";
                }
            }
            $gatewaysText = rtrim($gatewaysText, ', ');
            $gatewaysText .= ']';

            $smsConfigContent = preg_replace("/'timeout'(\s+)=>(\s+)'{$sms['timeout']}'/", "'timeout'\$1=>\$2'$timeout'", $smsConfigContent);
            $smsConfigContent = preg_replace("/'strategy'(\s+)=>(\s+)'{$sms['default']['strategy']}'/", "'strategy'\$1=>\$2'$strategy'", $smsConfigContent);
            $smsConfigContent = preg_replace("/'gateways'(\s+)=>(\s+)\[.*?]/", "'gateways'\$1=>\$2$gatewaysText", $smsConfigContent);
        } elseif ($type == 'gateway') {
            $name = $this->request->get('name', '');
            if (!isset($sms['gateways'][$name]) || !is_array($sms['gateways'][$name])) {
                $this->error(__('Parameter error'));
            }
            foreach ($sms['gateways'][$name] as $key => $item) {
                $smsConfigContent = preg_replace("/'$key'(\s+)=>(\s+)'$item',#$name#/", "'$key'\$1=>\$2'{$data[$key]}',#$name#", $smsConfigContent);
            }
        }
        $result = @file_put_contents($smsConfigPath, $smsConfigContent);
        if (!$result) {
            $this->error(__('Configuration write failed: %s', ['config/' . self::$smsConfigFile]));
        }
        $this->success();
    }

}