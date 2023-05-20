<?php

namespace app\admin\model;

use think\Model;

class Config extends Model
{
    public static $cacheTag = 'sys_config';

    protected $append = [
        'value',
        'content',
        'extend',
        'input_extend',
    ];

    protected $jsonDecodeType = ['checkbox', 'array', 'selects'];
    protected $needContent    = ['radio', 'checkbox', 'select', 'selects'];

    public static function onBeforeInsert($model)
    {
        if (!in_array($model->getData('type'), $model->needContent)) {
            $model->content = null;
        } else {
            $model->content = json_encode(str_attr_to_array($model->getData('content')));
        }
        if (is_array($model->rule)) {
            $model->rule = implode(',', $model->rule);
        }
        if ($model->getData('extend') || $model->getData('inputExtend')) {
            $extend      = str_attr_to_array($model->getData('extend'));
            $inputExtend = str_attr_to_array($model->getData('inputExtend'));
            if ($inputExtend) $extend['baInputExtend'] = $inputExtend;
            if ($extend) $model->extend = json_encode($extend);
        }
        $model->allow_del = 1;
    }

    public function getValueAttr($value, $row)
    {
        if (!isset($row['type'])) return $value;
        if (in_array($row['type'], $this->jsonDecodeType)) {
            $arr = json_decode($value, true);
            return $arr ?: [];
        } elseif ($row['type'] == 'switch') {
            return (bool)$value;
        } elseif ($row['type'] == 'editor') {
            return !$value ? '' : htmlspecialchars_decode($value);
        } elseif ($row['type'] == 'city') {
            if ($value == '') {
                return [];
            }
            if (!is_array($value)) {
                return explode(',', $value);
            }
            return $value;
        } else {
            return $value ?: '';
        }
    }

    public function setValueAttr($value, $row)
    {
        if (in_array($row['type'], $this->jsonDecodeType)) {
            return $value ? json_encode($value) : '';
        } elseif ($row['type'] == 'switch') {
            return $value ? '1' : '0';
        } elseif ($row['type'] == 'time') {
            return $value ? date('H:i:s', strtotime($value)) : '';
        } elseif ($row['type'] == 'city') {
            if ($value && is_array($value)) {
                return implode(',', $value);
            }
            return $value ?: '';
        } elseif (is_array($value)) {
            return implode(',', $value);
        }

        return $value;
    }

    public function getContentAttr($value, $row)
    {
        if (!isset($row['type'])) return '';
        if (in_array($row['type'], $this->needContent)) {
            $arr = json_decode($value, true);
            return $arr ?: [];
        } else {
            return '';
        }
    }

    public function getExtendAttr($value)
    {
        if ($value) {
            $arr = json_decode($value, true);
            if ($arr) {
                unset($arr['baInputExtend']);
                return $arr;
            }
        }
        return [];
    }

    public function getInputExtendAttr($value, $row)
    {
        if ($row && $row['extend']) {
            $arr = json_decode($row['extend'], true);
            if ($arr && isset($arr['baInputExtend'])) {
                return $arr['baInputExtend'];
            }
        }
        return [];
    }
}