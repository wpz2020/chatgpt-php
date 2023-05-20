<?php

namespace app\common\controller;

use think\facade\Event;
use think\facade\Cookie;
use app\common\library\Auth;
use think\exception\HttpResponseException;

class Frontend extends Api
{
    /**
     * 无需登录的方法
     * 访问本控制器的此方法，无需会员登录
     */
    protected $noNeedLogin = [];

    /**
     * 无需鉴权的方法
     */
    protected $noNeedPermission = [];

    /**
     * 权限类实例
     * @var Auth
     */
    protected $auth = null;

    public function initialize()
    {
        parent::initialize();
        $this->auth = Auth::instance();
        $routePath  = $this->app->request->controllerPath . '/' . $this->request->action(true);
        $token      = $this->request->server('HTTP_BA_USER_TOKEN', $this->request->request('ba-user-token', Cookie::get('ba-user-token') ?: false));
        if (!action_in_arr($this->noNeedLogin)) {
            $this->auth->init($token);
            if (!$this->auth->isLogin()) {
                $this->error(__('Please login first'), [
                    'routePath' => '/user/login'
                ], 302);
            }
            if (!action_in_arr($this->noNeedPermission)) {
                if (!$this->auth->check($routePath)) {
                    $this->error(__('You have no permission'), [], 401);
                }
            }
        } elseif ($token) {
            try {
                $this->auth->init($token);
            } catch (HttpResponseException $e) {
            }
        }

        // 会员验权和登录标签位
        Event::trigger('frontendInit', $this->auth);
    }
}