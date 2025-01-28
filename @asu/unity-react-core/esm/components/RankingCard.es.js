import Er, { useId as Wn, useState as po } from "react";
function Vn(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var Gn = { exports: {} }, gr = {};
var Fn;
function fo() {
  if (Fn) return gr;
  Fn = 1;
  var m = Er, u = Symbol.for("react.element"), g = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, y = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(A, w, S) {
    var $, z = {}, ae = null, ye = null;
    S !== void 0 && (ae = "" + S), w.key !== void 0 && (ae = "" + w.key), w.ref !== void 0 && (ye = w.ref);
    for ($ in w) T.call(w, $) && !_.hasOwnProperty($) && (z[$] = w[$]);
    if (A && A.defaultProps) for ($ in w = A.defaultProps, w) z[$] === void 0 && (z[$] = w[$]);
    return { $$typeof: u, type: A, key: ae, ref: ye, props: z, _owner: y.current };
  }
  return gr.Fragment = g, gr.jsx = F, gr.jsxs = F, gr;
}
Gn.exports = fo();
var j = Gn.exports, qn = { exports: {} };
(function(m) {
  (function() {
    var u = {}.hasOwnProperty;
    function g() {
      for (var _ = "", F = 0; F < arguments.length; F++) {
        var A = arguments[F];
        A && (_ = y(_, T(A)));
      }
      return _;
    }
    function T(_) {
      if (typeof _ == "string" || typeof _ == "number")
        return _;
      if (typeof _ != "object")
        return "";
      if (Array.isArray(_))
        return g.apply(null, _);
      if (_.toString !== Object.prototype.toString && !_.toString.toString().includes("[native code]"))
        return _.toString();
      var F = "";
      for (var A in _)
        u.call(_, A) && _[A] && (F = y(F, A));
      return F;
    }
    function y(_, F) {
      return F ? _ ? _ + " " + F : _ + F : _;
    }
    m.exports ? (g.default = g, m.exports = g) : window.classNames = g;
  })();
})(qn);
var ho = qn.exports;
const xr = /* @__PURE__ */ Vn(ho);
var Xn = { exports: {} }, Kr, bn;
function mo() {
  if (bn) return Kr;
  bn = 1;
  var m = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Kr = m, Kr;
}
var Qr, Mn;
function vo() {
  if (Mn) return Qr;
  Mn = 1;
  var m = mo();
  function u() {
  }
  function g() {
  }
  return g.resetWarningCache = u, Qr = function() {
    function T(F, A, w, S, $, z) {
      if (z !== m) {
        var ae = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ae.name = "Invariant Violation", ae;
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
      checkPropTypes: g,
      resetWarningCache: u
    };
    return _.PropTypes = _, _;
  }, Qr;
}
Xn.exports = vo()();
var yo = Xn.exports;
const B = /* @__PURE__ */ Vn(yo), go = (m) => (m || []).join(" ");
function Ot(m) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Ot(m);
}
function an(m, u) {
  return an = Object.setPrototypeOf || function(T, y) {
    return T.__proto__ = y, T;
  }, an(m, u);
}
function So() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jr(m, u, g) {
  return So() ? jr = Reflect.construct : jr = function(y, _, F) {
    var A = [null];
    A.push.apply(A, _);
    var w = Function.bind.apply(y, A), S = new w();
    return F && an(S, F.prototype), S;
  }, jr.apply(null, arguments);
}
function Je(m) {
  return xo(m) || Eo(m) || wo(m) || ko();
}
function xo(m) {
  if (Array.isArray(m)) return sn(m);
}
function Eo(m) {
  if (typeof Symbol < "u" && m[Symbol.iterator] != null || m["@@iterator"] != null) return Array.from(m);
}
function wo(m, u) {
  if (m) {
    if (typeof m == "string") return sn(m, u);
    var g = Object.prototype.toString.call(m).slice(8, -1);
    if (g === "Object" && m.constructor && (g = m.constructor.name), g === "Map" || g === "Set") return Array.from(m);
    if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return sn(m, u);
  }
}
function sn(m, u) {
  (u == null || u > m.length) && (u = m.length);
  for (var g = 0, T = new Array(u); g < u; g++) T[g] = m[g];
  return T;
}
function ko() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var To = Object.hasOwnProperty, On = Object.setPrototypeOf, _o = Object.isFrozen, Co = Object.getPrototypeOf, Ro = Object.getOwnPropertyDescriptor, ve = Object.freeze, Be = Object.seal, Ao = Object.create, Yn = typeof Reflect < "u" && Reflect, Hr = Yn.apply, un = Yn.construct;
Hr || (Hr = function(u, g, T) {
  return u.apply(g, T);
});
ve || (ve = function(u) {
  return u;
});
Be || (Be = function(u) {
  return u;
});
un || (un = function(u, g) {
  return jr(u, Je(g));
});
var Fo = ze(Array.prototype.forEach), In = ze(Array.prototype.pop), Sr = ze(Array.prototype.push), Ur = ze(String.prototype.toLowerCase), en = ze(String.prototype.toString), Ln = ze(String.prototype.match), Ze = ze(String.prototype.replace), bo = ze(String.prototype.indexOf), Mo = ze(String.prototype.trim), pe = ze(RegExp.prototype.test), tn = Oo(TypeError);
function ze(m) {
  return function(u) {
    for (var g = arguments.length, T = new Array(g > 1 ? g - 1 : 0), y = 1; y < g; y++)
      T[y - 1] = arguments[y];
    return Hr(m, u, T);
  };
}
function Oo(m) {
  return function() {
    for (var u = arguments.length, g = new Array(u), T = 0; T < u; T++)
      g[T] = arguments[T];
    return un(m, g);
  };
}
function N(m, u, g) {
  var T;
  g = (T = g) !== null && T !== void 0 ? T : Ur, On && On(m, null);
  for (var y = u.length; y--; ) {
    var _ = u[y];
    if (typeof _ == "string") {
      var F = g(_);
      F !== _ && (_o(u) || (u[y] = F), _ = F);
    }
    m[_] = !0;
  }
  return m;
}
function Jt(m) {
  var u = Ao(null), g;
  for (g in m)
    Hr(To, m, [g]) === !0 && (u[g] = m[g]);
  return u;
}
function Dr(m, u) {
  for (; m !== null; ) {
    var g = Ro(m, u);
    if (g) {
      if (g.get)
        return ze(g.get);
      if (typeof g.value == "function")
        return ze(g.value);
    }
    m = Co(m);
  }
  function T(y) {
    return console.warn("fallback value for", y), null;
  }
  return T;
}
var Nn = ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), rn = ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), nn = ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Io = ve(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), on = ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Lo = ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Pn = ve(["#text"]), Dn = ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ln = ve(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Bn = ve(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Br = ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), No = Be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Po = Be(/<%[\w\W]*|[\w\W]*%>/gm), Do = Be(/\${[\w\W]*}/gm), Bo = Be(/^data-[\-\w.\u00B7-\uFFFF]/), zo = Be(/^aria-[\-\w]+$/), jo = Be(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uo = Be(/^(?:\w+script|data):/i), Ho = Be(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $o = Be(/^html$/i), Wo = Be(/^[a-z][.\w]*(-[.\w]+)+$/i), Vo = function() {
  return typeof window > "u" ? null : window;
}, Go = function(u, g) {
  if (Ot(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var T = null, y = "data-tt-policy-suffix";
  g.currentScript && g.currentScript.hasAttribute(y) && (T = g.currentScript.getAttribute(y));
  var _ = "dompurify" + (T ? "#" + T : "");
  try {
    return u.createPolicy(_, {
      createHTML: function(A) {
        return A;
      },
      createScriptURL: function(A) {
        return A;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + _ + " could not be created."), null;
  }
};
function Zn() {
  var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vo(), u = function(s) {
    return Zn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !m || !m.document || m.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var g = m.document, T = m.document, y = m.DocumentFragment, _ = m.HTMLTemplateElement, F = m.Node, A = m.Element, w = m.NodeFilter, S = m.NamedNodeMap, $ = S === void 0 ? m.NamedNodeMap || m.MozNamedAttrMap : S, z = m.HTMLFormElement, ae = m.DOMParser, ye = m.trustedTypes, X = A.prototype, je = Dr(X, "cloneNode"), re = Dr(X, "nextSibling"), W = Dr(X, "childNodes"), se = Dr(X, "parentNode");
  if (typeof _ == "function") {
    var Le = T.createElement("template");
    Le.content && Le.content.ownerDocument && (T = Le.content.ownerDocument);
  }
  var ne = Go(ye, g), vt = ne ? ne.createHTML("") : "", ie = T, V = ie.implementation, lr = ie.createNodeIterator, It = ie.createDocumentFragment, Lt = ie.getElementsByTagName, Qt = g.importNode, he = {};
  try {
    he = Jt(T).documentMode ? T.documentMode : {};
  } catch {
  }
  var ge = {};
  u.isSupported = typeof se == "function" && V && V.createHTMLDocument !== void 0 && he !== 9;
  var yt = No, gt = Po, Nt = Do, ar = Bo, Pt = zo, Se = Uo, Dt = Ho, rt = Wo, nt = jo, J = null, St = N({}, [].concat(Je(Nn), Je(rn), Je(nn), Je(on), Je(Pn))), ee = null, xt = N({}, [].concat(Je(Dn), Je(ln), Je(Bn), Je(Br))), G = Object.seal(Object.create(null, {
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
  })), Ue = null, me = null, Ne = !0, xe = !0, Et = !1, le = !0, ce = !1, wt = !0, Ee = !1, Bt = !1, Ke = !1, we = !1, He = !1, ot = !1, _e = !0, ue = !1, er = "user-content-", kt = !0, Qe = !1, $e = {}, Ce = null, zt = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), jt = null, tr = N({}, ["audio", "video", "img", "source", "image", "track"]), it = null, lt = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Tt = "http://www.w3.org/1998/Math/MathML", _t = "http://www.w3.org/2000/svg", Re = "http://www.w3.org/1999/xhtml", et = Re, Ut = !1, fe = null, Ht = N({}, [Tt, _t, Re], en), ke, U = ["application/xhtml+xml", "text/html"], at = "text/html", Y, Te = null, Pe = T.createElement("form"), st = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, Ae = function(s) {
    Te && Te === s || ((!s || Ot(s) !== "object") && (s = {}), s = Jt(s), ke = // eslint-disable-next-line unicorn/prefer-includes
    U.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? ke = at : ke = s.PARSER_MEDIA_TYPE, Y = ke === "application/xhtml+xml" ? en : Ur, J = "ALLOWED_TAGS" in s ? N({}, s.ALLOWED_TAGS, Y) : St, ee = "ALLOWED_ATTR" in s ? N({}, s.ALLOWED_ATTR, Y) : xt, fe = "ALLOWED_NAMESPACES" in s ? N({}, s.ALLOWED_NAMESPACES, en) : Ht, it = "ADD_URI_SAFE_ATTR" in s ? N(
      Jt(lt),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Y
      // eslint-disable-line indent
    ) : lt, jt = "ADD_DATA_URI_TAGS" in s ? N(
      Jt(tr),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Y
      // eslint-disable-line indent
    ) : tr, Ce = "FORBID_CONTENTS" in s ? N({}, s.FORBID_CONTENTS, Y) : zt, Ue = "FORBID_TAGS" in s ? N({}, s.FORBID_TAGS, Y) : {}, me = "FORBID_ATTR" in s ? N({}, s.FORBID_ATTR, Y) : {}, $e = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ne = s.ALLOW_ARIA_ATTR !== !1, xe = s.ALLOW_DATA_ATTR !== !1, Et = s.ALLOW_UNKNOWN_PROTOCOLS || !1, le = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ce = s.SAFE_FOR_TEMPLATES || !1, wt = s.SAFE_FOR_XML !== !1, Ee = s.WHOLE_DOCUMENT || !1, we = s.RETURN_DOM || !1, He = s.RETURN_DOM_FRAGMENT || !1, ot = s.RETURN_TRUSTED_TYPE || !1, Ke = s.FORCE_BODY || !1, _e = s.SANITIZE_DOM !== !1, ue = s.SANITIZE_NAMED_PROPS || !1, kt = s.KEEP_CONTENT !== !1, Qe = s.IN_PLACE || !1, nt = s.ALLOWED_URI_REGEXP || nt, et = s.NAMESPACE || Re, G = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && st(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (G.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && st(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (G.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ce && (xe = !1), He && (we = !0), $e && (J = N({}, Je(Pn)), ee = [], $e.html === !0 && (N(J, Nn), N(ee, Dn)), $e.svg === !0 && (N(J, rn), N(ee, ln), N(ee, Br)), $e.svgFilters === !0 && (N(J, nn), N(ee, ln), N(ee, Br)), $e.mathMl === !0 && (N(J, on), N(ee, Bn), N(ee, Br))), s.ADD_TAGS && (J === St && (J = Jt(J)), N(J, s.ADD_TAGS, Y)), s.ADD_ATTR && (ee === xt && (ee = Jt(ee)), N(ee, s.ADD_ATTR, Y)), s.ADD_URI_SAFE_ATTR && N(it, s.ADD_URI_SAFE_ATTR, Y), s.FORBID_CONTENTS && (Ce === zt && (Ce = Jt(Ce)), N(Ce, s.FORBID_CONTENTS, Y)), kt && (J["#text"] = !0), Ee && N(J, ["html", "head", "body"]), J.table && (N(J, ["tbody"]), delete Ue.tbody), ve && ve(s), Te = s);
  }, $t = N({}, ["mi", "mo", "mn", "ms", "mtext"]), Ct = N({}, ["annotation-xml"]), Wt = N({}, ["title", "style", "font", "a", "script"]), ut = N({}, rn);
  N(ut, nn), N(ut, Io);
  var Rt = N({}, on);
  N(Rt, Lo);
  var rr = function(s) {
    var x = se(s);
    (!x || !x.tagName) && (x = {
      namespaceURI: et,
      tagName: "template"
    });
    var C = Ur(s.tagName), D = Ur(x.tagName);
    return fe[s.namespaceURI] ? s.namespaceURI === _t ? x.namespaceURI === Re ? C === "svg" : x.namespaceURI === Tt ? C === "svg" && (D === "annotation-xml" || $t[D]) : !!ut[C] : s.namespaceURI === Tt ? x.namespaceURI === Re ? C === "math" : x.namespaceURI === _t ? C === "math" && Ct[D] : !!Rt[C] : s.namespaceURI === Re ? x.namespaceURI === _t && !Ct[D] || x.namespaceURI === Tt && !$t[D] ? !1 : !Rt[C] && (Wt[C] || !ut[C]) : !!(ke === "application/xhtml+xml" && fe[s.namespaceURI]) : !1;
  }, de = function(s) {
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
  }, At = function(s, x) {
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
    if (x.removeAttribute(s), s === "is" && !ee[s])
      if (we || He)
        try {
          de(x);
        } catch {
        }
      else
        try {
          x.setAttribute(s, "");
        } catch {
        }
  }, ct = function(s) {
    var x, C;
    if (Ke)
      s = "<remove></remove>" + s;
    else {
      var D = Ln(s, /^[\r\n\t ]+/);
      C = D && D[0];
    }
    ke === "application/xhtml+xml" && et === Re && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var H = ne ? ne.createHTML(s) : s;
    if (et === Re)
      try {
        x = new ae().parseFromString(H, ke);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = V.createDocument(et, "template", null);
      try {
        x.documentElement.innerHTML = Ut ? vt : H;
      } catch {
      }
    }
    var oe = x.body || x.documentElement;
    return s && C && oe.insertBefore(T.createTextNode(C), oe.childNodes[0] || null), et === Re ? Lt.call(x, Ee ? "html" : "body")[0] : Ee ? x.documentElement : oe;
  }, Vt = function(s) {
    return lr.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      w.SHOW_ELEMENT | w.SHOW_COMMENT | w.SHOW_TEXT | w.SHOW_PROCESSING_INSTRUCTION | w.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(s) {
    return s instanceof z && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof $) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, We = function(s) {
    return Ot(F) === "object" ? s instanceof F : s && Ot(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Fe = function(s, x, C) {
    ge[s] && Fo(ge[s], function(D) {
      D.call(u, x, C, Te);
    });
  }, tt = function(s) {
    var x;
    if (Fe("beforeSanitizeElements", s, null), pt(s) || pe(/[\u0080-\uFFFF]/, s.nodeName))
      return de(s), !0;
    var C = Y(s.nodeName);
    if (Fe("uponSanitizeElement", s, {
      tagName: C,
      allowedTags: J
    }), s.hasChildNodes() && !We(s.firstElementChild) && (!We(s.content) || !We(s.content.firstElementChild)) && pe(/<[/\w]/g, s.innerHTML) && pe(/<[/\w]/g, s.textContent) || C === "select" && pe(/<template/i, s.innerHTML) || s.nodeType === 7 || wt && s.nodeType === 8 && pe(/<[/\w]/g, s.data))
      return de(s), !0;
    if (!J[C] || Ue[C]) {
      if (!Ue[C] && Ft(C) && (G.tagNameCheck instanceof RegExp && pe(G.tagNameCheck, C) || G.tagNameCheck instanceof Function && G.tagNameCheck(C)))
        return !1;
      if (kt && !Ce[C]) {
        var D = se(s) || s.parentNode, H = W(s) || s.childNodes;
        if (H && D)
          for (var oe = H.length, te = oe - 1; te >= 0; --te) {
            var be = je(H[te], !0);
            be.__removalCount = (s.__removalCount || 0) + 1, D.insertBefore(be, re(s));
          }
      }
      return de(s), !0;
    }
    return s instanceof A && !rr(s) || (C === "noscript" || C === "noembed" || C === "noframes") && pe(/<\/no(script|embed|frames)/i, s.innerHTML) ? (de(s), !0) : (ce && s.nodeType === 3 && (x = s.textContent, x = Ze(x, yt, " "), x = Ze(x, gt, " "), x = Ze(x, Nt, " "), s.textContent !== x && (Sr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = x)), Fe("afterSanitizeElements", s, null), !1);
  }, nr = function(s, x, C) {
    if (_e && (x === "id" || x === "name") && (C in T || C in Pe))
      return !1;
    if (!(xe && !me[x] && pe(ar, x))) {
      if (!(Ne && pe(Pt, x))) {
        if (!ee[x] || me[x]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ft(s) && (G.tagNameCheck instanceof RegExp && pe(G.tagNameCheck, s) || G.tagNameCheck instanceof Function && G.tagNameCheck(s)) && (G.attributeNameCheck instanceof RegExp && pe(G.attributeNameCheck, x) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            x === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && pe(G.tagNameCheck, C) || G.tagNameCheck instanceof Function && G.tagNameCheck(C)))
          ) return !1;
        } else if (!it[x]) {
          if (!pe(nt, Ze(C, Dt, ""))) {
            if (!((x === "src" || x === "xlink:href" || x === "href") && s !== "script" && bo(C, "data:") === 0 && jt[s])) {
              if (!(Et && !pe(Se, Ze(C, Dt, "")))) {
                if (C)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ft = function(s) {
    return s !== "annotation-xml" && Ln(s, rt);
  }, ft = function(s) {
    var x, C, D, H;
    Fe("beforeSanitizeAttributes", s, null);
    var oe = s.attributes;
    if (oe) {
      var te = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: ee
      };
      for (H = oe.length; H--; ) {
        x = oe[H];
        var be = x, K = be.name, De = be.namespaceURI;
        if (C = K === "value" ? x.value : Mo(x.value), D = Y(K), te.attrName = D, te.attrValue = C, te.keepAttr = !0, te.forceKeepAttr = void 0, Fe("uponSanitizeAttribute", s, te), C = te.attrValue, !te.forceKeepAttr && (At(K, s), !!te.keepAttr)) {
          if (!le && pe(/\/>/i, C)) {
            At(K, s);
            continue;
          }
          ce && (C = Ze(C, yt, " "), C = Ze(C, gt, " "), C = Ze(C, Nt, " "));
          var Ve = Y(s.nodeName);
          if (nr(Ve, D, C)) {
            if (ue && (D === "id" || D === "name") && (At(K, s), C = er + C), wt && pe(/((--!?|])>)|<\/(style|title)/i, C)) {
              At(K, s);
              continue;
            }
            if (ne && Ot(ye) === "object" && typeof ye.getAttributeType == "function" && !De)
              switch (ye.getAttributeType(Ve, D)) {
                case "TrustedHTML": {
                  C = ne.createHTML(C);
                  break;
                }
                case "TrustedScriptURL": {
                  C = ne.createScriptURL(C);
                  break;
                }
              }
            try {
              De ? s.setAttributeNS(De, K, C) : s.setAttribute(K, C), pt(s) ? de(s) : In(u.removed);
            } catch {
            }
          }
        }
      }
      Fe("afterSanitizeAttributes", s, null);
    }
  }, dt = function R(s) {
    var x, C = Vt(s);
    for (Fe("beforeSanitizeShadowDOM", s, null); x = C.nextNode(); )
      Fe("uponSanitizeShadowNode", x, null), !tt(x) && (x.content instanceof y && R(x.content), ft(x));
    Fe("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(R) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x, C, D, H, oe;
    if (Ut = !R, Ut && (R = "<!-->"), typeof R != "string" && !We(R))
      if (typeof R.toString == "function") {
        if (R = R.toString(), typeof R != "string")
          throw tn("dirty is not a string, aborting");
      } else
        throw tn("toString is not a function");
    if (!u.isSupported) {
      if (Ot(m.toStaticHTML) === "object" || typeof m.toStaticHTML == "function") {
        if (typeof R == "string")
          return m.toStaticHTML(R);
        if (We(R))
          return m.toStaticHTML(R.outerHTML);
      }
      return R;
    }
    if (Bt || Ae(s), u.removed = [], typeof R == "string" && (Qe = !1), Qe) {
      if (R.nodeName) {
        var te = Y(R.nodeName);
        if (!J[te] || Ue[te])
          throw tn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (R instanceof F)
      x = ct("<!---->"), C = x.ownerDocument.importNode(R, !0), C.nodeType === 1 && C.nodeName === "BODY" || C.nodeName === "HTML" ? x = C : x.appendChild(C);
    else {
      if (!we && !ce && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return ne && ot ? ne.createHTML(R) : R;
      if (x = ct(R), !x)
        return we ? null : ot ? vt : "";
    }
    x && Ke && de(x.firstChild);
    for (var be = Vt(Qe ? R : x); D = be.nextNode(); )
      D.nodeType === 3 && D === H || tt(D) || (D.content instanceof y && dt(D.content), ft(D), H = D);
    if (H = null, Qe)
      return R;
    if (we) {
      if (He)
        for (oe = It.call(x.ownerDocument); x.firstChild; )
          oe.appendChild(x.firstChild);
      else
        oe = x;
      return (ee.shadowroot || ee.shadowrootmod) && (oe = Qt.call(g, oe, !0)), oe;
    }
    var K = Ee ? x.outerHTML : x.innerHTML;
    return Ee && J["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && pe($o, x.ownerDocument.doctype.name) && (K = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + K), ce && (K = Ze(K, yt, " "), K = Ze(K, gt, " "), K = Ze(K, Nt, " ")), ne && ot ? ne.createHTML(K) : K;
  }, u.setConfig = function(R) {
    Ae(R), Bt = !0;
  }, u.clearConfig = function() {
    Te = null, Bt = !1;
  }, u.isValidAttribute = function(R, s, x) {
    Te || Ae({});
    var C = Y(R), D = Y(s);
    return nr(C, D, x);
  }, u.addHook = function(R, s) {
    typeof s == "function" && (ge[R] = ge[R] || [], Sr(ge[R], s));
  }, u.removeHook = function(R) {
    if (ge[R])
      return In(ge[R]);
  }, u.removeHooks = function(R) {
    ge[R] && (ge[R] = []);
  }, u.removeAllHooks = function() {
    ge = {};
  }, u;
}
var qo = Zn();
const cn = (m) => ({ __html: qo.sanitize(m) });
B.shape({
  event: B.string,
  action: B.string,
  name: B.string,
  region: B.string,
  section: B.string,
  component: B.string,
  type: B.string,
  text: B.string
});
const Xo = ({
  event: m = "",
  action: u = "",
  name: g = "",
  type: T = "",
  section: y = "",
  text: _ = "",
  region: F = "",
  component: A = ""
}) => {
  const { dataLayer: w } = window, S = {
    event: m.toLowerCase(),
    action: u.toLowerCase(),
    name: g.toLowerCase(),
    type: T.toLowerCase(),
    region: F.toLowerCase(),
    section: y.toLowerCase(),
    text: _.toLowerCase(),
    component: A.toLowerCase()
  };
  w && w.push(S);
};
var Kt = {};
var zn;
function Yo() {
  if (zn) return Kt;
  zn = 1;
  var m = Er;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, _ = {};
  function F(e) {
    return g.call(_, e) ? !0 : g.call(y, e) ? !1 : T.test(e) ? _[e] = !0 : (y[e] = !0, !1);
  }
  function A(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new A(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    w[n] = new A(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new A(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new A(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new A(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new A(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var S = /[\-:]([a-z])/g;
  function $(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      S,
      $
    );
    w[n] = new A(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(S, $);
    w[n] = new A(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(S, $);
    w[n] = new A(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
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
  }, ae = ["Webkit", "ms", "Moz", "O"];
  Object.keys(z).forEach(function(e) {
    ae.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), z[n] = z[e];
    });
  });
  var ye = /["'&<>]/;
  function X(e) {
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
  var je = /([A-Z])/g, re = /^ms-/, W = Array.isArray;
  function se(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function Le(e, n, i) {
    switch (n) {
      case "select":
        return se(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return se(2, null);
      case "math":
        return se(3, null);
      case "foreignObject":
        return se(1, null);
      case "table":
        return se(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return se(5, null);
      case "colgroup":
        return se(7, null);
      case "tr":
        return se(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? se(1, null) : e;
  }
  var ne = /* @__PURE__ */ new Map();
  function vt(e, n, i) {
    if (typeof i != "object") throw Error(u(62));
    n = !0;
    for (var a in i) if (g.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = X(a);
          d = X(("" + d).trim());
        } else {
          c = a;
          var h = ne.get(c);
          h !== void 0 || (h = X(c.replace(je, "-$1").toLowerCase().replace(re, "-ms-")), ne.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || g.call(z, a) ? "" + d : d + "px" : X(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function ie(e, n, i, a) {
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
            a === !0 ? e.push(" ", i, '=""') : a !== !1 && e.push(" ", i, '="', X(a), '"');
            break;
          case 5:
            isNaN(a) || e.push(" ", i, '="', X(a), '"');
            break;
          case 6:
            !isNaN(a) && 1 <= a && e.push(" ", i, '="', X(a), '"');
            break;
          default:
            n.sanitizeURL && (a = "" + a), e.push(" ", i, '="', X(a), '"');
        }
      } else if (F(i)) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = i.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", i, '="', X(a), '"');
      }
    }
  }
  function V(e, n, i) {
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
  function It(e, n, i, a) {
    e.push(he(i));
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
          ie(e, a, c, h);
      }
    }
    return e.push(">"), V(e, d, i), typeof i == "string" ? (e.push(X(i)), null) : i;
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
              ie(e, a, I, k);
          }
        }
        return e.push(">"), V(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(he("option"));
        var b = k = null, O = null, I = null;
        for (c in i) if (g.call(i, c)) {
          var Q = i[c];
          if (Q != null) switch (c) {
            case "children":
              k = Q;
              break;
            case "selected":
              O = Q;
              break;
            case "dangerouslySetInnerHTML":
              I = Q;
              break;
            case "value":
              b = Q;
            default:
              ie(e, a, c, Q);
          }
        }
        if (h != null) if (i = b !== null ? "" + b : lr(k), W(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else O && e.push(' selected=""');
        return e.push(">"), V(e, I, k), k;
      case "textarea":
        e.push(he("textarea")), I = h = c = null;
        for (k in i) if (g.call(i, k) && (b = i[k], b != null)) switch (k) {
          case "children":
            I = b;
            break;
          case "value":
            c = b;
            break;
          case "defaultValue":
            h = b;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            ie(
              e,
              a,
              k,
              b
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), I != null) {
          if (c != null) throw Error(u(92));
          if (W(I) && 1 < I.length) throw Error(u(93));
          c = "" + I;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(X("" + c)), null;
      case "input":
        e.push(he("input")), b = I = k = c = null;
        for (h in i) if (g.call(i, h) && (O = i[h], O != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            b = O;
            break;
          case "defaultValue":
            k = O;
            break;
          case "checked":
            I = O;
            break;
          case "value":
            c = O;
            break;
          default:
            ie(e, a, h, O);
        }
        return I !== null ? ie(e, a, "checked", I) : b !== null && ie(e, a, "checked", b), c !== null ? ie(e, a, "value", c) : k !== null && ie(e, a, "value", k), e.push("/>"), null;
      case "menuitem":
        e.push(he("menuitem"));
        for (var Ge in i) if (g.call(i, Ge) && (c = i[Ge], c != null)) switch (Ge) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            ie(e, a, Ge, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(he("title")), c = null;
        for (Q in i) if (g.call(i, Q) && (h = i[Q], h != null)) switch (Q) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            ie(e, a, Q, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(he(n)), h = c = null;
        for (b in i) if (g.call(i, b) && (k = i[b], k != null)) switch (b) {
          case "children":
            c = k;
            break;
          case "dangerouslySetInnerHTML":
            h = k;
            break;
          default:
            ie(e, a, b, k);
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
        for (var qe in i) if (g.call(i, qe) && (c = i[qe], c != null)) switch (qe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            ie(e, a, qe, c);
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
        for (O in i) if (g.call(i, O) && (k = i[O], k != null)) switch (O) {
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
            F(O) && typeof k != "function" && typeof k != "symbol" && e.push(" ", O, '="', X(k), '"');
        }
        return e.push(">"), V(e, h, c), c;
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
  function Se(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Dt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(X(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(X(n)), e = !0), e);
  }
  var rt = Object.assign, nt = Symbol.for("react.element"), J = Symbol.for("react.portal"), St = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), Ue = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), ce = Symbol.for("react.scope"), wt = Symbol.for("react.debug_trace_mode"), Ee = Symbol.for("react.legacy_hidden"), Bt = Symbol.for("react.default_value"), Ke = Symbol.iterator;
  function we(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case St:
        return "Fragment";
      case J:
        return "Portal";
      case xt:
        return "Profiler";
      case ee:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ue:
        return (e.displayName || "Context") + ".Consumer";
      case G:
        return (e._context.displayName || "Context") + ".Provider";
      case me:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Et:
        return n = e.displayName || null, n !== null ? n : we(e.type) || "Memo";
      case le:
        n = e._payload, e = e._init;
        try {
          return we(e(n));
        } catch {
        }
    }
    return null;
  }
  var He = {};
  function ot(e, n) {
    if (e = e.contextTypes, !e) return He;
    var i = {}, a;
    for (a in e) i[a] = n[a];
    return i;
  }
  var _e = null;
  function ue(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var i = n.parent;
      if (e === null) {
        if (i !== null) throw Error(u(401));
      } else {
        if (i === null) throw Error(u(401));
        ue(e, i);
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
  function Qe(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(u(402));
    e.depth === n.depth ? ue(e, n) : Qe(e, n);
  }
  function $e(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? ue(e, i) : $e(e, i), n.context._currentValue2 = n.value;
  }
  function Ce(e) {
    var n = _e;
    n !== e && (n === null ? kt(e) : e === null ? er(n) : n.depth === e.depth ? ue(n, e) : n.depth > e.depth ? Qe(n, e) : $e(n, e), _e = e);
  }
  var zt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function jt(e, n, i, a) {
    var d = e.state !== void 0 ? e.state : null;
    e.updater = zt, e.props = i, e.state = d;
    var c = { queue: [], replace: !1 };
    e._reactInternals = c;
    var h = n.contextType;
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : rt({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && zt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
    else {
      for (c = h ? n[0] : e.state, d = !0, h = h ? 1 : 0; h < n.length; h++) {
        var k = n[h];
        k = typeof k == "function" ? k.call(e, c, i, a) : k, k != null && (d ? (d = !1, c = rt({}, c, k)) : rt(c, k));
      }
      e.state = c;
    }
    else c.queue = null;
  }
  var tr = { id: 1, overflow: "" };
  function it(e, n, i) {
    var a = e.id;
    e = e.overflow;
    var d = 32 - lt(a) - 1;
    a &= ~(1 << d), i += 1;
    var c = 32 - lt(n) + d;
    if (30 < c) {
      var h = d - d % 5;
      return c = (a & (1 << h) - 1).toString(32), a >>= h, d -= h, { id: 1 << 32 - lt(n) + d | i << d | a, overflow: c + e };
    }
    return { id: 1 << c | i << d | a, overflow: e };
  }
  var lt = Math.clz32 ? Math.clz32 : Re, Tt = Math.log, _t = Math.LN2;
  function Re(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Tt(e) / _t | 0) | 0;
  }
  function et(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Ut = typeof Object.is == "function" ? Object.is : et, fe = null, Ht = null, ke = null, U = null, at = !1, Y = !1, Te = 0, Pe = null, st = 0;
  function Ae() {
    if (fe === null) throw Error(u(321));
    return fe;
  }
  function $t() {
    if (0 < st) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ct() {
    return U === null ? ke === null ? (at = !1, ke = U = $t()) : (at = !0, U = ke) : U.next === null ? (at = !1, U = U.next = $t()) : (at = !0, U = U.next), U;
  }
  function Wt() {
    Ht = fe = null, Y = !1, ke = null, st = 0, U = Pe = null;
  }
  function ut(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Rt(e, n, i) {
    if (fe = Ae(), U = Ct(), at) {
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
    return e = e === ut ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, U.memoizedState = e, e = U.queue = { last: null, dispatch: null }, e = e.dispatch = de.bind(null, fe, e), [U.memoizedState, e];
  }
  function rr(e, n) {
    if (fe = Ae(), U = Ct(), n = n === void 0 ? null : n, U !== null) {
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
  function de(e, n, i) {
    if (25 <= st) throw Error(u(301));
    if (e === fe) if (Y = !0, e = { action: i, next: null }, Pe === null && (Pe = /* @__PURE__ */ new Map()), i = Pe.get(n), i === void 0) Pe.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function At() {
    throw Error(u(394));
  }
  function ct() {
  }
  var Vt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return Ae(), e._currentValue2;
  }, useMemo: rr, useReducer: Rt, useRef: function(e) {
    fe = Ae(), U = Ct();
    var n = U.memoizedState;
    return n === null ? (e = { current: e }, U.memoizedState = e) : n;
  }, useState: function(e) {
    return Rt(ut, e);
  }, useInsertionEffect: ct, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return rr(function() {
      return e;
    }, n);
  }, useImperativeHandle: ct, useEffect: ct, useDebugValue: ct, useDeferredValue: function(e) {
    return Ae(), e;
  }, useTransition: function() {
    return Ae(), [
      !1,
      At
    ];
  }, useId: function() {
    var e = Ht.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - lt(e) - 1)).toString(32) + n;
    var i = pt;
    if (i === null) throw Error(u(404));
    return n = Te++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return Ae(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, pt = null, We = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Fe(e) {
    return console.error(e), null;
  }
  function tt() {
  }
  function nr(e, n, i, a, d, c, h, k, b) {
    var O = [], I = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: I, pingedTasks: O, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Fe : d, onAllReady: tt, onShellReady: h === void 0 ? tt : h, onShellError: tt, onFatalError: tt }, i = ft(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = Ft(n, e, null, i, I, He, null, tr), O.push(e), n;
  }
  function Ft(e, n, i, a, d, c, h, k) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var b = { node: n, ping: function() {
      var O = e.pingedTasks;
      O.push(b), O.length === 1 && sr(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: k };
    return d.add(b), b;
  }
  function ft(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function dt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function R(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (fe = {}, Ht = n, Te = 0, e = i(a, d); Y; ) Y = !1, Te = 0, st += 1, U = null, e = i(a, d);
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
        a = rt({}, h, i);
      }
      n.legacyContext = a, H(e, n, d), n.legacyContext = h;
    } else H(e, n, d);
  }
  function C(e, n) {
    if (e && e.defaultProps) {
      n = rt({}, n), e = e.defaultProps;
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function D(e, n, i, a, d) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      d = ot(i, n.legacyContext);
      var c = i.contextType;
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), jt(c, i, a, d), x(e, n, c, i);
    } else {
      c = ot(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = Te !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) jt(d, i, a, c), x(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = it(a, 1, 0);
        try {
          H(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else H(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = ge(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Le(h, i, a), te(e, n, c), d.formatContext = h, i) {
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
        case ee:
        case xt:
        case St:
          H(e, n, a.children);
          return;
        case xe:
          H(e, n, a.children);
          return;
        case ce:
          throw Error(u(343));
        case Ne:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var k = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, b = ft(e, d.chunks.length, k, d.formatContext, !1, !1);
            d.children.push(b), d.lastPushedText = !1;
            var O = ft(e, 0, null, d.formatContext, !1, !1);
            O.parentFlushed = !0, n.blockedBoundary = k, n.blockedSegment = O;
            try {
              if (te(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || O.lastPushedText && O.textEmbedded && O.chunks.push("<!-- -->"), O.status = 1, De(k, O), k.pendingTasks === 0) break e;
            } catch (I) {
              O.status = 4, k.forceClientRender = !0, k.errorDigest = dt(e, I);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = Ft(e, c, i, b, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case me:
          if (a = s(e, n, i.render, a, d), Te !== 0) {
            i = n.treeContext, n.treeContext = it(i, 1, 0);
            try {
              H(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else H(e, n, a);
          return;
        case Et:
          i = i.type, a = C(i, a), D(e, n, i, a, d);
          return;
        case G:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = _e, _e = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, H(e, n, d), e = _e, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Bt ? e.context._defaultValue : a, e = _e = e.parent, n.context = e;
          return;
        case Ue:
          a = a.children, a = a(i._currentValue2), H(e, n, a);
          return;
        case le:
          d = i._init, i = d(i._payload), a = C(i, a), D(
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
        case nt:
          D(e, n, i.type, i.props, i.ref);
          return;
        case J:
          throw Error(u(257));
        case le:
          var a = i._init;
          i = a(i._payload), H(e, n, i);
          return;
      }
      if (W(i)) {
        oe(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Ke && i[Ke] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
        if (i = a.next(), !i.done) {
          var d = [];
          do
            d.push(i.value), i = a.next();
          while (!i.done);
          oe(e, n, d);
        }
        return;
      }
      throw e = Object.prototype.toString.call(i), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e));
    }
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Dt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Dt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function oe(e, n, i) {
    for (var a = i.length, d = 0; d < a; d++) {
      var c = n.treeContext;
      n.treeContext = it(c, a, d);
      try {
        te(e, n, i[d]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function te(e, n, i) {
    var a = n.blockedSegment.formatContext, d = n.legacyContext, c = n.context;
    try {
      return H(e, n, i);
    } catch (b) {
      if (Wt(), typeof b == "object" && b !== null && typeof b.then == "function") {
        i = b;
        var h = n.blockedSegment, k = ft(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(k), h.lastPushedText = !1, e = Ft(e, n.node, n.blockedBoundary, k, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Ce(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, Ce(c), b;
    }
  }
  function be(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, Ve(this, n, e);
  }
  function K(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return K(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function De(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && De(e, i);
    } else e.completedSegments.push(n);
  }
  function Ve(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = tt, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && De(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(be, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (De(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function sr(e) {
    if (e.status !== 2) {
      var n = _e, i = We.current;
      We.current = Vt;
      var a = pt;
      pt = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], k = e, b = h.blockedSegment;
          if (b.status === 0) {
            Ce(h.context);
            try {
              H(k, h, h.node), k.responseState.generateStaticMarkup || b.lastPushedText && b.textEmbedded && b.chunks.push("<!-- -->"), h.abortSet.delete(h), b.status = 1, Ve(k, h.blockedBoundary, b);
            } catch (Me) {
              if (Wt(), typeof Me == "object" && Me !== null && typeof Me.then == "function") {
                var O = h.ping;
                Me.then(O, O);
              } else {
                h.abortSet.delete(h), b.status = 4;
                var I = h.blockedBoundary, Q = Me, Ge = dt(k, Q);
                if (I === null ? R(k, Q) : (I.pendingTasks--, I.forceClientRender || (I.forceClientRender = !0, I.errorDigest = Ge, I.parentFlushed && k.clientRenderedBoundaries.push(I))), k.allPendingTasks--, k.allPendingTasks === 0) {
                  var qe = k.onAllReady;
                  qe();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && or(e, e.destination);
      } catch (Me) {
        dt(e, Me), R(e, Me);
      } finally {
        pt = a, We.current = i, i === Vt && Ce(n);
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
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = X(a), n.push(a), n.push('"')), n.push("></template>")), Gt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
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
    return gt(n, e.responseState, i.formatContext, i.id), qt(e, n, i), Nt(n, i.formatContext);
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
        qt(e, n, i), e.completedRootSegment = null;
        var a = e.responseState.bootstrapChunks;
        for (i = 0; i < a.length - 1; i++) n.push(a[i]);
        i < a.length && n.push(a[i]);
      }
      var d = e.clientRenderedBoundaries, c;
      for (c = 0; c < d.length; c++) {
        var h = d[c];
        a = n;
        var k = e.responseState, b = h.id, O = h.errorDigest, I = h.errorMessage, Q = h.errorComponentStack;
        if (a.push(k.startInlineScript), k.sentClientRenderFunction ? a.push('$RX("') : (k.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), b === null) throw Error(u(395));
        if (a.push(b), a.push('"'), O || I || Q) {
          a.push(",");
          var Ge = Pt(O || "");
          a.push(Ge);
        }
        if (I || Q) {
          a.push(",");
          var qe = Pt(I || "");
          a.push(qe);
        }
        if (Q) {
          a.push(",");
          var Me = Pt(Q);
          a.push(Me);
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
      var ht = e.partialBoundaries;
      for (c = 0; c < ht.length; c++) {
        var dr = ht[c];
        e: {
          d = e, h = n;
          var Yt = dr.completedSegments;
          for (k = 0; k < Yt.length; k++) if (!pr(d, h, dr, Yt[k])) {
            k++, Yt.splice(0, k);
            var Tr = !1;
            break e;
          }
          Yt.splice(0, k), Tr = !0;
        }
        if (!Tr) {
          e.destination = null, c++, ht.splice(0, c);
          return;
        }
      }
      ht.splice(0, c);
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
  function wr(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return K(a, e, n);
      }), i.clear(), e.destination !== null && or(e, e.destination);
    } catch (a) {
      dt(e, a), R(e, a);
    }
  }
  function kr() {
  }
  function fr(e, n, i, a) {
    var d = !1, c = null, h = "", k = { push: function(O) {
      return O !== null && (h += O), !0;
    }, destroy: function(O) {
      d = !0, c = O;
    } }, b = !1;
    if (e = nr(e, Se(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, kr, void 0, function() {
      b = !0;
    }), sr(e), wr(e, a), e.status === 1) e.status = 2, k.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = k;
      try {
        or(e, k);
      } catch (O) {
        dt(e, O), R(e, O);
      }
    }
    if (d) throw c;
    if (!b) throw Error(u(426));
    return h;
  }
  return Kt.renderToNodeStream = function() {
    throw Error(u(207));
  }, Kt.renderToStaticMarkup = function(e, n) {
    return fr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Kt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Kt.renderToString = function(e, n) {
    return fr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Kt.version = "18.3.1", Kt;
}
var zr = {};
var jn;
function Zo() {
  if (jn) return zr;
  jn = 1;
  var m = Er;
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
  function _(t, r) {
    return y(t, r), !0;
  }
  function F(t) {
    g && 0 < T && (t.enqueue(new Uint8Array(g.buffer, 0, T)), g = null, T = 0);
  }
  var A = new TextEncoder();
  function w(t) {
    return A.encode(t);
  }
  function S(t) {
    return A.encode(t);
  }
  function $(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var z = Object.prototype.hasOwnProperty, ae = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ye = {}, X = {};
  function je(t) {
    return z.call(X, t) ? !0 : z.call(ye, t) ? !1 : ae.test(t) ? X[t] = !0 : (ye[t] = !0, !1);
  }
  function re(t, r, o, l, f, p, v) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = v;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    W[t] = new re(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    W[r] = new re(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    W[t] = new re(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    W[t] = new re(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    W[t] = new re(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    W[t] = new re(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    W[t] = new re(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    W[t] = new re(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    W[t] = new re(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var se = /[\-:]([a-z])/g;
  function Le(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      se,
      Le
    );
    W[r] = new re(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(se, Le);
    W[r] = new re(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(se, Le);
    W[r] = new re(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    W[t] = new re(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    W[t] = new re(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var ne = {
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
  Object.keys(ne).forEach(function(t) {
    vt.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), ne[r] = ne[t];
    });
  });
  var ie = /["'&<>]/;
  function V(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = ie.exec(t);
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
  var lr = /([A-Z])/g, It = /^ms-/, Lt = Array.isArray, Qt = S("<script>"), he = S("<\/script>"), ge = S('<script src="'), yt = S('<script type="module" src="'), gt = S('" async=""><\/script>'), Nt = /(<\/|<)(s)(cript)/gi;
  function ar(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Pt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Qt : S('<script nonce="' + V(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, w(("" + o).replace(Nt, ar)), he), l !== void 0) for (o = 0; o < l.length; o++) p.push(ge, w(V(l[o])), gt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(yt, w(V(f[l])), gt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: S(t + "P:"), segmentPrefix: S(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Se(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Dt(t) {
    return Se(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function rt(t, r, o) {
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
  var nt = S("<!-- -->");
  function J(t, r, o, l) {
    return r === "" ? l : (l && t.push(nt), t.push(w(V(r))), !0);
  }
  var St = /* @__PURE__ */ new Map(), ee = S(' style="'), xt = S(":"), G = S(";");
  function Ue(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (z.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = w(V(l));
          f = w(V(("" + f).trim()));
        } else {
          p = l;
          var v = St.get(p);
          v !== void 0 || (v = S(V(p.replace(lr, "-$1").toLowerCase().replace(It, "-ms-"))), St.set(p, v)), p = v, f = typeof f == "number" ? f === 0 || z.call(ne, l) ? w("" + f) : w(f + "px") : w(V(("" + f).trim()));
        }
        r ? (r = !1, t.push(ee, p, xt, f)) : t.push(G, p, xt, f);
      }
    }
    r || t.push(xe);
  }
  var me = S(" "), Ne = S('="'), xe = S('"'), Et = S('=""');
  function le(t, r, o, l) {
    switch (o) {
      case "style":
        Ue(t, r, l);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") {
      if (r = W.hasOwnProperty(o) ? W[o] : null, r !== null) {
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
            l === !0 ? t.push(me, o, Et) : l !== !1 && t.push(me, o, Ne, w(V(l)), xe);
            break;
          case 5:
            isNaN(l) || t.push(me, o, Ne, w(V(l)), xe);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(me, o, Ne, w(V(l)), xe);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(me, o, Ne, w(V(l)), xe);
        }
      } else if (je(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(me, w(o), Ne, w(V(l)), xe);
      }
    }
  }
  var ce = S(">"), wt = S("/>");
  function Ee(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(w("" + r));
    }
  }
  function Bt(t) {
    var r = "";
    return m.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ke = S(' selected=""');
  function we(t, r, o, l) {
    t.push(ue(o));
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
          le(t, l, p, v);
      }
    }
    return t.push(ce), Ee(t, f, o), typeof o == "string" ? (t.push(w(V(o))), null) : o;
  }
  var He = S(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, _e = /* @__PURE__ */ new Map();
  function ue(t) {
    var r = _e.get(t);
    if (r === void 0) {
      if (!ot.test(t)) throw Error(u(65, t));
      r = S("<" + t), _e.set(t, r);
    }
    return r;
  }
  var er = S("<!DOCTYPE html>");
  function kt(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(ue("select"));
        var p = null, v = null;
        for (L in o) if (z.call(o, L)) {
          var E = o[L];
          if (E != null) switch (L) {
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
              le(t, l, L, E);
          }
        }
        return t.push(ce), Ee(t, v, p), p;
      case "option":
        v = f.selectedValue, t.push(ue("option"));
        var M = E = null, P = null, L = null;
        for (p in o) if (z.call(o, p)) {
          var Z = o[p];
          if (Z != null) switch (p) {
            case "children":
              E = Z;
              break;
            case "selected":
              P = Z;
              break;
            case "dangerouslySetInnerHTML":
              L = Z;
              break;
            case "value":
              M = Z;
            default:
              le(t, l, p, Z);
          }
        }
        if (v != null) if (o = M !== null ? "" + M : Bt(E), Lt(v)) {
          for (l = 0; l < v.length; l++)
            if ("" + v[l] === o) {
              t.push(Ke);
              break;
            }
        } else "" + v === o && t.push(Ke);
        else P && t.push(Ke);
        return t.push(ce), Ee(t, L, E), E;
      case "textarea":
        t.push(ue("textarea")), L = v = p = null;
        for (E in o) if (z.call(o, E) && (M = o[E], M != null)) switch (E) {
          case "children":
            L = M;
            break;
          case "value":
            p = M;
            break;
          case "defaultValue":
            v = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            le(t, l, E, M);
        }
        if (p === null && v !== null && (p = v), t.push(ce), L != null) {
          if (p != null) throw Error(u(92));
          if (Lt(L) && 1 < L.length) throw Error(u(93));
          p = "" + L;
        }
        return typeof p == "string" && p[0] === `
` && t.push(He), p !== null && t.push(w(V("" + p))), null;
      case "input":
        t.push(ue("input")), M = L = E = p = null;
        for (v in o) if (z.call(o, v) && (P = o[v], P != null)) switch (v) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            M = P;
            break;
          case "defaultValue":
            E = P;
            break;
          case "checked":
            L = P;
            break;
          case "value":
            p = P;
            break;
          default:
            le(t, l, v, P);
        }
        return L !== null ? le(
          t,
          l,
          "checked",
          L
        ) : M !== null && le(t, l, "checked", M), p !== null ? le(t, l, "value", p) : E !== null && le(t, l, "value", E), t.push(wt), null;
      case "menuitem":
        t.push(ue("menuitem"));
        for (var Ie in o) if (z.call(o, Ie) && (p = o[Ie], p != null)) switch (Ie) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            le(t, l, Ie, p);
        }
        return t.push(ce), null;
      case "title":
        t.push(ue("title")), p = null;
        for (Z in o) if (z.call(o, Z) && (v = o[Z], v != null)) switch (Z) {
          case "children":
            p = v;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            le(t, l, Z, v);
        }
        return t.push(ce), p;
      case "listing":
      case "pre":
        t.push(ue(r)), v = p = null;
        for (M in o) if (z.call(o, M) && (E = o[M], E != null)) switch (M) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            v = E;
            break;
          default:
            le(t, l, M, E);
        }
        if (t.push(ce), v != null) {
          if (p != null) throw Error(u(60));
          if (typeof v != "object" || !("__html" in v)) throw Error(u(61));
          o = v.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(He, w(o)) : t.push(w("" + o)));
        }
        return typeof p == "string" && p[0] === `
` && t.push(He), p;
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
        t.push(ue(r));
        for (var Xe in o) if (z.call(o, Xe) && (p = o[Xe], p != null)) switch (Xe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            le(t, l, Xe, p);
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
        return f.insertionMode === 0 && t.push(er), we(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return we(t, o, r, l);
        t.push(ue(r)), v = p = null;
        for (P in o) if (z.call(o, P) && (E = o[P], E != null)) switch (P) {
          case "children":
            p = E;
            break;
          case "dangerouslySetInnerHTML":
            v = E;
            break;
          case "style":
            Ue(t, l, E);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            je(P) && typeof E != "function" && typeof E != "symbol" && t.push(me, w(P), Ne, w(V(E)), xe);
        }
        return t.push(ce), Ee(t, v, p), p;
    }
  }
  var Qe = S("</"), $e = S(">"), Ce = S('<template id="'), zt = S('"></template>'), jt = S("<!--$-->"), tr = S('<!--$?--><template id="'), it = S('"></template>'), lt = S("<!--$!-->"), Tt = S("<!--/$-->"), _t = S("<template"), Re = S('"'), et = S(' data-dgst="');
  S(' data-msg="'), S(' data-stck="');
  var Ut = S("></template>");
  function fe(t, r, o) {
    if (y(t, tr), o === null) throw Error(u(395));
    return y(t, o), _(t, it);
  }
  var Ht = S('<div hidden id="'), ke = S('">'), U = S("</div>"), at = S('<svg aria-hidden="true" style="display:none" id="'), Y = S('">'), Te = S("</svg>"), Pe = S('<math aria-hidden="true" style="display:none" id="'), st = S('">'), Ae = S("</math>"), $t = S('<table hidden id="'), Ct = S('">'), Wt = S("</table>"), ut = S('<table hidden><tbody id="'), Rt = S('">'), rr = S("</tbody></table>"), de = S('<table hidden><tr id="'), At = S('">'), ct = S("</tr></table>"), Vt = S('<table hidden><colgroup id="'), pt = S('">'), We = S("</colgroup></table>");
  function Fe(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, ke);
      case 2:
        return y(t, at), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, Y);
      case 3:
        return y(t, Pe), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, st);
      case 4:
        return y(t, $t), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, Ct);
      case 5:
        return y(t, ut), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, Rt);
      case 6:
        return y(t, de), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, At);
      case 7:
        return y(
          t,
          Vt
        ), y(t, r.segmentPrefix), y(t, w(l.toString(16))), _(t, pt);
      default:
        throw Error(u(397));
    }
  }
  function tt(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return _(t, U);
      case 2:
        return _(t, Te);
      case 3:
        return _(t, Ae);
      case 4:
        return _(t, Wt);
      case 5:
        return _(t, rr);
      case 6:
        return _(t, ct);
      case 7:
        return _(t, We);
      default:
        throw Error(u(397));
    }
  }
  var nr = S('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ft = S('$RS("'), ft = S('","'), dt = S('")<\/script>'), R = S('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = S('$RC("'), x = S('","'), C = S('")<\/script>'), D = S('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), H = S('$RX("'), oe = S('"'), te = S(")<\/script>"), be = S(","), K = /[<\u2028\u2029]/g;
  function De(t) {
    return JSON.stringify(t).replace(K, function(r) {
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
  var Ve = Object.assign, sr = Symbol.for("react.element"), Gt = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), cr = Symbol.for("react.profiler"), pr = Symbol.for("react.provider"), or = Symbol.for("react.context"), wr = Symbol.for("react.forward_ref"), kr = Symbol.for("react.suspense"), fr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
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
      case kr:
        return "Suspense";
      case fr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case or:
        return (t.displayName || "Context") + ".Consumer";
      case pr:
        return (t._context.displayName || "Context") + ".Provider";
      case wr:
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
  var b = {};
  function O(t, r) {
    if (t = t.contextTypes, !t) return b;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var I = null;
  function Q(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(u(401));
      } else {
        if (o === null) throw Error(u(401));
        Q(t, o);
      }
      r.context._currentValue = r.value;
    }
  }
  function Ge(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && Ge(t);
  }
  function qe(t) {
    var r = t.parent;
    r !== null && qe(r), t.context._currentValue = t.value;
  }
  function Me(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? Q(t, r) : Me(t, r);
  }
  function Xt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? Q(t, o) : Xt(t, o), r.context._currentValue = r.value;
  }
  function ht(t) {
    var r = I;
    r !== t && (r === null ? qe(t) : t === null ? Ge(r) : r.depth === t.depth ? Q(r, t) : r.depth > t.depth ? Me(r, t) : Xt(r, t), I = t);
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
    var f = t.state !== void 0 ? t.state : null;
    t.updater = dr, t.props = o, t.state = f;
    var p = { queue: [], replace: !1 };
    t._reactInternals = p;
    var v = r.contextType;
    if (t.context = typeof v == "object" && v !== null ? v._currentValue : l, v = r.getDerivedStateFromProps, typeof v == "function" && (v = v(o, f), f = v == null ? f : Ve({}, f, v), t.state = f), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && dr.enqueueReplaceState(t, t.state, null), p.queue !== null && 0 < p.queue.length) if (r = p.queue, v = p.replace, p.queue = null, p.replace = !1, v && r.length === 1) t.state = r[0];
    else {
      for (p = v ? r[0] : t.state, f = !0, v = v ? 1 : 0; v < r.length; v++) {
        var E = r[v];
        E = typeof E == "function" ? E.call(t, p, o, l) : E, E != null && (f ? (f = !1, p = Ve({}, p, E)) : Ve(p, E));
      }
      t.state = p;
    }
    else p.queue = null;
  }
  var Tr = { id: 1, overflow: "" };
  function bt(t, r, o) {
    var l = t.id;
    t = t.overflow;
    var f = 32 - _r(l) - 1;
    l &= ~(1 << f), o += 1;
    var p = 32 - _r(r) + f;
    if (30 < p) {
      var v = f - f % 5;
      return p = (l & (1 << v) - 1).toString(32), l >>= v, f -= v, { id: 1 << 32 - _r(r) + f | o << f | l, overflow: p + t };
    }
    return { id: 1 << p | o << f | l, overflow: t };
  }
  var _r = Math.clz32 ? Math.clz32 : no, to = Math.log, ro = Math.LN2;
  function no(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (to(t) / ro | 0) | 0;
  }
  function oo(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var io = typeof Object.is == "function" ? Object.is : oo, mt = null, $r = null, Cr = null, q = null, hr = !1, Rr = !1, mr = 0, Mt = null, Ar = 0;
  function Zt() {
    if (mt === null) throw Error(u(321));
    return mt;
  }
  function fn() {
    if (0 < Ar) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wr() {
    return q === null ? Cr === null ? (hr = !1, Cr = q = fn()) : (hr = !0, q = Cr) : q.next === null ? (hr = !1, q = q.next = fn()) : (hr = !0, q = q.next), q;
  }
  function Vr() {
    $r = mt = null, Rr = !1, Cr = null, Ar = 0, q = Mt = null;
  }
  function dn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function hn(t, r, o) {
    if (mt = Zt(), q = Wr(), hr) {
      var l = q.queue;
      if (r = l.dispatch, Mt !== null && (o = Mt.get(l), o !== void 0)) {
        Mt.delete(l), l = q.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return q.memoizedState = l, [l, r];
      }
      return [q.memoizedState, r];
    }
    return t = t === dn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, q.memoizedState = t, t = q.queue = { last: null, dispatch: null }, t = t.dispatch = lo.bind(null, mt, t), [q.memoizedState, t];
  }
  function mn(t, r) {
    if (mt = Zt(), q = Wr(), r = r === void 0 ? null : r, q !== null) {
      var o = q.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!io(r[f], l[f])) {
            l = !1;
            break e;
          }
          l = !0;
        }
        if (l) return o[0];
      }
    }
    return t = t(), q.memoizedState = [t, r], t;
  }
  function lo(t, r, o) {
    if (25 <= Ar) throw Error(u(301));
    if (t === mt) if (Rr = !0, t = { action: o, next: null }, Mt === null && (Mt = /* @__PURE__ */ new Map()), o = Mt.get(r), o === void 0) Mt.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function ao() {
    throw Error(u(394));
  }
  function Fr() {
  }
  var vn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Zt(), t._currentValue;
  }, useMemo: mn, useReducer: hn, useRef: function(t) {
    mt = Zt(), q = Wr();
    var r = q.memoizedState;
    return r === null ? (t = { current: t }, q.memoizedState = t) : r;
  }, useState: function(t) {
    return hn(dn, t);
  }, useInsertionEffect: Fr, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return mn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Fr, useEffect: Fr, useDebugValue: Fr, useDeferredValue: function(t) {
    return Zt(), t;
  }, useTransition: function() {
    return Zt(), [!1, ao];
  }, useId: function() {
    var t = $r.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - _r(t) - 1)).toString(32) + r;
    var o = br;
    if (o === null) throw Error(u(404));
    return r = mr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Zt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, br = null, Gr = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function so(t) {
    return console.error(t), null;
  }
  function vr() {
  }
  function uo(t, r, o, l, f, p, v, E, M) {
    var P = [], L = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: L, pingedTasks: P, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? so : f, onAllReady: p === void 0 ? vr : p, onShellReady: v === void 0 ? vr : v, onShellError: E === void 0 ? vr : E, onFatalError: M === void 0 ? vr : M }, o = Mr(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = qr(r, t, null, o, L, b, null, Tr), P.push(t), r;
  }
  function qr(t, r, o, l, f, p, v, E) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var M = { node: r, ping: function() {
      var P = t.pingedTasks;
      P.push(M), P.length === 1 && kn(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: v, treeContext: E };
    return f.add(M), M;
  }
  function Mr(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function yr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Or(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, $(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function yn(t, r, o, l, f) {
    for (mt = {}, $r = r, mr = 0, t = o(l, f); Rr; ) Rr = !1, mr = 0, Ar += 1, q = null, t = o(l, f);
    return Vr(), t;
  }
  function gn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var v = r.legacyContext;
      if (typeof o.getChildContext != "function") l = v;
      else {
        o = o.getChildContext();
        for (var E in o) if (!(E in p)) throw Error(u(108, k(l) || "Unknown", E));
        l = Ve({}, v, o);
      }
      r.legacyContext = l, Oe(t, r, f), r.legacyContext = v;
    } else Oe(t, r, f);
  }
  function Sn(t, r) {
    if (t && t.defaultProps) {
      r = Ve({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function Xr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = O(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), Yt(p, o, l, f), gn(t, r, p, o);
    } else {
      p = O(o, r.legacyContext), f = yn(t, r, o, l, p);
      var v = mr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) Yt(f, o, l, p), gn(t, r, f, o);
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
      switch (f = r.blockedSegment, p = kt(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, v = f.formatContext, f.formatContext = rt(v, o, l), Yr(t, r, p), f.formatContext = v, o) {
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
          f.chunks.push(Qe, w(o), $e);
      }
      f.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case ur:
        case cr:
        case qt:
          Oe(t, r, l.children);
          return;
        case fr:
          Oe(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case kr:
          e: {
            o = r.blockedBoundary, f = r.blockedSegment, p = l.fallback, l = l.children, v = /* @__PURE__ */ new Set();
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: v, errorDigest: null }, M = Mr(t, f.chunks.length, E, f.formatContext, !1, !1);
            f.children.push(M), f.lastPushedText = !1;
            var P = Mr(t, 0, null, f.formatContext, !1, !1);
            P.parentFlushed = !0, r.blockedBoundary = E, r.blockedSegment = P;
            try {
              if (Yr(
                t,
                r,
                l
              ), P.lastPushedText && P.textEmbedded && P.chunks.push(nt), P.status = 1, Ir(E, P), E.pendingTasks === 0) break e;
            } catch (L) {
              P.status = 4, E.forceClientRender = !0, E.errorDigest = yr(t, L);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = qr(t, p, o, M, v, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case wr:
          if (l = yn(t, r, o.render, l, f), mr !== 0) {
            o = r.treeContext, r.treeContext = bt(o, 1, 0);
            try {
              Oe(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Oe(t, r, l);
          return;
        case e:
          o = o.type, l = Sn(o, l), Xr(t, r, o, l, f);
          return;
        case pr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, v = I, I = l = { parent: v, depth: v === null ? 0 : v.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Oe(t, r, f), t = I, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = I = t.parent, r.context = t;
          return;
        case or:
          l = l.children, l = l(o._currentValue), Oe(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = Sn(o, l), Xr(t, r, o, l, void 0);
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
          Xr(t, r, o.type, o.props, o.ref);
          return;
        case Gt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Oe(t, r, o);
          return;
      }
      if (Lt(o)) {
        xn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var f = [];
          do
            f.push(o.value), o = l.next();
          while (!o.done);
          xn(t, r, f);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = J(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = J(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function xn(t, r, o) {
    for (var l = o.length, f = 0; f < l; f++) {
      var p = r.treeContext;
      r.treeContext = bt(p, l, f);
      try {
        Yr(t, r, o[f]);
      } finally {
        r.treeContext = p;
      }
    }
  }
  function Yr(t, r, o) {
    var l = r.blockedSegment.formatContext, f = r.legacyContext, p = r.context;
    try {
      return Oe(t, r, o);
    } catch (M) {
      if (Vr(), typeof M == "object" && M !== null && typeof M.then == "function") {
        o = M;
        var v = r.blockedSegment, E = Mr(t, v.chunks.length, null, v.formatContext, v.lastPushedText, !0);
        v.children.push(E), v.lastPushedText = !1, t = qr(t, r.node, r.blockedBoundary, E, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ht(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ht(p), M;
    }
  }
  function co(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, wn(this, r, t);
  }
  function En(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return En(f, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Ir(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Ir(t, o);
    } else t.completedSegments.push(r);
  }
  function wn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = vr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Ir(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(co, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Ir(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function kn(t) {
    if (t.status !== 2) {
      var r = I, o = Gr.current;
      Gr.current = vn;
      var l = br;
      br = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var v = f[p], E = t, M = v.blockedSegment;
          if (M.status === 0) {
            ht(v.context);
            try {
              Oe(E, v, v.node), M.lastPushedText && M.textEmbedded && M.chunks.push(nt), v.abortSet.delete(v), M.status = 1, wn(E, v.blockedBoundary, M);
            } catch (Ye) {
              if (Vr(), typeof Ye == "object" && Ye !== null && typeof Ye.then == "function") {
                var P = v.ping;
                Ye.then(P, P);
              } else {
                v.abortSet.delete(v), M.status = 4;
                var L = v.blockedBoundary, Z = Ye, Ie = yr(E, Z);
                if (L === null ? Or(E, Z) : (L.pendingTasks--, L.forceClientRender || (L.forceClientRender = !0, L.errorDigest = Ie, L.parentFlushed && E.clientRenderedBoundaries.push(L))), E.allPendingTasks--, E.allPendingTasks === 0) {
                  var Xe = E.onAllReady;
                  Xe();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, p), t.destination !== null && Zr(t, t.destination);
      } catch (Ye) {
        yr(t, Ye), Or(t, Ye);
      } finally {
        br = l, Gr.current = o, o === vn && ht(r);
      }
    }
  }
  function Lr(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, Ce), y(r, t.placeholderPrefix), t = w(l.toString(16)), y(r, t), _(r, zt);
      case 1:
        o.status = 2;
        var f = !0;
        l = o.chunks;
        var p = 0;
        o = o.children;
        for (var v = 0; v < o.length; v++) {
          for (f = o[v]; p < f.index; p++) y(r, l[p]);
          f = Nr(t, r, f);
        }
        for (; p < l.length - 1; p++) y(r, l[p]);
        return p < l.length && (f = _(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function Nr(t, r, o) {
    var l = o.boundary;
    if (l === null) return Lr(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, _(r, lt), y(r, _t), l && (y(r, et), y(r, w(V(l))), y(r, Re)), _(r, Ut), Lr(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = S(f.boundaryPrefix + p.toString(16)), l = l.id = f, fe(r, t.responseState, l), Lr(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), fe(r, t.responseState, l.id), Lr(t, r, o);
    else {
      if (_(r, jt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Nr(t, r, o[0]);
    }
    return _(r, Tt);
  }
  function Tn(t, r, o) {
    return Fe(r, t.responseState, o.formatContext, o.id), Nr(t, r, o), tt(r, o.formatContext);
  }
  function _n(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) Cn(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, R)), l === null) throw Error(u(395));
    return o = w(o.toString(16)), y(r, l), y(r, x), y(r, t.segmentPrefix), y(r, o), _(r, C);
  }
  function Cn(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return Tn(t, r, l);
    }
    return Tn(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, Ft) : (t.sentCompleteSegmentFunction = !0, y(r, nr)), y(r, t.segmentPrefix), f = w(f.toString(16)), y(r, f), y(r, ft), y(r, t.placeholderPrefix), y(r, f), _(r, dt);
  }
  function Zr(t, r) {
    g = new Uint8Array(512), T = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Nr(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && _(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var v = f[p];
        l = r;
        var E = t.responseState, M = v.id, P = v.errorDigest, L = v.errorMessage, Z = v.errorComponentStack;
        if (y(l, E.startInlineScript), E.sentClientRenderFunction ? y(l, H) : (E.sentClientRenderFunction = !0, y(
          l,
          D
        )), M === null) throw Error(u(395));
        y(l, M), y(l, oe), (P || L || Z) && (y(l, be), y(l, w(De(P || "")))), (L || Z) && (y(l, be), y(l, w(De(L || "")))), Z && (y(l, be), y(l, w(De(Z)))), _(l, te);
      }
      f.splice(0, p);
      var Ie = t.completedBoundaries;
      for (p = 0; p < Ie.length; p++) _n(t, r, Ie[p]);
      Ie.splice(0, p), F(r), g = new Uint8Array(512), T = 0;
      var Xe = t.partialBoundaries;
      for (p = 0; p < Xe.length; p++) {
        var Ye = Xe[p];
        e: {
          f = t, v = r;
          var Pr = Ye.completedSegments;
          for (E = 0; E < Pr.length; E++) if (!Cn(
            f,
            v,
            Ye,
            Pr[E]
          )) {
            E++, Pr.splice(0, E);
            var An = !1;
            break e;
          }
          Pr.splice(0, E), An = !0;
        }
        if (!An) {
          t.destination = null, p++, Xe.splice(0, p);
          return;
        }
      }
      Xe.splice(0, p);
      var Jr = t.completedBoundaries;
      for (p = 0; p < Jr.length; p++) _n(t, r, Jr[p]);
      Jr.splice(0, p);
    } finally {
      F(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function Rn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return En(l, t, r);
      }), o.clear(), t.destination !== null && Zr(t, t.destination);
    } catch (l) {
      yr(t, l), Or(t, l);
    }
  }
  return zr.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, v = new Promise(function(L, Z) {
        p = L, f = Z;
      }), E = uo(t, Pt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Dt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var L = new ReadableStream({ type: "bytes", pull: function(Z) {
          if (E.status === 1) E.status = 2, $(Z, E.fatalError);
          else if (E.status !== 2 && E.destination === null) {
            E.destination = Z;
            try {
              Zr(E, Z);
            } catch (Ie) {
              yr(E, Ie), Or(E, Ie);
            }
          }
        }, cancel: function() {
          Rn(E);
        } }, { highWaterMark: 0 });
        L.allReady = v, o(L);
      }, function(L) {
        v.catch(function() {
        }), l(L);
      }, f);
      if (r && r.signal) {
        var M = r.signal, P = function() {
          Rn(E, M.reason), M.removeEventListener("abort", P);
        };
        M.addEventListener("abort", P);
      }
      kn(E);
    });
  }, zr.version = "18.3.1", zr;
}
var ir, Jn;
ir = Yo(), Jn = Zo();
ir.version;
ir.renderToString;
ir.renderToStaticMarkup;
ir.renderToNodeStream;
ir.renderToStaticNodeStream;
Jn.renderToReadableStream;
const Jo = "staticMarkup";
function Kn() {
  const u = Wn().indexOf(Jo) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const Un = ({ gaData: m, prefix: u = "", children: g }) => {
  const { isReact: T } = Kn(), { onClick: y, ..._ } = g.props;
  if (T)
    return Er.cloneElement(g, {
      ..._,
      onClick: (w) => (Xo(m), y ? y(w) : !0)
    });
  let F = "";
  ["input", "header", "header-input"].includes(u) && (F = `-${u}`);
  const A = {
    [`data-ga${F}`]: m.text,
    [`data-ga${F}-name`]: m.name,
    [`data-ga${F}-event`]: m.event,
    [`data-ga${F}-action`]: m.action,
    [`data-ga${F}-type`]: m.type,
    [`data-ga${F}-region`]: m.region,
    [`data-ga${F}-section`]: m.section,
    [`data-ga${F}-component`]: m.component
  };
  return Er.cloneElement(g, {
    ..._,
    onClick: y,
    ...A
  });
}, pn = ({
  src: m,
  alt: u,
  cssClasses: g,
  loading: T = "lazy",
  decoding: y = "async",
  dataTestId: _,
  fetchPriority: F = "auto",
  width: A,
  height: w,
  cardLink: S,
  title: $,
  caption: z,
  captionTitle: ae,
  border: ye,
  dropShadow: X
}) => {
  const je = {
    src: m,
    alt: u,
    loading: T,
    decoding: y,
    fetchpriority: F,
    // React attribute bug workaround
    ...(g == null ? void 0 : g.length) > 0 && { className: go(g) },
    ..._ && { "data-testid": _ },
    ...A && { width: A },
    ...w && { height: w }
  }, re = xr("uds-img", {
    borderless: !ye,
    "uds-img-drop-shadow": X
  }), W = (Le) => {
    const ne = Le ? `${je.className} ${Le}` : je.className;
    return S ? /* @__PURE__ */ j.jsxs("a", { href: S, children: [
      /* @__PURE__ */ j.jsx("img", { ...je, className: ne }),
      /* @__PURE__ */ j.jsx("span", { className: "visually-hidden", children: $ })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ j.jsx("img", { ...je, className: ne })
    );
  }, se = () => /* @__PURE__ */ j.jsx("div", { className: re, children: /* @__PURE__ */ j.jsxs("figure", { className: "figure uds-figure", children: [
    W(),
    z && /* @__PURE__ */ j.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      ae && /* @__PURE__ */ j.jsx("h3", { children: ae }),
      /* @__PURE__ */ j.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: cn(z)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: z ? se() : W(re) });
};
pn.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: B.string.isRequired,
  /**
   * Image alt text
   */
  alt: B.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: B.arrayOf(B.string),
  /**
   * Image loading mode
   */
  loading: B.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: B.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: B.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: B.string,
  /**
   * Height of the image
   */
  height: B.string,
  dataTestId: B.string,
  cardLink: B.string,
  title: B.string,
  caption: B.string,
  captionTitle: B.string,
  border: B.bool,
  dropShadow: B.bool
};
const Hn = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, $n = {
  OPEN: "open",
  CLOSE: "close"
}, Ko = {
  LARGE: "large",
  SMALL: "small"
}, Qn = (m) => m === Ko.SMALL, eo = ({ imageSize: m, body: u, heading: g, readMoreLink: T }) => {
  const [y, _] = po(!1), F = Wn(), { isReact: A, isBootstrap: w } = Kn(), S = `info-layer-${F}`, $ = Qn(m), z = (ae) => {
    (ae.type === "click" || ae.key === "Enter" || ae.key === " ") && _(!y);
  };
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      className: xr("info-layer", { show: y }),
      "data-testid": "info-layer",
      id: S,
      children: /* @__PURE__ */ j.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ j.jsxs(
          "div",
          {
            className: xr("header", {
              closed: $ && !y
            }),
            children: [
              $ && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ j.jsx("p", { dangerouslySetInnerHTML: cn(u) }),
              /* @__PURE__ */ j.jsx(
                Un,
                {
                  gaData: {
                    ...Hn,
                    text: "Expand ranking",
                    // TODO: for bootstrap can we use aria-expanded value of the button to populate the "action" field
                    action: y ? $n.OPEN : $n.CLOSE,
                    section: g
                  },
                  children: /* @__PURE__ */ j.jsxs(
                    "button",
                    {
                      "data-bs-toggle": w && "collapse",
                      "data-bs-target": w && `#${S}`,
                      onClick: A && z,
                      className: xr("btn-expand", {
                        btn: $
                      }),
                      type: "button",
                      "aria-expanded": y,
                      "aria-controls": S,
                      children: [
                        $ ? /* @__PURE__ */ j.jsx("span", { className: "visually-hidden", children: g }) : /* @__PURE__ */ j.jsx("h4", { children: g }),
                        /* @__PURE__ */ j.jsx("i", { className: "fas fa-chevron-up" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        !$ && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ j.jsx("p", { dangerouslySetInnerHTML: cn(u) }),
        T && /* @__PURE__ */ j.jsx(
          Un,
          {
            gaData: {
              ...Hn,
              section: g,
              text: "read more"
            },
            children: /* @__PURE__ */ j.jsxs("a", { href: T, className: "read-more", children: [
              "Read more ",
              /* @__PURE__ */ j.jsx("span", { className: "visually-hidden", children: g }),
              /* @__PURE__ */ j.jsx(
                "span",
                {
                  className: "fas icon-small fa-arrow-right",
                  "aria-hidden": "true"
                }
              )
            ] })
          }
        )
      ] })
    }
  );
};
eo.propTypes = {
  imageSize: B.oneOf(["small", "large"]),
  body: B.string.isRequired,
  heading: B.string.isRequired,
  readMoreLink: B.string
};
const Qo = ({
  imageSize: m = "large",
  image: u,
  imageAlt: g,
  heading: T,
  body: y,
  readMoreLink: _ = "",
  citation: F
}) => {
  const A = Qn(m);
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: xr("card-ranking", {
        "large-image": !A,
        "small-image": A
      }),
      children: [
        A ? /* @__PURE__ */ j.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ j.jsx(pn, { src: u, alt: g, fetchPriority: "high" }) }) : /* @__PURE__ */ j.jsx(pn, { src: u, alt: g, fetchPriority: "high" }),
        A && /* @__PURE__ */ j.jsxs("div", { className: "citation", children: [
          /* @__PURE__ */ j.jsx("h4", { children: T }),
          /* @__PURE__ */ j.jsxs("p", { children: [
            "— ",
            F
          ] })
        ] }),
        /* @__PURE__ */ j.jsx(
          eo,
          {
            imageSize: m,
            body: y,
            heading: T,
            readMoreLink: _
          }
        )
      ]
    }
  );
};
Qo.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: B.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: B.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: B.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: B.string.isRequired,
  /**
   * Ranking card body content
   */
  body: B.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: B.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: B.string
};
export {
  Qo as RankingCard
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
