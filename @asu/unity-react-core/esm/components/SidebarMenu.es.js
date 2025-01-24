import $e, { useId as Zt } from "react";
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, te = {};
var Tt;
function Qt() {
  if (Tt) return te;
  Tt = 1;
  var t = $e, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(v, p, M) {
    var O, U = {}, H = null, z = null;
    M !== void 0 && (H = "" + M), p.key !== void 0 && (H = "" + p.key), p.ref !== void 0 && (z = p.ref);
    for (O in p) i.call(p, O) && !m.hasOwnProperty(O) && (U[O] = p[O]);
    if (v && v.defaultProps) for (O in p = v.defaultProps, p) U[O] === void 0 && (U[O] = p[O]);
    return { $$typeof: a, type: v, key: H, ref: z, props: U, _owner: l.current };
  }
  return te.Fragment = o, te.jsx = f, te.jsxs = f, te;
}
Nt.exports = Qt();
var S = Nt.exports;
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, W(t);
}
function je(t, a) {
  return je = Object.setPrototypeOf || function(i, l) {
    return i.__proto__ = l, i;
  }, je(t, a);
}
function er() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, a, o) {
  return er() ? me = Reflect.construct : me = function(l, m, f) {
    var v = [null];
    v.push.apply(v, m);
    var p = Function.bind.apply(l, v), M = new p();
    return f && je(M, f.prototype), M;
  }, me.apply(null, arguments);
}
function x(t) {
  return tr(t) || rr(t) || ar(t) || nr();
}
function tr(t) {
  if (Array.isArray(t)) return qe(t);
}
function rr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ar(t, a) {
  if (t) {
    if (typeof t == "string") return qe(t, a);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return qe(t, a);
  }
}
function qe(t, a) {
  (a == null || a > t.length) && (a = t.length);
  for (var o = 0, i = new Array(a); o < a; o++) i[o] = t[o];
  return i;
}
function nr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var or = Object.hasOwnProperty, Et = Object.setPrototypeOf, ir = Object.isFrozen, sr = Object.getPrototypeOf, lr = Object.getOwnPropertyDescriptor, b = Object.freeze, N = Object.seal, cr = Object.create, wt = typeof Reflect < "u" && Reflect, ve = wt.apply, Ye = wt.construct;
ve || (ve = function(a, o, i) {
  return a.apply(o, i);
});
b || (b = function(a) {
  return a;
});
N || (N = function(a) {
  return a;
});
Ye || (Ye = function(a, o) {
  return me(a, x(o));
});
var ur = w(Array.prototype.forEach), yt = w(Array.prototype.pop), re = w(Array.prototype.push), de = w(String.prototype.toLowerCase), ke = w(String.prototype.toString), At = w(String.prototype.match), D = w(String.prototype.replace), fr = w(String.prototype.indexOf), pr = w(String.prototype.trim), A = w(RegExp.prototype.test), Fe = mr(TypeError);
function w(t) {
  return function(a) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      i[l - 1] = arguments[l];
    return ve(t, a, i);
  };
}
function mr(t) {
  return function() {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return Ye(t, o);
  };
}
function c(t, a, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : de, Et && Et(t, null);
  for (var l = a.length; l--; ) {
    var m = a[l];
    if (typeof m == "string") {
      var f = o(m);
      f !== m && (ir(a) || (a[l] = f), m = f);
    }
    t[m] = !0;
  }
  return t;
}
function j(t) {
  var a = cr(null), o;
  for (o in t)
    ve(or, t, [o]) === !0 && (a[o] = t[o]);
  return a;
}
function fe(t, a) {
  for (; t !== null; ) {
    var o = lr(t, a);
    if (o) {
      if (o.get)
        return w(o.get);
      if (typeof o.value == "function")
        return w(o.value);
    }
    t = sr(t);
  }
  function i(l) {
    return console.warn("fallback value for", l), null;
  }
  return i;
}
var gt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ue = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), He = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), dr = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), We = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), vr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), St = b(["#text"]), bt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ze = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Rt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hr = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), _r = N(/<%[\w\W]*|[\w\W]*%>/gm), Tr = N(/\${[\w\W]*}/gm), Er = N(/^data-[\-\w.\u00B7-\uFFFF]/), yr = N(/^aria-[\-\w]+$/), Ar = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gr = N(/^(?:\w+script|data):/i), Sr = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), br = N(/^html$/i), Rr = N(/^[a-z][.\w]*(-[.\w]+)+$/i), Or = function() {
  return typeof window > "u" ? null : window;
}, Lr = function(a, o) {
  if (W(a) !== "object" || typeof a.createPolicy != "function")
    return null;
  var i = null, l = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(l) && (i = o.currentScript.getAttribute(l));
  var m = "dompurify" + (i ? "#" + i : "");
  try {
    return a.createPolicy(m, {
      createHTML: function(v) {
        return v;
      },
      createScriptURL: function(v) {
        return v;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + m + " could not be created."), null;
  }
};
function Mt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Or(), a = function(e) {
    return Mt(e);
  };
  if (a.version = "2.5.7", a.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return a.isSupported = !1, a;
  var o = t.document, i = t.document, l = t.DocumentFragment, m = t.HTMLTemplateElement, f = t.Node, v = t.Element, p = t.NodeFilter, M = t.NamedNodeMap, O = M === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : M, U = t.HTMLFormElement, H = t.DOMParser, z = t.trustedTypes, ae = v.prototype, Dt = fe(ae, "cloneNode"), xt = fe(ae, "nextSibling"), It = fe(ae, "childNodes"), he = fe(ae, "parentNode");
  if (typeof m == "function") {
    var _e = i.createElement("template");
    _e.content && _e.content.ownerDocument && (i = _e.content.ownerDocument);
  }
  var C = Lr(z, o), Te = C ? C.createHTML("") : "", ne = i, Ee = ne.implementation, Pt = ne.createNodeIterator, kt = ne.createDocumentFragment, Ft = ne.getElementsByTagName, Ut = o.importNode, Ve = {};
  try {
    Ve = j(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var I = {};
  a.isSupported = typeof he == "function" && Ee && Ee.createHTMLDocument !== void 0 && Ve !== 9;
  var ye = hr, Ae = _r, ge = Tr, Ht = Er, Wt = yr, zt = gr, Xe = Sr, Bt = Rr, Se = Ar, _ = null, Ke = c({}, [].concat(x(gt), x(Ue), x(He), x(We), x(St))), T = null, Ze = c({}, [].concat(x(bt), x(ze), x(Rt), x(pe))), d = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Je = !0, Re = !0, Qe = !1, et = !0, q = !1, Oe = !0, B = !1, Le = !1, Ne = !1, Y = !1, oe = !1, ie = !1, tt = !0, rt = !1, Gt = "user-content-", we = !0, Q = !1, V = {}, X = null, at = c({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), nt = null, ot = c({}, ["audio", "video", "img", "source", "image", "track"]), Me = null, it = c({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", P = "http://www.w3.org/1999/xhtml", K = P, Ce = !1, De = null, $t = c({}, [se, le, P], ke), G, jt = ["application/xhtml+xml", "text/html"], qt = "text/html", E, Z = null, Yt = i.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, xe = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = j(e), G = // eslint-disable-next-line unicorn/prefer-includes
    jt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = qt : G = e.PARSER_MEDIA_TYPE, E = G === "application/xhtml+xml" ? ke : de, _ = "ALLOWED_TAGS" in e ? c({}, e.ALLOWED_TAGS, E) : Ke, T = "ALLOWED_ATTR" in e ? c({}, e.ALLOWED_ATTR, E) : Ze, De = "ALLOWED_NAMESPACES" in e ? c({}, e.ALLOWED_NAMESPACES, ke) : $t, Me = "ADD_URI_SAFE_ATTR" in e ? c(
      j(it),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : it, nt = "ADD_DATA_URI_TAGS" in e ? c(
      j(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ot, X = "FORBID_CONTENTS" in e ? c({}, e.FORBID_CONTENTS, E) : at, J = "FORBID_TAGS" in e ? c({}, e.FORBID_TAGS, E) : {}, be = "FORBID_ATTR" in e ? c({}, e.FORBID_ATTR, E) : {}, V = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, B = e.WHOLE_DOCUMENT || !1, Y = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, we = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || P, d = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (d.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (d.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (d.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Re = !1), oe && (Y = !0), V && (_ = c({}, x(St)), T = [], V.html === !0 && (c(_, gt), c(T, bt)), V.svg === !0 && (c(_, Ue), c(T, ze), c(T, pe)), V.svgFilters === !0 && (c(_, He), c(T, ze), c(T, pe)), V.mathMl === !0 && (c(_, We), c(T, Rt), c(T, pe))), e.ADD_TAGS && (_ === Ke && (_ = j(_)), c(_, e.ADD_TAGS, E)), e.ADD_ATTR && (T === Ze && (T = j(T)), c(T, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && c(Me, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (X === at && (X = j(X)), c(X, e.FORBID_CONTENTS, E)), we && (_["#text"] = !0), B && c(_, ["html", "head", "body"]), _.table && (c(_, ["tbody"]), delete J.tbody), b && b(e), Z = e);
  }, lt = c({}, ["mi", "mo", "mn", "ms", "mtext"]), ct = c({}, ["annotation-xml"]), Vt = c({}, ["title", "style", "font", "a", "script"]), ce = c({}, Ue);
  c(ce, He), c(ce, dr);
  var Ie = c({}, We);
  c(Ie, vr);
  var Xt = function(e) {
    var r = he(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: K,
      tagName: "template"
    });
    var n = de(e.tagName), u = de(r.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === le ? r.namespaceURI === P ? n === "svg" : r.namespaceURI === se ? n === "svg" && (u === "annotation-xml" || lt[u]) : !!ce[n] : e.namespaceURI === se ? r.namespaceURI === P ? n === "math" : r.namespaceURI === le ? n === "math" && ct[u] : !!Ie[n] : e.namespaceURI === P ? r.namespaceURI === le && !ct[u] || r.namespaceURI === se && !lt[u] ? !1 : !Ie[n] && (Vt[n] || !ce[n]) : !!(G === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
  }, L = function(e) {
    re(a.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = Te;
      } catch {
        e.remove();
      }
    }
  }, ue = function(e, r) {
    try {
      re(a.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      re(a.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !T[e])
      if (Y || oe)
        try {
          L(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, ut = function(e) {
    var r, n;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var u = At(e, /^[\r\n\t ]+/);
      n = u && u[0];
    }
    G === "application/xhtml+xml" && K === P && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = C ? C.createHTML(e) : e;
    if (K === P)
      try {
        r = new H().parseFromString(R, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Ee.createDocument(K, "template", null);
      try {
        r.documentElement.innerHTML = Ce ? Te : R;
      } catch {
      }
    }
    var g = r.body || r.documentElement;
    return e && n && g.insertBefore(i.createTextNode(n), g.childNodes[0] || null), K === P ? Ft.call(r, B ? "html" : "body")[0] : B ? r.documentElement : g;
  }, ft = function(e) {
    return Pt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof U && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(f) === "object" ? e instanceof f : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, k = function(e, r, n) {
    I[e] && ur(I[e], function(u) {
      u.call(a, r, n, Z);
    });
  }, mt = function(e) {
    var r;
    if (k("beforeSanitizeElements", e, null), pt(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return L(e), !0;
    var n = E(e.nodeName);
    if (k("uponSanitizeElement", e, {
      tagName: n,
      allowedTags: _
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || n === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return L(e), !0;
    if (!_[n] || J[n]) {
      if (!J[n] && vt(n) && (d.tagNameCheck instanceof RegExp && A(d.tagNameCheck, n) || d.tagNameCheck instanceof Function && d.tagNameCheck(n)))
        return !1;
      if (we && !X[n]) {
        var u = he(e) || e.parentNode, R = It(e) || e.childNodes;
        if (R && u)
          for (var g = R.length, y = g - 1; y >= 0; --y) {
            var $ = Dt(R[y], !0);
            $.__removalCount = (e.__removalCount || 0) + 1, u.insertBefore($, xt(e));
          }
      }
      return L(e), !0;
    }
    return e instanceof v && !Xt(e) || (n === "noscript" || n === "noembed" || n === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (L(e), !0) : (q && e.nodeType === 3 && (r = e.textContent, r = D(r, ye, " "), r = D(r, Ae, " "), r = D(r, ge, " "), e.textContent !== r && (re(a.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), k("afterSanitizeElements", e, null), !1);
  }, dt = function(e, r, n) {
    if (tt && (r === "id" || r === "name") && (n in i || n in Yt))
      return !1;
    if (!(Re && !be[r] && A(Ht, r))) {
      if (!(Je && A(Wt, r))) {
        if (!T[r] || be[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vt(e) && (d.tagNameCheck instanceof RegExp && A(d.tagNameCheck, e) || d.tagNameCheck instanceof Function && d.tagNameCheck(e)) && (d.attributeNameCheck instanceof RegExp && A(d.attributeNameCheck, r) || d.attributeNameCheck instanceof Function && d.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && d.allowCustomizedBuiltInElements && (d.tagNameCheck instanceof RegExp && A(d.tagNameCheck, n) || d.tagNameCheck instanceof Function && d.tagNameCheck(n)))
          ) return !1;
        } else if (!Me[r]) {
          if (!A(Se, D(n, Xe, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && fr(n, "data:") === 0 && nt[e])) {
              if (!(Qe && !A(zt, D(n, Xe, "")))) {
                if (n)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vt = function(e) {
    return e !== "annotation-xml" && At(e, Bt);
  }, ht = function(e) {
    var r, n, u, R;
    k("beforeSanitizeAttributes", e, null);
    var g = e.attributes;
    if (g) {
      var y = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: T
      };
      for (R = g.length; R--; ) {
        r = g[R];
        var $ = r, h = $.name, Pe = $.namespaceURI;
        if (n = h === "value" ? r.value : pr(r.value), u = E(h), y.attrName = u, y.attrValue = n, y.keepAttr = !0, y.forceKeepAttr = void 0, k("uponSanitizeAttribute", e, y), n = y.attrValue, !y.forceKeepAttr && (ue(h, e), !!y.keepAttr)) {
          if (!et && A(/\/>/i, n)) {
            ue(h, e);
            continue;
          }
          q && (n = D(n, ye, " "), n = D(n, Ae, " "), n = D(n, ge, " "));
          var _t = E(e.nodeName);
          if (dt(_t, u, n)) {
            if (rt && (u === "id" || u === "name") && (ue(h, e), n = Gt + n), Oe && A(/((--!?|])>)|<\/(style|title)/i, n)) {
              ue(h, e);
              continue;
            }
            if (C && W(z) === "object" && typeof z.getAttributeType == "function" && !Pe)
              switch (z.getAttributeType(_t, u)) {
                case "TrustedHTML": {
                  n = C.createHTML(n);
                  break;
                }
                case "TrustedScriptURL": {
                  n = C.createScriptURL(n);
                  break;
                }
              }
            try {
              Pe ? e.setAttributeNS(Pe, h, n) : e.setAttribute(h, n), pt(e) ? L(e) : yt(a.removed);
            } catch {
            }
          }
        }
      }
      k("afterSanitizeAttributes", e, null);
    }
  }, Kt = function s(e) {
    var r, n = ft(e);
    for (k("beforeSanitizeShadowDOM", e, null); r = n.nextNode(); )
      k("uponSanitizeShadowNode", r, null), !mt(r) && (r.content instanceof l && s(r.content), ht(r));
    k("afterSanitizeShadowDOM", e, null);
  };
  return a.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, n, u, R, g;
    if (Ce = !s, Ce && (s = "<!-->"), typeof s != "string" && !ee(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Fe("dirty is not a string, aborting");
      } else
        throw Fe("toString is not a function");
    if (!a.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ee(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Le || xe(e), a.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var y = E(s.nodeName);
        if (!_[y] || J[y])
          throw Fe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof f)
      r = ut("<!---->"), n = r.ownerDocument.importNode(s, !0), n.nodeType === 1 && n.nodeName === "BODY" || n.nodeName === "HTML" ? r = n : r.appendChild(n);
    else {
      if (!Y && !q && !B && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return C && ie ? C.createHTML(s) : s;
      if (r = ut(s), !r)
        return Y ? null : ie ? Te : "";
    }
    r && Ne && L(r.firstChild);
    for (var $ = ft(Q ? s : r); u = $.nextNode(); )
      u.nodeType === 3 && u === R || mt(u) || (u.content instanceof l && Kt(u.content), ht(u), R = u);
    if (R = null, Q)
      return s;
    if (Y) {
      if (oe)
        for (g = kt.call(r.ownerDocument); r.firstChild; )
          g.appendChild(r.firstChild);
      else
        g = r;
      return (T.shadowroot || T.shadowrootmod) && (g = Ut.call(o, g, !0)), g;
    }
    var h = B ? r.outerHTML : r.innerHTML;
    return B && _["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && A(br, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + h), q && (h = D(h, ye, " "), h = D(h, Ae, " "), h = D(h, ge, " ")), C && ie ? C.createHTML(h) : h;
  }, a.setConfig = function(s) {
    xe(s), Le = !0;
  }, a.clearConfig = function() {
    Z = null, Le = !1;
  }, a.isValidAttribute = function(s, e, r) {
    Z || xe({});
    var n = E(s), u = E(e);
    return dt(n, u, r);
  }, a.addHook = function(s, e) {
    typeof e == "function" && (I[s] = I[s] || [], re(I[s], e));
  }, a.removeHook = function(s) {
    if (I[s])
      return yt(I[s]);
  }, a.removeHooks = function(s) {
    I[s] && (I[s] = []);
  }, a.removeAllHooks = function() {
    I = {};
  }, a;
}
Mt();
var Ct = { exports: {} }, Be, Ot;
function Nr() {
  if (Ot) return Be;
  Ot = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = t, Be;
}
var Ge, Lt;
function wr() {
  if (Lt) return Ge;
  Lt = 1;
  var t = Nr();
  function a() {
  }
  function o() {
  }
  return o.resetWarningCache = a, Ge = function() {
    function i(f, v, p, M, O, U) {
      if (U !== t) {
        var H = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw H.name = "Invariant Violation", H;
      }
    }
    i.isRequired = i;
    function l() {
      return i;
    }
    var m = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: l,
      element: i,
      elementType: i,
      instanceOf: l,
      node: i,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: o,
      resetWarningCache: a
    };
    return m.PropTypes = m, m;
  }, Ge;
}
Ct.exports = wr()();
var Mr = Ct.exports;
const F = /* @__PURE__ */ Jt(Mr);
F.shape({
  event: F.string,
  action: F.string,
  name: F.string,
  region: F.string,
  section: F.string,
  component: F.string,
  type: F.string,
  text: F.string
});
const Cr = ({
  event: t = "",
  action: a = "",
  name: o = "",
  type: i = "",
  section: l = "",
  text: m = "",
  region: f = "",
  component: v = ""
}) => {
  const { dataLayer: p } = window, M = {
    event: t.toLowerCase(),
    action: a.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: f.toLowerCase(),
    section: l.toLowerCase(),
    text: m.toLowerCase(),
    component: v.toLowerCase()
  };
  p && p.push(M);
}, Dr = "staticMarkup";
function xr() {
  const a = Zt().indexOf(Dr) > -1 ? !0 : void 0;
  return {
    isBootstrap: a,
    isReact: a ? void 0 : !0
  };
}
const Ir = ({ gaData: t, prefix: a = "", children: o }) => {
  const { isReact: i } = xr(), { onClick: l, ...m } = o.props;
  if (i)
    return $e.cloneElement(o, {
      ...m,
      onClick: (p) => (Cr(t), l ? l(p) : !0)
    });
  let f = "";
  ["input", "header", "header-input"].includes(a) && (f = `-${a}`);
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
    ...m,
    onClick: l,
    ...v
  });
}, Pr = {
  name: "onclick",
  event: "collapse",
  type: "click",
  region: "main content"
}, Ur = ({ title: t, links: a }) => /* @__PURE__ */ S.jsxs("div", { className: "col-xl-3 col-lg-4 col-md-5 col-sm-12", children: [
  /* @__PURE__ */ S.jsx("h2", { children: t }),
  /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: "sidebar-toggler",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#sidebar-left",
      "aria-expanded": "false",
      "aria-controls": "sidebar-left",
      children: [
        /* @__PURE__ */ S.jsx("p", { children: "Select Section" }),
        /* @__PURE__ */ S.jsx("span", { className: "fas fa-chevron-up" })
      ]
    }
  ),
  /* @__PURE__ */ S.jsx(
    "nav",
    {
      id: "sidebar-left",
      className: "sidebar collapse",
      "aria-label": "Secondary",
      children: a.map((o, i) => o.items ? /* @__PURE__ */ S.jsxs("div", { className: "card card-foldable", children: [
        /* @__PURE__ */ S.jsx("div", { className: "card-header", children: /* @__PURE__ */ S.jsx(
          Ir,
          {
            gaData: { ...Pr, section: t },
            children: /* @__PURE__ */ S.jsxs(
              "a",
              {
                id: `card${i}`,
                className: "collapsed nav-link",
                href: `#cardBody${i}`,
                "data-bs-toggle": "collapse",
                "data-bs-target": `#cardBody${i}`,
                "aria-expanded": "false",
                "aria-controls": `cardBody${i}`,
                children: [
                  o.text,
                  /* @__PURE__ */ S.jsx("span", { className: "fas fa-chevron-down ms-1" })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ S.jsx(
          "div",
          {
            id: `cardBody${i}`,
            className: "collapse card-body",
            "aria-labelledby": `card${i}`,
            "data-bs-parent": ".sidebar",
            children: o.items.map((l) => /* @__PURE__ */ S.jsx(
              "a",
              {
                href: l.href,
                className: `nav-link${l.isActive ? " is-active" : ""}`,
                children: l.text
              },
              o.href
            ))
          }
        )
      ] }, i) : /* @__PURE__ */ S.jsx("div", { className: "nav-link-container", children: /* @__PURE__ */ S.jsx(
        "a",
        {
          className: `nav-link${o.isActive ? " is-active" : ""}`,
          href: o.href,
          children: o.text
        }
      ) }, i))
    }
  )
] });
export {
  Ur as SidebarMenu
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
