import{r as Pt,R as St}from"./index-B2SEcK1p.js";import{g as Ua}from"./_commonjsHelpers-B3tUAs5q.js";var $a={exports:{}},an={};var Ki=Pt,Zi=Symbol.for("react.element"),Qi=Symbol.for("react.fragment"),Ji=Object.prototype.hasOwnProperty,eo=Ki.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,to={key:!0,ref:!0,__self:!0,__source:!0};function Ha(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ji.call(t,r)&&!to.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Zi,type:e,key:i,ref:o,props:a,_owner:eo.current}}an.Fragment=Qi;an.jsx=Ha;an.jsxs=Ha;$a.exports=an;var no=$a.exports,Wa={exports:{}},ro="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ao=ro,io=ao;function Ga(){}function Ba(){}Ba.resetWarningCache=Ga;var oo=function(){function e(r,a,i,o,l,f){if(f!==io){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ba,resetWarningCache:Ga};return n.PropTypes=n,n};Wa.exports=oo();var so=Wa.exports;const m=Ua(so);function Hc({packageName:e="",component:t="",type:n="",configuration:r={}}){if(!e||!t){console.error("trackReactComponent: Missing required arguments.");return}window.uds=window.uds||{},window.uds.package=window.uds.package||{},window.uds.package[e]={component:t,type:n,configuration:r}}const Xr={alt:m.string,title:m.string,src:m.string,mobileSrc:m.string,brandLink:m.string},_n={baseUrl:m.string,parentOrg:m.string,parentOrgUrl:m.string,animate:m.bool},$t={loggedIn:m.bool,loginLink:m.string,logoutLink:m.string,userName:m.string},mr={text:m.string.isRequired,color:m.oneOf(["gold","maroon","light","dark"]),href:m.string.isRequired,classes:m.string,onClick:m.func,onFocus:m.func},Vr=m.shape({id:m.number,href:m.string,text:m.string,type:m.string,selected:m.bool,items:m.arrayOf(m.arrayOf(m.object)),buttons:m.arrayOf(m.shape(mr)),class:m.string}),Wc={isPartner:m.bool,navTree:m.arrayOf(Vr),partnerLogo:m.shape(Xr),logo:m.shape(Xr),title:m.string,parentOrg:_n.parentOrg,parentOrgUrl:_n.parentOrgUrl,baseUrl:_n.baseUrl,loggedIn:$t.loggedIn,userName:$t.userName,loginLink:$t.loginLink,onLoginClick:m.func,logoutLink:$t.logoutLink,onLogoutClick:m.func,buttons:m.arrayOf(m.shape(mr)),breakpoint:m.oneOf(["Lg","Xl"]),animateTitle:m.bool,expandOnHover:m.bool,mobileNavTree:m.arrayOf(Vr),hasNavigation:m.bool,searchUrl:m.string,site:m.string,renderDiv:m.oneOf(["true","false"])};var Ya={exports:{}},W={};var re=typeof Symbol=="function"&&Symbol.for,pr=re?Symbol.for("react.element"):60103,dr=re?Symbol.for("react.portal"):60106,on=re?Symbol.for("react.fragment"):60107,sn=re?Symbol.for("react.strict_mode"):60108,ln=re?Symbol.for("react.profiler"):60114,cn=re?Symbol.for("react.provider"):60109,fn=re?Symbol.for("react.context"):60110,hr=re?Symbol.for("react.async_mode"):60111,un=re?Symbol.for("react.concurrent_mode"):60111,mn=re?Symbol.for("react.forward_ref"):60112,pn=re?Symbol.for("react.suspense"):60113,lo=re?Symbol.for("react.suspense_list"):60120,dn=re?Symbol.for("react.memo"):60115,hn=re?Symbol.for("react.lazy"):60116,co=re?Symbol.for("react.block"):60121,fo=re?Symbol.for("react.fundamental"):60117,uo=re?Symbol.for("react.responder"):60118,mo=re?Symbol.for("react.scope"):60119;function Ae(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pr:switch(e=e.type,e){case hr:case un:case on:case ln:case sn:case pn:return e;default:switch(e=e&&e.$$typeof,e){case fn:case mn:case hn:case dn:case cn:return e;default:return t}}case dr:return t}}}function Xa(e){return Ae(e)===un}W.AsyncMode=hr;W.ConcurrentMode=un;W.ContextConsumer=fn;W.ContextProvider=cn;W.Element=pr;W.ForwardRef=mn;W.Fragment=on;W.Lazy=hn;W.Memo=dn;W.Portal=dr;W.Profiler=ln;W.StrictMode=sn;W.Suspense=pn;W.isAsyncMode=function(e){return Xa(e)||Ae(e)===hr};W.isConcurrentMode=Xa;W.isContextConsumer=function(e){return Ae(e)===fn};W.isContextProvider=function(e){return Ae(e)===cn};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr};W.isForwardRef=function(e){return Ae(e)===mn};W.isFragment=function(e){return Ae(e)===on};W.isLazy=function(e){return Ae(e)===hn};W.isMemo=function(e){return Ae(e)===dn};W.isPortal=function(e){return Ae(e)===dr};W.isProfiler=function(e){return Ae(e)===ln};W.isStrictMode=function(e){return Ae(e)===sn};W.isSuspense=function(e){return Ae(e)===pn};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===on||e===un||e===ln||e===sn||e===pn||e===lo||typeof e=="object"&&e!==null&&(e.$$typeof===hn||e.$$typeof===dn||e.$$typeof===cn||e.$$typeof===fn||e.$$typeof===mn||e.$$typeof===fo||e.$$typeof===uo||e.$$typeof===mo||e.$$typeof===co)};W.typeOf=Ae;Ya.exports=W;var gr=Ya.exports;function po(e){function t(x,d,A,T,c){for(var O=0,h=0,G=0,U=0,$,R,J=0,Z=0,z,X=z=$=0,j=0,Q=0,Te=0,K=0,ze=A.length,Xe=ze-1,he,C="",B="",je="",Ne="",fe;j<ze;){if(R=A.charCodeAt(j),j===Xe&&h+U+G+O!==0&&(h!==0&&(R=h===47?10:47),U=G=O=0,ze++,Xe++),h+U+G+O===0){if(j===Xe&&(0<Q&&(C=C.replace(w,"")),0<C.trim().length)){switch(R){case 32:case 9:case 59:case 13:case 10:break;default:C+=A.charAt(j)}R=59}switch(R){case 123:for(C=C.trim(),$=C.charCodeAt(0),z=1,K=++j;j<ze;){switch(R=A.charCodeAt(j)){case 123:z++;break;case 125:z--;break;case 47:switch(R=A.charCodeAt(j+1)){case 42:case 47:e:{for(X=j+1;X<Xe;++X)switch(A.charCodeAt(X)){case 47:if(R===42&&A.charCodeAt(X-1)===42&&j+2!==X){j=X+1;break e}break;case 10:if(R===47){j=X+1;break e}}j=X}}break;case 91:R++;case 40:R++;case 34:case 39:for(;j++<Xe&&A.charCodeAt(j)!==R;);}if(z===0)break;j++}switch(z=A.substring(K,j),$===0&&($=(C=C.replace(S,"").trim()).charCodeAt(0)),$){case 64:switch(0<Q&&(C=C.replace(w,"")),R=C.charCodeAt(1),R){case 100:case 109:case 115:case 45:Q=d;break;default:Q=De}if(z=t(d,Q,z,R,c+1),K=z.length,0<de&&(Q=n(De,C,Te),fe=l(3,z,Q,d,q,se,K,R,c,T),C=Q.join(""),fe!==void 0&&(K=(z=fe.trim()).length)===0&&(R=0,z="")),0<K)switch(R){case 115:C=C.replace(ce,o);case 100:case 109:case 45:z=C+"{"+z+"}";break;case 107:C=C.replace(E,"$1 $2"),z=C+"{"+z+"}",z=te===1||te===2&&i("@"+z,3)?"@-webkit-"+z+"@"+z:"@"+z;break;default:z=C+z,T===112&&(z=(B+=z,""))}else z="";break;default:z=t(d,n(d,C,Te),z,T,c+1)}je+=z,z=Te=Q=X=$=0,C="",R=A.charCodeAt(++j);break;case 125:case 59:if(C=(0<Q?C.replace(w,""):C).trim(),1<(K=C.length))switch(X===0&&($=C.charCodeAt(0),$===45||96<$&&123>$)&&(K=(C=C.replace(" ",":")).length),0<de&&(fe=l(1,C,d,x,q,se,B.length,T,c,T))!==void 0&&(K=(C=fe.trim()).length)===0&&(C="\0\0"),$=C.charCodeAt(0),R=C.charCodeAt(1),$){case 0:break;case 64:if(R===105||R===99){Ne+=C+A.charAt(j);break}default:C.charCodeAt(K-1)!==58&&(B+=a(C,$,R,C.charCodeAt(2)))}Te=Q=X=$=0,C="",R=A.charCodeAt(++j)}}switch(R){case 13:case 10:h===47?h=0:1+$===0&&T!==107&&0<C.length&&(Q=1,C+="\0"),0<de*Fe&&l(0,C,d,x,q,se,B.length,T,c,T),se=1,q++;break;case 59:case 125:if(h+U+G+O===0){se++;break}default:switch(se++,he=A.charAt(j),R){case 9:case 32:if(U+O+h===0)switch(J){case 44:case 58:case 9:case 32:he="";break;default:R!==32&&(he=" ")}break;case 0:he="\\0";break;case 12:he="\\f";break;case 11:he="\\v";break;case 38:U+h+O===0&&(Q=Te=1,he="\f"+he);break;case 108:if(U+h+O+pe===0&&0<X)switch(j-X){case 2:J===112&&A.charCodeAt(j-3)===58&&(pe=J);case 8:Z===111&&(pe=Z)}break;case 58:U+h+O===0&&(X=j);break;case 44:h+G+U+O===0&&(Q=1,he+="\r");break;case 34:case 39:h===0&&(U=U===R?0:U===0?R:U);break;case 91:U+h+G===0&&O++;break;case 93:U+h+G===0&&O--;break;case 41:U+h+O===0&&G--;break;case 40:if(U+h+O===0){if($===0)switch(2*J+3*Z){case 533:break;default:$=1}G++}break;case 64:h+G+U+O+X+z===0&&(z=1);break;case 42:case 47:if(!(0<U+O+G))switch(h){case 0:switch(2*R+3*A.charCodeAt(j+1)){case 235:h=47;break;case 220:K=j,h=42}break;case 42:R===47&&J===42&&K+2!==j&&(A.charCodeAt(K+2)===33&&(B+=A.substring(K,j+1)),he="",h=0)}}h===0&&(C+=he)}Z=J,J=R,j++}if(K=B.length,0<K){if(Q=d,0<de&&(fe=l(2,B,Q,x,q,se,K,T,c,T),fe!==void 0&&(B=fe).length===0))return Ne+B+je;if(B=Q.join(",")+"{"+B+"}",te*pe!==0){switch(te!==2||i(B,2)||(pe=0),pe){case 111:B=B.replace(N,":-moz-$1")+B;break;case 112:B=B.replace(D,"::-webkit-input-$1")+B.replace(D,"::-moz-$1")+B.replace(D,":-ms-input-$1")+B}pe=0}}return Ne+B+je}function n(x,d,A){var T=d.trim().split(b);d=T;var c=T.length,O=x.length;switch(O){case 0:case 1:var h=0;for(x=O===0?"":x[0]+" ";h<c;++h)d[h]=r(x,d[h],A).trim();break;default:var G=h=0;for(d=[];h<c;++h)for(var U=0;U<O;++U)d[G++]=r(x[U]+" ",T[h],A).trim()}return d}function r(x,d,A){var T=d.charCodeAt(0);switch(33>T&&(T=(d=d.trim()).charCodeAt(0)),T){case 38:return d.replace(P,"$1"+x.trim());case 58:return x.trim()+d.replace(P,"$1"+x.trim());default:if(0<1*A&&0<d.indexOf("\f"))return d.replace(P,(x.charCodeAt(0)===58?"":"$1")+x.trim())}return x+d}function a(x,d,A,T){var c=x+";",O=2*d+3*A+4*T;if(O===944){x=c.indexOf(":",9)+1;var h=c.substring(x,c.length-1).trim();return h=c.substring(0,x).trim()+h+";",te===1||te===2&&i(h,1)?"-webkit-"+h+h:h}if(te===0||te===2&&!i(c,1))return c;switch(O){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(Ye,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return h=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+h+"-webkit-"+c+"-ms-flex-pack"+h+c;case 1005:return k.test(c)?c.replace(L,":-webkit-")+c.replace(L,":-moz-")+c:c;case 1e3:switch(h=c.substring(13).trim(),d=h.indexOf("-")+1,h.charCodeAt(0)+h.charCodeAt(d)){case 226:h=c.replace(F,"tb");break;case 232:h=c.replace(F,"tb-rl");break;case 220:h=c.replace(F,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+h+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(d=(c=x).length-10,h=(c.charCodeAt(d)===33?c.substring(0,d):c).substring(x.indexOf(":",7)+1).trim(),O=h.charCodeAt(0)+(h.charCodeAt(7)|0)){case 203:if(111>h.charCodeAt(8))break;case 115:c=c.replace(h,"-webkit-"+h)+";"+c;break;case 207:case 102:c=c.replace(h,"-webkit-"+(102<O?"inline-":"")+"box")+";"+c.replace(h,"-webkit-"+h)+";"+c.replace(h,"-ms-"+h+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return h=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+h+"-ms-flex-"+h+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(oe,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(oe,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(Pe.test(x)===!0)return(h=x.substring(x.indexOf(":")+1)).charCodeAt(0)===115?a(x.replace("stretch","fill-available"),d,A,T).replace(":fill-available",":stretch"):c.replace(h,"-webkit-"+h)+c.replace(h,"-moz-"+h.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,A+T===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(I,"$1-webkit-$2")+c}return c}function i(x,d){var A=x.indexOf(d===1?":":"{"),T=x.substring(0,d!==3?A:10);return A=x.substring(A+1,x.length-1),tt(d!==2?T:T.replace(xe,"$1"),A,d)}function o(x,d){var A=a(d,d.charCodeAt(0),d.charCodeAt(1),d.charCodeAt(2));return A!==d+";"?A.replace(me," or ($1)").substring(4):"("+d+")"}function l(x,d,A,T,c,O,h,G,U,$){for(var R=0,J=d,Z;R<de;++R)switch(Z=ye[R].call(g,x,J,A,T,c,O,h,G,U,$)){case void 0:case!1:case!0:case null:break;default:J=Z}if(J!==d)return J}function f(x){switch(x){case void 0:case null:de=ye.length=0;break;default:if(typeof x=="function")ye[de++]=x;else if(typeof x=="object")for(var d=0,A=x.length;d<A;++d)f(x[d]);else Fe=!!x|0}return f}function u(x){return x=x.prefix,x!==void 0&&(tt=null,x?typeof x!="function"?te=1:(te=2,tt=x):te=0),u}function g(x,d){var A=x;if(33>A.charCodeAt(0)&&(A=A.trim()),nt=A,A=[nt],0<de){var T=l(-1,d,A,A,q,se,0,0,0,0);T!==void 0&&typeof T=="string"&&(d=T)}var c=t(De,A,d,0,0);return 0<de&&(T=l(-2,c,A,A,q,se,c.length,0,0,0),T!==void 0&&(c=T)),nt="",pe=0,se=q=1,c}var S=/^\0+/g,w=/[\0\r\f]/g,L=/: */g,k=/zoo|gra/,I=/([,: ])(transform)/g,b=/,\r+?/g,P=/([\t\r\n ])*\f?&/g,E=/@(k\w+)\s*(\S*)\s*/,D=/::(place)/g,N=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,ce=/\(\s*(.*)\s*\)/g,me=/([\s\S]*?);/g,oe=/-self|flex-/g,xe=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Pe=/stretch|:\s*\w+\-(?:conte|avail)/,Ye=/([^-])(image-set\()/,se=1,q=1,pe=0,te=1,De=[],ye=[],de=0,tt=null,Fe=0,nt="";return g.use=f,g.set=u,e!==void 0&&u(e),g}var ho={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function go(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var yo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,qr=go(function(e){return yo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),yr=gr,vo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ao={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Va={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vr={};vr[yr.ForwardRef]=Ao;vr[yr.Memo]=Va;function Kr(e){return yr.isMemo(e)?Va:vr[e.$$typeof]||vo}var So=Object.defineProperty,xo=Object.getOwnPropertyNames,Zr=Object.getOwnPropertySymbols,To=Object.getOwnPropertyDescriptor,wo=Object.getPrototypeOf,Qr=Object.prototype;function qa(e,t,n){if(typeof t!="string"){if(Qr){var r=wo(t);r&&r!==Qr&&qa(e,r,n)}var a=xo(t);Zr&&(a=a.concat(Zr(t)));for(var i=Kr(e),o=Kr(t),l=0;l<a.length;++l){var f=a[l];if(!bo[f]&&!(n&&n[f])&&!(o&&o[f])&&!(i&&i[f])){var u=To(t,f);try{So(e,f,u)}catch{}}}}return e}var Eo=qa;const _o=Ua(Eo);var Ka={env:{NODE_ENV:"production"}},Ee={};function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Jr=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},$n=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!gr.typeOf(e)},Qt=Object.freeze([]),Ze=Object.freeze({});function Nt(e){return typeof e=="function"}function ea(e){return e.displayName||e.name||"Component"}function br(e){return e&&typeof e.styledComponentId=="string"}var yt=typeof Ka<"u"&&Ee!==void 0&&(Ee.REACT_APP_SC_ATTR||Ee.SC_ATTR)||"data-styled",Ar=typeof window<"u"&&"HTMLElement"in window,Oo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Ka<"u"&&Ee!==void 0&&(Ee.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ee.REACT_APP_SC_DISABLE_SPEEDY!==""?Ee.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ee.REACT_APP_SC_DISABLE_SPEEDY:Ee.SC_DISABLE_SPEEDY!==void 0&&Ee.SC_DISABLE_SPEEDY!==""&&Ee.SC_DISABLE_SPEEDY!=="false"&&Ee.SC_DISABLE_SPEEDY));function Lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ko=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,i=a.length,o=i;n>=o;)(o<<=1)<0&&Lt(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var f=this.indexOfGroup(n+1),u=0,g=r.length;u<g;u++)this.tag.insertRule(f,r[u])&&(this.groupSizes[n]++,f++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),i=a+r;this.groupSizes[n]=0;for(var o=a;o<i;o++)this.tag.deleteRule(a)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],i=this.indexOfGroup(n),o=i+a,l=i;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Xt=new Map,Jt=new Map,Ot=1,Ht=function(e){if(Xt.has(e))return Xt.get(e);for(;Jt.has(Ot);)Ot++;var t=Ot++;return Xt.set(e,t),Jt.set(t,e),t},Co=function(e){return Jt.get(e)},Po=function(e,t){t>=Ot&&(Ot=t+1),Xt.set(e,t),Jt.set(t,e)},No="style["+yt+'][data-styled-version="5.3.11"]',Io=new RegExp("^"+yt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ro=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Lo=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(Io);if(l){var f=0|parseInt(l[1],10),u=l[2];f!==0&&(Po(u,f),Ro(e,u,l[3]),e.getTag().insertRules(f,r)),r.length=0}else r.push(o)}}},Mo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Za=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){for(var f=l.childNodes,u=f.length;u>=0;u--){var g=f[u];if(g&&g.nodeType===1&&g.hasAttribute(yt))return g}}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(yt,"active"),r.setAttribute("data-styled-version","5.3.11");var o=Mo();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Do=function(){function e(n){var r=this.element=Za(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var f=i[o];if(f.ownerNode===a)return f}Lt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Fo=function(){function e(n){var r=this.element=Za(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(a,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),zo=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ta=Ar,jo={isServer:!Ar,useCSSOMInjection:!Oo},Qa=function(){function e(n,r,a){n===void 0&&(n=Ze),r===void 0&&(r={}),this.options=He({},jo,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Ar&&ta&&(ta=!1,function(i){for(var o=document.querySelectorAll(No),l=0,f=o.length;l<f;l++){var u=o[l];u&&u.getAttribute(yt)!=="active"&&(Lo(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ht(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(He({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,i=r.useCSSOMInjection,o=r.target,n=a?new zo(o):i?new Do(o):new Fo(o),new ko(n)));var n,r,a,i,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ht(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},t.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(Ht(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ht(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,i="",o=0;o<a;o++){var l=Co(o);if(l!==void 0){var f=n.names.get(l),u=r.getGroup(o);if(f&&u&&f.size){var g=yt+".g"+o+'[id="'+l+'"]',S="";f!==void 0&&f.forEach(function(w){w.length>0&&(S+=w+",")}),i+=""+u+g+'{content:"'+S+`"}/*!sc*/
`}}}return i}(this)},e}(),Uo=/(a)(d)/gi,na=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=na(t%52)+n;return(na(t%52)+n).replace(Uo,"$1-$2")}var pt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ja=function(e){return pt(5381,e)};function $o(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nt(n)&&!br(n))return!1}return!0}var Ho=Ja("5.3.11"),Wo=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$o(t),this.componentId=n,this.baseHash=pt(Ho,n),this.baseStyle=r,Qa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))i.push(this.staticRulesId);else{var o=vt(this.rules,t,n,r).join(""),l=Hn(pt(this.baseHash,o)>>>0);if(!n.hasNameForId(a,l)){var f=r(o,"."+l,void 0,a);n.insertRules(a,l,f)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,g=pt(this.baseHash,r.hash),S="",w=0;w<u;w++){var L=this.rules[w];if(typeof L=="string")S+=L;else if(L){var k=vt(L,t,n,r),I=Array.isArray(k)?k.join(""):k;g=pt(g,I+w),S+=I}}if(S){var b=Hn(g>>>0);if(!n.hasNameForId(a,b)){var P=r(S,"."+b,void 0,a);n.insertRules(a,b,P)}i.push(b)}}return i.join(" ")},e}(),Go=/^\s*\/\/.*$/gm,Bo=[":","[",".","#"];function Yo(e){var t,n,r,a,i=Ze,o=i.options,l=o===void 0?Ze:o,f=i.plugins,u=f===void 0?Qt:f,g=new po(l),S=[],w=function(I){function b(P){if(P)try{I(P+"}")}catch{}}return function(P,E,D,N,F,ce,me,oe,xe,Pe){switch(P){case 1:if(xe===0&&E.charCodeAt(0)===64)return I(E+";"),"";break;case 2:if(oe===0)return E+"/*|*/";break;case 3:switch(oe){case 102:case 112:return I(D[0]+E),"";default:return E+(Pe===0?"/*|*/":"")}case-2:E.split("/*|*/}").forEach(b)}}}(function(I){S.push(I)}),L=function(I,b,P){return b===0&&Bo.indexOf(P[n.length])!==-1||P.match(a)?I:"."+t};function k(I,b,P,E){E===void 0&&(E="&");var D=I.replace(Go,""),N=b&&P?P+" "+b+" { "+D+" }":D;return t=E,n=b,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),g(P||!b?"":b,N)}return g.use([].concat(u,[function(I,b,P){I===2&&P.length&&P[0].lastIndexOf(n)>0&&(P[0]=P[0].replace(r,L))},w,function(I){if(I===-2){var b=S;return S=[],b}}])),k.hash=u.length?u.reduce(function(I,b){return b.name||Lt(15),pt(I,b.name)},5381).toString():"",k}var ei=St.createContext();ei.Consumer;var ti=St.createContext(),Xo=(ti.Consumer,new Qa),Wn=Yo();function Vo(){return Pt.useContext(ei)||Xo}function qo(){return Pt.useContext(ti)||Wn}var Ko=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=Wn);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.toString=function(){return Lt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Wn),this.name+t.hash},e}(),Zo=/([A-Z])/,Qo=/([A-Z])/g,Jo=/^ms-/,es=function(e){return"-"+e.toLowerCase()};function ra(e){return Zo.test(e)?e.replace(Qo,es).replace(Jo,"-ms-"):e}var aa=function(e){return e==null||e===!1||e===""};function vt(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,l=e.length;o<l;o+=1)(a=vt(e[o],t,n,r))!==""&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}if(aa(e))return"";if(br(e))return"."+e.styledComponentId;if(Nt(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var f=e(t);return vt(f,t,n,r)}var u;return e instanceof Ko?n?(e.inject(n,r),e.getName(r)):e:$n(e)?function g(S,w){var L,k,I=[];for(var b in S)S.hasOwnProperty(b)&&!aa(S[b])&&(Array.isArray(S[b])&&S[b].isCss||Nt(S[b])?I.push(ra(b)+":",S[b],";"):$n(S[b])?I.push.apply(I,g(S[b],b)):I.push(ra(b)+": "+(L=b,(k=S[b])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||L in ho||L.startsWith("--")?String(k).trim():k+"px")+";"));return w?[w+" {"].concat(I,["}"]):I}(e):e.toString()}var ia=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ts(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Nt(e)||$n(e)?ia(vt(Jr(Qt,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ia(vt(Jr(e,n)))}var ns=function(e,t,n){return n===void 0&&(n=Ze),e.theme!==n.theme&&e.theme||t||n.theme},rs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,as=/(^-|-$)/g;function On(e){return e.replace(rs,"-").replace(as,"")}var is=function(e){return Hn(Ja(e)>>>0)};function Wt(e){return typeof e=="string"&&!0}var Gn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},os=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ss(e,t,n){var r=e[n];Gn(t)&&Gn(r)?ni(r,t):e[n]=t}function ni(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Gn(o))for(var l in o)os(l)&&ss(e,o[l],l)}return e}var ri=St.createContext();ri.Consumer;var kn={};function ai(e,t,n){var r=br(e),a=!Wt(e),i=t.attrs,o=i===void 0?Qt:i,l=t.componentId,f=l===void 0?function(E,D){var N=typeof E!="string"?"sc":On(E);kn[N]=(kn[N]||0)+1;var F=N+"-"+is("5.3.11"+N+kn[N]);return D?D+"-"+F:F}(t.displayName,t.parentComponentId):l,u=t.displayName,g=u===void 0?function(E){return Wt(E)?"styled."+E:"Styled("+ea(E)+")"}(e):u,S=t.displayName&&t.componentId?On(t.displayName)+"-"+t.componentId:t.componentId||f,w=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,L=t.shouldForwardProp;r&&e.shouldForwardProp&&(L=t.shouldForwardProp?function(E,D,N){return e.shouldForwardProp(E,D,N)&&t.shouldForwardProp(E,D,N)}:e.shouldForwardProp);var k,I=new Wo(n,S,r?e.componentStyle:void 0),b=I.isStatic&&o.length===0,P=function(E,D){return function(N,F,ce,me){var oe=N.attrs,xe=N.componentStyle,Pe=N.defaultProps,Ye=N.foldedComponentIds,se=N.shouldForwardProp,q=N.styledComponentId,pe=N.target,te=function(T,c,O){T===void 0&&(T=Ze);var h=He({},c,{theme:T}),G={};return O.forEach(function(U){var $,R,J,Z=U;for($ in Nt(Z)&&(Z=Z(h)),Z)h[$]=G[$]=$==="className"?(R=G[$],J=Z[$],R&&J?R+" "+J:R||J):Z[$]}),[h,G]}(ns(F,Pt.useContext(ri),Pe)||Ze,F,oe),De=te[0],ye=te[1],de=function(T,c,O,h){var G=Vo(),U=qo(),$=c?T.generateAndInjectStyles(Ze,G,U):T.generateAndInjectStyles(O,G,U);return $}(xe,me,De),tt=ce,Fe=ye.$as||F.$as||ye.as||F.as||pe,nt=Wt(Fe),x=ye!==F?He({},F,{},ye):F,d={};for(var A in x)A[0]!=="$"&&A!=="as"&&(A==="forwardedAs"?d.as=x[A]:(se?se(A,qr,Fe):!nt||qr(A))&&(d[A]=x[A]));return F.style&&ye.style!==F.style&&(d.style=He({},F.style,{},ye.style)),d.className=Array.prototype.concat(Ye,q,de!==q?de:null,F.className,ye.className).filter(Boolean).join(" "),d.ref=tt,Pt.createElement(Fe,d)}(k,E,D,b)};return P.displayName=g,(k=St.forwardRef(P)).attrs=w,k.componentStyle=I,k.displayName=g,k.shouldForwardProp=L,k.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Qt,k.styledComponentId=S,k.target=r?e.target:e,k.withComponent=function(E){var D=t.componentId,N=function(ce,me){if(ce==null)return{};var oe,xe,Pe={},Ye=Object.keys(ce);for(xe=0;xe<Ye.length;xe++)oe=Ye[xe],me.indexOf(oe)>=0||(Pe[oe]=ce[oe]);return Pe}(t,["componentId"]),F=D&&D+"-"+(Wt(E)?E:On(ea(E)));return ai(E,He({},N,{attrs:w,componentId:F}),n)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?ni({},e.defaultProps,E):E}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),a&&_o(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var Bn=function(e){return function t(n,r,a){if(a===void 0&&(a=Ze),!gr.isValidElementType(r))return Lt(1,String(r));var i=function(){return n(r,a,ts.apply(void 0,arguments))};return i.withConfig=function(o){return t(n,r,He({},a,{},o))},i.attrs=function(o){return t(n,r,He({},a,{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i}(ai,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Bn[e]=Bn(e)});const ls=Bn.a`
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
`,ii=({href:e,color:t,text:n,classes:r,onClick:a,onFocus:i})=>no.jsx(ls,{href:e,className:`button-${t} ${r??""}`,onClick:a,onFocus:i,children:n});ii.propTypes={...mr};ii.__docgenInfo={description:`@param {ButtonProps} props
@returns {JSX.Element}`,methods:[],displayName:"Button",props:{text:{description:"",type:{name:"string"},required:!0},color:{description:"",type:{name:"enum",value:[{value:'"gold"',computed:!1},{value:'"maroon"',computed:!1},{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},href:{description:"",type:{name:"string"},required:!0},classes:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1}}};const Gc={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},cs={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Bc=cs,fs={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Yc=fs,Xc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},us={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Vc=us,oa=()=>{};let Sr={},oi={},si=null,li={mark:oa,measure:oa};try{typeof window<"u"&&(Sr=window),typeof document<"u"&&(oi=document),typeof MutationObserver<"u"&&(si=MutationObserver),typeof performance<"u"&&(li=performance)}catch{}const{userAgent:sa=""}=Sr.navigator||{},Qe=Sr,Y=oi,la=si,Gt=li;Qe.document;const Be=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",ci=~sa.indexOf("MSIE")||~sa.indexOf("Trident/");var V="classic",fi="duotone",ve="sharp",be="sharp-duotone",ms=[V,fi,ve,be],ps={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ca={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ds=["kit"],hs=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,gs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ys={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},vs={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},bs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},As={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Ss={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},xs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ui={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Ts=["solid","regular","light","thin","duotone","brands"],mi=[1,2,3,4,5,6,7,8,9,10],ws=mi.concat([11,12,13,14,15,16,17,18,19,20]),Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Es=[...Object.keys(As),...Ts,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY].concat(mi.map(e=>"".concat(e,"x"))).concat(ws.map(e=>"w-".concat(e))),_s={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Os={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ks={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},fa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const We="___FONT_AWESOME___",Yn=16,pi="fa",di="svg-inline--fa",ct="data-fa-i2svg",Xn="data-fa-pseudo-element",Cs="data-fa-pseudo-element-pending",xr="data-prefix",Tr="data-icon",ua="fontawesome-i2svg",Ps="async",Ns=["HTML","HEAD","STYLE","SCRIPT"],hi=(()=>{try{return!0}catch{return!1}})(),gi=[V,ve,be];function Mt(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[V]}})}const yi={...ui};yi[V]={...ui[V],...ca.kit,...ca["kit-duotone"]};const st=Mt(yi),Vn={...xs};Vn[V]={...Vn[V],...fa.kit,...fa["kit-duotone"]};const It=Mt(Vn),qn={...Ss};qn[V]={...qn[V],...ks.kit};const lt=Mt(qn),Kn={...bs};Kn[V]={...Kn[V],...Os.kit};const Is=Mt(Kn),Rs=hs,vi="fa-layers-text",Ls=gs,Ms={...ps};Mt(Ms);const Ds=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Cn=Et,bt=new Set;Object.keys(It[V]).map(bt.add.bind(bt));Object.keys(It[ve]).map(bt.add.bind(bt));Object.keys(It[be]).map(bt.add.bind(bt));const Fs=[...ds,...Es],kt=Qe.FontAwesomeConfig||{};function zs(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function js(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}Y&&typeof Y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=js(zs(n));a!=null&&(kt[r]=a)});const bi={styleDefault:"solid",familyDefault:"classic",cssPrefix:pi,replacementClass:di,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kt.familyPrefix&&(kt.cssPrefix=kt.familyPrefix);const At={...bi,...kt};At.autoReplaceSvg||(At.observeMutations=!1);const v={};Object.keys(bi).forEach(e=>{Object.defineProperty(v,e,{enumerable:!0,set:function(t){At[e]=t,Ct.forEach(n=>n(v))},get:function(){return At[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){At.cssPrefix=e,Ct.forEach(t=>t(v))},get:function(){return At.cssPrefix}});Qe.FontAwesomeConfig=v;const Ct=[];function Us(e){return Ct.push(e),()=>{Ct.splice(Ct.indexOf(e),1)}}const Ve=Yn,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $s(e){if(!e||!Be)return;const t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Y.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Y.head.insertBefore(t,r),e}const Hs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rt(){let e=12,t="";for(;e-- >0;)t+=Hs[Math.random()*62|0];return t}function xt(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function wr(e){return e.classList?xt(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Ai(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ws(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Ai(e[n]),'" '),"").trim()}function gn(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Er(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function Gs(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:u}}function Bs(e){let{transform:t,width:n=Yn,height:r=Yn,startCentered:a=!1}=e,i="";return a&&ci?i+="translate(".concat(t.x/Ve-n/2,"em, ").concat(t.y/Ve-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):i+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),i+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Ys=`:root, :host {
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
}`;function Si(){const e=pi,t=di,n=v.cssPrefix,r=v.replacementClass;let a=Ys;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let ma=!1;function Pn(){v.autoAddCss&&!ma&&($s(Si()),ma=!0)}var Xs={mixout(){return{dom:{css:Si,insertCss:Pn}}},hooks(){return{beforeDOMElementCreation(){Pn()},beforeI2svg(){Pn()}}}};const Ge=Qe||{};Ge[We]||(Ge[We]={});Ge[We].styles||(Ge[We].styles={});Ge[We].hooks||(Ge[We].hooks={});Ge[We].shims||(Ge[We].shims=[]);var Le=Ge[We];const xi=[],Ti=function(){Y.removeEventListener("DOMContentLoaded",Ti),en=1,xi.map(e=>e())};let en=!1;Be&&(en=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),en||Y.addEventListener("DOMContentLoaded",Ti));function Vs(e){Be&&(en?setTimeout(e,0):xi.push(e))}function Dt(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Ai(e):"<".concat(t," ").concat(Ws(n),">").concat(r.map(Dt).join(""),"</").concat(t,">")}function pa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Nn=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=n,f,u,g;for(r===void 0?(f=1,g=t[i[0]]):(f=0,g=r);f<o;f++)u=i[f],g=l(g,t[u],u,t);return g};function qs(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Zn(e){const t=qs(e);return t.length===1?t[0].toString(16):null}function Ks(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function da(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=da(t);typeof Le.hooks.addPack=="function"&&!r?Le.hooks.addPack(e,da(t)):Le.styles[e]={...Le.styles[e]||{},...a},e==="fas"&&Qn("fa",t)}const{styles:ot,shims:Zs}=Le,Qs={[V]:Object.values(lt[V]),[ve]:Object.values(lt[ve]),[be]:Object.values(lt[be])};let _r=null,wi={},Ei={},_i={},Oi={},ki={};const Js={[V]:Object.keys(st[V]),[ve]:Object.keys(st[ve]),[be]:Object.keys(st[be])};function el(e){return~Fs.indexOf(e)}function tl(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!el(a)?a:null}const Ci=()=>{const e=r=>Nn(ot,(a,i,o)=>(a[o]=Nn(i,r,{}),a),{});wi=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=i}),r)),Ei=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=i}),r)),ki=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(l=>{r[l]=i}),r});const t="far"in ot||v.autoFetchSvg,n=Nn(Zs,(r,a)=>{const i=a[0];let o=a[1];const l=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});_i=n.names,Oi=n.unicodes,_r=yn(v.styleDefault,{family:v.familyDefault})};Us(e=>{_r=yn(e.styleDefault,{family:v.familyDefault})});Ci();function Or(e,t){return(wi[e]||{})[t]}function nl(e,t){return(Ei[e]||{})[t]}function Ke(e,t){return(ki[e]||{})[t]}function Pi(e){return _i[e]||{prefix:null,iconName:null}}function rl(e){const t=Oi[e],n=Or("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return _r}const kr=()=>({prefix:null,iconName:null,rest:[]});function yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=V}=t,r=st[n][e],a=It[n][e]||It[n][r],i=e in Le.styles?e:null;return a||i||null}const al={[V]:Object.keys(lt[V]),[ve]:Object.keys(lt[ve]),[be]:Object.keys(lt[be])};function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[V]:"".concat(v.cssPrefix,"-").concat(V),[ve]:"".concat(v.cssPrefix,"-").concat(ve),[be]:"".concat(v.cssPrefix,"-").concat(be)};let a=null,i=V;const o=ms.filter(f=>f!==fi);o.forEach(f=>{(e.includes(r[f])||e.some(u=>al[f].includes(u)))&&(i=f)});const l=e.reduce((f,u)=>{const g=tl(v.cssPrefix,u);if(ot[u]?(u=Qs[i].includes(u)?Is[i][u]:u,a=u,f.prefix=u):Js[i].indexOf(u)>-1?(a=u,f.prefix=yn(u,{family:i})):g?f.iconName=g:u!==v.replacementClass&&!o.some(S=>u===r[S])&&f.rest.push(u),!n&&f.prefix&&f.iconName){const S=a==="fa"?Pi(f.iconName):{},w=Ke(f.prefix,f.iconName);S.prefix&&(a=null),f.iconName=S.iconName||w||f.iconName,f.prefix=S.prefix||f.prefix,f.prefix==="far"&&!ot.far&&ot.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},kr());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===ve&&(ot.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ke(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===be&&(ot.fasds||v.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Ke(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Je()||"fas"),l}class il{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...a[i]},Qn(i,a[i]);const o=lt[V][i];o&&Qn(o,a[i]),Ci()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:l}=r[a],f=l[2];t[i]||(t[i]={}),f.length>0&&f.forEach(u=>{typeof u=="string"&&(t[i][u]=l)}),t[i][o]=l}),t}}let ha=[],dt={};const gt={},ol=Object.keys(gt);function sl(e,t){let{mixoutsTo:n}=t;return ha=e,dt={},Object.keys(gt).forEach(r=>{ol.indexOf(r)===-1&&delete gt[r]}),ha.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{dt[o]||(dt[o]=[]),dt[o].push(i[o])})}r.provides&&r.provides(gt)}),n}function Jn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(dt[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function ft(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(dt[e]||[]).forEach(i=>{i.apply(null,n)})}function et(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gt[e]?gt[e].apply(null,t):void 0}function er(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Je();if(t)return t=Ke(n,t)||t,pa(Ni.definitions,n,t)||pa(Le.styles,n,t)}const Ni=new il,ll=()=>{v.autoReplaceSvg=!1,v.observeMutations=!1,ft("noAuto")},cl={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ft("beforeI2svg",e),et("pseudoElements2svg",e),et("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Vs(()=>{ul({autoReplaceSvgRoot:t}),ft("watch",e)})}},fl={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ke(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=yn(e[0]);return{prefix:n,iconName:Ke(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Rs))){const t=vn(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Je(),iconName:Ke(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Je();return{prefix:t,iconName:Ke(t,e)||e}}}},Se={noAuto:ll,config:v,dom:cl,parse:fl,library:Ni,findIconDefinition:er,toHtml:Dt},ul=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=Y}=e;(Object.keys(Le.styles).length>0||v.autoFetchSvg)&&Be&&v.autoReplaceSvg&&Se.dom.i2svg({node:t})};function bn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Dt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Be)return;const n=Y.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ml(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(Er(o)&&n.found&&!r.found){const{width:l,height:f}=n,u={x:l/f/2,y:.5};a.style=gn({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}function pl(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:r}]}]}function Cr(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:l,maskId:f,titleId:u,extra:g,watchable:S=!1}=e,{width:w,height:L}=n.found?n:t,k=r==="fak",I=[v.replacementClass,a?"".concat(v.cssPrefix,"-").concat(a):""].filter(F=>g.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(g.classes).join(" ");let b={children:[],attributes:{...g.attributes,"data-prefix":r,"data-icon":a,class:I,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(L)}};const P=k&&!~g.classes.indexOf("fa-fw")?{width:"".concat(w/L*16*.0625,"em")}:{};S&&(b.attributes[ct]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Rt())},children:[l]}),delete b.attributes.title);const E={...b,prefix:r,iconName:a,main:t,mask:n,maskId:f,transform:i,symbol:o,styles:{...P,...g.styles}},{children:D,attributes:N}=n.found&&t.found?et("generateAbstractMask",E)||{children:[],attributes:{}}:et("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=D,E.attributes=N,o?pl(E):ml(E)}function ga(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:l=!1}=e,f={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};l&&(f[ct]="");const u={...o.styles};Er(a)&&(u.transform=Bs({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const g=gn(u);g.length>0&&(f.style=g);const S=[];return S.push({tag:"span",attributes:f,children:[t]}),i&&S.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),S}function dl(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=gn(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:In}=Le;function tr(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Cn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Cn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Cn.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const hl={found:!1,width:512,height:512};function gl(e,t){!hi&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nr(e,t){let n=t;return t==="fa"&&v.styleDefault!==null&&(t=Je()),new Promise((r,a)=>{if(n==="fa"){const i=Pi(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&In[t]&&In[t][e]){const i=In[t][e];return r(tr(i))}gl(e,t),r({...hl,icon:v.showMissingIcons&&e?et("missingIconAbstract")||{}:{}})})}const ya=()=>{},rr=v.measurePerformance&&Gt&&Gt.mark&&Gt.measure?Gt:{mark:ya,measure:ya},_t='FA "6.6.0"',yl=e=>(rr.mark("".concat(_t," ").concat(e," begins")),()=>Ii(e)),Ii=e=>{rr.mark("".concat(_t," ").concat(e," ends")),rr.measure("".concat(_t," ").concat(e),"".concat(_t," ").concat(e," begins"),"".concat(_t," ").concat(e," ends"))};var Pr={begin:yl,end:Ii};const Vt=()=>{};function va(e){return typeof(e.getAttribute?e.getAttribute(ct):null)=="string"}function vl(e){const t=e.getAttribute?e.getAttribute(xr):null,n=e.getAttribute?e.getAttribute(Tr):null;return t&&n}function bl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Al(){return v.autoReplaceSvg===!0?qt.replace:qt[v.autoReplaceSvg]||qt.replace}function Sl(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function xl(e){return Y.createElement(e)}function Ri(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Sl:xl}=t;if(typeof e=="string")return Y.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(Ri(i,{ceFn:n}))}),r}function Tl(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const qt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ri(n),t)}),t.getAttribute(ct)===null&&v.keepOriginalSource){let n=Y.createComment(Tl(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~wr(t).indexOf(v.replacementClass))return qt.replace(e);const r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===v.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>Dt(i)).join(`
`);t.setAttribute(ct,""),t.innerHTML=a}};function ba(e){e()}function Li(e,t){const n=typeof t=="function"?t:Vt;if(e.length===0)n();else{let r=ba;v.mutateApproach===Ps&&(r=Qe.requestAnimationFrame||ba),r(()=>{const a=Al(),i=Pr.begin("mutate");e.map(a),i(),n()})}}let Nr=!1;function Mi(){Nr=!0}function ar(){Nr=!1}let tn=null;function Aa(e){if(!la||!v.observeMutations)return;const{treeCallback:t=Vt,nodeCallback:n=Vt,pseudoElementsCallback:r=Vt,observeMutationsRoot:a=Y}=e;tn=new la(i=>{if(Nr)return;const o=Je();xt(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!va(l.addedNodes[0])&&(v.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&v.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&va(l.target)&&~Ds.indexOf(l.attributeName))if(l.attributeName==="class"&&vl(l.target)){const{prefix:f,iconName:u}=vn(wr(l.target));l.target.setAttribute(xr,f||o),u&&l.target.setAttribute(Tr,u)}else bl(l.target)&&n(l.target)})}),Be&&tn.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function wl(){tn&&tn.disconnect()}function El(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function _l(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=vn(wr(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=nl(a.prefix,e.innerText)||Or(a.prefix,Zn(e.innerText))),!a.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ol(e){const t=xt(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||Rt()):(t["aria-hidden"]="true",t.focusable="false")),t}function kl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=_l(e),i=Ol(e),o=Jn("parseNodeAttributes",{},e);let l=t.styleParser?El(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i},...o}}const{styles:Cl}=Le;function Di(e){const t=v.autoReplaceSvg==="nest"?Sa(e,{styleParser:!1}):Sa(e);return~t.extra.classes.indexOf(vi)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}let Me=new Set;gi.map(e=>{Me.add("fa-".concat(e))});Object.keys(st[V]).map(Me.add.bind(Me));Object.keys(st[ve]).map(Me.add.bind(Me));Object.keys(st[be]).map(Me.add.bind(Me));Me=[...Me];function xa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();const n=Y.documentElement.classList,r=g=>n.add("".concat(ua,"-").concat(g)),a=g=>n.remove("".concat(ua,"-").concat(g)),i=v.autoFetchSvg?Me:gi.map(g=>"fa-".concat(g)).concat(Object.keys(Cl));i.includes("fa")||i.push("fa");const o=[".".concat(vi,":not([").concat(ct,"])")].concat(i.map(g=>".".concat(g,":not([").concat(ct,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=xt(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();const f=Pr.begin("onTree"),u=l.reduce((g,S)=>{try{const w=Di(S);w&&g.push(w)}catch(w){hi||w.name==="MissingIcon"&&console.error(w)}return g},[]);return new Promise((g,S)=>{Promise.all(u).then(w=>{Li(w,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),g()})}).catch(w=>{f(),S(w)})})}function Pl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Di(e).then(n=>{n&&Li([n],t)})}function Nl(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:er(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:er(a||{})),e(r,{...n,mask:a})}}const Il=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Re,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:l=null,classes:f=[],attributes:u={},styles:g={}}=t;if(!e)return;const{prefix:S,iconName:w,icon:L}=e;return bn({type:"icon",...e},()=>(ft("beforeDOMElementCreation",{iconDefinition:e,params:t}),v.autoA11y&&(o?u["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(l||Rt()):(u["aria-hidden"]="true",u.focusable="false")),Cr({icons:{main:tr(L),mask:a?tr(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:w,transform:{...Re,...n},symbol:r,title:o,maskId:i,titleId:l,extra:{attributes:u,styles:g,classes:f}})))};var Rl={mixout(){return{icon:Nl(Il)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=xa,e.nodeCallback=Pl,e}}},provides(e){e.i2svg=function(t){const{node:n=Y,callback:r=()=>{}}=t;return xa(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:l,symbol:f,mask:u,maskId:g,extra:S}=n;return new Promise((w,L)=>{Promise.all([nr(r,o),u.iconName?nr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[I,b]=k;w([t,Cr({icons:{main:I,mask:b},prefix:o,iconName:r,transform:l,symbol:f,maskId:g,title:a,titleId:i,extra:S,watchable:!0})])}).catch(L)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const l=gn(o);l.length>0&&(r.style=l);let f;return Er(i)&&(f=et("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},Ll={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return bn({type:"layer"},()=>{ft("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ml={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return bn({type:"counter",content:e},()=>(ft("beforeDOMElementCreation",{content:e,params:t}),dl({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(v.cssPrefix,"-layers-counter"),...r]}})))}}}},Dl={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Re,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return bn({type:"text",content:e},()=>(ft("beforeDOMElementCreation",{content:e,params:t}),ga({content:e,transform:{...Re,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(v.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,l=null;if(ci){const f=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/f,l=u.height/f}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,ga({content:t.innerHTML,width:o,height:l,transform:a,title:r,extra:i,watchable:!0})])}}};const Fl=new RegExp('"',"ug"),Ta=[1105920,1112319],wa={FontAwesome:{normal:"fas",400:"fas"},...vs,...ys,..._s},ir=Object.keys(wa).reduce((e,t)=>(e[t.toLowerCase()]=wa[t],e),{}),zl=Object.keys(ir).reduce((e,t)=>{const n=ir[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function jl(e){const t=e.replace(Fl,""),n=Ks(t,0),r=n>=Ta[0]&&n<=Ta[1],a=t.length===2?t[0]===t[1]:!1;return{value:Zn(a?t[0]:t),isSecondary:r||a}}function Ul(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(ir[n]||{})[a]||zl[n]}function Ea(e,t){const n="".concat(Cs).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=xt(e.children).filter(w=>w.getAttribute(Xn)===t)[0],l=Qe.getComputedStyle(e,t),f=l.getPropertyValue("font-family"),u=f.match(Ls),g=l.getPropertyValue("font-weight"),S=l.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&S!=="none"&&S!==""){const w=l.getPropertyValue("content");let L=Ul(f,g);const{value:k,isSecondary:I}=jl(w),b=u[0].startsWith("FontAwesome");let P=Or(L,k),E=P;if(b){const D=rl(k);D.iconName&&D.prefix&&(P=D.iconName,L=D.prefix)}if(P&&!I&&(!o||o.getAttribute(xr)!==L||o.getAttribute(Tr)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);const D=kl(),{extra:N}=D;N.attributes[Xn]=t,nr(P,L).then(F=>{const ce=Cr({...D,icons:{main:F,mask:kr()},prefix:L,iconName:E,extra:N,watchable:!0}),me=Y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(me,e.firstChild):e.appendChild(me),me.outerHTML=ce.map(oe=>Dt(oe)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function $l(e){return Promise.all([Ea(e,"::before"),Ea(e,"::after")])}function Hl(e){return e.parentNode!==document.head&&!~Ns.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _a(e){if(Be)return new Promise((t,n)=>{const r=xt(e.querySelectorAll("*")).filter(Hl).map($l),a=Pr.begin("searchPseudoElements");Mi(),Promise.all(r).then(()=>{a(),ar(),t()}).catch(()=>{a(),ar(),n()})})}var Wl={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=_a,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=Y}=t;v.searchPseudoElements&&_a(n)}}};let Oa=!1;var Gl={mixout(){return{dom:{unwatch(){Mi(),Oa=!0}}}},hooks(){return{bootstrap(){Aa(Jn("mutationObserverCallbacks",{}))},noAuto(){wl()},watch(e){const{observeMutationsRoot:t}=e;Oa?ar():Aa(Jn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ka=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Bl={mixout(){return{parse:{transform:e=>ka(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ka(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),g={transform:"".concat(l," ").concat(f," ").concat(u)},S={transform:"translate(".concat(i/2*-1," -256)")},w={outer:o,inner:g,path:S};return{tag:"g",attributes:{...w.outer},children:[{tag:"g",attributes:{...w.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...w.path}}]}]}}}};const Rn={x:0,y:0,width:"100%",height:"100%"};function Ca(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Yl(e){return e.tag==="g"?e.children:[e]}var Xl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?vn(n.split(" ").map(a=>a.trim())):kr();return r.prefix||(r.prefix=Je()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:l}=t;const{width:f,icon:u}=a,{width:g,icon:S}=i,w=Gs({transform:l,containerWidth:g,iconWidth:f}),L={tag:"rect",attributes:{...Rn,fill:"white"}},k=u.children?{children:u.children.map(Ca)}:{},I={tag:"g",attributes:{...w.inner},children:[Ca({tag:u.tag,attributes:{...u.attributes,...w.path},...k})]},b={tag:"g",attributes:{...w.outer},children:[I]},P="mask-".concat(o||Rt()),E="clip-".concat(o||Rt()),D={tag:"mask",attributes:{...Rn,id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[L,b]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Yl(S)},D]};return n.push(N,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")"),...Rn}}),{children:n,attributes:r}}}},Vl={provides(e){let t=!1;Qe.matchMedia&&(t=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...a,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ql={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Kl=[Xs,Rl,Ll,Ml,Dl,Wl,Gl,Bl,Xl,Vl,ql];sl(Kl,{mixoutsTo:Se});Se.noAuto;Se.config;Se.library;Se.dom;const or=Se.parse;Se.findIconDefinition;Se.toHtml;const Zl=Se.icon;Se.layer;Se.text;Se.counter;function Pa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pa(Object(n),!0).forEach(function(r){ht(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nn(e){"@babel/helpers - typeof";return nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nn(e)}function ht(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ql(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Jl(e,t){if(e==null)return{};var n=Ql(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sr(e){return ec(e)||tc(e)||nc(e)||rc()}function ec(e){if(Array.isArray(e))return lr(e)}function tc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nc(e,t){if(e){if(typeof e=="string")return lr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lr(e,t)}}function lr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ac(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,f=e.spin,u=e.spinPulse,g=e.spinReverse,S=e.pulse,w=e.fixedWidth,L=e.inverse,k=e.border,I=e.listItem,b=e.flip,P=e.size,E=e.rotation,D=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":f,"fa-spin-reverse":g,"fa-spin-pulse":u,"fa-pulse":S,"fa-fw":w,"fa-inverse":L,"fa-border":k,"fa-li":I,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},ht(t,"fa-".concat(P),typeof P<"u"&&P!==null),ht(t,"fa-rotate-".concat(E),typeof E<"u"&&E!==null&&E!==0),ht(t,"fa-pull-".concat(D),typeof D<"u"&&D!==null),ht(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(F){return N[F]?F:null}).filter(function(F){return F})}function ic(e){return e=e-0,e===e}function Fi(e){return ic(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var oc=["style"];function sc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function lc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Fi(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[sc(a)]=i:t[a]=i,t},{})}function zi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return zi(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,u){var g=t.attributes[u];switch(u){case"class":f.attrs.className=g,delete t.attributes.class;break;case"style":f.attrs.style=lc(g);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=g:f.attrs[Fi(u)]=g}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Jl(n,oc);return a.attrs.style=Ie(Ie({},a.attrs.style),o),e.apply(void 0,[t.tag,Ie(Ie({},a.attrs),l)].concat(sr(r)))}var ji=!1;try{ji=!0}catch{}function cc(){if(!ji&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Na(e){if(e&&nn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(or.icon)return or.icon(e);if(e===null)return null;if(e&&nn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ln(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ht({},e,t):{}}var Ia={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ui=St.forwardRef(function(e,t){var n=Ie(Ie({},Ia),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,l=n.title,f=n.titleId,u=n.maskId,g=Na(r),S=Ln("classes",[].concat(sr(ac(n)),sr((o||"").split(" ")))),w=Ln("transform",typeof n.transform=="string"?or.transform(n.transform):n.transform),L=Ln("mask",Na(a)),k=Zl(g,Ie(Ie(Ie(Ie({},S),w),L),{},{symbol:i,title:l,titleId:f,maskId:u}));if(!k)return cc("Could not find icon",g),null;var I=k.abstract,b={ref:t};return Object.keys(n).forEach(function(P){Ia.hasOwnProperty(P)||(b[P]=n[P])}),fc(I[0],b)});Ui.displayName="FontAwesomeIcon";Ui.propTypes={beat:m.bool,border:m.bool,beatFade:m.bool,bounce:m.bool,className:m.string,fade:m.bool,flash:m.bool,mask:m.oneOfType([m.object,m.array,m.string]),maskId:m.string,fixedWidth:m.bool,inverse:m.bool,flip:m.oneOf([!0,!1,"horizontal","vertical","both"]),icon:m.oneOfType([m.object,m.array,m.string]),listItem:m.bool,pull:m.oneOf(["right","left"]),pulse:m.bool,rotation:m.oneOf([0,90,180,270]),shake:m.bool,size:m.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.bool,spinPulse:m.bool,spinReverse:m.bool,symbol:m.oneOfType([m.bool,m.string]),title:m.string,titleId:m.string,transform:m.oneOfType([m.string,m.object]),swapOpacity:m.bool};var fc=zi.bind(null,St.createElement);function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(e)}function cr(e,t){return cr=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},cr(e,t)}function uc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kt(e,t,n){return uc()?Kt=Reflect.construct:Kt=function(a,i,o){var l=[null];l.push.apply(l,i);var f=Function.bind.apply(a,l),u=new f;return o&&cr(u,o.prototype),u},Kt.apply(null,arguments)}function Ce(e){return mc(e)||pc(e)||dc(e)||hc()}function mc(e){if(Array.isArray(e))return fr(e)}function pc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dc(e,t){if(e){if(typeof e=="string")return fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fr(e,t)}}function fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gc=Object.hasOwnProperty,Ra=Object.setPrototypeOf,yc=Object.isFrozen,vc=Object.getPrototypeOf,bc=Object.getOwnPropertyDescriptor,ue=Object.freeze,_e=Object.seal,Ac=Object.create,$i=typeof Reflect<"u"&&Reflect,rn=$i.apply,ur=$i.construct;rn||(rn=function(t,n,r){return t.apply(n,r)});ue||(ue=function(t){return t});_e||(_e=function(t){return t});ur||(ur=function(t,n){return Kt(t,Ce(n))});var Sc=Oe(Array.prototype.forEach),La=Oe(Array.prototype.pop),wt=Oe(Array.prototype.push),Zt=Oe(String.prototype.toLowerCase),Mn=Oe(String.prototype.toString),Ma=Oe(String.prototype.match),ke=Oe(String.prototype.replace),xc=Oe(String.prototype.indexOf),Tc=Oe(String.prototype.trim),ie=Oe(RegExp.prototype.test),Dn=wc(TypeError);function Oe(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return rn(e,t,r)}}function wc(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ur(e,n)}}function M(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:Zt,Ra&&Ra(e,null);for(var a=t.length;a--;){var i=t[a];if(typeof i=="string"){var o=n(i);o!==i&&(yc(t)||(t[a]=o),i=o)}e[i]=!0}return e}function it(e){var t=Ac(null),n;for(n in e)rn(gc,e,[n])===!0&&(t[n]=e[n]);return t}function Bt(e,t){for(;e!==null;){var n=bc(e,t);if(n){if(n.get)return Oe(n.get);if(typeof n.value=="function")return Oe(n.value)}e=vc(e)}function r(a){return console.warn("fallback value for",a),null}return r}var Da=ue(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Fn=ue(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),zn=ue(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ec=ue(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),jn=ue(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),_c=ue(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Fa=ue(["#text"]),za=ue(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Un=ue(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ja=ue(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Yt=ue(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Oc=_e(/\{\{[\w\W]*|[\w\W]*\}\}/gm),kc=_e(/<%[\w\W]*|[\w\W]*%>/gm),Cc=_e(/\${[\w\W]*}/gm),Pc=_e(/^data-[\-\w.\u00B7-\uFFFF]/),Nc=_e(/^aria-[\-\w]+$/),Ic=_e(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Rc=_e(/^(?:\w+script|data):/i),Lc=_e(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Mc=_e(/^html$/i),Dc=_e(/^[a-z][.\w]*(-[.\w]+)+$/i),Fc=function(){return typeof window>"u"?null:window},zc=function(t,n){if(qe(t)!=="object"||typeof t.createPolicy!="function")return null;var r=null,a="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(a)&&(r=n.currentScript.getAttribute(a));var i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML:function(l){return l},createScriptURL:function(l){return l}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function Hi(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Fc(),t=function(s){return Hi(s)};if(t.version="2.5.7",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,r=e.document,a=e.DocumentFragment,i=e.HTMLTemplateElement,o=e.Node,l=e.Element,f=e.NodeFilter,u=e.NamedNodeMap,g=u===void 0?e.NamedNodeMap||e.MozNamedAttrMap:u,S=e.HTMLFormElement,w=e.DOMParser,L=e.trustedTypes,k=l.prototype,I=Bt(k,"cloneNode"),b=Bt(k,"nextSibling"),P=Bt(k,"childNodes"),E=Bt(k,"parentNode");if(typeof i=="function"){var D=r.createElement("template");D.content&&D.content.ownerDocument&&(r=D.content.ownerDocument)}var N=zc(L,n),F=N?N.createHTML(""):"",ce=r,me=ce.implementation,oe=ce.createNodeIterator,xe=ce.createDocumentFragment,Pe=ce.getElementsByTagName,Ye=n.importNode,se={};try{se=it(r).documentMode?r.documentMode:{}}catch{}var q={};t.isSupported=typeof E=="function"&&me&&me.createHTMLDocument!==void 0&&se!==9;var pe=Oc,te=kc,De=Cc,ye=Pc,de=Nc,tt=Rc,Fe=Lc,nt=Dc,x=Ic,d=null,A=M({},[].concat(Ce(Da),Ce(Fn),Ce(zn),Ce(jn),Ce(Fa))),T=null,c=M({},[].concat(Ce(za),Ce(Un),Ce(ja),Ce(Yt))),O=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),h=null,G=null,U=!0,$=!0,R=!1,J=!0,Z=!1,z=!0,X=!1,j=!1,Q=!1,Te=!1,K=!1,ze=!1,Xe=!0,he=!1,C="user-content-",B=!0,je=!1,Ne={},fe=null,Ir=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Rr=null,Lr=M({},["audio","video","img","source","image","track"]),An=null,Mr=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ft="http://www.w3.org/1998/Math/MathML",zt="http://www.w3.org/2000/svg",Ue="http://www.w3.org/1999/xhtml",ut=Ue,Sn=!1,xn=null,Wi=M({},[Ft,zt,Ue],Mn),rt,Gi=["application/xhtml+xml","text/html"],Bi="text/html",ne,mt=null,Yi=r.createElement("form"),Dr=function(s){return s instanceof RegExp||s instanceof Function},Tn=function(s){mt&&mt===s||((!s||qe(s)!=="object")&&(s={}),s=it(s),rt=Gi.indexOf(s.PARSER_MEDIA_TYPE)===-1?rt=Bi:rt=s.PARSER_MEDIA_TYPE,ne=rt==="application/xhtml+xml"?Mn:Zt,d="ALLOWED_TAGS"in s?M({},s.ALLOWED_TAGS,ne):A,T="ALLOWED_ATTR"in s?M({},s.ALLOWED_ATTR,ne):c,xn="ALLOWED_NAMESPACES"in s?M({},s.ALLOWED_NAMESPACES,Mn):Wi,An="ADD_URI_SAFE_ATTR"in s?M(it(Mr),s.ADD_URI_SAFE_ATTR,ne):Mr,Rr="ADD_DATA_URI_TAGS"in s?M(it(Lr),s.ADD_DATA_URI_TAGS,ne):Lr,fe="FORBID_CONTENTS"in s?M({},s.FORBID_CONTENTS,ne):Ir,h="FORBID_TAGS"in s?M({},s.FORBID_TAGS,ne):{},G="FORBID_ATTR"in s?M({},s.FORBID_ATTR,ne):{},Ne="USE_PROFILES"in s?s.USE_PROFILES:!1,U=s.ALLOW_ARIA_ATTR!==!1,$=s.ALLOW_DATA_ATTR!==!1,R=s.ALLOW_UNKNOWN_PROTOCOLS||!1,J=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Z=s.SAFE_FOR_TEMPLATES||!1,z=s.SAFE_FOR_XML!==!1,X=s.WHOLE_DOCUMENT||!1,Te=s.RETURN_DOM||!1,K=s.RETURN_DOM_FRAGMENT||!1,ze=s.RETURN_TRUSTED_TYPE||!1,Q=s.FORCE_BODY||!1,Xe=s.SANITIZE_DOM!==!1,he=s.SANITIZE_NAMED_PROPS||!1,B=s.KEEP_CONTENT!==!1,je=s.IN_PLACE||!1,x=s.ALLOWED_URI_REGEXP||x,ut=s.NAMESPACE||Ue,O=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&Dr(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(O.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&Dr(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(O.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(O.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Z&&($=!1),K&&(Te=!0),Ne&&(d=M({},Ce(Fa)),T=[],Ne.html===!0&&(M(d,Da),M(T,za)),Ne.svg===!0&&(M(d,Fn),M(T,Un),M(T,Yt)),Ne.svgFilters===!0&&(M(d,zn),M(T,Un),M(T,Yt)),Ne.mathMl===!0&&(M(d,jn),M(T,ja),M(T,Yt))),s.ADD_TAGS&&(d===A&&(d=it(d)),M(d,s.ADD_TAGS,ne)),s.ADD_ATTR&&(T===c&&(T=it(T)),M(T,s.ADD_ATTR,ne)),s.ADD_URI_SAFE_ATTR&&M(An,s.ADD_URI_SAFE_ATTR,ne),s.FORBID_CONTENTS&&(fe===Ir&&(fe=it(fe)),M(fe,s.FORBID_CONTENTS,ne)),B&&(d["#text"]=!0),X&&M(d,["html","head","body"]),d.table&&(M(d,["tbody"]),delete h.tbody),ue&&ue(s),mt=s)},Fr=M({},["mi","mo","mn","ms","mtext"]),zr=M({},["annotation-xml"]),Xi=M({},["title","style","font","a","script"]),jt=M({},Fn);M(jt,zn),M(jt,Ec);var wn=M({},jn);M(wn,_c);var Vi=function(s){var p=E(s);(!p||!p.tagName)&&(p={namespaceURI:ut,tagName:"template"});var y=Zt(s.tagName),H=Zt(p.tagName);return xn[s.namespaceURI]?s.namespaceURI===zt?p.namespaceURI===Ue?y==="svg":p.namespaceURI===Ft?y==="svg"&&(H==="annotation-xml"||Fr[H]):!!jt[y]:s.namespaceURI===Ft?p.namespaceURI===Ue?y==="math":p.namespaceURI===zt?y==="math"&&zr[H]:!!wn[y]:s.namespaceURI===Ue?p.namespaceURI===zt&&!zr[H]||p.namespaceURI===Ft&&!Fr[H]?!1:!wn[y]&&(Xi[y]||!jt[y]):!!(rt==="application/xhtml+xml"&&xn[s.namespaceURI]):!1},we=function(s){wt(t.removed,{element:s});try{s.parentNode.removeChild(s)}catch{try{s.outerHTML=F}catch{s.remove()}}},Ut=function(s,p){try{wt(t.removed,{attribute:p.getAttributeNode(s),from:p})}catch{wt(t.removed,{attribute:null,from:p})}if(p.removeAttribute(s),s==="is"&&!T[s])if(Te||K)try{we(p)}catch{}else try{p.setAttribute(s,"")}catch{}},jr=function(s){var p,y;if(Q)s="<remove></remove>"+s;else{var H=Ma(s,/^[\r\n\t ]+/);y=H&&H[0]}rt==="application/xhtml+xml"&&ut===Ue&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");var ge=N?N.createHTML(s):s;if(ut===Ue)try{p=new w().parseFromString(ge,rt)}catch{}if(!p||!p.documentElement){p=me.createDocument(ut,"template",null);try{p.documentElement.innerHTML=Sn?F:ge}catch{}}var le=p.body||p.documentElement;return s&&y&&le.insertBefore(r.createTextNode(y),le.childNodes[0]||null),ut===Ue?Pe.call(p,X?"html":"body")[0]:X?p.documentElement:le},Ur=function(s){return oe.call(s.ownerDocument||s,s,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null,!1)},$r=function(s){return s instanceof S&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof g)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Tt=function(s){return qe(o)==="object"?s instanceof o:s&&qe(s)==="object"&&typeof s.nodeType=="number"&&typeof s.nodeName=="string"},$e=function(s,p,y){q[s]&&Sc(q[s],function(H){H.call(t,p,y,mt)})},Hr=function(s){var p;if($e("beforeSanitizeElements",s,null),$r(s)||ie(/[\u0080-\uFFFF]/,s.nodeName))return we(s),!0;var y=ne(s.nodeName);if($e("uponSanitizeElement",s,{tagName:y,allowedTags:d}),s.hasChildNodes()&&!Tt(s.firstElementChild)&&(!Tt(s.content)||!Tt(s.content.firstElementChild))&&ie(/<[/\w]/g,s.innerHTML)&&ie(/<[/\w]/g,s.textContent)||y==="select"&&ie(/<template/i,s.innerHTML)||s.nodeType===7||z&&s.nodeType===8&&ie(/<[/\w]/g,s.data))return we(s),!0;if(!d[y]||h[y]){if(!h[y]&&Gr(y)&&(O.tagNameCheck instanceof RegExp&&ie(O.tagNameCheck,y)||O.tagNameCheck instanceof Function&&O.tagNameCheck(y)))return!1;if(B&&!fe[y]){var H=E(s)||s.parentNode,ge=P(s)||s.childNodes;if(ge&&H)for(var le=ge.length,ae=le-1;ae>=0;--ae){var at=I(ge[ae],!0);at.__removalCount=(s.__removalCount||0)+1,H.insertBefore(at,b(s))}}return we(s),!0}return s instanceof l&&!Vi(s)||(y==="noscript"||y==="noembed"||y==="noframes")&&ie(/<\/no(script|embed|frames)/i,s.innerHTML)?(we(s),!0):(Z&&s.nodeType===3&&(p=s.textContent,p=ke(p,pe," "),p=ke(p,te," "),p=ke(p,De," "),s.textContent!==p&&(wt(t.removed,{element:s.cloneNode()}),s.textContent=p)),$e("afterSanitizeElements",s,null),!1)},Wr=function(s,p,y){if(Xe&&(p==="id"||p==="name")&&(y in r||y in Yi))return!1;if(!($&&!G[p]&&ie(ye,p))){if(!(U&&ie(de,p))){if(!T[p]||G[p]){if(!(Gr(s)&&(O.tagNameCheck instanceof RegExp&&ie(O.tagNameCheck,s)||O.tagNameCheck instanceof Function&&O.tagNameCheck(s))&&(O.attributeNameCheck instanceof RegExp&&ie(O.attributeNameCheck,p)||O.attributeNameCheck instanceof Function&&O.attributeNameCheck(p))||p==="is"&&O.allowCustomizedBuiltInElements&&(O.tagNameCheck instanceof RegExp&&ie(O.tagNameCheck,y)||O.tagNameCheck instanceof Function&&O.tagNameCheck(y))))return!1}else if(!An[p]){if(!ie(x,ke(y,Fe,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&s!=="script"&&xc(y,"data:")===0&&Rr[s])){if(!(R&&!ie(tt,ke(y,Fe,"")))){if(y)return!1}}}}}}return!0},Gr=function(s){return s!=="annotation-xml"&&Ma(s,nt)},Br=function(s){var p,y,H,ge;$e("beforeSanitizeAttributes",s,null);var le=s.attributes;if(le){var ae={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};for(ge=le.length;ge--;){p=le[ge];var at=p,ee=at.name,En=at.namespaceURI;if(y=ee==="value"?p.value:Tc(p.value),H=ne(ee),ae.attrName=H,ae.attrValue=y,ae.keepAttr=!0,ae.forceKeepAttr=void 0,$e("uponSanitizeAttribute",s,ae),y=ae.attrValue,!ae.forceKeepAttr&&(Ut(ee,s),!!ae.keepAttr)){if(!J&&ie(/\/>/i,y)){Ut(ee,s);continue}Z&&(y=ke(y,pe," "),y=ke(y,te," "),y=ke(y,De," "));var Yr=ne(s.nodeName);if(Wr(Yr,H,y)){if(he&&(H==="id"||H==="name")&&(Ut(ee,s),y=C+y),z&&ie(/((--!?|])>)|<\/(style|title)/i,y)){Ut(ee,s);continue}if(N&&qe(L)==="object"&&typeof L.getAttributeType=="function"&&!En)switch(L.getAttributeType(Yr,H)){case"TrustedHTML":{y=N.createHTML(y);break}case"TrustedScriptURL":{y=N.createScriptURL(y);break}}try{En?s.setAttributeNS(En,ee,y):s.setAttribute(ee,y),$r(s)?we(s):La(t.removed)}catch{}}}}$e("afterSanitizeAttributes",s,null)}},qi=function _(s){var p,y=Ur(s);for($e("beforeSanitizeShadowDOM",s,null);p=y.nextNode();)$e("uponSanitizeShadowNode",p,null),!Hr(p)&&(p.content instanceof a&&_(p.content),Br(p));$e("afterSanitizeShadowDOM",s,null)};return t.sanitize=function(_){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p,y,H,ge,le;if(Sn=!_,Sn&&(_="<!-->"),typeof _!="string"&&!Tt(_))if(typeof _.toString=="function"){if(_=_.toString(),typeof _!="string")throw Dn("dirty is not a string, aborting")}else throw Dn("toString is not a function");if(!t.isSupported){if(qe(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof _=="string")return e.toStaticHTML(_);if(Tt(_))return e.toStaticHTML(_.outerHTML)}return _}if(j||Tn(s),t.removed=[],typeof _=="string"&&(je=!1),je){if(_.nodeName){var ae=ne(_.nodeName);if(!d[ae]||h[ae])throw Dn("root node is forbidden and cannot be sanitized in-place")}}else if(_ instanceof o)p=jr("<!---->"),y=p.ownerDocument.importNode(_,!0),y.nodeType===1&&y.nodeName==="BODY"||y.nodeName==="HTML"?p=y:p.appendChild(y);else{if(!Te&&!Z&&!X&&_.indexOf("<")===-1)return N&&ze?N.createHTML(_):_;if(p=jr(_),!p)return Te?null:ze?F:""}p&&Q&&we(p.firstChild);for(var at=Ur(je?_:p);H=at.nextNode();)H.nodeType===3&&H===ge||Hr(H)||(H.content instanceof a&&qi(H.content),Br(H),ge=H);if(ge=null,je)return _;if(Te){if(K)for(le=xe.call(p.ownerDocument);p.firstChild;)le.appendChild(p.firstChild);else le=p;return(T.shadowroot||T.shadowrootmod)&&(le=Ye.call(n,le,!0)),le}var ee=X?p.outerHTML:p.innerHTML;return X&&d["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&ie(Mc,p.ownerDocument.doctype.name)&&(ee="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+ee),Z&&(ee=ke(ee,pe," "),ee=ke(ee,te," "),ee=ke(ee,De," ")),N&&ze?N.createHTML(ee):ee},t.setConfig=function(_){Tn(_),j=!0},t.clearConfig=function(){mt=null,j=!1},t.isValidAttribute=function(_,s,p){mt||Tn({});var y=ne(_),H=ne(s);return Wr(y,H,p)},t.addHook=function(_,s){typeof s=="function"&&(q[_]=q[_]||[],wt(q[_],s))},t.removeHook=function(_){if(q[_])return La(q[_])},t.removeHooks=function(_){q[_]&&(q[_]=[])},t.removeAllHooks=function(){q={}},t}Hi();function qc(){const e=(document.currentScript&&document.currentScript.src||"").match(/(.*\/)/);return e&&e.length>0?e[0].substr(0,e[0].length-1):"/"}m.shape({event:m.string,action:m.string,name:m.string,region:m.string,section:m.string,component:m.string,type:m.string,text:m.string});const Kc=({event:e="",action:t="",name:n="",type:r="",section:a="",text:i="",region:o="",component:l=""})=>{const{dataLayer:f}=window,u={event:e.toLowerCase(),action:t.toLowerCase(),name:n.toLowerCase(),type:r.toLowerCase(),region:o.toLowerCase(),section:a.toLowerCase(),text:i.toLowerCase(),component:l.toLowerCase()};f&&f.push(u)};export{ts as A,ii as B,Ui as F,Wc as H,Vr as N,m as P,_n as T,Hc as a,Yc as b,Vc as c,mr as d,Bc as e,Xc as f,qc as g,Gc as h,no as j,so as p,Bn as q,Kc as t};
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
