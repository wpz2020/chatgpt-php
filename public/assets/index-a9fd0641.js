import{b as p,T as u,a as d}from"./index-7753bebf.js";import{j as m}from"./controllerUrls-941681c3.js";import b from"./popupForm-9c943cf1.js";import{l as f,Y as g,ac as h,N as _,ah as k}from"./index-714877db.js";import{h as n,r as y,L as E,at as I,p as s,l as L,k as r,C as q,S as T,q as t,t as w,ap as z}from"./vue-8b21a996.js";import"./index-4328e043.js";import"./validate-11156ce9.js";import"./index-90c66895.js";const C={class:"default-main ba-table-box"},K=n({name:"user/user"}),A=n({...K,setup(P){let l=y({product:{}});const{t:e}=f(),c=E(),a=new p(new g(m),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("user.user.User name"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:"剩余聊天次数",prop:"num",align:"center",operator:"LIKE"},{label:"会员起始时间",prop:"start_time",align:"center",render:"datetime",operator:"LIKE"},{label:"会员结束时间",prop:"end_time",align:"center",render:"datetime",operator:"LIKE"},{label:e("user.user.Last login IP"),prop:"lastloginip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tag"},{label:e("user.user.Last login"),prop:"lastlogintime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{disable:"danger",enable:"success"},replaceValue:{disable:e("Disable"),enable:e("Enable")}},{label:e("operate"),align:"center",width:"100",render:"buttons",buttons:h(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{gender:0,money:"0",score:"0",status:"enable"}});let o=_(k,"",{});return o.code==1&&(l.product=o.data),a.mount(),a.getIndex(),z("baTable",a),I(l),(v,N)=>{const i=w("el-alert");return s(),L("div",C,[r(a).table.remark?(s(),q(i,{key:0,class:"ba-table-alert",title:r(a).table.remark,type:"info","show-icon":""},null,8,["title"])):T("",!0),t(u,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":r(e)("quick Search Placeholder",{fields:r(e)("user.user.User name")+"/"+r(e)("user.user.nickname")})},null,8,["quick-search-placeholder"]),t(d,{ref_key:"tableRef",ref:c},null,512),t(b)])}}});export{A as default};