import xr, { useId as ao, useState as so } from "react";
function $n(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Hn = { exports: {} }, gr = {};
var An;
function uo() {
  if (An) return gr;
  An = 1;
  var v = xr, u = Symbol.for("react.element"), S = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(O, w, g) {
    var ee, z = {}, de = null, ye = null;
    g !== void 0 && (de = "" + g), w.key !== void 0 && (de = "" + w.key), w.ref !== void 0 && (ye = w.ref);
    for (ee in w) T.call(w, ee) && !_.hasOwnProperty(ee) && (z[ee] = w[ee]);
    if (O && O.defaultProps) for (ee in w = O.defaultProps, w) z[ee] === void 0 && (z[ee] = w[ee]);
    return { $$typeof: u, type: O, key: de, ref: ye, props: z, _owner: y.current };
  }
  return gr.Fragment = S, gr.jsx = A, gr.jsxs = A, gr;
}
Hn.exports = uo();
var pe = Hn.exports, jn = { exports: {} };
(function(v) {
  (function() {
    var u = {}.hasOwnProperty;
    function S() {
      for (var _ = "", A = 0; A < arguments.length; A++) {
        var O = arguments[A];
        O && (_ = y(_, T(O)));
      }
      return _;
    }
    function T(_) {
      if (typeof _ == "string" || typeof _ == "number")
        return _;
      if (typeof _ != "object")
        return "";
      if (Array.isArray(_))
        return S.apply(null, _);
      if (_.toString !== Object.prototype.toString && !_.toString.toString().includes("[native code]"))
        return _.toString();
      var A = "";
      for (var O in _)
        u.call(_, O) && _[O] && (A = y(A, O));
      return A;
    }
    function y(_, A) {
      return A ? _ ? _ + " " + A : _ + A : _;
    }
    v.exports ? (S.default = S, v.exports = S) : window.classNames = S;
  })();
})(jn);
var co = jn.exports;
const ln = /* @__PURE__ */ $n(co);
var Wn = { exports: {} }, Jr, On;
function fo() {
  if (On) return Jr;
  On = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jr = v, Jr;
}
var Kr, Fn;
function po() {
  if (Fn) return Kr;
  Fn = 1;
  var v = fo();
  function u() {
  }
  function S() {
  }
  return S.resetWarningCache = u, Kr = function() {
    function T(A, O, w, g, ee, z) {
      if (z !== v) {
        var de = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw de.name = "Invariant Violation", de;
      }
    }
    T.isRequired = T;
    function y() {
      return T;
    }
    var _ = {
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
      checkPropTypes: S,
      resetWarningCache: u
    };
    return _.PropTypes = _, _;
  }, Kr;
}
Wn.exports = po()();
var ho = Wn.exports;
const R = /* @__PURE__ */ $n(ho);
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
const Vn = R.shape({
  text: R.string,
  name: R.string,
  event: R.string,
  action: R.string,
  type: R.string,
  region: R.string,
  section: R.string,
  component: R.string
});
function Mt(v) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Mt(v);
}
function an(v, u) {
  return an = Object.setPrototypeOf || function(T, y) {
    return T.__proto__ = y, T;
  }, an(v, u);
}
function mo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zr(v, u, S) {
  return mo() ? zr = Reflect.construct : zr = function(y, _, A) {
    var O = [null];
    O.push.apply(O, _);
    var w = Function.bind.apply(y, O), g = new w();
    return A && an(g, A.prototype), g;
  }, zr.apply(null, arguments);
}
function Ye(v) {
  return vo(v) || yo(v) || go(v) || So();
}
function vo(v) {
  if (Array.isArray(v)) return sn(v);
}
function yo(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function go(v, u) {
  if (v) {
    if (typeof v == "string") return sn(v, u);
    var S = Object.prototype.toString.call(v).slice(8, -1);
    if (S === "Object" && v.constructor && (S = v.constructor.name), S === "Map" || S === "Set") return Array.from(v);
    if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return sn(v, u);
  }
}
function sn(v, u) {
  (u == null || u > v.length) && (u = v.length);
  for (var S = 0, T = new Array(u); S < u; S++) T[S] = v[S];
  return T;
}
function So() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var xo = Object.hasOwnProperty, Mn = Object.setPrototypeOf, Eo = Object.isFrozen, wo = Object.getPrototypeOf, ko = Object.getOwnPropertyDescriptor, ve = Object.freeze, De = Object.seal, To = Object.create, Gn = typeof Reflect < "u" && Reflect, $r = Gn.apply, un = Gn.construct;
$r || ($r = function(u, S, T) {
  return u.apply(S, T);
});
ve || (ve = function(u) {
  return u;
});
De || (De = function(u) {
  return u;
});
un || (un = function(u, S) {
  return zr(u, Ye(S));
});
var _o = Be(Array.prototype.forEach), In = Be(Array.prototype.pop), Sr = Be(Array.prototype.push), Ur = Be(String.prototype.toLowerCase), Qr = Be(String.prototype.toString), Ln = Be(String.prototype.match), Xe = Be(String.prototype.replace), Co = Be(String.prototype.indexOf), Ro = Be(String.prototype.trim), ue = Be(RegExp.prototype.test), en = bo(TypeError);
function Be(v) {
  return function(u) {
    for (var S = arguments.length, T = new Array(S > 1 ? S - 1 : 0), y = 1; y < S; y++)
      T[y - 1] = arguments[y];
    return $r(v, u, T);
  };
}
function bo(v) {
  return function() {
    for (var u = arguments.length, S = new Array(u), T = 0; T < u; T++)
      S[T] = arguments[T];
    return un(v, S);
  };
}
function N(v, u, S) {
  var T;
  S = (T = S) !== null && T !== void 0 ? T : Ur, Mn && Mn(v, null);
  for (var y = u.length; y--; ) {
    var _ = u[y];
    if (typeof _ == "string") {
      var A = S(_);
      A !== _ && (Eo(u) || (u[y] = A), _ = A);
    }
    v[_] = !0;
  }
  return v;
}
function Jt(v) {
  var u = To(null), S;
  for (S in v)
    $r(xo, v, [S]) === !0 && (u[S] = v[S]);
  return u;
}
function Nr(v, u) {
  for (; v !== null; ) {
    var S = ko(v, u);
    if (S) {
      if (S.get)
        return Be(S.get);
      if (typeof S.value == "function")
        return Be(S.value);
    }
    v = wo(v);
  }
  function T(y) {
    return console.warn("fallback value for", y), null;
  }
  return T;
}
var Pn = ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), tn = ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rn = ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ao = ve(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), nn = ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Oo = ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nn = ve(["#text"]), Dn = ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), on = ve(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Bn = ve(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Fo = De(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Mo = De(/<%[\w\W]*|[\w\W]*%>/gm), Io = De(/\${[\w\W]*}/gm), Lo = De(/^data-[\-\w.\u00B7-\uFFFF]/), Po = De(/^aria-[\-\w]+$/), No = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Do = De(/^(?:\w+script|data):/i), Bo = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), zo = De(/^html$/i), Uo = De(/^[a-z][.\w]*(-[.\w]+)+$/i), $o = function() {
  return typeof window > "u" ? null : window;
}, Ho = function(u, S) {
  if (Mt(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var T = null, y = "data-tt-policy-suffix";
  S.currentScript && S.currentScript.hasAttribute(y) && (T = S.currentScript.getAttribute(y));
  var _ = "dompurify" + (T ? "#" + T : "");
  try {
    return u.createPolicy(_, {
      createHTML: function(O) {
        return O;
      },
      createScriptURL: function(O) {
        return O;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + _ + " could not be created."), null;
  }
};
function qn() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $o(), u = function(s) {
    return qn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !v || !v.document || v.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var S = v.document, T = v.document, y = v.DocumentFragment, _ = v.HTMLTemplateElement, A = v.Node, O = v.Element, w = v.NodeFilter, g = v.NamedNodeMap, ee = g === void 0 ? v.NamedNodeMap || v.MozNamedAttrMap : g, z = v.HTMLFormElement, de = v.DOMParser, ye = v.trustedTypes, G = O.prototype, mt = Nr(G, "cloneNode"), te = Nr(G, "nextSibling"), H = Nr(G, "childNodes"), ae = Nr(G, "parentNode");
  if (typeof _ == "function") {
    var et = T.createElement("template");
    et.content && et.content.ownerDocument && (T = et.content.ownerDocument);
  }
  var ie = Ho(ye, S), vt = ie ? ie.createHTML("") : "", ne = T, j = ne.implementation, lr = ne.createNodeIterator, It = ne.createDocumentFragment, Lt = ne.getElementsByTagName, Qt = S.importNode, he = {};
  try {
    he = Jt(T).documentMode ? T.documentMode : {};
  } catch {
  }
  var ge = {};
  u.isSupported = typeof ae == "function" && j && j.createHTMLDocument !== void 0 && he !== 9;
  var yt = Fo, gt = Mo, Pt = Io, ar = Lo, Nt = Po, Se = Do, Dt = Bo, tt = Uo, rt = No, Y = null, St = N({}, [].concat(Ye(Pn), Ye(tn), Ye(rn), Ye(nn), Ye(Nn))), K = null, xt = N({}, [].concat(Ye(Dn), Ye(on), Ye(Bn), Ye(Dr))), W = Object.seal(Object.create(null, {
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
  })), ze = null, me = null, Le = !0, xe = !0, Et = !1, oe = !0, se = !1, wt = !0, Ee = !1, Bt = !1, Ze = !1, we = !1, Ue = !1, nt = !1, _e = !0, le = !1, er = "user-content-", kt = !0, Je = !1, $e = {}, Ce = null, zt = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Ut = null, tr = N({}, ["audio", "video", "img", "source", "image", "track"]), ot = null, it = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", _t = "http://www.w3.org/2000/svg", Re = "http://www.w3.org/1999/xhtml", Ke = Re, $t = !1, ce = null, Ht = N({}, [Tt, _t, Re], Qr), ke, U = ["application/xhtml+xml", "text/html"], lt = "text/html", q, Te = null, Pe = T.createElement("form"), at = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, be = function(s) {
    Te && Te === s || ((!s || Mt(s) !== "object") && (s = {}), s = Jt(s), ke = // eslint-disable-next-line unicorn/prefer-includes
    U.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? ke = lt : ke = s.PARSER_MEDIA_TYPE, q = ke === "application/xhtml+xml" ? Qr : Ur, Y = "ALLOWED_TAGS" in s ? N({}, s.ALLOWED_TAGS, q) : St, K = "ALLOWED_ATTR" in s ? N({}, s.ALLOWED_ATTR, q) : xt, ce = "ALLOWED_NAMESPACES" in s ? N({}, s.ALLOWED_NAMESPACES, Qr) : Ht, ot = "ADD_URI_SAFE_ATTR" in s ? N(
      Jt(it),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      q
      // eslint-disable-line indent
    ) : it, Ut = "ADD_DATA_URI_TAGS" in s ? N(
      Jt(tr),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      q
      // eslint-disable-line indent
    ) : tr, Ce = "FORBID_CONTENTS" in s ? N({}, s.FORBID_CONTENTS, q) : zt, ze = "FORBID_TAGS" in s ? N({}, s.FORBID_TAGS, q) : {}, me = "FORBID_ATTR" in s ? N({}, s.FORBID_ATTR, q) : {}, $e = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Le = s.ALLOW_ARIA_ATTR !== !1, xe = s.ALLOW_DATA_ATTR !== !1, Et = s.ALLOW_UNKNOWN_PROTOCOLS || !1, oe = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = s.SAFE_FOR_TEMPLATES || !1, wt = s.SAFE_FOR_XML !== !1, Ee = s.WHOLE_DOCUMENT || !1, we = s.RETURN_DOM || !1, Ue = s.RETURN_DOM_FRAGMENT || !1, nt = s.RETURN_TRUSTED_TYPE || !1, Ze = s.FORCE_BODY || !1, _e = s.SANITIZE_DOM !== !1, le = s.SANITIZE_NAMED_PROPS || !1, kt = s.KEEP_CONTENT !== !1, Je = s.IN_PLACE || !1, rt = s.ALLOWED_URI_REGEXP || rt, Ke = s.NAMESPACE || Re, W = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && at(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (W.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && at(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (W.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (xe = !1), Ue && (we = !0), $e && (Y = N({}, Ye(Nn)), K = [], $e.html === !0 && (N(Y, Pn), N(K, Dn)), $e.svg === !0 && (N(Y, tn), N(K, on), N(K, Dr)), $e.svgFilters === !0 && (N(Y, rn), N(K, on), N(K, Dr)), $e.mathMl === !0 && (N(Y, nn), N(K, Bn), N(K, Dr))), s.ADD_TAGS && (Y === St && (Y = Jt(Y)), N(Y, s.ADD_TAGS, q)), s.ADD_ATTR && (K === xt && (K = Jt(K)), N(K, s.ADD_ATTR, q)), s.ADD_URI_SAFE_ATTR && N(ot, s.ADD_URI_SAFE_ATTR, q), s.FORBID_CONTENTS && (Ce === zt && (Ce = Jt(Ce)), N(Ce, s.FORBID_CONTENTS, q)), kt && (Y["#text"] = !0), Ee && N(Y, ["html", "head", "body"]), Y.table && (N(Y, ["tbody"]), delete ze.tbody), ve && ve(s), Te = s);
  }, jt = N({}, ["mi", "mo", "mn", "ms", "mtext"]), Ct = N({}, ["annotation-xml"]), Wt = N({}, ["title", "style", "font", "a", "script"]), st = N({}, tn);
  N(st, rn), N(st, Ao);
  var Rt = N({}, nn);
  N(Rt, Oo);
  var rr = function(s) {
    var x = ae(s);
    (!x || !x.tagName) && (x = {
      namespaceURI: Ke,
      tagName: "template"
    });
    var C = Ur(s.tagName), B = Ur(x.tagName);
    return ce[s.namespaceURI] ? s.namespaceURI === _t ? x.namespaceURI === Re ? C === "svg" : x.namespaceURI === Tt ? C === "svg" && (B === "annotation-xml" || jt[B]) : !!st[C] : s.namespaceURI === Tt ? x.namespaceURI === Re ? C === "math" : x.namespaceURI === _t ? C === "math" && Ct[B] : !!Rt[C] : s.namespaceURI === Re ? x.namespaceURI === _t && !Ct[B] || x.namespaceURI === Tt && !jt[B] ? !1 : !Rt[C] && (Wt[C] || !st[C]) : !!(ke === "application/xhtml+xml" && ce[s.namespaceURI]) : !1;
  }, fe = function(s) {
    Sr(u.removed, {
      element: s
    });
    try {
      s.parentNode.removeChild(s);
    } catch {
      try {
        s.outerHTML = vt;
      } catch {
        s.remove();
      }
    }
  }, bt = function(s, x) {
    try {
      Sr(u.removed, {
        attribute: x.getAttributeNode(s),
        from: x
      });
    } catch {
      Sr(u.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(s), s === "is" && !K[s])
      if (we || Ue)
        try {
          fe(x);
        } catch {
        }
      else
        try {
          x.setAttribute(s, "");
        } catch {
        }
  }, ut = function(s) {
    var x, C;
    if (Ze)
      s = "<remove></remove>" + s;
    else {
      var B = Ln(s, /^[\r\n\t ]+/);
      C = B && B[0];
    }
    ke === "application/xhtml+xml" && Ke === Re && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var $ = ie ? ie.createHTML(s) : s;
    if (Ke === Re)
      try {
        x = new de().parseFromString($, ke);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = j.createDocument(Ke, "template", null);
      try {
        x.documentElement.innerHTML = $t ? vt : $;
      } catch {
      }
    }
    var re = x.body || x.documentElement;
    return s && C && re.insertBefore(T.createTextNode(C), re.childNodes[0] || null), Ke === Re ? Lt.call(x, Ee ? "html" : "body")[0] : Ee ? x.documentElement : re;
  }, Vt = function(s) {
    return lr.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      w.SHOW_ELEMENT | w.SHOW_COMMENT | w.SHOW_TEXT | w.SHOW_PROCESSING_INSTRUCTION | w.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ct = function(s) {
    return s instanceof z && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof ee) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, He = function(s) {
    return Mt(A) === "object" ? s instanceof A : s && Mt(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Ae = function(s, x, C) {
    ge[s] && _o(ge[s], function(B) {
      B.call(u, x, C, Te);
    });
  }, Qe = function(s) {
    var x;
    if (Ae("beforeSanitizeElements", s, null), ct(s) || ue(/[\u0080-\uFFFF]/, s.nodeName))
      return fe(s), !0;
    var C = q(s.nodeName);
    if (Ae("uponSanitizeElement", s, {
      tagName: C,
      allowedTags: Y
    }), s.hasChildNodes() && !He(s.firstElementChild) && (!He(s.content) || !He(s.content.firstElementChild)) && ue(/<[/\w]/g, s.innerHTML) && ue(/<[/\w]/g, s.textContent) || C === "select" && ue(/<template/i, s.innerHTML) || s.nodeType === 7 || wt && s.nodeType === 8 && ue(/<[/\w]/g, s.data))
      return fe(s), !0;
    if (!Y[C] || ze[C]) {
      if (!ze[C] && At(C) && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, C) || W.tagNameCheck instanceof Function && W.tagNameCheck(C)))
        return !1;
      if (kt && !Ce[C]) {
        var B = ae(s) || s.parentNode, $ = H(s) || s.childNodes;
        if ($ && B)
          for (var re = $.length, Q = re - 1; Q >= 0; --Q) {
            var Oe = mt($[Q], !0);
            Oe.__removalCount = (s.__removalCount || 0) + 1, B.insertBefore(Oe, te(s));
          }
      }
      return fe(s), !0;
    }
    return s instanceof O && !rr(s) || (C === "noscript" || C === "noembed" || C === "noframes") && ue(/<\/no(script|embed|frames)/i, s.innerHTML) ? (fe(s), !0) : (se && s.nodeType === 3 && (x = s.textContent, x = Xe(x, yt, " "), x = Xe(x, gt, " "), x = Xe(x, Pt, " "), s.textContent !== x && (Sr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = x)), Ae("afterSanitizeElements", s, null), !1);
  }, nr = function(s, x, C) {
    if (_e && (x === "id" || x === "name") && (C in T || C in Pe))
      return !1;
    if (!(xe && !me[x] && ue(ar, x))) {
      if (!(Le && ue(Nt, x))) {
        if (!K[x] || me[x]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(s) && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, s) || W.tagNameCheck instanceof Function && W.tagNameCheck(s)) && (W.attributeNameCheck instanceof RegExp && ue(W.attributeNameCheck, x) || W.attributeNameCheck instanceof Function && W.attributeNameCheck(x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            x === "is" && W.allowCustomizedBuiltInElements && (W.tagNameCheck instanceof RegExp && ue(W.tagNameCheck, C) || W.tagNameCheck instanceof Function && W.tagNameCheck(C)))
          ) return !1;
        } else if (!ot[x]) {
          if (!ue(rt, Xe(C, Dt, ""))) {
            if (!((x === "src" || x === "xlink:href" || x === "href") && s !== "script" && Co(C, "data:") === 0 && Ut[s])) {
              if (!(Et && !ue(Se, Xe(C, Dt, "")))) {
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
    return s !== "annotation-xml" && Ln(s, tt);
  }, ft = function(s) {
    var x, C, B, $;
    Ae("beforeSanitizeAttributes", s, null);
    var re = s.attributes;
    if (re) {
      var Q = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: K
      };
      for ($ = re.length; $--; ) {
        x = re[$];
        var Oe = x, Z = Oe.name, Ne = Oe.namespaceURI;
        if (C = Z === "value" ? x.value : Ro(x.value), B = q(Z), Q.attrName = B, Q.attrValue = C, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ae("uponSanitizeAttribute", s, Q), C = Q.attrValue, !Q.forceKeepAttr && (bt(Z, s), !!Q.keepAttr)) {
          if (!oe && ue(/\/>/i, C)) {
            bt(Z, s);
            continue;
          }
          se && (C = Xe(C, yt, " "), C = Xe(C, gt, " "), C = Xe(C, Pt, " "));
          var je = q(s.nodeName);
          if (nr(je, B, C)) {
            if (le && (B === "id" || B === "name") && (bt(Z, s), C = er + C), wt && ue(/((--!?|])>)|<\/(style|title)/i, C)) {
              bt(Z, s);
              continue;
            }
            if (ie && Mt(ye) === "object" && typeof ye.getAttributeType == "function" && !Ne)
              switch (ye.getAttributeType(je, B)) {
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
              Ne ? s.setAttributeNS(Ne, Z, C) : s.setAttribute(Z, C), ct(s) ? fe(s) : In(u.removed);
            } catch {
            }
          }
        }
      }
      Ae("afterSanitizeAttributes", s, null);
    }
  }, pt = function b(s) {
    var x, C = Vt(s);
    for (Ae("beforeSanitizeShadowDOM", s, null); x = C.nextNode(); )
      Ae("uponSanitizeShadowNode", x, null), !Qe(x) && (x.content instanceof y && b(x.content), ft(x));
    Ae("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(b) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x, C, B, $, re;
    if ($t = !b, $t && (b = "<!-->"), typeof b != "string" && !He(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw en("dirty is not a string, aborting");
      } else
        throw en("toString is not a function");
    if (!u.isSupported) {
      if (Mt(v.toStaticHTML) === "object" || typeof v.toStaticHTML == "function") {
        if (typeof b == "string")
          return v.toStaticHTML(b);
        if (He(b))
          return v.toStaticHTML(b.outerHTML);
      }
      return b;
    }
    if (Bt || be(s), u.removed = [], typeof b == "string" && (Je = !1), Je) {
      if (b.nodeName) {
        var Q = q(b.nodeName);
        if (!Y[Q] || ze[Q])
          throw en("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof A)
      x = ut("<!---->"), C = x.ownerDocument.importNode(b, !0), C.nodeType === 1 && C.nodeName === "BODY" || C.nodeName === "HTML" ? x = C : x.appendChild(C);
    else {
      if (!we && !se && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return ie && nt ? ie.createHTML(b) : b;
      if (x = ut(b), !x)
        return we ? null : nt ? vt : "";
    }
    x && Ze && fe(x.firstChild);
    for (var Oe = Vt(Je ? b : x); B = Oe.nextNode(); )
      B.nodeType === 3 && B === $ || Qe(B) || (B.content instanceof y && pt(B.content), ft(B), $ = B);
    if ($ = null, Je)
      return b;
    if (we) {
      if (Ue)
        for (re = It.call(x.ownerDocument); x.firstChild; )
          re.appendChild(x.firstChild);
      else
        re = x;
      return (K.shadowroot || K.shadowrootmod) && (re = Qt.call(S, re, !0)), re;
    }
    var Z = Ee ? x.outerHTML : x.innerHTML;
    return Ee && Y["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && ue(zo, x.ownerDocument.doctype.name) && (Z = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Z), se && (Z = Xe(Z, yt, " "), Z = Xe(Z, gt, " "), Z = Xe(Z, Pt, " ")), ie && nt ? ie.createHTML(Z) : Z;
  }, u.setConfig = function(b) {
    be(b), Bt = !0;
  }, u.clearConfig = function() {
    Te = null, Bt = !1;
  }, u.isValidAttribute = function(b, s, x) {
    Te || be({});
    var C = q(b), B = q(s);
    return nr(C, B, x);
  }, u.addHook = function(b, s) {
    typeof s == "function" && (ge[b] = ge[b] || [], Sr(ge[b], s));
  }, u.removeHook = function(b) {
    if (ge[b])
      return In(ge[b]);
  }, u.removeHooks = function(b) {
    ge[b] && (ge[b] = []);
  }, u.removeAllHooks = function() {
    ge = {};
  }, u;
}
qn();
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
const jo = ({
  event: v = "",
  action: u = "",
  name: S = "",
  type: T = "",
  section: y = "",
  text: _ = "",
  region: A = "",
  component: O = ""
}) => {
  const { dataLayer: w } = window, g = {
    event: v.toLowerCase(),
    action: u.toLowerCase(),
    name: S.toLowerCase(),
    type: T.toLowerCase(),
    region: A.toLowerCase(),
    section: y.toLowerCase(),
    text: _.toLowerCase(),
    component: O.toLowerCase()
  };
  w && w.push(g);
};
var Kt = {};
var zn;
function Wo() {
  if (zn) return Kt;
  zn = 1;
  var v = xr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, _ = {};
  function A(e) {
    return S.call(_, e) ? !0 : S.call(y, e) ? !1 : T.test(e) ? _[e] = !0 : (y[e] = !0, !1);
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
  }, de = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(e) {
    de.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), z[n] = z[e];
    });
  });
  var ye = /["'&<>]/;
  function G(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = ye.exec(e);
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
  var mt = /([A-Z])/g, te = /^ms-/, H = Array.isArray;
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
  function vt(e, n, i) {
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
          h !== void 0 || (h = G(c.replace(mt, "-$1").toLowerCase().replace(te, "-ms-")), ie.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || S.call(z, a) ? "" + d : d + "px" : G(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function ne(e, n, i, a) {
    switch (i) {
      case "style":
        vt(e, n, a);
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
      } else if (A(i)) {
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
  function j(e, n, i) {
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
  function It(e, n, i, a) {
    e.push(he(i));
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
    return e.push(">"), j(e, d, i), typeof i == "string" ? (e.push(G(i)), null) : i;
  }
  var Lt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qt = /* @__PURE__ */ new Map();
  function he(e) {
    var n = Qt.get(e);
    if (n === void 0) {
      if (!Lt.test(e)) throw Error(u(65, e));
      n = "<" + e, Qt.set(e, n);
    }
    return n;
  }
  function ge(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(he("select"));
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
        return e.push(">"), j(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(he("option"));
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
        if (h != null) if (i = F !== null ? "" + F : lr(k), H(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else I && e.push(' selected=""');
        return e.push(">"), j(e, L, k), k;
      case "textarea":
        e.push(he("textarea")), L = h = c = null;
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
          if (H(L) && 1 < L.length) throw Error(u(93));
          c = "" + L;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(G("" + c)), null;
      case "input":
        e.push(he("input")), F = L = k = c = null;
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
        e.push(he("menuitem"));
        for (var We in i) if (S.call(i, We) && (c = i[We], c != null)) switch (We) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ne(e, a, We, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(he("title")), c = null;
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
        e.push(he(n)), h = c = null;
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
        e.push(he(n));
        for (var Ve in i) if (S.call(i, Ve) && (c = i[Ve], c != null)) switch (Ve) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            ne(e, a, Ve, c);
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
        return It(
          e,
          i,
          n,
          a
        );
      case "html":
        return d.insertionMode === 0 && e.push("<!DOCTYPE html>"), It(e, i, n, a);
      default:
        if (n.indexOf("-") === -1 && typeof i.is != "string") return It(e, i, n, a);
        e.push(he(n)), h = c = null;
        for (I in i) if (S.call(i, I) && (k = i[I], k != null)) switch (I) {
          case "children":
            c = k;
            break;
          case "dangerouslySetInnerHTML":
            h = k;
            break;
          case "style":
            vt(e, a, k);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            A(I) && typeof k != "function" && typeof k != "symbol" && e.push(" ", I, '="', G(k), '"');
        }
        return e.push(">"), j(e, h, c), c;
    }
  }
  function yt(e, n, i) {
    if (e.push('<!--$?--><template id="'), i === null) throw Error(u(395));
    return e.push(i), e.push('"></template>');
  }
  function gt(e, n, i, a) {
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
  function Pt(e, n) {
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
  function Nt(e) {
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
  function Se(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Dt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(G(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(G(n)), e = !0), e);
  }
  var tt = Object.assign, rt = Symbol.for("react.element"), Y = Symbol.for("react.portal"), St = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), ze = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), wt = Symbol.for("react.debug_trace_mode"), Ee = Symbol.for("react.legacy_hidden"), Bt = Symbol.for("react.default_value"), Ze = Symbol.iterator;
  function we(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case St:
        return "Fragment";
      case Y:
        return "Portal";
      case xt:
        return "Profiler";
      case K:
        return "StrictMode";
      case Le:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ze:
        return (e.displayName || "Context") + ".Consumer";
      case W:
        return (e._context.displayName || "Context") + ".Provider";
      case me:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Et:
        return n = e.displayName || null, n !== null ? n : we(e.type) || "Memo";
      case oe:
        n = e._payload, e = e._init;
        try {
          return we(e(n));
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
  var _e = null;
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
  function kt(e) {
    var n = e.parent;
    n !== null && kt(n), e.context._currentValue2 = e.value;
  }
  function Je(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(u(402));
    e.depth === n.depth ? le(e, n) : Je(e, n);
  }
  function $e(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? le(e, i) : $e(e, i), n.context._currentValue2 = n.value;
  }
  function Ce(e) {
    var n = _e;
    n !== e && (n === null ? kt(e) : e === null ? er(n) : n.depth === e.depth ? le(n, e) : n.depth > e.depth ? Je(n, e) : $e(n, e), _e = e);
  }
  var zt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function Ut(e, n, i, a) {
    var d = e.state !== void 0 ? e.state : null;
    e.updater = zt, e.props = i, e.state = d;
    var c = { queue: [], replace: !1 };
    e._reactInternals = c;
    var h = n.contextType;
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : tt({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && zt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
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
  var it = Math.clz32 ? Math.clz32 : Re, Tt = Math.log, _t = Math.LN2;
  function Re(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Tt(e) / _t | 0) | 0;
  }
  function Ke(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var $t = typeof Object.is == "function" ? Object.is : Ke, ce = null, Ht = null, ke = null, U = null, lt = !1, q = !1, Te = 0, Pe = null, at = 0;
  function be() {
    if (ce === null) throw Error(u(321));
    return ce;
  }
  function jt() {
    if (0 < at) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ct() {
    return U === null ? ke === null ? (lt = !1, ke = U = jt()) : (lt = !0, U = ke) : U.next === null ? (lt = !1, U = U.next = jt()) : (lt = !0, U = U.next), U;
  }
  function Wt() {
    Ht = ce = null, q = !1, ke = null, at = 0, U = Pe = null;
  }
  function st(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Rt(e, n, i) {
    if (ce = be(), U = Ct(), lt) {
      var a = U.queue;
      if (n = a.dispatch, Pe !== null && (i = Pe.get(a), i !== void 0)) {
        Pe.delete(a), a = U.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return U.memoizedState = a, [a, n];
      }
      return [U.memoizedState, n];
    }
    return e = e === st ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, U.memoizedState = e, e = U.queue = { last: null, dispatch: null }, e = e.dispatch = fe.bind(null, ce, e), [U.memoizedState, e];
  }
  function rr(e, n) {
    if (ce = be(), U = Ct(), n = n === void 0 ? null : n, U !== null) {
      var i = U.memoizedState;
      if (i !== null && n !== null) {
        var a = i[1];
        e: if (a === null) a = !1;
        else {
          for (var d = 0; d < a.length && d < n.length; d++) if (!$t(n[d], a[d])) {
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
    if (25 <= at) throw Error(u(301));
    if (e === ce) if (q = !0, e = { action: i, next: null }, Pe === null && (Pe = /* @__PURE__ */ new Map()), i = Pe.get(n), i === void 0) Pe.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function bt() {
    throw Error(u(394));
  }
  function ut() {
  }
  var Vt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return be(), e._currentValue2;
  }, useMemo: rr, useReducer: Rt, useRef: function(e) {
    ce = be(), U = Ct();
    var n = U.memoizedState;
    return n === null ? (e = { current: e }, U.memoizedState = e) : n;
  }, useState: function(e) {
    return Rt(st, e);
  }, useInsertionEffect: ut, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return rr(function() {
      return e;
    }, n);
  }, useImperativeHandle: ut, useEffect: ut, useDebugValue: ut, useDeferredValue: function(e) {
    return be(), e;
  }, useTransition: function() {
    return be(), [
      !1,
      bt
    ];
  }, useId: function() {
    var e = Ht.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - it(e) - 1)).toString(32) + n;
    var i = ct;
    if (i === null) throw Error(u(404));
    return n = Te++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return be(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, ct = null, He = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ae(e) {
    return console.error(e), null;
  }
  function Qe() {
  }
  function nr(e, n, i, a, d, c, h, k, F) {
    var I = [], L = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: L, pingedTasks: I, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Ae : d, onAllReady: Qe, onShellReady: h === void 0 ? Qe : h, onShellError: Qe, onFatalError: Qe }, i = ft(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = At(n, e, null, i, L, Ue, null, tr), I.push(e), n;
  }
  function At(e, n, i, a, d, c, h, k) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var F = { node: n, ping: function() {
      var I = e.pingedTasks;
      I.push(F), I.length === 1 && sr(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: k };
    return d.add(F), F;
  }
  function ft(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function pt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function b(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (ce = {}, Ht = n, Te = 0, e = i(a, d); q; ) q = !1, Te = 0, at += 1, U = null, e = i(a, d);
    return Wt(), e;
  }
  function x(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var k in i) if (!(k in c)) throw Error(u(108, we(a) || "Unknown", k));
        a = tt({}, h, i);
      }
      n.legacyContext = a, $(e, n, d), n.legacyContext = h;
    } else $(e, n, d);
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
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), Ut(c, i, a, d), x(e, n, c, i);
    } else {
      c = nt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = Te !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) Ut(d, i, a, c), x(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = ot(a, 1, 0);
        try {
          $(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else $(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = ge(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = et(h, i, a), Q(e, n, c), d.formatContext = h, i) {
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
        case Ee:
        case wt:
        case K:
        case xt:
        case St:
          $(e, n, a.children);
          return;
        case xe:
          $(e, n, a.children);
          return;
        case se:
          throw Error(u(343));
        case Le:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var k = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, F = ft(e, d.chunks.length, k, d.formatContext, !1, !1);
            d.children.push(F), d.lastPushedText = !1;
            var I = ft(e, 0, null, d.formatContext, !1, !1);
            I.parentFlushed = !0, n.blockedBoundary = k, n.blockedSegment = I;
            try {
              if (Q(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || I.lastPushedText && I.textEmbedded && I.chunks.push("<!-- -->"), I.status = 1, Ne(k, I), k.pendingTasks === 0) break e;
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
        case me:
          if (a = s(e, n, i.render, a, d), Te !== 0) {
            i = n.treeContext, n.treeContext = ot(i, 1, 0);
            try {
              $(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else $(e, n, a);
          return;
        case Et:
          i = i.type, a = C(i, a), B(e, n, i, a, d);
          return;
        case W:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = _e, _e = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, $(e, n, d), e = _e, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Bt ? e.context._defaultValue : a, e = _e = e.parent, n.context = e;
          return;
        case ze:
          a = a.children, a = a(i._currentValue2), $(e, n, a);
          return;
        case oe:
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
  function $(e, n, i) {
    if (n.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case rt:
          B(e, n, i.type, i.props, i.ref);
          return;
        case Y:
          throw Error(u(257));
        case oe:
          var a = i._init;
          i = a(i._payload), $(e, n, i);
          return;
      }
      if (H(i)) {
        re(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Ze && i[Ze] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
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
      return $(e, n, i);
    } catch (F) {
      if (Wt(), typeof F == "object" && F !== null && typeof F.then == "function") {
        i = F;
        var h = n.blockedSegment, k = ft(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(k), h.lastPushedText = !1, e = At(e, n.node, n.blockedBoundary, k, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Ce(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Ce(c), F;
    }
  }
  function Oe(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, je(this, n, e);
  }
  function Z(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return Z(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function Ne(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && Ne(e, i);
    } else e.completedSegments.push(n);
  }
  function je(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Qe, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Ne(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Oe, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Ne(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function sr(e) {
    if (e.status !== 2) {
      var n = _e, i = He.current;
      He.current = Vt;
      var a = ct;
      ct = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], k = e, F = h.blockedSegment;
          if (F.status === 0) {
            Ce(h.context);
            try {
              $(k, h, h.node), k.responseState.generateStaticMarkup || F.lastPushedText && F.textEmbedded && F.chunks.push("<!-- -->"), h.abortSet.delete(h), F.status = 1, je(k, h.blockedBoundary, F);
            } catch (Fe) {
              if (Wt(), typeof Fe == "object" && Fe !== null && typeof Fe.then == "function") {
                var I = h.ping;
                Fe.then(I, I);
              } else {
                h.abortSet.delete(h), F.status = 4;
                var L = h.blockedBoundary, J = Fe, We = pt(k, J);
                if (L === null ? b(k, J) : (L.pendingTasks--, L.forceClientRender || (L.forceClientRender = !0, L.errorDigest = We, L.parentFlushed && k.clientRenderedBoundaries.push(L))), k.allPendingTasks--, k.allPendingTasks === 0) {
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
        pt(e, Fe), b(e, Fe);
      } finally {
        ct = a, He.current = i, i === Vt && Ce(n);
      }
    }
  }
  function Gt(e, n, i) {
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
          d = qt(e, n, d);
        }
        for (; c < a.length - 1; c++) n.push(a[c]);
        return c < a.length && (d = n.push(a[c])), d;
      default:
        throw Error(u(390));
    }
  }
  function qt(e, n, i) {
    var a = i.boundary;
    if (a === null) return Gt(e, n, i);
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = G(a), n.push(a), n.push('"')), n.push("></template>")), Gt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < a.pendingTasks) {
      a.rootSegmentID = e.nextSegmentId++, 0 < a.completedSegments.length && e.partialBoundaries.push(a);
      var d = e.responseState, c = d.nextSuspenseID++;
      return d = d.boundaryPrefix + c.toString(16), a = a.id = d, yt(n, e.responseState, a), Gt(e, n, i), n.push("<!--/$-->");
    }
    if (a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), yt(n, e.responseState, a.id), Gt(e, n, i), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), i = a.completedSegments, i.length !== 1) throw Error(u(391));
    return qt(e, n, i[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function ur(e, n, i) {
    return gt(n, e.responseState, i.formatContext, i.id), qt(e, n, i), Pt(n, i.formatContext);
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
        qt(e, n, i), e.completedRootSegment = null;
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
          var We = Nt(I || "");
          a.push(We);
        }
        if (L || J) {
          a.push(",");
          var Ve = Nt(L || "");
          a.push(Ve);
        }
        if (J) {
          a.push(",");
          var Fe = Nt(J);
          a.push(Fe);
        }
        if (!a.push(")<\/script>")) {
          e.destination = null, c++, d.splice(0, c);
          return;
        }
      }
      d.splice(0, c);
      var Xt = e.completedBoundaries;
      for (c = 0; c < Xt.length; c++) if (!cr(e, n, Xt[c])) {
        e.destination = null, c++, Xt.splice(0, c);
        return;
      }
      Xt.splice(0, c);
      var dt = e.partialBoundaries;
      for (c = 0; c < dt.length; c++) {
        var dr = dt[c];
        e: {
          d = e, h = n;
          var Yt = dr.completedSegments;
          for (k = 0; k < Yt.length; k++) if (!fr(d, h, dr, Yt[k])) {
            k++, Yt.splice(0, k);
            var kr = !1;
            break e;
          }
          Yt.splice(0, k), kr = !0;
        }
        if (!kr) {
          e.destination = null, c++, dt.splice(0, c);
          return;
        }
      }
      dt.splice(0, c);
      var Ot = e.completedBoundaries;
      for (c = 0; c < Ot.length; c++) if (!cr(e, n, Ot[c])) {
        e.destination = null, c++, Ot.splice(0, c);
        return;
      }
      Ot.splice(0, c);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function Er(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return Z(a, e, n);
      }), i.clear(), e.destination !== null && or(e, e.destination);
    } catch (a) {
      pt(e, a), b(e, a);
    }
  }
  function wr() {
  }
  function pr(e, n, i, a) {
    var d = !1, c = null, h = "", k = { push: function(I) {
      return I !== null && (h += I), !0;
    }, destroy: function(I) {
      d = !0, c = I;
    } }, F = !1;
    if (e = nr(e, Se(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wr, void 0, function() {
      F = !0;
    }), sr(e), Er(e, a), e.status === 1) e.status = 2, k.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = k;
      try {
        or(e, k);
      } catch (I) {
        pt(e, I), b(e, I);
      }
    }
    if (d) throw c;
    if (!F) throw Error(u(426));
    return h;
  }
  return Kt.renderToNodeStream = function() {
    throw Error(u(207));
  }, Kt.renderToStaticMarkup = function(e, n) {
    return pr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Kt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Kt.renderToString = function(e, n) {
    return pr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Kt.version = "18.3.1", Kt;
}
var Br = {};
var Un;
function Vo() {
  if (Un) return Br;
  Un = 1;
  var v = xr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = null, T = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < T && (t.enqueue(new Uint8Array(S.buffer, 0, T)), S = new Uint8Array(512), T = 0), t.enqueue(r);
    else {
      var o = S.length - T;
      o < r.length && (o === 0 ? t.enqueue(S) : (S.set(r.subarray(0, o), T), t.enqueue(S), r = r.subarray(o)), S = new Uint8Array(512), T = 0), S.set(r, T), T += r.length;
    }
  }
  function _(t, r) {
    return y(t, r), !0;
  }
  function A(t) {
    S && 0 < T && (t.enqueue(new Uint8Array(S.buffer, 0, T)), S = null, T = 0);
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
  var z = Object.prototype.hasOwnProperty, de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ye = {}, G = {};
  function mt(t) {
    return z.call(G, t) ? !0 : z.call(ye, t) ? !1 : de.test(t) ? G[t] = !0 : (ye[t] = !0, !1);
  }
  function te(t, r, o, l, p, f, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = f, this.removeEmptyString = m;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    H[t] = new te(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    H[r] = new te(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    H[t] = new te(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    H[t] = new te(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    H[t] = new te(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    H[t] = new te(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    H[t] = new te(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    H[t] = new te(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    H[t] = new te(t, 5, !1, t.toLowerCase(), null, !1, !1);
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
    H[r] = new te(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(ae, et);
    H[r] = new te(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(ae, et);
    H[r] = new te(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    H[t] = new te(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    H[t] = new te(t, 1, !1, t.toLowerCase(), null, !0, !0);
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
  }, vt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function(t) {
    vt.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), ie[r] = ie[t];
    });
  });
  var ne = /["'&<>]/;
  function j(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = ne.exec(t);
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
  var lr = /([A-Z])/g, It = /^ms-/, Lt = Array.isArray, Qt = g("<script>"), he = g("<\/script>"), ge = g('<script src="'), yt = g('<script type="module" src="'), gt = g('" async=""><\/script>'), Pt = /(<\/|<)(s)(cript)/gi;
  function ar(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Nt(t, r, o, l, p) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Qt : g('<script nonce="' + j(r) + '">');
    var f = [];
    if (o !== void 0 && f.push(r, w(("" + o).replace(Pt, ar)), he), l !== void 0) for (o = 0; o < l.length; o++) f.push(ge, w(j(l[o])), gt);
    if (p !== void 0) for (l = 0; l < p.length; l++) f.push(yt, w(j(p[l])), gt);
    return { bootstrapChunks: f, startInlineScript: r, placeholderPrefix: g(t + "P:"), segmentPrefix: g(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Se(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Dt(t) {
    return Se(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function tt(t, r, o) {
    switch (r) {
      case "select":
        return Se(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return Se(2, null);
      case "math":
        return Se(3, null);
      case "foreignObject":
        return Se(1, null);
      case "table":
        return Se(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Se(5, null);
      case "colgroup":
        return Se(7, null);
      case "tr":
        return Se(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? Se(1, null) : t;
  }
  var rt = g("<!-- -->");
  function Y(t, r, o, l) {
    return r === "" ? l : (l && t.push(rt), t.push(w(j(r))), !0);
  }
  var St = /* @__PURE__ */ new Map(), K = g(' style="'), xt = g(":"), W = g(";");
  function ze(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (z.call(o, l)) {
      var p = o[l];
      if (p != null && typeof p != "boolean" && p !== "") {
        if (l.indexOf("--") === 0) {
          var f = w(j(l));
          p = w(j(("" + p).trim()));
        } else {
          f = l;
          var m = St.get(f);
          m !== void 0 || (m = g(j(f.replace(lr, "-$1").toLowerCase().replace(It, "-ms-"))), St.set(f, m)), f = m, p = typeof p == "number" ? p === 0 || z.call(ie, l) ? w("" + p) : w(p + "px") : w(j(("" + p).trim()));
        }
        r ? (r = !1, t.push(K, f, xt, p)) : t.push(W, f, xt, p);
      }
    }
    r || t.push(xe);
  }
  var me = g(" "), Le = g('="'), xe = g('"'), Et = g('=""');
  function oe(t, r, o, l) {
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
      if (r = H.hasOwnProperty(o) ? H[o] : null, r !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (o = w(r.attributeName), r.type) {
          case 3:
            l && t.push(me, o, Et);
            break;
          case 4:
            l === !0 ? t.push(me, o, Et) : l !== !1 && t.push(me, o, Le, w(j(l)), xe);
            break;
          case 5:
            isNaN(l) || t.push(me, o, Le, w(j(l)), xe);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(me, o, Le, w(j(l)), xe);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(me, o, Le, w(j(l)), xe);
        }
      } else if (mt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(me, w(o), Le, w(j(l)), xe);
      }
    }
  }
  var se = g(">"), wt = g("/>");
  function Ee(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(w("" + r));
    }
  }
  function Bt(t) {
    var r = "";
    return v.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ze = g(' selected=""');
  function we(t, r, o, l) {
    t.push(le(o));
    var p = o = null, f;
    for (f in r) if (z.call(r, f)) {
      var m = r[f];
      if (m != null) switch (f) {
        case "children":
          o = m;
          break;
        case "dangerouslySetInnerHTML":
          p = m;
          break;
        default:
          oe(t, l, f, m);
      }
    }
    return t.push(se), Ee(t, p, o), typeof o == "string" ? (t.push(w(j(o))), null) : o;
  }
  var Ue = g(`
`), nt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, _e = /* @__PURE__ */ new Map();
  function le(t) {
    var r = _e.get(t);
    if (r === void 0) {
      if (!nt.test(t)) throw Error(u(65, t));
      r = g("<" + t), _e.set(t, r);
    }
    return r;
  }
  var er = g("<!DOCTYPE html>");
  function kt(t, r, o, l, p) {
    switch (r) {
      case "select":
        t.push(le("select"));
        var f = null, m = null;
        for (P in o) if (z.call(o, P)) {
          var E = o[P];
          if (E != null) switch (P) {
            case "children":
              f = E;
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
        return t.push(se), Ee(t, m, f), f;
      case "option":
        m = p.selectedValue, t.push(le("option"));
        var M = E = null, D = null, P = null;
        for (f in o) if (z.call(o, f)) {
          var X = o[f];
          if (X != null) switch (f) {
            case "children":
              E = X;
              break;
            case "selected":
              D = X;
              break;
            case "dangerouslySetInnerHTML":
              P = X;
              break;
            case "value":
              M = X;
            default:
              oe(t, l, f, X);
          }
        }
        if (m != null) if (o = M !== null ? "" + M : Bt(E), Lt(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(Ze);
              break;
            }
        } else "" + m === o && t.push(Ze);
        else D && t.push(Ze);
        return t.push(se), Ee(t, P, E), E;
      case "textarea":
        t.push(le("textarea")), P = m = f = null;
        for (E in o) if (z.call(o, E) && (M = o[E], M != null)) switch (E) {
          case "children":
            P = M;
            break;
          case "value":
            f = M;
            break;
          case "defaultValue":
            m = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            oe(t, l, E, M);
        }
        if (f === null && m !== null && (f = m), t.push(se), P != null) {
          if (f != null) throw Error(u(92));
          if (Lt(P) && 1 < P.length) throw Error(u(93));
          f = "" + P;
        }
        return typeof f == "string" && f[0] === `
` && t.push(Ue), f !== null && t.push(w(j("" + f))), null;
      case "input":
        t.push(le("input")), M = P = E = f = null;
        for (m in o) if (z.call(o, m) && (D = o[m], D != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            M = D;
            break;
          case "defaultValue":
            E = D;
            break;
          case "checked":
            P = D;
            break;
          case "value":
            f = D;
            break;
          default:
            oe(t, l, m, D);
        }
        return P !== null ? oe(
          t,
          l,
          "checked",
          P
        ) : M !== null && oe(t, l, "checked", M), f !== null ? oe(t, l, "value", f) : E !== null && oe(t, l, "value", E), t.push(wt), null;
      case "menuitem":
        t.push(le("menuitem"));
        for (var Ie in o) if (z.call(o, Ie) && (f = o[Ie], f != null)) switch (Ie) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            oe(t, l, Ie, f);
        }
        return t.push(se), null;
      case "title":
        t.push(le("title")), f = null;
        for (X in o) if (z.call(o, X) && (m = o[X], m != null)) switch (X) {
          case "children":
            f = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            oe(t, l, X, m);
        }
        return t.push(se), f;
      case "listing":
      case "pre":
        t.push(le(r)), m = f = null;
        for (M in o) if (z.call(o, M) && (E = o[M], E != null)) switch (M) {
          case "children":
            f = E;
            break;
          case "dangerouslySetInnerHTML":
            m = E;
            break;
          default:
            oe(t, l, M, E);
        }
        if (t.push(se), m != null) {
          if (f != null) throw Error(u(60));
          if (typeof m != "object" || !("__html" in m)) throw Error(u(61));
          o = m.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(Ue, w(o)) : t.push(w("" + o)));
        }
        return typeof f == "string" && f[0] === `
` && t.push(Ue), f;
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
        for (var Ge in o) if (z.call(o, Ge) && (f = o[Ge], f != null)) switch (Ge) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            oe(t, l, Ge, f);
        }
        return t.push(wt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return we(t, o, r, l);
      case "html":
        return p.insertionMode === 0 && t.push(er), we(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return we(t, o, r, l);
        t.push(le(r)), m = f = null;
        for (D in o) if (z.call(o, D) && (E = o[D], E != null)) switch (D) {
          case "children":
            f = E;
            break;
          case "dangerouslySetInnerHTML":
            m = E;
            break;
          case "style":
            ze(t, l, E);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            mt(D) && typeof E != "function" && typeof E != "symbol" && t.push(me, w(D), Le, w(j(E)), xe);
        }
        return t.push(se), Ee(t, m, f), f;
    }
  }
  var Je = g("</"), $e = g(">"), Ce = g('<template id="'), zt = g('"></template>'), Ut = g("<!--$-->"), tr = g('<!--$?--><template id="'), ot = g('"></template>'), it = g("<!--$!-->"), Tt = g("<!--/$-->"), _t = g("<template"), Re = g('"'), Ke = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var $t = g("></template>");
  function ce(t, r, o) {
    if (y(t, tr), o === null) throw Error(u(395));
    return y(t, o), _(t, ot);
  }
  var Ht = g('<div hidden id="'), ke = g('">'), U = g("</div>"), lt = g('<svg aria-hidden="true" style="display:none" id="'), q = g('">'), Te = g("</svg>"), Pe = g('<math aria-hidden="true" style="display:none" id="'), at = g('">'), be = g("</math>"), jt = g('<table hidden id="'), Ct = g('">'), Wt = g("</table>"), st = g('<table hidden><tbody id="'), Rt = g('">'), rr = g("</tbody></table>"), fe = g('<table hidden><tr id="'), bt = g('">'), ut = g("</tr></table>"), Vt = g('<table hidden><colgroup id="'), ct = g('">'), He = g("</colgroup></table>");
  function Ae(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, ke);
      case 2:
        return y(t, lt), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, q);
      case 3:
        return y(t, Pe), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, at);
      case 4:
        return y(t, jt), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, Ct);
      case 5:
        return y(t, st), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, Rt);
      case 6:
        return y(t, fe), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, bt);
      case 7:
        return y(
          t,
          Vt
        ), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, ct);
      default:
        throw Error(u(397));
    }
  }
  function Qe(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return _(t, U);
      case 2:
        return _(t, Te);
      case 3:
        return _(t, be);
      case 4:
        return _(t, Wt);
      case 5:
        return _(t, rr);
      case 6:
        return _(t, ut);
      case 7:
        return _(t, He);
      default:
        throw Error(u(397));
    }
  }
  var nr = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), At = g('$RS("'), ft = g('","'), pt = g('")<\/script>'), b = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = g('$RC("'), x = g('","'), C = g('")<\/script>'), B = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), $ = g('$RX("'), re = g('"'), Q = g(")<\/script>"), Oe = g(","), Z = /[<\u2028\u2029]/g;
  function Ne(t) {
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
  var je = Object.assign, sr = Symbol.for("react.element"), Gt = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), cr = Symbol.for("react.profiler"), fr = Symbol.for("react.provider"), or = Symbol.for("react.context"), Er = Symbol.for("react.forward_ref"), wr = Symbol.for("react.suspense"), pr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function k(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case qt:
        return "Fragment";
      case Gt:
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
  function Ve(t) {
    var r = t.parent;
    r !== null && Ve(r), t.context._currentValue = t.value;
  }
  function Fe(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? J(t, r) : Fe(t, r);
  }
  function Xt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? J(t, o) : Xt(t, o), r.context._currentValue = r.value;
  }
  function dt(t) {
    var r = L;
    r !== t && (r === null ? Ve(t) : t === null ? We(r) : r.depth === t.depth ? J(r, t) : r.depth > t.depth ? Fe(r, t) : Xt(r, t), L = t);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function Yt(t, r, o, l) {
    var p = t.state !== void 0 ? t.state : null;
    t.updater = dr, t.props = o, t.state = p;
    var f = { queue: [], replace: !1 };
    t._reactInternals = f;
    var m = r.contextType;
    if (t.context = typeof m == "object" && m !== null ? m._currentValue : l, m = r.getDerivedStateFromProps, typeof m == "function" && (m = m(o, p), p = m == null ? p : je({}, p, m), t.state = p), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && dr.enqueueReplaceState(t, t.state, null), f.queue !== null && 0 < f.queue.length) if (r = f.queue, m = f.replace, f.queue = null, f.replace = !1, m && r.length === 1) t.state = r[0];
    else {
      for (f = m ? r[0] : t.state, p = !0, m = m ? 1 : 0; m < r.length; m++) {
        var E = r[m];
        E = typeof E == "function" ? E.call(t, f, o, l) : E, E != null && (p ? (p = !1, f = je({}, f, E)) : je(f, E));
      }
      t.state = f;
    }
    else f.queue = null;
  }
  var kr = { id: 1, overflow: "" };
  function Ot(t, r, o) {
    var l = t.id;
    t = t.overflow;
    var p = 32 - Tr(l) - 1;
    l &= ~(1 << p), o += 1;
    var f = 32 - Tr(r) + p;
    if (30 < f) {
      var m = p - p % 5;
      return f = (l & (1 << m) - 1).toString(32), l >>= m, p -= m, { id: 1 << 32 - Tr(r) + p | o << p | l, overflow: f + t };
    }
    return { id: 1 << f | o << p | l, overflow: t };
  }
  var Tr = Math.clz32 ? Math.clz32 : Qn, Jn = Math.log, Kn = Math.LN2;
  function Qn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Jn(t) / Kn | 0) | 0;
  }
  function eo(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var to = typeof Object.is == "function" ? Object.is : eo, ht = null, Hr = null, _r = null, V = null, hr = !1, Cr = !1, mr = 0, Ft = null, Rr = 0;
  function Zt() {
    if (ht === null) throw Error(u(321));
    return ht;
  }
  function pn() {
    if (0 < Rr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function jr() {
    return V === null ? _r === null ? (hr = !1, _r = V = pn()) : (hr = !0, V = _r) : V.next === null ? (hr = !1, V = V.next = pn()) : (hr = !0, V = V.next), V;
  }
  function Wr() {
    Hr = ht = null, Cr = !1, _r = null, Rr = 0, V = Ft = null;
  }
  function dn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function hn(t, r, o) {
    if (ht = Zt(), V = jr(), hr) {
      var l = V.queue;
      if (r = l.dispatch, Ft !== null && (o = Ft.get(l), o !== void 0)) {
        Ft.delete(l), l = V.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return V.memoizedState = l, [l, r];
      }
      return [V.memoizedState, r];
    }
    return t = t === dn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, V.memoizedState = t, t = V.queue = { last: null, dispatch: null }, t = t.dispatch = ro.bind(null, ht, t), [V.memoizedState, t];
  }
  function mn(t, r) {
    if (ht = Zt(), V = jr(), r = r === void 0 ? null : r, V !== null) {
      var o = V.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var p = 0; p < l.length && p < r.length; p++) if (!to(r[p], l[p])) {
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
  function ro(t, r, o) {
    if (25 <= Rr) throw Error(u(301));
    if (t === ht) if (Cr = !0, t = { action: o, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), o = Ft.get(r), o === void 0) Ft.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function no() {
    throw Error(u(394));
  }
  function br() {
  }
  var vn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Zt(), t._currentValue;
  }, useMemo: mn, useReducer: hn, useRef: function(t) {
    ht = Zt(), V = jr();
    var r = V.memoizedState;
    return r === null ? (t = { current: t }, V.memoizedState = t) : r;
  }, useState: function(t) {
    return hn(dn, t);
  }, useInsertionEffect: br, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return mn(function() {
      return t;
    }, r);
  }, useImperativeHandle: br, useEffect: br, useDebugValue: br, useDeferredValue: function(t) {
    return Zt(), t;
  }, useTransition: function() {
    return Zt(), [!1, no];
  }, useId: function() {
    var t = Hr.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Tr(t) - 1)).toString(32) + r;
    var o = Ar;
    if (o === null) throw Error(u(404));
    return r = mr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Zt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, Ar = null, Vr = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function oo(t) {
    return console.error(t), null;
  }
  function vr() {
  }
  function io(t, r, o, l, p, f, m, E, M) {
    var D = [], P = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: P, pingedTasks: D, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: p === void 0 ? oo : p, onAllReady: f === void 0 ? vr : f, onShellReady: m === void 0 ? vr : m, onShellError: E === void 0 ? vr : E, onFatalError: M === void 0 ? vr : M }, o = Or(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Gr(r, t, null, o, P, F, null, kr), D.push(t), r;
  }
  function Gr(t, r, o, l, p, f, m, E) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var M = { node: r, ping: function() {
      var D = t.pingedTasks;
      D.push(M), D.length === 1 && kn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: p, legacyContext: f, context: m, treeContext: E };
    return p.add(M), M;
  }
  function Or(t, r, o, l, p, f) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: p, textEmbedded: f };
  }
  function yr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Fr(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, ee(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function yn(t, r, o, l, p) {
    for (ht = {}, Hr = r, mr = 0, t = o(l, p); Cr; ) Cr = !1, mr = 0, Rr += 1, V = null, t = o(l, p);
    return Wr(), t;
  }
  function gn(t, r, o, l) {
    var p = o.render(), f = l.childContextTypes;
    if (f != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var E in o) if (!(E in f)) throw Error(u(108, k(l) || "Unknown", E));
        l = je({}, m, o);
      }
      r.legacyContext = l, Me(t, r, p), r.legacyContext = m;
    } else Me(t, r, p);
  }
  function Sn(t, r) {
    if (t && t.defaultProps) {
      r = je({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function qr(t, r, o, l, p) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      p = I(o, r.legacyContext);
      var f = o.contextType;
      f = new o(l, typeof f == "object" && f !== null ? f._currentValue : p), Yt(f, o, l, p), gn(t, r, f, o);
    } else {
      f = I(o, r.legacyContext), p = yn(t, r, o, l, f);
      var m = mr !== 0;
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) Yt(p, o, l, f), gn(t, r, p, o);
      else if (m) {
        l = r.treeContext, r.treeContext = Ot(l, 1, 0);
        try {
          Me(t, r, p);
        } finally {
          r.treeContext = l;
        }
      } else Me(t, r, p);
    }
    else if (typeof o == "string") {
      switch (p = r.blockedSegment, f = kt(p.chunks, o, l, t.responseState, p.formatContext), p.lastPushedText = !1, m = p.formatContext, p.formatContext = tt(m, o, l), Xr(t, r, f), p.formatContext = m, o) {
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
          p.chunks.push(Je, w(o), $e);
      }
      p.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case ur:
        case cr:
        case qt:
          Me(t, r, l.children);
          return;
        case pr:
          Me(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case wr:
          e: {
            o = r.blockedBoundary, p = r.blockedSegment, f = l.fallback, l = l.children, m = /* @__PURE__ */ new Set();
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, M = Or(t, p.chunks.length, E, p.formatContext, !1, !1);
            p.children.push(M), p.lastPushedText = !1;
            var D = Or(t, 0, null, p.formatContext, !1, !1);
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
              r.blockedBoundary = o, r.blockedSegment = p;
            }
            r = Gr(t, f, o, M, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case Er:
          if (l = yn(t, r, o.render, l, p), mr !== 0) {
            o = r.treeContext, r.treeContext = Ot(o, 1, 0);
            try {
              Me(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Me(t, r, l);
          return;
        case e:
          o = o.type, l = Sn(o, l), qr(t, r, o, l, p);
          return;
        case fr:
          if (p = l.children, o = o._context, l = l.value, f = o._currentValue, o._currentValue = l, m = L, L = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: f, value: l }, r.context = l, Me(t, r, p), t = L, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = L = t.parent, r.context = t;
          return;
        case or:
          l = l.children, l = l(o._currentValue), Me(t, r, l);
          return;
        case n:
          p = o._init, o = p(o._payload), l = Sn(o, l), qr(t, r, o, l, void 0);
          return;
      }
      throw Error(u(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function Me(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case sr:
          qr(t, r, o.type, o.props, o.ref);
          return;
        case Gt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Me(t, r, o);
          return;
      }
      if (Lt(o)) {
        xn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var p = [];
          do
            p.push(o.value), o = l.next();
          while (!o.done);
          xn(t, r, p);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = Y(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = Y(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function xn(t, r, o) {
    for (var l = o.length, p = 0; p < l; p++) {
      var f = r.treeContext;
      r.treeContext = Ot(f, l, p);
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
      return Me(t, r, o);
    } catch (M) {
      if (Wr(), typeof M == "object" && M !== null && typeof M.then == "function") {
        o = M;
        var m = r.blockedSegment, E = Or(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(E), m.lastPushedText = !1, t = Gr(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = p, r.context = f, dt(f);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = p, r.context = f, dt(f), M;
    }
  }
  function lo(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, wn(this, r, t);
  }
  function En(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(p) {
      return En(p, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Mr(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Mr(t, o);
    } else t.completedSegments.push(r);
  }
  function wn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = vr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Mr(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(lo, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Mr(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function kn(t) {
    if (t.status !== 2) {
      var r = L, o = Vr.current;
      Vr.current = vn;
      var l = Ar;
      Ar = t.responseState;
      try {
        var p = t.pingedTasks, f;
        for (f = 0; f < p.length; f++) {
          var m = p[f], E = t, M = m.blockedSegment;
          if (M.status === 0) {
            dt(m.context);
            try {
              Me(E, m, m.node), M.lastPushedText && M.textEmbedded && M.chunks.push(rt), m.abortSet.delete(m), M.status = 1, wn(E, m.blockedBoundary, M);
            } catch (qe) {
              if (Wr(), typeof qe == "object" && qe !== null && typeof qe.then == "function") {
                var D = m.ping;
                qe.then(D, D);
              } else {
                m.abortSet.delete(m), M.status = 4;
                var P = m.blockedBoundary, X = qe, Ie = yr(E, X);
                if (P === null ? Fr(E, X) : (P.pendingTasks--, P.forceClientRender || (P.forceClientRender = !0, P.errorDigest = Ie, P.parentFlushed && E.clientRenderedBoundaries.push(P))), E.allPendingTasks--, E.allPendingTasks === 0) {
                  var Ge = E.onAllReady;
                  Ge();
                }
              }
            } finally {
            }
          }
        }
        p.splice(0, f), t.destination !== null && Yr(t, t.destination);
      } catch (qe) {
        yr(t, qe), Fr(t, qe);
      } finally {
        Ar = l, Vr.current = o, o === vn && dt(r);
      }
    }
  }
  function Ir(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, Ce), y(r, t.placeholderPrefix), t = w(l.toString(16)), y(r, t), _(r, zt);
      case 1:
        o.status = 2;
        var p = !0;
        l = o.chunks;
        var f = 0;
        o = o.children;
        for (var m = 0; m < o.length; m++) {
          for (p = o[m]; f < p.index; f++) y(r, l[f]);
          p = Lr(t, r, p);
        }
        for (; f < l.length - 1; f++) y(r, l[f]);
        return f < l.length && (p = _(r, l[f])), p;
      default:
        throw Error(u(390));
    }
  }
  function Lr(t, r, o) {
    var l = o.boundary;
    if (l === null) return Ir(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, _(r, it), y(r, _t), l && (y(r, Ke), y(r, w(j(l))), y(r, Re)), _(r, $t), Ir(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var p = t.responseState, f = p.nextSuspenseID++;
      p = g(p.boundaryPrefix + f.toString(16)), l = l.id = p, ce(r, t.responseState, l), Ir(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ce(r, t.responseState, l.id), Ir(t, r, o);
    else {
      if (_(r, Ut), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Lr(t, r, o[0]);
    }
    return _(r, Tt);
  }
  function Tn(t, r, o) {
    return Ae(r, t.responseState, o.formatContext, o.id), Lr(t, r, o), Qe(r, o.formatContext);
  }
  function _n(t, r, o) {
    for (var l = o.completedSegments, p = 0; p < l.length; p++) Cn(t, r, o, l[p]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, b)), l === null) throw Error(u(395));
    return o = w(o.toString(16)), y(r, l), y(r, x), y(r, t.segmentPrefix), y(r, o), _(r, C);
  }
  function Cn(t, r, o, l) {
    if (l.status === 2) return !0;
    var p = l.id;
    if (p === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return Tn(t, r, l);
    }
    return Tn(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, At) : (t.sentCompleteSegmentFunction = !0, y(r, nr)), y(r, t.segmentPrefix), p = w(p.toString(16)), y(r, p), y(r, ft), y(r, t.placeholderPrefix), y(r, p), _(r, pt);
  }
  function Yr(t, r) {
    S = new Uint8Array(512), T = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Lr(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && _(r, l[o]);
      }
      var p = t.clientRenderedBoundaries, f;
      for (f = 0; f < p.length; f++) {
        var m = p[f];
        l = r;
        var E = t.responseState, M = m.id, D = m.errorDigest, P = m.errorMessage, X = m.errorComponentStack;
        if (y(l, E.startInlineScript), E.sentClientRenderFunction ? y(l, $) : (E.sentClientRenderFunction = !0, y(
          l,
          B
        )), M === null) throw Error(u(395));
        y(l, M), y(l, re), (D || P || X) && (y(l, Oe), y(l, w(Ne(D || "")))), (P || X) && (y(l, Oe), y(l, w(Ne(P || "")))), X && (y(l, Oe), y(l, w(Ne(X)))), _(l, Q);
      }
      p.splice(0, f);
      var Ie = t.completedBoundaries;
      for (f = 0; f < Ie.length; f++) _n(t, r, Ie[f]);
      Ie.splice(0, f), A(r), S = new Uint8Array(512), T = 0;
      var Ge = t.partialBoundaries;
      for (f = 0; f < Ge.length; f++) {
        var qe = Ge[f];
        e: {
          p = t, m = r;
          var Pr = qe.completedSegments;
          for (E = 0; E < Pr.length; E++) if (!Cn(
            p,
            m,
            qe,
            Pr[E]
          )) {
            E++, Pr.splice(0, E);
            var bn = !1;
            break e;
          }
          Pr.splice(0, E), bn = !0;
        }
        if (!bn) {
          t.destination = null, f++, Ge.splice(0, f);
          return;
        }
      }
      Ge.splice(0, f);
      var Zr = t.completedBoundaries;
      for (f = 0; f < Zr.length; f++) _n(t, r, Zr[f]);
      Zr.splice(0, f);
    } finally {
      A(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function Rn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return En(l, t, r);
      }), o.clear(), t.destination !== null && Yr(t, t.destination);
    } catch (l) {
      yr(t, l), Fr(t, l);
    }
  }
  return Br.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var p, f, m = new Promise(function(P, X) {
        f = P, p = X;
      }), E = io(t, Nt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Dt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, f, function() {
        var P = new ReadableStream({ type: "bytes", pull: function(X) {
          if (E.status === 1) E.status = 2, ee(X, E.fatalError);
          else if (E.status !== 2 && E.destination === null) {
            E.destination = X;
            try {
              Yr(E, X);
            } catch (Ie) {
              yr(E, Ie), Fr(E, Ie);
            }
          }
        }, cancel: function() {
          Rn(E);
        } }, { highWaterMark: 0 });
        P.allReady = m, o(P);
      }, function(P) {
        m.catch(function() {
        }), l(P);
      }, p);
      if (r && r.signal) {
        var M = r.signal, D = function() {
          Rn(E, M.reason), M.removeEventListener("abort", D);
        };
        M.addEventListener("abort", D);
      }
      kn(E);
    });
  }, Br.version = "18.3.1", Br;
}
var ir, Xn;
ir = Wo(), Xn = Vo();
ir.version;
ir.renderToString;
ir.renderToStaticMarkup;
ir.renderToNodeStream;
ir.renderToStaticNodeStream;
Xn.renderToReadableStream;
const Go = "staticMarkup";
function Yn() {
  const u = ao().indexOf(Go) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const Zn = ({ gaData: v, prefix: u = "", children: S }) => {
  const { isReact: T } = Yn(), { onClick: y, ..._ } = S.props;
  if (T)
    return xr.cloneElement(S, {
      ..._,
      onClick: (w) => (jo(v), y ? y(w) : !0)
    });
  let A = "";
  ["input", "header", "header-input"].includes(u) && (A = `-${u}`);
  const O = {
    [`data-ga${A}`]: v.text,
    [`data-ga${A}-name`]: v.name,
    [`data-ga${A}-event`]: v.event,
    [`data-ga${A}-action`]: v.action,
    [`data-ga${A}-type`]: v.type,
    [`data-ga${A}-region`]: v.region,
    [`data-ga${A}-section`]: v.section,
    [`data-ga${A}-component`]: v.component
  };
  return xr.cloneElement(S, {
    ..._,
    onClick: y,
    ...O
  });
}, qo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, cn = ({
  label: v,
  cardTitle: u,
  gaData: S,
  ariaLabel: T,
  block: y,
  color: _,
  disabled: A,
  element: O,
  href: w,
  icon: g,
  innerRef: ee,
  onClick: z,
  size: de,
  classes: ye,
  target: G,
  ...mt
}) => {
  const te = ln("btn", {
    [`btn-${_}`]: !0,
    "btn-md": de === "small",
    "btn-sm": de === "xsmall",
    "btn-block": y,
    disabled: A
  });
  let H = O;
  return w && O === "button" && (H = "a"), /* @__PURE__ */ pe.jsx(
    Zn,
    {
      gaData: {
        ...qo,
        section: u,
        // @deprecated - remove at some point
        ...S,
        text: v
      },
      children: /* @__PURE__ */ pe.jsxs(
        H,
        {
          type: H === "button" && z ? "button" : void 0,
          ...mt,
          className: ln(ye) || te,
          href: w,
          ref: ee,
          onClick: z,
          "aria-label": T,
          target: H === "a" ? G : null,
          children: [
            g && /* @__PURE__ */ pe.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
            v
          ]
        }
      )
    }
  );
};
cn.propTypes = {
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
  gaData: Vn,
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
cn.defaultProps = {
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
const Xo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, fn = ({
  color: v,
  icon: u,
  innerRef: S,
  onClick: T,
  size: y,
  cardTitle: _,
  className: A,
  gaData: O,
  ...w
}) => {
  const g = () => {
    T == null || T();
  };
  return /* @__PURE__ */ pe.jsx(
    Zn,
    {
      gaData: {
        ...Xo,
        section: _,
        // @deprecated - remove at some point
        ...O,
        text: `${u == null ? void 0 : u[1]} icon`
      },
      children: /* @__PURE__ */ pe.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${v} ${y === "large" && "btn-circle-large"} ${A}`,
          ref: S,
          "aria-label": "Close",
          onClick: g,
          ...w,
          children: /* @__PURE__ */ pe.jsx("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]}` })
        }
      )
    }
  );
};
fn.propTypes = {
  /**
    Color the button based on the background color
  */
  color: R.oneOf(["white", "gray", "black"]),
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
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: R.string,
  /**
   * Google Analytics event data
   */
  gaData: Vn,
  /**
    Button size
  */
  size: R.oneOf(["large", "small"]),
  className: R.string
};
fn.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const Zo = ({
  title: v,
  color: u = "orange",
  buttons: S = [],
  children: T
}) => {
  const { isBootstrap: y, isReact: _ } = Yn(), [A, O] = so(!0), w = () => O(!1);
  return A && /* @__PURE__ */ pe.jsx("div", { role: "alert", className: `banner-${u} alert alert-dismissable`, children: /* @__PURE__ */ pe.jsxs("div", { className: "banner uds-content-align", children: [
    /* @__PURE__ */ pe.jsx("div", { className: "banner-icon", children: /* @__PURE__ */ pe.jsx("span", { className: "fa fa-icon fa-bell" }) }),
    /* @__PURE__ */ pe.jsxs("div", { className: "banner-content", children: [
      /* @__PURE__ */ pe.jsx("h1", { tabIndex: 0, children: v }),
      T
    ] }),
    S.length && /* @__PURE__ */ pe.jsx("div", { className: "banner-buttons", children: S.map((g) => /* @__PURE__ */ pe.jsx(
      cn,
      {
        classes: ln("btn btn-sm", {
          "btn-dark": u !== "black",
          "btn-light": u === "black"
        }),
        href: g.href,
        label: g.label,
        gaData: {
          section: "NotificationBanner"
        }
      },
      `${g.label}${g.href}`
    )) }),
    /* @__PURE__ */ pe.jsx("div", { className: "banner-close", children: /* @__PURE__ */ pe.jsx(
      fn,
      {
        "aria-label": "Close",
        icon: ["fas", "times"],
        onClick: _ && w,
        "data-bs-dismiss": y && "alert",
        gaData: {
          section: "NotificationBanner"
        }
      }
    ) })
  ] }) });
};
export {
  Zo as NotificationBanner
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
