import{d as f,T as g,o as m,c as v,w as u,a,b as e,u as o,e as p,m as k,v as w,t as x,g as c,n as V,f as y,i as U}from"./app-62cb1fbd.js";import{_ as B}from"./AppLayout-f67d182d.js";import{_ as d}from"./InputError-0cd2b74c.js";import{_ as i}from"./InputLabel-8b5a56db.js";import{_ as P}from"./PrimaryButton-722be0b5.js";import{_}from"./TextInput-233abb82.js";import{_ as N}from"./ActionMessage-4d792965.js";import"./ResponsiveNavLink-3d509285.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Data Badan Usaha ",-1),D=["onSubmit"],$={class:"py-12"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},T={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"},W={class:"card"},A=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Data Dasar ")],-1),I={class:"card-body"},K={class:"grid grid-cols-12 gap-5"},j={class:"col-span-12 lg:col-span-6"},M={class:"mb-4"},z={class:"col-span-12 lg:col-span-6"},E={class:"mb-4"},J={key:0},O=a("option",{value:"Pusat"},"Pusat ",-1),q=a("option",{value:"Cabang"},"Cabang ",-1),F=[O,q],G={key:1,class:"mb-1 text-15 text-gray-700"},H={class:"card"},L=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Alamat Badan Usaha ")],-1),Q={class:"card-body"},R={class:"grid grid-cols-12 gap-5"},X={class:"col-span-12 lg:col-span-6"},Y={class:"mb-4"},Z={class:"col-span-12 lg:col-span-6"},aa={class:"mb-4"},sa={class:"card"},ea=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Data Pimpinan / Penanggung Jawab ")],-1),oa={class:"card-body"},ta={class:"grid grid-cols-12 gap-5"},na={class:"col-span-12 lg:col-span-6"},la={class:"mb-4"},da={class:"mb-4"},ia={class:"mb-4"},_a={class:"mb-4"},ra={class:"col-span-12 lg:col-span-6"},ma={class:"mb-4"},ua={class:"mb-4"},pa={key:0,class:"p-4 text-end"},ya={__name:"DataPerusahaan",props:{user:Object},setup(h){const l=h,r=f(null),s=g({_method:"PUT",dataperusahaan:"dataperusahaan",ref_status_badan_usaha:l.user.ref_status_badan_usaha,nama_badan_usaha:l.user.nama_badan_usaha,titik_koordinat:l.user.titik_koordinat,alamat_badan_usaha:l.user.alamat_badan_usaha,nama_pimpinan:l.user.nama_pimpinan,npwp_badan_usaha:l.user.npwp_badan_usaha,nomor_telepon_badan_usaha:l.user.nomor_telepon_badan_usaha,nomor_whatsapp_usaha:l.user.nomor_whatsapp_usaha,nik_pimpinan:l.user.nik_pimpinan,nomor_akta_pendirian:l.user.nomor_akta_pendirian}),b=()=>{r.value&&(s.ref_status_badan_usaha=r.value),s.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>console.log("Data updated successfully")})};return(ca,t)=>(m(),v(B,{title:"Dashboard"},{header:u(()=>[S]),default:u(()=>[a("form",{onSubmit:U(b,["prevent"])},[a("div",$,[a("div",C,[a("div",T,[a("div",W,[A,a("div",I,[a("div",K,[a("div",j,[a("div",M,[e(i,{for:"nama_badan_usaha",value:"Nama Badan Usaha"}),e(_,{id:"nama_badan_usaha",modelValue:o(s).nama_badan_usaha,"onUpdate:modelValue":t[0]||(t[0]=n=>o(s).nama_badan_usaha=n),type:"text",class:"mt-1 block w-full",placeholder:"Wic***"},null,8,["modelValue"]),e(d,{message:o(s).errors.nama_badan_usaha,class:"mt-2"},null,8,["message"])])]),a("div",z,[a("div",E,[e(i,{for:"status_badan_usaha",value:"Status Badan Usaha"}),l.user.ref_status_badan_usaha===null?(m(),p("div",J,[k(a("select",{id:"status_badan_usaha","onUpdate:modelValue":t[1]||(t[1]=n=>r.value=n),class:"mt-1 w-full rounded border-gray-100 py-2.5 text-sm text-gray-500 focus:border focus:border-violet-500 focus:ring-0"},F,512),[[w,r.value]]),e(d,{message:o(s).errors.ref_status_badan_usaha,class:"mt-2"},null,8,["message"])])):(m(),p("div",G,x(l.user.ref_status_badan_usaha),1))])])])])]),a("div",H,[L,a("div",Q,[a("div",R,[a("div",X,[a("div",Y,[e(i,{for:"titik_koordinat",value:"Titik Koordinat"}),e(_,{id:"titik_koordinat",modelValue:o(s).titik_koordinat,"onUpdate:modelValue":t[2]||(t[2]=n=>o(s).titik_koordinat=n),type:"text",class:"mt-1 block w-full",placeholder:"-7.5374307,111.6302997"},null,8,["modelValue"]),e(d,{message:o(s).errors.titik_koordinat,class:"mt-2"},null,8,["message"])])]),a("div",Z,[a("div",aa,[e(i,{for:"alamat_badan_usaha",value:"Alamat Badan Usaha"}),e(_,{id:"alamat_badan_usaha",modelValue:o(s).alamat_badan_usaha,"onUpdate:modelValue":t[3]||(t[3]=n=>o(s).alamat_badan_usaha=n),type:"text",class:"mt-1 block w-full",placeholder:"jl.***"},null,8,["modelValue"]),e(d,{message:o(s).errors.alamat_badan_usaha,class:"mt-2"},null,8,["message"])])])])])]),a("div",sa,[ea,a("div",oa,[a("div",ta,[a("div",na,[a("div",la,[e(i,{for:"nama_pimpinan",value:"Nama Pimpinan"}),e(_,{id:"nama_pimpinan",modelValue:o(s).nama_pimpinan,"onUpdate:modelValue":t[4]||(t[4]=n=>o(s).nama_pimpinan=n),type:"text",class:"mt-1 block w-full",placeholder:"Wicak***"},null,8,["modelValue"]),e(d,{message:o(s).errors.nama_pimpinan,class:"mt-2"},null,8,["message"])]),a("div",da,[e(i,{for:"npwp_badan_usaha",value:"NPWP Badan Usaha"}),e(_,{id:"npwp_badan_usaha",modelValue:o(s).npwp_badan_usaha,"onUpdate:modelValue":t[5]||(t[5]=n=>o(s).npwp_badan_usaha=n),type:"text",class:"mt-1 block w-full",placeholder:"35***"},null,8,["modelValue"]),e(d,{message:o(s).errors.npwp_badan_usaha,class:"mt-2"},null,8,["message"])]),a("div",ia,[e(i,{for:"nomor_telepon_badan_usaha",value:"Nomor Telepon Badan Usaha"}),e(_,{id:"nomor_telepon_badan_usaha",modelValue:o(s).nomor_telepon_badan_usaha,"onUpdate:modelValue":t[6]||(t[6]=n=>o(s).nomor_telepon_badan_usaha=n),type:"text",class:"mt-1 block w-full",placeholder:"035***"},null,8,["modelValue"]),e(d,{message:o(s).errors.nomor_telepon_badan_usaha,class:"mt-2"},null,8,["message"])]),a("div",_a,[e(i,{for:"nomor_whatsapp_usaha",value:"Nomor Whatsapp Badan Usaha"}),e(_,{id:"nomor_whatsapp_usaha",modelValue:o(s).nomor_whatsapp_usaha,"onUpdate:modelValue":t[7]||(t[7]=n=>o(s).nomor_whatsapp_usaha=n),type:"text",class:"mt-1 block w-full",placeholder:"085***"},null,8,["modelValue"]),e(d,{message:o(s).errors.nomor_whatsapp_usaha,class:"mt-2"},null,8,["message"])])]),a("div",ra,[a("div",ma,[e(i,{for:"nik_pimpinan",value:"Nomor Induk Kependudukan Pimpinan"}),e(_,{id:"nik_pimpinan",modelValue:o(s).nik_pimpinan,"onUpdate:modelValue":t[8]||(t[8]=n=>o(s).nik_pimpinan=n),type:"text",class:"mt-1 block w-full",placeholder:"351***"},null,8,["modelValue"]),e(d,{message:o(s).errors.nik_pimpinan,class:"mt-2"},null,8,["message"])]),a("div",ua,[e(i,{for:"nomor_akta_pendirian",value:"Nomor Akta Pendirian /Nomor Surat Keputusan"}),e(_,{id:"nomor_akta_pendirian",modelValue:o(s).nomor_akta_pendirian,"onUpdate:modelValue":t[9]||(t[9]=n=>o(s).nomor_akta_pendirian=n),type:"text",class:"mt-1 block w-full",placeholder:"351***"},null,8,["modelValue"]),e(d,{message:o(s).errors.nomor_akta_pendirian,class:"mt-2"},null,8,["message"])])])]),l.user.ref_status_badan_usaha===null?(m(),p("div",pa,[e(N,{on:o(s).recentlySuccessful,class:"mr-3"},{default:u(()=>[c(" Saved. ")]),_:1},8,["on"]),e(P,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:u(()=>[c(" Simpan ")]),_:1},8,["class","disabled"])])):y("",!0)])])])])])],40,D)]),_:1}))}};export{ya as default};