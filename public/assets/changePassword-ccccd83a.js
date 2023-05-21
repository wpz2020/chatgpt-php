import{d as b,$ as v,q as V,H as y,r as C,e as i,f as S,c as N,a as n,b as l,g as $,N as I,j as a,ad as L,h as p,i as f,b9 as q,_ as x}from"./index-9250cf41.js";import{b as u}from"./validate-d30190a1.js";import{F as w}from"./index-5cf5ba2e.js";import"./index-47490f62.js";import"./controllerUrls-941681c3.js";import"./index-bb9265a5.js";const R={class:"user-views"},U={class:"change-password"},k=b({__name:"changePassword",setup(B){const{t:s}=v(),P=V(),m=y(),e=C({formSubmitLoading:!1,form:{oldPassword:"",newPassword:"",confirmPassword:""},rules:{oldPassword:[u({name:"required",title:s("user.account.changePassword.Old password")})],newPassword:[u({name:"required",title:s("user.account.changePassword.New password")}),u({name:"password"})],confirmPassword:[u({name:"required",title:s("user.account.changePassword.Confirm new password")}),u({name:"password"}),{validator:(d,o,r)=>{(e.form.newPassword||e.form.confirmPassword)&&(e.form.newPassword==e.form.confirmPassword?r():r(new Error(s("user.account.changePassword.The duplicate password does not match the new password")))),r()},trigger:"blur"}]}}),c=d=>{d&&d.validate(o=>{o&&(e.formSubmitLoading=!0,q(e.form).then(r=>{e.formSubmitLoading=!1,r.code==1&&P.logout()}).catch(()=>{e.formSubmitLoading=!1}))})};return(d,o)=>{const r=i("el-button"),_=i("el-form-item"),g=i("el-form"),h=i("el-card");return S(),N("div",R,[n(h,{class:"user-views-card",shadow:"hover",header:a(s)("user.account.changePassword.Change Password")},{default:l(()=>[$("div",U,[n(g,{model:e.form,rules:e.rules,"label-position":"top",ref_key:"formRef",ref:m,onKeyup:o[5]||(o[5]=I(t=>c(m.value),["enter"]))},{default:l(()=>[n(w,{label:a(s)("user.account.changePassword.Old password"),type:"password",modelValue:e.form.oldPassword,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.oldPassword=t),prop:"oldPassword","input-attr":{"show-password":!0},placeholder:a(s)("user.account.changePassword.Please enter your current password")},null,8,["label","modelValue","placeholder"]),n(w,{label:a(s)("user.account.changePassword.New password"),type:"password",modelValue:e.form.newPassword,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.newPassword=t),prop:"newPassword","input-attr":{"show-password":!0},placeholder:a(s)("Please input field",{field:a(s)("user.account.changePassword.New password")})},null,8,["label","modelValue","placeholder"]),n(w,{label:a(s)("user.account.changePassword.Confirm new password"),type:"password",modelValue:e.form.confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.confirmPassword=t),prop:"confirmPassword","input-attr":{"show-password":!0},placeholder:a(s)("Please input field",{field:a(s)("user.account.changePassword.Confirm new password")})},null,8,["label","modelValue","placeholder"]),n(_,{class:"submit-buttons"},{default:l(()=>[n(r,{onClick:o[3]||(o[3]=t=>a(L)(m.value))},{default:l(()=>[p(f(d.$t("Reset")),1)]),_:1}),n(r,{type:"primary",loading:e.formSubmitLoading,onClick:o[4]||(o[4]=t=>c(m.value))},{default:l(()=>[p(f(d.$t("Save")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["header"])])}}});const E=x(k,[["__scopeId","data-v-936437c5"]]);export{E as default};
