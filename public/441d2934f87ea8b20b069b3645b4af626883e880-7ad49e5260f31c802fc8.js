"use strict";(self.webpackChunktotolog34=self.webpackChunktotolog34||[]).push([[892],{2734:function(e,t,n){n.d(t,{Z:function(){return s}});n(7294);var r=n(6682),o=n(247);function s(){return(0,r.Z)(o.Z)}},3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let o=0;o<e.length;o++){const s=e[o];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,r=n,n=!0,o++):n&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,o-1)+"-"+e.slice(o-1),r=n,n=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=n,n=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},3723:function(e,t,n){n.d(t,{G:function(){return L},L:function(){return f},M:function(){return S},P:function(){return C},S:function(){return _},_:function(){return i},a:function(){return a},b:function(){return u},c:function(){return l},g:function(){return d},h:function(){return c}});var r=n(7294),o=(n(3204),n(5697)),s=n.n(o);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(n=s[r])>=0||(o[n]=e[n]);return o}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const l=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n,r,o){return void 0===o&&(o={}),a({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:a({},o,{opacity:t?1:0})})}function d(e,t,n,r,o,s,i,c){const l={};s&&(l.backgroundColor=s,"fixed"===n?(l.width=r,l.height=o,l.backgroundColor=s,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),i&&(l.objectFit=i),c&&(l.objectPosition=c);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const p=["children"],m=function(e){let{layout:t,width:n,height:o}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+o+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,n=i(e,p);return r.createElement(r.Fragment,null,r.createElement(m,a({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:o,alt:s="",shouldLoad:c}=e,l=i(e,g);return r.createElement("img",a({},l,{decoding:"async",loading:o,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:o=!0}=e,s=i(e,h);const c=s.sizes||(null==t?void 0:t.sizes),l=r.createElement(y,a({},s,t,{sizes:c,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+n,type:s,media:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,sizes:c})})),l):l};var b;y.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},v.displayName="Picture",v.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const w=["fallback"],C=function(e){let{fallback:t}=e,n=i(e,w);return t?r.createElement(v,a({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",a({},n))};C.displayName="Placeholder",C.propTypes={fallback:o.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const S=function(e){return r.createElement(r.Fragment,null,r.createElement(v,a({},e)),r.createElement("noscript",null,r.createElement(v,a({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=v.propTypes;const x=function(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return e.alt||""===e.alt?s().string.apply(s(),[e,t,n].concat(o)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:s().object.isRequired,alt:x},Z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],M=["style","className"],O=new Set;let k,j;const N=function(e){let{as:t="div",image:o,style:s,backgroundColor:l,className:u,class:d,onStartLoad:p,onLoad:m,onError:f}=e,g=i(e,Z);const{width:h,height:y,layout:v}=o,b=function(e,t,n){const r={};let o="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}(h,y,v),{style:w,className:C}=b,S=i(b,M),x=(0,r.useRef)(),E=(0,r.useMemo)((()=>JSON.stringify(o.images)),[o.images]);d&&(u=d);const N=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,h,y);return(0,r.useEffect)((()=>{k||(k=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(E);if(j&&O.has(E))return;let t,r;return k.then((e=>{let{renderImageToString:n,swapPlaceholderImage:i}=e;x.current&&(x.current.innerHTML=n(a({isLoading:!0,isLoaded:O.has(E),image:o},g)),O.has(E)||(t=requestAnimationFrame((()=>{x.current&&(r=i(x.current,E,O,s,p,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[o]),(0,r.useLayoutEffect)((()=>{O.has(E)&&j&&(x.current.innerHTML=j(a({isLoading:O.has(E),isLoaded:O.has(E),image:o},g)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,r.createElement)(t,a({},S,{style:a({},w,s,{backgroundColor:l}),className:C+(u?" "+u:""),ref:x,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},L=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));L.propTypes=E,L.displayName="GatsbyImage";const I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),T={src:s().string.isRequired,alt:x,width:R,height:R,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},_=(P=L,function(e){let{src:t,__imageData:n,__error:o}=e,s=i(e,I);return o&&console.warn(o),n?r.createElement(P,a({image:n},s)):(console.warn("Image not loaded",t),null)});var P;_.displayName="StaticImage",_.propTypes=T},2380:function(e,t,n){n.d(t,{Z:function(){return Se}});var r=n(7294),o=n(4854),s=n(3723),a=n(7462),i=n(3366),c=n(6010),l=n(4780),u=n(948),d=n(1657),p=n(4680),m=n(1588),f=n(4867);function g(e){return(0,f.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var h=n(5893);const y=["className","raised"],v=(0,u.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var b=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCard"}),{className:r,raised:o=!1}=n,s=(0,i.Z)(n,y),u=(0,a.Z)({},n,{raised:o}),p=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},g,t)})(u);return(0,h.jsx)(v,(0,a.Z)({className:(0,c.Z)(p.root,r),elevation:o?8:void 0,ref:t,ownerState:u},s))})),w=n(3264),C=n(2734);const S=Object.fromEntries?Object.fromEntries:e=>{if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");const t={};return Object.keys(e).forEach((n=>{const[r,o]=e[n];t[r]=o})),t};function x(e){return Object.keys(e)}function E(e,t){if(!e)throw new Error(t)}function Z(e,t){return t}const M=e=>{const t=e.length;let n=0,r="";for(;n<t;n++){const t=e[n];if(null==t)continue;let o;switch(typeof t){case"boolean":break;case"object":if(Array.isArray(t))o=M(t);else{E(!Z(0,!1)),o="";for(const e in t)t[e]&&e&&(o&&(o+=" "),o+=e)}break;default:o=t}o&&(r&&(r+=" "),r+=o)}return r};var O=n(9729),k=n(444);const{createCssAndCx:j}={createCssAndCx:function(e){const{cache:t}=e,n=(...e)=>{const n=(0,O.O)(e,t.registered);(0,k.My)(t,n,!1);const r=`${t.key}-${n.name}`;{const n=e[0];(function(e){return e instanceof Object&&!("styles"in e)&&!("length"in e)&&!("__emotion_styles"in e)})(n)&&L.saveClassNameCSSObjectMapping(t,r,n)}return r};return{css:n,cx:(...e)=>{const r=M(e),o=L.fixClassName(t,r,n);return function(e,t,n){const r=[],o=(0,k.fp)(e,r,n);return r.length<2?n:o+t(r)}(t.registered,n,o)}}}};function N(e){const{useCache:t}=e;return{useCssAndCx:function(){const e=t(),{css:n,cx:o}=function(e,t){const n=(0,r.useRef)();return(!n.current||t.length!==n.current.prevDeps.length||n.current.prevDeps.map(((e,n)=>e===t[n])).indexOf(!1)>=0)&&(n.current={v:e(),prevDeps:[...t]}),n.current.v}((()=>j({cache:e})),[e]);return{css:n,cx:o}}}}const L=(()=>{const e=new WeakMap;return{saveClassNameCSSObjectMapping:(t,n,r)=>{let o=e.get(t);void 0===o&&(o=new Map,e.set(t,o)),o.set(n,r)},fixClassName:(t,n,r)=>{const o=e.get(t);return M(function(e){let t=!1;return e.map((([e,n])=>{if(void 0===n)return e;let r;if(t)r={"&&":n};else{r=e;for(const e in n)if(e.startsWith("@media")){t=!0;break}}return r}))}(n.split(" ").map((e=>[e,null==o?void 0:o.get(e)]))).map((e=>"string"==typeof e?e:r(e))))}}})();function I(e){if(!(e instanceof Object)||"function"==typeof e)return e;const t=[];for(const n in e){const r=e[n],o=typeof r;if("string"!==o&&("number"!==o||isNaN(r))&&"boolean"!==o&&null!=r)return e;t.push(`${n}:${o}_${r}`)}return"xSqLiJdLMd9s"+t.join("|")}function R(e,t,n){if(!(t instanceof Object))return e;const r={};return x(e).forEach((o=>r[o]=n(e[o],t[o]))),x(t).forEach((n=>{if(n in e)return;const o=t[n];"string"==typeof o&&(r[n]=o)})),r}var A=n(2443);let T=0;function _(e){const{useTheme:t,cache:n}=e;function o(){var e;const t=(0,A._)(),o=(0,r.useContext)(P),s=null!==(e=null!=n?n:o)&&void 0!==e?e:t;if(null===s)throw new Error(["In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.","MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,","MUI needs an Emotion cache to be provided for SSR to work.","Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/","TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"].join("\n"));return s}const{useCssAndCx:s}=N({useCache:o});return{makeStyles:function(e){const{name:n,uniqId:a=T++}=null!=e?e:{},i="object"!=typeof n?n:Object.keys(n)[0];return function(e){const n="function"==typeof e?e:()=>e;return function(e,c){var l,u;const d=t(),{css:p,cx:m}=s(),f=o();let g=(0,r.useMemo)((()=>{const t={},r="undefined"!=typeof Proxy&&new Proxy({},{get:(e,n)=>("symbol"==typeof n&&E(!1),t[n]=`${f.key}-${a}${void 0!==i?`-${i}`:""}-${n}-ref`)}),o=n(d,e,r||{}),s=S(x(o).map((e=>{const n=o[e];return n.label||(n.label=`${void 0!==i?`${i}-`:""}${e}`),[e,`${p(n)}${Z(0,e in t)?` ${t[e]}`:""}`]})));return x(t).forEach((e=>{e in s||(s[e]=t[e])})),s}),[f,p,m,d,I(e)]);const h=null==c?void 0:c.props.classes;g=(0,r.useMemo)((()=>R(g,h,m)),[g,I(h),m]);{let e;try{e=void 0!==i?null===(u=null===(l=d.components)||void 0===l?void 0:l[i])||void 0===u?void 0:u.styleOverrides:void 0}catch(y){}const t=(0,r.useMemo)((()=>{if(!e)return;const t={};for(const n in e){const r=e[n];r instanceof Object&&(t[n]=p("function"==typeof r?r(Object.assign({theme:d,ownerState:null==c?void 0:c.ownerState},null==c?void 0:c.props)):r))}return t}),[void 0===e?void 0:JSON.stringify(e),I(null==c?void 0:c.props),I(null==c?void 0:c.ownerState),p]);g=(0,r.useMemo)((()=>R(g,t,m)),[g,t,m])}return{classes:g,theme:d,css:p,cx:m}}}},useStyles:function(){const e=t(),{css:n,cx:r}=s();return{theme:e,css:n,cx:r}}}}const P=(0,r.createContext)(void 0);function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}var z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function q(e){const t={},n={};return Object.keys(e).forEach((r=>(r.startsWith("@media")?n:t)[r]=e[r])),Object.keys(n).forEach((e=>{const r=n[e];Object.keys(r).forEach((n=>{var o;return t[n]=Object.assign(Object.assign({},null!==(o=t[n])&&void 0!==o?o:{}),{[e]:r[n]})}))})),t}const{makeStyles:H,withStyles:W,useStyles:U}=(D={useTheme:C.Z},Object.assign(Object.assign({},_(D)),function(e){const{useTheme:t,cache:n}=e,{makeStyles:o}=_({useTheme:t,cache:n});return{withStyles:function(e,t,n){const s="string"==typeof e?(()=>{const t=e,n=function(e){var{children:n}=e,o=z(e,["children"]);return(0,r.createElement)(t,o,n)};return Object.defineProperty(n,"name",{value:$(t)}),n})():e,a=(()=>{{const{name:e}=null!=n?n:{};if(void 0!==e)return"object"!=typeof e?e:Object.keys(e)[0]}{const e=s.displayName;if("string"==typeof e&&""!==e)return e}{const{name:e}=s;if(e)return e}})(),i=o(Object.assign(Object.assign({},n),{name:a}))("function"==typeof t?(e,n,r)=>q(t(e,n,r)):q(t));function c(e){for(const t in e)if("root"!==t)return!0;return!1}const l=(0,r.forwardRef)((function(t,n){const{className:o,classes:a}=t,l=z(t,["className","classes"]),{classes:u,cx:d}=i(t,{props:t});return r.createElement(s,Object.assign({ref:n,className:c(u)?o:d(u.root,o)},"string"==typeof e?{}:{classes:u},l))}));return void 0!==a&&(l.displayName=`${$(a)}WithStyles`,Object.defineProperty(l,"name",{value:l.displayName})),l}}}(D)));var D,V=n(2781);function F(e){return(0,f.Z)("MuiCardActions",e)}(0,m.Z)("MuiCardActions",["root","spacing"]);const B=["disableSpacing","className"],G=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,a.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var J=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:o}=n,s=(0,i.Z)(n,B),u=(0,a.Z)({},n,{disableSpacing:r}),p=(e=>{const{classes:t,disableSpacing:n}=e,r={root:["root",!n&&"spacing"]};return(0,l.Z)(r,F,t)})(u);return(0,h.jsx)(G,(0,a.Z)({className:(0,c.Z)(p.root,o),ownerState:u,ref:t},s))}));function Q(e){return(0,f.Z)("MuiCardActionArea",e)}var K=(0,m.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),X=n(3810);const Y=["children","className","focusVisibleClassName"],ee=(0,u.ZP)(X.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${K.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${K.focusVisible} .${K.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),te=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})));var ne=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardActionArea"}),{children:r,className:o,focusVisibleClassName:s}=n,u=(0,i.Z)(n,Y),p=n,m=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],focusHighlight:["focusHighlight"]},Q,t)})(p);return(0,h.jsxs)(ee,(0,a.Z)({className:(0,c.Z)(m.root,o),focusVisibleClassName:(0,c.Z)(s,m.focusVisible),ref:t,ownerState:p},u,{children:[r,(0,h.jsx)(te,{className:m.focusHighlight,ownerState:p})]}))}));function re(e){return(0,f.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);const oe=["className","component"],se=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var ae=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:r,component:o="div"}=n,s=(0,i.Z)(n,oe),u=(0,a.Z)({},n,{component:o}),p=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},re,t)})(u);return(0,h.jsx)(se,(0,a.Z)({as:o,className:(0,c.Z)(p.root,r),ownerState:u,ref:t},s))}));function ie(e){return(0,f.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);const ce=["children","className","component","image","src","style"],le=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:r,isImageComponent:o}=n;return[t.root,r&&t.media,o&&t.img]}})((({ownerState:e})=>(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),ue=["video","audio","picture","iframe","img"],de=["picture","img"];var pe=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:o,component:s="div",image:u,src:p,style:m}=n,f=(0,i.Z)(n,ce),g=-1!==ue.indexOf(s),y=!g&&u?(0,a.Z)({backgroundImage:`url("${u}")`},m):m,v=(0,a.Z)({},n,{component:s,isMediaComponent:g,isImageComponent:-1!==de.indexOf(s)}),b=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:r}=e,o={root:["root",n&&"media",r&&"img"]};return(0,l.Z)(o,ie,t)})(v);return(0,h.jsx)(le,(0,a.Z)({className:(0,c.Z)(b.root,o),as:s,role:!g&&u?"img":void 0,ref:t,style:y,ownerState:v,src:g?u||p:void 0},f,{children:r}))})),me=n(6914),fe=n(2658),ge=n(8117),he=n(9355);const ye=(0,ge.default)(b).withConfig({displayName:"card__StyledGrid",componentId:"sc-9zc3sd-0"})(["display:grid;grid-template-columns:1fr;@supports not (grid-template-rows:subgrid){grid-template-rows:4fr 1fr;}@supports (grid-template-rows:subgrid){grid-template-rows:subgrid;grid-row:2 span;}gap:0;"]),ve=(0,ge.default)("ul").withConfig({displayName:"card__StyledList",componentId:"sc-9zc3sd-1"})(["display:flex;justify-content:center;align-items:center;list-style:none;padding:0;gap:0.5rem;flex-wrap:wrap;margin:0 0.5rem 1rem;"]),be=(0,ge.default)(o.rU).withConfig({displayName:"card__StyledLink",componentId:"sc-9zc3sd-2"})(["text-decoration:none;color:#000;"]),we=(0,w.Z)(s.G)((e=>{let{theme:t}=e;return{"&.gatsby-image-wrapper":{height:"100%",display:"grid",placeItems:"center","& img":{paddingBlock:"0.5rem",objectFit:"contain !important",[t.breakpoints.up("sm")]:{paddingBlock:"1rem"}}}}})),Ce=(0,ge.default)(fe.Z).withConfig({displayName:"card__StyledTitle",componentId:"sc-9zc3sd-3"})(["display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;"]),Se=e=>{var t,n;let{post:o,defaultImage:a}=e;const{css:i}=U();return r.createElement(ye,{classes:{root:i({border:"1px solid #000",borderRadius:8,boxShadow:"none"})}},r.createElement(ne,Object.assign({href:o.frontmatter.slug},(0,V.d)()?{disableRipple:!0}:{},{sx:{p:"1rem",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:{xs:"2fr 1fr",sm:"3fr 1fr"}}}),r.createElement(pe,{sx:{height:"100%"}},r.createElement(we,{image:(0,s.c)(null!==(t=o.frontmatter.thumbnail)&&void 0!==t?t:a),alt:""})),r.createElement(ae,{sx:{p:0}},r.createElement(Ce,{sx:{fontSize:{xs:"1rem",sm:"1.25rem"},fontWeight:"700"}},o.frontmatter.title))),r.createElement(J,{sx:{justifyContent:"center"}},r.createElement(ve,null,null===(n=o.frontmatter.tags)||void 0===n?void 0:n.map((e=>r.createElement("li",{key:e},r.createElement(me.Z,{size:"small",variant:"contained",sx:{fontSize:{xs:"0.875rem",sm:"1rem"}}},r.createElement(be,{to:"/tags/"+(0,he.b)(e)+"/"},r.createElement("span",null,e)))))))))}},2781:function(e,t,n){n.d(t,{d:function(){return p}});var r=n(7294),o=n.t(r,2),s=n(4168),a=n(539),i=n(6600).Z;function c(e,t,n,o,s){const a="undefined"!=typeof window&&void 0!==window.matchMedia,[c,l]=r.useState((()=>s&&a?n(e).matches:o?o(e).matches:t));return i((()=>{let t=!0;if(!a)return;const r=n(e),o=()=>{t&&l(r.matches)};return o(),r.addListener(o),()=>{t=!1,r.removeListener(o)}}),[e,n,a]),c}const l=o.useSyncExternalStore;function u(e,t,n,o){const s=r.useCallback((()=>t),[t]),a=r.useMemo((()=>{if(null!==o){const{matches:t}=o(e);return()=>t}return s}),[s,e,o]),[i,c]=r.useMemo((()=>{if(null===n)return[s,()=>()=>{}];const t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[s,n,e]);return l(c,i,a)}var d=n(2734);function p(){return function(e,t={}){const n=(0,s.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:o=!1,matchMedia:i=(r?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:p}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:n});let m="function"==typeof e?e(n):e;return m=m.replace(/^@media( ?)/m,""),(void 0!==l?u:c)(m,o,i,d,p)}((0,d.Z)().breakpoints.down("sm"))}}}]);
//# sourceMappingURL=441d2934f87ea8b20b069b3645b4af626883e880-7ad49e5260f31c802fc8.js.map