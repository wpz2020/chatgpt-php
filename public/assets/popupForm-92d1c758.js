import{h as A,L,r as W,p as n,C as u,D as m,N as v,l as $,U as _,M as s,k as e,o as h,q as r,m as R,$ as k,S as b,a6 as U,T as B,al as q,t as i,R as y}from"./vue-8b21a996.js";import{l as K,_ as j}from"./index-dda703f5.js";import{F as g}from"./index-38d8351b.js";import{b as w}from"./validate-0d2c1515.js";import"./index-7f4811f3.js";import"./controllerUrls-941681c3.js";import"./index-f5c1ef38.js";const G={class:"title"},H={class:"block-help"},J={class:"block-help"},O=A({__name:"popupForm",setup(Q){const c=L(),l=q("baTable"),{t}=K(),C=W({title:[w({name:"required",title:t("auth.menu.Rule title")})],pid:[{validator:(I,o,p)=>o&&parseInt(o)==parseInt(l.form.items.id)?p(new Error(t("auth.menu.The superior menu rule cannot be the rule itself"))):p(),trigger:"blur"}],name:[w({name:"required",title:t("auth.menu.Rule name")})],url:[w({name:"url",message:t("auth.menu.Please enter the correct URL")})]});return(I,o)=>{const p=i("el-radio"),S=i("el-radio-group"),d=i("el-form-item"),f=i("el-input"),V=i("el-option"),F=i("el-select"),P=i("el-form"),M=i("el-scrollbar"),x=i("el-button"),D=i("el-dialog"),E=y("drag"),N=y("zoom"),T=y("loading"),z=y("blur");return n(),u(D,{class:"ba-operate-dialog",top:"5vh","close-on-click-modal":!1,"model-value":!!e(l).form.operate,onClose:e(l).toggleForm},{header:m(()=>[v((n(),$("div",G,[_(s(e(l).form.operate?e(t)(e(l).form.operate):""),1)])),[[E,[".ba-operate-dialog",".el-dialog__header"]],[N,".ba-operate-dialog"]])]),footer:m(()=>[h("div",{style:R("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[r(x,{onClick:o[16]||(o[16]=a=>e(l).toggleForm(""))},{default:m(()=>[_(s(e(t)("Cancel")),1)]),_:1}),v((n(),u(x,{loading:e(l).form.submitLoading,onClick:o[17]||(o[17]=a=>e(l).onSubmit(c.value)),type:"primary"},{default:m(()=>[_(s(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(t)("Save and edit next item"):e(t)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:m(()=>[v((n(),u(M,{class:"ba-table-form-scrollbar"},{default:m(()=>[h("div",{class:B(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:R("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?b("",!0):(n(),u(P,{key:0,ref_key:"formRef",ref:c,onKeyup:o[15]||(o[15]=k(a=>e(l).onSubmit(c.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:C},{default:m(()=>[r(g,{type:"remoteSelect",prop:"pid",label:e(t)("auth.menu.Superior menu rule"),modelValue:e(l).form.items.pid,"onUpdate:modelValue":o[0]||(o[0]=a=>e(l).form.items.pid=a),placeholder:e(t)("Click Select"),"input-attr":{params:{isTree:!0},field:"title","remote-url":e(l).api.actionUrl.get("index")}},null,8,["label","modelValue","placeholder","input-attr"]),r(d,{label:e(t)("auth.menu.Rule type")},{default:m(()=>[r(S,{modelValue:e(l).form.items.type,"onUpdate:modelValue":o[1]||(o[1]=a=>e(l).form.items.type=a)},{default:m(()=>[r(p,{class:"ba-el-radio",label:"route",border:!0},{default:m(()=>[_(s(e(t)("user.rule.Normal routing")),1)]),_:1}),r(p,{class:"ba-el-radio",label:"menu_dir",border:!0},{default:m(()=>[_(s(e(t)("user.rule.Member center menu contents")),1)]),_:1}),r(p,{class:"ba-el-radio",label:"menu",border:!0},{default:m(()=>[_(s(e(t)("user.rule.Member center menu items")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(d,{prop:"title",label:e(t)("auth.menu.Rule title")},{default:m(()=>[r(f,{modelValue:e(l).form.items.title,"onUpdate:modelValue":o[2]||(o[2]=a=>e(l).form.items.title=a),type:"string",placeholder:e(t)("Please input field",{field:e(t)("auth.menu.Rule title")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(d,{prop:"name",label:e(t)("auth.menu.Rule name")},{default:m(()=>[r(f,{modelValue:e(l).form.items.name,"onUpdate:modelValue":o[3]||(o[3]=a=>e(l).form.items.name=a),type:"string",placeholder:e(t)("user.rule.English name")},null,8,["modelValue","placeholder"]),h("div",H,s(e(t)("auth.menu.It will be registered as the web side routing name and used as the server side API authentication")),1)]),_:1},8,["label"]),e(l).form.items.type!="button"?(n(),u(d,{key:0,label:e(t)("auth.menu.Routing path")},{default:m(()=>[r(f,{modelValue:e(l).form.items.path,"onUpdate:modelValue":o[4]||(o[4]=a=>e(l).form.items.path=a),type:"string",placeholder:e(t)("user.rule.Web side routing path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):b("",!0),e(l).form.operate&&e(l).form.items.type!="button"?(n(),u(g,{key:1,type:"icon",label:e(t)("auth.menu.Rule Icon"),modelValue:e(l).form.items.icon,"onUpdate:modelValue":o[5]||(o[5]=a=>e(l).form.items.icon=a),"input-attr":{"show-icon-name":!0}},null,8,["label","modelValue"])):b("",!0),e(l).form.items.type=="menu"?(n(),u(g,{key:2,label:e(t)("auth.menu.Menu type"),modelValue:e(l).form.items.menu_type,"onUpdate:modelValue":o[6]||(o[6]=a=>e(l).form.items.menu_type=a),type:"radio",data:{content:{tab:e(t)("auth.menu.Menu type tab"),link:e(t)("auth.menu.Menu type link (offsite)"),iframe:"Iframe"},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])):b("",!0),e(l).form.items.menu_type!="tab"?(n(),u(d,{key:3,prop:"url",label:e(t)("auth.menu.Link address")},{default:m(()=>[r(f,{modelValue:e(l).form.items.url,"onUpdate:modelValue":o[7]||(o[7]=a=>e(l).form.items.url=a),type:"string",placeholder:e(t)("auth.menu.Please enter the URL address of the link or iframe")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):b("",!0),e(l).form.items.type=="menu"&&e(l).form.items.menu_type=="tab"?(n(),u(d,{key:4,label:e(t)("auth.menu.Component path")},{default:m(()=>[r(f,{modelValue:e(l).form.items.component,"onUpdate:modelValue":o[8]||(o[8]=a=>e(l).form.items.component=a),type:"string",placeholder:e(t)("user.rule.For example, if you add account/overview as a route only")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):b("",!0),e(l).form.items.type=="menu"&&e(l).form.items.menu_type=="tab"?(n(),u(d,{key:5,label:e(t)("auth.menu.Extended properties")},{default:m(()=>[r(F,{class:"w100",modelValue:e(l).form.items.extend,"onUpdate:modelValue":o[9]||(o[9]=a=>e(l).form.items.extend=a),placeholder:e(t)("Please select field",{field:e(t)("auth.menu.Extended properties")})},{default:m(()=>[r(V,{label:e(t)("auth.menu.none"),value:"none"},null,8,["label"]),r(V,{label:e(t)("auth.menu.Add as route only"),value:"add_rules_only"},null,8,["label"]),r(V,{label:e(t)("auth.menu.Add as menu only"),value:"add_menu_only"},null,8,["label"])]),_:1},8,["modelValue","placeholder"]),h("div",J,s(e(t)("user.rule.Web side component path, please start with /src, such as: /src/views/frontend/index")),1)]),_:1},8,["label"])):b("",!0),r(d,{label:e(t)("auth.menu.Rule comments")},{default:m(()=>[r(f,{onKeyup:[o[10]||(o[10]=k(U(()=>{},["stop"]),["enter"])),o[11]||(o[11]=k(U(a=>e(l).onSubmit(c.value),["ctrl"]),["enter"]))],modelValue:e(l).form.items.remark,"onUpdate:modelValue":o[12]||(o[12]=a=>e(l).form.items.remark=a),type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:e(t)("Please input field",{field:e(t)("auth.menu.Rule comments")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(d,{label:e(t)("auth.menu.Rule weight")},{default:m(()=>[r(f,{modelValue:e(l).form.items.weigh,"onUpdate:modelValue":o[13]||(o[13]=a=>e(l).form.items.weigh=a),type:"number",placeholder:e(t)("auth.menu.Please enter the weight of menu rule (sort by)")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(g,{label:e(t)("state"),modelValue:e(l).form.items.status,"onUpdate:modelValue":o[14]||(o[14]=a=>e(l).form.items.status=a),type:"radio",data:{content:{0:e(t)("Disable"),1:e(t)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[T,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ae=j(O,[["__scopeId","data-v-0694192d"]]);export{ae as default};
