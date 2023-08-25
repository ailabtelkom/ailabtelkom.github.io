(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{90456:function(n,e,r){"use strict";r.d(e,{Ee:function(){return f}});var t=r(71659),i=r(44592),a=r(67294),o=r(44697);function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function l(n,e){if(null==n)return{};var r,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}var c=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(n,e){var r=n.htmlWidth,t=n.htmlHeight,i=n.alt,o=l(n,c);return a.createElement("img",s({width:r,height:t,ref:e,alt:i},o))})),f=(0,t.Gp)((function(n,e){var r=n.fallbackSrc,c=n.fallback,f=n.src,h=n.srcSet,m=n.align,x=n.fit,g=n.loading,p=n.ignoreFallback,v=n.crossOrigin,b=l(n,u),y=null!=g||p||void 0===r&&void 0===c,j=function(n){var e=n.loading,r=n.src,t=n.srcSet,i=n.onLoad,s=n.onError,l=n.crossOrigin,c=n.sizes,u=n.ignoreFallback,d=(0,a.useState)("pending"),f=d[0],h=d[1];(0,a.useEffect)((function(){h(r?"loading":"pending")}),[r]);var m=(0,a.useRef)(),x=(0,a.useCallback)((function(){if(r){g();var n=new Image;n.src=r,l&&(n.crossOrigin=l),t&&(n.srcset=t),c&&(n.sizes=c),e&&(n.loading=e),n.onload=function(n){g(),h("loaded"),null==i||i(n)},n.onerror=function(n){g(),h("failed"),null==s||s(n)},m.current=n}}),[r,l,t,c,i,s,e]),g=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!u)return"loading"===f&&x(),function(){g()}}),[f,x,u]),u?"loaded":f}(s({},n,{ignoreFallback:y})),O=s({ref:e,objectFit:x,objectPosition:m},y?b:(0,i.CE)(b,["onError","onLoad"]));return"loaded"!==j?c||a.createElement(t.m$.img,s({as:d,className:"chakra-image__placeholder",src:r},O)):a.createElement(t.m$.img,s({as:d,src:f,srcSet:h,crossOrigin:v,loading:g,className:"chakra-image"},O))}));i.Ts&&(f.displayName="Image")},81202:function(n,e,r){"use strict";r.d(e,{Od:function(){return h}});var t=r(71659),i=r(44592),a=r(67294);r(85393),i.jU?a.useLayoutEffect:a.useEffect;i.Ts;i.Ts;var o=r(70917),s=r(97375);function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function c(n,e){if(null==n)return{};var r,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}var u=["startColor","endColor","isLoaded","fadeDuration","speed","className"],d=(0,t.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),f=(0,o.F4)({from:{opacity:0},to:{opacity:1}}),h=(0,t.Gp)((function(n,e){var r=(0,t.mq)("Skeleton",n),o=function(){var n=a.useRef(!0);return a.useEffect((function(){n.current=!1}),[]),n.current}(),h=(0,t.Lr)(n);h.startColor,h.endColor;var m=h.isLoaded,x=h.fadeDuration;h.speed;var g=h.className,p=c(h,u),v=(0,s.D9)(m),b=(0,i.cx)("chakra-skeleton",g);if(m){var y=o||v?"none":f+" "+x+"s";return a.createElement(t.m$.div,l({ref:e,className:b,__css:{animation:y}},p))}return a.createElement(d,l({ref:e,className:b},p,{__css:r}))}));h.defaultProps={fadeDuration:.4,speed:.8},i.Ts&&(h.displayName="Skeleton");i.Ts;i.Ts},3634:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var t=r(67294),i=r(68527),a=r(20949),o=r(99860),s=r(66311),l=r(15193),c=r(90456),u=r(37496),d=r(81202),f=r(85893),h=function(){var n=t.useState(!0),e=(0,s.Z)(n,2),r=e[0],a=e[1],o=t.useState(!1),h=(0,s.Z)(o,2),m=h[0],x=h[1],g=t.useState(!1),p=(0,s.Z)(g,2),v=p[0],b=p[1];return(0,f.jsxs)(i.xu,{mt:"4",children:[(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(l.zx,{mx:"2",size:"lg",h:{base:"100px",md:"150px"},onClick:function(){a(!0),x(!1)},children:(0,f.jsxs)(i.Kq,{children:[(0,f.jsx)(c.Ee,{alt:"Study Group",src:"/assets/images/logo_sg.png",loading:"lazy",maxH:{base:"60px",md:"100px"},mx:"auto"}),(0,f.jsx)(i.xv,{children:"Study Group"})]})}),(0,f.jsx)(l.zx,{mx:"2",size:"lg",h:{base:"100px",md:"150px"},onClick:function(){a(!1),x(!0)},children:(0,f.jsxs)(i.Kq,{children:[(0,f.jsx)(c.Ee,{alt:"Focus Group",src:"/assets/images/logo_fg.png",loading:"lazy",maxH:{base:"60px",md:"100px"},mx:"auto"}),(0,f.jsx)(i.xv,{children:"Focus Group"})]})})]}),(0,f.jsx)(u.UO,{mt:4,in:r,animateOpacity:!0,children:(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.X6,{children:"Study Group"}),(0,f.jsx)(d.Od,{isLoaded:v,children:(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{width:"100%",height:"100%",onLoad:function(){return b(!0)},children:"Loading\u2026"})})}),(0,f.jsx)(i.X6,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"2",mt:"4",children:"Let's Join With Us"}),(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{width:"100%",height:"100%",children:"Loading\u2026"})})]})}),(0,f.jsx)(u.UO,{mt:4,in:m,animateOpacity:!0,children:(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.X6,{children:"Focus Group"}),(0,f.jsx)(d.Od,{isLoaded:v,children:(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{width:"100%",height:"100%",onLoad:function(){return b(!0)},children:"Loading\u2026"})})}),(0,f.jsx)(i.X6,{as:"h2",fontSize:{base:"xl",lg:"2xl"},mb:"2",mt:"4",children:"Let's Join With Us"}),(0,f.jsx)(i.xu,{width:"100%",h:{base:"75vh",md:"90vh"},mt:"2",children:(0,f.jsx)("iframe",{width:"100%",height:"100%",children:"Loading\u2026"})})]})})]})},m=function(){var n=(0,o.E)(i.xu);(0,a.ff)("white","gray.700");return(0,f.jsxs)(n,{initial:"start",animate:"end",variants:{start:{y:20,opacity:0,transition:{staggerChildren:.25}},end:{y:0,opacity:1,transition:{staggerChildren:.25}},exit:{opacity:0,transition:{duration:.1}}},maxW:[null,null,"2xl","5xl"],m:"auto",py:"50px",textAlign:"center",position:"relative",children:[(0,f.jsx)(i.X6,{children:"Open Recruitment Artificial Intelligence laboratory 2023"}),(0,f.jsx)(i.iz,{mt:"2",mb:"4"}),(0,f.jsx)(h,{})]})}},24202:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oprec",function(){return r(3634)}])},66311:function(n,e,r){"use strict";function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,a=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}}(n,e)||function(n,e){if(n){if("string"===typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return i}})}},function(n){n.O(0,[774,888,179],(function(){return e=24202,n(n.s=e);var e}));var e=n.O();_N_E=e}]);