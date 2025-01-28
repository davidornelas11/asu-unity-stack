import xr, { useId as no, useState as oo } from "react";
function zn(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var Un = { exports: {} }, gr = {};
var Rn;
function io() {
  if (Rn) return gr;
  Rn = 1;
  var m = xr, u = Symbol.for("react.element"), g = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, y = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(b, w, x) {
    var ee, z = {}, Oe = null, Me = null;
    x !== void 0 && (Oe = "" + x), w.key !== void 0 && (Oe = "" + w.key), w.ref !== void 0 && (Me = w.ref);
    for (ee in w) k.call(w, ee) && !C.hasOwnProperty(ee) && (z[ee] = w[ee]);
    if (b && b.defaultProps) for (ee in w = b.defaultProps, w) z[ee] === void 0 && (z[ee] = w[ee]);
    return { $$typeof: u, type: b, key: Oe, ref: Me, props: z, _owner: y.current };
  }
  return gr.Fragment = g, gr.jsx = A, gr.jsxs = A, gr;
}
Un.exports = io();
var ht = Un.exports, Hn = { exports: {} };
(function(m) {
  (function() {
    var u = {}.hasOwnProperty;
    function g() {
      for (var C = "", A = 0; A < arguments.length; A++) {
        var b = arguments[A];
        b && (C = y(C, k(b)));
      }
      return C;
    }
    function k(C) {
      if (typeof C == "string" || typeof C == "number")
        return C;
      if (typeof C != "object")
        return "";
      if (Array.isArray(C))
        return g.apply(null, C);
      if (C.toString !== Object.prototype.toString && !C.toString.toString().includes("[native code]"))
        return C.toString();
      var A = "";
      for (var b in C)
        u.call(C, b) && C[b] && (A = y(A, b));
      return A;
    }
    function y(C, A) {
      return A ? C ? C + " " + A : C + A : C;
    }
    m.exports ? (g.default = g, m.exports = g) : window.classNames = g;
  })();
})(Hn);
var lo = Hn.exports;
const ao = /* @__PURE__ */ zn(lo);
var $n = { exports: {} }, Jr, An;
function so() {
  if (An) return Jr;
  An = 1;
  var m = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jr = m, Jr;
}
var Kr, bn;
function uo() {
  if (bn) return Kr;
  bn = 1;
  var m = so();
  function u() {
  }
  function g() {
  }
  return g.resetWarningCache = u, Kr = function() {
    function k(A, b, w, x, ee, z) {
      if (z !== m) {
        var Oe = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Oe.name = "Invariant Violation", Oe;
      }
    }
    k.isRequired = k;
    function y() {
      return k;
    }
    var C = {
      array: k,
      bigint: k,
      bool: k,
      func: k,
      number: k,
      object: k,
      string: k,
      symbol: k,
      any: k,
      arrayOf: y,
      element: k,
      elementType: k,
      instanceOf: y,
      node: k,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: g,
      resetWarningCache: u
    };
    return C.PropTypes = C, C;
  }, Kr;
}
$n.exports = uo()();
var co = $n.exports;
const I = /* @__PURE__ */ zn(co);
I.shape({
  url: I.string,
  altText: I.string,
  cssClass: I.arrayOf(I.string),
  size: I.oneOf(["small", "medium", "large"])
});
I.shape({
  text: I.string,
  maxWidth: I.string,
  cssClass: I.arrayOf(I.string),
  highlightColor: I.oneOf(["gold", "black"])
});
I.shape({
  color: I.oneOf(["gold", "maroon", "gray", "dark"]),
  content: I.shape({
    icon: I.string,
    header: I.string,
    body: I.string
  })
});
const fo = I.shape({
  text: I.string,
  name: I.string,
  event: I.string,
  action: I.string,
  type: I.string,
  region: I.string,
  section: I.string,
  component: I.string
});
function Ot(m) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Ot(m);
}
function ln(m, u) {
  return ln = Object.setPrototypeOf || function(k, y) {
    return k.__proto__ = y, k;
  }, ln(m, u);
}
function po() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zr(m, u, g) {
  return po() ? zr = Reflect.construct : zr = function(y, C, A) {
    var b = [null];
    b.push.apply(b, C);
    var w = Function.bind.apply(y, b), x = new w();
    return A && ln(x, A.prototype), x;
  }, zr.apply(null, arguments);
}
function Xe(m) {
  return ho(m) || mo(m) || vo(m) || yo();
}
function ho(m) {
  if (Array.isArray(m)) return an(m);
}
function mo(m) {
  if (typeof Symbol < "u" && m[Symbol.iterator] != null || m["@@iterator"] != null) return Array.from(m);
}
function vo(m, u) {
  if (m) {
    if (typeof m == "string") return an(m, u);
    var g = Object.prototype.toString.call(m).slice(8, -1);
    if (g === "Object" && m.constructor && (g = m.constructor.name), g === "Map" || g === "Set") return Array.from(m);
    if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return an(m, u);
  }
}
function an(m, u) {
  (u == null || u > m.length) && (u = m.length);
  for (var g = 0, k = new Array(u); g < u; g++) k[g] = m[g];
  return k;
}
function yo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var go = Object.hasOwnProperty, Fn = Object.setPrototypeOf, So = Object.isFrozen, xo = Object.getPrototypeOf, Eo = Object.getOwnPropertyDescriptor, he = Object.freeze, Pe = Object.seal, wo = Object.create, jn = typeof Reflect < "u" && Reflect, Hr = jn.apply, sn = jn.construct;
Hr || (Hr = function(u, g, k) {
  return u.apply(g, k);
});
he || (he = function(u) {
  return u;
});
Pe || (Pe = function(u) {
  return u;
});
sn || (sn = function(u, g) {
  return zr(u, Xe(g));
});
var To = De(Array.prototype.forEach), On = De(Array.prototype.pop), Sr = De(Array.prototype.push), Ur = De(String.prototype.toLowerCase), Qr = De(String.prototype.toString), Mn = De(String.prototype.match), qe = De(String.prototype.replace), ko = De(String.prototype.indexOf), _o = De(String.prototype.trim), ue = De(RegExp.prototype.test), en = Co(TypeError);
function De(m) {
  return function(u) {
    for (var g = arguments.length, k = new Array(g > 1 ? g - 1 : 0), y = 1; y < g; y++)
      k[y - 1] = arguments[y];
    return Hr(m, u, k);
  };
}
function Co(m) {
  return function() {
    for (var u = arguments.length, g = new Array(u), k = 0; k < u; k++)
      g[k] = arguments[k];
    return sn(m, g);
  };
}
function P(m, u, g) {
  var k;
  g = (k = g) !== null && k !== void 0 ? k : Ur, Fn && Fn(m, null);
  for (var y = u.length; y--; ) {
    var C = u[y];
    if (typeof C == "string") {
      var A = g(C);
      A !== C && (So(u) || (u[y] = A), C = A);
    }
    m[C] = !0;
  }
  return m;
}
function Zt(m) {
  var u = wo(null), g;
  for (g in m)
    Hr(go, m, [g]) === !0 && (u[g] = m[g]);
  return u;
}
function Pr(m, u) {
  for (; m !== null; ) {
    var g = Eo(m, u);
    if (g) {
      if (g.get)
        return De(g.get);
      if (typeof g.value == "function")
        return De(g.value);
    }
    m = xo(m);
  }
  function k(y) {
    return console.warn("fallback value for", y), null;
  }
  return k;
}
var In = he(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), tn = he(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rn = he(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ro = he(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), nn = he(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ao = he(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nn = he(["#text"]), Ln = he(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), on = he(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Pn = he(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = he(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), bo = Pe(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fo = Pe(/<%[\w\W]*|[\w\W]*%>/gm), Oo = Pe(/\${[\w\W]*}/gm), Mo = Pe(/^data-[\-\w.\u00B7-\uFFFF]/), Io = Pe(/^aria-[\-\w]+$/), No = Pe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Lo = Pe(/^(?:\w+script|data):/i), Po = Pe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Do = Pe(/^html$/i), Bo = Pe(/^[a-z][.\w]*(-[.\w]+)+$/i), zo = function() {
  return typeof window > "u" ? null : window;
}, Uo = function(u, g) {
  if (Ot(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var k = null, y = "data-tt-policy-suffix";
  g.currentScript && g.currentScript.hasAttribute(y) && (k = g.currentScript.getAttribute(y));
  var C = "dompurify" + (k ? "#" + k : "");
  try {
    return u.createPolicy(C, {
      createHTML: function(b) {
        return b;
      },
      createScriptURL: function(b) {
        return b;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + C + " could not be created."), null;
  }
};
function Wn() {
  var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zo(), u = function(s) {
    return Wn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !m || !m.document || m.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var g = m.document, k = m.document, y = m.DocumentFragment, C = m.HTMLTemplateElement, A = m.Node, b = m.Element, w = m.NodeFilter, x = m.NamedNodeMap, ee = x === void 0 ? m.NamedNodeMap || m.MozNamedAttrMap : x, z = m.HTMLFormElement, Oe = m.DOMParser, Me = m.trustedTypes, Z = b.prototype, Kt = Pr(Z, "cloneNode"), oe = Pr(Z, "nextSibling"), J = Pr(Z, "childNodes"), ae = Pr(Z, "parentNode");
  if (typeof C == "function") {
    var Qe = k.createElement("template");
    Qe.content && Qe.content.ownerDocument && (k = Qe.content.ownerDocument);
  }
  var ie = Uo(Me, g), mt = ie ? ie.createHTML("") : "", re = k, $ = re.implementation, lr = re.createNodeIterator, Mt = re.createDocumentFragment, It = re.getElementsByTagName, Qt = g.importNode, pe = {};
  try {
    pe = Zt(k).documentMode ? k.documentMode : {};
  } catch {
  }
  var me = {};
  u.isSupported = typeof ae == "function" && $ && $.createHTMLDocument !== void 0 && pe !== 9;
  var vt = bo, yt = Fo, Nt = Oo, ar = Mo, Lt = Io, ve = Lo, Pt = Po, et = Bo, tt = No, q = null, gt = P({}, [].concat(Xe(In), Xe(tn), Xe(rn), Xe(nn), Xe(Nn))), K = null, St = P({}, [].concat(Xe(Ln), Xe(on), Xe(Pn), Xe(Dr))), j = Object.seal(Object.create(null, {
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
  })), Be = null, de = null, Ie = !0, ye = !0, xt = !1, ne = !0, se = !1, Et = !0, ge = !1, Dt = !1, Ye = !1, Se = !1, ze = !1, rt = !1, we = !0, le = !1, er = "user-content-", wt = !0, Ze = !1, Ue = {}, Te = null, Bt = P({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), zt = null, tr = P({}, ["audio", "video", "img", "source", "image", "track"]), nt = null, ot = P({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", kt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml", Je = ke, Ut = !1, ce = null, Ht = P({}, [Tt, kt, ke], Qr), xe, U = ["application/xhtml+xml", "text/html"], it = "text/html", V, Ee = null, Ne = k.createElement("form"), lt = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, _e = function(s) {
    Ee && Ee === s || ((!s || Ot(s) !== "object") && (s = {}), s = Zt(s), xe = // eslint-disable-next-line unicorn/prefer-includes
    U.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? xe = it : xe = s.PARSER_MEDIA_TYPE, V = xe === "application/xhtml+xml" ? Qr : Ur, q = "ALLOWED_TAGS" in s ? P({}, s.ALLOWED_TAGS, V) : gt, K = "ALLOWED_ATTR" in s ? P({}, s.ALLOWED_ATTR, V) : St, ce = "ALLOWED_NAMESPACES" in s ? P({}, s.ALLOWED_NAMESPACES, Qr) : Ht, nt = "ADD_URI_SAFE_ATTR" in s ? P(
      Zt(ot),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : ot, zt = "ADD_DATA_URI_TAGS" in s ? P(
      Zt(tr),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : tr, Te = "FORBID_CONTENTS" in s ? P({}, s.FORBID_CONTENTS, V) : Bt, Be = "FORBID_TAGS" in s ? P({}, s.FORBID_TAGS, V) : {}, de = "FORBID_ATTR" in s ? P({}, s.FORBID_ATTR, V) : {}, Ue = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ie = s.ALLOW_ARIA_ATTR !== !1, ye = s.ALLOW_DATA_ATTR !== !1, xt = s.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = s.SAFE_FOR_TEMPLATES || !1, Et = s.SAFE_FOR_XML !== !1, ge = s.WHOLE_DOCUMENT || !1, Se = s.RETURN_DOM || !1, ze = s.RETURN_DOM_FRAGMENT || !1, rt = s.RETURN_TRUSTED_TYPE || !1, Ye = s.FORCE_BODY || !1, we = s.SANITIZE_DOM !== !1, le = s.SANITIZE_NAMED_PROPS || !1, wt = s.KEEP_CONTENT !== !1, Ze = s.IN_PLACE || !1, tt = s.ALLOWED_URI_REGEXP || tt, Je = s.NAMESPACE || ke, j = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (ye = !1), ze && (Se = !0), Ue && (q = P({}, Xe(Nn)), K = [], Ue.html === !0 && (P(q, In), P(K, Ln)), Ue.svg === !0 && (P(q, tn), P(K, on), P(K, Dr)), Ue.svgFilters === !0 && (P(q, rn), P(K, on), P(K, Dr)), Ue.mathMl === !0 && (P(q, nn), P(K, Pn), P(K, Dr))), s.ADD_TAGS && (q === gt && (q = Zt(q)), P(q, s.ADD_TAGS, V)), s.ADD_ATTR && (K === St && (K = Zt(K)), P(K, s.ADD_ATTR, V)), s.ADD_URI_SAFE_ATTR && P(nt, s.ADD_URI_SAFE_ATTR, V), s.FORBID_CONTENTS && (Te === Bt && (Te = Zt(Te)), P(Te, s.FORBID_CONTENTS, V)), wt && (q["#text"] = !0), ge && P(q, ["html", "head", "body"]), q.table && (P(q, ["tbody"]), delete Be.tbody), he && he(s), Ee = s);
  }, $t = P({}, ["mi", "mo", "mn", "ms", "mtext"]), _t = P({}, ["annotation-xml"]), jt = P({}, ["title", "style", "font", "a", "script"]), at = P({}, tn);
  P(at, rn), P(at, Ro);
  var Ct = P({}, nn);
  P(Ct, Ao);
  var rr = function(s) {
    var S = ae(s);
    (!S || !S.tagName) && (S = {
      namespaceURI: Je,
      tagName: "template"
    });
    var _ = Ur(s.tagName), B = Ur(S.tagName);
    return ce[s.namespaceURI] ? s.namespaceURI === kt ? S.namespaceURI === ke ? _ === "svg" : S.namespaceURI === Tt ? _ === "svg" && (B === "annotation-xml" || $t[B]) : !!at[_] : s.namespaceURI === Tt ? S.namespaceURI === ke ? _ === "math" : S.namespaceURI === kt ? _ === "math" && _t[B] : !!Ct[_] : s.namespaceURI === ke ? S.namespaceURI === kt && !_t[B] || S.namespaceURI === Tt && !$t[B] ? !1 : !Ct[_] && (jt[_] || !at[_]) : !!(xe === "application/xhtml+xml" && ce[s.namespaceURI]) : !1;
  }, fe = function(s) {
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
    if (S.removeAttribute(s), s === "is" && !K[s])
      if (Se || ze)
        try {
          fe(S);
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
      var B = Mn(s, /^[\r\n\t ]+/);
      _ = B && B[0];
    }
    xe === "application/xhtml+xml" && Je === ke && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var H = ie ? ie.createHTML(s) : s;
    if (Je === ke)
      try {
        S = new Oe().parseFromString(H, xe);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = $.createDocument(Je, "template", null);
      try {
        S.documentElement.innerHTML = Ut ? mt : H;
      } catch {
      }
    }
    var te = S.body || S.documentElement;
    return s && _ && te.insertBefore(k.createTextNode(_), te.childNodes[0] || null), Je === ke ? It.call(S, ge ? "html" : "body")[0] : ge ? S.documentElement : te;
  }, Wt = function(s) {
    return lr.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      w.SHOW_ELEMENT | w.SHOW_COMMENT | w.SHOW_TEXT | w.SHOW_PROCESSING_INSTRUCTION | w.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ut = function(s) {
    return s instanceof z && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof ee) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, He = function(s) {
    return Ot(A) === "object" ? s instanceof A : s && Ot(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Ce = function(s, S, _) {
    me[s] && To(me[s], function(B) {
      B.call(u, S, _, Ee);
    });
  }, Ke = function(s) {
    var S;
    if (Ce("beforeSanitizeElements", s, null), ut(s) || ue(/[\u0080-\uFFFF]/, s.nodeName))
      return fe(s), !0;
    var _ = V(s.nodeName);
    if (Ce("uponSanitizeElement", s, {
      tagName: _,
      allowedTags: q
    }), s.hasChildNodes() && !He(s.firstElementChild) && (!He(s.content) || !He(s.content.firstElementChild)) && ue(/<[/\w]/g, s.innerHTML) && ue(/<[/\w]/g, s.textContent) || _ === "select" && ue(/<template/i, s.innerHTML) || s.nodeType === 7 || Et && s.nodeType === 8 && ue(/<[/\w]/g, s.data))
      return fe(s), !0;
    if (!q[_] || Be[_]) {
      if (!Be[_] && At(_) && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, _) || j.tagNameCheck instanceof Function && j.tagNameCheck(_)))
        return !1;
      if (wt && !Te[_]) {
        var B = ae(s) || s.parentNode, H = J(s) || s.childNodes;
        if (H && B)
          for (var te = H.length, Q = te - 1; Q >= 0; --Q) {
            var Re = Kt(H[Q], !0);
            Re.__removalCount = (s.__removalCount || 0) + 1, B.insertBefore(Re, oe(s));
          }
      }
      return fe(s), !0;
    }
    return s instanceof b && !rr(s) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && ue(/<\/no(script|embed|frames)/i, s.innerHTML) ? (fe(s), !0) : (se && s.nodeType === 3 && (S = s.textContent, S = qe(S, vt, " "), S = qe(S, yt, " "), S = qe(S, Nt, " "), s.textContent !== S && (Sr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = S)), Ce("afterSanitizeElements", s, null), !1);
  }, nr = function(s, S, _) {
    if (we && (S === "id" || S === "name") && (_ in k || _ in Ne))
      return !1;
    if (!(ye && !de[S] && ue(ar, S))) {
      if (!(Ie && ue(Lt, S))) {
        if (!K[S] || de[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(s) && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, s) || j.tagNameCheck instanceof Function && j.tagNameCheck(s)) && (j.attributeNameCheck instanceof RegExp && ue(j.attributeNameCheck, S) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, _) || j.tagNameCheck instanceof Function && j.tagNameCheck(_)))
          ) return !1;
        } else if (!nt[S]) {
          if (!ue(tt, qe(_, Pt, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && s !== "script" && ko(_, "data:") === 0 && zt[s])) {
              if (!(xt && !ue(ve, qe(_, Pt, "")))) {
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
    return s !== "annotation-xml" && Mn(s, et);
  }, ct = function(s) {
    var S, _, B, H;
    Ce("beforeSanitizeAttributes", s, null);
    var te = s.attributes;
    if (te) {
      var Q = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: K
      };
      for (H = te.length; H--; ) {
        S = te[H];
        var Re = S, X = Re.name, Le = Re.namespaceURI;
        if (_ = X === "value" ? S.value : _o(S.value), B = V(X), Q.attrName = B, Q.attrValue = _, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ce("uponSanitizeAttribute", s, Q), _ = Q.attrValue, !Q.forceKeepAttr && (Rt(X, s), !!Q.keepAttr)) {
          if (!ne && ue(/\/>/i, _)) {
            Rt(X, s);
            continue;
          }
          se && (_ = qe(_, vt, " "), _ = qe(_, yt, " "), _ = qe(_, Nt, " "));
          var $e = V(s.nodeName);
          if (nr($e, B, _)) {
            if (le && (B === "id" || B === "name") && (Rt(X, s), _ = er + _), Et && ue(/((--!?|])>)|<\/(style|title)/i, _)) {
              Rt(X, s);
              continue;
            }
            if (ie && Ot(Me) === "object" && typeof Me.getAttributeType == "function" && !Le)
              switch (Me.getAttributeType($e, B)) {
                case "TrustedHTML": {
                  _ = ie.createHTML(_);
                  break;
                }
                case "TrustedScriptURL": {
                  _ = ie.createScriptURL(_);
                  break;
                }
              }
            try {
              Le ? s.setAttributeNS(Le, X, _) : s.setAttribute(X, _), ut(s) ? fe(s) : On(u.removed);
            } catch {
            }
          }
        }
      }
      Ce("afterSanitizeAttributes", s, null);
    }
  }, ft = function R(s) {
    var S, _ = Wt(s);
    for (Ce("beforeSanitizeShadowDOM", s, null); S = _.nextNode(); )
      Ce("uponSanitizeShadowNode", S, null), !Ke(S) && (S.content instanceof y && R(S.content), ct(S));
    Ce("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(R) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, _, B, H, te;
    if (Ut = !R, Ut && (R = "<!-->"), typeof R != "string" && !He(R))
      if (typeof R.toString == "function") {
        if (R = R.toString(), typeof R != "string")
          throw en("dirty is not a string, aborting");
      } else
        throw en("toString is not a function");
    if (!u.isSupported) {
      if (Ot(m.toStaticHTML) === "object" || typeof m.toStaticHTML == "function") {
        if (typeof R == "string")
          return m.toStaticHTML(R);
        if (He(R))
          return m.toStaticHTML(R.outerHTML);
      }
      return R;
    }
    if (Dt || _e(s), u.removed = [], typeof R == "string" && (Ze = !1), Ze) {
      if (R.nodeName) {
        var Q = V(R.nodeName);
        if (!q[Q] || Be[Q])
          throw en("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (R instanceof A)
      S = st("<!---->"), _ = S.ownerDocument.importNode(R, !0), _.nodeType === 1 && _.nodeName === "BODY" || _.nodeName === "HTML" ? S = _ : S.appendChild(_);
    else {
      if (!Se && !se && !ge && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return ie && rt ? ie.createHTML(R) : R;
      if (S = st(R), !S)
        return Se ? null : rt ? mt : "";
    }
    S && Ye && fe(S.firstChild);
    for (var Re = Wt(Ze ? R : S); B = Re.nextNode(); )
      B.nodeType === 3 && B === H || Ke(B) || (B.content instanceof y && ft(B.content), ct(B), H = B);
    if (H = null, Ze)
      return R;
    if (Se) {
      if (ze)
        for (te = Mt.call(S.ownerDocument); S.firstChild; )
          te.appendChild(S.firstChild);
      else
        te = S;
      return (K.shadowroot || K.shadowrootmod) && (te = Qt.call(g, te, !0)), te;
    }
    var X = ge ? S.outerHTML : S.innerHTML;
    return ge && q["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && ue(Do, S.ownerDocument.doctype.name) && (X = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + X), se && (X = qe(X, vt, " "), X = qe(X, yt, " "), X = qe(X, Nt, " ")), ie && rt ? ie.createHTML(X) : X;
  }, u.setConfig = function(R) {
    _e(R), Dt = !0;
  }, u.clearConfig = function() {
    Ee = null, Dt = !1;
  }, u.isValidAttribute = function(R, s, S) {
    Ee || _e({});
    var _ = V(R), B = V(s);
    return nr(_, B, S);
  }, u.addHook = function(R, s) {
    typeof s == "function" && (me[R] = me[R] || [], Sr(me[R], s));
  }, u.removeHook = function(R) {
    if (me[R])
      return On(me[R]);
  }, u.removeHooks = function(R) {
    me[R] && (me[R] = []);
  }, u.removeAllHooks = function() {
    me = {};
  }, u;
}
Wn();
I.shape({
  event: I.string,
  action: I.string,
  name: I.string,
  region: I.string,
  section: I.string,
  component: I.string,
  type: I.string,
  text: I.string
});
const Ho = ({
  event: m = "",
  action: u = "",
  name: g = "",
  type: k = "",
  section: y = "",
  text: C = "",
  region: A = "",
  component: b = ""
}) => {
  const { dataLayer: w } = window, x = {
    event: m.toLowerCase(),
    action: u.toLowerCase(),
    name: g.toLowerCase(),
    type: k.toLowerCase(),
    region: A.toLowerCase(),
    section: y.toLowerCase(),
    text: C.toLowerCase(),
    component: b.toLowerCase()
  };
  w && w.push(x);
};
var Jt = {};
var Dn;
function $o() {
  if (Dn) return Jt;
  Dn = 1;
  var m = xr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, C = {};
  function A(e) {
    return g.call(C, e) ? !0 : g.call(y, e) ? !1 : k.test(e) ? C[e] = !0 : (y[e] = !0, !1);
  }
  function b(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new b(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    w[n] = new b(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new b(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new b(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new b(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new b(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var x = /[\-:]([a-z])/g;
  function ee(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      x,
      ee
    );
    w[n] = new b(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(x, ee);
    w[n] = new b(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(x, ee);
    w[n] = new b(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var z = {
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
  }, Oe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(e) {
    Oe.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), z[n] = z[e];
    });
  });
  var Me = /["'&<>]/;
  function Z(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = Me.exec(e);
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
  var Kt = /([A-Z])/g, oe = /^ms-/, J = Array.isArray;
  function ae(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function Qe(e, n, i) {
    switch (n) {
      case "select":
        return ae(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return ae(2, null);
      case "math":
        return ae(3, null);
      case "foreignObject":
        return ae(1, null);
      case "table":
        return ae(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ae(5, null);
      case "colgroup":
        return ae(7, null);
      case "tr":
        return ae(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? ae(1, null) : e;
  }
  var ie = /* @__PURE__ */ new Map();
  function mt(e, n, i) {
    if (typeof i != "object") throw Error(u(62));
    n = !0;
    for (var a in i) if (g.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = Z(a);
          d = Z(("" + d).trim());
        } else {
          c = a;
          var h = ie.get(c);
          h !== void 0 || (h = Z(c.replace(Kt, "-$1").toLowerCase().replace(oe, "-ms-")), ie.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || g.call(z, a) ? "" + d : d + "px" : Z(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function re(e, n, i, a) {
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
      if (n = w.hasOwnProperty(i) ? w[i] : null, n !== null) {
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
            a === !0 ? e.push(" ", i, '=""') : a !== !1 && e.push(" ", i, '="', Z(a), '"');
            break;
          case 5:
            isNaN(a) || e.push(" ", i, '="', Z(a), '"');
            break;
          case 6:
            !isNaN(a) && 1 <= a && e.push(" ", i, '="', Z(a), '"');
            break;
          default:
            n.sanitizeURL && (a = "" + a), e.push(" ", i, '="', Z(a), '"');
        }
      } else if (A(i)) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = i.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", i, '="', Z(a), '"');
      }
    }
  }
  function $(e, n, i) {
    if (n != null) {
      if (i != null) throw Error(u(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function lr(e) {
    var n = "";
    return m.Children.forEach(e, function(i) {
      i != null && (n += i);
    }), n;
  }
  function Mt(e, n, i, a) {
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
          re(e, a, c, h);
      }
    }
    return e.push(">"), $(e, d, i), typeof i == "string" ? (e.push(Z(i)), null) : i;
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
        for (N in i) if (g.call(i, N)) {
          var T = i[N];
          if (T != null) switch (N) {
            case "children":
              c = T;
              break;
            case "dangerouslySetInnerHTML":
              h = T;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              re(e, a, N, T);
          }
        }
        return e.push(">"), $(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(pe("option"));
        var F = T = null, M = null, N = null;
        for (c in i) if (g.call(i, c)) {
          var Y = i[c];
          if (Y != null) switch (c) {
            case "children":
              T = Y;
              break;
            case "selected":
              M = Y;
              break;
            case "dangerouslySetInnerHTML":
              N = Y;
              break;
            case "value":
              F = Y;
            default:
              re(e, a, c, Y);
          }
        }
        if (h != null) if (i = F !== null ? "" + F : lr(T), J(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else M && e.push(' selected=""');
        return e.push(">"), $(e, N, T), T;
      case "textarea":
        e.push(pe("textarea")), N = h = c = null;
        for (T in i) if (g.call(i, T) && (F = i[T], F != null)) switch (T) {
          case "children":
            N = F;
            break;
          case "value":
            c = F;
            break;
          case "defaultValue":
            h = F;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            re(
              e,
              a,
              T,
              F
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), N != null) {
          if (c != null) throw Error(u(92));
          if (J(N) && 1 < N.length) throw Error(u(93));
          c = "" + N;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(Z("" + c)), null;
      case "input":
        e.push(pe("input")), F = N = T = c = null;
        for (h in i) if (g.call(i, h) && (M = i[h], M != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = M;
            break;
          case "defaultValue":
            T = M;
            break;
          case "checked":
            N = M;
            break;
          case "value":
            c = M;
            break;
          default:
            re(e, a, h, M);
        }
        return N !== null ? re(e, a, "checked", N) : F !== null && re(e, a, "checked", F), c !== null ? re(e, a, "value", c) : T !== null && re(e, a, "value", T), e.push("/>"), null;
      case "menuitem":
        e.push(pe("menuitem"));
        for (var je in i) if (g.call(i, je) && (c = i[je], c != null)) switch (je) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            re(e, a, je, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(pe("title")), c = null;
        for (Y in i) if (g.call(i, Y) && (h = i[Y], h != null)) switch (Y) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            re(e, a, Y, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(pe(n)), h = c = null;
        for (F in i) if (g.call(i, F) && (T = i[F], T != null)) switch (F) {
          case "children":
            c = T;
            break;
          case "dangerouslySetInnerHTML":
            h = T;
            break;
          default:
            re(e, a, F, T);
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
            re(e, a, We, c);
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
        return Mt(
          e,
          i,
          n,
          a
        );
      case "html":
        return d.insertionMode === 0 && e.push("<!DOCTYPE html>"), Mt(e, i, n, a);
      default:
        if (n.indexOf("-") === -1 && typeof i.is != "string") return Mt(e, i, n, a);
        e.push(pe(n)), h = c = null;
        for (M in i) if (g.call(i, M) && (T = i[M], T != null)) switch (M) {
          case "children":
            c = T;
            break;
          case "dangerouslySetInnerHTML":
            h = T;
            break;
          case "style":
            mt(e, a, T);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            A(M) && typeof T != "function" && typeof T != "symbol" && e.push(" ", M, '="', Z(T), '"');
        }
        return e.push(">"), $(e, h, c), c;
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
  function Nt(e, n) {
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
  function Lt(e) {
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
  function Pt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Z(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Z(n)), e = !0), e);
  }
  var et = Object.assign, tt = Symbol.for("react.element"), q = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), Be = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), Ye = Symbol.iterator;
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case gt:
        return "Fragment";
      case q:
        return "Portal";
      case St:
        return "Profiler";
      case K:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case j:
        return (e._context.displayName || "Context") + ".Provider";
      case de:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xt:
        return n = e.displayName || null, n !== null ? n : Se(e.type) || "Memo";
      case ne:
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
  function le(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var i = n.parent;
      if (e === null) {
        if (i !== null) throw Error(u(401));
      } else {
        if (i === null) throw Error(u(401));
        le(e, i);
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
    e.depth === n.depth ? le(e, n) : Ze(e, n);
  }
  function Ue(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? le(e, i) : Ue(e, i), n.context._currentValue2 = n.value;
  }
  function Te(e) {
    var n = we;
    n !== e && (n === null ? wt(e) : e === null ? er(n) : n.depth === e.depth ? le(n, e) : n.depth > e.depth ? Ze(n, e) : Ue(n, e), we = e);
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
        var T = n[h];
        T = typeof T == "function" ? T.call(e, c, i, a) : T, T != null && (d ? (d = !1, c = et({}, c, T)) : et(c, T));
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
  var Ut = typeof Object.is == "function" ? Object.is : Je, ce = null, Ht = null, xe = null, U = null, it = !1, V = !1, Ee = 0, Ne = null, lt = 0;
  function _e() {
    if (ce === null) throw Error(u(321));
    return ce;
  }
  function $t() {
    if (0 < lt) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _t() {
    return U === null ? xe === null ? (it = !1, xe = U = $t()) : (it = !0, U = xe) : U.next === null ? (it = !1, U = U.next = $t()) : (it = !0, U = U.next), U;
  }
  function jt() {
    Ht = ce = null, V = !1, xe = null, lt = 0, U = Ne = null;
  }
  function at(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ct(e, n, i) {
    if (ce = _e(), U = _t(), it) {
      var a = U.queue;
      if (n = a.dispatch, Ne !== null && (i = Ne.get(a), i !== void 0)) {
        Ne.delete(a), a = U.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return U.memoizedState = a, [a, n];
      }
      return [U.memoizedState, n];
    }
    return e = e === at ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, U.memoizedState = e, e = U.queue = { last: null, dispatch: null }, e = e.dispatch = fe.bind(null, ce, e), [U.memoizedState, e];
  }
  function rr(e, n) {
    if (ce = _e(), U = _t(), n = n === void 0 ? null : n, U !== null) {
      var i = U.memoizedState;
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
    return e = e(), U.memoizedState = [e, n], e;
  }
  function fe(e, n, i) {
    if (25 <= lt) throw Error(u(301));
    if (e === ce) if (V = !0, e = { action: i, next: null }, Ne === null && (Ne = /* @__PURE__ */ new Map()), i = Ne.get(n), i === void 0) Ne.set(n, e);
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
    ce = _e(), U = _t();
    var n = U.memoizedState;
    return n === null ? (e = { current: e }, U.memoizedState = e) : n;
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
  } }, ut = null, He = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ce(e) {
    return console.error(e), null;
  }
  function Ke() {
  }
  function nr(e, n, i, a, d, c, h, T, F) {
    var M = [], N = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: N, pingedTasks: M, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Ce : d, onAllReady: Ke, onShellReady: h === void 0 ? Ke : h, onShellError: Ke, onFatalError: Ke }, i = ct(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = At(n, e, null, i, N, ze, null, tr), M.push(e), n;
  }
  function At(e, n, i, a, d, c, h, T) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var F = { node: n, ping: function() {
      var M = e.pingedTasks;
      M.push(F), M.length === 1 && sr(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: T };
    return d.add(F), F;
  }
  function ct(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function ft(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function R(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (ce = {}, Ht = n, Ee = 0, e = i(a, d); V; ) V = !1, Ee = 0, lt += 1, U = null, e = i(a, d);
    return jt(), e;
  }
  function S(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var T in i) if (!(T in c)) throw Error(u(108, Se(a) || "Unknown", T));
        a = et({}, h, i);
      }
      n.legacyContext = a, H(e, n, d), n.legacyContext = h;
    } else H(e, n, d);
  }
  function _(e, n) {
    if (e && e.defaultProps) {
      n = et({}, n), e = e.defaultProps;
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function B(e, n, i, a, d) {
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
          H(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else H(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = me(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Qe(h, i, a), Q(e, n, c), d.formatContext = h, i) {
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
        case K:
        case St:
        case gt:
          H(e, n, a.children);
          return;
        case ye:
          H(e, n, a.children);
          return;
        case se:
          throw Error(u(343));
        case Ie:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var T = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, F = ct(e, d.chunks.length, T, d.formatContext, !1, !1);
            d.children.push(F), d.lastPushedText = !1;
            var M = ct(e, 0, null, d.formatContext, !1, !1);
            M.parentFlushed = !0, n.blockedBoundary = T, n.blockedSegment = M;
            try {
              if (Q(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || M.lastPushedText && M.textEmbedded && M.chunks.push("<!-- -->"), M.status = 1, Le(T, M), T.pendingTasks === 0) break e;
            } catch (N) {
              M.status = 4, T.forceClientRender = !0, T.errorDigest = ft(e, N);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = At(e, c, i, F, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case de:
          if (a = s(e, n, i.render, a, d), Ee !== 0) {
            i = n.treeContext, n.treeContext = nt(i, 1, 0);
            try {
              H(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else H(e, n, a);
          return;
        case xt:
          i = i.type, a = _(i, a), B(e, n, i, a, d);
          return;
        case j:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = we, we = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, H(e, n, d), e = we, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = we = e.parent, n.context = e;
          return;
        case Be:
          a = a.children, a = a(i._currentValue2), H(e, n, a);
          return;
        case ne:
          d = i._init, i = d(i._payload), a = _(i, a), B(
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
  function H(e, n, i) {
    if (n.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case tt:
          B(e, n, i.type, i.props, i.ref);
          return;
        case q:
          throw Error(u(257));
        case ne:
          var a = i._init;
          i = a(i._payload), H(e, n, i);
          return;
      }
      if (J(i)) {
        te(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Ye && i[Ye] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
        if (i = a.next(), !i.done) {
          var d = [];
          do
            d.push(i.value), i = a.next();
          while (!i.done);
          te(e, n, d);
        }
        return;
      }
      throw e = Object.prototype.toString.call(i), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e));
    }
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Pt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Pt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function te(e, n, i) {
    for (var a = i.length, d = 0; d < a; d++) {
      var c = n.treeContext;
      n.treeContext = nt(c, a, d);
      try {
        Q(e, n, i[d]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function Q(e, n, i) {
    var a = n.blockedSegment.formatContext, d = n.legacyContext, c = n.context;
    try {
      return H(e, n, i);
    } catch (F) {
      if (jt(), typeof F == "object" && F !== null && typeof F.then == "function") {
        i = F;
        var h = n.blockedSegment, T = ct(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(T), h.lastPushedText = !1, e = At(e, n.node, n.blockedBoundary, T, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Te(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Te(c), F;
    }
  }
  function Re(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, $e(this, n, e);
  }
  function X(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return X(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function Le(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && Le(e, i);
    } else e.completedSegments.push(n);
  }
  function $e(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Ke, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Le(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Re, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Le(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
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
          var h = d[c], T = e, F = h.blockedSegment;
          if (F.status === 0) {
            Te(h.context);
            try {
              H(T, h, h.node), T.responseState.generateStaticMarkup || F.lastPushedText && F.textEmbedded && F.chunks.push("<!-- -->"), h.abortSet.delete(h), F.status = 1, $e(T, h.blockedBoundary, F);
            } catch (Ae) {
              if (jt(), typeof Ae == "object" && Ae !== null && typeof Ae.then == "function") {
                var M = h.ping;
                Ae.then(M, M);
              } else {
                h.abortSet.delete(h), F.status = 4;
                var N = h.blockedBoundary, Y = Ae, je = ft(T, Y);
                if (N === null ? R(T, Y) : (N.pendingTasks--, N.forceClientRender || (N.forceClientRender = !0, N.errorDigest = je, N.parentFlushed && T.clientRenderedBoundaries.push(N))), T.allPendingTasks--, T.allPendingTasks === 0) {
                  var We = T.onAllReady;
                  We();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && or(e, e.destination);
      } catch (Ae) {
        ft(e, Ae), R(e, Ae);
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
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = Z(a), n.push(a), n.push('"')), n.push("></template>")), Vt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
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
    return yt(n, e.responseState, i.formatContext, i.id), Gt(e, n, i), Nt(n, i.formatContext);
  }
  function cr(e, n, i) {
    for (var a = i.completedSegments, d = 0; d < a.length; d++) fr(e, n, i, a[d]);
    if (a.length = 0, e = e.responseState, a = i.id, i = i.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), a === null) throw Error(u(395));
    return i = i.toString(16), n.push(a), n.push('","'), n.push(e.segmentPrefix), n.push(i), n.push('")<\/script>');
  }
  function fr(e, n, i, a) {
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
        var T = e.responseState, F = h.id, M = h.errorDigest, N = h.errorMessage, Y = h.errorComponentStack;
        if (a.push(T.startInlineScript), T.sentClientRenderFunction ? a.push('$RX("') : (T.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), F === null) throw Error(u(395));
        if (a.push(F), a.push('"'), M || N || Y) {
          a.push(",");
          var je = Lt(M || "");
          a.push(je);
        }
        if (N || Y) {
          a.push(",");
          var We = Lt(N || "");
          a.push(We);
        }
        if (Y) {
          a.push(",");
          var Ae = Lt(Y);
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
      var pt = e.partialBoundaries;
      for (c = 0; c < pt.length; c++) {
        var dr = pt[c];
        e: {
          d = e, h = n;
          var Xt = dr.completedSegments;
          for (T = 0; T < Xt.length; T++) if (!fr(d, h, dr, Xt[T])) {
            T++, Xt.splice(0, T);
            var Tr = !1;
            break e;
          }
          Xt.splice(0, T), Tr = !0;
        }
        if (!Tr) {
          e.destination = null, c++, pt.splice(0, c);
          return;
        }
      }
      pt.splice(0, c);
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
        return X(a, e, n);
      }), i.clear(), e.destination !== null && or(e, e.destination);
    } catch (a) {
      ft(e, a), R(e, a);
    }
  }
  function wr() {
  }
  function pr(e, n, i, a) {
    var d = !1, c = null, h = "", T = { push: function(M) {
      return M !== null && (h += M), !0;
    }, destroy: function(M) {
      d = !0, c = M;
    } }, F = !1;
    if (e = nr(e, ve(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wr, void 0, function() {
      F = !0;
    }), sr(e), Er(e, a), e.status === 1) e.status = 2, T.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = T;
      try {
        or(e, T);
      } catch (M) {
        ft(e, M), R(e, M);
      }
    }
    if (d) throw c;
    if (!F) throw Error(u(426));
    return h;
  }
  return Jt.renderToNodeStream = function() {
    throw Error(u(207));
  }, Jt.renderToStaticMarkup = function(e, n) {
    return pr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Jt.renderToString = function(e, n) {
    return pr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.version = "18.3.1", Jt;
}
var Br = {};
var Bn;
function jo() {
  if (Bn) return Br;
  Bn = 1;
  var m = xr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = null, k = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < k && (t.enqueue(new Uint8Array(g.buffer, 0, k)), g = new Uint8Array(512), k = 0), t.enqueue(r);
    else {
      var o = g.length - k;
      o < r.length && (o === 0 ? t.enqueue(g) : (g.set(r.subarray(0, o), k), t.enqueue(g), r = r.subarray(o)), g = new Uint8Array(512), k = 0), g.set(r, k), k += r.length;
    }
  }
  function C(t, r) {
    return y(t, r), !0;
  }
  function A(t) {
    g && 0 < k && (t.enqueue(new Uint8Array(g.buffer, 0, k)), g = null, k = 0);
  }
  var b = new TextEncoder();
  function w(t) {
    return b.encode(t);
  }
  function x(t) {
    return b.encode(t);
  }
  function ee(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var z = Object.prototype.hasOwnProperty, Oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Me = {}, Z = {};
  function Kt(t) {
    return z.call(Z, t) ? !0 : z.call(Me, t) ? !1 : Oe.test(t) ? Z[t] = !0 : (Me[t] = !0, !1);
  }
  function oe(t, r, o, l, p, f, v) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = f, this.removeEmptyString = v;
  }
  var J = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    J[t] = new oe(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    J[r] = new oe(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    J[t] = new oe(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    J[t] = new oe(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    J[t] = new oe(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    J[t] = new oe(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    J[t] = new oe(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    J[t] = new oe(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    J[t] = new oe(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var ae = /[\-:]([a-z])/g;
  function Qe(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      ae,
      Qe
    );
    J[r] = new oe(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(ae, Qe);
    J[r] = new oe(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(ae, Qe);
    J[r] = new oe(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    J[t] = new oe(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), J.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    J[t] = new oe(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var ie = {
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
  Object.keys(ie).forEach(function(t) {
    mt.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), ie[r] = ie[t];
    });
  });
  var re = /["'&<>]/;
  function $(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = re.exec(t);
    if (r) {
      var o = "", l, p = 0;
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
        p !== l && (o += t.substring(p, l)), p = l + 1, o += r;
      }
      t = p !== l ? o + t.substring(p, l) : o;
    }
    return t;
  }
  var lr = /([A-Z])/g, Mt = /^ms-/, It = Array.isArray, Qt = x("<script>"), pe = x("<\/script>"), me = x('<script src="'), vt = x('<script type="module" src="'), yt = x('" async=""><\/script>'), Nt = /(<\/|<)(s)(cript)/gi;
  function ar(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Lt(t, r, o, l, p) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Qt : x('<script nonce="' + $(r) + '">');
    var f = [];
    if (o !== void 0 && f.push(r, w(("" + o).replace(Nt, ar)), pe), l !== void 0) for (o = 0; o < l.length; o++) f.push(me, w($(l[o])), yt);
    if (p !== void 0) for (l = 0; l < p.length; l++) f.push(vt, w($(p[l])), yt);
    return { bootstrapChunks: f, startInlineScript: r, placeholderPrefix: x(t + "P:"), segmentPrefix: x(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ve(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Pt(t) {
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
  var tt = x("<!-- -->");
  function q(t, r, o, l) {
    return r === "" ? l : (l && t.push(tt), t.push(w($(r))), !0);
  }
  var gt = /* @__PURE__ */ new Map(), K = x(' style="'), St = x(":"), j = x(";");
  function Be(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (z.call(o, l)) {
      var p = o[l];
      if (p != null && typeof p != "boolean" && p !== "") {
        if (l.indexOf("--") === 0) {
          var f = w($(l));
          p = w($(("" + p).trim()));
        } else {
          f = l;
          var v = gt.get(f);
          v !== void 0 || (v = x($(f.replace(lr, "-$1").toLowerCase().replace(Mt, "-ms-"))), gt.set(f, v)), f = v, p = typeof p == "number" ? p === 0 || z.call(ie, l) ? w("" + p) : w(p + "px") : w($(("" + p).trim()));
        }
        r ? (r = !1, t.push(K, f, St, p)) : t.push(j, f, St, p);
      }
    }
    r || t.push(ye);
  }
  var de = x(" "), Ie = x('="'), ye = x('"'), xt = x('=""');
  function ne(t, r, o, l) {
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
      if (r = J.hasOwnProperty(o) ? J[o] : null, r !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (o = w(r.attributeName), r.type) {
          case 3:
            l && t.push(de, o, xt);
            break;
          case 4:
            l === !0 ? t.push(de, o, xt) : l !== !1 && t.push(de, o, Ie, w($(l)), ye);
            break;
          case 5:
            isNaN(l) || t.push(de, o, Ie, w($(l)), ye);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(de, o, Ie, w($(l)), ye);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(de, o, Ie, w($(l)), ye);
        }
      } else if (Kt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(de, w(o), Ie, w($(l)), ye);
      }
    }
  }
  var se = x(">"), Et = x("/>");
  function ge(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(w("" + r));
    }
  }
  function Dt(t) {
    var r = "";
    return m.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ye = x(' selected=""');
  function Se(t, r, o, l) {
    t.push(le(o));
    var p = o = null, f;
    for (f in r) if (z.call(r, f)) {
      var v = r[f];
      if (v != null) switch (f) {
        case "children":
          o = v;
          break;
        case "dangerouslySetInnerHTML":
          p = v;
          break;
        default:
          ne(t, l, f, v);
      }
    }
    return t.push(se), ge(t, p, o), typeof o == "string" ? (t.push(w($(o))), null) : o;
  }
  var ze = x(`
`), rt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, we = /* @__PURE__ */ new Map();
  function le(t) {
    var r = we.get(t);
    if (r === void 0) {
      if (!rt.test(t)) throw Error(u(65, t));
      r = x("<" + t), we.set(t, r);
    }
    return r;
  }
  var er = x("<!DOCTYPE html>");
  function wt(t, r, o, l, p) {
    switch (r) {
      case "select":
        t.push(le("select"));
        var f = null, v = null;
        for (L in o) if (z.call(o, L)) {
          var E = o[L];
          if (E != null) switch (L) {
            case "children":
              f = E;
              break;
            case "dangerouslySetInnerHTML":
              v = E;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(t, l, L, E);
          }
        }
        return t.push(se), ge(t, v, f), f;
      case "option":
        v = p.selectedValue, t.push(le("option"));
        var O = E = null, D = null, L = null;
        for (f in o) if (z.call(o, f)) {
          var G = o[f];
          if (G != null) switch (f) {
            case "children":
              E = G;
              break;
            case "selected":
              D = G;
              break;
            case "dangerouslySetInnerHTML":
              L = G;
              break;
            case "value":
              O = G;
            default:
              ne(t, l, f, G);
          }
        }
        if (v != null) if (o = O !== null ? "" + O : Dt(E), It(v)) {
          for (l = 0; l < v.length; l++)
            if ("" + v[l] === o) {
              t.push(Ye);
              break;
            }
        } else "" + v === o && t.push(Ye);
        else D && t.push(Ye);
        return t.push(se), ge(t, L, E), E;
      case "textarea":
        t.push(le("textarea")), L = v = f = null;
        for (E in o) if (z.call(o, E) && (O = o[E], O != null)) switch (E) {
          case "children":
            L = O;
            break;
          case "value":
            f = O;
            break;
          case "defaultValue":
            v = O;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            ne(t, l, E, O);
        }
        if (f === null && v !== null && (f = v), t.push(se), L != null) {
          if (f != null) throw Error(u(92));
          if (It(L) && 1 < L.length) throw Error(u(93));
          f = "" + L;
        }
        return typeof f == "string" && f[0] === `
` && t.push(ze), f !== null && t.push(w($("" + f))), null;
      case "input":
        t.push(le("input")), O = L = E = f = null;
        for (v in o) if (z.call(o, v) && (D = o[v], D != null)) switch (v) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            O = D;
            break;
          case "defaultValue":
            E = D;
            break;
          case "checked":
            L = D;
            break;
          case "value":
            f = D;
            break;
          default:
            ne(t, l, v, D);
        }
        return L !== null ? ne(
          t,
          l,
          "checked",
          L
        ) : O !== null && ne(t, l, "checked", O), f !== null ? ne(t, l, "value", f) : E !== null && ne(t, l, "value", E), t.push(Et), null;
      case "menuitem":
        t.push(le("menuitem"));
        for (var Fe in o) if (z.call(o, Fe) && (f = o[Fe], f != null)) switch (Fe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ne(t, l, Fe, f);
        }
        return t.push(se), null;
      case "title":
        t.push(le("title")), f = null;
        for (G in o) if (z.call(o, G) && (v = o[G], v != null)) switch (G) {
          case "children":
            f = v;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ne(t, l, G, v);
        }
        return t.push(se), f;
      case "listing":
      case "pre":
        t.push(le(r)), v = f = null;
        for (O in o) if (z.call(o, O) && (E = o[O], E != null)) switch (O) {
          case "children":
            f = E;
            break;
          case "dangerouslySetInnerHTML":
            v = E;
            break;
          default:
            ne(t, l, O, E);
        }
        if (t.push(se), v != null) {
          if (f != null) throw Error(u(60));
          if (typeof v != "object" || !("__html" in v)) throw Error(u(61));
          o = v.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(ze, w(o)) : t.push(w("" + o)));
        }
        return typeof f == "string" && f[0] === `
` && t.push(ze), f;
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
        t.push(le(r));
        for (var Ve in o) if (z.call(o, Ve) && (f = o[Ve], f != null)) switch (Ve) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            ne(t, l, Ve, f);
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
        return p.insertionMode === 0 && t.push(er), Se(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return Se(t, o, r, l);
        t.push(le(r)), v = f = null;
        for (D in o) if (z.call(o, D) && (E = o[D], E != null)) switch (D) {
          case "children":
            f = E;
            break;
          case "dangerouslySetInnerHTML":
            v = E;
            break;
          case "style":
            Be(t, l, E);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Kt(D) && typeof E != "function" && typeof E != "symbol" && t.push(de, w(D), Ie, w($(E)), ye);
        }
        return t.push(se), ge(t, v, f), f;
    }
  }
  var Ze = x("</"), Ue = x(">"), Te = x('<template id="'), Bt = x('"></template>'), zt = x("<!--$-->"), tr = x('<!--$?--><template id="'), nt = x('"></template>'), ot = x("<!--$!-->"), Tt = x("<!--/$-->"), kt = x("<template"), ke = x('"'), Je = x(' data-dgst="');
  x(' data-msg="'), x(' data-stck="');
  var Ut = x("></template>");
  function ce(t, r, o) {
    if (y(t, tr), o === null) throw Error(u(395));
    return y(t, o), C(t, nt);
  }
  var Ht = x('<div hidden id="'), xe = x('">'), U = x("</div>"), it = x('<svg aria-hidden="true" style="display:none" id="'), V = x('">'), Ee = x("</svg>"), Ne = x('<math aria-hidden="true" style="display:none" id="'), lt = x('">'), _e = x("</math>"), $t = x('<table hidden id="'), _t = x('">'), jt = x("</table>"), at = x('<table hidden><tbody id="'), Ct = x('">'), rr = x("</tbody></table>"), fe = x('<table hidden><tr id="'), Rt = x('">'), st = x("</tr></table>"), Wt = x('<table hidden><colgroup id="'), ut = x('">'), He = x("</colgroup></table>");
  function Ce(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, xe);
      case 2:
        return y(t, it), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, V);
      case 3:
        return y(t, Ne), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, lt);
      case 4:
        return y(t, $t), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, _t);
      case 5:
        return y(t, at), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, Ct);
      case 6:
        return y(t, fe), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, Rt);
      case 7:
        return y(
          t,
          Wt
        ), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, ut);
      default:
        throw Error(u(397));
    }
  }
  function Ke(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return C(t, U);
      case 2:
        return C(t, Ee);
      case 3:
        return C(t, _e);
      case 4:
        return C(t, jt);
      case 5:
        return C(t, rr);
      case 6:
        return C(t, st);
      case 7:
        return C(t, He);
      default:
        throw Error(u(397));
    }
  }
  var nr = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), At = x('$RS("'), ct = x('","'), ft = x('")<\/script>'), R = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = x('$RC("'), S = x('","'), _ = x('")<\/script>'), B = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), H = x('$RX("'), te = x('"'), Q = x(")<\/script>"), Re = x(","), X = /[<\u2028\u2029]/g;
  function Le(t) {
    return JSON.stringify(t).replace(X, function(r) {
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
  var $e = Object.assign, sr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), cr = Symbol.for("react.profiler"), fr = Symbol.for("react.provider"), or = Symbol.for("react.context"), Er = Symbol.for("react.forward_ref"), wr = Symbol.for("react.suspense"), pr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function T(t) {
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
      case pr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case or:
        return (t.displayName || "Context") + ".Consumer";
      case fr:
        return (t._context.displayName || "Context") + ".Provider";
      case Er:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return r = t.displayName || null, r !== null ? r : T(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return T(t(r));
        } catch {
        }
    }
    return null;
  }
  var F = {};
  function M(t, r) {
    if (t = t.contextTypes, !t) return F;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var N = null;
  function Y(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(u(401));
      } else {
        if (o === null) throw Error(u(401));
        Y(t, o);
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
    t.depth === r.depth ? Y(t, r) : Ae(t, r);
  }
  function qt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? Y(t, o) : qt(t, o), r.context._currentValue = r.value;
  }
  function pt(t) {
    var r = N;
    r !== t && (r === null ? We(t) : t === null ? je(r) : r.depth === t.depth ? Y(r, t) : r.depth > t.depth ? Ae(r, t) : qt(r, t), N = t);
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
    var p = t.state !== void 0 ? t.state : null;
    t.updater = dr, t.props = o, t.state = p;
    var f = { queue: [], replace: !1 };
    t._reactInternals = f;
    var v = r.contextType;
    if (t.context = typeof v == "object" && v !== null ? v._currentValue : l, v = r.getDerivedStateFromProps, typeof v == "function" && (v = v(o, p), p = v == null ? p : $e({}, p, v), t.state = p), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && dr.enqueueReplaceState(t, t.state, null), f.queue !== null && 0 < f.queue.length) if (r = f.queue, v = f.replace, f.queue = null, f.replace = !1, v && r.length === 1) t.state = r[0];
    else {
      for (f = v ? r[0] : t.state, p = !0, v = v ? 1 : 0; v < r.length; v++) {
        var E = r[v];
        E = typeof E == "function" ? E.call(t, f, o, l) : E, E != null && (p ? (p = !1, f = $e({}, f, E)) : $e(f, E));
      }
      t.state = f;
    }
    else f.queue = null;
  }
  var Tr = { id: 1, overflow: "" };
  function bt(t, r, o) {
    var l = t.id;
    t = t.overflow;
    var p = 32 - kr(l) - 1;
    l &= ~(1 << p), o += 1;
    var f = 32 - kr(r) + p;
    if (30 < f) {
      var v = p - p % 5;
      return f = (l & (1 << v) - 1).toString(32), l >>= v, p -= v, { id: 1 << 32 - kr(r) + p | o << p | l, overflow: f + t };
    }
    return { id: 1 << f | o << p | l, overflow: t };
  }
  var kr = Math.clz32 ? Math.clz32 : Yn, qn = Math.log, Xn = Math.LN2;
  function Yn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (qn(t) / Xn | 0) | 0;
  }
  function Zn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Jn = typeof Object.is == "function" ? Object.is : Zn, dt = null, $r = null, _r = null, W = null, hr = !1, Cr = !1, mr = 0, Ft = null, Rr = 0;
  function Yt() {
    if (dt === null) throw Error(u(321));
    return dt;
  }
  function cn() {
    if (0 < Rr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function jr() {
    return W === null ? _r === null ? (hr = !1, _r = W = cn()) : (hr = !0, W = _r) : W.next === null ? (hr = !1, W = W.next = cn()) : (hr = !0, W = W.next), W;
  }
  function Wr() {
    $r = dt = null, Cr = !1, _r = null, Rr = 0, W = Ft = null;
  }
  function fn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function pn(t, r, o) {
    if (dt = Yt(), W = jr(), hr) {
      var l = W.queue;
      if (r = l.dispatch, Ft !== null && (o = Ft.get(l), o !== void 0)) {
        Ft.delete(l), l = W.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return W.memoizedState = l, [l, r];
      }
      return [W.memoizedState, r];
    }
    return t = t === fn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, W.memoizedState = t, t = W.queue = { last: null, dispatch: null }, t = t.dispatch = Kn.bind(null, dt, t), [W.memoizedState, t];
  }
  function dn(t, r) {
    if (dt = Yt(), W = jr(), r = r === void 0 ? null : r, W !== null) {
      var o = W.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var p = 0; p < l.length && p < r.length; p++) if (!Jn(r[p], l[p])) {
            l = !1;
            break e;
          }
          l = !0;
        }
        if (l) return o[0];
      }
    }
    return t = t(), W.memoizedState = [t, r], t;
  }
  function Kn(t, r, o) {
    if (25 <= Rr) throw Error(u(301));
    if (t === dt) if (Cr = !0, t = { action: o, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), o = Ft.get(r), o === void 0) Ft.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function Qn() {
    throw Error(u(394));
  }
  function Ar() {
  }
  var hn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Yt(), t._currentValue;
  }, useMemo: dn, useReducer: pn, useRef: function(t) {
    dt = Yt(), W = jr();
    var r = W.memoizedState;
    return r === null ? (t = { current: t }, W.memoizedState = t) : r;
  }, useState: function(t) {
    return pn(fn, t);
  }, useInsertionEffect: Ar, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return dn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Ar, useEffect: Ar, useDebugValue: Ar, useDeferredValue: function(t) {
    return Yt(), t;
  }, useTransition: function() {
    return Yt(), [!1, Qn];
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
  } }, br = null, Vr = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function eo(t) {
    return console.error(t), null;
  }
  function vr() {
  }
  function to(t, r, o, l, p, f, v, E, O) {
    var D = [], L = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: L, pingedTasks: D, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: p === void 0 ? eo : p, onAllReady: f === void 0 ? vr : f, onShellReady: v === void 0 ? vr : v, onShellError: E === void 0 ? vr : E, onFatalError: O === void 0 ? vr : O }, o = Fr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Gr(r, t, null, o, L, F, null, Tr), D.push(t), r;
  }
  function Gr(t, r, o, l, p, f, v, E) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var O = { node: r, ping: function() {
      var D = t.pingedTasks;
      D.push(O), D.length === 1 && En(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: p, legacyContext: f, context: v, treeContext: E };
    return p.add(O), O;
  }
  function Fr(t, r, o, l, p, f) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: p, textEmbedded: f };
  }
  function yr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Or(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, ee(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function mn(t, r, o, l, p) {
    for (dt = {}, $r = r, mr = 0, t = o(l, p); Cr; ) Cr = !1, mr = 0, Rr += 1, W = null, t = o(l, p);
    return Wr(), t;
  }
  function vn(t, r, o, l) {
    var p = o.render(), f = l.childContextTypes;
    if (f != null) {
      var v = r.legacyContext;
      if (typeof o.getChildContext != "function") l = v;
      else {
        o = o.getChildContext();
        for (var E in o) if (!(E in f)) throw Error(u(108, T(l) || "Unknown", E));
        l = $e({}, v, o);
      }
      r.legacyContext = l, be(t, r, p), r.legacyContext = v;
    } else be(t, r, p);
  }
  function yn(t, r) {
    if (t && t.defaultProps) {
      r = $e({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function qr(t, r, o, l, p) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      p = M(o, r.legacyContext);
      var f = o.contextType;
      f = new o(l, typeof f == "object" && f !== null ? f._currentValue : p), Xt(f, o, l, p), vn(t, r, f, o);
    } else {
      f = M(o, r.legacyContext), p = mn(t, r, o, l, f);
      var v = mr !== 0;
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) Xt(p, o, l, f), vn(t, r, p, o);
      else if (v) {
        l = r.treeContext, r.treeContext = bt(l, 1, 0);
        try {
          be(t, r, p);
        } finally {
          r.treeContext = l;
        }
      } else be(t, r, p);
    }
    else if (typeof o == "string") {
      switch (p = r.blockedSegment, f = wt(p.chunks, o, l, t.responseState, p.formatContext), p.lastPushedText = !1, v = p.formatContext, p.formatContext = et(v, o, l), Xr(t, r, f), p.formatContext = v, o) {
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
          p.chunks.push(Ze, w(o), Ue);
      }
      p.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case ur:
        case cr:
        case Gt:
          be(t, r, l.children);
          return;
        case pr:
          be(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case wr:
          e: {
            o = r.blockedBoundary, p = r.blockedSegment, f = l.fallback, l = l.children, v = /* @__PURE__ */ new Set();
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: v, errorDigest: null }, O = Fr(t, p.chunks.length, E, p.formatContext, !1, !1);
            p.children.push(O), p.lastPushedText = !1;
            var D = Fr(t, 0, null, p.formatContext, !1, !1);
            D.parentFlushed = !0, r.blockedBoundary = E, r.blockedSegment = D;
            try {
              if (Xr(
                t,
                r,
                l
              ), D.lastPushedText && D.textEmbedded && D.chunks.push(tt), D.status = 1, Mr(E, D), E.pendingTasks === 0) break e;
            } catch (L) {
              D.status = 4, E.forceClientRender = !0, E.errorDigest = yr(t, L);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = p;
            }
            r = Gr(t, f, o, O, v, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case Er:
          if (l = mn(t, r, o.render, l, p), mr !== 0) {
            o = r.treeContext, r.treeContext = bt(o, 1, 0);
            try {
              be(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else be(t, r, l);
          return;
        case e:
          o = o.type, l = yn(o, l), qr(t, r, o, l, p);
          return;
        case fr:
          if (p = l.children, o = o._context, l = l.value, f = o._currentValue, o._currentValue = l, v = N, N = l = { parent: v, depth: v === null ? 0 : v.depth + 1, context: o, parentValue: f, value: l }, r.context = l, be(t, r, p), t = N, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = N = t.parent, r.context = t;
          return;
        case or:
          l = l.children, l = l(o._currentValue), be(t, r, l);
          return;
        case n:
          p = o._init, o = p(o._payload), l = yn(o, l), qr(t, r, o, l, void 0);
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
        gn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var p = [];
          do
            p.push(o.value), o = l.next();
          while (!o.done);
          gn(t, r, p);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function gn(t, r, o) {
    for (var l = o.length, p = 0; p < l; p++) {
      var f = r.treeContext;
      r.treeContext = bt(f, l, p);
      try {
        Xr(t, r, o[p]);
      } finally {
        r.treeContext = f;
      }
    }
  }
  function Xr(t, r, o) {
    var l = r.blockedSegment.formatContext, p = r.legacyContext, f = r.context;
    try {
      return be(t, r, o);
    } catch (O) {
      if (Wr(), typeof O == "object" && O !== null && typeof O.then == "function") {
        o = O;
        var v = r.blockedSegment, E = Fr(t, v.chunks.length, null, v.formatContext, v.lastPushedText, !0);
        v.children.push(E), v.lastPushedText = !1, t = Gr(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = p, r.context = f, pt(f);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = p, r.context = f, pt(f), O;
    }
  }
  function ro(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, xn(this, r, t);
  }
  function Sn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(p) {
      return Sn(p, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Mr(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Mr(t, o);
    } else t.completedSegments.push(r);
  }
  function xn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = vr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Mr(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(ro, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Mr(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function En(t) {
    if (t.status !== 2) {
      var r = N, o = Vr.current;
      Vr.current = hn;
      var l = br;
      br = t.responseState;
      try {
        var p = t.pingedTasks, f;
        for (f = 0; f < p.length; f++) {
          var v = p[f], E = t, O = v.blockedSegment;
          if (O.status === 0) {
            pt(v.context);
            try {
              be(E, v, v.node), O.lastPushedText && O.textEmbedded && O.chunks.push(tt), v.abortSet.delete(v), O.status = 1, xn(E, v.blockedBoundary, O);
            } catch (Ge) {
              if (Wr(), typeof Ge == "object" && Ge !== null && typeof Ge.then == "function") {
                var D = v.ping;
                Ge.then(D, D);
              } else {
                v.abortSet.delete(v), O.status = 4;
                var L = v.blockedBoundary, G = Ge, Fe = yr(E, G);
                if (L === null ? Or(E, G) : (L.pendingTasks--, L.forceClientRender || (L.forceClientRender = !0, L.errorDigest = Fe, L.parentFlushed && E.clientRenderedBoundaries.push(L))), E.allPendingTasks--, E.allPendingTasks === 0) {
                  var Ve = E.onAllReady;
                  Ve();
                }
              }
            } finally {
            }
          }
        }
        p.splice(0, f), t.destination !== null && Yr(t, t.destination);
      } catch (Ge) {
        yr(t, Ge), Or(t, Ge);
      } finally {
        br = l, Vr.current = o, o === hn && pt(r);
      }
    }
  }
  function Ir(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, Te), y(r, t.placeholderPrefix), t = w(l.toString(16)), y(r, t), C(r, Bt);
      case 1:
        o.status = 2;
        var p = !0;
        l = o.chunks;
        var f = 0;
        o = o.children;
        for (var v = 0; v < o.length; v++) {
          for (p = o[v]; f < p.index; f++) y(r, l[f]);
          p = Nr(t, r, p);
        }
        for (; f < l.length - 1; f++) y(r, l[f]);
        return f < l.length && (p = C(r, l[f])), p;
      default:
        throw Error(u(390));
    }
  }
  function Nr(t, r, o) {
    var l = o.boundary;
    if (l === null) return Ir(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, C(r, ot), y(r, kt), l && (y(r, Je), y(r, w($(l))), y(r, ke)), C(r, Ut), Ir(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var p = t.responseState, f = p.nextSuspenseID++;
      p = x(p.boundaryPrefix + f.toString(16)), l = l.id = p, ce(r, t.responseState, l), Ir(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ce(r, t.responseState, l.id), Ir(t, r, o);
    else {
      if (C(r, zt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Nr(t, r, o[0]);
    }
    return C(r, Tt);
  }
  function wn(t, r, o) {
    return Ce(r, t.responseState, o.formatContext, o.id), Nr(t, r, o), Ke(r, o.formatContext);
  }
  function Tn(t, r, o) {
    for (var l = o.completedSegments, p = 0; p < l.length; p++) kn(t, r, o, l[p]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, R)), l === null) throw Error(u(395));
    return o = w(o.toString(16)), y(r, l), y(r, S), y(r, t.segmentPrefix), y(r, o), C(r, _);
  }
  function kn(t, r, o, l) {
    if (l.status === 2) return !0;
    var p = l.id;
    if (p === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return wn(t, r, l);
    }
    return wn(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, At) : (t.sentCompleteSegmentFunction = !0, y(r, nr)), y(r, t.segmentPrefix), p = w(p.toString(16)), y(r, p), y(r, ct), y(r, t.placeholderPrefix), y(r, p), C(r, ft);
  }
  function Yr(t, r) {
    g = new Uint8Array(512), k = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Nr(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && C(r, l[o]);
      }
      var p = t.clientRenderedBoundaries, f;
      for (f = 0; f < p.length; f++) {
        var v = p[f];
        l = r;
        var E = t.responseState, O = v.id, D = v.errorDigest, L = v.errorMessage, G = v.errorComponentStack;
        if (y(l, E.startInlineScript), E.sentClientRenderFunction ? y(l, H) : (E.sentClientRenderFunction = !0, y(
          l,
          B
        )), O === null) throw Error(u(395));
        y(l, O), y(l, te), (D || L || G) && (y(l, Re), y(l, w(Le(D || "")))), (L || G) && (y(l, Re), y(l, w(Le(L || "")))), G && (y(l, Re), y(l, w(Le(G)))), C(l, Q);
      }
      p.splice(0, f);
      var Fe = t.completedBoundaries;
      for (f = 0; f < Fe.length; f++) Tn(t, r, Fe[f]);
      Fe.splice(0, f), A(r), g = new Uint8Array(512), k = 0;
      var Ve = t.partialBoundaries;
      for (f = 0; f < Ve.length; f++) {
        var Ge = Ve[f];
        e: {
          p = t, v = r;
          var Lr = Ge.completedSegments;
          for (E = 0; E < Lr.length; E++) if (!kn(
            p,
            v,
            Ge,
            Lr[E]
          )) {
            E++, Lr.splice(0, E);
            var Cn = !1;
            break e;
          }
          Lr.splice(0, E), Cn = !0;
        }
        if (!Cn) {
          t.destination = null, f++, Ve.splice(0, f);
          return;
        }
      }
      Ve.splice(0, f);
      var Zr = t.completedBoundaries;
      for (f = 0; f < Zr.length; f++) Tn(t, r, Zr[f]);
      Zr.splice(0, f);
    } finally {
      A(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function _n(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return Sn(l, t, r);
      }), o.clear(), t.destination !== null && Yr(t, t.destination);
    } catch (l) {
      yr(t, l), Or(t, l);
    }
  }
  return Br.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var p, f, v = new Promise(function(L, G) {
        f = L, p = G;
      }), E = to(t, Lt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Pt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, f, function() {
        var L = new ReadableStream({ type: "bytes", pull: function(G) {
          if (E.status === 1) E.status = 2, ee(G, E.fatalError);
          else if (E.status !== 2 && E.destination === null) {
            E.destination = G;
            try {
              Yr(E, G);
            } catch (Fe) {
              yr(E, Fe), Or(E, Fe);
            }
          }
        }, cancel: function() {
          _n(E);
        } }, { highWaterMark: 0 });
        L.allReady = v, o(L);
      }, function(L) {
        v.catch(function() {
        }), l(L);
      }, p);
      if (r && r.signal) {
        var O = r.signal, D = function() {
          _n(E, O.reason), O.removeEventListener("abort", D);
        };
        O.addEventListener("abort", D);
      }
      En(E);
    });
  }, Br.version = "18.3.1", Br;
}
var ir, Vn;
ir = $o(), Vn = jo();
ir.version;
ir.renderToString;
ir.renderToStaticMarkup;
ir.renderToNodeStream;
ir.renderToStaticNodeStream;
Vn.renderToReadableStream;
const Wo = "staticMarkup";
function Gn() {
  const u = no().indexOf(Wo) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const Vo = ({ gaData: m, prefix: u = "", children: g }) => {
  const { isReact: k } = Gn(), { onClick: y, ...C } = g.props;
  if (k)
    return xr.cloneElement(g, {
      ...C,
      onClick: (w) => (Ho(m), y ? y(w) : !0)
    });
  let A = "";
  ["input", "header", "header-input"].includes(u) && (A = `-${u}`);
  const b = {
    [`data-ga${A}`]: m.text,
    [`data-ga${A}-name`]: m.name,
    [`data-ga${A}-event`]: m.event,
    [`data-ga${A}-action`]: m.action,
    [`data-ga${A}-type`]: m.type,
    [`data-ga${A}-region`]: m.region,
    [`data-ga${A}-section`]: m.section,
    [`data-ga${A}-component`]: m.component
  };
  return xr.cloneElement(g, {
    ...C,
    onClick: y,
    ...b
  });
}, Go = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, un = ({
  color: m,
  icon: u,
  innerRef: g,
  onClick: k,
  size: y,
  cardTitle: C,
  className: A,
  gaData: b,
  ...w
}) => {
  const x = () => {
    k == null || k();
  };
  return /* @__PURE__ */ ht.jsx(
    Vo,
    {
      gaData: {
        ...Go,
        section: C,
        // @deprecated - remove at some point
        ...b,
        text: `${u == null ? void 0 : u[1]} icon`
      },
      children: /* @__PURE__ */ ht.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${m} ${y === "large" && "btn-circle-large"} ${A}`,
          ref: g,
          "aria-label": "Close",
          onClick: x,
          ...w,
          children: /* @__PURE__ */ ht.jsx("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]}` })
        }
      )
    }
  );
};
un.propTypes = {
  /**
    Color the button based on the background color
  */
  color: I.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: I.arrayOf(I.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: I.oneOfType([
    I.object,
    I.func,
    I.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: I.func,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: I.string,
  /**
   * Google Analytics event data
   */
  gaData: fo,
  /**
    Button size
  */
  size: I.oneOf(["large", "small"]),
  className: I.string
};
un.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
var qo = /* @__PURE__ */ ((m) => (m.WARNING = "warning", m.INFO = "info", m.SUCCESS = "success", m.ERROR = "error", m))(qo || {});
const Yo = ({
  type: m,
  dismissable: u,
  children: g
}) => {
  var x, ee, z;
  const { isBootstrap: k, isReact: y } = Gn(), [C, A] = oo(!0), b = () => A(!1), w = {
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
  return C && /* @__PURE__ */ ht.jsxs(
    "div",
    {
      className: ao("alert", {
        "alert-dismissable": u,
        [`alert-${(x = w[m]) == null ? void 0 : x.alertClass}`]: m
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ ht.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ ht.jsx(
          "span",
          {
            title: (ee = w[m]) == null ? void 0 : ee.iconTitle,
            className: `fa fa-icon fa-${(z = w[m]) == null ? void 0 : z.iconName}`
          }
        ) }),
        /* @__PURE__ */ ht.jsx("div", { className: "alert-content", children: g }),
        u && /* @__PURE__ */ ht.jsx("div", { className: "alert-close", children: /* @__PURE__ */ ht.jsx(
          un,
          {
            icon: ["fas", "times"],
            onClick: y && b,
            "data-bs-dismiss": k && "alert"
          }
        ) })
      ]
    }
  );
};
export {
  Yo as SystemAlert,
  qo as SystemAlertType
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
