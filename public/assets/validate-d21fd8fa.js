import{i as t}from"./index-93f0d686.js";function l(i,e,r){return e?/^(1[3-9])\d{9}$/.test(e.toString())?r():r(new Error(t.global.t("validate.Please enter the correct mobile number"))):r()}function u(i,e,r){return e?/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(e)?r():r(new Error(t.global.t("validate.Please enter the correct account"))):r()}function n(i){return/^(?!.*[&<>"'\n\r]).{6,32}$/.test(i)}function d(i,e,r){return e?n(e)?r():r(new Error(t.global.t("validate.Please enter the correct password"))):r()}function s(i){return/^([^\x00-\xff]|[a-zA-Z_$])([^\x00-\xff]|[a-zA-Z0-9_$])*$/.test(i)}function f(i,e,r){return e?s(e)?r():r(new Error(t.global.t("validate.Please enter the correct name"))):r()}function b(i,e,r){return!e||e=="<p><br></p>"?r(new Error(t.global.t("validate.Content cannot be empty"))):r()}const c={required:t.global.t("validate.required"),mobile:t.global.t("utils.mobile"),account:t.global.t("utils.account"),password:t.global.t("utils.password"),varName:t.global.t("utils.variable name"),editorRequired:t.global.t("validate.editor required"),url:"URL",email:t.global.t("utils.email"),date:t.global.t("utils.date"),number:t.global.t("utils.number"),integer:t.global.t("utils.integer"),float:t.global.t("utils.float")};function p({name:i,message:e,title:r,trigger:o="blur"}){if(i=="required")return{required:!0,message:e||t.global.t("Please input field",{field:r}),trigger:o};if(["number","integer","float","date","url","email"].includes(i))return{type:i,message:e||t.global.t("Please enter the correct field",{field:r}),trigger:o};const a={mobile:l,account:u,password:d,varName:f,editorRequired:b};return a[i]?{required:i=="editorRequired",validator:a[i],trigger:o,message:e}:{}}export{s as a,p as b,c,n as r,u as v};
