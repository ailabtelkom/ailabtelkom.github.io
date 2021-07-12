(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{24836:function(e,r,n){"use strict";n.d(r,{E:function(){return g}});var t=n(24284),a=n(87850),i=n(19570),l=n(69739),o=n(67294),c=n(64249);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var f=o.forwardRef(((e,r)=>{var{htmlWidth:n,htmlHeight:t,alt:a}=e,i=u(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",s({width:n,height:t,ref:r,alt:a},i))})),g=(0,t.G)(((e,r)=>{var{fallbackSrc:n,fallback:t,src:l,align:g,fit:d,loading:m,ignoreFallback:h,crossOrigin:p}=e,b=u(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),y=null!=m||h,j=function(e){var{src:r,srcSet:n,onLoad:t,onError:a,crossOrigin:i,sizes:l,ignoreFallback:s}=e,[u,f]=(0,o.useState)("pending");(0,o.useEffect)((()=>{f(r?"loading":"pending")}),[r]);var g=(0,o.useRef)(),d=(0,o.useCallback)((()=>{if(r){m();var e=new Image;e.src=r,i&&(e.crossOrigin=i),n&&(e.srcset=n),l&&(e.sizes=l),e.onload=e=>{m(),f("loaded"),null==t||t(e)},e.onerror=e=>{m(),f("failed"),null==a||a(e)},g.current=e}}),[r,i,n,l,t,a]),m=()=>{g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,c.G)((()=>{if(!s)return"loading"===u&&d(),()=>{m()}}),[u,d,s]),s?"loaded":u}(s({},e,{ignoreFallback:y})),v=s({ref:r,objectFit:d,objectPosition:g},y?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==j?t||o.createElement(a.m$.img,s({as:f,className:"chakra-image__placeholder",src:n},v)):o.createElement(a.m$.img,s({as:f,src:l,crossOrigin:p,loading:m,className:"chakra-image"},v))}));l.Ts&&(g.displayName="Image")},58469:function(e,r,n){"use strict";n.d(r,{X:function(){return f}});var t=n(24284),a=n(28726),i=n(64620),l=n(87850),o=n(90785),c=n(69739),s=n(67294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=(0,t.G)(((e,r)=>{var n=(0,a.m)("Heading",e),t=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}((0,i.Lr)(e),["className"]);return s.createElement(l.m$.h2,u({ref:r,className:(0,o.cx)("chakra-heading",e.className)},t,{__css:n}))}));c.Ts&&(f.displayName="Heading")},83246:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return v}});var t=n(85893),a=n(88091),i=n(26265),l=(n(67294),n(76712)),o=n.n(l),c=n(40980),s=n(37349),u=n(67020),f=n(24836),g=n(58469),d=n(48406),m=n(12731),h=n(39629),p=n(89583);function b(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var j=function(e){var r=(0,h.E)(s.Kq),n=(0,h.E)(u.r),i=(0,c.useColorMode)().colorMode,l=[{name:"instagram",url:"https://instagram.com/ailabtelkom",icon:(0,t.jsx)(p.Zf_,{})},{name:"github",url:"https://github.com/ailabtelkom",icon:(0,t.jsx)(p.hJX,{})},{name:"line",url:"http://line.me/ti/p/~@jhf7225t",icon:(0,t.jsx)(p.MtN,{})},{name:"medium",url:"https://medium.com/ailab-telu",icon:(0,t.jsx)(p.Vlo,{})}],b={start:{y:20,opacity:0},end:{y:0,opacity:1}};return(0,t.jsx)(a.xu,y(y({h:"100vh",className:o().bgAnimation,_before:"dark"==i&&{filter:"invert(80%)"}},e),{},{children:(0,t.jsxs)(r,{initial:"start",animate:"end",exit:"exit",variants:{start:{y:30,opacity:0,transition:{staggerChildren:.2}},end:{y:0,opacity:1,transition:{staggerChildren:.2}},exit:{opacity:0,transition:{duration:.1}}},h:"full",alignItems:"center",justifyContent:{base:"center",lg:"unset"},direction:{base:"column",lg:"row"},m:"auto",maxW:[null,null,"2xl","5xl"],children:[(0,t.jsx)(a.xu,{p:"6",children:(0,t.jsx)(f.E,{shadow:"lg",rounded:"full",src:"/img/logo-md.png",fallbackSrc:"/img/logo-md.png?lqip",w:{base:"200px",lg:"xl"},alt:"Artificial Intelligence logo"})}),(0,t.jsxs)(a.xu,{p:"2",textAlign:{base:"center",lg:"unset"},children:[(0,t.jsx)(g.X,{children:"Artificial Intelligence Laboratory "}),(0,t.jsx)(d.x,{children:"AI Lab is a research laboratory under the Intelligence, Computing and Multimedia (ICM) research group. We stand in the Informatics Faculty at Telkom University."}),(0,t.jsx)(s.Kq,{direction:"row",mt:4,justifyContent:{base:"center",lg:"unset"},children:l.map((function(e,r){return(0,t.jsx)(n,{variants:b,href:e.url,isExternal:!0,children:(0,t.jsx)(m.h,{colorScheme:"yellow","aria-label":e.name,icon:e.icon})},r)}))})]})]})}))};var v=function(){return(0,t.jsx)(a.xu,{style:{overflowY:"scroll",height:"100vh",scrollSnapType:"y mandatory"},children:(0,t.jsx)(j,{style:{scrollSnapAlign:"start"}})})}},33685:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(83246)}])},76712:function(e){e.exports={bgAnimation:"Jumbotron_bgAnimation__3Uinl",slide:"Jumbotron_slide__AcT6T"}}},function(e){e.O(0,[774,888,179],(function(){return r=33685,e(e.s=r);var r}));var r=e.O();_N_E=r}]);