import{T as w,o as i,e as d,b as a,u as s,w as l,F as b,Z as h,t as k,f as u,a as t,c as x,g as c,j as y,n as V,i as v}from"./app-90f66c7c.js";import{A as B}from"./AuthenticationCard-281c54e5.js";import{_ as $}from"./AuthenticationCardLogo-7c6dd18e.js";import{_ as C}from"./Checkbox-8d3d5d7b.js";import{_ as f,a as p}from"./TextInput-0fe5624f.js";import{_}from"./InputLabel-8b7ec118.js";import{_ as N}from"./PrimaryButton-a7f4f478.js";import"./_plugin-vue_export-helper-c27b6911.js";const P={key:0,class:"mb-4 font-medium text-sm text-green-600"},S=["onSubmit"],U={class:"mt-4"},q={class:"block mt-4"},A={class:"flex items-center"},F=t("span",{class:"ml-2 text-sm text-gray-600"},"Ingat saya",-1),L={class:"flex items-center justify-end mt-4"},Z={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=w({email:"",password:"",remember:!1}),g=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(n,o)=>(i(),d(b,null,[a(s(h),{title:"Log in"}),a(B,null,{logo:l(()=>[a($)]),default:l(()=>[m.status?(i(),d("div",P,k(m.status),1)):u("",!0),t("form",{onSubmit:v(g,["prevent"])},[t("div",null,[a(_,{for:"email",value:"Email Badan Usaha"}),a(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",U,[a(_,{for:"password",value:"Password"}),a(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[t("label",A,[a(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),F])]),t("div",L,[m.canResetPassword?(i(),x(s(y),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:l(()=>[c(" Lupa Password Anda? ")]),_:1},8,["href"])):u("",!0),a(N,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:l(()=>[c(" Masuk ")]),_:1},8,["class","disabled"])])],40,S)]),_:1})],64))}};export{Z as default};
