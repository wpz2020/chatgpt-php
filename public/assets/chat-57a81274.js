import{c as m}from"./index-89e26330.js";import{c as o}from"./chat-9567bdf0.js";import{defineStore as M}from"pinia";const w=M("fatemsg",{persist:!0,state:()=>({chatMsgList:{},nowChatId:"0"}),actions:{}});let c={code:200,msg:""},i=w(),d={addChat(){c.code=200,c.msg="";let t=this.getAllChat(),e=Object.keys(t).length;if(e==6)c.code=401,c.msg="会话不能超过6个";else{e==0&&(i.chatMsgList={});let s=String(new Date().getTime());i.nowChatId=s,i.chatMsgList[s]={title:"新的会话",update_time:new Date().getTime(),allsize:0,msglist:[],isshow:!1}}return c},getOneChat(t){return i.chatMsgList[t]},updateChat(t,e){return i.chatMsgList[t].msglist.push(e),i.chatMsgList[t].update_time=Date.parse(new Date().toString()),i.chatMsgList[t].msglist.length},updateChatMsg(t,e,s,r){return i.chatMsgList[t].msglist[e][s]=r,""},updateNowChatId(t){return i.nowChatId=t.toString(),""},updateIsshow(t){return i.chatMsgList[t].isshow=!i.chatMsgList[t].isshow,""},updateTitle(t,e){return i.chatMsgList[t].title=e,""},getAllChat(){return i.chatMsgList},getNowChatId(){return i.nowChatId},delOneChat(t){delete i.chatMsgList[t];let e=i.chatMsgList;for(let s in e)i.nowChatId=s.toString();return e},delAllChat(){return i.chatMsgList={},i.chatMsgList}};const L=M("writingmsg",{persist:!0,state:()=>({chatMsgList:{},nowChatId:"0"}),actions:{}});let u={code:200,msg:""},l=L(),p={addChat(){u.code=200,u.msg="";let t=this.getAllChat(),e=Object.keys(t).length;if(e==6)u.code=401,u.msg="会话不能超过6个";else{e==0&&(l.chatMsgList={});let s=String(new Date().getTime());l.nowChatId=s,l.chatMsgList[s]={title:"新的会话",update_time:new Date().getTime(),allsize:0,msglist:[],isshow:!1}}return u},getOneChat(t){return l.chatMsgList[t]},updateChat(t,e){return l.chatMsgList[t].msglist.push(e),l.chatMsgList[t].update_time=Date.parse(new Date().toString()),l.chatMsgList[t].msglist.length},updateChatMsg(t,e,s,r){return l.chatMsgList[t].msglist[e][s]=r,""},updateNowChatId(t){return l.nowChatId=t.toString(),""},updateIsshow(t){return l.chatMsgList[t].isshow=!l.chatMsgList[t].isshow,""},updateTitle(t,e){return l.chatMsgList[t].title=e,""},getAllChat(){return l.chatMsgList},getNowChatId(){return l.nowChatId},delOneChat(t){delete l.chatMsgList[t];let e=l.chatMsgList;for(let s in e)l.nowChatId=s.toString();return e},delAllChat(){return l.chatMsgList={},l.chatMsgList}};const C="/api/chat/";function T(t){let e=o.getAllChat(),s=o.getNowChatId(),r=e[s].msglist.length;m({url:C+"sendMsg",method:"post",data:t,responseType:"stream",onDownloadProgress:function(h){let n="Client error",g="页面错误",a=h.event.currentTarget.responseText;a.includes(n)||a.includes(g)?o.updateChatMsg(s,r-1,"msg","AI机器人有点忙，请稍后发送"):(a.slice(-4)=="stop"&&(a=a.slice(0,a.length-4),o.updateChatMsg(s,r-1,"isfinish",!0)),o.updateChatMsg(s,r-1,"msg",a))}})}function D(t){let e=d.getAllChat(),s=d.getNowChatId(),r=e[s].msglist.length;m({url:C+"sendCompletions",method:"post",data:t,responseType:"stream",onDownloadProgress:function(h){let n="Client error",g="页面错误",a=h.event.currentTarget.responseText;a!=":"&&(a.includes(n)||a.includes(g)?d.updateChatMsg(s,r-1,"msg","AI机器人有点忙，请稍后发送"):(a.slice(-4)=="stop"&&(a=a.slice(0,a.length-4),d.updateChatMsg(s,r-1,"isfinish",!0)),d.updateChatMsg(s,r-1,"msg",a)))}})}function _(t){let e=p.getAllChat(),s=p.getNowChatId(),r=e[s].msglist.length;m({url:C+"sendCompletions",method:"post",data:t,responseType:"stream",onDownloadProgress:function(h){let n="Client error",g="页面错误",a=h.event.currentTarget.responseText;a!=":"&&(a.includes(n)||a.includes(g)?p.updateChatMsg(s,r-1,"msg","AI机器人有点忙，请稍后发送"):(a.slice(-4)=="stop"&&(a=a.slice(0,a.length-4),p.updateChatMsg(s,r-1,"isfinish",!0)),p.updateChatMsg(s,r-1,"msg",a)))}})}export{D as a,L as b,d as c,p as d,_ as e,T as h,w as u};