import{d as M,o as s,e as r,b as a,u as y,Z as C,a as e,w as o,j as A,g as n,c as m,t as h,F as p,f as i,h as w,i as _,n as g,r as k,O as x}from"./app-a9789077.js";import{_ as L,A as B,a as $,b as c,c as j,d as u}from"./ResponsiveNavLink-f09a793a.js";const P={class:"min-h-screen bg-gray-100"},F={class:"bg-white border-b border-gray-100"},N={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},D={class:"flex justify-between h-16"},O={class:"flex"},V={class:"shrink-0 flex items-center"},z={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},I={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},E={class:"hidden sm:flex sm:items-center sm:ml-6"},Z={class:"ml-3 relative"},q={class:"inline-flex rounded-md"},G={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},H=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),J={class:"w-60"},K=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Q=e("div",{class:"border-t border-gray-200"},null,-1),R=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),U=["onSubmit"],W={class:"flex items-center"},X={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ee=[Y],te={class:"ml-3 relative"},se={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},oe=["src","alt"],re={key:1,class:"inline-flex rounded-md"},ae={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},ne=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),ie=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),le=e("div",{class:"border-t border-gray-200"},null,-1),de=["onSubmit"],ue={class:"-mr-2 flex items-center sm:hidden"},he={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},pe={class:"pt-2 pb-3 space-y-1"},ce={class:"pt-4 pb-1 border-t border-gray-200"},me={class:"flex items-center px-4"},_e={key:0,class:"shrink-0 mr-3"},ge=["src","alt"],fe={class:"font-medium text-base text-gray-800"},ve={class:"font-medium text-sm text-gray-500"},be={class:"mt-3 space-y-1"},ye=["onSubmit"],we=e("div",{class:"border-t border-gray-200"},null,-1),ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),xe=e("div",{class:"border-t border-gray-200"},null,-1),$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),je=["onSubmit"],Te={class:"flex items-center"},Se={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Me=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ce=[Me],Ae={key:0,class:"bg-white shadow"},Le={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Fe={__name:"AppLayoutDpmptsp",props:{title:String},setup(T){const d=M(!1),f=t=>{x.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},v=()=>{x.post(route("logout"))};return(t,b)=>(s(),r("div",null,[a(y(C),{title:T.title},null,8,["title"]),a(L),e("div",P,[e("nav",F,[e("div",N,[e("div",D,[e("div",O,[e("div",V,[a(y(A),{href:t.route("dashboard")},{default:o(()=>[a(B,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",z,[a($,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[n(" Dashboard ")]),_:1},8,["href","active"])]),e("div",I,[a($,{href:t.route("arsip"),active:t.route().current("arsip")},{default:o(()=>[n(" Arsip ")]),_:1},8,["href","active"])])]),e("div",E,[e("div",Z,[t.$page.props.jetstream.hasTeamFeatures?(s(),m(j,{key:0,align:"right",width:"60"},{trigger:o(()=>[e("span",q,[e("button",G,[n(h(t.$page.props.auth.user.current_team.name)+" ",1),H])])]),content:o(()=>[e("div",J,[t.$page.props.jetstream.hasTeamFeatures?(s(),r(p,{key:0},[K,a(c,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:o(()=>[n(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),m(c,{key:0,href:t.route("teams.create")},{default:o(()=>[n(" Create New Team ")]),_:1},8,["href"])):i("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(p,{key:1},[Q,R,(s(!0),r(p,null,w(t.$page.props.auth.user.all_teams,l=>(s(),r("form",{key:l.id,onSubmit:_(S=>f(l),["prevent"])},[a(c,{as:"button"},{default:o(()=>[e("div",W,[l.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",X,ee)):i("",!0),e("div",null,h(l.name),1)])]),_:2},1024)],40,U))),128))],64)):i("",!0)],64)):i("",!0)])]),_:1})):i("",!0)]),e("div",te,[a(j,{align:"right",width:"48"},{trigger:o(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",se,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,oe)])):(s(),r("span",re,[e("button",ae,[n(h(t.$page.props.auth.user.name)+" ",1),ne])]))]),content:o(()=>[ie,a(c,{href:t.route("profile.show")},{default:o(()=>[n(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),m(c,{key:0,href:t.route("api-tokens.index")},{default:o(()=>[n(" API Tokens ")]),_:1},8,["href"])):i("",!0),le,e("form",{onSubmit:_(v,["prevent"])},[a(c,{as:"button"},{default:o(()=>[n(" Log Out ")]),_:1})],40,de)]),_:1})])]),e("div",ue,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:b[0]||(b[0]=l=>d.value=!d.value)},[(s(),r("svg",he,[e("path",{class:g({hidden:d.value,"inline-flex":!d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!d.value,"inline-flex":d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:d.value,hidden:!d.value},"sm:hidden"])},[e("div",pe,[a(u,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[n(" Dashboard ")]),_:1},8,["href","active"])]),e("div",ce,[e("div",me,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",_e,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,ge)])):i("",!0),e("div",null,[e("div",fe,h(t.$page.props.auth.user.name),1),e("div",ve,h(t.$page.props.auth.user.email),1)])]),e("div",be,[a(u,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:o(()=>[n(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),m(u,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:o(()=>[n(" API Tokens ")]),_:1},8,["href","active"])):i("",!0),e("form",{method:"POST",onSubmit:_(v,["prevent"])},[a(u,{as:"button"},{default:o(()=>[n(" Log Out ")]),_:1})],40,ye),t.$page.props.jetstream.hasTeamFeatures?(s(),r(p,{key:1},[we,ke,a(u,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:o(()=>[n(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),m(u,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:o(()=>[n(" Create New Team ")]),_:1},8,["href","active"])):i("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(p,{key:1},[xe,$e,(s(!0),r(p,null,w(t.$page.props.auth.user.all_teams,l=>(s(),r("form",{key:l.id,onSubmit:_(S=>f(l),["prevent"])},[a(u,{as:"button"},{default:o(()=>[e("div",Te,[l.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Se,Ce)):i("",!0),e("div",null,h(l.name),1)])]),_:2},1024)],40,je))),128))],64)):i("",!0)],64)):i("",!0)])])],2)]),t.$slots.header?(s(),r("header",Ae,[e("div",Le,[k(t.$slots,"header")])])):i("",!0),e("main",null,[k(t.$slots,"default")])])]))}};export{Fe as _};
