<?php

namespace app\admin\model;

use think\Model;

/**
 * Product
 */
class Product extends Model
{
    // 表名
    protected $name = 'product';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;


    public function getPriceAttr($value): float
    {
        return (float)$value;
    }
}