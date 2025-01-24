import $e, { useId as Mt } from "react";
function Ct(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xt = { exports: {} }, re = {};
var Et;
function tr() {
  if (Et) return re;
  Et = 1;
  var t = $e, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, d, y) {
    var R, k = {}, M = null, P = null;
    y !== void 0 && (M = "" + y), d.key !== void 0 && (M = "" + d.key), d.ref !== void 0 && (P = d.ref);
    for (R in d) o.call(d, R) && !l.hasOwnProperty(R) && (k[R] = d[R]);
    if (m && m.defaultProps) for (R in d = m.defaultProps, d) k[R] === void 0 && (k[R] = d[R]);
    return { $$typeof: n, type: m, key: M, ref: P, props: k, _owner: c.current };
  }
  return re.Fragment = i, re.jsx = u, re.jsxs = u, re;
}
xt.exports = tr();
var D = xt.exports, Dt = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function i() {
      for (var l = "", u = 0; u < arguments.length; u++) {
        var m = arguments[u];
        m && (l = c(l, o(m)));
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
        n.call(l, m) && l[m] && (u = c(u, m));
      return u;
    }
    function c(l, u) {
      return u ? l ? l + " " + u : l + u : l;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(Dt);
var rr = Dt.exports;
const yt = /* @__PURE__ */ Ct(rr);
function z(t) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, z(t);
}
function qe(t, n) {
  return qe = Object.setPrototypeOf || function(o, c) {
    return o.__proto__ = c, o;
  }, qe(t, n);
}
function nr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, n, i) {
  return nr() ? me = Reflect.construct : me = function(c, l, u) {
    var m = [null];
    m.push.apply(m, l);
    var d = Function.bind.apply(c, m), y = new d();
    return u && qe(y, u.prototype), y;
  }, me.apply(null, arguments);
}
function I(t) {
  return ar(t) || ir(t) || or(t) || sr();
}
function ar(t) {
  if (Array.isArray(t)) return Ve(t);
}
function ir(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function or(t, n) {
  if (t) {
    if (typeof t == "string") return Ve(t, n);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Ve(t, n);
  }
}
function Ve(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var i = 0, o = new Array(n); i < n; i++) o[i] = t[i];
  return o;
}
function sr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var lr = Object.hasOwnProperty, At = Object.setPrototypeOf, ur = Object.isFrozen, cr = Object.getPrototypeOf, fr = Object.getOwnPropertyDescriptor, b = Object.freeze, N = Object.seal, pr = Object.create, It = typeof Reflect < "u" && Reflect, ve = It.apply, Ye = It.construct;
ve || (ve = function(n, i, o) {
  return n.apply(i, o);
});
b || (b = function(n) {
  return n;
});
N || (N = function(n) {
  return n;
});
Ye || (Ye = function(n, i) {
  return me(n, I(i));
});
var mr = w(Array.prototype.forEach), gt = w(Array.prototype.pop), ne = w(Array.prototype.push), de = w(String.prototype.toLowerCase), Fe = w(String.prototype.toString), St = w(String.prototype.match), x = w(String.prototype.replace), dr = w(String.prototype.indexOf), vr = w(String.prototype.trim), g = w(RegExp.prototype.test), Ue = _r(TypeError);
function w(t) {
  return function(n) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
      o[c - 1] = arguments[c];
    return ve(t, n, o);
  };
}
function _r(t) {
  return function() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return Ye(t, i);
  };
}
function f(t, n, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : de, At && At(t, null);
  for (var c = n.length; c--; ) {
    var l = n[c];
    if (typeof l == "string") {
      var u = i(l);
      u !== l && (ur(n) || (n[c] = u), l = u);
    }
    t[l] = !0;
  }
  return t;
}
function q(t) {
  var n = pr(null), i;
  for (i in t)
    ve(lr, t, [i]) === !0 && (n[i] = t[i]);
  return n;
}
function fe(t, n) {
  for (; t !== null; ) {
    var i = fr(t, n);
    if (i) {
      if (i.get)
        return w(i.get);
      if (typeof i.value == "function")
        return w(i.value);
    }
    t = cr(t);
  }
  function o(c) {
    return console.warn("fallback value for", c), null;
  }
  return o;
}
var bt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), He = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), We = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), hr = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ze = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Tr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = b(["#text"]), Ot = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ge = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Er = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yr = N(/<%[\w\W]*|[\w\W]*%>/gm), Ar = N(/\${[\w\W]*}/gm), gr = N(/^data-[\-\w.\u00B7-\uFFFF]/), Sr = N(/^aria-[\-\w]+$/), br = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rr = N(/^(?:\w+script|data):/i), Or = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lr = N(/^html$/i), Nr = N(/^[a-z][.\w]*(-[.\w]+)+$/i), wr = function() {
  return typeof window > "u" ? null : window;
}, Mr = function(n, i) {
  if (z(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var o = null, c = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(c) && (o = i.currentScript.getAttribute(c));
  var l = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(l, {
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
function kt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wr(), n = function(e) {
    return kt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var i = t.document, o = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, u = t.Node, m = t.Element, d = t.NodeFilter, y = t.NamedNodeMap, R = y === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : y, k = t.HTMLFormElement, M = t.DOMParser, P = t.trustedTypes, G = m.prototype, _e = fe(G, "cloneNode"), Ft = fe(G, "nextSibling"), Ut = fe(G, "childNodes"), he = fe(G, "parentNode");
  if (typeof l == "function") {
    var Te = o.createElement("template");
    Te.content && Te.content.ownerDocument && (o = Te.content.ownerDocument);
  }
  var C = Mr(P, i), Ee = C ? C.createHTML("") : "", ae = o, ye = ae.implementation, Ht = ae.createNodeIterator, Wt = ae.createDocumentFragment, zt = ae.getElementsByTagName, Gt = i.importNode, Xe = {};
  try {
    Xe = q(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var F = {};
  n.isSupported = typeof he == "function" && ye && ye.createHTMLDocument !== void 0 && Xe !== 9;
  var Ae = Er, ge = yr, Se = Ar, Bt = gr, jt = Sr, $t = Rr, Ke = Or, qt = Nr, be = br, h = null, Ze = f({}, [].concat(I(bt), I(He), I(We), I(ze), I(Rt))), T = null, Je = f({}, [].concat(I(Ot), I(Ge), I(Lt), I(pe))), v = Object.seal(Object.create(null, {
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
  })), Q = null, Re = null, Qe = !0, Oe = !0, et = !1, tt = !0, V = !1, Le = !0, B = !1, Ne = !1, we = !1, Y = !1, ie = !1, oe = !1, rt = !0, nt = !1, Vt = "user-content-", Me = !0, ee = !1, X = {}, K = null, at = f({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), it = null, ot = f({}, ["audio", "video", "img", "source", "image", "track"]), Ce = null, st = f({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", U = "http://www.w3.org/1999/xhtml", Z = U, xe = !1, De = null, Yt = f({}, [se, le, U], Fe), j, Xt = ["application/xhtml+xml", "text/html"], Kt = "text/html", E, J = null, Zt = o.createElement("form"), lt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ie = function(e) {
    J && J === e || ((!e || z(e) !== "object") && (e = {}), e = q(e), j = // eslint-disable-next-line unicorn/prefer-includes
    Xt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? j = Kt : j = e.PARSER_MEDIA_TYPE, E = j === "application/xhtml+xml" ? Fe : de, h = "ALLOWED_TAGS" in e ? f({}, e.ALLOWED_TAGS, E) : Ze, T = "ALLOWED_ATTR" in e ? f({}, e.ALLOWED_ATTR, E) : Je, De = "ALLOWED_NAMESPACES" in e ? f({}, e.ALLOWED_NAMESPACES, Fe) : Yt, Ce = "ADD_URI_SAFE_ATTR" in e ? f(
      q(st),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : st, it = "ADD_DATA_URI_TAGS" in e ? f(
      q(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ot, K = "FORBID_CONTENTS" in e ? f({}, e.FORBID_CONTENTS, E) : at, Q = "FORBID_TAGS" in e ? f({}, e.FORBID_TAGS, E) : {}, Re = "FORBID_ATTR" in e ? f({}, e.FORBID_ATTR, E) : {}, X = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Qe = e.ALLOW_ARIA_ATTR !== !1, Oe = e.ALLOW_DATA_ATTR !== !1, et = e.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, V = e.SAFE_FOR_TEMPLATES || !1, Le = e.SAFE_FOR_XML !== !1, B = e.WHOLE_DOCUMENT || !1, Y = e.RETURN_DOM || !1, ie = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, we = e.FORCE_BODY || !1, rt = e.SANITIZE_DOM !== !1, nt = e.SANITIZE_NAMED_PROPS || !1, Me = e.KEEP_CONTENT !== !1, ee = e.IN_PLACE || !1, be = e.ALLOWED_URI_REGEXP || be, Z = e.NAMESPACE || U, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), V && (Oe = !1), ie && (Y = !0), X && (h = f({}, I(Rt)), T = [], X.html === !0 && (f(h, bt), f(T, Ot)), X.svg === !0 && (f(h, He), f(T, Ge), f(T, pe)), X.svgFilters === !0 && (f(h, We), f(T, Ge), f(T, pe)), X.mathMl === !0 && (f(h, ze), f(T, Lt), f(T, pe))), e.ADD_TAGS && (h === Ze && (h = q(h)), f(h, e.ADD_TAGS, E)), e.ADD_ATTR && (T === Je && (T = q(T)), f(T, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && f(Ce, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (K === at && (K = q(K)), f(K, e.FORBID_CONTENTS, E)), Me && (h["#text"] = !0), B && f(h, ["html", "head", "body"]), h.table && (f(h, ["tbody"]), delete Q.tbody), b && b(e), J = e);
  }, ut = f({}, ["mi", "mo", "mn", "ms", "mtext"]), ct = f({}, ["annotation-xml"]), Jt = f({}, ["title", "style", "font", "a", "script"]), ue = f({}, He);
  f(ue, We), f(ue, hr);
  var ke = f({}, ze);
  f(ke, Tr);
  var Qt = function(e) {
    var r = he(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: Z,
      tagName: "template"
    });
    var a = de(e.tagName), p = de(r.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === le ? r.namespaceURI === U ? a === "svg" : r.namespaceURI === se ? a === "svg" && (p === "annotation-xml" || ut[p]) : !!ue[a] : e.namespaceURI === se ? r.namespaceURI === U ? a === "math" : r.namespaceURI === le ? a === "math" && ct[p] : !!ke[a] : e.namespaceURI === U ? r.namespaceURI === le && !ct[p] || r.namespaceURI === se && !ut[p] ? !1 : !ke[a] && (Jt[a] || !ue[a]) : !!(j === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
  }, L = function(e) {
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
    if (r.removeAttribute(e), e === "is" && !T[e])
      if (Y || ie)
        try {
          L(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, ft = function(e) {
    var r, a;
    if (we)
      e = "<remove></remove>" + e;
    else {
      var p = St(e, /^[\r\n\t ]+/);
      a = p && p[0];
    }
    j === "application/xhtml+xml" && Z === U && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var O = C ? C.createHTML(e) : e;
    if (Z === U)
      try {
        r = new M().parseFromString(O, j);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ye.createDocument(Z, "template", null);
      try {
        r.documentElement.innerHTML = xe ? Ee : O;
      } catch {
      }
    }
    var S = r.body || r.documentElement;
    return e && a && S.insertBefore(o.createTextNode(a), S.childNodes[0] || null), Z === U ? zt.call(r, B ? "html" : "body")[0] : B ? r.documentElement : S;
  }, pt = function(e) {
    return Ht.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, mt = function(e) {
    return e instanceof k && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof R) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, te = function(e) {
    return z(u) === "object" ? e instanceof u : e && z(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, H = function(e, r, a) {
    F[e] && mr(F[e], function(p) {
      p.call(n, r, a, J);
    });
  }, dt = function(e) {
    var r;
    if (H("beforeSanitizeElements", e, null), mt(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return L(e), !0;
    var a = E(e.nodeName);
    if (H("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: h
    }), e.hasChildNodes() && !te(e.firstElementChild) && (!te(e.content) || !te(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Le && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return L(e), !0;
    if (!h[a] || Q[a]) {
      if (!Q[a] && _t(a) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
        return !1;
      if (Me && !K[a]) {
        var p = he(e) || e.parentNode, O = Ut(e) || e.childNodes;
        if (O && p)
          for (var S = O.length, A = S - 1; A >= 0; --A) {
            var $ = _e(O[A], !0);
            $.__removalCount = (e.__removalCount || 0) + 1, p.insertBefore($, Ft(e));
          }
      }
      return L(e), !0;
    }
    return e instanceof m && !Qt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (L(e), !0) : (V && e.nodeType === 3 && (r = e.textContent, r = x(r, Ae, " "), r = x(r, ge, " "), r = x(r, Se, " "), e.textContent !== r && (ne(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), H("afterSanitizeElements", e, null), !1);
  }, vt = function(e, r, a) {
    if (rt && (r === "id" || r === "name") && (a in o || a in Zt))
      return !1;
    if (!(Oe && !Re[r] && g(Bt, r))) {
      if (!(Qe && g(jt, r))) {
        if (!T[r] || Re[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(_t(e) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && g(v.attributeNameCheck, r) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
          ) return !1;
        } else if (!Ce[r]) {
          if (!g(be, x(a, Ke, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && dr(a, "data:") === 0 && it[e])) {
              if (!(et && !g($t, x(a, Ke, "")))) {
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
    return e !== "annotation-xml" && St(e, qt);
  }, ht = function(e) {
    var r, a, p, O;
    H("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: T
      };
      for (O = S.length; O--; ) {
        r = S[O];
        var $ = r, _ = $.name, Pe = $.namespaceURI;
        if (a = _ === "value" ? r.value : vr(r.value), p = E(_), A.attrName = p, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, H("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ce(_, e), !!A.keepAttr)) {
          if (!tt && g(/\/>/i, a)) {
            ce(_, e);
            continue;
          }
          V && (a = x(a, Ae, " "), a = x(a, ge, " "), a = x(a, Se, " "));
          var Tt = E(e.nodeName);
          if (vt(Tt, p, a)) {
            if (nt && (p === "id" || p === "name") && (ce(_, e), a = Vt + a), Le && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(_, e);
              continue;
            }
            if (C && z(P) === "object" && typeof P.getAttributeType == "function" && !Pe)
              switch (P.getAttributeType(Tt, p)) {
                case "TrustedHTML": {
                  a = C.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = C.createScriptURL(a);
                  break;
                }
              }
            try {
              Pe ? e.setAttributeNS(Pe, _, a) : e.setAttribute(_, a), mt(e) ? L(e) : gt(n.removed);
            } catch {
            }
          }
        }
      }
      H("afterSanitizeAttributes", e, null);
    }
  }, er = function s(e) {
    var r, a = pt(e);
    for (H("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      H("uponSanitizeShadowNode", r, null), !dt(r) && (r.content instanceof c && s(r.content), ht(r));
    H("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, p, O, S;
    if (xe = !s, xe && (s = "<!-->"), typeof s != "string" && !te(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Ue("dirty is not a string, aborting");
      } else
        throw Ue("toString is not a function");
    if (!n.isSupported) {
      if (z(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (te(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Ne || Ie(e), n.removed = [], typeof s == "string" && (ee = !1), ee) {
      if (s.nodeName) {
        var A = E(s.nodeName);
        if (!h[A] || Q[A])
          throw Ue("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof u)
      r = ft("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!Y && !V && !B && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return C && oe ? C.createHTML(s) : s;
      if (r = ft(s), !r)
        return Y ? null : oe ? Ee : "";
    }
    r && we && L(r.firstChild);
    for (var $ = pt(ee ? s : r); p = $.nextNode(); )
      p.nodeType === 3 && p === O || dt(p) || (p.content instanceof c && er(p.content), ht(p), O = p);
    if (O = null, ee)
      return s;
    if (Y) {
      if (ie)
        for (S = Wt.call(r.ownerDocument); r.firstChild; )
          S.appendChild(r.firstChild);
      else
        S = r;
      return (T.shadowroot || T.shadowrootmod) && (S = Gt.call(i, S, !0)), S;
    }
    var _ = B ? r.outerHTML : r.innerHTML;
    return B && h["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && g(Lr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), V && (_ = x(_, Ae, " "), _ = x(_, ge, " "), _ = x(_, Se, " ")), C && oe ? C.createHTML(_) : _;
  }, n.setConfig = function(s) {
    Ie(s), Ne = !0;
  }, n.clearConfig = function() {
    J = null, Ne = !1;
  }, n.isValidAttribute = function(s, e, r) {
    J || Ie({});
    var a = E(s), p = E(e);
    return vt(a, p, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (F[s] = F[s] || [], ne(F[s], e));
  }, n.removeHook = function(s) {
    if (F[s])
      return gt(F[s]);
  }, n.removeHooks = function(s) {
    F[s] && (F[s] = []);
  }, n.removeAllHooks = function() {
    F = {};
  }, n;
}
kt();
var Pt = { exports: {} }, Be, Nt;
function Cr() {
  if (Nt) return Be;
  Nt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = t, Be;
}
var je, wt;
function xr() {
  if (wt) return je;
  wt = 1;
  var t = Cr();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, je = function() {
    function o(u, m, d, y, R, k) {
      if (k !== t) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
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
      checkPropTypes: i,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, je;
}
Pt.exports = xr()();
var Dr = Pt.exports;
const W = /* @__PURE__ */ Ct(Dr);
W.shape({
  event: W.string,
  action: W.string,
  name: W.string,
  region: W.string,
  section: W.string,
  component: W.string,
  type: W.string,
  text: W.string
});
const Ir = ({
  event: t = "",
  action: n = "",
  name: i = "",
  type: o = "",
  section: c = "",
  text: l = "",
  region: u = "",
  component: m = ""
}) => {
  const { dataLayer: d } = window, y = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: i.toLowerCase(),
    type: o.toLowerCase(),
    region: u.toLowerCase(),
    section: c.toLowerCase(),
    text: l.toLowerCase(),
    component: m.toLowerCase()
  };
  d && d.push(y);
}, kr = "staticMarkup";
function Pr() {
  const n = Mt().indexOf(kr) > -1 ? !0 : void 0;
  return {
    isBootstrap: n,
    isReact: n ? void 0 : !0
  };
}
const Fr = ({ gaData: t, prefix: n = "", children: i }) => {
  const { isReact: o } = Pr(), { onClick: c, ...l } = i.props;
  if (o)
    return $e.cloneElement(i, {
      ...l,
      onClick: (d) => (Ir(t), c ? c(d) : !0)
    });
  let u = "";
  ["input", "header", "header-input"].includes(n) && (u = `-${n}`);
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
  return $e.cloneElement(i, {
    ...l,
    onClick: c,
    ...m
  });
}, Br = ["sm", "md", "lg"], jr = ["", "valid", "invalid"], Ur = ({ value: t, label: n, ...i }) => /* @__PURE__ */ D.jsx("option", { value: t, ...i, children: n }), Hr = {
  text: "blur",
  name: "onclick",
  event: "form",
  action: "click",
  region: "main content",
  section: "text label"
}, Wr = {
  id: void 0,
  label: void 0,
  displaySize: "md",
  required: !1,
  disabled: !1,
  feedback: "",
  validMessage: "Success",
  invalidMessage: "Error",
  options: []
}, $r = ({
  id: t,
  label: n,
  displaySize: i,
  validMessage: o,
  invalidMessage: c,
  feedback: l,
  options: u = [],
  selected: m,
  ...d
} = Wr) => {
  const y = t || Mt(), R = `${y}SuccessHelp`, k = `${y}ErrorHelp`, M = l === "valid", P = l === "invalid";
  return /* @__PURE__ */ D.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ D.jsxs(
      "label",
      {
        className: yt({ "uds-field-required": d.required }),
        htmlFor: y,
        children: [
          d.required && /* @__PURE__ */ D.jsx(
            "span",
            {
              title: "Required",
              className: "fa fa-icon fa-circle uds-field-required"
            }
          ),
          n
        ]
      }
    ),
    /* @__PURE__ */ D.jsx(Fr, { gaData: Hr, prefix: "input", children: /* @__PURE__ */ D.jsx(
      "select",
      {
        className: yt("form-select", {
          "is-valid": M,
          "is-invalid": P,
          "form-control-sm": i === "sm",
          "form-control-lg": i === "lg"
        }),
        name: y,
        id: y,
        defaultValue: m,
        ...d,
        children: u.length > 0 && u.map(({ value: G, label: _e }) => /* @__PURE__ */ D.jsx(
          Ur,
          {
            value: G,
            label: _e
          },
          G
        ))
      }
    ) }),
    M && /* @__PURE__ */ D.jsxs("small", { id: R, className: "valid-feedback", children: [
      /* @__PURE__ */ D.jsx("span", { title: "Alert", className: "fa fa-icon fa-exclamation-triangle" }),
      o
    ] }),
    P && /* @__PURE__ */ D.jsxs("small", { id: k, className: "invalid-feedback", children: [
      /* @__PURE__ */ D.jsx("span", { title: "Alert", className: "fa fa-icon fa-exclamation-triangle" }),
      c
    ] })
  ] });
};
export {
  Ur as Option,
  $r as Select,
  Br as displaySizes,
  jr as inputValidationFeedback,
  Wr as propDefaults
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
