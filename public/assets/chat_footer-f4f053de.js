import{ref as C,resolveComponent as g,openBlock as b,createElementBlock as x,createElementVNode as f,createVNode as h,unref as u,isRef as k,withKeys as I}from"vue";import{c as r}from"./chat-9567bdf0.js";import{c as T,_ as z,b as v}from"./index-89e26330.js";import{c as w}from"./gpt4-65d15dd9.js";import"pinia";import"vue-i18n";import"vue-router";import"vue-demi";import"element-plus";import"./userGpt4-d36019d4.js";const D="/api/gpt4/";function V(p,t,a){T({url:D+"gpttest",method:"post",data:p,responseType:"stream",onDownloadProgress:function(i){let e="Client error",s="页面错误",l=i.event.currentTarget.responseText;l.includes(e)||l.includes(s)?w.updateChatMsg(t,a-1,"msg","AI机器人有点忙，请稍后发送"):w.updateChatMsg(t,a-1,"msg",l)}})}const A={class:"chat_submit"},N={class:"chat_submit-01"},U={__name:"chat_footer",setup(p){let t=C(""),a=async i=>{i.preventDefault();let e=v().getUserInfo(),s=r.getNowChatId();if(t.value==null||t.value=="")return!1;if(e.num<=0){let n="";return e.id==0?n="聊天次数不足,请登录账号":n="聊天次数不足,请开通会员",r.updateChat(s,{role:"robot",msg:n,time:new Date().getTime(),size:10,iswrite:!1}),!1}r.updateChat(s,{role:"user",msg:t.value,time:new Date().getTime(),size:10});let l=0;l=r.updateChat(s,{role:"robot",msg:"思考中...",time:new Date().getTime(),size:10,iswrite:!1}),t.value,t.value="";let o=r.getOneChat(s),_=[],d=0;o.msglist.length>10&&(d=o.msglist.length-11);for(let n=0;n<o.msglist.length-1;n++){if(n<d)continue;let m=o.msglist[n].role;m=="robot"?m="assistant":m="user",_.push({role:m,content:o.msglist[n].msg})}let c=e.token;c==""&&(c=e.isyouke),await V({message:_,uid:e.id,username:e.username,num:e.num-1,token:c,cate:"chat"},s,l);let y=e.num-1;v().setNum(y)};return(i,e)=>{const s=g("el-input"),l=g("Icon");return b(),x("div",A,[f("div",N,[h(s,{autosize:"",type:"textarea",modelValue:u(t),"onUpdate:modelValue":e[0]||(e[0]=o=>k(t)?t.value=o:t=o),onKeydown:I(u(a),["enter"]),placeholder:"来说点什么吧..."},null,8,["modelValue","onKeydown"]),f("div",{class:"chat-send-msg",onClick:e[1]||(e[1]=(...o)=>u(a)&&u(a)(...o))},[h(l,{name:"el-icon-Promotion",size:"20"})])])])}}},G=z(U,[["__scopeId","data-v-7365bb60"]]);export{G as default};