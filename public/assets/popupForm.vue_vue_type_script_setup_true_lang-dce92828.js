import{h as F,L,r as M,p as u,C as i,D as r,N as g,l as N,U as _,M as b,k as e,o as y,q as n,m as U,$ as v,S as p,a6 as R,T as $,al as B,t as s,R as c}from"./vue-8b21a996.js";import{l as W}from"./index-714877db.js";import{F as f}from"./index-90c66895.js";import{b as w}from"./validate-11156ce9.js";const q={class:"title"},K={class:"block-help"},j={class:"block-help"},X=F({__name:"popupForm",setup(G){const h=L(),t=B("baTable"),{t:l}=W(),x=M({title:[w({name:"required",title:l("auth.menu.Rule title")})],name:[w({name:"required",title:l("auth.menu.Rule name")})],url:[w({name:"url",message:l("auth.menu.Please enter the correct URL")})],pid:[{validator:(C,o,m)=>o&&parseInt(o)==parseInt(t.form.items.id)?m(new Error(l("auth.menu.The superior menu rule cannot be the rule itself"))):m(),trigger:"blur"}]});return(C,o)=>{const m=s("el-input"),d=s("el-form-item"),V=s("el-option"),S=s("el-select"),I=s("el-form"),T=s("el-scrollbar"),k=s("el-button"),A=s("el-dialog"),D=c("drag"),E=c("zoom"),P=c("loading"),z=c("blur");return u(),i(A,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(t).form.operate,onClose:e(t).toggleForm},{header:r(()=>[g((u(),N("div",q,[_(b(e(t).form.operate?e(l)(e(t).form.operate):""),1)])),[[D,[".ba-operate-dialog",".el-dialog__header"]],[E,".ba-operate-dialog"]])]),footer:r(()=>[y("div",{style:U("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[n(k,{onClick:o[17]||(o[17]=a=>e(t).toggleForm(""))},{default:r(()=>[_(b(e(l)("Cancel")),1)]),_:1}),g((u(),i(k,{loading:e(t).form.submitLoading,onClick:o[18]||(o[18]=a=>e(t).onSubmit(h.value)),type:"primary"},{default:r(()=>[_(b(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:r(()=>[g((u(),i(T,{class:"ba-table-form-scrollbar"},{default:r(()=>[y("div",{class:$(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:U("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?p("",!0):(u(),i(I,{key:0,ref_key:"formRef",ref:h,onKeyup:o[16]||(o[16]=v(a=>e(t).onSubmit(h.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:x},{default:r(()=>[n(f,{type:"remoteSelect",prop:"pid",label:e(l)("auth.menu.Superior menu rule"),modelValue:e(t).form.items.pid,"onUpdate:modelValue":o[0]||(o[0]=a=>e(t).form.items.pid=a),placeholder:e(l)("Click Select"),"input-attr":{params:{isTree:!0},field:"title","remote-url":e(t).api.actionUrl.get("index")}},null,8,["label","modelValue","placeholder","input-attr"]),n(f,{label:e(l)("auth.menu.Rule type"),modelValue:e(t).form.items.type,"onUpdate:modelValue":o[1]||(o[1]=a=>e(t).form.items.type=a),type:"radio",data:{content:{menu_dir:e(l)("auth.menu.type menu_dir"),menu:e(l)("auth.menu.type menu"),button:e(l)("auth.menu.type button")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"]),n(d,{prop:"title",label:e(l)("auth.menu.Rule title")},{default:r(()=>[n(m,{modelValue:e(t).form.items.title,"onUpdate:modelValue":o[2]||(o[2]=a=>e(t).form.items.title=a),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.menu.Rule title")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(d,{prop:"name",label:e(l)("auth.menu.Rule name")},{default:r(()=>[n(m,{modelValue:e(t).form.items.name,"onUpdate:modelValue":o[3]||(o[3]=a=>e(t).form.items.name=a),type:"string",placeholder:e(l)("auth.menu.English name, which does not need to start with `/admin`, such as auth/menu")},null,8,["modelValue","placeholder"]),y("div",K,b(e(l)("auth.menu.It will be registered as the web side routing name and used as the server side API authentication")),1)]),_:1},8,["label"]),e(t).form.items.type!="button"?(u(),i(d,{key:0,label:e(l)("auth.menu.Routing path")},{default:r(()=>[n(m,{modelValue:e(t).form.items.path,"onUpdate:modelValue":o[4]||(o[4]=a=>e(t).form.items.path=a),type:"string",placeholder:e(l)("auth.menu.The web side routing path (path) does not need to start with `/admin`, such as auth/menu")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):p("",!0),e(t).form.operate&&e(t).form.items.type!="button"?(u(),i(f,{key:1,type:"icon",label:e(l)("auth.menu.Rule Icon"),modelValue:e(t).form.items.icon,"onUpdate:modelValue":o[5]||(o[5]=a=>e(t).form.items.icon=a),"input-attr":{"show-icon-name":!0}},null,8,["label","modelValue"])):p("",!0),e(t).form.items.type=="menu"?(u(),i(f,{key:2,label:e(l)("auth.menu.Menu type"),modelValue:e(t).form.items.menu_type,"onUpdate:modelValue":o[6]||(o[6]=a=>e(t).form.items.menu_type=a),type:"radio",data:{content:{tab:e(l)("auth.menu.Menu type tab"),link:e(l)("auth.menu.Menu type link (offsite)"),iframe:"Iframe"},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])):p("",!0),e(t).form.items.menu_type!="tab"?(u(),i(d,{key:3,prop:"url",label:e(l)("auth.menu.Link address")},{default:r(()=>[n(m,{modelValue:e(t).form.items.url,"onUpdate:modelValue":o[7]||(o[7]=a=>e(t).form.items.url=a),type:"string",placeholder:e(l)("auth.menu.Please enter the URL address of the link or iframe")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):p("",!0),e(t).form.items.type=="menu"&&e(t).form.items.menu_type=="tab"?(u(),i(d,{key:4,label:e(l)("auth.menu.Component path")},{default:r(()=>[n(m,{modelValue:e(t).form.items.component,"onUpdate:modelValue":o[8]||(o[8]=a=>e(t).form.items.component=a),type:"string",placeholder:e(l)("auth.menu.Web side component path, please start with /src, such as: /src/views/backend/dashboard")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):p("",!0),e(t).form.items.type=="menu"&&e(t).form.items.menu_type=="tab"?(u(),i(d,{key:5,label:e(l)("auth.menu.Extended properties")},{default:r(()=>[n(S,{class:"w100",modelValue:e(t).form.items.extend,"onUpdate:modelValue":o[9]||(o[9]=a=>e(t).form.items.extend=a),placeholder:e(l)("Please select field",{field:e(l)("auth.menu.Extended properties")})},{default:r(()=>[n(V,{label:e(l)("auth.menu.none"),value:"none"},null,8,["label"]),n(V,{label:e(l)("auth.menu.Add as route only"),value:"add_rules_only"},null,8,["label"]),n(V,{label:e(l)("auth.menu.Add as menu only"),value:"add_menu_only"},null,8,["label"])]),_:1},8,["modelValue","placeholder"]),y("div",j,b(e(l)("auth.menu.extend Title")),1)]),_:1},8,["label"])):p("",!0),n(d,{label:e(l)("auth.menu.Rule comments")},{default:r(()=>[n(m,{onKeyup:[o[10]||(o[10]=v(R(()=>{},["stop"]),["enter"])),o[11]||(o[11]=v(R(a=>e(t).onSubmit(h.value),["ctrl"]),["enter"]))],modelValue:e(t).form.items.remark,"onUpdate:modelValue":o[12]||(o[12]=a=>e(t).form.items.remark=a),type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:e(l)("auth.menu.Use in controller `get_ route_ Remark()` function, which can obtain the value of this field for your own use, such as the banner file of the console")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(d,{label:e(l)("auth.menu.Rule weight")},{default:r(()=>[n(m,{modelValue:e(t).form.items.weigh,"onUpdate:modelValue":o[13]||(o[13]=a=>e(t).form.items.weigh=a),type:"number",placeholder:e(l)("auth.menu.Please enter the weight of menu rule (sort by)")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(f,{label:e(l)("auth.menu.cache"),modelValue:e(t).form.items.keepalive,"onUpdate:modelValue":o[14]||(o[14]=a=>e(t).form.items.keepalive=a),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"]),n(f,{label:e(l)("state"),modelValue:e(t).form.items.status,"onUpdate:modelValue":o[15]||(o[15]=a=>e(t).form.items.status=a),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[P,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{X as _};
