<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;
use app\common\model\ProductModel;

class Product extends Frontend
{
    protected $noNeedLogin = ['index', 'index_to_arr'];

    public function initialize()
    {
        parent::initialize();
    }

    public function index()
    {

        $re = $this->all();

        $this->success('', $re);
    }

    public function index_to_arr()
    {

        $re = $this->all();

        $data = array();

        for($index = 0; $index < count($re); $index++){
            $data[ $re[$index]['id'] ] = $re[$index]['name'];
        }

        $this->success('', $data);
    }


    public function all(){
        $product = new ProductModel;
        $da = $product->select();
        return $da;
    }

    
}