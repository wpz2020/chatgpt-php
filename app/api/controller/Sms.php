<?php

namespace app\api\controller;

use ba\Captcha;
use ba\ClickCaptcha;
use think\Exception;
use app\common\model\User;
use modules\sms\Sms as smsLib;
use app\common\controller\Frontend;
use think\facade\Event;
use think\facade\Validate;

class Sms extends Frontend
{
    protected $noNeedLogin = ['send'];

    public function initialize()
    {
        parent::initialize();
    }

    public function send()
    {
        $params   = $this->request->post(['mobile', 'template_code', 'captchaId', 'captchaInfo']);
        $validate = Validate::rule([
            'mobile'        => 'require|mobile',
            'template_code' => 'require',
            'captchaId'     => 'false',
            'captchaInfo'   => 'false'
        ])->message([
            'mobile'        => 'Mobile format error',
            'template_code' => 'Parameter error',
            'captchaId'     => 'Captcha error',
            'captchaInfo'   => 'Captcha error'
        ]);
        if (!$validate->check($params)) {
            $this->error(__($validate->getError()));
        }

        // // 检查验证码
        // $captchaObj   = new Captcha();
        // $clickCaptcha = new ClickCaptcha();
        // if (!$clickCaptcha->check($params['captchaId'], $params['captchaInfo'])) {
        //     $this->error(__('Captcha error'));
        // }

        // // 检查频繁发送
        // $captcha = $captchaObj->getCaptchaData($params['mobile'] . $params['template_code']);
        // if ($captcha && time() - $captcha['createtime'] < 60) {
        //     $this->error(__('Frequent SMS sending'));
        // }

        // 检查号码占用
        $userInfo = User::where('mobile', $params['mobile'])->find();
        if ($params['template_code'] == 'user_register' && $userInfo) {
            $this->error(__('Mobile number has been registered, please log in directly'));
        } elseif ($params['template_code'] == 'user_change_mobile' && $userInfo) {
            $this->error(__('The mobile number has been occupied'));
        } elseif (in_array($params['template_code'], ['user_retrieve_pwd', 'user_mobile_verify']) && !$userInfo) {
            $this->error(__('Mobile number not registered'));
        }

        // 通过手机号验证账户
        if ($params['template_code'] == 'user_mobile_verify') {
            if (!$this->auth->isLogin()) {
                $this->error(__('Please login first'));
            }
            if ($this->auth->mobile != $params['mobile']) {
                $this->error(__('Please use the account registration mobile to send the verification code'));
            }
            // 验证账户密码
            $password = $this->request->post('password');
            if ($this->auth->password != encrypt_password($password, $this->auth->salt)) {
                $this->error(__('Password error'));
            }
        }

        // 监听短信模板分析完成
        Event::listen('TemplateAnalysisAfter', function ($templateData) use ($params) {
            // 存储验证码
            if (array_key_exists('code', $templateData['variables'])) {
                (new Captcha())->create($params['mobile'] . $params['template_code'], $templateData['variables']['code']);
            }
            if (array_key_exists('alnum', $templateData['variables'])) {
                (new Captcha())->create($params['mobile'] . $params['template_code'], $templateData['variables']['alnum']);
            }
        });

        try {
            //var_dump("12312313==",$params['template_code'], $params['mobile']);
            smsLib::send($params['template_code'], $params['mobile']);
        } catch (Exception $e) {
            if (!env('APP_DEBUG', false)) {
                $this->error(__('Failed to send SMS. Please contact the website administrator'));
            } else {
                // throw new Exception($e->getMessage());
                $this->error(__($e->getMessage()));
            }
        }
        $this->success(__('SMS sent successfully'));
    }
}