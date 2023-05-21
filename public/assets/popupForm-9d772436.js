import{defineComponent as q,ref as z,inject as L,reactive as N,watch as Y,resolveComponent as u,resolveDirective as c,openBlock as i,createBlock as n,unref as e,withCtx as m,withDirectives as w,createElementBlock as j,createTextVNode as f,toDisplayString as b,createElementVNode as C,normalizeStyle as S,createVNode as a,normalizeClass as B,withKeys as k,createCommentVNode as U,withModifiers as F}from"vue";import{useI18n as K}from"vue-i18n";import{b as V,r as M}from"./validate-e09b6b50.js";import{F as g}from"./index-39d73c69.js";import{u as W}from"./controllerUrls-941681c3.js";import{r as G,_ as R}from"./index-89e26330.js";import"./index-0a827c2c.js";import"element-plus";import"vue-router";import"./index-d3b20950.js";import"pinia";import"vue-demi";const H={class:"title"},J=q({__name:"popupForm",setup(O){const _=z(),l=L("baTable"),{t:r}=K(),P=N({username:[V({name:"required",title:r("user.user.User name")}),V({name:"account"})],nickname:[V({name:"required",title:r("user.user.nickname")})],email:[V({name:"email",title:r("user.user.email")})],mobile:[V({name:"mobile"})],password:[{validator:(p,o,d)=>{if(l.form.operate=="add"){if(!o)return d(new Error(r("Please input field",{field:r("user.user.password")})))}else if(!o)return d();return M(o)?d():d(new Error(r("validate.Please enter the correct password")))},trigger:"blur"}]}),x=p=>{l.toggleForm(),G.push({name:p=="money"?"user/moneyLog":"user/scoreLog",query:{user_id:l.form.items.id}})};return Y(()=>l.form.operate,p=>{P.password[0].required=p=="add"}),(p,o)=>{const d=u("el-input"),s=u("el-form-item"),v=u("el-date-picker"),y=u("el-button"),D=u("el-form"),$=u("el-scrollbar"),h=u("el-dialog"),A=c("drag"),E=c("zoom"),I=c("loading"),T=c("blur");return i(),n(h,{class:"ba-operate-dialog","close-on-click-modal":!1,"destroy-on-close":!0,"model-value":!!e(l).form.operate,onClose:e(l).toggleForm},{header:m(()=>[w((i(),j("div",H,[f(b(e(l).form.operate?e(r)(e(l).form.operate):""),1)])),[[A,[".ba-operate-dialog",".el-dialog__header"]],[E,".ba-operate-dialog"]])]),footer:m(()=>[C("div",{style:S("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[a(y,{onClick:o[22]||(o[22]=t=>e(l).toggleForm(""))},{default:m(()=>[f(b(e(r)("Cancel")),1)]),_:1}),w((i(),n(y,{loading:e(l).form.submitLoading,onClick:o[23]||(o[23]=t=>e(l).onSubmit(_.value)),type:"primary"},{default:m(()=>[f(b(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(r)("Save and edit next item"):e(r)("Save")),1)]),_:1},8,["loading"])),[[T]])],4)]),default:m(()=>[w((i(),n($,{class:"ba-table-form-scrollbar"},{default:m(()=>[C("div",{class:B(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:S("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?U("",!0):(i(),n(D,{key:0,ref_key:"formRef",ref:_,onKeyup:o[21]||(o[21]=k(t=>e(l).onSubmit(_.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:P},{default:m(()=>[a(s,{prop:"username",label:e(r)("user.user.User name")},{default:m(()=>[a(d,{modelValue:e(l).form.items.username,"onUpdate:modelValue":o[0]||(o[0]=t=>e(l).form.items.username=t),type:"string",placeholder:e(r)("Please input field",{field:e(r)("user.user.User name")+"("+e(r)("user.user.Login account")+")"})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(s,{prop:"nickname",label:e(r)("user.user.nickname")},{default:m(()=>[a(d,{modelValue:e(l).form.items.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>e(l).form.items.nickname=t),type:"string",placeholder:e(r)("Please input field",{field:e(r)("user.user.nickname")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(g,{type:"remoteSelect",label:e(r)("user.user.grouping"),modelValue:e(l).form.items.group_id,"onUpdate:modelValue":o[2]||(o[2]=t=>e(l).form.items.group_id=t),placeholder:e(r)("user.user.grouping"),"input-attr":{params:{isTree:!0,search:[{field:"status",val:"1",operator:"="}]},field:"name","remote-url":e(W)+"index"}},null,8,["label","modelValue","placeholder","input-attr"]),a(g,{label:e(r)("user.user.head portrait"),type:"image",modelValue:e(l).form.items.avatar,"onUpdate:modelValue":o[3]||(o[3]=t=>e(l).form.items.avatar=t)},null,8,["label","modelValue"]),a(g,{type:"remoteSelect",label:"会员套餐",modelValue:e(l).form.items.product_id,"onUpdate:modelValue":o[4]||(o[4]=t=>e(l).form.items.product_id=t),placeholder:"请选择会员套餐","input-attr":{params:{isTree:!0,search:[]},field:"name","remote-url":"/admin/product/index"}},null,8,["modelValue"]),a(s,{prop:"num",label:"剩余聊天次数"},{default:m(()=>[a(d,{modelValue:e(l).form.items.num,"onUpdate:modelValue":o[5]||(o[5]=t=>e(l).form.items.num=t),type:"string",placeholder:e(r)("Please input field",{field:"剩余聊天次数"})},null,8,["modelValue","placeholder"])]),_:1}),a(s,{prop:"start_time",label:"会员起始时间"},{default:m(()=>[a(v,{class:"w100",modelValue:e(l).form.items.start_time,"onUpdate:modelValue":o[6]||(o[6]=t=>e(l).form.items.start_time=t),render:"datetime",placeholder:e(r)("Please select field",{field:"会员起始时间"})},null,8,["modelValue","placeholder"])]),_:1}),a(s,{prop:"end_time",label:"会员结束时间"},{default:m(()=>[a(v,{class:"w100",modelValue:e(l).form.items.end_time,"onUpdate:modelValue":o[7]||(o[7]=t=>e(l).form.items.end_time=t),render:"datetime",placeholder:e(r)("Please select field",{field:"会员结束时间"})},null,8,["modelValue","placeholder"])]),_:1}),a(s,{prop:"email",label:e(r)("user.user.email")},{default:m(()=>[a(d,{modelValue:e(l).form.items.email,"onUpdate:modelValue":o[8]||(o[8]=t=>e(l).form.items.email=t),type:"string",placeholder:e(r)("Please input field",{field:e(r)("user.user.email")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(s,{prop:"mobile",label:e(r)("user.user.mobile")},{default:m(()=>[a(d,{modelValue:e(l).form.items.mobile,"onUpdate:modelValue":o[9]||(o[9]=t=>e(l).form.items.mobile=t),type:"string",placeholder:e(r)("Please input field",{field:e(r)("user.user.mobile")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(g,{label:e(r)("user.user.Gender"),modelValue:e(l).form.items.gender,"onUpdate:modelValue":o[10]||(o[10]=t=>e(l).form.items.gender=t),type:"radio",data:{content:{0:e(r)("unknown"),1:e(r)("user.user.male"),2:e(r)("user.user.female")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"]),a(s,{label:e(r)("user.user.birthday")},{default:m(()=>[a(v,{class:"w100","value-format":"YYYY-MM-DD",modelValue:e(l).form.items.birthday,"onUpdate:modelValue":o[11]||(o[11]=t=>e(l).form.items.birthday=t),type:"date",placeholder:e(r)("Please select field",{field:e(r)("user.user.birthday")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(l).form.operate=="edit"?(i(),n(s,{key:0,label:e(r)("user.user.balance")},{default:m(()=>[a(d,{modelValue:e(l).form.items.money,"onUpdate:modelValue":o[13]||(o[13]=t=>e(l).form.items.money=t),readonly:""},{append:m(()=>[a(y,{onClick:o[12]||(o[12]=t=>x("money"))},{default:m(()=>[f(b(e(r)("user.user.Adjustment balance")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):U("",!0),e(l).form.operate=="edit"?(i(),n(s,{key:1,label:e(r)("user.user.integral")},{default:m(()=>[a(d,{modelValue:e(l).form.items.score,"onUpdate:modelValue":o[15]||(o[15]=t=>e(l).form.items.score=t),readonly:""},{append:m(()=>[a(y,{onClick:o[14]||(o[14]=t=>x("score"))},{default:m(()=>[f(b(e(r)("user.user.Adjust integral")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):U("",!0),a(s,{prop:"password",label:e(r)("user.user.password")},{default:m(()=>[a(d,{modelValue:e(l).form.items.password,"onUpdate:modelValue":o[16]||(o[16]=t=>e(l).form.items.password=t),type:"password",placeholder:e(l).form.operate=="add"?e(r)("Please input field",{field:e(r)("user.user.password")}):e(r)("user.user.Please leave blank if not modified")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(s,{prop:"motto",label:e(r)("user.user.Personal signature")},{default:m(()=>[a(d,{onKeyup:[o[17]||(o[17]=k(F(()=>{},["stop"]),["enter"])),o[18]||(o[18]=k(F(t=>e(l).onSubmit(_.value),["ctrl"]),["enter"]))],modelValue:e(l).form.items.motto,"onUpdate:modelValue":o[19]||(o[19]=t=>e(l).form.items.motto=t),type:"textarea",placeholder:e(r)("Please input field",{field:e(r)("user.user.Personal signature")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(g,{label:e(r)("state"),modelValue:e(l).form.items.status,"onUpdate:modelValue":o[20]||(o[20]=t=>e(l).form.items.status=t),type:"radio",data:{content:{disable:e(r)("Disable"),enable:e(r)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[I,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ue=R(J,[["__scopeId","data-v-95b81f9b"]]);export{ue as default};
