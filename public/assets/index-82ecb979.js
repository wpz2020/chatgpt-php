import{b as d,T as m,a as b}from"./index-7398acdb.js";import{j as f}from"./controllerUrls-941681c3.js";import g from"./popupForm-acc3826a.js";import{N as h,l as _,Y as k,ac as y,ah as E}from"./index-fb3df3be.js";import{h as n,r as I,A as L,L as q,at as w,p as s,l as z,k as a,C as T,S as v,q as l,t as C,ap as K}from"./vue-8b21a996.js";import"./index-e2268c88.js";import"./validate-322d0259.js";import"./index-5ee44d7a.js";const P={class:"default-main ba-table-box"},N=n({name:"user/user"}),G=n({...N,setup(S){let o=I({product:{}});L(async()=>{let t=await h(E,"",{});t.code==1&&(o.product=t.data),p()});const{t:e}=_(),c=q(),r=new d(new k(f),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("user.user.User name"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.user.head portrait"),prop:"avatar",align:"center",render:"image",operator:!1},{label:"剩余聊天次数",prop:"num",align:"center",operator:"LIKE"},{label:"会员起始时间",prop:"start_time",align:"center",render:"datetime",operator:"LIKE"},{label:"会员结束时间",prop:"end_time",align:"center",render:"datetime",operator:"LIKE"},{label:e("user.user.Last login IP"),prop:"lastloginip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tag"},{label:e("user.user.Last login"),prop:"lastlogintime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{disable:"danger",enable:"success"},replaceValue:{disable:e("Disable"),enable:e("Enable")}},{label:e("operate"),align:"center",width:"100",render:"buttons",buttons:y(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{gender:0,money:"0",score:"0",status:"enable"}});let p=()=>{r.mount(),r.getIndex().then(()=>{})};K("baTable",r);let{product:i}=w(o);return(t,x)=>{const u=C("el-alert");return s(),z("div",P,[a(r).table.remark?(s(),T(u,{key:0,class:"ba-table-alert",title:a(r).table.remark,type:"info","show-icon":""},null,8,["title"])):v("",!0),l(m,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("quick Search Placeholder",{fields:a(e)("user.user.User name")+"/"+a(e)("user.user.nickname")})},null,8,["quick-search-placeholder"]),l(b,{ref_key:"tableRef",ref:c},null,512),l(g,{product:a(i)},null,8,["product"])])}}});export{G as default};