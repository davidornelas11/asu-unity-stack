import je, { useId as er, useRef as tr } from "react";
function Nt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wt = { exports: {} }, te = {};
var _t;
function rr() {
  if (_t) return te;
  _t = 1;
  var t = je, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, d, C) {
    var L, U = {}, H = null, z = null;
    C !== void 0 && (H = "" + C), d.key !== void 0 && (H = "" + d.key), d.ref !== void 0 && (z = d.ref);
    for (L in d) i.call(d, L) && !l.hasOwnProperty(L) && (U[L] = d[L]);
    if (m && m.defaultProps) for (L in d = m.defaultProps, d) U[L] === void 0 && (U[L] = d[L]);
    return { $$typeof: r, type: m, key: H, ref: z, props: U, _owner: c.current };
  }
  return te.Fragment = a, te.jsx = u, te.jsxs = u, te;
}
wt.exports = rr();
var O = wt.exports, Mt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function a() {
      for (var l = "", u = 0; u < arguments.length; u++) {
        var m = arguments[u];
        m && (l = c(l, i(m)));
      }
      return l;
    }
    function i(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return a.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var u = "";
      for (var m in l)
        r.call(l, m) && l[m] && (u = c(u, m));
      return u;
    }
    function c(l, u) {
      return u ? l ? l + " " + u : l + u : l;
    }
    t.exports ? (a.default = a, t.exports = a) : window.classNames = a;
  })();
})(Mt);
var nr = Mt.exports;
const Ct = /* @__PURE__ */ Nt(nr);
var xt = { exports: {} }, Pe, Et;
function ar() {
  if (Et) return Pe;
  Et = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, yt;
function or() {
  if (yt) return Fe;
  yt = 1;
  var t = ar();
  function r() {
  }
  function a() {
  }
  return a.resetWarningCache = r, Fe = function() {
    function i(u, m, d, C, L, U) {
      if (U !== t) {
        var H = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw H.name = "Invariant Violation", H;
      }
    }
    i.isRequired = i;
    function c() {
      return i;
    }
    var l = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: c,
      element: i,
      elementType: i,
      instanceOf: c,
      node: i,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, Fe;
}
xt.exports = or()();
var ir = xt.exports;
const S = /* @__PURE__ */ Nt(ir);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, W(t);
}
function $e(t, r) {
  return $e = Object.setPrototypeOf || function(i, c) {
    return i.__proto__ = c, i;
  }, $e(t, r);
}
function sr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, r, a) {
  return sr() ? me = Reflect.construct : me = function(c, l, u) {
    var m = [null];
    m.push.apply(m, l);
    var d = Function.bind.apply(c, m), C = new d();
    return u && $e(C, u.prototype), C;
  }, me.apply(null, arguments);
}
function I(t) {
  return lr(t) || ur(t) || cr(t) || fr();
}
function lr(t) {
  if (Array.isArray(t)) return qe(t);
}
function ur(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function cr(t, r) {
  if (t) {
    if (typeof t == "string") return qe(t, r);
    var a = Object.prototype.toString.call(t).slice(8, -1);
    if (a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set") return Array.from(t);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return qe(t, r);
  }
}
function qe(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var a = 0, i = new Array(r); a < r; a++) i[a] = t[a];
  return i;
}
function fr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pr = Object.hasOwnProperty, At = Object.setPrototypeOf, mr = Object.isFrozen, dr = Object.getPrototypeOf, vr = Object.getOwnPropertyDescriptor, b = Object.freeze, w = Object.seal, hr = Object.create, Dt = typeof Reflect < "u" && Reflect, ve = Dt.apply, Ye = Dt.construct;
ve || (ve = function(r, a, i) {
  return r.apply(a, i);
});
b || (b = function(r) {
  return r;
});
w || (w = function(r) {
  return r;
});
Ye || (Ye = function(r, a) {
  return me(r, I(a));
});
var Tr = M(Array.prototype.forEach), gt = M(Array.prototype.pop), re = M(Array.prototype.push), de = M(String.prototype.toLowerCase), Ue = M(String.prototype.toString), St = M(String.prototype.match), D = M(String.prototype.replace), _r = M(String.prototype.indexOf), Er = M(String.prototype.trim), A = M(RegExp.prototype.test), He = yr(TypeError);
function M(t) {
  return function(r) {
    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      i[c - 1] = arguments[c];
    return ve(t, r, i);
  };
}
function yr(t) {
  return function() {
    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
      a[i] = arguments[i];
    return Ye(t, a);
  };
}
function f(t, r, a) {
  var i;
  a = (i = a) !== null && i !== void 0 ? i : de, At && At(t, null);
  for (var c = r.length; c--; ) {
    var l = r[c];
    if (typeof l == "string") {
      var u = a(l);
      u !== l && (mr(r) || (r[c] = u), l = u);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var r = hr(null), a;
  for (a in t)
    ve(pr, t, [a]) === !0 && (r[a] = t[a]);
  return r;
}
function fe(t, r) {
  for (; t !== null; ) {
    var a = vr(t, r);
    if (a) {
      if (a.get)
        return M(a.get);
      if (typeof a.value == "function")
        return M(a.value);
    }
    t = dr(t);
  }
  function i(c) {
    return console.warn("fallback value for", c), null;
  }
  return i;
}
var bt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ar = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), gr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = b(["#text"]), Ot = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Be = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sr = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), br = w(/<%[\w\W]*|[\w\W]*%>/gm), Rr = w(/\${[\w\W]*}/gm), Or = w(/^data-[\-\w.\u00B7-\uFFFF]/), Lr = w(/^aria-[\-\w]+$/), Nr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wr = w(/^(?:\w+script|data):/i), Mr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Cr = w(/^html$/i), xr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Dr = function() {
  return typeof window > "u" ? null : window;
}, Ir = function(r, a) {
  if (W(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var i = null, c = "data-tt-policy-suffix";
  a.currentScript && a.currentScript.hasAttribute(c) && (i = a.currentScript.getAttribute(c));
  var l = "dompurify" + (i ? "#" + i : "");
  try {
    return r.createPolicy(l, {
      createHTML: function(m) {
        return m;
      },
      createScriptURL: function(m) {
        return m;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function It() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dr(), r = function(e) {
    return It(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var a = t.document, i = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, u = t.Node, m = t.Element, d = t.NodeFilter, C = t.NamedNodeMap, L = C === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : C, U = t.HTMLFormElement, H = t.DOMParser, z = t.trustedTypes, ne = m.prototype, kt = fe(ne, "cloneNode"), Pt = fe(ne, "nextSibling"), Ft = fe(ne, "childNodes"), he = fe(ne, "parentNode");
  if (typeof l == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var x = Ir(z, a), _e = x ? x.createHTML("") : "", ae = i, Ee = ae.implementation, Ut = ae.createNodeIterator, Ht = ae.createDocumentFragment, Wt = ae.getElementsByTagName, zt = a.importNode, Ve = {};
  try {
    Ve = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var k = {};
  r.isSupported = typeof he == "function" && Ee && Ee.createHTMLDocument !== void 0 && Ve !== 9;
  var ye = Sr, Ae = br, ge = Rr, Gt = Or, Bt = Lr, jt = wr, Xe = Mr, $t = xr, Se = Nr, T = null, Ke = f({}, [].concat(I(bt), I(We), I(ze), I(Ge), I(Rt))), _ = null, Ze = f({}, [].concat(I(Ot), I(Be), I(Lt), I(pe))), v = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Je = !0, Re = !0, Qe = !1, et = !0, q = !1, Oe = !0, G = !1, Le = !1, Ne = !1, Y = !1, oe = !1, ie = !1, tt = !0, rt = !1, qt = "user-content-", we = !0, Q = !1, V = {}, X = null, nt = f({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), at = null, ot = f({}, ["audio", "video", "img", "source", "image", "track"]), Me = null, it = f({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", P = "http://www.w3.org/1999/xhtml", K = P, Ce = !1, xe = null, Yt = f({}, [se, le, P], Ue), B, Vt = ["application/xhtml+xml", "text/html"], Xt = "text/html", E, Z = null, Kt = i.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, De = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Vt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Xt : B = e.PARSER_MEDIA_TYPE, E = B === "application/xhtml+xml" ? Ue : de, T = "ALLOWED_TAGS" in e ? f({}, e.ALLOWED_TAGS, E) : Ke, _ = "ALLOWED_ATTR" in e ? f({}, e.ALLOWED_ATTR, E) : Ze, xe = "ALLOWED_NAMESPACES" in e ? f({}, e.ALLOWED_NAMESPACES, Ue) : Yt, Me = "ADD_URI_SAFE_ATTR" in e ? f(
      $(it),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : it, at = "ADD_DATA_URI_TAGS" in e ? f(
      $(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ot, X = "FORBID_CONTENTS" in e ? f({}, e.FORBID_CONTENTS, E) : nt, J = "FORBID_TAGS" in e ? f({}, e.FORBID_TAGS, E) : {}, be = "FORBID_ATTR" in e ? f({}, e.FORBID_ATTR, E) : {}, V = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, Y = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, we = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || P, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Re = !1), oe && (Y = !0), V && (T = f({}, I(Rt)), _ = [], V.html === !0 && (f(T, bt), f(_, Ot)), V.svg === !0 && (f(T, We), f(_, Be), f(_, pe)), V.svgFilters === !0 && (f(T, ze), f(_, Be), f(_, pe)), V.mathMl === !0 && (f(T, Ge), f(_, Lt), f(_, pe))), e.ADD_TAGS && (T === Ke && (T = $(T)), f(T, e.ADD_TAGS, E)), e.ADD_ATTR && (_ === Ze && (_ = $(_)), f(_, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && f(Me, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (X === nt && (X = $(X)), f(X, e.FORBID_CONTENTS, E)), we && (T["#text"] = !0), G && f(T, ["html", "head", "body"]), T.table && (f(T, ["tbody"]), delete J.tbody), b && b(e), Z = e);
  }, lt = f({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = f({}, ["annotation-xml"]), Zt = f({}, ["title", "style", "font", "a", "script"]), ue = f({}, We);
  f(ue, ze), f(ue, Ar);
  var Ie = f({}, Ge);
  f(Ie, gr);
  var Jt = function(e) {
    var n = he(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: K,
      tagName: "template"
    });
    var o = de(e.tagName), p = de(n.tagName);
    return xe[e.namespaceURI] ? e.namespaceURI === le ? n.namespaceURI === P ? o === "svg" : n.namespaceURI === se ? o === "svg" && (p === "annotation-xml" || lt[p]) : !!ue[o] : e.namespaceURI === se ? n.namespaceURI === P ? o === "math" : n.namespaceURI === le ? o === "math" && ut[p] : !!Ie[o] : e.namespaceURI === P ? n.namespaceURI === le && !ut[p] || n.namespaceURI === se && !lt[p] ? !1 : !Ie[o] && (Zt[o] || !ue[o]) : !!(B === "application/xhtml+xml" && xe[e.namespaceURI]) : !1;
  }, N = function(e) {
    re(r.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = _e;
      } catch {
        e.remove();
      }
    }
  }, ce = function(e, n) {
    try {
      re(r.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      re(r.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is" && !_[e])
      if (Y || oe)
        try {
          N(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, ct = function(e) {
    var n, o;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var p = St(e, /^[\r\n\t ]+/);
      o = p && p[0];
    }
    B === "application/xhtml+xml" && K === P && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = x ? x.createHTML(e) : e;
    if (K === P)
      try {
        n = new H().parseFromString(R, B);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Ee.createDocument(K, "template", null);
      try {
        n.documentElement.innerHTML = Ce ? _e : R;
      } catch {
      }
    }
    var g = n.body || n.documentElement;
    return e && o && g.insertBefore(i.createTextNode(o), g.childNodes[0] || null), K === P ? Wt.call(n, G ? "html" : "body")[0] : G ? n.documentElement : g;
  }, ft = function(e) {
    return Ut.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof U && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof L) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(u) === "object" ? e instanceof u : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, F = function(e, n, o) {
    k[e] && Tr(k[e], function(p) {
      p.call(r, n, o, Z);
    });
  }, mt = function(e) {
    var n;
    if (F("beforeSanitizeElements", e, null), pt(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var o = E(e.nodeName);
    if (F("uponSanitizeElement", e, {
      tagName: o,
      allowedTags: T
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || o === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!T[o] || J[o]) {
      if (!J[o] && vt(o) && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, o) || v.tagNameCheck instanceof Function && v.tagNameCheck(o)))
        return !1;
      if (we && !X[o]) {
        var p = he(e) || e.parentNode, R = Ft(e) || e.childNodes;
        if (R && p)
          for (var g = R.length, y = g - 1; y >= 0; --y) {
            var j = kt(R[y], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, p.insertBefore(j, Pt(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof m && !Jt(e) || (o === "noscript" || o === "noembed" || o === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (q && e.nodeType === 3 && (n = e.textContent, n = D(n, ye, " "), n = D(n, Ae, " "), n = D(n, ge, " "), e.textContent !== n && (re(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), F("afterSanitizeElements", e, null), !1);
  }, dt = function(e, n, o) {
    if (tt && (n === "id" || n === "name") && (o in i || o in Kt))
      return !1;
    if (!(Re && !be[n] && A(Gt, n))) {
      if (!(Je && A(Bt, n))) {
        if (!_[n] || be[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vt(e) && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && A(v.attributeNameCheck, n) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, o) || v.tagNameCheck instanceof Function && v.tagNameCheck(o)))
          ) return !1;
        } else if (!Me[n]) {
          if (!A(Se, D(o, Xe, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && _r(o, "data:") === 0 && at[e])) {
              if (!(Qe && !A(jt, D(o, Xe, "")))) {
                if (o)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vt = function(e) {
    return e !== "annotation-xml" && St(e, $t);
  }, ht = function(e) {
    var n, o, p, R;
    F("beforeSanitizeAttributes", e, null);
    var g = e.attributes;
    if (g) {
      var y = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: _
      };
      for (R = g.length; R--; ) {
        n = g[R];
        var j = n, h = j.name, ke = j.namespaceURI;
        if (o = h === "value" ? n.value : Er(n.value), p = E(h), y.attrName = p, y.attrValue = o, y.keepAttr = !0, y.forceKeepAttr = void 0, F("uponSanitizeAttribute", e, y), o = y.attrValue, !y.forceKeepAttr && (ce(h, e), !!y.keepAttr)) {
          if (!et && A(/\/>/i, o)) {
            ce(h, e);
            continue;
          }
          q && (o = D(o, ye, " "), o = D(o, Ae, " "), o = D(o, ge, " "));
          var Tt = E(e.nodeName);
          if (dt(Tt, p, o)) {
            if (rt && (p === "id" || p === "name") && (ce(h, e), o = qt + o), Oe && A(/((--!?|])>)|<\/(style|title)/i, o)) {
              ce(h, e);
              continue;
            }
            if (x && W(z) === "object" && typeof z.getAttributeType == "function" && !ke)
              switch (z.getAttributeType(Tt, p)) {
                case "TrustedHTML": {
                  o = x.createHTML(o);
                  break;
                }
                case "TrustedScriptURL": {
                  o = x.createScriptURL(o);
                  break;
                }
              }
            try {
              ke ? e.setAttributeNS(ke, h, o) : e.setAttribute(h, o), pt(e) ? N(e) : gt(r.removed);
            } catch {
            }
          }
        }
      }
      F("afterSanitizeAttributes", e, null);
    }
  }, Qt = function s(e) {
    var n, o = ft(e);
    for (F("beforeSanitizeShadowDOM", e, null); n = o.nextNode(); )
      F("uponSanitizeShadowNode", n, null), !mt(n) && (n.content instanceof c && s(n.content), ht(n));
    F("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, o, p, R, g;
    if (Ce = !s, Ce && (s = "<!-->"), typeof s != "string" && !ee(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw He("dirty is not a string, aborting");
      } else
        throw He("toString is not a function");
    if (!r.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ee(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Le || De(e), r.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var y = E(s.nodeName);
        if (!T[y] || J[y])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof u)
      n = ct("<!---->"), o = n.ownerDocument.importNode(s, !0), o.nodeType === 1 && o.nodeName === "BODY" || o.nodeName === "HTML" ? n = o : n.appendChild(o);
    else {
      if (!Y && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return x && ie ? x.createHTML(s) : s;
      if (n = ct(s), !n)
        return Y ? null : ie ? _e : "";
    }
    n && Ne && N(n.firstChild);
    for (var j = ft(Q ? s : n); p = j.nextNode(); )
      p.nodeType === 3 && p === R || mt(p) || (p.content instanceof c && Qt(p.content), ht(p), R = p);
    if (R = null, Q)
      return s;
    if (Y) {
      if (oe)
        for (g = Ht.call(n.ownerDocument); n.firstChild; )
          g.appendChild(n.firstChild);
      else
        g = n;
      return (_.shadowroot || _.shadowrootmod) && (g = zt.call(a, g, !0)), g;
    }
    var h = G ? n.outerHTML : n.innerHTML;
    return G && T["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && A(Cr, n.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + h), q && (h = D(h, ye, " "), h = D(h, Ae, " "), h = D(h, ge, " ")), x && ie ? x.createHTML(h) : h;
  }, r.setConfig = function(s) {
    De(s), Le = !0;
  }, r.clearConfig = function() {
    Z = null, Le = !1;
  }, r.isValidAttribute = function(s, e, n) {
    Z || De({});
    var o = E(s), p = E(e);
    return dt(o, p, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (k[s] = k[s] || [], re(k[s], e));
  }, r.removeHook = function(s) {
    if (k[s])
      return gt(k[s]);
  }, r.removeHooks = function(s) {
    k[s] && (k[s] = []);
  }, r.removeAllHooks = function() {
    k = {};
  }, r;
}
It();
S.shape({
  event: S.string,
  action: S.string,
  name: S.string,
  region: S.string,
  section: S.string,
  component: S.string,
  type: S.string,
  text: S.string
});
const kr = ({
  event: t = "",
  action: r = "",
  name: a = "",
  type: i = "",
  section: c = "",
  text: l = "",
  region: u = "",
  component: m = ""
}) => {
  const { dataLayer: d } = window, C = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: a.toLowerCase(),
    type: i.toLowerCase(),
    region: u.toLowerCase(),
    section: c.toLowerCase(),
    text: l.toLowerCase(),
    component: m.toLowerCase()
  };
  d && d.push(C);
}, Pr = "staticMarkup";
function Fr() {
  const r = er().indexOf(Pr) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Ur = ({ gaData: t, prefix: r = "", children: a }) => {
  const { isReact: i } = Fr(), { onClick: c, ...l } = a.props;
  if (i)
    return je.cloneElement(a, {
      ...l,
      onClick: (d) => (kr(t), c ? c(d) : !0)
    });
  let u = "";
  ["input", "header", "header-input"].includes(r) && (u = `-${r}`);
  const m = {
    [`data-ga${u}`]: t.text,
    [`data-ga${u}-name`]: t.name,
    [`data-ga${u}-event`]: t.event,
    [`data-ga${u}-action`]: t.action,
    [`data-ga${u}-type`]: t.type,
    [`data-ga${u}-region`]: t.region,
    [`data-ga${u}-section`]: t.section,
    [`data-ga${u}-component`]: t.component
  };
  return je.cloneElement(a, {
    ...l,
    onClick: c,
    ...m
  });
}, Hr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, Wr = ({
  url: t = "",
  vttUrl: r,
  caption: a,
  title: i = "",
  className: c,
  controls: l = !0
}) => {
  const u = tr(null);
  return /* @__PURE__ */ O.jsxs(
    "div",
    {
      className: Ct(`uds-video-container ${c}`, {
        "uds-video-with-caption": a
      }),
      children: [
        /* @__PURE__ */ O.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ O.jsx(Ur, { gaData: { ...Hr, section: i }, children: /* @__PURE__ */ O.jsxs(
          "video",
          {
            ref: u,
            title: i,
            playsInline: !0,
            controls: l || !0,
            children: [
              /* @__PURE__ */ O.jsx("source", { src: t }),
              /* @__PURE__ */ O.jsx(
                "track",
                {
                  src: r,
                  kind: "captions",
                  srcLang: "en",
                  label: "english_captions"
                }
              )
            ]
          }
        ) }) }),
        a && /* @__PURE__ */ O.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ O.jsx("figcaption", { children: a }) })
      ]
    }
  );
}, zr = ({ title: t = "", caption: r, url: a = "", className: i }) => /* @__PURE__ */ O.jsxs(
  "div",
  {
    className: Ct(`uds-video-container ${i}`, {
      "uds-video-with-caption": r
    }),
    children: [
      /* @__PURE__ */ O.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ O.jsx("iframe", { title: t, src: a }) }),
      r && /* @__PURE__ */ O.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ O.jsx("figcaption", { children: r }) })
    ]
  }
), Gr = (t) => {
  const {
    type: r = "video",
    url: a = "",
    vttUrl: i,
    title: c = "",
    caption: l,
    className: u,
    controls: m = !0
  } = t;
  return r === "youtube" ? zr({ url: a, title: c, caption: l, className: u }) : Wr({
    url: a,
    vttUrl: i,
    title: c,
    caption: l,
    className: u,
    controls: m
  });
};
Gr.propTypes = {
  type: S.oneOf(["video", "youtube"]),
  url: S.string,
  vttUrl: S.string,
  title: S.string,
  className: S.string,
  caption: S.string,
  controls: S.bool
};
export {
  Gr as Video
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
