"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[4525],{4625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(5893),i=n(1151);n(5392);const r={title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",authors:"brunopc",enableComments:!0,image:"./thumbnail-default.webp",tags:["Health","Cycling","Running","Automation"]},l=void 0,o={permalink:"/blog/2023/09/29/Building-air-quality-training-model-cycling-running",source:"@site/blog/2023-09-29-Building-air-quality-training-model-cycling-running/index.md",title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",date:"2023-09-29T00:00:00.000Z",tags:[{inline:!0,label:"Health",permalink:"/blog/tags/health"},{inline:!0,label:"Cycling",permalink:"/blog/tags/cycling"},{inline:!0,label:"Running",permalink:"/blog/tags/running"},{inline:!0,label:"Automation",permalink:"/blog/tags/automation"}],readingTime:12.41,hasTruncateMarker:!0,authors:[{name:"Bruno PC",title:"Full stack Canadian: poutine cook & skating champion",url:"https://github.com/brunopc-net/",imageURL:"https://github.com/brunopc-net.png",key:"brunopc"}],frontMatter:{title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",authors:"brunopc",enableComments:!0,image:"./thumbnail-default.webp",tags:["Health","Cycling","Running","Automation"]},unlisted:!1,lastUpdatedAt:1730231e6,prevItem:{title:"The Engineer term and its cascading mess",permalink:"/blog/2023/10/13/Engineer-term-and-its-cascading-mess"},nextItem:{title:"Outlive your project bankruptcy",permalink:"/blog/2023/09/21/Outlive-your-project-bankruptcy"}},s={image:n(9768).Z,authorsImageUrls:[void 0]},c=[];function u(e){const t={a:"a",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{loading:"eager",alt:"Woman cycling with mask",src:n(3473).Z,srcSet:n(7618).Z+" 480w,"+n(4081).Z+" 566w,"+n(6256).Z+" 633w,"+n(3473).Z+" 778w,"+n(3742).Z+" 964w",sizes:"(max-width: 512px) 480px,(max-width: 598px) 566px,(max-width: 665px) 633px,(max-width: 810px) 778px,(max-width: 996px) 964px,(max-width: 1024px) 566px,(max-width: 1368px) 633px,778px",width:"964",height:"641"}),"\n",(0,a.jsxs)(t.p,{children:["Summer 2023, wildfires are terrible in Canada. Air quality deteriorates: ",(0,a.jsx)(t.a,{href:"https://www.journaldemontreal.com/2023/06/25/montreal-la-plus-polluee-au-monde",children:"Montreal becomes temporarily the worst city in the world for air quality"}),". This is the most direct effect of climate change so far. It is in our face."]}),"\n",(0,a.jsx)(t.p,{children:"With the effects of global warming increasing every year, I suspected it marked a turning point. In the future, we won't enjoy the constant freedom of breathing in fresh air whenever we step outside. We'll have to pick the moments, like during Canadian winters when snowstorms hit: we'll need to stay indoors, close windows, and wait for conditions to improve. Or do we?"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5392:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};function r(e){var t=a.useState(!1),n=t[0],r=t[1],l=a.useState(!1),o=l[0],s=l[1],c=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,m=e.poster||"hqdefault",p="&"+e.params||0,g=e.muted?"&mute=1":"",h=e.announce||"Watch",b=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",f=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+w+"/"+u+"/"+m+"."+b:"https://i.ytimg.com/"+w+"/"+c+"/"+m+"."+b),y=e.noCookie;y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var x=e.playlist?y+"/embed/videoseries?autoplay=1"+g+"&list="+c+p:y+"/embed/"+c+"?autoplay=1&state=1"+g+p,k=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,C=e.aspectHeight||9,j=e.aspectWidth||16,E=e.iframeClass||"",Z=e.playerClass||"lty-playbtn",I=e.wrapperClass||"yt-lite",q=e.onIframeAdded||function(){},F=e.rel?"prefetch":"preload";return a.useEffect((function(){o&&q()}),[o]),a.createElement(a.Fragment,null,a.createElement("link",{rel:F,href:f,as:"image"}),a.createElement(a.Fragment,null,n&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:y}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){n||r(!0)},onClick:function(){o||s(!0)},className:I+" "+(o?k:""),"data-title":d,style:i({backgroundImage:"url("+f+")"},{"--aspect-ratio":C/j*100+"%"})},a.createElement("button",{type:"button",className:Z,"aria-label":h+" "+d}),o&&a.createElement("iframe",{className:E,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:x})))}var l=n(5893);const o=function(e){let{id:t,title:n,start:a,end:i}=e,o="";return a&&(o+="start="+a),i&&(o+="&end="+i),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{id:t,title:n,noCookie:!0,params:o,webp:!0}),(0,l.jsx)("br",{})]})}},9768:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-default-6d2773e76dbb05b44219d27c5448d8f7.webp"},3473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-default-6d2773e76dbb05b44219d27c5448d8f7.webp"},6256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-large-0e0d5b150843b5c5313c37511f2bd697.webp"},4081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-medium-9412145b8b101c289731f47cefa7b7ed.webp"},7618:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-small-37e820c2247cd203c2d63d3492068fdc.webp"},3742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thumbnail-xlarge-ad78be0f40dbb6eb6c41a900db5b5960.webp"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var a=n(7294);const i={},r=a.createContext(i);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);