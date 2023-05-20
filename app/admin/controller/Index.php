<?php
declare (strict_types=1);

namespace app\admin\controller;

use app\common\facade\Token;
use ba\Captcha;
use think\facade\Config;
use think\facade\Validate;
use app\common\controller\Backend;
use app\admin\model\AdminLog;

class Index extends Backend
{
    protected $noNeedLogin      = ['logout', 'login'];
    protected $noNeedPermission = ['index'];

    public function index()
    {
        $adminInfo          = $this->auth->getInfo();
        $adminInfo['super'] = $this->auth->isSuperAdmin();
        unset($adminInfo['token'], $adminInfo['refreshToken']);

        $menus = $this->auth->getMenus();
        if (!$menus) {
            $this->error(__('No background menu, please contact super administrator!'));
        }
        $this->success('', [
            'adminInfo'  => $adminInfo,
            'menus'      => $menus,
            'siteConfig' => [
                'siteName' => get_sys_config('site_name'),
                'version'  => get_sys_config('version'),
                'cdnUrl'   => full_url(),
                'apiUrl'   => Config::get('buildadmin.api_url'),
                'upload'   => get_upload_config(),
            ],
            'terminal'   => [
                'installServicePort' => Config::get('terminal.install_service_port'),
                'npmPackageManager'  => Config::get('terminal.npm_package_manager'),
            ]
        ]);
    }

    public function login()
    {
        // 检查登录态
        if ($this->auth->isLogin()) {
            $this->success(__('You have already logged in. There is no need to log in again~'), [
                'routePath' => '/admin'
            ], 302);
        }

        $captchaSwitch = Config::get('buildadmin.admin_login_captcha');

        // 检查提交
        if ($this->request->isPost()) {
            $username = $this->request->post('username');
            $password = $this->request->post('password');
            $keep     = $this->request->post('keep');

            $rule = [
                'username|' . __('Username') => 'require|length:3,30',
                'password|' . __('Password') => 'require|regex:^(?!.*[&<>"\'\n\r]).{6,32}$',
            ];
            $data = [
                'username' => $username,
                'password' => $password,
            ];
            if ($captchaSwitch) {
                $rule['captcha|' . __('Captcha')]     = 'require|length:4,6';
                $rule['captchaId|' . __('CaptchaId')] = 'require';

                $data['captcha']   = $this->request->post('captcha');
                $data['captchaId'] = $this->request->post('captcha_id');
            }
            $validate = Validate::rule($rule);
            if (!$validate->check($data)) {
                $this->error($validate->getError());
            }

            if ($captchaSwitch) {
                $captchaObj = new Captcha();
                if (!$captchaObj->check($data['captcha'], $data['captchaId'])) {
                    $this->error(__('Please enter the correct verification code'));
                }
            }

            AdminLog::setTitle(__('Login'));

            $res = $this->auth->login($username, $password, (bool)$keep);
            if ($res === true) {
                $this->success(__('Login succeeded!'), [
                    'userInfo'  => $this->auth->getInfo(),
                    'routePath' => '/admin'
                ]);
            } else {
                $msg = $this->auth->getError();
                $msg = $msg ?: __('Incorrect user name or password!');
                $this->error($msg);
            }
        }

        $this->success('', [
            'captcha' => $captchaSwitch
        ]);
    }

    public function logout()
    {
        if ($this->request->isPost()) {
            $refreshToken = $this->request->post('refresh_token', '');
            if ($refreshToken) Token::delete((string)$refreshToken);
            $this->auth->logout();
            $this->success();
        }
    }
}
