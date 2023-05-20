<?php

namespace app\common\model;

use think\Model;
use think\facade\Cache;
use app\admin\model\Config as adminConfigModel;

class Config extends Model
{
    /**
     * 添加系统配置分组
     */
    public static function addConfigGroup(string $key, string $value): bool
    {
        return self::addArrayItem('config_group', $key, $value);
    }

    /**
     * 删除系统配置分组
     */
    public static function removeConfigGroup(string $key): bool
    {
        return self::removeArrayItem('config_group', $key);
    }

    /**
     * 添加系统快捷配置入口
     */
    public static function addQuickEntrance(string $key, string $value): bool
    {
        return self::addArrayItem('config_quick_entrance', $key, $value);
    }

    /**
     * 删除系统快捷配置入口
     */
    public static function removeQuickEntrance(string $key): bool
    {
        return self::removeArrayItem('config_quick_entrance', $key);
    }

    /**
     * 为Array类型的配置项添加元素
     */
    public static function addArrayItem(string $name, string $key, string $value): bool
    {
        $configRow = adminConfigModel::where('name', $name)->find();
        foreach ($configRow->value as $item) {
            if ($item['key'] == $key) {
                return false;
            }
        }
        $configRow->value = array_merge($configRow->value, [['key' => $key, 'value' => $value]]);
        $configRow->save();
        Cache::tag(adminConfigModel::$cacheTag)->clear();
        return true;
    }

    /**
     * 删除Array类型配置项的一个元素
     */
    public static function removeArrayItem(string $name, string $key): bool
    {
        $configRow      = adminConfigModel::where('name', $name)->find();
        $configRowValue = $configRow->value;
        foreach ($configRowValue as $iKey => $item) {
            if ($item['key'] == $key) {
                unset($configRowValue[$iKey]);
            }
        }
        $configRow->value = $configRowValue;
        $configRow->save();
        Cache::tag(adminConfigModel::$cacheTag)->clear();
        return true;
    }

}