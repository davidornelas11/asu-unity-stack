import Pe, { useId as sn, useRef as Je, useContext as Bt, createElement as ln, forwardRef as cn, useImperativeHandle as un, useState as St, useEffect as Xe, useCallback as fn } from "react";
function Lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dr = { exports: {} }, Ke = {};
var fr;
function pn() {
  if (fr) return Ke;
  fr = 1;
  var e = Pe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, p, v) {
    var S, A = {}, M = null, I = null;
    v !== void 0 && (M = "" + v), p.key !== void 0 && (M = "" + p.key), p.ref !== void 0 && (I = p.ref);
    for (S in p) n.call(p, S) && !l.hasOwnProperty(S) && (A[S] = p[S]);
    if (f && f.defaultProps) for (S in p = f.defaultProps, p) A[S] === void 0 && (A[S] = p[S]);
    return { $$typeof: r, type: f, key: M, ref: I, props: A, _owner: o.current };
  }
  return Ke.Fragment = t, Ke.jsx = s, Ke.jsxs = s, Ke;
}
Dr.exports = pn();
var ne = Dr.exports, Mr = { exports: {} }, Tt = { exports: {} }, W = {};
var pr;
function dn() {
  if (pr) return W;
  pr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, A = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, L = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function x(c) {
    if (typeof c == "object" && c !== null) {
      var Z = c.$$typeof;
      switch (Z) {
        case r:
          switch (c = c.type, c) {
            case p:
            case v:
            case n:
            case l:
            case o:
            case A:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case f:
                case S:
                case C:
                case I:
                case s:
                  return c;
                default:
                  return Z;
              }
          }
        case t:
          return Z;
      }
    }
  }
  function E(c) {
    return x(c) === v;
  }
  return W.AsyncMode = p, W.ConcurrentMode = v, W.ContextConsumer = f, W.ContextProvider = s, W.Element = r, W.ForwardRef = S, W.Fragment = n, W.Lazy = C, W.Memo = I, W.Portal = t, W.Profiler = l, W.StrictMode = o, W.Suspense = A, W.isAsyncMode = function(c) {
    return E(c) || x(c) === p;
  }, W.isConcurrentMode = E, W.isContextConsumer = function(c) {
    return x(c) === f;
  }, W.isContextProvider = function(c) {
    return x(c) === s;
  }, W.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, W.isForwardRef = function(c) {
    return x(c) === S;
  }, W.isFragment = function(c) {
    return x(c) === n;
  }, W.isLazy = function(c) {
    return x(c) === C;
  }, W.isMemo = function(c) {
    return x(c) === I;
  }, W.isPortal = function(c) {
    return x(c) === t;
  }, W.isProfiler = function(c) {
    return x(c) === l;
  }, W.isStrictMode = function(c) {
    return x(c) === o;
  }, W.isSuspense = function(c) {
    return x(c) === A;
  }, W.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === v || c === l || c === o || c === A || c === M || typeof c == "object" && c !== null && (c.$$typeof === C || c.$$typeof === I || c.$$typeof === s || c.$$typeof === f || c.$$typeof === S || c.$$typeof === w || c.$$typeof === F || c.$$typeof === R || c.$$typeof === L);
  }, W.typeOf = x, W;
}
var dr;
function Fr() {
  return dr || (dr = 1, Tt.exports = dn()), Tt.exports;
}
var wt, mr;
function mn() {
  if (mr) return wt;
  mr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Et, hr;
function hn() {
  if (hr) return Et;
  hr = 1;
  var e = mn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Et = function() {
    function n(s, f, p, v, S, A) {
      if (A !== e) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var l = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, Et;
}
Mr.exports = hn()();
var vn = Mr.exports;
const U = /* @__PURE__ */ Lr(vn), yn = "staticMarkup";
function jr() {
  const r = sn().indexOf(yn) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
function De(e) {
  "@babel/helpers - typeof";
  return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, De(e);
}
function Lt(e, r) {
  return Lt = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Lt(e, r);
}
function gn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ut(e, r, t) {
  return gn() ? ut = Reflect.construct : ut = function(o, l, s) {
    var f = [null];
    f.push.apply(f, l);
    var p = Function.bind.apply(o, f), v = new p();
    return s && Lt(v, s.prototype), v;
  }, ut.apply(null, arguments);
}
function we(e) {
  return bn(e) || An(e) || _n(e) || Sn();
}
function bn(e) {
  if (Array.isArray(e)) return Dt(e);
}
function An(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _n(e, r) {
  if (e) {
    if (typeof e == "string") return Dt(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Dt(e, r);
  }
}
function Dt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Sn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tn = Object.hasOwnProperty, vr = Object.setPrototypeOf, wn = Object.isFrozen, En = Object.getPrototypeOf, Cn = Object.getOwnPropertyDescriptor, de = Object.freeze, _e = Object.seal, Rn = Object.create, zr = typeof Reflect < "u" && Reflect, dt = zr.apply, Mt = zr.construct;
dt || (dt = function(r, t, n) {
  return r.apply(t, n);
});
de || (de = function(r) {
  return r;
});
_e || (_e = function(r) {
  return r;
});
Mt || (Mt = function(r, t) {
  return ut(r, we(t));
});
var On = Se(Array.prototype.forEach), yr = Se(Array.prototype.pop), Ze = Se(Array.prototype.push), ft = Se(String.prototype.toLowerCase), Ct = Se(String.prototype.toString), gr = Se(String.prototype.match), Te = Se(String.prototype.replace), xn = Se(String.prototype.indexOf), kn = Se(String.prototype.trim), le = Se(RegExp.prototype.test), Rt = Nn(TypeError);
function Se(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    return dt(e, r, n);
  };
}
function Nn(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Mt(e, t);
  };
}
function P(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : ft, vr && vr(e, null);
  for (var o = r.length; o--; ) {
    var l = r[o];
    if (typeof l == "string") {
      var s = t(l);
      s !== l && (wn(r) || (r[o] = s), l = s);
    }
    e[l] = !0;
  }
  return e;
}
function Ue(e) {
  var r = Rn(null), t;
  for (t in e)
    dt(Tn, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function ot(e, r) {
  for (; e !== null; ) {
    var t = Cn(e, r);
    if (t) {
      if (t.get)
        return Se(t.get);
      if (typeof t.value == "function")
        return Se(t.value);
    }
    e = En(e);
  }
  function n(o) {
    return console.warn("fallback value for", o), null;
  }
  return n;
}
var br = de(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ot = de(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xt = de(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), In = de(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kt = de(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Pn = de(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ar = de(["#text"]), _r = de(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Nt = de(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sr = de(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), it = de(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ln = _e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Dn = _e(/<%[\w\W]*|[\w\W]*%>/gm), Mn = _e(/\${[\w\W]*}/gm), Fn = _e(/^data-[\-\w.\u00B7-\uFFFF]/), jn = _e(/^aria-[\-\w]+$/), zn = _e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), $n = _e(/^(?:\w+script|data):/i), Un = _e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hn = _e(/^html$/i), Wn = _e(/^[a-z][.\w]*(-[.\w]+)+$/i), Bn = function() {
  return typeof window > "u" ? null : window;
}, Gn = function(r, t) {
  if (De(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, o = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
  var l = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(l, {
      createHTML: function(f) {
        return f;
      },
      createScriptURL: function(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function $r() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bn(), r = function(a) {
    return $r(a);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, o = e.DocumentFragment, l = e.HTMLTemplateElement, s = e.Node, f = e.Element, p = e.NodeFilter, v = e.NamedNodeMap, S = v === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : v, A = e.HTMLFormElement, M = e.DOMParser, I = e.trustedTypes, C = f.prototype, L = ot(C, "cloneNode"), w = ot(C, "nextSibling"), F = ot(C, "childNodes"), R = ot(C, "parentNode");
  if (typeof l == "function") {
    var x = n.createElement("template");
    x.content && x.content.ownerDocument && (n = x.content.ownerDocument);
  }
  var E = Gn(I, t), c = E ? E.createHTML("") : "", Z = n, fe = Z.implementation, ie = Z.createNodeIterator, N = Z.createDocumentFragment, Y = Z.getElementsByTagName, ye = t.importNode, te = {};
  try {
    te = Ue(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var G = {};
  r.isSupported = typeof R == "function" && fe && fe.createHTMLDocument !== void 0 && te !== 9;
  var ce = Ln, ae = Dn, Ce = Mn, ge = Fn, me = jn, Fe = $n, Re = Un, je = Wn, g = zn, m = null, y = P({}, [].concat(we(br), we(Ot), we(xt), we(kt), we(Ar))), b = null, i = P({}, [].concat(we(_r), we(Nt), we(Sr), we(it))), T = Object.seal(Object.create(null, {
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
  })), d = null, V = null, $ = !0, j = !0, k = !1, ee = !0, Q = !1, D = !0, X = !1, z = !1, J = !1, be = !1, K = !1, Oe = !1, Le = !0, he = !1, O = "user-content-", q = !0, xe = !1, Ee = {}, pe = null, Kt = P({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Zt = null, Qt = P({}, ["audio", "video", "img", "source", "image", "track"]), vt = null, Jt = P({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tt = "http://www.w3.org/1998/Math/MathML", rt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml", We = ke, yt = !1, gt = null, Jr = P({}, [tt, rt, ke], Ct), ze, en = ["application/xhtml+xml", "text/html"], tn = "text/html", oe, Be = null, rn = n.createElement("form"), er = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, bt = function(a) {
    Be && Be === a || ((!a || De(a) !== "object") && (a = {}), a = Ue(a), ze = // eslint-disable-next-line unicorn/prefer-includes
    en.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? ze = tn : ze = a.PARSER_MEDIA_TYPE, oe = ze === "application/xhtml+xml" ? Ct : ft, m = "ALLOWED_TAGS" in a ? P({}, a.ALLOWED_TAGS, oe) : y, b = "ALLOWED_ATTR" in a ? P({}, a.ALLOWED_ATTR, oe) : i, gt = "ALLOWED_NAMESPACES" in a ? P({}, a.ALLOWED_NAMESPACES, Ct) : Jr, vt = "ADD_URI_SAFE_ATTR" in a ? P(
      Ue(Jt),
      // eslint-disable-line indent
      a.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      oe
      // eslint-disable-line indent
    ) : Jt, Zt = "ADD_DATA_URI_TAGS" in a ? P(
      Ue(Qt),
      // eslint-disable-line indent
      a.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      oe
      // eslint-disable-line indent
    ) : Qt, pe = "FORBID_CONTENTS" in a ? P({}, a.FORBID_CONTENTS, oe) : Kt, d = "FORBID_TAGS" in a ? P({}, a.FORBID_TAGS, oe) : {}, V = "FORBID_ATTR" in a ? P({}, a.FORBID_ATTR, oe) : {}, Ee = "USE_PROFILES" in a ? a.USE_PROFILES : !1, $ = a.ALLOW_ARIA_ATTR !== !1, j = a.ALLOW_DATA_ATTR !== !1, k = a.ALLOW_UNKNOWN_PROTOCOLS || !1, ee = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = a.SAFE_FOR_TEMPLATES || !1, D = a.SAFE_FOR_XML !== !1, X = a.WHOLE_DOCUMENT || !1, be = a.RETURN_DOM || !1, K = a.RETURN_DOM_FRAGMENT || !1, Oe = a.RETURN_TRUSTED_TYPE || !1, J = a.FORCE_BODY || !1, Le = a.SANITIZE_DOM !== !1, he = a.SANITIZE_NAMED_PROPS || !1, q = a.KEEP_CONTENT !== !1, xe = a.IN_PLACE || !1, g = a.ALLOWED_URI_REGEXP || g, We = a.NAMESPACE || ke, T = a.CUSTOM_ELEMENT_HANDLING || {}, a.CUSTOM_ELEMENT_HANDLING && er(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = a.CUSTOM_ELEMENT_HANDLING.tagNameCheck), a.CUSTOM_ELEMENT_HANDLING && er(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), a.CUSTOM_ELEMENT_HANDLING && typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Q && (j = !1), K && (be = !0), Ee && (m = P({}, we(Ar)), b = [], Ee.html === !0 && (P(m, br), P(b, _r)), Ee.svg === !0 && (P(m, Ot), P(b, Nt), P(b, it)), Ee.svgFilters === !0 && (P(m, xt), P(b, Nt), P(b, it)), Ee.mathMl === !0 && (P(m, kt), P(b, Sr), P(b, it))), a.ADD_TAGS && (m === y && (m = Ue(m)), P(m, a.ADD_TAGS, oe)), a.ADD_ATTR && (b === i && (b = Ue(b)), P(b, a.ADD_ATTR, oe)), a.ADD_URI_SAFE_ATTR && P(vt, a.ADD_URI_SAFE_ATTR, oe), a.FORBID_CONTENTS && (pe === Kt && (pe = Ue(pe)), P(pe, a.FORBID_CONTENTS, oe)), q && (m["#text"] = !0), X && P(m, ["html", "head", "body"]), m.table && (P(m, ["tbody"]), delete d.tbody), de && de(a), Be = a);
  }, tr = P({}, ["mi", "mo", "mn", "ms", "mtext"]), rr = P({}, ["annotation-xml"]), nn = P({}, ["title", "style", "font", "a", "script"]), nt = P({}, Ot);
  P(nt, xt), P(nt, In);
  var At = P({}, kt);
  P(At, Pn);
  var an = function(a) {
    var u = R(a);
    (!u || !u.tagName) && (u = {
      namespaceURI: We,
      tagName: "template"
    });
    var h = ft(a.tagName), H = ft(u.tagName);
    return gt[a.namespaceURI] ? a.namespaceURI === rt ? u.namespaceURI === ke ? h === "svg" : u.namespaceURI === tt ? h === "svg" && (H === "annotation-xml" || tr[H]) : !!nt[h] : a.namespaceURI === tt ? u.namespaceURI === ke ? h === "math" : u.namespaceURI === rt ? h === "math" && rr[H] : !!At[h] : a.namespaceURI === ke ? u.namespaceURI === rt && !rr[H] || u.namespaceURI === tt && !tr[H] ? !1 : !At[h] && (nn[h] || !nt[h]) : !!(ze === "application/xhtml+xml" && gt[a.namespaceURI]) : !1;
  }, Ae = function(a) {
    Ze(r.removed, {
      element: a
    });
    try {
      a.parentNode.removeChild(a);
    } catch {
      try {
        a.outerHTML = c;
      } catch {
        a.remove();
      }
    }
  }, at = function(a, u) {
    try {
      Ze(r.removed, {
        attribute: u.getAttributeNode(a),
        from: u
      });
    } catch {
      Ze(r.removed, {
        attribute: null,
        from: u
      });
    }
    if (u.removeAttribute(a), a === "is" && !b[a])
      if (be || K)
        try {
          Ae(u);
        } catch {
        }
      else
        try {
          u.setAttribute(a, "");
        } catch {
        }
  }, nr = function(a) {
    var u, h;
    if (J)
      a = "<remove></remove>" + a;
    else {
      var H = gr(a, /^[\r\n\t ]+/);
      h = H && H[0];
    }
    ze === "application/xhtml+xml" && We === ke && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    var ve = E ? E.createHTML(a) : a;
    if (We === ke)
      try {
        u = new M().parseFromString(ve, ze);
      } catch {
      }
    if (!u || !u.documentElement) {
      u = fe.createDocument(We, "template", null);
      try {
        u.documentElement.innerHTML = yt ? c : ve;
      } catch {
      }
    }
    var ue = u.body || u.documentElement;
    return a && h && ue.insertBefore(n.createTextNode(h), ue.childNodes[0] || null), We === ke ? Y.call(u, X ? "html" : "body")[0] : X ? u.documentElement : ue;
  }, ar = function(a) {
    return ie.call(
      a.ownerDocument || a,
      a,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, or = function(a) {
    return a instanceof A && (typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || !(a.attributes instanceof S) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function");
  }, qe = function(a) {
    return De(s) === "object" ? a instanceof s : a && De(a) === "object" && typeof a.nodeType == "number" && typeof a.nodeName == "string";
  }, Ne = function(a, u, h) {
    G[a] && On(G[a], function(H) {
      H.call(r, u, h, Be);
    });
  }, ir = function(a) {
    var u;
    if (Ne("beforeSanitizeElements", a, null), or(a) || le(/[\u0080-\uFFFF]/, a.nodeName))
      return Ae(a), !0;
    var h = oe(a.nodeName);
    if (Ne("uponSanitizeElement", a, {
      tagName: h,
      allowedTags: m
    }), a.hasChildNodes() && !qe(a.firstElementChild) && (!qe(a.content) || !qe(a.content.firstElementChild)) && le(/<[/\w]/g, a.innerHTML) && le(/<[/\w]/g, a.textContent) || h === "select" && le(/<template/i, a.innerHTML) || a.nodeType === 7 || D && a.nodeType === 8 && le(/<[/\w]/g, a.data))
      return Ae(a), !0;
    if (!m[h] || d[h]) {
      if (!d[h] && lr(h) && (T.tagNameCheck instanceof RegExp && le(T.tagNameCheck, h) || T.tagNameCheck instanceof Function && T.tagNameCheck(h)))
        return !1;
      if (q && !pe[h]) {
        var H = R(a) || a.parentNode, ve = F(a) || a.childNodes;
        if (ve && H)
          for (var ue = ve.length, se = ue - 1; se >= 0; --se) {
            var $e = L(ve[se], !0);
            $e.__removalCount = (a.__removalCount || 0) + 1, H.insertBefore($e, w(a));
          }
      }
      return Ae(a), !0;
    }
    return a instanceof f && !an(a) || (h === "noscript" || h === "noembed" || h === "noframes") && le(/<\/no(script|embed|frames)/i, a.innerHTML) ? (Ae(a), !0) : (Q && a.nodeType === 3 && (u = a.textContent, u = Te(u, ce, " "), u = Te(u, ae, " "), u = Te(u, Ce, " "), a.textContent !== u && (Ze(r.removed, {
      element: a.cloneNode()
    }), a.textContent = u)), Ne("afterSanitizeElements", a, null), !1);
  }, sr = function(a, u, h) {
    if (Le && (u === "id" || u === "name") && (h in n || h in rn))
      return !1;
    if (!(j && !V[u] && le(ge, u))) {
      if (!($ && le(me, u))) {
        if (!b[u] || V[u]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(lr(a) && (T.tagNameCheck instanceof RegExp && le(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)) && (T.attributeNameCheck instanceof RegExp && le(T.attributeNameCheck, u) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            u === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && le(T.tagNameCheck, h) || T.tagNameCheck instanceof Function && T.tagNameCheck(h)))
          ) return !1;
        } else if (!vt[u]) {
          if (!le(g, Te(h, Re, ""))) {
            if (!((u === "src" || u === "xlink:href" || u === "href") && a !== "script" && xn(h, "data:") === 0 && Zt[a])) {
              if (!(k && !le(Fe, Te(h, Re, "")))) {
                if (h)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, lr = function(a) {
    return a !== "annotation-xml" && gr(a, je);
  }, cr = function(a) {
    var u, h, H, ve;
    Ne("beforeSanitizeAttributes", a, null);
    var ue = a.attributes;
    if (ue) {
      var se = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: b
      };
      for (ve = ue.length; ve--; ) {
        u = ue[ve];
        var $e = u, re = $e.name, _t = $e.namespaceURI;
        if (h = re === "value" ? u.value : kn(u.value), H = oe(re), se.attrName = H, se.attrValue = h, se.keepAttr = !0, se.forceKeepAttr = void 0, Ne("uponSanitizeAttribute", a, se), h = se.attrValue, !se.forceKeepAttr && (at(re, a), !!se.keepAttr)) {
          if (!ee && le(/\/>/i, h)) {
            at(re, a);
            continue;
          }
          Q && (h = Te(h, ce, " "), h = Te(h, ae, " "), h = Te(h, Ce, " "));
          var ur = oe(a.nodeName);
          if (sr(ur, H, h)) {
            if (he && (H === "id" || H === "name") && (at(re, a), h = O + h), D && le(/((--!?|])>)|<\/(style|title)/i, h)) {
              at(re, a);
              continue;
            }
            if (E && De(I) === "object" && typeof I.getAttributeType == "function" && !_t)
              switch (I.getAttributeType(ur, H)) {
                case "TrustedHTML": {
                  h = E.createHTML(h);
                  break;
                }
                case "TrustedScriptURL": {
                  h = E.createScriptURL(h);
                  break;
                }
              }
            try {
              _t ? a.setAttributeNS(_t, re, h) : a.setAttribute(re, h), or(a) ? Ae(a) : yr(r.removed);
            } catch {
            }
          }
        }
      }
      Ne("afterSanitizeAttributes", a, null);
    }
  }, on = function _(a) {
    var u, h = ar(a);
    for (Ne("beforeSanitizeShadowDOM", a, null); u = h.nextNode(); )
      Ne("uponSanitizeShadowNode", u, null), !ir(u) && (u.content instanceof o && _(u.content), cr(u));
    Ne("afterSanitizeShadowDOM", a, null);
  };
  return r.sanitize = function(_) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u, h, H, ve, ue;
    if (yt = !_, yt && (_ = "<!-->"), typeof _ != "string" && !qe(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw Rt("dirty is not a string, aborting");
      } else
        throw Rt("toString is not a function");
    if (!r.isSupported) {
      if (De(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof _ == "string")
          return e.toStaticHTML(_);
        if (qe(_))
          return e.toStaticHTML(_.outerHTML);
      }
      return _;
    }
    if (z || bt(a), r.removed = [], typeof _ == "string" && (xe = !1), xe) {
      if (_.nodeName) {
        var se = oe(_.nodeName);
        if (!m[se] || d[se])
          throw Rt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof s)
      u = nr("<!---->"), h = u.ownerDocument.importNode(_, !0), h.nodeType === 1 && h.nodeName === "BODY" || h.nodeName === "HTML" ? u = h : u.appendChild(h);
    else {
      if (!be && !Q && !X && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return E && Oe ? E.createHTML(_) : _;
      if (u = nr(_), !u)
        return be ? null : Oe ? c : "";
    }
    u && J && Ae(u.firstChild);
    for (var $e = ar(xe ? _ : u); H = $e.nextNode(); )
      H.nodeType === 3 && H === ve || ir(H) || (H.content instanceof o && on(H.content), cr(H), ve = H);
    if (ve = null, xe)
      return _;
    if (be) {
      if (K)
        for (ue = N.call(u.ownerDocument); u.firstChild; )
          ue.appendChild(u.firstChild);
      else
        ue = u;
      return (b.shadowroot || b.shadowrootmod) && (ue = ye.call(t, ue, !0)), ue;
    }
    var re = X ? u.outerHTML : u.innerHTML;
    return X && m["!doctype"] && u.ownerDocument && u.ownerDocument.doctype && u.ownerDocument.doctype.name && le(Hn, u.ownerDocument.doctype.name) && (re = "<!DOCTYPE " + u.ownerDocument.doctype.name + `>
` + re), Q && (re = Te(re, ce, " "), re = Te(re, ae, " "), re = Te(re, Ce, " ")), E && Oe ? E.createHTML(re) : re;
  }, r.setConfig = function(_) {
    bt(_), z = !0;
  }, r.clearConfig = function() {
    Be = null, z = !1;
  }, r.isValidAttribute = function(_, a, u) {
    Be || bt({});
    var h = oe(_), H = oe(a);
    return sr(h, H, u);
  }, r.addHook = function(_, a) {
    typeof a == "function" && (G[_] = G[_] || [], Ze(G[_], a));
  }, r.removeHook = function(_) {
    if (G[_])
      return yr(G[_]);
  }, r.removeHooks = function(_) {
    G[_] && (G[_] = []);
  }, r.removeAllHooks = function() {
    G = {};
  }, r;
}
$r();
U.shape({
  event: U.string,
  action: U.string,
  name: U.string,
  region: U.string,
  section: U.string,
  component: U.string,
  type: U.string,
  text: U.string
});
const Vn = ({
  event: e = "",
  action: r = "",
  name: t = "",
  type: n = "",
  section: o = "",
  text: l = "",
  region: s = "",
  component: f = ""
}) => {
  const { dataLayer: p } = window, v = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: s.toLowerCase(),
    section: o.toLowerCase(),
    text: l.toLowerCase(),
    component: f.toLowerCase()
  };
  p && p.push(v);
}, Ft = ({ gaData: e, prefix: r = "", children: t }) => {
  const { isReact: n } = jr(), { onClick: o, ...l } = t.props;
  if (n)
    return Pe.cloneElement(t, {
      ...l,
      onClick: (p) => (Vn(e), o ? o(p) : !0)
    });
  let s = "";
  ["input", "header", "header-input"].includes(r) && (s = `-${r}`);
  const f = {
    [`data-ga${s}`]: e.text,
    [`data-ga${s}-name`]: e.name,
    [`data-ga${s}-event`]: e.event,
    [`data-ga${s}-action`]: e.action,
    [`data-ga${s}-type`]: e.type,
    [`data-ga${s}-region`]: e.region,
    [`data-ga${s}-section`]: e.section,
    [`data-ga${s}-component`]: e.component
  };
  return Pe.cloneElement(t, {
    ...l,
    onClick: o,
    ...f
  });
};
var Gt = Fr();
function Yn(e) {
  function r(g, m, y, b, i) {
    for (var T = 0, d = 0, V = 0, $ = 0, j, k, ee = 0, Q = 0, D, X = D = j = 0, z = 0, J = 0, be = 0, K = 0, Oe = y.length, Le = Oe - 1, he, O = "", q = "", xe = "", Ee = "", pe; z < Oe; ) {
      if (k = y.charCodeAt(z), z === Le && d + $ + V + T !== 0 && (d !== 0 && (k = d === 47 ? 10 : 47), $ = V = T = 0, Oe++, Le++), d + $ + V + T === 0) {
        if (z === Le && (0 < J && (O = O.replace(M, "")), 0 < O.trim().length)) {
          switch (k) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              O += y.charAt(z);
          }
          k = 59;
        }
        switch (k) {
          case 123:
            for (O = O.trim(), j = O.charCodeAt(0), D = 1, K = ++z; z < Oe; ) {
              switch (k = y.charCodeAt(z)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (k = y.charCodeAt(z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (X = z + 1; X < Le; ++X)
                          switch (y.charCodeAt(X)) {
                            case 47:
                              if (k === 42 && y.charCodeAt(X - 1) === 42 && z + 2 !== X) {
                                z = X + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (k === 47) {
                                z = X + 1;
                                break e;
                              }
                          }
                        z = X;
                      }
                  }
                  break;
                case 91:
                  k++;
                case 40:
                  k++;
                case 34:
                case 39:
                  for (; z++ < Le && y.charCodeAt(z) !== k; )
                    ;
              }
              if (D === 0) break;
              z++;
            }
            switch (D = y.substring(K, z), j === 0 && (j = (O = O.replace(A, "").trim()).charCodeAt(0)), j) {
              case 64:
                switch (0 < J && (O = O.replace(M, "")), k = O.charCodeAt(1), k) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    J = m;
                    break;
                  default:
                    J = Ce;
                }
                if (D = r(m, J, D, k, i + 1), K = D.length, 0 < me && (J = t(Ce, O, be), pe = f(3, D, J, m, G, te, K, k, i, b), O = J.join(""), pe !== void 0 && (K = (D = pe.trim()).length) === 0 && (k = 0, D = "")), 0 < K) switch (k) {
                  case 115:
                    O = O.replace(Z, s);
                  case 100:
                  case 109:
                  case 45:
                    D = O + "{" + D + "}";
                    break;
                  case 107:
                    O = O.replace(R, "$1 $2"), D = O + "{" + D + "}", D = ae === 1 || ae === 2 && l("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                    break;
                  default:
                    D = O + D, b === 112 && (D = (q += D, ""));
                }
                else D = "";
                break;
              default:
                D = r(m, t(m, O, be), D, b, i + 1);
            }
            xe += D, D = be = J = X = j = 0, O = "", k = y.charCodeAt(++z);
            break;
          case 125:
          case 59:
            if (O = (0 < J ? O.replace(M, "") : O).trim(), 1 < (K = O.length)) switch (X === 0 && (j = O.charCodeAt(0), j === 45 || 96 < j && 123 > j) && (K = (O = O.replace(" ", ":")).length), 0 < me && (pe = f(1, O, m, g, G, te, q.length, b, i, b)) !== void 0 && (K = (O = pe.trim()).length) === 0 && (O = "\0\0"), j = O.charCodeAt(0), k = O.charCodeAt(1), j) {
              case 0:
                break;
              case 64:
                if (k === 105 || k === 99) {
                  Ee += O + y.charAt(z);
                  break;
                }
              default:
                O.charCodeAt(K - 1) !== 58 && (q += o(O, j, k, O.charCodeAt(2)));
            }
            be = J = X = j = 0, O = "", k = y.charCodeAt(++z);
        }
      }
      switch (k) {
        case 13:
        case 10:
          d === 47 ? d = 0 : 1 + j === 0 && b !== 107 && 0 < O.length && (J = 1, O += "\0"), 0 < me * Re && f(0, O, m, g, G, te, q.length, b, i, b), te = 1, G++;
          break;
        case 59:
        case 125:
          if (d + $ + V + T === 0) {
            te++;
            break;
          }
        default:
          switch (te++, he = y.charAt(z), k) {
            case 9:
            case 32:
              if ($ + T + d === 0) switch (ee) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  k !== 32 && (he = " ");
              }
              break;
            case 0:
              he = "\\0";
              break;
            case 12:
              he = "\\f";
              break;
            case 11:
              he = "\\v";
              break;
            case 38:
              $ + d + T === 0 && (J = be = 1, he = "\f" + he);
              break;
            case 108:
              if ($ + d + T + ce === 0 && 0 < X) switch (z - X) {
                case 2:
                  ee === 112 && y.charCodeAt(z - 3) === 58 && (ce = ee);
                case 8:
                  Q === 111 && (ce = Q);
              }
              break;
            case 58:
              $ + d + T === 0 && (X = z);
              break;
            case 44:
              d + V + $ + T === 0 && (J = 1, he += "\r");
              break;
            case 34:
            case 39:
              d === 0 && ($ = $ === k ? 0 : $ === 0 ? k : $);
              break;
            case 91:
              $ + d + V === 0 && T++;
              break;
            case 93:
              $ + d + V === 0 && T--;
              break;
            case 41:
              $ + d + T === 0 && V--;
              break;
            case 40:
              if ($ + d + T === 0) {
                if (j === 0) switch (2 * ee + 3 * Q) {
                  case 533:
                    break;
                  default:
                    j = 1;
                }
                V++;
              }
              break;
            case 64:
              d + V + $ + T + X + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < $ + T + V)) switch (d) {
                case 0:
                  switch (2 * k + 3 * y.charCodeAt(z + 1)) {
                    case 235:
                      d = 47;
                      break;
                    case 220:
                      K = z, d = 42;
                  }
                  break;
                case 42:
                  k === 47 && ee === 42 && K + 2 !== z && (y.charCodeAt(K + 2) === 33 && (q += y.substring(K, z + 1)), he = "", d = 0);
              }
          }
          d === 0 && (O += he);
      }
      Q = ee, ee = k, z++;
    }
    if (K = q.length, 0 < K) {
      if (J = m, 0 < me && (pe = f(2, q, J, g, G, te, K, b, i, b), pe !== void 0 && (q = pe).length === 0)) return Ee + q + xe;
      if (q = J.join(",") + "{" + q + "}", ae * ce !== 0) {
        switch (ae !== 2 || l(q, 2) || (ce = 0), ce) {
          case 111:
            q = q.replace(E, ":-moz-$1") + q;
            break;
          case 112:
            q = q.replace(x, "::-webkit-input-$1") + q.replace(x, "::-moz-$1") + q.replace(x, ":-ms-input-$1") + q;
        }
        ce = 0;
      }
    }
    return Ee + q + xe;
  }
  function t(g, m, y) {
    var b = m.trim().split(w);
    m = b;
    var i = b.length, T = g.length;
    switch (T) {
      case 0:
      case 1:
        var d = 0;
        for (g = T === 0 ? "" : g[0] + " "; d < i; ++d)
          m[d] = n(g, m[d], y).trim();
        break;
      default:
        var V = d = 0;
        for (m = []; d < i; ++d)
          for (var $ = 0; $ < T; ++$)
            m[V++] = n(g[$] + " ", b[d], y).trim();
    }
    return m;
  }
  function n(g, m, y) {
    var b = m.charCodeAt(0);
    switch (33 > b && (b = (m = m.trim()).charCodeAt(0)), b) {
      case 38:
        return m.replace(F, "$1" + g.trim());
      case 58:
        return g.trim() + m.replace(F, "$1" + g.trim());
      default:
        if (0 < 1 * y && 0 < m.indexOf("\f")) return m.replace(F, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + m;
  }
  function o(g, m, y, b) {
    var i = g + ";", T = 2 * m + 3 * y + 4 * b;
    if (T === 944) {
      g = i.indexOf(":", 9) + 1;
      var d = i.substring(g, i.length - 1).trim();
      return d = i.substring(0, g).trim() + d + ";", ae === 1 || ae === 2 && l(d, 1) ? "-webkit-" + d + d : d;
    }
    if (ae === 0 || ae === 2 && !l(i, 1)) return i;
    switch (T) {
      case 1015:
        return i.charCodeAt(10) === 97 ? "-webkit-" + i + i : i;
      case 951:
        return i.charCodeAt(3) === 116 ? "-webkit-" + i + i : i;
      case 963:
        return i.charCodeAt(5) === 110 ? "-webkit-" + i + i : i;
      case 1009:
        if (i.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + i + i;
      case 978:
        return "-webkit-" + i + "-moz-" + i + i;
      case 1019:
      case 983:
        return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
      case 883:
        if (i.charCodeAt(8) === 45) return "-webkit-" + i + i;
        if (0 < i.indexOf("image-set(", 11)) return i.replace(ye, "$1-webkit-$2") + i;
        break;
      case 932:
        if (i.charCodeAt(4) === 45) switch (i.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
          case 115:
            return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
          case 98:
            return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i;
        }
        return "-webkit-" + i + "-ms-" + i + i;
      case 964:
        return "-webkit-" + i + "-ms-flex-" + i + i;
      case 1023:
        if (i.charCodeAt(8) !== 99) break;
        return d = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + d + "-webkit-" + i + "-ms-flex-pack" + d + i;
      case 1005:
        return C.test(i) ? i.replace(I, ":-webkit-") + i.replace(I, ":-moz-") + i : i;
      case 1e3:
        switch (d = i.substring(13).trim(), m = d.indexOf("-") + 1, d.charCodeAt(0) + d.charCodeAt(m)) {
          case 226:
            d = i.replace(c, "tb");
            break;
          case 232:
            d = i.replace(c, "tb-rl");
            break;
          case 220:
            d = i.replace(c, "lr");
            break;
          default:
            return i;
        }
        return "-webkit-" + i + "-ms-" + d + i;
      case 1017:
        if (i.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (m = (i = g).length - 10, d = (i.charCodeAt(m) === 33 ? i.substring(0, m) : i).substring(g.indexOf(":", 7) + 1).trim(), T = d.charCodeAt(0) + (d.charCodeAt(7) | 0)) {
          case 203:
            if (111 > d.charCodeAt(8)) break;
          case 115:
            i = i.replace(d, "-webkit-" + d) + ";" + i;
            break;
          case 207:
          case 102:
            i = i.replace(d, "-webkit-" + (102 < T ? "inline-" : "") + "box") + ";" + i.replace(d, "-webkit-" + d) + ";" + i.replace(d, "-ms-" + d + "box") + ";" + i;
        }
        return i + ";";
      case 938:
        if (i.charCodeAt(5) === 45) switch (i.charCodeAt(6)) {
          case 105:
            return d = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + d + "-ms-flex-" + d + i;
          case 115:
            return "-webkit-" + i + "-ms-flex-item-" + i.replace(ie, "") + i;
          default:
            return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(ie, "") + i;
        }
        break;
      case 973:
      case 989:
        if (i.charCodeAt(3) !== 45 || i.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Y.test(g) === !0) return (d = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(g.replace("stretch", "fill-available"), m, y, b).replace(":fill-available", ":stretch") : i.replace(d, "-webkit-" + d) + i.replace(d, "-moz-" + d.replace("fill-", "")) + i;
        break;
      case 962:
        if (i = "-webkit-" + i + (i.charCodeAt(5) === 102 ? "-ms-" + i : "") + i, y + b === 211 && i.charCodeAt(13) === 105 && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(L, "$1-webkit-$2") + i;
    }
    return i;
  }
  function l(g, m) {
    var y = g.indexOf(m === 1 ? ":" : "{"), b = g.substring(0, m !== 3 ? y : 10);
    return y = g.substring(y + 1, g.length - 1), Fe(m !== 2 ? b : b.replace(N, "$1"), y, m);
  }
  function s(g, m) {
    var y = o(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return y !== m + ";" ? y.replace(fe, " or ($1)").substring(4) : "(" + m + ")";
  }
  function f(g, m, y, b, i, T, d, V, $, j) {
    for (var k = 0, ee = m, Q; k < me; ++k)
      switch (Q = ge[k].call(S, g, ee, y, b, i, T, d, V, $, j)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ee = Q;
      }
    if (ee !== m) return ee;
  }
  function p(g) {
    switch (g) {
      case void 0:
      case null:
        me = ge.length = 0;
        break;
      default:
        if (typeof g == "function") ge[me++] = g;
        else if (typeof g == "object") for (var m = 0, y = g.length; m < y; ++m)
          p(g[m]);
        else Re = !!g | 0;
    }
    return p;
  }
  function v(g) {
    return g = g.prefix, g !== void 0 && (Fe = null, g ? typeof g != "function" ? ae = 1 : (ae = 2, Fe = g) : ae = 0), v;
  }
  function S(g, m) {
    var y = g;
    if (33 > y.charCodeAt(0) && (y = y.trim()), je = y, y = [je], 0 < me) {
      var b = f(-1, m, y, y, G, te, 0, 0, 0, 0);
      b !== void 0 && typeof b == "string" && (m = b);
    }
    var i = r(Ce, y, m, 0, 0);
    return 0 < me && (b = f(-2, i, y, y, G, te, i.length, 0, 0, 0), b !== void 0 && (i = b)), je = "", ce = 0, te = G = 1, i;
  }
  var A = /^\0+/g, M = /[\0\r\f]/g, I = /: */g, C = /zoo|gra/, L = /([,: ])(transform)/g, w = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, x = /::(place)/g, E = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, Z = /\(\s*(.*)\s*\)/g, fe = /([\s\S]*?);/g, ie = /-self|flex-/g, N = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Y = /stretch|:\s*\w+\-(?:conte|avail)/, ye = /([^-])(image-set\()/, te = 1, G = 1, ce = 0, ae = 1, Ce = [], ge = [], me = 0, Fe = null, Re = 0, je = "";
  return S.use = p, S.set = v, e !== void 0 && v(e), S;
}
var qn = {
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
function Xn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Kn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Tr = /* @__PURE__ */ Xn(
  function(e) {
    return Kn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vt = Fr(), Zn = {
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
}, Qn = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Jn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ur = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Yt = {};
Yt[Vt.ForwardRef] = Jn;
Yt[Vt.Memo] = Ur;
function wr(e) {
  return Vt.isMemo(e) ? Ur : Yt[e.$$typeof] || Zn;
}
var ea = Object.defineProperty, ta = Object.getOwnPropertyNames, Er = Object.getOwnPropertySymbols, ra = Object.getOwnPropertyDescriptor, na = Object.getPrototypeOf, Cr = Object.prototype;
function Hr(e, r, t) {
  if (typeof r != "string") {
    if (Cr) {
      var n = na(r);
      n && n !== Cr && Hr(e, n, t);
    }
    var o = ta(r);
    Er && (o = o.concat(Er(r)));
    for (var l = wr(e), s = wr(r), f = 0; f < o.length; ++f) {
      var p = o[f];
      if (!Qn[p] && !(t && t[p]) && !(s && s[p]) && !(l && l[p])) {
        var v = ra(r, p);
        try {
          ea(e, p, v);
        } catch {
        }
      }
    }
  }
  return e;
}
var aa = Hr;
const oa = /* @__PURE__ */ Lr(aa);
var B = { env: { NODE_ENV: "production" } };
function Ie() {
  return (Ie = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Rr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, jt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Gt.typeOf(e);
}, mt = Object.freeze([]), Me = Object.freeze({});
function et(e) {
  return typeof e == "function";
}
function zt(e) {
  return B.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function qt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ge = typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_ATTR || B.env.SC_ATTR) || "data-styled", Xt = typeof window < "u" && "HTMLElement" in window, ia = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && B.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? B.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && B.env.REACT_APP_SC_DISABLE_SPEEDY : B.env.SC_DISABLE_SPEEDY !== void 0 && B.env.SC_DISABLE_SPEEDY !== "" ? B.env.SC_DISABLE_SPEEDY !== "false" && B.env.SC_DISABLE_SPEEDY : B.env.NODE_ENV !== "production")), sa = B.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function la() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ye(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw B.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(la.apply(void 0, [sa[e]].concat(t)).trim());
}
var ca = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, l = o.length, s = l; t >= s; ) (s <<= 1) < 0 && Ye(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var f = l; f < s; f++) this.groupSizes[f] = 0;
    }
    for (var p = this.indexOfGroup(t + 1), v = 0, S = n.length; v < S; v++) this.tag.insertRule(p, n[v]) && (this.groupSizes[t]++, p++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), l = o + n;
      this.groupSizes[t] = 0;
      for (var s = o; s < l; s++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], l = this.indexOfGroup(t), s = l + o, f = l; f < s; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), pt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Qe = 1, st = function(e) {
  if (pt.has(e)) return pt.get(e);
  for (; ht.has(Qe); ) Qe++;
  var r = Qe++;
  return B.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ye(16, "" + r), pt.set(e, r), ht.set(r, e), r;
}, ua = function(e) {
  return ht.get(e);
}, fa = function(e, r) {
  r >= Qe && (Qe = r + 1), pt.set(e, r), ht.set(r, e);
}, pa = "style[" + Ge + '][data-styled-version="5.3.11"]', da = new RegExp("^" + Ge + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ma = function(e, r, t) {
  for (var n, o = t.split(","), l = 0, s = o.length; l < s; l++) (n = o[l]) && e.registerName(r, n);
}, ha = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, l = t.length; o < l; o++) {
    var s = t[o].trim();
    if (s) {
      var f = s.match(da);
      if (f) {
        var p = 0 | parseInt(f[1], 10), v = f[2];
        p !== 0 && (fa(v, p), ma(e, v, f[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, va = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Wr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(f) {
    for (var p = f.childNodes, v = p.length; v >= 0; v--) {
      var S = p[v];
      if (S && S.nodeType === 1 && S.hasAttribute(Ge)) return S;
    }
  }(t), l = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ge, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = va();
  return s && n.setAttribute("nonce", s), t.insertBefore(n, l), n;
}, ya = function() {
  function e(t) {
    var n = this.element = Wr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var l = document.styleSheets, s = 0, f = l.length; s < f; s++) {
        var p = l[s];
        if (p.ownerNode === o) return p;
      }
      Ye(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), ga = function() {
  function e(t) {
    var n = this.element = Wr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), l = this.nodes[t];
      return this.element.insertBefore(o, l || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ba = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Or = Xt, Aa = { isServer: !Xt, useCSSOMInjection: !ia }, Br = function() {
  function e(t, n, o) {
    t === void 0 && (t = Me), n === void 0 && (n = {}), this.options = Ie({}, Aa, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Xt && Or && (Or = !1, function(l) {
      for (var s = document.querySelectorAll(pa), f = 0, p = s.length; f < p; f++) {
        var v = s[f];
        v && v.getAttribute(Ge) !== "active" && (ha(l, v), v.parentNode && v.parentNode.removeChild(v));
      }
    }(this));
  }
  e.registerId = function(t) {
    return st(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ie({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, l = n.useCSSOMInjection, s = n.target, t = o ? new ba(s) : l ? new ya(s) : new ga(s), new ca(t)));
    var t, n, o, l, s;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (st(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(st(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(st(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, l = "", s = 0; s < o; s++) {
        var f = ua(s);
        if (f !== void 0) {
          var p = t.names.get(f), v = n.getGroup(s);
          if (p && v && p.size) {
            var S = Ge + ".g" + s + '[id="' + f + '"]', A = "";
            p !== void 0 && p.forEach(function(M) {
              M.length > 0 && (A += M + ",");
            }), l += "" + v + S + '{content:"' + A + `"}/*!sc*/
`;
          }
        }
      }
      return l;
    }(this);
  }, e;
}(), _a = /(a)(d)/gi, xr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $t(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = xr(r % 52) + t;
  return (xr(r % 52) + t).replace(_a, "$1-$2");
}
var He = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Gr = function(e) {
  return He(5381, e);
};
function Sa(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (et(t) && !qt(t)) return !1;
  }
  return !0;
}
var Ta = Gr("5.3.11"), wa = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = B.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Sa(r), this.componentId = t, this.baseHash = He(Ta, t), this.baseStyle = n, Br.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, l = [];
    if (this.baseStyle && l.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) l.push(this.staticRulesId);
    else {
      var s = Ve(this.rules, r, t, n).join(""), f = $t(He(this.baseHash, s) >>> 0);
      if (!t.hasNameForId(o, f)) {
        var p = n(s, "." + f, void 0, o);
        t.insertRules(o, f, p);
      }
      l.push(f), this.staticRulesId = f;
    }
    else {
      for (var v = this.rules.length, S = He(this.baseHash, n.hash), A = "", M = 0; M < v; M++) {
        var I = this.rules[M];
        if (typeof I == "string") A += I, B.env.NODE_ENV !== "production" && (S = He(S, I + M));
        else if (I) {
          var C = Ve(I, r, t, n), L = Array.isArray(C) ? C.join("") : C;
          S = He(S, L + M), A += L;
        }
      }
      if (A) {
        var w = $t(S >>> 0);
        if (!t.hasNameForId(o, w)) {
          var F = n(A, "." + w, void 0, o);
          t.insertRules(o, w, F);
        }
        l.push(w);
      }
    }
    return l.join(" ");
  }, e;
}(), Ea = /^\s*\/\/.*$/gm, Ca = [":", "[", ".", "#"];
function Ra(e) {
  var r, t, n, o, l = Me, s = l.options, f = s === void 0 ? Me : s, p = l.plugins, v = p === void 0 ? mt : p, S = new Yn(f), A = [], M = /* @__PURE__ */ function(L) {
    function w(F) {
      if (F) try {
        L(F + "}");
      } catch {
      }
    }
    return function(F, R, x, E, c, Z, fe, ie, N, Y) {
      switch (F) {
        case 1:
          if (N === 0 && R.charCodeAt(0) === 64) return L(R + ";"), "";
          break;
        case 2:
          if (ie === 0) return R + "/*|*/";
          break;
        case 3:
          switch (ie) {
            case 102:
            case 112:
              return L(x[0] + R), "";
            default:
              return R + (Y === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(w);
      }
    };
  }(function(L) {
    A.push(L);
  }), I = function(L, w, F) {
    return w === 0 && Ca.indexOf(F[t.length]) !== -1 || F.match(o) ? L : "." + r;
  };
  function C(L, w, F, R) {
    R === void 0 && (R = "&");
    var x = L.replace(Ea, ""), E = w && F ? F + " " + w + " { " + x + " }" : x;
    return r = R, t = w, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), S(F || !w ? "" : w, E);
  }
  return S.use([].concat(v, [function(L, w, F) {
    L === 2 && F.length && F[0].lastIndexOf(t) > 0 && (F[0] = F[0].replace(n, I));
  }, M, function(L) {
    if (L === -2) {
      var w = A;
      return A = [], w;
    }
  }])), C.hash = v.length ? v.reduce(function(L, w) {
    return w.name || Ye(15), He(L, w.name);
  }, 5381).toString() : "", C;
}
var Vr = Pe.createContext();
Vr.Consumer;
var Yr = Pe.createContext(), Oa = (Yr.Consumer, new Br()), Ut = Ra();
function xa() {
  return Bt(Vr) || Oa;
}
function ka() {
  return Bt(Yr) || Ut;
}
var Na = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, l) {
      l === void 0 && (l = Ut);
      var s = n.name + l.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, l(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Ye(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ut), this.name + r.hash;
  }, e;
}(), Ia = /([A-Z])/, Pa = /([A-Z])/g, La = /^ms-/, Da = function(e) {
  return "-" + e.toLowerCase();
};
function kr(e) {
  return Ia.test(e) ? e.replace(Pa, Da).replace(La, "-ms-") : e;
}
var Nr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ve(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, l = [], s = 0, f = e.length; s < f; s += 1) (o = Ve(e[s], r, t, n)) !== "" && (Array.isArray(o) ? l.push.apply(l, o) : l.push(o));
    return l;
  }
  if (Nr(e)) return "";
  if (qt(e)) return "." + e.styledComponentId;
  if (et(e)) {
    if (typeof (v = e) != "function" || v.prototype && v.prototype.isReactComponent || !r) return e;
    var p = e(r);
    return B.env.NODE_ENV !== "production" && Gt.isElement(p) && console.warn(zt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ve(p, r, t, n);
  }
  var v;
  return e instanceof Na ? t ? (e.inject(t, n), e.getName(n)) : e : jt(e) ? function S(A, M) {
    var I, C, L = [];
    for (var w in A) A.hasOwnProperty(w) && !Nr(A[w]) && (Array.isArray(A[w]) && A[w].isCss || et(A[w]) ? L.push(kr(w) + ":", A[w], ";") : jt(A[w]) ? L.push.apply(L, S(A[w], w)) : L.push(kr(w) + ": " + (I = w, (C = A[w]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || I in qn || I.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return M ? [M + " {"].concat(L, ["}"]) : L;
  }(e) : e.toString();
}
var Ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ma(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return et(e) || jt(e) ? Ir(Ve(Rr(mt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ir(Ve(Rr(e, t)));
}
var Pr = /invalid hook call/i, lt = /* @__PURE__ */ new Set(), Fa = function(e, r) {
  if (B.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(l) {
        if (Pr.test(l)) o = !1, lt.delete(t);
        else {
          for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++) f[p - 1] = arguments[p];
          n.apply(void 0, [l].concat(f));
        }
      }, Je(), o && !lt.has(t) && (console.warn(t), lt.add(t));
    } catch (l) {
      Pr.test(l.message) && lt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, ja = function(e, r, t) {
  return t === void 0 && (t = Me), e.theme !== t.theme && e.theme || r || t.theme;
}, za = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $a = /(^-|-$)/g;
function It(e) {
  return e.replace(za, "-").replace($a, "");
}
var Ua = function(e) {
  return $t(Gr(e) >>> 0);
};
function ct(e) {
  return typeof e == "string" && (B.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ht = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ha = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Wa(e, r, t) {
  var n = e[t];
  Ht(r) && Ht(n) ? qr(n, r) : e[t] = r;
}
function qr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, l = t; o < l.length; o++) {
    var s = l[o];
    if (Ht(s)) for (var f in s) Ha(f) && Wa(e, s[f], f);
  }
  return e;
}
var Xr = Pe.createContext();
Xr.Consumer;
var Pt = {};
function Kr(e, r, t) {
  var n = qt(e), o = !ct(e), l = r.attrs, s = l === void 0 ? mt : l, f = r.componentId, p = f === void 0 ? function(R, x) {
    var E = typeof R != "string" ? "sc" : It(R);
    Pt[E] = (Pt[E] || 0) + 1;
    var c = E + "-" + Ua("5.3.11" + E + Pt[E]);
    return x ? x + "-" + c : c;
  }(r.displayName, r.parentComponentId) : f, v = r.displayName, S = v === void 0 ? function(R) {
    return ct(R) ? "styled." + R : "Styled(" + zt(R) + ")";
  }(e) : v, A = r.displayName && r.componentId ? It(r.displayName) + "-" + r.componentId : r.componentId || p, M = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, I = r.shouldForwardProp;
  n && e.shouldForwardProp && (I = r.shouldForwardProp ? function(R, x, E) {
    return e.shouldForwardProp(R, x, E) && r.shouldForwardProp(R, x, E);
  } : e.shouldForwardProp);
  var C, L = new wa(t, A, n ? e.componentStyle : void 0), w = L.isStatic && s.length === 0, F = function(R, x) {
    return function(E, c, Z, fe) {
      var ie = E.attrs, N = E.componentStyle, Y = E.defaultProps, ye = E.foldedComponentIds, te = E.shouldForwardProp, G = E.styledComponentId, ce = E.target, ae = function(b, i, T) {
        b === void 0 && (b = Me);
        var d = Ie({}, i, { theme: b }), V = {};
        return T.forEach(function($) {
          var j, k, ee, Q = $;
          for (j in et(Q) && (Q = Q(d)), Q) d[j] = V[j] = j === "className" ? (k = V[j], ee = Q[j], k && ee ? k + " " + ee : k || ee) : Q[j];
        }), [d, V];
      }(ja(c, Bt(Xr), Y) || Me, c, ie), Ce = ae[0], ge = ae[1], me = function(b, i, T, d) {
        var V = xa(), $ = ka(), j = i ? b.generateAndInjectStyles(Me, V, $) : b.generateAndInjectStyles(T, V, $);
        return B.env.NODE_ENV !== "production" && !i && d && d(j), j;
      }(N, fe, Ce, B.env.NODE_ENV !== "production" ? E.warnTooManyClasses : void 0), Fe = Z, Re = ge.$as || c.$as || ge.as || c.as || ce, je = ct(Re), g = ge !== c ? Ie({}, c, {}, ge) : c, m = {};
      for (var y in g) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? m.as = g[y] : (te ? te(y, Tr, Re) : !je || Tr(y)) && (m[y] = g[y]));
      return c.style && ge.style !== c.style && (m.style = Ie({}, c.style, {}, ge.style)), m.className = Array.prototype.concat(ye, G, me !== G ? me : null, c.className, ge.className).filter(Boolean).join(" "), m.ref = Fe, ln(Re, m);
    }(C, R, x, w);
  };
  return F.displayName = S, (C = Pe.forwardRef(F)).attrs = M, C.componentStyle = L, C.displayName = S, C.shouldForwardProp = I, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : mt, C.styledComponentId = A, C.target = n ? e.target : e, C.withComponent = function(R) {
    var x = r.componentId, E = function(Z, fe) {
      if (Z == null) return {};
      var ie, N, Y = {}, ye = Object.keys(Z);
      for (N = 0; N < ye.length; N++) ie = ye[N], fe.indexOf(ie) >= 0 || (Y[ie] = Z[ie]);
      return Y;
    }(r, ["componentId"]), c = x && x + "-" + (ct(R) ? R : It(zt(R)));
    return Kr(R, Ie({}, E, { attrs: M, componentId: c }), t);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? qr({}, e.defaultProps, R) : R;
  } }), B.env.NODE_ENV !== "production" && (Fa(S, A), C.warnTooManyClasses = /* @__PURE__ */ function(R, x) {
    var E = {}, c = !1;
    return function(Z) {
      if (!c && (E[Z] = !0, Object.keys(E).length >= 200)) {
        var fe = x ? ' with the id of "' + x + '"' : "";
        console.warn("Over 200 classes were generated for component " + R + fe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), c = !0, E = {};
      }
    };
  }(S, A)), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), o && oa(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var Wt = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Me), !Gt.isValidElementType(n)) return Ye(1, String(n));
    var l = function() {
      return t(n, o, Ma.apply(void 0, arguments));
    };
    return l.withConfig = function(s) {
      return r(t, n, Ie({}, o, {}, s));
    }, l.attrs = function(s) {
      return r(t, n, Ie({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, l;
  }(Kr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Wt[e] = Wt(e);
});
B.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), B.env.NODE_ENV !== "production" && B.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ba = Wt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Zr = ({ gaData: e, hidePrev: r, hideNext: t, slideNav: n }) => /* @__PURE__ */ ne.jsxs(Ba, { children: [
  !r && /* @__PURE__ */ ne.jsx(Ft, { gaData: { ...e, text: "left chevron" }, children: /* @__PURE__ */ ne.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: () => n(-1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ ne.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ ne.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ) }),
  !t && /* @__PURE__ */ ne.jsx(Ft, { gaData: { ...e, text: "right chevron" }, children: /* @__PURE__ */ ne.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: () => n(1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ ne.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ ne.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  ) })
] });
Zr.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: U.object,
  hidePrev: U.bool,
  hideNext: U.bool,
  slideNav: U.func.isRequired
};
const Qr = cn(function(r, t) {
  const {
    id: n,
    selected: o,
    title: l,
    selectTab: s,
    leftKeyPressed: f,
    rightKeyPressed: p,
    icon: v,
    gaData: S
  } = r, A = Je(null);
  un(
    t,
    () => ({
      focus() {
        A.current.focus();
      },
      scrollIntoView() {
        var L, w, F, R, x, E, c;
        const I = ((L = A.current) == null ? void 0 : L.offsetWidth) / 2 + A.current.offsetLeft, C = ((F = (w = A.current) == null ? void 0 : w.offsetParent) == null ? void 0 : F.scrollLeft) + ((x = (R = A.current) == null ? void 0 : R.offsetParent) == null ? void 0 : x.offsetWidth) / 2;
        (c = (E = A.current) == null ? void 0 : E.offsetParent) == null || c.scrollBy({
          left: I - C
        });
      }
    }),
    []
  );
  const M = (I) => {
    I.keyCode === 37 ? (I.preventDefault(), f()) : I.keyCode === 39 && (I.preventDefault(), p());
  };
  return /* @__PURE__ */ ne.jsx(Ft, { gaData: { ...S, text: l }, children: /* @__PURE__ */ ne.jsxs(
    "a",
    {
      ref: A,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: n,
      href: `#nav-${n}`,
      role: "tab",
      "aria-controls": `nav-${n}`,
      "aria-selected": o,
      onClick: (I) => s(I, n, l),
      onKeyDown: M,
      tabIndex: o ? "" : "-1",
      children: [
        l,
        " ",
        v && /* @__PURE__ */ ne.jsx("i", { className: `${v == null ? void 0 : v[0]} fa-${v == null ? void 0 : v[1]} me-1` })
      ]
    }
  ) });
});
Qr.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: U.object,
  id: U.string.isRequired,
  selected: U.bool.isRequired,
  title: U.string.isRequired,
  selectTab: U.func.isRequired,
  leftKeyPressed: U.func.isRequired,
  rightKeyPressed: U.func.isRequired,
  icon: U.arrayOf(U.string)
};
function Ga() {
  const e = Je({}), r = fn(
    (t) => (n) => {
      e.current[t] = n;
    },
    []
  );
  return [e, r];
}
const Va = ({ id: e, bgColor: r, selected: t, children: n }) => t && /* @__PURE__ */ ne.jsx(
  "div",
  {
    className: `tab-pane fade show ${t ? "show active" : ""} ${r === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: n
  }
);
Va.propTypes = {
  id: U.string.isRequired,
  bgColor: U.string,
  selected: U.bool,
  children: U.oneOfType([U.array, U.element])
};
const Ya = ({
  initialTab: e = "",
  children: r,
  bgColor: t = "",
  onTabChange: n = (o) => {
  }
}) => {
  const o = Pe.Children.toArray(r), l = Je(!1), [s, f] = St(
    e && e !== "null" ? e : o[0].props.id
  ), p = Je(null), [v, S] = Ga(), { isReact: A, isBootstrap: M } = jr(), I = (N) => {
    var Y;
    n(N), (Y = v.current[N]) == null || Y.focus(), f(N);
  }, [C, L] = St(0), [w, F] = St();
  Xe(() => {
    const N = () => {
      L(p.current.scrollLeft);
    };
    return p.current.addEventListener("scroll", N), N(), () => {
      p.current && p.current.removeEventListener("scroll", N);
    };
  }, [w]), Xe(() => {
    const N = () => {
      F(
        p.current.scrollWidth - p.current.offsetWidth
      );
    };
    return window.addEventListener("resize", N), N(), () => {
      p.current && window.removeEventListener("resize", N);
    };
  }, []), Xe(() => {
    var N;
    (N = v.current[s]) == null || N.scrollIntoView();
  }, [s]), Xe(() => {
    l.current && e && e !== "null" && s !== e && f(e);
  }, [e]), Xe(() => {
    l.current = !0;
  }, []);
  const R = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, x = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, E = o.map((N) => Pe.cloneElement(N, {
    bgColor: t,
    selected: s === N.props.id
  })), c = (N) => {
    const Y = p.current, ye = Y.scrollWidth - Y.clientWidth;
    let G = Y.scrollLeft + 200 * N;
    G = Math.max(0, Math.min(ye, G)), Y.scrollTo({
      left: G,
      behavior: "smooth"
    });
  }, Z = (N, Y, ye) => {
    N.preventDefault(), I(Y);
  }, fe = (N = !0) => {
    const Y = o.length, ye = N ? 1 : -1, te = o.findIndex((ce) => ce.props.id === s), G = o[(Y + te + ye) % Y].props.id;
    I(G);
  };
  let ie = "uds-tabbed-panels";
  return t === "bg-dark" && (ie += " uds-tabbed-panels-dark"), /* @__PURE__ */ ne.jsxs("div", { className: t, children: [
    /* @__PURE__ */ ne.jsxs("nav", { className: ie, children: [
      /* @__PURE__ */ ne.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: p, children: o.map((N, Y) => /* @__PURE__ */ ne.jsx(
        Qr,
        {
          ref: S(N.props.id),
          id: N.props.id,
          title: N.props.title,
          selected: s === N.props.id,
          gaData: x,
          selectTab: A && Z,
          leftKeyPressed: A && (() => fe(!1)),
          rightKeyPressed: A && (() => fe()),
          icon: N.props.icon,
          index: Y
        },
        N.props.id
      )) }),
      /* @__PURE__ */ ne.jsx(
        Zr,
        {
          hidePrev: C <= 0,
          hideNext: C >= w,
          gaData: R,
          slideNav: A && c
        }
      )
    ] }),
    /* @__PURE__ */ ne.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: E
      }
    )
  ] });
};
Ya.propTypes = {
  initialTab: U.string,
  children: U.arrayOf(U.element).isRequired,
  bgColor: U.string,
  onTabChange: U.func
};
export {
  Va as Tab,
  Ya as TabbedPanels
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
