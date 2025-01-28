import Sr, { useId as ro } from "react";
function Bn(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var zn = { exports: {} }, yr = {};
var _n;
function no() {
  if (_n) return yr;
  _n = 1;
  var v = Sr, u = Symbol.for("react.element"), g = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(M, w, x) {
    var ee, z = {}, ce = null, Me = null;
    x !== void 0 && (ce = "" + x), w.key !== void 0 && (ce = "" + w.key), w.ref !== void 0 && (Me = w.ref);
    for (ee in w) _.call(w, ee) && !C.hasOwnProperty(ee) && (z[ee] = w[ee]);
    if (M && M.defaultProps) for (ee in w = M.defaultProps, w) z[ee] === void 0 && (z[ee] = w[ee]);
    return { $$typeof: u, type: M, key: ce, ref: Me, props: z, _owner: y.current };
  }
  return yr.Fragment = g, yr.jsx = b, yr.jsxs = b, yr;
}
zn.exports = no();
var Cn = zn.exports, Un = { exports: {} };
(function(v) {
  (function() {
    var u = {}.hasOwnProperty;
    function g() {
      for (var C = "", b = 0; b < arguments.length; b++) {
        var M = arguments[b];
        M && (C = y(C, _(M)));
      }
      return C;
    }
    function _(C) {
      if (typeof C == "string" || typeof C == "number")
        return C;
      if (typeof C != "object")
        return "";
      if (Array.isArray(C))
        return g.apply(null, C);
      if (C.toString !== Object.prototype.toString && !C.toString.toString().includes("[native code]"))
        return C.toString();
      var b = "";
      for (var M in C)
        u.call(C, M) && C[M] && (b = y(b, M));
      return b;
    }
    function y(C, b) {
      return b ? C ? C + " " + b : C + b : C;
    }
    v.exports ? (g.default = g, v.exports = g) : window.classNames = g;
  })();
})(Un);
var oo = Un.exports;
const io = /* @__PURE__ */ Bn(oo);
var Hn = { exports: {} }, Zr, Rn;
function lo() {
  if (Rn) return Zr;
  Rn = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zr = v, Zr;
}
var Jr, An;
function ao() {
  if (An) return Jr;
  An = 1;
  var v = lo();
  function u() {
  }
  function g() {
  }
  return g.resetWarningCache = u, Jr = function() {
    function _(b, M, w, x, ee, z) {
      if (z !== v) {
        var ce = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ce.name = "Invariant Violation", ce;
      }
    }
    _.isRequired = _;
    function y() {
      return _;
    }
    var C = {
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
    return C.PropTypes = C, C;
  }, Jr;
}
Hn.exports = ao()();
var so = Hn.exports;
const A = /* @__PURE__ */ Bn(so);
A.shape({
  url: A.string,
  altText: A.string,
  cssClass: A.arrayOf(A.string),
  size: A.oneOf(["small", "medium", "large"])
});
A.shape({
  text: A.string,
  maxWidth: A.string,
  cssClass: A.arrayOf(A.string),
  highlightColor: A.oneOf(["gold", "black"])
});
A.shape({
  color: A.oneOf(["gold", "maroon", "gray", "dark"]),
  content: A.shape({
    icon: A.string,
    header: A.string,
    body: A.string
  })
});
const uo = A.shape({
  text: A.string,
  name: A.string,
  event: A.string,
  action: A.string,
  type: A.string,
  region: A.string,
  section: A.string,
  component: A.string
});
function Ft(v) {
  "@babel/helpers - typeof";
  return Ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Ft(v);
}
function on(v, u) {
  return on = Object.setPrototypeOf || function(_, y) {
    return _.__proto__ = y, _;
  }, on(v, u);
}
function co() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Br(v, u, g) {
  return co() ? Br = Reflect.construct : Br = function(y, C, b) {
    var M = [null];
    M.push.apply(M, C);
    var w = Function.bind.apply(y, M), x = new w();
    return b && on(x, b.prototype), x;
  }, Br.apply(null, arguments);
}
function Xe(v) {
  return po(v) || fo(v) || ho(v) || mo();
}
function po(v) {
  if (Array.isArray(v)) return ln(v);
}
function fo(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function ho(v, u) {
  if (v) {
    if (typeof v == "string") return ln(v, u);
    var g = Object.prototype.toString.call(v).slice(8, -1);
    if (g === "Object" && v.constructor && (g = v.constructor.name), g === "Map" || g === "Set") return Array.from(v);
    if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return ln(v, u);
  }
}
function ln(v, u) {
  (u == null || u > v.length) && (u = v.length);
  for (var g = 0, _ = new Array(u); g < u; g++) _[g] = v[g];
  return _;
}
function mo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vo = Object.hasOwnProperty, bn = Object.setPrototypeOf, yo = Object.isFrozen, go = Object.getPrototypeOf, So = Object.getOwnPropertyDescriptor, me = Object.freeze, De = Object.seal, xo = Object.create, $n = typeof Reflect < "u" && Reflect, Ur = $n.apply, an = $n.construct;
Ur || (Ur = function(u, g, _) {
  return u.apply(g, _);
});
me || (me = function(u) {
  return u;
});
De || (De = function(u) {
  return u;
});
an || (an = function(u, g) {
  return Br(u, Xe(g));
});
var Eo = Ne(Array.prototype.forEach), Fn = Ne(Array.prototype.pop), gr = Ne(Array.prototype.push), zr = Ne(String.prototype.toLowerCase), Kr = Ne(String.prototype.toString), On = Ne(String.prototype.match), qe = Ne(String.prototype.replace), wo = Ne(String.prototype.indexOf), To = Ne(String.prototype.trim), ue = Ne(RegExp.prototype.test), Qr = ko(TypeError);
function Ne(v) {
  return function(u) {
    for (var g = arguments.length, _ = new Array(g > 1 ? g - 1 : 0), y = 1; y < g; y++)
      _[y - 1] = arguments[y];
    return Ur(v, u, _);
  };
}
function ko(v) {
  return function() {
    for (var u = arguments.length, g = new Array(u), _ = 0; _ < u; _++)
      g[_] = arguments[_];
    return an(v, g);
  };
}
function D(v, u, g) {
  var _;
  g = (_ = g) !== null && _ !== void 0 ? _ : zr, bn && bn(v, null);
  for (var y = u.length; y--; ) {
    var C = u[y];
    if (typeof C == "string") {
      var b = g(C);
      b !== C && (yo(u) || (u[y] = b), C = b);
    }
    v[C] = !0;
  }
  return v;
}
function Yt(v) {
  var u = xo(null), g;
  for (g in v)
    Ur(vo, v, [g]) === !0 && (u[g] = v[g]);
  return u;
}
function Pr(v, u) {
  for (; v !== null; ) {
    var g = So(v, u);
    if (g) {
      if (g.get)
        return Ne(g.get);
      if (typeof g.value == "function")
        return Ne(g.value);
    }
    v = go(v);
  }
  function _(y) {
    return console.warn("fallback value for", y), null;
  }
  return _;
}
var Mn = me(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), en = me(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), tn = me(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _o = me(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), rn = me(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Co = me(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), In = me(["#text"]), Ln = me(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), nn = me(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Pn = me(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = me(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ro = De(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ao = De(/<%[\w\W]*|[\w\W]*%>/gm), bo = De(/\${[\w\W]*}/gm), Fo = De(/^data-[\-\w.\u00B7-\uFFFF]/), Oo = De(/^aria-[\-\w]+$/), Mo = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Io = De(/^(?:\w+script|data):/i), Lo = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Po = De(/^html$/i), Do = De(/^[a-z][.\w]*(-[.\w]+)+$/i), No = function() {
  return typeof window > "u" ? null : window;
}, Bo = function(u, g) {
  if (Ft(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var _ = null, y = "data-tt-policy-suffix";
  g.currentScript && g.currentScript.hasAttribute(y) && (_ = g.currentScript.getAttribute(y));
  var C = "dompurify" + (_ ? "#" + _ : "");
  try {
    return u.createPolicy(C, {
      createHTML: function(M) {
        return M;
      },
      createScriptURL: function(M) {
        return M;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + C + " could not be created."), null;
  }
};
function Wn() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : No(), u = function(s) {
    return Wn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !v || !v.document || v.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var g = v.document, _ = v.document, y = v.DocumentFragment, C = v.HTMLTemplateElement, b = v.Node, M = v.Element, w = v.NodeFilter, x = v.NamedNodeMap, ee = x === void 0 ? v.NamedNodeMap || v.MozNamedAttrMap : x, z = v.HTMLFormElement, ce = v.DOMParser, Me = v.trustedTypes, Z = M.prototype, Jt = Pr(Z, "cloneNode"), oe = Pr(Z, "nextSibling"), J = Pr(Z, "childNodes"), ae = Pr(Z, "parentNode");
  if (typeof C == "function") {
    var Qe = _.createElement("template");
    Qe.content && Qe.content.ownerDocument && (_ = Qe.content.ownerDocument);
  }
  var ie = Bo(Me, g), ht = ie ? ie.createHTML("") : "", re = _, $ = re.implementation, ir = re.createNodeIterator, Ot = re.createDocumentFragment, Mt = re.getElementsByTagName, Kt = g.importNode, de = {};
  try {
    de = Yt(_).documentMode ? _.documentMode : {};
  } catch {
  }
  var ve = {};
  u.isSupported = typeof ae == "function" && $ && $.createHTMLDocument !== void 0 && de !== 9;
  var mt = Ro, vt = Ao, It = bo, lr = Fo, Lt = Oo, ye = Io, Pt = Lo, et = Do, tt = Mo, q = null, yt = D({}, [].concat(Xe(Mn), Xe(en), Xe(tn), Xe(rn), Xe(In))), K = null, gt = D({}, [].concat(Xe(Ln), Xe(nn), Xe(Pn), Xe(Dr))), W = Object.seal(Object.create(null, {
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
  })), Be = null, he = null, Ie = !0, ge = !0, St = !1, ne = !0, se = !1, xt = !0, Se = !1, Dt = !1, Ye = !1, xe = !1, ze = !1, rt = !1, Te = !0, le = !1, Qt = "user-content-", Et = !0, Ze = !1, Ue = {}, ke = null, Nt = D({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Bt = null, er = D({}, ["audio", "video", "img", "source", "image", "track"]), nt = null, ot = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", _e = "http://www.w3.org/1999/xhtml", Je = _e, zt = !1, pe = null, Ut = D({}, [wt, Tt, _e], Kr), Ee, U = ["application/xhtml+xml", "text/html"], it = "text/html", V, we = null, Le = _.createElement("form"), lt = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, Ce = function(s) {
    we && we === s || ((!s || Ft(s) !== "object") && (s = {}), s = Yt(s), Ee = // eslint-disable-next-line unicorn/prefer-includes
    U.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? Ee = it : Ee = s.PARSER_MEDIA_TYPE, V = Ee === "application/xhtml+xml" ? Kr : zr, q = "ALLOWED_TAGS" in s ? D({}, s.ALLOWED_TAGS, V) : yt, K = "ALLOWED_ATTR" in s ? D({}, s.ALLOWED_ATTR, V) : gt, pe = "ALLOWED_NAMESPACES" in s ? D({}, s.ALLOWED_NAMESPACES, Kr) : Ut, nt = "ADD_URI_SAFE_ATTR" in s ? D(
      Yt(ot),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : ot, Bt = "ADD_DATA_URI_TAGS" in s ? D(
      Yt(er),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : er, ke = "FORBID_CONTENTS" in s ? D({}, s.FORBID_CONTENTS, V) : Nt, Be = "FORBID_TAGS" in s ? D({}, s.FORBID_TAGS, V) : {}, he = "FORBID_ATTR" in s ? D({}, s.FORBID_ATTR, V) : {}, Ue = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ie = s.ALLOW_ARIA_ATTR !== !1, ge = s.ALLOW_DATA_ATTR !== !1, St = s.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = s.SAFE_FOR_TEMPLATES || !1, xt = s.SAFE_FOR_XML !== !1, Se = s.WHOLE_DOCUMENT || !1, xe = s.RETURN_DOM || !1, ze = s.RETURN_DOM_FRAGMENT || !1, rt = s.RETURN_TRUSTED_TYPE || !1, Ye = s.FORCE_BODY || !1, Te = s.SANITIZE_DOM !== !1, le = s.SANITIZE_NAMED_PROPS || !1, Et = s.KEEP_CONTENT !== !1, Ze = s.IN_PLACE || !1, tt = s.ALLOWED_URI_REGEXP || tt, Je = s.NAMESPACE || _e, W = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (W.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (W.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (ge = !1), ze && (xe = !0), Ue && (q = D({}, Xe(In)), K = [], Ue.html === !0 && (D(q, Mn), D(K, Ln)), Ue.svg === !0 && (D(q, en), D(K, nn), D(K, Dr)), Ue.svgFilters === !0 && (D(q, tn), D(K, nn), D(K, Dr)), Ue.mathMl === !0 && (D(q, rn), D(K, Pn), D(K, Dr))), s.ADD_TAGS && (q === yt && (q = Yt(q)), D(q, s.ADD_TAGS, V)), s.ADD_ATTR && (K === gt && (K = Yt(K)), D(K, s.ADD_ATTR, V)), s.ADD_URI_SAFE_ATTR && D(nt, s.ADD_URI_SAFE_ATTR, V), s.FORBID_CONTENTS && (ke === Nt && (ke = Yt(ke)), D(ke, s.FORBID_CONTENTS, V)), Et && (q["#text"] = !0), Se && D(q, ["html", "head", "body"]), q.table && (D(q, ["tbody"]), delete Be.tbody), me && me(s), we = s);
  }, Ht = D({}, ["mi", "mo", "mn", "ms", "mtext"]), kt = D({}, ["annotation-xml"]), $t = D({}, ["title", "style", "font", "a", "script"]), at = D({}, en);
  D(at, tn), D(at, _o);
  var _t = D({}, rn);
  D(_t, Co);
  var tr = function(s) {
    var S = ae(s);
    (!S || !S.tagName) && (S = {
      namespaceURI: Je,
      tagName: "template"
    });
    var k = zr(s.tagName), B = zr(S.tagName);
    return pe[s.namespaceURI] ? s.namespaceURI === Tt ? S.namespaceURI === _e ? k === "svg" : S.namespaceURI === wt ? k === "svg" && (B === "annotation-xml" || Ht[B]) : !!at[k] : s.namespaceURI === wt ? S.namespaceURI === _e ? k === "math" : S.namespaceURI === Tt ? k === "math" && kt[B] : !!_t[k] : s.namespaceURI === _e ? S.namespaceURI === Tt && !kt[B] || S.namespaceURI === wt && !Ht[B] ? !1 : !_t[k] && ($t[k] || !at[k]) : !!(Ee === "application/xhtml+xml" && pe[s.namespaceURI]) : !1;
  }, fe = function(s) {
    gr(u.removed, {
      element: s
    });
    try {
      s.parentNode.removeChild(s);
    } catch {
      try {
        s.outerHTML = ht;
      } catch {
        s.remove();
      }
    }
  }, Ct = function(s, S) {
    try {
      gr(u.removed, {
        attribute: S.getAttributeNode(s),
        from: S
      });
    } catch {
      gr(u.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(s), s === "is" && !K[s])
      if (xe || ze)
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
    var S, k;
    if (Ye)
      s = "<remove></remove>" + s;
    else {
      var B = On(s, /^[\r\n\t ]+/);
      k = B && B[0];
    }
    Ee === "application/xhtml+xml" && Je === _e && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var H = ie ? ie.createHTML(s) : s;
    if (Je === _e)
      try {
        S = new ce().parseFromString(H, Ee);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = $.createDocument(Je, "template", null);
      try {
        S.documentElement.innerHTML = zt ? ht : H;
      } catch {
      }
    }
    var te = S.body || S.documentElement;
    return s && k && te.insertBefore(_.createTextNode(k), te.childNodes[0] || null), Je === _e ? Mt.call(S, Se ? "html" : "body")[0] : Se ? S.documentElement : te;
  }, Wt = function(s) {
    return ir.call(
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
    return Ft(b) === "object" ? s instanceof b : s && Ft(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Re = function(s, S, k) {
    ve[s] && Eo(ve[s], function(B) {
      B.call(u, S, k, we);
    });
  }, Ke = function(s) {
    var S;
    if (Re("beforeSanitizeElements", s, null), ut(s) || ue(/[\u0080-\uFFFF]/, s.nodeName))
      return fe(s), !0;
    var k = V(s.nodeName);
    if (Re("uponSanitizeElement", s, {
      tagName: k,
      allowedTags: q
    }), s.hasChildNodes() && !He(s.firstElementChild) && (!He(s.content) || !He(s.content.firstElementChild)) && ue(/<[/\w]/g, s.innerHTML) && ue(/<[/\w]/g, s.textContent) || k === "select" && ue(/<template/i, s.innerHTML) || s.nodeType === 7 || xt && s.nodeType === 8 && ue(/<[/\w]/g, s.data))
      return fe(s), !0;
    if (!q[k] || Be[k]) {
      if (!Be[k] && Rt(k) && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, k) || W.tagNameCheck instanceof Function && W.tagNameCheck(k)))
        return !1;
      if (Et && !ke[k]) {
        var B = ae(s) || s.parentNode, H = J(s) || s.childNodes;
        if (H && B)
          for (var te = H.length, Q = te - 1; Q >= 0; --Q) {
            var Ae = Jt(H[Q], !0);
            Ae.__removalCount = (s.__removalCount || 0) + 1, B.insertBefore(Ae, oe(s));
          }
      }
      return fe(s), !0;
    }
    return s instanceof M && !tr(s) || (k === "noscript" || k === "noembed" || k === "noframes") && ue(/<\/no(script|embed|frames)/i, s.innerHTML) ? (fe(s), !0) : (se && s.nodeType === 3 && (S = s.textContent, S = qe(S, mt, " "), S = qe(S, vt, " "), S = qe(S, It, " "), s.textContent !== S && (gr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = S)), Re("afterSanitizeElements", s, null), !1);
  }, rr = function(s, S, k) {
    if (Te && (S === "id" || S === "name") && (k in _ || k in Le))
      return !1;
    if (!(ge && !he[S] && ue(lr, S))) {
      if (!(Ie && ue(Lt, S))) {
        if (!K[S] || he[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Rt(s) && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, s) || W.tagNameCheck instanceof Function && W.tagNameCheck(s)) && (W.attributeNameCheck instanceof RegExp && ue(W.attributeNameCheck, S) || W.attributeNameCheck instanceof Function && W.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && W.allowCustomizedBuiltInElements && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, k) || W.tagNameCheck instanceof Function && W.tagNameCheck(k)))
          ) return !1;
        } else if (!nt[S]) {
          if (!ue(tt, qe(k, Pt, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && s !== "script" && wo(k, "data:") === 0 && Bt[s])) {
              if (!(St && !ue(ye, qe(k, Pt, "")))) {
                if (k)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Rt = function(s) {
    return s !== "annotation-xml" && On(s, et);
  }, ct = function(s) {
    var S, k, B, H;
    Re("beforeSanitizeAttributes", s, null);
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
        var Ae = S, X = Ae.name, Pe = Ae.namespaceURI;
        if (k = X === "value" ? S.value : To(S.value), B = V(X), Q.attrName = B, Q.attrValue = k, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Re("uponSanitizeAttribute", s, Q), k = Q.attrValue, !Q.forceKeepAttr && (Ct(X, s), !!Q.keepAttr)) {
          if (!ne && ue(/\/>/i, k)) {
            Ct(X, s);
            continue;
          }
          se && (k = qe(k, mt, " "), k = qe(k, vt, " "), k = qe(k, It, " "));
          var $e = V(s.nodeName);
          if (rr($e, B, k)) {
            if (le && (B === "id" || B === "name") && (Ct(X, s), k = Qt + k), xt && ue(/((--!?|])>)|<\/(style|title)/i, k)) {
              Ct(X, s);
              continue;
            }
            if (ie && Ft(Me) === "object" && typeof Me.getAttributeType == "function" && !Pe)
              switch (Me.getAttributeType($e, B)) {
                case "TrustedHTML": {
                  k = ie.createHTML(k);
                  break;
                }
                case "TrustedScriptURL": {
                  k = ie.createScriptURL(k);
                  break;
                }
              }
            try {
              Pe ? s.setAttributeNS(Pe, X, k) : s.setAttribute(X, k), ut(s) ? fe(s) : Fn(u.removed);
            } catch {
            }
          }
        }
      }
      Re("afterSanitizeAttributes", s, null);
    }
  }, pt = function R(s) {
    var S, k = Wt(s);
    for (Re("beforeSanitizeShadowDOM", s, null); S = k.nextNode(); )
      Re("uponSanitizeShadowNode", S, null), !Ke(S) && (S.content instanceof y && R(S.content), ct(S));
    Re("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(R) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, k, B, H, te;
    if (zt = !R, zt && (R = "<!-->"), typeof R != "string" && !He(R))
      if (typeof R.toString == "function") {
        if (R = R.toString(), typeof R != "string")
          throw Qr("dirty is not a string, aborting");
      } else
        throw Qr("toString is not a function");
    if (!u.isSupported) {
      if (Ft(v.toStaticHTML) === "object" || typeof v.toStaticHTML == "function") {
        if (typeof R == "string")
          return v.toStaticHTML(R);
        if (He(R))
          return v.toStaticHTML(R.outerHTML);
      }
      return R;
    }
    if (Dt || Ce(s), u.removed = [], typeof R == "string" && (Ze = !1), Ze) {
      if (R.nodeName) {
        var Q = V(R.nodeName);
        if (!q[Q] || Be[Q])
          throw Qr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (R instanceof b)
      S = st("<!---->"), k = S.ownerDocument.importNode(R, !0), k.nodeType === 1 && k.nodeName === "BODY" || k.nodeName === "HTML" ? S = k : S.appendChild(k);
    else {
      if (!xe && !se && !Se && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return ie && rt ? ie.createHTML(R) : R;
      if (S = st(R), !S)
        return xe ? null : rt ? ht : "";
    }
    S && Ye && fe(S.firstChild);
    for (var Ae = Wt(Ze ? R : S); B = Ae.nextNode(); )
      B.nodeType === 3 && B === H || Ke(B) || (B.content instanceof y && pt(B.content), ct(B), H = B);
    if (H = null, Ze)
      return R;
    if (xe) {
      if (ze)
        for (te = Ot.call(S.ownerDocument); S.firstChild; )
          te.appendChild(S.firstChild);
      else
        te = S;
      return (K.shadowroot || K.shadowrootmod) && (te = Kt.call(g, te, !0)), te;
    }
    var X = Se ? S.outerHTML : S.innerHTML;
    return Se && q["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && ue(Po, S.ownerDocument.doctype.name) && (X = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + X), se && (X = qe(X, mt, " "), X = qe(X, vt, " "), X = qe(X, It, " ")), ie && rt ? ie.createHTML(X) : X;
  }, u.setConfig = function(R) {
    Ce(R), Dt = !0;
  }, u.clearConfig = function() {
    we = null, Dt = !1;
  }, u.isValidAttribute = function(R, s, S) {
    we || Ce({});
    var k = V(R), B = V(s);
    return rr(k, B, S);
  }, u.addHook = function(R, s) {
    typeof s == "function" && (ve[R] = ve[R] || [], gr(ve[R], s));
  }, u.removeHook = function(R) {
    if (ve[R])
      return Fn(ve[R]);
  }, u.removeHooks = function(R) {
    ve[R] && (ve[R] = []);
  }, u.removeAllHooks = function() {
    ve = {};
  }, u;
}
Wn();
A.shape({
  event: A.string,
  action: A.string,
  name: A.string,
  region: A.string,
  section: A.string,
  component: A.string,
  type: A.string,
  text: A.string
});
const zo = ({
  event: v = "",
  action: u = "",
  name: g = "",
  type: _ = "",
  section: y = "",
  text: C = "",
  region: b = "",
  component: M = ""
}) => {
  const { dataLayer: w } = window, x = {
    event: v.toLowerCase(),
    action: u.toLowerCase(),
    name: g.toLowerCase(),
    type: _.toLowerCase(),
    region: b.toLowerCase(),
    section: y.toLowerCase(),
    text: C.toLowerCase(),
    component: M.toLowerCase()
  };
  w && w.push(x);
};
var Zt = {};
var Dn;
function Uo() {
  if (Dn) return Zt;
  Dn = 1;
  var v = Sr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, C = {};
  function b(e) {
    return g.call(C, e) ? !0 : g.call(y, e) ? !1 : _.test(e) ? C[e] = !0 : (y[e] = !0, !1);
  }
  function M(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new M(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    w[n] = new M(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new M(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new M(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new M(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new M(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    w[n] = new M(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(x, ee);
    w[n] = new M(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(x, ee);
    w[n] = new M(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new M("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
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
  }, ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(e) {
    ce.forEach(function(n) {
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
  var Jt = /([A-Z])/g, oe = /^ms-/, J = Array.isArray;
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
  function ht(e, n, i) {
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
          h !== void 0 || (h = Z(c.replace(Jt, "-$1").toLowerCase().replace(oe, "-ms-")), ie.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || g.call(z, a) ? "" + d : d + "px" : Z(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function re(e, n, i, a) {
    switch (i) {
      case "style":
        ht(e, n, a);
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
      } else if (b(i)) {
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
  function ir(e) {
    var n = "";
    return v.Children.forEach(e, function(i) {
      i != null && (n += i);
    }), n;
  }
  function Ot(e, n, i, a) {
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
  var Mt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Kt = /* @__PURE__ */ new Map();
  function de(e) {
    var n = Kt.get(e);
    if (n === void 0) {
      if (!Mt.test(e)) throw Error(u(65, e));
      n = "<" + e, Kt.set(e, n);
    }
    return n;
  }
  function ve(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(de("select"));
        var c = null, h = null;
        for (L in i) if (g.call(i, L)) {
          var T = i[L];
          if (T != null) switch (L) {
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
              re(e, a, L, T);
          }
        }
        return e.push(">"), $(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(de("option"));
        var F = T = null, I = null, L = null;
        for (c in i) if (g.call(i, c)) {
          var Y = i[c];
          if (Y != null) switch (c) {
            case "children":
              T = Y;
              break;
            case "selected":
              I = Y;
              break;
            case "dangerouslySetInnerHTML":
              L = Y;
              break;
            case "value":
              F = Y;
            default:
              re(e, a, c, Y);
          }
        }
        if (h != null) if (i = F !== null ? "" + F : ir(T), J(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else I && e.push(' selected=""');
        return e.push(">"), $(e, L, T), T;
      case "textarea":
        e.push(de("textarea")), L = h = c = null;
        for (T in i) if (g.call(i, T) && (F = i[T], F != null)) switch (T) {
          case "children":
            L = F;
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
        if (c === null && h !== null && (c = h), e.push(">"), L != null) {
          if (c != null) throw Error(u(92));
          if (J(L) && 1 < L.length) throw Error(u(93));
          c = "" + L;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(Z("" + c)), null;
      case "input":
        e.push(de("input")), F = L = T = c = null;
        for (h in i) if (g.call(i, h) && (I = i[h], I != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = I;
            break;
          case "defaultValue":
            T = I;
            break;
          case "checked":
            L = I;
            break;
          case "value":
            c = I;
            break;
          default:
            re(e, a, h, I);
        }
        return L !== null ? re(e, a, "checked", L) : F !== null && re(e, a, "checked", F), c !== null ? re(e, a, "value", c) : T !== null && re(e, a, "value", T), e.push("/>"), null;
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
        e.push(de(n));
        for (var je in i) if (g.call(i, je) && (c = i[je], c != null)) switch (je) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            re(e, a, je, c);
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
        e.push(de(n)), h = c = null;
        for (I in i) if (g.call(i, I) && (T = i[I], T != null)) switch (I) {
          case "children":
            c = T;
            break;
          case "dangerouslySetInnerHTML":
            h = T;
            break;
          case "style":
            ht(e, a, T);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            b(I) && typeof T != "function" && typeof T != "symbol" && e.push(" ", I, '="', Z(T), '"');
        }
        return e.push(">"), $(e, h, c), c;
    }
  }
  function mt(e, n, i) {
    if (e.push('<!--$?--><template id="'), i === null) throw Error(u(395));
    return e.push(i), e.push('"></template>');
  }
  function vt(e, n, i, a) {
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
  function It(e, n) {
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
  var lr = /[<\u2028\u2029]/g;
  function Lt(e) {
    return JSON.stringify(e).replace(lr, function(n) {
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
  function ye(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Pt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Z(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Z(n)), e = !0), e);
  }
  var et = Object.assign, tt = Symbol.for("react.element"), q = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), Be = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), xt = Symbol.for("react.debug_trace_mode"), Se = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), Ye = Symbol.iterator;
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case yt:
        return "Fragment";
      case q:
        return "Portal";
      case gt:
        return "Profiler";
      case K:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case W:
        return (e._context.displayName || "Context") + ".Provider";
      case he:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case St:
        return n = e.displayName || null, n !== null ? n : xe(e.type) || "Memo";
      case ne:
        n = e._payload, e = e._init;
        try {
          return xe(e(n));
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
  var Te = null;
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
  function Qt(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Qt(e);
  }
  function Et(e) {
    var n = e.parent;
    n !== null && Et(n), e.context._currentValue2 = e.value;
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
  function ke(e) {
    var n = Te;
    n !== e && (n === null ? Et(e) : e === null ? Qt(n) : n.depth === e.depth ? le(n, e) : n.depth > e.depth ? Ze(n, e) : Ue(n, e), Te = e);
  }
  var Nt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function Bt(e, n, i, a) {
    var d = e.state !== void 0 ? e.state : null;
    e.updater = Nt, e.props = i, e.state = d;
    var c = { queue: [], replace: !1 };
    e._reactInternals = c;
    var h = n.contextType;
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : et({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Nt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
    else {
      for (c = h ? n[0] : e.state, d = !0, h = h ? 1 : 0; h < n.length; h++) {
        var T = n[h];
        T = typeof T == "function" ? T.call(e, c, i, a) : T, T != null && (d ? (d = !1, c = et({}, c, T)) : et(c, T));
      }
      e.state = c;
    }
    else c.queue = null;
  }
  var er = { id: 1, overflow: "" };
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
  var ot = Math.clz32 ? Math.clz32 : _e, wt = Math.log, Tt = Math.LN2;
  function _e(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wt(e) / Tt | 0) | 0;
  }
  function Je(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var zt = typeof Object.is == "function" ? Object.is : Je, pe = null, Ut = null, Ee = null, U = null, it = !1, V = !1, we = 0, Le = null, lt = 0;
  function Ce() {
    if (pe === null) throw Error(u(321));
    return pe;
  }
  function Ht() {
    if (0 < lt) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function kt() {
    return U === null ? Ee === null ? (it = !1, Ee = U = Ht()) : (it = !0, U = Ee) : U.next === null ? (it = !1, U = U.next = Ht()) : (it = !0, U = U.next), U;
  }
  function $t() {
    Ut = pe = null, V = !1, Ee = null, lt = 0, U = Le = null;
  }
  function at(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function _t(e, n, i) {
    if (pe = Ce(), U = kt(), it) {
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
    return e = e === at ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, U.memoizedState = e, e = U.queue = { last: null, dispatch: null }, e = e.dispatch = fe.bind(null, pe, e), [U.memoizedState, e];
  }
  function tr(e, n) {
    if (pe = Ce(), U = kt(), n = n === void 0 ? null : n, U !== null) {
      var i = U.memoizedState;
      if (i !== null && n !== null) {
        var a = i[1];
        e: if (a === null) a = !1;
        else {
          for (var d = 0; d < a.length && d < n.length; d++) if (!zt(n[d], a[d])) {
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
    if (e === pe) if (V = !0, e = { action: i, next: null }, Le === null && (Le = /* @__PURE__ */ new Map()), i = Le.get(n), i === void 0) Le.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Ct() {
    throw Error(u(394));
  }
  function st() {
  }
  var Wt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return Ce(), e._currentValue2;
  }, useMemo: tr, useReducer: _t, useRef: function(e) {
    pe = Ce(), U = kt();
    var n = U.memoizedState;
    return n === null ? (e = { current: e }, U.memoizedState = e) : n;
  }, useState: function(e) {
    return _t(at, e);
  }, useInsertionEffect: st, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return tr(function() {
      return e;
    }, n);
  }, useImperativeHandle: st, useEffect: st, useDebugValue: st, useDeferredValue: function(e) {
    return Ce(), e;
  }, useTransition: function() {
    return Ce(), [
      !1,
      Ct
    ];
  }, useId: function() {
    var e = Ut.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - ot(e) - 1)).toString(32) + n;
    var i = ut;
    if (i === null) throw Error(u(404));
    return n = we++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return Ce(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, ut = null, He = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Re(e) {
    return console.error(e), null;
  }
  function Ke() {
  }
  function rr(e, n, i, a, d, c, h, T, F) {
    var I = [], L = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: L, pingedTasks: I, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Re : d, onAllReady: Ke, onShellReady: h === void 0 ? Ke : h, onShellError: Ke, onFatalError: Ke }, i = ct(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = Rt(n, e, null, i, L, ze, null, er), I.push(e), n;
  }
  function Rt(e, n, i, a, d, c, h, T) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var F = { node: n, ping: function() {
      var I = e.pingedTasks;
      I.push(F), I.length === 1 && ar(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: T };
    return d.add(F), F;
  }
  function ct(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function pt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function R(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (pe = {}, Ut = n, we = 0, e = i(a, d); V; ) V = !1, we = 0, lt += 1, U = null, e = i(a, d);
    return $t(), e;
  }
  function S(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var T in i) if (!(T in c)) throw Error(u(108, xe(a) || "Unknown", T));
        a = et({}, h, i);
      }
      n.legacyContext = a, H(e, n, d), n.legacyContext = h;
    } else H(e, n, d);
  }
  function k(e, n) {
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
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), Bt(c, i, a, d), S(e, n, c, i);
    } else {
      c = rt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = we !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) Bt(d, i, a, c), S(e, n, d, i);
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
      switch (d = n.blockedSegment, c = ve(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Qe(h, i, a), Q(e, n, c), d.formatContext = h, i) {
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
        case Se:
        case xt:
        case K:
        case gt:
        case yt:
          H(e, n, a.children);
          return;
        case ge:
          H(e, n, a.children);
          return;
        case se:
          throw Error(u(343));
        case Ie:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var T = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, F = ct(e, d.chunks.length, T, d.formatContext, !1, !1);
            d.children.push(F), d.lastPushedText = !1;
            var I = ct(e, 0, null, d.formatContext, !1, !1);
            I.parentFlushed = !0, n.blockedBoundary = T, n.blockedSegment = I;
            try {
              if (Q(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || I.lastPushedText && I.textEmbedded && I.chunks.push("<!-- -->"), I.status = 1, Pe(T, I), T.pendingTasks === 0) break e;
            } catch (L) {
              I.status = 4, T.forceClientRender = !0, T.errorDigest = pt(e, L);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = Rt(e, c, i, F, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case he:
          if (a = s(e, n, i.render, a, d), we !== 0) {
            i = n.treeContext, n.treeContext = nt(i, 1, 0);
            try {
              H(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else H(e, n, a);
          return;
        case St:
          i = i.type, a = k(i, a), B(e, n, i, a, d);
          return;
        case W:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = Te, Te = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, H(e, n, d), e = Te, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = Te = e.parent, n.context = e;
          return;
        case Be:
          a = a.children, a = a(i._currentValue2), H(e, n, a);
          return;
        case ne:
          d = i._init, i = d(i._payload), a = k(i, a), B(
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
      if ($t(), typeof F == "object" && F !== null && typeof F.then == "function") {
        i = F;
        var h = n.blockedSegment, T = ct(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(T), h.lastPushedText = !1, e = Rt(e, n.node, n.blockedBoundary, T, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, ke(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, ke(c), F;
    }
  }
  function Ae(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, $e(this, n, e);
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
  function $e(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Ke, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Pe(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Ae, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Pe(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function ar(e) {
    if (e.status !== 2) {
      var n = Te, i = He.current;
      He.current = Wt;
      var a = ut;
      ut = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], T = e, F = h.blockedSegment;
          if (F.status === 0) {
            ke(h.context);
            try {
              H(T, h, h.node), T.responseState.generateStaticMarkup || F.lastPushedText && F.textEmbedded && F.chunks.push("<!-- -->"), h.abortSet.delete(h), F.status = 1, $e(T, h.blockedBoundary, F);
            } catch (be) {
              if ($t(), typeof be == "object" && be !== null && typeof be.then == "function") {
                var I = h.ping;
                be.then(I, I);
              } else {
                h.abortSet.delete(h), F.status = 4;
                var L = h.blockedBoundary, Y = be, We = pt(T, Y);
                if (L === null ? R(T, Y) : (L.pendingTasks--, L.forceClientRender || (L.forceClientRender = !0, L.errorDigest = We, L.parentFlushed && T.clientRenderedBoundaries.push(L))), T.allPendingTasks--, T.allPendingTasks === 0) {
                  var je = T.onAllReady;
                  je();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && nr(e, e.destination);
      } catch (be) {
        pt(e, be), R(e, be);
      } finally {
        ut = a, He.current = i, i === Wt && ke(n);
      }
    }
  }
  function jt(e, n, i) {
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
          d = Vt(e, n, d);
        }
        for (; c < a.length - 1; c++) n.push(a[c]);
        return c < a.length && (d = n.push(a[c])), d;
      default:
        throw Error(u(390));
    }
  }
  function Vt(e, n, i) {
    var a = i.boundary;
    if (a === null) return jt(e, n, i);
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = Z(a), n.push(a), n.push('"')), n.push("></template>")), jt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < a.pendingTasks) {
      a.rootSegmentID = e.nextSegmentId++, 0 < a.completedSegments.length && e.partialBoundaries.push(a);
      var d = e.responseState, c = d.nextSuspenseID++;
      return d = d.boundaryPrefix + c.toString(16), a = a.id = d, mt(n, e.responseState, a), jt(e, n, i), n.push("<!--/$-->");
    }
    if (a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), mt(n, e.responseState, a.id), jt(e, n, i), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), i = a.completedSegments, i.length !== 1) throw Error(u(391));
    return Vt(e, n, i[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function sr(e, n, i) {
    return vt(n, e.responseState, i.formatContext, i.id), Vt(e, n, i), It(n, i.formatContext);
  }
  function ur(e, n, i) {
    for (var a = i.completedSegments, d = 0; d < a.length; d++) cr(e, n, i, a[d]);
    if (a.length = 0, e = e.responseState, a = i.id, i = i.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), a === null) throw Error(u(395));
    return i = i.toString(16), n.push(a), n.push('","'), n.push(e.segmentPrefix), n.push(i), n.push('")<\/script>');
  }
  function cr(e, n, i, a) {
    if (a.status === 2) return !0;
    var d = a.id;
    if (d === -1) {
      if ((a.id = i.rootSegmentID) === -1) throw Error(u(392));
      return sr(e, n, a);
    }
    return sr(e, n, a), e = e.responseState, n.push(e.startInlineScript), e.sentCompleteSegmentFunction ? n.push('$RS("') : (e.sentCompleteSegmentFunction = !0, n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), d = d.toString(16), n.push(d), n.push('","'), n.push(e.placeholderPrefix), n.push(d), n.push('")<\/script>');
  }
  function nr(e, n) {
    try {
      var i = e.completedRootSegment;
      if (i !== null && e.pendingRootTasks === 0) {
        Vt(e, n, i), e.completedRootSegment = null;
        var a = e.responseState.bootstrapChunks;
        for (i = 0; i < a.length - 1; i++) n.push(a[i]);
        i < a.length && n.push(a[i]);
      }
      var d = e.clientRenderedBoundaries, c;
      for (c = 0; c < d.length; c++) {
        var h = d[c];
        a = n;
        var T = e.responseState, F = h.id, I = h.errorDigest, L = h.errorMessage, Y = h.errorComponentStack;
        if (a.push(T.startInlineScript), T.sentClientRenderFunction ? a.push('$RX("') : (T.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), F === null) throw Error(u(395));
        if (a.push(F), a.push('"'), I || L || Y) {
          a.push(",");
          var We = Lt(I || "");
          a.push(We);
        }
        if (L || Y) {
          a.push(",");
          var je = Lt(L || "");
          a.push(je);
        }
        if (Y) {
          a.push(",");
          var be = Lt(Y);
          a.push(be);
        }
        if (!a.push(")<\/script>")) {
          e.destination = null, c++, d.splice(0, c);
          return;
        }
      }
      d.splice(0, c);
      var Gt = e.completedBoundaries;
      for (c = 0; c < Gt.length; c++) if (!ur(e, n, Gt[c])) {
        e.destination = null, c++, Gt.splice(0, c);
        return;
      }
      Gt.splice(0, c);
      var ft = e.partialBoundaries;
      for (c = 0; c < ft.length; c++) {
        var fr = ft[c];
        e: {
          d = e, h = n;
          var qt = fr.completedSegments;
          for (T = 0; T < qt.length; T++) if (!cr(d, h, fr, qt[T])) {
            T++, qt.splice(0, T);
            var wr = !1;
            break e;
          }
          qt.splice(0, T), wr = !0;
        }
        if (!wr) {
          e.destination = null, c++, ft.splice(0, c);
          return;
        }
      }
      ft.splice(0, c);
      var At = e.completedBoundaries;
      for (c = 0; c < At.length; c++) if (!ur(e, n, At[c])) {
        e.destination = null, c++, At.splice(0, c);
        return;
      }
      At.splice(0, c);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function xr(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return X(a, e, n);
      }), i.clear(), e.destination !== null && nr(e, e.destination);
    } catch (a) {
      pt(e, a), R(e, a);
    }
  }
  function Er() {
  }
  function pr(e, n, i, a) {
    var d = !1, c = null, h = "", T = { push: function(I) {
      return I !== null && (h += I), !0;
    }, destroy: function(I) {
      d = !0, c = I;
    } }, F = !1;
    if (e = rr(e, ye(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Er, void 0, function() {
      F = !0;
    }), ar(e), xr(e, a), e.status === 1) e.status = 2, T.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = T;
      try {
        nr(e, T);
      } catch (I) {
        pt(e, I), R(e, I);
      }
    }
    if (d) throw c;
    if (!F) throw Error(u(426));
    return h;
  }
  return Zt.renderToNodeStream = function() {
    throw Error(u(207));
  }, Zt.renderToStaticMarkup = function(e, n) {
    return pr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Zt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Zt.renderToString = function(e, n) {
    return pr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Zt.version = "18.3.1", Zt;
}
var Nr = {};
var Nn;
function Ho() {
  if (Nn) return Nr;
  Nn = 1;
  var v = Sr;
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
  function C(t, r) {
    return y(t, r), !0;
  }
  function b(t) {
    g && 0 < _ && (t.enqueue(new Uint8Array(g.buffer, 0, _)), g = null, _ = 0);
  }
  var M = new TextEncoder();
  function w(t) {
    return M.encode(t);
  }
  function x(t) {
    return M.encode(t);
  }
  function ee(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var z = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Me = {}, Z = {};
  function Jt(t) {
    return z.call(Z, t) ? !0 : z.call(Me, t) ? !1 : ce.test(t) ? Z[t] = !0 : (Me[t] = !0, !1);
  }
  function oe(t, r, o, l, f, p, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = m;
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
  }, ht = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function(t) {
    ht.forEach(function(r) {
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
  var ir = /([A-Z])/g, Ot = /^ms-/, Mt = Array.isArray, Kt = x("<script>"), de = x("<\/script>"), ve = x('<script src="'), mt = x('<script type="module" src="'), vt = x('" async=""><\/script>'), It = /(<\/|<)(s)(cript)/gi;
  function lr(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Lt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Kt : x('<script nonce="' + $(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, w(("" + o).replace(It, lr)), de), l !== void 0) for (o = 0; o < l.length; o++) p.push(ve, w($(l[o])), vt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(mt, w($(f[l])), vt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: x(t + "P:"), segmentPrefix: x(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ye(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Pt(t) {
    return ye(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function et(t, r, o) {
    switch (r) {
      case "select":
        return ye(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return ye(2, null);
      case "math":
        return ye(3, null);
      case "foreignObject":
        return ye(1, null);
      case "table":
        return ye(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ye(5, null);
      case "colgroup":
        return ye(7, null);
      case "tr":
        return ye(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? ye(1, null) : t;
  }
  var tt = x("<!-- -->");
  function q(t, r, o, l) {
    return r === "" ? l : (l && t.push(tt), t.push(w($(r))), !0);
  }
  var yt = /* @__PURE__ */ new Map(), K = x(' style="'), gt = x(":"), W = x(";");
  function Be(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (z.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = w($(l));
          f = w($(("" + f).trim()));
        } else {
          p = l;
          var m = yt.get(p);
          m !== void 0 || (m = x($(p.replace(ir, "-$1").toLowerCase().replace(Ot, "-ms-"))), yt.set(p, m)), p = m, f = typeof f == "number" ? f === 0 || z.call(ie, l) ? w("" + f) : w(f + "px") : w($(("" + f).trim()));
        }
        r ? (r = !1, t.push(K, p, gt, f)) : t.push(W, p, gt, f);
      }
    }
    r || t.push(ge);
  }
  var he = x(" "), Ie = x('="'), ge = x('"'), St = x('=""');
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
            l && t.push(he, o, St);
            break;
          case 4:
            l === !0 ? t.push(he, o, St) : l !== !1 && t.push(he, o, Ie, w($(l)), ge);
            break;
          case 5:
            isNaN(l) || t.push(he, o, Ie, w($(l)), ge);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(he, o, Ie, w($(l)), ge);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(he, o, Ie, w($(l)), ge);
        }
      } else if (Jt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(he, w(o), Ie, w($(l)), ge);
      }
    }
  }
  var se = x(">"), xt = x("/>");
  function Se(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(w("" + r));
    }
  }
  function Dt(t) {
    var r = "";
    return v.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ye = x(' selected=""');
  function xe(t, r, o, l) {
    t.push(le(o));
    var f = o = null, p;
    for (p in r) if (z.call(r, p)) {
      var m = r[p];
      if (m != null) switch (p) {
        case "children":
          o = m;
          break;
        case "dangerouslySetInnerHTML":
          f = m;
          break;
        default:
          ne(t, l, p, m);
      }
    }
    return t.push(se), Se(t, f, o), typeof o == "string" ? (t.push(w($(o))), null) : o;
  }
  var ze = x(`
`), rt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Te = /* @__PURE__ */ new Map();
  function le(t) {
    var r = Te.get(t);
    if (r === void 0) {
      if (!rt.test(t)) throw Error(u(65, t));
      r = x("<" + t), Te.set(t, r);
    }
    return r;
  }
  var Qt = x("<!DOCTYPE html>");
  function Et(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(le("select"));
        var p = null, m = null;
        for (P in o) if (z.call(o, P)) {
          var E = o[P];
          if (E != null) switch (P) {
            case "children":
              p = E;
              break;
            case "dangerouslySetInnerHTML":
              m = E;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(t, l, P, E);
          }
        }
        return t.push(se), Se(t, m, p), p;
      case "option":
        m = f.selectedValue, t.push(le("option"));
        var O = E = null, N = null, P = null;
        for (p in o) if (z.call(o, p)) {
          var G = o[p];
          if (G != null) switch (p) {
            case "children":
              E = G;
              break;
            case "selected":
              N = G;
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
        if (m != null) if (o = O !== null ? "" + O : Dt(E), Mt(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(Ye);
              break;
            }
        } else "" + m === o && t.push(Ye);
        else N && t.push(Ye);
        return t.push(se), Se(t, P, E), E;
      case "textarea":
        t.push(le("textarea")), P = m = p = null;
        for (E in o) if (z.call(o, E) && (O = o[E], O != null)) switch (E) {
          case "children":
            P = O;
            break;
          case "value":
            p = O;
            break;
          case "defaultValue":
            m = O;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            ne(t, l, E, O);
        }
        if (p === null && m !== null && (p = m), t.push(se), P != null) {
          if (p != null) throw Error(u(92));
          if (Mt(P) && 1 < P.length) throw Error(u(93));
          p = "" + P;
        }
        return typeof p == "string" && p[0] === `
` && t.push(ze), p !== null && t.push(w($("" + p))), null;
      case "input":
        t.push(le("input")), O = P = E = p = null;
        for (m in o) if (z.call(o, m) && (N = o[m], N != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            O = N;
            break;
          case "defaultValue":
            E = N;
            break;
          case "checked":
            P = N;
            break;
          case "value":
            p = N;
            break;
          default:
            ne(t, l, m, N);
        }
        return P !== null ? ne(
          t,
          l,
          "checked",
          P
        ) : O !== null && ne(t, l, "checked", O), p !== null ? ne(t, l, "value", p) : E !== null && ne(t, l, "value", E), t.push(xt), null;
      case "menuitem":
        t.push(le("menuitem"));
        for (var Oe in o) if (z.call(o, Oe) && (p = o[Oe], p != null)) switch (Oe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ne(t, l, Oe, p);
        }
        return t.push(se), null;
      case "title":
        t.push(le("title")), p = null;
        for (G in o) if (z.call(o, G) && (m = o[G], m != null)) switch (G) {
          case "children":
            p = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ne(t, l, G, m);
        }
        return t.push(se), p;
      case "listing":
      case "pre":
        t.push(le(r)), m = p = null;
        for (O in o) if (z.call(o, O) && (E = o[O], E != null)) switch (O) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            m = E;
            break;
          default:
            ne(t, l, O, E);
        }
        if (t.push(se), m != null) {
          if (p != null) throw Error(u(60));
          if (typeof m != "object" || !("__html" in m)) throw Error(u(61));
          o = m.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(ze, w(o)) : t.push(w("" + o)));
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
        t.push(le(r));
        for (var Ve in o) if (z.call(o, Ve) && (p = o[Ve], p != null)) switch (Ve) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            ne(t, l, Ve, p);
        }
        return t.push(xt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return xe(t, o, r, l);
      case "html":
        return f.insertionMode === 0 && t.push(Qt), xe(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return xe(t, o, r, l);
        t.push(le(r)), m = p = null;
        for (N in o) if (z.call(o, N) && (E = o[N], E != null)) switch (N) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            m = E;
            break;
          case "style":
            Be(t, l, E);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Jt(N) && typeof E != "function" && typeof E != "symbol" && t.push(he, w(N), Ie, w($(E)), ge);
        }
        return t.push(se), Se(t, m, p), p;
    }
  }
  var Ze = x("</"), Ue = x(">"), ke = x('<template id="'), Nt = x('"></template>'), Bt = x("<!--$-->"), er = x('<!--$?--><template id="'), nt = x('"></template>'), ot = x("<!--$!-->"), wt = x("<!--/$-->"), Tt = x("<template"), _e = x('"'), Je = x(' data-dgst="');
  x(' data-msg="'), x(' data-stck="');
  var zt = x("></template>");
  function pe(t, r, o) {
    if (y(t, er), o === null) throw Error(u(395));
    return y(t, o), C(t, nt);
  }
  var Ut = x('<div hidden id="'), Ee = x('">'), U = x("</div>"), it = x('<svg aria-hidden="true" style="display:none" id="'), V = x('">'), we = x("</svg>"), Le = x('<math aria-hidden="true" style="display:none" id="'), lt = x('">'), Ce = x("</math>"), Ht = x('<table hidden id="'), kt = x('">'), $t = x("</table>"), at = x('<table hidden><tbody id="'), _t = x('">'), tr = x("</tbody></table>"), fe = x('<table hidden><tr id="'), Ct = x('">'), st = x("</tr></table>"), Wt = x('<table hidden><colgroup id="'), ut = x('">'), He = x("</colgroup></table>");
  function Re(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ut), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, Ee);
      case 2:
        return y(t, it), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, V);
      case 3:
        return y(t, Le), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, lt);
      case 4:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, kt);
      case 5:
        return y(t, at), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, _t);
      case 6:
        return y(t, fe), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, Ct);
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
        return C(t, we);
      case 3:
        return C(t, Ce);
      case 4:
        return C(t, $t);
      case 5:
        return C(t, tr);
      case 6:
        return C(t, st);
      case 7:
        return C(t, He);
      default:
        throw Error(u(397));
    }
  }
  var rr = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Rt = x('$RS("'), ct = x('","'), pt = x('")<\/script>'), R = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = x('$RC("'), S = x('","'), k = x('")<\/script>'), B = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), H = x('$RX("'), te = x('"'), Q = x(")<\/script>"), Ae = x(","), X = /[<\u2028\u2029]/g;
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
  var $e = Object.assign, ar = Symbol.for("react.element"), jt = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), sr = Symbol.for("react.strict_mode"), ur = Symbol.for("react.profiler"), cr = Symbol.for("react.provider"), nr = Symbol.for("react.context"), xr = Symbol.for("react.forward_ref"), Er = Symbol.for("react.suspense"), pr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function T(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Vt:
        return "Fragment";
      case jt:
        return "Portal";
      case ur:
        return "Profiler";
      case sr:
        return "StrictMode";
      case Er:
        return "Suspense";
      case pr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case nr:
        return (t.displayName || "Context") + ".Consumer";
      case cr:
        return (t._context.displayName || "Context") + ".Provider";
      case xr:
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
  function I(t, r) {
    if (t = t.contextTypes, !t) return F;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var L = null;
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
  function je(t) {
    var r = t.parent;
    r !== null && je(r), t.context._currentValue = t.value;
  }
  function be(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? Y(t, r) : be(t, r);
  }
  function Gt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? Y(t, o) : Gt(t, o), r.context._currentValue = r.value;
  }
  function ft(t) {
    var r = L;
    r !== t && (r === null ? je(t) : t === null ? We(r) : r.depth === t.depth ? Y(r, t) : r.depth > t.depth ? be(r, t) : Gt(r, t), L = t);
  }
  var fr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function qt(t, r, o, l) {
    var f = t.state !== void 0 ? t.state : null;
    t.updater = fr, t.props = o, t.state = f;
    var p = { queue: [], replace: !1 };
    t._reactInternals = p;
    var m = r.contextType;
    if (t.context = typeof m == "object" && m !== null ? m._currentValue : l, m = r.getDerivedStateFromProps, typeof m == "function" && (m = m(o, f), f = m == null ? f : $e({}, f, m), t.state = f), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && fr.enqueueReplaceState(t, t.state, null), p.queue !== null && 0 < p.queue.length) if (r = p.queue, m = p.replace, p.queue = null, p.replace = !1, m && r.length === 1) t.state = r[0];
    else {
      for (p = m ? r[0] : t.state, f = !0, m = m ? 1 : 0; m < r.length; m++) {
        var E = r[m];
        E = typeof E == "function" ? E.call(t, p, o, l) : E, E != null && (f ? (f = !1, p = $e({}, p, E)) : $e(p, E));
      }
      t.state = p;
    }
    else p.queue = null;
  }
  var wr = { id: 1, overflow: "" };
  function At(t, r, o) {
    var l = t.id;
    t = t.overflow;
    var f = 32 - Tr(l) - 1;
    l &= ~(1 << f), o += 1;
    var p = 32 - Tr(r) + f;
    if (30 < p) {
      var m = f - f % 5;
      return p = (l & (1 << m) - 1).toString(32), l >>= m, f -= m, { id: 1 << 32 - Tr(r) + f | o << f | l, overflow: p + t };
    }
    return { id: 1 << p | o << f | l, overflow: t };
  }
  var Tr = Math.clz32 ? Math.clz32 : Xn, Gn = Math.log, qn = Math.LN2;
  function Xn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Gn(t) / qn | 0) | 0;
  }
  function Yn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Zn = typeof Object.is == "function" ? Object.is : Yn, dt = null, Hr = null, kr = null, j = null, dr = !1, _r = !1, hr = 0, bt = null, Cr = 0;
  function Xt() {
    if (dt === null) throw Error(u(321));
    return dt;
  }
  function sn() {
    if (0 < Cr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $r() {
    return j === null ? kr === null ? (dr = !1, kr = j = sn()) : (dr = !0, j = kr) : j.next === null ? (dr = !1, j = j.next = sn()) : (dr = !0, j = j.next), j;
  }
  function Wr() {
    Hr = dt = null, _r = !1, kr = null, Cr = 0, j = bt = null;
  }
  function un(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function cn(t, r, o) {
    if (dt = Xt(), j = $r(), dr) {
      var l = j.queue;
      if (r = l.dispatch, bt !== null && (o = bt.get(l), o !== void 0)) {
        bt.delete(l), l = j.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return j.memoizedState = l, [l, r];
      }
      return [j.memoizedState, r];
    }
    return t = t === un ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, j.memoizedState = t, t = j.queue = { last: null, dispatch: null }, t = t.dispatch = Jn.bind(null, dt, t), [j.memoizedState, t];
  }
  function pn(t, r) {
    if (dt = Xt(), j = $r(), r = r === void 0 ? null : r, j !== null) {
      var o = j.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!Zn(r[f], l[f])) {
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
  function Jn(t, r, o) {
    if (25 <= Cr) throw Error(u(301));
    if (t === dt) if (_r = !0, t = { action: o, next: null }, bt === null && (bt = /* @__PURE__ */ new Map()), o = bt.get(r), o === void 0) bt.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function Kn() {
    throw Error(u(394));
  }
  function Rr() {
  }
  var fn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Xt(), t._currentValue;
  }, useMemo: pn, useReducer: cn, useRef: function(t) {
    dt = Xt(), j = $r();
    var r = j.memoizedState;
    return r === null ? (t = { current: t }, j.memoizedState = t) : r;
  }, useState: function(t) {
    return cn(un, t);
  }, useInsertionEffect: Rr, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return pn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Rr, useEffect: Rr, useDebugValue: Rr, useDeferredValue: function(t) {
    return Xt(), t;
  }, useTransition: function() {
    return Xt(), [!1, Kn];
  }, useId: function() {
    var t = Hr.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Tr(t) - 1)).toString(32) + r;
    var o = Ar;
    if (o === null) throw Error(u(404));
    return r = hr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Xt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, Ar = null, jr = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Qn(t) {
    return console.error(t), null;
  }
  function mr() {
  }
  function eo(t, r, o, l, f, p, m, E, O) {
    var N = [], P = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: P, pingedTasks: N, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Qn : f, onAllReady: p === void 0 ? mr : p, onShellReady: m === void 0 ? mr : m, onShellError: E === void 0 ? mr : E, onFatalError: O === void 0 ? mr : O }, o = br(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Vr(r, t, null, o, P, F, null, wr), N.push(t), r;
  }
  function Vr(t, r, o, l, f, p, m, E) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var O = { node: r, ping: function() {
      var N = t.pingedTasks;
      N.push(O), N.length === 1 && Sn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: m, treeContext: E };
    return f.add(O), O;
  }
  function br(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function vr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Fr(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, ee(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function dn(t, r, o, l, f) {
    for (dt = {}, Hr = r, hr = 0, t = o(l, f); _r; ) _r = !1, hr = 0, Cr += 1, j = null, t = o(l, f);
    return Wr(), t;
  }
  function hn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var E in o) if (!(E in p)) throw Error(u(108, T(l) || "Unknown", E));
        l = $e({}, m, o);
      }
      r.legacyContext = l, Fe(t, r, f), r.legacyContext = m;
    } else Fe(t, r, f);
  }
  function mn(t, r) {
    if (t && t.defaultProps) {
      r = $e({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function Gr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = I(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), qt(p, o, l, f), hn(t, r, p, o);
    } else {
      p = I(o, r.legacyContext), f = dn(t, r, o, l, p);
      var m = hr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) qt(f, o, l, p), hn(t, r, f, o);
      else if (m) {
        l = r.treeContext, r.treeContext = At(l, 1, 0);
        try {
          Fe(t, r, f);
        } finally {
          r.treeContext = l;
        }
      } else Fe(t, r, f);
    }
    else if (typeof o == "string") {
      switch (f = r.blockedSegment, p = Et(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, m = f.formatContext, f.formatContext = et(m, o, l), qr(t, r, p), f.formatContext = m, o) {
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
          f.chunks.push(Ze, w(o), Ue);
      }
      f.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case sr:
        case ur:
        case Vt:
          Fe(t, r, l.children);
          return;
        case pr:
          Fe(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case Er:
          e: {
            o = r.blockedBoundary, f = r.blockedSegment, p = l.fallback, l = l.children, m = /* @__PURE__ */ new Set();
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, O = br(t, f.chunks.length, E, f.formatContext, !1, !1);
            f.children.push(O), f.lastPushedText = !1;
            var N = br(t, 0, null, f.formatContext, !1, !1);
            N.parentFlushed = !0, r.blockedBoundary = E, r.blockedSegment = N;
            try {
              if (qr(
                t,
                r,
                l
              ), N.lastPushedText && N.textEmbedded && N.chunks.push(tt), N.status = 1, Or(E, N), E.pendingTasks === 0) break e;
            } catch (P) {
              N.status = 4, E.forceClientRender = !0, E.errorDigest = vr(t, P);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Vr(t, p, o, O, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case xr:
          if (l = dn(t, r, o.render, l, f), hr !== 0) {
            o = r.treeContext, r.treeContext = At(o, 1, 0);
            try {
              Fe(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Fe(t, r, l);
          return;
        case e:
          o = o.type, l = mn(o, l), Gr(t, r, o, l, f);
          return;
        case cr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, m = L, L = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Fe(t, r, f), t = L, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = L = t.parent, r.context = t;
          return;
        case nr:
          l = l.children, l = l(o._currentValue), Fe(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = mn(o, l), Gr(t, r, o, l, void 0);
          return;
      }
      throw Error(u(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function Fe(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case ar:
          Gr(t, r, o.type, o.props, o.ref);
          return;
        case jt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Fe(t, r, o);
          return;
      }
      if (Mt(o)) {
        vn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var f = [];
          do
            f.push(o.value), o = l.next();
          while (!o.done);
          vn(t, r, f);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function vn(t, r, o) {
    for (var l = o.length, f = 0; f < l; f++) {
      var p = r.treeContext;
      r.treeContext = At(p, l, f);
      try {
        qr(t, r, o[f]);
      } finally {
        r.treeContext = p;
      }
    }
  }
  function qr(t, r, o) {
    var l = r.blockedSegment.formatContext, f = r.legacyContext, p = r.context;
    try {
      return Fe(t, r, o);
    } catch (O) {
      if (Wr(), typeof O == "object" && O !== null && typeof O.then == "function") {
        o = O;
        var m = r.blockedSegment, E = br(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(E), m.lastPushedText = !1, t = Vr(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p), O;
    }
  }
  function to(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, gn(this, r, t);
  }
  function yn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return yn(f, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Or(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Or(t, o);
    } else t.completedSegments.push(r);
  }
  function gn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = mr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Or(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(to, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Or(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function Sn(t) {
    if (t.status !== 2) {
      var r = L, o = jr.current;
      jr.current = fn;
      var l = Ar;
      Ar = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var m = f[p], E = t, O = m.blockedSegment;
          if (O.status === 0) {
            ft(m.context);
            try {
              Fe(E, m, m.node), O.lastPushedText && O.textEmbedded && O.chunks.push(tt), m.abortSet.delete(m), O.status = 1, gn(E, m.blockedBoundary, O);
            } catch (Ge) {
              if (Wr(), typeof Ge == "object" && Ge !== null && typeof Ge.then == "function") {
                var N = m.ping;
                Ge.then(N, N);
              } else {
                m.abortSet.delete(m), O.status = 4;
                var P = m.blockedBoundary, G = Ge, Oe = vr(E, G);
                if (P === null ? Fr(E, G) : (P.pendingTasks--, P.forceClientRender || (P.forceClientRender = !0, P.errorDigest = Oe, P.parentFlushed && E.clientRenderedBoundaries.push(P))), E.allPendingTasks--, E.allPendingTasks === 0) {
                  var Ve = E.onAllReady;
                  Ve();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, p), t.destination !== null && Xr(t, t.destination);
      } catch (Ge) {
        vr(t, Ge), Fr(t, Ge);
      } finally {
        Ar = l, jr.current = o, o === fn && ft(r);
      }
    }
  }
  function Mr(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, ke), y(r, t.placeholderPrefix), t = w(l.toString(16)), y(r, t), C(r, Nt);
      case 1:
        o.status = 2;
        var f = !0;
        l = o.chunks;
        var p = 0;
        o = o.children;
        for (var m = 0; m < o.length; m++) {
          for (f = o[m]; p < f.index; p++) y(r, l[p]);
          f = Ir(t, r, f);
        }
        for (; p < l.length - 1; p++) y(r, l[p]);
        return p < l.length && (f = C(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function Ir(t, r, o) {
    var l = o.boundary;
    if (l === null) return Mr(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, C(r, ot), y(r, Tt), l && (y(r, Je), y(r, w($(l))), y(r, _e)), C(r, zt), Mr(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = x(f.boundaryPrefix + p.toString(16)), l = l.id = f, pe(r, t.responseState, l), Mr(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), pe(r, t.responseState, l.id), Mr(t, r, o);
    else {
      if (C(r, Bt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Ir(t, r, o[0]);
    }
    return C(r, wt);
  }
  function xn(t, r, o) {
    return Re(r, t.responseState, o.formatContext, o.id), Ir(t, r, o), Ke(r, o.formatContext);
  }
  function En(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) wn(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, R)), l === null) throw Error(u(395));
    return o = w(o.toString(16)), y(r, l), y(r, S), y(r, t.segmentPrefix), y(r, o), C(r, k);
  }
  function wn(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return xn(t, r, l);
    }
    return xn(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, Rt) : (t.sentCompleteSegmentFunction = !0, y(r, rr)), y(r, t.segmentPrefix), f = w(f.toString(16)), y(r, f), y(r, ct), y(r, t.placeholderPrefix), y(r, f), C(r, pt);
  }
  function Xr(t, r) {
    g = new Uint8Array(512), _ = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Ir(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && C(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var m = f[p];
        l = r;
        var E = t.responseState, O = m.id, N = m.errorDigest, P = m.errorMessage, G = m.errorComponentStack;
        if (y(l, E.startInlineScript), E.sentClientRenderFunction ? y(l, H) : (E.sentClientRenderFunction = !0, y(
          l,
          B
        )), O === null) throw Error(u(395));
        y(l, O), y(l, te), (N || P || G) && (y(l, Ae), y(l, w(Pe(N || "")))), (P || G) && (y(l, Ae), y(l, w(Pe(P || "")))), G && (y(l, Ae), y(l, w(Pe(G)))), C(l, Q);
      }
      f.splice(0, p);
      var Oe = t.completedBoundaries;
      for (p = 0; p < Oe.length; p++) En(t, r, Oe[p]);
      Oe.splice(0, p), b(r), g = new Uint8Array(512), _ = 0;
      var Ve = t.partialBoundaries;
      for (p = 0; p < Ve.length; p++) {
        var Ge = Ve[p];
        e: {
          f = t, m = r;
          var Lr = Ge.completedSegments;
          for (E = 0; E < Lr.length; E++) if (!wn(
            f,
            m,
            Ge,
            Lr[E]
          )) {
            E++, Lr.splice(0, E);
            var kn = !1;
            break e;
          }
          Lr.splice(0, E), kn = !0;
        }
        if (!kn) {
          t.destination = null, p++, Ve.splice(0, p);
          return;
        }
      }
      Ve.splice(0, p);
      var Yr = t.completedBoundaries;
      for (p = 0; p < Yr.length; p++) En(t, r, Yr[p]);
      Yr.splice(0, p);
    } finally {
      b(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function Tn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return yn(l, t, r);
      }), o.clear(), t.destination !== null && Xr(t, t.destination);
    } catch (l) {
      vr(t, l), Fr(t, l);
    }
  }
  return Nr.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, m = new Promise(function(P, G) {
        p = P, f = G;
      }), E = eo(t, Lt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Pt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var P = new ReadableStream({ type: "bytes", pull: function(G) {
          if (E.status === 1) E.status = 2, ee(G, E.fatalError);
          else if (E.status !== 2 && E.destination === null) {
            E.destination = G;
            try {
              Xr(E, G);
            } catch (Oe) {
              vr(E, Oe), Fr(E, Oe);
            }
          }
        }, cancel: function() {
          Tn(E);
        } }, { highWaterMark: 0 });
        P.allReady = m, o(P);
      }, function(P) {
        m.catch(function() {
        }), l(P);
      }, f);
      if (r && r.signal) {
        var O = r.signal, N = function() {
          Tn(E, O.reason), O.removeEventListener("abort", N);
        };
        O.addEventListener("abort", N);
      }
      Sn(E);
    });
  }, Nr.version = "18.3.1", Nr;
}
var or, jn;
or = Uo(), jn = Ho();
or.version;
or.renderToString;
or.renderToStaticMarkup;
or.renderToNodeStream;
or.renderToStaticNodeStream;
jn.renderToReadableStream;
const $o = "staticMarkup";
function Wo() {
  const u = ro().indexOf($o) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const jo = ({ gaData: v, prefix: u = "", children: g }) => {
  const { isReact: _ } = Wo(), { onClick: y, ...C } = g.props;
  if (_)
    return Sr.cloneElement(g, {
      ...C,
      onClick: (w) => (zo(v), y ? y(w) : !0)
    });
  let b = "";
  ["input", "header", "header-input"].includes(u) && (b = `-${u}`);
  const M = {
    [`data-ga${b}`]: v.text,
    [`data-ga${b}-name`]: v.name,
    [`data-ga${b}-event`]: v.event,
    [`data-ga${b}-action`]: v.action,
    [`data-ga${b}-type`]: v.type,
    [`data-ga${b}-region`]: v.region,
    [`data-ga${b}-section`]: v.section,
    [`data-ga${b}-component`]: v.component
  };
  return Sr.cloneElement(g, {
    ...C,
    onClick: y,
    ...M
  });
}, Vo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Vn = ({
  label: v,
  cardTitle: u,
  gaData: g,
  ariaLabel: _,
  color: y,
  disabled: C,
  element: b = "button",
  innerRef: M,
  href: w,
  onClick: x,
  ...ee
}) => {
  const z = io("btn", "btn-tag", {
    "btn-tag-alt-white": y === "white",
    "btn-tag-alt-gray": y === "gray",
    "btn-tag-alt-dark": y === "dark",
    disabled: C
  });
  let ce = b;
  return w && b === "button" && (ce = "a"), /* @__PURE__ */ Cn.jsx(
    jo,
    {
      gaData: {
        ...Vo,
        section: u,
        // @deprecated - remove at some point
        ...g,
        text: v
      },
      children: /* @__PURE__ */ Cn.jsx(
        ce,
        {
          type: ce === "button" && x ? "button" : void 0,
          ...ee,
          className: z,
          href: w,
          ref: M,
          onClick: x,
          "aria-label": _,
          children: v
        }
      )
    }
  );
};
Vn.propTypes = {
  /**
    Button tag label
  */
  label: A.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: A.string,
  /**
   * Google Analytics event data
   */
  gaData: uo,
  /**
    ARIA label for accessibility
  */
  ariaLabel: A.string,
  /**
    Button background color
  */
  color: A.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: A.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: A.oneOfType([
    A.func,
    A.string,
    A.shape({ $$typeof: A.symbol, render: A.func }),
    A.arrayOf(
      A.oneOfType([
        A.func,
        A.string,
        A.shape({ $$typeof: A.symbol, render: A.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: A.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: A.oneOfType([
    A.object,
    A.func,
    A.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: A.func
};
Vn.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  innerRef: void 0,
  onClick: void 0
};
export {
  Vn as ButtonTag
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
