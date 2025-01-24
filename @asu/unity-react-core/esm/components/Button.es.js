import Ye, { useId as tr } from "react";
function Dt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xt = { exports: {} }, re = {};
var gt;
function rr() {
  if (gt) return re;
  gt = 1;
  var t = Ye, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, v, _) {
    var R, M = {}, D = null, F = null;
    _ !== void 0 && (D = "" + _), v.key !== void 0 && (D = "" + v.key), v.ref !== void 0 && (F = v.ref);
    for (R in v) s.call(v, R) && !u.hasOwnProperty(R) && (M[R] = v[R]);
    if (d && d.defaultProps) for (R in v = d.defaultProps, v) M[R] === void 0 && (M[R] = v[R]);
    return { $$typeof: n, type: d, key: D, ref: F, props: M, _owner: f.current };
  }
  return re.Fragment = o, re.jsx = c, re.jsxs = c, re;
}
xt.exports = rr();
var Ue = xt.exports, It = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var u = "", c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        d && (u = f(u, s(d)));
      }
      return u;
    }
    function s(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return o.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var c = "";
      for (var d in u)
        n.call(u, d) && u[d] && (c = f(c, d));
      return c;
    }
    function f(u, c) {
      return c ? u ? u + " " + c : u + c : u;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(It);
var nr = It.exports;
const At = /* @__PURE__ */ Dt(nr);
var kt = { exports: {} }, He, bt;
function ar() {
  if (bt) return He;
  bt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return He = t, He;
}
var We, St;
function or() {
  if (St) return We;
  St = 1;
  var t = ar();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, We = function() {
    function s(c, d, v, _, R, M) {
      if (M !== t) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    s.isRequired = s;
    function f() {
      return s;
    }
    var u = {
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
      resetWarningCache: n
    };
    return u.PropTypes = u, u;
  }, We;
}
kt.exports = or()();
var ir = kt.exports;
const i = /* @__PURE__ */ Dt(ir);
i.shape({
  url: i.string,
  altText: i.string,
  cssClass: i.arrayOf(i.string),
  size: i.oneOf(["small", "medium", "large"])
});
i.shape({
  text: i.string,
  maxWidth: i.string,
  cssClass: i.arrayOf(i.string),
  highlightColor: i.oneOf(["gold", "black"])
});
i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  content: i.shape({
    icon: i.string,
    header: i.string,
    body: i.string
  })
});
const sr = i.shape({
  text: i.string,
  name: i.string,
  event: i.string,
  action: i.string,
  type: i.string,
  region: i.string,
  section: i.string,
  component: i.string
});
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function Ve(t, n) {
  return Ve = Object.setPrototypeOf || function(s, f) {
    return s.__proto__ = f, s;
  }, Ve(t, n);
}
function lr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, n, o) {
  return lr() ? me = Reflect.construct : me = function(f, u, c) {
    var d = [null];
    d.push.apply(d, u);
    var v = Function.bind.apply(f, d), _ = new v();
    return c && Ve(_, c.prototype), _;
  }, me.apply(null, arguments);
}
function k(t) {
  return ur(t) || cr(t) || fr(t) || pr();
}
function ur(t) {
  if (Array.isArray(t)) return Xe(t);
}
function cr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function fr(t, n) {
  if (t) {
    if (typeof t == "string") return Xe(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Xe(t, n);
  }
}
function Xe(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, s = new Array(n); o < n; o++) s[o] = t[o];
  return s;
}
function pr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var mr = Object.hasOwnProperty, Ot = Object.setPrototypeOf, dr = Object.isFrozen, vr = Object.getPrototypeOf, Tr = Object.getOwnPropertyDescriptor, O = Object.freeze, w = Object.seal, _r = Object.create, Pt = typeof Reflect < "u" && Reflect, ve = Pt.apply, Ke = Pt.construct;
ve || (ve = function(n, o, s) {
  return n.apply(o, s);
});
O || (O = function(n) {
  return n;
});
w || (w = function(n) {
  return n;
});
Ke || (Ke = function(n, o) {
  return me(n, k(o));
});
var hr = C(Array.prototype.forEach), Rt = C(Array.prototype.pop), ne = C(Array.prototype.push), de = C(String.prototype.toLowerCase), ze = C(String.prototype.toString), Lt = C(String.prototype.match), I = C(String.prototype.replace), yr = C(String.prototype.indexOf), Er = C(String.prototype.trim), b = C(RegExp.prototype.test), Ge = gr(TypeError);
function C(t) {
  return function(n) {
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
      s[f - 1] = arguments[f];
    return ve(t, n, s);
  };
}
function gr(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    return Ke(t, o);
  };
}
function p(t, n, o) {
  var s;
  o = (s = o) !== null && s !== void 0 ? s : de, Ot && Ot(t, null);
  for (var f = n.length; f--; ) {
    var u = n[f];
    if (typeof u == "string") {
      var c = o(u);
      c !== u && (dr(n) || (n[f] = c), u = c);
    }
    t[u] = !0;
  }
  return t;
}
function $(t) {
  var n = _r(null), o;
  for (o in t)
    ve(mr, t, [o]) === !0 && (n[o] = t[o]);
  return n;
}
function fe(t, n) {
  for (; t !== null; ) {
    var o = Tr(t, n);
    if (o) {
      if (o.get)
        return C(o.get);
      if (typeof o.value == "function")
        return C(o.value);
    }
    t = vr(t);
  }
  function s(f) {
    return console.warn("fallback value for", f), null;
  }
  return s;
}
var Nt = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $e = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ar = O(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), je = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), br = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), wt = O(["#text"]), Ct = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), qe = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mt = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sr = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Or = w(/<%[\w\W]*|[\w\W]*%>/gm), Rr = w(/\${[\w\W]*}/gm), Lr = w(/^data-[\-\w.\u00B7-\uFFFF]/), Nr = w(/^aria-[\-\w]+$/), wr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cr = w(/^(?:\w+script|data):/i), Mr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dr = w(/^html$/i), xr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Ir = function() {
  return typeof window > "u" ? null : window;
}, kr = function(n, o) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var s = null, f = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(f) && (s = o.currentScript.getAttribute(f));
  var u = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(u, {
      createHTML: function(d) {
        return d;
      },
      createScriptURL: function(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
};
function Ft() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ir(), n = function(e) {
    return Ft(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, s = t.document, f = t.DocumentFragment, u = t.HTMLTemplateElement, c = t.Node, d = t.Element, v = t.NodeFilter, _ = t.NamedNodeMap, R = _ === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : _, M = t.HTMLFormElement, D = t.DOMParser, F = t.trustedTypes, j = d.prototype, Te = fe(j, "cloneNode"), _e = fe(j, "nextSibling"), q = fe(j, "childNodes"), he = fe(j, "parentNode");
  if (typeof u == "function") {
    var ye = s.createElement("template");
    ye.content && ye.content.ownerDocument && (s = ye.content.ownerDocument);
  }
  var x = kr(F, o), Ee = x ? x.createHTML("") : "", ae = s, ge = ae.implementation, Ht = ae.createNodeIterator, Wt = ae.createDocumentFragment, zt = ae.getElementsByTagName, Gt = o.importNode, Ze = {};
  try {
    Ze = $(s).documentMode ? s.documentMode : {};
  } catch {
  }
  var P = {};
  n.isSupported = typeof he == "function" && ge && ge.createHTMLDocument !== void 0 && Ze !== 9;
  var Ae = Sr, be = Or, Se = Rr, Bt = Lr, $t = Nr, jt = Cr, Je = Mr, qt = xr, Oe = wr, y = null, Qe = p({}, [].concat(k(Nt), k(Be), k($e), k(je), k(wt))), E = null, et = p({}, [].concat(k(Ct), k(qe), k(Mt), k(pe))), T = Object.seal(Object.create(null, {
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
  })), Q = null, Re = null, tt = !0, Le = !0, rt = !1, nt = !0, Y = !1, Ne = !0, z = !1, we = !1, Ce = !1, V = !1, oe = !1, ie = !1, at = !0, ot = !1, Yt = "user-content-", Me = !0, ee = !1, X = {}, K = null, it = p({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), st = null, lt = p({}, ["audio", "video", "img", "source", "image", "track"]), De = null, ut = p({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", U = "http://www.w3.org/1999/xhtml", Z = U, xe = !1, Ie = null, Vt = p({}, [se, le, U], ze), G, Xt = ["application/xhtml+xml", "text/html"], Kt = "text/html", g, J = null, Zt = s.createElement("form"), ct = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ke = function(e) {
    J && J === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    Xt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Kt : G = e.PARSER_MEDIA_TYPE, g = G === "application/xhtml+xml" ? ze : de, y = "ALLOWED_TAGS" in e ? p({}, e.ALLOWED_TAGS, g) : Qe, E = "ALLOWED_ATTR" in e ? p({}, e.ALLOWED_ATTR, g) : et, Ie = "ALLOWED_NAMESPACES" in e ? p({}, e.ALLOWED_NAMESPACES, ze) : Vt, De = "ADD_URI_SAFE_ATTR" in e ? p(
      $(ut),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      g
      // eslint-disable-line indent
    ) : ut, st = "ADD_DATA_URI_TAGS" in e ? p(
      $(lt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      g
      // eslint-disable-line indent
    ) : lt, K = "FORBID_CONTENTS" in e ? p({}, e.FORBID_CONTENTS, g) : it, Q = "FORBID_TAGS" in e ? p({}, e.FORBID_TAGS, g) : {}, Re = "FORBID_ATTR" in e ? p({}, e.FORBID_ATTR, g) : {}, X = "USE_PROFILES" in e ? e.USE_PROFILES : !1, tt = e.ALLOW_ARIA_ATTR !== !1, Le = e.ALLOW_DATA_ATTR !== !1, rt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, nt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Y = e.SAFE_FOR_TEMPLATES || !1, Ne = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ce = e.FORCE_BODY || !1, at = e.SANITIZE_DOM !== !1, ot = e.SANITIZE_NAMED_PROPS || !1, Me = e.KEEP_CONTENT !== !1, ee = e.IN_PLACE || !1, Oe = e.ALLOWED_URI_REGEXP || Oe, Z = e.NAMESPACE || U, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Y && (Le = !1), oe && (V = !0), X && (y = p({}, k(wt)), E = [], X.html === !0 && (p(y, Nt), p(E, Ct)), X.svg === !0 && (p(y, Be), p(E, qe), p(E, pe)), X.svgFilters === !0 && (p(y, $e), p(E, qe), p(E, pe)), X.mathMl === !0 && (p(y, je), p(E, Mt), p(E, pe))), e.ADD_TAGS && (y === Qe && (y = $(y)), p(y, e.ADD_TAGS, g)), e.ADD_ATTR && (E === et && (E = $(E)), p(E, e.ADD_ATTR, g)), e.ADD_URI_SAFE_ATTR && p(De, e.ADD_URI_SAFE_ATTR, g), e.FORBID_CONTENTS && (K === it && (K = $(K)), p(K, e.FORBID_CONTENTS, g)), Me && (y["#text"] = !0), z && p(y, ["html", "head", "body"]), y.table && (p(y, ["tbody"]), delete Q.tbody), O && O(e), J = e);
  }, ft = p({}, ["mi", "mo", "mn", "ms", "mtext"]), pt = p({}, ["annotation-xml"]), Jt = p({}, ["title", "style", "font", "a", "script"]), ue = p({}, Be);
  p(ue, $e), p(ue, Ar);
  var Pe = p({}, je);
  p(Pe, br);
  var Qt = function(e) {
    var r = he(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: Z,
      tagName: "template"
    });
    var a = de(e.tagName), m = de(r.tagName);
    return Ie[e.namespaceURI] ? e.namespaceURI === le ? r.namespaceURI === U ? a === "svg" : r.namespaceURI === se ? a === "svg" && (m === "annotation-xml" || ft[m]) : !!ue[a] : e.namespaceURI === se ? r.namespaceURI === U ? a === "math" : r.namespaceURI === le ? a === "math" && pt[m] : !!Pe[a] : e.namespaceURI === U ? r.namespaceURI === le && !pt[m] || r.namespaceURI === se && !ft[m] ? !1 : !Pe[a] && (Jt[a] || !ue[a]) : !!(G === "application/xhtml+xml" && Ie[e.namespaceURI]) : !1;
  }, N = function(e) {
    ne(n.removed, {
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
  }, ce = function(e, r) {
    try {
      ne(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      ne(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !E[e])
      if (V || oe)
        try {
          N(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, mt = function(e) {
    var r, a;
    if (Ce)
      e = "<remove></remove>" + e;
    else {
      var m = Lt(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    G === "application/xhtml+xml" && Z === U && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = x ? x.createHTML(e) : e;
    if (Z === U)
      try {
        r = new D().parseFromString(L, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ge.createDocument(Z, "template", null);
      try {
        r.documentElement.innerHTML = xe ? Ee : L;
      } catch {
      }
    }
    var S = r.body || r.documentElement;
    return e && a && S.insertBefore(s.createTextNode(a), S.childNodes[0] || null), Z === U ? zt.call(r, z ? "html" : "body")[0] : z ? r.documentElement : S;
  }, dt = function(e) {
    return Ht.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, vt = function(e) {
    return e instanceof M && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof R) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, te = function(e) {
    return W(c) === "object" ? e instanceof c : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, H = function(e, r, a) {
    P[e] && hr(P[e], function(m) {
      m.call(n, r, a, J);
    });
  }, Tt = function(e) {
    var r;
    if (H("beforeSanitizeElements", e, null), vt(e) || b(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = g(e.nodeName);
    if (H("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: y
    }), e.hasChildNodes() && !te(e.firstElementChild) && (!te(e.content) || !te(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent) || a === "select" && b(/<template/i, e.innerHTML) || e.nodeType === 7 || Ne && e.nodeType === 8 && b(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!y[a] || Q[a]) {
      if (!Q[a] && ht(a) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
        return !1;
      if (Me && !K[a]) {
        var m = he(e) || e.parentNode, L = q(e) || e.childNodes;
        if (L && m)
          for (var S = L.length, A = S - 1; A >= 0; --A) {
            var B = Te(L[A], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(B, _e(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof d && !Qt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (Y && e.nodeType === 3 && (r = e.textContent, r = I(r, Ae, " "), r = I(r, be, " "), r = I(r, Se, " "), e.textContent !== r && (ne(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), H("afterSanitizeElements", e, null), !1);
  }, _t = function(e, r, a) {
    if (at && (r === "id" || r === "name") && (a in s || a in Zt))
      return !1;
    if (!(Le && !Re[r] && b(Bt, r))) {
      if (!(tt && b($t, r))) {
        if (!E[r] || Re[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ht(e) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && b(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
          ) return !1;
        } else if (!De[r]) {
          if (!b(Oe, I(a, Je, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && yr(a, "data:") === 0 && st[e])) {
              if (!(rt && !b(jt, I(a, Je, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ht = function(e) {
    return e !== "annotation-xml" && Lt(e, qt);
  }, yt = function(e) {
    var r, a, m, L;
    H("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (L = S.length; L--; ) {
        r = S[L];
        var B = r, h = B.name, Fe = B.namespaceURI;
        if (a = h === "value" ? r.value : Er(r.value), m = g(h), A.attrName = m, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, H("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ce(h, e), !!A.keepAttr)) {
          if (!nt && b(/\/>/i, a)) {
            ce(h, e);
            continue;
          }
          Y && (a = I(a, Ae, " "), a = I(a, be, " "), a = I(a, Se, " "));
          var Et = g(e.nodeName);
          if (_t(Et, m, a)) {
            if (ot && (m === "id" || m === "name") && (ce(h, e), a = Yt + a), Ne && b(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(h, e);
              continue;
            }
            if (x && W(F) === "object" && typeof F.getAttributeType == "function" && !Fe)
              switch (F.getAttributeType(Et, m)) {
                case "TrustedHTML": {
                  a = x.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = x.createScriptURL(a);
                  break;
                }
              }
            try {
              Fe ? e.setAttributeNS(Fe, h, a) : e.setAttribute(h, a), vt(e) ? N(e) : Rt(n.removed);
            } catch {
            }
          }
        }
      }
      H("afterSanitizeAttributes", e, null);
    }
  }, er = function l(e) {
    var r, a = dt(e);
    for (H("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      H("uponSanitizeShadowNode", r, null), !Tt(r) && (r.content instanceof f && l(r.content), yt(r));
    H("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(l) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, m, L, S;
    if (xe = !l, xe && (l = "<!-->"), typeof l != "string" && !te(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw Ge("dirty is not a string, aborting");
      } else
        throw Ge("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof l == "string")
          return t.toStaticHTML(l);
        if (te(l))
          return t.toStaticHTML(l.outerHTML);
      }
      return l;
    }
    if (we || ke(e), n.removed = [], typeof l == "string" && (ee = !1), ee) {
      if (l.nodeName) {
        var A = g(l.nodeName);
        if (!y[A] || Q[A])
          throw Ge("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof c)
      r = mt("<!---->"), a = r.ownerDocument.importNode(l, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!V && !Y && !z && // eslint-disable-next-line unicorn/prefer-includes
      l.indexOf("<") === -1)
        return x && ie ? x.createHTML(l) : l;
      if (r = mt(l), !r)
        return V ? null : ie ? Ee : "";
    }
    r && Ce && N(r.firstChild);
    for (var B = dt(ee ? l : r); m = B.nextNode(); )
      m.nodeType === 3 && m === L || Tt(m) || (m.content instanceof f && er(m.content), yt(m), L = m);
    if (L = null, ee)
      return l;
    if (V) {
      if (oe)
        for (S = Wt.call(r.ownerDocument); r.firstChild; )
          S.appendChild(r.firstChild);
      else
        S = r;
      return (E.shadowroot || E.shadowrootmod) && (S = Gt.call(o, S, !0)), S;
    }
    var h = z ? r.outerHTML : r.innerHTML;
    return z && y["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && b(Dr, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + h), Y && (h = I(h, Ae, " "), h = I(h, be, " "), h = I(h, Se, " ")), x && ie ? x.createHTML(h) : h;
  }, n.setConfig = function(l) {
    ke(l), we = !0;
  }, n.clearConfig = function() {
    J = null, we = !1;
  }, n.isValidAttribute = function(l, e, r) {
    J || ke({});
    var a = g(l), m = g(e);
    return _t(a, m, r);
  }, n.addHook = function(l, e) {
    typeof e == "function" && (P[l] = P[l] || [], ne(P[l], e));
  }, n.removeHook = function(l) {
    if (P[l])
      return Rt(P[l]);
  }, n.removeHooks = function(l) {
    P[l] && (P[l] = []);
  }, n.removeAllHooks = function() {
    P = {};
  }, n;
}
Ft();
i.shape({
  event: i.string,
  action: i.string,
  name: i.string,
  region: i.string,
  section: i.string,
  component: i.string,
  type: i.string,
  text: i.string
});
const Pr = ({
  event: t = "",
  action: n = "",
  name: o = "",
  type: s = "",
  section: f = "",
  text: u = "",
  region: c = "",
  component: d = ""
}) => {
  const { dataLayer: v } = window, _ = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: o.toLowerCase(),
    type: s.toLowerCase(),
    region: c.toLowerCase(),
    section: f.toLowerCase(),
    text: u.toLowerCase(),
    component: d.toLowerCase()
  };
  v && v.push(_);
}, Fr = "staticMarkup";
function Ur() {
  const n = tr().indexOf(Fr) > -1 ? !0 : void 0;
  return {
    isBootstrap: n,
    isReact: n ? void 0 : !0
  };
}
const Hr = ({ gaData: t, prefix: n = "", children: o }) => {
  const { isReact: s } = Ur(), { onClick: f, ...u } = o.props;
  if (s)
    return Ye.cloneElement(o, {
      ...u,
      onClick: (v) => (Pr(t), f ? f(v) : !0)
    });
  let c = "";
  ["input", "header", "header-input"].includes(n) && (c = `-${n}`);
  const d = {
    [`data-ga${c}`]: t.text,
    [`data-ga${c}-name`]: t.name,
    [`data-ga${c}-event`]: t.event,
    [`data-ga${c}-action`]: t.action,
    [`data-ga${c}-type`]: t.type,
    [`data-ga${c}-region`]: t.region,
    [`data-ga${c}-section`]: t.section,
    [`data-ga${c}-component`]: t.component
  };
  return Ye.cloneElement(o, {
    ...u,
    onClick: f,
    ...d
  });
}, Wr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ut = ({
  label: t,
  cardTitle: n,
  gaData: o,
  ariaLabel: s,
  block: f,
  color: u,
  disabled: c,
  element: d,
  href: v,
  icon: _,
  innerRef: R,
  onClick: M,
  size: D,
  classes: F,
  target: j,
  ...Te
}) => {
  const _e = At("btn", {
    [`btn-${u}`]: !0,
    "btn-md": D === "small",
    "btn-sm": D === "xsmall",
    "btn-block": f,
    disabled: c
  });
  let q = d;
  return v && d === "button" && (q = "a"), /* @__PURE__ */ Ue.jsx(
    Hr,
    {
      gaData: {
        ...Wr,
        section: n,
        // @deprecated - remove at some point
        ...o,
        text: t
      },
      children: /* @__PURE__ */ Ue.jsxs(
        q,
        {
          type: q === "button" && M ? "button" : void 0,
          ...Te,
          className: At(F) || _e,
          href: v,
          ref: R,
          onClick: M,
          "aria-label": s,
          target: q === "a" ? j : null,
          children: [
            _ && /* @__PURE__ */ Ue.jsx("i", { className: `${_ == null ? void 0 : _[0]} fa-${_ == null ? void 0 : _[1]} me-1` }),
            t
          ]
        }
      )
    }
  );
};
Ut.propTypes = {
  /**
   * Button label
   */
  label: i.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: i.string,
  /**
   * Google Analytics event data
   */
  gaData: sr,
  /**
    ARIA label for accessibility
  */
  ariaLabel: i.string,
  /**
    Render button as a block-button?
  */
  block: i.bool,
  /**
    Button background color
  */
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: i.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: i.oneOfType([
    i.func,
    i.string,
    i.shape({ $$typeof: i.symbol, render: i.func }),
    i.arrayOf(
      i.oneOfType([
        i.func,
        i.string,
        i.shape({ $$typeof: i.symbol, render: i.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: i.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: i.arrayOf(i.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: i.oneOfType([
    i.object,
    i.func,
    i.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: i.func,
  /**
    Button size
  */
  size: i.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: i.arrayOf(i.string),
  /**
   Link target type
   */
  target: i.oneOf(["_blank", "_self", "_top", "_parent"])
};
Ut.defaultProps = {
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
export {
  Ut as Button
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
