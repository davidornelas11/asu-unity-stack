import Jt from "react";
function Mt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wt = { exports: {} }, ie = {};
var Et;
function Qt() {
  if (Et) return ie;
  Et = 1;
  var t = Jt, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, h, L) {
    var O, D = {}, x = null, U = null;
    L !== void 0 && (x = "" + L), h.key !== void 0 && (x = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (O in h) o.call(h, O) && !l.hasOwnProperty(O) && (D[O] = h[O]);
    if (m && m.defaultProps) for (O in h = m.defaultProps, h) D[O] === void 0 && (D[O] = h[O]);
    return { $$typeof: n, type: m, key: x, ref: U, props: D, _owner: c.current };
  }
  return ie.Fragment = i, ie.jsx = f, ie.jsxs = f, ie;
}
wt.exports = Qt();
var C = wt.exports, It = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function i() {
      for (var l = "", f = 0; f < arguments.length; f++) {
        var m = arguments[f];
        m && (l = c(l, o(m)));
      }
      return l;
    }
    function o(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return i.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var f = "";
      for (var m in l)
        n.call(l, m) && l[m] && (f = c(f, m));
      return f;
    }
    function c(l, f) {
      return f ? l ? l + " " + f : l + f : l;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(It);
var er = It.exports;
const tr = /* @__PURE__ */ Mt(er);
var xt = { exports: {} }, He, At;
function rr() {
  if (At) return He;
  At = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return He = t, He;
}
var ze, gt;
function nr() {
  if (gt) return ze;
  gt = 1;
  var t = rr();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, ze = function() {
    function o(f, m, h, L, O, D) {
      if (D !== t) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var l = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: i,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, ze;
}
xt.exports = nr()();
var ar = xt.exports;
const d = /* @__PURE__ */ Mt(ar), ir = (t) => (t || []).join(" ");
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function Ye(t, n) {
  return Ye = Object.setPrototypeOf || function(o, c) {
    return o.__proto__ = c, o;
  }, Ye(t, n);
}
function or() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Te(t, n, i) {
  return or() ? Te = Reflect.construct : Te = function(c, l, f) {
    var m = [null];
    m.push.apply(m, l);
    var h = Function.bind.apply(c, m), L = new h();
    return f && Ye(L, f.prototype), L;
  }, Te.apply(null, arguments);
}
function k(t) {
  return sr(t) || lr(t) || ur(t) || cr();
}
function sr(t) {
  if (Array.isArray(t)) return Ve(t);
}
function lr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ur(t, n) {
  if (t) {
    if (typeof t == "string") return Ve(t, n);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Ve(t, n);
  }
}
function Ve(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var i = 0, o = new Array(n); i < n; i++) o[i] = t[i];
  return o;
}
function cr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fr = Object.hasOwnProperty, St = Object.setPrototypeOf, pr = Object.isFrozen, mr = Object.getPrototypeOf, dr = Object.getOwnPropertyDescriptor, b = Object.freeze, w = Object.seal, hr = Object.create, Ct = typeof Reflect < "u" && Reflect, Ee = Ct.apply, Xe = Ct.construct;
Ee || (Ee = function(n, i, o) {
  return n.apply(i, o);
});
b || (b = function(n) {
  return n;
});
w || (w = function(n) {
  return n;
});
Xe || (Xe = function(n, i) {
  return Te(n, k(i));
});
var vr = I(Array.prototype.forEach), bt = I(Array.prototype.pop), oe = I(Array.prototype.push), ye = I(String.prototype.toLowerCase), We = I(String.prototype.toString), Ot = I(String.prototype.match), P = I(String.prototype.replace), _r = I(String.prototype.indexOf), Tr = I(String.prototype.trim), g = I(RegExp.prototype.test), Ge = yr(TypeError);
function I(t) {
  return function(n) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
      o[c - 1] = arguments[c];
    return Ee(t, n, o);
  };
}
function yr(t) {
  return function() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return Xe(t, i);
  };
}
function u(t, n, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : ye, St && St(t, null);
  for (var c = n.length; c--; ) {
    var l = n[c];
    if (typeof l == "string") {
      var f = i(l);
      f !== l && (pr(n) || (n[c] = f), l = f);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var n = hr(null), i;
  for (i in t)
    Ee(fr, t, [i]) === !0 && (n[i] = t[i]);
  return n;
}
function ve(t, n) {
  for (; t !== null; ) {
    var i = dr(t, n);
    if (i) {
      if (i.get)
        return I(i.get);
      if (typeof i.value == "function")
        return I(i.value);
    }
    t = mr(t);
  }
  function o(c) {
    return console.warn("fallback value for", c), null;
  }
  return o;
}
var Rt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), je = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Er = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $e = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ar = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nt = b(["#text"]), Lt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), qe = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _e = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gr = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sr = w(/<%[\w\W]*|[\w\W]*%>/gm), br = w(/\${[\w\W]*}/gm), Or = w(/^data-[\-\w.\u00B7-\uFFFF]/), Rr = w(/^aria-[\-\w]+$/), Nr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Lr = w(/^(?:\w+script|data):/i), Dr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Mr = w(/^html$/i), wr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Ir = function() {
  return typeof window > "u" ? null : window;
}, xr = function(n, i) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var o = null, c = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(c) && (o = i.currentScript.getAttribute(c));
  var l = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(l, {
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
function Pt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ir(), n = function(e) {
    return Pt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var i = t.document, o = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, f = t.Node, m = t.Element, h = t.NodeFilter, L = t.NamedNodeMap, O = L === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : L, D = t.HTMLFormElement, x = t.DOMParser, U = t.trustedTypes, q = m.prototype, Y = ve(q, "cloneNode"), se = ve(q, "nextSibling"), le = ve(q, "childNodes"), te = ve(q, "parentNode");
  if (typeof l == "function") {
    var V = o.createElement("template");
    V.content && V.content.ownerDocument && (o = V.content.ownerDocument);
  }
  var R = xr(U, i), Ae = R ? R.createHTML("") : "", ue = o, ge = ue.implementation, kt = ue.createNodeIterator, Ft = ue.createDocumentFragment, Ut = ue.getElementsByTagName, Ht = i.importNode, Ke = {};
  try {
    Ke = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var F = {};
  n.isSupported = typeof te == "function" && ge && ge.createHTMLDocument !== void 0 && Ke !== 9;
  var Se = gr, be = Sr, Oe = br, zt = Or, Wt = Rr, Gt = Lr, Ze = Dr, Bt = wr, Re = Nr, T = null, Je = u({}, [].concat(k(Rt), k(Be), k(je), k($e), k(Nt))), y = null, Qe = u({}, [].concat(k(Lt), k(qe), k(Dt), k(_e))), v = Object.seal(Object.create(null, {
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
  })), re = null, Ne = null, et = !0, Le = !0, tt = !1, rt = !0, X = !1, De = !0, G = !1, Me = !1, we = !1, K = !1, ce = !1, fe = !1, nt = !0, at = !1, jt = "user-content-", Ie = !0, ne = !1, Z = {}, J = null, it = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ot = null, st = u({}, ["audio", "video", "img", "source", "image", "track"]), xe = null, lt = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pe = "http://www.w3.org/1998/Math/MathML", me = "http://www.w3.org/2000/svg", H = "http://www.w3.org/1999/xhtml", Q = H, Ce = !1, Pe = null, $t = u({}, [pe, me, H], We), B, qt = ["application/xhtml+xml", "text/html"], Yt = "text/html", E, ee = null, Vt = o.createElement("form"), ut = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ke = function(e) {
    ee && ee === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), B = // eslint-disable-next-line unicorn/prefer-includes
    qt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Yt : B = e.PARSER_MEDIA_TYPE, E = B === "application/xhtml+xml" ? We : ye, T = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, E) : Je, y = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, E) : Qe, Pe = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, We) : $t, xe = "ADD_URI_SAFE_ATTR" in e ? u(
      $(lt),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : lt, ot = "ADD_DATA_URI_TAGS" in e ? u(
      $(st),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : st, J = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, E) : it, re = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, E) : {}, Ne = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, E) : {}, Z = "USE_PROFILES" in e ? e.USE_PROFILES : !1, et = e.ALLOW_ARIA_ATTR !== !1, Le = e.ALLOW_DATA_ATTR !== !1, tt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, rt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = e.SAFE_FOR_TEMPLATES || !1, De = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, K = e.RETURN_DOM || !1, ce = e.RETURN_DOM_FRAGMENT || !1, fe = e.RETURN_TRUSTED_TYPE || !1, we = e.FORCE_BODY || !1, nt = e.SANITIZE_DOM !== !1, at = e.SANITIZE_NAMED_PROPS || !1, Ie = e.KEEP_CONTENT !== !1, ne = e.IN_PLACE || !1, Re = e.ALLOWED_URI_REGEXP || Re, Q = e.NAMESPACE || H, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (Le = !1), ce && (K = !0), Z && (T = u({}, k(Nt)), y = [], Z.html === !0 && (u(T, Rt), u(y, Lt)), Z.svg === !0 && (u(T, Be), u(y, qe), u(y, _e)), Z.svgFilters === !0 && (u(T, je), u(y, qe), u(y, _e)), Z.mathMl === !0 && (u(T, $e), u(y, Dt), u(y, _e))), e.ADD_TAGS && (T === Je && (T = $(T)), u(T, e.ADD_TAGS, E)), e.ADD_ATTR && (y === Qe && (y = $(y)), u(y, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && u(xe, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (J === it && (J = $(J)), u(J, e.FORBID_CONTENTS, E)), Ie && (T["#text"] = !0), G && u(T, ["html", "head", "body"]), T.table && (u(T, ["tbody"]), delete re.tbody), b && b(e), ee = e);
  }, ct = u({}, ["mi", "mo", "mn", "ms", "mtext"]), ft = u({}, ["annotation-xml"]), Xt = u({}, ["title", "style", "font", "a", "script"]), de = u({}, Be);
  u(de, je), u(de, Er);
  var Fe = u({}, $e);
  u(Fe, Ar);
  var Kt = function(e) {
    var r = te(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: Q,
      tagName: "template"
    });
    var a = ye(e.tagName), p = ye(r.tagName);
    return Pe[e.namespaceURI] ? e.namespaceURI === me ? r.namespaceURI === H ? a === "svg" : r.namespaceURI === pe ? a === "svg" && (p === "annotation-xml" || ct[p]) : !!de[a] : e.namespaceURI === pe ? r.namespaceURI === H ? a === "math" : r.namespaceURI === me ? a === "math" && ft[p] : !!Fe[a] : e.namespaceURI === H ? r.namespaceURI === me && !ft[p] || r.namespaceURI === pe && !ct[p] ? !1 : !Fe[a] && (Xt[a] || !de[a]) : !!(B === "application/xhtml+xml" && Pe[e.namespaceURI]) : !1;
  }, M = function(e) {
    oe(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = Ae;
      } catch {
        e.remove();
      }
    }
  }, he = function(e, r) {
    try {
      oe(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      oe(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !y[e])
      if (K || ce)
        try {
          M(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, pt = function(e) {
    var r, a;
    if (we)
      e = "<remove></remove>" + e;
    else {
      var p = Ot(e, /^[\r\n\t ]+/);
      a = p && p[0];
    }
    B === "application/xhtml+xml" && Q === H && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var N = R ? R.createHTML(e) : e;
    if (Q === H)
      try {
        r = new x().parseFromString(N, B);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ge.createDocument(Q, "template", null);
      try {
        r.documentElement.innerHTML = Ce ? Ae : N;
      } catch {
      }
    }
    var S = r.body || r.documentElement;
    return e && a && S.insertBefore(o.createTextNode(a), S.childNodes[0] || null), Q === H ? Ut.call(r, G ? "html" : "body")[0] : G ? r.documentElement : S;
  }, mt = function(e) {
    return kt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, dt = function(e) {
    return e instanceof D && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ae = function(e) {
    return W(f) === "object" ? e instanceof f : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, z = function(e, r, a) {
    F[e] && vr(F[e], function(p) {
      p.call(n, r, a, ee);
    });
  }, ht = function(e) {
    var r;
    if (z("beforeSanitizeElements", e, null), dt(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return M(e), !0;
    var a = E(e.nodeName);
    if (z("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: T
    }), e.hasChildNodes() && !ae(e.firstElementChild) && (!ae(e.content) || !ae(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || De && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return M(e), !0;
    if (!T[a] || re[a]) {
      if (!re[a] && _t(a) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
        return !1;
      if (Ie && !J[a]) {
        var p = te(e) || e.parentNode, N = le(e) || e.childNodes;
        if (N && p)
          for (var S = N.length, A = S - 1; A >= 0; --A) {
            var j = Y(N[A], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, p.insertBefore(j, se(e));
          }
      }
      return M(e), !0;
    }
    return e instanceof m && !Kt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (M(e), !0) : (X && e.nodeType === 3 && (r = e.textContent, r = P(r, Se, " "), r = P(r, be, " "), r = P(r, Oe, " "), e.textContent !== r && (oe(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), z("afterSanitizeElements", e, null), !1);
  }, vt = function(e, r, a) {
    if (nt && (r === "id" || r === "name") && (a in o || a in Vt))
      return !1;
    if (!(Le && !Ne[r] && g(zt, r))) {
      if (!(et && g(Wt, r))) {
        if (!y[r] || Ne[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(_t(e) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && g(v.attributeNameCheck, r) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
          ) return !1;
        } else if (!xe[r]) {
          if (!g(Re, P(a, Ze, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && _r(a, "data:") === 0 && ot[e])) {
              if (!(tt && !g(Gt, P(a, Ze, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, _t = function(e) {
    return e !== "annotation-xml" && Ot(e, Bt);
  }, Tt = function(e) {
    var r, a, p, N;
    z("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: y
      };
      for (N = S.length; N--; ) {
        r = S[N];
        var j = r, _ = j.name, Ue = j.namespaceURI;
        if (a = _ === "value" ? r.value : Tr(r.value), p = E(_), A.attrName = p, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, z("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (he(_, e), !!A.keepAttr)) {
          if (!rt && g(/\/>/i, a)) {
            he(_, e);
            continue;
          }
          X && (a = P(a, Se, " "), a = P(a, be, " "), a = P(a, Oe, " "));
          var yt = E(e.nodeName);
          if (vt(yt, p, a)) {
            if (at && (p === "id" || p === "name") && (he(_, e), a = jt + a), De && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              he(_, e);
              continue;
            }
            if (R && W(U) === "object" && typeof U.getAttributeType == "function" && !Ue)
              switch (U.getAttributeType(yt, p)) {
                case "TrustedHTML": {
                  a = R.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = R.createScriptURL(a);
                  break;
                }
              }
            try {
              Ue ? e.setAttributeNS(Ue, _, a) : e.setAttribute(_, a), dt(e) ? M(e) : bt(n.removed);
            } catch {
            }
          }
        }
      }
      z("afterSanitizeAttributes", e, null);
    }
  }, Zt = function s(e) {
    var r, a = mt(e);
    for (z("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      z("uponSanitizeShadowNode", r, null), !ht(r) && (r.content instanceof c && s(r.content), Tt(r));
    z("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, p, N, S;
    if (Ce = !s, Ce && (s = "<!-->"), typeof s != "string" && !ae(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Ge("dirty is not a string, aborting");
      } else
        throw Ge("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ae(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Me || ke(e), n.removed = [], typeof s == "string" && (ne = !1), ne) {
      if (s.nodeName) {
        var A = E(s.nodeName);
        if (!T[A] || re[A])
          throw Ge("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof f)
      r = pt("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!K && !X && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return R && fe ? R.createHTML(s) : s;
      if (r = pt(s), !r)
        return K ? null : fe ? Ae : "";
    }
    r && we && M(r.firstChild);
    for (var j = mt(ne ? s : r); p = j.nextNode(); )
      p.nodeType === 3 && p === N || ht(p) || (p.content instanceof c && Zt(p.content), Tt(p), N = p);
    if (N = null, ne)
      return s;
    if (K) {
      if (ce)
        for (S = Ft.call(r.ownerDocument); r.firstChild; )
          S.appendChild(r.firstChild);
      else
        S = r;
      return (y.shadowroot || y.shadowrootmod) && (S = Ht.call(i, S, !0)), S;
    }
    var _ = G ? r.outerHTML : r.innerHTML;
    return G && T["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && g(Mr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), X && (_ = P(_, Se, " "), _ = P(_, be, " "), _ = P(_, Oe, " ")), R && fe ? R.createHTML(_) : _;
  }, n.setConfig = function(s) {
    ke(s), Me = !0;
  }, n.clearConfig = function() {
    ee = null, Me = !1;
  }, n.isValidAttribute = function(s, e, r) {
    ee || ke({});
    var a = E(s), p = E(e);
    return vt(a, p, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (F[s] = F[s] || [], oe(F[s], e));
  }, n.removeHook = function(s) {
    if (F[s])
      return bt(F[s]);
  }, n.removeHooks = function(s) {
    F[s] && (F[s] = []);
  }, n.removeAllHooks = function() {
    F = {};
  }, n;
}
var Cr = Pt();
const Pr = (t) => ({ __html: Cr.sanitize(t) });
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
const kr = ({
  src: t,
  alt: n,
  cssClasses: i,
  loading: o = "lazy",
  decoding: c = "async",
  dataTestId: l,
  fetchPriority: f = "auto",
  width: m,
  height: h,
  cardLink: L,
  title: O,
  caption: D,
  captionTitle: x,
  border: U,
  dropShadow: q
}) => {
  const Y = {
    src: t,
    alt: n,
    loading: o,
    decoding: c,
    fetchpriority: f,
    // React attribute bug workaround
    ...(i == null ? void 0 : i.length) > 0 && { className: ir(i) },
    ...l && { "data-testid": l },
    ...m && { width: m },
    ...h && { height: h }
  }, se = tr("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": q
  }), le = (V) => {
    const R = V ? `${Y.className} ${V}` : Y.className;
    return L ? /* @__PURE__ */ C.jsxs("a", { href: L, children: [
      /* @__PURE__ */ C.jsx("img", { ...Y, className: R }),
      /* @__PURE__ */ C.jsx("span", { className: "visually-hidden", children: O })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ C.jsx("img", { ...Y, className: R })
    );
  }, te = () => /* @__PURE__ */ C.jsx("div", { className: se, children: /* @__PURE__ */ C.jsxs("figure", { className: "figure uds-figure", children: [
    le(),
    D && /* @__PURE__ */ C.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      x && /* @__PURE__ */ C.jsx("h3", { children: x }),
      /* @__PURE__ */ C.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Pr(D)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: D ? te() : le(se) });
};
kr.propTypes = {
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
export {
  kr as Image
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
