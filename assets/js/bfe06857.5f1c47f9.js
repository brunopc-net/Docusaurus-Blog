"use strict";(self.webpackChunkbrunopc_blog=self.webpackChunkbrunopc_blog||[]).push([[8479],{9027:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(5893),a=i(1151),r=i(5392);const o={title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",authors:"brunopc",enableComments:!0,image:"./thumbnail-default.webp",tags:["Health","Cycling","Running","Automate your life"]},s=void 0,l={permalink:"/blog/2023/09/29/Building-air-quality-training-model-cycling-running",source:"@site/blog/2023-09-29-Building-air-quality-training-model-cycling-running/index.md",title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",date:"2023-09-29T00:00:00.000Z",formattedDate:"September 29, 2023",tags:[{label:"Health",permalink:"/blog/tags/health"},{label:"Cycling",permalink:"/blog/tags/cycling"},{label:"Running",permalink:"/blog/tags/running"},{label:"Automate your life",permalink:"/blog/tags/automate-your-life"}],readingTime:12.395,hasTruncateMarker:!1,authors:[{name:"Bruno PC",title:"Full stack Canadian: poutine cook & skating champion",url:"https://github.com/brunopc-net/",imageURL:"https://github.com/brunopc-net.png",key:"brunopc"}],frontMatter:{title:"Building an air quality advice model for cycling and running",description:"More and more pollution warnings will occur in the future. How can athletes adapt their training to this new reality?",authors:"brunopc",enableComments:!0,image:"./thumbnail-default.webp",tags:["Health","Cycling","Running","Automate your life"]},unlisted:!1,prevItem:{title:"The Engineer term and its cascading mess",permalink:"/blog/2023/10/13/Engineer-term-and-its-cascading-mess"},nextItem:{title:"Outlive your project bankruptcy",permalink:"/blog/2023/09/21/Outlive-your-project-bankruptcy"}},h={image:i(9768).Z,authorsImageUrls:[void 0]},c=[{value:"Model context",id:"model-context",level:2},{value:"Health benefits from exercising",id:"health-benefits-from-exercising",level:3},{value:"Breathing rate",id:"breathing-rate",level:3},{value:"Finding acceptable baseline",id:"finding-acceptable-baseline",level:2},{value:"The efficiency of masks for air pollution",id:"the-efficiency-of-masks-for-air-pollution",level:2},{value:"Sport specific AQI limits",id:"sport-specific-aqi-limits",level:2},{value:"\ud83d\udeb4\u200d\u2642\ufe0f Road cycling",id:"\ufe0f-road-cycling",level:3},{value:"\ud83d\udeb5 Nature cycling (Gravel/MTB/CX)",id:"-nature-cycling-gravelmtbcx",level:3},{value:"\ud83c\udfc3\u200d\u2642\ufe0f Running",id:"\ufe0f-running",level:3},{value:"Dashboard",id:"dashboard",level:2},{value:"What about intensity?",id:"what-about-intensity",level:2},{value:"Outro",id:"outro",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{loading:"eager",alt:"Woman cycling with mask",src:i(3473).Z,srcSet:i(7618).Z+" 480w,"+i(4081).Z+" 566w,"+i(6256).Z+" 633w,"+i(3473).Z+" 778w,"+i(3742).Z+" 964w",sizes:"(max-width: 512px) 480px,(max-width: 598px) 566px,(max-width: 665px) 633px,(max-width: 810px) 778px,(max-width: 996px) 964px,(max-width: 1024px) 566px,(max-width: 1368px) 633px,778px",width:"964",height:"641"}),"\n",(0,n.jsxs)(t.p,{children:["Summer 2023, wildfires are terrible in Canada. Air quality deteriorates: ",(0,n.jsx)(t.a,{href:"https://www.journaldemontreal.com/2023/06/25/montreal-la-plus-polluee-au-monde",children:"Montreal becomes temporarily the worst city in the world for air quality"}),". This is the most direct effect of climate change so far. It is in our face."]}),"\n",(0,n.jsx)(t.p,{children:"With the effects of global warming increasing every year, I suspected it marked a turning point. In the future, we won't enjoy the constant freedom of breathing in fresh air whenever we step outside. We'll have to pick the moments, like during Canadian winters when snowstorms hit: we'll need to stay indoors, close windows, and wait for conditions to improve. Or do we?"}),"\n",(0,n.jsxs)(t.p,{children:['This is when I began searching for a specific and detailed model of what to do for different outdoor air pollution levels. Unfortunately, all the advice I found was binary "Exercise is ok in the orange zone (100-150) but not ok in the red zone (150-200)" or was extremely vague "You can wear a N95 mask, but don\'t stay outdoors too much". I wanted to know: could I still train outdoors? Could I exercise if I wear a N95 mask? Should I minimize my exposure time? For how much, ',(0,n.jsx)(t.em,{children:"exactly"}),"?"]}),"\n",(0,n.jsx)(t.p,{children:"Here I try to answer that question, as I believe I can contribute with my analysis."}),"\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsx)(t.p,{children:"There's a lot of assumptions in that model - explained the best I could - but it's still far from being perfect."}),(0,n.jsx)(t.p,{children:"I am by no means a medical professional. Don't ask me for medical advice: I won't answer you. I just like to aggregate data the best I can for myself, and share it with others."}),(0,n.jsx)(t.p,{children:"This model was built to be as generic as possible, but I used my context as the baseline - your context may differ."})]}),"\n",(0,n.jsx)(t.h2,{id:"model-context",children:"Model context"}),"\n",(0,n.jsxs)(t.p,{children:["For building the present model, I considered only the PM2.5 pollution level in the air. This is the type of pollution mostly affected by wildfire & the metric that almost always dictates the air quality where I live here in Montreal. Know that there's a lot more (PM10, O",(0,n.jsx)("sup",{children:"3"}),", no",(0,n.jsx)("sup",{children:"2"}),", etc.)."]}),"\n",(0,n.jsx)(t.p,{children:"This model is targeted for athletes. That means two things:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Athletes are already doing 10+ hours of intense physical activity per week. Skipping a day (or even a week) of training won't decrease the global, long-term health benefits they get from exercising. When the air is polluted, day-to-day outside exercising then becomes an all risk, no benefit scenario, as the health gains are already mostly maximized."}),"\n",(0,n.jsx)(t.li,{children:"The increased PM2.5 exposition from increased breathing need to be taken in consideration. When you're just walking of traveling by bike, your breathing rate doesn't increase much. However, when you're doing proper training, it will increase much more."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"health-benefits-from-exercising",children:"Health benefits from exercising"}),"\n",(0,n.jsxs)(t.p,{children:["If you're not doing enough physical exercising to maximize the health benefits, this model will probably be too cautious for you, as it doesn't account for the health gains you'd benefit from more exercise. For example, ",(0,n.jsx)(t.a,{href:"https://www.sciencedirect.com/science/article/pii/S0091743516000402?ref=pdf_download&fr=RR-2&rr=80d4753cb8daca53",children:"a health gain for active transportation via cycling is present up to 5h a day at PM2.5 of 50 (AQI of 137)"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Health effects training at PM2.5 of 50",src:i(6525).Z+"",width:"958",height:"517"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.sciencedirect.com/science/article/pii/S2095254620301277#fig0002",children:"Even in the most polluted cities in the world, it's healthier to exercise outside than it is to not exercise at all"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Even with a reasonably high PM2.5 concentration level (e.g., \u223c180 \xb5g/m3), it would still be safe for the majority of people, except for those aged 60 years and older or with existing chronic conditions, to engage in MPA outside for at least 2.5h per week."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["180\xb5m/m",(0,n.jsx)("sup",{children:"3"})," (AQI level: 230) is considered a super high level here in Montreal. It is basically the peak level when Montreal reached the most polluted city last summer (239). And even at that point, it's healthier to exercise 2.5h per week outside then to not exercise."]}),"\n",(0,n.jsx)(t.p,{children:'I fear that the advice "don\'t exercise outside today" will be misleading the majority of the population. Non-athletes need to understand that they still benefit from a dog walk or a bicycle commute outside.'}),"\n",(0,n.jsx)(t.p,{children:'You don\'t believe me? Know that having an athlete level "elite" VO2max - the maximum level of oxygen consumption - is associated with a 5-fold reduction in all cause mortality, which is more than smoking. And smoking is much more harmful to you than any level of pollution.'}),"\n",(0,n.jsx)(r.Z,{id:"ovM3mD5Roow",start:"306",title:"Peter Attia comments the reduction in all cause mortality rate with increased vo2max"}),"\n",(0,n.jsx)(t.p,{children:"So if you never exercise right now, tackle that habit first. You'll be able to optimize your pollution level later."}),"\n",(0,n.jsx)(t.h3,{id:"breathing-rate",children:"Breathing rate"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.semanticscholar.org/paper/VE-response-to-VCO2-during-exercise-is-unaffected-Itoh-Fukuoka/7d67cc9c5c91433f251d30ecfbb84c78f6287f8e",children:"Breathing rate has been studied to be proportional with oxygen consumption"}),". Exposition to pollution is also proportional with exposition time outside."]}),"\n",(0,n.jsx)(t.p,{children:"Personally, my average power for a proper cycling workout is around 210 watts."}),"\n",(0,n.jsxs)(t.p,{children:["Using the ",(0,n.jsx)(t.a,{href:"https://zwifthacks.com/app/map-ftp-calculator/",children:"Zwift hack MAP and FTP Calculator"}),", I figured a power of 210 watts is approximately 45 ml/kg/min VO2 - 60% of my estimated VO2max. ",(0,n.jsx)(t.a,{href:"https://www.trainingpeaks.com/coach-blog/training-through-bad-air-quality/",children:"Breathing rate can increase by a factor of 5 during exercise"}),", so I estimated a proportional breathing rate: 60% * 5 = 3."]}),"\n",(0,n.jsx)(t.p,{children:"That means that 1 hour of a proper cycling workout outside is the equivalent of being outside for 3 hours."}),"\n",(0,n.jsxs)(t.p,{children:["For running, I used a breathing increased rate of 4 as ",(0,n.jsx)(t.a,{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1334197/",children:"VO2 (oxygen demand) is measured to be \u224830% higher for running then cycling for the same energy expenditure"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"finding-acceptable-baseline",children:"Finding acceptable baseline"}),"\n",(0,n.jsx)(t.p,{children:"What does acceptable risk means?"}),"\n",(0,n.jsxs)(t.p,{children:["We need a risk baseline, or an acceptable outside air pollution level. The general consensus if that ",(0,n.jsx)(t.a,{href:"https://www.lung.org/clean-air/outdoors/air-quality-index",children:"healthy individual should start taking precautions over an Air Quality Index of 100"}),", or a ",(0,n.jsxs)(t.a,{href:"https://www.trainingpeaks.com/coach-blog/training-through-bad-air-quality/",children:["PM2.5 concentration of 35\xb5m/m",(0,n.jsx)("sup",{children:"3"})]}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Air quality level advice table",src:i(5905).Z+"",width:"804",height:"410"})}),"\n",(0,n.jsxs)(t.p,{children:["I also found the ",(0,n.jsx)(t.a,{href:"https://jasminedevv.github.io/AQI2cigarettes/",children:"AQI to Cigarettes Calculator"})," from ",(0,n.jsx)(t.a,{href:"https://medium.com/@jasminedevv",children:"Jasmine Webb"}),". There, I learned that a ",(0,n.jsxs)(t.a,{href:"https://berkeleyearth.org/air-pollution-and-cigarette-equivalence/",children:["24h exposition of a 22\xb5m/m",(0,n.jsx)("sup",{children:"3"})," PM2.5 concentration roughly translates to the health effects of smoking a cigarette"]}),". I'll use this metric because I think it's much more understandable for me and most people."]}),"\n",(0,n.jsxs)(t.p,{children:['If we divide the "safe" pollution level of 35\xb5m/m',(0,n.jsx)("sup",{children:"3"})," by 22\xb5m/m",(0,n.jsx)("sup",{children:"3"}),", we get a maximum daily cigarette dose of 1.6. That's gonna be the acceptable baseline. At 1.6 cigarettes or more, I'll be looking to reduce pollution exposition."]}),"\n",(0,n.jsxs)(t.p,{children:["As it's a maximum ",(0,n.jsx)(t.em,{children:"daily"})," exposition, we need to subtract the pollution dose that will occur outside of training."]}),"\n",(0,n.jsx)(t.p,{children:"Advice here, to lower that amount, that day:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Avoid cooking - it is ",(0,n.jsx)(t.a,{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9434053/",children:"the most common PM2.5 source at home"}),". Even if you use a fan to exhaust cooking fumes outside, the risk is still to create a low-pressure zone in your house, which will make your home suck the bad air from outside."]}),"\n",(0,n.jsx)(t.li,{children:"Use a good, powerful enough air filter. The air filter level should be increased with ambient pollution - if AQI level is high, put it at high."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you follow this advice, I hypothesize that the level of PM2.5 exposure will be pretty low."}),"\n",(0,n.jsxs)(t.p,{children:["To calculate how much to subtract, I used the ",(0,n.jsx)(t.a,{href:"https://aqicn.org/data-platform/register/",children:"average outside PM2.5 concentration for the past year in Montreal"})," - 8.3\xb5m/m",(0,n.jsx)("sup",{children:"3"}),". That number divided by 22 get us an \"ambiant\" dose to subtract. I could have subtracted the time from training - let\u2019s say multiply this dose by 19/24 for a 5-hour training. However, I don't know if it's possible to get a PM2.5 level that low during a pollution wave, even with the use of an air filter. I guess I will have to buy myself a PM2.5 monitor to confirm."]}),"\n",(0,n.jsxs)(t.p,{children:["Let's carry on. The acceptable pollution dose from training should be no more than 1.6 - (8.3/22) = ",(0,n.jsx)(t.strong,{children:"1.2 cigarettes"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"the-efficiency-of-masks-for-air-pollution",children:"The efficiency of masks for air pollution"}),"\n",(0,n.jsx)(t.p,{children:"Masks (even N95) aren't perfect. N95 are certified to 95% for particulates as small as 0.3 micron. Yes, they will protect you significantly, but they may still make you breathe even smaller particulates. I'm sure these particulates exist, it would be na\xefve to think the opposite. That's why my intuition tells me we should look deeper for the effectiveness of masks for such scenarios."}),"\n",(0,n.jsxs)(t.p,{children:["I found out that ",(0,n.jsx)(t.a,{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8438762/",children:"N95 masks lower the pollution exposure to a factor of 14, and lower the hospitalization risk by a factor of \u22483.2"}),". The latter result seems to be more relevant to us. As I suspected, they are not perfect, as the risk is still increasing with pollution rates. The curve is just less pronounced."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Relative risk with or without mask",src:i(3369).Z+"",width:"709",height:"707"})}),"\n",(0,n.jsx)(t.p,{children:"For the current model, I will use a 3.2x dose reduction ratio to estimate the effect of wearing a N95 mask."}),"\n",(0,n.jsx)(t.h2,{id:"sport-specific-aqi-limits",children:"Sport specific AQI limits"}),"\n",(0,n.jsx)(t.p,{children:"Because every sport has its own context, we need to estimate limits for each."}),"\n",(0,n.jsx)(t.h3,{id:"\ufe0f-road-cycling",children:"\ud83d\udeb4\u200d\u2642\ufe0f Road cycling"}),"\n",(0,n.jsxs)(t.p,{children:["For road cycling, pollution from cars has to be taken into consideration. Training on a high-traffic road ",(0,n.jsx)(t.a,{href:"https://www.wunderground.com/cat6/air-pollution-cars-affects-everyone-why-we-should-care",children:(0,n.jsx)(t.strong,{children:"doubles the amount of PM2.5 exposition from ambient levels"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This is the scenario most likely occurring if you exercise on the road, with a lot of traffic. This is a worst-case estimation as it's rare that 100% of training time will be in a very traffic dense area (if you do, I feel sorry for you)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"AQI limits for road cycling",src:i(7551).Z+"",width:"896",height:"493"})}),"\n",(0,n.jsx)(t.p,{children:"For road cycling on a high-traffic road, the AQI Index limits would be"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"144 for a 2-hour ride / 220 with N95"}),"\n",(0,n.jsx)(t.li,{children:"99 for a 3-hour ride / 181 with N95"}),"\n",(0,n.jsx)(t.li,{children:"81 for a 4-hour ride / 166 with N95"}),"\n",(0,n.jsx)(t.li,{children:"70 for a 5-hour ride / 157 with N95"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"-nature-cycling-gravelmtbcx",children:"\ud83d\udeb5 Nature cycling (Gravel/MTB/CX)"}),"\n",(0,n.jsx)(t.p,{children:"Here we assume we are away from any close source of pollution (cars, factory, etc.)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"AQI limits for nature cycling",src:i(2049).Z+"",width:"895",height:"575"})}),"\n",(0,n.jsx)(t.p,{children:"AQI Index limits:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"177 for a 2-hour ride / 387 with N95"}),"\n",(0,n.jsx)(t.li,{children:"160 for a 3-hour ride / 275 with N95"}),"\n",(0,n.jsx)(t.li,{children:"144 for a 4-hour ride / 219 with N95"}),"\n",(0,n.jsx)(t.li,{children:"118 for a 5-hour ride / 192 with N95"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"\ufe0f-running",children:"\ud83c\udfc3\u200d\u2642\ufe0f Running"}),"\n",(0,n.jsx)(t.p,{children:"We consider that running is done away from pollution, in a low-traffic area."}),"\n",(0,n.jsx)(t.p,{children:"Running limits can be considered for other sports like soccer, but also for less intense activity like hiking or walking. AQI limits would be higher for these, so if you're safe to run, you'll be safe to walk or hike."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"AQI limits for running",src:i(6536).Z+"",width:"958",height:"688"})}),"\n",(0,n.jsx)(t.p,{children:"AQI Index limits:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"316 for 30 minutes running / No restriction with N95"}),"\n",(0,n.jsx)(t.li,{children:"208 for 1h running / 500 with N95"}),"\n",(0,n.jsx)(t.li,{children:"163 for 2h running / 304 with N95"}),"\n",(0,n.jsx)(t.li,{children:"143 for 3h running / 219 with N95"}),"\n",(0,n.jsx)(t.li,{children:"111 for 4h running / 188 with N95"}),"\n",(0,n.jsx)(t.li,{children:"92 for 5h running / 174 with N95"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,n.jsx)(t.p,{children:"Let's say we have an AQI of 166. Here's what an advice dashboard may look like:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Time"}),(0,n.jsx)(t.th,{children:"\ud83d\udee3\ufe0f\ud83d\udeb4\u200d\u2642\ufe0f"}),(0,n.jsx)(t.th,{children:"\ud83d\udeb5"}),(0,n.jsx)(t.th,{children:"\ud83c\udfc3\u200d\u2642\ufe0f"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.5h"}),(0,n.jsx)(t.td,{children:"\ud83d\udfe2"}),(0,n.jsx)(t.td,{children:"\ud83d\udfe2"}),(0,n.jsx)(t.td,{children:"\ud83d\udfe2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1h"}),(0,n.jsx)(t.td,{children:"\ud83d\udfe2"}),(0,n.jsx)(t.td,{children:"\ud83d\udfe2"}),(0,n.jsx)(t.td,{children:"\ud83d\udfe2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2h"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"}),(0,n.jsx)(t.td,{children:"\ud83d\udfe2"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3h"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4h"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5h"}),(0,n.jsx)(t.td,{children:"\ud83d\udeab"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6h"}),(0,n.jsx)(t.td,{children:"\ud83d\udeab"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"}),(0,n.jsx)(t.td,{children:"\ud83d\ude37"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["I'm planning to implement this dashboard on my ",(0,n.jsx)(t.a,{href:"https://brunopc-net.github.io/Horus/",children:"weather report app"}),", so stay tuned!"]}),"\n",(0,n.jsx)(t.h2,{id:"what-about-intensity",children:"What about intensity?"}),"\n",(0,n.jsx)(t.p,{children:"The fact is that intensity will increase your breathing rate, but it's not the most important factor. Take running: at worst, it will worsen your dose by 25% (the current model is already considering you will be at 80% breathing rate). Time is much more important here: in fact, the more it's polluted outside, the more you should considerate shorten your workout and make it count by going more intense. Let's say you choose to do a quick, 20 minutes all-out effort: your pollution dose will be equivalent to someone doing a 25 minutes moderate run."}),"\n",(0,n.jsxs)(t.p,{children:["Moreover, ",(0,n.jsx)(t.a,{href:"https://www.washingtonpost.com/wellness/2023/06/07/exercise-outdoors-air-quality-wildfire-smoke/",children:"higher exercise intensity may even be less harmful than low intensity"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Surprisingly, \u201cthere is some evidence that shorter high-intensity exercise bouts are less harmful than longer low-intensity ones,\u201d Hull said."}),"\n",(0,n.jsx)(t.p,{children:"For a 2014 study, Koehle and his colleagues tested the lung function of cyclists while they alternately rode slowly or intensely in polluted air. Unexpectedly, the riders experienced more difficulties breathing while riding gently than when they pedaled all-out."}),"\n",(0,n.jsx)(t.p,{children:"The reasons are not altogether clear, but the practical implications are, Koehle said. If smoke hangs in the air, keep your workouts short and sharp, rather than long and slow. The fitness benefits will be about the same, but your \u201cair-pollution exposure\u201d will be much less, he said."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"outro",children:"Outro"}),"\n",(0,n.jsx)(t.p,{children:"Whatever the air quality is (within the AQI model), there's some physical activity you can do outside without catching a massive pollution dose. Even with a 500 AQI, there's the possibility for a 60 minutes run with a N95 mask. From what I see, while air quality is a serious concern for the following decades, it's pretty manageable with simple adaptations, even for serious athletes."}),"\n",(0,n.jsxs)(t.p,{children:["That being said, there's another factor in air-related health problems: inside air. This is the thing with air pollution as I understand it: it's like radiation, in the sense that it depends on the total dose received. Wherever you go, the localized pollution will add up to your total exposition. ",(0,n.jsx)(t.a,{href:"https://smartairfilters.com/en/blog/who-updates-air-quality-pollution-guidelines/",children:"The World Health Organization (WHO) updated its air quality guidelines in September 2021"}),": the annual average shouldn't be over 5\xb5m/m",(0,n.jsx)("sup",{children:"3"})," to prevent most pollution-related problems."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Deaths from pm2.5 concentrations",src:i(1252).Z+"",width:"600",height:"382"})}),"\n",(0,n.jsxs)(t.p,{children:["As I wrote this article, the trailing year average for Montreal (2023-09-26 to 2023-09-25) is 8.3. Not much over the limit, you'd say. However, as it's an annual average, a tiny change can affect a lot on the total dose received. Reducing from 8.3\xb5m/m",(0,n.jsx)("sup",{children:"3"})," to 5\xb5m/m",(0,n.jsx)("sup",{children:"3"})," would be like a reduction of 55 cigarettes a year. That's also the equivalent of 46 training doses occurring in a polluted area from the current model. I'm not an expert, but it seems to be a significant amount to me."]}),"\n",(0,n.jsxs)(t.p,{children:["Moreover, and counterintuitively, ",(0,n.jsx)(t.a,{href:"https://smartairfilters.com/en/blog/low-levels-of-air-pollution-actually-cause-most-harm/",children:"the smaller the concentration, the higher the impact of a pollution reduction is"}),". In other words, a reduction from 10 to 5\xb5m/m",(0,n.jsx)("sup",{children:"3"})," will have more positive effects than a reduction from 100 to 95\xb5m/m",(0,n.jsx)("sup",{children:"3"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["It looks like reducing the average indoor PM2.5 concentration from 8.3\xb5m/m",(0,n.jsx)("sup",{children:"3"})," to 5\xb5m/m",(0,n.jsx)("sup",{children:"3"})," will have even a bigger impact than 46 training doses within the current advice model. I already have a powerful air filter, but this analysis has convinced me to buy an air quality monitor for my home."]}),"\n",(0,n.jsx)(t.p,{children:"Take care of your air, year-long."}),"\n",(0,n.jsx)(t.p,{children:"If any of my assumption, source, or deduction is wrong, I'd be pleased if you share that to me, as I'm eager to develop my knowledge on the topic."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1XMMKUA4npwtAi0dGAHJT3UPaFEC5SNRHFRRq_MFdwqo",children:"Spreadsheet for AQI limits"})}),"\n",(0,n.jsxs)(t.p,{children:["Thumbnail image from ",(0,n.jsx)(t.a,{href:"https://www.pexels.com/@nasirun-khan-102497153/",children:"Nasirun Khan"})]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5392:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(7294),a=function(){return a=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function r(e){var t=n.useState(!1),i=t[0],r=t[1],o=n.useState(!1),s=o[0],l=o[1],h=encodeURIComponent(e.id),c="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,u=e.poster||"hqdefault",m="&"+e.params||0,p=e.muted?"&mute=1":"",f=e.announce||"Watch",g=e.webp?"webp":"jpg",x=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+x+"/"+c+"/"+u+"."+g:"https://i.ytimg.com/"+x+"/"+h+"/"+u+"."+g),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?b+"/embed/videoseries?autoplay=1"+p+"&list="+h+m:b+"/embed/"+h+"?autoplay=1&state=1"+p+m,j=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,k=e.aspectHeight||9,I=e.aspectWidth||16,M=e.iframeClass||"",T=e.playerClass||"lty-playbtn",A=e.wrapperClass||"yt-lite",C=e.onIframeAdded||function(){},q=e.rel?"prefetch":"preload";return n.useEffect((function(){s&&C()}),[s]),n.createElement(n.Fragment,null,n.createElement("link",{rel:q,href:w,as:"image"}),n.createElement(n.Fragment,null,i&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:b}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){i||r(!0)},onClick:function(){s||l(!0)},className:A+" "+(s?j:""),"data-title":d,style:a({backgroundImage:"url("+w+")"},{"--aspect-ratio":k/I*100+"%"})},n.createElement("button",{type:"button",className:T,"aria-label":f+" "+d}),s&&n.createElement("iframe",{className:M,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))}var o=i(5893);const s=function(e){let{id:t,title:i,start:n,end:a}=e,s="";return n&&(s+="start="+n),a&&(s+="&end="+a),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{id:t,title:i,noCookie:!0,params:s,webp:!0}),(0,o.jsx)("br",{})]})}},9768:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/thumbnail-default-6d2773e76dbb05b44219d27c5448d8f7.webp"},3473:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/thumbnail-default-6d2773e76dbb05b44219d27c5448d8f7.webp"},6256:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/thumbnail-large-0e0d5b150843b5c5313c37511f2bd697.webp"},4081:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/thumbnail-medium-9412145b8b101c289731f47cefa7b7ed.webp"},7618:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/thumbnail-small-37e820c2247cd203c2d63d3492068fdc.webp"},3742:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/thumbnail-xlarge-ad78be0f40dbb6eb6c41a900db5b5960.webp"},5905:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/AQI-Levels-b35f5f83381bc4f54cdb5bd29b882ac3.PNG"},2049:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/AQI-limits-cycling-nature-a296edc503e2698763e02f0aff4e7a2c.png"},7551:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/AQI-limits-cycling-road-bd657ceeb7ceb1e6678895f65741d203.png"},6536:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/AQI-limits-running-5ddf0d35fe847b4444261d05ecaeac2e.webp"},1252:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Deaths-from-pm2.5-concentration-f909b89ce7e86591fcd60ec563cf80eb.webp"},6525:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Health-effect-training-at-50PM2.5-bb886d8355a8881029ff6879a1e70068.webp"},3369:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Relative-risk-with-without-mask-fd1c1e720bc49f9f8da225860a3cb4de.webp"},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>o});var n=i(7294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);