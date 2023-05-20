<?php

namespace app\admin\model;

use think\Model;

/**
 * Apikey
 */
class Apikey extends Model
{
    // 表名
    protected $name = 'apikey';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;


    public function getTotalAttr($value): float
    {
        return (float)$value;
    }

    public function getUsageAttr($value): float
    {
        return (float)$value;
    }

    public function getBalanceAttr($value): float
    {
        return (float)$value;
    }
}