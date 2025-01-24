import Be, { useId as tr, useState as rr } from "react";
function Ct(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wt = { exports: {} }, te = {};
var Et;
function nr() {
  if (Et) return te;
  Et = 1;
  var t = Be, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, v, S) {
    var O, M = {}, H = null, z = null;
    S !== void 0 && (H = "" + S), v.key !== void 0 && (H = "" + v.key), v.ref !== void 0 && (z = v.ref);
    for (O in v) o.call(v, O) && !l.hasOwnProperty(O) && (M[O] = v[O]);
    if (m && m.defaultProps) for (O in v = m.defaultProps, v) M[O] === void 0 && (M[O] = v[O]);
    return { $$typeof: r, type: m, key: H, ref: z, props: M, _owner: f.current };
  }
  return te.Fragment = i, te.jsx = u, te.jsxs = u, te;
}
wt.exports = nr();
var U = wt.exports, Mt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function i() {
      for (var l = "", u = 0; u < arguments.length; u++) {
        var m = arguments[u];
        m && (l = f(l, o(m)));
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
      var u = "";
      for (var m in l)
        r.call(l, m) && l[m] && (u = f(u, m));
      return u;
    }
    function f(l, u) {
      return u ? l ? l + " " + u : l + u : l;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(Mt);
var ar = Mt.exports;
const ir = /* @__PURE__ */ Ct(ar);
var Dt = { exports: {} }, Pe, yt;
function or() {
  if (yt) return Pe;
  yt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, gt;
function sr() {
  if (gt) return Fe;
  gt = 1;
  var t = or();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Fe = function() {
    function o(u, m, v, S, O, M) {
      if (M !== t) {
        var H = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw H.name = "Invariant Violation", H;
      }
    }
    o.isRequired = o;
    function f() {
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
      arrayOf: f,
      element: o,
      elementType: o,
      instanceOf: f,
      node: o,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: i,
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, Fe;
}
Dt.exports = sr()();
var lr = Dt.exports;
const c = /* @__PURE__ */ Ct(lr);
c.shape({
  url: c.string,
  altText: c.string,
  cssClass: c.arrayOf(c.string),
  size: c.oneOf(["small", "medium", "large"])
});
c.shape({
  text: c.string,
  maxWidth: c.string,
  cssClass: c.arrayOf(c.string),
  highlightColor: c.oneOf(["gold", "black"])
});
c.shape({
  color: c.oneOf(["gold", "maroon", "gray", "dark"]),
  content: c.shape({
    icon: c.string,
    header: c.string,
    body: c.string
  })
});
const cr = c.shape({
  text: c.string,
  name: c.string,
  event: c.string,
  action: c.string,
  type: c.string,
  region: c.string,
  section: c.string,
  component: c.string
});
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, W(t);
}
function je(t, r) {
  return je = Object.setPrototypeOf || function(o, f) {
    return o.__proto__ = f, o;
  }, je(t, r);
}
function ur() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, r, i) {
  return ur() ? me = Reflect.construct : me = function(f, l, u) {
    var m = [null];
    m.push.apply(m, l);
    var v = Function.bind.apply(f, m), S = new v();
    return u && je(S, u.prototype), S;
  }, me.apply(null, arguments);
}
function I(t) {
  return fr(t) || pr(t) || mr(t) || dr();
}
function fr(t) {
  if (Array.isArray(t)) return qe(t);
}
function pr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function mr(t, r) {
  if (t) {
    if (typeof t == "string") return qe(t, r);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return qe(t, r);
  }
}
function qe(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var i = 0, o = new Array(r); i < r; i++) o[i] = t[i];
  return o;
}
function dr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vr = Object.hasOwnProperty, At = Object.setPrototypeOf, hr = Object.isFrozen, Tr = Object.getPrototypeOf, _r = Object.getOwnPropertyDescriptor, R = Object.freeze, C = Object.seal, Er = Object.create, xt = typeof Reflect < "u" && Reflect, ve = xt.apply, Ve = xt.construct;
ve || (ve = function(r, i, o) {
  return r.apply(i, o);
});
R || (R = function(r) {
  return r;
});
C || (C = function(r) {
  return r;
});
Ve || (Ve = function(r, i) {
  return me(r, I(i));
});
var yr = w(Array.prototype.forEach), St = w(Array.prototype.pop), re = w(Array.prototype.push), de = w(String.prototype.toLowerCase), Ue = w(String.prototype.toString), bt = w(String.prototype.match), x = w(String.prototype.replace), gr = w(String.prototype.indexOf), Ar = w(String.prototype.trim), A = w(RegExp.prototype.test), He = Sr(TypeError);
function w(t) {
  return function(r) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
      o[f - 1] = arguments[f];
    return ve(t, r, o);
  };
}
function Sr(t) {
  return function() {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return Ve(t, i);
  };
}
function p(t, r, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : de, At && At(t, null);
  for (var f = r.length; f--; ) {
    var l = r[f];
    if (typeof l == "string") {
      var u = i(l);
      u !== l && (hr(r) || (r[f] = u), l = u);
    }
    t[l] = !0;
  }
  return t;
}
function j(t) {
  var r = Er(null), i;
  for (i in t)
    ve(vr, t, [i]) === !0 && (r[i] = t[i]);
  return r;
}
function fe(t, r) {
  for (; t !== null; ) {
    var i = _r(t, r);
    if (i) {
      if (i.get)
        return w(i.get);
      if (typeof i.value == "function")
        return w(i.value);
    }
    t = Tr(t);
  }
  function o(f) {
    return console.warn("fallback value for", f), null;
  }
  return o;
}
var Ot = R(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = R(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = R(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), br = R(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = R(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Or = R(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = R(["#text"]), Lt = R(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), $e = R(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nt = R(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = R(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Rr = C(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Lr = C(/<%[\w\W]*|[\w\W]*%>/gm), Nr = C(/\${[\w\W]*}/gm), Cr = C(/^data-[\-\w.\u00B7-\uFFFF]/), wr = C(/^aria-[\-\w]+$/), Mr = C(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Dr = C(/^(?:\w+script|data):/i), xr = C(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ir = C(/^html$/i), kr = C(/^[a-z][.\w]*(-[.\w]+)+$/i), Pr = function() {
  return typeof window > "u" ? null : window;
}, Fr = function(r, i) {
  if (W(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var o = null, f = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(f) && (o = i.currentScript.getAttribute(f));
  var l = "dompurify" + (o ? "#" + o : "");
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
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pr(), r = function(e) {
    return It(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var i = t.document, o = t.document, f = t.DocumentFragment, l = t.HTMLTemplateElement, u = t.Node, m = t.Element, v = t.NodeFilter, S = t.NamedNodeMap, O = S === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : S, M = t.HTMLFormElement, H = t.DOMParser, z = t.trustedTypes, ne = m.prototype, Pt = fe(ne, "cloneNode"), Ft = fe(ne, "nextSibling"), Ut = fe(ne, "childNodes"), he = fe(ne, "parentNode");
  if (typeof l == "function") {
    var Te = o.createElement("template");
    Te.content && Te.content.ownerDocument && (o = Te.content.ownerDocument);
  }
  var D = Fr(z, i), _e = D ? D.createHTML("") : "", ae = o, Ee = ae.implementation, Ht = ae.createNodeIterator, Wt = ae.createDocumentFragment, zt = ae.getElementsByTagName, Gt = i.importNode, Xe = {};
  try {
    Xe = j(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var k = {};
  r.isSupported = typeof he == "function" && Ee && Ee.createHTMLDocument !== void 0 && Xe !== 9;
  var ye = Rr, ge = Lr, Ae = Nr, $t = Cr, Bt = wr, jt = Dr, Ke = xr, qt = kr, Se = Mr, _ = null, Ze = p({}, [].concat(I(Ot), I(We), I(ze), I(Ge), I(Rt))), E = null, Je = p({}, [].concat(I(Lt), I($e), I(Nt), I(pe))), h = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Qe = !0, Oe = !0, et = !1, tt = !0, q = !1, Re = !0, G = !1, Le = !1, Ne = !1, V = !1, ie = !1, oe = !1, rt = !0, nt = !1, Vt = "user-content-", Ce = !0, Q = !1, Y = {}, X = null, at = p({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), it = null, ot = p({}, ["audio", "video", "img", "source", "image", "track"]), we = null, st = p({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", P = "http://www.w3.org/1999/xhtml", K = P, Me = !1, De = null, Yt = p({}, [se, le, P], Ue), $, Xt = ["application/xhtml+xml", "text/html"], Kt = "text/html", y, Z = null, Zt = o.createElement("form"), lt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, xe = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = j(e), $ = // eslint-disable-next-line unicorn/prefer-includes
    Xt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? $ = Kt : $ = e.PARSER_MEDIA_TYPE, y = $ === "application/xhtml+xml" ? Ue : de, _ = "ALLOWED_TAGS" in e ? p({}, e.ALLOWED_TAGS, y) : Ze, E = "ALLOWED_ATTR" in e ? p({}, e.ALLOWED_ATTR, y) : Je, De = "ALLOWED_NAMESPACES" in e ? p({}, e.ALLOWED_NAMESPACES, Ue) : Yt, we = "ADD_URI_SAFE_ATTR" in e ? p(
      j(st),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : st, it = "ADD_DATA_URI_TAGS" in e ? p(
      j(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : ot, X = "FORBID_CONTENTS" in e ? p({}, e.FORBID_CONTENTS, y) : at, J = "FORBID_TAGS" in e ? p({}, e.FORBID_TAGS, y) : {}, be = "FORBID_ATTR" in e ? p({}, e.FORBID_ATTR, y) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Qe = e.ALLOW_ARIA_ATTR !== !1, Oe = e.ALLOW_DATA_ATTR !== !1, et = e.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Re = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, ie = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, rt = e.SANITIZE_DOM !== !1, nt = e.SANITIZE_NAMED_PROPS || !1, Ce = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || P, h = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (h.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (h.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (h.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Oe = !1), ie && (V = !0), Y && (_ = p({}, I(Rt)), E = [], Y.html === !0 && (p(_, Ot), p(E, Lt)), Y.svg === !0 && (p(_, We), p(E, $e), p(E, pe)), Y.svgFilters === !0 && (p(_, ze), p(E, $e), p(E, pe)), Y.mathMl === !0 && (p(_, Ge), p(E, Nt), p(E, pe))), e.ADD_TAGS && (_ === Ze && (_ = j(_)), p(_, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Je && (E = j(E)), p(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && p(we, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (X === at && (X = j(X)), p(X, e.FORBID_CONTENTS, y)), Ce && (_["#text"] = !0), G && p(_, ["html", "head", "body"]), _.table && (p(_, ["tbody"]), delete J.tbody), R && R(e), Z = e);
  }, ct = p({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = p({}, ["annotation-xml"]), Jt = p({}, ["title", "style", "font", "a", "script"]), ce = p({}, We);
  p(ce, ze), p(ce, br);
  var Ie = p({}, Ge);
  p(Ie, Or);
  var Qt = function(e) {
    var n = he(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), d = de(n.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === le ? n.namespaceURI === P ? a === "svg" : n.namespaceURI === se ? a === "svg" && (d === "annotation-xml" || ct[d]) : !!ce[a] : e.namespaceURI === se ? n.namespaceURI === P ? a === "math" : n.namespaceURI === le ? a === "math" && ut[d] : !!Ie[a] : e.namespaceURI === P ? n.namespaceURI === le && !ut[d] || n.namespaceURI === se && !ct[d] ? !1 : !Ie[a] && (Jt[a] || !ce[a]) : !!($ === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
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
    if (n.removeAttribute(e), e === "is" && !E[e])
      if (V || ie)
        try {
          N(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, ft = function(e) {
    var n, a;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var d = bt(e, /^[\r\n\t ]+/);
      a = d && d[0];
    }
    $ === "application/xhtml+xml" && K === P && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = D ? D.createHTML(e) : e;
    if (K === P)
      try {
        n = new H().parseFromString(L, $);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Ee.createDocument(K, "template", null);
      try {
        n.documentElement.innerHTML = Me ? _e : L;
      } catch {
      }
    }
    var b = n.body || n.documentElement;
    return e && a && b.insertBefore(o.createTextNode(a), b.childNodes[0] || null), K === P ? zt.call(n, G ? "html" : "body")[0] : G ? n.documentElement : b;
  }, pt = function(e) {
    return Ht.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, mt = function(e) {
    return e instanceof M && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(u) === "object" ? e instanceof u : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, F = function(e, n, a) {
    k[e] && yr(k[e], function(d) {
      d.call(r, n, a, Z);
    });
  }, dt = function(e) {
    var n;
    if (F("beforeSanitizeElements", e, null), mt(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = y(e.nodeName);
    if (F("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: _
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || a === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Re && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!_[a] || J[a]) {
      if (!J[a] && ht(a) && (h.tagNameCheck instanceof RegExp && A(h.tagNameCheck, a) || h.tagNameCheck instanceof Function && h.tagNameCheck(a)))
        return !1;
      if (Ce && !X[a]) {
        var d = he(e) || e.parentNode, L = Ut(e) || e.childNodes;
        if (L && d)
          for (var b = L.length, g = b - 1; g >= 0; --g) {
            var B = Pt(L[g], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, d.insertBefore(B, Ft(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof m && !Qt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (q && e.nodeType === 3 && (n = e.textContent, n = x(n, ye, " "), n = x(n, ge, " "), n = x(n, Ae, " "), e.textContent !== n && (re(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), F("afterSanitizeElements", e, null), !1);
  }, vt = function(e, n, a) {
    if (rt && (n === "id" || n === "name") && (a in o || a in Zt))
      return !1;
    if (!(Oe && !be[n] && A($t, n))) {
      if (!(Qe && A(Bt, n))) {
        if (!E[n] || be[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ht(e) && (h.tagNameCheck instanceof RegExp && A(h.tagNameCheck, e) || h.tagNameCheck instanceof Function && h.tagNameCheck(e)) && (h.attributeNameCheck instanceof RegExp && A(h.attributeNameCheck, n) || h.attributeNameCheck instanceof Function && h.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && h.allowCustomizedBuiltInElements && (h.tagNameCheck instanceof RegExp && A(h.tagNameCheck, a) || h.tagNameCheck instanceof Function && h.tagNameCheck(a)))
          ) return !1;
        } else if (!we[n]) {
          if (!A(Se, x(a, Ke, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && gr(a, "data:") === 0 && it[e])) {
              if (!(et && !A(jt, x(a, Ke, "")))) {
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
    return e !== "annotation-xml" && bt(e, qt);
  }, Tt = function(e) {
    var n, a, d, L;
    F("beforeSanitizeAttributes", e, null);
    var b = e.attributes;
    if (b) {
      var g = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (L = b.length; L--; ) {
        n = b[L];
        var B = n, T = B.name, ke = B.namespaceURI;
        if (a = T === "value" ? n.value : Ar(n.value), d = y(T), g.attrName = d, g.attrValue = a, g.keepAttr = !0, g.forceKeepAttr = void 0, F("uponSanitizeAttribute", e, g), a = g.attrValue, !g.forceKeepAttr && (ue(T, e), !!g.keepAttr)) {
          if (!tt && A(/\/>/i, a)) {
            ue(T, e);
            continue;
          }
          q && (a = x(a, ye, " "), a = x(a, ge, " "), a = x(a, Ae, " "));
          var _t = y(e.nodeName);
          if (vt(_t, d, a)) {
            if (nt && (d === "id" || d === "name") && (ue(T, e), a = Vt + a), Re && A(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(T, e);
              continue;
            }
            if (D && W(z) === "object" && typeof z.getAttributeType == "function" && !ke)
              switch (z.getAttributeType(_t, d)) {
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
              ke ? e.setAttributeNS(ke, T, a) : e.setAttribute(T, a), mt(e) ? N(e) : St(r.removed);
            } catch {
            }
          }
        }
      }
      F("afterSanitizeAttributes", e, null);
    }
  }, er = function s(e) {
    var n, a = pt(e);
    for (F("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      F("uponSanitizeShadowNode", n, null), !dt(n) && (n.content instanceof f && s(n.content), Tt(n));
    F("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, d, L, b;
    if (Me = !s, Me && (s = "<!-->"), typeof s != "string" && !ee(s))
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
    if (Le || xe(e), r.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var g = y(s.nodeName);
        if (!_[g] || J[g])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof u)
      n = ft("<!---->"), a = n.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!V && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return D && oe ? D.createHTML(s) : s;
      if (n = ft(s), !n)
        return V ? null : oe ? _e : "";
    }
    n && Ne && N(n.firstChild);
    for (var B = pt(Q ? s : n); d = B.nextNode(); )
      d.nodeType === 3 && d === L || dt(d) || (d.content instanceof f && er(d.content), Tt(d), L = d);
    if (L = null, Q)
      return s;
    if (V) {
      if (ie)
        for (b = Wt.call(n.ownerDocument); n.firstChild; )
          b.appendChild(n.firstChild);
      else
        b = n;
      return (E.shadowroot || E.shadowrootmod) && (b = Gt.call(i, b, !0)), b;
    }
    var T = G ? n.outerHTML : n.innerHTML;
    return G && _["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && A(Ir, n.ownerDocument.doctype.name) && (T = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + T), q && (T = x(T, ye, " "), T = x(T, ge, " "), T = x(T, Ae, " ")), D && oe ? D.createHTML(T) : T;
  }, r.setConfig = function(s) {
    xe(s), Le = !0;
  }, r.clearConfig = function() {
    Z = null, Le = !1;
  }, r.isValidAttribute = function(s, e, n) {
    Z || xe({});
    var a = y(s), d = y(e);
    return vt(a, d, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (k[s] = k[s] || [], re(k[s], e));
  }, r.removeHook = function(s) {
    if (k[s])
      return St(k[s]);
  }, r.removeHooks = function(s) {
    k[s] && (k[s] = []);
  }, r.removeAllHooks = function() {
    k = {};
  }, r;
}
It();
c.shape({
  event: c.string,
  action: c.string,
  name: c.string,
  region: c.string,
  section: c.string,
  component: c.string,
  type: c.string,
  text: c.string
});
const Ur = ({
  event: t = "",
  action: r = "",
  name: i = "",
  type: o = "",
  section: f = "",
  text: l = "",
  region: u = "",
  component: m = ""
}) => {
  const { dataLayer: v } = window, S = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: i.toLowerCase(),
    type: o.toLowerCase(),
    region: u.toLowerCase(),
    section: f.toLowerCase(),
    text: l.toLowerCase(),
    component: m.toLowerCase()
  };
  v && v.push(S);
}, Hr = "staticMarkup";
function kt() {
  const r = tr().indexOf(Hr) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Wr = ({ gaData: t, prefix: r = "", children: i }) => {
  const { isReact: o } = kt(), { onClick: f, ...l } = i.props;
  if (o)
    return Be.cloneElement(i, {
      ...l,
      onClick: (v) => (Ur(t), f ? f(v) : !0)
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
  return Be.cloneElement(i, {
    ...l,
    onClick: f,
    ...m
  });
}, zr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ye = ({
  color: t,
  icon: r,
  innerRef: i,
  onClick: o,
  size: f,
  cardTitle: l,
  className: u,
  gaData: m,
  ...v
}) => {
  const S = () => {
    o == null || o();
  };
  return /* @__PURE__ */ U.jsx(
    Wr,
    {
      gaData: {
        ...zr,
        section: l,
        // @deprecated - remove at some point
        ...m,
        text: `${r == null ? void 0 : r[1]} icon`
      },
      children: /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${t} ${f === "large" && "btn-circle-large"} ${u}`,
          ref: i,
          "aria-label": "Close",
          onClick: S,
          ...v,
          children: /* @__PURE__ */ U.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
        }
      )
    }
  );
};
Ye.propTypes = {
  /**
    Color the button based on the background color
  */
  color: c.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: c.arrayOf(c.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: c.oneOfType([
    c.object,
    c.func,
    c.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: c.func,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: c.string,
  /**
   * Google Analytics event data
   */
  gaData: cr,
  /**
    Button size
  */
  size: c.oneOf(["large", "small"]),
  className: c.string
};
Ye.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
var Gr = /* @__PURE__ */ ((t) => (t.WARNING = "warning", t.INFO = "info", t.SUCCESS = "success", t.ERROR = "error", t))(Gr || {});
const jr = ({
  type: t,
  dismissable: r,
  children: i
}) => {
  var S, O, M;
  const { isBootstrap: o, isReact: f } = kt(), [l, u] = rr(!0), m = () => u(!1), v = {
    warning: {
      iconTitle: "Warning",
      iconName: "bell",
      alertClass: "warning"
    },
    info: {
      iconTitle: "Information",
      iconName: "info-circle",
      alertClass: "info"
    },
    success: {
      iconTitle: "Success",
      iconName: "check-circle",
      alertClass: "success"
    },
    error: {
      iconTitle: "Error",
      iconName: "exclamation-triangle",
      alertClass: "danger"
    }
  };
  return l && /* @__PURE__ */ U.jsxs(
    "div",
    {
      className: ir("alert", {
        "alert-dismissable": r,
        [`alert-${(S = v[t]) == null ? void 0 : S.alertClass}`]: t
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ U.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ U.jsx(
          "span",
          {
            title: (O = v[t]) == null ? void 0 : O.iconTitle,
            className: `fa fa-icon fa-${(M = v[t]) == null ? void 0 : M.iconName}`
          }
        ) }),
        /* @__PURE__ */ U.jsx("div", { className: "alert-content", children: i }),
        r && /* @__PURE__ */ U.jsx("div", { className: "alert-close", children: /* @__PURE__ */ U.jsx(
          Ye,
          {
            icon: ["fas", "times"],
            onClick: f && m,
            "data-bs-dismiss": o && "alert"
          }
        ) })
      ]
    }
  );
};
export {
  jr as SystemAlert,
  Gr as SystemAlertType
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
