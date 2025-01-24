import Ve, { useId as ir, useState as or } from "react";
function It(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var kt = { exports: {} }, ne = {};
var Ot;
function sr() {
  if (Ot) return ne;
  Ot = 1;
  var t = Ve, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, d, h) {
    var L, D = {}, M = null, U = null;
    h !== void 0 && (M = "" + h), d.key !== void 0 && (M = "" + d.key), d.ref !== void 0 && (U = d.ref);
    for (L in d) s.call(d, L) && !c.hasOwnProperty(L) && (D[L] = d[L]);
    if (m && m.defaultProps) for (L in d = m.defaultProps, d) D[L] === void 0 && (D[L] = d[L]);
    return { $$typeof: r, type: m, key: M, ref: U, props: D, _owner: f.current };
  }
  return ne.Fragment = o, ne.jsx = u, ne.jsxs = u, ne;
}
kt.exports = sr();
var S = kt.exports, Pt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function o() {
      for (var c = "", u = 0; u < arguments.length; u++) {
        var m = arguments[u];
        m && (c = f(c, s(m)));
      }
      return c;
    }
    function s(c) {
      if (typeof c == "string" || typeof c == "number")
        return c;
      if (typeof c != "object")
        return "";
      if (Array.isArray(c))
        return o.apply(null, c);
      if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
        return c.toString();
      var u = "";
      for (var m in c)
        r.call(c, m) && c[m] && (u = f(u, m));
      return u;
    }
    function f(c, u) {
      return u ? c ? c + " " + u : c + u : c;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(Pt);
var lr = Pt.exports;
const Ye = /* @__PURE__ */ It(lr);
var Ft = { exports: {} }, He, St;
function cr() {
  if (St) return He;
  St = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return He = t, He;
}
var We, Rt;
function ur() {
  if (Rt) return We;
  Rt = 1;
  var t = cr();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, We = function() {
    function s(u, m, d, h, L, D) {
      if (D !== t) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    s.isRequired = s;
    function f() {
      return s;
    }
    var c = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: f,
      element: s,
      elementType: s,
      instanceOf: f,
      node: s,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: o,
      resetWarningCache: r
    };
    return c.PropTypes = c, c;
  }, We;
}
Ft.exports = ur()();
var fr = Ft.exports;
const a = /* @__PURE__ */ It(fr);
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
const Ut = a.shape({
  text: a.string,
  name: a.string,
  event: a.string,
  action: a.string,
  type: a.string,
  region: a.string,
  section: a.string,
  component: a.string
});
function z(t) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, z(t);
}
function Xe(t, r) {
  return Xe = Object.setPrototypeOf || function(s, f) {
    return s.__proto__ = f, s;
  }, Xe(t, r);
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
function de(t, r, o) {
  return pr() ? de = Reflect.construct : de = function(f, c, u) {
    var m = [null];
    m.push.apply(m, c);
    var d = Function.bind.apply(f, m), h = new d();
    return u && Xe(h, u.prototype), h;
  }, de.apply(null, arguments);
}
function P(t) {
  return mr(t) || dr(t) || vr(t) || hr();
}
function mr(t) {
  if (Array.isArray(t)) return Ke(t);
}
function dr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function vr(t, r) {
  if (t) {
    if (typeof t == "string") return Ke(t, r);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ke(t, r);
  }
}
function Ke(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var o = 0, s = new Array(r); o < r; o++) s[o] = t[o];
  return s;
}
function hr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tr = Object.hasOwnProperty, Lt = Object.setPrototypeOf, _r = Object.isFrozen, yr = Object.getPrototypeOf, gr = Object.getOwnPropertyDescriptor, R = Object.freeze, w = Object.seal, Er = Object.create, Ht = typeof Reflect < "u" && Reflect, he = Ht.apply, Ze = Ht.construct;
he || (he = function(r, o, s) {
  return r.apply(o, s);
});
R || (R = function(r) {
  return r;
});
w || (w = function(r) {
  return r;
});
Ze || (Ze = function(r, o) {
  return de(r, P(o));
});
var Ar = x(Array.prototype.forEach), Nt = x(Array.prototype.pop), ae = x(Array.prototype.push), ve = x(String.prototype.toLowerCase), ze = x(String.prototype.toString), Ct = x(String.prototype.match), k = x(String.prototype.replace), br = x(String.prototype.indexOf), Or = x(String.prototype.trim), b = x(RegExp.prototype.test), $e = Sr(TypeError);
function x(t) {
  return function(r) {
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
      s[f - 1] = arguments[f];
    return he(t, r, s);
  };
}
function Sr(t) {
  return function() {
    for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    return Ze(t, o);
  };
}
function p(t, r, o) {
  var s;
  o = (s = o) !== null && s !== void 0 ? s : ve, Lt && Lt(t, null);
  for (var f = r.length; f--; ) {
    var c = r[f];
    if (typeof c == "string") {
      var u = o(c);
      u !== c && (_r(r) || (r[f] = u), c = u);
    }
    t[c] = !0;
  }
  return t;
}
function G(t) {
  var r = Er(null), o;
  for (o in t)
    he(Tr, t, [o]) === !0 && (r[o] = t[o]);
  return r;
}
function pe(t, r) {
  for (; t !== null; ) {
    var o = gr(t, r);
    if (o) {
      if (o.get)
        return x(o.get);
      if (typeof o.value == "function")
        return x(o.value);
    }
    t = yr(t);
  }
  function s(f) {
    return console.warn("fallback value for", f), null;
  }
  return s;
}
var wt = R(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = R(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), je = R(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Rr = R(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = R(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Lr = R(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), xt = R(["#text"]), Dt = R(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), qe = R(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mt = R(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), me = R(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nr = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Cr = w(/<%[\w\W]*|[\w\W]*%>/gm), wr = w(/\${[\w\W]*}/gm), xr = w(/^data-[\-\w.\u00B7-\uFFFF]/), Dr = w(/^aria-[\-\w]+$/), Mr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ir = w(/^(?:\w+script|data):/i), kr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Pr = w(/^html$/i), Fr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Ur = function() {
  return typeof window > "u" ? null : window;
}, Hr = function(r, o) {
  if (z(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var s = null, f = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(f) && (s = o.currentScript.getAttribute(f));
  var c = "dompurify" + (s ? "#" + s : "");
  try {
    return r.createPolicy(c, {
      createHTML: function(m) {
        return m;
      },
      createScriptURL: function(m) {
        return m;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
};
function Wt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ur(), r = function(e) {
    return Wt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var o = t.document, s = t.document, f = t.DocumentFragment, c = t.HTMLTemplateElement, u = t.Node, m = t.Element, d = t.NodeFilter, h = t.NamedNodeMap, L = h === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : h, D = t.HTMLFormElement, M = t.DOMParser, U = t.trustedTypes, q = m.prototype, Te = pe(q, "cloneNode"), _e = pe(q, "nextSibling"), V = pe(q, "childNodes"), ye = pe(q, "parentNode");
  if (typeof c == "function") {
    var ge = s.createElement("template");
    ge.content && ge.content.ownerDocument && (s = ge.content.ownerDocument);
  }
  var I = Hr(U, o), Ee = I ? I.createHTML("") : "", ie = s, Ae = ie.implementation, Bt = ie.createNodeIterator, jt = ie.createDocumentFragment, Gt = ie.getElementsByTagName, qt = o.importNode, et = {};
  try {
    et = G(s).documentMode ? s.documentMode : {};
  } catch {
  }
  var F = {};
  r.isSupported = typeof ye == "function" && Ae && Ae.createHTMLDocument !== void 0 && et !== 9;
  var be = Nr, Oe = Cr, Se = wr, Vt = xr, Yt = Dr, Xt = Ir, tt = kr, Kt = Fr, Re = Mr, y = null, rt = p({}, [].concat(P(wt), P(Be), P(je), P(Ge), P(xt))), g = null, nt = p({}, [].concat(P(Dt), P(qe), P(Mt), P(me))), T = Object.seal(Object.create(null, {
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
  })), ee = null, Le = null, at = !0, Ne = !0, it = !1, ot = !0, Y = !1, Ce = !0, $ = !1, we = !1, xe = !1, X = !1, oe = !1, se = !1, st = !0, lt = !1, Zt = "user-content-", De = !0, te = !1, K = {}, Z = null, ct = p({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ut = null, ft = p({}, ["audio", "video", "img", "source", "image", "track"]), Me = null, pt = p({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), le = "http://www.w3.org/1998/Math/MathML", ce = "http://www.w3.org/2000/svg", H = "http://www.w3.org/1999/xhtml", J = H, Ie = !1, ke = null, Jt = p({}, [le, ce, H], ze), B, Qt = ["application/xhtml+xml", "text/html"], er = "text/html", E, Q = null, tr = s.createElement("form"), mt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Pe = function(e) {
    Q && Q === e || ((!e || z(e) !== "object") && (e = {}), e = G(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Qt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = er : B = e.PARSER_MEDIA_TYPE, E = B === "application/xhtml+xml" ? ze : ve, y = "ALLOWED_TAGS" in e ? p({}, e.ALLOWED_TAGS, E) : rt, g = "ALLOWED_ATTR" in e ? p({}, e.ALLOWED_ATTR, E) : nt, ke = "ALLOWED_NAMESPACES" in e ? p({}, e.ALLOWED_NAMESPACES, ze) : Jt, Me = "ADD_URI_SAFE_ATTR" in e ? p(
      G(pt),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : pt, ut = "ADD_DATA_URI_TAGS" in e ? p(
      G(ft),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ft, Z = "FORBID_CONTENTS" in e ? p({}, e.FORBID_CONTENTS, E) : ct, ee = "FORBID_TAGS" in e ? p({}, e.FORBID_TAGS, E) : {}, Le = "FORBID_ATTR" in e ? p({}, e.FORBID_ATTR, E) : {}, K = "USE_PROFILES" in e ? e.USE_PROFILES : !1, at = e.ALLOW_ARIA_ATTR !== !1, Ne = e.ALLOW_DATA_ATTR !== !1, it = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ot = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Y = e.SAFE_FOR_TEMPLATES || !1, Ce = e.SAFE_FOR_XML !== !1, $ = e.WHOLE_DOCUMENT || !1, X = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, se = e.RETURN_TRUSTED_TYPE || !1, xe = e.FORCE_BODY || !1, st = e.SANITIZE_DOM !== !1, lt = e.SANITIZE_NAMED_PROPS || !1, De = e.KEEP_CONTENT !== !1, te = e.IN_PLACE || !1, Re = e.ALLOWED_URI_REGEXP || Re, J = e.NAMESPACE || H, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Y && (Ne = !1), oe && (X = !0), K && (y = p({}, P(xt)), g = [], K.html === !0 && (p(y, wt), p(g, Dt)), K.svg === !0 && (p(y, Be), p(g, qe), p(g, me)), K.svgFilters === !0 && (p(y, je), p(g, qe), p(g, me)), K.mathMl === !0 && (p(y, Ge), p(g, Mt), p(g, me))), e.ADD_TAGS && (y === rt && (y = G(y)), p(y, e.ADD_TAGS, E)), e.ADD_ATTR && (g === nt && (g = G(g)), p(g, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && p(Me, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (Z === ct && (Z = G(Z)), p(Z, e.FORBID_CONTENTS, E)), De && (y["#text"] = !0), $ && p(y, ["html", "head", "body"]), y.table && (p(y, ["tbody"]), delete ee.tbody), R && R(e), Q = e);
  }, dt = p({}, ["mi", "mo", "mn", "ms", "mtext"]), vt = p({}, ["annotation-xml"]), rr = p({}, ["title", "style", "font", "a", "script"]), ue = p({}, Be);
  p(ue, je), p(ue, Rr);
  var Fe = p({}, Ge);
  p(Fe, Lr);
  var nr = function(e) {
    var n = ye(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: J,
      tagName: "template"
    });
    var i = ve(e.tagName), v = ve(n.tagName);
    return ke[e.namespaceURI] ? e.namespaceURI === ce ? n.namespaceURI === H ? i === "svg" : n.namespaceURI === le ? i === "svg" && (v === "annotation-xml" || dt[v]) : !!ue[i] : e.namespaceURI === le ? n.namespaceURI === H ? i === "math" : n.namespaceURI === ce ? i === "math" && vt[v] : !!Fe[i] : e.namespaceURI === H ? n.namespaceURI === ce && !vt[v] || n.namespaceURI === le && !dt[v] ? !1 : !Fe[i] && (rr[i] || !ue[i]) : !!(B === "application/xhtml+xml" && ke[e.namespaceURI]) : !1;
  }, C = function(e) {
    ae(r.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = Ee;
      } catch {
        e.remove();
      }
    }
  }, fe = function(e, n) {
    try {
      ae(r.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      ae(r.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is" && !g[e])
      if (X || oe)
        try {
          C(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, ht = function(e) {
    var n, i;
    if (xe)
      e = "<remove></remove>" + e;
    else {
      var v = Ct(e, /^[\r\n\t ]+/);
      i = v && v[0];
    }
    B === "application/xhtml+xml" && J === H && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var N = I ? I.createHTML(e) : e;
    if (J === H)
      try {
        n = new M().parseFromString(N, B);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Ae.createDocument(J, "template", null);
      try {
        n.documentElement.innerHTML = Ie ? Ee : N;
      } catch {
      }
    }
    var O = n.body || n.documentElement;
    return e && i && O.insertBefore(s.createTextNode(i), O.childNodes[0] || null), J === H ? Gt.call(n, $ ? "html" : "body")[0] : $ ? n.documentElement : O;
  }, Tt = function(e) {
    return Bt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, _t = function(e) {
    return e instanceof D && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof L) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, re = function(e) {
    return z(u) === "object" ? e instanceof u : e && z(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, W = function(e, n, i) {
    F[e] && Ar(F[e], function(v) {
      v.call(r, n, i, Q);
    });
  }, yt = function(e) {
    var n;
    if (W("beforeSanitizeElements", e, null), _t(e) || b(/[\u0080-\uFFFF]/, e.nodeName))
      return C(e), !0;
    var i = E(e.nodeName);
    if (W("uponSanitizeElement", e, {
      tagName: i,
      allowedTags: y
    }), e.hasChildNodes() && !re(e.firstElementChild) && (!re(e.content) || !re(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent) || i === "select" && b(/<template/i, e.innerHTML) || e.nodeType === 7 || Ce && e.nodeType === 8 && b(/<[/\w]/g, e.data))
      return C(e), !0;
    if (!y[i] || ee[i]) {
      if (!ee[i] && Et(i) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
        return !1;
      if (De && !Z[i]) {
        var v = ye(e) || e.parentNode, N = V(e) || e.childNodes;
        if (N && v)
          for (var O = N.length, A = O - 1; A >= 0; --A) {
            var j = Te(N[A], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, v.insertBefore(j, _e(e));
          }
      }
      return C(e), !0;
    }
    return e instanceof m && !nr(e) || (i === "noscript" || i === "noembed" || i === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (C(e), !0) : (Y && e.nodeType === 3 && (n = e.textContent, n = k(n, be, " "), n = k(n, Oe, " "), n = k(n, Se, " "), e.textContent !== n && (ae(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), W("afterSanitizeElements", e, null), !1);
  }, gt = function(e, n, i) {
    if (st && (n === "id" || n === "name") && (i in s || i in tr))
      return !1;
    if (!(Ne && !Le[n] && b(Vt, n))) {
      if (!(at && b(Yt, n))) {
        if (!g[n] || Le[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Et(e) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && b(T.attributeNameCheck, n) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
          ) return !1;
        } else if (!Me[n]) {
          if (!b(Re, k(i, tt, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && br(i, "data:") === 0 && ut[e])) {
              if (!(it && !b(Xt, k(i, tt, "")))) {
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
    return e !== "annotation-xml" && Ct(e, Kt);
  }, At = function(e) {
    var n, i, v, N;
    W("beforeSanitizeAttributes", e, null);
    var O = e.attributes;
    if (O) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: g
      };
      for (N = O.length; N--; ) {
        n = O[N];
        var j = n, _ = j.name, Ue = j.namespaceURI;
        if (i = _ === "value" ? n.value : Or(n.value), v = E(_), A.attrName = v, A.attrValue = i, A.keepAttr = !0, A.forceKeepAttr = void 0, W("uponSanitizeAttribute", e, A), i = A.attrValue, !A.forceKeepAttr && (fe(_, e), !!A.keepAttr)) {
          if (!ot && b(/\/>/i, i)) {
            fe(_, e);
            continue;
          }
          Y && (i = k(i, be, " "), i = k(i, Oe, " "), i = k(i, Se, " "));
          var bt = E(e.nodeName);
          if (gt(bt, v, i)) {
            if (lt && (v === "id" || v === "name") && (fe(_, e), i = Zt + i), Ce && b(/((--!?|])>)|<\/(style|title)/i, i)) {
              fe(_, e);
              continue;
            }
            if (I && z(U) === "object" && typeof U.getAttributeType == "function" && !Ue)
              switch (U.getAttributeType(bt, v)) {
                case "TrustedHTML": {
                  i = I.createHTML(i);
                  break;
                }
                case "TrustedScriptURL": {
                  i = I.createScriptURL(i);
                  break;
                }
              }
            try {
              Ue ? e.setAttributeNS(Ue, _, i) : e.setAttribute(_, i), _t(e) ? C(e) : Nt(r.removed);
            } catch {
            }
          }
        }
      }
      W("afterSanitizeAttributes", e, null);
    }
  }, ar = function l(e) {
    var n, i = Tt(e);
    for (W("beforeSanitizeShadowDOM", e, null); n = i.nextNode(); )
      W("uponSanitizeShadowNode", n, null), !yt(n) && (n.content instanceof f && l(n.content), At(n));
    W("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(l) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, i, v, N, O;
    if (Ie = !l, Ie && (l = "<!-->"), typeof l != "string" && !re(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw $e("dirty is not a string, aborting");
      } else
        throw $e("toString is not a function");
    if (!r.isSupported) {
      if (z(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof l == "string")
          return t.toStaticHTML(l);
        if (re(l))
          return t.toStaticHTML(l.outerHTML);
      }
      return l;
    }
    if (we || Pe(e), r.removed = [], typeof l == "string" && (te = !1), te) {
      if (l.nodeName) {
        var A = E(l.nodeName);
        if (!y[A] || ee[A])
          throw $e("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof u)
      n = ht("<!---->"), i = n.ownerDocument.importNode(l, !0), i.nodeType === 1 && i.nodeName === "BODY" || i.nodeName === "HTML" ? n = i : n.appendChild(i);
    else {
      if (!X && !Y && !$ && // eslint-disable-next-line unicorn/prefer-includes
      l.indexOf("<") === -1)
        return I && se ? I.createHTML(l) : l;
      if (n = ht(l), !n)
        return X ? null : se ? Ee : "";
    }
    n && xe && C(n.firstChild);
    for (var j = Tt(te ? l : n); v = j.nextNode(); )
      v.nodeType === 3 && v === N || yt(v) || (v.content instanceof f && ar(v.content), At(v), N = v);
    if (N = null, te)
      return l;
    if (X) {
      if (oe)
        for (O = jt.call(n.ownerDocument); n.firstChild; )
          O.appendChild(n.firstChild);
      else
        O = n;
      return (g.shadowroot || g.shadowrootmod) && (O = qt.call(o, O, !0)), O;
    }
    var _ = $ ? n.outerHTML : n.innerHTML;
    return $ && y["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && b(Pr, n.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + _), Y && (_ = k(_, be, " "), _ = k(_, Oe, " "), _ = k(_, Se, " ")), I && se ? I.createHTML(_) : _;
  }, r.setConfig = function(l) {
    Pe(l), we = !0;
  }, r.clearConfig = function() {
    Q = null, we = !1;
  }, r.isValidAttribute = function(l, e, n) {
    Q || Pe({});
    var i = E(l), v = E(e);
    return gt(i, v, n);
  }, r.addHook = function(l, e) {
    typeof e == "function" && (F[l] = F[l] || [], ae(F[l], e));
  }, r.removeHook = function(l) {
    if (F[l])
      return Nt(F[l]);
  }, r.removeHooks = function(l) {
    F[l] && (F[l] = []);
  }, r.removeAllHooks = function() {
    F = {};
  }, r;
}
Wt();
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
const Wr = ({
  event: t = "",
  action: r = "",
  name: o = "",
  type: s = "",
  section: f = "",
  text: c = "",
  region: u = "",
  component: m = ""
}) => {
  const { dataLayer: d } = window, h = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: o.toLowerCase(),
    type: s.toLowerCase(),
    region: u.toLowerCase(),
    section: f.toLowerCase(),
    text: c.toLowerCase(),
    component: m.toLowerCase()
  };
  d && d.push(h);
}, zr = "staticMarkup";
function zt() {
  const r = ir().indexOf(zr) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const $t = ({ gaData: t, prefix: r = "", children: o }) => {
  const { isReact: s } = zt(), { onClick: f, ...c } = o.props;
  if (s)
    return Ve.cloneElement(o, {
      ...c,
      onClick: (d) => (Wr(t), f ? f(d) : !0)
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
  return Ve.cloneElement(o, {
    ...c,
    onClick: f,
    ...m
  });
}, $r = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Je = ({
  label: t,
  cardTitle: r,
  gaData: o,
  ariaLabel: s,
  block: f,
  color: c,
  disabled: u,
  element: m,
  href: d,
  icon: h,
  innerRef: L,
  onClick: D,
  size: M,
  classes: U,
  target: q,
  ...Te
}) => {
  const _e = Ye("btn", {
    [`btn-${c}`]: !0,
    "btn-md": M === "small",
    "btn-sm": M === "xsmall",
    "btn-block": f,
    disabled: u
  });
  let V = m;
  return d && m === "button" && (V = "a"), /* @__PURE__ */ S.jsx(
    $t,
    {
      gaData: {
        ...$r,
        section: r,
        // @deprecated - remove at some point
        ...o,
        text: t
      },
      children: /* @__PURE__ */ S.jsxs(
        V,
        {
          type: V === "button" && D ? "button" : void 0,
          ...Te,
          className: Ye(U) || _e,
          href: d,
          ref: L,
          onClick: D,
          "aria-label": s,
          target: V === "a" ? q : null,
          children: [
            h && /* @__PURE__ */ S.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` }),
            t
          ]
        }
      )
    }
  );
};
Je.propTypes = {
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
  gaData: Ut,
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
Je.defaultProps = {
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
const Br = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Qe = ({
  color: t,
  icon: r,
  innerRef: o,
  onClick: s,
  size: f,
  cardTitle: c,
  className: u,
  gaData: m,
  ...d
}) => {
  const h = () => {
    s == null || s();
  };
  return /* @__PURE__ */ S.jsx(
    $t,
    {
      gaData: {
        ...Br,
        section: c,
        // @deprecated - remove at some point
        ...m,
        text: `${r == null ? void 0 : r[1]} icon`
      },
      children: /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${t} ${f === "large" && "btn-circle-large"} ${u}`,
          ref: o,
          "aria-label": "Close",
          onClick: h,
          ...d,
          children: /* @__PURE__ */ S.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
        }
      )
    }
  );
};
Qe.propTypes = {
  /**
    Color the button based on the background color
  */
  color: a.oneOf(["white", "gray", "black"]),
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
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: a.string,
  /**
   * Google Analytics event data
   */
  gaData: Ut,
  /**
    Button size
  */
  size: a.oneOf(["large", "small"]),
  className: a.string
};
Qe.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const qr = ({
  title: t,
  color: r = "orange",
  buttons: o = [],
  children: s
}) => {
  const { isBootstrap: f, isReact: c } = zt(), [u, m] = or(!0), d = () => m(!1);
  return u && /* @__PURE__ */ S.jsx("div", { role: "alert", className: `banner-${r} alert alert-dismissable`, children: /* @__PURE__ */ S.jsxs("div", { className: "banner uds-content-align", children: [
    /* @__PURE__ */ S.jsx("div", { className: "banner-icon", children: /* @__PURE__ */ S.jsx("span", { className: "fa fa-icon fa-bell" }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "banner-content", children: [
      /* @__PURE__ */ S.jsx("h1", { tabIndex: 0, children: t }),
      s
    ] }),
    o.length && /* @__PURE__ */ S.jsx("div", { className: "banner-buttons", children: o.map((h) => /* @__PURE__ */ S.jsx(
      Je,
      {
        classes: Ye("btn btn-sm", {
          "btn-dark": r !== "black",
          "btn-light": r === "black"
        }),
        href: h.href,
        label: h.label,
        gaData: {
          section: "NotificationBanner"
        }
      },
      `${h.label}${h.href}`
    )) }),
    /* @__PURE__ */ S.jsx("div", { className: "banner-close", children: /* @__PURE__ */ S.jsx(
      Qe,
      {
        "aria-label": "Close",
        icon: ["fas", "times"],
        onClick: c && d,
        "data-bs-dismiss": f && "alert",
        gaData: {
          section: "NotificationBanner"
        }
      }
    ) })
  ] }) });
};
export {
  qr as NotificationBanner
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
