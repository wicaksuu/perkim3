import{o as i,e as n,b as s,u as d,w as l,F as r,Z as c,a as e,t as u,g as t}from"./app-335e671b.js";import{A as m}from"./AuthenticationCard-0d036175.js";import"./_plugin-vue_export-helper-c27b6911.js";const h=e("div",{class:"flex items-center justify-center"},[e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Logo_kabupaten_madiun.gif/100px-Logo_kabupaten_madiun.gif",alt:"Pemerintah Kabupaten Madiun"})],-1),_=e("div",{class:"text-center font-bold text-xl font-serif"}," PEMERINTAH KABUPATEN MADIUN ",-1),p=e("div",{class:"text-center font-semibold font-serif"}," Si-PEDALRUM ",-1),f=e("div",{class:"text-center font-semibold text-red-500"}," Kode Dokumen Tidak Sah ",-1),g=e("hr",null,null,-1),x={class:"text-sm text-center text-zinc-600"},k={class:"mt-4"},b=["href"],v={class:"mt-8 text-sm"},N={class:"text-yellow-400"},y=["href"],E={__name:"NotValid",props:{Kode:String},setup(o){return(a,A)=>(i(),n(r,null,[s(d(c),{title:"Validasi"}),s(m,{class:"pb-12"},{default:l(()=>[h,_,p,f,g,e("div",x,"No. Penerbitan "+u(o.Kode),1),e("div",k,[t(" Kode QR yang di scan tidak sah dan tidak ditemukan pada database "),e("i",null,[e("a",{class:"text-blue-500 hover:text-blue-700",href:a.route("home")},"sipedalrum.madiunkab.go.id",8,b)]),t(" mohon scan ulang dokumen. ")]),e("div",v,[e("i",N,[t("Dokumen yang di anggap sah adalah dokumen yang sesuai dengan arsip dokumen yang tersimpan pada aplikasi "),e("a",{class:"text-blue-500 hover:text-blue-700",href:a.route("home")},"sipedalrum.madiunkab.go.id",8,y)])])]),_:1})],64))}};export{E as default};
