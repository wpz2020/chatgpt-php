<?php

namespace app\admin\controller\routine;

use Exception;
use app\common\controller\Backend;
use think\db\exception\PDOException;
use think\exception\ValidateException;
use think\facade\Db;

class SettingInfo extends Backend
{
    protected $model = null;

    public function initialize()
    {
        parent::initialize();
  
    }

    public function index()
    {
        $info = Db::table('ba_config')->find(31);

        $this->success('', [
            'info' => $info
        ]);
    }

    public function edit()
    {

        $content = $this->request->post('content');

        $content1 = $content['title1'].'#*#'.$content['content1'].'#*#'.$content['title2'].'#*#'.$content['content2'].'#*#'.$content['title3'].'#*#'.$content['content3'];
       


        $result= Db::table('ba_config')->where('id',31)->update([
            'value'=>$content1
        ]);

        if ($result !== false) {
            $this->success(__('Update successful'));
        } else {
            $this->error(__('No rows updated'));
        }
          
    }
}