import{c as t,a as f}from"./chat-0b571d6e.js";import{q as r}from"./index-9250cf41.js";let g=(m,o)=>{let s=t.getNowChatId(),e=r().getUserInfo();if(e.num<=0){let a="";return e.id==0?a="聊天次数不足,请登录账号":a="聊天次数不足,请开通会员",t.updateChat(s,{role:"robot",msg:a,time:new Date().getTime(),size:10,isFirst:!1}),!1}o=="first"&&(t.updateChat(s,{role:"user",msg:m,time:new Date().getTime(),size:10,isFirst:!1}),t.updateChat(s,{role:"robot",msg:"思考中...",time:new Date().getTime(),size:10,isFirst:!1}));let i=e.token;i==""&&(i=e.isyouke),f({message:m,uid:e.id,username:e.username,num:e.num-1,token:i,cate:"fate"});let u=e.num-1;r().setNum(u)};export{g as s};
