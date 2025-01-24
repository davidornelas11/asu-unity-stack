import{j as i}from"./jsx-runtime-Dtp4yoXy.js";import{a as b,r as Y}from"./index-iql2cimc.js";import{c as S}from"./index-DqAnBlJf.js";import{P as l}from"./index-DamiE3XO.js";import{s as A}from"./html-utils-C9gsfPJL.js";import"./googleAnalytics-4Pcl4n6_.js";import{B as P}from"./Button-BXxRNlJD.js";import{q as Q}from"./styled-components.browser.esm-Cua4idQ2.js";import"./_commonjsHelpers-uqKOVeGF.js";import"./shared-prop-types-B6Cu974x.js";import"./GaEventWrapper-CQUQnm1l.js";import"./useBaseSpecificFramework-BEiWg-hg.js";var M=function(){return M=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},M.apply(this,arguments)},le=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function _(e){var r=function(t){var n=t.bgStyle,a=t.borderRadius,o=t.iconFillColor,d=t.round,c=t.size,h=le(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return b.createElement("svg",M({viewBox:"0 0 64 64",width:c,height:c},h),d?b.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):b.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:e.color,style:n}),b.createElement("path",{d:e.path,fill:o}))};return r.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},r}var ce=_({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});function C(e){var r=Object.entries(e).filter(function(t){var n=t[1];return n!=null}).map(function(t){var n=t[0],a=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(String(a)))});return r.length>0?"?".concat(r.join("&")):""}var de=function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),v=function(){return v=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)},ue=function(e,r,t,n){function a(o){return o instanceof t?o:new t(function(d){d(o)})}return new(t||(t=Promise))(function(o,d){function c(u){try{s(n.next(u))}catch(p){d(p)}}function h(u){try{s(n.throw(u))}catch(p){d(p)}}function s(u){u.done?o(u.value):a(u.value).then(c,h)}s((n=n.apply(e,r||[])).next())})},he=function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,d;return d={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function c(s){return function(u){return h([s,u])}}function h(s){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,a&&(o=s[0]&2?a.return:s[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;switch(a=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,a=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1],o=s;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(s);break}o[2]&&t.ops.pop(),t.trys.pop();continue}s=r.call(e,t)}catch(u){s=[6,u],a=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},X=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},pe=function(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"},fe=function(e,r){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}},me=function(e,r){return{top:(window.screen.height-r)/2,left:(window.screen.width-e)/2}};function ge(e,r,t){var n=r.height,a=r.width,o=X(r,["height","width"]),d=v({height:n,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),c=window.open(e,"",Object.keys(d).map(function(s){return"".concat(s,"=").concat(d[s])}).join(", "));if(t)var h=window.setInterval(function(){try{(c===null||c.closed)&&(window.clearInterval(h),t(c))}catch(s){console.error(s)}},1e3);return c}var ve=function(e){de(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.openShareDialog=function(n){var a=t.props,o=a.onShareWindowClose,d=a.windowHeight,c=d===void 0?400:d,h=a.windowPosition,s=h===void 0?"windowCenter":h,u=a.windowWidth,p=u===void 0?550:u,f=v({height:c,width:p},s==="windowCenter"?fe(p,c):me(p,c));ge(n,f,o)},t.handleClick=function(n){return ue(t,void 0,void 0,function(){var a,o,d,c,h,s,u,p,f,m;return he(this,function(g){switch(g.label){case 0:return a=this.props,o=a.beforeOnClick,d=a.disabled,c=a.networkLink,h=a.onClick,s=a.url,u=a.openShareDialogOnClick,p=a.opts,f=c(s,p),d?[2]:(n.preventDefault(),o?(m=o(),pe(m)?[4,m]:[3,2]):[3,2]);case 1:g.sent(),g.label=2;case 2:return u&&this.openShareDialog(f),h&&h(n,f),[2]}})})},t}return r.prototype.render=function(){var t=this.props;t.beforeOnClick;var n=t.children,a=t.className,o=t.disabled,d=t.disabledStyle,c=t.forwardedRef;t.networkLink;var h=t.networkName;t.onShareWindowClose,t.openShareDialogOnClick,t.opts;var s=t.resetButtonStyle,u=t.style;t.url,t.windowHeight,t.windowPosition,t.windowWidth;var p=X(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"]),f=S("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},a),m=v(v(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),o&&d);return b.createElement("button",v({},p,{"aria-label":p["aria-label"]||h,className:f,onClick:this.handleClick,ref:c,style:m}),n)},r.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},r}(Y.Component),N=function(){return N=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},N.apply(this,arguments)};function T(e,r,t,n){function a(o,d){var c=t(o),h=N({},o),s=Object.keys(c);return s.forEach(function(u){delete h[u]}),b.createElement(ve,N({},n,h,{forwardedRef:d,networkName:e,networkLink:r,opts:t(o)}))}return a.displayName="ShareButton-".concat(e),Y.forwardRef(a)}function be(e,r){var t=r.subject,n=r.body,a=r.separator;return"mailto:"+C({subject:t,body:n?n+a+e:e})}var ye=T("email",be,function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}},{openShareDialogOnClick:!1,onClick:function(e,r){window.location.href=r}}),U=_({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),we=function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),xe=function(e){we(r,e);function r(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return r}(Error);function k(e,r){if(!e)throw new xe(r)}function je(e,r){var t=r.quote,n=r.hashtag;return k(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+C({u:e,quote:t,hashtag:n})}var W=T("facebook",je,function(e){return{quote:e.quote,hashtag:e.hashtag}},{windowWidth:550,windowHeight:400}),R=_({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});function ke(e,r){var t=r.title,n=r.summary,a=r.source;return k(e,"linkedin.url"),"https://linkedin.com/shareArticle"+C({url:e,mini:"true",title:t,summary:n,source:a})}var V=T("linkedin",ke,function(e){var r=e.title,t=e.summary,n=e.source;return{title:r,summary:t,source:n}},{windowWidth:750,windowHeight:600}),D=_({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});function Se(e,r){var t=r.title,n=r.via,a=r.hashtags,o=a===void 0?[]:a,d=r.related,c=d===void 0?[]:d;return k(e,"twitter.url"),k(Array.isArray(o),"twitter.hashtags is not an array"),k(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+C({url:e,text:t,via:n,hashtags:o.length>0?o.join(","):void 0,related:c.length>0?c.join(","):void 0})}var H=T("twitter",Se,function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}},{windowWidth:550,windowHeight:400});function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},z(e)}var Oe;function q(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe;return r?e.split(" ").map(function(t){return r[t]||t}).join(" "):e}var Ne=(typeof window>"u"?"undefined":z(window))==="object"&&window.Element||function(){};function _e(e,r,t){if(!(e[r]instanceof Ne))return new Error("Invalid prop `"+r+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")}l.oneOfType([l.string,l.func,_e,l.shape({current:l.any})]);var I=l.oneOfType([l.func,l.string,l.shape({$$typeof:l.symbol,render:l.func}),l.arrayOf(l.oneOfType([l.func,l.string,l.shape({$$typeof:l.symbol,render:l.func})]))]),Ce=["className","listClassName","cssModule","children","tag","listTag","aria-label"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},E.apply(this,arguments)}function Te(e,r){if(e==null)return{};var t=Ae(e,r),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Ae(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Pe={"aria-label":l.string,children:l.node,className:l.string,cssModule:l.object,listClassName:l.string,listTag:I,tag:I};function ee(e){var r=e.className,t=e.listClassName,n=e.cssModule,a=e.children,o=e.tag,d=o===void 0?"nav":o,c=e.listTag,h=c===void 0?"ol":c,s=e["aria-label"],u=s===void 0?"breadcrumb":s,p=Te(e,Ce),f=q(S(r),n),m=q(S("breadcrumb",t),n);return b.createElement(d,E({},p,{className:f,"aria-label":u}),b.createElement(h,{className:m},a))}ee.propTypes=Pe;var Me=["className","cssModule","active","tag"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},B.apply(this,arguments)}function ze(e,r){if(e==null)return{};var t=qe(e,r),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function qe(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Ie={active:l.bool,className:l.string,cssModule:l.object,tag:I};function L(e){var r=e.className,t=e.cssModule,n=e.active,a=e.tag,o=a===void 0?"li":a,d=ze(e,Me),c=q(S(r,n?"active":!1,"breadcrumb-item"),t);return b.createElement(o,B({},d,{className:c,"aria-current":n?"page":void 0}))}L.propTypes=Ie;const Ee=Q.div`
  &.news-container h2 {
    font-size: 48px;
  }

  &.event-container h2 {
    font-size: 40px;
  }

  &.news-container img,
  &.event-container img {
    width: 100%;
    max-width: fit-content;
  }

  &.wrapper-container h4 {
    margin-top: 0;
  }

  &.wrapper-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10%;
  }

  &.event-container.wrapper-container {
    max-width: 1500px;
  }

  &.news-container {
    background: #fff;
  }

  ol.breadcrumb {
    padding: 0;
    margin: 0;
  }

  ol.breadcrumb > li {
    margin-bottom: 0;
  }

  .article-social-media {
    margin-bottom: 24px;
  }

  .react-share__ShareButton {
    margin-right: 12px;
  }

  i.news-date {
    display: inline-block;
    margin-bottom: 24px;
  }

  .highlight-gold {
    box-shadow: -0.15em 0 0 #ffc627, 0.15em 0 0 #ffc627;
    background: #ffc627;
  }

  .author {
    display: inline-block;
    margin-top: 30px;
    margin-left: -7px;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .icon-bg {
    display: inline-block;
    position: relative;
    padding: 1px 3.5px;
    background-color: maroon;
    margin-right: 4px;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
  }

  .uds-button {
    margin-top: 17px;
    padding: 0;
  }

  .author-title {
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 11px;
    font-size: 16px;
  }

  .author-contact {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  ol.breadcrumb a {
    text-decoration: none;
  }

  i.fa-calendar,
  i.fa-map-marker-alt {
    font-size: 1.17rem;
    margin-right: 8px;
  }

  .event-author {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .event-author-title {
    margin-top: 4px;
  }

  .event-author-info {
    margin-top: 24px;
  }
`,Be=Q.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`,O=({type:e,articleUrl:r,publicationDate:t,title:n,body:a,authorEmail:o,authorName:d,authorPhone:c,authorTitle:h,breadcrumbs:s,calendarUrl:u,eventLocation:p,eventTime:f,headerImageUrl:m,registrationUrl:g,zoomUrl:y})=>{const re=S("col","col-12",{"col-lg-8":e==="event"&&(g||y||u)}),ne=()=>g?i.jsx("div",{className:"card-button uds-button",children:i.jsx(P,{color:"maroon",href:g,label:"Register"})}):i.jsx("div",{className:"card-button uds-button",children:i.jsx(P,{color:"maroon",href:y,label:"Attend on Zoom"})}),ae=()=>i.jsx("div",{className:"row pb-2","data-testid":"author-info",children:i.jsxs("div",{className:"col col-12",children:[i.jsx("div",{className:"author highlight-gold",children:d}),h&&i.jsx("div",{className:"author-title",children:h}),o&&i.jsxs("div",{className:"author-contact",children:[i.jsx("span",{className:"icon-bg",children:i.jsx("i",{className:"fas fa-envelope"})}),i.jsx("a",{href:`mailto: ${o}`,children:o})]}),c&&i.jsxs("div",{className:"author-contact",children:[i.jsx("span",{className:"icon-bg",children:i.jsx("i",{className:"fas fa-phone"})}),i.jsx("a",{href:`tel: ${c}`,children:c})]})]})}),oe=()=>i.jsxs(Be,{className:"row row-spaced mt-3 pt-6 pb-2 event-info","data-testid":"event-info",children:[i.jsxs("div",{className:"col col-lg-4 col-md-6 col-12",children:[i.jsx("h4",{children:"For more information contact:"}),i.jsx("div",{className:"event-author",children:d}),i.jsx("div",{className:"event-author-title",children:h}),(o||c)&&i.jsxs("div",{className:"event-author-info",children:[o&&i.jsx("div",{children:i.jsx("a",{href:`mailto: ${o}`,children:o})}),c&&i.jsx("div",{children:i.jsx("a",{href:`tel: ${c}`,children:c})})]})]}),i.jsxs("div",{className:"col col-lg-4 col-md-6 col-12",children:[i.jsx("h4",{children:"Share this event:"}),i.jsxs("div",{className:"article-social-media",children:[i.jsx(W,{url:r,quote:n,children:i.jsx(U,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),i.jsx(H,{url:r,quote:n,children:i.jsx(D,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),i.jsx(ye,{url:o,quote:n,children:i.jsx(ce,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),i.jsx(V,{url:r,quote:n,children:i.jsx(R,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})})]})]})]}),ie=()=>i.jsxs("div",{className:"col col-12 col-lg-4 col-md-6",children:[i.jsxs("h4",{children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),"Location:"]}),i.jsx("div",{dangerouslySetInnerHTML:A(p)}),g&&y&&i.jsx("a",{href:y,children:"Attend on Zoom"})]}),se=w=>i.jsx(L,{active:w.active,tag:"li",className:"breadcrumb-item",children:i.jsx(L,{tag:"a",href:w.url,children:w.title})},w.title);return i.jsxs(i.Fragment,{children:[m&&e!=="event"&&i.jsx("div",{"data-testid":"uds-hero",className:"uds-hero uds-hero-md",style:{backgroundImage:`linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${m})`}}),i.jsxs(Ee,{className:`container ${e}-container wrapper-container`,children:[s&&i.jsx("div",{className:"row pt-4","data-testid":"breadcrumbs",children:i.jsx("div",{className:"col col-12",children:i.jsx(ee,{listClassName:"breadcrumb",children:s.map(w=>se(w))})})}),i.jsxs("div",{className:"row pb-2 pt-3",children:[i.jsx("div",{className:re,children:i.jsx("h2",{"data-testid":"title",children:n})}),e==="event"&&i.jsxs("div",{className:"col col-lg-4 col-xs-12",children:[(g||y)&&ne(),u&&i.jsx("div",{className:"card-button uds-button",children:i.jsx(P,{color:"gray",size:"small",href:u,label:"Add to calendar"})})]})]}),e==="event"?i.jsxs("div",{className:"row row-spaced pt-3 mb-2",children:[f&&i.jsxs("div",{className:"col col-lg-4 col-md-6 col-sm-12",children:[i.jsxs("h4",{children:[i.jsx("i",{className:"far fa-calendar"}),"Date and time:"]}),i.jsx("div",{dangerouslySetInnerHTML:A(f)})]}),(g&&y||p)&&ie()]}):i.jsx("div",{className:"row row-spaced pt-2",children:i.jsxs("div",{className:"col col-12",children:[i.jsxs("div",{className:"article-social-media",children:[i.jsx(W,{url:r,quote:n,children:i.jsx(U,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),i.jsx(H,{url:r,quote:n,children:i.jsx(D,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})}),i.jsx(V,{url:r,quote:n,children:i.jsx(R,{size:28,borderRadius:4,bgStyle:{fill:"maroon"}})})]}),t&&i.jsx("i",{className:"news-date",children:t})]})}),i.jsx("div",{className:"row",children:i.jsx("div",{className:"col col-12",dangerouslySetInnerHTML:A(a),"data-testid":"body"})}),e==="news"&&ae(),e==="event"&&oe()]})]})};O.propTypes={type:l.oneOf(["event","news"]),articleUrl:l.string.isRequired,publicationDate:l.string.isRequired,title:l.string.isRequired,body:l.string.isRequired,authorEmail:l.string,authorName:l.string.isRequired,authorPhone:l.string,authorTitle:l.string,breadcrumbs:l.arrayOf(l.shape({title:l.string,url:l.string,active:l.bool})),calendarUrl:l.string,headerImageUrl:l.string,eventLocation:l.string,eventTime:l.string,registrationUrl:l.string,zoomUrl:l.string};O.defaultProps={type:"news",authorEmail:void 0,authorPhone:void 0,authorTitle:void 0,breadcrumbs:void 0,calendarUrl:void 0,headerImageUrl:void 0,eventLocation:void 0,eventTime:void 0,registrationUrl:void 0,zoomUrl:void 0};O.__docgenInfo={description:`@param {ArticleProps} props
@returns {JSX.Element}`,methods:[],displayName:"Article",props:{type:{defaultValue:{value:'"news"',computed:!1},description:"Type of article",type:{name:"enum",value:[{value:'"event"',computed:!1},{value:'"news"',computed:!1}]},required:!1},authorEmail:{defaultValue:{value:"undefined",computed:!0},description:"Article author email",type:{name:"string"},required:!1},authorPhone:{defaultValue:{value:"undefined",computed:!0},description:"Article author phone number",type:{name:"string"},required:!1},authorTitle:{defaultValue:{value:"undefined",computed:!0},description:"Article author title",type:{name:"string"},required:!1},breadcrumbs:{defaultValue:{value:"undefined",computed:!0},description:"Breadcrumbs array",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},url:{name:"string",required:!1},active:{name:"bool",required:!1}}}},required:!1},calendarUrl:{defaultValue:{value:"undefined",computed:!0},description:'URL for an "add to calendar" button',type:{name:"string"},required:!1},headerImageUrl:{defaultValue:{value:"undefined",computed:!0},description:"Article image",type:{name:"string"},required:!1},eventLocation:{defaultValue:{value:"undefined",computed:!0},description:"Event location",type:{name:"string"},required:!1},eventTime:{defaultValue:{value:"undefined",computed:!0},description:"Event time",type:{name:"string"},required:!1},registrationUrl:{defaultValue:{value:"undefined",computed:!0},description:"URL for a registation button",type:{name:"string"},required:!1},zoomUrl:{defaultValue:{value:"undefined",computed:!0},description:"URL for a Zoom button",type:{name:"string"},required:!1},articleUrl:{description:"This is the relative or absolute url to the full-page article",type:{name:"string"},required:!0},publicationDate:{description:"Date for the article",type:{name:"string"},required:!0},title:{description:"Title",type:{name:"string"},required:!0},body:{description:"Body content for the article",type:{name:"string"},required:!0},authorName:{description:"Article author full name",type:{name:"string"},required:!0}}};const Ze={title:"Components/Article",component:O,parameters:{docs:{description:{component:`The Article component can be used to generate UDS-compliant news and event articles.

## Usage

By default, the Article component will output the news layout.  When "event" is passed to the "type" prop, Article will generate the event layout.

The following props are only rendered for the event layout:
        • calendarUrl
        • eventTime
        • eventLocation
        • registrationUrl
        • zoomUrl

The following prop is only rendered for the news layout:
        • headerImageUrl

View component examples and source code below.
        `}}},argTypes:{type:{type:"inline-radio",options:["event","news"]}}},te=e=>i.jsx(O,{...e}),j=te.bind({});j.args={type:"news",articleUrl:"https://example.com",headerImageUrl:"https://source.unsplash.com/WLUHO9A_xik/1920x512",title:"Clarisse Machanguana takes her skill set to the next level at ASU Thunderbird",publicationDate:"March 18, 2021",authorName:"Jimena Garrison",authorTitle:"Media Relations and Strategic Communications",authorEmail:"jgarris6@asu.edu",authorPhone:"480-727-4058",breadcrumbs:[{title:"Home",url:"/"},{title:"Second nav item",url:"/events"},{title:"Current page",url:"/events/current-article",active:!0}],body:"<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p>"};const x=te.bind({});x.args={type:"event",articleUrl:"https://example.com",title:"ASU Book Group: 'There's No Crying in Newsrooms' by Kristin Grady Gilger and Julia Wallace",publicationDate:"March 18, 2021",authorName:"Jackie Young",authorTitle:"ASU Library",authorEmail:"jacqueline.young@asu.edu",authorPhone:"480-727-4058",breadcrumbs:[{title:"Home",url:"/"},{title:"Second nav item",url:"/events"},{title:"Current page",url:"/events/current-article",active:!0}],eventTime:"November 33, 2030,<br />12:00 p.m. - 1:30 p.m.",eventLocation:"Vault Gallery, Downtown Phoenix campus Library<br />411 N Central Ave, Phoenix AZ 85004",registrationUrl:"https://www.aventri.com/",zoomUrl:"https://zoom.com",calendarUrl:"#",body:"<p>After 34 years in the game of basketball, Clarisse Machanguana retired. Her eponymous philanthropic foundation remains her only connection to the sport, although the effect of the global game has left imprints in many aspects of her life.</p><p>Playing basketball took her to Portugal and then the U.S., where she attended Old Dominion University in Virginia to study criminal justice. When she realized that sports could be a microcosm of life and values, she decided to create a way to coach sports while teaching life skills in her home country of Mozambique. She started the <a href='http://machanguanafoundation.rf.gd/'>Clarisse Machanguana Foundation</a> in 2014 with the goal of empowering Mozambican youth through health, education and sports programs.</p><p>Now she’s taking her leadership game to the next level at ASU’s Thunderbird School of Global Management, earning her Master of Global Management degree with a nonprofit management concentration. Machanguana is honing her skills as a global professional in and out of the classroom to propel her foundation even further.</p><p>Here she reflects on the experiences that brought her to Thunderbird and ASU.</p><p><strong>Question: Why basketball?</strong></p><p><strong>Answer:</strong> I started at age 6, and because it was popular in my area and I was tall — now 6-feet-5-inches tall, to be exact — people kept telling me I should play. Basketball took me everywhere. I had a scholarship to play in Portugal and the U.S., and later on in Spain, France, Brazil, South Korea and Italy. Basketball became a passport and a school for me, and a source of amazing friendships. I played from age 6 to 40. My foundation now partners with the Department of Education. We collaborate with teachers and teach them to coach life skills and basketball.</p><p>I advocate social causes that are challenging for youth and transform them into opportunities, giving them tools to lift themselves out of the poverty they see. They use the skills like respecting your opponent and perseverance that can be applied in life as well as sports. When you wake up and all you see is poverty, you start to believe that mindset of limitations and scarcity. We give young people something else to believe in, a vision of a better life.</p>"};x.parameters={docs:{description:{story:`
        <Article
          articleUrl="https://example.com"
          authorEmail="jacqueline.young@asu.edu"
          authorName="Jackie Young"
          authorPhone="480-727-4058"
          authorTitle="ASU Library"
          body="<p>Body content</p>"
          calendarUrl="#"
          eventLocation="Vault Gallery, Downtown Phoenix campus Library<br />411 N Central Ave, Phoenix AZ 85004"
          eventTime="November 33, 2030,<br />12:00 p.m. - 1:30 p.m."
          publicationDate="March 18, 2021"
          registrationUrl="https://www.aventri.com/"
          title="ASU Book Group: 'There's No Crying in Newsrooms' by Kristin Grady Gilger and Julia Wallace"
          type="event"
          zoomUrl="https://zoom.com"
        />`}}};var $,G,F;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:"args => <Article {...args} />",...(F=(G=j.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var J,K,Z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:"args => <Article {...args} />",...(Z=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};const Ye=["News","Event"];export{x as Event,j as News,Ye as __namedExportsOrder,Ze as default};
