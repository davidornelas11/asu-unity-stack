import Ye, { useId as Ft, useState as cr } from "react";
function Ut(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ht = { exports: {} }, ie = {};
var Rt;
function ur() {
  if (Rt) return ie;
  Rt = 1;
  var t = Ye, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, v, g) {
    var _, x = {}, L = null, U = null;
    g !== void 0 && (L = "" + g), v.key !== void 0 && (L = "" + v.key), v.ref !== void 0 && (U = v.ref);
    for (_ in v) o.call(v, _) && !l.hasOwnProperty(_) && (x[_] = v[_]);
    if (f && f.defaultProps) for (_ in v = f.defaultProps, v) x[_] === void 0 && (x[_] = v[_]);
    return { $$typeof: r, type: f, key: L, ref: U, props: x, _owner: c.current };
  }
  return ie.Fragment = a, ie.jsx = u, ie.jsxs = u, ie;
}
Ht.exports = ur();
var d = Ht.exports, jt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function a() {
      for (var l = "", u = 0; u < arguments.length; u++) {
        var f = arguments[u];
        f && (l = c(l, o(f)));
      }
      return l;
    }
    function o(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return a.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var u = "";
      for (var f in l)
        r.call(l, f) && l[f] && (u = c(u, f));
      return u;
    }
    function c(l, u) {
      return u ? l ? l + " " + u : l + u : l;
    }
    t.exports ? (a.default = a, t.exports = a) : window.classNames = a;
  })();
})(jt);
var pr = jt.exports;
const se = /* @__PURE__ */ Ut(pr);
var zt = { exports: {} }, je, bt;
function fr() {
  if (bt) return je;
  bt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return je = t, je;
}
var ze, Ot;
function mr() {
  if (Ot) return ze;
  Ot = 1;
  var t = fr();
  function r() {
  }
  function a() {
  }
  return a.resetWarningCache = r, ze = function() {
    function o(u, f, v, g, _, x) {
      if (x !== t) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
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
      checkPropTypes: a,
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, ze;
}
zt.exports = mr()();
var dr = zt.exports;
const m = /* @__PURE__ */ Ut(dr), hr = (t) => (t || []).join(" ");
function z(t) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, z(t);
}
function Xe(t, r) {
  return Xe = Object.setPrototypeOf || function(o, c) {
    return o.__proto__ = c, o;
  }, Xe(t, r);
}
function vr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ye(t, r, a) {
  return vr() ? ye = Reflect.construct : ye = function(c, l, u) {
    var f = [null];
    f.push.apply(f, l);
    var v = Function.bind.apply(c, f), g = new v();
    return u && Xe(g, u.prototype), g;
  }, ye.apply(null, arguments);
}
function P(t) {
  return Tr(t) || _r(t) || yr(t) || gr();
}
function Tr(t) {
  if (Array.isArray(t)) return Ke(t);
}
function _r(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function yr(t, r) {
  if (t) {
    if (typeof t == "string") return Ke(t, r);
    var a = Object.prototype.toString.call(t).slice(8, -1);
    if (a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set") return Array.from(t);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Ke(t, r);
  }
}
function Ke(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
  return o;
}
function gr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Er = Object.hasOwnProperty, Lt = Object.setPrototypeOf, Ar = Object.isFrozen, Sr = Object.getPrototypeOf, Rr = Object.getOwnPropertyDescriptor, N = Object.freeze, D = Object.seal, br = Object.create, Wt = typeof Reflect < "u" && Reflect, Ee = Wt.apply, Ze = Wt.construct;
Ee || (Ee = function(r, a, o) {
  return r.apply(a, o);
});
N || (N = function(r) {
  return r;
});
D || (D = function(r) {
  return r;
});
Ze || (Ze = function(r, a) {
  return ye(r, P(a));
});
var Or = I(Array.prototype.forEach), Nt = I(Array.prototype.pop), oe = I(Array.prototype.push), ge = I(String.prototype.toLowerCase), We = I(String.prototype.toString), xt = I(String.prototype.match), k = I(String.prototype.replace), Lr = I(String.prototype.indexOf), Nr = I(String.prototype.trim), b = I(RegExp.prototype.test), Ge = xr(TypeError);
function I(t) {
  return function(r) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      o[c - 1] = arguments[c];
    return Ee(t, r, o);
  };
}
function xr(t) {
  return function() {
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    return Ze(t, a);
  };
}
function p(t, r, a) {
  var o;
  a = (o = a) !== null && o !== void 0 ? o : ge, Lt && Lt(t, null);
  for (var c = r.length; c--; ) {
    var l = r[c];
    if (typeof l == "string") {
      var u = a(l);
      u !== l && (Ar(r) || (r[c] = u), l = u);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var r = br(null), a;
  for (a in t)
    Ee(Er, t, [a]) === !0 && (r[a] = t[a]);
  return r;
}
function Te(t, r) {
  for (; t !== null; ) {
    var a = Rr(t, r);
    if (a) {
      if (a.get)
        return I(a.get);
      if (typeof a.value == "function")
        return I(a.value);
    }
    t = Sr(t);
  }
  function o(c) {
    return console.warn("fallback value for", c), null;
  }
  return o;
}
var wt = N(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = N(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $e = N(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wr = N(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), qe = N(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Mr = N(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Mt = N(["#text"]), Ct = N(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ve = N(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dt = N(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _e = N(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Cr = D(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Dr = D(/<%[\w\W]*|[\w\W]*%>/gm), Ir = D(/\${[\w\W]*}/gm), kr = D(/^data-[\-\w.\u00B7-\uFFFF]/), Pr = D(/^aria-[\-\w]+$/), Fr = D(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ur = D(/^(?:\w+script|data):/i), Hr = D(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), jr = D(/^html$/i), zr = D(/^[a-z][.\w]*(-[.\w]+)+$/i), Wr = function() {
  return typeof window > "u" ? null : window;
}, Gr = function(r, a) {
  if (z(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var o = null, c = "data-tt-policy-suffix";
  a.currentScript && a.currentScript.hasAttribute(c) && (o = a.currentScript.getAttribute(c));
  var l = "dompurify" + (o ? "#" + o : "");
  try {
    return r.createPolicy(l, {
      createHTML: function(f) {
        return f;
      },
      createScriptURL: function(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function Gt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wr(), r = function(e) {
    return Gt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var a = t.document, o = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, u = t.Node, f = t.Element, v = t.NodeFilter, g = t.NamedNodeMap, _ = g === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : g, x = t.HTMLFormElement, L = t.DOMParser, U = t.trustedTypes, q = f.prototype, V = Te(q, "cloneNode"), le = Te(q, "nextSibling"), ce = Te(q, "childNodes"), te = Te(q, "parentNode");
  if (typeof l == "function") {
    var Y = o.createElement("template");
    Y.content && Y.content.ownerDocument && (o = Y.content.ownerDocument);
  }
  var w = Gr(U, a), Ae = w ? w.createHTML("") : "", ue = o, Se = ue.implementation, Vt = ue.createNodeIterator, Yt = ue.createDocumentFragment, Xt = ue.getElementsByTagName, Kt = a.importNode, et = {};
  try {
    et = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var F = {};
  r.isSupported = typeof te == "function" && Se && Se.createHTMLDocument !== void 0 && et !== 9;
  var Re = Cr, be = Dr, Oe = Ir, Zt = kr, Jt = Pr, Qt = Ur, tt = Hr, er = zr, Le = Fr, E = null, rt = p({}, [].concat(P(wt), P(Be), P($e), P(qe), P(Mt))), A = null, nt = p({}, [].concat(P(Ct), P(Ve), P(Dt), P(_e))), T = Object.seal(Object.create(null, {
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
  })), re = null, Ne = null, at = !0, xe = !0, it = !1, ot = !0, X = !1, we = !0, W = !1, Me = !1, Ce = !1, K = !1, pe = !1, fe = !1, st = !0, lt = !1, tr = "user-content-", De = !0, ne = !1, Z = {}, J = null, ct = p({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ut = null, pt = p({}, ["audio", "video", "img", "source", "image", "track"]), Ie = null, ft = p({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), me = "http://www.w3.org/1998/Math/MathML", de = "http://www.w3.org/2000/svg", H = "http://www.w3.org/1999/xhtml", Q = H, ke = !1, Pe = null, rr = p({}, [me, de, H], We), G, nr = ["application/xhtml+xml", "text/html"], ar = "text/html", S, ee = null, ir = o.createElement("form"), mt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Fe = function(e) {
    ee && ee === e || ((!e || z(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    nr.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = ar : G = e.PARSER_MEDIA_TYPE, S = G === "application/xhtml+xml" ? We : ge, E = "ALLOWED_TAGS" in e ? p({}, e.ALLOWED_TAGS, S) : rt, A = "ALLOWED_ATTR" in e ? p({}, e.ALLOWED_ATTR, S) : nt, Pe = "ALLOWED_NAMESPACES" in e ? p({}, e.ALLOWED_NAMESPACES, We) : rr, Ie = "ADD_URI_SAFE_ATTR" in e ? p(
      $(ft),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      S
      // eslint-disable-line indent
    ) : ft, ut = "ADD_DATA_URI_TAGS" in e ? p(
      $(pt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      S
      // eslint-disable-line indent
    ) : pt, J = "FORBID_CONTENTS" in e ? p({}, e.FORBID_CONTENTS, S) : ct, re = "FORBID_TAGS" in e ? p({}, e.FORBID_TAGS, S) : {}, Ne = "FORBID_ATTR" in e ? p({}, e.FORBID_ATTR, S) : {}, Z = "USE_PROFILES" in e ? e.USE_PROFILES : !1, at = e.ALLOW_ARIA_ATTR !== !1, xe = e.ALLOW_DATA_ATTR !== !1, it = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ot = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = e.SAFE_FOR_TEMPLATES || !1, we = e.SAFE_FOR_XML !== !1, W = e.WHOLE_DOCUMENT || !1, K = e.RETURN_DOM || !1, pe = e.RETURN_DOM_FRAGMENT || !1, fe = e.RETURN_TRUSTED_TYPE || !1, Ce = e.FORCE_BODY || !1, st = e.SANITIZE_DOM !== !1, lt = e.SANITIZE_NAMED_PROPS || !1, De = e.KEEP_CONTENT !== !1, ne = e.IN_PLACE || !1, Le = e.ALLOWED_URI_REGEXP || Le, Q = e.NAMESPACE || H, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (xe = !1), pe && (K = !0), Z && (E = p({}, P(Mt)), A = [], Z.html === !0 && (p(E, wt), p(A, Ct)), Z.svg === !0 && (p(E, Be), p(A, Ve), p(A, _e)), Z.svgFilters === !0 && (p(E, $e), p(A, Ve), p(A, _e)), Z.mathMl === !0 && (p(E, qe), p(A, Dt), p(A, _e))), e.ADD_TAGS && (E === rt && (E = $(E)), p(E, e.ADD_TAGS, S)), e.ADD_ATTR && (A === nt && (A = $(A)), p(A, e.ADD_ATTR, S)), e.ADD_URI_SAFE_ATTR && p(Ie, e.ADD_URI_SAFE_ATTR, S), e.FORBID_CONTENTS && (J === ct && (J = $(J)), p(J, e.FORBID_CONTENTS, S)), De && (E["#text"] = !0), W && p(E, ["html", "head", "body"]), E.table && (p(E, ["tbody"]), delete re.tbody), N && N(e), ee = e);
  }, dt = p({}, ["mi", "mo", "mn", "ms", "mtext"]), ht = p({}, ["annotation-xml"]), or = p({}, ["title", "style", "font", "a", "script"]), he = p({}, Be);
  p(he, $e), p(he, wr);
  var Ue = p({}, qe);
  p(Ue, Mr);
  var sr = function(e) {
    var n = te(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: Q,
      tagName: "template"
    });
    var i = ge(e.tagName), h = ge(n.tagName);
    return Pe[e.namespaceURI] ? e.namespaceURI === de ? n.namespaceURI === H ? i === "svg" : n.namespaceURI === me ? i === "svg" && (h === "annotation-xml" || dt[h]) : !!he[i] : e.namespaceURI === me ? n.namespaceURI === H ? i === "math" : n.namespaceURI === de ? i === "math" && ht[h] : !!Ue[i] : e.namespaceURI === H ? n.namespaceURI === de && !ht[h] || n.namespaceURI === me && !dt[h] ? !1 : !Ue[i] && (or[i] || !he[i]) : !!(G === "application/xhtml+xml" && Pe[e.namespaceURI]) : !1;
  }, C = function(e) {
    oe(r.removed, {
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
  }, ve = function(e, n) {
    try {
      oe(r.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      oe(r.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is" && !A[e])
      if (K || pe)
        try {
          C(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, vt = function(e) {
    var n, i;
    if (Ce)
      e = "<remove></remove>" + e;
    else {
      var h = xt(e, /^[\r\n\t ]+/);
      i = h && h[0];
    }
    G === "application/xhtml+xml" && Q === H && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var M = w ? w.createHTML(e) : e;
    if (Q === H)
      try {
        n = new L().parseFromString(M, G);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Se.createDocument(Q, "template", null);
      try {
        n.documentElement.innerHTML = ke ? Ae : M;
      } catch {
      }
    }
    var O = n.body || n.documentElement;
    return e && i && O.insertBefore(o.createTextNode(i), O.childNodes[0] || null), Q === H ? Xt.call(n, W ? "html" : "body")[0] : W ? n.documentElement : O;
  }, Tt = function(e) {
    return Vt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, _t = function(e) {
    return e instanceof x && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof _) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ae = function(e) {
    return z(u) === "object" ? e instanceof u : e && z(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, j = function(e, n, i) {
    F[e] && Or(F[e], function(h) {
      h.call(r, n, i, ee);
    });
  }, yt = function(e) {
    var n;
    if (j("beforeSanitizeElements", e, null), _t(e) || b(/[\u0080-\uFFFF]/, e.nodeName))
      return C(e), !0;
    var i = S(e.nodeName);
    if (j("uponSanitizeElement", e, {
      tagName: i,
      allowedTags: E
    }), e.hasChildNodes() && !ae(e.firstElementChild) && (!ae(e.content) || !ae(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent) || i === "select" && b(/<template/i, e.innerHTML) || e.nodeType === 7 || we && e.nodeType === 8 && b(/<[/\w]/g, e.data))
      return C(e), !0;
    if (!E[i] || re[i]) {
      if (!re[i] && Et(i) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
        return !1;
      if (De && !J[i]) {
        var h = te(e) || e.parentNode, M = ce(e) || e.childNodes;
        if (M && h)
          for (var O = M.length, R = O - 1; R >= 0; --R) {
            var B = V(M[R], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, h.insertBefore(B, le(e));
          }
      }
      return C(e), !0;
    }
    return e instanceof f && !sr(e) || (i === "noscript" || i === "noembed" || i === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (C(e), !0) : (X && e.nodeType === 3 && (n = e.textContent, n = k(n, Re, " "), n = k(n, be, " "), n = k(n, Oe, " "), e.textContent !== n && (oe(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), j("afterSanitizeElements", e, null), !1);
  }, gt = function(e, n, i) {
    if (st && (n === "id" || n === "name") && (i in o || i in ir))
      return !1;
    if (!(xe && !Ne[n] && b(Zt, n))) {
      if (!(at && b(Jt, n))) {
        if (!A[n] || Ne[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Et(e) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && b(T.attributeNameCheck, n) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
          ) return !1;
        } else if (!Ie[n]) {
          if (!b(Le, k(i, tt, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && Lr(i, "data:") === 0 && ut[e])) {
              if (!(it && !b(Qt, k(i, tt, "")))) {
                if (i)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Et = function(e) {
    return e !== "annotation-xml" && xt(e, er);
  }, At = function(e) {
    var n, i, h, M;
    j("beforeSanitizeAttributes", e, null);
    var O = e.attributes;
    if (O) {
      var R = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: A
      };
      for (M = O.length; M--; ) {
        n = O[M];
        var B = n, y = B.name, He = B.namespaceURI;
        if (i = y === "value" ? n.value : Nr(n.value), h = S(y), R.attrName = h, R.attrValue = i, R.keepAttr = !0, R.forceKeepAttr = void 0, j("uponSanitizeAttribute", e, R), i = R.attrValue, !R.forceKeepAttr && (ve(y, e), !!R.keepAttr)) {
          if (!ot && b(/\/>/i, i)) {
            ve(y, e);
            continue;
          }
          X && (i = k(i, Re, " "), i = k(i, be, " "), i = k(i, Oe, " "));
          var St = S(e.nodeName);
          if (gt(St, h, i)) {
            if (lt && (h === "id" || h === "name") && (ve(y, e), i = tr + i), we && b(/((--!?|])>)|<\/(style|title)/i, i)) {
              ve(y, e);
              continue;
            }
            if (w && z(U) === "object" && typeof U.getAttributeType == "function" && !He)
              switch (U.getAttributeType(St, h)) {
                case "TrustedHTML": {
                  i = w.createHTML(i);
                  break;
                }
                case "TrustedScriptURL": {
                  i = w.createScriptURL(i);
                  break;
                }
              }
            try {
              He ? e.setAttributeNS(He, y, i) : e.setAttribute(y, i), _t(e) ? C(e) : Nt(r.removed);
            } catch {
            }
          }
        }
      }
      j("afterSanitizeAttributes", e, null);
    }
  }, lr = function s(e) {
    var n, i = Tt(e);
    for (j("beforeSanitizeShadowDOM", e, null); n = i.nextNode(); )
      j("uponSanitizeShadowNode", n, null), !yt(n) && (n.content instanceof c && s(n.content), At(n));
    j("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, i, h, M, O;
    if (ke = !s, ke && (s = "<!-->"), typeof s != "string" && !ae(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Ge("dirty is not a string, aborting");
      } else
        throw Ge("toString is not a function");
    if (!r.isSupported) {
      if (z(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ae(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Me || Fe(e), r.removed = [], typeof s == "string" && (ne = !1), ne) {
      if (s.nodeName) {
        var R = S(s.nodeName);
        if (!E[R] || re[R])
          throw Ge("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof u)
      n = vt("<!---->"), i = n.ownerDocument.importNode(s, !0), i.nodeType === 1 && i.nodeName === "BODY" || i.nodeName === "HTML" ? n = i : n.appendChild(i);
    else {
      if (!K && !X && !W && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return w && fe ? w.createHTML(s) : s;
      if (n = vt(s), !n)
        return K ? null : fe ? Ae : "";
    }
    n && Ce && C(n.firstChild);
    for (var B = Tt(ne ? s : n); h = B.nextNode(); )
      h.nodeType === 3 && h === M || yt(h) || (h.content instanceof c && lr(h.content), At(h), M = h);
    if (M = null, ne)
      return s;
    if (K) {
      if (pe)
        for (O = Yt.call(n.ownerDocument); n.firstChild; )
          O.appendChild(n.firstChild);
      else
        O = n;
      return (A.shadowroot || A.shadowrootmod) && (O = Kt.call(a, O, !0)), O;
    }
    var y = W ? n.outerHTML : n.innerHTML;
    return W && E["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && b(jr, n.ownerDocument.doctype.name) && (y = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + y), X && (y = k(y, Re, " "), y = k(y, be, " "), y = k(y, Oe, " ")), w && fe ? w.createHTML(y) : y;
  }, r.setConfig = function(s) {
    Fe(s), Me = !0;
  }, r.clearConfig = function() {
    ee = null, Me = !1;
  }, r.isValidAttribute = function(s, e, n) {
    ee || Fe({});
    var i = S(s), h = S(e);
    return gt(i, h, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (F[s] = F[s] || [], oe(F[s], e));
  }, r.removeHook = function(s) {
    if (F[s])
      return Nt(F[s]);
  }, r.removeHooks = function(s) {
    F[s] && (F[s] = []);
  }, r.removeAllHooks = function() {
    F = {};
  }, r;
}
var Br = Gt();
const Je = (t) => ({ __html: Br.sanitize(t) });
m.shape({
  event: m.string,
  action: m.string,
  name: m.string,
  region: m.string,
  section: m.string,
  component: m.string,
  type: m.string,
  text: m.string
});
const $r = ({
  event: t = "",
  action: r = "",
  name: a = "",
  type: o = "",
  section: c = "",
  text: l = "",
  region: u = "",
  component: f = ""
}) => {
  const { dataLayer: v } = window, g = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: a.toLowerCase(),
    type: o.toLowerCase(),
    region: u.toLowerCase(),
    section: c.toLowerCase(),
    text: l.toLowerCase(),
    component: f.toLowerCase()
  };
  v && v.push(g);
}, qr = "staticMarkup";
function Bt() {
  const r = Ft().indexOf(qr) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const It = ({ gaData: t, prefix: r = "", children: a }) => {
  const { isReact: o } = Bt(), { onClick: c, ...l } = a.props;
  if (o)
    return Ye.cloneElement(a, {
      ...l,
      onClick: (v) => ($r(t), c ? c(v) : !0)
    });
  let u = "";
  ["input", "header", "header-input"].includes(r) && (u = `-${r}`);
  const f = {
    [`data-ga${u}`]: t.text,
    [`data-ga${u}-name`]: t.name,
    [`data-ga${u}-event`]: t.event,
    [`data-ga${u}-action`]: t.action,
    [`data-ga${u}-type`]: t.type,
    [`data-ga${u}-region`]: t.region,
    [`data-ga${u}-section`]: t.section,
    [`data-ga${u}-component`]: t.component
  };
  return Ye.cloneElement(a, {
    ...l,
    onClick: c,
    ...f
  });
}, Qe = ({
  src: t,
  alt: r,
  cssClasses: a,
  loading: o = "lazy",
  decoding: c = "async",
  dataTestId: l,
  fetchPriority: u = "auto",
  width: f,
  height: v,
  cardLink: g,
  title: _,
  caption: x,
  captionTitle: L,
  border: U,
  dropShadow: q
}) => {
  const V = {
    src: t,
    alt: r,
    loading: o,
    decoding: c,
    fetchpriority: u,
    // React attribute bug workaround
    ...(a == null ? void 0 : a.length) > 0 && { className: hr(a) },
    ...l && { "data-testid": l },
    ...f && { width: f },
    ...v && { height: v }
  }, le = se("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": q
  }), ce = (Y) => {
    const w = Y ? `${V.className} ${Y}` : V.className;
    return g ? /* @__PURE__ */ d.jsxs("a", { href: g, children: [
      /* @__PURE__ */ d.jsx("img", { ...V, className: w }),
      /* @__PURE__ */ d.jsx("span", { className: "visually-hidden", children: _ })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ d.jsx("img", { ...V, className: w })
    );
  }, te = () => /* @__PURE__ */ d.jsx("div", { className: le, children: /* @__PURE__ */ d.jsxs("figure", { className: "figure uds-figure", children: [
    ce(),
    x && /* @__PURE__ */ d.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      L && /* @__PURE__ */ d.jsx("h3", { children: L }),
      /* @__PURE__ */ d.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Je(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: x ? te() : ce(le) });
};
Qe.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: m.string.isRequired,
  /**
   * Image alt text
   */
  alt: m.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: m.arrayOf(m.string),
  /**
   * Image loading mode
   */
  loading: m.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: m.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: m.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: m.string,
  /**
   * Height of the image
   */
  height: m.string,
  dataTestId: m.string,
  cardLink: m.string,
  title: m.string,
  caption: m.string,
  captionTitle: m.string,
  border: m.bool,
  dropShadow: m.bool
};
const kt = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Pt = {
  OPEN: "open",
  CLOSE: "close"
}, Vr = {
  LARGE: "large",
  SMALL: "small"
}, $t = (t) => t === Vr.SMALL, qt = ({ imageSize: t, body: r, heading: a, readMoreLink: o }) => {
  const [c, l] = cr(!1), u = Ft(), { isReact: f, isBootstrap: v } = Bt(), g = `info-layer-${u}`, _ = $t(t), x = (L) => {
    (L.type === "click" || L.key === "Enter" || L.key === " ") && l(!c);
  };
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: se("info-layer", { show: c }),
      "data-testid": "info-layer",
      id: g,
      children: /* @__PURE__ */ d.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: se("header", {
              closed: _ && !c
            }),
            children: [
              _ && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: Je(r) }),
              /* @__PURE__ */ d.jsx(
                It,
                {
                  gaData: {
                    ...kt,
                    text: "Expand ranking",
                    // TODO: for bootstrap can we use aria-expanded value of the button to populate the "action" field
                    action: c ? Pt.OPEN : Pt.CLOSE,
                    section: a
                  },
                  children: /* @__PURE__ */ d.jsxs(
                    "button",
                    {
                      "data-bs-toggle": v && "collapse",
                      "data-bs-target": v && `#${g}`,
                      onClick: f && x,
                      className: se("btn-expand", {
                        btn: _
                      }),
                      type: "button",
                      "aria-expanded": c,
                      "aria-controls": g,
                      children: [
                        _ ? /* @__PURE__ */ d.jsx("span", { className: "visually-hidden", children: a }) : /* @__PURE__ */ d.jsx("h4", { children: a }),
                        /* @__PURE__ */ d.jsx("i", { className: "fas fa-chevron-up" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        !_ && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ d.jsx("p", { dangerouslySetInnerHTML: Je(r) }),
        o && /* @__PURE__ */ d.jsx(
          It,
          {
            gaData: {
              ...kt,
              section: a,
              text: "read more"
            },
            children: /* @__PURE__ */ d.jsxs("a", { href: o, className: "read-more", children: [
              "Read more ",
              /* @__PURE__ */ d.jsx("span", { className: "visually-hidden", children: a }),
              /* @__PURE__ */ d.jsx(
                "span",
                {
                  className: "fas icon-small fa-arrow-right",
                  "aria-hidden": "true"
                }
              )
            ] })
          }
        )
      ] })
    }
  );
};
qt.propTypes = {
  imageSize: m.oneOf(["small", "large"]),
  body: m.string.isRequired,
  heading: m.string.isRequired,
  readMoreLink: m.string
};
const Yr = ({
  imageSize: t = "large",
  image: r,
  imageAlt: a,
  heading: o,
  body: c,
  readMoreLink: l = "",
  citation: u
}) => {
  const f = $t(t);
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: se("card-ranking", {
        "large-image": !f,
        "small-image": f
      }),
      children: [
        f ? /* @__PURE__ */ d.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ d.jsx(Qe, { src: r, alt: a, fetchPriority: "high" }) }) : /* @__PURE__ */ d.jsx(Qe, { src: r, alt: a, fetchPriority: "high" }),
        f && /* @__PURE__ */ d.jsxs("div", { className: "citation", children: [
          /* @__PURE__ */ d.jsx("h4", { children: o }),
          /* @__PURE__ */ d.jsxs("p", { children: [
            "— ",
            u
          ] })
        ] }),
        /* @__PURE__ */ d.jsx(
          qt,
          {
            imageSize: t,
            body: c,
            heading: o,
            readMoreLink: l
          }
        )
      ]
    }
  );
};
Yr.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: m.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: m.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: m.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: m.string.isRequired,
  /**
   * Ranking card body content
   */
  body: m.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: m.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: m.string
};
export {
  Yr as RankingCard
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
