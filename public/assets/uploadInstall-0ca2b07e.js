import{P as m,_}from"./index-36779712.js";import{k as f}from"./store-15f27c2f.js";import{a as h}from"./index-9457d08a.js";import{h as v,r as w,p as n,l as c,o as t,M as a,q as p,D as g,P as k,U as y,C as I,t as i}from"./vue-8b21a996.js";const $={class:"upload-install"},C={class:"tips"},S={class:"title"},U={class:"tip-item"},B={class:"tip-item"},D={class:"tip-item"},T={class:"el-upload__text"},b=v({__name:"uploadInstall",setup(F){const l=w({uploadState:"wait-file"}),u=e=>{if(!e||!e.raw)return;let s=new FormData;s.append("file",e.raw),m(s,{},!0).then(o=>{o.code==1&&f(o.data.file.url).then(d=>{l.uploadState="success",h(d.data.info.uid,0)}).catch(()=>{l.uploadState="wait-file"})})};return(e,s)=>{const o=i("Icon"),d=i("el-result"),r=i("el-upload");return n(),c("div",$,[t("div",C,[t("div",S,a(e.$t("module.Local upload warning")),1),t("div",U,"1. "+a(e.$t("module.The module can modify and add system files")),1),t("div",B,"2. "+a(e.$t("module.The module can execute sql commands and codes")),1),t("div",D,"3. "+a(e.$t("module.The module can install new front and rear dependencies")),1)]),p(r,{class:"upload-module","show-file-list":!1,accept:".zip",drag:"","auto-upload":!1,onChange:u},{default:g(()=>[l.uploadState=="wait-file"?(n(),c(k,{key:0},[p(o,{size:"50px",color:"#909399",name:"el-icon-UploadFilled"}),t("div",T,[y(a(e.$t("module.Drag the module package file here"))+" ",1),t("em",null,a(e.$t("module.Click me to upload")),1)])],64)):(n(),I(d,{key:1,icon:"success","sub-title":e.$t("module.Uploaded, installation is about to start, please wait")},null,8,["sub-title"]))]),_:1})])}}});const z=_(b,[["__scopeId","data-v-88f57e9d"]]);export{z as default};
