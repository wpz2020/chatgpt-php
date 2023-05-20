<?php

namespace app\admin\model;

use think\Model;

/**
 * Chat
 */
class Chat extends Model
{
    // 表名
    protected $name = 'chat';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;
    protected $updateTime = false;

}