import{_ as p}from"./AppLayoutDinas-8d1dfd19.js";import"./dropzone.min-e9c4fac0.js";import{_ as d}from"./PrimaryButton-5a992a02.js";import{o as a,c as n,w as o,a as t,e as r,h as l,F as _,t as e,b as h,g as m}from"./app-e4c7c3b3.js";import"./ResponsiveNavLink-fb9142ba.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Daftar Arsip ",-1),u={class:"py-12"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg pl-4 pt-4 pr-4 pb-10"},f={class:"overflow-x-auto"},b={class:"min-w-full whitespace-wrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"},y=t("thead",{class:"bg-gray-900"},[t("tr",{class:"text-white"},[t("th",{class:"font-semibold text-sm uppercase px-4 py-3 tracking-wider"}," No. "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Nama Perumahan "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," No. Pengajuan "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Alamat Perumahan "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Status "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4 tracking-wider"}," Aksi ")])],-1),k={class:"px-4 py-3"},v={class:"px-6 py-4 whitespace-wrap"},B={class:""},N={class:"text-gray-500 text-sm font-semibold tracking-wide"},A={class:"px-6 py-4 whitespace-wrap"},D={class:""},P=t("p",{class:"text-gray-500 text-sm font-bold tracking-wide"}," Baru ",-1),V={class:"px-6 py-4 whitespace-wrap"},j={class:""},F={class:"text-gray-500 text-sm font-bold tracking-wide"},S=["href"],$={class:"px-6 py-4 whitespace-wrap"},q={class:"text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"},C={class:"px-6 py-4 whitespace-wrap"},I={__name:"DaftarArsip",props:{data:Object},setup(c){const i=c;return(E,L)=>(a(),n(p,{title:"Dashboard"},{header:o(()=>[x]),default:o(()=>[t("div",u,[t("div",w,[t("div",g,[t("div",f,[t("table",b,[y,t("tbody",null,[(a(!0),r(_,null,l(i.data,s=>(a(),r("tr",{key:s.id},[t("td",k,e(s.id),1),t("td",v,[t("p",B,e(s.nama_perumahan),1),t("p",N,e(s.user.name),1)]),t("td",A,[t("p",D,e(s.kode_unik),1),P]),t("td",V,[t("p",j,e(s.alamat_perumahan),1),t("p",F,[t("a",{target:"_blank",href:"https://www.google.com/maps/search/?api=1&query="+s.koordinat_perumahan,class:"text-blue-700 hover:underline hover:text-blue-900"},"Maps",8,S)])]),t("td",$,[t("span",q,e(s.status),1)]),t("td",C,[h(d,null,{default:o(()=>[m("Buka")]),_:1})])]))),128))])])])])])])]),_:1}))}};export{I as default};