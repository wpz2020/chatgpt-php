<?php

namespace app\admin\model;

use think\Model;

/**
 * Questions
 */
class Questions extends Model
{
    // 表名
    protected $name = 'questions';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 追加属性
    protected $append = [
        'questionsType',
    ];


    public function getQuestionsTypeAttr($value, $row): array
    {
        return [
            'title' => \app\admin\model\QuestionsType::whereIn('id', $row['user_ids'])->column('title'),
        ];
    }

    public function getUserIdsAttr($value): array
    {
        if ($value === '' || $value === null) return [];
        if (!is_array($value)) {
            return explode(',', $value);
        }
        return $value;
    }

    public function setUserIdsAttr($value): string
    {
        return is_array($value) ? implode(',', $value) : $value;
    }
}