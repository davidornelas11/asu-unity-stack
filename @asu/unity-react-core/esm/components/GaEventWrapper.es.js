import Tt, { useId as qt } from "react";
function k(t) {
  "@babel/helpers - typeof";
  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, k(t);
}
function ze(t, a) {
  return ze = Object.setPrototypeOf || function(s, u) {
    return s.__proto__ = u, s;
  }, ze(t, a);
}
function Vt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ue(t, a, o) {
  return Vt() ? ue = Reflect.construct : ue = function(u, p, f) {
    var y = [null];
    y.push.apply(y, p);
    var b = Function.bind.apply(u, y), P = new b();
    return f && ze(P, f.prototype), P;
  }, ue.apply(null, arguments);
}
function N(t) {
  return Xt(t) || Kt(t) || Zt(t) || Jt();
}
function Xt(t) {
  if (Array.isArray(t)) return Ge(t);
}
function Kt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Zt(t, a) {
  if (t) {
    if (typeof t == "string") return Ge(t, a);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ge(t, a);
  }
}
function Ge(t, a) {
  (a == null || a > t.length) && (a = t.length);
  for (var o = 0, s = new Array(a); o < a; o++) s[o] = t[o];
  return s;
}
function Jt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Qt = Object.hasOwnProperty, vt = Object.setPrototypeOf, er = Object.isFrozen, tr = Object.getPrototypeOf, rr = Object.getOwnPropertyDescriptor, g = Object.freeze, O = Object.seal, ar = Object.create, Rt = typeof Reflect < "u" && Reflect, fe = Rt.apply, Be = Rt.construct;
fe || (fe = function(a, o, s) {
  return a.apply(o, s);
});
g || (g = function(a) {
  return a;
});
O || (O = function(a) {
  return a;
});
Be || (Be = function(a, o) {
  return ue(a, N(o));
});
var nr = L(Array.prototype.forEach), ht = L(Array.prototype.pop), K = L(Array.prototype.push), ce = L(String.prototype.toLowerCase), Ie = L(String.prototype.toString), _t = L(String.prototype.match), w = L(String.prototype.replace), or = L(String.prototype.indexOf), ir = L(String.prototype.trim), E = L(RegExp.prototype.test), xe = sr(TypeError);
function L(t) {
  return function(a) {
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
      s[u - 1] = arguments[u];
    return fe(t, a, s);
  };
}
function sr(t) {
  return function() {
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return Be(t, o);
  };
}
function l(t, a, o) {
  var s;
  o = (s = o) !== null && s !== void 0 ? s : ce, vt && vt(t, null);
  for (var u = a.length; u--; ) {
    var p = a[u];
    if (typeof p == "string") {
      var f = o(p);
      f !== p && (er(a) || (a[u] = f), p = f);
    }
    t[p] = !0;
  }
  return t;
}
function W(t) {
  var a = ar(null), o;
  for (o in t)
    fe(Qt, t, [o]) === !0 && (a[o] = t[o]);
  return a;
}
function se(t, a) {
  for (; t !== null; ) {
    var o = rr(t, a);
    if (o) {
      if (o.get)
        return L(o.get);
      if (typeof o.value == "function")
        return L(o.value);
    }
    t = tr(t);
  }
  function s(u) {
    return console.warn("fallback value for", u), null;
  }
  return s;
}
var Et = g(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pe = g(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ke = g(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lr = g(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Fe = g(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), ur = g(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), At = g(["#text"]), yt = g(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ue = g(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gt = g(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), le = g(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cr = O(/\{\{[\w\W]*|[\w\W]*\}\}/gm), fr = O(/<%[\w\W]*|[\w\W]*%>/gm), pr = O(/\${[\w\W]*}/gm), mr = O(/^data-[\-\w.\u00B7-\uFFFF]/), dr = O(/^aria-[\-\w]+$/), Tr = O(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), vr = O(/^(?:\w+script|data):/i), hr = O(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), _r = O(/^html$/i), Er = O(/^[a-z][.\w]*(-[.\w]+)+$/i), Ar = function() {
  return typeof window > "u" ? null : window;
}, yr = function(a, o) {
  if (k(a) !== "object" || typeof a.createPolicy != "function")
    return null;
  var s = null, u = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(u) && (s = o.currentScript.getAttribute(u));
  var p = "dompurify" + (s ? "#" + s : "");
  try {
    return a.createPolicy(p, {
      createHTML: function(y) {
        return y;
      },
      createScriptURL: function(y) {
        return y;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
};
function Ot() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ar(), a = function(e) {
    return Ot(e);
  };
  if (a.version = "2.5.7", a.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return a.isSupported = !1, a;
  var o = t.document, s = t.document, u = t.DocumentFragment, p = t.HTMLTemplateElement, f = t.Node, y = t.Element, b = t.NodeFilter, P = t.NamedNodeMap, $e = P === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : P, pe = t.HTMLFormElement, Z = t.DOMParser, J = t.trustedTypes, Q = y.prototype, Mt = se(Q, "cloneNode"), wt = se(Q, "nextSibling"), Nt = se(Q, "childNodes"), me = se(Q, "parentNode");
  if (typeof p == "function") {
    var de = s.createElement("template");
    de.content && de.content.ownerDocument && (s = de.content.ownerDocument);
  }
  var M = yr(J, o), Te = M ? M.createHTML("") : "", ee = s, ve = ee.implementation, Ct = ee.createNodeIterator, Dt = ee.createDocumentFragment, It = ee.getElementsByTagName, xt = o.importNode, je = {};
  try {
    je = W(s).documentMode ? s.documentMode : {};
  } catch {
  }
  var C = {};
  a.isSupported = typeof me == "function" && ve && ve.createHTMLDocument !== void 0 && je !== 9;
  var he = cr, _e = fr, Ee = pr, Pt = mr, kt = dr, Ft = vr, Ye = hr, Ut = Er, Ae = Tr, T = null, qe = l({}, [].concat(N(Et), N(Pe), N(ke), N(Fe), N(At))), v = null, Ve = l({}, [].concat(N(yt), N(Ue), N(gt), N(le))), m = Object.seal(Object.create(null, {
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
  })), q = null, ye = null, Xe = !0, ge = !0, Ke = !1, Ze = !0, z = !1, Se = !0, F = !1, be = !1, Re = !1, G = !1, te = !1, re = !1, Je = !0, Qe = !1, Ht = "user-content-", Oe = !0, V = !1, B = {}, $ = null, et = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), tt = null, rt = l({}, ["audio", "video", "img", "source", "image", "track"]), Le = null, at = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ae = "http://www.w3.org/1998/Math/MathML", ne = "http://www.w3.org/2000/svg", D = "http://www.w3.org/1999/xhtml", j = D, Me = !1, we = null, Wt = l({}, [ae, ne, D], Ie), U, zt = ["application/xhtml+xml", "text/html"], Gt = "text/html", h, Y = null, Bt = s.createElement("form"), nt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ne = function(e) {
    Y && Y === e || ((!e || k(e) !== "object") && (e = {}), e = W(e), U = // eslint-disable-next-line unicorn/prefer-includes
    zt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? U = Gt : U = e.PARSER_MEDIA_TYPE, h = U === "application/xhtml+xml" ? Ie : ce, T = "ALLOWED_TAGS" in e ? l({}, e.ALLOWED_TAGS, h) : qe, v = "ALLOWED_ATTR" in e ? l({}, e.ALLOWED_ATTR, h) : Ve, we = "ALLOWED_NAMESPACES" in e ? l({}, e.ALLOWED_NAMESPACES, Ie) : Wt, Le = "ADD_URI_SAFE_ATTR" in e ? l(
      W(at),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      h
      // eslint-disable-line indent
    ) : at, tt = "ADD_DATA_URI_TAGS" in e ? l(
      W(rt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      h
      // eslint-disable-line indent
    ) : rt, $ = "FORBID_CONTENTS" in e ? l({}, e.FORBID_CONTENTS, h) : et, q = "FORBID_TAGS" in e ? l({}, e.FORBID_TAGS, h) : {}, ye = "FORBID_ATTR" in e ? l({}, e.FORBID_ATTR, h) : {}, B = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Xe = e.ALLOW_ARIA_ATTR !== !1, ge = e.ALLOW_DATA_ATTR !== !1, Ke = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ze = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = e.SAFE_FOR_TEMPLATES || !1, Se = e.SAFE_FOR_XML !== !1, F = e.WHOLE_DOCUMENT || !1, G = e.RETURN_DOM || !1, te = e.RETURN_DOM_FRAGMENT || !1, re = e.RETURN_TRUSTED_TYPE || !1, Re = e.FORCE_BODY || !1, Je = e.SANITIZE_DOM !== !1, Qe = e.SANITIZE_NAMED_PROPS || !1, Oe = e.KEEP_CONTENT !== !1, V = e.IN_PLACE || !1, Ae = e.ALLOWED_URI_REGEXP || Ae, j = e.NAMESPACE || D, m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && nt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && nt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (ge = !1), te && (G = !0), B && (T = l({}, N(At)), v = [], B.html === !0 && (l(T, Et), l(v, yt)), B.svg === !0 && (l(T, Pe), l(v, Ue), l(v, le)), B.svgFilters === !0 && (l(T, ke), l(v, Ue), l(v, le)), B.mathMl === !0 && (l(T, Fe), l(v, gt), l(v, le))), e.ADD_TAGS && (T === qe && (T = W(T)), l(T, e.ADD_TAGS, h)), e.ADD_ATTR && (v === Ve && (v = W(v)), l(v, e.ADD_ATTR, h)), e.ADD_URI_SAFE_ATTR && l(Le, e.ADD_URI_SAFE_ATTR, h), e.FORBID_CONTENTS && ($ === et && ($ = W($)), l($, e.FORBID_CONTENTS, h)), Oe && (T["#text"] = !0), F && l(T, ["html", "head", "body"]), T.table && (l(T, ["tbody"]), delete q.tbody), g && g(e), Y = e);
  }, ot = l({}, ["mi", "mo", "mn", "ms", "mtext"]), it = l({}, ["annotation-xml"]), $t = l({}, ["title", "style", "font", "a", "script"]), oe = l({}, Pe);
  l(oe, ke), l(oe, lr);
  var Ce = l({}, Fe);
  l(Ce, ur);
  var jt = function(e) {
    var r = me(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: j,
      tagName: "template"
    });
    var n = ce(e.tagName), c = ce(r.tagName);
    return we[e.namespaceURI] ? e.namespaceURI === ne ? r.namespaceURI === D ? n === "svg" : r.namespaceURI === ae ? n === "svg" && (c === "annotation-xml" || ot[c]) : !!oe[n] : e.namespaceURI === ae ? r.namespaceURI === D ? n === "math" : r.namespaceURI === ne ? n === "math" && it[c] : !!Ce[n] : e.namespaceURI === D ? r.namespaceURI === ne && !it[c] || r.namespaceURI === ae && !ot[c] ? !1 : !Ce[n] && ($t[n] || !oe[n]) : !!(U === "application/xhtml+xml" && we[e.namespaceURI]) : !1;
  }, R = function(e) {
    K(a.removed, {
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
  }, ie = function(e, r) {
    try {
      K(a.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      K(a.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !v[e])
      if (G || te)
        try {
          R(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, st = function(e) {
    var r, n;
    if (Re)
      e = "<remove></remove>" + e;
    else {
      var c = _t(e, /^[\r\n\t ]+/);
      n = c && c[0];
    }
    U === "application/xhtml+xml" && j === D && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var S = M ? M.createHTML(e) : e;
    if (j === D)
      try {
        r = new Z().parseFromString(S, U);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ve.createDocument(j, "template", null);
      try {
        r.documentElement.innerHTML = Me ? Te : S;
      } catch {
      }
    }
    var A = r.body || r.documentElement;
    return e && n && A.insertBefore(s.createTextNode(n), A.childNodes[0] || null), j === D ? It.call(r, F ? "html" : "body")[0] : F ? r.documentElement : A;
  }, lt = function(e) {
    return Ct.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      b.SHOW_ELEMENT | b.SHOW_COMMENT | b.SHOW_TEXT | b.SHOW_PROCESSING_INSTRUCTION | b.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ut = function(e) {
    return e instanceof pe && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof $e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, X = function(e) {
    return k(f) === "object" ? e instanceof f : e && k(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, I = function(e, r, n) {
    C[e] && nr(C[e], function(c) {
      c.call(a, r, n, Y);
    });
  }, ct = function(e) {
    var r;
    if (I("beforeSanitizeElements", e, null), ut(e) || E(/[\u0080-\uFFFF]/, e.nodeName))
      return R(e), !0;
    var n = h(e.nodeName);
    if (I("uponSanitizeElement", e, {
      tagName: n,
      allowedTags: T
    }), e.hasChildNodes() && !X(e.firstElementChild) && (!X(e.content) || !X(e.content.firstElementChild)) && E(/<[/\w]/g, e.innerHTML) && E(/<[/\w]/g, e.textContent) || n === "select" && E(/<template/i, e.innerHTML) || e.nodeType === 7 || Se && e.nodeType === 8 && E(/<[/\w]/g, e.data))
      return R(e), !0;
    if (!T[n] || q[n]) {
      if (!q[n] && pt(n) && (m.tagNameCheck instanceof RegExp && E(m.tagNameCheck, n) || m.tagNameCheck instanceof Function && m.tagNameCheck(n)))
        return !1;
      if (Oe && !$[n]) {
        var c = me(e) || e.parentNode, S = Nt(e) || e.childNodes;
        if (S && c)
          for (var A = S.length, _ = A - 1; _ >= 0; --_) {
            var H = Mt(S[_], !0);
            H.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(H, wt(e));
          }
      }
      return R(e), !0;
    }
    return e instanceof y && !jt(e) || (n === "noscript" || n === "noembed" || n === "noframes") && E(/<\/no(script|embed|frames)/i, e.innerHTML) ? (R(e), !0) : (z && e.nodeType === 3 && (r = e.textContent, r = w(r, he, " "), r = w(r, _e, " "), r = w(r, Ee, " "), e.textContent !== r && (K(a.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), I("afterSanitizeElements", e, null), !1);
  }, ft = function(e, r, n) {
    if (Je && (r === "id" || r === "name") && (n in s || n in Bt))
      return !1;
    if (!(ge && !ye[r] && E(Pt, r))) {
      if (!(Xe && E(kt, r))) {
        if (!v[r] || ye[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(pt(e) && (m.tagNameCheck instanceof RegExp && E(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && E(m.attributeNameCheck, r) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && E(m.tagNameCheck, n) || m.tagNameCheck instanceof Function && m.tagNameCheck(n)))
          ) return !1;
        } else if (!Le[r]) {
          if (!E(Ae, w(n, Ye, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && or(n, "data:") === 0 && tt[e])) {
              if (!(Ke && !E(Ft, w(n, Ye, "")))) {
                if (n)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pt = function(e) {
    return e !== "annotation-xml" && _t(e, Ut);
  }, mt = function(e) {
    var r, n, c, S;
    I("beforeSanitizeAttributes", e, null);
    var A = e.attributes;
    if (A) {
      var _ = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: v
      };
      for (S = A.length; S--; ) {
        r = A[S];
        var H = r, d = H.name, De = H.namespaceURI;
        if (n = d === "value" ? r.value : ir(r.value), c = h(d), _.attrName = c, _.attrValue = n, _.keepAttr = !0, _.forceKeepAttr = void 0, I("uponSanitizeAttribute", e, _), n = _.attrValue, !_.forceKeepAttr && (ie(d, e), !!_.keepAttr)) {
          if (!Ze && E(/\/>/i, n)) {
            ie(d, e);
            continue;
          }
          z && (n = w(n, he, " "), n = w(n, _e, " "), n = w(n, Ee, " "));
          var dt = h(e.nodeName);
          if (ft(dt, c, n)) {
            if (Qe && (c === "id" || c === "name") && (ie(d, e), n = Ht + n), Se && E(/((--!?|])>)|<\/(style|title)/i, n)) {
              ie(d, e);
              continue;
            }
            if (M && k(J) === "object" && typeof J.getAttributeType == "function" && !De)
              switch (J.getAttributeType(dt, c)) {
                case "TrustedHTML": {
                  n = M.createHTML(n);
                  break;
                }
                case "TrustedScriptURL": {
                  n = M.createScriptURL(n);
                  break;
                }
              }
            try {
              De ? e.setAttributeNS(De, d, n) : e.setAttribute(d, n), ut(e) ? R(e) : ht(a.removed);
            } catch {
            }
          }
        }
      }
      I("afterSanitizeAttributes", e, null);
    }
  }, Yt = function i(e) {
    var r, n = lt(e);
    for (I("beforeSanitizeShadowDOM", e, null); r = n.nextNode(); )
      I("uponSanitizeShadowNode", r, null), !ct(r) && (r.content instanceof u && i(r.content), mt(r));
    I("afterSanitizeShadowDOM", e, null);
  };
  return a.sanitize = function(i) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, n, c, S, A;
    if (Me = !i, Me && (i = "<!-->"), typeof i != "string" && !X(i))
      if (typeof i.toString == "function") {
        if (i = i.toString(), typeof i != "string")
          throw xe("dirty is not a string, aborting");
      } else
        throw xe("toString is not a function");
    if (!a.isSupported) {
      if (k(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof i == "string")
          return t.toStaticHTML(i);
        if (X(i))
          return t.toStaticHTML(i.outerHTML);
      }
      return i;
    }
    if (be || Ne(e), a.removed = [], typeof i == "string" && (V = !1), V) {
      if (i.nodeName) {
        var _ = h(i.nodeName);
        if (!T[_] || q[_])
          throw xe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (i instanceof f)
      r = st("<!---->"), n = r.ownerDocument.importNode(i, !0), n.nodeType === 1 && n.nodeName === "BODY" || n.nodeName === "HTML" ? r = n : r.appendChild(n);
    else {
      if (!G && !z && !F && // eslint-disable-next-line unicorn/prefer-includes
      i.indexOf("<") === -1)
        return M && re ? M.createHTML(i) : i;
      if (r = st(i), !r)
        return G ? null : re ? Te : "";
    }
    r && Re && R(r.firstChild);
    for (var H = lt(V ? i : r); c = H.nextNode(); )
      c.nodeType === 3 && c === S || ct(c) || (c.content instanceof u && Yt(c.content), mt(c), S = c);
    if (S = null, V)
      return i;
    if (G) {
      if (te)
        for (A = Dt.call(r.ownerDocument); r.firstChild; )
          A.appendChild(r.firstChild);
      else
        A = r;
      return (v.shadowroot || v.shadowrootmod) && (A = xt.call(o, A, !0)), A;
    }
    var d = F ? r.outerHTML : r.innerHTML;
    return F && T["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && E(_r, r.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + d), z && (d = w(d, he, " "), d = w(d, _e, " "), d = w(d, Ee, " ")), M && re ? M.createHTML(d) : d;
  }, a.setConfig = function(i) {
    Ne(i), be = !0;
  }, a.clearConfig = function() {
    Y = null, be = !1;
  }, a.isValidAttribute = function(i, e, r) {
    Y || Ne({});
    var n = h(i), c = h(e);
    return ft(n, c, r);
  }, a.addHook = function(i, e) {
    typeof e == "function" && (C[i] = C[i] || [], K(C[i], e));
  }, a.removeHook = function(i) {
    if (C[i])
      return ht(C[i]);
  }, a.removeHooks = function(i) {
    C[i] && (C[i] = []);
  }, a.removeAllHooks = function() {
    C = {};
  }, a;
}
Ot();
function gr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Lt = { exports: {} }, He, St;
function Sr() {
  if (St) return He;
  St = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return He = t, He;
}
var We, bt;
function br() {
  if (bt) return We;
  bt = 1;
  var t = Sr();
  function a() {
  }
  function o() {
  }
  return o.resetWarningCache = a, We = function() {
    function s(f, y, b, P, $e, pe) {
      if (pe !== t) {
        var Z = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Z.name = "Invariant Violation", Z;
      }
    }
    s.isRequired = s;
    function u() {
      return s;
    }
    var p = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: u,
      element: s,
      elementType: s,
      instanceOf: u,
      node: s,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: o,
      resetWarningCache: a
    };
    return p.PropTypes = p, p;
  }, We;
}
Lt.exports = br()();
var Rr = Lt.exports;
const x = /* @__PURE__ */ gr(Rr);
x.shape({
  event: x.string,
  action: x.string,
  name: x.string,
  region: x.string,
  section: x.string,
  component: x.string,
  type: x.string,
  text: x.string
});
const Or = ({
  event: t = "",
  action: a = "",
  name: o = "",
  type: s = "",
  section: u = "",
  text: p = "",
  region: f = "",
  component: y = ""
}) => {
  const { dataLayer: b } = window, P = {
    event: t.toLowerCase(),
    action: a.toLowerCase(),
    name: o.toLowerCase(),
    type: s.toLowerCase(),
    region: f.toLowerCase(),
    section: u.toLowerCase(),
    text: p.toLowerCase(),
    component: y.toLowerCase()
  };
  b && b.push(P);
}, Lr = "staticMarkup";
function Mr() {
  const a = qt().indexOf(Lr) > -1 ? !0 : void 0;
  return {
    isBootstrap: a,
    isReact: a ? void 0 : !0
  };
}
const Cr = ({ gaData: t, prefix: a = "", children: o }) => {
  const { isReact: s } = Mr(), { onClick: u, ...p } = o.props;
  if (s)
    return Tt.cloneElement(o, {
      ...p,
      onClick: (b) => (Or(t), u ? u(b) : !0)
    });
  let f = "";
  ["input", "header", "header-input"].includes(a) && (f = `-${a}`);
  const y = {
    [`data-ga${f}`]: t.text,
    [`data-ga${f}-name`]: t.name,
    [`data-ga${f}-event`]: t.event,
    [`data-ga${f}-action`]: t.action,
    [`data-ga${f}-type`]: t.type,
    [`data-ga${f}-region`]: t.region,
    [`data-ga${f}-section`]: t.section,
    [`data-ga${f}-component`]: t.component
  };
  return Tt.cloneElement(o, {
    ...p,
    onClick: u,
    ...y
  });
};
export {
  Cr as GaEventWrapper
};
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
