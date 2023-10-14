"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[4525],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,d=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?i.createElement(d,r(r({ref:t},h),{},{components:a})):i.createElement(d,r({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=a(7462),n=(a(7294),a(3905));const o={title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",authors:"brunopc",enableComments:!0,image:"./thumbnail.webp",tags:["Health","Cycling","Running","Automate your life"]},r=void 0,l={permalink:"/fr/blog/2023/09/29/Building-air-quality-training-model-cycling-running",source:"@site/blog/2023-09-29-Building-air-quality-training-model-cycling-running/index.md",title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",date:"2023-09-29T00:00:00.000Z",formattedDate:"29 septembre 2023",tags:[{label:"Health",permalink:"/fr/blog/tags/health"},{label:"Cycling",permalink:"/fr/blog/tags/cycling"},{label:"Running",permalink:"/fr/blog/tags/running"},{label:"Automate your life",permalink:"/fr/blog/tags/automate-your-life"}],readingTime:12.17,hasTruncateMarker:!1,authors:[{name:"Bruno Pettersen-Coulombe",title:"Full stack Canadian: poutine cook & skating champion",url:"https://github.com/brunopc-net/",imageURL:"https://github.com/brunopc-net.png",key:"brunopc"}],frontMatter:{title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",authors:"brunopc",enableComments:!0,image:"./thumbnail.webp",tags:["Health","Cycling","Running","Automate your life"]},prevItem:{title:"The Engineer term and its cascading mess",permalink:"/fr/blog/2023/10/13/Engineer-term-and-its-cascading-mess"},nextItem:{title:"Outlive your project bankruptcy",permalink:"/fr/blog/2023/09/21/Outlive-your-project-bankruptcy"}},s={image:a(3836).Z,authorsImageUrls:[void 0]},u=[{value:"Model context",id:"model-context",level:2},{value:"Health benefits from exercising",id:"health-benefits-from-exercising",level:3},{value:"Breathing rate",id:"breathing-rate",level:3},{value:"Finding acceptable baseline",id:"finding-acceptable-baseline",level:2},{value:"The efficiency of masks for air pollution",id:"the-efficiency-of-masks-for-air-pollution",level:2},{value:"Sport specific AQI limits",id:"sport-specific-aqi-limits",level:2},{value:"\ud83d\udeb4\u200d\u2642\ufe0f Road cycling",id:"\ufe0f-road-cycling",level:3},{value:"\ud83d\udeb5 Nature cycling (Gravel/MTB/CX)",id:"-nature-cycling-gravelmtbcx",level:3},{value:"\ud83c\udfc3\u200d\u2642\ufe0f Running",id:"\ufe0f-running",level:3},{value:"Dashboard",id:"dashboard",level:2},{value:"What about intensity?",id:"what-about-intensity",level:2},{value:"Outro",id:"outro",level:2}],h=(c="Video",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const p={toc:u},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Woman cycling with mask",src:a(3836).Z,width:"958",height:"637"})),(0,n.kt)("p",null,"Summer 2023, wildfires are terrible in Canada. Air quality deteriorates: ",(0,n.kt)("a",{parentName:"p",href:"https://www.journaldemontreal.com/2023/06/25/montreal-la-plus-polluee-au-monde"},"Montreal becomes temporarily the worst city in the world for air quality"),". This is the most direct effect of climate change so far. It is in our face."),(0,n.kt)("p",null,"With the effects of global warming increasing every year, I suspected it marked a turning point. In the future, we won't enjoy the constant freedom of breathing in fresh air whenever we step outside. We'll have to pick the moments, like during Canadian winters when snowstorms hit: we'll need to stay indoors, close windows, and wait for conditions to improve. Or do we?"),(0,n.kt)("p",null,'This is when I began searching for a specific and detailed model of what to do for different outdoor air pollution levels. Unfortunately, all the advice I found was binary "Exercise is ok in the orange zone (100-150) but not ok in the red zone (150-200)" or was extremely vague "You can wear a N95 mask, but don\'t stay outdoors too much". I wanted to know: could I still train outdoors? Could I exercise if I wear a N95 mask? Should I minimize my exposure time? For how much, ',(0,n.kt)("em",{parentName:"p"},"exactly"),"?"),(0,n.kt)("p",null,"Here I try to answer that question, as I believe I can contribute with my analysis."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"There's a lot of assumptions in that model - explained the best I could - but it's still far from being perfect."),(0,n.kt)("p",{parentName:"admonition"},"I am by no means a medical professional. Don't ask me for medical advice: I won't answer you. I just like to aggregate data the best I can for myself, and share it with others."),(0,n.kt)("p",{parentName:"admonition"},"This model was built to be as generic as possible, but I used my context as the baseline - your context may differ.")),(0,n.kt)("h2",{id:"model-context"},"Model context"),(0,n.kt)("p",null,"For building the present model, I considered only the PM2.5 pollution level in the air. This is the type of pollution mostly affected by wildfire & the metric that almost always dictates the air quality where I live here in Montreal. Know that there's a lot more (PM10, O",(0,n.kt)("sup",null,"3"),", no",(0,n.kt)("sup",null,"2"),", etc.)."),(0,n.kt)("p",null,"This model is targeted for athletes. That means two things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Athletes are already doing 10+ hours of intense physical activity per week. Skipping a day (or even a week) of training won't decrease the global, long-term health benefits they get from exercising. When the air is polluted, day-to-day outside exercising then becomes an all risk, no benefit scenario, as the health gains are already mostly maximized."),(0,n.kt)("li",{parentName:"ul"},"The increased PM2.5 exposition from increased breathing need to be taken in consideration. When you're just walking of traveling by bike, your breathing rate doesn't increase much. However, when you're doing proper training, it will increase much more.")),(0,n.kt)("h3",{id:"health-benefits-from-exercising"},"Health benefits from exercising"),(0,n.kt)("p",null,"If you're not doing enough physical exercising to maximize the health benefits, this model will probably be too cautious for you, as it doesn't account for the health gains you'd benefit from more exercise. For example, ",(0,n.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S0091743516000402?ref=pdf_download&fr=RR-2&rr=80d4753cb8daca53"},"a health gain for active transportation via cycling is present up to 5h a day at PM2.5 of 50 (AQI of 137)"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Health effects training at PM2.5 of 50",src:a(6525).Z,width:"958",height:"517"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S2095254620301277#fig0002"},"Even in the most polluted cities in the world, it's healthier to exercise outside than it is to not exercise at all"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Even with a reasonably high PM2.5 concentration level (e.g., \u223c180 \xb5g/m3), it would still be safe for the majority of people, except for those aged 60 years and older or with existing chronic conditions, to engage in MPA outside for at least 2.5h per week.")),(0,n.kt)("p",null,"180\xb5m/m",(0,n.kt)("sup",null,"3")," (AQI level: 230) is considered a super high level here in Montreal. It is basically the peak level when Montreal reached the most polluted city last summer (239). And even at that point, it's healthier to exercise 2.5h per week outside then to not exercise."),(0,n.kt)("p",null,'I fear that the advice "don\'t exercise outside today" will be misleading the majority of the population. Non-athletes need to understand that they still benefit from a dog walk or a bicycle commute outside.'),(0,n.kt)("p",null,'You don\'t believe me? Know that having an athlete level "elite" VO2max - the maximum level of oxygen consumption - is associated with a 5-fold reduction in all cause mortality, which is more than smoking. And smoking is much more harmful to you than any level of pollution.'),(0,n.kt)(h,{src:"https://www.youtube.com/embed/ovM3mD5Roow?si=7hRNbkM6PTheh9gl&clip=UgkxbWB6JujD39QYuBippiU0t7DA9MyUUZhw&clipt=ELTXEhinhBY",mdxType:"Video"}),(0,n.kt)("p",null,"So if you never exercise right now, tackle that habit first. You'll be able to optimize your pollution level later."),(0,n.kt)("h3",{id:"breathing-rate"},"Breathing rate"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.semanticscholar.org/paper/VE-response-to-VCO2-during-exercise-is-unaffected-Itoh-Fukuoka/7d67cc9c5c91433f251d30ecfbb84c78f6287f8e"},"Breathing rate has been studied to be proportional with oxygen consumption"),". Exposition to pollution is also proportional with exposition time outside."),(0,n.kt)("p",null,"Personally, my average power for a proper cycling workout is around 210 watts. "),(0,n.kt)("p",null,"Using the ",(0,n.kt)("a",{parentName:"p",href:"https://zwifthacks.com/app/map-ftp-calculator/"},"Zwift hack MAP and FTP Calculator"),", I figured a power of 210 watts is approximately 45 ml/kg/min VO2 - 60% of my estimated VO2max. ",(0,n.kt)("a",{parentName:"p",href:"https://www.trainingpeaks.com/coach-blog/training-through-bad-air-quality/"},"Breathing rate can increase by a factor of 5 during exercise"),", so I estimated a proportional breathing rate: 60% * 5 = 3."),(0,n.kt)("p",null,"That means that 1 hour of a proper cycling workout outside is the equivalent of being outside for 3 hours."),(0,n.kt)("p",null,"For running, I used a breathing increased rate of 4 as ",(0,n.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1334197/"},"VO2 (oxygen demand) is measured to be \u224830% higher for running then cycling for the same energy expenditure"),"."),(0,n.kt)("h2",{id:"finding-acceptable-baseline"},"Finding acceptable baseline"),(0,n.kt)("p",null,"What does acceptable risk means?"),(0,n.kt)("p",null,"We need a risk baseline, or an acceptable outside air pollution level. The general consensus if that ",(0,n.kt)("a",{parentName:"p",href:"https://www.lung.org/clean-air/outdoors/air-quality-index"},"healthy individual should start taking precautions over an Air Quality Index of 100"),", or a ",(0,n.kt)("a",{parentName:"p",href:"https://www.trainingpeaks.com/coach-blog/training-through-bad-air-quality/"},"PM2.5 concentration of 35\xb5m/m",(0,n.kt)("sup",null,"3")),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Air quality level advice table",src:a(5905).Z,width:"804",height:"410"})),(0,n.kt)("p",null,"I also found the ",(0,n.kt)("a",{parentName:"p",href:"https://jasminedevv.github.io/AQI2cigarettes/"},"AQI to Cigarettes Calculator")," from ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@jasminedevv"},"Jasmine Webb"),". There, I learned that a ",(0,n.kt)("a",{parentName:"p",href:"https://berkeleyearth.org/air-pollution-and-cigarette-equivalence/"},"24h exposition of a 22\xb5m/m",(0,n.kt)("sup",null,"3")," PM2.5 concentration roughly translates to the health effects of smoking a cigarette"),". I'll use this metric because I think it's much more understandable for me and most people."),(0,n.kt)("p",null,'If we divide the "safe" pollution level of 35\xb5m/m',(0,n.kt)("sup",null,"3")," by 22\xb5m/m",(0,n.kt)("sup",null,"3"),", we get a maximum daily cigarette dose of 1.6. That's gonna be the acceptable baseline. At 1.6 cigarettes or more, I'll be looking to reduce pollution exposition."),(0,n.kt)("p",null,"As it's a maximum ",(0,n.kt)("em",{parentName:"p"},"daily")," exposition, we need to subtract the pollution dose that will occur outside of training."),(0,n.kt)("p",null,"Advice here, to lower that amount, that day:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Avoid cooking - it is ",(0,n.kt)("a",{parentName:"li",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9434053/"},"the most common PM2.5 source at home"),". Even if you use a fan to exhaust cooking fumes outside, the risk is still to create a low-pressure zone in your house, which will make your home suck the bad air from outside."),(0,n.kt)("li",{parentName:"ul"},"Use a good, powerful enough air filter. The air filter level should be increased with ambient pollution - if AQI level is high, put it at high.")),(0,n.kt)("p",null,"If you follow this advice, I hypothesize that the level of PM2.5 exposure will be pretty low."),(0,n.kt)("p",null,"To calculate how much to subtract, I used the ",(0,n.kt)("a",{parentName:"p",href:"https://aqicn.org/data-platform/register/"},"average outside PM2.5 concentration for the past year in Montreal")," - 8.3\xb5m/m",(0,n.kt)("sup",null,"3"),". That number divided by 22 get us an \"ambiant\" dose to subtract. I could have subtracted the time from training - let\u2019s say multiply this dose by 19/24 for a 5-hour training. However, I don't know if it's possible to get a PM2.5 level that low during a pollution wave, even with the use of an air filter. I guess I will have to buy myself a PM2.5 monitor to confirm."),(0,n.kt)("p",null,"Let's carry on. The acceptable pollution dose from training should be no more than 1.6 - (8.3/22) = ",(0,n.kt)("strong",{parentName:"p"},"1.2 cigarettes"),"."),(0,n.kt)("h2",{id:"the-efficiency-of-masks-for-air-pollution"},"The efficiency of masks for air pollution"),(0,n.kt)("p",null,"Masks (even N95) aren't perfect. N95 are certified to 95% for particulates as small as 0.3 micron. Yes, they will protect you significantly, but they may still make you breathe even smaller particulates. I'm sure these particulates exist, it would be na\xefve to think the opposite. That's why my intuition tells me we should look deeper for the effectiveness of masks for such scenarios."),(0,n.kt)("p",null,"I found out that ",(0,n.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8438762/"},"N95 masks lower the pollution exposure to a factor of 14, and lower the hospitalization risk by a factor of \u22483.2"),". The latter result seems to be more relevant to us. As I suspected, they are not perfect, as the risk is still increasing with pollution rates. The curve is just less pronounced. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Relative risk with or without mask",src:a(3369).Z,width:"709",height:"707"})),(0,n.kt)("p",null,"For the current model, I will use a 3.2x dose reduction ratio to estimate the effect of wearing a N95 mask."),(0,n.kt)("h2",{id:"sport-specific-aqi-limits"},"Sport specific AQI limits"),(0,n.kt)("p",null,"Because every sport has its own context, we need to estimate limits for each."),(0,n.kt)("h3",{id:"\ufe0f-road-cycling"},"\ud83d\udeb4\u200d\u2642\ufe0f Road cycling"),(0,n.kt)("p",null,"For road cycling, pollution from cars has to be taken into consideration. Training on a high-traffic road ",(0,n.kt)("a",{parentName:"p",href:"https://www.wunderground.com/cat6/air-pollution-cars-affects-everyone-why-we-should-care"},(0,n.kt)("strong",{parentName:"a"},"doubles the amount of PM2.5 exposition from ambient levels")),"."),(0,n.kt)("p",null,"This is the scenario most likely occurring if you exercise on the road, with a lot of traffic. This is a worst-case estimation as it's rare that 100% of training time will be in a very traffic dense area (if you do, I feel sorry for you)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AQI limits for road cycling",src:a(7551).Z,width:"896",height:"493"})),(0,n.kt)("p",null,"For road cycling on a high-traffic road, the AQI Index limits would be"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"144 for a 2-hour ride / 220 with N95"),(0,n.kt)("li",{parentName:"ul"},"99 for a 3-hour ride / 181 with N95"),(0,n.kt)("li",{parentName:"ul"},"81 for a 4-hour ride / 166 with N95"),(0,n.kt)("li",{parentName:"ul"},"70 for a 5-hour ride / 157 with N95")),(0,n.kt)("h3",{id:"-nature-cycling-gravelmtbcx"},"\ud83d\udeb5 Nature cycling (Gravel/MTB/CX)"),(0,n.kt)("p",null,"Here we assume we are away from any close source of pollution (cars, factory, etc.)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AQI limits for nature cycling",src:a(2049).Z,width:"895",height:"575"})),(0,n.kt)("p",null,"AQI Index limits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"177 for a 2-hour ride / 387 with N95"),(0,n.kt)("li",{parentName:"ul"},"160 for a 3-hour ride / 275 with N95"),(0,n.kt)("li",{parentName:"ul"},"144 for a 4-hour ride / 219 with N95"),(0,n.kt)("li",{parentName:"ul"},"118 for a 5-hour ride / 192 with N95")),(0,n.kt)("h3",{id:"\ufe0f-running"},"\ud83c\udfc3\u200d\u2642\ufe0f Running"),(0,n.kt)("p",null,"We consider that running is done away from pollution, in a low-traffic area."),(0,n.kt)("p",null,"Running limits can be considered for other sports like soccer, but also for less intense activity like hiking or walking. AQI limits would be higher for these, so if you're safe to run, you'll be safe to walk or hike."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AQI limits for running",src:a(6536).Z,width:"958",height:"688"})),(0,n.kt)("p",null,"AQI Index limits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"316 for 30 minutes running / No restriction with N95"),(0,n.kt)("li",{parentName:"ul"},"208 for 1h running / 500 with N95"),(0,n.kt)("li",{parentName:"ul"},"163 for 2h running / 304 with N95"),(0,n.kt)("li",{parentName:"ul"},"143 for 3h running / 219 with N95"),(0,n.kt)("li",{parentName:"ul"},"111 for 4h running / 188 with N95"),(0,n.kt)("li",{parentName:"ul"},"92 for 5h running / 174 with N95")),(0,n.kt)("h2",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,"Let's say we have an AQI of 166. Here's what an advice dashboard may look like:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Time"),(0,n.kt)("th",{parentName:"tr",align:null},"\ud83d\udee3\ufe0f\ud83d\udeb4\u200d\u2642\ufe0f"),(0,n.kt)("th",{parentName:"tr",align:null},"\ud83d\udeb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\ud83c\udfc3\u200d\u2642\ufe0f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.5h"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1h"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2h"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe2"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3h"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4h"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5h"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6h"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude37")))),(0,n.kt)("p",null,"I'm planning to implement this dashboard on my ",(0,n.kt)("a",{parentName:"p",href:"https://brunopc-net.github.io/Horus/"},"weather report app"),", so stay tuned!"),(0,n.kt)("h2",{id:"what-about-intensity"},"What about intensity?"),(0,n.kt)("p",null,"The fact is that intensity will increase your breathing rate, but it's not the most important factor. Take running: at worst, it will worsen your dose by 25% (the current model is already considering you will be at 80% breathing rate). Time is much more important here: in fact, the more it's polluted outside, the more you should considerate shorten your workout and make it count by going more intense. Let's say you choose to do a quick, 20 minutes all-out effort: your pollution dose will be equivalent to someone doing a 25 minutes moderate run."),(0,n.kt)("p",null,"Moreover, ",(0,n.kt)("a",{parentName:"p",href:"https://www.washingtonpost.com/wellness/2023/06/07/exercise-outdoors-air-quality-wildfire-smoke/"},"higher exercise intensity may even be less harmful than low intensity"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Surprisingly, \u201cthere is some evidence that shorter high-intensity exercise bouts are less harmful than longer low-intensity ones,\u201d Hull said."),(0,n.kt)("p",{parentName:"blockquote"},"For a 2014 study, Koehle and his colleagues tested the lung function of cyclists while they alternately rode slowly or intensely in polluted air. Unexpectedly, the riders experienced more difficulties breathing while riding gently than when they pedaled all-out."),(0,n.kt)("p",{parentName:"blockquote"},"The reasons are not altogether clear, but the practical implications are, Koehle said. If smoke hangs in the air, keep your workouts short and sharp, rather than long and slow. The fitness benefits will be about the same, but your \u201cair-pollution exposure\u201d will be much less, he said.")),(0,n.kt)("h2",{id:"outro"},"Outro"),(0,n.kt)("p",null,"Whatever the air quality is (within the AQI model), there's some physical activity you can do outside without catching a massive pollution dose. Even with a 500 AQI, there's the possibility for a 60 minutes run with a N95 mask. From what I see, while air quality is a serious concern for the following decades, it's pretty manageable with simple adaptations, even for serious athletes."),(0,n.kt)("p",null,"That being said, there's another factor in air-related health problems: inside air. This is the thing with air pollution as I understand it: it's like radiation, in the sense that it depends on the total dose received. Wherever you go, the localized pollution will add up to your total exposition. ",(0,n.kt)("a",{parentName:"p",href:"https://smartairfilters.com/en/blog/who-updates-air-quality-pollution-guidelines/"},"The World Health Organization (WHO) updated its air quality guidelines in September 2021"),": the annual average shouldn't be over 5\xb5m/m",(0,n.kt)("sup",null,"3")," to prevent most pollution-related problems."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deaths from pm2.5 concentrations",src:a(1252).Z,width:"600",height:"382"})),(0,n.kt)("p",null,"As I wrote this article, the trailing year average for Montreal (2023-09-26 to 2023-09-25) is 8.3. Not much over the limit, you'd say. However, as it's an annual average, a tiny change can affect a lot on the total dose received. Reducing from 8.3\xb5m/m",(0,n.kt)("sup",null,"3")," to 5\xb5m/m",(0,n.kt)("sup",null,"3")," would be like a reduction of 55 cigarettes a year. That's also the equivalent of 46 training doses occurring in a polluted area from the current model. I'm not an expert, but it seems to be a significant amount to me."),(0,n.kt)("p",null,"Moreover, and counterintuitively, ",(0,n.kt)("a",{parentName:"p",href:"https://smartairfilters.com/en/blog/low-levels-of-air-pollution-actually-cause-most-harm/"},"the smaller the concentration, the higher the impact of a pollution reduction is"),". In other words, a reduction from 10 to 5\xb5m/m",(0,n.kt)("sup",null,"3")," will have more positive effects than a reduction from 100 to 95\xb5m/m",(0,n.kt)("sup",null,"3"),"."),(0,n.kt)("p",null,"It looks like reducing the average indoor PM2.5 concentration from 8.3\xb5m/m",(0,n.kt)("sup",null,"3")," to 5\xb5m/m",(0,n.kt)("sup",null,"3")," will have even a bigger impact than 46 training doses within the current advice model. I already have a powerful air filter, but this analysis has convinced me to buy an air quality monitor for my home."),(0,n.kt)("p",null,"Take care of your air, year-long."),(0,n.kt)("p",null,"If any of my assumption, source, or deduction is wrong, I'd be pleased if you share that to me, as I'm eager to develop my knowledge on the topic."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1XMMKUA4npwtAi0dGAHJT3UPaFEC5SNRHFRRq_MFdwqo"},"Spreadsheet for AQI limits")),(0,n.kt)("p",null,"Thumbnail image from ",(0,n.kt)("a",{parentName:"p",href:"https://www.pexels.com/@nasirun-khan-102497153/"},"Nasirun Khan")))}d.isMDXComponent=!0},5905:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/AQI-Levels-b35f5f83381bc4f54cdb5bd29b882ac3.PNG"},2049:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/AQI-limits-cycling-nature-a296edc503e2698763e02f0aff4e7a2c.png"},7551:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/AQI-limits-cycling-road-bd657ceeb7ceb1e6678895f65741d203.png"},6536:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/AQI-limits-running-5ddf0d35fe847b4444261d05ecaeac2e.webp"},1252:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Deaths-from-pm2.5-concentration-f909b89ce7e86591fcd60ec563cf80eb.webp"},6525:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Health-effect-training-at-50PM2.5-bb886d8355a8881029ff6879a1e70068.webp"},3369:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Relative-risk-with-without-mask-fd1c1e720bc49f9f8da225860a3cb4de.webp"},3836:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/thumbnail-76bd584e1a12de659375be9fef897865.webp"}}]);