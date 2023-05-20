<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;
use app\common\model\QuestionModel;
use think\facade\Db;

class Question extends Frontend
{
    protected $noNeedLogin = ['index'];

    public $model = '';

    public function initialize()
    {
        parent::initialize();

        $this->model = new QuestionModel();
    }

    public function index()
    {

        $questions = $this->model->select()->toArray();
        $questions_type = Db::table('ba_questions_type')->select();



        // $questions_type_id = [];
        // foreach($questions_type as $item){
        //      array_push($questions_type_id, $item['id']);
        // }

        // $questions_arr = []
        // foreach($questions as $index => $item){
        //     array_push($questions_arr[$index], $item);
        // }

        // var_dump($questions);exit;
       

        $this->success('', [
            'questions' => $questions,
            'type' => $questions_type,
        ]);
    }


    
}