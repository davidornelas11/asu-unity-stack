import xr, { useId as Qn } from "react";
function eo(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Bn = { exports: {} }, gr = {};
var Cn;
function to() {
  if (Cn) return gr;
  Cn = 1;
  var v = xr, u = Symbol.for("react.element"), g = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(L, k, E) {
    var re, U = {}, Me = null, Oe = null;
    E !== void 0 && (Me = "" + E), k.key !== void 0 && (Me = "" + k.key), k.ref !== void 0 && (Oe = k.ref);
    for (re in k) T.call(k, re) && !R.hasOwnProperty(re) && (U[re] = k[re]);
    if (L && L.defaultProps) for (re in k = L.defaultProps, k) U[re] === void 0 && (U[re] = k[re]);
    return { $$typeof: u, type: L, key: Me, ref: Oe, props: U, _owner: y.current };
  }
  return gr.Fragment = g, gr.jsx = D, gr.jsxs = D, gr;
}
Bn.exports = to();
var de = Bn.exports;
function Mt(v) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Mt(v);
}
function ln(v, u) {
  return ln = Object.setPrototypeOf || function(T, y) {
    return T.__proto__ = y, T;
  }, ln(v, u);
}
function ro() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zr(v, u, g) {
  return ro() ? zr = Reflect.construct : zr = function(y, R, D) {
    var L = [null];
    L.push.apply(L, R);
    var k = Function.bind.apply(y, L), E = new k();
    return D && ln(E, D.prototype), E;
  }, zr.apply(null, arguments);
}
function Xe(v) {
  return no(v) || oo(v) || io(v) || lo();
}
function no(v) {
  if (Array.isArray(v)) return an(v);
}
function oo(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function io(v, u) {
  if (v) {
    if (typeof v == "string") return an(v, u);
    var g = Object.prototype.toString.call(v).slice(8, -1);
    if (g === "Object" && v.constructor && (g = v.constructor.name), g === "Map" || g === "Set") return Array.from(v);
    if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return an(v, u);
  }
}
function an(v, u) {
  (u == null || u > v.length) && (u = v.length);
  for (var g = 0, T = new Array(u); g < u; g++) T[g] = v[g];
  return T;
}
function lo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ao = Object.hasOwnProperty, Rn = Object.setPrototypeOf, so = Object.isFrozen, uo = Object.getPrototypeOf, co = Object.getOwnPropertyDescriptor, he = Object.freeze, Ne = Object.seal, po = Object.create, zn = typeof Reflect < "u" && Reflect, Hr = zn.apply, sn = zn.construct;
Hr || (Hr = function(u, g, T) {
  return u.apply(g, T);
});
he || (he = function(u) {
  return u;
});
Ne || (Ne = function(u) {
  return u;
});
sn || (sn = function(u, g) {
  return zr(u, Xe(g));
});
var fo = De(Array.prototype.forEach), An = De(Array.prototype.pop), Sr = De(Array.prototype.push), Ur = De(String.prototype.toLowerCase), Jr = De(String.prototype.toString), bn = De(String.prototype.match), qe = De(String.prototype.replace), ho = De(String.prototype.indexOf), mo = De(String.prototype.trim), se = De(RegExp.prototype.test), Kr = vo(TypeError);
function De(v) {
  return function(u) {
    for (var g = arguments.length, T = new Array(g > 1 ? g - 1 : 0), y = 1; y < g; y++)
      T[y - 1] = arguments[y];
    return Hr(v, u, T);
  };
}
function vo(v) {
  return function() {
    for (var u = arguments.length, g = new Array(u), T = 0; T < u; T++)
      g[T] = arguments[T];
    return sn(v, g);
  };
}
function I(v, u, g) {
  var T;
  g = (T = g) !== null && T !== void 0 ? T : Ur, Rn && Rn(v, null);
  for (var y = u.length; y--; ) {
    var R = u[y];
    if (typeof R == "string") {
      var D = g(R);
      D !== R && (so(u) || (u[y] = D), R = D);
    }
    v[R] = !0;
  }
  return v;
}
function Zt(v) {
  var u = po(null), g;
  for (g in v)
    Hr(ao, v, [g]) === !0 && (u[g] = v[g]);
  return u;
}
function Nr(v, u) {
  for (; v !== null; ) {
    var g = co(v, u);
    if (g) {
      if (g.get)
        return De(g.get);
      if (typeof g.value == "function")
        return De(g.value);
    }
    v = uo(v);
  }
  function T(y) {
    return console.warn("fallback value for", y), null;
  }
  return T;
}
var Fn = he(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Qr = he(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), en = he(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yo = he(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), tn = he(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), go = he(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Mn = he(["#text"]), On = he(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), rn = he(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), In = he(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = he(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), So = Ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm), xo = Ne(/<%[\w\W]*|[\w\W]*%>/gm), Eo = Ne(/\${[\w\W]*}/gm), wo = Ne(/^data-[\-\w.\u00B7-\uFFFF]/), To = Ne(/^aria-[\-\w]+$/), ko = Ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), _o = Ne(/^(?:\w+script|data):/i), Co = Ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ro = Ne(/^html$/i), Ao = Ne(/^[a-z][.\w]*(-[.\w]+)+$/i), bo = function() {
  return typeof window > "u" ? null : window;
}, Fo = function(u, g) {
  if (Mt(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var T = null, y = "data-tt-policy-suffix";
  g.currentScript && g.currentScript.hasAttribute(y) && (T = g.currentScript.getAttribute(y));
  var R = "dompurify" + (T ? "#" + T : "");
  try {
    return u.createPolicy(R, {
      createHTML: function(L) {
        return L;
      },
      createScriptURL: function(L) {
        return L;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + R + " could not be created."), null;
  }
};
function Un() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bo(), u = function(s) {
    return Un(s);
  };
  if (u.version = "2.5.7", u.removed = [], !v || !v.document || v.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var g = v.document, T = v.document, y = v.DocumentFragment, R = v.HTMLTemplateElement, D = v.Node, L = v.Element, k = v.NodeFilter, E = v.NamedNodeMap, re = E === void 0 ? v.NamedNodeMap || v.MozNamedAttrMap : E, U = v.HTMLFormElement, Me = v.DOMParser, Oe = v.trustedTypes, Y = L.prototype, Kt = Nr(Y, "cloneNode"), ne = Nr(Y, "nextSibling"), Z = Nr(Y, "childNodes"), le = Nr(Y, "parentNode");
  if (typeof R == "function") {
    var Qe = T.createElement("template");
    Qe.content && Qe.content.ownerDocument && (T = Qe.content.ownerDocument);
  }
  var oe = Fo(Oe, g), mt = oe ? oe.createHTML("") : "", ee = T, H = ee.implementation, lr = ee.createNodeIterator, Ot = ee.createDocumentFragment, It = ee.getElementsByTagName, Qt = g.importNode, pe = {};
  try {
    pe = Zt(T).documentMode ? T.documentMode : {};
  } catch {
  }
  var me = {};
  u.isSupported = typeof le == "function" && H && H.createHTMLDocument !== void 0 && pe !== 9;
  var vt = So, yt = xo, Lt = Eo, ar = wo, Pt = To, ve = _o, Nt = Co, et = Ao, tt = ko, G = null, gt = I({}, [].concat(Xe(Fn), Xe(Qr), Xe(en), Xe(tn), Xe(Mn))), J = null, St = I({}, [].concat(Xe(On), Xe(rn), Xe(In), Xe(Dr))), $ = Object.seal(Object.create(null, {
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
  })), Be = null, fe = null, Ie = !0, ye = !0, xt = !1, te = !0, ae = !1, Et = !0, ge = !1, Dt = !1, Ye = !1, Se = !1, ze = !1, rt = !1, we = !0, ie = !1, er = "user-content-", wt = !0, Ze = !1, Ue = {}, Te = null, Bt = I({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), zt = null, tr = I({}, ["audio", "video", "img", "source", "image", "track"]), nt = null, ot = I({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", kt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml", Je = ke, Ut = !1, ue = null, Ht = I({}, [Tt, kt, ke], Jr), xe, B = ["application/xhtml+xml", "text/html"], it = "text/html", W, Ee = null, Le = T.createElement("form"), lt = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, _e = function(s) {
    Ee && Ee === s || ((!s || Mt(s) !== "object") && (s = {}), s = Zt(s), xe = // eslint-disable-next-line unicorn/prefer-includes
    B.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? xe = it : xe = s.PARSER_MEDIA_TYPE, W = xe === "application/xhtml+xml" ? Jr : Ur, G = "ALLOWED_TAGS" in s ? I({}, s.ALLOWED_TAGS, W) : gt, J = "ALLOWED_ATTR" in s ? I({}, s.ALLOWED_ATTR, W) : St, ue = "ALLOWED_NAMESPACES" in s ? I({}, s.ALLOWED_NAMESPACES, Jr) : Ht, nt = "ADD_URI_SAFE_ATTR" in s ? I(
      Zt(ot),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      W
      // eslint-disable-line indent
    ) : ot, zt = "ADD_DATA_URI_TAGS" in s ? I(
      Zt(tr),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      W
      // eslint-disable-line indent
    ) : tr, Te = "FORBID_CONTENTS" in s ? I({}, s.FORBID_CONTENTS, W) : Bt, Be = "FORBID_TAGS" in s ? I({}, s.FORBID_TAGS, W) : {}, fe = "FORBID_ATTR" in s ? I({}, s.FORBID_ATTR, W) : {}, Ue = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ie = s.ALLOW_ARIA_ATTR !== !1, ye = s.ALLOW_DATA_ATTR !== !1, xt = s.ALLOW_UNKNOWN_PROTOCOLS || !1, te = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ae = s.SAFE_FOR_TEMPLATES || !1, Et = s.SAFE_FOR_XML !== !1, ge = s.WHOLE_DOCUMENT || !1, Se = s.RETURN_DOM || !1, ze = s.RETURN_DOM_FRAGMENT || !1, rt = s.RETURN_TRUSTED_TYPE || !1, Ye = s.FORCE_BODY || !1, we = s.SANITIZE_DOM !== !1, ie = s.SANITIZE_NAMED_PROPS || !1, wt = s.KEEP_CONTENT !== !1, Ze = s.IN_PLACE || !1, tt = s.ALLOWED_URI_REGEXP || tt, Je = s.NAMESPACE || ke, $ = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ae && (ye = !1), ze && (Se = !0), Ue && (G = I({}, Xe(Mn)), J = [], Ue.html === !0 && (I(G, Fn), I(J, On)), Ue.svg === !0 && (I(G, Qr), I(J, rn), I(J, Dr)), Ue.svgFilters === !0 && (I(G, en), I(J, rn), I(J, Dr)), Ue.mathMl === !0 && (I(G, tn), I(J, In), I(J, Dr))), s.ADD_TAGS && (G === gt && (G = Zt(G)), I(G, s.ADD_TAGS, W)), s.ADD_ATTR && (J === St && (J = Zt(J)), I(J, s.ADD_ATTR, W)), s.ADD_URI_SAFE_ATTR && I(nt, s.ADD_URI_SAFE_ATTR, W), s.FORBID_CONTENTS && (Te === Bt && (Te = Zt(Te)), I(Te, s.FORBID_CONTENTS, W)), wt && (G["#text"] = !0), ge && I(G, ["html", "head", "body"]), G.table && (I(G, ["tbody"]), delete Be.tbody), he && he(s), Ee = s);
  }, $t = I({}, ["mi", "mo", "mn", "ms", "mtext"]), _t = I({}, ["annotation-xml"]), jt = I({}, ["title", "style", "font", "a", "script"]), at = I({}, Qr);
  I(at, en), I(at, yo);
  var Ct = I({}, tn);
  I(Ct, go);
  var rr = function(s) {
    var S = le(s);
    (!S || !S.tagName) && (S = {
      namespaceURI: Je,
      tagName: "template"
    });
    var _ = Ur(s.tagName), N = Ur(S.tagName);
    return ue[s.namespaceURI] ? s.namespaceURI === kt ? S.namespaceURI === ke ? _ === "svg" : S.namespaceURI === Tt ? _ === "svg" && (N === "annotation-xml" || $t[N]) : !!at[_] : s.namespaceURI === Tt ? S.namespaceURI === ke ? _ === "math" : S.namespaceURI === kt ? _ === "math" && _t[N] : !!Ct[_] : s.namespaceURI === ke ? S.namespaceURI === kt && !_t[N] || S.namespaceURI === Tt && !$t[N] ? !1 : !Ct[_] && (jt[_] || !at[_]) : !!(xe === "application/xhtml+xml" && ue[s.namespaceURI]) : !1;
  }, ce = function(s) {
    Sr(u.removed, {
      element: s
    });
    try {
      s.parentNode.removeChild(s);
    } catch {
      try {
        s.outerHTML = mt;
      } catch {
        s.remove();
      }
    }
  }, Rt = function(s, S) {
    try {
      Sr(u.removed, {
        attribute: S.getAttributeNode(s),
        from: S
      });
    } catch {
      Sr(u.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(s), s === "is" && !J[s])
      if (Se || ze)
        try {
          ce(S);
        } catch {
        }
      else
        try {
          S.setAttribute(s, "");
        } catch {
        }
  }, st = function(s) {
    var S, _;
    if (Ye)
      s = "<remove></remove>" + s;
    else {
      var N = bn(s, /^[\r\n\t ]+/);
      _ = N && N[0];
    }
    xe === "application/xhtml+xml" && Je === ke && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var z = oe ? oe.createHTML(s) : s;
    if (Je === ke)
      try {
        S = new Me().parseFromString(z, xe);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = H.createDocument(Je, "template", null);
      try {
        S.documentElement.innerHTML = Ut ? mt : z;
      } catch {
      }
    }
    var Q = S.body || S.documentElement;
    return s && _ && Q.insertBefore(T.createTextNode(_), Q.childNodes[0] || null), Je === ke ? It.call(S, ge ? "html" : "body")[0] : ge ? S.documentElement : Q;
  }, Wt = function(s) {
    return lr.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      k.SHOW_ELEMENT | k.SHOW_COMMENT | k.SHOW_TEXT | k.SHOW_PROCESSING_INSTRUCTION | k.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ut = function(s) {
    return s instanceof U && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof re) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, He = function(s) {
    return Mt(D) === "object" ? s instanceof D : s && Mt(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Ce = function(s, S, _) {
    me[s] && fo(me[s], function(N) {
      N.call(u, S, _, Ee);
    });
  }, Ke = function(s) {
    var S;
    if (Ce("beforeSanitizeElements", s, null), ut(s) || se(/[\u0080-\uFFFF]/, s.nodeName))
      return ce(s), !0;
    var _ = W(s.nodeName);
    if (Ce("uponSanitizeElement", s, {
      tagName: _,
      allowedTags: G
    }), s.hasChildNodes() && !He(s.firstElementChild) && (!He(s.content) || !He(s.content.firstElementChild)) && se(/<[/\w]/g, s.innerHTML) && se(/<[/\w]/g, s.textContent) || _ === "select" && se(/<template/i, s.innerHTML) || s.nodeType === 7 || Et && s.nodeType === 8 && se(/<[/\w]/g, s.data))
      return ce(s), !0;
    if (!G[_] || Be[_]) {
      if (!Be[_] && At(_) && ($.tagNameCheck instanceof RegExp && se($.tagNameCheck, _) || $.tagNameCheck instanceof Function && $.tagNameCheck(_)))
        return !1;
      if (wt && !Te[_]) {
        var N = le(s) || s.parentNode, z = Z(s) || s.childNodes;
        if (z && N)
          for (var Q = z.length, K = Q - 1; K >= 0; --K) {
            var Re = Kt(z[K], !0);
            Re.__removalCount = (s.__removalCount || 0) + 1, N.insertBefore(Re, ne(s));
          }
      }
      return ce(s), !0;
    }
    return s instanceof L && !rr(s) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && se(/<\/no(script|embed|frames)/i, s.innerHTML) ? (ce(s), !0) : (ae && s.nodeType === 3 && (S = s.textContent, S = qe(S, vt, " "), S = qe(S, yt, " "), S = qe(S, Lt, " "), s.textContent !== S && (Sr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = S)), Ce("afterSanitizeElements", s, null), !1);
  }, nr = function(s, S, _) {
    if (we && (S === "id" || S === "name") && (_ in T || _ in Le))
      return !1;
    if (!(ye && !fe[S] && se(ar, S))) {
      if (!(Ie && se(Pt, S))) {
        if (!J[S] || fe[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(s) && ($.tagNameCheck instanceof RegExp && se($.tagNameCheck, s) || $.tagNameCheck instanceof Function && $.tagNameCheck(s)) && ($.attributeNameCheck instanceof RegExp && se($.attributeNameCheck, S) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && se($.tagNameCheck, _) || $.tagNameCheck instanceof Function && $.tagNameCheck(_)))
          ) return !1;
        } else if (!nt[S]) {
          if (!se(tt, qe(_, Nt, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && s !== "script" && ho(_, "data:") === 0 && zt[s])) {
              if (!(xt && !se(ve, qe(_, Nt, "")))) {
                if (_)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, At = function(s) {
    return s !== "annotation-xml" && bn(s, et);
  }, ct = function(s) {
    var S, _, N, z;
    Ce("beforeSanitizeAttributes", s, null);
    var Q = s.attributes;
    if (Q) {
      var K = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: J
      };
      for (z = Q.length; z--; ) {
        S = Q[z];
        var Re = S, q = Re.name, Pe = Re.namespaceURI;
        if (_ = q === "value" ? S.value : mo(S.value), N = W(q), K.attrName = N, K.attrValue = _, K.keepAttr = !0, K.forceKeepAttr = void 0, Ce("uponSanitizeAttribute", s, K), _ = K.attrValue, !K.forceKeepAttr && (Rt(q, s), !!K.keepAttr)) {
          if (!te && se(/\/>/i, _)) {
            Rt(q, s);
            continue;
          }
          ae && (_ = qe(_, vt, " "), _ = qe(_, yt, " "), _ = qe(_, Lt, " "));
          var $e = W(s.nodeName);
          if (nr($e, N, _)) {
            if (ie && (N === "id" || N === "name") && (Rt(q, s), _ = er + _), Et && se(/((--!?|])>)|<\/(style|title)/i, _)) {
              Rt(q, s);
              continue;
            }
            if (oe && Mt(Oe) === "object" && typeof Oe.getAttributeType == "function" && !Pe)
              switch (Oe.getAttributeType($e, N)) {
                case "TrustedHTML": {
                  _ = oe.createHTML(_);
                  break;
                }
                case "TrustedScriptURL": {
                  _ = oe.createScriptURL(_);
                  break;
                }
              }
            try {
              Pe ? s.setAttributeNS(Pe, q, _) : s.setAttribute(q, _), ut(s) ? ce(s) : An(u.removed);
            } catch {
            }
          }
        }
      }
      Ce("afterSanitizeAttributes", s, null);
    }
  }, pt = function C(s) {
    var S, _ = Wt(s);
    for (Ce("beforeSanitizeShadowDOM", s, null); S = _.nextNode(); )
      Ce("uponSanitizeShadowNode", S, null), !Ke(S) && (S.content instanceof y && C(S.content), ct(S));
    Ce("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(C) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, _, N, z, Q;
    if (Ut = !C, Ut && (C = "<!-->"), typeof C != "string" && !He(C))
      if (typeof C.toString == "function") {
        if (C = C.toString(), typeof C != "string")
          throw Kr("dirty is not a string, aborting");
      } else
        throw Kr("toString is not a function");
    if (!u.isSupported) {
      if (Mt(v.toStaticHTML) === "object" || typeof v.toStaticHTML == "function") {
        if (typeof C == "string")
          return v.toStaticHTML(C);
        if (He(C))
          return v.toStaticHTML(C.outerHTML);
      }
      return C;
    }
    if (Dt || _e(s), u.removed = [], typeof C == "string" && (Ze = !1), Ze) {
      if (C.nodeName) {
        var K = W(C.nodeName);
        if (!G[K] || Be[K])
          throw Kr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (C instanceof D)
      S = st("<!---->"), _ = S.ownerDocument.importNode(C, !0), _.nodeType === 1 && _.nodeName === "BODY" || _.nodeName === "HTML" ? S = _ : S.appendChild(_);
    else {
      if (!Se && !ae && !ge && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return oe && rt ? oe.createHTML(C) : C;
      if (S = st(C), !S)
        return Se ? null : rt ? mt : "";
    }
    S && Ye && ce(S.firstChild);
    for (var Re = Wt(Ze ? C : S); N = Re.nextNode(); )
      N.nodeType === 3 && N === z || Ke(N) || (N.content instanceof y && pt(N.content), ct(N), z = N);
    if (z = null, Ze)
      return C;
    if (Se) {
      if (ze)
        for (Q = Ot.call(S.ownerDocument); S.firstChild; )
          Q.appendChild(S.firstChild);
      else
        Q = S;
      return (J.shadowroot || J.shadowrootmod) && (Q = Qt.call(g, Q, !0)), Q;
    }
    var q = ge ? S.outerHTML : S.innerHTML;
    return ge && G["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && se(Ro, S.ownerDocument.doctype.name) && (q = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + q), ae && (q = qe(q, vt, " "), q = qe(q, yt, " "), q = qe(q, Lt, " ")), oe && rt ? oe.createHTML(q) : q;
  }, u.setConfig = function(C) {
    _e(C), Dt = !0;
  }, u.clearConfig = function() {
    Ee = null, Dt = !1;
  }, u.isValidAttribute = function(C, s, S) {
    Ee || _e({});
    var _ = W(C), N = W(s);
    return nr(_, N, S);
  }, u.addHook = function(C, s) {
    typeof s == "function" && (me[C] = me[C] || [], Sr(me[C], s));
  }, u.removeHook = function(C) {
    if (me[C])
      return An(me[C]);
  }, u.removeHooks = function(C) {
    me[C] && (me[C] = []);
  }, u.removeAllHooks = function() {
    me = {};
  }, u;
}
Un();
var Hn = { exports: {} }, nn, Ln;
function Mo() {
  if (Ln) return nn;
  Ln = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nn = v, nn;
}
var on, Pn;
function Oo() {
  if (Pn) return on;
  Pn = 1;
  var v = Mo();
  function u() {
  }
  function g() {
  }
  return g.resetWarningCache = u, on = function() {
    function T(D, L, k, E, re, U) {
      if (U !== v) {
        var Me = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Me.name = "Invariant Violation", Me;
      }
    }
    T.isRequired = T;
    function y() {
      return T;
    }
    var R = {
      array: T,
      bigint: T,
      bool: T,
      func: T,
      number: T,
      object: T,
      string: T,
      symbol: T,
      any: T,
      arrayOf: y,
      element: T,
      elementType: T,
      instanceOf: y,
      node: T,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: g,
      resetWarningCache: u
    };
    return R.PropTypes = R, R;
  }, on;
}
Hn.exports = Oo()();
var Io = Hn.exports;
const ht = /* @__PURE__ */ eo(Io);
ht.shape({
  event: ht.string,
  action: ht.string,
  name: ht.string,
  region: ht.string,
  section: ht.string,
  component: ht.string,
  type: ht.string,
  text: ht.string
});
const Lo = ({
  event: v = "",
  action: u = "",
  name: g = "",
  type: T = "",
  section: y = "",
  text: R = "",
  region: D = "",
  component: L = ""
}) => {
  const { dataLayer: k } = window, E = {
    event: v.toLowerCase(),
    action: u.toLowerCase(),
    name: g.toLowerCase(),
    type: T.toLowerCase(),
    region: D.toLowerCase(),
    section: y.toLowerCase(),
    text: R.toLowerCase(),
    component: L.toLowerCase()
  };
  k && k.push(E);
};
var Jt = {};
var Nn;
function Po() {
  if (Nn) return Jt;
  Nn = 1;
  var v = xr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, R = {};
  function D(e) {
    return g.call(R, e) ? !0 : g.call(y, e) ? !1 : T.test(e) ? R[e] = !0 : (y[e] = !0, !1);
  }
  function L(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    k[e] = new L(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    k[n] = new L(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    k[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    k[e] = new L(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    k[e] = new L(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    k[e] = new L(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    k[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function re(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      E,
      re
    );
    k[n] = new L(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(E, re);
    k[n] = new L(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(E, re);
    k[n] = new L(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var U = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(U).forEach(function(e) {
    Me.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), U[n] = U[e];
    });
  });
  var Oe = /["'&<>]/;
  function Y(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = Oe.exec(e);
    if (n) {
      var i = "", a, d = 0;
      for (a = n.index; a < e.length; a++) {
        switch (e.charCodeAt(a)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        d !== a && (i += e.substring(d, a)), d = a + 1, i += n;
      }
      e = d !== a ? i + e.substring(d, a) : i;
    }
    return e;
  }
  var Kt = /([A-Z])/g, ne = /^ms-/, Z = Array.isArray;
  function le(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function Qe(e, n, i) {
    switch (n) {
      case "select":
        return le(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return le(2, null);
      case "math":
        return le(3, null);
      case "foreignObject":
        return le(1, null);
      case "table":
        return le(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return le(5, null);
      case "colgroup":
        return le(7, null);
      case "tr":
        return le(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? le(1, null) : e;
  }
  var oe = /* @__PURE__ */ new Map();
  function mt(e, n, i) {
    if (typeof i != "object") throw Error(u(62));
    n = !0;
    for (var a in i) if (g.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = Y(a);
          d = Y(("" + d).trim());
        } else {
          c = a;
          var h = oe.get(c);
          h !== void 0 || (h = Y(c.replace(Kt, "-$1").toLowerCase().replace(ne, "-ms-")), oe.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || g.call(U, a) ? "" + d : d + "px" : Y(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function ee(e, n, i, a) {
    switch (i) {
      case "style":
        mt(e, n, a);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") {
      if (n = k.hasOwnProperty(i) ? k[i] : null, n !== null) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!n.acceptsBooleans) return;
        }
        switch (i = n.attributeName, n.type) {
          case 3:
            a && e.push(" ", i, '=""');
            break;
          case 4:
            a === !0 ? e.push(" ", i, '=""') : a !== !1 && e.push(" ", i, '="', Y(a), '"');
            break;
          case 5:
            isNaN(a) || e.push(" ", i, '="', Y(a), '"');
            break;
          case 6:
            !isNaN(a) && 1 <= a && e.push(" ", i, '="', Y(a), '"');
            break;
          default:
            n.sanitizeURL && (a = "" + a), e.push(" ", i, '="', Y(a), '"');
        }
      } else if (D(i)) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = i.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", i, '="', Y(a), '"');
      }
    }
  }
  function H(e, n, i) {
    if (n != null) {
      if (i != null) throw Error(u(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function lr(e) {
    var n = "";
    return v.Children.forEach(e, function(i) {
      i != null && (n += i);
    }), n;
  }
  function Ot(e, n, i, a) {
    e.push(pe(i));
    var d = i = null, c;
    for (c in n) if (g.call(n, c)) {
      var h = n[c];
      if (h != null) switch (c) {
        case "children":
          i = h;
          break;
        case "dangerouslySetInnerHTML":
          d = h;
          break;
        default:
          ee(e, a, c, h);
      }
    }
    return e.push(">"), H(e, d, i), typeof i == "string" ? (e.push(Y(i)), null) : i;
  }
  var It = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qt = /* @__PURE__ */ new Map();
  function pe(e) {
    var n = Qt.get(e);
    if (n === void 0) {
      if (!It.test(e)) throw Error(u(65, e));
      n = "<" + e, Qt.set(e, n);
    }
    return n;
  }
  function me(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(pe("select"));
        var c = null, h = null;
        for (M in i) if (g.call(i, M)) {
          var w = i[M];
          if (w != null) switch (M) {
            case "children":
              c = w;
              break;
            case "dangerouslySetInnerHTML":
              h = w;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ee(e, a, M, w);
          }
        }
        return e.push(">"), H(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(pe("option"));
        var A = w = null, F = null, M = null;
        for (c in i) if (g.call(i, c)) {
          var X = i[c];
          if (X != null) switch (c) {
            case "children":
              w = X;
              break;
            case "selected":
              F = X;
              break;
            case "dangerouslySetInnerHTML":
              M = X;
              break;
            case "value":
              A = X;
            default:
              ee(e, a, c, X);
          }
        }
        if (h != null) if (i = A !== null ? "" + A : lr(w), Z(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else F && e.push(' selected=""');
        return e.push(">"), H(e, M, w), w;
      case "textarea":
        e.push(pe("textarea")), M = h = c = null;
        for (w in i) if (g.call(i, w) && (A = i[w], A != null)) switch (w) {
          case "children":
            M = A;
            break;
          case "value":
            c = A;
            break;
          case "defaultValue":
            h = A;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            ee(
              e,
              a,
              w,
              A
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), M != null) {
          if (c != null) throw Error(u(92));
          if (Z(M) && 1 < M.length) throw Error(u(93));
          c = "" + M;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(Y("" + c)), null;
      case "input":
        e.push(pe("input")), A = M = w = c = null;
        for (h in i) if (g.call(i, h) && (F = i[h], F != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            A = F;
            break;
          case "defaultValue":
            w = F;
            break;
          case "checked":
            M = F;
            break;
          case "value":
            c = F;
            break;
          default:
            ee(e, a, h, F);
        }
        return M !== null ? ee(e, a, "checked", M) : A !== null && ee(e, a, "checked", A), c !== null ? ee(e, a, "value", c) : w !== null && ee(e, a, "value", w), e.push("/>"), null;
      case "menuitem":
        e.push(pe("menuitem"));
        for (var je in i) if (g.call(i, je) && (c = i[je], c != null)) switch (je) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ee(e, a, je, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(pe("title")), c = null;
        for (X in i) if (g.call(i, X) && (h = i[X], h != null)) switch (X) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ee(e, a, X, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(pe(n)), h = c = null;
        for (A in i) if (g.call(i, A) && (w = i[A], w != null)) switch (A) {
          case "children":
            c = w;
            break;
          case "dangerouslySetInnerHTML":
            h = w;
            break;
          default:
            ee(e, a, A, w);
        }
        if (e.push(">"), h != null) {
          if (c != null) throw Error(u(60));
          if (typeof h != "object" || !("__html" in h)) throw Error(u(61));
          i = h.__html, i != null && (typeof i == "string" && 0 < i.length && i[0] === `
` ? e.push(`
`, i) : e.push("" + i));
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        e.push(pe(n));
        for (var We in i) if (g.call(i, We) && (c = i[We], c != null)) switch (We) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            ee(e, a, We, c);
        }
        return e.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ot(
          e,
          i,
          n,
          a
        );
      case "html":
        return d.insertionMode === 0 && e.push("<!DOCTYPE html>"), Ot(e, i, n, a);
      default:
        if (n.indexOf("-") === -1 && typeof i.is != "string") return Ot(e, i, n, a);
        e.push(pe(n)), h = c = null;
        for (F in i) if (g.call(i, F) && (w = i[F], w != null)) switch (F) {
          case "children":
            c = w;
            break;
          case "dangerouslySetInnerHTML":
            h = w;
            break;
          case "style":
            mt(e, a, w);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            D(F) && typeof w != "function" && typeof w != "symbol" && e.push(" ", F, '="', Y(w), '"');
        }
        return e.push(">"), H(e, h, c), c;
    }
  }
  function vt(e, n, i) {
    if (e.push('<!--$?--><template id="'), i === null) throw Error(u(395));
    return e.push(i), e.push('"></template>');
  }
  function yt(e, n, i, a) {
    switch (i.insertionMode) {
      case 0:
      case 1:
        return e.push('<div hidden id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 2:
        return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 3:
        return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 4:
        return e.push('<table hidden id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 5:
        return e.push('<table hidden><tbody id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 6:
        return e.push('<table hidden><tr id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 7:
        return e.push('<table hidden><colgroup id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      default:
        throw Error(u(397));
    }
  }
  function Lt(e, n) {
    switch (n.insertionMode) {
      case 0:
      case 1:
        return e.push("</div>");
      case 2:
        return e.push("</svg>");
      case 3:
        return e.push("</math>");
      case 4:
        return e.push("</table>");
      case 5:
        return e.push("</tbody></table>");
      case 6:
        return e.push("</tr></table>");
      case 7:
        return e.push("</colgroup></table>");
      default:
        throw Error(u(397));
    }
  }
  var ar = /[<\u2028\u2029]/g;
  function Pt(e) {
    return JSON.stringify(e).replace(ar, function(n) {
      switch (n) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function ve(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Nt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Y(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Y(n)), e = !0), e);
  }
  var et = Object.assign, tt = Symbol.for("react.element"), G = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), Be = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ae = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), Ye = Symbol.iterator;
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case gt:
        return "Fragment";
      case G:
        return "Portal";
      case St:
        return "Profiler";
      case J:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case $:
        return (e._context.displayName || "Context") + ".Provider";
      case fe:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xt:
        return n = e.displayName || null, n !== null ? n : Se(e.type) || "Memo";
      case te:
        n = e._payload, e = e._init;
        try {
          return Se(e(n));
        } catch {
        }
    }
    return null;
  }
  var ze = {};
  function rt(e, n) {
    if (e = e.contextTypes, !e) return ze;
    var i = {}, a;
    for (a in e) i[a] = n[a];
    return i;
  }
  var we = null;
  function ie(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var i = n.parent;
      if (e === null) {
        if (i !== null) throw Error(u(401));
      } else {
        if (i === null) throw Error(u(401));
        ie(e, i);
      }
      n.context._currentValue2 = n.value;
    }
  }
  function er(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && er(e);
  }
  function wt(e) {
    var n = e.parent;
    n !== null && wt(n), e.context._currentValue2 = e.value;
  }
  function Ze(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(u(402));
    e.depth === n.depth ? ie(e, n) : Ze(e, n);
  }
  function Ue(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? ie(e, i) : Ue(e, i), n.context._currentValue2 = n.value;
  }
  function Te(e) {
    var n = we;
    n !== e && (n === null ? wt(e) : e === null ? er(n) : n.depth === e.depth ? ie(n, e) : n.depth > e.depth ? Ze(n, e) : Ue(n, e), we = e);
  }
  var Bt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function zt(e, n, i, a) {
    var d = e.state !== void 0 ? e.state : null;
    e.updater = Bt, e.props = i, e.state = d;
    var c = { queue: [], replace: !1 };
    e._reactInternals = c;
    var h = n.contextType;
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : et({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Bt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
    else {
      for (c = h ? n[0] : e.state, d = !0, h = h ? 1 : 0; h < n.length; h++) {
        var w = n[h];
        w = typeof w == "function" ? w.call(e, c, i, a) : w, w != null && (d ? (d = !1, c = et({}, c, w)) : et(c, w));
      }
      e.state = c;
    }
    else c.queue = null;
  }
  var tr = { id: 1, overflow: "" };
  function nt(e, n, i) {
    var a = e.id;
    e = e.overflow;
    var d = 32 - ot(a) - 1;
    a &= ~(1 << d), i += 1;
    var c = 32 - ot(n) + d;
    if (30 < c) {
      var h = d - d % 5;
      return c = (a & (1 << h) - 1).toString(32), a >>= h, d -= h, { id: 1 << 32 - ot(n) + d | i << d | a, overflow: c + e };
    }
    return { id: 1 << c | i << d | a, overflow: e };
  }
  var ot = Math.clz32 ? Math.clz32 : ke, Tt = Math.log, kt = Math.LN2;
  function ke(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Tt(e) / kt | 0) | 0;
  }
  function Je(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Je, ue = null, Ht = null, xe = null, B = null, it = !1, W = !1, Ee = 0, Le = null, lt = 0;
  function _e() {
    if (ue === null) throw Error(u(321));
    return ue;
  }
  function $t() {
    if (0 < lt) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _t() {
    return B === null ? xe === null ? (it = !1, xe = B = $t()) : (it = !0, B = xe) : B.next === null ? (it = !1, B = B.next = $t()) : (it = !0, B = B.next), B;
  }
  function jt() {
    Ht = ue = null, W = !1, xe = null, lt = 0, B = Le = null;
  }
  function at(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ct(e, n, i) {
    if (ue = _e(), B = _t(), it) {
      var a = B.queue;
      if (n = a.dispatch, Le !== null && (i = Le.get(a), i !== void 0)) {
        Le.delete(a), a = B.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return B.memoizedState = a, [a, n];
      }
      return [B.memoizedState, n];
    }
    return e = e === at ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, B.memoizedState = e, e = B.queue = { last: null, dispatch: null }, e = e.dispatch = ce.bind(null, ue, e), [B.memoizedState, e];
  }
  function rr(e, n) {
    if (ue = _e(), B = _t(), n = n === void 0 ? null : n, B !== null) {
      var i = B.memoizedState;
      if (i !== null && n !== null) {
        var a = i[1];
        e: if (a === null) a = !1;
        else {
          for (var d = 0; d < a.length && d < n.length; d++) if (!Ut(n[d], a[d])) {
            a = !1;
            break e;
          }
          a = !0;
        }
        if (a) return i[0];
      }
    }
    return e = e(), B.memoizedState = [e, n], e;
  }
  function ce(e, n, i) {
    if (25 <= lt) throw Error(u(301));
    if (e === ue) if (W = !0, e = { action: i, next: null }, Le === null && (Le = /* @__PURE__ */ new Map()), i = Le.get(n), i === void 0) Le.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Rt() {
    throw Error(u(394));
  }
  function st() {
  }
  var Wt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return _e(), e._currentValue2;
  }, useMemo: rr, useReducer: Ct, useRef: function(e) {
    ue = _e(), B = _t();
    var n = B.memoizedState;
    return n === null ? (e = { current: e }, B.memoizedState = e) : n;
  }, useState: function(e) {
    return Ct(at, e);
  }, useInsertionEffect: st, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return rr(function() {
      return e;
    }, n);
  }, useImperativeHandle: st, useEffect: st, useDebugValue: st, useDeferredValue: function(e) {
    return _e(), e;
  }, useTransition: function() {
    return _e(), [
      !1,
      Rt
    ];
  }, useId: function() {
    var e = Ht.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - ot(e) - 1)).toString(32) + n;
    var i = ut;
    if (i === null) throw Error(u(404));
    return n = Ee++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return _e(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, ut = null, He = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ce(e) {
    return console.error(e), null;
  }
  function Ke() {
  }
  function nr(e, n, i, a, d, c, h, w, A) {
    var F = [], M = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: M, pingedTasks: F, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Ce : d, onAllReady: Ke, onShellReady: h === void 0 ? Ke : h, onShellError: Ke, onFatalError: Ke }, i = ct(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = At(n, e, null, i, M, ze, null, tr), F.push(e), n;
  }
  function At(e, n, i, a, d, c, h, w) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var A = { node: n, ping: function() {
      var F = e.pingedTasks;
      F.push(A), F.length === 1 && sr(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: w };
    return d.add(A), A;
  }
  function ct(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function pt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function C(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (ue = {}, Ht = n, Ee = 0, e = i(a, d); W; ) W = !1, Ee = 0, lt += 1, B = null, e = i(a, d);
    return jt(), e;
  }
  function S(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var w in i) if (!(w in c)) throw Error(u(108, Se(a) || "Unknown", w));
        a = et({}, h, i);
      }
      n.legacyContext = a, z(e, n, d), n.legacyContext = h;
    } else z(e, n, d);
  }
  function _(e, n) {
    if (e && e.defaultProps) {
      n = et({}, n), e = e.defaultProps;
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function N(e, n, i, a, d) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      d = rt(i, n.legacyContext);
      var c = i.contextType;
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), zt(c, i, a, d), S(e, n, c, i);
    } else {
      c = rt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = Ee !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) zt(d, i, a, c), S(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = nt(a, 1, 0);
        try {
          z(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else z(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = me(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Qe(h, i, a), K(e, n, c), d.formatContext = h, i) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          d.chunks.push("</", i, ">");
      }
      d.lastPushedText = !1;
    } else {
      switch (i) {
        case ge:
        case Et:
        case J:
        case St:
        case gt:
          z(e, n, a.children);
          return;
        case ye:
          z(e, n, a.children);
          return;
        case ae:
          throw Error(u(343));
        case Ie:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var w = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, A = ct(e, d.chunks.length, w, d.formatContext, !1, !1);
            d.children.push(A), d.lastPushedText = !1;
            var F = ct(e, 0, null, d.formatContext, !1, !1);
            F.parentFlushed = !0, n.blockedBoundary = w, n.blockedSegment = F;
            try {
              if (K(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || F.lastPushedText && F.textEmbedded && F.chunks.push("<!-- -->"), F.status = 1, Pe(w, F), w.pendingTasks === 0) break e;
            } catch (M) {
              F.status = 4, w.forceClientRender = !0, w.errorDigest = pt(e, M);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = At(e, c, i, A, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case fe:
          if (a = s(e, n, i.render, a, d), Ee !== 0) {
            i = n.treeContext, n.treeContext = nt(i, 1, 0);
            try {
              z(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else z(e, n, a);
          return;
        case xt:
          i = i.type, a = _(i, a), N(e, n, i, a, d);
          return;
        case $:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = we, we = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, z(e, n, d), e = we, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = we = e.parent, n.context = e;
          return;
        case Be:
          a = a.children, a = a(i._currentValue2), z(e, n, a);
          return;
        case te:
          d = i._init, i = d(i._payload), a = _(i, a), N(
            e,
            n,
            i,
            a,
            void 0
          );
          return;
      }
      throw Error(u(130, i == null ? i : typeof i, ""));
    }
  }
  function z(e, n, i) {
    if (n.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case tt:
          N(e, n, i.type, i.props, i.ref);
          return;
        case G:
          throw Error(u(257));
        case te:
          var a = i._init;
          i = a(i._payload), z(e, n, i);
          return;
      }
      if (Z(i)) {
        Q(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Ye && i[Ye] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
        if (i = a.next(), !i.done) {
          var d = [];
          do
            d.push(i.value), i = a.next();
          while (!i.done);
          Q(e, n, d);
        }
        return;
      }
      throw e = Object.prototype.toString.call(i), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e));
    }
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Nt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Nt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function Q(e, n, i) {
    for (var a = i.length, d = 0; d < a; d++) {
      var c = n.treeContext;
      n.treeContext = nt(c, a, d);
      try {
        K(e, n, i[d]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function K(e, n, i) {
    var a = n.blockedSegment.formatContext, d = n.legacyContext, c = n.context;
    try {
      return z(e, n, i);
    } catch (A) {
      if (jt(), typeof A == "object" && A !== null && typeof A.then == "function") {
        i = A;
        var h = n.blockedSegment, w = ct(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(w), h.lastPushedText = !1, e = At(e, n.node, n.blockedBoundary, w, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Te(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Te(c), A;
    }
  }
  function Re(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, $e(this, n, e);
  }
  function q(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return q(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function Pe(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && Pe(e, i);
    } else e.completedSegments.push(n);
  }
  function $e(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Ke, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Pe(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Re, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Pe(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function sr(e) {
    if (e.status !== 2) {
      var n = we, i = He.current;
      He.current = Wt;
      var a = ut;
      ut = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], w = e, A = h.blockedSegment;
          if (A.status === 0) {
            Te(h.context);
            try {
              z(w, h, h.node), w.responseState.generateStaticMarkup || A.lastPushedText && A.textEmbedded && A.chunks.push("<!-- -->"), h.abortSet.delete(h), A.status = 1, $e(w, h.blockedBoundary, A);
            } catch (Ae) {
              if (jt(), typeof Ae == "object" && Ae !== null && typeof Ae.then == "function") {
                var F = h.ping;
                Ae.then(F, F);
              } else {
                h.abortSet.delete(h), A.status = 4;
                var M = h.blockedBoundary, X = Ae, je = pt(w, X);
                if (M === null ? C(w, X) : (M.pendingTasks--, M.forceClientRender || (M.forceClientRender = !0, M.errorDigest = je, M.parentFlushed && w.clientRenderedBoundaries.push(M))), w.allPendingTasks--, w.allPendingTasks === 0) {
                  var We = w.onAllReady;
                  We();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && or(e, e.destination);
      } catch (Ae) {
        pt(e, Ae), C(e, Ae);
      } finally {
        ut = a, He.current = i, i === Wt && Te(n);
      }
    }
  }
  function Vt(e, n, i) {
    switch (i.parentFlushed = !0, i.status) {
      case 0:
        var a = i.id = e.nextSegmentId++;
        return i.lastPushedText = !1, i.textEmbedded = !1, e = e.responseState, n.push('<template id="'), n.push(e.placeholderPrefix), e = a.toString(16), n.push(e), n.push('"></template>');
      case 1:
        i.status = 2;
        var d = !0;
        a = i.chunks;
        var c = 0;
        i = i.children;
        for (var h = 0; h < i.length; h++) {
          for (d = i[h]; c < d.index; c++) n.push(a[c]);
          d = Gt(e, n, d);
        }
        for (; c < a.length - 1; c++) n.push(a[c]);
        return c < a.length && (d = n.push(a[c])), d;
      default:
        throw Error(u(390));
    }
  }
  function Gt(e, n, i) {
    var a = i.boundary;
    if (a === null) return Vt(e, n, i);
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = Y(a), n.push(a), n.push('"')), n.push("></template>")), Vt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < a.pendingTasks) {
      a.rootSegmentID = e.nextSegmentId++, 0 < a.completedSegments.length && e.partialBoundaries.push(a);
      var d = e.responseState, c = d.nextSuspenseID++;
      return d = d.boundaryPrefix + c.toString(16), a = a.id = d, vt(n, e.responseState, a), Vt(e, n, i), n.push("<!--/$-->");
    }
    if (a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), vt(n, e.responseState, a.id), Vt(e, n, i), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), i = a.completedSegments, i.length !== 1) throw Error(u(391));
    return Gt(e, n, i[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function ur(e, n, i) {
    return yt(n, e.responseState, i.formatContext, i.id), Gt(e, n, i), Lt(n, i.formatContext);
  }
  function cr(e, n, i) {
    for (var a = i.completedSegments, d = 0; d < a.length; d++) pr(e, n, i, a[d]);
    if (a.length = 0, e = e.responseState, a = i.id, i = i.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), a === null) throw Error(u(395));
    return i = i.toString(16), n.push(a), n.push('","'), n.push(e.segmentPrefix), n.push(i), n.push('")<\/script>');
  }
  function pr(e, n, i, a) {
    if (a.status === 2) return !0;
    var d = a.id;
    if (d === -1) {
      if ((a.id = i.rootSegmentID) === -1) throw Error(u(392));
      return ur(e, n, a);
    }
    return ur(e, n, a), e = e.responseState, n.push(e.startInlineScript), e.sentCompleteSegmentFunction ? n.push('$RS("') : (e.sentCompleteSegmentFunction = !0, n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), d = d.toString(16), n.push(d), n.push('","'), n.push(e.placeholderPrefix), n.push(d), n.push('")<\/script>');
  }
  function or(e, n) {
    try {
      var i = e.completedRootSegment;
      if (i !== null && e.pendingRootTasks === 0) {
        Gt(e, n, i), e.completedRootSegment = null;
        var a = e.responseState.bootstrapChunks;
        for (i = 0; i < a.length - 1; i++) n.push(a[i]);
        i < a.length && n.push(a[i]);
      }
      var d = e.clientRenderedBoundaries, c;
      for (c = 0; c < d.length; c++) {
        var h = d[c];
        a = n;
        var w = e.responseState, A = h.id, F = h.errorDigest, M = h.errorMessage, X = h.errorComponentStack;
        if (a.push(w.startInlineScript), w.sentClientRenderFunction ? a.push('$RX("') : (w.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), A === null) throw Error(u(395));
        if (a.push(A), a.push('"'), F || M || X) {
          a.push(",");
          var je = Pt(F || "");
          a.push(je);
        }
        if (M || X) {
          a.push(",");
          var We = Pt(M || "");
          a.push(We);
        }
        if (X) {
          a.push(",");
          var Ae = Pt(X);
          a.push(Ae);
        }
        if (!a.push(")<\/script>")) {
          e.destination = null, c++, d.splice(0, c);
          return;
        }
      }
      d.splice(0, c);
      var qt = e.completedBoundaries;
      for (c = 0; c < qt.length; c++) if (!cr(e, n, qt[c])) {
        e.destination = null, c++, qt.splice(0, c);
        return;
      }
      qt.splice(0, c);
      var ft = e.partialBoundaries;
      for (c = 0; c < ft.length; c++) {
        var dr = ft[c];
        e: {
          d = e, h = n;
          var Xt = dr.completedSegments;
          for (w = 0; w < Xt.length; w++) if (!pr(d, h, dr, Xt[w])) {
            w++, Xt.splice(0, w);
            var Tr = !1;
            break e;
          }
          Xt.splice(0, w), Tr = !0;
        }
        if (!Tr) {
          e.destination = null, c++, ft.splice(0, c);
          return;
        }
      }
      ft.splice(0, c);
      var bt = e.completedBoundaries;
      for (c = 0; c < bt.length; c++) if (!cr(e, n, bt[c])) {
        e.destination = null, c++, bt.splice(0, c);
        return;
      }
      bt.splice(0, c);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function Er(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return q(a, e, n);
      }), i.clear(), e.destination !== null && or(e, e.destination);
    } catch (a) {
      pt(e, a), C(e, a);
    }
  }
  function wr() {
  }
  function fr(e, n, i, a) {
    var d = !1, c = null, h = "", w = { push: function(F) {
      return F !== null && (h += F), !0;
    }, destroy: function(F) {
      d = !0, c = F;
    } }, A = !1;
    if (e = nr(e, ve(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wr, void 0, function() {
      A = !0;
    }), sr(e), Er(e, a), e.status === 1) e.status = 2, w.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = w;
      try {
        or(e, w);
      } catch (F) {
        pt(e, F), C(e, F);
      }
    }
    if (d) throw c;
    if (!A) throw Error(u(426));
    return h;
  }
  return Jt.renderToNodeStream = function() {
    throw Error(u(207));
  }, Jt.renderToStaticMarkup = function(e, n) {
    return fr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Jt.renderToString = function(e, n) {
    return fr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.version = "18.3.1", Jt;
}
var Br = {};
var Dn;
function No() {
  if (Dn) return Br;
  Dn = 1;
  var v = xr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = null, T = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < T && (t.enqueue(new Uint8Array(g.buffer, 0, T)), g = new Uint8Array(512), T = 0), t.enqueue(r);
    else {
      var o = g.length - T;
      o < r.length && (o === 0 ? t.enqueue(g) : (g.set(r.subarray(0, o), T), t.enqueue(g), r = r.subarray(o)), g = new Uint8Array(512), T = 0), g.set(r, T), T += r.length;
    }
  }
  function R(t, r) {
    return y(t, r), !0;
  }
  function D(t) {
    g && 0 < T && (t.enqueue(new Uint8Array(g.buffer, 0, T)), g = null, T = 0);
  }
  var L = new TextEncoder();
  function k(t) {
    return L.encode(t);
  }
  function E(t) {
    return L.encode(t);
  }
  function re(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var U = Object.prototype.hasOwnProperty, Me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oe = {}, Y = {};
  function Kt(t) {
    return U.call(Y, t) ? !0 : U.call(Oe, t) ? !1 : Me.test(t) ? Y[t] = !0 : (Oe[t] = !0, !1);
  }
  function ne(t, r, o, l, f, p, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = m;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Z[t] = new ne(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    Z[r] = new ne(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Z[t] = new ne(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Z[t] = new ne(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Z[t] = new ne(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Z[t] = new ne(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    Z[t] = new ne(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    Z[t] = new ne(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    Z[t] = new ne(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function Qe(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      le,
      Qe
    );
    Z[r] = new ne(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(le, Qe);
    Z[r] = new ne(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(le, Qe);
    Z[r] = new ne(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    Z[t] = new ne(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), Z.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    Z[t] = new ne(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var oe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, mt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oe).forEach(function(t) {
    mt.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), oe[r] = oe[t];
    });
  });
  var ee = /["'&<>]/;
  function H(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = ee.exec(t);
    if (r) {
      var o = "", l, f = 0;
      for (l = r.index; l < t.length; l++) {
        switch (t.charCodeAt(l)) {
          case 34:
            r = "&quot;";
            break;
          case 38:
            r = "&amp;";
            break;
          case 39:
            r = "&#x27;";
            break;
          case 60:
            r = "&lt;";
            break;
          case 62:
            r = "&gt;";
            break;
          default:
            continue;
        }
        f !== l && (o += t.substring(f, l)), f = l + 1, o += r;
      }
      t = f !== l ? o + t.substring(f, l) : o;
    }
    return t;
  }
  var lr = /([A-Z])/g, Ot = /^ms-/, It = Array.isArray, Qt = E("<script>"), pe = E("<\/script>"), me = E('<script src="'), vt = E('<script type="module" src="'), yt = E('" async=""><\/script>'), Lt = /(<\/|<)(s)(cript)/gi;
  function ar(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Pt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Qt : E('<script nonce="' + H(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, k(("" + o).replace(Lt, ar)), pe), l !== void 0) for (o = 0; o < l.length; o++) p.push(me, k(H(l[o])), yt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(vt, k(H(f[l])), yt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: E(t + "P:"), segmentPrefix: E(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ve(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Nt(t) {
    return ve(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function et(t, r, o) {
    switch (r) {
      case "select":
        return ve(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return ve(2, null);
      case "math":
        return ve(3, null);
      case "foreignObject":
        return ve(1, null);
      case "table":
        return ve(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ve(5, null);
      case "colgroup":
        return ve(7, null);
      case "tr":
        return ve(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? ve(1, null) : t;
  }
  var tt = E("<!-- -->");
  function G(t, r, o, l) {
    return r === "" ? l : (l && t.push(tt), t.push(k(H(r))), !0);
  }
  var gt = /* @__PURE__ */ new Map(), J = E(' style="'), St = E(":"), $ = E(";");
  function Be(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (U.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = k(H(l));
          f = k(H(("" + f).trim()));
        } else {
          p = l;
          var m = gt.get(p);
          m !== void 0 || (m = E(H(p.replace(lr, "-$1").toLowerCase().replace(Ot, "-ms-"))), gt.set(p, m)), p = m, f = typeof f == "number" ? f === 0 || U.call(oe, l) ? k("" + f) : k(f + "px") : k(H(("" + f).trim()));
        }
        r ? (r = !1, t.push(J, p, St, f)) : t.push($, p, St, f);
      }
    }
    r || t.push(ye);
  }
  var fe = E(" "), Ie = E('="'), ye = E('"'), xt = E('=""');
  function te(t, r, o, l) {
    switch (o) {
      case "style":
        Be(t, r, l);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") {
      if (r = Z.hasOwnProperty(o) ? Z[o] : null, r !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (o = k(r.attributeName), r.type) {
          case 3:
            l && t.push(fe, o, xt);
            break;
          case 4:
            l === !0 ? t.push(fe, o, xt) : l !== !1 && t.push(fe, o, Ie, k(H(l)), ye);
            break;
          case 5:
            isNaN(l) || t.push(fe, o, Ie, k(H(l)), ye);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(fe, o, Ie, k(H(l)), ye);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(fe, o, Ie, k(H(l)), ye);
        }
      } else if (Kt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(fe, k(o), Ie, k(H(l)), ye);
      }
    }
  }
  var ae = E(">"), Et = E("/>");
  function ge(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(k("" + r));
    }
  }
  function Dt(t) {
    var r = "";
    return v.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ye = E(' selected=""');
  function Se(t, r, o, l) {
    t.push(ie(o));
    var f = o = null, p;
    for (p in r) if (U.call(r, p)) {
      var m = r[p];
      if (m != null) switch (p) {
        case "children":
          o = m;
          break;
        case "dangerouslySetInnerHTML":
          f = m;
          break;
        default:
          te(t, l, p, m);
      }
    }
    return t.push(ae), ge(t, f, o), typeof o == "string" ? (t.push(k(H(o))), null) : o;
  }
  var ze = E(`
`), rt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, we = /* @__PURE__ */ new Map();
  function ie(t) {
    var r = we.get(t);
    if (r === void 0) {
      if (!rt.test(t)) throw Error(u(65, t));
      r = E("<" + t), we.set(t, r);
    }
    return r;
  }
  var er = E("<!DOCTYPE html>");
  function wt(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(ie("select"));
        var p = null, m = null;
        for (O in o) if (U.call(o, O)) {
          var x = o[O];
          if (x != null) switch (O) {
            case "children":
              p = x;
              break;
            case "dangerouslySetInnerHTML":
              m = x;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              te(t, l, O, x);
          }
        }
        return t.push(ae), ge(t, m, p), p;
      case "option":
        m = f.selectedValue, t.push(ie("option"));
        var b = x = null, P = null, O = null;
        for (p in o) if (U.call(o, p)) {
          var V = o[p];
          if (V != null) switch (p) {
            case "children":
              x = V;
              break;
            case "selected":
              P = V;
              break;
            case "dangerouslySetInnerHTML":
              O = V;
              break;
            case "value":
              b = V;
            default:
              te(t, l, p, V);
          }
        }
        if (m != null) if (o = b !== null ? "" + b : Dt(x), It(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(Ye);
              break;
            }
        } else "" + m === o && t.push(Ye);
        else P && t.push(Ye);
        return t.push(ae), ge(t, O, x), x;
      case "textarea":
        t.push(ie("textarea")), O = m = p = null;
        for (x in o) if (U.call(o, x) && (b = o[x], b != null)) switch (x) {
          case "children":
            O = b;
            break;
          case "value":
            p = b;
            break;
          case "defaultValue":
            m = b;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            te(t, l, x, b);
        }
        if (p === null && m !== null && (p = m), t.push(ae), O != null) {
          if (p != null) throw Error(u(92));
          if (It(O) && 1 < O.length) throw Error(u(93));
          p = "" + O;
        }
        return typeof p == "string" && p[0] === `
` && t.push(ze), p !== null && t.push(k(H("" + p))), null;
      case "input":
        t.push(ie("input")), b = O = x = p = null;
        for (m in o) if (U.call(o, m) && (P = o[m], P != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            b = P;
            break;
          case "defaultValue":
            x = P;
            break;
          case "checked":
            O = P;
            break;
          case "value":
            p = P;
            break;
          default:
            te(t, l, m, P);
        }
        return O !== null ? te(
          t,
          l,
          "checked",
          O
        ) : b !== null && te(t, l, "checked", b), p !== null ? te(t, l, "value", p) : x !== null && te(t, l, "value", x), t.push(Et), null;
      case "menuitem":
        t.push(ie("menuitem"));
        for (var Fe in o) if (U.call(o, Fe) && (p = o[Fe], p != null)) switch (Fe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            te(t, l, Fe, p);
        }
        return t.push(ae), null;
      case "title":
        t.push(ie("title")), p = null;
        for (V in o) if (U.call(o, V) && (m = o[V], m != null)) switch (V) {
          case "children":
            p = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            te(t, l, V, m);
        }
        return t.push(ae), p;
      case "listing":
      case "pre":
        t.push(ie(r)), m = p = null;
        for (b in o) if (U.call(o, b) && (x = o[b], x != null)) switch (b) {
          case "children":
            p = x;
            break;
          case "dangerouslySetInnerHTML":
            m = x;
            break;
          default:
            te(t, l, b, x);
        }
        if (t.push(ae), m != null) {
          if (p != null) throw Error(u(60));
          if (typeof m != "object" || !("__html" in m)) throw Error(u(61));
          o = m.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(ze, k(o)) : t.push(k("" + o)));
        }
        return typeof p == "string" && p[0] === `
` && t.push(ze), p;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        t.push(ie(r));
        for (var Ve in o) if (U.call(o, Ve) && (p = o[Ve], p != null)) switch (Ve) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            te(t, l, Ve, p);
        }
        return t.push(Et), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Se(t, o, r, l);
      case "html":
        return f.insertionMode === 0 && t.push(er), Se(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return Se(t, o, r, l);
        t.push(ie(r)), m = p = null;
        for (P in o) if (U.call(o, P) && (x = o[P], x != null)) switch (P) {
          case "children":
            p = x;
            break;
          case "dangerouslySetInnerHTML":
            m = x;
            break;
          case "style":
            Be(t, l, x);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Kt(P) && typeof x != "function" && typeof x != "symbol" && t.push(fe, k(P), Ie, k(H(x)), ye);
        }
        return t.push(ae), ge(t, m, p), p;
    }
  }
  var Ze = E("</"), Ue = E(">"), Te = E('<template id="'), Bt = E('"></template>'), zt = E("<!--$-->"), tr = E('<!--$?--><template id="'), nt = E('"></template>'), ot = E("<!--$!-->"), Tt = E("<!--/$-->"), kt = E("<template"), ke = E('"'), Je = E(' data-dgst="');
  E(' data-msg="'), E(' data-stck="');
  var Ut = E("></template>");
  function ue(t, r, o) {
    if (y(t, tr), o === null) throw Error(u(395));
    return y(t, o), R(t, nt);
  }
  var Ht = E('<div hidden id="'), xe = E('">'), B = E("</div>"), it = E('<svg aria-hidden="true" style="display:none" id="'), W = E('">'), Ee = E("</svg>"), Le = E('<math aria-hidden="true" style="display:none" id="'), lt = E('">'), _e = E("</math>"), $t = E('<table hidden id="'), _t = E('">'), jt = E("</table>"), at = E('<table hidden><tbody id="'), Ct = E('">'), rr = E("</tbody></table>"), ce = E('<table hidden><tr id="'), Rt = E('">'), st = E("</tr></table>"), Wt = E('<table hidden><colgroup id="'), ut = E('">'), He = E("</colgroup></table>");
  function Ce(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, xe);
      case 2:
        return y(t, it), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, W);
      case 3:
        return y(t, Le), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, lt);
      case 4:
        return y(t, $t), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, _t);
      case 5:
        return y(t, at), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, Ct);
      case 6:
        return y(t, ce), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, Rt);
      case 7:
        return y(
          t,
          Wt
        ), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, ut);
      default:
        throw Error(u(397));
    }
  }
  function Ke(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return R(t, B);
      case 2:
        return R(t, Ee);
      case 3:
        return R(t, _e);
      case 4:
        return R(t, jt);
      case 5:
        return R(t, rr);
      case 6:
        return R(t, st);
      case 7:
        return R(t, He);
      default:
        throw Error(u(397));
    }
  }
  var nr = E('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), At = E('$RS("'), ct = E('","'), pt = E('")<\/script>'), C = E('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = E('$RC("'), S = E('","'), _ = E('")<\/script>'), N = E('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), z = E('$RX("'), Q = E('"'), K = E(")<\/script>"), Re = E(","), q = /[<\u2028\u2029]/g;
  function Pe(t) {
    return JSON.stringify(t).replace(q, function(r) {
      switch (r) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var $e = Object.assign, sr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), cr = Symbol.for("react.profiler"), pr = Symbol.for("react.provider"), or = Symbol.for("react.context"), Er = Symbol.for("react.forward_ref"), wr = Symbol.for("react.suspense"), fr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function w(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Gt:
        return "Fragment";
      case Vt:
        return "Portal";
      case cr:
        return "Profiler";
      case ur:
        return "StrictMode";
      case wr:
        return "Suspense";
      case fr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case or:
        return (t.displayName || "Context") + ".Consumer";
      case pr:
        return (t._context.displayName || "Context") + ".Provider";
      case Er:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return r = t.displayName || null, r !== null ? r : w(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return w(t(r));
        } catch {
        }
    }
    return null;
  }
  var A = {};
  function F(t, r) {
    if (t = t.contextTypes, !t) return A;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var M = null;
  function X(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(u(401));
      } else {
        if (o === null) throw Error(u(401));
        X(t, o);
      }
      r.context._currentValue = r.value;
    }
  }
  function je(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && je(t);
  }
  function We(t) {
    var r = t.parent;
    r !== null && We(r), t.context._currentValue = t.value;
  }
  function Ae(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? X(t, r) : Ae(t, r);
  }
  function qt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? X(t, o) : qt(t, o), r.context._currentValue = r.value;
  }
  function ft(t) {
    var r = M;
    r !== t && (r === null ? We(t) : t === null ? je(r) : r.depth === t.depth ? X(r, t) : r.depth > t.depth ? Ae(r, t) : qt(r, t), M = t);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function Xt(t, r, o, l) {
    var f = t.state !== void 0 ? t.state : null;
    t.updater = dr, t.props = o, t.state = f;
    var p = { queue: [], replace: !1 };
    t._reactInternals = p;
    var m = r.contextType;
    if (t.context = typeof m == "object" && m !== null ? m._currentValue : l, m = r.getDerivedStateFromProps, typeof m == "function" && (m = m(o, f), f = m == null ? f : $e({}, f, m), t.state = f), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && dr.enqueueReplaceState(t, t.state, null), p.queue !== null && 0 < p.queue.length) if (r = p.queue, m = p.replace, p.queue = null, p.replace = !1, m && r.length === 1) t.state = r[0];
    else {
      for (p = m ? r[0] : t.state, f = !0, m = m ? 1 : 0; m < r.length; m++) {
        var x = r[m];
        x = typeof x == "function" ? x.call(t, p, o, l) : x, x != null && (f ? (f = !1, p = $e({}, p, x)) : $e(p, x));
      }
      t.state = p;
    }
    else p.queue = null;
  }
  var Tr = { id: 1, overflow: "" };
  function bt(t, r, o) {
    var l = t.id;
    t = t.overflow;
    var f = 32 - kr(l) - 1;
    l &= ~(1 << f), o += 1;
    var p = 32 - kr(r) + f;
    if (30 < p) {
      var m = f - f % 5;
      return p = (l & (1 << m) - 1).toString(32), l >>= m, f -= m, { id: 1 << 32 - kr(r) + f | o << f | l, overflow: p + t };
    }
    return { id: 1 << p | o << f | l, overflow: t };
  }
  var kr = Math.clz32 ? Math.clz32 : Vn, jn = Math.log, Wn = Math.LN2;
  function Vn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (jn(t) / Wn | 0) | 0;
  }
  function Gn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var qn = typeof Object.is == "function" ? Object.is : Gn, dt = null, $r = null, _r = null, j = null, hr = !1, Cr = !1, mr = 0, Ft = null, Rr = 0;
  function Yt() {
    if (dt === null) throw Error(u(321));
    return dt;
  }
  function un() {
    if (0 < Rr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function jr() {
    return j === null ? _r === null ? (hr = !1, _r = j = un()) : (hr = !0, j = _r) : j.next === null ? (hr = !1, j = j.next = un()) : (hr = !0, j = j.next), j;
  }
  function Wr() {
    $r = dt = null, Cr = !1, _r = null, Rr = 0, j = Ft = null;
  }
  function cn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function pn(t, r, o) {
    if (dt = Yt(), j = jr(), hr) {
      var l = j.queue;
      if (r = l.dispatch, Ft !== null && (o = Ft.get(l), o !== void 0)) {
        Ft.delete(l), l = j.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return j.memoizedState = l, [l, r];
      }
      return [j.memoizedState, r];
    }
    return t = t === cn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, j.memoizedState = t, t = j.queue = { last: null, dispatch: null }, t = t.dispatch = Xn.bind(null, dt, t), [j.memoizedState, t];
  }
  function fn(t, r) {
    if (dt = Yt(), j = jr(), r = r === void 0 ? null : r, j !== null) {
      var o = j.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!qn(r[f], l[f])) {
            l = !1;
            break e;
          }
          l = !0;
        }
        if (l) return o[0];
      }
    }
    return t = t(), j.memoizedState = [t, r], t;
  }
  function Xn(t, r, o) {
    if (25 <= Rr) throw Error(u(301));
    if (t === dt) if (Cr = !0, t = { action: o, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), o = Ft.get(r), o === void 0) Ft.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function Yn() {
    throw Error(u(394));
  }
  function Ar() {
  }
  var dn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Yt(), t._currentValue;
  }, useMemo: fn, useReducer: pn, useRef: function(t) {
    dt = Yt(), j = jr();
    var r = j.memoizedState;
    return r === null ? (t = { current: t }, j.memoizedState = t) : r;
  }, useState: function(t) {
    return pn(cn, t);
  }, useInsertionEffect: Ar, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return fn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Ar, useEffect: Ar, useDebugValue: Ar, useDeferredValue: function(t) {
    return Yt(), t;
  }, useTransition: function() {
    return Yt(), [!1, Yn];
  }, useId: function() {
    var t = $r.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - kr(t) - 1)).toString(32) + r;
    var o = br;
    if (o === null) throw Error(u(404));
    return r = mr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Yt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, br = null, Vr = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Zn(t) {
    return console.error(t), null;
  }
  function vr() {
  }
  function Jn(t, r, o, l, f, p, m, x, b) {
    var P = [], O = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: O, pingedTasks: P, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Zn : f, onAllReady: p === void 0 ? vr : p, onShellReady: m === void 0 ? vr : m, onShellError: x === void 0 ? vr : x, onFatalError: b === void 0 ? vr : b }, o = Fr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Gr(r, t, null, o, O, A, null, Tr), P.push(t), r;
  }
  function Gr(t, r, o, l, f, p, m, x) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var b = { node: r, ping: function() {
      var P = t.pingedTasks;
      P.push(b), P.length === 1 && xn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: m, treeContext: x };
    return f.add(b), b;
  }
  function Fr(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function yr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Mr(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, re(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function hn(t, r, o, l, f) {
    for (dt = {}, $r = r, mr = 0, t = o(l, f); Cr; ) Cr = !1, mr = 0, Rr += 1, j = null, t = o(l, f);
    return Wr(), t;
  }
  function mn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var x in o) if (!(x in p)) throw Error(u(108, w(l) || "Unknown", x));
        l = $e({}, m, o);
      }
      r.legacyContext = l, be(t, r, f), r.legacyContext = m;
    } else be(t, r, f);
  }
  function vn(t, r) {
    if (t && t.defaultProps) {
      r = $e({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function qr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = F(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), Xt(p, o, l, f), mn(t, r, p, o);
    } else {
      p = F(o, r.legacyContext), f = hn(t, r, o, l, p);
      var m = mr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) Xt(f, o, l, p), mn(t, r, f, o);
      else if (m) {
        l = r.treeContext, r.treeContext = bt(l, 1, 0);
        try {
          be(t, r, f);
        } finally {
          r.treeContext = l;
        }
      } else be(t, r, f);
    }
    else if (typeof o == "string") {
      switch (f = r.blockedSegment, p = wt(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, m = f.formatContext, f.formatContext = et(m, o, l), Xr(t, r, p), f.formatContext = m, o) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          f.chunks.push(Ze, k(o), Ue);
      }
      f.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case ur:
        case cr:
        case Gt:
          be(t, r, l.children);
          return;
        case fr:
          be(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case wr:
          e: {
            o = r.blockedBoundary, f = r.blockedSegment, p = l.fallback, l = l.children, m = /* @__PURE__ */ new Set();
            var x = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, b = Fr(t, f.chunks.length, x, f.formatContext, !1, !1);
            f.children.push(b), f.lastPushedText = !1;
            var P = Fr(t, 0, null, f.formatContext, !1, !1);
            P.parentFlushed = !0, r.blockedBoundary = x, r.blockedSegment = P;
            try {
              if (Xr(
                t,
                r,
                l
              ), P.lastPushedText && P.textEmbedded && P.chunks.push(tt), P.status = 1, Or(x, P), x.pendingTasks === 0) break e;
            } catch (O) {
              P.status = 4, x.forceClientRender = !0, x.errorDigest = yr(t, O);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Gr(t, p, o, b, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case Er:
          if (l = hn(t, r, o.render, l, f), mr !== 0) {
            o = r.treeContext, r.treeContext = bt(o, 1, 0);
            try {
              be(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else be(t, r, l);
          return;
        case e:
          o = o.type, l = vn(o, l), qr(t, r, o, l, f);
          return;
        case pr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, m = M, M = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: p, value: l }, r.context = l, be(t, r, f), t = M, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = M = t.parent, r.context = t;
          return;
        case or:
          l = l.children, l = l(o._currentValue), be(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = vn(o, l), qr(t, r, o, l, void 0);
          return;
      }
      throw Error(u(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function be(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case sr:
          qr(t, r, o.type, o.props, o.ref);
          return;
        case Vt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), be(t, r, o);
          return;
      }
      if (It(o)) {
        yn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var f = [];
          do
            f.push(o.value), o = l.next();
          while (!o.done);
          yn(t, r, f);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = G(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = G(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function yn(t, r, o) {
    for (var l = o.length, f = 0; f < l; f++) {
      var p = r.treeContext;
      r.treeContext = bt(p, l, f);
      try {
        Xr(t, r, o[f]);
      } finally {
        r.treeContext = p;
      }
    }
  }
  function Xr(t, r, o) {
    var l = r.blockedSegment.formatContext, f = r.legacyContext, p = r.context;
    try {
      return be(t, r, o);
    } catch (b) {
      if (Wr(), typeof b == "object" && b !== null && typeof b.then == "function") {
        o = b;
        var m = r.blockedSegment, x = Fr(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(x), m.lastPushedText = !1, t = Gr(t, r.node, r.blockedBoundary, x, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p), b;
    }
  }
  function Kn(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, Sn(this, r, t);
  }
  function gn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return gn(f, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Or(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Or(t, o);
    } else t.completedSegments.push(r);
  }
  function Sn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = vr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Or(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(Kn, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Or(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function xn(t) {
    if (t.status !== 2) {
      var r = M, o = Vr.current;
      Vr.current = dn;
      var l = br;
      br = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var m = f[p], x = t, b = m.blockedSegment;
          if (b.status === 0) {
            ft(m.context);
            try {
              be(x, m, m.node), b.lastPushedText && b.textEmbedded && b.chunks.push(tt), m.abortSet.delete(m), b.status = 1, Sn(x, m.blockedBoundary, b);
            } catch (Ge) {
              if (Wr(), typeof Ge == "object" && Ge !== null && typeof Ge.then == "function") {
                var P = m.ping;
                Ge.then(P, P);
              } else {
                m.abortSet.delete(m), b.status = 4;
                var O = m.blockedBoundary, V = Ge, Fe = yr(x, V);
                if (O === null ? Mr(x, V) : (O.pendingTasks--, O.forceClientRender || (O.forceClientRender = !0, O.errorDigest = Fe, O.parentFlushed && x.clientRenderedBoundaries.push(O))), x.allPendingTasks--, x.allPendingTasks === 0) {
                  var Ve = x.onAllReady;
                  Ve();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, p), t.destination !== null && Yr(t, t.destination);
      } catch (Ge) {
        yr(t, Ge), Mr(t, Ge);
      } finally {
        br = l, Vr.current = o, o === dn && ft(r);
      }
    }
  }
  function Ir(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, Te), y(r, t.placeholderPrefix), t = k(l.toString(16)), y(r, t), R(r, Bt);
      case 1:
        o.status = 2;
        var f = !0;
        l = o.chunks;
        var p = 0;
        o = o.children;
        for (var m = 0; m < o.length; m++) {
          for (f = o[m]; p < f.index; p++) y(r, l[p]);
          f = Lr(t, r, f);
        }
        for (; p < l.length - 1; p++) y(r, l[p]);
        return p < l.length && (f = R(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function Lr(t, r, o) {
    var l = o.boundary;
    if (l === null) return Ir(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, R(r, ot), y(r, kt), l && (y(r, Je), y(r, k(H(l))), y(r, ke)), R(r, Ut), Ir(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = E(f.boundaryPrefix + p.toString(16)), l = l.id = f, ue(r, t.responseState, l), Ir(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ue(r, t.responseState, l.id), Ir(t, r, o);
    else {
      if (R(r, zt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Lr(t, r, o[0]);
    }
    return R(r, Tt);
  }
  function En(t, r, o) {
    return Ce(r, t.responseState, o.formatContext, o.id), Lr(t, r, o), Ke(r, o.formatContext);
  }
  function wn(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) Tn(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, C)), l === null) throw Error(u(395));
    return o = k(o.toString(16)), y(r, l), y(r, S), y(r, t.segmentPrefix), y(r, o), R(r, _);
  }
  function Tn(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return En(t, r, l);
    }
    return En(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, At) : (t.sentCompleteSegmentFunction = !0, y(r, nr)), y(r, t.segmentPrefix), f = k(f.toString(16)), y(r, f), y(r, ct), y(r, t.placeholderPrefix), y(r, f), R(r, pt);
  }
  function Yr(t, r) {
    g = new Uint8Array(512), T = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Lr(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && R(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var m = f[p];
        l = r;
        var x = t.responseState, b = m.id, P = m.errorDigest, O = m.errorMessage, V = m.errorComponentStack;
        if (y(l, x.startInlineScript), x.sentClientRenderFunction ? y(l, z) : (x.sentClientRenderFunction = !0, y(
          l,
          N
        )), b === null) throw Error(u(395));
        y(l, b), y(l, Q), (P || O || V) && (y(l, Re), y(l, k(Pe(P || "")))), (O || V) && (y(l, Re), y(l, k(Pe(O || "")))), V && (y(l, Re), y(l, k(Pe(V)))), R(l, K);
      }
      f.splice(0, p);
      var Fe = t.completedBoundaries;
      for (p = 0; p < Fe.length; p++) wn(t, r, Fe[p]);
      Fe.splice(0, p), D(r), g = new Uint8Array(512), T = 0;
      var Ve = t.partialBoundaries;
      for (p = 0; p < Ve.length; p++) {
        var Ge = Ve[p];
        e: {
          f = t, m = r;
          var Pr = Ge.completedSegments;
          for (x = 0; x < Pr.length; x++) if (!Tn(
            f,
            m,
            Ge,
            Pr[x]
          )) {
            x++, Pr.splice(0, x);
            var _n = !1;
            break e;
          }
          Pr.splice(0, x), _n = !0;
        }
        if (!_n) {
          t.destination = null, p++, Ve.splice(0, p);
          return;
        }
      }
      Ve.splice(0, p);
      var Zr = t.completedBoundaries;
      for (p = 0; p < Zr.length; p++) wn(t, r, Zr[p]);
      Zr.splice(0, p);
    } finally {
      D(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function kn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return gn(l, t, r);
      }), o.clear(), t.destination !== null && Yr(t, t.destination);
    } catch (l) {
      yr(t, l), Mr(t, l);
    }
  }
  return Br.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, m = new Promise(function(O, V) {
        p = O, f = V;
      }), x = Jn(t, Pt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Nt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var O = new ReadableStream({ type: "bytes", pull: function(V) {
          if (x.status === 1) x.status = 2, re(V, x.fatalError);
          else if (x.status !== 2 && x.destination === null) {
            x.destination = V;
            try {
              Yr(x, V);
            } catch (Fe) {
              yr(x, Fe), Mr(x, Fe);
            }
          }
        }, cancel: function() {
          kn(x);
        } }, { highWaterMark: 0 });
        O.allReady = m, o(O);
      }, function(O) {
        m.catch(function() {
        }), l(O);
      }, f);
      if (r && r.signal) {
        var b = r.signal, P = function() {
          kn(x, b.reason), b.removeEventListener("abort", P);
        };
        b.addEventListener("abort", P);
      }
      xn(x);
    });
  }, Br.version = "18.3.1", Br;
}
var ir, $n;
ir = Po(), $n = No();
ir.version;
ir.renderToString;
ir.renderToStaticMarkup;
ir.renderToNodeStream;
ir.renderToStaticNodeStream;
$n.renderToReadableStream;
const Do = "staticMarkup";
function Bo() {
  const u = Qn().indexOf(Do) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const zo = ({ gaData: v, prefix: u = "", children: g }) => {
  const { isReact: T } = Bo(), { onClick: y, ...R } = g.props;
  if (T)
    return xr.cloneElement(g, {
      ...R,
      onClick: (k) => (Lo(v), y ? y(k) : !0)
    });
  let D = "";
  ["input", "header", "header-input"].includes(u) && (D = `-${u}`);
  const L = {
    [`data-ga${D}`]: v.text,
    [`data-ga${D}-name`]: v.name,
    [`data-ga${D}-event`]: v.event,
    [`data-ga${D}-action`]: v.action,
    [`data-ga${D}-type`]: v.type,
    [`data-ga${D}-region`]: v.region,
    [`data-ga${D}-section`]: v.section,
    [`data-ga${D}-component`]: v.component
  };
  return xr.cloneElement(g, {
    ...R,
    onClick: y,
    ...L
  });
}, Uo = {
  name: "onclick",
  event: "collapse",
  type: "click",
  region: "main content"
}, $o = ({ title: v, links: u }) => /* @__PURE__ */ de.jsxs("div", { className: "col-xl-3 col-lg-4 col-md-5 col-sm-12", children: [
  /* @__PURE__ */ de.jsx("h2", { children: v }),
  /* @__PURE__ */ de.jsxs(
    "div",
    {
      className: "sidebar-toggler",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#sidebar-left",
      "aria-expanded": "false",
      "aria-controls": "sidebar-left",
      children: [
        /* @__PURE__ */ de.jsx("p", { children: "Select Section" }),
        /* @__PURE__ */ de.jsx("span", { className: "fas fa-chevron-up" })
      ]
    }
  ),
  /* @__PURE__ */ de.jsx(
    "nav",
    {
      id: "sidebar-left",
      className: "sidebar collapse",
      "aria-label": "Secondary",
      children: u.map((g, T) => g.items ? /* @__PURE__ */ de.jsxs("div", { className: "card card-foldable", children: [
        /* @__PURE__ */ de.jsx("div", { className: "card-header", children: /* @__PURE__ */ de.jsx(
          zo,
          {
            gaData: { ...Uo, section: v },
            children: /* @__PURE__ */ de.jsxs(
              "a",
              {
                id: `card${T}`,
                className: "collapsed nav-link",
                href: `#cardBody${T}`,
                "data-bs-toggle": "collapse",
                "data-bs-target": `#cardBody${T}`,
                "aria-expanded": "false",
                "aria-controls": `cardBody${T}`,
                children: [
                  g.text,
                  /* @__PURE__ */ de.jsx("span", { className: "fas fa-chevron-down ms-1" })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ de.jsx(
          "div",
          {
            id: `cardBody${T}`,
            className: "collapse card-body",
            "aria-labelledby": `card${T}`,
            "data-bs-parent": ".sidebar",
            children: g.items.map((y) => /* @__PURE__ */ de.jsx(
              "a",
              {
                href: y.href,
                className: `nav-link${y.isActive ? " is-active" : ""}`,
                children: y.text
              },
              g.href
            ))
          }
        )
      ] }, T) : /* @__PURE__ */ de.jsx("div", { className: "nav-link-container", children: /* @__PURE__ */ de.jsx(
        "a",
        {
          className: `nav-link${g.isActive ? " is-active" : ""}`,
          href: g.href,
          children: g.text
        }
      ) }, T))
    }
  )
] });
export {
  $o as SidebarMenu
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
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
