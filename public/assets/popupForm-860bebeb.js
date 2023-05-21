import{defineComponent as z,ref as A,inject as N,reactive as T,watch as $,resolveComponent as d,resolveDirective as b,openBlock as s,createBlock as p,unref as e,withCtx as m,withDirectives as c,createElementBlock as B,createTextVNode as _,toDisplayString as h,createElementVNode as w,normalizeStyle as P,createVNode as r,normalizeClass as K,withKeys as V,withModifiers as k,createCommentVNode as W}from"vue";import{useI18n as R}from"vue-i18n";import{b as u,r as j}from"./validate-e09b6b50.js";import{F as i}from"./index-39d73c69.js";import{b as G}from"./controllerUrls-941681c3.js";import{h as L,_ as M}from"./index-89e26330.js";import"./index-0a827c2c.js";import"element-plus";import"vue-router";import"./index-d3b20950.js";import"pinia";import"vue-demi";const H={class:"title"},J=z({__name:"popupForm",setup(O){const x=L(),f=A(),o=N("baTable"),{t:l}=R(),v=T({username:[u({name:"required",title:l("auth.admin.username")}),u({name:"account"})],nickname:[u({name:"required",title:l("auth.admin.nickname")})],group_arr:[u({name:"required",message:l("Please select field",{field:l("auth.admin.grouping")})})],email:[u({name:"email",message:l("Please enter the correct field",{field:l("auth.admin.mailbox")})})],mobile:[u({name:"mobile",message:l("Please enter the correct field",{field:l("auth.admin.mobile")})})],password:[{validator:(g,t,n)=>{if(o.form.operate=="add"){if(!t)return n(new Error(l("Please input field",{field:l("auth.admin.Password")})))}else if(!t)return n();return j(t)?n():n(new Error(l("validate.Please enter the correct password")))},trigger:"blur"}]});return $(()=>o.form.operate,g=>{v.password[0].required=g=="add"}),(g,t)=>{const n=d("el-input"),C=d("el-form-item"),S=d("el-form"),U=d("el-scrollbar"),y=d("el-button"),F=d("el-dialog"),I=b("drag"),D=b("zoom"),E=b("loading"),q=b("blur");return s(),p(F,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(o).form.operate,onClose:e(o).toggleForm,"destroy-on-close":!0},{header:m(()=>[c((s(),B("div",H,[_(h(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[I,[".ba-operate-dialog",".el-dialog__header"]],[D,".ba-operate-dialog"]])]),footer:m(()=>[w("div",{style:P("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[r(y,{onClick:t[12]||(t[12]=a=>e(o).toggleForm(""))},{default:m(()=>[_(h(e(l)("Cancel")),1)]),_:1}),c((s(),p(y,{loading:e(o).form.submitLoading,onClick:t[13]||(t[13]=a=>e(o).onSubmit(f.value)),type:"primary"},{default:m(()=>[_(h(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[q]])],4)]),default:m(()=>[c((s(),p(U,{class:"ba-table-form-scrollbar"},{default:m(()=>[w("div",{class:K(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:P("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?W("",!0):(s(),p(S,{key:0,ref_key:"formRef",ref:f,onKeyup:t[11]||(t[11]=V(a=>e(o).onSubmit(f.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:v},{default:m(()=>[r(i,{label:e(l)("auth.admin.username"),modelValue:e(o).form.items.username,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).form.items.username=a),type:"string",prop:"username",placeholder:e(l)("auth.admin.Administrator login")},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.nickname"),modelValue:e(o).form.items.nickname,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).form.items.nickname=a),type:"string",prop:"nickname",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.nickname")})},null,8,["label","modelValue","placeholder"]),(s(),p(i,{label:e(l)("auth.admin.grouping"),modelValue:e(o).form.items.group_arr,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).form.items.group_arr=a),prop:"group_arr",type:"remoteSelect",key:"group-"+e(o).form.items.id,"input-attr":{multiple:!0,params:{isTree:!0,absoluteAuth:e(x).id==e(o).form.items.id?0:1},field:"name","remote-url":e(G)+"index",placeholder:e(l)("Click Select")}},null,8,["label","modelValue","input-attr"])),r(i,{label:e(l)("auth.admin.head portrait"),type:"image",modelValue:e(o).form.items.avatar,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).form.items.avatar=a)},null,8,["label","modelValue"]),r(i,{label:e(l)("auth.admin.mailbox"),prop:"email",modelValue:e(o).form.items.email,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).form.items.email=a),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mailbox")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.mobile"),prop:"mobile",modelValue:e(o).form.items.mobile,"onUpdate:modelValue":t[5]||(t[5]=a=>e(o).form.items.mobile=a),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mobile")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.Password"),prop:"password",modelValue:e(o).form.items.password,"onUpdate:modelValue":t[6]||(t[6]=a=>e(o).form.items.password=a),type:"password",placeholder:e(o).form.operate=="add"?e(l)("Please input field",{field:e(l)("auth.admin.Password")}):e(l)("auth.admin.Please leave blank if not modified")},null,8,["label","modelValue","placeholder"]),r(C,{prop:"motto",label:e(l)("auth.admin.Personal signature")},{default:m(()=>[r(n,{onKeyup:[t[7]||(t[7]=V(k(()=>{},["stop"]),["enter"])),t[8]||(t[8]=V(k(a=>e(o).onSubmit(f.value),["ctrl"]),["enter"]))],modelValue:e(o).form.items.motto,"onUpdate:modelValue":t[9]||(t[9]=a=>e(o).form.items.motto=a),type:"textarea",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.Personal signature")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(i,{label:e(l)("state"),modelValue:e(o).form.items.status,"onUpdate:modelValue":t[10]||(t[10]=a=>e(o).form.items.status=a),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[E,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ne=M(J,[["__scopeId","data-v-4b9195d8"]]);export{ne as default};
