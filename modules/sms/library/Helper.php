<?php

namespace modules\sms\library;

use ba\Random;
use app\admin\model\sms\Variable;
use think\db\exception\PDOException;
use think\facade\Db;

class Helper
{
    public static function calcVar($id)
    {
        $varData = Variable::where('id', $id)->find()->toArray();
        if (!$varData) return '';
        if ($varData['value_source'] == 'literal') {
            return $varData['value'];
        } elseif ($varData['value_source'] == 'func') {
            $class = '\\' . $varData['namespace'] . '\\' . $varData['class'];
            if (!class_exists($class)) return '';
            if (!method_exists($class, $varData['func'])) return '';
            $handle = new $class();
            return $handle->{$varData['func']}($varData['param']);
        } elseif ($varData['value_source'] == 'sql') {
            $sql = str_replace('__PREFIX__', config('database.connections.mysql.prefix'), $varData['sql']);
            try {
                $res = Db::query($sql);
            } catch (PDOException $e) {
                // return $e->getMessage();
                return '';
            }
            if ($res) {
                if (is_array($res[0])) {
                    foreach ($res[0] as $value) {
                        return $value;
                    }
                } else {
                    return $res[0];
                }
            }
        }
        return '';
    }

    public static function numeric(int $len = 6)
    {
        return Random::build('numeric', $len);
    }

    public static function alnum(int $len = 6)
    {
        return Random::build('alnum', $len);
    }

    /**
     * 分析字符串中的自定义变量
     * @param string $content     要分析的字符串
     * @param string $variableIds 要分析的变量ID数组
     * @param array  $tplVar      动态传递新的变量值
     * @return array 解析过变量的模板以及用到的变量数组
     */
    public static function analysisVariable(string $content, string $variableIds, array $tplVar = []): array
    {
        if (!$content && !$variableIds) {
            return [
                'content'   => '',
                'variables' => [],
            ];
        }

        // 读取数据库中的模板变量
        $allVariable = []; // 全部变量
        $useVariable = []; // 使用到的变量
        $variableTmp = Db::name('sms_variable')->where('status', 1)->select();
        $variables   = explode(',', $variableIds); // 要分析的变量数组
        foreach ($variableTmp as $value) {
            $varName = $value['name'];
            // 是需要分析的变量
            if (in_array($value['id'], $variables)) {
                $value['type'] = 'definition_now';// 标记为现在定义
                if (array_key_exists($varName, $tplVar)) {
                    $value['value'] = $tplVar[$varName];
                } else {
                    $value['value'] = self::calcVar($value['id']);
                }
                $useVariable[$varName] = $value['value'];
                $allVariable[$varName] = $value;
                continue;
            }

            $value['type']         = 'predefined';// 标记为预定义
            $allVariable[$varName] = $value;
        }
        unset($variableTmp);

        // 准备传递过来的模板变量
        foreach ($tplVar as $key => $value) {
            $allVariable[$key] = [
                'type'  => 'definition_now',// 标记为现在定义
                'value' => $value,
            ];
        }

        $match = [];
        preg_match_all('/\${(.*?)}/', $content, $match);// 匹配到所有变量

        foreach ($match[1] as $key => $value) {
            if (array_key_exists($value, $allVariable)) {
                if ($allVariable[$value]['type'] == 'definition_now') {
                    $content             = str_replace($match[0][$key], $allVariable[$value]['value'], $content);
                    $useVariable[$value] = $allVariable[$value]['value'];
                } else if ($allVariable[$value]['type'] == 'predefined') {
                    $variableValue       = self::calcVar($allVariable[$value]['id']);
                    $content             = str_replace($match[0][$key], $variableValue, $content);
                    $useVariable[$value] = $variableValue;
                }
            }
        }

        return [
            'content'   => $content,
            'variables' => $useVariable,
        ];
    }
}