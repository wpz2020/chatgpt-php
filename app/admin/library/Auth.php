<?php

namespace app\admin\library;

use ba\Random;
use think\Exception;
use think\facade\Db;
use think\facade\Config;
use app\admin\model\Admin;
use app\common\facade\Token;
use app\admin\model\AdminGroup;
use think\db\exception\DbException;
use think\db\exception\PDOException;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;

/**
 * 管理员权限类
 */
class Auth extends \ba\Auth
{
    /**
     * @var Auth 对象实例
     */
    protected static $instance;

    /**
     * @var bool 是否登录
     */
    protected $logined = false;
    /**
     * @var string 错误消息
     */
    protected $error = '';
    /**
     * @var Admin Model实例
     */
    protected $model = null;
    /**
     * @var string 令牌
     */
    protected $token = '';
    /**
     * @var string 刷新令牌
     */
    protected $refreshToken = '';
    /**
     * @var int 令牌默认有效期
     */
    protected $keeptime = 86400;
    /**
     * @var string[] 允许输出的字段
     */
    protected $allowFields = ['id', 'username', 'nickname', 'avatar', 'lastlogintime'];

    public function __construct(array $config = [])
    {
        parent::__construct($config);
    }

    /**
     * 魔术方法-管理员信息字段
     * @param $name
     * @return null|string 字段信息
     */
    public function __get($name)
    {
        return $this->model ? $this->model->$name : null;
    }

    /**
     * 初始化
     * @access public
     * @param array $options 参数
     * @return Auth
     */
    public static function instance(array $options = []): Auth
    {
        if (is_null(self::$instance)) {
            self::$instance = new static($options);
        }

        return self::$instance;
    }

    /**
     * 根据Token初始化管理员登录态
     * @param $token
     * @return bool
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function init($token): bool
    {
        if ($this->logined) {
            return true;
        }
        if ($this->error) {
            return false;
        }
        $tokenData = Token::get($token);
        if (!$tokenData) {
            return false;
        }
        $userId = intval($tokenData['user_id']);
        if ($userId > 0) {
            $this->model = Admin::where('id', $userId)->find();
            if (!$this->model) {
                $this->setError('Account not exist');
                return false;
            }
            if ($this->model['status'] != '1') {
                $this->setError('Account disabled');
                return false;
            }
            $this->token = $token;
            $this->loginSuccessful();
            return true;
        } else {
            $this->setError('Token login failed');
            return false;
        }
    }

    /**
     * 管理员登录
     * @param string $username
     * @param string $password
     * @param bool   $keeptime
     * @return bool
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function login(string $username, string $password, bool $keeptime = false): bool
    {
        $this->model = Admin::where('username', $username)->find();
        if (!$this->model) {
            $this->setError('Username is incorrect');
            return false;
        }
        if ($this->model['status'] == '0') {
            $this->setError('Account disabled');
            return false;
        }
        $adminLoginRetry = Config::get('buildadmin.admin_login_retry');
        if ($adminLoginRetry && $this->model->loginfailure >= $adminLoginRetry && time() - $this->model->getData('lastlogintime') < 86400) {
            $this->setError('Please try again after 1 day');
            return false;
        }
        if ($this->model->password != encrypt_password($password, $this->model->salt)) {
            $this->loginFailed();
            $this->setError('Password is incorrect');
            return false;
        }
        if (Config::get('buildadmin.admin_sso')) {
            Token::clear('admin', $this->model->id);
            Token::clear('admin-refresh', $this->model->id);
        }

        if ($keeptime) {
            $this->setRefreshToken(2592000);
        }
        $this->loginSuccessful();
        return true;
    }

    /**
     * 设置刷新Token
     * @param int $keeptime
     */
    public function setRefreshToken(int $keeptime = 0)
    {
        $this->refreshToken = Random::uuid();
        Token::set($this->refreshToken, 'admin-refresh', $this->model->id, $keeptime);
    }

    /**
     * 管理员登录成功
     * @return bool
     */
    public function loginSuccessful(): bool
    {
        if (!$this->model) {
            return false;
        }
        Db::startTrans();
        try {
            $this->model->loginfailure  = 0;
            $this->model->lastlogintime = time();
            $this->model->lastloginip   = request()->ip();
            $this->model->save();
            $this->logined = true;

            if (!$this->token) {
                $this->token = Random::uuid();
                Token::set($this->token, 'admin', $this->model->id, $this->keeptime);
            }
            Db::commit();
        } catch (PDOException|Exception $e) {
            Db::rollback();
            $this->setError($e->getMessage());
            return false;
        }
        return true;
    }

    /**
     * 管理员登录失败
     * @return bool
     */
    public function loginFailed(): bool
    {
        if (!$this->model) {
            return false;
        }
        Db::startTrans();
        try {
            $this->model->loginfailure++;
            $this->model->lastlogintime = time();
            $this->model->lastloginip   = request()->ip();
            $this->model->save();

            $this->token   = '';
            $this->model   = null;
            $this->logined = false;
            Db::commit();
        } catch (PDOException|Exception $e) {
            Db::rollback();
            $this->setError($e->getMessage());
            return false;
        }
        return true;
    }

    /**
     * 退出登录
     * @return bool
     */
    public function logout(): bool
    {
        if (!$this->logined) {
            $this->setError('You are not logged in');
            return false;
        }
        $this->logined = false;
        Token::delete($this->token);
        $this->token = '';
        return true;
    }

    /**
     * 是否登录
     * @return bool
     */
    public function isLogin(): bool
    {
        return $this->logined;
    }

    /**
     * 获取管理员模型
     * @return Admin
     */
    public function getAdmin(): Admin
    {
        return $this->model;
    }

    /**
     * 获取管理员Token
     * @return string
     */
    public function getToken(): string
    {
        return $this->token;
    }

    /**
     * 获取管理员刷新Token
     * @return string
     */
    public function getRefreshToken(): string
    {
        return $this->refreshToken;
    }

    /**
     * 获取管理员信息 - 只输出允许输出的字段
     * @return array
     */
    public function getInfo(): array
    {
        if (!$this->model) {
            return [];
        }
        $info                 = $this->model->toArray();
        $info                 = array_intersect_key($info, array_flip($this->getAllowFields()));
        $info['token']        = $this->getToken();
        $info['refreshToken'] = $this->getRefreshToken();
        return $info;
    }

    /**
     * 获取允许输出字段
     * @return string[]
     */
    public function getAllowFields(): array
    {
        return $this->allowFields;
    }

    /**
     * 设置允许输出字段
     * @param $fields
     */
    public function setAllowFields($fields)
    {
        $this->allowFields = $fields;
    }

    /**
     * 设置Token有效期
     * @param int $keeptime
     */
    public function setKeeptime(int $keeptime = 0)
    {
        $this->keeptime = $keeptime;
    }

    public function check(string $name, int $uid = 0, string $relation = 'or', string $mode = 'url'): bool
    {
        return parent::check($name, $uid ?: $this->id, $relation, $mode);
    }

    public function getGroups(int $uid = 0): array
    {
        return parent::getGroups($uid ?: $this->id);
    }

    public function getRuleList(int $uid = 0): array
    {
        return parent::getRuleList($uid ?: $this->id);
    }

    public function getRuleIds(int $uid = 0): array
    {
        return parent::getRuleIds($uid ?: $this->id);
    }

    public function getMenus(int $uid = 0): array
    {
        return parent::getMenus($uid ?: $this->id);
    }

    public function isSuperAdmin(): bool
    {
        return in_array('*', $this->getRuleIds());
    }

    /**
     * 获取管理员所在分组的所有子级分组
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getAdminChildGroups(): array
    {
        $groupIds = Db::name('admin_group_access')
            ->where('uid', $this->id)
            ->select();
        $children = [];
        foreach ($groupIds as $group) {
            $this->getGroupChildGroups($group['group_id'], $children);
        }
        return array_unique($children);
    }

    public function getGroupChildGroups($groupId, &$children)
    {
        $childrenTemp = AdminGroup::where('pid', $groupId)->where('status', '1')->select();
        foreach ($childrenTemp as $item) {
            $children[] = $item['id'];
            $this->getGroupChildGroups($item['id'], $children);
        }
    }

    /**
     * 获取分组内的管理员
     * @param array $groups
     * @return array 管理员数组
     */
    public function getGroupAdmins(array $groups): array
    {
        return Db::name('admin_group_access')
            ->where('group_id', 'in', $groups)
            ->column('uid');
    }

    /**
     * 获取拥有"所有权限"的分组
     * @param string $dataLimit 数据权限
     * @return array 分组数组
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getAllAuthGroups(string $dataLimit): array
    {
        // 当前管理员拥有的权限
        $rules         = $this->getRuleIds();
        $allAuthGroups = [];
        $groups        = AdminGroup::where('status', '1')->select();
        foreach ($groups as $group) {
            if ($group['rules'] == '*') {
                continue;
            }
            $groupRules = explode(',', $group['rules']);

            // 及时break, array_diff 等没有 in_array 快
            $all = true;
            foreach ($groupRules as $groupRule) {
                if (!in_array($groupRule, $rules)) {
                    $all = false;
                    break;
                }
            }
            if ($all) {
                if ($dataLimit == 'allAuth' || ($dataLimit == 'allAuthAndOthers' && array_diff($rules, $groupRules))) {
                    $allAuthGroups[] = $group['id'];
                }
            }
        }
        return $allAuthGroups;
    }

    /**
     * 设置错误消息
     * @param $error
     * @return $this
     */
    public function setError($error): Auth
    {
        $this->error = $error;
        return $this;
    }

    /**
     * 获取错误消息
     * @return float|int|string
     */
    public function getError()
    {
        return $this->error ? __($this->error) : '';
    }
}