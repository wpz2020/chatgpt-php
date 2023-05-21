import{d as I,H as D,$ as E,r as N,f as m,Y as u,b as n,z as v,c as g,h as c,i as V,j as e,g as y,a as s,I as q,N as R,x as d,F as z,y as $,R as h,e as p,aC as f}from"./index-9250cf41.js";import{F as o}from"./index-5cf5ba2e.js";import{b as i}from"./validate-d30190a1.js";const B={class:"title"},X=I({__name:"popupForm",setup(T){const b=D(),a=h("baTable"),{t:l}=E(),k=N({name:[i({name:"required",title:l("sms.variable.name")}),i({name:"varName"})],value_source:[i({name:"required",title:l("sms.variable.value_source")})],value:[i({name:"required",title:l("sms.variable.value")})],sql:[i({name:"required",title:l("sms.variable.sql")})],namespace:[i({name:"required",title:l("sms.variable.namespace")})],class:[i({name:"required",title:l("sms.variable.class")})],func:[i({name:"required",title:l("sms.variable.func")})],param:[i({name:"required",title:l("sms.variable.param")})]});return(L,t)=>{const C=p("el-form"),P=p("el-scrollbar"),_=p("el-button"),F=p("el-dialog"),U=f("drag"),x=f("zoom"),S=f("loading"),w=f("blur");return m(),u(F,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(a).form.operate,onClose:e(a).toggleForm},{header:n(()=>[v((m(),g("div",B,[c(V(e(a).form.operate?e(l)(e(a).form.operate):""),1)])),[[U,[".ba-operate-dialog",".el-dialog__header"]],[x,".ba-operate-dialog"]])]),footer:n(()=>[y("div",{style:q("width: calc(100% - "+e(a).form.labelWidth/1.8+"px)")},[s(_,{onClick:t[11]||(t[11]=r=>e(a).toggleForm(""))},{default:n(()=>[c(V(e(l)("Cancel")),1)]),_:1}),v((m(),u(_,{loading:e(a).form.submitLoading,onClick:t[12]||(t[12]=r=>e(a).onSubmit(b.value)),type:"primary"},{default:n(()=>[c(V(e(a).form.operateIds&&e(a).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[w]])],4)]),default:n(()=>[v((m(),u(P,{class:"ba-table-form-scrollbar"},{default:n(()=>[y("div",{class:$(["ba-operate-form","ba-"+e(a).form.operate+"-form"]),style:q("width: calc(100% - "+e(a).form.labelWidth/2+"px)")},[e(a).form.loading?d("",!0):(m(),u(C,{key:0,ref_key:"formRef",ref:b,onKeyup:t[10]||(t[10]=R(r=>e(a).onSubmit(b.value),["enter"])),model:e(a).form.items,"label-position":"right","label-width":e(a).form.labelWidth+"px",rules:k},{default:n(()=>[s(o,{label:e(l)("sms.variable.title"),type:"string",modelValue:e(a).form.items.title,"onUpdate:modelValue":t[0]||(t[0]=r=>e(a).form.items.title=r),prop:"title","input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.title")})}},null,8,["label","modelValue","input-attr"]),s(o,{label:e(l)("sms.variable.name"),type:"string",modelValue:e(a).form.items.name,"onUpdate:modelValue":t[1]||(t[1]=r=>e(a).form.items.name=r),prop:"name",attr:{"block-help":"可在短信模板中使用变量，发送短信时自动计算变量值：${"+(e(a).form.items.name?e(a).form.items.name:"name")+"}"},"input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.name")})}},null,8,["label","modelValue","attr","input-attr"]),s(o,{label:e(l)("sms.variable.value_source"),type:"radio",modelValue:e(a).form.items.value_source,"onUpdate:modelValue":t[2]||(t[2]=r=>e(a).form.items.value_source=r),prop:"value_source",data:{content:{literal:e(l)("sms.variable.value_source literal"),func:e(l)("sms.variable.value_source func"),sql:e(l)("sms.variable.value_source sql")}},"input-attr":{placeholder:e(l)("Please select field",{field:e(l)("sms.variable.value_source")})}},null,8,["label","modelValue","data","input-attr"]),e(a).form.items.value_source=="literal"?(m(),u(o,{key:0,label:e(l)("sms.variable.value"),type:"string",modelValue:e(a).form.items.value,"onUpdate:modelValue":t[3]||(t[3]=r=>e(a).form.items.value=r),prop:"value","input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.value")})}},null,8,["label","modelValue","input-attr"])):d("",!0),e(a).form.items.value_source=="sql"?(m(),u(o,{key:1,label:e(l)("sms.variable.sql"),type:"string",modelValue:e(a).form.items.sql,"onUpdate:modelValue":t[4]||(t[4]=r=>e(a).form.items.sql=r),prop:"sql","input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.sql")})},attr:{"block-help":"可使用 __PREFIX__ 表示数据表前缀，如 SELECT count(id) FROM __PREFIX__user 将在需要时自动使用 Db::query(SQL) 来获取变量值"}},null,8,["label","modelValue","input-attr","attr"])):d("",!0),e(a).form.items.value_source=="func"?(m(),g(z,{key:2},[s(o,{label:e(l)("sms.variable.namespace"),type:"string",modelValue:e(a).form.items.namespace,"onUpdate:modelValue":t[5]||(t[5]=r=>e(a).form.items.namespace=r),prop:"namespace","input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.namespace")})}},null,8,["label","modelValue","input-attr"]),s(o,{label:e(l)("sms.variable.class"),type:"string",modelValue:e(a).form.items.class,"onUpdate:modelValue":t[6]||(t[6]=r=>e(a).form.items.class=r),prop:"class","input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.class")})}},null,8,["label","modelValue","input-attr"]),s(o,{label:e(l)("sms.variable.func"),type:"string",modelValue:e(a).form.items.func,"onUpdate:modelValue":t[7]||(t[7]=r=>e(a).form.items.func=r),prop:"func","input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.func")})}},null,8,["label","modelValue","input-attr"]),s(o,{label:e(l)("sms.variable.param"),type:"string",modelValue:e(a).form.items.param,"onUpdate:modelValue":t[8]||(t[8]=r=>e(a).form.items.param=r),prop:"param",attr:{"block-help":"自动执行对应的方法并传递以上参数来获取变量的值"},"input-attr":{placeholder:e(l)("Please input field",{field:e(l)("sms.variable.param")})}},null,8,["label","modelValue","input-attr"])],64)):d("",!0),s(o,{label:e(l)("state"),modelValue:e(a).form.items.status,"onUpdate:modelValue":t[9]||(t[9]=r=>e(a).form.items.status=r),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[S,e(a).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{X as _};
