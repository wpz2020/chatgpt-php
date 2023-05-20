<?php

namespace app\admin\validate\sms;

use think\Validate;

class Variable extends Validate
{
    protected $failException = true;

    /**
     * 验证规则
     */
    protected $rule = [
        'name' => 'require|unique:sms_variable',
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
        'add'  => ['name'],
        'edit' => ['name'],
    ];

    public function __construct()
    {
        $this->field = [
            'name' => '变量名称',
        ];
        parent::__construct();
    }

}
