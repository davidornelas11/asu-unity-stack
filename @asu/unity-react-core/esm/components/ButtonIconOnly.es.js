import $e, { useId as Jt } from "react";
function Qt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, ee = {};
var _t;
function er() {
  if (_t) return ee;
  _t = 1;
  var t = $e, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(v, m, R) {
    var L, F = {}, U = null, W = null;
    R !== void 0 && (U = "" + R), m.key !== void 0 && (U = "" + m.key), m.ref !== void 0 && (W = m.ref);
    for (L in m) i.call(m, L) && !d.hasOwnProperty(L) && (F[L] = m[L]);
    if (v && v.defaultProps) for (L in m = v.defaultProps, m) F[L] === void 0 && (F[L] = m[L]);
    return { $$typeof: r, type: v, key: U, ref: W, props: F, _owner: c.current };
  }
  return ee.Fragment = o, ee.jsx = f, ee.jsxs = f, ee;
}
Nt.exports = er();
var ke = Nt.exports, wt = { exports: {} }, Pe, Et;
function tr() {
  if (Et) return Pe;
  Et = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, yt;
function rr() {
  if (yt) return Fe;
  yt = 1;
  var t = tr();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Fe = function() {
    function i(f, v, m, R, L, F) {
      if (F !== t) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
      }
    }
    i.isRequired = i;
    function c() {
      return i;
    }
    var d = {
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
      checkPropTypes: o,
      resetWarningCache: r
    };
    return d.PropTypes = d, d;
  }, Fe;
}
wt.exports = rr()();
var nr = wt.exports;
const l = /* @__PURE__ */ Qt(nr);
l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
});
l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
});
l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
});
const ar = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
function H(t) {
  "@babel/helpers - typeof";
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, H(t);
}
function je(t, r) {
  return je = Object.setPrototypeOf || function(i, c) {
    return i.__proto__ = c, i;
  }, je(t, r);
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
function pe(t, r, o) {
  return or() ? pe = Reflect.construct : pe = function(c, d, f) {
    var v = [null];
    v.push.apply(v, d);
    var m = Function.bind.apply(c, v), R = new m();
    return f && je(R, f.prototype), R;
  }, pe.apply(null, arguments);
}
function I(t) {
  return ir(t) || sr(t) || lr(t) || ur();
}
function ir(t) {
  if (Array.isArray(t)) return qe(t);
}
function sr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function lr(t, r) {
  if (t) {
    if (typeof t == "string") return qe(t, r);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return qe(t, r);
  }
}
function qe(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
  return i;
}
function ur() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cr = Object.hasOwnProperty, gt = Object.setPrototypeOf, fr = Object.isFrozen, pr = Object.getPrototypeOf, mr = Object.getOwnPropertyDescriptor, b = Object.freeze, w = Object.seal, dr = Object.create, Ct = typeof Reflect < "u" && Reflect, de = Ct.apply, Ye = Ct.construct;
de || (de = function(r, o, i) {
  return r.apply(o, i);
});
b || (b = function(r) {
  return r;
});
w || (w = function(r) {
  return r;
});
Ye || (Ye = function(r, o) {
  return pe(r, I(o));
});
var vr = C(Array.prototype.forEach), At = C(Array.prototype.pop), te = C(Array.prototype.push), me = C(String.prototype.toLowerCase), Ue = C(String.prototype.toString), St = C(String.prototype.match), D = C(String.prototype.replace), Tr = C(String.prototype.indexOf), hr = C(String.prototype.trim), A = C(RegExp.prototype.test), He = _r(TypeError);
function C(t) {
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      i[c - 1] = arguments[c];
    return de(t, r, i);
  };
}
function _r(t) {
  return function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return Ye(t, o);
  };
}
function u(t, r, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : me, gt && gt(t, null);
  for (var c = r.length; c--; ) {
    var d = r[c];
    if (typeof d == "string") {
      var f = o(d);
      f !== d && (fr(r) || (r[c] = f), d = f);
    }
    t[d] = !0;
  }
  return t;
}
function $(t) {
  var r = dr(null), o;
  for (o in t)
    de(cr, t, [o]) === !0 && (r[o] = t[o]);
  return r;
}
function ce(t, r) {
  for (; t !== null; ) {
    var o = mr(t, r);
    if (o) {
      if (o.get)
        return C(o.get);
      if (typeof o.value == "function")
        return C(o.value);
    }
    t = pr(t);
  }
  function i(c) {
    return console.warn("fallback value for", c), null;
  }
  return i;
}
var bt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Er = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), yr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ot = b(["#text"]), Rt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Be = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gr = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ar = w(/<%[\w\W]*|[\w\W]*%>/gm), Sr = w(/\${[\w\W]*}/gm), br = w(/^data-[\-\w.\u00B7-\uFFFF]/), Or = w(/^aria-[\-\w]+$/), Rr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Lr = w(/^(?:\w+script|data):/i), Nr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), wr = w(/^html$/i), Cr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Mr = function() {
  return typeof window > "u" ? null : window;
}, Dr = function(r, o) {
  if (H(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var i = null, c = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(c) && (i = o.currentScript.getAttribute(c));
  var d = "dompurify" + (i ? "#" + i : "");
  try {
    return r.createPolicy(d, {
      createHTML: function(v) {
        return v;
      },
      createScriptURL: function(v) {
        return v;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + d + " could not be created."), null;
  }
};
function Mt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mr(), r = function(e) {
    return Mt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var o = t.document, i = t.document, c = t.DocumentFragment, d = t.HTMLTemplateElement, f = t.Node, v = t.Element, m = t.NodeFilter, R = t.NamedNodeMap, L = R === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : R, F = t.HTMLFormElement, U = t.DOMParser, W = t.trustedTypes, re = v.prototype, It = ce(re, "cloneNode"), xt = ce(re, "nextSibling"), kt = ce(re, "childNodes"), ve = ce(re, "parentNode");
  if (typeof d == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var M = Dr(W, o), he = M ? M.createHTML("") : "", ne = i, _e = ne.implementation, Pt = ne.createNodeIterator, Ft = ne.createDocumentFragment, Ut = ne.getElementsByTagName, Ht = o.importNode, Ve = {};
  try {
    Ve = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var x = {};
  r.isSupported = typeof ve == "function" && _e && _e.createHTMLDocument !== void 0 && Ve !== 9;
  var Ee = gr, ye = Ar, ge = Sr, Wt = br, zt = Or, Gt = Lr, Xe = Nr, Bt = Cr, Ae = Rr, _ = null, Ke = u({}, [].concat(I(bt), I(We), I(ze), I(Ge), I(Ot))), E = null, Ze = u({}, [].concat(I(Rt), I(Be), I(Lt), I(fe))), T = Object.seal(Object.create(null, {
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
  })), Z = null, Se = null, Je = !0, be = !0, Qe = !1, et = !0, j = !1, Oe = !0, z = !1, Re = !1, Le = !1, q = !1, ae = !1, oe = !1, tt = !0, rt = !1, $t = "user-content-", Ne = !0, J = !1, Y = {}, V = null, nt = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), at = null, ot = u({}, ["audio", "video", "img", "source", "image", "track"]), we = null, it = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ie = "http://www.w3.org/1998/Math/MathML", se = "http://www.w3.org/2000/svg", k = "http://www.w3.org/1999/xhtml", X = k, Ce = !1, Me = null, jt = u({}, [ie, se, k], Ue), G, qt = ["application/xhtml+xml", "text/html"], Yt = "text/html", y, K = null, Vt = i.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, De = function(e) {
    K && K === e || ((!e || H(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    qt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Yt : G = e.PARSER_MEDIA_TYPE, y = G === "application/xhtml+xml" ? Ue : me, _ = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, y) : Ke, E = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, y) : Ze, Me = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, Ue) : jt, we = "ADD_URI_SAFE_ATTR" in e ? u(
      $(it),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : it, at = "ADD_DATA_URI_TAGS" in e ? u(
      $(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : ot, V = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, y) : nt, Z = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, y) : {}, Se = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, y) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, be = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, j = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, q = e.RETURN_DOM || !1, ae = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Le = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, Ne = e.KEEP_CONTENT !== !1, J = e.IN_PLACE || !1, Ae = e.ALLOWED_URI_REGEXP || Ae, X = e.NAMESPACE || k, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), j && (be = !1), ae && (q = !0), Y && (_ = u({}, I(Ot)), E = [], Y.html === !0 && (u(_, bt), u(E, Rt)), Y.svg === !0 && (u(_, We), u(E, Be), u(E, fe)), Y.svgFilters === !0 && (u(_, ze), u(E, Be), u(E, fe)), Y.mathMl === !0 && (u(_, Ge), u(E, Lt), u(E, fe))), e.ADD_TAGS && (_ === Ke && (_ = $(_)), u(_, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Ze && (E = $(E)), u(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && u(we, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (V === nt && (V = $(V)), u(V, e.FORBID_CONTENTS, y)), Ne && (_["#text"] = !0), z && u(_, ["html", "head", "body"]), _.table && (u(_, ["tbody"]), delete Z.tbody), b && b(e), K = e);
  }, lt = u({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = u({}, ["annotation-xml"]), Xt = u({}, ["title", "style", "font", "a", "script"]), le = u({}, We);
  u(le, ze), u(le, Er);
  var Ie = u({}, Ge);
  u(Ie, yr);
  var Kt = function(e) {
    var n = ve(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: X,
      tagName: "template"
    });
    var a = me(e.tagName), p = me(n.tagName);
    return Me[e.namespaceURI] ? e.namespaceURI === se ? n.namespaceURI === k ? a === "svg" : n.namespaceURI === ie ? a === "svg" && (p === "annotation-xml" || lt[p]) : !!le[a] : e.namespaceURI === ie ? n.namespaceURI === k ? a === "math" : n.namespaceURI === se ? a === "math" && ut[p] : !!Ie[a] : e.namespaceURI === k ? n.namespaceURI === se && !ut[p] || n.namespaceURI === ie && !lt[p] ? !1 : !Ie[a] && (Xt[a] || !le[a]) : !!(G === "application/xhtml+xml" && Me[e.namespaceURI]) : !1;
  }, N = function(e) {
    te(r.removed, {
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
  }, ue = function(e, n) {
    try {
      te(r.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      te(r.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is" && !E[e])
      if (q || ae)
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
    var n, a;
    if (Le)
      e = "<remove></remove>" + e;
    else {
      var p = St(e, /^[\r\n\t ]+/);
      a = p && p[0];
    }
    G === "application/xhtml+xml" && X === k && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var O = M ? M.createHTML(e) : e;
    if (X === k)
      try {
        n = new U().parseFromString(O, G);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = _e.createDocument(X, "template", null);
      try {
        n.documentElement.innerHTML = Ce ? he : O;
      } catch {
      }
    }
    var S = n.body || n.documentElement;
    return e && a && S.insertBefore(i.createTextNode(a), S.childNodes[0] || null), X === k ? Ut.call(n, z ? "html" : "body")[0] : z ? n.documentElement : S;
  }, ft = function(e) {
    return Pt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof F && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof L) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Q = function(e) {
    return H(f) === "object" ? e instanceof f : e && H(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, P = function(e, n, a) {
    x[e] && vr(x[e], function(p) {
      p.call(r, n, a, K);
    });
  }, mt = function(e) {
    var n;
    if (P("beforeSanitizeElements", e, null), pt(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = y(e.nodeName);
    if (P("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: _
    }), e.hasChildNodes() && !Q(e.firstElementChild) && (!Q(e.content) || !Q(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || a === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!_[a] || Z[a]) {
      if (!Z[a] && vt(a) && (T.tagNameCheck instanceof RegExp && A(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
        return !1;
      if (Ne && !V[a]) {
        var p = ve(e) || e.parentNode, O = kt(e) || e.childNodes;
        if (O && p)
          for (var S = O.length, g = S - 1; g >= 0; --g) {
            var B = It(O[g], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, p.insertBefore(B, xt(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof v && !Kt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (j && e.nodeType === 3 && (n = e.textContent, n = D(n, Ee, " "), n = D(n, ye, " "), n = D(n, ge, " "), e.textContent !== n && (te(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), P("afterSanitizeElements", e, null), !1);
  }, dt = function(e, n, a) {
    if (tt && (n === "id" || n === "name") && (a in i || a in Vt))
      return !1;
    if (!(be && !Se[n] && A(Wt, n))) {
      if (!(Je && A(zt, n))) {
        if (!E[n] || Se[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vt(e) && (T.tagNameCheck instanceof RegExp && A(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && A(T.attributeNameCheck, n) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && A(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
          ) return !1;
        } else if (!we[n]) {
          if (!A(Ae, D(a, Xe, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && Tr(a, "data:") === 0 && at[e])) {
              if (!(Qe && !A(Gt, D(a, Xe, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vt = function(e) {
    return e !== "annotation-xml" && St(e, Bt);
  }, Tt = function(e) {
    var n, a, p, O;
    P("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var g = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (O = S.length; O--; ) {
        n = S[O];
        var B = n, h = B.name, xe = B.namespaceURI;
        if (a = h === "value" ? n.value : hr(n.value), p = y(h), g.attrName = p, g.attrValue = a, g.keepAttr = !0, g.forceKeepAttr = void 0, P("uponSanitizeAttribute", e, g), a = g.attrValue, !g.forceKeepAttr && (ue(h, e), !!g.keepAttr)) {
          if (!et && A(/\/>/i, a)) {
            ue(h, e);
            continue;
          }
          j && (a = D(a, Ee, " "), a = D(a, ye, " "), a = D(a, ge, " "));
          var ht = y(e.nodeName);
          if (dt(ht, p, a)) {
            if (rt && (p === "id" || p === "name") && (ue(h, e), a = $t + a), Oe && A(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(h, e);
              continue;
            }
            if (M && H(W) === "object" && typeof W.getAttributeType == "function" && !xe)
              switch (W.getAttributeType(ht, p)) {
                case "TrustedHTML": {
                  a = M.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = M.createScriptURL(a);
                  break;
                }
              }
            try {
              xe ? e.setAttributeNS(xe, h, a) : e.setAttribute(h, a), pt(e) ? N(e) : At(r.removed);
            } catch {
            }
          }
        }
      }
      P("afterSanitizeAttributes", e, null);
    }
  }, Zt = function s(e) {
    var n, a = ft(e);
    for (P("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      P("uponSanitizeShadowNode", n, null), !mt(n) && (n.content instanceof c && s(n.content), Tt(n));
    P("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, p, O, S;
    if (Ce = !s, Ce && (s = "<!-->"), typeof s != "string" && !Q(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw He("dirty is not a string, aborting");
      } else
        throw He("toString is not a function");
    if (!r.isSupported) {
      if (H(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (Q(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Re || De(e), r.removed = [], typeof s == "string" && (J = !1), J) {
      if (s.nodeName) {
        var g = y(s.nodeName);
        if (!_[g] || Z[g])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof f)
      n = ct("<!---->"), a = n.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!q && !j && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return M && oe ? M.createHTML(s) : s;
      if (n = ct(s), !n)
        return q ? null : oe ? he : "";
    }
    n && Le && N(n.firstChild);
    for (var B = ft(J ? s : n); p = B.nextNode(); )
      p.nodeType === 3 && p === O || mt(p) || (p.content instanceof c && Zt(p.content), Tt(p), O = p);
    if (O = null, J)
      return s;
    if (q) {
      if (ae)
        for (S = Ft.call(n.ownerDocument); n.firstChild; )
          S.appendChild(n.firstChild);
      else
        S = n;
      return (E.shadowroot || E.shadowrootmod) && (S = Ht.call(o, S, !0)), S;
    }
    var h = z ? n.outerHTML : n.innerHTML;
    return z && _["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && A(wr, n.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + h), j && (h = D(h, Ee, " "), h = D(h, ye, " "), h = D(h, ge, " ")), M && oe ? M.createHTML(h) : h;
  }, r.setConfig = function(s) {
    De(s), Re = !0;
  }, r.clearConfig = function() {
    K = null, Re = !1;
  }, r.isValidAttribute = function(s, e, n) {
    K || De({});
    var a = y(s), p = y(e);
    return dt(a, p, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (x[s] = x[s] || [], te(x[s], e));
  }, r.removeHook = function(s) {
    if (x[s])
      return At(x[s]);
  }, r.removeHooks = function(s) {
    x[s] && (x[s] = []);
  }, r.removeAllHooks = function() {
    x = {};
  }, r;
}
Mt();
l.shape({
  event: l.string,
  action: l.string,
  name: l.string,
  region: l.string,
  section: l.string,
  component: l.string,
  type: l.string,
  text: l.string
});
const Ir = ({
  event: t = "",
  action: r = "",
  name: o = "",
  type: i = "",
  section: c = "",
  text: d = "",
  region: f = "",
  component: v = ""
}) => {
  const { dataLayer: m } = window, R = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: f.toLowerCase(),
    section: c.toLowerCase(),
    text: d.toLowerCase(),
    component: v.toLowerCase()
  };
  m && m.push(R);
}, xr = "staticMarkup";
function kr() {
  const r = Jt().indexOf(xr) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Pr = ({ gaData: t, prefix: r = "", children: o }) => {
  const { isReact: i } = kr(), { onClick: c, ...d } = o.props;
  if (i)
    return $e.cloneElement(o, {
      ...d,
      onClick: (m) => (Ir(t), c ? c(m) : !0)
    });
  let f = "";
  ["input", "header", "header-input"].includes(r) && (f = `-${r}`);
  const v = {
    [`data-ga${f}`]: t.text,
    [`data-ga${f}-name`]: t.name,
    [`data-ga${f}-event`]: t.event,
    [`data-ga${f}-action`]: t.action,
    [`data-ga${f}-type`]: t.type,
    [`data-ga${f}-region`]: t.region,
    [`data-ga${f}-section`]: t.section,
    [`data-ga${f}-component`]: t.component
  };
  return $e.cloneElement(o, {
    ...d,
    onClick: c,
    ...v
  });
}, Fr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Dt = ({
  color: t,
  icon: r,
  innerRef: o,
  onClick: i,
  size: c,
  cardTitle: d,
  className: f,
  gaData: v,
  ...m
}) => {
  const R = () => {
    i == null || i();
  };
  return /* @__PURE__ */ ke.jsx(
    Pr,
    {
      gaData: {
        ...Fr,
        section: d,
        // @deprecated - remove at some point
        ...v,
        text: `${r == null ? void 0 : r[1]} icon`
      },
      children: /* @__PURE__ */ ke.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${t} ${c === "large" && "btn-circle-large"} ${f}`,
          ref: o,
          "aria-label": "Close",
          onClick: R,
          ...m,
          children: /* @__PURE__ */ ke.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
        }
      )
    }
  );
};
Dt.propTypes = {
  /**
    Color the button based on the background color
  */
  color: l.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: ar,
  /**
    Button size
  */
  size: l.oneOf(["large", "small"]),
  className: l.string
};
Dt.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
export {
  Dt as ButtonIconOnly
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
