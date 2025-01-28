import $e, { useState as Xe, useEffect as ot, useId as fa, useRef as un, useContext as Bo, createElement as ys, Component as ws, forwardRef as pa, createContext as bs, useImperativeHandle as xs, useCallback as Ss } from "react";
import ks from "react-dom";
function zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ha = { exports: {} }, Xn = {};
var xi;
function Ts() {
  if (xi) return Xn;
  xi = 1;
  var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, f, h) {
    var b, x = {}, C = null, L = null;
    h !== void 0 && (C = "" + h), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (L = f.ref);
    for (b in f) r.call(f, b) && !s.hasOwnProperty(b) && (x[b] = f[b]);
    if (g && g.defaultProps) for (b in f = g.defaultProps, f) x[b] === void 0 && (x[b] = f[b]);
    return { $$typeof: t, type: g, key: C, ref: L, props: x, _owner: a.current };
  }
  return Xn.Fragment = n, Xn.jsx = d, Xn.jsxs = d, Xn;
}
ha.exports = Ts();
var p = ha.exports, ma = { exports: {} }, ga = { exports: {} }, Ee = {};
var Si;
function _s() {
  if (Si) return Ee;
  Si = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, L = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function W(I) {
    if (typeof I == "object" && I !== null) {
      var Z = I.$$typeof;
      switch (Z) {
        case t:
          switch (I = I.type, I) {
            case f:
            case h:
            case r:
            case s:
            case a:
            case x:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case g:
                case b:
                case A:
                case L:
                case d:
                  return I;
                default:
                  return Z;
              }
          }
        case n:
          return Z;
      }
    }
  }
  function U(I) {
    return W(I) === h;
  }
  return Ee.AsyncMode = f, Ee.ConcurrentMode = h, Ee.ContextConsumer = g, Ee.ContextProvider = d, Ee.Element = t, Ee.ForwardRef = b, Ee.Fragment = r, Ee.Lazy = A, Ee.Memo = L, Ee.Portal = n, Ee.Profiler = s, Ee.StrictMode = a, Ee.Suspense = x, Ee.isAsyncMode = function(I) {
    return U(I) || W(I) === f;
  }, Ee.isConcurrentMode = U, Ee.isContextConsumer = function(I) {
    return W(I) === g;
  }, Ee.isContextProvider = function(I) {
    return W(I) === d;
  }, Ee.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === t;
  }, Ee.isForwardRef = function(I) {
    return W(I) === b;
  }, Ee.isFragment = function(I) {
    return W(I) === r;
  }, Ee.isLazy = function(I) {
    return W(I) === A;
  }, Ee.isMemo = function(I) {
    return W(I) === L;
  }, Ee.isPortal = function(I) {
    return W(I) === n;
  }, Ee.isProfiler = function(I) {
    return W(I) === s;
  }, Ee.isStrictMode = function(I) {
    return W(I) === a;
  }, Ee.isSuspense = function(I) {
    return W(I) === x;
  }, Ee.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === r || I === h || I === s || I === a || I === x || I === C || typeof I == "object" && I !== null && (I.$$typeof === A || I.$$typeof === L || I.$$typeof === d || I.$$typeof === g || I.$$typeof === b || I.$$typeof === P || I.$$typeof === M || I.$$typeof === B || I.$$typeof === O);
  }, Ee.typeOf = W, Ee;
}
ga.exports = _s();
var Br = ga.exports, ao, ki;
function Es() {
  if (ki) return ao;
  ki = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ao = e, ao;
}
var so, Ti;
function Cs() {
  if (Ti) return so;
  Ti = 1;
  var e = Es();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, so = function() {
    function r(d, g, f, h, b, x) {
      if (x !== e) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, so;
}
ma.exports = Cs()();
var Os = ma.exports;
const l = /* @__PURE__ */ zo(Os), Rs = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), lo = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), va = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
}), Ho = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var ya = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var g = arguments[d];
        g && (s = a(s, r(g)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return n.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var d = "";
      for (var g in s)
        t.call(s, g) && s[g] && (d = a(d, g));
      return d;
    }
    function a(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(ya);
var As = ya.exports;
const we = /* @__PURE__ */ zo(As), Ns = () => {
  const [e, t] = Xe(), [n, r] = Xe(!1), [a, s] = Xe(!1), [d, g] = Xe("");
  return ot(() => {
    if (!d) return;
    (() => {
      s(null), r(!0);
      try {
        fetch(d).then((h) => h.json()).then((h) => {
          t(h), r(!1);
        }).catch((h) => {
          s(h), r(!1);
        });
      } catch (h) {
        s(h);
      }
    })();
  }, [d]), [{ data: e, loading: n, error: a }, g];
};
function js(e) {
  const [t, n] = Xe(!1);
  return ot(() => {
    const r = window.matchMedia(e);
    r.matches !== t && n(r.matches);
    const a = () => {
      n(r.matches);
    };
    return r.addEventListener("change", a), () => r.removeEventListener("change", a);
  }, [t, e]), t;
}
const _i = (e, t, n) => e ? t : n, Tr = (e) => (e || []).join(" ");
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function Ps() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _r(e, t, n) {
  return Ps() ? _r = Reflect.construct : _r = function(a, s, d) {
    var g = [null];
    g.push.apply(g, s);
    var f = Function.bind.apply(a, g), h = new f();
    return d && wo(h, d.prototype), h;
  }, _r.apply(null, arguments);
}
function Nt(e) {
  return Is(e) || Ls(e) || Ms(e) || Ds();
}
function Is(e) {
  if (Array.isArray(e)) return bo(e);
}
function Ls(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ms(e, t) {
  if (e) {
    if (typeof e == "string") return bo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bo(e, t);
  }
}
function bo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ds() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Fs = Object.hasOwnProperty, Ei = Object.setPrototypeOf, $s = Object.isFrozen, Bs = Object.getPrototypeOf, zs = Object.getOwnPropertyDescriptor, it = Object.freeze, St = Object.seal, Hs = Object.create, wa = typeof Reflect < "u" && Reflect, Pr = wa.apply, xo = wa.construct;
Pr || (Pr = function(t, n, r) {
  return t.apply(n, r);
});
it || (it = function(t) {
  return t;
});
St || (St = function(t) {
  return t;
});
xo || (xo = function(t, n) {
  return _r(t, Nt(n));
});
var Vs = kt(Array.prototype.forEach), Ci = kt(Array.prototype.pop), Kn = kt(Array.prototype.push), Er = kt(String.prototype.toLowerCase), co = kt(String.prototype.toString), Oi = kt(String.prototype.match), At = kt(String.prototype.replace), Ws = kt(String.prototype.indexOf), Us = kt(String.prototype.trim), Ze = kt(RegExp.prototype.test), uo = qs(TypeError);
function kt(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return Pr(e, t, r);
  };
}
function qs(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return xo(e, n);
  };
}
function ue(e, t, n) {
  var r;
  n = (r = n) !== null && r !== void 0 ? r : Er, Ei && Ei(e, null);
  for (var a = t.length; a--; ) {
    var s = t[a];
    if (typeof s == "string") {
      var d = n(s);
      d !== s && ($s(t) || (t[a] = d), s = d);
    }
    e[s] = !0;
  }
  return e;
}
function Tn(e) {
  var t = Hs(null), n;
  for (n in e)
    Pr(Fs, e, [n]) === !0 && (t[n] = e[n]);
  return t;
}
function gr(e, t) {
  for (; e !== null; ) {
    var n = zs(e, t);
    if (n) {
      if (n.get)
        return kt(n.get);
      if (typeof n.value == "function")
        return kt(n.value);
    }
    e = Bs(e);
  }
  function r(a) {
    return console.warn("fallback value for", a), null;
  }
  return r;
}
var Ri = it(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fo = it(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), po = it(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ys = it(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ho = it(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Gs = it(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ai = it(["#text"]), Ni = it(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), mo = it(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ji = it(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vr = it(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xs = St(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ks = St(/<%[\w\W]*|[\w\W]*%>/gm), Zs = St(/\${[\w\W]*}/gm), Js = St(/^data-[\-\w.\u00B7-\uFFFF]/), Qs = St(/^aria-[\-\w]+$/), el = St(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), tl = St(/^(?:\w+script|data):/i), nl = St(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), rl = St(/^html$/i), ol = St(/^[a-z][.\w]*(-[.\w]+)+$/i), il = function() {
  return typeof window > "u" ? null : window;
}, al = function(t, n) {
  if (sn(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var r = null, a = "data-tt-policy-suffix";
  n.currentScript && n.currentScript.hasAttribute(a) && (r = n.currentScript.getAttribute(a));
  var s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML: function(g) {
        return g;
      },
      createScriptURL: function(g) {
        return g;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function ba() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : il(), t = function(S) {
    return ba(S);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var n = e.document, r = e.document, a = e.DocumentFragment, s = e.HTMLTemplateElement, d = e.Node, g = e.Element, f = e.NodeFilter, h = e.NamedNodeMap, b = h === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : h, x = e.HTMLFormElement, C = e.DOMParser, L = e.trustedTypes, A = g.prototype, O = gr(A, "cloneNode"), P = gr(A, "nextSibling"), M = gr(A, "childNodes"), B = gr(A, "parentNode");
  if (typeof s == "function") {
    var W = r.createElement("template");
    W.content && W.content.ownerDocument && (r = W.content.ownerDocument);
  }
  var U = al(L, n), I = U ? U.createHTML("") : "", Z = r, ce = Z.implementation, Me = Z.createNodeIterator, ee = Z.createDocumentFragment, be = Z.getElementsByTagName, Ge = n.importNode, ge = {};
  try {
    ge = Tn(r).documentMode ? r.documentMode : {};
  } catch {
  }
  var ve = {};
  t.isSupported = typeof B == "function" && ce && ce.createHTMLDocument !== void 0 && ge !== 9;
  var ze = Xs, De = Ks, dt = Zs, Ke = Js, Ve = Qs, We = tl, at = nl, nt = ol, Y = el, z = null, q = ue({}, [].concat(Nt(Ri), Nt(fo), Nt(po), Nt(ho), Nt(Ai))), G = null, R = ue({}, [].concat(Nt(Ni), Nt(mo), Nt(ji), Nt(vr))), K = Object.seal(Object.create(null, {
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
  })), F = null, fe = null, ie = !0, oe = !0, Q = !1, pe = !0, ye = !1, se = !0, xe = !1, he = !1, Re = !1, Ue = !1, Oe = !1, st = !1, qe = !0, Se = !1, J = "user-content-", ke = !0, lt = !1, rt = {}, Be = null, fn = ue({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), pn = null, On = ue({}, ["audio", "video", "img", "source", "image", "track"]), Mt = null, Dt = ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Jt = "http://www.w3.org/1998/Math/MathML", Qt = "http://www.w3.org/2000/svg", ft = "http://www.w3.org/1999/xhtml", Pt = ft, hn = !1, et = null, mn = ue({}, [Jt, Qt, ft], co), ct, Te = ["application/xhtml+xml", "text/html"], Ft = "text/html", Ne, ut = null, wt = r.createElement("form"), $t = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, pt = function(S) {
    ut && ut === S || ((!S || sn(S) !== "object") && (S = {}), S = Tn(S), ct = // eslint-disable-next-line unicorn/prefer-includes
    Te.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? ct = Ft : ct = S.PARSER_MEDIA_TYPE, Ne = ct === "application/xhtml+xml" ? co : Er, z = "ALLOWED_TAGS" in S ? ue({}, S.ALLOWED_TAGS, Ne) : q, G = "ALLOWED_ATTR" in S ? ue({}, S.ALLOWED_ATTR, Ne) : R, et = "ALLOWED_NAMESPACES" in S ? ue({}, S.ALLOWED_NAMESPACES, co) : mn, Mt = "ADD_URI_SAFE_ATTR" in S ? ue(
      Tn(Dt),
      // eslint-disable-line indent
      S.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ne
      // eslint-disable-line indent
    ) : Dt, pn = "ADD_DATA_URI_TAGS" in S ? ue(
      Tn(On),
      // eslint-disable-line indent
      S.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ne
      // eslint-disable-line indent
    ) : On, Be = "FORBID_CONTENTS" in S ? ue({}, S.FORBID_CONTENTS, Ne) : fn, F = "FORBID_TAGS" in S ? ue({}, S.FORBID_TAGS, Ne) : {}, fe = "FORBID_ATTR" in S ? ue({}, S.FORBID_ATTR, Ne) : {}, rt = "USE_PROFILES" in S ? S.USE_PROFILES : !1, ie = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, Q = S.ALLOW_UNKNOWN_PROTOCOLS || !1, pe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ye = S.SAFE_FOR_TEMPLATES || !1, se = S.SAFE_FOR_XML !== !1, xe = S.WHOLE_DOCUMENT || !1, Ue = S.RETURN_DOM || !1, Oe = S.RETURN_DOM_FRAGMENT || !1, st = S.RETURN_TRUSTED_TYPE || !1, Re = S.FORCE_BODY || !1, qe = S.SANITIZE_DOM !== !1, Se = S.SANITIZE_NAMED_PROPS || !1, ke = S.KEEP_CONTENT !== !1, lt = S.IN_PLACE || !1, Y = S.ALLOWED_URI_REGEXP || Y, Pt = S.NAMESPACE || ft, K = S.CUSTOM_ELEMENT_HANDLING || {}, S.CUSTOM_ELEMENT_HANDLING && $t(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (K.tagNameCheck = S.CUSTOM_ELEMENT_HANDLING.tagNameCheck), S.CUSTOM_ELEMENT_HANDLING && $t(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (K.attributeNameCheck = S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), S.CUSTOM_ELEMENT_HANDLING && typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (K.allowCustomizedBuiltInElements = S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ye && (oe = !1), Oe && (Ue = !0), rt && (z = ue({}, Nt(Ai)), G = [], rt.html === !0 && (ue(z, Ri), ue(G, Ni)), rt.svg === !0 && (ue(z, fo), ue(G, mo), ue(G, vr)), rt.svgFilters === !0 && (ue(z, po), ue(G, mo), ue(G, vr)), rt.mathMl === !0 && (ue(z, ho), ue(G, ji), ue(G, vr))), S.ADD_TAGS && (z === q && (z = Tn(z)), ue(z, S.ADD_TAGS, Ne)), S.ADD_ATTR && (G === R && (G = Tn(G)), ue(G, S.ADD_ATTR, Ne)), S.ADD_URI_SAFE_ATTR && ue(Mt, S.ADD_URI_SAFE_ATTR, Ne), S.FORBID_CONTENTS && (Be === fn && (Be = Tn(Be)), ue(Be, S.FORBID_CONTENTS, Ne)), ke && (z["#text"] = !0), xe && ue(z, ["html", "head", "body"]), z.table && (ue(z, ["tbody"]), delete F.tbody), it && it(S), ut = S);
  }, gn = ue({}, ["mi", "mo", "mn", "ms", "mtext"]), en = ue({}, ["annotation-xml"]), vn = ue({}, ["title", "style", "font", "a", "script"]), Bt = ue({}, fo);
  ue(Bt, po), ue(Bt, Ys);
  var tn = ue({}, ho);
  ue(tn, Gs);
  var Rn = function(S) {
    var D = B(S);
    (!D || !D.tagName) && (D = {
      namespaceURI: Pt,
      tagName: "template"
    });
    var V = Er(S.tagName), me = Er(D.tagName);
    return et[S.namespaceURI] ? S.namespaceURI === Qt ? D.namespaceURI === ft ? V === "svg" : D.namespaceURI === Jt ? V === "svg" && (me === "annotation-xml" || gn[me]) : !!Bt[V] : S.namespaceURI === Jt ? D.namespaceURI === ft ? V === "math" : D.namespaceURI === Qt ? V === "math" && en[me] : !!tn[V] : S.namespaceURI === ft ? D.namespaceURI === Qt && !en[me] || D.namespaceURI === Jt && !gn[me] ? !1 : !tn[V] && (vn[V] || !Bt[V]) : !!(ct === "application/xhtml+xml" && et[S.namespaceURI]) : !1;
  }, tt = function(S) {
    Kn(t.removed, {
      element: S
    });
    try {
      S.parentNode.removeChild(S);
    } catch {
      try {
        S.outerHTML = I;
      } catch {
        S.remove();
      }
    }
  }, nn = function(S, D) {
    try {
      Kn(t.removed, {
        attribute: D.getAttributeNode(S),
        from: D
      });
    } catch {
      Kn(t.removed, {
        attribute: null,
        from: D
      });
    }
    if (D.removeAttribute(S), S === "is" && !G[S])
      if (Ue || Oe)
        try {
          tt(D);
        } catch {
        }
      else
        try {
          D.setAttribute(S, "");
        } catch {
        }
  }, zt = function(S) {
    var D, V;
    if (Re)
      S = "<remove></remove>" + S;
    else {
      var me = Oi(S, /^[\r\n\t ]+/);
      V = me && me[0];
    }
    ct === "application/xhtml+xml" && Pt === ft && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    var _e = U ? U.createHTML(S) : S;
    if (Pt === ft)
      try {
        D = new C().parseFromString(_e, ct);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = ce.createDocument(Pt, "template", null);
      try {
        D.documentElement.innerHTML = hn ? I : _e;
      } catch {
      }
    }
    var He = D.body || D.documentElement;
    return S && V && He.insertBefore(r.createTextNode(V), He.childNodes[0] || null), Pt === ft ? be.call(D, xe ? "html" : "body")[0] : xe ? D.documentElement : He;
  }, yn = function(S) {
    return Me.call(
      S.ownerDocument || S,
      S,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Ht = function(S) {
    return S instanceof x && (typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || !(S.attributes instanceof b) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function");
  }, Tt = function(S) {
    return sn(d) === "object" ? S instanceof d : S && sn(S) === "object" && typeof S.nodeType == "number" && typeof S.nodeName == "string";
  }, ht = function(S, D, V) {
    ve[S] && Vs(ve[S], function(me) {
      me.call(t, D, V, ut);
    });
  }, It = function(S) {
    var D;
    if (ht("beforeSanitizeElements", S, null), Ht(S) || Ze(/[\u0080-\uFFFF]/, S.nodeName))
      return tt(S), !0;
    var V = Ne(S.nodeName);
    if (ht("uponSanitizeElement", S, {
      tagName: V,
      allowedTags: z
    }), S.hasChildNodes() && !Tt(S.firstElementChild) && (!Tt(S.content) || !Tt(S.content.firstElementChild)) && Ze(/<[/\w]/g, S.innerHTML) && Ze(/<[/\w]/g, S.textContent) || V === "select" && Ze(/<template/i, S.innerHTML) || S.nodeType === 7 || se && S.nodeType === 8 && Ze(/<[/\w]/g, S.data))
      return tt(S), !0;
    if (!z[V] || F[V]) {
      if (!F[V] && rn(V) && (K.tagNameCheck instanceof RegExp && Ze(K.tagNameCheck, V) || K.tagNameCheck instanceof Function && K.tagNameCheck(V)))
        return !1;
      if (ke && !Be[V]) {
        var me = B(S) || S.parentNode, _e = M(S) || S.childNodes;
        if (_e && me)
          for (var He = _e.length, Fe = He - 1; Fe >= 0; --Fe) {
            var mt = O(_e[Fe], !0);
            mt.__removalCount = (S.__removalCount || 0) + 1, me.insertBefore(mt, P(S));
          }
      }
      return tt(S), !0;
    }
    return S instanceof g && !Rn(S) || (V === "noscript" || V === "noembed" || V === "noframes") && Ze(/<\/no(script|embed|frames)/i, S.innerHTML) ? (tt(S), !0) : (ye && S.nodeType === 3 && (D = S.textContent, D = At(D, ze, " "), D = At(D, De, " "), D = At(D, dt, " "), S.textContent !== D && (Kn(t.removed, {
      element: S.cloneNode()
    }), S.textContent = D)), ht("afterSanitizeElements", S, null), !1);
  }, An = function(S, D, V) {
    if (qe && (D === "id" || D === "name") && (V in r || V in wt))
      return !1;
    if (!(oe && !fe[D] && Ze(Ke, D))) {
      if (!(ie && Ze(Ve, D))) {
        if (!G[D] || fe[D]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(rn(S) && (K.tagNameCheck instanceof RegExp && Ze(K.tagNameCheck, S) || K.tagNameCheck instanceof Function && K.tagNameCheck(S)) && (K.attributeNameCheck instanceof RegExp && Ze(K.attributeNameCheck, D) || K.attributeNameCheck instanceof Function && K.attributeNameCheck(D)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            D === "is" && K.allowCustomizedBuiltInElements && (K.tagNameCheck instanceof RegExp && Ze(K.tagNameCheck, V) || K.tagNameCheck instanceof Function && K.tagNameCheck(V)))
          ) return !1;
        } else if (!Mt[D]) {
          if (!Ze(Y, At(V, at, ""))) {
            if (!((D === "src" || D === "xlink:href" || D === "href") && S !== "script" && Ws(V, "data:") === 0 && pn[S])) {
              if (!(Q && !Ze(We, At(V, at, "")))) {
                if (V)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, rn = function(S) {
    return S !== "annotation-xml" && Oi(S, nt);
  }, Vt = function(S) {
    var D, V, me, _e;
    ht("beforeSanitizeAttributes", S, null);
    var He = S.attributes;
    if (He) {
      var Fe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: G
      };
      for (_e = He.length; _e--; ) {
        D = He[_e];
        var mt = D, Pe = mt.name, bt = mt.namespaceURI;
        if (V = Pe === "value" ? D.value : Us(D.value), me = Ne(Pe), Fe.attrName = me, Fe.attrValue = V, Fe.keepAttr = !0, Fe.forceKeepAttr = void 0, ht("uponSanitizeAttribute", S, Fe), V = Fe.attrValue, !Fe.forceKeepAttr && (nn(Pe, S), !!Fe.keepAttr)) {
          if (!pe && Ze(/\/>/i, V)) {
            nn(Pe, S);
            continue;
          }
          ye && (V = At(V, ze, " "), V = At(V, De, " "), V = At(V, dt, " "));
          var _t = Ne(S.nodeName);
          if (An(_t, me, V)) {
            if (Se && (me === "id" || me === "name") && (nn(Pe, S), V = J + V), se && Ze(/((--!?|])>)|<\/(style|title)/i, V)) {
              nn(Pe, S);
              continue;
            }
            if (U && sn(L) === "object" && typeof L.getAttributeType == "function" && !bt)
              switch (L.getAttributeType(_t, me)) {
                case "TrustedHTML": {
                  V = U.createHTML(V);
                  break;
                }
                case "TrustedScriptURL": {
                  V = U.createScriptURL(V);
                  break;
                }
              }
            try {
              bt ? S.setAttributeNS(bt, Pe, V) : S.setAttribute(Pe, V), Ht(S) ? tt(S) : Ci(t.removed);
            } catch {
            }
          }
        }
      }
      ht("afterSanitizeAttributes", S, null);
    }
  }, Wt = function X(S) {
    var D, V = yn(S);
    for (ht("beforeSanitizeShadowDOM", S, null); D = V.nextNode(); )
      ht("uponSanitizeShadowNode", D, null), !It(D) && (D.content instanceof a && X(D.content), Vt(D));
    ht("afterSanitizeShadowDOM", S, null);
  };
  return t.sanitize = function(X) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D, V, me, _e, He;
    if (hn = !X, hn && (X = "<!-->"), typeof X != "string" && !Tt(X))
      if (typeof X.toString == "function") {
        if (X = X.toString(), typeof X != "string")
          throw uo("dirty is not a string, aborting");
      } else
        throw uo("toString is not a function");
    if (!t.isSupported) {
      if (sn(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof X == "string")
          return e.toStaticHTML(X);
        if (Tt(X))
          return e.toStaticHTML(X.outerHTML);
      }
      return X;
    }
    if (he || pt(S), t.removed = [], typeof X == "string" && (lt = !1), lt) {
      if (X.nodeName) {
        var Fe = Ne(X.nodeName);
        if (!z[Fe] || F[Fe])
          throw uo("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (X instanceof d)
      D = zt("<!---->"), V = D.ownerDocument.importNode(X, !0), V.nodeType === 1 && V.nodeName === "BODY" || V.nodeName === "HTML" ? D = V : D.appendChild(V);
    else {
      if (!Ue && !ye && !xe && // eslint-disable-next-line unicorn/prefer-includes
      X.indexOf("<") === -1)
        return U && st ? U.createHTML(X) : X;
      if (D = zt(X), !D)
        return Ue ? null : st ? I : "";
    }
    D && Re && tt(D.firstChild);
    for (var mt = yn(lt ? X : D); me = mt.nextNode(); )
      me.nodeType === 3 && me === _e || It(me) || (me.content instanceof a && Wt(me.content), Vt(me), _e = me);
    if (_e = null, lt)
      return X;
    if (Ue) {
      if (Oe)
        for (He = ee.call(D.ownerDocument); D.firstChild; )
          He.appendChild(D.firstChild);
      else
        He = D;
      return (G.shadowroot || G.shadowrootmod) && (He = Ge.call(n, He, !0)), He;
    }
    var Pe = xe ? D.outerHTML : D.innerHTML;
    return xe && z["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && Ze(rl, D.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + Pe), ye && (Pe = At(Pe, ze, " "), Pe = At(Pe, De, " "), Pe = At(Pe, dt, " ")), U && st ? U.createHTML(Pe) : Pe;
  }, t.setConfig = function(X) {
    pt(X), he = !0;
  }, t.clearConfig = function() {
    ut = null, he = !1;
  }, t.isValidAttribute = function(X, S, D) {
    ut || pt({});
    var V = Ne(X), me = Ne(S);
    return An(V, me, D);
  }, t.addHook = function(X, S) {
    typeof S == "function" && (ve[X] = ve[X] || [], Kn(ve[X], S));
  }, t.removeHook = function(X) {
    if (ve[X])
      return Ci(ve[X]);
  }, t.removeHooks = function(X) {
    ve[X] && (ve[X] = []);
  }, t.removeAllHooks = function() {
    ve = {};
  }, t;
}
var sl = ba();
function ll(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const xt = (e) => ({ __html: sl.sanitize(e) }), Pi = (e, t, n) => {
  let r = e;
  const a = [];
  for (; r < t; )
    r > 0 && r <= n && a.push(r), r += 1;
  return a;
};
let go = !1;
const cl = (e, t) => {
  go || (go = !0, setTimeout(() => {
    e(), go = !1;
  }, t));
};
let Ii;
const ul = (e, t) => {
  window.clearTimeout(Ii), Ii = window.setTimeout(e, t);
};
l.shape({
  event: l.string,
  action: l.string,
  name: l.string,
  region: l.string,
  section: l.string,
  component: l.string,
  type: l.string,
  text: l.string
});
const xa = ({
  event: e = "",
  action: t = "",
  name: n = "",
  type: r = "",
  section: a = "",
  text: s = "",
  region: d = "",
  component: g = ""
}) => {
  const { dataLayer: f } = window, h = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: n.toLowerCase(),
    type: r.toLowerCase(),
    region: d.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: g.toLowerCase()
  };
  f && f.push(h);
};
var _n = {};
var Li;
function dl() {
  if (Li) return _n;
  Li = 1;
  var e = $e;
  function t(o) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, v = 1; v < arguments.length; v++) u += "&args[]=" + encodeURIComponent(arguments[v]);
    return "Minified React error #" + o + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = Object.prototype.hasOwnProperty, r = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function d(o) {
    return n.call(s, o) ? !0 : n.call(a, o) ? !1 : r.test(o) ? s[o] = !0 : (a[o] = !0, !1);
  }
  function g(o, u, v, w, E, k, N) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = w, this.attributeNamespace = E, this.mustUseProperty = v, this.propertyName = o, this.type = u, this.sanitizeURL = k, this.removeEmptyString = N;
  }
  var f = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    f[o] = new g(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var u = o[0];
    f[u] = new g(u, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    f[o] = new g(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    f[o] = new g(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    f[o] = new g(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    f[o] = new g(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    f[o] = new g(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    f[o] = new g(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    f[o] = new g(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var h = /[\-:]([a-z])/g;
  function b(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var u = o.replace(
      h,
      b
    );
    f[u] = new g(u, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var u = o.replace(h, b);
    f[u] = new g(u, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var u = o.replace(h, b);
    f[u] = new g(u, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    f[o] = new g(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), f.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    f[o] = new g(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var x = {
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
  }, C = ["Webkit", "ms", "Moz", "O"];
  Object.keys(x).forEach(function(o) {
    C.forEach(function(u) {
      u = u + o.charAt(0).toUpperCase() + o.substring(1), x[u] = x[o];
    });
  });
  var L = /["'&<>]/;
  function A(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var u = L.exec(o);
    if (u) {
      var v = "", w, E = 0;
      for (w = u.index; w < o.length; w++) {
        switch (o.charCodeAt(w)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        E !== w && (v += o.substring(E, w)), E = w + 1, v += u;
      }
      o = E !== w ? v + o.substring(E, w) : v;
    }
    return o;
  }
  var O = /([A-Z])/g, P = /^ms-/, M = Array.isArray;
  function B(o, u) {
    return { insertionMode: o, selectedValue: u };
  }
  function W(o, u, v) {
    switch (u) {
      case "select":
        return B(1, v.value != null ? v.value : v.defaultValue);
      case "svg":
        return B(2, null);
      case "math":
        return B(3, null);
      case "foreignObject":
        return B(1, null);
      case "table":
        return B(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return B(5, null);
      case "colgroup":
        return B(7, null);
      case "tr":
        return B(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? B(1, null) : o;
  }
  var U = /* @__PURE__ */ new Map();
  function I(o, u, v) {
    if (typeof v != "object") throw Error(t(62));
    u = !0;
    for (var w in v) if (n.call(v, w)) {
      var E = v[w];
      if (E != null && typeof E != "boolean" && E !== "") {
        if (w.indexOf("--") === 0) {
          var k = A(w);
          E = A(("" + E).trim());
        } else {
          k = w;
          var N = U.get(k);
          N !== void 0 || (N = A(k.replace(O, "-$1").toLowerCase().replace(P, "-ms-")), U.set(k, N)), k = N, E = typeof E == "number" ? E === 0 || n.call(x, w) ? "" + E : E + "px" : A(("" + E).trim());
        }
        u ? (u = !1, o.push(' style="', k, ":", E)) : o.push(";", k, ":", E);
      }
    }
    u || o.push('"');
  }
  function Z(o, u, v, w) {
    switch (v) {
      case "style":
        I(o, u, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
      if (u = f.hasOwnProperty(v) ? f[v] : null, u !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (v = u.attributeName, u.type) {
          case 3:
            w && o.push(" ", v, '=""');
            break;
          case 4:
            w === !0 ? o.push(" ", v, '=""') : w !== !1 && o.push(" ", v, '="', A(w), '"');
            break;
          case 5:
            isNaN(w) || o.push(" ", v, '="', A(w), '"');
            break;
          case 6:
            !isNaN(w) && 1 <= w && o.push(" ", v, '="', A(w), '"');
            break;
          default:
            u.sanitizeURL && (w = "" + w), o.push(" ", v, '="', A(w), '"');
        }
      } else if (d(v)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = v.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        o.push(" ", v, '="', A(w), '"');
      }
    }
  }
  function ce(o, u, v) {
    if (u != null) {
      if (v != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && o.push("" + u);
    }
  }
  function Me(o) {
    var u = "";
    return e.Children.forEach(o, function(v) {
      v != null && (u += v);
    }), u;
  }
  function ee(o, u, v, w) {
    o.push(ge(v));
    var E = v = null, k;
    for (k in u) if (n.call(u, k)) {
      var N = u[k];
      if (N != null) switch (k) {
        case "children":
          v = N;
          break;
        case "dangerouslySetInnerHTML":
          E = N;
          break;
        default:
          Z(o, w, k, N);
      }
    }
    return o.push(">"), ce(o, E, v), typeof v == "string" ? (o.push(A(v)), null) : v;
  }
  var be = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ge = /* @__PURE__ */ new Map();
  function ge(o) {
    var u = Ge.get(o);
    if (u === void 0) {
      if (!be.test(o)) throw Error(t(65, o));
      u = "<" + o, Ge.set(o, u);
    }
    return u;
  }
  function ve(o, u, v, w, E) {
    switch (u) {
      case "select":
        o.push(ge("select"));
        var k = null, N = null;
        for (ae in v) if (n.call(v, ae)) {
          var H = v[ae];
          if (H != null) switch (ae) {
            case "children":
              k = H;
              break;
            case "dangerouslySetInnerHTML":
              N = H;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Z(o, w, ae, H);
          }
        }
        return o.push(">"), ce(o, N, k), k;
      case "option":
        N = E.selectedValue, o.push(ge("option"));
        var te = H = null, re = null, ae = null;
        for (k in v) if (n.call(v, k)) {
          var Ie = v[k];
          if (Ie != null) switch (k) {
            case "children":
              H = Ie;
              break;
            case "selected":
              re = Ie;
              break;
            case "dangerouslySetInnerHTML":
              ae = Ie;
              break;
            case "value":
              te = Ie;
            default:
              Z(o, w, k, Ie);
          }
        }
        if (N != null) if (v = te !== null ? "" + te : Me(H), M(N)) {
          for (w = 0; w < N.length; w++)
            if ("" + N[w] === v) {
              o.push(' selected=""');
              break;
            }
        } else "" + N === v && o.push(' selected=""');
        else re && o.push(' selected=""');
        return o.push(">"), ce(o, ae, H), H;
      case "textarea":
        o.push(ge("textarea")), ae = N = k = null;
        for (H in v) if (n.call(v, H) && (te = v[H], te != null)) switch (H) {
          case "children":
            ae = te;
            break;
          case "value":
            k = te;
            break;
          case "defaultValue":
            N = te;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            Z(
              o,
              w,
              H,
              te
            );
        }
        if (k === null && N !== null && (k = N), o.push(">"), ae != null) {
          if (k != null) throw Error(t(92));
          if (M(ae) && 1 < ae.length) throw Error(t(93));
          k = "" + ae;
        }
        return typeof k == "string" && k[0] === `
` && o.push(`
`), k !== null && o.push(A("" + k)), null;
      case "input":
        o.push(ge("input")), te = ae = H = k = null;
        for (N in v) if (n.call(v, N) && (re = v[N], re != null)) switch (N) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            te = re;
            break;
          case "defaultValue":
            H = re;
            break;
          case "checked":
            ae = re;
            break;
          case "value":
            k = re;
            break;
          default:
            Z(o, w, N, re);
        }
        return ae !== null ? Z(o, w, "checked", ae) : te !== null && Z(o, w, "checked", te), k !== null ? Z(o, w, "value", k) : H !== null && Z(o, w, "value", H), o.push("/>"), null;
      case "menuitem":
        o.push(ge("menuitem"));
        for (var Et in v) if (n.call(v, Et) && (k = v[Et], k != null)) switch (Et) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            Z(o, w, Et, k);
        }
        return o.push(">"), null;
      case "title":
        o.push(ge("title")), k = null;
        for (Ie in v) if (n.call(v, Ie) && (N = v[Ie], N != null)) switch (Ie) {
          case "children":
            k = N;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            Z(o, w, Ie, N);
        }
        return o.push(">"), k;
      case "listing":
      case "pre":
        o.push(ge(u)), N = k = null;
        for (te in v) if (n.call(v, te) && (H = v[te], H != null)) switch (te) {
          case "children":
            k = H;
            break;
          case "dangerouslySetInnerHTML":
            N = H;
            break;
          default:
            Z(o, w, te, H);
        }
        if (o.push(">"), N != null) {
          if (k != null) throw Error(t(60));
          if (typeof N != "object" || !("__html" in N)) throw Error(t(61));
          v = N.__html, v != null && (typeof v == "string" && 0 < v.length && v[0] === `
` ? o.push(`
`, v) : o.push("" + v));
        }
        return typeof k == "string" && k[0] === `
` && o.push(`
`), k;
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
        o.push(ge(u));
        for (var Ct in v) if (n.call(v, Ct) && (k = v[Ct], k != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            Z(o, w, Ct, k);
        }
        return o.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ee(
          o,
          v,
          u,
          w
        );
      case "html":
        return E.insertionMode === 0 && o.push("<!DOCTYPE html>"), ee(o, v, u, w);
      default:
        if (u.indexOf("-") === -1 && typeof v.is != "string") return ee(o, v, u, w);
        o.push(ge(u)), N = k = null;
        for (re in v) if (n.call(v, re) && (H = v[re], H != null)) switch (re) {
          case "children":
            k = H;
            break;
          case "dangerouslySetInnerHTML":
            N = H;
            break;
          case "style":
            I(o, w, H);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(re) && typeof H != "function" && typeof H != "symbol" && o.push(" ", re, '="', A(H), '"');
        }
        return o.push(">"), ce(o, N, k), k;
    }
  }
  function ze(o, u, v) {
    if (o.push('<!--$?--><template id="'), v === null) throw Error(t(395));
    return o.push(v), o.push('"></template>');
  }
  function De(o, u, v, w) {
    switch (v.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(u.segmentPrefix), u = w.toString(16), o.push(u), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = w.toString(16), o.push(u), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(u.segmentPrefix), u = w.toString(16), o.push(u), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(u.segmentPrefix), u = w.toString(16), o.push(u), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(u.segmentPrefix), u = w.toString(16), o.push(u), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(u.segmentPrefix), u = w.toString(16), o.push(u), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(u.segmentPrefix), u = w.toString(16), o.push(u), o.push('">');
      default:
        throw Error(t(397));
    }
  }
  function dt(o, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return o.push("</div>");
      case 2:
        return o.push("</svg>");
      case 3:
        return o.push("</math>");
      case 4:
        return o.push("</table>");
      case 5:
        return o.push("</tbody></table>");
      case 6:
        return o.push("</tr></table>");
      case 7:
        return o.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Ke = /[<\u2028\u2029]/g;
  function Ve(o) {
    return JSON.stringify(o).replace(Ke, function(u) {
      switch (u) {
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
  function We(o, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function at(o, u, v, w) {
    return v.generateStaticMarkup ? (o.push(A(u)), !1) : (u === "" ? o = w : (w && o.push("<!-- -->"), o.push(A(u)), o = !0), o);
  }
  var nt = Object.assign, Y = Symbol.for("react.element"), z = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), F = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ye = Symbol.for("react.scope"), se = Symbol.for("react.debug_trace_mode"), xe = Symbol.for("react.legacy_hidden"), he = Symbol.for("react.default_value"), Re = Symbol.iterator;
  function Ue(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case q:
        return "Fragment";
      case z:
        return "Portal";
      case R:
        return "Profiler";
      case G:
        return "StrictMode";
      case ie:
        return "Suspense";
      case oe:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case F:
        return (o.displayName || "Context") + ".Consumer";
      case K:
        return (o._context.displayName || "Context") + ".Provider";
      case fe:
        var u = o.render;
        return o = o.displayName, o || (o = u.displayName || u.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case Q:
        return u = o.displayName || null, u !== null ? u : Ue(o.type) || "Memo";
      case pe:
        u = o._payload, o = o._init;
        try {
          return Ue(o(u));
        } catch {
        }
    }
    return null;
  }
  var Oe = {};
  function st(o, u) {
    if (o = o.contextTypes, !o) return Oe;
    var v = {}, w;
    for (w in o) v[w] = u[w];
    return v;
  }
  var qe = null;
  function Se(o, u) {
    if (o !== u) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var v = u.parent;
      if (o === null) {
        if (v !== null) throw Error(t(401));
      } else {
        if (v === null) throw Error(t(401));
        Se(o, v);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function J(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && J(o);
  }
  function ke(o) {
    var u = o.parent;
    u !== null && ke(u), o.context._currentValue2 = o.value;
  }
  function lt(o, u) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === u.depth ? Se(o, u) : lt(o, u);
  }
  function rt(o, u) {
    var v = u.parent;
    if (v === null) throw Error(t(402));
    o.depth === v.depth ? Se(o, v) : rt(o, v), u.context._currentValue2 = u.value;
  }
  function Be(o) {
    var u = qe;
    u !== o && (u === null ? ke(o) : o === null ? J(u) : u.depth === o.depth ? Se(u, o) : u.depth > o.depth ? lt(u, o) : rt(u, o), qe = o);
  }
  var fn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, u) {
    o = o._reactInternals, o.queue !== null && o.queue.push(u);
  }, enqueueReplaceState: function(o, u) {
    o = o._reactInternals, o.replace = !0, o.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function pn(o, u, v, w) {
    var E = o.state !== void 0 ? o.state : null;
    o.updater = fn, o.props = v, o.state = E;
    var k = { queue: [], replace: !1 };
    o._reactInternals = k;
    var N = u.contextType;
    if (o.context = typeof N == "object" && N !== null ? N._currentValue2 : w, N = u.getDerivedStateFromProps, typeof N == "function" && (N = N(v, E), E = N == null ? E : nt({}, E, N), o.state = E), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (u = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && fn.enqueueReplaceState(o, o.state, null), k.queue !== null && 0 < k.queue.length) if (u = k.queue, N = k.replace, k.queue = null, k.replace = !1, N && u.length === 1) o.state = u[0];
    else {
      for (k = N ? u[0] : o.state, E = !0, N = N ? 1 : 0; N < u.length; N++) {
        var H = u[N];
        H = typeof H == "function" ? H.call(o, k, v, w) : H, H != null && (E ? (E = !1, k = nt({}, k, H)) : nt(k, H));
      }
      o.state = k;
    }
    else k.queue = null;
  }
  var On = { id: 1, overflow: "" };
  function Mt(o, u, v) {
    var w = o.id;
    o = o.overflow;
    var E = 32 - Dt(w) - 1;
    w &= ~(1 << E), v += 1;
    var k = 32 - Dt(u) + E;
    if (30 < k) {
      var N = E - E % 5;
      return k = (w & (1 << N) - 1).toString(32), w >>= N, E -= N, { id: 1 << 32 - Dt(u) + E | v << E | w, overflow: k + o };
    }
    return { id: 1 << k | v << E | w, overflow: o };
  }
  var Dt = Math.clz32 ? Math.clz32 : ft, Jt = Math.log, Qt = Math.LN2;
  function ft(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Jt(o) / Qt | 0) | 0;
  }
  function Pt(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var hn = typeof Object.is == "function" ? Object.is : Pt, et = null, mn = null, ct = null, Te = null, Ft = !1, Ne = !1, ut = 0, wt = null, $t = 0;
  function pt() {
    if (et === null) throw Error(t(321));
    return et;
  }
  function gn() {
    if (0 < $t) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function en() {
    return Te === null ? ct === null ? (Ft = !1, ct = Te = gn()) : (Ft = !0, Te = ct) : Te.next === null ? (Ft = !1, Te = Te.next = gn()) : (Ft = !0, Te = Te.next), Te;
  }
  function vn() {
    mn = et = null, Ne = !1, ct = null, $t = 0, Te = wt = null;
  }
  function Bt(o, u) {
    return typeof u == "function" ? u(o) : u;
  }
  function tn(o, u, v) {
    if (et = pt(), Te = en(), Ft) {
      var w = Te.queue;
      if (u = w.dispatch, wt !== null && (v = wt.get(w), v !== void 0)) {
        wt.delete(w), w = Te.memoizedState;
        do
          w = o(w, v.action), v = v.next;
        while (v !== null);
        return Te.memoizedState = w, [w, u];
      }
      return [Te.memoizedState, u];
    }
    return o = o === Bt ? typeof u == "function" ? u() : u : v !== void 0 ? v(u) : u, Te.memoizedState = o, o = Te.queue = { last: null, dispatch: null }, o = o.dispatch = tt.bind(null, et, o), [Te.memoizedState, o];
  }
  function Rn(o, u) {
    if (et = pt(), Te = en(), u = u === void 0 ? null : u, Te !== null) {
      var v = Te.memoizedState;
      if (v !== null && u !== null) {
        var w = v[1];
        e: if (w === null) w = !1;
        else {
          for (var E = 0; E < w.length && E < u.length; E++) if (!hn(u[E], w[E])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return v[0];
      }
    }
    return o = o(), Te.memoizedState = [o, u], o;
  }
  function tt(o, u, v) {
    if (25 <= $t) throw Error(t(301));
    if (o === et) if (Ne = !0, o = { action: v, next: null }, wt === null && (wt = /* @__PURE__ */ new Map()), v = wt.get(u), v === void 0) wt.set(u, o);
    else {
      for (u = v; u.next !== null; ) u = u.next;
      u.next = o;
    }
  }
  function nn() {
    throw Error(t(394));
  }
  function zt() {
  }
  var yn = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return pt(), o._currentValue2;
  }, useMemo: Rn, useReducer: tn, useRef: function(o) {
    et = pt(), Te = en();
    var u = Te.memoizedState;
    return u === null ? (o = { current: o }, Te.memoizedState = o) : u;
  }, useState: function(o) {
    return tn(Bt, o);
  }, useInsertionEffect: zt, useLayoutEffect: function() {
  }, useCallback: function(o, u) {
    return Rn(function() {
      return o;
    }, u);
  }, useImperativeHandle: zt, useEffect: zt, useDebugValue: zt, useDeferredValue: function(o) {
    return pt(), o;
  }, useTransition: function() {
    return pt(), [
      !1,
      nn
    ];
  }, useId: function() {
    var o = mn.treeContext, u = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Dt(o) - 1)).toString(32) + u;
    var v = Ht;
    if (v === null) throw Error(t(404));
    return u = ut++, o = ":" + v.idPrefix + "R" + o, 0 < u && (o += "H" + u.toString(32)), o + ":";
  }, useMutableSource: function(o, u) {
    return pt(), u(o._source);
  }, useSyncExternalStore: function(o, u, v) {
    if (v === void 0) throw Error(t(407));
    return v();
  } }, Ht = null, Tt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ht(o) {
    return console.error(o), null;
  }
  function It() {
  }
  function An(o, u, v, w, E, k, N, H, te) {
    var re = [], ae = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ae, pingedTasks: re, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: E === void 0 ? ht : E, onAllReady: It, onShellReady: N === void 0 ? It : N, onShellError: It, onFatalError: It }, v = Vt(u, 0, null, v, !1, !1), v.parentFlushed = !0, o = rn(u, o, null, v, ae, Oe, null, On), re.push(o), u;
  }
  function rn(o, u, v, w, E, k, N, H) {
    o.allPendingTasks++, v === null ? o.pendingRootTasks++ : v.pendingTasks++;
    var te = { node: u, ping: function() {
      var re = o.pingedTasks;
      re.push(te), re.length === 1 && $n(o);
    }, blockedBoundary: v, blockedSegment: w, abortSet: E, legacyContext: k, context: N, treeContext: H };
    return E.add(te), te;
  }
  function Vt(o, u, v, w, E, k) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: v, lastPushedText: E, textEmbedded: k };
  }
  function Wt(o, u) {
    if (o = o.onError(u), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function X(o, u) {
    var v = o.onShellError;
    v(u), v = o.onFatalError, v(u), o.destination !== null ? (o.status = 2, o.destination.destroy(u)) : (o.status = 1, o.fatalError = u);
  }
  function S(o, u, v, w, E) {
    for (et = {}, mn = u, ut = 0, o = v(w, E); Ne; ) Ne = !1, ut = 0, $t += 1, Te = null, o = v(w, E);
    return vn(), o;
  }
  function D(o, u, v, w) {
    var E = v.render(), k = w.childContextTypes;
    if (k != null) {
      var N = u.legacyContext;
      if (typeof v.getChildContext != "function") w = N;
      else {
        v = v.getChildContext();
        for (var H in v) if (!(H in k)) throw Error(t(108, Ue(w) || "Unknown", H));
        w = nt({}, N, v);
      }
      u.legacyContext = w, _e(o, u, E), u.legacyContext = N;
    } else _e(o, u, E);
  }
  function V(o, u) {
    if (o && o.defaultProps) {
      u = nt({}, u), o = o.defaultProps;
      for (var v in o) u[v] === void 0 && (u[v] = o[v]);
      return u;
    }
    return u;
  }
  function me(o, u, v, w, E) {
    if (typeof v == "function") if (v.prototype && v.prototype.isReactComponent) {
      E = st(v, u.legacyContext);
      var k = v.contextType;
      k = new v(w, typeof k == "object" && k !== null ? k._currentValue2 : E), pn(k, v, w, E), D(o, u, k, v);
    } else {
      k = st(v, u.legacyContext), E = S(o, u, v, w, k);
      var N = ut !== 0;
      if (typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) pn(E, v, w, k), D(o, u, E, v);
      else if (N) {
        w = u.treeContext, u.treeContext = Mt(w, 1, 0);
        try {
          _e(o, u, E);
        } finally {
          u.treeContext = w;
        }
      } else _e(o, u, E);
    }
    else if (typeof v == "string") {
      switch (E = u.blockedSegment, k = ve(E.chunks, v, w, o.responseState, E.formatContext), E.lastPushedText = !1, N = E.formatContext, E.formatContext = W(N, v, w), Fe(o, u, k), E.formatContext = N, v) {
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
          E.chunks.push("</", v, ">");
      }
      E.lastPushedText = !1;
    } else {
      switch (v) {
        case xe:
        case se:
        case G:
        case R:
        case q:
          _e(o, u, w.children);
          return;
        case oe:
          _e(o, u, w.children);
          return;
        case ye:
          throw Error(t(343));
        case ie:
          e: {
            v = u.blockedBoundary, E = u.blockedSegment, k = w.fallback, w = w.children, N = /* @__PURE__ */ new Set();
            var H = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: N, errorDigest: null }, te = Vt(o, E.chunks.length, H, E.formatContext, !1, !1);
            E.children.push(te), E.lastPushedText = !1;
            var re = Vt(o, 0, null, E.formatContext, !1, !1);
            re.parentFlushed = !0, u.blockedBoundary = H, u.blockedSegment = re;
            try {
              if (Fe(
                o,
                u,
                w
              ), o.responseState.generateStaticMarkup || re.lastPushedText && re.textEmbedded && re.chunks.push("<!-- -->"), re.status = 1, bt(H, re), H.pendingTasks === 0) break e;
            } catch (ae) {
              re.status = 4, H.forceClientRender = !0, H.errorDigest = Wt(o, ae);
            } finally {
              u.blockedBoundary = v, u.blockedSegment = E;
            }
            u = rn(o, k, v, te, N, u.legacyContext, u.context, u.treeContext), o.pingedTasks.push(u);
          }
          return;
      }
      if (typeof v == "object" && v !== null) switch (v.$$typeof) {
        case fe:
          if (w = S(o, u, v.render, w, E), ut !== 0) {
            v = u.treeContext, u.treeContext = Mt(v, 1, 0);
            try {
              _e(o, u, w);
            } finally {
              u.treeContext = v;
            }
          } else _e(o, u, w);
          return;
        case Q:
          v = v.type, w = V(v, w), me(o, u, v, w, E);
          return;
        case K:
          if (E = w.children, v = v._context, w = w.value, k = v._currentValue2, v._currentValue2 = w, N = qe, qe = w = { parent: N, depth: N === null ? 0 : N.depth + 1, context: v, parentValue: k, value: w }, u.context = w, _e(o, u, E), o = qe, o === null) throw Error(t(403));
          w = o.parentValue, o.context._currentValue2 = w === he ? o.context._defaultValue : w, o = qe = o.parent, u.context = o;
          return;
        case F:
          w = w.children, w = w(v._currentValue2), _e(o, u, w);
          return;
        case pe:
          E = v._init, v = E(v._payload), w = V(v, w), me(
            o,
            u,
            v,
            w,
            void 0
          );
          return;
      }
      throw Error(t(130, v == null ? v : typeof v, ""));
    }
  }
  function _e(o, u, v) {
    if (u.node = v, typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Y:
          me(o, u, v.type, v.props, v.ref);
          return;
        case z:
          throw Error(t(257));
        case pe:
          var w = v._init;
          v = w(v._payload), _e(o, u, v);
          return;
      }
      if (M(v)) {
        He(o, u, v);
        return;
      }
      if (v === null || typeof v != "object" ? w = null : (w = Re && v[Re] || v["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(v))) {
        if (v = w.next(), !v.done) {
          var E = [];
          do
            E.push(v.value), v = w.next();
          while (!v.done);
          He(o, u, E);
        }
        return;
      }
      throw o = Object.prototype.toString.call(v), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : o));
    }
    typeof v == "string" ? (w = u.blockedSegment, w.lastPushedText = at(u.blockedSegment.chunks, v, o.responseState, w.lastPushedText)) : typeof v == "number" && (w = u.blockedSegment, w.lastPushedText = at(u.blockedSegment.chunks, "" + v, o.responseState, w.lastPushedText));
  }
  function He(o, u, v) {
    for (var w = v.length, E = 0; E < w; E++) {
      var k = u.treeContext;
      u.treeContext = Mt(k, w, E);
      try {
        Fe(o, u, v[E]);
      } finally {
        u.treeContext = k;
      }
    }
  }
  function Fe(o, u, v) {
    var w = u.blockedSegment.formatContext, E = u.legacyContext, k = u.context;
    try {
      return _e(o, u, v);
    } catch (te) {
      if (vn(), typeof te == "object" && te !== null && typeof te.then == "function") {
        v = te;
        var N = u.blockedSegment, H = Vt(o, N.chunks.length, null, N.formatContext, N.lastPushedText, !0);
        N.children.push(H), N.lastPushedText = !1, o = rn(o, u.node, u.blockedBoundary, H, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, v.then(o, o), u.blockedSegment.formatContext = w, u.legacyContext = E, u.context = k, Be(k);
      } else throw u.blockedSegment.formatContext = w, u.legacyContext = E, u.context = k, Be(k), te;
    }
  }
  function mt(o) {
    var u = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, _t(this, u, o);
  }
  function Pe(o, u, v) {
    var w = o.blockedBoundary;
    o.blockedSegment.status = 3, w === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, o = v === void 0 ? Error(t(432)) : v, w.errorDigest = u.onError(o), w.parentFlushed && u.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(E) {
      return Pe(E, u, v);
    }), w.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (w = u.onAllReady, w()));
  }
  function bt(o, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var v = u.children[0];
      v.id = u.id, v.parentFlushed = !0, v.status === 1 && bt(o, v);
    } else o.completedSegments.push(u);
  }
  function _t(o, u, v) {
    if (u === null) {
      if (v.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = v;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = It, u = o.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (v.parentFlushed && v.status === 1 && bt(u, v), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(mt, o), u.fallbackAbortableTasks.clear()) : v.parentFlushed && v.status === 1 && (bt(u, v), u.completedSegments.length === 1 && u.parentFlushed && o.partialBoundaries.push(u)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function $n(o) {
    if (o.status !== 2) {
      var u = qe, v = Tt.current;
      Tt.current = yn;
      var w = Ht;
      Ht = o.responseState;
      try {
        var E = o.pingedTasks, k;
        for (k = 0; k < E.length; k++) {
          var N = E[k], H = o, te = N.blockedSegment;
          if (te.status === 0) {
            Be(N.context);
            try {
              _e(H, N, N.node), H.responseState.generateStaticMarkup || te.lastPushedText && te.textEmbedded && te.chunks.push("<!-- -->"), N.abortSet.delete(N), te.status = 1, _t(H, N.blockedBoundary, te);
            } catch (gt) {
              if (vn(), typeof gt == "object" && gt !== null && typeof gt.then == "function") {
                var re = N.ping;
                gt.then(re, re);
              } else {
                N.abortSet.delete(N), te.status = 4;
                var ae = N.blockedBoundary, Ie = gt, Et = Wt(H, Ie);
                if (ae === null ? X(H, Ie) : (ae.pendingTasks--, ae.forceClientRender || (ae.forceClientRender = !0, ae.errorDigest = Et, ae.parentFlushed && H.clientRenderedBoundaries.push(ae))), H.allPendingTasks--, H.allPendingTasks === 0) {
                  var Ct = H.onAllReady;
                  Ct();
                }
              }
            } finally {
            }
          }
        }
        E.splice(0, k), o.destination !== null && Nn(o, o.destination);
      } catch (gt) {
        Wt(o, gt), X(o, gt);
      } finally {
        Ht = w, Tt.current = v, v === yn && Be(u);
      }
    }
  }
  function wn(o, u, v) {
    switch (v.parentFlushed = !0, v.status) {
      case 0:
        var w = v.id = o.nextSegmentId++;
        return v.lastPushedText = !1, v.textEmbedded = !1, o = o.responseState, u.push('<template id="'), u.push(o.placeholderPrefix), o = w.toString(16), u.push(o), u.push('"></template>');
      case 1:
        v.status = 2;
        var E = !0;
        w = v.chunks;
        var k = 0;
        v = v.children;
        for (var N = 0; N < v.length; N++) {
          for (E = v[N]; k < E.index; k++) u.push(w[k]);
          E = bn(o, u, E);
        }
        for (; k < w.length - 1; k++) u.push(w[k]);
        return k < w.length && (E = u.push(w[k])), E;
      default:
        throw Error(t(390));
    }
  }
  function bn(o, u, v) {
    var w = v.boundary;
    if (w === null) return wn(o, u, v);
    if (w.parentFlushed = !0, w.forceClientRender) return o.responseState.generateStaticMarkup || (w = w.errorDigest, u.push("<!--$!-->"), u.push("<template"), w && (u.push(' data-dgst="'), w = A(w), u.push(w), u.push('"')), u.push("></template>")), wn(o, u, v), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
    if (0 < w.pendingTasks) {
      w.rootSegmentID = o.nextSegmentId++, 0 < w.completedSegments.length && o.partialBoundaries.push(w);
      var E = o.responseState, k = E.nextSuspenseID++;
      return E = E.boundaryPrefix + k.toString(16), w = w.id = E, ze(u, o.responseState, w), wn(o, u, v), u.push("<!--/$-->");
    }
    if (w.byteSize > o.progressiveChunkSize) return w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), ze(u, o.responseState, w.id), wn(o, u, v), u.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || u.push("<!--$-->"), v = w.completedSegments, v.length !== 1) throw Error(t(391));
    return bn(o, u, v[0]), o = o.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), o;
  }
  function Bn(o, u, v) {
    return De(u, o.responseState, v.formatContext, v.id), bn(o, u, v), dt(u, v.formatContext);
  }
  function zn(o, u, v) {
    for (var w = v.completedSegments, E = 0; E < w.length; E++) Hn(o, u, v, w[E]);
    if (w.length = 0, o = o.responseState, w = v.id, v = v.rootSegmentID, u.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? u.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), w === null) throw Error(t(395));
    return v = v.toString(16), u.push(w), u.push('","'), u.push(o.segmentPrefix), u.push(v), u.push('")<\/script>');
  }
  function Hn(o, u, v, w) {
    if (w.status === 2) return !0;
    var E = w.id;
    if (E === -1) {
      if ((w.id = v.rootSegmentID) === -1) throw Error(t(392));
      return Bn(o, u, w);
    }
    return Bn(o, u, w), o = o.responseState, u.push(o.startInlineScript), o.sentCompleteSegmentFunction ? u.push('$RS("') : (o.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(o.segmentPrefix), E = E.toString(16), u.push(E), u.push('","'), u.push(o.placeholderPrefix), u.push(E), u.push('")<\/script>');
  }
  function Nn(o, u) {
    try {
      var v = o.completedRootSegment;
      if (v !== null && o.pendingRootTasks === 0) {
        bn(o, u, v), o.completedRootSegment = null;
        var w = o.responseState.bootstrapChunks;
        for (v = 0; v < w.length - 1; v++) u.push(w[v]);
        v < w.length && u.push(w[v]);
      }
      var E = o.clientRenderedBoundaries, k;
      for (k = 0; k < E.length; k++) {
        var N = E[k];
        w = u;
        var H = o.responseState, te = N.id, re = N.errorDigest, ae = N.errorMessage, Ie = N.errorComponentStack;
        if (w.push(H.startInlineScript), H.sentClientRenderFunction ? w.push('$RX("') : (H.sentClientRenderFunction = !0, w.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), te === null) throw Error(t(395));
        if (w.push(te), w.push('"'), re || ae || Ie) {
          w.push(",");
          var Et = Ve(re || "");
          w.push(Et);
        }
        if (ae || Ie) {
          w.push(",");
          var Ct = Ve(ae || "");
          w.push(Ct);
        }
        if (Ie) {
          w.push(",");
          var gt = Ve(Ie);
          w.push(gt);
        }
        if (!w.push(")<\/script>")) {
          o.destination = null, k++, E.splice(0, k);
          return;
        }
      }
      E.splice(0, k);
      var xn = o.completedBoundaries;
      for (k = 0; k < xn.length; k++) if (!zn(o, u, xn[k])) {
        o.destination = null, k++, xn.splice(0, k);
        return;
      }
      xn.splice(0, k);
      var Ut = o.partialBoundaries;
      for (k = 0; k < Ut.length; k++) {
        var Wn = Ut[k];
        e: {
          E = o, N = u;
          var Sn = Wn.completedSegments;
          for (H = 0; H < Sn.length; H++) if (!Hn(E, N, Wn, Sn[H])) {
            H++, Sn.splice(0, H);
            var rr = !1;
            break e;
          }
          Sn.splice(0, H), rr = !0;
        }
        if (!rr) {
          o.destination = null, k++, Ut.splice(0, k);
          return;
        }
      }
      Ut.splice(0, k);
      var on = o.completedBoundaries;
      for (k = 0; k < on.length; k++) if (!zn(o, u, on[k])) {
        o.destination = null, k++, on.splice(0, k);
        return;
      }
      on.splice(0, k);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function tr(o, u) {
    try {
      var v = o.abortableTasks;
      v.forEach(function(w) {
        return Pe(w, o, u);
      }), v.clear(), o.destination !== null && Nn(o, o.destination);
    } catch (w) {
      Wt(o, w), X(o, w);
    }
  }
  function nr() {
  }
  function Vn(o, u, v, w) {
    var E = !1, k = null, N = "", H = { push: function(re) {
      return re !== null && (N += re), !0;
    }, destroy: function(re) {
      E = !0, k = re;
    } }, te = !1;
    if (o = An(o, We(v, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, nr, void 0, function() {
      te = !0;
    }), $n(o), tr(o, w), o.status === 1) o.status = 2, H.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = H;
      try {
        Nn(o, H);
      } catch (re) {
        Wt(o, re), X(o, re);
      }
    }
    if (E) throw k;
    if (!te) throw Error(t(426));
    return N;
  }
  return _n.renderToNodeStream = function() {
    throw Error(t(207));
  }, _n.renderToStaticMarkup = function(o, u) {
    return Vn(o, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, _n.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, _n.renderToString = function(o, u) {
    return Vn(o, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, _n.version = "18.3.1", _n;
}
var yr = {};
var Mi;
function fl() {
  if (Mi) return yr;
  Mi = 1;
  var e = $e;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, m = 1; m < arguments.length; m++) c += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = null, r = 0;
  function a(i, c) {
    if (c.length !== 0) if (512 < c.length) 0 < r && (i.enqueue(new Uint8Array(n.buffer, 0, r)), n = new Uint8Array(512), r = 0), i.enqueue(c);
    else {
      var m = n.length - r;
      m < c.length && (m === 0 ? i.enqueue(n) : (n.set(c.subarray(0, m), r), i.enqueue(n), c = c.subarray(m)), n = new Uint8Array(512), r = 0), n.set(c, r), r += c.length;
    }
  }
  function s(i, c) {
    return a(i, c), !0;
  }
  function d(i) {
    n && 0 < r && (i.enqueue(new Uint8Array(n.buffer, 0, r)), n = null, r = 0);
  }
  var g = new TextEncoder();
  function f(i) {
    return g.encode(i);
  }
  function h(i) {
    return g.encode(i);
  }
  function b(i, c) {
    typeof i.error == "function" ? i.error(c) : i.close();
  }
  var x = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, L = {}, A = {};
  function O(i) {
    return x.call(A, i) ? !0 : x.call(L, i) ? !1 : C.test(i) ? A[i] = !0 : (L[i] = !0, !1);
  }
  function P(i, c, m, y, _, T, j) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = y, this.attributeNamespace = _, this.mustUseProperty = m, this.propertyName = i, this.type = c, this.sanitizeURL = T, this.removeEmptyString = j;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    M[i] = new P(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    M[c] = new P(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    M[i] = new P(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    M[i] = new P(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    M[i] = new P(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    M[i] = new P(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    M[i] = new P(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    M[i] = new P(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    M[i] = new P(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var B = /[\-:]([a-z])/g;
  function W(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      B,
      W
    );
    M[c] = new P(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(B, W);
    M[c] = new P(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(B, W);
    M[c] = new P(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    M[i] = new P(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    M[i] = new P(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  }, I = ["Webkit", "ms", "Moz", "O"];
  Object.keys(U).forEach(function(i) {
    I.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), U[c] = U[i];
    });
  });
  var Z = /["'&<>]/;
  function ce(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = Z.exec(i);
    if (c) {
      var m = "", y, _ = 0;
      for (y = c.index; y < i.length; y++) {
        switch (i.charCodeAt(y)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        _ !== y && (m += i.substring(_, y)), _ = y + 1, m += c;
      }
      i = _ !== y ? m + i.substring(_, y) : m;
    }
    return i;
  }
  var Me = /([A-Z])/g, ee = /^ms-/, be = Array.isArray, Ge = h("<script>"), ge = h("<\/script>"), ve = h('<script src="'), ze = h('<script type="module" src="'), De = h('" async=""><\/script>'), dt = /(<\/|<)(s)(cript)/gi;
  function Ke(i, c, m, y) {
    return "" + c + (m === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function Ve(i, c, m, y, _) {
    i = i === void 0 ? "" : i, c = c === void 0 ? Ge : h('<script nonce="' + ce(c) + '">');
    var T = [];
    if (m !== void 0 && T.push(c, f(("" + m).replace(dt, Ke)), ge), y !== void 0) for (m = 0; m < y.length; m++) T.push(ve, f(ce(y[m])), De);
    if (_ !== void 0) for (y = 0; y < _.length; y++) T.push(ze, f(ce(_[y])), De);
    return { bootstrapChunks: T, startInlineScript: c, placeholderPrefix: h(i + "P:"), segmentPrefix: h(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function We(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function at(i) {
    return We(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function nt(i, c, m) {
    switch (c) {
      case "select":
        return We(1, m.value != null ? m.value : m.defaultValue);
      case "svg":
        return We(2, null);
      case "math":
        return We(3, null);
      case "foreignObject":
        return We(1, null);
      case "table":
        return We(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return We(5, null);
      case "colgroup":
        return We(7, null);
      case "tr":
        return We(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? We(1, null) : i;
  }
  var Y = h("<!-- -->");
  function z(i, c, m, y) {
    return c === "" ? y : (y && i.push(Y), i.push(f(ce(c))), !0);
  }
  var q = /* @__PURE__ */ new Map(), G = h(' style="'), R = h(":"), K = h(";");
  function F(i, c, m) {
    if (typeof m != "object") throw Error(t(62));
    c = !0;
    for (var y in m) if (x.call(m, y)) {
      var _ = m[y];
      if (_ != null && typeof _ != "boolean" && _ !== "") {
        if (y.indexOf("--") === 0) {
          var T = f(ce(y));
          _ = f(ce(("" + _).trim()));
        } else {
          T = y;
          var j = q.get(T);
          j !== void 0 || (j = h(ce(T.replace(Me, "-$1").toLowerCase().replace(ee, "-ms-"))), q.set(T, j)), T = j, _ = typeof _ == "number" ? _ === 0 || x.call(U, y) ? f("" + _) : f(_ + "px") : f(ce(("" + _).trim()));
        }
        c ? (c = !1, i.push(G, T, R, _)) : i.push(K, T, R, _);
      }
    }
    c || i.push(oe);
  }
  var fe = h(" "), ie = h('="'), oe = h('"'), Q = h('=""');
  function pe(i, c, m, y) {
    switch (m) {
      case "style":
        F(i, c, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (c = M.hasOwnProperty(m) ? M[m] : null, c !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (m = f(c.attributeName), c.type) {
          case 3:
            y && i.push(fe, m, Q);
            break;
          case 4:
            y === !0 ? i.push(fe, m, Q) : y !== !1 && i.push(fe, m, ie, f(ce(y)), oe);
            break;
          case 5:
            isNaN(y) || i.push(fe, m, ie, f(ce(y)), oe);
            break;
          case 6:
            !isNaN(y) && 1 <= y && i.push(fe, m, ie, f(ce(y)), oe);
            break;
          default:
            c.sanitizeURL && (y = "" + y), i.push(fe, m, ie, f(ce(y)), oe);
        }
      } else if (O(m)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = m.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(fe, f(m), ie, f(ce(y)), oe);
      }
    }
  }
  var ye = h(">"), se = h("/>");
  function xe(i, c, m) {
    if (c != null) {
      if (m != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push(f("" + c));
    }
  }
  function he(i) {
    var c = "";
    return e.Children.forEach(i, function(m) {
      m != null && (c += m);
    }), c;
  }
  var Re = h(' selected=""');
  function Ue(i, c, m, y) {
    i.push(Se(m));
    var _ = m = null, T;
    for (T in c) if (x.call(c, T)) {
      var j = c[T];
      if (j != null) switch (T) {
        case "children":
          m = j;
          break;
        case "dangerouslySetInnerHTML":
          _ = j;
          break;
        default:
          pe(i, y, T, j);
      }
    }
    return i.push(ye), xe(i, _, m), typeof m == "string" ? (i.push(f(ce(m))), null) : m;
  }
  var Oe = h(`
`), st = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qe = /* @__PURE__ */ new Map();
  function Se(i) {
    var c = qe.get(i);
    if (c === void 0) {
      if (!st.test(i)) throw Error(t(65, i));
      c = h("<" + i), qe.set(i, c);
    }
    return c;
  }
  var J = h("<!DOCTYPE html>");
  function ke(i, c, m, y, _) {
    switch (c) {
      case "select":
        i.push(Se("select"));
        var T = null, j = null;
        for (le in m) if (x.call(m, le)) {
          var $ = m[le];
          if ($ != null) switch (le) {
            case "children":
              T = $;
              break;
            case "dangerouslySetInnerHTML":
              j = $;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              pe(i, y, le, $);
          }
        }
        return i.push(ye), xe(i, j, T), T;
      case "option":
        j = _.selectedValue, i.push(Se("option"));
        var ne = $ = null, de = null, le = null;
        for (T in m) if (x.call(m, T)) {
          var je = m[T];
          if (je != null) switch (T) {
            case "children":
              $ = je;
              break;
            case "selected":
              de = je;
              break;
            case "dangerouslySetInnerHTML":
              le = je;
              break;
            case "value":
              ne = je;
            default:
              pe(i, y, T, je);
          }
        }
        if (j != null) if (m = ne !== null ? "" + ne : he($), be(j)) {
          for (y = 0; y < j.length; y++)
            if ("" + j[y] === m) {
              i.push(Re);
              break;
            }
        } else "" + j === m && i.push(Re);
        else de && i.push(Re);
        return i.push(ye), xe(i, le, $), $;
      case "textarea":
        i.push(Se("textarea")), le = j = T = null;
        for ($ in m) if (x.call(m, $) && (ne = m[$], ne != null)) switch ($) {
          case "children":
            le = ne;
            break;
          case "value":
            T = ne;
            break;
          case "defaultValue":
            j = ne;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            pe(i, y, $, ne);
        }
        if (T === null && j !== null && (T = j), i.push(ye), le != null) {
          if (T != null) throw Error(t(92));
          if (be(le) && 1 < le.length) throw Error(t(93));
          T = "" + le;
        }
        return typeof T == "string" && T[0] === `
` && i.push(Oe), T !== null && i.push(f(ce("" + T))), null;
      case "input":
        i.push(Se("input")), ne = le = $ = T = null;
        for (j in m) if (x.call(m, j) && (de = m[j], de != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ne = de;
            break;
          case "defaultValue":
            $ = de;
            break;
          case "checked":
            le = de;
            break;
          case "value":
            T = de;
            break;
          default:
            pe(i, y, j, de);
        }
        return le !== null ? pe(
          i,
          y,
          "checked",
          le
        ) : ne !== null && pe(i, y, "checked", ne), T !== null ? pe(i, y, "value", T) : $ !== null && pe(i, y, "value", $), i.push(se), null;
      case "menuitem":
        i.push(Se("menuitem"));
        for (var yt in m) if (x.call(m, yt) && (T = m[yt], T != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            pe(i, y, yt, T);
        }
        return i.push(ye), null;
      case "title":
        i.push(Se("title")), T = null;
        for (je in m) if (x.call(m, je) && (j = m[je], j != null)) switch (je) {
          case "children":
            T = j;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            pe(i, y, je, j);
        }
        return i.push(ye), T;
      case "listing":
      case "pre":
        i.push(Se(c)), j = T = null;
        for (ne in m) if (x.call(m, ne) && ($ = m[ne], $ != null)) switch (ne) {
          case "children":
            T = $;
            break;
          case "dangerouslySetInnerHTML":
            j = $;
            break;
          default:
            pe(i, y, ne, $);
        }
        if (i.push(ye), j != null) {
          if (T != null) throw Error(t(60));
          if (typeof j != "object" || !("__html" in j)) throw Error(t(61));
          m = j.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? i.push(Oe, f(m)) : i.push(f("" + m)));
        }
        return typeof T == "string" && T[0] === `
` && i.push(Oe), T;
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
        i.push(Se(c));
        for (var Ot in m) if (x.call(m, Ot) && (T = m[Ot], T != null)) switch (Ot) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            pe(i, y, Ot, T);
        }
        return i.push(se), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ue(i, m, c, y);
      case "html":
        return _.insertionMode === 0 && i.push(J), Ue(i, m, c, y);
      default:
        if (c.indexOf("-") === -1 && typeof m.is != "string") return Ue(i, m, c, y);
        i.push(Se(c)), j = T = null;
        for (de in m) if (x.call(m, de) && ($ = m[de], $ != null)) switch (de) {
          case "children":
            T = $;
            break;
          case "dangerouslySetInnerHTML":
            j = $;
            break;
          case "style":
            F(i, y, $);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            O(de) && typeof $ != "function" && typeof $ != "symbol" && i.push(fe, f(de), ie, f(ce($)), oe);
        }
        return i.push(ye), xe(i, j, T), T;
    }
  }
  var lt = h("</"), rt = h(">"), Be = h('<template id="'), fn = h('"></template>'), pn = h("<!--$-->"), On = h('<!--$?--><template id="'), Mt = h('"></template>'), Dt = h("<!--$!-->"), Jt = h("<!--/$-->"), Qt = h("<template"), ft = h('"'), Pt = h(' data-dgst="');
  h(' data-msg="'), h(' data-stck="');
  var hn = h("></template>");
  function et(i, c, m) {
    if (a(i, On), m === null) throw Error(t(395));
    return a(i, m), s(i, Mt);
  }
  var mn = h('<div hidden id="'), ct = h('">'), Te = h("</div>"), Ft = h('<svg aria-hidden="true" style="display:none" id="'), Ne = h('">'), ut = h("</svg>"), wt = h('<math aria-hidden="true" style="display:none" id="'), $t = h('">'), pt = h("</math>"), gn = h('<table hidden id="'), en = h('">'), vn = h("</table>"), Bt = h('<table hidden><tbody id="'), tn = h('">'), Rn = h("</tbody></table>"), tt = h('<table hidden><tr id="'), nn = h('">'), zt = h("</tr></table>"), yn = h('<table hidden><colgroup id="'), Ht = h('">'), Tt = h("</colgroup></table>");
  function ht(i, c, m, y) {
    switch (m.insertionMode) {
      case 0:
      case 1:
        return a(i, mn), a(i, c.segmentPrefix), a(i, f(y.toString(16))), s(i, ct);
      case 2:
        return a(i, Ft), a(i, c.segmentPrefix), a(i, f(y.toString(16))), s(i, Ne);
      case 3:
        return a(i, wt), a(i, c.segmentPrefix), a(i, f(y.toString(16))), s(i, $t);
      case 4:
        return a(i, gn), a(i, c.segmentPrefix), a(i, f(y.toString(16))), s(i, en);
      case 5:
        return a(i, Bt), a(i, c.segmentPrefix), a(i, f(y.toString(16))), s(i, tn);
      case 6:
        return a(i, tt), a(i, c.segmentPrefix), a(i, f(y.toString(16))), s(i, nn);
      case 7:
        return a(
          i,
          yn
        ), a(i, c.segmentPrefix), a(i, f(y.toString(16))), s(i, Ht);
      default:
        throw Error(t(397));
    }
  }
  function It(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return s(i, Te);
      case 2:
        return s(i, ut);
      case 3:
        return s(i, pt);
      case 4:
        return s(i, vn);
      case 5:
        return s(i, Rn);
      case 6:
        return s(i, zt);
      case 7:
        return s(i, Tt);
      default:
        throw Error(t(397));
    }
  }
  var An = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), rn = h('$RS("'), Vt = h('","'), Wt = h('")<\/script>'), X = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), S = h('$RC("'), D = h('","'), V = h('")<\/script>'), me = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), _e = h('$RX("'), He = h('"'), Fe = h(")<\/script>"), mt = h(","), Pe = /[<\u2028\u2029]/g;
  function bt(i) {
    return JSON.stringify(i).replace(Pe, function(c) {
      switch (c) {
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
  var _t = Object.assign, $n = Symbol.for("react.element"), wn = Symbol.for("react.portal"), bn = Symbol.for("react.fragment"), Bn = Symbol.for("react.strict_mode"), zn = Symbol.for("react.profiler"), Hn = Symbol.for("react.provider"), Nn = Symbol.for("react.context"), tr = Symbol.for("react.forward_ref"), nr = Symbol.for("react.suspense"), Vn = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.scope"), w = Symbol.for("react.debug_trace_mode"), E = Symbol.for("react.legacy_hidden"), k = Symbol.for("react.default_value"), N = Symbol.iterator;
  function H(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case bn:
        return "Fragment";
      case wn:
        return "Portal";
      case zn:
        return "Profiler";
      case Bn:
        return "StrictMode";
      case nr:
        return "Suspense";
      case Vn:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Nn:
        return (i.displayName || "Context") + ".Consumer";
      case Hn:
        return (i._context.displayName || "Context") + ".Provider";
      case tr:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case o:
        return c = i.displayName || null, c !== null ? c : H(i.type) || "Memo";
      case u:
        c = i._payload, i = i._init;
        try {
          return H(i(c));
        } catch {
        }
    }
    return null;
  }
  var te = {};
  function re(i, c) {
    if (i = i.contextTypes, !i) return te;
    var m = {}, y;
    for (y in i) m[y] = c[y];
    return m;
  }
  var ae = null;
  function Ie(i, c) {
    if (i !== c) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var m = c.parent;
      if (i === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        Ie(i, m);
      }
      c.context._currentValue = c.value;
    }
  }
  function Et(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Et(i);
  }
  function Ct(i) {
    var c = i.parent;
    c !== null && Ct(c), i.context._currentValue = i.value;
  }
  function gt(i, c) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? Ie(i, c) : gt(i, c);
  }
  function xn(i, c) {
    var m = c.parent;
    if (m === null) throw Error(t(402));
    i.depth === m.depth ? Ie(i, m) : xn(i, m), c.context._currentValue = c.value;
  }
  function Ut(i) {
    var c = ae;
    c !== i && (c === null ? Ct(i) : i === null ? Et(c) : c.depth === i.depth ? Ie(c, i) : c.depth > i.depth ? gt(c, i) : xn(c, i), ae = i);
  }
  var Wn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function Sn(i, c, m, y) {
    var _ = i.state !== void 0 ? i.state : null;
    i.updater = Wn, i.props = m, i.state = _;
    var T = { queue: [], replace: !1 };
    i._reactInternals = T;
    var j = c.contextType;
    if (i.context = typeof j == "object" && j !== null ? j._currentValue : y, j = c.getDerivedStateFromProps, typeof j == "function" && (j = j(m, _), _ = j == null ? _ : _t({}, _, j), i.state = _), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Wn.enqueueReplaceState(i, i.state, null), T.queue !== null && 0 < T.queue.length) if (c = T.queue, j = T.replace, T.queue = null, T.replace = !1, j && c.length === 1) i.state = c[0];
    else {
      for (T = j ? c[0] : i.state, _ = !0, j = j ? 1 : 0; j < c.length; j++) {
        var $ = c[j];
        $ = typeof $ == "function" ? $.call(i, T, m, y) : $, $ != null && (_ ? (_ = !1, T = _t({}, T, $)) : _t(T, $));
      }
      i.state = T;
    }
    else T.queue = null;
  }
  var rr = { id: 1, overflow: "" };
  function on(i, c, m) {
    var y = i.id;
    i = i.overflow;
    var _ = 32 - or(y) - 1;
    y &= ~(1 << _), m += 1;
    var T = 32 - or(c) + _;
    if (30 < T) {
      var j = _ - _ % 5;
      return T = (y & (1 << j) - 1).toString(32), y >>= j, _ -= j, { id: 1 << 32 - or(c) + _ | m << _ | y, overflow: T + i };
    }
    return { id: 1 << T | m << _ | y, overflow: i };
  }
  var or = Math.clz32 ? Math.clz32 : us, ls = Math.log, cs = Math.LN2;
  function us(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (ls(i) / cs | 0) | 0;
  }
  function ds(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var fs = typeof Object.is == "function" ? Object.is : ds, qt = null, Zr = null, ir = null, Ae = null, Un = !1, ar = !1, qn = 0, an = null, sr = 0;
  function kn() {
    if (qt === null) throw Error(t(321));
    return qt;
  }
  function oi() {
    if (0 < sr) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Jr() {
    return Ae === null ? ir === null ? (Un = !1, ir = Ae = oi()) : (Un = !0, Ae = ir) : Ae.next === null ? (Un = !1, Ae = Ae.next = oi()) : (Un = !0, Ae = Ae.next), Ae;
  }
  function Qr() {
    Zr = qt = null, ar = !1, ir = null, sr = 0, Ae = an = null;
  }
  function ii(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function ai(i, c, m) {
    if (qt = kn(), Ae = Jr(), Un) {
      var y = Ae.queue;
      if (c = y.dispatch, an !== null && (m = an.get(y), m !== void 0)) {
        an.delete(y), y = Ae.memoizedState;
        do
          y = i(y, m.action), m = m.next;
        while (m !== null);
        return Ae.memoizedState = y, [y, c];
      }
      return [Ae.memoizedState, c];
    }
    return i = i === ii ? typeof c == "function" ? c() : c : m !== void 0 ? m(c) : c, Ae.memoizedState = i, i = Ae.queue = { last: null, dispatch: null }, i = i.dispatch = ps.bind(null, qt, i), [Ae.memoizedState, i];
  }
  function si(i, c) {
    if (qt = kn(), Ae = Jr(), c = c === void 0 ? null : c, Ae !== null) {
      var m = Ae.memoizedState;
      if (m !== null && c !== null) {
        var y = m[1];
        e: if (y === null) y = !1;
        else {
          for (var _ = 0; _ < y.length && _ < c.length; _++) if (!fs(c[_], y[_])) {
            y = !1;
            break e;
          }
          y = !0;
        }
        if (y) return m[0];
      }
    }
    return i = i(), Ae.memoizedState = [i, c], i;
  }
  function ps(i, c, m) {
    if (25 <= sr) throw Error(t(301));
    if (i === qt) if (ar = !0, i = { action: m, next: null }, an === null && (an = /* @__PURE__ */ new Map()), m = an.get(c), m === void 0) an.set(c, i);
    else {
      for (c = m; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function hs() {
    throw Error(t(394));
  }
  function lr() {
  }
  var li = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return kn(), i._currentValue;
  }, useMemo: si, useReducer: ai, useRef: function(i) {
    qt = kn(), Ae = Jr();
    var c = Ae.memoizedState;
    return c === null ? (i = { current: i }, Ae.memoizedState = i) : c;
  }, useState: function(i) {
    return ai(ii, i);
  }, useInsertionEffect: lr, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return si(function() {
      return i;
    }, c);
  }, useImperativeHandle: lr, useEffect: lr, useDebugValue: lr, useDeferredValue: function(i) {
    return kn(), i;
  }, useTransition: function() {
    return kn(), [!1, hs];
  }, useId: function() {
    var i = Zr.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - or(i) - 1)).toString(32) + c;
    var m = cr;
    if (m === null) throw Error(t(404));
    return c = qn++, i = ":" + m.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return kn(), c(i._source);
  }, useSyncExternalStore: function(i, c, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, cr = null, eo = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ms(i) {
    return console.error(i), null;
  }
  function Yn() {
  }
  function gs(i, c, m, y, _, T, j, $, ne) {
    var de = [], le = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: le, pingedTasks: de, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: _ === void 0 ? ms : _, onAllReady: T === void 0 ? Yn : T, onShellReady: j === void 0 ? Yn : j, onShellError: $ === void 0 ? Yn : $, onFatalError: ne === void 0 ? Yn : ne }, m = ur(c, 0, null, m, !1, !1), m.parentFlushed = !0, i = to(c, i, null, m, le, te, null, rr), de.push(i), c;
  }
  function to(i, c, m, y, _, T, j, $) {
    i.allPendingTasks++, m === null ? i.pendingRootTasks++ : m.pendingTasks++;
    var ne = { node: c, ping: function() {
      var de = i.pingedTasks;
      de.push(ne), de.length === 1 && mi(i);
    }, blockedBoundary: m, blockedSegment: y, abortSet: _, legacyContext: T, context: j, treeContext: $ };
    return _.add(ne), ne;
  }
  function ur(i, c, m, y, _, T) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: m, lastPushedText: _, textEmbedded: T };
  }
  function Gn(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function dr(i, c) {
    var m = i.onShellError;
    m(c), m = i.onFatalError, m(c), i.destination !== null ? (i.status = 2, b(i.destination, c)) : (i.status = 1, i.fatalError = c);
  }
  function ci(i, c, m, y, _) {
    for (qt = {}, Zr = c, qn = 0, i = m(y, _); ar; ) ar = !1, qn = 0, sr += 1, Ae = null, i = m(y, _);
    return Qr(), i;
  }
  function ui(i, c, m, y) {
    var _ = m.render(), T = y.childContextTypes;
    if (T != null) {
      var j = c.legacyContext;
      if (typeof m.getChildContext != "function") y = j;
      else {
        m = m.getChildContext();
        for (var $ in m) if (!($ in T)) throw Error(t(108, H(y) || "Unknown", $));
        y = _t({}, j, m);
      }
      c.legacyContext = y, vt(i, c, _), c.legacyContext = j;
    } else vt(i, c, _);
  }
  function di(i, c) {
    if (i && i.defaultProps) {
      c = _t({}, c), i = i.defaultProps;
      for (var m in i) c[m] === void 0 && (c[m] = i[m]);
      return c;
    }
    return c;
  }
  function no(i, c, m, y, _) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      _ = re(m, c.legacyContext);
      var T = m.contextType;
      T = new m(y, typeof T == "object" && T !== null ? T._currentValue : _), Sn(T, m, y, _), ui(i, c, T, m);
    } else {
      T = re(m, c.legacyContext), _ = ci(i, c, m, y, T);
      var j = qn !== 0;
      if (typeof _ == "object" && _ !== null && typeof _.render == "function" && _.$$typeof === void 0) Sn(_, m, y, T), ui(i, c, _, m);
      else if (j) {
        y = c.treeContext, c.treeContext = on(y, 1, 0);
        try {
          vt(i, c, _);
        } finally {
          c.treeContext = y;
        }
      } else vt(i, c, _);
    }
    else if (typeof m == "string") {
      switch (_ = c.blockedSegment, T = ke(_.chunks, m, y, i.responseState, _.formatContext), _.lastPushedText = !1, j = _.formatContext, _.formatContext = nt(j, m, y), ro(i, c, T), _.formatContext = j, m) {
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
          _.chunks.push(lt, f(m), rt);
      }
      _.lastPushedText = !1;
    } else {
      switch (m) {
        case E:
        case w:
        case Bn:
        case zn:
        case bn:
          vt(i, c, y.children);
          return;
        case Vn:
          vt(i, c, y.children);
          return;
        case v:
          throw Error(t(343));
        case nr:
          e: {
            m = c.blockedBoundary, _ = c.blockedSegment, T = y.fallback, y = y.children, j = /* @__PURE__ */ new Set();
            var $ = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, ne = ur(i, _.chunks.length, $, _.formatContext, !1, !1);
            _.children.push(ne), _.lastPushedText = !1;
            var de = ur(i, 0, null, _.formatContext, !1, !1);
            de.parentFlushed = !0, c.blockedBoundary = $, c.blockedSegment = de;
            try {
              if (ro(
                i,
                c,
                y
              ), de.lastPushedText && de.textEmbedded && de.chunks.push(Y), de.status = 1, fr($, de), $.pendingTasks === 0) break e;
            } catch (le) {
              de.status = 4, $.forceClientRender = !0, $.errorDigest = Gn(i, le);
            } finally {
              c.blockedBoundary = m, c.blockedSegment = _;
            }
            c = to(i, T, m, ne, j, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case tr:
          if (y = ci(i, c, m.render, y, _), qn !== 0) {
            m = c.treeContext, c.treeContext = on(m, 1, 0);
            try {
              vt(i, c, y);
            } finally {
              c.treeContext = m;
            }
          } else vt(i, c, y);
          return;
        case o:
          m = m.type, y = di(m, y), no(i, c, m, y, _);
          return;
        case Hn:
          if (_ = y.children, m = m._context, y = y.value, T = m._currentValue, m._currentValue = y, j = ae, ae = y = { parent: j, depth: j === null ? 0 : j.depth + 1, context: m, parentValue: T, value: y }, c.context = y, vt(i, c, _), i = ae, i === null) throw Error(t(403));
          y = i.parentValue, i.context._currentValue = y === k ? i.context._defaultValue : y, i = ae = i.parent, c.context = i;
          return;
        case Nn:
          y = y.children, y = y(m._currentValue), vt(i, c, y);
          return;
        case u:
          _ = m._init, m = _(m._payload), y = di(m, y), no(i, c, m, y, void 0);
          return;
      }
      throw Error(t(
        130,
        m == null ? m : typeof m,
        ""
      ));
    }
  }
  function vt(i, c, m) {
    if (c.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case $n:
          no(i, c, m.type, m.props, m.ref);
          return;
        case wn:
          throw Error(t(257));
        case u:
          var y = m._init;
          m = y(m._payload), vt(i, c, m);
          return;
      }
      if (be(m)) {
        fi(i, c, m);
        return;
      }
      if (m === null || typeof m != "object" ? y = null : (y = N && m[N] || m["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(m))) {
        if (m = y.next(), !m.done) {
          var _ = [];
          do
            _.push(m.value), m = y.next();
          while (!m.done);
          fi(i, c, _);
        }
        return;
      }
      throw i = Object.prototype.toString.call(m), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : i));
    }
    typeof m == "string" ? (y = c.blockedSegment, y.lastPushedText = z(c.blockedSegment.chunks, m, i.responseState, y.lastPushedText)) : typeof m == "number" && (y = c.blockedSegment, y.lastPushedText = z(c.blockedSegment.chunks, "" + m, i.responseState, y.lastPushedText));
  }
  function fi(i, c, m) {
    for (var y = m.length, _ = 0; _ < y; _++) {
      var T = c.treeContext;
      c.treeContext = on(T, y, _);
      try {
        ro(i, c, m[_]);
      } finally {
        c.treeContext = T;
      }
    }
  }
  function ro(i, c, m) {
    var y = c.blockedSegment.formatContext, _ = c.legacyContext, T = c.context;
    try {
      return vt(i, c, m);
    } catch (ne) {
      if (Qr(), typeof ne == "object" && ne !== null && typeof ne.then == "function") {
        m = ne;
        var j = c.blockedSegment, $ = ur(i, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push($), j.lastPushedText = !1, i = to(i, c.node, c.blockedBoundary, $, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, m.then(i, i), c.blockedSegment.formatContext = y, c.legacyContext = _, c.context = T, Ut(T);
      } else throw c.blockedSegment.formatContext = y, c.legacyContext = _, c.context = T, Ut(T), ne;
    }
  }
  function vs(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, hi(this, c, i);
  }
  function pi(i, c, m) {
    var y = i.blockedBoundary;
    i.blockedSegment.status = 3, y === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, i = m === void 0 ? Error(t(432)) : m, y.errorDigest = c.onError(i), y.parentFlushed && c.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(_) {
      return pi(_, c, m);
    }), y.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (y = c.onAllReady, y()));
  }
  function fr(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var m = c.children[0];
      m.id = c.id, m.parentFlushed = !0, m.status === 1 && fr(i, m);
    } else i.completedSegments.push(c);
  }
  function hi(i, c, m) {
    if (c === null) {
      if (m.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = m;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Yn, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && fr(c, m), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(vs, i), c.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (fr(c, m), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function mi(i) {
    if (i.status !== 2) {
      var c = ae, m = eo.current;
      eo.current = li;
      var y = cr;
      cr = i.responseState;
      try {
        var _ = i.pingedTasks, T;
        for (T = 0; T < _.length; T++) {
          var j = _[T], $ = i, ne = j.blockedSegment;
          if (ne.status === 0) {
            Ut(j.context);
            try {
              vt($, j, j.node), ne.lastPushedText && ne.textEmbedded && ne.chunks.push(Y), j.abortSet.delete(j), ne.status = 1, hi($, j.blockedBoundary, ne);
            } catch (Rt) {
              if (Qr(), typeof Rt == "object" && Rt !== null && typeof Rt.then == "function") {
                var de = j.ping;
                Rt.then(de, de);
              } else {
                j.abortSet.delete(j), ne.status = 4;
                var le = j.blockedBoundary, je = Rt, yt = Gn($, je);
                if (le === null ? dr($, je) : (le.pendingTasks--, le.forceClientRender || (le.forceClientRender = !0, le.errorDigest = yt, le.parentFlushed && $.clientRenderedBoundaries.push(le))), $.allPendingTasks--, $.allPendingTasks === 0) {
                  var Ot = $.onAllReady;
                  Ot();
                }
              }
            } finally {
            }
          }
        }
        _.splice(0, T), i.destination !== null && oo(i, i.destination);
      } catch (Rt) {
        Gn(i, Rt), dr(i, Rt);
      } finally {
        cr = y, eo.current = m, m === li && Ut(c);
      }
    }
  }
  function pr(i, c, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var y = m.id = i.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, i = i.responseState, a(c, Be), a(c, i.placeholderPrefix), i = f(y.toString(16)), a(c, i), s(c, fn);
      case 1:
        m.status = 2;
        var _ = !0;
        y = m.chunks;
        var T = 0;
        m = m.children;
        for (var j = 0; j < m.length; j++) {
          for (_ = m[j]; T < _.index; T++) a(c, y[T]);
          _ = hr(i, c, _);
        }
        for (; T < y.length - 1; T++) a(c, y[T]);
        return T < y.length && (_ = s(c, y[T])), _;
      default:
        throw Error(t(390));
    }
  }
  function hr(i, c, m) {
    var y = m.boundary;
    if (y === null) return pr(i, c, m);
    if (y.parentFlushed = !0, y.forceClientRender) y = y.errorDigest, s(c, Dt), a(c, Qt), y && (a(c, Pt), a(c, f(ce(y))), a(c, ft)), s(c, hn), pr(i, c, m);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = i.nextSegmentId++, 0 < y.completedSegments.length && i.partialBoundaries.push(y);
      var _ = i.responseState, T = _.nextSuspenseID++;
      _ = h(_.boundaryPrefix + T.toString(16)), y = y.id = _, et(c, i.responseState, y), pr(i, c, m);
    } else if (y.byteSize > i.progressiveChunkSize) y.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(y), et(c, i.responseState, y.id), pr(i, c, m);
    else {
      if (s(c, pn), m = y.completedSegments, m.length !== 1) throw Error(t(391));
      hr(i, c, m[0]);
    }
    return s(c, Jt);
  }
  function gi(i, c, m) {
    return ht(c, i.responseState, m.formatContext, m.id), hr(i, c, m), It(c, m.formatContext);
  }
  function vi(i, c, m) {
    for (var y = m.completedSegments, _ = 0; _ < y.length; _++) yi(i, c, m, y[_]);
    if (y.length = 0, i = i.responseState, y = m.id, m = m.rootSegmentID, a(c, i.startInlineScript), i.sentCompleteBoundaryFunction ? a(c, S) : (i.sentCompleteBoundaryFunction = !0, a(c, X)), y === null) throw Error(t(395));
    return m = f(m.toString(16)), a(c, y), a(c, D), a(c, i.segmentPrefix), a(c, m), s(c, V);
  }
  function yi(i, c, m, y) {
    if (y.status === 2) return !0;
    var _ = y.id;
    if (_ === -1) {
      if ((y.id = m.rootSegmentID) === -1) throw Error(t(392));
      return gi(i, c, y);
    }
    return gi(i, c, y), i = i.responseState, a(c, i.startInlineScript), i.sentCompleteSegmentFunction ? a(c, rn) : (i.sentCompleteSegmentFunction = !0, a(c, An)), a(c, i.segmentPrefix), _ = f(_.toString(16)), a(c, _), a(c, Vt), a(c, i.placeholderPrefix), a(c, _), s(c, Wt);
  }
  function oo(i, c) {
    n = new Uint8Array(512), r = 0;
    try {
      var m = i.completedRootSegment;
      if (m !== null && i.pendingRootTasks === 0) {
        hr(i, c, m), i.completedRootSegment = null;
        var y = i.responseState.bootstrapChunks;
        for (m = 0; m < y.length - 1; m++) a(c, y[m]);
        m < y.length && s(c, y[m]);
      }
      var _ = i.clientRenderedBoundaries, T;
      for (T = 0; T < _.length; T++) {
        var j = _[T];
        y = c;
        var $ = i.responseState, ne = j.id, de = j.errorDigest, le = j.errorMessage, je = j.errorComponentStack;
        if (a(y, $.startInlineScript), $.sentClientRenderFunction ? a(y, _e) : ($.sentClientRenderFunction = !0, a(
          y,
          me
        )), ne === null) throw Error(t(395));
        a(y, ne), a(y, He), (de || le || je) && (a(y, mt), a(y, f(bt(de || "")))), (le || je) && (a(y, mt), a(y, f(bt(le || "")))), je && (a(y, mt), a(y, f(bt(je)))), s(y, Fe);
      }
      _.splice(0, T);
      var yt = i.completedBoundaries;
      for (T = 0; T < yt.length; T++) vi(i, c, yt[T]);
      yt.splice(0, T), d(c), n = new Uint8Array(512), r = 0;
      var Ot = i.partialBoundaries;
      for (T = 0; T < Ot.length; T++) {
        var Rt = Ot[T];
        e: {
          _ = i, j = c;
          var mr = Rt.completedSegments;
          for ($ = 0; $ < mr.length; $++) if (!yi(
            _,
            j,
            Rt,
            mr[$]
          )) {
            $++, mr.splice(0, $);
            var bi = !1;
            break e;
          }
          mr.splice(0, $), bi = !0;
        }
        if (!bi) {
          i.destination = null, T++, Ot.splice(0, T);
          return;
        }
      }
      Ot.splice(0, T);
      var io = i.completedBoundaries;
      for (T = 0; T < io.length; T++) vi(i, c, io[T]);
      io.splice(0, T);
    } finally {
      d(c), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.close();
    }
  }
  function wi(i, c) {
    try {
      var m = i.abortableTasks;
      m.forEach(function(y) {
        return pi(y, i, c);
      }), m.clear(), i.destination !== null && oo(i, i.destination);
    } catch (y) {
      Gn(i, y), dr(i, y);
    }
  }
  return yr.renderToReadableStream = function(i, c) {
    return new Promise(function(m, y) {
      var _, T, j = new Promise(function(le, je) {
        T = le, _ = je;
      }), $ = gs(i, Ve(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), at(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, T, function() {
        var le = new ReadableStream({ type: "bytes", pull: function(je) {
          if ($.status === 1) $.status = 2, b(je, $.fatalError);
          else if ($.status !== 2 && $.destination === null) {
            $.destination = je;
            try {
              oo($, je);
            } catch (yt) {
              Gn($, yt), dr($, yt);
            }
          }
        }, cancel: function() {
          wi($);
        } }, { highWaterMark: 0 });
        le.allReady = j, m(le);
      }, function(le) {
        j.catch(function() {
        }), y(le);
      }, _);
      if (c && c.signal) {
        var ne = c.signal, de = function() {
          wi($, ne.reason), ne.removeEventListener("abort", de);
        };
        ne.addEventListener("abort", de);
      }
      mi($);
    });
  }, yr.version = "18.3.1", yr;
}
var Dn, Sa;
Dn = dl(), Sa = fl();
Dn.version;
Dn.renderToString;
Dn.renderToStaticMarkup;
Dn.renderToNodeStream;
Dn.renderToStaticNodeStream;
Sa.renderToReadableStream;
const pl = "staticMarkup";
function zr() {
  const t = fa().indexOf(pl) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const Qe = ({ gaData: e, prefix: t = "", children: n }) => {
  const { isReact: r } = zr(), { onClick: a, ...s } = n.props;
  if (r)
    return $e.cloneElement(n, {
      ...s,
      onClick: (f) => (xa(e), a ? a(f) : !0)
    });
  let d = "";
  ["input", "header", "header-input"].includes(t) && (d = `-${t}`);
  const g = {
    [`data-ga${d}`]: e.text,
    [`data-ga${d}-name`]: e.name,
    [`data-ga${d}-event`]: e.event,
    [`data-ga${d}-action`]: e.action,
    [`data-ga${d}-type`]: e.type,
    [`data-ga${d}-region`]: e.region,
    [`data-ga${d}-section`]: e.section,
    [`data-ga${d}-component`]: e.component
  };
  return $e.cloneElement(n, {
    ...s,
    onClick: a,
    ...g
  });
}, ka = ({ id: e, item: t, openCard: n, onClick: r, gaData: a }) => {
  var g, f, h, b, x, C;
  const s = e === n, d = s ? "open" : "close";
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: we("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (g = t.content) == null ? void 0 : g.icon
      }),
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ p.jsx("h4", { children: /* @__PURE__ */ p.jsx(
          Qe,
          {
            gaData: { ...a, action: d, text: t.content.header },
            children: /* @__PURE__ */ p.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: we({ collapsed: !s }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${e}`,
                role: "button",
                "aria-expanded": s,
                "aria-controls": `card-body-${e}`,
                onClick: (L) => r(L, e),
                children: [
                  (f = t.content) != null && f.icon ? /* @__PURE__ */ p.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ p.jsx(
                      "i",
                      {
                        className: `${(h = t.content.icon) == null ? void 0 : h[0]} fa-${(b = t.content.icon) == null ? void 0 : b[1]} me-2`
                      }
                    ),
                    t.content.header
                  ] }) : (x = t.content) == null ? void 0 : x.header,
                  /* @__PURE__ */ p.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((C = t.content) == null ? void 0 : C.body) && /* @__PURE__ */ p.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: we("collapse", { show: s }),
            children: /* @__PURE__ */ p.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: xt(t.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
ka.propTypes = {
  id: l.number,
  item: va,
  openCard: l.number,
  onClick: l.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object
};
const hl = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Ta = ({ cards: e, openedCard: t }) => {
  const [n, r] = Xe(t), a = (s, d) => {
    s.preventDefault(), r(n !== d ? d : null);
  };
  return /* @__PURE__ */ p.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, d) => s.content.body && s.content.header && /* @__PURE__ */ p.jsx(
      ka,
      {
        id: d + 1,
        item: s,
        openCard: n,
        onClick: a,
        gaData: hl
      },
      d + 1
    )
  ) });
};
Ta.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(va).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const ml = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ln = ({
  label: e,
  cardTitle: t,
  gaData: n,
  ariaLabel: r,
  block: a,
  color: s,
  disabled: d,
  element: g,
  href: f,
  icon: h,
  innerRef: b,
  onClick: x,
  size: C,
  classes: L,
  target: A,
  ...O
}) => {
  const P = we("btn", {
    [`btn-${s}`]: !0,
    "btn-md": C === "small",
    "btn-sm": C === "xsmall",
    "btn-block": a,
    disabled: d
  });
  let M = g;
  return f && g === "button" && (M = "a"), /* @__PURE__ */ p.jsx(
    Qe,
    {
      gaData: {
        ...ml,
        section: t,
        // @deprecated - remove at some point
        ...n,
        text: e
      },
      children: /* @__PURE__ */ p.jsxs(
        M,
        {
          type: M === "button" && x ? "button" : void 0,
          ...O,
          className: we(L) || P,
          href: f,
          ref: b,
          onClick: x,
          "aria-label": r,
          target: M === "a" ? A : null,
          children: [
            h && /* @__PURE__ */ p.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
ln.propTypes = {
  /**
   * Button label
   */
  label: l.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: Ho,
  /**
    ARIA label for accessibility
  */
  ariaLabel: l.string,
  /**
    Render button as a block-button?
  */
  block: l.bool,
  /**
    Button background color
  */
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: l.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: l.oneOfType([
    l.func,
    l.string,
    l.shape({ $$typeof: l.symbol, render: l.func }),
    l.arrayOf(
      l.oneOfType([
        l.func,
        l.string,
        l.shape({ $$typeof: l.symbol, render: l.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: l.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func,
  /**
    Button size
  */
  size: l.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: l.arrayOf(l.string),
  /**
   Link target type
   */
  target: l.oneOf(["_blank", "_self", "_top", "_parent"])
};
ln.defaultProps = {
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
function gl(e) {
  function t(Y, z, q, G, R) {
    for (var K = 0, F = 0, fe = 0, ie = 0, oe, Q, pe = 0, ye = 0, se, xe = se = oe = 0, he = 0, Re = 0, Ue = 0, Oe = 0, st = q.length, qe = st - 1, Se, J = "", ke = "", lt = "", rt = "", Be; he < st; ) {
      if (Q = q.charCodeAt(he), he === qe && F + ie + fe + K !== 0 && (F !== 0 && (Q = F === 47 ? 10 : 47), ie = fe = K = 0, st++, qe++), F + ie + fe + K === 0) {
        if (he === qe && (0 < Re && (J = J.replace(C, "")), 0 < J.trim().length)) {
          switch (Q) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += q.charAt(he);
          }
          Q = 59;
        }
        switch (Q) {
          case 123:
            for (J = J.trim(), oe = J.charCodeAt(0), se = 1, Oe = ++he; he < st; ) {
              switch (Q = q.charCodeAt(he)) {
                case 123:
                  se++;
                  break;
                case 125:
                  se--;
                  break;
                case 47:
                  switch (Q = q.charCodeAt(he + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (xe = he + 1; xe < qe; ++xe)
                          switch (q.charCodeAt(xe)) {
                            case 47:
                              if (Q === 42 && q.charCodeAt(xe - 1) === 42 && he + 2 !== xe) {
                                he = xe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Q === 47) {
                                he = xe + 1;
                                break e;
                              }
                          }
                        he = xe;
                      }
                  }
                  break;
                case 91:
                  Q++;
                case 40:
                  Q++;
                case 34:
                case 39:
                  for (; he++ < qe && q.charCodeAt(he) !== Q; )
                    ;
              }
              if (se === 0) break;
              he++;
            }
            switch (se = q.substring(Oe, he), oe === 0 && (oe = (J = J.replace(x, "").trim()).charCodeAt(0)), oe) {
              case 64:
                switch (0 < Re && (J = J.replace(C, "")), Q = J.charCodeAt(1), Q) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Re = z;
                    break;
                  default:
                    Re = dt;
                }
                if (se = t(z, Re, se, Q, R + 1), Oe = se.length, 0 < Ve && (Re = n(dt, J, Ue), Be = g(3, se, Re, z, ve, ge, Oe, Q, R, G), J = Re.join(""), Be !== void 0 && (Oe = (se = Be.trim()).length) === 0 && (Q = 0, se = "")), 0 < Oe) switch (Q) {
                  case 115:
                    J = J.replace(Z, d);
                  case 100:
                  case 109:
                  case 45:
                    se = J + "{" + se + "}";
                    break;
                  case 107:
                    J = J.replace(B, "$1 $2"), se = J + "{" + se + "}", se = De === 1 || De === 2 && s("@" + se, 3) ? "@-webkit-" + se + "@" + se : "@" + se;
                    break;
                  default:
                    se = J + se, G === 112 && (se = (ke += se, ""));
                }
                else se = "";
                break;
              default:
                se = t(z, n(z, J, Ue), se, G, R + 1);
            }
            lt += se, se = Ue = Re = xe = oe = 0, J = "", Q = q.charCodeAt(++he);
            break;
          case 125:
          case 59:
            if (J = (0 < Re ? J.replace(C, "") : J).trim(), 1 < (Oe = J.length)) switch (xe === 0 && (oe = J.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (Oe = (J = J.replace(" ", ":")).length), 0 < Ve && (Be = g(1, J, z, Y, ve, ge, ke.length, G, R, G)) !== void 0 && (Oe = (J = Be.trim()).length) === 0 && (J = "\0\0"), oe = J.charCodeAt(0), Q = J.charCodeAt(1), oe) {
              case 0:
                break;
              case 64:
                if (Q === 105 || Q === 99) {
                  rt += J + q.charAt(he);
                  break;
                }
              default:
                J.charCodeAt(Oe - 1) !== 58 && (ke += a(J, oe, Q, J.charCodeAt(2)));
            }
            Ue = Re = xe = oe = 0, J = "", Q = q.charCodeAt(++he);
        }
      }
      switch (Q) {
        case 13:
        case 10:
          F === 47 ? F = 0 : 1 + oe === 0 && G !== 107 && 0 < J.length && (Re = 1, J += "\0"), 0 < Ve * at && g(0, J, z, Y, ve, ge, ke.length, G, R, G), ge = 1, ve++;
          break;
        case 59:
        case 125:
          if (F + ie + fe + K === 0) {
            ge++;
            break;
          }
        default:
          switch (ge++, Se = q.charAt(he), Q) {
            case 9:
            case 32:
              if (ie + K + F === 0) switch (pe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Se = "";
                  break;
                default:
                  Q !== 32 && (Se = " ");
              }
              break;
            case 0:
              Se = "\\0";
              break;
            case 12:
              Se = "\\f";
              break;
            case 11:
              Se = "\\v";
              break;
            case 38:
              ie + F + K === 0 && (Re = Ue = 1, Se = "\f" + Se);
              break;
            case 108:
              if (ie + F + K + ze === 0 && 0 < xe) switch (he - xe) {
                case 2:
                  pe === 112 && q.charCodeAt(he - 3) === 58 && (ze = pe);
                case 8:
                  ye === 111 && (ze = ye);
              }
              break;
            case 58:
              ie + F + K === 0 && (xe = he);
              break;
            case 44:
              F + fe + ie + K === 0 && (Re = 1, Se += "\r");
              break;
            case 34:
            case 39:
              F === 0 && (ie = ie === Q ? 0 : ie === 0 ? Q : ie);
              break;
            case 91:
              ie + F + fe === 0 && K++;
              break;
            case 93:
              ie + F + fe === 0 && K--;
              break;
            case 41:
              ie + F + K === 0 && fe--;
              break;
            case 40:
              if (ie + F + K === 0) {
                if (oe === 0) switch (2 * pe + 3 * ye) {
                  case 533:
                    break;
                  default:
                    oe = 1;
                }
                fe++;
              }
              break;
            case 64:
              F + fe + ie + K + xe + se === 0 && (se = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ie + K + fe)) switch (F) {
                case 0:
                  switch (2 * Q + 3 * q.charCodeAt(he + 1)) {
                    case 235:
                      F = 47;
                      break;
                    case 220:
                      Oe = he, F = 42;
                  }
                  break;
                case 42:
                  Q === 47 && pe === 42 && Oe + 2 !== he && (q.charCodeAt(Oe + 2) === 33 && (ke += q.substring(Oe, he + 1)), Se = "", F = 0);
              }
          }
          F === 0 && (J += Se);
      }
      ye = pe, pe = Q, he++;
    }
    if (Oe = ke.length, 0 < Oe) {
      if (Re = z, 0 < Ve && (Be = g(2, ke, Re, Y, ve, ge, Oe, G, R, G), Be !== void 0 && (ke = Be).length === 0)) return rt + ke + lt;
      if (ke = Re.join(",") + "{" + ke + "}", De * ze !== 0) {
        switch (De !== 2 || s(ke, 2) || (ze = 0), ze) {
          case 111:
            ke = ke.replace(U, ":-moz-$1") + ke;
            break;
          case 112:
            ke = ke.replace(W, "::-webkit-input-$1") + ke.replace(W, "::-moz-$1") + ke.replace(W, ":-ms-input-$1") + ke;
        }
        ze = 0;
      }
    }
    return rt + ke + lt;
  }
  function n(Y, z, q) {
    var G = z.trim().split(P);
    z = G;
    var R = G.length, K = Y.length;
    switch (K) {
      case 0:
      case 1:
        var F = 0;
        for (Y = K === 0 ? "" : Y[0] + " "; F < R; ++F)
          z[F] = r(Y, z[F], q).trim();
        break;
      default:
        var fe = F = 0;
        for (z = []; F < R; ++F)
          for (var ie = 0; ie < K; ++ie)
            z[fe++] = r(Y[ie] + " ", G[F], q).trim();
    }
    return z;
  }
  function r(Y, z, q) {
    var G = z.charCodeAt(0);
    switch (33 > G && (G = (z = z.trim()).charCodeAt(0)), G) {
      case 38:
        return z.replace(M, "$1" + Y.trim());
      case 58:
        return Y.trim() + z.replace(M, "$1" + Y.trim());
      default:
        if (0 < 1 * q && 0 < z.indexOf("\f")) return z.replace(M, (Y.charCodeAt(0) === 58 ? "" : "$1") + Y.trim());
    }
    return Y + z;
  }
  function a(Y, z, q, G) {
    var R = Y + ";", K = 2 * z + 3 * q + 4 * G;
    if (K === 944) {
      Y = R.indexOf(":", 9) + 1;
      var F = R.substring(Y, R.length - 1).trim();
      return F = R.substring(0, Y).trim() + F + ";", De === 1 || De === 2 && s(F, 1) ? "-webkit-" + F + F : F;
    }
    if (De === 0 || De === 2 && !s(R, 1)) return R;
    switch (K) {
      case 1015:
        return R.charCodeAt(10) === 97 ? "-webkit-" + R + R : R;
      case 951:
        return R.charCodeAt(3) === 116 ? "-webkit-" + R + R : R;
      case 963:
        return R.charCodeAt(5) === 110 ? "-webkit-" + R + R : R;
      case 1009:
        if (R.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + R + R;
      case 978:
        return "-webkit-" + R + "-moz-" + R + R;
      case 1019:
      case 983:
        return "-webkit-" + R + "-moz-" + R + "-ms-" + R + R;
      case 883:
        if (R.charCodeAt(8) === 45) return "-webkit-" + R + R;
        if (0 < R.indexOf("image-set(", 11)) return R.replace(Ge, "$1-webkit-$2") + R;
        break;
      case 932:
        if (R.charCodeAt(4) === 45) switch (R.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + R.replace("-grow", "") + "-webkit-" + R + "-ms-" + R.replace("grow", "positive") + R;
          case 115:
            return "-webkit-" + R + "-ms-" + R.replace("shrink", "negative") + R;
          case 98:
            return "-webkit-" + R + "-ms-" + R.replace("basis", "preferred-size") + R;
        }
        return "-webkit-" + R + "-ms-" + R + R;
      case 964:
        return "-webkit-" + R + "-ms-flex-" + R + R;
      case 1023:
        if (R.charCodeAt(8) !== 99) break;
        return F = R.substring(R.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + F + "-webkit-" + R + "-ms-flex-pack" + F + R;
      case 1005:
        return A.test(R) ? R.replace(L, ":-webkit-") + R.replace(L, ":-moz-") + R : R;
      case 1e3:
        switch (F = R.substring(13).trim(), z = F.indexOf("-") + 1, F.charCodeAt(0) + F.charCodeAt(z)) {
          case 226:
            F = R.replace(I, "tb");
            break;
          case 232:
            F = R.replace(I, "tb-rl");
            break;
          case 220:
            F = R.replace(I, "lr");
            break;
          default:
            return R;
        }
        return "-webkit-" + R + "-ms-" + F + R;
      case 1017:
        if (R.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (z = (R = Y).length - 10, F = (R.charCodeAt(z) === 33 ? R.substring(0, z) : R).substring(Y.indexOf(":", 7) + 1).trim(), K = F.charCodeAt(0) + (F.charCodeAt(7) | 0)) {
          case 203:
            if (111 > F.charCodeAt(8)) break;
          case 115:
            R = R.replace(F, "-webkit-" + F) + ";" + R;
            break;
          case 207:
          case 102:
            R = R.replace(F, "-webkit-" + (102 < K ? "inline-" : "") + "box") + ";" + R.replace(F, "-webkit-" + F) + ";" + R.replace(F, "-ms-" + F + "box") + ";" + R;
        }
        return R + ";";
      case 938:
        if (R.charCodeAt(5) === 45) switch (R.charCodeAt(6)) {
          case 105:
            return F = R.replace("-items", ""), "-webkit-" + R + "-webkit-box-" + F + "-ms-flex-" + F + R;
          case 115:
            return "-webkit-" + R + "-ms-flex-item-" + R.replace(Me, "") + R;
          default:
            return "-webkit-" + R + "-ms-flex-line-pack" + R.replace("align-content", "").replace(Me, "") + R;
        }
        break;
      case 973:
      case 989:
        if (R.charCodeAt(3) !== 45 || R.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (be.test(Y) === !0) return (F = Y.substring(Y.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(Y.replace("stretch", "fill-available"), z, q, G).replace(":fill-available", ":stretch") : R.replace(F, "-webkit-" + F) + R.replace(F, "-moz-" + F.replace("fill-", "")) + R;
        break;
      case 962:
        if (R = "-webkit-" + R + (R.charCodeAt(5) === 102 ? "-ms-" + R : "") + R, q + G === 211 && R.charCodeAt(13) === 105 && 0 < R.indexOf("transform", 10)) return R.substring(0, R.indexOf(";", 27) + 1).replace(O, "$1-webkit-$2") + R;
    }
    return R;
  }
  function s(Y, z) {
    var q = Y.indexOf(z === 1 ? ":" : "{"), G = Y.substring(0, z !== 3 ? q : 10);
    return q = Y.substring(q + 1, Y.length - 1), We(z !== 2 ? G : G.replace(ee, "$1"), q, z);
  }
  function d(Y, z) {
    var q = a(z, z.charCodeAt(0), z.charCodeAt(1), z.charCodeAt(2));
    return q !== z + ";" ? q.replace(ce, " or ($1)").substring(4) : "(" + z + ")";
  }
  function g(Y, z, q, G, R, K, F, fe, ie, oe) {
    for (var Q = 0, pe = z, ye; Q < Ve; ++Q)
      switch (ye = Ke[Q].call(b, Y, pe, q, G, R, K, F, fe, ie, oe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          pe = ye;
      }
    if (pe !== z) return pe;
  }
  function f(Y) {
    switch (Y) {
      case void 0:
      case null:
        Ve = Ke.length = 0;
        break;
      default:
        if (typeof Y == "function") Ke[Ve++] = Y;
        else if (typeof Y == "object") for (var z = 0, q = Y.length; z < q; ++z)
          f(Y[z]);
        else at = !!Y | 0;
    }
    return f;
  }
  function h(Y) {
    return Y = Y.prefix, Y !== void 0 && (We = null, Y ? typeof Y != "function" ? De = 1 : (De = 2, We = Y) : De = 0), h;
  }
  function b(Y, z) {
    var q = Y;
    if (33 > q.charCodeAt(0) && (q = q.trim()), nt = q, q = [nt], 0 < Ve) {
      var G = g(-1, z, q, q, ve, ge, 0, 0, 0, 0);
      G !== void 0 && typeof G == "string" && (z = G);
    }
    var R = t(dt, q, z, 0, 0);
    return 0 < Ve && (G = g(-2, R, q, q, ve, ge, R.length, 0, 0, 0), G !== void 0 && (R = G)), nt = "", ze = 0, ge = ve = 1, R;
  }
  var x = /^\0+/g, C = /[\0\r\f]/g, L = /: */g, A = /zoo|gra/, O = /([,: ])(transform)/g, P = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, B = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, U = /:(read-only)/g, I = /[svh]\w+-[tblr]{2}/, Z = /\(\s*(.*)\s*\)/g, ce = /([\s\S]*?);/g, Me = /-self|flex-/g, ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, be = /stretch|:\s*\w+\-(?:conte|avail)/, Ge = /([^-])(image-set\()/, ge = 1, ve = 1, ze = 0, De = 1, dt = [], Ke = [], Ve = 0, We = null, at = 0, nt = "";
  return b.use = f, b.set = h, e !== void 0 && h(e), b;
}
var vl = {
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
function yl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var wl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Di = /* @__PURE__ */ yl(
  function(e) {
    return wl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vo = Br, bl = {
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
}, xl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Sl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _a = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wo = {};
Wo[Vo.ForwardRef] = Sl;
Wo[Vo.Memo] = _a;
function Fi(e) {
  return Vo.isMemo(e) ? _a : Wo[e.$$typeof] || bl;
}
var kl = Object.defineProperty, Tl = Object.getOwnPropertyNames, $i = Object.getOwnPropertySymbols, _l = Object.getOwnPropertyDescriptor, El = Object.getPrototypeOf, Bi = Object.prototype;
function Ea(e, t, n) {
  if (typeof t != "string") {
    if (Bi) {
      var r = El(t);
      r && r !== Bi && Ea(e, r, n);
    }
    var a = Tl(t);
    $i && (a = a.concat($i(t)));
    for (var s = Fi(e), d = Fi(t), g = 0; g < a.length; ++g) {
      var f = a[g];
      if (!xl[f] && !(n && n[f]) && !(d && d[f]) && !(s && s[f])) {
        var h = _l(t, f);
        try {
          kl(e, f, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var Cl = Ea;
const Ol = /* @__PURE__ */ zo(Cl);
var Ce = { env: { NODE_ENV: "production" } };
function Kt() {
  return (Kt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var zi = function(e, t) {
  for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, So = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Br.typeOf(e);
}, Ir = Object.freeze([]), cn = Object.freeze({});
function Qn(e) {
  return typeof e == "function";
}
function ko(e) {
  return Ce.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Uo(e) {
  return e && typeof e.styledComponentId == "string";
}
var jn = typeof Ce < "u" && Ce.env !== void 0 && (Ce.env.REACT_APP_SC_ATTR || Ce.env.SC_ATTR) || "data-styled", qo = typeof window < "u" && "HTMLElement" in window, Rl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ce < "u" && Ce.env !== void 0 && (Ce.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ce.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ce.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ce.env.REACT_APP_SC_DISABLE_SPEEDY : Ce.env.SC_DISABLE_SPEEDY !== void 0 && Ce.env.SC_DISABLE_SPEEDY !== "" ? Ce.env.SC_DISABLE_SPEEDY !== "false" && Ce.env.SC_DISABLE_SPEEDY : Ce.env.NODE_ENV !== "production")), Al = Ce.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Nl() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function Fn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw Ce.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(Nl.apply(void 0, [Al[e]].concat(n)).trim());
}
var jl = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, a = 0; a < n; a++) r += this.groupSizes[a];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, d = s; n >= d; ) (d <<= 1) < 0 && Fn(16, "" + n);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(a), this.length = d;
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
    }
    for (var f = this.indexOfGroup(n + 1), h = 0, b = r.length; h < b; h++) this.tag.insertRule(f, r[h]) && (this.groupSizes[n]++, f++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], a = this.indexOfGroup(n), s = a + r;
      this.groupSizes[n] = 0;
      for (var d = a; d < s; d++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0) return r;
    for (var a = this.groupSizes[n], s = this.indexOfGroup(n), d = s + a, g = s; g < d; g++) r += this.tag.getRule(g) + `/*!sc*/
`;
    return r;
  }, e;
}(), Cr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Zn = 1, wr = function(e) {
  if (Cr.has(e)) return Cr.get(e);
  for (; Lr.has(Zn); ) Zn++;
  var t = Zn++;
  return Ce.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Fn(16, "" + t), Cr.set(e, t), Lr.set(t, e), t;
}, Pl = function(e) {
  return Lr.get(e);
}, Il = function(e, t) {
  t >= Zn && (Zn = t + 1), Cr.set(e, t), Lr.set(t, e);
}, Ll = "style[" + jn + '][data-styled-version="5.3.11"]', Ml = new RegExp("^" + jn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Dl = function(e, t, n) {
  for (var r, a = n.split(","), s = 0, d = a.length; s < d; s++) (r = a[s]) && e.registerName(t, r);
}, Fl = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], a = 0, s = n.length; a < s; a++) {
    var d = n[a].trim();
    if (d) {
      var g = d.match(Ml);
      if (g) {
        var f = 0 | parseInt(g[1], 10), h = g[2];
        f !== 0 && (Il(h, f), Dl(e, h, g[3]), e.getTag().insertRules(f, r)), r.length = 0;
      } else r.push(d);
    }
  }
}, $l = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ca = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), a = function(g) {
    for (var f = g.childNodes, h = f.length; h >= 0; h--) {
      var b = f[h];
      if (b && b.nodeType === 1 && b.hasAttribute(jn)) return b;
    }
  }(n), s = a !== void 0 ? a.nextSibling : null;
  r.setAttribute(jn, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var d = $l();
  return d && r.setAttribute("nonce", d), n.insertBefore(r, s), r;
}, Bl = function() {
  function e(n) {
    var r = this.element = Ca(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var f = s[d];
        if (f.ownerNode === a) return f;
      }
      Fn(17);
    }(r), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    try {
      return this.sheet.insertRule(r, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, t.getRule = function(n) {
    var r = this.sheet.cssRules[n];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), zl = function() {
  function e(n) {
    var r = this.element = Ca(n);
    this.nodes = r.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    if (n <= this.length && n >= 0) {
      var a = document.createTextNode(r), s = this.nodes[n];
      return this.element.insertBefore(a, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), Hl = function() {
  function e(n) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0);
  }, t.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, e;
}(), Hi = qo, Vl = { isServer: !qo, useCSSOMInjection: !Rl }, Oa = function() {
  function e(n, r, a) {
    n === void 0 && (n = cn), r === void 0 && (r = {}), this.options = Kt({}, Vl, {}, n), this.gs = r, this.names = new Map(a), this.server = !!n.isServer, !this.server && qo && Hi && (Hi = !1, function(s) {
      for (var d = document.querySelectorAll(Ll), g = 0, f = d.length; g < f; g++) {
        var h = d[g];
        h && h.getAttribute(jn) !== "active" && (Fl(s, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(n) {
    return wr(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(Kt({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (r = this.options).isServer, s = r.useCSSOMInjection, d = r.target, n = a ? new Hl(d) : s ? new Bl(d) : new zl(d), new jl(n)));
    var n, r, a, s, d;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (wr(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(r), this.names.set(n, a);
    }
  }, t.insertRules = function(n, r, a) {
    this.registerName(n, r), this.getTag().insertRules(wr(n), a);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(wr(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), a = r.length, s = "", d = 0; d < a; d++) {
        var g = Pl(d);
        if (g !== void 0) {
          var f = n.names.get(g), h = r.getGroup(d);
          if (f && h && f.size) {
            var b = jn + ".g" + d + '[id="' + g + '"]', x = "";
            f !== void 0 && f.forEach(function(C) {
              C.length > 0 && (x += C + ",");
            }), s += "" + h + b + '{content:"' + x + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Wl = /(a)(d)/gi, Vi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function To(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Vi(t % 52) + n;
  return (Vi(t % 52) + n).replace(Wl, "$1-$2");
}
var Cn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Ra = function(e) {
  return Cn(5381, e);
};
function Ul(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Qn(n) && !Uo(n)) return !1;
  }
  return !0;
}
var ql = Ra("5.3.11"), Yl = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Ce.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ul(t), this.componentId = n, this.baseHash = Cn(ql, n), this.baseStyle = r, Oa.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Pn(this.rules, t, n, r).join(""), g = To(Cn(this.baseHash, d) >>> 0);
      if (!n.hasNameForId(a, g)) {
        var f = r(d, "." + g, void 0, a);
        n.insertRules(a, g, f);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var h = this.rules.length, b = Cn(this.baseHash, r.hash), x = "", C = 0; C < h; C++) {
        var L = this.rules[C];
        if (typeof L == "string") x += L, Ce.env.NODE_ENV !== "production" && (b = Cn(b, L + C));
        else if (L) {
          var A = Pn(L, t, n, r), O = Array.isArray(A) ? A.join("") : A;
          b = Cn(b, O + C), x += O;
        }
      }
      if (x) {
        var P = To(b >>> 0);
        if (!n.hasNameForId(a, P)) {
          var M = r(x, "." + P, void 0, a);
          n.insertRules(a, P, M);
        }
        s.push(P);
      }
    }
    return s.join(" ");
  }, e;
}(), Gl = /^\s*\/\/.*$/gm, Xl = [":", "[", ".", "#"];
function Kl(e) {
  var t, n, r, a, s = cn, d = s.options, g = d === void 0 ? cn : d, f = s.plugins, h = f === void 0 ? Ir : f, b = new gl(g), x = [], C = /* @__PURE__ */ function(O) {
    function P(M) {
      if (M) try {
        O(M + "}");
      } catch {
      }
    }
    return function(M, B, W, U, I, Z, ce, Me, ee, be) {
      switch (M) {
        case 1:
          if (ee === 0 && B.charCodeAt(0) === 64) return O(B + ";"), "";
          break;
        case 2:
          if (Me === 0) return B + "/*|*/";
          break;
        case 3:
          switch (Me) {
            case 102:
            case 112:
              return O(W[0] + B), "";
            default:
              return B + (be === 0 ? "/*|*/" : "");
          }
        case -2:
          B.split("/*|*/}").forEach(P);
      }
    };
  }(function(O) {
    x.push(O);
  }), L = function(O, P, M) {
    return P === 0 && Xl.indexOf(M[n.length]) !== -1 || M.match(a) ? O : "." + t;
  };
  function A(O, P, M, B) {
    B === void 0 && (B = "&");
    var W = O.replace(Gl, ""), U = P && M ? M + " " + P + " { " + W + " }" : W;
    return t = B, n = P, r = new RegExp("\\" + n + "\\b", "g"), a = new RegExp("(\\" + n + "\\b){2,}"), b(M || !P ? "" : P, U);
  }
  return b.use([].concat(h, [function(O, P, M) {
    O === 2 && M.length && M[0].lastIndexOf(n) > 0 && (M[0] = M[0].replace(r, L));
  }, C, function(O) {
    if (O === -2) {
      var P = x;
      return x = [], P;
    }
  }])), A.hash = h.length ? h.reduce(function(O, P) {
    return P.name || Fn(15), Cn(O, P.name);
  }, 5381).toString() : "", A;
}
var Aa = $e.createContext();
Aa.Consumer;
var Na = $e.createContext(), Zl = (Na.Consumer, new Oa()), _o = Kl();
function Jl() {
  return Bo(Aa) || Zl;
}
function Ql() {
  return Bo(Na) || _o;
}
var ec = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(a, s) {
      s === void 0 && (s = _o);
      var d = r.name + s.hash;
      a.hasNameForId(r.id, d) || a.insertRules(r.id, d, s(r.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Fn(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = _o), this.name + t.hash;
  }, e;
}(), tc = /([A-Z])/, nc = /([A-Z])/g, rc = /^ms-/, oc = function(e) {
  return "-" + e.toLowerCase();
};
function Wi(e) {
  return tc.test(e) ? e.replace(nc, oc).replace(rc, "-ms-") : e;
}
var Ui = function(e) {
  return e == null || e === !1 || e === "";
};
function Pn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var a, s = [], d = 0, g = e.length; d < g; d += 1) (a = Pn(e[d], t, n, r)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (Ui(e)) return "";
  if (Uo(e)) return "." + e.styledComponentId;
  if (Qn(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t) return e;
    var f = e(t);
    return Ce.env.NODE_ENV !== "production" && Br.isElement(f) && console.warn(ko(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Pn(f, t, n, r);
  }
  var h;
  return e instanceof ec ? n ? (e.inject(n, r), e.getName(r)) : e : So(e) ? function b(x, C) {
    var L, A, O = [];
    for (var P in x) x.hasOwnProperty(P) && !Ui(x[P]) && (Array.isArray(x[P]) && x[P].isCss || Qn(x[P]) ? O.push(Wi(P) + ":", x[P], ";") : So(x[P]) ? O.push.apply(O, b(x[P], P)) : O.push(Wi(P) + ": " + (L = P, (A = x[P]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || L in vl || L.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return C ? [C + " {"].concat(O, ["}"]) : O;
  }(e) : e.toString();
}
var qi = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ic(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return Qn(e) || So(e) ? qi(Pn(zi(Ir, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : qi(Pn(zi(e, n)));
}
var Yi = /invalid hook call/i, br = /* @__PURE__ */ new Set(), ac = function(e, t) {
  if (Ce.env.NODE_ENV !== "production") {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        if (Yi.test(s)) a = !1, br.delete(n);
        else {
          for (var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) g[f - 1] = arguments[f];
          r.apply(void 0, [s].concat(g));
        }
      }, un(), a && !br.has(n) && (console.warn(n), br.add(n));
    } catch (s) {
      Yi.test(s.message) && br.delete(n);
    } finally {
      console.error = r;
    }
  }
}, sc = function(e, t, n) {
  return n === void 0 && (n = cn), e.theme !== n.theme && e.theme || t || n.theme;
}, lc = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, cc = /(^-|-$)/g;
function vo(e) {
  return e.replace(lc, "-").replace(cc, "");
}
var uc = function(e) {
  return To(Ra(e) >>> 0);
};
function xr(e) {
  return typeof e == "string" && (Ce.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Eo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, dc = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function fc(e, t, n) {
  var r = e[n];
  Eo(t) && Eo(r) ? ja(r, t) : e[n] = t;
}
function ja(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var a = 0, s = n; a < s.length; a++) {
    var d = s[a];
    if (Eo(d)) for (var g in d) dc(g) && fc(e, d[g], g);
  }
  return e;
}
var Pa = $e.createContext();
Pa.Consumer;
var yo = {};
function Ia(e, t, n) {
  var r = Uo(e), a = !xr(e), s = t.attrs, d = s === void 0 ? Ir : s, g = t.componentId, f = g === void 0 ? function(B, W) {
    var U = typeof B != "string" ? "sc" : vo(B);
    yo[U] = (yo[U] || 0) + 1;
    var I = U + "-" + uc("5.3.11" + U + yo[U]);
    return W ? W + "-" + I : I;
  }(t.displayName, t.parentComponentId) : g, h = t.displayName, b = h === void 0 ? function(B) {
    return xr(B) ? "styled." + B : "Styled(" + ko(B) + ")";
  }(e) : h, x = t.displayName && t.componentId ? vo(t.displayName) + "-" + t.componentId : t.componentId || f, C = r && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, L = t.shouldForwardProp;
  r && e.shouldForwardProp && (L = t.shouldForwardProp ? function(B, W, U) {
    return e.shouldForwardProp(B, W, U) && t.shouldForwardProp(B, W, U);
  } : e.shouldForwardProp);
  var A, O = new Yl(n, x, r ? e.componentStyle : void 0), P = O.isStatic && d.length === 0, M = function(B, W) {
    return function(U, I, Z, ce) {
      var Me = U.attrs, ee = U.componentStyle, be = U.defaultProps, Ge = U.foldedComponentIds, ge = U.shouldForwardProp, ve = U.styledComponentId, ze = U.target, De = function(G, R, K) {
        G === void 0 && (G = cn);
        var F = Kt({}, R, { theme: G }), fe = {};
        return K.forEach(function(ie) {
          var oe, Q, pe, ye = ie;
          for (oe in Qn(ye) && (ye = ye(F)), ye) F[oe] = fe[oe] = oe === "className" ? (Q = fe[oe], pe = ye[oe], Q && pe ? Q + " " + pe : Q || pe) : ye[oe];
        }), [F, fe];
      }(sc(I, Bo(Pa), be) || cn, I, Me), dt = De[0], Ke = De[1], Ve = function(G, R, K, F) {
        var fe = Jl(), ie = Ql(), oe = R ? G.generateAndInjectStyles(cn, fe, ie) : G.generateAndInjectStyles(K, fe, ie);
        return Ce.env.NODE_ENV !== "production" && !R && F && F(oe), oe;
      }(ee, ce, dt, Ce.env.NODE_ENV !== "production" ? U.warnTooManyClasses : void 0), We = Z, at = Ke.$as || I.$as || Ke.as || I.as || ze, nt = xr(at), Y = Ke !== I ? Kt({}, I, {}, Ke) : I, z = {};
      for (var q in Y) q[0] !== "$" && q !== "as" && (q === "forwardedAs" ? z.as = Y[q] : (ge ? ge(q, Di, at) : !nt || Di(q)) && (z[q] = Y[q]));
      return I.style && Ke.style !== I.style && (z.style = Kt({}, I.style, {}, Ke.style)), z.className = Array.prototype.concat(Ge, ve, Ve !== ve ? Ve : null, I.className, Ke.className).filter(Boolean).join(" "), z.ref = We, ys(at, z);
    }(A, B, W, P);
  };
  return M.displayName = b, (A = $e.forwardRef(M)).attrs = C, A.componentStyle = O, A.displayName = b, A.shouldForwardProp = L, A.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ir, A.styledComponentId = x, A.target = r ? e.target : e, A.withComponent = function(B) {
    var W = t.componentId, U = function(Z, ce) {
      if (Z == null) return {};
      var Me, ee, be = {}, Ge = Object.keys(Z);
      for (ee = 0; ee < Ge.length; ee++) Me = Ge[ee], ce.indexOf(Me) >= 0 || (be[Me] = Z[Me]);
      return be;
    }(t, ["componentId"]), I = W && W + "-" + (xr(B) ? B : vo(ko(B)));
    return Ia(B, Kt({}, U, { attrs: C, componentId: I }), n);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(B) {
    this._foldedDefaultProps = r ? ja({}, e.defaultProps, B) : B;
  } }), Ce.env.NODE_ENV !== "production" && (ac(b, x), A.warnTooManyClasses = /* @__PURE__ */ function(B, W) {
    var U = {}, I = !1;
    return function(Z) {
      if (!I && (U[Z] = !0, Object.keys(U).length >= 200)) {
        var ce = W ? ' with the id of "' + W + '"' : "";
        console.warn("Over 200 classes were generated for component " + B + ce + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), I = !0, U = {};
      }
    };
  }(b, x)), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), a && Ol(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var jt = function(e) {
  return function t(n, r, a) {
    if (a === void 0 && (a = cn), !Br.isValidElementType(r)) return Fn(1, String(r));
    var s = function() {
      return n(r, a, ic.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(n, r, Kt({}, a, {}, d));
    }, s.attrs = function(d) {
      return t(n, r, Kt({}, a, { attrs: Array.prototype.concat(a.attrs, d).filter(Boolean) }));
    }, s;
  }(Ia, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  jt[e] = jt(e);
});
Ce.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Ce.env.NODE_ENV !== "production" && Ce.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const pc = jt.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: e }) => e ? "112px" : "142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`, Or = "On This Page", hc = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: Or
}, La = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: n = !1
}) => {
  const r = un(null), a = js("(max-width: 991px)"), [s, d] = Xe({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), g = a ? 110 : 142, f = () => {
    var U;
    const O = {}, P = window.scrollY, M = (U = document.getElementById(t)) == null ? void 0 : U.getBoundingClientRect().top, B = 103;
    M >= 0 && (O.sticky = !1, O.activeContainer = ""), P > r.current.getBoundingClientRect().top && (O.sticky = !0);
    const W = s.hasHeader ? g + B : B;
    e == null || e.forEach(({ targetIdName: I }) => {
      const Z = document.getElementById(I), ce = (Z == null ? void 0 : Z.getBoundingClientRect().top) - W, Me = (Z == null ? void 0 : Z.getBoundingClientRect().bottom) - W;
      ce < 0 && Me > 0 && (O.activeContainer = I);
    }), d((I) => ({
      ...I,
      ...O
    }));
  }, h = () => {
    cl(f, 150), ul(f, 150);
  }, b = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), x = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function C(O = null) {
    if (O === null) return s.containerClass;
    const P = Object.values(O.classList).filter(
      (M) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(M)
    );
    return P.length > 0 ? P.join(" ") : C(O.parentElement);
  }
  ot(() => {
    const O = document.getElementById(t) || null, P = {
      hasHeader: b(),
      hasAltMenuSpacing: x(),
      containerClass: C(O)
    };
    d((M) => ({
      ...M,
      ...P
    }));
  }, []), ot(() => (window == null || window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h)), [s.hasHeader]);
  const L = (O) => {
    var W, U;
    const P = window.scrollY - (s.hasHeader ? g + 100 : 100), M = a ? 410 : 90;
    let B = ((W = document.getElementById(O)) == null ? void 0 : W.getBoundingClientRect().top) + P;
    r.current.classList.contains("sticky") || (B -= M), n && ((U = ll(`#${O}`)) == null || U.focus()), window.scrollTo({ top: B, behavior: "smooth" });
  }, A = () => {
    d((O) => ({
      ...O,
      showMenu: !O.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ p.jsx(
    pc,
    {
      requiresAltMenuSpacing: s.hasAltMenuSpacing,
      ref: r,
      className: we(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: s.sticky,
          "with-header": s.hasHeader
        }
      ),
      style: s.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ p.jsxs("div", { className: `${s.containerClass} uds-anchor-menu-wrapper`, children: [
        a ? /* @__PURE__ */ p.jsx(
          Qe,
          {
            gaData: {
              ...hc,
              action: s.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ p.jsx(
              "button",
              {
                className: we("mobile-menu-toggler", {
                  "show-menu": s.showMenu
                }),
                type: "button",
                onClick: A,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ p.jsxs("h4", { children: [
                  Or,
                  ":",
                  /* @__PURE__ */ p.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ p.jsxs("h4", { children: [
          Or,
          ":"
        ] }),
        /* @__PURE__ */ p.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: we("card", "card-body", "collapse", {
              show: s.showMenu
            }),
            children: /* @__PURE__ */ p.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": Or,
                children: e == null ? void 0 : e.map((O) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ p.jsx(
                    ln,
                    {
                      "data-testid": `anchor-item-${O.targetIdName}`,
                      classes: we("nav-link", {
                        active: s.activeContainer === O.targetIdName
                      }).split(" "),
                      ariaLabel: O.text,
                      label: O.text,
                      icon: O.icon,
                      onClick: () => L(O.targetIdName)
                    },
                    O.targetIdName
                  )
                ))
              }
            )
          }
        )
      ] })
    }
  );
};
La.propTypes = {
  /**
   * Anchor menu items
   */
  items: l.arrayOf(
    l.shape({
      text: l.string.isRequired,
      targetIdName: l.string.isRequired,
      icon: l.arrayOf(l.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: l.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: l.bool
};
var Co = function() {
  return Co = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Co.apply(this, arguments);
}, mc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Hr(e) {
  var t = function(n) {
    var r = n.bgStyle, a = n.borderRadius, s = n.iconFillColor, d = n.round, g = n.size, f = mc(n, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return $e.createElement(
      "svg",
      Co({ viewBox: "0 0 64 64", width: g, height: g }, f),
      d ? $e.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: r }) : $e.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: r }),
      $e.createElement("path", { d: e.path, fill: s })
    );
  };
  return t.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, t;
}
var gc = Hr({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function Vr(e) {
  var t = Object.entries(e).filter(function(n) {
    var r = n[1];
    return r != null;
  }).map(function(n) {
    var r = n[0], a = n[1];
    return "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var vc = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Gt = function() {
  return Gt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Gt.apply(this, arguments);
}, yc = function(e, t, n, r) {
  function a(s) {
    return s instanceof n ? s : new n(function(d) {
      d(s);
    });
  }
  return new (n || (n = Promise))(function(s, d) {
    function g(b) {
      try {
        h(r.next(b));
      } catch (x) {
        d(x);
      }
    }
    function f(b) {
      try {
        h(r.throw(b));
      } catch (x) {
        d(x);
      }
    }
    function h(b) {
      b.done ? s(b.value) : a(b.value).then(g, f);
    }
    h((r = r.apply(e, t || [])).next());
  });
}, wc = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, a, s, d;
  return d = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function g(h) {
    return function(b) {
      return f([h, b]);
    };
  }
  function f(h) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, a && (s = h[0] & 2 ? a.return : h[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, h[1])).done) return s;
      switch (a = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
        case 0:
        case 1:
          s = h;
          break;
        case 4:
          return n.label++, { value: h[1], done: !1 };
        case 5:
          n.label++, a = h[1], h = [0];
          continue;
        case 7:
          h = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            n = 0;
            continue;
          }
          if (h[0] === 3 && (!s || h[1] > s[0] && h[1] < s[3])) {
            n.label = h[1];
            break;
          }
          if (h[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = h;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(h);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      h = t.call(e, n);
    } catch (b) {
      h = [6, b], a = 0;
    } finally {
      r = s = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}, Ma = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, bc = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, xc = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Sc = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function kc(e, t, n) {
  var r = t.height, a = t.width, s = Ma(t, ["height", "width"]), d = Gt({ height: r, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), g = window.open(e, "", Object.keys(d).map(function(h) {
    return "".concat(h, "=").concat(d[h]);
  }).join(", "));
  if (n)
    var f = window.setInterval(function() {
      try {
        (g === null || g.closed) && (window.clearInterval(f), n(g));
      } catch (h) {
        console.error(h);
      }
    }, 1e3);
  return g;
}
var Tc = (
  /** @class */
  function(e) {
    vc(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.openShareDialog = function(r) {
        var a = n.props, s = a.onShareWindowClose, d = a.windowHeight, g = d === void 0 ? 400 : d, f = a.windowPosition, h = f === void 0 ? "windowCenter" : f, b = a.windowWidth, x = b === void 0 ? 550 : b, C = Gt({ height: g, width: x }, h === "windowCenter" ? xc(x, g) : Sc(x, g));
        kc(r, C, s);
      }, n.handleClick = function(r) {
        return yc(n, void 0, void 0, function() {
          var a, s, d, g, f, h, b, x, C, L;
          return wc(this, function(A) {
            switch (A.label) {
              case 0:
                return a = this.props, s = a.beforeOnClick, d = a.disabled, g = a.networkLink, f = a.onClick, h = a.url, b = a.openShareDialogOnClick, x = a.opts, C = g(h, x), d ? [
                  2
                  /*return*/
                ] : (r.preventDefault(), s ? (L = s(), bc(L) ? [4, L] : [3, 2]) : [3, 2]);
              case 1:
                A.sent(), A.label = 2;
              case 2:
                return b && this.openShareDialog(C), f && f(r, C), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, n;
    }
    return t.prototype.render = function() {
      var n = this.props;
      n.beforeOnClick;
      var r = n.children, a = n.className, s = n.disabled, d = n.disabledStyle, g = n.forwardedRef;
      n.networkLink;
      var f = n.networkName;
      n.onShareWindowClose, n.openShareDialogOnClick, n.opts;
      var h = n.resetButtonStyle, b = n.style;
      n.url, n.windowHeight, n.windowPosition, n.windowWidth;
      var x = Ma(n, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), C = we("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, a), L = Gt(Gt(h ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, b), s && d);
      return $e.createElement("button", Gt({}, x, { "aria-label": x["aria-label"] || f, className: C, onClick: this.handleClick, ref: g, style: L }), r);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(ws)
), Mr = function() {
  return Mr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Mr.apply(this, arguments);
};
function Wr(e, t, n, r) {
  function a(s, d) {
    var g = n(s), f = Mr({}, s), h = Object.keys(g);
    return h.forEach(function(b) {
      delete f[b];
    }), $e.createElement(Tc, Mr({}, r, f, { forwardedRef: d, networkName: e, networkLink: t, opts: n(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), pa(a);
}
function _c(e, t) {
  var n = t.subject, r = t.body, a = t.separator;
  return "mailto:" + Vr({ subject: n, body: r ? r + a + e : e });
}
var Ec = Wr("email", _c, function(e) {
  return {
    subject: e.subject,
    body: e.body,
    separator: e.separator || " "
  };
}, {
  openShareDialogOnClick: !1,
  onClick: function(e, t) {
    window.location.href = t;
  }
}), Gi = Hr({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), Cc = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (r[s] = a[s]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Oc = (
  /** @class */
  function(e) {
    Cc(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.name = "AssertionError", r;
    }
    return t;
  }(Error)
);
function Jn(e, t) {
  if (!e)
    throw new Oc(t);
}
function Rc(e, t) {
  var n = t.quote, r = t.hashtag;
  return Jn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Vr({
    u: e,
    quote: n,
    hashtag: r
  });
}
var Xi = Wr("facebook", Rc, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), Ki = Hr({
  color: "#007fb1",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function Ac(e, t) {
  var n = t.title, r = t.summary, a = t.source;
  return Jn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Vr({ url: e, mini: "true", title: n, summary: r, source: a });
}
var Zi = Wr("linkedin", Ac, function(e) {
  var t = e.title, n = e.summary, r = e.source;
  return { title: t, summary: n, source: r };
}, {
  windowWidth: 750,
  windowHeight: 600
}), Ji = Hr({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function Nc(e, t) {
  var n = t.title, r = t.via, a = t.hashtags, s = a === void 0 ? [] : a, d = t.related, g = d === void 0 ? [] : d;
  return Jn(e, "twitter.url"), Jn(Array.isArray(s), "twitter.hashtags is not an array"), Jn(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + Vr({
    url: e,
    text: n,
    via: r,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
var Qi = Wr("twitter", Nc, function(e) {
  return {
    hashtags: e.hashtags,
    title: e.title,
    via: e.via,
    related: e.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Oo(e) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oo(e);
}
var jc;
function Ro() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jc;
  return t ? e.split(" ").map(function(n) {
    return t[n] || n;
  }).join(" ") : e;
}
var Pc = (typeof window > "u" ? "undefined" : Oo(window)) === "object" && window.Element || function() {
};
function Ic(e, t, n) {
  if (!(e[t] instanceof Pc))
    return new Error("Invalid prop `" + t + "` supplied to `" + n + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Ic, l.shape({
  current: l.any
})]);
var Ao = l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
}), l.arrayOf(l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
})]))]), Lc = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, No.apply(this, arguments);
}
function Mc(e, t) {
  if (e == null) return {};
  var n = Dc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      r = s[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Dc(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, s;
  for (s = 0; s < r.length; s++)
    a = r[s], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Fc = {
  /** Aria label */
  "aria-label": l.string,
  /** Pass children so this component can wrap them */
  children: l.node,
  /** Add custom class */
  className: l.string,
  /** Change existing className with a new className */
  cssModule: l.object,
  /** Add custom class to list tag */
  listClassName: l.string,
  /** Set a custom element for list tag */
  listTag: Ao,
  /** Set a custom element for this component */
  tag: Ao
};
function Da(e) {
  var t = e.className, n = e.listClassName, r = e.cssModule, a = e.children, s = e.tag, d = s === void 0 ? "nav" : s, g = e.listTag, f = g === void 0 ? "ol" : g, h = e["aria-label"], b = h === void 0 ? "breadcrumb" : h, x = Mc(e, Lc), C = Ro(we(t), r), L = Ro(we("breadcrumb", n), r);
  return /* @__PURE__ */ $e.createElement(d, No({}, x, {
    className: C,
    "aria-label": b
  }), /* @__PURE__ */ $e.createElement(f, {
    className: L
  }, a));
}
Da.propTypes = Fc;
var $c = ["className", "cssModule", "active", "tag"];
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jo.apply(this, arguments);
}
function Bc(e, t) {
  if (e == null) return {};
  var n = zc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      r = s[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function zc(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, s;
  for (s = 0; s < r.length; s++)
    a = r[s], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Hc = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: l.bool,
  /** Add custom class to the element */
  className: l.string,
  /** Change existing className with a new className */
  cssModule: l.object,
  /** Set a custom element for this component */
  tag: Ao
};
function Po(e) {
  var t = e.className, n = e.cssModule, r = e.active, a = e.tag, s = a === void 0 ? "li" : a, d = Bc(e, $c), g = Ro(we(t, r ? "active" : !1, "breadcrumb-item"), n);
  return /* @__PURE__ */ $e.createElement(s, jo({}, d, {
    className: g,
    "aria-current": r ? "page" : void 0
  }));
}
Po.propTypes = Hc;
const Vc = jt.div`
  &.news-container h2 {
    font-size: 48px;
  }

  &.event-container h2 {
    font-size: 40px;
  }

  &.news-container img,
  &.event-container img {
    width: 100%;
    max-width: fit-content;
  }

  &.wrapper-container h4 {
    margin-top: 0;
  }

  &.wrapper-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10%;
  }

  &.event-container.wrapper-container {
    max-width: 1500px;
  }

  &.news-container {
    background: #fff;
  }

  ol.breadcrumb {
    padding: 0;
    margin: 0;
  }

  ol.breadcrumb > li {
    margin-bottom: 0;
  }

  .article-social-media {
    margin-bottom: 24px;
  }

  .react-share__ShareButton {
    margin-right: 12px;
  }

  i.news-date {
    display: inline-block;
    margin-bottom: 24px;
  }

  .highlight-gold {
    box-shadow: -0.15em 0 0 #ffc627, 0.15em 0 0 #ffc627;
    background: #ffc627;
  }

  .author {
    display: inline-block;
    margin-top: 30px;
    margin-left: -7px;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .icon-bg {
    display: inline-block;
    position: relative;
    padding: 1px 3.5px;
    background-color: maroon;
    margin-right: 4px;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
  }

  .uds-button {
    margin-top: 17px;
    padding: 0;
  }

  .author-title {
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 11px;
    font-size: 16px;
  }

  .author-contact {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  ol.breadcrumb a {
    text-decoration: none;
  }

  i.fa-calendar,
  i.fa-map-marker-alt {
    font-size: 1.17rem;
    margin-right: 8px;
  }

  .event-author {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .event-author-title {
    margin-top: 4px;
  }

  .event-author-info {
    margin-top: 24px;
  }
`, Wc = jt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, Yo = ({
  type: e,
  articleUrl: t,
  publicationDate: n,
  title: r,
  body: a,
  authorEmail: s,
  authorName: d,
  authorPhone: g,
  authorTitle: f,
  breadcrumbs: h,
  calendarUrl: b,
  eventLocation: x,
  eventTime: C,
  headerImageUrl: L,
  registrationUrl: A,
  zoomUrl: O
}) => {
  const P = we("col", "col-12", {
    "col-lg-8": e === "event" && (A || O || b)
  }), M = () => A ? /* @__PURE__ */ p.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ p.jsx(ln, { color: "maroon", href: A, label: "Register" }) }) : /* @__PURE__ */ p.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ p.jsx(ln, { color: "maroon", href: O, label: "Attend on Zoom" }) }), B = () => /* @__PURE__ */ p.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ p.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ p.jsx("div", { className: "author highlight-gold", children: d }),
    f && /* @__PURE__ */ p.jsx("div", { className: "author-title", children: f }),
    s && /* @__PURE__ */ p.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ p.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ p.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ p.jsx("a", { href: `mailto: ${s}`, children: s })
    ] }),
    g && /* @__PURE__ */ p.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ p.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ p.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ p.jsx("a", { href: `tel: ${g}`, children: g })
    ] })
  ] }) }), W = () => /* @__PURE__ */ p.jsxs(
    Wc,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ p.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ p.jsx("div", { className: "event-author", children: d }),
          /* @__PURE__ */ p.jsx("div", { className: "event-author-title", children: f }),
          (s || g) && /* @__PURE__ */ p.jsxs("div", { className: "event-author-info", children: [
            s && /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("a", { href: `mailto: ${s}`, children: s }) }),
            g && /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("a", { href: `tel: ${g}`, children: g }) })
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ p.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ p.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ p.jsx(Xi, { url: t, quote: r, children: /* @__PURE__ */ p.jsx(
              Gi,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ p.jsx(Qi, { url: t, quote: r, children: /* @__PURE__ */ p.jsx(
              Ji,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ p.jsx(Ec, { url: s, quote: r, children: /* @__PURE__ */ p.jsx(
              gc,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ p.jsx(Zi, { url: t, quote: r, children: /* @__PURE__ */ p.jsx(
              Ki,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) })
          ] })
        ] })
      ]
    }
  ), U = () => /* @__PURE__ */ p.jsxs("div", { className: "col col-12 col-lg-4 col-md-6", children: [
    /* @__PURE__ */ p.jsxs("h4", { children: [
      /* @__PURE__ */ p.jsx("i", { className: "fas fa-map-marker-alt" }),
      "Location:"
    ] }),
    /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: xt(x) }),
    A && O && /* @__PURE__ */ p.jsx("a", { href: O, children: "Attend on Zoom" })
  ] }), I = (Z) => /* @__PURE__ */ p.jsx(
    Po,
    {
      active: Z.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ p.jsx(Po, { tag: "a", href: Z.url, children: Z.title })
    },
    Z.title
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    L && e !== "event" && /* @__PURE__ */ p.jsx(
      "div",
      {
        "data-testid": "uds-hero",
        className: "uds-hero uds-hero-md",
        style: {
          backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${L})`
        }
      }
    ),
    /* @__PURE__ */ p.jsxs(Vc, { className: `container ${e}-container wrapper-container`, children: [
      h && /* @__PURE__ */ p.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ p.jsx("div", { className: "col col-12", children: /* @__PURE__ */ p.jsx(Da, { listClassName: "breadcrumb", children: h.map((Z) => I(Z)) }) }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ p.jsx("div", { className: P, children: /* @__PURE__ */ p.jsx("h2", { "data-testid": "title", children: r }) }),
        e === "event" && /* @__PURE__ */ p.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (A || O) && M(),
          b && /* @__PURE__ */ p.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ p.jsx(
            ln,
            {
              color: "gray",
              size: "small",
              href: b,
              label: "Add to calendar"
            }
          ) })
        ] })
      ] }),
      e === "event" ? /* @__PURE__ */ p.jsxs("div", { className: "row row-spaced pt-3 mb-2", children: [
        C && /* @__PURE__ */ p.jsxs("div", { className: "col col-lg-4 col-md-6 col-sm-12", children: [
          /* @__PURE__ */ p.jsxs("h4", { children: [
            /* @__PURE__ */ p.jsx("i", { className: "far fa-calendar" }),
            "Date and time:"
          ] }),
          /* @__PURE__ */ p.jsx(
            "div",
            {
              dangerouslySetInnerHTML: xt(C)
            }
          )
        ] }),
        (A && O || x) && U()
      ] }) : /* @__PURE__ */ p.jsx("div", { className: "row row-spaced pt-2", children: /* @__PURE__ */ p.jsxs("div", { className: "col col-12", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "article-social-media", children: [
          /* @__PURE__ */ p.jsx(Xi, { url: t, quote: r, children: /* @__PURE__ */ p.jsx(
            Gi,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ p.jsx(Qi, { url: t, quote: r, children: /* @__PURE__ */ p.jsx(
            Ji,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ p.jsx(Zi, { url: t, quote: r, children: /* @__PURE__ */ p.jsx(
            Ki,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) })
        ] }),
        n && /* @__PURE__ */ p.jsx("i", { className: "news-date", children: n })
      ] }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row", children: /* @__PURE__ */ p.jsx(
        "div",
        {
          className: "col col-12",
          dangerouslySetInnerHTML: xt(a),
          "data-testid": "body"
        }
      ) }),
      e === "news" && B(),
      e === "event" && W()
    ] })
  ] });
};
Yo.propTypes = {
  /**
   * Type of article
   */
  type: l.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: l.string.isRequired,
  /**
   * Date for the article
   */
  publicationDate: l.string.isRequired,
  /**
   * Title
   */
  title: l.string.isRequired,
  /**
   * Body content for the article
   */
  body: l.string.isRequired,
  /**
   * Article author email
   */
  authorEmail: l.string,
  /**
   * Article author full name
   */
  authorName: l.string.isRequired,
  /**
   * Article author phone number
   */
  authorPhone: l.string,
  /**
   * Article author title
   */
  authorTitle: l.string,
  /**
   * Breadcrumbs array
   */
  breadcrumbs: l.arrayOf(
    l.shape({
      title: l.string,
      url: l.string,
      active: l.bool
    })
  ),
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl: l.string,
  /**
   * Article image
   */
  headerImageUrl: l.string,
  /**
   * Event location
   */
  eventLocation: l.string,
  /**
   * Event time
   */
  eventTime: l.string,
  /**
   * URL for a registation button
   */
  registrationUrl: l.string,
  /**
   * URL for a Zoom button
   */
  zoomUrl: l.string
};
Yo.defaultProps = {
  type: "news",
  authorEmail: void 0,
  authorPhone: void 0,
  authorTitle: void 0,
  breadcrumbs: void 0,
  calendarUrl: void 0,
  headerImageUrl: void 0,
  eventLocation: void 0,
  eventTime: void 0,
  registrationUrl: void 0,
  zoomUrl: void 0
};
const Uc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ur = ({
  color: e,
  icon: t,
  innerRef: n,
  onClick: r,
  size: a,
  cardTitle: s,
  className: d,
  gaData: g,
  ...f
}) => {
  const h = () => {
    r == null || r();
  };
  return /* @__PURE__ */ p.jsx(
    Qe,
    {
      gaData: {
        ...Uc,
        section: s,
        // @deprecated - remove at some point
        ...g,
        text: `${t == null ? void 0 : t[1]} icon`
      },
      children: /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"} ${d}`,
          ref: n,
          "aria-label": "Close",
          onClick: h,
          ...f,
          children: /* @__PURE__ */ p.jsx("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` })
        }
      )
    }
  );
};
Ur.propTypes = {
  /**
    Color the button based on the background color
  */
  color: l.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: Ho,
  /**
    Button size
  */
  size: l.oneOf(["large", "small"]),
  className: l.string
};
Ur.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const qc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, qr = ({
  label: e,
  cardTitle: t,
  gaData: n,
  ariaLabel: r,
  color: a,
  disabled: s,
  element: d = "button",
  innerRef: g,
  href: f,
  onClick: h,
  ...b
}) => {
  const x = we("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let C = d;
  return f && d === "button" && (C = "a"), /* @__PURE__ */ p.jsx(
    Qe,
    {
      gaData: {
        ...qc,
        section: t,
        // @deprecated - remove at some point
        ...n,
        text: e
      },
      children: /* @__PURE__ */ p.jsx(
        C,
        {
          type: C === "button" && h ? "button" : void 0,
          ...b,
          className: x,
          href: f,
          ref: g,
          onClick: h,
          "aria-label": r,
          children: e
        }
      )
    }
  );
};
qr.propTypes = {
  /**
    Button tag label
  */
  label: l.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: Ho,
  /**
    ARIA label for accessibility
  */
  ariaLabel: l.string,
  /**
    Button background color
  */
  color: l.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: l.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: l.oneOfType([
    l.func,
    l.string,
    l.shape({ $$typeof: l.symbol, render: l.func }),
    l.arrayOf(
      l.oneOfType([
        l.func,
        l.string,
        l.shape({ $$typeof: l.symbol, render: l.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: l.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func
};
qr.defaultProps = {
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
const In = ({
  src: e,
  alt: t,
  cssClasses: n,
  loading: r = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: g,
  height: f,
  cardLink: h,
  title: b,
  caption: x,
  captionTitle: C,
  border: L,
  dropShadow: A
}) => {
  const O = {
    src: e,
    alt: t,
    loading: r,
    decoding: a,
    fetchpriority: d,
    // React attribute bug workaround
    ...(n == null ? void 0 : n.length) > 0 && { className: Tr(n) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...f && { height: f }
  }, P = we("uds-img", {
    borderless: !L,
    "uds-img-drop-shadow": A
  }), M = (W) => {
    const U = W ? `${O.className} ${W}` : O.className;
    return h ? /* @__PURE__ */ p.jsxs("a", { href: h, children: [
      /* @__PURE__ */ p.jsx("img", { ...O, className: U }),
      /* @__PURE__ */ p.jsx("span", { className: "visually-hidden", children: b })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ p.jsx("img", { ...O, className: U })
    );
  }, B = () => /* @__PURE__ */ p.jsx("div", { className: P, children: /* @__PURE__ */ p.jsxs("figure", { className: "figure uds-figure", children: [
    M(),
    x && /* @__PURE__ */ p.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      C && /* @__PURE__ */ p.jsx("h3", { children: C }),
      /* @__PURE__ */ p.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: xt(x)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: x ? B() : M(P) });
};
In.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: l.string.isRequired,
  /**
   * Image alt text
   */
  alt: l.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: l.arrayOf(l.string),
  /**
   * Image loading mode
   */
  loading: l.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: l.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: l.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: l.string,
  /**
   * Height of the image
   */
  height: l.string,
  dataTestId: l.string,
  cardLink: l.string,
  title: l.string,
  caption: l.string,
  captionTitle: l.string,
  border: l.bool,
  dropShadow: l.bool
};
const Yc = jt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Gc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Xc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Gc(e) ? `mailto:${e}` : e, Kc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Xt = ({
  type: e,
  width: t,
  horizontal: n,
  image: r,
  imageAltText: a,
  title: s,
  icon: d,
  body: g,
  eventFormat: f,
  eventLocation: h,
  eventTime: b,
  buttons: x,
  linkLabel: C,
  linkUrl: L,
  tags: A,
  showBorders: O,
  cardLink: P
}) => /* @__PURE__ */ p.jsx(
  Go,
  {
    type: e,
    width: t,
    horizontal: n,
    image: r,
    imageAltText: a,
    title: s,
    icon: d,
    body: g,
    eventFormat: f,
    eventLocation: h,
    eventTime: b,
    buttons: x,
    linkLabel: C,
    linkUrl: L,
    tags: A,
    showBorders: O,
    cardLink: P
  }
);
Xt.propTypes = {
  /**
   * Type of card
   */
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: l.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: l.bool,
  /**
   * Card title
   */
  title: l.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * Card body content
   */
  body: l.string,
  /**
   * Event info format
   */
  eventFormat: l.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: l.string,
  /**
   * Event start time
   */
  eventTime: l.string,
  /**
   * Card header image
   */
  image: l.string,
  /**
   * Card header image alt text
   */
  imageAltText: l.string,
  /**
   * Buttons
   */
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  /**
   * Tags
   */
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: l.bool,
  /**
   * Card link
   */
  cardLink: l.string
};
Xt.defaultProps = {
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
const Go = ({
  type: e,
  width: t,
  horizontal: n,
  image: r,
  imageAltText: a,
  title: s,
  icon: d,
  body: g,
  eventFormat: f,
  eventLocation: h,
  eventTime: b,
  buttons: x,
  linkLabel: C,
  linkUrl: L,
  tags: A,
  showBorders: O,
  cardLink: P
}) => {
  const M = we("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": n,
    borderless: !O
  });
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(Yc, { className: M, "data-testid": "card-container", children: [
    !!r && /* @__PURE__ */ p.jsx(
      In,
      {
        src: r,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: P,
        title: s
      }
    ),
    !r && d && /* @__PURE__ */ p.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    n ? /* @__PURE__ */ p.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ p.jsx(
      Dr,
      {
        type: e,
        body: g,
        eventFormat: f,
        eventLocation: h,
        eventTime: b,
        title: s,
        buttons: x,
        linkLabel: C,
        linkUrl: L,
        tags: A,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ p.jsx(
      Dr,
      {
        type: e,
        body: g,
        eventFormat: f,
        eventLocation: h,
        eventTime: b,
        title: s,
        buttons: x,
        linkLabel: C,
        linkUrl: L,
        tags: A,
        cardLink: P
      }
    )
  ] }) });
};
Go.propTypes = {
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  width: l.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: l.bool,
  title: l.string.isRequired,
  icon: l.arrayOf(l.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: l.string,
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string,
  image: l.string,
  imageAltText: l.string,
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  showBorders: l.bool,
  cardLink: l.string
};
Go.defaultProps = {
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
const Dr = ({
  type: e,
  body: t,
  eventFormat: n,
  eventLocation: r,
  eventTime: a,
  title: s,
  buttons: d,
  linkLabel: g,
  linkUrl: f,
  tags: h,
  cardLink: b
}) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  !!s && /* @__PURE__ */ p.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ p.jsx("h3", { className: "card-title", children: b ? /* @__PURE__ */ p.jsx("a", { href: b, children: s }) : s }) }),
  !!t && /* @__PURE__ */ p.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: xt(t) }) }),
  e === "event" && (a || r) && /* @__PURE__ */ p.jsx(
    Xo,
    {
      eventFormat: n,
      eventTime: a,
      eventLocation: r
    }
  ),
  d && /* @__PURE__ */ p.jsx("div", { className: "card-buttons", children: d.map((x) => /* @__PURE__ */ p.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ p.jsx(
        ln,
        {
          ariaLabel: x.ariaLabel,
          color: x.color,
          icon: x.icon,
          href: x.href,
          label: x.label,
          onClick: x.onClick,
          size: x.size,
          target: x.target,
          cardTitle: s
        }
      )
    },
    `${x.label}-${x.href}`
  )) }),
  f && g && /* @__PURE__ */ p.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ p.jsx(
    Qe,
    {
      gaData: {
        ...Kc,
        section: s,
        text: g
      },
      children: /* @__PURE__ */ p.jsx("a", { href: Xc(f), children: g })
    }
  ) }),
  h && /* @__PURE__ */ p.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: h.map((x) => (
    // @ts-ignore
    /* @__PURE__ */ p.jsx(
      qr,
      {
        ariaLabel: x.ariaLabel,
        color: x.color,
        href: x.href,
        label: x.label,
        onClick: x.onClick,
        cardTitle: s
      },
      `${x.label}-${x.href}`
    )
  )) })
] });
Dr.propTypes = {
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  body: l.string,
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string,
  title: l.string.isRequired,
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  cardLink: l.string
};
Dr.defaultProps = {
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
const Xo = ({ eventFormat: e, eventTime: t, eventLocation: n }) => e === "inline" ? /* @__PURE__ */ p.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ p.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: xt(t) })
  ] }),
  n && /* @__PURE__ */ p.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        dangerouslySetInnerHTML: xt(n)
      }
    )
  ] })
] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  t && /* @__PURE__ */ p.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ p.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: xt(t) })
  ] }) }),
  n && /* @__PURE__ */ p.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ p.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ p.jsx("span", { children: /* @__PURE__ */ p.jsx(
      "div",
      {
        dangerouslySetInnerHTML: xt(n)
      }
    ) })
  ] }) })
] });
Xo.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
Xo.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
var Zc = /* @__PURE__ */ ((e) => (e.COPY = "copy", e))(Zc || {});
const Jc = ({ type: e }) => e == "copy" ? /* @__PURE__ */ p.jsx("hr", { className: "copy-divider" }) : /* @__PURE__ */ p.jsx("hr", {}), Qc = jt.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 3px;
    border: 3px solid #1b1b1b;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1b1b1b transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, eu = () => /* @__PURE__ */ p.jsxs(Qc, { children: [
  /* @__PURE__ */ p.jsx("div", {}),
  /* @__PURE__ */ p.jsx("div", {}),
  /* @__PURE__ */ p.jsx("div", {}),
  /* @__PURE__ */ p.jsx("div", {})
] }), tu = jt.section``, nu = bs(null), ru = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: n,
  renderHeader: r,
  renderBody: a,
  dataTransformer: s = (f) => f,
  dataFilter: d = (f) => f,
  maxItems: g
}) => {
  const [{ data: f, loading: h, error: b }, x] = Ns(), [C, L] = Xe([]), A = { ...e.dataSource, ...t };
  return ot(() => {
    x(A == null ? void 0 : A.url);
  }, [A == null ? void 0 : A.url]), ot(() => {
    const O = f == null ? void 0 : f.nodes.map(s), P = O == null ? void 0 : O.filter(
      (M) => d(M, t == null ? void 0 : t.filters)
    );
    L(g ? P == null ? void 0 : P.slice(0, g) : P);
  }, [f]), // Init the context to be used on its childrens
  /* @__PURE__ */ p.jsx(nu.Provider, { value: { feeds: C }, children: /* @__PURE__ */ p.jsxs(tu, { children: [
    r,
    b ? /* @__PURE__ */ p.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      h && !(C != null && C.length) && /* @__PURE__ */ p.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ p.jsx(eu, {}) }),
      C != null && C.length ? a : !h && /* @__PURE__ */ p.jsx("p", { className: "text-center", children: n })
    ] })
  ] }) });
};
ru.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const Fa = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), $a = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), Md = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), ou = l.shape({
  url: l.string,
  filters: l.string
}), iu = l.shape({
  header: Fa,
  ctaButton: $a,
  dataSource: ou,
  maxItems: l.number
}), au = jt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, su = ({
  defaultProps: e,
  header: t,
  ctaButton: n
}) => {
  const r = { ...e.header, ...t }, a = { ...e.ctaButton, ...n };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ p.jsx("h2", { className: `text-${r.color}`, children: r.text }) }),
        /* @__PURE__ */ p.jsx(au, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ p.jsx(
          Qe,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: r.text,
              text: a.text
            },
            children: /* @__PURE__ */ p.jsx("a", { className: `btn btn-${a.color}`, href: a.url, children: a.text })
          }
        ) })
      ]
    }
  );
};
su.propTypes = {
  defaultProps: iu,
  header: Fa,
  ctaButton: $a
};
const lu = ({ children: e }) => /* @__PURE__ */ p.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ p.jsx("div", { className: "col", children: e }) });
lu.propTypes = {
  children: l.element
};
const cu = jt.img`
  width: 100%;
`;
function uu({ image: e, title: t, contents: n }) {
  return console.log({ image: e, title: t, contents: n }), /* @__PURE__ */ p.jsx("div", { children: "TODO: to be implemented" });
}
function du({
  image: e,
  subTitle: t,
  title: n,
  contents: r,
  contentsColor: a
}) {
  const s = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: ""
  }, d = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    none: "text-white",
    undefined: ""
  }, g = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: we("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ p.jsx(
          cu,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ p.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ p.jsx(
          "span",
          {
            className: we({
              [g[t.color]]: t.color,
              [d[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        n && /* @__PURE__ */ p.jsx("h1", { style: { maxWidth: n.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ p.jsx(
          "span",
          {
            className: we({
              [g[n.color]]: n.color,
              [d[n.highlightColor]]: n.highlightColor
            }),
            children: n.text
          }
        ) }),
        r && /* @__PURE__ */ p.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: we("content", {
              [g[a]]: a
            }),
            children: r.map((f, h) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ p.jsx("p", { children: f.text }, `content-${h}`)
            ))
          }
        )
      ]
    }
  );
}
const Ba = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => du(e),
    "story-hero": () => uu(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Ba.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: Rs,
  title: lo,
  subTitle: lo,
  contents: l.arrayOf(lo),
  contentsColor: l.string
};
const Yt = ({
  dataId: e,
  isClickeable: t,
  disabled: n,
  pageLinkIcon: r,
  selectedPage: a,
  onClick: s,
  ellipses: d,
  ariaLabel: g,
  children: f,
  ariaDisabled: h
}) => /* @__PURE__ */ p.jsx(
  "li",
  {
    className: we("page-item", {
      disabled: n,
      active: a,
      elipses: d
    }),
    children: t ? /* @__PURE__ */ p.jsxs(
      "button",
      {
        type: "button",
        "aria-label": g,
        className: we("page-link", {
          "page-link-icon": r
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": h,
        children: [
          f,
          a && /* @__PURE__ */ p.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ p.jsx("span", { className: "page-link", "data-testid": "page-link", children: f })
  }
);
Yt.propTypes = {
  isClickeable: l.bool,
  disabled: l.bool,
  pageLinkIcon: l.bool,
  selectedPage: l.bool,
  dataId: l.string,
  onClick: l.func,
  children: l.node,
  ellipses: l.bool,
  ariaLabel: l.string,
  ariaDisabled: l.bool
};
Yt.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const fu = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Ko = ({
  type: e,
  background: t,
  currentPage: n,
  totalPages: r,
  onChange: a
}) => {
  const [s, d] = Xe(null);
  ot(() => {
    d(n);
  }, [n]);
  const g = (b) => {
    xa({ ...fu, text: `page ${b}` });
  }, f = (b, x) => {
    const L = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === r ? r : s + 1,
      last: r
    }[x] ?? x;
    d(L), g(L), a == null || a(b, L);
  }, h = () => {
    const b = _i(
      s === r - 1,
      2,
      s === r ? 3 : 1
    ), x = _i(
      s === 1,
      3,
      s === 2 ? 2 : 1
    ), C = Pi(
      s - b,
      s,
      r
    ), L = Pi(
      s,
      s + 1 + x,
      r
    ), A = [...C, ...L];
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      A[0] !== 1 && /* @__PURE__ */ p.jsx(
        Yt,
        {
          ariaLabel: `Page 1 of ${r}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (O) => f(O, "first"),
          children: "1"
        }
      ),
      A[0] > 2 && /* @__PURE__ */ p.jsx(Yt, { ellipses: !0, children: "..." }),
      A.map((O) => /* @__PURE__ */ p.jsx(
        Yt,
        {
          ariaLabel: `Page ${O} of ${r}`,
          isClickeable: !0,
          selectedPage: s === O,
          onClick: (P) => f(P, O),
          children: O
        },
        O
      )),
      A[A.length - 1] < r - 1 && /* @__PURE__ */ p.jsx(Yt, { ellipses: !0, children: "..." }),
      A[A.length - 1] !== r && /* @__PURE__ */ p.jsx(
        Yt,
        {
          isClickeable: !0,
          ariaLabel: `Page ${r} of ${r}`,
          selectedPage: s === r,
          onClick: (O) => f(O, "last"),
          children: r
        }
      )
    ] });
  };
  return /* @__PURE__ */ p.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ p.jsxs(
    "ul",
    {
      className: we(
        "pagination",
        "justify-content-center",
        "pt-2",
        "pb-2",
        {
          border: e === "bordered",
          "uds-bg-gray1": t === "gray1",
          "uds-bg-gray": t === "gray2",
          "uds-bg-dark": t === "gray7"
        }
      ),
      children: [
        /* @__PURE__ */ p.jsx(
          Yt,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (b) => f(b, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        h(),
        /* @__PURE__ */ p.jsx(
          Yt,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === r,
            disabled: s === r,
            pageLinkIcon: !0,
            onClick: (b) => f(b, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Ko.propTypes = {
  /**
   * Type of pagination
   */
  type: l.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: l.number,
  /**
   * Total number of pages
   */
  totalPages: l.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: l.func.isRequired
};
Ko.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
const ea = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ta = {
  OPEN: "open",
  CLOSE: "close"
}, pu = {
  LARGE: "large",
  SMALL: "small"
}, za = (e) => e === pu.SMALL, Ha = ({ imageSize: e, body: t, heading: n, readMoreLink: r }) => {
  const [a, s] = Xe(!1), d = fa(), { isReact: g, isBootstrap: f } = zr(), h = `info-layer-${d}`, b = za(e), x = (C) => {
    (C.type === "click" || C.key === "Enter" || C.key === " ") && s(!a);
  };
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: we("info-layer", { show: a }),
      "data-testid": "info-layer",
      id: h,
      children: /* @__PURE__ */ p.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: we("header", {
              closed: b && !a
            }),
            children: [
              b && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ p.jsx("p", { dangerouslySetInnerHTML: xt(t) }),
              /* @__PURE__ */ p.jsx(
                Qe,
                {
                  gaData: {
                    ...ea,
                    text: "Expand ranking",
                    // TODO: for bootstrap can we use aria-expanded value of the button to populate the "action" field
                    action: a ? ta.OPEN : ta.CLOSE,
                    section: n
                  },
                  children: /* @__PURE__ */ p.jsxs(
                    "button",
                    {
                      "data-bs-toggle": f && "collapse",
                      "data-bs-target": f && `#${h}`,
                      onClick: g && x,
                      className: we("btn-expand", {
                        btn: b
                      }),
                      type: "button",
                      "aria-expanded": a,
                      "aria-controls": h,
                      children: [
                        b ? /* @__PURE__ */ p.jsx("span", { className: "visually-hidden", children: n }) : /* @__PURE__ */ p.jsx("h4", { children: n }),
                        /* @__PURE__ */ p.jsx("i", { className: "fas fa-chevron-up" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        !b && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ p.jsx("p", { dangerouslySetInnerHTML: xt(t) }),
        r && /* @__PURE__ */ p.jsx(
          Qe,
          {
            gaData: {
              ...ea,
              section: n,
              text: "read more"
            },
            children: /* @__PURE__ */ p.jsxs("a", { href: r, className: "read-more", children: [
              "Read more ",
              /* @__PURE__ */ p.jsx("span", { className: "visually-hidden", children: n }),
              /* @__PURE__ */ p.jsx(
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
Ha.propTypes = {
  imageSize: l.oneOf(["small", "large"]),
  body: l.string.isRequired,
  heading: l.string.isRequired,
  readMoreLink: l.string
};
const Va = ({
  imageSize: e = "large",
  image: t,
  imageAlt: n,
  heading: r,
  body: a,
  readMoreLink: s = "",
  citation: d
}) => {
  const g = za(e);
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: we("card-ranking", {
        "large-image": !g,
        "small-image": g
      }),
      children: [
        g ? /* @__PURE__ */ p.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ p.jsx(In, { src: t, alt: n, fetchPriority: "high" }) }) : /* @__PURE__ */ p.jsx(In, { src: t, alt: n, fetchPriority: "high" }),
        g && /* @__PURE__ */ p.jsxs("div", { className: "citation", children: [
          /* @__PURE__ */ p.jsx("h4", { children: r }),
          /* @__PURE__ */ p.jsxs("p", { children: [
            "— ",
            d
          ] })
        ] }),
        /* @__PURE__ */ p.jsx(
          Ha,
          {
            imageSize: e,
            body: a,
            heading: r,
            readMoreLink: s
          }
        )
      ]
    }
  );
};
Va.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: l.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: l.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: l.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: l.string.isRequired,
  /**
   * Ranking card body content
   */
  body: l.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: l.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: l.string
};
var hu = /* @__PURE__ */ ((e) => (e.WARNING = "warning", e.INFO = "info", e.SUCCESS = "success", e.ERROR = "error", e))(hu || {});
const mu = ({
  type: e,
  dismissable: t,
  children: n
}) => {
  var h, b, x;
  const { isBootstrap: r, isReact: a } = zr(), [s, d] = Xe(!0), g = () => d(!1), f = {
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
  return s && /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: we("alert", {
        "alert-dismissable": t,
        [`alert-${(h = f[e]) == null ? void 0 : h.alertClass}`]: e
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ p.jsx(
          "span",
          {
            title: (b = f[e]) == null ? void 0 : b.iconTitle,
            className: `fa fa-icon fa-${(x = f[e]) == null ? void 0 : x.iconName}`
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "alert-content", children: n }),
        t && /* @__PURE__ */ p.jsx("div", { className: "alert-close", children: /* @__PURE__ */ p.jsx(
          Ur,
          {
            icon: ["fas", "times"],
            onClick: a && g,
            "data-bs-dismiss": r && "alert"
          }
        ) })
      ]
    }
  );
}, gu = jt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Wa = ({ gaData: e, hidePrev: t, hideNext: n, slideNav: r }) => /* @__PURE__ */ p.jsxs(gu, { children: [
  !t && /* @__PURE__ */ p.jsx(Qe, { gaData: { ...e, text: "left chevron" }, children: /* @__PURE__ */ p.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: () => r(-1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ p.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ) }),
  !n && /* @__PURE__ */ p.jsx(Qe, { gaData: { ...e, text: "right chevron" }, children: /* @__PURE__ */ p.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: () => r(1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ p.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  ) })
] });
Wa.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object,
  hidePrev: l.bool,
  hideNext: l.bool,
  slideNav: l.func.isRequired
};
const Ua = pa(function(t, n) {
  const {
    id: r,
    selected: a,
    title: s,
    selectTab: d,
    leftKeyPressed: g,
    rightKeyPressed: f,
    icon: h,
    gaData: b
  } = t, x = un(null);
  xs(
    n,
    () => ({
      focus() {
        x.current.focus();
      },
      scrollIntoView() {
        var O, P, M, B, W, U, I;
        const L = ((O = x.current) == null ? void 0 : O.offsetWidth) / 2 + x.current.offsetLeft, A = ((M = (P = x.current) == null ? void 0 : P.offsetParent) == null ? void 0 : M.scrollLeft) + ((W = (B = x.current) == null ? void 0 : B.offsetParent) == null ? void 0 : W.offsetWidth) / 2;
        (I = (U = x.current) == null ? void 0 : U.offsetParent) == null || I.scrollBy({
          left: L - A
        });
      }
    }),
    []
  );
  const C = (L) => {
    L.keyCode === 37 ? (L.preventDefault(), g()) : L.keyCode === 39 && (L.preventDefault(), f());
  };
  return /* @__PURE__ */ p.jsx(Qe, { gaData: { ...b, text: s }, children: /* @__PURE__ */ p.jsxs(
    "a",
    {
      ref: x,
      className: `nav-item nav-link ${a ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": a,
      onClick: (L) => d(L, r, s),
      onKeyDown: C,
      tabIndex: a ? "" : "-1",
      children: [
        s,
        " ",
        h && /* @__PURE__ */ p.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
Ua.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object,
  id: l.string.isRequired,
  selected: l.bool.isRequired,
  title: l.string.isRequired,
  selectTab: l.func.isRequired,
  leftKeyPressed: l.func.isRequired,
  rightKeyPressed: l.func.isRequired,
  icon: l.arrayOf(l.string)
};
function vu() {
  const e = un({}), t = Ss(
    (n) => (r) => {
      e.current[n] = r;
    },
    []
  );
  return [e, t];
}
const yu = ({ id: e, bgColor: t, selected: n, children: r }) => n && /* @__PURE__ */ p.jsx(
  "div",
  {
    className: `tab-pane fade show ${n ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: r
  }
);
yu.propTypes = {
  id: l.string.isRequired,
  bgColor: l.string,
  selected: l.bool,
  children: l.oneOfType([l.array, l.element])
};
const qa = ({
  initialTab: e = "",
  children: t,
  bgColor: n = "",
  onTabChange: r = (a) => {
  }
}) => {
  const a = $e.Children.toArray(t), s = un(!1), [d, g] = Xe(
    e && e !== "null" ? e : a[0].props.id
  ), f = un(null), [h, b] = vu(), { isReact: x, isBootstrap: C } = zr(), L = (ee) => {
    var be;
    r(ee), (be = h.current[ee]) == null || be.focus(), g(ee);
  }, [A, O] = Xe(0), [P, M] = Xe();
  ot(() => {
    const ee = () => {
      O(f.current.scrollLeft);
    };
    return f.current.addEventListener("scroll", ee), ee(), () => {
      f.current && f.current.removeEventListener("scroll", ee);
    };
  }, [P]), ot(() => {
    const ee = () => {
      M(
        f.current.scrollWidth - f.current.offsetWidth
      );
    };
    return window.addEventListener("resize", ee), ee(), () => {
      f.current && window.removeEventListener("resize", ee);
    };
  }, []), ot(() => {
    var ee;
    (ee = h.current[d]) == null || ee.scrollIntoView();
  }, [d]), ot(() => {
    s.current && e && e !== "null" && d !== e && g(e);
  }, [e]), ot(() => {
    s.current = !0;
  }, []);
  const B = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, W = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, U = a.map((ee) => $e.cloneElement(ee, {
    bgColor: n,
    selected: d === ee.props.id
  })), I = (ee) => {
    const be = f.current, Ge = be.scrollWidth - be.clientWidth;
    let ve = be.scrollLeft + 200 * ee;
    ve = Math.max(0, Math.min(Ge, ve)), be.scrollTo({
      left: ve,
      behavior: "smooth"
    });
  }, Z = (ee, be, Ge) => {
    ee.preventDefault(), L(be);
  }, ce = (ee = !0) => {
    const be = a.length, Ge = ee ? 1 : -1, ge = a.findIndex((ze) => ze.props.id === d), ve = a[(be + ge + Ge) % be].props.id;
    L(ve);
  };
  let Me = "uds-tabbed-panels";
  return n === "bg-dark" && (Me += " uds-tabbed-panels-dark"), /* @__PURE__ */ p.jsxs("div", { className: n, children: [
    /* @__PURE__ */ p.jsxs("nav", { className: Me, children: [
      /* @__PURE__ */ p.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: f, children: a.map((ee, be) => /* @__PURE__ */ p.jsx(
        Ua,
        {
          ref: b(ee.props.id),
          id: ee.props.id,
          title: ee.props.title,
          selected: d === ee.props.id,
          gaData: W,
          selectTab: x && Z,
          leftKeyPressed: x && (() => ce(!1)),
          rightKeyPressed: x && (() => ce()),
          icon: ee.props.icon,
          index: be
        },
        ee.props.id
      )) }),
      /* @__PURE__ */ p.jsx(
        Wa,
        {
          hidePrev: A <= 0,
          hideNext: A >= P,
          gaData: B,
          slideNav: x && I
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: U
      }
    )
  ] });
};
qa.propTypes = {
  initialTab: l.string,
  children: l.arrayOf(l.element).isRequired,
  bgColor: l.string,
  onTabChange: l.func
};
const Zo = ({ imageSource: e, imageAltText: t, quote: n, itemStyle: r = {} }) => {
  var a, s;
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${Tr(r.containerCssClass)}`,
      children: [
        e && /* @__PURE__ */ p.jsx(
          In,
          {
            src: e,
            alt: t,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ p.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ p.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ p.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          n.title && /* @__PURE__ */ p.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ p.jsx("span", { className: Tr(r.titleCssClass), children: n.title }) }),
          n.content && /* @__PURE__ */ p.jsx(
            "p",
            {
              className: Tr(r.contentCssClass),
              "data-testid": "testimonial-content",
              children: n.content
            }
          ),
          (!!((a = n.cite) != null && a.name) || !!((s = n.cite) != null && s.description)) && /* @__PURE__ */ p.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ p.jsx("cite", { className: "name", children: n.cite.name }),
            n.cite && /* @__PURE__ */ p.jsx("cite", { className: "description", children: n.cite.description })
          ] })
        ] })
      ]
    }
  );
};
Zo.propTypes = {
  quote: l.shape({
    title: l.string,
    content: l.string,
    cite: l.shape({
      name: l.string,
      description: l.string
    })
  }).isRequired,
  imageSource: l.string,
  imageAltText: l.string,
  itemStyle: l.shape({
    containerCssClass: l.arrayOf(l.string),
    titleCssClass: l.arrayOf(l.string),
    contentCssClass: l.arrayOf(l.string)
  })
};
let wu = 0;
const bu = ({
  title: e,
  content: t,
  triggerElement: n
}) => {
  const [r] = Xe(`tooltip-${wu++}`), a = un(null);
  return /* @__PURE__ */ p.jsxs("span", { className: "uds-tooltip-container", children: [
    $e.cloneElement(n, {
      ref: a,
      "aria-describedby": r,
      tabindex: 0
    }),
    /* @__PURE__ */ p.jsxs("div", { role: "tooltip", className: "uds-tooltip-description", id: r, children: [
      e && /* @__PURE__ */ p.jsx("span", { className: "uds-tooltip-heading", children: e }),
      t
    ] })
  ] });
}, xu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, Su = ({
  url: e = "",
  vttUrl: t,
  caption: n,
  title: r = "",
  className: a,
  controls: s = !0
}) => {
  const d = un(null);
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: we(`uds-video-container ${a}`, {
        "uds-video-with-caption": n
      }),
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ p.jsx(Qe, { gaData: { ...xu, section: r }, children: /* @__PURE__ */ p.jsxs(
          "video",
          {
            ref: d,
            title: r,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ p.jsx("source", { src: e }),
              /* @__PURE__ */ p.jsx(
                "track",
                {
                  src: t,
                  kind: "captions",
                  srcLang: "en",
                  label: "english_captions"
                }
              )
            ]
          }
        ) }) }),
        n && /* @__PURE__ */ p.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ p.jsx("figcaption", { children: n }) })
      ]
    }
  );
}, ku = ({ title: e = "", caption: t, url: n = "", className: r }) => /* @__PURE__ */ p.jsxs(
  "div",
  {
    className: we(`uds-video-container ${r}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ p.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ p.jsx("iframe", { title: e, src: n }) }),
      t && /* @__PURE__ */ p.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ p.jsx("figcaption", { children: t }) })
    ]
  }
), Ya = (e) => {
  const {
    type: t = "video",
    url: n = "",
    vttUrl: r,
    title: a = "",
    caption: s,
    className: d,
    controls: g = !0
  } = e;
  return t === "youtube" ? ku({ url: n, title: a, caption: s, className: d }) : Su({
    url: n,
    vttUrl: r,
    title: a,
    caption: s,
    className: d,
    controls: g
  });
};
Ya.propTypes = {
  type: l.oneOf(["video", "youtube"]),
  url: l.string,
  vttUrl: l.string,
  title: l.string,
  className: l.string,
  caption: l.string,
  controls: l.bool
};
const Tu = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, Jo = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ p.jsx(
    "div",
    {
      role: "group",
      className: "glide__bullets",
      "data-glide-el": "controls[nav]",
      "data-testid": "bullets-container",
      onClick: (t) => t.stopPropagation(),
      onKeyDown: (t) => t.stopPropagation(),
      children: e
    }
  )
);
Jo.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const Ga = ({ buttonCount: e }) => {
  const t = [];
  for (let n = 0; n < e; n += 1)
    t.push(
      /* @__PURE__ */ p.jsx(Qe, { gaData: Tu, children: /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${n}`,
          "aria-label": `Slide view ${n + 1}`
        }
      ) }, `bullet-${n}`)
    );
  return /* @__PURE__ */ p.jsx(Jo, { children: t });
};
Ga.propTypes = {
  buttonCount: l.number.isRequired
};
const Xa = ({ imageItems: e, onItemClick: t = () => null }) => {
  const n = (a, s) => {
    const { ariaSelected: d } = a.currentTarget.dataset;
    a.currentTarget.dataset.ariaSelected = String(!d), a.stopPropagation(), t(s);
  }, r = e.map((a, s) => /* @__PURE__ */ p.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${s}`,
      "aria-label": `Slide view ${s + 1}`,
      "aria-selected": "false",
      onClick: (d) => n(d, s),
      onKeyDown: (d) => n(d, s),
      children: /* @__PURE__ */ p.jsx(
        "img",
        {
          src: a,
          alt: `Slide ${s + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${s}`
  ));
  return /* @__PURE__ */ p.jsx(Jo, { children: r });
};
Xa.propTypes = {
  imageItems: l.arrayOf(l.string).isRequired,
  onItemClick: l.func
};
const Qo = ({ onClick: e = () => null }) => /* @__PURE__ */ p.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ p.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
Qo.propTypes = {
  onClick: l.func
};
const ei = ({ onClick: e = () => null }) => /* @__PURE__ */ p.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ p.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
ei.propTypes = {
  onClick: l.func
};
const na = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ti = ({ children: e = null }) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
ti.propTypes = {
  children: l.arrayOf(l.element)
};
const Ka = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ p.jsxs(ti, { children: [
  /* @__PURE__ */ p.jsx(Qe, { gaData: { ...na, text: "left chevron" }, children: /* @__PURE__ */ p.jsx(ei, { onClick: e }) }),
  t,
  /* @__PURE__ */ p.jsx(Qe, { gaData: { ...na, text: "right chevron" }, children: /* @__PURE__ */ p.jsx(Qo, { onClick: e }) })
] });
Ka.propTypes = {
  children: l.element,
  onClick: l.func
};
const Za = ({ carouselItems: e }) => {
  const t = e.map((n) => /* @__PURE__ */ p.jsx("li", { className: "glide__slide slider", children: n.item }, n.id.toString()));
  return /* @__PURE__ */ p.jsx("ul", { className: "glide__slides", children: t });
};
Za.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object)
};
function ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ra(Object(n), !0).forEach(function(r) {
      Eu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Rr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rr = function(t) {
    return typeof t;
  } : Rr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function Yr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _u(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Gr(e, t, n) {
  return t && _u(e.prototype, t), e;
}
function Eu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Cu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Io(e, t);
}
function Ln(e) {
  return Ln = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ln(e);
}
function Io(e, t) {
  return Io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Io(e, t);
}
function Ou() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ru(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Au(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ru(e);
}
function Nu(e) {
  var t = Ou();
  return function() {
    var r = Ln(e), a;
    if (t) {
      var s = Ln(this).constructor;
      a = Reflect.construct(r, arguments, s);
    } else
      a = r.apply(this, arguments);
    return Au(this, a);
  };
}
function ju(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Ln(e), e !== null); )
    ;
  return e;
}
function Ar() {
  return typeof Reflect < "u" && Reflect.get ? Ar = Reflect.get : Ar = function(t, n, r) {
    var a = ju(t, n);
    if (a) {
      var s = Object.getOwnPropertyDescriptor(a, n);
      return s.get ? s.get.call(arguments.length < 3 ? t : r) : s.value;
    }
  }, Ar.apply(this, arguments);
}
var Pu = {
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
function Zt(e) {
  console.error("[Glide warn]: ".concat(e));
}
function Je(e) {
  return parseInt(e);
}
function Iu(e) {
  return parseFloat(e);
}
function Lo(e) {
  return typeof e == "string";
}
function Mn(e) {
  var t = Rr(e);
  return t === "function" || t === "object" && !!e;
}
function Fr(e) {
  return typeof e == "function";
}
function Ja(e) {
  return typeof e > "u";
}
function Mo(e) {
  return e.constructor === Array;
}
function Lu(e, t, n) {
  var r = {};
  for (var a in t)
    Fr(t[a]) ? r[a] = t[a](e, r, n) : Zt("Extension must be a function");
  for (var s in r)
    Fr(r[s].mount) && r[s].mount();
  return r;
}
function Le(e, t, n) {
  Object.defineProperty(e, t, n);
}
function Mu(e) {
  return Object.keys(e).sort().reduce(function(t, n) {
    return t[n] = e[n], t[n], t;
  }, {});
}
function Do(e, t) {
  var n = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    n.classes = Object.assign({}, e.classes, t.classes);
    var r = ["direction", "type", "slide", "arrow", "nav"];
    r.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (n.classes[a] = oa(oa({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (n.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), n;
}
var Du = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Yr(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return Gr(e, [{
    key: "on",
    value: function(n, r) {
      if (Mo(n)) {
        for (var a = 0; a < n.length; a++)
          this.on(n[a], r);
        return;
      }
      this.hop.call(this.events, n) || (this.events[n] = []);
      var s = this.events[n].push(r) - 1;
      return {
        remove: function() {
          delete this.events[n][s];
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
    value: function(n, r) {
      if (Mo(n)) {
        for (var a = 0; a < n.length; a++)
          this.emit(n[a], r);
        return;
      }
      this.hop.call(this.events, n) && this.events[n].forEach(function(s) {
        s(r || {});
      });
    }
  }]), e;
}(), Fu = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Yr(this, e), this._c = {}, this._t = [], this._e = new Du(), this.disabled = !1, this.selector = t, this.settings = Do(Pu, n), this.index = this.settings.startAt;
  }
  return Gr(e, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Mn(n) ? this._c = Lu(this, n, this._e) : Zt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return Mo(n) ? this._t = n : Zt("You need to provide a array on `mutate()`"), this;
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = Do(this.settings, n), n.hasOwnProperty("startAt") && (this.index = n.startAt), this._e.emit("update"), this;
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
    value: function(n) {
      return this._c.Run.make(n), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(n) {
      return this._c.Transition.disable(), this._c.Move.make(n), this;
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return n && (this.settings.autoplay = n), this._e.emit("play"), this;
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
    value: function(n, r) {
      return this._e.on(n, r), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(n) {
      return this.settings.type === n;
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
    set: function(n) {
      Mn(n) ? this._o = n : Zt("Options must be an `object` instance.");
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
    set: function(n) {
      this._i = Je(n);
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
    set: function(n) {
      this._d = !!n;
    }
  }]), e;
}();
function $u(e, t, n) {
  var r = {
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
    make: function(h) {
      var b = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = h, n.emit("run.before", this.move), this.calculate(), n.emit("run", this.move), t.Transition.after(function() {
        b.isStart() && n.emit("run.start", b.move), b.isEnd() && n.emit("run.end", b.move), b.isOffset() && (b._o = !1, n.emit("run.offset", b.move)), n.emit("run.after", b.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var h = this.move, b = this.length, x = h.steps, C = h.direction, L = 1;
      if (C === "=") {
        if (e.settings.bound && Je(x) > b) {
          e.index = b;
          return;
        }
        e.index = x;
        return;
      }
      if (C === ">" && x === ">") {
        e.index = b;
        return;
      }
      if (C === "<" && x === "<") {
        e.index = 0;
        return;
      }
      if (C === "|" && (L = e.settings.perView || 1), C === ">" || C === "|" && x === ">") {
        var A = a(L);
        A > b && (this._o = !0), e.index = s(A, L);
        return;
      }
      if (C === "<" || C === "|" && x === "<") {
        var O = d(L);
        O < 0 && (this._o = !0), e.index = g(O, L);
        return;
      }
      Zt("Invalid direction pattern [".concat(C).concat(x, "] has been used"));
    },
    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function() {
      return e.index <= 0;
    },
    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function() {
      return e.index >= this.length;
    },
    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function() {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return h ? this._o ? h === "|>" ? this.move.direction === "|" && this.move.steps === ">" : h === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === h : !1 : this._o;
    },
    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function() {
      return e.isType("slider") && e.settings.focusAt !== "center" && e.settings.bound;
    }
  };
  function a(f) {
    var h = e.index;
    return e.isType("carousel") ? h + f : h + (f - h % f);
  }
  function s(f, h) {
    var b = r.length;
    return f <= b ? f : e.isType("carousel") ? f - (b + 1) : e.settings.rewind ? r.isBound() && !r.isEnd() ? b : 0 : r.isBound() ? b : Math.floor(b / h) * h;
  }
  function d(f) {
    var h = e.index;
    if (e.isType("carousel"))
      return h - f;
    var b = Math.ceil(h / f);
    return (b - 1) * f;
  }
  function g(f, h) {
    var b = r.length;
    return f >= 0 ? f : e.isType("carousel") ? f + (b + 1) : e.settings.rewind ? r.isBound() && r.isStart() ? b : Math.floor(b / h) * h : 0;
  }
  return Le(r, "move", {
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
    set: function(h) {
      var b = h.substr(1);
      this._m = {
        direction: h.substr(0, 1),
        steps: b ? Je(b) ? Je(b) : b : 0
      };
    }
  }), Le(r, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var h = e.settings, b = t.Html.slides.length;
      return this.isBound() ? b - 1 - (Je(h.perView) - 1) + Je(h.focusAt) : b - 1;
    }
  }), Le(r, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), r;
}
function ia() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Xr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, a, s, d, g = 0, f = function() {
    g = n.leading === !1 ? 0 : ia(), r = null, d = e.apply(a, s), r || (a = s = null);
  }, h = function() {
    var x = ia();
    !g && n.leading === !1 && (g = x);
    var C = t - (x - g);
    return a = this, s = arguments, C <= 0 || C > t ? (r && (clearTimeout(r), r = null), g = x, d = e.apply(a, s), r || (a = s = null)) : !r && n.trailing !== !1 && (r = setTimeout(f, C)), d;
  };
  return h.cancel = function() {
    clearTimeout(r), g = 0, r = a = s = null;
  }, h;
}
var Sr = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Bu(e, t, n) {
  var r = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(s) {
      for (var d = 0, g = s.length; d < g; d++) {
        var f = s[d].style, h = t.Direction.value;
        d !== 0 ? f[Sr[h][0]] = "".concat(this.value / 2, "px") : f[Sr[h][0]] = "", d !== s.length - 1 ? f[Sr[h][1]] = "".concat(this.value / 2, "px") : f[Sr[h][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(s) {
      for (var d = 0, g = s.length; d < g; d++) {
        var f = s[d].style;
        f.marginLeft = "", f.marginRight = "";
      }
    }
  };
  return Le(r, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return Je(e.settings.gap);
    }
  }), Le(r, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return r.value * t.Sizes.length;
    }
  }), Le(r, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var s = e.settings.perView;
      return r.value * (s - 1) / s;
    }
  }), n.on(["build.after", "update"], Xr(function() {
    r.apply(t.Html.wrapper.children);
  }, 30)), n.on("destroy", function() {
    r.remove(t.Html.wrapper.children);
  }), r;
}
function Qa(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, n = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && n.push(t);
    return n;
  }
  return [];
}
function Fo(e) {
  return Array.prototype.slice.call(e);
}
var zu = '[data-glide-el="track"]';
function Hu(e, t, n) {
  var r = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(zu), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Fo(this.wrapper.children).filter(function(s) {
        return !s.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Le(r, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return r._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(s) {
      Lo(s) && (s = document.querySelector(s)), s !== null ? r._r = s : Zt("Root element must be a existing Html node");
    }
  }), Le(r, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return r._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(s) {
      r._t = s;
    }
  }), Le(r, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return r.track.children[0];
    }
  }), n.on("update", function() {
    r.collectSlides();
  }), r;
}
function Vu(e, t, n) {
  var r = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.peek;
    }
  };
  return Le(r, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return r._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(s) {
      Mn(s) ? (s.before = Je(s.before), s.after = Je(s.after)) : s = Je(s), r._v = s;
    }
  }), Le(r, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var s = r.value, d = e.settings.perView;
      return Mn(s) ? s.before / d + s.after / d : s * 2 / d;
    }
  }), n.on(["resize", "update"], function() {
    r.mount();
  }), r;
}
function Wu(e, t, n) {
  var r = {
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
      var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = d, n.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        n.emit("move.after", {
          movement: s.value
        });
      });
    }
  };
  return Le(r, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return r._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(s) {
      r._o = Ja(s) ? 0 : Je(s);
    }
  }), Le(r, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Le(r, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var s = this.offset, d = this.translate;
      return t.Direction.is("rtl") ? d + s : d - s;
    }
  }), n.on(["build.before", "run"], function() {
    r.make();
  }), r;
}
function Uu(e, t, n) {
  var r = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var s = "".concat(this.slideWidth, "px"), d = t.Html.slides, g = 0; g < d.length; g++)
        d[g].style.width = s;
    },
    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function() {
      t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function() {
      for (var s = t.Html.slides, d = 0; d < s.length; d++)
        s[d].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Le(r, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Le(r, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Le(r, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return r.slideWidth * r.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Le(r, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return r.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
    }
  }), n.on(["build.before", "resize", "update"], function() {
    r.setupSlides(), r.setupWrapper();
  }), n.on("destroy", function() {
    r.remove();
  }), r;
}
function qu(e, t, n) {
  var r = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after");
    },
    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function() {
      t.Html.root.classList.add(e.settings.classes.type[e.settings.type]);
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function() {
      var s = e.settings.classes, d = t.Html.slides[e.index];
      d && (d.classList.add(s.slide.active), Qa(d).forEach(function(g) {
        g.classList.remove(s.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var s = e.settings.classes, d = s.type, g = s.slide;
      t.Html.root.classList.remove(d[e.settings.type]), t.Html.slides.forEach(function(f) {
        f.classList.remove(g.active);
      });
    }
  };
  return n.on(["destroy", "update"], function() {
    r.removeClasses();
  }), n.on(["resize", "update"], function() {
    r.mount();
  }), n.on("move.after", function() {
    r.activeClass();
  }), r;
}
function Yu(e, t, n) {
  var r = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function() {
      this.items = [], e.isType("carousel") && (this.items = this.collect());
    },
    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], d = t.Html.slides, g = e.settings, f = g.perView, h = g.classes, b = g.cloningRatio;
      if (d.length > 0)
        for (var x = +!!e.settings.peek, C = f + x + Math.round(f / 2), L = d.slice(0, C).reverse(), A = d.slice(C * -1), O = 0; O < Math.max(b, Math.floor(f / d.length)); O++) {
          for (var P = 0; P < L.length; P++) {
            var M = L[P].cloneNode(!0);
            M.classList.add(h.slide.clone), s.push(M);
          }
          for (var B = 0; B < A.length; B++) {
            var W = A[B].cloneNode(!0);
            W.classList.add(h.slide.clone), s.unshift(W);
          }
        }
      return s;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var s = this.items, d = t.Html, g = d.wrapper, f = d.slides, h = Math.floor(s.length / 2), b = s.slice(0, h).reverse(), x = s.slice(h * -1).reverse(), C = "".concat(t.Sizes.slideWidth, "px"), L = 0; L < x.length; L++)
        g.appendChild(x[L]);
      for (var A = 0; A < b.length; A++)
        g.insertBefore(b[A], f[0]);
      for (var O = 0; O < s.length; O++)
        s[O].style.width = C;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var s = this.items, d = 0; d < s.length; d++)
        t.Html.wrapper.removeChild(s[d]);
    }
  };
  return Le(r, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (t.Sizes.slideWidth + t.Gaps.value) * r.items.length;
    }
  }), n.on("update", function() {
    r.remove(), r.mount(), r.append();
  }), n.on("build.before", function() {
    e.isType("carousel") && r.append();
  }), n.on("destroy", function() {
    r.remove();
  }), r;
}
var dn = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Yr(this, e), this.listeners = t;
  }
  return Gr(e, [{
    key: "on",
    value: function(n, r, a) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Lo(n) && (n = [n]);
      for (var d = 0; d < n.length; d++)
        this.listeners[n[d]] = a, r.addEventListener(n[d], this.listeners[n[d]], s);
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
    value: function(n, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      Lo(n) && (n = [n]);
      for (var s = 0; s < n.length; s++)
        r.removeEventListener(n[s], this.listeners[n[s]], a);
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
  }]), e;
}();
function Gu(e, t, n) {
  var r = new dn(), a = {
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
      r.on("resize", window, Xr(function() {
        n.emit("resize");
      }, e.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("resize", window);
    }
  };
  return n.on("destroy", function() {
    a.unbind(), r.destroy();
  }), a;
}
var Xu = ["ltr", "rtl"], Ku = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Zu(e, t, n) {
  var r = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.direction;
    },
    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function(s) {
      var d = s.slice(0, 1);
      return this.is("rtl") ? s.split(d).join(Ku[d]) : s;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(s) {
      return this.value === s;
    },
    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function() {
      t.Html.root.classList.add(e.settings.classes.direction[this.value]);
    },
    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function() {
      t.Html.root.classList.remove(e.settings.classes.direction[this.value]);
    }
  };
  return Le(r, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return r._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(s) {
      Xu.indexOf(s) > -1 ? r._v = s : Zt("Direction value must be `ltr` or `rtl`");
    }
  }), n.on(["destroy", "update"], function() {
    r.removeClass();
  }), n.on("update", function() {
    r.mount();
  }), n.on(["build.before", "update"], function() {
    r.addClass();
  }), r;
}
function Ju(e, t) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      return t.Direction.is("rtl") ? -r : r;
    }
  };
}
function Qu(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var a = Math.floor(r / t.Sizes.slideWidth);
      return r + t.Gaps.value * a;
    }
  };
}
function ed(e, t) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      return r + t.Clones.grow / 2;
    }
  };
}
function td(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      if (e.settings.focusAt >= 0) {
        var a = t.Peek.value;
        return Mn(a) ? r - a.before : r - a;
      }
      return r;
    }
  };
}
function nd(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var a = t.Gaps.value, s = t.Sizes.width, d = e.settings.focusAt, g = t.Sizes.slideWidth;
      return d === "center" ? r - (s / 2 - g / 2) : r - g * d - a * d;
    }
  };
}
function rd(e, t, n) {
  var r = [Qu, ed, td, nd].concat(e._t, [Ju]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(s) {
      for (var d = 0; d < r.length; d++) {
        var g = r[d];
        Fr(g) && Fr(g().modify) ? s = g(e, t, n).modify(s) : Zt("Transformer should be a function that returns an object with `modify()` method");
      }
      return s;
    }
  };
}
function od(e, t, n) {
  var r = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(s) {
      var d = rd(e, t).mutate(s), g = "translate3d(".concat(-1 * d, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = g, t.Html.wrapper.style.webkitTransform = g, t.Html.wrapper.style.transform = g;
    },
    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transform = "";
    },
    /**
     * @return {number}
     */
    getStartIndex: function() {
      var s = t.Sizes.length, d = e.index, g = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? s + (d - g) : (d + g) % s;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var s = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? s * -1 : s;
    }
  };
  return n.on("move", function(a) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return r.set(a.movement);
    t.Transition.after(function() {
      n.emit("translate.jump"), r.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return r.set(s - t.Translate.getTravelDistance());
  }), n.on("destroy", function() {
    r.remove();
  }), r;
}
function id(e, t, n) {
  var r = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(d) {
      var g = e.settings;
      return r ? "".concat(d, " 0ms ").concat(g.animationTimingFunc) : "".concat(d, " ").concat(this.duration, "ms ").concat(g.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(d);
    },
    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transition = "";
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
      r = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      r = !0, this.set();
    }
  };
  return Le(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var d = e.settings;
      return e.isType("slider") && t.Run.offset ? d.rewindDuration : d.animationDuration;
    }
  }), n.on("move", function() {
    a.set();
  }), n.on(["build.before", "resize", "translate.jump"], function() {
    a.disable();
  }), n.on("run", function() {
    a.enable();
  }), n.on("destroy", function() {
    a.remove();
  }), a;
}
var es = !1;
try {
  var aa = Object.defineProperty({}, "passive", {
    get: function() {
      es = !0;
    }
  });
  window.addEventListener("testPassive", null, aa), window.removeEventListener("testPassive", null, aa);
} catch {
}
var $o = es, kr = ["touchstart", "mousedown"], sa = ["touchmove", "mousemove"], la = ["touchend", "touchcancel", "mouseup", "mouseleave"], ca = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function ad(e, t, n) {
  var r = new dn(), a = 0, s = 0, d = 0, g = !1, f = $o ? {
    passive: !0
  } : !1, h = {
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
    start: function(x) {
      if (!g && !e.disabled) {
        this.disable();
        var C = this.touches(x);
        a = null, s = Je(C.pageX), d = Je(C.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(x) {
      if (!e.disabled) {
        var C = e.settings, L = C.touchAngle, A = C.touchRatio, O = C.classes, P = this.touches(x), M = Je(P.pageX) - s, B = Je(P.pageY) - d, W = Math.abs(M << 2), U = Math.abs(B << 2), I = Math.sqrt(W + U), Z = Math.sqrt(U);
        if (a = Math.asin(Z / I), a * 180 / Math.PI < L)
          x.stopPropagation(), t.Move.make(M * Iu(A)), t.Html.root.classList.add(O.dragging), n.emit("swipe.move");
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
    end: function(x) {
      if (!e.disabled) {
        var C = e.settings, L = C.perSwipe, A = C.touchAngle, O = C.classes, P = this.touches(x), M = this.threshold(x), B = P.pageX - s, W = a * 180 / Math.PI;
        this.enable(), B > M && W < A ? t.Run.make(t.Direction.resolve("".concat(L, "<"))) : B < -M && W < A ? t.Run.make(t.Direction.resolve("".concat(L, ">"))) : t.Move.make(), t.Html.root.classList.remove(O.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var x = this, C = e.settings, L = C.swipeThreshold, A = C.dragThreshold;
      L && r.on(kr[0], t.Html.wrapper, function(O) {
        x.start(O);
      }, f), A && r.on(kr[1], t.Html.wrapper, function(O) {
        x.start(O);
      }, f);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      r.off(kr[0], t.Html.wrapper, f), r.off(kr[1], t.Html.wrapper, f);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var x = this;
      r.on(sa, t.Html.wrapper, Xr(function(C) {
        x.move(C);
      }, e.settings.throttle), f);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      r.off(sa, t.Html.wrapper, f);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var x = this;
      r.on(la, t.Html.wrapper, function(C) {
        x.end(C);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      r.off(la, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(x) {
      return ca.indexOf(x.type) > -1 ? x : x.touches[0] || x.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(x) {
      var C = e.settings;
      return ca.indexOf(x.type) > -1 ? C.dragThreshold : C.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return g = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return g = !0, t.Transition.disable(), this;
    }
  };
  return n.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), n.on("destroy", function() {
    h.unbindSwipeStart(), h.unbindSwipeMove(), h.unbindSwipeEnd(), r.destroy();
  }), h;
}
function sd(e, t, n) {
  var r = new dn(), a = {
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
      r.on("dragstart", t.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("dragstart", t.Html.wrapper);
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
  return n.on("destroy", function() {
    a.unbind(), r.destroy();
  }), a;
}
function ld(e, t, n) {
  var r = new dn(), a = !1, s = !1, d = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._a = t.Html.wrapper.querySelectorAll("a"), this.bind();
    },
    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function() {
      r.on("click", t.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("click", t.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(f) {
      s && (f.stopPropagation(), f.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (s = !0, !a) {
        for (var f = 0; f < this.items.length; f++)
          this.items[f].draggable = !1;
        a = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (s = !1, a) {
        for (var f = 0; f < this.items.length; f++)
          this.items[f].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return Le(d, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return d._a;
    }
  }), n.on("swipe.move", function() {
    d.detach();
  }), n.on("swipe.end", function() {
    t.Transition.after(function() {
      d.attach();
    });
  }), n.on("destroy", function() {
    d.attach(), d.unbind(), r.destroy();
  }), d;
}
var cd = '[data-glide-el="controls[nav]"]', ni = '[data-glide-el^="controls"]', ud = "".concat(ni, ' [data-glide-dir*="<"]'), dd = "".concat(ni, ' [data-glide-dir*=">"]');
function fd(e, t, n) {
  var r = new dn(), a = $o ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(cd), this._c = t.Html.root.querySelectorAll(ni), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(ud),
        next: t.Html.root.querySelectorAll(dd)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var g = 0; g < this._n.length; g++)
        this.addClass(this._n[g].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var g = 0; g < this._n.length; g++)
        this.removeClass(this._n[g].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(g) {
      var f = e.settings, h = g[e.index];
      h && (h.classList.add(f.classes.nav.active), Qa(h).forEach(function(b) {
        b.classList.remove(f.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(g) {
      var f = g[e.index];
      f == null || f.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var g = s._arrowControls.next, f = s._arrowControls.previous;
        this.resetArrowState(g, f), e.index === 0 && this.disableArrow(f), e.index === t.Run.length && this.disableArrow(g);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var g = e.settings, f = arguments.length, h = new Array(f), b = 0; b < f; b++)
        h[b] = arguments[b];
      h.forEach(function(x) {
        Fo(x).forEach(function(C) {
          C.classList.remove(g.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var g = e.settings, f = arguments.length, h = new Array(f), b = 0; b < f; b++)
        h[b] = arguments[b];
      h.forEach(function(x) {
        Fo(x).forEach(function(C) {
          C.classList.add(g.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var g = 0; g < this._c.length; g++)
        this.bind(this._c[g].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var g = 0; g < this._c.length; g++)
        this.unbind(this._c[g].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(g) {
      for (var f = 0; f < g.length; f++)
        r.on("click", g[f], this.click), r.on("touchstart", g[f], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(g) {
      for (var f = 0; f < g.length; f++)
        r.off(["click", "touchstart"], g[f]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(g) {
      !$o && g.type === "touchstart" && g.preventDefault();
      var f = g.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(f));
    }
  };
  return Le(s, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return s._c;
    }
  }), n.on(["mount.after", "move.after"], function() {
    s.setActive();
  }), n.on(["mount.after", "run"], function() {
    s.setArrowState();
  }), n.on("destroy", function() {
    s.removeBindings(), s.removeActive(), r.destroy();
  }), s;
}
function pd(e, t, n) {
  var r = new dn(), a = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function() {
      e.settings.keyboard && this.bind();
    },
    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function() {
      r.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(d) {
      var g = e.settings.perSwipe, f = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(d.code) && t.Run.make(t.Direction.resolve("".concat(g).concat(f[d.code])));
    }
  };
  return n.on(["destroy", "update"], function() {
    a.unbind();
  }), n.on("update", function() {
    a.mount();
  }), n.on("destroy", function() {
    r.destroy();
  }), a;
}
function hd(e, t, n) {
  var r = new dn(), a = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function() {
      this.enable(), this.start(), e.settings.hoverpause && this.bind();
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
      this._e && (this.enable(), e.settings.autoplay && Ja(this._i) && (this._i = setInterval(function() {
        d.stop(), t.Run.make(">"), d.start(), n.emit("autoplay");
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
      r.on("mouseover", t.Html.root, function() {
        d._e && d.stop();
      }), r.on("mouseout", t.Html.root, function() {
        d._e && d.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      r.off(["mouseover", "mouseout"], t.Html.root);
    }
  };
  return Le(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var d = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return Je(d || e.settings.autoplay);
    }
  }), n.on(["destroy", "update"], function() {
    a.unbind();
  }), n.on(["run.before", "swipe.start", "update"], function() {
    a.stop();
  }), n.on(["pause", "destroy"], function() {
    a.disable(), a.stop();
  }), n.on(["run.after", "swipe.end"], function() {
    a.start();
  }), n.on(["play"], function() {
    a.enable(), a.start();
  }), n.on("update", function() {
    a.mount();
  }), n.on("destroy", function() {
    r.destroy();
  }), a;
}
function ua(e) {
  return Mn(e) ? Mu(e) : (Zt("Breakpoints option must be an object"), {});
}
function md(e, t, n) {
  var r = new dn(), a = e.settings, s = ua(a.breakpoints), d = Object.assign({}, a), g = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(h) {
      if (typeof window.matchMedia < "u") {
        for (var b in h)
          if (h.hasOwnProperty(b) && window.matchMedia("(max-width: ".concat(b, "px)")).matches)
            return h[b];
      }
      return d;
    }
  };
  return Object.assign(a, g.match(s)), r.on("resize", window, Xr(function() {
    e.settings = Do(a, g.match(s));
  }, e.settings.throttle)), n.on("update", function() {
    s = ua(s), d = Object.assign({}, a);
  }), n.on("destroy", function() {
    r.off("resize", window);
  }), g;
}
var gd = {
  // Required
  Html: Hu,
  Translate: od,
  Transition: id,
  Direction: Zu,
  Peek: Vu,
  Sizes: Uu,
  Gaps: Bu,
  Move: Wu,
  Clones: Yu,
  Resize: Gu,
  Build: qu,
  Run: $u,
  // Optional
  Swipe: ad,
  Images: sd,
  Anchors: ld,
  Controls: fd,
  Keyboard: pd,
  Autoplay: hd,
  Breakpoints: md
}, vd = /* @__PURE__ */ function(e) {
  Cu(n, e);
  var t = Nu(n);
  function n() {
    return Yr(this, n), t.apply(this, arguments);
  }
  return Gr(n, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Ar(Ln(n.prototype), "mount", this).call(this, Object.assign({}, gd, a));
    }
  }]), n;
}(Fu);
function yd(e) {
  let t, n, r;
  switch (e) {
    case 3:
      t = 1, n = 2, r = 3;
      break;
    case 2:
      t = 1, n = 2, r = 2;
      break;
    case 1:
    default:
      t = 1, n = 1, r = 1;
  }
  return {
    perViewSm: t,
    perViewMd: n,
    perViewLg: r
  };
}
function wd(e = 1, t, n = !0, r) {
  const { perViewSm: a, perViewMd: s, perViewLg: d } = yd(e), g = n ? 24 : 0, f = n ? { before: 48, after: 48 } : 0, h = n ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: g,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: r ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: d,
    // Can be overwritten at breakpoints
    peek: h,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: f
      },
      768: {
        // BS4 md
        perView: s,
        peek: f
      },
      992: {
        // BS4 lg
        perView: d,
        peek: f
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: f
      },
      1400: {
        perView: d,
        peek: h
      },
      1920: {
        perView: d,
        peek: h
      }
    }
  };
}
function bd(e, t, n) {
  const r = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(r || a)) return;
  const g = ["slider-start", "slider-mid", "slider-end"], f = "glide__arrow--disabled";
  s == null || s.classList.remove(...g), d == null || d.classList.remove(...g), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), r.classList.add(f), a.classList.remove(f)) : t >= n - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), r.classList.remove(f), a.classList.add(f)) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), r.classList.remove(f), a.classList.remove(f));
}
function xd(e, t, n) {
  const r = e.querySelectorAll(".glide__slide"), a = t, s = Math.min(
    r.length - 1,
    t + n - 1
  );
  r.forEach((d, g) => {
    g < a || g > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function Sd({
  instanceName: e,
  perView: t,
  buttonCount: n,
  isFullWidth: r = !1,
  onItemClick: a,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const g = wd(t, r, s, d), f = new vd(`#${e}`, g);
  let h = document.querySelector(`#${e}`);
  return h.addEventListener("keyup", (b) => {
    const x = b;
    x.keyCode === 39 ? f.go(">") : x.keyCode === 37 ? f.go("<") : x.keyCode === 13 && f.go(document.activeElement.dataset.glideDir);
  }), f.on("build.before", () => {
    h = document.querySelector(`#${e}`), h && h.classList.add("slider-start");
  }), f.on("move", () => {
    if (h = document.querySelector(`#${e}`), !h) return;
    const b = f.index;
    xd(h, b, t);
    const x = h.querySelector(".navigation-slider"), C = h.querySelector(".image-navigator-images");
    if (x && C) {
      const L = x.querySelectorAll(
        ".bullet-image-container"
      ), A = x.clientWidth, O = 82, P = L[b], M = C.getBoundingClientRect().x, B = x.getBoundingClientRect().x - M, W = P.getBoundingClientRect().x - M, U = P.getBoundingClientRect().x + P.getBoundingClientRect().width - M;
      if (b === 0 || W <= 0 + O)
        x.style.left = `${B - W + O}px`;
      else if (U >= A - O) {
        const I = U - A;
        x.style.left = `${B - I - O}px`;
      }
    }
    bd(h, b, n), h.setAttribute("data-current-index", b), a && a(b);
  }), f.mount(), f;
}
function kd(e, t) {
  let n;
  const r = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return n = e, r >= 992 && (t >= 2 && (n = e - 1), t >= 3 && (n = e - 2)), n;
}
const er = ({
  perView: e = 1,
  width: t,
  maxWidth: n,
  carouselItems: r,
  cssClass: a = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: g,
  isFullWidth: f,
  removeSideBackground: h = !1,
  hasNavButtons: b = !0,
  hasPositionIndicators: x = !0,
  imageAutoSize: C = !0,
  onItemClick: L = () => null,
  hasPeek: A = !0,
  isDraggable: O = !0,
  hasShadow: P = !0
}) => {
  const M = `glide-${Math.ceil(Math.random() * 1e4)}`, B = kd(r.length, e);
  return ot(() => {
    Sd({
      instanceName: M,
      perView: e,
      buttonCount: B,
      isFullWidth: f,
      onItemClick: L,
      hasPeek: A,
      isDraggable: O
    });
  }, [
    M,
    e,
    B,
    f,
    L,
    A,
    O
  ]), /* @__PURE__ */ p.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": g,
      className: `glide ${a}`,
      id: M,
      style: { width: t, maxWidth: n },
      "data-remove-side-background": h,
      "data-image-auto-size": C,
      "data-has-shadow": P,
      children: [
        /* @__PURE__ */ p.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ p.jsx(Za, { carouselItems: r }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ p.jsx(s, { instanceName: M })
        ) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          x && /* @__PURE__ */ p.jsx(Ga, { buttonCount: B }),
          b && /* @__PURE__ */ p.jsx(Ka, {})
        ] })
      ]
    }
  );
};
er.propTypes = {
  perView: l.number,
  width: l.string,
  maxWidth: l.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object).isRequired,
  cssClass: l.string,
  CustomNavComponent: l.func,
  role: l.string,
  ariaLabelledBy: l.string,
  onItemClick: l.func,
  isFullWidth: l.bool,
  removeSideBackground: l.bool,
  hasNavButtons: l.bool,
  hasPositionIndicators: l.bool,
  imageAutoSize: l.bool,
  hasPeek: l.bool,
  isDraggable: l.bool,
  hasShadow: l.bool
};
const Td = ({
  id: e,
  imageSource: t,
  imageAltText: n,
  title: r,
  content: a,
  eventLocation: s,
  eventTime: d,
  buttons: g,
  linkLabel: f,
  linkUrl: h,
  tags: b
}, x, C, L) => {
  var A;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ p.jsx(
      Xt,
      {
        type: x,
        horizontal: C,
        image: t,
        imageAltText: n,
        title: r,
        body: a,
        eventFormat: L,
        eventLocation: s,
        eventTime: d,
        buttons: g,
        linkLabel: f,
        linkUrl: h || ((A = g == null ? void 0 : g[0]) == null ? void 0 : A.href),
        tags: b
      }
    )
  };
}, ts = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: n = "default",
  cardEventFormat: r = "stack",
  cardHorizontal: a = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: g = !0
}) => {
  const f = parseInt(`${e}`, 10), [h, b] = Xe(f), x = 1024, C = 768;
  ot(() => {
    const O = () => {
      const P = window.innerWidth;
      let M;
      switch (f) {
        case 3:
          P > x ? M = 3 : P > C ? M = 2 : M = 1;
          break;
        case 2:
          M = P < C ? 1 : 2;
          break;
        default:
          M = 1;
          break;
      }
      b(M);
    };
    return O(), window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, [f]);
  const L = t.map(
    (O) => Td(O, n, a, r)
  ), A = t.length > h;
  return /* @__PURE__ */ p.jsx(
    er,
    {
      perView: +h,
      maxWidth: d,
      width: s,
      carouselItems: L,
      cssClass: "aligned-carousel",
      imageAutoSize: g,
      removeSideBackground: t.length <= h,
      hasPositionIndicators: A,
      hasNavButtons: A,
      isDraggable: A,
      hasShadow: !0
    }
  );
};
ts.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: Xt.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: Xt.propTypes.tags
    })
  ).isRequired,
  cardType: Xt.propTypes.type,
  cardEventFormat: Xt.propTypes.eventFormat,
  cardHorizontal: Xt.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const _d = ({ id: e, imageSource: t, imageAltText: n, title: r, content: a }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ p.jsx("div", { className: "uds-img", children: /* @__PURE__ */ p.jsxs("figure", { className: "figure uds-figure", children: [
    /* @__PURE__ */ p.jsx(
      "img",
      {
        src: t,
        className: "uds-img figure-img img-fluid",
        alt: n,
        loading: "lazy",
        decoding: "async"
      }
    ),
    (r || a) && /* @__PURE__ */ p.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ p.jsx("div", { className: "uds-caption-text", children: r ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx("h3", { children: r }),
          /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ) })
      }
    )
  ] }) })
}), ns = ({
  perView: e = 0,
  imageItems: t = [],
  width: n = void 0,
  maxWidth: r = void 0,
  imageAutoSize: a = !0
}) => {
  if (!t || t.length === 0)
    return null;
  const s = parseInt(`${e}`, 10), d = t.map(_d) || [], g = t.length > s;
  return /* @__PURE__ */ p.jsx(
    er,
    {
      perView: +s,
      maxWidth: r,
      width: n,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: d,
      imageAutoSize: a,
      removeSideBackground: t.length <= s,
      hasPositionIndicators: g,
      hasNavButtons: g,
      isDraggable: g,
      hasShadow: !0
    }
  );
};
ns.propTypes = {
  perView: l.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: l.arrayOf(l.object).isRequired,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const Ed = (e, t) => {
  if (!e)
    return 0;
  const n = (e.match(/<br/g) || []).length, r = t / 6;
  return (parseInt(`${e.length / r}`, 10) + n) * 20;
}, $r = {
  imageItems: l.arrayOf(
    l.shape({
      id: l.number,
      imageSource: l.string,
      thumbnailSource: l.string,
      imageAltText: l.string,
      content: l.oneOfType([l.string, l.element])
    })
  ),
  hasContent: l.bool
}, Cd = ({ id: e, imageSource: t, imageAltText: n }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ p.jsx("div", { className: "uds-img", children: /* @__PURE__ */ p.jsx(
    "img",
    {
      src: t,
      className: "uds-img figure-img img-fluid",
      alt: n,
      loading: "lazy",
      decoding: "async"
    }
  ) })
}), rs = ({ instanceName: e, imageItems: t, hasContent: n }) => {
  if (!t || t.length === 0)
    return null;
  const r = "data-current-index", [a, s] = Xe(t[0].title), [d, g] = Xe(t[0].content), f = (b) => {
    const x = t[b];
    s(x.title), g(x.content);
  };
  ot(() => {
    const b = document.querySelector(
      ".image-gallery figcaption .uds-caption-text div"
    );
    if (b) {
      const A = parseInt(
        window.getComputedStyle(b, null).getPropertyValue("width").split("px")[0],
        10
      ), O = t.reduce((P, M) => {
        const B = Ed(M.content, A);
        return B > P ? B : P;
      }, 0);
      b.style.height = `${O}px`;
    }
    const x = document.querySelector(`#${e}`);
    function C(A) {
      for (const O of A)
        if (O && O.attributeName === r)
          return f(+x.getAttribute(r));
      return null;
    }
    new MutationObserver(C).observe(x, {
      attributes: !0
    });
  }, [e]);
  const h = t.map((b) => b.imageSource);
  return /* @__PURE__ */ p.jsxs("div", { className: "image-gallery-action-area", "data-has-content": n, children: [
    /* @__PURE__ */ p.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ p.jsxs(ti, { children: [
      /* @__PURE__ */ p.jsx(ei, {}),
      /* @__PURE__ */ p.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ p.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ p.jsx(
        Xa,
        {
          imageItems: h,
          onItemClick: (b) => f(b)
        }
      ) }) }),
      /* @__PURE__ */ p.jsx(Qo, {})
    ] }) }),
    n && (a || d) ? /* @__PURE__ */ p.jsx(
      "figcaption",
      {
        id: "caption",
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-gallery-content-container",
        children: /* @__PURE__ */ p.jsxs("div", { className: "uds-caption-text", children: [
          a ? /* @__PURE__ */ p.jsx("h3", { children: a }) : null,
          /* @__PURE__ */ p.jsx("div", { dangerouslySetInnerHTML: { __html: d } })
        ] })
      }
    ) : null
  ] });
};
rs.propTypes = {
  instanceName: l.string,
  imageItems: $r.imageItems,
  hasContent: $r.hasContent
};
const os = ({
  width: e,
  maxWidth: t,
  imageItems: n = [],
  hasContent: r = !1,
  imageAutoSize: a = !0
}) => {
  const s = n.map(Cd), d = n.length > 1;
  return /* @__PURE__ */ p.jsx(
    er,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: s,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: r ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: a,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: g }) => /* @__PURE__ */ p.jsx(
        rs,
        {
          instanceName: g,
          hasContent: r,
          imageItems: n
        }
      ),
      removeSideBackground: n.length <= 1,
      hasPositionIndicators: d,
      hasNavButtons: d,
      isDraggable: d,
      hasShadow: !0
    }
  );
};
os.propTypes = {
  imageItems: $r.imageItems.isRequired,
  hasContent: $r.hasContent,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const Od = ({ id: e, imageSource: t, imageAltText: n, quote: r }, a = {}) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ p.jsx(
    Zo,
    {
      imageSource: t,
      imageAltText: n,
      quote: r,
      itemStyle: a
    }
  )
}), is = ({
  width: e,
  maxWidth: t,
  testimonialItems: n = [],
  itemStyle: r = {},
  hasNavButtons: a = !1,
  hasPositionIndicators: s = !1,
  imageAutoSize: d = !0
}) => {
  const g = n.map(
    (f) => Od(f, r)
  );
  return /* @__PURE__ */ p.jsx(
    er,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: g,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: a,
      hasPositionIndicators: s,
      imageAutoSize: d,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
is.propTypes = {
  testimonialItems: l.arrayOf(
    l.shape({
      title: l.string,
      content: l.string,
      cite: l.shape({
        name: l.string,
        description: l.string
      })
    })
  ).isRequired,
  itemStyle: l.shape({
    containerCssClass: l.arrayOf(l.string),
    titleCssClass: l.arrayOf(l.string),
    contentCssClass: l.arrayOf(l.string)
  }),
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool,
  hasNavButtons: l.bool,
  hasPositionIndicators: l.bool
};
var Lt = /* @__PURE__ */ ((e) => (e.UNORDERED = "unordered", e.ORDERED = "ordered", e.ICON = "icon", e.STEP = "step", e.DISPLAY = "display", e))(Lt || {}), Nr = /* @__PURE__ */ ((e) => (e.UL = "ul", e.OL = "ol", e))(Nr || {}), En = /* @__PURE__ */ ((e) => (e.NONE = "none", e.LIGHT = "light", e.MEDIUM = "medium", e.DARK = "dark", e))(En || {}), jr = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.PRIMARY = "primary", e.SECONDARY = "secondary", e))(jr || {});
const as = (e) => {
  switch (e) {
    case Nr.OL:
    case Lt.ORDERED:
    case Lt.STEP:
      return Nr.OL;
    default:
      return Nr.UL;
  }
}, ss = ({
  listType: e,
  content: t,
  icon: n,
  nestedType: r,
  nestedItems: a
}) => {
  const [s, ...d] = Array.isArray(t) ? t : [t];
  let g = null;
  if (a != null && a.length) {
    const f = r || e, h = as(f);
    g = /* @__PURE__ */ p.jsx(h, { children: a.map((b, x) => /* @__PURE__ */ p.jsx(ss, { listType: f, ...b }, x)) });
  }
  return /* @__PURE__ */ p.jsxs("li", { children: [
    n && /* @__PURE__ */ p.jsx("span", { className: `fa-li ${n == null ? void 0 : n[0]} fa-${n == null ? void 0 : n[1]}` }),
    s,
    " ",
    d.map((f, h) => [/* @__PURE__ */ p.jsx("br", {}, `br-${h}`), /* @__PURE__ */ p.jsx("span", { children: f }, h)]),
    g
  ] });
}, Rd = ({
  listType: e = Lt.UNORDERED,
  backgroundColor: t = En.NONE,
  listItemStyleColor: n = jr.DEFAULT,
  items: r
}) => {
  const a = as(e);
  let s = "maroon", d = "maroon";
  t === En.DARK && (s = "gold", d = "gold"), e === Lt.STEP && (s = "uds-steplist-maroon", d = "uds-steplist-gold", t === En.DARK && (s = "uds-steplist-gold"));
  const g = we({
    "uds-list": e === Lt.UNORDERED || e === Lt.ORDERED,
    "uds-list fa-ul": e === Lt.ICON,
    "uds-list uds-steplist": e === Lt.STEP,
    "uds-list uds-display-list": e === Lt.DISPLAY,
    "light-smokemode": t === En.LIGHT,
    smokemode: t === En.MEDIUM,
    darkmode: t === En.DARK,
    [`${s}`]: n === jr.PRIMARY,
    // Intentional space ` ${secondaryColor}` for when primary and secondary colors are the same
    [` ${d}`]: n === jr.SECONDARY
  });
  return /* @__PURE__ */ p.jsx(a, { className: g || null, children: r.map((f, h) => /* @__PURE__ */ p.jsx(ss, { listType: e, ...f }, h)) });
}, Ad = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, Nd = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, jd = ({
  gridLinkItems: e,
  numColumns: t,
  textColor: n,
  children: r
}) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        t,
        Ad[n]
      ].join(" "),
      children: e && e.map((a) => /* @__PURE__ */ p.jsx(
        Qe,
        {
          gaData: {
            ...Nd,
            text: a.label,
            section: `grid links ${a.label}`
          },
          children: /* @__PURE__ */ p.jsxs("a", { href: a.href, children: [
            /* @__PURE__ */ p.jsx("span", { className: `fa fa-fw ${a.icon}` }),
            a.label
          ] })
        },
        a.label + a.href
      ))
    }
  ),
  /* @__PURE__ */ p.jsx("div", { children: r })
] });
var ri, da = ks;
ri = da.createRoot, da.hydrateRoot;
const Pd = (e, t, n) => {
  ri(n).render($e.createElement(e, t));
}, Kr = ({ typeCarousel: e, targetSelector: t, props: n }) => {
  const a = {
    card: ts,
    testimonial: is,
    image: ns,
    "image-gallery": os
  }[e];
  a && Pd(a, n, document.querySelector(t));
}, Dd = ({ targetSelector: e, props: t }) => Kr({
  typeCarousel: "card",
  targetSelector: e,
  props: t
}), Fd = ({ targetSelector: e, props: t }) => {
  Kr({
    typeCarousel: "testimonial",
    targetSelector: e,
    props: t
  });
}, $d = ({ targetSelector: e, props: t }) => {
  Kr({ typeCarousel: "image", targetSelector: e, props: t });
}, Bd = ({ targetSelector: e, props: t }) => {
  Kr({
    typeCarousel: "image-gallery",
    targetSelector: e,
    props: t
  });
}, Ye = (e, t, n) => {
  ri(n).render($e.createElement(e, t));
}, zd = ({ targetSelector: e, props: t }) => Ye(Ta, t, document.querySelector(e)), Hd = ({ targetSelector: e, props: t }) => Ye(La, t, document.querySelector(e)), Vd = ({ targetSelector: e, props: t }) => Ye(Yo, t, document.querySelector(e)), Wd = ({ targetSelector: e, props: t }) => Ye(ln, t, document.querySelector(e)), Ud = ({ targetSelector: e, props: t }) => Ye(Ur, t, document.querySelector(e)), qd = ({ targetSelector: e, props: t }) => Ye(qr, t, document.querySelector(e)), Yd = ({ targetSelector: e, props: t }) => Ye(Xt, t, document.querySelector(e)), Gd = ({ targetSelector: e, props: t }) => Ye(jd, t, document.querySelector(e)), Xd = ({ targetSelector: e, props: t }) => Ye(Ba, t, document.querySelector(e)), Kd = ({ targetSelector: e, props: t }) => Ye(In, t, document.querySelector(e)), Zd = ({ targetSelector: e, props: t }) => Ye(Ko, t, document.querySelector(e)), Jd = ({ targetSelector: e, props: t }) => Ye(Va, t, document.querySelector(e)), Qd = ({ targetSelector: e, props: t }) => Ye(qa, t, document.querySelector(e)), ef = ({ targetSelector: e, props: t }) => Ye(Zo, t, document.querySelector(e)), tf = ({ targetSelector: e, props: t }) => Ye(Ya, t, document.querySelector(e)), nf = ({ targetSelector: e, props: t }) => Ye(mu, t, document.querySelector(e)), rf = ({ targetSelector: e, props: t }) => Ye(Jc, t, document.querySelector(e)), of = ({ targetSelector: e, props: t }) => Ye(bu, t, document.querySelector(e)), af = ({ targetSelector: e, props: t }) => Ye(Rd, t, document.querySelector(e));
export {
  Ta as Accordion,
  La as AnchorMenu,
  Yo as Article,
  ln as Button,
  Ur as ButtonIconOnly,
  qr as ButtonTag,
  Xt as Card,
  ts as CardCarousel,
  Jc as Divider,
  Zc as DividerType,
  lu as FeedBody,
  ru as FeedContainerProvider,
  nu as FeedContext,
  su as FeedHeader,
  jd as GridLinks,
  Ba as Hero,
  In as Image,
  ns as ImageCarousel,
  os as ImageGalleryCarousel,
  Rd as List,
  Ko as Pagination,
  Va as RankingCard,
  mu as SystemAlert,
  hu as SystemAlertType,
  yu as Tab,
  qa as TabbedPanels,
  Zo as Testimonial,
  is as TestimonialCarousel,
  bu as Tooltip,
  Ya as Video,
  Md as feedCardButtonShape,
  iu as feedComponentShape,
  $a as feedCtaButtonShape,
  ou as feedDataSourceShape,
  Fa as feedHeaderShape,
  zd as initAccordion,
  Hd as initAnchorMenu,
  Vd as initArticle,
  Wd as initButton,
  Ud as initButtonIconOnly,
  qd as initButtonTag,
  Yd as initCard,
  Dd as initCardCarousel,
  rf as initDivider,
  Gd as initGridLinks,
  Xd as initHero,
  Kd as initImage,
  $d as initImageCarousel,
  Bd as initImageGalleryCarousel,
  af as initList,
  Zd as initPagination,
  Jd as initRankingCard,
  nf as initSystemAlert,
  Qd as initTabbedPanels,
  ef as initTestimonial,
  Fd as initTestimonialCarousel,
  of as initTooltip,
  tf as initVideo
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