import Lt, { useState as Do, useEffect as An, useId as pi, useRef as Lo, useContext as zn, createElement as di } from "react";
function Bn(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var zo = { exports: {} }, Ar = {};
var uo;
function hi() {
  if (uo) return Ar;
  uo = 1;
  var o = Lt, s = Symbol.for("react.element"), l = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, p = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(C, x, S) {
    var V, D = {}, ne = null, se = null;
    S !== void 0 && (ne = "" + S), x.key !== void 0 && (ne = "" + x.key), x.ref !== void 0 && (se = x.ref);
    for (V in x) f.call(x, V) && !h.hasOwnProperty(V) && (D[V] = x[V]);
    if (C && C.defaultProps) for (V in x = C.defaultProps, x) D[V] === void 0 && (D[V] = x[V]);
    return { $$typeof: s, type: C, key: ne, ref: se, props: D, _owner: p.current };
  }
  return Ar.Fragment = l, Ar.jsx = k, Ar.jsxs = k, Ar;
}
zo.exports = hi();
var ct = zo.exports, Bo = { exports: {} };
(function(o) {
  (function() {
    var s = {}.hasOwnProperty;
    function l() {
      for (var h = "", k = 0; k < arguments.length; k++) {
        var C = arguments[k];
        C && (h = p(h, f(C)));
      }
      return h;
    }
    function f(h) {
      if (typeof h == "string" || typeof h == "number")
        return h;
      if (typeof h != "object")
        return "";
      if (Array.isArray(h))
        return l.apply(null, h);
      if (h.toString !== Object.prototype.toString && !h.toString.toString().includes("[native code]"))
        return h.toString();
      var k = "";
      for (var C in h)
        s.call(h, C) && h[C] && (k = p(k, C));
      return k;
    }
    function p(h, k) {
      return k ? h ? h + " " + k : h + k : h;
    }
    o.exports ? (l.default = l, o.exports = l) : window.classNames = l;
  })();
})(Bo);
var mi = Bo.exports;
const dr = /* @__PURE__ */ Bn(mi);
var $o = { exports: {} }, gn = { exports: {} }, we = {};
var co;
function gi() {
  if (co) return we;
  co = 1;
  var o = typeof Symbol == "function" && Symbol.for, s = o ? Symbol.for("react.element") : 60103, l = o ? Symbol.for("react.portal") : 60106, f = o ? Symbol.for("react.fragment") : 60107, p = o ? Symbol.for("react.strict_mode") : 60108, h = o ? Symbol.for("react.profiler") : 60114, k = o ? Symbol.for("react.provider") : 60109, C = o ? Symbol.for("react.context") : 60110, x = o ? Symbol.for("react.async_mode") : 60111, S = o ? Symbol.for("react.concurrent_mode") : 60111, V = o ? Symbol.for("react.forward_ref") : 60112, D = o ? Symbol.for("react.suspense") : 60113, ne = o ? Symbol.for("react.suspense_list") : 60120, se = o ? Symbol.for("react.memo") : 60115, B = o ? Symbol.for("react.lazy") : 60116, F = o ? Symbol.for("react.block") : 60121, N = o ? Symbol.for("react.fundamental") : 60117, j = o ? Symbol.for("react.responder") : 60118, U = o ? Symbol.for("react.scope") : 60119;
  function q(_) {
    if (typeof _ == "object" && _ !== null) {
      var te = _.$$typeof;
      switch (te) {
        case s:
          switch (_ = _.type, _) {
            case x:
            case S:
            case f:
            case h:
            case p:
            case D:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case C:
                case V:
                case B:
                case se:
                case k:
                  return _;
                default:
                  return te;
              }
          }
        case l:
          return te;
      }
    }
  }
  function W(_) {
    return q(_) === S;
  }
  return we.AsyncMode = x, we.ConcurrentMode = S, we.ContextConsumer = C, we.ContextProvider = k, we.Element = s, we.ForwardRef = V, we.Fragment = f, we.Lazy = B, we.Memo = se, we.Portal = l, we.Profiler = h, we.StrictMode = p, we.Suspense = D, we.isAsyncMode = function(_) {
    return W(_) || q(_) === x;
  }, we.isConcurrentMode = W, we.isContextConsumer = function(_) {
    return q(_) === C;
  }, we.isContextProvider = function(_) {
    return q(_) === k;
  }, we.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === s;
  }, we.isForwardRef = function(_) {
    return q(_) === V;
  }, we.isFragment = function(_) {
    return q(_) === f;
  }, we.isLazy = function(_) {
    return q(_) === B;
  }, we.isMemo = function(_) {
    return q(_) === se;
  }, we.isPortal = function(_) {
    return q(_) === l;
  }, we.isProfiler = function(_) {
    return q(_) === h;
  }, we.isStrictMode = function(_) {
    return q(_) === p;
  }, we.isSuspense = function(_) {
    return q(_) === D;
  }, we.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === f || _ === S || _ === h || _ === p || _ === D || _ === ne || typeof _ == "object" && _ !== null && (_.$$typeof === B || _.$$typeof === se || _.$$typeof === k || _.$$typeof === C || _.$$typeof === V || _.$$typeof === N || _.$$typeof === j || _.$$typeof === U || _.$$typeof === F);
  }, we.typeOf = q, we;
}
var fo;
function jo() {
  return fo || (fo = 1, gn.exports = gi()), gn.exports;
}
var yn, po;
function yi() {
  if (po) return yn;
  po = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yn = o, yn;
}
var vn, ho;
function vi() {
  if (ho) return vn;
  ho = 1;
  var o = yi();
  function s() {
  }
  function l() {
  }
  return l.resetWarningCache = s, vn = function() {
    function f(k, C, x, S, V, D) {
      if (D !== o) {
        var ne = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ne.name = "Invariant Violation", ne;
      }
    }
    f.isRequired = f;
    function p() {
      return f;
    }
    var h = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: p,
      element: f,
      elementType: f,
      instanceOf: p,
      node: f,
      objectOf: p,
      oneOf: p,
      oneOfType: p,
      shape: p,
      exact: p,
      checkPropTypes: l,
      resetWarningCache: s
    };
    return h.PropTypes = h, h;
  }, vn;
}
$o.exports = vi()();
var Si = $o.exports;
const M = /* @__PURE__ */ Bn(Si);
function wi(o) {
  const [s, l] = Do(!1);
  return An(() => {
    const f = window.matchMedia(o);
    f.matches !== s && l(f.matches);
    const p = () => {
      l(f.matches);
    };
    return f.addEventListener("change", p), () => f.removeEventListener("change", p);
  }, [s, o]), s;
}
function Gt(o) {
  "@babel/helpers - typeof";
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
    return typeof s;
  } : function(s) {
    return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
  }, Gt(o);
}
function Rn(o, s) {
  return Rn = Object.setPrototypeOf || function(f, p) {
    return f.__proto__ = p, f;
  }, Rn(o, s);
}
function xi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qr(o, s, l) {
  return xi() ? Qr = Reflect.construct : Qr = function(p, h, k) {
    var C = [null];
    C.push.apply(C, h);
    var x = Function.bind.apply(p, C), S = new x();
    return k && Rn(S, k.prototype), S;
  }, Qr.apply(null, arguments);
}
function kt(o) {
  return ki(o) || Ei(o) || Ti(o) || Ci();
}
function ki(o) {
  if (Array.isArray(o)) return On(o);
}
function Ei(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o);
}
function Ti(o, s) {
  if (o) {
    if (typeof o == "string") return On(o, s);
    var l = Object.prototype.toString.call(o).slice(8, -1);
    if (l === "Object" && o.constructor && (l = o.constructor.name), l === "Map" || l === "Set") return Array.from(o);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return On(o, s);
  }
}
function On(o, s) {
  (s == null || s > o.length) && (s = o.length);
  for (var l = 0, f = new Array(s); l < s; l++) f[l] = o[l];
  return f;
}
function Ci() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var _i = Object.hasOwnProperty, mo = Object.setPrototypeOf, bi = Object.isFrozen, Ai = Object.getPrototypeOf, Ri = Object.getOwnPropertyDescriptor, Xe = Object.freeze, dt = Object.seal, Oi = Object.create, Ho = typeof Reflect < "u" && Reflect, nn = Ho.apply, In = Ho.construct;
nn || (nn = function(s, l, f) {
  return s.apply(l, f);
});
Xe || (Xe = function(s) {
  return s;
});
dt || (dt = function(s) {
  return s;
});
In || (In = function(s, l) {
  return Qr(s, kt(l));
});
var Ii = ht(Array.prototype.forEach), go = ht(Array.prototype.pop), Rr = ht(Array.prototype.push), en = ht(String.prototype.toLowerCase), Sn = ht(String.prototype.toString), yo = ht(String.prototype.match), xt = ht(String.prototype.replace), Pi = ht(String.prototype.indexOf), Mi = ht(String.prototype.trim), Ue = ht(RegExp.prototype.test), wn = Ni(TypeError);
function ht(o) {
  return function(s) {
    for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
      f[p - 1] = arguments[p];
    return nn(o, s, f);
  };
}
function Ni(o) {
  return function() {
    for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++)
      l[f] = arguments[f];
    return In(o, l);
  };
}
function ae(o, s, l) {
  var f;
  l = (f = l) !== null && f !== void 0 ? f : en, mo && mo(o, null);
  for (var p = s.length; p--; ) {
    var h = s[p];
    if (typeof h == "string") {
      var k = l(h);
      k !== h && (bi(s) || (s[p] = k), h = k);
    }
    o[h] = !0;
  }
  return o;
}
function ar(o) {
  var s = Oi(null), l;
  for (l in o)
    nn(_i, o, [l]) === !0 && (s[l] = o[l]);
  return s;
}
function qr(o, s) {
  for (; o !== null; ) {
    var l = Ri(o, s);
    if (l) {
      if (l.get)
        return ht(l.get);
      if (typeof l.value == "function")
        return ht(l.value);
    }
    o = Ai(o);
  }
  function f(p) {
    return console.warn("fallback value for", p), null;
  }
  return f;
}
var vo = Xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xn = Xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), kn = Xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Fi = Xe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), En = Xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Di = Xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), So = Xe(["#text"]), wo = Xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Tn = Xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xo = Xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yr = Xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Li = dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), zi = dt(/<%[\w\W]*|[\w\W]*%>/gm), Bi = dt(/\${[\w\W]*}/gm), $i = dt(/^data-[\-\w.\u00B7-\uFFFF]/), ji = dt(/^aria-[\-\w]+$/), Hi = dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ui = dt(/^(?:\w+script|data):/i), Vi = dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Wi = dt(/^html$/i), Gi = dt(/^[a-z][.\w]*(-[.\w]+)+$/i), qi = function() {
  return typeof window > "u" ? null : window;
}, Yi = function(s, l) {
  if (Gt(s) !== "object" || typeof s.createPolicy != "function")
    return null;
  var f = null, p = "data-tt-policy-suffix";
  l.currentScript && l.currentScript.hasAttribute(p) && (f = l.currentScript.getAttribute(p));
  var h = "dompurify" + (f ? "#" + f : "");
  try {
    return s.createPolicy(h, {
      createHTML: function(C) {
        return C;
      },
      createScriptURL: function(C) {
        return C;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + h + " could not be created."), null;
  }
};
function Uo() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qi(), s = function(d) {
    return Uo(d);
  };
  if (s.version = "2.5.7", s.removed = [], !o || !o.document || o.document.nodeType !== 9)
    return s.isSupported = !1, s;
  var l = o.document, f = o.document, p = o.DocumentFragment, h = o.HTMLTemplateElement, k = o.Node, C = o.Element, x = o.NodeFilter, S = o.NamedNodeMap, V = S === void 0 ? o.NamedNodeMap || o.MozNamedAttrMap : S, D = o.HTMLFormElement, ne = o.DOMParser, se = o.trustedTypes, B = C.prototype, F = qr(B, "cloneNode"), N = qr(B, "nextSibling"), j = qr(B, "childNodes"), U = qr(B, "parentNode");
  if (typeof h == "function") {
    var q = f.createElement("template");
    q.content && q.content.ownerDocument && (f = q.content.ownerDocument);
  }
  var W = Yi(se, l), _ = W ? W.createHTML("") : "", te = f, pe = te.implementation, Fe = te.createNodeIterator, je = te.createDocumentFragment, Ve = te.getElementsByTagName, tt = l.importNode, ke = {};
  try {
    ke = ar(f).documentMode ? f.documentMode : {};
  } catch {
  }
  var Ce = {};
  s.isSupported = typeof U == "function" && pe && pe.createHTMLDocument !== void 0 && ke !== 9;
  var Be = Li, Ie = zi, rt = Bi, He = $i, De = ji, Le = Ui, Ze = Vi, qe = Gi, z = Hi, O = null, L = ae({}, [].concat(kt(vo), kt(xn), kt(kn), kt(En), kt(So))), $ = null, w = ae({}, [].concat(kt(wo), kt(Tn), kt(xo), kt(Yr))), G = Object.seal(Object.create(null, {
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
  })), A = null, ue = null, ee = !0, Q = !0, X = !1, ce = !0, he = !1, oe = !0, me = !1, fe = !1, Te = !1, ze = !1, Ee = !1, Ke = !1, $e = !0, ge = !1, Y = "user-content-", ye = !0, Je = !1, Ye = {}, Me = null, Yt = ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Xt = null, ur = ae({}, ["audio", "video", "img", "source", "image", "track"]), Ct = null, _t = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zt = "http://www.w3.org/1998/Math/MathML", Bt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml", Et = nt, Zt = !1, We = null, Kt = ae({}, [zt, Bt, nt], Sn), Qe, ve = ["application/xhtml+xml", "text/html"], bt = "text/html", be, et = null, ft = f.createElement("form"), At = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, ot = function(d) {
    et && et === d || ((!d || Gt(d) !== "object") && (d = {}), d = ar(d), Qe = // eslint-disable-next-line unicorn/prefer-includes
    ve.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? Qe = bt : Qe = d.PARSER_MEDIA_TYPE, be = Qe === "application/xhtml+xml" ? Sn : en, O = "ALLOWED_TAGS" in d ? ae({}, d.ALLOWED_TAGS, be) : L, $ = "ALLOWED_ATTR" in d ? ae({}, d.ALLOWED_ATTR, be) : w, We = "ALLOWED_NAMESPACES" in d ? ae({}, d.ALLOWED_NAMESPACES, Sn) : Kt, Ct = "ADD_URI_SAFE_ATTR" in d ? ae(
      ar(_t),
      // eslint-disable-line indent
      d.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      be
      // eslint-disable-line indent
    ) : _t, Xt = "ADD_DATA_URI_TAGS" in d ? ae(
      ar(ur),
      // eslint-disable-line indent
      d.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      be
      // eslint-disable-line indent
    ) : ur, Me = "FORBID_CONTENTS" in d ? ae({}, d.FORBID_CONTENTS, be) : Yt, A = "FORBID_TAGS" in d ? ae({}, d.FORBID_TAGS, be) : {}, ue = "FORBID_ATTR" in d ? ae({}, d.FORBID_ATTR, be) : {}, Ye = "USE_PROFILES" in d ? d.USE_PROFILES : !1, ee = d.ALLOW_ARIA_ATTR !== !1, Q = d.ALLOW_DATA_ATTR !== !1, X = d.ALLOW_UNKNOWN_PROTOCOLS || !1, ce = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, he = d.SAFE_FOR_TEMPLATES || !1, oe = d.SAFE_FOR_XML !== !1, me = d.WHOLE_DOCUMENT || !1, ze = d.RETURN_DOM || !1, Ee = d.RETURN_DOM_FRAGMENT || !1, Ke = d.RETURN_TRUSTED_TYPE || !1, Te = d.FORCE_BODY || !1, $e = d.SANITIZE_DOM !== !1, ge = d.SANITIZE_NAMED_PROPS || !1, ye = d.KEEP_CONTENT !== !1, Je = d.IN_PLACE || !1, z = d.ALLOWED_URI_REGEXP || z, Et = d.NAMESPACE || nt, G = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && At(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (G.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && At(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (G.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), he && (Q = !1), Ee && (ze = !0), Ye && (O = ae({}, kt(So)), $ = [], Ye.html === !0 && (ae(O, vo), ae($, wo)), Ye.svg === !0 && (ae(O, xn), ae($, Tn), ae($, Yr)), Ye.svgFilters === !0 && (ae(O, kn), ae($, Tn), ae($, Yr)), Ye.mathMl === !0 && (ae(O, En), ae($, xo), ae($, Yr))), d.ADD_TAGS && (O === L && (O = ar(O)), ae(O, d.ADD_TAGS, be)), d.ADD_ATTR && ($ === w && ($ = ar($)), ae($, d.ADD_ATTR, be)), d.ADD_URI_SAFE_ATTR && ae(Ct, d.ADD_URI_SAFE_ATTR, be), d.FORBID_CONTENTS && (Me === Yt && (Me = ar(Me)), ae(Me, d.FORBID_CONTENTS, be)), ye && (O["#text"] = !0), me && ae(O, ["html", "head", "body"]), O.table && (ae(O, ["tbody"]), delete A.tbody), Xe && Xe(d), et = d);
  }, Jt = ae({}, ["mi", "mo", "mn", "ms", "mtext"]), $t = ae({}, ["annotation-xml"]), Qt = ae({}, ["title", "style", "font", "a", "script"]), Rt = ae({}, xn);
  ae(Rt, kn), ae(Rt, Fi);
  var jt = ae({}, En);
  ae(jt, Di);
  var cr = function(d) {
    var b = U(d);
    (!b || !b.tagName) && (b = {
      namespaceURI: Et,
      tagName: "template"
    });
    var P = en(d.tagName), de = en(b.tagName);
    return We[d.namespaceURI] ? d.namespaceURI === Bt ? b.namespaceURI === nt ? P === "svg" : b.namespaceURI === zt ? P === "svg" && (de === "annotation-xml" || Jt[de]) : !!Rt[P] : d.namespaceURI === zt ? b.namespaceURI === nt ? P === "math" : b.namespaceURI === Bt ? P === "math" && $t[de] : !!jt[P] : d.namespaceURI === nt ? b.namespaceURI === Bt && !$t[de] || b.namespaceURI === zt && !Jt[de] ? !1 : !jt[P] && (Qt[P] || !Rt[P]) : !!(Qe === "application/xhtml+xml" && We[d.namespaceURI]) : !1;
  }, Ge = function(d) {
    Rr(s.removed, {
      element: d
    });
    try {
      d.parentNode.removeChild(d);
    } catch {
      try {
        d.outerHTML = _;
      } catch {
        d.remove();
      }
    }
  }, Ht = function(d, b) {
    try {
      Rr(s.removed, {
        attribute: b.getAttributeNode(d),
        from: b
      });
    } catch {
      Rr(s.removed, {
        attribute: null,
        from: b
      });
    }
    if (b.removeAttribute(d), d === "is" && !$[d])
      if (ze || Ee)
        try {
          Ge(b);
        } catch {
        }
      else
        try {
          b.setAttribute(d, "");
        } catch {
        }
  }, Ot = function(d) {
    var b, P;
    if (Te)
      d = "<remove></remove>" + d;
    else {
      var de = yo(d, /^[\r\n\t ]+/);
      P = de && de[0];
    }
    Qe === "application/xhtml+xml" && Et === nt && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    var Se = W ? W.createHTML(d) : d;
    if (Et === nt)
      try {
        b = new ne().parseFromString(Se, Qe);
      } catch {
      }
    if (!b || !b.documentElement) {
      b = pe.createDocument(Et, "template", null);
      try {
        b.documentElement.innerHTML = Zt ? _ : Se;
      } catch {
      }
    }
    var Ne = b.body || b.documentElement;
    return d && P && Ne.insertBefore(f.createTextNode(P), Ne.childNodes[0] || null), Et === nt ? Ve.call(b, me ? "html" : "body")[0] : me ? b.documentElement : Ne;
  }, er = function(d) {
    return Fe.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, It = function(d) {
    return d instanceof D && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof V) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
  }, mt = function(d) {
    return Gt(k) === "object" ? d instanceof k : d && Gt(d) === "object" && typeof d.nodeType == "number" && typeof d.nodeName == "string";
  }, it = function(d, b, P) {
    Ce[d] && Ii(Ce[d], function(de) {
      de.call(s, b, P, et);
    });
  }, Tt = function(d) {
    var b;
    if (it("beforeSanitizeElements", d, null), It(d) || Ue(/[\u0080-\uFFFF]/, d.nodeName))
      return Ge(d), !0;
    var P = be(d.nodeName);
    if (it("uponSanitizeElement", d, {
      tagName: P,
      allowedTags: O
    }), d.hasChildNodes() && !mt(d.firstElementChild) && (!mt(d.content) || !mt(d.content.firstElementChild)) && Ue(/<[/\w]/g, d.innerHTML) && Ue(/<[/\w]/g, d.textContent) || P === "select" && Ue(/<template/i, d.innerHTML) || d.nodeType === 7 || oe && d.nodeType === 8 && Ue(/<[/\w]/g, d.data))
      return Ge(d), !0;
    if (!O[P] || A[P]) {
      if (!A[P] && Ut(P) && (G.tagNameCheck instanceof RegExp && Ue(G.tagNameCheck, P) || G.tagNameCheck instanceof Function && G.tagNameCheck(P)))
        return !1;
      if (ye && !Me[P]) {
        var de = U(d) || d.parentNode, Se = j(d) || d.childNodes;
        if (Se && de)
          for (var Ne = Se.length, Pe = Ne - 1; Pe >= 0; --Pe) {
            var at = F(Se[Pe], !0);
            at.__removalCount = (d.__removalCount || 0) + 1, de.insertBefore(at, N(d));
          }
      }
      return Ge(d), !0;
    }
    return d instanceof C && !cr(d) || (P === "noscript" || P === "noembed" || P === "noframes") && Ue(/<\/no(script|embed|frames)/i, d.innerHTML) ? (Ge(d), !0) : (he && d.nodeType === 3 && (b = d.textContent, b = xt(b, Be, " "), b = xt(b, Ie, " "), b = xt(b, rt, " "), d.textContent !== b && (Rr(s.removed, {
      element: d.cloneNode()
    }), d.textContent = b)), it("afterSanitizeElements", d, null), !1);
  }, fr = function(d, b, P) {
    if ($e && (b === "id" || b === "name") && (P in f || P in ft))
      return !1;
    if (!(Q && !ue[b] && Ue(He, b))) {
      if (!(ee && Ue(De, b))) {
        if (!$[b] || ue[b]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ut(d) && (G.tagNameCheck instanceof RegExp && Ue(G.tagNameCheck, d) || G.tagNameCheck instanceof Function && G.tagNameCheck(d)) && (G.attributeNameCheck instanceof RegExp && Ue(G.attributeNameCheck, b) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            b === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && Ue(G.tagNameCheck, P) || G.tagNameCheck instanceof Function && G.tagNameCheck(P)))
          ) return !1;
        } else if (!Ct[b]) {
          if (!Ue(z, xt(P, Ze, ""))) {
            if (!((b === "src" || b === "xlink:href" || b === "href") && d !== "script" && Pi(P, "data:") === 0 && Xt[d])) {
              if (!(X && !Ue(Le, xt(P, Ze, "")))) {
                if (P)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ut = function(d) {
    return d !== "annotation-xml" && yo(d, qe);
  }, Pt = function(d) {
    var b, P, de, Se;
    it("beforeSanitizeAttributes", d, null);
    var Ne = d.attributes;
    if (Ne) {
      var Pe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: $
      };
      for (Se = Ne.length; Se--; ) {
        b = Ne[Se];
        var at = b, Re = at.name, pt = at.namespaceURI;
        if (P = Re === "value" ? b.value : Mi(b.value), de = be(Re), Pe.attrName = de, Pe.attrValue = P, Pe.keepAttr = !0, Pe.forceKeepAttr = void 0, it("uponSanitizeAttribute", d, Pe), P = Pe.attrValue, !Pe.forceKeepAttr && (Ht(Re, d), !!Pe.keepAttr)) {
          if (!ce && Ue(/\/>/i, P)) {
            Ht(Re, d);
            continue;
          }
          he && (P = xt(P, Be, " "), P = xt(P, Ie, " "), P = xt(P, rt, " "));
          var gt = be(d.nodeName);
          if (fr(gt, de, P)) {
            if (ge && (de === "id" || de === "name") && (Ht(Re, d), P = Y + P), oe && Ue(/((--!?|])>)|<\/(style|title)/i, P)) {
              Ht(Re, d);
              continue;
            }
            if (W && Gt(se) === "object" && typeof se.getAttributeType == "function" && !pt)
              switch (se.getAttributeType(gt, de)) {
                case "TrustedHTML": {
                  P = W.createHTML(P);
                  break;
                }
                case "TrustedScriptURL": {
                  P = W.createScriptURL(P);
                  break;
                }
              }
            try {
              pt ? d.setAttributeNS(pt, Re, P) : d.setAttribute(Re, P), It(d) ? Ge(d) : go(s.removed);
            } catch {
            }
          }
        }
      }
      it("afterSanitizeAttributes", d, null);
    }
  }, Mt = function H(d) {
    var b, P = er(d);
    for (it("beforeSanitizeShadowDOM", d, null); b = P.nextNode(); )
      it("uponSanitizeShadowNode", b, null), !Tt(b) && (b.content instanceof p && H(b.content), Pt(b));
    it("afterSanitizeShadowDOM", d, null);
  };
  return s.sanitize = function(H) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b, P, de, Se, Ne;
    if (Zt = !H, Zt && (H = "<!-->"), typeof H != "string" && !mt(H))
      if (typeof H.toString == "function") {
        if (H = H.toString(), typeof H != "string")
          throw wn("dirty is not a string, aborting");
      } else
        throw wn("toString is not a function");
    if (!s.isSupported) {
      if (Gt(o.toStaticHTML) === "object" || typeof o.toStaticHTML == "function") {
        if (typeof H == "string")
          return o.toStaticHTML(H);
        if (mt(H))
          return o.toStaticHTML(H.outerHTML);
      }
      return H;
    }
    if (fe || ot(d), s.removed = [], typeof H == "string" && (Je = !1), Je) {
      if (H.nodeName) {
        var Pe = be(H.nodeName);
        if (!O[Pe] || A[Pe])
          throw wn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (H instanceof k)
      b = Ot("<!---->"), P = b.ownerDocument.importNode(H, !0), P.nodeType === 1 && P.nodeName === "BODY" || P.nodeName === "HTML" ? b = P : b.appendChild(P);
    else {
      if (!ze && !he && !me && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return W && Ke ? W.createHTML(H) : H;
      if (b = Ot(H), !b)
        return ze ? null : Ke ? _ : "";
    }
    b && Te && Ge(b.firstChild);
    for (var at = er(Je ? H : b); de = at.nextNode(); )
      de.nodeType === 3 && de === Se || Tt(de) || (de.content instanceof p && Mt(de.content), Pt(de), Se = de);
    if (Se = null, Je)
      return H;
    if (ze) {
      if (Ee)
        for (Ne = je.call(b.ownerDocument); b.firstChild; )
          Ne.appendChild(b.firstChild);
      else
        Ne = b;
      return ($.shadowroot || $.shadowrootmod) && (Ne = tt.call(l, Ne, !0)), Ne;
    }
    var Re = me ? b.outerHTML : b.innerHTML;
    return me && O["!doctype"] && b.ownerDocument && b.ownerDocument.doctype && b.ownerDocument.doctype.name && Ue(Wi, b.ownerDocument.doctype.name) && (Re = "<!DOCTYPE " + b.ownerDocument.doctype.name + `>
` + Re), he && (Re = xt(Re, Be, " "), Re = xt(Re, Ie, " "), Re = xt(Re, rt, " ")), W && Ke ? W.createHTML(Re) : Re;
  }, s.setConfig = function(H) {
    ot(H), fe = !0;
  }, s.clearConfig = function() {
    et = null, fe = !1;
  }, s.isValidAttribute = function(H, d, b) {
    et || ot({});
    var P = be(H), de = be(d);
    return fr(P, de, b);
  }, s.addHook = function(H, d) {
    typeof d == "function" && (Ce[H] = Ce[H] || [], Rr(Ce[H], d));
  }, s.removeHook = function(H) {
    if (Ce[H])
      return go(Ce[H]);
  }, s.removeHooks = function(H) {
    Ce[H] && (Ce[H] = []);
  }, s.removeAllHooks = function() {
    Ce = {};
  }, s;
}
Uo();
function Xi(o) {
  return (o ? document.querySelector(o) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
let Cn = !1;
const Zi = (o, s) => {
  Cn || (Cn = !0, setTimeout(() => {
    o(), Cn = !1;
  }, s));
};
let ko;
const Ki = (o, s) => {
  window.clearTimeout(ko), ko = window.setTimeout(o, s);
};
M.shape({
  event: M.string,
  action: M.string,
  name: M.string,
  region: M.string,
  section: M.string,
  component: M.string,
  type: M.string,
  text: M.string
});
const Ji = ({
  event: o = "",
  action: s = "",
  name: l = "",
  type: f = "",
  section: p = "",
  text: h = "",
  region: k = "",
  component: C = ""
}) => {
  const { dataLayer: x } = window, S = {
    event: o.toLowerCase(),
    action: s.toLowerCase(),
    name: l.toLowerCase(),
    type: f.toLowerCase(),
    region: k.toLowerCase(),
    section: p.toLowerCase(),
    text: h.toLowerCase(),
    component: C.toLowerCase()
  };
  x && x.push(S);
};
M.shape({
  url: M.string,
  altText: M.string,
  cssClass: M.arrayOf(M.string),
  size: M.oneOf(["small", "medium", "large"])
});
M.shape({
  text: M.string,
  maxWidth: M.string,
  cssClass: M.arrayOf(M.string),
  highlightColor: M.oneOf(["gold", "black"])
});
M.shape({
  color: M.oneOf(["gold", "maroon", "gray", "dark"]),
  content: M.shape({
    icon: M.string,
    header: M.string,
    body: M.string
  })
});
const Qi = M.shape({
  text: M.string,
  name: M.string,
  event: M.string,
  action: M.string,
  type: M.string,
  region: M.string,
  section: M.string,
  component: M.string
});
var sr = {};
var Eo;
function ea() {
  if (Eo) return sr;
  Eo = 1;
  var o = Lt;
  function s(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {};
  function k(e) {
    return l.call(h, e) ? !0 : l.call(p, e) ? !1 : f.test(e) ? h[e] = !0 : (p[e] = !0, !1);
  }
  function C(e, n, a, c, v, m, E) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = c, this.attributeNamespace = v, this.mustUseProperty = a, this.propertyName = e, this.type = n, this.sanitizeURL = m, this.removeEmptyString = E;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    x[e] = new C(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    x[n] = new C(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    x[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    x[e] = new C(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    x[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    x[e] = new C(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    x[e] = new C(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    x[e] = new C(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    x[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var S = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      S,
      V
    );
    x[n] = new C(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(S, V);
    x[n] = new C(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(S, V);
    x[n] = new C(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    x[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    x[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var D = {
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
  }, ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(D).forEach(function(e) {
    ne.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), D[n] = D[e];
    });
  });
  var se = /["'&<>]/;
  function B(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = se.exec(e);
    if (n) {
      var a = "", c, v = 0;
      for (c = n.index; c < e.length; c++) {
        switch (e.charCodeAt(c)) {
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
        v !== c && (a += e.substring(v, c)), v = c + 1, a += n;
      }
      e = v !== c ? a + e.substring(v, c) : a;
    }
    return e;
  }
  var F = /([A-Z])/g, N = /^ms-/, j = Array.isArray;
  function U(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function q(e, n, a) {
    switch (n) {
      case "select":
        return U(1, a.value != null ? a.value : a.defaultValue);
      case "svg":
        return U(2, null);
      case "math":
        return U(3, null);
      case "foreignObject":
        return U(1, null);
      case "table":
        return U(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return U(5, null);
      case "colgroup":
        return U(7, null);
      case "tr":
        return U(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? U(1, null) : e;
  }
  var W = /* @__PURE__ */ new Map();
  function _(e, n, a) {
    if (typeof a != "object") throw Error(s(62));
    n = !0;
    for (var c in a) if (l.call(a, c)) {
      var v = a[c];
      if (v != null && typeof v != "boolean" && v !== "") {
        if (c.indexOf("--") === 0) {
          var m = B(c);
          v = B(("" + v).trim());
        } else {
          m = c;
          var E = W.get(m);
          E !== void 0 || (E = B(m.replace(F, "-$1").toLowerCase().replace(N, "-ms-")), W.set(m, E)), m = E, v = typeof v == "number" ? v === 0 || l.call(D, c) ? "" + v : v + "px" : B(("" + v).trim());
        }
        n ? (n = !1, e.push(' style="', m, ":", v)) : e.push(";", m, ":", v);
      }
    }
    n || e.push('"');
  }
  function te(e, n, a, c) {
    switch (a) {
      case "style":
        _(e, n, c);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") {
      if (n = x.hasOwnProperty(a) ? x[a] : null, n !== null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!n.acceptsBooleans) return;
        }
        switch (a = n.attributeName, n.type) {
          case 3:
            c && e.push(" ", a, '=""');
            break;
          case 4:
            c === !0 ? e.push(" ", a, '=""') : c !== !1 && e.push(" ", a, '="', B(c), '"');
            break;
          case 5:
            isNaN(c) || e.push(" ", a, '="', B(c), '"');
            break;
          case 6:
            !isNaN(c) && 1 <= c && e.push(" ", a, '="', B(c), '"');
            break;
          default:
            n.sanitizeURL && (c = "" + c), e.push(" ", a, '="', B(c), '"');
        }
      } else if (k(a)) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = a.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", a, '="', B(c), '"');
      }
    }
  }
  function pe(e, n, a) {
    if (n != null) {
      if (a != null) throw Error(s(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function Fe(e) {
    var n = "";
    return o.Children.forEach(e, function(a) {
      a != null && (n += a);
    }), n;
  }
  function je(e, n, a, c) {
    e.push(ke(a));
    var v = a = null, m;
    for (m in n) if (l.call(n, m)) {
      var E = n[m];
      if (E != null) switch (m) {
        case "children":
          a = E;
          break;
        case "dangerouslySetInnerHTML":
          v = E;
          break;
        default:
          te(e, c, m, E);
      }
    }
    return e.push(">"), pe(e, v, a), typeof a == "string" ? (e.push(B(a)), null) : a;
  }
  var Ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, tt = /* @__PURE__ */ new Map();
  function ke(e) {
    var n = tt.get(e);
    if (n === void 0) {
      if (!Ve.test(e)) throw Error(s(65, e));
      n = "<" + e, tt.set(e, n);
    }
    return n;
  }
  function Ce(e, n, a, c, v) {
    switch (n) {
      case "select":
        e.push(ke("select"));
        var m = null, E = null;
        for (re in a) if (l.call(a, re)) {
          var I = a[re];
          if (I != null) switch (re) {
            case "children":
              m = I;
              break;
            case "dangerouslySetInnerHTML":
              E = I;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              te(e, c, re, I);
          }
        }
        return e.push(">"), pe(e, E, m), m;
      case "option":
        E = v.selectedValue, e.push(ke("option"));
        var Z = I = null, J = null, re = null;
        for (m in a) if (l.call(a, m)) {
          var Oe = a[m];
          if (Oe != null) switch (m) {
            case "children":
              I = Oe;
              break;
            case "selected":
              J = Oe;
              break;
            case "dangerouslySetInnerHTML":
              re = Oe;
              break;
            case "value":
              Z = Oe;
            default:
              te(e, c, m, Oe);
          }
        }
        if (E != null) if (a = Z !== null ? "" + Z : Fe(I), j(E)) {
          for (c = 0; c < E.length; c++)
            if ("" + E[c] === a) {
              e.push(' selected=""');
              break;
            }
        } else "" + E === a && e.push(' selected=""');
        else J && e.push(' selected=""');
        return e.push(">"), pe(e, re, I), I;
      case "textarea":
        e.push(ke("textarea")), re = E = m = null;
        for (I in a) if (l.call(a, I) && (Z = a[I], Z != null)) switch (I) {
          case "children":
            re = Z;
            break;
          case "value":
            m = Z;
            break;
          case "defaultValue":
            E = Z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(91));
          default:
            te(
              e,
              c,
              I,
              Z
            );
        }
        if (m === null && E !== null && (m = E), e.push(">"), re != null) {
          if (m != null) throw Error(s(92));
          if (j(re) && 1 < re.length) throw Error(s(93));
          m = "" + re;
        }
        return typeof m == "string" && m[0] === `
` && e.push(`
`), m !== null && e.push(B("" + m)), null;
      case "input":
        e.push(ke("input")), Z = re = I = m = null;
        for (E in a) if (l.call(a, E) && (J = a[E], J != null)) switch (E) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, "input"));
          case "defaultChecked":
            Z = J;
            break;
          case "defaultValue":
            I = J;
            break;
          case "checked":
            re = J;
            break;
          case "value":
            m = J;
            break;
          default:
            te(e, c, E, J);
        }
        return re !== null ? te(e, c, "checked", re) : Z !== null && te(e, c, "checked", Z), m !== null ? te(e, c, "value", m) : I !== null && te(e, c, "value", I), e.push("/>"), null;
      case "menuitem":
        e.push(ke("menuitem"));
        for (var yt in a) if (l.call(a, yt) && (m = a[yt], m != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(400));
          default:
            te(e, c, yt, m);
        }
        return e.push(">"), null;
      case "title":
        e.push(ke("title")), m = null;
        for (Oe in a) if (l.call(a, Oe) && (E = a[Oe], E != null)) switch (Oe) {
          case "children":
            m = E;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(434));
          default:
            te(e, c, Oe, E);
        }
        return e.push(">"), m;
      case "listing":
      case "pre":
        e.push(ke(n)), E = m = null;
        for (Z in a) if (l.call(a, Z) && (I = a[Z], I != null)) switch (Z) {
          case "children":
            m = I;
            break;
          case "dangerouslySetInnerHTML":
            E = I;
            break;
          default:
            te(e, c, Z, I);
        }
        if (e.push(">"), E != null) {
          if (m != null) throw Error(s(60));
          if (typeof E != "object" || !("__html" in E)) throw Error(s(61));
          a = E.__html, a != null && (typeof a == "string" && 0 < a.length && a[0] === `
` ? e.push(`
`, a) : e.push("" + a));
        }
        return typeof m == "string" && m[0] === `
` && e.push(`
`), m;
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
        e.push(ke(n));
        for (var vt in a) if (l.call(a, vt) && (m = a[vt], m != null)) switch (vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, n));
          default:
            te(e, c, vt, m);
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
        return je(
          e,
          a,
          n,
          c
        );
      case "html":
        return v.insertionMode === 0 && e.push("<!DOCTYPE html>"), je(e, a, n, c);
      default:
        if (n.indexOf("-") === -1 && typeof a.is != "string") return je(e, a, n, c);
        e.push(ke(n)), E = m = null;
        for (J in a) if (l.call(a, J) && (I = a[J], I != null)) switch (J) {
          case "children":
            m = I;
            break;
          case "dangerouslySetInnerHTML":
            E = I;
            break;
          case "style":
            _(e, c, I);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(J) && typeof I != "function" && typeof I != "symbol" && e.push(" ", J, '="', B(I), '"');
        }
        return e.push(">"), pe(e, E, m), m;
    }
  }
  function Be(e, n, a) {
    if (e.push('<!--$?--><template id="'), a === null) throw Error(s(395));
    return e.push(a), e.push('"></template>');
  }
  function Ie(e, n, a, c) {
    switch (a.insertionMode) {
      case 0:
      case 1:
        return e.push('<div hidden id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 2:
        return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 3:
        return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 4:
        return e.push('<table hidden id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 5:
        return e.push('<table hidden><tbody id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 6:
        return e.push('<table hidden><tr id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      case 7:
        return e.push('<table hidden><colgroup id="'), e.push(n.segmentPrefix), n = c.toString(16), e.push(n), e.push('">');
      default:
        throw Error(s(397));
    }
  }
  function rt(e, n) {
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
        throw Error(s(397));
    }
  }
  var He = /[<\u2028\u2029]/g;
  function De(e) {
    return JSON.stringify(e).replace(He, function(n) {
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
  function Le(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Ze(e, n, a, c) {
    return a.generateStaticMarkup ? (e.push(B(n)), !1) : (n === "" ? e = c : (c && e.push("<!-- -->"), e.push(B(n)), e = !0), e);
  }
  var qe = Object.assign, z = Symbol.for("react.element"), O = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), A = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), he = Symbol.for("react.scope"), oe = Symbol.for("react.debug_trace_mode"), me = Symbol.for("react.legacy_hidden"), fe = Symbol.for("react.default_value"), Te = Symbol.iterator;
  function ze(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case O:
        return "Portal";
      case w:
        return "Profiler";
      case $:
        return "StrictMode";
      case ee:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case A:
        return (e.displayName || "Context") + ".Consumer";
      case G:
        return (e._context.displayName || "Context") + ".Provider";
      case ue:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case X:
        return n = e.displayName || null, n !== null ? n : ze(e.type) || "Memo";
      case ce:
        n = e._payload, e = e._init;
        try {
          return ze(e(n));
        } catch {
        }
    }
    return null;
  }
  var Ee = {};
  function Ke(e, n) {
    if (e = e.contextTypes, !e) return Ee;
    var a = {}, c;
    for (c in e) a[c] = n[c];
    return a;
  }
  var $e = null;
  function ge(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var a = n.parent;
      if (e === null) {
        if (a !== null) throw Error(s(401));
      } else {
        if (a === null) throw Error(s(401));
        ge(e, a);
      }
      n.context._currentValue2 = n.value;
    }
  }
  function Y(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Y(e);
  }
  function ye(e) {
    var n = e.parent;
    n !== null && ye(n), e.context._currentValue2 = e.value;
  }
  function Je(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(s(402));
    e.depth === n.depth ? ge(e, n) : Je(e, n);
  }
  function Ye(e, n) {
    var a = n.parent;
    if (a === null) throw Error(s(402));
    e.depth === a.depth ? ge(e, a) : Ye(e, a), n.context._currentValue2 = n.value;
  }
  function Me(e) {
    var n = $e;
    n !== e && (n === null ? ye(e) : e === null ? Y(n) : n.depth === e.depth ? ge(n, e) : n.depth > e.depth ? Je(n, e) : Ye(n, e), $e = e);
  }
  var Yt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function Xt(e, n, a, c) {
    var v = e.state !== void 0 ? e.state : null;
    e.updater = Yt, e.props = a, e.state = v;
    var m = { queue: [], replace: !1 };
    e._reactInternals = m;
    var E = n.contextType;
    if (e.context = typeof E == "object" && E !== null ? E._currentValue2 : c, E = n.getDerivedStateFromProps, typeof E == "function" && (E = E(a, v), v = E == null ? v : qe({}, v, E), e.state = v), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Yt.enqueueReplaceState(e, e.state, null), m.queue !== null && 0 < m.queue.length) if (n = m.queue, E = m.replace, m.queue = null, m.replace = !1, E && n.length === 1) e.state = n[0];
    else {
      for (m = E ? n[0] : e.state, v = !0, E = E ? 1 : 0; E < n.length; E++) {
        var I = n[E];
        I = typeof I == "function" ? I.call(e, m, a, c) : I, I != null && (v ? (v = !1, m = qe({}, m, I)) : qe(m, I));
      }
      e.state = m;
    }
    else m.queue = null;
  }
  var ur = { id: 1, overflow: "" };
  function Ct(e, n, a) {
    var c = e.id;
    e = e.overflow;
    var v = 32 - _t(c) - 1;
    c &= ~(1 << v), a += 1;
    var m = 32 - _t(n) + v;
    if (30 < m) {
      var E = v - v % 5;
      return m = (c & (1 << E) - 1).toString(32), c >>= E, v -= E, { id: 1 << 32 - _t(n) + v | a << v | c, overflow: m + e };
    }
    return { id: 1 << m | a << v | c, overflow: e };
  }
  var _t = Math.clz32 ? Math.clz32 : nt, zt = Math.log, Bt = Math.LN2;
  function nt(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zt(e) / Bt | 0) | 0;
  }
  function Et(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Zt = typeof Object.is == "function" ? Object.is : Et, We = null, Kt = null, Qe = null, ve = null, bt = !1, be = !1, et = 0, ft = null, At = 0;
  function ot() {
    if (We === null) throw Error(s(321));
    return We;
  }
  function Jt() {
    if (0 < At) throw Error(s(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $t() {
    return ve === null ? Qe === null ? (bt = !1, Qe = ve = Jt()) : (bt = !0, ve = Qe) : ve.next === null ? (bt = !1, ve = ve.next = Jt()) : (bt = !0, ve = ve.next), ve;
  }
  function Qt() {
    Kt = We = null, be = !1, Qe = null, At = 0, ve = ft = null;
  }
  function Rt(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function jt(e, n, a) {
    if (We = ot(), ve = $t(), bt) {
      var c = ve.queue;
      if (n = c.dispatch, ft !== null && (a = ft.get(c), a !== void 0)) {
        ft.delete(c), c = ve.memoizedState;
        do
          c = e(c, a.action), a = a.next;
        while (a !== null);
        return ve.memoizedState = c, [c, n];
      }
      return [ve.memoizedState, n];
    }
    return e = e === Rt ? typeof n == "function" ? n() : n : a !== void 0 ? a(n) : n, ve.memoizedState = e, e = ve.queue = { last: null, dispatch: null }, e = e.dispatch = Ge.bind(null, We, e), [ve.memoizedState, e];
  }
  function cr(e, n) {
    if (We = ot(), ve = $t(), n = n === void 0 ? null : n, ve !== null) {
      var a = ve.memoizedState;
      if (a !== null && n !== null) {
        var c = a[1];
        e: if (c === null) c = !1;
        else {
          for (var v = 0; v < c.length && v < n.length; v++) if (!Zt(n[v], c[v])) {
            c = !1;
            break e;
          }
          c = !0;
        }
        if (c) return a[0];
      }
    }
    return e = e(), ve.memoizedState = [e, n], e;
  }
  function Ge(e, n, a) {
    if (25 <= At) throw Error(s(301));
    if (e === We) if (be = !0, e = { action: a, next: null }, ft === null && (ft = /* @__PURE__ */ new Map()), a = ft.get(n), a === void 0) ft.set(n, e);
    else {
      for (n = a; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Ht() {
    throw Error(s(394));
  }
  function Ot() {
  }
  var er = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return ot(), e._currentValue2;
  }, useMemo: cr, useReducer: jt, useRef: function(e) {
    We = ot(), ve = $t();
    var n = ve.memoizedState;
    return n === null ? (e = { current: e }, ve.memoizedState = e) : n;
  }, useState: function(e) {
    return jt(Rt, e);
  }, useInsertionEffect: Ot, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return cr(function() {
      return e;
    }, n);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(e) {
    return ot(), e;
  }, useTransition: function() {
    return ot(), [
      !1,
      Ht
    ];
  }, useId: function() {
    var e = Kt.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - _t(e) - 1)).toString(32) + n;
    var a = It;
    if (a === null) throw Error(s(404));
    return n = et++, e = ":" + a.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return ot(), n(e._source);
  }, useSyncExternalStore: function(e, n, a) {
    if (a === void 0) throw Error(s(407));
    return a();
  } }, It = null, mt = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function it(e) {
    return console.error(e), null;
  }
  function Tt() {
  }
  function fr(e, n, a, c, v, m, E, I, Z) {
    var J = [], re = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: c === void 0 ? 12800 : c, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: re, pingedTasks: J, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: v === void 0 ? it : v, onAllReady: Tt, onShellReady: E === void 0 ? Tt : E, onShellError: Tt, onFatalError: Tt }, a = Pt(n, 0, null, a, !1, !1), a.parentFlushed = !0, e = Ut(n, e, null, a, re, Ee, null, ur), J.push(e), n;
  }
  function Ut(e, n, a, c, v, m, E, I) {
    e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++;
    var Z = { node: n, ping: function() {
      var J = e.pingedTasks;
      J.push(Z), J.length === 1 && vr(e);
    }, blockedBoundary: a, blockedSegment: c, abortSet: v, legacyContext: m, context: E, treeContext: I };
    return v.add(Z), Z;
  }
  function Pt(e, n, a, c, v, m) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: c, boundary: a, lastPushedText: v, textEmbedded: m };
  }
  function Mt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function H(e, n) {
    var a = e.onShellError;
    a(n), a = e.onFatalError, a(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function d(e, n, a, c, v) {
    for (We = {}, Kt = n, et = 0, e = a(c, v); be; ) be = !1, et = 0, At += 1, ve = null, e = a(c, v);
    return Qt(), e;
  }
  function b(e, n, a, c) {
    var v = a.render(), m = c.childContextTypes;
    if (m != null) {
      var E = n.legacyContext;
      if (typeof a.getChildContext != "function") c = E;
      else {
        a = a.getChildContext();
        for (var I in a) if (!(I in m)) throw Error(s(108, ze(c) || "Unknown", I));
        c = qe({}, E, a);
      }
      n.legacyContext = c, Se(e, n, v), n.legacyContext = E;
    } else Se(e, n, v);
  }
  function P(e, n) {
    if (e && e.defaultProps) {
      n = qe({}, n), e = e.defaultProps;
      for (var a in e) n[a] === void 0 && (n[a] = e[a]);
      return n;
    }
    return n;
  }
  function de(e, n, a, c, v) {
    if (typeof a == "function") if (a.prototype && a.prototype.isReactComponent) {
      v = Ke(a, n.legacyContext);
      var m = a.contextType;
      m = new a(c, typeof m == "object" && m !== null ? m._currentValue2 : v), Xt(m, a, c, v), b(e, n, m, a);
    } else {
      m = Ke(a, n.legacyContext), v = d(e, n, a, c, m);
      var E = et !== 0;
      if (typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) Xt(v, a, c, m), b(e, n, v, a);
      else if (E) {
        c = n.treeContext, n.treeContext = Ct(c, 1, 0);
        try {
          Se(e, n, v);
        } finally {
          n.treeContext = c;
        }
      } else Se(e, n, v);
    }
    else if (typeof a == "string") {
      switch (v = n.blockedSegment, m = Ce(v.chunks, a, c, e.responseState, v.formatContext), v.lastPushedText = !1, E = v.formatContext, v.formatContext = q(E, a, c), Pe(e, n, m), v.formatContext = E, a) {
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
          v.chunks.push("</", a, ">");
      }
      v.lastPushedText = !1;
    } else {
      switch (a) {
        case me:
        case oe:
        case $:
        case w:
        case L:
          Se(e, n, c.children);
          return;
        case Q:
          Se(e, n, c.children);
          return;
        case he:
          throw Error(s(343));
        case ee:
          e: {
            a = n.blockedBoundary, v = n.blockedSegment, m = c.fallback, c = c.children, E = /* @__PURE__ */ new Set();
            var I = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: E, errorDigest: null }, Z = Pt(e, v.chunks.length, I, v.formatContext, !1, !1);
            v.children.push(Z), v.lastPushedText = !1;
            var J = Pt(e, 0, null, v.formatContext, !1, !1);
            J.parentFlushed = !0, n.blockedBoundary = I, n.blockedSegment = J;
            try {
              if (Pe(
                e,
                n,
                c
              ), e.responseState.generateStaticMarkup || J.lastPushedText && J.textEmbedded && J.chunks.push("<!-- -->"), J.status = 1, pt(I, J), I.pendingTasks === 0) break e;
            } catch (re) {
              J.status = 4, I.forceClientRender = !0, I.errorDigest = Mt(e, re);
            } finally {
              n.blockedBoundary = a, n.blockedSegment = v;
            }
            n = Ut(e, m, a, Z, E, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof a == "object" && a !== null) switch (a.$$typeof) {
        case ue:
          if (c = d(e, n, a.render, c, v), et !== 0) {
            a = n.treeContext, n.treeContext = Ct(a, 1, 0);
            try {
              Se(e, n, c);
            } finally {
              n.treeContext = a;
            }
          } else Se(e, n, c);
          return;
        case X:
          a = a.type, c = P(a, c), de(e, n, a, c, v);
          return;
        case G:
          if (v = c.children, a = a._context, c = c.value, m = a._currentValue2, a._currentValue2 = c, E = $e, $e = c = { parent: E, depth: E === null ? 0 : E.depth + 1, context: a, parentValue: m, value: c }, n.context = c, Se(e, n, v), e = $e, e === null) throw Error(s(403));
          c = e.parentValue, e.context._currentValue2 = c === fe ? e.context._defaultValue : c, e = $e = e.parent, n.context = e;
          return;
        case A:
          c = c.children, c = c(a._currentValue2), Se(e, n, c);
          return;
        case ce:
          v = a._init, a = v(a._payload), c = P(a, c), de(
            e,
            n,
            a,
            c,
            void 0
          );
          return;
      }
      throw Error(s(130, a == null ? a : typeof a, ""));
    }
  }
  function Se(e, n, a) {
    if (n.node = a, typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case z:
          de(e, n, a.type, a.props, a.ref);
          return;
        case O:
          throw Error(s(257));
        case ce:
          var c = a._init;
          a = c(a._payload), Se(e, n, a);
          return;
      }
      if (j(a)) {
        Ne(e, n, a);
        return;
      }
      if (a === null || typeof a != "object" ? c = null : (c = Te && a[Te] || a["@@iterator"], c = typeof c == "function" ? c : null), c && (c = c.call(a))) {
        if (a = c.next(), !a.done) {
          var v = [];
          do
            v.push(a.value), a = c.next();
          while (!a.done);
          Ne(e, n, v);
        }
        return;
      }
      throw e = Object.prototype.toString.call(a), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : e));
    }
    typeof a == "string" ? (c = n.blockedSegment, c.lastPushedText = Ze(n.blockedSegment.chunks, a, e.responseState, c.lastPushedText)) : typeof a == "number" && (c = n.blockedSegment, c.lastPushedText = Ze(n.blockedSegment.chunks, "" + a, e.responseState, c.lastPushedText));
  }
  function Ne(e, n, a) {
    for (var c = a.length, v = 0; v < c; v++) {
      var m = n.treeContext;
      n.treeContext = Ct(m, c, v);
      try {
        Pe(e, n, a[v]);
      } finally {
        n.treeContext = m;
      }
    }
  }
  function Pe(e, n, a) {
    var c = n.blockedSegment.formatContext, v = n.legacyContext, m = n.context;
    try {
      return Se(e, n, a);
    } catch (Z) {
      if (Qt(), typeof Z == "object" && Z !== null && typeof Z.then == "function") {
        a = Z;
        var E = n.blockedSegment, I = Pt(e, E.chunks.length, null, E.formatContext, E.lastPushedText, !0);
        E.children.push(I), E.lastPushedText = !1, e = Ut(e, n.node, n.blockedBoundary, I, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, a.then(e, e), n.blockedSegment.formatContext = c, n.legacyContext = v, n.context = m, Me(m);
      } else throw n.blockedSegment.formatContext = c, n.legacyContext = v, n.context = m, Me(m), Z;
    }
  }
  function at(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, gt(this, n, e);
  }
  function Re(e, n, a) {
    var c = e.blockedBoundary;
    e.blockedSegment.status = 3, c === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, e = a === void 0 ? Error(s(432)) : a, c.errorDigest = n.onError(e), c.parentFlushed && n.clientRenderedBoundaries.push(c)), c.fallbackAbortableTasks.forEach(function(v) {
      return Re(v, n, a);
    }), c.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (c = n.onAllReady, c()));
  }
  function pt(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var a = n.children[0];
      a.id = n.id, a.parentFlushed = !0, a.status === 1 && pt(e, a);
    } else e.completedSegments.push(n);
  }
  function gt(e, n, a) {
    if (n === null) {
      if (a.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(s(389));
        e.completedRootSegment = a;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Tt, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (a.parentFlushed && a.status === 1 && pt(n, a), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(at, e), n.fallbackAbortableTasks.clear()) : a.parentFlushed && a.status === 1 && (pt(n, a), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function vr(e) {
    if (e.status !== 2) {
      var n = $e, a = mt.current;
      mt.current = er;
      var c = It;
      It = e.responseState;
      try {
        var v = e.pingedTasks, m;
        for (m = 0; m < v.length; m++) {
          var E = v[m], I = e, Z = E.blockedSegment;
          if (Z.status === 0) {
            Me(E.context);
            try {
              Se(I, E, E.node), I.responseState.generateStaticMarkup || Z.lastPushedText && Z.textEmbedded && Z.chunks.push("<!-- -->"), E.abortSet.delete(E), Z.status = 1, gt(I, E.blockedBoundary, Z);
            } catch (st) {
              if (Qt(), typeof st == "object" && st !== null && typeof st.then == "function") {
                var J = E.ping;
                st.then(J, J);
              } else {
                E.abortSet.delete(E), Z.status = 4;
                var re = E.blockedBoundary, Oe = st, yt = Mt(I, Oe);
                if (re === null ? H(I, Oe) : (re.pendingTasks--, re.forceClientRender || (re.forceClientRender = !0, re.errorDigest = yt, re.parentFlushed && I.clientRenderedBoundaries.push(re))), I.allPendingTasks--, I.allPendingTasks === 0) {
                  var vt = I.onAllReady;
                  vt();
                }
              }
            } finally {
            }
          }
        }
        v.splice(0, m), e.destination !== null && pr(e, e.destination);
      } catch (st) {
        Mt(e, st), H(e, st);
      } finally {
        It = c, mt.current = a, a === er && Me(n);
      }
    }
  }
  function tr(e, n, a) {
    switch (a.parentFlushed = !0, a.status) {
      case 0:
        var c = a.id = e.nextSegmentId++;
        return a.lastPushedText = !1, a.textEmbedded = !1, e = e.responseState, n.push('<template id="'), n.push(e.placeholderPrefix), e = c.toString(16), n.push(e), n.push('"></template>');
      case 1:
        a.status = 2;
        var v = !0;
        c = a.chunks;
        var m = 0;
        a = a.children;
        for (var E = 0; E < a.length; E++) {
          for (v = a[E]; m < v.index; m++) n.push(c[m]);
          v = rr(e, n, v);
        }
        for (; m < c.length - 1; m++) n.push(c[m]);
        return m < c.length && (v = n.push(c[m])), v;
      default:
        throw Error(s(390));
    }
  }
  function rr(e, n, a) {
    var c = a.boundary;
    if (c === null) return tr(e, n, a);
    if (c.parentFlushed = !0, c.forceClientRender) return e.responseState.generateStaticMarkup || (c = c.errorDigest, n.push("<!--$!-->"), n.push("<template"), c && (n.push(' data-dgst="'), c = B(c), n.push(c), n.push('"')), n.push("></template>")), tr(e, n, a), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < c.pendingTasks) {
      c.rootSegmentID = e.nextSegmentId++, 0 < c.completedSegments.length && e.partialBoundaries.push(c);
      var v = e.responseState, m = v.nextSuspenseID++;
      return v = v.boundaryPrefix + m.toString(16), c = c.id = v, Be(n, e.responseState, c), tr(e, n, a), n.push("<!--/$-->");
    }
    if (c.byteSize > e.progressiveChunkSize) return c.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(c), Be(n, e.responseState, c.id), tr(e, n, a), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), a = c.completedSegments, a.length !== 1) throw Error(s(391));
    return rr(e, n, a[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function Sr(e, n, a) {
    return Ie(n, e.responseState, a.formatContext, a.id), rr(e, n, a), rt(n, a.formatContext);
  }
  function wr(e, n, a) {
    for (var c = a.completedSegments, v = 0; v < c.length; v++) xr(e, n, a, c[v]);
    if (c.length = 0, e = e.responseState, c = a.id, a = a.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), c === null) throw Error(s(395));
    return a = a.toString(16), n.push(c), n.push('","'), n.push(e.segmentPrefix), n.push(a), n.push('")<\/script>');
  }
  function xr(e, n, a, c) {
    if (c.status === 2) return !0;
    var v = c.id;
    if (v === -1) {
      if ((c.id = a.rootSegmentID) === -1) throw Error(s(392));
      return Sr(e, n, c);
    }
    return Sr(e, n, c), e = e.responseState, n.push(e.startInlineScript), e.sentCompleteSegmentFunction ? n.push('$RS("') : (e.sentCompleteSegmentFunction = !0, n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), v = v.toString(16), n.push(v), n.push('","'), n.push(e.placeholderPrefix), n.push(v), n.push('")<\/script>');
  }
  function pr(e, n) {
    try {
      var a = e.completedRootSegment;
      if (a !== null && e.pendingRootTasks === 0) {
        rr(e, n, a), e.completedRootSegment = null;
        var c = e.responseState.bootstrapChunks;
        for (a = 0; a < c.length - 1; a++) n.push(c[a]);
        a < c.length && n.push(c[a]);
      }
      var v = e.clientRenderedBoundaries, m;
      for (m = 0; m < v.length; m++) {
        var E = v[m];
        c = n;
        var I = e.responseState, Z = E.id, J = E.errorDigest, re = E.errorMessage, Oe = E.errorComponentStack;
        if (c.push(I.startInlineScript), I.sentClientRenderFunction ? c.push('$RX("') : (I.sentClientRenderFunction = !0, c.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), Z === null) throw Error(s(395));
        if (c.push(Z), c.push('"'), J || re || Oe) {
          c.push(",");
          var yt = De(J || "");
          c.push(yt);
        }
        if (re || Oe) {
          c.push(",");
          var vt = De(re || "");
          c.push(vt);
        }
        if (Oe) {
          c.push(",");
          var st = De(Oe);
          c.push(st);
        }
        if (!c.push(")<\/script>")) {
          e.destination = null, m++, v.splice(0, m);
          return;
        }
      }
      v.splice(0, m);
      var nr = e.completedBoundaries;
      for (m = 0; m < nr.length; m++) if (!wr(e, n, nr[m])) {
        e.destination = null, m++, nr.splice(0, m);
        return;
      }
      nr.splice(0, m);
      var Nt = e.partialBoundaries;
      for (m = 0; m < Nt.length; m++) {
        var Er = Nt[m];
        e: {
          v = e, E = n;
          var or = Er.completedSegments;
          for (I = 0; I < or.length; I++) if (!xr(v, E, Er, or[I])) {
            I++, or.splice(0, I);
            var Nr = !1;
            break e;
          }
          or.splice(0, I), Nr = !0;
        }
        if (!Nr) {
          e.destination = null, m++, Nt.splice(0, m);
          return;
        }
      }
      Nt.splice(0, m);
      var Vt = e.completedBoundaries;
      for (m = 0; m < Vt.length; m++) if (!wr(e, n, Vt[m])) {
        e.destination = null, m++, Vt.splice(0, m);
        return;
      }
      Vt.splice(0, m);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function Pr(e, n) {
    try {
      var a = e.abortableTasks;
      a.forEach(function(c) {
        return Re(c, e, n);
      }), a.clear(), e.destination !== null && pr(e, e.destination);
    } catch (c) {
      Mt(e, c), H(e, c);
    }
  }
  function Mr() {
  }
  function kr(e, n, a, c) {
    var v = !1, m = null, E = "", I = { push: function(J) {
      return J !== null && (E += J), !0;
    }, destroy: function(J) {
      v = !0, m = J;
    } }, Z = !1;
    if (e = fr(e, Le(a, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Mr, void 0, function() {
      Z = !0;
    }), vr(e), Pr(e, c), e.status === 1) e.status = 2, I.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = I;
      try {
        pr(e, I);
      } catch (J) {
        Mt(e, J), H(e, J);
      }
    }
    if (v) throw m;
    if (!Z) throw Error(s(426));
    return E;
  }
  return sr.renderToNodeStream = function() {
    throw Error(s(207));
  }, sr.renderToStaticMarkup = function(e, n) {
    return kr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, sr.renderToStaticNodeStream = function() {
    throw Error(s(208));
  }, sr.renderToString = function(e, n) {
    return kr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, sr.version = "18.3.1", sr;
}
var Xr = {};
var To;
function ta() {
  if (To) return Xr;
  To = 1;
  var o = Lt;
  function s(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, i = 1; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = null, f = 0;
  function p(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < f && (t.enqueue(new Uint8Array(l.buffer, 0, f)), l = new Uint8Array(512), f = 0), t.enqueue(r);
    else {
      var i = l.length - f;
      i < r.length && (i === 0 ? t.enqueue(l) : (l.set(r.subarray(0, i), f), t.enqueue(l), r = r.subarray(i)), l = new Uint8Array(512), f = 0), l.set(r, f), f += r.length;
    }
  }
  function h(t, r) {
    return p(t, r), !0;
  }
  function k(t) {
    l && 0 < f && (t.enqueue(new Uint8Array(l.buffer, 0, f)), l = null, f = 0);
  }
  var C = new TextEncoder();
  function x(t) {
    return C.encode(t);
  }
  function S(t) {
    return C.encode(t);
  }
  function V(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var D = Object.prototype.hasOwnProperty, ne = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, se = {}, B = {};
  function F(t) {
    return D.call(B, t) ? !0 : D.call(se, t) ? !1 : ne.test(t) ? B[t] = !0 : (se[t] = !0, !1);
  }
  function N(t, r, i, u, y, g, T) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = y, this.mustUseProperty = i, this.propertyName = t, this.type = r, this.sanitizeURL = g, this.removeEmptyString = T;
  }
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    j[t] = new N(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    j[r] = new N(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    j[t] = new N(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    j[t] = new N(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    j[t] = new N(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    j[t] = new N(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    j[t] = new N(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    j[t] = new N(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    j[t] = new N(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function q(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      U,
      q
    );
    j[r] = new N(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(U, q);
    j[r] = new N(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(U, q);
    j[r] = new N(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    j[t] = new N(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), j.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    j[t] = new N(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var W = {
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
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(W).forEach(function(t) {
    _.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), W[r] = W[t];
    });
  });
  var te = /["'&<>]/;
  function pe(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = te.exec(t);
    if (r) {
      var i = "", u, y = 0;
      for (u = r.index; u < t.length; u++) {
        switch (t.charCodeAt(u)) {
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
        y !== u && (i += t.substring(y, u)), y = u + 1, i += r;
      }
      t = y !== u ? i + t.substring(y, u) : i;
    }
    return t;
  }
  var Fe = /([A-Z])/g, je = /^ms-/, Ve = Array.isArray, tt = S("<script>"), ke = S("<\/script>"), Ce = S('<script src="'), Be = S('<script type="module" src="'), Ie = S('" async=""><\/script>'), rt = /(<\/|<)(s)(cript)/gi;
  function He(t, r, i, u) {
    return "" + r + (i === "s" ? "\\u0073" : "\\u0053") + u;
  }
  function De(t, r, i, u, y) {
    t = t === void 0 ? "" : t, r = r === void 0 ? tt : S('<script nonce="' + pe(r) + '">');
    var g = [];
    if (i !== void 0 && g.push(r, x(("" + i).replace(rt, He)), ke), u !== void 0) for (i = 0; i < u.length; i++) g.push(Ce, x(pe(u[i])), Ie);
    if (y !== void 0) for (u = 0; u < y.length; u++) g.push(Be, x(pe(y[u])), Ie);
    return { bootstrapChunks: g, startInlineScript: r, placeholderPrefix: S(t + "P:"), segmentPrefix: S(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Le(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Ze(t) {
    return Le(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function qe(t, r, i) {
    switch (r) {
      case "select":
        return Le(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return Le(2, null);
      case "math":
        return Le(3, null);
      case "foreignObject":
        return Le(1, null);
      case "table":
        return Le(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Le(5, null);
      case "colgroup":
        return Le(7, null);
      case "tr":
        return Le(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? Le(1, null) : t;
  }
  var z = S("<!-- -->");
  function O(t, r, i, u) {
    return r === "" ? u : (u && t.push(z), t.push(x(pe(r))), !0);
  }
  var L = /* @__PURE__ */ new Map(), $ = S(' style="'), w = S(":"), G = S(";");
  function A(t, r, i) {
    if (typeof i != "object") throw Error(s(62));
    r = !0;
    for (var u in i) if (D.call(i, u)) {
      var y = i[u];
      if (y != null && typeof y != "boolean" && y !== "") {
        if (u.indexOf("--") === 0) {
          var g = x(pe(u));
          y = x(pe(("" + y).trim()));
        } else {
          g = u;
          var T = L.get(g);
          T !== void 0 || (T = S(pe(g.replace(Fe, "-$1").toLowerCase().replace(je, "-ms-"))), L.set(g, T)), g = T, y = typeof y == "number" ? y === 0 || D.call(W, u) ? x("" + y) : x(y + "px") : x(pe(("" + y).trim()));
        }
        r ? (r = !1, t.push($, g, w, y)) : t.push(G, g, w, y);
      }
    }
    r || t.push(Q);
  }
  var ue = S(" "), ee = S('="'), Q = S('"'), X = S('=""');
  function ce(t, r, i, u) {
    switch (i) {
      case "style":
        A(t, r, u);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") {
      if (r = j.hasOwnProperty(i) ? j[i] : null, r !== null) {
        switch (typeof u) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (i = x(r.attributeName), r.type) {
          case 3:
            u && t.push(ue, i, X);
            break;
          case 4:
            u === !0 ? t.push(ue, i, X) : u !== !1 && t.push(ue, i, ee, x(pe(u)), Q);
            break;
          case 5:
            isNaN(u) || t.push(ue, i, ee, x(pe(u)), Q);
            break;
          case 6:
            !isNaN(u) && 1 <= u && t.push(ue, i, ee, x(pe(u)), Q);
            break;
          default:
            r.sanitizeURL && (u = "" + u), t.push(ue, i, ee, x(pe(u)), Q);
        }
      } else if (F(i)) {
        switch (typeof u) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = i.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(ue, x(i), ee, x(pe(u)), Q);
      }
    }
  }
  var he = S(">"), oe = S("/>");
  function me(t, r, i) {
    if (r != null) {
      if (i != null) throw Error(s(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(s(61));
      r = r.__html, r != null && t.push(x("" + r));
    }
  }
  function fe(t) {
    var r = "";
    return o.Children.forEach(t, function(i) {
      i != null && (r += i);
    }), r;
  }
  var Te = S(' selected=""');
  function ze(t, r, i, u) {
    t.push(ge(i));
    var y = i = null, g;
    for (g in r) if (D.call(r, g)) {
      var T = r[g];
      if (T != null) switch (g) {
        case "children":
          i = T;
          break;
        case "dangerouslySetInnerHTML":
          y = T;
          break;
        default:
          ce(t, u, g, T);
      }
    }
    return t.push(he), me(t, y, i), typeof i == "string" ? (t.push(x(pe(i))), null) : i;
  }
  var Ee = S(`
`), Ke = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function ge(t) {
    var r = $e.get(t);
    if (r === void 0) {
      if (!Ke.test(t)) throw Error(s(65, t));
      r = S("<" + t), $e.set(t, r);
    }
    return r;
  }
  var Y = S("<!DOCTYPE html>");
  function ye(t, r, i, u, y) {
    switch (r) {
      case "select":
        t.push(ge("select"));
        var g = null, T = null;
        for (ie in i) if (D.call(i, ie)) {
          var R = i[ie];
          if (R != null) switch (ie) {
            case "children":
              g = R;
              break;
            case "dangerouslySetInnerHTML":
              T = R;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(t, u, ie, R);
          }
        }
        return t.push(he), me(t, T, g), g;
      case "option":
        T = y.selectedValue, t.push(ge("option"));
        var K = R = null, le = null, ie = null;
        for (g in i) if (D.call(i, g)) {
          var Ae = i[g];
          if (Ae != null) switch (g) {
            case "children":
              R = Ae;
              break;
            case "selected":
              le = Ae;
              break;
            case "dangerouslySetInnerHTML":
              ie = Ae;
              break;
            case "value":
              K = Ae;
            default:
              ce(t, u, g, Ae);
          }
        }
        if (T != null) if (i = K !== null ? "" + K : fe(R), Ve(T)) {
          for (u = 0; u < T.length; u++)
            if ("" + T[u] === i) {
              t.push(Te);
              break;
            }
        } else "" + T === i && t.push(Te);
        else le && t.push(Te);
        return t.push(he), me(t, ie, R), R;
      case "textarea":
        t.push(ge("textarea")), ie = T = g = null;
        for (R in i) if (D.call(i, R) && (K = i[R], K != null)) switch (R) {
          case "children":
            ie = K;
            break;
          case "value":
            g = K;
            break;
          case "defaultValue":
            T = K;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(91));
          default:
            ce(t, u, R, K);
        }
        if (g === null && T !== null && (g = T), t.push(he), ie != null) {
          if (g != null) throw Error(s(92));
          if (Ve(ie) && 1 < ie.length) throw Error(s(93));
          g = "" + ie;
        }
        return typeof g == "string" && g[0] === `
` && t.push(Ee), g !== null && t.push(x(pe("" + g))), null;
      case "input":
        t.push(ge("input")), K = ie = R = g = null;
        for (T in i) if (D.call(i, T) && (le = i[T], le != null)) switch (T) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, "input"));
          case "defaultChecked":
            K = le;
            break;
          case "defaultValue":
            R = le;
            break;
          case "checked":
            ie = le;
            break;
          case "value":
            g = le;
            break;
          default:
            ce(t, u, T, le);
        }
        return ie !== null ? ce(
          t,
          u,
          "checked",
          ie
        ) : K !== null && ce(t, u, "checked", K), g !== null ? ce(t, u, "value", g) : R !== null && ce(t, u, "value", R), t.push(oe), null;
      case "menuitem":
        t.push(ge("menuitem"));
        for (var ut in i) if (D.call(i, ut) && (g = i[ut], g != null)) switch (ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(400));
          default:
            ce(t, u, ut, g);
        }
        return t.push(he), null;
      case "title":
        t.push(ge("title")), g = null;
        for (Ae in i) if (D.call(i, Ae) && (T = i[Ae], T != null)) switch (Ae) {
          case "children":
            g = T;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(434));
          default:
            ce(t, u, Ae, T);
        }
        return t.push(he), g;
      case "listing":
      case "pre":
        t.push(ge(r)), T = g = null;
        for (K in i) if (D.call(i, K) && (R = i[K], R != null)) switch (K) {
          case "children":
            g = R;
            break;
          case "dangerouslySetInnerHTML":
            T = R;
            break;
          default:
            ce(t, u, K, R);
        }
        if (t.push(he), T != null) {
          if (g != null) throw Error(s(60));
          if (typeof T != "object" || !("__html" in T)) throw Error(s(61));
          i = T.__html, i != null && (typeof i == "string" && 0 < i.length && i[0] === `
` ? t.push(Ee, x(i)) : t.push(x("" + i)));
        }
        return typeof g == "string" && g[0] === `
` && t.push(Ee), g;
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
        t.push(ge(r));
        for (var St in i) if (D.call(i, St) && (g = i[St], g != null)) switch (St) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, r));
          default:
            ce(t, u, St, g);
        }
        return t.push(oe), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ze(t, i, r, u);
      case "html":
        return y.insertionMode === 0 && t.push(Y), ze(t, i, r, u);
      default:
        if (r.indexOf("-") === -1 && typeof i.is != "string") return ze(t, i, r, u);
        t.push(ge(r)), T = g = null;
        for (le in i) if (D.call(i, le) && (R = i[le], R != null)) switch (le) {
          case "children":
            g = R;
            break;
          case "dangerouslySetInnerHTML":
            T = R;
            break;
          case "style":
            A(t, u, R);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            F(le) && typeof R != "function" && typeof R != "symbol" && t.push(ue, x(le), ee, x(pe(R)), Q);
        }
        return t.push(he), me(t, T, g), g;
    }
  }
  var Je = S("</"), Ye = S(">"), Me = S('<template id="'), Yt = S('"></template>'), Xt = S("<!--$-->"), ur = S('<!--$?--><template id="'), Ct = S('"></template>'), _t = S("<!--$!-->"), zt = S("<!--/$-->"), Bt = S("<template"), nt = S('"'), Et = S(' data-dgst="');
  S(' data-msg="'), S(' data-stck="');
  var Zt = S("></template>");
  function We(t, r, i) {
    if (p(t, ur), i === null) throw Error(s(395));
    return p(t, i), h(t, Ct);
  }
  var Kt = S('<div hidden id="'), Qe = S('">'), ve = S("</div>"), bt = S('<svg aria-hidden="true" style="display:none" id="'), be = S('">'), et = S("</svg>"), ft = S('<math aria-hidden="true" style="display:none" id="'), At = S('">'), ot = S("</math>"), Jt = S('<table hidden id="'), $t = S('">'), Qt = S("</table>"), Rt = S('<table hidden><tbody id="'), jt = S('">'), cr = S("</tbody></table>"), Ge = S('<table hidden><tr id="'), Ht = S('">'), Ot = S("</tr></table>"), er = S('<table hidden><colgroup id="'), It = S('">'), mt = S("</colgroup></table>");
  function it(t, r, i, u) {
    switch (i.insertionMode) {
      case 0:
      case 1:
        return p(t, Kt), p(t, r.segmentPrefix), p(t, x(u.toString(16))), h(t, Qe);
      case 2:
        return p(t, bt), p(t, r.segmentPrefix), p(t, x(u.toString(16))), h(t, be);
      case 3:
        return p(t, ft), p(t, r.segmentPrefix), p(t, x(u.toString(16))), h(t, At);
      case 4:
        return p(t, Jt), p(t, r.segmentPrefix), p(t, x(u.toString(16))), h(t, $t);
      case 5:
        return p(t, Rt), p(t, r.segmentPrefix), p(t, x(u.toString(16))), h(t, jt);
      case 6:
        return p(t, Ge), p(t, r.segmentPrefix), p(t, x(u.toString(16))), h(t, Ht);
      case 7:
        return p(
          t,
          er
        ), p(t, r.segmentPrefix), p(t, x(u.toString(16))), h(t, It);
      default:
        throw Error(s(397));
    }
  }
  function Tt(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return h(t, ve);
      case 2:
        return h(t, et);
      case 3:
        return h(t, ot);
      case 4:
        return h(t, Qt);
      case 5:
        return h(t, cr);
      case 6:
        return h(t, Ot);
      case 7:
        return h(t, mt);
      default:
        throw Error(s(397));
    }
  }
  var fr = S('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ut = S('$RS("'), Pt = S('","'), Mt = S('")<\/script>'), H = S('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), d = S('$RC("'), b = S('","'), P = S('")<\/script>'), de = S('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Se = S('$RX("'), Ne = S('"'), Pe = S(")<\/script>"), at = S(","), Re = /[<\u2028\u2029]/g;
  function pt(t) {
    return JSON.stringify(t).replace(Re, function(r) {
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
  var gt = Object.assign, vr = Symbol.for("react.element"), tr = Symbol.for("react.portal"), rr = Symbol.for("react.fragment"), Sr = Symbol.for("react.strict_mode"), wr = Symbol.for("react.profiler"), xr = Symbol.for("react.provider"), pr = Symbol.for("react.context"), Pr = Symbol.for("react.forward_ref"), Mr = Symbol.for("react.suspense"), kr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), a = Symbol.for("react.scope"), c = Symbol.for("react.debug_trace_mode"), v = Symbol.for("react.legacy_hidden"), m = Symbol.for("react.default_value"), E = Symbol.iterator;
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case rr:
        return "Fragment";
      case tr:
        return "Portal";
      case wr:
        return "Profiler";
      case Sr:
        return "StrictMode";
      case Mr:
        return "Suspense";
      case kr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case pr:
        return (t.displayName || "Context") + ".Consumer";
      case xr:
        return (t._context.displayName || "Context") + ".Provider";
      case Pr:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return r = t.displayName || null, r !== null ? r : I(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return I(t(r));
        } catch {
        }
    }
    return null;
  }
  var Z = {};
  function J(t, r) {
    if (t = t.contextTypes, !t) return Z;
    var i = {}, u;
    for (u in t) i[u] = r[u];
    return i;
  }
  var re = null;
  function Oe(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var i = r.parent;
      if (t === null) {
        if (i !== null) throw Error(s(401));
      } else {
        if (i === null) throw Error(s(401));
        Oe(t, i);
      }
      r.context._currentValue = r.value;
    }
  }
  function yt(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && yt(t);
  }
  function vt(t) {
    var r = t.parent;
    r !== null && vt(r), t.context._currentValue = t.value;
  }
  function st(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(s(402));
    t.depth === r.depth ? Oe(t, r) : st(t, r);
  }
  function nr(t, r) {
    var i = r.parent;
    if (i === null) throw Error(s(402));
    t.depth === i.depth ? Oe(t, i) : nr(t, i), r.context._currentValue = r.value;
  }
  function Nt(t) {
    var r = re;
    r !== t && (r === null ? vt(t) : t === null ? yt(r) : r.depth === t.depth ? Oe(r, t) : r.depth > t.depth ? st(r, t) : nr(r, t), re = t);
  }
  var Er = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function or(t, r, i, u) {
    var y = t.state !== void 0 ? t.state : null;
    t.updater = Er, t.props = i, t.state = y;
    var g = { queue: [], replace: !1 };
    t._reactInternals = g;
    var T = r.contextType;
    if (t.context = typeof T == "object" && T !== null ? T._currentValue : u, T = r.getDerivedStateFromProps, typeof T == "function" && (T = T(i, y), y = T == null ? y : gt({}, y, T), t.state = y), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && Er.enqueueReplaceState(t, t.state, null), g.queue !== null && 0 < g.queue.length) if (r = g.queue, T = g.replace, g.queue = null, g.replace = !1, T && r.length === 1) t.state = r[0];
    else {
      for (g = T ? r[0] : t.state, y = !0, T = T ? 1 : 0; T < r.length; T++) {
        var R = r[T];
        R = typeof R == "function" ? R.call(t, g, i, u) : R, R != null && (y ? (y = !1, g = gt({}, g, R)) : gt(g, R));
      }
      t.state = g;
    }
    else g.queue = null;
  }
  var Nr = { id: 1, overflow: "" };
  function Vt(t, r, i) {
    var u = t.id;
    t = t.overflow;
    var y = 32 - Fr(u) - 1;
    u &= ~(1 << y), i += 1;
    var g = 32 - Fr(r) + y;
    if (30 < g) {
      var T = y - y % 5;
      return g = (u & (1 << T) - 1).toString(32), u >>= T, y -= T, { id: 1 << 32 - Fr(r) + y | i << y | u, overflow: g + t };
    }
    return { id: 1 << g | i << y | u, overflow: t };
  }
  var Fr = Math.clz32 ? Math.clz32 : oi, ri = Math.log, ni = Math.LN2;
  function oi(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ri(t) / ni | 0) | 0;
  }
  function ii(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var ai = typeof Object.is == "function" ? Object.is : ii, Ft = null, sn = null, Dr = null, _e = null, Tr = !1, Lr = !1, Cr = 0, Wt = null, zr = 0;
  function ir() {
    if (Ft === null) throw Error(s(321));
    return Ft;
  }
  function Gn() {
    if (0 < zr) throw Error(s(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ln() {
    return _e === null ? Dr === null ? (Tr = !1, Dr = _e = Gn()) : (Tr = !0, _e = Dr) : _e.next === null ? (Tr = !1, _e = _e.next = Gn()) : (Tr = !0, _e = _e.next), _e;
  }
  function un() {
    sn = Ft = null, Lr = !1, Dr = null, zr = 0, _e = Wt = null;
  }
  function qn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Yn(t, r, i) {
    if (Ft = ir(), _e = ln(), Tr) {
      var u = _e.queue;
      if (r = u.dispatch, Wt !== null && (i = Wt.get(u), i !== void 0)) {
        Wt.delete(u), u = _e.memoizedState;
        do
          u = t(u, i.action), i = i.next;
        while (i !== null);
        return _e.memoizedState = u, [u, r];
      }
      return [_e.memoizedState, r];
    }
    return t = t === qn ? typeof r == "function" ? r() : r : i !== void 0 ? i(r) : r, _e.memoizedState = t, t = _e.queue = { last: null, dispatch: null }, t = t.dispatch = si.bind(null, Ft, t), [_e.memoizedState, t];
  }
  function Xn(t, r) {
    if (Ft = ir(), _e = ln(), r = r === void 0 ? null : r, _e !== null) {
      var i = _e.memoizedState;
      if (i !== null && r !== null) {
        var u = i[1];
        e: if (u === null) u = !1;
        else {
          for (var y = 0; y < u.length && y < r.length; y++) if (!ai(r[y], u[y])) {
            u = !1;
            break e;
          }
          u = !0;
        }
        if (u) return i[0];
      }
    }
    return t = t(), _e.memoizedState = [t, r], t;
  }
  function si(t, r, i) {
    if (25 <= zr) throw Error(s(301));
    if (t === Ft) if (Lr = !0, t = { action: i, next: null }, Wt === null && (Wt = /* @__PURE__ */ new Map()), i = Wt.get(r), i === void 0) Wt.set(r, t);
    else {
      for (r = i; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function li() {
    throw Error(s(394));
  }
  function Br() {
  }
  var Zn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return ir(), t._currentValue;
  }, useMemo: Xn, useReducer: Yn, useRef: function(t) {
    Ft = ir(), _e = ln();
    var r = _e.memoizedState;
    return r === null ? (t = { current: t }, _e.memoizedState = t) : r;
  }, useState: function(t) {
    return Yn(qn, t);
  }, useInsertionEffect: Br, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return Xn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Br, useEffect: Br, useDebugValue: Br, useDeferredValue: function(t) {
    return ir(), t;
  }, useTransition: function() {
    return ir(), [!1, li];
  }, useId: function() {
    var t = sn.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Fr(t) - 1)).toString(32) + r;
    var i = $r;
    if (i === null) throw Error(s(404));
    return r = Cr++, t = ":" + i.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return ir(), r(t._source);
  }, useSyncExternalStore: function(t, r, i) {
    if (i === void 0) throw Error(s(407));
    return i();
  } }, $r = null, cn = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ui(t) {
    return console.error(t), null;
  }
  function _r() {
  }
  function ci(t, r, i, u, y, g, T, R, K) {
    var le = [], ie = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: u === void 0 ? 12800 : u, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ie, pingedTasks: le, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: y === void 0 ? ui : y, onAllReady: g === void 0 ? _r : g, onShellReady: T === void 0 ? _r : T, onShellError: R === void 0 ? _r : R, onFatalError: K === void 0 ? _r : K }, i = jr(r, 0, null, i, !1, !1), i.parentFlushed = !0, t = fn(r, t, null, i, ie, Z, null, Nr), le.push(t), r;
  }
  function fn(t, r, i, u, y, g, T, R) {
    t.allPendingTasks++, i === null ? t.pendingRootTasks++ : i.pendingTasks++;
    var K = { node: r, ping: function() {
      var le = t.pingedTasks;
      le.push(K), le.length === 1 && no(t);
    }, blockedBoundary: i, blockedSegment: u, abortSet: y, legacyContext: g, context: T, treeContext: R };
    return y.add(K), K;
  }
  function jr(t, r, i, u, y, g) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: u, boundary: i, lastPushedText: y, textEmbedded: g };
  }
  function br(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Hr(t, r) {
    var i = t.onShellError;
    i(r), i = t.onFatalError, i(r), t.destination !== null ? (t.status = 2, V(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function Kn(t, r, i, u, y) {
    for (Ft = {}, sn = r, Cr = 0, t = i(u, y); Lr; ) Lr = !1, Cr = 0, zr += 1, _e = null, t = i(u, y);
    return un(), t;
  }
  function Jn(t, r, i, u) {
    var y = i.render(), g = u.childContextTypes;
    if (g != null) {
      var T = r.legacyContext;
      if (typeof i.getChildContext != "function") u = T;
      else {
        i = i.getChildContext();
        for (var R in i) if (!(R in g)) throw Error(s(108, I(u) || "Unknown", R));
        u = gt({}, T, i);
      }
      r.legacyContext = u, lt(t, r, y), r.legacyContext = T;
    } else lt(t, r, y);
  }
  function Qn(t, r) {
    if (t && t.defaultProps) {
      r = gt({}, r), t = t.defaultProps;
      for (var i in t) r[i] === void 0 && (r[i] = t[i]);
      return r;
    }
    return r;
  }
  function pn(t, r, i, u, y) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      y = J(i, r.legacyContext);
      var g = i.contextType;
      g = new i(u, typeof g == "object" && g !== null ? g._currentValue : y), or(g, i, u, y), Jn(t, r, g, i);
    } else {
      g = J(i, r.legacyContext), y = Kn(t, r, i, u, g);
      var T = Cr !== 0;
      if (typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) or(y, i, u, g), Jn(t, r, y, i);
      else if (T) {
        u = r.treeContext, r.treeContext = Vt(u, 1, 0);
        try {
          lt(t, r, y);
        } finally {
          r.treeContext = u;
        }
      } else lt(t, r, y);
    }
    else if (typeof i == "string") {
      switch (y = r.blockedSegment, g = ye(y.chunks, i, u, t.responseState, y.formatContext), y.lastPushedText = !1, T = y.formatContext, y.formatContext = qe(T, i, u), dn(t, r, g), y.formatContext = T, i) {
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
          y.chunks.push(Je, x(i), Ye);
      }
      y.lastPushedText = !1;
    } else {
      switch (i) {
        case v:
        case c:
        case Sr:
        case wr:
        case rr:
          lt(t, r, u.children);
          return;
        case kr:
          lt(t, r, u.children);
          return;
        case a:
          throw Error(s(343));
        case Mr:
          e: {
            i = r.blockedBoundary, y = r.blockedSegment, g = u.fallback, u = u.children, T = /* @__PURE__ */ new Set();
            var R = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: T, errorDigest: null }, K = jr(t, y.chunks.length, R, y.formatContext, !1, !1);
            y.children.push(K), y.lastPushedText = !1;
            var le = jr(t, 0, null, y.formatContext, !1, !1);
            le.parentFlushed = !0, r.blockedBoundary = R, r.blockedSegment = le;
            try {
              if (dn(
                t,
                r,
                u
              ), le.lastPushedText && le.textEmbedded && le.chunks.push(z), le.status = 1, Ur(R, le), R.pendingTasks === 0) break e;
            } catch (ie) {
              le.status = 4, R.forceClientRender = !0, R.errorDigest = br(t, ie);
            } finally {
              r.blockedBoundary = i, r.blockedSegment = y;
            }
            r = fn(t, g, i, K, T, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case Pr:
          if (u = Kn(t, r, i.render, u, y), Cr !== 0) {
            i = r.treeContext, r.treeContext = Vt(i, 1, 0);
            try {
              lt(t, r, u);
            } finally {
              r.treeContext = i;
            }
          } else lt(t, r, u);
          return;
        case e:
          i = i.type, u = Qn(i, u), pn(t, r, i, u, y);
          return;
        case xr:
          if (y = u.children, i = i._context, u = u.value, g = i._currentValue, i._currentValue = u, T = re, re = u = { parent: T, depth: T === null ? 0 : T.depth + 1, context: i, parentValue: g, value: u }, r.context = u, lt(t, r, y), t = re, t === null) throw Error(s(403));
          u = t.parentValue, t.context._currentValue = u === m ? t.context._defaultValue : u, t = re = t.parent, r.context = t;
          return;
        case pr:
          u = u.children, u = u(i._currentValue), lt(t, r, u);
          return;
        case n:
          y = i._init, i = y(i._payload), u = Qn(i, u), pn(t, r, i, u, void 0);
          return;
      }
      throw Error(s(
        130,
        i == null ? i : typeof i,
        ""
      ));
    }
  }
  function lt(t, r, i) {
    if (r.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case vr:
          pn(t, r, i.type, i.props, i.ref);
          return;
        case tr:
          throw Error(s(257));
        case n:
          var u = i._init;
          i = u(i._payload), lt(t, r, i);
          return;
      }
      if (Ve(i)) {
        eo(t, r, i);
        return;
      }
      if (i === null || typeof i != "object" ? u = null : (u = E && i[E] || i["@@iterator"], u = typeof u == "function" ? u : null), u && (u = u.call(i))) {
        if (i = u.next(), !i.done) {
          var y = [];
          do
            y.push(i.value), i = u.next();
          while (!i.done);
          eo(t, r, y);
        }
        return;
      }
      throw t = Object.prototype.toString.call(i), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : t));
    }
    typeof i == "string" ? (u = r.blockedSegment, u.lastPushedText = O(r.blockedSegment.chunks, i, t.responseState, u.lastPushedText)) : typeof i == "number" && (u = r.blockedSegment, u.lastPushedText = O(r.blockedSegment.chunks, "" + i, t.responseState, u.lastPushedText));
  }
  function eo(t, r, i) {
    for (var u = i.length, y = 0; y < u; y++) {
      var g = r.treeContext;
      r.treeContext = Vt(g, u, y);
      try {
        dn(t, r, i[y]);
      } finally {
        r.treeContext = g;
      }
    }
  }
  function dn(t, r, i) {
    var u = r.blockedSegment.formatContext, y = r.legacyContext, g = r.context;
    try {
      return lt(t, r, i);
    } catch (K) {
      if (un(), typeof K == "object" && K !== null && typeof K.then == "function") {
        i = K;
        var T = r.blockedSegment, R = jr(t, T.chunks.length, null, T.formatContext, T.lastPushedText, !0);
        T.children.push(R), T.lastPushedText = !1, t = fn(t, r.node, r.blockedBoundary, R, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, i.then(t, t), r.blockedSegment.formatContext = u, r.legacyContext = y, r.context = g, Nt(g);
      } else throw r.blockedSegment.formatContext = u, r.legacyContext = y, r.context = g, Nt(g), K;
    }
  }
  function fi(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, ro(this, r, t);
  }
  function to(t, r, i) {
    var u = t.blockedBoundary;
    t.blockedSegment.status = 3, u === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, t = i === void 0 ? Error(s(432)) : i, u.errorDigest = r.onError(t), u.parentFlushed && r.clientRenderedBoundaries.push(u)), u.fallbackAbortableTasks.forEach(function(y) {
      return to(y, r, i);
    }), u.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (u = r.onAllReady, u()));
  }
  function Ur(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var i = r.children[0];
      i.id = r.id, i.parentFlushed = !0, i.status === 1 && Ur(t, i);
    } else t.completedSegments.push(r);
  }
  function ro(t, r, i) {
    if (r === null) {
      if (i.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(s(389));
        t.completedRootSegment = i;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = _r, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Ur(r, i), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(fi, t), r.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Ur(r, i), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function no(t) {
    if (t.status !== 2) {
      var r = re, i = cn.current;
      cn.current = Zn;
      var u = $r;
      $r = t.responseState;
      try {
        var y = t.pingedTasks, g;
        for (g = 0; g < y.length; g++) {
          var T = y[g], R = t, K = T.blockedSegment;
          if (K.status === 0) {
            Nt(T.context);
            try {
              lt(R, T, T.node), K.lastPushedText && K.textEmbedded && K.chunks.push(z), T.abortSet.delete(T), K.status = 1, ro(R, T.blockedBoundary, K);
            } catch (wt) {
              if (un(), typeof wt == "object" && wt !== null && typeof wt.then == "function") {
                var le = T.ping;
                wt.then(le, le);
              } else {
                T.abortSet.delete(T), K.status = 4;
                var ie = T.blockedBoundary, Ae = wt, ut = br(R, Ae);
                if (ie === null ? Hr(R, Ae) : (ie.pendingTasks--, ie.forceClientRender || (ie.forceClientRender = !0, ie.errorDigest = ut, ie.parentFlushed && R.clientRenderedBoundaries.push(ie))), R.allPendingTasks--, R.allPendingTasks === 0) {
                  var St = R.onAllReady;
                  St();
                }
              }
            } finally {
            }
          }
        }
        y.splice(0, g), t.destination !== null && hn(t, t.destination);
      } catch (wt) {
        br(t, wt), Hr(t, wt);
      } finally {
        $r = u, cn.current = i, i === Zn && Nt(r);
      }
    }
  }
  function Vr(t, r, i) {
    switch (i.parentFlushed = !0, i.status) {
      case 0:
        var u = i.id = t.nextSegmentId++;
        return i.lastPushedText = !1, i.textEmbedded = !1, t = t.responseState, p(r, Me), p(r, t.placeholderPrefix), t = x(u.toString(16)), p(r, t), h(r, Yt);
      case 1:
        i.status = 2;
        var y = !0;
        u = i.chunks;
        var g = 0;
        i = i.children;
        for (var T = 0; T < i.length; T++) {
          for (y = i[T]; g < y.index; g++) p(r, u[g]);
          y = Wr(t, r, y);
        }
        for (; g < u.length - 1; g++) p(r, u[g]);
        return g < u.length && (y = h(r, u[g])), y;
      default:
        throw Error(s(390));
    }
  }
  function Wr(t, r, i) {
    var u = i.boundary;
    if (u === null) return Vr(t, r, i);
    if (u.parentFlushed = !0, u.forceClientRender) u = u.errorDigest, h(r, _t), p(r, Bt), u && (p(r, Et), p(r, x(pe(u))), p(r, nt)), h(r, Zt), Vr(t, r, i);
    else if (0 < u.pendingTasks) {
      u.rootSegmentID = t.nextSegmentId++, 0 < u.completedSegments.length && t.partialBoundaries.push(u);
      var y = t.responseState, g = y.nextSuspenseID++;
      y = S(y.boundaryPrefix + g.toString(16)), u = u.id = y, We(r, t.responseState, u), Vr(t, r, i);
    } else if (u.byteSize > t.progressiveChunkSize) u.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(u), We(r, t.responseState, u.id), Vr(t, r, i);
    else {
      if (h(r, Xt), i = u.completedSegments, i.length !== 1) throw Error(s(391));
      Wr(t, r, i[0]);
    }
    return h(r, zt);
  }
  function oo(t, r, i) {
    return it(r, t.responseState, i.formatContext, i.id), Wr(t, r, i), Tt(r, i.formatContext);
  }
  function io(t, r, i) {
    for (var u = i.completedSegments, y = 0; y < u.length; y++) ao(t, r, i, u[y]);
    if (u.length = 0, t = t.responseState, u = i.id, i = i.rootSegmentID, p(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? p(r, d) : (t.sentCompleteBoundaryFunction = !0, p(r, H)), u === null) throw Error(s(395));
    return i = x(i.toString(16)), p(r, u), p(r, b), p(r, t.segmentPrefix), p(r, i), h(r, P);
  }
  function ao(t, r, i, u) {
    if (u.status === 2) return !0;
    var y = u.id;
    if (y === -1) {
      if ((u.id = i.rootSegmentID) === -1) throw Error(s(392));
      return oo(t, r, u);
    }
    return oo(t, r, u), t = t.responseState, p(r, t.startInlineScript), t.sentCompleteSegmentFunction ? p(r, Ut) : (t.sentCompleteSegmentFunction = !0, p(r, fr)), p(r, t.segmentPrefix), y = x(y.toString(16)), p(r, y), p(r, Pt), p(r, t.placeholderPrefix), p(r, y), h(r, Mt);
  }
  function hn(t, r) {
    l = new Uint8Array(512), f = 0;
    try {
      var i = t.completedRootSegment;
      if (i !== null && t.pendingRootTasks === 0) {
        Wr(t, r, i), t.completedRootSegment = null;
        var u = t.responseState.bootstrapChunks;
        for (i = 0; i < u.length - 1; i++) p(r, u[i]);
        i < u.length && h(r, u[i]);
      }
      var y = t.clientRenderedBoundaries, g;
      for (g = 0; g < y.length; g++) {
        var T = y[g];
        u = r;
        var R = t.responseState, K = T.id, le = T.errorDigest, ie = T.errorMessage, Ae = T.errorComponentStack;
        if (p(u, R.startInlineScript), R.sentClientRenderFunction ? p(u, Se) : (R.sentClientRenderFunction = !0, p(
          u,
          de
        )), K === null) throw Error(s(395));
        p(u, K), p(u, Ne), (le || ie || Ae) && (p(u, at), p(u, x(pt(le || "")))), (ie || Ae) && (p(u, at), p(u, x(pt(ie || "")))), Ae && (p(u, at), p(u, x(pt(Ae)))), h(u, Pe);
      }
      y.splice(0, g);
      var ut = t.completedBoundaries;
      for (g = 0; g < ut.length; g++) io(t, r, ut[g]);
      ut.splice(0, g), k(r), l = new Uint8Array(512), f = 0;
      var St = t.partialBoundaries;
      for (g = 0; g < St.length; g++) {
        var wt = St[g];
        e: {
          y = t, T = r;
          var Gr = wt.completedSegments;
          for (R = 0; R < Gr.length; R++) if (!ao(
            y,
            T,
            wt,
            Gr[R]
          )) {
            R++, Gr.splice(0, R);
            var lo = !1;
            break e;
          }
          Gr.splice(0, R), lo = !0;
        }
        if (!lo) {
          t.destination = null, g++, St.splice(0, g);
          return;
        }
      }
      St.splice(0, g);
      var mn = t.completedBoundaries;
      for (g = 0; g < mn.length; g++) io(t, r, mn[g]);
      mn.splice(0, g);
    } finally {
      k(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function so(t, r) {
    try {
      var i = t.abortableTasks;
      i.forEach(function(u) {
        return to(u, t, r);
      }), i.clear(), t.destination !== null && hn(t, t.destination);
    } catch (u) {
      br(t, u), Hr(t, u);
    }
  }
  return Xr.renderToReadableStream = function(t, r) {
    return new Promise(function(i, u) {
      var y, g, T = new Promise(function(ie, Ae) {
        g = ie, y = Ae;
      }), R = ci(t, De(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Ze(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, g, function() {
        var ie = new ReadableStream({ type: "bytes", pull: function(Ae) {
          if (R.status === 1) R.status = 2, V(Ae, R.fatalError);
          else if (R.status !== 2 && R.destination === null) {
            R.destination = Ae;
            try {
              hn(R, Ae);
            } catch (ut) {
              br(R, ut), Hr(R, ut);
            }
          }
        }, cancel: function() {
          so(R);
        } }, { highWaterMark: 0 });
        ie.allReady = T, i(ie);
      }, function(ie) {
        T.catch(function() {
        }), u(ie);
      }, y);
      if (r && r.signal) {
        var K = r.signal, le = function() {
          so(R, K.reason), K.removeEventListener("abort", le);
        };
        K.addEventListener("abort", le);
      }
      no(R);
    });
  }, Xr.version = "18.3.1", Xr;
}
var gr, Vo;
gr = ea(), Vo = ta();
gr.version;
gr.renderToString;
gr.renderToStaticMarkup;
gr.renderToNodeStream;
gr.renderToStaticNodeStream;
Vo.renderToReadableStream;
const ra = "staticMarkup";
function na() {
  const s = pi().indexOf(ra) > -1 ? !0 : void 0;
  return {
    isBootstrap: s,
    isReact: s ? void 0 : !0
  };
}
const Wo = ({ gaData: o, prefix: s = "", children: l }) => {
  const { isReact: f } = na(), { onClick: p, ...h } = l.props;
  if (f)
    return Lt.cloneElement(l, {
      ...h,
      onClick: (x) => (Ji(o), p ? p(x) : !0)
    });
  let k = "";
  ["input", "header", "header-input"].includes(s) && (k = `-${s}`);
  const C = {
    [`data-ga${k}`]: o.text,
    [`data-ga${k}-name`]: o.name,
    [`data-ga${k}-event`]: o.event,
    [`data-ga${k}-action`]: o.action,
    [`data-ga${k}-type`]: o.type,
    [`data-ga${k}-region`]: o.region,
    [`data-ga${k}-section`]: o.section,
    [`data-ga${k}-component`]: o.component
  };
  return Lt.cloneElement(l, {
    ...h,
    onClick: p,
    ...C
  });
}, oa = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, $n = ({
  label: o,
  cardTitle: s,
  gaData: l,
  ariaLabel: f,
  block: p,
  color: h,
  disabled: k,
  element: C,
  href: x,
  icon: S,
  innerRef: V,
  onClick: D,
  size: ne,
  classes: se,
  target: B,
  ...F
}) => {
  const N = dr("btn", {
    [`btn-${h}`]: !0,
    "btn-md": ne === "small",
    "btn-sm": ne === "xsmall",
    "btn-block": p,
    disabled: k
  });
  let j = C;
  return x && C === "button" && (j = "a"), /* @__PURE__ */ ct.jsx(
    Wo,
    {
      gaData: {
        ...oa,
        section: s,
        // @deprecated - remove at some point
        ...l,
        text: o
      },
      children: /* @__PURE__ */ ct.jsxs(
        j,
        {
          type: j === "button" && D ? "button" : void 0,
          ...F,
          className: dr(se) || N,
          href: x,
          ref: V,
          onClick: D,
          "aria-label": f,
          target: j === "a" ? B : null,
          children: [
            S && /* @__PURE__ */ ct.jsx("i", { className: `${S == null ? void 0 : S[0]} fa-${S == null ? void 0 : S[1]} me-1` }),
            o
          ]
        }
      )
    }
  );
};
$n.propTypes = {
  /**
   * Button label
   */
  label: M.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: M.string,
  /**
   * Google Analytics event data
   */
  gaData: Qi,
  /**
    ARIA label for accessibility
  */
  ariaLabel: M.string,
  /**
    Render button as a block-button?
  */
  block: M.bool,
  /**
    Button background color
  */
  color: M.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: M.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: M.oneOfType([
    M.func,
    M.string,
    M.shape({ $$typeof: M.symbol, render: M.func }),
    M.arrayOf(
      M.oneOfType([
        M.func,
        M.string,
        M.shape({ $$typeof: M.symbol, render: M.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: M.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: M.arrayOf(M.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: M.oneOfType([
    M.object,
    M.func,
    M.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: M.func,
  /**
    Button size
  */
  size: M.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: M.arrayOf(M.string),
  /**
   Link target type
   */
  target: M.oneOf(["_blank", "_self", "_top", "_parent"])
};
$n.defaultProps = {
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
var jn = jo();
function ia(o) {
  function s(z, O, L, $, w) {
    for (var G = 0, A = 0, ue = 0, ee = 0, Q, X, ce = 0, he = 0, oe, me = oe = Q = 0, fe = 0, Te = 0, ze = 0, Ee = 0, Ke = L.length, $e = Ke - 1, ge, Y = "", ye = "", Je = "", Ye = "", Me; fe < Ke; ) {
      if (X = L.charCodeAt(fe), fe === $e && A + ee + ue + G !== 0 && (A !== 0 && (X = A === 47 ? 10 : 47), ee = ue = G = 0, Ke++, $e++), A + ee + ue + G === 0) {
        if (fe === $e && (0 < Te && (Y = Y.replace(ne, "")), 0 < Y.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Y += L.charAt(fe);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (Y = Y.trim(), Q = Y.charCodeAt(0), oe = 1, Ee = ++fe; fe < Ke; ) {
              switch (X = L.charCodeAt(fe)) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch (X = L.charCodeAt(fe + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (me = fe + 1; me < $e; ++me)
                          switch (L.charCodeAt(me)) {
                            case 47:
                              if (X === 42 && L.charCodeAt(me - 1) === 42 && fe + 2 !== me) {
                                fe = me + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                fe = me + 1;
                                break e;
                              }
                          }
                        fe = me;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; fe++ < $e && L.charCodeAt(fe) !== X; )
                    ;
              }
              if (oe === 0) break;
              fe++;
            }
            switch (oe = L.substring(Ee, fe), Q === 0 && (Q = (Y = Y.replace(D, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < Te && (Y = Y.replace(ne, "")), X = Y.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Te = O;
                    break;
                  default:
                    Te = rt;
                }
                if (oe = s(O, Te, oe, X, w + 1), Ee = oe.length, 0 < De && (Te = l(rt, Y, ze), Me = C(3, oe, Te, O, Ce, ke, Ee, X, w, $), Y = Te.join(""), Me !== void 0 && (Ee = (oe = Me.trim()).length) === 0 && (X = 0, oe = "")), 0 < Ee) switch (X) {
                  case 115:
                    Y = Y.replace(te, k);
                  case 100:
                  case 109:
                  case 45:
                    oe = Y + "{" + oe + "}";
                    break;
                  case 107:
                    Y = Y.replace(U, "$1 $2"), oe = Y + "{" + oe + "}", oe = Ie === 1 || Ie === 2 && h("@" + oe, 3) ? "@-webkit-" + oe + "@" + oe : "@" + oe;
                    break;
                  default:
                    oe = Y + oe, $ === 112 && (oe = (ye += oe, ""));
                }
                else oe = "";
                break;
              default:
                oe = s(O, l(O, Y, ze), oe, $, w + 1);
            }
            Je += oe, oe = ze = Te = me = Q = 0, Y = "", X = L.charCodeAt(++fe);
            break;
          case 125:
          case 59:
            if (Y = (0 < Te ? Y.replace(ne, "") : Y).trim(), 1 < (Ee = Y.length)) switch (me === 0 && (Q = Y.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (Ee = (Y = Y.replace(" ", ":")).length), 0 < De && (Me = C(1, Y, O, z, Ce, ke, ye.length, $, w, $)) !== void 0 && (Ee = (Y = Me.trim()).length) === 0 && (Y = "\0\0"), Q = Y.charCodeAt(0), X = Y.charCodeAt(1), Q) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  Ye += Y + L.charAt(fe);
                  break;
                }
              default:
                Y.charCodeAt(Ee - 1) !== 58 && (ye += p(Y, Q, X, Y.charCodeAt(2)));
            }
            ze = Te = me = Q = 0, Y = "", X = L.charCodeAt(++fe);
        }
      }
      switch (X) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + Q === 0 && $ !== 107 && 0 < Y.length && (Te = 1, Y += "\0"), 0 < De * Ze && C(0, Y, O, z, Ce, ke, ye.length, $, w, $), ke = 1, Ce++;
          break;
        case 59:
        case 125:
          if (A + ee + ue + G === 0) {
            ke++;
            break;
          }
        default:
          switch (ke++, ge = L.charAt(fe), X) {
            case 9:
            case 32:
              if (ee + G + A === 0) switch (ce) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  X !== 32 && (ge = " ");
              }
              break;
            case 0:
              ge = "\\0";
              break;
            case 12:
              ge = "\\f";
              break;
            case 11:
              ge = "\\v";
              break;
            case 38:
              ee + A + G === 0 && (Te = ze = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + A + G + Be === 0 && 0 < me) switch (fe - me) {
                case 2:
                  ce === 112 && L.charCodeAt(fe - 3) === 58 && (Be = ce);
                case 8:
                  he === 111 && (Be = he);
              }
              break;
            case 58:
              ee + A + G === 0 && (me = fe);
              break;
            case 44:
              A + ue + ee + G === 0 && (Te = 1, ge += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (ee = ee === X ? 0 : ee === 0 ? X : ee);
              break;
            case 91:
              ee + A + ue === 0 && G++;
              break;
            case 93:
              ee + A + ue === 0 && G--;
              break;
            case 41:
              ee + A + G === 0 && ue--;
              break;
            case 40:
              if (ee + A + G === 0) {
                if (Q === 0) switch (2 * ce + 3 * he) {
                  case 533:
                    break;
                  default:
                    Q = 1;
                }
                ue++;
              }
              break;
            case 64:
              A + ue + ee + G + me + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + G + ue)) switch (A) {
                case 0:
                  switch (2 * X + 3 * L.charCodeAt(fe + 1)) {
                    case 235:
                      A = 47;
                      break;
                    case 220:
                      Ee = fe, A = 42;
                  }
                  break;
                case 42:
                  X === 47 && ce === 42 && Ee + 2 !== fe && (L.charCodeAt(Ee + 2) === 33 && (ye += L.substring(Ee, fe + 1)), ge = "", A = 0);
              }
          }
          A === 0 && (Y += ge);
      }
      he = ce, ce = X, fe++;
    }
    if (Ee = ye.length, 0 < Ee) {
      if (Te = O, 0 < De && (Me = C(2, ye, Te, z, Ce, ke, Ee, $, w, $), Me !== void 0 && (ye = Me).length === 0)) return Ye + ye + Je;
      if (ye = Te.join(",") + "{" + ye + "}", Ie * Be !== 0) {
        switch (Ie !== 2 || h(ye, 2) || (Be = 0), Be) {
          case 111:
            ye = ye.replace(W, ":-moz-$1") + ye;
            break;
          case 112:
            ye = ye.replace(q, "::-webkit-input-$1") + ye.replace(q, "::-moz-$1") + ye.replace(q, ":-ms-input-$1") + ye;
        }
        Be = 0;
      }
    }
    return Ye + ye + Je;
  }
  function l(z, O, L) {
    var $ = O.trim().split(N);
    O = $;
    var w = $.length, G = z.length;
    switch (G) {
      case 0:
      case 1:
        var A = 0;
        for (z = G === 0 ? "" : z[0] + " "; A < w; ++A)
          O[A] = f(z, O[A], L).trim();
        break;
      default:
        var ue = A = 0;
        for (O = []; A < w; ++A)
          for (var ee = 0; ee < G; ++ee)
            O[ue++] = f(z[ee] + " ", $[A], L).trim();
    }
    return O;
  }
  function f(z, O, L) {
    var $ = O.charCodeAt(0);
    switch (33 > $ && ($ = (O = O.trim()).charCodeAt(0)), $) {
      case 38:
        return O.replace(j, "$1" + z.trim());
      case 58:
        return z.trim() + O.replace(j, "$1" + z.trim());
      default:
        if (0 < 1 * L && 0 < O.indexOf("\f")) return O.replace(j, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + O;
  }
  function p(z, O, L, $) {
    var w = z + ";", G = 2 * O + 3 * L + 4 * $;
    if (G === 944) {
      z = w.indexOf(":", 9) + 1;
      var A = w.substring(z, w.length - 1).trim();
      return A = w.substring(0, z).trim() + A + ";", Ie === 1 || Ie === 2 && h(A, 1) ? "-webkit-" + A + A : A;
    }
    if (Ie === 0 || Ie === 2 && !h(w, 1)) return w;
    switch (G) {
      case 1015:
        return w.charCodeAt(10) === 97 ? "-webkit-" + w + w : w;
      case 951:
        return w.charCodeAt(3) === 116 ? "-webkit-" + w + w : w;
      case 963:
        return w.charCodeAt(5) === 110 ? "-webkit-" + w + w : w;
      case 1009:
        if (w.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + w + w;
      case 978:
        return "-webkit-" + w + "-moz-" + w + w;
      case 1019:
      case 983:
        return "-webkit-" + w + "-moz-" + w + "-ms-" + w + w;
      case 883:
        if (w.charCodeAt(8) === 45) return "-webkit-" + w + w;
        if (0 < w.indexOf("image-set(", 11)) return w.replace(tt, "$1-webkit-$2") + w;
        break;
      case 932:
        if (w.charCodeAt(4) === 45) switch (w.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + w.replace("-grow", "") + "-webkit-" + w + "-ms-" + w.replace("grow", "positive") + w;
          case 115:
            return "-webkit-" + w + "-ms-" + w.replace("shrink", "negative") + w;
          case 98:
            return "-webkit-" + w + "-ms-" + w.replace("basis", "preferred-size") + w;
        }
        return "-webkit-" + w + "-ms-" + w + w;
      case 964:
        return "-webkit-" + w + "-ms-flex-" + w + w;
      case 1023:
        if (w.charCodeAt(8) !== 99) break;
        return A = w.substring(w.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + w + "-ms-flex-pack" + A + w;
      case 1005:
        return B.test(w) ? w.replace(se, ":-webkit-") + w.replace(se, ":-moz-") + w : w;
      case 1e3:
        switch (A = w.substring(13).trim(), O = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(O)) {
          case 226:
            A = w.replace(_, "tb");
            break;
          case 232:
            A = w.replace(_, "tb-rl");
            break;
          case 220:
            A = w.replace(_, "lr");
            break;
          default:
            return w;
        }
        return "-webkit-" + w + "-ms-" + A + w;
      case 1017:
        if (w.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (w = z).length - 10, A = (w.charCodeAt(O) === 33 ? w.substring(0, O) : w).substring(z.indexOf(":", 7) + 1).trim(), G = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8)) break;
          case 115:
            w = w.replace(A, "-webkit-" + A) + ";" + w;
            break;
          case 207:
          case 102:
            w = w.replace(A, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + w.replace(A, "-webkit-" + A) + ";" + w.replace(A, "-ms-" + A + "box") + ";" + w;
        }
        return w + ";";
      case 938:
        if (w.charCodeAt(5) === 45) switch (w.charCodeAt(6)) {
          case 105:
            return A = w.replace("-items", ""), "-webkit-" + w + "-webkit-box-" + A + "-ms-flex-" + A + w;
          case 115:
            return "-webkit-" + w + "-ms-flex-item-" + w.replace(Fe, "") + w;
          default:
            return "-webkit-" + w + "-ms-flex-line-pack" + w.replace("align-content", "").replace(Fe, "") + w;
        }
        break;
      case 973:
      case 989:
        if (w.charCodeAt(3) !== 45 || w.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ve.test(z) === !0) return (A = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? p(z.replace("stretch", "fill-available"), O, L, $).replace(":fill-available", ":stretch") : w.replace(A, "-webkit-" + A) + w.replace(A, "-moz-" + A.replace("fill-", "")) + w;
        break;
      case 962:
        if (w = "-webkit-" + w + (w.charCodeAt(5) === 102 ? "-ms-" + w : "") + w, L + $ === 211 && w.charCodeAt(13) === 105 && 0 < w.indexOf("transform", 10)) return w.substring(0, w.indexOf(";", 27) + 1).replace(F, "$1-webkit-$2") + w;
    }
    return w;
  }
  function h(z, O) {
    var L = z.indexOf(O === 1 ? ":" : "{"), $ = z.substring(0, O !== 3 ? L : 10);
    return L = z.substring(L + 1, z.length - 1), Le(O !== 2 ? $ : $.replace(je, "$1"), L, O);
  }
  function k(z, O) {
    var L = p(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return L !== O + ";" ? L.replace(pe, " or ($1)").substring(4) : "(" + O + ")";
  }
  function C(z, O, L, $, w, G, A, ue, ee, Q) {
    for (var X = 0, ce = O, he; X < De; ++X)
      switch (he = He[X].call(V, z, ce, L, $, w, G, A, ue, ee, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = he;
      }
    if (ce !== O) return ce;
  }
  function x(z) {
    switch (z) {
      case void 0:
      case null:
        De = He.length = 0;
        break;
      default:
        if (typeof z == "function") He[De++] = z;
        else if (typeof z == "object") for (var O = 0, L = z.length; O < L; ++O)
          x(z[O]);
        else Ze = !!z | 0;
    }
    return x;
  }
  function S(z) {
    return z = z.prefix, z !== void 0 && (Le = null, z ? typeof z != "function" ? Ie = 1 : (Ie = 2, Le = z) : Ie = 0), S;
  }
  function V(z, O) {
    var L = z;
    if (33 > L.charCodeAt(0) && (L = L.trim()), qe = L, L = [qe], 0 < De) {
      var $ = C(-1, O, L, L, Ce, ke, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (O = $);
    }
    var w = s(rt, L, O, 0, 0);
    return 0 < De && ($ = C(-2, w, L, L, Ce, ke, w.length, 0, 0, 0), $ !== void 0 && (w = $)), qe = "", Be = 0, ke = Ce = 1, w;
  }
  var D = /^\0+/g, ne = /[\0\r\f]/g, se = /: */g, B = /zoo|gra/, F = /([,: ])(transform)/g, N = /,\r+?/g, j = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, q = /::(place)/g, W = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, te = /\(\s*(.*)\s*\)/g, pe = /([\s\S]*?);/g, Fe = /-self|flex-/g, je = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, tt = /([^-])(image-set\()/, ke = 1, Ce = 1, Be = 0, Ie = 1, rt = [], He = [], De = 0, Le = null, Ze = 0, qe = "";
  return V.use = x, V.set = S, o !== void 0 && S(o), V;
}
var aa = {
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
function sa(o) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return s[l] === void 0 && (s[l] = o(l)), s[l];
  };
}
var la = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Co = /* @__PURE__ */ sa(
  function(o) {
    return la.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Hn = jo(), ua = {
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
}, ca = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, fa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Go = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Un = {};
Un[Hn.ForwardRef] = fa;
Un[Hn.Memo] = Go;
function _o(o) {
  return Hn.isMemo(o) ? Go : Un[o.$$typeof] || ua;
}
var pa = Object.defineProperty, da = Object.getOwnPropertyNames, bo = Object.getOwnPropertySymbols, ha = Object.getOwnPropertyDescriptor, ma = Object.getPrototypeOf, Ao = Object.prototype;
function qo(o, s, l) {
  if (typeof s != "string") {
    if (Ao) {
      var f = ma(s);
      f && f !== Ao && qo(o, f, l);
    }
    var p = da(s);
    bo && (p = p.concat(bo(s)));
    for (var h = _o(o), k = _o(s), C = 0; C < p.length; ++C) {
      var x = p[C];
      if (!ca[x] && !(l && l[x]) && !(k && k[x]) && !(h && h[x])) {
        var S = ha(s, x);
        try {
          pa(o, x, S);
        } catch {
        }
      }
    }
  }
  return o;
}
var ga = qo;
const ya = /* @__PURE__ */ Bn(ga);
var xe = { env: { NODE_ENV: "production" } };
function Dt() {
  return (Dt = Object.assign || function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var l = arguments[s];
      for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (o[f] = l[f]);
    }
    return o;
  }).apply(this, arguments);
}
var Ro = function(o, s) {
  for (var l = [o[0]], f = 0, p = s.length; f < p; f += 1) l.push(s[f], o[f + 1]);
  return l;
}, Pn = function(o) {
  return o !== null && typeof o == "object" && (o.toString ? o.toString() : Object.prototype.toString.call(o)) === "[object Object]" && !jn.typeOf(o);
}, on = Object.freeze([]), qt = Object.freeze({});
function Ir(o) {
  return typeof o == "function";
}
function Mn(o) {
  return xe.env.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Vn(o) {
  return o && typeof o.styledComponentId == "string";
}
var hr = typeof xe < "u" && xe.env !== void 0 && (xe.env.REACT_APP_SC_ATTR || xe.env.SC_ATTR) || "data-styled", Wn = typeof window < "u" && "HTMLElement" in window, va = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xe < "u" && xe.env !== void 0 && (xe.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xe.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xe.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xe.env.REACT_APP_SC_DISABLE_SPEEDY : xe.env.SC_DISABLE_SPEEDY !== void 0 && xe.env.SC_DISABLE_SPEEDY !== "" ? xe.env.SC_DISABLE_SPEEDY !== "false" && xe.env.SC_DISABLE_SPEEDY : xe.env.NODE_ENV !== "production")), Sa = xe.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function wa() {
  for (var o = arguments.length <= 0 ? void 0 : arguments[0], s = [], l = 1, f = arguments.length; l < f; l += 1) s.push(l < 0 || arguments.length <= l ? void 0 : arguments[l]);
  return s.forEach(function(p) {
    o = o.replace(/%[a-z]/, p);
  }), o;
}
function yr(o) {
  for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++) l[f - 1] = arguments[f];
  throw xe.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + o + " for more information." + (l.length > 0 ? " Args: " + l.join(", ") : "")) : new Error(wa.apply(void 0, [Sa[o]].concat(l)).trim());
}
var xa = function() {
  function o(l) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = l;
  }
  var s = o.prototype;
  return s.indexOfGroup = function(l) {
    for (var f = 0, p = 0; p < l; p++) f += this.groupSizes[p];
    return f;
  }, s.insertRules = function(l, f) {
    if (l >= this.groupSizes.length) {
      for (var p = this.groupSizes, h = p.length, k = h; l >= k; ) (k <<= 1) < 0 && yr(16, "" + l);
      this.groupSizes = new Uint32Array(k), this.groupSizes.set(p), this.length = k;
      for (var C = h; C < k; C++) this.groupSizes[C] = 0;
    }
    for (var x = this.indexOfGroup(l + 1), S = 0, V = f.length; S < V; S++) this.tag.insertRule(x, f[S]) && (this.groupSizes[l]++, x++);
  }, s.clearGroup = function(l) {
    if (l < this.length) {
      var f = this.groupSizes[l], p = this.indexOfGroup(l), h = p + f;
      this.groupSizes[l] = 0;
      for (var k = p; k < h; k++) this.tag.deleteRule(p);
    }
  }, s.getGroup = function(l) {
    var f = "";
    if (l >= this.length || this.groupSizes[l] === 0) return f;
    for (var p = this.groupSizes[l], h = this.indexOfGroup(l), k = h + p, C = h; C < k; C++) f += this.tag.getRule(C) + `/*!sc*/
`;
    return f;
  }, o;
}(), tn = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), Or = 1, Zr = function(o) {
  if (tn.has(o)) return tn.get(o);
  for (; an.has(Or); ) Or++;
  var s = Or++;
  return xe.env.NODE_ENV !== "production" && ((0 | s) < 0 || s > 1 << 30) && yr(16, "" + s), tn.set(o, s), an.set(s, o), s;
}, ka = function(o) {
  return an.get(o);
}, Ea = function(o, s) {
  s >= Or && (Or = s + 1), tn.set(o, s), an.set(s, o);
}, Ta = "style[" + hr + '][data-styled-version="5.3.11"]', Ca = new RegExp("^" + hr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), _a = function(o, s, l) {
  for (var f, p = l.split(","), h = 0, k = p.length; h < k; h++) (f = p[h]) && o.registerName(s, f);
}, ba = function(o, s) {
  for (var l = (s.textContent || "").split(`/*!sc*/
`), f = [], p = 0, h = l.length; p < h; p++) {
    var k = l[p].trim();
    if (k) {
      var C = k.match(Ca);
      if (C) {
        var x = 0 | parseInt(C[1], 10), S = C[2];
        x !== 0 && (Ea(S, x), _a(o, S, C[3]), o.getTag().insertRules(x, f)), f.length = 0;
      } else f.push(k);
    }
  }
}, Aa = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Yo = function(o) {
  var s = document.head, l = o || s, f = document.createElement("style"), p = function(C) {
    for (var x = C.childNodes, S = x.length; S >= 0; S--) {
      var V = x[S];
      if (V && V.nodeType === 1 && V.hasAttribute(hr)) return V;
    }
  }(l), h = p !== void 0 ? p.nextSibling : null;
  f.setAttribute(hr, "active"), f.setAttribute("data-styled-version", "5.3.11");
  var k = Aa();
  return k && f.setAttribute("nonce", k), l.insertBefore(f, h), f;
}, Ra = function() {
  function o(l) {
    var f = this.element = Yo(l);
    f.appendChild(document.createTextNode("")), this.sheet = function(p) {
      if (p.sheet) return p.sheet;
      for (var h = document.styleSheets, k = 0, C = h.length; k < C; k++) {
        var x = h[k];
        if (x.ownerNode === p) return x;
      }
      yr(17);
    }(f), this.length = 0;
  }
  var s = o.prototype;
  return s.insertRule = function(l, f) {
    try {
      return this.sheet.insertRule(f, l), this.length++, !0;
    } catch {
      return !1;
    }
  }, s.deleteRule = function(l) {
    this.sheet.deleteRule(l), this.length--;
  }, s.getRule = function(l) {
    var f = this.sheet.cssRules[l];
    return f !== void 0 && typeof f.cssText == "string" ? f.cssText : "";
  }, o;
}(), Oa = function() {
  function o(l) {
    var f = this.element = Yo(l);
    this.nodes = f.childNodes, this.length = 0;
  }
  var s = o.prototype;
  return s.insertRule = function(l, f) {
    if (l <= this.length && l >= 0) {
      var p = document.createTextNode(f), h = this.nodes[l];
      return this.element.insertBefore(p, h || null), this.length++, !0;
    }
    return !1;
  }, s.deleteRule = function(l) {
    this.element.removeChild(this.nodes[l]), this.length--;
  }, s.getRule = function(l) {
    return l < this.length ? this.nodes[l].textContent : "";
  }, o;
}(), Ia = function() {
  function o(l) {
    this.rules = [], this.length = 0;
  }
  var s = o.prototype;
  return s.insertRule = function(l, f) {
    return l <= this.length && (this.rules.splice(l, 0, f), this.length++, !0);
  }, s.deleteRule = function(l) {
    this.rules.splice(l, 1), this.length--;
  }, s.getRule = function(l) {
    return l < this.length ? this.rules[l] : "";
  }, o;
}(), Oo = Wn, Pa = { isServer: !Wn, useCSSOMInjection: !va }, Xo = function() {
  function o(l, f, p) {
    l === void 0 && (l = qt), f === void 0 && (f = {}), this.options = Dt({}, Pa, {}, l), this.gs = f, this.names = new Map(p), this.server = !!l.isServer, !this.server && Wn && Oo && (Oo = !1, function(h) {
      for (var k = document.querySelectorAll(Ta), C = 0, x = k.length; C < x; C++) {
        var S = k[C];
        S && S.getAttribute(hr) !== "active" && (ba(h, S), S.parentNode && S.parentNode.removeChild(S));
      }
    }(this));
  }
  o.registerId = function(l) {
    return Zr(l);
  };
  var s = o.prototype;
  return s.reconstructWithOptions = function(l, f) {
    return f === void 0 && (f = !0), new o(Dt({}, this.options, {}, l), this.gs, f && this.names || void 0);
  }, s.allocateGSInstance = function(l) {
    return this.gs[l] = (this.gs[l] || 0) + 1;
  }, s.getTag = function() {
    return this.tag || (this.tag = (p = (f = this.options).isServer, h = f.useCSSOMInjection, k = f.target, l = p ? new Ia(k) : h ? new Ra(k) : new Oa(k), new xa(l)));
    var l, f, p, h, k;
  }, s.hasNameForId = function(l, f) {
    return this.names.has(l) && this.names.get(l).has(f);
  }, s.registerName = function(l, f) {
    if (Zr(l), this.names.has(l)) this.names.get(l).add(f);
    else {
      var p = /* @__PURE__ */ new Set();
      p.add(f), this.names.set(l, p);
    }
  }, s.insertRules = function(l, f, p) {
    this.registerName(l, f), this.getTag().insertRules(Zr(l), p);
  }, s.clearNames = function(l) {
    this.names.has(l) && this.names.get(l).clear();
  }, s.clearRules = function(l) {
    this.getTag().clearGroup(Zr(l)), this.clearNames(l);
  }, s.clearTag = function() {
    this.tag = void 0;
  }, s.toString = function() {
    return function(l) {
      for (var f = l.getTag(), p = f.length, h = "", k = 0; k < p; k++) {
        var C = ka(k);
        if (C !== void 0) {
          var x = l.names.get(C), S = f.getGroup(k);
          if (x && S && x.size) {
            var V = hr + ".g" + k + '[id="' + C + '"]', D = "";
            x !== void 0 && x.forEach(function(ne) {
              ne.length > 0 && (D += ne + ",");
            }), h += "" + S + V + '{content:"' + D + `"}/*!sc*/
`;
          }
        }
      }
      return h;
    }(this);
  }, o;
}(), Ma = /(a)(d)/gi, Io = function(o) {
  return String.fromCharCode(o + (o > 25 ? 39 : 97));
};
function Nn(o) {
  var s, l = "";
  for (s = Math.abs(o); s > 52; s = s / 52 | 0) l = Io(s % 52) + l;
  return (Io(s % 52) + l).replace(Ma, "$1-$2");
}
var lr = function(o, s) {
  for (var l = s.length; l; ) o = 33 * o ^ s.charCodeAt(--l);
  return o;
}, Zo = function(o) {
  return lr(5381, o);
};
function Na(o) {
  for (var s = 0; s < o.length; s += 1) {
    var l = o[s];
    if (Ir(l) && !Vn(l)) return !1;
  }
  return !0;
}
var Fa = Zo("5.3.11"), Da = function() {
  function o(s, l, f) {
    this.rules = s, this.staticRulesId = "", this.isStatic = xe.env.NODE_ENV === "production" && (f === void 0 || f.isStatic) && Na(s), this.componentId = l, this.baseHash = lr(Fa, l), this.baseStyle = f, Xo.registerId(l);
  }
  return o.prototype.generateAndInjectStyles = function(s, l, f) {
    var p = this.componentId, h = [];
    if (this.baseStyle && h.push(this.baseStyle.generateAndInjectStyles(s, l, f)), this.isStatic && !f.hash) if (this.staticRulesId && l.hasNameForId(p, this.staticRulesId)) h.push(this.staticRulesId);
    else {
      var k = mr(this.rules, s, l, f).join(""), C = Nn(lr(this.baseHash, k) >>> 0);
      if (!l.hasNameForId(p, C)) {
        var x = f(k, "." + C, void 0, p);
        l.insertRules(p, C, x);
      }
      h.push(C), this.staticRulesId = C;
    }
    else {
      for (var S = this.rules.length, V = lr(this.baseHash, f.hash), D = "", ne = 0; ne < S; ne++) {
        var se = this.rules[ne];
        if (typeof se == "string") D += se, xe.env.NODE_ENV !== "production" && (V = lr(V, se + ne));
        else if (se) {
          var B = mr(se, s, l, f), F = Array.isArray(B) ? B.join("") : B;
          V = lr(V, F + ne), D += F;
        }
      }
      if (D) {
        var N = Nn(V >>> 0);
        if (!l.hasNameForId(p, N)) {
          var j = f(D, "." + N, void 0, p);
          l.insertRules(p, N, j);
        }
        h.push(N);
      }
    }
    return h.join(" ");
  }, o;
}(), La = /^\s*\/\/.*$/gm, za = [":", "[", ".", "#"];
function Ba(o) {
  var s, l, f, p, h = qt, k = h.options, C = k === void 0 ? qt : k, x = h.plugins, S = x === void 0 ? on : x, V = new ia(C), D = [], ne = /* @__PURE__ */ function(F) {
    function N(j) {
      if (j) try {
        F(j + "}");
      } catch {
      }
    }
    return function(j, U, q, W, _, te, pe, Fe, je, Ve) {
      switch (j) {
        case 1:
          if (je === 0 && U.charCodeAt(0) === 64) return F(U + ";"), "";
          break;
        case 2:
          if (Fe === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Fe) {
            case 102:
            case 112:
              return F(q[0] + U), "";
            default:
              return U + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(N);
      }
    };
  }(function(F) {
    D.push(F);
  }), se = function(F, N, j) {
    return N === 0 && za.indexOf(j[l.length]) !== -1 || j.match(p) ? F : "." + s;
  };
  function B(F, N, j, U) {
    U === void 0 && (U = "&");
    var q = F.replace(La, ""), W = N && j ? j + " " + N + " { " + q + " }" : q;
    return s = U, l = N, f = new RegExp("\\" + l + "\\b", "g"), p = new RegExp("(\\" + l + "\\b){2,}"), V(j || !N ? "" : N, W);
  }
  return V.use([].concat(S, [function(F, N, j) {
    F === 2 && j.length && j[0].lastIndexOf(l) > 0 && (j[0] = j[0].replace(f, se));
  }, ne, function(F) {
    if (F === -2) {
      var N = D;
      return D = [], N;
    }
  }])), B.hash = S.length ? S.reduce(function(F, N) {
    return N.name || yr(15), lr(F, N.name);
  }, 5381).toString() : "", B;
}
var Ko = Lt.createContext();
Ko.Consumer;
var Jo = Lt.createContext(), $a = (Jo.Consumer, new Xo()), Fn = Ba();
function ja() {
  return zn(Ko) || $a;
}
function Ha() {
  return zn(Jo) || Fn;
}
var Ua = function() {
  function o(s, l) {
    var f = this;
    this.inject = function(p, h) {
      h === void 0 && (h = Fn);
      var k = f.name + h.hash;
      p.hasNameForId(f.id, k) || p.insertRules(f.id, k, h(f.rules, k, "@keyframes"));
    }, this.toString = function() {
      return yr(12, String(f.name));
    }, this.name = s, this.id = "sc-keyframes-" + s, this.rules = l;
  }
  return o.prototype.getName = function(s) {
    return s === void 0 && (s = Fn), this.name + s.hash;
  }, o;
}(), Va = /([A-Z])/, Wa = /([A-Z])/g, Ga = /^ms-/, qa = function(o) {
  return "-" + o.toLowerCase();
};
function Po(o) {
  return Va.test(o) ? o.replace(Wa, qa).replace(Ga, "-ms-") : o;
}
var Mo = function(o) {
  return o == null || o === !1 || o === "";
};
function mr(o, s, l, f) {
  if (Array.isArray(o)) {
    for (var p, h = [], k = 0, C = o.length; k < C; k += 1) (p = mr(o[k], s, l, f)) !== "" && (Array.isArray(p) ? h.push.apply(h, p) : h.push(p));
    return h;
  }
  if (Mo(o)) return "";
  if (Vn(o)) return "." + o.styledComponentId;
  if (Ir(o)) {
    if (typeof (S = o) != "function" || S.prototype && S.prototype.isReactComponent || !s) return o;
    var x = o(s);
    return xe.env.NODE_ENV !== "production" && jn.isElement(x) && console.warn(Mn(o) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), mr(x, s, l, f);
  }
  var S;
  return o instanceof Ua ? l ? (o.inject(l, f), o.getName(f)) : o : Pn(o) ? function V(D, ne) {
    var se, B, F = [];
    for (var N in D) D.hasOwnProperty(N) && !Mo(D[N]) && (Array.isArray(D[N]) && D[N].isCss || Ir(D[N]) ? F.push(Po(N) + ":", D[N], ";") : Pn(D[N]) ? F.push.apply(F, V(D[N], N)) : F.push(Po(N) + ": " + (se = N, (B = D[N]) == null || typeof B == "boolean" || B === "" ? "" : typeof B != "number" || B === 0 || se in aa || se.startsWith("--") ? String(B).trim() : B + "px") + ";"));
    return ne ? [ne + " {"].concat(F, ["}"]) : F;
  }(o) : o.toString();
}
var No = function(o) {
  return Array.isArray(o) && (o.isCss = !0), o;
};
function Ya(o) {
  for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++) l[f - 1] = arguments[f];
  return Ir(o) || Pn(o) ? No(mr(Ro(on, [o].concat(l)))) : l.length === 0 && o.length === 1 && typeof o[0] == "string" ? o : No(mr(Ro(o, l)));
}
var Fo = /invalid hook call/i, Kr = /* @__PURE__ */ new Set(), Xa = function(o, s) {
  if (xe.env.NODE_ENV !== "production") {
    var l = "The component " + o + (s ? ' with the id of "' + s + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, f = console.error;
    try {
      var p = !0;
      console.error = function(h) {
        if (Fo.test(h)) p = !1, Kr.delete(l);
        else {
          for (var k = arguments.length, C = new Array(k > 1 ? k - 1 : 0), x = 1; x < k; x++) C[x - 1] = arguments[x];
          f.apply(void 0, [h].concat(C));
        }
      }, Lo(), p && !Kr.has(l) && (console.warn(l), Kr.add(l));
    } catch (h) {
      Fo.test(h.message) && Kr.delete(l);
    } finally {
      console.error = f;
    }
  }
}, Za = function(o, s, l) {
  return l === void 0 && (l = qt), o.theme !== l.theme && o.theme || s || l.theme;
}, Ka = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ja = /(^-|-$)/g;
function _n(o) {
  return o.replace(Ka, "-").replace(Ja, "");
}
var Qa = function(o) {
  return Nn(Zo(o) >>> 0);
};
function Jr(o) {
  return typeof o == "string" && (xe.env.NODE_ENV === "production" || o.charAt(0) === o.charAt(0).toLowerCase());
}
var Dn = function(o) {
  return typeof o == "function" || typeof o == "object" && o !== null && !Array.isArray(o);
}, es = function(o) {
  return o !== "__proto__" && o !== "constructor" && o !== "prototype";
};
function ts(o, s, l) {
  var f = o[l];
  Dn(s) && Dn(f) ? Qo(f, s) : o[l] = s;
}
function Qo(o) {
  for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++) l[f - 1] = arguments[f];
  for (var p = 0, h = l; p < h.length; p++) {
    var k = h[p];
    if (Dn(k)) for (var C in k) es(C) && ts(o, k[C], C);
  }
  return o;
}
var ei = Lt.createContext();
ei.Consumer;
var bn = {};
function ti(o, s, l) {
  var f = Vn(o), p = !Jr(o), h = s.attrs, k = h === void 0 ? on : h, C = s.componentId, x = C === void 0 ? function(U, q) {
    var W = typeof U != "string" ? "sc" : _n(U);
    bn[W] = (bn[W] || 0) + 1;
    var _ = W + "-" + Qa("5.3.11" + W + bn[W]);
    return q ? q + "-" + _ : _;
  }(s.displayName, s.parentComponentId) : C, S = s.displayName, V = S === void 0 ? function(U) {
    return Jr(U) ? "styled." + U : "Styled(" + Mn(U) + ")";
  }(o) : S, D = s.displayName && s.componentId ? _n(s.displayName) + "-" + s.componentId : s.componentId || x, ne = f && o.attrs ? Array.prototype.concat(o.attrs, k).filter(Boolean) : k, se = s.shouldForwardProp;
  f && o.shouldForwardProp && (se = s.shouldForwardProp ? function(U, q, W) {
    return o.shouldForwardProp(U, q, W) && s.shouldForwardProp(U, q, W);
  } : o.shouldForwardProp);
  var B, F = new Da(l, D, f ? o.componentStyle : void 0), N = F.isStatic && k.length === 0, j = function(U, q) {
    return function(W, _, te, pe) {
      var Fe = W.attrs, je = W.componentStyle, Ve = W.defaultProps, tt = W.foldedComponentIds, ke = W.shouldForwardProp, Ce = W.styledComponentId, Be = W.target, Ie = function($, w, G) {
        $ === void 0 && ($ = qt);
        var A = Dt({}, w, { theme: $ }), ue = {};
        return G.forEach(function(ee) {
          var Q, X, ce, he = ee;
          for (Q in Ir(he) && (he = he(A)), he) A[Q] = ue[Q] = Q === "className" ? (X = ue[Q], ce = he[Q], X && ce ? X + " " + ce : X || ce) : he[Q];
        }), [A, ue];
      }(Za(_, zn(ei), Ve) || qt, _, Fe), rt = Ie[0], He = Ie[1], De = function($, w, G, A) {
        var ue = ja(), ee = Ha(), Q = w ? $.generateAndInjectStyles(qt, ue, ee) : $.generateAndInjectStyles(G, ue, ee);
        return xe.env.NODE_ENV !== "production" && !w && A && A(Q), Q;
      }(je, pe, rt, xe.env.NODE_ENV !== "production" ? W.warnTooManyClasses : void 0), Le = te, Ze = He.$as || _.$as || He.as || _.as || Be, qe = Jr(Ze), z = He !== _ ? Dt({}, _, {}, He) : _, O = {};
      for (var L in z) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? O.as = z[L] : (ke ? ke(L, Co, Ze) : !qe || Co(L)) && (O[L] = z[L]));
      return _.style && He.style !== _.style && (O.style = Dt({}, _.style, {}, He.style)), O.className = Array.prototype.concat(tt, Ce, De !== Ce ? De : null, _.className, He.className).filter(Boolean).join(" "), O.ref = Le, di(Ze, O);
    }(B, U, q, N);
  };
  return j.displayName = V, (B = Lt.forwardRef(j)).attrs = ne, B.componentStyle = F, B.displayName = V, B.shouldForwardProp = se, B.foldedComponentIds = f ? Array.prototype.concat(o.foldedComponentIds, o.styledComponentId) : on, B.styledComponentId = D, B.target = f ? o.target : o, B.withComponent = function(U) {
    var q = s.componentId, W = function(te, pe) {
      if (te == null) return {};
      var Fe, je, Ve = {}, tt = Object.keys(te);
      for (je = 0; je < tt.length; je++) Fe = tt[je], pe.indexOf(Fe) >= 0 || (Ve[Fe] = te[Fe]);
      return Ve;
    }(s, ["componentId"]), _ = q && q + "-" + (Jr(U) ? U : _n(Mn(U)));
    return ti(U, Dt({}, W, { attrs: ne, componentId: _ }), l);
  }, Object.defineProperty(B, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = f ? Qo({}, o.defaultProps, U) : U;
  } }), xe.env.NODE_ENV !== "production" && (Xa(V, D), B.warnTooManyClasses = /* @__PURE__ */ function(U, q) {
    var W = {}, _ = !1;
    return function(te) {
      if (!_ && (W[te] = !0, Object.keys(W).length >= 200)) {
        var pe = q ? ' with the id of "' + q + '"' : "";
        console.warn("Over 200 classes were generated for component " + U + pe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, W = {};
      }
    };
  }(V, D)), Object.defineProperty(B, "toString", { value: function() {
    return "." + B.styledComponentId;
  } }), p && ya(B, o, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), B;
}
var Ln = function(o) {
  return function s(l, f, p) {
    if (p === void 0 && (p = qt), !jn.isValidElementType(f)) return yr(1, String(f));
    var h = function() {
      return l(f, p, Ya.apply(void 0, arguments));
    };
    return h.withConfig = function(k) {
      return s(l, f, Dt({}, p, {}, k));
    }, h.attrs = function(k) {
      return s(l, f, Dt({}, p, { attrs: Array.prototype.concat(p.attrs, k).filter(Boolean) }));
    }, h;
  }(ti, o);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(o) {
  Ln[o] = Ln(o);
});
xe.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), xe.env.NODE_ENV !== "production" && xe.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const rs = Ln.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: o }) => o ? "112px" : "142px"};
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
`, rn = "On This Page", ns = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: rn
}, os = ({
  items: o,
  firstElementId: s,
  focusFirstFocusableElement: l = !1
}) => {
  const f = Lo(null), p = wi("(max-width: 991px)"), [h, k] = Do({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), C = p ? 110 : 142, x = () => {
    var W;
    const F = {}, N = window.scrollY, j = (W = document.getElementById(s)) == null ? void 0 : W.getBoundingClientRect().top, U = 103;
    j >= 0 && (F.sticky = !1, F.activeContainer = ""), N > f.current.getBoundingClientRect().top && (F.sticky = !0);
    const q = h.hasHeader ? C + U : U;
    o == null || o.forEach(({ targetIdName: _ }) => {
      const te = document.getElementById(_), pe = (te == null ? void 0 : te.getBoundingClientRect().top) - q, Fe = (te == null ? void 0 : te.getBoundingClientRect().bottom) - q;
      pe < 0 && Fe > 0 && (F.activeContainer = _);
    }), k((_) => ({
      ..._,
      ...F
    }));
  }, S = () => {
    Zi(x, 150), Ki(x, 150);
  }, V = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), D = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function ne(F = null) {
    if (F === null) return h.containerClass;
    const N = Object.values(F.classList).filter(
      (j) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(j)
    );
    return N.length > 0 ? N.join(" ") : ne(F.parentElement);
  }
  An(() => {
    const F = document.getElementById(s) || null, N = {
      hasHeader: V(),
      hasAltMenuSpacing: D(),
      containerClass: ne(F)
    };
    k((j) => ({
      ...j,
      ...N
    }));
  }, []), An(() => (window == null || window.addEventListener("scroll", S), () => window.removeEventListener("scroll", S)), [h.hasHeader]);
  const se = (F) => {
    var q, W;
    const N = window.scrollY - (h.hasHeader ? C + 100 : 100), j = p ? 410 : 90;
    let U = ((q = document.getElementById(F)) == null ? void 0 : q.getBoundingClientRect().top) + N;
    f.current.classList.contains("sticky") || (U -= j), l && ((W = Xi(`#${F}`)) == null || W.focus()), window.scrollTo({ top: U, behavior: "smooth" });
  }, B = () => {
    k((F) => ({
      ...F,
      showMenu: !F.showMenu
    }));
  };
  return (o == null ? void 0 : o.length) > 0 && /* @__PURE__ */ ct.jsx(
    rs,
    {
      requiresAltMenuSpacing: h.hasAltMenuSpacing,
      ref: f,
      className: dr(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: h.sticky,
          "with-header": h.hasHeader
        }
      ),
      style: h.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ ct.jsxs("div", { className: `${h.containerClass} uds-anchor-menu-wrapper`, children: [
        p ? /* @__PURE__ */ ct.jsx(
          Wo,
          {
            gaData: {
              ...ns,
              action: h.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ ct.jsx(
              "button",
              {
                className: dr("mobile-menu-toggler", {
                  "show-menu": h.showMenu
                }),
                type: "button",
                onClick: B,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ ct.jsxs("h4", { children: [
                  rn,
                  ":",
                  /* @__PURE__ */ ct.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ ct.jsxs("h4", { children: [
          rn,
          ":"
        ] }),
        /* @__PURE__ */ ct.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: dr("card", "card-body", "collapse", {
              show: h.showMenu
            }),
            children: /* @__PURE__ */ ct.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": rn,
                children: o == null ? void 0 : o.map((F) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ ct.jsx(
                    $n,
                    {
                      "data-testid": `anchor-item-${F.targetIdName}`,
                      classes: dr("nav-link", {
                        active: h.activeContainer === F.targetIdName
                      }).split(" "),
                      ariaLabel: F.text,
                      label: F.text,
                      icon: F.icon,
                      onClick: () => se(F.targetIdName)
                    },
                    F.targetIdName
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
os.propTypes = {
  /**
   * Anchor menu items
   */
  items: M.arrayOf(
    M.shape({
      text: M.string.isRequired,
      targetIdName: M.string.isRequired,
      icon: M.arrayOf(M.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: M.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: M.bool
};
export {
  os as AnchorMenu
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
/** @license React v16.13.1
 * react-is.production.min.js
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
