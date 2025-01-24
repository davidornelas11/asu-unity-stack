import He, { useId as dn, useRef as pn, useContext as Bt, createElement as mn } from "react";
function Wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $r = { exports: {} }, Ze = {};
var gr;
function hn() {
  if (gr) return Ze;
  gr = 1;
  var e = He, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, g) {
    var _, v = {}, k = null, M = null;
    g !== void 0 && (k = "" + g), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (M = f.ref);
    for (_ in f) n.call(f, _) && !s.hasOwnProperty(_) && (v[_] = f[_]);
    if (u && u.defaultProps) for (_ in f = u.defaultProps, f) v[_] === void 0 && (v[_] = f[_]);
    return { $$typeof: r, type: u, key: k, ref: M, props: v, _owner: i.current };
  }
  return Ze.Fragment = t, Ze.jsx = l, Ze.jsxs = l, Ze;
}
$r.exports = hn();
var b = $r.exports, zr = { exports: {} };
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var s = "", l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        u && (s = i(s, n(u)));
      }
      return s;
    }
    function n(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return t.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var l = "";
      for (var u in s)
        r.call(s, u) && s[u] && (l = i(l, u));
      return l;
    }
    function i(s, l) {
      return l ? s ? s + " " + l : s + l : s;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(zr);
var gn = zr.exports;
const Je = /* @__PURE__ */ Wt(gn);
var Ur = { exports: {} }, St = { exports: {} }, B = {};
var vr;
function vn() {
  if (vr) return B;
  vr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, k = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, N = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function P(p) {
    if (typeof p == "object" && p !== null) {
      var J = p.$$typeof;
      switch (J) {
        case r:
          switch (p = p.type, p) {
            case f:
            case g:
            case n:
            case s:
            case i:
            case v:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case _:
                case x:
                case M:
                case l:
                  return p;
                default:
                  return J;
              }
          }
        case t:
          return J;
      }
    }
  }
  function C(p) {
    return P(p) === g;
  }
  return B.AsyncMode = f, B.ConcurrentMode = g, B.ContextConsumer = u, B.ContextProvider = l, B.Element = r, B.ForwardRef = _, B.Fragment = n, B.Lazy = x, B.Memo = M, B.Portal = t, B.Profiler = s, B.StrictMode = i, B.Suspense = v, B.isAsyncMode = function(p) {
    return C(p) || P(p) === f;
  }, B.isConcurrentMode = C, B.isContextConsumer = function(p) {
    return P(p) === u;
  }, B.isContextProvider = function(p) {
    return P(p) === l;
  }, B.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, B.isForwardRef = function(p) {
    return P(p) === _;
  }, B.isFragment = function(p) {
    return P(p) === n;
  }, B.isLazy = function(p) {
    return P(p) === x;
  }, B.isMemo = function(p) {
    return P(p) === M;
  }, B.isPortal = function(p) {
    return P(p) === t;
  }, B.isProfiler = function(p) {
    return P(p) === s;
  }, B.isStrictMode = function(p) {
    return P(p) === i;
  }, B.isSuspense = function(p) {
    return P(p) === v;
  }, B.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === g || p === s || p === i || p === v || p === k || typeof p == "object" && p !== null && (p.$$typeof === x || p.$$typeof === M || p.$$typeof === l || p.$$typeof === u || p.$$typeof === _ || p.$$typeof === E || p.$$typeof === j || p.$$typeof === L || p.$$typeof === N);
  }, B.typeOf = P, B;
}
var yr;
function Hr() {
  return yr || (yr = 1, St.exports = vn()), St.exports;
}
var wt, br;
function yn() {
  if (br) return wt;
  br = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Et, _r;
function bn() {
  if (_r) return Et;
  _r = 1;
  var e = yn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Et = function() {
    function n(l, u, f, g, _, v) {
      if (v !== e) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, Et;
}
Ur.exports = bn()();
var _n = Ur.exports;
const a = /* @__PURE__ */ Wt(_n), Tn = (e) => (e || []).join(" ");
function Pe(e) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Pe(e);
}
function Pt(e, r) {
  return Pt = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Pt(e, r);
}
function An() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ut(e, r, t) {
  return An() ? ut = Reflect.construct : ut = function(i, s, l) {
    var u = [null];
    u.push.apply(u, s);
    var f = Function.bind.apply(i, u), g = new f();
    return l && Pt(g, l.prototype), g;
  }, ut.apply(null, arguments);
}
function Ae(e) {
  return Sn(e) || wn(e) || En(e) || On();
}
function Sn(e) {
  if (Array.isArray(e)) return Dt(e);
}
function wn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function En(e, r) {
  if (e) {
    if (typeof e == "string") return Dt(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Dt(e, r);
  }
}
function Dt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function On() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var xn = Object.hasOwnProperty, Tr = Object.setPrototypeOf, kn = Object.isFrozen, Cn = Object.getPrototypeOf, Rn = Object.getOwnPropertyDescriptor, le = Object.freeze, be = Object.seal, Nn = Object.create, Br = typeof Reflect < "u" && Reflect, pt = Br.apply, Mt = Br.construct;
pt || (pt = function(r, t, n) {
  return r.apply(t, n);
});
le || (le = function(r) {
  return r;
});
be || (be = function(r) {
  return r;
});
Mt || (Mt = function(r, t) {
  return ut(r, Ae(t));
});
var In = _e(Array.prototype.forEach), Ar = _e(Array.prototype.pop), Ke = _e(Array.prototype.push), ft = _e(String.prototype.toLowerCase), Ot = _e(String.prototype.toString), Sr = _e(String.prototype.match), Te = _e(String.prototype.replace), Ln = _e(String.prototype.indexOf), Pn = _e(String.prototype.trim), ae = _e(RegExp.prototype.test), xt = Dn(TypeError);
function _e(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return pt(e, r, n);
  };
}
function Dn(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Mt(e, t);
  };
}
function D(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : ft, Tr && Tr(e, null);
  for (var i = r.length; i--; ) {
    var s = r[i];
    if (typeof s == "string") {
      var l = t(s);
      l !== s && (kn(r) || (r[i] = l), s = l);
    }
    e[s] = !0;
  }
  return e;
}
function ze(e) {
  var r = Nn(null), t;
  for (t in e)
    pt(xn, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function ot(e, r) {
  for (; e !== null; ) {
    var t = Rn(e, r);
    if (t) {
      if (t.get)
        return _e(t.get);
      if (typeof t.value == "function")
        return _e(t.value);
    }
    e = Cn(e);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
var wr = le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), kt = le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ct = le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mn = le(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Rt = le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), jn = le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Er = le(["#text"]), Or = le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Nt = le(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xr = le(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), it = le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Fn = be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), $n = be(/<%[\w\W]*|[\w\W]*%>/gm), zn = be(/\${[\w\W]*}/gm), Un = be(/^data-[\-\w.\u00B7-\uFFFF]/), Hn = be(/^aria-[\-\w]+$/), Bn = be(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Wn = be(/^(?:\w+script|data):/i), Gn = be(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Vn = be(/^html$/i), Yn = be(/^[a-z][.\w]*(-[.\w]+)+$/i), qn = function() {
  return typeof window > "u" ? null : window;
}, Xn = function(r, t) {
  if (Pe(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, i = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(i) && (n = t.currentScript.getAttribute(i));
  var s = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(s, {
      createHTML: function(u) {
        return u;
      },
      createScriptURL: function(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function Wr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qn(), r = function(o) {
    return Wr(o);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, i = e.DocumentFragment, s = e.HTMLTemplateElement, l = e.Node, u = e.Element, f = e.NodeFilter, g = e.NamedNodeMap, _ = g === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : g, v = e.HTMLFormElement, k = e.DOMParser, M = e.trustedTypes, x = u.prototype, N = ot(x, "cloneNode"), E = ot(x, "nextSibling"), j = ot(x, "childNodes"), L = ot(x, "parentNode");
  if (typeof s == "function") {
    var P = n.createElement("template");
    P.content && P.content.ownerDocument && (n = P.content.ownerDocument);
  }
  var C = Xn(M, t), p = C ? C.createHTML("") : "", J = n, he = J.implementation, ce = J.createNodeIterator, ge = J.createDocumentFragment, Se = J.getElementsByTagName, Ie = t.importNode, oe = {};
  try {
    oe = ze(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var q = {};
  r.isSupported = typeof L == "function" && he && he.createHTMLDocument !== void 0 && oe !== 9;
  var ue = Fn, te = $n, Ee = zn, me = Un, fe = Hn, Me = Wn, Oe = Gn, je = Yn, A = Bn, h = null, T = D({}, [].concat(Ae(wr), Ae(kt), Ae(Ct), Ae(Rt), Ae(Er))), S = null, c = D({}, [].concat(Ae(Or), Ae(Nt), Ae(xr), Ae(it))), O = Object.seal(Object.create(null, {
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
  })), m = null, G = null, U = !0, $ = !0, I = !1, Q = !0, Z = !1, F = !0, Y = !1, z = !1, K = !1, ve = !1, X = !1, xe = !1, Le = !0, de = !1, R = "user-content-", V = !0, ke = !1, we = {}, se = null, tr = D({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), rr = null, nr = D({}, ["audio", "video", "img", "source", "image", "track"]), vt = null, ar = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tt = "http://www.w3.org/1998/Math/MathML", rt = "http://www.w3.org/2000/svg", Ce = "http://www.w3.org/1999/xhtml", Be = Ce, yt = !1, bt = null, an = D({}, [tt, rt, Ce], Ot), Fe, on = ["application/xhtml+xml", "text/html"], sn = "text/html", re, We = null, ln = n.createElement("form"), or = function(o) {
    return o instanceof RegExp || o instanceof Function;
  }, _t = function(o) {
    We && We === o || ((!o || Pe(o) !== "object") && (o = {}), o = ze(o), Fe = // eslint-disable-next-line unicorn/prefer-includes
    on.indexOf(o.PARSER_MEDIA_TYPE) === -1 ? Fe = sn : Fe = o.PARSER_MEDIA_TYPE, re = Fe === "application/xhtml+xml" ? Ot : ft, h = "ALLOWED_TAGS" in o ? D({}, o.ALLOWED_TAGS, re) : T, S = "ALLOWED_ATTR" in o ? D({}, o.ALLOWED_ATTR, re) : c, bt = "ALLOWED_NAMESPACES" in o ? D({}, o.ALLOWED_NAMESPACES, Ot) : an, vt = "ADD_URI_SAFE_ATTR" in o ? D(
      ze(ar),
      // eslint-disable-line indent
      o.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : ar, rr = "ADD_DATA_URI_TAGS" in o ? D(
      ze(nr),
      // eslint-disable-line indent
      o.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : nr, se = "FORBID_CONTENTS" in o ? D({}, o.FORBID_CONTENTS, re) : tr, m = "FORBID_TAGS" in o ? D({}, o.FORBID_TAGS, re) : {}, G = "FORBID_ATTR" in o ? D({}, o.FORBID_ATTR, re) : {}, we = "USE_PROFILES" in o ? o.USE_PROFILES : !1, U = o.ALLOW_ARIA_ATTR !== !1, $ = o.ALLOW_DATA_ATTR !== !1, I = o.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = o.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = o.SAFE_FOR_TEMPLATES || !1, F = o.SAFE_FOR_XML !== !1, Y = o.WHOLE_DOCUMENT || !1, ve = o.RETURN_DOM || !1, X = o.RETURN_DOM_FRAGMENT || !1, xe = o.RETURN_TRUSTED_TYPE || !1, K = o.FORCE_BODY || !1, Le = o.SANITIZE_DOM !== !1, de = o.SANITIZE_NAMED_PROPS || !1, V = o.KEEP_CONTENT !== !1, ke = o.IN_PLACE || !1, A = o.ALLOWED_URI_REGEXP || A, Be = o.NAMESPACE || Ce, O = o.CUSTOM_ELEMENT_HANDLING || {}, o.CUSTOM_ELEMENT_HANDLING && or(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (O.tagNameCheck = o.CUSTOM_ELEMENT_HANDLING.tagNameCheck), o.CUSTOM_ELEMENT_HANDLING && or(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (O.attributeNameCheck = o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), o.CUSTOM_ELEMENT_HANDLING && typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Z && ($ = !1), X && (ve = !0), we && (h = D({}, Ae(Er)), S = [], we.html === !0 && (D(h, wr), D(S, Or)), we.svg === !0 && (D(h, kt), D(S, Nt), D(S, it)), we.svgFilters === !0 && (D(h, Ct), D(S, Nt), D(S, it)), we.mathMl === !0 && (D(h, Rt), D(S, xr), D(S, it))), o.ADD_TAGS && (h === T && (h = ze(h)), D(h, o.ADD_TAGS, re)), o.ADD_ATTR && (S === c && (S = ze(S)), D(S, o.ADD_ATTR, re)), o.ADD_URI_SAFE_ATTR && D(vt, o.ADD_URI_SAFE_ATTR, re), o.FORBID_CONTENTS && (se === tr && (se = ze(se)), D(se, o.FORBID_CONTENTS, re)), V && (h["#text"] = !0), Y && D(h, ["html", "head", "body"]), h.table && (D(h, ["tbody"]), delete m.tbody), le && le(o), We = o);
  }, ir = D({}, ["mi", "mo", "mn", "ms", "mtext"]), sr = D({}, ["annotation-xml"]), cn = D({}, ["title", "style", "font", "a", "script"]), nt = D({}, kt);
  D(nt, Ct), D(nt, Mn);
  var Tt = D({}, Rt);
  D(Tt, jn);
  var un = function(o) {
    var d = L(o);
    (!d || !d.tagName) && (d = {
      namespaceURI: Be,
      tagName: "template"
    });
    var y = ft(o.tagName), H = ft(d.tagName);
    return bt[o.namespaceURI] ? o.namespaceURI === rt ? d.namespaceURI === Ce ? y === "svg" : d.namespaceURI === tt ? y === "svg" && (H === "annotation-xml" || ir[H]) : !!nt[y] : o.namespaceURI === tt ? d.namespaceURI === Ce ? y === "math" : d.namespaceURI === rt ? y === "math" && sr[H] : !!Tt[y] : o.namespaceURI === Ce ? d.namespaceURI === rt && !sr[H] || d.namespaceURI === tt && !ir[H] ? !1 : !Tt[y] && (cn[y] || !nt[y]) : !!(Fe === "application/xhtml+xml" && bt[o.namespaceURI]) : !1;
  }, ye = function(o) {
    Ke(r.removed, {
      element: o
    });
    try {
      o.parentNode.removeChild(o);
    } catch {
      try {
        o.outerHTML = p;
      } catch {
        o.remove();
      }
    }
  }, at = function(o, d) {
    try {
      Ke(r.removed, {
        attribute: d.getAttributeNode(o),
        from: d
      });
    } catch {
      Ke(r.removed, {
        attribute: null,
        from: d
      });
    }
    if (d.removeAttribute(o), o === "is" && !S[o])
      if (ve || X)
        try {
          ye(d);
        } catch {
        }
      else
        try {
          d.setAttribute(o, "");
        } catch {
        }
  }, lr = function(o) {
    var d, y;
    if (K)
      o = "<remove></remove>" + o;
    else {
      var H = Sr(o, /^[\r\n\t ]+/);
      y = H && H[0];
    }
    Fe === "application/xhtml+xml" && Be === Ce && (o = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + o + "</body></html>");
    var pe = C ? C.createHTML(o) : o;
    if (Be === Ce)
      try {
        d = new k().parseFromString(pe, Fe);
      } catch {
      }
    if (!d || !d.documentElement) {
      d = he.createDocument(Be, "template", null);
      try {
        d.documentElement.innerHTML = yt ? p : pe;
      } catch {
      }
    }
    var ie = d.body || d.documentElement;
    return o && y && ie.insertBefore(n.createTextNode(y), ie.childNodes[0] || null), Be === Ce ? Se.call(d, Y ? "html" : "body")[0] : Y ? d.documentElement : ie;
  }, cr = function(o) {
    return ce.call(
      o.ownerDocument || o,
      o,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ur = function(o) {
    return o instanceof v && (typeof o.nodeName != "string" || typeof o.textContent != "string" || typeof o.removeChild != "function" || !(o.attributes instanceof _) || typeof o.removeAttribute != "function" || typeof o.setAttribute != "function" || typeof o.namespaceURI != "string" || typeof o.insertBefore != "function" || typeof o.hasChildNodes != "function");
  }, Xe = function(o) {
    return Pe(l) === "object" ? o instanceof l : o && Pe(o) === "object" && typeof o.nodeType == "number" && typeof o.nodeName == "string";
  }, Re = function(o, d, y) {
    q[o] && In(q[o], function(H) {
      H.call(r, d, y, We);
    });
  }, fr = function(o) {
    var d;
    if (Re("beforeSanitizeElements", o, null), ur(o) || ae(/[\u0080-\uFFFF]/, o.nodeName))
      return ye(o), !0;
    var y = re(o.nodeName);
    if (Re("uponSanitizeElement", o, {
      tagName: y,
      allowedTags: h
    }), o.hasChildNodes() && !Xe(o.firstElementChild) && (!Xe(o.content) || !Xe(o.content.firstElementChild)) && ae(/<[/\w]/g, o.innerHTML) && ae(/<[/\w]/g, o.textContent) || y === "select" && ae(/<template/i, o.innerHTML) || o.nodeType === 7 || F && o.nodeType === 8 && ae(/<[/\w]/g, o.data))
      return ye(o), !0;
    if (!h[y] || m[y]) {
      if (!m[y] && pr(y) && (O.tagNameCheck instanceof RegExp && ae(O.tagNameCheck, y) || O.tagNameCheck instanceof Function && O.tagNameCheck(y)))
        return !1;
      if (V && !se[y]) {
        var H = L(o) || o.parentNode, pe = j(o) || o.childNodes;
        if (pe && H)
          for (var ie = pe.length, ne = ie - 1; ne >= 0; --ne) {
            var $e = N(pe[ne], !0);
            $e.__removalCount = (o.__removalCount || 0) + 1, H.insertBefore($e, E(o));
          }
      }
      return ye(o), !0;
    }
    return o instanceof u && !un(o) || (y === "noscript" || y === "noembed" || y === "noframes") && ae(/<\/no(script|embed|frames)/i, o.innerHTML) ? (ye(o), !0) : (Z && o.nodeType === 3 && (d = o.textContent, d = Te(d, ue, " "), d = Te(d, te, " "), d = Te(d, Ee, " "), o.textContent !== d && (Ke(r.removed, {
      element: o.cloneNode()
    }), o.textContent = d)), Re("afterSanitizeElements", o, null), !1);
  }, dr = function(o, d, y) {
    if (Le && (d === "id" || d === "name") && (y in n || y in ln))
      return !1;
    if (!($ && !G[d] && ae(me, d))) {
      if (!(U && ae(fe, d))) {
        if (!S[d] || G[d]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(pr(o) && (O.tagNameCheck instanceof RegExp && ae(O.tagNameCheck, o) || O.tagNameCheck instanceof Function && O.tagNameCheck(o)) && (O.attributeNameCheck instanceof RegExp && ae(O.attributeNameCheck, d) || O.attributeNameCheck instanceof Function && O.attributeNameCheck(d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            d === "is" && O.allowCustomizedBuiltInElements && (O.tagNameCheck instanceof RegExp && ae(O.tagNameCheck, y) || O.tagNameCheck instanceof Function && O.tagNameCheck(y)))
          ) return !1;
        } else if (!vt[d]) {
          if (!ae(A, Te(y, Oe, ""))) {
            if (!((d === "src" || d === "xlink:href" || d === "href") && o !== "script" && Ln(y, "data:") === 0 && rr[o])) {
              if (!(I && !ae(Me, Te(y, Oe, "")))) {
                if (y)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pr = function(o) {
    return o !== "annotation-xml" && Sr(o, je);
  }, mr = function(o) {
    var d, y, H, pe;
    Re("beforeSanitizeAttributes", o, null);
    var ie = o.attributes;
    if (ie) {
      var ne = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: S
      };
      for (pe = ie.length; pe--; ) {
        d = ie[pe];
        var $e = d, ee = $e.name, At = $e.namespaceURI;
        if (y = ee === "value" ? d.value : Pn(d.value), H = re(ee), ne.attrName = H, ne.attrValue = y, ne.keepAttr = !0, ne.forceKeepAttr = void 0, Re("uponSanitizeAttribute", o, ne), y = ne.attrValue, !ne.forceKeepAttr && (at(ee, o), !!ne.keepAttr)) {
          if (!Q && ae(/\/>/i, y)) {
            at(ee, o);
            continue;
          }
          Z && (y = Te(y, ue, " "), y = Te(y, te, " "), y = Te(y, Ee, " "));
          var hr = re(o.nodeName);
          if (dr(hr, H, y)) {
            if (de && (H === "id" || H === "name") && (at(ee, o), y = R + y), F && ae(/((--!?|])>)|<\/(style|title)/i, y)) {
              at(ee, o);
              continue;
            }
            if (C && Pe(M) === "object" && typeof M.getAttributeType == "function" && !At)
              switch (M.getAttributeType(hr, H)) {
                case "TrustedHTML": {
                  y = C.createHTML(y);
                  break;
                }
                case "TrustedScriptURL": {
                  y = C.createScriptURL(y);
                  break;
                }
              }
            try {
              At ? o.setAttributeNS(At, ee, y) : o.setAttribute(ee, y), ur(o) ? ye(o) : Ar(r.removed);
            } catch {
            }
          }
        }
      }
      Re("afterSanitizeAttributes", o, null);
    }
  }, fn = function w(o) {
    var d, y = cr(o);
    for (Re("beforeSanitizeShadowDOM", o, null); d = y.nextNode(); )
      Re("uponSanitizeShadowNode", d, null), !fr(d) && (d.content instanceof i && w(d.content), mr(d));
    Re("afterSanitizeShadowDOM", o, null);
  };
  return r.sanitize = function(w) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d, y, H, pe, ie;
    if (yt = !w, yt && (w = "<!-->"), typeof w != "string" && !Xe(w))
      if (typeof w.toString == "function") {
        if (w = w.toString(), typeof w != "string")
          throw xt("dirty is not a string, aborting");
      } else
        throw xt("toString is not a function");
    if (!r.isSupported) {
      if (Pe(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof w == "string")
          return e.toStaticHTML(w);
        if (Xe(w))
          return e.toStaticHTML(w.outerHTML);
      }
      return w;
    }
    if (z || _t(o), r.removed = [], typeof w == "string" && (ke = !1), ke) {
      if (w.nodeName) {
        var ne = re(w.nodeName);
        if (!h[ne] || m[ne])
          throw xt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (w instanceof l)
      d = lr("<!---->"), y = d.ownerDocument.importNode(w, !0), y.nodeType === 1 && y.nodeName === "BODY" || y.nodeName === "HTML" ? d = y : d.appendChild(y);
    else {
      if (!ve && !Z && !Y && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return C && xe ? C.createHTML(w) : w;
      if (d = lr(w), !d)
        return ve ? null : xe ? p : "";
    }
    d && K && ye(d.firstChild);
    for (var $e = cr(ke ? w : d); H = $e.nextNode(); )
      H.nodeType === 3 && H === pe || fr(H) || (H.content instanceof i && fn(H.content), mr(H), pe = H);
    if (pe = null, ke)
      return w;
    if (ve) {
      if (X)
        for (ie = ge.call(d.ownerDocument); d.firstChild; )
          ie.appendChild(d.firstChild);
      else
        ie = d;
      return (S.shadowroot || S.shadowrootmod) && (ie = Ie.call(t, ie, !0)), ie;
    }
    var ee = Y ? d.outerHTML : d.innerHTML;
    return Y && h["!doctype"] && d.ownerDocument && d.ownerDocument.doctype && d.ownerDocument.doctype.name && ae(Vn, d.ownerDocument.doctype.name) && (ee = "<!DOCTYPE " + d.ownerDocument.doctype.name + `>
` + ee), Z && (ee = Te(ee, ue, " "), ee = Te(ee, te, " "), ee = Te(ee, Ee, " ")), C && xe ? C.createHTML(ee) : ee;
  }, r.setConfig = function(w) {
    _t(w), z = !0;
  }, r.clearConfig = function() {
    We = null, z = !1;
  }, r.isValidAttribute = function(w, o, d) {
    We || _t({});
    var y = re(w), H = re(o);
    return dr(y, H, d);
  }, r.addHook = function(w, o) {
    typeof o == "function" && (q[w] = q[w] || [], Ke(q[w], o));
  }, r.removeHook = function(w) {
    if (q[w])
      return Ar(q[w]);
  }, r.removeHooks = function(w) {
    q[w] && (q[w] = []);
  }, r.removeAllHooks = function() {
    q = {};
  }, r;
}
var Zn = Wr();
const Ge = (e) => ({ __html: Zn.sanitize(e) });
a.shape({
  event: a.string,
  action: a.string,
  name: a.string,
  region: a.string,
  section: a.string,
  component: a.string,
  type: a.string,
  text: a.string
});
const Kn = ({
  event: e = "",
  action: r = "",
  name: t = "",
  type: n = "",
  section: i = "",
  text: s = "",
  region: l = "",
  component: u = ""
}) => {
  const { dataLayer: f } = window, g = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: i.toLowerCase(),
    text: s.toLowerCase(),
    component: u.toLowerCase()
  };
  f && f.push(g);
};
a.shape({
  url: a.string,
  altText: a.string,
  cssClass: a.arrayOf(a.string),
  size: a.oneOf(["small", "medium", "large"])
});
a.shape({
  text: a.string,
  maxWidth: a.string,
  cssClass: a.arrayOf(a.string),
  highlightColor: a.oneOf(["gold", "black"])
});
a.shape({
  color: a.oneOf(["gold", "maroon", "gray", "dark"]),
  content: a.shape({
    icon: a.string,
    header: a.string,
    body: a.string
  })
});
const Gr = a.shape({
  text: a.string,
  name: a.string,
  event: a.string,
  action: a.string,
  type: a.string,
  region: a.string,
  section: a.string,
  component: a.string
}), Qn = "staticMarkup";
function Jn() {
  const r = dn().indexOf(Qn) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Gt = ({ gaData: e, prefix: r = "", children: t }) => {
  const { isReact: n } = Jn(), { onClick: i, ...s } = t.props;
  if (n)
    return He.cloneElement(t, {
      ...s,
      onClick: (f) => (Kn(e), i ? i(f) : !0)
    });
  let l = "";
  ["input", "header", "header-input"].includes(r) && (l = `-${r}`);
  const u = {
    [`data-ga${l}`]: e.text,
    [`data-ga${l}-name`]: e.name,
    [`data-ga${l}-event`]: e.event,
    [`data-ga${l}-action`]: e.action,
    [`data-ga${l}-type`]: e.type,
    [`data-ga${l}-region`]: e.region,
    [`data-ga${l}-section`]: e.section,
    [`data-ga${l}-component`]: e.component
  };
  return He.cloneElement(t, {
    ...s,
    onClick: i,
    ...u
  });
}, ea = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Vt = ({
  label: e,
  cardTitle: r,
  gaData: t,
  ariaLabel: n,
  block: i,
  color: s,
  disabled: l,
  element: u,
  href: f,
  icon: g,
  innerRef: _,
  onClick: v,
  size: k,
  classes: M,
  target: x,
  ...N
}) => {
  const E = Je("btn", {
    [`btn-${s}`]: !0,
    "btn-md": k === "small",
    "btn-sm": k === "xsmall",
    "btn-block": i,
    disabled: l
  });
  let j = u;
  return f && u === "button" && (j = "a"), /* @__PURE__ */ b.jsx(
    Gt,
    {
      gaData: {
        ...ea,
        section: r,
        // @deprecated - remove at some point
        ...t,
        text: e
      },
      children: /* @__PURE__ */ b.jsxs(
        j,
        {
          type: j === "button" && v ? "button" : void 0,
          ...N,
          className: Je(M) || E,
          href: f,
          ref: _,
          onClick: v,
          "aria-label": n,
          target: j === "a" ? x : null,
          children: [
            g && /* @__PURE__ */ b.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Vt.propTypes = {
  /**
   * Button label
   */
  label: a.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: a.string,
  /**
   * Google Analytics event data
   */
  gaData: Gr,
  /**
    ARIA label for accessibility
  */
  ariaLabel: a.string,
  /**
    Render button as a block-button?
  */
  block: a.bool,
  /**
    Button background color
  */
  color: a.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: a.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: a.oneOfType([
    a.func,
    a.string,
    a.shape({ $$typeof: a.symbol, render: a.func }),
    a.arrayOf(
      a.oneOfType([
        a.func,
        a.string,
        a.shape({ $$typeof: a.symbol, render: a.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: a.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: a.arrayOf(a.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: a.oneOfType([
    a.object,
    a.func,
    a.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: a.func,
  /**
    Button size
  */
  size: a.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: a.arrayOf(a.string),
  /**
   Link target type
   */
  target: a.oneOf(["_blank", "_self", "_top", "_parent"])
};
Vt.defaultProps = {
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
const ta = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Yt = ({
  label: e,
  cardTitle: r,
  gaData: t,
  ariaLabel: n,
  color: i,
  disabled: s,
  element: l,
  innerRef: u,
  href: f,
  onClick: g,
  ..._
}) => {
  const v = Je("btn", "btn-tag", {
    "btn-tag-alt-white": i === "white",
    "btn-tag-alt-gray": i === "gray",
    "btn-tag-alt-dark": i === "dark",
    disabled: s
  });
  let k = l;
  return f && l === "button" && (k = "a"), /* @__PURE__ */ b.jsx(
    Gt,
    {
      gaData: {
        ...ta,
        section: r,
        // @deprecated - remove at some point
        ...t,
        text: e
      },
      children: /* @__PURE__ */ b.jsx(
        k,
        {
          type: k === "button" && g ? "button" : void 0,
          ..._,
          className: v,
          href: f,
          ref: u,
          onClick: g,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Yt.propTypes = {
  /**
    Button tag label
  */
  label: a.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: a.string,
  /**
   * Google Analytics event data
   */
  gaData: Gr,
  /**
    ARIA label for accessibility
  */
  ariaLabel: a.string,
  /**
    Button background color
  */
  color: a.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: a.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: a.oneOfType([
    a.func,
    a.string,
    a.shape({ $$typeof: a.symbol, render: a.func }),
    a.arrayOf(
      a.oneOfType([
        a.func,
        a.string,
        a.shape({ $$typeof: a.symbol, render: a.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: a.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: a.oneOfType([
    a.object,
    a.func,
    a.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: a.func
};
Yt.defaultProps = {
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
const Vr = ({
  src: e,
  alt: r,
  cssClasses: t,
  loading: n = "lazy",
  decoding: i = "async",
  dataTestId: s,
  fetchPriority: l = "auto",
  width: u,
  height: f,
  cardLink: g,
  title: _,
  caption: v,
  captionTitle: k,
  border: M,
  dropShadow: x
}) => {
  const N = {
    src: e,
    alt: r,
    loading: n,
    decoding: i,
    fetchpriority: l,
    // React attribute bug workaround
    ...(t == null ? void 0 : t.length) > 0 && { className: Tn(t) },
    ...s && { "data-testid": s },
    ...u && { width: u },
    ...f && { height: f }
  }, E = Je("uds-img", {
    borderless: !M,
    "uds-img-drop-shadow": x
  }), j = (P) => {
    const C = P ? `${N.className} ${P}` : N.className;
    return g ? /* @__PURE__ */ b.jsxs("a", { href: g, children: [
      /* @__PURE__ */ b.jsx("img", { ...N, className: C }),
      /* @__PURE__ */ b.jsx("span", { className: "visually-hidden", children: _ })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ b.jsx("img", { ...N, className: C })
    );
  }, L = () => /* @__PURE__ */ b.jsx("div", { className: E, children: /* @__PURE__ */ b.jsxs("figure", { className: "figure uds-figure", children: [
    j(),
    v && /* @__PURE__ */ b.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      k && /* @__PURE__ */ b.jsx("h3", { children: k }),
      /* @__PURE__ */ b.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ge(v)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: v ? L() : j(E) });
};
Vr.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: a.string.isRequired,
  /**
   * Image alt text
   */
  alt: a.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: a.arrayOf(a.string),
  /**
   * Image loading mode
   */
  loading: a.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: a.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: a.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: a.string,
  /**
   * Height of the image
   */
  height: a.string,
  dataTestId: a.string,
  cardLink: a.string,
  title: a.string,
  caption: a.string,
  captionTitle: a.string,
  border: a.bool,
  dropShadow: a.bool
};
var qt = Hr();
function ra(e) {
  function r(A, h, T, S, c) {
    for (var O = 0, m = 0, G = 0, U = 0, $, I, Q = 0, Z = 0, F, Y = F = $ = 0, z = 0, K = 0, ve = 0, X = 0, xe = T.length, Le = xe - 1, de, R = "", V = "", ke = "", we = "", se; z < xe; ) {
      if (I = T.charCodeAt(z), z === Le && m + U + G + O !== 0 && (m !== 0 && (I = m === 47 ? 10 : 47), U = G = O = 0, xe++, Le++), m + U + G + O === 0) {
        if (z === Le && (0 < K && (R = R.replace(k, "")), 0 < R.trim().length)) {
          switch (I) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              R += T.charAt(z);
          }
          I = 59;
        }
        switch (I) {
          case 123:
            for (R = R.trim(), $ = R.charCodeAt(0), F = 1, X = ++z; z < xe; ) {
              switch (I = T.charCodeAt(z)) {
                case 123:
                  F++;
                  break;
                case 125:
                  F--;
                  break;
                case 47:
                  switch (I = T.charCodeAt(z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = z + 1; Y < Le; ++Y)
                          switch (T.charCodeAt(Y)) {
                            case 47:
                              if (I === 42 && T.charCodeAt(Y - 1) === 42 && z + 2 !== Y) {
                                z = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (I === 47) {
                                z = Y + 1;
                                break e;
                              }
                          }
                        z = Y;
                      }
                  }
                  break;
                case 91:
                  I++;
                case 40:
                  I++;
                case 34:
                case 39:
                  for (; z++ < Le && T.charCodeAt(z) !== I; )
                    ;
              }
              if (F === 0) break;
              z++;
            }
            switch (F = T.substring(X, z), $ === 0 && ($ = (R = R.replace(v, "").trim()).charCodeAt(0)), $) {
              case 64:
                switch (0 < K && (R = R.replace(k, "")), I = R.charCodeAt(1), I) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    K = h;
                    break;
                  default:
                    K = Ee;
                }
                if (F = r(h, K, F, I, c + 1), X = F.length, 0 < fe && (K = t(Ee, R, ve), se = u(3, F, K, h, q, oe, X, I, c, S), R = K.join(""), se !== void 0 && (X = (F = se.trim()).length) === 0 && (I = 0, F = "")), 0 < X) switch (I) {
                  case 115:
                    R = R.replace(J, l);
                  case 100:
                  case 109:
                  case 45:
                    F = R + "{" + F + "}";
                    break;
                  case 107:
                    R = R.replace(L, "$1 $2"), F = R + "{" + F + "}", F = te === 1 || te === 2 && s("@" + F, 3) ? "@-webkit-" + F + "@" + F : "@" + F;
                    break;
                  default:
                    F = R + F, S === 112 && (F = (V += F, ""));
                }
                else F = "";
                break;
              default:
                F = r(h, t(h, R, ve), F, S, c + 1);
            }
            ke += F, F = ve = K = Y = $ = 0, R = "", I = T.charCodeAt(++z);
            break;
          case 125:
          case 59:
            if (R = (0 < K ? R.replace(k, "") : R).trim(), 1 < (X = R.length)) switch (Y === 0 && ($ = R.charCodeAt(0), $ === 45 || 96 < $ && 123 > $) && (X = (R = R.replace(" ", ":")).length), 0 < fe && (se = u(1, R, h, A, q, oe, V.length, S, c, S)) !== void 0 && (X = (R = se.trim()).length) === 0 && (R = "\0\0"), $ = R.charCodeAt(0), I = R.charCodeAt(1), $) {
              case 0:
                break;
              case 64:
                if (I === 105 || I === 99) {
                  we += R + T.charAt(z);
                  break;
                }
              default:
                R.charCodeAt(X - 1) !== 58 && (V += i(R, $, I, R.charCodeAt(2)));
            }
            ve = K = Y = $ = 0, R = "", I = T.charCodeAt(++z);
        }
      }
      switch (I) {
        case 13:
        case 10:
          m === 47 ? m = 0 : 1 + $ === 0 && S !== 107 && 0 < R.length && (K = 1, R += "\0"), 0 < fe * Oe && u(0, R, h, A, q, oe, V.length, S, c, S), oe = 1, q++;
          break;
        case 59:
        case 125:
          if (m + U + G + O === 0) {
            oe++;
            break;
          }
        default:
          switch (oe++, de = T.charAt(z), I) {
            case 9:
            case 32:
              if (U + O + m === 0) switch (Q) {
                case 44:
                case 58:
                case 9:
                case 32:
                  de = "";
                  break;
                default:
                  I !== 32 && (de = " ");
              }
              break;
            case 0:
              de = "\\0";
              break;
            case 12:
              de = "\\f";
              break;
            case 11:
              de = "\\v";
              break;
            case 38:
              U + m + O === 0 && (K = ve = 1, de = "\f" + de);
              break;
            case 108:
              if (U + m + O + ue === 0 && 0 < Y) switch (z - Y) {
                case 2:
                  Q === 112 && T.charCodeAt(z - 3) === 58 && (ue = Q);
                case 8:
                  Z === 111 && (ue = Z);
              }
              break;
            case 58:
              U + m + O === 0 && (Y = z);
              break;
            case 44:
              m + G + U + O === 0 && (K = 1, de += "\r");
              break;
            case 34:
            case 39:
              m === 0 && (U = U === I ? 0 : U === 0 ? I : U);
              break;
            case 91:
              U + m + G === 0 && O++;
              break;
            case 93:
              U + m + G === 0 && O--;
              break;
            case 41:
              U + m + O === 0 && G--;
              break;
            case 40:
              if (U + m + O === 0) {
                if ($ === 0) switch (2 * Q + 3 * Z) {
                  case 533:
                    break;
                  default:
                    $ = 1;
                }
                G++;
              }
              break;
            case 64:
              m + G + U + O + Y + F === 0 && (F = 1);
              break;
            case 42:
            case 47:
              if (!(0 < U + O + G)) switch (m) {
                case 0:
                  switch (2 * I + 3 * T.charCodeAt(z + 1)) {
                    case 235:
                      m = 47;
                      break;
                    case 220:
                      X = z, m = 42;
                  }
                  break;
                case 42:
                  I === 47 && Q === 42 && X + 2 !== z && (T.charCodeAt(X + 2) === 33 && (V += T.substring(X, z + 1)), de = "", m = 0);
              }
          }
          m === 0 && (R += de);
      }
      Z = Q, Q = I, z++;
    }
    if (X = V.length, 0 < X) {
      if (K = h, 0 < fe && (se = u(2, V, K, A, q, oe, X, S, c, S), se !== void 0 && (V = se).length === 0)) return we + V + ke;
      if (V = K.join(",") + "{" + V + "}", te * ue !== 0) {
        switch (te !== 2 || s(V, 2) || (ue = 0), ue) {
          case 111:
            V = V.replace(C, ":-moz-$1") + V;
            break;
          case 112:
            V = V.replace(P, "::-webkit-input-$1") + V.replace(P, "::-moz-$1") + V.replace(P, ":-ms-input-$1") + V;
        }
        ue = 0;
      }
    }
    return we + V + ke;
  }
  function t(A, h, T) {
    var S = h.trim().split(E);
    h = S;
    var c = S.length, O = A.length;
    switch (O) {
      case 0:
      case 1:
        var m = 0;
        for (A = O === 0 ? "" : A[0] + " "; m < c; ++m)
          h[m] = n(A, h[m], T).trim();
        break;
      default:
        var G = m = 0;
        for (h = []; m < c; ++m)
          for (var U = 0; U < O; ++U)
            h[G++] = n(A[U] + " ", S[m], T).trim();
    }
    return h;
  }
  function n(A, h, T) {
    var S = h.charCodeAt(0);
    switch (33 > S && (S = (h = h.trim()).charCodeAt(0)), S) {
      case 38:
        return h.replace(j, "$1" + A.trim());
      case 58:
        return A.trim() + h.replace(j, "$1" + A.trim());
      default:
        if (0 < 1 * T && 0 < h.indexOf("\f")) return h.replace(j, (A.charCodeAt(0) === 58 ? "" : "$1") + A.trim());
    }
    return A + h;
  }
  function i(A, h, T, S) {
    var c = A + ";", O = 2 * h + 3 * T + 4 * S;
    if (O === 944) {
      A = c.indexOf(":", 9) + 1;
      var m = c.substring(A, c.length - 1).trim();
      return m = c.substring(0, A).trim() + m + ";", te === 1 || te === 2 && s(m, 1) ? "-webkit-" + m + m : m;
    }
    if (te === 0 || te === 2 && !s(c, 1)) return c;
    switch (O) {
      case 1015:
        return c.charCodeAt(10) === 97 ? "-webkit-" + c + c : c;
      case 951:
        return c.charCodeAt(3) === 116 ? "-webkit-" + c + c : c;
      case 963:
        return c.charCodeAt(5) === 110 ? "-webkit-" + c + c : c;
      case 1009:
        if (c.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + c + c;
      case 978:
        return "-webkit-" + c + "-moz-" + c + c;
      case 1019:
      case 983:
        return "-webkit-" + c + "-moz-" + c + "-ms-" + c + c;
      case 883:
        if (c.charCodeAt(8) === 45) return "-webkit-" + c + c;
        if (0 < c.indexOf("image-set(", 11)) return c.replace(Ie, "$1-webkit-$2") + c;
        break;
      case 932:
        if (c.charCodeAt(4) === 45) switch (c.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + c.replace("-grow", "") + "-webkit-" + c + "-ms-" + c.replace("grow", "positive") + c;
          case 115:
            return "-webkit-" + c + "-ms-" + c.replace("shrink", "negative") + c;
          case 98:
            return "-webkit-" + c + "-ms-" + c.replace("basis", "preferred-size") + c;
        }
        return "-webkit-" + c + "-ms-" + c + c;
      case 964:
        return "-webkit-" + c + "-ms-flex-" + c + c;
      case 1023:
        if (c.charCodeAt(8) !== 99) break;
        return m = c.substring(c.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + m + "-webkit-" + c + "-ms-flex-pack" + m + c;
      case 1005:
        return x.test(c) ? c.replace(M, ":-webkit-") + c.replace(M, ":-moz-") + c : c;
      case 1e3:
        switch (m = c.substring(13).trim(), h = m.indexOf("-") + 1, m.charCodeAt(0) + m.charCodeAt(h)) {
          case 226:
            m = c.replace(p, "tb");
            break;
          case 232:
            m = c.replace(p, "tb-rl");
            break;
          case 220:
            m = c.replace(p, "lr");
            break;
          default:
            return c;
        }
        return "-webkit-" + c + "-ms-" + m + c;
      case 1017:
        if (c.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (h = (c = A).length - 10, m = (c.charCodeAt(h) === 33 ? c.substring(0, h) : c).substring(A.indexOf(":", 7) + 1).trim(), O = m.charCodeAt(0) + (m.charCodeAt(7) | 0)) {
          case 203:
            if (111 > m.charCodeAt(8)) break;
          case 115:
            c = c.replace(m, "-webkit-" + m) + ";" + c;
            break;
          case 207:
          case 102:
            c = c.replace(m, "-webkit-" + (102 < O ? "inline-" : "") + "box") + ";" + c.replace(m, "-webkit-" + m) + ";" + c.replace(m, "-ms-" + m + "box") + ";" + c;
        }
        return c + ";";
      case 938:
        if (c.charCodeAt(5) === 45) switch (c.charCodeAt(6)) {
          case 105:
            return m = c.replace("-items", ""), "-webkit-" + c + "-webkit-box-" + m + "-ms-flex-" + m + c;
          case 115:
            return "-webkit-" + c + "-ms-flex-item-" + c.replace(ce, "") + c;
          default:
            return "-webkit-" + c + "-ms-flex-line-pack" + c.replace("align-content", "").replace(ce, "") + c;
        }
        break;
      case 973:
      case 989:
        if (c.charCodeAt(3) !== 45 || c.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Se.test(A) === !0) return (m = A.substring(A.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(A.replace("stretch", "fill-available"), h, T, S).replace(":fill-available", ":stretch") : c.replace(m, "-webkit-" + m) + c.replace(m, "-moz-" + m.replace("fill-", "")) + c;
        break;
      case 962:
        if (c = "-webkit-" + c + (c.charCodeAt(5) === 102 ? "-ms-" + c : "") + c, T + S === 211 && c.charCodeAt(13) === 105 && 0 < c.indexOf("transform", 10)) return c.substring(0, c.indexOf(";", 27) + 1).replace(N, "$1-webkit-$2") + c;
    }
    return c;
  }
  function s(A, h) {
    var T = A.indexOf(h === 1 ? ":" : "{"), S = A.substring(0, h !== 3 ? T : 10);
    return T = A.substring(T + 1, A.length - 1), Me(h !== 2 ? S : S.replace(ge, "$1"), T, h);
  }
  function l(A, h) {
    var T = i(h, h.charCodeAt(0), h.charCodeAt(1), h.charCodeAt(2));
    return T !== h + ";" ? T.replace(he, " or ($1)").substring(4) : "(" + h + ")";
  }
  function u(A, h, T, S, c, O, m, G, U, $) {
    for (var I = 0, Q = h, Z; I < fe; ++I)
      switch (Z = me[I].call(_, A, Q, T, S, c, O, m, G, U, $)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Q = Z;
      }
    if (Q !== h) return Q;
  }
  function f(A) {
    switch (A) {
      case void 0:
      case null:
        fe = me.length = 0;
        break;
      default:
        if (typeof A == "function") me[fe++] = A;
        else if (typeof A == "object") for (var h = 0, T = A.length; h < T; ++h)
          f(A[h]);
        else Oe = !!A | 0;
    }
    return f;
  }
  function g(A) {
    return A = A.prefix, A !== void 0 && (Me = null, A ? typeof A != "function" ? te = 1 : (te = 2, Me = A) : te = 0), g;
  }
  function _(A, h) {
    var T = A;
    if (33 > T.charCodeAt(0) && (T = T.trim()), je = T, T = [je], 0 < fe) {
      var S = u(-1, h, T, T, q, oe, 0, 0, 0, 0);
      S !== void 0 && typeof S == "string" && (h = S);
    }
    var c = r(Ee, T, h, 0, 0);
    return 0 < fe && (S = u(-2, c, T, T, q, oe, c.length, 0, 0, 0), S !== void 0 && (c = S)), je = "", ue = 0, oe = q = 1, c;
  }
  var v = /^\0+/g, k = /[\0\r\f]/g, M = /: */g, x = /zoo|gra/, N = /([,: ])(transform)/g, E = /,\r+?/g, j = /([\t\r\n ])*\f?&/g, L = /@(k\w+)\s*(\S*)\s*/, P = /::(place)/g, C = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, J = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, ce = /-self|flex-/g, ge = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Se = /stretch|:\s*\w+\-(?:conte|avail)/, Ie = /([^-])(image-set\()/, oe = 1, q = 1, ue = 0, te = 1, Ee = [], me = [], fe = 0, Me = null, Oe = 0, je = "";
  return _.use = f, _.set = g, e !== void 0 && g(e), _;
}
var na = {
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
function aa(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var oa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, kr = /* @__PURE__ */ aa(
  function(e) {
    return oa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Xt = Hr(), ia = {
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
}, sa = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, la = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Zt = {};
Zt[Xt.ForwardRef] = la;
Zt[Xt.Memo] = Yr;
function Cr(e) {
  return Xt.isMemo(e) ? Yr : Zt[e.$$typeof] || ia;
}
var ca = Object.defineProperty, ua = Object.getOwnPropertyNames, Rr = Object.getOwnPropertySymbols, fa = Object.getOwnPropertyDescriptor, da = Object.getPrototypeOf, Nr = Object.prototype;
function qr(e, r, t) {
  if (typeof r != "string") {
    if (Nr) {
      var n = da(r);
      n && n !== Nr && qr(e, n, t);
    }
    var i = ua(r);
    Rr && (i = i.concat(Rr(r)));
    for (var s = Cr(e), l = Cr(r), u = 0; u < i.length; ++u) {
      var f = i[u];
      if (!sa[f] && !(t && t[f]) && !(l && l[f]) && !(s && s[f])) {
        var g = fa(r, f);
        try {
          ca(e, f, g);
        } catch {
        }
      }
    }
  }
  return e;
}
var pa = qr;
const ma = /* @__PURE__ */ Wt(pa);
var W = { env: { NODE_ENV: "production" } };
function Ne() {
  return (Ne = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ir = function(e, r) {
  for (var t = [e[0]], n = 0, i = r.length; n < i; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, jt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !qt.typeOf(e);
}, mt = Object.freeze([]), De = Object.freeze({});
function et(e) {
  return typeof e == "function";
}
function Ft(e) {
  return W.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Kt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ve = typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_ATTR || W.env.SC_ATTR) || "data-styled", Qt = typeof window < "u" && "HTMLElement" in window, ha = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && W.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.env.REACT_APP_SC_DISABLE_SPEEDY : W.env.SC_DISABLE_SPEEDY !== void 0 && W.env.SC_DISABLE_SPEEDY !== "" ? W.env.SC_DISABLE_SPEEDY !== "false" && W.env.SC_DISABLE_SPEEDY : W.env.NODE_ENV !== "production")), ga = W.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function va() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function qe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw W.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(va.apply(void 0, [ga[e]].concat(t)).trim());
}
var ya = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, i = 0; i < t; i++) n += this.groupSizes[i];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, l = s; t >= l; ) (l <<= 1) < 0 && qe(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(i), this.length = l;
      for (var u = s; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), g = 0, _ = n.length; g < _; g++) this.tag.insertRule(f, n[g]) && (this.groupSizes[t]++, f++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], i = this.indexOfGroup(t), s = i + n;
      this.groupSizes[t] = 0;
      for (var l = i; l < s; l++) this.tag.deleteRule(i);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var i = this.groupSizes[t], s = this.indexOfGroup(t), l = s + i, u = s; u < l; u++) n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), dt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Qe = 1, st = function(e) {
  if (dt.has(e)) return dt.get(e);
  for (; ht.has(Qe); ) Qe++;
  var r = Qe++;
  return W.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && qe(16, "" + r), dt.set(e, r), ht.set(r, e), r;
}, ba = function(e) {
  return ht.get(e);
}, _a = function(e, r) {
  r >= Qe && (Qe = r + 1), dt.set(e, r), ht.set(r, e);
}, Ta = "style[" + Ve + '][data-styled-version="5.3.11"]', Aa = new RegExp("^" + Ve + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Sa = function(e, r, t) {
  for (var n, i = t.split(","), s = 0, l = i.length; s < l; s++) (n = i[s]) && e.registerName(r, n);
}, wa = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = t.length; i < s; i++) {
    var l = t[i].trim();
    if (l) {
      var u = l.match(Aa);
      if (u) {
        var f = 0 | parseInt(u[1], 10), g = u[2];
        f !== 0 && (_a(g, f), Sa(e, g, u[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, Ea = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Xr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), i = function(u) {
    for (var f = u.childNodes, g = f.length; g >= 0; g--) {
      var _ = f[g];
      if (_ && _.nodeType === 1 && _.hasAttribute(Ve)) return _;
    }
  }(t), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Ve, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = Ea();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, s), n;
}, Oa = function() {
  function e(t) {
    var n = this.element = Xr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, l = 0, u = s.length; l < u; l++) {
        var f = s[l];
        if (f.ownerNode === i) return f;
      }
      qe(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), xa = function() {
  function e(t) {
    var n = this.element = Xr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var i = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ka = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Lr = Qt, Ca = { isServer: !Qt, useCSSOMInjection: !ha }, Zr = function() {
  function e(t, n, i) {
    t === void 0 && (t = De), n === void 0 && (n = {}), this.options = Ne({}, Ca, {}, t), this.gs = n, this.names = new Map(i), this.server = !!t.isServer, !this.server && Qt && Lr && (Lr = !1, function(s) {
      for (var l = document.querySelectorAll(Ta), u = 0, f = l.length; u < f; u++) {
        var g = l[u];
        g && g.getAttribute(Ve) !== "active" && (wa(s, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(t) {
    return st(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ne({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, t = i ? new ka(l) : s ? new Oa(l) : new xa(l), new ya(t)));
    var t, n, i, s, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (st(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(t, i);
    }
  }, r.insertRules = function(t, n, i) {
    this.registerName(t, n), this.getTag().insertRules(st(t), i);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(st(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), i = n.length, s = "", l = 0; l < i; l++) {
        var u = ba(l);
        if (u !== void 0) {
          var f = t.names.get(u), g = n.getGroup(l);
          if (f && g && f.size) {
            var _ = Ve + ".g" + l + '[id="' + u + '"]', v = "";
            f !== void 0 && f.forEach(function(k) {
              k.length > 0 && (v += k + ",");
            }), s += "" + g + _ + '{content:"' + v + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ra = /(a)(d)/gi, Pr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $t(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Pr(r % 52) + t;
  return (Pr(r % 52) + t).replace(Ra, "$1-$2");
}
var Ue = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Kr = function(e) {
  return Ue(5381, e);
};
function Na(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (et(t) && !Kt(t)) return !1;
  }
  return !0;
}
var Ia = Kr("5.3.11"), La = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = W.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Na(r), this.componentId = t, this.baseHash = Ue(Ia, t), this.baseStyle = n, Zr.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = Ye(this.rules, r, t, n).join(""), u = $t(Ue(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(i, u)) {
        var f = n(l, "." + u, void 0, i);
        t.insertRules(i, u, f);
      }
      s.push(u), this.staticRulesId = u;
    }
    else {
      for (var g = this.rules.length, _ = Ue(this.baseHash, n.hash), v = "", k = 0; k < g; k++) {
        var M = this.rules[k];
        if (typeof M == "string") v += M, W.env.NODE_ENV !== "production" && (_ = Ue(_, M + k));
        else if (M) {
          var x = Ye(M, r, t, n), N = Array.isArray(x) ? x.join("") : x;
          _ = Ue(_, N + k), v += N;
        }
      }
      if (v) {
        var E = $t(_ >>> 0);
        if (!t.hasNameForId(i, E)) {
          var j = n(v, "." + E, void 0, i);
          t.insertRules(i, E, j);
        }
        s.push(E);
      }
    }
    return s.join(" ");
  }, e;
}(), Pa = /^\s*\/\/.*$/gm, Da = [":", "[", ".", "#"];
function Ma(e) {
  var r, t, n, i, s = De, l = s.options, u = l === void 0 ? De : l, f = s.plugins, g = f === void 0 ? mt : f, _ = new ra(u), v = [], k = /* @__PURE__ */ function(N) {
    function E(j) {
      if (j) try {
        N(j + "}");
      } catch {
      }
    }
    return function(j, L, P, C, p, J, he, ce, ge, Se) {
      switch (j) {
        case 1:
          if (ge === 0 && L.charCodeAt(0) === 64) return N(L + ";"), "";
          break;
        case 2:
          if (ce === 0) return L + "/*|*/";
          break;
        case 3:
          switch (ce) {
            case 102:
            case 112:
              return N(P[0] + L), "";
            default:
              return L + (Se === 0 ? "/*|*/" : "");
          }
        case -2:
          L.split("/*|*/}").forEach(E);
      }
    };
  }(function(N) {
    v.push(N);
  }), M = function(N, E, j) {
    return E === 0 && Da.indexOf(j[t.length]) !== -1 || j.match(i) ? N : "." + r;
  };
  function x(N, E, j, L) {
    L === void 0 && (L = "&");
    var P = N.replace(Pa, ""), C = E && j ? j + " " + E + " { " + P + " }" : P;
    return r = L, t = E, n = new RegExp("\\" + t + "\\b", "g"), i = new RegExp("(\\" + t + "\\b){2,}"), _(j || !E ? "" : E, C);
  }
  return _.use([].concat(g, [function(N, E, j) {
    N === 2 && j.length && j[0].lastIndexOf(t) > 0 && (j[0] = j[0].replace(n, M));
  }, k, function(N) {
    if (N === -2) {
      var E = v;
      return v = [], E;
    }
  }])), x.hash = g.length ? g.reduce(function(N, E) {
    return E.name || qe(15), Ue(N, E.name);
  }, 5381).toString() : "", x;
}
var Qr = He.createContext();
Qr.Consumer;
var Jr = He.createContext(), ja = (Jr.Consumer, new Zr()), zt = Ma();
function Fa() {
  return Bt(Qr) || ja;
}
function $a() {
  return Bt(Jr) || zt;
}
var za = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = zt);
      var l = n.name + s.hash;
      i.hasNameForId(n.id, l) || i.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return qe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = zt), this.name + r.hash;
  }, e;
}(), Ua = /([A-Z])/, Ha = /([A-Z])/g, Ba = /^ms-/, Wa = function(e) {
  return "-" + e.toLowerCase();
};
function Dr(e) {
  return Ua.test(e) ? e.replace(Ha, Wa).replace(Ba, "-ms-") : e;
}
var Mr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ye(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], l = 0, u = e.length; l < u; l += 1) (i = Ye(e[l], r, t, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (Mr(e)) return "";
  if (Kt(e)) return "." + e.styledComponentId;
  if (et(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !r) return e;
    var f = e(r);
    return W.env.NODE_ENV !== "production" && qt.isElement(f) && console.warn(Ft(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ye(f, r, t, n);
  }
  var g;
  return e instanceof za ? t ? (e.inject(t, n), e.getName(n)) : e : jt(e) ? function _(v, k) {
    var M, x, N = [];
    for (var E in v) v.hasOwnProperty(E) && !Mr(v[E]) && (Array.isArray(v[E]) && v[E].isCss || et(v[E]) ? N.push(Dr(E) + ":", v[E], ";") : jt(v[E]) ? N.push.apply(N, _(v[E], E)) : N.push(Dr(E) + ": " + (M = E, (x = v[E]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || M in na || M.startsWith("--") ? String(x).trim() : x + "px") + ";"));
    return k ? [k + " {"].concat(N, ["}"]) : N;
  }(e) : e.toString();
}
var jr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ga(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return et(e) || jt(e) ? jr(Ye(Ir(mt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : jr(Ye(Ir(e, t)));
}
var Fr = /invalid hook call/i, lt = /* @__PURE__ */ new Set(), Va = function(e, r) {
  if (W.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        if (Fr.test(s)) i = !1, lt.delete(t);
        else {
          for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), f = 1; f < l; f++) u[f - 1] = arguments[f];
          n.apply(void 0, [s].concat(u));
        }
      }, pn(), i && !lt.has(t) && (console.warn(t), lt.add(t));
    } catch (s) {
      Fr.test(s.message) && lt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Ya = function(e, r, t) {
  return t === void 0 && (t = De), e.theme !== t.theme && e.theme || r || t.theme;
}, qa = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xa = /(^-|-$)/g;
function It(e) {
  return e.replace(qa, "-").replace(Xa, "");
}
var Za = function(e) {
  return $t(Kr(e) >>> 0);
};
function ct(e) {
  return typeof e == "string" && (W.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ut = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ka = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Qa(e, r, t) {
  var n = e[t];
  Ut(r) && Ut(n) ? en(n, r) : e[t] = r;
}
function en(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var i = 0, s = t; i < s.length; i++) {
    var l = s[i];
    if (Ut(l)) for (var u in l) Ka(u) && Qa(e, l[u], u);
  }
  return e;
}
var tn = He.createContext();
tn.Consumer;
var Lt = {};
function rn(e, r, t) {
  var n = Kt(e), i = !ct(e), s = r.attrs, l = s === void 0 ? mt : s, u = r.componentId, f = u === void 0 ? function(L, P) {
    var C = typeof L != "string" ? "sc" : It(L);
    Lt[C] = (Lt[C] || 0) + 1;
    var p = C + "-" + Za("5.3.11" + C + Lt[C]);
    return P ? P + "-" + p : p;
  }(r.displayName, r.parentComponentId) : u, g = r.displayName, _ = g === void 0 ? function(L) {
    return ct(L) ? "styled." + L : "Styled(" + Ft(L) + ")";
  }(e) : g, v = r.displayName && r.componentId ? It(r.displayName) + "-" + r.componentId : r.componentId || f, k = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, M = r.shouldForwardProp;
  n && e.shouldForwardProp && (M = r.shouldForwardProp ? function(L, P, C) {
    return e.shouldForwardProp(L, P, C) && r.shouldForwardProp(L, P, C);
  } : e.shouldForwardProp);
  var x, N = new La(t, v, n ? e.componentStyle : void 0), E = N.isStatic && l.length === 0, j = function(L, P) {
    return function(C, p, J, he) {
      var ce = C.attrs, ge = C.componentStyle, Se = C.defaultProps, Ie = C.foldedComponentIds, oe = C.shouldForwardProp, q = C.styledComponentId, ue = C.target, te = function(S, c, O) {
        S === void 0 && (S = De);
        var m = Ne({}, c, { theme: S }), G = {};
        return O.forEach(function(U) {
          var $, I, Q, Z = U;
          for ($ in et(Z) && (Z = Z(m)), Z) m[$] = G[$] = $ === "className" ? (I = G[$], Q = Z[$], I && Q ? I + " " + Q : I || Q) : Z[$];
        }), [m, G];
      }(Ya(p, Bt(tn), Se) || De, p, ce), Ee = te[0], me = te[1], fe = function(S, c, O, m) {
        var G = Fa(), U = $a(), $ = c ? S.generateAndInjectStyles(De, G, U) : S.generateAndInjectStyles(O, G, U);
        return W.env.NODE_ENV !== "production" && !c && m && m($), $;
      }(ge, he, Ee, W.env.NODE_ENV !== "production" ? C.warnTooManyClasses : void 0), Me = J, Oe = me.$as || p.$as || me.as || p.as || ue, je = ct(Oe), A = me !== p ? Ne({}, p, {}, me) : p, h = {};
      for (var T in A) T[0] !== "$" && T !== "as" && (T === "forwardedAs" ? h.as = A[T] : (oe ? oe(T, kr, Oe) : !je || kr(T)) && (h[T] = A[T]));
      return p.style && me.style !== p.style && (h.style = Ne({}, p.style, {}, me.style)), h.className = Array.prototype.concat(Ie, q, fe !== q ? fe : null, p.className, me.className).filter(Boolean).join(" "), h.ref = Me, mn(Oe, h);
    }(x, L, P, E);
  };
  return j.displayName = _, (x = He.forwardRef(j)).attrs = k, x.componentStyle = N, x.displayName = _, x.shouldForwardProp = M, x.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : mt, x.styledComponentId = v, x.target = n ? e.target : e, x.withComponent = function(L) {
    var P = r.componentId, C = function(J, he) {
      if (J == null) return {};
      var ce, ge, Se = {}, Ie = Object.keys(J);
      for (ge = 0; ge < Ie.length; ge++) ce = Ie[ge], he.indexOf(ce) >= 0 || (Se[ce] = J[ce]);
      return Se;
    }(r, ["componentId"]), p = P && P + "-" + (ct(L) ? L : It(Ft(L)));
    return rn(L, Ne({}, C, { attrs: k, componentId: p }), t);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(L) {
    this._foldedDefaultProps = n ? en({}, e.defaultProps, L) : L;
  } }), W.env.NODE_ENV !== "production" && (Va(_, v), x.warnTooManyClasses = /* @__PURE__ */ function(L, P) {
    var C = {}, p = !1;
    return function(J) {
      if (!p && (C[J] = !0, Object.keys(C).length >= 200)) {
        var he = P ? ' with the id of "' + P + '"' : "";
        console.warn("Over 200 classes were generated for component " + L + he + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, C = {};
      }
    };
  }(_, v)), Object.defineProperty(x, "toString", { value: function() {
    return "." + x.styledComponentId;
  } }), i && ma(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var Ht = function(e) {
  return function r(t, n, i) {
    if (i === void 0 && (i = De), !qt.isValidElementType(n)) return qe(1, String(n));
    var s = function() {
      return t(n, i, Ga.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return r(t, n, Ne({}, i, {}, l));
    }, s.attrs = function(l) {
      return r(t, n, Ne({}, i, { attrs: Array.prototype.concat(i.attrs, l).filter(Boolean) }));
    }, s;
  }(rn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ht[e] = Ht(e);
});
W.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), W.env.NODE_ENV !== "production" && W.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ja = Ht.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, eo = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), to = (e) => !e.startsWith("https://") && !e.startsWith("http://") && eo(e) ? `mailto:${e}` : e, ro = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, nn = ({
  type: e,
  width: r,
  horizontal: t,
  image: n,
  imageAltText: i,
  title: s,
  icon: l,
  body: u,
  eventFormat: f,
  eventLocation: g,
  eventTime: _,
  buttons: v,
  linkLabel: k,
  linkUrl: M,
  tags: x,
  showBorders: N,
  cardLink: E
}) => /* @__PURE__ */ b.jsx(
  Jt,
  {
    type: e,
    width: r,
    horizontal: t,
    image: n,
    imageAltText: i,
    title: s,
    icon: l,
    body: u,
    eventFormat: f,
    eventLocation: g,
    eventTime: _,
    buttons: v,
    linkLabel: k,
    linkUrl: M,
    tags: x,
    showBorders: N,
    cardLink: E
  }
);
nn.propTypes = {
  /**
   * Type of card
   */
  type: a.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: a.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: a.bool,
  /**
   * Card title
   */
  title: a.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: a.arrayOf(a.string),
  /**
   * Card body content
   */
  body: a.string,
  /**
   * Event info format
   */
  eventFormat: a.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: a.string,
  /**
   * Event start time
   */
  eventTime: a.string,
  /**
   * Card header image
   */
  image: a.string,
  /**
   * Card header image alt text
   */
  imageAltText: a.string,
  /**
   * Buttons
   */
  buttons: a.arrayOf(
    a.shape({
      ariaLabel: a.string,
      color: a.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: a.arrayOf(a.string),
      href: a.string,
      label: a.string,
      onClick: a.func,
      size: a.oneOf(["default", "small", "xsmall"]),
      target: a.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: a.string,
  linkUrl: a.string,
  /**
   * Tags
   */
  tags: a.arrayOf(
    a.shape({
      ariaLabel: a.string,
      color: a.oneOf(["white", "gray", "dark"]),
      href: a.string,
      label: a.string,
      onClick: a.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: a.bool,
  /**
   * Card link
   */
  cardLink: a.string
};
nn.defaultProps = {
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
const Jt = ({
  type: e,
  width: r,
  horizontal: t,
  image: n,
  imageAltText: i,
  title: s,
  icon: l,
  body: u,
  eventFormat: f,
  eventLocation: g,
  eventTime: _,
  buttons: v,
  linkLabel: k,
  linkUrl: M,
  tags: x,
  showBorders: N,
  cardLink: E
}) => {
  const j = Je("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${r.replace("%", "")}`]: r !== "100%",
    "card-horizontal": t,
    borderless: !N
  });
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: /* @__PURE__ */ b.jsxs(Ja, { className: j, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ b.jsx(
      Vr,
      {
        src: n,
        alt: i,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: E,
        title: s
      }
    ),
    !n && l && /* @__PURE__ */ b.jsx(
      "i",
      {
        className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    t ? /* @__PURE__ */ b.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ b.jsx(
      gt,
      {
        type: e,
        body: u,
        eventFormat: f,
        eventLocation: g,
        eventTime: _,
        title: s,
        buttons: v,
        linkLabel: k,
        linkUrl: M,
        tags: x,
        cardLink: E
      }
    ) }) : /* @__PURE__ */ b.jsx(
      gt,
      {
        type: e,
        body: u,
        eventFormat: f,
        eventLocation: g,
        eventTime: _,
        title: s,
        buttons: v,
        linkLabel: k,
        linkUrl: M,
        tags: x,
        cardLink: E
      }
    )
  ] }) });
};
Jt.propTypes = {
  type: a.oneOf(["default", "degree", "event", "news", "story"]),
  width: a.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: a.bool,
  title: a.string.isRequired,
  icon: a.arrayOf(a.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: a.string,
  eventFormat: a.oneOf(["stack", "inline"]),
  eventLocation: a.string,
  eventTime: a.string,
  image: a.string,
  imageAltText: a.string,
  buttons: a.arrayOf(
    a.shape({
      ariaLabel: a.string,
      color: a.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: a.arrayOf(a.string),
      href: a.string,
      label: a.string,
      onClick: a.func,
      size: a.oneOf(["default", "small", "xsmall"]),
      target: a.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: a.string,
  linkUrl: a.string,
  tags: a.arrayOf(
    a.shape({
      ariaLabel: a.string,
      color: a.oneOf(["white", "gray", "dark"]),
      href: a.string,
      label: a.string,
      onClick: a.func
    })
  ),
  showBorders: a.bool,
  cardLink: a.string
};
Jt.defaultProps = {
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
const gt = ({
  type: e,
  body: r,
  eventFormat: t,
  eventLocation: n,
  eventTime: i,
  title: s,
  buttons: l,
  linkLabel: u,
  linkUrl: f,
  tags: g,
  cardLink: _
}) => /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
  !!s && /* @__PURE__ */ b.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ b.jsx("h3", { className: "card-title", children: _ ? /* @__PURE__ */ b.jsx("a", { href: _, children: s }) : s }) }),
  !!r && /* @__PURE__ */ b.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ b.jsx("div", { dangerouslySetInnerHTML: Ge(r) }) }),
  e === "event" && (i || n) && /* @__PURE__ */ b.jsx(
    er,
    {
      eventFormat: t,
      eventTime: i,
      eventLocation: n
    }
  ),
  l && /* @__PURE__ */ b.jsx("div", { className: "card-buttons", children: l.map((v) => /* @__PURE__ */ b.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ b.jsx(
        Vt,
        {
          ariaLabel: v.ariaLabel,
          color: v.color,
          icon: v.icon,
          href: v.href,
          label: v.label,
          onClick: v.onClick,
          size: v.size,
          target: v.target,
          cardTitle: s
        }
      )
    },
    `${v.label}-${v.href}`
  )) }),
  f && u && /* @__PURE__ */ b.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ b.jsx(
    Gt,
    {
      gaData: {
        ...ro,
        section: s,
        text: u
      },
      children: /* @__PURE__ */ b.jsx("a", { href: to(f), children: u })
    }
  ) }),
  g && /* @__PURE__ */ b.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: g.map((v) => (
    // @ts-ignore
    /* @__PURE__ */ b.jsx(
      Yt,
      {
        ariaLabel: v.ariaLabel,
        color: v.color,
        href: v.href,
        label: v.label,
        onClick: v.onClick,
        cardTitle: s
      },
      `${v.label}-${v.href}`
    )
  )) })
] });
gt.propTypes = {
  type: a.oneOf(["default", "degree", "event", "news", "story"]),
  body: a.string,
  eventFormat: a.oneOf(["stack", "inline"]),
  eventLocation: a.string,
  eventTime: a.string,
  title: a.string.isRequired,
  buttons: a.arrayOf(
    a.shape({
      ariaLabel: a.string,
      color: a.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: a.arrayOf(a.string),
      href: a.string,
      label: a.string,
      onClick: a.func,
      size: a.oneOf(["default", "small", "xsmall"]),
      target: a.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: a.string,
  linkUrl: a.string,
  tags: a.arrayOf(
    a.shape({
      ariaLabel: a.string,
      color: a.oneOf(["white", "gray", "dark"]),
      href: a.string,
      label: a.string,
      onClick: a.func
    })
  ),
  cardLink: a.string
};
gt.defaultProps = {
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
const er = ({ eventFormat: e, eventTime: r, eventLocation: t }) => e === "inline" ? /* @__PURE__ */ b.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ b.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ b.jsx("div", { children: /* @__PURE__ */ b.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ b.jsx("div", { dangerouslySetInnerHTML: Ge(r) })
  ] }),
  t && /* @__PURE__ */ b.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ b.jsx("div", { children: /* @__PURE__ */ b.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ b.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ge(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
  r && /* @__PURE__ */ b.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ b.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ b.jsx("div", { children: /* @__PURE__ */ b.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ b.jsx("div", { dangerouslySetInnerHTML: Ge(r) })
  ] }) }),
  t && /* @__PURE__ */ b.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ b.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ b.jsx("div", { children: /* @__PURE__ */ b.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ b.jsx("span", { children: /* @__PURE__ */ b.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ge(t)
      }
    ) })
  ] }) })
] });
er.propTypes = {
  eventFormat: a.oneOf(["stack", "inline"]),
  eventLocation: a.string,
  eventTime: a.string
};
er.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
export {
  nn as Card
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
