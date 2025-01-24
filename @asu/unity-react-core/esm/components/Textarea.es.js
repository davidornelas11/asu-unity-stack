import je, { useId as wt } from "react";
function Mt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ct = { exports: {} }, te = {};
var ht;
function tr() {
  if (ht) return te;
  ht = 1;
  var t = je, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(p, d, O) {
    var S, M = {}, H = null, z = null;
    O !== void 0 && (H = "" + O), d.key !== void 0 && (H = "" + d.key), d.ref !== void 0 && (z = d.ref);
    for (S in d) o.call(d, S) && !l.hasOwnProperty(S) && (M[S] = d[S]);
    if (p && p.defaultProps) for (S in d = p.defaultProps, d) M[S] === void 0 && (M[S] = d[S]);
    return { $$typeof: n, type: p, key: H, ref: z, props: M, _owner: c.current };
  }
  return te.Fragment = i, te.jsx = u, te.jsxs = u, te;
}
Ct.exports = tr();
var F = Ct.exports, xt = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function i() {
      for (var l = "", u = 0; u < arguments.length; u++) {
        var p = arguments[u];
        p && (l = c(l, o(p)));
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
      for (var p in l)
        n.call(l, p) && l[p] && (u = c(u, p));
      return u;
    }
    function c(l, u) {
      return u ? l ? l + " " + u : l + u : l;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(xt);
var rr = xt.exports;
const Et = /* @__PURE__ */ Mt(rr);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function $e(t, n) {
  return $e = Object.setPrototypeOf || function(o, c) {
    return o.__proto__ = c, o;
  }, $e(t, n);
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
    var p = [null];
    p.push.apply(p, l);
    var d = Function.bind.apply(c, p), O = new d();
    return u && $e(O, u.prototype), O;
  }, me.apply(null, arguments);
}
function D(t) {
  return ar(t) || ir(t) || or(t) || sr();
}
function ar(t) {
  if (Array.isArray(t)) return qe(t);
}
function ir(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function or(t, n) {
  if (t) {
    if (typeof t == "string") return qe(t, n);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return qe(t, n);
  }
}
function qe(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var i = 0, o = new Array(n); i < n; i++) o[i] = t[i];
  return o;
}
function sr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var lr = Object.hasOwnProperty, yt = Object.setPrototypeOf, ur = Object.isFrozen, cr = Object.getPrototypeOf, fr = Object.getOwnPropertyDescriptor, b = Object.freeze, N = Object.seal, pr = Object.create, Dt = typeof Reflect < "u" && Reflect, ve = Dt.apply, Ve = Dt.construct;
ve || (ve = function(n, i, o) {
  return n.apply(i, o);
});
b || (b = function(n) {
  return n;
});
N || (N = function(n) {
  return n;
});
Ve || (Ve = function(n, i) {
  return me(n, D(i));
});
var mr = w(Array.prototype.forEach), At = w(Array.prototype.pop), re = w(Array.prototype.push), de = w(String.prototype.toLowerCase), Pe = w(String.prototype.toString), gt = w(String.prototype.match), x = w(String.prototype.replace), dr = w(String.prototype.indexOf), vr = w(String.prototype.trim), A = w(RegExp.prototype.test), Fe = _r(TypeError);
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
    return Ve(t, i);
  };
}
function f(t, n, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : de, yt && yt(t, null);
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
function $(t) {
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
var St = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ue = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), He = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tr = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), We = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), hr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bt = b(["#text"]), Rt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ze = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ot = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Er = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yr = N(/<%[\w\W]*|[\w\W]*%>/gm), Ar = N(/\${[\w\W]*}/gm), gr = N(/^data-[\-\w.\u00B7-\uFFFF]/), Sr = N(/^aria-[\-\w]+$/), br = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rr = N(/^(?:\w+script|data):/i), Or = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lr = N(/^html$/i), Nr = N(/^[a-z][.\w]*(-[.\w]+)+$/i), wr = function() {
  return typeof window > "u" ? null : window;
}, Mr = function(n, i) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var o = null, c = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(c) && (o = i.currentScript.getAttribute(c));
  var l = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(l, {
      createHTML: function(p) {
        return p;
      },
      createScriptURL: function(p) {
        return p;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function It() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wr(), n = function(e) {
    return It(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var i = t.document, o = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, u = t.Node, p = t.Element, d = t.NodeFilter, O = t.NamedNodeMap, S = O === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : O, M = t.HTMLFormElement, H = t.DOMParser, z = t.trustedTypes, ne = p.prototype, Pt = fe(ne, "cloneNode"), Ft = fe(ne, "nextSibling"), Ut = fe(ne, "childNodes"), _e = fe(ne, "parentNode");
  if (typeof l == "function") {
    var Te = o.createElement("template");
    Te.content && Te.content.ownerDocument && (o = Te.content.ownerDocument);
  }
  var C = Mr(z, i), he = C ? C.createHTML("") : "", ae = o, Ee = ae.implementation, Ht = ae.createNodeIterator, Wt = ae.createDocumentFragment, zt = ae.getElementsByTagName, Gt = i.importNode, Ye = {};
  try {
    Ye = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var I = {};
  n.isSupported = typeof _e == "function" && Ee && Ee.createHTMLDocument !== void 0 && Ye !== 9;
  var ye = Er, Ae = yr, ge = Ar, Bt = gr, jt = Sr, $t = Rr, Xe = Or, qt = Nr, Se = br, T = null, Ke = f({}, [].concat(D(St), D(Ue), D(He), D(We), D(bt))), h = null, Ze = f({}, [].concat(D(Rt), D(ze), D(Ot), D(pe))), v = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Je = !0, Re = !0, Qe = !1, et = !0, q = !1, Oe = !0, G = !1, Le = !1, Ne = !1, V = !1, ie = !1, oe = !1, tt = !0, rt = !1, Vt = "user-content-", we = !0, Q = !1, Y = {}, X = null, nt = f({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), at = null, it = f({}, ["audio", "video", "img", "source", "image", "track"]), Me = null, ot = f({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", k = "http://www.w3.org/1999/xhtml", K = k, Ce = !1, xe = null, Yt = f({}, [se, le, k], Pe), B, Xt = ["application/xhtml+xml", "text/html"], Kt = "text/html", E, Z = null, Zt = o.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, De = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Xt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Kt : B = e.PARSER_MEDIA_TYPE, E = B === "application/xhtml+xml" ? Pe : de, T = "ALLOWED_TAGS" in e ? f({}, e.ALLOWED_TAGS, E) : Ke, h = "ALLOWED_ATTR" in e ? f({}, e.ALLOWED_ATTR, E) : Ze, xe = "ALLOWED_NAMESPACES" in e ? f({}, e.ALLOWED_NAMESPACES, Pe) : Yt, Me = "ADD_URI_SAFE_ATTR" in e ? f(
      $(ot),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ot, at = "ADD_DATA_URI_TAGS" in e ? f(
      $(it),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : it, X = "FORBID_CONTENTS" in e ? f({}, e.FORBID_CONTENTS, E) : nt, J = "FORBID_TAGS" in e ? f({}, e.FORBID_TAGS, E) : {}, be = "FORBID_ATTR" in e ? f({}, e.FORBID_ATTR, E) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, ie = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, we = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || k, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Re = !1), ie && (V = !0), Y && (T = f({}, D(bt)), h = [], Y.html === !0 && (f(T, St), f(h, Rt)), Y.svg === !0 && (f(T, Ue), f(h, ze), f(h, pe)), Y.svgFilters === !0 && (f(T, He), f(h, ze), f(h, pe)), Y.mathMl === !0 && (f(T, We), f(h, Ot), f(h, pe))), e.ADD_TAGS && (T === Ke && (T = $(T)), f(T, e.ADD_TAGS, E)), e.ADD_ATTR && (h === Ze && (h = $(h)), f(h, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && f(Me, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (X === nt && (X = $(X)), f(X, e.FORBID_CONTENTS, E)), we && (T["#text"] = !0), G && f(T, ["html", "head", "body"]), T.table && (f(T, ["tbody"]), delete J.tbody), b && b(e), Z = e);
  }, lt = f({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = f({}, ["annotation-xml"]), Jt = f({}, ["title", "style", "font", "a", "script"]), ue = f({}, Ue);
  f(ue, He), f(ue, Tr);
  var Ie = f({}, We);
  f(Ie, hr);
  var Qt = function(e) {
    var r = _e(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), m = de(r.tagName);
    return xe[e.namespaceURI] ? e.namespaceURI === le ? r.namespaceURI === k ? a === "svg" : r.namespaceURI === se ? a === "svg" && (m === "annotation-xml" || lt[m]) : !!ue[a] : e.namespaceURI === se ? r.namespaceURI === k ? a === "math" : r.namespaceURI === le ? a === "math" && ut[m] : !!Ie[a] : e.namespaceURI === k ? r.namespaceURI === le && !ut[m] || r.namespaceURI === se && !lt[m] ? !1 : !Ie[a] && (Jt[a] || !ue[a]) : !!(B === "application/xhtml+xml" && xe[e.namespaceURI]) : !1;
  }, L = function(e) {
    re(n.removed, {
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
  }, ce = function(e, r) {
    try {
      re(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      re(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !h[e])
      if (V || ie)
        try {
          L(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, ct = function(e) {
    var r, a;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var m = gt(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    B === "application/xhtml+xml" && K === k && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = C ? C.createHTML(e) : e;
    if (K === k)
      try {
        r = new H().parseFromString(R, B);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Ee.createDocument(K, "template", null);
      try {
        r.documentElement.innerHTML = Ce ? he : R;
      } catch {
      }
    }
    var g = r.body || r.documentElement;
    return e && a && g.insertBefore(o.createTextNode(a), g.childNodes[0] || null), K === k ? zt.call(r, G ? "html" : "body")[0] : G ? r.documentElement : g;
  }, ft = function(e) {
    return Ht.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof M && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof S) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(u) === "object" ? e instanceof u : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, P = function(e, r, a) {
    I[e] && mr(I[e], function(m) {
      m.call(n, r, a, Z);
    });
  }, mt = function(e) {
    var r;
    if (P("beforeSanitizeElements", e, null), pt(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return L(e), !0;
    var a = E(e.nodeName);
    if (P("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: T
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || a === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return L(e), !0;
    if (!T[a] || J[a]) {
      if (!J[a] && vt(a) && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
        return !1;
      if (we && !X[a]) {
        var m = _e(e) || e.parentNode, R = Ut(e) || e.childNodes;
        if (R && m)
          for (var g = R.length, y = g - 1; y >= 0; --y) {
            var j = Pt(R[y], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(j, Ft(e));
          }
      }
      return L(e), !0;
    }
    return e instanceof p && !Qt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (L(e), !0) : (q && e.nodeType === 3 && (r = e.textContent, r = x(r, ye, " "), r = x(r, Ae, " "), r = x(r, ge, " "), e.textContent !== r && (re(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), P("afterSanitizeElements", e, null), !1);
  }, dt = function(e, r, a) {
    if (tt && (r === "id" || r === "name") && (a in o || a in Zt))
      return !1;
    if (!(Re && !be[r] && A(Bt, r))) {
      if (!(Je && A(jt, r))) {
        if (!h[r] || be[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vt(e) && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && A(v.attributeNameCheck, r) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
          ) return !1;
        } else if (!Me[r]) {
          if (!A(Se, x(a, Xe, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && dr(a, "data:") === 0 && at[e])) {
              if (!(Qe && !A($t, x(a, Xe, "")))) {
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
    return e !== "annotation-xml" && gt(e, qt);
  }, _t = function(e) {
    var r, a, m, R;
    P("beforeSanitizeAttributes", e, null);
    var g = e.attributes;
    if (g) {
      var y = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: h
      };
      for (R = g.length; R--; ) {
        r = g[R];
        var j = r, _ = j.name, ke = j.namespaceURI;
        if (a = _ === "value" ? r.value : vr(r.value), m = E(_), y.attrName = m, y.attrValue = a, y.keepAttr = !0, y.forceKeepAttr = void 0, P("uponSanitizeAttribute", e, y), a = y.attrValue, !y.forceKeepAttr && (ce(_, e), !!y.keepAttr)) {
          if (!et && A(/\/>/i, a)) {
            ce(_, e);
            continue;
          }
          q && (a = x(a, ye, " "), a = x(a, Ae, " "), a = x(a, ge, " "));
          var Tt = E(e.nodeName);
          if (dt(Tt, m, a)) {
            if (rt && (m === "id" || m === "name") && (ce(_, e), a = Vt + a), Oe && A(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(_, e);
              continue;
            }
            if (C && W(z) === "object" && typeof z.getAttributeType == "function" && !ke)
              switch (z.getAttributeType(Tt, m)) {
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
              ke ? e.setAttributeNS(ke, _, a) : e.setAttribute(_, a), pt(e) ? L(e) : At(n.removed);
            } catch {
            }
          }
        }
      }
      P("afterSanitizeAttributes", e, null);
    }
  }, er = function s(e) {
    var r, a = ft(e);
    for (P("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      P("uponSanitizeShadowNode", r, null), !mt(r) && (r.content instanceof c && s(r.content), _t(r));
    P("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, m, R, g;
    if (Ce = !s, Ce && (s = "<!-->"), typeof s != "string" && !ee(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Fe("dirty is not a string, aborting");
      } else
        throw Fe("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ee(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Le || De(e), n.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var y = E(s.nodeName);
        if (!T[y] || J[y])
          throw Fe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof u)
      r = ct("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!V && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return C && oe ? C.createHTML(s) : s;
      if (r = ct(s), !r)
        return V ? null : oe ? he : "";
    }
    r && Ne && L(r.firstChild);
    for (var j = ft(Q ? s : r); m = j.nextNode(); )
      m.nodeType === 3 && m === R || mt(m) || (m.content instanceof c && er(m.content), _t(m), R = m);
    if (R = null, Q)
      return s;
    if (V) {
      if (ie)
        for (g = Wt.call(r.ownerDocument); r.firstChild; )
          g.appendChild(r.firstChild);
      else
        g = r;
      return (h.shadowroot || h.shadowrootmod) && (g = Gt.call(i, g, !0)), g;
    }
    var _ = G ? r.outerHTML : r.innerHTML;
    return G && T["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && A(Lr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), q && (_ = x(_, ye, " "), _ = x(_, Ae, " "), _ = x(_, ge, " ")), C && oe ? C.createHTML(_) : _;
  }, n.setConfig = function(s) {
    De(s), Le = !0;
  }, n.clearConfig = function() {
    Z = null, Le = !1;
  }, n.isValidAttribute = function(s, e, r) {
    Z || De({});
    var a = E(s), m = E(e);
    return dt(a, m, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (I[s] = I[s] || [], re(I[s], e));
  }, n.removeHook = function(s) {
    if (I[s])
      return At(I[s]);
  }, n.removeHooks = function(s) {
    I[s] && (I[s] = []);
  }, n.removeAllHooks = function() {
    I = {};
  }, n;
}
It();
var kt = { exports: {} }, Ge, Lt;
function Cr() {
  if (Lt) return Ge;
  Lt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ge = t, Ge;
}
var Be, Nt;
function xr() {
  if (Nt) return Be;
  Nt = 1;
  var t = Cr();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, Be = function() {
    function o(u, p, d, O, S, M) {
      if (M !== t) {
        var H = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw H.name = "Invariant Violation", H;
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
  }, Be;
}
kt.exports = xr()();
var Dr = kt.exports;
const U = /* @__PURE__ */ Mt(Dr);
U.shape({
  event: U.string,
  action: U.string,
  name: U.string,
  region: U.string,
  section: U.string,
  component: U.string,
  type: U.string,
  text: U.string
});
const Ir = ({
  event: t = "",
  action: n = "",
  name: i = "",
  type: o = "",
  section: c = "",
  text: l = "",
  region: u = "",
  component: p = ""
}) => {
  const { dataLayer: d } = window, O = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: i.toLowerCase(),
    type: o.toLowerCase(),
    region: u.toLowerCase(),
    section: c.toLowerCase(),
    text: l.toLowerCase(),
    component: p.toLowerCase()
  };
  d && d.push(O);
}, kr = "staticMarkup";
function Pr() {
  const n = wt().indexOf(kr) > -1 ? !0 : void 0;
  return {
    isBootstrap: n,
    isReact: n ? void 0 : !0
  };
}
const Fr = ({ gaData: t, prefix: n = "", children: i }) => {
  const { isReact: o } = Pr(), { onClick: c, ...l } = i.props;
  if (o)
    return je.cloneElement(i, {
      ...l,
      onClick: (d) => (Ir(t), c ? c(d) : !0)
    });
  let u = "";
  ["input", "header", "header-input"].includes(n) && (u = `-${n}`);
  const p = {
    [`data-ga${u}`]: t.text,
    [`data-ga${u}-name`]: t.name,
    [`data-ga${u}-event`]: t.event,
    [`data-ga${u}-action`]: t.action,
    [`data-ga${u}-type`]: t.type,
    [`data-ga${u}-region`]: t.region,
    [`data-ga${u}-section`]: t.section,
    [`data-ga${u}-component`]: t.component
  };
  return je.cloneElement(i, {
    ...l,
    onClick: c,
    ...p
  });
}, Gr = ["sm", "md", "lg"], Br = ["", "valid", "invalid"], Ur = {
  text: "blur",
  name: "onclick",
  event: "form",
  action: "click",
  region: "main content",
  section: "text label"
}, Hr = {
  id: void 0,
  label: void 0,
  placeholder: void 0,
  displaySize: "md",
  required: !1,
  disabled: !1,
  feedback: "",
  validMessage: "Success",
  invalidMessage: "Error"
}, jr = ({
  id: t,
  label: n,
  displaySize: i,
  validMessage: o,
  invalidMessage: c,
  feedback: l,
  ...u
} = Hr) => {
  const p = t || wt(), d = `${p}SuccessHelp`, O = `${p}ErrorHelp`, S = l === "valid", M = l === "invalid";
  return /* @__PURE__ */ F.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ F.jsxs(
      "label",
      {
        className: Et({ "uds-field-required": u.required }),
        htmlFor: p,
        children: [
          u.required && /* @__PURE__ */ F.jsx(
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
    /* @__PURE__ */ F.jsx(Fr, { gaData: Ur, prefix: "input", children: /* @__PURE__ */ F.jsx(
      "textarea",
      {
        className: Et("form-control", {
          "is-valid": S,
          "is-invalid": M,
          "form-control-sm": i === "sm",
          "form-control-lg": i === "lg"
        }),
        name: p,
        id: p,
        ...u
      }
    ) }),
    S && /* @__PURE__ */ F.jsxs("small", { id: d, className: "valid-feedback", children: [
      /* @__PURE__ */ F.jsx("span", { title: "Alert", className: "fa fa-icon fa-exclamation-triangle" }),
      o
    ] }),
    M && /* @__PURE__ */ F.jsxs("small", { id: O, className: "invalid-feedback", children: [
      /* @__PURE__ */ F.jsx("span", { title: "Alert", className: "fa fa-icon fa-exclamation-triangle" }),
      c
    ] })
  ] });
};
export {
  jr as Textarea,
  Gr as displaySizes,
  Br as inputValidationFeedback,
  Hr as propDefaults
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
