import nr, { useState as ar, useEffect as ir } from "react";
function xt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var It = { exports: {} }, ae = {};
var At;
function or() {
  if (At) return ae;
  At = 1;
  var t = nr, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(d, f, R) {
    var h, w = {}, k = null, C = null;
    R !== void 0 && (k = "" + R), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (h in f) a.call(f, h) && !s.hasOwnProperty(h) && (w[h] = f[h]);
    if (d && d.defaultProps) for (h in f = d.defaultProps, f) w[h] === void 0 && (w[h] = f[h]);
    return { $$typeof: n, type: d, key: k, ref: C, props: w, _owner: u.current };
  }
  return ae.Fragment = o, ae.jsx = p, ae.jsxs = p, ae;
}
It.exports = or();
var O = It.exports, kt = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var s = "", p = 0; p < arguments.length; p++) {
        var d = arguments[p];
        d && (s = u(s, a(d)));
      }
      return s;
    }
    function a(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return o.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var p = "";
      for (var d in s)
        n.call(s, d) && s[d] && (p = u(p, d));
      return p;
    }
    function u(s, p) {
      return p ? s ? s + " " + p : s + p : s;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(kt);
var sr = kt.exports;
const Ye = /* @__PURE__ */ xt(sr);
var Pt = { exports: {} }, He, gt;
function lr() {
  if (gt) return He;
  gt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return He = t, He;
}
var We, bt;
function ur() {
  if (bt) return We;
  bt = 1;
  var t = lr();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, We = function() {
    function a(p, d, f, R, h, w) {
      if (w !== t) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    a.isRequired = a;
    function u() {
      return a;
    }
    var s = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: u,
      element: a,
      elementType: a,
      instanceOf: u,
      node: a,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, We;
}
Pt.exports = ur()();
var cr = Pt.exports;
const v = /* @__PURE__ */ xt(cr), St = (t, n, o) => t ? n : o;
function B(t) {
  "@babel/helpers - typeof";
  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, B(t);
}
function Ve(t, n) {
  return Ve = Object.setPrototypeOf || function(a, u) {
    return a.__proto__ = u, a;
  }, Ve(t, n);
}
function pr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ve(t, n, o) {
  return pr() ? ve = Reflect.construct : ve = function(u, s, p) {
    var d = [null];
    d.push.apply(d, s);
    var f = Function.bind.apply(u, d), R = new f();
    return p && Ve(R, p.prototype), R;
  }, ve.apply(null, arguments);
}
function H(t) {
  return fr(t) || mr(t) || dr(t) || vr();
}
function fr(t) {
  if (Array.isArray(t)) return Xe(t);
}
function mr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function dr(t, n) {
  if (t) {
    if (typeof t == "string") return Xe(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Xe(t, n);
  }
}
function Xe(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, a = new Array(n); o < n; o++) a[o] = t[o];
  return a;
}
function vr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var hr = Object.hasOwnProperty, Rt = Object.setPrototypeOf, Tr = Object.isFrozen, _r = Object.getPrototypeOf, yr = Object.getOwnPropertyDescriptor, L = Object.freeze, x = Object.seal, Er = Object.create, Ft = typeof Reflect < "u" && Reflect, Te = Ft.apply, Ke = Ft.construct;
Te || (Te = function(n, o, a) {
  return n.apply(o, a);
});
L || (L = function(n) {
  return n;
});
x || (x = function(n) {
  return n;
});
Ke || (Ke = function(n, o) {
  return ve(n, H(o));
});
var Ar = I(Array.prototype.forEach), Ot = I(Array.prototype.pop), ie = I(Array.prototype.push), he = I(String.prototype.toLowerCase), ze = I(String.prototype.toString), Lt = I(String.prototype.match), U = I(String.prototype.replace), gr = I(String.prototype.indexOf), br = I(String.prototype.trim), b = I(RegExp.prototype.test), Ge = Sr(TypeError);
function I(t) {
  return function(n) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
      a[u - 1] = arguments[u];
    return Te(t, n, a);
  };
}
function Sr(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return Ke(t, o);
  };
}
function c(t, n, o) {
  var a;
  o = (a = o) !== null && a !== void 0 ? a : he, Rt && Rt(t, null);
  for (var u = n.length; u--; ) {
    var s = n[u];
    if (typeof s == "string") {
      var p = o(s);
      p !== s && (Tr(n) || (n[u] = p), s = p);
    }
    t[s] = !0;
  }
  return t;
}
function V(t) {
  var n = Er(null), o;
  for (o in t)
    Te(hr, t, [o]) === !0 && (n[o] = t[o]);
  return n;
}
function me(t, n) {
  for (; t !== null; ) {
    var o = yr(t, n);
    if (o) {
      if (o.get)
        return I(o.get);
      if (typeof o.value == "function")
        return I(o.value);
    }
    t = _r(t);
  }
  function a(u) {
    return console.warn("fallback value for", u), null;
  }
  return a;
}
var Nt = L(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), je = L(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Be = L(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Rr = L(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $e = L(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Or = L(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), wt = L(["#text"]), Ct = L(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), qe = L(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dt = L(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), de = L(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lr = x(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Nr = x(/<%[\w\W]*|[\w\W]*%>/gm), wr = x(/\${[\w\W]*}/gm), Cr = x(/^data-[\-\w.\u00B7-\uFFFF]/), Dr = x(/^aria-[\-\w]+$/), Mr = x(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xr = x(/^(?:\w+script|data):/i), Ir = x(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), kr = x(/^html$/i), Pr = x(/^[a-z][.\w]*(-[.\w]+)+$/i), Fr = function() {
  return typeof window > "u" ? null : window;
}, Ur = function(n, o) {
  if (B(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var a = null, u = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(u) && (a = o.currentScript.getAttribute(u));
  var s = "dompurify" + (a ? "#" + a : "");
  try {
    return n.createPolicy(s, {
      createHTML: function(d) {
        return d;
      },
      createScriptURL: function(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function Ut() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fr(), n = function(e) {
    return Ut(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, a = t.document, u = t.DocumentFragment, s = t.HTMLTemplateElement, p = t.Node, d = t.Element, f = t.NodeFilter, R = t.NamedNodeMap, h = R === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : R, w = t.HTMLFormElement, k = t.DOMParser, C = t.trustedTypes, D = d.prototype, P = me(D, "cloneNode"), _e = me(D, "nextSibling"), Wt = me(D, "childNodes"), ye = me(D, "parentNode");
  if (typeof s == "function") {
    var Ee = a.createElement("template");
    Ee.content && Ee.content.ownerDocument && (a = Ee.content.ownerDocument);
  }
  var F = Ur(C, o), Ae = F ? F.createHTML("") : "", oe = a, ge = oe.implementation, zt = oe.createNodeIterator, Gt = oe.createDocumentFragment, jt = oe.getElementsByTagName, Bt = o.importNode, Ze = {};
  try {
    Ze = V(a).documentMode ? a.documentMode : {};
  } catch {
  }
  var W = {};
  n.isSupported = typeof ye == "function" && ge && ge.createHTMLDocument !== void 0 && Ze !== 9;
  var be = Lr, Se = Nr, Re = wr, $t = Cr, qt = Dr, Yt = xr, Je = Ir, Vt = Pr, Oe = Mr, y = null, Qe = c({}, [].concat(H(Nt), H(je), H(Be), H($e), H(wt))), E = null, et = c({}, [].concat(H(Ct), H(qe), H(Dt), H(de))), T = Object.seal(Object.create(null, {
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
  })), te = null, Le = null, tt = !0, Ne = !0, rt = !1, nt = !0, X = !1, we = !0, $ = !1, Ce = !1, De = !1, K = !1, se = !1, le = !1, at = !0, it = !1, Xt = "user-content-", Me = !0, re = !1, Z = {}, J = null, ot = c({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), st = null, lt = c({}, ["audio", "video", "img", "source", "image", "track"]), xe = null, ut = c({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ue = "http://www.w3.org/1998/Math/MathML", ce = "http://www.w3.org/2000/svg", z = "http://www.w3.org/1999/xhtml", Q = z, Ie = !1, ke = null, Kt = c({}, [ue, ce, z], ze), q, Zt = ["application/xhtml+xml", "text/html"], Jt = "text/html", A, ee = null, Qt = a.createElement("form"), ct = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Pe = function(e) {
    ee && ee === e || ((!e || B(e) !== "object") && (e = {}), e = V(e), q = // eslint-disable-next-line unicorn/prefer-includes
    Zt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? q = Jt : q = e.PARSER_MEDIA_TYPE, A = q === "application/xhtml+xml" ? ze : he, y = "ALLOWED_TAGS" in e ? c({}, e.ALLOWED_TAGS, A) : Qe, E = "ALLOWED_ATTR" in e ? c({}, e.ALLOWED_ATTR, A) : et, ke = "ALLOWED_NAMESPACES" in e ? c({}, e.ALLOWED_NAMESPACES, ze) : Kt, xe = "ADD_URI_SAFE_ATTR" in e ? c(
      V(ut),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      A
      // eslint-disable-line indent
    ) : ut, st = "ADD_DATA_URI_TAGS" in e ? c(
      V(lt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      A
      // eslint-disable-line indent
    ) : lt, J = "FORBID_CONTENTS" in e ? c({}, e.FORBID_CONTENTS, A) : ot, te = "FORBID_TAGS" in e ? c({}, e.FORBID_TAGS, A) : {}, Le = "FORBID_ATTR" in e ? c({}, e.FORBID_ATTR, A) : {}, Z = "USE_PROFILES" in e ? e.USE_PROFILES : !1, tt = e.ALLOW_ARIA_ATTR !== !1, Ne = e.ALLOW_DATA_ATTR !== !1, rt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, nt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = e.SAFE_FOR_TEMPLATES || !1, we = e.SAFE_FOR_XML !== !1, $ = e.WHOLE_DOCUMENT || !1, K = e.RETURN_DOM || !1, se = e.RETURN_DOM_FRAGMENT || !1, le = e.RETURN_TRUSTED_TYPE || !1, De = e.FORCE_BODY || !1, at = e.SANITIZE_DOM !== !1, it = e.SANITIZE_NAMED_PROPS || !1, Me = e.KEEP_CONTENT !== !1, re = e.IN_PLACE || !1, Oe = e.ALLOWED_URI_REGEXP || Oe, Q = e.NAMESPACE || z, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (Ne = !1), se && (K = !0), Z && (y = c({}, H(wt)), E = [], Z.html === !0 && (c(y, Nt), c(E, Ct)), Z.svg === !0 && (c(y, je), c(E, qe), c(E, de)), Z.svgFilters === !0 && (c(y, Be), c(E, qe), c(E, de)), Z.mathMl === !0 && (c(y, $e), c(E, Dt), c(E, de))), e.ADD_TAGS && (y === Qe && (y = V(y)), c(y, e.ADD_TAGS, A)), e.ADD_ATTR && (E === et && (E = V(E)), c(E, e.ADD_ATTR, A)), e.ADD_URI_SAFE_ATTR && c(xe, e.ADD_URI_SAFE_ATTR, A), e.FORBID_CONTENTS && (J === ot && (J = V(J)), c(J, e.FORBID_CONTENTS, A)), Me && (y["#text"] = !0), $ && c(y, ["html", "head", "body"]), y.table && (c(y, ["tbody"]), delete te.tbody), L && L(e), ee = e);
  }, pt = c({}, ["mi", "mo", "mn", "ms", "mtext"]), ft = c({}, ["annotation-xml"]), er = c({}, ["title", "style", "font", "a", "script"]), pe = c({}, je);
  c(pe, Be), c(pe, Rr);
  var Fe = c({}, $e);
  c(Fe, Or);
  var tr = function(e) {
    var r = ye(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: Q,
      tagName: "template"
    });
    var i = he(e.tagName), m = he(r.tagName);
    return ke[e.namespaceURI] ? e.namespaceURI === ce ? r.namespaceURI === z ? i === "svg" : r.namespaceURI === ue ? i === "svg" && (m === "annotation-xml" || pt[m]) : !!pe[i] : e.namespaceURI === ue ? r.namespaceURI === z ? i === "math" : r.namespaceURI === ce ? i === "math" && ft[m] : !!Fe[i] : e.namespaceURI === z ? r.namespaceURI === ce && !ft[m] || r.namespaceURI === ue && !pt[m] ? !1 : !Fe[i] && (er[i] || !pe[i]) : !!(q === "application/xhtml+xml" && ke[e.namespaceURI]) : !1;
  }, M = function(e) {
    ie(n.removed, {
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
  }, fe = function(e, r) {
    try {
      ie(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      ie(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !E[e])
      if (K || se)
        try {
          M(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, mt = function(e) {
    var r, i;
    if (De)
      e = "<remove></remove>" + e;
    else {
      var m = Lt(e, /^[\r\n\t ]+/);
      i = m && m[0];
    }
    q === "application/xhtml+xml" && Q === z && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var N = F ? F.createHTML(e) : e;
    if (Q === z)
      try {
        r = new k().parseFromString(N, q);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ge.createDocument(Q, "template", null);
      try {
        r.documentElement.innerHTML = Ie ? Ae : N;
      } catch {
      }
    }
    var S = r.body || r.documentElement;
    return e && i && S.insertBefore(a.createTextNode(i), S.childNodes[0] || null), Q === z ? jt.call(r, $ ? "html" : "body")[0] : $ ? r.documentElement : S;
  }, dt = function(e) {
    return zt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, vt = function(e) {
    return e instanceof w && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof h) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ne = function(e) {
    return B(p) === "object" ? e instanceof p : e && B(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, G = function(e, r, i) {
    W[e] && Ar(W[e], function(m) {
      m.call(n, r, i, ee);
    });
  }, ht = function(e) {
    var r;
    if (G("beforeSanitizeElements", e, null), vt(e) || b(/[\u0080-\uFFFF]/, e.nodeName))
      return M(e), !0;
    var i = A(e.nodeName);
    if (G("uponSanitizeElement", e, {
      tagName: i,
      allowedTags: y
    }), e.hasChildNodes() && !ne(e.firstElementChild) && (!ne(e.content) || !ne(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent) || i === "select" && b(/<template/i, e.innerHTML) || e.nodeType === 7 || we && e.nodeType === 8 && b(/<[/\w]/g, e.data))
      return M(e), !0;
    if (!y[i] || te[i]) {
      if (!te[i] && _t(i) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
        return !1;
      if (Me && !J[i]) {
        var m = ye(e) || e.parentNode, N = Wt(e) || e.childNodes;
        if (N && m)
          for (var S = N.length, g = S - 1; g >= 0; --g) {
            var Y = P(N[g], !0);
            Y.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(Y, _e(e));
          }
      }
      return M(e), !0;
    }
    return e instanceof d && !tr(e) || (i === "noscript" || i === "noembed" || i === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (M(e), !0) : (X && e.nodeType === 3 && (r = e.textContent, r = U(r, be, " "), r = U(r, Se, " "), r = U(r, Re, " "), e.textContent !== r && (ie(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), G("afterSanitizeElements", e, null), !1);
  }, Tt = function(e, r, i) {
    if (at && (r === "id" || r === "name") && (i in a || i in Qt))
      return !1;
    if (!(Ne && !Le[r] && b($t, r))) {
      if (!(tt && b(qt, r))) {
        if (!E[r] || Le[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(_t(e) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && b(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
          ) return !1;
        } else if (!xe[r]) {
          if (!b(Oe, U(i, Je, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && gr(i, "data:") === 0 && st[e])) {
              if (!(rt && !b(Yt, U(i, Je, "")))) {
                if (i)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, _t = function(e) {
    return e !== "annotation-xml" && Lt(e, Vt);
  }, yt = function(e) {
    var r, i, m, N;
    G("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var g = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (N = S.length; N--; ) {
        r = S[N];
        var Y = r, _ = Y.name, Ue = Y.namespaceURI;
        if (i = _ === "value" ? r.value : br(r.value), m = A(_), g.attrName = m, g.attrValue = i, g.keepAttr = !0, g.forceKeepAttr = void 0, G("uponSanitizeAttribute", e, g), i = g.attrValue, !g.forceKeepAttr && (fe(_, e), !!g.keepAttr)) {
          if (!nt && b(/\/>/i, i)) {
            fe(_, e);
            continue;
          }
          X && (i = U(i, be, " "), i = U(i, Se, " "), i = U(i, Re, " "));
          var Et = A(e.nodeName);
          if (Tt(Et, m, i)) {
            if (it && (m === "id" || m === "name") && (fe(_, e), i = Xt + i), we && b(/((--!?|])>)|<\/(style|title)/i, i)) {
              fe(_, e);
              continue;
            }
            if (F && B(C) === "object" && typeof C.getAttributeType == "function" && !Ue)
              switch (C.getAttributeType(Et, m)) {
                case "TrustedHTML": {
                  i = F.createHTML(i);
                  break;
                }
                case "TrustedScriptURL": {
                  i = F.createScriptURL(i);
                  break;
                }
              }
            try {
              Ue ? e.setAttributeNS(Ue, _, i) : e.setAttribute(_, i), vt(e) ? M(e) : Ot(n.removed);
            } catch {
            }
          }
        }
      }
      G("afterSanitizeAttributes", e, null);
    }
  }, rr = function l(e) {
    var r, i = dt(e);
    for (G("beforeSanitizeShadowDOM", e, null); r = i.nextNode(); )
      G("uponSanitizeShadowNode", r, null), !ht(r) && (r.content instanceof u && l(r.content), yt(r));
    G("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(l) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, m, N, S;
    if (Ie = !l, Ie && (l = "<!-->"), typeof l != "string" && !ne(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw Ge("dirty is not a string, aborting");
      } else
        throw Ge("toString is not a function");
    if (!n.isSupported) {
      if (B(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof l == "string")
          return t.toStaticHTML(l);
        if (ne(l))
          return t.toStaticHTML(l.outerHTML);
      }
      return l;
    }
    if (Ce || Pe(e), n.removed = [], typeof l == "string" && (re = !1), re) {
      if (l.nodeName) {
        var g = A(l.nodeName);
        if (!y[g] || te[g])
          throw Ge("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof p)
      r = mt("<!---->"), i = r.ownerDocument.importNode(l, !0), i.nodeType === 1 && i.nodeName === "BODY" || i.nodeName === "HTML" ? r = i : r.appendChild(i);
    else {
      if (!K && !X && !$ && // eslint-disable-next-line unicorn/prefer-includes
      l.indexOf("<") === -1)
        return F && le ? F.createHTML(l) : l;
      if (r = mt(l), !r)
        return K ? null : le ? Ae : "";
    }
    r && De && M(r.firstChild);
    for (var Y = dt(re ? l : r); m = Y.nextNode(); )
      m.nodeType === 3 && m === N || ht(m) || (m.content instanceof u && rr(m.content), yt(m), N = m);
    if (N = null, re)
      return l;
    if (K) {
      if (se)
        for (S = Gt.call(r.ownerDocument); r.firstChild; )
          S.appendChild(r.firstChild);
      else
        S = r;
      return (E.shadowroot || E.shadowrootmod) && (S = Bt.call(o, S, !0)), S;
    }
    var _ = $ ? r.outerHTML : r.innerHTML;
    return $ && y["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && b(kr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), X && (_ = U(_, be, " "), _ = U(_, Se, " "), _ = U(_, Re, " ")), F && le ? F.createHTML(_) : _;
  }, n.setConfig = function(l) {
    Pe(l), Ce = !0;
  }, n.clearConfig = function() {
    ee = null, Ce = !1;
  }, n.isValidAttribute = function(l, e, r) {
    ee || Pe({});
    var i = A(l), m = A(e);
    return Tt(i, m, r);
  }, n.addHook = function(l, e) {
    typeof e == "function" && (W[l] = W[l] || [], ie(W[l], e));
  }, n.removeHook = function(l) {
    if (W[l])
      return Ot(W[l]);
  }, n.removeHooks = function(l) {
    W[l] && (W[l] = []);
  }, n.removeAllHooks = function() {
    W = {};
  }, n;
}
Ut();
const Mt = (t, n, o) => {
  let a = t;
  const u = [];
  for (; a < n; )
    a > 0 && a <= o && u.push(a), a += 1;
  return u;
};
v.shape({
  event: v.string,
  action: v.string,
  name: v.string,
  region: v.string,
  section: v.string,
  component: v.string,
  type: v.string,
  text: v.string
});
const Hr = ({
  event: t = "",
  action: n = "",
  name: o = "",
  type: a = "",
  section: u = "",
  text: s = "",
  region: p = "",
  component: d = ""
}) => {
  const { dataLayer: f } = window, R = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: o.toLowerCase(),
    type: a.toLowerCase(),
    region: p.toLowerCase(),
    section: u.toLowerCase(),
    text: s.toLowerCase(),
    component: d.toLowerCase()
  };
  f && f.push(R);
}, j = ({
  dataId: t,
  isClickeable: n,
  disabled: o,
  pageLinkIcon: a,
  selectedPage: u,
  onClick: s,
  ellipses: p,
  ariaLabel: d,
  children: f,
  ariaDisabled: R
}) => /* @__PURE__ */ O.jsx(
  "li",
  {
    className: Ye("page-item", {
      disabled: o,
      active: u,
      elipses: p
    }),
    children: n ? /* @__PURE__ */ O.jsxs(
      "button",
      {
        type: "button",
        "aria-label": d,
        className: Ye("page-link", {
          "page-link-icon": a
        }),
        onClick: s,
        "data-testid": t ? `pagination-${t}` : "page-link",
        "data-id": t,
        "aria-current": u ? "page" : null,
        "aria-disabled": R,
        children: [
          f,
          u && /* @__PURE__ */ O.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ O.jsx("span", { className: "page-link", "data-testid": "page-link", children: f })
  }
);
j.propTypes = {
  isClickeable: v.bool,
  disabled: v.bool,
  pageLinkIcon: v.bool,
  selectedPage: v.bool,
  dataId: v.string,
  onClick: v.func,
  children: v.node,
  ellipses: v.bool,
  ariaLabel: v.string,
  ariaDisabled: v.bool
};
j.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const Wr = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Ht = ({
  type: t,
  background: n,
  currentPage: o,
  totalPages: a,
  onChange: u
}) => {
  const [s, p] = ar(null);
  ir(() => {
    p(o);
  }, [o]);
  const d = (h) => {
    Hr({ ...Wr, text: `page ${h}` });
  }, f = (h, w) => {
    const C = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === a ? a : s + 1,
      last: a
    }[w] ?? w;
    p(C), d(C), u == null || u(h, C);
  }, R = () => {
    const h = St(
      s === a - 1,
      2,
      s === a ? 3 : 1
    ), w = St(
      s === 1,
      3,
      s === 2 ? 2 : 1
    ), k = Mt(
      s - h,
      s,
      a
    ), C = Mt(
      s,
      s + 1 + w,
      a
    ), D = [...k, ...C];
    return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
      D[0] !== 1 && /* @__PURE__ */ O.jsx(
        j,
        {
          ariaLabel: `Page 1 of ${a}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (P) => f(P, "first"),
          children: "1"
        }
      ),
      D[0] > 2 && /* @__PURE__ */ O.jsx(j, { ellipses: !0, children: "..." }),
      D.map((P) => /* @__PURE__ */ O.jsx(
        j,
        {
          ariaLabel: `Page ${P} of ${a}`,
          isClickeable: !0,
          selectedPage: s === P,
          onClick: (_e) => f(_e, P),
          children: P
        },
        P
      )),
      D[D.length - 1] < a - 1 && /* @__PURE__ */ O.jsx(j, { ellipses: !0, children: "..." }),
      D[D.length - 1] !== a && /* @__PURE__ */ O.jsx(
        j,
        {
          isClickeable: !0,
          ariaLabel: `Page ${a} of ${a}`,
          selectedPage: s === a,
          onClick: (P) => f(P, "last"),
          children: a
        }
      )
    ] });
  };
  return /* @__PURE__ */ O.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ O.jsxs(
    "ul",
    {
      className: Ye(
        "pagination",
        "justify-content-center",
        "pt-2",
        "pb-2",
        {
          border: t === "bordered",
          "uds-bg-gray1": n === "gray1",
          "uds-bg-gray": n === "gray2",
          "uds-bg-dark": n === "gray7"
        }
      ),
      children: [
        /* @__PURE__ */ O.jsx(
          j,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (h) => f(h, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        R(),
        /* @__PURE__ */ O.jsx(
          j,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === a,
            disabled: s === a,
            pageLinkIcon: !0,
            onClick: (h) => f(h, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Ht.propTypes = {
  /**
   * Type of pagination
   */
  type: v.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: v.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: v.number,
  /**
   * Total number of pages
   */
  totalPages: v.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: v.func.isRequired
};
Ht.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
export {
  Ht as Pagination
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
