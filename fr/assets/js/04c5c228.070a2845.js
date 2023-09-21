"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[5470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9861:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const r=a(5469).f3;function o(e){return e.split(" - ")[0]}function i(e){let{education_item:t,Logo:a}=e;return n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement("b",null,"Institution: "),n.createElement("a",{href:t.url},t.institution)),n.createElement("p",null,n.createElement("b",null,"Graduation year: "),new Date(t.endDate).getFullYear()),n.createElement("p",null,n.createElement("a",{href:t.url,target:"_blank"},n.createElement(a,{width:600}))))}function s(e){let{courses:t}=e;return n.createElement(n.Fragment,null,n.createElement("h2",null,"Curriculum"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Course"),n.createElement("th",null,"Name"))),n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:o(e)},n.createElement("td",null,o(e)),n.createElement("td",null,function(e){return e.split(" - ")[1]}(e))))))))}const l=function(e){let{area:t,studyType:a,Logo:o}=e;const l=r.filter((e=>e.area===t&&e.studyType===a))[0];return n.createElement(n.Fragment,null,n.createElement(i,{education_item:l,Logo:o}),n.createElement(s,{courses:l.courses}))}},455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var n,r,o=a(7462),i=a(7294),s=a(3905),l=a(9861);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}const m=e=>{let{title:t,titleId:a,...o}=e;return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",className:"logo_svg al_logo_svg",viewBox:"0 0 327.168 31.874","aria-labelledby":a},o),void 0===t?i.createElement("title",{id:a},"Logo C\xe9gep Andr\xe9-Laurendeau"):t?i.createElement("title",{id:a},t):null,n||(n=i.createElement("path",{d:"m17.666 7.94 4.435-6.53a.882.882 0 0 0 .136-.482.937.937 0 0 0-.925-.928c-.227 0-.381.061-.712.345l-5.463 5.519 2.529 2.076M6.4 14.622.374 20.705a1.118 1.118 0 0 0-.374.817.882.882 0 0 0 .883.9H6.4v-7.8M9.217 2.114a1.321 1.321 0 0 0-.979-.358 1.088 1.088 0 0 0-.988 1.133v27.913l.01.066v.009a1.081 1.081 0 0 0 1.166.995 1.117 1.117 0 0 0 1.024-.935 37881.102 37881.102 0 0 0 3.01-13.497 3.1 3.1 0 0 1 4.545-2.284l6.926 3.325 6.908 1.275L9.217 2.114"})),r||(r=i.createElement("path",{d:"M30.368 22.436h.336a.8.8 0 0 0 .509-.181.934.934 0 0 0 .351-.736.938.938 0 0 0-.776-.986L16.41 17.881c-1.205-.228-1.913-.221-2.735-1.138a5.647 5.647 0 0 0-.606 1.79l-.881 3.903h18.18M57.154 9.664h-1.5c-.577-2.536-1.96-3.736-4.292-3.736-3.33 0-5.417 3.185-5.417 8.185 0 5.081 2.068 8.211 5.438 8.211 2.654 0 4.251-1.762 4.618-5h1.465c-.375 4.078-2.551 6.424-5.977 6.424-4.434 0-7.191-3.691-7.191-9.582 0-5.872 2.786-9.672 7.085-9.672a5.528 5.528 0 0 1 5.766 5.168M69.57 16.99h-8.6c.083 3.546 1.433 5.478 3.826 5.478 1.478 0 2.332-.611 3.1-2.177l1.359.245a4.434 4.434 0 0 1-4.432 3.241c-3.3 0-5.289-2.57-5.289-6.787 0-4.358 2.017-7.154 5.143-7.154 2.976 0 4.889 2.627 4.889 6.647v.507m-1.483-1.2c-.16-2.928-1.434-4.612-3.453-4.612-1.984 0-3.3 1.684-3.61 4.612ZM63.86 7.821l2.519-3.567h2.205l-3.471 3.567ZM82.159 10.232v1.148l-2.568-.064a4.342 4.342 0 0 1 1.212 3.22 3.614 3.614 0 0 1-1.489 3.234 7.043 7.043 0 0 1-2.625 1.019c-1.912.521-2.626.943-2.626 1.587 0 .591.315.7 2.448.921 2.8.277 3.569.481 4.427 1.149a3.431 3.431 0 0 1 1.245 2.737c0 2.461-2.121 4-5.517 4-3.291 0-5.442-1.51-5.442-3.8 0-1.622.792-2.629 2.673-3.32-.922-.37-1.314-.813-1.314-1.517 0-.921.6-1.5 2.246-2.148a3.717 3.717 0 0 1-2.629-3.836 4.186 4.186 0 0 1 4.405-4.46 5.725 5.725 0 0 1 1.814.281l3.74-.14m-5.554 12.572c-2.542 0-4.059.92-4.059 2.515 0 1.507 1.649 2.521 4.12 2.521 2.572 0 4.136-.987 4.136-2.551 0-1.631-1.435-2.496-4.198-2.496Zm-.073-11.488a2.97 2.97 0 0 0-2.9 3.185 2.794 2.794 0 0 0 2.9 2.995 2.734 2.734 0 0 0 2.835-2.995 2.9 2.9 0 0 0-2.836-3.196ZM93.116 16.99h-8.6c.085 3.546 1.438 5.478 3.826 5.478 1.49 0 2.34-.611 3.108-2.177l1.359.245a4.45 4.45 0 0 1-4.442 3.241c-3.287 0-5.278-2.57-5.278-6.787 0-4.358 2.011-7.154 5.146-7.154 2.975 0 4.879 2.627 4.879 6.647v.507m-1.483-1.2c-.155-2.928-1.427-4.612-3.447-4.612-1.987 0-3.291 1.684-3.608 4.612ZM95.884 28.956v-14.9a14.2 14.2 0 0 0-.257-3.822h1.422a4.824 4.824 0 0 1 .216 1.617l.034.452a3.751 3.751 0 0 1 3.609-2.466c2.856 0 4.8 2.847 4.8 7.07 0 4.191-1.812 6.87-4.7 6.87a4.061 4.061 0 0 1-3.706-2.259v7.439h-1.413m5.022-6.489c2.12 0 3.369-2.07 3.369-5.541 0-3.512-1.324-5.774-3.432-5.774s-3.6 2.347-3.6 5.667c-.009 3.356 1.461 5.647 3.658 5.647ZM129.44 22.443l-1.069-3.21h-6.455l-1.1 3.21h-3.682l6.6-18.154h2.784l6.63 18.154h-3.7m-4.227-12.8-2.293 6.608h4.5ZM142.349 22.443V14.41a2.217 2.217 0 1 0-4.417 0v8.033h-3.308V9.157h3.235v1.226a4.566 4.566 0 0 1 3.31-1.38 4.321 4.321 0 0 1 3.148 1.171 4.947 4.947 0 0 1 1.342 3.778v8.492h-3.31M156.07 22.443v-1.248a3.968 3.968 0 0 1-3.292 1.4 4.683 4.683 0 0 1-3.258-1.192c-1.337-1.321-1.359-3.626-1.359-5.619s.022-4.255 1.359-5.575a4.612 4.612 0 0 1 3.237-1.207 3.991 3.991 0 0 1 3.242 1.33V4.289h3.321v18.154h-3.25m-2.341-10.45c-1.988 0-2.251 1.631-2.251 3.791 0 2.176.264 3.83 2.251 3.83s2.27-1.654 2.27-3.83c0-2.16-.279-3.791-2.27-3.791ZM169.738 12.777a2.22 2.22 0 0 0-3.9 1.661v8h-3.314V9.157h3.242v1.279a4.464 4.464 0 0 1 3.343-1.434 4.023 4.023 0 0 1 3.139 1.251l-2.507 2.523M175.424 16.837a2.743 2.743 0 0 0 2.9 2.956 3.7 3.7 0 0 0 3.016-1.249l2.015 1.962a6.326 6.326 0 0 1-5.055 2.091c-3.13 0-6.133-1.426-6.133-6.814 0-4.324 2.344-6.781 5.772-6.781 3.7 0 5.8 2.71 5.8 6.357v1.478h-8.315m4.753-3.7a2.483 2.483 0 0 0-4.445 0 3.805 3.805 0 0 0-.308 1.425h5.049a3.616 3.616 0 0 0-.296-1.425Zm-1.332-6.093h-2.22l1.629-4.344h3.495ZM185.938 13.623h7.854v3.087h-7.854zM196.9 22.443V4.289h3.546v14.995h8.231v3.159H196.9M217.612 22.443v-1.145a4.053 4.053 0 0 1-3.266 1.275 4.553 4.553 0 0 1-3.39-1.17 4.241 4.241 0 0 1-1.091-2.975c0-2.129 1.438-3.864 4.532-3.864h3.133v-.657c0-1.459-.705-2.1-2.471-2.1a2.872 2.872 0 0 0-2.55 1.1l-2.116-2.055c1.3-1.424 2.578-1.846 4.8-1.846 3.727 0 5.663 1.586 5.663 4.7v8.745h-3.242m-.082-5.606h-2.617c-1.212 0-1.866.56-1.866 1.5 0 .921.608 1.533 1.921 1.533a2.609 2.609 0 0 0 2.078-.639 2.168 2.168 0 0 0 .484-1.684ZM231.558 22.443v-1.216a4.537 4.537 0 0 1-3.31 1.371 4.308 4.308 0 0 1-3.136-1.167 4.942 4.942 0 0 1-1.343-3.776v-8.5h3.3v8.042a2.216 2.216 0 1 0 4.414 0V9.155h3.315v13.286h-3.243M245.233 12.777a2.229 2.229 0 0 0-1.767-.785 2.206 2.206 0 0 0-2.135 2.445v8h-3.316V9.157h3.242v1.279a4.475 4.475 0 0 1 3.337-1.434 3.986 3.986 0 0 1 3.134 1.251l-2.5 2.523M250.923 16.837a2.744 2.744 0 0 0 2.909 2.955 3.686 3.686 0 0 0 3.01-1.249l2.013 1.962a6.333 6.333 0 0 1-5.053 2.091c-3.136 0-6.148-1.426-6.148-6.814 0-4.324 2.35-6.781 5.8-6.781 3.692 0 5.79 2.71 5.79 6.357v1.478h-8.32m4.745-3.7a2.477 2.477 0 0 0-4.437 0 3.559 3.559 0 0 0-.308 1.425h5.045a3.6 3.6 0 0 0-.301-1.424ZM269.516 22.443V14.41a2.213 2.213 0 1 0-4.408 0v8.033h-3.326V9.157h3.245v1.226a4.559 4.559 0 0 1 3.316-1.38 4.292 4.292 0 0 1 3.133 1.171 4.934 4.934 0 0 1 1.354 3.778v8.492h-3.314M283.235 22.443v-1.248a3.962 3.962 0 0 1-3.28 1.4 4.7 4.7 0 0 1-3.271-1.195c-1.335-1.321-1.351-3.626-1.351-5.619s.016-4.255 1.351-5.575a4.608 4.608 0 0 1 3.234-1.207 4 4 0 0 1 3.243 1.33V4.286h3.316V22.44h-3.242m-2.353-10.45c-1.983 0-2.237 1.631-2.237 3.791 0 2.176.254 3.83 2.237 3.83s2.279-1.654 2.279-3.83c0-2.157-.283-3.788-2.28-3.788ZM292.292 16.837a2.742 2.742 0 0 0 2.9 2.955 3.686 3.686 0 0 0 3.015-1.249l2.006 1.962a6.311 6.311 0 0 1-5.035 2.091c-3.145 0-6.155-1.426-6.155-6.814 0-4.324 2.341-6.781 5.786-6.781 3.7 0 5.8 2.71 5.8 6.357v1.478h-8.317m4.74-3.7a2.475 2.475 0 0 0-4.435 0 3.487 3.487 0 0 0-.305 1.425h5.047a3.354 3.354 0 0 0-.307-1.424ZM309.968 22.443v-1.145a4.062 4.062 0 0 1-3.269 1.275 4.56 4.56 0 0 1-3.388-1.17 4.243 4.243 0 0 1-1.1-2.976c0-2.129 1.451-3.864 4.544-3.864h3.128v-.657c0-1.459-.716-2.1-2.464-2.1a2.852 2.852 0 0 0-2.551 1.1l-2.123-2.055c1.3-1.424 2.577-1.846 4.8-1.846 3.727 0 5.661 1.586 5.661 4.7v8.745h-3.238m-.082-5.606h-2.618c-1.205 0-1.867.56-1.867 1.5 0 .921.614 1.533 1.92 1.533a2.611 2.611 0 0 0 2.08-.639 2.178 2.178 0 0 0 .486-1.684ZM323.918 22.443v-1.216a4.577 4.577 0 0 1-3.321 1.371 4.333 4.333 0 0 1-3.135-1.167 4.951 4.951 0 0 1-1.353-3.774v-8.5h3.323v8.042a2.128 2.128 0 0 0 2.192 2.415 2.151 2.151 0 0 0 2.22-2.415V9.155h3.325v13.286h-3.251"})))},d={sidebar_position:3,title:"Computer Science DEC"},p=void 0,u={unversionedId:"education/computer-science-dec",id:"education/computer-science-dec",title:"Computer Science DEC",description:"This is my first IT degree I attended after high school. The program was a solid base of OOP. It also had a particular emphasis on web programming and technologies",source:"@site/docs/education/computer-science-dec.md",sourceDirName:"education",slug:"/education/computer-science-dec",permalink:"/fr/docs/education/computer-science-dec",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Computer Science DEC"},sidebar:"tutorialSidebar",previous:{title:"Software Engineering Bachelor",permalink:"/fr/docs/education/software-engineering-bachelor"},next:{title:"Projects",permalink:"/fr/docs/category/projects"}},h={},g=[],f={toc:g},y="wrapper";function v(e){let{components:t,...a}=e;return(0,s.kt)(y,(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is my first IT degree I attended after high school. The program was a solid base of ",(0,s.kt)("a",{href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP"),". It also had a particular emphasis on web programming and technologies"),(0,s.kt)(l.Z,{area:"Computer Science",studyType:"DEC",Logo:m,mdxType:"Education"}))}v.isMDXComponent=!0},5469:e=>{e.exports=JSON.parse('{"ZT":[{"name":"National Bank of Canada","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","url":"https://www.nbc.ca/","position":"SDET Analyst","startDate":"2023-04","endDate":"2023-06","summary":"This mandate consisted of analyzing the efficiency of the team and proposing solutions to improve the speed of work. In particular, the potential gains of test automation was studied.","highlights":["Tested new AWS microservices to ensure compliance with legacy system","Interviewd developers and testers to fully understand their tasks, challenges and slowdowns","Analyzed bottlenecks, project context and automation costs","Delivered a factual analysis on test automation relevance"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"SDET Technical Lead","startDate":"2022-08","endDate":"2023-03","summary":"Building a new testing framework from scratch for the Swift payment infrastructure.","highlights":["Reduced the number of lines of code by 85% compared to legacy framework","Separated the test framework into several JAR deployed in Nexus: an API client for the main application (APS) and a payment injector to push payments in APS via Kafka Queues","Refactored the code using Unirest, Lombok, Jackson, Prowide Software libraries (Prowide core and Prowide ISO 2022), object inheritance, dependency injection, and Gherkin","Implemented Fail-fast principle and detailled logs","Trained 30 people within the SDET team via 7 presentations on the new test architecture"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"SDET Developer","startDate":"2022-03","endDate":"2022-07","summary":"Test automation for the Bankmate service, a Swift MT to MX(XML) format converter.","highlights":["Developed about 30 different tests to validate the behavior of Bankmate","Revised existing Bankmate test code to eliminate code duplication","Rewrited Bankmate legacy tests using Gherkin structure","Assisted my colleagues on the technical side"]},{"name":"National Bank of Canada","url":"https://www.nbc.ca/","type":"mandate","employer":"Levio","employerUrl":"https://levio.ca/","position":"QA Developer","startDate":"2020-10","endDate":"2022-02","summary":"Test automation for the ICOP application and microservices","highlights":["Upgraded the test velocity from 1 manual test/hour to 400 tests/hour","Developed ~120 automated tests for the ICOP application using the Selenium library","Developed ~60 automated tests for ICOP microservices (ISRPB/IIAPB/CAOPB) via Rest Assured","Set up 4 Jenkins pipelines for the execution of the automated tests","Documented pipeline execution, code structure and maintenance guidance","Trained new employees on National Bank\'s Test Automation Framework"]},{"name":"Soci\xe9t\xe9 G\xe9n\xe9rale","url":"https://www.societegenerale.com/","type":"permanent","position":"DevOps Developer","startDate":"2019-01","endDate":"2020-09","summary":"Having worked on the production support as a Application support Analyst and automated a lot of things there, I was recruted as a DevOps Developer as a full time intern employee.","highlights":["Refactored the Eztops to GMI accounting service, with monitoring and automated alerts","Deployed and configured of an ELK-based monitoring solution for 2,000 Autosys processes","Developed Powershell scripts to communicate between APIs (Elasticsearch and Autosys)","Managed deployments","Writed dynamic documentation scripts (Do-nothing scripts) to improve bug investigation time"]},{"name":"Soci\xe9t\xe9 G\xe9n\xe9rale","url":"https://www.societegenerale.com/","type":"mandate","employer":"CGI","employerUrl":"https://www.cgi.com/","position":"Application Support Analyst","startDate":"2016-08","endDate":"2018-12","summary":"My first mandate after graduation to support several global finance applications. Lots of low-hanging fruits so having a development background, I took the opportunity to improve things.","highlights":["Reduced code/repos for financial reports production from 20 to 1 by developing a configurable, automated report producer using Groovy and Autosys scheduler","Configured and deployed a software and pod monitoring solution based on ELK","Planned the migration from the OnPrem Newtops to the Cloud based, modernized Eztops","Automated manual daily monitoring checks and alerts (by email)","Developed bash scripts to automate fixes for recurring operations failure","Supported production operations"]},{"name":"Constellio","position":"Developer","type":"internship","url":"https://www.constellio.com/","startDate":"2014-09","endDate":"2015-04","summary":"Constellio was a small business (growned and sold since) with a clientele that was mainly governmental. I built out a modular JavaScript web client for their flagship product.","highlights":["Deployed on the Government du Qu\xe9bec website, sucessfully handling 100,000 requests/day","Developed unit and integration tests for their product, using Mockito and JUnit"]},{"name":"Equisoft","type":"internship","position":"Junior Developer","url":"https://www.equisoft.com/","startDate":"2013-01","endDate":"2013-05","summary":"Implemented Entity framework on their subscription management software.","highlights":["First experience as a professional software developer"]},{"name":"Solutions Technologies","type":"freelance","position":"Web Developer","url":"https://www.stinfo.ca/","startDate":"2014-04","endDate":"2014-05","summary":"Following a loss of code following a virus, Solutions Technologies contacted me to restore their tailor-made and configurable e-commerce shopping cart module for their various customers.","highlights":["Developed the backend of a modular e-commerce shopping cart based on Magento"]},{"name":"Vice Longboards","type":"freelance","position":"Web Developer","startDate":"2013-08","endDate":"2013-12","summary":"The small longboard manufacturing company asked me to create their portfolio website","highlights":["Applied learnings from GTI350-Design and evaluation of graphic user interfaces"]},{"name":"FJB Casting","url":"https://fjbcasting.ca/","type":"freelance","position":"Web Developer","startDate":"2011-09","endDate":"2011-10","summary":"FJB casting needed a module for uploading and cropping photos of models for her bank of extras. The extras could then manage their images themselves on the Figuration Julie Breton website, a task that was cumbersome for the owner of the company.","highlights":["Integration of a cropping module and image upload in PHP/Javascript"]},{"name":"Heritage Software Inc.","type":"freelance","position":"Web Developer","startDate":"2011-05","endDate":"2011-05","summary":"Heritage Software needed a drag-and-drop file upload module for their website.","highlights":["Integrated a file upload module in PHP/Javascript"]},{"name":"Les 2 Photographes","url":"https://www.les2photographes.com/","type":"freelance","position":"Web Developer","startDate":"2009-02","endDate":"2009-05","summary":"A graphic designer approached me after having accepted a mandate beyond his competence. The goal being to deliver a transactional photographs website. I was proud to have been able to deliver the mandate on time despite the end of the school semester and very tight schedule.","highlights":["Built a recursive algorithm to display available images on the website","Automated the production of image snippets with watermarks to display available images","Secured the full size images so that they were inaccessible to the public","Automated the payment via PayPal API","Automated email sending with attached full size images once payment was made"]},{"name":"CADS Informatique","url":"https://cadsinformatique.com/","type":"internship","position":"Web Developer","startDate":"2010-01","endDate":"2010-05","summary":"First professional mandate (intership) which was an opportunity for me to gain experience in a direct relationship with various clients. I gained experience with both front-end and back-end.","highlights":["Redesigned a citizen news website based on Wordpress","Built a custom CMS","Designed a website for an elderly residence"]}],"f3":[{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/","area":"Entrepreneurship","studyType":"Minor","startDate":"2014-01","endDate":"2016-08","courses":["ENT201 - Business financial management","ENT202 - Introduction to entrepreneurship","ENT601 - Marketing and sales","ENT602 - Company management"]},{"institution":"\xc9cole de technologie sup\xe9rieure","url":"https://www.etsmtl.ca/","area":"Software Engineering","studyType":"Bachelor","startDate":"2010-09","endDate":"2016-08","courses":["LOG120 - Software Design","LOG210 - Object-Oriented Design","LOG240 - Conception et \xe9valuation des interfaces utilisateurs","LOG320 - Data structures and Algorithms","LOG330 - Software Quality Assurance","LOG410 - Needs analysis and specifications","LOG430 - Software Architechture","LOG515 - project management","LOG530 - Software re-engineering","LOG635 - Artificial Intelligence Algorithms","LOG645 - Parrallel Computing","LOG660 - High performance Databases","LOG735 - Distributed Systems","LOG791 - Special projects","LOG792 - Graduation project in software engineering","GTI350 - Design and evaluation of graphic user interfaces (GUI)","GTI610 - Telecommunication networks","GTI619 - System Security","CHM131 - Chemistry and materials","ING150 - Static and Dynamic Physics","ING160 - Thermodynamics and Fluid mechanics","PHY332 - Electricity and Magnetism","PHY335 - Physics of electromagnetic waves","MAT145 - Differential and integral calculus","MAT210 - Logic and discrete mathematics","MAT265 - Differential equations","MAT350 - Probability and statistics","MAT472 - Linear algebra and space geometry","COM110 - Communication methods","GIA400 - Project profitability analysis","TIN501 - Environment, technology and society"]},{"institution":"C\xe9gep Andr\xe9-Laurendeau","url":"https://claurendeau.qc.ca/","endDate":"2010-05","startDate":"2007-08","area":"Computer Science","studyType":"DEC","courses":["201-420-AL - Mathematics and Computer Science","420-102-AL - Algorithms and programming I","420-111-AL - Computers and technical support","420-121-AL - Internet and multimedia","420-201-AL - Algorithms and programming II","420-211-AL - Operating systems","420-221-AL - Web Apps I","420-301-AL - Object Oriented Design and Programming I","420-311-AL - Network architecture","420-321-AL - Web Apps II","420-331-AL - Systems modeling and UML","201-421-AL - Statistics","420-401-AL - Object Oriented Design and Programming II","420-411-AL - Internet Services and Security","420-431-AL - Implementation of databases","401-420-AL - Enterprise Computer Systems","420-501-AL - Programming user interfaces","420-502-AL - Quality Assurance and Maintenance","420-521-AL - Multi-Tier Application Project","420-531-AL - Integrated Database Tools I","420-631-AL - Integrated Database Tools II"]}],"nb":[{"name":"Backend","level":"Senior","keywords":["API REST","API SOAP","Java","Spring Boot","Javascript","Node.js","Express","Python","PHP"]},{"name":"Frontend","level":"Intermediate","keywords":["React","JQuery","HTML"]},{"name":"DevOps","level":"Intermediate","keywords":["Deployment optimisation","CI/CD","Jenkins","Docker","ELK Stack"]},{"name":"Databases","level":"Intermediate","keywords":["Redis","NoSQL","SQL Server","Oracle","PostgreSQL","MariaDB/MySQL"]},{"name":"Scripting","level":"Intermediate","keywords":["Bash","Groovy","Powershell"]},{"name":"SDET/QA","level":"Senior","keywords":["Gherkin","Rest Assured","Selenium","HtmlUnit","Mockito","Spock","JUnit","PHPUnit","Xray"]},{"name":"Tools","keywords":["IntelliJ","PyCharm","WebStorm","Visual Studio Code","Visual Studio","Eclipse","Git","Bitbucket","Jira","Maven","Gradle","Nexus","Swagger"]}]}')}}]);