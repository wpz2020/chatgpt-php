import{h as T,r as C,L as $,B as j,p as f,C as c,D as n,N as L,l as q,U as b,M as _,k as e,o as x,q as s,m as S,$ as g,a6 as h,S as K,T as M,al as R,t as i,R as y}from"./vue-8b21a996.js";import{c as W,l as A,_ as E}from"./index-714877db.js";import{k as O,j as G}from"./controllerUrls-941681c3.js";import{F as H}from"./index-90c66895.js";import{b as V}from"./validate-11156ce9.js";function J(v){return W({url:O+"add",method:"get",params:{userId:v}})}const Q={class:"title"},X=T({__name:"popupForm",setup(v){const{t:l}=A(),r=R("baTable"),U=C({user_id:[V({name:"required",message:l("Please select field",{field:l("user.moneyLog.User")})})],score:[V({name:"required",title:l("user.moneyLog.Change amount")}),{validator:(m,o,u)=>!o||parseInt(o)==0?u(new Error(l("Please enter the correct field",{field:l("user.moneyLog.Change amount")}))):u(),trigger:"blur"}],memo:[V({name:"required",title:l("user.moneyLog.remarks")})]}),p=$(),a=C({userInfo:{},after:0}),I=()=>{!r.form.items.user_id||parseInt(r.form.items.user_id)<=0||J(r.form.items.user_id).then(m=>{a.userInfo=m.data.user,a.after=m.data.user.score})},w=m=>{if(!a.userInfo||typeof a.userInfo>"u"){a.after=0;return}let o=m==""?0:parseFloat(m);a.after=parseFloat(a.userInfo.score)+o};return j(()=>r.form.operate,m=>{m&&I()}),(m,o)=>{const u=i("el-input"),d=i("el-form-item"),F=i("el-form"),P=i("el-scrollbar"),k=i("el-button"),D=i("el-dialog"),z=y("drag"),B=y("zoom"),N=y("blur");return f(),c(D,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(r).form.operate,onClose:e(r).toggleForm},{header:n(()=>[L((f(),q("div",Q,[b(_(e(r).form.operate?e(l)(e(r).form.operate):""),1)])),[[z,[".ba-operate-dialog",".el-dialog__header"]],[B,".ba-operate-dialog"]])]),footer:n(()=>[x("div",{style:S("width: calc(100% - "+e(r).form.labelWidth/1.8+"px)")},[s(k,{onClick:o[10]||(o[10]=t=>e(r).toggleForm(""))},{default:n(()=>[b(_(e(l)("Cancel")),1)]),_:1}),L((f(),c(k,{loading:e(r).form.submitLoading,onClick:o[11]||(o[11]=t=>e(r).onSubmit(p.value)),type:"primary"},{default:n(()=>[b(_(e(r).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[N]])],4)]),default:n(()=>[s(P,{class:"ba-table-form-scrollbar"},{default:n(()=>[x("div",{class:M(["ba-operate-form","ba-"+e(r).form.operate+"-form"]),style:S("width: calc(100% - "+e(r).form.labelWidth/2+"px)")},[e(r).form.loading?K("",!0):(f(),c(F,{key:0,ref_key:"formRef",ref:p,onKeyup:o[9]||(o[9]=g(t=>e(r).onSubmit(p.value),["enter"])),model:e(r).form.items,"label-position":"right","label-width":e(r).form.labelWidth+"px",rules:U},{default:n(()=>[s(H,{type:"remoteSelect",prop:"user_id",label:e(l)("user.moneyLog.User ID"),modelValue:e(r).form.items.user_id,"onUpdate:modelValue":o[0]||(o[0]=t=>e(r).form.items.user_id=t),placeholder:e(l)("Click Select"),"input-attr":{pk:"user.id",field:"nickname_text","remote-url":e(G)+"index",onChange:I}},null,8,["label","modelValue","placeholder","input-attr"]),s(d,{label:e(l)("user.moneyLog.User name")},{default:n(()=>[s(u,{modelValue:a.userInfo.username,"onUpdate:modelValue":o[1]||(o[1]=t=>a.userInfo.username=t),disabled:""},null,8,["modelValue"])]),_:1},8,["label"]),s(d,{label:e(l)("user.moneyLog.User nickname")},{default:n(()=>[s(u,{modelValue:a.userInfo.nickname,"onUpdate:modelValue":o[2]||(o[2]=t=>a.userInfo.nickname=t),disabled:""},null,8,["modelValue"])]),_:1},8,["label"]),s(d,{label:e(l)("user.scoreLog.Current points")},{default:n(()=>[s(u,{modelValue:a.userInfo.score,"onUpdate:modelValue":o[3]||(o[3]=t=>a.userInfo.score=t),disabled:"",type:"number"},null,8,["modelValue"])]),_:1},8,["label"]),s(d,{prop:"score",label:e(l)("user.moneyLog.Change amount")},{default:n(()=>[s(u,{onInput:w,modelValue:e(r).form.items.score,"onUpdate:modelValue":o[4]||(o[4]=t=>e(r).form.items.score=t),type:"number",placeholder:e(l)("user.scoreLog.Please enter the change amount of points")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(d,{label:e(l)("user.scoreLog.Points after change")},{default:n(()=>[s(u,{modelValue:a.after,"onUpdate:modelValue":o[5]||(o[5]=t=>a.after=t),type:"number",disabled:""},null,8,["modelValue"])]),_:1},8,["label"]),s(d,{prop:"memo",label:e(l)("user.moneyLog.remarks")},{default:n(()=>[s(u,{onKeyup:[o[6]||(o[6]=g(h(()=>{},["stop"]),["enter"])),o[7]||(o[7]=g(h(t=>e(r).onSubmit(p.value),["ctrl"]),["enter"]))],modelValue:e(r).form.items.memo,"onUpdate:modelValue":o[8]||(o[8]=t=>e(r).form.items.memo=t),type:"textarea",placeholder:e(l)("user.scoreLog.Please enter change remarks / description")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})]),_:1},8,["model-value","onClose"])}}});const Y=E(X,[["__scopeId","data-v-68565f47"]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Y as P,J as a,te as p};
