import $e, { useId as Qt, useEffect as er } from "react";
function tr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ct = { exports: {} }, te = {};
var Et;
function rr() {
  if (Et) return te;
  Et = 1;
  var t = $e, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(v, m, R) {
    var L, U = {}, H = null, W = null;
    R !== void 0 && (H = "" + R), m.key !== void 0 && (H = "" + m.key), m.ref !== void 0 && (W = m.ref);
    for (L in m) i.call(m, L) && !d.hasOwnProperty(L) && (U[L] = m[L]);
    if (v && v.defaultProps) for (L in m = v.defaultProps, m) U[L] === void 0 && (U[L] = m[L]);
    return { $$typeof: r, type: v, key: H, ref: W, props: U, _owner: c.current };
  }
  return te.Fragment = o, te.jsx = f, te.jsxs = f, te;
}
Ct.exports = rr();
var C = Ct.exports, Mt = { exports: {} }, Pe, yt;
function nr() {
  if (yt) return Pe;
  yt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, gt;
function ar() {
  if (gt) return Fe;
  gt = 1;
  var t = nr();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Fe = function() {
    function i(f, v, m, R, L, U) {
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
Mt.exports = ar()();
var or = Mt.exports;
const l = /* @__PURE__ */ tr(or);
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
const ir = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
function B(t) {
  "@babel/helpers - typeof";
  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, B(t);
}
function je(t, r) {
  return je = Object.setPrototypeOf || function(i, c) {
    return i.__proto__ = c, i;
  }, je(t, r);
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
function me(t, r, o) {
  return sr() ? me = Reflect.construct : me = function(c, d, f) {
    var v = [null];
    v.push.apply(v, d);
    var m = Function.bind.apply(c, v), R = new m();
    return f && je(R, f.prototype), R;
  }, me.apply(null, arguments);
}
function x(t) {
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
function fr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pr = Object.hasOwnProperty, At = Object.setPrototypeOf, mr = Object.isFrozen, dr = Object.getPrototypeOf, vr = Object.getOwnPropertyDescriptor, S = Object.freeze, M = Object.seal, hr = Object.create, wt = typeof Reflect < "u" && Reflect, ve = wt.apply, Ye = wt.construct;
ve || (ve = function(r, o, i) {
  return r.apply(o, i);
});
S || (S = function(r) {
  return r;
});
M || (M = function(r) {
  return r;
});
Ye || (Ye = function(r, o) {
  return me(r, x(o));
});
var Tr = w(Array.prototype.forEach), bt = w(Array.prototype.pop), re = w(Array.prototype.push), de = w(String.prototype.toLowerCase), Ue = w(String.prototype.toString), St = w(String.prototype.match), I = w(String.prototype.replace), _r = w(String.prototype.indexOf), Er = w(String.prototype.trim), A = w(RegExp.prototype.test), He = yr(TypeError);
function w(t) {
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      i[c - 1] = arguments[c];
    return ve(t, r, i);
  };
}
function yr(t) {
  return function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return Ye(t, o);
  };
}
function u(t, r, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : de, At && At(t, null);
  for (var c = r.length; c--; ) {
    var d = r[c];
    if (typeof d == "string") {
      var f = o(d);
      f !== d && (mr(r) || (r[c] = f), d = f);
    }
    t[d] = !0;
  }
  return t;
}
function j(t) {
  var r = hr(null), o;
  for (o in t)
    ve(pr, t, [o]) === !0 && (r[o] = t[o]);
  return r;
}
function fe(t, r) {
  for (; t !== null; ) {
    var o = vr(t, r);
    if (o) {
      if (o.get)
        return w(o.get);
      if (typeof o.value == "function")
        return w(o.value);
    }
    t = dr(t);
  }
  function i(c) {
    return console.warn("fallback value for", c), null;
  }
  return i;
}
var Ot = S(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = S(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), We = S(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gr = S(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ze = S(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ar = S(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = S(["#text"]), Lt = S(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ge = S(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nt = S(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = S(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), br = M(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sr = M(/<%[\w\W]*|[\w\W]*%>/gm), Or = M(/\${[\w\W]*}/gm), Rr = M(/^data-[\-\w.\u00B7-\uFFFF]/), Lr = M(/^aria-[\-\w]+$/), Nr = M(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cr = M(/^(?:\w+script|data):/i), Mr = M(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), wr = M(/^html$/i), Dr = M(/^[a-z][.\w]*(-[.\w]+)+$/i), Ir = function() {
  return typeof window > "u" ? null : window;
}, xr = function(r, o) {
  if (B(r) !== "object" || typeof r.createPolicy != "function")
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
function Dt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ir(), r = function(e) {
    return Dt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var o = t.document, i = t.document, c = t.DocumentFragment, d = t.HTMLTemplateElement, f = t.Node, v = t.Element, m = t.NodeFilter, R = t.NamedNodeMap, L = R === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : R, U = t.HTMLFormElement, H = t.DOMParser, W = t.trustedTypes, ne = v.prototype, xt = fe(ne, "cloneNode"), kt = fe(ne, "nextSibling"), Pt = fe(ne, "childNodes"), he = fe(ne, "parentNode");
  if (typeof d == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var D = xr(W, o), _e = D ? D.createHTML("") : "", ae = i, Ee = ae.implementation, Ft = ae.createNodeIterator, Ut = ae.createDocumentFragment, Ht = ae.getElementsByTagName, Bt = o.importNode, Xe = {};
  try {
    Xe = j(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var k = {};
  r.isSupported = typeof he == "function" && Ee && Ee.createHTMLDocument !== void 0 && Xe !== 9;
  var ye = br, ge = Sr, Ae = Or, Wt = Rr, zt = Lr, Gt = Cr, Ke = Mr, $t = Dr, be = Nr, _ = null, Ze = u({}, [].concat(x(Ot), x(Be), x(We), x(ze), x(Rt))), E = null, Je = u({}, [].concat(x(Lt), x(Ge), x(Nt), x(pe))), h = Object.seal(Object.create(null, {
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
  })), J = null, Se = null, Qe = !0, Oe = !0, et = !1, tt = !0, q = !1, Re = !0, z = !1, Le = !1, Ne = !1, Y = !1, oe = !1, ie = !1, rt = !0, nt = !1, jt = "user-content-", Ce = !0, Q = !1, V = {}, X = null, at = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ot = null, it = u({}, ["audio", "video", "img", "source", "image", "track"]), Me = null, st = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", P = "http://www.w3.org/1999/xhtml", K = P, we = !1, De = null, qt = u({}, [se, le, P], Ue), G, Yt = ["application/xhtml+xml", "text/html"], Vt = "text/html", y, Z = null, Xt = i.createElement("form"), lt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ie = function(e) {
    Z && Z === e || ((!e || B(e) !== "object") && (e = {}), e = j(e), G = // eslint-disable-next-line unicorn/prefer-includes
    Yt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Vt : G = e.PARSER_MEDIA_TYPE, y = G === "application/xhtml+xml" ? Ue : de, _ = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, y) : Ze, E = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, y) : Je, De = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, Ue) : qt, Me = "ADD_URI_SAFE_ATTR" in e ? u(
      j(st),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : st, ot = "ADD_DATA_URI_TAGS" in e ? u(
      j(it),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : it, X = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, y) : at, J = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, y) : {}, Se = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, y) : {}, V = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Qe = e.ALLOW_ARIA_ATTR !== !1, Oe = e.ALLOW_DATA_ATTR !== !1, et = e.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Re = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, Y = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, rt = e.SANITIZE_DOM !== !1, nt = e.SANITIZE_NAMED_PROPS || !1, Ce = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, be = e.ALLOWED_URI_REGEXP || be, K = e.NAMESPACE || P, h = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (h.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (h.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (h.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Oe = !1), oe && (Y = !0), V && (_ = u({}, x(Rt)), E = [], V.html === !0 && (u(_, Ot), u(E, Lt)), V.svg === !0 && (u(_, Be), u(E, Ge), u(E, pe)), V.svgFilters === !0 && (u(_, We), u(E, Ge), u(E, pe)), V.mathMl === !0 && (u(_, ze), u(E, Nt), u(E, pe))), e.ADD_TAGS && (_ === Ze && (_ = j(_)), u(_, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Je && (E = j(E)), u(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && u(Me, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (X === at && (X = j(X)), u(X, e.FORBID_CONTENTS, y)), Ce && (_["#text"] = !0), z && u(_, ["html", "head", "body"]), _.table && (u(_, ["tbody"]), delete J.tbody), S && S(e), Z = e);
  }, ut = u({}, ["mi", "mo", "mn", "ms", "mtext"]), ct = u({}, ["annotation-xml"]), Kt = u({}, ["title", "style", "font", "a", "script"]), ue = u({}, Be);
  u(ue, We), u(ue, gr);
  var xe = u({}, ze);
  u(xe, Ar);
  var Zt = function(e) {
    var n = he(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), p = de(n.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === le ? n.namespaceURI === P ? a === "svg" : n.namespaceURI === se ? a === "svg" && (p === "annotation-xml" || ut[p]) : !!ue[a] : e.namespaceURI === se ? n.namespaceURI === P ? a === "math" : n.namespaceURI === le ? a === "math" && ct[p] : !!xe[a] : e.namespaceURI === P ? n.namespaceURI === le && !ct[p] || n.namespaceURI === se && !ut[p] ? !1 : !xe[a] && (Kt[a] || !ue[a]) : !!(G === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
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
    if (n.removeAttribute(e), e === "is" && !E[e])
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
  }, ft = function(e) {
    var n, a;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var p = St(e, /^[\r\n\t ]+/);
      a = p && p[0];
    }
    G === "application/xhtml+xml" && K === P && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var O = D ? D.createHTML(e) : e;
    if (K === P)
      try {
        n = new H().parseFromString(O, G);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Ee.createDocument(K, "template", null);
      try {
        n.documentElement.innerHTML = we ? _e : O;
      } catch {
      }
    }
    var b = n.body || n.documentElement;
    return e && a && b.insertBefore(i.createTextNode(a), b.childNodes[0] || null), K === P ? Ht.call(n, z ? "html" : "body")[0] : z ? n.documentElement : b;
  }, pt = function(e) {
    return Ft.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, mt = function(e) {
    return e instanceof U && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof L) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return B(f) === "object" ? e instanceof f : e && B(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, F = function(e, n, a) {
    k[e] && Tr(k[e], function(p) {
      p.call(r, n, a, Z);
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
        var p = he(e) || e.parentNode, O = Pt(e) || e.childNodes;
        if (O && p)
          for (var b = O.length, g = b - 1; g >= 0; --g) {
            var $ = xt(O[g], !0);
            $.__removalCount = (e.__removalCount || 0) + 1, p.insertBefore($, kt(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof v && !Zt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (q && e.nodeType === 3 && (n = e.textContent, n = I(n, ye, " "), n = I(n, ge, " "), n = I(n, Ae, " "), e.textContent !== n && (re(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), F("afterSanitizeElements", e, null), !1);
  }, vt = function(e, n, a) {
    if (rt && (n === "id" || n === "name") && (a in i || a in Xt))
      return !1;
    if (!(Oe && !Se[n] && A(Wt, n))) {
      if (!(Qe && A(zt, n))) {
        if (!E[n] || Se[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ht(e) && (h.tagNameCheck instanceof RegExp && A(h.tagNameCheck, e) || h.tagNameCheck instanceof Function && h.tagNameCheck(e)) && (h.attributeNameCheck instanceof RegExp && A(h.attributeNameCheck, n) || h.attributeNameCheck instanceof Function && h.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && h.allowCustomizedBuiltInElements && (h.tagNameCheck instanceof RegExp && A(h.tagNameCheck, a) || h.tagNameCheck instanceof Function && h.tagNameCheck(a)))
          ) return !1;
        } else if (!Me[n]) {
          if (!A(be, I(a, Ke, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && _r(a, "data:") === 0 && ot[e])) {
              if (!(et && !A(Gt, I(a, Ke, "")))) {
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
    return e !== "annotation-xml" && St(e, $t);
  }, Tt = function(e) {
    var n, a, p, O;
    F("beforeSanitizeAttributes", e, null);
    var b = e.attributes;
    if (b) {
      var g = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (O = b.length; O--; ) {
        n = b[O];
        var $ = n, T = $.name, ke = $.namespaceURI;
        if (a = T === "value" ? n.value : Er(n.value), p = y(T), g.attrName = p, g.attrValue = a, g.keepAttr = !0, g.forceKeepAttr = void 0, F("uponSanitizeAttribute", e, g), a = g.attrValue, !g.forceKeepAttr && (ce(T, e), !!g.keepAttr)) {
          if (!tt && A(/\/>/i, a)) {
            ce(T, e);
            continue;
          }
          q && (a = I(a, ye, " "), a = I(a, ge, " "), a = I(a, Ae, " "));
          var _t = y(e.nodeName);
          if (vt(_t, p, a)) {
            if (nt && (p === "id" || p === "name") && (ce(T, e), a = jt + a), Re && A(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(T, e);
              continue;
            }
            if (D && B(W) === "object" && typeof W.getAttributeType == "function" && !ke)
              switch (W.getAttributeType(_t, p)) {
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
              ke ? e.setAttributeNS(ke, T, a) : e.setAttribute(T, a), mt(e) ? N(e) : bt(r.removed);
            } catch {
            }
          }
        }
      }
      F("afterSanitizeAttributes", e, null);
    }
  }, Jt = function s(e) {
    var n, a = pt(e);
    for (F("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      F("uponSanitizeShadowNode", n, null), !dt(n) && (n.content instanceof c && s(n.content), Tt(n));
    F("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, p, O, b;
    if (we = !s, we && (s = "<!-->"), typeof s != "string" && !ee(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw He("dirty is not a string, aborting");
      } else
        throw He("toString is not a function");
    if (!r.isSupported) {
      if (B(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ee(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Le || Ie(e), r.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var g = y(s.nodeName);
        if (!_[g] || J[g])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof f)
      n = ft("<!---->"), a = n.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!Y && !q && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return D && ie ? D.createHTML(s) : s;
      if (n = ft(s), !n)
        return Y ? null : ie ? _e : "";
    }
    n && Ne && N(n.firstChild);
    for (var $ = pt(Q ? s : n); p = $.nextNode(); )
      p.nodeType === 3 && p === O || dt(p) || (p.content instanceof c && Jt(p.content), Tt(p), O = p);
    if (O = null, Q)
      return s;
    if (Y) {
      if (oe)
        for (b = Ut.call(n.ownerDocument); n.firstChild; )
          b.appendChild(n.firstChild);
      else
        b = n;
      return (E.shadowroot || E.shadowrootmod) && (b = Bt.call(o, b, !0)), b;
    }
    var T = z ? n.outerHTML : n.innerHTML;
    return z && _["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && A(wr, n.ownerDocument.doctype.name) && (T = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + T), q && (T = I(T, ye, " "), T = I(T, ge, " "), T = I(T, Ae, " ")), D && ie ? D.createHTML(T) : T;
  }, r.setConfig = function(s) {
    Ie(s), Le = !0;
  }, r.clearConfig = function() {
    Z = null, Le = !1;
  }, r.isValidAttribute = function(s, e, n) {
    Z || Ie({});
    var a = y(s), p = y(e);
    return vt(a, p, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (k[s] = k[s] || [], re(k[s], e));
  }, r.removeHook = function(s) {
    if (k[s])
      return bt(k[s]);
  }, r.removeHooks = function(s) {
    k[s] && (k[s] = []);
  }, r.removeAllHooks = function() {
    k = {};
  }, r;
}
Dt();
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
const kr = ({
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
}, Pr = "staticMarkup";
function Fr() {
  const r = Qt().indexOf(Pr) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const It = ({ gaData: t, prefix: r = "", children: o }) => {
  const { isReact: i } = Fr(), { onClick: c, ...d } = o.props;
  if (i)
    return $e.cloneElement(o, {
      ...d,
      onClick: (m) => (kr(t), c ? c(m) : !0)
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
}, Ur = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ve = ({
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
  return /* @__PURE__ */ C.jsx(
    It,
    {
      gaData: {
        ...Ur,
        section: d,
        // @deprecated - remove at some point
        ...v,
        text: `${r == null ? void 0 : r[1]} icon`
      },
      children: /* @__PURE__ */ C.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${t} ${c === "large" && "btn-circle-large"} ${f}`,
          ref: o,
          "aria-label": "Close",
          onClick: R,
          ...m,
          children: /* @__PURE__ */ C.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
        }
      )
    }
  );
};
Ve.propTypes = {
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
  gaData: ir,
  /**
    Button size
  */
  size: l.oneOf(["large", "small"]),
  className: l.string
};
Ve.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const Hr = {
  name: "onclick",
  event: "modal",
  action: "close",
  type: "click",
  region: "main content",
  section: "modal name/title",
  ga: "close cross"
}, zr = ({ gaData: t }) => (er(() => {
  document == null || document.getElementById("openModalButton").addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), document == null || document.getElementById("closeModalButton").addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}), /* @__PURE__ */ C.jsxs("div", { className: "container-fluid", children: [
  /* @__PURE__ */ C.jsx("button", { onClick: () => {
    document.getElementById("uds-modal").classList.add("open");
  }, id: "openModalButton", className: "btn btn-dark", children: "Show modal" }),
  /* @__PURE__ */ C.jsx("div", { id: "uds-modal", className: "uds-modal", children: /* @__PURE__ */ C.jsxs("div", { className: "uds-modal-container", children: [
    /* @__PURE__ */ C.jsx(
      It,
      {
        gaData: { ...Hr, ...t },
        children: /* @__PURE__ */ C.jsx(
          Ve,
          {
            id: "closeModalButton",
            className: "uds-modal-close-btn",
            icon: ["fas", "times"]
          }
        )
      }
    ),
    /* @__PURE__ */ C.jsx("h1", { children: "Content" }),
    /* @__PURE__ */ C.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididuntåç ut labore et dolore magna aliqua eiusmod tempo." }),
    /* @__PURE__ */ C.jsx("button", { className: "btn btn-primary", children: "button" })
  ] }) })
] }));
export {
  zr as Modal
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
