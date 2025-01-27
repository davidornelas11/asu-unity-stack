import ne, { useState as de, useEffect as we, useId as ga, useRef as Qe, useContext as Vr, createElement as yi, Component as bi, forwardRef as va, createContext as wi, useImperativeHandle as xi, useCallback as Si } from "react";
import _i from "react-dom";
function Ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ya = { exports: {} }, gt = {};
var On;
function Ti() {
  if (On) return gt;
  On = 1;
  var e = ne, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, d) {
    var f, p = {}, m = null, w = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (f in u) n.call(u, f) && !i.hasOwnProperty(f) && (p[f] = u[f]);
    if (c && c.defaultProps) for (f in u = c.defaultProps, u) p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: t, type: c, key: m, ref: w, props: p, _owner: a.current };
  }
  return gt.Fragment = r, gt.jsx = s, gt.jsxs = s, gt;
}
ya.exports = Ti();
var l = ya.exports, ba = { exports: {} }, dr = { exports: {} }, U = {};
var An;
function ki() {
  if (An) return U;
  An = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function j(b) {
    if (typeof b == "object" && b !== null) {
      var H = b.$$typeof;
      switch (H) {
        case t:
          switch (b = b.type, b) {
            case u:
            case d:
            case n:
            case i:
            case a:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case f:
                case y:
                case w:
                case s:
                  return b;
                default:
                  return H;
              }
          }
        case r:
          return H;
      }
    }
  }
  function N(b) {
    return j(b) === d;
  }
  return U.AsyncMode = u, U.ConcurrentMode = d, U.ContextConsumer = c, U.ContextProvider = s, U.Element = t, U.ForwardRef = f, U.Fragment = n, U.Lazy = y, U.Memo = w, U.Portal = r, U.Profiler = i, U.StrictMode = a, U.Suspense = p, U.isAsyncMode = function(b) {
    return N(b) || j(b) === u;
  }, U.isConcurrentMode = N, U.isContextConsumer = function(b) {
    return j(b) === c;
  }, U.isContextProvider = function(b) {
    return j(b) === s;
  }, U.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, U.isForwardRef = function(b) {
    return j(b) === f;
  }, U.isFragment = function(b) {
    return j(b) === n;
  }, U.isLazy = function(b) {
    return j(b) === y;
  }, U.isMemo = function(b) {
    return j(b) === w;
  }, U.isPortal = function(b) {
    return j(b) === r;
  }, U.isProfiler = function(b) {
    return j(b) === i;
  }, U.isStrictMode = function(b) {
    return j(b) === a;
  }, U.isSuspense = function(b) {
    return j(b) === p;
  }, U.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === a || b === p || b === m || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === w || b.$$typeof === s || b.$$typeof === c || b.$$typeof === f || b.$$typeof === x || b.$$typeof === T || b.$$typeof === O || b.$$typeof === g);
  }, U.typeOf = j, U;
}
var jn;
function wa() {
  return jn || (jn = 1, dr.exports = ki()), dr.exports;
}
var fr, Nn;
function Oi() {
  if (Nn) return fr;
  Nn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fr = e, fr;
}
var hr, En;
function Ai() {
  if (En) return hr;
  En = 1;
  var e = Oi();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, hr = function() {
    function n(s, c, u, d, f, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, hr;
}
ba.exports = Ai()();
var ji = ba.exports;
const o = /* @__PURE__ */ Ur(ji), Ni = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), pr = o.shape({
  text: o.string,
  maxWidth: o.string,
  cssClass: o.arrayOf(o.string),
  highlightColor: o.oneOf(["gold", "black"])
}), xa = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  content: o.shape({
    icon: o.string,
    header: o.string,
    body: o.string
  })
}), Yr = o.shape({
  text: o.string,
  name: o.string,
  event: o.string,
  action: o.string,
  type: o.string,
  region: o.string,
  section: o.string,
  component: o.string
});
var Sa = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var c = arguments[s];
        c && (i = a(i, n(c)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var c in i)
        t.call(i, c) && i[c] && (s = a(s, c));
      return s;
    }
    function a(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Sa);
var Ei = Sa.exports;
const q = /* @__PURE__ */ Ur(Ei), Ci = () => {
  const [e, t] = de(), [r, n] = de(!1), [a, i] = de(!1), [s, c] = de("");
  return we(() => {
    if (!s) return;
    (() => {
      i(null), n(!0);
      try {
        fetch(s).then((d) => d.json()).then((d) => {
          t(d), n(!1);
        }).catch((d) => {
          i(d), n(!1);
        });
      } catch (d) {
        i(d);
      }
    })();
  }, [s]), [{ data: e, loading: r, error: a }, c];
};
function Ri(e) {
  const [t, r] = de(!1);
  return we(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const a = () => {
      r(n.matches);
    };
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [t, e]), t;
}
const Cn = (e, t, r) => e ? t : r, Lt = (e) => (e || []).join(" ");
function Ke(e) {
  "@babel/helpers - typeof";
  return Ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ke(e);
}
function Tr(e, t) {
  return Tr = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Tr(e, t);
}
function Li() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function It(e, t, r) {
  return Li() ? It = Reflect.construct : It = function(a, i, s) {
    var c = [null];
    c.push.apply(c, i);
    var u = Function.bind.apply(a, c), d = new u();
    return s && Tr(d, s.prototype), d;
  }, It.apply(null, arguments);
}
function Le(e) {
  return Ii(e) || Pi(e) || Di(e) || Mi();
}
function Ii(e) {
  if (Array.isArray(e)) return kr(e);
}
function Pi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Di(e, t) {
  if (e) {
    if (typeof e == "string") return kr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kr(e, t);
  }
}
function kr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Mi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var $i = Object.hasOwnProperty, Rn = Object.setPrototypeOf, Hi = Object.isFrozen, Bi = Object.getPrototypeOf, zi = Object.getOwnPropertyDescriptor, xe = Object.freeze, Ee = Object.seal, Fi = Object.create, _a = typeof Reflect < "u" && Reflect, Ft = _a.apply, Or = _a.construct;
Ft || (Ft = function(t, r, n) {
  return t.apply(r, n);
});
xe || (xe = function(t) {
  return t;
});
Ee || (Ee = function(t) {
  return t;
});
Or || (Or = function(t, r) {
  return It(t, Le(r));
});
var Wi = Ce(Array.prototype.forEach), Ln = Ce(Array.prototype.pop), vt = Ce(Array.prototype.push), Pt = Ce(String.prototype.toLowerCase), mr = Ce(String.prototype.toString), In = Ce(String.prototype.match), Re = Ce(String.prototype.replace), qi = Ce(String.prototype.indexOf), Vi = Ce(String.prototype.trim), pe = Ce(RegExp.prototype.test), gr = Ui(TypeError);
function Ce(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ft(e, t, n);
  };
}
function Ui(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Or(e, r);
  };
}
function $(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : Pt, Rn && Rn(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var s = r(i);
      s !== i && (Hi(t) || (t[a] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function at(e) {
  var t = Fi(null), r;
  for (r in e)
    Ft($i, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function Ot(e, t) {
  for (; e !== null; ) {
    var r = zi(e, t);
    if (r) {
      if (r.get)
        return Ce(r.get);
      if (typeof r.value == "function")
        return Ce(r.value);
    }
    e = Bi(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Pn = xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vr = xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), yr = xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Yi = xe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), br = xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Gi = xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Dn = xe(["#text"]), Mn = xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), wr = xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), $n = xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), At = xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ki = Ee(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Xi = Ee(/<%[\w\W]*|[\w\W]*%>/gm), Zi = Ee(/\${[\w\W]*}/gm), Qi = Ee(/^data-[\-\w.\u00B7-\uFFFF]/), Ji = Ee(/^aria-[\-\w]+$/), eo = Ee(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), to = Ee(/^(?:\w+script|data):/i), ro = Ee(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), no = Ee(/^html$/i), ao = Ee(/^[a-z][.\w]*(-[.\w]+)+$/i), io = function() {
  return typeof window > "u" ? null : window;
}, oo = function(t, r) {
  if (Ke(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML: function(c) {
        return c;
      },
      createScriptURL: function(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Ta() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : io(), t = function(h) {
    return Ta(h);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, s = e.Node, c = e.Element, u = e.NodeFilter, d = e.NamedNodeMap, f = d === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : d, p = e.HTMLFormElement, m = e.DOMParser, w = e.trustedTypes, y = c.prototype, g = Ot(y, "cloneNode"), x = Ot(y, "nextSibling"), T = Ot(y, "childNodes"), O = Ot(y, "parentNode");
  if (typeof i == "function") {
    var j = n.createElement("template");
    j.content && j.content.ownerDocument && (n = j.content.ownerDocument);
  }
  var N = oo(w, r), b = N ? N.createHTML("") : "", H = n, fe = H.implementation, ie = H.createNodeIterator, M = H.createDocumentFragment, X = H.getElementsByTagName, ke = r.importNode, oe = {};
  try {
    oe = at(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var G = {};
  t.isSupported = typeof O == "function" && fe && fe.createHTMLDocument !== void 0 && oe !== 9;
  var ve = Ki, ce = Xi, Me = Zi, Oe = Qi, Se = Ji, et = to, $e = ro, tt = ao, C = eo, k = null, E = $({}, [].concat(Le(Pn), Le(vr), Le(yr), Le(br), Le(Dn))), R = null, v = $({}, [].concat(Le(Mn), Le(wr), Le($n), Le(At))), I = Object.seal(Object.create(null, {
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
  })), _ = null, K = null, W = !0, z = !0, D = !1, ae = !0, te = !1, B = !0, Q = !1, F = !1, re = !1, Ae = !1, ee = !1, He = !1, Ge = !0, _e = !1, P = "user-content-", Z = !0, Be = !1, Pe = {}, be = null, dn = $({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), fn = null, hn = $({}, ["audio", "video", "img", "source", "image", "track"]), ir = null, pn = $({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), St = "http://www.w3.org/1998/Math/MathML", _t = "http://www.w3.org/2000/svg", ze = "http://www.w3.org/1999/xhtml", st = ze, or = !1, sr = null, di = $({}, [St, _t, ze], mr), rt, fi = ["application/xhtml+xml", "text/html"], hi = "text/html", ue, lt = null, pi = n.createElement("form"), mn = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, lr = function(h) {
    lt && lt === h || ((!h || Ke(h) !== "object") && (h = {}), h = at(h), rt = // eslint-disable-next-line unicorn/prefer-includes
    fi.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? rt = hi : rt = h.PARSER_MEDIA_TYPE, ue = rt === "application/xhtml+xml" ? mr : Pt, k = "ALLOWED_TAGS" in h ? $({}, h.ALLOWED_TAGS, ue) : E, R = "ALLOWED_ATTR" in h ? $({}, h.ALLOWED_ATTR, ue) : v, sr = "ALLOWED_NAMESPACES" in h ? $({}, h.ALLOWED_NAMESPACES, mr) : di, ir = "ADD_URI_SAFE_ATTR" in h ? $(
      at(pn),
      // eslint-disable-line indent
      h.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      ue
      // eslint-disable-line indent
    ) : pn, fn = "ADD_DATA_URI_TAGS" in h ? $(
      at(hn),
      // eslint-disable-line indent
      h.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      ue
      // eslint-disable-line indent
    ) : hn, be = "FORBID_CONTENTS" in h ? $({}, h.FORBID_CONTENTS, ue) : dn, _ = "FORBID_TAGS" in h ? $({}, h.FORBID_TAGS, ue) : {}, K = "FORBID_ATTR" in h ? $({}, h.FORBID_ATTR, ue) : {}, Pe = "USE_PROFILES" in h ? h.USE_PROFILES : !1, W = h.ALLOW_ARIA_ATTR !== !1, z = h.ALLOW_DATA_ATTR !== !1, D = h.ALLOW_UNKNOWN_PROTOCOLS || !1, ae = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = h.SAFE_FOR_TEMPLATES || !1, B = h.SAFE_FOR_XML !== !1, Q = h.WHOLE_DOCUMENT || !1, Ae = h.RETURN_DOM || !1, ee = h.RETURN_DOM_FRAGMENT || !1, He = h.RETURN_TRUSTED_TYPE || !1, re = h.FORCE_BODY || !1, Ge = h.SANITIZE_DOM !== !1, _e = h.SANITIZE_NAMED_PROPS || !1, Z = h.KEEP_CONTENT !== !1, Be = h.IN_PLACE || !1, C = h.ALLOWED_URI_REGEXP || C, st = h.NAMESPACE || ze, I = h.CUSTOM_ELEMENT_HANDLING || {}, h.CUSTOM_ELEMENT_HANDLING && mn(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (I.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && mn(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (I.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (z = !1), ee && (Ae = !0), Pe && (k = $({}, Le(Dn)), R = [], Pe.html === !0 && ($(k, Pn), $(R, Mn)), Pe.svg === !0 && ($(k, vr), $(R, wr), $(R, At)), Pe.svgFilters === !0 && ($(k, yr), $(R, wr), $(R, At)), Pe.mathMl === !0 && ($(k, br), $(R, $n), $(R, At))), h.ADD_TAGS && (k === E && (k = at(k)), $(k, h.ADD_TAGS, ue)), h.ADD_ATTR && (R === v && (R = at(R)), $(R, h.ADD_ATTR, ue)), h.ADD_URI_SAFE_ATTR && $(ir, h.ADD_URI_SAFE_ATTR, ue), h.FORBID_CONTENTS && (be === dn && (be = at(be)), $(be, h.FORBID_CONTENTS, ue)), Z && (k["#text"] = !0), Q && $(k, ["html", "head", "body"]), k.table && ($(k, ["tbody"]), delete _.tbody), xe && xe(h), lt = h);
  }, gn = $({}, ["mi", "mo", "mn", "ms", "mtext"]), vn = $({}, ["annotation-xml"]), mi = $({}, ["title", "style", "font", "a", "script"]), Tt = $({}, vr);
  $(Tt, yr), $(Tt, Yi);
  var cr = $({}, br);
  $(cr, Gi);
  var gi = function(h) {
    var S = O(h);
    (!S || !S.tagName) && (S = {
      namespaceURI: st,
      tagName: "template"
    });
    var A = Pt(h.tagName), V = Pt(S.tagName);
    return sr[h.namespaceURI] ? h.namespaceURI === _t ? S.namespaceURI === ze ? A === "svg" : S.namespaceURI === St ? A === "svg" && (V === "annotation-xml" || gn[V]) : !!Tt[A] : h.namespaceURI === St ? S.namespaceURI === ze ? A === "math" : S.namespaceURI === _t ? A === "math" && vn[V] : !!cr[A] : h.namespaceURI === ze ? S.namespaceURI === _t && !vn[V] || S.namespaceURI === St && !gn[V] ? !1 : !cr[A] && (mi[A] || !Tt[A]) : !!(rt === "application/xhtml+xml" && sr[h.namespaceURI]) : !1;
  }, je = function(h) {
    vt(t.removed, {
      element: h
    });
    try {
      h.parentNode.removeChild(h);
    } catch {
      try {
        h.outerHTML = b;
      } catch {
        h.remove();
      }
    }
  }, kt = function(h, S) {
    try {
      vt(t.removed, {
        attribute: S.getAttributeNode(h),
        from: S
      });
    } catch {
      vt(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(h), h === "is" && !R[h])
      if (Ae || ee)
        try {
          je(S);
        } catch {
        }
      else
        try {
          S.setAttribute(h, "");
        } catch {
        }
  }, yn = function(h) {
    var S, A;
    if (re)
      h = "<remove></remove>" + h;
    else {
      var V = In(h, /^[\r\n\t ]+/);
      A = V && V[0];
    }
    rt === "application/xhtml+xml" && st === ze && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    var Te = N ? N.createHTML(h) : h;
    if (st === ze)
      try {
        S = new m().parseFromString(Te, rt);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = fe.createDocument(st, "template", null);
      try {
        S.documentElement.innerHTML = or ? b : Te;
      } catch {
      }
    }
    var ye = S.body || S.documentElement;
    return h && A && ye.insertBefore(n.createTextNode(A), ye.childNodes[0] || null), st === ze ? X.call(S, Q ? "html" : "body")[0] : Q ? S.documentElement : ye;
  }, bn = function(h) {
    return ie.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, wn = function(h) {
    return h instanceof p && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof f) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, mt = function(h) {
    return Ke(s) === "object" ? h instanceof s : h && Ke(h) === "object" && typeof h.nodeType == "number" && typeof h.nodeName == "string";
  }, Fe = function(h, S, A) {
    G[h] && Wi(G[h], function(V) {
      V.call(t, S, A, lt);
    });
  }, xn = function(h) {
    var S;
    if (Fe("beforeSanitizeElements", h, null), wn(h) || pe(/[\u0080-\uFFFF]/, h.nodeName))
      return je(h), !0;
    var A = ue(h.nodeName);
    if (Fe("uponSanitizeElement", h, {
      tagName: A,
      allowedTags: k
    }), h.hasChildNodes() && !mt(h.firstElementChild) && (!mt(h.content) || !mt(h.content.firstElementChild)) && pe(/<[/\w]/g, h.innerHTML) && pe(/<[/\w]/g, h.textContent) || A === "select" && pe(/<template/i, h.innerHTML) || h.nodeType === 7 || B && h.nodeType === 8 && pe(/<[/\w]/g, h.data))
      return je(h), !0;
    if (!k[A] || _[A]) {
      if (!_[A] && _n(A) && (I.tagNameCheck instanceof RegExp && pe(I.tagNameCheck, A) || I.tagNameCheck instanceof Function && I.tagNameCheck(A)))
        return !1;
      if (Z && !be[A]) {
        var V = O(h) || h.parentNode, Te = T(h) || h.childNodes;
        if (Te && V)
          for (var ye = Te.length, he = ye - 1; he >= 0; --he) {
            var nt = g(Te[he], !0);
            nt.__removalCount = (h.__removalCount || 0) + 1, V.insertBefore(nt, x(h));
          }
      }
      return je(h), !0;
    }
    return h instanceof c && !gi(h) || (A === "noscript" || A === "noembed" || A === "noframes") && pe(/<\/no(script|embed|frames)/i, h.innerHTML) ? (je(h), !0) : (te && h.nodeType === 3 && (S = h.textContent, S = Re(S, ve, " "), S = Re(S, ce, " "), S = Re(S, Me, " "), h.textContent !== S && (vt(t.removed, {
      element: h.cloneNode()
    }), h.textContent = S)), Fe("afterSanitizeElements", h, null), !1);
  }, Sn = function(h, S, A) {
    if (Ge && (S === "id" || S === "name") && (A in n || A in pi))
      return !1;
    if (!(z && !K[S] && pe(Oe, S))) {
      if (!(W && pe(Se, S))) {
        if (!R[S] || K[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(_n(h) && (I.tagNameCheck instanceof RegExp && pe(I.tagNameCheck, h) || I.tagNameCheck instanceof Function && I.tagNameCheck(h)) && (I.attributeNameCheck instanceof RegExp && pe(I.attributeNameCheck, S) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && pe(I.tagNameCheck, A) || I.tagNameCheck instanceof Function && I.tagNameCheck(A)))
          ) return !1;
        } else if (!ir[S]) {
          if (!pe(C, Re(A, $e, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && h !== "script" && qi(A, "data:") === 0 && fn[h])) {
              if (!(D && !pe(et, Re(A, $e, "")))) {
                if (A)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, _n = function(h) {
    return h !== "annotation-xml" && In(h, tt);
  }, Tn = function(h) {
    var S, A, V, Te;
    Fe("beforeSanitizeAttributes", h, null);
    var ye = h.attributes;
    if (ye) {
      var he = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: R
      };
      for (Te = ye.length; Te--; ) {
        S = ye[Te];
        var nt = S, se = nt.name, ur = nt.namespaceURI;
        if (A = se === "value" ? S.value : Vi(S.value), V = ue(se), he.attrName = V, he.attrValue = A, he.keepAttr = !0, he.forceKeepAttr = void 0, Fe("uponSanitizeAttribute", h, he), A = he.attrValue, !he.forceKeepAttr && (kt(se, h), !!he.keepAttr)) {
          if (!ae && pe(/\/>/i, A)) {
            kt(se, h);
            continue;
          }
          te && (A = Re(A, ve, " "), A = Re(A, ce, " "), A = Re(A, Me, " "));
          var kn = ue(h.nodeName);
          if (Sn(kn, V, A)) {
            if (_e && (V === "id" || V === "name") && (kt(se, h), A = P + A), B && pe(/((--!?|])>)|<\/(style|title)/i, A)) {
              kt(se, h);
              continue;
            }
            if (N && Ke(w) === "object" && typeof w.getAttributeType == "function" && !ur)
              switch (w.getAttributeType(kn, V)) {
                case "TrustedHTML": {
                  A = N.createHTML(A);
                  break;
                }
                case "TrustedScriptURL": {
                  A = N.createScriptURL(A);
                  break;
                }
              }
            try {
              ur ? h.setAttributeNS(ur, se, A) : h.setAttribute(se, A), wn(h) ? je(h) : Ln(t.removed);
            } catch {
            }
          }
        }
      }
      Fe("afterSanitizeAttributes", h, null);
    }
  }, vi = function L(h) {
    var S, A = bn(h);
    for (Fe("beforeSanitizeShadowDOM", h, null); S = A.nextNode(); )
      Fe("uponSanitizeShadowNode", S, null), !xn(S) && (S.content instanceof a && L(S.content), Tn(S));
    Fe("afterSanitizeShadowDOM", h, null);
  };
  return t.sanitize = function(L) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, A, V, Te, ye;
    if (or = !L, or && (L = "<!-->"), typeof L != "string" && !mt(L))
      if (typeof L.toString == "function") {
        if (L = L.toString(), typeof L != "string")
          throw gr("dirty is not a string, aborting");
      } else
        throw gr("toString is not a function");
    if (!t.isSupported) {
      if (Ke(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof L == "string")
          return e.toStaticHTML(L);
        if (mt(L))
          return e.toStaticHTML(L.outerHTML);
      }
      return L;
    }
    if (F || lr(h), t.removed = [], typeof L == "string" && (Be = !1), Be) {
      if (L.nodeName) {
        var he = ue(L.nodeName);
        if (!k[he] || _[he])
          throw gr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (L instanceof s)
      S = yn("<!---->"), A = S.ownerDocument.importNode(L, !0), A.nodeType === 1 && A.nodeName === "BODY" || A.nodeName === "HTML" ? S = A : S.appendChild(A);
    else {
      if (!Ae && !te && !Q && // eslint-disable-next-line unicorn/prefer-includes
      L.indexOf("<") === -1)
        return N && He ? N.createHTML(L) : L;
      if (S = yn(L), !S)
        return Ae ? null : He ? b : "";
    }
    S && re && je(S.firstChild);
    for (var nt = bn(Be ? L : S); V = nt.nextNode(); )
      V.nodeType === 3 && V === Te || xn(V) || (V.content instanceof a && vi(V.content), Tn(V), Te = V);
    if (Te = null, Be)
      return L;
    if (Ae) {
      if (ee)
        for (ye = M.call(S.ownerDocument); S.firstChild; )
          ye.appendChild(S.firstChild);
      else
        ye = S;
      return (R.shadowroot || R.shadowrootmod) && (ye = ke.call(r, ye, !0)), ye;
    }
    var se = Q ? S.outerHTML : S.innerHTML;
    return Q && k["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && pe(no, S.ownerDocument.doctype.name) && (se = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + se), te && (se = Re(se, ve, " "), se = Re(se, ce, " "), se = Re(se, Me, " ")), N && He ? N.createHTML(se) : se;
  }, t.setConfig = function(L) {
    lr(L), F = !0;
  }, t.clearConfig = function() {
    lt = null, F = !1;
  }, t.isValidAttribute = function(L, h, S) {
    lt || lr({});
    var A = ue(L), V = ue(h);
    return Sn(A, V, S);
  }, t.addHook = function(L, h) {
    typeof h == "function" && (G[L] = G[L] || [], vt(G[L], h));
  }, t.removeHook = function(L) {
    if (G[L])
      return Ln(G[L]);
  }, t.removeHooks = function(L) {
    G[L] && (G[L] = []);
  }, t.removeAllHooks = function() {
    G = {};
  }, t;
}
var so = Ta();
function lo(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const Ne = (e) => ({ __html: so.sanitize(e) }), Hn = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let xr = !1;
const co = (e, t) => {
  xr || (xr = !0, setTimeout(() => {
    e(), xr = !1;
  }, t));
};
let Bn;
const uo = (e, t) => {
  window.clearTimeout(Bn), Bn = window.setTimeout(e, t);
};
o.shape({
  event: o.string,
  action: o.string,
  name: o.string,
  region: o.string,
  section: o.string,
  component: o.string,
  type: o.string,
  text: o.string
});
const ka = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: i = "",
  region: s = "",
  component: c = ""
}) => {
  const { dataLayer: u } = window, d = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: s.toLowerCase(),
    section: a.toLowerCase(),
    text: i.toLowerCase(),
    component: c.toLowerCase()
  };
  u && u.push(d);
}, fo = "staticMarkup";
function Kt() {
  const t = ga().indexOf(fo) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const ge = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Kt(), { onClick: a, ...i } = r.props;
  if (n)
    return ne.cloneElement(r, {
      ...i,
      onClick: (u) => (ka(e), a ? a(u) : !0)
    });
  let s = "";
  ["input", "header", "header-input"].includes(t) && (s = `-${t}`);
  const c = {
    [`data-ga${s}`]: e.text,
    [`data-ga${s}-name`]: e.name,
    [`data-ga${s}-event`]: e.event,
    [`data-ga${s}-action`]: e.action,
    [`data-ga${s}-type`]: e.type,
    [`data-ga${s}-region`]: e.region,
    [`data-ga${s}-section`]: e.section,
    [`data-ga${s}-component`]: e.component
  };
  return ne.cloneElement(r, {
    ...i,
    onClick: a,
    ...c
  });
}, Oa = ({ id: e, item: t, openCard: r, onClick: n, gaData: a }) => {
  var c, u, d, f, p, m;
  const i = e === r, s = i ? "open" : "close";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: q("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (c = t.content) == null ? void 0 : c.icon
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ l.jsx("h4", { children: /* @__PURE__ */ l.jsx(
          ge,
          {
            gaData: { ...a, action: s, text: t.content.header },
            children: /* @__PURE__ */ l.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: q({ collapsed: !i }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${e}`,
                role: "button",
                "aria-expanded": i,
                "aria-controls": `card-body-${e}`,
                onClick: (w) => n(w, e),
                children: [
                  (u = t.content) != null && u.icon ? /* @__PURE__ */ l.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ l.jsx(
                      "i",
                      {
                        className: `${(d = t.content.icon) == null ? void 0 : d[0]} fa-${(f = t.content.icon) == null ? void 0 : f[1]} me-2`
                      }
                    ),
                    t.content.header
                  ] }) : (p = t.content) == null ? void 0 : p.header,
                  /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((m = t.content) == null ? void 0 : m.body) && /* @__PURE__ */ l.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: q("collapse", { show: i }),
            children: /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: Ne(t.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
Oa.propTypes = {
  id: o.number,
  item: xa,
  openCard: o.number,
  onClick: o.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: o.object
};
const ho = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Aa = ({ cards: e, openedCard: t }) => {
  const [r, n] = de(t), a = (i, s) => {
    i.preventDefault(), n(r !== s ? s : null);
  };
  return /* @__PURE__ */ l.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (i, s) => i.content.body && i.content.header && /* @__PURE__ */ l.jsx(
      Oa,
      {
        id: s + 1,
        item: i,
        openCard: r,
        onClick: a,
        gaData: ho
      },
      s + 1
    )
  ) });
};
Aa.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: o.arrayOf(xa).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: o.number
};
const po = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Xe = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: a,
  color: i,
  disabled: s,
  element: c,
  href: u,
  icon: d,
  innerRef: f,
  onClick: p,
  size: m,
  classes: w,
  target: y,
  ...g
}) => {
  const x = q("btn", {
    [`btn-${i}`]: !0,
    "btn-md": m === "small",
    "btn-sm": m === "xsmall",
    "btn-block": a,
    disabled: s
  });
  let T = c;
  return u && c === "button" && (T = "a"), /* @__PURE__ */ l.jsx(
    ge,
    {
      gaData: {
        ...po,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ l.jsxs(
        T,
        {
          type: T === "button" && p ? "button" : void 0,
          ...g,
          className: q(w) || x,
          href: u,
          ref: f,
          onClick: p,
          "aria-label": n,
          target: T === "a" ? y : null,
          children: [
            d && /* @__PURE__ */ l.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Xe.propTypes = {
  /**
   * Button label
   */
  label: o.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: o.string,
  /**
   * Google Analytics event data
   */
  gaData: Yr,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Render button as a block-button?
  */
  block: o.bool,
  /**
    Button background color
  */
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func,
  /**
    Button size
  */
  size: o.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: o.arrayOf(o.string),
  /**
   Link target type
   */
  target: o.oneOf(["_blank", "_self", "_top", "_parent"])
};
Xe.defaultProps = {
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
var Gr = wa();
function mo(e) {
  function t(C, k, E, R, v) {
    for (var I = 0, _ = 0, K = 0, W = 0, z, D, ae = 0, te = 0, B, Q = B = z = 0, F = 0, re = 0, Ae = 0, ee = 0, He = E.length, Ge = He - 1, _e, P = "", Z = "", Be = "", Pe = "", be; F < He; ) {
      if (D = E.charCodeAt(F), F === Ge && _ + W + K + I !== 0 && (_ !== 0 && (D = _ === 47 ? 10 : 47), W = K = I = 0, He++, Ge++), _ + W + K + I === 0) {
        if (F === Ge && (0 < re && (P = P.replace(m, "")), 0 < P.trim().length)) {
          switch (D) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              P += E.charAt(F);
          }
          D = 59;
        }
        switch (D) {
          case 123:
            for (P = P.trim(), z = P.charCodeAt(0), B = 1, ee = ++F; F < He; ) {
              switch (D = E.charCodeAt(F)) {
                case 123:
                  B++;
                  break;
                case 125:
                  B--;
                  break;
                case 47:
                  switch (D = E.charCodeAt(F + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Q = F + 1; Q < Ge; ++Q)
                          switch (E.charCodeAt(Q)) {
                            case 47:
                              if (D === 42 && E.charCodeAt(Q - 1) === 42 && F + 2 !== Q) {
                                F = Q + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (D === 47) {
                                F = Q + 1;
                                break e;
                              }
                          }
                        F = Q;
                      }
                  }
                  break;
                case 91:
                  D++;
                case 40:
                  D++;
                case 34:
                case 39:
                  for (; F++ < Ge && E.charCodeAt(F) !== D; )
                    ;
              }
              if (B === 0) break;
              F++;
            }
            switch (B = E.substring(ee, F), z === 0 && (z = (P = P.replace(p, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < re && (P = P.replace(m, "")), D = P.charCodeAt(1), D) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    re = k;
                    break;
                  default:
                    re = Me;
                }
                if (B = t(k, re, B, D, v + 1), ee = B.length, 0 < Se && (re = r(Me, P, Ae), be = c(3, B, re, k, G, oe, ee, D, v, R), P = re.join(""), be !== void 0 && (ee = (B = be.trim()).length) === 0 && (D = 0, B = "")), 0 < ee) switch (D) {
                  case 115:
                    P = P.replace(H, s);
                  case 100:
                  case 109:
                  case 45:
                    B = P + "{" + B + "}";
                    break;
                  case 107:
                    P = P.replace(O, "$1 $2"), B = P + "{" + B + "}", B = ce === 1 || ce === 2 && i("@" + B, 3) ? "@-webkit-" + B + "@" + B : "@" + B;
                    break;
                  default:
                    B = P + B, R === 112 && (B = (Z += B, ""));
                }
                else B = "";
                break;
              default:
                B = t(k, r(k, P, Ae), B, R, v + 1);
            }
            Be += B, B = Ae = re = Q = z = 0, P = "", D = E.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (P = (0 < re ? P.replace(m, "") : P).trim(), 1 < (ee = P.length)) switch (Q === 0 && (z = P.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (ee = (P = P.replace(" ", ":")).length), 0 < Se && (be = c(1, P, k, C, G, oe, Z.length, R, v, R)) !== void 0 && (ee = (P = be.trim()).length) === 0 && (P = "\0\0"), z = P.charCodeAt(0), D = P.charCodeAt(1), z) {
              case 0:
                break;
              case 64:
                if (D === 105 || D === 99) {
                  Pe += P + E.charAt(F);
                  break;
                }
              default:
                P.charCodeAt(ee - 1) !== 58 && (Z += a(P, z, D, P.charCodeAt(2)));
            }
            Ae = re = Q = z = 0, P = "", D = E.charCodeAt(++F);
        }
      }
      switch (D) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + z === 0 && R !== 107 && 0 < P.length && (re = 1, P += "\0"), 0 < Se * $e && c(0, P, k, C, G, oe, Z.length, R, v, R), oe = 1, G++;
          break;
        case 59:
        case 125:
          if (_ + W + K + I === 0) {
            oe++;
            break;
          }
        default:
          switch (oe++, _e = E.charAt(F), D) {
            case 9:
            case 32:
              if (W + I + _ === 0) switch (ae) {
                case 44:
                case 58:
                case 9:
                case 32:
                  _e = "";
                  break;
                default:
                  D !== 32 && (_e = " ");
              }
              break;
            case 0:
              _e = "\\0";
              break;
            case 12:
              _e = "\\f";
              break;
            case 11:
              _e = "\\v";
              break;
            case 38:
              W + _ + I === 0 && (re = Ae = 1, _e = "\f" + _e);
              break;
            case 108:
              if (W + _ + I + ve === 0 && 0 < Q) switch (F - Q) {
                case 2:
                  ae === 112 && E.charCodeAt(F - 3) === 58 && (ve = ae);
                case 8:
                  te === 111 && (ve = te);
              }
              break;
            case 58:
              W + _ + I === 0 && (Q = F);
              break;
            case 44:
              _ + K + W + I === 0 && (re = 1, _e += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (W = W === D ? 0 : W === 0 ? D : W);
              break;
            case 91:
              W + _ + K === 0 && I++;
              break;
            case 93:
              W + _ + K === 0 && I--;
              break;
            case 41:
              W + _ + I === 0 && K--;
              break;
            case 40:
              if (W + _ + I === 0) {
                if (z === 0) switch (2 * ae + 3 * te) {
                  case 533:
                    break;
                  default:
                    z = 1;
                }
                K++;
              }
              break;
            case 64:
              _ + K + W + I + Q + B === 0 && (B = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + I + K)) switch (_) {
                case 0:
                  switch (2 * D + 3 * E.charCodeAt(F + 1)) {
                    case 235:
                      _ = 47;
                      break;
                    case 220:
                      ee = F, _ = 42;
                  }
                  break;
                case 42:
                  D === 47 && ae === 42 && ee + 2 !== F && (E.charCodeAt(ee + 2) === 33 && (Z += E.substring(ee, F + 1)), _e = "", _ = 0);
              }
          }
          _ === 0 && (P += _e);
      }
      te = ae, ae = D, F++;
    }
    if (ee = Z.length, 0 < ee) {
      if (re = k, 0 < Se && (be = c(2, Z, re, C, G, oe, ee, R, v, R), be !== void 0 && (Z = be).length === 0)) return Pe + Z + Be;
      if (Z = re.join(",") + "{" + Z + "}", ce * ve !== 0) {
        switch (ce !== 2 || i(Z, 2) || (ve = 0), ve) {
          case 111:
            Z = Z.replace(N, ":-moz-$1") + Z;
            break;
          case 112:
            Z = Z.replace(j, "::-webkit-input-$1") + Z.replace(j, "::-moz-$1") + Z.replace(j, ":-ms-input-$1") + Z;
        }
        ve = 0;
      }
    }
    return Pe + Z + Be;
  }
  function r(C, k, E) {
    var R = k.trim().split(x);
    k = R;
    var v = R.length, I = C.length;
    switch (I) {
      case 0:
      case 1:
        var _ = 0;
        for (C = I === 0 ? "" : C[0] + " "; _ < v; ++_)
          k[_] = n(C, k[_], E).trim();
        break;
      default:
        var K = _ = 0;
        for (k = []; _ < v; ++_)
          for (var W = 0; W < I; ++W)
            k[K++] = n(C[W] + " ", R[_], E).trim();
    }
    return k;
  }
  function n(C, k, E) {
    var R = k.charCodeAt(0);
    switch (33 > R && (R = (k = k.trim()).charCodeAt(0)), R) {
      case 38:
        return k.replace(T, "$1" + C.trim());
      case 58:
        return C.trim() + k.replace(T, "$1" + C.trim());
      default:
        if (0 < 1 * E && 0 < k.indexOf("\f")) return k.replace(T, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + k;
  }
  function a(C, k, E, R) {
    var v = C + ";", I = 2 * k + 3 * E + 4 * R;
    if (I === 944) {
      C = v.indexOf(":", 9) + 1;
      var _ = v.substring(C, v.length - 1).trim();
      return _ = v.substring(0, C).trim() + _ + ";", ce === 1 || ce === 2 && i(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (ce === 0 || ce === 2 && !i(v, 1)) return v;
    switch (I) {
      case 1015:
        return v.charCodeAt(10) === 97 ? "-webkit-" + v + v : v;
      case 951:
        return v.charCodeAt(3) === 116 ? "-webkit-" + v + v : v;
      case 963:
        return v.charCodeAt(5) === 110 ? "-webkit-" + v + v : v;
      case 1009:
        if (v.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + v + v;
      case 978:
        return "-webkit-" + v + "-moz-" + v + v;
      case 1019:
      case 983:
        return "-webkit-" + v + "-moz-" + v + "-ms-" + v + v;
      case 883:
        if (v.charCodeAt(8) === 45) return "-webkit-" + v + v;
        if (0 < v.indexOf("image-set(", 11)) return v.replace(ke, "$1-webkit-$2") + v;
        break;
      case 932:
        if (v.charCodeAt(4) === 45) switch (v.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + v.replace("-grow", "") + "-webkit-" + v + "-ms-" + v.replace("grow", "positive") + v;
          case 115:
            return "-webkit-" + v + "-ms-" + v.replace("shrink", "negative") + v;
          case 98:
            return "-webkit-" + v + "-ms-" + v.replace("basis", "preferred-size") + v;
        }
        return "-webkit-" + v + "-ms-" + v + v;
      case 964:
        return "-webkit-" + v + "-ms-flex-" + v + v;
      case 1023:
        if (v.charCodeAt(8) !== 99) break;
        return _ = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + v + "-ms-flex-pack" + _ + v;
      case 1005:
        return y.test(v) ? v.replace(w, ":-webkit-") + v.replace(w, ":-moz-") + v : v;
      case 1e3:
        switch (_ = v.substring(13).trim(), k = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(k)) {
          case 226:
            _ = v.replace(b, "tb");
            break;
          case 232:
            _ = v.replace(b, "tb-rl");
            break;
          case 220:
            _ = v.replace(b, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + _ + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (k = (v = C).length - 10, _ = (v.charCodeAt(k) === 33 ? v.substring(0, k) : v).substring(C.indexOf(":", 7) + 1).trim(), I = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            v = v.replace(_, "-webkit-" + _) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(_, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + v.replace(_, "-webkit-" + _) + ";" + v.replace(_, "-ms-" + _ + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return _ = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + _ + "-ms-flex-" + _ + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(ie, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(ie, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (X.test(C) === !0) return (_ = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(C.replace("stretch", "fill-available"), k, E, R).replace(":fill-available", ":stretch") : v.replace(_, "-webkit-" + _) + v.replace(_, "-moz-" + _.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, E + R === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") + v;
    }
    return v;
  }
  function i(C, k) {
    var E = C.indexOf(k === 1 ? ":" : "{"), R = C.substring(0, k !== 3 ? E : 10);
    return E = C.substring(E + 1, C.length - 1), et(k !== 2 ? R : R.replace(M, "$1"), E, k);
  }
  function s(C, k) {
    var E = a(k, k.charCodeAt(0), k.charCodeAt(1), k.charCodeAt(2));
    return E !== k + ";" ? E.replace(fe, " or ($1)").substring(4) : "(" + k + ")";
  }
  function c(C, k, E, R, v, I, _, K, W, z) {
    for (var D = 0, ae = k, te; D < Se; ++D)
      switch (te = Oe[D].call(f, C, ae, E, R, v, I, _, K, W, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ae = te;
      }
    if (ae !== k) return ae;
  }
  function u(C) {
    switch (C) {
      case void 0:
      case null:
        Se = Oe.length = 0;
        break;
      default:
        if (typeof C == "function") Oe[Se++] = C;
        else if (typeof C == "object") for (var k = 0, E = C.length; k < E; ++k)
          u(C[k]);
        else $e = !!C | 0;
    }
    return u;
  }
  function d(C) {
    return C = C.prefix, C !== void 0 && (et = null, C ? typeof C != "function" ? ce = 1 : (ce = 2, et = C) : ce = 0), d;
  }
  function f(C, k) {
    var E = C;
    if (33 > E.charCodeAt(0) && (E = E.trim()), tt = E, E = [tt], 0 < Se) {
      var R = c(-1, k, E, E, G, oe, 0, 0, 0, 0);
      R !== void 0 && typeof R == "string" && (k = R);
    }
    var v = t(Me, E, k, 0, 0);
    return 0 < Se && (R = c(-2, v, E, E, G, oe, v.length, 0, 0, 0), R !== void 0 && (v = R)), tt = "", ve = 0, oe = G = 1, v;
  }
  var p = /^\0+/g, m = /[\0\r\f]/g, w = /: */g, y = /zoo|gra/, g = /([,: ])(transform)/g, x = /,\r+?/g, T = /([\t\r\n ])*\f?&/g, O = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, N = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, H = /\(\s*(.*)\s*\)/g, fe = /([\s\S]*?);/g, ie = /-self|flex-/g, M = /[^]*?(:[rp][el]a[\w-]+)[^]*/, X = /stretch|:\s*\w+\-(?:conte|avail)/, ke = /([^-])(image-set\()/, oe = 1, G = 1, ve = 0, ce = 1, Me = [], Oe = [], Se = 0, et = null, $e = 0, tt = "";
  return f.use = u, f.set = d, e !== void 0 && d(e), f;
}
var go = {
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
function vo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zn = /* @__PURE__ */ vo(
  function(e) {
    return yo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Kr = wa(), bo = {
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
}, wo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, xo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ja = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xr = {};
Xr[Kr.ForwardRef] = xo;
Xr[Kr.Memo] = ja;
function Fn(e) {
  return Kr.isMemo(e) ? ja : Xr[e.$$typeof] || bo;
}
var So = Object.defineProperty, _o = Object.getOwnPropertyNames, Wn = Object.getOwnPropertySymbols, To = Object.getOwnPropertyDescriptor, ko = Object.getPrototypeOf, qn = Object.prototype;
function Na(e, t, r) {
  if (typeof t != "string") {
    if (qn) {
      var n = ko(t);
      n && n !== qn && Na(e, n, r);
    }
    var a = _o(t);
    Wn && (a = a.concat(Wn(t)));
    for (var i = Fn(e), s = Fn(t), c = 0; c < a.length; ++c) {
      var u = a[c];
      if (!wo[u] && !(r && r[u]) && !(s && s[u]) && !(i && i[u])) {
        var d = To(t, u);
        try {
          So(e, u, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var Oo = Na;
const Ao = /* @__PURE__ */ Ur(Oo);
var Y = { env: { NODE_ENV: "production" } };
function Ue() {
  return (Ue = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Vn = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Ar = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Gr.typeOf(e);
}, Wt = Object.freeze([]), Ze = Object.freeze({});
function wt(e) {
  return typeof e == "function";
}
function jr(e) {
  return Y.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zr(e) {
  return e && typeof e.styledComponentId == "string";
}
var ct = typeof Y < "u" && Y.env !== void 0 && (Y.env.REACT_APP_SC_ATTR || Y.env.SC_ATTR) || "data-styled", Qr = typeof window < "u" && "HTMLElement" in window, jo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Y < "u" && Y.env !== void 0 && (Y.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Y.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Y.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Y.env.REACT_APP_SC_DISABLE_SPEEDY : Y.env.SC_DISABLE_SPEEDY !== void 0 && Y.env.SC_DISABLE_SPEEDY !== "" ? Y.env.SC_DISABLE_SPEEDY !== "false" && Y.env.SC_DISABLE_SPEEDY : Y.env.NODE_ENV !== "production")), No = Y.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Eo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function pt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Y.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Eo.apply(void 0, [No[e]].concat(r)).trim());
}
var Co = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, s = i; r >= s; ) (s <<= 1) < 0 && pt(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = i; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), d = 0, f = n.length; d < f; d++) this.tag.insertRule(u, n[d]) && (this.groupSizes[r]++, u++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var s = a; s < i; s++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), s = i + a, c = i; c < s; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Dt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), yt = 1, jt = function(e) {
  if (Dt.has(e)) return Dt.get(e);
  for (; qt.has(yt); ) yt++;
  var t = yt++;
  return Y.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && pt(16, "" + t), Dt.set(e, t), qt.set(t, e), t;
}, Ro = function(e) {
  return qt.get(e);
}, Lo = function(e, t) {
  t >= yt && (yt = t + 1), Dt.set(e, t), qt.set(t, e);
}, Io = "style[" + ct + '][data-styled-version="5.3.11"]', Po = new RegExp("^" + ct + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Do = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, s = a.length; i < s; i++) (n = a[i]) && e.registerName(t, n);
}, Mo = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var s = r[a].trim();
    if (s) {
      var c = s.match(Po);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (Lo(d, u), Do(e, d, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, $o = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ea = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(c) {
    for (var u = c.childNodes, d = u.length; d >= 0; d--) {
      var f = u[d];
      if (f && f.nodeType === 1 && f.hasAttribute(ct)) return f;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(ct, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = $o();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, Ho = function() {
  function e(r) {
    var n = this.element = Ea(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, s = 0, c = i.length; s < c; s++) {
        var u = i[s];
        if (u.ownerNode === a) return u;
      }
      pt(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Bo = function() {
  function e(r) {
    var n = this.element = Ea(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), zo = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Un = Qr, Fo = { isServer: !Qr, useCSSOMInjection: !jo }, Ca = function() {
  function e(r, n, a) {
    r === void 0 && (r = Ze), n === void 0 && (n = {}), this.options = Ue({}, Fo, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Qr && Un && (Un = !1, function(i) {
      for (var s = document.querySelectorAll(Io), c = 0, u = s.length; c < u; c++) {
        var d = s[c];
        d && d.getAttribute(ct) !== "active" && (Mo(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return jt(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Ue({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, s = n.target, r = a ? new zo(s) : i ? new Ho(s) : new Bo(s), new Co(r)));
    var r, n, a, i, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (jt(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(jt(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(jt(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", s = 0; s < a; s++) {
        var c = Ro(s);
        if (c !== void 0) {
          var u = r.names.get(c), d = n.getGroup(s);
          if (u && d && u.size) {
            var f = ct + ".g" + s + '[id="' + c + '"]', p = "";
            u !== void 0 && u.forEach(function(m) {
              m.length > 0 && (p += m + ",");
            }), i += "" + d + f + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Wo = /(a)(d)/gi, Yn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Nr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Yn(t % 52) + r;
  return (Yn(t % 52) + r).replace(Wo, "$1-$2");
}
var ot = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ra = function(e) {
  return ot(5381, e);
};
function qo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (wt(r) && !Zr(r)) return !1;
  }
  return !0;
}
var Vo = Ra("5.3.11"), Uo = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Y.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && qo(t), this.componentId = r, this.baseHash = ot(Vo, r), this.baseStyle = n, Ca.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var s = ut(this.rules, t, r, n).join(""), c = Nr(ot(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(a, c)) {
        var u = n(s, "." + c, void 0, a);
        r.insertRules(a, c, u);
      }
      i.push(c), this.staticRulesId = c;
    }
    else {
      for (var d = this.rules.length, f = ot(this.baseHash, n.hash), p = "", m = 0; m < d; m++) {
        var w = this.rules[m];
        if (typeof w == "string") p += w, Y.env.NODE_ENV !== "production" && (f = ot(f, w + m));
        else if (w) {
          var y = ut(w, t, r, n), g = Array.isArray(y) ? y.join("") : y;
          f = ot(f, g + m), p += g;
        }
      }
      if (p) {
        var x = Nr(f >>> 0);
        if (!r.hasNameForId(a, x)) {
          var T = n(p, "." + x, void 0, a);
          r.insertRules(a, x, T);
        }
        i.push(x);
      }
    }
    return i.join(" ");
  }, e;
}(), Yo = /^\s*\/\/.*$/gm, Go = [":", "[", ".", "#"];
function Ko(e) {
  var t, r, n, a, i = Ze, s = i.options, c = s === void 0 ? Ze : s, u = i.plugins, d = u === void 0 ? Wt : u, f = new mo(c), p = [], m = /* @__PURE__ */ function(g) {
    function x(T) {
      if (T) try {
        g(T + "}");
      } catch {
      }
    }
    return function(T, O, j, N, b, H, fe, ie, M, X) {
      switch (T) {
        case 1:
          if (M === 0 && O.charCodeAt(0) === 64) return g(O + ";"), "";
          break;
        case 2:
          if (ie === 0) return O + "/*|*/";
          break;
        case 3:
          switch (ie) {
            case 102:
            case 112:
              return g(j[0] + O), "";
            default:
              return O + (X === 0 ? "/*|*/" : "");
          }
        case -2:
          O.split("/*|*/}").forEach(x);
      }
    };
  }(function(g) {
    p.push(g);
  }), w = function(g, x, T) {
    return x === 0 && Go.indexOf(T[r.length]) !== -1 || T.match(a) ? g : "." + t;
  };
  function y(g, x, T, O) {
    O === void 0 && (O = "&");
    var j = g.replace(Yo, ""), N = x && T ? T + " " + x + " { " + j + " }" : j;
    return t = O, r = x, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), f(T || !x ? "" : x, N);
  }
  return f.use([].concat(d, [function(g, x, T) {
    g === 2 && T.length && T[0].lastIndexOf(r) > 0 && (T[0] = T[0].replace(n, w));
  }, m, function(g) {
    if (g === -2) {
      var x = p;
      return p = [], x;
    }
  }])), y.hash = d.length ? d.reduce(function(g, x) {
    return x.name || pt(15), ot(g, x.name);
  }, 5381).toString() : "", y;
}
var La = ne.createContext();
La.Consumer;
var Ia = ne.createContext(), Xo = (Ia.Consumer, new Ca()), Er = Ko();
function Zo() {
  return Vr(La) || Xo;
}
function Qo() {
  return Vr(Ia) || Er;
}
var Jo = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Er);
      var s = n.name + i.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return pt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Er), this.name + t.hash;
  }, e;
}(), es = /([A-Z])/, ts = /([A-Z])/g, rs = /^ms-/, ns = function(e) {
  return "-" + e.toLowerCase();
};
function Gn(e) {
  return es.test(e) ? e.replace(ts, ns).replace(rs, "-ms-") : e;
}
var Kn = function(e) {
  return e == null || e === !1 || e === "";
};
function ut(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], s = 0, c = e.length; s < c; s += 1) (a = ut(e[s], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (Kn(e)) return "";
  if (Zr(e)) return "." + e.styledComponentId;
  if (wt(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var u = e(t);
    return Y.env.NODE_ENV !== "production" && Gr.isElement(u) && console.warn(jr(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ut(u, t, r, n);
  }
  var d;
  return e instanceof Jo ? r ? (e.inject(r, n), e.getName(n)) : e : Ar(e) ? function f(p, m) {
    var w, y, g = [];
    for (var x in p) p.hasOwnProperty(x) && !Kn(p[x]) && (Array.isArray(p[x]) && p[x].isCss || wt(p[x]) ? g.push(Gn(x) + ":", p[x], ";") : Ar(p[x]) ? g.push.apply(g, f(p[x], x)) : g.push(Gn(x) + ": " + (w = x, (y = p[x]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || w in go || w.startsWith("--") ? String(y).trim() : y + "px") + ";"));
    return m ? [m + " {"].concat(g, ["}"]) : g;
  }(e) : e.toString();
}
var Xn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function as(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return wt(e) || Ar(e) ? Xn(ut(Vn(Wt, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Xn(ut(Vn(e, r)));
}
var Zn = /invalid hook call/i, Nt = /* @__PURE__ */ new Set(), is = function(e, t) {
  if (Y.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (Zn.test(i)) a = !1, Nt.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
          n.apply(void 0, [i].concat(c));
        }
      }, Qe(), a && !Nt.has(r) && (console.warn(r), Nt.add(r));
    } catch (i) {
      Zn.test(i.message) && Nt.delete(r);
    } finally {
      console.error = n;
    }
  }
}, os = function(e, t, r) {
  return r === void 0 && (r = Ze), e.theme !== r.theme && e.theme || t || r.theme;
}, ss = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ls = /(^-|-$)/g;
function Sr(e) {
  return e.replace(ss, "-").replace(ls, "");
}
var cs = function(e) {
  return Nr(Ra(e) >>> 0);
};
function Et(e) {
  return typeof e == "string" && (Y.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Cr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, us = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ds(e, t, r) {
  var n = e[r];
  Cr(t) && Cr(n) ? Pa(n, t) : e[r] = t;
}
function Pa(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var s = i[a];
    if (Cr(s)) for (var c in s) us(c) && ds(e, s[c], c);
  }
  return e;
}
var Da = ne.createContext();
Da.Consumer;
var _r = {};
function Ma(e, t, r) {
  var n = Zr(e), a = !Et(e), i = t.attrs, s = i === void 0 ? Wt : i, c = t.componentId, u = c === void 0 ? function(O, j) {
    var N = typeof O != "string" ? "sc" : Sr(O);
    _r[N] = (_r[N] || 0) + 1;
    var b = N + "-" + cs("5.3.11" + N + _r[N]);
    return j ? j + "-" + b : b;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, f = d === void 0 ? function(O) {
    return Et(O) ? "styled." + O : "Styled(" + jr(O) + ")";
  }(e) : d, p = t.displayName && t.componentId ? Sr(t.displayName) + "-" + t.componentId : t.componentId || u, m = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, w = t.shouldForwardProp;
  n && e.shouldForwardProp && (w = t.shouldForwardProp ? function(O, j, N) {
    return e.shouldForwardProp(O, j, N) && t.shouldForwardProp(O, j, N);
  } : e.shouldForwardProp);
  var y, g = new Uo(r, p, n ? e.componentStyle : void 0), x = g.isStatic && s.length === 0, T = function(O, j) {
    return function(N, b, H, fe) {
      var ie = N.attrs, M = N.componentStyle, X = N.defaultProps, ke = N.foldedComponentIds, oe = N.shouldForwardProp, G = N.styledComponentId, ve = N.target, ce = function(R, v, I) {
        R === void 0 && (R = Ze);
        var _ = Ue({}, v, { theme: R }), K = {};
        return I.forEach(function(W) {
          var z, D, ae, te = W;
          for (z in wt(te) && (te = te(_)), te) _[z] = K[z] = z === "className" ? (D = K[z], ae = te[z], D && ae ? D + " " + ae : D || ae) : te[z];
        }), [_, K];
      }(os(b, Vr(Da), X) || Ze, b, ie), Me = ce[0], Oe = ce[1], Se = function(R, v, I, _) {
        var K = Zo(), W = Qo(), z = v ? R.generateAndInjectStyles(Ze, K, W) : R.generateAndInjectStyles(I, K, W);
        return Y.env.NODE_ENV !== "production" && !v && _ && _(z), z;
      }(M, fe, Me, Y.env.NODE_ENV !== "production" ? N.warnTooManyClasses : void 0), et = H, $e = Oe.$as || b.$as || Oe.as || b.as || ve, tt = Et($e), C = Oe !== b ? Ue({}, b, {}, Oe) : b, k = {};
      for (var E in C) E[0] !== "$" && E !== "as" && (E === "forwardedAs" ? k.as = C[E] : (oe ? oe(E, zn, $e) : !tt || zn(E)) && (k[E] = C[E]));
      return b.style && Oe.style !== b.style && (k.style = Ue({}, b.style, {}, Oe.style)), k.className = Array.prototype.concat(ke, G, Se !== G ? Se : null, b.className, Oe.className).filter(Boolean).join(" "), k.ref = et, yi($e, k);
    }(y, O, j, x);
  };
  return T.displayName = f, (y = ne.forwardRef(T)).attrs = m, y.componentStyle = g, y.displayName = f, y.shouldForwardProp = w, y.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Wt, y.styledComponentId = p, y.target = n ? e.target : e, y.withComponent = function(O) {
    var j = t.componentId, N = function(H, fe) {
      if (H == null) return {};
      var ie, M, X = {}, ke = Object.keys(H);
      for (M = 0; M < ke.length; M++) ie = ke[M], fe.indexOf(ie) >= 0 || (X[ie] = H[ie]);
      return X;
    }(t, ["componentId"]), b = j && j + "-" + (Et(O) ? O : Sr(jr(O)));
    return Ma(O, Ue({}, N, { attrs: m, componentId: b }), r);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = n ? Pa({}, e.defaultProps, O) : O;
  } }), Y.env.NODE_ENV !== "production" && (is(f, p), y.warnTooManyClasses = /* @__PURE__ */ function(O, j) {
    var N = {}, b = !1;
    return function(H) {
      if (!b && (N[H] = !0, Object.keys(N).length >= 200)) {
        var fe = j ? ' with the id of "' + j + '"' : "";
        console.warn("Over 200 classes were generated for component " + O + fe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), b = !0, N = {};
      }
    };
  }(f, p)), Object.defineProperty(y, "toString", { value: function() {
    return "." + y.styledComponentId;
  } }), a && Ao(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Ie = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Ze), !Gr.isValidElementType(n)) return pt(1, String(n));
    var i = function() {
      return r(n, a, as.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return t(r, n, Ue({}, a, {}, s));
    }, i.attrs = function(s) {
      return t(r, n, Ue({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, i;
  }(Ma, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ie[e] = Ie(e);
});
Y.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Y.env.NODE_ENV !== "production" && Y.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const fs = Ie.div`
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
`, Mt = "On This Page", hs = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: Mt
}, $a = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const n = Qe(null), a = Ri("(max-width: 991px)"), [i, s] = de({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), c = a ? 110 : 142, u = () => {
    var N;
    const g = {}, x = window.scrollY, T = (N = document.getElementById(t)) == null ? void 0 : N.getBoundingClientRect().top, O = 103;
    T >= 0 && (g.sticky = !1, g.activeContainer = ""), x > n.current.getBoundingClientRect().top && (g.sticky = !0);
    const j = i.hasHeader ? c + O : O;
    e == null || e.forEach(({ targetIdName: b }) => {
      const H = document.getElementById(b), fe = (H == null ? void 0 : H.getBoundingClientRect().top) - j, ie = (H == null ? void 0 : H.getBoundingClientRect().bottom) - j;
      fe < 0 && ie > 0 && (g.activeContainer = b);
    }), s((b) => ({
      ...b,
      ...g
    }));
  }, d = () => {
    co(u, 150), uo(u, 150);
  }, f = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), p = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function m(g = null) {
    if (g === null) return i.containerClass;
    const x = Object.values(g.classList).filter(
      (T) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(T)
    );
    return x.length > 0 ? x.join(" ") : m(g.parentElement);
  }
  we(() => {
    const g = document.getElementById(t) || null, x = {
      hasHeader: f(),
      hasAltMenuSpacing: p(),
      containerClass: m(g)
    };
    s((T) => ({
      ...T,
      ...x
    }));
  }, []), we(() => (window == null || window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d)), [i.hasHeader]);
  const w = (g) => {
    var j, N;
    const x = window.scrollY - (i.hasHeader ? c + 100 : 100), T = a ? 410 : 90;
    let O = ((j = document.getElementById(g)) == null ? void 0 : j.getBoundingClientRect().top) + x;
    n.current.classList.contains("sticky") || (O -= T), r && ((N = lo(`#${g}`)) == null || N.focus()), window.scrollTo({ top: O, behavior: "smooth" });
  }, y = () => {
    s((g) => ({
      ...g,
      showMenu: !g.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ l.jsx(
    fs,
    {
      requiresAltMenuSpacing: i.hasAltMenuSpacing,
      ref: n,
      className: q(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: i.sticky,
          "with-header": i.hasHeader
        }
      ),
      style: i.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ l.jsxs("div", { className: `${i.containerClass} uds-anchor-menu-wrapper`, children: [
        a ? /* @__PURE__ */ l.jsx(
          ge,
          {
            gaData: {
              ...hs,
              action: i.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ l.jsx(
              "button",
              {
                className: q("mobile-menu-toggler", {
                  "show-menu": i.showMenu
                }),
                type: "button",
                onClick: y,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ l.jsxs("h4", { children: [
                  Mt,
                  ":",
                  /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ l.jsxs("h4", { children: [
          Mt,
          ":"
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: q("card", "card-body", "collapse", {
              show: i.showMenu
            }),
            children: /* @__PURE__ */ l.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": Mt,
                children: e == null ? void 0 : e.map((g) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ l.jsx(
                    Xe,
                    {
                      "data-testid": `anchor-item-${g.targetIdName}`,
                      classes: q("nav-link", {
                        active: i.activeContainer === g.targetIdName
                      }).split(" "),
                      ariaLabel: g.text,
                      label: g.text,
                      icon: g.icon,
                      onClick: () => w(g.targetIdName)
                    },
                    g.targetIdName
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
$a.propTypes = {
  /**
   * Anchor menu items
   */
  items: o.arrayOf(
    o.shape({
      text: o.string.isRequired,
      targetIdName: o.string.isRequired,
      icon: o.arrayOf(o.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: o.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: o.bool
};
var Rr = function() {
  return Rr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Rr.apply(this, arguments);
}, ps = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Xt(e) {
  var t = function(r) {
    var n = r.bgStyle, a = r.borderRadius, i = r.iconFillColor, s = r.round, c = r.size, u = ps(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return ne.createElement(
      "svg",
      Rr({ viewBox: "0 0 64 64", width: c, height: c }, u),
      s ? ne.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : ne.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: n }),
      ne.createElement("path", { d: e.path, fill: i })
    );
  };
  return t.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, t;
}
var ms = Xt({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function Zt(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var gs = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), qe = function() {
  return qe = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qe.apply(this, arguments);
}, vs = function(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(f) {
      try {
        d(n.next(f));
      } catch (p) {
        s(p);
      }
    }
    function u(f) {
      try {
        d(n.throw(f));
      } catch (p) {
        s(p);
      }
    }
    function d(f) {
      f.done ? i(f.value) : a(f.value).then(c, u);
    }
    d((n = n.apply(e, t || [])).next());
  });
}, ys = function(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, s;
  return s = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(d) {
    return function(f) {
      return u([d, f]);
    };
  }
  function u(d) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, a && (i = d[0] & 2 ? a.return : d[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, d[1])).done) return i;
      switch (a = 0, i && (d = [d[0] & 2, i.value]), d[0]) {
        case 0:
        case 1:
          i = d;
          break;
        case 4:
          return r.label++, { value: d[1], done: !1 };
        case 5:
          r.label++, a = d[1], d = [0];
          continue;
        case 7:
          d = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            r = 0;
            continue;
          }
          if (d[0] === 3 && (!i || d[1] > i[0] && d[1] < i[3])) {
            r.label = d[1];
            break;
          }
          if (d[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = d;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(d);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      d = t.call(e, r);
    } catch (f) {
      d = [6, f], a = 0;
    } finally {
      n = i = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}, Ha = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, bs = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, ws = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, xs = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Ss(e, t, r) {
  var n = t.height, a = t.width, i = Ha(t, ["height", "width"]), s = qe({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, i), c = window.open(e, "", Object.keys(s).map(function(d) {
    return "".concat(d, "=").concat(s[d]);
  }).join(", "));
  if (r)
    var u = window.setInterval(function() {
      try {
        (c === null || c.closed) && (window.clearInterval(u), r(c));
      } catch (d) {
        console.error(d);
      }
    }, 1e3);
  return c;
}
var _s = (
  /** @class */
  function(e) {
    gs(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, i = a.onShareWindowClose, s = a.windowHeight, c = s === void 0 ? 400 : s, u = a.windowPosition, d = u === void 0 ? "windowCenter" : u, f = a.windowWidth, p = f === void 0 ? 550 : f, m = qe({ height: c, width: p }, d === "windowCenter" ? ws(p, c) : xs(p, c));
        Ss(n, m, i);
      }, r.handleClick = function(n) {
        return vs(r, void 0, void 0, function() {
          var a, i, s, c, u, d, f, p, m, w;
          return ys(this, function(y) {
            switch (y.label) {
              case 0:
                return a = this.props, i = a.beforeOnClick, s = a.disabled, c = a.networkLink, u = a.onClick, d = a.url, f = a.openShareDialogOnClick, p = a.opts, m = c(d, p), s ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), i ? (w = i(), bs(w) ? [4, w] : [3, 2]) : [3, 2]);
              case 1:
                y.sent(), y.label = 2;
              case 2:
                return f && this.openShareDialog(m), u && u(n, m), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, r;
    }
    return t.prototype.render = function() {
      var r = this.props;
      r.beforeOnClick;
      var n = r.children, a = r.className, i = r.disabled, s = r.disabledStyle, c = r.forwardedRef;
      r.networkLink;
      var u = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var d = r.resetButtonStyle, f = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var p = Ha(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), m = q("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!i,
        disabled: !!i
      }, a), w = qe(qe(d ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, f), i && s);
      return ne.createElement("button", qe({}, p, { "aria-label": p["aria-label"] || u, className: m, onClick: this.handleClick, ref: c, style: w }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(bi)
), Vt = function() {
  return Vt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Vt.apply(this, arguments);
};
function Qt(e, t, r, n) {
  function a(i, s) {
    var c = r(i), u = Vt({}, i), d = Object.keys(c);
    return d.forEach(function(f) {
      delete u[f];
    }), ne.createElement(_s, Vt({}, n, u, { forwardedRef: s, networkName: e, networkLink: t, opts: r(i) }));
  }
  return a.displayName = "ShareButton-".concat(e), va(a);
}
function Ts(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Zt({ subject: r, body: n ? n + a + e : e });
}
var ks = Qt("email", Ts, function(e) {
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
}), Qn = Xt({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), Os = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), As = (
  /** @class */
  function(e) {
    Os(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function bt(e, t) {
  if (!e)
    throw new As(t);
}
function js(e, t) {
  var r = t.quote, n = t.hashtag;
  return bt(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Zt({
    u: e,
    quote: r,
    hashtag: n
  });
}
var Jn = Qt("facebook", js, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), ea = Xt({
  color: "#007fb1",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function Ns(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return bt(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Zt({ url: e, mini: "true", title: r, summary: n, source: a });
}
var ta = Qt("linkedin", Ns, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
}), ra = Xt({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function Es(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, i = a === void 0 ? [] : a, s = t.related, c = s === void 0 ? [] : s;
  return bt(e, "twitter.url"), bt(Array.isArray(i), "twitter.hashtags is not an array"), bt(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + Zt({
    url: e,
    text: r,
    via: n,
    hashtags: i.length > 0 ? i.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
var na = Qt("twitter", Es, function(e) {
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
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
var Cs;
function Ir() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cs;
  return t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var Rs = (typeof window > "u" ? "undefined" : Lr(window)) === "object" && window.Element || function() {
};
function Ls(e, t, r) {
  if (!(e[t] instanceof Rs))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
o.oneOfType([o.string, o.func, Ls, o.shape({
  current: o.any
})]);
var Pr = o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
}), o.arrayOf(o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
})]))]), Is = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dr.apply(this, arguments);
}
function Ps(e, t) {
  if (e == null) return {};
  var r = Ds(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ds(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Ms = {
  /** Aria label */
  "aria-label": o.string,
  /** Pass children so this component can wrap them */
  children: o.node,
  /** Add custom class */
  className: o.string,
  /** Change existing className with a new className */
  cssModule: o.object,
  /** Add custom class to list tag */
  listClassName: o.string,
  /** Set a custom element for list tag */
  listTag: Pr,
  /** Set a custom element for this component */
  tag: Pr
};
function Ba(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, a = e.children, i = e.tag, s = i === void 0 ? "nav" : i, c = e.listTag, u = c === void 0 ? "ol" : c, d = e["aria-label"], f = d === void 0 ? "breadcrumb" : d, p = Ps(e, Is), m = Ir(q(t), n), w = Ir(q("breadcrumb", r), n);
  return /* @__PURE__ */ ne.createElement(s, Dr({}, p, {
    className: m,
    "aria-label": f
  }), /* @__PURE__ */ ne.createElement(u, {
    className: w
  }, a));
}
Ba.propTypes = Ms;
var $s = ["className", "cssModule", "active", "tag"];
function Mr() {
  return Mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mr.apply(this, arguments);
}
function Hs(e, t) {
  if (e == null) return {};
  var r = Bs(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Bs(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var zs = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: o.bool,
  /** Add custom class to the element */
  className: o.string,
  /** Change existing className with a new className */
  cssModule: o.object,
  /** Set a custom element for this component */
  tag: Pr
};
function $r(e) {
  var t = e.className, r = e.cssModule, n = e.active, a = e.tag, i = a === void 0 ? "li" : a, s = Hs(e, $s), c = Ir(q(t, n ? "active" : !1, "breadcrumb-item"), r);
  return /* @__PURE__ */ ne.createElement(i, Mr({}, s, {
    className: c,
    "aria-current": n ? "page" : void 0
  }));
}
$r.propTypes = zs;
const Fs = Ie.div`
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
`, Ws = Ie.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, Jr = ({
  type: e,
  articleUrl: t,
  publicationDate: r,
  title: n,
  body: a,
  authorEmail: i,
  authorName: s,
  authorPhone: c,
  authorTitle: u,
  breadcrumbs: d,
  calendarUrl: f,
  eventLocation: p,
  eventTime: m,
  headerImageUrl: w,
  registrationUrl: y,
  zoomUrl: g
}) => {
  const x = q("col", "col-12", {
    "col-lg-8": e === "event" && (y || g || f)
  }), T = () => y ? /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(Xe, { color: "maroon", href: y, label: "Register" }) }) : /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(Xe, { color: "maroon", href: g, label: "Attend on Zoom" }) }), O = () => /* @__PURE__ */ l.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ l.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ l.jsx("div", { className: "author highlight-gold", children: s }),
    u && /* @__PURE__ */ l.jsx("div", { className: "author-title", children: u }),
    i && /* @__PURE__ */ l.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ l.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ l.jsx("a", { href: `mailto: ${i}`, children: i })
    ] }),
    c && /* @__PURE__ */ l.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ l.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ l.jsx("a", { href: `tel: ${c}`, children: c })
    ] })
  ] }) }), j = () => /* @__PURE__ */ l.jsxs(
    Ws,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ l.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ l.jsx("div", { className: "event-author", children: s }),
          /* @__PURE__ */ l.jsx("div", { className: "event-author-title", children: u }),
          (i || c) && /* @__PURE__ */ l.jsxs("div", { className: "event-author-info", children: [
            i && /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("a", { href: `mailto: ${i}`, children: i }) }),
            c && /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("a", { href: `tel: ${c}`, children: c }) })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ l.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ l.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ l.jsx(Jn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              Qn,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(na, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              ra,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(ks, { url: i, quote: n, children: /* @__PURE__ */ l.jsx(
              ms,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(ta, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              ea,
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
  ), N = () => /* @__PURE__ */ l.jsxs("div", { className: "col col-12 col-lg-4 col-md-6", children: [
    /* @__PURE__ */ l.jsxs("h4", { children: [
      /* @__PURE__ */ l.jsx("i", { className: "fas fa-map-marker-alt" }),
      "Location:"
    ] }),
    /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: Ne(p) }),
    y && g && /* @__PURE__ */ l.jsx("a", { href: g, children: "Attend on Zoom" })
  ] }), b = (H) => /* @__PURE__ */ l.jsx(
    $r,
    {
      active: H.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ l.jsx($r, { tag: "a", href: H.url, children: H.title })
    },
    H.title
  );
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    w && e !== "event" && /* @__PURE__ */ l.jsx(
      "div",
      {
        "data-testid": "uds-hero",
        className: "uds-hero uds-hero-md",
        style: {
          backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${w})`
        }
      }
    ),
    /* @__PURE__ */ l.jsxs(Fs, { className: `container ${e}-container wrapper-container`, children: [
      d && /* @__PURE__ */ l.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ l.jsx("div", { className: "col col-12", children: /* @__PURE__ */ l.jsx(Ba, { listClassName: "breadcrumb", children: d.map((H) => b(H)) }) }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ l.jsx("div", { className: x, children: /* @__PURE__ */ l.jsx("h2", { "data-testid": "title", children: n }) }),
        e === "event" && /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (y || g) && T(),
          f && /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(
            Xe,
            {
              color: "gray",
              size: "small",
              href: f,
              label: "Add to calendar"
            }
          ) })
        ] })
      ] }),
      e === "event" ? /* @__PURE__ */ l.jsxs("div", { className: "row row-spaced pt-3 mb-2", children: [
        m && /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-sm-12", children: [
          /* @__PURE__ */ l.jsxs("h4", { children: [
            /* @__PURE__ */ l.jsx("i", { className: "far fa-calendar" }),
            "Date and time:"
          ] }),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Ne(m)
            }
          )
        ] }),
        (y && g || p) && N()
      ] }) : /* @__PURE__ */ l.jsx("div", { className: "row row-spaced pt-2", children: /* @__PURE__ */ l.jsxs("div", { className: "col col-12", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "article-social-media", children: [
          /* @__PURE__ */ l.jsx(Jn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            Qn,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ l.jsx(na, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            ra,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ l.jsx(ta, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            ea,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) })
        ] }),
        r && /* @__PURE__ */ l.jsx("i", { className: "news-date", children: r })
      ] }) }),
      /* @__PURE__ */ l.jsx("div", { className: "row", children: /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "col col-12",
          dangerouslySetInnerHTML: Ne(a),
          "data-testid": "body"
        }
      ) }),
      e === "news" && O(),
      e === "event" && j()
    ] })
  ] });
};
Jr.propTypes = {
  /**
   * Type of article
   */
  type: o.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: o.string.isRequired,
  /**
   * Date for the article
   */
  publicationDate: o.string.isRequired,
  /**
   * Title
   */
  title: o.string.isRequired,
  /**
   * Body content for the article
   */
  body: o.string.isRequired,
  /**
   * Article author email
   */
  authorEmail: o.string,
  /**
   * Article author full name
   */
  authorName: o.string.isRequired,
  /**
   * Article author phone number
   */
  authorPhone: o.string,
  /**
   * Article author title
   */
  authorTitle: o.string,
  /**
   * Breadcrumbs array
   */
  breadcrumbs: o.arrayOf(
    o.shape({
      title: o.string,
      url: o.string,
      active: o.bool
    })
  ),
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl: o.string,
  /**
   * Article image
   */
  headerImageUrl: o.string,
  /**
   * Event location
   */
  eventLocation: o.string,
  /**
   * Event time
   */
  eventTime: o.string,
  /**
   * URL for a registation button
   */
  registrationUrl: o.string,
  /**
   * URL for a Zoom button
   */
  zoomUrl: o.string
};
Jr.defaultProps = {
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
const qs = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Jt = ({
  color: e,
  icon: t,
  innerRef: r,
  onClick: n,
  size: a,
  cardTitle: i,
  className: s,
  gaData: c,
  ...u
}) => {
  const d = () => {
    n == null || n();
  };
  return /* @__PURE__ */ l.jsx(
    ge,
    {
      gaData: {
        ...qs,
        section: i,
        // @deprecated - remove at some point
        ...c,
        text: `${t == null ? void 0 : t[1]} icon`
      },
      children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"} ${s}`,
          ref: r,
          "aria-label": "Close",
          onClick: d,
          ...u,
          children: /* @__PURE__ */ l.jsx("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` })
        }
      )
    }
  );
};
Jt.propTypes = {
  /**
    Color the button based on the background color
  */
  color: o.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: o.string,
  /**
   * Google Analytics event data
   */
  gaData: Yr,
  /**
    Button size
  */
  size: o.oneOf(["large", "small"]),
  className: o.string
};
Jt.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const Vs = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, er = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: i,
  element: s,
  innerRef: c,
  href: u,
  onClick: d,
  ...f
}) => {
  const p = q("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: i
  });
  let m = s;
  return u && s === "button" && (m = "a"), /* @__PURE__ */ l.jsx(
    ge,
    {
      gaData: {
        ...Vs,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ l.jsx(
        m,
        {
          type: m === "button" && d ? "button" : void 0,
          ...f,
          className: p,
          href: u,
          ref: c,
          onClick: d,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
er.propTypes = {
  /**
    Button tag label
  */
  label: o.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: o.string,
  /**
   * Google Analytics event data
   */
  gaData: Yr,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Button background color
  */
  color: o.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func
};
er.defaultProps = {
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
const dt = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: i,
  fetchPriority: s = "auto",
  width: c,
  height: u,
  cardLink: d,
  title: f,
  caption: p,
  captionTitle: m,
  border: w,
  dropShadow: y
}) => {
  const g = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: s,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Lt(r) },
    ...i && { "data-testid": i },
    ...c && { width: c },
    ...u && { height: u }
  }, x = q("uds-img", {
    borderless: !w,
    "uds-img-drop-shadow": y
  }), T = (j) => {
    const N = j ? `${g.className} ${j}` : g.className;
    return d ? /* @__PURE__ */ l.jsxs("a", { href: d, children: [
      /* @__PURE__ */ l.jsx("img", { ...g, className: N }),
      /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: f })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ l.jsx("img", { ...g, className: N })
    );
  }, O = () => /* @__PURE__ */ l.jsx("div", { className: x, children: /* @__PURE__ */ l.jsxs("figure", { className: "figure uds-figure", children: [
    T(),
    p && /* @__PURE__ */ l.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      m && /* @__PURE__ */ l.jsx("h3", { children: m }),
      /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ne(p)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: p ? O() : T(x) });
};
dt.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: o.string.isRequired,
  /**
   * Image alt text
   */
  alt: o.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: o.arrayOf(o.string),
  /**
   * Image loading mode
   */
  loading: o.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: o.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: o.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: o.string,
  /**
   * Height of the image
   */
  height: o.string,
  dataTestId: o.string,
  cardLink: o.string,
  title: o.string,
  caption: o.string,
  captionTitle: o.string,
  border: o.bool,
  dropShadow: o.bool
};
const Us = Ie.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ys = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Gs = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ys(e) ? `mailto:${e}` : e, Ks = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ve = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: s,
  body: c,
  eventFormat: u,
  eventLocation: d,
  eventTime: f,
  buttons: p,
  linkLabel: m,
  linkUrl: w,
  tags: y,
  showBorders: g,
  cardLink: x
}) => /* @__PURE__ */ l.jsx(
  en,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: i,
    icon: s,
    body: c,
    eventFormat: u,
    eventLocation: d,
    eventTime: f,
    buttons: p,
    linkLabel: m,
    linkUrl: w,
    tags: y,
    showBorders: g,
    cardLink: x
  }
);
Ve.propTypes = {
  /**
   * Type of card
   */
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: o.bool,
  /**
   * Card title
   */
  title: o.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * Card body content
   */
  body: o.string,
  /**
   * Event info format
   */
  eventFormat: o.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: o.string,
  /**
   * Event start time
   */
  eventTime: o.string,
  /**
   * Card header image
   */
  image: o.string,
  /**
   * Card header image alt text
   */
  imageAltText: o.string,
  /**
   * Buttons
   */
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  /**
   * Tags
   */
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: o.bool,
  /**
   * Card link
   */
  cardLink: o.string
};
Ve.defaultProps = {
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
const en = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: s,
  body: c,
  eventFormat: u,
  eventLocation: d,
  eventTime: f,
  buttons: p,
  linkLabel: m,
  linkUrl: w,
  tags: y,
  showBorders: g,
  cardLink: x
}) => {
  const T = q("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !g
  });
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(Us, { className: T, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ l.jsx(
      dt,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: x,
        title: i
      }
    ),
    !n && s && /* @__PURE__ */ l.jsx(
      "i",
      {
        className: `${s == null ? void 0 : s[0]} fa-${s == null ? void 0 : s[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ l.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ l.jsx(
      Ut,
      {
        type: e,
        body: c,
        eventFormat: u,
        eventLocation: d,
        eventTime: f,
        title: i,
        buttons: p,
        linkLabel: m,
        linkUrl: w,
        tags: y,
        cardLink: x
      }
    ) }) : /* @__PURE__ */ l.jsx(
      Ut,
      {
        type: e,
        body: c,
        eventFormat: u,
        eventLocation: d,
        eventTime: f,
        title: i,
        buttons: p,
        linkLabel: m,
        linkUrl: w,
        tags: y,
        cardLink: x
      }
    )
  ] }) });
};
en.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: o.bool,
  title: o.string.isRequired,
  icon: o.arrayOf(o.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  image: o.string,
  imageAltText: o.string,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  showBorders: o.bool,
  cardLink: o.string
};
en.defaultProps = {
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
const Ut = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: i,
  buttons: s,
  linkLabel: c,
  linkUrl: u,
  tags: d,
  cardLink: f
}) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  !!i && /* @__PURE__ */ l.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ l.jsx("h3", { className: "card-title", children: f ? /* @__PURE__ */ l.jsx("a", { href: f, children: i }) : i }) }),
  !!t && /* @__PURE__ */ l.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: Ne(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ l.jsx(
    tn,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  s && /* @__PURE__ */ l.jsx("div", { className: "card-buttons", children: s.map((p) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ l.jsx(
        Xe,
        {
          ariaLabel: p.ariaLabel,
          color: p.color,
          icon: p.icon,
          href: p.href,
          label: p.label,
          onClick: p.onClick,
          size: p.size,
          target: p.target,
          cardTitle: i
        }
      )
    },
    `${p.label}-${p.href}`
  )) }),
  u && c && /* @__PURE__ */ l.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ l.jsx(
    ge,
    {
      gaData: {
        ...Ks,
        section: i,
        text: c
      },
      children: /* @__PURE__ */ l.jsx("a", { href: Gs(u), children: c })
    }
  ) }),
  d && /* @__PURE__ */ l.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: d.map((p) => (
    // @ts-ignore
    /* @__PURE__ */ l.jsx(
      er,
      {
        ariaLabel: p.ariaLabel,
        color: p.color,
        href: p.href,
        label: p.label,
        onClick: p.onClick,
        cardTitle: i
      },
      `${p.label}-${p.href}`
    )
  )) })
] });
Ut.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  title: o.string.isRequired,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  cardLink: o.string
};
Ut.defaultProps = {
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
const tn = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ l.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: Ne(t) })
  ] }),
  r && /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ne(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  t && /* @__PURE__ */ l.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: Ne(t) })
  ] }) }),
  r && /* @__PURE__ */ l.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ l.jsx("span", { children: /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ne(r)
      }
    ) })
  ] }) })
] });
tn.propTypes = {
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string
};
tn.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
var Xs = /* @__PURE__ */ ((e) => (e.COPY = "copy", e))(Xs || {});
const Zs = ({ type: e }) => e == "copy" ? /* @__PURE__ */ l.jsx("hr", { className: "copy-divider" }) : /* @__PURE__ */ l.jsx("hr", {}), Qs = Ie.div`
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
`, Js = () => /* @__PURE__ */ l.jsxs(Qs, { children: [
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {})
] }), el = Ie.section``, tl = wi(null), rl = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: i = (u) => u,
  dataFilter: s = (u) => u,
  maxItems: c
}) => {
  const [{ data: u, loading: d, error: f }, p] = Ci(), [m, w] = de([]), y = { ...e.dataSource, ...t };
  return we(() => {
    p(y == null ? void 0 : y.url);
  }, [y == null ? void 0 : y.url]), we(() => {
    const g = u == null ? void 0 : u.nodes.map(i), x = g == null ? void 0 : g.filter(
      (T) => s(T, t == null ? void 0 : t.filters)
    );
    w(c ? x == null ? void 0 : x.slice(0, c) : x);
  }, [u]), // Init the context to be used on its childrens
  /* @__PURE__ */ l.jsx(tl.Provider, { value: { feeds: m }, children: /* @__PURE__ */ l.jsxs(el, { children: [
    n,
    f ? /* @__PURE__ */ l.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      d && !(m != null && m.length) && /* @__PURE__ */ l.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ l.jsx(Js, {}) }),
      m != null && m.length ? a : !d && /* @__PURE__ */ l.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
rl.propTypes = {
  renderHeader: o.element,
  renderBody: o.element,
  maxItems: o.number,
  dataTransformer: o.func,
  dataFilter: o.func,
  noFeedText: o.string
};
const za = o.shape({
  color: o.oneOf(["white", "dark"]),
  text: o.string
}), Fa = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string
}), Dc = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string,
  size: o.string
}), nl = o.shape({
  url: o.string,
  filters: o.string
}), al = o.shape({
  header: za,
  ctaButton: Fa,
  dataSource: nl,
  maxItems: o.number
}), il = Ie.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, ol = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ l.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ l.jsx(il, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ l.jsx(
          ge,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: a.text
            },
            children: /* @__PURE__ */ l.jsx("a", { className: `btn btn-${a.color}`, href: a.url, children: a.text })
          }
        ) })
      ]
    }
  );
};
ol.propTypes = {
  defaultProps: al,
  header: za,
  ctaButton: Fa
};
const sl = ({ children: e }) => /* @__PURE__ */ l.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ l.jsx("div", { className: "col", children: e }) });
sl.propTypes = {
  children: o.element
};
const ll = Ie.img`
  width: 100%;
`;
function cl({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ l.jsx("div", { children: "TODO: to be implemented" });
}
function ul({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: a
}) {
  const i = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: ""
  }, s = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    none: "text-white",
    undefined: ""
  }, c = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: q("uds-hero", {
        [i[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ l.jsx(
          ll,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ l.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ l.jsx(
          "span",
          {
            className: q({
              [c[t.color]]: t.color,
              [s[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ l.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ l.jsx(
          "span",
          {
            className: q({
              [c[r.color]]: r.color,
              [s[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ l.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: q("content", {
              [c[a]]: a
            }),
            children: n.map((u, d) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ l.jsx("p", { children: u.text }, `content-${d}`)
            ))
          }
        )
      ]
    }
  );
}
const Wa = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => ul(e),
    "story-hero": () => cl(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Wa.propTypes = {
  type: o.oneOf(["heading-hero", "story-hero"]),
  image: Ni,
  title: pr,
  subTitle: pr,
  contents: o.arrayOf(pr),
  contentsColor: o.string
};
const We = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: a,
  onClick: i,
  ellipses: s,
  ariaLabel: c,
  children: u,
  ariaDisabled: d
}) => /* @__PURE__ */ l.jsx(
  "li",
  {
    className: q("page-item", {
      disabled: r,
      active: a,
      elipses: s
    }),
    children: t ? /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        "aria-label": c,
        className: q("page-link", {
          "page-link-icon": n
        }),
        onClick: i,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": d,
        children: [
          u,
          a && /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ l.jsx("span", { className: "page-link", "data-testid": "page-link", children: u })
  }
);
We.propTypes = {
  isClickeable: o.bool,
  disabled: o.bool,
  pageLinkIcon: o.bool,
  selectedPage: o.bool,
  dataId: o.string,
  onClick: o.func,
  children: o.node,
  ellipses: o.bool,
  ariaLabel: o.string,
  ariaDisabled: o.bool
};
We.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const dl = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, rn = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: a
}) => {
  const [i, s] = de(null);
  we(() => {
    s(r);
  }, [r]);
  const c = (f) => {
    ka({ ...dl, text: `page ${f}` });
  }, u = (f, p) => {
    const w = {
      first: 1,
      prev: i === 1 ? 1 : i - 1,
      next: i === n ? n : i + 1,
      last: n
    }[p] ?? p;
    s(w), c(w), a == null || a(f, w);
  }, d = () => {
    const f = Cn(
      i === n - 1,
      2,
      i === n ? 3 : 1
    ), p = Cn(
      i === 1,
      3,
      i === 2 ? 2 : 1
    ), m = Hn(
      i - f,
      i,
      n
    ), w = Hn(
      i,
      i + 1 + p,
      n
    ), y = [...m, ...w];
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      y[0] !== 1 && /* @__PURE__ */ l.jsx(
        We,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: i === 1,
          onClick: (g) => u(g, "first"),
          children: "1"
        }
      ),
      y[0] > 2 && /* @__PURE__ */ l.jsx(We, { ellipses: !0, children: "..." }),
      y.map((g) => /* @__PURE__ */ l.jsx(
        We,
        {
          ariaLabel: `Page ${g} of ${n}`,
          isClickeable: !0,
          selectedPage: i === g,
          onClick: (x) => u(x, g),
          children: g
        },
        g
      )),
      y[y.length - 1] < n - 1 && /* @__PURE__ */ l.jsx(We, { ellipses: !0, children: "..." }),
      y[y.length - 1] !== n && /* @__PURE__ */ l.jsx(
        We,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: i === n,
          onClick: (g) => u(g, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ l.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ l.jsxs(
    "ul",
    {
      className: q(
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
        /* @__PURE__ */ l.jsx(
          We,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: i === 1,
            pageLinkIcon: !0,
            onClick: (f) => u(f, "prev"),
            ariaDisabled: i === 1,
            ariaLabel: "Previous Page"
          }
        ),
        d(),
        /* @__PURE__ */ l.jsx(
          We,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: i === n,
            disabled: i === n,
            pageLinkIcon: !0,
            onClick: (f) => u(f, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
rn.propTypes = {
  /**
   * Type of pagination
   */
  type: o.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: o.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: o.number,
  /**
   * Total number of pages
   */
  totalPages: o.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: o.func.isRequired
};
rn.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
const aa = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ia = {
  OPEN: "open",
  CLOSE: "close"
}, fl = {
  LARGE: "large",
  SMALL: "small"
}, qa = (e) => e === fl.SMALL, Va = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [a, i] = de(!1), s = ga(), { isReact: c, isBootstrap: u } = Kt(), d = `info-layer-${s}`, f = qa(e), p = (m) => {
    (m.type === "click" || m.key === "Enter" || m.key === " ") && i(!a);
  };
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: q("info-layer", { show: a }),
      "data-testid": "info-layer",
      id: d,
      children: /* @__PURE__ */ l.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: q("header", {
              closed: f && !a
            }),
            children: [
              f && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ l.jsx("p", { dangerouslySetInnerHTML: Ne(t) }),
              /* @__PURE__ */ l.jsx(
                ge,
                {
                  gaData: {
                    ...aa,
                    text: "Expand ranking",
                    // TODO: for bootstrap can we use aria-expanded value of the button to populate the "action" field
                    action: a ? ia.OPEN : ia.CLOSE,
                    section: r
                  },
                  children: /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      "data-bs-toggle": u && "collapse",
                      "data-bs-target": u && `#${d}`,
                      onClick: c && p,
                      className: q("btn-expand", {
                        btn: f
                      }),
                      type: "button",
                      "aria-expanded": a,
                      "aria-controls": d,
                      children: [
                        f ? /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: r }) : /* @__PURE__ */ l.jsx("h4", { children: r }),
                        /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-up" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        !f && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ l.jsx("p", { dangerouslySetInnerHTML: Ne(t) }),
        n && /* @__PURE__ */ l.jsx(
          ge,
          {
            gaData: {
              ...aa,
              section: r,
              text: "read more"
            },
            children: /* @__PURE__ */ l.jsxs("a", { href: n, className: "read-more", children: [
              "Read more ",
              /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: r }),
              /* @__PURE__ */ l.jsx(
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
Va.propTypes = {
  imageSize: o.oneOf(["small", "large"]),
  body: o.string.isRequired,
  heading: o.string.isRequired,
  readMoreLink: o.string
};
const Ua = ({
  imageSize: e = "large",
  image: t,
  imageAlt: r,
  heading: n,
  body: a,
  readMoreLink: i = "",
  citation: s
}) => {
  const c = qa(e);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: q("card-ranking", {
        "large-image": !c,
        "small-image": c
      }),
      children: [
        c ? /* @__PURE__ */ l.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ l.jsx(dt, { src: t, alt: r, fetchPriority: "high" }) }) : /* @__PURE__ */ l.jsx(dt, { src: t, alt: r, fetchPriority: "high" }),
        c && /* @__PURE__ */ l.jsxs("div", { className: "citation", children: [
          /* @__PURE__ */ l.jsx("h4", { children: n }),
          /* @__PURE__ */ l.jsxs("p", { children: [
            "— ",
            s
          ] })
        ] }),
        /* @__PURE__ */ l.jsx(
          Va,
          {
            imageSize: e,
            body: a,
            heading: n,
            readMoreLink: i
          }
        )
      ]
    }
  );
};
Ua.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: o.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: o.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: o.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: o.string.isRequired,
  /**
   * Ranking card body content
   */
  body: o.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: o.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: o.string
};
var hl = /* @__PURE__ */ ((e) => (e.WARNING = "warning", e.INFO = "info", e.SUCCESS = "success", e.ERROR = "error", e))(hl || {});
const pl = ({
  type: e,
  dismissable: t,
  children: r
}) => {
  var d, f, p;
  const { isBootstrap: n, isReact: a } = Kt(), [i, s] = de(!0), c = () => s(!1), u = {
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
  return i && /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: q("alert", {
        "alert-dismissable": t,
        [`alert-${(d = u[e]) == null ? void 0 : d.alertClass}`]: e
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ l.jsx(
          "span",
          {
            title: (f = u[e]) == null ? void 0 : f.iconTitle,
            className: `fa fa-icon fa-${(p = u[e]) == null ? void 0 : p.iconName}`
          }
        ) }),
        /* @__PURE__ */ l.jsx("div", { className: "alert-content", children: r }),
        t && /* @__PURE__ */ l.jsx("div", { className: "alert-close", children: /* @__PURE__ */ l.jsx(
          Jt,
          {
            icon: ["fas", "times"],
            onClick: a && c,
            "data-bs-dismiss": n && "alert"
          }
        ) })
      ]
    }
  );
}, ml = Ie.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Ya = ({ gaData: e, hidePrev: t, hideNext: r, slideNav: n }) => /* @__PURE__ */ l.jsxs(ml, { children: [
  !t && /* @__PURE__ */ l.jsx(ge, { gaData: { ...e, text: "left chevron" }, children: /* @__PURE__ */ l.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: () => n(-1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ) }),
  !r && /* @__PURE__ */ l.jsx(ge, { gaData: { ...e, text: "right chevron" }, children: /* @__PURE__ */ l.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: () => n(1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  ) })
] });
Ya.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: o.object,
  hidePrev: o.bool,
  hideNext: o.bool,
  slideNav: o.func.isRequired
};
const Ga = va(function(t, r) {
  const {
    id: n,
    selected: a,
    title: i,
    selectTab: s,
    leftKeyPressed: c,
    rightKeyPressed: u,
    icon: d,
    gaData: f
  } = t, p = Qe(null);
  xi(
    r,
    () => ({
      focus() {
        p.current.focus();
      },
      scrollIntoView() {
        var g, x, T, O, j, N, b;
        const w = ((g = p.current) == null ? void 0 : g.offsetWidth) / 2 + p.current.offsetLeft, y = ((T = (x = p.current) == null ? void 0 : x.offsetParent) == null ? void 0 : T.scrollLeft) + ((j = (O = p.current) == null ? void 0 : O.offsetParent) == null ? void 0 : j.offsetWidth) / 2;
        (b = (N = p.current) == null ? void 0 : N.offsetParent) == null || b.scrollBy({
          left: w - y
        });
      }
    }),
    []
  );
  const m = (w) => {
    w.keyCode === 37 ? (w.preventDefault(), c()) : w.keyCode === 39 && (w.preventDefault(), u());
  };
  return /* @__PURE__ */ l.jsx(ge, { gaData: { ...f, text: i }, children: /* @__PURE__ */ l.jsxs(
    "a",
    {
      ref: p,
      className: `nav-item nav-link ${a ? "active" : ""}`,
      id: n,
      href: `#nav-${n}`,
      role: "tab",
      "aria-controls": `nav-${n}`,
      "aria-selected": a,
      onClick: (w) => s(w, n, i),
      onKeyDown: m,
      tabIndex: a ? "" : "-1",
      children: [
        i,
        " ",
        d && /* @__PURE__ */ l.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` })
      ]
    }
  ) });
});
Ga.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: o.object,
  id: o.string.isRequired,
  selected: o.bool.isRequired,
  title: o.string.isRequired,
  selectTab: o.func.isRequired,
  leftKeyPressed: o.func.isRequired,
  rightKeyPressed: o.func.isRequired,
  icon: o.arrayOf(o.string)
};
function gl() {
  const e = Qe({}), t = Si(
    (r) => (n) => {
      e.current[r] = n;
    },
    []
  );
  return [e, t];
}
const vl = ({ id: e, bgColor: t, selected: r, children: n }) => r && /* @__PURE__ */ l.jsx(
  "div",
  {
    className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: n
  }
);
vl.propTypes = {
  id: o.string.isRequired,
  bgColor: o.string,
  selected: o.bool,
  children: o.oneOfType([o.array, o.element])
};
const Ka = ({
  initialTab: e = "",
  children: t,
  bgColor: r = "",
  onTabChange: n = (a) => {
  }
}) => {
  const a = ne.Children.toArray(t), i = Qe(!1), [s, c] = de(
    e && e !== "null" ? e : a[0].props.id
  ), u = Qe(null), [d, f] = gl(), { isReact: p, isBootstrap: m } = Kt(), w = (M) => {
    var X;
    n(M), (X = d.current[M]) == null || X.focus(), c(M);
  }, [y, g] = de(0), [x, T] = de();
  we(() => {
    const M = () => {
      g(u.current.scrollLeft);
    };
    return u.current.addEventListener("scroll", M), M(), () => {
      u.current && u.current.removeEventListener("scroll", M);
    };
  }, [x]), we(() => {
    const M = () => {
      T(
        u.current.scrollWidth - u.current.offsetWidth
      );
    };
    return window.addEventListener("resize", M), M(), () => {
      u.current && window.removeEventListener("resize", M);
    };
  }, []), we(() => {
    var M;
    (M = d.current[s]) == null || M.scrollIntoView();
  }, [s]), we(() => {
    i.current && e && e !== "null" && s !== e && c(e);
  }, [e]), we(() => {
    i.current = !0;
  }, []);
  const O = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, j = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, N = a.map((M) => ne.cloneElement(M, {
    bgColor: r,
    selected: s === M.props.id
  })), b = (M) => {
    const X = u.current, ke = X.scrollWidth - X.clientWidth;
    let G = X.scrollLeft + 200 * M;
    G = Math.max(0, Math.min(ke, G)), X.scrollTo({
      left: G,
      behavior: "smooth"
    });
  }, H = (M, X, ke) => {
    M.preventDefault(), w(X);
  }, fe = (M = !0) => {
    const X = a.length, ke = M ? 1 : -1, oe = a.findIndex((ve) => ve.props.id === s), G = a[(X + oe + ke) % X].props.id;
    w(G);
  };
  let ie = "uds-tabbed-panels";
  return r === "bg-dark" && (ie += " uds-tabbed-panels-dark"), /* @__PURE__ */ l.jsxs("div", { className: r, children: [
    /* @__PURE__ */ l.jsxs("nav", { className: ie, children: [
      /* @__PURE__ */ l.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: u, children: a.map((M, X) => /* @__PURE__ */ l.jsx(
        Ga,
        {
          ref: f(M.props.id),
          id: M.props.id,
          title: M.props.title,
          selected: s === M.props.id,
          gaData: j,
          selectTab: p && H,
          leftKeyPressed: p && (() => fe(!1)),
          rightKeyPressed: p && (() => fe()),
          icon: M.props.icon,
          index: X
        },
        M.props.id
      )) }),
      /* @__PURE__ */ l.jsx(
        Ya,
        {
          hidePrev: y <= 0,
          hideNext: y >= x,
          gaData: O,
          slideNav: p && b
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: N
      }
    )
  ] });
};
Ka.propTypes = {
  initialTab: o.string,
  children: o.arrayOf(o.element).isRequired,
  bgColor: o.string,
  onTabChange: o.func
};
const nn = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, i;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${Lt(n.containerCssClass)}`,
      children: [
        e && /* @__PURE__ */ l.jsx(
          dt,
          {
            src: e,
            alt: t,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ l.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ l.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ l.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          r.title && /* @__PURE__ */ l.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ l.jsx("span", { className: Lt(n.titleCssClass), children: r.title }) }),
          r.content && /* @__PURE__ */ l.jsx(
            "p",
            {
              className: Lt(n.contentCssClass),
              "data-testid": "testimonial-content",
              children: r.content
            }
          ),
          (!!((a = r.cite) != null && a.name) || !!((i = r.cite) != null && i.description)) && /* @__PURE__ */ l.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ l.jsx("cite", { className: "name", children: r.cite.name }),
            r.cite && /* @__PURE__ */ l.jsx("cite", { className: "description", children: r.cite.description })
          ] })
        ] })
      ]
    }
  );
};
nn.propTypes = {
  quote: o.shape({
    title: o.string,
    content: o.string,
    cite: o.shape({
      name: o.string,
      description: o.string
    })
  }).isRequired,
  imageSource: o.string,
  imageAltText: o.string,
  itemStyle: o.shape({
    containerCssClass: o.arrayOf(o.string),
    titleCssClass: o.arrayOf(o.string),
    contentCssClass: o.arrayOf(o.string)
  })
};
let yl = 0;
const bl = ({
  title: e,
  content: t,
  triggerElement: r
}) => {
  const [n] = de(`tooltip-${yl++}`), a = Qe(null);
  return /* @__PURE__ */ l.jsxs("span", { className: "uds-tooltip-container", children: [
    ne.cloneElement(r, {
      ref: a,
      "aria-describedby": n,
      tabindex: 0
    }),
    /* @__PURE__ */ l.jsxs("div", { role: "tooltip", className: "uds-tooltip-description", id: n, children: [
      e && /* @__PURE__ */ l.jsx("span", { className: "uds-tooltip-heading", children: e }),
      t
    ] })
  ] });
}, wl = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, xl = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: a,
  controls: i = !0
}) => {
  const s = Qe(null);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: q(`uds-video-container ${a}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ l.jsx(ge, { gaData: { ...wl, section: n }, children: /* @__PURE__ */ l.jsxs(
          "video",
          {
            ref: s,
            title: n,
            playsInline: !0,
            controls: i || !0,
            children: [
              /* @__PURE__ */ l.jsx("source", { src: e }),
              /* @__PURE__ */ l.jsx(
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
        r && /* @__PURE__ */ l.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ l.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, Sl = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: q(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ l.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ l.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ l.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ l.jsx("figcaption", { children: t }) })
    ]
  }
), Xa = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: a = "",
    caption: i,
    className: s,
    controls: c = !0
  } = e;
  return t === "youtube" ? Sl({ url: r, title: a, caption: i, className: s }) : xl({
    url: r,
    vttUrl: n,
    title: a,
    caption: i,
    className: s,
    controls: c
  });
};
Xa.propTypes = {
  type: o.oneOf(["video", "youtube"]),
  url: o.string,
  vttUrl: o.string,
  title: o.string,
  className: o.string,
  caption: o.string,
  controls: o.bool
};
const _l = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, an = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ l.jsx(
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
an.propTypes = {
  children: o.oneOfType([
    o.element,
    o.arrayOf(o.element)
  ]).isRequired
};
const Za = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ l.jsx(ge, { gaData: _l, children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ l.jsx(an, { children: t });
};
Za.propTypes = {
  buttonCount: o.number.isRequired
};
const Qa = ({ imageItems: e, onItemClick: t = () => null }) => {
  const r = (a, i) => {
    const { ariaSelected: s } = a.currentTarget.dataset;
    a.currentTarget.dataset.ariaSelected = String(!s), a.stopPropagation(), t(i);
  }, n = e.map((a, i) => /* @__PURE__ */ l.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${i}`,
      "aria-label": `Slide view ${i + 1}`,
      "aria-selected": "false",
      onClick: (s) => r(s, i),
      onKeyDown: (s) => r(s, i),
      children: /* @__PURE__ */ l.jsx(
        "img",
        {
          src: a,
          alt: `Slide ${i + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${i}`
  ));
  return /* @__PURE__ */ l.jsx(an, { children: n });
};
Qa.propTypes = {
  imageItems: o.arrayOf(o.string).isRequired,
  onItemClick: o.func
};
const on = ({ onClick: e = () => null }) => /* @__PURE__ */ l.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
on.propTypes = {
  onClick: o.func
};
const sn = ({ onClick: e = () => null }) => /* @__PURE__ */ l.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ l.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
sn.propTypes = {
  onClick: o.func
};
const oa = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ln = ({ children: e = null }) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
ln.propTypes = {
  children: o.arrayOf(o.element)
};
const Ja = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ l.jsxs(ln, { children: [
  /* @__PURE__ */ l.jsx(ge, { gaData: { ...oa, text: "left chevron" }, children: /* @__PURE__ */ l.jsx(sn, { onClick: e }) }),
  t,
  /* @__PURE__ */ l.jsx(ge, { gaData: { ...oa, text: "right chevron" }, children: /* @__PURE__ */ l.jsx(on, { onClick: e }) })
] });
Ja.propTypes = {
  children: o.element,
  onClick: o.func
};
const ei = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ l.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ l.jsx("ul", { className: "glide__slides", children: t });
};
ei.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: o.arrayOf(o.object)
};
function sa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function la(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sa(Object(r), !0).forEach(function(n) {
      kl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $t(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $t = function(t) {
    return typeof t;
  } : $t = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $t(e);
}
function tr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function rr(e, t, r) {
  return t && Tl(e.prototype, t), e;
}
function kl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ol(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Hr(e, t);
}
function ft(e) {
  return ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ft(e);
}
function Hr(e, t) {
  return Hr = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Hr(e, t);
}
function Al() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nl(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jl(e);
}
function El(e) {
  var t = Al();
  return function() {
    var n = ft(e), a;
    if (t) {
      var i = ft(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Nl(this, a);
  };
}
function Cl(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = ft(e), e !== null); )
    ;
  return e;
}
function Ht() {
  return typeof Reflect < "u" && Reflect.get ? Ht = Reflect.get : Ht = function(t, r, n) {
    var a = Cl(t, r);
    if (a) {
      var i = Object.getOwnPropertyDescriptor(a, r);
      return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
    }
  }, Ht.apply(this, arguments);
}
var Rl = {
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
function Ye(e) {
  console.error("[Glide warn]: ".concat(e));
}
function me(e) {
  return parseInt(e);
}
function Ll(e) {
  return parseFloat(e);
}
function Br(e) {
  return typeof e == "string";
}
function ht(e) {
  var t = $t(e);
  return t === "function" || t === "object" && !!e;
}
function Yt(e) {
  return typeof e == "function";
}
function ti(e) {
  return typeof e > "u";
}
function zr(e) {
  return e.constructor === Array;
}
function Il(e, t, r) {
  var n = {};
  for (var a in t)
    Yt(t[a]) ? n[a] = t[a](e, n, r) : Ye("Extension must be a function");
  for (var i in n)
    Yt(n[i].mount) && n[i].mount();
  return n;
}
function J(e, t, r) {
  Object.defineProperty(e, t, r);
}
function Pl(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Fr(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = la(la({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var Dl = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    tr(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return rr(e, [{
    key: "on",
    value: function(r, n) {
      if (zr(r)) {
        for (var a = 0; a < r.length; a++)
          this.on(r[a], n);
        return;
      }
      this.hop.call(this.events, r) || (this.events[r] = []);
      var i = this.events[r].push(n) - 1;
      return {
        remove: function() {
          delete this.events[r][i];
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
    value: function(r, n) {
      if (zr(r)) {
        for (var a = 0; a < r.length; a++)
          this.emit(r[a], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(i) {
        i(n || {});
      });
    }
  }]), e;
}(), Ml = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    tr(this, e), this._c = {}, this._t = [], this._e = new Dl(), this.disabled = !1, this.selector = t, this.settings = Fr(Rl, r), this.index = this.settings.startAt;
  }
  return rr(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), ht(r) ? this._c = Il(this, r, this._e) : Ye("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return zr(r) ? this._t = r : Ye("You need to provide a array on `mutate()`"), this;
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
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = Fr(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
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
    value: function(r) {
      return this._c.Run.make(r), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(r) {
      return this._c.Transition.disable(), this._c.Move.make(r), this;
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
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return r && (this.settings.autoplay = r), this._e.emit("play"), this;
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
    value: function(r, n) {
      return this._e.on(r, n), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(r) {
      return this.settings.type === r;
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
    set: function(r) {
      ht(r) ? this._o = r : Ye("Options must be an `object` instance.");
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
    set: function(r) {
      this._i = me(r);
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
    set: function(r) {
      this._d = !!r;
    }
  }]), e;
}();
function $l(e, t, r) {
  var n = {
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
    make: function(d) {
      var f = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = d, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        f.isStart() && r.emit("run.start", f.move), f.isEnd() && r.emit("run.end", f.move), f.isOffset() && (f._o = !1, r.emit("run.offset", f.move)), r.emit("run.after", f.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var d = this.move, f = this.length, p = d.steps, m = d.direction, w = 1;
      if (m === "=") {
        if (e.settings.bound && me(p) > f) {
          e.index = f;
          return;
        }
        e.index = p;
        return;
      }
      if (m === ">" && p === ">") {
        e.index = f;
        return;
      }
      if (m === "<" && p === "<") {
        e.index = 0;
        return;
      }
      if (m === "|" && (w = e.settings.perView || 1), m === ">" || m === "|" && p === ">") {
        var y = a(w);
        y > f && (this._o = !0), e.index = i(y, w);
        return;
      }
      if (m === "<" || m === "|" && p === "<") {
        var g = s(w);
        g < 0 && (this._o = !0), e.index = c(g, w);
        return;
      }
      Ye("Invalid direction pattern [".concat(m).concat(p, "] has been used"));
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
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return d ? this._o ? d === "|>" ? this.move.direction === "|" && this.move.steps === ">" : d === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === d : !1 : this._o;
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
  function a(u) {
    var d = e.index;
    return e.isType("carousel") ? d + u : d + (u - d % u);
  }
  function i(u, d) {
    var f = n.length;
    return u <= f ? u : e.isType("carousel") ? u - (f + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? f : 0 : n.isBound() ? f : Math.floor(f / d) * d;
  }
  function s(u) {
    var d = e.index;
    if (e.isType("carousel"))
      return d - u;
    var f = Math.ceil(d / u);
    return (f - 1) * u;
  }
  function c(u, d) {
    var f = n.length;
    return u >= 0 ? u : e.isType("carousel") ? u + (f + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? f : Math.floor(f / d) * d : 0;
  }
  return J(n, "move", {
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
    set: function(d) {
      var f = d.substr(1);
      this._m = {
        direction: d.substr(0, 1),
        steps: f ? me(f) ? me(f) : f : 0
      };
    }
  }), J(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var d = e.settings, f = t.Html.slides.length;
      return this.isBound() ? f - 1 - (me(d.perView) - 1) + me(d.focusAt) : f - 1;
    }
  }), J(n, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), n;
}
function ca() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function nr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, i, s, c = 0, u = function() {
    c = r.leading === !1 ? 0 : ca(), n = null, s = e.apply(a, i), n || (a = i = null);
  }, d = function() {
    var p = ca();
    !c && r.leading === !1 && (c = p);
    var m = t - (p - c);
    return a = this, i = arguments, m <= 0 || m > t ? (n && (clearTimeout(n), n = null), c = p, s = e.apply(a, i), n || (a = i = null)) : !n && r.trailing !== !1 && (n = setTimeout(u, m)), s;
  };
  return d.cancel = function() {
    clearTimeout(n), c = 0, n = a = i = null;
  }, d;
}
var Ct = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Hl(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(i) {
      for (var s = 0, c = i.length; s < c; s++) {
        var u = i[s].style, d = t.Direction.value;
        s !== 0 ? u[Ct[d][0]] = "".concat(this.value / 2, "px") : u[Ct[d][0]] = "", s !== i.length - 1 ? u[Ct[d][1]] = "".concat(this.value / 2, "px") : u[Ct[d][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(i) {
      for (var s = 0, c = i.length; s < c; s++) {
        var u = i[s].style;
        u.marginLeft = "", u.marginRight = "";
      }
    }
  };
  return J(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return me(e.settings.gap);
    }
  }), J(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), J(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var i = e.settings.perView;
      return n.value * (i - 1) / i;
    }
  }), r.on(["build.after", "update"], nr(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function ri(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Wr(e) {
  return Array.prototype.slice.call(e);
}
var Bl = '[data-glide-el="track"]';
function zl(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Bl), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Wr(this.wrapper.children).filter(function(i) {
        return !i.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return J(n, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return n._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(i) {
      Br(i) && (i = document.querySelector(i)), i !== null ? n._r = i : Ye("Root element must be a existing Html node");
    }
  }), J(n, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return n._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(i) {
      n._t = i;
    }
  }), J(n, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return n.track.children[0];
    }
  }), r.on("update", function() {
    n.collectSlides();
  }), n;
}
function Fl(e, t, r) {
  var n = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.peek;
    }
  };
  return J(n, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(i) {
      ht(i) ? (i.before = me(i.before), i.after = me(i.after)) : i = me(i), n._v = i;
    }
  }), J(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var i = n.value, s = e.settings.perView;
      return ht(i) ? i.before / s + i.after / s : i * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Wl(e, t, r) {
  var n = {
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
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: i.value
        });
      });
    }
  };
  return J(n, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return n._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(i) {
      n._o = ti(i) ? 0 : me(i);
    }
  }), J(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), J(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var i = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + i : s - i;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function ql(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var i = "".concat(this.slideWidth, "px"), s = t.Html.slides, c = 0; c < s.length; c++)
        s[c].style.width = i;
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
      for (var i = t.Html.slides, s = 0; s < i.length; s++)
        i[s].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return J(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), J(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), J(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), J(n, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return n.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
    }
  }), r.on(["build.before", "resize", "update"], function() {
    n.setupSlides(), n.setupWrapper();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function Vl(e, t, r) {
  var n = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      r.emit("build.before"), this.typeClass(), this.activeClass(), r.emit("build.after");
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
      var i = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(i.slide.active), ri(s).forEach(function(c) {
        c.classList.remove(i.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var i = e.settings.classes, s = i.type, c = i.slide;
      t.Html.root.classList.remove(s[e.settings.type]), t.Html.slides.forEach(function(u) {
        u.classList.remove(c.active);
      });
    }
  };
  return r.on(["destroy", "update"], function() {
    n.removeClasses();
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), r.on("move.after", function() {
    n.activeClass();
  }), n;
}
function Ul(e, t, r) {
  var n = {
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
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, c = e.settings, u = c.perView, d = c.classes, f = c.cloningRatio;
      if (s.length > 0)
        for (var p = +!!e.settings.peek, m = u + p + Math.round(u / 2), w = s.slice(0, m).reverse(), y = s.slice(m * -1), g = 0; g < Math.max(f, Math.floor(u / s.length)); g++) {
          for (var x = 0; x < w.length; x++) {
            var T = w[x].cloneNode(!0);
            T.classList.add(d.slide.clone), i.push(T);
          }
          for (var O = 0; O < y.length; O++) {
            var j = y[O].cloneNode(!0);
            j.classList.add(d.slide.clone), i.unshift(j);
          }
        }
      return i;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var i = this.items, s = t.Html, c = s.wrapper, u = s.slides, d = Math.floor(i.length / 2), f = i.slice(0, d).reverse(), p = i.slice(d * -1).reverse(), m = "".concat(t.Sizes.slideWidth, "px"), w = 0; w < p.length; w++)
        c.appendChild(p[w]);
      for (var y = 0; y < f.length; y++)
        c.insertBefore(f[y], u[0]);
      for (var g = 0; g < i.length; g++)
        i[g].style.width = m;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var i = this.items, s = 0; s < i.length; s++)
        t.Html.wrapper.removeChild(i[s]);
    }
  };
  return J(n, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (t.Sizes.slideWidth + t.Gaps.value) * n.items.length;
    }
  }), r.on("update", function() {
    n.remove(), n.mount(), n.append();
  }), r.on("build.before", function() {
    e.isType("carousel") && n.append();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
var Je = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    tr(this, e), this.listeners = t;
  }
  return rr(e, [{
    key: "on",
    value: function(r, n, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Br(r) && (r = [r]);
      for (var s = 0; s < r.length; s++)
        this.listeners[r[s]] = a, n.addEventListener(r[s], this.listeners[r[s]], i);
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
    value: function(r, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      Br(r) && (r = [r]);
      for (var i = 0; i < r.length; i++)
        n.removeEventListener(r[i], this.listeners[r[i]], a);
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
function Yl(e, t, r) {
  var n = new Je(), a = {
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
      n.on("resize", window, nr(function() {
        r.emit("resize");
      }, e.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("resize", window);
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
var Gl = ["ltr", "rtl"], Kl = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Xl(e, t, r) {
  var n = {
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
    resolve: function(i) {
      var s = i.slice(0, 1);
      return this.is("rtl") ? i.split(s).join(Kl[s]) : i;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(i) {
      return this.value === i;
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
  return J(n, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(i) {
      Gl.indexOf(i) > -1 ? n._v = i : Ye("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Zl(e, t) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return t.Direction.is("rtl") ? -n : n;
    }
  };
}
function Ql(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = Math.floor(n / t.Sizes.slideWidth);
      return n + t.Gaps.value * a;
    }
  };
}
function Jl(e, t) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return n + t.Clones.grow / 2;
    }
  };
}
function ec(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      if (e.settings.focusAt >= 0) {
        var a = t.Peek.value;
        return ht(a) ? n - a.before : n - a;
      }
      return n;
    }
  };
}
function tc(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = t.Gaps.value, i = t.Sizes.width, s = e.settings.focusAt, c = t.Sizes.slideWidth;
      return s === "center" ? n - (i / 2 - c / 2) : n - c * s - a * s;
    }
  };
}
function rc(e, t, r) {
  var n = [Ql, Jl, ec, tc].concat(e._t, [Zl]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(i) {
      for (var s = 0; s < n.length; s++) {
        var c = n[s];
        Yt(c) && Yt(c().modify) ? i = c(e, t, r).modify(i) : Ye("Transformer should be a function that returns an object with `modify()` method");
      }
      return i;
    }
  };
}
function nc(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var s = rc(e, t).mutate(i), c = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = c, t.Html.wrapper.style.webkitTransform = c, t.Html.wrapper.style.transform = c;
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
      var i = t.Sizes.length, s = e.index, c = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (s - c) : (s + c) % i;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var i = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i * -1 : i;
    }
  };
  return r.on("move", function(a) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(a.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var i = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(i - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function ac(e, t, r) {
  var n = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(s) {
      var c = e.settings;
      return n ? "".concat(s, " 0ms ").concat(c.animationTimingFunc) : "".concat(s, " ").concat(this.duration, "ms ").concat(c.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(s);
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
    after: function(s) {
      setTimeout(function() {
        s();
      }, this.duration);
    },
    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function() {
      n = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      n = !0, this.set();
    }
  };
  return J(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var s = e.settings;
      return e.isType("slider") && t.Run.offset ? s.rewindDuration : s.animationDuration;
    }
  }), r.on("move", function() {
    a.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    a.disable();
  }), r.on("run", function() {
    a.enable();
  }), r.on("destroy", function() {
    a.remove();
  }), a;
}
var ni = !1;
try {
  var ua = Object.defineProperty({}, "passive", {
    get: function() {
      ni = !0;
    }
  });
  window.addEventListener("testPassive", null, ua), window.removeEventListener("testPassive", null, ua);
} catch {
}
var qr = ni, Rt = ["touchstart", "mousedown"], da = ["touchmove", "mousemove"], fa = ["touchend", "touchcancel", "mouseup", "mouseleave"], ha = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function ic(e, t, r) {
  var n = new Je(), a = 0, i = 0, s = 0, c = !1, u = qr ? {
    passive: !0
  } : !1, d = {
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
    start: function(p) {
      if (!c && !e.disabled) {
        this.disable();
        var m = this.touches(p);
        a = null, i = me(m.pageX), s = me(m.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(p) {
      if (!e.disabled) {
        var m = e.settings, w = m.touchAngle, y = m.touchRatio, g = m.classes, x = this.touches(p), T = me(x.pageX) - i, O = me(x.pageY) - s, j = Math.abs(T << 2), N = Math.abs(O << 2), b = Math.sqrt(j + N), H = Math.sqrt(N);
        if (a = Math.asin(H / b), a * 180 / Math.PI < w)
          p.stopPropagation(), t.Move.make(T * Ll(y)), t.Html.root.classList.add(g.dragging), r.emit("swipe.move");
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
    end: function(p) {
      if (!e.disabled) {
        var m = e.settings, w = m.perSwipe, y = m.touchAngle, g = m.classes, x = this.touches(p), T = this.threshold(p), O = x.pageX - i, j = a * 180 / Math.PI;
        this.enable(), O > T && j < y ? t.Run.make(t.Direction.resolve("".concat(w, "<"))) : O < -T && j < y ? t.Run.make(t.Direction.resolve("".concat(w, ">"))) : t.Move.make(), t.Html.root.classList.remove(g.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var p = this, m = e.settings, w = m.swipeThreshold, y = m.dragThreshold;
      w && n.on(Rt[0], t.Html.wrapper, function(g) {
        p.start(g);
      }, u), y && n.on(Rt[1], t.Html.wrapper, function(g) {
        p.start(g);
      }, u);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Rt[0], t.Html.wrapper, u), n.off(Rt[1], t.Html.wrapper, u);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var p = this;
      n.on(da, t.Html.wrapper, nr(function(m) {
        p.move(m);
      }, e.settings.throttle), u);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(da, t.Html.wrapper, u);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var p = this;
      n.on(fa, t.Html.wrapper, function(m) {
        p.end(m);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(fa, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(p) {
      return ha.indexOf(p.type) > -1 ? p : p.touches[0] || p.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(p) {
      var m = e.settings;
      return ha.indexOf(p.type) > -1 ? m.dragThreshold : m.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return c = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return c = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    d.unbindSwipeStart(), d.unbindSwipeMove(), d.unbindSwipeEnd(), n.destroy();
  }), d;
}
function oc(e, t, r) {
  var n = new Je(), a = {
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
      n.on("dragstart", t.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("dragstart", t.Html.wrapper);
    },
    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function(s) {
      s.preventDefault();
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
function sc(e, t, r) {
  var n = new Je(), a = !1, i = !1, s = {
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
      n.on("click", t.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("click", t.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(u) {
      i && (u.stopPropagation(), u.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (i = !0, !a) {
        for (var u = 0; u < this.items.length; u++)
          this.items[u].draggable = !1;
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
      if (i = !1, a) {
        for (var u = 0; u < this.items.length; u++)
          this.items[u].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return J(s, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return s._a;
    }
  }), r.on("swipe.move", function() {
    s.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      s.attach();
    });
  }), r.on("destroy", function() {
    s.attach(), s.unbind(), n.destroy();
  }), s;
}
var lc = '[data-glide-el="controls[nav]"]', cn = '[data-glide-el^="controls"]', cc = "".concat(cn, ' [data-glide-dir*="<"]'), uc = "".concat(cn, ' [data-glide-dir*=">"]');
function dc(e, t, r) {
  var n = new Je(), a = qr ? {
    passive: !0
  } : !1, i = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(lc), this._c = t.Html.root.querySelectorAll(cn), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(cc),
        next: t.Html.root.querySelectorAll(uc)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var c = 0; c < this._n.length; c++)
        this.addClass(this._n[c].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var c = 0; c < this._n.length; c++)
        this.removeClass(this._n[c].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(c) {
      var u = e.settings, d = c[e.index];
      d && (d.classList.add(u.classes.nav.active), ri(d).forEach(function(f) {
        f.classList.remove(u.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(c) {
      var u = c[e.index];
      u == null || u.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var c = i._arrowControls.next, u = i._arrowControls.previous;
        this.resetArrowState(c, u), e.index === 0 && this.disableArrow(u), e.index === t.Run.length && this.disableArrow(c);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var c = e.settings, u = arguments.length, d = new Array(u), f = 0; f < u; f++)
        d[f] = arguments[f];
      d.forEach(function(p) {
        Wr(p).forEach(function(m) {
          m.classList.remove(c.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var c = e.settings, u = arguments.length, d = new Array(u), f = 0; f < u; f++)
        d[f] = arguments[f];
      d.forEach(function(p) {
        Wr(p).forEach(function(m) {
          m.classList.add(c.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var c = 0; c < this._c.length; c++)
        this.bind(this._c[c].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var c = 0; c < this._c.length; c++)
        this.unbind(this._c[c].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(c) {
      for (var u = 0; u < c.length; u++)
        n.on("click", c[u], this.click), n.on("touchstart", c[u], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(c) {
      for (var u = 0; u < c.length; u++)
        n.off(["click", "touchstart"], c[u]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(c) {
      !qr && c.type === "touchstart" && c.preventDefault();
      var u = c.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(u));
    }
  };
  return J(i, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return i._c;
    }
  }), r.on(["mount.after", "move.after"], function() {
    i.setActive();
  }), r.on(["mount.after", "run"], function() {
    i.setArrowState();
  }), r.on("destroy", function() {
    i.removeBindings(), i.removeActive(), n.destroy();
  }), i;
}
function fc(e, t, r) {
  var n = new Je(), a = {
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
      n.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(s) {
      var c = e.settings.perSwipe, u = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(s.code) && t.Run.make(t.Direction.resolve("".concat(c).concat(u[s.code])));
    }
  };
  return r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function hc(e, t, r) {
  var n = new Je(), a = {
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
      var s = this;
      this._e && (this.enable(), e.settings.autoplay && ti(this._i) && (this._i = setInterval(function() {
        s.stop(), t.Run.make(">"), s.start(), r.emit("autoplay");
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
      var s = this;
      n.on("mouseover", t.Html.root, function() {
        s._e && s.stop();
      }), n.on("mouseout", t.Html.root, function() {
        s._e && s.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      n.off(["mouseover", "mouseout"], t.Html.root);
    }
  };
  return J(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var s = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return me(s || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    a.stop();
  }), r.on(["pause", "destroy"], function() {
    a.disable(), a.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    a.start();
  }), r.on(["play"], function() {
    a.enable(), a.start();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function pa(e) {
  return ht(e) ? Pl(e) : (Ye("Breakpoints option must be an object"), {});
}
function pc(e, t, r) {
  var n = new Je(), a = e.settings, i = pa(a.breakpoints), s = Object.assign({}, a), c = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(d) {
      if (typeof window.matchMedia < "u") {
        for (var f in d)
          if (d.hasOwnProperty(f) && window.matchMedia("(max-width: ".concat(f, "px)")).matches)
            return d[f];
      }
      return s;
    }
  };
  return Object.assign(a, c.match(i)), n.on("resize", window, nr(function() {
    e.settings = Fr(a, c.match(i));
  }, e.settings.throttle)), r.on("update", function() {
    i = pa(i), s = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), c;
}
var mc = {
  // Required
  Html: zl,
  Translate: nc,
  Transition: ac,
  Direction: Xl,
  Peek: Fl,
  Sizes: ql,
  Gaps: Hl,
  Move: Wl,
  Clones: Ul,
  Resize: Yl,
  Build: Vl,
  Run: $l,
  // Optional
  Swipe: ic,
  Images: oc,
  Anchors: sc,
  Controls: dc,
  Keyboard: fc,
  Autoplay: hc,
  Breakpoints: pc
}, gc = /* @__PURE__ */ function(e) {
  Ol(r, e);
  var t = El(r);
  function r() {
    return tr(this, r), t.apply(this, arguments);
  }
  return rr(r, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Ht(ft(r.prototype), "mount", this).call(this, Object.assign({}, mc, a));
    }
  }]), r;
}(Ml);
function vc(e) {
  let t, r, n;
  switch (e) {
    case 3:
      t = 1, r = 2, n = 3;
      break;
    case 2:
      t = 1, r = 2, n = 2;
      break;
    case 1:
    default:
      t = 1, r = 1, n = 1;
  }
  return {
    perViewSm: t,
    perViewMd: r,
    perViewLg: n
  };
}
function yc(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: i, perViewLg: s } = vc(e), c = r ? 24 : 0, u = r ? { before: 48, after: 48 } : 0, d = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: c,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: n ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: s,
    // Can be overwritten at breakpoints
    peek: d,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: u
      },
      768: {
        // BS4 md
        perView: i,
        peek: u
      },
      992: {
        // BS4 lg
        perView: s,
        peek: u
      },
      1260: {
        // BS4 xl
        perView: s,
        peek: u
      },
      1400: {
        perView: s,
        peek: d
      },
      1920: {
        perView: s,
        peek: d
      }
    }
  };
}
function bc(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), i = e.querySelector(".glide__track"), s = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const c = ["slider-start", "slider-mid", "slider-end"], u = "glide__arrow--disabled";
  i == null || i.classList.remove(...c), s == null || s.classList.remove(...c), t === 0 ? (i == null || i.classList.add("slider-start"), s == null || s.classList.add("slider-start"), n.classList.add(u), a.classList.remove(u)) : t >= r - 1 ? (i == null || i.classList.add("slider-end"), s == null || s.classList.add("slider-end"), n.classList.remove(u), a.classList.add(u)) : (i == null || i.classList.add("slider-mid"), s == null || s.classList.add("slider-mid"), n.classList.remove(u), a.classList.remove(u));
}
function wc(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, i = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((s, c) => {
    c < a || c > i ? (s.setAttribute("aria-hidden", "true"), s.setAttribute("tabindex", "-1"), s.setAttribute("inert", "")) : (s.setAttribute("aria-hidden", "false"), s.removeAttribute("tabindex"), s.removeAttribute("inert"));
  });
}
function xc({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: i = !0,
  isDraggable: s
}) {
  const c = yc(t, n, i, s), u = new gc(`#${e}`, c);
  let d = document.querySelector(`#${e}`);
  return d.addEventListener("keyup", (f) => {
    const p = f;
    p.keyCode === 39 ? u.go(">") : p.keyCode === 37 ? u.go("<") : p.keyCode === 13 && u.go(document.activeElement.dataset.glideDir);
  }), u.on("build.before", () => {
    d = document.querySelector(`#${e}`), d && d.classList.add("slider-start");
  }), u.on("move", () => {
    if (d = document.querySelector(`#${e}`), !d) return;
    const f = u.index;
    wc(d, f, t);
    const p = d.querySelector(".navigation-slider"), m = d.querySelector(".image-navigator-images");
    if (p && m) {
      const w = p.querySelectorAll(
        ".bullet-image-container"
      ), y = p.clientWidth, g = 82, x = w[f], T = m.getBoundingClientRect().x, O = p.getBoundingClientRect().x - T, j = x.getBoundingClientRect().x - T, N = x.getBoundingClientRect().x + x.getBoundingClientRect().width - T;
      if (f === 0 || j <= 0 + g)
        p.style.left = `${O - j + g}px`;
      else if (N >= y - g) {
        const b = N - y;
        p.style.left = `${O - b - g}px`;
      }
    }
    bc(d, f, r), d.setAttribute("data-current-index", f), a && a(f);
  }), u.mount(), u;
}
function Sc(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const xt = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: i,
  role: s,
  ariaLabelledBy: c,
  isFullWidth: u,
  removeSideBackground: d = !1,
  hasNavButtons: f = !0,
  hasPositionIndicators: p = !0,
  imageAutoSize: m = !0,
  onItemClick: w = () => null,
  hasPeek: y = !0,
  isDraggable: g = !0,
  hasShadow: x = !0
}) => {
  const T = `glide-${Math.ceil(Math.random() * 1e4)}`, O = Sc(n.length, e);
  return we(() => {
    xc({
      instanceName: T,
      perView: e,
      buttonCount: O,
      isFullWidth: u,
      onItemClick: w,
      hasPeek: y,
      isDraggable: g
    });
  }, [
    T,
    e,
    O,
    u,
    w,
    y,
    g
  ]), /* @__PURE__ */ l.jsxs(
    "div",
    {
      role: s,
      "aria-labelledby": c,
      className: `glide ${a}`,
      id: T,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": d,
      "data-image-auto-size": m,
      "data-has-shadow": x,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ l.jsx(ei, { carouselItems: n }) }),
        i ? (
          // @ts-ignore
          /* @__PURE__ */ l.jsx(i, { instanceName: T })
        ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          p && /* @__PURE__ */ l.jsx(Za, { buttonCount: O }),
          f && /* @__PURE__ */ l.jsx(Ja, {})
        ] })
      ]
    }
  );
};
xt.propTypes = {
  perView: o.number,
  width: o.string,
  maxWidth: o.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: o.arrayOf(o.object).isRequired,
  cssClass: o.string,
  CustomNavComponent: o.func,
  role: o.string,
  ariaLabelledBy: o.string,
  onItemClick: o.func,
  isFullWidth: o.bool,
  removeSideBackground: o.bool,
  hasNavButtons: o.bool,
  hasPositionIndicators: o.bool,
  imageAutoSize: o.bool,
  hasPeek: o.bool,
  isDraggable: o.bool,
  hasShadow: o.bool
};
const _c = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: i,
  eventTime: s,
  buttons: c,
  linkLabel: u,
  linkUrl: d,
  tags: f
}, p, m, w) => {
  var y;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ l.jsx(
      Ve,
      {
        type: p,
        horizontal: m,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: w,
        eventLocation: i,
        eventTime: s,
        buttons: c,
        linkLabel: u,
        linkUrl: d || ((y = c == null ? void 0 : c[0]) == null ? void 0 : y.href),
        tags: f
      }
    )
  };
}, ai = ({
  perView: e = 0,
  cardItems: t,
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: i = void 0,
  maxWidth: s = void 0,
  imageAutoSize: c = !0
}) => {
  const u = parseInt(`${e}`, 10), [d, f] = de(u), p = 1024, m = 768;
  we(() => {
    const g = () => {
      const x = window.innerWidth;
      let T;
      switch (u) {
        case 3:
          x > p ? T = 3 : x > m ? T = 2 : T = 1;
          break;
        case 2:
          T = x < m ? 1 : 2;
          break;
        default:
          T = 1;
          break;
      }
      f(T);
    };
    return g(), window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [u]);
  const w = t.map(
    (g) => _c(g, r, a, n)
  ), y = t.length > d;
  return /* @__PURE__ */ l.jsx(
    xt,
    {
      perView: +d,
      maxWidth: s,
      width: i,
      carouselItems: w,
      cssClass: "aligned-carousel",
      imageAutoSize: c,
      removeSideBackground: t.length <= d,
      hasPositionIndicators: y,
      hasNavButtons: y,
      isDraggable: y,
      hasShadow: !0
    }
  );
};
ai.propTypes = {
  perView: o.string.isRequired,
  cardItems: o.arrayOf(
    o.shape({
      title: o.string.isRequired,
      content: o.string,
      eventLocation: o.string,
      eventTime: o.string,
      image: o.string,
      imageAltText: o.string,
      buttons: Ve.propTypes.buttons,
      linkLabel: o.string,
      linkUrl: o.string,
      tags: Ve.propTypes.tags
    })
  ).isRequired,
  cardType: Ve.propTypes.type,
  cardEventFormat: Ve.propTypes.eventFormat,
  cardHorizontal: Ve.propTypes.horizontal,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const Tc = ({ id: e, imageSource: t, imageAltText: r, title: n, content: a }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ l.jsx("div", { className: "uds-img", children: /* @__PURE__ */ l.jsxs("figure", { className: "figure uds-figure", children: [
    /* @__PURE__ */ l.jsx(
      "img",
      {
        src: t,
        className: "uds-img figure-img img-fluid",
        alt: r,
        loading: "lazy",
        decoding: "async"
      }
    ),
    (n || a) && /* @__PURE__ */ l.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ l.jsx("div", { className: "uds-caption-text", children: n ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("h3", { children: n }),
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ) })
      }
    )
  ] }) })
}), ii = ({
  perView: e = 0,
  imageItems: t,
  width: r = void 0,
  maxWidth: n = void 0,
  imageAutoSize: a = !0
}) => {
  const i = parseInt(`${e}`, 10), s = t.map(Tc), c = t.length > i;
  return /* @__PURE__ */ l.jsx(
    xt,
    {
      perView: +i,
      maxWidth: n,
      width: r,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: s,
      imageAutoSize: a,
      removeSideBackground: t.length <= i,
      hasPositionIndicators: c,
      hasNavButtons: c,
      isDraggable: c,
      hasShadow: !0
    }
  );
};
ii.propTypes = {
  perView: o.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: o.arrayOf(o.object).isRequired,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const kc = (e, t) => {
  if (!e)
    return 0;
  const r = (e.match(/<br/g) || []).length, n = t / 6;
  return (parseInt(`${e.length / n}`, 10) + r) * 20;
}, Gt = {
  imageItems: o.arrayOf(
    o.shape({
      id: o.number,
      imageSource: o.string,
      thumbnailSource: o.string,
      imageAltText: o.string,
      content: o.oneOfType([o.string, o.element])
    })
  ),
  hasContent: o.bool
}, Oc = ({ id: e, imageSource: t, imageAltText: r }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ l.jsx("div", { className: "uds-img", children: /* @__PURE__ */ l.jsx(
    "img",
    {
      src: t,
      className: "uds-img figure-img img-fluid",
      alt: r,
      loading: "lazy",
      decoding: "async"
    }
  ) })
}), oi = ({ instanceName: e, imageItems: t, hasContent: r }) => {
  const n = "data-current-index", [a, i] = de(t[0].title), [s, c] = de(t[0].content), u = (f) => {
    const p = t[f];
    i(p.title), c(p.content);
  };
  we(() => {
    const f = document.querySelector(
      ".image-gallery figcaption .uds-caption-text div"
    );
    if (f) {
      const y = parseInt(
        window.getComputedStyle(f, null).getPropertyValue("width").split("px")[0],
        10
      ), g = t.reduce((x, T) => {
        const O = kc(T.content, y);
        return O > x ? O : x;
      }, 0);
      f.style.height = `${g}px`;
    }
    const p = document.querySelector(`#${e}`);
    function m(y) {
      for (const g of y)
        if (g && g.attributeName === n)
          return u(+p.getAttribute(n));
      return null;
    }
    new MutationObserver(m).observe(p, {
      attributes: !0
    });
  }, [e]);
  const d = t.map((f) => f.imageSource);
  return /* @__PURE__ */ l.jsxs("div", { className: "image-gallery-action-area", "data-has-content": r, children: [
    /* @__PURE__ */ l.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ l.jsxs(ln, { children: [
      /* @__PURE__ */ l.jsx(sn, {}),
      /* @__PURE__ */ l.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ l.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ l.jsx(
        Qa,
        {
          imageItems: d,
          onItemClick: (f) => u(f)
        }
      ) }) }),
      /* @__PURE__ */ l.jsx(on, {})
    ] }) }),
    r && (a || s) ? /* @__PURE__ */ l.jsx(
      "figcaption",
      {
        id: "caption",
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-gallery-content-container",
        children: /* @__PURE__ */ l.jsxs("div", { className: "uds-caption-text", children: [
          a ? /* @__PURE__ */ l.jsx("h3", { children: a }) : null,
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: s } })
        ] })
      }
    ) : null
  ] });
};
oi.propTypes = {
  instanceName: o.string,
  imageItems: Gt.imageItems,
  hasContent: Gt.hasContent
};
const si = ({
  width: e,
  maxWidth: t,
  imageItems: r,
  hasContent: n = !1,
  imageAutoSize: a = !0
}) => {
  const i = r.map(Oc), s = r.length > 1;
  return /* @__PURE__ */ l.jsx(
    xt,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: i,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: n ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: a,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: c }) => /* @__PURE__ */ l.jsx(
        oi,
        {
          instanceName: c,
          hasContent: n,
          imageItems: r
        }
      ),
      removeSideBackground: r.length <= 1,
      hasPositionIndicators: s,
      hasNavButtons: s,
      isDraggable: s,
      hasShadow: !0
    }
  );
};
si.propTypes = {
  imageItems: Gt.imageItems.isRequired,
  hasContent: Gt.hasContent,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const Ac = ({ id: e, imageSource: t, imageAltText: r, quote: n }, a = {}) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ l.jsx(
    nn,
    {
      imageSource: t,
      imageAltText: r,
      quote: n,
      itemStyle: a
    }
  )
}), li = ({
  width: e,
  maxWidth: t,
  testimonialItems: r,
  itemStyle: n = {},
  hasNavButtons: a = !1,
  hasPositionIndicators: i = !1,
  imageAutoSize: s = !0
}) => {
  const c = r.map(
    (u) => Ac(u, n)
  );
  return /* @__PURE__ */ l.jsx(
    xt,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: c,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: a,
      hasPositionIndicators: i,
      imageAutoSize: s,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
li.propTypes = {
  testimonialItems: o.arrayOf(
    o.shape({
      title: o.string,
      content: o.string,
      cite: o.shape({
        name: o.string,
        description: o.string
      })
    })
  ).isRequired,
  itemStyle: o.shape({
    containerCssClass: o.arrayOf(o.string),
    titleCssClass: o.arrayOf(o.string),
    contentCssClass: o.arrayOf(o.string)
  }),
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool,
  hasNavButtons: o.bool,
  hasPositionIndicators: o.bool
};
var De = /* @__PURE__ */ ((e) => (e.UNORDERED = "unordered", e.ORDERED = "ordered", e.ICON = "icon", e.STEP = "step", e.DISPLAY = "display", e))(De || {}), Bt = /* @__PURE__ */ ((e) => (e.UL = "ul", e.OL = "ol", e))(Bt || {}), it = /* @__PURE__ */ ((e) => (e.NONE = "none", e.LIGHT = "light", e.MEDIUM = "medium", e.DARK = "dark", e))(it || {}), zt = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.PRIMARY = "primary", e.SECONDARY = "secondary", e))(zt || {});
const ci = (e) => {
  switch (e) {
    case Bt.OL:
    case De.ORDERED:
    case De.STEP:
      return Bt.OL;
    default:
      return Bt.UL;
  }
}, ui = ({
  listType: e,
  content: t,
  icon: r,
  nestedType: n,
  nestedItems: a
}) => {
  const [i, ...s] = Array.isArray(t) ? t : [t];
  let c = null;
  if (a != null && a.length) {
    const u = n || e, d = ci(u);
    c = /* @__PURE__ */ l.jsx(d, { children: a.map((f, p) => /* @__PURE__ */ l.jsx(ui, { listType: u, ...f }, p)) });
  }
  return /* @__PURE__ */ l.jsxs("li", { children: [
    r && /* @__PURE__ */ l.jsx("span", { className: `fa-li ${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` }),
    i,
    " ",
    s.map((u, d) => [/* @__PURE__ */ l.jsx("br", {}, `br-${d}`), /* @__PURE__ */ l.jsx("span", { children: u }, d)]),
    c
  ] });
}, jc = ({
  listType: e = De.UNORDERED,
  backgroundColor: t = it.NONE,
  listItemStyleColor: r = zt.DEFAULT,
  items: n
}) => {
  const a = ci(e);
  let i = "maroon", s = "maroon";
  t === it.DARK && (i = "gold", s = "gold"), e === De.STEP && (i = "uds-steplist-maroon", s = "uds-steplist-gold", t === it.DARK && (i = "uds-steplist-gold"));
  const c = q({
    "uds-list": e === De.UNORDERED || e === De.ORDERED,
    "uds-list fa-ul": e === De.ICON,
    "uds-list uds-steplist": e === De.STEP,
    "uds-list uds-display-list": e === De.DISPLAY,
    "light-smokemode": t === it.LIGHT,
    smokemode: t === it.MEDIUM,
    darkmode: t === it.DARK,
    [`${i}`]: r === zt.PRIMARY,
    // Intentional space ` ${secondaryColor}` for when primary and secondary colors are the same
    [` ${s}`]: r === zt.SECONDARY
  });
  return /* @__PURE__ */ l.jsx(a, { className: c || null, children: n.map((u, d) => /* @__PURE__ */ l.jsx(ui, { listType: e, ...u }, d)) });
}, Nc = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, Ec = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Cc = ({
  gridLinkItems: e,
  numColumns: t,
  textColor: r,
  children: n
}) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        t,
        Nc[r]
      ].join(" "),
      children: e && e.map((a) => /* @__PURE__ */ l.jsx(
        ge,
        {
          gaData: {
            ...Ec,
            text: a.label,
            section: `grid links ${a.label}`
          },
          children: /* @__PURE__ */ l.jsxs("a", { href: a.href, children: [
            /* @__PURE__ */ l.jsx("span", { className: `fa fa-fw ${a.icon}` }),
            a.label
          ] })
        },
        a.label + a.href
      ))
    }
  ),
  /* @__PURE__ */ l.jsx("div", { children: n })
] });
var un, ma = _i;
un = ma.createRoot, ma.hydrateRoot;
const Rc = (e, t, r) => {
  un(r).render(ne.createElement(e, t));
}, ar = ({ typeCarousel: e, targetSelector: t, props: r }) => {
  const a = {
    card: ai,
    testimonial: li,
    image: ii,
    "image-gallery": si
  }[e];
  a && Rc(a, r, document.querySelector(t));
}, Mc = ({ targetSelector: e, props: t }) => ar({
  typeCarousel: "card",
  targetSelector: e,
  props: t
}), $c = ({ targetSelector: e, props: t }) => {
  ar({
    typeCarousel: "testimonial",
    targetSelector: e,
    props: t
  });
}, Hc = ({ targetSelector: e, props: t }) => {
  ar({ typeCarousel: "image", targetSelector: e, props: t });
}, Bc = ({ targetSelector: e, props: t }) => {
  ar({
    typeCarousel: "image-gallery",
    targetSelector: e,
    props: t
  });
}, le = (e, t, r) => {
  un(r).render(ne.createElement(e, t));
}, zc = ({ targetSelector: e, props: t }) => le(Aa, t, document.querySelector(e)), Fc = ({ targetSelector: e, props: t }) => le($a, t, document.querySelector(e)), Wc = ({ targetSelector: e, props: t }) => le(Jr, t, document.querySelector(e)), qc = ({ targetSelector: e, props: t }) => le(Xe, t, document.querySelector(e)), Vc = ({ targetSelector: e, props: t }) => le(Jt, t, document.querySelector(e)), Uc = ({ targetSelector: e, props: t }) => le(er, t, document.querySelector(e)), Yc = ({ targetSelector: e, props: t }) => le(Ve, t, document.querySelector(e)), Gc = ({ targetSelector: e, props: t }) => le(Cc, t, document.querySelector(e)), Kc = ({ targetSelector: e, props: t }) => le(Wa, t, document.querySelector(e)), Xc = ({ targetSelector: e, props: t }) => le(dt, t, document.querySelector(e)), Zc = ({ targetSelector: e, props: t }) => le(rn, t, document.querySelector(e)), Qc = ({ targetSelector: e, props: t }) => le(Ua, t, document.querySelector(e)), Jc = ({ targetSelector: e, props: t }) => le(Ka, t, document.querySelector(e)), eu = ({ targetSelector: e, props: t }) => le(nn, t, document.querySelector(e)), tu = ({ targetSelector: e, props: t }) => le(Xa, t, document.querySelector(e)), ru = ({ targetSelector: e, props: t }) => le(pl, t, document.querySelector(e)), nu = ({ targetSelector: e, props: t }) => le(Zs, t, document.querySelector(e)), au = ({ targetSelector: e, props: t }) => le(bl, t, document.querySelector(e)), iu = ({ targetSelector: e, props: t }) => le(jc, t, document.querySelector(e));
export {
  Aa as Accordion,
  $a as AnchorMenu,
  Jr as Article,
  Xe as Button,
  Jt as ButtonIconOnly,
  er as ButtonTag,
  Ve as Card,
  ai as CardCarousel,
  Zs as Divider,
  Xs as DividerType,
  sl as FeedBody,
  rl as FeedContainerProvider,
  tl as FeedContext,
  ol as FeedHeader,
  Cc as GridLinks,
  Wa as Hero,
  dt as Image,
  ii as ImageCarousel,
  si as ImageGalleryCarousel,
  jc as List,
  rn as Pagination,
  Ua as RankingCard,
  pl as SystemAlert,
  hl as SystemAlertType,
  vl as Tab,
  Ka as TabbedPanels,
  nn as Testimonial,
  li as TestimonialCarousel,
  bl as Tooltip,
  Xa as Video,
  Dc as feedCardButtonShape,
  al as feedComponentShape,
  Fa as feedCtaButtonShape,
  nl as feedDataSourceShape,
  za as feedHeaderShape,
  zc as initAccordion,
  Fc as initAnchorMenu,
  Wc as initArticle,
  qc as initButton,
  Vc as initButtonIconOnly,
  Uc as initButtonTag,
  Yc as initCard,
  Mc as initCardCarousel,
  nu as initDivider,
  Gc as initGridLinks,
  Kc as initHero,
  Xc as initImage,
  Hc as initImageCarousel,
  Bc as initImageGalleryCarousel,
  iu as initList,
  Zc as initPagination,
  Qc as initRankingCard,
  ru as initSystemAlert,
  Jc as initTabbedPanels,
  eu as initTestimonial,
  $c as initTestimonialCarousel,
  au as initTooltip,
  tu as initVideo
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