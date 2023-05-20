<?php
// 应用公共文件

use think\facade\Db;
use think\facade\Lang;
use think\Response;
use think\facade\Config;
use app\admin\model\Config as configModel;
use think\exception\HttpResponseException;
use Symfony\Component\HttpFoundation\IpUtils;
use think\db\exception\DbException;
use think\db\exception\DataNotFoundException;
use think\db\exception\ModelNotFoundException;

if (!function_exists('path_is_writable')) {
    /**
     * 检查目录/文件是否可写
     * @param $path
     * @return bool
     */
    function path_is_writable($path): bool
    {
        if (DIRECTORY_SEPARATOR == '/' && !@ini_get('safe_mode')) {
            return is_writable($path);
        }

        if (is_dir($path)) {
            $path = rtrim($path, '/') . '/' . md5(mt_rand(1, 100) . mt_rand(1, 100));
            if (($fp = @fopen($path, 'ab')) === false) {
                return false;
            }

            fclose($fp);
            @chmod($path, 0777);
            @unlink($path);

            return true;
        } elseif (!is_file($path) || ($fp = @fopen($path, 'ab')) === false) {
            return false;
        }

        fclose($fp);
        return true;
    }
}

if (!function_exists('deldir')) {

    /**
     * 删除文件夹
     * @param string $dirname 目录
     * @param bool   $delself 是否删除自身
     * @return boolean
     */
    function deldir(string $dirname, bool $delself = true): bool
    {
        if (!is_dir($dirname)) {
            return false;
        }
        $files = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($dirname, FilesystemIterator::SKIP_DOTS),
            RecursiveIteratorIterator::CHILD_FIRST
        );

        foreach ($files as $fileinfo) {
            if ($fileinfo->isDir()) {
                deldir($fileinfo->getRealPath());
            } else {
                @unlink($fileinfo->getRealPath());
            }
        }
        if ($delself) {
            @rmdir($dirname);
        }
        return true;
    }
}

if (!function_exists('del_empty_dir')) {
    /**
     * 删除一个路径下的所有相对空文件夹（删除此路径中的所有空文件夹）
     * @param string $path 相对于根目录的文件夹路径，如 c:BuildAdmin/a/b/
     * @return void
     */
    function del_empty_dir(string $path)
    {
        $path = str_replace(root_path(), '', rtrim(path_transform($path), DIRECTORY_SEPARATOR));
        $path = array_filter(explode(DIRECTORY_SEPARATOR, $path));
        for ($i = count($path) - 1; $i >= 0; $i--) {
            $dirPath = root_path() . implode(DIRECTORY_SEPARATOR, $path);
            if (!is_dir($dirPath)) {
                unset($path[$i]);
                continue;
            }
            if (dir_is_empty($dirPath)) {
                deldir($dirPath);
                unset($path[$i]);
            } else {
                break;
            }
        }
    }
}

if (!function_exists('dir_is_empty')) {
    function dir_is_empty(string $dir): bool
    {
        $handle = opendir($dir);
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                closedir($handle);
                return false;
            }
        }
        closedir($handle);
        return true;
    }
}

if (!function_exists('__')) {
    /**
     * 语言翻译
     * @param string $name 被翻译字符
     * @param array  $vars 替换字符数组
     * @param string $lang 翻译语言
     * @return string
     */
    function __(string $name, array $vars = [], string $lang = '')
    {
        if (is_numeric($name) || !$name) {
            return $name;
        }
        return Lang::get($name, $vars, $lang);
    }
}

if (!function_exists('get_sys_config')) {
    /**
     * 获取站点的系统配置，不传递参数则获取所有配置项
     * @param string $name   变量名
     * @param string $group  变量分组，传递此参数来获取某个分组的所有配置项
     * @param bool   $reduct 是否开启简洁模式，简洁模式下，获取多项配置时只返回配置的键值对
     * @return string | array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    function get_sys_config(string $name = '', string $group = '', bool $reduct = true)
    {
        if ($name) {
            // 直接使用->value('value')不能使用到模型的类型格式化
            $config = configModel::cache($name, null, configModel::$cacheTag)->where('name', $name)->find();
            if ($config) $config = $config['value'];
        } else {
            if ($group) {
                $temp = configModel::cache('group' . $group, null, configModel::$cacheTag)->where('group', $group)->select()->toArray();
            } else {
                $temp = configModel::cache('sys_config_all', null, configModel::$cacheTag)->order('weigh desc')->select()->toArray();
            }
            if ($reduct) {
                $config = [];
                foreach ($temp as $item) {
                    $config[$item['name']] = $item['value'];
                }
            } else {
                $config = $temp;
            }
        }
        return $config;
    }
}

if (!function_exists('get_route_remark')) {
    /**
     * 获取当前路由后台菜单规则的备注信息
     * @return string
     */
    function get_route_remark()
    {
        $controllername = request()->controller(true);
        $actionname     = request()->action(true);
        $path           = str_replace('.', '/', $controllername);

        $remark = Db::name('menu_rule')
            ->where('name', $path)
            ->whereOr('name', $path . '/' . $actionname)
            ->value('remark'); 
            //获取语言包的方法
        return __((string)$remark);
    }
}

if (!function_exists('full_url')) {
    /**
     * 获取资源完整url地址
     * @param string  $relativeUrl 资源相对地址 不传入则获取域名
     * @param boolean $domain      是否携带域名 或者直接传入域名
     * @return string
     */
    function full_url(string $relativeUrl = '', bool $domain = true, $default = '')
    {
        $cdnUrl = Config::get('buildadmin.cdn_url');
        if (!$cdnUrl) $cdnUrl = request()->upload['cdn'] ?? request()->domain();
        if ($domain === true) {
            $domain = $cdnUrl;
        } elseif ($domain === false) {
            $domain = '';
        }

        $relativeUrl = $relativeUrl ?: $default;
        if (!$relativeUrl) return $domain;

        $regex = "/^((?:[a-z]+:)?\/\/|data:image\/)(.*)/i";
        if (preg_match('/^http(s)?:\/\//', $relativeUrl) || preg_match($regex, $relativeUrl) || $domain === false) {
            return $relativeUrl;
        }
        return $domain . $relativeUrl;
    }
}

if (!function_exists('encrypt_password')) {
    /**
     * 加密密码
     */
    function encrypt_password($password, $salt = '', $encrypt = 'md5')
    {
        return $encrypt($encrypt($password) . $salt);
    }
}

if (!function_exists('str_attr_to_array')) {
    /**
     * 将字符串属性列表转为数组
     * @param string $attr 属性，一行一个，无需引号，比如：class=input-class
     * @return array
     */
    function str_attr_to_array(string $attr): array
    {
        if (!$attr) return [];
        $attr     = explode("\n", trim(str_replace("\r\n", "\n", $attr)));
        $attrTemp = [];
        foreach ($attr as $item) {
            $item = explode('=', $item);
            if (!empty($item[0]) && isset($item[1])) {
                $attrVal = $item[1];
                if ($item[1] === 'false' || $item[1] === 'true') {
                    $attrVal = !($item[1] === 'false');
                } elseif (is_numeric($item[1])) {
                    $attrVal = (float)$item[1];
                }
                if (strpos($item[0], '.')) {
                    $attrKey = explode('.', $item[0]);
                    if (!empty($attrKey[0]) && !empty($attrKey[1])) {
                        $attrTemp[$attrKey[0]][$attrKey[1]] = $attrVal;
                        continue;
                    }
                }
                $attrTemp[$item[0]] = $attrVal;
            }
        }
        return $attrTemp;
    }
}

if (!function_exists('action_in_arr')) {
    /**
     * 检测一个方法是否在传递的数组内
     * @param array $arr
     * @return bool
     */
    function action_in_arr(array $arr = []): bool
    {
        $arr = is_array($arr) ? $arr : explode(',', $arr);
        if (!$arr) {
            return false;
        }
        $arr = array_map('strtolower', $arr);
        if (in_array(strtolower(request()->action()), $arr) || in_array('*', $arr)) {
            return true;
        }
        return false;
    }
}

if (!function_exists('build_suffix_svg')) {
    /**
     * 构建文件后缀的svg图片
     * @param string      $suffix     文件后缀
     * @param string|null $background 背景颜色，如：rgb(255,255,255)
     * @return string
     */
    function build_suffix_svg(string $suffix = 'file', string $background = null): string
    {
        $suffix = mb_substr(strtoupper($suffix), 0, 4);
        $total  = unpack('L', hash('adler32', $suffix, true))[1];
        $hue    = $total % 360;
        [$r, $g, $b] = hsv2rgb($hue / 360, 0.3, 0.9);

        $background = $background ?: "rgb($r,$g,$b)";

        return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path style="fill:#E2E5E7;" d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z"/>
            <path style="fill:#B0B7BD;" d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z"/>
            <polygon style="fill:#CAD1D8;" points="480,224 384,128 480,128 "/>
            <path style="fill:' . $background . ';" d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16 V416z"/>
            <path style="fill:#CAD1D8;" d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z"/>
            <g><text><tspan x="220" y="380" font-size="124" font-family="Verdana, Helvetica, Arial, sans-serif" fill="white" text-anchor="middle">' . $suffix . '</tspan></text></g>
        </svg>';
    }
}

if (!function_exists('get_area')) {
    function get_area()
    {
        $province = request()->get('province', '');
        $city     = request()->get('city', '');
        $where    = ['pid' => 0, 'level' => 1];
        if ($province !== '') {
            $where['pid']   = $province;
            $where['level'] = 2;
            if ($city !== '') {
                $where['pid']   = $city;
                $where['level'] = 3;
            }
        }
        return Db::name('area')->where($where)->field('id as value,name as label')->select();
    }
}

if (!function_exists('hsv2rgb')) {
    function hsv2rgb($h, $s, $v): array
    {
        $r = $g = $b = 0;

        $i = floor($h * 6);
        $f = $h * 6 - $i;
        $p = $v * (1 - $s);
        $q = $v * (1 - $f * $s);
        $t = $v * (1 - (1 - $f) * $s);

        switch ($i % 6) {
            case 0:
                $r = $v;
                $g = $t;
                $b = $p;
                break;
            case 1:
                $r = $q;
                $g = $v;
                $b = $p;
                break;
            case 2:
                $r = $p;
                $g = $v;
                $b = $t;
                break;
            case 3:
                $r = $p;
                $g = $q;
                $b = $v;
                break;
            case 4:
                $r = $t;
                $g = $p;
                $b = $v;
                break;
            case 5:
                $r = $v;
                $g = $p;
                $b = $q;
                break;
        }

        return [
            floor($r * 255),
            floor($g * 255),
            floor($b * 255)
        ];
    }
}

if (!function_exists('ip_check')) {
    function ip_check($ip = null)
    {
        $ip       = is_null($ip) ? request()->ip() : $ip;
        $noAccess = get_sys_config('no_access_ip');
        $noAccess = !$noAccess ? [] : array_filter(explode("\n", str_replace("\r\n", "\n", $noAccess)));
        if ($noAccess && IpUtils::checkIp($ip, $noAccess)) {
            $response = Response::create(['msg' => 'No permission request'], 'json', 403);
            throw new HttpResponseException($response);
        }
    }
}

if (!function_exists('set_timezone')) {
    function set_timezone($timezone = null)
    {
        $defaultTimezone = Config::get('app.default_timezone');
        $timezone        = is_null($timezone) ? get_sys_config('time_zone') : $timezone;
        if ($timezone && $defaultTimezone != $timezone) {
            Config::set([
                'app.default_timezone' => $timezone
            ]);
            date_default_timezone_set($timezone);
        }
    }
}

if (!function_exists('path_transform')) {
    function path_transform(string $path)
    {
        return str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $path);
    }
}

if (!function_exists('get_upload_config')) {
    function get_upload_config()
    {
        $uploadConfig            = Config::get('upload');
        $uploadConfig['maxsize'] = file_unit_to_byte($uploadConfig['maxsize']);

        $upload = request()->upload;
        if (!$upload) {
            $uploadConfig['mode'] = 'local';
            return $uploadConfig;
        }
        unset($upload['cdn']);
        return array_merge($upload, $uploadConfig);
    }
}

if (!function_exists('file_unit_to_byte')) {
    /**
     * 将一个文件单位转为字节
     * @param string $unit 将b、kb、m、mb、g、gb的单位转为 byte
     */
    function file_unit_to_byte(string $unit): int
    {
        preg_match('/([0-9\.]+)(\w+)/', $unit, $matches);
        if (!$matches) {
            return 0;
        }
        $typeDict = ['b' => 0, 'k' => 1, 'kb' => 1, 'm' => 2, 'mb' => 2, 'gb' => 3, 'g' => 3];
        return (int)($matches[1] * pow(1024, $typeDict[strtolower($matches[2])] ?? 0));
    }
}