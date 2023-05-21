import{d as R,$ as U,H as k,r as D,f as b,c as P,g as a,i as l,j as e,a as i,b as r,h as n,I as B,z,Y as g,N as y,a0 as S,x as F,a3 as K,e as c,C as Q,D as T,aC as j,_ as M}from"./index-9250cf41.js";import{e as V,s as p,g as E}from"./crud-acd42ce0.js";import{F as H}from"./index-5cf5ba2e.js";import{b as J}from"./validate-d30190a1.js";import{_ as O}from"./log.vue_vue_type_style_index_0_lang-40f1418f.js";import"./index-47490f62.js";import"./controllerUrls-941681c3.js";import"./index-bb9265a5.js";const Y=m=>(Q("data-v-3f4d3041"),m=m(),T(),m),A={class:"default-main"},G={class:"crud-title"},W={class:"start-opt"},X={class:"start-item-title"},Z={class:"start-item-remark"},ee={class:"start-item suspension"},te={class:"start-item-title"},se={class:"start-item-remark"},ae={class:"start-item suspension"},le={class:"start-item-title"},oe={class:"start-item-remark"},de={target:"_blank",href:"https://wonderful-code.gitee.io/guide/other/developerMustSee.html"},re=Y(()=>a("code",null,"test_build",-1)),ie=R({__name:"start",setup(m){const{t:s}=U(),x=k(),_=k(),o=D({dialog:{type:"",visible:!1,dbList:[]},showLog:!1}),C=u=>{o.dialog.type=u,o.dialog.visible=!0,u=="sql"?setTimeout(()=>{x.value.focus()},200):u=="db"&&E().then(t=>{o.dialog.dbList=t.data.dbs})},q=D({db:[J({name:"required",message:s("crud.crud.Please select a data table")})]}),v=(u=void 0)=>{if(u){if(o.dialog.type=="sql"&&!p.startData.sql){K({type:"error",message:s("crud.crud.Please enter the table creation SQL")});return}u.validate(t=>{t&&V(o.dialog.type)})}};return(u,t)=>{const f=c("el-col"),h=c("el-row"),L=c("el-input"),$=c("el-form"),w=c("el-button"),I=c("el-dialog"),N=j("blur");return b(),P("div",A,[a("div",G,l(e(s)("crud.crud.start")),1),a("div",W,[i(h,{gutter:20},{default:r(()=>[i(f,{xs:24,span:8},{default:r(()=>[a("div",{onClick:t[0]||(t[0]=d=>e(V)("create")),class:"start-item suspension"},[a("div",X,l(e(s)("crud.crud.create")),1),a("div",Z,l(e(s)("crud.crud.New background CRUD from zero")),1)])]),_:1}),i(f,{onClick:t[1]||(t[1]=d=>C("db")),xs:24,span:8},{default:r(()=>[a("div",ee,[a("div",te,l(e(s)("crud.crud.Select Data Table")),1),a("div",se,l(e(s)("crud.crud.Select a designed data table from the database")),1)])]),_:1}),i(f,{onClick:t[2]||(t[2]=d=>o.showLog=!0),xs:24,span:8},{default:r(()=>[a("div",ae,[a("div",le,l(e(s)("crud.crud.CRUD record")),1),a("div",oe,l(e(s)("crud.crud.Start with previously generated CRUD code")),1)])]),_:1})]),_:1}),i(h,{justify:"center"},{default:r(()=>[i(f,{span:20,class:"ba-markdown crud-tips suspension"},{default:r(()=>[a("b",null,l(e(s)("crud.crud.Fast experience")),1),a("ol",null,[a("li",null,[n(l(e(s)("crud.crud.experience 1 1"))+" ",1),a("a",de,l(e(s)("crud.crud.experience 1 2")),1),n(" "+l(e(s)("crud.crud.experience 1 3")),1)]),a("li",null,[n(l(e(s)("crud.crud.experience 2 1"))+" ",1),a("code",null,l(e(s)("crud.crud.experience 2 2")),1),n(" "+l(e(s)("crud.crud.experience 2 3")),1),re,n(l(e(s)("crud.crud.data sheet")),1)]),a("li",null,[n(l(e(s)("crud.crud.experience 3 1")),1),a("code",null,l(e(s)("crud.crud.experience 3 2")),1),n(" "+l(e(s)("crud.crud.experience 3 3")),1),a("code",null,l(e(s)("crud.crud.experience 3 4")),1)])])]),_:1})]),_:1}),i(I,{class:"ba-operate-dialog select-db-dialog",modelValue:o.dialog.visible,"onUpdate:modelValue":t[10]||(t[10]=d=>o.dialog.visible=d),title:o.dialog.type=="sql"?e(s)("crud.crud.Please enter SQL"):e(s)("crud.crud.Please select a data table")},{footer:r(()=>[a("div",{style:B({width:"calc(100% * 0.9)"})},[i(w,{onClick:t[8]||(t[8]=d=>o.dialog.visible=!1)},{default:r(()=>[n(l(u.$t("Cancel")),1)]),_:1}),z((b(),g(w,{onClick:t[9]||(t[9]=d=>v(_.value)),type:"primary"},{default:r(()=>[n(l(e(s)("Confirm")),1)]),_:1})),[[N]])],4)]),default:r(()=>[i($,{"label-width":140,onKeyup:t[7]||(t[7]=y(d=>v(_.value),["enter"])),ref_key:"formRef",ref:_,model:e(p).startData,rules:q},{default:r(()=>[o.dialog.type=="sql"?(b(),g(L,{key:0,class:"sql-input",prop:"sql",ref_key:"sqlInputRef",ref:x,modelValue:e(p).startData.sql,"onUpdate:modelValue":t[3]||(t[3]=d=>e(p).startData.sql=d),type:"textarea",placeholder:e(s)("crud.crud.table create SQL"),rows:10,onKeyup:[t[4]||(t[4]=y(S(()=>{},["stop"]),["enter"])),t[5]||(t[5]=y(S(d=>v(_.value),["ctrl"]),["enter"]))]},null,8,["modelValue","placeholder"])):o.dialog.type=="db"?(b(),g(H,{label:e(s)("crud.crud.data sheet"),class:"select-db",modelValue:e(p).startData.db,"onUpdate:modelValue":t[6]||(t[6]=d=>e(p).startData.db=d),type:"select",key:JSON.stringify(o.dialog.dbList),placeholder:e(s)("crud.crud.Please select a data table"),data:{content:o.dialog.dbList},prop:"db"},null,8,["label","modelValue","placeholder","data"])):F("",!0)]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),i(O,{modelValue:o.showLog,"onUpdate:modelValue":t[11]||(t[11]=d=>o.showLog=d)},null,8,["modelValue"])])])}}});const ve=M(ie,[["__scopeId","data-v-3f4d3041"]]);export{ve as default};
