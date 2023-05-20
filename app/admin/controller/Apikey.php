<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * key管理
 *
 */
class Apikey extends Backend
{
    /**
     * Apikey模型对象
     * @var \app\admin\model\Apikey
     */
    protected $model = null;

    public $baseUrl = null;
    public $apiKey = null;

    
    protected $preExcludeFields = ['id'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Apikey;

        $this->baseUrl = 'https://api.openai.com/v1/';

        $this->apiKey = "";
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */


    /**
     * 查看
     */
    public function index()
    {
        $this->request->filter(['strip_tags', 'trim']);
        if ($this->request->param('select')) {
            $this->select();
        }

        list($where, $alias, $limit, $order) = $this->queryBuilder();
        $res = $this->model
            ->field($this->indexField)
            ->withJoin($this->withJoinTable, $this->withJoinType)
            ->alias($alias)
            ->where($where)
            ->order($order)
            ->paginate($limit);


        $pitems = $res->items();    

        if (!$this->auth->isSuperAdmin()) {
            
            $index = 0;

            for(; $index < count($pitems); $index++){

                $pitems[$index]['apikey'] = mb_substr($pitems[$index]['apikey'],0,22). "*****";
                
            }  
        }


       
          

        $this->success('', [
            'list'   => $pitems,
            'total'  => $res->total(),
            'remark' => get_route_remark(),
        ]);
    }




   /**
     * @return array|mixed
     * 查询账户总额，余额，已使用
     */
    public function getBalance()
    {

        if(!$this->request->isPost()){
            return false;
        }
        
        $id = $this->request->post('id');
        $key = $this->request->post('key');


        $this->apiKey = $key;

     

        $total = $this->subscription();
        $usage = $this->usage();

        $total_1 = round($total['hard_limit_usd'], 2);

        $usage_1 = round($usage['total_usage']/100, 2);

        $balance = $total_1 - $usage_1;

        //$mdata = array('total'=>$total_1, 'usage'=>$usage_1, 'balance'=> $balance);


        $md = $this->model::where('id',$id)->find();
        $md->total = $total_1;
        $md->usage = $usage_1;
        $md->balance = $balance;

        $md->save();

        $this->success(__('更新成功'));
    }


     /**
     * @return array|mixed
     * 查询账户总额
     */
    public function subscription()
    {

        $url =  $this->baseUrl . "/dashboard/billing/subscription"; //获取总额
       
        return $this->httpRequest($url);
    }

      /**
     * @return array|mixed
     * 查询账户已使用的额度
     */
    public function usage()
    {

        $url =  $this->baseUrl . "/dashboard/billing/usage";  //获取已使用的额度

        $start_data = time() - 3600*24*90; //当前日期 - 90天
        $end_data = time() + 3600*24*1; //当前日期 +1 天

        $url =  $url ."?start_date=". (string)date("Y-m-d",$start_data) ."&end_date=". (string)date("Y-m-d",$end_data);
       
        return $this->httpRequest($url);
    }


     /**
     * http请求
     */
    protected function httpRequest($url, $post = '')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $this->apiKey
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_ENCODING, '');
        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        if ($post) {
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        }
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            return [
                'errno' => 1,
                'message' => 'curl 错误信息: ' . curl_error($ch)
            ];
        }
        curl_close($ch);
        return json_decode($result, true);
    }
}