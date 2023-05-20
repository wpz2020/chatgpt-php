<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;
use app\common\model\ChatModel;

use think\facade\Db;

class Gpt4 extends Frontend
{
    protected $noNeedLogin = ['gpttest','test'];

    public function initialize()
    {
        parent::initialize();
    }

    //保存消息
    public function save($data){
        $chat_model = new ChatModel;
        $da = $chat_model->save( $data);

        return $da;
    }

    public function test(){
        $str = <<<EOT
        {"answer":"我","delta_answer":"我"}
        {"answer":"我是","delta_answer":"是"}
        {"answer":"我是基","delta_answer":"基"}
        {"answer":"我是基于","delta_answer":"于"}
        {"answer":"我是基于G","delta_answer":"G"}
        {"answer":"我是基于GPT","delta_answer":"PT"}
        {"answer":"我是基于GPT-","delta_answer":"-"}
        {"answer":"我是基于GPT-4","delta_answer":"4"}
        {"answer":"我是基于GPT-4架","delta_answer":"架"}
        {"answer":"我是基于GPT-4架构","delta_answer":"构"}
        {"answer":"我是基于GPT-4架构的","delta_answer":"的"}
        {"answer":"我是基于GPT-4架构的Chat","delta_answer":"Chat"}
        {"answer":"我是基于GPT-4架构的ChatG","delta_answer":"G"}
        {"answer":"我是基于GPT-4架构的ChatGPT","delta_answer":"PT"}
        {"answer":"我是基于GPT-4架构的ChatGPT，","delta_answer":"，"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由","delta_answer":"由"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由Open","delta_answer":"Open"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI","delta_answer":"AI"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开","delta_answer":"开"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发","delta_answer":"发"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。","delta_answer":"。"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我","delta_answer":"我"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的","delta_answer":"的"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知","delta_answer":"知"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识","delta_answer":"识"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截","delta_answer":"截"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止","delta_answer":"止"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于","delta_answer":"于"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于202","delta_answer":"202"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于2021","delta_answer":"1"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于2021年","delta_answer":"年"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于2021年9","delta_answer":"9"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于2021年9月","delta_answer":"月"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于2021年9月。","delta_answer":"。"}
        {"answer":"我是基于GPT-4架构的ChatGPT，由OpenAI开发。我的知识截止于2021年9月。"}
        EOT;
        
    


        $re = explode('\n',$str);

        var_dump($re);
    }
    


    public function gpttest(){

        // 检查当前缓冲区级别
        if (ob_get_level() > 0) {
            // 如果有缓冲区，则清空缓冲区
            ob_end_clean(); 
        }
        // header('Content-Type: text/event-stream');
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        header('Connection: keep-alive');
        // 重点，必须要加
        header('X-Accel-Buffering: no');

        $client = new \GuzzleHttp\Client();

        $response = $client->request('POST', 'https://api.zhishuyun.com/chatgpt4?token=26ce734ec3a04553831798930e1af5d4', [
            'body' => '{
                "question": "你是GPT哪个版本？"
            }',
            'headers' => [
                'accept'=> 'application/x-ndjson',
                'content-type'=> 'application/json'
            ],
        ]);

        $re = explode('\n', $response->getBody());

        var_dump($re);

        // echo $response->getBody();


        // foreach($stream as $response){

        //     // var_dump($response->choices[0]->text);
        //     echo $response->choices[0]->text;
        //     flush();
        // }

        // var_dump($response);

        // for line in r.iter_lines():
        //     print(line.decode())

        // foreach($line as $response['iter_lines']){

        //     // var_dump($response->choices[0]->text);
        //     echo $line;
        //     flush();
        // }



       
    }


    public function sendCompletions(){

        // 检查当前缓冲区级别
        if (ob_get_level() > 0) {
            // 如果有缓冲区，则清空缓冲区
            ob_end_clean(); 
        }
        // header('Content-Type: text/event-stream');
        header('Content-Type: text/event-stream');
        header('Cache-Control: no-cache');
        header('Connection: keep-alive');
        // 重点，必须要加
        header('X-Accel-Buffering: no');


        $content = $this->request->post('message');
        $uid = $this->request->post('uid');
        $name = $this->request->post('username');
        $num = $this->request->post('num');
        $token = $this->request->post('token');

       
        $apiurl = get_sys_config('proxy').'/v1';
        $model  = get_sys_config('open_model');


        $youke_num = get_sys_config('youke_num'); //获取游客对话次数

        
        $count = Db::table('ba_chat')->where('token',$token)->count(); 
    

        // var_dump("kkkk",$count);
        // exit;
        if(strlen($content) > 2000){
            echo '内容太长,请重试';
            exit;
        }

        $content = '梅花易数是算命的一种方式,假如你是掌握梅花易数知识的专家，当前用随机数字起卦,'. $content. ',请详细解释当前的卦象';



        $udata = [
            'uid'=> $uid,
            'username'=> $name,
            'messages'=> $content,
            'num'=> $num,
            'token'=> $token,
            'model'=> $model,
            'cate' => 'fate',
            'ip'=> $this->request->ip(),
        ];

        $this->save($udata);

        // if( strlen($token) <= 10 ||  $name == '游客959' || $name == '游客undefined'){
        //     echo '白嫖网站，请访问：https://ai.goodwpd.com';
        //     exit;
        // }

        if($uid == 0 && $count > $youke_num ){
            echo '对话次数不足';
            exit;
        }


        if($uid != 0){
            Db::table('ba_user')
            ->where('id', $uid)
            ->dec('num', 1)
            ->update();
        }

        $getdata = $this->getKey();
        if($getdata == ''){
            echo '没有可用的key';
            exit;
        }


        $yourApiKey =  $getdata['apikey'];

        $client = OpenAI::factory()
            ->withApiKey($yourApiKey)
            ->withOrganization('') // default: null
            ->withBaseUri($apiurl) // default: api.openai.com/v1
            ->withHttpClient($client = new \GuzzleHttp\Client([])) // default: HTTP client found using PSR-18 HTTP Client Discovery
            ->withHttpHeader('X-My-Header', 'foo')
            ->withQueryParam('my-param', 'bar')
            ->make();
        

            $stream = $client->completions()->createStreamed([
                'model' => 'text-davinci-003',
                'prompt' => $content,
                'max_tokens' => 2000,
                'temperature' => 0.8,
            ]);
        

            $content = '';
            foreach($stream as $response){

                // var_dump($response->choices[0]->text);
                echo $response->choices[0]->text;
                flush();
            }

            $udata = [
                'uid'=> 0,
                'username'=> 'AI机器人',
                'messages'=> $content,
                'token'=> 0,
                'cate' => 'fate',
                'model'=> $model,
            ];
    
            $this->save($udata);
            //return $response->toArray();

    }


 
   



}