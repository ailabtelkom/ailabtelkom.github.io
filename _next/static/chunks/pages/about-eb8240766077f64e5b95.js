(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{78482:function(a,i,t){"use strict";t.d(i,{E:function(){return g}});var e=t(90063),n=t(93105),s=t(4651),r=t(73808),o=t(67294),l=t(68327);function m(){return(m=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a}).apply(this,arguments)}function c(a,i){if(null==a)return{};var t,e,n={},s=Object.keys(a);for(e=0;e<s.length;e++)t=s[e],i.indexOf(t)>=0||(n[t]=a[t]);return n}var d=o.forwardRef(((a,i)=>{var{htmlWidth:t,htmlHeight:e,alt:n}=a,s=c(a,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",m({width:t,height:e,ref:i,alt:n},s))})),g=(0,e.G)(((a,i)=>{var{fallbackSrc:t,fallback:e,src:r,align:g,fit:u,loading:h,ignoreFallback:p,crossOrigin:f}=a,b=c(a,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),w=null!=h||p,y=function(a){var{src:i,srcSet:t,onLoad:e,onError:n,crossOrigin:s,sizes:r,ignoreFallback:m}=a,[c,d]=(0,o.useState)("pending");(0,o.useEffect)((()=>{d(i?"loading":"pending")}),[i]);var g=(0,o.useRef)(),u=(0,o.useCallback)((()=>{if(i){h();var a=new Image;a.src=i,s&&(a.crossOrigin=s),t&&(a.srcset=t),r&&(a.sizes=r),a.onload=a=>{h(),d("loaded"),null==e||e(a)},a.onerror=a=>{h(),d("failed"),null==n||n(a)},g.current=a}}),[i,s,t,r,e,n]),h=()=>{g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,l.G)((()=>{if(!m)return"loading"===c&&u(),()=>{h()}}),[c,u,m]),m?"loaded":c}(m({},a,{ignoreFallback:w})),x=m({ref:i,objectFit:u,objectPosition:g},w?b:(0,s.CE)(b,["onError","onLoad"]));return"loaded"!==y?e||o.createElement(n.m$.img,m({as:d,className:"chakra-image__placeholder",src:t},x)):o.createElement(n.m$.img,m({as:d,src:r,crossOrigin:f,loading:h,className:"chakra-image"},x))}));r.Ts&&(g.displayName="Image")},24003:function(a,i,t){"use strict";t.d(i,{i:function(){return g}});var e=t(90063),n=t(2326),s=t(55284),r=t(93105),o=t(84461),l=t(73808),m=t(67294);function c(){return(c=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a}).apply(this,arguments)}function d(a,i){if(null==a)return{};var t,e,n={},s=Object.keys(a);for(e=0;e<s.length;e++)t=s[e],i.indexOf(t)>=0||(n[t]=a[t]);return n}var g=(0,e.G)(((a,i)=>{var t=(0,n.m)("Divider",a),{borderLeftWidth:e,borderBottomWidth:l,borderTopWidth:g,borderRightWidth:u,borderWidth:h,borderStyle:p,borderColor:f}=t,b=d(t,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),w=(0,s.Lr)(a),{className:y,orientation:x="horizontal",__css:k}=w,v=d(w,["className","orientation","__css"]),j={vertical:{borderLeftWidth:e||u||h||"1px",height:"100%"},horizontal:{borderBottomWidth:l||g||h||"1px",width:"100%"}};return m.createElement(r.m$.hr,c({ref:i,"aria-orientation":x},v,{__css:c({},b,{border:"0",borderColor:f,borderStyle:p},j[x],k),className:(0,o.cx)("chakra-divider",y)}))}));l.Ts&&(g.displayName="Divider")},9345:function(a,i,t){"use strict";t.d(i,{r:function(){return m}});var e=t(90063),n=t(93105),s=t(73808),r=t(67294);function o(){return(o=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a}).apply(this,arguments)}function l(a,i){if(null==a)return{};var t,e,n={},s=Object.keys(a);for(e=0;e<s.length;e++)t=s[e],i.indexOf(t)>=0||(n[t]=a[t]);return n}var m=(0,e.G)(((a,i)=>{var{area:t,templateAreas:e,gap:s,rowGap:m,columnGap:c,column:d,row:g,autoFlow:u,autoRows:h,templateRows:p,autoColumns:f,templateColumns:b}=a,w=l(a,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),y={display:"grid",gridArea:t,gridTemplateAreas:e,gridGap:s,gridRowGap:m,gridColumnGap:c,gridAutoColumns:f,gridColumn:d,gridRow:g,gridAutoFlow:u,gridAutoRows:h,gridTemplateRows:p,gridTemplateColumns:b};return r.createElement(n.m$.div,o({ref:i,__css:y},w))}));s.Ts&&(m.displayName="Grid")},336:function(a,i,t){"use strict";t.d(i,{X:function(){return d}});var e=t(90063),n=t(2326),s=t(55284),r=t(93105),o=t(84461),l=t(73808),m=t(67294);function c(){return(c=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a}).apply(this,arguments)}var d=(0,e.G)(((a,i)=>{var t=(0,n.m)("Heading",a),e=function(a,i){if(null==a)return{};var t,e,n={},s=Object.keys(a);for(e=0;e<s.length;e++)t=s[e],i.indexOf(t)>=0||(n[t]=a[t]);return n}((0,s.Lr)(a),["className"]);return m.createElement(r.m$.h2,c({ref:i,className:(0,o.cx)("chakra-heading",a.className)},e,{__css:t}))}));l.Ts&&(d.displayName="Heading")},30532:function(a,i){"use strict";i.Z=[{name:"Dr. Ade Romadhony S.T., M.T",position:"Laboratory Coordinator",image:"https://dummyimage.com/500x500/eee/fff&text=AR",social:{linkedin:"https://id.linkedin.com/in/ade-romadhony-8a302668"}},{name:"Muhammad Alfhi Saputra",position:"Lab.Assistant Coordinator",image:"/assets/images/aslab20/alfhi.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MAS",social:{linkedin:"https://id.linkedin.com/in/alfhisa",github:"https://github.com/alfhi24",instagram:"https://www.instagram.com/alfhisa_/"}},{name:"Kartika Putri Dwi Atmojo",position:"Secretary",image:"/assets/images/aslab20/tika.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=KPD",social:{instagram:"https://www.instagram.com/dwi.kartikaputri/"}},{name:"Muhammad Farrel",position:"Treasurer",image:"/assets/images/aslab20/farel.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MFR",social:{github:"https://github.com/muhammadfarrel",instagram:"https://www.instagram.com/mfarrell___/"}},{name:"Dimitri Irfan Dzidny",position:"Internal",image:"/assets/images/aslab20/dimit.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=DID",social:{linkedin:"https://id.linkedin.com/in/dimitriirfan",github:"https://github.com/dimitriirfan",instagram:"https://www.instagram.com/dimitriirfann/"}},{name:"Anvaqta Tangguh Wisesa",position:"Inventory \ud83d\ude0e",image:"/assets/images/aslab20/vaq.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=ATW",social:{linkedin:"https://id.linkedin.com/in/anvaqta",github:"https://github.com/svspicious",instagram:"https://www.instagram.com/anvaqta/"}},{name:"Adriansyah Dwi Rendragraha",position:"Focus Group",image:"/assets/images/aslab20/adri.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=ADR",social:{linkedin:"https://www.linkedin.com/in/adriansyahdr?originalSubdomain=id",instagram:"https://www.instagram.com/adriansyah.d.r/"}},{name:"Dimas Bayu Nugraha",position:"Study Group",image:"/assets/images/aslab20/dimba.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=DBN",social:{linkedin:"https://id.linkedin.com/in/dimbay76"}},{name:"Kriesna Bayu Pratama",position:"Media",image:"/assets/images/aslab20/kris.jpg?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=KBP",social:{instagram:"https://www.instagram.com/kriesnapratama/"}}]},30809:function(a,i){"use strict";i.Z=[{name:"Mahmud Dwi Sulistiyo, S.T., M.T",position:"Laboratory Coordinator",image:"/assets/images/aslab21/pak_mahmud.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MDS",social:{linkedin:"https://www.linkedin.com/in/mahmud-dwi-sulistiyo-261b3a1a/"}},{name:"I Nengah Dharma Pradnyandita",position:"Lab.Assistant Coordinator",image:"/assets/images/aslab21/dharma.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=IND",social:{linkedin:"https://id.linkedin.com/in/i-nengah-dharma-pradnyandita-05628b1a3/",github:"https://github.com/nengahdharmaa/",instagram:"https://www.instagram.com/nengahdharmaa/",email:"mailto:nengahdharmaa@gmail.com"}},{name:"Nisa Maulia Azahra",position:"Secretary",image:"/assets/images/aslab21/nisa.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=NMA",social:{linkedin:"https://id.linkedin.com/in/nisamaulia/",github:"https://github.com/nisamaulia/",instagram:"https://www.instagram.com/nisa_maulia/"}},{name:"Ni Made Dwipadini Puspitarini",position:"Treasurer",image:"/assets/images/aslab21/dini.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=NMD",social:{linkedin:"https://id.linkedin.com/in/dinipuspitarini/",github:"https://github.com/dinipuspitarini/",instagram:"https://www.instagram.com/dinipuspitharini/"}},{name:"Maiza Radhiya",position:"Internal",image:"/assets/images/aslab21/maiza.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MR",social:{linkedin:"https://id.linkedin.com/in/maizaradhiya/",github:"https://github.com/maizaradhiya/",instagram:"https://www.instagram.com/mzrdh/"}},{name:"Bagja 9102 Kurniawan",position:"\ud83d\udc31 External \ud83d\ude3c",image:"/assets/images/aslab21/bagja.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=BK",social:{linkedin:"https://id.linkedin.com/in/bagja9102/",github:"https://github.com/Bagja9102Kurniawan/",instagram:"https://www.instagram.com/mochi_oreo_/",email:"mailto:bagjakurniawan@student.telkomuniversity.ac.id"}},{name:"Muhammad Zaky Aonillah",position:"Focus Group",image:"/assets/images/aslab21/zaky.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MZA",social:{linkedin:"https://id.linkedin.com/in/mhmdzaky/",github:"https://github.com/mhmdzakyy/",instagram:"https://www.instagram.com/mhmdzakyy/"}},{name:"Haydar Rizaldy Putera Prayudi",position:"Study Group",image:"/assets/images/aslab21/haydar.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=HRP",social:{linkedin:"https://id.linkedin.com/in/haydar-rizaldy-putera-prayudi/",github:"https://github.com/HaydarRizaldy/",instagram:"https://www.instagram.com/haydar_rizaldy/"}},{name:"M Alif Naufal Yasin",position:"Inventory \u2615",image:"/assets/images/aslab21/alif.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MAN",social:{linkedin:"https://id.linkedin.com/in/alifnaufalyasin/",github:"https://github.com/alifnaufalyasin/",instagram:"https://www.instagram.com/alifnaufal_yasin/",email:"mailto:alifnaufalyasin@student.telkomuniversity.ac.id"}},{name:"Kaenova Mahendra Auditama",position:"Media",image:"/assets/images/aslab21/kae.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=KMA",social:{linkedin:"https://id.linkedin.com/in/kaenova/",github:"https://github.com/kaenova/",instagram:"https://www.instagram.com/kaenovama/"}}]},85849:function(a,i,t){"use strict";t.r(i),t.d(i,{default:function(){return E}});var e=t(85893),n=t(67294),s=t(90063),r=t(73808),o=t(16678),l=t(9345);function m(){return(m=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a}).apply(this,arguments)}var c=(0,s.G)(((a,i)=>{var t,e,{columns:s,spacingX:c,spacingY:d,spacing:g,minChildWidth:u}=a,h=function(a,i){if(null==a)return{};var t,e,n={},s=Object.keys(a);for(e=0;e<s.length;e++)t=s[e],i.indexOf(t)>=0||(n[t]=a[t]);return n}(a,["columns","spacingX","spacingY","spacing","minChildWidth"]),p=u?(e=u,(0,o.XQ)(e,(a=>{return(0,r.Ft)(a)?null:"repeat(auto-fit, minmax("+(i=a,((0,r.hj)(i)?i+"px":i)+", 1fr))");var i}))):(t=s,(0,o.XQ)(t,(a=>(0,r.Ft)(a)?null:"repeat("+a+", minmax(0, 1fr))")));return n.createElement(l.r,m({ref:i,gap:g,columnGap:c,rowGap:d,templateColumns:p},h))}));r.Ts&&(c.displayName="SimpleGrid");var d=t(40980),g=t(48017),u=t(78482),h=t(336),p=t(64115),f=t(24003),b=t(99860),w=t(65969),y=t(86034),x=t(48420),k=t(89583),v=t(5434),j=function(a){var i=a.dataAslab,t=(0,b.E)(g.xu),n=(0,d.useColorModeValue)("white","gray.700"),s={start:{y:20,opacity:0},end:{y:0,opacity:1}};return(0,e.jsx)(c,{columns:{base:2,lg:4},spacing:4,children:i.map((function(a,i){return(0,e.jsxs)(t,{backgroundColor:n,whileHover:{scale:1.02},whileTap:{scale:.98},variants:s,borderWidth:"1px",children:[(0,e.jsx)(u.E,{alt:a.name,src:a.image,fallbackSrc:a.fallback,maxH:"300px",mx:"auto"}),(0,e.jsx)(h.X,{as:"h4",fontSize:"lg",children:a.name}),(0,e.jsx)(p.x,{children:a.position}),(0,e.jsxs)(y.Kq,{direction:"row",justifyContent:"center",my:"2",children:[a.social.linkedin&&(0,e.jsx)(w.Z,{href:a.social.linkedin,children:(0,e.jsx)(x.h,{size:"sm",colorScheme:"yellow","aria-label":"LinkedIn",icon:(0,e.jsx)(k.ltd,{})})}),a.social.github&&(0,e.jsx)(w.Z,{href:a.social.github,children:(0,e.jsx)(x.h,{size:"sm",colorScheme:"yellow","aria-label":"Github",icon:(0,e.jsx)(k.hJX,{})})}),a.social.instagram&&(0,e.jsx)(w.Z,{href:a.social.instagram,children:(0,e.jsx)(x.h,{size:"sm",colorScheme:"yellow","aria-label":"Instagram",icon:(0,e.jsx)(k.Zf_,{})})}),a.social.email&&(0,e.jsx)(w.Z,{href:a.social.email,children:(0,e.jsx)(x.h,{size:"sm",colorScheme:"yellow","aria-label":"Email",icon:(0,e.jsx)(v.ixJ,{})})})]})]},i)}))})},A=[{name:"Study Group",desc:"Activities in this group includes studying the introduction of AI, exploring AI trends in industry and its research applications. In this study group, the members are taught a number of methods used in AI, so that later on, it can be used as their basic knowledge that can be developed in a lot of work that are related to AI.",image:"/img/undraw_pair_programming_njlp.svg"},{name:"Focus Group",desc:" This group-aims to conduct advanced AI research and publish its findings to academic journals or present it to academic conferences. In this round of year, the themes would be Computer Vision(CV) and Natural Language Processing(NLP).",image:"/img/undraw_images_aef7.svg"},{name:"Training/Workshop",desc:"Other than study and research activities, as our contribution to the society, we held some training and workshop in fields of Artificial Intelligence to reach people or students beyond the member of this lab.",image:"/img/undraw_predictive_analytics_kf9n.svg"}],_=t(30809),S=t(30532),T=[{name:"Mahmud Dwi Sulistiyo, S.T., M.T",position:"Laboratory Coordinator",image:"/assets/images/aslab22/PAK_MAHMUD.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=MDS",social:{linkedin:"https://www.linkedin.com/in/mahmud-dwi-sulistiyo-261b3a1a/"}},{name:"Imam Rafiif Arrazaan",position:"Lab.Assistant Coordinator",image:"/assets/images/aslab22/LAB_ASSISTANT_COORDINATOR.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=RAZ",social:{linkedin:"https://www.linkedin.com/in/imam-rafiif-arrazaan-22aa951a0/",github:"https://github.com/rarrazaan/",instagram:"https://www.instagram.com/imamra_/",email:"mailto:karrazaan@gmail.com"}},{name:"Anisa Adelya Ayuputri",position:"Secretary X Treasurer",image:"/assets/images/aslab22/SECRETARY_TREASURER.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=NIS",social:{linkedin:"https://www.linkedin.com/in/anisa-adelya-27b986208/",github:"https://github.com/anisa-adelya/",instagram:"https://www.instagram.com/anisaadelya/",email:"mailto:anisa.adeliya@gmail.com"}},{name:"Zalfaa Putri Ayudhia",position:"Internal X Inventory",image:"/assets/images/aslab22/INTERNAL_INVENTORY.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=FAA",social:{linkedin:"https://www.linkedin.com/in/zalfaa-putri-ayudhia-a7146320a/",github:"https://github.com/Zalfaa30/",instagram:"https://www.instagram.com/zalf.aa/",email:"mailto:zalfaaputri.ayudhia@gmail.com"}},{name:"Vania Amadea",position:"External X Media",image:"/assets/images/aslab22/EXTERNAL_MEDIA.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=AVA",social:{linkedin:"https://www.linkedin.com/in/vania-amadea-9ba45b20a/",github:"https://github.com/vaniaas/",instagram:"https://www.instagram.com/vania_amadea/",email:"mailto:vaniaamadea.va@gmail.com"}},{name:"Rafif Fausta Kusuma Syam",position:"Focus Group",image:"/assets/images/aslab22/FOCUS_GROUP.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=RFK",social:{linkedin:"https://id.linkedin.com/in/rafif-fausta-kusuma-syam-3106221a4/",github:"https://github.com/pippuu/",instagram:"https://www.instagram.com/rafiffks/",email:"mailto:rafiffaustaks@gmail.com"}},{name:"Fadhly Al-Farizi",position:"Study Group",image:"/assets/images/aslab22/STUDY_GROUP.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=PAD",social:{linkedin:"https://www.linkedin.com/in/fadhly-al-farizi-88b38b116/",github:"https://github.com/fadhlyal/",instagram:"https://www.instagram.com/fadhlyal_/",email:"mailto:fadhlyalfarizi30@gmail.com"}},{name:"Bagja 9102 Kurniawan",position:"Research And Development",image:"/assets/images/aslab22/RESEARCH_AND_DEVELOPMENT.png?webp",fallback:"https://dummyimage.com/500x500/eee/fff&text=ASK",social:{linkedin:"https://id.linkedin.com/in/bagja9102/",github:"https://github.com/Bagja9102Kurniawan/",instagram:"https://www.instagram.com/mochi_oreo_/",email:"mailto:bagjakurniawan@student.telkomuniversity.ac.id"}}],z=t(2962),E=function(){var a=(0,b.E)(g.xu),i=((0,d.useColorMode)().colorMode,(0,d.useColorModeValue)("white","gray.700")),t={start:{y:20,opacity:0},end:{y:0,opacity:1}};return(0,e.jsxs)(n.Fragment,{children:[(0,e.jsx)(z.PB,{title:"About",description:"About Artificial Intelligence Laboratory Telkom University"}),(0,e.jsxs)(a,{initial:"start",animate:"end",variants:{start:{y:20,opacity:0,transition:{staggerChildren:.25}},end:{y:0,opacity:1,transition:{staggerChildren:.25}},exit:{opacity:0,transition:{duration:.1}}},maxW:[null,null,"2xl","5xl"],m:"auto",py:"50px",textAlign:"center",children:[(0,e.jsx)(u.E,{mt:"2",alt:"First Meet AILAB 2020",src:"/img/firstmeet2020.jpg",fallbackSrc:"/img/firstmeet2020.jpg?lqip"}),(0,e.jsxs)(g.xu,{px:{base:6,md:0},children:[(0,e.jsx)(h.X,{mt:"2",fontSize:{base:"2xl",lg:"3xl"},children:"About Artificial Intelligence Laboratory Telkom University"}),(0,e.jsxs)(p.x,{mt:"2",children:["AI Lab is a research laboratory under Intelligent System research group. We stand in the Informatics Faculty at Telkom University. As a research-focused Lab, we held several main activities to fulfill our duty, such as Focus Group, Study Group, and Workshop. We located at"," ",(0,e.jsx)(w.Z,{href:"https://goo.gl/maps/UUez97ixTdQcv83KA",isExternal:!0,children:"Room TULT 0607 Telkom University Landmark Tower"}),"."]}),(0,e.jsx)(f.i,{mt:"2",mb:"4"}),(0,e.jsx)(h.X,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"4",children:"Our activities"}),(0,e.jsx)(c,{columns:{base:1,lg:3},spacing:4,children:A.map((function(n,s){return(0,e.jsxs)(a,{backgroundColor:i,whileHover:{scale:1.02},whileTap:{scale:.98},p:"2",variants:t,borderWidth:"1px",children:[(0,e.jsx)(u.E,{alt:n.name,src:n.image,fallbackSrc:n.fallback,loading:"lazy",maxH:"100px",mx:"auto"}),(0,e.jsx)(h.X,{as:"h4",fontSize:"lg",children:n.name}),(0,e.jsx)(p.x,{p:"2",textAlign:"justify",children:n.desc})]},s)}))}),(0,e.jsx)(h.X,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mt:"8",mb:"4",children:"Meet The Enigma 2022 Gang \ud83d\udc4a\ud83d\ude0e"}),(0,e.jsx)(j,{dataAslab:T})]}),(0,e.jsxs)(g.xu,{px:{base:6,md:0},children:[(0,e.jsx)(h.X,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mt:"8",mb:"4",children:"Meet The Eliza 2021 Gang \ud83d\udc4a\ud83d\ude0e"}),(0,e.jsx)(j,{dataAslab:_.Z})]}),(0,e.jsxs)(g.xu,{px:{base:6,md:0},children:[(0,e.jsx)(h.X,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mt:"8",mb:"4",children:"Meet The Integer 2020 Gang \ud83d\udc4a\ud83d\ude0e"}),(0,e.jsx)(j,{dataAslab:S.Z})]})]})]})}},90841:function(a,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(85849)}])}},function(a){a.O(0,[228,774,888,179],(function(){return i=90841,a(a.s=i);var i}));var i=a.O();_N_E=i}]);