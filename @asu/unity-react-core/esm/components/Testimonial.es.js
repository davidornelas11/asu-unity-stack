import er from "react";
function wt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xt = { exports: {} }, ie = {};
var gt;
function tr() {
  if (gt) return ie;
  gt = 1;
  var t = er, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(d, h, M) {
    var R, D = {}, I = null, U = null;
    M !== void 0 && (I = "" + M), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (R in h) o.call(h, R) && !l.hasOwnProperty(R) && (D[R] = h[R]);
    if (d && d.defaultProps) for (R in h = d.defaultProps, h) D[R] === void 0 && (D[R] = h[R]);
    return { $$typeof: n, type: d, key: I, ref: U, props: D, _owner: f.current };
  }
  return ie.Fragment = i, ie.jsx = p, ie.jsxs = p, ie;
}
xt.exports = tr();
var v = xt.exports, Ct = { exports: {} }, ze, At;
function rr() {
  if (At) return ze;
  At = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ze = t, ze;
}
var We, St;
function nr() {
  if (St) return We;
  St = 1;
  var t = rr();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, We = function() {
    function o(p, d, h, M, R, D) {
      if (D !== t) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
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
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, We;
}
Ct.exports = nr()();
var ar = Ct.exports;
const c = /* @__PURE__ */ wt(ar), _e = (t) => (t || []).join(" ");
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function Ye(t, n) {
  return Ye = Object.setPrototypeOf || function(o, f) {
    return o.__proto__ = f, o;
  }, Ye(t, n);
}
function ir() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ye(t, n, i) {
  return ir() ? ye = Reflect.construct : ye = function(f, l, p) {
    var d = [null];
    d.push.apply(d, l);
    var h = Function.bind.apply(f, d), M = new h();
    return p && Ye(M, p.prototype), M;
  }, ye.apply(null, arguments);
}
function k(t) {
  return or(t) || sr(t) || lr(t) || ur();
}
function or(t) {
  if (Array.isArray(t)) return Xe(t);
}
function sr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function lr(t, n) {
  if (t) {
    if (typeof t == "string") return Xe(t, n);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Xe(t, n);
  }
}
function Xe(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var i = 0, o = new Array(n); i < n; i++) o[i] = t[i];
  return o;
}
function ur() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cr = Object.hasOwnProperty, bt = Object.setPrototypeOf, fr = Object.isFrozen, pr = Object.getPrototypeOf, mr = Object.getOwnPropertyDescriptor, O = Object.freeze, x = Object.seal, dr = Object.create, It = typeof Reflect < "u" && Reflect, ge = It.apply, Ze = It.construct;
ge || (ge = function(n, i, o) {
  return n.apply(i, o);
});
O || (O = function(n) {
  return n;
});
x || (x = function(n) {
  return n;
});
Ze || (Ze = function(n, i) {
  return ye(n, k(i));
});
var hr = C(Array.prototype.forEach), Ot = C(Array.prototype.pop), oe = C(Array.prototype.push), Ee = C(String.prototype.toLowerCase), je = C(String.prototype.toString), Rt = C(String.prototype.match), P = C(String.prototype.replace), vr = C(String.prototype.indexOf), Tr = C(String.prototype.trim), S = C(RegExp.prototype.test), Ge = _r(TypeError);
function C(t) {
  return function(n) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
      o[f - 1] = arguments[f];
    return ge(t, n, o);
  };
}
function _r(t) {
  return function() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return Ze(t, i);
  };
}
function u(t, n, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : Ee, bt && bt(t, null);
  for (var f = n.length; f--; ) {
    var l = n[f];
    if (typeof l == "string") {
      var p = i(l);
      p !== l && (fr(n) || (n[f] = p), l = p);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var n = dr(null), i;
  for (i in t)
    ge(cr, t, [i]) === !0 && (n[i] = t[i]);
  return n;
}
function ve(t, n) {
  for (; t !== null; ) {
    var i = mr(t, n);
    if (i) {
      if (i.get)
        return C(i.get);
      if (typeof i.value == "function")
        return C(i.value);
    }
    t = pr(t);
  }
  function o(f) {
    return console.warn("fallback value for", f), null;
  }
  return o;
}
var Nt = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $e = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yr = O(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), qe = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Er = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Lt = O(["#text"]), Mt = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ve = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dt = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Te = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gr = x(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ar = x(/<%[\w\W]*|[\w\W]*%>/gm), Sr = x(/\${[\w\W]*}/gm), br = x(/^data-[\-\w.\u00B7-\uFFFF]/), Or = x(/^aria-[\-\w]+$/), Rr = x(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Nr = x(/^(?:\w+script|data):/i), Lr = x(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Mr = x(/^html$/i), Dr = x(/^[a-z][.\w]*(-[.\w]+)+$/i), wr = function() {
  return typeof window > "u" ? null : window;
}, xr = function(n, i) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var o = null, f = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(f) && (o = i.currentScript.getAttribute(f));
  var l = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(l, {
      createHTML: function(d) {
        return d;
      },
      createScriptURL: function(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function Pt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wr(), n = function(e) {
    return Pt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var i = t.document, o = t.document, f = t.DocumentFragment, l = t.HTMLTemplateElement, p = t.Node, d = t.Element, h = t.NodeFilter, M = t.NamedNodeMap, R = M === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : M, D = t.HTMLFormElement, I = t.DOMParser, U = t.trustedTypes, q = d.prototype, V = ve(q, "cloneNode"), se = ve(q, "nextSibling"), le = ve(q, "childNodes"), te = ve(q, "parentNode");
  if (typeof l == "function") {
    var Y = o.createElement("template");
    Y.content && Y.content.ownerDocument && (o = Y.content.ownerDocument);
  }
  var N = xr(U, i), Ae = N ? N.createHTML("") : "", ue = o, Se = ue.implementation, Ut = ue.createNodeIterator, Ht = ue.createDocumentFragment, zt = ue.getElementsByTagName, Wt = i.importNode, Ke = {};
  try {
    Ke = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var F = {};
  n.isSupported = typeof te == "function" && Se && Se.createHTMLDocument !== void 0 && Ke !== 9;
  var be = gr, Oe = Ar, Re = Sr, jt = br, Gt = Or, Bt = Nr, Je = Lr, $t = Dr, Ne = Rr, y = null, Qe = u({}, [].concat(k(Nt), k(Be), k($e), k(qe), k(Lt))), E = null, et = u({}, [].concat(k(Mt), k(Ve), k(Dt), k(Te))), T = Object.seal(Object.create(null, {
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
  })), re = null, Le = null, tt = !0, Me = !0, rt = !1, nt = !0, X = !1, De = !0, j = !1, we = !1, xe = !1, Z = !1, ce = !1, fe = !1, at = !0, it = !1, qt = "user-content-", Ce = !0, ne = !1, K = {}, J = null, ot = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), st = null, lt = u({}, ["audio", "video", "img", "source", "image", "track"]), Ie = null, ut = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pe = "http://www.w3.org/1998/Math/MathML", me = "http://www.w3.org/2000/svg", H = "http://www.w3.org/1999/xhtml", Q = H, Pe = !1, ke = null, Vt = u({}, [pe, me, H], je), G, Yt = ["application/xhtml+xml", "text/html"], Xt = "text/html", g, ee = null, Zt = o.createElement("form"), ct = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Fe = function(e) {
    ee && ee === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    Yt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Xt : G = e.PARSER_MEDIA_TYPE, g = G === "application/xhtml+xml" ? je : Ee, y = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, g) : Qe, E = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, g) : et, ke = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, je) : Vt, Ie = "ADD_URI_SAFE_ATTR" in e ? u(
      $(ut),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      g
      // eslint-disable-line indent
    ) : ut, st = "ADD_DATA_URI_TAGS" in e ? u(
      $(lt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      g
      // eslint-disable-line indent
    ) : lt, J = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, g) : ot, re = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, g) : {}, Le = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, g) : {}, K = "USE_PROFILES" in e ? e.USE_PROFILES : !1, tt = e.ALLOW_ARIA_ATTR !== !1, Me = e.ALLOW_DATA_ATTR !== !1, rt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, nt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = e.SAFE_FOR_TEMPLATES || !1, De = e.SAFE_FOR_XML !== !1, j = e.WHOLE_DOCUMENT || !1, Z = e.RETURN_DOM || !1, ce = e.RETURN_DOM_FRAGMENT || !1, fe = e.RETURN_TRUSTED_TYPE || !1, xe = e.FORCE_BODY || !1, at = e.SANITIZE_DOM !== !1, it = e.SANITIZE_NAMED_PROPS || !1, Ce = e.KEEP_CONTENT !== !1, ne = e.IN_PLACE || !1, Ne = e.ALLOWED_URI_REGEXP || Ne, Q = e.NAMESPACE || H, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), X && (Me = !1), ce && (Z = !0), K && (y = u({}, k(Lt)), E = [], K.html === !0 && (u(y, Nt), u(E, Mt)), K.svg === !0 && (u(y, Be), u(E, Ve), u(E, Te)), K.svgFilters === !0 && (u(y, $e), u(E, Ve), u(E, Te)), K.mathMl === !0 && (u(y, qe), u(E, Dt), u(E, Te))), e.ADD_TAGS && (y === Qe && (y = $(y)), u(y, e.ADD_TAGS, g)), e.ADD_ATTR && (E === et && (E = $(E)), u(E, e.ADD_ATTR, g)), e.ADD_URI_SAFE_ATTR && u(Ie, e.ADD_URI_SAFE_ATTR, g), e.FORBID_CONTENTS && (J === ot && (J = $(J)), u(J, e.FORBID_CONTENTS, g)), Ce && (y["#text"] = !0), j && u(y, ["html", "head", "body"]), y.table && (u(y, ["tbody"]), delete re.tbody), O && O(e), ee = e);
  }, ft = u({}, ["mi", "mo", "mn", "ms", "mtext"]), pt = u({}, ["annotation-xml"]), Kt = u({}, ["title", "style", "font", "a", "script"]), de = u({}, Be);
  u(de, $e), u(de, yr);
  var Ue = u({}, qe);
  u(Ue, Er);
  var Jt = function(e) {
    var r = te(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: Q,
      tagName: "template"
    });
    var a = Ee(e.tagName), m = Ee(r.tagName);
    return ke[e.namespaceURI] ? e.namespaceURI === me ? r.namespaceURI === H ? a === "svg" : r.namespaceURI === pe ? a === "svg" && (m === "annotation-xml" || ft[m]) : !!de[a] : e.namespaceURI === pe ? r.namespaceURI === H ? a === "math" : r.namespaceURI === me ? a === "math" && pt[m] : !!Ue[a] : e.namespaceURI === H ? r.namespaceURI === me && !pt[m] || r.namespaceURI === pe && !ft[m] ? !1 : !Ue[a] && (Kt[a] || !de[a]) : !!(G === "application/xhtml+xml" && ke[e.namespaceURI]) : !1;
  }, w = function(e) {
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
    if (r.removeAttribute(e), e === "is" && !E[e])
      if (Z || ce)
        try {
          w(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, mt = function(e) {
    var r, a;
    if (xe)
      e = "<remove></remove>" + e;
    else {
      var m = Rt(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    G === "application/xhtml+xml" && Q === H && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = N ? N.createHTML(e) : e;
    if (Q === H)
      try {
        r = new I().parseFromString(L, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Se.createDocument(Q, "template", null);
      try {
        r.documentElement.innerHTML = Pe ? Ae : L;
      } catch {
      }
    }
    var b = r.body || r.documentElement;
    return e && a && b.insertBefore(o.createTextNode(a), b.childNodes[0] || null), Q === H ? zt.call(r, j ? "html" : "body")[0] : j ? r.documentElement : b;
  }, dt = function(e) {
    return Ut.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ht = function(e) {
    return e instanceof D && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof R) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ae = function(e) {
    return W(p) === "object" ? e instanceof p : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, z = function(e, r, a) {
    F[e] && hr(F[e], function(m) {
      m.call(n, r, a, ee);
    });
  }, vt = function(e) {
    var r;
    if (z("beforeSanitizeElements", e, null), ht(e) || S(/[\u0080-\uFFFF]/, e.nodeName))
      return w(e), !0;
    var a = g(e.nodeName);
    if (z("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: y
    }), e.hasChildNodes() && !ae(e.firstElementChild) && (!ae(e.content) || !ae(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent) || a === "select" && S(/<template/i, e.innerHTML) || e.nodeType === 7 || De && e.nodeType === 8 && S(/<[/\w]/g, e.data))
      return w(e), !0;
    if (!y[a] || re[a]) {
      if (!re[a] && _t(a) && (T.tagNameCheck instanceof RegExp && S(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
        return !1;
      if (Ce && !J[a]) {
        var m = te(e) || e.parentNode, L = le(e) || e.childNodes;
        if (L && m)
          for (var b = L.length, A = b - 1; A >= 0; --A) {
            var B = V(L[A], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(B, se(e));
          }
      }
      return w(e), !0;
    }
    return e instanceof d && !Jt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && S(/<\/no(script|embed|frames)/i, e.innerHTML) ? (w(e), !0) : (X && e.nodeType === 3 && (r = e.textContent, r = P(r, be, " "), r = P(r, Oe, " "), r = P(r, Re, " "), e.textContent !== r && (oe(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), z("afterSanitizeElements", e, null), !1);
  }, Tt = function(e, r, a) {
    if (at && (r === "id" || r === "name") && (a in o || a in Zt))
      return !1;
    if (!(Me && !Le[r] && S(jt, r))) {
      if (!(tt && S(Gt, r))) {
        if (!E[r] || Le[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(_t(e) && (T.tagNameCheck instanceof RegExp && S(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && S(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && S(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
          ) return !1;
        } else if (!Ie[r]) {
          if (!S(Ne, P(a, Je, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && vr(a, "data:") === 0 && st[e])) {
              if (!(rt && !S(Bt, P(a, Je, "")))) {
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
    return e !== "annotation-xml" && Rt(e, $t);
  }, yt = function(e) {
    var r, a, m, L;
    z("beforeSanitizeAttributes", e, null);
    var b = e.attributes;
    if (b) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (L = b.length; L--; ) {
        r = b[L];
        var B = r, _ = B.name, He = B.namespaceURI;
        if (a = _ === "value" ? r.value : Tr(r.value), m = g(_), A.attrName = m, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, z("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (he(_, e), !!A.keepAttr)) {
          if (!nt && S(/\/>/i, a)) {
            he(_, e);
            continue;
          }
          X && (a = P(a, be, " "), a = P(a, Oe, " "), a = P(a, Re, " "));
          var Et = g(e.nodeName);
          if (Tt(Et, m, a)) {
            if (it && (m === "id" || m === "name") && (he(_, e), a = qt + a), De && S(/((--!?|])>)|<\/(style|title)/i, a)) {
              he(_, e);
              continue;
            }
            if (N && W(U) === "object" && typeof U.getAttributeType == "function" && !He)
              switch (U.getAttributeType(Et, m)) {
                case "TrustedHTML": {
                  a = N.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = N.createScriptURL(a);
                  break;
                }
              }
            try {
              He ? e.setAttributeNS(He, _, a) : e.setAttribute(_, a), ht(e) ? w(e) : Ot(n.removed);
            } catch {
            }
          }
        }
      }
      z("afterSanitizeAttributes", e, null);
    }
  }, Qt = function s(e) {
    var r, a = dt(e);
    for (z("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      z("uponSanitizeShadowNode", r, null), !vt(r) && (r.content instanceof f && s(r.content), yt(r));
    z("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, m, L, b;
    if (Pe = !s, Pe && (s = "<!-->"), typeof s != "string" && !ae(s))
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
    if (we || Fe(e), n.removed = [], typeof s == "string" && (ne = !1), ne) {
      if (s.nodeName) {
        var A = g(s.nodeName);
        if (!y[A] || re[A])
          throw Ge("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof p)
      r = mt("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!Z && !X && !j && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return N && fe ? N.createHTML(s) : s;
      if (r = mt(s), !r)
        return Z ? null : fe ? Ae : "";
    }
    r && xe && w(r.firstChild);
    for (var B = dt(ne ? s : r); m = B.nextNode(); )
      m.nodeType === 3 && m === L || vt(m) || (m.content instanceof f && Qt(m.content), yt(m), L = m);
    if (L = null, ne)
      return s;
    if (Z) {
      if (ce)
        for (b = Ht.call(r.ownerDocument); r.firstChild; )
          b.appendChild(r.firstChild);
      else
        b = r;
      return (E.shadowroot || E.shadowrootmod) && (b = Wt.call(i, b, !0)), b;
    }
    var _ = j ? r.outerHTML : r.innerHTML;
    return j && y["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && S(Mr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), X && (_ = P(_, be, " "), _ = P(_, Oe, " "), _ = P(_, Re, " ")), N && fe ? N.createHTML(_) : _;
  }, n.setConfig = function(s) {
    Fe(s), we = !0;
  }, n.clearConfig = function() {
    ee = null, we = !1;
  }, n.isValidAttribute = function(s, e, r) {
    ee || Fe({});
    var a = g(s), m = g(e);
    return Tt(a, m, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (F[s] = F[s] || [], oe(F[s], e));
  }, n.removeHook = function(s) {
    if (F[s])
      return Ot(F[s]);
  }, n.removeHooks = function(s) {
    F[s] && (F[s] = []);
  }, n.removeAllHooks = function() {
    F = {};
  }, n;
}
var Cr = Pt();
const Ir = (t) => ({ __html: Cr.sanitize(t) });
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
var kt = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function i() {
      for (var l = "", p = 0; p < arguments.length; p++) {
        var d = arguments[p];
        d && (l = f(l, o(d)));
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
      var p = "";
      for (var d in l)
        n.call(l, d) && l[d] && (p = f(p, d));
      return p;
    }
    function f(l, p) {
      return p ? l ? l + " " + p : l + p : l;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(kt);
var Pr = kt.exports;
const kr = /* @__PURE__ */ wt(Pr), Ft = ({
  src: t,
  alt: n,
  cssClasses: i,
  loading: o = "lazy",
  decoding: f = "async",
  dataTestId: l,
  fetchPriority: p = "auto",
  width: d,
  height: h,
  cardLink: M,
  title: R,
  caption: D,
  captionTitle: I,
  border: U,
  dropShadow: q
}) => {
  const V = {
    src: t,
    alt: n,
    loading: o,
    decoding: f,
    fetchpriority: p,
    // React attribute bug workaround
    ...(i == null ? void 0 : i.length) > 0 && { className: _e(i) },
    ...l && { "data-testid": l },
    ...d && { width: d },
    ...h && { height: h }
  }, se = kr("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": q
  }), le = (Y) => {
    const N = Y ? `${V.className} ${Y}` : V.className;
    return M ? /* @__PURE__ */ v.jsxs("a", { href: M, children: [
      /* @__PURE__ */ v.jsx("img", { ...V, className: N }),
      /* @__PURE__ */ v.jsx("span", { className: "visually-hidden", children: R })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ v.jsx("img", { ...V, className: N })
    );
  }, te = () => /* @__PURE__ */ v.jsx("div", { className: se, children: /* @__PURE__ */ v.jsxs("figure", { className: "figure uds-figure", children: [
    le(),
    D && /* @__PURE__ */ v.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      I && /* @__PURE__ */ v.jsx("h3", { children: I }),
      /* @__PURE__ */ v.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ir(D)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: D ? te() : le(se) });
};
Ft.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: c.string.isRequired,
  /**
   * Image alt text
   */
  alt: c.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: c.arrayOf(c.string),
  /**
   * Image loading mode
   */
  loading: c.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: c.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: c.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: c.string,
  /**
   * Height of the image
   */
  height: c.string,
  dataTestId: c.string,
  cardLink: c.string,
  title: c.string,
  caption: c.string,
  captionTitle: c.string,
  border: c.bool,
  dropShadow: c.bool
};
const Fr = ({ imageSource: t, imageAltText: n, quote: i, itemStyle: o = {} }) => {
  var f, l;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${t ? "with-image" : ""} ${_e(o.containerCssClass)}`,
      children: [
        t && /* @__PURE__ */ v.jsx(
          Ft,
          {
            src: t,
            alt: n,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ v.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ v.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ v.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          i.title && /* @__PURE__ */ v.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ v.jsx("span", { className: _e(o.titleCssClass), children: i.title }) }),
          i.content && /* @__PURE__ */ v.jsx(
            "p",
            {
              className: _e(o.contentCssClass),
              "data-testid": "testimonial-content",
              children: i.content
            }
          ),
          (!!((f = i.cite) != null && f.name) || !!((l = i.cite) != null && l.description)) && /* @__PURE__ */ v.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ v.jsx("cite", { className: "name", children: i.cite.name }),
            i.cite && /* @__PURE__ */ v.jsx("cite", { className: "description", children: i.cite.description })
          ] })
        ] })
      ]
    }
  );
};
Fr.propTypes = {
  quote: c.shape({
    title: c.string,
    content: c.string,
    cite: c.shape({
      name: c.string,
      description: c.string
    })
  }).isRequired,
  imageSource: c.string,
  imageAltText: c.string,
  itemStyle: c.shape({
    containerCssClass: c.arrayOf(c.string),
    titleCssClass: c.arrayOf(c.string),
    contentCssClass: c.arrayOf(c.string)
  })
};
export {
  Fr as Testimonial
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
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
