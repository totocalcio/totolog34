"use strict";(self.webpackChunktotolog34=self.webpackChunktotolog34||[]).push([[149],{7373:function(e,t,a){a.r(t),a.d(t,{default:function(){return oe}});var o=a(7294),r=a.t(o,2),n=a(2380),i=a(8814),l=a(4854),s=a(7462),c=a(3366),d=a(6010),u=a(4780),p=a(1657),m=a(1588),v=a(4867);function g(e){return(0,v.Z)("MuiPagination",e)}(0,m.Z)("MuiPagination",["root","ul","outlined","text"]);const h=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function f(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:r=1,defaultPage:n=1,disabled:i=!1,hideNextButton:l=!1,hidePrevButton:d=!1,onChange:u,page:p,showFirstButton:m=!1,showLastButton:v=!1,siblingCount:g=1}=e,f=(0,c.Z)(e,h),[x,b]=function({controlled:e,default:t,name:a,state:r="value"}){const{current:n}=o.useRef(void 0!==e),[i,l]=o.useState(t);return[n?e:i,o.useCallback((e=>{n||l(e)}),[])]}({controlled:p,default:n,name:a,state:"page"}),y=(e,t)=>{p||b(t),u&&u(e,t)},Z=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},S=Z(1,Math.min(t,r)),w=Z(Math.max(r-t+1,t+1),r),z=Math.max(Math.min(x-g,r-t-2*g-1),t+2),C=Math.min(Math.max(x+g,t+2*g+2),w.length>0?w[0]-2:r-1),M=[...m?["first"]:[],...d?[]:["previous"],...S,...z>t+2?["start-ellipsis"]:t+1<r-t?[t+1]:[],...Z(z,C),...C<r-t-1?["end-ellipsis"]:r-t>t?[r-t]:[],...w,...l?[]:["next"],...v?["last"]:[]],$=e=>{switch(e){case"first":return 1;case"previous":return x-1;case"next":return x+1;case"last":return r;default:return null}},k=M.map((e=>"number"==typeof e?{onClick:t=>{y(t,e)},type:"page",page:e,selected:e===x,disabled:i,"aria-current":e===x?"true":void 0}:{onClick:t=>{y(t,$(e))},type:e,page:$(e),selected:!1,disabled:i||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?x>=r:x<=1)}));return(0,s.Z)({items:k},f)}var x=a(1796);function b(e){return(0,v.Z)("MuiPaginationItem",e)}var y=(0,m.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),Z=a(2734),S=a(3810),w=a(8216),z=a(948);function C(e){return(0,v.Z)("MuiSvgIcon",e)}(0,m.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var M=a(5893);const $=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],k=(0,z.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"inherit"!==a.color&&t[`color${(0,w.Z)(a.color)}`],t[`fontSize${(0,w.Z)(a.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var a,o,r,n,i,l,s,c,d,u,p,m,v,g,h,f,x;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(a=e.transitions)||null==(o=a.create)?void 0:o.call(a,"fill",{duration:null==(r=e.transitions)||null==(n=r.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(i=e.typography)||null==(l=i.pxToRem)?void 0:l.call(i,20))||"1.25rem",medium:(null==(s=e.typography)||null==(c=s.pxToRem)?void 0:c.call(s,24))||"1.5rem",large:(null==(d=e.typography)||null==(u=d.pxToRem)?void 0:u.call(d,35))||"2.1875rem"}[t.fontSize],color:null!=(p=null==(m=(e.vars||e).palette)||null==(v=m[t.color])?void 0:v.main)?p:{action:null==(g=(e.vars||e).palette)||null==(h=g.action)?void 0:h.active,disabled:null==(f=(e.vars||e).palette)||null==(x=f.action)?void 0:x.disabled,inherit:void 0}[t.color]}})),P=o.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiSvgIcon"}),{children:o,className:r,color:n="inherit",component:i="svg",fontSize:l="medium",htmlColor:m,inheritViewBox:v=!1,titleAccess:g,viewBox:h="0 0 24 24"}=a,f=(0,c.Z)(a,$),x=(0,s.Z)({},a,{color:n,component:i,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:v,viewBox:h}),b={};v||(b.viewBox=h);const y=(e=>{const{color:t,fontSize:a,classes:o}=e,r={root:["root","inherit"!==t&&`color${(0,w.Z)(t)}`,`fontSize${(0,w.Z)(a)}`]};return(0,u.Z)(r,C,o)})(x);return(0,M.jsxs)(k,(0,s.Z)({as:i,className:(0,d.Z)(y.root,r),focusable:"false",color:m,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},b,f,{ownerState:x,children:[o,g?(0,M.jsx)("title",{children:g}):null]}))}));P.muiName="SvgIcon";var R=P;function B(e,t){function a(a,o){return(0,M.jsx)(R,(0,s.Z)({"data-testid":`${t}Icon`,ref:o},a,{children:e}))}return a.muiName=R.muiName,o.memo(o.forwardRef(a))}var L=B((0,M.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),N=B((0,M.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),I=B((0,M.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),O=B((0,M.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");const j=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],E=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,w.Z)(a.size)}`],"text"===a.variant&&t[`text${(0,w.Z)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,w.Z)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},A=(0,z.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:E})((({theme:e,ownerState:t})=>(0,s.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${y.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}))),F=(0,z.ZP)(S.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:E})((({theme:e,ownerState:t})=>(0,s.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${y.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,x.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,x.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${y.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:(e.vars||e).shape.borderRadius})),(({theme:e,ownerState:t})=>(0,s.Z)({},"text"===t.variant&&{[`&.${y.selected}`]:(0,s.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${y.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},"outlined"===t.variant&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${y.selected}`]:(0,s.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,x.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,x.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,x.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,x.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${y.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})}))),T=(0,z.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((({theme:e,ownerState:t})=>(0,s.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)})));var W=o.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiPaginationItem"}),{className:o,color:r="standard",component:n,components:i={},disabled:l=!1,page:m,selected:v=!1,shape:g="circular",size:h="medium",slots:f={},type:x="page",variant:y="text"}=a,S=(0,c.Z)(a,j),z=(0,s.Z)({},a,{color:r,disabled:l,selected:v,shape:g,size:h,type:x,variant:y}),C=(0,Z.Z)(),$=(e=>{const{classes:t,color:a,disabled:o,selected:r,size:n,shape:i,type:l,variant:s}=e,c={root:["root",`size${(0,w.Z)(n)}`,s,i,"standard"!==a&&`${s}${(0,w.Z)(a)}`,o&&"disabled",r&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return(0,u.Z)(c,b,t)})(z),k=("rtl"===C.direction?{previous:f.next||i.next||O,next:f.previous||i.previous||I,last:f.first||i.first||L,first:f.last||i.last||N}:{previous:f.previous||i.previous||I,next:f.next||i.next||O,first:f.first||i.first||L,last:f.last||i.last||N})[x];return"start-ellipsis"===x||"end-ellipsis"===x?(0,M.jsx)(A,{ref:t,ownerState:z,className:(0,d.Z)($.root,o),children:"…"}):(0,M.jsxs)(F,(0,s.Z)({ref:t,ownerState:z,component:n,disabled:l,className:(0,d.Z)($.root,o)},S,{children:["page"===x&&m,k?(0,M.jsx)(T,{as:k,ownerState:z,className:$.icon}):null]}))}));const V=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],q=(0,z.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),U=(0,z.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function H(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}var G=o.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiPagination"}),{boundaryCount:o=1,className:r,color:n="standard",count:i=1,defaultPage:l=1,disabled:m=!1,getItemAriaLabel:v=H,hideNextButton:h=!1,hidePrevButton:x=!1,renderItem:b=(e=>(0,M.jsx)(W,(0,s.Z)({},e))),shape:y="circular",showFirstButton:Z=!1,showLastButton:S=!1,siblingCount:w=1,size:z="medium",variant:C="text"}=a,$=(0,c.Z)(a,V),{items:k}=f((0,s.Z)({},a,{componentName:"Pagination"})),P=(0,s.Z)({},a,{boundaryCount:o,color:n,count:i,defaultPage:l,disabled:m,getItemAriaLabel:v,hideNextButton:h,hidePrevButton:x,renderItem:b,shape:y,showFirstButton:Z,showLastButton:S,siblingCount:w,size:z,variant:C}),R=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],ul:["ul"]};return(0,u.Z)(o,g,t)})(P);return(0,M.jsx)(q,(0,s.Z)({"aria-label":"pagination navigation",className:(0,d.Z)(R.root,r),ownerState:P,ref:t},$,{children:(0,M.jsx)(U,{className:R.ul,ownerState:P,children:k.map(((e,t)=>(0,M.jsx)("li",{children:b((0,s.Z)({},e,{color:n,"aria-label":v(e.type,e.page,e.selected),shape:y,size:z,variant:C}))},t)))})}))}));const Q=e=>{let{currentPage:t,pageSum:a}=e;return o.createElement(G,{count:a,page:t,sx:{display:"flex",justifyContent:"center",mb:"1.5rem"},renderItem:e=>o.createElement(W,Object.assign({component:l.rU,to:1===e.page?"/":"/posts/"+e.page},e))})};var D=a(4001),J=a(4168),K=a(539),X=a(6600).Z;function Y(e,t,a,r,n){const i="undefined"!=typeof window&&void 0!==window.matchMedia,[l,s]=o.useState((()=>n&&i?a(e).matches:r?r(e).matches:t));return X((()=>{let t=!0;if(!i)return;const o=a(e),r=()=>{t&&s(o.matches)};return r(),o.addListener(r),()=>{t=!1,o.removeListener(r)}}),[e,a,i]),l}const _=r.useSyncExternalStore;function ee(e,t,a,r){const n=o.useCallback((()=>t),[t]),i=o.useMemo((()=>{if(null!==r){const{matches:t}=r(e);return()=>t}return n}),[n,e,r]),[l,s]=o.useMemo((()=>{if(null===a)return[n,()=>()=>{}];const t=a(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[n,a,e]);return _(s,l,i)}var te=a(1508),ae=a(2658);var oe=e=>{var t,a,r;let{data:l,pageContext:s}=e;const c=l.allMarkdownRemark.nodes,d=null===(t=l.file)||void 0===t?void 0:t.publicURL,u=l.defaultImage,p=null!==(a=l.site)&&void 0!==a&&null!==(r=a.siteMetadata)&&void 0!==r&&r.siteUrl?l.site.siteMetadata.siteUrl+"/":"",m=function(e,t={}){const a=(0,J.Z)(),o="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:n=(o?window.matchMedia:null),ssrMatchMedia:i=null,noSsr:l}=(0,K.Z)({name:"MuiUseMediaQuery",props:t,theme:a});let s="function"==typeof e?e(a):e;return s=s.replace(/^@media( ?)/m,""),(void 0!==_?ee:Y)(s,r,n,i,l)}((0,Z.Z)().breakpoints.down("sm"));return o.createElement(i.A,null,o.createElement(D.p,{title:"",url:p}),d&&o.createElement(te.Z,{component:"img",src:d,alt:"","aria-hidden":"true",sx:{maxHeight:"700px",verticalAlign:"middle",objectFit:"cover",width:"100vw",minWidth:"100%",marginLeft:"calc(-1 * (100vw - 100%)/2)"}}),o.createElement(te.Z,{sx:{backgroundColor:"primary.main",width:"100vw",minWidth:"100%",marginLeft:"calc(-1 * (100vw - 100%)/2)",marginBottom:{xs:"50px",sm:"100px"}}},o.createElement(ae.Z,{component:"h1",sx:{textAlign:"center",fontSize:{xs:"0.875rem",sm:"1.125rem"},p:{xs:2,sm:4},whiteSpace:{xs:"pre-wrap",sm:"normal"}}},"うさぎが好きなエンジニアのブログ",m?o.createElement("br",null):":  ",o.createElement(ae.Z,{component:"small",sx:{fontSize:{xs:"0.5rem",sm:"0.875rem"}}},"React / Vue.js / jQuery / HTML / CSS"))),o.createElement(te.Z,{sx:{lineHeight:"1.6"}},o.createElement(ae.Z,{component:"h2",sx:{fontSize:{xs:"1.75rem",sm:"3rem"},fontWeight:"700",textAlign:"center"}},"Article"," ",o.createElement(ae.Z,{component:"small",sx:{display:"block",fontSize:"0.875rem",textAlign:"center"}},"記事"))),o.createElement(te.Z,{className:"cards",sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:3,marginTop:{xs:3,md:10}}},c.map((e=>o.createElement(n.Z,{post:e,defaultImage:u,key:e.frontmatter.slug})))),o.createElement(te.Z,{sx:{marginBlock:{xs:5,md:10}}},o.createElement(Q,{currentPage:s.currentPage,pageSum:s.numPages})))}}}]);
//# sourceMappingURL=component---src-templates-index-page-tsx-7e306c309ad9388bcd89.js.map