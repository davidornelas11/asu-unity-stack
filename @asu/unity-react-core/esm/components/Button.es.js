import Sr, { useId as no } from "react";
function zn(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Un = { exports: {} }, yr = {};
var Cn;
function oo() {
  if (Cn) return yr;
  Cn = 1;
  var v = Sr, u = Symbol.for("react.element"), S = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(O, w, g) {
    var ee, z = {}, fe = null, ve = null;
    g !== void 0 && (fe = "" + g), w.key !== void 0 && (fe = "" + w.key), w.ref !== void 0 && (ve = w.ref);
    for (ee in w) _.call(w, ee) && !C.hasOwnProperty(ee) && (z[ee] = w[ee]);
    if (O && O.defaultProps) for (ee in w = O.defaultProps, w) z[ee] === void 0 && (z[ee] = w[ee]);
    return { $$typeof: u, type: O, key: fe, ref: ve, props: z, _owner: y.current };
  }
  return yr.Fragment = S, yr.jsx = b, yr.jsxs = b, yr;
}
Un.exports = oo();
var Zr = Un.exports, Hn = { exports: {} };
(function(v) {
  (function() {
    var u = {}.hasOwnProperty;
    function S() {
      for (var C = "", b = 0; b < arguments.length; b++) {
        var O = arguments[b];
        O && (C = y(C, _(O)));
      }
      return C;
    }
    function _(C) {
      if (typeof C == "string" || typeof C == "number")
        return C;
      if (typeof C != "object")
        return "";
      if (Array.isArray(C))
        return S.apply(null, C);
      if (C.toString !== Object.prototype.toString && !C.toString.toString().includes("[native code]"))
        return C.toString();
      var b = "";
      for (var O in C)
        u.call(C, O) && C[O] && (b = y(b, O));
      return b;
    }
    function y(C, b) {
      return b ? C ? C + " " + b : C + b : C;
    }
    v.exports ? (S.default = S, v.exports = S) : window.classNames = S;
  })();
})(Hn);
var io = Hn.exports;
const Rn = /* @__PURE__ */ zn(io);
var $n = { exports: {} }, Jr, An;
function lo() {
  if (An) return Jr;
  An = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jr = v, Jr;
}
var Kr, bn;
function ao() {
  if (bn) return Kr;
  bn = 1;
  var v = lo();
  function u() {
  }
  function S() {
  }
  return S.resetWarningCache = u, Kr = function() {
    function _(b, O, w, g, ee, z) {
      if (z !== v) {
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
      checkPropTypes: S,
      resetWarningCache: u
    };
    return C.PropTypes = C, C;
  }, Kr;
}
$n.exports = ao()();
var so = $n.exports;
const R = /* @__PURE__ */ zn(so);
R.shape({
  url: R.string,
  altText: R.string,
  cssClass: R.arrayOf(R.string),
  size: R.oneOf(["small", "medium", "large"])
});
R.shape({
  text: R.string,
  maxWidth: R.string,
  cssClass: R.arrayOf(R.string),
  highlightColor: R.oneOf(["gold", "black"])
});
R.shape({
  color: R.oneOf(["gold", "maroon", "gray", "dark"]),
  content: R.shape({
    icon: R.string,
    header: R.string,
    body: R.string
  })
});
const uo = R.shape({
  text: R.string,
  name: R.string,
  event: R.string,
  action: R.string,
  type: R.string,
  region: R.string,
  section: R.string,
  component: R.string
});
function Ft(v) {
  "@babel/helpers - typeof";
  return Ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Ft(v);
}
function ln(v, u) {
  return ln = Object.setPrototypeOf || function(_, y) {
    return _.__proto__ = y, _;
  }, ln(v, u);
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
function Br(v, u, S) {
  return co() ? Br = Reflect.construct : Br = function(y, C, b) {
    var O = [null];
    O.push.apply(O, C);
    var w = Function.bind.apply(y, O), g = new w();
    return b && ln(g, b.prototype), g;
  }, Br.apply(null, arguments);
}
function Xe(v) {
  return po(v) || fo(v) || ho(v) || mo();
}
function po(v) {
  if (Array.isArray(v)) return an(v);
}
function fo(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function ho(v, u) {
  if (v) {
    if (typeof v == "string") return an(v, u);
    var S = Object.prototype.toString.call(v).slice(8, -1);
    if (S === "Object" && v.constructor && (S = v.constructor.name), S === "Map" || S === "Set") return Array.from(v);
    if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return an(v, u);
  }
}
function an(v, u) {
  (u == null || u > v.length) && (u = v.length);
  for (var S = 0, _ = new Array(u); S < u; S++) _[S] = v[S];
  return _;
}
function mo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vo = Object.hasOwnProperty, On = Object.setPrototypeOf, yo = Object.isFrozen, go = Object.getPrototypeOf, So = Object.getOwnPropertyDescriptor, me = Object.freeze, De = Object.seal, xo = Object.create, Wn = typeof Reflect < "u" && Reflect, Ur = Wn.apply, sn = Wn.construct;
Ur || (Ur = function(u, S, _) {
  return u.apply(S, _);
});
me || (me = function(u) {
  return u;
});
De || (De = function(u) {
  return u;
});
sn || (sn = function(u, S) {
  return Br(u, Xe(S));
});
var Eo = Ne(Array.prototype.forEach), Fn = Ne(Array.prototype.pop), gr = Ne(Array.prototype.push), zr = Ne(String.prototype.toLowerCase), Qr = Ne(String.prototype.toString), Mn = Ne(String.prototype.match), qe = Ne(String.prototype.replace), wo = Ne(String.prototype.indexOf), ko = Ne(String.prototype.trim), ue = Ne(RegExp.prototype.test), en = To(TypeError);
function Ne(v) {
  return function(u) {
    for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), y = 1; y < S; y++)
      _[y - 1] = arguments[y];
    return Ur(v, u, _);
  };
}
function To(v) {
  return function() {
    for (var u = arguments.length, S = new Array(u), _ = 0; _ < u; _++)
      S[_] = arguments[_];
    return sn(v, S);
  };
}
function D(v, u, S) {
  var _;
  S = (_ = S) !== null && _ !== void 0 ? _ : zr, On && On(v, null);
  for (var y = u.length; y--; ) {
    var C = u[y];
    if (typeof C == "string") {
      var b = S(C);
      b !== C && (yo(u) || (u[y] = b), C = b);
    }
    v[C] = !0;
  }
  return v;
}
function Zt(v) {
  var u = xo(null), S;
  for (S in v)
    Ur(vo, v, [S]) === !0 && (u[S] = v[S]);
  return u;
}
function Pr(v, u) {
  for (; v !== null; ) {
    var S = So(v, u);
    if (S) {
      if (S.get)
        return Ne(S.get);
      if (typeof S.value == "function")
        return Ne(S.value);
    }
    v = go(v);
  }
  function _(y) {
    return console.warn("fallback value for", y), null;
  }
  return _;
}
var In = me(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), tn = me(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rn = me(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _o = me(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), nn = me(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Co = me(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ln = me(["#text"]), Pn = me(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), on = me(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dn = me(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = me(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ro = De(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ao = De(/<%[\w\W]*|[\w\W]*%>/gm), bo = De(/\${[\w\W]*}/gm), Oo = De(/^data-[\-\w.\u00B7-\uFFFF]/), Fo = De(/^aria-[\-\w]+$/), Mo = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Io = De(/^(?:\w+script|data):/i), Lo = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Po = De(/^html$/i), Do = De(/^[a-z][.\w]*(-[.\w]+)+$/i), No = function() {
  return typeof window > "u" ? null : window;
}, Bo = function(u, S) {
  if (Ft(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var _ = null, y = "data-tt-policy-suffix";
  S.currentScript && S.currentScript.hasAttribute(y) && (_ = S.currentScript.getAttribute(y));
  var C = "dompurify" + (_ ? "#" + _ : "");
  try {
    return u.createPolicy(C, {
      createHTML: function(O) {
        return O;
      },
      createScriptURL: function(O) {
        return O;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + C + " could not be created."), null;
  }
};
function jn() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : No(), u = function(s) {
    return jn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !v || !v.document || v.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var S = v.document, _ = v.document, y = v.DocumentFragment, C = v.HTMLTemplateElement, b = v.Node, O = v.Element, w = v.NodeFilter, g = v.NamedNodeMap, ee = g === void 0 ? v.NamedNodeMap || v.MozNamedAttrMap : g, z = v.HTMLFormElement, fe = v.DOMParser, ve = v.trustedTypes, G = O.prototype, ht = Pr(G, "cloneNode"), te = Pr(G, "nextSibling"), $ = Pr(G, "childNodes"), ae = Pr(G, "parentNode");
  if (typeof C == "function") {
    var Qe = _.createElement("template");
    Qe.content && Qe.content.ownerDocument && (_ = Qe.content.ownerDocument);
  }
  var ie = Bo(ve, S), mt = ie ? ie.createHTML("") : "", ne = _, W = ne.implementation, ir = ne.createNodeIterator, Mt = ne.createDocumentFragment, It = ne.getElementsByTagName, Kt = S.importNode, de = {};
  try {
    de = Zt(_).documentMode ? _.documentMode : {};
  } catch {
  }
  var ye = {};
  u.isSupported = typeof ae == "function" && W && W.createHTMLDocument !== void 0 && de !== 9;
  var vt = Ro, yt = Ao, Lt = bo, lr = Oo, Pt = Fo, ge = Io, Dt = Lo, et = Do, tt = Mo, Y = null, gt = D({}, [].concat(Xe(In), Xe(tn), Xe(rn), Xe(nn), Xe(Ln))), K = null, St = D({}, [].concat(Xe(Pn), Xe(on), Xe(Dn), Xe(Dr))), j = Object.seal(Object.create(null, {
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
  })), Be = null, he = null, Ie = !0, Se = !0, xt = !1, oe = !0, se = !1, Et = !0, xe = !1, Nt = !1, Ye = !1, Ee = !1, ze = !1, rt = !1, Te = !0, le = !1, Qt = "user-content-", wt = !0, Ze = !1, Ue = {}, _e = null, Bt = D({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), zt = null, er = D({}, ["audio", "video", "img", "source", "image", "track"]), nt = null, ot = D({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), kt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", Ce = "http://www.w3.org/1999/xhtml", Je = Ce, Ut = !1, ce = null, Ht = D({}, [kt, Tt, Ce], Qr), we, U = ["application/xhtml+xml", "text/html"], it = "text/html", q, ke = null, Le = _.createElement("form"), lt = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, Re = function(s) {
    ke && ke === s || ((!s || Ft(s) !== "object") && (s = {}), s = Zt(s), we = // eslint-disable-next-line unicorn/prefer-includes
    U.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? we = it : we = s.PARSER_MEDIA_TYPE, q = we === "application/xhtml+xml" ? Qr : zr, Y = "ALLOWED_TAGS" in s ? D({}, s.ALLOWED_TAGS, q) : gt, K = "ALLOWED_ATTR" in s ? D({}, s.ALLOWED_ATTR, q) : St, ce = "ALLOWED_NAMESPACES" in s ? D({}, s.ALLOWED_NAMESPACES, Qr) : Ht, nt = "ADD_URI_SAFE_ATTR" in s ? D(
      Zt(ot),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      q
      // eslint-disable-line indent
    ) : ot, zt = "ADD_DATA_URI_TAGS" in s ? D(
      Zt(er),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      q
      // eslint-disable-line indent
    ) : er, _e = "FORBID_CONTENTS" in s ? D({}, s.FORBID_CONTENTS, q) : Bt, Be = "FORBID_TAGS" in s ? D({}, s.FORBID_TAGS, q) : {}, he = "FORBID_ATTR" in s ? D({}, s.FORBID_ATTR, q) : {}, Ue = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ie = s.ALLOW_ARIA_ATTR !== !1, Se = s.ALLOW_DATA_ATTR !== !1, xt = s.ALLOW_UNKNOWN_PROTOCOLS || !1, oe = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = s.SAFE_FOR_TEMPLATES || !1, Et = s.SAFE_FOR_XML !== !1, xe = s.WHOLE_DOCUMENT || !1, Ee = s.RETURN_DOM || !1, ze = s.RETURN_DOM_FRAGMENT || !1, rt = s.RETURN_TRUSTED_TYPE || !1, Ye = s.FORCE_BODY || !1, Te = s.SANITIZE_DOM !== !1, le = s.SANITIZE_NAMED_PROPS || !1, wt = s.KEEP_CONTENT !== !1, Ze = s.IN_PLACE || !1, tt = s.ALLOWED_URI_REGEXP || tt, Je = s.NAMESPACE || Ce, j = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (Se = !1), ze && (Ee = !0), Ue && (Y = D({}, Xe(Ln)), K = [], Ue.html === !0 && (D(Y, In), D(K, Pn)), Ue.svg === !0 && (D(Y, tn), D(K, on), D(K, Dr)), Ue.svgFilters === !0 && (D(Y, rn), D(K, on), D(K, Dr)), Ue.mathMl === !0 && (D(Y, nn), D(K, Dn), D(K, Dr))), s.ADD_TAGS && (Y === gt && (Y = Zt(Y)), D(Y, s.ADD_TAGS, q)), s.ADD_ATTR && (K === St && (K = Zt(K)), D(K, s.ADD_ATTR, q)), s.ADD_URI_SAFE_ATTR && D(nt, s.ADD_URI_SAFE_ATTR, q), s.FORBID_CONTENTS && (_e === Bt && (_e = Zt(_e)), D(_e, s.FORBID_CONTENTS, q)), wt && (Y["#text"] = !0), xe && D(Y, ["html", "head", "body"]), Y.table && (D(Y, ["tbody"]), delete Be.tbody), me && me(s), ke = s);
  }, $t = D({}, ["mi", "mo", "mn", "ms", "mtext"]), _t = D({}, ["annotation-xml"]), Wt = D({}, ["title", "style", "font", "a", "script"]), at = D({}, tn);
  D(at, rn), D(at, _o);
  var Ct = D({}, nn);
  D(Ct, Co);
  var tr = function(s) {
    var x = ae(s);
    (!x || !x.tagName) && (x = {
      namespaceURI: Je,
      tagName: "template"
    });
    var T = zr(s.tagName), B = zr(x.tagName);
    return ce[s.namespaceURI] ? s.namespaceURI === Tt ? x.namespaceURI === Ce ? T === "svg" : x.namespaceURI === kt ? T === "svg" && (B === "annotation-xml" || $t[B]) : !!at[T] : s.namespaceURI === kt ? x.namespaceURI === Ce ? T === "math" : x.namespaceURI === Tt ? T === "math" && _t[B] : !!Ct[T] : s.namespaceURI === Ce ? x.namespaceURI === Tt && !_t[B] || x.namespaceURI === kt && !$t[B] ? !1 : !Ct[T] && (Wt[T] || !at[T]) : !!(we === "application/xhtml+xml" && ce[s.namespaceURI]) : !1;
  }, pe = function(s) {
    gr(u.removed, {
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
  }, Rt = function(s, x) {
    try {
      gr(u.removed, {
        attribute: x.getAttributeNode(s),
        from: x
      });
    } catch {
      gr(u.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(s), s === "is" && !K[s])
      if (Ee || ze)
        try {
          pe(x);
        } catch {
        }
      else
        try {
          x.setAttribute(s, "");
        } catch {
        }
  }, st = function(s) {
    var x, T;
    if (Ye)
      s = "<remove></remove>" + s;
    else {
      var B = Mn(s, /^[\r\n\t ]+/);
      T = B && B[0];
    }
    we === "application/xhtml+xml" && Je === Ce && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var H = ie ? ie.createHTML(s) : s;
    if (Je === Ce)
      try {
        x = new fe().parseFromString(H, we);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = W.createDocument(Je, "template", null);
      try {
        x.documentElement.innerHTML = Ut ? mt : H;
      } catch {
      }
    }
    var re = x.body || x.documentElement;
    return s && T && re.insertBefore(_.createTextNode(T), re.childNodes[0] || null), Je === Ce ? It.call(x, xe ? "html" : "body")[0] : xe ? x.documentElement : re;
  }, jt = function(s) {
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
  }, Ae = function(s, x, T) {
    ye[s] && Eo(ye[s], function(B) {
      B.call(u, x, T, ke);
    });
  }, Ke = function(s) {
    var x;
    if (Ae("beforeSanitizeElements", s, null), ut(s) || ue(/[\u0080-\uFFFF]/, s.nodeName))
      return pe(s), !0;
    var T = q(s.nodeName);
    if (Ae("uponSanitizeElement", s, {
      tagName: T,
      allowedTags: Y
    }), s.hasChildNodes() && !He(s.firstElementChild) && (!He(s.content) || !He(s.content.firstElementChild)) && ue(/<[/\w]/g, s.innerHTML) && ue(/<[/\w]/g, s.textContent) || T === "select" && ue(/<template/i, s.innerHTML) || s.nodeType === 7 || Et && s.nodeType === 8 && ue(/<[/\w]/g, s.data))
      return pe(s), !0;
    if (!Y[T] || Be[T]) {
      if (!Be[T] && At(T) && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, T) || j.tagNameCheck instanceof Function && j.tagNameCheck(T)))
        return !1;
      if (wt && !_e[T]) {
        var B = ae(s) || s.parentNode, H = $(s) || s.childNodes;
        if (H && B)
          for (var re = H.length, Q = re - 1; Q >= 0; --Q) {
            var be = ht(H[Q], !0);
            be.__removalCount = (s.__removalCount || 0) + 1, B.insertBefore(be, te(s));
          }
      }
      return pe(s), !0;
    }
    return s instanceof O && !tr(s) || (T === "noscript" || T === "noembed" || T === "noframes") && ue(/<\/no(script|embed|frames)/i, s.innerHTML) ? (pe(s), !0) : (se && s.nodeType === 3 && (x = s.textContent, x = qe(x, vt, " "), x = qe(x, yt, " "), x = qe(x, Lt, " "), s.textContent !== x && (gr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = x)), Ae("afterSanitizeElements", s, null), !1);
  }, rr = function(s, x, T) {
    if (Te && (x === "id" || x === "name") && (T in _ || T in Le))
      return !1;
    if (!(Se && !he[x] && ue(lr, x))) {
      if (!(Ie && ue(Pt, x))) {
        if (!K[x] || he[x]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(s) && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, s) || j.tagNameCheck instanceof Function && j.tagNameCheck(s)) && (j.attributeNameCheck instanceof RegExp && ue(j.attributeNameCheck, x) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            x === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && ue(j.tagNameCheck, T) || j.tagNameCheck instanceof Function && j.tagNameCheck(T)))
          ) return !1;
        } else if (!nt[x]) {
          if (!ue(tt, qe(T, Dt, ""))) {
            if (!((x === "src" || x === "xlink:href" || x === "href") && s !== "script" && wo(T, "data:") === 0 && zt[s])) {
              if (!(xt && !ue(ge, qe(T, Dt, "")))) {
                if (T)
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
    var x, T, B, H;
    Ae("beforeSanitizeAttributes", s, null);
    var re = s.attributes;
    if (re) {
      var Q = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: K
      };
      for (H = re.length; H--; ) {
        x = re[H];
        var be = x, Z = be.name, Pe = be.namespaceURI;
        if (T = Z === "value" ? x.value : ko(x.value), B = q(Z), Q.attrName = B, Q.attrValue = T, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ae("uponSanitizeAttribute", s, Q), T = Q.attrValue, !Q.forceKeepAttr && (Rt(Z, s), !!Q.keepAttr)) {
          if (!oe && ue(/\/>/i, T)) {
            Rt(Z, s);
            continue;
          }
          se && (T = qe(T, vt, " "), T = qe(T, yt, " "), T = qe(T, Lt, " "));
          var $e = q(s.nodeName);
          if (rr($e, B, T)) {
            if (le && (B === "id" || B === "name") && (Rt(Z, s), T = Qt + T), Et && ue(/((--!?|])>)|<\/(style|title)/i, T)) {
              Rt(Z, s);
              continue;
            }
            if (ie && Ft(ve) === "object" && typeof ve.getAttributeType == "function" && !Pe)
              switch (ve.getAttributeType($e, B)) {
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
              Pe ? s.setAttributeNS(Pe, Z, T) : s.setAttribute(Z, T), ut(s) ? pe(s) : Fn(u.removed);
            } catch {
            }
          }
        }
      }
      Ae("afterSanitizeAttributes", s, null);
    }
  }, pt = function A(s) {
    var x, T = jt(s);
    for (Ae("beforeSanitizeShadowDOM", s, null); x = T.nextNode(); )
      Ae("uponSanitizeShadowNode", x, null), !Ke(x) && (x.content instanceof y && A(x.content), ct(x));
    Ae("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(A) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x, T, B, H, re;
    if (Ut = !A, Ut && (A = "<!-->"), typeof A != "string" && !He(A))
      if (typeof A.toString == "function") {
        if (A = A.toString(), typeof A != "string")
          throw en("dirty is not a string, aborting");
      } else
        throw en("toString is not a function");
    if (!u.isSupported) {
      if (Ft(v.toStaticHTML) === "object" || typeof v.toStaticHTML == "function") {
        if (typeof A == "string")
          return v.toStaticHTML(A);
        if (He(A))
          return v.toStaticHTML(A.outerHTML);
      }
      return A;
    }
    if (Nt || Re(s), u.removed = [], typeof A == "string" && (Ze = !1), Ze) {
      if (A.nodeName) {
        var Q = q(A.nodeName);
        if (!Y[Q] || Be[Q])
          throw en("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (A instanceof b)
      x = st("<!---->"), T = x.ownerDocument.importNode(A, !0), T.nodeType === 1 && T.nodeName === "BODY" || T.nodeName === "HTML" ? x = T : x.appendChild(T);
    else {
      if (!Ee && !se && !xe && // eslint-disable-next-line unicorn/prefer-includes
      A.indexOf("<") === -1)
        return ie && rt ? ie.createHTML(A) : A;
      if (x = st(A), !x)
        return Ee ? null : rt ? mt : "";
    }
    x && Ye && pe(x.firstChild);
    for (var be = jt(Ze ? A : x); B = be.nextNode(); )
      B.nodeType === 3 && B === H || Ke(B) || (B.content instanceof y && pt(B.content), ct(B), H = B);
    if (H = null, Ze)
      return A;
    if (Ee) {
      if (ze)
        for (re = Mt.call(x.ownerDocument); x.firstChild; )
          re.appendChild(x.firstChild);
      else
        re = x;
      return (K.shadowroot || K.shadowrootmod) && (re = Kt.call(S, re, !0)), re;
    }
    var Z = xe ? x.outerHTML : x.innerHTML;
    return xe && Y["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && ue(Po, x.ownerDocument.doctype.name) && (Z = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Z), se && (Z = qe(Z, vt, " "), Z = qe(Z, yt, " "), Z = qe(Z, Lt, " ")), ie && rt ? ie.createHTML(Z) : Z;
  }, u.setConfig = function(A) {
    Re(A), Nt = !0;
  }, u.clearConfig = function() {
    ke = null, Nt = !1;
  }, u.isValidAttribute = function(A, s, x) {
    ke || Re({});
    var T = q(A), B = q(s);
    return rr(T, B, x);
  }, u.addHook = function(A, s) {
    typeof s == "function" && (ye[A] = ye[A] || [], gr(ye[A], s));
  }, u.removeHook = function(A) {
    if (ye[A])
      return Fn(ye[A]);
  }, u.removeHooks = function(A) {
    ye[A] && (ye[A] = []);
  }, u.removeAllHooks = function() {
    ye = {};
  }, u;
}
jn();
R.shape({
  event: R.string,
  action: R.string,
  name: R.string,
  region: R.string,
  section: R.string,
  component: R.string,
  type: R.string,
  text: R.string
});
const zo = ({
  event: v = "",
  action: u = "",
  name: S = "",
  type: _ = "",
  section: y = "",
  text: C = "",
  region: b = "",
  component: O = ""
}) => {
  const { dataLayer: w } = window, g = {
    event: v.toLowerCase(),
    action: u.toLowerCase(),
    name: S.toLowerCase(),
    type: _.toLowerCase(),
    region: b.toLowerCase(),
    section: y.toLowerCase(),
    text: C.toLowerCase(),
    component: O.toLowerCase()
  };
  w && w.push(g);
};
var Jt = {};
var Nn;
function Uo() {
  if (Nn) return Jt;
  Nn = 1;
  var v = Sr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, C = {};
  function b(e) {
    return S.call(C, e) ? !0 : S.call(y, e) ? !1 : _.test(e) ? C[e] = !0 : (y[e] = !0, !1);
  }
  function O(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new O(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    w[n] = new O(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new O(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new O(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new O(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new O(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var g = /[\-:]([a-z])/g;
  function ee(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      g,
      ee
    );
    w[n] = new O(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(g, ee);
    w[n] = new O(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(g, ee);
    w[n] = new O(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
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
  function G(e) {
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
  var ht = /([A-Z])/g, te = /^ms-/, $ = Array.isArray;
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
    for (var a in i) if (S.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = G(a);
          d = G(("" + d).trim());
        } else {
          c = a;
          var h = ie.get(c);
          h !== void 0 || (h = G(c.replace(ht, "-$1").toLowerCase().replace(te, "-ms-")), ie.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || S.call(z, a) ? "" + d : d + "px" : G(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function ne(e, n, i, a) {
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
            a === !0 ? e.push(" ", i, '=""') : a !== !1 && e.push(" ", i, '="', G(a), '"');
            break;
          case 5:
            isNaN(a) || e.push(" ", i, '="', G(a), '"');
            break;
          case 6:
            !isNaN(a) && 1 <= a && e.push(" ", i, '="', G(a), '"');
            break;
          default:
            n.sanitizeURL && (a = "" + a), e.push(" ", i, '="', G(a), '"');
        }
      } else if (b(i)) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = i.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", i, '="', G(a), '"');
      }
    }
  }
  function W(e, n, i) {
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
  function Mt(e, n, i, a) {
    e.push(de(i));
    var d = i = null, c;
    for (c in n) if (S.call(n, c)) {
      var h = n[c];
      if (h != null) switch (c) {
        case "children":
          i = h;
          break;
        case "dangerouslySetInnerHTML":
          d = h;
          break;
        default:
          ne(e, a, c, h);
      }
    }
    return e.push(">"), W(e, d, i), typeof i == "string" ? (e.push(G(i)), null) : i;
  }
  var It = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Kt = /* @__PURE__ */ new Map();
  function de(e) {
    var n = Kt.get(e);
    if (n === void 0) {
      if (!It.test(e)) throw Error(u(65, e));
      n = "<" + e, Kt.set(e, n);
    }
    return n;
  }
  function ye(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(de("select"));
        var c = null, h = null;
        for (L in i) if (S.call(i, L)) {
          var k = i[L];
          if (k != null) switch (L) {
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
              ne(e, a, L, k);
          }
        }
        return e.push(">"), W(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(de("option"));
        var F = k = null, I = null, L = null;
        for (c in i) if (S.call(i, c)) {
          var J = i[c];
          if (J != null) switch (c) {
            case "children":
              k = J;
              break;
            case "selected":
              I = J;
              break;
            case "dangerouslySetInnerHTML":
              L = J;
              break;
            case "value":
              F = J;
            default:
              ne(e, a, c, J);
          }
        }
        if (h != null) if (i = F !== null ? "" + F : ir(k), $(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else I && e.push(' selected=""');
        return e.push(">"), W(e, L, k), k;
      case "textarea":
        e.push(de("textarea")), L = h = c = null;
        for (k in i) if (S.call(i, k) && (F = i[k], F != null)) switch (k) {
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
            ne(
              e,
              a,
              k,
              F
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), L != null) {
          if (c != null) throw Error(u(92));
          if ($(L) && 1 < L.length) throw Error(u(93));
          c = "" + L;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(G("" + c)), null;
      case "input":
        e.push(de("input")), F = L = k = c = null;
        for (h in i) if (S.call(i, h) && (I = i[h], I != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = I;
            break;
          case "defaultValue":
            k = I;
            break;
          case "checked":
            L = I;
            break;
          case "value":
            c = I;
            break;
          default:
            ne(e, a, h, I);
        }
        return L !== null ? ne(e, a, "checked", L) : F !== null && ne(e, a, "checked", F), c !== null ? ne(e, a, "value", c) : k !== null && ne(e, a, "value", k), e.push("/>"), null;
      case "menuitem":
        e.push(de("menuitem"));
        for (var We in i) if (S.call(i, We) && (c = i[We], c != null)) switch (We) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ne(e, a, We, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(de("title")), c = null;
        for (J in i) if (S.call(i, J) && (h = i[J], h != null)) switch (J) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ne(e, a, J, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(de(n)), h = c = null;
        for (F in i) if (S.call(i, F) && (k = i[F], k != null)) switch (F) {
          case "children":
            c = k;
            break;
          case "dangerouslySetInnerHTML":
            h = k;
            break;
          default:
            ne(e, a, F, k);
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
        for (var je in i) if (S.call(i, je) && (c = i[je], c != null)) switch (je) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            ne(e, a, je, c);
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
        for (I in i) if (S.call(i, I) && (k = i[I], k != null)) switch (I) {
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
            b(I) && typeof k != "function" && typeof k != "symbol" && e.push(" ", I, '="', G(k), '"');
        }
        return e.push(">"), W(e, h, c), c;
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
  var lr = /[<\u2028\u2029]/g;
  function Pt(e) {
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
  function ge(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Dt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(G(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(G(n)), e = !0), e);
  }
  var et = Object.assign, tt = Symbol.for("react.element"), Y = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), Be = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), xe = Symbol.for("react.legacy_hidden"), Nt = Symbol.for("react.default_value"), Ye = Symbol.iterator;
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case gt:
        return "Fragment";
      case Y:
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
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case j:
        return (e._context.displayName || "Context") + ".Provider";
      case he:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xt:
        return n = e.displayName || null, n !== null ? n : Ee(e.type) || "Memo";
      case oe:
        n = e._payload, e = e._init;
        try {
          return Ee(e(n));
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
  function _e(e) {
    var n = Te;
    n !== e && (n === null ? wt(e) : e === null ? Qt(n) : n.depth === e.depth ? le(n, e) : n.depth > e.depth ? Ze(n, e) : Ue(n, e), Te = e);
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
        var k = n[h];
        k = typeof k == "function" ? k.call(e, c, i, a) : k, k != null && (d ? (d = !1, c = et({}, c, k)) : et(c, k));
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
  var ot = Math.clz32 ? Math.clz32 : Ce, kt = Math.log, Tt = Math.LN2;
  function Ce(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (kt(e) / Tt | 0) | 0;
  }
  function Je(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Je, ce = null, Ht = null, we = null, U = null, it = !1, q = !1, ke = 0, Le = null, lt = 0;
  function Re() {
    if (ce === null) throw Error(u(321));
    return ce;
  }
  function $t() {
    if (0 < lt) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _t() {
    return U === null ? we === null ? (it = !1, we = U = $t()) : (it = !0, U = we) : U.next === null ? (it = !1, U = U.next = $t()) : (it = !0, U = U.next), U;
  }
  function Wt() {
    Ht = ce = null, q = !1, we = null, lt = 0, U = Le = null;
  }
  function at(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ct(e, n, i) {
    if (ce = Re(), U = _t(), it) {
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
    return e = e === at ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, U.memoizedState = e, e = U.queue = { last: null, dispatch: null }, e = e.dispatch = pe.bind(null, ce, e), [U.memoizedState, e];
  }
  function tr(e, n) {
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
    if (25 <= lt) throw Error(u(301));
    if (e === ce) if (q = !0, e = { action: i, next: null }, Le === null && (Le = /* @__PURE__ */ new Map()), i = Le.get(n), i === void 0) Le.set(n, e);
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
  var jt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return Re(), e._currentValue2;
  }, useMemo: tr, useReducer: Ct, useRef: function(e) {
    ce = Re(), U = _t();
    var n = U.memoizedState;
    return n === null ? (e = { current: e }, U.memoizedState = e) : n;
  }, useState: function(e) {
    return Ct(at, e);
  }, useInsertionEffect: st, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return tr(function() {
      return e;
    }, n);
  }, useImperativeHandle: st, useEffect: st, useDebugValue: st, useDeferredValue: function(e) {
    return Re(), e;
  }, useTransition: function() {
    return Re(), [
      !1,
      Rt
    ];
  }, useId: function() {
    var e = Ht.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - ot(e) - 1)).toString(32) + n;
    var i = ut;
    if (i === null) throw Error(u(404));
    return n = ke++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return Re(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, ut = null, He = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ae(e) {
    return console.error(e), null;
  }
  function Ke() {
  }
  function rr(e, n, i, a, d, c, h, k, F) {
    var I = [], L = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: L, pingedTasks: I, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Ae : d, onAllReady: Ke, onShellReady: h === void 0 ? Ke : h, onShellError: Ke, onFatalError: Ke }, i = ct(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = At(n, e, null, i, L, ze, null, er), I.push(e), n;
  }
  function At(e, n, i, a, d, c, h, k) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var F = { node: n, ping: function() {
      var I = e.pingedTasks;
      I.push(F), I.length === 1 && ar(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: k };
    return d.add(F), F;
  }
  function ct(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function pt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function A(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (ce = {}, Ht = n, ke = 0, e = i(a, d); q; ) q = !1, ke = 0, lt += 1, U = null, e = i(a, d);
    return Wt(), e;
  }
  function x(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var k in i) if (!(k in c)) throw Error(u(108, Ee(a) || "Unknown", k));
        a = et({}, h, i);
      }
      n.legacyContext = a, H(e, n, d), n.legacyContext = h;
    } else H(e, n, d);
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
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), zt(c, i, a, d), x(e, n, c, i);
    } else {
      c = rt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = ke !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) zt(d, i, a, c), x(e, n, d, i);
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
      switch (d = n.blockedSegment, c = ye(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Qe(h, i, a), Q(e, n, c), d.formatContext = h, i) {
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
            var k = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, F = ct(e, d.chunks.length, k, d.formatContext, !1, !1);
            d.children.push(F), d.lastPushedText = !1;
            var I = ct(e, 0, null, d.formatContext, !1, !1);
            I.parentFlushed = !0, n.blockedBoundary = k, n.blockedSegment = I;
            try {
              if (Q(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || I.lastPushedText && I.textEmbedded && I.chunks.push("<!-- -->"), I.status = 1, Pe(k, I), k.pendingTasks === 0) break e;
            } catch (L) {
              I.status = 4, k.forceClientRender = !0, k.errorDigest = pt(e, L);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = At(e, c, i, F, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case he:
          if (a = s(e, n, i.render, a, d), ke !== 0) {
            i = n.treeContext, n.treeContext = nt(i, 1, 0);
            try {
              H(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else H(e, n, a);
          return;
        case xt:
          i = i.type, a = T(i, a), B(e, n, i, a, d);
          return;
        case j:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = Te, Te = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, H(e, n, d), e = Te, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Nt ? e.context._defaultValue : a, e = Te = e.parent, n.context = e;
          return;
        case Be:
          a = a.children, a = a(i._currentValue2), H(e, n, a);
          return;
        case oe:
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
  function H(e, n, i) {
    if (n.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case tt:
          B(e, n, i.type, i.props, i.ref);
          return;
        case Y:
          throw Error(u(257));
        case oe:
          var a = i._init;
          i = a(i._payload), H(e, n, i);
          return;
      }
      if ($(i)) {
        re(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Ye && i[Ye] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
        if (i = a.next(), !i.done) {
          var d = [];
          do
            d.push(i.value), i = a.next();
          while (!i.done);
          re(e, n, d);
        }
        return;
      }
      throw e = Object.prototype.toString.call(i), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e));
    }
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Dt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Dt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function re(e, n, i) {
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
      if (Wt(), typeof F == "object" && F !== null && typeof F.then == "function") {
        i = F;
        var h = n.blockedSegment, k = ct(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(k), h.lastPushedText = !1, e = At(e, n.node, n.blockedBoundary, k, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, _e(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, _e(c), F;
    }
  }
  function be(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, $e(this, n, e);
  }
  function Z(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return Z(d, n, i);
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
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Pe(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(be, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Pe(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function ar(e) {
    if (e.status !== 2) {
      var n = Te, i = He.current;
      He.current = jt;
      var a = ut;
      ut = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], k = e, F = h.blockedSegment;
          if (F.status === 0) {
            _e(h.context);
            try {
              H(k, h, h.node), k.responseState.generateStaticMarkup || F.lastPushedText && F.textEmbedded && F.chunks.push("<!-- -->"), h.abortSet.delete(h), F.status = 1, $e(k, h.blockedBoundary, F);
            } catch (Oe) {
              if (Wt(), typeof Oe == "object" && Oe !== null && typeof Oe.then == "function") {
                var I = h.ping;
                Oe.then(I, I);
              } else {
                h.abortSet.delete(h), F.status = 4;
                var L = h.blockedBoundary, J = Oe, We = pt(k, J);
                if (L === null ? A(k, J) : (L.pendingTasks--, L.forceClientRender || (L.forceClientRender = !0, L.errorDigest = We, L.parentFlushed && k.clientRenderedBoundaries.push(L))), k.allPendingTasks--, k.allPendingTasks === 0) {
                  var je = k.onAllReady;
                  je();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && nr(e, e.destination);
      } catch (Oe) {
        pt(e, Oe), A(e, Oe);
      } finally {
        ut = a, He.current = i, i === jt && _e(n);
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
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = G(a), n.push(a), n.push('"')), n.push("></template>")), Vt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < a.pendingTasks) {
      a.rootSegmentID = e.nextSegmentId++, 0 < a.completedSegments.length && e.partialBoundaries.push(a);
      var d = e.responseState, c = d.nextSuspenseID++;
      return d = d.boundaryPrefix + c.toString(16), a = a.id = d, vt(n, e.responseState, a), Vt(e, n, i), n.push("<!--/$-->");
    }
    if (a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), vt(n, e.responseState, a.id), Vt(e, n, i), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), i = a.completedSegments, i.length !== 1) throw Error(u(391));
    return Gt(e, n, i[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function sr(e, n, i) {
    return yt(n, e.responseState, i.formatContext, i.id), Gt(e, n, i), Lt(n, i.formatContext);
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
        Gt(e, n, i), e.completedRootSegment = null;
        var a = e.responseState.bootstrapChunks;
        for (i = 0; i < a.length - 1; i++) n.push(a[i]);
        i < a.length && n.push(a[i]);
      }
      var d = e.clientRenderedBoundaries, c;
      for (c = 0; c < d.length; c++) {
        var h = d[c];
        a = n;
        var k = e.responseState, F = h.id, I = h.errorDigest, L = h.errorMessage, J = h.errorComponentStack;
        if (a.push(k.startInlineScript), k.sentClientRenderFunction ? a.push('$RX("') : (k.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), F === null) throw Error(u(395));
        if (a.push(F), a.push('"'), I || L || J) {
          a.push(",");
          var We = Pt(I || "");
          a.push(We);
        }
        if (L || J) {
          a.push(",");
          var je = Pt(L || "");
          a.push(je);
        }
        if (J) {
          a.push(",");
          var Oe = Pt(J);
          a.push(Oe);
        }
        if (!a.push(")<\/script>")) {
          e.destination = null, c++, d.splice(0, c);
          return;
        }
      }
      d.splice(0, c);
      var qt = e.completedBoundaries;
      for (c = 0; c < qt.length; c++) if (!ur(e, n, qt[c])) {
        e.destination = null, c++, qt.splice(0, c);
        return;
      }
      qt.splice(0, c);
      var ft = e.partialBoundaries;
      for (c = 0; c < ft.length; c++) {
        var fr = ft[c];
        e: {
          d = e, h = n;
          var Xt = fr.completedSegments;
          for (k = 0; k < Xt.length; k++) if (!cr(d, h, fr, Xt[k])) {
            k++, Xt.splice(0, k);
            var wr = !1;
            break e;
          }
          Xt.splice(0, k), wr = !0;
        }
        if (!wr) {
          e.destination = null, c++, ft.splice(0, c);
          return;
        }
      }
      ft.splice(0, c);
      var bt = e.completedBoundaries;
      for (c = 0; c < bt.length; c++) if (!ur(e, n, bt[c])) {
        e.destination = null, c++, bt.splice(0, c);
        return;
      }
      bt.splice(0, c);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function xr(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return Z(a, e, n);
      }), i.clear(), e.destination !== null && nr(e, e.destination);
    } catch (a) {
      pt(e, a), A(e, a);
    }
  }
  function Er() {
  }
  function pr(e, n, i, a) {
    var d = !1, c = null, h = "", k = { push: function(I) {
      return I !== null && (h += I), !0;
    }, destroy: function(I) {
      d = !0, c = I;
    } }, F = !1;
    if (e = rr(e, ge(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Er, void 0, function() {
      F = !0;
    }), ar(e), xr(e, a), e.status === 1) e.status = 2, k.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = k;
      try {
        nr(e, k);
      } catch (I) {
        pt(e, I), A(e, I);
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
var Nr = {};
var Bn;
function Ho() {
  if (Bn) return Nr;
  Bn = 1;
  var v = Sr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = null, _ = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < _ && (t.enqueue(new Uint8Array(S.buffer, 0, _)), S = new Uint8Array(512), _ = 0), t.enqueue(r);
    else {
      var o = S.length - _;
      o < r.length && (o === 0 ? t.enqueue(S) : (S.set(r.subarray(0, o), _), t.enqueue(S), r = r.subarray(o)), S = new Uint8Array(512), _ = 0), S.set(r, _), _ += r.length;
    }
  }
  function C(t, r) {
    return y(t, r), !0;
  }
  function b(t) {
    S && 0 < _ && (t.enqueue(new Uint8Array(S.buffer, 0, _)), S = null, _ = 0);
  }
  var O = new TextEncoder();
  function w(t) {
    return O.encode(t);
  }
  function g(t) {
    return O.encode(t);
  }
  function ee(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var z = Object.prototype.hasOwnProperty, fe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, G = {};
  function ht(t) {
    return z.call(G, t) ? !0 : z.call(ve, t) ? !1 : fe.test(t) ? G[t] = !0 : (ve[t] = !0, !1);
  }
  function te(t, r, o, l, f, p, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = m;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    $[t] = new te(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    $[r] = new te(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    $[t] = new te(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    $[t] = new te(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    $[t] = new te(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    $[t] = new te(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    $[t] = new te(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    $[t] = new te(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    $[t] = new te(t, 5, !1, t.toLowerCase(), null, !1, !1);
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
    $[r] = new te(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(ae, Qe);
    $[r] = new te(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(ae, Qe);
    $[r] = new te(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    $[t] = new te(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    $[t] = new te(t, 1, !1, t.toLowerCase(), null, !0, !0);
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
  var ne = /["'&<>]/;
  function W(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = ne.exec(t);
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
  var ir = /([A-Z])/g, Mt = /^ms-/, It = Array.isArray, Kt = g("<script>"), de = g("<\/script>"), ye = g('<script src="'), vt = g('<script type="module" src="'), yt = g('" async=""><\/script>'), Lt = /(<\/|<)(s)(cript)/gi;
  function lr(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Pt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Kt : g('<script nonce="' + W(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, w(("" + o).replace(Lt, lr)), de), l !== void 0) for (o = 0; o < l.length; o++) p.push(ye, w(W(l[o])), yt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(vt, w(W(f[l])), yt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: g(t + "P:"), segmentPrefix: g(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ge(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Dt(t) {
    return ge(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function et(t, r, o) {
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
  var tt = g("<!-- -->");
  function Y(t, r, o, l) {
    return r === "" ? l : (l && t.push(tt), t.push(w(W(r))), !0);
  }
  var gt = /* @__PURE__ */ new Map(), K = g(' style="'), St = g(":"), j = g(";");
  function Be(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (z.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = w(W(l));
          f = w(W(("" + f).trim()));
        } else {
          p = l;
          var m = gt.get(p);
          m !== void 0 || (m = g(W(p.replace(ir, "-$1").toLowerCase().replace(Mt, "-ms-"))), gt.set(p, m)), p = m, f = typeof f == "number" ? f === 0 || z.call(ie, l) ? w("" + f) : w(f + "px") : w(W(("" + f).trim()));
        }
        r ? (r = !1, t.push(K, p, St, f)) : t.push(j, p, St, f);
      }
    }
    r || t.push(Se);
  }
  var he = g(" "), Ie = g('="'), Se = g('"'), xt = g('=""');
  function oe(t, r, o, l) {
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
      if (r = $.hasOwnProperty(o) ? $[o] : null, r !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (o = w(r.attributeName), r.type) {
          case 3:
            l && t.push(he, o, xt);
            break;
          case 4:
            l === !0 ? t.push(he, o, xt) : l !== !1 && t.push(he, o, Ie, w(W(l)), Se);
            break;
          case 5:
            isNaN(l) || t.push(he, o, Ie, w(W(l)), Se);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(he, o, Ie, w(W(l)), Se);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(he, o, Ie, w(W(l)), Se);
        }
      } else if (ht(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(he, w(o), Ie, w(W(l)), Se);
      }
    }
  }
  var se = g(">"), Et = g("/>");
  function xe(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(w("" + r));
    }
  }
  function Nt(t) {
    var r = "";
    return v.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ye = g(' selected=""');
  function Ee(t, r, o, l) {
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
          oe(t, l, p, m);
      }
    }
    return t.push(se), xe(t, f, o), typeof o == "string" ? (t.push(w(W(o))), null) : o;
  }
  var ze = g(`
`), rt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Te = /* @__PURE__ */ new Map();
  function le(t) {
    var r = Te.get(t);
    if (r === void 0) {
      if (!rt.test(t)) throw Error(u(65, t));
      r = g("<" + t), Te.set(t, r);
    }
    return r;
  }
  var Qt = g("<!DOCTYPE html>");
  function wt(t, r, o, l, f) {
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
              oe(t, l, P, E);
          }
        }
        return t.push(se), xe(t, m, p), p;
      case "option":
        m = f.selectedValue, t.push(le("option"));
        var M = E = null, N = null, P = null;
        for (p in o) if (z.call(o, p)) {
          var X = o[p];
          if (X != null) switch (p) {
            case "children":
              E = X;
              break;
            case "selected":
              N = X;
              break;
            case "dangerouslySetInnerHTML":
              P = X;
              break;
            case "value":
              M = X;
            default:
              oe(t, l, p, X);
          }
        }
        if (m != null) if (o = M !== null ? "" + M : Nt(E), It(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(Ye);
              break;
            }
        } else "" + m === o && t.push(Ye);
        else N && t.push(Ye);
        return t.push(se), xe(t, P, E), E;
      case "textarea":
        t.push(le("textarea")), P = m = p = null;
        for (E in o) if (z.call(o, E) && (M = o[E], M != null)) switch (E) {
          case "children":
            P = M;
            break;
          case "value":
            p = M;
            break;
          case "defaultValue":
            m = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            oe(t, l, E, M);
        }
        if (p === null && m !== null && (p = m), t.push(se), P != null) {
          if (p != null) throw Error(u(92));
          if (It(P) && 1 < P.length) throw Error(u(93));
          p = "" + P;
        }
        return typeof p == "string" && p[0] === `
` && t.push(ze), p !== null && t.push(w(W("" + p))), null;
      case "input":
        t.push(le("input")), M = P = E = p = null;
        for (m in o) if (z.call(o, m) && (N = o[m], N != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            M = N;
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
            oe(t, l, m, N);
        }
        return P !== null ? oe(
          t,
          l,
          "checked",
          P
        ) : M !== null && oe(t, l, "checked", M), p !== null ? oe(t, l, "value", p) : E !== null && oe(t, l, "value", E), t.push(Et), null;
      case "menuitem":
        t.push(le("menuitem"));
        for (var Me in o) if (z.call(o, Me) && (p = o[Me], p != null)) switch (Me) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            oe(t, l, Me, p);
        }
        return t.push(se), null;
      case "title":
        t.push(le("title")), p = null;
        for (X in o) if (z.call(o, X) && (m = o[X], m != null)) switch (X) {
          case "children":
            p = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            oe(t, l, X, m);
        }
        return t.push(se), p;
      case "listing":
      case "pre":
        t.push(le(r)), m = p = null;
        for (M in o) if (z.call(o, M) && (E = o[M], E != null)) switch (M) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            m = E;
            break;
          default:
            oe(t, l, M, E);
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
            oe(t, l, Ve, p);
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
        return f.insertionMode === 0 && t.push(Qt), Ee(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return Ee(t, o, r, l);
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
            ht(N) && typeof E != "function" && typeof E != "symbol" && t.push(he, w(N), Ie, w(W(E)), Se);
        }
        return t.push(se), xe(t, m, p), p;
    }
  }
  var Ze = g("</"), Ue = g(">"), _e = g('<template id="'), Bt = g('"></template>'), zt = g("<!--$-->"), er = g('<!--$?--><template id="'), nt = g('"></template>'), ot = g("<!--$!-->"), kt = g("<!--/$-->"), Tt = g("<template"), Ce = g('"'), Je = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Ut = g("></template>");
  function ce(t, r, o) {
    if (y(t, er), o === null) throw Error(u(395));
    return y(t, o), C(t, nt);
  }
  var Ht = g('<div hidden id="'), we = g('">'), U = g("</div>"), it = g('<svg aria-hidden="true" style="display:none" id="'), q = g('">'), ke = g("</svg>"), Le = g('<math aria-hidden="true" style="display:none" id="'), lt = g('">'), Re = g("</math>"), $t = g('<table hidden id="'), _t = g('">'), Wt = g("</table>"), at = g('<table hidden><tbody id="'), Ct = g('">'), tr = g("</tbody></table>"), pe = g('<table hidden><tr id="'), Rt = g('">'), st = g("</tr></table>"), jt = g('<table hidden><colgroup id="'), ut = g('">'), He = g("</colgroup></table>");
  function Ae(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, we);
      case 2:
        return y(t, it), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, q);
      case 3:
        return y(t, Le), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, lt);
      case 4:
        return y(t, $t), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, _t);
      case 5:
        return y(t, at), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, Ct);
      case 6:
        return y(t, pe), y(t, r.segmentPrefix), y(t, w(l.toString(16))), C(t, Rt);
      case 7:
        return y(
          t,
          jt
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
        return C(t, ke);
      case 3:
        return C(t, Re);
      case 4:
        return C(t, Wt);
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
  var rr = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), At = g('$RS("'), ct = g('","'), pt = g('")<\/script>'), A = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = g('$RC("'), x = g('","'), T = g('")<\/script>'), B = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), H = g('$RX("'), re = g('"'), Q = g(")<\/script>"), be = g(","), Z = /[<\u2028\u2029]/g;
  function Pe(t) {
    return JSON.stringify(t).replace(Z, function(r) {
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
  var $e = Object.assign, ar = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), sr = Symbol.for("react.strict_mode"), ur = Symbol.for("react.profiler"), cr = Symbol.for("react.provider"), nr = Symbol.for("react.context"), xr = Symbol.for("react.forward_ref"), Er = Symbol.for("react.suspense"), pr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function k(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Gt:
        return "Fragment";
      case Vt:
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
  function I(t, r) {
    if (t = t.contextTypes, !t) return F;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var L = null;
  function J(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(u(401));
      } else {
        if (o === null) throw Error(u(401));
        J(t, o);
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
  function Oe(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? J(t, r) : Oe(t, r);
  }
  function qt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? J(t, o) : qt(t, o), r.context._currentValue = r.value;
  }
  function ft(t) {
    var r = L;
    r !== t && (r === null ? je(t) : t === null ? We(r) : r.depth === t.depth ? J(r, t) : r.depth > t.depth ? Oe(r, t) : qt(r, t), L = t);
  }
  var fr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function Xt(t, r, o, l) {
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
  var kr = Math.clz32 ? Math.clz32 : Yn, qn = Math.log, Xn = Math.LN2;
  function Yn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (qn(t) / Xn | 0) | 0;
  }
  function Zn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Jn = typeof Object.is == "function" ? Object.is : Zn, dt = null, Hr = null, Tr = null, V = null, dr = !1, _r = !1, hr = 0, Ot = null, Cr = 0;
  function Yt() {
    if (dt === null) throw Error(u(321));
    return dt;
  }
  function un() {
    if (0 < Cr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $r() {
    return V === null ? Tr === null ? (dr = !1, Tr = V = un()) : (dr = !0, V = Tr) : V.next === null ? (dr = !1, V = V.next = un()) : (dr = !0, V = V.next), V;
  }
  function Wr() {
    Hr = dt = null, _r = !1, Tr = null, Cr = 0, V = Ot = null;
  }
  function cn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function pn(t, r, o) {
    if (dt = Yt(), V = $r(), dr) {
      var l = V.queue;
      if (r = l.dispatch, Ot !== null && (o = Ot.get(l), o !== void 0)) {
        Ot.delete(l), l = V.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return V.memoizedState = l, [l, r];
      }
      return [V.memoizedState, r];
    }
    return t = t === cn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, V.memoizedState = t, t = V.queue = { last: null, dispatch: null }, t = t.dispatch = Kn.bind(null, dt, t), [V.memoizedState, t];
  }
  function fn(t, r) {
    if (dt = Yt(), V = $r(), r = r === void 0 ? null : r, V !== null) {
      var o = V.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!Jn(r[f], l[f])) {
            l = !1;
            break e;
          }
          l = !0;
        }
        if (l) return o[0];
      }
    }
    return t = t(), V.memoizedState = [t, r], t;
  }
  function Kn(t, r, o) {
    if (25 <= Cr) throw Error(u(301));
    if (t === dt) if (_r = !0, t = { action: o, next: null }, Ot === null && (Ot = /* @__PURE__ */ new Map()), o = Ot.get(r), o === void 0) Ot.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function Qn() {
    throw Error(u(394));
  }
  function Rr() {
  }
  var dn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Yt(), t._currentValue;
  }, useMemo: fn, useReducer: pn, useRef: function(t) {
    dt = Yt(), V = $r();
    var r = V.memoizedState;
    return r === null ? (t = { current: t }, V.memoizedState = t) : r;
  }, useState: function(t) {
    return pn(cn, t);
  }, useInsertionEffect: Rr, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return fn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Rr, useEffect: Rr, useDebugValue: Rr, useDeferredValue: function(t) {
    return Yt(), t;
  }, useTransition: function() {
    return Yt(), [!1, Qn];
  }, useId: function() {
    var t = Hr.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - kr(t) - 1)).toString(32) + r;
    var o = Ar;
    if (o === null) throw Error(u(404));
    return r = hr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Yt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, Ar = null, jr = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function eo(t) {
    return console.error(t), null;
  }
  function mr() {
  }
  function to(t, r, o, l, f, p, m, E, M) {
    var N = [], P = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: P, pingedTasks: N, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? eo : f, onAllReady: p === void 0 ? mr : p, onShellReady: m === void 0 ? mr : m, onShellError: E === void 0 ? mr : E, onFatalError: M === void 0 ? mr : M }, o = br(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Vr(r, t, null, o, P, F, null, wr), N.push(t), r;
  }
  function Vr(t, r, o, l, f, p, m, E) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var M = { node: r, ping: function() {
      var N = t.pingedTasks;
      N.push(M), N.length === 1 && xn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: m, treeContext: E };
    return f.add(M), M;
  }
  function br(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function vr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Or(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, ee(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function hn(t, r, o, l, f) {
    for (dt = {}, Hr = r, hr = 0, t = o(l, f); _r; ) _r = !1, hr = 0, Cr += 1, V = null, t = o(l, f);
    return Wr(), t;
  }
  function mn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var E in o) if (!(E in p)) throw Error(u(108, k(l) || "Unknown", E));
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
      f = I(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), Xt(p, o, l, f), mn(t, r, p, o);
    } else {
      p = I(o, r.legacyContext), f = hn(t, r, o, l, p);
      var m = hr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) Xt(f, o, l, p), mn(t, r, f, o);
      else if (m) {
        l = r.treeContext, r.treeContext = bt(l, 1, 0);
        try {
          Fe(t, r, f);
        } finally {
          r.treeContext = l;
        }
      } else Fe(t, r, f);
    }
    else if (typeof o == "string") {
      switch (f = r.blockedSegment, p = wt(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, m = f.formatContext, f.formatContext = et(m, o, l), qr(t, r, p), f.formatContext = m, o) {
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
        case Gt:
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
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, M = br(t, f.chunks.length, E, f.formatContext, !1, !1);
            f.children.push(M), f.lastPushedText = !1;
            var N = br(t, 0, null, f.formatContext, !1, !1);
            N.parentFlushed = !0, r.blockedBoundary = E, r.blockedSegment = N;
            try {
              if (qr(
                t,
                r,
                l
              ), N.lastPushedText && N.textEmbedded && N.chunks.push(tt), N.status = 1, Fr(E, N), E.pendingTasks === 0) break e;
            } catch (P) {
              N.status = 4, E.forceClientRender = !0, E.errorDigest = vr(t, P);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Vr(t, p, o, M, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case xr:
          if (l = hn(t, r, o.render, l, f), hr !== 0) {
            o = r.treeContext, r.treeContext = bt(o, 1, 0);
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
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, m = L, L = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Fe(t, r, f), t = L, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = L = t.parent, r.context = t;
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
        case Vt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Fe(t, r, o);
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
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = Y(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = Y(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function yn(t, r, o) {
    for (var l = o.length, f = 0; f < l; f++) {
      var p = r.treeContext;
      r.treeContext = bt(p, l, f);
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
    } catch (M) {
      if (Wr(), typeof M == "object" && M !== null && typeof M.then == "function") {
        o = M;
        var m = r.blockedSegment, E = br(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(E), m.lastPushedText = !1, t = Vr(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p), M;
    }
  }
  function ro(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, Sn(this, r, t);
  }
  function gn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return gn(f, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Fr(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Fr(t, o);
    } else t.completedSegments.push(r);
  }
  function Sn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = mr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Fr(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(ro, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Fr(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function xn(t) {
    if (t.status !== 2) {
      var r = L, o = jr.current;
      jr.current = dn;
      var l = Ar;
      Ar = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var m = f[p], E = t, M = m.blockedSegment;
          if (M.status === 0) {
            ft(m.context);
            try {
              Fe(E, m, m.node), M.lastPushedText && M.textEmbedded && M.chunks.push(tt), m.abortSet.delete(m), M.status = 1, Sn(E, m.blockedBoundary, M);
            } catch (Ge) {
              if (Wr(), typeof Ge == "object" && Ge !== null && typeof Ge.then == "function") {
                var N = m.ping;
                Ge.then(N, N);
              } else {
                m.abortSet.delete(m), M.status = 4;
                var P = m.blockedBoundary, X = Ge, Me = vr(E, X);
                if (P === null ? Or(E, X) : (P.pendingTasks--, P.forceClientRender || (P.forceClientRender = !0, P.errorDigest = Me, P.parentFlushed && E.clientRenderedBoundaries.push(P))), E.allPendingTasks--, E.allPendingTasks === 0) {
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
        vr(t, Ge), Or(t, Ge);
      } finally {
        Ar = l, jr.current = o, o === dn && ft(r);
      }
    }
  }
  function Mr(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, _e), y(r, t.placeholderPrefix), t = w(l.toString(16)), y(r, t), C(r, Bt);
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
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, C(r, ot), y(r, Tt), l && (y(r, Je), y(r, w(W(l))), y(r, Ce)), C(r, Ut), Mr(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = g(f.boundaryPrefix + p.toString(16)), l = l.id = f, ce(r, t.responseState, l), Mr(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ce(r, t.responseState, l.id), Mr(t, r, o);
    else {
      if (C(r, zt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Ir(t, r, o[0]);
    }
    return C(r, kt);
  }
  function En(t, r, o) {
    return Ae(r, t.responseState, o.formatContext, o.id), Ir(t, r, o), Ke(r, o.formatContext);
  }
  function wn(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) kn(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, A)), l === null) throw Error(u(395));
    return o = w(o.toString(16)), y(r, l), y(r, x), y(r, t.segmentPrefix), y(r, o), C(r, T);
  }
  function kn(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return En(t, r, l);
    }
    return En(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, At) : (t.sentCompleteSegmentFunction = !0, y(r, rr)), y(r, t.segmentPrefix), f = w(f.toString(16)), y(r, f), y(r, ct), y(r, t.placeholderPrefix), y(r, f), C(r, pt);
  }
  function Xr(t, r) {
    S = new Uint8Array(512), _ = 0;
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
        var E = t.responseState, M = m.id, N = m.errorDigest, P = m.errorMessage, X = m.errorComponentStack;
        if (y(l, E.startInlineScript), E.sentClientRenderFunction ? y(l, H) : (E.sentClientRenderFunction = !0, y(
          l,
          B
        )), M === null) throw Error(u(395));
        y(l, M), y(l, re), (N || P || X) && (y(l, be), y(l, w(Pe(N || "")))), (P || X) && (y(l, be), y(l, w(Pe(P || "")))), X && (y(l, be), y(l, w(Pe(X)))), C(l, Q);
      }
      f.splice(0, p);
      var Me = t.completedBoundaries;
      for (p = 0; p < Me.length; p++) wn(t, r, Me[p]);
      Me.splice(0, p), b(r), S = new Uint8Array(512), _ = 0;
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
      b(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function Tn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return gn(l, t, r);
      }), o.clear(), t.destination !== null && Xr(t, t.destination);
    } catch (l) {
      vr(t, l), Or(t, l);
    }
  }
  return Nr.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, m = new Promise(function(P, X) {
        p = P, f = X;
      }), E = to(t, Pt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Dt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var P = new ReadableStream({ type: "bytes", pull: function(X) {
          if (E.status === 1) E.status = 2, ee(X, E.fatalError);
          else if (E.status !== 2 && E.destination === null) {
            E.destination = X;
            try {
              Xr(E, X);
            } catch (Me) {
              vr(E, Me), Or(E, Me);
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
        var M = r.signal, N = function() {
          Tn(E, M.reason), M.removeEventListener("abort", N);
        };
        M.addEventListener("abort", N);
      }
      xn(E);
    });
  }, Nr.version = "18.3.1", Nr;
}
var or, Vn;
or = Uo(), Vn = Ho();
or.version;
or.renderToString;
or.renderToStaticMarkup;
or.renderToNodeStream;
or.renderToStaticNodeStream;
Vn.renderToReadableStream;
const $o = "staticMarkup";
function Wo() {
  const u = no().indexOf($o) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const jo = ({ gaData: v, prefix: u = "", children: S }) => {
  const { isReact: _ } = Wo(), { onClick: y, ...C } = S.props;
  if (_)
    return Sr.cloneElement(S, {
      ...C,
      onClick: (w) => (zo(v), y ? y(w) : !0)
    });
  let b = "";
  ["input", "header", "header-input"].includes(u) && (b = `-${u}`);
  const O = {
    [`data-ga${b}`]: v.text,
    [`data-ga${b}-name`]: v.name,
    [`data-ga${b}-event`]: v.event,
    [`data-ga${b}-action`]: v.action,
    [`data-ga${b}-type`]: v.type,
    [`data-ga${b}-region`]: v.region,
    [`data-ga${b}-section`]: v.section,
    [`data-ga${b}-component`]: v.component
  };
  return Sr.cloneElement(S, {
    ...C,
    onClick: y,
    ...O
  });
}, Vo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Gn = ({
  label: v,
  cardTitle: u,
  gaData: S,
  ariaLabel: _,
  block: y,
  color: C,
  disabled: b,
  element: O,
  href: w,
  icon: g,
  innerRef: ee,
  onClick: z,
  size: fe,
  classes: ve,
  target: G,
  ...ht
}) => {
  const te = Rn("btn", {
    [`btn-${C}`]: !0,
    "btn-md": fe === "small",
    "btn-sm": fe === "xsmall",
    "btn-block": y,
    disabled: b
  });
  let $ = O;
  return w && O === "button" && ($ = "a"), /* @__PURE__ */ Zr.jsx(
    jo,
    {
      gaData: {
        ...Vo,
        section: u,
        // @deprecated - remove at some point
        ...S,
        text: v
      },
      children: /* @__PURE__ */ Zr.jsxs(
        $,
        {
          type: $ === "button" && z ? "button" : void 0,
          ...ht,
          className: Rn(ve) || te,
          href: w,
          ref: ee,
          onClick: z,
          "aria-label": _,
          target: $ === "a" ? G : null,
          children: [
            g && /* @__PURE__ */ Zr.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
            v
          ]
        }
      )
    }
  );
};
Gn.propTypes = {
  /**
   * Button label
   */
  label: R.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: R.string,
  /**
   * Google Analytics event data
   */
  gaData: uo,
  /**
    ARIA label for accessibility
  */
  ariaLabel: R.string,
  /**
    Render button as a block-button?
  */
  block: R.bool,
  /**
    Button background color
  */
  color: R.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: R.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: R.oneOfType([
    R.func,
    R.string,
    R.shape({ $$typeof: R.symbol, render: R.func }),
    R.arrayOf(
      R.oneOfType([
        R.func,
        R.string,
        R.shape({ $$typeof: R.symbol, render: R.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: R.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: R.arrayOf(R.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: R.oneOfType([
    R.object,
    R.func,
    R.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: R.func,
  /**
    Button size
  */
  size: R.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: R.arrayOf(R.string),
  /**
   Link target type
   */
  target: R.oneOf(["_blank", "_self", "_top", "_parent"])
};
Gn.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  block: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "default",
  classes: void 0,
  target: "_self"
};
export {
  Gn as Button
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
