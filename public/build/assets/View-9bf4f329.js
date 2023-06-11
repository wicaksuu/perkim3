import{_ as p}from"./AppLayoutDinas-8d1dfd19.js";import{_ as t}from"./InputLabel-8df84163.js";import{_ as d}from"./TextInput-6d930f42.js";import{o as _,c as r,w as n,a,t as i,b as s}from"./app-e4c7c3b3.js";import"./ResponsiveNavLink-fb9142ba.js";import"./_plugin-vue_export-helper-c27b6911.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Verifikasi Dokumen ",-1),c={class:"pt-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},b={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"},v={class:"card"},g=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Bentuk Usaha / Badan Usaha ")],-1),V={class:"card-body"},f={class:"grid grid-cols-12 gap-5"},k={class:"col-span-12 lg:col-span-6"},x={class:"mb-4"},w={class:"card"},y=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Data Pemohon ")],-1),U={class:"card-body"},N={class:"grid grid-cols-12 gap-5"},P={class:"col-span-12 lg:col-span-6"},B={class:"mb-4"},D={class:"mb-4"},W={class:"mb-4"},j={class:"mb-4"},T={class:"mb-4"},A={class:"col-span-12 lg:col-span-6"},K={class:"mb-4"},J={class:"mb-4"},S={class:"mb-4"},$={class:"card"},I={class:"card-body"},L={class:"grid grid-cols-12 gap-5"},M={class:"col-span-12 lg:col-span-6"},C={class:"mb-4"},O={class:"pt-12"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},z={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4"},E={class:"card"},F=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Data Dasar ")],-1),G={class:"card-body"},H={class:"grid grid-cols-12 gap-5"},Q={class:"col-span-12 lg:col-span-6"},R={class:"mb-4"},X={class:"col-span-12 lg:col-span-6"},Y={class:"mb-4"},Z={class:"mb-1 text-15 text-gray-700"},aa={class:"card"},oa=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Alamat Badan Usaha ")],-1),la={class:"card-body"},sa={class:"grid grid-cols-12 gap-5"},ea={class:"col-span-12 lg:col-span-6"},ta={class:"mb-4"},da={class:"col-span-12 lg:col-span-6"},na={class:"mb-4"},ia={class:"card"},ma=a("div",{class:"card-body pb-0"},[a("h6",{class:"mb-1 text-15 text-gray-700"}," Data Pimpinan / Penanggung Jawab ")],-1),pa={class:"card-body"},_a={class:"grid grid-cols-12 gap-5"},ra={class:"col-span-12 lg:col-span-6"},ua={class:"mb-4"},ca={class:"mb-4"},ha={class:"mb-4"},ba={class:"mb-4"},va={class:"col-span-12 lg:col-span-6"},ga={class:"mb-4"},Va={class:"mb-4"},Pa={__name:"View",props:{data:Object},setup(m){const o=m;return console.log(o.data),(fa,l)=>(_(),r(p,{title:"Dashboard"},{header:n(()=>[u]),default:n(()=>[a("div",c,[a("div",h,[a("div",b,[a("div",v,[g,a("div",V,[a("div",f,[a("div",k,[a("div",x,i(o.data.user.ref_bentukBadanUsaha),1)])])])]),a("div",w,[y,a("div",U,[a("div",N,[a("div",P,[a("div",B,[s(t,{for:"nama_pemohon",value:"Nama Pemohon"}),s(d,{id:"nama_pemohon",modelValue:o.data.user.nama_pemohon,"onUpdate:modelValue":l[0]||(l[0]=e=>o.data.user.nama_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"Wic***"},null,8,["modelValue"])]),a("div",D,[s(t,{for:"tempat_lahir_pemohon",value:"Tempat Lahir"}),s(d,{id:"tempat_lahir_pemohon",modelValue:o.data.user.tempat_lahir_pemohon,"onUpdate:modelValue":l[1]||(l[1]=e=>o.data.user.tempat_lahir_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"Mad***"},null,8,["modelValue"])]),a("div",W,[s(t,{for:"tanggal_lahirpemohon",value:"Tanggal Lahir"}),s(d,{id:"tanggal_lahirpemohon",modelValue:o.data.user.tanggal_lahirpemohon,"onUpdate:modelValue":l[2]||(l[2]=e=>o.data.user.tanggal_lahirpemohon=e),type:"date",class:"mt-1 block w-full",placeholder:"Mad***"},null,8,["modelValue"])]),a("div",j,[s(t,{for:"jabatan_pemohon",value:"Jabatan Pemohon"}),s(d,{id:"jabatan_pemohon",modelValue:o.data.user.jabatan_pemohon,"onUpdate:modelValue":l[3]||(l[3]=e=>o.data.user.jabatan_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"Direk***"},null,8,["modelValue"])]),a("div",T,[s(t,{for:"npwp_pemohon",value:"NPWP Pemohon"}),s(d,{id:"npwp_pemohon",modelValue:o.data.user.npwp_pemohon,"onUpdate:modelValue":l[4]||(l[4]=e=>o.data.user.npwp_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"35***"},null,8,["modelValue"])])]),a("div",A,[a("div",K,[s(t,{for:"nik_pemohon",value:"Nomor Induk Kependudukan"}),s(d,{id:"nik_pemohon",modelValue:o.data.user.nik_pemohon,"onUpdate:modelValue":l[5]||(l[5]=e=>o.data.user.nik_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"35***"},null,8,["modelValue"])]),a("div",J,[s(t,{for:"nomor_telepon_pemohon",value:"Nomor Telepon"}),s(d,{id:"nomor_telepon_pemohon",modelValue:o.data.user.nomor_telepon_pemohon,"onUpdate:modelValue":l[6]||(l[6]=e=>o.data.user.nomor_telepon_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"035***"},null,8,["modelValue"])]),a("div",S,[s(t,{for:"nomor_whatsapp_pemohon",value:"Nomor Whatsapp"}),s(d,{id:"nomor_whatsapp_pemohon",modelValue:o.data.user.nomor_whatsapp_pemohon,"onUpdate:modelValue":l[7]||(l[7]=e=>o.data.user.nomor_whatsapp_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"035***"},null,8,["modelValue"])])])])])]),a("div",$,[a("div",I,[a("div",L,[a("div",M,[a("div",C,[s(t,{for:"alamat_pemohon",value:"Alamat Pemohon"}),s(d,{id:"alamat_pemohon",modelValue:o.data.user.alamat_pemohon,"onUpdate:modelValue":l[8]||(l[8]=e=>o.data.user.alamat_pemohon=e),type:"text",class:"mt-1 block w-full",placeholder:"Jl.***"},null,8,["modelValue"])])])])])])])])]),a("div",O,[a("div",q,[a("div",z,[a("div",E,[F,a("div",G,[a("div",H,[a("div",Q,[a("div",R,[s(t,{for:"nama_badan_usaha",value:"Nama Badan Usaha"}),s(d,{id:"nama_badan_usaha",modelValue:o.data.user.nama_badan_usaha,"onUpdate:modelValue":l[9]||(l[9]=e=>o.data.user.nama_badan_usaha=e),type:"text",class:"mt-1 block w-full",placeholder:"Wic***"},null,8,["modelValue"])])]),a("div",X,[a("div",Y,[a("div",Z," Status Badan Usaha "+i(o.data.user.ref_status_badan_usaha),1)])])])])]),a("div",aa,[oa,a("div",la,[a("div",sa,[a("div",ea,[a("div",ta,[s(t,{for:"titik_koordinat",value:"Titik Koordinat"}),s(d,{id:"titik_koordinat",modelValue:o.data.user.titik_koordinat,"onUpdate:modelValue":l[10]||(l[10]=e=>o.data.user.titik_koordinat=e),type:"text",class:"mt-1 block w-full",placeholder:"-7.5374307,111.6302997"},null,8,["modelValue"])])]),a("div",da,[a("div",na,[s(t,{for:"alamat_badan_usaha",value:"Alamat Badan Usaha"}),s(d,{id:"alamat_badan_usaha",modelValue:o.data.user.alamat_badan_usaha,"onUpdate:modelValue":l[11]||(l[11]=e=>o.data.user.alamat_badan_usaha=e),type:"text",class:"mt-1 block w-full",placeholder:"jl.***"},null,8,["modelValue"])])])])])]),a("div",ia,[ma,a("div",pa,[a("div",_a,[a("div",ra,[a("div",ua,[s(t,{for:"nama_pimpinan",value:"Nama Pimpinan"}),s(d,{id:"nama_pimpinan",modelValue:o.data.user.nama_pimpinan,"onUpdate:modelValue":l[12]||(l[12]=e=>o.data.user.nama_pimpinan=e),type:"text",class:"mt-1 block w-full",placeholder:"Wicak***"},null,8,["modelValue"])]),a("div",ca,[s(t,{for:"npwp_badan_usaha",value:"NPWP Badan Usaha"}),s(d,{id:"npwp_badan_usaha",modelValue:o.data.user.npwp_badan_usaha,"onUpdate:modelValue":l[13]||(l[13]=e=>o.data.user.npwp_badan_usaha=e),type:"text",class:"mt-1 block w-full",placeholder:"35***"},null,8,["modelValue"])]),a("div",ha,[s(t,{for:"nomor_telepon_badan_usaha",value:"Nomor Telepon Badan Usaha"}),s(d,{id:"nomor_telepon_badan_usaha",modelValue:o.data.user.nomor_telepon_badan_usaha,"onUpdate:modelValue":l[14]||(l[14]=e=>o.data.user.nomor_telepon_badan_usaha=e),type:"text",class:"mt-1 block w-full",placeholder:"035***"},null,8,["modelValue"])]),a("div",ba,[s(t,{for:"nomor_whatsapp_usaha",value:"Nomor Whatsapp Badan Usaha"}),s(d,{id:"nomor_whatsapp_usaha",modelValue:o.data.user.nomor_whatsapp_usaha,"onUpdate:modelValue":l[15]||(l[15]=e=>o.data.user.nomor_whatsapp_usaha=e),type:"text",class:"mt-1 block w-full",placeholder:"085***"},null,8,["modelValue"])])]),a("div",va,[a("div",ga,[s(t,{for:"nik_pimpinan",value:"Nomor Induk Kependudukan Pimpinan"}),s(d,{id:"nik_pimpinan",modelValue:o.data.user.nik_pimpinan,"onUpdate:modelValue":l[16]||(l[16]=e=>o.data.user.nik_pimpinan=e),type:"text",class:"mt-1 block w-full",placeholder:"351***"},null,8,["modelValue"])]),a("div",Va,[s(t,{for:"nomor_akta_pendirian",value:"Nomor Akta Pendirian /Nomor Surat Keputusan"}),s(d,{id:"nomor_akta_pendirian",modelValue:o.data.user.nomor_akta_pendirian,"onUpdate:modelValue":l[17]||(l[17]=e=>o.data.user.nomor_akta_pendirian=e),type:"text",class:"mt-1 block w-full",placeholder:"351***"},null,8,["modelValue"])])])])])])])])])]),_:1}))}};export{Pa as default};