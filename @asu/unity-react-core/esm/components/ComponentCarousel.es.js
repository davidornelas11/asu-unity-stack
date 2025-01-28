import Ct, { useId as ma, useRef as ga, useContext as co, createElement as va, useEffect as fo, useState as Xn } from "react";
import ya from "react-dom";
function po(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ci, qo = ya;
Ci = qo.createRoot, qo.hydrateRoot;
var Ai = { exports: {} }, Dr = {};
var Yo;
function wa() {
  if (Yo) return Dr;
  Yo = 1;
  var t = Ct, e = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, h, y) {
    var S, b = {}, O = null, V = null;
    y !== void 0 && (O = "" + y), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (V = h.ref);
    for (S in h) i.call(h, S) && !u.hasOwnProperty(S) && (b[S] = h[S]);
    if (v && v.defaultProps) for (S in h = v.defaultProps, h) b[S] === void 0 && (b[S] = h[S]);
    return { $$typeof: e, type: v, key: O, ref: V, props: b, _owner: l.current };
  }
  return Dr.Fragment = o, Dr.jsx = d, Dr.jsxs = d, Dr;
}
Ai.exports = wa();
var C = Ai.exports, Ri = { exports: {} }, Fn = { exports: {} }, be = {};
var Xo;
function Sa() {
  if (Xo) return be;
  Xo = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, u = t ? Symbol.for("react.profiler") : 60114, d = t ? Symbol.for("react.provider") : 60109, v = t ? Symbol.for("react.context") : 60110, h = t ? Symbol.for("react.async_mode") : 60111, y = t ? Symbol.for("react.concurrent_mode") : 60111, S = t ? Symbol.for("react.forward_ref") : 60112, b = t ? Symbol.for("react.suspense") : 60113, O = t ? Symbol.for("react.suspense_list") : 60120, V = t ? Symbol.for("react.memo") : 60115, P = t ? Symbol.for("react.lazy") : 60116, B = t ? Symbol.for("react.block") : 60121, L = t ? Symbol.for("react.fundamental") : 60117, F = t ? Symbol.for("react.responder") : 60118, H = t ? Symbol.for("react.scope") : 60119;
  function X(N) {
    if (typeof N == "object" && N !== null) {
      var de = N.$$typeof;
      switch (de) {
        case e:
          switch (N = N.type, N) {
            case h:
            case y:
            case i:
            case u:
            case l:
            case b:
              return N;
            default:
              switch (N = N && N.$$typeof, N) {
                case v:
                case S:
                case P:
                case V:
                case d:
                  return N;
                default:
                  return de;
              }
          }
        case o:
          return de;
      }
    }
  }
  function G(N) {
    return X(N) === y;
  }
  return be.AsyncMode = h, be.ConcurrentMode = y, be.ContextConsumer = v, be.ContextProvider = d, be.Element = e, be.ForwardRef = S, be.Fragment = i, be.Lazy = P, be.Memo = V, be.Portal = o, be.Profiler = u, be.StrictMode = l, be.Suspense = b, be.isAsyncMode = function(N) {
    return G(N) || X(N) === h;
  }, be.isConcurrentMode = G, be.isContextConsumer = function(N) {
    return X(N) === v;
  }, be.isContextProvider = function(N) {
    return X(N) === d;
  }, be.isElement = function(N) {
    return typeof N == "object" && N !== null && N.$$typeof === e;
  }, be.isForwardRef = function(N) {
    return X(N) === S;
  }, be.isFragment = function(N) {
    return X(N) === i;
  }, be.isLazy = function(N) {
    return X(N) === P;
  }, be.isMemo = function(N) {
    return X(N) === V;
  }, be.isPortal = function(N) {
    return X(N) === o;
  }, be.isProfiler = function(N) {
    return X(N) === u;
  }, be.isStrictMode = function(N) {
    return X(N) === l;
  }, be.isSuspense = function(N) {
    return X(N) === b;
  }, be.isValidElementType = function(N) {
    return typeof N == "string" || typeof N == "function" || N === i || N === y || N === u || N === l || N === b || N === O || typeof N == "object" && N !== null && (N.$$typeof === P || N.$$typeof === V || N.$$typeof === d || N.$$typeof === v || N.$$typeof === S || N.$$typeof === L || N.$$typeof === F || N.$$typeof === H || N.$$typeof === B);
  }, be.typeOf = X, be;
}
var Go;
function Oi() {
  return Go || (Go = 1, Fn.exports = Sa()), Fn.exports;
}
var jn, Zo;
function ba() {
  if (Zo) return jn;
  Zo = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jn = t, jn;
}
var Bn, Ko;
function xa() {
  if (Ko) return Bn;
  Ko = 1;
  var t = ba();
  function e() {
  }
  function o() {
  }
  return o.resetWarningCache = e, Bn = function() {
    function i(d, v, h, y, S, b) {
      if (b !== t) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    i.isRequired = i;
    function l() {
      return i;
    }
    var u = {
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
      resetWarningCache: e
    };
    return u.PropTypes = u, u;
  }, Bn;
}
Ri.exports = xa()();
var ka = Ri.exports;
const p = /* @__PURE__ */ po(ka);
var Pi = { exports: {} };
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function o() {
      for (var u = "", d = 0; d < arguments.length; d++) {
        var v = arguments[d];
        v && (u = l(u, i(v)));
      }
      return u;
    }
    function i(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return o.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var d = "";
      for (var v in u)
        e.call(u, v) && u[v] && (d = l(d, v));
      return d;
    }
    function l(u, d) {
      return d ? u ? u + " " + d : u + d : u;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(Pi);
var _a = Pi.exports;
const Br = /* @__PURE__ */ po(_a), dn = (t) => (t || []).join(" ");
function Gt(t) {
  "@babel/helpers - typeof";
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gt(t);
}
function Gn(t, e) {
  return Gn = Object.setPrototypeOf || function(i, l) {
    return i.__proto__ = l, i;
  }, Gn(t, e);
}
function Ta() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pn(t, e, o) {
  return Ta() ? pn = Reflect.construct : pn = function(l, u, d) {
    var v = [null];
    v.push.apply(v, u);
    var h = Function.bind.apply(l, v), y = new h();
    return d && Gn(y, d.prototype), y;
  }, pn.apply(null, arguments);
}
function _t(t) {
  return Ea(t) || Ca(t) || Aa(t) || Ra();
}
function Ea(t) {
  if (Array.isArray(t)) return Zn(t);
}
function Ca(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Aa(t, e) {
  if (t) {
    if (typeof t == "string") return Zn(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Zn(t, e);
  }
}
function Zn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
  return i;
}
function Ra() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Oa = Object.hasOwnProperty, Jo = Object.setPrototypeOf, Pa = Object.isFrozen, Na = Object.getPrototypeOf, Ia = Object.getOwnPropertyDescriptor, Je = Object.freeze, mt = Object.seal, La = Object.create, Ni = typeof Reflect < "u" && Reflect, yn = Ni.apply, Kn = Ni.construct;
yn || (yn = function(e, o, i) {
  return e.apply(o, i);
});
Je || (Je = function(e) {
  return e;
});
mt || (mt = function(e) {
  return e;
});
Kn || (Kn = function(e, o) {
  return pn(e, _t(o));
});
var Ma = gt(Array.prototype.forEach), Qo = gt(Array.prototype.pop), Fr = gt(Array.prototype.push), hn = gt(String.prototype.toLowerCase), zn = gt(String.prototype.toString), ei = gt(String.prototype.match), kt = gt(String.prototype.replace), Da = gt(String.prototype.indexOf), Fa = gt(String.prototype.trim), We = gt(RegExp.prototype.test), $n = ja(TypeError);
function gt(t) {
  return function(e) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      i[l - 1] = arguments[l];
    return yn(t, e, i);
  };
}
function ja(t) {
  return function() {
    for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++)
      o[i] = arguments[i];
    return Kn(t, o);
  };
}
function se(t, e, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : hn, Jo && Jo(t, null);
  for (var l = e.length; l--; ) {
    var u = e[l];
    if (typeof u == "string") {
      var d = o(u);
      d !== u && (Pa(e) || (e[l] = d), u = d);
    }
    t[u] = !0;
  }
  return t;
}
function fr(t) {
  var e = La(null), o;
  for (o in t)
    yn(Oa, t, [o]) === !0 && (e[o] = t[o]);
  return e;
}
function nn(t, e) {
  for (; t !== null; ) {
    var o = Ia(t, e);
    if (o) {
      if (o.get)
        return gt(o.get);
      if (typeof o.value == "function")
        return gt(o.value);
    }
    t = Na(t);
  }
  function i(l) {
    return console.warn("fallback value for", l), null;
  }
  return i;
}
var ti = Je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Hn = Je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Vn = Je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ba = Je(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Un = Je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), za = Je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ri = Je(["#text"]), ni = Je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Wn = Je(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oi = Je(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), on = Je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $a = mt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ha = mt(/<%[\w\W]*|[\w\W]*%>/gm), Va = mt(/\${[\w\W]*}/gm), Ua = mt(/^data-[\-\w.\u00B7-\uFFFF]/), Wa = mt(/^aria-[\-\w]+$/), qa = mt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ya = mt(/^(?:\w+script|data):/i), Xa = mt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ga = mt(/^html$/i), Za = mt(/^[a-z][.\w]*(-[.\w]+)+$/i), Ka = function() {
  return typeof window > "u" ? null : window;
}, Ja = function(e, o) {
  if (Gt(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var i = null, l = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(l) && (i = o.currentScript.getAttribute(l));
  var u = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(u, {
      createHTML: function(v) {
        return v;
      },
      createScriptURL: function(v) {
        return v;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
};
function Ii() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ka(), e = function(w) {
    return Ii(w);
  };
  if (e.version = "2.5.7", e.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var o = t.document, i = t.document, l = t.DocumentFragment, u = t.HTMLTemplateElement, d = t.Node, v = t.Element, h = t.NodeFilter, y = t.NamedNodeMap, S = y === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : y, b = t.HTMLFormElement, O = t.DOMParser, V = t.trustedTypes, P = v.prototype, B = nn(P, "cloneNode"), L = nn(P, "nextSibling"), F = nn(P, "childNodes"), H = nn(P, "parentNode");
  if (typeof u == "function") {
    var X = i.createElement("template");
    X.content && X.content.ownerDocument && (i = X.content.ownerDocument);
  }
  var G = Ja(V, o), N = G ? G.createHTML("") : "", de = i, he = de.implementation, He = de.createNodeIterator, Ve = de.createDocumentFragment, Ye = de.getElementsByTagName, ot = o.importNode, ke = {};
  try {
    ke = fr(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var Ee = {};
  e.isSupported = typeof H == "function" && he && he.createHTMLDocument !== void 0 && ke !== 9;
  var ze = $a, Ie = Ha, it = Va, Ue = Ua, Fe = Wa, je = Ya, Qe = Xa, Ze = Za, W = qa, j = null, U = se({}, [].concat(_t(ti), _t(Hn), _t(Vn), _t(Un), _t(ri))), q = null, E = se({}, [].concat(_t(ni), _t(Wn), _t(oi), _t(on))), Z = Object.seal(Object.create(null, {
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
  })), M = null, ue = null, ne = !0, re = !0, J = !1, ce = !0, me = !1, ie = !0, ge = !1, fe = !1, Te = !1, Be = !1, _e = !1, et = !1, $e = !0, ve = !1, K = "user-content-", ye = !0, tt = !1, Ke = {}, Me = null, Qt = se({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), er = null, hr = se({}, ["audio", "video", "img", "source", "image", "track"]), At = null, Rt = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), $t = "http://www.w3.org/1998/Math/MathML", Ht = "http://www.w3.org/2000/svg", at = "http://www.w3.org/1999/xhtml", Tt = at, tr = !1, Xe = null, rr = se({}, [$t, Ht, at], zn), rt, we = ["application/xhtml+xml", "text/html"], Ot = "text/html", Ae, nt = null, pt = i.createElement("form"), Pt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, st = function(w) {
    nt && nt === w || ((!w || Gt(w) !== "object") && (w = {}), w = fr(w), rt = // eslint-disable-next-line unicorn/prefer-includes
    we.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? rt = Ot : rt = w.PARSER_MEDIA_TYPE, Ae = rt === "application/xhtml+xml" ? zn : hn, j = "ALLOWED_TAGS" in w ? se({}, w.ALLOWED_TAGS, Ae) : U, q = "ALLOWED_ATTR" in w ? se({}, w.ALLOWED_ATTR, Ae) : E, Xe = "ALLOWED_NAMESPACES" in w ? se({}, w.ALLOWED_NAMESPACES, zn) : rr, At = "ADD_URI_SAFE_ATTR" in w ? se(
      fr(Rt),
      // eslint-disable-line indent
      w.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ae
      // eslint-disable-line indent
    ) : Rt, er = "ADD_DATA_URI_TAGS" in w ? se(
      fr(hr),
      // eslint-disable-line indent
      w.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ae
      // eslint-disable-line indent
    ) : hr, Me = "FORBID_CONTENTS" in w ? se({}, w.FORBID_CONTENTS, Ae) : Qt, M = "FORBID_TAGS" in w ? se({}, w.FORBID_TAGS, Ae) : {}, ue = "FORBID_ATTR" in w ? se({}, w.FORBID_ATTR, Ae) : {}, Ke = "USE_PROFILES" in w ? w.USE_PROFILES : !1, ne = w.ALLOW_ARIA_ATTR !== !1, re = w.ALLOW_DATA_ATTR !== !1, J = w.ALLOW_UNKNOWN_PROTOCOLS || !1, ce = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, me = w.SAFE_FOR_TEMPLATES || !1, ie = w.SAFE_FOR_XML !== !1, ge = w.WHOLE_DOCUMENT || !1, Be = w.RETURN_DOM || !1, _e = w.RETURN_DOM_FRAGMENT || !1, et = w.RETURN_TRUSTED_TYPE || !1, Te = w.FORCE_BODY || !1, $e = w.SANITIZE_DOM !== !1, ve = w.SANITIZE_NAMED_PROPS || !1, ye = w.KEEP_CONTENT !== !1, tt = w.IN_PLACE || !1, W = w.ALLOWED_URI_REGEXP || W, Tt = w.NAMESPACE || at, Z = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && Pt(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Z.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && Pt(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Z.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Z.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), me && (re = !1), _e && (Be = !0), Ke && (j = se({}, _t(ri)), q = [], Ke.html === !0 && (se(j, ti), se(q, ni)), Ke.svg === !0 && (se(j, Hn), se(q, Wn), se(q, on)), Ke.svgFilters === !0 && (se(j, Vn), se(q, Wn), se(q, on)), Ke.mathMl === !0 && (se(j, Un), se(q, oi), se(q, on))), w.ADD_TAGS && (j === U && (j = fr(j)), se(j, w.ADD_TAGS, Ae)), w.ADD_ATTR && (q === E && (q = fr(q)), se(q, w.ADD_ATTR, Ae)), w.ADD_URI_SAFE_ATTR && se(At, w.ADD_URI_SAFE_ATTR, Ae), w.FORBID_CONTENTS && (Me === Qt && (Me = fr(Me)), se(Me, w.FORBID_CONTENTS, Ae)), ye && (j["#text"] = !0), ge && se(j, ["html", "head", "body"]), j.table && (se(j, ["tbody"]), delete M.tbody), Je && Je(w), nt = w);
  }, nr = se({}, ["mi", "mo", "mn", "ms", "mtext"]), Vt = se({}, ["annotation-xml"]), or = se({}, ["title", "style", "font", "a", "script"]), Nt = se({}, Hn);
  se(Nt, Vn), se(Nt, Ba);
  var Ut = se({}, Un);
  se(Ut, za);
  var mr = function(w) {
    var I = H(w);
    (!I || !I.tagName) && (I = {
      namespaceURI: Tt,
      tagName: "template"
    });
    var $ = hn(w.tagName), pe = hn(I.tagName);
    return Xe[w.namespaceURI] ? w.namespaceURI === Ht ? I.namespaceURI === at ? $ === "svg" : I.namespaceURI === $t ? $ === "svg" && (pe === "annotation-xml" || nr[pe]) : !!Nt[$] : w.namespaceURI === $t ? I.namespaceURI === at ? $ === "math" : I.namespaceURI === Ht ? $ === "math" && Vt[pe] : !!Ut[$] : w.namespaceURI === at ? I.namespaceURI === Ht && !Vt[pe] || I.namespaceURI === $t && !nr[pe] ? !1 : !Ut[$] && (or[$] || !Nt[$]) : !!(rt === "application/xhtml+xml" && Xe[w.namespaceURI]) : !1;
  }, Ge = function(w) {
    Fr(e.removed, {
      element: w
    });
    try {
      w.parentNode.removeChild(w);
    } catch {
      try {
        w.outerHTML = N;
      } catch {
        w.remove();
      }
    }
  }, Wt = function(w, I) {
    try {
      Fr(e.removed, {
        attribute: I.getAttributeNode(w),
        from: I
      });
    } catch {
      Fr(e.removed, {
        attribute: null,
        from: I
      });
    }
    if (I.removeAttribute(w), w === "is" && !q[w])
      if (Be || _e)
        try {
          Ge(I);
        } catch {
        }
      else
        try {
          I.setAttribute(w, "");
        } catch {
        }
  }, It = function(w) {
    var I, $;
    if (Te)
      w = "<remove></remove>" + w;
    else {
      var pe = ei(w, /^[\r\n\t ]+/);
      $ = pe && pe[0];
    }
    rt === "application/xhtml+xml" && Tt === at && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    var Se = G ? G.createHTML(w) : w;
    if (Tt === at)
      try {
        I = new O().parseFromString(Se, rt);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = he.createDocument(Tt, "template", null);
      try {
        I.documentElement.innerHTML = tr ? N : Se;
      } catch {
      }
    }
    var De = I.body || I.documentElement;
    return w && $ && De.insertBefore(i.createTextNode($), De.childNodes[0] || null), Tt === at ? Ye.call(I, ge ? "html" : "body")[0] : ge ? I.documentElement : De;
  }, ir = function(w) {
    return He.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Lt = function(w) {
    return w instanceof b && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof S) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, vt = function(w) {
    return Gt(d) === "object" ? w instanceof d : w && Gt(w) === "object" && typeof w.nodeType == "number" && typeof w.nodeName == "string";
  }, lt = function(w, I, $) {
    Ee[w] && Ma(Ee[w], function(pe) {
      pe.call(e, I, $, nt);
    });
  }, Et = function(w) {
    var I;
    if (lt("beforeSanitizeElements", w, null), Lt(w) || We(/[\u0080-\uFFFF]/, w.nodeName))
      return Ge(w), !0;
    var $ = Ae(w.nodeName);
    if (lt("uponSanitizeElement", w, {
      tagName: $,
      allowedTags: j
    }), w.hasChildNodes() && !vt(w.firstElementChild) && (!vt(w.content) || !vt(w.content.firstElementChild)) && We(/<[/\w]/g, w.innerHTML) && We(/<[/\w]/g, w.textContent) || $ === "select" && We(/<template/i, w.innerHTML) || w.nodeType === 7 || ie && w.nodeType === 8 && We(/<[/\w]/g, w.data))
      return Ge(w), !0;
    if (!j[$] || M[$]) {
      if (!M[$] && qt($) && (Z.tagNameCheck instanceof RegExp && We(Z.tagNameCheck, $) || Z.tagNameCheck instanceof Function && Z.tagNameCheck($)))
        return !1;
      if (ye && !Me[$]) {
        var pe = H(w) || w.parentNode, Se = F(w) || w.childNodes;
        if (Se && pe)
          for (var De = Se.length, Le = De - 1; Le >= 0; --Le) {
            var ut = B(Se[Le], !0);
            ut.__removalCount = (w.__removalCount || 0) + 1, pe.insertBefore(ut, L(w));
          }
      }
      return Ge(w), !0;
    }
    return w instanceof v && !mr(w) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && We(/<\/no(script|embed|frames)/i, w.innerHTML) ? (Ge(w), !0) : (me && w.nodeType === 3 && (I = w.textContent, I = kt(I, ze, " "), I = kt(I, Ie, " "), I = kt(I, it, " "), w.textContent !== I && (Fr(e.removed, {
      element: w.cloneNode()
    }), w.textContent = I)), lt("afterSanitizeElements", w, null), !1);
  }, gr = function(w, I, $) {
    if ($e && (I === "id" || I === "name") && ($ in i || $ in pt))
      return !1;
    if (!(re && !ue[I] && We(Ue, I))) {
      if (!(ne && We(Fe, I))) {
        if (!q[I] || ue[I]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(qt(w) && (Z.tagNameCheck instanceof RegExp && We(Z.tagNameCheck, w) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(w)) && (Z.attributeNameCheck instanceof RegExp && We(Z.attributeNameCheck, I) || Z.attributeNameCheck instanceof Function && Z.attributeNameCheck(I)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            I === "is" && Z.allowCustomizedBuiltInElements && (Z.tagNameCheck instanceof RegExp && We(Z.tagNameCheck, $) || Z.tagNameCheck instanceof Function && Z.tagNameCheck($)))
          ) return !1;
        } else if (!At[I]) {
          if (!We(W, kt($, Qe, ""))) {
            if (!((I === "src" || I === "xlink:href" || I === "href") && w !== "script" && Da($, "data:") === 0 && er[w])) {
              if (!(J && !We(je, kt($, Qe, "")))) {
                if ($)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, qt = function(w) {
    return w !== "annotation-xml" && ei(w, Ze);
  }, Mt = function(w) {
    var I, $, pe, Se;
    lt("beforeSanitizeAttributes", w, null);
    var De = w.attributes;
    if (De) {
      var Le = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: q
      };
      for (Se = De.length; Se--; ) {
        I = De[Se];
        var ut = I, Oe = ut.name, ht = ut.namespaceURI;
        if ($ = Oe === "value" ? I.value : Fa(I.value), pe = Ae(Oe), Le.attrName = pe, Le.attrValue = $, Le.keepAttr = !0, Le.forceKeepAttr = void 0, lt("uponSanitizeAttribute", w, Le), $ = Le.attrValue, !Le.forceKeepAttr && (Wt(Oe, w), !!Le.keepAttr)) {
          if (!ce && We(/\/>/i, $)) {
            Wt(Oe, w);
            continue;
          }
          me && ($ = kt($, ze, " "), $ = kt($, Ie, " "), $ = kt($, it, " "));
          var yt = Ae(w.nodeName);
          if (gr(yt, pe, $)) {
            if (ve && (pe === "id" || pe === "name") && (Wt(Oe, w), $ = K + $), ie && We(/((--!?|])>)|<\/(style|title)/i, $)) {
              Wt(Oe, w);
              continue;
            }
            if (G && Gt(V) === "object" && typeof V.getAttributeType == "function" && !ht)
              switch (V.getAttributeType(yt, pe)) {
                case "TrustedHTML": {
                  $ = G.createHTML($);
                  break;
                }
                case "TrustedScriptURL": {
                  $ = G.createScriptURL($);
                  break;
                }
              }
            try {
              ht ? w.setAttributeNS(ht, Oe, $) : w.setAttribute(Oe, $), Lt(w) ? Ge(w) : Qo(e.removed);
            } catch {
            }
          }
        }
      }
      lt("afterSanitizeAttributes", w, null);
    }
  }, Dt = function Y(w) {
    var I, $ = ir(w);
    for (lt("beforeSanitizeShadowDOM", w, null); I = $.nextNode(); )
      lt("uponSanitizeShadowNode", I, null), !Et(I) && (I.content instanceof l && Y(I.content), Mt(I));
    lt("afterSanitizeShadowDOM", w, null);
  };
  return e.sanitize = function(Y) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I, $, pe, Se, De;
    if (tr = !Y, tr && (Y = "<!-->"), typeof Y != "string" && !vt(Y))
      if (typeof Y.toString == "function") {
        if (Y = Y.toString(), typeof Y != "string")
          throw $n("dirty is not a string, aborting");
      } else
        throw $n("toString is not a function");
    if (!e.isSupported) {
      if (Gt(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof Y == "string")
          return t.toStaticHTML(Y);
        if (vt(Y))
          return t.toStaticHTML(Y.outerHTML);
      }
      return Y;
    }
    if (fe || st(w), e.removed = [], typeof Y == "string" && (tt = !1), tt) {
      if (Y.nodeName) {
        var Le = Ae(Y.nodeName);
        if (!j[Le] || M[Le])
          throw $n("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (Y instanceof d)
      I = It("<!---->"), $ = I.ownerDocument.importNode(Y, !0), $.nodeType === 1 && $.nodeName === "BODY" || $.nodeName === "HTML" ? I = $ : I.appendChild($);
    else {
      if (!Be && !me && !ge && // eslint-disable-next-line unicorn/prefer-includes
      Y.indexOf("<") === -1)
        return G && et ? G.createHTML(Y) : Y;
      if (I = It(Y), !I)
        return Be ? null : et ? N : "";
    }
    I && Te && Ge(I.firstChild);
    for (var ut = ir(tt ? Y : I); pe = ut.nextNode(); )
      pe.nodeType === 3 && pe === Se || Et(pe) || (pe.content instanceof l && Dt(pe.content), Mt(pe), Se = pe);
    if (Se = null, tt)
      return Y;
    if (Be) {
      if (_e)
        for (De = Ve.call(I.ownerDocument); I.firstChild; )
          De.appendChild(I.firstChild);
      else
        De = I;
      return (q.shadowroot || q.shadowrootmod) && (De = ot.call(o, De, !0)), De;
    }
    var Oe = ge ? I.outerHTML : I.innerHTML;
    return ge && j["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && We(Ga, I.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Oe), me && (Oe = kt(Oe, ze, " "), Oe = kt(Oe, Ie, " "), Oe = kt(Oe, it, " ")), G && et ? G.createHTML(Oe) : Oe;
  }, e.setConfig = function(Y) {
    st(Y), fe = !0;
  }, e.clearConfig = function() {
    nt = null, fe = !1;
  }, e.isValidAttribute = function(Y, w, I) {
    nt || st({});
    var $ = Ae(Y), pe = Ae(w);
    return gr($, pe, I);
  }, e.addHook = function(Y, w) {
    typeof w == "function" && (Ee[Y] = Ee[Y] || [], Fr(Ee[Y], w));
  }, e.removeHook = function(Y) {
    if (Ee[Y])
      return Qo(Ee[Y]);
  }, e.removeHooks = function(Y) {
    Ee[Y] && (Ee[Y] = []);
  }, e.removeAllHooks = function() {
    Ee = {};
  }, e;
}
var Qa = Ii();
const yr = (t) => ({ __html: Qa.sanitize(t) });
p.shape({
  event: p.string,
  action: p.string,
  name: p.string,
  region: p.string,
  section: p.string,
  component: p.string,
  type: p.string,
  text: p.string
});
const es = ({
  event: t = "",
  action: e = "",
  name: o = "",
  type: i = "",
  section: l = "",
  text: u = "",
  region: d = "",
  component: v = ""
}) => {
  const { dataLayer: h } = window, y = {
    event: t.toLowerCase(),
    action: e.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: d.toLowerCase(),
    section: l.toLowerCase(),
    text: u.toLowerCase(),
    component: v.toLowerCase()
  };
  h && h.push(y);
};
p.shape({
  url: p.string,
  altText: p.string,
  cssClass: p.arrayOf(p.string),
  size: p.oneOf(["small", "medium", "large"])
});
p.shape({
  text: p.string,
  maxWidth: p.string,
  cssClass: p.arrayOf(p.string),
  highlightColor: p.oneOf(["gold", "black"])
});
p.shape({
  color: p.oneOf(["gold", "maroon", "gray", "dark"]),
  content: p.shape({
    icon: p.string,
    header: p.string,
    body: p.string
  })
});
const Li = p.shape({
  text: p.string,
  name: p.string,
  event: p.string,
  action: p.string,
  type: p.string,
  region: p.string,
  section: p.string,
  component: p.string
});
var dr = {};
var ii;
function ts() {
  if (ii) return dr;
  ii = 1;
  var t = Ct;
  function e(r) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, f = 1; f < arguments.length; f++) s += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + r + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, l = {}, u = {};
  function d(r) {
    return o.call(u, r) ? !0 : o.call(l, r) ? !1 : i.test(r) ? u[r] = !0 : (l[r] = !0, !1);
  }
  function v(r, s, f, g, T, x, A) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = g, this.attributeNamespace = T, this.mustUseProperty = f, this.propertyName = r, this.type = s, this.sanitizeURL = x, this.removeEmptyString = A;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    h[r] = new v(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var s = r[0];
    h[s] = new v(s, 1, !1, r[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    h[r] = new v(r, 2, !1, r.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    h[r] = new v(r, 2, !1, r, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    h[r] = new v(r, 3, !1, r.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(r) {
    h[r] = new v(r, 3, !0, r, null, !1, !1);
  }), ["capture", "download"].forEach(function(r) {
    h[r] = new v(r, 4, !1, r, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(r) {
    h[r] = new v(r, 6, !1, r, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(r) {
    h[r] = new v(r, 5, !1, r.toLowerCase(), null, !1, !1);
  });
  var y = /[\-:]([a-z])/g;
  function S(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var s = r.replace(
      y,
      S
    );
    h[s] = new v(s, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var s = r.replace(y, S);
    h[s] = new v(s, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var s = r.replace(y, S);
    h[s] = new v(s, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    h[r] = new v(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    h[r] = new v(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  var b = {
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
  }, O = ["Webkit", "ms", "Moz", "O"];
  Object.keys(b).forEach(function(r) {
    O.forEach(function(s) {
      s = s + r.charAt(0).toUpperCase() + r.substring(1), b[s] = b[r];
    });
  });
  var V = /["'&<>]/;
  function P(r) {
    if (typeof r == "boolean" || typeof r == "number") return "" + r;
    r = "" + r;
    var s = V.exec(r);
    if (s) {
      var f = "", g, T = 0;
      for (g = s.index; g < r.length; g++) {
        switch (r.charCodeAt(g)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        T !== g && (f += r.substring(T, g)), T = g + 1, f += s;
      }
      r = T !== g ? f + r.substring(T, g) : f;
    }
    return r;
  }
  var B = /([A-Z])/g, L = /^ms-/, F = Array.isArray;
  function H(r, s) {
    return { insertionMode: r, selectedValue: s };
  }
  function X(r, s, f) {
    switch (s) {
      case "select":
        return H(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return H(2, null);
      case "math":
        return H(3, null);
      case "foreignObject":
        return H(1, null);
      case "table":
        return H(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return H(5, null);
      case "colgroup":
        return H(7, null);
      case "tr":
        return H(6, null);
    }
    return 4 <= r.insertionMode || r.insertionMode === 0 ? H(1, null) : r;
  }
  var G = /* @__PURE__ */ new Map();
  function N(r, s, f) {
    if (typeof f != "object") throw Error(e(62));
    s = !0;
    for (var g in f) if (o.call(f, g)) {
      var T = f[g];
      if (T != null && typeof T != "boolean" && T !== "") {
        if (g.indexOf("--") === 0) {
          var x = P(g);
          T = P(("" + T).trim());
        } else {
          x = g;
          var A = G.get(x);
          A !== void 0 || (A = P(x.replace(B, "-$1").toLowerCase().replace(L, "-ms-")), G.set(x, A)), x = A, T = typeof T == "number" ? T === 0 || o.call(b, g) ? "" + T : T + "px" : P(("" + T).trim());
        }
        s ? (s = !1, r.push(' style="', x, ":", T)) : r.push(";", x, ":", T);
      }
    }
    s || r.push('"');
  }
  function de(r, s, f, g) {
    switch (f) {
      case "style":
        N(r, s, g);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < f.length) || f[0] !== "o" && f[0] !== "O" || f[1] !== "n" && f[1] !== "N") {
      if (s = h.hasOwnProperty(f) ? h[f] : null, s !== null) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (f = s.attributeName, s.type) {
          case 3:
            g && r.push(" ", f, '=""');
            break;
          case 4:
            g === !0 ? r.push(" ", f, '=""') : g !== !1 && r.push(" ", f, '="', P(g), '"');
            break;
          case 5:
            isNaN(g) || r.push(" ", f, '="', P(g), '"');
            break;
          case 6:
            !isNaN(g) && 1 <= g && r.push(" ", f, '="', P(g), '"');
            break;
          default:
            s.sanitizeURL && (g = "" + g), r.push(" ", f, '="', P(g), '"');
        }
      } else if (d(f)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = f.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        r.push(" ", f, '="', P(g), '"');
      }
    }
  }
  function he(r, s, f) {
    if (s != null) {
      if (f != null) throw Error(e(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(e(61));
      s = s.__html, s != null && r.push("" + s);
    }
  }
  function He(r) {
    var s = "";
    return t.Children.forEach(r, function(f) {
      f != null && (s += f);
    }), s;
  }
  function Ve(r, s, f, g) {
    r.push(ke(f));
    var T = f = null, x;
    for (x in s) if (o.call(s, x)) {
      var A = s[x];
      if (A != null) switch (x) {
        case "children":
          f = A;
          break;
        case "dangerouslySetInnerHTML":
          T = A;
          break;
        default:
          de(r, g, x, A);
      }
    }
    return r.push(">"), he(r, T, f), typeof f == "string" ? (r.push(P(f)), null) : f;
  }
  var Ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ot = /* @__PURE__ */ new Map();
  function ke(r) {
    var s = ot.get(r);
    if (s === void 0) {
      if (!Ye.test(r)) throw Error(e(65, r));
      s = "<" + r, ot.set(r, s);
    }
    return s;
  }
  function Ee(r, s, f, g, T) {
    switch (s) {
      case "select":
        r.push(ke("select"));
        var x = null, A = null;
        for (oe in f) if (o.call(f, oe)) {
          var z = f[oe];
          if (z != null) switch (oe) {
            case "children":
              x = z;
              break;
            case "dangerouslySetInnerHTML":
              A = z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              de(r, g, oe, z);
          }
        }
        return r.push(">"), he(r, A, x), x;
      case "option":
        A = T.selectedValue, r.push(ke("option"));
        var Q = z = null, te = null, oe = null;
        for (x in f) if (o.call(f, x)) {
          var Pe = f[x];
          if (Pe != null) switch (x) {
            case "children":
              z = Pe;
              break;
            case "selected":
              te = Pe;
              break;
            case "dangerouslySetInnerHTML":
              oe = Pe;
              break;
            case "value":
              Q = Pe;
            default:
              de(r, g, x, Pe);
          }
        }
        if (A != null) if (f = Q !== null ? "" + Q : He(z), F(A)) {
          for (g = 0; g < A.length; g++)
            if ("" + A[g] === f) {
              r.push(' selected=""');
              break;
            }
        } else "" + A === f && r.push(' selected=""');
        else te && r.push(' selected=""');
        return r.push(">"), he(r, oe, z), z;
      case "textarea":
        r.push(ke("textarea")), oe = A = x = null;
        for (z in f) if (o.call(f, z) && (Q = f[z], Q != null)) switch (z) {
          case "children":
            oe = Q;
            break;
          case "value":
            x = Q;
            break;
          case "defaultValue":
            A = Q;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(e(91));
          default:
            de(
              r,
              g,
              z,
              Q
            );
        }
        if (x === null && A !== null && (x = A), r.push(">"), oe != null) {
          if (x != null) throw Error(e(92));
          if (F(oe) && 1 < oe.length) throw Error(e(93));
          x = "" + oe;
        }
        return typeof x == "string" && x[0] === `
` && r.push(`
`), x !== null && r.push(P("" + x)), null;
      case "input":
        r.push(ke("input")), Q = oe = z = x = null;
        for (A in f) if (o.call(f, A) && (te = f[A], te != null)) switch (A) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(e(399, "input"));
          case "defaultChecked":
            Q = te;
            break;
          case "defaultValue":
            z = te;
            break;
          case "checked":
            oe = te;
            break;
          case "value":
            x = te;
            break;
          default:
            de(r, g, A, te);
        }
        return oe !== null ? de(r, g, "checked", oe) : Q !== null && de(r, g, "checked", Q), x !== null ? de(r, g, "value", x) : z !== null && de(r, g, "value", z), r.push("/>"), null;
      case "menuitem":
        r.push(ke("menuitem"));
        for (var wt in f) if (o.call(f, wt) && (x = f[wt], x != null)) switch (wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(e(400));
          default:
            de(r, g, wt, x);
        }
        return r.push(">"), null;
      case "title":
        r.push(ke("title")), x = null;
        for (Pe in f) if (o.call(f, Pe) && (A = f[Pe], A != null)) switch (Pe) {
          case "children":
            x = A;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(e(434));
          default:
            de(r, g, Pe, A);
        }
        return r.push(">"), x;
      case "listing":
      case "pre":
        r.push(ke(s)), A = x = null;
        for (Q in f) if (o.call(f, Q) && (z = f[Q], z != null)) switch (Q) {
          case "children":
            x = z;
            break;
          case "dangerouslySetInnerHTML":
            A = z;
            break;
          default:
            de(r, g, Q, z);
        }
        if (r.push(">"), A != null) {
          if (x != null) throw Error(e(60));
          if (typeof A != "object" || !("__html" in A)) throw Error(e(61));
          f = A.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
` ? r.push(`
`, f) : r.push("" + f));
        }
        return typeof x == "string" && x[0] === `
` && r.push(`
`), x;
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
        r.push(ke(s));
        for (var St in f) if (o.call(f, St) && (x = f[St], x != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(e(399, s));
          default:
            de(r, g, St, x);
        }
        return r.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ve(
          r,
          f,
          s,
          g
        );
      case "html":
        return T.insertionMode === 0 && r.push("<!DOCTYPE html>"), Ve(r, f, s, g);
      default:
        if (s.indexOf("-") === -1 && typeof f.is != "string") return Ve(r, f, s, g);
        r.push(ke(s)), A = x = null;
        for (te in f) if (o.call(f, te) && (z = f[te], z != null)) switch (te) {
          case "children":
            x = z;
            break;
          case "dangerouslySetInnerHTML":
            A = z;
            break;
          case "style":
            N(r, g, z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(te) && typeof z != "function" && typeof z != "symbol" && r.push(" ", te, '="', P(z), '"');
        }
        return r.push(">"), he(r, A, x), x;
    }
  }
  function ze(r, s, f) {
    if (r.push('<!--$?--><template id="'), f === null) throw Error(e(395));
    return r.push(f), r.push('"></template>');
  }
  function Ie(r, s, f, g) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return r.push('<div hidden id="'), r.push(s.segmentPrefix), s = g.toString(16), r.push(s), r.push('">');
      case 2:
        return r.push('<svg aria-hidden="true" style="display:none" id="'), r.push(s.segmentPrefix), s = g.toString(16), r.push(s), r.push('">');
      case 3:
        return r.push('<math aria-hidden="true" style="display:none" id="'), r.push(s.segmentPrefix), s = g.toString(16), r.push(s), r.push('">');
      case 4:
        return r.push('<table hidden id="'), r.push(s.segmentPrefix), s = g.toString(16), r.push(s), r.push('">');
      case 5:
        return r.push('<table hidden><tbody id="'), r.push(s.segmentPrefix), s = g.toString(16), r.push(s), r.push('">');
      case 6:
        return r.push('<table hidden><tr id="'), r.push(s.segmentPrefix), s = g.toString(16), r.push(s), r.push('">');
      case 7:
        return r.push('<table hidden><colgroup id="'), r.push(s.segmentPrefix), s = g.toString(16), r.push(s), r.push('">');
      default:
        throw Error(e(397));
    }
  }
  function it(r, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return r.push("</div>");
      case 2:
        return r.push("</svg>");
      case 3:
        return r.push("</math>");
      case 4:
        return r.push("</table>");
      case 5:
        return r.push("</tbody></table>");
      case 6:
        return r.push("</tr></table>");
      case 7:
        return r.push("</colgroup></table>");
      default:
        throw Error(e(397));
    }
  }
  var Ue = /[<\u2028\u2029]/g;
  function Fe(r) {
    return JSON.stringify(r).replace(Ue, function(s) {
      switch (s) {
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
  function je(r, s) {
    return s = s === void 0 ? "" : s, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: s + "P:", segmentPrefix: s + "S:", boundaryPrefix: s + "B:", idPrefix: s, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: r };
  }
  function Qe(r, s, f, g) {
    return f.generateStaticMarkup ? (r.push(P(s)), !1) : (s === "" ? r = g : (g && r.push("<!-- -->"), r.push(P(s)), r = !0), r);
  }
  var Ze = Object.assign, W = Symbol.for("react.element"), j = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), M = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), me = Symbol.for("react.scope"), ie = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), fe = Symbol.for("react.default_value"), Te = Symbol.iterator;
  function Be(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case U:
        return "Fragment";
      case j:
        return "Portal";
      case E:
        return "Profiler";
      case q:
        return "StrictMode";
      case ne:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case M:
        return (r.displayName || "Context") + ".Consumer";
      case Z:
        return (r._context.displayName || "Context") + ".Provider";
      case ue:
        var s = r.render;
        return r = r.displayName, r || (r = s.displayName || s.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case J:
        return s = r.displayName || null, s !== null ? s : Be(r.type) || "Memo";
      case ce:
        s = r._payload, r = r._init;
        try {
          return Be(r(s));
        } catch {
        }
    }
    return null;
  }
  var _e = {};
  function et(r, s) {
    if (r = r.contextTypes, !r) return _e;
    var f = {}, g;
    for (g in r) f[g] = s[g];
    return f;
  }
  var $e = null;
  function ve(r, s) {
    if (r !== s) {
      r.context._currentValue2 = r.parentValue, r = r.parent;
      var f = s.parent;
      if (r === null) {
        if (f !== null) throw Error(e(401));
      } else {
        if (f === null) throw Error(e(401));
        ve(r, f);
      }
      s.context._currentValue2 = s.value;
    }
  }
  function K(r) {
    r.context._currentValue2 = r.parentValue, r = r.parent, r !== null && K(r);
  }
  function ye(r) {
    var s = r.parent;
    s !== null && ye(s), r.context._currentValue2 = r.value;
  }
  function tt(r, s) {
    if (r.context._currentValue2 = r.parentValue, r = r.parent, r === null) throw Error(e(402));
    r.depth === s.depth ? ve(r, s) : tt(r, s);
  }
  function Ke(r, s) {
    var f = s.parent;
    if (f === null) throw Error(e(402));
    r.depth === f.depth ? ve(r, f) : Ke(r, f), s.context._currentValue2 = s.value;
  }
  function Me(r) {
    var s = $e;
    s !== r && (s === null ? ye(r) : r === null ? K(s) : s.depth === r.depth ? ve(s, r) : s.depth > r.depth ? tt(s, r) : Ke(s, r), $e = r);
  }
  var Qt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(r, s) {
    r = r._reactInternals, r.queue !== null && r.queue.push(s);
  }, enqueueReplaceState: function(r, s) {
    r = r._reactInternals, r.replace = !0, r.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function er(r, s, f, g) {
    var T = r.state !== void 0 ? r.state : null;
    r.updater = Qt, r.props = f, r.state = T;
    var x = { queue: [], replace: !1 };
    r._reactInternals = x;
    var A = s.contextType;
    if (r.context = typeof A == "object" && A !== null ? A._currentValue2 : g, A = s.getDerivedStateFromProps, typeof A == "function" && (A = A(f, T), T = A == null ? T : Ze({}, T, A), r.state = T), typeof s.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function")) if (s = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), s !== r.state && Qt.enqueueReplaceState(r, r.state, null), x.queue !== null && 0 < x.queue.length) if (s = x.queue, A = x.replace, x.queue = null, x.replace = !1, A && s.length === 1) r.state = s[0];
    else {
      for (x = A ? s[0] : r.state, T = !0, A = A ? 1 : 0; A < s.length; A++) {
        var z = s[A];
        z = typeof z == "function" ? z.call(r, x, f, g) : z, z != null && (T ? (T = !1, x = Ze({}, x, z)) : Ze(x, z));
      }
      r.state = x;
    }
    else x.queue = null;
  }
  var hr = { id: 1, overflow: "" };
  function At(r, s, f) {
    var g = r.id;
    r = r.overflow;
    var T = 32 - Rt(g) - 1;
    g &= ~(1 << T), f += 1;
    var x = 32 - Rt(s) + T;
    if (30 < x) {
      var A = T - T % 5;
      return x = (g & (1 << A) - 1).toString(32), g >>= A, T -= A, { id: 1 << 32 - Rt(s) + T | f << T | g, overflow: x + r };
    }
    return { id: 1 << x | f << T | g, overflow: r };
  }
  var Rt = Math.clz32 ? Math.clz32 : at, $t = Math.log, Ht = Math.LN2;
  function at(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - ($t(r) / Ht | 0) | 0;
  }
  function Tt(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var tr = typeof Object.is == "function" ? Object.is : Tt, Xe = null, rr = null, rt = null, we = null, Ot = !1, Ae = !1, nt = 0, pt = null, Pt = 0;
  function st() {
    if (Xe === null) throw Error(e(321));
    return Xe;
  }
  function nr() {
    if (0 < Pt) throw Error(e(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Vt() {
    return we === null ? rt === null ? (Ot = !1, rt = we = nr()) : (Ot = !0, we = rt) : we.next === null ? (Ot = !1, we = we.next = nr()) : (Ot = !0, we = we.next), we;
  }
  function or() {
    rr = Xe = null, Ae = !1, rt = null, Pt = 0, we = pt = null;
  }
  function Nt(r, s) {
    return typeof s == "function" ? s(r) : s;
  }
  function Ut(r, s, f) {
    if (Xe = st(), we = Vt(), Ot) {
      var g = we.queue;
      if (s = g.dispatch, pt !== null && (f = pt.get(g), f !== void 0)) {
        pt.delete(g), g = we.memoizedState;
        do
          g = r(g, f.action), f = f.next;
        while (f !== null);
        return we.memoizedState = g, [g, s];
      }
      return [we.memoizedState, s];
    }
    return r = r === Nt ? typeof s == "function" ? s() : s : f !== void 0 ? f(s) : s, we.memoizedState = r, r = we.queue = { last: null, dispatch: null }, r = r.dispatch = Ge.bind(null, Xe, r), [we.memoizedState, r];
  }
  function mr(r, s) {
    if (Xe = st(), we = Vt(), s = s === void 0 ? null : s, we !== null) {
      var f = we.memoizedState;
      if (f !== null && s !== null) {
        var g = f[1];
        e: if (g === null) g = !1;
        else {
          for (var T = 0; T < g.length && T < s.length; T++) if (!tr(s[T], g[T])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return f[0];
      }
    }
    return r = r(), we.memoizedState = [r, s], r;
  }
  function Ge(r, s, f) {
    if (25 <= Pt) throw Error(e(301));
    if (r === Xe) if (Ae = !0, r = { action: f, next: null }, pt === null && (pt = /* @__PURE__ */ new Map()), f = pt.get(s), f === void 0) pt.set(s, r);
    else {
      for (s = f; s.next !== null; ) s = s.next;
      s.next = r;
    }
  }
  function Wt() {
    throw Error(e(394));
  }
  function It() {
  }
  var ir = { readContext: function(r) {
    return r._currentValue2;
  }, useContext: function(r) {
    return st(), r._currentValue2;
  }, useMemo: mr, useReducer: Ut, useRef: function(r) {
    Xe = st(), we = Vt();
    var s = we.memoizedState;
    return s === null ? (r = { current: r }, we.memoizedState = r) : s;
  }, useState: function(r) {
    return Ut(Nt, r);
  }, useInsertionEffect: It, useLayoutEffect: function() {
  }, useCallback: function(r, s) {
    return mr(function() {
      return r;
    }, s);
  }, useImperativeHandle: It, useEffect: It, useDebugValue: It, useDeferredValue: function(r) {
    return st(), r;
  }, useTransition: function() {
    return st(), [
      !1,
      Wt
    ];
  }, useId: function() {
    var r = rr.treeContext, s = r.overflow;
    r = r.id, r = (r & ~(1 << 32 - Rt(r) - 1)).toString(32) + s;
    var f = Lt;
    if (f === null) throw Error(e(404));
    return s = nt++, r = ":" + f.idPrefix + "R" + r, 0 < s && (r += "H" + s.toString(32)), r + ":";
  }, useMutableSource: function(r, s) {
    return st(), s(r._source);
  }, useSyncExternalStore: function(r, s, f) {
    if (f === void 0) throw Error(e(407));
    return f();
  } }, Lt = null, vt = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function lt(r) {
    return console.error(r), null;
  }
  function Et() {
  }
  function gr(r, s, f, g, T, x, A, z, Q) {
    var te = [], oe = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: g === void 0 ? 12800 : g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: oe, pingedTasks: te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: T === void 0 ? lt : T, onAllReady: Et, onShellReady: A === void 0 ? Et : A, onShellError: Et, onFatalError: Et }, f = Mt(s, 0, null, f, !1, !1), f.parentFlushed = !0, r = qt(s, r, null, f, oe, _e, null, hr), te.push(r), s;
  }
  function qt(r, s, f, g, T, x, A, z) {
    r.allPendingTasks++, f === null ? r.pendingRootTasks++ : f.pendingTasks++;
    var Q = { node: s, ping: function() {
      var te = r.pingedTasks;
      te.push(Q), te.length === 1 && Er(r);
    }, blockedBoundary: f, blockedSegment: g, abortSet: T, legacyContext: x, context: A, treeContext: z };
    return T.add(Q), Q;
  }
  function Mt(r, s, f, g, T, x) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: f, lastPushedText: T, textEmbedded: x };
  }
  function Dt(r, s) {
    if (r = r.onError(s), r != null && typeof r != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof r + '" instead');
    return r;
  }
  function Y(r, s) {
    var f = r.onShellError;
    f(s), f = r.onFatalError, f(s), r.destination !== null ? (r.status = 2, r.destination.destroy(s)) : (r.status = 1, r.fatalError = s);
  }
  function w(r, s, f, g, T) {
    for (Xe = {}, rr = s, nt = 0, r = f(g, T); Ae; ) Ae = !1, nt = 0, Pt += 1, we = null, r = f(g, T);
    return or(), r;
  }
  function I(r, s, f, g) {
    var T = f.render(), x = g.childContextTypes;
    if (x != null) {
      var A = s.legacyContext;
      if (typeof f.getChildContext != "function") g = A;
      else {
        f = f.getChildContext();
        for (var z in f) if (!(z in x)) throw Error(e(108, Be(g) || "Unknown", z));
        g = Ze({}, A, f);
      }
      s.legacyContext = g, Se(r, s, T), s.legacyContext = A;
    } else Se(r, s, T);
  }
  function $(r, s) {
    if (r && r.defaultProps) {
      s = Ze({}, s), r = r.defaultProps;
      for (var f in r) s[f] === void 0 && (s[f] = r[f]);
      return s;
    }
    return s;
  }
  function pe(r, s, f, g, T) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      T = et(f, s.legacyContext);
      var x = f.contextType;
      x = new f(g, typeof x == "object" && x !== null ? x._currentValue2 : T), er(x, f, g, T), I(r, s, x, f);
    } else {
      x = et(f, s.legacyContext), T = w(r, s, f, g, x);
      var A = nt !== 0;
      if (typeof T == "object" && T !== null && typeof T.render == "function" && T.$$typeof === void 0) er(T, f, g, x), I(r, s, T, f);
      else if (A) {
        g = s.treeContext, s.treeContext = At(g, 1, 0);
        try {
          Se(r, s, T);
        } finally {
          s.treeContext = g;
        }
      } else Se(r, s, T);
    }
    else if (typeof f == "string") {
      switch (T = s.blockedSegment, x = Ee(T.chunks, f, g, r.responseState, T.formatContext), T.lastPushedText = !1, A = T.formatContext, T.formatContext = X(A, f, g), Le(r, s, x), T.formatContext = A, f) {
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
          T.chunks.push("</", f, ">");
      }
      T.lastPushedText = !1;
    } else {
      switch (f) {
        case ge:
        case ie:
        case q:
        case E:
        case U:
          Se(r, s, g.children);
          return;
        case re:
          Se(r, s, g.children);
          return;
        case me:
          throw Error(e(343));
        case ne:
          e: {
            f = s.blockedBoundary, T = s.blockedSegment, x = g.fallback, g = g.children, A = /* @__PURE__ */ new Set();
            var z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: A, errorDigest: null }, Q = Mt(r, T.chunks.length, z, T.formatContext, !1, !1);
            T.children.push(Q), T.lastPushedText = !1;
            var te = Mt(r, 0, null, T.formatContext, !1, !1);
            te.parentFlushed = !0, s.blockedBoundary = z, s.blockedSegment = te;
            try {
              if (Le(
                r,
                s,
                g
              ), r.responseState.generateStaticMarkup || te.lastPushedText && te.textEmbedded && te.chunks.push("<!-- -->"), te.status = 1, ht(z, te), z.pendingTasks === 0) break e;
            } catch (oe) {
              te.status = 4, z.forceClientRender = !0, z.errorDigest = Dt(r, oe);
            } finally {
              s.blockedBoundary = f, s.blockedSegment = T;
            }
            s = qt(r, x, f, Q, A, s.legacyContext, s.context, s.treeContext), r.pingedTasks.push(s);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ue:
          if (g = w(r, s, f.render, g, T), nt !== 0) {
            f = s.treeContext, s.treeContext = At(f, 1, 0);
            try {
              Se(r, s, g);
            } finally {
              s.treeContext = f;
            }
          } else Se(r, s, g);
          return;
        case J:
          f = f.type, g = $(f, g), pe(r, s, f, g, T);
          return;
        case Z:
          if (T = g.children, f = f._context, g = g.value, x = f._currentValue2, f._currentValue2 = g, A = $e, $e = g = { parent: A, depth: A === null ? 0 : A.depth + 1, context: f, parentValue: x, value: g }, s.context = g, Se(r, s, T), r = $e, r === null) throw Error(e(403));
          g = r.parentValue, r.context._currentValue2 = g === fe ? r.context._defaultValue : g, r = $e = r.parent, s.context = r;
          return;
        case M:
          g = g.children, g = g(f._currentValue2), Se(r, s, g);
          return;
        case ce:
          T = f._init, f = T(f._payload), g = $(f, g), pe(
            r,
            s,
            f,
            g,
            void 0
          );
          return;
      }
      throw Error(e(130, f == null ? f : typeof f, ""));
    }
  }
  function Se(r, s, f) {
    if (s.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case W:
          pe(r, s, f.type, f.props, f.ref);
          return;
        case j:
          throw Error(e(257));
        case ce:
          var g = f._init;
          f = g(f._payload), Se(r, s, f);
          return;
      }
      if (F(f)) {
        De(r, s, f);
        return;
      }
      if (f === null || typeof f != "object" ? g = null : (g = Te && f[Te] || f["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(f))) {
        if (f = g.next(), !f.done) {
          var T = [];
          do
            T.push(f.value), f = g.next();
          while (!f.done);
          De(r, s, T);
        }
        return;
      }
      throw r = Object.prototype.toString.call(f), Error(e(31, r === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : r));
    }
    typeof f == "string" ? (g = s.blockedSegment, g.lastPushedText = Qe(s.blockedSegment.chunks, f, r.responseState, g.lastPushedText)) : typeof f == "number" && (g = s.blockedSegment, g.lastPushedText = Qe(s.blockedSegment.chunks, "" + f, r.responseState, g.lastPushedText));
  }
  function De(r, s, f) {
    for (var g = f.length, T = 0; T < g; T++) {
      var x = s.treeContext;
      s.treeContext = At(x, g, T);
      try {
        Le(r, s, f[T]);
      } finally {
        s.treeContext = x;
      }
    }
  }
  function Le(r, s, f) {
    var g = s.blockedSegment.formatContext, T = s.legacyContext, x = s.context;
    try {
      return Se(r, s, f);
    } catch (Q) {
      if (or(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
        f = Q;
        var A = s.blockedSegment, z = Mt(r, A.chunks.length, null, A.formatContext, A.lastPushedText, !0);
        A.children.push(z), A.lastPushedText = !1, r = qt(r, s.node, s.blockedBoundary, z, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, f.then(r, r), s.blockedSegment.formatContext = g, s.legacyContext = T, s.context = x, Me(x);
      } else throw s.blockedSegment.formatContext = g, s.legacyContext = T, s.context = x, Me(x), Q;
    }
  }
  function ut(r) {
    var s = r.blockedBoundary;
    r = r.blockedSegment, r.status = 3, yt(this, s, r);
  }
  function Oe(r, s, f) {
    var g = r.blockedBoundary;
    r.blockedSegment.status = 3, g === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, r = f === void 0 ? Error(e(432)) : f, g.errorDigest = s.onError(r), g.parentFlushed && s.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(T) {
      return Oe(T, s, f);
    }), g.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (g = s.onAllReady, g()));
  }
  function ht(r, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var f = s.children[0];
      f.id = s.id, f.parentFlushed = !0, f.status === 1 && ht(r, f);
    } else r.completedSegments.push(s);
  }
  function yt(r, s, f) {
    if (s === null) {
      if (f.parentFlushed) {
        if (r.completedRootSegment !== null) throw Error(e(389));
        r.completedRootSegment = f;
      }
      r.pendingRootTasks--, r.pendingRootTasks === 0 && (r.onShellError = Et, s = r.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && ht(s, f), s.parentFlushed && r.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(ut, r), s.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (ht(s, f), s.completedSegments.length === 1 && s.parentFlushed && r.partialBoundaries.push(s)));
    r.allPendingTasks--, r.allPendingTasks === 0 && (r = r.onAllReady, r());
  }
  function Er(r) {
    if (r.status !== 2) {
      var s = $e, f = vt.current;
      vt.current = ir;
      var g = Lt;
      Lt = r.responseState;
      try {
        var T = r.pingedTasks, x;
        for (x = 0; x < T.length; x++) {
          var A = T[x], z = r, Q = A.blockedSegment;
          if (Q.status === 0) {
            Me(A.context);
            try {
              Se(z, A, A.node), z.responseState.generateStaticMarkup || Q.lastPushedText && Q.textEmbedded && Q.chunks.push("<!-- -->"), A.abortSet.delete(A), Q.status = 1, yt(z, A.blockedBoundary, Q);
            } catch (ct) {
              if (or(), typeof ct == "object" && ct !== null && typeof ct.then == "function") {
                var te = A.ping;
                ct.then(te, te);
              } else {
                A.abortSet.delete(A), Q.status = 4;
                var oe = A.blockedBoundary, Pe = ct, wt = Dt(z, Pe);
                if (oe === null ? Y(z, Pe) : (oe.pendingTasks--, oe.forceClientRender || (oe.forceClientRender = !0, oe.errorDigest = wt, oe.parentFlushed && z.clientRenderedBoundaries.push(oe))), z.allPendingTasks--, z.allPendingTasks === 0) {
                  var St = z.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        T.splice(0, x), r.destination !== null && vr(r, r.destination);
      } catch (ct) {
        Dt(r, ct), Y(r, ct);
      } finally {
        Lt = g, vt.current = f, f === ir && Me(s);
      }
    }
  }
  function ar(r, s, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var g = f.id = r.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, r = r.responseState, s.push('<template id="'), s.push(r.placeholderPrefix), r = g.toString(16), s.push(r), s.push('"></template>');
      case 1:
        f.status = 2;
        var T = !0;
        g = f.chunks;
        var x = 0;
        f = f.children;
        for (var A = 0; A < f.length; A++) {
          for (T = f[A]; x < T.index; x++) s.push(g[x]);
          T = sr(r, s, T);
        }
        for (; x < g.length - 1; x++) s.push(g[x]);
        return x < g.length && (T = s.push(g[x])), T;
      default:
        throw Error(e(390));
    }
  }
  function sr(r, s, f) {
    var g = f.boundary;
    if (g === null) return ar(r, s, f);
    if (g.parentFlushed = !0, g.forceClientRender) return r.responseState.generateStaticMarkup || (g = g.errorDigest, s.push("<!--$!-->"), s.push("<template"), g && (s.push(' data-dgst="'), g = P(g), s.push(g), s.push('"')), s.push("></template>")), ar(r, s, f), r = r.responseState.generateStaticMarkup ? !0 : s.push("<!--/$-->"), r;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = r.nextSegmentId++, 0 < g.completedSegments.length && r.partialBoundaries.push(g);
      var T = r.responseState, x = T.nextSuspenseID++;
      return T = T.boundaryPrefix + x.toString(16), g = g.id = T, ze(s, r.responseState, g), ar(r, s, f), s.push("<!--/$-->");
    }
    if (g.byteSize > r.progressiveChunkSize) return g.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(g), ze(s, r.responseState, g.id), ar(r, s, f), s.push("<!--/$-->");
    if (r.responseState.generateStaticMarkup || s.push("<!--$-->"), f = g.completedSegments, f.length !== 1) throw Error(e(391));
    return sr(r, s, f[0]), r = r.responseState.generateStaticMarkup ? !0 : s.push("<!--/$-->"), r;
  }
  function Cr(r, s, f) {
    return Ie(s, r.responseState, f.formatContext, f.id), sr(r, s, f), it(s, f.formatContext);
  }
  function Ar(r, s, f) {
    for (var g = f.completedSegments, T = 0; T < g.length; T++) Rr(r, s, f, g[T]);
    if (g.length = 0, r = r.responseState, g = f.id, f = f.rootSegmentID, s.push(r.startInlineScript), r.sentCompleteBoundaryFunction ? s.push('$RC("') : (r.sentCompleteBoundaryFunction = !0, s.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(e(395));
    return f = f.toString(16), s.push(g), s.push('","'), s.push(r.segmentPrefix), s.push(f), s.push('")<\/script>');
  }
  function Rr(r, s, f, g) {
    if (g.status === 2) return !0;
    var T = g.id;
    if (T === -1) {
      if ((g.id = f.rootSegmentID) === -1) throw Error(e(392));
      return Cr(r, s, g);
    }
    return Cr(r, s, g), r = r.responseState, s.push(r.startInlineScript), r.sentCompleteSegmentFunction ? s.push('$RS("') : (r.sentCompleteSegmentFunction = !0, s.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), s.push(r.segmentPrefix), T = T.toString(16), s.push(T), s.push('","'), s.push(r.placeholderPrefix), s.push(T), s.push('")<\/script>');
  }
  function vr(r, s) {
    try {
      var f = r.completedRootSegment;
      if (f !== null && r.pendingRootTasks === 0) {
        sr(r, s, f), r.completedRootSegment = null;
        var g = r.responseState.bootstrapChunks;
        for (f = 0; f < g.length - 1; f++) s.push(g[f]);
        f < g.length && s.push(g[f]);
      }
      var T = r.clientRenderedBoundaries, x;
      for (x = 0; x < T.length; x++) {
        var A = T[x];
        g = s;
        var z = r.responseState, Q = A.id, te = A.errorDigest, oe = A.errorMessage, Pe = A.errorComponentStack;
        if (g.push(z.startInlineScript), z.sentClientRenderFunction ? g.push('$RX("') : (z.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), Q === null) throw Error(e(395));
        if (g.push(Q), g.push('"'), te || oe || Pe) {
          g.push(",");
          var wt = Fe(te || "");
          g.push(wt);
        }
        if (oe || Pe) {
          g.push(",");
          var St = Fe(oe || "");
          g.push(St);
        }
        if (Pe) {
          g.push(",");
          var ct = Fe(Pe);
          g.push(ct);
        }
        if (!g.push(")<\/script>")) {
          r.destination = null, x++, T.splice(0, x);
          return;
        }
      }
      T.splice(0, x);
      var lr = r.completedBoundaries;
      for (x = 0; x < lr.length; x++) if (!Ar(r, s, lr[x])) {
        r.destination = null, x++, lr.splice(0, x);
        return;
      }
      lr.splice(0, x);
      var Ft = r.partialBoundaries;
      for (x = 0; x < Ft.length; x++) {
        var Pr = Ft[x];
        e: {
          T = r, A = s;
          var ur = Pr.completedSegments;
          for (z = 0; z < ur.length; z++) if (!Rr(T, A, Pr, ur[z])) {
            z++, ur.splice(0, z);
            var Ur = !1;
            break e;
          }
          ur.splice(0, z), Ur = !0;
        }
        if (!Ur) {
          r.destination = null, x++, Ft.splice(0, x);
          return;
        }
      }
      Ft.splice(0, x);
      var Yt = r.completedBoundaries;
      for (x = 0; x < Yt.length; x++) if (!Ar(r, s, Yt[x])) {
        r.destination = null, x++, Yt.splice(0, x);
        return;
      }
      Yt.splice(0, x);
    } finally {
      r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && s.push(null);
    }
  }
  function Hr(r, s) {
    try {
      var f = r.abortableTasks;
      f.forEach(function(g) {
        return Oe(g, r, s);
      }), f.clear(), r.destination !== null && vr(r, r.destination);
    } catch (g) {
      Dt(r, g), Y(r, g);
    }
  }
  function Vr() {
  }
  function Or(r, s, f, g) {
    var T = !1, x = null, A = "", z = { push: function(te) {
      return te !== null && (A += te), !0;
    }, destroy: function(te) {
      T = !0, x = te;
    } }, Q = !1;
    if (r = gr(r, je(f, s ? s.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Vr, void 0, function() {
      Q = !0;
    }), Er(r), Hr(r, g), r.status === 1) r.status = 2, z.destroy(r.fatalError);
    else if (r.status !== 2 && r.destination === null) {
      r.destination = z;
      try {
        vr(r, z);
      } catch (te) {
        Dt(r, te), Y(r, te);
      }
    }
    if (T) throw x;
    if (!Q) throw Error(e(426));
    return A;
  }
  return dr.renderToNodeStream = function() {
    throw Error(e(207));
  }, dr.renderToStaticMarkup = function(r, s) {
    return Or(r, s, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, dr.renderToStaticNodeStream = function() {
    throw Error(e(208));
  }, dr.renderToString = function(r, s) {
    return Or(r, s, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, dr.version = "18.3.1", dr;
}
var an = {};
var ai;
function rs() {
  if (ai) return an;
  ai = 1;
  var t = Ct;
  function e(n) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, c = 1; c < arguments.length; c++) a += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + n + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = null, i = 0;
  function l(n, a) {
    if (a.length !== 0) if (512 < a.length) 0 < i && (n.enqueue(new Uint8Array(o.buffer, 0, i)), o = new Uint8Array(512), i = 0), n.enqueue(a);
    else {
      var c = o.length - i;
      c < a.length && (c === 0 ? n.enqueue(o) : (o.set(a.subarray(0, c), i), n.enqueue(o), a = a.subarray(c)), o = new Uint8Array(512), i = 0), o.set(a, i), i += a.length;
    }
  }
  function u(n, a) {
    return l(n, a), !0;
  }
  function d(n) {
    o && 0 < i && (n.enqueue(new Uint8Array(o.buffer, 0, i)), o = null, i = 0);
  }
  var v = new TextEncoder();
  function h(n) {
    return v.encode(n);
  }
  function y(n) {
    return v.encode(n);
  }
  function S(n, a) {
    typeof n.error == "function" ? n.error(a) : n.close();
  }
  var b = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, V = {}, P = {};
  function B(n) {
    return b.call(P, n) ? !0 : b.call(V, n) ? !1 : O.test(n) ? P[n] = !0 : (V[n] = !0, !1);
  }
  function L(n, a, c, m, _, k, R) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = m, this.attributeNamespace = _, this.mustUseProperty = c, this.propertyName = n, this.type = a, this.sanitizeURL = k, this.removeEmptyString = R;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    F[n] = new L(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0];
    F[a] = new L(a, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    F[n] = new L(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    F[n] = new L(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    F[n] = new L(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    F[n] = new L(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    F[n] = new L(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    F[n] = new L(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    F[n] = new L(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var H = /[\-:]([a-z])/g;
  function X(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var a = n.replace(
      H,
      X
    );
    F[a] = new L(a, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var a = n.replace(H, X);
    F[a] = new L(a, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var a = n.replace(H, X);
    F[a] = new L(a, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    F[n] = new L(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    F[n] = new L(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  var G = {
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
  }, N = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(n) {
    N.forEach(function(a) {
      a = a + n.charAt(0).toUpperCase() + n.substring(1), G[a] = G[n];
    });
  });
  var de = /["'&<>]/;
  function he(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var a = de.exec(n);
    if (a) {
      var c = "", m, _ = 0;
      for (m = a.index; m < n.length; m++) {
        switch (n.charCodeAt(m)) {
          case 34:
            a = "&quot;";
            break;
          case 38:
            a = "&amp;";
            break;
          case 39:
            a = "&#x27;";
            break;
          case 60:
            a = "&lt;";
            break;
          case 62:
            a = "&gt;";
            break;
          default:
            continue;
        }
        _ !== m && (c += n.substring(_, m)), _ = m + 1, c += a;
      }
      n = _ !== m ? c + n.substring(_, m) : c;
    }
    return n;
  }
  var He = /([A-Z])/g, Ve = /^ms-/, Ye = Array.isArray, ot = y("<script>"), ke = y("<\/script>"), Ee = y('<script src="'), ze = y('<script type="module" src="'), Ie = y('" async=""><\/script>'), it = /(<\/|<)(s)(cript)/gi;
  function Ue(n, a, c, m) {
    return "" + a + (c === "s" ? "\\u0073" : "\\u0053") + m;
  }
  function Fe(n, a, c, m, _) {
    n = n === void 0 ? "" : n, a = a === void 0 ? ot : y('<script nonce="' + he(a) + '">');
    var k = [];
    if (c !== void 0 && k.push(a, h(("" + c).replace(it, Ue)), ke), m !== void 0) for (c = 0; c < m.length; c++) k.push(Ee, h(he(m[c])), Ie);
    if (_ !== void 0) for (m = 0; m < _.length; m++) k.push(ze, h(he(_[m])), Ie);
    return { bootstrapChunks: k, startInlineScript: a, placeholderPrefix: y(n + "P:"), segmentPrefix: y(n + "S:"), boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function je(n, a) {
    return { insertionMode: n, selectedValue: a };
  }
  function Qe(n) {
    return je(n === "http://www.w3.org/2000/svg" ? 2 : n === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ze(n, a, c) {
    switch (a) {
      case "select":
        return je(1, c.value != null ? c.value : c.defaultValue);
      case "svg":
        return je(2, null);
      case "math":
        return je(3, null);
      case "foreignObject":
        return je(1, null);
      case "table":
        return je(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return je(5, null);
      case "colgroup":
        return je(7, null);
      case "tr":
        return je(6, null);
    }
    return 4 <= n.insertionMode || n.insertionMode === 0 ? je(1, null) : n;
  }
  var W = y("<!-- -->");
  function j(n, a, c, m) {
    return a === "" ? m : (m && n.push(W), n.push(h(he(a))), !0);
  }
  var U = /* @__PURE__ */ new Map(), q = y(' style="'), E = y(":"), Z = y(";");
  function M(n, a, c) {
    if (typeof c != "object") throw Error(e(62));
    a = !0;
    for (var m in c) if (b.call(c, m)) {
      var _ = c[m];
      if (_ != null && typeof _ != "boolean" && _ !== "") {
        if (m.indexOf("--") === 0) {
          var k = h(he(m));
          _ = h(he(("" + _).trim()));
        } else {
          k = m;
          var R = U.get(k);
          R !== void 0 || (R = y(he(k.replace(He, "-$1").toLowerCase().replace(Ve, "-ms-"))), U.set(k, R)), k = R, _ = typeof _ == "number" ? _ === 0 || b.call(G, m) ? h("" + _) : h(_ + "px") : h(he(("" + _).trim()));
        }
        a ? (a = !1, n.push(q, k, E, _)) : n.push(Z, k, E, _);
      }
    }
    a || n.push(re);
  }
  var ue = y(" "), ne = y('="'), re = y('"'), J = y('=""');
  function ce(n, a, c, m) {
    switch (c) {
      case "style":
        M(n, a, m);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < c.length) || c[0] !== "o" && c[0] !== "O" || c[1] !== "n" && c[1] !== "N") {
      if (a = F.hasOwnProperty(c) ? F[c] : null, a !== null) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!a.acceptsBooleans) return;
        }
        switch (c = h(a.attributeName), a.type) {
          case 3:
            m && n.push(ue, c, J);
            break;
          case 4:
            m === !0 ? n.push(ue, c, J) : m !== !1 && n.push(ue, c, ne, h(he(m)), re);
            break;
          case 5:
            isNaN(m) || n.push(ue, c, ne, h(he(m)), re);
            break;
          case 6:
            !isNaN(m) && 1 <= m && n.push(ue, c, ne, h(he(m)), re);
            break;
          default:
            a.sanitizeURL && (m = "" + m), n.push(ue, c, ne, h(he(m)), re);
        }
      } else if (B(c)) {
        switch (typeof m) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (a = c.toLowerCase().slice(0, 5), a !== "data-" && a !== "aria-") return;
        }
        n.push(ue, h(c), ne, h(he(m)), re);
      }
    }
  }
  var me = y(">"), ie = y("/>");
  function ge(n, a, c) {
    if (a != null) {
      if (c != null) throw Error(e(60));
      if (typeof a != "object" || !("__html" in a)) throw Error(e(61));
      a = a.__html, a != null && n.push(h("" + a));
    }
  }
  function fe(n) {
    var a = "";
    return t.Children.forEach(n, function(c) {
      c != null && (a += c);
    }), a;
  }
  var Te = y(' selected=""');
  function Be(n, a, c, m) {
    n.push(ve(c));
    var _ = c = null, k;
    for (k in a) if (b.call(a, k)) {
      var R = a[k];
      if (R != null) switch (k) {
        case "children":
          c = R;
          break;
        case "dangerouslySetInnerHTML":
          _ = R;
          break;
        default:
          ce(n, m, k, R);
      }
    }
    return n.push(me), ge(n, _, c), typeof c == "string" ? (n.push(h(he(c))), null) : c;
  }
  var _e = y(`
`), et = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function ve(n) {
    var a = $e.get(n);
    if (a === void 0) {
      if (!et.test(n)) throw Error(e(65, n));
      a = y("<" + n), $e.set(n, a);
    }
    return a;
  }
  var K = y("<!DOCTYPE html>");
  function ye(n, a, c, m, _) {
    switch (a) {
      case "select":
        n.push(ve("select"));
        var k = null, R = null;
        for (ae in c) if (b.call(c, ae)) {
          var D = c[ae];
          if (D != null) switch (ae) {
            case "children":
              k = D;
              break;
            case "dangerouslySetInnerHTML":
              R = D;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(n, m, ae, D);
          }
        }
        return n.push(me), ge(n, R, k), k;
      case "option":
        R = _.selectedValue, n.push(ve("option"));
        var ee = D = null, le = null, ae = null;
        for (k in c) if (b.call(c, k)) {
          var Re = c[k];
          if (Re != null) switch (k) {
            case "children":
              D = Re;
              break;
            case "selected":
              le = Re;
              break;
            case "dangerouslySetInnerHTML":
              ae = Re;
              break;
            case "value":
              ee = Re;
            default:
              ce(n, m, k, Re);
          }
        }
        if (R != null) if (c = ee !== null ? "" + ee : fe(D), Ye(R)) {
          for (m = 0; m < R.length; m++)
            if ("" + R[m] === c) {
              n.push(Te);
              break;
            }
        } else "" + R === c && n.push(Te);
        else le && n.push(Te);
        return n.push(me), ge(n, ae, D), D;
      case "textarea":
        n.push(ve("textarea")), ae = R = k = null;
        for (D in c) if (b.call(c, D) && (ee = c[D], ee != null)) switch (D) {
          case "children":
            ae = ee;
            break;
          case "value":
            k = ee;
            break;
          case "defaultValue":
            R = ee;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(e(91));
          default:
            ce(n, m, D, ee);
        }
        if (k === null && R !== null && (k = R), n.push(me), ae != null) {
          if (k != null) throw Error(e(92));
          if (Ye(ae) && 1 < ae.length) throw Error(e(93));
          k = "" + ae;
        }
        return typeof k == "string" && k[0] === `
` && n.push(_e), k !== null && n.push(h(he("" + k))), null;
      case "input":
        n.push(ve("input")), ee = ae = D = k = null;
        for (R in c) if (b.call(c, R) && (le = c[R], le != null)) switch (R) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(e(399, "input"));
          case "defaultChecked":
            ee = le;
            break;
          case "defaultValue":
            D = le;
            break;
          case "checked":
            ae = le;
            break;
          case "value":
            k = le;
            break;
          default:
            ce(n, m, R, le);
        }
        return ae !== null ? ce(
          n,
          m,
          "checked",
          ae
        ) : ee !== null && ce(n, m, "checked", ee), k !== null ? ce(n, m, "value", k) : D !== null && ce(n, m, "value", D), n.push(ie), null;
      case "menuitem":
        n.push(ve("menuitem"));
        for (var dt in c) if (b.call(c, dt) && (k = c[dt], k != null)) switch (dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(e(400));
          default:
            ce(n, m, dt, k);
        }
        return n.push(me), null;
      case "title":
        n.push(ve("title")), k = null;
        for (Re in c) if (b.call(c, Re) && (R = c[Re], R != null)) switch (Re) {
          case "children":
            k = R;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(e(434));
          default:
            ce(n, m, Re, R);
        }
        return n.push(me), k;
      case "listing":
      case "pre":
        n.push(ve(a)), R = k = null;
        for (ee in c) if (b.call(c, ee) && (D = c[ee], D != null)) switch (ee) {
          case "children":
            k = D;
            break;
          case "dangerouslySetInnerHTML":
            R = D;
            break;
          default:
            ce(n, m, ee, D);
        }
        if (n.push(me), R != null) {
          if (k != null) throw Error(e(60));
          if (typeof R != "object" || !("__html" in R)) throw Error(e(61));
          c = R.__html, c != null && (typeof c == "string" && 0 < c.length && c[0] === `
` ? n.push(_e, h(c)) : n.push(h("" + c)));
        }
        return typeof k == "string" && k[0] === `
` && n.push(_e), k;
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
        n.push(ve(a));
        for (var bt in c) if (b.call(c, bt) && (k = c[bt], k != null)) switch (bt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(e(399, a));
          default:
            ce(n, m, bt, k);
        }
        return n.push(ie), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Be(n, c, a, m);
      case "html":
        return _.insertionMode === 0 && n.push(K), Be(n, c, a, m);
      default:
        if (a.indexOf("-") === -1 && typeof c.is != "string") return Be(n, c, a, m);
        n.push(ve(a)), R = k = null;
        for (le in c) if (b.call(c, le) && (D = c[le], D != null)) switch (le) {
          case "children":
            k = D;
            break;
          case "dangerouslySetInnerHTML":
            R = D;
            break;
          case "style":
            M(n, m, D);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            B(le) && typeof D != "function" && typeof D != "symbol" && n.push(ue, h(le), ne, h(he(D)), re);
        }
        return n.push(me), ge(n, R, k), k;
    }
  }
  var tt = y("</"), Ke = y(">"), Me = y('<template id="'), Qt = y('"></template>'), er = y("<!--$-->"), hr = y('<!--$?--><template id="'), At = y('"></template>'), Rt = y("<!--$!-->"), $t = y("<!--/$-->"), Ht = y("<template"), at = y('"'), Tt = y(' data-dgst="');
  y(' data-msg="'), y(' data-stck="');
  var tr = y("></template>");
  function Xe(n, a, c) {
    if (l(n, hr), c === null) throw Error(e(395));
    return l(n, c), u(n, At);
  }
  var rr = y('<div hidden id="'), rt = y('">'), we = y("</div>"), Ot = y('<svg aria-hidden="true" style="display:none" id="'), Ae = y('">'), nt = y("</svg>"), pt = y('<math aria-hidden="true" style="display:none" id="'), Pt = y('">'), st = y("</math>"), nr = y('<table hidden id="'), Vt = y('">'), or = y("</table>"), Nt = y('<table hidden><tbody id="'), Ut = y('">'), mr = y("</tbody></table>"), Ge = y('<table hidden><tr id="'), Wt = y('">'), It = y("</tr></table>"), ir = y('<table hidden><colgroup id="'), Lt = y('">'), vt = y("</colgroup></table>");
  function lt(n, a, c, m) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return l(n, rr), l(n, a.segmentPrefix), l(n, h(m.toString(16))), u(n, rt);
      case 2:
        return l(n, Ot), l(n, a.segmentPrefix), l(n, h(m.toString(16))), u(n, Ae);
      case 3:
        return l(n, pt), l(n, a.segmentPrefix), l(n, h(m.toString(16))), u(n, Pt);
      case 4:
        return l(n, nr), l(n, a.segmentPrefix), l(n, h(m.toString(16))), u(n, Vt);
      case 5:
        return l(n, Nt), l(n, a.segmentPrefix), l(n, h(m.toString(16))), u(n, Ut);
      case 6:
        return l(n, Ge), l(n, a.segmentPrefix), l(n, h(m.toString(16))), u(n, Wt);
      case 7:
        return l(
          n,
          ir
        ), l(n, a.segmentPrefix), l(n, h(m.toString(16))), u(n, Lt);
      default:
        throw Error(e(397));
    }
  }
  function Et(n, a) {
    switch (a.insertionMode) {
      case 0:
      case 1:
        return u(n, we);
      case 2:
        return u(n, nt);
      case 3:
        return u(n, st);
      case 4:
        return u(n, or);
      case 5:
        return u(n, mr);
      case 6:
        return u(n, It);
      case 7:
        return u(n, vt);
      default:
        throw Error(e(397));
    }
  }
  var gr = y('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), qt = y('$RS("'), Mt = y('","'), Dt = y('")<\/script>'), Y = y('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), w = y('$RC("'), I = y('","'), $ = y('")<\/script>'), pe = y('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Se = y('$RX("'), De = y('"'), Le = y(")<\/script>"), ut = y(","), Oe = /[<\u2028\u2029]/g;
  function ht(n) {
    return JSON.stringify(n).replace(Oe, function(a) {
      switch (a) {
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
  var yt = Object.assign, Er = Symbol.for("react.element"), ar = Symbol.for("react.portal"), sr = Symbol.for("react.fragment"), Cr = Symbol.for("react.strict_mode"), Ar = Symbol.for("react.profiler"), Rr = Symbol.for("react.provider"), vr = Symbol.for("react.context"), Hr = Symbol.for("react.forward_ref"), Vr = Symbol.for("react.suspense"), Or = Symbol.for("react.suspense_list"), r = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), T = Symbol.for("react.legacy_hidden"), x = Symbol.for("react.default_value"), A = Symbol.iterator;
  function z(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case sr:
        return "Fragment";
      case ar:
        return "Portal";
      case Ar:
        return "Profiler";
      case Cr:
        return "StrictMode";
      case Vr:
        return "Suspense";
      case Or:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case vr:
        return (n.displayName || "Context") + ".Consumer";
      case Rr:
        return (n._context.displayName || "Context") + ".Provider";
      case Hr:
        var a = n.render;
        return n = n.displayName, n || (n = a.displayName || a.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case r:
        return a = n.displayName || null, a !== null ? a : z(n.type) || "Memo";
      case s:
        a = n._payload, n = n._init;
        try {
          return z(n(a));
        } catch {
        }
    }
    return null;
  }
  var Q = {};
  function te(n, a) {
    if (n = n.contextTypes, !n) return Q;
    var c = {}, m;
    for (m in n) c[m] = a[m];
    return c;
  }
  var oe = null;
  function Pe(n, a) {
    if (n !== a) {
      n.context._currentValue = n.parentValue, n = n.parent;
      var c = a.parent;
      if (n === null) {
        if (c !== null) throw Error(e(401));
      } else {
        if (c === null) throw Error(e(401));
        Pe(n, c);
      }
      a.context._currentValue = a.value;
    }
  }
  function wt(n) {
    n.context._currentValue = n.parentValue, n = n.parent, n !== null && wt(n);
  }
  function St(n) {
    var a = n.parent;
    a !== null && St(a), n.context._currentValue = n.value;
  }
  function ct(n, a) {
    if (n.context._currentValue = n.parentValue, n = n.parent, n === null) throw Error(e(402));
    n.depth === a.depth ? Pe(n, a) : ct(n, a);
  }
  function lr(n, a) {
    var c = a.parent;
    if (c === null) throw Error(e(402));
    n.depth === c.depth ? Pe(n, c) : lr(n, c), a.context._currentValue = a.value;
  }
  function Ft(n) {
    var a = oe;
    a !== n && (a === null ? St(n) : n === null ? wt(a) : a.depth === n.depth ? Pe(a, n) : a.depth > n.depth ? ct(a, n) : lr(a, n), oe = n);
  }
  var Pr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, a) {
    n = n._reactInternals, n.queue !== null && n.queue.push(a);
  }, enqueueReplaceState: function(n, a) {
    n = n._reactInternals, n.replace = !0, n.queue = [a];
  }, enqueueForceUpdate: function() {
  } };
  function ur(n, a, c, m) {
    var _ = n.state !== void 0 ? n.state : null;
    n.updater = Pr, n.props = c, n.state = _;
    var k = { queue: [], replace: !1 };
    n._reactInternals = k;
    var R = a.contextType;
    if (n.context = typeof R == "object" && R !== null ? R._currentValue : m, R = a.getDerivedStateFromProps, typeof R == "function" && (R = R(c, _), _ = R == null ? _ : yt({}, _, R), n.state = _), typeof a.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (a = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), a !== n.state && Pr.enqueueReplaceState(n, n.state, null), k.queue !== null && 0 < k.queue.length) if (a = k.queue, R = k.replace, k.queue = null, k.replace = !1, R && a.length === 1) n.state = a[0];
    else {
      for (k = R ? a[0] : n.state, _ = !0, R = R ? 1 : 0; R < a.length; R++) {
        var D = a[R];
        D = typeof D == "function" ? D.call(n, k, c, m) : D, D != null && (_ ? (_ = !1, k = yt({}, k, D)) : yt(k, D));
      }
      n.state = k;
    }
    else k.queue = null;
  }
  var Ur = { id: 1, overflow: "" };
  function Yt(n, a, c) {
    var m = n.id;
    n = n.overflow;
    var _ = 32 - Wr(m) - 1;
    m &= ~(1 << _), c += 1;
    var k = 32 - Wr(a) + _;
    if (30 < k) {
      var R = _ - _ % 5;
      return k = (m & (1 << R) - 1).toString(32), m >>= R, _ -= R, { id: 1 << 32 - Wr(a) + _ | c << _ | m, overflow: k + n };
    }
    return { id: 1 << k | c << _ | m, overflow: n };
  }
  var Wr = Math.clz32 ? Math.clz32 : sa, ia = Math.log, aa = Math.LN2;
  function sa(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ia(n) / aa | 0) | 0;
  }
  function la(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var ua = typeof Object.is == "function" ? Object.is : la, jt = null, An = null, qr = null, Ce = null, Nr = !1, Yr = !1, Ir = 0, Xt = null, Xr = 0;
  function cr() {
    if (jt === null) throw Error(e(321));
    return jt;
  }
  function Ro() {
    if (0 < Xr) throw Error(e(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Rn() {
    return Ce === null ? qr === null ? (Nr = !1, qr = Ce = Ro()) : (Nr = !0, Ce = qr) : Ce.next === null ? (Nr = !1, Ce = Ce.next = Ro()) : (Nr = !0, Ce = Ce.next), Ce;
  }
  function On() {
    An = jt = null, Yr = !1, qr = null, Xr = 0, Ce = Xt = null;
  }
  function Oo(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function Po(n, a, c) {
    if (jt = cr(), Ce = Rn(), Nr) {
      var m = Ce.queue;
      if (a = m.dispatch, Xt !== null && (c = Xt.get(m), c !== void 0)) {
        Xt.delete(m), m = Ce.memoizedState;
        do
          m = n(m, c.action), c = c.next;
        while (c !== null);
        return Ce.memoizedState = m, [m, a];
      }
      return [Ce.memoizedState, a];
    }
    return n = n === Oo ? typeof a == "function" ? a() : a : c !== void 0 ? c(a) : a, Ce.memoizedState = n, n = Ce.queue = { last: null, dispatch: null }, n = n.dispatch = ca.bind(null, jt, n), [Ce.memoizedState, n];
  }
  function No(n, a) {
    if (jt = cr(), Ce = Rn(), a = a === void 0 ? null : a, Ce !== null) {
      var c = Ce.memoizedState;
      if (c !== null && a !== null) {
        var m = c[1];
        e: if (m === null) m = !1;
        else {
          for (var _ = 0; _ < m.length && _ < a.length; _++) if (!ua(a[_], m[_])) {
            m = !1;
            break e;
          }
          m = !0;
        }
        if (m) return c[0];
      }
    }
    return n = n(), Ce.memoizedState = [n, a], n;
  }
  function ca(n, a, c) {
    if (25 <= Xr) throw Error(e(301));
    if (n === jt) if (Yr = !0, n = { action: c, next: null }, Xt === null && (Xt = /* @__PURE__ */ new Map()), c = Xt.get(a), c === void 0) Xt.set(a, n);
    else {
      for (a = c; a.next !== null; ) a = a.next;
      a.next = n;
    }
  }
  function fa() {
    throw Error(e(394));
  }
  function Gr() {
  }
  var Io = { readContext: function(n) {
    return n._currentValue;
  }, useContext: function(n) {
    return cr(), n._currentValue;
  }, useMemo: No, useReducer: Po, useRef: function(n) {
    jt = cr(), Ce = Rn();
    var a = Ce.memoizedState;
    return a === null ? (n = { current: n }, Ce.memoizedState = n) : a;
  }, useState: function(n) {
    return Po(Oo, n);
  }, useInsertionEffect: Gr, useLayoutEffect: function() {
  }, useCallback: function(n, a) {
    return No(function() {
      return n;
    }, a);
  }, useImperativeHandle: Gr, useEffect: Gr, useDebugValue: Gr, useDeferredValue: function(n) {
    return cr(), n;
  }, useTransition: function() {
    return cr(), [!1, fa];
  }, useId: function() {
    var n = An.treeContext, a = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - Wr(n) - 1)).toString(32) + a;
    var c = Zr;
    if (c === null) throw Error(e(404));
    return a = Ir++, n = ":" + c.idPrefix + "R" + n, 0 < a && (n += "H" + a.toString(32)), n + ":";
  }, useMutableSource: function(n, a) {
    return cr(), a(n._source);
  }, useSyncExternalStore: function(n, a, c) {
    if (c === void 0) throw Error(e(407));
    return c();
  } }, Zr = null, Pn = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function da(n) {
    return console.error(n), null;
  }
  function Lr() {
  }
  function pa(n, a, c, m, _, k, R, D, ee) {
    var le = [], ae = /* @__PURE__ */ new Set();
    return a = { destination: null, responseState: a, progressiveChunkSize: m === void 0 ? 12800 : m, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ae, pingedTasks: le, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: _ === void 0 ? da : _, onAllReady: k === void 0 ? Lr : k, onShellReady: R === void 0 ? Lr : R, onShellError: D === void 0 ? Lr : D, onFatalError: ee === void 0 ? Lr : ee }, c = Kr(a, 0, null, c, !1, !1), c.parentFlushed = !0, n = Nn(a, n, null, c, ae, Q, null, Ur), le.push(n), a;
  }
  function Nn(n, a, c, m, _, k, R, D) {
    n.allPendingTasks++, c === null ? n.pendingRootTasks++ : c.pendingTasks++;
    var ee = { node: a, ping: function() {
      var le = n.pingedTasks;
      le.push(ee), le.length === 1 && zo(n);
    }, blockedBoundary: c, blockedSegment: m, abortSet: _, legacyContext: k, context: R, treeContext: D };
    return _.add(ee), ee;
  }
  function Kr(n, a, c, m, _, k) {
    return { status: 0, id: -1, index: a, parentFlushed: !1, chunks: [], children: [], formatContext: m, boundary: c, lastPushedText: _, textEmbedded: k };
  }
  function Mr(n, a) {
    if (n = n.onError(a), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function Jr(n, a) {
    var c = n.onShellError;
    c(a), c = n.onFatalError, c(a), n.destination !== null ? (n.status = 2, S(n.destination, a)) : (n.status = 1, n.fatalError = a);
  }
  function Lo(n, a, c, m, _) {
    for (jt = {}, An = a, Ir = 0, n = c(m, _); Yr; ) Yr = !1, Ir = 0, Xr += 1, Ce = null, n = c(m, _);
    return On(), n;
  }
  function Mo(n, a, c, m) {
    var _ = c.render(), k = m.childContextTypes;
    if (k != null) {
      var R = a.legacyContext;
      if (typeof c.getChildContext != "function") m = R;
      else {
        c = c.getChildContext();
        for (var D in c) if (!(D in k)) throw Error(e(108, z(m) || "Unknown", D));
        m = yt({}, R, c);
      }
      a.legacyContext = m, ft(n, a, _), a.legacyContext = R;
    } else ft(n, a, _);
  }
  function Do(n, a) {
    if (n && n.defaultProps) {
      a = yt({}, a), n = n.defaultProps;
      for (var c in n) a[c] === void 0 && (a[c] = n[c]);
      return a;
    }
    return a;
  }
  function In(n, a, c, m, _) {
    if (typeof c == "function") if (c.prototype && c.prototype.isReactComponent) {
      _ = te(c, a.legacyContext);
      var k = c.contextType;
      k = new c(m, typeof k == "object" && k !== null ? k._currentValue : _), ur(k, c, m, _), Mo(n, a, k, c);
    } else {
      k = te(c, a.legacyContext), _ = Lo(n, a, c, m, k);
      var R = Ir !== 0;
      if (typeof _ == "object" && _ !== null && typeof _.render == "function" && _.$$typeof === void 0) ur(_, c, m, k), Mo(n, a, _, c);
      else if (R) {
        m = a.treeContext, a.treeContext = Yt(m, 1, 0);
        try {
          ft(n, a, _);
        } finally {
          a.treeContext = m;
        }
      } else ft(n, a, _);
    }
    else if (typeof c == "string") {
      switch (_ = a.blockedSegment, k = ye(_.chunks, c, m, n.responseState, _.formatContext), _.lastPushedText = !1, R = _.formatContext, _.formatContext = Ze(R, c, m), Ln(n, a, k), _.formatContext = R, c) {
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
          _.chunks.push(tt, h(c), Ke);
      }
      _.lastPushedText = !1;
    } else {
      switch (c) {
        case T:
        case g:
        case Cr:
        case Ar:
        case sr:
          ft(n, a, m.children);
          return;
        case Or:
          ft(n, a, m.children);
          return;
        case f:
          throw Error(e(343));
        case Vr:
          e: {
            c = a.blockedBoundary, _ = a.blockedSegment, k = m.fallback, m = m.children, R = /* @__PURE__ */ new Set();
            var D = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: R, errorDigest: null }, ee = Kr(n, _.chunks.length, D, _.formatContext, !1, !1);
            _.children.push(ee), _.lastPushedText = !1;
            var le = Kr(n, 0, null, _.formatContext, !1, !1);
            le.parentFlushed = !0, a.blockedBoundary = D, a.blockedSegment = le;
            try {
              if (Ln(
                n,
                a,
                m
              ), le.lastPushedText && le.textEmbedded && le.chunks.push(W), le.status = 1, Qr(D, le), D.pendingTasks === 0) break e;
            } catch (ae) {
              le.status = 4, D.forceClientRender = !0, D.errorDigest = Mr(n, ae);
            } finally {
              a.blockedBoundary = c, a.blockedSegment = _;
            }
            a = Nn(n, k, c, ee, R, a.legacyContext, a.context, a.treeContext), n.pingedTasks.push(a);
          }
          return;
      }
      if (typeof c == "object" && c !== null) switch (c.$$typeof) {
        case Hr:
          if (m = Lo(n, a, c.render, m, _), Ir !== 0) {
            c = a.treeContext, a.treeContext = Yt(c, 1, 0);
            try {
              ft(n, a, m);
            } finally {
              a.treeContext = c;
            }
          } else ft(n, a, m);
          return;
        case r:
          c = c.type, m = Do(c, m), In(n, a, c, m, _);
          return;
        case Rr:
          if (_ = m.children, c = c._context, m = m.value, k = c._currentValue, c._currentValue = m, R = oe, oe = m = { parent: R, depth: R === null ? 0 : R.depth + 1, context: c, parentValue: k, value: m }, a.context = m, ft(n, a, _), n = oe, n === null) throw Error(e(403));
          m = n.parentValue, n.context._currentValue = m === x ? n.context._defaultValue : m, n = oe = n.parent, a.context = n;
          return;
        case vr:
          m = m.children, m = m(c._currentValue), ft(n, a, m);
          return;
        case s:
          _ = c._init, c = _(c._payload), m = Do(c, m), In(n, a, c, m, void 0);
          return;
      }
      throw Error(e(
        130,
        c == null ? c : typeof c,
        ""
      ));
    }
  }
  function ft(n, a, c) {
    if (a.node = c, typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Er:
          In(n, a, c.type, c.props, c.ref);
          return;
        case ar:
          throw Error(e(257));
        case s:
          var m = c._init;
          c = m(c._payload), ft(n, a, c);
          return;
      }
      if (Ye(c)) {
        Fo(n, a, c);
        return;
      }
      if (c === null || typeof c != "object" ? m = null : (m = A && c[A] || c["@@iterator"], m = typeof m == "function" ? m : null), m && (m = m.call(c))) {
        if (c = m.next(), !c.done) {
          var _ = [];
          do
            _.push(c.value), c = m.next();
          while (!c.done);
          Fo(n, a, _);
        }
        return;
      }
      throw n = Object.prototype.toString.call(c), Error(e(31, n === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : n));
    }
    typeof c == "string" ? (m = a.blockedSegment, m.lastPushedText = j(a.blockedSegment.chunks, c, n.responseState, m.lastPushedText)) : typeof c == "number" && (m = a.blockedSegment, m.lastPushedText = j(a.blockedSegment.chunks, "" + c, n.responseState, m.lastPushedText));
  }
  function Fo(n, a, c) {
    for (var m = c.length, _ = 0; _ < m; _++) {
      var k = a.treeContext;
      a.treeContext = Yt(k, m, _);
      try {
        Ln(n, a, c[_]);
      } finally {
        a.treeContext = k;
      }
    }
  }
  function Ln(n, a, c) {
    var m = a.blockedSegment.formatContext, _ = a.legacyContext, k = a.context;
    try {
      return ft(n, a, c);
    } catch (ee) {
      if (On(), typeof ee == "object" && ee !== null && typeof ee.then == "function") {
        c = ee;
        var R = a.blockedSegment, D = Kr(n, R.chunks.length, null, R.formatContext, R.lastPushedText, !0);
        R.children.push(D), R.lastPushedText = !1, n = Nn(n, a.node, a.blockedBoundary, D, a.abortSet, a.legacyContext, a.context, a.treeContext).ping, c.then(n, n), a.blockedSegment.formatContext = m, a.legacyContext = _, a.context = k, Ft(k);
      } else throw a.blockedSegment.formatContext = m, a.legacyContext = _, a.context = k, Ft(k), ee;
    }
  }
  function ha(n) {
    var a = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Bo(this, a, n);
  }
  function jo(n, a, c) {
    var m = n.blockedBoundary;
    n.blockedSegment.status = 3, m === null ? (a.allPendingTasks--, a.status !== 2 && (a.status = 2, a.destination !== null && a.destination.close())) : (m.pendingTasks--, m.forceClientRender || (m.forceClientRender = !0, n = c === void 0 ? Error(e(432)) : c, m.errorDigest = a.onError(n), m.parentFlushed && a.clientRenderedBoundaries.push(m)), m.fallbackAbortableTasks.forEach(function(_) {
      return jo(_, a, c);
    }), m.fallbackAbortableTasks.clear(), a.allPendingTasks--, a.allPendingTasks === 0 && (m = a.onAllReady, m()));
  }
  function Qr(n, a) {
    if (a.chunks.length === 0 && a.children.length === 1 && a.children[0].boundary === null) {
      var c = a.children[0];
      c.id = a.id, c.parentFlushed = !0, c.status === 1 && Qr(n, c);
    } else n.completedSegments.push(a);
  }
  function Bo(n, a, c) {
    if (a === null) {
      if (c.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(e(389));
        n.completedRootSegment = c;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Lr, a = n.onShellReady, a());
    } else a.pendingTasks--, a.forceClientRender || (a.pendingTasks === 0 ? (c.parentFlushed && c.status === 1 && Qr(a, c), a.parentFlushed && n.completedBoundaries.push(a), a.fallbackAbortableTasks.forEach(ha, n), a.fallbackAbortableTasks.clear()) : c.parentFlushed && c.status === 1 && (Qr(a, c), a.completedSegments.length === 1 && a.parentFlushed && n.partialBoundaries.push(a)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function zo(n) {
    if (n.status !== 2) {
      var a = oe, c = Pn.current;
      Pn.current = Io;
      var m = Zr;
      Zr = n.responseState;
      try {
        var _ = n.pingedTasks, k;
        for (k = 0; k < _.length; k++) {
          var R = _[k], D = n, ee = R.blockedSegment;
          if (ee.status === 0) {
            Ft(R.context);
            try {
              ft(D, R, R.node), ee.lastPushedText && ee.textEmbedded && ee.chunks.push(W), R.abortSet.delete(R), ee.status = 1, Bo(D, R.blockedBoundary, ee);
            } catch (xt) {
              if (On(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
                var le = R.ping;
                xt.then(le, le);
              } else {
                R.abortSet.delete(R), ee.status = 4;
                var ae = R.blockedBoundary, Re = xt, dt = Mr(D, Re);
                if (ae === null ? Jr(D, Re) : (ae.pendingTasks--, ae.forceClientRender || (ae.forceClientRender = !0, ae.errorDigest = dt, ae.parentFlushed && D.clientRenderedBoundaries.push(ae))), D.allPendingTasks--, D.allPendingTasks === 0) {
                  var bt = D.onAllReady;
                  bt();
                }
              }
            } finally {
            }
          }
        }
        _.splice(0, k), n.destination !== null && Mn(n, n.destination);
      } catch (xt) {
        Mr(n, xt), Jr(n, xt);
      } finally {
        Zr = m, Pn.current = c, c === Io && Ft(a);
      }
    }
  }
  function en(n, a, c) {
    switch (c.parentFlushed = !0, c.status) {
      case 0:
        var m = c.id = n.nextSegmentId++;
        return c.lastPushedText = !1, c.textEmbedded = !1, n = n.responseState, l(a, Me), l(a, n.placeholderPrefix), n = h(m.toString(16)), l(a, n), u(a, Qt);
      case 1:
        c.status = 2;
        var _ = !0;
        m = c.chunks;
        var k = 0;
        c = c.children;
        for (var R = 0; R < c.length; R++) {
          for (_ = c[R]; k < _.index; k++) l(a, m[k]);
          _ = tn(n, a, _);
        }
        for (; k < m.length - 1; k++) l(a, m[k]);
        return k < m.length && (_ = u(a, m[k])), _;
      default:
        throw Error(e(390));
    }
  }
  function tn(n, a, c) {
    var m = c.boundary;
    if (m === null) return en(n, a, c);
    if (m.parentFlushed = !0, m.forceClientRender) m = m.errorDigest, u(a, Rt), l(a, Ht), m && (l(a, Tt), l(a, h(he(m))), l(a, at)), u(a, tr), en(n, a, c);
    else if (0 < m.pendingTasks) {
      m.rootSegmentID = n.nextSegmentId++, 0 < m.completedSegments.length && n.partialBoundaries.push(m);
      var _ = n.responseState, k = _.nextSuspenseID++;
      _ = y(_.boundaryPrefix + k.toString(16)), m = m.id = _, Xe(a, n.responseState, m), en(n, a, c);
    } else if (m.byteSize > n.progressiveChunkSize) m.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(m), Xe(a, n.responseState, m.id), en(n, a, c);
    else {
      if (u(a, er), c = m.completedSegments, c.length !== 1) throw Error(e(391));
      tn(n, a, c[0]);
    }
    return u(a, $t);
  }
  function $o(n, a, c) {
    return lt(a, n.responseState, c.formatContext, c.id), tn(n, a, c), Et(a, c.formatContext);
  }
  function Ho(n, a, c) {
    for (var m = c.completedSegments, _ = 0; _ < m.length; _++) Vo(n, a, c, m[_]);
    if (m.length = 0, n = n.responseState, m = c.id, c = c.rootSegmentID, l(a, n.startInlineScript), n.sentCompleteBoundaryFunction ? l(a, w) : (n.sentCompleteBoundaryFunction = !0, l(a, Y)), m === null) throw Error(e(395));
    return c = h(c.toString(16)), l(a, m), l(a, I), l(a, n.segmentPrefix), l(a, c), u(a, $);
  }
  function Vo(n, a, c, m) {
    if (m.status === 2) return !0;
    var _ = m.id;
    if (_ === -1) {
      if ((m.id = c.rootSegmentID) === -1) throw Error(e(392));
      return $o(n, a, m);
    }
    return $o(n, a, m), n = n.responseState, l(a, n.startInlineScript), n.sentCompleteSegmentFunction ? l(a, qt) : (n.sentCompleteSegmentFunction = !0, l(a, gr)), l(a, n.segmentPrefix), _ = h(_.toString(16)), l(a, _), l(a, Mt), l(a, n.placeholderPrefix), l(a, _), u(a, Dt);
  }
  function Mn(n, a) {
    o = new Uint8Array(512), i = 0;
    try {
      var c = n.completedRootSegment;
      if (c !== null && n.pendingRootTasks === 0) {
        tn(n, a, c), n.completedRootSegment = null;
        var m = n.responseState.bootstrapChunks;
        for (c = 0; c < m.length - 1; c++) l(a, m[c]);
        c < m.length && u(a, m[c]);
      }
      var _ = n.clientRenderedBoundaries, k;
      for (k = 0; k < _.length; k++) {
        var R = _[k];
        m = a;
        var D = n.responseState, ee = R.id, le = R.errorDigest, ae = R.errorMessage, Re = R.errorComponentStack;
        if (l(m, D.startInlineScript), D.sentClientRenderFunction ? l(m, Se) : (D.sentClientRenderFunction = !0, l(
          m,
          pe
        )), ee === null) throw Error(e(395));
        l(m, ee), l(m, De), (le || ae || Re) && (l(m, ut), l(m, h(ht(le || "")))), (ae || Re) && (l(m, ut), l(m, h(ht(ae || "")))), Re && (l(m, ut), l(m, h(ht(Re)))), u(m, Le);
      }
      _.splice(0, k);
      var dt = n.completedBoundaries;
      for (k = 0; k < dt.length; k++) Ho(n, a, dt[k]);
      dt.splice(0, k), d(a), o = new Uint8Array(512), i = 0;
      var bt = n.partialBoundaries;
      for (k = 0; k < bt.length; k++) {
        var xt = bt[k];
        e: {
          _ = n, R = a;
          var rn = xt.completedSegments;
          for (D = 0; D < rn.length; D++) if (!Vo(
            _,
            R,
            xt,
            rn[D]
          )) {
            D++, rn.splice(0, D);
            var Wo = !1;
            break e;
          }
          rn.splice(0, D), Wo = !0;
        }
        if (!Wo) {
          n.destination = null, k++, bt.splice(0, k);
          return;
        }
      }
      bt.splice(0, k);
      var Dn = n.completedBoundaries;
      for (k = 0; k < Dn.length; k++) Ho(n, a, Dn[k]);
      Dn.splice(0, k);
    } finally {
      d(a), n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && a.close();
    }
  }
  function Uo(n, a) {
    try {
      var c = n.abortableTasks;
      c.forEach(function(m) {
        return jo(m, n, a);
      }), c.clear(), n.destination !== null && Mn(n, n.destination);
    } catch (m) {
      Mr(n, m), Jr(n, m);
    }
  }
  return an.renderToReadableStream = function(n, a) {
    return new Promise(function(c, m) {
      var _, k, R = new Promise(function(ae, Re) {
        k = ae, _ = Re;
      }), D = pa(n, Fe(a ? a.identifierPrefix : void 0, a ? a.nonce : void 0, a ? a.bootstrapScriptContent : void 0, a ? a.bootstrapScripts : void 0, a ? a.bootstrapModules : void 0), Qe(a ? a.namespaceURI : void 0), a ? a.progressiveChunkSize : void 0, a ? a.onError : void 0, k, function() {
        var ae = new ReadableStream({ type: "bytes", pull: function(Re) {
          if (D.status === 1) D.status = 2, S(Re, D.fatalError);
          else if (D.status !== 2 && D.destination === null) {
            D.destination = Re;
            try {
              Mn(D, Re);
            } catch (dt) {
              Mr(D, dt), Jr(D, dt);
            }
          }
        }, cancel: function() {
          Uo(D);
        } }, { highWaterMark: 0 });
        ae.allReady = R, c(ae);
      }, function(ae) {
        R.catch(function() {
        }), m(ae);
      }, _);
      if (a && a.signal) {
        var ee = a.signal, le = function() {
          Uo(D, ee.reason), ee.removeEventListener("abort", le);
        };
        ee.addEventListener("abort", le);
      }
      zo(D);
    });
  }, an.version = "18.3.1", an;
}
var _r, Mi;
_r = ts(), Mi = rs();
_r.version;
_r.renderToString;
_r.renderToStaticMarkup;
_r.renderToNodeStream;
_r.renderToStaticNodeStream;
Mi.renderToReadableStream;
const ns = "staticMarkup";
function os() {
  const e = ma().indexOf(ns) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const wr = ({ gaData: t, prefix: e = "", children: o }) => {
  const { isReact: i } = os(), { onClick: l, ...u } = o.props;
  if (i)
    return Ct.cloneElement(o, {
      ...u,
      onClick: (h) => (es(t), l ? l(h) : !0)
    });
  let d = "";
  ["input", "header", "header-input"].includes(e) && (d = `-${e}`);
  const v = {
    [`data-ga${d}`]: t.text,
    [`data-ga${d}-name`]: t.name,
    [`data-ga${d}-event`]: t.event,
    [`data-ga${d}-action`]: t.action,
    [`data-ga${d}-type`]: t.type,
    [`data-ga${d}-region`]: t.region,
    [`data-ga${d}-section`]: t.section,
    [`data-ga${d}-component`]: t.component
  };
  return Ct.cloneElement(o, {
    ...u,
    onClick: l,
    ...v
  });
}, is = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ho = ({
  label: t,
  cardTitle: e,
  gaData: o,
  ariaLabel: i,
  block: l,
  color: u,
  disabled: d,
  element: v,
  href: h,
  icon: y,
  innerRef: S,
  onClick: b,
  size: O,
  classes: V,
  target: P,
  ...B
}) => {
  const L = Br("btn", {
    [`btn-${u}`]: !0,
    "btn-md": O === "small",
    "btn-sm": O === "xsmall",
    "btn-block": l,
    disabled: d
  });
  let F = v;
  return h && v === "button" && (F = "a"), /* @__PURE__ */ C.jsx(
    wr,
    {
      gaData: {
        ...is,
        section: e,
        // @deprecated - remove at some point
        ...o,
        text: t
      },
      children: /* @__PURE__ */ C.jsxs(
        F,
        {
          type: F === "button" && b ? "button" : void 0,
          ...B,
          className: Br(V) || L,
          href: h,
          ref: S,
          onClick: b,
          "aria-label": i,
          target: F === "a" ? P : null,
          children: [
            y && /* @__PURE__ */ C.jsx("i", { className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} me-1` }),
            t
          ]
        }
      )
    }
  );
};
ho.propTypes = {
  /**
   * Button label
   */
  label: p.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: p.string,
  /**
   * Google Analytics event data
   */
  gaData: Li,
  /**
    ARIA label for accessibility
  */
  ariaLabel: p.string,
  /**
    Render button as a block-button?
  */
  block: p.bool,
  /**
    Button background color
  */
  color: p.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: p.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: p.oneOfType([
    p.func,
    p.string,
    p.shape({ $$typeof: p.symbol, render: p.func }),
    p.arrayOf(
      p.oneOfType([
        p.func,
        p.string,
        p.shape({ $$typeof: p.symbol, render: p.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: p.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: p.arrayOf(p.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: p.oneOfType([
    p.object,
    p.func,
    p.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: p.func,
  /**
    Button size
  */
  size: p.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: p.arrayOf(p.string),
  /**
   Link target type
   */
  target: p.oneOf(["_blank", "_self", "_top", "_parent"])
};
ho.defaultProps = {
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
const as = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, mo = ({
  label: t,
  cardTitle: e,
  gaData: o,
  ariaLabel: i,
  color: l,
  disabled: u,
  element: d = "button",
  innerRef: v,
  href: h,
  onClick: y,
  ...S
}) => {
  const b = Br("btn", "btn-tag", {
    "btn-tag-alt-white": l === "white",
    "btn-tag-alt-gray": l === "gray",
    "btn-tag-alt-dark": l === "dark",
    disabled: u
  });
  let O = d;
  return h && d === "button" && (O = "a"), /* @__PURE__ */ C.jsx(
    wr,
    {
      gaData: {
        ...as,
        section: e,
        // @deprecated - remove at some point
        ...o,
        text: t
      },
      children: /* @__PURE__ */ C.jsx(
        O,
        {
          type: O === "button" && y ? "button" : void 0,
          ...S,
          className: b,
          href: h,
          ref: v,
          onClick: y,
          "aria-label": i,
          children: t
        }
      )
    }
  );
};
mo.propTypes = {
  /**
    Button tag label
  */
  label: p.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: p.string,
  /**
   * Google Analytics event data
   */
  gaData: Li,
  /**
    ARIA label for accessibility
  */
  ariaLabel: p.string,
  /**
    Button background color
  */
  color: p.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: p.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: p.oneOfType([
    p.func,
    p.string,
    p.shape({ $$typeof: p.symbol, render: p.func }),
    p.arrayOf(
      p.oneOfType([
        p.func,
        p.string,
        p.shape({ $$typeof: p.symbol, render: p.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: p.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: p.oneOfType([
    p.object,
    p.func,
    p.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: p.func
};
mo.defaultProps = {
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
const go = ({
  src: t,
  alt: e,
  cssClasses: o,
  loading: i = "lazy",
  decoding: l = "async",
  dataTestId: u,
  fetchPriority: d = "auto",
  width: v,
  height: h,
  cardLink: y,
  title: S,
  caption: b,
  captionTitle: O,
  border: V,
  dropShadow: P
}) => {
  const B = {
    src: t,
    alt: e,
    loading: i,
    decoding: l,
    fetchpriority: d,
    // React attribute bug workaround
    ...(o == null ? void 0 : o.length) > 0 && { className: dn(o) },
    ...u && { "data-testid": u },
    ...v && { width: v },
    ...h && { height: h }
  }, L = Br("uds-img", {
    borderless: !V,
    "uds-img-drop-shadow": P
  }), F = (X) => {
    const G = X ? `${B.className} ${X}` : B.className;
    return y ? /* @__PURE__ */ C.jsxs("a", { href: y, children: [
      /* @__PURE__ */ C.jsx("img", { ...B, className: G }),
      /* @__PURE__ */ C.jsx("span", { className: "visually-hidden", children: S })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ C.jsx("img", { ...B, className: G })
    );
  }, H = () => /* @__PURE__ */ C.jsx("div", { className: L, children: /* @__PURE__ */ C.jsxs("figure", { className: "figure uds-figure", children: [
    F(),
    b && /* @__PURE__ */ C.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      O && /* @__PURE__ */ C.jsx("h3", { children: O }),
      /* @__PURE__ */ C.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: yr(b)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: b ? H() : F(L) });
};
go.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: p.string.isRequired,
  /**
   * Image alt text
   */
  alt: p.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: p.arrayOf(p.string),
  /**
   * Image loading mode
   */
  loading: p.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: p.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: p.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: p.string,
  /**
   * Height of the image
   */
  height: p.string,
  dataTestId: p.string,
  cardLink: p.string,
  title: p.string,
  caption: p.string,
  captionTitle: p.string,
  border: p.bool,
  dropShadow: p.bool
};
var vo = Oi();
function ss(t) {
  function e(W, j, U, q, E) {
    for (var Z = 0, M = 0, ue = 0, ne = 0, re, J, ce = 0, me = 0, ie, ge = ie = re = 0, fe = 0, Te = 0, Be = 0, _e = 0, et = U.length, $e = et - 1, ve, K = "", ye = "", tt = "", Ke = "", Me; fe < et; ) {
      if (J = U.charCodeAt(fe), fe === $e && M + ne + ue + Z !== 0 && (M !== 0 && (J = M === 47 ? 10 : 47), ne = ue = Z = 0, et++, $e++), M + ne + ue + Z === 0) {
        if (fe === $e && (0 < Te && (K = K.replace(O, "")), 0 < K.trim().length)) {
          switch (J) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += U.charAt(fe);
          }
          J = 59;
        }
        switch (J) {
          case 123:
            for (K = K.trim(), re = K.charCodeAt(0), ie = 1, _e = ++fe; fe < et; ) {
              switch (J = U.charCodeAt(fe)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch (J = U.charCodeAt(fe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = fe + 1; ge < $e; ++ge)
                          switch (U.charCodeAt(ge)) {
                            case 47:
                              if (J === 42 && U.charCodeAt(ge - 1) === 42 && fe + 2 !== ge) {
                                fe = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (J === 47) {
                                fe = ge + 1;
                                break e;
                              }
                          }
                        fe = ge;
                      }
                  }
                  break;
                case 91:
                  J++;
                case 40:
                  J++;
                case 34:
                case 39:
                  for (; fe++ < $e && U.charCodeAt(fe) !== J; )
                    ;
              }
              if (ie === 0) break;
              fe++;
            }
            switch (ie = U.substring(_e, fe), re === 0 && (re = (K = K.replace(b, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < Te && (K = K.replace(O, "")), J = K.charCodeAt(1), J) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Te = j;
                    break;
                  default:
                    Te = it;
                }
                if (ie = e(j, Te, ie, J, E + 1), _e = ie.length, 0 < Fe && (Te = o(it, K, Be), Me = v(3, ie, Te, j, Ee, ke, _e, J, E, q), K = Te.join(""), Me !== void 0 && (_e = (ie = Me.trim()).length) === 0 && (J = 0, ie = "")), 0 < _e) switch (J) {
                  case 115:
                    K = K.replace(de, d);
                  case 100:
                  case 109:
                  case 45:
                    ie = K + "{" + ie + "}";
                    break;
                  case 107:
                    K = K.replace(H, "$1 $2"), ie = K + "{" + ie + "}", ie = Ie === 1 || Ie === 2 && u("@" + ie, 3) ? "@-webkit-" + ie + "@" + ie : "@" + ie;
                    break;
                  default:
                    ie = K + ie, q === 112 && (ie = (ye += ie, ""));
                }
                else ie = "";
                break;
              default:
                ie = e(j, o(j, K, Be), ie, q, E + 1);
            }
            tt += ie, ie = Be = Te = ge = re = 0, K = "", J = U.charCodeAt(++fe);
            break;
          case 125:
          case 59:
            if (K = (0 < Te ? K.replace(O, "") : K).trim(), 1 < (_e = K.length)) switch (ge === 0 && (re = K.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (_e = (K = K.replace(" ", ":")).length), 0 < Fe && (Me = v(1, K, j, W, Ee, ke, ye.length, q, E, q)) !== void 0 && (_e = (K = Me.trim()).length) === 0 && (K = "\0\0"), re = K.charCodeAt(0), J = K.charCodeAt(1), re) {
              case 0:
                break;
              case 64:
                if (J === 105 || J === 99) {
                  Ke += K + U.charAt(fe);
                  break;
                }
              default:
                K.charCodeAt(_e - 1) !== 58 && (ye += l(K, re, J, K.charCodeAt(2)));
            }
            Be = Te = ge = re = 0, K = "", J = U.charCodeAt(++fe);
        }
      }
      switch (J) {
        case 13:
        case 10:
          M === 47 ? M = 0 : 1 + re === 0 && q !== 107 && 0 < K.length && (Te = 1, K += "\0"), 0 < Fe * Qe && v(0, K, j, W, Ee, ke, ye.length, q, E, q), ke = 1, Ee++;
          break;
        case 59:
        case 125:
          if (M + ne + ue + Z === 0) {
            ke++;
            break;
          }
        default:
          switch (ke++, ve = U.charAt(fe), J) {
            case 9:
            case 32:
              if (ne + Z + M === 0) switch (ce) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ve = "";
                  break;
                default:
                  J !== 32 && (ve = " ");
              }
              break;
            case 0:
              ve = "\\0";
              break;
            case 12:
              ve = "\\f";
              break;
            case 11:
              ve = "\\v";
              break;
            case 38:
              ne + M + Z === 0 && (Te = Be = 1, ve = "\f" + ve);
              break;
            case 108:
              if (ne + M + Z + ze === 0 && 0 < ge) switch (fe - ge) {
                case 2:
                  ce === 112 && U.charCodeAt(fe - 3) === 58 && (ze = ce);
                case 8:
                  me === 111 && (ze = me);
              }
              break;
            case 58:
              ne + M + Z === 0 && (ge = fe);
              break;
            case 44:
              M + ue + ne + Z === 0 && (Te = 1, ve += "\r");
              break;
            case 34:
            case 39:
              M === 0 && (ne = ne === J ? 0 : ne === 0 ? J : ne);
              break;
            case 91:
              ne + M + ue === 0 && Z++;
              break;
            case 93:
              ne + M + ue === 0 && Z--;
              break;
            case 41:
              ne + M + Z === 0 && ue--;
              break;
            case 40:
              if (ne + M + Z === 0) {
                if (re === 0) switch (2 * ce + 3 * me) {
                  case 533:
                    break;
                  default:
                    re = 1;
                }
                ue++;
              }
              break;
            case 64:
              M + ue + ne + Z + ge + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + Z + ue)) switch (M) {
                case 0:
                  switch (2 * J + 3 * U.charCodeAt(fe + 1)) {
                    case 235:
                      M = 47;
                      break;
                    case 220:
                      _e = fe, M = 42;
                  }
                  break;
                case 42:
                  J === 47 && ce === 42 && _e + 2 !== fe && (U.charCodeAt(_e + 2) === 33 && (ye += U.substring(_e, fe + 1)), ve = "", M = 0);
              }
          }
          M === 0 && (K += ve);
      }
      me = ce, ce = J, fe++;
    }
    if (_e = ye.length, 0 < _e) {
      if (Te = j, 0 < Fe && (Me = v(2, ye, Te, W, Ee, ke, _e, q, E, q), Me !== void 0 && (ye = Me).length === 0)) return Ke + ye + tt;
      if (ye = Te.join(",") + "{" + ye + "}", Ie * ze !== 0) {
        switch (Ie !== 2 || u(ye, 2) || (ze = 0), ze) {
          case 111:
            ye = ye.replace(G, ":-moz-$1") + ye;
            break;
          case 112:
            ye = ye.replace(X, "::-webkit-input-$1") + ye.replace(X, "::-moz-$1") + ye.replace(X, ":-ms-input-$1") + ye;
        }
        ze = 0;
      }
    }
    return Ke + ye + tt;
  }
  function o(W, j, U) {
    var q = j.trim().split(L);
    j = q;
    var E = q.length, Z = W.length;
    switch (Z) {
      case 0:
      case 1:
        var M = 0;
        for (W = Z === 0 ? "" : W[0] + " "; M < E; ++M)
          j[M] = i(W, j[M], U).trim();
        break;
      default:
        var ue = M = 0;
        for (j = []; M < E; ++M)
          for (var ne = 0; ne < Z; ++ne)
            j[ue++] = i(W[ne] + " ", q[M], U).trim();
    }
    return j;
  }
  function i(W, j, U) {
    var q = j.charCodeAt(0);
    switch (33 > q && (q = (j = j.trim()).charCodeAt(0)), q) {
      case 38:
        return j.replace(F, "$1" + W.trim());
      case 58:
        return W.trim() + j.replace(F, "$1" + W.trim());
      default:
        if (0 < 1 * U && 0 < j.indexOf("\f")) return j.replace(F, (W.charCodeAt(0) === 58 ? "" : "$1") + W.trim());
    }
    return W + j;
  }
  function l(W, j, U, q) {
    var E = W + ";", Z = 2 * j + 3 * U + 4 * q;
    if (Z === 944) {
      W = E.indexOf(":", 9) + 1;
      var M = E.substring(W, E.length - 1).trim();
      return M = E.substring(0, W).trim() + M + ";", Ie === 1 || Ie === 2 && u(M, 1) ? "-webkit-" + M + M : M;
    }
    if (Ie === 0 || Ie === 2 && !u(E, 1)) return E;
    switch (Z) {
      case 1015:
        return E.charCodeAt(10) === 97 ? "-webkit-" + E + E : E;
      case 951:
        return E.charCodeAt(3) === 116 ? "-webkit-" + E + E : E;
      case 963:
        return E.charCodeAt(5) === 110 ? "-webkit-" + E + E : E;
      case 1009:
        if (E.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + E + E;
      case 978:
        return "-webkit-" + E + "-moz-" + E + E;
      case 1019:
      case 983:
        return "-webkit-" + E + "-moz-" + E + "-ms-" + E + E;
      case 883:
        if (E.charCodeAt(8) === 45) return "-webkit-" + E + E;
        if (0 < E.indexOf("image-set(", 11)) return E.replace(ot, "$1-webkit-$2") + E;
        break;
      case 932:
        if (E.charCodeAt(4) === 45) switch (E.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + E.replace("-grow", "") + "-webkit-" + E + "-ms-" + E.replace("grow", "positive") + E;
          case 115:
            return "-webkit-" + E + "-ms-" + E.replace("shrink", "negative") + E;
          case 98:
            return "-webkit-" + E + "-ms-" + E.replace("basis", "preferred-size") + E;
        }
        return "-webkit-" + E + "-ms-" + E + E;
      case 964:
        return "-webkit-" + E + "-ms-flex-" + E + E;
      case 1023:
        if (E.charCodeAt(8) !== 99) break;
        return M = E.substring(E.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + M + "-webkit-" + E + "-ms-flex-pack" + M + E;
      case 1005:
        return P.test(E) ? E.replace(V, ":-webkit-") + E.replace(V, ":-moz-") + E : E;
      case 1e3:
        switch (M = E.substring(13).trim(), j = M.indexOf("-") + 1, M.charCodeAt(0) + M.charCodeAt(j)) {
          case 226:
            M = E.replace(N, "tb");
            break;
          case 232:
            M = E.replace(N, "tb-rl");
            break;
          case 220:
            M = E.replace(N, "lr");
            break;
          default:
            return E;
        }
        return "-webkit-" + E + "-ms-" + M + E;
      case 1017:
        if (E.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (j = (E = W).length - 10, M = (E.charCodeAt(j) === 33 ? E.substring(0, j) : E).substring(W.indexOf(":", 7) + 1).trim(), Z = M.charCodeAt(0) + (M.charCodeAt(7) | 0)) {
          case 203:
            if (111 > M.charCodeAt(8)) break;
          case 115:
            E = E.replace(M, "-webkit-" + M) + ";" + E;
            break;
          case 207:
          case 102:
            E = E.replace(M, "-webkit-" + (102 < Z ? "inline-" : "") + "box") + ";" + E.replace(M, "-webkit-" + M) + ";" + E.replace(M, "-ms-" + M + "box") + ";" + E;
        }
        return E + ";";
      case 938:
        if (E.charCodeAt(5) === 45) switch (E.charCodeAt(6)) {
          case 105:
            return M = E.replace("-items", ""), "-webkit-" + E + "-webkit-box-" + M + "-ms-flex-" + M + E;
          case 115:
            return "-webkit-" + E + "-ms-flex-item-" + E.replace(He, "") + E;
          default:
            return "-webkit-" + E + "-ms-flex-line-pack" + E.replace("align-content", "").replace(He, "") + E;
        }
        break;
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ye.test(W) === !0) return (M = W.substring(W.indexOf(":") + 1)).charCodeAt(0) === 115 ? l(W.replace("stretch", "fill-available"), j, U, q).replace(":fill-available", ":stretch") : E.replace(M, "-webkit-" + M) + E.replace(M, "-moz-" + M.replace("fill-", "")) + E;
        break;
      case 962:
        if (E = "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E, U + q === 211 && E.charCodeAt(13) === 105 && 0 < E.indexOf("transform", 10)) return E.substring(0, E.indexOf(";", 27) + 1).replace(B, "$1-webkit-$2") + E;
    }
    return E;
  }
  function u(W, j) {
    var U = W.indexOf(j === 1 ? ":" : "{"), q = W.substring(0, j !== 3 ? U : 10);
    return U = W.substring(U + 1, W.length - 1), je(j !== 2 ? q : q.replace(Ve, "$1"), U, j);
  }
  function d(W, j) {
    var U = l(j, j.charCodeAt(0), j.charCodeAt(1), j.charCodeAt(2));
    return U !== j + ";" ? U.replace(he, " or ($1)").substring(4) : "(" + j + ")";
  }
  function v(W, j, U, q, E, Z, M, ue, ne, re) {
    for (var J = 0, ce = j, me; J < Fe; ++J)
      switch (me = Ue[J].call(S, W, ce, U, q, E, Z, M, ue, ne, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = me;
      }
    if (ce !== j) return ce;
  }
  function h(W) {
    switch (W) {
      case void 0:
      case null:
        Fe = Ue.length = 0;
        break;
      default:
        if (typeof W == "function") Ue[Fe++] = W;
        else if (typeof W == "object") for (var j = 0, U = W.length; j < U; ++j)
          h(W[j]);
        else Qe = !!W | 0;
    }
    return h;
  }
  function y(W) {
    return W = W.prefix, W !== void 0 && (je = null, W ? typeof W != "function" ? Ie = 1 : (Ie = 2, je = W) : Ie = 0), y;
  }
  function S(W, j) {
    var U = W;
    if (33 > U.charCodeAt(0) && (U = U.trim()), Ze = U, U = [Ze], 0 < Fe) {
      var q = v(-1, j, U, U, Ee, ke, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (j = q);
    }
    var E = e(it, U, j, 0, 0);
    return 0 < Fe && (q = v(-2, E, U, U, Ee, ke, E.length, 0, 0, 0), q !== void 0 && (E = q)), Ze = "", ze = 0, ke = Ee = 1, E;
  }
  var b = /^\0+/g, O = /[\0\r\f]/g, V = /: */g, P = /zoo|gra/, B = /([,: ])(transform)/g, L = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, H = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, G = /:(read-only)/g, N = /[svh]\w+-[tblr]{2}/, de = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, He = /-self|flex-/g, Ve = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ye = /stretch|:\s*\w+\-(?:conte|avail)/, ot = /([^-])(image-set\()/, ke = 1, Ee = 1, ze = 0, Ie = 1, it = [], Ue = [], Fe = 0, je = null, Qe = 0, Ze = "";
  return S.use = h, S.set = y, t !== void 0 && y(t), S;
}
var ls = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function us(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return e[o] === void 0 && (e[o] = t(o)), e[o];
  };
}
var cs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, si = /* @__PURE__ */ us(
  function(t) {
    return cs.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), yo = Oi(), fs = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, ds = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ps = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Di = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, wo = {};
wo[yo.ForwardRef] = ps;
wo[yo.Memo] = Di;
function li(t) {
  return yo.isMemo(t) ? Di : wo[t.$$typeof] || fs;
}
var hs = Object.defineProperty, ms = Object.getOwnPropertyNames, ui = Object.getOwnPropertySymbols, gs = Object.getOwnPropertyDescriptor, vs = Object.getPrototypeOf, ci = Object.prototype;
function Fi(t, e, o) {
  if (typeof e != "string") {
    if (ci) {
      var i = vs(e);
      i && i !== ci && Fi(t, i, o);
    }
    var l = ms(e);
    ui && (l = l.concat(ui(e)));
    for (var u = li(t), d = li(e), v = 0; v < l.length; ++v) {
      var h = l[v];
      if (!ds[h] && !(o && o[h]) && !(d && d[h]) && !(u && u[h])) {
        var y = gs(e, h);
        try {
          hs(t, h, y);
        } catch {
        }
      }
    }
  }
  return t;
}
var ys = Fi;
const ws = /* @__PURE__ */ po(ys);
var xe = { env: { NODE_ENV: "production" } };
function Bt() {
  return (Bt = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = arguments[e];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }).apply(this, arguments);
}
var fi = function(t, e) {
  for (var o = [t[0]], i = 0, l = e.length; i < l; i += 1) o.push(e[i], t[i + 1]);
  return o;
}, Jn = function(t) {
  return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !vo.typeOf(t);
}, wn = Object.freeze([]), Kt = Object.freeze({});
function zr(t) {
  return typeof t == "function";
}
function Qn(t) {
  return xe.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function So(t) {
  return t && typeof t.styledComponentId == "string";
}
var Sr = typeof xe < "u" && xe.env !== void 0 && (xe.env.REACT_APP_SC_ATTR || xe.env.SC_ATTR) || "data-styled", bo = typeof window < "u" && "HTMLElement" in window, Ss = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xe < "u" && xe.env !== void 0 && (xe.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xe.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xe.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xe.env.REACT_APP_SC_DISABLE_SPEEDY : xe.env.SC_DISABLE_SPEEDY !== void 0 && xe.env.SC_DISABLE_SPEEDY !== "" ? xe.env.SC_DISABLE_SPEEDY !== "false" && xe.env.SC_DISABLE_SPEEDY : xe.env.NODE_ENV !== "production")), bs = xe.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function xs() {
  for (var t = arguments.length <= 0 ? void 0 : arguments[0], e = [], o = 1, i = arguments.length; o < i; o += 1) e.push(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
  return e.forEach(function(l) {
    t = t.replace(/%[a-z]/, l);
  }), t;
}
function Tr(t) {
  for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) o[i - 1] = arguments[i];
  throw xe.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (o.length > 0 ? " Args: " + o.join(", ") : "")) : new Error(xs.apply(void 0, [bs[t]].concat(o)).trim());
}
var ks = function() {
  function t(o) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = o;
  }
  var e = t.prototype;
  return e.indexOfGroup = function(o) {
    for (var i = 0, l = 0; l < o; l++) i += this.groupSizes[l];
    return i;
  }, e.insertRules = function(o, i) {
    if (o >= this.groupSizes.length) {
      for (var l = this.groupSizes, u = l.length, d = u; o >= d; ) (d <<= 1) < 0 && Tr(16, "" + o);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(l), this.length = d;
      for (var v = u; v < d; v++) this.groupSizes[v] = 0;
    }
    for (var h = this.indexOfGroup(o + 1), y = 0, S = i.length; y < S; y++) this.tag.insertRule(h, i[y]) && (this.groupSizes[o]++, h++);
  }, e.clearGroup = function(o) {
    if (o < this.length) {
      var i = this.groupSizes[o], l = this.indexOfGroup(o), u = l + i;
      this.groupSizes[o] = 0;
      for (var d = l; d < u; d++) this.tag.deleteRule(l);
    }
  }, e.getGroup = function(o) {
    var i = "";
    if (o >= this.length || this.groupSizes[o] === 0) return i;
    for (var l = this.groupSizes[o], u = this.indexOfGroup(o), d = u + l, v = u; v < d; v++) i += this.tag.getRule(v) + `/*!sc*/
`;
    return i;
  }, t;
}(), mn = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Map(), jr = 1, sn = function(t) {
  if (mn.has(t)) return mn.get(t);
  for (; Sn.has(jr); ) jr++;
  var e = jr++;
  return xe.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > 1 << 30) && Tr(16, "" + e), mn.set(t, e), Sn.set(e, t), e;
}, _s = function(t) {
  return Sn.get(t);
}, Ts = function(t, e) {
  e >= jr && (jr = e + 1), mn.set(t, e), Sn.set(e, t);
}, Es = "style[" + Sr + '][data-styled-version="5.3.11"]', Cs = new RegExp("^" + Sr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), As = function(t, e, o) {
  for (var i, l = o.split(","), u = 0, d = l.length; u < d; u++) (i = l[u]) && t.registerName(e, i);
}, Rs = function(t, e) {
  for (var o = (e.textContent || "").split(`/*!sc*/
`), i = [], l = 0, u = o.length; l < u; l++) {
    var d = o[l].trim();
    if (d) {
      var v = d.match(Cs);
      if (v) {
        var h = 0 | parseInt(v[1], 10), y = v[2];
        h !== 0 && (Ts(y, h), As(t, y, v[3]), t.getTag().insertRules(h, i)), i.length = 0;
      } else i.push(d);
    }
  }
}, Os = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ji = function(t) {
  var e = document.head, o = t || e, i = document.createElement("style"), l = function(v) {
    for (var h = v.childNodes, y = h.length; y >= 0; y--) {
      var S = h[y];
      if (S && S.nodeType === 1 && S.hasAttribute(Sr)) return S;
    }
  }(o), u = l !== void 0 ? l.nextSibling : null;
  i.setAttribute(Sr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var d = Os();
  return d && i.setAttribute("nonce", d), o.insertBefore(i, u), i;
}, Ps = function() {
  function t(o) {
    var i = this.element = ji(o);
    i.appendChild(document.createTextNode("")), this.sheet = function(l) {
      if (l.sheet) return l.sheet;
      for (var u = document.styleSheets, d = 0, v = u.length; d < v; d++) {
        var h = u[d];
        if (h.ownerNode === l) return h;
      }
      Tr(17);
    }(i), this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(o, i) {
    try {
      return this.sheet.insertRule(i, o), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.deleteRule = function(o) {
    this.sheet.deleteRule(o), this.length--;
  }, e.getRule = function(o) {
    var i = this.sheet.cssRules[o];
    return i !== void 0 && typeof i.cssText == "string" ? i.cssText : "";
  }, t;
}(), Ns = function() {
  function t(o) {
    var i = this.element = ji(o);
    this.nodes = i.childNodes, this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(o, i) {
    if (o <= this.length && o >= 0) {
      var l = document.createTextNode(i), u = this.nodes[o];
      return this.element.insertBefore(l, u || null), this.length++, !0;
    }
    return !1;
  }, e.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, e.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, t;
}(), Is = function() {
  function t(o) {
    this.rules = [], this.length = 0;
  }
  var e = t.prototype;
  return e.insertRule = function(o, i) {
    return o <= this.length && (this.rules.splice(o, 0, i), this.length++, !0);
  }, e.deleteRule = function(o) {
    this.rules.splice(o, 1), this.length--;
  }, e.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, t;
}(), di = bo, Ls = { isServer: !bo, useCSSOMInjection: !Ss }, Bi = function() {
  function t(o, i, l) {
    o === void 0 && (o = Kt), i === void 0 && (i = {}), this.options = Bt({}, Ls, {}, o), this.gs = i, this.names = new Map(l), this.server = !!o.isServer, !this.server && bo && di && (di = !1, function(u) {
      for (var d = document.querySelectorAll(Es), v = 0, h = d.length; v < h; v++) {
        var y = d[v];
        y && y.getAttribute(Sr) !== "active" && (Rs(u, y), y.parentNode && y.parentNode.removeChild(y));
      }
    }(this));
  }
  t.registerId = function(o) {
    return sn(o);
  };
  var e = t.prototype;
  return e.reconstructWithOptions = function(o, i) {
    return i === void 0 && (i = !0), new t(Bt({}, this.options, {}, o), this.gs, i && this.names || void 0);
  }, e.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }, e.getTag = function() {
    return this.tag || (this.tag = (l = (i = this.options).isServer, u = i.useCSSOMInjection, d = i.target, o = l ? new Is(d) : u ? new Ps(d) : new Ns(d), new ks(o)));
    var o, i, l, u, d;
  }, e.hasNameForId = function(o, i) {
    return this.names.has(o) && this.names.get(o).has(i);
  }, e.registerName = function(o, i) {
    if (sn(o), this.names.has(o)) this.names.get(o).add(i);
    else {
      var l = /* @__PURE__ */ new Set();
      l.add(i), this.names.set(o, l);
    }
  }, e.insertRules = function(o, i, l) {
    this.registerName(o, i), this.getTag().insertRules(sn(o), l);
  }, e.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, e.clearRules = function(o) {
    this.getTag().clearGroup(sn(o)), this.clearNames(o);
  }, e.clearTag = function() {
    this.tag = void 0;
  }, e.toString = function() {
    return function(o) {
      for (var i = o.getTag(), l = i.length, u = "", d = 0; d < l; d++) {
        var v = _s(d);
        if (v !== void 0) {
          var h = o.names.get(v), y = i.getGroup(d);
          if (h && y && h.size) {
            var S = Sr + ".g" + d + '[id="' + v + '"]', b = "";
            h !== void 0 && h.forEach(function(O) {
              O.length > 0 && (b += O + ",");
            }), u += "" + y + S + '{content:"' + b + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, t;
}(), Ms = /(a)(d)/gi, pi = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function eo(t) {
  var e, o = "";
  for (e = Math.abs(t); e > 52; e = e / 52 | 0) o = pi(e % 52) + o;
  return (pi(e % 52) + o).replace(Ms, "$1-$2");
}
var pr = function(t, e) {
  for (var o = e.length; o; ) t = 33 * t ^ e.charCodeAt(--o);
  return t;
}, zi = function(t) {
  return pr(5381, t);
};
function Ds(t) {
  for (var e = 0; e < t.length; e += 1) {
    var o = t[e];
    if (zr(o) && !So(o)) return !1;
  }
  return !0;
}
var Fs = zi("5.3.11"), js = function() {
  function t(e, o, i) {
    this.rules = e, this.staticRulesId = "", this.isStatic = xe.env.NODE_ENV === "production" && (i === void 0 || i.isStatic) && Ds(e), this.componentId = o, this.baseHash = pr(Fs, o), this.baseStyle = i, Bi.registerId(o);
  }
  return t.prototype.generateAndInjectStyles = function(e, o, i) {
    var l = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(e, o, i)), this.isStatic && !i.hash) if (this.staticRulesId && o.hasNameForId(l, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var d = br(this.rules, e, o, i).join(""), v = eo(pr(this.baseHash, d) >>> 0);
      if (!o.hasNameForId(l, v)) {
        var h = i(d, "." + v, void 0, l);
        o.insertRules(l, v, h);
      }
      u.push(v), this.staticRulesId = v;
    }
    else {
      for (var y = this.rules.length, S = pr(this.baseHash, i.hash), b = "", O = 0; O < y; O++) {
        var V = this.rules[O];
        if (typeof V == "string") b += V, xe.env.NODE_ENV !== "production" && (S = pr(S, V + O));
        else if (V) {
          var P = br(V, e, o, i), B = Array.isArray(P) ? P.join("") : P;
          S = pr(S, B + O), b += B;
        }
      }
      if (b) {
        var L = eo(S >>> 0);
        if (!o.hasNameForId(l, L)) {
          var F = i(b, "." + L, void 0, l);
          o.insertRules(l, L, F);
        }
        u.push(L);
      }
    }
    return u.join(" ");
  }, t;
}(), Bs = /^\s*\/\/.*$/gm, zs = [":", "[", ".", "#"];
function $s(t) {
  var e, o, i, l, u = Kt, d = u.options, v = d === void 0 ? Kt : d, h = u.plugins, y = h === void 0 ? wn : h, S = new ss(v), b = [], O = /* @__PURE__ */ function(B) {
    function L(F) {
      if (F) try {
        B(F + "}");
      } catch {
      }
    }
    return function(F, H, X, G, N, de, he, He, Ve, Ye) {
      switch (F) {
        case 1:
          if (Ve === 0 && H.charCodeAt(0) === 64) return B(H + ";"), "";
          break;
        case 2:
          if (He === 0) return H + "/*|*/";
          break;
        case 3:
          switch (He) {
            case 102:
            case 112:
              return B(X[0] + H), "";
            default:
              return H + (Ye === 0 ? "/*|*/" : "");
          }
        case -2:
          H.split("/*|*/}").forEach(L);
      }
    };
  }(function(B) {
    b.push(B);
  }), V = function(B, L, F) {
    return L === 0 && zs.indexOf(F[o.length]) !== -1 || F.match(l) ? B : "." + e;
  };
  function P(B, L, F, H) {
    H === void 0 && (H = "&");
    var X = B.replace(Bs, ""), G = L && F ? F + " " + L + " { " + X + " }" : X;
    return e = H, o = L, i = new RegExp("\\" + o + "\\b", "g"), l = new RegExp("(\\" + o + "\\b){2,}"), S(F || !L ? "" : L, G);
  }
  return S.use([].concat(y, [function(B, L, F) {
    B === 2 && F.length && F[0].lastIndexOf(o) > 0 && (F[0] = F[0].replace(i, V));
  }, O, function(B) {
    if (B === -2) {
      var L = b;
      return b = [], L;
    }
  }])), P.hash = y.length ? y.reduce(function(B, L) {
    return L.name || Tr(15), pr(B, L.name);
  }, 5381).toString() : "", P;
}
var $i = Ct.createContext();
$i.Consumer;
var Hi = Ct.createContext(), Hs = (Hi.Consumer, new Bi()), to = $s();
function Vs() {
  return co($i) || Hs;
}
function Us() {
  return co(Hi) || to;
}
var Ws = function() {
  function t(e, o) {
    var i = this;
    this.inject = function(l, u) {
      u === void 0 && (u = to);
      var d = i.name + u.hash;
      l.hasNameForId(i.id, d) || l.insertRules(i.id, d, u(i.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Tr(12, String(i.name));
    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = o;
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = to), this.name + e.hash;
  }, t;
}(), qs = /([A-Z])/, Ys = /([A-Z])/g, Xs = /^ms-/, Gs = function(t) {
  return "-" + t.toLowerCase();
};
function hi(t) {
  return qs.test(t) ? t.replace(Ys, Gs).replace(Xs, "-ms-") : t;
}
var mi = function(t) {
  return t == null || t === !1 || t === "";
};
function br(t, e, o, i) {
  if (Array.isArray(t)) {
    for (var l, u = [], d = 0, v = t.length; d < v; d += 1) (l = br(t[d], e, o, i)) !== "" && (Array.isArray(l) ? u.push.apply(u, l) : u.push(l));
    return u;
  }
  if (mi(t)) return "";
  if (So(t)) return "." + t.styledComponentId;
  if (zr(t)) {
    if (typeof (y = t) != "function" || y.prototype && y.prototype.isReactComponent || !e) return t;
    var h = t(e);
    return xe.env.NODE_ENV !== "production" && vo.isElement(h) && console.warn(Qn(t) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), br(h, e, o, i);
  }
  var y;
  return t instanceof Ws ? o ? (t.inject(o, i), t.getName(i)) : t : Jn(t) ? function S(b, O) {
    var V, P, B = [];
    for (var L in b) b.hasOwnProperty(L) && !mi(b[L]) && (Array.isArray(b[L]) && b[L].isCss || zr(b[L]) ? B.push(hi(L) + ":", b[L], ";") : Jn(b[L]) ? B.push.apply(B, S(b[L], L)) : B.push(hi(L) + ": " + (V = L, (P = b[L]) == null || typeof P == "boolean" || P === "" ? "" : typeof P != "number" || P === 0 || V in ls || V.startsWith("--") ? String(P).trim() : P + "px") + ";"));
    return O ? [O + " {"].concat(B, ["}"]) : B;
  }(t) : t.toString();
}
var gi = function(t) {
  return Array.isArray(t) && (t.isCss = !0), t;
};
function Zs(t) {
  for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) o[i - 1] = arguments[i];
  return zr(t) || Jn(t) ? gi(br(fi(wn, [t].concat(o)))) : o.length === 0 && t.length === 1 && typeof t[0] == "string" ? t : gi(br(fi(t, o)));
}
var vi = /invalid hook call/i, ln = /* @__PURE__ */ new Set(), Ks = function(t, e) {
  if (xe.env.NODE_ENV !== "production") {
    var o = "The component " + t + (e ? ' with the id of "' + e + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var l = !0;
      console.error = function(u) {
        if (vi.test(u)) l = !1, ln.delete(o);
        else {
          for (var d = arguments.length, v = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++) v[h - 1] = arguments[h];
          i.apply(void 0, [u].concat(v));
        }
      }, ga(), l && !ln.has(o) && (console.warn(o), ln.add(o));
    } catch (u) {
      vi.test(u.message) && ln.delete(o);
    } finally {
      console.error = i;
    }
  }
}, Js = function(t, e, o) {
  return o === void 0 && (o = Kt), t.theme !== o.theme && t.theme || e || o.theme;
}, Qs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, el = /(^-|-$)/g;
function qn(t) {
  return t.replace(Qs, "-").replace(el, "");
}
var tl = function(t) {
  return eo(zi(t) >>> 0);
};
function un(t) {
  return typeof t == "string" && (xe.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var ro = function(t) {
  return typeof t == "function" || typeof t == "object" && t !== null && !Array.isArray(t);
}, rl = function(t) {
  return t !== "__proto__" && t !== "constructor" && t !== "prototype";
};
function nl(t, e, o) {
  var i = t[o];
  ro(e) && ro(i) ? Vi(i, e) : t[o] = e;
}
function Vi(t) {
  for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) o[i - 1] = arguments[i];
  for (var l = 0, u = o; l < u.length; l++) {
    var d = u[l];
    if (ro(d)) for (var v in d) rl(v) && nl(t, d[v], v);
  }
  return t;
}
var Ui = Ct.createContext();
Ui.Consumer;
var Yn = {};
function Wi(t, e, o) {
  var i = So(t), l = !un(t), u = e.attrs, d = u === void 0 ? wn : u, v = e.componentId, h = v === void 0 ? function(H, X) {
    var G = typeof H != "string" ? "sc" : qn(H);
    Yn[G] = (Yn[G] || 0) + 1;
    var N = G + "-" + tl("5.3.11" + G + Yn[G]);
    return X ? X + "-" + N : N;
  }(e.displayName, e.parentComponentId) : v, y = e.displayName, S = y === void 0 ? function(H) {
    return un(H) ? "styled." + H : "Styled(" + Qn(H) + ")";
  }(t) : y, b = e.displayName && e.componentId ? qn(e.displayName) + "-" + e.componentId : e.componentId || h, O = i && t.attrs ? Array.prototype.concat(t.attrs, d).filter(Boolean) : d, V = e.shouldForwardProp;
  i && t.shouldForwardProp && (V = e.shouldForwardProp ? function(H, X, G) {
    return t.shouldForwardProp(H, X, G) && e.shouldForwardProp(H, X, G);
  } : t.shouldForwardProp);
  var P, B = new js(o, b, i ? t.componentStyle : void 0), L = B.isStatic && d.length === 0, F = function(H, X) {
    return function(G, N, de, he) {
      var He = G.attrs, Ve = G.componentStyle, Ye = G.defaultProps, ot = G.foldedComponentIds, ke = G.shouldForwardProp, Ee = G.styledComponentId, ze = G.target, Ie = function(q, E, Z) {
        q === void 0 && (q = Kt);
        var M = Bt({}, E, { theme: q }), ue = {};
        return Z.forEach(function(ne) {
          var re, J, ce, me = ne;
          for (re in zr(me) && (me = me(M)), me) M[re] = ue[re] = re === "className" ? (J = ue[re], ce = me[re], J && ce ? J + " " + ce : J || ce) : me[re];
        }), [M, ue];
      }(Js(N, co(Ui), Ye) || Kt, N, He), it = Ie[0], Ue = Ie[1], Fe = function(q, E, Z, M) {
        var ue = Vs(), ne = Us(), re = E ? q.generateAndInjectStyles(Kt, ue, ne) : q.generateAndInjectStyles(Z, ue, ne);
        return xe.env.NODE_ENV !== "production" && !E && M && M(re), re;
      }(Ve, he, it, xe.env.NODE_ENV !== "production" ? G.warnTooManyClasses : void 0), je = de, Qe = Ue.$as || N.$as || Ue.as || N.as || ze, Ze = un(Qe), W = Ue !== N ? Bt({}, N, {}, Ue) : N, j = {};
      for (var U in W) U[0] !== "$" && U !== "as" && (U === "forwardedAs" ? j.as = W[U] : (ke ? ke(U, si, Qe) : !Ze || si(U)) && (j[U] = W[U]));
      return N.style && Ue.style !== N.style && (j.style = Bt({}, N.style, {}, Ue.style)), j.className = Array.prototype.concat(ot, Ee, Fe !== Ee ? Fe : null, N.className, Ue.className).filter(Boolean).join(" "), j.ref = je, va(Qe, j);
    }(P, H, X, L);
  };
  return F.displayName = S, (P = Ct.forwardRef(F)).attrs = O, P.componentStyle = B, P.displayName = S, P.shouldForwardProp = V, P.foldedComponentIds = i ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : wn, P.styledComponentId = b, P.target = i ? t.target : t, P.withComponent = function(H) {
    var X = e.componentId, G = function(de, he) {
      if (de == null) return {};
      var He, Ve, Ye = {}, ot = Object.keys(de);
      for (Ve = 0; Ve < ot.length; Ve++) He = ot[Ve], he.indexOf(He) >= 0 || (Ye[He] = de[He]);
      return Ye;
    }(e, ["componentId"]), N = X && X + "-" + (un(H) ? H : qn(Qn(H)));
    return Wi(H, Bt({}, G, { attrs: O, componentId: N }), o);
  }, Object.defineProperty(P, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(H) {
    this._foldedDefaultProps = i ? Vi({}, t.defaultProps, H) : H;
  } }), xe.env.NODE_ENV !== "production" && (Ks(S, b), P.warnTooManyClasses = /* @__PURE__ */ function(H, X) {
    var G = {}, N = !1;
    return function(de) {
      if (!N && (G[de] = !0, Object.keys(G).length >= 200)) {
        var he = X ? ' with the id of "' + X + '"' : "";
        console.warn("Over 200 classes were generated for component " + H + he + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), N = !0, G = {};
      }
    };
  }(S, b)), Object.defineProperty(P, "toString", { value: function() {
    return "." + P.styledComponentId;
  } }), l && ws(P, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), P;
}
var no = function(t) {
  return function e(o, i, l) {
    if (l === void 0 && (l = Kt), !vo.isValidElementType(i)) return Tr(1, String(i));
    var u = function() {
      return o(i, l, Zs.apply(void 0, arguments));
    };
    return u.withConfig = function(d) {
      return e(o, i, Bt({}, l, {}, d));
    }, u.attrs = function(d) {
      return e(o, i, Bt({}, l, { attrs: Array.prototype.concat(l.attrs, d).filter(Boolean) }));
    }, u;
  }(Wi, t);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(t) {
  no[t] = no(t);
});
xe.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), xe.env.NODE_ENV !== "production" && xe.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const ol = no.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, il = (t) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t), al = (t) => !t.startsWith("https://") && !t.startsWith("http://") && il(t) ? `mailto:${t}` : t, sl = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Zt = ({
  type: t,
  width: e,
  horizontal: o,
  image: i,
  imageAltText: l,
  title: u,
  icon: d,
  body: v,
  eventFormat: h,
  eventLocation: y,
  eventTime: S,
  buttons: b,
  linkLabel: O,
  linkUrl: V,
  tags: P,
  showBorders: B,
  cardLink: L
}) => /* @__PURE__ */ C.jsx(
  xo,
  {
    type: t,
    width: e,
    horizontal: o,
    image: i,
    imageAltText: l,
    title: u,
    icon: d,
    body: v,
    eventFormat: h,
    eventLocation: y,
    eventTime: S,
    buttons: b,
    linkLabel: O,
    linkUrl: V,
    tags: P,
    showBorders: B,
    cardLink: L
  }
);
Zt.propTypes = {
  /**
   * Type of card
   */
  type: p.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: p.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: p.bool,
  /**
   * Card title
   */
  title: p.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: p.arrayOf(p.string),
  /**
   * Card body content
   */
  body: p.string,
  /**
   * Event info format
   */
  eventFormat: p.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: p.string,
  /**
   * Event start time
   */
  eventTime: p.string,
  /**
   * Card header image
   */
  image: p.string,
  /**
   * Card header image alt text
   */
  imageAltText: p.string,
  /**
   * Buttons
   */
  buttons: p.arrayOf(
    p.shape({
      ariaLabel: p.string,
      color: p.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: p.arrayOf(p.string),
      href: p.string,
      label: p.string,
      onClick: p.func,
      size: p.oneOf(["default", "small", "xsmall"]),
      target: p.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: p.string,
  linkUrl: p.string,
  /**
   * Tags
   */
  tags: p.arrayOf(
    p.shape({
      ariaLabel: p.string,
      color: p.oneOf(["white", "gray", "dark"]),
      href: p.string,
      label: p.string,
      onClick: p.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: p.bool,
  /**
   * Card link
   */
  cardLink: p.string
};
Zt.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: void 0,
  eventFormat: "stack",
  eventTime: void 0,
  eventLocation: void 0,
  icon: void 0,
  image: void 0,
  imageAltText: void 0,
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const xo = ({
  type: t,
  width: e,
  horizontal: o,
  image: i,
  imageAltText: l,
  title: u,
  icon: d,
  body: v,
  eventFormat: h,
  eventLocation: y,
  eventTime: S,
  buttons: b,
  linkLabel: O,
  linkUrl: V,
  tags: P,
  showBorders: B,
  cardLink: L
}) => {
  const F = Br("card", "cards-components", {
    "card-degree": t === "degree",
    "card-event": t === "event",
    "card-story": t === "story",
    [`w-${e.replace("%", "")}`]: e !== "100%",
    "card-horizontal": o,
    borderless: !B
  });
  return /* @__PURE__ */ C.jsx(C.Fragment, { children: /* @__PURE__ */ C.jsxs(ol, { className: F, "data-testid": "card-container", children: [
    !!i && /* @__PURE__ */ C.jsx(
      go,
      {
        src: i,
        alt: l,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: L,
        title: u
      }
    ),
    !i && d && /* @__PURE__ */ C.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    o ? /* @__PURE__ */ C.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ C.jsx(
      bn,
      {
        type: t,
        body: v,
        eventFormat: h,
        eventLocation: y,
        eventTime: S,
        title: u,
        buttons: b,
        linkLabel: O,
        linkUrl: V,
        tags: P,
        cardLink: L
      }
    ) }) : /* @__PURE__ */ C.jsx(
      bn,
      {
        type: t,
        body: v,
        eventFormat: h,
        eventLocation: y,
        eventTime: S,
        title: u,
        buttons: b,
        linkLabel: O,
        linkUrl: V,
        tags: P,
        cardLink: L
      }
    )
  ] }) });
};
xo.propTypes = {
  type: p.oneOf(["default", "degree", "event", "news", "story"]),
  width: p.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: p.bool,
  title: p.string.isRequired,
  icon: p.arrayOf(p.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: p.string,
  eventFormat: p.oneOf(["stack", "inline"]),
  eventLocation: p.string,
  eventTime: p.string,
  image: p.string,
  imageAltText: p.string,
  buttons: p.arrayOf(
    p.shape({
      ariaLabel: p.string,
      color: p.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: p.arrayOf(p.string),
      href: p.string,
      label: p.string,
      onClick: p.func,
      size: p.oneOf(["default", "small", "xsmall"]),
      target: p.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: p.string,
  linkUrl: p.string,
  tags: p.arrayOf(
    p.shape({
      ariaLabel: p.string,
      color: p.oneOf(["white", "gray", "dark"]),
      href: p.string,
      label: p.string,
      onClick: p.func
    })
  ),
  showBorders: p.bool,
  cardLink: p.string
};
xo.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: void 0,
  image: "",
  imageAltText: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const bn = ({
  type: t,
  body: e,
  eventFormat: o,
  eventLocation: i,
  eventTime: l,
  title: u,
  buttons: d,
  linkLabel: v,
  linkUrl: h,
  tags: y,
  cardLink: S
}) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
  !!u && /* @__PURE__ */ C.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ C.jsx("h3", { className: "card-title", children: S ? /* @__PURE__ */ C.jsx("a", { href: S, children: u }) : u }) }),
  !!e && /* @__PURE__ */ C.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ C.jsx("div", { dangerouslySetInnerHTML: yr(e) }) }),
  t === "event" && (l || i) && /* @__PURE__ */ C.jsx(
    ko,
    {
      eventFormat: o,
      eventTime: l,
      eventLocation: i
    }
  ),
  d && /* @__PURE__ */ C.jsx("div", { className: "card-buttons", children: d.map((b) => /* @__PURE__ */ C.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ C.jsx(
        ho,
        {
          ariaLabel: b.ariaLabel,
          color: b.color,
          icon: b.icon,
          href: b.href,
          label: b.label,
          onClick: b.onClick,
          size: b.size,
          target: b.target,
          cardTitle: u
        }
      )
    },
    `${b.label}-${b.href}`
  )) }),
  h && v && /* @__PURE__ */ C.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ C.jsx(
    wr,
    {
      gaData: {
        ...sl,
        section: u,
        text: v
      },
      children: /* @__PURE__ */ C.jsx("a", { href: al(h), children: v })
    }
  ) }),
  y && /* @__PURE__ */ C.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: y.map((b) => (
    // @ts-ignore
    /* @__PURE__ */ C.jsx(
      mo,
      {
        ariaLabel: b.ariaLabel,
        color: b.color,
        href: b.href,
        label: b.label,
        onClick: b.onClick,
        cardTitle: u
      },
      `${b.label}-${b.href}`
    )
  )) })
] });
bn.propTypes = {
  type: p.oneOf(["default", "degree", "event", "news", "story"]),
  body: p.string,
  eventFormat: p.oneOf(["stack", "inline"]),
  eventLocation: p.string,
  eventTime: p.string,
  title: p.string.isRequired,
  buttons: p.arrayOf(
    p.shape({
      ariaLabel: p.string,
      color: p.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: p.arrayOf(p.string),
      href: p.string,
      label: p.string,
      onClick: p.func,
      size: p.oneOf(["default", "small", "xsmall"]),
      target: p.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: p.string,
  linkUrl: p.string,
  tags: p.arrayOf(
    p.shape({
      ariaLabel: p.string,
      color: p.oneOf(["white", "gray", "dark"]),
      href: p.string,
      label: p.string,
      onClick: p.func
    })
  ),
  cardLink: p.string
};
bn.defaultProps = {
  type: "default",
  body: "",
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0
};
const ko = ({ eventFormat: t, eventTime: e, eventLocation: o }) => t === "inline" ? /* @__PURE__ */ C.jsxs("div", { className: "card-event-details", children: [
  e && /* @__PURE__ */ C.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ C.jsx("div", { dangerouslySetInnerHTML: yr(e) })
  ] }),
  o && /* @__PURE__ */ C.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ C.jsx(
      "div",
      {
        dangerouslySetInnerHTML: yr(o)
      }
    )
  ] })
] }) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
  e && /* @__PURE__ */ C.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ C.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ C.jsx("div", { dangerouslySetInnerHTML: yr(e) })
  ] }) }),
  o && /* @__PURE__ */ C.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ C.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ C.jsx("div", { children: /* @__PURE__ */ C.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ C.jsx("span", { children: /* @__PURE__ */ C.jsx(
      "div",
      {
        dangerouslySetInnerHTML: yr(o)
      }
    ) })
  ] }) })
] });
ko.propTypes = {
  eventFormat: p.oneOf(["stack", "inline"]),
  eventLocation: p.string,
  eventTime: p.string
};
ko.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const ll = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, _o = ({ children: t }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ C.jsx(
    "div",
    {
      role: "group",
      className: "glide__bullets",
      "data-glide-el": "controls[nav]",
      "data-testid": "bullets-container",
      onClick: (e) => e.stopPropagation(),
      onKeyDown: (e) => e.stopPropagation(),
      children: t
    }
  )
);
_o.propTypes = {
  children: p.oneOfType([
    p.element,
    p.arrayOf(p.element)
  ]).isRequired
};
const qi = ({ buttonCount: t }) => {
  const e = [];
  for (let o = 0; o < t; o += 1)
    e.push(
      /* @__PURE__ */ C.jsx(wr, { gaData: ll, children: /* @__PURE__ */ C.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${o}`,
          "aria-label": `Slide view ${o + 1}`
        }
      ) }, `bullet-${o}`)
    );
  return /* @__PURE__ */ C.jsx(_o, { children: e });
};
qi.propTypes = {
  buttonCount: p.number.isRequired
};
const Yi = ({ imageItems: t, onItemClick: e = () => null }) => {
  const o = (l, u) => {
    const { ariaSelected: d } = l.currentTarget.dataset;
    l.currentTarget.dataset.ariaSelected = String(!d), l.stopPropagation(), e(u);
  }, i = t.map((l, u) => /* @__PURE__ */ C.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${u}`,
      "aria-label": `Slide view ${u + 1}`,
      "aria-selected": "false",
      onClick: (d) => o(d, u),
      onKeyDown: (d) => o(d, u),
      children: /* @__PURE__ */ C.jsx(
        "img",
        {
          src: l,
          alt: `Slide ${u + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${u}`
  ));
  return /* @__PURE__ */ C.jsx(_o, { children: i });
};
Yi.propTypes = {
  imageItems: p.arrayOf(p.string).isRequired,
  onItemClick: p.func
};
const To = ({ onClick: t = () => null }) => /* @__PURE__ */ C.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: t,
    children: /* @__PURE__ */ C.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
To.propTypes = {
  onClick: p.func
};
const Eo = ({ onClick: t = () => null }) => /* @__PURE__ */ C.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: t,
    children: /* @__PURE__ */ C.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
Eo.propTypes = {
  onClick: p.func
};
const yi = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, Co = ({ children: t = null }) => /* @__PURE__ */ C.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: t
  }
);
Co.propTypes = {
  children: p.arrayOf(p.element)
};
const Xi = ({ onClick: t = () => null, children: e = null }) => /* @__PURE__ */ C.jsxs(Co, { children: [
  /* @__PURE__ */ C.jsx(wr, { gaData: { ...yi, text: "left chevron" }, children: /* @__PURE__ */ C.jsx(Eo, { onClick: t }) }),
  e,
  /* @__PURE__ */ C.jsx(wr, { gaData: { ...yi, text: "right chevron" }, children: /* @__PURE__ */ C.jsx(To, { onClick: t }) })
] });
Xi.propTypes = {
  children: p.element,
  onClick: p.func
};
const Gi = ({ carouselItems: t }) => {
  const e = t.map((o) => /* @__PURE__ */ C.jsx("li", { className: "glide__slide slider", children: o.item }, o.id.toString()));
  return /* @__PURE__ */ C.jsx("ul", { className: "glide__slides", children: e });
};
Gi.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: p.arrayOf(p.object)
};
function wi(t, e) {
  var o = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), o.push.apply(o, i);
  }
  return o;
}
function Si(t) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wi(Object(o), !0).forEach(function(i) {
      cl(t, i, o[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : wi(Object(o)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(o, i));
    });
  }
  return t;
}
function gn(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(e) {
    return typeof e;
  } : gn = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gn(t);
}
function _n(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ul(t, e) {
  for (var o = 0; o < e.length; o++) {
    var i = e[o];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function Tn(t, e, o) {
  return e && ul(t.prototype, e), t;
}
function cl(t, e, o) {
  return e in t ? Object.defineProperty(t, e, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = o, t;
}
function fl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), e && oo(t, e);
}
function xr(t) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, xr(t);
}
function oo(t, e) {
  return oo = Object.setPrototypeOf || function(i, l) {
    return i.__proto__ = l, i;
  }, oo(t, e);
}
function dl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pl(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function hl(t, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pl(t);
}
function ml(t) {
  var e = dl();
  return function() {
    var i = xr(t), l;
    if (e) {
      var u = xr(this).constructor;
      l = Reflect.construct(i, arguments, u);
    } else
      l = i.apply(this, arguments);
    return hl(this, l);
  };
}
function gl(t, e) {
  for (; !Object.prototype.hasOwnProperty.call(t, e) && (t = xr(t), t !== null); )
    ;
  return t;
}
function vn() {
  return typeof Reflect < "u" && Reflect.get ? vn = Reflect.get : vn = function(e, o, i) {
    var l = gl(e, o);
    if (l) {
      var u = Object.getOwnPropertyDescriptor(l, o);
      return u.get ? u.get.call(arguments.length < 3 ? e : i) : u.value;
    }
  }, vn.apply(this, arguments);
}
var vl = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: "slider",
  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,
  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,
  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,
  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,
  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: !1,
  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: !0,
  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: !0,
  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: !1,
  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,
  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,
  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: "",
  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,
  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,
  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,
  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: !0,
  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,
  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: !0,
  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,
  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: "ltr",
  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,
  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,
  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},
  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: "glide--swipeable",
    dragging: "glide--dragging",
    direction: {
      ltr: "glide--ltr",
      rtl: "glide--rtl"
    },
    type: {
      slider: "glide--slider",
      carousel: "glide--carousel"
    },
    slide: {
      clone: "glide__slide--clone",
      active: "glide__slide--active"
    },
    arrow: {
      disabled: "glide__arrow--disabled"
    },
    nav: {
      active: "glide__bullet--active"
    }
  }
};
function zt(t) {
  console.error("[Glide warn]: ".concat(t));
}
function qe(t) {
  return parseInt(t);
}
function yl(t) {
  return parseFloat(t);
}
function io(t) {
  return typeof t == "string";
}
function kr(t) {
  var e = gn(t);
  return e === "function" || e === "object" && !!t;
}
function xn(t) {
  return typeof t == "function";
}
function Zi(t) {
  return typeof t > "u";
}
function ao(t) {
  return t.constructor === Array;
}
function wl(t, e, o) {
  var i = {};
  for (var l in e)
    xn(e[l]) ? i[l] = e[l](t, i, o) : zt("Extension must be a function");
  for (var u in i)
    xn(i[u].mount) && i[u].mount();
  return i;
}
function Ne(t, e, o) {
  Object.defineProperty(t, e, o);
}
function Sl(t) {
  return Object.keys(t).sort().reduce(function(e, o) {
    return e[o] = t[o], e[o], e;
  }, {});
}
function so(t, e) {
  var o = Object.assign({}, t, e);
  if (e.hasOwnProperty("classes")) {
    o.classes = Object.assign({}, t.classes, e.classes);
    var i = ["direction", "type", "slide", "arrow", "nav"];
    i.forEach(function(l) {
      e.classes.hasOwnProperty(l) && (o.classes[l] = Si(Si({}, t.classes[l]), e.classes[l]));
    });
  }
  return e.hasOwnProperty("breakpoints") && (o.breakpoints = Object.assign({}, t.breakpoints, e.breakpoints)), o;
}
var bl = /* @__PURE__ */ function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _n(this, t), this.events = e, this.hop = e.hasOwnProperty;
  }
  return Tn(t, [{
    key: "on",
    value: function(o, i) {
      if (ao(o)) {
        for (var l = 0; l < o.length; l++)
          this.on(o[l], i);
        return;
      }
      this.hop.call(this.events, o) || (this.events[o] = []);
      var u = this.events[o].push(i) - 1;
      return {
        remove: function() {
          delete this.events[o][u];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */
  }, {
    key: "emit",
    value: function(o, i) {
      if (ao(o)) {
        for (var l = 0; l < o.length; l++)
          this.emit(o[l], i);
        return;
      }
      this.hop.call(this.events, o) && this.events[o].forEach(function(u) {
        u(i || {});
      });
    }
  }]), t;
}(), xl = /* @__PURE__ */ function() {
  function t(e) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _n(this, t), this._c = {}, this._t = [], this._e = new bl(), this.disabled = !1, this.selector = e, this.settings = so(vl, o), this.index = this.settings.startAt;
  }
  return Tn(t, [{
    key: "mount",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), kr(o) ? this._c = wl(this, o, this._e) : zt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */
  }, {
    key: "mutate",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return ao(o) ? this._t = o : zt("You need to provide a array on `mutate()`"), this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */
  }, {
    key: "update",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = so(this.settings, o), o.hasOwnProperty("startAt") && (this.index = o.startAt), this._e.emit("update"), this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */
  }, {
    key: "go",
    value: function(o) {
      return this._c.Run.make(o), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(o) {
      return this._c.Transition.disable(), this._c.Move.make(o), this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */
  }, {
    key: "destroy",
    value: function() {
      return this._e.emit("destroy"), this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */
  }, {
    key: "play",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return o && (this.settings.autoplay = o), this._e.emit("play"), this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */
  }, {
    key: "pause",
    value: function() {
      return this._e.emit("pause"), this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */
  }, {
    key: "disable",
    value: function() {
      return this.disabled = !0, this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */
  }, {
    key: "enable",
    value: function() {
      return this.disabled = !1, this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */
  }, {
    key: "on",
    value: function(o, i) {
      return this._e.on(o, i), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(o) {
      return this.settings.type === o;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */
  }, {
    key: "settings",
    get: function() {
      return this._o;
    },
    set: function(o) {
      kr(o) ? this._o = o : zt("Options must be an `object` instance.");
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */
  }, {
    key: "index",
    get: function() {
      return this._i;
    },
    set: function(o) {
      this._i = qe(o);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */
  }, {
    key: "type",
    get: function() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */
  }, {
    key: "disabled",
    get: function() {
      return this._d;
    },
    set: function(o) {
      this._d = !!o;
    }
  }]), t;
}();
function kl(t, e, o) {
  var i = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function() {
      this._o = !1;
    },
    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function(y) {
      var S = this;
      t.disabled || (!t.settings.waitForTransition || t.disable(), this.move = y, o.emit("run.before", this.move), this.calculate(), o.emit("run", this.move), e.Transition.after(function() {
        S.isStart() && o.emit("run.start", S.move), S.isEnd() && o.emit("run.end", S.move), S.isOffset() && (S._o = !1, o.emit("run.offset", S.move)), o.emit("run.after", S.move), t.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var y = this.move, S = this.length, b = y.steps, O = y.direction, V = 1;
      if (O === "=") {
        if (t.settings.bound && qe(b) > S) {
          t.index = S;
          return;
        }
        t.index = b;
        return;
      }
      if (O === ">" && b === ">") {
        t.index = S;
        return;
      }
      if (O === "<" && b === "<") {
        t.index = 0;
        return;
      }
      if (O === "|" && (V = t.settings.perView || 1), O === ">" || O === "|" && b === ">") {
        var P = l(V);
        P > S && (this._o = !0), t.index = u(P, V);
        return;
      }
      if (O === "<" || O === "|" && b === "<") {
        var B = d(V);
        B < 0 && (this._o = !0), t.index = v(B, V);
        return;
      }
      zt("Invalid direction pattern [".concat(O).concat(b, "] has been used"));
    },
    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function() {
      return t.index <= 0;
    },
    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function() {
      return t.index >= this.length;
    },
    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function() {
      var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return y ? this._o ? y === "|>" ? this.move.direction === "|" && this.move.steps === ">" : y === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === y : !1 : this._o;
    },
    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function() {
      return t.isType("slider") && t.settings.focusAt !== "center" && t.settings.bound;
    }
  };
  function l(h) {
    var y = t.index;
    return t.isType("carousel") ? y + h : y + (h - y % h);
  }
  function u(h, y) {
    var S = i.length;
    return h <= S ? h : t.isType("carousel") ? h - (S + 1) : t.settings.rewind ? i.isBound() && !i.isEnd() ? S : 0 : i.isBound() ? S : Math.floor(S / y) * y;
  }
  function d(h) {
    var y = t.index;
    if (t.isType("carousel"))
      return y - h;
    var S = Math.ceil(y / h);
    return (S - 1) * h;
  }
  function v(h, y) {
    var S = i.length;
    return h >= 0 ? h : t.isType("carousel") ? h + (S + 1) : t.settings.rewind ? i.isBound() && i.isStart() ? S : Math.floor(S / y) * y : 0;
  }
  return Ne(i, "move", {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function() {
      return this._m;
    },
    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function(y) {
      var S = y.substr(1);
      this._m = {
        direction: y.substr(0, 1),
        steps: S ? qe(S) ? qe(S) : S : 0
      };
    }
  }), Ne(i, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var y = t.settings, S = e.Html.slides.length;
      return this.isBound() ? S - 1 - (qe(y.perView) - 1) + qe(y.focusAt) : S - 1;
    }
  }), Ne(i, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), i;
}
function bi() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function En(t, e) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, l, u, d, v = 0, h = function() {
    v = o.leading === !1 ? 0 : bi(), i = null, d = t.apply(l, u), i || (l = u = null);
  }, y = function() {
    var b = bi();
    !v && o.leading === !1 && (v = b);
    var O = e - (b - v);
    return l = this, u = arguments, O <= 0 || O > e ? (i && (clearTimeout(i), i = null), v = b, d = t.apply(l, u), i || (l = u = null)) : !i && o.trailing !== !1 && (i = setTimeout(h, O)), d;
  };
  return y.cancel = function() {
    clearTimeout(i), v = 0, i = l = u = null;
  }, y;
}
var cn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function _l(t, e, o) {
  var i = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(u) {
      for (var d = 0, v = u.length; d < v; d++) {
        var h = u[d].style, y = e.Direction.value;
        d !== 0 ? h[cn[y][0]] = "".concat(this.value / 2, "px") : h[cn[y][0]] = "", d !== u.length - 1 ? h[cn[y][1]] = "".concat(this.value / 2, "px") : h[cn[y][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(u) {
      for (var d = 0, v = u.length; d < v; d++) {
        var h = u[d].style;
        h.marginLeft = "", h.marginRight = "";
      }
    }
  };
  return Ne(i, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return qe(t.settings.gap);
    }
  }), Ne(i, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return i.value * e.Sizes.length;
    }
  }), Ne(i, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var u = t.settings.perView;
      return i.value * (u - 1) / u;
    }
  }), o.on(["build.after", "update"], En(function() {
    i.apply(e.Html.wrapper.children);
  }, 30)), o.on("destroy", function() {
    i.remove(e.Html.wrapper.children);
  }), i;
}
function Ki(t) {
  if (t && t.parentNode) {
    for (var e = t.parentNode.firstChild, o = []; e; e = e.nextSibling)
      e.nodeType === 1 && e !== t && o.push(e);
    return o;
  }
  return [];
}
function lo(t) {
  return Array.prototype.slice.call(t);
}
var Tl = '[data-glide-el="track"]';
function El(t, e, o) {
  var i = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = t.selector, this.track = this.root.querySelector(Tl), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = lo(this.wrapper.children).filter(function(u) {
        return !u.classList.contains(t.settings.classes.slide.clone);
      });
    }
  };
  return Ne(i, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return i._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(u) {
      io(u) && (u = document.querySelector(u)), u !== null ? i._r = u : zt("Root element must be a existing Html node");
    }
  }), Ne(i, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return i._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(u) {
      i._t = u;
    }
  }), Ne(i, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return i.track.children[0];
    }
  }), o.on("update", function() {
    i.collectSlides();
  }), i;
}
function Cl(t, e, o) {
  var i = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = t.settings.peek;
    }
  };
  return Ne(i, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return i._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(u) {
      kr(u) ? (u.before = qe(u.before), u.after = qe(u.after)) : u = qe(u), i._v = u;
    }
  }), Ne(i, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var u = i.value, d = t.settings.perView;
      return kr(u) ? u.before / d + u.after / d : u * 2 / d;
    }
  }), o.on(["resize", "update"], function() {
    i.mount();
  }), i;
}
function Al(t, e, o) {
  var i = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._o = 0;
    },
    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function() {
      var u = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = d, o.emit("move", {
        movement: this.value
      }), e.Transition.after(function() {
        o.emit("move.after", {
          movement: u.value
        });
      });
    }
  };
  return Ne(i, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return i._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(u) {
      i._o = Zi(u) ? 0 : qe(u);
    }
  }), Ne(i, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return e.Sizes.slideWidth * t.index;
    }
  }), Ne(i, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var u = this.offset, d = this.translate;
      return e.Direction.is("rtl") ? d + u : d - u;
    }
  }), o.on(["build.before", "run"], function() {
    i.make();
  }), i;
}
function Rl(t, e, o) {
  var i = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var u = "".concat(this.slideWidth, "px"), d = e.Html.slides, v = 0; v < d.length; v++)
        d[v].style.width = u;
    },
    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function() {
      e.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function() {
      for (var u = e.Html.slides, d = 0; d < u.length; d++)
        u[d].style.width = "";
      e.Html.wrapper.style.width = "";
    }
  };
  return Ne(i, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return e.Html.slides.length;
    }
  }), Ne(i, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return e.Html.track.offsetWidth;
    }
  }), Ne(i, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow;
    }
  }), Ne(i, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor;
    }
  }), o.on(["build.before", "resize", "update"], function() {
    i.setupSlides(), i.setupWrapper();
  }), o.on("destroy", function() {
    i.remove();
  }), i;
}
function Ol(t, e, o) {
  var i = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      o.emit("build.before"), this.typeClass(), this.activeClass(), o.emit("build.after");
    },
    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function() {
      e.Html.root.classList.add(t.settings.classes.type[t.settings.type]);
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function() {
      var u = t.settings.classes, d = e.Html.slides[t.index];
      d && (d.classList.add(u.slide.active), Ki(d).forEach(function(v) {
        v.classList.remove(u.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var u = t.settings.classes, d = u.type, v = u.slide;
      e.Html.root.classList.remove(d[t.settings.type]), e.Html.slides.forEach(function(h) {
        h.classList.remove(v.active);
      });
    }
  };
  return o.on(["destroy", "update"], function() {
    i.removeClasses();
  }), o.on(["resize", "update"], function() {
    i.mount();
  }), o.on("move.after", function() {
    i.activeClass();
  }), i;
}
function Pl(t, e, o) {
  var i = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function() {
      this.items = [], t.isType("carousel") && (this.items = this.collect());
    },
    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], d = e.Html.slides, v = t.settings, h = v.perView, y = v.classes, S = v.cloningRatio;
      if (d.length > 0)
        for (var b = +!!t.settings.peek, O = h + b + Math.round(h / 2), V = d.slice(0, O).reverse(), P = d.slice(O * -1), B = 0; B < Math.max(S, Math.floor(h / d.length)); B++) {
          for (var L = 0; L < V.length; L++) {
            var F = V[L].cloneNode(!0);
            F.classList.add(y.slide.clone), u.push(F);
          }
          for (var H = 0; H < P.length; H++) {
            var X = P[H].cloneNode(!0);
            X.classList.add(y.slide.clone), u.unshift(X);
          }
        }
      return u;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var u = this.items, d = e.Html, v = d.wrapper, h = d.slides, y = Math.floor(u.length / 2), S = u.slice(0, y).reverse(), b = u.slice(y * -1).reverse(), O = "".concat(e.Sizes.slideWidth, "px"), V = 0; V < b.length; V++)
        v.appendChild(b[V]);
      for (var P = 0; P < S.length; P++)
        v.insertBefore(S[P], h[0]);
      for (var B = 0; B < u.length; B++)
        u[B].style.width = O;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var u = this.items, d = 0; d < u.length; d++)
        e.Html.wrapper.removeChild(u[d]);
    }
  };
  return Ne(i, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length;
    }
  }), o.on("update", function() {
    i.remove(), i.mount(), i.append();
  }), o.on("build.before", function() {
    t.isType("carousel") && i.append();
  }), o.on("destroy", function() {
    i.remove();
  }), i;
}
var Jt = /* @__PURE__ */ function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _n(this, t), this.listeners = e;
  }
  return Tn(t, [{
    key: "on",
    value: function(o, i, l) {
      var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      io(o) && (o = [o]);
      for (var d = 0; d < o.length; d++)
        this.listeners[o[d]] = l, i.addEventListener(o[d], this.listeners[o[d]], u);
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */
  }, {
    key: "off",
    value: function(o, i) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      io(o) && (o = [o]);
      for (var u = 0; u < o.length; u++)
        i.removeEventListener(o[u], this.listeners[o[u]], l);
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */
  }, {
    key: "destroy",
    value: function() {
      delete this.listeners;
    }
  }]), t;
}();
function Nl(t, e, o) {
  var i = new Jt(), l = {
    /**
     * Initializes window bindings.
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function() {
      i.on("resize", window, En(function() {
        o.emit("resize");
      }, t.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      i.off("resize", window);
    }
  };
  return o.on("destroy", function() {
    l.unbind(), i.destroy();
  }), l;
}
var Il = ["ltr", "rtl"], Ll = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Ml(t, e, o) {
  var i = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = t.settings.direction;
    },
    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function(u) {
      var d = u.slice(0, 1);
      return this.is("rtl") ? u.split(d).join(Ll[d]) : u;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(u) {
      return this.value === u;
    },
    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function() {
      e.Html.root.classList.add(t.settings.classes.direction[this.value]);
    },
    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function() {
      e.Html.root.classList.remove(t.settings.classes.direction[this.value]);
    }
  };
  return Ne(i, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return i._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(u) {
      Il.indexOf(u) > -1 ? i._v = u : zt("Direction value must be `ltr` or `rtl`");
    }
  }), o.on(["destroy", "update"], function() {
    i.removeClass();
  }), o.on("update", function() {
    i.mount();
  }), o.on(["build.before", "update"], function() {
    i.addClass();
  }), i;
}
function Dl(t, e) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(i) {
      return e.Direction.is("rtl") ? -i : i;
    }
  };
}
function Fl(t, e) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(i) {
      var l = Math.floor(i / e.Sizes.slideWidth);
      return i + e.Gaps.value * l;
    }
  };
}
function jl(t, e) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(i) {
      return i + e.Clones.grow / 2;
    }
  };
}
function Bl(t, e) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(i) {
      if (t.settings.focusAt >= 0) {
        var l = e.Peek.value;
        return kr(l) ? i - l.before : i - l;
      }
      return i;
    }
  };
}
function zl(t, e) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(i) {
      var l = e.Gaps.value, u = e.Sizes.width, d = t.settings.focusAt, v = e.Sizes.slideWidth;
      return d === "center" ? i - (u / 2 - v / 2) : i - v * d - l * d;
    }
  };
}
function $l(t, e, o) {
  var i = [Fl, jl, Bl, zl].concat(t._t, [Dl]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(u) {
      for (var d = 0; d < i.length; d++) {
        var v = i[d];
        xn(v) && xn(v().modify) ? u = v(t, e, o).modify(u) : zt("Transformer should be a function that returns an object with `modify()` method");
      }
      return u;
    }
  };
}
function Hl(t, e, o) {
  var i = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(u) {
      var d = $l(t, e).mutate(u), v = "translate3d(".concat(-1 * d, "px, 0px, 0px)");
      e.Html.wrapper.style.mozTransform = v, e.Html.wrapper.style.webkitTransform = v, e.Html.wrapper.style.transform = v;
    },
    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      e.Html.wrapper.style.transform = "";
    },
    /**
     * @return {number}
     */
    getStartIndex: function() {
      var u = e.Sizes.length, d = t.index, v = t.settings.perView;
      return e.Run.isOffset(">") || e.Run.isOffset("|>") ? u + (d - v) : (d + v) % u;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var u = e.Sizes.slideWidth * t.settings.perView;
      return e.Run.isOffset(">") || e.Run.isOffset("|>") ? u * -1 : u;
    }
  };
  return o.on("move", function(l) {
    if (!t.isType("carousel") || !e.Run.isOffset())
      return i.set(l.movement);
    e.Transition.after(function() {
      o.emit("translate.jump"), i.set(e.Sizes.slideWidth * t.index);
    });
    var u = e.Sizes.slideWidth * e.Translate.getStartIndex();
    return i.set(u - e.Translate.getTravelDistance());
  }), o.on("destroy", function() {
    i.remove();
  }), i;
}
function Vl(t, e, o) {
  var i = !1, l = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(d) {
      var v = t.settings;
      return i ? "".concat(d, " 0ms ").concat(v.animationTimingFunc) : "".concat(d, " ").concat(this.duration, "ms ").concat(v.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      e.Html.wrapper.style.transition = this.compose(d);
    },
    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      e.Html.wrapper.style.transition = "";
    },
    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function(d) {
      setTimeout(function() {
        d();
      }, this.duration);
    },
    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function() {
      i = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      i = !0, this.set();
    }
  };
  return Ne(l, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var d = t.settings;
      return t.isType("slider") && e.Run.offset ? d.rewindDuration : d.animationDuration;
    }
  }), o.on("move", function() {
    l.set();
  }), o.on(["build.before", "resize", "translate.jump"], function() {
    l.disable();
  }), o.on("run", function() {
    l.enable();
  }), o.on("destroy", function() {
    l.remove();
  }), l;
}
var Ji = !1;
try {
  var xi = Object.defineProperty({}, "passive", {
    get: function() {
      Ji = !0;
    }
  });
  window.addEventListener("testPassive", null, xi), window.removeEventListener("testPassive", null, xi);
} catch {
}
var uo = Ji, fn = ["touchstart", "mousedown"], ki = ["touchmove", "mousemove"], _i = ["touchend", "touchcancel", "mouseup", "mouseleave"], Ti = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Ul(t, e, o) {
  var i = new Jt(), l = 0, u = 0, d = 0, v = !1, h = uo ? {
    passive: !0
  } : !1, y = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function() {
      this.bindSwipeStart();
    },
    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function(b) {
      if (!v && !t.disabled) {
        this.disable();
        var O = this.touches(b);
        l = null, u = qe(O.pageX), d = qe(O.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), o.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(b) {
      if (!t.disabled) {
        var O = t.settings, V = O.touchAngle, P = O.touchRatio, B = O.classes, L = this.touches(b), F = qe(L.pageX) - u, H = qe(L.pageY) - d, X = Math.abs(F << 2), G = Math.abs(H << 2), N = Math.sqrt(X + G), de = Math.sqrt(G);
        if (l = Math.asin(de / N), l * 180 / Math.PI < V)
          b.stopPropagation(), e.Move.make(F * yl(P)), e.Html.root.classList.add(B.dragging), o.emit("swipe.move");
        else
          return !1;
      }
    },
    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function(b) {
      if (!t.disabled) {
        var O = t.settings, V = O.perSwipe, P = O.touchAngle, B = O.classes, L = this.touches(b), F = this.threshold(b), H = L.pageX - u, X = l * 180 / Math.PI;
        this.enable(), H > F && X < P ? e.Run.make(e.Direction.resolve("".concat(V, "<"))) : H < -F && X < P ? e.Run.make(e.Direction.resolve("".concat(V, ">"))) : e.Move.make(), e.Html.root.classList.remove(B.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), o.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var b = this, O = t.settings, V = O.swipeThreshold, P = O.dragThreshold;
      V && i.on(fn[0], e.Html.wrapper, function(B) {
        b.start(B);
      }, h), P && i.on(fn[1], e.Html.wrapper, function(B) {
        b.start(B);
      }, h);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      i.off(fn[0], e.Html.wrapper, h), i.off(fn[1], e.Html.wrapper, h);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var b = this;
      i.on(ki, e.Html.wrapper, En(function(O) {
        b.move(O);
      }, t.settings.throttle), h);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      i.off(ki, e.Html.wrapper, h);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var b = this;
      i.on(_i, e.Html.wrapper, function(O) {
        b.end(O);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      i.off(_i, e.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(b) {
      return Ti.indexOf(b.type) > -1 ? b : b.touches[0] || b.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(b) {
      var O = t.settings;
      return Ti.indexOf(b.type) > -1 ? O.dragThreshold : O.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return v = !1, e.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return v = !0, e.Transition.disable(), this;
    }
  };
  return o.on("build.after", function() {
    e.Html.root.classList.add(t.settings.classes.swipeable);
  }), o.on("destroy", function() {
    y.unbindSwipeStart(), y.unbindSwipeMove(), y.unbindSwipeEnd(), i.destroy();
  }), y;
}
function Wl(t, e, o) {
  var i = new Jt(), l = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function() {
      i.on("dragstart", e.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      i.off("dragstart", e.Html.wrapper);
    },
    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function(d) {
      d.preventDefault();
    }
  };
  return o.on("destroy", function() {
    l.unbind(), i.destroy();
  }), l;
}
function ql(t, e, o) {
  var i = new Jt(), l = !1, u = !1, d = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._a = e.Html.wrapper.querySelectorAll("a"), this.bind();
    },
    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function() {
      i.on("click", e.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      i.off("click", e.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(h) {
      u && (h.stopPropagation(), h.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (u = !0, !l) {
        for (var h = 0; h < this.items.length; h++)
          this.items[h].draggable = !1;
        l = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (u = !1, l) {
        for (var h = 0; h < this.items.length; h++)
          this.items[h].draggable = !0;
        l = !1;
      }
      return this;
    }
  };
  return Ne(d, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return d._a;
    }
  }), o.on("swipe.move", function() {
    d.detach();
  }), o.on("swipe.end", function() {
    e.Transition.after(function() {
      d.attach();
    });
  }), o.on("destroy", function() {
    d.attach(), d.unbind(), i.destroy();
  }), d;
}
var Yl = '[data-glide-el="controls[nav]"]', Ao = '[data-glide-el^="controls"]', Xl = "".concat(Ao, ' [data-glide-dir*="<"]'), Gl = "".concat(Ao, ' [data-glide-dir*=">"]');
function Zl(t, e, o) {
  var i = new Jt(), l = uo ? {
    passive: !0
  } : !1, u = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = e.Html.root.querySelectorAll(Yl), this._c = e.Html.root.querySelectorAll(Ao), this._arrowControls = {
        previous: e.Html.root.querySelectorAll(Xl),
        next: e.Html.root.querySelectorAll(Gl)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var v = 0; v < this._n.length; v++)
        this.addClass(this._n[v].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var v = 0; v < this._n.length; v++)
        this.removeClass(this._n[v].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(v) {
      var h = t.settings, y = v[t.index];
      y && (y.classList.add(h.classes.nav.active), Ki(y).forEach(function(S) {
        S.classList.remove(h.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(v) {
      var h = v[t.index];
      h == null || h.classList.remove(t.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!t.settings.rewind) {
        var v = u._arrowControls.next, h = u._arrowControls.previous;
        this.resetArrowState(v, h), t.index === 0 && this.disableArrow(h), t.index === e.Run.length && this.disableArrow(v);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var v = t.settings, h = arguments.length, y = new Array(h), S = 0; S < h; S++)
        y[S] = arguments[S];
      y.forEach(function(b) {
        lo(b).forEach(function(O) {
          O.classList.remove(v.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var v = t.settings, h = arguments.length, y = new Array(h), S = 0; S < h; S++)
        y[S] = arguments[S];
      y.forEach(function(b) {
        lo(b).forEach(function(O) {
          O.classList.add(v.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var v = 0; v < this._c.length; v++)
        this.bind(this._c[v].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var v = 0; v < this._c.length; v++)
        this.unbind(this._c[v].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(v) {
      for (var h = 0; h < v.length; h++)
        i.on("click", v[h], this.click), i.on("touchstart", v[h], this.click, l);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(v) {
      for (var h = 0; h < v.length; h++)
        i.off(["click", "touchstart"], v[h]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(v) {
      !uo && v.type === "touchstart" && v.preventDefault();
      var h = v.currentTarget.getAttribute("data-glide-dir");
      e.Run.make(e.Direction.resolve(h));
    }
  };
  return Ne(u, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return u._c;
    }
  }), o.on(["mount.after", "move.after"], function() {
    u.setActive();
  }), o.on(["mount.after", "run"], function() {
    u.setArrowState();
  }), o.on("destroy", function() {
    u.removeBindings(), u.removeActive(), i.destroy();
  }), u;
}
function Kl(t, e, o) {
  var i = new Jt(), l = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function() {
      t.settings.keyboard && this.bind();
    },
    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function() {
      i.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      i.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(d) {
      var v = t.settings.perSwipe, h = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(d.code) && e.Run.make(e.Direction.resolve("".concat(v).concat(h[d.code])));
    }
  };
  return o.on(["destroy", "update"], function() {
    l.unbind();
  }), o.on("update", function() {
    l.mount();
  }), o.on("destroy", function() {
    i.destroy();
  }), l;
}
function Jl(t, e, o) {
  var i = new Jt(), l = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function() {
      this.enable(), this.start(), t.settings.hoverpause && this.bind();
    },
    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function() {
      this._e = !0;
    },
    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function() {
      this._e = !1;
    },
    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function() {
      var d = this;
      this._e && (this.enable(), t.settings.autoplay && Zi(this._i) && (this._i = setInterval(function() {
        d.stop(), e.Run.make(">"), d.start(), o.emit("autoplay");
      }, this.time)));
    },
    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function() {
      this._i = clearInterval(this._i);
    },
    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function() {
      var d = this;
      i.on("mouseover", e.Html.root, function() {
        d._e && d.stop();
      }), i.on("mouseout", e.Html.root, function() {
        d._e && d.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      i.off(["mouseover", "mouseout"], e.Html.root);
    }
  };
  return Ne(l, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var d = e.Html.slides[t.index].getAttribute("data-glide-autoplay");
      return qe(d || t.settings.autoplay);
    }
  }), o.on(["destroy", "update"], function() {
    l.unbind();
  }), o.on(["run.before", "swipe.start", "update"], function() {
    l.stop();
  }), o.on(["pause", "destroy"], function() {
    l.disable(), l.stop();
  }), o.on(["run.after", "swipe.end"], function() {
    l.start();
  }), o.on(["play"], function() {
    l.enable(), l.start();
  }), o.on("update", function() {
    l.mount();
  }), o.on("destroy", function() {
    i.destroy();
  }), l;
}
function Ei(t) {
  return kr(t) ? Sl(t) : (zt("Breakpoints option must be an object"), {});
}
function Ql(t, e, o) {
  var i = new Jt(), l = t.settings, u = Ei(l.breakpoints), d = Object.assign({}, l), v = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(y) {
      if (typeof window.matchMedia < "u") {
        for (var S in y)
          if (y.hasOwnProperty(S) && window.matchMedia("(max-width: ".concat(S, "px)")).matches)
            return y[S];
      }
      return d;
    }
  };
  return Object.assign(l, v.match(u)), i.on("resize", window, En(function() {
    t.settings = so(l, v.match(u));
  }, t.settings.throttle)), o.on("update", function() {
    u = Ei(u), d = Object.assign({}, l);
  }), o.on("destroy", function() {
    i.off("resize", window);
  }), v;
}
var eu = {
  // Required
  Html: El,
  Translate: Hl,
  Transition: Vl,
  Direction: Ml,
  Peek: Cl,
  Sizes: Rl,
  Gaps: _l,
  Move: Al,
  Clones: Pl,
  Resize: Nl,
  Build: Ol,
  Run: kl,
  // Optional
  Swipe: Ul,
  Images: Wl,
  Anchors: ql,
  Controls: Zl,
  Keyboard: Kl,
  Autoplay: Jl,
  Breakpoints: Ql
}, tu = /* @__PURE__ */ function(t) {
  fl(o, t);
  var e = ml(o);
  function o() {
    return _n(this, o), e.apply(this, arguments);
  }
  return Tn(o, [{
    key: "mount",
    value: function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return vn(xr(o.prototype), "mount", this).call(this, Object.assign({}, eu, l));
    }
  }]), o;
}(xl);
function ru(t) {
  let e, o, i;
  switch (t) {
    case 3:
      e = 1, o = 2, i = 3;
      break;
    case 2:
      e = 1, o = 2, i = 2;
      break;
    case 1:
    default:
      e = 1, o = 1, i = 1;
  }
  return {
    perViewSm: e,
    perViewMd: o,
    perViewLg: i
  };
}
function nu(t = 1, e, o = !0, i) {
  const { perViewSm: l, perViewMd: u, perViewLg: d } = ru(t), v = o ? 24 : 0, h = o ? { before: 48, after: 48 } : 0, y = o ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: v,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: i ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: d,
    // Can be overwritten at breakpoints
    peek: y,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: e ? null : {
      576: {
        // BS4 sm
        perView: l,
        peek: h
      },
      768: {
        // BS4 md
        perView: u,
        peek: h
      },
      992: {
        // BS4 lg
        perView: d,
        peek: h
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: h
      },
      1400: {
        perView: d,
        peek: y
      },
      1920: {
        perView: d,
        peek: y
      }
    }
  };
}
function ou(t, e, o) {
  const i = t.querySelector(".glide__arrow--prev"), l = t.querySelector(".glide__arrow--next"), u = t.querySelector(".glide__track"), d = t.querySelector(
    ".image-navigator-images"
  );
  if (!(i || l)) return;
  const v = ["slider-start", "slider-mid", "slider-end"], h = "glide__arrow--disabled";
  u == null || u.classList.remove(...v), d == null || d.classList.remove(...v), e === 0 ? (u == null || u.classList.add("slider-start"), d == null || d.classList.add("slider-start"), i.classList.add(h), l.classList.remove(h)) : e >= o - 1 ? (u == null || u.classList.add("slider-end"), d == null || d.classList.add("slider-end"), i.classList.remove(h), l.classList.add(h)) : (u == null || u.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), i.classList.remove(h), l.classList.remove(h));
}
function iu(t, e, o) {
  const i = t.querySelectorAll(".glide__slide"), l = e, u = Math.min(
    i.length - 1,
    e + o - 1
  );
  i.forEach((d, v) => {
    v < l || v > u ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function au({
  instanceName: t,
  perView: e,
  buttonCount: o,
  isFullWidth: i = !1,
  onItemClick: l,
  hasPeek: u = !0,
  isDraggable: d
}) {
  const v = nu(e, i, u, d), h = new tu(`#${t}`, v);
  let y = document.querySelector(`#${t}`);
  return y.addEventListener("keyup", (S) => {
    const b = S;
    b.keyCode === 39 ? h.go(">") : b.keyCode === 37 ? h.go("<") : b.keyCode === 13 && h.go(document.activeElement.dataset.glideDir);
  }), h.on("build.before", () => {
    y = document.querySelector(`#${t}`), y && y.classList.add("slider-start");
  }), h.on("move", () => {
    if (y = document.querySelector(`#${t}`), !y) return;
    const S = h.index;
    iu(y, S, e);
    const b = y.querySelector(".navigation-slider"), O = y.querySelector(".image-navigator-images");
    if (b && O) {
      const V = b.querySelectorAll(
        ".bullet-image-container"
      ), P = b.clientWidth, B = 82, L = V[S], F = O.getBoundingClientRect().x, H = b.getBoundingClientRect().x - F, X = L.getBoundingClientRect().x - F, G = L.getBoundingClientRect().x + L.getBoundingClientRect().width - F;
      if (S === 0 || X <= 0 + B)
        b.style.left = `${H - X + B}px`;
      else if (G >= P - B) {
        const N = G - P;
        b.style.left = `${H - N - B}px`;
      }
    }
    ou(y, S, o), y.setAttribute("data-current-index", S), l && l(S);
  }), h.mount(), h;
}
function su(t, e) {
  let o;
  const i = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return o = t, i >= 992 && (e >= 2 && (o = t - 1), e >= 3 && (o = t - 2)), o;
}
const $r = ({
  perView: t = 1,
  width: e,
  maxWidth: o,
  carouselItems: i,
  cssClass: l = "",
  CustomNavComponent: u,
  role: d,
  ariaLabelledBy: v,
  isFullWidth: h,
  removeSideBackground: y = !1,
  hasNavButtons: S = !0,
  hasPositionIndicators: b = !0,
  imageAutoSize: O = !0,
  onItemClick: V = () => null,
  hasPeek: P = !0,
  isDraggable: B = !0,
  hasShadow: L = !0
}) => {
  const F = `glide-${Math.ceil(Math.random() * 1e4)}`, H = su(i.length, t);
  return fo(() => {
    au({
      instanceName: F,
      perView: t,
      buttonCount: H,
      isFullWidth: h,
      onItemClick: V,
      hasPeek: P,
      isDraggable: B
    });
  }, [
    F,
    t,
    H,
    h,
    V,
    P,
    B
  ]), /* @__PURE__ */ C.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": v,
      className: `glide ${l}`,
      id: F,
      style: { width: e, maxWidth: o },
      "data-remove-side-background": y,
      "data-image-auto-size": O,
      "data-has-shadow": L,
      children: [
        /* @__PURE__ */ C.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ C.jsx(Gi, { carouselItems: i }) }),
        u ? (
          // @ts-ignore
          /* @__PURE__ */ C.jsx(u, { instanceName: F })
        ) : /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          b && /* @__PURE__ */ C.jsx(qi, { buttonCount: H }),
          S && /* @__PURE__ */ C.jsx(Xi, {})
        ] })
      ]
    }
  );
};
$r.propTypes = {
  perView: p.number,
  width: p.string,
  maxWidth: p.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: p.arrayOf(p.object).isRequired,
  cssClass: p.string,
  CustomNavComponent: p.func,
  role: p.string,
  ariaLabelledBy: p.string,
  onItemClick: p.func,
  isFullWidth: p.bool,
  removeSideBackground: p.bool,
  hasNavButtons: p.bool,
  hasPositionIndicators: p.bool,
  imageAutoSize: p.bool,
  hasPeek: p.bool,
  isDraggable: p.bool,
  hasShadow: p.bool
};
const lu = ({
  id: t,
  imageSource: e,
  imageAltText: o,
  title: i,
  content: l,
  eventLocation: u,
  eventTime: d,
  buttons: v,
  linkLabel: h,
  linkUrl: y,
  tags: S
}, b, O, V) => {
  var P;
  return {
    // @ts-ignore
    id: t,
    item: /* @__PURE__ */ C.jsx(
      Zt,
      {
        type: b,
        horizontal: O,
        image: e,
        imageAltText: o,
        title: i,
        body: l,
        eventFormat: V,
        eventLocation: u,
        eventTime: d,
        buttons: v,
        linkLabel: h,
        linkUrl: y || ((P = v == null ? void 0 : v[0]) == null ? void 0 : P.href),
        tags: S
      }
    )
  };
}, Qi = ({
  perView: t = 0,
  cardItems: e = [],
  cardType: o = "default",
  cardEventFormat: i = "stack",
  cardHorizontal: l = !1,
  width: u = void 0,
  maxWidth: d = void 0,
  imageAutoSize: v = !0
}) => {
  const h = parseInt(`${t}`, 10), [y, S] = Xn(h), b = 1024, O = 768;
  fo(() => {
    const B = () => {
      const L = window.innerWidth;
      let F;
      switch (h) {
        case 3:
          L > b ? F = 3 : L > O ? F = 2 : F = 1;
          break;
        case 2:
          F = L < O ? 1 : 2;
          break;
        default:
          F = 1;
          break;
      }
      S(F);
    };
    return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
  }, [h]);
  const V = e.map(
    (B) => lu(B, o, l, i)
  ), P = e.length > y;
  return /* @__PURE__ */ C.jsx(
    $r,
    {
      perView: +y,
      maxWidth: d,
      width: u,
      carouselItems: V,
      cssClass: "aligned-carousel",
      imageAutoSize: v,
      removeSideBackground: e.length <= y,
      hasPositionIndicators: P,
      hasNavButtons: P,
      isDraggable: P,
      hasShadow: !0
    }
  );
};
Qi.propTypes = {
  perView: p.string.isRequired,
  cardItems: p.arrayOf(
    p.shape({
      title: p.string.isRequired,
      content: p.string,
      eventLocation: p.string,
      eventTime: p.string,
      image: p.string,
      imageAltText: p.string,
      buttons: Zt.propTypes.buttons,
      linkLabel: p.string,
      linkUrl: p.string,
      tags: Zt.propTypes.tags
    })
  ).isRequired,
  cardType: Zt.propTypes.type,
  cardEventFormat: Zt.propTypes.eventFormat,
  cardHorizontal: Zt.propTypes.horizontal,
  width: p.string,
  maxWidth: p.string,
  imageAutoSize: p.bool
};
const uu = ({ id: t, imageSource: e, imageAltText: o, title: i, content: l }) => ({
  // @ts-ignore
  id: t,
  item: /* @__PURE__ */ C.jsx("div", { className: "uds-img", children: /* @__PURE__ */ C.jsxs("figure", { className: "figure uds-figure", children: [
    /* @__PURE__ */ C.jsx(
      "img",
      {
        src: e,
        className: "uds-img figure-img img-fluid",
        alt: o,
        loading: "lazy",
        decoding: "async"
      }
    ),
    (i || l) && /* @__PURE__ */ C.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ C.jsx("div", { className: "uds-caption-text", children: i ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
          /* @__PURE__ */ C.jsx("h3", { children: i }),
          /* @__PURE__ */ C.jsx("div", { dangerouslySetInnerHTML: { __html: l } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ C.jsx("div", { dangerouslySetInnerHTML: { __html: l } })
        ) })
      }
    )
  ] }) })
}), ea = ({
  perView: t = 0,
  imageItems: e = [],
  width: o = void 0,
  maxWidth: i = void 0,
  imageAutoSize: l = !0
}) => {
  if (!e || e.length === 0)
    return null;
  const u = parseInt(`${t}`, 10), d = e.map(uu) || [], v = e.length > u;
  return /* @__PURE__ */ C.jsx(
    $r,
    {
      perView: +u,
      maxWidth: i,
      width: o,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: d,
      imageAutoSize: l,
      removeSideBackground: e.length <= u,
      hasPositionIndicators: v,
      hasNavButtons: v,
      isDraggable: v,
      hasShadow: !0
    }
  );
};
ea.propTypes = {
  perView: p.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: p.arrayOf(p.object).isRequired,
  width: p.string,
  maxWidth: p.string,
  imageAutoSize: p.bool
};
const cu = (t, e) => {
  if (!t)
    return 0;
  const o = (t.match(/<br/g) || []).length, i = e / 6;
  return (parseInt(`${t.length / i}`, 10) + o) * 20;
}, kn = {
  imageItems: p.arrayOf(
    p.shape({
      id: p.number,
      imageSource: p.string,
      thumbnailSource: p.string,
      imageAltText: p.string,
      content: p.oneOfType([p.string, p.element])
    })
  ),
  hasContent: p.bool
}, fu = ({ id: t, imageSource: e, imageAltText: o }) => ({
  // @ts-ignore
  id: t,
  item: /* @__PURE__ */ C.jsx("div", { className: "uds-img", children: /* @__PURE__ */ C.jsx(
    "img",
    {
      src: e,
      className: "uds-img figure-img img-fluid",
      alt: o,
      loading: "lazy",
      decoding: "async"
    }
  ) })
}), ta = ({ instanceName: t, imageItems: e, hasContent: o }) => {
  if (!e || e.length === 0)
    return null;
  const i = "data-current-index", [l, u] = Xn(e[0].title), [d, v] = Xn(e[0].content), h = (S) => {
    const b = e[S];
    u(b.title), v(b.content);
  };
  fo(() => {
    const S = document.querySelector(
      ".image-gallery figcaption .uds-caption-text div"
    );
    if (S) {
      const P = parseInt(
        window.getComputedStyle(S, null).getPropertyValue("width").split("px")[0],
        10
      ), B = e.reduce((L, F) => {
        const H = cu(F.content, P);
        return H > L ? H : L;
      }, 0);
      S.style.height = `${B}px`;
    }
    const b = document.querySelector(`#${t}`);
    function O(P) {
      for (const B of P)
        if (B && B.attributeName === i)
          return h(+b.getAttribute(i));
      return null;
    }
    new MutationObserver(O).observe(b, {
      attributes: !0
    });
  }, [t]);
  const y = e.map((S) => S.imageSource);
  return /* @__PURE__ */ C.jsxs("div", { className: "image-gallery-action-area", "data-has-content": o, children: [
    /* @__PURE__ */ C.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ C.jsxs(Co, { children: [
      /* @__PURE__ */ C.jsx(Eo, {}),
      /* @__PURE__ */ C.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ C.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ C.jsx(
        Yi,
        {
          imageItems: y,
          onItemClick: (S) => h(S)
        }
      ) }) }),
      /* @__PURE__ */ C.jsx(To, {})
    ] }) }),
    o && (l || d) ? /* @__PURE__ */ C.jsx(
      "figcaption",
      {
        id: "caption",
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-gallery-content-container",
        children: /* @__PURE__ */ C.jsxs("div", { className: "uds-caption-text", children: [
          l ? /* @__PURE__ */ C.jsx("h3", { children: l }) : null,
          /* @__PURE__ */ C.jsx("div", { dangerouslySetInnerHTML: { __html: d } })
        ] })
      }
    ) : null
  ] });
};
ta.propTypes = {
  instanceName: p.string,
  imageItems: kn.imageItems,
  hasContent: kn.hasContent
};
const ra = ({
  width: t,
  maxWidth: e,
  imageItems: o = [],
  hasContent: i = !1,
  imageAutoSize: l = !0
}) => {
  const u = o.map(fu), d = o.length > 1;
  return /* @__PURE__ */ C.jsx(
    $r,
    {
      perView: 1,
      maxWidth: e,
      width: t,
      carouselItems: u,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: i ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: l,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: v }) => /* @__PURE__ */ C.jsx(
        ta,
        {
          instanceName: v,
          hasContent: i,
          imageItems: o
        }
      ),
      removeSideBackground: o.length <= 1,
      hasPositionIndicators: d,
      hasNavButtons: d,
      isDraggable: d,
      hasShadow: !0
    }
  );
};
ra.propTypes = {
  imageItems: kn.imageItems.isRequired,
  hasContent: kn.hasContent,
  width: p.string,
  maxWidth: p.string,
  imageAutoSize: p.bool
};
const na = ({ imageSource: t, imageAltText: e, quote: o, itemStyle: i = {} }) => {
  var l, u;
  return /* @__PURE__ */ C.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${t ? "with-image" : ""} ${dn(i.containerCssClass)}`,
      children: [
        t && /* @__PURE__ */ C.jsx(
          go,
          {
            src: t,
            alt: e,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ C.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ C.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ C.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          o.title && /* @__PURE__ */ C.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ C.jsx("span", { className: dn(i.titleCssClass), children: o.title }) }),
          o.content && /* @__PURE__ */ C.jsx(
            "p",
            {
              className: dn(i.contentCssClass),
              "data-testid": "testimonial-content",
              children: o.content
            }
          ),
          (!!((l = o.cite) != null && l.name) || !!((u = o.cite) != null && u.description)) && /* @__PURE__ */ C.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ C.jsx("cite", { className: "name", children: o.cite.name }),
            o.cite && /* @__PURE__ */ C.jsx("cite", { className: "description", children: o.cite.description })
          ] })
        ] })
      ]
    }
  );
};
na.propTypes = {
  quote: p.shape({
    title: p.string,
    content: p.string,
    cite: p.shape({
      name: p.string,
      description: p.string
    })
  }).isRequired,
  imageSource: p.string,
  imageAltText: p.string,
  itemStyle: p.shape({
    containerCssClass: p.arrayOf(p.string),
    titleCssClass: p.arrayOf(p.string),
    contentCssClass: p.arrayOf(p.string)
  })
};
const du = ({ id: t, imageSource: e, imageAltText: o, quote: i }, l = {}) => ({
  // @ts-ignore
  id: t,
  item: /* @__PURE__ */ C.jsx(
    na,
    {
      imageSource: e,
      imageAltText: o,
      quote: i,
      itemStyle: l
    }
  )
}), oa = ({
  width: t,
  maxWidth: e,
  testimonialItems: o = [],
  itemStyle: i = {},
  hasNavButtons: l = !1,
  hasPositionIndicators: u = !1,
  imageAutoSize: d = !0
}) => {
  const v = o.map(
    (h) => du(h, i)
  );
  return /* @__PURE__ */ C.jsx(
    $r,
    {
      perView: 1,
      maxWidth: e,
      width: t,
      carouselItems: v,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: l,
      hasPositionIndicators: u,
      imageAutoSize: d,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
oa.propTypes = {
  testimonialItems: p.arrayOf(
    p.shape({
      title: p.string,
      content: p.string,
      cite: p.shape({
        name: p.string,
        description: p.string
      })
    })
  ).isRequired,
  itemStyle: p.shape({
    containerCssClass: p.arrayOf(p.string),
    titleCssClass: p.arrayOf(p.string),
    contentCssClass: p.arrayOf(p.string)
  }),
  width: p.string,
  maxWidth: p.string,
  imageAutoSize: p.bool,
  hasNavButtons: p.bool,
  hasPositionIndicators: p.bool
};
const pu = (t, e, o) => {
  Ci(o).render(Ct.createElement(t, e));
}, Cn = ({ typeCarousel: t, targetSelector: e, props: o }) => {
  const l = {
    card: Qi,
    testimonial: oa,
    image: ea,
    "image-gallery": ra
  }[t];
  l && pu(l, o, document.querySelector(e));
}, gu = ({ targetSelector: t, props: e }) => Cn({
  typeCarousel: "card",
  targetSelector: t,
  props: e
}), vu = ({ targetSelector: t, props: e }) => {
  Cn({
    typeCarousel: "testimonial",
    targetSelector: t,
    props: e
  });
}, yu = ({ targetSelector: t, props: e }) => {
  Cn({ typeCarousel: "image", targetSelector: t, props: e });
}, wu = ({ targetSelector: t, props: e }) => {
  Cn({
    typeCarousel: "image-gallery",
    targetSelector: t,
    props: e
  });
};
export {
  Qi as CardCarousel,
  ea as ImageCarousel,
  ra as ImageGalleryCarousel,
  oa as TestimonialCarousel,
  gu as initCardCarousel,
  yu as initImageCarousel,
  wu as initImageGalleryCarousel,
  vu as initTestimonialCarousel
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
/** @license React v16.13.1
 * react-is.production.min.js
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
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

(function() {
                var css = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`;
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                document.head.appendChild(style);
              })();