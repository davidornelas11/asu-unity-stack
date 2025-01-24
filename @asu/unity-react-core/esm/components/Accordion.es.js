import $e, { useId as rr, useState as nr } from "react";
function Nt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wt = { exports: {} }, te = {};
var yt;
function ar() {
  if (yt) return te;
  yt = 1;
  var t = $e, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, v, R) {
    var b, x = {}, D = null, U = null;
    R !== void 0 && (D = "" + R), v.key !== void 0 && (D = "" + v.key), v.ref !== void 0 && (U = v.ref);
    for (b in v) i.call(v, b) && !s.hasOwnProperty(b) && (x[b] = v[b]);
    if (d && d.defaultProps) for (b in v = d.defaultProps, v) x[b] === void 0 && (x[b] = v[b]);
    return { $$typeof: r, type: d, key: D, ref: U, props: x, _owner: u.current };
  }
  return te.Fragment = o, te.jsx = c, te.jsxs = c, te;
}
wt.exports = ar();
var N = wt.exports, Mt = { exports: {} }, Pe, Et;
function or() {
  if (Et) return Pe;
  Et = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, At;
function ir() {
  if (At) return Fe;
  At = 1;
  var t = or();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Fe = function() {
    function i(c, d, v, R, b, x) {
      if (x !== t) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    i.isRequired = i;
    function u() {
      return i;
    }
    var s = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: u,
      element: i,
      elementType: i,
      instanceOf: u,
      node: i,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: o,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, Fe;
}
Mt.exports = ir()();
var sr = Mt.exports;
const p = /* @__PURE__ */ Nt(sr);
p.shape({
  url: p.string,
  altText: p.string,
  cssClass: p.arrayOf(p.string),
  size: p.oneOf(["small", "medium", "large"])
});
p.shape({
  text: p.string,
  maxWidth: p.string,
  cssClass: p.arrayOf(p.string),
  highlightColor: p.oneOf(["gold", "black"])
});
const xt = p.shape({
  color: p.oneOf(["gold", "maroon", "gray", "dark"]),
  content: p.shape({
    icon: p.string,
    header: p.string,
    body: p.string
  })
});
p.shape({
  text: p.string,
  name: p.string,
  event: p.string,
  action: p.string,
  type: p.string,
  region: p.string,
  section: p.string,
  component: p.string
});
var Dt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function o() {
      for (var s = "", c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        d && (s = u(s, i(d)));
      }
      return s;
    }
    function i(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return o.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var c = "";
      for (var d in s)
        r.call(s, d) && s[d] && (c = u(c, d));
      return c;
    }
    function u(s, c) {
      return c ? s ? s + " " + c : s + c : s;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(Dt);
var lr = Dt.exports;
const Ue = /* @__PURE__ */ Nt(lr);
function z(t) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, z(t);
}
function qe(t, r) {
  return qe = Object.setPrototypeOf || function(i, u) {
    return i.__proto__ = u, i;
  }, qe(t, r);
}
function cr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, r, o) {
  return cr() ? me = Reflect.construct : me = function(u, s, c) {
    var d = [null];
    d.push.apply(d, s);
    var v = Function.bind.apply(u, d), R = new v();
    return c && qe(R, c.prototype), R;
  }, me.apply(null, arguments);
}
function P(t) {
  return ur(t) || pr(t) || fr(t) || mr();
}
function ur(t) {
  if (Array.isArray(t)) return Ye(t);
}
function pr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function fr(t, r) {
  if (t) {
    if (typeof t == "string") return Ye(t, r);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ye(t, r);
  }
}
function Ye(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
  return i;
}
function mr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var dr = Object.hasOwnProperty, gt = Object.setPrototypeOf, vr = Object.isFrozen, hr = Object.getPrototypeOf, Tr = Object.getOwnPropertyDescriptor, O = Object.freeze, w = Object.seal, _r = Object.create, It = typeof Reflect < "u" && Reflect, ve = It.apply, Ve = It.construct;
ve || (ve = function(r, o, i) {
  return r.apply(o, i);
});
O || (O = function(r) {
  return r;
});
w || (w = function(r) {
  return r;
});
Ve || (Ve = function(r, o) {
  return me(r, P(o));
});
var yr = M(Array.prototype.forEach), St = M(Array.prototype.pop), re = M(Array.prototype.push), de = M(String.prototype.toLowerCase), He = M(String.prototype.toString), bt = M(String.prototype.match), k = M(String.prototype.replace), Er = M(String.prototype.indexOf), Ar = M(String.prototype.trim), g = M(RegExp.prototype.test), We = gr(TypeError);
function M(t) {
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
      i[u - 1] = arguments[u];
    return ve(t, r, i);
  };
}
function gr(t) {
  return function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return Ve(t, o);
  };
}
function f(t, r, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : de, gt && gt(t, null);
  for (var u = r.length; u--; ) {
    var s = r[u];
    if (typeof s == "string") {
      var c = o(s);
      c !== s && (vr(r) || (r[u] = c), s = c);
    }
    t[s] = !0;
  }
  return t;
}
function $(t) {
  var r = _r(null), o;
  for (o in t)
    ve(dr, t, [o]) === !0 && (r[o] = t[o]);
  return r;
}
function pe(t, r) {
  for (; t !== null; ) {
    var o = Tr(t, r);
    if (o) {
      if (o.get)
        return M(o.get);
      if (typeof o.value == "function")
        return M(o.value);
    }
    t = hr(t);
  }
  function i(u) {
    return console.warn("fallback value for", u), null;
  }
  return i;
}
var Ot = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ze = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ge = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Sr = O(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Be = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), br = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = O(["#text"]), Lt = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), je = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ct = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fe = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Or = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Rr = w(/<%[\w\W]*|[\w\W]*%>/gm), Lr = w(/\${[\w\W]*}/gm), Cr = w(/^data-[\-\w.\u00B7-\uFFFF]/), Nr = w(/^aria-[\-\w]+$/), wr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Mr = w(/^(?:\w+script|data):/i), xr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dr = w(/^html$/i), Ir = w(/^[a-z][.\w]*(-[.\w]+)+$/i), kr = function() {
  return typeof window > "u" ? null : window;
}, Pr = function(r, o) {
  if (z(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var i = null, u = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(u) && (i = o.currentScript.getAttribute(u));
  var s = "dompurify" + (i ? "#" + i : "");
  try {
    return r.createPolicy(s, {
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
function kt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kr(), r = function(e) {
    return kt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var o = t.document, i = t.document, u = t.DocumentFragment, s = t.HTMLTemplateElement, c = t.Node, d = t.Element, v = t.NodeFilter, R = t.NamedNodeMap, b = R === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : R, x = t.HTMLFormElement, D = t.DOMParser, U = t.trustedTypes, ne = d.prototype, Ft = pe(ne, "cloneNode"), Ut = pe(ne, "nextSibling"), Ht = pe(ne, "childNodes"), he = pe(ne, "parentNode");
  if (typeof s == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var I = Pr(U, o), _e = I ? I.createHTML("") : "", ae = i, ye = ae.implementation, Wt = ae.createNodeIterator, zt = ae.createDocumentFragment, Gt = ae.getElementsByTagName, Bt = o.importNode, Xe = {};
  try {
    Xe = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var F = {};
  r.isSupported = typeof he == "function" && ye && ye.createHTMLDocument !== void 0 && Xe !== 9;
  var Ee = Or, Ae = Rr, ge = Lr, jt = Cr, $t = Nr, qt = Mr, Ke = xr, Yt = Ir, Se = wr, _ = null, Ze = f({}, [].concat(P(Ot), P(ze), P(Ge), P(Be), P(Rt))), y = null, Je = f({}, [].concat(P(Lt), P(je), P(Ct), P(fe))), h = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Qe = !0, Oe = !0, et = !1, tt = !0, q = !1, Re = !0, G = !1, Le = !1, Ce = !1, Y = !1, oe = !1, ie = !1, rt = !0, nt = !1, Vt = "user-content-", Ne = !0, Q = !1, V = {}, X = null, at = f({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ot = null, it = f({}, ["audio", "video", "img", "source", "image", "track"]), we = null, st = f({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", H = "http://www.w3.org/1999/xhtml", K = H, Me = !1, xe = null, Xt = f({}, [se, le, H], He), B, Kt = ["application/xhtml+xml", "text/html"], Zt = "text/html", E, Z = null, Jt = i.createElement("form"), lt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, De = function(e) {
    Z && Z === e || ((!e || z(e) !== "object") && (e = {}), e = $(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Kt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Zt : B = e.PARSER_MEDIA_TYPE, E = B === "application/xhtml+xml" ? He : de, _ = "ALLOWED_TAGS" in e ? f({}, e.ALLOWED_TAGS, E) : Ze, y = "ALLOWED_ATTR" in e ? f({}, e.ALLOWED_ATTR, E) : Je, xe = "ALLOWED_NAMESPACES" in e ? f({}, e.ALLOWED_NAMESPACES, He) : Xt, we = "ADD_URI_SAFE_ATTR" in e ? f(
      $(st),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : st, ot = "ADD_DATA_URI_TAGS" in e ? f(
      $(it),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : it, X = "FORBID_CONTENTS" in e ? f({}, e.FORBID_CONTENTS, E) : at, J = "FORBID_TAGS" in e ? f({}, e.FORBID_TAGS, E) : {}, be = "FORBID_ATTR" in e ? f({}, e.FORBID_ATTR, E) : {}, V = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Qe = e.ALLOW_ARIA_ATTR !== !1, Oe = e.ALLOW_DATA_ATTR !== !1, et = e.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Re = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, Y = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ce = e.FORCE_BODY || !1, rt = e.SANITIZE_DOM !== !1, nt = e.SANITIZE_NAMED_PROPS || !1, Ne = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || H, h = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (h.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (h.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (h.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Oe = !1), oe && (Y = !0), V && (_ = f({}, P(Rt)), y = [], V.html === !0 && (f(_, Ot), f(y, Lt)), V.svg === !0 && (f(_, ze), f(y, je), f(y, fe)), V.svgFilters === !0 && (f(_, Ge), f(y, je), f(y, fe)), V.mathMl === !0 && (f(_, Be), f(y, Ct), f(y, fe))), e.ADD_TAGS && (_ === Ze && (_ = $(_)), f(_, e.ADD_TAGS, E)), e.ADD_ATTR && (y === Je && (y = $(y)), f(y, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && f(we, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (X === at && (X = $(X)), f(X, e.FORBID_CONTENTS, E)), Ne && (_["#text"] = !0), G && f(_, ["html", "head", "body"]), _.table && (f(_, ["tbody"]), delete J.tbody), O && O(e), Z = e);
  }, ct = f({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = f({}, ["annotation-xml"]), Qt = f({}, ["title", "style", "font", "a", "script"]), ce = f({}, ze);
  f(ce, Ge), f(ce, Sr);
  var Ie = f({}, Be);
  f(Ie, br);
  var er = function(e) {
    var n = he(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), m = de(n.tagName);
    return xe[e.namespaceURI] ? e.namespaceURI === le ? n.namespaceURI === H ? a === "svg" : n.namespaceURI === se ? a === "svg" && (m === "annotation-xml" || ct[m]) : !!ce[a] : e.namespaceURI === se ? n.namespaceURI === H ? a === "math" : n.namespaceURI === le ? a === "math" && ut[m] : !!Ie[a] : e.namespaceURI === H ? n.namespaceURI === le && !ut[m] || n.namespaceURI === se && !ct[m] ? !1 : !Ie[a] && (Qt[a] || !ce[a]) : !!(B === "application/xhtml+xml" && xe[e.namespaceURI]) : !1;
  }, C = function(e) {
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
  }, ue = function(e, n) {
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
    if (n.removeAttribute(e), e === "is" && !y[e])
      if (Y || oe)
        try {
          C(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, pt = function(e) {
    var n, a;
    if (Ce)
      e = "<remove></remove>" + e;
    else {
      var m = bt(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    B === "application/xhtml+xml" && K === H && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = I ? I.createHTML(e) : e;
    if (K === H)
      try {
        n = new D().parseFromString(L, B);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = ye.createDocument(K, "template", null);
      try {
        n.documentElement.innerHTML = Me ? _e : L;
      } catch {
      }
    }
    var S = n.body || n.documentElement;
    return e && a && S.insertBefore(i.createTextNode(a), S.childNodes[0] || null), K === H ? Gt.call(n, G ? "html" : "body")[0] : G ? n.documentElement : S;
  }, ft = function(e) {
    return Wt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, mt = function(e) {
    return e instanceof x && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof b) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return z(c) === "object" ? e instanceof c : e && z(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, W = function(e, n, a) {
    F[e] && yr(F[e], function(m) {
      m.call(r, n, a, Z);
    });
  }, dt = function(e) {
    var n;
    if (W("beforeSanitizeElements", e, null), mt(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return C(e), !0;
    var a = E(e.nodeName);
    if (W("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: _
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Re && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return C(e), !0;
    if (!_[a] || J[a]) {
      if (!J[a] && ht(a) && (h.tagNameCheck instanceof RegExp && g(h.tagNameCheck, a) || h.tagNameCheck instanceof Function && h.tagNameCheck(a)))
        return !1;
      if (Ne && !X[a]) {
        var m = he(e) || e.parentNode, L = Ht(e) || e.childNodes;
        if (L && m)
          for (var S = L.length, A = S - 1; A >= 0; --A) {
            var j = Ft(L[A], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(j, Ut(e));
          }
      }
      return C(e), !0;
    }
    return e instanceof d && !er(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (C(e), !0) : (q && e.nodeType === 3 && (n = e.textContent, n = k(n, Ee, " "), n = k(n, Ae, " "), n = k(n, ge, " "), e.textContent !== n && (re(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), W("afterSanitizeElements", e, null), !1);
  }, vt = function(e, n, a) {
    if (rt && (n === "id" || n === "name") && (a in i || a in Jt))
      return !1;
    if (!(Oe && !be[n] && g(jt, n))) {
      if (!(Qe && g($t, n))) {
        if (!y[n] || be[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ht(e) && (h.tagNameCheck instanceof RegExp && g(h.tagNameCheck, e) || h.tagNameCheck instanceof Function && h.tagNameCheck(e)) && (h.attributeNameCheck instanceof RegExp && g(h.attributeNameCheck, n) || h.attributeNameCheck instanceof Function && h.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && h.allowCustomizedBuiltInElements && (h.tagNameCheck instanceof RegExp && g(h.tagNameCheck, a) || h.tagNameCheck instanceof Function && h.tagNameCheck(a)))
          ) return !1;
        } else if (!we[n]) {
          if (!g(Se, k(a, Ke, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && Er(a, "data:") === 0 && ot[e])) {
              if (!(et && !g(qt, k(a, Ke, "")))) {
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
    return e !== "annotation-xml" && bt(e, Yt);
  }, Tt = function(e) {
    var n, a, m, L;
    W("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: y
      };
      for (L = S.length; L--; ) {
        n = S[L];
        var j = n, T = j.name, ke = j.namespaceURI;
        if (a = T === "value" ? n.value : Ar(n.value), m = E(T), A.attrName = m, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, W("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ue(T, e), !!A.keepAttr)) {
          if (!tt && g(/\/>/i, a)) {
            ue(T, e);
            continue;
          }
          q && (a = k(a, Ee, " "), a = k(a, Ae, " "), a = k(a, ge, " "));
          var _t = E(e.nodeName);
          if (vt(_t, m, a)) {
            if (nt && (m === "id" || m === "name") && (ue(T, e), a = Vt + a), Re && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(T, e);
              continue;
            }
            if (I && z(U) === "object" && typeof U.getAttributeType == "function" && !ke)
              switch (U.getAttributeType(_t, m)) {
                case "TrustedHTML": {
                  a = I.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = I.createScriptURL(a);
                  break;
                }
              }
            try {
              ke ? e.setAttributeNS(ke, T, a) : e.setAttribute(T, a), mt(e) ? C(e) : St(r.removed);
            } catch {
            }
          }
        }
      }
      W("afterSanitizeAttributes", e, null);
    }
  }, tr = function l(e) {
    var n, a = ft(e);
    for (W("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      W("uponSanitizeShadowNode", n, null), !dt(n) && (n.content instanceof u && l(n.content), Tt(n));
    W("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(l) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, m, L, S;
    if (Me = !l, Me && (l = "<!-->"), typeof l != "string" && !ee(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw We("dirty is not a string, aborting");
      } else
        throw We("toString is not a function");
    if (!r.isSupported) {
      if (z(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof l == "string")
          return t.toStaticHTML(l);
        if (ee(l))
          return t.toStaticHTML(l.outerHTML);
      }
      return l;
    }
    if (Le || De(e), r.removed = [], typeof l == "string" && (Q = !1), Q) {
      if (l.nodeName) {
        var A = E(l.nodeName);
        if (!_[A] || J[A])
          throw We("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof c)
      n = pt("<!---->"), a = n.ownerDocument.importNode(l, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!Y && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      l.indexOf("<") === -1)
        return I && ie ? I.createHTML(l) : l;
      if (n = pt(l), !n)
        return Y ? null : ie ? _e : "";
    }
    n && Ce && C(n.firstChild);
    for (var j = ft(Q ? l : n); m = j.nextNode(); )
      m.nodeType === 3 && m === L || dt(m) || (m.content instanceof u && tr(m.content), Tt(m), L = m);
    if (L = null, Q)
      return l;
    if (Y) {
      if (oe)
        for (S = zt.call(n.ownerDocument); n.firstChild; )
          S.appendChild(n.firstChild);
      else
        S = n;
      return (y.shadowroot || y.shadowrootmod) && (S = Bt.call(o, S, !0)), S;
    }
    var T = G ? n.outerHTML : n.innerHTML;
    return G && _["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && g(Dr, n.ownerDocument.doctype.name) && (T = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + T), q && (T = k(T, Ee, " "), T = k(T, Ae, " "), T = k(T, ge, " ")), I && ie ? I.createHTML(T) : T;
  }, r.setConfig = function(l) {
    De(l), Le = !0;
  }, r.clearConfig = function() {
    Z = null, Le = !1;
  }, r.isValidAttribute = function(l, e, n) {
    Z || De({});
    var a = E(l), m = E(e);
    return vt(a, m, n);
  }, r.addHook = function(l, e) {
    typeof e == "function" && (F[l] = F[l] || [], re(F[l], e));
  }, r.removeHook = function(l) {
    if (F[l])
      return St(F[l]);
  }, r.removeHooks = function(l) {
    F[l] && (F[l] = []);
  }, r.removeAllHooks = function() {
    F = {};
  }, r;
}
var Fr = kt();
const Ur = (t) => ({ __html: Fr.sanitize(t) });
p.shape({
  event: p.string,
  action: p.string,
  name: p.string,
  region: p.string,
  section: p.string,
  component: p.string,
  type: p.string,
  text: p.string
});
const Hr = ({
  event: t = "",
  action: r = "",
  name: o = "",
  type: i = "",
  section: u = "",
  text: s = "",
  region: c = "",
  component: d = ""
}) => {
  const { dataLayer: v } = window, R = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: c.toLowerCase(),
    section: u.toLowerCase(),
    text: s.toLowerCase(),
    component: d.toLowerCase()
  };
  v && v.push(R);
}, Wr = "staticMarkup";
function zr() {
  const r = rr().indexOf(Wr) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Gr = ({ gaData: t, prefix: r = "", children: o }) => {
  const { isReact: i } = zr(), { onClick: u, ...s } = o.props;
  if (i)
    return $e.cloneElement(o, {
      ...s,
      onClick: (v) => (Hr(t), u ? u(v) : !0)
    });
  let c = "";
  ["input", "header", "header-input"].includes(r) && (c = `-${r}`);
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
  return $e.cloneElement(o, {
    ...s,
    onClick: u,
    ...d
  });
}, Pt = ({ id: t, item: r, openCard: o, onClick: i, gaData: u }) => {
  var d, v, R, b, x, D;
  const s = t === o, c = s ? "open" : "close";
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: Ue("accordion-item", "mt-3", {
        [`accordion-item-${r.color}`]: r.color,
        "accordion-header-icon": (d = r.content) == null ? void 0 : d.icon
      }),
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ N.jsx("h4", { children: /* @__PURE__ */ N.jsx(
          Gr,
          {
            gaData: { ...u, action: c, text: r.content.header },
            children: /* @__PURE__ */ N.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: Ue({ collapsed: !s }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${t}`,
                role: "button",
                "aria-expanded": s,
                "aria-controls": `card-body-${t}`,
                onClick: (U) => i(U, t),
                children: [
                  (v = r.content) != null && v.icon ? /* @__PURE__ */ N.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ N.jsx(
                      "i",
                      {
                        className: `${(R = r.content.icon) == null ? void 0 : R[0]} fa-${(b = r.content.icon) == null ? void 0 : b[1]} me-2`
                      }
                    ),
                    r.content.header
                  ] }) : (x = r.content) == null ? void 0 : x.header,
                  /* @__PURE__ */ N.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((D = r.content) == null ? void 0 : D.body) && /* @__PURE__ */ N.jsx(
          "div",
          {
            id: `card-body-${t}`,
            className: Ue("collapse", { show: s }),
            children: /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: Ur(r.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
Pt.propTypes = {
  id: p.number,
  item: xt,
  openCard: p.number,
  onClick: p.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: p.object
};
const Br = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, jr = ({ cards: t, openedCard: r }) => {
  const [o, i] = nr(r), u = (s, c) => {
    s.preventDefault(), i(o !== c ? c : null);
  };
  return /* @__PURE__ */ N.jsx("div", { className: "accordion", children: t == null ? void 0 : t.map(
    (s, c) => s.content.body && s.content.header && /* @__PURE__ */ N.jsx(
      Pt,
      {
        id: c + 1,
        item: s,
        openCard: o,
        onClick: u,
        gaData: Br
      },
      c + 1
    )
  ) });
};
jr.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: p.arrayOf(xt).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: p.number
};
export {
  jr as Accordion
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
