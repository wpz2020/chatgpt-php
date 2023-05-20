<?php

namespace app\api\controller;

use ba\Captcha;
use think\facade\Config;
use app\common\facade\Token;
use app\common\controller\Frontend;
use think\exception\ValidateException;
use app\api\validate\User as UserValidate;
use think\facade\Db;

class User extends Frontend
{
    protected $noNeedLogin = ['checkIn', 'logout'];

    protected $noNeedPermission = ['index'];

    public function initialize()
    {
        parent::initialize();
    }

    public function index()
    {
        $userInfo = $this->auth->getUserInfo();
        $menus    = $this->auth->getMenus();
        if (!$menus) {
            $this->error(__('No action available, please contact the administrator~'));
        }

        $userMenus = [];
        foreach ($menus as $menu) {
            if ($menu['type'] == 'menu_dir') {
                $userMenus[] = $menu;
            }
        }
        $this->success('', [
            'userInfo' => $userInfo,
            'menus'    => $userMenus,
        ]);
    }

    /**
     * 会员签入(登录和注册)
     */
    public function checkIn()
    {
        $openMemberCenter = Config::get('buildadmin.open_member_center');
        if (!$openMemberCenter) {
            $this->error(__('Member center disabled'));
        }
     
        // 检查登录态
        if ($this->auth->isLogin()) {
            $this->success(__('You have already logged in. There is no need to log in again~'), [
                'routePath' => '/user'
            ], 302);
        }

        if ($this->request->isPost()) {
            $params = $this->request->post(['tab', 'email', 'mobile', 'username', 'password', 'keep', 'captcha', 'captchaId', 'registerType']);
            if ($params['tab'] != 'login' && $params['tab'] != 'register') {
                $this->error(__('Unknown operation'));
            }

            $validate = new UserValidate();
            $login_check = get_sys_config('login_check'); //获取系统设置
            $open_check  = get_sys_config('open_check'); //获取系统设置

            try {
             
                if ($params['tab'] == 'login' && $login_check == 'true'){
                    $validate->scene($params['tab'])->check($params);
                }
                if ($params['tab'] == 'register' && $open_check == 'true'){
                    $validate->scene($params['tab'])->check($params);
                }


            } catch (ValidateException $e) {
                $this->error($e->getMessage());
            }
            $captchaObj = new Captcha();

            if ($params['tab'] == 'login') {
              
                if ( $login_check == 'true' && !$captchaObj->check($params['captcha'], $params['captchaId'])) {
                    $this->error(__('Please enter the correct verification code'));
                }
                $res = $this->auth->login($params['mobile'], $params['password'], (bool)$params['keep']);
                // var_dump( $res);
            } elseif ($params['tab'] == 'register') {
                
                // var_dump($open_check);
                

                if ($open_check == 'true' && !$captchaObj->check($params['captcha'], ($params['registerType'] == 'email' ? $params['email'] : $params['mobile']) . 'user_register')) {
                    $this->error(__('Please enter the correct verification code'));
                }
                $res = $this->auth->register($params['username'], $params['password'], $params['mobile'], $params['email']);

               
            }

            if (isset($res) && $res === true) {
                $this->success(__('Login succeeded!'), [
                    'userInfo'  => $this->auth->getUserInfo(),
                    'routePath' => '/user'
                ]);
            } else {
                $msg = $this->auth->getError();
                $msg = $msg ?: __('Check in failed, please try again or contact the website administrator~');
                $this->error($msg);
            }
        }

        $this->success('', [
            'accountVerificationType' => get_account_verification_type()
        ]);
    }


    //设置num
    public function setNnm(){


        if ($this->request->isPost()) {
            $id = $this->request->post('id');
            $num = $this->request->post('num');
           
            Db::name('user')->where('id',$id)->update(['num'=> $num]);

        }
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