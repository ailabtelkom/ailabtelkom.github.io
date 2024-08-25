(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{90456:function(e,n,r){"use strict";r.d(n,{Ee:function(){return f}});var t=r(71659),i=r(44592),a=r(67294),o=r(44697);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var c=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,o=l(e,c);return a.createElement("img",s({width:r,height:t,ref:n,alt:i},o))})),f=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,c=e.fallback,f=e.src,h=e.srcSet,m=e.align,g=e.fit,x=e.loading,p=e.ignoreFallback,v=e.crossOrigin,b=l(e,u),y=null!=x||p||void 0===r&&void 0===c,j=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,s=e.onError,l=e.crossOrigin,c=e.sizes,u=e.ignoreFallback,d=(0,a.useState)("pending"),f=d[0],h=d[1];(0,a.useEffect)((function(){h(r?"loading":"pending")}),[r]);var m=(0,a.useRef)(),g=(0,a.useCallback)((function(){if(r){x();var e=new Image;e.src=r,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),n&&(e.loading=n),e.onload=function(e){x(),h("loaded"),null==i||i(e)},e.onerror=function(e){x(),h("failed"),null==s||s(e)},m.current=e}}),[r,l,t,c,i,s,n]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!u)return"loading"===f&&g(),function(){x()}}),[f,g,u]),u?"loaded":f}(s({},e,{ignoreFallback:y})),O=s({ref:n,objectFit:g,objectPosition:m},y?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==j?c||a.createElement(t.m$.img,s({as:d,className:"chakra-image__placeholder",src:r},O)):a.createElement(t.m$.img,s({as:d,src:f,srcSet:h,crossOrigin:v,loading:x,className:"chakra-image"},O))}));i.Ts&&(f.displayName="Image")},81202:function(e,n,r){"use strict";r.d(n,{Od:function(){return h}});var t=r(71659),i=r(44592),a=r(67294);r(85393),i.jU?a.useLayoutEffect:a.useEffect;i.Ts;i.Ts;var o=r(70917),s=r(97375);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var u=["startColor","endColor","isLoaded","fadeDuration","speed","className"],d=(0,t.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),f=(0,o.F4)({from:{opacity:0},to:{opacity:1}}),h=(0,t.Gp)((function(e,n){var r=(0,t.mq)("Skeleton",e),o=function(){var e=a.useRef(!0);return a.useEffect((function(){e.current=!1}),[]),e.current}(),h=(0,t.Lr)(e);h.startColor,h.endColor;var m=h.isLoaded,g=h.fadeDuration;h.speed;var x=h.className,p=c(h,u),v=(0,s.D9)(m),b=(0,i.cx)("chakra-skeleton",x);if(m){var y=o||v?"none":f+" "+g+"s";return a.createElement(t.m$.div,l({ref:n,className:b,__css:{animation:y}},p))}return a.createElement(d,l({ref:n,className:b},p,{__css:r}))}));h.defaultProps={fadeDuration:.4,speed:.8},i.Ts&&(h.displayName="Skeleton");i.Ts;i.Ts},3634:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var t=r(67294),i=r(68527),a=r(20949),o=r(99860),s=r(66311),l=r(15193),c=r(90456),u=r(37496),d=r(81202),f=r(85893),h=function(){var e=t.useState(!0),n=(0,s.Z)(e,2),r=n[0],a=n[1],o=t.useState(!1),h=(0,s.Z)(o,2),m=h[0],g=h[1],x=t.useState(!1),p=(0,s.Z)(x,2),v=p[0],b=p[1];return(0,f.jsxs)(i.xu,{mt:"4",children:[(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(l.zx,{mx:"2",size:"lg",h:{base:"100px",md:"150px"},onClick:function(){a(!0),g(!1)},children:(0,f.jsxs)(i.Kq,{children:[(0,f.jsx)(c.Ee,{alt:"Study Group",src:"/assets/images/logo_sg.png",loading:"lazy",maxH:{base:"60px",md:"100px"},mx:"auto"}),(0,f.jsx)(i.xv,{children:"Study Group"})]})}),(0,f.jsx)(l.zx,{mx:"2",size:"lg",h:{base:"100px",md:"150px"},onClick:function(){a(!1),g(!0)},children:(0,f.jsxs)(i.Kq,{children:[(0,f.jsx)(c.Ee,{alt:"Focus Group",src:"/assets/images/logo_fg.png",loading:"lazy",maxH:{base:"60px",md:"100px"},mx:"auto"}),(0,f.jsx)(i.xv,{children:"Focus Group"})]})})]}),(0,f.jsx)(u.UO,{mt:4,in:r,animateOpacity:!0,children:(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.X6,{children:"Study Group"}),(0,f.jsx)(d.Od,{isLoaded:v,children:(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{src:"https://docs.google.com/document/d/1YEapkWn2Olm7l-yMXaUirnS9ZQIRPJD-/preview",width:"100%",height:"100%",onLoad:function(){return b(!0)},children:"Loading\u2026"})})}),(0,f.jsx)(i.X6,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"2",mt:"4",children:"Let's Join With Us"}),(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{width:"100%",height:"100%",children:"Loading\u2026"})})]})}),(0,f.jsx)(u.UO,{mt:4,in:m,animateOpacity:!0,children:(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.X6,{children:"Focus Group"}),(0,f.jsx)(d.Od,{isLoaded:v,children:(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{src:"https://docs.google.com/document/d/16hz1bPnxWkgzeyj_XS5ku1cOxpcDcsMP/preview",width:"100%",height:"100%",onLoad:function(){return b(!0)},children:"Loading\u2026"})})}),(0,f.jsx)(i.X6,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"2",mt:"4",children:"Let's Join With Us"}),(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{width:"100%",height:"100%",children:"Loading\u2026"})})]})})]})},m=function(){var e=(0,o.E)(i.xu);(0,a.ff)("white","gray.700");return(0,f.jsxs)(e,{initial:"start",animate:"end",variants:{start:{y:20,opacity:0,transition:{staggerChildren:.25}},end:{y:0,opacity:1,transition:{staggerChildren:.25}},exit:{opacity:0,transition:{duration:.1}}},maxW:[null,null,"2xl","5xl"],m:"auto",py:"50px",textAlign:"center",position:"relative",children:[(0,f.jsx)(i.X6,{children:"Open Recruitment Artificial Intelligence laboratory 2024"}),(0,f.jsx)(i.iz,{mt:"2",mb:"4"}),(0,f.jsx)(h,{})]})}},24202:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oprec",function(){return r(3634)}])},66311:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}}(e,n)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return i}})}},function(e){e.O(0,[774,888,179],(function(){return n=24202,e(e.s=n);var n}));var n=e.O();_N_E=n}]);