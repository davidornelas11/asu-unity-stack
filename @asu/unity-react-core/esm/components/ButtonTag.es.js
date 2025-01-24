import Be, { useId as er } from "react";
function wt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, ee = {};
var ht;
function tr() {
  if (ht) return ee;
  ht = 1;
  var t = Be, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, v, O) {
    var R, k = {}, w = null, W = null;
    O !== void 0 && (w = "" + O), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && (W = v.ref);
    for (R in v) i.call(v, R) && !u.hasOwnProperty(R) && (k[R] = v[R]);
    if (d && d.defaultProps) for (R in v = d.defaultProps, v) k[R] === void 0 && (k[R] = v[R]);
    return { $$typeof: n, type: d, key: w, ref: W, props: k, _owner: f.current };
  }
  return ee.Fragment = o, ee.jsx = c, ee.jsxs = c, ee;
}
Nt.exports = tr();
var _t = Nt.exports, Ct = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var u = "", c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        d && (u = f(u, i(d)));
      }
      return u;
    }
    function i(u) {
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
})(Ct);
var rr = Ct.exports;
const nr = /* @__PURE__ */ wt(rr);
var Mt = { exports: {} }, ke, yt;
function ar() {
  if (yt) return ke;
  yt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = t, ke;
}
var Pe, Et;
function or() {
  if (Et) return Pe;
  Et = 1;
  var t = ar();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, Pe = function() {
    function i(c, d, v, O, R, k) {
      if (k !== t) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    i.isRequired = i;
    function f() {
      return i;
    }
    var u = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: f,
      element: i,
      elementType: i,
      instanceOf: f,
      node: i,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return u.PropTypes = u, u;
  }, Pe;
}
Mt.exports = or()();
var ir = Mt.exports;
const s = /* @__PURE__ */ wt(ir);
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
const sr = s.shape({
  text: s.string,
  name: s.string,
  event: s.string,
  action: s.string,
  type: s.string,
  region: s.string,
  section: s.string,
  component: s.string
});
function H(t) {
  "@babel/helpers - typeof";
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, H(t);
}
function $e(t, n) {
  return $e = Object.setPrototypeOf || function(i, f) {
    return i.__proto__ = f, i;
  }, $e(t, n);
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
function pe(t, n, o) {
  return lr() ? pe = Reflect.construct : pe = function(f, u, c) {
    var d = [null];
    d.push.apply(d, u);
    var v = Function.bind.apply(f, d), O = new v();
    return c && $e(O, c.prototype), O;
  }, pe.apply(null, arguments);
}
function I(t) {
  return ur(t) || cr(t) || fr(t) || pr();
}
function ur(t) {
  if (Array.isArray(t)) return je(t);
}
function cr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function fr(t, n) {
  if (t) {
    if (typeof t == "string") return je(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return je(t, n);
  }
}
function je(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, i = new Array(n); o < n; o++) i[o] = t[o];
  return i;
}
function pr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var mr = Object.hasOwnProperty, gt = Object.setPrototypeOf, dr = Object.isFrozen, vr = Object.getPrototypeOf, Tr = Object.getOwnPropertyDescriptor, S = Object.freeze, C = Object.seal, hr = Object.create, Dt = typeof Reflect < "u" && Reflect, de = Dt.apply, qe = Dt.construct;
de || (de = function(n, o, i) {
  return n.apply(o, i);
});
S || (S = function(n) {
  return n;
});
C || (C = function(n) {
  return n;
});
qe || (qe = function(n, o) {
  return pe(n, I(o));
});
var _r = M(Array.prototype.forEach), At = M(Array.prototype.pop), te = M(Array.prototype.push), me = M(String.prototype.toLowerCase), Fe = M(String.prototype.toString), bt = M(String.prototype.match), x = M(String.prototype.replace), yr = M(String.prototype.indexOf), Er = M(String.prototype.trim), A = M(RegExp.prototype.test), Ue = gr(TypeError);
function M(t) {
  return function(n) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
      i[f - 1] = arguments[f];
    return de(t, n, i);
  };
}
function gr(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return qe(t, o);
  };
}
function p(t, n, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : me, gt && gt(t, null);
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
  var n = hr(null), o;
  for (o in t)
    de(mr, t, [o]) === !0 && (n[o] = t[o]);
  return n;
}
function ce(t, n) {
  for (; t !== null; ) {
    var o = Tr(t, n);
    if (o) {
      if (o.get)
        return M(o.get);
      if (typeof o.value == "function")
        return M(o.value);
    }
    t = vr(t);
  }
  function i(f) {
    return console.warn("fallback value for", f), null;
  }
  return i;
}
var St = S(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), He = S(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), We = S(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ar = S(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ze = S(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), br = S(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ot = S(["#text"]), Rt = S(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ge = S(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = S(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fe = S(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sr = C(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Or = C(/<%[\w\W]*|[\w\W]*%>/gm), Rr = C(/\${[\w\W]*}/gm), Lr = C(/^data-[\-\w.\u00B7-\uFFFF]/), wr = C(/^aria-[\-\w]+$/), Nr = C(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cr = C(/^(?:\w+script|data):/i), Mr = C(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dr = C(/^html$/i), xr = C(/^[a-z][.\w]*(-[.\w]+)+$/i), Ir = function() {
  return typeof window > "u" ? null : window;
}, kr = function(n, o) {
  if (H(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var i = null, f = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(f) && (i = o.currentScript.getAttribute(f));
  var u = "dompurify" + (i ? "#" + i : "");
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
function xt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ir(), n = function(e) {
    return xt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, i = t.document, f = t.DocumentFragment, u = t.HTMLTemplateElement, c = t.Node, d = t.Element, v = t.NodeFilter, O = t.NamedNodeMap, R = O === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : O, k = t.HTMLFormElement, w = t.DOMParser, W = t.trustedTypes, re = d.prototype, kt = ce(re, "cloneNode"), Pt = ce(re, "nextSibling"), Ft = ce(re, "childNodes"), ve = ce(re, "parentNode");
  if (typeof u == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var D = kr(W, o), he = D ? D.createHTML("") : "", ne = i, _e = ne.implementation, Ut = ne.createNodeIterator, Ht = ne.createDocumentFragment, Wt = ne.getElementsByTagName, zt = o.importNode, Ye = {};
  try {
    Ye = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var P = {};
  n.isSupported = typeof ve == "function" && _e && _e.createHTMLDocument !== void 0 && Ye !== 9;
  var ye = Sr, Ee = Or, ge = Rr, Gt = Lr, Bt = wr, $t = Cr, Ve = Mr, jt = xr, Ae = Nr, _ = null, Xe = p({}, [].concat(I(St), I(He), I(We), I(ze), I(Ot))), y = null, Ke = p({}, [].concat(I(Rt), I(Ge), I(Lt), I(fe))), T = Object.seal(Object.create(null, {
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
  })), Z = null, be = null, Ze = !0, Se = !0, Je = !1, Qe = !0, j = !1, Oe = !0, z = !1, Re = !1, Le = !1, q = !1, ae = !1, oe = !1, et = !0, tt = !1, qt = "user-content-", we = !0, J = !1, Y = {}, V = null, rt = p({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), nt = null, at = p({}, ["audio", "video", "img", "source", "image", "track"]), Ne = null, ot = p({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ie = "http://www.w3.org/1998/Math/MathML", se = "http://www.w3.org/2000/svg", F = "http://www.w3.org/1999/xhtml", X = F, Ce = !1, Me = null, Yt = p({}, [ie, se, F], Fe), G, Vt = ["application/xhtml+xml", "text/html"], Xt = "text/html", E, K = null, Kt = i.createElement("form"), it = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, De = function(e) {
    K && K === e || ((!e || H(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    Vt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Xt : G = e.PARSER_MEDIA_TYPE, E = G === "application/xhtml+xml" ? Fe : me, _ = "ALLOWED_TAGS" in e ? p({}, e.ALLOWED_TAGS, E) : Xe, y = "ALLOWED_ATTR" in e ? p({}, e.ALLOWED_ATTR, E) : Ke, Me = "ALLOWED_NAMESPACES" in e ? p({}, e.ALLOWED_NAMESPACES, Fe) : Yt, Ne = "ADD_URI_SAFE_ATTR" in e ? p(
      $(ot),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ot, nt = "ADD_DATA_URI_TAGS" in e ? p(
      $(at),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : at, V = "FORBID_CONTENTS" in e ? p({}, e.FORBID_CONTENTS, E) : rt, Z = "FORBID_TAGS" in e ? p({}, e.FORBID_TAGS, E) : {}, be = "FORBID_ATTR" in e ? p({}, e.FORBID_ATTR, E) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Ze = e.ALLOW_ARIA_ATTR !== !1, Se = e.ALLOW_DATA_ATTR !== !1, Je = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Qe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, j = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, q = e.RETURN_DOM || !1, ae = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Le = e.FORCE_BODY || !1, et = e.SANITIZE_DOM !== !1, tt = e.SANITIZE_NAMED_PROPS || !1, we = e.KEEP_CONTENT !== !1, J = e.IN_PLACE || !1, Ae = e.ALLOWED_URI_REGEXP || Ae, X = e.NAMESPACE || F, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && it(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && it(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), j && (Se = !1), ae && (q = !0), Y && (_ = p({}, I(Ot)), y = [], Y.html === !0 && (p(_, St), p(y, Rt)), Y.svg === !0 && (p(_, He), p(y, Ge), p(y, fe)), Y.svgFilters === !0 && (p(_, We), p(y, Ge), p(y, fe)), Y.mathMl === !0 && (p(_, ze), p(y, Lt), p(y, fe))), e.ADD_TAGS && (_ === Xe && (_ = $(_)), p(_, e.ADD_TAGS, E)), e.ADD_ATTR && (y === Ke && (y = $(y)), p(y, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && p(Ne, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (V === rt && (V = $(V)), p(V, e.FORBID_CONTENTS, E)), we && (_["#text"] = !0), z && p(_, ["html", "head", "body"]), _.table && (p(_, ["tbody"]), delete Z.tbody), S && S(e), K = e);
  }, st = p({}, ["mi", "mo", "mn", "ms", "mtext"]), lt = p({}, ["annotation-xml"]), Zt = p({}, ["title", "style", "font", "a", "script"]), le = p({}, He);
  p(le, We), p(le, Ar);
  var xe = p({}, ze);
  p(xe, br);
  var Jt = function(e) {
    var r = ve(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: X,
      tagName: "template"
    });
    var a = me(e.tagName), m = me(r.tagName);
    return Me[e.namespaceURI] ? e.namespaceURI === se ? r.namespaceURI === F ? a === "svg" : r.namespaceURI === ie ? a === "svg" && (m === "annotation-xml" || st[m]) : !!le[a] : e.namespaceURI === ie ? r.namespaceURI === F ? a === "math" : r.namespaceURI === se ? a === "math" && lt[m] : !!xe[a] : e.namespaceURI === F ? r.namespaceURI === se && !lt[m] || r.namespaceURI === ie && !st[m] ? !1 : !xe[a] && (Zt[a] || !le[a]) : !!(G === "application/xhtml+xml" && Me[e.namespaceURI]) : !1;
  }, N = function(e) {
    te(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = he;
      } catch {
        e.remove();
      }
    }
  }, ue = function(e, r) {
    try {
      te(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      te(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !y[e])
      if (q || ae)
        try {
          N(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, ut = function(e) {
    var r, a;
    if (Le)
      e = "<remove></remove>" + e;
    else {
      var m = bt(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    G === "application/xhtml+xml" && X === F && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = D ? D.createHTML(e) : e;
    if (X === F)
      try {
        r = new w().parseFromString(L, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = _e.createDocument(X, "template", null);
      try {
        r.documentElement.innerHTML = Ce ? he : L;
      } catch {
      }
    }
    var b = r.body || r.documentElement;
    return e && a && b.insertBefore(i.createTextNode(a), b.childNodes[0] || null), X === F ? Wt.call(r, z ? "html" : "body")[0] : z ? r.documentElement : b;
  }, ct = function(e) {
    return Ut.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ft = function(e) {
    return e instanceof k && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof R) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Q = function(e) {
    return H(c) === "object" ? e instanceof c : e && H(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, U = function(e, r, a) {
    P[e] && _r(P[e], function(m) {
      m.call(n, r, a, K);
    });
  }, pt = function(e) {
    var r;
    if (U("beforeSanitizeElements", e, null), ft(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = E(e.nodeName);
    if (U("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: _
    }), e.hasChildNodes() && !Q(e.firstElementChild) && (!Q(e.content) || !Q(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || a === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!_[a] || Z[a]) {
      if (!Z[a] && dt(a) && (T.tagNameCheck instanceof RegExp && A(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
        return !1;
      if (we && !V[a]) {
        var m = ve(e) || e.parentNode, L = Ft(e) || e.childNodes;
        if (L && m)
          for (var b = L.length, g = b - 1; g >= 0; --g) {
            var B = kt(L[g], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(B, Pt(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof d && !Jt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (j && e.nodeType === 3 && (r = e.textContent, r = x(r, ye, " "), r = x(r, Ee, " "), r = x(r, ge, " "), e.textContent !== r && (te(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), U("afterSanitizeElements", e, null), !1);
  }, mt = function(e, r, a) {
    if (et && (r === "id" || r === "name") && (a in i || a in Kt))
      return !1;
    if (!(Se && !be[r] && A(Gt, r))) {
      if (!(Ze && A(Bt, r))) {
        if (!y[r] || be[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(dt(e) && (T.tagNameCheck instanceof RegExp && A(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && A(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && A(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
          ) return !1;
        } else if (!Ne[r]) {
          if (!A(Ae, x(a, Ve, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && yr(a, "data:") === 0 && nt[e])) {
              if (!(Je && !A($t, x(a, Ve, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, dt = function(e) {
    return e !== "annotation-xml" && bt(e, jt);
  }, vt = function(e) {
    var r, a, m, L;
    U("beforeSanitizeAttributes", e, null);
    var b = e.attributes;
    if (b) {
      var g = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: y
      };
      for (L = b.length; L--; ) {
        r = b[L];
        var B = r, h = B.name, Ie = B.namespaceURI;
        if (a = h === "value" ? r.value : Er(r.value), m = E(h), g.attrName = m, g.attrValue = a, g.keepAttr = !0, g.forceKeepAttr = void 0, U("uponSanitizeAttribute", e, g), a = g.attrValue, !g.forceKeepAttr && (ue(h, e), !!g.keepAttr)) {
          if (!Qe && A(/\/>/i, a)) {
            ue(h, e);
            continue;
          }
          j && (a = x(a, ye, " "), a = x(a, Ee, " "), a = x(a, ge, " "));
          var Tt = E(e.nodeName);
          if (mt(Tt, m, a)) {
            if (tt && (m === "id" || m === "name") && (ue(h, e), a = qt + a), Oe && A(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(h, e);
              continue;
            }
            if (D && H(W) === "object" && typeof W.getAttributeType == "function" && !Ie)
              switch (W.getAttributeType(Tt, m)) {
                case "TrustedHTML": {
                  a = D.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = D.createScriptURL(a);
                  break;
                }
              }
            try {
              Ie ? e.setAttributeNS(Ie, h, a) : e.setAttribute(h, a), ft(e) ? N(e) : At(n.removed);
            } catch {
            }
          }
        }
      }
      U("afterSanitizeAttributes", e, null);
    }
  }, Qt = function l(e) {
    var r, a = ct(e);
    for (U("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      U("uponSanitizeShadowNode", r, null), !pt(r) && (r.content instanceof f && l(r.content), vt(r));
    U("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(l) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, m, L, b;
    if (Ce = !l, Ce && (l = "<!-->"), typeof l != "string" && !Q(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw Ue("dirty is not a string, aborting");
      } else
        throw Ue("toString is not a function");
    if (!n.isSupported) {
      if (H(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof l == "string")
          return t.toStaticHTML(l);
        if (Q(l))
          return t.toStaticHTML(l.outerHTML);
      }
      return l;
    }
    if (Re || De(e), n.removed = [], typeof l == "string" && (J = !1), J) {
      if (l.nodeName) {
        var g = E(l.nodeName);
        if (!_[g] || Z[g])
          throw Ue("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof c)
      r = ut("<!---->"), a = r.ownerDocument.importNode(l, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!q && !j && !z && // eslint-disable-next-line unicorn/prefer-includes
      l.indexOf("<") === -1)
        return D && oe ? D.createHTML(l) : l;
      if (r = ut(l), !r)
        return q ? null : oe ? he : "";
    }
    r && Le && N(r.firstChild);
    for (var B = ct(J ? l : r); m = B.nextNode(); )
      m.nodeType === 3 && m === L || pt(m) || (m.content instanceof f && Qt(m.content), vt(m), L = m);
    if (L = null, J)
      return l;
    if (q) {
      if (ae)
        for (b = Ht.call(r.ownerDocument); r.firstChild; )
          b.appendChild(r.firstChild);
      else
        b = r;
      return (y.shadowroot || y.shadowrootmod) && (b = zt.call(o, b, !0)), b;
    }
    var h = z ? r.outerHTML : r.innerHTML;
    return z && _["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && A(Dr, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + h), j && (h = x(h, ye, " "), h = x(h, Ee, " "), h = x(h, ge, " ")), D && oe ? D.createHTML(h) : h;
  }, n.setConfig = function(l) {
    De(l), Re = !0;
  }, n.clearConfig = function() {
    K = null, Re = !1;
  }, n.isValidAttribute = function(l, e, r) {
    K || De({});
    var a = E(l), m = E(e);
    return mt(a, m, r);
  }, n.addHook = function(l, e) {
    typeof e == "function" && (P[l] = P[l] || [], te(P[l], e));
  }, n.removeHook = function(l) {
    if (P[l])
      return At(P[l]);
  }, n.removeHooks = function(l) {
    P[l] && (P[l] = []);
  }, n.removeAllHooks = function() {
    P = {};
  }, n;
}
xt();
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
const Pr = ({
  event: t = "",
  action: n = "",
  name: o = "",
  type: i = "",
  section: f = "",
  text: u = "",
  region: c = "",
  component: d = ""
}) => {
  const { dataLayer: v } = window, O = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: c.toLowerCase(),
    section: f.toLowerCase(),
    text: u.toLowerCase(),
    component: d.toLowerCase()
  };
  v && v.push(O);
}, Fr = "staticMarkup";
function Ur() {
  const n = er().indexOf(Fr) > -1 ? !0 : void 0;
  return {
    isBootstrap: n,
    isReact: n ? void 0 : !0
  };
}
const Hr = ({ gaData: t, prefix: n = "", children: o }) => {
  const { isReact: i } = Ur(), { onClick: f, ...u } = o.props;
  if (i)
    return Be.cloneElement(o, {
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
  return Be.cloneElement(o, {
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
}, It = ({
  label: t,
  cardTitle: n,
  gaData: o,
  ariaLabel: i,
  color: f,
  disabled: u,
  element: c,
  innerRef: d,
  href: v,
  onClick: O,
  ...R
}) => {
  const k = nr("btn", "btn-tag", {
    "btn-tag-alt-white": f === "white",
    "btn-tag-alt-gray": f === "gray",
    "btn-tag-alt-dark": f === "dark",
    disabled: u
  });
  let w = c;
  return v && c === "button" && (w = "a"), /* @__PURE__ */ _t.jsx(
    Hr,
    {
      gaData: {
        ...Wr,
        section: n,
        // @deprecated - remove at some point
        ...o,
        text: t
      },
      children: /* @__PURE__ */ _t.jsx(
        w,
        {
          type: w === "button" && O ? "button" : void 0,
          ...R,
          className: k,
          href: v,
          ref: d,
          onClick: O,
          "aria-label": i,
          children: t
        }
      )
    }
  );
};
It.propTypes = {
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
  gaData: sr,
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
It.defaultProps = {
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
export {
  It as ButtonTag
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
