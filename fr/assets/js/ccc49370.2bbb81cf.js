"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[3249],{7191:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var a=n(8215),s=n(1082),i=n(204),r=n(3750),l=n(569),o=n(8075),c=n(539),d=n(1865),m=n(4848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.e7)(),{title:n,description:a,date:i,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:c.title_meta??n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=n(7143);function p(){const e=(0,r.J_)();return(0,m.jsx)(h.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(7959),f=n(2075);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,r.e7)(),{nextItem:i,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!g&&s.length>0?(0,m.jsx)(x.A,{toc:s,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[(0,m.jsx)(f.A,{metadata:a}),(0,m.jsx)(o.A,{children:n}),(i||c)&&(0,m.jsx)(u,{nextItem:i,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(p,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},665:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(8215),s=n(7289),i=n(204),r=n(2362),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},2075:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(8215),s=n(7289),i=n(204),r=n(2362),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Yh,{}),className:(0,a.A)(t,i.G.common.draftBanner),children:(0,l.jsx)(s.TT,{})})}var c=n(665);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},1865:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(8215),s=n(6289),i=n(4848);function r(e){const{permalink:t,title:n,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},7959:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(8215),s=n(1021);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(s.A,{...n,linkClassName:l,linkActiveClassName:o})})}},1021:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(6540),s=n(3115);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(6289),u=n(4848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const p=(0,s.p)(),x=c??p.tableOfContents.minHeadingLevel,f=m??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>r({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:f}}),[l,o,x,f])),(0,u.jsx)(h,{toc:v,className:n,linkClassName:l,...g})}},3953:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(8215),s=n(6289);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(4848);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,a.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},6239:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(8215),s=n(539),i=n(3953);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}},7289:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var a=n(539),s=n(7143),i=n(4848);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},8075:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(6540),s=n(8532),i=n(3750),r=n(8215),l=n(4848);function o(e){let{children:t,className:n}=e;return(0,l.jsx)("article",{className:n,children:t})}var c=n(6289);const d={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,i.e7)(),{permalink:s,title:o}=n,m=a?"h1":"h2";return(0,l.jsx)(m,{className:(0,r.A)(d.title,t),children:a?o:(0,l.jsx)(c.A,{to:s,children:o})})}var u=n(539),g=n(1430),h=n(8569);const p={container:"container_mt6G"};function x(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.W)();return t=>{const n=Math.ceil(t);return e(n,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,l.jsx)(l.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,l.jsx)("time",{dateTime:t,children:n})}function v(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:a,readingTime:s}=n,o=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,r.A)(p.container,"margin-vert--md",t),children:[(0,l.jsx)(f,{date:a,formattedDate:(c=a,o.format(new Date(c)))}),void 0!==s&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{}),(0,l.jsx)(x,{readingTime:s})]})]});var c}var b=n(5921);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,i.e7)();if(0===n.length)return null;const s=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,l.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",s?A.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,l.jsx)("div",{className:(0,r.A)(!s&&(o?"col col--12":"col col--6"),s?A.imageOnlyAuthorCol:A.authorCol),children:(0,l.jsx)(b.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function _(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(m,{}),(0,l.jsx)(j,{}),(0,l.jsx)(N,{})]})}var y=n(99),L=n(4522);function C(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,i.e7)();return(0,l.jsx)("div",{id:a?y.LU:void 0,className:(0,r.A)("markdown",n),children:(0,l.jsx)(L.A,{children:t})})}var k=n(204),T=n(5783),H=n(6239);function w(){return(0,l.jsx)("b",{children:(0,l.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function P(e){const{blogPostTitle:t,...n}=e;return(0,l.jsx)(c.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,l.jsx)(w,{})})}function I(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:a,editUrl:s,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=n.length>0;if(!(u||m||s))return null;if(t){const e=!!(s||d||c);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,l.jsx)("div",{className:(0,r.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(H.A,{tags:n})})}),e&&(0,l.jsx)(T.A,{className:(0,r.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,l.jsx)("div",{className:(0,r.A)("col",{"col--9":m}),children:(0,l.jsx)(H.A,{tags:n})}),m&&(0,l.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":u}),children:(0,l.jsx)(P,{blogPostTitle:a,to:e.permalink})})]})}function O(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(o,{className:(0,r.A)(a,n),children:[(0,l.jsx)(_,{}),(0,l.jsx)(C,{children:t}),(0,l.jsx)(I,{})]})}function R({id:e,host:t,repo:s,repoId:i,category:r,categoryId:o,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:p,lang:x,loading:f}){const[v,j]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{v||n.e(416).then(n.bind(n,416)).then((()=>j(!0)))}),[]),v?(0,l.jsx)("giscus-widget",{id:e,host:t,repo:s,repoid:i,category:r,categoryid:o,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:p,lang:x,loading:f}):null}var B=n(9136);function M(){const{colorMode:e}=(0,s.G)();return(0,l.jsx)("div",{style:{marginTop:"50px"},children:(0,l.jsx)(R,{repo:"brunopc-net/Giscus-Blog-comments",repoId:"R_kgDOJ-57Gg",category:"General",categoryId:"DIC_kwDOJ-57Gs4CYFWX",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})})}function E(e){const{metadata:t,isBlogPostPage:n}=(0,i.e7)(),a=(0,B.A)(),{frontMatter:s,slug:r,title:o}=t,{enableComments:c}=s,d=c&&a&&n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{...e}),d&&(0,l.jsx)(M,{})]})}}}]);