(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"3L07":function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n("M/Vb"),i=n("sKyC"),r=n("4jWa"),o=n("CRla"),s=n("U6LL"),l=n("2oH+"),c=n.n(l),u=n("epLR"),h=n("pr4h"),f=n("q1tI"),d=n("JX03");function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var[p,g]=Object(d.a)({strict:!1,name:"ButtonGroupContext"}),b=Object(i.a)((function(t,e){var{size:n,colorScheme:a,variant:i,className:r,spacing:o="0.5rem",isAttached:l,isDisabled:c}=t,h=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),d=Object(u.b)("chakra-button__group",r),g=f.useMemo(()=>({size:n,colorScheme:a,variant:i,isDisabled:c}),[n,a,i,c]),b={display:"inline-flex"};return b=m({},b,l?{"> *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderLeftRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginLeft:o}}),f.createElement(p,{value:g},f.createElement(s.a.div,m({ref:e,role:"group",__css:b,className:d},h)))}));function y(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}h.a&&(b.displayName="ButtonGroup");var O=Object(i.a)((function(t,e){var n,a=g(),i=Object(r.b)("Button",v({},a,t)),l=Object(o.d)(t),{isDisabled:h=(null==a?void 0:a.isDisabled),isLoading:d,isActive:m,isFullWidth:p,children:b,leftIcon:O,rightIcon:w,loadingText:C,iconSpacing:E="0.5rem",type:k="button",spinner:x,className:N,as:_}=l,I=y(l,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","className","as"]),T=c()({},null!=(n=null==i?void 0:i._focus)?n:{},{zIndex:1}),A=v({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:p?"100%":"auto"},i,!!a&&{_focus:T});return f.createElement(s.a.button,v({disabled:h||d,ref:e,as:_,type:_?void 0:k,"data-active":Object(u.c)(m),"data-loading":Object(u.c)(d),__css:A,className:Object(u.b)("chakra-button",N)},I),O&&!d&&f.createElement(j,{mr:E,children:O}),d&&f.createElement(S,{__css:{fontSize:"1em",lineHeight:"normal"},spacing:E,label:C,children:x}),d?C||f.createElement(s.a.span,{opacity:0,children:b}):b,w&&!d&&f.createElement(j,{ml:E,children:w}))}));h.a&&(O.displayName="Button");var j=t=>{var{children:e,className:n}=t,a=y(t,["children","className"]),i=f.isValidElement(e)?f.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,r=Object(u.b)("chakra-button__icon",n);return f.createElement(s.a.span,v({},a,{className:r,children:i}))};h.a&&(j.displayName="ButtonIcon");var S=t=>{var{label:e,spacing:n,children:i=f.createElement(a.a,{color:"currentColor",width:"1em",height:"1em"}),className:r,__css:o}=t,l=y(t,["label","spacing","children","className","__css"]),c=Object(u.b)("chakra-button__spinner",r),h=v({display:"flex",alignItems:"center",position:e?"relative":"absolute",mr:e?n:0},o);return f.createElement(s.a.div,v({className:c},l,{__css:h,children:i}))};h.a&&(S.displayName="ButtonSpinner")},"6sSk":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("cuY2"),i=n.n(a),r=n("sKyC"),o=n("K9ah"),s=n("U6LL"),l=n("pr4h");function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var u=Object(r.a)((function(t,e){var{isOpen:n,animateOpacity:a=!0,onAnimationStart:r,onAnimationEnd:l,duration:u,easing:h="ease",startingHeight:f=0,endingHeight:d="auto"}=t,m=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["isOpen","animateOpacity","onAnimationStart","onAnimationEnd","duration","easing","startingHeight","endingHeight"]);return Object(o.a)(i.a,{duration:u,easing:h,animateOpacity:a,height:n?d:f,applyInlineTransitions:!1,onAnimationStart:r,onAnimationEnd:l,css:{transition:"height 0.2s ease,opacity 0.2s ease-in-out,transform 0.2s ease-in-out","&.rah-animating--to-height-zero":{opacity:0,transform:"translateY(-0.625rem)"}}},Object(o.a)(s.a.div,c({ref:e},m)))}));l.a&&(u.displayName="Collapse")},AFKX:function(t,e){},K9ah:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("KwD7"),i=n("qKvR"),r=n("0sYf");function o(t){if(!t)return null;var e={};for(var n in t)"sx"!==n&&(e[n]=t[n]);var i=function(t){if(t.sx||t.css)return e=>{var n=Object(r.css)(t.sx)(e);return[Object(a.c)(t.css,e),n]}}(t);return i&&(e.css=i),e}var s=function(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return i.c.apply(void 0,[t,o(e),...a])}},"M/Vb":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var a=n("qKvR"),i=n("sKyC"),r=n("4jWa"),o=n("CRla"),s=n("U6LL"),l=n("epLR"),c=n("pr4h"),u={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},h=Object(s.a)("span",{baseStyle:u});c.a&&(h.displayName="VisuallyHidden");var f=Object(s.a)("input",{baseStyle:u});c.a&&(f.displayName="VisuallyHiddenInput");var d=n("q1tI");function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var p=Object(a.d)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),g=Object(i.a)((function(t,e){var n=Object(r.b)("Spinner",t),a=Object(o.d)(t),{label:i="Loading...",thickness:c="2px",speed:u="0.45s",color:f,emptyColor:g="transparent",className:b}=a,y=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(a,["label","thickness","speed","color","emptyColor","className"]),v=Object(l.b)("chakra-spinner",b),O=m({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:c,borderBottomColor:g,borderLeftColor:g,color:f,animation:p+" "+u+" linear infinite"},n);return d.createElement(s.a.div,m({ref:e,__css:O,className:v},y),i&&d.createElement(h,null,i))}));c.a&&(g.displayName="Spinner")},MAJE:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var a=n("q1tI"),i=n("sKyC"),r=n("4jWa"),o=n("CRla"),s=n("U6LL"),l=n("epLR"),c=n("pr4h");function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var h=Object(i.a)((function(t,e){var n=Object(r.b)("Text",t),i=Object(o.d)(t),{align:c,decoration:h,casing:f}=i,d=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(i,["className","align","decoration","casing"]);return a.createElement(s.a.p,u({ref:e,className:Object(l.b)("chakra-text",t.className),textAlign:c,textDecoration:h,textTransform:f},d,{__css:n}))}));c.a&&(h.displayName="Text")},ODXe:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(l){i=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return i}))},TSYQ:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var r=typeof a;if("string"===r||"number"===r)t.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&t.push(o)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&t.push(s)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(a=function(){return i}.apply(e,[]))||(t.exports=a)}()},cuY2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=c(n("q1tI")),s=c(n("17x9")),l=c(n("TSYQ"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];if(!n.length)return t;for(var i={},r=Object.keys(t),o=0;o<r.length;o++){var s=r[o];-1===n.indexOf(s)&&(i[s]=t[s])}return i}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function p(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"===typeof t&&t.search("%")===t.length-1&&p(t.substr(0,t.length-1))}function b(t,e){t&&"function"===typeof t&&t(e)}var y=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var a="auto",r="visible";p(t.height)?(a=t.height<0||"0"===t.height?0:t.height,r="hidden"):g(t.height)&&(a="0%"===t.height?0:t.height,r="hidden"),n.animationStateClasses=i({},h,t.animationStateClasses);var o=n.getStaticStateClasses(a);return n.state={animationStateClasses:o,height:a,overflow:r,shouldUseTransitions:!1},n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n=this,a=this.props,i=a.delay,r=a.duration,o=a.height,s=a.onAnimationEnd,c=a.onAnimationStart;if(this.contentElement&&o!==t.height){var h;this.showContent(e.height),this.contentElement.style.overflow="hidden";var f=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var d=r+i,y=null,v={height:null,overflow:"hidden"},O="auto"===e.height;p(o)?(y=o<0||"0"===o?0:o,v.height=y):g(o)?(y="0%"===o?0:o,v.height=y):(y=f,v.height="auto",v.overflow=null),O&&(v.height=y,y=f);var j=(0,l.default)((u(h={},this.animationStateClasses.animating,!0),u(h,this.animationStateClasses.animatingUp,"auto"===t.height||o<t.height),u(h,this.animationStateClasses.animatingDown,"auto"===o||o>t.height),u(h,this.animationStateClasses.animatingToHeightZero,0===v.height),u(h,this.animationStateClasses.animatingToHeightAuto,"auto"===v.height),u(h,this.animationStateClasses.animatingToHeightSpecific,v.height>0),h)),S=this.getStaticStateClasses(v.height);this.setState({animationStateClasses:j,height:y,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(v.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=function(t){var e=[];return e[0]=requestAnimationFrame((function(){e[1]=requestAnimationFrame((function(){t()}))})),e}((function(){n.setState(v),b(c,{newHeight:v.height})})),this.animationClassesTimeoutID=setTimeout((function(){n.setState({animationStateClasses:S,shouldUseTransitions:!1}),n.hideContent(v.height),b(s,{newHeight:v.height})}),d)):(b(c,{newHeight:y}),this.timeoutID=setTimeout((function(){v.animationStateClasses=S,v.shouldUseTransitions=!1,n.setState(v),"auto"!==o&&n.hideContent(y),b(s,{newHeight:y})}),d))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((u(e={},this.animationStateClasses.static,!0),u(e,this.animationStateClasses.staticHeightZero,0===t),u(e,this.animationStateClasses.staticHeightSpecific,t>0),u(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,a=n.animateOpacity,r=n.applyInlineTransitions,s=n.children,c=n.className,h=n.contentClassName,m=n.delay,p=n.duration,g=n.easing,b=n.id,y=n.style,v=this.state,O=v.height,j=v.overflow,S=v.animationStateClasses,w=v.shouldUseTransitions,C=i({},y,{height:O,overflow:j||y.overflow});w&&r&&(C.transition="height "+p+"ms "+g+" "+m+"ms",y.transition&&(C.transition=y.transition+", "+C.transition),C.WebkitTransition=C.transition);var E={};a&&(E.transition="opacity "+p+"ms "+g+" "+m+"ms",E.WebkitTransition=E.transition,0===O&&(E.opacity=0));var k=(0,l.default)((u(t={},S,!0),u(t,c,c),t)),x="undefined"!==typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===O;return o.default.createElement("div",i({},d.apply(void 0,[this.props].concat(f)),{"aria-hidden":x,className:k,id:b,style:C}),o.default.createElement("div",{className:h,style:E,ref:function(t){return e.contentElement=t}},s))}}]),e}(o.default.Component);y.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var i=t[e];return"number"===typeof i&&i>=0||g(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"===typeof i?"undefined":a(i))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},y.defaultProps={animateOpacity:!1,animationStateClasses:h,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=y},hMXk:function(t,e,n){"use strict";var a=n("0sYf");n.o(a,"css")&&n.d(e,"css",(function(){return a.css}));n("qKvR");var i=n("AFKX");n.o(i,"css")&&n.d(e,"css",(function(){return i.css}))},rGDf:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var a=n("q1tI"),i=n("sKyC"),r=n("4jWa"),o=n("CRla"),s=n("U6LL"),l=n("epLR"),c=n("pr4h");function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var h=Object(i.a)((function(t,e){var n=Object(r.b)("Heading",t),i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(Object(o.d)(t),["className"]);return a.createElement(s.a.h2,u({ref:e,className:Object(l.b)("chakra-heading",t.className)},i,{__css:n}))}));c.a&&(h.displayName="Heading")},"vG+z":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("sKyC"),i=n("U6LL"),r=n("BXwj"),o=n("pr4h"),s=n("q1tI"),l=n("zlS4");function c(t){var{src:e,srcSet:n,onLoad:a,onError:i,crossOrigin:r,sizes:o,ignoreFallback:c}=t,[u,h]=Object(s.useState)(()=>e?"loading":"pending");Object(s.useEffect)(()=>{h(e?"loading":"pending")},[e]);var f=Object(s.useRef)(),d=Object(s.useCallback)(()=>{if(e){m();var t=new Image;t.src=e,r&&(t.crossOrigin=r),n&&(t.srcset=n),o&&(t.sizes=o),t.onload=t=>{m(),h("loaded"),null==a||a(t)},t.onerror=t=>{m(),h("failed"),null==i||i(t)},f.current=t}},[e,r,n,o,a,i]),m=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return Object(l.a)(()=>{if(!c)return"loading"===u&&d(),()=>{m()}},[u,d,c]),c?"loaded":u}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function h(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}var f=s.forwardRef((function(t,e){var{htmlWidth:n,htmlHeight:a}=t,i=h(t,["htmlWidth","htmlHeight"]);return s.createElement("img",u({width:n,height:a,ref:e},i))})),d=Object(a.a)((function(t,e){var{fallbackSrc:n,fallback:a,src:o,align:l,fit:d,loading:m,ignoreFallback:p,crossOrigin:g}=t,b=h(t,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),y=null!=m||p,v=c(u({},t,{ignoreFallback:y})),O=u({ref:e,objectFit:d,objectPosition:l},y?b:Object(r.d)(b,["onError","onLoad"]));return"loaded"!==v?a||s.createElement(i.a.img,u({as:f,className:"chakra-image__placeholder",src:n},O)):s.createElement(i.a.img,u({as:f,src:o,crossOrigin:g,loading:m,className:"chakra-image"},O))}));o.a&&(d.displayName="Image")},wZsY:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("U6LL"),i=n("sKyC"),r=n("hMXk"),o=n("x9W9"),s=n("JX03"),l=n("epLR"),c=n("pr4h"),u=n("q1tI");function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var f=t=>u.createElement(a.a.div,h({className:"chakra-stack__item",__css:{display:"inline-block",flex:0}},t)),d=Object(i.a)((function(t,e){var{isInline:n,direction:i=(n?"row":"column"),align:c,justify:d,spacing:m="0.5rem",wrap:p,children:g,divider:b,className:y,shouldWrapChildren:v}=t,O=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),j="& > *:not(style) ~ *:not(style)",S={column:{mt:m,ml:0},row:{ml:m,mt:0},"column-reverse":{mb:m,mr:0},"row-reverse":{mr:m,mb:0}},w={flexDirection:i,[j]:Object(o.b)(i,t=>S[t])},C=Object(o.b)(i,t=>t.includes("row")?{mx:m,my:0,borderLeftWidth:"1px",borderBottomWidth:0}:{mx:0,my:m,borderLeftWidth:0,borderBottomWidth:"1px"}),E=!!b,k=!v&&!E,x=Object(s.b)(g),N=k?x:x.map((t,e)=>{var n=e+1===x.length,a=v?u.createElement(f,{children:t}):t;if(!E)return a;var i=n?null:u.cloneElement(b,{css:Object(r.css)({"&":C})});return u.createElement(u.Fragment,{key:e},a,i)}),_=Object(l.b)("chakra-stack",y);return u.createElement(a.a.div,h({ref:e,display:"flex",alignItems:c,justifyContent:d,flexDirection:w.flexDirection,flexWrap:p,className:_,css:t=>{if(!E)return Object(r.css)({[j]:w[j]})(t)}},O),N)}));c.a&&(d.displayName="Stack");var m=Object(i.a)((t,e)=>u.createElement(d,h({align:"center"},t,{direction:"row",ref:e})));c.a&&(m.displayName="HStack");var p=Object(i.a)((t,e)=>u.createElement(d,h({align:"center"},t,{direction:"column",ref:e})));c.a&&(p.displayName="VStack")}}]);