import{d as f,T as b,o as _,c as v,w as i,a as o,e as h,p as k,q as w,b as s,u as a,t as V,g as u,n as x,f as y,i as U}from"./app-138632fd.js";import{_ as B}from"./AppLayout-fad2ade8.js";import{a as m,_ as d}from"./TextInput-13550ab3.js";import{_ as r}from"./InputLabel-d3ed0caa.js";import{_ as P}from"./PrimaryButton-5e7086c8.js";import{_ as N}from"./ActionMessage-bbad0f7f.js";import"./ResponsiveNavLink-0a021eda.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=o("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Data Pemohon ",-1),j=["onSubmit"],D={class:"py-12"},T={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},$={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"},M={class:"card"},C=o("div",{class:"card-body pb-0"},[o("h6",{class:"mb-1 text-15 text-gray-700"}," Bentuk Usaha / Badan Usaha ")],-1),I={class:"card-body"},W={class:"grid grid-cols-12 gap-5"},q={class:"col-span-12 lg:col-span-6"},H={class:"mb-4"},J={key:0},L=o("option",{value:"Badan Hukum"},"Badan Hukum ",-1),z=[L],A={key:1,class:"mb-1 text-15 text-gray-700"},E={class:"card"},K=o("div",{class:"card-body pb-0"},[o("h6",{class:"mb-1 text-15 text-gray-700"}," Data Pemohon ")],-1),O={class:"card-body"},F={class:"grid grid-cols-12 gap-5"},G={class:"col-span-12 lg:col-span-6"},Q={class:"mb-4"},R={class:"mb-4"},X={class:"mb-4"},Y={class:"mb-4"},Z={class:"mb-4"},oo={class:"col-span-12 lg:col-span-6"},eo={class:"mb-4"},ao={class:"mb-4"},so={class:"mb-4"},lo={class:"card"},to={class:"card-body"},no={class:"grid grid-cols-12 gap-5"},mo={class:"col-span-12 lg:col-span-6"},ro={class:"mb-4"},po={key:0,class:"p-4 text-end"},ko={__name:"DataPemohon",props:{user:Object},setup(c){const n=c,p=f(null),e=b({_method:"PUT",query:"datapemohon",ref_bentukBadanUsaha:n.user.ref_bentukBadanUsaha,nama_pemohon:n.user.nama_pemohon,tempat_lahir_pemohon:n.user.tempat_lahir_pemohon,tanggal_lahirpemohon:n.user.tanggal_lahirpemohon,jabatan_pemohon:n.user.jabatan_pemohon,npwp_pemohon:n.user.npwp_pemohon,nik_pemohon:n.user.nik_pemohon,nomor_telepon_pemohon:n.user.nomor_telepon_pemohon,nomor_whatsapp_pemohon:n.user.nomor_whatsapp_pemohon,alamat_pemohon:n.user.alamat_pemohon}),g=()=>{p.value&&(e.ref_bentukBadanUsaha=p.value),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>console.log("Data updated successfully")})};return(_o,l)=>(_(),v(B,{title:"Dashboard"},{header:i(()=>[S]),default:i(()=>[o("form",{onSubmit:U(g,["prevent"])},[o("div",D,[o("div",T,[o("div",$,[o("div",M,[C,o("div",I,[o("div",W,[o("div",q,[o("div",H,[n.user.ref_bentukBadanUsaha===null?(_(),h("div",J,[k(o("select",{id:"bentukBadanUsaha","onUpdate:modelValue":l[0]||(l[0]=t=>p.value=t),class:"w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0"},z,512),[[w,p.value]]),s(m,{message:a(e).errors.ref_bentukBadanUsaha,class:"mt-2"},null,8,["message"])])):(_(),h("div",A,V(n.user.ref_bentukBadanUsaha),1))])])])])]),o("div",E,[K,o("div",O,[o("div",F,[o("div",G,[o("div",Q,[s(r,{for:"nama_pemohon",value:"Nama Pemohon"}),s(d,{id:"nama_pemohon",modelValue:a(e).nama_pemohon,"onUpdate:modelValue":l[1]||(l[1]=t=>a(e).nama_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"Wic***"},null,8,["modelValue"]),s(m,{message:a(e).errors.nama_pemohon,class:"mt-2"},null,8,["message"])]),o("div",R,[s(r,{for:"tempat_lahir_pemohon",value:"Tempat Lahir"}),s(d,{id:"tempat_lahir_pemohon",modelValue:a(e).tempat_lahir_pemohon,"onUpdate:modelValue":l[2]||(l[2]=t=>a(e).tempat_lahir_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"Mad***"},null,8,["modelValue"]),s(m,{message:a(e).errors.tempat_lahir_pemohon,class:"mt-2"},null,8,["message"])]),o("div",X,[s(r,{for:"tanggal_lahirpemohon",value:"Tanggal Lahir"}),s(d,{id:"tanggal_lahirpemohon",modelValue:a(e).tanggal_lahirpemohon,"onUpdate:modelValue":l[3]||(l[3]=t=>a(e).tanggal_lahirpemohon=t),type:"date",class:"mt-1 block w-full",placeholder:"Mad***"},null,8,["modelValue"]),s(m,{message:a(e).errors.tanggal_lahirpemohon,class:"mt-2"},null,8,["message"])]),o("div",Y,[s(r,{for:"jabatan_pemohon",value:"Jabatan Pemohon"}),s(d,{id:"jabatan_pemohon",modelValue:a(e).jabatan_pemohon,"onUpdate:modelValue":l[4]||(l[4]=t=>a(e).jabatan_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"Direk***"},null,8,["modelValue"]),s(m,{message:a(e).errors.jabatan_pemohon,class:"mt-2"},null,8,["message"])]),o("div",Z,[s(r,{for:"npwp_pemohon",value:"NPWP Pemohon"}),s(d,{id:"npwp_pemohon",modelValue:a(e).npwp_pemohon,"onUpdate:modelValue":l[5]||(l[5]=t=>a(e).npwp_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"35***"},null,8,["modelValue"]),s(m,{message:a(e).errors.npwp_pemohon,class:"mt-2"},null,8,["message"])])]),o("div",oo,[o("div",eo,[s(r,{for:"nik_pemohon",value:"Nomor Induk Kependudukan"}),s(d,{id:"nik_pemohon",modelValue:a(e).nik_pemohon,"onUpdate:modelValue":l[6]||(l[6]=t=>a(e).nik_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"35***"},null,8,["modelValue"]),s(m,{message:a(e).errors.nik_pemohon,class:"mt-2"},null,8,["message"])]),o("div",ao,[s(r,{for:"nomor_telepon_pemohon",value:"Nomor Telepon"}),s(d,{id:"nomor_telepon_pemohon",modelValue:a(e).nomor_telepon_pemohon,"onUpdate:modelValue":l[7]||(l[7]=t=>a(e).nomor_telepon_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"035***"},null,8,["modelValue"]),s(m,{message:a(e).errors.nomor_telepon_pemohon,class:"mt-2"},null,8,["message"])]),o("div",so,[s(r,{for:"nomor_whatsapp_pemohon",value:"Nomor Whatsapp"}),s(d,{id:"nomor_whatsapp_pemohon",modelValue:a(e).nomor_whatsapp_pemohon,"onUpdate:modelValue":l[8]||(l[8]=t=>a(e).nomor_whatsapp_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"035***"},null,8,["modelValue"]),s(m,{message:a(e).errors.nomor_whatsapp_pemohon,class:"mt-2"},null,8,["message"])])])])])]),o("div",lo,[o("div",to,[o("div",no,[o("div",mo,[o("div",ro,[s(r,{for:"alamat_pemohon",value:"Alamat Pemohon"}),s(d,{id:"alamat_pemohon",modelValue:a(e).alamat_pemohon,"onUpdate:modelValue":l[9]||(l[9]=t=>a(e).alamat_pemohon=t),type:"text",class:"mt-1 block w-full",placeholder:"Jl.***"},null,8,["modelValue"]),s(m,{message:a(e).errors.alamat_pemohon,class:"mt-2"},null,8,["message"])])])])])]),n.user.ref_bentukBadanUsaha===null?(_(),h("div",po,[s(N,{on:a(e).recentlySuccessful,class:"mr-3"},{default:i(()=>[u(" Saved. ")]),_:1},8,["on"]),s(P,{class:x({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:i(()=>[u(" Simpan ")]),_:1},8,["class","disabled"])])):y("",!0)])])])],40,j)]),_:1}))}};export{ko as default};
