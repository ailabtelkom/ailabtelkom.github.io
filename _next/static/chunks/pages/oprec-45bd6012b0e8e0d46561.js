(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{90456:function(e,r,n){"use strict";n.d(r,{Ee:function(){return f}});var t=n(71659),i=n(44592),a=n(67294),o=n(44697);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var l=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,o=c(e,l);return a.createElement("img",s({width:n,height:t,ref:r,alt:i},o))})),f=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,l=e.fallback,f=e.src,h=e.srcSet,m=e.align,x=e.fit,g=e.loading,p=e.ignoreFallback,v=e.crossOrigin,b=c(e,u),y=null!=g||p||void 0===n&&void 0===l,j=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,s=e.onError,c=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,a.useState)("pending"),f=d[0],h=d[1];(0,a.useEffect)((function(){h(n?"loading":"pending")}),[n]);var m=(0,a.useRef)(),x=(0,a.useCallback)((function(){if(n){g();var e=new Image;e.src=n,c&&(e.crossOrigin=c),t&&(e.srcset=t),l&&(e.sizes=l),r&&(e.loading=r),e.onload=function(e){g(),h("loaded"),null==i||i(e)},e.onerror=function(e){g(),h("failed"),null==s||s(e)},m.current=e}}),[n,c,t,l,i,s,r]),g=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!u)return"loading"===f&&x(),function(){g()}}),[f,x,u]),u?"loaded":f}(s({},e,{ignoreFallback:y})),S=s({ref:r,objectFit:x,objectPosition:m},y?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==j?l||a.createElement(t.m$.img,s({as:d,className:"chakra-image__placeholder",src:n},S)):a.createElement(t.m$.img,s({as:d,src:f,srcSet:h,crossOrigin:v,loading:g,className:"chakra-image"},S))}));i.Ts&&(f.displayName="Image")},81202:function(e,r,n){"use strict";n.d(r,{Od:function(){return h}});var t=n(71659),i=n(44592),a=n(67294);n(85393),i.jU?a.useLayoutEffect:a.useEffect;i.Ts;i.Ts;var o=n(70917),s=n(97375);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var u=["startColor","endColor","isLoaded","fadeDuration","speed","className"],d=(0,t.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),f=(0,o.F4)({from:{opacity:0},to:{opacity:1}}),h=(0,t.Gp)((function(e,r){var n=(0,t.mq)("Skeleton",e),o=function(){var e=a.useRef(!0);return a.useEffect((function(){e.current=!1}),[]),e.current}(),h=(0,t.Lr)(e);h.startColor,h.endColor;var m=h.isLoaded,x=h.fadeDuration;h.speed;var g=h.className,p=l(h,u),v=(0,s.D9)(m),b=(0,i.cx)("chakra-skeleton",g);if(m){var y=o||v?"none":f+" "+x+"s";return a.createElement(t.m$.div,c({ref:r,className:b,__css:{animation:y}},p))}return a.createElement(d,c({ref:r,className:b},p,{__css:n}))}));h.defaultProps={fadeDuration:.4,speed:.8},i.Ts&&(h.displayName="Skeleton");i.Ts;i.Ts},3634:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return m}});var t=n(67294),i=n(68527),a=n(20949),o=n(99860),s=n(66311),c=n(15193),l=n(90456),u=n(37496),d=n(81202),f=n(85893),h=function(){var e=t.useState(!0),r=(0,s.Z)(e,2),n=r[0],a=r[1],o=t.useState(!1),h=(0,s.Z)(o,2),m=h[0],x=h[1],g=t.useState(!1),p=(0,s.Z)(g,2),v=p[0],b=p[1];return(0,f.jsxs)(i.xu,{mt:"4",children:[(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(c.zx,{mx:"2",size:"lg",h:{base:"100px",md:"150px"},onClick:function(){a(!0),x(!1)},children:(0,f.jsxs)(i.Kq,{children:[(0,f.jsx)(l.Ee,{alt:"Study Group",src:"/assets/images/logo_sg.png",loading:"lazy",maxH:{base:"60px",md:"100px"},mx:"auto"}),(0,f.jsx)(i.xv,{children:"Study Group"})]})}),(0,f.jsx)(c.zx,{mx:"2",size:"lg",h:{base:"100px",md:"150px"},onClick:function(){a(!1),x(!0)},children:(0,f.jsxs)(i.Kq,{children:[(0,f.jsx)(l.Ee,{alt:"Focus Group",src:"/assets/images/logo_fg.png",loading:"lazy",maxH:{base:"60px",md:"100px"},mx:"auto"}),(0,f.jsx)(i.xv,{children:"Focus Group"})]})})]}),(0,f.jsx)(u.UO,{mt:4,in:n,animateOpacity:!0,children:(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.X6,{children:"Study Group"}),(0,f.jsx)(d.Od,{isLoaded:v,children:(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{src:"https://docs.google.com/document/d/1ySWKzz-FA5xcDXEstyJwK9xB_emXigfxOEERBSHMWVc/preview",width:"100%",height:"100%",onLoad:function(){return b(!0)},children:"Loading\u2026"})})}),(0,f.jsx)(i.X6,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"2",mt:"4",children:"Daftar Lolos Seleksi Berkas Study Group 2024"}),(0,f.jsx)(d.Od,{isLoaded:v,children:(0,f.jsx)(i.xu,{mt:8,overflowX:"auto",children:(0,f.jsx)(i.MI,{columns:{base:2,lg:5},spacing:4,children:["210001","210002","210003","210004"].map((function(e,r){return(0,f.jsx)(i.xu,{p:4,borderWidth:1,borderRadius:"md",bg:r%2===0?"#EAB533":"white",children:e},r)}))})})})]})}),(0,f.jsx)(u.UO,{mt:4,in:m,animateOpacity:!0,children:(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.X6,{children:"Focus Group"}),(0,f.jsx)(d.Od,{isLoaded:v,children:(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{src:"https://docs.google.com/document/d/16hz1bPnxWkgzeyj_XS5ku1cOxpcDcsMP/preview",width:"100%",height:"100%",onLoad:function(){return b(!0)},children:"Loading\u2026"})})}),(0,f.jsx)(i.X6,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"2",mt:"4",children:"Let's Join With Us"}),(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{src:"https://forms.office.com/r/gwL4hzhSeL",width:"100%",height:"100%",children:"Loading\u2026"})})]})})]})},m=function(){var e=(0,o.E)(i.xu);(0,a.ff)("white","gray.700");return(0,f.jsxs)(e,{initial:"start",animate:"end",variants:{start:{y:20,opacity:0,transition:{staggerChildren:.25}},end:{y:0,opacity:1,transition:{staggerChildren:.25}},exit:{opacity:0,transition:{duration:.1}}},maxW:[null,null,"2xl","5xl"],m:"auto",py:"50px",textAlign:"center",position:"relative",children:[(0,f.jsx)(i.X6,{children:"Open Recruitment Artificial Intelligence laboratory 2024"}),(0,f.jsx)(i.iz,{mt:"2",mb:"4"}),(0,f.jsx)(h,{})]})}},24202:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oprec",function(){return n(3634)}])},66311:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,r)||function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(r,{Z:function(){return i}})}},function(e){e.O(0,[774,888,179],(function(){return r=24202,e(e.s=r);var r}));var r=e.O();_N_E=r}]);