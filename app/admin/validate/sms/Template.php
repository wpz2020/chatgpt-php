<?php

namespace app\admin\validate\sms;

use think\Validate;

class Template extends Validate
{
    protected $failException = true;

    /**
     * 验证规则
     */
    protected $rule = [
        'code' => 'require|regex:^[a-zA-Z][a-zA-Z0-9_]{2,50}$|unique:sms_template',
    ];

    /**
     * 提示消息
     */
    protected $message = [
    ];

    /**
     * 验证场景
     */
    protected $scene = [
        'add'  => ['code'],
        'edit' => ['code'],
    ];

    public function __construct()
    {
        $this->field = [
            'code' => '模板唯一标识',
        ];
        parent::__construct();
    }

}
