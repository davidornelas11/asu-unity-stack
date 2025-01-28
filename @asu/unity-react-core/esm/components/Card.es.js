import Lt, { useId as hi, useRef as mi, useContext as Ln, createElement as gi } from "react";
function jn(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var jo = { exports: {} }, Ar = {};
var po;
function yi() {
  if (po) return Ar;
  po = 1;
  var o = Lt, a = Symbol.for("react.element"), l = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, p = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(T, x, v) {
    var L, C = {}, Y = null, re = null;
    v !== void 0 && (Y = "" + v), x.key !== void 0 && (Y = "" + x.key), x.ref !== void 0 && (re = x.ref);
    for (L in x) f.call(x, L) && !m.hasOwnProperty(L) && (C[L] = x[L]);
    if (T && T.defaultProps) for (L in x = T.defaultProps, x) C[L] === void 0 && (C[L] = x[L]);
    return { $$typeof: a, type: T, key: Y, ref: re, props: C, _owner: p.current };
  }
  return Ar.Fragment = l, Ar.jsx = k, Ar.jsxs = k, Ar;
}
jo.exports = yi();
var H = jo.exports, zo = { exports: {} };
(function(o) {
  (function() {
    var a = {}.hasOwnProperty;
    function l() {
      for (var m = "", k = 0; k < arguments.length; k++) {
        var T = arguments[k];
        T && (m = p(m, f(T)));
      }
      return m;
    }
    function f(m) {
      if (typeof m == "string" || typeof m == "number")
        return m;
      if (typeof m != "object")
        return "";
      if (Array.isArray(m))
        return l.apply(null, m);
      if (m.toString !== Object.prototype.toString && !m.toString.toString().includes("[native code]"))
        return m.toString();
      var k = "";
      for (var T in m)
        a.call(m, T) && m[T] && (k = p(k, T));
      return k;
    }
    function p(m, k) {
      return k ? m ? m + " " + k : m + k : m;
    }
    o.exports ? (l.default = l, o.exports = l) : window.classNames = l;
  })();
})(zo);
var vi = zo.exports;
const Pr = /* @__PURE__ */ jn(vi);
var $o = { exports: {} }, yn = { exports: {} }, xe = {};
var ho;
function Si() {
  if (ho) return xe;
  ho = 1;
  var o = typeof Symbol == "function" && Symbol.for, a = o ? Symbol.for("react.element") : 60103, l = o ? Symbol.for("react.portal") : 60106, f = o ? Symbol.for("react.fragment") : 60107, p = o ? Symbol.for("react.strict_mode") : 60108, m = o ? Symbol.for("react.profiler") : 60114, k = o ? Symbol.for("react.provider") : 60109, T = o ? Symbol.for("react.context") : 60110, x = o ? Symbol.for("react.async_mode") : 60111, v = o ? Symbol.for("react.concurrent_mode") : 60111, L = o ? Symbol.for("react.forward_ref") : 60112, C = o ? Symbol.for("react.suspense") : 60113, Y = o ? Symbol.for("react.suspense_list") : 60120, re = o ? Symbol.for("react.memo") : 60115, D = o ? Symbol.for("react.lazy") : 60116, X = o ? Symbol.for("react.block") : 60121, M = o ? Symbol.for("react.fundamental") : 60117, U = o ? Symbol.for("react.responder") : 60118, V = o ? Symbol.for("react.scope") : 60119;
  function K(R) {
    if (typeof R == "object" && R !== null) {
      var de = R.$$typeof;
      switch (de) {
        case a:
          switch (R = R.type, R) {
            case x:
            case v:
            case f:
            case m:
            case p:
            case C:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case T:
                case L:
                case D:
                case re:
                case k:
                  return R;
                default:
                  return de;
              }
          }
        case l:
          return de;
      }
    }
  }
  function G(R) {
    return K(R) === v;
  }
  return xe.AsyncMode = x, xe.ConcurrentMode = v, xe.ContextConsumer = T, xe.ContextProvider = k, xe.Element = a, xe.ForwardRef = L, xe.Fragment = f, xe.Lazy = D, xe.Memo = re, xe.Portal = l, xe.Profiler = m, xe.StrictMode = p, xe.Suspense = C, xe.isAsyncMode = function(R) {
    return G(R) || K(R) === x;
  }, xe.isConcurrentMode = G, xe.isContextConsumer = function(R) {
    return K(R) === T;
  }, xe.isContextProvider = function(R) {
    return K(R) === k;
  }, xe.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === a;
  }, xe.isForwardRef = function(R) {
    return K(R) === L;
  }, xe.isFragment = function(R) {
    return K(R) === f;
  }, xe.isLazy = function(R) {
    return K(R) === D;
  }, xe.isMemo = function(R) {
    return K(R) === re;
  }, xe.isPortal = function(R) {
    return K(R) === l;
  }, xe.isProfiler = function(R) {
    return K(R) === m;
  }, xe.isStrictMode = function(R) {
    return K(R) === p;
  }, xe.isSuspense = function(R) {
    return K(R) === C;
  }, xe.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === f || R === v || R === m || R === p || R === C || R === Y || typeof R == "object" && R !== null && (R.$$typeof === D || R.$$typeof === re || R.$$typeof === k || R.$$typeof === T || R.$$typeof === L || R.$$typeof === M || R.$$typeof === U || R.$$typeof === V || R.$$typeof === X);
  }, xe.typeOf = K, xe;
}
var mo;
function Bo() {
  return mo || (mo = 1, yn.exports = Si()), yn.exports;
}
var vn, go;
function wi() {
  if (go) return vn;
  go = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return vn = o, vn;
}
var Sn, yo;
function xi() {
  if (yo) return Sn;
  yo = 1;
  var o = wi();
  function a() {
  }
  function l() {
  }
  return l.resetWarningCache = a, Sn = function() {
    function f(k, T, x, v, L, C) {
      if (C !== o) {
        var Y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Y.name = "Invariant Violation", Y;
      }
    }
    f.isRequired = f;
    function p() {
      return f;
    }
    var m = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: p,
      element: f,
      elementType: f,
      instanceOf: p,
      node: f,
      objectOf: p,
      oneOf: p,
      oneOfType: p,
      shape: p,
      exact: p,
      checkPropTypes: l,
      resetWarningCache: a
    };
    return m.PropTypes = m, m;
  }, Sn;
}
$o.exports = xi()();
var ki = $o.exports;
const d = /* @__PURE__ */ jn(ki), Ei = (o) => (o || []).join(" ");
function Gt(o) {
  "@babel/helpers - typeof";
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Gt(o);
}
function An(o, a) {
  return An = Object.setPrototypeOf || function(f, p) {
    return f.__proto__ = p, f;
  }, An(o, a);
}
function Ti() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function en(o, a, l) {
  return Ti() ? en = Reflect.construct : en = function(p, m, k) {
    var T = [null];
    T.push.apply(T, m);
    var x = Function.bind.apply(p, T), v = new x();
    return k && An(v, k.prototype), v;
  }, en.apply(null, arguments);
}
function kt(o) {
  return _i(o) || bi(o) || Ci(o) || Ai();
}
function _i(o) {
  if (Array.isArray(o)) return Rn(o);
}
function bi(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Ci(o, a) {
  if (o) {
    if (typeof o == "string") return Rn(o, a);
    var l = Object.prototype.toString.call(o).slice(8, -1);
    if (l === "Object" && o.constructor && (l = o.constructor.name), l === "Map" || l === "Set") return Array.from(o);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return Rn(o, a);
  }
}
function Rn(o, a) {
  (a == null || a > o.length) && (a = o.length);
  for (var l = 0, f = new Array(a); l < a; l++) f[l] = o[l];
  return f;
}
function Ai() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ri = Object.hasOwnProperty, vo = Object.setPrototypeOf, Oi = Object.isFrozen, Pi = Object.getPrototypeOf, Ni = Object.getOwnPropertyDescriptor, Ze = Object.freeze, dt = Object.seal, Ii = Object.create, Ho = typeof Reflect < "u" && Reflect, nn = Ho.apply, On = Ho.construct;
nn || (nn = function(a, l, f) {
  return a.apply(l, f);
});
Ze || (Ze = function(a) {
  return a;
});
dt || (dt = function(a) {
  return a;
});
On || (On = function(a, l) {
  return en(a, kt(l));
});
var Fi = ht(Array.prototype.forEach), So = ht(Array.prototype.pop), Rr = ht(Array.prototype.push), tn = ht(String.prototype.toLowerCase), wn = ht(String.prototype.toString), wo = ht(String.prototype.match), xt = ht(String.prototype.replace), Mi = ht(String.prototype.indexOf), Di = ht(String.prototype.trim), Ve = ht(RegExp.prototype.test), xn = Li(TypeError);
function ht(o) {
  return function(a) {
    for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
      f[p - 1] = arguments[p];
    return nn(o, a, f);
  };
}
function Li(o) {
  return function() {
    for (var a = arguments.length, l = new Array(a), f = 0; f < a; f++)
      l[f] = arguments[f];
    return On(o, l);
  };
}
function se(o, a, l) {
  var f;
  l = (f = l) !== null && f !== void 0 ? f : tn, vo && vo(o, null);
  for (var p = a.length; p--; ) {
    var m = a[p];
    if (typeof m == "string") {
      var k = l(m);
      k !== m && (Oi(a) || (a[p] = k), m = k);
    }
    o[m] = !0;
  }
  return o;
}
function ar(o) {
  var a = Ii(null), l;
  for (l in o)
    nn(Ri, o, [l]) === !0 && (a[l] = o[l]);
  return a;
}
function Yr(o, a) {
  for (; o !== null; ) {
    var l = Ni(o, a);
    if (l) {
      if (l.get)
        return ht(l.get);
      if (typeof l.value == "function")
        return ht(l.value);
    }
    o = Pi(o);
  }
  function f(p) {
    return console.warn("fallback value for", p), null;
  }
  return f;
}
var xo = Ze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), kn = Ze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), En = Ze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ji = Ze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Tn = Ze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), zi = Ze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ko = Ze(["#text"]), Eo = Ze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), _n = Ze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), To = Ze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xr = Ze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $i = dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Bi = dt(/<%[\w\W]*|[\w\W]*%>/gm), Hi = dt(/\${[\w\W]*}/gm), Ui = dt(/^data-[\-\w.\u00B7-\uFFFF]/), Vi = dt(/^aria-[\-\w]+$/), Wi = dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Gi = dt(/^(?:\w+script|data):/i), qi = dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Yi = dt(/^html$/i), Xi = dt(/^[a-z][.\w]*(-[.\w]+)+$/i), Zi = function() {
  return typeof window > "u" ? null : window;
}, Ki = function(a, l) {
  if (Gt(a) !== "object" || typeof a.createPolicy != "function")
    return null;
  var f = null, p = "data-tt-policy-suffix";
  l.currentScript && l.currentScript.hasAttribute(p) && (f = l.currentScript.getAttribute(p));
  var m = "dompurify" + (f ? "#" + f : "");
  try {
    return a.createPolicy(m, {
      createHTML: function(T) {
        return T;
      },
      createScriptURL: function(T) {
        return T;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + m + " could not be created."), null;
  }
};
function Uo() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zi(), a = function(h) {
    return Uo(h);
  };
  if (a.version = "2.5.7", a.removed = [], !o || !o.document || o.document.nodeType !== 9)
    return a.isSupported = !1, a;
  var l = o.document, f = o.document, p = o.DocumentFragment, m = o.HTMLTemplateElement, k = o.Node, T = o.Element, x = o.NodeFilter, v = o.NamedNodeMap, L = v === void 0 ? o.NamedNodeMap || o.MozNamedAttrMap : v, C = o.HTMLFormElement, Y = o.DOMParser, re = o.trustedTypes, D = T.prototype, X = Yr(D, "cloneNode"), M = Yr(D, "nextSibling"), U = Yr(D, "childNodes"), V = Yr(D, "parentNode");
  if (typeof m == "function") {
    var K = f.createElement("template");
    K.content && K.content.ownerDocument && (f = K.content.ownerDocument);
  }
  var G = Ki(re, l), R = G ? G.createHTML("") : "", de = f, he = de.implementation, Be = de.createNodeIterator, He = de.createDocumentFragment, We = de.getElementsByTagName, rt = l.importNode, Ee = {};
  try {
    Ee = ar(f).documentMode ? f.documentMode : {};
  } catch {
  }
  var be = {};
  a.isSupported = typeof V == "function" && he && he.createHTMLDocument !== void 0 && Ee !== 9;
  var ze = $i, Ne = Bi, nt = Hi, Ue = Ui, De = Vi, Le = Gi, Ke = qi, Ye = Xi, z = Wi, N = null, j = se({}, [].concat(kt(xo), kt(kn), kt(En), kt(Tn), kt(ko))), $ = null, E = se({}, [].concat(kt(Eo), kt(_n), kt(To), kt(Xr))), W = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), O = null, ue = null, ne = !0, te = !0, Z = !1, ce = !0, me = !1, ie = !0, ge = !1, fe = !1, _e = !1, je = !1, Te = !1, Je = !1, $e = !0, ye = !1, q = "user-content-", ve = !0, Qe = !1, Xe = {}, Fe = null, Yt = se({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Xt = null, ur = se({}, ["audio", "video", "img", "source", "image", "track"]), _t = null, bt = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jt = "http://www.w3.org/1998/Math/MathML", zt = "http://www.w3.org/2000/svg", ot = "http://www.w3.org/1999/xhtml", Et = ot, Zt = !1, Ge = null, Kt = se({}, [jt, zt, ot], wn), et, Se = ["application/xhtml+xml", "text/html"], Ct = "text/html", Ae, tt = null, ft = f.createElement("form"), At = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, it = function(h) {
    tt && tt === h || ((!h || Gt(h) !== "object") && (h = {}), h = ar(h), et = // eslint-disable-next-line unicorn/prefer-includes
    Se.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? et = Ct : et = h.PARSER_MEDIA_TYPE, Ae = et === "application/xhtml+xml" ? wn : tn, N = "ALLOWED_TAGS" in h ? se({}, h.ALLOWED_TAGS, Ae) : j, $ = "ALLOWED_ATTR" in h ? se({}, h.ALLOWED_ATTR, Ae) : E, Ge = "ALLOWED_NAMESPACES" in h ? se({}, h.ALLOWED_NAMESPACES, wn) : Kt, _t = "ADD_URI_SAFE_ATTR" in h ? se(
      ar(bt),
      // eslint-disable-line indent
      h.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ae
      // eslint-disable-line indent
    ) : bt, Xt = "ADD_DATA_URI_TAGS" in h ? se(
      ar(ur),
      // eslint-disable-line indent
      h.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ae
      // eslint-disable-line indent
    ) : ur, Fe = "FORBID_CONTENTS" in h ? se({}, h.FORBID_CONTENTS, Ae) : Yt, O = "FORBID_TAGS" in h ? se({}, h.FORBID_TAGS, Ae) : {}, ue = "FORBID_ATTR" in h ? se({}, h.FORBID_ATTR, Ae) : {}, Xe = "USE_PROFILES" in h ? h.USE_PROFILES : !1, ne = h.ALLOW_ARIA_ATTR !== !1, te = h.ALLOW_DATA_ATTR !== !1, Z = h.ALLOW_UNKNOWN_PROTOCOLS || !1, ce = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, me = h.SAFE_FOR_TEMPLATES || !1, ie = h.SAFE_FOR_XML !== !1, ge = h.WHOLE_DOCUMENT || !1, je = h.RETURN_DOM || !1, Te = h.RETURN_DOM_FRAGMENT || !1, Je = h.RETURN_TRUSTED_TYPE || !1, _e = h.FORCE_BODY || !1, $e = h.SANITIZE_DOM !== !1, ye = h.SANITIZE_NAMED_PROPS || !1, ve = h.KEEP_CONTENT !== !1, Qe = h.IN_PLACE || !1, z = h.ALLOWED_URI_REGEXP || z, Et = h.NAMESPACE || ot, W = h.CUSTOM_ELEMENT_HANDLING || {}, h.CUSTOM_ELEMENT_HANDLING && At(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (W.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && At(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (W.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), me && (te = !1), Te && (je = !0), Xe && (N = se({}, kt(ko)), $ = [], Xe.html === !0 && (se(N, xo), se($, Eo)), Xe.svg === !0 && (se(N, kn), se($, _n), se($, Xr)), Xe.svgFilters === !0 && (se(N, En), se($, _n), se($, Xr)), Xe.mathMl === !0 && (se(N, Tn), se($, To), se($, Xr))), h.ADD_TAGS && (N === j && (N = ar(N)), se(N, h.ADD_TAGS, Ae)), h.ADD_ATTR && ($ === E && ($ = ar($)), se($, h.ADD_ATTR, Ae)), h.ADD_URI_SAFE_ATTR && se(_t, h.ADD_URI_SAFE_ATTR, Ae), h.FORBID_CONTENTS && (Fe === Yt && (Fe = ar(Fe)), se(Fe, h.FORBID_CONTENTS, Ae)), ve && (N["#text"] = !0), ge && se(N, ["html", "head", "body"]), N.table && (se(N, ["tbody"]), delete O.tbody), Ze && Ze(h), tt = h);
  }, Jt = se({}, ["mi", "mo", "mn", "ms", "mtext"]), $t = se({}, ["annotation-xml"]), Qt = se({}, ["title", "style", "font", "a", "script"]), Rt = se({}, kn);
  se(Rt, En), se(Rt, ji);
  var Bt = se({}, Tn);
  se(Bt, zi);
  var cr = function(h) {
    var A = V(h);
    (!A || !A.tagName) && (A = {
      namespaceURI: Et,
      tagName: "template"
    });
    var F = tn(h.tagName), pe = tn(A.tagName);
    return Ge[h.namespaceURI] ? h.namespaceURI === zt ? A.namespaceURI === ot ? F === "svg" : A.namespaceURI === jt ? F === "svg" && (pe === "annotation-xml" || Jt[pe]) : !!Rt[F] : h.namespaceURI === jt ? A.namespaceURI === ot ? F === "math" : A.namespaceURI === zt ? F === "math" && $t[pe] : !!Bt[F] : h.namespaceURI === ot ? A.namespaceURI === zt && !$t[pe] || A.namespaceURI === jt && !Jt[pe] ? !1 : !Bt[F] && (Qt[F] || !Rt[F]) : !!(et === "application/xhtml+xml" && Ge[h.namespaceURI]) : !1;
  }, qe = function(h) {
    Rr(a.removed, {
      element: h
    });
    try {
      h.parentNode.removeChild(h);
    } catch {
      try {
        h.outerHTML = R;
      } catch {
        h.remove();
      }
    }
  }, Ht = function(h, A) {
    try {
      Rr(a.removed, {
        attribute: A.getAttributeNode(h),
        from: A
      });
    } catch {
      Rr(a.removed, {
        attribute: null,
        from: A
      });
    }
    if (A.removeAttribute(h), h === "is" && !$[h])
      if (je || Te)
        try {
          qe(A);
        } catch {
        }
      else
        try {
          A.setAttribute(h, "");
        } catch {
        }
  }, Ot = function(h) {
    var A, F;
    if (_e)
      h = "<remove></remove>" + h;
    else {
      var pe = wo(h, /^[\r\n\t ]+/);
      F = pe && pe[0];
    }
    et === "application/xhtml+xml" && Et === ot && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    var we = G ? G.createHTML(h) : h;
    if (Et === ot)
      try {
        A = new Y().parseFromString(we, et);
      } catch {
      }
    if (!A || !A.documentElement) {
      A = he.createDocument(Et, "template", null);
      try {
        A.documentElement.innerHTML = Zt ? R : we;
      } catch {
      }
    }
    var Me = A.body || A.documentElement;
    return h && F && Me.insertBefore(f.createTextNode(F), Me.childNodes[0] || null), Et === ot ? We.call(A, ge ? "html" : "body")[0] : ge ? A.documentElement : Me;
  }, er = function(h) {
    return Be.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Pt = function(h) {
    return h instanceof C && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof L) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, mt = function(h) {
    return Gt(k) === "object" ? h instanceof k : h && Gt(h) === "object" && typeof h.nodeType == "number" && typeof h.nodeName == "string";
  }, at = function(h, A, F) {
    be[h] && Fi(be[h], function(pe) {
      pe.call(a, A, F, tt);
    });
  }, Tt = function(h) {
    var A;
    if (at("beforeSanitizeElements", h, null), Pt(h) || Ve(/[\u0080-\uFFFF]/, h.nodeName))
      return qe(h), !0;
    var F = Ae(h.nodeName);
    if (at("uponSanitizeElement", h, {
      tagName: F,
      allowedTags: N
    }), h.hasChildNodes() && !mt(h.firstElementChild) && (!mt(h.content) || !mt(h.content.firstElementChild)) && Ve(/<[/\w]/g, h.innerHTML) && Ve(/<[/\w]/g, h.textContent) || F === "select" && Ve(/<template/i, h.innerHTML) || h.nodeType === 7 || ie && h.nodeType === 8 && Ve(/<[/\w]/g, h.data))
      return qe(h), !0;
    if (!N[F] || O[F]) {
      if (!O[F] && Ut(F) && (W.tagNameCheck instanceof RegExp && Ve(W.tagNameCheck, F) || W.tagNameCheck instanceof Function && W.tagNameCheck(F)))
        return !1;
      if (ve && !Fe[F]) {
        var pe = V(h) || h.parentNode, we = U(h) || h.childNodes;
        if (we && pe)
          for (var Me = we.length, Ie = Me - 1; Ie >= 0; --Ie) {
            var st = X(we[Ie], !0);
            st.__removalCount = (h.__removalCount || 0) + 1, pe.insertBefore(st, M(h));
          }
      }
      return qe(h), !0;
    }
    return h instanceof T && !cr(h) || (F === "noscript" || F === "noembed" || F === "noframes") && Ve(/<\/no(script|embed|frames)/i, h.innerHTML) ? (qe(h), !0) : (me && h.nodeType === 3 && (A = h.textContent, A = xt(A, ze, " "), A = xt(A, Ne, " "), A = xt(A, nt, " "), h.textContent !== A && (Rr(a.removed, {
      element: h.cloneNode()
    }), h.textContent = A)), at("afterSanitizeElements", h, null), !1);
  }, fr = function(h, A, F) {
    if ($e && (A === "id" || A === "name") && (F in f || F in ft))
      return !1;
    if (!(te && !ue[A] && Ve(Ue, A))) {
      if (!(ne && Ve(De, A))) {
        if (!$[A] || ue[A]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ut(h) && (W.tagNameCheck instanceof RegExp && Ve(W.tagNameCheck, h) || W.tagNameCheck instanceof Function && W.tagNameCheck(h)) && (W.attributeNameCheck instanceof RegExp && Ve(W.attributeNameCheck, A) || W.attributeNameCheck instanceof Function && W.attributeNameCheck(A)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            A === "is" && W.allowCustomizedBuiltInElements && (W.tagNameCheck instanceof RegExp && Ve(W.tagNameCheck, F) || W.tagNameCheck instanceof Function && W.tagNameCheck(F)))
          ) return !1;
        } else if (!_t[A]) {
          if (!Ve(z, xt(F, Ke, ""))) {
            if (!((A === "src" || A === "xlink:href" || A === "href") && h !== "script" && Mi(F, "data:") === 0 && Xt[h])) {
              if (!(Z && !Ve(Le, xt(F, Ke, "")))) {
                if (F)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ut = function(h) {
    return h !== "annotation-xml" && wo(h, Ye);
  }, Nt = function(h) {
    var A, F, pe, we;
    at("beforeSanitizeAttributes", h, null);
    var Me = h.attributes;
    if (Me) {
      var Ie = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: $
      };
      for (we = Me.length; we--; ) {
        A = Me[we];
        var st = A, Oe = st.name, pt = st.namespaceURI;
        if (F = Oe === "value" ? A.value : Di(A.value), pe = Ae(Oe), Ie.attrName = pe, Ie.attrValue = F, Ie.keepAttr = !0, Ie.forceKeepAttr = void 0, at("uponSanitizeAttribute", h, Ie), F = Ie.attrValue, !Ie.forceKeepAttr && (Ht(Oe, h), !!Ie.keepAttr)) {
          if (!ce && Ve(/\/>/i, F)) {
            Ht(Oe, h);
            continue;
          }
          me && (F = xt(F, ze, " "), F = xt(F, Ne, " "), F = xt(F, nt, " "));
          var gt = Ae(h.nodeName);
          if (fr(gt, pe, F)) {
            if (ye && (pe === "id" || pe === "name") && (Ht(Oe, h), F = q + F), ie && Ve(/((--!?|])>)|<\/(style|title)/i, F)) {
              Ht(Oe, h);
              continue;
            }
            if (G && Gt(re) === "object" && typeof re.getAttributeType == "function" && !pt)
              switch (re.getAttributeType(gt, pe)) {
                case "TrustedHTML": {
                  F = G.createHTML(F);
                  break;
                }
                case "TrustedScriptURL": {
                  F = G.createScriptURL(F);
                  break;
                }
              }
            try {
              pt ? h.setAttributeNS(pt, Oe, F) : h.setAttribute(Oe, F), Pt(h) ? qe(h) : So(a.removed);
            } catch {
            }
          }
        }
      }
      at("afterSanitizeAttributes", h, null);
    }
  }, It = function B(h) {
    var A, F = er(h);
    for (at("beforeSanitizeShadowDOM", h, null); A = F.nextNode(); )
      at("uponSanitizeShadowNode", A, null), !Tt(A) && (A.content instanceof p && B(A.content), Nt(A));
    at("afterSanitizeShadowDOM", h, null);
  };
  return a.sanitize = function(B) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A, F, pe, we, Me;
    if (Zt = !B, Zt && (B = "<!-->"), typeof B != "string" && !mt(B))
      if (typeof B.toString == "function") {
        if (B = B.toString(), typeof B != "string")
          throw xn("dirty is not a string, aborting");
      } else
        throw xn("toString is not a function");
    if (!a.isSupported) {
      if (Gt(o.toStaticHTML) === "object" || typeof o.toStaticHTML == "function") {
        if (typeof B == "string")
          return o.toStaticHTML(B);
        if (mt(B))
          return o.toStaticHTML(B.outerHTML);
      }
      return B;
    }
    if (fe || it(h), a.removed = [], typeof B == "string" && (Qe = !1), Qe) {
      if (B.nodeName) {
        var Ie = Ae(B.nodeName);
        if (!N[Ie] || O[Ie])
          throw xn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (B instanceof k)
      A = Ot("<!---->"), F = A.ownerDocument.importNode(B, !0), F.nodeType === 1 && F.nodeName === "BODY" || F.nodeName === "HTML" ? A = F : A.appendChild(F);
    else {
      if (!je && !me && !ge && // eslint-disable-next-line unicorn/prefer-includes
      B.indexOf("<") === -1)
        return G && Je ? G.createHTML(B) : B;
      if (A = Ot(B), !A)
        return je ? null : Je ? R : "";
    }
    A && _e && qe(A.firstChild);
    for (var st = er(Qe ? B : A); pe = st.nextNode(); )
      pe.nodeType === 3 && pe === we || Tt(pe) || (pe.content instanceof p && It(pe.content), Nt(pe), we = pe);
    if (we = null, Qe)
      return B;
    if (je) {
      if (Te)
        for (Me = He.call(A.ownerDocument); A.firstChild; )
          Me.appendChild(A.firstChild);
      else
        Me = A;
      return ($.shadowroot || $.shadowrootmod) && (Me = rt.call(l, Me, !0)), Me;
    }
    var Oe = ge ? A.outerHTML : A.innerHTML;
    return ge && N["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && Ve(Yi, A.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + Oe), me && (Oe = xt(Oe, ze, " "), Oe = xt(Oe, Ne, " "), Oe = xt(Oe, nt, " ")), G && Je ? G.createHTML(Oe) : Oe;
  }, a.setConfig = function(B) {
    it(B), fe = !0;
  }, a.clearConfig = function() {
    tt = null, fe = !1;
  }, a.isValidAttribute = function(B, h, A) {
    tt || it({});
    var F = Ae(B), pe = Ae(h);
    return fr(F, pe, A);
  }, a.addHook = function(B, h) {
    typeof h == "function" && (be[B] = be[B] || [], Rr(be[B], h));
  }, a.removeHook = function(B) {
    if (be[B])
      return So(be[B]);
  }, a.removeHooks = function(B) {
    be[B] && (be[B] = []);
  }, a.removeAllHooks = function() {
    be = {};
  }, a;
}
var Ji = Uo();
const dr = (o) => ({ __html: Ji.sanitize(o) });
d.shape({
  event: d.string,
  action: d.string,
  name: d.string,
  region: d.string,
  section: d.string,
  component: d.string,
  type: d.string,
  text: d.string
});
const Qi = ({
  event: o = "",
  action: a = "",
  name: l = "",
  type: f = "",
  section: p = "",
  text: m = "",
  region: k = "",
  component: T = ""
}) => {
  const { dataLayer: x } = window, v = {
    event: o.toLowerCase(),
    action: a.toLowerCase(),
    name: l.toLowerCase(),
    type: f.toLowerCase(),
    region: k.toLowerCase(),
    section: p.toLowerCase(),
    text: m.toLowerCase(),
    component: T.toLowerCase()
  };
  x && x.push(v);
};
d.shape({
  url: d.string,
  altText: d.string,
  cssClass: d.arrayOf(d.string),
  size: d.oneOf(["small", "medium", "large"])
});
d.shape({
  text: d.string,
  maxWidth: d.string,
  cssClass: d.arrayOf(d.string),
  highlightColor: d.oneOf(["gold", "black"])
});
d.shape({
  color: d.oneOf(["gold", "maroon", "gray", "dark"]),
  content: d.shape({
    icon: d.string,
    header: d.string,
    body: d.string
  })
});
const Vo = d.shape({
  text: d.string,
  name: d.string,
  event: d.string,
  action: d.string,
  type: d.string,
  region: d.string,
  section: d.string,
  component: d.string
});
var sr = {};
var _o;
function ea() {
  if (_o) return sr;
  _o = 1;
  var o = Lt;
  function a(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++) n += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, m = {};
  function k(e) {
    return l.call(m, e) ? !0 : l.call(p, e) ? !1 : f.test(e) ? m[e] = !0 : (p[e] = !0, !1);
  }
  function T(e, n, s, c, w, g, _) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = c, this.attributeNamespace = w, this.mustUseProperty = s, this.propertyName = e, this.type = n, this.sanitizeURL = g, this.removeEmptyString = _;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    x[e] = new T(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    x[n] = new T(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    x[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    x[e] = new T(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    x[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    x[e] = new T(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    x[e] = new T(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    x[e] = new T(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    x[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var v = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      v,
      L
    );
    x[n] = new T(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(v, L);
    x[n] = new T(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(v, L);
    x[n] = new T(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    x[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    x[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var C = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Y = ["Webkit", "ms", "Moz", "O"];
  Object.keys(C).forEach(function(e) {
    Y.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), C[n] = C[e];
    });
  });
  var re = /["'&<>]/;
  function D(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = re.exec(e);
    if (n) {
      var s = "", c, w = 0;
      for (c = n.index; c < e.length; c++) {
        switch (e.charCodeAt(c)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        w !== c && (s += e.substring(w, c)), w = c + 1, s += n;
      }
      e = w !== c ? s + e.substring(w, c) : s;
    }
    return e;
  }
  var X = /([A-Z])/g, M = /^ms-/, U = Array.isArray;
  function V(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function K(e, n, s) {
    switch (n) {
      case "select":
        return V(1, s.value != null ? s.value : s.defaultValue);
      case "svg":
        return V(2, null);
      case "math":
        return V(3, null);
      case "foreignObject":
        return V(1, null);
      case "table":
        return V(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return V(5, null);
      case "colgroup":
        return V(7, null);
      case "tr":
        return V(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? V(1, null) : e;
  }
  var G = /* @__PURE__ */ new Map();
  function R(e, n, s) {
    if (typeof s != "object") throw Error(a(62));
    n = !0;
    for (var c in s) if (l.call(s, c)) {
      var w = s[c];
      if (w != null && typeof w != "boolean" && w !== "") {
        if (c.indexOf("--") === 0) {
          var g = D(c);
          w = D(("" + w).trim());
        } else {
          g = c;
          var _ = G.get(g);
          _ !== void 0 || (_ = D(g.replace(X, "-$1").toLowerCase().replace(M, "-ms-")), G.set(g, _)), g = _, w = typeof w == "number" ? w === 0 || l.call(C, c) ? "" + w : w + "px" : D(("" + w).trim());
        }
        n ? (n = !1, e.push(' style="', g, ":", w)) : e.push(";", g, ":", w);
      }
    }
    n || e.push('"');
  }
  function de(e, n, s, c) {
    switch (s) {
      case "style":
        R(e, n, c);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") {
      if (n = x.hasOwnProperty(s) ? x[s] : null, n !== null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!n.acceptsBooleans) return;
        }
        switch (s = n.attributeName, n.type) {
          case 3:
            c && e.push(" ", s, '=""');
            break;
          case 4:
            c === !0 ? e.push(" ", s, '=""') : c !== !1 && e.push(" ", s, '="', D(c), '"');
            break;
          case 5:
            isNaN(c) || e.push(" ", s, '="', D(c), '"');
            break;
          case 6:
            !isNaN(c) && 1 <= c && e.push(" ", s, '="', D(c), '"');
            break;
          default:
            n.sanitizeURL && (c = "" + c), e.push(" ", s, '="', D(c), '"');
        }
      } else if (k(s)) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = s.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", s, '="', D(c), '"');
      }
    }
  }
  function he(e, n, s) {
    if (n != null) {
      if (s != null) throw Error(a(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(a(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function Be(e) {
    var n = "";
    return o.Children.forEach(e, function(s) {
      s != null && (n += s);
    }), n;
  }
  function He(e, n, s, c) {
    e.push(Ee(s));
    var w = s = null, g;
    for (g in n) if (l.call(n, g)) {
      var _ = n[g];
      if (_ != null) switch (g) {
        case "children":
          s = _;
          break;
        case "dangerouslySetInnerHTML":
          w = _;
          break;
        default:
          de(e, c, g, _);
      }
    }
    return e.push(">"), he(e, w, s), typeof s == "string" ? (e.push(D(s)), null) : s;
  }
  var We = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, rt = /* @__PURE__ */ new Map();
  function Ee(e) {
    var n = rt.get(e);
    if (n === void 0) {
      if (!We.test(e)) throw Error(a(65, e));
      n = "<" + e, rt.set(e, n);
    }
    return n;
  }
  function be(e, n, s, c, w) {
    switch (n) {
      case "select":
        e.push(Ee("select"));
        var g = null, _ = null;
        for (oe in s) if (l.call(s, oe)) {
          var I = s[oe];
          if (I != null) switch (oe) {
            case "children":
              g = I;
              break;
            case "dangerouslySetInnerHTML":
              _ = I;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              de(e, c, oe, I);
          }
        }
        return e.push(">"), he(e, _, g), g;
      case "option":
        _ = w.selectedValue, e.push(Ee("option"));
        var J = I = null, ee = null, oe = null;
        for (g in s) if (l.call(s, g)) {
          var Pe = s[g];
          if (Pe != null) switch (g) {
            case "children":
              I = Pe;
              break;
            case "selected":
              ee = Pe;
              break;
            case "dangerouslySetInnerHTML":
              oe = Pe;
              break;
            case "value":
              J = Pe;
            default:
              de(e, c, g, Pe);
          }
        }
        if (_ != null) if (s = J !== null ? "" + J : Be(I), U(_)) {
          for (c = 0; c < _.length; c++)
            if ("" + _[c] === s) {
              e.push(' selected=""');
              break;
            }
        } else "" + _ === s && e.push(' selected=""');
        else ee && e.push(' selected=""');
        return e.push(">"), he(e, oe, I), I;
      case "textarea":
        e.push(Ee("textarea")), oe = _ = g = null;
        for (I in s) if (l.call(s, I) && (J = s[I], J != null)) switch (I) {
          case "children":
            oe = J;
            break;
          case "value":
            g = J;
            break;
          case "defaultValue":
            _ = J;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(91));
          default:
            de(
              e,
              c,
              I,
              J
            );
        }
        if (g === null && _ !== null && (g = _), e.push(">"), oe != null) {
          if (g != null) throw Error(a(92));
          if (U(oe) && 1 < oe.length) throw Error(a(93));
          g = "" + oe;
        }
        return typeof g == "string" && g[0] === `
` && e.push(`
`), g !== null && e.push(D("" + g)), null;
      case "input":
        e.push(Ee("input")), J = oe = I = g = null;
        for (_ in s) if (l.call(s, _) && (ee = s[_], ee != null)) switch (_) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, "input"));
          case "defaultChecked":
            J = ee;
            break;
          case "defaultValue":
            I = ee;
            break;
          case "checked":
            oe = ee;
            break;
          case "value":
            g = ee;
            break;
          default:
            de(e, c, _, ee);
        }
        return oe !== null ? de(e, c, "checked", oe) : J !== null && de(e, c, "checked", J), g !== null ? de(e, c, "value", g) : I !== null && de(e, c, "value", I), e.push("/>"), null;
      case "menuitem":
        e.push(Ee("menuitem"));
        for (var yt in s) if (l.call(s, yt) && (g = s[yt], g != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(400));
          default:
            de(e, c, yt, g);
        }
        return e.push(">"), null;
      case "title":
        e.push(Ee("title")), g = null;
        for (Pe in s) if (l.call(s, Pe) && (_ = s[Pe], _ != null)) switch (Pe) {
          case "children":
            g = _;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(434));
          default:
            de(e, c, Pe, _);
        }
        return e.push(">"), g;
      case "listing":
      case "pre":
        e.push(Ee(n)), _ = g = null;
        for (J in s) if (l.call(s, J) && (I = s[J], I != null)) switch (J) {
          case "children":
            g = I;
            break;
          case "dangerouslySetInnerHTML":
            _ = I;
            break;
          default:
            de(e, c, J, I);
        }
        if (e.push(">"), _ != null) {
          if (g != null) throw Error(a(60));
          if (typeof _ != "object" || !("__html" in _)) throw Error(a(61));
          s = _.__html, s != null && (typeof s == "string" && 0 < s.length && s[0] === `
` ? e.push(`
`, s) : e.push("" + s));
        }
        return typeof g == "string" && g[0] === `
` && e.push(`
`), g;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        e.push(Ee(n));
        for (var vt in s) if (l.call(s, vt) && (g = s[vt], g != null)) switch (vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, n));
          default:
            de(e, c, vt, g);
        }
        return e.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return He(
          e,
          s,
          n,
          c
        );
      case "html":
        return w.insertionMode === 0 && e.push("<!DOCTYPE html>"), He(e, s, n, c);
      default:
        if (n.indexOf("-") === -1 && typeof s.is != "string") return He(e, s, n, c);
        e.push(Ee(n)), _ = g = null;
        for (ee in s) if (l.call(s, ee) && (I = s[ee], I != null)) switch (ee) {
          case "children":
            g = I;
            break;
          case "dangerouslySetInnerHTML":
            _ = I;
            break;
          case "style":
            R(e, c, I);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(ee) && typeof I != "function" && typeof I != "symbol" && e.push(" ", ee, '="', D(I), '"');
        }
        return e.push(">"), he(e, _, g), g;
    }
  }
  function ze(e, n, s) {
    if (e.push('<!--$?--><template id="'), s === null) throw Error(a(395));
    return e.push(s), e.push('"></template>');
  }
  function Ne(e, n, s, c) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return e.push('<div hidden id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 2:
        return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 3:
        return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 4:
        return e.push('<table hidden id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 5:
        return e.push('<table hidden><tbody id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 6:
        return e.push('<table hidden><tr id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 7:
        return e.push('<table hidden><colgroup id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      default:
        throw Error(a(397));
    }
  }
  function nt(e, n) {
    switch (n.insertionMode) {
      case 0:
      case 1:
        return e.push("</div>");
      case 2:
        return e.push("</svg>");
      case 3:
        return e.push("</math>");
      case 4:
        return e.push("</table>");
      case 5:
        return e.push("</tbody></table>");
      case 6:
        return e.push("</tr></table>");
      case 7:
        return e.push("</colgroup></table>");
      default:
        throw Error(a(397));
    }
  }
  var Ue = /[<\u2028\u2029]/g;
  function De(e) {
    return JSON.stringify(e).replace(Ue, function(n) {
      switch (n) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Le(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Ke(e, n, s, c) {
    return s.generateStaticMarkup ? (e.push(D(n)), !1) : (n === "" ? e = c : (c && e.push("<!-- -->"), e.push(D(n)), e = !0), e);
  }
  var Ye = Object.assign, z = Symbol.for("react.element"), N = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), O = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), me = Symbol.for("react.scope"), ie = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), fe = Symbol.for("react.default_value"), _e = Symbol.iterator;
  function je(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case N:
        return "Portal";
      case E:
        return "Profiler";
      case $:
        return "StrictMode";
      case ne:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case O:
        return (e.displayName || "Context") + ".Consumer";
      case W:
        return (e._context.displayName || "Context") + ".Provider";
      case ue:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Z:
        return n = e.displayName || null, n !== null ? n : je(e.type) || "Memo";
      case ce:
        n = e._payload, e = e._init;
        try {
          return je(e(n));
        } catch {
        }
    }
    return null;
  }
  var Te = {};
  function Je(e, n) {
    if (e = e.contextTypes, !e) return Te;
    var s = {}, c;
    for (c in e) s[c] = n[c];
    return s;
  }
  var $e = null;
  function ye(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var s = n.parent;
      if (e === null) {
        if (s !== null) throw Error(a(401));
      } else {
        if (s === null) throw Error(a(401));
        ye(e, s);
      }
      n.context._currentValue2 = n.value;
    }
  }
  function q(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && q(e);
  }
  function ve(e) {
    var n = e.parent;
    n !== null && ve(n), e.context._currentValue2 = e.value;
  }
  function Qe(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(a(402));
    e.depth === n.depth ? ye(e, n) : Qe(e, n);
  }
  function Xe(e, n) {
    var s = n.parent;
    if (s === null) throw Error(a(402));
    e.depth === s.depth ? ye(e, s) : Xe(e, s), n.context._currentValue2 = n.value;
  }
  function Fe(e) {
    var n = $e;
    n !== e && (n === null ? ve(e) : e === null ? q(n) : n.depth === e.depth ? ye(n, e) : n.depth > e.depth ? Qe(n, e) : Xe(n, e), $e = e);
  }
  var Yt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function Xt(e, n, s, c) {
    var w = e.state !== void 0 ? e.state : null;
    e.updater = Yt, e.props = s, e.state = w;
    var g = { queue: [], replace: !1 };
    e._reactInternals = g;
    var _ = n.contextType;
    if (e.context = typeof _ == "object" && _ !== null ? _._currentValue2 : c, _ = n.getDerivedStateFromProps, typeof _ == "function" && (_ = _(s, w), w = _ == null ? w : Ye({}, w, _), e.state = w), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Yt.enqueueReplaceState(e, e.state, null), g.queue !== null && 0 < g.queue.length) if (n = g.queue, _ = g.replace, g.queue = null, g.replace = !1, _ && n.length === 1) e.state = n[0];
    else {
      for (g = _ ? n[0] : e.state, w = !0, _ = _ ? 1 : 0; _ < n.length; _++) {
        var I = n[_];
        I = typeof I == "function" ? I.call(e, g, s, c) : I, I != null && (w ? (w = !1, g = Ye({}, g, I)) : Ye(g, I));
      }
      e.state = g;
    }
    else g.queue = null;
  }
  var ur = { id: 1, overflow: "" };
  function _t(e, n, s) {
    var c = e.id;
    e = e.overflow;
    var w = 32 - bt(c) - 1;
    c &= ~(1 << w), s += 1;
    var g = 32 - bt(n) + w;
    if (30 < g) {
      var _ = w - w % 5;
      return g = (c & (1 << _) - 1).toString(32), c >>= _, w -= _, { id: 1 << 32 - bt(n) + w | s << w | c, overflow: g + e };
    }
    return { id: 1 << g | s << w | c, overflow: e };
  }
  var bt = Math.clz32 ? Math.clz32 : ot, jt = Math.log, zt = Math.LN2;
  function ot(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (jt(e) / zt | 0) | 0;
  }
  function Et(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Zt = typeof Object.is == "function" ? Object.is : Et, Ge = null, Kt = null, et = null, Se = null, Ct = !1, Ae = !1, tt = 0, ft = null, At = 0;
  function it() {
    if (Ge === null) throw Error(a(321));
    return Ge;
  }
  function Jt() {
    if (0 < At) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $t() {
    return Se === null ? et === null ? (Ct = !1, et = Se = Jt()) : (Ct = !0, Se = et) : Se.next === null ? (Ct = !1, Se = Se.next = Jt()) : (Ct = !0, Se = Se.next), Se;
  }
  function Qt() {
    Kt = Ge = null, Ae = !1, et = null, At = 0, Se = ft = null;
  }
  function Rt(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Bt(e, n, s) {
    if (Ge = it(), Se = $t(), Ct) {
      var c = Se.queue;
      if (n = c.dispatch, ft !== null && (s = ft.get(c), s !== void 0)) {
        ft.delete(c), c = Se.memoizedState;
        do
          c = e(c, s.action), s = s.next;
        while (s !== null);
        return Se.memoizedState = c, [c, n];
      }
      return [Se.memoizedState, n];
    }
    return e = e === Rt ? typeof n == "function" ? n() : n : s !== void 0 ? s(n) : n, Se.memoizedState = e, e = Se.queue = { last: null, dispatch: null }, e = e.dispatch = qe.bind(null, Ge, e), [Se.memoizedState, e];
  }
  function cr(e, n) {
    if (Ge = it(), Se = $t(), n = n === void 0 ? null : n, Se !== null) {
      var s = Se.memoizedState;
      if (s !== null && n !== null) {
        var c = s[1];
        e: if (c === null) c = !1;
        else {
          for (var w = 0; w < c.length && w < n.length; w++) if (!Zt(n[w], c[w])) {
            c = !1;
            break e;
          }
          c = !0;
        }
        if (c) return s[0];
      }
    }
    return e = e(), Se.memoizedState = [e, n], e;
  }
  function qe(e, n, s) {
    if (25 <= At) throw Error(a(301));
    if (e === Ge) if (Ae = !0, e = { action: s, next: null }, ft === null && (ft = /* @__PURE__ */ new Map()), s = ft.get(n), s === void 0) ft.set(n, e);
    else {
      for (n = s; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Ht() {
    throw Error(a(394));
  }
  function Ot() {
  }
  var er = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return it(), e._currentValue2;
  }, useMemo: cr, useReducer: Bt, useRef: function(e) {
    Ge = it(), Se = $t();
    var n = Se.memoizedState;
    return n === null ? (e = { current: e }, Se.memoizedState = e) : n;
  }, useState: function(e) {
    return Bt(Rt, e);
  }, useInsertionEffect: Ot, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return cr(function() {
      return e;
    }, n);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(e) {
    return it(), e;
  }, useTransition: function() {
    return it(), [
      !1,
      Ht
    ];
  }, useId: function() {
    var e = Kt.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - bt(e) - 1)).toString(32) + n;
    var s = Pt;
    if (s === null) throw Error(a(404));
    return n = tt++, e = ":" + s.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return it(), n(e._source);
  }, useSyncExternalStore: function(e, n, s) {
    if (s === void 0) throw Error(a(407));
    return s();
  } }, Pt = null, mt = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function at(e) {
    return console.error(e), null;
  }
  function Tt() {
  }
  function fr(e, n, s, c, w, g, _, I, J) {
    var ee = [], oe = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: c === void 0 ? 12800 : c, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: oe, pingedTasks: ee, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: w === void 0 ? at : w, onAllReady: Tt, onShellReady: _ === void 0 ? Tt : _, onShellError: Tt, onFatalError: Tt }, s = Nt(n, 0, null, s, !1, !1), s.parentFlushed = !0, e = Ut(n, e, null, s, oe, Te, null, ur), ee.push(e), n;
  }
  function Ut(e, n, s, c, w, g, _, I) {
    e.allPendingTasks++, s === null ? e.pendingRootTasks++ : s.pendingTasks++;
    var J = { node: n, ping: function() {
      var ee = e.pingedTasks;
      ee.push(J), ee.length === 1 && vr(e);
    }, blockedBoundary: s, blockedSegment: c, abortSet: w, legacyContext: g, context: _, treeContext: I };
    return w.add(J), J;
  }
  function Nt(e, n, s, c, w, g) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: c, boundary: s, lastPushedText: w, textEmbedded: g };
  }
  function It(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function B(e, n) {
    var s = e.onShellError;
    s(n), s = e.onFatalError, s(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function h(e, n, s, c, w) {
    for (Ge = {}, Kt = n, tt = 0, e = s(c, w); Ae; ) Ae = !1, tt = 0, At += 1, Se = null, e = s(c, w);
    return Qt(), e;
  }
  function A(e, n, s, c) {
    var w = s.render(), g = c.childContextTypes;
    if (g != null) {
      var _ = n.legacyContext;
      if (typeof s.getChildContext != "function") c = _;
      else {
        s = s.getChildContext();
        for (var I in s) if (!(I in g)) throw Error(a(108, je(c) || "Unknown", I));
        c = Ye({}, _, s);
      }
      n.legacyContext = c, we(e, n, w), n.legacyContext = _;
    } else we(e, n, w);
  }
  function F(e, n) {
    if (e && e.defaultProps) {
      n = Ye({}, n), e = e.defaultProps;
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
      return n;
    }
    return n;
  }
  function pe(e, n, s, c, w) {
    if (typeof s == "function") if (s.prototype && s.prototype.isReactComponent) {
      w = Je(s, n.legacyContext);
      var g = s.contextType;
      g = new s(c, typeof g == "object" && g !== null ? g._currentValue2 : w), Xt(g, s, c, w), A(e, n, g, s);
    } else {
      g = Je(s, n.legacyContext), w = h(e, n, s, c, g);
      var _ = tt !== 0;
      if (typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) Xt(w, s, c, g), A(e, n, w, s);
      else if (_) {
        c = n.treeContext, n.treeContext = _t(c, 1, 0);
        try {
          we(e, n, w);
        } finally {
          n.treeContext = c;
        }
      } else we(e, n, w);
    }
    else if (typeof s == "string") {
      switch (w = n.blockedSegment, g = be(w.chunks, s, c, e.responseState, w.formatContext), w.lastPushedText = !1, _ = w.formatContext, w.formatContext = K(_, s, c), Ie(e, n, g), w.formatContext = _, s) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          w.chunks.push("</", s, ">");
      }
      w.lastPushedText = !1;
    } else {
      switch (s) {
        case ge:
        case ie:
        case $:
        case E:
        case j:
          we(e, n, c.children);
          return;
        case te:
          we(e, n, c.children);
          return;
        case me:
          throw Error(a(343));
        case ne:
          e: {
            s = n.blockedBoundary, w = n.blockedSegment, g = c.fallback, c = c.children, _ = /* @__PURE__ */ new Set();
            var I = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: _, errorDigest: null }, J = Nt(e, w.chunks.length, I, w.formatContext, !1, !1);
            w.children.push(J), w.lastPushedText = !1;
            var ee = Nt(e, 0, null, w.formatContext, !1, !1);
            ee.parentFlushed = !0, n.blockedBoundary = I, n.blockedSegment = ee;
            try {
              if (Ie(
                e,
                n,
                c
              ), e.responseState.generateStaticMarkup || ee.lastPushedText && ee.textEmbedded && ee.chunks.push("<!-- -->"), ee.status = 1, pt(I, ee), I.pendingTasks === 0) break e;
            } catch (oe) {
              ee.status = 4, I.forceClientRender = !0, I.errorDigest = It(e, oe);
            } finally {
              n.blockedBoundary = s, n.blockedSegment = w;
            }
            n = Ut(e, g, s, J, _, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof s == "object" && s !== null) switch (s.$$typeof) {
        case ue:
          if (c = h(e, n, s.render, c, w), tt !== 0) {
            s = n.treeContext, n.treeContext = _t(s, 1, 0);
            try {
              we(e, n, c);
            } finally {
              n.treeContext = s;
            }
          } else we(e, n, c);
          return;
        case Z:
          s = s.type, c = F(s, c), pe(e, n, s, c, w);
          return;
        case W:
          if (w = c.children, s = s._context, c = c.value, g = s._currentValue2, s._currentValue2 = c, _ = $e, $e = c = { parent: _, depth: _ === null ? 0 : _.depth + 1, context: s, parentValue: g, value: c }, n.context = c, we(e, n, w), e = $e, e === null) throw Error(a(403));
          c = e.parentValue, e.context._currentValue2 = c === fe ? e.context._defaultValue : c, e = $e = e.parent, n.context = e;
          return;
        case O:
          c = c.children, c = c(s._currentValue2), we(e, n, c);
          return;
        case ce:
          w = s._init, s = w(s._payload), c = F(s, c), pe(
            e,
            n,
            s,
            c,
            void 0
          );
          return;
      }
      throw Error(a(130, s == null ? s : typeof s, ""));
    }
  }
  function we(e, n, s) {
    if (n.node = s, typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case z:
          pe(e, n, s.type, s.props, s.ref);
          return;
        case N:
          throw Error(a(257));
        case ce:
          var c = s._init;
          s = c(s._payload), we(e, n, s);
          return;
      }
      if (U(s)) {
        Me(e, n, s);
        return;
      }
      if (s === null || typeof s != "object" ? c = null : (c = _e && s[_e] || s["@@iterator"], c = typeof c == "function" ? c : null), c && (c = c.call(s))) {
        if (s = c.next(), !s.done) {
          var w = [];
          do
            w.push(s.value), s = c.next();
          while (!s.done);
          Me(e, n, w);
        }
        return;
      }
      throw e = Object.prototype.toString.call(s), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : e));
    }
    typeof s == "string" ? (c = n.blockedSegment, c.lastPushedText = Ke(n.blockedSegment.chunks, s, e.responseState, c.lastPushedText)) : typeof s == "number" && (c = n.blockedSegment, c.lastPushedText = Ke(n.blockedSegment.chunks, "" + s, e.responseState, c.lastPushedText));
  }
  function Me(e, n, s) {
    for (var c = s.length, w = 0; w < c; w++) {
      var g = n.treeContext;
      n.treeContext = _t(g, c, w);
      try {
        Ie(e, n, s[w]);
      } finally {
        n.treeContext = g;
      }
    }
  }
  function Ie(e, n, s) {
    var c = n.blockedSegment.formatContext, w = n.legacyContext, g = n.context;
    try {
      return we(e, n, s);
    } catch (J) {
      if (Qt(), typeof J == "object" && J !== null && typeof J.then == "function") {
        s = J;
        var _ = n.blockedSegment, I = Nt(e, _.chunks.length, null, _.formatContext, _.lastPushedText, !0);
        _.children.push(I), _.lastPushedText = !1, e = Ut(e, n.node, n.blockedBoundary, I, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, s.then(e, e), n.blockedSegment.formatContext = c, n.legacyContext = w, n.context = g, Fe(g);
      } else throw n.blockedSegment.formatContext = c, n.legacyContext = w, n.context = g, Fe(g), J;
    }
  }
  function st(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, gt(this, n, e);
  }
  function Oe(e, n, s) {
    var c = e.blockedBoundary;
    e.blockedSegment.status = 3, c === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, e = s === void 0 ? Error(a(432)) : s, c.errorDigest = n.onError(e), c.parentFlushed && n.clientRenderedBoundaries.push(c)), c.fallbackAbortableTasks.forEach(function(w) {
      return Oe(w, n, s);
    }), c.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (c = n.onAllReady, c()));
  }
  function pt(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var s = n.children[0];
      s.id = n.id, s.parentFlushed = !0, s.status === 1 && pt(e, s);
    } else e.completedSegments.push(n);
  }
  function gt(e, n, s) {
    if (n === null) {
      if (s.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(a(389));
        e.completedRootSegment = s;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Tt, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (s.parentFlushed && s.status === 1 && pt(n, s), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(st, e), n.fallbackAbortableTasks.clear()) : s.parentFlushed && s.status === 1 && (pt(n, s), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function vr(e) {
    if (e.status !== 2) {
      var n = $e, s = mt.current;
      mt.current = er;
      var c = Pt;
      Pt = e.responseState;
      try {
        var w = e.pingedTasks, g;
        for (g = 0; g < w.length; g++) {
          var _ = w[g], I = e, J = _.blockedSegment;
          if (J.status === 0) {
            Fe(_.context);
            try {
              we(I, _, _.node), I.responseState.generateStaticMarkup || J.lastPushedText && J.textEmbedded && J.chunks.push("<!-- -->"), _.abortSet.delete(_), J.status = 1, gt(I, _.blockedBoundary, J);
            } catch (lt) {
              if (Qt(), typeof lt == "object" && lt !== null && typeof lt.then == "function") {
                var ee = _.ping;
                lt.then(ee, ee);
              } else {
                _.abortSet.delete(_), J.status = 4;
                var oe = _.blockedBoundary, Pe = lt, yt = It(I, Pe);
                if (oe === null ? B(I, Pe) : (oe.pendingTasks--, oe.forceClientRender || (oe.forceClientRender = !0, oe.errorDigest = yt, oe.parentFlushed && I.clientRenderedBoundaries.push(oe))), I.allPendingTasks--, I.allPendingTasks === 0) {
                  var vt = I.onAllReady;
                  vt();
                }
              }
            } finally {
            }
          }
        }
        w.splice(0, g), e.destination !== null && pr(e, e.destination);
      } catch (lt) {
        It(e, lt), B(e, lt);
      } finally {
        Pt = c, mt.current = s, s === er && Fe(n);
      }
    }
  }
  function tr(e, n, s) {
    switch (s.parentFlushed = !0, s.status) {
      case 0:
        var c = s.id = e.nextSegmentId++;
        return s.lastPushedText = !1, s.textEmbedded = !1, e = e.responseState, n.push('<template id="'), n.push(e.placeholderPrefix), e = c.toString(16), n.push(e), n.push('"></template>');
      case 1:
        s.status = 2;
        var w = !0;
        c = s.chunks;
        var g = 0;
        s = s.children;
        for (var _ = 0; _ < s.length; _++) {
          for (w = s[_]; g < w.index; g++) n.push(c[g]);
          w = rr(e, n, w);
        }
        for (; g < c.length - 1; g++) n.push(c[g]);
        return g < c.length && (w = n.push(c[g])), w;
      default:
        throw Error(a(390));
    }
  }
  function rr(e, n, s) {
    var c = s.boundary;
    if (c === null) return tr(e, n, s);
    if (c.parentFlushed = !0, c.forceClientRender) return e.responseState.generateStaticMarkup || (c = c.errorDigest, n.push("<!--$!-->"), n.push("<template"), c && (n.push(' data-dgst="'), c = D(c), n.push(c), n.push('"')), n.push("></template>")), tr(e, n, s), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < c.pendingTasks) {
      c.rootSegmentID = e.nextSegmentId++, 0 < c.completedSegments.length && e.partialBoundaries.push(c);
      var w = e.responseState, g = w.nextSuspenseID++;
      return w = w.boundaryPrefix + g.toString(16), c = c.id = w, ze(n, e.responseState, c), tr(e, n, s), n.push("<!--/$-->");
    }
    if (c.byteSize > e.progressiveChunkSize) return c.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(c), ze(n, e.responseState, c.id), tr(e, n, s), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), s = c.completedSegments, s.length !== 1) throw Error(a(391));
    return rr(e, n, s[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function Sr(e, n, s) {
    return Ne(n, e.responseState, s.formatContext, s.id), rr(e, n, s), nt(n, s.formatContext);
  }
  function wr(e, n, s) {
    for (var c = s.completedSegments, w = 0; w < c.length; w++) xr(e, n, s, c[w]);
    if (c.length = 0, e = e.responseState, c = s.id, s = s.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), c === null) throw Error(a(395));
    return s = s.toString(16), n.push(c), n.push('","'), n.push(e.segmentPrefix), n.push(s), n.push('")<\/script>');
  }
  function xr(e, n, s, c) {
    if (c.status === 2) return !0;
    var w = c.id;
    if (w === -1) {
      if ((c.id = s.rootSegmentID) === -1) throw Error(a(392));
      return Sr(e, n, c);
    }
    return Sr(e, n, c), e = e.responseState, n.push(e.startInlineScript), e.sentCompleteSegmentFunction ? n.push('$RS("') : (e.sentCompleteSegmentFunction = !0, n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), w = w.toString(16), n.push(w), n.push('","'), n.push(e.placeholderPrefix), n.push(w), n.push('")<\/script>');
  }
  function pr(e, n) {
    try {
      var s = e.completedRootSegment;
      if (s !== null && e.pendingRootTasks === 0) {
        rr(e, n, s), e.completedRootSegment = null;
        var c = e.responseState.bootstrapChunks;
        for (s = 0; s < c.length - 1; s++) n.push(c[s]);
        s < c.length && n.push(c[s]);
      }
      var w = e.clientRenderedBoundaries, g;
      for (g = 0; g < w.length; g++) {
        var _ = w[g];
        c = n;
        var I = e.responseState, J = _.id, ee = _.errorDigest, oe = _.errorMessage, Pe = _.errorComponentStack;
        if (c.push(I.startInlineScript), I.sentClientRenderFunction ? c.push('$RX("') : (I.sentClientRenderFunction = !0, c.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), J === null) throw Error(a(395));
        if (c.push(J), c.push('"'), ee || oe || Pe) {
          c.push(",");
          var yt = De(ee || "");
          c.push(yt);
        }
        if (oe || Pe) {
          c.push(",");
          var vt = De(oe || "");
          c.push(vt);
        }
        if (Pe) {
          c.push(",");
          var lt = De(Pe);
          c.push(lt);
        }
        if (!c.push(")<\/script>")) {
          e.destination = null, g++, w.splice(0, g);
          return;
        }
      }
      w.splice(0, g);
      var nr = e.completedBoundaries;
      for (g = 0; g < nr.length; g++) if (!wr(e, n, nr[g])) {
        e.destination = null, g++, nr.splice(0, g);
        return;
      }
      nr.splice(0, g);
      var Ft = e.partialBoundaries;
      for (g = 0; g < Ft.length; g++) {
        var Er = Ft[g];
        e: {
          w = e, _ = n;
          var or = Er.completedSegments;
          for (I = 0; I < or.length; I++) if (!xr(w, _, Er, or[I])) {
            I++, or.splice(0, I);
            var Mr = !1;
            break e;
          }
          or.splice(0, I), Mr = !0;
        }
        if (!Mr) {
          e.destination = null, g++, Ft.splice(0, g);
          return;
        }
      }
      Ft.splice(0, g);
      var Vt = e.completedBoundaries;
      for (g = 0; g < Vt.length; g++) if (!wr(e, n, Vt[g])) {
        e.destination = null, g++, Vt.splice(0, g);
        return;
      }
      Vt.splice(0, g);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function Ir(e, n) {
    try {
      var s = e.abortableTasks;
      s.forEach(function(c) {
        return Oe(c, e, n);
      }), s.clear(), e.destination !== null && pr(e, e.destination);
    } catch (c) {
      It(e, c), B(e, c);
    }
  }
  function Fr() {
  }
  function kr(e, n, s, c) {
    var w = !1, g = null, _ = "", I = { push: function(ee) {
      return ee !== null && (_ += ee), !0;
    }, destroy: function(ee) {
      w = !0, g = ee;
    } }, J = !1;
    if (e = fr(e, Le(s, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Fr, void 0, function() {
      J = !0;
    }), vr(e), Ir(e, c), e.status === 1) e.status = 2, I.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = I;
      try {
        pr(e, I);
      } catch (ee) {
        It(e, ee), B(e, ee);
      }
    }
    if (w) throw g;
    if (!J) throw Error(a(426));
    return _;
  }
  return sr.renderToNodeStream = function() {
    throw Error(a(207));
  }, sr.renderToStaticMarkup = function(e, n) {
    return kr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, sr.renderToStaticNodeStream = function() {
    throw Error(a(208));
  }, sr.renderToString = function(e, n) {
    return kr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, sr.version = "18.3.1", sr;
}
var Zr = {};
var bo;
function ta() {
  if (bo) return Zr;
  bo = 1;
  var o = Lt;
  function a(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, i = 1; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = null, f = 0;
  function p(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < f && (t.enqueue(new Uint8Array(l.buffer, 0, f)), l = new Uint8Array(512), f = 0), t.enqueue(r);
    else {
      var i = l.length - f;
      i < r.length && (i === 0 ? t.enqueue(l) : (l.set(r.subarray(0, i), f), t.enqueue(l), r = r.subarray(i)), l = new Uint8Array(512), f = 0), l.set(r, f), f += r.length;
    }
  }
  function m(t, r) {
    return p(t, r), !0;
  }
  function k(t) {
    l && 0 < f && (t.enqueue(new Uint8Array(l.buffer, 0, f)), l = null, f = 0);
  }
  var T = new TextEncoder();
  function x(t) {
    return T.encode(t);
  }
  function v(t) {
    return T.encode(t);
  }
  function L(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var C = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, re = {}, D = {};
  function X(t) {
    return C.call(D, t) ? !0 : C.call(re, t) ? !1 : Y.test(t) ? D[t] = !0 : (re[t] = !0, !1);
  }
  function M(t, r, i, u, S, y, b) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = S, this.mustUseProperty = i, this.propertyName = t, this.type = r, this.sanitizeURL = y, this.removeEmptyString = b;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    U[t] = new M(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    U[r] = new M(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    U[t] = new M(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    U[t] = new M(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    U[t] = new M(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    U[t] = new M(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    U[t] = new M(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    U[t] = new M(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    U[t] = new M(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function K(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      V,
      K
    );
    U[r] = new M(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(V, K);
    U[r] = new M(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(V, K);
    U[r] = new M(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    U[t] = new M(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), U.xlinkHref = new M("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    U[t] = new M(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var G = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, R = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(t) {
    R.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), G[r] = G[t];
    });
  });
  var de = /["'&<>]/;
  function he(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = de.exec(t);
    if (r) {
      var i = "", u, S = 0;
      for (u = r.index; u < t.length; u++) {
        switch (t.charCodeAt(u)) {
          case 34:
            r = "&quot;";
            break;
          case 38:
            r = "&amp;";
            break;
          case 39:
            r = "&#x27;";
            break;
          case 60:
            r = "&lt;";
            break;
          case 62:
            r = "&gt;";
            break;
          default:
            continue;
        }
        S !== u && (i += t.substring(S, u)), S = u + 1, i += r;
      }
      t = S !== u ? i + t.substring(S, u) : i;
    }
    return t;
  }
  var Be = /([A-Z])/g, He = /^ms-/, We = Array.isArray, rt = v("<script>"), Ee = v("<\/script>"), be = v('<script src="'), ze = v('<script type="module" src="'), Ne = v('" async=""><\/script>'), nt = /(<\/|<)(s)(cript)/gi;
  function Ue(t, r, i, u) {
    return "" + r + (i === "s" ? "\\u0073" : "\\u0053") + u;
  }
  function De(t, r, i, u, S) {
    t = t === void 0 ? "" : t, r = r === void 0 ? rt : v('<script nonce="' + he(r) + '">');
    var y = [];
    if (i !== void 0 && y.push(r, x(("" + i).replace(nt, Ue)), Ee), u !== void 0) for (i = 0; i < u.length; i++) y.push(be, x(he(u[i])), Ne);
    if (S !== void 0) for (u = 0; u < S.length; u++) y.push(ze, x(he(S[u])), Ne);
    return { bootstrapChunks: y, startInlineScript: r, placeholderPrefix: v(t + "P:"), segmentPrefix: v(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Le(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Ke(t) {
    return Le(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ye(t, r, i) {
    switch (r) {
      case "select":
        return Le(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return Le(2, null);
      case "math":
        return Le(3, null);
      case "foreignObject":
        return Le(1, null);
      case "table":
        return Le(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Le(5, null);
      case "colgroup":
        return Le(7, null);
      case "tr":
        return Le(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? Le(1, null) : t;
  }
  var z = v("<!-- -->");
  function N(t, r, i, u) {
    return r === "" ? u : (u && t.push(z), t.push(x(he(r))), !0);
  }
  var j = /* @__PURE__ */ new Map(), $ = v(' style="'), E = v(":"), W = v(";");
  function O(t, r, i) {
    if (typeof i != "object") throw Error(a(62));
    r = !0;
    for (var u in i) if (C.call(i, u)) {
      var S = i[u];
      if (S != null && typeof S != "boolean" && S !== "") {
        if (u.indexOf("--") === 0) {
          var y = x(he(u));
          S = x(he(("" + S).trim()));
        } else {
          y = u;
          var b = j.get(y);
          b !== void 0 || (b = v(he(y.replace(Be, "-$1").toLowerCase().replace(He, "-ms-"))), j.set(y, b)), y = b, S = typeof S == "number" ? S === 0 || C.call(G, u) ? x("" + S) : x(S + "px") : x(he(("" + S).trim()));
        }
        r ? (r = !1, t.push($, y, E, S)) : t.push(W, y, E, S);
      }
    }
    r || t.push(te);
  }
  var ue = v(" "), ne = v('="'), te = v('"'), Z = v('=""');
  function ce(t, r, i, u) {
    switch (i) {
      case "style":
        O(t, r, u);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") {
      if (r = U.hasOwnProperty(i) ? U[i] : null, r !== null) {
        switch (typeof u) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (i = x(r.attributeName), r.type) {
          case 3:
            u && t.push(ue, i, Z);
            break;
          case 4:
            u === !0 ? t.push(ue, i, Z) : u !== !1 && t.push(ue, i, ne, x(he(u)), te);
            break;
          case 5:
            isNaN(u) || t.push(ue, i, ne, x(he(u)), te);
            break;
          case 6:
            !isNaN(u) && 1 <= u && t.push(ue, i, ne, x(he(u)), te);
            break;
          default:
            r.sanitizeURL && (u = "" + u), t.push(ue, i, ne, x(he(u)), te);
        }
      } else if (X(i)) {
        switch (typeof u) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = i.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(ue, x(i), ne, x(he(u)), te);
      }
    }
  }
  var me = v(">"), ie = v("/>");
  function ge(t, r, i) {
    if (r != null) {
      if (i != null) throw Error(a(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(a(61));
      r = r.__html, r != null && t.push(x("" + r));
    }
  }
  function fe(t) {
    var r = "";
    return o.Children.forEach(t, function(i) {
      i != null && (r += i);
    }), r;
  }
  var _e = v(' selected=""');
  function je(t, r, i, u) {
    t.push(ye(i));
    var S = i = null, y;
    for (y in r) if (C.call(r, y)) {
      var b = r[y];
      if (b != null) switch (y) {
        case "children":
          i = b;
          break;
        case "dangerouslySetInnerHTML":
          S = b;
          break;
        default:
          ce(t, u, y, b);
      }
    }
    return t.push(me), ge(t, S, i), typeof i == "string" ? (t.push(x(he(i))), null) : i;
  }
  var Te = v(`
`), Je = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function ye(t) {
    var r = $e.get(t);
    if (r === void 0) {
      if (!Je.test(t)) throw Error(a(65, t));
      r = v("<" + t), $e.set(t, r);
    }
    return r;
  }
  var q = v("<!DOCTYPE html>");
  function ve(t, r, i, u, S) {
    switch (r) {
      case "select":
        t.push(ye("select"));
        var y = null, b = null;
        for (ae in i) if (C.call(i, ae)) {
          var P = i[ae];
          if (P != null) switch (ae) {
            case "children":
              y = P;
              break;
            case "dangerouslySetInnerHTML":
              b = P;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(t, u, ae, P);
          }
        }
        return t.push(me), ge(t, b, y), y;
      case "option":
        b = S.selectedValue, t.push(ye("option"));
        var Q = P = null, le = null, ae = null;
        for (y in i) if (C.call(i, y)) {
          var Re = i[y];
          if (Re != null) switch (y) {
            case "children":
              P = Re;
              break;
            case "selected":
              le = Re;
              break;
            case "dangerouslySetInnerHTML":
              ae = Re;
              break;
            case "value":
              Q = Re;
            default:
              ce(t, u, y, Re);
          }
        }
        if (b != null) if (i = Q !== null ? "" + Q : fe(P), We(b)) {
          for (u = 0; u < b.length; u++)
            if ("" + b[u] === i) {
              t.push(_e);
              break;
            }
        } else "" + b === i && t.push(_e);
        else le && t.push(_e);
        return t.push(me), ge(t, ae, P), P;
      case "textarea":
        t.push(ye("textarea")), ae = b = y = null;
        for (P in i) if (C.call(i, P) && (Q = i[P], Q != null)) switch (P) {
          case "children":
            ae = Q;
            break;
          case "value":
            y = Q;
            break;
          case "defaultValue":
            b = Q;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(91));
          default:
            ce(t, u, P, Q);
        }
        if (y === null && b !== null && (y = b), t.push(me), ae != null) {
          if (y != null) throw Error(a(92));
          if (We(ae) && 1 < ae.length) throw Error(a(93));
          y = "" + ae;
        }
        return typeof y == "string" && y[0] === `
` && t.push(Te), y !== null && t.push(x(he("" + y))), null;
      case "input":
        t.push(ye("input")), Q = ae = P = y = null;
        for (b in i) if (C.call(i, b) && (le = i[b], le != null)) switch (b) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, "input"));
          case "defaultChecked":
            Q = le;
            break;
          case "defaultValue":
            P = le;
            break;
          case "checked":
            ae = le;
            break;
          case "value":
            y = le;
            break;
          default:
            ce(t, u, b, le);
        }
        return ae !== null ? ce(
          t,
          u,
          "checked",
          ae
        ) : Q !== null && ce(t, u, "checked", Q), y !== null ? ce(t, u, "value", y) : P !== null && ce(t, u, "value", P), t.push(ie), null;
      case "menuitem":
        t.push(ye("menuitem"));
        for (var ct in i) if (C.call(i, ct) && (y = i[ct], y != null)) switch (ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(400));
          default:
            ce(t, u, ct, y);
        }
        return t.push(me), null;
      case "title":
        t.push(ye("title")), y = null;
        for (Re in i) if (C.call(i, Re) && (b = i[Re], b != null)) switch (Re) {
          case "children":
            y = b;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(434));
          default:
            ce(t, u, Re, b);
        }
        return t.push(me), y;
      case "listing":
      case "pre":
        t.push(ye(r)), b = y = null;
        for (Q in i) if (C.call(i, Q) && (P = i[Q], P != null)) switch (Q) {
          case "children":
            y = P;
            break;
          case "dangerouslySetInnerHTML":
            b = P;
            break;
          default:
            ce(t, u, Q, P);
        }
        if (t.push(me), b != null) {
          if (y != null) throw Error(a(60));
          if (typeof b != "object" || !("__html" in b)) throw Error(a(61));
          i = b.__html, i != null && (typeof i == "string" && 0 < i.length && i[0] === `
` ? t.push(Te, x(i)) : t.push(x("" + i)));
        }
        return typeof y == "string" && y[0] === `
` && t.push(Te), y;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        t.push(ye(r));
        for (var St in i) if (C.call(i, St) && (y = i[St], y != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, r));
          default:
            ce(t, u, St, y);
        }
        return t.push(ie), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return je(t, i, r, u);
      case "html":
        return S.insertionMode === 0 && t.push(q), je(t, i, r, u);
      default:
        if (r.indexOf("-") === -1 && typeof i.is != "string") return je(t, i, r, u);
        t.push(ye(r)), b = y = null;
        for (le in i) if (C.call(i, le) && (P = i[le], P != null)) switch (le) {
          case "children":
            y = P;
            break;
          case "dangerouslySetInnerHTML":
            b = P;
            break;
          case "style":
            O(t, u, P);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            X(le) && typeof P != "function" && typeof P != "symbol" && t.push(ue, x(le), ne, x(he(P)), te);
        }
        return t.push(me), ge(t, b, y), y;
    }
  }
  var Qe = v("</"), Xe = v(">"), Fe = v('<template id="'), Yt = v('"></template>'), Xt = v("<!--$-->"), ur = v('<!--$?--><template id="'), _t = v('"></template>'), bt = v("<!--$!-->"), jt = v("<!--/$-->"), zt = v("<template"), ot = v('"'), Et = v(' data-dgst="');
  v(' data-msg="'), v(' data-stck="');
  var Zt = v("></template>");
  function Ge(t, r, i) {
    if (p(t, ur), i === null) throw Error(a(395));
    return p(t, i), m(t, _t);
  }
  var Kt = v('<div hidden id="'), et = v('">'), Se = v("</div>"), Ct = v('<svg aria-hidden="true" style="display:none" id="'), Ae = v('">'), tt = v("</svg>"), ft = v('<math aria-hidden="true" style="display:none" id="'), At = v('">'), it = v("</math>"), Jt = v('<table hidden id="'), $t = v('">'), Qt = v("</table>"), Rt = v('<table hidden><tbody id="'), Bt = v('">'), cr = v("</tbody></table>"), qe = v('<table hidden><tr id="'), Ht = v('">'), Ot = v("</tr></table>"), er = v('<table hidden><colgroup id="'), Pt = v('">'), mt = v("</colgroup></table>");
  function at(t, r, i, u) {
    switch (i.insertionMode) {
      case 0:
      case 1:
        return p(t, Kt), p(t, r.segmentPrefix), p(t, x(u.toString(16))), m(t, et);
      case 2:
        return p(t, Ct), p(t, r.segmentPrefix), p(t, x(u.toString(16))), m(t, Ae);
      case 3:
        return p(t, ft), p(t, r.segmentPrefix), p(t, x(u.toString(16))), m(t, At);
      case 4:
        return p(t, Jt), p(t, r.segmentPrefix), p(t, x(u.toString(16))), m(t, $t);
      case 5:
        return p(t, Rt), p(t, r.segmentPrefix), p(t, x(u.toString(16))), m(t, Bt);
      case 6:
        return p(t, qe), p(t, r.segmentPrefix), p(t, x(u.toString(16))), m(t, Ht);
      case 7:
        return p(
          t,
          er
        ), p(t, r.segmentPrefix), p(t, x(u.toString(16))), m(t, Pt);
      default:
        throw Error(a(397));
    }
  }
  function Tt(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return m(t, Se);
      case 2:
        return m(t, tt);
      case 3:
        return m(t, it);
      case 4:
        return m(t, Qt);
      case 5:
        return m(t, cr);
      case 6:
        return m(t, Ot);
      case 7:
        return m(t, mt);
      default:
        throw Error(a(397));
    }
  }
  var fr = v('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ut = v('$RS("'), Nt = v('","'), It = v('")<\/script>'), B = v('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), h = v('$RC("'), A = v('","'), F = v('")<\/script>'), pe = v('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = v('$RX("'), Me = v('"'), Ie = v(")<\/script>"), st = v(","), Oe = /[<\u2028\u2029]/g;
  function pt(t) {
    return JSON.stringify(t).replace(Oe, function(r) {
      switch (r) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var gt = Object.assign, vr = Symbol.for("react.element"), tr = Symbol.for("react.portal"), rr = Symbol.for("react.fragment"), Sr = Symbol.for("react.strict_mode"), wr = Symbol.for("react.profiler"), xr = Symbol.for("react.provider"), pr = Symbol.for("react.context"), Ir = Symbol.for("react.forward_ref"), Fr = Symbol.for("react.suspense"), kr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), s = Symbol.for("react.scope"), c = Symbol.for("react.debug_trace_mode"), w = Symbol.for("react.legacy_hidden"), g = Symbol.for("react.default_value"), _ = Symbol.iterator;
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case rr:
        return "Fragment";
      case tr:
        return "Portal";
      case wr:
        return "Profiler";
      case Sr:
        return "StrictMode";
      case Fr:
        return "Suspense";
      case kr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case pr:
        return (t.displayName || "Context") + ".Consumer";
      case xr:
        return (t._context.displayName || "Context") + ".Provider";
      case Ir:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return r = t.displayName || null, r !== null ? r : I(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return I(t(r));
        } catch {
        }
    }
    return null;
  }
  var J = {};
  function ee(t, r) {
    if (t = t.contextTypes, !t) return J;
    var i = {}, u;
    for (u in t) i[u] = r[u];
    return i;
  }
  var oe = null;
  function Pe(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var i = r.parent;
      if (t === null) {
        if (i !== null) throw Error(a(401));
      } else {
        if (i === null) throw Error(a(401));
        Pe(t, i);
      }
      r.context._currentValue = r.value;
    }
  }
  function yt(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && yt(t);
  }
  function vt(t) {
    var r = t.parent;
    r !== null && vt(r), t.context._currentValue = t.value;
  }
  function lt(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(a(402));
    t.depth === r.depth ? Pe(t, r) : lt(t, r);
  }
  function nr(t, r) {
    var i = r.parent;
    if (i === null) throw Error(a(402));
    t.depth === i.depth ? Pe(t, i) : nr(t, i), r.context._currentValue = r.value;
  }
  function Ft(t) {
    var r = oe;
    r !== t && (r === null ? vt(t) : t === null ? yt(r) : r.depth === t.depth ? Pe(r, t) : r.depth > t.depth ? lt(r, t) : nr(r, t), oe = t);
  }
  var Er = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function or(t, r, i, u) {
    var S = t.state !== void 0 ? t.state : null;
    t.updater = Er, t.props = i, t.state = S;
    var y = { queue: [], replace: !1 };
    t._reactInternals = y;
    var b = r.contextType;
    if (t.context = typeof b == "object" && b !== null ? b._currentValue : u, b = r.getDerivedStateFromProps, typeof b == "function" && (b = b(i, S), S = b == null ? S : gt({}, S, b), t.state = S), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && Er.enqueueReplaceState(t, t.state, null), y.queue !== null && 0 < y.queue.length) if (r = y.queue, b = y.replace, y.queue = null, y.replace = !1, b && r.length === 1) t.state = r[0];
    else {
      for (y = b ? r[0] : t.state, S = !0, b = b ? 1 : 0; b < r.length; b++) {
        var P = r[b];
        P = typeof P == "function" ? P.call(t, y, i, u) : P, P != null && (S ? (S = !1, y = gt({}, y, P)) : gt(y, P));
      }
      t.state = y;
    }
    else y.queue = null;
  }
  var Mr = { id: 1, overflow: "" };
  function Vt(t, r, i) {
    var u = t.id;
    t = t.overflow;
    var S = 32 - Dr(u) - 1;
    u &= ~(1 << S), i += 1;
    var y = 32 - Dr(r) + S;
    if (30 < y) {
      var b = S - S % 5;
      return y = (u & (1 << b) - 1).toString(32), u >>= b, S -= b, { id: 1 << 32 - Dr(r) + S | i << S | u, overflow: y + t };
    }
    return { id: 1 << y | i << S | u, overflow: t };
  }
  var Dr = Math.clz32 ? Math.clz32 : ai, oi = Math.log, ii = Math.LN2;
  function ai(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (oi(t) / ii | 0) | 0;
  }
  function si(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var li = typeof Object.is == "function" ? Object.is : si, Mt = null, ln = null, Lr = null, Ce = null, Tr = !1, jr = !1, _r = 0, Wt = null, zr = 0;
  function ir() {
    if (Mt === null) throw Error(a(321));
    return Mt;
  }
  function Xn() {
    if (0 < zr) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function un() {
    return Ce === null ? Lr === null ? (Tr = !1, Lr = Ce = Xn()) : (Tr = !0, Ce = Lr) : Ce.next === null ? (Tr = !1, Ce = Ce.next = Xn()) : (Tr = !0, Ce = Ce.next), Ce;
  }
  function cn() {
    ln = Mt = null, jr = !1, Lr = null, zr = 0, Ce = Wt = null;
  }
  function Zn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Kn(t, r, i) {
    if (Mt = ir(), Ce = un(), Tr) {
      var u = Ce.queue;
      if (r = u.dispatch, Wt !== null && (i = Wt.get(u), i !== void 0)) {
        Wt.delete(u), u = Ce.memoizedState;
        do
          u = t(u, i.action), i = i.next;
        while (i !== null);
        return Ce.memoizedState = u, [u, r];
      }
      return [Ce.memoizedState, r];
    }
    return t = t === Zn ? typeof r == "function" ? r() : r : i !== void 0 ? i(r) : r, Ce.memoizedState = t, t = Ce.queue = { last: null, dispatch: null }, t = t.dispatch = ui.bind(null, Mt, t), [Ce.memoizedState, t];
  }
  function Jn(t, r) {
    if (Mt = ir(), Ce = un(), r = r === void 0 ? null : r, Ce !== null) {
      var i = Ce.memoizedState;
      if (i !== null && r !== null) {
        var u = i[1];
        e: if (u === null) u = !1;
        else {
          for (var S = 0; S < u.length && S < r.length; S++) if (!li(r[S], u[S])) {
            u = !1;
            break e;
          }
          u = !0;
        }
        if (u) return i[0];
      }
    }
    return t = t(), Ce.memoizedState = [t, r], t;
  }
  function ui(t, r, i) {
    if (25 <= zr) throw Error(a(301));
    if (t === Mt) if (jr = !0, t = { action: i, next: null }, Wt === null && (Wt = /* @__PURE__ */ new Map()), i = Wt.get(r), i === void 0) Wt.set(r, t);
    else {
      for (r = i; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function ci() {
    throw Error(a(394));
  }
  function $r() {
  }
  var Qn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return ir(), t._currentValue;
  }, useMemo: Jn, useReducer: Kn, useRef: function(t) {
    Mt = ir(), Ce = un();
    var r = Ce.memoizedState;
    return r === null ? (t = { current: t }, Ce.memoizedState = t) : r;
  }, useState: function(t) {
    return Kn(Zn, t);
  }, useInsertionEffect: $r, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return Jn(function() {
      return t;
    }, r);
  }, useImperativeHandle: $r, useEffect: $r, useDebugValue: $r, useDeferredValue: function(t) {
    return ir(), t;
  }, useTransition: function() {
    return ir(), [!1, ci];
  }, useId: function() {
    var t = ln.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Dr(t) - 1)).toString(32) + r;
    var i = Br;
    if (i === null) throw Error(a(404));
    return r = _r++, t = ":" + i.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return ir(), r(t._source);
  }, useSyncExternalStore: function(t, r, i) {
    if (i === void 0) throw Error(a(407));
    return i();
  } }, Br = null, fn = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function fi(t) {
    return console.error(t), null;
  }
  function br() {
  }
  function pi(t, r, i, u, S, y, b, P, Q) {
    var le = [], ae = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: u === void 0 ? 12800 : u, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ae, pingedTasks: le, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: S === void 0 ? fi : S, onAllReady: y === void 0 ? br : y, onShellReady: b === void 0 ? br : b, onShellError: P === void 0 ? br : P, onFatalError: Q === void 0 ? br : Q }, i = Hr(r, 0, null, i, !1, !1), i.parentFlushed = !0, t = pn(r, t, null, i, ae, J, null, Mr), le.push(t), r;
  }
  function pn(t, r, i, u, S, y, b, P) {
    t.allPendingTasks++, i === null ? t.pendingRootTasks++ : i.pendingTasks++;
    var Q = { node: r, ping: function() {
      var le = t.pingedTasks;
      le.push(Q), le.length === 1 && ao(t);
    }, blockedBoundary: i, blockedSegment: u, abortSet: S, legacyContext: y, context: b, treeContext: P };
    return S.add(Q), Q;
  }
  function Hr(t, r, i, u, S, y) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: u, boundary: i, lastPushedText: S, textEmbedded: y };
  }
  function Cr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Ur(t, r) {
    var i = t.onShellError;
    i(r), i = t.onFatalError, i(r), t.destination !== null ? (t.status = 2, L(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function eo(t, r, i, u, S) {
    for (Mt = {}, ln = r, _r = 0, t = i(u, S); jr; ) jr = !1, _r = 0, zr += 1, Ce = null, t = i(u, S);
    return cn(), t;
  }
  function to(t, r, i, u) {
    var S = i.render(), y = u.childContextTypes;
    if (y != null) {
      var b = r.legacyContext;
      if (typeof i.getChildContext != "function") u = b;
      else {
        i = i.getChildContext();
        for (var P in i) if (!(P in y)) throw Error(a(108, I(u) || "Unknown", P));
        u = gt({}, b, i);
      }
      r.legacyContext = u, ut(t, r, S), r.legacyContext = b;
    } else ut(t, r, S);
  }
  function ro(t, r) {
    if (t && t.defaultProps) {
      r = gt({}, r), t = t.defaultProps;
      for (var i in t) r[i] === void 0 && (r[i] = t[i]);
      return r;
    }
    return r;
  }
  function dn(t, r, i, u, S) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      S = ee(i, r.legacyContext);
      var y = i.contextType;
      y = new i(u, typeof y == "object" && y !== null ? y._currentValue : S), or(y, i, u, S), to(t, r, y, i);
    } else {
      y = ee(i, r.legacyContext), S = eo(t, r, i, u, y);
      var b = _r !== 0;
      if (typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) or(S, i, u, y), to(t, r, S, i);
      else if (b) {
        u = r.treeContext, r.treeContext = Vt(u, 1, 0);
        try {
          ut(t, r, S);
        } finally {
          r.treeContext = u;
        }
      } else ut(t, r, S);
    }
    else if (typeof i == "string") {
      switch (S = r.blockedSegment, y = ve(S.chunks, i, u, t.responseState, S.formatContext), S.lastPushedText = !1, b = S.formatContext, S.formatContext = Ye(b, i, u), hn(t, r, y), S.formatContext = b, i) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          S.chunks.push(Qe, x(i), Xe);
      }
      S.lastPushedText = !1;
    } else {
      switch (i) {
        case w:
        case c:
        case Sr:
        case wr:
        case rr:
          ut(t, r, u.children);
          return;
        case kr:
          ut(t, r, u.children);
          return;
        case s:
          throw Error(a(343));
        case Fr:
          e: {
            i = r.blockedBoundary, S = r.blockedSegment, y = u.fallback, u = u.children, b = /* @__PURE__ */ new Set();
            var P = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: b, errorDigest: null }, Q = Hr(t, S.chunks.length, P, S.formatContext, !1, !1);
            S.children.push(Q), S.lastPushedText = !1;
            var le = Hr(t, 0, null, S.formatContext, !1, !1);
            le.parentFlushed = !0, r.blockedBoundary = P, r.blockedSegment = le;
            try {
              if (hn(
                t,
                r,
                u
              ), le.lastPushedText && le.textEmbedded && le.chunks.push(z), le.status = 1, Vr(P, le), P.pendingTasks === 0) break e;
            } catch (ae) {
              le.status = 4, P.forceClientRender = !0, P.errorDigest = Cr(t, ae);
            } finally {
              r.blockedBoundary = i, r.blockedSegment = S;
            }
            r = pn(t, y, i, Q, b, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case Ir:
          if (u = eo(t, r, i.render, u, S), _r !== 0) {
            i = r.treeContext, r.treeContext = Vt(i, 1, 0);
            try {
              ut(t, r, u);
            } finally {
              r.treeContext = i;
            }
          } else ut(t, r, u);
          return;
        case e:
          i = i.type, u = ro(i, u), dn(t, r, i, u, S);
          return;
        case xr:
          if (S = u.children, i = i._context, u = u.value, y = i._currentValue, i._currentValue = u, b = oe, oe = u = { parent: b, depth: b === null ? 0 : b.depth + 1, context: i, parentValue: y, value: u }, r.context = u, ut(t, r, S), t = oe, t === null) throw Error(a(403));
          u = t.parentValue, t.context._currentValue = u === g ? t.context._defaultValue : u, t = oe = t.parent, r.context = t;
          return;
        case pr:
          u = u.children, u = u(i._currentValue), ut(t, r, u);
          return;
        case n:
          S = i._init, i = S(i._payload), u = ro(i, u), dn(t, r, i, u, void 0);
          return;
      }
      throw Error(a(
        130,
        i == null ? i : typeof i,
        ""
      ));
    }
  }
  function ut(t, r, i) {
    if (r.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case vr:
          dn(t, r, i.type, i.props, i.ref);
          return;
        case tr:
          throw Error(a(257));
        case n:
          var u = i._init;
          i = u(i._payload), ut(t, r, i);
          return;
      }
      if (We(i)) {
        no(t, r, i);
        return;
      }
      if (i === null || typeof i != "object" ? u = null : (u = _ && i[_] || i["@@iterator"], u = typeof u == "function" ? u : null), u && (u = u.call(i))) {
        if (i = u.next(), !i.done) {
          var S = [];
          do
            S.push(i.value), i = u.next();
          while (!i.done);
          no(t, r, S);
        }
        return;
      }
      throw t = Object.prototype.toString.call(i), Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : t));
    }
    typeof i == "string" ? (u = r.blockedSegment, u.lastPushedText = N(r.blockedSegment.chunks, i, t.responseState, u.lastPushedText)) : typeof i == "number" && (u = r.blockedSegment, u.lastPushedText = N(r.blockedSegment.chunks, "" + i, t.responseState, u.lastPushedText));
  }
  function no(t, r, i) {
    for (var u = i.length, S = 0; S < u; S++) {
      var y = r.treeContext;
      r.treeContext = Vt(y, u, S);
      try {
        hn(t, r, i[S]);
      } finally {
        r.treeContext = y;
      }
    }
  }
  function hn(t, r, i) {
    var u = r.blockedSegment.formatContext, S = r.legacyContext, y = r.context;
    try {
      return ut(t, r, i);
    } catch (Q) {
      if (cn(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
        i = Q;
        var b = r.blockedSegment, P = Hr(t, b.chunks.length, null, b.formatContext, b.lastPushedText, !0);
        b.children.push(P), b.lastPushedText = !1, t = pn(t, r.node, r.blockedBoundary, P, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, i.then(t, t), r.blockedSegment.formatContext = u, r.legacyContext = S, r.context = y, Ft(y);
      } else throw r.blockedSegment.formatContext = u, r.legacyContext = S, r.context = y, Ft(y), Q;
    }
  }
  function di(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, io(this, r, t);
  }
  function oo(t, r, i) {
    var u = t.blockedBoundary;
    t.blockedSegment.status = 3, u === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, t = i === void 0 ? Error(a(432)) : i, u.errorDigest = r.onError(t), u.parentFlushed && r.clientRenderedBoundaries.push(u)), u.fallbackAbortableTasks.forEach(function(S) {
      return oo(S, r, i);
    }), u.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (u = r.onAllReady, u()));
  }
  function Vr(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var i = r.children[0];
      i.id = r.id, i.parentFlushed = !0, i.status === 1 && Vr(t, i);
    } else t.completedSegments.push(r);
  }
  function io(t, r, i) {
    if (r === null) {
      if (i.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(a(389));
        t.completedRootSegment = i;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = br, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Vr(r, i), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(di, t), r.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Vr(r, i), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function ao(t) {
    if (t.status !== 2) {
      var r = oe, i = fn.current;
      fn.current = Qn;
      var u = Br;
      Br = t.responseState;
      try {
        var S = t.pingedTasks, y;
        for (y = 0; y < S.length; y++) {
          var b = S[y], P = t, Q = b.blockedSegment;
          if (Q.status === 0) {
            Ft(b.context);
            try {
              ut(P, b, b.node), Q.lastPushedText && Q.textEmbedded && Q.chunks.push(z), b.abortSet.delete(b), Q.status = 1, io(P, b.blockedBoundary, Q);
            } catch (wt) {
              if (cn(), typeof wt == "object" && wt !== null && typeof wt.then == "function") {
                var le = b.ping;
                wt.then(le, le);
              } else {
                b.abortSet.delete(b), Q.status = 4;
                var ae = b.blockedBoundary, Re = wt, ct = Cr(P, Re);
                if (ae === null ? Ur(P, Re) : (ae.pendingTasks--, ae.forceClientRender || (ae.forceClientRender = !0, ae.errorDigest = ct, ae.parentFlushed && P.clientRenderedBoundaries.push(ae))), P.allPendingTasks--, P.allPendingTasks === 0) {
                  var St = P.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        S.splice(0, y), t.destination !== null && mn(t, t.destination);
      } catch (wt) {
        Cr(t, wt), Ur(t, wt);
      } finally {
        Br = u, fn.current = i, i === Qn && Ft(r);
      }
    }
  }
  function Wr(t, r, i) {
    switch (i.parentFlushed = !0, i.status) {
      case 0:
        var u = i.id = t.nextSegmentId++;
        return i.lastPushedText = !1, i.textEmbedded = !1, t = t.responseState, p(r, Fe), p(r, t.placeholderPrefix), t = x(u.toString(16)), p(r, t), m(r, Yt);
      case 1:
        i.status = 2;
        var S = !0;
        u = i.chunks;
        var y = 0;
        i = i.children;
        for (var b = 0; b < i.length; b++) {
          for (S = i[b]; y < S.index; y++) p(r, u[y]);
          S = Gr(t, r, S);
        }
        for (; y < u.length - 1; y++) p(r, u[y]);
        return y < u.length && (S = m(r, u[y])), S;
      default:
        throw Error(a(390));
    }
  }
  function Gr(t, r, i) {
    var u = i.boundary;
    if (u === null) return Wr(t, r, i);
    if (u.parentFlushed = !0, u.forceClientRender) u = u.errorDigest, m(r, bt), p(r, zt), u && (p(r, Et), p(r, x(he(u))), p(r, ot)), m(r, Zt), Wr(t, r, i);
    else if (0 < u.pendingTasks) {
      u.rootSegmentID = t.nextSegmentId++, 0 < u.completedSegments.length && t.partialBoundaries.push(u);
      var S = t.responseState, y = S.nextSuspenseID++;
      S = v(S.boundaryPrefix + y.toString(16)), u = u.id = S, Ge(r, t.responseState, u), Wr(t, r, i);
    } else if (u.byteSize > t.progressiveChunkSize) u.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(u), Ge(r, t.responseState, u.id), Wr(t, r, i);
    else {
      if (m(r, Xt), i = u.completedSegments, i.length !== 1) throw Error(a(391));
      Gr(t, r, i[0]);
    }
    return m(r, jt);
  }
  function so(t, r, i) {
    return at(r, t.responseState, i.formatContext, i.id), Gr(t, r, i), Tt(r, i.formatContext);
  }
  function lo(t, r, i) {
    for (var u = i.completedSegments, S = 0; S < u.length; S++) uo(t, r, i, u[S]);
    if (u.length = 0, t = t.responseState, u = i.id, i = i.rootSegmentID, p(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? p(r, h) : (t.sentCompleteBoundaryFunction = !0, p(r, B)), u === null) throw Error(a(395));
    return i = x(i.toString(16)), p(r, u), p(r, A), p(r, t.segmentPrefix), p(r, i), m(r, F);
  }
  function uo(t, r, i, u) {
    if (u.status === 2) return !0;
    var S = u.id;
    if (S === -1) {
      if ((u.id = i.rootSegmentID) === -1) throw Error(a(392));
      return so(t, r, u);
    }
    return so(t, r, u), t = t.responseState, p(r, t.startInlineScript), t.sentCompleteSegmentFunction ? p(r, Ut) : (t.sentCompleteSegmentFunction = !0, p(r, fr)), p(r, t.segmentPrefix), S = x(S.toString(16)), p(r, S), p(r, Nt), p(r, t.placeholderPrefix), p(r, S), m(r, It);
  }
  function mn(t, r) {
    l = new Uint8Array(512), f = 0;
    try {
      var i = t.completedRootSegment;
      if (i !== null && t.pendingRootTasks === 0) {
        Gr(t, r, i), t.completedRootSegment = null;
        var u = t.responseState.bootstrapChunks;
        for (i = 0; i < u.length - 1; i++) p(r, u[i]);
        i < u.length && m(r, u[i]);
      }
      var S = t.clientRenderedBoundaries, y;
      for (y = 0; y < S.length; y++) {
        var b = S[y];
        u = r;
        var P = t.responseState, Q = b.id, le = b.errorDigest, ae = b.errorMessage, Re = b.errorComponentStack;
        if (p(u, P.startInlineScript), P.sentClientRenderFunction ? p(u, we) : (P.sentClientRenderFunction = !0, p(
          u,
          pe
        )), Q === null) throw Error(a(395));
        p(u, Q), p(u, Me), (le || ae || Re) && (p(u, st), p(u, x(pt(le || "")))), (ae || Re) && (p(u, st), p(u, x(pt(ae || "")))), Re && (p(u, st), p(u, x(pt(Re)))), m(u, Ie);
      }
      S.splice(0, y);
      var ct = t.completedBoundaries;
      for (y = 0; y < ct.length; y++) lo(t, r, ct[y]);
      ct.splice(0, y), k(r), l = new Uint8Array(512), f = 0;
      var St = t.partialBoundaries;
      for (y = 0; y < St.length; y++) {
        var wt = St[y];
        e: {
          S = t, b = r;
          var qr = wt.completedSegments;
          for (P = 0; P < qr.length; P++) if (!uo(
            S,
            b,
            wt,
            qr[P]
          )) {
            P++, qr.splice(0, P);
            var fo = !1;
            break e;
          }
          qr.splice(0, P), fo = !0;
        }
        if (!fo) {
          t.destination = null, y++, St.splice(0, y);
          return;
        }
      }
      St.splice(0, y);
      var gn = t.completedBoundaries;
      for (y = 0; y < gn.length; y++) lo(t, r, gn[y]);
      gn.splice(0, y);
    } finally {
      k(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function co(t, r) {
    try {
      var i = t.abortableTasks;
      i.forEach(function(u) {
        return oo(u, t, r);
      }), i.clear(), t.destination !== null && mn(t, t.destination);
    } catch (u) {
      Cr(t, u), Ur(t, u);
    }
  }
  return Zr.renderToReadableStream = function(t, r) {
    return new Promise(function(i, u) {
      var S, y, b = new Promise(function(ae, Re) {
        y = ae, S = Re;
      }), P = pi(t, De(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Ke(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, y, function() {
        var ae = new ReadableStream({ type: "bytes", pull: function(Re) {
          if (P.status === 1) P.status = 2, L(Re, P.fatalError);
          else if (P.status !== 2 && P.destination === null) {
            P.destination = Re;
            try {
              mn(P, Re);
            } catch (ct) {
              Cr(P, ct), Ur(P, ct);
            }
          }
        }, cancel: function() {
          co(P);
        } }, { highWaterMark: 0 });
        ae.allReady = b, i(ae);
      }, function(ae) {
        b.catch(function() {
        }), u(ae);
      }, S);
      if (r && r.signal) {
        var Q = r.signal, le = function() {
          co(P, Q.reason), Q.removeEventListener("abort", le);
        };
        Q.addEventListener("abort", le);
      }
      ao(P);
    });
  }, Zr.version = "18.3.1", Zr;
}
var gr, Wo;
gr = ea(), Wo = ta();
gr.version;
gr.renderToString;
gr.renderToStaticMarkup;
gr.renderToNodeStream;
gr.renderToStaticNodeStream;
Wo.renderToReadableStream;
const ra = "staticMarkup";
function na() {
  const a = hi().indexOf(ra) > -1 ? !0 : void 0;
  return {
    isBootstrap: a,
    isReact: a ? void 0 : !0
  };
}
const zn = ({ gaData: o, prefix: a = "", children: l }) => {
  const { isReact: f } = na(), { onClick: p, ...m } = l.props;
  if (f)
    return Lt.cloneElement(l, {
      ...m,
      onClick: (x) => (Qi(o), p ? p(x) : !0)
    });
  let k = "";
  ["input", "header", "header-input"].includes(a) && (k = `-${a}`);
  const T = {
    [`data-ga${k}`]: o.text,
    [`data-ga${k}-name`]: o.name,
    [`data-ga${k}-event`]: o.event,
    [`data-ga${k}-action`]: o.action,
    [`data-ga${k}-type`]: o.type,
    [`data-ga${k}-region`]: o.region,
    [`data-ga${k}-section`]: o.section,
    [`data-ga${k}-component`]: o.component
  };
  return Lt.cloneElement(l, {
    ...m,
    onClick: p,
    ...T
  });
}, oa = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, $n = ({
  label: o,
  cardTitle: a,
  gaData: l,
  ariaLabel: f,
  block: p,
  color: m,
  disabled: k,
  element: T,
  href: x,
  icon: v,
  innerRef: L,
  onClick: C,
  size: Y,
  classes: re,
  target: D,
  ...X
}) => {
  const M = Pr("btn", {
    [`btn-${m}`]: !0,
    "btn-md": Y === "small",
    "btn-sm": Y === "xsmall",
    "btn-block": p,
    disabled: k
  });
  let U = T;
  return x && T === "button" && (U = "a"), /* @__PURE__ */ H.jsx(
    zn,
    {
      gaData: {
        ...oa,
        section: a,
        // @deprecated - remove at some point
        ...l,
        text: o
      },
      children: /* @__PURE__ */ H.jsxs(
        U,
        {
          type: U === "button" && C ? "button" : void 0,
          ...X,
          className: Pr(re) || M,
          href: x,
          ref: L,
          onClick: C,
          "aria-label": f,
          target: U === "a" ? D : null,
          children: [
            v && /* @__PURE__ */ H.jsx("i", { className: `${v == null ? void 0 : v[0]} fa-${v == null ? void 0 : v[1]} me-1` }),
            o
          ]
        }
      )
    }
  );
};
$n.propTypes = {
  /**
   * Button label
   */
  label: d.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: d.string,
  /**
   * Google Analytics event data
   */
  gaData: Vo,
  /**
    ARIA label for accessibility
  */
  ariaLabel: d.string,
  /**
    Render button as a block-button?
  */
  block: d.bool,
  /**
    Button background color
  */
  color: d.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: d.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: d.oneOfType([
    d.func,
    d.string,
    d.shape({ $$typeof: d.symbol, render: d.func }),
    d.arrayOf(
      d.oneOfType([
        d.func,
        d.string,
        d.shape({ $$typeof: d.symbol, render: d.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: d.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: d.arrayOf(d.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: d.oneOfType([
    d.object,
    d.func,
    d.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: d.func,
  /**
    Button size
  */
  size: d.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: d.arrayOf(d.string),
  /**
   Link target type
   */
  target: d.oneOf(["_blank", "_self", "_top", "_parent"])
};
$n.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  block: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "default",
  classes: void 0,
  target: "_self"
};
const ia = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Bn = ({
  label: o,
  cardTitle: a,
  gaData: l,
  ariaLabel: f,
  color: p,
  disabled: m,
  element: k = "button",
  innerRef: T,
  href: x,
  onClick: v,
  ...L
}) => {
  const C = Pr("btn", "btn-tag", {
    "btn-tag-alt-white": p === "white",
    "btn-tag-alt-gray": p === "gray",
    "btn-tag-alt-dark": p === "dark",
    disabled: m
  });
  let Y = k;
  return x && k === "button" && (Y = "a"), /* @__PURE__ */ H.jsx(
    zn,
    {
      gaData: {
        ...ia,
        section: a,
        // @deprecated - remove at some point
        ...l,
        text: o
      },
      children: /* @__PURE__ */ H.jsx(
        Y,
        {
          type: Y === "button" && v ? "button" : void 0,
          ...L,
          className: C,
          href: x,
          ref: T,
          onClick: v,
          "aria-label": f,
          children: o
        }
      )
    }
  );
};
Bn.propTypes = {
  /**
    Button tag label
  */
  label: d.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: d.string,
  /**
   * Google Analytics event data
   */
  gaData: Vo,
  /**
    ARIA label for accessibility
  */
  ariaLabel: d.string,
  /**
    Button background color
  */
  color: d.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: d.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: d.oneOfType([
    d.func,
    d.string,
    d.shape({ $$typeof: d.symbol, render: d.func }),
    d.arrayOf(
      d.oneOfType([
        d.func,
        d.string,
        d.shape({ $$typeof: d.symbol, render: d.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: d.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: d.oneOfType([
    d.object,
    d.func,
    d.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: d.func
};
Bn.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  innerRef: void 0,
  onClick: void 0
};
const Go = ({
  src: o,
  alt: a,
  cssClasses: l,
  loading: f = "lazy",
  decoding: p = "async",
  dataTestId: m,
  fetchPriority: k = "auto",
  width: T,
  height: x,
  cardLink: v,
  title: L,
  caption: C,
  captionTitle: Y,
  border: re,
  dropShadow: D
}) => {
  const X = {
    src: o,
    alt: a,
    loading: f,
    decoding: p,
    fetchpriority: k,
    // React attribute bug workaround
    ...(l == null ? void 0 : l.length) > 0 && { className: Ei(l) },
    ...m && { "data-testid": m },
    ...T && { width: T },
    ...x && { height: x }
  }, M = Pr("uds-img", {
    borderless: !re,
    "uds-img-drop-shadow": D
  }), U = (K) => {
    const G = K ? `${X.className} ${K}` : X.className;
    return v ? /* @__PURE__ */ H.jsxs("a", { href: v, children: [
      /* @__PURE__ */ H.jsx("img", { ...X, className: G }),
      /* @__PURE__ */ H.jsx("span", { className: "visually-hidden", children: L })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ H.jsx("img", { ...X, className: G })
    );
  }, V = () => /* @__PURE__ */ H.jsx("div", { className: M, children: /* @__PURE__ */ H.jsxs("figure", { className: "figure uds-figure", children: [
    U(),
    C && /* @__PURE__ */ H.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      Y && /* @__PURE__ */ H.jsx("h3", { children: Y }),
      /* @__PURE__ */ H.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: dr(C)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: C ? V() : U(M) });
};
Go.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: d.string.isRequired,
  /**
   * Image alt text
   */
  alt: d.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: d.arrayOf(d.string),
  /**
   * Image loading mode
   */
  loading: d.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: d.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: d.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: d.string,
  /**
   * Height of the image
   */
  height: d.string,
  dataTestId: d.string,
  cardLink: d.string,
  title: d.string,
  caption: d.string,
  captionTitle: d.string,
  border: d.bool,
  dropShadow: d.bool
};
var Hn = Bo();
function aa(o) {
  function a(z, N, j, $, E) {
    for (var W = 0, O = 0, ue = 0, ne = 0, te, Z, ce = 0, me = 0, ie, ge = ie = te = 0, fe = 0, _e = 0, je = 0, Te = 0, Je = j.length, $e = Je - 1, ye, q = "", ve = "", Qe = "", Xe = "", Fe; fe < Je; ) {
      if (Z = j.charCodeAt(fe), fe === $e && O + ne + ue + W !== 0 && (O !== 0 && (Z = O === 47 ? 10 : 47), ne = ue = W = 0, Je++, $e++), O + ne + ue + W === 0) {
        if (fe === $e && (0 < _e && (q = q.replace(Y, "")), 0 < q.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              q += j.charAt(fe);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (q = q.trim(), te = q.charCodeAt(0), ie = 1, Te = ++fe; fe < Je; ) {
              switch (Z = j.charCodeAt(fe)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch (Z = j.charCodeAt(fe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = fe + 1; ge < $e; ++ge)
                          switch (j.charCodeAt(ge)) {
                            case 47:
                              if (Z === 42 && j.charCodeAt(ge - 1) === 42 && fe + 2 !== ge) {
                                fe = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                fe = ge + 1;
                                break e;
                              }
                          }
                        fe = ge;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; fe++ < $e && j.charCodeAt(fe) !== Z; )
                    ;
              }
              if (ie === 0) break;
              fe++;
            }
            switch (ie = j.substring(Te, fe), te === 0 && (te = (q = q.replace(C, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < _e && (q = q.replace(Y, "")), Z = q.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    _e = N;
                    break;
                  default:
                    _e = nt;
                }
                if (ie = a(N, _e, ie, Z, E + 1), Te = ie.length, 0 < De && (_e = l(nt, q, je), Fe = T(3, ie, _e, N, be, Ee, Te, Z, E, $), q = _e.join(""), Fe !== void 0 && (Te = (ie = Fe.trim()).length) === 0 && (Z = 0, ie = "")), 0 < Te) switch (Z) {
                  case 115:
                    q = q.replace(de, k);
                  case 100:
                  case 109:
                  case 45:
                    ie = q + "{" + ie + "}";
                    break;
                  case 107:
                    q = q.replace(V, "$1 $2"), ie = q + "{" + ie + "}", ie = Ne === 1 || Ne === 2 && m("@" + ie, 3) ? "@-webkit-" + ie + "@" + ie : "@" + ie;
                    break;
                  default:
                    ie = q + ie, $ === 112 && (ie = (ve += ie, ""));
                }
                else ie = "";
                break;
              default:
                ie = a(N, l(N, q, je), ie, $, E + 1);
            }
            Qe += ie, ie = je = _e = ge = te = 0, q = "", Z = j.charCodeAt(++fe);
            break;
          case 125:
          case 59:
            if (q = (0 < _e ? q.replace(Y, "") : q).trim(), 1 < (Te = q.length)) switch (ge === 0 && (te = q.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (Te = (q = q.replace(" ", ":")).length), 0 < De && (Fe = T(1, q, N, z, be, Ee, ve.length, $, E, $)) !== void 0 && (Te = (q = Fe.trim()).length) === 0 && (q = "\0\0"), te = q.charCodeAt(0), Z = q.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  Xe += q + j.charAt(fe);
                  break;
                }
              default:
                q.charCodeAt(Te - 1) !== 58 && (ve += p(q, te, Z, q.charCodeAt(2)));
            }
            je = _e = ge = te = 0, q = "", Z = j.charCodeAt(++fe);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + te === 0 && $ !== 107 && 0 < q.length && (_e = 1, q += "\0"), 0 < De * Ke && T(0, q, N, z, be, Ee, ve.length, $, E, $), Ee = 1, be++;
          break;
        case 59:
        case 125:
          if (O + ne + ue + W === 0) {
            Ee++;
            break;
          }
        default:
          switch (Ee++, ye = j.charAt(fe), Z) {
            case 9:
            case 32:
              if (ne + W + O === 0) switch (ce) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ye = "";
                  break;
                default:
                  Z !== 32 && (ye = " ");
              }
              break;
            case 0:
              ye = "\\0";
              break;
            case 12:
              ye = "\\f";
              break;
            case 11:
              ye = "\\v";
              break;
            case 38:
              ne + O + W === 0 && (_e = je = 1, ye = "\f" + ye);
              break;
            case 108:
              if (ne + O + W + ze === 0 && 0 < ge) switch (fe - ge) {
                case 2:
                  ce === 112 && j.charCodeAt(fe - 3) === 58 && (ze = ce);
                case 8:
                  me === 111 && (ze = me);
              }
              break;
            case 58:
              ne + O + W === 0 && (ge = fe);
              break;
            case 44:
              O + ue + ne + W === 0 && (_e = 1, ye += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (ne = ne === Z ? 0 : ne === 0 ? Z : ne);
              break;
            case 91:
              ne + O + ue === 0 && W++;
              break;
            case 93:
              ne + O + ue === 0 && W--;
              break;
            case 41:
              ne + O + W === 0 && ue--;
              break;
            case 40:
              if (ne + O + W === 0) {
                if (te === 0) switch (2 * ce + 3 * me) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ue++;
              }
              break;
            case 64:
              O + ue + ne + W + ge + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + W + ue)) switch (O) {
                case 0:
                  switch (2 * Z + 3 * j.charCodeAt(fe + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      Te = fe, O = 42;
                  }
                  break;
                case 42:
                  Z === 47 && ce === 42 && Te + 2 !== fe && (j.charCodeAt(Te + 2) === 33 && (ve += j.substring(Te, fe + 1)), ye = "", O = 0);
              }
          }
          O === 0 && (q += ye);
      }
      me = ce, ce = Z, fe++;
    }
    if (Te = ve.length, 0 < Te) {
      if (_e = N, 0 < De && (Fe = T(2, ve, _e, z, be, Ee, Te, $, E, $), Fe !== void 0 && (ve = Fe).length === 0)) return Xe + ve + Qe;
      if (ve = _e.join(",") + "{" + ve + "}", Ne * ze !== 0) {
        switch (Ne !== 2 || m(ve, 2) || (ze = 0), ze) {
          case 111:
            ve = ve.replace(G, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(K, "::-webkit-input-$1") + ve.replace(K, "::-moz-$1") + ve.replace(K, ":-ms-input-$1") + ve;
        }
        ze = 0;
      }
    }
    return Xe + ve + Qe;
  }
  function l(z, N, j) {
    var $ = N.trim().split(M);
    N = $;
    var E = $.length, W = z.length;
    switch (W) {
      case 0:
      case 1:
        var O = 0;
        for (z = W === 0 ? "" : z[0] + " "; O < E; ++O)
          N[O] = f(z, N[O], j).trim();
        break;
      default:
        var ue = O = 0;
        for (N = []; O < E; ++O)
          for (var ne = 0; ne < W; ++ne)
            N[ue++] = f(z[ne] + " ", $[O], j).trim();
    }
    return N;
  }
  function f(z, N, j) {
    var $ = N.charCodeAt(0);
    switch (33 > $ && ($ = (N = N.trim()).charCodeAt(0)), $) {
      case 38:
        return N.replace(U, "$1" + z.trim());
      case 58:
        return z.trim() + N.replace(U, "$1" + z.trim());
      default:
        if (0 < 1 * j && 0 < N.indexOf("\f")) return N.replace(U, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + N;
  }
  function p(z, N, j, $) {
    var E = z + ";", W = 2 * N + 3 * j + 4 * $;
    if (W === 944) {
      z = E.indexOf(":", 9) + 1;
      var O = E.substring(z, E.length - 1).trim();
      return O = E.substring(0, z).trim() + O + ";", Ne === 1 || Ne === 2 && m(O, 1) ? "-webkit-" + O + O : O;
    }
    if (Ne === 0 || Ne === 2 && !m(E, 1)) return E;
    switch (W) {
      case 1015:
        return E.charCodeAt(10) === 97 ? "-webkit-" + E + E : E;
      case 951:
        return E.charCodeAt(3) === 116 ? "-webkit-" + E + E : E;
      case 963:
        return E.charCodeAt(5) === 110 ? "-webkit-" + E + E : E;
      case 1009:
        if (E.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + E + E;
      case 978:
        return "-webkit-" + E + "-moz-" + E + E;
      case 1019:
      case 983:
        return "-webkit-" + E + "-moz-" + E + "-ms-" + E + E;
      case 883:
        if (E.charCodeAt(8) === 45) return "-webkit-" + E + E;
        if (0 < E.indexOf("image-set(", 11)) return E.replace(rt, "$1-webkit-$2") + E;
        break;
      case 932:
        if (E.charCodeAt(4) === 45) switch (E.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + E.replace("-grow", "") + "-webkit-" + E + "-ms-" + E.replace("grow", "positive") + E;
          case 115:
            return "-webkit-" + E + "-ms-" + E.replace("shrink", "negative") + E;
          case 98:
            return "-webkit-" + E + "-ms-" + E.replace("basis", "preferred-size") + E;
        }
        return "-webkit-" + E + "-ms-" + E + E;
      case 964:
        return "-webkit-" + E + "-ms-flex-" + E + E;
      case 1023:
        if (E.charCodeAt(8) !== 99) break;
        return O = E.substring(E.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + E + "-ms-flex-pack" + O + E;
      case 1005:
        return D.test(E) ? E.replace(re, ":-webkit-") + E.replace(re, ":-moz-") + E : E;
      case 1e3:
        switch (O = E.substring(13).trim(), N = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(N)) {
          case 226:
            O = E.replace(R, "tb");
            break;
          case 232:
            O = E.replace(R, "tb-rl");
            break;
          case 220:
            O = E.replace(R, "lr");
            break;
          default:
            return E;
        }
        return "-webkit-" + E + "-ms-" + O + E;
      case 1017:
        if (E.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (N = (E = z).length - 10, O = (E.charCodeAt(N) === 33 ? E.substring(0, N) : E).substring(z.indexOf(":", 7) + 1).trim(), W = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            E = E.replace(O, "-webkit-" + O) + ";" + E;
            break;
          case 207:
          case 102:
            E = E.replace(O, "-webkit-" + (102 < W ? "inline-" : "") + "box") + ";" + E.replace(O, "-webkit-" + O) + ";" + E.replace(O, "-ms-" + O + "box") + ";" + E;
        }
        return E + ";";
      case 938:
        if (E.charCodeAt(5) === 45) switch (E.charCodeAt(6)) {
          case 105:
            return O = E.replace("-items", ""), "-webkit-" + E + "-webkit-box-" + O + "-ms-flex-" + O + E;
          case 115:
            return "-webkit-" + E + "-ms-flex-item-" + E.replace(Be, "") + E;
          default:
            return "-webkit-" + E + "-ms-flex-line-pack" + E.replace("align-content", "").replace(Be, "") + E;
        }
        break;
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (We.test(z) === !0) return (O = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? p(z.replace("stretch", "fill-available"), N, j, $).replace(":fill-available", ":stretch") : E.replace(O, "-webkit-" + O) + E.replace(O, "-moz-" + O.replace("fill-", "")) + E;
        break;
      case 962:
        if (E = "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E, j + $ === 211 && E.charCodeAt(13) === 105 && 0 < E.indexOf("transform", 10)) return E.substring(0, E.indexOf(";", 27) + 1).replace(X, "$1-webkit-$2") + E;
    }
    return E;
  }
  function m(z, N) {
    var j = z.indexOf(N === 1 ? ":" : "{"), $ = z.substring(0, N !== 3 ? j : 10);
    return j = z.substring(j + 1, z.length - 1), Le(N !== 2 ? $ : $.replace(He, "$1"), j, N);
  }
  function k(z, N) {
    var j = p(N, N.charCodeAt(0), N.charCodeAt(1), N.charCodeAt(2));
    return j !== N + ";" ? j.replace(he, " or ($1)").substring(4) : "(" + N + ")";
  }
  function T(z, N, j, $, E, W, O, ue, ne, te) {
    for (var Z = 0, ce = N, me; Z < De; ++Z)
      switch (me = Ue[Z].call(L, z, ce, j, $, E, W, O, ue, ne, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = me;
      }
    if (ce !== N) return ce;
  }
  function x(z) {
    switch (z) {
      case void 0:
      case null:
        De = Ue.length = 0;
        break;
      default:
        if (typeof z == "function") Ue[De++] = z;
        else if (typeof z == "object") for (var N = 0, j = z.length; N < j; ++N)
          x(z[N]);
        else Ke = !!z | 0;
    }
    return x;
  }
  function v(z) {
    return z = z.prefix, z !== void 0 && (Le = null, z ? typeof z != "function" ? Ne = 1 : (Ne = 2, Le = z) : Ne = 0), v;
  }
  function L(z, N) {
    var j = z;
    if (33 > j.charCodeAt(0) && (j = j.trim()), Ye = j, j = [Ye], 0 < De) {
      var $ = T(-1, N, j, j, be, Ee, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (N = $);
    }
    var E = a(nt, j, N, 0, 0);
    return 0 < De && ($ = T(-2, E, j, j, be, Ee, E.length, 0, 0, 0), $ !== void 0 && (E = $)), Ye = "", ze = 0, Ee = be = 1, E;
  }
  var C = /^\0+/g, Y = /[\0\r\f]/g, re = /: */g, D = /zoo|gra/, X = /([,: ])(transform)/g, M = /,\r+?/g, U = /([\t\r\n ])*\f?&/g, V = /@(k\w+)\s*(\S*)\s*/, K = /::(place)/g, G = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, de = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, Be = /-self|flex-/g, He = /[^]*?(:[rp][el]a[\w-]+)[^]*/, We = /stretch|:\s*\w+\-(?:conte|avail)/, rt = /([^-])(image-set\()/, Ee = 1, be = 1, ze = 0, Ne = 1, nt = [], Ue = [], De = 0, Le = null, Ke = 0, Ye = "";
  return L.use = x, L.set = v, o !== void 0 && v(o), L;
}
var sa = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function la(o) {
  var a = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return a[l] === void 0 && (a[l] = o(l)), a[l];
  };
}
var ua = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Co = /* @__PURE__ */ la(
  function(o) {
    return ua.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Un = Bo(), ca = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, fa = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, pa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vn = {};
Vn[Un.ForwardRef] = pa;
Vn[Un.Memo] = qo;
function Ao(o) {
  return Un.isMemo(o) ? qo : Vn[o.$$typeof] || ca;
}
var da = Object.defineProperty, ha = Object.getOwnPropertyNames, Ro = Object.getOwnPropertySymbols, ma = Object.getOwnPropertyDescriptor, ga = Object.getPrototypeOf, Oo = Object.prototype;
function Yo(o, a, l) {
  if (typeof a != "string") {
    if (Oo) {
      var f = ga(a);
      f && f !== Oo && Yo(o, f, l);
    }
    var p = ha(a);
    Ro && (p = p.concat(Ro(a)));
    for (var m = Ao(o), k = Ao(a), T = 0; T < p.length; ++T) {
      var x = p[T];
      if (!fa[x] && !(l && l[x]) && !(k && k[x]) && !(m && m[x])) {
        var v = ma(a, x);
        try {
          da(o, x, v);
        } catch {
        }
      }
    }
  }
  return o;
}
var ya = Yo;
const va = /* @__PURE__ */ jn(ya);
var ke = { env: { NODE_ENV: "production" } };
function Dt() {
  return (Dt = Object.assign || function(o) {
    for (var a = 1; a < arguments.length; a++) {
      var l = arguments[a];
      for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (o[f] = l[f]);
    }
    return o;
  }).apply(this, arguments);
}
var Po = function(o, a) {
  for (var l = [o[0]], f = 0, p = a.length; f < p; f += 1) l.push(a[f], o[f + 1]);
  return l;
}, Pn = function(o) {
  return o !== null && typeof o == "object" && (o.toString ? o.toString() : Object.prototype.toString.call(o)) === "[object Object]" && !Hn.typeOf(o);
}, on = Object.freeze([]), qt = Object.freeze({});
function Nr(o) {
  return typeof o == "function";
}
function Nn(o) {
  return ke.env.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Wn(o) {
  return o && typeof o.styledComponentId == "string";
}
var hr = typeof ke < "u" && ke.env !== void 0 && (ke.env.REACT_APP_SC_ATTR || ke.env.SC_ATTR) || "data-styled", Gn = typeof window < "u" && "HTMLElement" in window, Sa = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ke < "u" && ke.env !== void 0 && (ke.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ke.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ke.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ke.env.REACT_APP_SC_DISABLE_SPEEDY : ke.env.SC_DISABLE_SPEEDY !== void 0 && ke.env.SC_DISABLE_SPEEDY !== "" ? ke.env.SC_DISABLE_SPEEDY !== "false" && ke.env.SC_DISABLE_SPEEDY : ke.env.NODE_ENV !== "production")), wa = ke.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function xa() {
  for (var o = arguments.length <= 0 ? void 0 : arguments[0], a = [], l = 1, f = arguments.length; l < f; l += 1) a.push(l < 0 || arguments.length <= l ? void 0 : arguments[l]);
  return a.forEach(function(p) {
    o = o.replace(/%[a-z]/, p);
  }), o;
}
function yr(o) {
  for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++) l[f - 1] = arguments[f];
  throw ke.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + o + " for more information." + (l.length > 0 ? " Args: " + l.join(", ") : "")) : new Error(xa.apply(void 0, [wa[o]].concat(l)).trim());
}
var ka = function() {
  function o(l) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = l;
  }
  var a = o.prototype;
  return a.indexOfGroup = function(l) {
    for (var f = 0, p = 0; p < l; p++) f += this.groupSizes[p];
    return f;
  }, a.insertRules = function(l, f) {
    if (l >= this.groupSizes.length) {
      for (var p = this.groupSizes, m = p.length, k = m; l >= k; ) (k <<= 1) < 0 && yr(16, "" + l);
      this.groupSizes = new Uint32Array(k), this.groupSizes.set(p), this.length = k;
      for (var T = m; T < k; T++) this.groupSizes[T] = 0;
    }
    for (var x = this.indexOfGroup(l + 1), v = 0, L = f.length; v < L; v++) this.tag.insertRule(x, f[v]) && (this.groupSizes[l]++, x++);
  }, a.clearGroup = function(l) {
    if (l < this.length) {
      var f = this.groupSizes[l], p = this.indexOfGroup(l), m = p + f;
      this.groupSizes[l] = 0;
      for (var k = p; k < m; k++) this.tag.deleteRule(p);
    }
  }, a.getGroup = function(l) {
    var f = "";
    if (l >= this.length || this.groupSizes[l] === 0) return f;
    for (var p = this.groupSizes[l], m = this.indexOfGroup(l), k = m + p, T = m; T < k; T++) f += this.tag.getRule(T) + `/*!sc*/
`;
    return f;
  }, o;
}(), rn = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), Or = 1, Kr = function(o) {
  if (rn.has(o)) return rn.get(o);
  for (; an.has(Or); ) Or++;
  var a = Or++;
  return ke.env.NODE_ENV !== "production" && ((0 | a) < 0 || a > 1 << 30) && yr(16, "" + a), rn.set(o, a), an.set(a, o), a;
}, Ea = function(o) {
  return an.get(o);
}, Ta = function(o, a) {
  a >= Or && (Or = a + 1), rn.set(o, a), an.set(a, o);
}, _a = "style[" + hr + '][data-styled-version="5.3.11"]', ba = new RegExp("^" + hr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ca = function(o, a, l) {
  for (var f, p = l.split(","), m = 0, k = p.length; m < k; m++) (f = p[m]) && o.registerName(a, f);
}, Aa = function(o, a) {
  for (var l = (a.textContent || "").split(`/*!sc*/
`), f = [], p = 0, m = l.length; p < m; p++) {
    var k = l[p].trim();
    if (k) {
      var T = k.match(ba);
      if (T) {
        var x = 0 | parseInt(T[1], 10), v = T[2];
        x !== 0 && (Ta(v, x), Ca(o, v, T[3]), o.getTag().insertRules(x, f)), f.length = 0;
      } else f.push(k);
    }
  }
}, Ra = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Xo = function(o) {
  var a = document.head, l = o || a, f = document.createElement("style"), p = function(T) {
    for (var x = T.childNodes, v = x.length; v >= 0; v--) {
      var L = x[v];
      if (L && L.nodeType === 1 && L.hasAttribute(hr)) return L;
    }
  }(l), m = p !== void 0 ? p.nextSibling : null;
  f.setAttribute(hr, "active"), f.setAttribute("data-styled-version", "5.3.11");
  var k = Ra();
  return k && f.setAttribute("nonce", k), l.insertBefore(f, m), f;
}, Oa = function() {
  function o(l) {
    var f = this.element = Xo(l);
    f.appendChild(document.createTextNode("")), this.sheet = function(p) {
      if (p.sheet) return p.sheet;
      for (var m = document.styleSheets, k = 0, T = m.length; k < T; k++) {
        var x = m[k];
        if (x.ownerNode === p) return x;
      }
      yr(17);
    }(f), this.length = 0;
  }
  var a = o.prototype;
  return a.insertRule = function(l, f) {
    try {
      return this.sheet.insertRule(f, l), this.length++, !0;
    } catch {
      return !1;
    }
  }, a.deleteRule = function(l) {
    this.sheet.deleteRule(l), this.length--;
  }, a.getRule = function(l) {
    var f = this.sheet.cssRules[l];
    return f !== void 0 && typeof f.cssText == "string" ? f.cssText : "";
  }, o;
}(), Pa = function() {
  function o(l) {
    var f = this.element = Xo(l);
    this.nodes = f.childNodes, this.length = 0;
  }
  var a = o.prototype;
  return a.insertRule = function(l, f) {
    if (l <= this.length && l >= 0) {
      var p = document.createTextNode(f), m = this.nodes[l];
      return this.element.insertBefore(p, m || null), this.length++, !0;
    }
    return !1;
  }, a.deleteRule = function(l) {
    this.element.removeChild(this.nodes[l]), this.length--;
  }, a.getRule = function(l) {
    return l < this.length ? this.nodes[l].textContent : "";
  }, o;
}(), Na = function() {
  function o(l) {
    this.rules = [], this.length = 0;
  }
  var a = o.prototype;
  return a.insertRule = function(l, f) {
    return l <= this.length && (this.rules.splice(l, 0, f), this.length++, !0);
  }, a.deleteRule = function(l) {
    this.rules.splice(l, 1), this.length--;
  }, a.getRule = function(l) {
    return l < this.length ? this.rules[l] : "";
  }, o;
}(), No = Gn, Ia = { isServer: !Gn, useCSSOMInjection: !Sa }, Zo = function() {
  function o(l, f, p) {
    l === void 0 && (l = qt), f === void 0 && (f = {}), this.options = Dt({}, Ia, {}, l), this.gs = f, this.names = new Map(p), this.server = !!l.isServer, !this.server && Gn && No && (No = !1, function(m) {
      for (var k = document.querySelectorAll(_a), T = 0, x = k.length; T < x; T++) {
        var v = k[T];
        v && v.getAttribute(hr) !== "active" && (Aa(m, v), v.parentNode && v.parentNode.removeChild(v));
      }
    }(this));
  }
  o.registerId = function(l) {
    return Kr(l);
  };
  var a = o.prototype;
  return a.reconstructWithOptions = function(l, f) {
    return f === void 0 && (f = !0), new o(Dt({}, this.options, {}, l), this.gs, f && this.names || void 0);
  }, a.allocateGSInstance = function(l) {
    return this.gs[l] = (this.gs[l] || 0) + 1;
  }, a.getTag = function() {
    return this.tag || (this.tag = (p = (f = this.options).isServer, m = f.useCSSOMInjection, k = f.target, l = p ? new Na(k) : m ? new Oa(k) : new Pa(k), new ka(l)));
    var l, f, p, m, k;
  }, a.hasNameForId = function(l, f) {
    return this.names.has(l) && this.names.get(l).has(f);
  }, a.registerName = function(l, f) {
    if (Kr(l), this.names.has(l)) this.names.get(l).add(f);
    else {
      var p = /* @__PURE__ */ new Set();
      p.add(f), this.names.set(l, p);
    }
  }, a.insertRules = function(l, f, p) {
    this.registerName(l, f), this.getTag().insertRules(Kr(l), p);
  }, a.clearNames = function(l) {
    this.names.has(l) && this.names.get(l).clear();
  }, a.clearRules = function(l) {
    this.getTag().clearGroup(Kr(l)), this.clearNames(l);
  }, a.clearTag = function() {
    this.tag = void 0;
  }, a.toString = function() {
    return function(l) {
      for (var f = l.getTag(), p = f.length, m = "", k = 0; k < p; k++) {
        var T = Ea(k);
        if (T !== void 0) {
          var x = l.names.get(T), v = f.getGroup(k);
          if (x && v && x.size) {
            var L = hr + ".g" + k + '[id="' + T + '"]', C = "";
            x !== void 0 && x.forEach(function(Y) {
              Y.length > 0 && (C += Y + ",");
            }), m += "" + v + L + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return m;
    }(this);
  }, o;
}(), Fa = /(a)(d)/gi, Io = function(o) {
  return String.fromCharCode(o + (o > 25 ? 39 : 97));
};
function In(o) {
  var a, l = "";
  for (a = Math.abs(o); a > 52; a = a / 52 | 0) l = Io(a % 52) + l;
  return (Io(a % 52) + l).replace(Fa, "$1-$2");
}
var lr = function(o, a) {
  for (var l = a.length; l; ) o = 33 * o ^ a.charCodeAt(--l);
  return o;
}, Ko = function(o) {
  return lr(5381, o);
};
function Ma(o) {
  for (var a = 0; a < o.length; a += 1) {
    var l = o[a];
    if (Nr(l) && !Wn(l)) return !1;
  }
  return !0;
}
var Da = Ko("5.3.11"), La = function() {
  function o(a, l, f) {
    this.rules = a, this.staticRulesId = "", this.isStatic = ke.env.NODE_ENV === "production" && (f === void 0 || f.isStatic) && Ma(a), this.componentId = l, this.baseHash = lr(Da, l), this.baseStyle = f, Zo.registerId(l);
  }
  return o.prototype.generateAndInjectStyles = function(a, l, f) {
    var p = this.componentId, m = [];
    if (this.baseStyle && m.push(this.baseStyle.generateAndInjectStyles(a, l, f)), this.isStatic && !f.hash) if (this.staticRulesId && l.hasNameForId(p, this.staticRulesId)) m.push(this.staticRulesId);
    else {
      var k = mr(this.rules, a, l, f).join(""), T = In(lr(this.baseHash, k) >>> 0);
      if (!l.hasNameForId(p, T)) {
        var x = f(k, "." + T, void 0, p);
        l.insertRules(p, T, x);
      }
      m.push(T), this.staticRulesId = T;
    }
    else {
      for (var v = this.rules.length, L = lr(this.baseHash, f.hash), C = "", Y = 0; Y < v; Y++) {
        var re = this.rules[Y];
        if (typeof re == "string") C += re, ke.env.NODE_ENV !== "production" && (L = lr(L, re + Y));
        else if (re) {
          var D = mr(re, a, l, f), X = Array.isArray(D) ? D.join("") : D;
          L = lr(L, X + Y), C += X;
        }
      }
      if (C) {
        var M = In(L >>> 0);
        if (!l.hasNameForId(p, M)) {
          var U = f(C, "." + M, void 0, p);
          l.insertRules(p, M, U);
        }
        m.push(M);
      }
    }
    return m.join(" ");
  }, o;
}(), ja = /^\s*\/\/.*$/gm, za = [":", "[", ".", "#"];
function $a(o) {
  var a, l, f, p, m = qt, k = m.options, T = k === void 0 ? qt : k, x = m.plugins, v = x === void 0 ? on : x, L = new aa(T), C = [], Y = /* @__PURE__ */ function(X) {
    function M(U) {
      if (U) try {
        X(U + "}");
      } catch {
      }
    }
    return function(U, V, K, G, R, de, he, Be, He, We) {
      switch (U) {
        case 1:
          if (He === 0 && V.charCodeAt(0) === 64) return X(V + ";"), "";
          break;
        case 2:
          if (Be === 0) return V + "/*|*/";
          break;
        case 3:
          switch (Be) {
            case 102:
            case 112:
              return X(K[0] + V), "";
            default:
              return V + (We === 0 ? "/*|*/" : "");
          }
        case -2:
          V.split("/*|*/}").forEach(M);
      }
    };
  }(function(X) {
    C.push(X);
  }), re = function(X, M, U) {
    return M === 0 && za.indexOf(U[l.length]) !== -1 || U.match(p) ? X : "." + a;
  };
  function D(X, M, U, V) {
    V === void 0 && (V = "&");
    var K = X.replace(ja, ""), G = M && U ? U + " " + M + " { " + K + " }" : K;
    return a = V, l = M, f = new RegExp("\\" + l + "\\b", "g"), p = new RegExp("(\\" + l + "\\b){2,}"), L(U || !M ? "" : M, G);
  }
  return L.use([].concat(v, [function(X, M, U) {
    X === 2 && U.length && U[0].lastIndexOf(l) > 0 && (U[0] = U[0].replace(f, re));
  }, Y, function(X) {
    if (X === -2) {
      var M = C;
      return C = [], M;
    }
  }])), D.hash = v.length ? v.reduce(function(X, M) {
    return M.name || yr(15), lr(X, M.name);
  }, 5381).toString() : "", D;
}
var Jo = Lt.createContext();
Jo.Consumer;
var Qo = Lt.createContext(), Ba = (Qo.Consumer, new Zo()), Fn = $a();
function Ha() {
  return Ln(Jo) || Ba;
}
function Ua() {
  return Ln(Qo) || Fn;
}
var Va = function() {
  function o(a, l) {
    var f = this;
    this.inject = function(p, m) {
      m === void 0 && (m = Fn);
      var k = f.name + m.hash;
      p.hasNameForId(f.id, k) || p.insertRules(f.id, k, m(f.rules, k, "@keyframes"));
    }, this.toString = function() {
      return yr(12, String(f.name));
    }, this.name = a, this.id = "sc-keyframes-" + a, this.rules = l;
  }
  return o.prototype.getName = function(a) {
    return a === void 0 && (a = Fn), this.name + a.hash;
  }, o;
}(), Wa = /([A-Z])/, Ga = /([A-Z])/g, qa = /^ms-/, Ya = function(o) {
  return "-" + o.toLowerCase();
};
function Fo(o) {
  return Wa.test(o) ? o.replace(Ga, Ya).replace(qa, "-ms-") : o;
}
var Mo = function(o) {
  return o == null || o === !1 || o === "";
};
function mr(o, a, l, f) {
  if (Array.isArray(o)) {
    for (var p, m = [], k = 0, T = o.length; k < T; k += 1) (p = mr(o[k], a, l, f)) !== "" && (Array.isArray(p) ? m.push.apply(m, p) : m.push(p));
    return m;
  }
  if (Mo(o)) return "";
  if (Wn(o)) return "." + o.styledComponentId;
  if (Nr(o)) {
    if (typeof (v = o) != "function" || v.prototype && v.prototype.isReactComponent || !a) return o;
    var x = o(a);
    return ke.env.NODE_ENV !== "production" && Hn.isElement(x) && console.warn(Nn(o) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), mr(x, a, l, f);
  }
  var v;
  return o instanceof Va ? l ? (o.inject(l, f), o.getName(f)) : o : Pn(o) ? function L(C, Y) {
    var re, D, X = [];
    for (var M in C) C.hasOwnProperty(M) && !Mo(C[M]) && (Array.isArray(C[M]) && C[M].isCss || Nr(C[M]) ? X.push(Fo(M) + ":", C[M], ";") : Pn(C[M]) ? X.push.apply(X, L(C[M], M)) : X.push(Fo(M) + ": " + (re = M, (D = C[M]) == null || typeof D == "boolean" || D === "" ? "" : typeof D != "number" || D === 0 || re in sa || re.startsWith("--") ? String(D).trim() : D + "px") + ";"));
    return Y ? [Y + " {"].concat(X, ["}"]) : X;
  }(o) : o.toString();
}
var Do = function(o) {
  return Array.isArray(o) && (o.isCss = !0), o;
};
function Xa(o) {
  for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++) l[f - 1] = arguments[f];
  return Nr(o) || Pn(o) ? Do(mr(Po(on, [o].concat(l)))) : l.length === 0 && o.length === 1 && typeof o[0] == "string" ? o : Do(mr(Po(o, l)));
}
var Lo = /invalid hook call/i, Jr = /* @__PURE__ */ new Set(), Za = function(o, a) {
  if (ke.env.NODE_ENV !== "production") {
    var l = "The component " + o + (a ? ' with the id of "' + a + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, f = console.error;
    try {
      var p = !0;
      console.error = function(m) {
        if (Lo.test(m)) p = !1, Jr.delete(l);
        else {
          for (var k = arguments.length, T = new Array(k > 1 ? k - 1 : 0), x = 1; x < k; x++) T[x - 1] = arguments[x];
          f.apply(void 0, [m].concat(T));
        }
      }, mi(), p && !Jr.has(l) && (console.warn(l), Jr.add(l));
    } catch (m) {
      Lo.test(m.message) && Jr.delete(l);
    } finally {
      console.error = f;
    }
  }
}, Ka = function(o, a, l) {
  return l === void 0 && (l = qt), o.theme !== l.theme && o.theme || a || l.theme;
}, Ja = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Qa = /(^-|-$)/g;
function bn(o) {
  return o.replace(Ja, "-").replace(Qa, "");
}
var es = function(o) {
  return In(Ko(o) >>> 0);
};
function Qr(o) {
  return typeof o == "string" && (ke.env.NODE_ENV === "production" || o.charAt(0) === o.charAt(0).toLowerCase());
}
var Mn = function(o) {
  return typeof o == "function" || typeof o == "object" && o !== null && !Array.isArray(o);
}, ts = function(o) {
  return o !== "__proto__" && o !== "constructor" && o !== "prototype";
};
function rs(o, a, l) {
  var f = o[l];
  Mn(a) && Mn(f) ? ei(f, a) : o[l] = a;
}
function ei(o) {
  for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++) l[f - 1] = arguments[f];
  for (var p = 0, m = l; p < m.length; p++) {
    var k = m[p];
    if (Mn(k)) for (var T in k) ts(T) && rs(o, k[T], T);
  }
  return o;
}
var ti = Lt.createContext();
ti.Consumer;
var Cn = {};
function ri(o, a, l) {
  var f = Wn(o), p = !Qr(o), m = a.attrs, k = m === void 0 ? on : m, T = a.componentId, x = T === void 0 ? function(V, K) {
    var G = typeof V != "string" ? "sc" : bn(V);
    Cn[G] = (Cn[G] || 0) + 1;
    var R = G + "-" + es("5.3.11" + G + Cn[G]);
    return K ? K + "-" + R : R;
  }(a.displayName, a.parentComponentId) : T, v = a.displayName, L = v === void 0 ? function(V) {
    return Qr(V) ? "styled." + V : "Styled(" + Nn(V) + ")";
  }(o) : v, C = a.displayName && a.componentId ? bn(a.displayName) + "-" + a.componentId : a.componentId || x, Y = f && o.attrs ? Array.prototype.concat(o.attrs, k).filter(Boolean) : k, re = a.shouldForwardProp;
  f && o.shouldForwardProp && (re = a.shouldForwardProp ? function(V, K, G) {
    return o.shouldForwardProp(V, K, G) && a.shouldForwardProp(V, K, G);
  } : o.shouldForwardProp);
  var D, X = new La(l, C, f ? o.componentStyle : void 0), M = X.isStatic && k.length === 0, U = function(V, K) {
    return function(G, R, de, he) {
      var Be = G.attrs, He = G.componentStyle, We = G.defaultProps, rt = G.foldedComponentIds, Ee = G.shouldForwardProp, be = G.styledComponentId, ze = G.target, Ne = function($, E, W) {
        $ === void 0 && ($ = qt);
        var O = Dt({}, E, { theme: $ }), ue = {};
        return W.forEach(function(ne) {
          var te, Z, ce, me = ne;
          for (te in Nr(me) && (me = me(O)), me) O[te] = ue[te] = te === "className" ? (Z = ue[te], ce = me[te], Z && ce ? Z + " " + ce : Z || ce) : me[te];
        }), [O, ue];
      }(Ka(R, Ln(ti), We) || qt, R, Be), nt = Ne[0], Ue = Ne[1], De = function($, E, W, O) {
        var ue = Ha(), ne = Ua(), te = E ? $.generateAndInjectStyles(qt, ue, ne) : $.generateAndInjectStyles(W, ue, ne);
        return ke.env.NODE_ENV !== "production" && !E && O && O(te), te;
      }(He, he, nt, ke.env.NODE_ENV !== "production" ? G.warnTooManyClasses : void 0), Le = de, Ke = Ue.$as || R.$as || Ue.as || R.as || ze, Ye = Qr(Ke), z = Ue !== R ? Dt({}, R, {}, Ue) : R, N = {};
      for (var j in z) j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? N.as = z[j] : (Ee ? Ee(j, Co, Ke) : !Ye || Co(j)) && (N[j] = z[j]));
      return R.style && Ue.style !== R.style && (N.style = Dt({}, R.style, {}, Ue.style)), N.className = Array.prototype.concat(rt, be, De !== be ? De : null, R.className, Ue.className).filter(Boolean).join(" "), N.ref = Le, gi(Ke, N);
    }(D, V, K, M);
  };
  return U.displayName = L, (D = Lt.forwardRef(U)).attrs = Y, D.componentStyle = X, D.displayName = L, D.shouldForwardProp = re, D.foldedComponentIds = f ? Array.prototype.concat(o.foldedComponentIds, o.styledComponentId) : on, D.styledComponentId = C, D.target = f ? o.target : o, D.withComponent = function(V) {
    var K = a.componentId, G = function(de, he) {
      if (de == null) return {};
      var Be, He, We = {}, rt = Object.keys(de);
      for (He = 0; He < rt.length; He++) Be = rt[He], he.indexOf(Be) >= 0 || (We[Be] = de[Be]);
      return We;
    }(a, ["componentId"]), R = K && K + "-" + (Qr(V) ? V : bn(Nn(V)));
    return ri(V, Dt({}, G, { attrs: Y, componentId: R }), l);
  }, Object.defineProperty(D, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(V) {
    this._foldedDefaultProps = f ? ei({}, o.defaultProps, V) : V;
  } }), ke.env.NODE_ENV !== "production" && (Za(L, C), D.warnTooManyClasses = /* @__PURE__ */ function(V, K) {
    var G = {}, R = !1;
    return function(de) {
      if (!R && (G[de] = !0, Object.keys(G).length >= 200)) {
        var he = K ? ' with the id of "' + K + '"' : "";
        console.warn("Over 200 classes were generated for component " + V + he + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), R = !0, G = {};
      }
    };
  }(L, C)), Object.defineProperty(D, "toString", { value: function() {
    return "." + D.styledComponentId;
  } }), p && va(D, o, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), D;
}
var Dn = function(o) {
  return function a(l, f, p) {
    if (p === void 0 && (p = qt), !Hn.isValidElementType(f)) return yr(1, String(f));
    var m = function() {
      return l(f, p, Xa.apply(void 0, arguments));
    };
    return m.withConfig = function(k) {
      return a(l, f, Dt({}, p, {}, k));
    }, m.attrs = function(k) {
      return a(l, f, Dt({}, p, { attrs: Array.prototype.concat(p.attrs, k).filter(Boolean) }));
    }, m;
  }(ri, o);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(o) {
  Dn[o] = Dn(o);
});
ke.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ke.env.NODE_ENV !== "production" && ke.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const ns = Dn.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, os = (o) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(o), is = (o) => !o.startsWith("https://") && !o.startsWith("http://") && os(o) ? `mailto:${o}` : o, as = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ni = ({
  type: o,
  width: a,
  horizontal: l,
  image: f,
  imageAltText: p,
  title: m,
  icon: k,
  body: T,
  eventFormat: x,
  eventLocation: v,
  eventTime: L,
  buttons: C,
  linkLabel: Y,
  linkUrl: re,
  tags: D,
  showBorders: X,
  cardLink: M
}) => /* @__PURE__ */ H.jsx(
  qn,
  {
    type: o,
    width: a,
    horizontal: l,
    image: f,
    imageAltText: p,
    title: m,
    icon: k,
    body: T,
    eventFormat: x,
    eventLocation: v,
    eventTime: L,
    buttons: C,
    linkLabel: Y,
    linkUrl: re,
    tags: D,
    showBorders: X,
    cardLink: M
  }
);
ni.propTypes = {
  /**
   * Type of card
   */
  type: d.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: d.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: d.bool,
  /**
   * Card title
   */
  title: d.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: d.arrayOf(d.string),
  /**
   * Card body content
   */
  body: d.string,
  /**
   * Event info format
   */
  eventFormat: d.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: d.string,
  /**
   * Event start time
   */
  eventTime: d.string,
  /**
   * Card header image
   */
  image: d.string,
  /**
   * Card header image alt text
   */
  imageAltText: d.string,
  /**
   * Buttons
   */
  buttons: d.arrayOf(
    d.shape({
      ariaLabel: d.string,
      color: d.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: d.arrayOf(d.string),
      href: d.string,
      label: d.string,
      onClick: d.func,
      size: d.oneOf(["default", "small", "xsmall"]),
      target: d.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: d.string,
  linkUrl: d.string,
  /**
   * Tags
   */
  tags: d.arrayOf(
    d.shape({
      ariaLabel: d.string,
      color: d.oneOf(["white", "gray", "dark"]),
      href: d.string,
      label: d.string,
      onClick: d.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: d.bool,
  /**
   * Card link
   */
  cardLink: d.string
};
ni.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: void 0,
  eventFormat: "stack",
  eventTime: void 0,
  eventLocation: void 0,
  icon: void 0,
  image: void 0,
  imageAltText: void 0,
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const qn = ({
  type: o,
  width: a,
  horizontal: l,
  image: f,
  imageAltText: p,
  title: m,
  icon: k,
  body: T,
  eventFormat: x,
  eventLocation: v,
  eventTime: L,
  buttons: C,
  linkLabel: Y,
  linkUrl: re,
  tags: D,
  showBorders: X,
  cardLink: M
}) => {
  const U = Pr("card", "cards-components", {
    "card-degree": o === "degree",
    "card-event": o === "event",
    "card-story": o === "story",
    [`w-${a.replace("%", "")}`]: a !== "100%",
    "card-horizontal": l,
    borderless: !X
  });
  return /* @__PURE__ */ H.jsx(H.Fragment, { children: /* @__PURE__ */ H.jsxs(ns, { className: U, "data-testid": "card-container", children: [
    !!f && /* @__PURE__ */ H.jsx(
      Go,
      {
        src: f,
        alt: p,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: M,
        title: m
      }
    ),
    !f && k && /* @__PURE__ */ H.jsx(
      "i",
      {
        className: `${k == null ? void 0 : k[0]} fa-${k == null ? void 0 : k[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    l ? /* @__PURE__ */ H.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ H.jsx(
      sn,
      {
        type: o,
        body: T,
        eventFormat: x,
        eventLocation: v,
        eventTime: L,
        title: m,
        buttons: C,
        linkLabel: Y,
        linkUrl: re,
        tags: D,
        cardLink: M
      }
    ) }) : /* @__PURE__ */ H.jsx(
      sn,
      {
        type: o,
        body: T,
        eventFormat: x,
        eventLocation: v,
        eventTime: L,
        title: m,
        buttons: C,
        linkLabel: Y,
        linkUrl: re,
        tags: D,
        cardLink: M
      }
    )
  ] }) });
};
qn.propTypes = {
  type: d.oneOf(["default", "degree", "event", "news", "story"]),
  width: d.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: d.bool,
  title: d.string.isRequired,
  icon: d.arrayOf(d.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: d.string,
  eventFormat: d.oneOf(["stack", "inline"]),
  eventLocation: d.string,
  eventTime: d.string,
  image: d.string,
  imageAltText: d.string,
  buttons: d.arrayOf(
    d.shape({
      ariaLabel: d.string,
      color: d.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: d.arrayOf(d.string),
      href: d.string,
      label: d.string,
      onClick: d.func,
      size: d.oneOf(["default", "small", "xsmall"]),
      target: d.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: d.string,
  linkUrl: d.string,
  tags: d.arrayOf(
    d.shape({
      ariaLabel: d.string,
      color: d.oneOf(["white", "gray", "dark"]),
      href: d.string,
      label: d.string,
      onClick: d.func
    })
  ),
  showBorders: d.bool,
  cardLink: d.string
};
qn.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: void 0,
  image: "",
  imageAltText: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const sn = ({
  type: o,
  body: a,
  eventFormat: l,
  eventLocation: f,
  eventTime: p,
  title: m,
  buttons: k,
  linkLabel: T,
  linkUrl: x,
  tags: v,
  cardLink: L
}) => /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  !!m && /* @__PURE__ */ H.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ H.jsx("h3", { className: "card-title", children: L ? /* @__PURE__ */ H.jsx("a", { href: L, children: m }) : m }) }),
  !!a && /* @__PURE__ */ H.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: dr(a) }) }),
  o === "event" && (p || f) && /* @__PURE__ */ H.jsx(
    Yn,
    {
      eventFormat: l,
      eventTime: p,
      eventLocation: f
    }
  ),
  k && /* @__PURE__ */ H.jsx("div", { className: "card-buttons", children: k.map((C) => /* @__PURE__ */ H.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ H.jsx(
        $n,
        {
          ariaLabel: C.ariaLabel,
          color: C.color,
          icon: C.icon,
          href: C.href,
          label: C.label,
          onClick: C.onClick,
          size: C.size,
          target: C.target,
          cardTitle: m
        }
      )
    },
    `${C.label}-${C.href}`
  )) }),
  x && T && /* @__PURE__ */ H.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ H.jsx(
    zn,
    {
      gaData: {
        ...as,
        section: m,
        text: T
      },
      children: /* @__PURE__ */ H.jsx("a", { href: is(x), children: T })
    }
  ) }),
  v && /* @__PURE__ */ H.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: v.map((C) => (
    // @ts-ignore
    /* @__PURE__ */ H.jsx(
      Bn,
      {
        ariaLabel: C.ariaLabel,
        color: C.color,
        href: C.href,
        label: C.label,
        onClick: C.onClick,
        cardTitle: m
      },
      `${C.label}-${C.href}`
    )
  )) })
] });
sn.propTypes = {
  type: d.oneOf(["default", "degree", "event", "news", "story"]),
  body: d.string,
  eventFormat: d.oneOf(["stack", "inline"]),
  eventLocation: d.string,
  eventTime: d.string,
  title: d.string.isRequired,
  buttons: d.arrayOf(
    d.shape({
      ariaLabel: d.string,
      color: d.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: d.arrayOf(d.string),
      href: d.string,
      label: d.string,
      onClick: d.func,
      size: d.oneOf(["default", "small", "xsmall"]),
      target: d.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: d.string,
  linkUrl: d.string,
  tags: d.arrayOf(
    d.shape({
      ariaLabel: d.string,
      color: d.oneOf(["white", "gray", "dark"]),
      href: d.string,
      label: d.string,
      onClick: d.func
    })
  ),
  cardLink: d.string
};
sn.defaultProps = {
  type: "default",
  body: "",
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0
};
const Yn = ({ eventFormat: o, eventTime: a, eventLocation: l }) => o === "inline" ? /* @__PURE__ */ H.jsxs("div", { className: "card-event-details", children: [
  a && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: dr(a) })
  ] }),
  l && /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: dr(l)
      }
    )
  ] })
] }) : /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
  a && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ H.jsx("div", { dangerouslySetInnerHTML: dr(a) })
  ] }) }),
  l && /* @__PURE__ */ H.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ H.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ H.jsx("span", { children: /* @__PURE__ */ H.jsx(
      "div",
      {
        dangerouslySetInnerHTML: dr(l)
      }
    ) })
  ] }) })
] });
Yn.propTypes = {
  eventFormat: d.oneOf(["stack", "inline"]),
  eventLocation: d.string,
  eventTime: d.string
};
Yn.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
export {
  ni as Card
};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
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
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
