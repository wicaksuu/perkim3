import{_ as c}from"./AppLayoutKepalaDinas-30eceedf.js";import"./dropzone.min-e9c4fac0.js";import{o as a,c as i,w as o,a as t,e as r,h as p,F as l,t as e,b as h,u as _,j as x,g as u}from"./app-e4c7c3b3.js";import"./ResponsiveNavLink-fb9142ba.js";import"./_plugin-vue_export-helper-c27b6911.js";const m=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Daftar Menunggu TTD Kepala Dinas ",-1),g={class:"py-12"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},f={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4 pb-10"},b={class:"overflow-x-auto"},y={class:"min-w-full whitespace-wrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"},k=t("thead",{class:"bg-gray-900"},[t("tr",{class:"text-white"},[t("th",{class:"font-semibold text-sm uppercase px-4 py-3 tracking-wider"}," No. "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Nama Perumahan "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," No. Pengajuan "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Alamat Perumahan "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Status "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Aksi ")])],-1),v={class:"px-4 py-3"},D={class:"px-6 py-4 whitespace-wrap"},N={class:""},B={class:"text-gray-500 text-sm font-semibold tracking-wide"},T={class:"px-6 py-4 whitespace-wrap"},j={class:""},P=t("p",{class:"text-gray-500 text-sm font-bold tracking-wide"}," Baru ",-1),V={class:"px-6 py-4 whitespace-wrap"},A={class:""},F={class:"text-gray-500 text-sm font-bold tracking-wide"},M=["href"],S={class:"px-6 py-4 whitespace-wrap"},q={class:"text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"},C={class:"px-6 py-4 whitespace-wrap"},H={__name:"Dashboard",props:{data:Object},setup(d){const n=d;return(E,K)=>(a(),i(c,{title:"Dashboard"},{header:o(()=>[m]),default:o(()=>[t("div",g,[t("div",w,[t("div",f,[t("div",b,[t("table",y,[k,t("tbody",null,[(a(!0),r(l,null,p(n.data,s=>(a(),r("tr",{key:s.id},[t("td",v,e(s.id),1),t("td",D,[t("p",N,e(s.nama_perumahan),1),t("p",B,e(s.user.name),1)]),t("td",T,[t("p",j,e(s.kode_unik),1),P]),t("td",V,[t("p",A,e(s.alamat_perumahan),1),t("p",F,[t("a",{target:"_blank",href:"https://www.google.com/maps/search/?api=1&query="+s.koordinat_perumahan,class:"text-blue-700 hover:underline hover:text-blue-900"},"Maps",8,M)])]),t("td",S,[t("span",q,e(s.status),1)]),t("td",C,[h(_(x),{href:"ttd/"+s.kode_unik,class:"bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"},{default:o(()=>[u("Tandatangani")]),_:2},1032,["href"])])]))),128))])])])])])])]),_:1}))}};export{H as default};
