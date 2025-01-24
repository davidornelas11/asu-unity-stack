import Sr, { useId as eo } from "react";
function to(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Bn = { exports: {} }, yr = {};
var Cn;
function ro() {
  if (Cn) return yr;
  Cn = 1;
  var v = Sr, u = Symbol.for("react.element"), x = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(I, k, S) {
    var ne, H = {}, Oe = null, Me = null;
    S !== void 0 && (Oe = "" + S), k.key !== void 0 && (Oe = "" + k.key), k.ref !== void 0 && (Me = k.ref);
    for (ne in k) _.call(k, ne) && !R.hasOwnProperty(ne) && (H[ne] = k[ne]);
    if (I && I.defaultProps) for (ne in k = I.defaultProps, k) H[ne] === void 0 && (H[ne] = k[ne]);
    return { $$typeof: u, type: I, key: Oe, ref: Me, props: H, _owner: y.current };
  }
  return yr.Fragment = x, yr.jsx = N, yr.jsxs = N, yr;
}
Bn.exports = ro();
var Zr = Bn.exports, zn = { exports: {} }, Jr, Rn;
function no() {
  if (Rn) return Jr;
  Rn = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jr = v, Jr;
}
var Kr, An;
function oo() {
  if (An) return Kr;
  An = 1;
  var v = no();
  function u() {
  }
  function x() {
  }
  return x.resetWarningCache = u, Kr = function() {
    function _(N, I, k, S, ne, H) {
      if (H !== v) {
        var Oe = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Oe.name = "Invariant Violation", Oe;
      }
    }
    _.isRequired = _;
    function y() {
      return _;
    }
    var R = {
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
      checkPropTypes: x,
      resetWarningCache: u
    };
    return R.PropTypes = R, R;
  }, Kr;
}
zn.exports = oo()();
var io = zn.exports;
const O = /* @__PURE__ */ to(io);
O.shape({
  url: O.string,
  altText: O.string,
  cssClass: O.arrayOf(O.string),
  size: O.oneOf(["small", "medium", "large"])
});
O.shape({
  text: O.string,
  maxWidth: O.string,
  cssClass: O.arrayOf(O.string),
  highlightColor: O.oneOf(["gold", "black"])
});
O.shape({
  color: O.oneOf(["gold", "maroon", "gray", "dark"]),
  content: O.shape({
    icon: O.string,
    header: O.string,
    body: O.string
  })
});
const lo = O.shape({
  text: O.string,
  name: O.string,
  event: O.string,
  action: O.string,
  type: O.string,
  region: O.string,
  section: O.string,
  component: O.string
});
function bt(v) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, bt(v);
}
function ln(v, u) {
  return ln = Object.setPrototypeOf || function(_, y) {
    return _.__proto__ = y, _;
  }, ln(v, u);
}
function ao() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Br(v, u, x) {
  return ao() ? Br = Reflect.construct : Br = function(y, R, N) {
    var I = [null];
    I.push.apply(I, R);
    var k = Function.bind.apply(y, I), S = new k();
    return N && ln(S, N.prototype), S;
  }, Br.apply(null, arguments);
}
function Xe(v) {
  return so(v) || uo(v) || co(v) || po();
}
function so(v) {
  if (Array.isArray(v)) return an(v);
}
function uo(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function co(v, u) {
  if (v) {
    if (typeof v == "string") return an(v, u);
    var x = Object.prototype.toString.call(v).slice(8, -1);
    if (x === "Object" && v.constructor && (x = v.constructor.name), x === "Map" || x === "Set") return Array.from(v);
    if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)) return an(v, u);
  }
}
function an(v, u) {
  (u == null || u > v.length) && (u = v.length);
  for (var x = 0, _ = new Array(u); x < u; x++) _[x] = v[x];
  return _;
}
function po() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fo = Object.hasOwnProperty, Fn = Object.setPrototypeOf, ho = Object.isFrozen, mo = Object.getPrototypeOf, vo = Object.getOwnPropertyDescriptor, he = Object.freeze, De = Object.seal, yo = Object.create, Un = typeof Reflect < "u" && Reflect, Ur = Un.apply, sn = Un.construct;
Ur || (Ur = function(u, x, _) {
  return u.apply(x, _);
});
he || (he = function(u) {
  return u;
});
De || (De = function(u) {
  return u;
});
sn || (sn = function(u, x) {
  return Br(u, Xe(x));
});
var go = Ne(Array.prototype.forEach), bn = Ne(Array.prototype.pop), gr = Ne(Array.prototype.push), zr = Ne(String.prototype.toLowerCase), Qr = Ne(String.prototype.toString), On = Ne(String.prototype.match), qe = Ne(String.prototype.replace), So = Ne(String.prototype.indexOf), xo = Ne(String.prototype.trim), ue = Ne(RegExp.prototype.test), en = Eo(TypeError);
function Ne(v) {
  return function(u) {
    for (var x = arguments.length, _ = new Array(x > 1 ? x - 1 : 0), y = 1; y < x; y++)
      _[y - 1] = arguments[y];
    return Ur(v, u, _);
  };
}
function Eo(v) {
  return function() {
    for (var u = arguments.length, x = new Array(u), _ = 0; _ < u; _++)
      x[_] = arguments[_];
    return sn(v, x);
  };
}
function P(v, u, x) {
  var _;
  x = (_ = x) !== null && _ !== void 0 ? _ : zr, Fn && Fn(v, null);
  for (var y = u.length; y--; ) {
    var R = u[y];
    if (typeof R == "string") {
      var N = x(R);
      N !== R && (ho(u) || (u[y] = N), R = N);
    }
    v[R] = !0;
  }
  return v;
}
function Yt(v) {
  var u = yo(null), x;
  for (x in v)
    Ur(fo, v, [x]) === !0 && (u[x] = v[x]);
  return u;
}
function Pr(v, u) {
  for (; v !== null; ) {
    var x = vo(v, u);
    if (x) {
      if (x.get)
        return Ne(x.get);
      if (typeof x.value == "function")
        return Ne(x.value);
    }
    v = mo(v);
  }
  function _(y) {
    return console.warn("fallback value for", y), null;
  }
  return _;
}
var Mn = he(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), tn = he(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rn = he(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wo = he(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), nn = he(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), ko = he(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), In = he(["#text"]), Ln = he(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), on = he(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Pn = he(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = he(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), To = De(/\{\{[\w\W]*|[\w\W]*\}\}/gm), _o = De(/<%[\w\W]*|[\w\W]*%>/gm), Co = De(/\${[\w\W]*}/gm), Ro = De(/^data-[\-\w.\u00B7-\uFFFF]/), Ao = De(/^aria-[\-\w]+$/), Fo = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), bo = De(/^(?:\w+script|data):/i), Oo = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Mo = De(/^html$/i), Io = De(/^[a-z][.\w]*(-[.\w]+)+$/i), Lo = function() {
  return typeof window > "u" ? null : window;
}, Po = function(u, x) {
  if (bt(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var _ = null, y = "data-tt-policy-suffix";
  x.currentScript && x.currentScript.hasAttribute(y) && (_ = x.currentScript.getAttribute(y));
  var R = "dompurify" + (_ ? "#" + _ : "");
  try {
    return u.createPolicy(R, {
      createHTML: function(I) {
        return I;
      },
      createScriptURL: function(I) {
        return I;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + R + " could not be created."), null;
  }
};
function Hn() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lo(), u = function(s) {
    return Hn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !v || !v.document || v.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var x = v.document, _ = v.document, y = v.DocumentFragment, R = v.HTMLTemplateElement, N = v.Node, I = v.Element, k = v.NodeFilter, S = v.NamedNodeMap, ne = S === void 0 ? v.NamedNodeMap || v.MozNamedAttrMap : S, H = v.HTMLFormElement, Oe = v.DOMParser, Me = v.trustedTypes, Z = I.prototype, Jt = Pr(Z, "cloneNode"), oe = Pr(Z, "nextSibling"), J = Pr(Z, "childNodes"), ae = Pr(Z, "parentNode");
  if (typeof R == "function") {
    var Qe = _.createElement("template");
    Qe.content && Qe.content.ownerDocument && (_ = Qe.content.ownerDocument);
  }
  var ie = Po(Me, x), ht = ie ? ie.createHTML("") : "", te = _, $ = te.implementation, ir = te.createNodeIterator, Ot = te.createDocumentFragment, Mt = te.getElementsByTagName, Kt = x.importNode, fe = {};
  try {
    fe = Yt(_).documentMode ? _.documentMode : {};
  } catch {
  }
  var me = {};
  u.isSupported = typeof ae == "function" && $ && $.createHTMLDocument !== void 0 && fe !== 9;
  var mt = To, vt = _o, It = Co, lr = Ro, Lt = Ao, ve = bo, Pt = Oo, et = Io, tt = Fo, q = null, yt = P({}, [].concat(Xe(Mn), Xe(tn), Xe(rn), Xe(nn), Xe(In))), K = null, gt = P({}, [].concat(Xe(Ln), Xe(on), Xe(Pn), Xe(Dr))), W = Object.seal(Object.create(null, {
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
  })), Be = null, de = null, Ie = !0, ye = !0, St = !1, re = !0, se = !1, xt = !0, ge = !1, Dt = !1, Ye = !1, Se = !1, ze = !1, rt = !1, we = !0, le = !1, Qt = "user-content-", Et = !0, Ze = !1, Ue = {}, ke = null, Nt = P({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Bt = null, er = P({}, ["audio", "video", "img", "source", "image", "track"]), nt = null, ot = P({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", kt = "http://www.w3.org/2000/svg", Te = "http://www.w3.org/1999/xhtml", Je = Te, zt = !1, ce = null, Ut = P({}, [wt, kt, Te], Qr), xe, z = ["application/xhtml+xml", "text/html"], it = "text/html", V, Ee = null, Le = _.createElement("form"), lt = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, _e = function(s) {
    Ee && Ee === s || ((!s || bt(s) !== "object") && (s = {}), s = Yt(s), xe = // eslint-disable-next-line unicorn/prefer-includes
    z.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? xe = it : xe = s.PARSER_MEDIA_TYPE, V = xe === "application/xhtml+xml" ? Qr : zr, q = "ALLOWED_TAGS" in s ? P({}, s.ALLOWED_TAGS, V) : yt, K = "ALLOWED_ATTR" in s ? P({}, s.ALLOWED_ATTR, V) : gt, ce = "ALLOWED_NAMESPACES" in s ? P({}, s.ALLOWED_NAMESPACES, Qr) : Ut, nt = "ADD_URI_SAFE_ATTR" in s ? P(
      Yt(ot),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : ot, Bt = "ADD_DATA_URI_TAGS" in s ? P(
      Yt(er),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : er, ke = "FORBID_CONTENTS" in s ? P({}, s.FORBID_CONTENTS, V) : Nt, Be = "FORBID_TAGS" in s ? P({}, s.FORBID_TAGS, V) : {}, de = "FORBID_ATTR" in s ? P({}, s.FORBID_ATTR, V) : {}, Ue = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ie = s.ALLOW_ARIA_ATTR !== !1, ye = s.ALLOW_DATA_ATTR !== !1, St = s.ALLOW_UNKNOWN_PROTOCOLS || !1, re = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = s.SAFE_FOR_TEMPLATES || !1, xt = s.SAFE_FOR_XML !== !1, ge = s.WHOLE_DOCUMENT || !1, Se = s.RETURN_DOM || !1, ze = s.RETURN_DOM_FRAGMENT || !1, rt = s.RETURN_TRUSTED_TYPE || !1, Ye = s.FORCE_BODY || !1, we = s.SANITIZE_DOM !== !1, le = s.SANITIZE_NAMED_PROPS || !1, Et = s.KEEP_CONTENT !== !1, Ze = s.IN_PLACE || !1, tt = s.ALLOWED_URI_REGEXP || tt, Je = s.NAMESPACE || Te, W = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (W.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (W.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (ye = !1), ze && (Se = !0), Ue && (q = P({}, Xe(In)), K = [], Ue.html === !0 && (P(q, Mn), P(K, Ln)), Ue.svg === !0 && (P(q, tn), P(K, on), P(K, Dr)), Ue.svgFilters === !0 && (P(q, rn), P(K, on), P(K, Dr)), Ue.mathMl === !0 && (P(q, nn), P(K, Pn), P(K, Dr))), s.ADD_TAGS && (q === yt && (q = Yt(q)), P(q, s.ADD_TAGS, V)), s.ADD_ATTR && (K === gt && (K = Yt(K)), P(K, s.ADD_ATTR, V)), s.ADD_URI_SAFE_ATTR && P(nt, s.ADD_URI_SAFE_ATTR, V), s.FORBID_CONTENTS && (ke === Nt && (ke = Yt(ke)), P(ke, s.FORBID_CONTENTS, V)), Et && (q["#text"] = !0), ge && P(q, ["html", "head", "body"]), q.table && (P(q, ["tbody"]), delete Be.tbody), he && he(s), Ee = s);
  }, Ht = P({}, ["mi", "mo", "mn", "ms", "mtext"]), Tt = P({}, ["annotation-xml"]), $t = P({}, ["title", "style", "font", "a", "script"]), at = P({}, tn);
  P(at, rn), P(at, wo);
  var _t = P({}, nn);
  P(_t, ko);
  var tr = function(s) {
    var g = ae(s);
    (!g || !g.tagName) && (g = {
      namespaceURI: Je,
      tagName: "template"
    });
    var T = zr(s.tagName), B = zr(g.tagName);
    return ce[s.namespaceURI] ? s.namespaceURI === kt ? g.namespaceURI === Te ? T === "svg" : g.namespaceURI === wt ? T === "svg" && (B === "annotation-xml" || Ht[B]) : !!at[T] : s.namespaceURI === wt ? g.namespaceURI === Te ? T === "math" : g.namespaceURI === kt ? T === "math" && Tt[B] : !!_t[T] : s.namespaceURI === Te ? g.namespaceURI === kt && !Tt[B] || g.namespaceURI === wt && !Ht[B] ? !1 : !_t[T] && ($t[T] || !at[T]) : !!(xe === "application/xhtml+xml" && ce[s.namespaceURI]) : !1;
  }, pe = function(s) {
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
  }, Ct = function(s, g) {
    try {
      gr(u.removed, {
        attribute: g.getAttributeNode(s),
        from: g
      });
    } catch {
      gr(u.removed, {
        attribute: null,
        from: g
      });
    }
    if (g.removeAttribute(s), s === "is" && !K[s])
      if (Se || ze)
        try {
          pe(g);
        } catch {
        }
      else
        try {
          g.setAttribute(s, "");
        } catch {
        }
  }, st = function(s) {
    var g, T;
    if (Ye)
      s = "<remove></remove>" + s;
    else {
      var B = On(s, /^[\r\n\t ]+/);
      T = B && B[0];
    }
    xe === "application/xhtml+xml" && Je === Te && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var U = ie ? ie.createHTML(s) : s;
    if (Je === Te)
      try {
        g = new Oe().parseFromString(U, xe);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = $.createDocument(Je, "template", null);
      try {
        g.documentElement.innerHTML = zt ? ht : U;
      } catch {
      }
    }
    var ee = g.body || g.documentElement;
    return s && T && ee.insertBefore(_.createTextNode(T), ee.childNodes[0] || null), Je === Te ? Mt.call(g, ge ? "html" : "body")[0] : ge ? g.documentElement : ee;
  }, Wt = function(s) {
    return ir.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      k.SHOW_ELEMENT | k.SHOW_COMMENT | k.SHOW_TEXT | k.SHOW_PROCESSING_INSTRUCTION | k.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ut = function(s) {
    return s instanceof H && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof ne) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, He = function(s) {
    return bt(N) === "object" ? s instanceof N : s && bt(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Ce = function(s, g, T) {
    me[s] && go(me[s], function(B) {
      B.call(u, g, T, Ee);
    });
  }, Ke = function(s) {
    var g;
    if (Ce("beforeSanitizeElements", s, null), ut(s) || ue(/[\u0080-\uFFFF]/, s.nodeName))
      return pe(s), !0;
    var T = V(s.nodeName);
    if (Ce("uponSanitizeElement", s, {
      tagName: T,
      allowedTags: q
    }), s.hasChildNodes() && !He(s.firstElementChild) && (!He(s.content) || !He(s.content.firstElementChild)) && ue(/<[/\w]/g, s.innerHTML) && ue(/<[/\w]/g, s.textContent) || T === "select" && ue(/<template/i, s.innerHTML) || s.nodeType === 7 || xt && s.nodeType === 8 && ue(/<[/\w]/g, s.data))
      return pe(s), !0;
    if (!q[T] || Be[T]) {
      if (!Be[T] && Rt(T) && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, T) || W.tagNameCheck instanceof Function && W.tagNameCheck(T)))
        return !1;
      if (Et && !ke[T]) {
        var B = ae(s) || s.parentNode, U = J(s) || s.childNodes;
        if (U && B)
          for (var ee = U.length, Q = ee - 1; Q >= 0; --Q) {
            var Re = Jt(U[Q], !0);
            Re.__removalCount = (s.__removalCount || 0) + 1, B.insertBefore(Re, oe(s));
          }
      }
      return pe(s), !0;
    }
    return s instanceof I && !tr(s) || (T === "noscript" || T === "noembed" || T === "noframes") && ue(/<\/no(script|embed|frames)/i, s.innerHTML) ? (pe(s), !0) : (se && s.nodeType === 3 && (g = s.textContent, g = qe(g, mt, " "), g = qe(g, vt, " "), g = qe(g, It, " "), s.textContent !== g && (gr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = g)), Ce("afterSanitizeElements", s, null), !1);
  }, rr = function(s, g, T) {
    if (we && (g === "id" || g === "name") && (T in _ || T in Le))
      return !1;
    if (!(ye && !de[g] && ue(lr, g))) {
      if (!(Ie && ue(Lt, g))) {
        if (!K[g] || de[g]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Rt(s) && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, s) || W.tagNameCheck instanceof Function && W.tagNameCheck(s)) && (W.attributeNameCheck instanceof RegExp && ue(W.attributeNameCheck, g) || W.attributeNameCheck instanceof Function && W.attributeNameCheck(g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            g === "is" && W.allowCustomizedBuiltInElements && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, T) || W.tagNameCheck instanceof Function && W.tagNameCheck(T)))
          ) return !1;
        } else if (!nt[g]) {
          if (!ue(tt, qe(T, Pt, ""))) {
            if (!((g === "src" || g === "xlink:href" || g === "href") && s !== "script" && So(T, "data:") === 0 && Bt[s])) {
              if (!(St && !ue(ve, qe(T, Pt, "")))) {
                if (T)
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
    var g, T, B, U;
    Ce("beforeSanitizeAttributes", s, null);
    var ee = s.attributes;
    if (ee) {
      var Q = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: K
      };
      for (U = ee.length; U--; ) {
        g = ee[U];
        var Re = g, X = Re.name, Pe = Re.namespaceURI;
        if (T = X === "value" ? g.value : xo(g.value), B = V(X), Q.attrName = B, Q.attrValue = T, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ce("uponSanitizeAttribute", s, Q), T = Q.attrValue, !Q.forceKeepAttr && (Ct(X, s), !!Q.keepAttr)) {
          if (!re && ue(/\/>/i, T)) {
            Ct(X, s);
            continue;
          }
          se && (T = qe(T, mt, " "), T = qe(T, vt, " "), T = qe(T, It, " "));
          var $e = V(s.nodeName);
          if (rr($e, B, T)) {
            if (le && (B === "id" || B === "name") && (Ct(X, s), T = Qt + T), xt && ue(/((--!?|])>)|<\/(style|title)/i, T)) {
              Ct(X, s);
              continue;
            }
            if (ie && bt(Me) === "object" && typeof Me.getAttributeType == "function" && !Pe)
              switch (Me.getAttributeType($e, B)) {
                case "TrustedHTML": {
                  T = ie.createHTML(T);
                  break;
                }
                case "TrustedScriptURL": {
                  T = ie.createScriptURL(T);
                  break;
                }
              }
            try {
              Pe ? s.setAttributeNS(Pe, X, T) : s.setAttribute(X, T), ut(s) ? pe(s) : bn(u.removed);
            } catch {
            }
          }
        }
      }
      Ce("afterSanitizeAttributes", s, null);
    }
  }, pt = function C(s) {
    var g, T = Wt(s);
    for (Ce("beforeSanitizeShadowDOM", s, null); g = T.nextNode(); )
      Ce("uponSanitizeShadowNode", g, null), !Ke(g) && (g.content instanceof y && C(g.content), ct(g));
    Ce("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(C) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g, T, B, U, ee;
    if (zt = !C, zt && (C = "<!-->"), typeof C != "string" && !He(C))
      if (typeof C.toString == "function") {
        if (C = C.toString(), typeof C != "string")
          throw en("dirty is not a string, aborting");
      } else
        throw en("toString is not a function");
    if (!u.isSupported) {
      if (bt(v.toStaticHTML) === "object" || typeof v.toStaticHTML == "function") {
        if (typeof C == "string")
          return v.toStaticHTML(C);
        if (He(C))
          return v.toStaticHTML(C.outerHTML);
      }
      return C;
    }
    if (Dt || _e(s), u.removed = [], typeof C == "string" && (Ze = !1), Ze) {
      if (C.nodeName) {
        var Q = V(C.nodeName);
        if (!q[Q] || Be[Q])
          throw en("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (C instanceof N)
      g = st("<!---->"), T = g.ownerDocument.importNode(C, !0), T.nodeType === 1 && T.nodeName === "BODY" || T.nodeName === "HTML" ? g = T : g.appendChild(T);
    else {
      if (!Se && !se && !ge && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return ie && rt ? ie.createHTML(C) : C;
      if (g = st(C), !g)
        return Se ? null : rt ? ht : "";
    }
    g && Ye && pe(g.firstChild);
    for (var Re = Wt(Ze ? C : g); B = Re.nextNode(); )
      B.nodeType === 3 && B === U || Ke(B) || (B.content instanceof y && pt(B.content), ct(B), U = B);
    if (U = null, Ze)
      return C;
    if (Se) {
      if (ze)
        for (ee = Ot.call(g.ownerDocument); g.firstChild; )
          ee.appendChild(g.firstChild);
      else
        ee = g;
      return (K.shadowroot || K.shadowrootmod) && (ee = Kt.call(x, ee, !0)), ee;
    }
    var X = ge ? g.outerHTML : g.innerHTML;
    return ge && q["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && ue(Mo, g.ownerDocument.doctype.name) && (X = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + X), se && (X = qe(X, mt, " "), X = qe(X, vt, " "), X = qe(X, It, " ")), ie && rt ? ie.createHTML(X) : X;
  }, u.setConfig = function(C) {
    _e(C), Dt = !0;
  }, u.clearConfig = function() {
    Ee = null, Dt = !1;
  }, u.isValidAttribute = function(C, s, g) {
    Ee || _e({});
    var T = V(C), B = V(s);
    return rr(T, B, g);
  }, u.addHook = function(C, s) {
    typeof s == "function" && (me[C] = me[C] || [], gr(me[C], s));
  }, u.removeHook = function(C) {
    if (me[C])
      return bn(me[C]);
  }, u.removeHooks = function(C) {
    me[C] && (me[C] = []);
  }, u.removeAllHooks = function() {
    me = {};
  }, u;
}
Hn();
O.shape({
  event: O.string,
  action: O.string,
  name: O.string,
  region: O.string,
  section: O.string,
  component: O.string,
  type: O.string,
  text: O.string
});
const Do = ({
  event: v = "",
  action: u = "",
  name: x = "",
  type: _ = "",
  section: y = "",
  text: R = "",
  region: N = "",
  component: I = ""
}) => {
  const { dataLayer: k } = window, S = {
    event: v.toLowerCase(),
    action: u.toLowerCase(),
    name: x.toLowerCase(),
    type: _.toLowerCase(),
    region: N.toLowerCase(),
    section: y.toLowerCase(),
    text: R.toLowerCase(),
    component: I.toLowerCase()
  };
  k && k.push(S);
};
var Zt = {};
var Dn;
function No() {
  if (Dn) return Zt;
  Dn = 1;
  var v = Sr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, R = {};
  function N(e) {
    return x.call(R, e) ? !0 : x.call(y, e) ? !1 : _.test(e) ? R[e] = !0 : (y[e] = !0, !1);
  }
  function I(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    k[e] = new I(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    k[n] = new I(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    k[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    k[e] = new I(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    k[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    k[e] = new I(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    k[e] = new I(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    k[e] = new I(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    k[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var S = /[\-:]([a-z])/g;
  function ne(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      S,
      ne
    );
    k[n] = new I(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(S, ne);
    k[n] = new I(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(S, ne);
    k[n] = new I(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var H = {
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
  Object.keys(H).forEach(function(e) {
    Oe.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), H[n] = H[e];
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
    for (var a in i) if (x.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = Z(a);
          d = Z(("" + d).trim());
        } else {
          c = a;
          var h = ie.get(c);
          h !== void 0 || (h = Z(c.replace(Jt, "-$1").toLowerCase().replace(oe, "-ms-")), ie.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || x.call(H, a) ? "" + d : d + "px" : Z(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function te(e, n, i, a) {
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
      } else if (N(i)) {
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
    e.push(fe(i));
    var d = i = null, c;
    for (c in n) if (x.call(n, c)) {
      var h = n[c];
      if (h != null) switch (c) {
        case "children":
          i = h;
          break;
        case "dangerouslySetInnerHTML":
          d = h;
          break;
        default:
          te(e, a, c, h);
      }
    }
    return e.push(">"), $(e, d, i), typeof i == "string" ? (e.push(Z(i)), null) : i;
  }
  var Mt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Kt = /* @__PURE__ */ new Map();
  function fe(e) {
    var n = Kt.get(e);
    if (n === void 0) {
      if (!Mt.test(e)) throw Error(u(65, e));
      n = "<" + e, Kt.set(e, n);
    }
    return n;
  }
  function me(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(fe("select"));
        var c = null, h = null;
        for (M in i) if (x.call(i, M)) {
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
              te(e, a, M, w);
          }
        }
        return e.push(">"), $(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(fe("option"));
        var A = w = null, b = null, M = null;
        for (c in i) if (x.call(i, c)) {
          var Y = i[c];
          if (Y != null) switch (c) {
            case "children":
              w = Y;
              break;
            case "selected":
              b = Y;
              break;
            case "dangerouslySetInnerHTML":
              M = Y;
              break;
            case "value":
              A = Y;
            default:
              te(e, a, c, Y);
          }
        }
        if (h != null) if (i = A !== null ? "" + A : ir(w), J(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else b && e.push(' selected=""');
        return e.push(">"), $(e, M, w), w;
      case "textarea":
        e.push(fe("textarea")), M = h = c = null;
        for (w in i) if (x.call(i, w) && (A = i[w], A != null)) switch (w) {
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
            te(
              e,
              a,
              w,
              A
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), M != null) {
          if (c != null) throw Error(u(92));
          if (J(M) && 1 < M.length) throw Error(u(93));
          c = "" + M;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(Z("" + c)), null;
      case "input":
        e.push(fe("input")), A = M = w = c = null;
        for (h in i) if (x.call(i, h) && (b = i[h], b != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            A = b;
            break;
          case "defaultValue":
            w = b;
            break;
          case "checked":
            M = b;
            break;
          case "value":
            c = b;
            break;
          default:
            te(e, a, h, b);
        }
        return M !== null ? te(e, a, "checked", M) : A !== null && te(e, a, "checked", A), c !== null ? te(e, a, "value", c) : w !== null && te(e, a, "value", w), e.push("/>"), null;
      case "menuitem":
        e.push(fe("menuitem"));
        for (var We in i) if (x.call(i, We) && (c = i[We], c != null)) switch (We) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            te(e, a, We, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(fe("title")), c = null;
        for (Y in i) if (x.call(i, Y) && (h = i[Y], h != null)) switch (Y) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            te(e, a, Y, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(fe(n)), h = c = null;
        for (A in i) if (x.call(i, A) && (w = i[A], w != null)) switch (A) {
          case "children":
            c = w;
            break;
          case "dangerouslySetInnerHTML":
            h = w;
            break;
          default:
            te(e, a, A, w);
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
        e.push(fe(n));
        for (var je in i) if (x.call(i, je) && (c = i[je], c != null)) switch (je) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            te(e, a, je, c);
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
        e.push(fe(n)), h = c = null;
        for (b in i) if (x.call(i, b) && (w = i[b], w != null)) switch (b) {
          case "children":
            c = w;
            break;
          case "dangerouslySetInnerHTML":
            h = w;
            break;
          case "style":
            ht(e, a, w);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            N(b) && typeof w != "function" && typeof w != "symbol" && e.push(" ", b, '="', Z(w), '"');
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
  function ve(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Pt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Z(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Z(n)), e = !0), e);
  }
  var et = Object.assign, tt = Symbol.for("react.element"), q = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), Be = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), xt = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), Ye = Symbol.iterator;
  function Se(e) {
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
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case W:
        return (e._context.displayName || "Context") + ".Provider";
      case de:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case St:
        return n = e.displayName || null, n !== null ? n : Se(e.type) || "Memo";
      case re:
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
    var n = we;
    n !== e && (n === null ? Et(e) : e === null ? Qt(n) : n.depth === e.depth ? le(n, e) : n.depth > e.depth ? Ze(n, e) : Ue(n, e), we = e);
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
        var w = n[h];
        w = typeof w == "function" ? w.call(e, c, i, a) : w, w != null && (d ? (d = !1, c = et({}, c, w)) : et(c, w));
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
  var ot = Math.clz32 ? Math.clz32 : Te, wt = Math.log, kt = Math.LN2;
  function Te(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wt(e) / kt | 0) | 0;
  }
  function Je(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var zt = typeof Object.is == "function" ? Object.is : Je, ce = null, Ut = null, xe = null, z = null, it = !1, V = !1, Ee = 0, Le = null, lt = 0;
  function _e() {
    if (ce === null) throw Error(u(321));
    return ce;
  }
  function Ht() {
    if (0 < lt) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Tt() {
    return z === null ? xe === null ? (it = !1, xe = z = Ht()) : (it = !0, z = xe) : z.next === null ? (it = !1, z = z.next = Ht()) : (it = !0, z = z.next), z;
  }
  function $t() {
    Ut = ce = null, V = !1, xe = null, lt = 0, z = Le = null;
  }
  function at(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function _t(e, n, i) {
    if (ce = _e(), z = Tt(), it) {
      var a = z.queue;
      if (n = a.dispatch, Le !== null && (i = Le.get(a), i !== void 0)) {
        Le.delete(a), a = z.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return z.memoizedState = a, [a, n];
      }
      return [z.memoizedState, n];
    }
    return e = e === at ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, z.memoizedState = e, e = z.queue = { last: null, dispatch: null }, e = e.dispatch = pe.bind(null, ce, e), [z.memoizedState, e];
  }
  function tr(e, n) {
    if (ce = _e(), z = Tt(), n = n === void 0 ? null : n, z !== null) {
      var i = z.memoizedState;
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
    return e = e(), z.memoizedState = [e, n], e;
  }
  function pe(e, n, i) {
    if (25 <= lt) throw Error(u(301));
    if (e === ce) if (V = !0, e = { action: i, next: null }, Le === null && (Le = /* @__PURE__ */ new Map()), i = Le.get(n), i === void 0) Le.set(n, e);
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
    return _e(), e._currentValue2;
  }, useMemo: tr, useReducer: _t, useRef: function(e) {
    ce = _e(), z = Tt();
    var n = z.memoizedState;
    return n === null ? (e = { current: e }, z.memoizedState = e) : n;
  }, useState: function(e) {
    return _t(at, e);
  }, useInsertionEffect: st, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return tr(function() {
      return e;
    }, n);
  }, useImperativeHandle: st, useEffect: st, useDebugValue: st, useDeferredValue: function(e) {
    return _e(), e;
  }, useTransition: function() {
    return _e(), [
      !1,
      Ct
    ];
  }, useId: function() {
    var e = Ut.treeContext, n = e.overflow;
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
  function rr(e, n, i, a, d, c, h, w, A) {
    var b = [], M = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: M, pingedTasks: b, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Ce : d, onAllReady: Ke, onShellReady: h === void 0 ? Ke : h, onShellError: Ke, onFatalError: Ke }, i = ct(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = Rt(n, e, null, i, M, ze, null, er), b.push(e), n;
  }
  function Rt(e, n, i, a, d, c, h, w) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var A = { node: n, ping: function() {
      var b = e.pingedTasks;
      b.push(A), b.length === 1 && ar(e);
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
    for (ce = {}, Ut = n, Ee = 0, e = i(a, d); V; ) V = !1, Ee = 0, lt += 1, z = null, e = i(a, d);
    return $t(), e;
  }
  function g(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var w in i) if (!(w in c)) throw Error(u(108, Se(a) || "Unknown", w));
        a = et({}, h, i);
      }
      n.legacyContext = a, U(e, n, d), n.legacyContext = h;
    } else U(e, n, d);
  }
  function T(e, n) {
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
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), Bt(c, i, a, d), g(e, n, c, i);
    } else {
      c = rt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = Ee !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) Bt(d, i, a, c), g(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = nt(a, 1, 0);
        try {
          U(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else U(e, n, d);
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
        case xt:
        case K:
        case gt:
        case yt:
          U(e, n, a.children);
          return;
        case ye:
          U(e, n, a.children);
          return;
        case se:
          throw Error(u(343));
        case Ie:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var w = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, A = ct(e, d.chunks.length, w, d.formatContext, !1, !1);
            d.children.push(A), d.lastPushedText = !1;
            var b = ct(e, 0, null, d.formatContext, !1, !1);
            b.parentFlushed = !0, n.blockedBoundary = w, n.blockedSegment = b;
            try {
              if (Q(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || b.lastPushedText && b.textEmbedded && b.chunks.push("<!-- -->"), b.status = 1, Pe(w, b), w.pendingTasks === 0) break e;
            } catch (M) {
              b.status = 4, w.forceClientRender = !0, w.errorDigest = pt(e, M);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = Rt(e, c, i, A, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case de:
          if (a = s(e, n, i.render, a, d), Ee !== 0) {
            i = n.treeContext, n.treeContext = nt(i, 1, 0);
            try {
              U(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else U(e, n, a);
          return;
        case St:
          i = i.type, a = T(i, a), B(e, n, i, a, d);
          return;
        case W:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = we, we = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, U(e, n, d), e = we, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = we = e.parent, n.context = e;
          return;
        case Be:
          a = a.children, a = a(i._currentValue2), U(e, n, a);
          return;
        case re:
          d = i._init, i = d(i._payload), a = T(i, a), B(
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
  function U(e, n, i) {
    if (n.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case tt:
          B(e, n, i.type, i.props, i.ref);
          return;
        case q:
          throw Error(u(257));
        case re:
          var a = i._init;
          i = a(i._payload), U(e, n, i);
          return;
      }
      if (J(i)) {
        ee(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Ye && i[Ye] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
        if (i = a.next(), !i.done) {
          var d = [];
          do
            d.push(i.value), i = a.next();
          while (!i.done);
          ee(e, n, d);
        }
        return;
      }
      throw e = Object.prototype.toString.call(i), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e));
    }
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Pt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Pt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function ee(e, n, i) {
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
      return U(e, n, i);
    } catch (A) {
      if ($t(), typeof A == "object" && A !== null && typeof A.then == "function") {
        i = A;
        var h = n.blockedSegment, w = ct(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(w), h.lastPushedText = !1, e = Rt(e, n.node, n.blockedBoundary, w, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, ke(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, ke(c), A;
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
  function ar(e) {
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
            ke(h.context);
            try {
              U(w, h, h.node), w.responseState.generateStaticMarkup || A.lastPushedText && A.textEmbedded && A.chunks.push("<!-- -->"), h.abortSet.delete(h), A.status = 1, $e(w, h.blockedBoundary, A);
            } catch (Ae) {
              if ($t(), typeof Ae == "object" && Ae !== null && typeof Ae.then == "function") {
                var b = h.ping;
                Ae.then(b, b);
              } else {
                h.abortSet.delete(h), A.status = 4;
                var M = h.blockedBoundary, Y = Ae, We = pt(w, Y);
                if (M === null ? C(w, Y) : (M.pendingTasks--, M.forceClientRender || (M.forceClientRender = !0, M.errorDigest = We, M.parentFlushed && w.clientRenderedBoundaries.push(M))), w.allPendingTasks--, w.allPendingTasks === 0) {
                  var je = w.onAllReady;
                  je();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && nr(e, e.destination);
      } catch (Ae) {
        pt(e, Ae), C(e, Ae);
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
        var w = e.responseState, A = h.id, b = h.errorDigest, M = h.errorMessage, Y = h.errorComponentStack;
        if (a.push(w.startInlineScript), w.sentClientRenderFunction ? a.push('$RX("') : (w.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), A === null) throw Error(u(395));
        if (a.push(A), a.push('"'), b || M || Y) {
          a.push(",");
          var We = Lt(b || "");
          a.push(We);
        }
        if (M || Y) {
          a.push(",");
          var je = Lt(M || "");
          a.push(je);
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
          for (w = 0; w < qt.length; w++) if (!cr(d, h, fr, qt[w])) {
            w++, qt.splice(0, w);
            var wr = !1;
            break e;
          }
          qt.splice(0, w), wr = !0;
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
      pt(e, a), C(e, a);
    }
  }
  function Er() {
  }
  function pr(e, n, i, a) {
    var d = !1, c = null, h = "", w = { push: function(b) {
      return b !== null && (h += b), !0;
    }, destroy: function(b) {
      d = !0, c = b;
    } }, A = !1;
    if (e = rr(e, ve(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Er, void 0, function() {
      A = !0;
    }), ar(e), xr(e, a), e.status === 1) e.status = 2, w.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = w;
      try {
        nr(e, w);
      } catch (b) {
        pt(e, b), C(e, b);
      }
    }
    if (d) throw c;
    if (!A) throw Error(u(426));
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
function Bo() {
  if (Nn) return Nr;
  Nn = 1;
  var v = Sr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = null, _ = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < _ && (t.enqueue(new Uint8Array(x.buffer, 0, _)), x = new Uint8Array(512), _ = 0), t.enqueue(r);
    else {
      var o = x.length - _;
      o < r.length && (o === 0 ? t.enqueue(x) : (x.set(r.subarray(0, o), _), t.enqueue(x), r = r.subarray(o)), x = new Uint8Array(512), _ = 0), x.set(r, _), _ += r.length;
    }
  }
  function R(t, r) {
    return y(t, r), !0;
  }
  function N(t) {
    x && 0 < _ && (t.enqueue(new Uint8Array(x.buffer, 0, _)), x = null, _ = 0);
  }
  var I = new TextEncoder();
  function k(t) {
    return I.encode(t);
  }
  function S(t) {
    return I.encode(t);
  }
  function ne(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var H = Object.prototype.hasOwnProperty, Oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Me = {}, Z = {};
  function Jt(t) {
    return H.call(Z, t) ? !0 : H.call(Me, t) ? !1 : Oe.test(t) ? Z[t] = !0 : (Me[t] = !0, !1);
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
  var te = /["'&<>]/;
  function $(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = te.exec(t);
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
  var ir = /([A-Z])/g, Ot = /^ms-/, Mt = Array.isArray, Kt = S("<script>"), fe = S("<\/script>"), me = S('<script src="'), mt = S('<script type="module" src="'), vt = S('" async=""><\/script>'), It = /(<\/|<)(s)(cript)/gi;
  function lr(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Lt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Kt : S('<script nonce="' + $(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, k(("" + o).replace(It, lr)), fe), l !== void 0) for (o = 0; o < l.length; o++) p.push(me, k($(l[o])), vt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(mt, k($(f[l])), vt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: S(t + "P:"), segmentPrefix: S(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
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
  var tt = S("<!-- -->");
  function q(t, r, o, l) {
    return r === "" ? l : (l && t.push(tt), t.push(k($(r))), !0);
  }
  var yt = /* @__PURE__ */ new Map(), K = S(' style="'), gt = S(":"), W = S(";");
  function Be(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (H.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = k($(l));
          f = k($(("" + f).trim()));
        } else {
          p = l;
          var m = yt.get(p);
          m !== void 0 || (m = S($(p.replace(ir, "-$1").toLowerCase().replace(Ot, "-ms-"))), yt.set(p, m)), p = m, f = typeof f == "number" ? f === 0 || H.call(ie, l) ? k("" + f) : k(f + "px") : k($(("" + f).trim()));
        }
        r ? (r = !1, t.push(K, p, gt, f)) : t.push(W, p, gt, f);
      }
    }
    r || t.push(ye);
  }
  var de = S(" "), Ie = S('="'), ye = S('"'), St = S('=""');
  function re(t, r, o, l) {
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
        switch (o = k(r.attributeName), r.type) {
          case 3:
            l && t.push(de, o, St);
            break;
          case 4:
            l === !0 ? t.push(de, o, St) : l !== !1 && t.push(de, o, Ie, k($(l)), ye);
            break;
          case 5:
            isNaN(l) || t.push(de, o, Ie, k($(l)), ye);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(de, o, Ie, k($(l)), ye);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(de, o, Ie, k($(l)), ye);
        }
      } else if (Jt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(de, k(o), Ie, k($(l)), ye);
      }
    }
  }
  var se = S(">"), xt = S("/>");
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
  var Ye = S(' selected=""');
  function Se(t, r, o, l) {
    t.push(le(o));
    var f = o = null, p;
    for (p in r) if (H.call(r, p)) {
      var m = r[p];
      if (m != null) switch (p) {
        case "children":
          o = m;
          break;
        case "dangerouslySetInnerHTML":
          f = m;
          break;
        default:
          re(t, l, p, m);
      }
    }
    return t.push(se), ge(t, f, o), typeof o == "string" ? (t.push(k($(o))), null) : o;
  }
  var ze = S(`
`), rt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, we = /* @__PURE__ */ new Map();
  function le(t) {
    var r = we.get(t);
    if (r === void 0) {
      if (!rt.test(t)) throw Error(u(65, t));
      r = S("<" + t), we.set(t, r);
    }
    return r;
  }
  var Qt = S("<!DOCTYPE html>");
  function Et(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(le("select"));
        var p = null, m = null;
        for (L in o) if (H.call(o, L)) {
          var E = o[L];
          if (E != null) switch (L) {
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
              re(t, l, L, E);
          }
        }
        return t.push(se), ge(t, m, p), p;
      case "option":
        m = f.selectedValue, t.push(le("option"));
        var F = E = null, D = null, L = null;
        for (p in o) if (H.call(o, p)) {
          var G = o[p];
          if (G != null) switch (p) {
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
              F = G;
            default:
              re(t, l, p, G);
          }
        }
        if (m != null) if (o = F !== null ? "" + F : Dt(E), Mt(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(Ye);
              break;
            }
        } else "" + m === o && t.push(Ye);
        else D && t.push(Ye);
        return t.push(se), ge(t, L, E), E;
      case "textarea":
        t.push(le("textarea")), L = m = p = null;
        for (E in o) if (H.call(o, E) && (F = o[E], F != null)) switch (E) {
          case "children":
            L = F;
            break;
          case "value":
            p = F;
            break;
          case "defaultValue":
            m = F;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            re(t, l, E, F);
        }
        if (p === null && m !== null && (p = m), t.push(se), L != null) {
          if (p != null) throw Error(u(92));
          if (Mt(L) && 1 < L.length) throw Error(u(93));
          p = "" + L;
        }
        return typeof p == "string" && p[0] === `
` && t.push(ze), p !== null && t.push(k($("" + p))), null;
      case "input":
        t.push(le("input")), F = L = E = p = null;
        for (m in o) if (H.call(o, m) && (D = o[m], D != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = D;
            break;
          case "defaultValue":
            E = D;
            break;
          case "checked":
            L = D;
            break;
          case "value":
            p = D;
            break;
          default:
            re(t, l, m, D);
        }
        return L !== null ? re(
          t,
          l,
          "checked",
          L
        ) : F !== null && re(t, l, "checked", F), p !== null ? re(t, l, "value", p) : E !== null && re(t, l, "value", E), t.push(xt), null;
      case "menuitem":
        t.push(le("menuitem"));
        for (var be in o) if (H.call(o, be) && (p = o[be], p != null)) switch (be) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            re(t, l, be, p);
        }
        return t.push(se), null;
      case "title":
        t.push(le("title")), p = null;
        for (G in o) if (H.call(o, G) && (m = o[G], m != null)) switch (G) {
          case "children":
            p = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            re(t, l, G, m);
        }
        return t.push(se), p;
      case "listing":
      case "pre":
        t.push(le(r)), m = p = null;
        for (F in o) if (H.call(o, F) && (E = o[F], E != null)) switch (F) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            m = E;
            break;
          default:
            re(t, l, F, E);
        }
        if (t.push(se), m != null) {
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
        t.push(le(r));
        for (var Ve in o) if (H.call(o, Ve) && (p = o[Ve], p != null)) switch (Ve) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            re(t, l, Ve, p);
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
        return Se(t, o, r, l);
      case "html":
        return f.insertionMode === 0 && t.push(Qt), Se(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return Se(t, o, r, l);
        t.push(le(r)), m = p = null;
        for (D in o) if (H.call(o, D) && (E = o[D], E != null)) switch (D) {
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
            Jt(D) && typeof E != "function" && typeof E != "symbol" && t.push(de, k(D), Ie, k($(E)), ye);
        }
        return t.push(se), ge(t, m, p), p;
    }
  }
  var Ze = S("</"), Ue = S(">"), ke = S('<template id="'), Nt = S('"></template>'), Bt = S("<!--$-->"), er = S('<!--$?--><template id="'), nt = S('"></template>'), ot = S("<!--$!-->"), wt = S("<!--/$-->"), kt = S("<template"), Te = S('"'), Je = S(' data-dgst="');
  S(' data-msg="'), S(' data-stck="');
  var zt = S("></template>");
  function ce(t, r, o) {
    if (y(t, er), o === null) throw Error(u(395));
    return y(t, o), R(t, nt);
  }
  var Ut = S('<div hidden id="'), xe = S('">'), z = S("</div>"), it = S('<svg aria-hidden="true" style="display:none" id="'), V = S('">'), Ee = S("</svg>"), Le = S('<math aria-hidden="true" style="display:none" id="'), lt = S('">'), _e = S("</math>"), Ht = S('<table hidden id="'), Tt = S('">'), $t = S("</table>"), at = S('<table hidden><tbody id="'), _t = S('">'), tr = S("</tbody></table>"), pe = S('<table hidden><tr id="'), Ct = S('">'), st = S("</tr></table>"), Wt = S('<table hidden><colgroup id="'), ut = S('">'), He = S("</colgroup></table>");
  function Ce(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ut), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, xe);
      case 2:
        return y(t, it), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, V);
      case 3:
        return y(t, Le), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, lt);
      case 4:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, Tt);
      case 5:
        return y(t, at), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, _t);
      case 6:
        return y(t, pe), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, Ct);
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
        return R(t, z);
      case 2:
        return R(t, Ee);
      case 3:
        return R(t, _e);
      case 4:
        return R(t, $t);
      case 5:
        return R(t, tr);
      case 6:
        return R(t, st);
      case 7:
        return R(t, He);
      default:
        throw Error(u(397));
    }
  }
  var rr = S('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Rt = S('$RS("'), ct = S('","'), pt = S('")<\/script>'), C = S('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = S('$RC("'), g = S('","'), T = S('")<\/script>'), B = S('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), U = S('$RX("'), ee = S('"'), Q = S(")<\/script>"), Re = S(","), X = /[<\u2028\u2029]/g;
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
  function w(t) {
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
  function b(t, r) {
    if (t = t.contextTypes, !t) return A;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var M = null;
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
  function Ae(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? Y(t, r) : Ae(t, r);
  }
  function Gt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? Y(t, o) : Gt(t, o), r.context._currentValue = r.value;
  }
  function ft(t) {
    var r = M;
    r !== t && (r === null ? je(t) : t === null ? We(r) : r.depth === t.depth ? Y(r, t) : r.depth > t.depth ? Ae(r, t) : Gt(r, t), M = t);
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
    var f = 32 - kr(l) - 1;
    l &= ~(1 << f), o += 1;
    var p = 32 - kr(r) + f;
    if (30 < p) {
      var m = f - f % 5;
      return p = (l & (1 << m) - 1).toString(32), l >>= m, f -= m, { id: 1 << 32 - kr(r) + f | o << f | l, overflow: p + t };
    }
    return { id: 1 << p | o << f | l, overflow: t };
  }
  var kr = Math.clz32 ? Math.clz32 : Gn, jn = Math.log, Vn = Math.LN2;
  function Gn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (jn(t) / Vn | 0) | 0;
  }
  function qn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Xn = typeof Object.is == "function" ? Object.is : qn, dt = null, Hr = null, Tr = null, j = null, dr = !1, _r = !1, hr = 0, Ft = null, Cr = 0;
  function Xt() {
    if (dt === null) throw Error(u(321));
    return dt;
  }
  function un() {
    if (0 < Cr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $r() {
    return j === null ? Tr === null ? (dr = !1, Tr = j = un()) : (dr = !0, j = Tr) : j.next === null ? (dr = !1, j = j.next = un()) : (dr = !0, j = j.next), j;
  }
  function Wr() {
    Hr = dt = null, _r = !1, Tr = null, Cr = 0, j = Ft = null;
  }
  function cn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function pn(t, r, o) {
    if (dt = Xt(), j = $r(), dr) {
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
    return t = t === cn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, j.memoizedState = t, t = j.queue = { last: null, dispatch: null }, t = t.dispatch = Yn.bind(null, dt, t), [j.memoizedState, t];
  }
  function fn(t, r) {
    if (dt = Xt(), j = $r(), r = r === void 0 ? null : r, j !== null) {
      var o = j.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!Xn(r[f], l[f])) {
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
  function Yn(t, r, o) {
    if (25 <= Cr) throw Error(u(301));
    if (t === dt) if (_r = !0, t = { action: o, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), o = Ft.get(r), o === void 0) Ft.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function Zn() {
    throw Error(u(394));
  }
  function Rr() {
  }
  var dn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Xt(), t._currentValue;
  }, useMemo: fn, useReducer: pn, useRef: function(t) {
    dt = Xt(), j = $r();
    var r = j.memoizedState;
    return r === null ? (t = { current: t }, j.memoizedState = t) : r;
  }, useState: function(t) {
    return pn(cn, t);
  }, useInsertionEffect: Rr, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return fn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Rr, useEffect: Rr, useDebugValue: Rr, useDeferredValue: function(t) {
    return Xt(), t;
  }, useTransition: function() {
    return Xt(), [!1, Zn];
  }, useId: function() {
    var t = Hr.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - kr(t) - 1)).toString(32) + r;
    var o = Ar;
    if (o === null) throw Error(u(404));
    return r = hr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Xt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, Ar = null, jr = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Jn(t) {
    return console.error(t), null;
  }
  function mr() {
  }
  function Kn(t, r, o, l, f, p, m, E, F) {
    var D = [], L = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: L, pingedTasks: D, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Jn : f, onAllReady: p === void 0 ? mr : p, onShellReady: m === void 0 ? mr : m, onShellError: E === void 0 ? mr : E, onFatalError: F === void 0 ? mr : F }, o = Fr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Vr(r, t, null, o, L, A, null, wr), D.push(t), r;
  }
  function Vr(t, r, o, l, f, p, m, E) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var F = { node: r, ping: function() {
      var D = t.pingedTasks;
      D.push(F), D.length === 1 && xn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: m, treeContext: E };
    return f.add(F), F;
  }
  function Fr(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function vr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function br(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, ne(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function hn(t, r, o, l, f) {
    for (dt = {}, Hr = r, hr = 0, t = o(l, f); _r; ) _r = !1, hr = 0, Cr += 1, j = null, t = o(l, f);
    return Wr(), t;
  }
  function mn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var E in o) if (!(E in p)) throw Error(u(108, w(l) || "Unknown", E));
        l = $e({}, m, o);
      }
      r.legacyContext = l, Fe(t, r, f), r.legacyContext = m;
    } else Fe(t, r, f);
  }
  function vn(t, r) {
    if (t && t.defaultProps) {
      r = $e({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function Gr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = b(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), qt(p, o, l, f), mn(t, r, p, o);
    } else {
      p = b(o, r.legacyContext), f = hn(t, r, o, l, p);
      var m = hr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) qt(f, o, l, p), mn(t, r, f, o);
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
          f.chunks.push(Ze, k(o), Ue);
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
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, F = Fr(t, f.chunks.length, E, f.formatContext, !1, !1);
            f.children.push(F), f.lastPushedText = !1;
            var D = Fr(t, 0, null, f.formatContext, !1, !1);
            D.parentFlushed = !0, r.blockedBoundary = E, r.blockedSegment = D;
            try {
              if (qr(
                t,
                r,
                l
              ), D.lastPushedText && D.textEmbedded && D.chunks.push(tt), D.status = 1, Or(E, D), E.pendingTasks === 0) break e;
            } catch (L) {
              D.status = 4, E.forceClientRender = !0, E.errorDigest = vr(t, L);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Vr(t, p, o, F, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case xr:
          if (l = hn(t, r, o.render, l, f), hr !== 0) {
            o = r.treeContext, r.treeContext = At(o, 1, 0);
            try {
              Fe(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Fe(t, r, l);
          return;
        case e:
          o = o.type, l = vn(o, l), Gr(t, r, o, l, f);
          return;
        case cr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, m = M, M = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Fe(t, r, f), t = M, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = M = t.parent, r.context = t;
          return;
        case nr:
          l = l.children, l = l(o._currentValue), Fe(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = vn(o, l), Gr(t, r, o, l, void 0);
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
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function yn(t, r, o) {
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
    } catch (F) {
      if (Wr(), typeof F == "object" && F !== null && typeof F.then == "function") {
        o = F;
        var m = r.blockedSegment, E = Fr(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(E), m.lastPushedText = !1, t = Vr(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p), F;
    }
  }
  function Qn(t) {
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
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = mr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Or(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(Qn, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Or(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function xn(t) {
    if (t.status !== 2) {
      var r = M, o = jr.current;
      jr.current = dn;
      var l = Ar;
      Ar = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var m = f[p], E = t, F = m.blockedSegment;
          if (F.status === 0) {
            ft(m.context);
            try {
              Fe(E, m, m.node), F.lastPushedText && F.textEmbedded && F.chunks.push(tt), m.abortSet.delete(m), F.status = 1, Sn(E, m.blockedBoundary, F);
            } catch (Ge) {
              if (Wr(), typeof Ge == "object" && Ge !== null && typeof Ge.then == "function") {
                var D = m.ping;
                Ge.then(D, D);
              } else {
                m.abortSet.delete(m), F.status = 4;
                var L = m.blockedBoundary, G = Ge, be = vr(E, G);
                if (L === null ? br(E, G) : (L.pendingTasks--, L.forceClientRender || (L.forceClientRender = !0, L.errorDigest = be, L.parentFlushed && E.clientRenderedBoundaries.push(L))), E.allPendingTasks--, E.allPendingTasks === 0) {
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
        vr(t, Ge), br(t, Ge);
      } finally {
        Ar = l, jr.current = o, o === dn && ft(r);
      }
    }
  }
  function Mr(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, ke), y(r, t.placeholderPrefix), t = k(l.toString(16)), y(r, t), R(r, Nt);
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
        return p < l.length && (f = R(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function Ir(t, r, o) {
    var l = o.boundary;
    if (l === null) return Mr(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, R(r, ot), y(r, kt), l && (y(r, Je), y(r, k($(l))), y(r, Te)), R(r, zt), Mr(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = S(f.boundaryPrefix + p.toString(16)), l = l.id = f, ce(r, t.responseState, l), Mr(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ce(r, t.responseState, l.id), Mr(t, r, o);
    else {
      if (R(r, Bt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Ir(t, r, o[0]);
    }
    return R(r, wt);
  }
  function En(t, r, o) {
    return Ce(r, t.responseState, o.formatContext, o.id), Ir(t, r, o), Ke(r, o.formatContext);
  }
  function wn(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) kn(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, C)), l === null) throw Error(u(395));
    return o = k(o.toString(16)), y(r, l), y(r, g), y(r, t.segmentPrefix), y(r, o), R(r, T);
  }
  function kn(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return En(t, r, l);
    }
    return En(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, Rt) : (t.sentCompleteSegmentFunction = !0, y(r, rr)), y(r, t.segmentPrefix), f = k(f.toString(16)), y(r, f), y(r, ct), y(r, t.placeholderPrefix), y(r, f), R(r, pt);
  }
  function Xr(t, r) {
    x = new Uint8Array(512), _ = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Ir(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && R(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var m = f[p];
        l = r;
        var E = t.responseState, F = m.id, D = m.errorDigest, L = m.errorMessage, G = m.errorComponentStack;
        if (y(l, E.startInlineScript), E.sentClientRenderFunction ? y(l, U) : (E.sentClientRenderFunction = !0, y(
          l,
          B
        )), F === null) throw Error(u(395));
        y(l, F), y(l, ee), (D || L || G) && (y(l, Re), y(l, k(Pe(D || "")))), (L || G) && (y(l, Re), y(l, k(Pe(L || "")))), G && (y(l, Re), y(l, k(Pe(G)))), R(l, Q);
      }
      f.splice(0, p);
      var be = t.completedBoundaries;
      for (p = 0; p < be.length; p++) wn(t, r, be[p]);
      be.splice(0, p), N(r), x = new Uint8Array(512), _ = 0;
      var Ve = t.partialBoundaries;
      for (p = 0; p < Ve.length; p++) {
        var Ge = Ve[p];
        e: {
          f = t, m = r;
          var Lr = Ge.completedSegments;
          for (E = 0; E < Lr.length; E++) if (!kn(
            f,
            m,
            Ge,
            Lr[E]
          )) {
            E++, Lr.splice(0, E);
            var _n = !1;
            break e;
          }
          Lr.splice(0, E), _n = !0;
        }
        if (!_n) {
          t.destination = null, p++, Ve.splice(0, p);
          return;
        }
      }
      Ve.splice(0, p);
      var Yr = t.completedBoundaries;
      for (p = 0; p < Yr.length; p++) wn(t, r, Yr[p]);
      Yr.splice(0, p);
    } finally {
      N(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function Tn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return gn(l, t, r);
      }), o.clear(), t.destination !== null && Xr(t, t.destination);
    } catch (l) {
      vr(t, l), br(t, l);
    }
  }
  return Nr.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, m = new Promise(function(L, G) {
        p = L, f = G;
      }), E = Kn(t, Lt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Pt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var L = new ReadableStream({ type: "bytes", pull: function(G) {
          if (E.status === 1) E.status = 2, ne(G, E.fatalError);
          else if (E.status !== 2 && E.destination === null) {
            E.destination = G;
            try {
              Xr(E, G);
            } catch (be) {
              vr(E, be), br(E, be);
            }
          }
        }, cancel: function() {
          Tn(E);
        } }, { highWaterMark: 0 });
        L.allReady = m, o(L);
      }, function(L) {
        m.catch(function() {
        }), l(L);
      }, f);
      if (r && r.signal) {
        var F = r.signal, D = function() {
          Tn(E, F.reason), F.removeEventListener("abort", D);
        };
        F.addEventListener("abort", D);
      }
      xn(E);
    });
  }, Nr.version = "18.3.1", Nr;
}
var or, $n;
or = No(), $n = Bo();
or.version;
or.renderToString;
or.renderToStaticMarkup;
or.renderToNodeStream;
or.renderToStaticNodeStream;
$n.renderToReadableStream;
const zo = "staticMarkup";
function Uo() {
  const u = eo().indexOf(zo) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const Ho = ({ gaData: v, prefix: u = "", children: x }) => {
  const { isReact: _ } = Uo(), { onClick: y, ...R } = x.props;
  if (_)
    return Sr.cloneElement(x, {
      ...R,
      onClick: (k) => (Do(v), y ? y(k) : !0)
    });
  let N = "";
  ["input", "header", "header-input"].includes(u) && (N = `-${u}`);
  const I = {
    [`data-ga${N}`]: v.text,
    [`data-ga${N}-name`]: v.name,
    [`data-ga${N}-event`]: v.event,
    [`data-ga${N}-action`]: v.action,
    [`data-ga${N}-type`]: v.type,
    [`data-ga${N}-region`]: v.region,
    [`data-ga${N}-section`]: v.section,
    [`data-ga${N}-component`]: v.component
  };
  return Sr.cloneElement(x, {
    ...R,
    onClick: y,
    ...I
  });
}, $o = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Wn = ({
  color: v,
  icon: u,
  innerRef: x,
  onClick: _,
  size: y,
  cardTitle: R,
  className: N,
  gaData: I,
  ...k
}) => {
  const S = () => {
    _ == null || _();
  };
  return /* @__PURE__ */ Zr.jsx(
    Ho,
    {
      gaData: {
        ...$o,
        section: R,
        // @deprecated - remove at some point
        ...I,
        text: `${u == null ? void 0 : u[1]} icon`
      },
      children: /* @__PURE__ */ Zr.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${v} ${y === "large" && "btn-circle-large"} ${N}`,
          ref: x,
          "aria-label": "Close",
          onClick: S,
          ...k,
          children: /* @__PURE__ */ Zr.jsx("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]}` })
        }
      )
    }
  );
};
Wn.propTypes = {
  /**
    Color the button based on the background color
  */
  color: O.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: O.arrayOf(O.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: O.oneOfType([
    O.object,
    O.func,
    O.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: O.func,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: O.string,
  /**
   * Google Analytics event data
   */
  gaData: lo,
  /**
    Button size
  */
  size: O.oneOf(["large", "small"]),
  className: O.string
};
Wn.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
export {
  Wn as ButtonIconOnly
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
