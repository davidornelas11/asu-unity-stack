import ze, { useId as pi, useRef as hi, useContext as gr, createElement as mi, useEffect as vr, useState as er } from "react";
import gi from "react-dom";
function yr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rn, Gr = gi;
Rn = Gr.createRoot, Gr.hydrateRoot;
var Cn = { exports: {} }, it = {};
var Kr;
function vi() {
  if (Kr) return it;
  Kr = 1;
  var e = ze, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, c, f) {
    var d, p = {}, g = null, x = null;
    f !== void 0 && (g = "" + f), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (d in c) n.call(c, d) && !i.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: g, ref: x, props: p, _owner: a.current };
  }
  return it.Fragment = r, it.jsx = o, it.jsxs = o, it;
}
Cn.exports = vi();
var m = Cn.exports, Nn = { exports: {} }, Ut = { exports: {} }, U = {};
var Zr;
function yi() {
  if (Zr) return U;
  Zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function L(v) {
    if (typeof v == "object" && v !== null) {
      var Z = v.$$typeof;
      switch (Z) {
        case t:
          switch (v = v.type, v) {
            case c:
            case f:
            case n:
            case i:
            case a:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case b:
                case x:
                case o:
                  return v;
                default:
                  return Z;
              }
          }
        case r:
          return Z;
      }
    }
  }
  function P(v) {
    return L(v) === f;
  }
  return U.AsyncMode = c, U.ConcurrentMode = f, U.ContextConsumer = l, U.ContextProvider = o, U.Element = t, U.ForwardRef = d, U.Fragment = n, U.Lazy = b, U.Memo = x, U.Portal = r, U.Profiler = i, U.StrictMode = a, U.Suspense = p, U.isAsyncMode = function(v) {
    return P(v) || L(v) === c;
  }, U.isConcurrentMode = P, U.isContextConsumer = function(v) {
    return L(v) === l;
  }, U.isContextProvider = function(v) {
    return L(v) === o;
  }, U.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, U.isForwardRef = function(v) {
    return L(v) === d;
  }, U.isFragment = function(v) {
    return L(v) === n;
  }, U.isLazy = function(v) {
    return L(v) === b;
  }, U.isMemo = function(v) {
    return L(v) === x;
  }, U.isPortal = function(v) {
    return L(v) === r;
  }, U.isProfiler = function(v) {
    return L(v) === i;
  }, U.isStrictMode = function(v) {
    return L(v) === a;
  }, U.isSuspense = function(v) {
    return L(v) === p;
  }, U.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === f || v === i || v === a || v === p || v === g || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === x || v.$$typeof === o || v.$$typeof === l || v.$$typeof === d || v.$$typeof === T || v.$$typeof === O || v.$$typeof === k || v.$$typeof === _);
  }, U.typeOf = L, U;
}
var Qr;
function Ln() {
  return Qr || (Qr = 1, Ut.exports = yi()), Ut.exports;
}
var Wt, Jr;
function bi() {
  if (Jr) return Wt;
  Jr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wt = e, Wt;
}
var Vt, en;
function wi() {
  if (en) return Vt;
  en = 1;
  var e = bi();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Vt = function() {
    function n(o, l, c, f, d, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function a() {
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
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Vt;
}
Nn.exports = wi()();
var _i = Nn.exports;
const s = /* @__PURE__ */ yr(_i);
var Pn = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var l = arguments[o];
        l && (i = a(i, n(l)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var l in i)
        t.call(i, l) && i[l] && (o = a(o, l));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Pn);
var Si = Pn.exports;
const st = /* @__PURE__ */ yr(Si), _t = (e) => (e || []).join(" ");
function Me(e) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Me(e);
}
function tr(e, t) {
  return tr = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, tr(e, t);
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
function St(e, t, r) {
  return Ti() ? St = Reflect.construct : St = function(a, i, o) {
    var l = [null];
    l.push.apply(l, i);
    var c = Function.bind.apply(a, l), f = new c();
    return o && tr(f, o.prototype), f;
  }, St.apply(null, arguments);
}
function Ae(e) {
  return Ai(e) || xi(e) || Oi(e) || ki();
}
function Ai(e) {
  if (Array.isArray(e)) return rr(e);
}
function xi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Oi(e, t) {
  if (e) {
    if (typeof e == "string") return rr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rr(e, t);
  }
}
function rr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ki() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ei = Object.hasOwnProperty, tn = Object.setPrototypeOf, Ri = Object.isFrozen, Ci = Object.getPrototypeOf, Ni = Object.getOwnPropertyDescriptor, ue = Object.freeze, _e = Object.seal, Li = Object.create, In = typeof Reflect < "u" && Reflect, kt = In.apply, nr = In.construct;
kt || (kt = function(t, r, n) {
  return t.apply(r, n);
});
ue || (ue = function(t) {
  return t;
});
_e || (_e = function(t) {
  return t;
});
nr || (nr = function(t, r) {
  return St(t, Ae(r));
});
var Pi = Se(Array.prototype.forEach), rn = Se(Array.prototype.pop), at = Se(Array.prototype.push), Tt = Se(String.prototype.toLowerCase), qt = Se(String.prototype.toString), nn = Se(String.prototype.match), Te = Se(String.prototype.replace), Ii = Se(String.prototype.indexOf), Di = Se(String.prototype.trim), ae = Se(RegExp.prototype.test), Yt = ji(TypeError);
function Se(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return kt(e, t, n);
  };
}
function ji(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return nr(e, r);
  };
}
function M(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : Tt, tn && tn(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var o = r(i);
      o !== i && (Ri(t) || (t[a] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function qe(e) {
  var t = Li(null), r;
  for (r in e)
    kt(Ei, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function ht(e, t) {
  for (; e !== null; ) {
    var r = Ni(e, t);
    if (r) {
      if (r.get)
        return Se(r.get);
      if (typeof r.value == "function")
        return Se(r.value);
    }
    e = Ci(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var an = ue(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Xt = ue(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Gt = ue(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mi = ue(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Kt = ue(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Fi = ue(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), on = ue(["#text"]), sn = ue(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Zt = ue(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ln = ue(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), mt = ue(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Hi = _e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), zi = _e(/<%[\w\W]*|[\w\W]*%>/gm), $i = _e(/\${[\w\W]*}/gm), Bi = _e(/^data-[\-\w.\u00B7-\uFFFF]/), Ui = _e(/^aria-[\-\w]+$/), Wi = _e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vi = _e(/^(?:\w+script|data):/i), qi = _e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Yi = _e(/^html$/i), Xi = _e(/^[a-z][.\w]*(-[.\w]+)+$/i), Gi = function() {
  return typeof window > "u" ? null : window;
}, Ki = function(t, r) {
  if (Me(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML: function(l) {
        return l;
      },
      createScriptURL: function(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Dn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gi(), t = function(u) {
    return Dn(u);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, f = e.NamedNodeMap, d = f === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : f, p = e.HTMLFormElement, g = e.DOMParser, x = e.trustedTypes, b = l.prototype, _ = ht(b, "cloneNode"), T = ht(b, "nextSibling"), O = ht(b, "childNodes"), k = ht(b, "parentNode");
  if (typeof i == "function") {
    var L = n.createElement("template");
    L.content && L.content.ownerDocument && (n = L.content.ownerDocument);
  }
  var P = Ki(x, r), v = P ? P.createHTML("") : "", Z = n, ve = Z.implementation, fe = Z.createNodeIterator, ye = Z.createDocumentFragment, xe = Z.getElementsByTagName, De = r.importNode, se = {};
  try {
    se = qe(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var G = {};
  t.isSupported = typeof k == "function" && ve && ve.createHTMLDocument !== void 0 && se !== 9;
  var de = Hi, re = zi, ke = $i, ge = Bi, pe = Ui, Be = Vi, Ee = qi, Ue = Xi, R = Wi, S = null, E = M({}, [].concat(Ae(an), Ae(Xt), Ae(Gt), Ae(Kt), Ae(on))), C = null, h = M({}, [].concat(Ae(sn), Ae(Zt), Ae(ln), Ae(mt))), I = Object.seal(Object.create(null, {
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
  })), w = null, V = null, $ = !0, H = !0, j = !1, ee = !0, Q = !1, F = !0, Y = !1, z = !1, J = !1, be = !1, K = !1, Re = !1, je = !0, he = !1, D = "user-content-", q = !0, Ce = !1, Oe = {}, ce = null, Ir = M({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Dr = null, jr = M({}, ["audio", "video", "img", "source", "image", "track"]), Mt = null, Mr = M({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ut = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", Ne = "http://www.w3.org/1999/xhtml", Xe = Ne, Ft = !1, Ht = null, oi = M({}, [ut, ft, Ne], qt), We, si = ["application/xhtml+xml", "text/html"], li = "text/html", ne, Ge = null, ci = n.createElement("form"), Fr = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, zt = function(u) {
    Ge && Ge === u || ((!u || Me(u) !== "object") && (u = {}), u = qe(u), We = // eslint-disable-next-line unicorn/prefer-includes
    si.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? We = li : We = u.PARSER_MEDIA_TYPE, ne = We === "application/xhtml+xml" ? qt : Tt, S = "ALLOWED_TAGS" in u ? M({}, u.ALLOWED_TAGS, ne) : E, C = "ALLOWED_ATTR" in u ? M({}, u.ALLOWED_ATTR, ne) : h, Ht = "ALLOWED_NAMESPACES" in u ? M({}, u.ALLOWED_NAMESPACES, qt) : oi, Mt = "ADD_URI_SAFE_ATTR" in u ? M(
      qe(Mr),
      // eslint-disable-line indent
      u.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      ne
      // eslint-disable-line indent
    ) : Mr, Dr = "ADD_DATA_URI_TAGS" in u ? M(
      qe(jr),
      // eslint-disable-line indent
      u.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      ne
      // eslint-disable-line indent
    ) : jr, ce = "FORBID_CONTENTS" in u ? M({}, u.FORBID_CONTENTS, ne) : Ir, w = "FORBID_TAGS" in u ? M({}, u.FORBID_TAGS, ne) : {}, V = "FORBID_ATTR" in u ? M({}, u.FORBID_ATTR, ne) : {}, Oe = "USE_PROFILES" in u ? u.USE_PROFILES : !1, $ = u.ALLOW_ARIA_ATTR !== !1, H = u.ALLOW_DATA_ATTR !== !1, j = u.ALLOW_UNKNOWN_PROTOCOLS || !1, ee = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = u.SAFE_FOR_TEMPLATES || !1, F = u.SAFE_FOR_XML !== !1, Y = u.WHOLE_DOCUMENT || !1, be = u.RETURN_DOM || !1, K = u.RETURN_DOM_FRAGMENT || !1, Re = u.RETURN_TRUSTED_TYPE || !1, J = u.FORCE_BODY || !1, je = u.SANITIZE_DOM !== !1, he = u.SANITIZE_NAMED_PROPS || !1, q = u.KEEP_CONTENT !== !1, Ce = u.IN_PLACE || !1, R = u.ALLOWED_URI_REGEXP || R, Xe = u.NAMESPACE || Ne, I = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && Fr(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (I.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && Fr(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (I.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Q && (H = !1), K && (be = !0), Oe && (S = M({}, Ae(on)), C = [], Oe.html === !0 && (M(S, an), M(C, sn)), Oe.svg === !0 && (M(S, Xt), M(C, Zt), M(C, mt)), Oe.svgFilters === !0 && (M(S, Gt), M(C, Zt), M(C, mt)), Oe.mathMl === !0 && (M(S, Kt), M(C, ln), M(C, mt))), u.ADD_TAGS && (S === E && (S = qe(S)), M(S, u.ADD_TAGS, ne)), u.ADD_ATTR && (C === h && (C = qe(C)), M(C, u.ADD_ATTR, ne)), u.ADD_URI_SAFE_ATTR && M(Mt, u.ADD_URI_SAFE_ATTR, ne), u.FORBID_CONTENTS && (ce === Ir && (ce = qe(ce)), M(ce, u.FORBID_CONTENTS, ne)), q && (S["#text"] = !0), Y && M(S, ["html", "head", "body"]), S.table && (M(S, ["tbody"]), delete w.tbody), ue && ue(u), Ge = u);
  }, Hr = M({}, ["mi", "mo", "mn", "ms", "mtext"]), zr = M({}, ["annotation-xml"]), ui = M({}, ["title", "style", "font", "a", "script"]), dt = M({}, Xt);
  M(dt, Gt), M(dt, Mi);
  var $t = M({}, Kt);
  M($t, Fi);
  var fi = function(u) {
    var y = k(u);
    (!y || !y.tagName) && (y = {
      namespaceURI: Xe,
      tagName: "template"
    });
    var A = Tt(u.tagName), B = Tt(y.tagName);
    return Ht[u.namespaceURI] ? u.namespaceURI === ft ? y.namespaceURI === Ne ? A === "svg" : y.namespaceURI === ut ? A === "svg" && (B === "annotation-xml" || Hr[B]) : !!dt[A] : u.namespaceURI === ut ? y.namespaceURI === Ne ? A === "math" : y.namespaceURI === ft ? A === "math" && zr[B] : !!$t[A] : u.namespaceURI === Ne ? y.namespaceURI === ft && !zr[B] || y.namespaceURI === ut && !Hr[B] ? !1 : !$t[A] && (ui[A] || !dt[A]) : !!(We === "application/xhtml+xml" && Ht[u.namespaceURI]) : !1;
  }, we = function(u) {
    at(t.removed, {
      element: u
    });
    try {
      u.parentNode.removeChild(u);
    } catch {
      try {
        u.outerHTML = v;
      } catch {
        u.remove();
      }
    }
  }, pt = function(u, y) {
    try {
      at(t.removed, {
        attribute: y.getAttributeNode(u),
        from: y
      });
    } catch {
      at(t.removed, {
        attribute: null,
        from: y
      });
    }
    if (y.removeAttribute(u), u === "is" && !C[u])
      if (be || K)
        try {
          we(y);
        } catch {
        }
      else
        try {
          y.setAttribute(u, "");
        } catch {
        }
  }, $r = function(u) {
    var y, A;
    if (J)
      u = "<remove></remove>" + u;
    else {
      var B = nn(u, /^[\r\n\t ]+/);
      A = B && B[0];
    }
    We === "application/xhtml+xml" && Xe === Ne && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    var me = P ? P.createHTML(u) : u;
    if (Xe === Ne)
      try {
        y = new g().parseFromString(me, We);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = ve.createDocument(Xe, "template", null);
      try {
        y.documentElement.innerHTML = Ft ? v : me;
      } catch {
      }
    }
    var le = y.body || y.documentElement;
    return u && A && le.insertBefore(n.createTextNode(A), le.childNodes[0] || null), Xe === Ne ? xe.call(y, Y ? "html" : "body")[0] : Y ? y.documentElement : le;
  }, Br = function(u) {
    return fe.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Ur = function(u) {
    return u instanceof p && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof d) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, nt = function(u) {
    return Me(o) === "object" ? u instanceof o : u && Me(u) === "object" && typeof u.nodeType == "number" && typeof u.nodeName == "string";
  }, Le = function(u, y, A) {
    G[u] && Pi(G[u], function(B) {
      B.call(t, y, A, Ge);
    });
  }, Wr = function(u) {
    var y;
    if (Le("beforeSanitizeElements", u, null), Ur(u) || ae(/[\u0080-\uFFFF]/, u.nodeName))
      return we(u), !0;
    var A = ne(u.nodeName);
    if (Le("uponSanitizeElement", u, {
      tagName: A,
      allowedTags: S
    }), u.hasChildNodes() && !nt(u.firstElementChild) && (!nt(u.content) || !nt(u.content.firstElementChild)) && ae(/<[/\w]/g, u.innerHTML) && ae(/<[/\w]/g, u.textContent) || A === "select" && ae(/<template/i, u.innerHTML) || u.nodeType === 7 || F && u.nodeType === 8 && ae(/<[/\w]/g, u.data))
      return we(u), !0;
    if (!S[A] || w[A]) {
      if (!w[A] && qr(A) && (I.tagNameCheck instanceof RegExp && ae(I.tagNameCheck, A) || I.tagNameCheck instanceof Function && I.tagNameCheck(A)))
        return !1;
      if (q && !ce[A]) {
        var B = k(u) || u.parentNode, me = O(u) || u.childNodes;
        if (me && B)
          for (var le = me.length, ie = le - 1; ie >= 0; --ie) {
            var Ve = _(me[ie], !0);
            Ve.__removalCount = (u.__removalCount || 0) + 1, B.insertBefore(Ve, T(u));
          }
      }
      return we(u), !0;
    }
    return u instanceof l && !fi(u) || (A === "noscript" || A === "noembed" || A === "noframes") && ae(/<\/no(script|embed|frames)/i, u.innerHTML) ? (we(u), !0) : (Q && u.nodeType === 3 && (y = u.textContent, y = Te(y, de, " "), y = Te(y, re, " "), y = Te(y, ke, " "), u.textContent !== y && (at(t.removed, {
      element: u.cloneNode()
    }), u.textContent = y)), Le("afterSanitizeElements", u, null), !1);
  }, Vr = function(u, y, A) {
    if (je && (y === "id" || y === "name") && (A in n || A in ci))
      return !1;
    if (!(H && !V[y] && ae(ge, y))) {
      if (!($ && ae(pe, y))) {
        if (!C[y] || V[y]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(qr(u) && (I.tagNameCheck instanceof RegExp && ae(I.tagNameCheck, u) || I.tagNameCheck instanceof Function && I.tagNameCheck(u)) && (I.attributeNameCheck instanceof RegExp && ae(I.attributeNameCheck, y) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            y === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && ae(I.tagNameCheck, A) || I.tagNameCheck instanceof Function && I.tagNameCheck(A)))
          ) return !1;
        } else if (!Mt[y]) {
          if (!ae(R, Te(A, Ee, ""))) {
            if (!((y === "src" || y === "xlink:href" || y === "href") && u !== "script" && Ii(A, "data:") === 0 && Dr[u])) {
              if (!(j && !ae(Be, Te(A, Ee, "")))) {
                if (A)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, qr = function(u) {
    return u !== "annotation-xml" && nn(u, Ue);
  }, Yr = function(u) {
    var y, A, B, me;
    Le("beforeSanitizeAttributes", u, null);
    var le = u.attributes;
    if (le) {
      var ie = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: C
      };
      for (me = le.length; me--; ) {
        y = le[me];
        var Ve = y, te = Ve.name, Bt = Ve.namespaceURI;
        if (A = te === "value" ? y.value : Di(y.value), B = ne(te), ie.attrName = B, ie.attrValue = A, ie.keepAttr = !0, ie.forceKeepAttr = void 0, Le("uponSanitizeAttribute", u, ie), A = ie.attrValue, !ie.forceKeepAttr && (pt(te, u), !!ie.keepAttr)) {
          if (!ee && ae(/\/>/i, A)) {
            pt(te, u);
            continue;
          }
          Q && (A = Te(A, de, " "), A = Te(A, re, " "), A = Te(A, ke, " "));
          var Xr = ne(u.nodeName);
          if (Vr(Xr, B, A)) {
            if (he && (B === "id" || B === "name") && (pt(te, u), A = D + A), F && ae(/((--!?|])>)|<\/(style|title)/i, A)) {
              pt(te, u);
              continue;
            }
            if (P && Me(x) === "object" && typeof x.getAttributeType == "function" && !Bt)
              switch (x.getAttributeType(Xr, B)) {
                case "TrustedHTML": {
                  A = P.createHTML(A);
                  break;
                }
                case "TrustedScriptURL": {
                  A = P.createScriptURL(A);
                  break;
                }
              }
            try {
              Bt ? u.setAttributeNS(Bt, te, A) : u.setAttribute(te, A), Ur(u) ? we(u) : rn(t.removed);
            } catch {
            }
          }
        }
      }
      Le("afterSanitizeAttributes", u, null);
    }
  }, di = function N(u) {
    var y, A = Br(u);
    for (Le("beforeSanitizeShadowDOM", u, null); y = A.nextNode(); )
      Le("uponSanitizeShadowNode", y, null), !Wr(y) && (y.content instanceof a && N(y.content), Yr(y));
    Le("afterSanitizeShadowDOM", u, null);
  };
  return t.sanitize = function(N) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y, A, B, me, le;
    if (Ft = !N, Ft && (N = "<!-->"), typeof N != "string" && !nt(N))
      if (typeof N.toString == "function") {
        if (N = N.toString(), typeof N != "string")
          throw Yt("dirty is not a string, aborting");
      } else
        throw Yt("toString is not a function");
    if (!t.isSupported) {
      if (Me(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof N == "string")
          return e.toStaticHTML(N);
        if (nt(N))
          return e.toStaticHTML(N.outerHTML);
      }
      return N;
    }
    if (z || zt(u), t.removed = [], typeof N == "string" && (Ce = !1), Ce) {
      if (N.nodeName) {
        var ie = ne(N.nodeName);
        if (!S[ie] || w[ie])
          throw Yt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (N instanceof o)
      y = $r("<!---->"), A = y.ownerDocument.importNode(N, !0), A.nodeType === 1 && A.nodeName === "BODY" || A.nodeName === "HTML" ? y = A : y.appendChild(A);
    else {
      if (!be && !Q && !Y && // eslint-disable-next-line unicorn/prefer-includes
      N.indexOf("<") === -1)
        return P && Re ? P.createHTML(N) : N;
      if (y = $r(N), !y)
        return be ? null : Re ? v : "";
    }
    y && J && we(y.firstChild);
    for (var Ve = Br(Ce ? N : y); B = Ve.nextNode(); )
      B.nodeType === 3 && B === me || Wr(B) || (B.content instanceof a && di(B.content), Yr(B), me = B);
    if (me = null, Ce)
      return N;
    if (be) {
      if (K)
        for (le = ye.call(y.ownerDocument); y.firstChild; )
          le.appendChild(y.firstChild);
      else
        le = y;
      return (C.shadowroot || C.shadowrootmod) && (le = De.call(r, le, !0)), le;
    }
    var te = Y ? y.outerHTML : y.innerHTML;
    return Y && S["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && ae(Yi, y.ownerDocument.doctype.name) && (te = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + te), Q && (te = Te(te, de, " "), te = Te(te, re, " "), te = Te(te, ke, " ")), P && Re ? P.createHTML(te) : te;
  }, t.setConfig = function(N) {
    zt(N), z = !0;
  }, t.clearConfig = function() {
    Ge = null, z = !1;
  }, t.isValidAttribute = function(N, u, y) {
    Ge || zt({});
    var A = ne(N), B = ne(u);
    return Vr(A, B, y);
  }, t.addHook = function(N, u) {
    typeof u == "function" && (G[N] = G[N] || [], at(G[N], u));
  }, t.removeHook = function(N) {
    if (G[N])
      return rn(G[N]);
  }, t.removeHooks = function(N) {
    G[N] && (G[N] = []);
  }, t.removeAllHooks = function() {
    G = {};
  }, t;
}
var Zi = Dn();
const Ke = (e) => ({ __html: Zi.sanitize(e) });
s.shape({
  event: s.string,
  action: s.string,
  name: s.string,
  region: s.string,
  section: s.string,
  component: s.string,
  type: s.string,
  text: s.string
});
const Qi = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: i = "",
  region: o = "",
  component: l = ""
}) => {
  const { dataLayer: c } = window, f = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: o.toLowerCase(),
    section: a.toLowerCase(),
    text: i.toLowerCase(),
    component: l.toLowerCase()
  };
  c && c.push(f);
};
s.shape({
  url: s.string,
  altText: s.string,
  cssClass: s.arrayOf(s.string),
  size: s.oneOf(["small", "medium", "large"])
});
s.shape({
  text: s.string,
  maxWidth: s.string,
  cssClass: s.arrayOf(s.string),
  highlightColor: s.oneOf(["gold", "black"])
});
s.shape({
  color: s.oneOf(["gold", "maroon", "gray", "dark"]),
  content: s.shape({
    icon: s.string,
    header: s.string,
    body: s.string
  })
});
const jn = s.shape({
  text: s.string,
  name: s.string,
  event: s.string,
  action: s.string,
  type: s.string,
  region: s.string,
  section: s.string,
  component: s.string
}), Ji = "staticMarkup";
function ea() {
  const t = pi().indexOf(Ji) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const Ze = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = ea(), { onClick: a, ...i } = r.props;
  if (n)
    return ze.cloneElement(r, {
      ...i,
      onClick: (c) => (Qi(e), a ? a(c) : !0)
    });
  let o = "";
  ["input", "header", "header-input"].includes(t) && (o = `-${t}`);
  const l = {
    [`data-ga${o}`]: e.text,
    [`data-ga${o}-name`]: e.name,
    [`data-ga${o}-event`]: e.event,
    [`data-ga${o}-action`]: e.action,
    [`data-ga${o}-type`]: e.type,
    [`data-ga${o}-region`]: e.region,
    [`data-ga${o}-section`]: e.section,
    [`data-ga${o}-component`]: e.component
  };
  return ze.cloneElement(r, {
    ...i,
    onClick: a,
    ...l
  });
}, ta = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, br = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: a,
  color: i,
  disabled: o,
  element: l,
  href: c,
  icon: f,
  innerRef: d,
  onClick: p,
  size: g,
  classes: x,
  target: b,
  ..._
}) => {
  const T = st("btn", {
    [`btn-${i}`]: !0,
    "btn-md": g === "small",
    "btn-sm": g === "xsmall",
    "btn-block": a,
    disabled: o
  });
  let O = l;
  return c && l === "button" && (O = "a"), /* @__PURE__ */ m.jsx(
    Ze,
    {
      gaData: {
        ...ta,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ m.jsxs(
        O,
        {
          type: O === "button" && p ? "button" : void 0,
          ..._,
          className: st(x) || T,
          href: c,
          ref: d,
          onClick: p,
          "aria-label": n,
          target: O === "a" ? b : null,
          children: [
            f && /* @__PURE__ */ m.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
br.propTypes = {
  /**
   * Button label
   */
  label: s.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: s.string,
  /**
   * Google Analytics event data
   */
  gaData: jn,
  /**
    ARIA label for accessibility
  */
  ariaLabel: s.string,
  /**
    Render button as a block-button?
  */
  block: s.bool,
  /**
    Button background color
  */
  color: s.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: s.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: s.oneOfType([
    s.func,
    s.string,
    s.shape({ $$typeof: s.symbol, render: s.func }),
    s.arrayOf(
      s.oneOfType([
        s.func,
        s.string,
        s.shape({ $$typeof: s.symbol, render: s.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: s.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: s.arrayOf(s.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: s.oneOfType([
    s.object,
    s.func,
    s.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: s.func,
  /**
    Button size
  */
  size: s.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: s.arrayOf(s.string),
  /**
   Link target type
   */
  target: s.oneOf(["_blank", "_self", "_top", "_parent"])
};
br.defaultProps = {
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
const ra = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, wr = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: i,
  element: o,
  innerRef: l,
  href: c,
  onClick: f,
  ...d
}) => {
  const p = st("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: i
  });
  let g = o;
  return c && o === "button" && (g = "a"), /* @__PURE__ */ m.jsx(
    Ze,
    {
      gaData: {
        ...ra,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ m.jsx(
        g,
        {
          type: g === "button" && f ? "button" : void 0,
          ...d,
          className: p,
          href: c,
          ref: l,
          onClick: f,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
wr.propTypes = {
  /**
    Button tag label
  */
  label: s.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: s.string,
  /**
   * Google Analytics event data
   */
  gaData: jn,
  /**
    ARIA label for accessibility
  */
  ariaLabel: s.string,
  /**
    Button background color
  */
  color: s.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: s.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: s.oneOfType([
    s.func,
    s.string,
    s.shape({ $$typeof: s.symbol, render: s.func }),
    s.arrayOf(
      s.oneOfType([
        s.func,
        s.string,
        s.shape({ $$typeof: s.symbol, render: s.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: s.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: s.oneOfType([
    s.object,
    s.func,
    s.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: s.func
};
wr.defaultProps = {
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
const _r = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: i,
  fetchPriority: o = "auto",
  width: l,
  height: c,
  cardLink: f,
  title: d,
  caption: p,
  captionTitle: g,
  border: x,
  dropShadow: b
}) => {
  const _ = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: o,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: _t(r) },
    ...i && { "data-testid": i },
    ...l && { width: l },
    ...c && { height: c }
  }, T = st("uds-img", {
    borderless: !x,
    "uds-img-drop-shadow": b
  }), O = (L) => {
    const P = L ? `${_.className} ${L}` : _.className;
    return f ? /* @__PURE__ */ m.jsxs("a", { href: f, children: [
      /* @__PURE__ */ m.jsx("img", { ..._, className: P }),
      /* @__PURE__ */ m.jsx("span", { className: "visually-hidden", children: d })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ m.jsx("img", { ..._, className: P })
    );
  }, k = () => /* @__PURE__ */ m.jsx("div", { className: T, children: /* @__PURE__ */ m.jsxs("figure", { className: "figure uds-figure", children: [
    O(),
    p && /* @__PURE__ */ m.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      g && /* @__PURE__ */ m.jsx("h3", { children: g }),
      /* @__PURE__ */ m.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ke(p)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: p ? k() : O(T) });
};
_r.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: s.string.isRequired,
  /**
   * Image alt text
   */
  alt: s.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: s.arrayOf(s.string),
  /**
   * Image loading mode
   */
  loading: s.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: s.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: s.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: s.string,
  /**
   * Height of the image
   */
  height: s.string,
  dataTestId: s.string,
  cardLink: s.string,
  title: s.string,
  caption: s.string,
  captionTitle: s.string,
  border: s.bool,
  dropShadow: s.bool
};
var Sr = Ln();
function na(e) {
  function t(R, S, E, C, h) {
    for (var I = 0, w = 0, V = 0, $ = 0, H, j, ee = 0, Q = 0, F, Y = F = H = 0, z = 0, J = 0, be = 0, K = 0, Re = E.length, je = Re - 1, he, D = "", q = "", Ce = "", Oe = "", ce; z < Re; ) {
      if (j = E.charCodeAt(z), z === je && w + $ + V + I !== 0 && (w !== 0 && (j = w === 47 ? 10 : 47), $ = V = I = 0, Re++, je++), w + $ + V + I === 0) {
        if (z === je && (0 < J && (D = D.replace(g, "")), 0 < D.trim().length)) {
          switch (j) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              D += E.charAt(z);
          }
          j = 59;
        }
        switch (j) {
          case 123:
            for (D = D.trim(), H = D.charCodeAt(0), F = 1, K = ++z; z < Re; ) {
              switch (j = E.charCodeAt(z)) {
                case 123:
                  F++;
                  break;
                case 125:
                  F--;
                  break;
                case 47:
                  switch (j = E.charCodeAt(z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = z + 1; Y < je; ++Y)
                          switch (E.charCodeAt(Y)) {
                            case 47:
                              if (j === 42 && E.charCodeAt(Y - 1) === 42 && z + 2 !== Y) {
                                z = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (j === 47) {
                                z = Y + 1;
                                break e;
                              }
                          }
                        z = Y;
                      }
                  }
                  break;
                case 91:
                  j++;
                case 40:
                  j++;
                case 34:
                case 39:
                  for (; z++ < je && E.charCodeAt(z) !== j; )
                    ;
              }
              if (F === 0) break;
              z++;
            }
            switch (F = E.substring(K, z), H === 0 && (H = (D = D.replace(p, "").trim()).charCodeAt(0)), H) {
              case 64:
                switch (0 < J && (D = D.replace(g, "")), j = D.charCodeAt(1), j) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    J = S;
                    break;
                  default:
                    J = ke;
                }
                if (F = t(S, J, F, j, h + 1), K = F.length, 0 < pe && (J = r(ke, D, be), ce = l(3, F, J, S, G, se, K, j, h, C), D = J.join(""), ce !== void 0 && (K = (F = ce.trim()).length) === 0 && (j = 0, F = "")), 0 < K) switch (j) {
                  case 115:
                    D = D.replace(Z, o);
                  case 100:
                  case 109:
                  case 45:
                    F = D + "{" + F + "}";
                    break;
                  case 107:
                    D = D.replace(k, "$1 $2"), F = D + "{" + F + "}", F = re === 1 || re === 2 && i("@" + F, 3) ? "@-webkit-" + F + "@" + F : "@" + F;
                    break;
                  default:
                    F = D + F, C === 112 && (F = (q += F, ""));
                }
                else F = "";
                break;
              default:
                F = t(S, r(S, D, be), F, C, h + 1);
            }
            Ce += F, F = be = J = Y = H = 0, D = "", j = E.charCodeAt(++z);
            break;
          case 125:
          case 59:
            if (D = (0 < J ? D.replace(g, "") : D).trim(), 1 < (K = D.length)) switch (Y === 0 && (H = D.charCodeAt(0), H === 45 || 96 < H && 123 > H) && (K = (D = D.replace(" ", ":")).length), 0 < pe && (ce = l(1, D, S, R, G, se, q.length, C, h, C)) !== void 0 && (K = (D = ce.trim()).length) === 0 && (D = "\0\0"), H = D.charCodeAt(0), j = D.charCodeAt(1), H) {
              case 0:
                break;
              case 64:
                if (j === 105 || j === 99) {
                  Oe += D + E.charAt(z);
                  break;
                }
              default:
                D.charCodeAt(K - 1) !== 58 && (q += a(D, H, j, D.charCodeAt(2)));
            }
            be = J = Y = H = 0, D = "", j = E.charCodeAt(++z);
        }
      }
      switch (j) {
        case 13:
        case 10:
          w === 47 ? w = 0 : 1 + H === 0 && C !== 107 && 0 < D.length && (J = 1, D += "\0"), 0 < pe * Ee && l(0, D, S, R, G, se, q.length, C, h, C), se = 1, G++;
          break;
        case 59:
        case 125:
          if (w + $ + V + I === 0) {
            se++;
            break;
          }
        default:
          switch (se++, he = E.charAt(z), j) {
            case 9:
            case 32:
              if ($ + I + w === 0) switch (ee) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  j !== 32 && (he = " ");
              }
              break;
            case 0:
              he = "\\0";
              break;
            case 12:
              he = "\\f";
              break;
            case 11:
              he = "\\v";
              break;
            case 38:
              $ + w + I === 0 && (J = be = 1, he = "\f" + he);
              break;
            case 108:
              if ($ + w + I + de === 0 && 0 < Y) switch (z - Y) {
                case 2:
                  ee === 112 && E.charCodeAt(z - 3) === 58 && (de = ee);
                case 8:
                  Q === 111 && (de = Q);
              }
              break;
            case 58:
              $ + w + I === 0 && (Y = z);
              break;
            case 44:
              w + V + $ + I === 0 && (J = 1, he += "\r");
              break;
            case 34:
            case 39:
              w === 0 && ($ = $ === j ? 0 : $ === 0 ? j : $);
              break;
            case 91:
              $ + w + V === 0 && I++;
              break;
            case 93:
              $ + w + V === 0 && I--;
              break;
            case 41:
              $ + w + I === 0 && V--;
              break;
            case 40:
              if ($ + w + I === 0) {
                if (H === 0) switch (2 * ee + 3 * Q) {
                  case 533:
                    break;
                  default:
                    H = 1;
                }
                V++;
              }
              break;
            case 64:
              w + V + $ + I + Y + F === 0 && (F = 1);
              break;
            case 42:
            case 47:
              if (!(0 < $ + I + V)) switch (w) {
                case 0:
                  switch (2 * j + 3 * E.charCodeAt(z + 1)) {
                    case 235:
                      w = 47;
                      break;
                    case 220:
                      K = z, w = 42;
                  }
                  break;
                case 42:
                  j === 47 && ee === 42 && K + 2 !== z && (E.charCodeAt(K + 2) === 33 && (q += E.substring(K, z + 1)), he = "", w = 0);
              }
          }
          w === 0 && (D += he);
      }
      Q = ee, ee = j, z++;
    }
    if (K = q.length, 0 < K) {
      if (J = S, 0 < pe && (ce = l(2, q, J, R, G, se, K, C, h, C), ce !== void 0 && (q = ce).length === 0)) return Oe + q + Ce;
      if (q = J.join(",") + "{" + q + "}", re * de !== 0) {
        switch (re !== 2 || i(q, 2) || (de = 0), de) {
          case 111:
            q = q.replace(P, ":-moz-$1") + q;
            break;
          case 112:
            q = q.replace(L, "::-webkit-input-$1") + q.replace(L, "::-moz-$1") + q.replace(L, ":-ms-input-$1") + q;
        }
        de = 0;
      }
    }
    return Oe + q + Ce;
  }
  function r(R, S, E) {
    var C = S.trim().split(T);
    S = C;
    var h = C.length, I = R.length;
    switch (I) {
      case 0:
      case 1:
        var w = 0;
        for (R = I === 0 ? "" : R[0] + " "; w < h; ++w)
          S[w] = n(R, S[w], E).trim();
        break;
      default:
        var V = w = 0;
        for (S = []; w < h; ++w)
          for (var $ = 0; $ < I; ++$)
            S[V++] = n(R[$] + " ", C[w], E).trim();
    }
    return S;
  }
  function n(R, S, E) {
    var C = S.charCodeAt(0);
    switch (33 > C && (C = (S = S.trim()).charCodeAt(0)), C) {
      case 38:
        return S.replace(O, "$1" + R.trim());
      case 58:
        return R.trim() + S.replace(O, "$1" + R.trim());
      default:
        if (0 < 1 * E && 0 < S.indexOf("\f")) return S.replace(O, (R.charCodeAt(0) === 58 ? "" : "$1") + R.trim());
    }
    return R + S;
  }
  function a(R, S, E, C) {
    var h = R + ";", I = 2 * S + 3 * E + 4 * C;
    if (I === 944) {
      R = h.indexOf(":", 9) + 1;
      var w = h.substring(R, h.length - 1).trim();
      return w = h.substring(0, R).trim() + w + ";", re === 1 || re === 2 && i(w, 1) ? "-webkit-" + w + w : w;
    }
    if (re === 0 || re === 2 && !i(h, 1)) return h;
    switch (I) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45) return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11)) return h.replace(De, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45) switch (h.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
          case 115:
            return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
          case 98:
            return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
        }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99) break;
        return w = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + w + "-webkit-" + h + "-ms-flex-pack" + w + h;
      case 1005:
        return b.test(h) ? h.replace(x, ":-webkit-") + h.replace(x, ":-moz-") + h : h;
      case 1e3:
        switch (w = h.substring(13).trim(), S = w.indexOf("-") + 1, w.charCodeAt(0) + w.charCodeAt(S)) {
          case 226:
            w = h.replace(v, "tb");
            break;
          case 232:
            w = h.replace(v, "tb-rl");
            break;
          case 220:
            w = h.replace(v, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + w + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (S = (h = R).length - 10, w = (h.charCodeAt(S) === 33 ? h.substring(0, S) : h).substring(R.indexOf(":", 7) + 1).trim(), I = w.charCodeAt(0) + (w.charCodeAt(7) | 0)) {
          case 203:
            if (111 > w.charCodeAt(8)) break;
          case 115:
            h = h.replace(w, "-webkit-" + w) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(w, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + h.replace(w, "-webkit-" + w) + ";" + h.replace(w, "-ms-" + w + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45) switch (h.charCodeAt(6)) {
          case 105:
            return w = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + w + "-ms-flex-" + w + h;
          case 115:
            return "-webkit-" + h + "-ms-flex-item-" + h.replace(fe, "") + h;
          default:
            return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(fe, "") + h;
        }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (xe.test(R) === !0) return (w = R.substring(R.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(R.replace("stretch", "fill-available"), S, E, C).replace(":fill-available", ":stretch") : h.replace(w, "-webkit-" + w) + h.replace(w, "-moz-" + w.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, E + C === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10)) return h.substring(0, h.indexOf(";", 27) + 1).replace(_, "$1-webkit-$2") + h;
    }
    return h;
  }
  function i(R, S) {
    var E = R.indexOf(S === 1 ? ":" : "{"), C = R.substring(0, S !== 3 ? E : 10);
    return E = R.substring(E + 1, R.length - 1), Be(S !== 2 ? C : C.replace(ye, "$1"), E, S);
  }
  function o(R, S) {
    var E = a(S, S.charCodeAt(0), S.charCodeAt(1), S.charCodeAt(2));
    return E !== S + ";" ? E.replace(ve, " or ($1)").substring(4) : "(" + S + ")";
  }
  function l(R, S, E, C, h, I, w, V, $, H) {
    for (var j = 0, ee = S, Q; j < pe; ++j)
      switch (Q = ge[j].call(d, R, ee, E, C, h, I, w, V, $, H)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ee = Q;
      }
    if (ee !== S) return ee;
  }
  function c(R) {
    switch (R) {
      case void 0:
      case null:
        pe = ge.length = 0;
        break;
      default:
        if (typeof R == "function") ge[pe++] = R;
        else if (typeof R == "object") for (var S = 0, E = R.length; S < E; ++S)
          c(R[S]);
        else Ee = !!R | 0;
    }
    return c;
  }
  function f(R) {
    return R = R.prefix, R !== void 0 && (Be = null, R ? typeof R != "function" ? re = 1 : (re = 2, Be = R) : re = 0), f;
  }
  function d(R, S) {
    var E = R;
    if (33 > E.charCodeAt(0) && (E = E.trim()), Ue = E, E = [Ue], 0 < pe) {
      var C = l(-1, S, E, E, G, se, 0, 0, 0, 0);
      C !== void 0 && typeof C == "string" && (S = C);
    }
    var h = t(ke, E, S, 0, 0);
    return 0 < pe && (C = l(-2, h, E, E, G, se, h.length, 0, 0, 0), C !== void 0 && (h = C)), Ue = "", de = 0, se = G = 1, h;
  }
  var p = /^\0+/g, g = /[\0\r\f]/g, x = /: */g, b = /zoo|gra/, _ = /([,: ])(transform)/g, T = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, k = /@(k\w+)\s*(\S*)\s*/, L = /::(place)/g, P = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, Z = /\(\s*(.*)\s*\)/g, ve = /([\s\S]*?);/g, fe = /-self|flex-/g, ye = /[^]*?(:[rp][el]a[\w-]+)[^]*/, xe = /stretch|:\s*\w+\-(?:conte|avail)/, De = /([^-])(image-set\()/, se = 1, G = 1, de = 0, re = 1, ke = [], ge = [], pe = 0, Be = null, Ee = 0, Ue = "";
  return d.use = c, d.set = f, e !== void 0 && f(e), d;
}
var ia = {
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
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var oa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cn = /* @__PURE__ */ aa(
  function(e) {
    return oa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Tr = Ln(), sa = {
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
}, la = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ca = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Mn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ar = {};
Ar[Tr.ForwardRef] = ca;
Ar[Tr.Memo] = Mn;
function un(e) {
  return Tr.isMemo(e) ? Mn : Ar[e.$$typeof] || sa;
}
var ua = Object.defineProperty, fa = Object.getOwnPropertyNames, fn = Object.getOwnPropertySymbols, da = Object.getOwnPropertyDescriptor, pa = Object.getPrototypeOf, dn = Object.prototype;
function Fn(e, t, r) {
  if (typeof t != "string") {
    if (dn) {
      var n = pa(t);
      n && n !== dn && Fn(e, n, r);
    }
    var a = fa(t);
    fn && (a = a.concat(fn(t)));
    for (var i = un(e), o = un(t), l = 0; l < a.length; ++l) {
      var c = a[l];
      if (!la[c] && !(r && r[c]) && !(o && o[c]) && !(i && i[c])) {
        var f = da(t, c);
        try {
          ua(e, c, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var ha = Fn;
const ma = /* @__PURE__ */ yr(ha);
var W = { env: { NODE_ENV: "production" } };
function Pe() {
  return (Pe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var pn = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ir = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Sr.typeOf(e);
}, Et = Object.freeze([]), He = Object.freeze({});
function lt(e) {
  return typeof e == "function";
}
function ar(e) {
  return W.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function xr(e) {
  return e && typeof e.styledComponentId == "string";
}
var Qe = typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_ATTR || W.env.SC_ATTR) || "data-styled", Or = typeof window < "u" && "HTMLElement" in window, ga = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && W.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.env.REACT_APP_SC_DISABLE_SPEEDY : W.env.SC_DISABLE_SPEEDY !== void 0 && W.env.SC_DISABLE_SPEEDY !== "" ? W.env.SC_DISABLE_SPEEDY !== "false" && W.env.SC_DISABLE_SPEEDY : W.env.NODE_ENV !== "production")), va = W.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ya() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function rt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw W.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(ya.apply(void 0, [va[e]].concat(r)).trim());
}
var ba = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, o = i; r >= o; ) (o <<= 1) < 0 && rt(16, "" + r);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(a), this.length = o;
      for (var l = i; l < o; l++) this.groupSizes[l] = 0;
    }
    for (var c = this.indexOfGroup(r + 1), f = 0, d = n.length; f < d; f++) this.tag.insertRule(c, n[f]) && (this.groupSizes[r]++, c++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var o = a; o < i; o++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), o = i + a, l = i; l < o; l++) n += this.tag.getRule(l) + `/*!sc*/
`;
    return n;
  }, e;
}(), At = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), ot = 1, gt = function(e) {
  if (At.has(e)) return At.get(e);
  for (; Rt.has(ot); ) ot++;
  var t = ot++;
  return W.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && rt(16, "" + t), At.set(e, t), Rt.set(t, e), t;
}, wa = function(e) {
  return Rt.get(e);
}, _a = function(e, t) {
  t >= ot && (ot = t + 1), At.set(e, t), Rt.set(t, e);
}, Sa = "style[" + Qe + '][data-styled-version="5.3.11"]', Ta = new RegExp("^" + Qe + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Aa = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++) (n = a[i]) && e.registerName(t, n);
}, xa = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var o = r[a].trim();
    if (o) {
      var l = o.match(Ta);
      if (l) {
        var c = 0 | parseInt(l[1], 10), f = l[2];
        c !== 0 && (_a(f, c), Aa(e, f, l[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else n.push(o);
    }
  }
}, Oa = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Hn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(l) {
    for (var c = l.childNodes, f = c.length; f >= 0; f--) {
      var d = c[f];
      if (d && d.nodeType === 1 && d.hasAttribute(Qe)) return d;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Qe, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = Oa();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
}, ka = function() {
  function e(r) {
    var n = this.element = Hn(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, o = 0, l = i.length; o < l; o++) {
        var c = i[o];
        if (c.ownerNode === a) return c;
      }
      rt(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Ea = function() {
  function e(r) {
    var n = this.element = Hn(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Ra = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), hn = Or, Ca = { isServer: !Or, useCSSOMInjection: !ga }, zn = function() {
  function e(r, n, a) {
    r === void 0 && (r = He), n === void 0 && (n = {}), this.options = Pe({}, Ca, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Or && hn && (hn = !1, function(i) {
      for (var o = document.querySelectorAll(Sa), l = 0, c = o.length; l < c; l++) {
        var f = o[l];
        f && f.getAttribute(Qe) !== "active" && (xa(i, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(r) {
    return gt(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Pe({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, o = n.target, r = a ? new Ra(o) : i ? new ka(o) : new Ea(o), new ba(r)));
    var r, n, a, i, o;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (gt(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(gt(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(gt(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", o = 0; o < a; o++) {
        var l = wa(o);
        if (l !== void 0) {
          var c = r.names.get(l), f = n.getGroup(o);
          if (c && f && c.size) {
            var d = Qe + ".g" + o + '[id="' + l + '"]', p = "";
            c !== void 0 && c.forEach(function(g) {
              g.length > 0 && (p += g + ",");
            }), i += "" + f + d + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Na = /(a)(d)/gi, mn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function or(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = mn(t % 52) + r;
  return (mn(t % 52) + r).replace(Na, "$1-$2");
}
var Ye = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, $n = function(e) {
  return Ye(5381, e);
};
function La(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (lt(r) && !xr(r)) return !1;
  }
  return !0;
}
var Pa = $n("5.3.11"), Ia = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = W.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && La(t), this.componentId = r, this.baseHash = Ye(Pa, r), this.baseStyle = n, zn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var o = Je(this.rules, t, r, n).join(""), l = or(Ye(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(a, l)) {
        var c = n(o, "." + l, void 0, a);
        r.insertRules(a, l, c);
      }
      i.push(l), this.staticRulesId = l;
    }
    else {
      for (var f = this.rules.length, d = Ye(this.baseHash, n.hash), p = "", g = 0; g < f; g++) {
        var x = this.rules[g];
        if (typeof x == "string") p += x, W.env.NODE_ENV !== "production" && (d = Ye(d, x + g));
        else if (x) {
          var b = Je(x, t, r, n), _ = Array.isArray(b) ? b.join("") : b;
          d = Ye(d, _ + g), p += _;
        }
      }
      if (p) {
        var T = or(d >>> 0);
        if (!r.hasNameForId(a, T)) {
          var O = n(p, "." + T, void 0, a);
          r.insertRules(a, T, O);
        }
        i.push(T);
      }
    }
    return i.join(" ");
  }, e;
}(), Da = /^\s*\/\/.*$/gm, ja = [":", "[", ".", "#"];
function Ma(e) {
  var t, r, n, a, i = He, o = i.options, l = o === void 0 ? He : o, c = i.plugins, f = c === void 0 ? Et : c, d = new na(l), p = [], g = /* @__PURE__ */ function(_) {
    function T(O) {
      if (O) try {
        _(O + "}");
      } catch {
      }
    }
    return function(O, k, L, P, v, Z, ve, fe, ye, xe) {
      switch (O) {
        case 1:
          if (ye === 0 && k.charCodeAt(0) === 64) return _(k + ";"), "";
          break;
        case 2:
          if (fe === 0) return k + "/*|*/";
          break;
        case 3:
          switch (fe) {
            case 102:
            case 112:
              return _(L[0] + k), "";
            default:
              return k + (xe === 0 ? "/*|*/" : "");
          }
        case -2:
          k.split("/*|*/}").forEach(T);
      }
    };
  }(function(_) {
    p.push(_);
  }), x = function(_, T, O) {
    return T === 0 && ja.indexOf(O[r.length]) !== -1 || O.match(a) ? _ : "." + t;
  };
  function b(_, T, O, k) {
    k === void 0 && (k = "&");
    var L = _.replace(Da, ""), P = T && O ? O + " " + T + " { " + L + " }" : L;
    return t = k, r = T, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), d(O || !T ? "" : T, P);
  }
  return d.use([].concat(f, [function(_, T, O) {
    _ === 2 && O.length && O[0].lastIndexOf(r) > 0 && (O[0] = O[0].replace(n, x));
  }, g, function(_) {
    if (_ === -2) {
      var T = p;
      return p = [], T;
    }
  }])), b.hash = f.length ? f.reduce(function(_, T) {
    return T.name || rt(15), Ye(_, T.name);
  }, 5381).toString() : "", b;
}
var Bn = ze.createContext();
Bn.Consumer;
var Un = ze.createContext(), Fa = (Un.Consumer, new zn()), sr = Ma();
function Ha() {
  return gr(Bn) || Fa;
}
function za() {
  return gr(Un) || sr;
}
var $a = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = sr);
      var o = n.name + i.hash;
      a.hasNameForId(n.id, o) || a.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return rt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = sr), this.name + t.hash;
  }, e;
}(), Ba = /([A-Z])/, Ua = /([A-Z])/g, Wa = /^ms-/, Va = function(e) {
  return "-" + e.toLowerCase();
};
function gn(e) {
  return Ba.test(e) ? e.replace(Ua, Va).replace(Wa, "-ms-") : e;
}
var vn = function(e) {
  return e == null || e === !1 || e === "";
};
function Je(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], o = 0, l = e.length; o < l; o += 1) (a = Je(e[o], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (vn(e)) return "";
  if (xr(e)) return "." + e.styledComponentId;
  if (lt(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !t) return e;
    var c = e(t);
    return W.env.NODE_ENV !== "production" && Sr.isElement(c) && console.warn(ar(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Je(c, t, r, n);
  }
  var f;
  return e instanceof $a ? r ? (e.inject(r, n), e.getName(n)) : e : ir(e) ? function d(p, g) {
    var x, b, _ = [];
    for (var T in p) p.hasOwnProperty(T) && !vn(p[T]) && (Array.isArray(p[T]) && p[T].isCss || lt(p[T]) ? _.push(gn(T) + ":", p[T], ";") : ir(p[T]) ? _.push.apply(_, d(p[T], T)) : _.push(gn(T) + ": " + (x = T, (b = p[T]) == null || typeof b == "boolean" || b === "" ? "" : typeof b != "number" || b === 0 || x in ia || x.startsWith("--") ? String(b).trim() : b + "px") + ";"));
    return g ? [g + " {"].concat(_, ["}"]) : _;
  }(e) : e.toString();
}
var yn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function qa(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return lt(e) || ir(e) ? yn(Je(pn(Et, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : yn(Je(pn(e, r)));
}
var bn = /invalid hook call/i, vt = /* @__PURE__ */ new Set(), Ya = function(e, t) {
  if (W.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (bn.test(i)) a = !1, vt.delete(r);
        else {
          for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++) l[c - 1] = arguments[c];
          n.apply(void 0, [i].concat(l));
        }
      }, hi(), a && !vt.has(r) && (console.warn(r), vt.add(r));
    } catch (i) {
      bn.test(i.message) && vt.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Xa = function(e, t, r) {
  return r === void 0 && (r = He), e.theme !== r.theme && e.theme || t || r.theme;
}, Ga = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ka = /(^-|-$)/g;
function Qt(e) {
  return e.replace(Ga, "-").replace(Ka, "");
}
var Za = function(e) {
  return or($n(e) >>> 0);
};
function yt(e) {
  return typeof e == "string" && (W.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var lr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Qa = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ja(e, t, r) {
  var n = e[r];
  lr(t) && lr(n) ? Wn(n, t) : e[r] = t;
}
function Wn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    if (lr(o)) for (var l in o) Qa(l) && Ja(e, o[l], l);
  }
  return e;
}
var Vn = ze.createContext();
Vn.Consumer;
var Jt = {};
function qn(e, t, r) {
  var n = xr(e), a = !yt(e), i = t.attrs, o = i === void 0 ? Et : i, l = t.componentId, c = l === void 0 ? function(k, L) {
    var P = typeof k != "string" ? "sc" : Qt(k);
    Jt[P] = (Jt[P] || 0) + 1;
    var v = P + "-" + Za("5.3.11" + P + Jt[P]);
    return L ? L + "-" + v : v;
  }(t.displayName, t.parentComponentId) : l, f = t.displayName, d = f === void 0 ? function(k) {
    return yt(k) ? "styled." + k : "Styled(" + ar(k) + ")";
  }(e) : f, p = t.displayName && t.componentId ? Qt(t.displayName) + "-" + t.componentId : t.componentId || c, g = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, x = t.shouldForwardProp;
  n && e.shouldForwardProp && (x = t.shouldForwardProp ? function(k, L, P) {
    return e.shouldForwardProp(k, L, P) && t.shouldForwardProp(k, L, P);
  } : e.shouldForwardProp);
  var b, _ = new Ia(r, p, n ? e.componentStyle : void 0), T = _.isStatic && o.length === 0, O = function(k, L) {
    return function(P, v, Z, ve) {
      var fe = P.attrs, ye = P.componentStyle, xe = P.defaultProps, De = P.foldedComponentIds, se = P.shouldForwardProp, G = P.styledComponentId, de = P.target, re = function(C, h, I) {
        C === void 0 && (C = He);
        var w = Pe({}, h, { theme: C }), V = {};
        return I.forEach(function($) {
          var H, j, ee, Q = $;
          for (H in lt(Q) && (Q = Q(w)), Q) w[H] = V[H] = H === "className" ? (j = V[H], ee = Q[H], j && ee ? j + " " + ee : j || ee) : Q[H];
        }), [w, V];
      }(Xa(v, gr(Vn), xe) || He, v, fe), ke = re[0], ge = re[1], pe = function(C, h, I, w) {
        var V = Ha(), $ = za(), H = h ? C.generateAndInjectStyles(He, V, $) : C.generateAndInjectStyles(I, V, $);
        return W.env.NODE_ENV !== "production" && !h && w && w(H), H;
      }(ye, ve, ke, W.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), Be = Z, Ee = ge.$as || v.$as || ge.as || v.as || de, Ue = yt(Ee), R = ge !== v ? Pe({}, v, {}, ge) : v, S = {};
      for (var E in R) E[0] !== "$" && E !== "as" && (E === "forwardedAs" ? S.as = R[E] : (se ? se(E, cn, Ee) : !Ue || cn(E)) && (S[E] = R[E]));
      return v.style && ge.style !== v.style && (S.style = Pe({}, v.style, {}, ge.style)), S.className = Array.prototype.concat(De, G, pe !== G ? pe : null, v.className, ge.className).filter(Boolean).join(" "), S.ref = Be, mi(Ee, S);
    }(b, k, L, T);
  };
  return O.displayName = d, (b = ze.forwardRef(O)).attrs = g, b.componentStyle = _, b.displayName = d, b.shouldForwardProp = x, b.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Et, b.styledComponentId = p, b.target = n ? e.target : e, b.withComponent = function(k) {
    var L = t.componentId, P = function(Z, ve) {
      if (Z == null) return {};
      var fe, ye, xe = {}, De = Object.keys(Z);
      for (ye = 0; ye < De.length; ye++) fe = De[ye], ve.indexOf(fe) >= 0 || (xe[fe] = Z[fe]);
      return xe;
    }(t, ["componentId"]), v = L && L + "-" + (yt(k) ? k : Qt(ar(k)));
    return qn(k, Pe({}, P, { attrs: g, componentId: v }), r);
  }, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? Wn({}, e.defaultProps, k) : k;
  } }), W.env.NODE_ENV !== "production" && (Ya(d, p), b.warnTooManyClasses = /* @__PURE__ */ function(k, L) {
    var P = {}, v = !1;
    return function(Z) {
      if (!v && (P[Z] = !0, Object.keys(P).length >= 200)) {
        var ve = L ? ' with the id of "' + L + '"' : "";
        console.warn("Over 200 classes were generated for component " + k + ve + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, P = {};
      }
    };
  }(d, p)), Object.defineProperty(b, "toString", { value: function() {
    return "." + b.styledComponentId;
  } }), a && ma(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), b;
}
var cr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = He), !Sr.isValidElementType(n)) return rt(1, String(n));
    var i = function() {
      return r(n, a, qa.apply(void 0, arguments));
    };
    return i.withConfig = function(o) {
      return t(r, n, Pe({}, a, {}, o));
    }, i.attrs = function(o) {
      return t(r, n, Pe({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, i;
  }(qn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  cr[e] = cr(e);
});
W.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), W.env.NODE_ENV !== "production" && W.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const eo = cr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, to = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), ro = (e) => !e.startsWith("https://") && !e.startsWith("http://") && to(e) ? `mailto:${e}` : e, no = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Fe = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: o,
  body: l,
  eventFormat: c,
  eventLocation: f,
  eventTime: d,
  buttons: p,
  linkLabel: g,
  linkUrl: x,
  tags: b,
  showBorders: _,
  cardLink: T
}) => /* @__PURE__ */ m.jsx(
  kr,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: i,
    icon: o,
    body: l,
    eventFormat: c,
    eventLocation: f,
    eventTime: d,
    buttons: p,
    linkLabel: g,
    linkUrl: x,
    tags: b,
    showBorders: _,
    cardLink: T
  }
);
Fe.propTypes = {
  /**
   * Type of card
   */
  type: s.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: s.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: s.bool,
  /**
   * Card title
   */
  title: s.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: s.arrayOf(s.string),
  /**
   * Card body content
   */
  body: s.string,
  /**
   * Event info format
   */
  eventFormat: s.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: s.string,
  /**
   * Event start time
   */
  eventTime: s.string,
  /**
   * Card header image
   */
  image: s.string,
  /**
   * Card header image alt text
   */
  imageAltText: s.string,
  /**
   * Buttons
   */
  buttons: s.arrayOf(
    s.shape({
      ariaLabel: s.string,
      color: s.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: s.arrayOf(s.string),
      href: s.string,
      label: s.string,
      onClick: s.func,
      size: s.oneOf(["default", "small", "xsmall"]),
      target: s.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: s.string,
  linkUrl: s.string,
  /**
   * Tags
   */
  tags: s.arrayOf(
    s.shape({
      ariaLabel: s.string,
      color: s.oneOf(["white", "gray", "dark"]),
      href: s.string,
      label: s.string,
      onClick: s.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: s.bool,
  /**
   * Card link
   */
  cardLink: s.string
};
Fe.defaultProps = {
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
const kr = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: o,
  body: l,
  eventFormat: c,
  eventLocation: f,
  eventTime: d,
  buttons: p,
  linkLabel: g,
  linkUrl: x,
  tags: b,
  showBorders: _,
  cardLink: T
}) => {
  const O = st("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !_
  });
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs(eo, { className: O, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ m.jsx(
      _r,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: T,
        title: i
      }
    ),
    !n && o && /* @__PURE__ */ m.jsx(
      "i",
      {
        className: `${o == null ? void 0 : o[0]} fa-${o == null ? void 0 : o[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ m.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ m.jsx(
      Ct,
      {
        type: e,
        body: l,
        eventFormat: c,
        eventLocation: f,
        eventTime: d,
        title: i,
        buttons: p,
        linkLabel: g,
        linkUrl: x,
        tags: b,
        cardLink: T
      }
    ) }) : /* @__PURE__ */ m.jsx(
      Ct,
      {
        type: e,
        body: l,
        eventFormat: c,
        eventLocation: f,
        eventTime: d,
        title: i,
        buttons: p,
        linkLabel: g,
        linkUrl: x,
        tags: b,
        cardLink: T
      }
    )
  ] }) });
};
kr.propTypes = {
  type: s.oneOf(["default", "degree", "event", "news", "story"]),
  width: s.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: s.bool,
  title: s.string.isRequired,
  icon: s.arrayOf(s.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: s.string,
  eventFormat: s.oneOf(["stack", "inline"]),
  eventLocation: s.string,
  eventTime: s.string,
  image: s.string,
  imageAltText: s.string,
  buttons: s.arrayOf(
    s.shape({
      ariaLabel: s.string,
      color: s.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: s.arrayOf(s.string),
      href: s.string,
      label: s.string,
      onClick: s.func,
      size: s.oneOf(["default", "small", "xsmall"]),
      target: s.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: s.string,
  linkUrl: s.string,
  tags: s.arrayOf(
    s.shape({
      ariaLabel: s.string,
      color: s.oneOf(["white", "gray", "dark"]),
      href: s.string,
      label: s.string,
      onClick: s.func
    })
  ),
  showBorders: s.bool,
  cardLink: s.string
};
kr.defaultProps = {
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
const Ct = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: i,
  buttons: o,
  linkLabel: l,
  linkUrl: c,
  tags: f,
  cardLink: d
}) => /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
  !!i && /* @__PURE__ */ m.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ m.jsx("h3", { className: "card-title", children: d ? /* @__PURE__ */ m.jsx("a", { href: d, children: i }) : i }) }),
  !!t && /* @__PURE__ */ m.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: Ke(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ m.jsx(
    Er,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  o && /* @__PURE__ */ m.jsx("div", { className: "card-buttons", children: o.map((p) => /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ m.jsx(
        br,
        {
          ariaLabel: p.ariaLabel,
          color: p.color,
          icon: p.icon,
          href: p.href,
          label: p.label,
          onClick: p.onClick,
          size: p.size,
          target: p.target,
          cardTitle: i
        }
      )
    },
    `${p.label}-${p.href}`
  )) }),
  c && l && /* @__PURE__ */ m.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ m.jsx(
    Ze,
    {
      gaData: {
        ...no,
        section: i,
        text: l
      },
      children: /* @__PURE__ */ m.jsx("a", { href: ro(c), children: l })
    }
  ) }),
  f && /* @__PURE__ */ m.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: f.map((p) => (
    // @ts-ignore
    /* @__PURE__ */ m.jsx(
      wr,
      {
        ariaLabel: p.ariaLabel,
        color: p.color,
        href: p.href,
        label: p.label,
        onClick: p.onClick,
        cardTitle: i
      },
      `${p.label}-${p.href}`
    )
  )) })
] });
Ct.propTypes = {
  type: s.oneOf(["default", "degree", "event", "news", "story"]),
  body: s.string,
  eventFormat: s.oneOf(["stack", "inline"]),
  eventLocation: s.string,
  eventTime: s.string,
  title: s.string.isRequired,
  buttons: s.arrayOf(
    s.shape({
      ariaLabel: s.string,
      color: s.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: s.arrayOf(s.string),
      href: s.string,
      label: s.string,
      onClick: s.func,
      size: s.oneOf(["default", "small", "xsmall"]),
      target: s.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: s.string,
  linkUrl: s.string,
  tags: s.arrayOf(
    s.shape({
      ariaLabel: s.string,
      color: s.oneOf(["white", "gray", "dark"]),
      href: s.string,
      label: s.string,
      onClick: s.func
    })
  ),
  cardLink: s.string
};
Ct.defaultProps = {
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
const Er = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ m.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ m.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: Ke(t) })
  ] }),
  r && /* @__PURE__ */ m.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ke(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
  t && /* @__PURE__ */ m.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ m.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: Ke(t) })
  ] }) }),
  r && /* @__PURE__ */ m.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ m.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ m.jsx("span", { children: /* @__PURE__ */ m.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ke(r)
      }
    ) })
  ] }) })
] });
Er.propTypes = {
  eventFormat: s.oneOf(["stack", "inline"]),
  eventLocation: s.string,
  eventTime: s.string
};
Er.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const io = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, Rr = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ m.jsx(
    "div",
    {
      role: "group",
      className: "glide__bullets",
      "data-glide-el": "controls[nav]",
      "data-testid": "bullets-container",
      onClick: (t) => t.stopPropagation(),
      onKeyDown: (t) => t.stopPropagation(),
      children: e
    }
  )
);
Rr.propTypes = {
  children: s.oneOfType([
    s.element,
    s.arrayOf(s.element)
  ]).isRequired
};
const Yn = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ m.jsx(Ze, { gaData: io, children: /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ m.jsx(Rr, { children: t });
};
Yn.propTypes = {
  buttonCount: s.number.isRequired
};
const Xn = ({ imageItems: e, onItemClick: t = () => null }) => {
  const r = (a, i) => {
    const { ariaSelected: o } = a.currentTarget.dataset;
    a.currentTarget.dataset.ariaSelected = String(!o), a.stopPropagation(), t(i);
  }, n = e.map((a, i) => /* @__PURE__ */ m.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${i}`,
      "aria-label": `Slide view ${i + 1}`,
      "aria-selected": "false",
      onClick: (o) => r(o, i),
      onKeyDown: (o) => r(o, i),
      children: /* @__PURE__ */ m.jsx(
        "img",
        {
          src: a,
          alt: `Slide ${i + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${i}`
  ));
  return /* @__PURE__ */ m.jsx(Rr, { children: n });
};
Xn.propTypes = {
  imageItems: s.arrayOf(s.string).isRequired,
  onItemClick: s.func
};
const Cr = ({ onClick: e = () => null }) => /* @__PURE__ */ m.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ m.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
Cr.propTypes = {
  onClick: s.func
};
const Nr = ({ onClick: e = () => null }) => /* @__PURE__ */ m.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ m.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
Nr.propTypes = {
  onClick: s.func
};
const wn = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, Lr = ({ children: e = null }) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
Lr.propTypes = {
  children: s.arrayOf(s.element)
};
const Gn = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ m.jsxs(Lr, { children: [
  /* @__PURE__ */ m.jsx(Ze, { gaData: { ...wn, text: "left chevron" }, children: /* @__PURE__ */ m.jsx(Nr, { onClick: e }) }),
  t,
  /* @__PURE__ */ m.jsx(Ze, { gaData: { ...wn, text: "right chevron" }, children: /* @__PURE__ */ m.jsx(Cr, { onClick: e }) })
] });
Gn.propTypes = {
  children: s.element,
  onClick: s.func
};
const Kn = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ m.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ m.jsx("ul", { className: "glide__slides", children: t });
};
Kn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: s.arrayOf(s.object)
};
function _n(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _n(Object(r), !0).forEach(function(n) {
      oo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _n(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xt = function(t) {
    return typeof t;
  } : xt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(e);
}
function Pt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ao(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function It(e, t, r) {
  return t && ao(e.prototype, t), e;
}
function oo(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function so(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && ur(e, t);
}
function et(e) {
  return et = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, et(e);
}
function ur(e, t) {
  return ur = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, ur(e, t);
}
function lo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function co(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uo(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return co(e);
}
function fo(e) {
  var t = lo();
  return function() {
    var n = et(e), a;
    if (t) {
      var i = et(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return uo(this, a);
  };
}
function po(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = et(e), e !== null); )
    ;
  return e;
}
function Ot() {
  return typeof Reflect < "u" && Reflect.get ? Ot = Reflect.get : Ot = function(t, r, n) {
    var a = po(t, r);
    if (a) {
      var i = Object.getOwnPropertyDescriptor(a, r);
      return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
    }
  }, Ot.apply(this, arguments);
}
var ho = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: "slider",
  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,
  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,
  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,
  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,
  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: !1,
  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: !0,
  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: !0,
  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: !1,
  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,
  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,
  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: "",
  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,
  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,
  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,
  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: !0,
  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,
  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: !0,
  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,
  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: "ltr",
  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,
  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,
  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},
  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: "glide--swipeable",
    dragging: "glide--dragging",
    direction: {
      ltr: "glide--ltr",
      rtl: "glide--rtl"
    },
    type: {
      slider: "glide--slider",
      carousel: "glide--carousel"
    },
    slide: {
      clone: "glide__slide--clone",
      active: "glide__slide--active"
    },
    arrow: {
      disabled: "glide__arrow--disabled"
    },
    nav: {
      active: "glide__bullet--active"
    }
  }
};
function Ie(e) {
  console.error("[Glide warn]: ".concat(e));
}
function oe(e) {
  return parseInt(e);
}
function mo(e) {
  return parseFloat(e);
}
function fr(e) {
  return typeof e == "string";
}
function tt(e) {
  var t = xt(e);
  return t === "function" || t === "object" && !!e;
}
function Nt(e) {
  return typeof e == "function";
}
function Zn(e) {
  return typeof e > "u";
}
function dr(e) {
  return e.constructor === Array;
}
function go(e, t, r) {
  var n = {};
  for (var a in t)
    Nt(t[a]) ? n[a] = t[a](e, n, r) : Ie("Extension must be a function");
  for (var i in n)
    Nt(n[i].mount) && n[i].mount();
  return n;
}
function X(e, t, r) {
  Object.defineProperty(e, t, r);
}
function vo(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function pr(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = Sn(Sn({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var yo = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return It(e, [{
    key: "on",
    value: function(r, n) {
      if (dr(r)) {
        for (var a = 0; a < r.length; a++)
          this.on(r[a], n);
        return;
      }
      this.hop.call(this.events, r) || (this.events[r] = []);
      var i = this.events[r].push(n) - 1;
      return {
        remove: function() {
          delete this.events[r][i];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */
  }, {
    key: "emit",
    value: function(r, n) {
      if (dr(r)) {
        for (var a = 0; a < r.length; a++)
          this.emit(r[a], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(i) {
        i(n || {});
      });
    }
  }]), e;
}(), bo = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Pt(this, e), this._c = {}, this._t = [], this._e = new yo(), this.disabled = !1, this.selector = t, this.settings = pr(ho, r), this.index = this.settings.startAt;
  }
  return It(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), tt(r) ? this._c = go(this, r, this._e) : Ie("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */
  }, {
    key: "mutate",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return dr(r) ? this._t = r : Ie("You need to provide a array on `mutate()`"), this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */
  }, {
    key: "update",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = pr(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */
  }, {
    key: "go",
    value: function(r) {
      return this._c.Run.make(r), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(r) {
      return this._c.Transition.disable(), this._c.Move.make(r), this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */
  }, {
    key: "destroy",
    value: function() {
      return this._e.emit("destroy"), this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */
  }, {
    key: "play",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return r && (this.settings.autoplay = r), this._e.emit("play"), this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */
  }, {
    key: "pause",
    value: function() {
      return this._e.emit("pause"), this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */
  }, {
    key: "disable",
    value: function() {
      return this.disabled = !0, this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */
  }, {
    key: "enable",
    value: function() {
      return this.disabled = !1, this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */
  }, {
    key: "on",
    value: function(r, n) {
      return this._e.on(r, n), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(r) {
      return this.settings.type === r;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */
  }, {
    key: "settings",
    get: function() {
      return this._o;
    },
    set: function(r) {
      tt(r) ? this._o = r : Ie("Options must be an `object` instance.");
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */
  }, {
    key: "index",
    get: function() {
      return this._i;
    },
    set: function(r) {
      this._i = oe(r);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */
  }, {
    key: "type",
    get: function() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */
  }, {
    key: "disabled",
    get: function() {
      return this._d;
    },
    set: function(r) {
      this._d = !!r;
    }
  }]), e;
}();
function wo(e, t, r) {
  var n = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function() {
      this._o = !1;
    },
    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function(f) {
      var d = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = f, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        d.isStart() && r.emit("run.start", d.move), d.isEnd() && r.emit("run.end", d.move), d.isOffset() && (d._o = !1, r.emit("run.offset", d.move)), r.emit("run.after", d.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var f = this.move, d = this.length, p = f.steps, g = f.direction, x = 1;
      if (g === "=") {
        if (e.settings.bound && oe(p) > d) {
          e.index = d;
          return;
        }
        e.index = p;
        return;
      }
      if (g === ">" && p === ">") {
        e.index = d;
        return;
      }
      if (g === "<" && p === "<") {
        e.index = 0;
        return;
      }
      if (g === "|" && (x = e.settings.perView || 1), g === ">" || g === "|" && p === ">") {
        var b = a(x);
        b > d && (this._o = !0), e.index = i(b, x);
        return;
      }
      if (g === "<" || g === "|" && p === "<") {
        var _ = o(x);
        _ < 0 && (this._o = !0), e.index = l(_, x);
        return;
      }
      Ie("Invalid direction pattern [".concat(g).concat(p, "] has been used"));
    },
    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function() {
      return e.index <= 0;
    },
    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function() {
      return e.index >= this.length;
    },
    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return f ? this._o ? f === "|>" ? this.move.direction === "|" && this.move.steps === ">" : f === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === f : !1 : this._o;
    },
    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function() {
      return e.isType("slider") && e.settings.focusAt !== "center" && e.settings.bound;
    }
  };
  function a(c) {
    var f = e.index;
    return e.isType("carousel") ? f + c : f + (c - f % c);
  }
  function i(c, f) {
    var d = n.length;
    return c <= d ? c : e.isType("carousel") ? c - (d + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? d : 0 : n.isBound() ? d : Math.floor(d / f) * f;
  }
  function o(c) {
    var f = e.index;
    if (e.isType("carousel"))
      return f - c;
    var d = Math.ceil(f / c);
    return (d - 1) * c;
  }
  function l(c, f) {
    var d = n.length;
    return c >= 0 ? c : e.isType("carousel") ? c + (d + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? d : Math.floor(d / f) * f : 0;
  }
  return X(n, "move", {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function() {
      return this._m;
    },
    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function(f) {
      var d = f.substr(1);
      this._m = {
        direction: f.substr(0, 1),
        steps: d ? oe(d) ? oe(d) : d : 0
      };
    }
  }), X(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var f = e.settings, d = t.Html.slides.length;
      return this.isBound() ? d - 1 - (oe(f.perView) - 1) + oe(f.focusAt) : d - 1;
    }
  }), X(n, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), n;
}
function Tn() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Dt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, i, o, l = 0, c = function() {
    l = r.leading === !1 ? 0 : Tn(), n = null, o = e.apply(a, i), n || (a = i = null);
  }, f = function() {
    var p = Tn();
    !l && r.leading === !1 && (l = p);
    var g = t - (p - l);
    return a = this, i = arguments, g <= 0 || g > t ? (n && (clearTimeout(n), n = null), l = p, o = e.apply(a, i), n || (a = i = null)) : !n && r.trailing !== !1 && (n = setTimeout(c, g)), o;
  };
  return f.cancel = function() {
    clearTimeout(n), l = 0, n = a = i = null;
  }, f;
}
var bt = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function _o(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(i) {
      for (var o = 0, l = i.length; o < l; o++) {
        var c = i[o].style, f = t.Direction.value;
        o !== 0 ? c[bt[f][0]] = "".concat(this.value / 2, "px") : c[bt[f][0]] = "", o !== i.length - 1 ? c[bt[f][1]] = "".concat(this.value / 2, "px") : c[bt[f][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(i) {
      for (var o = 0, l = i.length; o < l; o++) {
        var c = i[o].style;
        c.marginLeft = "", c.marginRight = "";
      }
    }
  };
  return X(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return oe(e.settings.gap);
    }
  }), X(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), X(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var i = e.settings.perView;
      return n.value * (i - 1) / i;
    }
  }), r.on(["build.after", "update"], Dt(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function Qn(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function hr(e) {
  return Array.prototype.slice.call(e);
}
var So = '[data-glide-el="track"]';
function To(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(So), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = hr(this.wrapper.children).filter(function(i) {
        return !i.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return X(n, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return n._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(i) {
      fr(i) && (i = document.querySelector(i)), i !== null ? n._r = i : Ie("Root element must be a existing Html node");
    }
  }), X(n, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return n._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(i) {
      n._t = i;
    }
  }), X(n, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return n.track.children[0];
    }
  }), r.on("update", function() {
    n.collectSlides();
  }), n;
}
function Ao(e, t, r) {
  var n = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.peek;
    }
  };
  return X(n, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(i) {
      tt(i) ? (i.before = oe(i.before), i.after = oe(i.after)) : i = oe(i), n._v = i;
    }
  }), X(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var i = n.value, o = e.settings.perView;
      return tt(i) ? i.before / o + i.after / o : i * 2 / o;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function xo(e, t, r) {
  var n = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._o = 0;
    },
    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function() {
      var i = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = o, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: i.value
        });
      });
    }
  };
  return X(n, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return n._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(i) {
      n._o = Zn(i) ? 0 : oe(i);
    }
  }), X(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), X(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var i = this.offset, o = this.translate;
      return t.Direction.is("rtl") ? o + i : o - i;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Oo(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var i = "".concat(this.slideWidth, "px"), o = t.Html.slides, l = 0; l < o.length; l++)
        o[l].style.width = i;
    },
    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function() {
      t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function() {
      for (var i = t.Html.slides, o = 0; o < i.length; o++)
        i[o].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return X(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), X(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), X(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), X(n, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return n.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
    }
  }), r.on(["build.before", "resize", "update"], function() {
    n.setupSlides(), n.setupWrapper();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function ko(e, t, r) {
  var n = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      r.emit("build.before"), this.typeClass(), this.activeClass(), r.emit("build.after");
    },
    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function() {
      t.Html.root.classList.add(e.settings.classes.type[e.settings.type]);
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function() {
      var i = e.settings.classes, o = t.Html.slides[e.index];
      o && (o.classList.add(i.slide.active), Qn(o).forEach(function(l) {
        l.classList.remove(i.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var i = e.settings.classes, o = i.type, l = i.slide;
      t.Html.root.classList.remove(o[e.settings.type]), t.Html.slides.forEach(function(c) {
        c.classList.remove(l.active);
      });
    }
  };
  return r.on(["destroy", "update"], function() {
    n.removeClasses();
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), r.on("move.after", function() {
    n.activeClass();
  }), n;
}
function Eo(e, t, r) {
  var n = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function() {
      this.items = [], e.isType("carousel") && (this.items = this.collect());
    },
    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = t.Html.slides, l = e.settings, c = l.perView, f = l.classes, d = l.cloningRatio;
      if (o.length > 0)
        for (var p = +!!e.settings.peek, g = c + p + Math.round(c / 2), x = o.slice(0, g).reverse(), b = o.slice(g * -1), _ = 0; _ < Math.max(d, Math.floor(c / o.length)); _++) {
          for (var T = 0; T < x.length; T++) {
            var O = x[T].cloneNode(!0);
            O.classList.add(f.slide.clone), i.push(O);
          }
          for (var k = 0; k < b.length; k++) {
            var L = b[k].cloneNode(!0);
            L.classList.add(f.slide.clone), i.unshift(L);
          }
        }
      return i;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var i = this.items, o = t.Html, l = o.wrapper, c = o.slides, f = Math.floor(i.length / 2), d = i.slice(0, f).reverse(), p = i.slice(f * -1).reverse(), g = "".concat(t.Sizes.slideWidth, "px"), x = 0; x < p.length; x++)
        l.appendChild(p[x]);
      for (var b = 0; b < d.length; b++)
        l.insertBefore(d[b], c[0]);
      for (var _ = 0; _ < i.length; _++)
        i[_].style.width = g;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var i = this.items, o = 0; o < i.length; o++)
        t.Html.wrapper.removeChild(i[o]);
    }
  };
  return X(n, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (t.Sizes.slideWidth + t.Gaps.value) * n.items.length;
    }
  }), r.on("update", function() {
    n.remove(), n.mount(), n.append();
  }), r.on("build.before", function() {
    e.isType("carousel") && n.append();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
var $e = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(this, e), this.listeners = t;
  }
  return It(e, [{
    key: "on",
    value: function(r, n, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      fr(r) && (r = [r]);
      for (var o = 0; o < r.length; o++)
        this.listeners[r[o]] = a, n.addEventListener(r[o], this.listeners[r[o]], i);
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */
  }, {
    key: "off",
    value: function(r, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      fr(r) && (r = [r]);
      for (var i = 0; i < r.length; i++)
        n.removeEventListener(r[i], this.listeners[r[i]], a);
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */
  }, {
    key: "destroy",
    value: function() {
      delete this.listeners;
    }
  }]), e;
}();
function Ro(e, t, r) {
  var n = new $e(), a = {
    /**
     * Initializes window bindings.
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("resize", window, Dt(function() {
        r.emit("resize");
      }, e.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("resize", window);
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
var Co = ["ltr", "rtl"], No = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Lo(e, t, r) {
  var n = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.direction;
    },
    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function(i) {
      var o = i.slice(0, 1);
      return this.is("rtl") ? i.split(o).join(No[o]) : i;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(i) {
      return this.value === i;
    },
    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function() {
      t.Html.root.classList.add(e.settings.classes.direction[this.value]);
    },
    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function() {
      t.Html.root.classList.remove(e.settings.classes.direction[this.value]);
    }
  };
  return X(n, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(i) {
      Co.indexOf(i) > -1 ? n._v = i : Ie("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Po(e, t) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return t.Direction.is("rtl") ? -n : n;
    }
  };
}
function Io(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = Math.floor(n / t.Sizes.slideWidth);
      return n + t.Gaps.value * a;
    }
  };
}
function Do(e, t) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return n + t.Clones.grow / 2;
    }
  };
}
function jo(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      if (e.settings.focusAt >= 0) {
        var a = t.Peek.value;
        return tt(a) ? n - a.before : n - a;
      }
      return n;
    }
  };
}
function Mo(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = t.Gaps.value, i = t.Sizes.width, o = e.settings.focusAt, l = t.Sizes.slideWidth;
      return o === "center" ? n - (i / 2 - l / 2) : n - l * o - a * o;
    }
  };
}
function Fo(e, t, r) {
  var n = [Io, Do, jo, Mo].concat(e._t, [Po]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(i) {
      for (var o = 0; o < n.length; o++) {
        var l = n[o];
        Nt(l) && Nt(l().modify) ? i = l(e, t, r).modify(i) : Ie("Transformer should be a function that returns an object with `modify()` method");
      }
      return i;
    }
  };
}
function Ho(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var o = Fo(e, t).mutate(i), l = "translate3d(".concat(-1 * o, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = l, t.Html.wrapper.style.webkitTransform = l, t.Html.wrapper.style.transform = l;
    },
    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transform = "";
    },
    /**
     * @return {number}
     */
    getStartIndex: function() {
      var i = t.Sizes.length, o = e.index, l = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (o - l) : (o + l) % i;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var i = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i * -1 : i;
    }
  };
  return r.on("move", function(a) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(a.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var i = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(i - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function zo(e, t, r) {
  var n = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(o) {
      var l = e.settings;
      return n ? "".concat(o, " 0ms ").concat(l.animationTimingFunc) : "".concat(o, " ").concat(this.duration, "ms ").concat(l.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(o);
    },
    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transition = "";
    },
    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function(o) {
      setTimeout(function() {
        o();
      }, this.duration);
    },
    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function() {
      n = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      n = !0, this.set();
    }
  };
  return X(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var o = e.settings;
      return e.isType("slider") && t.Run.offset ? o.rewindDuration : o.animationDuration;
    }
  }), r.on("move", function() {
    a.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    a.disable();
  }), r.on("run", function() {
    a.enable();
  }), r.on("destroy", function() {
    a.remove();
  }), a;
}
var Jn = !1;
try {
  var An = Object.defineProperty({}, "passive", {
    get: function() {
      Jn = !0;
    }
  });
  window.addEventListener("testPassive", null, An), window.removeEventListener("testPassive", null, An);
} catch {
}
var mr = Jn, wt = ["touchstart", "mousedown"], xn = ["touchmove", "mousemove"], On = ["touchend", "touchcancel", "mouseup", "mouseleave"], kn = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function $o(e, t, r) {
  var n = new $e(), a = 0, i = 0, o = 0, l = !1, c = mr ? {
    passive: !0
  } : !1, f = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function() {
      this.bindSwipeStart();
    },
    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function(p) {
      if (!l && !e.disabled) {
        this.disable();
        var g = this.touches(p);
        a = null, i = oe(g.pageX), o = oe(g.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(p) {
      if (!e.disabled) {
        var g = e.settings, x = g.touchAngle, b = g.touchRatio, _ = g.classes, T = this.touches(p), O = oe(T.pageX) - i, k = oe(T.pageY) - o, L = Math.abs(O << 2), P = Math.abs(k << 2), v = Math.sqrt(L + P), Z = Math.sqrt(P);
        if (a = Math.asin(Z / v), a * 180 / Math.PI < x)
          p.stopPropagation(), t.Move.make(O * mo(b)), t.Html.root.classList.add(_.dragging), r.emit("swipe.move");
        else
          return !1;
      }
    },
    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function(p) {
      if (!e.disabled) {
        var g = e.settings, x = g.perSwipe, b = g.touchAngle, _ = g.classes, T = this.touches(p), O = this.threshold(p), k = T.pageX - i, L = a * 180 / Math.PI;
        this.enable(), k > O && L < b ? t.Run.make(t.Direction.resolve("".concat(x, "<"))) : k < -O && L < b ? t.Run.make(t.Direction.resolve("".concat(x, ">"))) : t.Move.make(), t.Html.root.classList.remove(_.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var p = this, g = e.settings, x = g.swipeThreshold, b = g.dragThreshold;
      x && n.on(wt[0], t.Html.wrapper, function(_) {
        p.start(_);
      }, c), b && n.on(wt[1], t.Html.wrapper, function(_) {
        p.start(_);
      }, c);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(wt[0], t.Html.wrapper, c), n.off(wt[1], t.Html.wrapper, c);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var p = this;
      n.on(xn, t.Html.wrapper, Dt(function(g) {
        p.move(g);
      }, e.settings.throttle), c);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(xn, t.Html.wrapper, c);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var p = this;
      n.on(On, t.Html.wrapper, function(g) {
        p.end(g);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(On, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(p) {
      return kn.indexOf(p.type) > -1 ? p : p.touches[0] || p.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(p) {
      var g = e.settings;
      return kn.indexOf(p.type) > -1 ? g.dragThreshold : g.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return l = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return l = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    f.unbindSwipeStart(), f.unbindSwipeMove(), f.unbindSwipeEnd(), n.destroy();
  }), f;
}
function Bo(e, t, r) {
  var n = new $e(), a = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("dragstart", t.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("dragstart", t.Html.wrapper);
    },
    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function(o) {
      o.preventDefault();
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
function Uo(e, t, r) {
  var n = new $e(), a = !1, i = !1, o = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._a = t.Html.wrapper.querySelectorAll("a"), this.bind();
    },
    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("click", t.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("click", t.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(c) {
      i && (c.stopPropagation(), c.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (i = !0, !a) {
        for (var c = 0; c < this.items.length; c++)
          this.items[c].draggable = !1;
        a = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (i = !1, a) {
        for (var c = 0; c < this.items.length; c++)
          this.items[c].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return X(o, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return o._a;
    }
  }), r.on("swipe.move", function() {
    o.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      o.attach();
    });
  }), r.on("destroy", function() {
    o.attach(), o.unbind(), n.destroy();
  }), o;
}
var Wo = '[data-glide-el="controls[nav]"]', Pr = '[data-glide-el^="controls"]', Vo = "".concat(Pr, ' [data-glide-dir*="<"]'), qo = "".concat(Pr, ' [data-glide-dir*=">"]');
function Yo(e, t, r) {
  var n = new $e(), a = mr ? {
    passive: !0
  } : !1, i = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Wo), this._c = t.Html.root.querySelectorAll(Pr), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Vo),
        next: t.Html.root.querySelectorAll(qo)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var l = 0; l < this._n.length; l++)
        this.addClass(this._n[l].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var l = 0; l < this._n.length; l++)
        this.removeClass(this._n[l].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(l) {
      var c = e.settings, f = l[e.index];
      f && (f.classList.add(c.classes.nav.active), Qn(f).forEach(function(d) {
        d.classList.remove(c.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(l) {
      var c = l[e.index];
      c == null || c.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var l = i._arrowControls.next, c = i._arrowControls.previous;
        this.resetArrowState(l, c), e.index === 0 && this.disableArrow(c), e.index === t.Run.length && this.disableArrow(l);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var l = e.settings, c = arguments.length, f = new Array(c), d = 0; d < c; d++)
        f[d] = arguments[d];
      f.forEach(function(p) {
        hr(p).forEach(function(g) {
          g.classList.remove(l.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var l = e.settings, c = arguments.length, f = new Array(c), d = 0; d < c; d++)
        f[d] = arguments[d];
      f.forEach(function(p) {
        hr(p).forEach(function(g) {
          g.classList.add(l.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var l = 0; l < this._c.length; l++)
        this.bind(this._c[l].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var l = 0; l < this._c.length; l++)
        this.unbind(this._c[l].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(l) {
      for (var c = 0; c < l.length; c++)
        n.on("click", l[c], this.click), n.on("touchstart", l[c], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(l) {
      for (var c = 0; c < l.length; c++)
        n.off(["click", "touchstart"], l[c]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(l) {
      !mr && l.type === "touchstart" && l.preventDefault();
      var c = l.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(c));
    }
  };
  return X(i, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return i._c;
    }
  }), r.on(["mount.after", "move.after"], function() {
    i.setActive();
  }), r.on(["mount.after", "run"], function() {
    i.setArrowState();
  }), r.on("destroy", function() {
    i.removeBindings(), i.removeActive(), n.destroy();
  }), i;
}
function Xo(e, t, r) {
  var n = new $e(), a = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function() {
      e.settings.keyboard && this.bind();
    },
    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(o) {
      var l = e.settings.perSwipe, c = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(o.code) && t.Run.make(t.Direction.resolve("".concat(l).concat(c[o.code])));
    }
  };
  return r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function Go(e, t, r) {
  var n = new $e(), a = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function() {
      this.enable(), this.start(), e.settings.hoverpause && this.bind();
    },
    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function() {
      this._e = !0;
    },
    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function() {
      this._e = !1;
    },
    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function() {
      var o = this;
      this._e && (this.enable(), e.settings.autoplay && Zn(this._i) && (this._i = setInterval(function() {
        o.stop(), t.Run.make(">"), o.start(), r.emit("autoplay");
      }, this.time)));
    },
    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function() {
      this._i = clearInterval(this._i);
    },
    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function() {
      var o = this;
      n.on("mouseover", t.Html.root, function() {
        o._e && o.stop();
      }), n.on("mouseout", t.Html.root, function() {
        o._e && o.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      n.off(["mouseover", "mouseout"], t.Html.root);
    }
  };
  return X(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var o = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return oe(o || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    a.stop();
  }), r.on(["pause", "destroy"], function() {
    a.disable(), a.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    a.start();
  }), r.on(["play"], function() {
    a.enable(), a.start();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function En(e) {
  return tt(e) ? vo(e) : (Ie("Breakpoints option must be an object"), {});
}
function Ko(e, t, r) {
  var n = new $e(), a = e.settings, i = En(a.breakpoints), o = Object.assign({}, a), l = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(f) {
      if (typeof window.matchMedia < "u") {
        for (var d in f)
          if (f.hasOwnProperty(d) && window.matchMedia("(max-width: ".concat(d, "px)")).matches)
            return f[d];
      }
      return o;
    }
  };
  return Object.assign(a, l.match(i)), n.on("resize", window, Dt(function() {
    e.settings = pr(a, l.match(i));
  }, e.settings.throttle)), r.on("update", function() {
    i = En(i), o = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), l;
}
var Zo = {
  // Required
  Html: To,
  Translate: Ho,
  Transition: zo,
  Direction: Lo,
  Peek: Ao,
  Sizes: Oo,
  Gaps: _o,
  Move: xo,
  Clones: Eo,
  Resize: Ro,
  Build: ko,
  Run: wo,
  // Optional
  Swipe: $o,
  Images: Bo,
  Anchors: Uo,
  Controls: Yo,
  Keyboard: Xo,
  Autoplay: Go,
  Breakpoints: Ko
}, Qo = /* @__PURE__ */ function(e) {
  so(r, e);
  var t = fo(r);
  function r() {
    return Pt(this, r), t.apply(this, arguments);
  }
  return It(r, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Ot(et(r.prototype), "mount", this).call(this, Object.assign({}, Zo, a));
    }
  }]), r;
}(bo);
function Jo(e) {
  let t, r, n;
  switch (e) {
    case 3:
      t = 1, r = 2, n = 3;
      break;
    case 2:
      t = 1, r = 2, n = 2;
      break;
    case 1:
    default:
      t = 1, r = 1, n = 1;
  }
  return {
    perViewSm: t,
    perViewMd: r,
    perViewLg: n
  };
}
function es(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: i, perViewLg: o } = Jo(e), l = r ? 24 : 0, c = r ? { before: 48, after: 48 } : 0, f = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: l,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: n ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: o,
    // Can be overwritten at breakpoints
    peek: f,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: c
      },
      768: {
        // BS4 md
        perView: i,
        peek: c
      },
      992: {
        // BS4 lg
        perView: o,
        peek: c
      },
      1260: {
        // BS4 xl
        perView: o,
        peek: c
      },
      1400: {
        perView: o,
        peek: f
      },
      1920: {
        perView: o,
        peek: f
      }
    }
  };
}
function ts(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), i = e.querySelector(".glide__track"), o = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const l = ["slider-start", "slider-mid", "slider-end"], c = "glide__arrow--disabled";
  i == null || i.classList.remove(...l), o == null || o.classList.remove(...l), t === 0 ? (i == null || i.classList.add("slider-start"), o == null || o.classList.add("slider-start"), n.classList.add(c), a.classList.remove(c)) : t >= r - 1 ? (i == null || i.classList.add("slider-end"), o == null || o.classList.add("slider-end"), n.classList.remove(c), a.classList.add(c)) : (i == null || i.classList.add("slider-mid"), o == null || o.classList.add("slider-mid"), n.classList.remove(c), a.classList.remove(c));
}
function rs(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, i = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((o, l) => {
    l < a || l > i ? (o.setAttribute("aria-hidden", "true"), o.setAttribute("tabindex", "-1"), o.setAttribute("inert", "")) : (o.setAttribute("aria-hidden", "false"), o.removeAttribute("tabindex"), o.removeAttribute("inert"));
  });
}
function ns({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: i = !0,
  isDraggable: o
}) {
  const l = es(t, n, i, o), c = new Qo(`#${e}`, l);
  let f = document.querySelector(`#${e}`);
  return f.addEventListener("keyup", (d) => {
    const p = d;
    p.keyCode === 39 ? c.go(">") : p.keyCode === 37 ? c.go("<") : p.keyCode === 13 && c.go(document.activeElement.dataset.glideDir);
  }), c.on("build.before", () => {
    f = document.querySelector(`#${e}`), f && f.classList.add("slider-start");
  }), c.on("move", () => {
    if (f = document.querySelector(`#${e}`), !f) return;
    const d = c.index;
    rs(f, d, t);
    const p = f.querySelector(".navigation-slider"), g = f.querySelector(".image-navigator-images");
    if (p && g) {
      const x = p.querySelectorAll(
        ".bullet-image-container"
      ), b = p.clientWidth, _ = 82, T = x[d], O = g.getBoundingClientRect().x, k = p.getBoundingClientRect().x - O, L = T.getBoundingClientRect().x - O, P = T.getBoundingClientRect().x + T.getBoundingClientRect().width - O;
      if (d === 0 || L <= 0 + _)
        p.style.left = `${k - L + _}px`;
      else if (P >= b - _) {
        const v = P - b;
        p.style.left = `${k - v - _}px`;
      }
    }
    ts(f, d, r), f.setAttribute("data-current-index", d), a && a(d);
  }), c.mount(), c;
}
function is(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const ct = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: i,
  role: o,
  ariaLabelledBy: l,
  isFullWidth: c,
  removeSideBackground: f = !1,
  hasNavButtons: d = !0,
  hasPositionIndicators: p = !0,
  imageAutoSize: g = !0,
  onItemClick: x = () => null,
  hasPeek: b = !0,
  isDraggable: _ = !0,
  hasShadow: T = !0
}) => {
  const O = `glide-${Math.ceil(Math.random() * 1e4)}`, k = is(n.length, e);
  return vr(() => {
    ns({
      instanceName: O,
      perView: e,
      buttonCount: k,
      isFullWidth: c,
      onItemClick: x,
      hasPeek: b,
      isDraggable: _
    });
  }, [
    O,
    e,
    k,
    c,
    x,
    b,
    _
  ]), /* @__PURE__ */ m.jsxs(
    "div",
    {
      role: o,
      "aria-labelledby": l,
      className: `glide ${a}`,
      id: O,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": f,
      "data-image-auto-size": g,
      "data-has-shadow": T,
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ m.jsx(Kn, { carouselItems: n }) }),
        i ? (
          // @ts-ignore
          /* @__PURE__ */ m.jsx(i, { instanceName: O })
        ) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
          p && /* @__PURE__ */ m.jsx(Yn, { buttonCount: k }),
          d && /* @__PURE__ */ m.jsx(Gn, {})
        ] })
      ]
    }
  );
};
ct.propTypes = {
  perView: s.number,
  width: s.string,
  maxWidth: s.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: s.arrayOf(s.object).isRequired,
  cssClass: s.string,
  CustomNavComponent: s.func,
  role: s.string,
  ariaLabelledBy: s.string,
  onItemClick: s.func,
  isFullWidth: s.bool,
  removeSideBackground: s.bool,
  hasNavButtons: s.bool,
  hasPositionIndicators: s.bool,
  imageAutoSize: s.bool,
  hasPeek: s.bool,
  isDraggable: s.bool,
  hasShadow: s.bool
};
const as = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: i,
  eventTime: o,
  buttons: l,
  linkLabel: c,
  linkUrl: f,
  tags: d
}, p, g, x) => {
  var b;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ m.jsx(
      Fe,
      {
        type: p,
        horizontal: g,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: x,
        eventLocation: i,
        eventTime: o,
        buttons: l,
        linkLabel: c,
        linkUrl: f || ((b = l == null ? void 0 : l[0]) == null ? void 0 : b.href),
        tags: d
      }
    )
  };
}, ei = ({
  perView: e = 0,
  cardItems: t,
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: i = void 0,
  maxWidth: o = void 0,
  imageAutoSize: l = !0
}) => {
  const c = parseInt(`${e}`, 10), [f, d] = er(c), p = 1024, g = 768;
  vr(() => {
    const _ = () => {
      const T = window.innerWidth;
      let O;
      switch (c) {
        case 3:
          T > p ? O = 3 : T > g ? O = 2 : O = 1;
          break;
        case 2:
          O = T < g ? 1 : 2;
          break;
        default:
          O = 1;
          break;
      }
      d(O);
    };
    return _(), window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [c]);
  const x = t.map(
    (_) => as(_, r, a, n)
  ), b = t.length > f;
  return /* @__PURE__ */ m.jsx(
    ct,
    {
      perView: +f,
      maxWidth: o,
      width: i,
      carouselItems: x,
      cssClass: "aligned-carousel",
      imageAutoSize: l,
      removeSideBackground: t.length <= f,
      hasPositionIndicators: b,
      hasNavButtons: b,
      isDraggable: b,
      hasShadow: !0
    }
  );
};
ei.propTypes = {
  perView: s.string.isRequired,
  cardItems: s.arrayOf(
    s.shape({
      title: s.string.isRequired,
      content: s.string,
      eventLocation: s.string,
      eventTime: s.string,
      image: s.string,
      imageAltText: s.string,
      buttons: Fe.propTypes.buttons,
      linkLabel: s.string,
      linkUrl: s.string,
      tags: Fe.propTypes.tags
    })
  ).isRequired,
  cardType: Fe.propTypes.type,
  cardEventFormat: Fe.propTypes.eventFormat,
  cardHorizontal: Fe.propTypes.horizontal,
  width: s.string,
  maxWidth: s.string,
  imageAutoSize: s.bool
};
const os = ({ id: e, imageSource: t, imageAltText: r, title: n, content: a }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ m.jsx("div", { className: "uds-img", children: /* @__PURE__ */ m.jsxs("figure", { className: "figure uds-figure", children: [
    /* @__PURE__ */ m.jsx(
      "img",
      {
        src: t,
        className: "uds-img figure-img img-fluid",
        alt: r,
        loading: "lazy",
        decoding: "async"
      }
    ),
    (n || a) && /* @__PURE__ */ m.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ m.jsx("div", { className: "uds-caption-text", children: n ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
          /* @__PURE__ */ m.jsx("h3", { children: n }),
          /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ) })
      }
    )
  ] }) })
}), ti = ({
  perView: e = 0,
  imageItems: t,
  width: r = void 0,
  maxWidth: n = void 0,
  imageAutoSize: a = !0
}) => {
  const i = parseInt(`${e}`, 10), o = t.map(os), l = t.length > i;
  return /* @__PURE__ */ m.jsx(
    ct,
    {
      perView: +i,
      maxWidth: n,
      width: r,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: o,
      imageAutoSize: a,
      removeSideBackground: t.length <= i,
      hasPositionIndicators: l,
      hasNavButtons: l,
      isDraggable: l,
      hasShadow: !0
    }
  );
};
ti.propTypes = {
  perView: s.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: s.arrayOf(s.object).isRequired,
  width: s.string,
  maxWidth: s.string,
  imageAutoSize: s.bool
};
const ss = (e, t) => {
  if (!e)
    return 0;
  const r = (e.match(/<br/g) || []).length, n = t / 6;
  return (parseInt(`${e.length / n}`, 10) + r) * 20;
}, Lt = {
  imageItems: s.arrayOf(
    s.shape({
      id: s.number,
      imageSource: s.string,
      thumbnailSource: s.string,
      imageAltText: s.string,
      content: s.oneOfType([s.string, s.element])
    })
  ),
  hasContent: s.bool
}, ls = ({ id: e, imageSource: t, imageAltText: r }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ m.jsx("div", { className: "uds-img", children: /* @__PURE__ */ m.jsx(
    "img",
    {
      src: t,
      className: "uds-img figure-img img-fluid",
      alt: r,
      loading: "lazy",
      decoding: "async"
    }
  ) })
}), ri = ({ instanceName: e, imageItems: t, hasContent: r }) => {
  const n = "data-current-index", [a, i] = er(t[0].title), [o, l] = er(t[0].content), c = (d) => {
    const p = t[d];
    i(p.title), l(p.content);
  };
  vr(() => {
    const d = document.querySelector(
      ".image-gallery figcaption .uds-caption-text div"
    );
    if (d) {
      const b = parseInt(
        window.getComputedStyle(d, null).getPropertyValue("width").split("px")[0],
        10
      ), _ = t.reduce((T, O) => {
        const k = ss(O.content, b);
        return k > T ? k : T;
      }, 0);
      d.style.height = `${_}px`;
    }
    const p = document.querySelector(`#${e}`);
    function g(b) {
      for (const _ of b)
        if (_ && _.attributeName === n)
          return c(+p.getAttribute(n));
      return null;
    }
    new MutationObserver(g).observe(p, {
      attributes: !0
    });
  }, [e]);
  const f = t.map((d) => d.imageSource);
  return /* @__PURE__ */ m.jsxs("div", { className: "image-gallery-action-area", "data-has-content": r, children: [
    /* @__PURE__ */ m.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ m.jsxs(Lr, { children: [
      /* @__PURE__ */ m.jsx(Nr, {}),
      /* @__PURE__ */ m.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ m.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ m.jsx(
        Xn,
        {
          imageItems: f,
          onItemClick: (d) => c(d)
        }
      ) }) }),
      /* @__PURE__ */ m.jsx(Cr, {})
    ] }) }),
    r && (a || o) ? /* @__PURE__ */ m.jsx(
      "figcaption",
      {
        id: "caption",
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-gallery-content-container",
        children: /* @__PURE__ */ m.jsxs("div", { className: "uds-caption-text", children: [
          a ? /* @__PURE__ */ m.jsx("h3", { children: a }) : null,
          /* @__PURE__ */ m.jsx("div", { dangerouslySetInnerHTML: { __html: o } })
        ] })
      }
    ) : null
  ] });
};
ri.propTypes = {
  instanceName: s.string,
  imageItems: Lt.imageItems,
  hasContent: Lt.hasContent
};
const ni = ({
  width: e,
  maxWidth: t,
  imageItems: r,
  hasContent: n = !1,
  imageAutoSize: a = !0
}) => {
  const i = r.map(ls), o = r.length > 1;
  return /* @__PURE__ */ m.jsx(
    ct,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: i,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: n ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: a,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: l }) => /* @__PURE__ */ m.jsx(
        ri,
        {
          instanceName: l,
          hasContent: n,
          imageItems: r
        }
      ),
      removeSideBackground: r.length <= 1,
      hasPositionIndicators: o,
      hasNavButtons: o,
      isDraggable: o,
      hasShadow: !0
    }
  );
};
ni.propTypes = {
  imageItems: Lt.imageItems.isRequired,
  hasContent: Lt.hasContent,
  width: s.string,
  maxWidth: s.string,
  imageAutoSize: s.bool
};
const ii = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, i;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${_t(n.containerCssClass)}`,
      children: [
        e && /* @__PURE__ */ m.jsx(
          _r,
          {
            src: e,
            alt: t,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ m.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ m.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ m.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          r.title && /* @__PURE__ */ m.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ m.jsx("span", { className: _t(n.titleCssClass), children: r.title }) }),
          r.content && /* @__PURE__ */ m.jsx(
            "p",
            {
              className: _t(n.contentCssClass),
              "data-testid": "testimonial-content",
              children: r.content
            }
          ),
          (!!((a = r.cite) != null && a.name) || !!((i = r.cite) != null && i.description)) && /* @__PURE__ */ m.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ m.jsx("cite", { className: "name", children: r.cite.name }),
            r.cite && /* @__PURE__ */ m.jsx("cite", { className: "description", children: r.cite.description })
          ] })
        ] })
      ]
    }
  );
};
ii.propTypes = {
  quote: s.shape({
    title: s.string,
    content: s.string,
    cite: s.shape({
      name: s.string,
      description: s.string
    })
  }).isRequired,
  imageSource: s.string,
  imageAltText: s.string,
  itemStyle: s.shape({
    containerCssClass: s.arrayOf(s.string),
    titleCssClass: s.arrayOf(s.string),
    contentCssClass: s.arrayOf(s.string)
  })
};
const cs = ({ id: e, imageSource: t, imageAltText: r, quote: n }, a = {}) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ m.jsx(
    ii,
    {
      imageSource: t,
      imageAltText: r,
      quote: n,
      itemStyle: a
    }
  )
}), ai = ({
  width: e,
  maxWidth: t,
  testimonialItems: r,
  itemStyle: n = {},
  hasNavButtons: a = !1,
  hasPositionIndicators: i = !1,
  imageAutoSize: o = !0
}) => {
  const l = r.map(
    (c) => cs(c, n)
  );
  return /* @__PURE__ */ m.jsx(
    ct,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: l,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: a,
      hasPositionIndicators: i,
      imageAutoSize: o,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
ai.propTypes = {
  testimonialItems: s.arrayOf(
    s.shape({
      title: s.string,
      content: s.string,
      cite: s.shape({
        name: s.string,
        description: s.string
      })
    })
  ).isRequired,
  itemStyle: s.shape({
    containerCssClass: s.arrayOf(s.string),
    titleCssClass: s.arrayOf(s.string),
    contentCssClass: s.arrayOf(s.string)
  }),
  width: s.string,
  maxWidth: s.string,
  imageAutoSize: s.bool,
  hasNavButtons: s.bool,
  hasPositionIndicators: s.bool
};
const us = (e, t, r) => {
  Rn(r).render(ze.createElement(e, t));
}, jt = ({ typeCarousel: e, targetSelector: t, props: r }) => {
  const a = {
    card: ei,
    testimonial: ai,
    image: ti,
    "image-gallery": ni
  }[e];
  a && us(a, r, document.querySelector(t));
}, hs = ({ targetSelector: e, props: t }) => jt({
  typeCarousel: "card",
  targetSelector: e,
  props: t
}), ms = ({ targetSelector: e, props: t }) => {
  jt({
    typeCarousel: "testimonial",
    targetSelector: e,
    props: t
  });
}, gs = ({ targetSelector: e, props: t }) => {
  jt({ typeCarousel: "image", targetSelector: e, props: t });
}, vs = ({ targetSelector: e, props: t }) => {
  jt({
    typeCarousel: "image-gallery",
    targetSelector: e,
    props: t
  });
};
export {
  ei as CardCarousel,
  ti as ImageCarousel,
  ni as ImageGalleryCarousel,
  ai as TestimonialCarousel,
  hs as initCardCarousel,
  gs as initImageCarousel,
  vs as initImageGalleryCarousel,
  ms as initTestimonialCarousel
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
/** @license React v16.13.1
 * react-is.production.min.js
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

(function() {
                var css = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`;
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                document.head.appendChild(style);
              })();