_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{AFL8:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pengumuman",function(){return t("mN36")}])},mN36:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),i=t("v7Hm"),l=t("+p43"),s=t("rGDf"),c=t("ZMKu"),o=t("ODXe"),d=t("3L07"),u=t("U6LL"),b=t("pr4h"),v=Object(u.a)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});b.a&&(v.displayName="Center");var p=t("t6h6");function f(e){void 0===e&&(e=!1);var[a,t]=Object(n.useState)(e);return[a,{on:Object(n.useCallback)(()=>{t(!0)},[]),off:Object(n.useCallback)(()=>{t(!1)},[]),toggle:Object(n.useCallback)(()=>{t(e=>!e)},[])}]}var m=t("zlS4"),h=t("oSKe"),O=t("sKyC"),j=t("4jWa"),y=t("CRla"),g=t("5+Am"),k=t("JX03"),_=t("epLR");function x(){return(x=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function N(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}var[w,I]=Object(k.a)({strict:!1,name:"FormControlContext"});var E=Object(O.a)((function(e,a){var t=Object(j.a)("Form",e),r=function(e){var{id:a,isRequired:t,isInvalid:n,isDisabled:r,isLoading:i,isReadOnly:l}=e,s=N(e,["id","isRequired","isInvalid","isDisabled","isLoading","isReadOnly"]),c=Object(p.a)(),o=a||"field-"+c,d=o+"-label",u=o+"-feedback",b=o+"-helptext",[v,m]=f(),[h,O]=f();return{isRequired:!!t,isInvalid:!!n,isLoading:!!i,isReadOnly:!!l,isDisabled:!!r,isFocused:!!h,onFocus:O.on,onBlur:O.off,hasHelpText:v,setHasHelpText:m,id:o,labelId:d,feedbackId:u,helpTextId:b,htmlProps:s}}(Object(y.d)(e)),{htmlProps:i}=r,l=N(r,["htmlProps"]),s=Object(_.b)("chakra-form-control",e.className);return n.createElement(w,{value:l},n.createElement(g.b,{value:t},n.createElement(u.a.div,x({role:"group",ref:a},i,{className:s,__css:{width:"100%",position:"relative"}}))))}));b.a&&(E.displayName="FormControl");var R=Object(O.a)((function(e,a){var t=Object(j.b)("FormLabel",e),r=Object(y.d)(e),{children:i}=r,l=function(e){var a,t,n=I();return T({},e,{"data-focus":Object(_.c)(null==n?void 0:n.isFocused),"data-disabled":Object(_.c)(null==n?void 0:n.isDisabled),"data-invalid":Object(_.c)(null==n?void 0:n.isInvalid),"data-loading":Object(_.c)(null==n?void 0:n.isLoading),"data-readonly":Object(_.c)(null==n?void 0:n.isReadOnly),id:null!=(a=e.id)?a:null==n?void 0:n.labelId,htmlFor:null!=(t=e.htmlFor)?t:null==n?void 0:n.id})}(N(r,["className","children"])),s=I();return n.createElement(u.a.label,x({ref:a,className:Object(_.b)("chakra-form__label",e.className),__css:x({display:"block",textAlign:"left"},t)},l),i,(null==s?void 0:s.isRequired)&&n.createElement(C,null))}));b.a&&(R.displayName="FormLabel");var C=Object(O.a)((function(e,a){var t=I(),r=Object(g.d)();if(!(null==t?void 0:t.isRequired))return null;var i=Object(_.b)("chakra-form__required-indicator",e.className);return n.createElement(u.a.span,x({role:"presentation","aria-hidden":!0,ref:a},e,{__css:r.requiredIndicator,className:i,children:e.children||"*"}))}));b.a&&(C.displayName="RequiredIndicator");var L=Object(O.a)((function(e,a){var t,r=I(),i=Object(g.d)();Object(m.a)(()=>(null==r||r.setHasHelpText.on(),()=>null==r?void 0:r.setHasHelpText.off()),[]);var l=Object(_.b)("chakra-form__helper-text",e.className);return n.createElement(u.a.div,x({ref:a,__css:i.helperText},e,{className:l,id:null!=(t=e.id)?t:null==r?void 0:r.helpTextId}))}));b.a&&(L.displayName="FormHelperText");var q=Object(O.a)((function(e,a){var t,r=Object(g.d)(),i=I();if(!(null==i?void 0:i.isInvalid))return null;var l=Object(_.b)("chakra-form__error-message",e.className);return n.createElement(u.a.div,x({"aria-live":"polite",ref:a},e,{__css:x({display:"flex",alignItems:"center"},r.errorText),className:l,id:null!=(t=e.id)?t:null==i?void 0:i.feedbackId}))}));b.a&&(q.displayName="FormErrorMessage");var F=Object(O.a)((function(e,a){var t=Object(g.d)(),r=I();if(!(null==r?void 0:r.isInvalid))return null;var i=Object(_.b)("chakra-form__error-icon",e.className);return n.createElement(h.a,x({ref:a,"aria-hidden":!0},e,{__css:t.errorIcon,className:i}),n.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));b.a&&(F.displayName="FormErrorIcon");var S=t("BXwj"),D=t("KwD7");function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function H(){return(H=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var A=Object(O.a)((function(e,a){var t=Object(j.a)("Input",e),r=function(e){var a,t=I(),n=[];(null==t?void 0:t.isInvalid)&&(n.length>0?n.unshift(t.feedbackId):n.push(t.feedbackId)),(null==t?void 0:t.hasHelpText)&&n.push(t.helpTextId);var r=n.join(" ");return T({},Object(S.d)(e,["isInvalid","isDisabled","isReadOnly","isRequired"]),{id:null!=(a=e.id)?a:null==t?void 0:t.id,disabled:e.disabled||e.isDisabled||(null==t?void 0:t.isDisabled),readOnly:e.readOnly||e.isReadOnly||(null==t?void 0:t.isReadOnly),required:e.required||e.isRequired||(null==t?void 0:t.isRequired),"aria-invalid":Object(_.a)(e.isInvalid||(null==t?void 0:t.isInvalid)),"aria-required":Object(_.a)(e.isRequired||(null==t?void 0:t.isRequired)),"aria-readonly":Object(_.a)(e.isReadOnly||(null==t?void 0:t.isReadOnly)),"aria-describedby":r||void 0,onFocus:Object(D.a)(null==t?void 0:t.onFocus,e.onFocus),onBlur:Object(D.a)(null==t?void 0:t.onBlur,e.onBlur)})}(Object(y.d)(e)),i=Object(_.b)("chakra-input",e.className);return n.createElement(u.a.input,H({},r,{__css:t.field,ref:a,className:i}))}));b.a&&(A.displayName="Input"),A.id="Input";var M=t("6sSk"),P=t("wZsY"),J=t("MAJE"),B=t("zHD3"),K=t("vG+z"),z=r.a.createElement;var X=function(){var e=r.a.useState(""),a=Object(o.a)(e,2),t=a[0],n=a[1],l=r.a.useState(""),s=Object(o.a)(l,2),u=s[0],b=s[1],p=r.a.useState("/pengumuman/"),f=Object(o.a)(p,2),m=f[0],h=f[1],O=r.a.useState(!1),j=Object(o.a)(O,2),y=j[0],g=j[1],k=r.a.useState({show:!1,pesan:"Jangan dipencet"}),_=Object(o.a)(k,2),x=_[0],N=_[1],w=function(e,a){var t=r.a.useState(e),n=Object(o.a)(t,2),i=n[0],l=n[1];return r.a.useEffect((function(){var e=window.localStorage.getItem(a);null!==e&&l(JSON.parse(e))}),[a]),r.a.useEffect((function(){window.localStorage.setItem(a,JSON.stringify(i))}),[a,i]),[i,l]}(!1,"jawabBener"),I=Object(o.a)(w,2),E=(I[0],I[1]),R=c.b.custom(d.a);return z(i.a,{mx:"auto",h:"80vh"},z(v,{mt:{default:"40%",md:"30%",lg:"15%"}},z(i.a,{w:"sm"},z(A,{value:t,onChange:function(e){var a=e.target.value;n(a),h("/siapayaa?nim=".concat(a))},variant:"flushed",placeholder:"Masukkan NIM"}),z(A,{value:u,onChange:function(e){var a=e.target.value;b(a),"raisa"==a.toLowerCase()?(g(!0),E(!0)):g(!1)},variant:"flushed",placeholder:"Masukkan Password (from OA Line)"}),z(M.a,{mt:4,isOpen:y},z(P.a,{direction:"row",justifyContent:"center",my:"2"},z(d.a,{hidden:x.show,as:"a",href:m},"Pencet"),z(R,{whileHover:{opacity:.2,y:50},onClick:function(){return N({show:!0,pesan:"\ud83d\ude06 Kan dah dibilangin jan dipencet \ud83d\ude1c"})}},x.pesan))),z(J.a,{fontSize:"sm"},"*jika terdapat masalah dapat DM ke ig"," ",z(B.a,{href:"https://instagram.com/ailabtelkom"},"@ailabtelkom")))),z(K.a,{width:{base:"100px",md:"150px",lg:"200px"},position:"absolute",top:"160px",right:0,src:"https://cdn130.picsart.com/260832909030212.png?type=webp&to=min&r=640",alt:"check it check it"}),z(K.a,{width:{base:"100px",md:"150px",lg:"200px"},position:"absolute",top:"160px",left:{base:"0",md:"-20px"},src:"http://assets.stickpng.com/images/5ee7713799588c0004aa6848.png",alt:"lets check it out"}))},Z=r.a.createElement;a.default=function(){var e=c.b.custom(i.a);Object(l.c)("white","gray.700");return Z(e,{initial:"start",animate:"end",variants:{start:{y:20,opacity:0,transition:{staggerChildren:.25}},end:{y:0,opacity:1,transition:{staggerChildren:.25}},exit:{opacity:0,transition:{duration:.1}}},maxW:[null,null,"2xl","5xl"],m:"auto",py:"50px",textAlign:"center",position:"relative"},Z(s.a,null,"Silahkan Mengisi Data Dibawah Terlebih Dahulu"),Z(X,null))}},zHD3:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("sKyC"),r=t("4jWa"),i=t("CRla"),l=t("U6LL"),s=t("q1tI"),c=t("epLR"),o=t("pr4h");function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=Object(n.a)((e,a)=>{var t=Object(r.b)("Link",e),n=Object(i.d)(e),{className:o,isExternal:u}=n,b=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(n,["className","isExternal"]);return s.createElement(l.a.a,d({target:u?"_blank":void 0,rel:u?"noopener noreferrer":void 0,ref:a,className:Object(c.b)("chakra-link",o)},b,{__css:t}))});o.a&&(u.displayName="Link")}},[["AFL8",0,1,3,2,4,10,12]]]);