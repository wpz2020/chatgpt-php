import{defineComponent as T,ref as W,inject as L,reactive as $,resolveComponent as u,resolveDirective as h,openBlock as n,createBlock as i,unref as e,withCtx as m,withDirectives as v,createElementBlock as B,createTextVNode as _,toDisplayString as s,createElementVNode as y,normalizeStyle as R,createVNode as a,normalizeClass as K,withKeys as w,createCommentVNode as b,withModifiers as U}from"vue";import{useI18n as q}from"vue-i18n";import{F as g}from"./index-39d73c69.js";import{b as k}from"./validate-e09b6b50.js";import{_ as j}from"./index-89e26330.js";import"./index-0a827c2c.js";import"element-plus";import"vue-router";import"./controllerUrls-941681c3.js";import"./index-d3b20950.js";import"pinia";import"vue-demi";const G={class:"title"},H={class:"block-help"},J={class:"block-help"},O=T({__name:"popupForm",setup(Q){const c=W(),l=L("baTable"),{t}=q(),C=$({title:[k({name:"required",title:t("auth.menu.Rule title")})],pid:[{validator:(I,o,p)=>o&&parseInt(o)==parseInt(l.form.items.id)?p(new Error(t("auth.menu.The superior menu rule cannot be the rule itself"))):p(),trigger:"blur"}],name:[k({name:"required",title:t("auth.menu.Rule name")})],url:[k({name:"url",message:t("auth.menu.Please enter the correct URL")})]});return(I,o)=>{const p=u("el-radio"),S=u("el-radio-group"),d=u("el-form-item"),f=u("el-input"),V=u("el-option"),F=u("el-select"),P=u("el-form"),E=u("el-scrollbar"),x=u("el-button"),M=u("el-dialog"),z=h("drag"),A=h("zoom"),D=h("loading"),N=h("blur");return n(),i(M,{class:"ba-operate-dialog",top:"5vh","close-on-click-modal":!1,"model-value":!!e(l).form.operate,onClose:e(l).toggleForm},{header:m(()=>[v((n(),B("div",G,[_(s(e(l).form.operate?e(t)(e(l).form.operate):""),1)])),[[z,[".ba-operate-dialog",".el-dialog__header"]],[A,".ba-operate-dialog"]])]),footer:m(()=>[y("div",{style:R("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[a(x,{onClick:o[16]||(o[16]=r=>e(l).toggleForm(""))},{default:m(()=>[_(s(e(t)("Cancel")),1)]),_:1}),v((n(),i(x,{loading:e(l).form.submitLoading,onClick:o[17]||(o[17]=r=>e(l).onSubmit(c.value)),type:"primary"},{default:m(()=>[_(s(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(t)("Save and edit next item"):e(t)("Save")),1)]),_:1},8,["loading"])),[[N]])],4)]),default:m(()=>[v((n(),i(E,{class:"ba-table-form-scrollbar"},{default:m(()=>[y("div",{class:K(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:R("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?b("",!0):(n(),i(P,{key:0,ref_key:"formRef",ref:c,onKeyup:o[15]||(o[15]=w(r=>e(l).onSubmit(c.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:C},{default:m(()=>[a(g,{type:"remoteSelect",prop:"pid",label:e(t)("auth.menu.Superior menu rule"),modelValue:e(l).form.items.pid,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).form.items.pid=r),placeholder:e(t)("Click Select"),"input-attr":{params:{isTree:!0},field:"title","remote-url":e(l).api.actionUrl.get("index")}},null,8,["label","modelValue","placeholder","input-attr"]),a(d,{label:e(t)("auth.menu.Rule type")},{default:m(()=>[a(S,{modelValue:e(l).form.items.type,"onUpdate:modelValue":o[1]||(o[1]=r=>e(l).form.items.type=r)},{default:m(()=>[a(p,{class:"ba-el-radio",label:"route",border:!0},{default:m(()=>[_(s(e(t)("user.rule.Normal routing")),1)]),_:1}),a(p,{class:"ba-el-radio",label:"menu_dir",border:!0},{default:m(()=>[_(s(e(t)("user.rule.Member center menu contents")),1)]),_:1}),a(p,{class:"ba-el-radio",label:"menu",border:!0},{default:m(()=>[_(s(e(t)("user.rule.Member center menu items")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(d,{prop:"title",label:e(t)("auth.menu.Rule title")},{default:m(()=>[a(f,{modelValue:e(l).form.items.title,"onUpdate:modelValue":o[2]||(o[2]=r=>e(l).form.items.title=r),type:"string",placeholder:e(t)("Please input field",{field:e(t)("auth.menu.Rule title")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{prop:"name",label:e(t)("auth.menu.Rule name")},{default:m(()=>[a(f,{modelValue:e(l).form.items.name,"onUpdate:modelValue":o[3]||(o[3]=r=>e(l).form.items.name=r),type:"string",placeholder:e(t)("user.rule.English name")},null,8,["modelValue","placeholder"]),y("div",H,s(e(t)("auth.menu.It will be registered as the web side routing name and used as the server side API authentication")),1)]),_:1},8,["label"]),e(l).form.items.type!="button"?(n(),i(d,{key:0,label:e(t)("auth.menu.Routing path")},{default:m(()=>[a(f,{modelValue:e(l).form.items.path,"onUpdate:modelValue":o[4]||(o[4]=r=>e(l).form.items.path=r),type:"string",placeholder:e(t)("user.rule.Web side routing path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):b("",!0),e(l).form.operate&&e(l).form.items.type!="button"?(n(),i(g,{key:1,type:"icon",label:e(t)("auth.menu.Rule Icon"),modelValue:e(l).form.items.icon,"onUpdate:modelValue":o[5]||(o[5]=r=>e(l).form.items.icon=r),"input-attr":{"show-icon-name":!0}},null,8,["label","modelValue"])):b("",!0),e(l).form.items.type=="menu"?(n(),i(g,{key:2,label:e(t)("auth.menu.Menu type"),modelValue:e(l).form.items.menu_type,"onUpdate:modelValue":o[6]||(o[6]=r=>e(l).form.items.menu_type=r),type:"radio",data:{content:{tab:e(t)("auth.menu.Menu type tab"),link:e(t)("auth.menu.Menu type link (offsite)"),iframe:"Iframe"},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])):b("",!0),e(l).form.items.menu_type!="tab"?(n(),i(d,{key:3,prop:"url",label:e(t)("auth.menu.Link address")},{default:m(()=>[a(f,{modelValue:e(l).form.items.url,"onUpdate:modelValue":o[7]||(o[7]=r=>e(l).form.items.url=r),type:"string",placeholder:e(t)("auth.menu.Please enter the URL address of the link or iframe")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):b("",!0),e(l).form.items.type=="menu"&&e(l).form.items.menu_type=="tab"?(n(),i(d,{key:4,label:e(t)("auth.menu.Component path")},{default:m(()=>[a(f,{modelValue:e(l).form.items.component,"onUpdate:modelValue":o[8]||(o[8]=r=>e(l).form.items.component=r),type:"string",placeholder:e(t)("user.rule.For example, if you add account/overview as a route only")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):b("",!0),e(l).form.items.type=="menu"&&e(l).form.items.menu_type=="tab"?(n(),i(d,{key:5,label:e(t)("auth.menu.Extended properties")},{default:m(()=>[a(F,{class:"w100",modelValue:e(l).form.items.extend,"onUpdate:modelValue":o[9]||(o[9]=r=>e(l).form.items.extend=r),placeholder:e(t)("Please select field",{field:e(t)("auth.menu.Extended properties")})},{default:m(()=>[a(V,{label:e(t)("auth.menu.none"),value:"none"},null,8,["label"]),a(V,{label:e(t)("auth.menu.Add as route only"),value:"add_rules_only"},null,8,["label"]),a(V,{label:e(t)("auth.menu.Add as menu only"),value:"add_menu_only"},null,8,["label"])]),_:1},8,["modelValue","placeholder"]),y("div",J,s(e(t)("user.rule.Web side component path, please start with /src, such as: /src/views/frontend/index")),1)]),_:1},8,["label"])):b("",!0),a(d,{label:e(t)("auth.menu.Rule comments")},{default:m(()=>[a(f,{onKeyup:[o[10]||(o[10]=w(U(()=>{},["stop"]),["enter"])),o[11]||(o[11]=w(U(r=>e(l).onSubmit(c.value),["ctrl"]),["enter"]))],modelValue:e(l).form.items.remark,"onUpdate:modelValue":o[12]||(o[12]=r=>e(l).form.items.remark=r),type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:e(t)("Please input field",{field:e(t)("auth.menu.Rule comments")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{label:e(t)("auth.menu.Rule weight")},{default:m(()=>[a(f,{modelValue:e(l).form.items.weigh,"onUpdate:modelValue":o[13]||(o[13]=r=>e(l).form.items.weigh=r),type:"number",placeholder:e(t)("auth.menu.Please enter the weight of menu rule (sort by)")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(g,{label:e(t)("state"),modelValue:e(l).form.items.status,"onUpdate:modelValue":o[14]||(o[14]=r=>e(l).form.items.status=r),type:"radio",data:{content:{0:e(t)("Disable"),1:e(t)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[D,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ie=j(O,[["__scopeId","data-v-0694192d"]]);export{ie as default};