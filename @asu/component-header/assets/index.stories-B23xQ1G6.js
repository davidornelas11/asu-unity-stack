import{r as B,R as Ot}from"./index-B2SEcK1p.js";import{g as Qi}from"./_commonjsHelpers-B3tUAs5q.js";var Ji={exports:{}},En={};var ks=B,Ts=Symbol.for("react.element"),Es=Symbol.for("react.fragment"),_s=Object.prototype.hasOwnProperty,Os=ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cs={key:!0,ref:!0,__self:!0,__source:!0};function eo(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_s.call(t,r)&&!Cs.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ts,type:e,key:i,ref:o,props:a,_owner:Os.current}}En.Fragment=Es;En.jsx=eo;En.jsxs=eo;Ji.exports=En;var p=Ji.exports,to={exports:{}},Ns="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ps=Ns,Ls=Ps;function no(){}function ro(){}ro.resetWarningCache=no;var Is=function(){function e(r,a,i,o,s,u){if(u!==Ls){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ro,resetWarningCache:no};return n.PropTypes=n,n};to.exports=Is();var Rs=to.exports;const d=Qi(Rs),Sa={alt:d.string,title:d.string,src:d.string,mobileSrc:d.string,brandLink:d.string},mn={baseUrl:d.string,parentOrg:d.string,parentOrgUrl:d.string,animate:d.bool},ln={loggedIn:d.bool,loginLink:d.string,logoutLink:d.string,userName:d.string},_n={text:d.string.isRequired,color:d.oneOf(["gold","maroon","light","dark"]),href:d.string.isRequired,classes:d.string,onClick:d.func},fr=d.shape({id:d.number,href:d.string,text:d.string,type:d.string,selected:d.bool,items:d.arrayOf(d.arrayOf(d.object)),buttons:d.arrayOf(d.shape(_n)),class:d.string}),ao={isPartner:d.bool,navTree:d.arrayOf(fr),partnerLogo:d.shape(Sa),logo:d.shape(Sa),title:d.string,parentOrg:mn.parentOrg,parentOrgUrl:mn.parentOrgUrl,baseUrl:mn.baseUrl,loggedIn:ln.loggedIn,userName:ln.userName,loginLink:ln.loginLink,onLoginClick:d.func,logoutLink:ln.logoutLink,onLogoutClick:d.func,buttons:d.arrayOf(d.shape(_n)),breakpoint:d.oneOf(["Lg","Xl"]),animateTitle:d.bool,expandOnHover:d.bool,mobileNavTree:d.arrayOf(fr),hasNavigation:d.bool,searchUrl:d.string,site:d.string,renderDiv:d.oneOf(["true","false"])};var io={exports:{}},W={};var ue=typeof Symbol=="function"&&Symbol.for,Fr=ue?Symbol.for("react.element"):60103,jr=ue?Symbol.for("react.portal"):60106,On=ue?Symbol.for("react.fragment"):60107,Cn=ue?Symbol.for("react.strict_mode"):60108,Nn=ue?Symbol.for("react.profiler"):60114,Pn=ue?Symbol.for("react.provider"):60109,Ln=ue?Symbol.for("react.context"):60110,zr=ue?Symbol.for("react.async_mode"):60111,In=ue?Symbol.for("react.concurrent_mode"):60111,Rn=ue?Symbol.for("react.forward_ref"):60112,Mn=ue?Symbol.for("react.suspense"):60113,Ms=ue?Symbol.for("react.suspense_list"):60120,Dn=ue?Symbol.for("react.memo"):60115,Fn=ue?Symbol.for("react.lazy"):60116,Ds=ue?Symbol.for("react.block"):60121,Fs=ue?Symbol.for("react.fundamental"):60117,js=ue?Symbol.for("react.responder"):60118,zs=ue?Symbol.for("react.scope"):60119;function Ee(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fr:switch(e=e.type,e){case zr:case In:case On:case Nn:case Cn:case Mn:return e;default:switch(e=e&&e.$$typeof,e){case Ln:case Rn:case Fn:case Dn:case Pn:return e;default:return t}}case jr:return t}}}function oo(e){return Ee(e)===In}W.AsyncMode=zr;W.ConcurrentMode=In;W.ContextConsumer=Ln;W.ContextProvider=Pn;W.Element=Fr;W.ForwardRef=Rn;W.Fragment=On;W.Lazy=Fn;W.Memo=Dn;W.Portal=jr;W.Profiler=Nn;W.StrictMode=Cn;W.Suspense=Mn;W.isAsyncMode=function(e){return oo(e)||Ee(e)===zr};W.isConcurrentMode=oo;W.isContextConsumer=function(e){return Ee(e)===Ln};W.isContextProvider=function(e){return Ee(e)===Pn};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr};W.isForwardRef=function(e){return Ee(e)===Rn};W.isFragment=function(e){return Ee(e)===On};W.isLazy=function(e){return Ee(e)===Fn};W.isMemo=function(e){return Ee(e)===Dn};W.isPortal=function(e){return Ee(e)===jr};W.isProfiler=function(e){return Ee(e)===Nn};W.isStrictMode=function(e){return Ee(e)===Cn};W.isSuspense=function(e){return Ee(e)===Mn};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===On||e===In||e===Nn||e===Cn||e===Mn||e===Ms||typeof e=="object"&&e!==null&&(e.$$typeof===Fn||e.$$typeof===Dn||e.$$typeof===Pn||e.$$typeof===Ln||e.$$typeof===Rn||e.$$typeof===Fs||e.$$typeof===js||e.$$typeof===zs||e.$$typeof===Ds)};W.typeOf=Ee;io.exports=W;var Ur=io.exports;function Us(e){function t(O,v,E,C,f){for(var L=0,b=0,G=0,$=0,q,F,ie=0,re=0,z,K=z=q=0,U=0,ae=0,Oe=0,te=0,Be=E.length,Je=Be-1,we,M="",Y="",Ge="",De="",ge;U<Be;){if(F=E.charCodeAt(U),U===Je&&b+$+G+L!==0&&(b!==0&&(F=b===47?10:47),$=G=L=0,Be++,Je++),b+$+G+L===0){if(U===Je&&(0<ae&&(M=M.replace(k,"")),0<M.trim().length)){switch(F){case 32:case 9:case 59:case 13:case 10:break;default:M+=E.charAt(U)}F=59}switch(F){case 123:for(M=M.trim(),q=M.charCodeAt(0),z=1,te=++U;U<Be;){switch(F=E.charCodeAt(U)){case 123:z++;break;case 125:z--;break;case 47:switch(F=E.charCodeAt(U+1)){case 42:case 47:e:{for(K=U+1;K<Je;++K)switch(E.charCodeAt(K)){case 47:if(F===42&&E.charCodeAt(K-1)===42&&U+2!==K){U=K+1;break e}break;case 10:if(F===47){U=K+1;break e}}U=K}}break;case 91:F++;case 40:F++;case 34:case 39:for(;U++<Je&&E.charCodeAt(U)!==F;);}if(z===0)break;U++}switch(z=E.substring(te,U),q===0&&(q=(M=M.replace(A,"").trim()).charCodeAt(0)),q){case 64:switch(0<ae&&(M=M.replace(k,"")),F=M.charCodeAt(1),F){case 100:case 109:case 115:case 45:ae=v;break;default:ae=He}if(z=t(v,ae,z,F,f+1),te=z.length,0<xe&&(ae=n(He,M,Oe),ge=s(3,z,ae,v,ee,me,te,F,f,C),M=ae.join(""),ge!==void 0&&(te=(z=ge.trim()).length)===0&&(F=0,z="")),0<te)switch(F){case 115:M=M.replace(Q,o);case 100:case 109:case 45:z=M+"{"+z+"}";break;case 107:M=M.replace(w,"$1 $2"),z=M+"{"+z+"}",z=le===1||le===2&&i("@"+z,3)?"@-webkit-"+z+"@"+z:"@"+z;break;default:z=M+z,C===112&&(z=(Y+=z,""))}else z="";break;default:z=t(v,n(v,M,Oe),z,C,f+1)}Ge+=z,z=Oe=ae=K=q=0,M="",F=E.charCodeAt(++U);break;case 125:case 59:if(M=(0<ae?M.replace(k,""):M).trim(),1<(te=M.length))switch(K===0&&(q=M.charCodeAt(0),q===45||96<q&&123>q)&&(te=(M=M.replace(" ",":")).length),0<xe&&(ge=s(1,M,v,O,ee,me,Y.length,C,f,C))!==void 0&&(te=(M=ge.trim()).length)===0&&(M="\0\0"),q=M.charCodeAt(0),F=M.charCodeAt(1),q){case 0:break;case 64:if(F===105||F===99){De+=M+E.charAt(U);break}default:M.charCodeAt(te-1)!==58&&(Y+=a(M,q,F,M.charCodeAt(2)))}Oe=ae=K=q=0,M="",F=E.charCodeAt(++U)}}switch(F){case 13:case 10:b===47?b=0:1+q===0&&C!==107&&0<M.length&&(ae=1,M+="\0"),0<xe*We&&s(0,M,v,O,ee,me,Y.length,C,f,C),me=1,ee++;break;case 59:case 125:if(b+$+G+L===0){me++;break}default:switch(me++,we=E.charAt(U),F){case 9:case 32:if($+L+b===0)switch(ie){case 44:case 58:case 9:case 32:we="";break;default:F!==32&&(we=" ")}break;case 0:we="\\0";break;case 12:we="\\f";break;case 11:we="\\v";break;case 38:$+b+L===0&&(ae=Oe=1,we="\f"+we);break;case 108:if($+b+L+ye===0&&0<K)switch(U-K){case 2:ie===112&&E.charCodeAt(U-3)===58&&(ye=ie);case 8:re===111&&(ye=re)}break;case 58:$+b+L===0&&(K=U);break;case 44:b+G+$+L===0&&(ae=1,we+="\r");break;case 34:case 39:b===0&&($=$===F?0:$===0?F:$);break;case 91:$+b+G===0&&L++;break;case 93:$+b+G===0&&L--;break;case 41:$+b+L===0&&G--;break;case 40:if($+b+L===0){if(q===0)switch(2*ie+3*re){case 533:break;default:q=1}G++}break;case 64:b+G+$+L+K+z===0&&(z=1);break;case 42:case 47:if(!(0<$+L+G))switch(b){case 0:switch(2*F+3*E.charCodeAt(U+1)){case 235:b=47;break;case 220:te=U,b=42}break;case 42:F===47&&ie===42&&te+2!==U&&(E.charCodeAt(te+2)===33&&(Y+=E.substring(te,U+1)),we="",b=0)}}b===0&&(M+=we)}re=ie,ie=F,U++}if(te=Y.length,0<te){if(ae=v,0<xe&&(ge=s(2,Y,ae,O,ee,me,te,C,f,C),ge!==void 0&&(Y=ge).length===0))return De+Y+Ge;if(Y=ae.join(",")+"{"+Y+"}",le*ye!==0){switch(le!==2||i(Y,2)||(ye=0),ye){case 111:Y=Y.replace(P,":-moz-$1")+Y;break;case 112:Y=Y.replace(R,"::-webkit-input-$1")+Y.replace(R,"::-moz-$1")+Y.replace(R,":-ms-input-$1")+Y}ye=0}}return De+Y+Ge}function n(O,v,E){var C=v.trim().split(h);v=C;var f=C.length,L=O.length;switch(L){case 0:case 1:var b=0;for(O=L===0?"":O[0]+" ";b<f;++b)v[b]=r(O,v[b],E).trim();break;default:var G=b=0;for(v=[];b<f;++b)for(var $=0;$<L;++$)v[G++]=r(O[$]+" ",C[b],E).trim()}return v}function r(O,v,E){var C=v.charCodeAt(0);switch(33>C&&(C=(v=v.trim()).charCodeAt(0)),C){case 38:return v.replace(S,"$1"+O.trim());case 58:return O.trim()+v.replace(S,"$1"+O.trim());default:if(0<1*E&&0<v.indexOf("\f"))return v.replace(S,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+v}function a(O,v,E,C){var f=O+";",L=2*v+3*E+4*C;if(L===944){O=f.indexOf(":",9)+1;var b=f.substring(O,f.length-1).trim();return b=f.substring(0,O).trim()+b+";",le===1||le===2&&i(b,1)?"-webkit-"+b+b:b}if(le===0||le===2&&!i(f,1))return f;switch(L){case 1015:return f.charCodeAt(10)===97?"-webkit-"+f+f:f;case 951:return f.charCodeAt(3)===116?"-webkit-"+f+f:f;case 963:return f.charCodeAt(5)===110?"-webkit-"+f+f:f;case 1009:if(f.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+f+f;case 978:return"-webkit-"+f+"-moz-"+f+f;case 1019:case 983:return"-webkit-"+f+"-moz-"+f+"-ms-"+f+f;case 883:if(f.charCodeAt(8)===45)return"-webkit-"+f+f;if(0<f.indexOf("image-set(",11))return f.replace(Ie,"$1-webkit-$2")+f;break;case 932:if(f.charCodeAt(4)===45)switch(f.charCodeAt(5)){case 103:return"-webkit-box-"+f.replace("-grow","")+"-webkit-"+f+"-ms-"+f.replace("grow","positive")+f;case 115:return"-webkit-"+f+"-ms-"+f.replace("shrink","negative")+f;case 98:return"-webkit-"+f+"-ms-"+f.replace("basis","preferred-size")+f}return"-webkit-"+f+"-ms-"+f+f;case 964:return"-webkit-"+f+"-ms-flex-"+f+f;case 1023:if(f.charCodeAt(8)!==99)break;return b=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+f+"-ms-flex-pack"+b+f;case 1005:return x.test(f)?f.replace(I,":-webkit-")+f.replace(I,":-moz-")+f:f;case 1e3:switch(b=f.substring(13).trim(),v=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(v)){case 226:b=f.replace(D,"tb");break;case 232:b=f.replace(D,"tb-rl");break;case 220:b=f.replace(D,"lr");break;default:return f}return"-webkit-"+f+"-ms-"+b+f;case 1017:if(f.indexOf("sticky",9)===-1)break;case 975:switch(v=(f=O).length-10,b=(f.charCodeAt(v)===33?f.substring(0,v):f).substring(O.indexOf(":",7)+1).trim(),L=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:f=f.replace(b,"-webkit-"+b)+";"+f;break;case 207:case 102:f=f.replace(b,"-webkit-"+(102<L?"inline-":"")+"box")+";"+f.replace(b,"-webkit-"+b)+";"+f.replace(b,"-ms-"+b+"box")+";"+f}return f+";";case 938:if(f.charCodeAt(5)===45)switch(f.charCodeAt(6)){case 105:return b=f.replace("-items",""),"-webkit-"+f+"-webkit-box-"+b+"-ms-flex-"+b+f;case 115:return"-webkit-"+f+"-ms-flex-item-"+f.replace(V,"")+f;default:return"-webkit-"+f+"-ms-flex-line-pack"+f.replace("align-content","").replace(V,"")+f}break;case 973:case 989:if(f.charCodeAt(3)!==45||f.charCodeAt(4)===122)break;case 931:case 953:if(se.test(O)===!0)return(b=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?a(O.replace("stretch","fill-available"),v,E,C).replace(":fill-available",":stretch"):f.replace(b,"-webkit-"+b)+f.replace(b,"-moz-"+b.replace("fill-",""))+f;break;case 962:if(f="-webkit-"+f+(f.charCodeAt(5)===102?"-ms-"+f:"")+f,E+C===211&&f.charCodeAt(13)===105&&0<f.indexOf("transform",10))return f.substring(0,f.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+f}return f}function i(O,v){var E=O.indexOf(v===1?":":"{"),C=O.substring(0,v!==3?E:10);return E=O.substring(E+1,O.length-1),lt(v!==2?C:C.replace(ne,"$1"),E,v)}function o(O,v){var E=a(v,v.charCodeAt(0),v.charCodeAt(1),v.charCodeAt(2));return E!==v+";"?E.replace(J," or ($1)").substring(4):"("+v+")"}function s(O,v,E,C,f,L,b,G,$,q){for(var F=0,ie=v,re;F<xe;++F)switch(re=Se[F].call(m,O,ie,E,C,f,L,b,G,$,q)){case void 0:case!1:case!0:case null:break;default:ie=re}if(ie!==v)return ie}function u(O){switch(O){case void 0:case null:xe=Se.length=0;break;default:if(typeof O=="function")Se[xe++]=O;else if(typeof O=="object")for(var v=0,E=O.length;v<E;++v)u(O[v]);else We=!!O|0}return u}function c(O){return O=O.prefix,O!==void 0&&(lt=null,O?typeof O!="function"?le=1:(le=2,lt=O):le=0),c}function m(O,v){var E=O;if(33>E.charCodeAt(0)&&(E=E.trim()),ct=E,E=[ct],0<xe){var C=s(-1,v,E,E,ee,me,0,0,0,0);C!==void 0&&typeof C=="string"&&(v=C)}var f=t(He,E,v,0,0);return 0<xe&&(C=s(-2,f,E,E,ee,me,f.length,0,0,0),C!==void 0&&(f=C)),ct="",ye=0,me=ee=1,f}var A=/^\0+/g,k=/[\0\r\f]/g,I=/: */g,x=/zoo|gra/,_=/([,: ])(transform)/g,h=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,R=/::(place)/g,P=/:(read-only)/g,D=/[svh]\w+-[tblr]{2}/,Q=/\(\s*(.*)\s*\)/g,J=/([\s\S]*?);/g,V=/-self|flex-/g,ne=/[^]*?(:[rp][el]a[\w-]+)[^]*/,se=/stretch|:\s*\w+\-(?:conte|avail)/,Ie=/([^-])(image-set\()/,me=1,ee=1,ye=0,le=1,He=[],Se=[],xe=0,lt=null,We=0,ct="";return m.use=u,m.set=c,e!==void 0&&c(e),m}var $s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qs(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Hs=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ka=qs(function(e){return Hs.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$r=Ur,Ws={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bs={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gs={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},so={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qr={};qr[$r.ForwardRef]=Gs;qr[$r.Memo]=so;function Ta(e){return $r.isMemo(e)?so:qr[e.$$typeof]||Ws}var Ys=Object.defineProperty,Xs=Object.getOwnPropertyNames,Ea=Object.getOwnPropertySymbols,Vs=Object.getOwnPropertyDescriptor,Ks=Object.getPrototypeOf,_a=Object.prototype;function lo(e,t,n){if(typeof t!="string"){if(_a){var r=Ks(t);r&&r!==_a&&lo(e,r,n)}var a=Xs(t);Ea&&(a=a.concat(Ea(t)));for(var i=Ta(e),o=Ta(t),s=0;s<a.length;++s){var u=a[s];if(!Bs[u]&&!(n&&n[u])&&!(o&&o[u])&&!(i&&i[u])){var c=Vs(t,u);try{Ys(e,u,c)}catch{}}}}return e}var Zs=lo;const Qs=Qi(Zs);var co={env:{NODE_ENV:"production"}},Ne={};function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Oa=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},dr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ur.typeOf(e)},xn=Object.freeze([]),rt=Object.freeze({});function Kt(e){return typeof e=="function"}function Ca(e){return e.displayName||e.name||"Component"}function Hr(e){return e&&typeof e.styledComponentId=="string"}var kt=typeof co<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_ATTR||Ne.SC_ATTR)||"data-styled",Wr=typeof window<"u"&&"HTMLElement"in window,Js=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof co<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==""?Ne.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ne.REACT_APP_SC_DISABLE_SPEEDY:Ne.SC_DISABLE_SPEEDY!==void 0&&Ne.SC_DISABLE_SPEEDY!==""&&Ne.SC_DISABLE_SPEEDY!=="false"&&Ne.SC_DISABLE_SPEEDY));function Jt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var el=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&Jt(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,s=i;s<o;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),hn=new Map,wn=new Map,Yt=1,cn=function(e){if(hn.has(e))return hn.get(e);for(;wn.has(Yt);)Yt++;var t=Yt++;return hn.set(e,t),wn.set(t,e),t},tl=function(e){return wn.get(e)},nl=function(e,t){t>=Yt&&(Yt=t+1),hn.set(e,t),wn.set(t,e)},rl="style["+kt+'][data-styled-version="5.3.11"]',al=new RegExp("^"+kt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),il=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},ol=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var s=o.match(al);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(nl(c,u),il(e,c,s[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},sl=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},uo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){for(var u=s.childNodes,c=u.length;c>=0;c--){var m=u[c];if(m&&m.nodeType===1&&m.hasAttribute(kt))return m}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(kt,"active"),r.setAttribute("data-styled-version","5.3.11");var o=sl();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},ll=function(){function e(n){var r=this.element=uo(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,s=i.length;o<s;o++){var u=i[o];if(u.ownerNode===a)return u}Jt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),cl=function(){function e(n){var r=this.element=uo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),ul=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Na=Wr,fl={isServer:!Wr,useCSSOMInjection:!Js},fo=function(){function e(n,r,a){n===void 0&&(n=rt),r===void 0&&(r={}),this.options=Ve({},fl,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Wr&&Na&&(Na=!1,function(i){for(var o=document.querySelectorAll(rl),s=0,u=o.length;s<u;s++){var c=o[s];c&&c.getAttribute(kt)!=="active"&&(ol(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return cn(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ve({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new ul(o):i?new ll(o):new cl(o),new el(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(cn(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(cn(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(cn(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var s=tl(o);if(s!==void 0){var u=n.names.get(s),c=r.getGroup(o);if(u&&c&&u.size){var m=kt+".g"+o+'[id="'+s+'"]',A="";u!==void 0&&u.forEach(function(k){k.length>0&&(A+=k+",")}),i+=""+c+m+'{content:"'+A+`"}/*!sc*/
`}}}return i}(this)},e}(),dl=/(a)(d)/gi,Pa=function(e){return String.fromCharCode(e+(e>25?39:97))};function pr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Pa(t%52)+n;return(Pa(t%52)+n).replace(dl,"$1-$2")}var xt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},po=function(e){return xt(5381,e)};function pl(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kt(n)&&!Hr(n))return!1}return!0}var ml=po("5.3.11"),hl=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pl(t),this.componentId=n,this.baseHash=xt(ml,n),this.baseStyle=r,fo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=Tt(this.rules,t,n,r).join(""),s=pr(xt(this.baseHash,o)>>>0);if(!n.hasNameForId(a,s)){var u=r(o,"."+s,void 0,a);n.insertRules(a,s,u)}i.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,m=xt(this.baseHash,r.hash),A="",k=0;k<c;k++){var I=this.rules[k];if(typeof I=="string")A+=I;else if(I){var x=Tt(I,t,n,r),_=Array.isArray(x)?x.join(""):x;m=xt(m,_+k),A+=_}}if(A){var h=pr(m>>>0);if(!n.hasNameForId(a,h)){var S=r(A,"."+h,void 0,a);n.insertRules(a,h,S)}i.push(h)}}return i.join(" ")},e}(),gl=/^\s*\/\/.*$/gm,vl=[":","[",".","#"];function bl(e){var t,n,r,a,i=rt,o=i.options,s=o===void 0?rt:o,u=i.plugins,c=u===void 0?xn:u,m=new Us(s),A=[],k=function(_){function h(S){if(S)try{_(S+"}")}catch{}}return function(S,w,R,P,D,Q,J,V,ne,se){switch(S){case 1:if(ne===0&&w.charCodeAt(0)===64)return _(w+";"),"";break;case 2:if(V===0)return w+"/*|*/";break;case 3:switch(V){case 102:case 112:return _(R[0]+w),"";default:return w+(se===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(h)}}}(function(_){A.push(_)}),I=function(_,h,S){return h===0&&vl.indexOf(S[n.length])!==-1||S.match(a)?_:"."+t};function x(_,h,S,w){w===void 0&&(w="&");var R=_.replace(gl,""),P=h&&S?S+" "+h+" { "+R+" }":R;return t=w,n=h,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),m(S||!h?"":h,P)}return m.use([].concat(c,[function(_,h,S){_===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(r,I))},k,function(_){if(_===-2){var h=A;return A=[],h}}])),x.hash=c.length?c.reduce(function(_,h){return h.name||Jt(15),xt(_,h.name)},5381).toString():"",x}var mo=Ot.createContext();mo.Consumer;var ho=Ot.createContext(),yl=(ho.Consumer,new fo),mr=bl();function xl(){return B.useContext(mo)||yl}function wl(){return B.useContext(ho)||mr}var Al=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=mr);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return Jt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=mr),this.name+t.hash},e}(),Sl=/([A-Z])/,kl=/([A-Z])/g,Tl=/^ms-/,El=function(e){return"-"+e.toLowerCase()};function La(e){return Sl.test(e)?e.replace(kl,El).replace(Tl,"-ms-"):e}var Ia=function(e){return e==null||e===!1||e===""};function Tt(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)(a=Tt(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(Ia(e))return"";if(Hr(e))return"."+e.styledComponentId;if(Kt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Tt(u,t,n,r)}var c;return e instanceof Al?n?(e.inject(n,r),e.getName(r)):e:dr(e)?function m(A,k){var I,x,_=[];for(var h in A)A.hasOwnProperty(h)&&!Ia(A[h])&&(Array.isArray(A[h])&&A[h].isCss||Kt(A[h])?_.push(La(h)+":",A[h],";"):dr(A[h])?_.push.apply(_,m(A[h],h)):_.push(La(h)+": "+(I=h,(x=A[h])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||I in $s||I.startsWith("--")?String(x).trim():x+"px")+";"));return k?[k+" {"].concat(_,["}"]):_}(e):e.toString()}var Ra=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function _l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Kt(e)||dr(e)?Ra(Tt(Oa(xn,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ra(Tt(Oa(e,n)))}var Ol=function(e,t,n){return n===void 0&&(n=rt),e.theme!==n.theme&&e.theme||t||n.theme},Cl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nl=/(^-|-$)/g;function Vn(e){return e.replace(Cl,"-").replace(Nl,"")}var Pl=function(e){return pr(po(e)>>>0)};function un(e){return typeof e=="string"&&!0}var hr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ll=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Il(e,t,n){var r=e[n];hr(t)&&hr(r)?go(r,t):e[n]=t}function go(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(hr(o))for(var s in o)Ll(s)&&Il(e,o[s],s)}return e}var vo=Ot.createContext();vo.Consumer;var Kn={};function bo(e,t,n){var r=Hr(e),a=!un(e),i=t.attrs,o=i===void 0?xn:i,s=t.componentId,u=s===void 0?function(w,R){var P=typeof w!="string"?"sc":Vn(w);Kn[P]=(Kn[P]||0)+1;var D=P+"-"+Pl("5.3.11"+P+Kn[P]);return R?R+"-"+D:D}(t.displayName,t.parentComponentId):s,c=t.displayName,m=c===void 0?function(w){return un(w)?"styled."+w:"Styled("+Ca(w)+")"}(e):c,A=t.displayName&&t.componentId?Vn(t.displayName)+"-"+t.componentId:t.componentId||u,k=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,I=t.shouldForwardProp;r&&e.shouldForwardProp&&(I=t.shouldForwardProp?function(w,R,P){return e.shouldForwardProp(w,R,P)&&t.shouldForwardProp(w,R,P)}:e.shouldForwardProp);var x,_=new hl(n,A,r?e.componentStyle:void 0),h=_.isStatic&&o.length===0,S=function(w,R){return function(P,D,Q,J){var V=P.attrs,ne=P.componentStyle,se=P.defaultProps,Ie=P.foldedComponentIds,me=P.shouldForwardProp,ee=P.styledComponentId,ye=P.target,le=function(C,f,L){C===void 0&&(C=rt);var b=Ve({},f,{theme:C}),G={};return L.forEach(function($){var q,F,ie,re=$;for(q in Kt(re)&&(re=re(b)),re)b[q]=G[q]=q==="className"?(F=G[q],ie=re[q],F&&ie?F+" "+ie:F||ie):re[q]}),[b,G]}(Ol(D,B.useContext(vo),se)||rt,D,V),He=le[0],Se=le[1],xe=function(C,f,L,b){var G=xl(),$=wl(),q=f?C.generateAndInjectStyles(rt,G,$):C.generateAndInjectStyles(L,G,$);return q}(ne,J,He),lt=Q,We=Se.$as||D.$as||Se.as||D.as||ye,ct=un(We),O=Se!==D?Ve({},D,{},Se):D,v={};for(var E in O)E[0]!=="$"&&E!=="as"&&(E==="forwardedAs"?v.as=O[E]:(me?me(E,ka,We):!ct||ka(E))&&(v[E]=O[E]));return D.style&&Se.style!==D.style&&(v.style=Ve({},D.style,{},Se.style)),v.className=Array.prototype.concat(Ie,ee,xe!==ee?xe:null,D.className,Se.className).filter(Boolean).join(" "),v.ref=lt,B.createElement(We,v)}(x,w,R,h)};return S.displayName=m,(x=Ot.forwardRef(S)).attrs=k,x.componentStyle=_,x.displayName=m,x.shouldForwardProp=I,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):xn,x.styledComponentId=A,x.target=r?e.target:e,x.withComponent=function(w){var R=t.componentId,P=function(Q,J){if(Q==null)return{};var V,ne,se={},Ie=Object.keys(Q);for(ne=0;ne<Ie.length;ne++)V=Ie[ne],J.indexOf(V)>=0||(se[V]=Q[V]);return se}(t,["componentId"]),D=R&&R+"-"+(un(w)?w:Vn(Ca(w)));return bo(w,Ve({},P,{attrs:k,componentId:D}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?go({},e.defaultProps,w):w}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),a&&Qs(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ve=function(e){return function t(n,r,a){if(a===void 0&&(a=rt),!Ur.isValidElementType(r))return Jt(1,String(r));var i=function(){return n(r,a,_l.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,Ve({},a,{},o))},i.attrs=function(o){return t(n,r,Ve({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(bo,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ve[e]=ve(e)});const Rl=ve.a`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  color: #191919;
  padding: 0.5rem 1rem;
  border-radius: 400rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: 0.03s ease-in-out;
  cursor: pointer;
  & + a {
    margin-left: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
  &.button-light {
    background-color: #bfbfbf !important;
    color: #000000 !important;
  }
  &.button-gold {
    background-color: #ffc627 !important;
    color: #000000 !important;
  }
  &.button-dark {
    background-color: #191919 !important;
    color: #ffffff !important;
  }
  &.button-maroon {
    background-color: #8c1d40 !important;
    color: #ffffff !important;
  }
`,Ct=({href:e,color:t,text:n,classes:r,onClick:a})=>p.jsx(Rl,{href:e,...e?{}:{tabIndex:0},className:`button-${t} ${r??""}`,onClick:a,children:n});Ct.propTypes={..._n};Ct.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const en=[{href:"/",text:"Home",type:"icon-home",selected:!0,class:"test-class"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu",text:"Sublink 2"},{href:"https://campus.asu.edu",text:"Sublink 3"},{href:"https://campus.asu.edu",text:"Sublink 4"},{href:"https://asuonline.asu.edu/",text:"Sublink 5"},{href:"https://havasu.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 3",href:"#"},{text:"Link option 4",href:"#"},{text:"Link option 5",href:"#"},{text:"Link option 6",href:"#",onClick:()=>{alert("On Click Callback")}},{text:"Link option 7",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 8",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]}],Ml=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#",items:[[{href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://www.asu.edu",text:"Sublink 2"},{href:"https://www.asu.edu",text:"Sublink 3"},{href:"https://www.asu.edu",text:"Sublink 4"},{href:"https://www.asu.edu",text:"Sublink 5"},{href:"https://www.asu.edu",text:"Sublink 6"},{href:"https://www.asu.edu",text:"Sublink 7"},{href:"https://www.asu.edu",text:"Sublink 8"}]]},{text:"Link option 2",href:"#",selected:!0},{text:"Link option 3",href:"#",items:[[{classes:"border first",href:"https://www.asu.edu",text:"Sublink 1"},{href:"https://campus.asu.edu/",text:"Sublink 2"},{href:"https://campus.asu.edu/",text:"Sublink 3"},{href:"https://campus.asu.edu/",text:"Sublink 4"},{href:"https://campus.asu.edu/",text:"Sublink 5"},{href:"https://asuonline.asu.edu/",text:"Sublink 6"}]]},{text:"Link option 4",href:"#"}],yo=[{href:"/",text:"Home",type:"icon-home",class:"home"},{text:"Link option 1",href:"#"},{text:"Link option 2",href:"/",items:[[{href:"https://www.asu.edu/",text:"A test navigation item"},{href:"https://www.asu.edu/",text:"Mauris viverra, sem nec"},{href:"https://www.asu.edu/?feature=athletics",text:"Massa nunc dictum nam venenatis"},{href:"https://www.asu.edu/?feature=alumni",text:"Alumni"},{href:"https://www.asu.edu/?feature=giving",text:"Giving"},{href:"https://www.asu.edu/?feature=president",text:"President"},{href:"https://www.asu.edu/about",text:"About ASU"}]]},{text:"Link option 3",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.asu.edu/?feature=athletics",text:"Aenean pharetra"},{href:"https://www.asu.edu/?feature=alumni",text:"Pellentesque"},{href:"https://www.asu.edu/?feature=giving",text:"Donec sagittis nulla"},{href:"https://www.asu.edu/?feature=president",text:"Quisque fringilla"},{href:"https://www.asu.edu/about",text:"Integer vel gravida lectus"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"},{href:"https://www.asu.edu/?feature=research",text:"Maecenas quam elit"},{href:"https://www.asu.edu/?feature=academics",text:"Ut at vehicula neque"},{href:"https://www.asu.edu/?feature=athletics",type:"button",text:"Sed molestie"}]]},{text:"Link option 4",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column one"},{href:"https://havasu.asu.edu/",text:"Curabitur viverra arcu nisl"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Phasellus egestas nec est "},{href:"https://campus.asu.edu/tempe/",text:"Pellentesque et mollis"},{href:"https://campus.asu.edu/west/",text:"Cras congue"},{href:"https://campus.asu.edu/polytechnic/",text:"Cras ut malesuada nisl"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Map"},{href:"https://campus.asu.edu/tempe/",text:"Tempe"},{href:"https://campus.asu.edu/west/",text:"West"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 5",href:"#",items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"Lake Havasu"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}]]},{text:"Link option 6",href:"#",buttons:[{text:"CTA One",href:"https://asu.edu",color:"maroon"},{text:"CTA Two",href:"https://asu.edu",color:"gold"}],items:[[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column One"},{href:"https://havasu.asu.edu/",text:"The Lake Havasu Campus"},{href:"https://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona",classes:"border",text:"Thunderbird"},{href:"https://skysong.asu.edu/",text:"Skysong"},{href:"https://asuresearchpark.com/",text:"Research Park"},{href:"https://washingtoncenter.asu.edu/",text:"Washington D.C."},{href:"https://wpcarey.asu.edu/mba/china-program/english/",text:"China"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Call to Action"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column two"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Faculty and Staff Directory"},{href:"https://campus.asu.edu/tempe/",text:"The Tempe Campus"},{href:"https://campus.asu.edu/west/",text:"Sun Devils and Things"},{href:"https://campus.asu.edu/polytechnic/",text:"Another nav link"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Action Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column three"},{classes:"border first",href:"https://www.asu.edu/map/",text:"University Technology Office"},{href:"https://campus.asu.edu/tempe/",text:"Sun Devil Football"},{href:"https://campus.asu.edu/west/",text:"The School of Something"},{href:"https://campus.asu.edu/polytechnic/",text:"Polytechnic"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Another Button"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column four"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Maps and Directions"},{href:"https://campus.asu.edu/tempe/",text:"Office of the technology"},{href:"https://campus.asu.edu/west/",text:"Office of the business"},{href:"https://campus.asu.edu/polytechnic/",text:"Some longer text office of longtext"},{href:"https://campus.asu.edu/downtown/",type:"button",text:"Downtown Phoenix"}],[{href:"https://asuonline.asu.edu/",type:"heading",text:"Column Five"},{classes:"border first",href:"https://www.asu.edu/map/",text:"Buildings and directory"},{href:"https://campus.asu.edu/tempe/",text:"Some good news"},{href:"https://campus.asu.edu/west/",selected:!0,text:"Directory Admin Tools"}]]}],Dl=[{href:"/",text:"This",type:"icon-home",class:"home",selected:!0},{text:"Link option 1",href:"https://webapp4.asu.edu/myasu/"},{text:"Link option 2",href:"/",items:[[{type:"heading",text:"Column One"},{href:"https://www.asu.edu/",text:"Pellentesque ornare"},{href:"https://www.asu.edu/",text:"Curabitur viverra arcu nisl"}],[{href:"https://www.asu.edu/?feature=newsevents",type:"heading",text:"Column Two"},{href:"https://www.asu.edu/?feature=academics",text:"Nunc in libero odio"}]]}];function Fl({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const jl={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},zl={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Ul=zl,$l={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ma=$l,ql={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Hl={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},xo=Hl,Da=()=>{};let Br={},wo={},Ao=null,So={mark:Da,measure:Da};try{typeof window<"u"&&(Br=window),typeof document<"u"&&(wo=document),typeof MutationObserver<"u"&&(Ao=MutationObserver),typeof performance<"u"&&(So=performance)}catch{}const{userAgent:Fa=""}=Br.navigator||{},it=Br,X=wo,ja=Ao,fn=So;it.document;const Qe=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",ko=~Fa.indexOf("MSIE")||~Fa.indexOf("Trident/");var Z="classic",To="duotone",ke="sharp",Te="sharp-duotone",Wl=[Z,To,ke,Te],Bl={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},za={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Gl=["kit"],Yl=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Xl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Vl={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Kl={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Zl={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Ql={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Jl={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ec={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Eo={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},tc=["solid","regular","light","thin","duotone","brands"],_o=[1,2,3,4,5,6,7,8,9,10],nc=_o.concat([11,12,13,14,15,16,17,18,19,20]),Rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rc=[...Object.keys(Ql),...tc,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rt.GROUP,Rt.SWAP_OPACITY,Rt.PRIMARY,Rt.SECONDARY].concat(_o.map(e=>"".concat(e,"x"))).concat(nc.map(e=>"w-".concat(e))),ac={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ic={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},oc={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ua={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ke="___FONT_AWESOME___",gr=16,Oo="fa",Co="svg-inline--fa",gt="data-fa-i2svg",vr="data-fa-pseudo-element",sc="data-fa-pseudo-element-pending",Gr="data-prefix",Yr="data-icon",$a="fontawesome-i2svg",lc="async",cc=["HTML","HEAD","STYLE","SCRIPT"],No=(()=>{try{return!0}catch{return!1}})(),Po=[Z,ke,Te];function tn(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Z]}})}const Lo={...Eo};Lo[Z]={...Eo[Z],...za.kit,...za["kit-duotone"]};const mt=tn(Lo),br={...ec};br[Z]={...br[Z],...Ua.kit,...Ua["kit-duotone"]};const Zt=tn(br),yr={...Jl};yr[Z]={...yr[Z],...oc.kit};const ht=tn(yr),xr={...Zl};xr[Z]={...xr[Z],...ic.kit};const uc=tn(xr),fc=Yl,Io="fa-layers-text",dc=Xl,pc={...Bl};tn(pc);const mc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zn=Rt,Et=new Set;Object.keys(Zt[Z]).map(Et.add.bind(Et));Object.keys(Zt[ke]).map(Et.add.bind(Et));Object.keys(Zt[Te]).map(Et.add.bind(Et));const hc=[...Gl,...rc],Xt=it.FontAwesomeConfig||{};function gc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}X&&typeof X.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=vc(gc(n));a!=null&&(Xt[r]=a)});const Ro={styleDefault:"solid",familyDefault:"classic",cssPrefix:Oo,replacementClass:Co,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);const _t={...Ro,...Xt};_t.autoReplaceSvg||(_t.observeMutations=!1);const T={};Object.keys(Ro).forEach(e=>{Object.defineProperty(T,e,{enumerable:!0,set:function(t){_t[e]=t,Vt.forEach(n=>n(T))},get:function(){return _t[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(e){_t.cssPrefix=e,Vt.forEach(t=>t(T))},get:function(){return _t.cssPrefix}});it.FontAwesomeConfig=T;const Vt=[];function bc(e){return Vt.push(e),()=>{Vt.splice(Vt.indexOf(e),1)}}const et=gr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yc(e){if(!e||!Qe)return;const t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=X.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}const xc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qt(){let e=12,t="";for(;e-- >0;)t+=xc[Math.random()*62|0];return t}function Nt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xr(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Mo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wc(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Mo(e[n]),'" '),"").trim()}function jn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Vr(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Ac(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:c}}function Sc(e){let{transform:t,width:n=gr,height:r=gr,startCentered:a=!1}=e,i="";return a&&ko?i+="translate(".concat(t.x/et-n/2,"em, ").concat(t.y/et-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):i+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),i+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var kc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Do(){const e=Oo,t=Co,n=T.cssPrefix,r=T.replacementClass;let a=kc;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let qa=!1;function Qn(){T.autoAddCss&&!qa&&(yc(Do()),qa=!0)}var Tc={mixout(){return{dom:{css:Do,insertCss:Qn}}},hooks(){return{beforeDOMElementCreation(){Qn()},beforeI2svg(){Qn()}}}};const Ze=it||{};Ze[Ke]||(Ze[Ke]={});Ze[Ke].styles||(Ze[Ke].styles={});Ze[Ke].hooks||(Ze[Ke].hooks={});Ze[Ke].shims||(Ze[Ke].shims=[]);var ze=Ze[Ke];const Fo=[],jo=function(){X.removeEventListener("DOMContentLoaded",jo),An=1,Fo.map(e=>e())};let An=!1;Qe&&(An=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),An||X.addEventListener("DOMContentLoaded",jo));function Ec(e){Qe&&(An?setTimeout(e,0):Fo.push(e))}function nn(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Mo(e):"<".concat(t," ").concat(wc(n),">").concat(r.map(nn).join(""),"</").concat(t,">")}function Ha(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,u,c,m;for(r===void 0?(u=1,m=t[i[0]]):(u=0,m=r);u<o;u++)c=i[u],m=s(m,t[c],c,t);return m};function _c(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function wr(e){const t=_c(e);return t.length===1?t[0].toString(16):null}function Oc(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Wa(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ar(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Wa(t);typeof ze.hooks.addPack=="function"&&!r?ze.hooks.addPack(e,Wa(t)):ze.styles[e]={...ze.styles[e]||{},...a},e==="fas"&&Ar("fa",t)}const{styles:pt,shims:Cc}=ze,Nc={[Z]:Object.values(ht[Z]),[ke]:Object.values(ht[ke]),[Te]:Object.values(ht[Te])};let Kr=null,zo={},Uo={},$o={},qo={},Ho={};const Pc={[Z]:Object.keys(mt[Z]),[ke]:Object.keys(mt[ke]),[Te]:Object.keys(mt[Te])};function Lc(e){return~hc.indexOf(e)}function Ic(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Lc(a)?a:null}const Wo=()=>{const e=r=>Jn(pt,(a,i,o)=>(a[o]=Jn(i,r,{}),a),{});zo=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),Uo=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),Ho=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});const t="far"in pt||T.autoFetchSvg,n=Jn(Cc,(r,a)=>{const i=a[0];let o=a[1];const s=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});$o=n.names,qo=n.unicodes,Kr=zn(T.styleDefault,{family:T.familyDefault})};bc(e=>{Kr=zn(e.styleDefault,{family:T.familyDefault})});Wo();function Zr(e,t){return(zo[e]||{})[t]}function Rc(e,t){return(Uo[e]||{})[t]}function nt(e,t){return(Ho[e]||{})[t]}function Bo(e){return $o[e]||{prefix:null,iconName:null}}function Mc(e){const t=qo[e],n=Zr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ot(){return Kr}const Qr=()=>({prefix:null,iconName:null,rest:[]});function zn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Z}=t,r=mt[n][e],a=Zt[n][e]||Zt[n][r],i=e in ze.styles?e:null;return a||i||null}const Dc={[Z]:Object.keys(ht[Z]),[ke]:Object.keys(ht[ke]),[Te]:Object.keys(ht[Te])};function Un(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[Z]:"".concat(T.cssPrefix,"-").concat(Z),[ke]:"".concat(T.cssPrefix,"-").concat(ke),[Te]:"".concat(T.cssPrefix,"-").concat(Te)};let a=null,i=Z;const o=Wl.filter(u=>u!==To);o.forEach(u=>{(e.includes(r[u])||e.some(c=>Dc[u].includes(c)))&&(i=u)});const s=e.reduce((u,c)=>{const m=Ic(T.cssPrefix,c);if(pt[c]?(c=Nc[i].includes(c)?uc[i][c]:c,a=c,u.prefix=c):Pc[i].indexOf(c)>-1?(a=c,u.prefix=zn(c,{family:i})):m?u.iconName=m:c!==T.replacementClass&&!o.some(A=>c===r[A])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const A=a==="fa"?Bo(u.iconName):{},k=nt(u.prefix,u.iconName);A.prefix&&(a=null),u.iconName=A.iconName||k||u.iconName,u.prefix=A.prefix||u.prefix,u.prefix==="far"&&!pt.far&&pt.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},Qr());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===ke&&(pt.fass||T.autoFetchSvg)&&(s.prefix="fass",s.iconName=nt(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===Te&&(pt.fasds||T.autoFetchSvg)&&(s.prefix="fasds",s.iconName=nt(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=ot()||"fas"),s}class Fc{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},Ar(i,a[i]);const o=ht[Z][i];o&&Ar(o,a[i]),Wo()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:s}=r[a],u=s[2];t[i]||(t[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(t[i][c]=s)}),t[i][o]=s}),t}}let Ba=[],wt={};const St={},jc=Object.keys(St);function zc(e,t){let{mixoutsTo:n}=t;return Ba=e,wt={},Object.keys(St).forEach(r=>{jc.indexOf(r)===-1&&delete St[r]}),Ba.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{wt[o]||(wt[o]=[]),wt[o].push(i[o])})}r.provides&&r.provides(St)}),n}function Sr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(wt[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(wt[e]||[]).forEach(i=>{i.apply(null,n)})}function st(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return St[e]?St[e].apply(null,t):void 0}function kr(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ot();if(t)return t=nt(n,t)||t,Ha(Go.definitions,n,t)||Ha(ze.styles,n,t)}const Go=new Fc,Uc=()=>{T.autoReplaceSvg=!1,T.observeMutations=!1,vt("noAuto")},$c={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(vt("beforeI2svg",e),st("pseudoElements2svg",e),st("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Ec(()=>{Hc({autoReplaceSvgRoot:t}),vt("watch",e)})}},qc={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:nt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=zn(e[0]);return{prefix:n,iconName:nt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(T.cssPrefix,"-"))>-1||e.match(fc))){const t=Un(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ot(),iconName:nt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ot();return{prefix:t,iconName:nt(t,e)||e}}}},_e={noAuto:Uc,config:T,dom:$c,parse:qc,library:Go,findIconDefinition:kr,toHtml:nn},Hc=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=X}=e;(Object.keys(ze.styles).length>0||T.autoFetchSvg)&&Qe&&T.autoReplaceSvg&&_e.dom.i2svg({node:t})};function $n(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>nn(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Qe)return;const n=X.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Wc(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(Vr(o)&&n.found&&!r.found){const{width:s,height:u}=n,c={x:s/u/2,y:.5};a.style=jn({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function Bc(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:r}]}]}function Jr(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:u,titleId:c,extra:m,watchable:A=!1}=e,{width:k,height:I}=n.found?n:t,x=r==="fak",_=[T.replacementClass,a?"".concat(T.cssPrefix,"-").concat(a):""].filter(D=>m.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(m.classes).join(" ");let h={children:[],attributes:{...m.attributes,"data-prefix":r,"data-icon":a,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(I)}};const S=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/I*16*.0625,"em")}:{};A&&(h.attributes[gt]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Qt())},children:[s]}),delete h.attributes.title);const w={...h,prefix:r,iconName:a,main:t,mask:n,maskId:u,transform:i,symbol:o,styles:{...S,...m.styles}},{children:R,attributes:P}=n.found&&t.found?st("generateAbstractMask",w)||{children:[],attributes:{}}:st("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=R,w.attributes=P,o?Bc(w):Wc(w)}function Ga(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,u={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(u[gt]="");const c={...o.styles};Vr(a)&&(c.transform=Sc({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const m=jn(c);m.length>0&&(u.style=m);const A=[];return A.push({tag:"span",attributes:u,children:[t]}),i&&A.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),A}function Gc(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=jn(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:er}=ze;function Tr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Zn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Zn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Zn.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const Yc={found:!1,width:512,height:512};function Xc(e,t){!No&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Er(e,t){let n=t;return t==="fa"&&T.styleDefault!==null&&(t=ot()),new Promise((r,a)=>{if(n==="fa"){const i=Bo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&er[t]&&er[t][e]){const i=er[t][e];return r(Tr(i))}Xc(e,t),r({...Yc,icon:T.showMissingIcons&&e?st("missingIconAbstract")||{}:{}})})}const Ya=()=>{},_r=T.measurePerformance&&fn&&fn.mark&&fn.measure?fn:{mark:Ya,measure:Ya},Mt='FA "6.6.0"',Vc=e=>(_r.mark("".concat(Mt," ").concat(e," begins")),()=>Yo(e)),Yo=e=>{_r.mark("".concat(Mt," ").concat(e," ends")),_r.measure("".concat(Mt," ").concat(e),"".concat(Mt," ").concat(e," begins"),"".concat(Mt," ").concat(e," ends"))};var ea={begin:Vc,end:Yo};const gn=()=>{};function Xa(e){return typeof(e.getAttribute?e.getAttribute(gt):null)=="string"}function Kc(e){const t=e.getAttribute?e.getAttribute(Gr):null,n=e.getAttribute?e.getAttribute(Yr):null;return t&&n}function Zc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Qc(){return T.autoReplaceSvg===!0?vn.replace:vn[T.autoReplaceSvg]||vn.replace}function Jc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function eu(e){return X.createElement(e)}function Xo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Jc:eu}=t;if(typeof e=="string")return X.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(Xo(i,{ceFn:n}))}),r}function tu(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const vn={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Xo(n),t)}),t.getAttribute(gt)===null&&T.keepOriginalSource){let n=X.createComment(tu(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Xr(t).indexOf(T.replacementClass))return vn.replace(e);const r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===T.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>nn(i)).join(`
`);t.setAttribute(gt,""),t.innerHTML=a}};function Va(e){e()}function Vo(e,t){const n=typeof t=="function"?t:gn;if(e.length===0)n();else{let r=Va;T.mutateApproach===lc&&(r=it.requestAnimationFrame||Va),r(()=>{const a=Qc(),i=ea.begin("mutate");e.map(a),i(),n()})}}let ta=!1;function Ko(){ta=!0}function Or(){ta=!1}let Sn=null;function Ka(e){if(!ja||!T.observeMutations)return;const{treeCallback:t=gn,nodeCallback:n=gn,pseudoElementsCallback:r=gn,observeMutationsRoot:a=X}=e;Sn=new ja(i=>{if(ta)return;const o=ot();Nt(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Xa(s.addedNodes[0])&&(T.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&T.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&Xa(s.target)&&~mc.indexOf(s.attributeName))if(s.attributeName==="class"&&Kc(s.target)){const{prefix:u,iconName:c}=Un(Xr(s.target));s.target.setAttribute(Gr,u||o),c&&s.target.setAttribute(Yr,c)}else Zc(s.target)&&n(s.target)})}),Qe&&Sn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function nu(){Sn&&Sn.disconnect()}function ru(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function au(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=Un(Xr(e));return a.prefix||(a.prefix=ot()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Rc(a.prefix,e.innerText)||Zr(a.prefix,wr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function iu(e){const t=Nt(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function ou(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=au(e),i=iu(e),o=Sr("parseNodeAttributes",{},e);let s=t.styleParser?ru(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i},...o}}const{styles:su}=ze;function Zo(e){const t=T.autoReplaceSvg==="nest"?Za(e,{styleParser:!1}):Za(e);return~t.extra.classes.indexOf(Io)?st("generateLayersText",e,t):st("generateSvgReplacementMutation",e,t)}let Ue=new Set;Po.map(e=>{Ue.add("fa-".concat(e))});Object.keys(mt[Z]).map(Ue.add.bind(Ue));Object.keys(mt[ke]).map(Ue.add.bind(Ue));Object.keys(mt[Te]).map(Ue.add.bind(Ue));Ue=[...Ue];function Qa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();const n=X.documentElement.classList,r=m=>n.add("".concat($a,"-").concat(m)),a=m=>n.remove("".concat($a,"-").concat(m)),i=T.autoFetchSvg?Ue:Po.map(m=>"fa-".concat(m)).concat(Object.keys(su));i.includes("fa")||i.push("fa");const o=[".".concat(Io,":not([").concat(gt,"])")].concat(i.map(m=>".".concat(m,":not([").concat(gt,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Nt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const u=ea.begin("onTree"),c=s.reduce((m,A)=>{try{const k=Zo(A);k&&m.push(k)}catch(k){No||k.name==="MissingIcon"&&console.error(k)}return m},[]);return new Promise((m,A)=>{Promise.all(c).then(k=>{Vo(k,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),u(),m()})}).catch(k=>{u(),A(k)})})}function lu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zo(e).then(n=>{n&&Vo([n],t)})}function cu(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:kr(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:kr(a||{})),e(r,{...n,mask:a})}}const uu=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=je,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:m={}}=t;if(!e)return;const{prefix:A,iconName:k,icon:I}=e;return $n({type:"icon",...e},()=>(vt("beforeDOMElementCreation",{iconDefinition:e,params:t}),T.autoA11y&&(o?c["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(s||Qt()):(c["aria-hidden"]="true",c.focusable="false")),Jr({icons:{main:Tr(I),mask:a?Tr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:k,transform:{...je,...n},symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:m,classes:u}})))};var fu={mixout(){return{icon:cu(uu)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Qa,e.nodeCallback=lu,e}}},provides(e){e.i2svg=function(t){const{node:n=X,callback:r=()=>{}}=t;return Qa(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:u,mask:c,maskId:m,extra:A}=n;return new Promise((k,I)=>{Promise.all([Er(r,o),c.iconName?Er(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[_,h]=x;k([t,Jr({icons:{main:_,mask:h},prefix:o,iconName:r,transform:s,symbol:u,maskId:m,title:a,titleId:i,extra:A,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const s=jn(o);s.length>0&&(r.style=s);let u;return Vr(i)&&(u=st("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},du={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return $n({type:"layer"},()=>{vt("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},pu={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return $n({type:"counter",content:e},()=>(vt("beforeDOMElementCreation",{content:e,params:t}),Gc({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(T.cssPrefix,"-layers-counter"),...r]}})))}}}},mu={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=je,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return $n({type:"text",content:e},()=>(vt("beforeDOMElementCreation",{content:e,params:t}),Ga({content:e,transform:{...je,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(T.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,s=null;if(ko){const u=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/u,s=c.height/u}return T.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Ga({content:t.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}};const hu=new RegExp('"',"ug"),Ja=[1105920,1112319],ei={FontAwesome:{normal:"fas",400:"fas"},...Kl,...Vl,...ac},Cr=Object.keys(ei).reduce((e,t)=>(e[t.toLowerCase()]=ei[t],e),{}),gu=Object.keys(Cr).reduce((e,t)=>{const n=Cr[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function vu(e){const t=e.replace(hu,""),n=Oc(t,0),r=n>=Ja[0]&&n<=Ja[1],a=t.length===2?t[0]===t[1]:!1;return{value:wr(a?t[0]:t),isSecondary:r||a}}function bu(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Cr[n]||{})[a]||gu[n]}function ti(e,t){const n="".concat(sc).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=Nt(e.children).filter(k=>k.getAttribute(vr)===t)[0],s=it.getComputedStyle(e,t),u=s.getPropertyValue("font-family"),c=u.match(dc),m=s.getPropertyValue("font-weight"),A=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&A!=="none"&&A!==""){const k=s.getPropertyValue("content");let I=bu(u,m);const{value:x,isSecondary:_}=vu(k),h=c[0].startsWith("FontAwesome");let S=Zr(I,x),w=S;if(h){const R=Mc(x);R.iconName&&R.prefix&&(S=R.iconName,I=R.prefix)}if(S&&!_&&(!o||o.getAttribute(Gr)!==I||o.getAttribute(Yr)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);const R=ou(),{extra:P}=R;P.attributes[vr]=t,Er(S,I).then(D=>{const Q=Jr({...R,icons:{main:D,mask:Qr()},prefix:I,iconName:w,extra:P,watchable:!0}),J=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(J,e.firstChild):e.appendChild(J),J.outerHTML=Q.map(V=>nn(V)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yu(e){return Promise.all([ti(e,"::before"),ti(e,"::after")])}function xu(e){return e.parentNode!==document.head&&!~cc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ni(e){if(Qe)return new Promise((t,n)=>{const r=Nt(e.querySelectorAll("*")).filter(xu).map(yu),a=ea.begin("searchPseudoElements");Ko(),Promise.all(r).then(()=>{a(),Or(),t()}).catch(()=>{a(),Or(),n()})})}var wu={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=ni,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=X}=t;T.searchPseudoElements&&ni(n)}}};let ri=!1;var Au={mixout(){return{dom:{unwatch(){Ko(),ri=!0}}}},hooks(){return{bootstrap(){Ka(Sr("mutationObserverCallbacks",{}))},noAuto(){nu()},watch(e){const{observeMutationsRoot:t}=e;ri?Or():Ka(Sr("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ai=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Su={mixout(){return{parse:{transform:e=>ai(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ai(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(c)},A={transform:"translate(".concat(i/2*-1," -256)")},k={outer:o,inner:m,path:A};return{tag:"g",attributes:{...k.outer},children:[{tag:"g",attributes:{...k.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...k.path}}]}]}}}};const tr={x:0,y:0,width:"100%",height:"100%"};function ii(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ku(e){return e.tag==="g"?e.children:[e]}var Tu={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Un(n.split(" ").map(a=>a.trim())):Qr();return r.prefix||(r.prefix=ot()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:s}=t;const{width:u,icon:c}=a,{width:m,icon:A}=i,k=Ac({transform:s,containerWidth:m,iconWidth:u}),I={tag:"rect",attributes:{...tr,fill:"white"}},x=c.children?{children:c.children.map(ii)}:{},_={tag:"g",attributes:{...k.inner},children:[ii({tag:c.tag,attributes:{...c.attributes,...k.path},...x})]},h={tag:"g",attributes:{...k.outer},children:[_]},S="mask-".concat(o||Qt()),w="clip-".concat(o||Qt()),R={tag:"mask",attributes:{...tr,id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[I,h]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:ku(A)},R]};return n.push(P,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(S,")"),...tr}}),{children:n,attributes:r}}}},Eu={provides(e){let t=!1;it.matchMedia&&(t=it.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},_u={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Ou=[Tc,fu,du,pu,mu,wu,Au,Su,Tu,Eu,_u];zc(Ou,{mixoutsTo:_e});_e.noAuto;_e.config;_e.library;_e.dom;const Nr=_e.parse;_e.findIconDefinition;_e.toHtml;const Cu=_e.icon;_e.layer;_e.text;_e.counter;function oi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oi(Object(n),!0).forEach(function(r){At(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kn(e){"@babel/helpers - typeof";return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(e)}function At(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Pu(e,t){if(e==null)return{};var n=Nu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Pr(e){return Lu(e)||Iu(e)||Ru(e)||Mu()}function Lu(e){if(Array.isArray(e))return Lr(e)}function Iu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ru(e,t){if(e){if(typeof e=="string")return Lr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lr(e,t)}}function Lr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Du(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,u=e.spin,c=e.spinPulse,m=e.spinReverse,A=e.pulse,k=e.fixedWidth,I=e.inverse,x=e.border,_=e.listItem,h=e.flip,S=e.size,w=e.rotation,R=e.pull,P=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":A,"fa-fw":k,"fa-inverse":I,"fa-border":x,"fa-li":_,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},At(t,"fa-".concat(S),typeof S<"u"&&S!==null),At(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),At(t,"fa-pull-".concat(R),typeof R<"u"&&R!==null),At(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(P).map(function(D){return P[D]?D:null}).filter(function(D){return D})}function Fu(e){return e=e-0,e===e}function Qo(e){return Fu(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ju=["style"];function zu(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Uu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Qo(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[zu(a)]=i:t[a]=i,t},{})}function Jo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Jo(e,u)}),a=Object.keys(t.attributes||{}).reduce(function(u,c){var m=t.attributes[c];switch(c){case"class":u.attrs.className=m,delete t.attributes.class;break;case"style":u.attrs.style=Uu(m);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=m:u.attrs[Qo(c)]=m}return u},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Pu(n,ju);return a.attrs.style=Fe(Fe({},a.attrs.style),o),e.apply(void 0,[t.tag,Fe(Fe({},a.attrs),s)].concat(Pr(r)))}var es=!1;try{es=!0}catch{}function $u(){if(!es&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function si(e){if(e&&kn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Nr.icon)return Nr.icon(e);if(e===null)return null;if(e&&kn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function nr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?At({},e,t):{}}var li={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},at=Ot.forwardRef(function(e,t){var n=Fe(Fe({},li),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,u=n.titleId,c=n.maskId,m=si(r),A=nr("classes",[].concat(Pr(Du(n)),Pr((o||"").split(" ")))),k=nr("transform",typeof n.transform=="string"?Nr.transform(n.transform):n.transform),I=nr("mask",si(a)),x=Cu(m,Fe(Fe(Fe(Fe({},A),k),I),{},{symbol:i,title:s,titleId:u,maskId:c}));if(!x)return $u("Could not find icon",m),null;var _=x.abstract,h={ref:t};return Object.keys(n).forEach(function(S){li.hasOwnProperty(S)||(h[S]=n[S])}),qu(_[0],h)});at.displayName="FontAwesomeIcon";at.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var qu=Jo.bind(null,Ot.createElement);function tt(e){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(e)}function Ir(e,t){return Ir=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},Ir(e,t)}function Hu(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bn(e,t,n){return Hu()?bn=Reflect.construct:bn=function(a,i,o){var s=[null];s.push.apply(s,i);var u=Function.bind.apply(a,s),c=new u;return o&&Ir(c,o.prototype),c},bn.apply(null,arguments)}function Me(e){return Wu(e)||Bu(e)||Gu(e)||Yu()}function Wu(e){if(Array.isArray(e))return Rr(e)}function Bu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gu(e,t){if(e){if(typeof e=="string")return Rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(e,t)}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xu=Object.hasOwnProperty,ci=Object.setPrototypeOf,Vu=Object.isFrozen,Ku=Object.getPrototypeOf,Zu=Object.getOwnPropertyDescriptor,be=Object.freeze,Pe=Object.seal,Qu=Object.create,ts=typeof Reflect<"u"&&Reflect,Tn=ts.apply,Mr=ts.construct;Tn||(Tn=function(t,n,r){return t.apply(n,r)});be||(be=function(t){return t});Pe||(Pe=function(t){return t});Mr||(Mr=function(t,n){return bn(t,Me(n))});var Ju=Le(Array.prototype.forEach),ui=Le(Array.prototype.pop),It=Le(Array.prototype.push),yn=Le(String.prototype.toLowerCase),rr=Le(String.prototype.toString),fi=Le(String.prototype.match),Re=Le(String.prototype.replace),ef=Le(String.prototype.indexOf),tf=Le(String.prototype.trim),de=Le(RegExp.prototype.test),ar=nf(TypeError);function Le(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return Tn(e,t,r)}}function nf(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Mr(e,n)}}function j(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:yn,ci&&ci(e,null);for(var a=t.length;a--;){var i=t[a];if(typeof i=="string"){var o=n(i);o!==i&&(Vu(t)||(t[a]=o),i=o)}e[i]=!0}return e}function dt(e){var t=Qu(null),n;for(n in e)Tn(Xu,e,[n])===!0&&(t[n]=e[n]);return t}function dn(e,t){for(;e!==null;){var n=Zu(e,t);if(n){if(n.get)return Le(n.get);if(typeof n.value=="function")return Le(n.value)}e=Ku(e)}function r(a){return console.warn("fallback value for",a),null}return r}var di=be(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ir=be(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),or=be(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),rf=be(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),sr=be(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),af=be(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),pi=be(["#text"]),mi=be(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),lr=be(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),hi=be(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),pn=be(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),of=Pe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),sf=Pe(/<%[\w\W]*|[\w\W]*%>/gm),lf=Pe(/\${[\w\W]*}/gm),cf=Pe(/^data-[\-\w.\u00B7-\uFFFF]/),uf=Pe(/^aria-[\-\w]+$/),ff=Pe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),df=Pe(/^(?:\w+script|data):/i),pf=Pe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),mf=Pe(/^html$/i),hf=Pe(/^[a-z][.\w]*(-[.\w]+)+$/i),gf=function(){return typeof window>"u"?null:window},vf=function(t,n){if(tt(t)!=="object"||typeof t.createPolicy!="function")return null;var r=null,a="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(a)&&(r=n.currentScript.getAttribute(a));var i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML:function(s){return s},createScriptURL:function(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function ns(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gf(),t=function(l){return ns(l)};if(t.version="2.5.7",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,r=e.document,a=e.DocumentFragment,i=e.HTMLTemplateElement,o=e.Node,s=e.Element,u=e.NodeFilter,c=e.NamedNodeMap,m=c===void 0?e.NamedNodeMap||e.MozNamedAttrMap:c,A=e.HTMLFormElement,k=e.DOMParser,I=e.trustedTypes,x=s.prototype,_=dn(x,"cloneNode"),h=dn(x,"nextSibling"),S=dn(x,"childNodes"),w=dn(x,"parentNode");if(typeof i=="function"){var R=r.createElement("template");R.content&&R.content.ownerDocument&&(r=R.content.ownerDocument)}var P=vf(I,n),D=P?P.createHTML(""):"",Q=r,J=Q.implementation,V=Q.createNodeIterator,ne=Q.createDocumentFragment,se=Q.getElementsByTagName,Ie=n.importNode,me={};try{me=dt(r).documentMode?r.documentMode:{}}catch{}var ee={};t.isSupported=typeof w=="function"&&J&&J.createHTMLDocument!==void 0&&me!==9;var ye=of,le=sf,He=lf,Se=cf,xe=uf,lt=df,We=pf,ct=hf,O=ff,v=null,E=j({},[].concat(Me(di),Me(ir),Me(or),Me(sr),Me(pi))),C=null,f=j({},[].concat(Me(mi),Me(lr),Me(hi),Me(pn))),L=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),b=null,G=null,$=!0,q=!0,F=!1,ie=!0,re=!1,z=!0,K=!1,U=!1,ae=!1,Oe=!1,te=!1,Be=!1,Je=!0,we=!1,M="user-content-",Y=!0,Ge=!1,De={},ge=null,la=j({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ca=null,ua=j({},["audio","video","img","source","image","track"]),Hn=null,fa=j({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),rn="http://www.w3.org/1998/Math/MathML",an="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml",bt=Ye,Wn=!1,Bn=null,vs=j({},[rn,an,Ye],rr),ut,bs=["application/xhtml+xml","text/html"],ys="text/html",ce,yt=null,xs=r.createElement("form"),da=function(l){return l instanceof RegExp||l instanceof Function},Gn=function(l){yt&&yt===l||((!l||tt(l)!=="object")&&(l={}),l=dt(l),ut=bs.indexOf(l.PARSER_MEDIA_TYPE)===-1?ut=ys:ut=l.PARSER_MEDIA_TYPE,ce=ut==="application/xhtml+xml"?rr:yn,v="ALLOWED_TAGS"in l?j({},l.ALLOWED_TAGS,ce):E,C="ALLOWED_ATTR"in l?j({},l.ALLOWED_ATTR,ce):f,Bn="ALLOWED_NAMESPACES"in l?j({},l.ALLOWED_NAMESPACES,rr):vs,Hn="ADD_URI_SAFE_ATTR"in l?j(dt(fa),l.ADD_URI_SAFE_ATTR,ce):fa,ca="ADD_DATA_URI_TAGS"in l?j(dt(ua),l.ADD_DATA_URI_TAGS,ce):ua,ge="FORBID_CONTENTS"in l?j({},l.FORBID_CONTENTS,ce):la,b="FORBID_TAGS"in l?j({},l.FORBID_TAGS,ce):{},G="FORBID_ATTR"in l?j({},l.FORBID_ATTR,ce):{},De="USE_PROFILES"in l?l.USE_PROFILES:!1,$=l.ALLOW_ARIA_ATTR!==!1,q=l.ALLOW_DATA_ATTR!==!1,F=l.ALLOW_UNKNOWN_PROTOCOLS||!1,ie=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,re=l.SAFE_FOR_TEMPLATES||!1,z=l.SAFE_FOR_XML!==!1,K=l.WHOLE_DOCUMENT||!1,Oe=l.RETURN_DOM||!1,te=l.RETURN_DOM_FRAGMENT||!1,Be=l.RETURN_TRUSTED_TYPE||!1,ae=l.FORCE_BODY||!1,Je=l.SANITIZE_DOM!==!1,we=l.SANITIZE_NAMED_PROPS||!1,Y=l.KEEP_CONTENT!==!1,Ge=l.IN_PLACE||!1,O=l.ALLOWED_URI_REGEXP||O,bt=l.NAMESPACE||Ye,L=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&da(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&da(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),re&&(q=!1),te&&(Oe=!0),De&&(v=j({},Me(pi)),C=[],De.html===!0&&(j(v,di),j(C,mi)),De.svg===!0&&(j(v,ir),j(C,lr),j(C,pn)),De.svgFilters===!0&&(j(v,or),j(C,lr),j(C,pn)),De.mathMl===!0&&(j(v,sr),j(C,hi),j(C,pn))),l.ADD_TAGS&&(v===E&&(v=dt(v)),j(v,l.ADD_TAGS,ce)),l.ADD_ATTR&&(C===f&&(C=dt(C)),j(C,l.ADD_ATTR,ce)),l.ADD_URI_SAFE_ATTR&&j(Hn,l.ADD_URI_SAFE_ATTR,ce),l.FORBID_CONTENTS&&(ge===la&&(ge=dt(ge)),j(ge,l.FORBID_CONTENTS,ce)),Y&&(v["#text"]=!0),K&&j(v,["html","head","body"]),v.table&&(j(v,["tbody"]),delete b.tbody),be&&be(l),yt=l)},pa=j({},["mi","mo","mn","ms","mtext"]),ma=j({},["annotation-xml"]),ws=j({},["title","style","font","a","script"]),on=j({},ir);j(on,or),j(on,rf);var Yn=j({},sr);j(Yn,af);var As=function(l){var g=w(l);(!g||!g.tagName)&&(g={namespaceURI:bt,tagName:"template"});var y=yn(l.tagName),H=yn(g.tagName);return Bn[l.namespaceURI]?l.namespaceURI===an?g.namespaceURI===Ye?y==="svg":g.namespaceURI===rn?y==="svg"&&(H==="annotation-xml"||pa[H]):!!on[y]:l.namespaceURI===rn?g.namespaceURI===Ye?y==="math":g.namespaceURI===an?y==="math"&&ma[H]:!!Yn[y]:l.namespaceURI===Ye?g.namespaceURI===an&&!ma[H]||g.namespaceURI===rn&&!pa[H]?!1:!Yn[y]&&(ws[y]||!on[y]):!!(ut==="application/xhtml+xml"&&Bn[l.namespaceURI]):!1},Ce=function(l){It(t.removed,{element:l});try{l.parentNode.removeChild(l)}catch{try{l.outerHTML=D}catch{l.remove()}}},sn=function(l,g){try{It(t.removed,{attribute:g.getAttributeNode(l),from:g})}catch{It(t.removed,{attribute:null,from:g})}if(g.removeAttribute(l),l==="is"&&!C[l])if(Oe||te)try{Ce(g)}catch{}else try{g.setAttribute(l,"")}catch{}},ha=function(l){var g,y;if(ae)l="<remove></remove>"+l;else{var H=fi(l,/^[\r\n\t ]+/);y=H&&H[0]}ut==="application/xhtml+xml"&&bt===Ye&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");var Ae=P?P.createHTML(l):l;if(bt===Ye)try{g=new k().parseFromString(Ae,ut)}catch{}if(!g||!g.documentElement){g=J.createDocument(bt,"template",null);try{g.documentElement.innerHTML=Wn?D:Ae}catch{}}var he=g.body||g.documentElement;return l&&y&&he.insertBefore(r.createTextNode(y),he.childNodes[0]||null),bt===Ye?se.call(g,K?"html":"body")[0]:K?g.documentElement:he},ga=function(l){return V.call(l.ownerDocument||l,l,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null,!1)},va=function(l){return l instanceof A&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof m)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Lt=function(l){return tt(o)==="object"?l instanceof o:l&&tt(l)==="object"&&typeof l.nodeType=="number"&&typeof l.nodeName=="string"},Xe=function(l,g,y){ee[l]&&Ju(ee[l],function(H){H.call(t,g,y,yt)})},ba=function(l){var g;if(Xe("beforeSanitizeElements",l,null),va(l)||de(/[\u0080-\uFFFF]/,l.nodeName))return Ce(l),!0;var y=ce(l.nodeName);if(Xe("uponSanitizeElement",l,{tagName:y,allowedTags:v}),l.hasChildNodes()&&!Lt(l.firstElementChild)&&(!Lt(l.content)||!Lt(l.content.firstElementChild))&&de(/<[/\w]/g,l.innerHTML)&&de(/<[/\w]/g,l.textContent)||y==="select"&&de(/<template/i,l.innerHTML)||l.nodeType===7||z&&l.nodeType===8&&de(/<[/\w]/g,l.data))return Ce(l),!0;if(!v[y]||b[y]){if(!b[y]&&xa(y)&&(L.tagNameCheck instanceof RegExp&&de(L.tagNameCheck,y)||L.tagNameCheck instanceof Function&&L.tagNameCheck(y)))return!1;if(Y&&!ge[y]){var H=w(l)||l.parentNode,Ae=S(l)||l.childNodes;if(Ae&&H)for(var he=Ae.length,fe=he-1;fe>=0;--fe){var ft=_(Ae[fe],!0);ft.__removalCount=(l.__removalCount||0)+1,H.insertBefore(ft,h(l))}}return Ce(l),!0}return l instanceof s&&!As(l)||(y==="noscript"||y==="noembed"||y==="noframes")&&de(/<\/no(script|embed|frames)/i,l.innerHTML)?(Ce(l),!0):(re&&l.nodeType===3&&(g=l.textContent,g=Re(g,ye," "),g=Re(g,le," "),g=Re(g,He," "),l.textContent!==g&&(It(t.removed,{element:l.cloneNode()}),l.textContent=g)),Xe("afterSanitizeElements",l,null),!1)},ya=function(l,g,y){if(Je&&(g==="id"||g==="name")&&(y in r||y in xs))return!1;if(!(q&&!G[g]&&de(Se,g))){if(!($&&de(xe,g))){if(!C[g]||G[g]){if(!(xa(l)&&(L.tagNameCheck instanceof RegExp&&de(L.tagNameCheck,l)||L.tagNameCheck instanceof Function&&L.tagNameCheck(l))&&(L.attributeNameCheck instanceof RegExp&&de(L.attributeNameCheck,g)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(g))||g==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&de(L.tagNameCheck,y)||L.tagNameCheck instanceof Function&&L.tagNameCheck(y))))return!1}else if(!Hn[g]){if(!de(O,Re(y,We,""))){if(!((g==="src"||g==="xlink:href"||g==="href")&&l!=="script"&&ef(y,"data:")===0&&ca[l])){if(!(F&&!de(lt,Re(y,We,"")))){if(y)return!1}}}}}}return!0},xa=function(l){return l!=="annotation-xml"&&fi(l,ct)},wa=function(l){var g,y,H,Ae;Xe("beforeSanitizeAttributes",l,null);var he=l.attributes;if(he){var fe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:C};for(Ae=he.length;Ae--;){g=he[Ae];var ft=g,oe=ft.name,Xn=ft.namespaceURI;if(y=oe==="value"?g.value:tf(g.value),H=ce(oe),fe.attrName=H,fe.attrValue=y,fe.keepAttr=!0,fe.forceKeepAttr=void 0,Xe("uponSanitizeAttribute",l,fe),y=fe.attrValue,!fe.forceKeepAttr&&(sn(oe,l),!!fe.keepAttr)){if(!ie&&de(/\/>/i,y)){sn(oe,l);continue}re&&(y=Re(y,ye," "),y=Re(y,le," "),y=Re(y,He," "));var Aa=ce(l.nodeName);if(ya(Aa,H,y)){if(we&&(H==="id"||H==="name")&&(sn(oe,l),y=M+y),z&&de(/((--!?|])>)|<\/(style|title)/i,y)){sn(oe,l);continue}if(P&&tt(I)==="object"&&typeof I.getAttributeType=="function"&&!Xn)switch(I.getAttributeType(Aa,H)){case"TrustedHTML":{y=P.createHTML(y);break}case"TrustedScriptURL":{y=P.createScriptURL(y);break}}try{Xn?l.setAttributeNS(Xn,oe,y):l.setAttribute(oe,y),va(l)?Ce(l):ui(t.removed)}catch{}}}}Xe("afterSanitizeAttributes",l,null)}},Ss=function N(l){var g,y=ga(l);for(Xe("beforeSanitizeShadowDOM",l,null);g=y.nextNode();)Xe("uponSanitizeShadowNode",g,null),!ba(g)&&(g.content instanceof a&&N(g.content),wa(g));Xe("afterSanitizeShadowDOM",l,null)};return t.sanitize=function(N){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g,y,H,Ae,he;if(Wn=!N,Wn&&(N="<!-->"),typeof N!="string"&&!Lt(N))if(typeof N.toString=="function"){if(N=N.toString(),typeof N!="string")throw ar("dirty is not a string, aborting")}else throw ar("toString is not a function");if(!t.isSupported){if(tt(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof N=="string")return e.toStaticHTML(N);if(Lt(N))return e.toStaticHTML(N.outerHTML)}return N}if(U||Gn(l),t.removed=[],typeof N=="string"&&(Ge=!1),Ge){if(N.nodeName){var fe=ce(N.nodeName);if(!v[fe]||b[fe])throw ar("root node is forbidden and cannot be sanitized in-place")}}else if(N instanceof o)g=ha("<!---->"),y=g.ownerDocument.importNode(N,!0),y.nodeType===1&&y.nodeName==="BODY"||y.nodeName==="HTML"?g=y:g.appendChild(y);else{if(!Oe&&!re&&!K&&N.indexOf("<")===-1)return P&&Be?P.createHTML(N):N;if(g=ha(N),!g)return Oe?null:Be?D:""}g&&ae&&Ce(g.firstChild);for(var ft=ga(Ge?N:g);H=ft.nextNode();)H.nodeType===3&&H===Ae||ba(H)||(H.content instanceof a&&Ss(H.content),wa(H),Ae=H);if(Ae=null,Ge)return N;if(Oe){if(te)for(he=ne.call(g.ownerDocument);g.firstChild;)he.appendChild(g.firstChild);else he=g;return(C.shadowroot||C.shadowrootmod)&&(he=Ie.call(n,he,!0)),he}var oe=K?g.outerHTML:g.innerHTML;return K&&v["!doctype"]&&g.ownerDocument&&g.ownerDocument.doctype&&g.ownerDocument.doctype.name&&de(mf,g.ownerDocument.doctype.name)&&(oe="<!DOCTYPE "+g.ownerDocument.doctype.name+`>
`+oe),re&&(oe=Re(oe,ye," "),oe=Re(oe,le," "),oe=Re(oe,He," ")),P&&Be?P.createHTML(oe):oe},t.setConfig=function(N){Gn(N),U=!0},t.clearConfig=function(){yt=null,U=!1},t.isValidAttribute=function(N,l,g){yt||Gn({});var y=ce(N),H=ce(l);return ya(y,H,g)},t.addHook=function(N,l){typeof l=="function"&&(ee[N]=ee[N]||[],It(ee[N],l))},t.removeHook=function(N){if(ee[N])return ui(ee[N])},t.removeHooks=function(N){ee[N]&&(ee[N]=[])},t.removeAllHooks=function(){ee={}},t}ns();function*rs(e="id-",t=0){let n=t;for(;;)n+=1,yield e+n}function as(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}d.shape({event:d.string,action:d.string,name:d.string,region:d.string,section:d.string,component:d.string,type:d.string,text:d.string});const pe=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:s=""})=>{const{dataLayer:u}=window,c={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:s.toLowerCase()};u&&u.push(c)},bf={Lg:"992px",Xl:"1260px"},is=B.createContext(),na=({initialValue:e,children:t})=>{const n={...e,breakpoint:bf[e.breakpoint]};return p.jsx(is.Provider,{value:n,children:t})};na.propTypes={initialValue:d.shape(ao).isRequired,children:d.node.isRequired};const $e=()=>{const e=B.useContext(is);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");return e};na.__docgenInfo={description:"",methods:[],displayName:"AppContextProvider",props:{initialValue:{description:"",type:{name:"shape",value:{isPartner:{name:"bool",required:!1},navTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},partnerLogo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},logo:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}},required:!1},title:{name:"string",required:!1},parentOrg:{name:"custom",raw:"TitlePropTypes.parentOrg",required:!1},parentOrgUrl:{name:"custom",raw:"TitlePropTypes.parentOrgUrl",required:!1},baseUrl:{name:"custom",raw:"TitlePropTypes.baseUrl",required:!1},loggedIn:{name:"custom",raw:"LoginPropTypes.loggedIn",required:!1},userName:{name:"custom",raw:"LoginPropTypes.userName",required:!1},loginLink:{name:"custom",raw:"LoginPropTypes.loginLink",required:!1},onLoginClick:{name:"func",required:!1},logoutLink:{name:"custom",raw:"LoginPropTypes.logoutLink",required:!1},onLogoutClick:{name:"func",required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},breakpoint:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}],required:!1},animateTitle:{name:"bool",required:!1},expandOnHover:{name:"bool",required:!1},mobileNavTree:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"},required:!1},hasNavigation:{name:"bool",required:!1},searchUrl:{name:"string",required:!1},site:{name:"string",required:!1},renderDiv:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}],required:!1}}},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const qn=e=>{const t=window==null?void 0:window.matchMedia(`(max-width: ${e})`),[n,r]=B.useState(t==null?void 0:t.matches),a=i=>{r(i.matches)};return B.useEffect(()=>(t.addEventListener("change",a),()=>t.removeEventListener("change",a)),[]),n},yf=ve.div`
  background-color: #e8e8e8;
  min-height: 24px;
  transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
  .header-top {
    height: 100%;
    .nav {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .links-container {
        display: flex;
        .nav-link {
          color: #484848;
          font-size: 0.75rem;
          line-height: 0.75rem;
          padding: 0.25rem 0.5rem;
          margin-right: 0.5rem;
          white-space: nowrap;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }

          &.visually-hidden-focusable:not(:focus):not(:active) {
            clip: rect(0 0 0 0);
            clip-path: inset(100%);
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
          }
        }
      }
    }
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    width: 100%;
    min-height: auto;
    position: relative;
    &:before {
      content: "";
      width: 100%;
      height: 50px;
      position: absolute;
      top: -50px;
      border-bottom: 1px solid #d0d0d0;
      background: linear-gradient(
        180deg,
        rgba(232, 232, 232, 0) 0%,
        rgba(232, 232, 232, 1) 100%
      );
    }
    .header-top {
      width: 100%;
      .nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column-reverse;
        .links-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-flow: row;
          justify-items: start;
          width: 100%;
          .nav-link {
            white-space: normal;
            color: #191919;
            margin-right: 0;
            text-align: center;
            width: 100%;
            font-size: 0.875rem;
            padding: 1rem 1.5rem;
            border-top: 1px solid #d0d0d0;
            justify-content: center;
            &:nth-child(even) {
              border-left: 1px solid #d0d0d0;
            }
          }
        }
      }
    }
  }
`,xf=ve.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  > a {
    padding: 0;
    margin: 0;
    color: #484848;
    text-decoration: none;
  }
  > span.name {
    font-weight: 700;
  }
  > a.signout:before {
    content: "(";
    margin-left: 4px;
  }
  > a.signout:after {
    content: ") ";
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    width: 100%;
  }
`,gi={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar"},os=()=>{const{loggedIn:e,userName:t,logoutLink:n,loginLink:r,onLoginClick:a,onLogoutClick:i,breakpoint:o}=$e();return p.jsx(xf,{className:"nav-link login-status",breakpoint:o,children:e?p.jsxs(p.Fragment,{children:[t?p.jsx("span",{className:"name","data-testid":"user-name",children:t}):"",p.jsx("a",{className:"signout",href:n,onClick:s=>{pe({...gi,text:"sign out"}),i==null||i(s)},children:"Sign Out"})]}):p.jsx("a",{href:r,onClick:s=>{pe({...gi,text:"sign in"}),a==null||a(s)},children:"Sign In"})})};os.__docgenInfo={description:"",methods:[],displayName:"Login"};const wf=ve.form`
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .search-button {
    transition: cubic-bezier(0.19, 1, 0.19, 1);
  }
  input[name="q"] {
    width: 200px;
    background-color: #ffffff;
    border: 0;
    border-radius: 0;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: 1px solid #707070;
    margin: 0.5rem 0;
    display: unset;
    &:focus {
      border-color: transparent;
    }
  }
  .close-search {
    background-color: #ffffff;
    border: 1px solid #d0d0d0;
    border-radius: 100%;
    padding: 0.45rem 0.75rem;
    margin-left: 0.5rem;
  }
  &.open-search {
    margin-left: -1rem;
    .search-button {
      transform: translate(1.9rem);
      pointer-events: none;
    }
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    width: 100%;
    padding: 1rem 2rem;
    label {
      position: relative;
      font-size: 0.875rem;
      margin-bottom: 0;
      width: 100%;
      svg {
        position: absolute;
        top: 50%;
        left: 0.5rem;
        transform: translate(0, -50%);
      }
      input {
        width: 100%;
        border: unset;
        margin: 0;
      }
    }
  }
`,cr={event:"search",action:"type",name:"onenter",type:"main search",region:"navbar",section:"topbar"},ss=()=>{const{breakpoint:e,searchUrl:t,site:n}=$e(),r=qn(e),a=B.useRef(null),[i,o]=B.useState(!1);B.useEffect(()=>{i&&a.current.focus()},[i]);const s=c=>{const m=c.target;c.preventDefault(),pe({...cr,text:c.target.elements.q.value}),setTimeout(()=>{m.submit()},100)},u=()=>{o(c=>{const m=!c;return pe({...cr,event:"link",action:"click",name:"onclick",text:m?"search icon":"close search icon"}),m})};return p.jsxs(wf,{breakpoint:e,action:t,onSubmit:s,method:"get",name:"gs",className:i?"open-search":"","data-testid":"universal-nav-search-form",children:[r?p.jsxs("label",{children:[p.jsx(at,{icon:Ma}),p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0,onChange:c=>pe({...cr,text:c.target.value})})]}):p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:u,className:"search-button","data-testid":"search-button",children:p.jsx(at,{icon:Ma})}),i&&p.jsxs(p.Fragment,{children:[p.jsx("input",{ref:a,className:"form-control",type:"search",name:"q","aria-labelledby":"header-top-search",placeholder:"Search asu.edu",required:!0}),p.jsx("button",{type:"button","aria-label":"Search asu.edu",onClick:u,className:"close-search","data-testid":"close-search",children:p.jsx(at,{icon:xo})})]})]}),p.jsx("input",{name:"url_host",value:n,type:"hidden"}),p.jsx("input",{name:"site",value:"default_collection",type:"hidden"}),p.jsx("input",{name:"sort",value:"date:D:L:d1",type:"hidden"}),p.jsx("input",{name:"output",value:"xml_no_dtd",type:"hidden"}),p.jsx("input",{name:"ie",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"oe",value:"UTF-8",type:"hidden"}),p.jsx("input",{name:"client",value:"asu_frontend",type:"hidden"}),p.jsx("input",{name:"proxystylesheet",value:"asu_frontend",type:"hidden"})]})};ss.__docgenInfo={description:"",methods:[],displayName:"Search"};const Af={event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"topbar",text:""},ra=()=>{const{breakpoint:e}=$e();function t(){try{return window.location.href}catch(r){return console.error(r),""}}const n=[{className:"nav-link visually-hidden-focusable",href:"#skip-to-content",text:"Skip to main content"},{className:"nav-link visually-hidden-focusable",href:`https://accessibility.asu.edu/report?a11yref=${t()}`,text:"Report an accessibility problem"},{className:"nav-link",href:"https://asu.edu",text:"ASU Home"},{className:"nav-link",href:"https://my.asu.edu",text:"My ASU"},{className:"nav-link",href:"https://www.asu.edu/academics/colleges-schools",text:"Colleges and Schools"}];return p.jsx(yf,{breakpoint:e,className:"universal-nav","data-testid":"universal-navbar","data-elastic-exclude":"data-elastic-exclude",children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-top",children:p.jsxs("nav",{className:"nav","aria-label":"ASU Global",children:[p.jsxs("div",{className:"links-container",children:[n.map(r=>p.jsx("a",{className:r.className,href:r.href,onClick:()=>pe({...Af,text:r.text}),children:r.text},r.href)),p.jsx(os,{})]}),p.jsx(ss,{})]})})})})};ra.__docgenInfo={description:"",methods:[],displayName:"UniversalNavbar"};const Sf=ve.div`
  background-color: #ffffff;
  border-bottom: 1px solid #d0d0d0;
  padding: 0 12px;
  .navbar {
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
  .navbar-brand {
    .vert {
      display: block;
      height: 72px;
      width: auto;
      margin: 20px 1rem 20px 0;
    }
    .horiz {
      display: none;
    }
  }
  .navbar-toggler {
    display: none;
  }
  .expand-title {
    width: 100%;
  }
  @media (min-width: ${({breakpoint:e})=>e}) {
    .no-navigation {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .title {
        width: 100%;
      }
    }
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    padding: 0;
    .navbar {
      padding: 1.5rem 0 0 0;
      flex-wrap: wrap;
      justify-content: space-between;
      &.partner {
        flex-direction: row-reverse;
      }
    }
    .partner .content-container {
      min-height: calc(100vh - 240px);
    }
    .navbar-brand {
      padding: 0;
      margin: 0;

      .vert {
        display: none;
      }

      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
    .navbar-toggler {
      display: initial;
      background: transparent;
      color: #191919;
      border: 0;
      border-radius: 50%;
      font-size: 1.25rem;
      margin-right: 2rem;
      padding: 0.25rem 0.45rem;
      &.collapsed {
        border-radius: 0;
      }
    }
    .no-navigation + nav .buttons-container {
      border-top: 1px solid #cccccc;
    }
  }
`,kf=ve.a`
  display: unset;
  padding: 0;
  margin: 0;
  font-size: unset;
  line-height: unset;
  white-space: unset;
`,ls=as(),Tf=`${ls}/assets/img/arizona-state-university-logo-vertical.png`,Ef=`${ls}/assets/img/arizona-state-university-logo.png`,cs=()=>{const{logo:e}=$e();return p.jsxs(kf,{href:(e==null?void 0:e.brandLink)??"https://asu.edu",className:"navbar-brand","data-testid":"logo",onClick:()=>pe({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(e==null?void 0:e.src)??Tf,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(e==null?void 0:e.mobileSrc)??Ef,alt:(e==null?void 0:e.alt)??"Arizona State University",title:(e==null?void 0:e.title)??"ASU home page",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})};cs.__docgenInfo={description:"",methods:[],displayName:"Logo"};const _f=ve.nav`
  white-space: nowrap;
  > .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    height: auto;
    margin: inherit;
    font-size: inherit;
    color: inherit;
    flex-direction: row;
  }
  .nav-list {
    display: flex;
    margin: 0;
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    width: 100%;
    > .content-container {
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: auto;
      min-height: calc(100vh - 277px);
      max-height: calc(100vh - 277px);
      > *:last-child {
        margin-bottom: min(75px, 15vw);
      }
    }
    .nav-list {
      flex-direction: column;
      width: 100%;
    }
    .buttons-container {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      width: 100%;
    }
  }
`,Of=ve.div`
  position: fixed;
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  margin: 0;
  z-index: 1031;
  visibility: hidden;
  white-space: normal;
  &.opened {
    visibility: visible;
  }
  &.mega {
    width: 100%;
    left: 0;
    margin-left: 0 !important;
  }
  &.aligned-right:not(.mega) {
    position: absolute;
    right: 0;
  }
  > .dropdown-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2rem;
    ul {
      width: 16rem;
      max-width: 282px;
      display: flex;
      flex-direction: column;
      &:not(:last-child) {
        padding-right: 2rem;
        margin-right: 2rem;
        border-right: 1px solid #d0d0d0;
      }
      .ul-heading {
        margin-top: 0;
        font-size: 1.5rem;
        letter-spacing: -0.035em;
        font-weight: 700;
        text-align: left;
        opacity: 1;
        margin: 1rem 0;
        line-height: calc(100% + 0.12em);
      }
      .nav-link {
        padding: 0;
        a {
          width: 100%;
          display: inline-block;
          margin: 0.75rem 0;
          position: relative;
          line-height: 1rem;
          color: #191919;
          &:hover {
            color: #8c1d40;
            text-decoration: underline;
          }
        }
        & + .nav-button {
          margin-top: auto;
          padding-top: 2rem;
          & + .nav-button {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .dropdown-button-container {
    border-top: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
    margin-top: 1rem;
    > div {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      padding: 1rem 0;
    }
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    position: initial;
    border: none;
    max-height: unset;
    visibility: visible;
    display: none;
    &.opened {
      display: block;
    }
    > .dropdown-container {
      max-width: 100%;
      padding: 1rem 2rem;
      flex-direction: column;
      ul {
        width: 100%;
        max-width: 100%;
        padding: 0 1rem;
        margin-bottom: 1rem;
        &:not(:last-child) {
          padding-right: 1rem;
          margin: 0 0 1rem 0;
          border: none;
        }
        .ul-heading {
          font-size: 1.25rem;
        }
        .nav-button {
          padding-top: 1.5rem;
        }
        .nav-link {
          padding: 0 1rem;
          &:not(:last-child) {
            border-bottom: 1px solid #d0d0d0;
          }
          a {
            padding: 1rem 0;
            margin: 0;
          }
        }
      }
    }
    .dropdown-button-container {
      margin-top: 0;
      > div {
        max-width: 100%;
        padding: 1rem 3rem;
      }
    }
  }
`,Cf={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},us=({text:e})=>p.jsx("h3",{className:"ul-heading",children:e});us.propTypes={text:d.string};const fs=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-button",children:p.jsx(Ct,{text:e.text,color:e.color||"dark",href:e.href,onClick:r=>n(r,e),onKeyDown:n})});fs.propTypes={link:d.shape({text:d.string,color:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const ds=({link:e,dropdownName:t,handleLinkEvent:n})=>p.jsx("li",{className:"nav-link",children:p.jsx("a",{...e.href?{}:{tabIndex:0},href:e.href,onClick:r=>n(r,e),onKeyDown:r=>n(r,e),children:e.text})});ds.propTypes={link:d.shape({text:d.string,href:d.string}),dropdownName:d.string,handleLinkEvent:d.func};const aa=({dropdownName:e,items:t,buttons:n,classes:r,listId:a,setItemOpened:i,parentLink:o})=>{const{breakpoint:s}=$e(),u=(t==null?void 0:t.length)>2,c=B.useRef(null),[m,A]=B.useState(!1),k=(t==null?void 0:t.length)>1;B.useEffect(()=>{if(window&&c.current){const h=c.current.getBoundingClientRect().left,S=window.innerWidth*.55;A(h>S)}},[]);const I=h=>h.stopPropagation(),x=(h,S)=>{var V;const{key:w,type:R,target:P}=h,{parentElement:D}=P,Q=()=>{var se;const ne=(se=D.nextElementSibling)==null?void 0:se.firstChild;ne&&ne.focus()},J=()=>{var se;const ne=(se=D.previousElementSibling)==null?void 0:se.firstChild;ne&&ne.focus()};I(h),w==="ArrowDown"?(h.preventDefault(),Q()):w==="ArrowUp"?(h.preventDefault(),J()):w==="Escape"?(i(),o&&o.focus()):(w==="Enter"||w===" "||R==="click")&&((V=S==null?void 0:S.onClick)==null||V.call(S,h),pe({...Cf,text:S.text}))},_=(h,S)=>{const w=`${h.text}-${h.href||S}`;return h.type==="heading"?p.jsx(us,{text:h.text},w):h.type==="button"?p.jsx(fs,{link:h,dropdownName:e,handleLinkEvent:x},w):p.jsx(ds,{link:h,dropdownName:e,handleLinkEvent:x},w)};return p.jsxs(Of,{ref:c,className:`${r}${m?" aligned-right":""}${u?" mega":""}`,breakpoint:s,children:[p.jsx("div",{id:k?a:null,className:"dropdown-container",children:t==null?void 0:t.map((h,S)=>{const R=rs(`dropdown-item-${S}-`).next().value;return p.jsx("ul",{id:k?`${a}-${R}`:a,children:h.map((P,D)=>_(P,D))},R)})}),n&&p.jsx("div",{className:"dropdown-button-container",children:p.jsx("div",{children:n.map((h,S)=>p.jsx(Ct,{color:h.color,text:h.text,href:h.href,onClick:I},`${h.text}-${h.href||S}`))})})]})};aa.propTypes={dropdownName:d.string,items:d.arrayOf(d.shape({text:d.string,selected:d.bool,onClick:d.func,href:d.string})),buttons:d.arrayOf(d.shape(_n)),classes:d.string,listId:d.string,setItemOpened:d.func,parentLink:d.shape({focus:d.func})};aa.__docgenInfo={description:`@param {DropdownItemProps} props
@returns {JSX.Element}`,methods:[],displayName:"DropdownItem",props:{dropdownName:{description:"",type:{name:"string"},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!1},selected:{name:"bool",required:!1},onClick:{name:"func",required:!1},href:{name:"string",required:!1}}}},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},classes:{description:"",type:{name:"string"},required:!1},listId:{description:"",type:{name:"string"},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},parentLink:{description:"",type:{name:"shape",value:{focus:{name:"func",required:!1}}},required:!1}}};const Nf=ve.li`
  position: relative;
  padding: 0;
  margin: 0 0.5rem 0 0;
  &:has(.open-link) > a:after,
  &:hover > a:after {
    width: calc(100% + 24px);
  }
  > a {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    line-height: 1rem;
    color: #191919;
    &:after {
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      content: "";
      display: block;
      height: 0.5rem;
      position: relative;
      top: 0.6rem;
      right: 12px;
      width: 0;
      background-image: linear-gradient(
        to right,
        transparent 0.5%,
        #ffc627 0.5%
      );
    }
    &.nav-item-selected:after {
      width: calc(100% + 24px);
    }
    &.nav-item {
      display: block;
    }
    > span {
      position: relative;
      .chevron-icon {
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin-left: 0.5rem;
        font-size: 0.75rem;

        &.open {
          transform: rotate(180deg);
        }
      }
    }
    .mobile-only {
      display: none;
    }
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    border-bottom: 1px solid #cccccc;
    margin: 0;
    &:first-child {
      border-top: 1px solid #cccccc;
    }
    &:hover > a:after {
      width: 100%;
    }
    .icon-nav-item {
      display: none;
    }
    > a {
      padding: 1rem 2rem 0.75rem;
      width: 100%;
      &.open-link {
        border-bottom: 1px solid #cccccc;
      }
      &:after {
        right: 0;
        top: 0.8rem;
      }
      &.nav-item-selected:after {
        width: 100%;
      }
      > span {
        display: flex;
        justify-content: space-between;
        .chevron-icon {
          font-size: 1.25rem;
        }
      }
      .mobile-only {
        display: initial;
      }
    }
  }
`,Pf={event:"collapse",type:"click"},ur={event:"link",action:"click",name:"onclick",type:"internal link",region:"navbar",section:"main navbar",text:""},ps=({children:e})=>p.jsxs(p.Fragment,{children:[p.jsx(at,{icon:Ul,className:"icon-nav-item",alt:""}),p.jsx("span",{className:"mobile-only",children:e})]});ps.propTypes={children:d.node};const ia=({link:e,setItemOpened:t,itemOpened:n})=>{const r=B.useRef(null),a=B.useRef(null),i=e.id===n,{breakpoint:o,expandOnHover:s,title:u}=$e(),c=qn(o);B.useEffect(()=>{const x=_=>{var h;i&&!((h=r==null?void 0:r.current)!=null&&h.contains(_.target))&&t()};return document.addEventListener("click",x,!0),()=>{document.removeEventListener("click",x,!0)}},[i]);const m=B.useMemo(()=>{var x;return e.type==="icon-home"?p.jsx(ps,{children:e.text}):p.jsxs("span",{children:[e.text,!!((x=e.items)!=null&&x.length)&&p.jsx(at,{icon:ql,className:`chevron-icon ${i?"open":""}`,alt:""})]})},[e]),A=()=>{var S;const x=!!((S=e.items)!=null&&S.length),_=i?"close":"open",{text:h}=e;pe(x?{...ur,...Pf,action:_,text:h}:{...ur,text:e.type==="icon-home"?"home button":h})},k=x=>{var S,w;if(!e.items&&e.href){pe({...ur,text:e.text});return}const{key:_}=x;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"," ","Escape","Click"].includes(_)){if(x.preventDefault(),_==="Escape"&&i){t();return}if((_==="Enter"||_===" ")&&(e.items&&(!s&&!c||c)&&t(),A(),(S=e.onClick)==null||S.call(e,x)),(_==="ArrowDown"||_==="ArrowRight")&&i){const R=document.querySelectorAll(`.header-dropdown-${e.id} li.nav-link a`);R.length&&R[0].focus()}}else x.type==="click"&&e.items?(x.preventDefault(),A(),t()):x.type==="click"&&(A(),(w=e.onClick)==null||w.call(e,x))},I=()=>{s&&!c&&(t(),A())};return p.jsxs(Nf,{breakpoint:o,ref:r,onMouseEnter:I,onMouseLeave:I,children:[p.jsx("a",{onKeyDown:k,onClick:k,href:e.href,...e.items?{"aria-expanded":i}:{},...e.href?{}:{tabIndex:0},"aria-owns":e.items?`dropdown-${e.id}`:null,className:`${e.class?e.class:""}${e.selected?" nav-item-selected":""}${i?" open-link":""}`,"data-testid":"nav-item",title:e.type==="icon-home"&&u?`${u} home page`:e.text,ref:a,children:m}),e.items&&p.jsx(aa,{items:e.items,buttons:e.buttons,dropdownName:e.text,classes:`header-dropdown-${e.id} ${i?"opened":""}`,listId:`dropdown-${e.id}`,setItemOpened:t,parentLink:a==null?void 0:a.current})]})};ia.propTypes={link:fr,setItemOpened:d.func,itemOpened:d.number};ia.__docgenInfo={description:`@param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number }} props
@returns {JSX.Element}`,methods:[],displayName:"NavItem",props:{link:{description:"",type:{name:"shape",value:{id:{name:"number",required:!1},href:{name:"string",required:!1},text:{name:"string",required:!1},type:{name:"string",required:!1},selected:{name:"bool",required:!1},items:{name:"arrayOf",value:{name:"arrayOf",value:{name:"object"}},required:!1},buttons:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},class:{name:"string",required:!1}}},required:!1},setItemOpened:{description:"",type:{name:"func"},required:!1},itemOpened:{description:"",type:{name:"number"},required:!1}}};const Dr=()=>{const{navTree:e,mobileNavTree:t,buttons:n,breakpoint:r}=$e(),a=qn(r),[i,o]=B.useState(void 0),s=c=>{o(m=>i===c?void 0:c)},u=(c,m)=>{const A={...c,id:m},I=rs(`${c.text}-${m}-`).next().value;return p.jsx(ia,{link:A,setItemOpened:()=>s(m),itemOpened:i},I)};return p.jsxs(_f,{breakpoint:r,"data-testid":"navigation","aria-label":"Site",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length)||(n==null?void 0:n.length))&&p.jsxs("div",{className:"content-container",children:[((e==null?void 0:e.length)||(t==null?void 0:t.length))&&p.jsx("ul",{className:"nav-list",children:t!=null&&t.length&&a?t==null?void 0:t.map((c,m)=>u(c,m)):e==null?void 0:e.map((c,m)=>u(c,m))}),!!(n!=null&&n.length)&&p.jsx("form",{className:"buttons-container","data-testid":"buttons-container",children:n==null?void 0:n.map(c=>B.createElement(Ct,{...c,key:c.text,onClick:()=>pe({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:c.text})}))})]}),a&&p.jsx(ra,{})]})};Dr.__docgenInfo={description:"",methods:[],displayName:"NavbarContainer"};const Lf=ve.div`
  margin: 0.5rem 0;
  a {
    display: inline-block;
    &:not(:last-child) {
      border-right: 1px solid #d0d0d0;
      margin-right: 1.5rem;
      padding-right: 1.5rem;
    }
    img {
      height: 52px;
      width: auto;
      &.vert {
        display: initial;
      }
      &.horiz {
        display: none;
      }
    }
  }
  @media (max-width: ${({breakpoint:e})=>e}) {
    margin: 0.5rem 0 1rem 1rem;
    a {
      &:not(:last-child) {
        margin-right: 1rem;
        padding-right: 1rem;
      }
      img {
        height: 32px;
        width: auto;
        &.vert {
          display: none;
        }
        &.horiz {
          height: 24px;
          width: auto;
          display: initial;
        }
      }
    }
  }
  @media (max-width: 370px) {
    margin: 0.5rem 0 1rem 0.5rem;
    a {
      &:not(:last-child) {
        margin-right: 0.5rem;
        padding-right: 0.5rem;
      }
      img {
        height: 29px;
        &.horiz {
          height: 21px;
        }
      }
    }
  }
`,oa=as(),If=`${oa}/assets/img/arizona-state-university-logo-vertical.png`,Rf=`${oa}/assets/img/arizona-state-university-logo.png`,Mf=`${oa}/assets/img/asu-starbucks.png`,ms=()=>{const{partnerLogo:e,logo:t,breakpoint:n}=$e();return p.jsxs(Lf,{breakpoint:n,"data-testid":"partner",children:[p.jsx("a",{href:(e==null?void 0:e.brandLink)??"https://starbucks.asu.edu/",onClick:()=>pe({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:"partner logo"}),children:p.jsx("img",{src:(e==null?void 0:e.src)??Mf,alt:(e==null?void 0:e.alt)??"ASU Starbucks logo",width:"232",height:"81",decoding:"async",fetchpriority:"high"})}),p.jsxs("a",{href:(t==null?void 0:t.brandLink)??"https://asu.edu",onClick:()=>pe({text:"asu logo"}),children:[p.jsx("img",{className:"vert",src:(t==null?void 0:t.src)??If,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"303",height:"234",decoding:"async",fetchpriority:"high"}),p.jsx("img",{className:"horiz",src:(t==null?void 0:t.mobileSrc)??Rf,alt:(t==null?void 0:t.alt)??"Arizona State University",width:"400",height:"72",decoding:"async",fetchpriority:"high"})]})]})};ms.__docgenInfo={description:"",methods:[],displayName:"Partner"};const Df=(e,t)=>{const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n},Ff=e=>{const t="localhost",n="title_loaded",r=new Date,a=e||window.location.hostname,i=localStorage.getItem("title_loaded"),o=r.getTime()>parseInt(i,10),s=a===t,u=document.referrer.includes(a);if(s||!u&&(!i||o)){const m=Df(r,10).getTime();return localStorage.setItem(n,m.toString()),!0}return!1},jf={"992px":"993px","1260px":"1261px"},vi=ve.div`
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
  padding: 0 2rem 1.5rem 2rem;
  letter-spacing: -1px;
  display: inline-block;
  margin: 0;
  width: max-content;

  &.active {
    background-position: -200%;
  }

  > .unit-name {
    display: none;
  }
  .unit-name,
  .subunit-name,
  .title-subunit-name {
    color: #191919;
  }

  .subunit-name,
  .title-subunit-name {
    background-image: linear-gradient(
      to right,
      transparent 51%,
      #ffc626 51%,
      95%,
      transparent
    );
    background-position: 0 0;
    background-size: 200%;
    display: inline-block;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    transition-duration: 1.5s;
    &.active {
      background-position: -200%;
    }
  }

  @media (min-width: ${({breakpoint:e})=>jf[e]}) {
    line-height: 1;
    font-weight: 700;
    padding: 0;
    margin: 1rem 0 0.5rem 0;
    > .unit-name {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      display: block;

      :hover {
        text-decoration: underline;
      }
    }
    .subunit-name {
      font-size: 1.5rem;
      margin-bottom: 0;
      display: inline-block;

      :hover {
        text-decoration: underline;
      }
    }
    .title-subunit-name {
      font-size: 2rem;
      font-weight: 700;
      display: inline-block;
      margin: 0.5rem 0 0.5rem 0;

      :hover {
        text-decoration: underline;
      }
    }
  }
`,sa=()=>{const[e,t]=B.useState(!1),{title:n,parentOrg:r,parentOrgUrl:a,baseUrl:i,breakpoint:o,animateTitle:s}=$e();return B.useEffect(()=>{if(s!==!1){let u=i==="/"?window.location.hostname:i;!u.includes(window.location.hostname)&&u.indexOf("/")===0&&(u=window.location.hostname+u),Ff(u)&&t(!0)}},[e,s,i]),r?p.jsxs(vi,{breakpoint:o,className:"title","data-testid":"title",children:[p.jsx("a",{className:"unit-name",href:a,onClick:()=>pe({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:r}),title:`${r} home page`,children:r}),p.jsx("a",{className:`subunit-name ${e?"active":""}`,href:i,onClick:()=>pe({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})]}):p.jsx(vi,{breakpoint:o,className:"title","data-testid":"title",children:p.jsx("a",{className:`title-subunit-name ${e?"active":""}`,href:i,onClick:()=>pe({event:"link",action:"click",name:"onclick",region:"navbar",type:"internal link",section:"main navbar",text:n}),title:`${n} home page`,children:n})})};sa.propTypes={...mn};sa.__docgenInfo={description:"",methods:[],displayName:"Title",props:{baseUrl:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},animate:{description:"",type:{name:"bool"},required:!1}}};const hs=()=>{const{breakpoint:e,isPartner:t,hasNavigation:n}=$e(),[r,a]=B.useState(!1),i=qn(e),o=()=>{a(u=>!u)},s=()=>{o(),pe({event:"collapse",action:r?"close":"open",type:"click",text:"menu button tablet"})};return p.jsxs(p.Fragment,{children:[!i&&p.jsx(ra,{}),p.jsx(Sf,{breakpoint:e,children:p.jsx("div",{className:"container-xl",children:p.jsx("div",{className:"header-main",children:p.jsxs("div",{className:`navbar navbar-expand-xl ${t?"partner":""}`,children:[!t&&p.jsx(cs,{}),p.jsx("button",{className:`navbar-toggler${r?"":" collapsed"}`,type:"button",onClick:s,"aria-label":"Toggle navigation",children:p.jsx(at,{icon:r?xo:jl,alt:""})}),p.jsxs("div",{className:`${t?"":"expand-title"}${n?"":" no-navigation"}`,children:[t?p.jsx(ms,{}):p.jsx(sa,{}),!i&&p.jsx(Dr,{})]}),r&&i&&p.jsx(Dr,{})]})})})})]})};hs.__docgenInfo={description:"",methods:[],displayName:"HeaderMain"};const zf=(e,t)=>e==null?void 0:e.findIndex(n=>{var r;return(n==null?void 0:n.href)===t||Array.isArray(n.items)&&((r=n.items)==null?void 0:r.flat().find(({href:a})=>a===t))}),Uf=e=>e==null?void 0:e.find(t=>t.selected),bi=e=>{if(!Array.isArray(e)||e.length===0||Uf(e))return e;let t="";if(window!=null&&window.location&&(t=window.location.pathname+window.location.search),!t)return e;const n=zf(e,t);if(n===-1)return e;const r=[...e];return r[n].selected=!0,r},gs={Lg:"992px",Xl:"1260px"},$f=ve.header`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({breakpoint:e})=>gs[e]}) {
    &.scrolled {
      .universal-nav {
        min-height: 0;
        height: 0;
        overflow: hidden;
      }
      .title {
        margin: 0.5rem 0 0 0;
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name {
        margin: 0.52rem 0;
      }
      a.subunit-name,
      a.title-subunit-name {
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .navbar-brand img {
        height: 64px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin: 12px 1rem 12px 0;
      }
    }
  }
  @media (max-width: 1260px) {
    .container-xl {
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
    }
  }
`,qf=ve.div`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .container-xl {
    height: 100%;
    max-width: 1224px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  button,
  a {
    text-decoration: none;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }
  }
  @media (min-width: ${({breakpoint:e})=>gs[e]}) {
    &.scrolled {
      .universal-nav {
        min-height: 0;
        height: 0;
        overflow: hidden;
      }
      .title {
        margin: 0.5rem 0 0 0;
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name {
        margin: 0.52rem 0;
      }
      a.subunit-name,
      a.title-subunit-name {
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      .navbar-brand img {
        height: 64px;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin: 12px 1rem 12px 0;
      }
    }
  }
  @media (max-width: 1260px) {
    .container-xl {
      padding-left: 0;
      padding-right: 0;
      max-width: 100%;
    }
  }
`,Pt=({isPartner:e,navTree:t,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:s,loggedIn:u,userName:c,loginLink:m,onLoginClick:A,logoutLink:k,onLogoutClick:I,buttons:x,breakpoint:_,animateTitle:h,expandOnHover:S,mobileNavTree:w,searchUrl:R,site:P,renderDiv:D="false"})=>{const Q=bi(t),J=bi(w),V=B.useRef(null),ne=()=>{window.scrollY>V.current.getBoundingClientRect().top?V.current.classList.add("scrolled"):V.current.classList.remove("scrolled")};B.useEffect(()=>{typeof window<"u"&&Fl({packageName:"component-header",component:"Component Header",type:"NA",configuration:{site:P,isPartner:e,searchUrl:R,navTree:Q,parentOrg:a,buttons:x,mobileNavTree:J}})},[]),B.useEffect(()=>(window==null||window.addEventListener("scroll",ne),()=>window.removeEventListener("scroll",ne)),[]);const se=()=>{const Ie=D==="true"?qf:$f;return p.jsx(Ie,{id:"asuHeader",ref:V,breakpoint:_,children:p.jsx(hs,{})})};return p.jsx(na,{initialValue:{isPartner:e,navTree:Q,title:n,baseUrl:r,parentOrg:a,parentOrgUrl:i,partnerLogo:o,logo:s,loggedIn:u,userName:c,loginLink:m,onLoginClick:A,logoutLink:k,onLogoutClick:I,buttons:x,breakpoint:_,animateTitle:h,expandOnHover:S,mobileNavTree:J,hasNavigation:!!(Q!=null&&Q.length)||!!(J!=null&&J.length),searchUrl:R,site:P},children:se()})};Pt.propTypes={...ao};Pt.defaultProps={isPartner:!1,baseUrl:"/",breakpoint:"Xl",expandOnHover:!1};Pt.__docgenInfo={description:`@param {HeaderProps} props
@returns {JSX.Element}`,methods:[],displayName:"ASUHeader",props:{renderDiv:{defaultValue:{value:'"false"',computed:!1},description:"",type:{name:"enum",value:[{value:'"true"',computed:!1},{value:'"false"',computed:!1}]},required:!1},isPartner:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},baseUrl:{defaultValue:{value:'"/"',computed:!1},description:"",type:{name:"string"},required:!1},breakpoint:{defaultValue:{value:'"Xl"',computed:!1},description:"",type:{name:"enum",value:[{value:'"Lg"',computed:!1},{value:'"Xl"',computed:!1}]},required:!1},expandOnHover:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},navTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},partnerLogo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},logo:{description:"",type:{name:"shape",value:{alt:{name:"string",required:!1},title:{name:"string",required:!1},src:{name:"string",required:!1},mobileSrc:{name:"string",required:!1},brandLink:{name:"string",required:!1}}},required:!1},title:{description:"",type:{name:"string"},required:!1},parentOrg:{description:"",type:{name:"string"},required:!1},parentOrgUrl:{description:"",type:{name:"string"},required:!1},loggedIn:{description:"",type:{name:"bool"},required:!1},userName:{description:"",type:{name:"string"},required:!1},loginLink:{description:"",type:{name:"string"},required:!1},onLoginClick:{description:"",type:{name:"func"},required:!1},logoutLink:{description:"",type:{name:"string"},required:!1},onLogoutClick:{description:"",type:{name:"func"},required:!1},buttons:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",required:!0},color:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}],required:!1},href:{name:"string",required:!0},classes:{name:"string",required:!1},onClick:{name:"func",required:!1}}}},required:!1},animateTitle:{description:"",type:{name:"bool"},required:!1},mobileNavTree:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"NavTreePropTypes"}},required:!1},hasNavigation:{description:"",type:{name:"bool"},required:!1},searchUrl:{description:"",type:{name:"string"},required:!1},site:{description:"",type:{name:"string"},required:!1}}};const Yf={title:"UDS/ASU Header",component:Pt,argTypes:{renderDiv:{control:"select",options:["true","false"],description:"Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element."}}},qe=e=>p.jsxs(p.Fragment,{children:[p.jsx(Pt,{...e}),p.jsx("div",{style:{width:"100%",height:"200vh",background:"#f0f0f0",paddingTop:40,marginTop:140},children:p.jsx("h1",{style:{textAlign:"center",fontFamily:"Arial"},children:"Scroll section"})})]}),Hf=e=>{const t=()=>{localStorage.getItem("title_loaded")&&localStorage.removeItem("title_loaded"),setTimeout(()=>{window.location.reload()},1e3)};return p.jsxs(p.Fragment,{children:[p.jsx(Pt,{...e,animateTitle:!0}),p.jsx("div",{style:{marginTop:200,textAlign:"center"},children:p.jsx(Ct,{text:"Animate Title",color:"dark",onClick:t})})]})},Dt=qe.bind({});Dt.args={loggedIn:!1,userName:"",navTree:en,title:"Subdomain name",breakpoint:"Lg",searchUrl:"https://search.asu.edu/search",site:"subdomain",renderDiv:"false"};const Ft=qe.bind({});Ft.args={};const jt=qe.bind({});jt.args={title:"Subdomain name",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const zt=qe.bind({});zt.args={title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ut=qe.bind({});Ut.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:en,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const $t=qe.bind({});$t.args={loggedIn:!1,userName:"",logoutLink:"/caslogout",loginLink:"/cas",navTree:en,mobileNavTree:Dl,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const qt=qe.bind({});qt.args={navTree:Ml,title:"Subdomain name",buttons:[{href:"/",text:"CTA Button 1",color:"gold",classes:"custom-class"},{text:"CTA Button 2",href:"#",color:"light"}],loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Ht=qe.bind({});Ht.args={navTree:yo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Wt=qe.bind({});Wt.args={navTree:yo,title:"Subdomain name",parentOrg:"Parent unit name",parentOrgUrl:"https://engineering.asu.edu",loggedIn:!0,userName:"Sparky",logoutLink:"/caslogout",loginLink:"/cas",expandOnHover:!0,searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Bt=qe.bind({});Bt.args={isPartner:!0,navTree:en,loggedIn:!1,userName:"",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};const Gt=Hf.bind({});Gt.args={title:"Subdomain name",navTree:en,loggedIn:!1,logoutLink:"/caslogout",loginLink:"/cas",breakpoint:"Xl",searchUrl:"https://search.asu.edu/search",site:"subdomain"};var yi,xi,wi;Dt.parameters={...Dt.parameters,docs:{...(yi=Dt.parameters)==null?void 0:yi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(wi=(xi=Dt.parameters)==null?void 0:xi.docs)==null?void 0:wi.source}}};var Ai,Si,ki;Ft.parameters={...Ft.parameters,docs:{...(Ai=Ft.parameters)==null?void 0:Ai.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(ki=(Si=Ft.parameters)==null?void 0:Si.docs)==null?void 0:ki.source}}};var Ti,Ei,_i;jt.parameters={...jt.parameters,docs:{...(Ti=jt.parameters)==null?void 0:Ti.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(_i=(Ei=jt.parameters)==null?void 0:Ei.docs)==null?void 0:_i.source}}};var Oi,Ci,Ni;zt.parameters={...zt.parameters,docs:{...(Oi=zt.parameters)==null?void 0:Oi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Ni=(Ci=zt.parameters)==null?void 0:Ci.docs)==null?void 0:Ni.source}}};var Pi,Li,Ii;Ut.parameters={...Ut.parameters,docs:{...(Pi=Ut.parameters)==null?void 0:Pi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Ii=(Li=Ut.parameters)==null?void 0:Li.docs)==null?void 0:Ii.source}}};var Ri,Mi,Di;$t.parameters={...$t.parameters,docs:{...(Ri=$t.parameters)==null?void 0:Ri.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Di=(Mi=$t.parameters)==null?void 0:Mi.docs)==null?void 0:Di.source}}};var Fi,ji,zi;qt.parameters={...qt.parameters,docs:{...(Fi=qt.parameters)==null?void 0:Fi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(zi=(ji=qt.parameters)==null?void 0:ji.docs)==null?void 0:zi.source}}};var Ui,$i,qi;Ht.parameters={...Ht.parameters,docs:{...(Ui=Ht.parameters)==null?void 0:Ui.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(qi=($i=Ht.parameters)==null?void 0:$i.docs)==null?void 0:qi.source}}};var Hi,Wi,Bi;Wt.parameters={...Wt.parameters,docs:{...(Hi=Wt.parameters)==null?void 0:Hi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Bi=(Wi=Wt.parameters)==null?void 0:Wi.docs)==null?void 0:Bi.source}}};var Gi,Yi,Xi;Bt.parameters={...Bt.parameters,docs:{...(Gi=Bt.parameters)==null?void 0:Gi.docs,source:{originalSource:`args => <>
    <ASUHeader {...args} />
    <div style={{
    width: "100%",
    height: "200vh",
    background: "#f0f0f0",
    paddingTop: 40,
    marginTop: 140
  }}>
      <h1 style={{
      textAlign: "center",
      fontFamily: "Arial"
    }}>
        Scroll section
      </h1>
    </div>
  </>`,...(Xi=(Yi=Bt.parameters)==null?void 0:Yi.docs)==null?void 0:Xi.source}}};var Vi,Ki,Zi;Gt.parameters={...Gt.parameters,docs:{...(Vi=Gt.parameters)==null?void 0:Vi.docs,source:{originalSource:`args => {
  const handleClick = () => {
    // get curent local storage value
    const titleTimestamp = localStorage.getItem("title_loaded");
    if (titleTimestamp) {
      localStorage.removeItem("title_loaded");
    }
    setTimeout(() => {
      // reload the page with button
      window.location.reload();
    }, 1000);
  };
  return <>
      <ASUHeader {...{
      ...args,
      animateTitle: true
    }} />
      <div style={{
      marginTop: 200,
      textAlign: "center"
    }}>
        <Button text="Animate Title" color="dark" onClick={handleClick} />
      </div>
    </>;
}`,...(Zi=(Ki=Gt.parameters)==null?void 0:Ki.docs)==null?void 0:Zi.source}}};const Xf=["Default","Empty","NoNavigation","NoNavigationWithButtons","BreakpointXL","WithMobileNavTree","WithButtons","WithMenuColumns","ExpandOnHover","Partner","AnimatedTitle"];export{Gt as AnimatedTitle,Ut as BreakpointXL,Dt as Default,Ft as Empty,Wt as ExpandOnHover,jt as NoNavigation,zt as NoNavigationWithButtons,Bt as Partner,qt as WithButtons,Ht as WithMenuColumns,$t as WithMobileNavTree,Xf as __namedExportsOrder,Yf as default};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
