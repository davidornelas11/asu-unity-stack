import xr, { useId as oo, useState as io } from "react";
function zn(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var Un = { exports: {} }, gr = {};
var Rn;
function lo() {
  if (Rn) return gr;
  Rn = 1;
  var m = xr, u = Symbol.for("react.element"), g = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, y = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(b, T, x) {
    var ee, z = {}, fe = null, ve = null;
    x !== void 0 && (fe = "" + x), T.key !== void 0 && (fe = "" + T.key), T.ref !== void 0 && (ve = T.ref);
    for (ee in T) _.call(T, ee) && !w.hasOwnProperty(ee) && (z[ee] = T[ee]);
    if (b && b.defaultProps) for (ee in T = b.defaultProps, T) z[ee] === void 0 && (z[ee] = T[ee]);
    return { $$typeof: u, type: b, key: fe, ref: ve, props: z, _owner: y.current };
  }
  return gr.Fragment = g, gr.jsx = A, gr.jsxs = A, gr;
}
Un.exports = lo();
var Ne = Un.exports, Hn = { exports: {} }, Jr, An;
function ao() {
  if (An) return Jr;
  An = 1;
  var m = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jr = m, Jr;
}
var Kr, bn;
function so() {
  if (bn) return Kr;
  bn = 1;
  var m = ao();
  function u() {
  }
  function g() {
  }
  return g.resetWarningCache = u, Kr = function() {
    function _(A, b, T, x, ee, z) {
      if (z !== m) {
        var fe = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw fe.name = "Invariant Violation", fe;
      }
    }
    _.isRequired = _;
    function y() {
      return _;
    }
    var w = {
      array: _,
      bigint: _,
      bool: _,
      func: _,
      number: _,
      object: _,
      string: _,
      symbol: _,
      any: _,
      arrayOf: y,
      element: _,
      elementType: _,
      instanceOf: y,
      node: _,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: g,
      resetWarningCache: u
    };
    return w.PropTypes = w, w;
  }, Kr;
}
Hn.exports = so()();
var uo = Hn.exports;
const L = /* @__PURE__ */ zn(uo);
L.shape({
  url: L.string,
  altText: L.string,
  cssClass: L.arrayOf(L.string),
  size: L.oneOf(["small", "medium", "large"])
});
L.shape({
  text: L.string,
  maxWidth: L.string,
  cssClass: L.arrayOf(L.string),
  highlightColor: L.oneOf(["gold", "black"])
});
const $n = L.shape({
  color: L.oneOf(["gold", "maroon", "gray", "dark"]),
  content: L.shape({
    icon: L.string,
    header: L.string,
    body: L.string
  })
});
L.shape({
  text: L.string,
  name: L.string,
  event: L.string,
  action: L.string,
  type: L.string,
  region: L.string,
  section: L.string,
  component: L.string
});
var jn = { exports: {} };
(function(m) {
  (function() {
    var u = {}.hasOwnProperty;
    function g() {
      for (var w = "", A = 0; A < arguments.length; A++) {
        var b = arguments[A];
        b && (w = y(w, _(b)));
      }
      return w;
    }
    function _(w) {
      if (typeof w == "string" || typeof w == "number")
        return w;
      if (typeof w != "object")
        return "";
      if (Array.isArray(w))
        return g.apply(null, w);
      if (w.toString !== Object.prototype.toString && !w.toString.toString().includes("[native code]"))
        return w.toString();
      var A = "";
      for (var b in w)
        u.call(w, b) && w[b] && (A = y(A, b));
      return A;
    }
    function y(w, A) {
      return A ? w ? w + " " + A : w + A : w;
    }
    m.exports ? (g.default = g, m.exports = g) : window.classNames = g;
  })();
})(jn);
var co = jn.exports;
const Qr = /* @__PURE__ */ zn(co);
function Ot(m) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Ot(m);
}
function an(m, u) {
  return an = Object.setPrototypeOf || function(_, y) {
    return _.__proto__ = y, _;
  }, an(m, u);
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
  return po() ? zr = Reflect.construct : zr = function(y, w, A) {
    var b = [null];
    b.push.apply(b, w);
    var T = Function.bind.apply(y, b), x = new T();
    return A && an(x, A.prototype), x;
  }, zr.apply(null, arguments);
}
function Ye(m) {
  return fo(m) || ho(m) || mo(m) || vo();
}
function fo(m) {
  if (Array.isArray(m)) return sn(m);
}
function ho(m) {
  if (typeof Symbol < "u" && m[Symbol.iterator] != null || m["@@iterator"] != null) return Array.from(m);
}
function mo(m, u) {
  if (m) {
    if (typeof m == "string") return sn(m, u);
    var g = Object.prototype.toString.call(m).slice(8, -1);
    if (g === "Object" && m.constructor && (g = m.constructor.name), g === "Map" || g === "Set") return Array.from(m);
    if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return sn(m, u);
  }
}
function sn(m, u) {
  (u == null || u > m.length) && (u = m.length);
  for (var g = 0, _ = new Array(u); g < u; g++) _[g] = m[g];
  return _;
}
function vo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var yo = Object.hasOwnProperty, Fn = Object.setPrototypeOf, go = Object.isFrozen, So = Object.getPrototypeOf, xo = Object.getOwnPropertyDescriptor, me = Object.freeze, De = Object.seal, Eo = Object.create, Wn = typeof Reflect < "u" && Reflect, Hr = Wn.apply, un = Wn.construct;
Hr || (Hr = function(u, g, _) {
  return u.apply(g, _);
});
me || (me = function(u) {
  return u;
});
De || (De = function(u) {
  return u;
});
un || (un = function(u, g) {
  return zr(u, Ye(g));
});
var wo = Be(Array.prototype.forEach), On = Be(Array.prototype.pop), Sr = Be(Array.prototype.push), Ur = Be(String.prototype.toLowerCase), en = Be(String.prototype.toString), Mn = Be(String.prototype.match), Xe = Be(String.prototype.replace), To = Be(String.prototype.indexOf), ko = Be(String.prototype.trim), ue = Be(RegExp.prototype.test), tn = _o(TypeError);
function Be(m) {
  return function(u) {
    for (var g = arguments.length, _ = new Array(g > 1 ? g - 1 : 0), y = 1; y < g; y++)
      _[y - 1] = arguments[y];
    return Hr(m, u, _);
  };
}
function _o(m) {
  return function() {
    for (var u = arguments.length, g = new Array(u), _ = 0; _ < u; _++)
      g[_] = arguments[_];
    return un(m, g);
  };
}
function N(m, u, g) {
  var _;
  g = (_ = g) !== null && _ !== void 0 ? _ : Ur, Fn && Fn(m, null);
  for (var y = u.length; y--; ) {
    var w = u[y];
    if (typeof w == "string") {
      var A = g(w);
      A !== w && (go(u) || (u[y] = A), w = A);
    }
    m[w] = !0;
  }
  return m;
}
function Zt(m) {
  var u = Eo(null), g;
  for (g in m)
    Hr(yo, m, [g]) === !0 && (u[g] = m[g]);
  return u;
}
function Nr(m, u) {
  for (; m !== null; ) {
    var g = xo(m, u);
    if (g) {
      if (g.get)
        return Be(g.get);
      if (typeof g.value == "function")
        return Be(g.value);
    }
    m = So(m);
  }
  function _(y) {
    return console.warn("fallback value for", y), null;
  }
  return _;
}
var In = me(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), rn = me(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), nn = me(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Co = me(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), on = me(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ro = me(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ln = me(["#text"]), Pn = me(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ln = me(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nn = me(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = me(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ao = De(/\{\{[\w\W]*|[\w\W]*\}\}/gm), bo = De(/<%[\w\W]*|[\w\W]*%>/gm), Fo = De(/\${[\w\W]*}/gm), Oo = De(/^data-[\-\w.\u00B7-\uFFFF]/), Mo = De(/^aria-[\-\w]+$/), Io = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Lo = De(/^(?:\w+script|data):/i), Po = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), No = De(/^html$/i), Do = De(/^[a-z][.\w]*(-[.\w]+)+$/i), Bo = function() {
  return typeof window > "u" ? null : window;
}, zo = function(u, g) {
  if (Ot(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var _ = null, y = "data-tt-policy-suffix";
  g.currentScript && g.currentScript.hasAttribute(y) && (_ = g.currentScript.getAttribute(y));
  var w = "dompurify" + (_ ? "#" + _ : "");
  try {
    return u.createPolicy(w, {
      createHTML: function(b) {
        return b;
      },
      createScriptURL: function(b) {
        return b;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + w + " could not be created."), null;
  }
};
function Vn() {
  var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bo(), u = function(s) {
    return Vn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !m || !m.document || m.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var g = m.document, _ = m.document, y = m.DocumentFragment, w = m.HTMLTemplateElement, A = m.Node, b = m.Element, T = m.NodeFilter, x = m.NamedNodeMap, ee = x === void 0 ? m.NamedNodeMap || m.MozNamedAttrMap : x, z = m.HTMLFormElement, fe = m.DOMParser, ve = m.trustedTypes, Z = b.prototype, Kt = Nr(Z, "cloneNode"), oe = Nr(Z, "nextSibling"), J = Nr(Z, "childNodes"), ae = Nr(Z, "parentNode");
  if (typeof w == "function") {
    var et = _.createElement("template");
    et.content && et.content.ownerDocument && (_ = et.content.ownerDocument);
  }
  var ie = zo(ve, g), mt = ie ? ie.createHTML("") : "", re = _, $ = re.implementation, lr = re.createNodeIterator, Mt = re.createDocumentFragment, It = re.getElementsByTagName, Qt = g.importNode, de = {};
  try {
    de = Zt(_).documentMode ? _.documentMode : {};
  } catch {
  }
  var ye = {};
  u.isSupported = typeof ae == "function" && $ && $.createHTMLDocument !== void 0 && de !== 9;
  var vt = Ao, yt = bo, Lt = Fo, ar = Oo, Pt = Mo, ge = Lo, Nt = Po, tt = Do, rt = Io, q = null, gt = N({}, [].concat(Ye(In), Ye(rn), Ye(nn), Ye(on), Ye(Ln))), K = null, St = N({}, [].concat(Ye(Pn), Ye(ln), Ye(Nn), Ye(Dr))), j = Object.seal(Object.create(null, {
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
  })), ze = null, he = null, Ie = !0, Se = !0, xt = !1, ne = !0, se = !1, Et = !0, xe = !1, Dt = !1, Ze = !1, Ee = !1, Ue = !1, nt = !1, ke = !0, le = !1, er = "user-content-", wt = !0, Je = !1, He = {}, _e = null, Bt = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), zt = null, tr = N({}, ["audio", "video", "img", "source", "image", "track"]), ot = null, it = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", kt = "http://www.w3.org/2000/svg", Ce = "http://www.w3.org/1999/xhtml", Ke = Ce, Ut = !1, ce = null, Ht = N({}, [Tt, kt, Ce], en), we, U = ["application/xhtml+xml", "text/html"], lt = "text/html", V, Te = null, Le = _.createElement("form"), at = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, Re = function(s) {
    Te && Te === s || ((!s || Ot(s) !== "object") && (s = {}), s = Zt(s), we = // eslint-disable-next-line unicorn/prefer-includes
    U.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? we = lt : we = s.PARSER_MEDIA_TYPE, V = we === "application/xhtml+xml" ? en : Ur, q = "ALLOWED_TAGS" in s ? N({}, s.ALLOWED_TAGS, V) : gt, K = "ALLOWED_ATTR" in s ? N({}, s.ALLOWED_ATTR, V) : St, ce = "ALLOWED_NAMESPACES" in s ? N({}, s.ALLOWED_NAMESPACES, en) : Ht, ot = "ADD_URI_SAFE_ATTR" in s ? N(
      Zt(it),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : it, zt = "ADD_DATA_URI_TAGS" in s ? N(
      Zt(tr),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : tr, _e = "FORBID_CONTENTS" in s ? N({}, s.FORBID_CONTENTS, V) : Bt, ze = "FORBID_TAGS" in s ? N({}, s.FORBID_TAGS, V) : {}, he = "FORBID_ATTR" in s ? N({}, s.FORBID_ATTR, V) : {}, He = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ie = s.ALLOW_ARIA_ATTR !== !1, Se = s.ALLOW_DATA_ATTR !== !1, xt = s.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = s.SAFE_FOR_TEMPLATES || !1, Et = s.SAFE_FOR_XML !== !1, xe = s.WHOLE_DOCUMENT || !1, Ee = s.RETURN_DOM || !1, Ue = s.RETURN_DOM_FRAGMENT || !1, nt = s.RETURN_TRUSTED_TYPE || !1, Ze = s.FORCE_BODY || !1, ke = s.SANITIZE_DOM !== !1, le = s.SANITIZE_NAMED_PROPS || !1, wt = s.KEEP_CONTENT !== !1, Je = s.IN_PLACE || !1, rt = s.ALLOWED_URI_REGEXP || rt, Ke = s.NAMESPACE || Ce, j = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && at(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && at(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (Se = !1), Ue && (Ee = !0), He && (q = N({}, Ye(Ln)), K = [], He.html === !0 && (N(q, In), N(K, Pn)), He.svg === !0 && (N(q, rn), N(K, ln), N(K, Dr)), He.svgFilters === !0 && (N(q, nn), N(K, ln), N(K, Dr)), He.mathMl === !0 && (N(q, on), N(K, Nn), N(K, Dr))), s.ADD_TAGS && (q === gt && (q = Zt(q)), N(q, s.ADD_TAGS, V)), s.ADD_ATTR && (K === St && (K = Zt(K)), N(K, s.ADD_ATTR, V)), s.ADD_URI_SAFE_ATTR && N(ot, s.ADD_URI_SAFE_ATTR, V), s.FORBID_CONTENTS && (_e === Bt && (_e = Zt(_e)), N(_e, s.FORBID_CONTENTS, V)), wt && (q["#text"] = !0), xe && N(q, ["html", "head", "body"]), q.table && (N(q, ["tbody"]), delete ze.tbody), me && me(s), Te = s);
  }, $t = N({}, ["mi", "mo", "mn", "ms", "mtext"]), _t = N({}, ["annotation-xml"]), jt = N({}, ["title", "style", "font", "a", "script"]), st = N({}, rn);
  N(st, nn), N(st, Co);
  var Ct = N({}, on);
  N(Ct, Ro);
  var rr = function(s) {
    var S = ae(s);
    (!S || !S.tagName) && (S = {
      namespaceURI: Ke,
      tagName: "template"
    });
    var C = Ur(s.tagName), B = Ur(S.tagName);
    return ce[s.namespaceURI] ? s.namespaceURI === kt ? S.namespaceURI === Ce ? C === "svg" : S.namespaceURI === Tt ? C === "svg" && (B === "annotation-xml" || $t[B]) : !!st[C] : s.namespaceURI === Tt ? S.namespaceURI === Ce ? C === "math" : S.namespaceURI === kt ? C === "math" && _t[B] : !!Ct[C] : s.namespaceURI === Ce ? S.namespaceURI === kt && !_t[B] || S.namespaceURI === Tt && !$t[B] ? !1 : !Ct[C] && (jt[C] || !st[C]) : !!(we === "application/xhtml+xml" && ce[s.namespaceURI]) : !1;
  }, pe = function(s) {
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
      if (Ee || Ue)
        try {
          pe(S);
        } catch {
        }
      else
        try {
          S.setAttribute(s, "");
        } catch {
        }
  }, ut = function(s) {
    var S, C;
    if (Ze)
      s = "<remove></remove>" + s;
    else {
      var B = Mn(s, /^[\r\n\t ]+/);
      C = B && B[0];
    }
    we === "application/xhtml+xml" && Ke === Ce && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var H = ie ? ie.createHTML(s) : s;
    if (Ke === Ce)
      try {
        S = new fe().parseFromString(H, we);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = $.createDocument(Ke, "template", null);
      try {
        S.documentElement.innerHTML = Ut ? mt : H;
      } catch {
      }
    }
    var te = S.body || S.documentElement;
    return s && C && te.insertBefore(_.createTextNode(C), te.childNodes[0] || null), Ke === Ce ? It.call(S, xe ? "html" : "body")[0] : xe ? S.documentElement : te;
  }, Wt = function(s) {
    return lr.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      T.SHOW_ELEMENT | T.SHOW_COMMENT | T.SHOW_TEXT | T.SHOW_PROCESSING_INSTRUCTION | T.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ct = function(s) {
    return s instanceof z && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof ee) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, $e = function(s) {
    return Ot(A) === "object" ? s instanceof A : s && Ot(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Ae = function(s, S, C) {
    ye[s] && wo(ye[s], function(B) {
      B.call(u, S, C, Te);
    });
  }, Qe = function(s) {
    var S;
    if (Ae("beforeSanitizeElements", s, null), ct(s) || ue(/[\u0080-\uFFFF]/, s.nodeName))
      return pe(s), !0;
    var C = V(s.nodeName);
    if (Ae("uponSanitizeElement", s, {
      tagName: C,
      allowedTags: q
    }), s.hasChildNodes() && !$e(s.firstElementChild) && (!$e(s.content) || !$e(s.content.firstElementChild)) && ue(/<[/\w]/g, s.innerHTML) && ue(/<[/\w]/g, s.textContent) || C === "select" && ue(/<template/i, s.innerHTML) || s.nodeType === 7 || Et && s.nodeType === 8 && ue(/<[/\w]/g, s.data))
      return pe(s), !0;
    if (!q[C] || ze[C]) {
      if (!ze[C] && At(C) && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, C) || j.tagNameCheck instanceof Function && j.tagNameCheck(C)))
        return !1;
      if (wt && !_e[C]) {
        var B = ae(s) || s.parentNode, H = J(s) || s.childNodes;
        if (H && B)
          for (var te = H.length, Q = te - 1; Q >= 0; --Q) {
            var be = Kt(H[Q], !0);
            be.__removalCount = (s.__removalCount || 0) + 1, B.insertBefore(be, oe(s));
          }
      }
      return pe(s), !0;
    }
    return s instanceof b && !rr(s) || (C === "noscript" || C === "noembed" || C === "noframes") && ue(/<\/no(script|embed|frames)/i, s.innerHTML) ? (pe(s), !0) : (se && s.nodeType === 3 && (S = s.textContent, S = Xe(S, vt, " "), S = Xe(S, yt, " "), S = Xe(S, Lt, " "), s.textContent !== S && (Sr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = S)), Ae("afterSanitizeElements", s, null), !1);
  }, nr = function(s, S, C) {
    if (ke && (S === "id" || S === "name") && (C in _ || C in Le))
      return !1;
    if (!(Se && !he[S] && ue(ar, S))) {
      if (!(Ie && ue(Pt, S))) {
        if (!K[S] || he[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(s) && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, s) || j.tagNameCheck instanceof Function && j.tagNameCheck(s)) && (j.attributeNameCheck instanceof RegExp && ue(j.attributeNameCheck, S) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, C) || j.tagNameCheck instanceof Function && j.tagNameCheck(C)))
          ) return !1;
        } else if (!ot[S]) {
          if (!ue(rt, Xe(C, Nt, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && s !== "script" && To(C, "data:") === 0 && zt[s])) {
              if (!(xt && !ue(ge, Xe(C, Nt, "")))) {
                if (C)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, At = function(s) {
    return s !== "annotation-xml" && Mn(s, tt);
  }, pt = function(s) {
    var S, C, B, H;
    Ae("beforeSanitizeAttributes", s, null);
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
        var be = S, X = be.name, Pe = be.namespaceURI;
        if (C = X === "value" ? S.value : ko(S.value), B = V(X), Q.attrName = B, Q.attrValue = C, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ae("uponSanitizeAttribute", s, Q), C = Q.attrValue, !Q.forceKeepAttr && (Rt(X, s), !!Q.keepAttr)) {
          if (!ne && ue(/\/>/i, C)) {
            Rt(X, s);
            continue;
          }
          se && (C = Xe(C, vt, " "), C = Xe(C, yt, " "), C = Xe(C, Lt, " "));
          var je = V(s.nodeName);
          if (nr(je, B, C)) {
            if (le && (B === "id" || B === "name") && (Rt(X, s), C = er + C), Et && ue(/((--!?|])>)|<\/(style|title)/i, C)) {
              Rt(X, s);
              continue;
            }
            if (ie && Ot(ve) === "object" && typeof ve.getAttributeType == "function" && !Pe)
              switch (ve.getAttributeType(je, B)) {
                case "TrustedHTML": {
                  C = ie.createHTML(C);
                  break;
                }
                case "TrustedScriptURL": {
                  C = ie.createScriptURL(C);
                  break;
                }
              }
            try {
              Pe ? s.setAttributeNS(Pe, X, C) : s.setAttribute(X, C), ct(s) ? pe(s) : On(u.removed);
            } catch {
            }
          }
        }
      }
      Ae("afterSanitizeAttributes", s, null);
    }
  }, ft = function R(s) {
    var S, C = Wt(s);
    for (Ae("beforeSanitizeShadowDOM", s, null); S = C.nextNode(); )
      Ae("uponSanitizeShadowNode", S, null), !Qe(S) && (S.content instanceof y && R(S.content), pt(S));
    Ae("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(R) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, C, B, H, te;
    if (Ut = !R, Ut && (R = "<!-->"), typeof R != "string" && !$e(R))
      if (typeof R.toString == "function") {
        if (R = R.toString(), typeof R != "string")
          throw tn("dirty is not a string, aborting");
      } else
        throw tn("toString is not a function");
    if (!u.isSupported) {
      if (Ot(m.toStaticHTML) === "object" || typeof m.toStaticHTML == "function") {
        if (typeof R == "string")
          return m.toStaticHTML(R);
        if ($e(R))
          return m.toStaticHTML(R.outerHTML);
      }
      return R;
    }
    if (Dt || Re(s), u.removed = [], typeof R == "string" && (Je = !1), Je) {
      if (R.nodeName) {
        var Q = V(R.nodeName);
        if (!q[Q] || ze[Q])
          throw tn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (R instanceof A)
      S = ut("<!---->"), C = S.ownerDocument.importNode(R, !0), C.nodeType === 1 && C.nodeName === "BODY" || C.nodeName === "HTML" ? S = C : S.appendChild(C);
    else {
      if (!Ee && !se && !xe && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return ie && nt ? ie.createHTML(R) : R;
      if (S = ut(R), !S)
        return Ee ? null : nt ? mt : "";
    }
    S && Ze && pe(S.firstChild);
    for (var be = Wt(Je ? R : S); B = be.nextNode(); )
      B.nodeType === 3 && B === H || Qe(B) || (B.content instanceof y && ft(B.content), pt(B), H = B);
    if (H = null, Je)
      return R;
    if (Ee) {
      if (Ue)
        for (te = Mt.call(S.ownerDocument); S.firstChild; )
          te.appendChild(S.firstChild);
      else
        te = S;
      return (K.shadowroot || K.shadowrootmod) && (te = Qt.call(g, te, !0)), te;
    }
    var X = xe ? S.outerHTML : S.innerHTML;
    return xe && q["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && ue(No, S.ownerDocument.doctype.name) && (X = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + X), se && (X = Xe(X, vt, " "), X = Xe(X, yt, " "), X = Xe(X, Lt, " ")), ie && nt ? ie.createHTML(X) : X;
  }, u.setConfig = function(R) {
    Re(R), Dt = !0;
  }, u.clearConfig = function() {
    Te = null, Dt = !1;
  }, u.isValidAttribute = function(R, s, S) {
    Te || Re({});
    var C = V(R), B = V(s);
    return nr(C, B, S);
  }, u.addHook = function(R, s) {
    typeof s == "function" && (ye[R] = ye[R] || [], Sr(ye[R], s));
  }, u.removeHook = function(R) {
    if (ye[R])
      return On(ye[R]);
  }, u.removeHooks = function(R) {
    ye[R] && (ye[R] = []);
  }, u.removeAllHooks = function() {
    ye = {};
  }, u;
}
var Uo = Vn();
const Ho = (m) => ({ __html: Uo.sanitize(m) });
L.shape({
  event: L.string,
  action: L.string,
  name: L.string,
  region: L.string,
  section: L.string,
  component: L.string,
  type: L.string,
  text: L.string
});
const $o = ({
  event: m = "",
  action: u = "",
  name: g = "",
  type: _ = "",
  section: y = "",
  text: w = "",
  region: A = "",
  component: b = ""
}) => {
  const { dataLayer: T } = window, x = {
    event: m.toLowerCase(),
    action: u.toLowerCase(),
    name: g.toLowerCase(),
    type: _.toLowerCase(),
    region: A.toLowerCase(),
    section: y.toLowerCase(),
    text: w.toLowerCase(),
    component: b.toLowerCase()
  };
  T && T.push(x);
};
var Jt = {};
var Dn;
function jo() {
  if (Dn) return Jt;
  Dn = 1;
  var m = xr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, w = {};
  function A(e) {
    return g.call(w, e) ? !0 : g.call(y, e) ? !1 : _.test(e) ? w[e] = !0 : (y[e] = !0, !1);
  }
  function b(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new b(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    T[n] = new b(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new b(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new b(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new b(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new b(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    T[n] = new b(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(x, ee);
    T[n] = new b(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(x, ee);
    T[n] = new b(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
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
  }, fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(e) {
    fe.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), z[n] = z[e];
    });
  });
  var ve = /["'&<>]/;
  function Z(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = ve.exec(e);
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
  function et(e, n, i) {
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
      if (n = T.hasOwnProperty(i) ? T[i] : null, n !== null) {
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
    e.push(de(i));
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
  function de(e) {
    var n = Qt.get(e);
    if (n === void 0) {
      if (!It.test(e)) throw Error(u(65, e));
      n = "<" + e, Qt.set(e, n);
    }
    return n;
  }
  function ye(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(de("select"));
        var c = null, h = null;
        for (I in i) if (g.call(i, I)) {
          var k = i[I];
          if (k != null) switch (I) {
            case "children":
              c = k;
              break;
            case "dangerouslySetInnerHTML":
              h = k;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              re(e, a, I, k);
          }
        }
        return e.push(">"), $(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(de("option"));
        var F = k = null, M = null, I = null;
        for (c in i) if (g.call(i, c)) {
          var Y = i[c];
          if (Y != null) switch (c) {
            case "children":
              k = Y;
              break;
            case "selected":
              M = Y;
              break;
            case "dangerouslySetInnerHTML":
              I = Y;
              break;
            case "value":
              F = Y;
            default:
              re(e, a, c, Y);
          }
        }
        if (h != null) if (i = F !== null ? "" + F : lr(k), J(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else M && e.push(' selected=""');
        return e.push(">"), $(e, I, k), k;
      case "textarea":
        e.push(de("textarea")), I = h = c = null;
        for (k in i) if (g.call(i, k) && (F = i[k], F != null)) switch (k) {
          case "children":
            I = F;
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
              k,
              F
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), I != null) {
          if (c != null) throw Error(u(92));
          if (J(I) && 1 < I.length) throw Error(u(93));
          c = "" + I;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(Z("" + c)), null;
      case "input":
        e.push(de("input")), F = I = k = c = null;
        for (h in i) if (g.call(i, h) && (M = i[h], M != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = M;
            break;
          case "defaultValue":
            k = M;
            break;
          case "checked":
            I = M;
            break;
          case "value":
            c = M;
            break;
          default:
            re(e, a, h, M);
        }
        return I !== null ? re(e, a, "checked", I) : F !== null && re(e, a, "checked", F), c !== null ? re(e, a, "value", c) : k !== null && re(e, a, "value", k), e.push("/>"), null;
      case "menuitem":
        e.push(de("menuitem"));
        for (var We in i) if (g.call(i, We) && (c = i[We], c != null)) switch (We) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            re(e, a, We, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(de("title")), c = null;
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
        e.push(de(n)), h = c = null;
        for (F in i) if (g.call(i, F) && (k = i[F], k != null)) switch (F) {
          case "children":
            c = k;
            break;
          case "dangerouslySetInnerHTML":
            h = k;
            break;
          default:
            re(e, a, F, k);
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
        e.push(de(n));
        for (var Ve in i) if (g.call(i, Ve) && (c = i[Ve], c != null)) switch (Ve) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            re(e, a, Ve, c);
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
        e.push(de(n)), h = c = null;
        for (M in i) if (g.call(i, M) && (k = i[M], k != null)) switch (M) {
          case "children":
            c = k;
            break;
          case "dangerouslySetInnerHTML":
            h = k;
            break;
          case "style":
            mt(e, a, k);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            A(M) && typeof k != "function" && typeof k != "symbol" && e.push(" ", M, '="', Z(k), '"');
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
  function ge(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Nt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Z(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Z(n)), e = !0), e);
  }
  var tt = Object.assign, rt = Symbol.for("react.element"), q = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), ze = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), xe = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), Ze = Symbol.iterator;
  function Ee(e) {
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
      case Se:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ze:
        return (e.displayName || "Context") + ".Consumer";
      case j:
        return (e._context.displayName || "Context") + ".Provider";
      case he:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xt:
        return n = e.displayName || null, n !== null ? n : Ee(e.type) || "Memo";
      case ne:
        n = e._payload, e = e._init;
        try {
          return Ee(e(n));
        } catch {
        }
    }
    return null;
  }
  var Ue = {};
  function nt(e, n) {
    if (e = e.contextTypes, !e) return Ue;
    var i = {}, a;
    for (a in e) i[a] = n[a];
    return i;
  }
  var ke = null;
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
  function Je(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(u(402));
    e.depth === n.depth ? le(e, n) : Je(e, n);
  }
  function He(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? le(e, i) : He(e, i), n.context._currentValue2 = n.value;
  }
  function _e(e) {
    var n = ke;
    n !== e && (n === null ? wt(e) : e === null ? er(n) : n.depth === e.depth ? le(n, e) : n.depth > e.depth ? Je(n, e) : He(n, e), ke = e);
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
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : tt({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Bt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
    else {
      for (c = h ? n[0] : e.state, d = !0, h = h ? 1 : 0; h < n.length; h++) {
        var k = n[h];
        k = typeof k == "function" ? k.call(e, c, i, a) : k, k != null && (d ? (d = !1, c = tt({}, c, k)) : tt(c, k));
      }
      e.state = c;
    }
    else c.queue = null;
  }
  var tr = { id: 1, overflow: "" };
  function ot(e, n, i) {
    var a = e.id;
    e = e.overflow;
    var d = 32 - it(a) - 1;
    a &= ~(1 << d), i += 1;
    var c = 32 - it(n) + d;
    if (30 < c) {
      var h = d - d % 5;
      return c = (a & (1 << h) - 1).toString(32), a >>= h, d -= h, { id: 1 << 32 - it(n) + d | i << d | a, overflow: c + e };
    }
    return { id: 1 << c | i << d | a, overflow: e };
  }
  var it = Math.clz32 ? Math.clz32 : Ce, Tt = Math.log, kt = Math.LN2;
  function Ce(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Tt(e) / kt | 0) | 0;
  }
  function Ke(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Ke, ce = null, Ht = null, we = null, U = null, lt = !1, V = !1, Te = 0, Le = null, at = 0;
  function Re() {
    if (ce === null) throw Error(u(321));
    return ce;
  }
  function $t() {
    if (0 < at) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _t() {
    return U === null ? we === null ? (lt = !1, we = U = $t()) : (lt = !0, U = we) : U.next === null ? (lt = !1, U = U.next = $t()) : (lt = !0, U = U.next), U;
  }
  function jt() {
    Ht = ce = null, V = !1, we = null, at = 0, U = Le = null;
  }
  function st(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ct(e, n, i) {
    if (ce = Re(), U = _t(), lt) {
      var a = U.queue;
      if (n = a.dispatch, Le !== null && (i = Le.get(a), i !== void 0)) {
        Le.delete(a), a = U.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return U.memoizedState = a, [a, n];
      }
      return [U.memoizedState, n];
    }
    return e = e === st ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, U.memoizedState = e, e = U.queue = { last: null, dispatch: null }, e = e.dispatch = pe.bind(null, ce, e), [U.memoizedState, e];
  }
  function rr(e, n) {
    if (ce = Re(), U = _t(), n = n === void 0 ? null : n, U !== null) {
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
  function pe(e, n, i) {
    if (25 <= at) throw Error(u(301));
    if (e === ce) if (V = !0, e = { action: i, next: null }, Le === null && (Le = /* @__PURE__ */ new Map()), i = Le.get(n), i === void 0) Le.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Rt() {
    throw Error(u(394));
  }
  function ut() {
  }
  var Wt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return Re(), e._currentValue2;
  }, useMemo: rr, useReducer: Ct, useRef: function(e) {
    ce = Re(), U = _t();
    var n = U.memoizedState;
    return n === null ? (e = { current: e }, U.memoizedState = e) : n;
  }, useState: function(e) {
    return Ct(st, e);
  }, useInsertionEffect: ut, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return rr(function() {
      return e;
    }, n);
  }, useImperativeHandle: ut, useEffect: ut, useDebugValue: ut, useDeferredValue: function(e) {
    return Re(), e;
  }, useTransition: function() {
    return Re(), [
      !1,
      Rt
    ];
  }, useId: function() {
    var e = Ht.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - it(e) - 1)).toString(32) + n;
    var i = ct;
    if (i === null) throw Error(u(404));
    return n = Te++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return Re(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, ct = null, $e = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ae(e) {
    return console.error(e), null;
  }
  function Qe() {
  }
  function nr(e, n, i, a, d, c, h, k, F) {
    var M = [], I = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: I, pingedTasks: M, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Ae : d, onAllReady: Qe, onShellReady: h === void 0 ? Qe : h, onShellError: Qe, onFatalError: Qe }, i = pt(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = At(n, e, null, i, I, Ue, null, tr), M.push(e), n;
  }
  function At(e, n, i, a, d, c, h, k) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var F = { node: n, ping: function() {
      var M = e.pingedTasks;
      M.push(F), M.length === 1 && sr(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: k };
    return d.add(F), F;
  }
  function pt(e, n, i, a, d, c) {
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
    for (ce = {}, Ht = n, Te = 0, e = i(a, d); V; ) V = !1, Te = 0, at += 1, U = null, e = i(a, d);
    return jt(), e;
  }
  function S(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var k in i) if (!(k in c)) throw Error(u(108, Ee(a) || "Unknown", k));
        a = tt({}, h, i);
      }
      n.legacyContext = a, H(e, n, d), n.legacyContext = h;
    } else H(e, n, d);
  }
  function C(e, n) {
    if (e && e.defaultProps) {
      n = tt({}, n), e = e.defaultProps;
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function B(e, n, i, a, d) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      d = nt(i, n.legacyContext);
      var c = i.contextType;
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), zt(c, i, a, d), S(e, n, c, i);
    } else {
      c = nt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = Te !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) zt(d, i, a, c), S(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = ot(a, 1, 0);
        try {
          H(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else H(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = ye(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = et(h, i, a), Q(e, n, c), d.formatContext = h, i) {
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
        case xe:
        case Et:
        case K:
        case St:
        case gt:
          H(e, n, a.children);
          return;
        case Se:
          H(e, n, a.children);
          return;
        case se:
          throw Error(u(343));
        case Ie:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var k = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, F = pt(e, d.chunks.length, k, d.formatContext, !1, !1);
            d.children.push(F), d.lastPushedText = !1;
            var M = pt(e, 0, null, d.formatContext, !1, !1);
            M.parentFlushed = !0, n.blockedBoundary = k, n.blockedSegment = M;
            try {
              if (Q(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || M.lastPushedText && M.textEmbedded && M.chunks.push("<!-- -->"), M.status = 1, Pe(k, M), k.pendingTasks === 0) break e;
            } catch (I) {
              M.status = 4, k.forceClientRender = !0, k.errorDigest = ft(e, I);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = At(e, c, i, F, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case he:
          if (a = s(e, n, i.render, a, d), Te !== 0) {
            i = n.treeContext, n.treeContext = ot(i, 1, 0);
            try {
              H(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else H(e, n, a);
          return;
        case xt:
          i = i.type, a = C(i, a), B(e, n, i, a, d);
          return;
        case j:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = ke, ke = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, H(e, n, d), e = ke, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = ke = e.parent, n.context = e;
          return;
        case ze:
          a = a.children, a = a(i._currentValue2), H(e, n, a);
          return;
        case ne:
          d = i._init, i = d(i._payload), a = C(i, a), B(
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
        case rt:
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
      if (i === null || typeof i != "object" ? a = null : (a = Ze && i[Ze] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
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
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Nt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Nt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function te(e, n, i) {
    for (var a = i.length, d = 0; d < a; d++) {
      var c = n.treeContext;
      n.treeContext = ot(c, a, d);
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
        var h = n.blockedSegment, k = pt(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(k), h.lastPushedText = !1, e = At(e, n.node, n.blockedBoundary, k, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, _e(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, _e(c), F;
    }
  }
  function be(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, je(this, n, e);
  }
  function X(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return X(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function Pe(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && Pe(e, i);
    } else e.completedSegments.push(n);
  }
  function je(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Qe, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Pe(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(be, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Pe(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function sr(e) {
    if (e.status !== 2) {
      var n = ke, i = $e.current;
      $e.current = Wt;
      var a = ct;
      ct = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], k = e, F = h.blockedSegment;
          if (F.status === 0) {
            _e(h.context);
            try {
              H(k, h, h.node), k.responseState.generateStaticMarkup || F.lastPushedText && F.textEmbedded && F.chunks.push("<!-- -->"), h.abortSet.delete(h), F.status = 1, je(k, h.blockedBoundary, F);
            } catch (Fe) {
              if (jt(), typeof Fe == "object" && Fe !== null && typeof Fe.then == "function") {
                var M = h.ping;
                Fe.then(M, M);
              } else {
                h.abortSet.delete(h), F.status = 4;
                var I = h.blockedBoundary, Y = Fe, We = ft(k, Y);
                if (I === null ? R(k, Y) : (I.pendingTasks--, I.forceClientRender || (I.forceClientRender = !0, I.errorDigest = We, I.parentFlushed && k.clientRenderedBoundaries.push(I))), k.allPendingTasks--, k.allPendingTasks === 0) {
                  var Ve = k.onAllReady;
                  Ve();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && or(e, e.destination);
      } catch (Fe) {
        ft(e, Fe), R(e, Fe);
      } finally {
        ct = a, $e.current = i, i === Wt && _e(n);
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
        var k = e.responseState, F = h.id, M = h.errorDigest, I = h.errorMessage, Y = h.errorComponentStack;
        if (a.push(k.startInlineScript), k.sentClientRenderFunction ? a.push('$RX("') : (k.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), F === null) throw Error(u(395));
        if (a.push(F), a.push('"'), M || I || Y) {
          a.push(",");
          var We = Pt(M || "");
          a.push(We);
        }
        if (I || Y) {
          a.push(",");
          var Ve = Pt(I || "");
          a.push(Ve);
        }
        if (Y) {
          a.push(",");
          var Fe = Pt(Y);
          a.push(Fe);
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
      var dt = e.partialBoundaries;
      for (c = 0; c < dt.length; c++) {
        var dr = dt[c];
        e: {
          d = e, h = n;
          var Xt = dr.completedSegments;
          for (k = 0; k < Xt.length; k++) if (!pr(d, h, dr, Xt[k])) {
            k++, Xt.splice(0, k);
            var Tr = !1;
            break e;
          }
          Xt.splice(0, k), Tr = !0;
        }
        if (!Tr) {
          e.destination = null, c++, dt.splice(0, c);
          return;
        }
      }
      dt.splice(0, c);
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
  function fr(e, n, i, a) {
    var d = !1, c = null, h = "", k = { push: function(M) {
      return M !== null && (h += M), !0;
    }, destroy: function(M) {
      d = !0, c = M;
    } }, F = !1;
    if (e = nr(e, ge(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wr, void 0, function() {
      F = !0;
    }), sr(e), Er(e, a), e.status === 1) e.status = 2, k.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = k;
      try {
        or(e, k);
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
    return fr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Jt.renderToString = function(e, n) {
    return fr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.version = "18.3.1", Jt;
}
var Br = {};
var Bn;
function Wo() {
  if (Bn) return Br;
  Bn = 1;
  var m = xr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = null, _ = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < _ && (t.enqueue(new Uint8Array(g.buffer, 0, _)), g = new Uint8Array(512), _ = 0), t.enqueue(r);
    else {
      var o = g.length - _;
      o < r.length && (o === 0 ? t.enqueue(g) : (g.set(r.subarray(0, o), _), t.enqueue(g), r = r.subarray(o)), g = new Uint8Array(512), _ = 0), g.set(r, _), _ += r.length;
    }
  }
  function w(t, r) {
    return y(t, r), !0;
  }
  function A(t) {
    g && 0 < _ && (t.enqueue(new Uint8Array(g.buffer, 0, _)), g = null, _ = 0);
  }
  var b = new TextEncoder();
  function T(t) {
    return b.encode(t);
  }
  function x(t) {
    return b.encode(t);
  }
  function ee(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var z = Object.prototype.hasOwnProperty, fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, Z = {};
  function Kt(t) {
    return z.call(Z, t) ? !0 : z.call(ve, t) ? !1 : fe.test(t) ? Z[t] = !0 : (ve[t] = !0, !1);
  }
  function oe(t, r, o, l, f, p, v) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = v;
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
  function et(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      ae,
      et
    );
    J[r] = new oe(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(ae, et);
    J[r] = new oe(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(ae, et);
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
  var lr = /([A-Z])/g, Mt = /^ms-/, It = Array.isArray, Qt = x("<script>"), de = x("<\/script>"), ye = x('<script src="'), vt = x('<script type="module" src="'), yt = x('" async=""><\/script>'), Lt = /(<\/|<)(s)(cript)/gi;
  function ar(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Pt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Qt : x('<script nonce="' + $(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, T(("" + o).replace(Lt, ar)), de), l !== void 0) for (o = 0; o < l.length; o++) p.push(ye, T($(l[o])), yt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(vt, T($(f[l])), yt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: x(t + "P:"), segmentPrefix: x(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ge(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Nt(t) {
    return ge(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function tt(t, r, o) {
    switch (r) {
      case "select":
        return ge(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return ge(2, null);
      case "math":
        return ge(3, null);
      case "foreignObject":
        return ge(1, null);
      case "table":
        return ge(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ge(5, null);
      case "colgroup":
        return ge(7, null);
      case "tr":
        return ge(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? ge(1, null) : t;
  }
  var rt = x("<!-- -->");
  function q(t, r, o, l) {
    return r === "" ? l : (l && t.push(rt), t.push(T($(r))), !0);
  }
  var gt = /* @__PURE__ */ new Map(), K = x(' style="'), St = x(":"), j = x(";");
  function ze(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (z.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = T($(l));
          f = T($(("" + f).trim()));
        } else {
          p = l;
          var v = gt.get(p);
          v !== void 0 || (v = x($(p.replace(lr, "-$1").toLowerCase().replace(Mt, "-ms-"))), gt.set(p, v)), p = v, f = typeof f == "number" ? f === 0 || z.call(ie, l) ? T("" + f) : T(f + "px") : T($(("" + f).trim()));
        }
        r ? (r = !1, t.push(K, p, St, f)) : t.push(j, p, St, f);
      }
    }
    r || t.push(Se);
  }
  var he = x(" "), Ie = x('="'), Se = x('"'), xt = x('=""');
  function ne(t, r, o, l) {
    switch (o) {
      case "style":
        ze(t, r, l);
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
        switch (o = T(r.attributeName), r.type) {
          case 3:
            l && t.push(he, o, xt);
            break;
          case 4:
            l === !0 ? t.push(he, o, xt) : l !== !1 && t.push(he, o, Ie, T($(l)), Se);
            break;
          case 5:
            isNaN(l) || t.push(he, o, Ie, T($(l)), Se);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(he, o, Ie, T($(l)), Se);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(he, o, Ie, T($(l)), Se);
        }
      } else if (Kt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(he, T(o), Ie, T($(l)), Se);
      }
    }
  }
  var se = x(">"), Et = x("/>");
  function xe(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(T("" + r));
    }
  }
  function Dt(t) {
    var r = "";
    return m.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ze = x(' selected=""');
  function Ee(t, r, o, l) {
    t.push(le(o));
    var f = o = null, p;
    for (p in r) if (z.call(r, p)) {
      var v = r[p];
      if (v != null) switch (p) {
        case "children":
          o = v;
          break;
        case "dangerouslySetInnerHTML":
          f = v;
          break;
        default:
          ne(t, l, p, v);
      }
    }
    return t.push(se), xe(t, f, o), typeof o == "string" ? (t.push(T($(o))), null) : o;
  }
  var Ue = x(`
`), nt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ke = /* @__PURE__ */ new Map();
  function le(t) {
    var r = ke.get(t);
    if (r === void 0) {
      if (!nt.test(t)) throw Error(u(65, t));
      r = x("<" + t), ke.set(t, r);
    }
    return r;
  }
  var er = x("<!DOCTYPE html>");
  function wt(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(le("select"));
        var p = null, v = null;
        for (P in o) if (z.call(o, P)) {
          var E = o[P];
          if (E != null) switch (P) {
            case "children":
              p = E;
              break;
            case "dangerouslySetInnerHTML":
              v = E;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(t, l, P, E);
          }
        }
        return t.push(se), xe(t, v, p), p;
      case "option":
        v = f.selectedValue, t.push(le("option"));
        var O = E = null, D = null, P = null;
        for (p in o) if (z.call(o, p)) {
          var G = o[p];
          if (G != null) switch (p) {
            case "children":
              E = G;
              break;
            case "selected":
              D = G;
              break;
            case "dangerouslySetInnerHTML":
              P = G;
              break;
            case "value":
              O = G;
            default:
              ne(t, l, p, G);
          }
        }
        if (v != null) if (o = O !== null ? "" + O : Dt(E), It(v)) {
          for (l = 0; l < v.length; l++)
            if ("" + v[l] === o) {
              t.push(Ze);
              break;
            }
        } else "" + v === o && t.push(Ze);
        else D && t.push(Ze);
        return t.push(se), xe(t, P, E), E;
      case "textarea":
        t.push(le("textarea")), P = v = p = null;
        for (E in o) if (z.call(o, E) && (O = o[E], O != null)) switch (E) {
          case "children":
            P = O;
            break;
          case "value":
            p = O;
            break;
          case "defaultValue":
            v = O;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            ne(t, l, E, O);
        }
        if (p === null && v !== null && (p = v), t.push(se), P != null) {
          if (p != null) throw Error(u(92));
          if (It(P) && 1 < P.length) throw Error(u(93));
          p = "" + P;
        }
        return typeof p == "string" && p[0] === `
` && t.push(Ue), p !== null && t.push(T($("" + p))), null;
      case "input":
        t.push(le("input")), O = P = E = p = null;
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
            P = D;
            break;
          case "value":
            p = D;
            break;
          default:
            ne(t, l, v, D);
        }
        return P !== null ? ne(
          t,
          l,
          "checked",
          P
        ) : O !== null && ne(t, l, "checked", O), p !== null ? ne(t, l, "value", p) : E !== null && ne(t, l, "value", E), t.push(Et), null;
      case "menuitem":
        t.push(le("menuitem"));
        for (var Me in o) if (z.call(o, Me) && (p = o[Me], p != null)) switch (Me) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ne(t, l, Me, p);
        }
        return t.push(se), null;
      case "title":
        t.push(le("title")), p = null;
        for (G in o) if (z.call(o, G) && (v = o[G], v != null)) switch (G) {
          case "children":
            p = v;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ne(t, l, G, v);
        }
        return t.push(se), p;
      case "listing":
      case "pre":
        t.push(le(r)), v = p = null;
        for (O in o) if (z.call(o, O) && (E = o[O], E != null)) switch (O) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            v = E;
            break;
          default:
            ne(t, l, O, E);
        }
        if (t.push(se), v != null) {
          if (p != null) throw Error(u(60));
          if (typeof v != "object" || !("__html" in v)) throw Error(u(61));
          o = v.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(Ue, T(o)) : t.push(T("" + o)));
        }
        return typeof p == "string" && p[0] === `
` && t.push(Ue), p;
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
        for (var Ge in o) if (z.call(o, Ge) && (p = o[Ge], p != null)) switch (Ge) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            ne(t, l, Ge, p);
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
        return Ee(t, o, r, l);
      case "html":
        return f.insertionMode === 0 && t.push(er), Ee(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return Ee(t, o, r, l);
        t.push(le(r)), v = p = null;
        for (D in o) if (z.call(o, D) && (E = o[D], E != null)) switch (D) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            v = E;
            break;
          case "style":
            ze(t, l, E);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Kt(D) && typeof E != "function" && typeof E != "symbol" && t.push(he, T(D), Ie, T($(E)), Se);
        }
        return t.push(se), xe(t, v, p), p;
    }
  }
  var Je = x("</"), He = x(">"), _e = x('<template id="'), Bt = x('"></template>'), zt = x("<!--$-->"), tr = x('<!--$?--><template id="'), ot = x('"></template>'), it = x("<!--$!-->"), Tt = x("<!--/$-->"), kt = x("<template"), Ce = x('"'), Ke = x(' data-dgst="');
  x(' data-msg="'), x(' data-stck="');
  var Ut = x("></template>");
  function ce(t, r, o) {
    if (y(t, tr), o === null) throw Error(u(395));
    return y(t, o), w(t, ot);
  }
  var Ht = x('<div hidden id="'), we = x('">'), U = x("</div>"), lt = x('<svg aria-hidden="true" style="display:none" id="'), V = x('">'), Te = x("</svg>"), Le = x('<math aria-hidden="true" style="display:none" id="'), at = x('">'), Re = x("</math>"), $t = x('<table hidden id="'), _t = x('">'), jt = x("</table>"), st = x('<table hidden><tbody id="'), Ct = x('">'), rr = x("</tbody></table>"), pe = x('<table hidden><tr id="'), Rt = x('">'), ut = x("</tr></table>"), Wt = x('<table hidden><colgroup id="'), ct = x('">'), $e = x("</colgroup></table>");
  function Ae(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, T(l.toString(16))), w(t, we);
      case 2:
        return y(t, lt), y(t, r.segmentPrefix), y(t, T(l.toString(16))), w(t, V);
      case 3:
        return y(t, Le), y(t, r.segmentPrefix), y(t, T(l.toString(16))), w(t, at);
      case 4:
        return y(t, $t), y(t, r.segmentPrefix), y(t, T(l.toString(16))), w(t, _t);
      case 5:
        return y(t, st), y(t, r.segmentPrefix), y(t, T(l.toString(16))), w(t, Ct);
      case 6:
        return y(t, pe), y(t, r.segmentPrefix), y(t, T(l.toString(16))), w(t, Rt);
      case 7:
        return y(
          t,
          Wt
        ), y(t, r.segmentPrefix), y(t, T(l.toString(16))), w(t, ct);
      default:
        throw Error(u(397));
    }
  }
  function Qe(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return w(t, U);
      case 2:
        return w(t, Te);
      case 3:
        return w(t, Re);
      case 4:
        return w(t, jt);
      case 5:
        return w(t, rr);
      case 6:
        return w(t, ut);
      case 7:
        return w(t, $e);
      default:
        throw Error(u(397));
    }
  }
  var nr = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), At = x('$RS("'), pt = x('","'), ft = x('")<\/script>'), R = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = x('$RC("'), S = x('","'), C = x('")<\/script>'), B = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), H = x('$RX("'), te = x('"'), Q = x(")<\/script>"), be = x(","), X = /[<\u2028\u2029]/g;
  function Pe(t) {
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
  var je = Object.assign, sr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), cr = Symbol.for("react.profiler"), pr = Symbol.for("react.provider"), or = Symbol.for("react.context"), Er = Symbol.for("react.forward_ref"), wr = Symbol.for("react.suspense"), fr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function k(t) {
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
        return r = t.displayName || null, r !== null ? r : k(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return k(t(r));
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
  var I = null;
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
  function We(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && We(t);
  }
  function Ve(t) {
    var r = t.parent;
    r !== null && Ve(r), t.context._currentValue = t.value;
  }
  function Fe(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? Y(t, r) : Fe(t, r);
  }
  function qt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? Y(t, o) : qt(t, o), r.context._currentValue = r.value;
  }
  function dt(t) {
    var r = I;
    r !== t && (r === null ? Ve(t) : t === null ? We(r) : r.depth === t.depth ? Y(r, t) : r.depth > t.depth ? Fe(r, t) : qt(r, t), I = t);
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
    var v = r.contextType;
    if (t.context = typeof v == "object" && v !== null ? v._currentValue : l, v = r.getDerivedStateFromProps, typeof v == "function" && (v = v(o, f), f = v == null ? f : je({}, f, v), t.state = f), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && dr.enqueueReplaceState(t, t.state, null), p.queue !== null && 0 < p.queue.length) if (r = p.queue, v = p.replace, p.queue = null, p.replace = !1, v && r.length === 1) t.state = r[0];
    else {
      for (p = v ? r[0] : t.state, f = !0, v = v ? 1 : 0; v < r.length; v++) {
        var E = r[v];
        E = typeof E == "function" ? E.call(t, p, o, l) : E, E != null && (f ? (f = !1, p = je({}, p, E)) : je(p, E));
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
      var v = f - f % 5;
      return p = (l & (1 << v) - 1).toString(32), l >>= v, f -= v, { id: 1 << 32 - kr(r) + f | o << f | l, overflow: p + t };
    }
    return { id: 1 << p | o << f | l, overflow: t };
  }
  var kr = Math.clz32 ? Math.clz32 : Zn, Xn = Math.log, Yn = Math.LN2;
  function Zn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Xn(t) / Yn | 0) | 0;
  }
  function Jn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Kn = typeof Object.is == "function" ? Object.is : Jn, ht = null, $r = null, _r = null, W = null, hr = !1, Cr = !1, mr = 0, Ft = null, Rr = 0;
  function Yt() {
    if (ht === null) throw Error(u(321));
    return ht;
  }
  function cn() {
    if (0 < Rr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function jr() {
    return W === null ? _r === null ? (hr = !1, _r = W = cn()) : (hr = !0, W = _r) : W.next === null ? (hr = !1, W = W.next = cn()) : (hr = !0, W = W.next), W;
  }
  function Wr() {
    $r = ht = null, Cr = !1, _r = null, Rr = 0, W = Ft = null;
  }
  function pn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function fn(t, r, o) {
    if (ht = Yt(), W = jr(), hr) {
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
    return t = t === pn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, W.memoizedState = t, t = W.queue = { last: null, dispatch: null }, t = t.dispatch = Qn.bind(null, ht, t), [W.memoizedState, t];
  }
  function dn(t, r) {
    if (ht = Yt(), W = jr(), r = r === void 0 ? null : r, W !== null) {
      var o = W.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!Kn(r[f], l[f])) {
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
  function Qn(t, r, o) {
    if (25 <= Rr) throw Error(u(301));
    if (t === ht) if (Cr = !0, t = { action: o, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), o = Ft.get(r), o === void 0) Ft.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function eo() {
    throw Error(u(394));
  }
  function Ar() {
  }
  var hn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Yt(), t._currentValue;
  }, useMemo: dn, useReducer: fn, useRef: function(t) {
    ht = Yt(), W = jr();
    var r = W.memoizedState;
    return r === null ? (t = { current: t }, W.memoizedState = t) : r;
  }, useState: function(t) {
    return fn(pn, t);
  }, useInsertionEffect: Ar, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return dn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Ar, useEffect: Ar, useDebugValue: Ar, useDeferredValue: function(t) {
    return Yt(), t;
  }, useTransition: function() {
    return Yt(), [!1, eo];
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
  function to(t) {
    return console.error(t), null;
  }
  function vr() {
  }
  function ro(t, r, o, l, f, p, v, E, O) {
    var D = [], P = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: P, pingedTasks: D, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? to : f, onAllReady: p === void 0 ? vr : p, onShellReady: v === void 0 ? vr : v, onShellError: E === void 0 ? vr : E, onFatalError: O === void 0 ? vr : O }, o = Fr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Gr(r, t, null, o, P, F, null, Tr), D.push(t), r;
  }
  function Gr(t, r, o, l, f, p, v, E) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var O = { node: r, ping: function() {
      var D = t.pingedTasks;
      D.push(O), D.length === 1 && En(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: v, treeContext: E };
    return f.add(O), O;
  }
  function Fr(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function yr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Or(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, ee(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function mn(t, r, o, l, f) {
    for (ht = {}, $r = r, mr = 0, t = o(l, f); Cr; ) Cr = !1, mr = 0, Rr += 1, W = null, t = o(l, f);
    return Wr(), t;
  }
  function vn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var v = r.legacyContext;
      if (typeof o.getChildContext != "function") l = v;
      else {
        o = o.getChildContext();
        for (var E in o) if (!(E in p)) throw Error(u(108, k(l) || "Unknown", E));
        l = je({}, v, o);
      }
      r.legacyContext = l, Oe(t, r, f), r.legacyContext = v;
    } else Oe(t, r, f);
  }
  function yn(t, r) {
    if (t && t.defaultProps) {
      r = je({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function qr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = M(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), Xt(p, o, l, f), vn(t, r, p, o);
    } else {
      p = M(o, r.legacyContext), f = mn(t, r, o, l, p);
      var v = mr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) Xt(f, o, l, p), vn(t, r, f, o);
      else if (v) {
        l = r.treeContext, r.treeContext = bt(l, 1, 0);
        try {
          Oe(t, r, f);
        } finally {
          r.treeContext = l;
        }
      } else Oe(t, r, f);
    }
    else if (typeof o == "string") {
      switch (f = r.blockedSegment, p = wt(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, v = f.formatContext, f.formatContext = tt(v, o, l), Xr(t, r, p), f.formatContext = v, o) {
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
          f.chunks.push(Je, T(o), He);
      }
      f.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case ur:
        case cr:
        case Gt:
          Oe(t, r, l.children);
          return;
        case fr:
          Oe(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case wr:
          e: {
            o = r.blockedBoundary, f = r.blockedSegment, p = l.fallback, l = l.children, v = /* @__PURE__ */ new Set();
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: v, errorDigest: null }, O = Fr(t, f.chunks.length, E, f.formatContext, !1, !1);
            f.children.push(O), f.lastPushedText = !1;
            var D = Fr(t, 0, null, f.formatContext, !1, !1);
            D.parentFlushed = !0, r.blockedBoundary = E, r.blockedSegment = D;
            try {
              if (Xr(
                t,
                r,
                l
              ), D.lastPushedText && D.textEmbedded && D.chunks.push(rt), D.status = 1, Mr(E, D), E.pendingTasks === 0) break e;
            } catch (P) {
              D.status = 4, E.forceClientRender = !0, E.errorDigest = yr(t, P);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Gr(t, p, o, O, v, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case Er:
          if (l = mn(t, r, o.render, l, f), mr !== 0) {
            o = r.treeContext, r.treeContext = bt(o, 1, 0);
            try {
              Oe(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Oe(t, r, l);
          return;
        case e:
          o = o.type, l = yn(o, l), qr(t, r, o, l, f);
          return;
        case pr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, v = I, I = l = { parent: v, depth: v === null ? 0 : v.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Oe(t, r, f), t = I, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = I = t.parent, r.context = t;
          return;
        case or:
          l = l.children, l = l(o._currentValue), Oe(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = yn(o, l), qr(t, r, o, l, void 0);
          return;
      }
      throw Error(u(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function Oe(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case sr:
          qr(t, r, o.type, o.props, o.ref);
          return;
        case Vt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Oe(t, r, o);
          return;
      }
      if (It(o)) {
        gn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var f = [];
          do
            f.push(o.value), o = l.next();
          while (!o.done);
          gn(t, r, f);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function gn(t, r, o) {
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
      return Oe(t, r, o);
    } catch (O) {
      if (Wr(), typeof O == "object" && O !== null && typeof O.then == "function") {
        o = O;
        var v = r.blockedSegment, E = Fr(t, v.chunks.length, null, v.formatContext, v.lastPushedText, !0);
        v.children.push(E), v.lastPushedText = !1, t = Gr(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, dt(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, dt(p), O;
    }
  }
  function no(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, xn(this, r, t);
  }
  function Sn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return Sn(f, r, o);
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
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Mr(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(no, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Mr(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function En(t) {
    if (t.status !== 2) {
      var r = I, o = Vr.current;
      Vr.current = hn;
      var l = br;
      br = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var v = f[p], E = t, O = v.blockedSegment;
          if (O.status === 0) {
            dt(v.context);
            try {
              Oe(E, v, v.node), O.lastPushedText && O.textEmbedded && O.chunks.push(rt), v.abortSet.delete(v), O.status = 1, xn(E, v.blockedBoundary, O);
            } catch (qe) {
              if (Wr(), typeof qe == "object" && qe !== null && typeof qe.then == "function") {
                var D = v.ping;
                qe.then(D, D);
              } else {
                v.abortSet.delete(v), O.status = 4;
                var P = v.blockedBoundary, G = qe, Me = yr(E, G);
                if (P === null ? Or(E, G) : (P.pendingTasks--, P.forceClientRender || (P.forceClientRender = !0, P.errorDigest = Me, P.parentFlushed && E.clientRenderedBoundaries.push(P))), E.allPendingTasks--, E.allPendingTasks === 0) {
                  var Ge = E.onAllReady;
                  Ge();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, p), t.destination !== null && Yr(t, t.destination);
      } catch (qe) {
        yr(t, qe), Or(t, qe);
      } finally {
        br = l, Vr.current = o, o === hn && dt(r);
      }
    }
  }
  function Ir(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, _e), y(r, t.placeholderPrefix), t = T(l.toString(16)), y(r, t), w(r, Bt);
      case 1:
        o.status = 2;
        var f = !0;
        l = o.chunks;
        var p = 0;
        o = o.children;
        for (var v = 0; v < o.length; v++) {
          for (f = o[v]; p < f.index; p++) y(r, l[p]);
          f = Lr(t, r, f);
        }
        for (; p < l.length - 1; p++) y(r, l[p]);
        return p < l.length && (f = w(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function Lr(t, r, o) {
    var l = o.boundary;
    if (l === null) return Ir(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, w(r, it), y(r, kt), l && (y(r, Ke), y(r, T($(l))), y(r, Ce)), w(r, Ut), Ir(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = x(f.boundaryPrefix + p.toString(16)), l = l.id = f, ce(r, t.responseState, l), Ir(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ce(r, t.responseState, l.id), Ir(t, r, o);
    else {
      if (w(r, zt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Lr(t, r, o[0]);
    }
    return w(r, Tt);
  }
  function wn(t, r, o) {
    return Ae(r, t.responseState, o.formatContext, o.id), Lr(t, r, o), Qe(r, o.formatContext);
  }
  function Tn(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) kn(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, R)), l === null) throw Error(u(395));
    return o = T(o.toString(16)), y(r, l), y(r, S), y(r, t.segmentPrefix), y(r, o), w(r, C);
  }
  function kn(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return wn(t, r, l);
    }
    return wn(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, At) : (t.sentCompleteSegmentFunction = !0, y(r, nr)), y(r, t.segmentPrefix), f = T(f.toString(16)), y(r, f), y(r, pt), y(r, t.placeholderPrefix), y(r, f), w(r, ft);
  }
  function Yr(t, r) {
    g = new Uint8Array(512), _ = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Lr(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && w(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var v = f[p];
        l = r;
        var E = t.responseState, O = v.id, D = v.errorDigest, P = v.errorMessage, G = v.errorComponentStack;
        if (y(l, E.startInlineScript), E.sentClientRenderFunction ? y(l, H) : (E.sentClientRenderFunction = !0, y(
          l,
          B
        )), O === null) throw Error(u(395));
        y(l, O), y(l, te), (D || P || G) && (y(l, be), y(l, T(Pe(D || "")))), (P || G) && (y(l, be), y(l, T(Pe(P || "")))), G && (y(l, be), y(l, T(Pe(G)))), w(l, Q);
      }
      f.splice(0, p);
      var Me = t.completedBoundaries;
      for (p = 0; p < Me.length; p++) Tn(t, r, Me[p]);
      Me.splice(0, p), A(r), g = new Uint8Array(512), _ = 0;
      var Ge = t.partialBoundaries;
      for (p = 0; p < Ge.length; p++) {
        var qe = Ge[p];
        e: {
          f = t, v = r;
          var Pr = qe.completedSegments;
          for (E = 0; E < Pr.length; E++) if (!kn(
            f,
            v,
            qe,
            Pr[E]
          )) {
            E++, Pr.splice(0, E);
            var Cn = !1;
            break e;
          }
          Pr.splice(0, E), Cn = !0;
        }
        if (!Cn) {
          t.destination = null, p++, Ge.splice(0, p);
          return;
        }
      }
      Ge.splice(0, p);
      var Zr = t.completedBoundaries;
      for (p = 0; p < Zr.length; p++) Tn(t, r, Zr[p]);
      Zr.splice(0, p);
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
      var f, p, v = new Promise(function(P, G) {
        p = P, f = G;
      }), E = ro(t, Pt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Nt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var P = new ReadableStream({ type: "bytes", pull: function(G) {
          if (E.status === 1) E.status = 2, ee(G, E.fatalError);
          else if (E.status !== 2 && E.destination === null) {
            E.destination = G;
            try {
              Yr(E, G);
            } catch (Me) {
              yr(E, Me), Or(E, Me);
            }
          }
        }, cancel: function() {
          _n(E);
        } }, { highWaterMark: 0 });
        P.allReady = v, o(P);
      }, function(P) {
        v.catch(function() {
        }), l(P);
      }, f);
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
var ir, Gn;
ir = jo(), Gn = Wo();
ir.version;
ir.renderToString;
ir.renderToStaticMarkup;
ir.renderToNodeStream;
ir.renderToStaticNodeStream;
Gn.renderToReadableStream;
const Vo = "staticMarkup";
function Go() {
  const u = oo().indexOf(Vo) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const qo = ({ gaData: m, prefix: u = "", children: g }) => {
  const { isReact: _ } = Go(), { onClick: y, ...w } = g.props;
  if (_)
    return xr.cloneElement(g, {
      ...w,
      onClick: (T) => ($o(m), y ? y(T) : !0)
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
    ...w,
    onClick: y,
    ...b
  });
}, qn = ({ id: m, item: u, openCard: g, onClick: _, gaData: y }) => {
  var b, T, x, ee, z, fe;
  const w = m === g, A = w ? "open" : "close";
  return /* @__PURE__ */ Ne.jsxs(
    "div",
    {
      className: Qr("accordion-item", "mt-3", {
        [`accordion-item-${u.color}`]: u.color,
        "accordion-header-icon": (b = u.content) == null ? void 0 : b.icon
      }),
      children: [
        /* @__PURE__ */ Ne.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ Ne.jsx("h4", { children: /* @__PURE__ */ Ne.jsx(
          qo,
          {
            gaData: { ...y, action: A, text: u.content.header },
            children: /* @__PURE__ */ Ne.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: Qr({ collapsed: !w }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${m}`,
                role: "button",
                "aria-expanded": w,
                "aria-controls": `card-body-${m}`,
                onClick: (ve) => _(ve, m),
                children: [
                  (T = u.content) != null && T.icon ? /* @__PURE__ */ Ne.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ Ne.jsx(
                      "i",
                      {
                        className: `${(x = u.content.icon) == null ? void 0 : x[0]} fa-${(ee = u.content.icon) == null ? void 0 : ee[1]} me-2`
                      }
                    ),
                    u.content.header
                  ] }) : (z = u.content) == null ? void 0 : z.header,
                  /* @__PURE__ */ Ne.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((fe = u.content) == null ? void 0 : fe.body) && /* @__PURE__ */ Ne.jsx(
          "div",
          {
            id: `card-body-${m}`,
            className: Qr("collapse", { show: w }),
            children: /* @__PURE__ */ Ne.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: Ho(u.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
qn.propTypes = {
  id: L.number,
  item: $n,
  openCard: L.number,
  onClick: L.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: L.object
};
const Xo = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Yo = ({ cards: m, openedCard: u }) => {
  const [g, _] = io(u), y = (w, A) => {
    w.preventDefault(), _(g !== A ? A : null);
  };
  return /* @__PURE__ */ Ne.jsx("div", { className: "accordion", children: m == null ? void 0 : m.map(
    (w, A) => w.content.body && w.content.header && /* @__PURE__ */ Ne.jsx(
      qn,
      {
        id: A + 1,
        item: w,
        openCard: g,
        onClick: y,
        gaData: Xo
      },
      A + 1
    )
  ) });
};
Yo.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: L.arrayOf($n).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: L.number
};
export {
  Yo as Accordion
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
