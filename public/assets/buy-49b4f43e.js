import{u as B,s as o}from"./store-82ec2858.js";import{s as N,c as P,o as f,a as U}from"./index-dff9f9b3.js";import{l as D,_ as I}from"./index-dda703f5.js";import{h as $,p as l,l as d,q as g,D as u,N as c,k as e,i as A,o as s,M as t,U as r,P as v,C as p,S as b,t as y,R as k}from"./vue-8b21a996.js";const M={key:0,class:"order-info"},O={class:"order-info-item"},E={class:"order-info-item"},S={class:"order-info-item"},q={class:"order-info-item"},z={key:0,class:"order-price"},F={key:1,class:"order-price"},R={class:"order-footer"},T={class:"order-agreement"},W={href:"https://doc.buildadmin.com/guide/other/appendix/templateAgreement.html",target:"_blank"},j={class:"order-info-buttons"},G=$({__name:"buy",setup(H){const{t:n}=D(),h=B();return(J,a)=>{const x=y("el-alert"),C=y("el-checkbox"),m=y("el-button"),V=y("el-dialog"),_=k("blur"),w=k("loading");return l(),d("div",null,[g(V,{modelValue:e(o).dialog.buy,"onUpdate:modelValue":a[5]||(a[5]=i=>e(o).dialog.buy=i),class:"buy-dialog",title:e(n)("module.Confirm order info"),top:"20vh",width:"28%"},{default:u(()=>[c((l(),d("div",null,[g(x,{title:e(n)("module.Module installation warning"),type:"error",center:!0,closable:!1},null,8,["title"]),e(A)(e(o).buy.info)?b("",!0):(l(),d("div",M,[s("div",O,t(e(n)("module.Order title"))+"："+t(e(o).buy.info.title),1),s("div",E,t(e(n)("module.Order No"))+"："+t(e(o).buy.info.sn),1),s("div",S,t(e(n)("module.Purchase user"))+"："+t(e(N)(e(h))),1),s("div",q,[r(t(e(n)("module.Order price"))+"： ",1),e(o).buy.info.purchased?(l(),d("span",F,t(e(n)("module.Purchased, can be installed directly")),1)):(l(),d("span",z,t(e(P)(e(o).buy.info.amount,e(o).buy.info.pay.money?1:0)),1))]),s("div",R,[s("div",T,[g(C,{modelValue:e(o).buy.agreement,"onUpdate:modelValue":a[0]||(a[0]=i=>e(o).buy.agreement=i),size:"small",label:""},null,8,["modelValue"]),s("span",null,[r(t(e(n)("module.Understand and agree"))+"《 ",1),s("a",W,t(e(n)("module.Module purchase and use agreement")),1),r(" 》 ")])]),s("div",j,[e(o).buy.info.purchased?c((l(),p(m,{key:1,loading:e(o).loading.common,onClick:a[4]||(a[4]=i=>e(U)(e(o).buy.info.uid,e(o).buy.info.id)),type:"warning"},{default:u(()=>[r(t(e(n)("module.Install now")),1)]),_:1},8,["loading"])),[[_]]):(l(),d(v,{key:0},[e(o).buy.info.pay.score?c((l(),p(m,{key:0,loading:e(o).loading.common,onClick:a[1]||(a[1]=i=>e(f)("score")),type:"warning"},{default:u(()=>[r(t(e(n)("module.Point payment")),1)]),_:1},8,["loading"])),[[_]]):b("",!0),e(o).buy.info.pay.money?(l(),d(v,{key:1},[c((l(),p(m,{loading:e(o).loading.common,onClick:a[2]||(a[2]=i=>e(f)("balance")),type:"warning"},{default:u(()=>[r(t(e(n)("module.Balance payment")),1)]),_:1},8,["loading"])),[[_]]),c((l(),p(m,{loading:e(o).loading.common,onClick:a[3]||(a[3]=i=>e(f)("wx")),type:"success"},{default:u(()=>[r(t(e(n)("module.Wechat payment")),1)]),_:1},8,["loading"])),[[_]])],64)):b("",!0)],64))])])]))])),[[w,e(o).loading.buy]])]),_:1},8,["modelValue","title"])])}}});const Y=I(G,[["__scopeId","data-v-4437047a"]]);export{Y as default};