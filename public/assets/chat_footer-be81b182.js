import{l as C,_ as b,H as x,e as g,f as k,c as I,g as f,a as h,j as m,M as T,N as z,q as v}from"./index-9250cf41.js";import{c as r}from"./chat-608f0192.js";import{c as w}from"./gpt4-2a6c24a5.js";import"./userGpt4-51d4bd4b.js";const D="/api/gpt4/";function N(_,t,l){C({url:D+"gpttest",method:"post",data:_,responseType:"stream",onDownloadProgress:function(i){let e="Client error",o="页面错误",n=i.event.currentTarget.responseText;n.includes(e)||n.includes(o)?w.updateChatMsg(t,l-1,"msg","AI机器人有点忙，请稍后发送"):w.updateChatMsg(t,l-1,"msg",n)}})}const V={class:"chat_submit"},A={class:"chat_submit-01"},U={__name:"chat_footer",setup(_){let t=x(""),l=async i=>{i.preventDefault();let e=v().getUserInfo(),o=r.getNowChatId();if(t.value==null||t.value=="")return!1;if(e.num<=0){let a="";return e.id==0?a="聊天次数不足,请登录账号":a="聊天次数不足,请开通会员",r.updateChat(o,{role:"robot",msg:a,time:new Date().getTime(),size:10,iswrite:!1}),!1}r.updateChat(o,{role:"user",msg:t.value,time:new Date().getTime(),size:10});let n=0;n=r.updateChat(o,{role:"robot",msg:"思考中...",time:new Date().getTime(),size:10,iswrite:!1}),t.value,t.value="";let s=r.getOneChat(o),p=[],d=0;s.msglist.length>10&&(d=s.msglist.length-11);for(let a=0;a<s.msglist.length-1;a++){if(a<d)continue;let u=s.msglist[a].role;u=="robot"?u="assistant":u="user",p.push({role:u,content:s.msglist[a].msg})}let c=e.token;c==""&&(c=e.isyouke),await N({message:p,uid:e.id,username:e.username,num:e.num-1,token:c,cate:"chat"},o,n);let y=e.num-1;v().setNum(y)};return(i,e)=>{const o=g("el-input"),n=g("Icon");return k(),I("div",V,[f("div",A,[h(o,{autosize:"",type:"textarea",modelValue:m(t),"onUpdate:modelValue":e[0]||(e[0]=s=>T(t)?t.value=s:t=s),onKeydown:z(m(l),["enter"]),placeholder:"来说点什么吧..."},null,8,["modelValue","onKeydown"]),f("div",{class:"chat-send-msg",onClick:e[1]||(e[1]=(...s)=>m(l)&&m(l)(...s))},[h(n,{name:"el-icon-Promotion",size:"20"})])])])}}},P=b(U,[["__scopeId","data-v-7365bb60"]]);export{P as default};