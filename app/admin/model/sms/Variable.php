<?php

namespace app\admin\model\sms;

use think\Model;

/**
 * Variable
 * @controllerUrl 'smsVariable'
 */
class Variable extends Model
{
    // 表名
    protected $name = 'sms_variable';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';

}