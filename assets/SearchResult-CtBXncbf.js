import{u as U,f as le,h as te,i as M,j as ae,P as se,t as oe,k as ie,l as A,m as R,p as ce,q as Y,s as t,v as he,R as T,x as re,y as ne,z as me,C as ue,A as we,B as pe,D as ve,E as ze,F as de,G as x,H as ye,I as fe,J as ge,K as $,L as I,M as ke}from"./app-CEO1PUJ1.js";const be=["/","/zh/assets.html","/zh/catalog.html","/zh/de.html","/zh/","/zh/md.html","/zh/sitehelp.html","/zh/account/apkxa.html","/zh/account/google.html","/zh/account/","/zh/account/ios.html","/zh/account/twitch.html","/zh/branch/","/zh/dev/foxct.html","/zh/dev/","/zh/markdown/","/zh/mw/game-info.html","/zh/mw/","/zh/mw/mw-game-lottery.html","/zh/mw/mw-press.html","/zh/mwt/game-info.html","/zh/mwt/","/zh/branch/mw-card/","/zh/markdown/other/","/zh/mw/collection/cn-warships.html","/zh/mw/collection/dpm.html","/zh/mw/collection/egg.html","/zh/mw/collection/events-less.html","/zh/mw/collection/game-modes.html","/zh/mw/collection/","/zh/mw/collection/lj.html","/zh/mw/collection/market.html","/zh/mw/collection/musk.html","/zh/mw/collection/mwben.html","/zh/mw/collection/news.html","/zh/mw/column/","/zh/mw/download/app.html","/zh/mw/download/","/zh/mw/download/mod.html","/zh/mw/download/pc.html","/zh/mw/download/sys.html","/zh/mw/download/zg.html","/zh/mw/official/bp.html","/zh/mw/official/bs.html","/zh/mw/official/","/zh/mw/official/jd.html","/zh/mw/official/lt.html","/zh/mw/official/qt.html","/zh/mw/official/sc.html","/zh/mw/official/sd.html","/zh/mw/official/wf.html","/zh/mw/official/yj.html","/zh/mw/official/zb.html","/zh/mw/official/zd.html","/zh/mw/official/zh.html","/zh/mw/official/zy.html","/zh/mw/skills/cyct.html","/zh/mw/skills/game.html","/zh/mw/skills/","/zh/mw/skills/mom.html","/zh/mw/skills/mw-rules.html","/zh/mw/skills/newplayer.html","/zh/mw/skills/stan-bilibili.html","/zh/mw/skills/x51.html","/zh/mwt/collection/ammo.html","/zh/mwt/collection/","/zh/mwt/collection/link.html","/zh/mw/collection/balance-log/","/zh/mw/collection/balance-log/mw68.html","/zh/mw/collection/balance-log/mw70.html","/zh/mw/collection/balance-log/mw77.html","/zh/mw/collection/balance-log/mw78.html","/zh/mw/collection/balance-log/mw79.html","/zh/mw/collection/balance-log/mw80.html","/zh/mw/collection/pan-spatial/desc.html","/zh/mw/collection/pan-spatial/","/zh/mw/collection/realitymw/bomber.html","/zh/mw/collection/realitymw/fighter.html","/zh/mw/collection/realitymw/helicopter.html","/zh/mw/collection/realitymw/","/zh/mw/collection/realitymw/strike-fighters.html","/zh/mw/collection/realitymw/uav.html","/zh/mw/collection/realitymw2/cruiser.html","/zh/mw/collection/realitymw2/destroyer.html","/zh/mw/collection/realitymw2/","/zh/mw/collection/tournament/cn.html","/zh/mw/collection/tournament/ct.html","/zh/mw/collection/tournament/ctto.html","/zh/mw/collection/tournament/","/zh/mw/collection/pan-spatial/aircraft/dragon.html","/zh/mw/collection/pan-spatial/aircraft/","/zh/mw/collection/pan-spatial/aircraft/jacknife.html","/zh/mw/collection/pan-spatial/aircraft/killswitch.html","/zh/mw/collection/pan-spatial/aircraft/rhombat.html","/zh/mw/collection/pan-spatial/aircraft/spyder.html","/zh/mw/collection/pan-spatial/ships/argonas.html","/zh/mw/collection/pan-spatial/ships/","/zh/mw/collection/pan-spatial/ships/redrum.html","/zh/mw/collection/pan-spatial/ships/teton.html","/404.html"],He="SEARCH_PRO_QUERY_HISTORY",d=U(He,[]),Re=()=>{const{queryHistoryCount:a}=x,s=a>0;return{enabled:s,queryHistory:d,addQueryHistory:o=>{s&&(d.value=Array.from(new Set([o,...d.value.slice(0,a-1)])))},removeQueryHistory:o=>{d.value=[...d.value.slice(0,o),...d.value.slice(o+1)]}}},E=a=>be[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=x,y=U(xe,[]),Qe=()=>{const a=_>0;return{enabled:a,resultHistory:y,addResultHistory:s=>{if(a){const o={link:E(s),display:s.display};"header"in s&&(o.header=s.header),y.value=[o,...y.value.slice(0,_-1)]}},removeResultHistory:s=>{y.value=[...y.value.slice(0,s),...y.value.slice(s+1)]}}},qe=a=>{const s=ue(),o=M(),Q=we(),c=A(0),k=R(()=>c.value>0),p=pe([]);return ve(()=>{const{search:v,terminate:q}=ze(),f=de(n=>{const g=n.join(" "),{searchFilter:S=w=>w,splitWord:C,suggestionsFilter:F,...z}=s.value;g?(c.value+=1,v(n.join(" "),o.value,z).then(w=>S(w,g,o.value,Q.value)).then(w=>{c.value-=1,p.value=w}).catch(w=>{console.warn(w),c.value-=1,c.value||(p.value=[])})):p.value=[]},x.searchDelay-x.suggestDelay);Y([a,o],([n])=>f(n),{immediate:!0}),ye(()=>{q()})}),{isSearching:k,results:p}};var Ce=le({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:s}){const o=te(),Q=M(),c=ae(se),{enabled:k,addQueryHistory:p,queryHistory:v,removeQueryHistory:q}=Re(),{enabled:f,resultHistory:n,addResultHistory:g,removeResultHistory:S}=Qe(),C=k||f,F=oe(a,"queries"),{results:z,isSearching:w}=qe(F),i=ie({isQuery:!0,index:0}),m=A(0),u=A(0),P=R(()=>C&&(v.value.length>0||n.value.length>0)),L=R(()=>z.value.length>0),D=R(()=>z.value[m.value]||null),B=()=>{const{isQuery:e,index:l}=i;l===0?(i.isQuery=!e,i.index=e?n.value.length-1:v.value.length-1):i.index=l-1},G=()=>{const{isQuery:e,index:l}=i;l===(e?v.value.length-1:n.value.length-1)?(i.isQuery=!e,i.index=0):i.index=l+1},J=()=>{m.value=m.value>0?m.value-1:z.value.length-1,u.value=D.value.contents.length-1},K=()=>{m.value=m.value<z.value.length-1?m.value+1:0,u.value=0},V=()=>{u.value<D.value.contents.length-1?u.value+=1:K()},N=()=>{u.value>0?u.value-=1:J()},j=e=>e.map(l=>ke(l)?l:t(l[0],l[1])),W=e=>{if(e.type==="customField"){const l=fe[e.index]||"$content",[h,H=""]=ge(l)?l[Q.value].split("$content"):l.split("$content");return e.display.map(r=>t("div",j([h,...r,H])))}return e.display.map(l=>t("div",j(l)))},b=()=>{m.value=0,u.value=0,s("updateQuery",""),s("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},c.value.queryHistory),v.value.map((e,l)=>t("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===l}],onClick:()=>{s("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:h=>{h.preventDefault(),h.stopPropagation(),q(l)}})]))])):null,Z=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},c.value.resultHistory),n.value.map((e,l)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===l}],onClick:()=>{b()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(h=>j(h)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:h=>{h.preventDefault(),h.stopPropagation(),S(l)}})]))])):null;return ce("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const l=D.value.contents[u.value];p(a.queries.join(" ")),g(l),o.push(E(l)),b()}}else if(f){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:l}=i;i.isQuery?(s("updateQuery",v.value[l]),e.preventDefault()):(o.push(n.value[l].link),b())}}}}),Y([m,u],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!P.value}],id:"search-pro-results"},a.queries.length?w.value?t(he,{hint:c.value.searching}):L.value?t("ul",{class:"search-pro-result-list"},z.value.map(({title:e,contents:l},h)=>{const H=m.value===h;return t("li",{class:["search-pro-result-list-item",{active:H}]},[t("div",{class:"search-pro-result-title"},e||c.value.defaultTitle),l.map((r,ee)=>{const O=H&&u.value===ee;return t(T,{to:E(r),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{p(a.queries.join(" ")),g(r),b()}},()=>[r.type==="text"?null:t(r.type==="title"?re:r.type==="heading"?ne:me,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[r.type==="text"&&r.header?t("div",{class:"content-header"},r.header):null,t("div",W(r))])])})])})):c.value.emptyResult:C?P.value?[X(),Z()]:c.value.emptyHistory:c.value.emptyResult)}});export{Ce as default};
