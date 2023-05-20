<?php

namespace app\common\library;

use ba\Random;
use think\File;
use think\Exception;
use think\facade\Config;
use think\file\UploadedFile;
use app\common\model\Attachment;

/**
 * 上传
 */
class Upload
{
    /**
     * 配置信息
     * @var array
     */
    protected $config = [];

    /**
     * @var UploadedFile
     */
    protected $file = null;

    /**
     * 是否是图片
     * @var bool
     */
    protected $isImage = false;

    /**
     * 文件信息
     * @var null
     */
    protected $fileInfo = null;

    /**
     * 细目
     * @var string
     */
    protected $topic = 'default';

    /**
     * 构造方法
     * @param UploadedFile|null $file
     * @param array             $config
     * @throws Exception
     */
    public function __construct(UploadedFile $file = null, array $config = [])
    {
        $this->config = Config::get('upload');
        if ($config) {
            $this->config = array_merge($this->config, $config);
        }

        if ($file) {
            $this->setFile($file);
        }
    }

    /**
     * 设置文件
     * @param UploadedFile $file
     * @throws Exception
     */
    public function setFile(UploadedFile $file)
    {
        if (empty($file)) {
            throw new Exception(__('No files were uploaded'), 10001);
        }

        $suffix             = strtolower($file->extension());
        $suffix             = $suffix && preg_match("/^[a-zA-Z0-9]+$/", $suffix) ? $suffix : 'file';
        $fileInfo['suffix'] = $suffix;
        $fileInfo['type']   = $file->getOriginalMime();
        $fileInfo['size']   = $file->getSize();
        $fileInfo['name']   = $file->getOriginalName();
        $fileInfo['sha1']   = $file->sha1();

        $this->file     = $file;
        $this->fileInfo = $fileInfo;
    }

    /**
     * 检查文件类型
     * @return bool
     * @throws Exception
     */
    protected function checkMimetype(): bool
    {
        $mimetypeArr = explode(',', strtolower($this->config['mimetype']));
        $typeArr     = explode('/', $this->fileInfo['type']);
        //验证文件后缀
        if ($this->config['mimetype'] === '*'
            || in_array($this->fileInfo['suffix'], $mimetypeArr) || in_array('.' . $this->fileInfo['suffix'], $mimetypeArr)
            || in_array($this->fileInfo['type'], $mimetypeArr) || in_array($typeArr[0] . "/*", $mimetypeArr)) {
            return true;
        }
        throw new Exception(__('The uploaded file format is not allowed'), 10002);
    }

    /**
     * 是否是图片并设置好相关属性
     * @return bool
     * @throws Exception
     */
    protected function checkIsImage(): bool
    {
        if (in_array($this->fileInfo['type'], ['image/gif', 'image/jpg', 'image/jpeg', 'image/bmp', 'image/png', 'image/webp']) || in_array($this->fileInfo['suffix'], ['gif', 'jpg', 'jpeg', 'bmp', 'png', 'webp'])) {
            $imgInfo = getimagesize($this->file->getPathname());
            if (!$imgInfo || !isset($imgInfo[0]) || !isset($imgInfo[1])) {
                throw new Exception(__('The uploaded image file is not a valid image'));
            }
            $this->fileInfo['width']  = $imgInfo[0];
            $this->fileInfo['height'] = $imgInfo[1];
            $this->isImage            = true;
            return true;
        }
        return false;
    }

    /**
     * 上传的文件是否为图片
     * @return bool
     */
    public function isImage(): bool
    {
        return $this->isImage;
    }

    /**
     * 检查文件大小
     * @throws Exception
     */
    protected function checkSize()
    {
        $size = file_unit_to_byte($this->config['maxsize']);
        if ($this->fileInfo['size'] > $size) {
            throw new Exception(__('The uploaded file is too large (%sMiB), Maximum file size:%sMiB', [
                round($this->fileInfo['size'] / pow(1024, 2), 2),
                round($size / pow(1024, 2), 2)
            ]));
        }
    }

    /**
     * 获取文件后缀
     * @return mixed|string
     */
    public function getSuffix()
    {
        return $this->fileInfo['suffix'] ?: 'file';
    }

    /**
     * 获取文件保存名
     * @param string|null $saveName
     * @param string|null $filename
     * @param string|null $sha1
     * @return array|mixed|string|string[]
     */
    public function getSaveName(string $saveName = null, string $filename = null, string $sha1 = null)
    {
        if ($filename) {
            $suffix = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
            $suffix = $suffix && preg_match("/^[a-zA-Z0-9]+$/", $suffix) ? $suffix : 'file';
        } else {
            $suffix = $this->fileInfo['suffix'];
        }
        $filename   = $filename ?: ($suffix ? substr($this->fileInfo['name'], 0, strripos($this->fileInfo['name'], '.')) : $this->fileInfo['name']);
        $sha1       = $sha1 ?: $this->fileInfo['sha1'];
        $replaceArr = [
            '{topic}'    => $this->topic,
            '{year}'     => date("Y"),
            '{mon}'      => date("m"),
            '{day}'      => date("d"),
            '{hour}'     => date("H"),
            '{min}'      => date("i"),
            '{sec}'      => date("s"),
            '{random}'   => Random::build(),
            '{random32}' => Random::build('alnum', 32),
            '{filename}' => substr($filename, 0, 100),
            '{suffix}'   => $suffix,
            '{.suffix}'  => $suffix ? '.' . $suffix : '',
            '{filesha1}' => $sha1,
        ];
        $saveName   = $saveName ?: $this->config['savename'];
        return str_replace(array_keys($replaceArr), array_values($replaceArr), $saveName);
    }

    /**
     * 上传文件
     * @param string|null $saveName
     * @param int         $adminId
     * @param int         $userId
     * @return array
     * @throws Exception
     */
    public function upload(string $saveName = null, int $adminId = 0, int $userId = 0): array
    {
        if (empty($this->file)) {
            throw new Exception(__('No files have been uploaded or the file size exceeds the upload limit of the server'));
        }

        $this->checkSize();
        $this->checkMimetype();
        $this->checkIsImage();

        $params = [
            'topic'    => $this->topic,
            'admin_id' => $adminId,
            'user_id'  => $userId,
            'url'      => $this->getSaveName(),
            'width'    => $this->fileInfo['width'] ?? 0,
            'height'   => $this->fileInfo['height'] ?? 0,
            'name'     => substr(htmlspecialchars(strip_tags($this->fileInfo['name'])), 0, 100),
            'size'     => $this->fileInfo['size'],
            'mimetype' => $this->fileInfo['type'],
            'storage'  => 'local',
            'sha1'     => $this->fileInfo['sha1']
        ];

        $attachment = new Attachment();
        $attachment->data(array_filter($params));
        $res = $attachment->save();
        if (!$res) {
            $attachment = Attachment::where([
                ['sha1', '=', $params['sha1']],
                ['topic', '=', $params['topic']],
                ['storage', '=', $params['storage']],
            ])->find();
        } else {
            $this->move($saveName);
        }

        return $attachment->toArray();
    }

    public function move($saveName = null): File
    {
        $saveName  = $saveName ?: $this->getSaveName();
        $saveName  = '/' . ltrim($saveName, '/');
        $uploadDir = substr($saveName, 0, strripos($saveName, '/') + 1);
        $fileName  = substr($saveName, strripos($saveName, '/') + 1);
        $destDir   = root_path() . 'public' . str_replace('/', DIRECTORY_SEPARATOR, $uploadDir);

        return $this->file->move($destDir, $fileName);
    }
}