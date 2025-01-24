import Ue, { useState as Fr, useEffect as Mt, useId as un, useRef as jr, useContext as Wt, createElement as fn } from "react";
function Gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hr = { exports: {} }, Ze = {};
var dr;
function pn() {
  if (dr) return Ze;
  dr = 1;
  var e = Ue, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, m, y) {
    var T, O = {}, L = null, F = null;
    y !== void 0 && (L = "" + y), m.key !== void 0 && (L = "" + m.key), m.ref !== void 0 && (F = m.ref);
    for (T in m) n.call(m, T) && !i.hasOwnProperty(T) && (O[T] = m[T]);
    if (u && u.defaultProps) for (T in m = u.defaultProps, m) O[T] === void 0 && (O[T] = m[T]);
    return { $$typeof: r, type: u, key: L, ref: F, props: O, _owner: o.current };
  }
  return Ze.Fragment = t, Ze.jsx = l, Ze.jsxs = l, Ze;
}
Hr.exports = pn();
var he = Hr.exports, $r = { exports: {} };
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var i = "", l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        u && (i = o(i, n(u)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return t.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var l = "";
      for (var u in i)
        r.call(i, u) && i[u] && (l = o(l, u));
      return l;
    }
    function o(i, l) {
      return l ? i ? i + " " + l : i + l : i;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})($r);
var dn = $r.exports;
const Ge = /* @__PURE__ */ Gt(dn);
var zr = { exports: {} }, St = { exports: {} }, U = {};
var mr;
function mn() {
  if (mr) return U;
  mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, T = e ? Symbol.for("react.forward_ref") : 60112, O = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function x(c) {
    if (typeof c == "object" && c !== null) {
      var W = c.$$typeof;
      switch (W) {
        case r:
          switch (c = c.type, c) {
            case m:
            case y:
            case n:
            case i:
            case o:
            case O:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case u:
                case T:
                case k:
                case F:
                case l:
                  return c;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function C(c) {
    return x(c) === y;
  }
  return U.AsyncMode = m, U.ConcurrentMode = y, U.ContextConsumer = u, U.ContextProvider = l, U.Element = r, U.ForwardRef = T, U.Fragment = n, U.Lazy = k, U.Memo = F, U.Portal = t, U.Profiler = i, U.StrictMode = o, U.Suspense = O, U.isAsyncMode = function(c) {
    return C(c) || x(c) === m;
  }, U.isConcurrentMode = C, U.isContextConsumer = function(c) {
    return x(c) === u;
  }, U.isContextProvider = function(c) {
    return x(c) === l;
  }, U.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, U.isForwardRef = function(c) {
    return x(c) === T;
  }, U.isFragment = function(c) {
    return x(c) === n;
  }, U.isLazy = function(c) {
    return x(c) === k;
  }, U.isMemo = function(c) {
    return x(c) === F;
  }, U.isPortal = function(c) {
    return x(c) === t;
  }, U.isProfiler = function(c) {
    return x(c) === i;
  }, U.isStrictMode = function(c) {
    return x(c) === o;
  }, U.isSuspense = function(c) {
    return x(c) === O;
  }, U.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === y || c === i || c === o || c === O || c === L || typeof c == "object" && c !== null && (c.$$typeof === k || c.$$typeof === F || c.$$typeof === l || c.$$typeof === u || c.$$typeof === T || c.$$typeof === w || c.$$typeof === P || c.$$typeof === R || c.$$typeof === v);
  }, U.typeOf = x, U;
}
var hr;
function Ur() {
  return hr || (hr = 1, St.exports = mn()), St.exports;
}
var wt, gr;
function hn() {
  if (gr) return wt;
  gr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Tt, yr;
function gn() {
  if (yr) return Tt;
  yr = 1;
  var e = hn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Tt = function() {
    function n(l, u, m, y, T, O) {
      if (O !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Tt;
}
zr.exports = gn()();
var yn = zr.exports;
const h = /* @__PURE__ */ Gt(yn);
function vn(e) {
  const [r, t] = Fr(!1);
  return Mt(() => {
    const n = window.matchMedia(e);
    n.matches !== r && t(n.matches);
    const o = () => {
      t(n.matches);
    };
    return n.addEventListener("change", o), () => n.removeEventListener("change", o);
  }, [r, e]), r;
}
function Me(e) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Me(e);
}
function Lt(e, r) {
  return Lt = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Lt(e, r);
}
function bn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ct(e, r, t) {
  return bn() ? ct = Reflect.construct : ct = function(o, i, l) {
    var u = [null];
    u.push.apply(u, i);
    var m = Function.bind.apply(o, u), y = new m();
    return l && Lt(y, l.prototype), y;
  }, ct.apply(null, arguments);
}
function Se(e) {
  return An(e) || _n(e) || Sn(e) || wn();
}
function An(e) {
  if (Array.isArray(e)) return Dt(e);
}
function _n(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sn(e, r) {
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
function wn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tn = Object.hasOwnProperty, vr = Object.setPrototypeOf, En = Object.isFrozen, Cn = Object.getPrototypeOf, On = Object.getOwnPropertyDescriptor, le = Object.freeze, be = Object.seal, Rn = Object.create, Br = typeof Reflect < "u" && Reflect, dt = Br.apply, Ft = Br.construct;
dt || (dt = function(r, t, n) {
  return r.apply(t, n);
});
le || (le = function(r) {
  return r;
});
be || (be = function(r) {
  return r;
});
Ft || (Ft = function(r, t) {
  return ct(r, Se(t));
});
var kn = Ae(Array.prototype.forEach), br = Ae(Array.prototype.pop), Ke = Ae(Array.prototype.push), ut = Ae(String.prototype.toLowerCase), Et = Ae(String.prototype.toString), Ar = Ae(String.prototype.match), _e = Ae(String.prototype.replace), xn = Ae(String.prototype.indexOf), Nn = Ae(String.prototype.trim), ne = Ae(RegExp.prototype.test), Ct = In(TypeError);
function Ae(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    return dt(e, r, n);
  };
}
function In(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Ft(e, t);
  };
}
function M(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : ut, vr && vr(e, null);
  for (var o = r.length; o--; ) {
    var i = r[o];
    if (typeof i == "string") {
      var l = t(i);
      l !== i && (En(r) || (r[o] = l), i = l);
    }
    e[i] = !0;
  }
  return e;
}
function $e(e) {
  var r = Rn(null), t;
  for (t in e)
    dt(Tn, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function at(e, r) {
  for (; e !== null; ) {
    var t = On(e, r);
    if (t) {
      if (t.get)
        return Ae(t.get);
      if (typeof t.value == "function")
        return Ae(t.value);
    }
    e = Cn(e);
  }
  function n(o) {
    return console.warn("fallback value for", o), null;
  }
  return n;
}
var _r = le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ot = le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rt = le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Pn = le(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kt = le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Mn = le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Sr = le(["#text"]), wr = le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), xt = le(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Tr = le(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ot = le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ln = be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Dn = be(/<%[\w\W]*|[\w\W]*%>/gm), Fn = be(/\${[\w\W]*}/gm), jn = be(/^data-[\-\w.\u00B7-\uFFFF]/), Hn = be(/^aria-[\-\w]+$/), $n = be(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zn = be(/^(?:\w+script|data):/i), Un = be(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bn = be(/^html$/i), Wn = be(/^[a-z][.\w]*(-[.\w]+)+$/i), Gn = function() {
  return typeof window > "u" ? null : window;
}, Vn = function(r, t) {
  if (Me(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, o = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(i, {
      createHTML: function(u) {
        return u;
      },
      createScriptURL: function(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Wr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gn(), r = function(a) {
    return Wr(a);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, o = e.DocumentFragment, i = e.HTMLTemplateElement, l = e.Node, u = e.Element, m = e.NodeFilter, y = e.NamedNodeMap, T = y === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : y, O = e.HTMLFormElement, L = e.DOMParser, F = e.trustedTypes, k = u.prototype, v = at(k, "cloneNode"), w = at(k, "nextSibling"), P = at(k, "childNodes"), R = at(k, "parentNode");
  if (typeof i == "function") {
    var x = n.createElement("template");
    x.content && x.content.ownerDocument && (n = x.content.ownerDocument);
  }
  var C = Vn(F, t), c = C ? C.createHTML("") : "", W = n, ce = W.implementation, ae = W.createNodeIterator, ge = W.createDocumentFragment, we = W.getElementsByTagName, Ie = t.importNode, oe = {};
  try {
    oe = $e(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var q = {};
  r.isSupported = typeof R == "function" && ce && ce.createHTMLDocument !== void 0 && oe !== 9;
  var ue = Ln, ee = Dn, Ee = Fn, me = jn, fe = Hn, De = zn, Ce = Un, Fe = Wn, A = $n, d = null, b = M({}, [].concat(Se(_r), Se(Ot), Se(Rt), Se(kt), Se(Sr))), _ = null, s = M({}, [].concat(Se(wr), Se(xt), Se(Tr), Se(ot))), E = Object.seal(Object.create(null, {
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
  })), p = null, G = null, $ = !0, j = !0, I = !1, Q = !0, Z = !1, D = !0, Y = !1, H = !1, K = !1, ye = !1, X = !1, Oe = !1, Pe = !0, pe = !1, N = "user-content-", V = !0, Re = !1, Te = {}, se = null, Qt = M({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Jt = null, er = M({}, ["audio", "video", "img", "source", "image", "track"]), gt = null, tr = M({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), et = "http://www.w3.org/1998/Math/MathML", tt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml", Be = ke, yt = !1, vt = null, rn = M({}, [et, tt, ke], Et), je, nn = ["application/xhtml+xml", "text/html"], an = "text/html", te, We = null, on = n.createElement("form"), rr = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, bt = function(a) {
    We && We === a || ((!a || Me(a) !== "object") && (a = {}), a = $e(a), je = // eslint-disable-next-line unicorn/prefer-includes
    nn.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? je = an : je = a.PARSER_MEDIA_TYPE, te = je === "application/xhtml+xml" ? Et : ut, d = "ALLOWED_TAGS" in a ? M({}, a.ALLOWED_TAGS, te) : b, _ = "ALLOWED_ATTR" in a ? M({}, a.ALLOWED_ATTR, te) : s, vt = "ALLOWED_NAMESPACES" in a ? M({}, a.ALLOWED_NAMESPACES, Et) : rn, gt = "ADD_URI_SAFE_ATTR" in a ? M(
      $e(tr),
      // eslint-disable-line indent
      a.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      te
      // eslint-disable-line indent
    ) : tr, Jt = "ADD_DATA_URI_TAGS" in a ? M(
      $e(er),
      // eslint-disable-line indent
      a.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      te
      // eslint-disable-line indent
    ) : er, se = "FORBID_CONTENTS" in a ? M({}, a.FORBID_CONTENTS, te) : Qt, p = "FORBID_TAGS" in a ? M({}, a.FORBID_TAGS, te) : {}, G = "FORBID_ATTR" in a ? M({}, a.FORBID_ATTR, te) : {}, Te = "USE_PROFILES" in a ? a.USE_PROFILES : !1, $ = a.ALLOW_ARIA_ATTR !== !1, j = a.ALLOW_DATA_ATTR !== !1, I = a.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = a.SAFE_FOR_TEMPLATES || !1, D = a.SAFE_FOR_XML !== !1, Y = a.WHOLE_DOCUMENT || !1, ye = a.RETURN_DOM || !1, X = a.RETURN_DOM_FRAGMENT || !1, Oe = a.RETURN_TRUSTED_TYPE || !1, K = a.FORCE_BODY || !1, Pe = a.SANITIZE_DOM !== !1, pe = a.SANITIZE_NAMED_PROPS || !1, V = a.KEEP_CONTENT !== !1, Re = a.IN_PLACE || !1, A = a.ALLOWED_URI_REGEXP || A, Be = a.NAMESPACE || ke, E = a.CUSTOM_ELEMENT_HANDLING || {}, a.CUSTOM_ELEMENT_HANDLING && rr(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (E.tagNameCheck = a.CUSTOM_ELEMENT_HANDLING.tagNameCheck), a.CUSTOM_ELEMENT_HANDLING && rr(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (E.attributeNameCheck = a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), a.CUSTOM_ELEMENT_HANDLING && typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (E.allowCustomizedBuiltInElements = a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Z && (j = !1), X && (ye = !0), Te && (d = M({}, Se(Sr)), _ = [], Te.html === !0 && (M(d, _r), M(_, wr)), Te.svg === !0 && (M(d, Ot), M(_, xt), M(_, ot)), Te.svgFilters === !0 && (M(d, Rt), M(_, xt), M(_, ot)), Te.mathMl === !0 && (M(d, kt), M(_, Tr), M(_, ot))), a.ADD_TAGS && (d === b && (d = $e(d)), M(d, a.ADD_TAGS, te)), a.ADD_ATTR && (_ === s && (_ = $e(_)), M(_, a.ADD_ATTR, te)), a.ADD_URI_SAFE_ATTR && M(gt, a.ADD_URI_SAFE_ATTR, te), a.FORBID_CONTENTS && (se === Qt && (se = $e(se)), M(se, a.FORBID_CONTENTS, te)), V && (d["#text"] = !0), Y && M(d, ["html", "head", "body"]), d.table && (M(d, ["tbody"]), delete p.tbody), le && le(a), We = a);
  }, nr = M({}, ["mi", "mo", "mn", "ms", "mtext"]), ar = M({}, ["annotation-xml"]), sn = M({}, ["title", "style", "font", "a", "script"]), rt = M({}, Ot);
  M(rt, Rt), M(rt, Pn);
  var At = M({}, kt);
  M(At, Mn);
  var ln = function(a) {
    var f = R(a);
    (!f || !f.tagName) && (f = {
      namespaceURI: Be,
      tagName: "template"
    });
    var g = ut(a.tagName), z = ut(f.tagName);
    return vt[a.namespaceURI] ? a.namespaceURI === tt ? f.namespaceURI === ke ? g === "svg" : f.namespaceURI === et ? g === "svg" && (z === "annotation-xml" || nr[z]) : !!rt[g] : a.namespaceURI === et ? f.namespaceURI === ke ? g === "math" : f.namespaceURI === tt ? g === "math" && ar[z] : !!At[g] : a.namespaceURI === ke ? f.namespaceURI === tt && !ar[z] || f.namespaceURI === et && !nr[z] ? !1 : !At[g] && (sn[g] || !rt[g]) : !!(je === "application/xhtml+xml" && vt[a.namespaceURI]) : !1;
  }, ve = function(a) {
    Ke(r.removed, {
      element: a
    });
    try {
      a.parentNode.removeChild(a);
    } catch {
      try {
        a.outerHTML = c;
      } catch {
        a.remove();
      }
    }
  }, nt = function(a, f) {
    try {
      Ke(r.removed, {
        attribute: f.getAttributeNode(a),
        from: f
      });
    } catch {
      Ke(r.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(a), a === "is" && !_[a])
      if (ye || X)
        try {
          ve(f);
        } catch {
        }
      else
        try {
          f.setAttribute(a, "");
        } catch {
        }
  }, or = function(a) {
    var f, g;
    if (K)
      a = "<remove></remove>" + a;
    else {
      var z = Ar(a, /^[\r\n\t ]+/);
      g = z && z[0];
    }
    je === "application/xhtml+xml" && Be === ke && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    var de = C ? C.createHTML(a) : a;
    if (Be === ke)
      try {
        f = new L().parseFromString(de, je);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = ce.createDocument(Be, "template", null);
      try {
        f.documentElement.innerHTML = yt ? c : de;
      } catch {
      }
    }
    var ie = f.body || f.documentElement;
    return a && g && ie.insertBefore(n.createTextNode(g), ie.childNodes[0] || null), Be === ke ? we.call(f, Y ? "html" : "body")[0] : Y ? f.documentElement : ie;
  }, ir = function(a) {
    return ae.call(
      a.ownerDocument || a,
      a,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, sr = function(a) {
    return a instanceof O && (typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || !(a.attributes instanceof T) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function");
  }, Xe = function(a) {
    return Me(l) === "object" ? a instanceof l : a && Me(a) === "object" && typeof a.nodeType == "number" && typeof a.nodeName == "string";
  }, xe = function(a, f, g) {
    q[a] && kn(q[a], function(z) {
      z.call(r, f, g, We);
    });
  }, lr = function(a) {
    var f;
    if (xe("beforeSanitizeElements", a, null), sr(a) || ne(/[\u0080-\uFFFF]/, a.nodeName))
      return ve(a), !0;
    var g = te(a.nodeName);
    if (xe("uponSanitizeElement", a, {
      tagName: g,
      allowedTags: d
    }), a.hasChildNodes() && !Xe(a.firstElementChild) && (!Xe(a.content) || !Xe(a.content.firstElementChild)) && ne(/<[/\w]/g, a.innerHTML) && ne(/<[/\w]/g, a.textContent) || g === "select" && ne(/<template/i, a.innerHTML) || a.nodeType === 7 || D && a.nodeType === 8 && ne(/<[/\w]/g, a.data))
      return ve(a), !0;
    if (!d[g] || p[g]) {
      if (!p[g] && ur(g) && (E.tagNameCheck instanceof RegExp && ne(E.tagNameCheck, g) || E.tagNameCheck instanceof Function && E.tagNameCheck(g)))
        return !1;
      if (V && !se[g]) {
        var z = R(a) || a.parentNode, de = P(a) || a.childNodes;
        if (de && z)
          for (var ie = de.length, re = ie - 1; re >= 0; --re) {
            var He = v(de[re], !0);
            He.__removalCount = (a.__removalCount || 0) + 1, z.insertBefore(He, w(a));
          }
      }
      return ve(a), !0;
    }
    return a instanceof u && !ln(a) || (g === "noscript" || g === "noembed" || g === "noframes") && ne(/<\/no(script|embed|frames)/i, a.innerHTML) ? (ve(a), !0) : (Z && a.nodeType === 3 && (f = a.textContent, f = _e(f, ue, " "), f = _e(f, ee, " "), f = _e(f, Ee, " "), a.textContent !== f && (Ke(r.removed, {
      element: a.cloneNode()
    }), a.textContent = f)), xe("afterSanitizeElements", a, null), !1);
  }, cr = function(a, f, g) {
    if (Pe && (f === "id" || f === "name") && (g in n || g in on))
      return !1;
    if (!(j && !G[f] && ne(me, f))) {
      if (!($ && ne(fe, f))) {
        if (!_[f] || G[f]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ur(a) && (E.tagNameCheck instanceof RegExp && ne(E.tagNameCheck, a) || E.tagNameCheck instanceof Function && E.tagNameCheck(a)) && (E.attributeNameCheck instanceof RegExp && ne(E.attributeNameCheck, f) || E.attributeNameCheck instanceof Function && E.attributeNameCheck(f)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            f === "is" && E.allowCustomizedBuiltInElements && (E.tagNameCheck instanceof RegExp && ne(E.tagNameCheck, g) || E.tagNameCheck instanceof Function && E.tagNameCheck(g)))
          ) return !1;
        } else if (!gt[f]) {
          if (!ne(A, _e(g, Ce, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && a !== "script" && xn(g, "data:") === 0 && Jt[a])) {
              if (!(I && !ne(De, _e(g, Ce, "")))) {
                if (g)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ur = function(a) {
    return a !== "annotation-xml" && Ar(a, Fe);
  }, fr = function(a) {
    var f, g, z, de;
    xe("beforeSanitizeAttributes", a, null);
    var ie = a.attributes;
    if (ie) {
      var re = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: _
      };
      for (de = ie.length; de--; ) {
        f = ie[de];
        var He = f, J = He.name, _t = He.namespaceURI;
        if (g = J === "value" ? f.value : Nn(f.value), z = te(J), re.attrName = z, re.attrValue = g, re.keepAttr = !0, re.forceKeepAttr = void 0, xe("uponSanitizeAttribute", a, re), g = re.attrValue, !re.forceKeepAttr && (nt(J, a), !!re.keepAttr)) {
          if (!Q && ne(/\/>/i, g)) {
            nt(J, a);
            continue;
          }
          Z && (g = _e(g, ue, " "), g = _e(g, ee, " "), g = _e(g, Ee, " "));
          var pr = te(a.nodeName);
          if (cr(pr, z, g)) {
            if (pe && (z === "id" || z === "name") && (nt(J, a), g = N + g), D && ne(/((--!?|])>)|<\/(style|title)/i, g)) {
              nt(J, a);
              continue;
            }
            if (C && Me(F) === "object" && typeof F.getAttributeType == "function" && !_t)
              switch (F.getAttributeType(pr, z)) {
                case "TrustedHTML": {
                  g = C.createHTML(g);
                  break;
                }
                case "TrustedScriptURL": {
                  g = C.createScriptURL(g);
                  break;
                }
              }
            try {
              _t ? a.setAttributeNS(_t, J, g) : a.setAttribute(J, g), sr(a) ? ve(a) : br(r.removed);
            } catch {
            }
          }
        }
      }
      xe("afterSanitizeAttributes", a, null);
    }
  }, cn = function S(a) {
    var f, g = ir(a);
    for (xe("beforeSanitizeShadowDOM", a, null); f = g.nextNode(); )
      xe("uponSanitizeShadowNode", f, null), !lr(f) && (f.content instanceof o && S(f.content), fr(f));
    xe("afterSanitizeShadowDOM", a, null);
  };
  return r.sanitize = function(S) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f, g, z, de, ie;
    if (yt = !S, yt && (S = "<!-->"), typeof S != "string" && !Xe(S))
      if (typeof S.toString == "function") {
        if (S = S.toString(), typeof S != "string")
          throw Ct("dirty is not a string, aborting");
      } else
        throw Ct("toString is not a function");
    if (!r.isSupported) {
      if (Me(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof S == "string")
          return e.toStaticHTML(S);
        if (Xe(S))
          return e.toStaticHTML(S.outerHTML);
      }
      return S;
    }
    if (H || bt(a), r.removed = [], typeof S == "string" && (Re = !1), Re) {
      if (S.nodeName) {
        var re = te(S.nodeName);
        if (!d[re] || p[re])
          throw Ct("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (S instanceof l)
      f = or("<!---->"), g = f.ownerDocument.importNode(S, !0), g.nodeType === 1 && g.nodeName === "BODY" || g.nodeName === "HTML" ? f = g : f.appendChild(g);
    else {
      if (!ye && !Z && !Y && // eslint-disable-next-line unicorn/prefer-includes
      S.indexOf("<") === -1)
        return C && Oe ? C.createHTML(S) : S;
      if (f = or(S), !f)
        return ye ? null : Oe ? c : "";
    }
    f && K && ve(f.firstChild);
    for (var He = ir(Re ? S : f); z = He.nextNode(); )
      z.nodeType === 3 && z === de || lr(z) || (z.content instanceof o && cn(z.content), fr(z), de = z);
    if (de = null, Re)
      return S;
    if (ye) {
      if (X)
        for (ie = ge.call(f.ownerDocument); f.firstChild; )
          ie.appendChild(f.firstChild);
      else
        ie = f;
      return (_.shadowroot || _.shadowrootmod) && (ie = Ie.call(t, ie, !0)), ie;
    }
    var J = Y ? f.outerHTML : f.innerHTML;
    return Y && d["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && ne(Bn, f.ownerDocument.doctype.name) && (J = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + J), Z && (J = _e(J, ue, " "), J = _e(J, ee, " "), J = _e(J, Ee, " ")), C && Oe ? C.createHTML(J) : J;
  }, r.setConfig = function(S) {
    bt(S), H = !0;
  }, r.clearConfig = function() {
    We = null, H = !1;
  }, r.isValidAttribute = function(S, a, f) {
    We || bt({});
    var g = te(S), z = te(a);
    return cr(g, z, f);
  }, r.addHook = function(S, a) {
    typeof a == "function" && (q[S] = q[S] || [], Ke(q[S], a));
  }, r.removeHook = function(S) {
    if (q[S])
      return br(q[S]);
  }, r.removeHooks = function(S) {
    q[S] && (q[S] = []);
  }, r.removeAllHooks = function() {
    q = {};
  }, r;
}
Wr();
function Yn(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
let Nt = !1;
const qn = (e, r) => {
  Nt || (Nt = !0, setTimeout(() => {
    e(), Nt = !1;
  }, r));
};
let Er;
const Xn = (e, r) => {
  window.clearTimeout(Er), Er = window.setTimeout(e, r);
};
h.shape({
  event: h.string,
  action: h.string,
  name: h.string,
  region: h.string,
  section: h.string,
  component: h.string,
  type: h.string,
  text: h.string
});
const Zn = ({
  event: e = "",
  action: r = "",
  name: t = "",
  type: n = "",
  section: o = "",
  text: i = "",
  region: l = "",
  component: u = ""
}) => {
  const { dataLayer: m } = window, y = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: o.toLowerCase(),
    text: i.toLowerCase(),
    component: u.toLowerCase()
  };
  m && m.push(y);
};
h.shape({
  url: h.string,
  altText: h.string,
  cssClass: h.arrayOf(h.string),
  size: h.oneOf(["small", "medium", "large"])
});
h.shape({
  text: h.string,
  maxWidth: h.string,
  cssClass: h.arrayOf(h.string),
  highlightColor: h.oneOf(["gold", "black"])
});
h.shape({
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  content: h.shape({
    icon: h.string,
    header: h.string,
    body: h.string
  })
});
const Kn = h.shape({
  text: h.string,
  name: h.string,
  event: h.string,
  action: h.string,
  type: h.string,
  region: h.string,
  section: h.string,
  component: h.string
}), Qn = "staticMarkup";
function Jn() {
  const r = un().indexOf(Qn) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Gr = ({ gaData: e, prefix: r = "", children: t }) => {
  const { isReact: n } = Jn(), { onClick: o, ...i } = t.props;
  if (n)
    return Ue.cloneElement(t, {
      ...i,
      onClick: (m) => (Zn(e), o ? o(m) : !0)
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
  return Ue.cloneElement(t, {
    ...i,
    onClick: o,
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
  block: o,
  color: i,
  disabled: l,
  element: u,
  href: m,
  icon: y,
  innerRef: T,
  onClick: O,
  size: L,
  classes: F,
  target: k,
  ...v
}) => {
  const w = Ge("btn", {
    [`btn-${i}`]: !0,
    "btn-md": L === "small",
    "btn-sm": L === "xsmall",
    "btn-block": o,
    disabled: l
  });
  let P = u;
  return m && u === "button" && (P = "a"), /* @__PURE__ */ he.jsx(
    Gr,
    {
      gaData: {
        ...ea,
        section: r,
        // @deprecated - remove at some point
        ...t,
        text: e
      },
      children: /* @__PURE__ */ he.jsxs(
        P,
        {
          type: P === "button" && O ? "button" : void 0,
          ...v,
          className: Ge(F) || w,
          href: m,
          ref: T,
          onClick: O,
          "aria-label": n,
          target: P === "a" ? k : null,
          children: [
            y && /* @__PURE__ */ he.jsx("i", { className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} me-1` }),
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
  label: h.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: h.string,
  /**
   * Google Analytics event data
   */
  gaData: Kn,
  /**
    ARIA label for accessibility
  */
  ariaLabel: h.string,
  /**
    Render button as a block-button?
  */
  block: h.bool,
  /**
    Button background color
  */
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: h.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: h.oneOfType([
    h.func,
    h.string,
    h.shape({ $$typeof: h.symbol, render: h.func }),
    h.arrayOf(
      h.oneOfType([
        h.func,
        h.string,
        h.shape({ $$typeof: h.symbol, render: h.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: h.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: h.arrayOf(h.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: h.oneOfType([
    h.object,
    h.func,
    h.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: h.func,
  /**
    Button size
  */
  size: h.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: h.arrayOf(h.string),
  /**
   Link target type
   */
  target: h.oneOf(["_blank", "_self", "_top", "_parent"])
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
var Yt = Ur();
function ta(e) {
  function r(A, d, b, _, s) {
    for (var E = 0, p = 0, G = 0, $ = 0, j, I, Q = 0, Z = 0, D, Y = D = j = 0, H = 0, K = 0, ye = 0, X = 0, Oe = b.length, Pe = Oe - 1, pe, N = "", V = "", Re = "", Te = "", se; H < Oe; ) {
      if (I = b.charCodeAt(H), H === Pe && p + $ + G + E !== 0 && (p !== 0 && (I = p === 47 ? 10 : 47), $ = G = E = 0, Oe++, Pe++), p + $ + G + E === 0) {
        if (H === Pe && (0 < K && (N = N.replace(L, "")), 0 < N.trim().length)) {
          switch (I) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              N += b.charAt(H);
          }
          I = 59;
        }
        switch (I) {
          case 123:
            for (N = N.trim(), j = N.charCodeAt(0), D = 1, X = ++H; H < Oe; ) {
              switch (I = b.charCodeAt(H)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (I = b.charCodeAt(H + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = H + 1; Y < Pe; ++Y)
                          switch (b.charCodeAt(Y)) {
                            case 47:
                              if (I === 42 && b.charCodeAt(Y - 1) === 42 && H + 2 !== Y) {
                                H = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (I === 47) {
                                H = Y + 1;
                                break e;
                              }
                          }
                        H = Y;
                      }
                  }
                  break;
                case 91:
                  I++;
                case 40:
                  I++;
                case 34:
                case 39:
                  for (; H++ < Pe && b.charCodeAt(H) !== I; )
                    ;
              }
              if (D === 0) break;
              H++;
            }
            switch (D = b.substring(X, H), j === 0 && (j = (N = N.replace(O, "").trim()).charCodeAt(0)), j) {
              case 64:
                switch (0 < K && (N = N.replace(L, "")), I = N.charCodeAt(1), I) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    K = d;
                    break;
                  default:
                    K = Ee;
                }
                if (D = r(d, K, D, I, s + 1), X = D.length, 0 < fe && (K = t(Ee, N, ye), se = u(3, D, K, d, q, oe, X, I, s, _), N = K.join(""), se !== void 0 && (X = (D = se.trim()).length) === 0 && (I = 0, D = "")), 0 < X) switch (I) {
                  case 115:
                    N = N.replace(W, l);
                  case 100:
                  case 109:
                  case 45:
                    D = N + "{" + D + "}";
                    break;
                  case 107:
                    N = N.replace(R, "$1 $2"), D = N + "{" + D + "}", D = ee === 1 || ee === 2 && i("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                    break;
                  default:
                    D = N + D, _ === 112 && (D = (V += D, ""));
                }
                else D = "";
                break;
              default:
                D = r(d, t(d, N, ye), D, _, s + 1);
            }
            Re += D, D = ye = K = Y = j = 0, N = "", I = b.charCodeAt(++H);
            break;
          case 125:
          case 59:
            if (N = (0 < K ? N.replace(L, "") : N).trim(), 1 < (X = N.length)) switch (Y === 0 && (j = N.charCodeAt(0), j === 45 || 96 < j && 123 > j) && (X = (N = N.replace(" ", ":")).length), 0 < fe && (se = u(1, N, d, A, q, oe, V.length, _, s, _)) !== void 0 && (X = (N = se.trim()).length) === 0 && (N = "\0\0"), j = N.charCodeAt(0), I = N.charCodeAt(1), j) {
              case 0:
                break;
              case 64:
                if (I === 105 || I === 99) {
                  Te += N + b.charAt(H);
                  break;
                }
              default:
                N.charCodeAt(X - 1) !== 58 && (V += o(N, j, I, N.charCodeAt(2)));
            }
            ye = K = Y = j = 0, N = "", I = b.charCodeAt(++H);
        }
      }
      switch (I) {
        case 13:
        case 10:
          p === 47 ? p = 0 : 1 + j === 0 && _ !== 107 && 0 < N.length && (K = 1, N += "\0"), 0 < fe * Ce && u(0, N, d, A, q, oe, V.length, _, s, _), oe = 1, q++;
          break;
        case 59:
        case 125:
          if (p + $ + G + E === 0) {
            oe++;
            break;
          }
        default:
          switch (oe++, pe = b.charAt(H), I) {
            case 9:
            case 32:
              if ($ + E + p === 0) switch (Q) {
                case 44:
                case 58:
                case 9:
                case 32:
                  pe = "";
                  break;
                default:
                  I !== 32 && (pe = " ");
              }
              break;
            case 0:
              pe = "\\0";
              break;
            case 12:
              pe = "\\f";
              break;
            case 11:
              pe = "\\v";
              break;
            case 38:
              $ + p + E === 0 && (K = ye = 1, pe = "\f" + pe);
              break;
            case 108:
              if ($ + p + E + ue === 0 && 0 < Y) switch (H - Y) {
                case 2:
                  Q === 112 && b.charCodeAt(H - 3) === 58 && (ue = Q);
                case 8:
                  Z === 111 && (ue = Z);
              }
              break;
            case 58:
              $ + p + E === 0 && (Y = H);
              break;
            case 44:
              p + G + $ + E === 0 && (K = 1, pe += "\r");
              break;
            case 34:
            case 39:
              p === 0 && ($ = $ === I ? 0 : $ === 0 ? I : $);
              break;
            case 91:
              $ + p + G === 0 && E++;
              break;
            case 93:
              $ + p + G === 0 && E--;
              break;
            case 41:
              $ + p + E === 0 && G--;
              break;
            case 40:
              if ($ + p + E === 0) {
                if (j === 0) switch (2 * Q + 3 * Z) {
                  case 533:
                    break;
                  default:
                    j = 1;
                }
                G++;
              }
              break;
            case 64:
              p + G + $ + E + Y + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < $ + E + G)) switch (p) {
                case 0:
                  switch (2 * I + 3 * b.charCodeAt(H + 1)) {
                    case 235:
                      p = 47;
                      break;
                    case 220:
                      X = H, p = 42;
                  }
                  break;
                case 42:
                  I === 47 && Q === 42 && X + 2 !== H && (b.charCodeAt(X + 2) === 33 && (V += b.substring(X, H + 1)), pe = "", p = 0);
              }
          }
          p === 0 && (N += pe);
      }
      Z = Q, Q = I, H++;
    }
    if (X = V.length, 0 < X) {
      if (K = d, 0 < fe && (se = u(2, V, K, A, q, oe, X, _, s, _), se !== void 0 && (V = se).length === 0)) return Te + V + Re;
      if (V = K.join(",") + "{" + V + "}", ee * ue !== 0) {
        switch (ee !== 2 || i(V, 2) || (ue = 0), ue) {
          case 111:
            V = V.replace(C, ":-moz-$1") + V;
            break;
          case 112:
            V = V.replace(x, "::-webkit-input-$1") + V.replace(x, "::-moz-$1") + V.replace(x, ":-ms-input-$1") + V;
        }
        ue = 0;
      }
    }
    return Te + V + Re;
  }
  function t(A, d, b) {
    var _ = d.trim().split(w);
    d = _;
    var s = _.length, E = A.length;
    switch (E) {
      case 0:
      case 1:
        var p = 0;
        for (A = E === 0 ? "" : A[0] + " "; p < s; ++p)
          d[p] = n(A, d[p], b).trim();
        break;
      default:
        var G = p = 0;
        for (d = []; p < s; ++p)
          for (var $ = 0; $ < E; ++$)
            d[G++] = n(A[$] + " ", _[p], b).trim();
    }
    return d;
  }
  function n(A, d, b) {
    var _ = d.charCodeAt(0);
    switch (33 > _ && (_ = (d = d.trim()).charCodeAt(0)), _) {
      case 38:
        return d.replace(P, "$1" + A.trim());
      case 58:
        return A.trim() + d.replace(P, "$1" + A.trim());
      default:
        if (0 < 1 * b && 0 < d.indexOf("\f")) return d.replace(P, (A.charCodeAt(0) === 58 ? "" : "$1") + A.trim());
    }
    return A + d;
  }
  function o(A, d, b, _) {
    var s = A + ";", E = 2 * d + 3 * b + 4 * _;
    if (E === 944) {
      A = s.indexOf(":", 9) + 1;
      var p = s.substring(A, s.length - 1).trim();
      return p = s.substring(0, A).trim() + p + ";", ee === 1 || ee === 2 && i(p, 1) ? "-webkit-" + p + p : p;
    }
    if (ee === 0 || ee === 2 && !i(s, 1)) return s;
    switch (E) {
      case 1015:
        return s.charCodeAt(10) === 97 ? "-webkit-" + s + s : s;
      case 951:
        return s.charCodeAt(3) === 116 ? "-webkit-" + s + s : s;
      case 963:
        return s.charCodeAt(5) === 110 ? "-webkit-" + s + s : s;
      case 1009:
        if (s.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + s + s;
      case 978:
        return "-webkit-" + s + "-moz-" + s + s;
      case 1019:
      case 983:
        return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
      case 883:
        if (s.charCodeAt(8) === 45) return "-webkit-" + s + s;
        if (0 < s.indexOf("image-set(", 11)) return s.replace(Ie, "$1-webkit-$2") + s;
        break;
      case 932:
        if (s.charCodeAt(4) === 45) switch (s.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
          case 115:
            return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
          case 98:
            return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s;
        }
        return "-webkit-" + s + "-ms-" + s + s;
      case 964:
        return "-webkit-" + s + "-ms-flex-" + s + s;
      case 1023:
        if (s.charCodeAt(8) !== 99) break;
        return p = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + p + "-webkit-" + s + "-ms-flex-pack" + p + s;
      case 1005:
        return k.test(s) ? s.replace(F, ":-webkit-") + s.replace(F, ":-moz-") + s : s;
      case 1e3:
        switch (p = s.substring(13).trim(), d = p.indexOf("-") + 1, p.charCodeAt(0) + p.charCodeAt(d)) {
          case 226:
            p = s.replace(c, "tb");
            break;
          case 232:
            p = s.replace(c, "tb-rl");
            break;
          case 220:
            p = s.replace(c, "lr");
            break;
          default:
            return s;
        }
        return "-webkit-" + s + "-ms-" + p + s;
      case 1017:
        if (s.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (d = (s = A).length - 10, p = (s.charCodeAt(d) === 33 ? s.substring(0, d) : s).substring(A.indexOf(":", 7) + 1).trim(), E = p.charCodeAt(0) + (p.charCodeAt(7) | 0)) {
          case 203:
            if (111 > p.charCodeAt(8)) break;
          case 115:
            s = s.replace(p, "-webkit-" + p) + ";" + s;
            break;
          case 207:
          case 102:
            s = s.replace(p, "-webkit-" + (102 < E ? "inline-" : "") + "box") + ";" + s.replace(p, "-webkit-" + p) + ";" + s.replace(p, "-ms-" + p + "box") + ";" + s;
        }
        return s + ";";
      case 938:
        if (s.charCodeAt(5) === 45) switch (s.charCodeAt(6)) {
          case 105:
            return p = s.replace("-items", ""), "-webkit-" + s + "-webkit-box-" + p + "-ms-flex-" + p + s;
          case 115:
            return "-webkit-" + s + "-ms-flex-item-" + s.replace(ae, "") + s;
          default:
            return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(ae, "") + s;
        }
        break;
      case 973:
      case 989:
        if (s.charCodeAt(3) !== 45 || s.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (we.test(A) === !0) return (p = A.substring(A.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(A.replace("stretch", "fill-available"), d, b, _).replace(":fill-available", ":stretch") : s.replace(p, "-webkit-" + p) + s.replace(p, "-moz-" + p.replace("fill-", "")) + s;
        break;
      case 962:
        if (s = "-webkit-" + s + (s.charCodeAt(5) === 102 ? "-ms-" + s : "") + s, b + _ === 211 && s.charCodeAt(13) === 105 && 0 < s.indexOf("transform", 10)) return s.substring(0, s.indexOf(";", 27) + 1).replace(v, "$1-webkit-$2") + s;
    }
    return s;
  }
  function i(A, d) {
    var b = A.indexOf(d === 1 ? ":" : "{"), _ = A.substring(0, d !== 3 ? b : 10);
    return b = A.substring(b + 1, A.length - 1), De(d !== 2 ? _ : _.replace(ge, "$1"), b, d);
  }
  function l(A, d) {
    var b = o(d, d.charCodeAt(0), d.charCodeAt(1), d.charCodeAt(2));
    return b !== d + ";" ? b.replace(ce, " or ($1)").substring(4) : "(" + d + ")";
  }
  function u(A, d, b, _, s, E, p, G, $, j) {
    for (var I = 0, Q = d, Z; I < fe; ++I)
      switch (Z = me[I].call(T, A, Q, b, _, s, E, p, G, $, j)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Q = Z;
      }
    if (Q !== d) return Q;
  }
  function m(A) {
    switch (A) {
      case void 0:
      case null:
        fe = me.length = 0;
        break;
      default:
        if (typeof A == "function") me[fe++] = A;
        else if (typeof A == "object") for (var d = 0, b = A.length; d < b; ++d)
          m(A[d]);
        else Ce = !!A | 0;
    }
    return m;
  }
  function y(A) {
    return A = A.prefix, A !== void 0 && (De = null, A ? typeof A != "function" ? ee = 1 : (ee = 2, De = A) : ee = 0), y;
  }
  function T(A, d) {
    var b = A;
    if (33 > b.charCodeAt(0) && (b = b.trim()), Fe = b, b = [Fe], 0 < fe) {
      var _ = u(-1, d, b, b, q, oe, 0, 0, 0, 0);
      _ !== void 0 && typeof _ == "string" && (d = _);
    }
    var s = r(Ee, b, d, 0, 0);
    return 0 < fe && (_ = u(-2, s, b, b, q, oe, s.length, 0, 0, 0), _ !== void 0 && (s = _)), Fe = "", ue = 0, oe = q = 1, s;
  }
  var O = /^\0+/g, L = /[\0\r\f]/g, F = /: */g, k = /zoo|gra/, v = /([,: ])(transform)/g, w = /,\r+?/g, P = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, x = /::(place)/g, C = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, W = /\(\s*(.*)\s*\)/g, ce = /([\s\S]*?);/g, ae = /-self|flex-/g, ge = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, Ie = /([^-])(image-set\()/, oe = 1, q = 1, ue = 0, ee = 1, Ee = [], me = [], fe = 0, De = null, Ce = 0, Fe = "";
  return T.use = m, T.set = y, e !== void 0 && y(e), T;
}
var ra = {
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
function na(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var aa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cr = /* @__PURE__ */ na(
  function(e) {
    return aa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qt = Ur(), oa = {
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
}, ia = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, sa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Vr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xt = {};
Xt[qt.ForwardRef] = sa;
Xt[qt.Memo] = Vr;
function Or(e) {
  return qt.isMemo(e) ? Vr : Xt[e.$$typeof] || oa;
}
var la = Object.defineProperty, ca = Object.getOwnPropertyNames, Rr = Object.getOwnPropertySymbols, ua = Object.getOwnPropertyDescriptor, fa = Object.getPrototypeOf, kr = Object.prototype;
function Yr(e, r, t) {
  if (typeof r != "string") {
    if (kr) {
      var n = fa(r);
      n && n !== kr && Yr(e, n, t);
    }
    var o = ca(r);
    Rr && (o = o.concat(Rr(r)));
    for (var i = Or(e), l = Or(r), u = 0; u < o.length; ++u) {
      var m = o[u];
      if (!ia[m] && !(t && t[m]) && !(l && l[m]) && !(i && i[m])) {
        var y = ua(r, m);
        try {
          la(e, m, y);
        } catch {
        }
      }
    }
  }
  return e;
}
var pa = Yr;
const da = /* @__PURE__ */ Gt(pa);
var B = { env: { NODE_ENV: "production" } };
function Ne() {
  return (Ne = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var xr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, jt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Yt.typeOf(e);
}, mt = Object.freeze([]), Le = Object.freeze({});
function Je(e) {
  return typeof e == "function";
}
function Ht(e) {
  return B.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ve = typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_ATTR || B.env.SC_ATTR) || "data-styled", Kt = typeof window < "u" && "HTMLElement" in window, ma = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && B.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? B.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && B.env.REACT_APP_SC_DISABLE_SPEEDY : B.env.SC_DISABLE_SPEEDY !== void 0 && B.env.SC_DISABLE_SPEEDY !== "" ? B.env.SC_DISABLE_SPEEDY !== "false" && B.env.SC_DISABLE_SPEEDY : B.env.NODE_ENV !== "production")), ha = B.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ga() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function qe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw B.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ga.apply(void 0, [ha[e]].concat(t)).trim());
}
var ya = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; t >= l; ) (l <<= 1) < 0 && qe(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var m = this.indexOfGroup(t + 1), y = 0, T = n.length; y < T; y++) this.tag.insertRule(m, n[y]) && (this.groupSizes[t]++, m++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n;
      this.groupSizes[t] = 0;
      for (var l = o; l < i; l++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], i = this.indexOfGroup(t), l = i + o, u = i; u < l; u++) n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), ft = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Qe = 1, it = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; ht.has(Qe); ) Qe++;
  var r = Qe++;
  return B.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && qe(16, "" + r), ft.set(e, r), ht.set(r, e), r;
}, va = function(e) {
  return ht.get(e);
}, ba = function(e, r) {
  r >= Qe && (Qe = r + 1), ft.set(e, r), ht.set(r, e);
}, Aa = "style[" + Ve + '][data-styled-version="5.3.11"]', _a = new RegExp("^" + Ve + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Sa = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, l = o.length; i < l; i++) (n = o[i]) && e.registerName(r, n);
}, wa = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = t.length; o < i; o++) {
    var l = t[o].trim();
    if (l) {
      var u = l.match(_a);
      if (u) {
        var m = 0 | parseInt(u[1], 10), y = u[2];
        m !== 0 && (ba(y, m), Sa(e, y, u[3]), e.getTag().insertRules(m, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, Ta = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, qr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(u) {
    for (var m = u.childNodes, y = m.length; y >= 0; y--) {
      var T = m[y];
      if (T && T.nodeType === 1 && T.hasAttribute(Ve)) return T;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ve, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = Ta();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, i), n;
}, Ea = function() {
  function e(t) {
    var n = this.element = qr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var m = i[l];
        if (m.ownerNode === o) return m;
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
}(), Ca = function() {
  function e(t) {
    var n = this.element = qr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), i = this.nodes[t];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Oa = function() {
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
}(), Nr = Kt, Ra = { isServer: !Kt, useCSSOMInjection: !ma }, Xr = function() {
  function e(t, n, o) {
    t === void 0 && (t = Le), n === void 0 && (n = {}), this.options = Ne({}, Ra, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Kt && Nr && (Nr = !1, function(i) {
      for (var l = document.querySelectorAll(Aa), u = 0, m = l.length; u < m; u++) {
        var y = l[u];
        y && y.getAttribute(Ve) !== "active" && (wa(i, y), y.parentNode && y.parentNode.removeChild(y));
      }
    }(this));
  }
  e.registerId = function(t) {
    return it(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ne({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, l = n.target, t = o ? new Oa(l) : i ? new Ea(l) : new Ca(l), new ya(t)));
    var t, n, o, i, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (it(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(it(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(it(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, i = "", l = 0; l < o; l++) {
        var u = va(l);
        if (u !== void 0) {
          var m = t.names.get(u), y = n.getGroup(l);
          if (m && y && m.size) {
            var T = Ve + ".g" + l + '[id="' + u + '"]', O = "";
            m !== void 0 && m.forEach(function(L) {
              L.length > 0 && (O += L + ",");
            }), i += "" + y + T + '{content:"' + O + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), ka = /(a)(d)/gi, Ir = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $t(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Ir(r % 52) + t;
  return (Ir(r % 52) + t).replace(ka, "$1-$2");
}
var ze = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Zr = function(e) {
  return ze(5381, e);
};
function xa(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Je(t) && !Zt(t)) return !1;
  }
  return !0;
}
var Na = Zr("5.3.11"), Ia = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = B.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && xa(r), this.componentId = t, this.baseHash = ze(Na, t), this.baseStyle = n, Xr.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = Ye(this.rules, r, t, n).join(""), u = $t(ze(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(o, u)) {
        var m = n(l, "." + u, void 0, o);
        t.insertRules(o, u, m);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var y = this.rules.length, T = ze(this.baseHash, n.hash), O = "", L = 0; L < y; L++) {
        var F = this.rules[L];
        if (typeof F == "string") O += F, B.env.NODE_ENV !== "production" && (T = ze(T, F + L));
        else if (F) {
          var k = Ye(F, r, t, n), v = Array.isArray(k) ? k.join("") : k;
          T = ze(T, v + L), O += v;
        }
      }
      if (O) {
        var w = $t(T >>> 0);
        if (!t.hasNameForId(o, w)) {
          var P = n(O, "." + w, void 0, o);
          t.insertRules(o, w, P);
        }
        i.push(w);
      }
    }
    return i.join(" ");
  }, e;
}(), Pa = /^\s*\/\/.*$/gm, Ma = [":", "[", ".", "#"];
function La(e) {
  var r, t, n, o, i = Le, l = i.options, u = l === void 0 ? Le : l, m = i.plugins, y = m === void 0 ? mt : m, T = new ta(u), O = [], L = /* @__PURE__ */ function(v) {
    function w(P) {
      if (P) try {
        v(P + "}");
      } catch {
      }
    }
    return function(P, R, x, C, c, W, ce, ae, ge, we) {
      switch (P) {
        case 1:
          if (ge === 0 && R.charCodeAt(0) === 64) return v(R + ";"), "";
          break;
        case 2:
          if (ae === 0) return R + "/*|*/";
          break;
        case 3:
          switch (ae) {
            case 102:
            case 112:
              return v(x[0] + R), "";
            default:
              return R + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(w);
      }
    };
  }(function(v) {
    O.push(v);
  }), F = function(v, w, P) {
    return w === 0 && Ma.indexOf(P[t.length]) !== -1 || P.match(o) ? v : "." + r;
  };
  function k(v, w, P, R) {
    R === void 0 && (R = "&");
    var x = v.replace(Pa, ""), C = w && P ? P + " " + w + " { " + x + " }" : x;
    return r = R, t = w, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), T(P || !w ? "" : w, C);
  }
  return T.use([].concat(y, [function(v, w, P) {
    v === 2 && P.length && P[0].lastIndexOf(t) > 0 && (P[0] = P[0].replace(n, F));
  }, L, function(v) {
    if (v === -2) {
      var w = O;
      return O = [], w;
    }
  }])), k.hash = y.length ? y.reduce(function(v, w) {
    return w.name || qe(15), ze(v, w.name);
  }, 5381).toString() : "", k;
}
var Kr = Ue.createContext();
Kr.Consumer;
var Qr = Ue.createContext(), Da = (Qr.Consumer, new Xr()), zt = La();
function Fa() {
  return Wt(Kr) || Da;
}
function ja() {
  return Wt(Qr) || zt;
}
var Ha = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = zt);
      var l = n.name + i.hash;
      o.hasNameForId(n.id, l) || o.insertRules(n.id, l, i(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return qe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = zt), this.name + r.hash;
  }, e;
}(), $a = /([A-Z])/, za = /([A-Z])/g, Ua = /^ms-/, Ba = function(e) {
  return "-" + e.toLowerCase();
};
function Pr(e) {
  return $a.test(e) ? e.replace(za, Ba).replace(Ua, "-ms-") : e;
}
var Mr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ye(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1) (o = Ye(e[l], r, t, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Mr(e)) return "";
  if (Zt(e)) return "." + e.styledComponentId;
  if (Je(e)) {
    if (typeof (y = e) != "function" || y.prototype && y.prototype.isReactComponent || !r) return e;
    var m = e(r);
    return B.env.NODE_ENV !== "production" && Yt.isElement(m) && console.warn(Ht(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ye(m, r, t, n);
  }
  var y;
  return e instanceof Ha ? t ? (e.inject(t, n), e.getName(n)) : e : jt(e) ? function T(O, L) {
    var F, k, v = [];
    for (var w in O) O.hasOwnProperty(w) && !Mr(O[w]) && (Array.isArray(O[w]) && O[w].isCss || Je(O[w]) ? v.push(Pr(w) + ":", O[w], ";") : jt(O[w]) ? v.push.apply(v, T(O[w], w)) : v.push(Pr(w) + ": " + (F = w, (k = O[w]) == null || typeof k == "boolean" || k === "" ? "" : typeof k != "number" || k === 0 || F in ra || F.startsWith("--") ? String(k).trim() : k + "px") + ";"));
    return L ? [L + " {"].concat(v, ["}"]) : v;
  }(e) : e.toString();
}
var Lr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wa(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Je(e) || jt(e) ? Lr(Ye(xr(mt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Lr(Ye(xr(e, t)));
}
var Dr = /invalid hook call/i, st = /* @__PURE__ */ new Set(), Ga = function(e, r) {
  if (B.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (Dr.test(i)) o = !1, st.delete(t);
        else {
          for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), m = 1; m < l; m++) u[m - 1] = arguments[m];
          n.apply(void 0, [i].concat(u));
        }
      }, jr(), o && !st.has(t) && (console.warn(t), st.add(t));
    } catch (i) {
      Dr.test(i.message) && st.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Va = function(e, r, t) {
  return t === void 0 && (t = Le), e.theme !== t.theme && e.theme || r || t.theme;
}, Ya = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qa = /(^-|-$)/g;
function It(e) {
  return e.replace(Ya, "-").replace(qa, "");
}
var Xa = function(e) {
  return $t(Zr(e) >>> 0);
};
function lt(e) {
  return typeof e == "string" && (B.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ut = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Za = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ka(e, r, t) {
  var n = e[t];
  Ut(r) && Ut(n) ? Jr(n, r) : e[t] = r;
}
function Jr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, i = t; o < i.length; o++) {
    var l = i[o];
    if (Ut(l)) for (var u in l) Za(u) && Ka(e, l[u], u);
  }
  return e;
}
var en = Ue.createContext();
en.Consumer;
var Pt = {};
function tn(e, r, t) {
  var n = Zt(e), o = !lt(e), i = r.attrs, l = i === void 0 ? mt : i, u = r.componentId, m = u === void 0 ? function(R, x) {
    var C = typeof R != "string" ? "sc" : It(R);
    Pt[C] = (Pt[C] || 0) + 1;
    var c = C + "-" + Xa("5.3.11" + C + Pt[C]);
    return x ? x + "-" + c : c;
  }(r.displayName, r.parentComponentId) : u, y = r.displayName, T = y === void 0 ? function(R) {
    return lt(R) ? "styled." + R : "Styled(" + Ht(R) + ")";
  }(e) : y, O = r.displayName && r.componentId ? It(r.displayName) + "-" + r.componentId : r.componentId || m, L = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, F = r.shouldForwardProp;
  n && e.shouldForwardProp && (F = r.shouldForwardProp ? function(R, x, C) {
    return e.shouldForwardProp(R, x, C) && r.shouldForwardProp(R, x, C);
  } : e.shouldForwardProp);
  var k, v = new Ia(t, O, n ? e.componentStyle : void 0), w = v.isStatic && l.length === 0, P = function(R, x) {
    return function(C, c, W, ce) {
      var ae = C.attrs, ge = C.componentStyle, we = C.defaultProps, Ie = C.foldedComponentIds, oe = C.shouldForwardProp, q = C.styledComponentId, ue = C.target, ee = function(_, s, E) {
        _ === void 0 && (_ = Le);
        var p = Ne({}, s, { theme: _ }), G = {};
        return E.forEach(function($) {
          var j, I, Q, Z = $;
          for (j in Je(Z) && (Z = Z(p)), Z) p[j] = G[j] = j === "className" ? (I = G[j], Q = Z[j], I && Q ? I + " " + Q : I || Q) : Z[j];
        }), [p, G];
      }(Va(c, Wt(en), we) || Le, c, ae), Ee = ee[0], me = ee[1], fe = function(_, s, E, p) {
        var G = Fa(), $ = ja(), j = s ? _.generateAndInjectStyles(Le, G, $) : _.generateAndInjectStyles(E, G, $);
        return B.env.NODE_ENV !== "production" && !s && p && p(j), j;
      }(ge, ce, Ee, B.env.NODE_ENV !== "production" ? C.warnTooManyClasses : void 0), De = W, Ce = me.$as || c.$as || me.as || c.as || ue, Fe = lt(Ce), A = me !== c ? Ne({}, c, {}, me) : c, d = {};
      for (var b in A) b[0] !== "$" && b !== "as" && (b === "forwardedAs" ? d.as = A[b] : (oe ? oe(b, Cr, Ce) : !Fe || Cr(b)) && (d[b] = A[b]));
      return c.style && me.style !== c.style && (d.style = Ne({}, c.style, {}, me.style)), d.className = Array.prototype.concat(Ie, q, fe !== q ? fe : null, c.className, me.className).filter(Boolean).join(" "), d.ref = De, fn(Ce, d);
    }(k, R, x, w);
  };
  return P.displayName = T, (k = Ue.forwardRef(P)).attrs = L, k.componentStyle = v, k.displayName = T, k.shouldForwardProp = F, k.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : mt, k.styledComponentId = O, k.target = n ? e.target : e, k.withComponent = function(R) {
    var x = r.componentId, C = function(W, ce) {
      if (W == null) return {};
      var ae, ge, we = {}, Ie = Object.keys(W);
      for (ge = 0; ge < Ie.length; ge++) ae = Ie[ge], ce.indexOf(ae) >= 0 || (we[ae] = W[ae]);
      return we;
    }(r, ["componentId"]), c = x && x + "-" + (lt(R) ? R : It(Ht(R)));
    return tn(R, Ne({}, C, { attrs: L, componentId: c }), t);
  }, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? Jr({}, e.defaultProps, R) : R;
  } }), B.env.NODE_ENV !== "production" && (Ga(T, O), k.warnTooManyClasses = /* @__PURE__ */ function(R, x) {
    var C = {}, c = !1;
    return function(W) {
      if (!c && (C[W] = !0, Object.keys(C).length >= 200)) {
        var ce = x ? ' with the id of "' + x + '"' : "";
        console.warn("Over 200 classes were generated for component " + R + ce + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), c = !0, C = {};
      }
    };
  }(T, O)), Object.defineProperty(k, "toString", { value: function() {
    return "." + k.styledComponentId;
  } }), o && da(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), k;
}
var Bt = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Le), !Yt.isValidElementType(n)) return qe(1, String(n));
    var i = function() {
      return t(n, o, Wa.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return r(t, n, Ne({}, o, {}, l));
    }, i.attrs = function(l) {
      return r(t, n, Ne({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(tn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Bt[e] = Bt(e);
});
B.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), B.env.NODE_ENV !== "production" && B.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Qa = Bt.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: e }) => e ? "112px" : "142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`, pt = "On This Page", Ja = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: pt
}, eo = ({
  items: e,
  firstElementId: r,
  focusFirstFocusableElement: t = !1
}) => {
  const n = jr(null), o = vn("(max-width: 991px)"), [i, l] = Fr({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), u = o ? 110 : 142, m = () => {
    var C;
    const v = {}, w = window.scrollY, P = (C = document.getElementById(r)) == null ? void 0 : C.getBoundingClientRect().top, R = 103;
    P >= 0 && (v.sticky = !1, v.activeContainer = ""), w > n.current.getBoundingClientRect().top && (v.sticky = !0);
    const x = i.hasHeader ? u + R : R;
    e == null || e.forEach(({ targetIdName: c }) => {
      const W = document.getElementById(c), ce = (W == null ? void 0 : W.getBoundingClientRect().top) - x, ae = (W == null ? void 0 : W.getBoundingClientRect().bottom) - x;
      ce < 0 && ae > 0 && (v.activeContainer = c);
    }), l((c) => ({
      ...c,
      ...v
    }));
  }, y = () => {
    qn(m, 150), Xn(m, 150);
  }, T = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), O = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function L(v = null) {
    if (v === null) return i.containerClass;
    const w = Object.values(v.classList).filter(
      (P) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(P)
    );
    return w.length > 0 ? w.join(" ") : L(v.parentElement);
  }
  Mt(() => {
    const v = document.getElementById(r) || null, w = {
      hasHeader: T(),
      hasAltMenuSpacing: O(),
      containerClass: L(v)
    };
    l((P) => ({
      ...P,
      ...w
    }));
  }, []), Mt(() => (window == null || window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y)), [i.hasHeader]);
  const F = (v) => {
    var x, C;
    const w = window.scrollY - (i.hasHeader ? u + 100 : 100), P = o ? 410 : 90;
    let R = ((x = document.getElementById(v)) == null ? void 0 : x.getBoundingClientRect().top) + w;
    n.current.classList.contains("sticky") || (R -= P), t && ((C = Yn(`#${v}`)) == null || C.focus()), window.scrollTo({ top: R, behavior: "smooth" });
  }, k = () => {
    l((v) => ({
      ...v,
      showMenu: !v.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ he.jsx(
    Qa,
    {
      requiresAltMenuSpacing: i.hasAltMenuSpacing,
      ref: n,
      className: Ge(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: i.sticky,
          "with-header": i.hasHeader
        }
      ),
      style: i.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ he.jsxs("div", { className: `${i.containerClass} uds-anchor-menu-wrapper`, children: [
        o ? /* @__PURE__ */ he.jsx(
          Gr,
          {
            gaData: {
              ...Ja,
              action: i.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ he.jsx(
              "button",
              {
                className: Ge("mobile-menu-toggler", {
                  "show-menu": i.showMenu
                }),
                type: "button",
                onClick: k,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ he.jsxs("h4", { children: [
                  pt,
                  ":",
                  /* @__PURE__ */ he.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ he.jsxs("h4", { children: [
          pt,
          ":"
        ] }),
        /* @__PURE__ */ he.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: Ge("card", "card-body", "collapse", {
              show: i.showMenu
            }),
            children: /* @__PURE__ */ he.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": pt,
                children: e == null ? void 0 : e.map((v) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ he.jsx(
                    Vt,
                    {
                      "data-testid": `anchor-item-${v.targetIdName}`,
                      classes: Ge("nav-link", {
                        active: i.activeContainer === v.targetIdName
                      }).split(" "),
                      ariaLabel: v.text,
                      label: v.text,
                      icon: v.icon,
                      onClick: () => F(v.targetIdName)
                    },
                    v.targetIdName
                  )
                ))
              }
            )
          }
        )
      ] })
    }
  );
};
eo.propTypes = {
  /**
   * Anchor menu items
   */
  items: h.arrayOf(
    h.shape({
      text: h.string.isRequired,
      targetIdName: h.string.isRequired,
      icon: h.arrayOf(h.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: h.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: h.bool
};
export {
  eo as AnchorMenu
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
