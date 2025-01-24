import * as nt from "react";
import ut, { useId as Rs, useRef as Ls, useContext as ir, createElement as Ps, useEffect as Lr, useState as Is } from "react";
import * as Ms from "react-dom";
import Ds from "react-dom";
function xa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ho = { exports: {} }, Er = {};
var fi;
function js() {
  if (fi) return Er;
  fi = 1;
  var e = ut, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, d) {
    var m, f = {}, h = null, T = null;
    d !== void 0 && (h = "" + d), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (m in l) n.call(l, m) && !i.hasOwnProperty(m) && (f[m] = l[m]);
    if (s && s.defaultProps) for (m in l = s.defaultProps, l) f[m] === void 0 && (f[m] = l[m]);
    return { $$typeof: t, type: s, key: h, ref: T, props: f, _owner: a.current };
  }
  return Er.Fragment = r, Er.jsx = o, Er.jsxs = o, Er;
}
ho.exports = js();
var L = ho.exports, Ke = { env: { NODE_ENV: "production" } }, $s = { 651: function(e) {
  e.exports = function() {
    function t(H) {
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function($) {
        return typeof $;
      } : function($) {
        return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
      }, t(H);
    }
    function r(H, $) {
      return r = Object.setPrototypeOf || function(V, z) {
        return V.__proto__ = z, V;
      }, r(H, $);
    }
    function n(H, $, V) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct : function(z, F, le) {
        var Te = [null];
        Te.push.apply(Te, F);
        var He = new (Function.bind.apply(z, Te))();
        return le && r(He, le.prototype), He;
      }, n.apply(null, arguments);
    }
    function a(H) {
      return function($) {
        if (Array.isArray($)) return i($);
      }(H) || function($) {
        if (typeof Symbol < "u" && $[Symbol.iterator] != null || $["@@iterator"] != null) return Array.from($);
      }(H) || function($, V) {
        if ($) {
          if (typeof $ == "string") return i($, V);
          var z = Object.prototype.toString.call($).slice(8, -1);
          return z === "Object" && $.constructor && (z = $.constructor.name), z === "Map" || z === "Set" ? Array.from($) : z === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z) ? i($, V) : void 0;
        }
      }(H) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function i(H, $) {
      ($ == null || $ > H.length) && ($ = H.length);
      for (var V = 0, z = new Array($); V < $; V++) z[V] = H[V];
      return z;
    }
    var o = Object.hasOwnProperty, s = Object.setPrototypeOf, l = Object.isFrozen, d = Object.getPrototypeOf, m = Object.getOwnPropertyDescriptor, f = Object.freeze, h = Object.seal, T = Object.create, k = typeof Reflect < "u" && Reflect, w = k.apply, E = k.construct;
    w || (w = function(H, $, V) {
      return H.apply($, V);
    }), f || (f = function(H) {
      return H;
    }), h || (h = function(H) {
      return H;
    }), E || (E = function(H, $) {
      return n(H, a($));
    });
    var A, x = re(Array.prototype.forEach), D = re(Array.prototype.pop), P = re(Array.prototype.push), S = re(String.prototype.toLowerCase), R = re(String.prototype.toString), O = re(String.prototype.match), W = re(String.prototype.replace), de = re(String.prototype.indexOf), we = re(String.prototype.trim), ae = re(RegExp.prototype.test), ee = (A = TypeError, function() {
      for (var H = arguments.length, $ = new Array(H), V = 0; V < H; V++) $[V] = arguments[V];
      return E(A, $);
    });
    function re(H) {
      return function($) {
        for (var V = arguments.length, z = new Array(V > 1 ? V - 1 : 0), F = 1; F < V; F++) z[F - 1] = arguments[F];
        return w(H, $, z);
      };
    }
    function X(H, $, V) {
      var z;
      V = (z = V) !== null && z !== void 0 ? z : S, s && s(H, null);
      for (var F = $.length; F--; ) {
        var le = $[F];
        if (typeof le == "string") {
          var Te = V(le);
          Te !== le && (l($) || ($[F] = Te), le = Te);
        }
        H[le] = !0;
      }
      return H;
    }
    function he(H) {
      var $, V = T(null);
      for ($ in H) w(o, H, [$]) === !0 && (V[$] = H[$]);
      return V;
    }
    function De(H, $) {
      for (; H !== null; ) {
        var V = m(H, $);
        if (V) {
          if (V.get) return re(V.get);
          if (typeof V.value == "function") return re(V.value);
        }
        H = d(H);
      }
      return function(z) {
        return console.warn("fallback value for", z), null;
      };
    }
    var pe = f(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ke = f(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), qe = f(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Q = f(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), q = f(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), N = f(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), _ = f(["#text"]), y = f(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), I = f(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), g = f(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), M = f(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), C = h(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ie = h(/<%[\w\W]*|[\w\W]*%>/gm), te = h(/\${[\w\W]*}/gm), Y = h(/^data-[\-\w.\u00B7-\uFFFF]/), K = h(/^aria-[\-\w]+$/), ne = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), fe = h(/^(?:\w+script|data):/i), oe = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), se = h(/^html$/i), Z = h(/^[a-z][.\w]*(-[.\w]+)+$/i), ce = function() {
      return typeof window > "u" ? null : window;
    }, je = function H() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ce(), V = function(v) {
        return H(v);
      };
      if (V.version = "2.5.6", V.removed = [], !$ || !$.document || $.document.nodeType !== 9) return V.isSupported = !1, V;
      var z = $.document, F = $.document, le = $.DocumentFragment, Te = $.HTMLTemplateElement, He = $.Node, ze = $.Element, Et = $.NodeFilter, lr = $.NamedNodeMap, Ir = lr === void 0 ? $.NamedNodeMap || $.MozNamedAttrMap : lr, cr = $.HTMLFormElement, Mr = $.DOMParser, dt = $.trustedTypes, ft = ze.prototype, st = De(ft, "cloneNode"), St = De(ft, "nextSibling"), ur = De(ft, "childNodes"), Pt = De(ft, "parentNode");
      if (typeof Te == "function") {
        var dr = F.createElement("template");
        dr.content && dr.content.ownerDocument && (F = dr.content.ownerDocument);
      }
      var $e = function(v, U) {
        if (t(v) !== "object" || typeof v.createPolicy != "function") return null;
        var G = null, ge = "data-tt-policy-suffix";
        U.currentScript && U.currentScript.hasAttribute(ge) && (G = U.currentScript.getAttribute(ge));
        var Fe = "dompurify" + (G ? "#" + G : "");
        try {
          return v.createPolicy(Fe, { createHTML: function(Ne) {
            return Ne;
          }, createScriptURL: function(Ne) {
            return Ne;
          } });
        } catch {
          return console.warn("TrustedTypes policy " + Fe + " could not be created."), null;
        }
      }(dt, z), fr = $e ? $e.createHTML("") : "", Wt = F, Ce = Wt.implementation, Tt = Wt.createNodeIterator, Cn = Wt.createDocumentFragment, Dr = Wt.getElementsByTagName, pr = z.importNode, mr = {};
      try {
        mr = he(F).documentMode ? F.documentMode : {};
      } catch {
      }
      var Ze = {};
      V.isSupported = typeof Pt == "function" && Ce && Ce.createHTMLDocument !== void 0 && mr !== 9;
      var xt, xe, It = C, hr = ie, Ve = te, qt = Y, jr = K, $r = fe, gr = oe, Mt = Z, Qe = ne, Le = null, vr = X({}, [].concat(a(pe), a(ke), a(qe), a(q), a(_))), Pe = null, yr = X({}, [].concat(a(y), a(I), a(g), a(M))), Ae = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), J = null, b = null, j = !0, B = !0, me = !1, Ue = !0, _e = !1, Ie = !0, Ye = !1, Oe = !1, Dt = !1, pt = !1, br = !1, Fr = !1, Xa = !0, Ka = !1, Rn = !0, wr = !1, Vt = {}, Yt = null, Za = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Qa = null, Ja = X({}, ["audio", "video", "img", "source", "image", "track"]), Ln = null, ei = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zr = "http://www.w3.org/1998/Math/MathML", Hr = "http://www.w3.org/2000/svg", mt = "http://www.w3.org/1999/xhtml", Gt = mt, ti = !1, Pn = null, As = X({}, [zr, Hr, mt], R), _s = ["application/xhtml+xml", "text/html"], Xt = null, Os = F.createElement("form"), ri = function(v) {
        return v instanceof RegExp || v instanceof Function;
      }, In = function(v) {
        Xt && Xt === v || (v && t(v) === "object" || (v = {}), v = he(v), xt = xt = _s.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? "text/html" : v.PARSER_MEDIA_TYPE, xe = xt === "application/xhtml+xml" ? R : S, Le = "ALLOWED_TAGS" in v ? X({}, v.ALLOWED_TAGS, xe) : vr, Pe = "ALLOWED_ATTR" in v ? X({}, v.ALLOWED_ATTR, xe) : yr, Pn = "ALLOWED_NAMESPACES" in v ? X({}, v.ALLOWED_NAMESPACES, R) : As, Ln = "ADD_URI_SAFE_ATTR" in v ? X(he(ei), v.ADD_URI_SAFE_ATTR, xe) : ei, Qa = "ADD_DATA_URI_TAGS" in v ? X(he(Ja), v.ADD_DATA_URI_TAGS, xe) : Ja, Yt = "FORBID_CONTENTS" in v ? X({}, v.FORBID_CONTENTS, xe) : Za, J = "FORBID_TAGS" in v ? X({}, v.FORBID_TAGS, xe) : {}, b = "FORBID_ATTR" in v ? X({}, v.FORBID_ATTR, xe) : {}, Vt = "USE_PROFILES" in v && v.USE_PROFILES, j = v.ALLOW_ARIA_ATTR !== !1, B = v.ALLOW_DATA_ATTR !== !1, me = v.ALLOW_UNKNOWN_PROTOCOLS || !1, Ue = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _e = v.SAFE_FOR_TEMPLATES || !1, Ie = v.SAFE_FOR_XML !== !1, Ye = v.WHOLE_DOCUMENT || !1, pt = v.RETURN_DOM || !1, br = v.RETURN_DOM_FRAGMENT || !1, Fr = v.RETURN_TRUSTED_TYPE || !1, Dt = v.FORCE_BODY || !1, Xa = v.SANITIZE_DOM !== !1, Ka = v.SANITIZE_NAMED_PROPS || !1, Rn = v.KEEP_CONTENT !== !1, wr = v.IN_PLACE || !1, Qe = v.ALLOWED_URI_REGEXP || Qe, Gt = v.NAMESPACE || mt, Ae = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && ri(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ae.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && ri(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ae.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Ae.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _e && (B = !1), br && (pt = !0), Vt && (Le = X({}, a(_)), Pe = [], Vt.html === !0 && (X(Le, pe), X(Pe, y)), Vt.svg === !0 && (X(Le, ke), X(Pe, I), X(Pe, M)), Vt.svgFilters === !0 && (X(Le, qe), X(Pe, I), X(Pe, M)), Vt.mathMl === !0 && (X(Le, q), X(Pe, g), X(Pe, M))), v.ADD_TAGS && (Le === vr && (Le = he(Le)), X(Le, v.ADD_TAGS, xe)), v.ADD_ATTR && (Pe === yr && (Pe = he(Pe)), X(Pe, v.ADD_ATTR, xe)), v.ADD_URI_SAFE_ATTR && X(Ln, v.ADD_URI_SAFE_ATTR, xe), v.FORBID_CONTENTS && (Yt === Za && (Yt = he(Yt)), X(Yt, v.FORBID_CONTENTS, xe)), Rn && (Le["#text"] = !0), Ye && X(Le, ["html", "head", "body"]), Le.table && (X(Le, ["tbody"]), delete J.tbody), f && f(v), Xt = v);
      }, ni = X({}, ["mi", "mo", "mn", "ms", "mtext"]), ai = X({}, ["foreignobject", "annotation-xml"]), Ns = X({}, ["title", "style", "font", "a", "script"]), Ur = X({}, ke);
      X(Ur, qe), X(Ur, Q);
      var Mn = X({}, q);
      X(Mn, N);
      var rt = function(v) {
        P(V.removed, { element: v });
        try {
          v.parentNode.removeChild(v);
        } catch {
          try {
            v.outerHTML = fr;
          } catch {
            v.remove();
          }
        }
      }, Br = function(v, U) {
        try {
          P(V.removed, { attribute: U.getAttributeNode(v), from: U });
        } catch {
          P(V.removed, { attribute: null, from: U });
        }
        if (U.removeAttribute(v), v === "is" && !Pe[v]) if (pt || br) try {
          rt(U);
        } catch {
        }
        else try {
          U.setAttribute(v, "");
        } catch {
        }
      }, ii = function(v) {
        var U, G;
        if (Dt) v = "<remove></remove>" + v;
        else {
          var ge = O(v, /^[\r\n\t ]+/);
          G = ge && ge[0];
        }
        xt === "application/xhtml+xml" && Gt === mt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
        var Fe = $e ? $e.createHTML(v) : v;
        if (Gt === mt) try {
          U = new Mr().parseFromString(Fe, xt);
        } catch {
        }
        if (!U || !U.documentElement) {
          U = Ce.createDocument(Gt, "template", null);
          try {
            U.documentElement.innerHTML = ti ? fr : Fe;
          } catch {
          }
        }
        var Ne = U.body || U.documentElement;
        return v && G && Ne.insertBefore(F.createTextNode(G), Ne.childNodes[0] || null), Gt === mt ? Dr.call(U, Ye ? "html" : "body")[0] : Ye ? U.documentElement : Ne;
      }, oi = function(v) {
        return Tt.call(v.ownerDocument || v, v, Et.SHOW_ELEMENT | Et.SHOW_COMMENT | Et.SHOW_TEXT | Et.SHOW_PROCESSING_INSTRUCTION | Et.SHOW_CDATA_SECTION, null, !1);
      }, si = function(v) {
        return v instanceof cr && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof Ir) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
      }, kr = function(v) {
        return t(He) === "object" ? v instanceof He : v && t(v) === "object" && typeof v.nodeType == "number" && typeof v.nodeName == "string";
      }, ht = function(v, U, G) {
        Ze[v] && x(Ze[v], function(ge) {
          ge.call(V, U, G, Xt);
        });
      }, li = function(v) {
        var U;
        if (ht("beforeSanitizeElements", v, null), si(v) || ae(/[\u0080-\uFFFF]/, v.nodeName)) return rt(v), !0;
        var G = xe(v.nodeName);
        if (ht("uponSanitizeElement", v, { tagName: G, allowedTags: Le }), v.hasChildNodes() && !kr(v.firstElementChild) && (!kr(v.content) || !kr(v.content.firstElementChild)) && ae(/<[/\w]/g, v.innerHTML) && ae(/<[/\w]/g, v.textContent) || G === "select" && ae(/<template/i, v.innerHTML) || v.nodeType === 7 || Ie && v.nodeType === 8 && ae(/<[/\w]/g, v.data)) return rt(v), !0;
        if (!Le[G] || J[G]) {
          if (!J[G] && ui(G) && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, G) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(G)))
            return !1;
          if (Rn && !Yt[G]) {
            var ge = Pt(v) || v.parentNode, Fe = ur(v) || v.childNodes;
            if (Fe && ge) for (var Ne = Fe.length - 1; Ne >= 0; --Ne) {
              var Ge = st(Fe[Ne], !0);
              Ge.__removalCount = (v.__removalCount || 0) + 1, ge.insertBefore(Ge, St(v));
            }
          }
          return rt(v), !0;
        }
        return v instanceof ze && !function(Je) {
          var Me = Pt(Je);
          Me && Me.tagName || (Me = { namespaceURI: Gt, tagName: "template" });
          var Ee = S(Je.tagName), At = S(Me.tagName);
          return !!Pn[Je.namespaceURI] && (Je.namespaceURI === Hr ? Me.namespaceURI === mt ? Ee === "svg" : Me.namespaceURI === zr ? Ee === "svg" && (At === "annotation-xml" || ni[At]) : !!Ur[Ee] : Je.namespaceURI === zr ? Me.namespaceURI === mt ? Ee === "math" : Me.namespaceURI === Hr ? Ee === "math" && ai[At] : !!Mn[Ee] : Je.namespaceURI === mt ? !(Me.namespaceURI === Hr && !ai[At]) && !(Me.namespaceURI === zr && !ni[At]) && !Mn[Ee] && (Ns[Ee] || !Ur[Ee]) : !(xt !== "application/xhtml+xml" || !Pn[Je.namespaceURI]));
        }(v) ? (rt(v), !0) : G !== "noscript" && G !== "noembed" && G !== "noframes" || !ae(/<\/no(script|embed|frames)/i, v.innerHTML) ? (_e && v.nodeType === 3 && (U = v.textContent, U = W(U, It, " "), U = W(U, hr, " "), U = W(U, Ve, " "), v.textContent !== U && (P(V.removed, { element: v.cloneNode() }), v.textContent = U)), ht("afterSanitizeElements", v, null), !1) : (rt(v), !0);
      }, ci = function(v, U, G) {
        if (Xa && (U === "id" || U === "name") && (G in F || G in Os)) return !1;
        if (!(B && !b[U] && ae(qt, U))) {
          if (!(j && ae(jr, U))) {
            if (!Pe[U] || b[U]) {
              if (!(ui(v) && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, v) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(v)) && (Ae.attributeNameCheck instanceof RegExp && ae(Ae.attributeNameCheck, U) || Ae.attributeNameCheck instanceof Function && Ae.attributeNameCheck(U)) || U === "is" && Ae.allowCustomizedBuiltInElements && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, G) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(G)))) return !1;
            } else if (!Ln[U]) {
              if (!ae(Qe, W(G, gr, ""))) {
                if ((U !== "src" && U !== "xlink:href" && U !== "href" || v === "script" || de(G, "data:") !== 0 || !Qa[v]) && !(me && !ae($r, W(G, gr, "")))) {
                  if (G) return !1;
                }
              }
            }
          }
        }
        return !0;
      }, ui = function(v) {
        return v !== "annotation-xml" && O(v, Mt);
      }, di = function(v) {
        var U, G, ge, Fe;
        ht("beforeSanitizeAttributes", v, null);
        var Ne = v.attributes;
        if (Ne) {
          var Ge = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Pe };
          for (Fe = Ne.length; Fe--; ) {
            var Je = U = Ne[Fe], Me = Je.name, Ee = Je.namespaceURI;
            if (G = Me === "value" ? U.value : we(U.value), ge = xe(Me), Ge.attrName = ge, Ge.attrValue = G, Ge.keepAttr = !0, Ge.forceKeepAttr = void 0, ht("uponSanitizeAttribute", v, Ge), G = Ge.attrValue, Ie && ae(/((--!?|])>)|<\/(style|title)/i, G)) Br(Me, v);
            else if (!Ge.forceKeepAttr && (Br(Me, v), Ge.keepAttr)) if (Ue || !ae(/\/>/i, G)) {
              _e && (G = W(G, It, " "), G = W(G, hr, " "), G = W(G, Ve, " "));
              var At = xe(v.nodeName);
              if (ci(At, ge, G)) {
                if (!Ka || ge !== "id" && ge !== "name" || (Br(Me, v), G = "user-content-" + G), $e && t(dt) === "object" && typeof dt.getAttributeType == "function" && !Ee) switch (dt.getAttributeType(At, ge)) {
                  case "TrustedHTML":
                    G = $e.createHTML(G);
                    break;
                  case "TrustedScriptURL":
                    G = $e.createScriptURL(G);
                }
                try {
                  Ee ? v.setAttributeNS(Ee, Me, G) : v.setAttribute(Me, G), si(v) ? rt(v) : D(V.removed);
                } catch {
                }
              }
            } else Br(Me, v);
          }
          ht("afterSanitizeAttributes", v, null);
        }
      }, Cs = function v(U) {
        var G, ge = oi(U);
        for (ht("beforeSanitizeShadowDOM", U, null); G = ge.nextNode(); ) ht("uponSanitizeShadowNode", G, null), li(G) || (G.content instanceof le && v(G.content), di(G));
        ht("afterSanitizeShadowDOM", U, null);
      };
      return V.sanitize = function(v) {
        var U, G, ge, Fe, Ne, Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((ti = !v) && (v = "<!-->"), typeof v != "string" && !kr(v)) {
          if (typeof v.toString != "function") throw ee("toString is not a function");
          if (typeof (v = v.toString()) != "string") throw ee("dirty is not a string, aborting");
        }
        if (!V.isSupported) {
          if (t($.toStaticHTML) === "object" || typeof $.toStaticHTML == "function") {
            if (typeof v == "string") return $.toStaticHTML(v);
            if (kr(v)) return $.toStaticHTML(v.outerHTML);
          }
          return v;
        }
        if (Oe || In(Ge), V.removed = [], typeof v == "string" && (wr = !1), wr) {
          if (v.nodeName) {
            var Je = xe(v.nodeName);
            if (!Le[Je] || J[Je]) throw ee("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (v instanceof He) (G = (U = ii("<!---->")).ownerDocument.importNode(v, !0)).nodeType === 1 && G.nodeName === "BODY" || G.nodeName === "HTML" ? U = G : U.appendChild(G);
        else {
          if (!pt && !_e && !Ye && v.indexOf("<") === -1) return $e && Fr ? $e.createHTML(v) : v;
          if (!(U = ii(v))) return pt ? null : Fr ? fr : "";
        }
        U && Dt && rt(U.firstChild);
        for (var Me = oi(wr ? v : U); ge = Me.nextNode(); ) ge.nodeType === 3 && ge === Fe || li(ge) || (ge.content instanceof le && Cs(ge.content), di(ge), Fe = ge);
        if (Fe = null, wr) return v;
        if (pt) {
          if (br) for (Ne = Cn.call(U.ownerDocument); U.firstChild; ) Ne.appendChild(U.firstChild);
          else Ne = U;
          return (Pe.shadowroot || Pe.shadowrootmod) && (Ne = pr.call(z, Ne, !0)), Ne;
        }
        var Ee = Ye ? U.outerHTML : U.innerHTML;
        return Ye && Le["!doctype"] && U.ownerDocument && U.ownerDocument.doctype && U.ownerDocument.doctype.name && ae(se, U.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + U.ownerDocument.doctype.name + `>
` + Ee), _e && (Ee = W(Ee, It, " "), Ee = W(Ee, hr, " "), Ee = W(Ee, Ve, " ")), $e && Fr ? $e.createHTML(Ee) : Ee;
      }, V.setConfig = function(v) {
        In(v), Oe = !0;
      }, V.clearConfig = function() {
        Xt = null, Oe = !1;
      }, V.isValidAttribute = function(v, U, G) {
        Xt || In({});
        var ge = xe(v), Fe = xe(U);
        return ci(ge, Fe, G);
      }, V.addHook = function(v, U) {
        typeof U == "function" && (Ze[v] = Ze[v] || [], P(Ze[v], U));
      }, V.removeHook = function(v) {
        if (Ze[v]) return D(Ze[v]);
      }, V.removeHooks = function(v) {
        Ze[v] && (Ze[v] = []);
      }, V.removeAllHooks = function() {
        Ze = {};
      }, V;
    }();
    return je;
  }();
}, 985: (e, t, r) => {
  var n = r(524), a = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, s = {};
  function l(w) {
    return n.isMemo(w) ? o : s[w.$$typeof] || a;
  }
  s[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, s[n.Memo] = o;
  var d = Object.defineProperty, m = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, T = Object.getPrototypeOf, k = Object.prototype;
  e.exports = function w(E, A, x) {
    if (typeof A != "string") {
      if (k) {
        var D = T(A);
        D && D !== k && w(E, D, x);
      }
      var P = m(A);
      f && (P = P.concat(f(A)));
      for (var S = l(E), R = l(A), O = 0; O < P.length; ++O) {
        var W = P[O];
        if (!(i[W] || x && x[W] || R && R[W] || S && S[W])) {
          var de = h(A, W);
          try {
            d(E, W, de);
          } catch {
          }
        }
      }
    }
    return E;
  };
}, 999: (e, t, r) => {
  var n = r(848);
  function a() {
  }
  function i() {
  }
  i.resetWarningCache = a, e.exports = function() {
    function o(d, m, f, h, T, k) {
      if (k !== n) {
        var w = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw w.name = "Invariant Violation", w;
      }
    }
    function s() {
      return o;
    }
    o.isRequired = o;
    var l = { array: o, bigint: o, bool: o, func: o, number: o, object: o, string: o, symbol: o, any: o, arrayOf: s, element: o, elementType: o, instanceOf: s, node: o, objectOf: s, oneOf: s, oneOfType: s, shape: s, exact: s, checkPropTypes: i, resetWarningCache: a };
    return l.PropTypes = l, l;
  };
}, 67: (e, t, r) => {
  e.exports = r(999)();
}, 848: (e) => {
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 320: (e, t) => {
  var r = typeof Symbol == "function" && Symbol.for, n = r ? Symbol.for("react.element") : 60103, a = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, l = r ? Symbol.for("react.provider") : 60109, d = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, k = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, E = r ? Symbol.for("react.lazy") : 60116, A = r ? Symbol.for("react.block") : 60121, x = r ? Symbol.for("react.fundamental") : 60117, D = r ? Symbol.for("react.responder") : 60118, P = r ? Symbol.for("react.scope") : 60119;
  function S(O) {
    if (typeof O == "object" && O !== null) {
      var W = O.$$typeof;
      switch (W) {
        case n:
          switch (O = O.type) {
            case m:
            case f:
            case i:
            case s:
            case o:
            case T:
              return O;
            default:
              switch (O = O && O.$$typeof) {
                case d:
                case h:
                case E:
                case w:
                case l:
                  return O;
                default:
                  return W;
              }
          }
        case a:
          return W;
      }
    }
  }
  function R(O) {
    return S(O) === f;
  }
  t.AsyncMode = m, t.ConcurrentMode = f, t.ContextConsumer = d, t.ContextProvider = l, t.Element = n, t.ForwardRef = h, t.Fragment = i, t.Lazy = E, t.Memo = w, t.Portal = a, t.Profiler = s, t.StrictMode = o, t.Suspense = T, t.isAsyncMode = function(O) {
    return R(O) || S(O) === m;
  }, t.isConcurrentMode = R, t.isContextConsumer = function(O) {
    return S(O) === d;
  }, t.isContextProvider = function(O) {
    return S(O) === l;
  }, t.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === n;
  }, t.isForwardRef = function(O) {
    return S(O) === h;
  }, t.isFragment = function(O) {
    return S(O) === i;
  }, t.isLazy = function(O) {
    return S(O) === E;
  }, t.isMemo = function(O) {
    return S(O) === w;
  }, t.isPortal = function(O) {
    return S(O) === a;
  }, t.isProfiler = function(O) {
    return S(O) === s;
  }, t.isStrictMode = function(O) {
    return S(O) === o;
  }, t.isSuspense = function(O) {
    return S(O) === T;
  }, t.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === i || O === f || O === s || O === o || O === T || O === k || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === w || O.$$typeof === l || O.$$typeof === d || O.$$typeof === h || O.$$typeof === x || O.$$typeof === D || O.$$typeof === P || O.$$typeof === A);
  }, t.typeOf = S;
}, 524: (e, t, r) => {
  e.exports = r(320);
}, 146: (e) => {
  e.exports = function(t, r, n, a) {
    var i = n ? n.call(a, t, r) : void 0;
    if (i !== void 0) return !!i;
    if (t === r) return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r) return !1;
    var o = Object.keys(t), s = Object.keys(r);
    if (o.length !== s.length) return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(r), d = 0; d < o.length; d++) {
      var m = o[d];
      if (!l(m)) return !1;
      var f = t[m], h = r[m];
      if ((i = n ? n.call(a, f, h, m) : void 0) === !1 || i === void 0 && f !== h) return !1;
    }
    return !0;
  };
}, 373: (e, t) => {
  var r;
  (function() {
    var n = {}.hasOwnProperty;
    function a() {
      for (var s = "", l = 0; l < arguments.length; l++) {
        var d = arguments[l];
        d && (s = o(s, i(d)));
      }
      return s;
    }
    function i(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return a.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) return s.toString();
      var l = "";
      for (var d in s) n.call(s, d) && s[d] && (l = o(l, d));
      return l;
    }
    function o(s, l) {
      return l ? s ? s + " " + l : s + l : s;
    }
    e.exports ? (a.default = a, e.exports = a) : (r = (function() {
      return a;
    }).apply(t, [])) === void 0 || (e.exports = r);
  })();
} }, pi = {};
function Re(e) {
  var t = pi[e];
  if (t !== void 0) return t.exports;
  var r = pi[e] = { exports: {} };
  return $s[e].call(r.exports, r, r.exports, Re), r.exports;
}
Re.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return Re.d(t, { a: t }), t;
}, Re.d = (e, t) => {
  for (var r in t) Re.o(t, r) && !Re.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
}, Re.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Re.nc = void 0;
var or = {};
Re.d(or, { nD: () => Aa, n_: () => Na, n9: () => mn, $n: () => bt, ef: () => hn, fy: () => Or, Zp: () => gn, TR: () => Po, Pb: () => No, Ur: () => Oo, _Q: () => Lo, lq: () => La, _V: () => Ut, dK: () => yn, Fx: () => Pa, oz: () => Fo, YT: () => zo, Gm: () => Ia, Ce: () => Ma, qm: () => Ql, fh: () => Ro, Od: () => Ra, fZ: () => Co, RE: () => Ca, hZ: () => ic, Nq: () => oc, NJ: () => sc, bO: () => lc, oP: () => cc, jl: () => uc, PP: () => dc, BB: () => fc, Q9: () => pc, vW: () => hc, VE: () => mc, _v: () => gc, uP: () => vc });
var Fs = Re(67), c = Re.n(Fs);
const u = (mi = { Component: () => nt.Component, createContext: () => nt.createContext, createElement: () => nt.createElement, default: () => nt.default, forwardRef: () => nt.forwardRef, useCallback: () => nt.useCallback, useContext: () => nt.useContext, useEffect: () => nt.useEffect, useImperativeHandle: () => nt.useImperativeHandle, useMemo: () => nt.useMemo, useRef: () => nt.useRef, useState: () => nt.useState }, Dn = {}, Re.d(Dn, mi), Dn);
var mi, Dn;
const hi = (e, t, r) => e ? t : r, tn = (e) => (e || []).join(" ");
var zs = Re(651);
const at = (e) => ({ __html: (0, zs.sanitize)(e) }), gi = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; ) n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let vi, jn = !1;
c().shape({ event: c().string, action: c().string, name: c().string, region: c().string, section: c().string, component: c().string, type: c().string, text: c().string });
const et = ({ event: e = "", action: t = "", name: r = "", type: n = "", section: a = "", text: i = "", region: o = "", component: s = "" }) => {
  const { dataLayer: l } = window, d = { event: e.toLowerCase(), action: t.toLowerCase(), name: r.toLowerCase(), type: n.toLowerCase(), region: o.toLowerCase(), section: a.toLowerCase(), text: i.toLowerCase(), component: s.toLowerCase() };
  l && l.push(d);
}, Hs = c().shape({ url: c().string, altText: c().string, cssClass: c().arrayOf(c().string), size: c().oneOf(["small", "medium", "large"]) }), $n = c().shape({ text: c().string, maxWidth: c().string, cssClass: c().arrayOf(c().string), highlightColor: c().oneOf(["gold", "black"]) }), go = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), content: c().shape({ icon: c().string, header: c().string, body: c().string }) });
var Us = Re(373), be = Re.n(Us);
const vo = ({ id: e, item: t, openCard: r, onClick: n }) => {
  var a, i, o, s, l, d;
  return u.default.createElement("div", { className: be()("accordion-item", "mt-3", { [`accordion-item-${t.color}`]: t.color, "accordion-header-icon": (a = t.content) == null ? void 0 : a.icon }) }, u.default.createElement("div", { className: "accordion-header" }, u.default.createElement("h4", null, u.default.createElement("a", { "data-testid": "accordion-opener", className: be()({ collapsed: e !== r }), "data-bs-toggle": "collapse", href: `#card-body-${e}`, role: "button", "aria-expanded": e === r, "aria-controls": `card-body-${e}`, onClick: (m) => {
    var f;
    return n(m, e, (f = t.content) == null ? void 0 : f.header);
  } }, (i = t.content) != null && i.icon ? u.default.createElement("span", { className: "accordion-icon" }, u.default.createElement("i", { className: `${(o = t.content.icon) == null ? void 0 : o[0]} fa-${(s = t.content.icon) == null ? void 0 : s[1]} me-2` }), t.content.header) : (l = t.content) == null ? void 0 : l.header, u.default.createElement("i", { className: "fas fa-chevron-up" })))), ((d = t.content) == null ? void 0 : d.body) && u.default.createElement("div", { id: `card-body-${e}`, className: be()("collapse") }, u.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: at(t.content.body) })));
};
vo.propTypes = { id: c().number, item: go, openCard: c().number, onClick: c().func };
const Bs = { event: "collapse", name: "onclick", type: "click", region: "main content" }, Aa = ({ cards: e, openedCard: t }) => {
  const [r, n] = (0, u.useState)(t), a = (o, s) => {
    et({ ...Bs, action: s, text: o });
  }, i = (o, s, l) => {
    o.preventDefault(), (r === s || r) && a(e[r - 1].content.header, "close"), r !== s ? (n(s), a(l, "open")) : n(null);
  };
  return u.default.createElement("div", { className: "accordion" }, e == null ? void 0 : e.map((o, s) => o.content.body && o.content.header && u.default.createElement(vo, { key: s + 1, id: s + 1, item: o, openCard: r, onClick: i })));
};
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rt.apply(null, arguments);
}
Aa.propTypes = { cards: c().arrayOf(go).isRequired, openedCard: c().number };
const Ws = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, bt = ({ label: e, cardTitle: t, ariaLabel: r, block: n, color: a, disabled: i, element: o, href: s, icon: l, innerRef: d, onClick: m, size: f, classes: h, target: T, ...k }) => {
  const w = be()("btn", { [`btn-${a}`]: !0, "btn-md": f === "small", "btn-sm": f === "xsmall", "btn-block": n, disabled: i });
  let E = o;
  return s && o === "button" && (E = "a"), u.default.createElement(E, Rt({ type: E === "button" && m ? "button" : void 0 }, k, { className: be()(h) || w, href: s, ref: d, onClick: () => (et({ ...Ws, text: e, section: t }), void (m == null ? void 0 : m())), "aria-label": r, target: E === "a" ? T : null }), l && u.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }), e);
};
bt.propTypes = { label: c().string, cardTitle: c().string, ariaLabel: c().string, block: c().bool, color: c().oneOf(["gold", "maroon", "gray", "dark"]), disabled: c().bool, element: c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), href: c().string, icon: c().arrayOf(c().string), innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), classes: c().arrayOf(c().string), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) }, bt.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
var yo = Re(524), qs = Re(146);
Re.n(qs);
const Vs = function(e) {
  function t(Q, q, N, _, y) {
    for (var I, g, M, C, ie, te = 0, Y = 0, K = 0, ne = 0, fe = 0, oe = 0, se = M = I = 0, Z = 0, ce = 0, je = 0, H = 0, $ = N.length, V = $ - 1, z = "", F = "", le = "", Te = ""; Z < $; ) {
      if (g = N.charCodeAt(Z), Z === V && Y + ne + K + te !== 0 && (Y !== 0 && (g = Y === 47 ? 10 : 47), ne = K = te = 0, $++, V++), Y + ne + K + te === 0) {
        if (Z === V && (0 < ce && (z = z.replace(f, "")), 0 < z.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              z += N.charAt(Z);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (I = (z = z.trim()).charCodeAt(0), M = 1, H = ++Z; Z < $; ) {
              switch (g = N.charCodeAt(Z)) {
                case 123:
                  M++;
                  break;
                case 125:
                  M--;
                  break;
                case 47:
                  switch (g = N.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = Z + 1; se < V; ++se) switch (N.charCodeAt(se)) {
                          case 47:
                            if (g === 42 && N.charCodeAt(se - 1) === 42 && Z + 2 !== se) {
                              Z = se + 1;
                              break e;
                            }
                            break;
                          case 10:
                            if (g === 47) {
                              Z = se + 1;
                              break e;
                            }
                        }
                        Z = se;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; Z++ < V && N.charCodeAt(Z) !== g; ) ;
              }
              if (M === 0) break;
              Z++;
            }
            if (M = N.substring(H, Z), I === 0 && (I = (z = z.replace(m, "").trim()).charCodeAt(0)), I === 64) {
              switch (0 < ce && (z = z.replace(f, "")), g = z.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  ce = q;
                  break;
                default:
                  ce = he;
              }
              if (H = (M = t(q, ce, M, g, y + 1)).length, 0 < pe && (ie = s(3, M, ce = r(he, z, je), q, ee, ae, H, g, y, _), z = ce.join(""), ie !== void 0 && (H = (M = ie.trim()).length) === 0 && (g = 0, M = "")), 0 < H) switch (g) {
                case 115:
                  z = z.replace(S, o);
                case 100:
                case 109:
                case 45:
                  M = z + "{" + M + "}";
                  break;
                case 107:
                  M = (z = z.replace(A, "$1 $2")) + "{" + M + "}", M = X === 1 || X === 2 && i("@" + M, 3) ? "@-webkit-" + M + "@" + M : "@" + M;
                  break;
                default:
                  M = z + M, _ === 112 && (F += M, M = "");
              }
              else M = "";
            } else M = t(q, r(q, z, je), M, _, y + 1);
            le += M, M = je = ce = se = I = 0, z = "", g = N.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (1 < (H = (z = (0 < ce ? z.replace(f, "") : z).trim()).length)) switch (se === 0 && (I = z.charCodeAt(0), I === 45 || 96 < I && 123 > I) && (H = (z = z.replace(" ", ":")).length), 0 < pe && (ie = s(1, z, q, Q, ee, ae, F.length, _, y, _)) !== void 0 && (H = (z = ie.trim()).length) === 0 && (z = "\0\0"), I = z.charCodeAt(0), g = z.charCodeAt(1), I) {
              case 0:
                break;
              case 64:
                if (g === 105 || g === 99) {
                  Te += z + N.charAt(Z);
                  break;
                }
              default:
                z.charCodeAt(H - 1) !== 58 && (F += a(z, I, g, z.charCodeAt(2)));
            }
            je = ce = se = I = 0, z = "", g = N.charCodeAt(++Z);
        }
      }
      switch (g) {
        case 13:
        case 10:
          Y === 47 ? Y = 0 : 1 + I === 0 && _ !== 107 && 0 < z.length && (ce = 1, z += "\0"), 0 < pe * qe && s(0, z, q, Q, ee, ae, F.length, _, y, _), ae = 1, ee++;
          break;
        case 59:
        case 125:
          if (Y + ne + K + te === 0) {
            ae++;
            break;
          }
        default:
          switch (ae++, C = N.charAt(Z), g) {
            case 9:
            case 32:
              if (ne + te + Y === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  C = "";
                  break;
                default:
                  g !== 32 && (C = " ");
              }
              break;
            case 0:
              C = "\\0";
              break;
            case 12:
              C = "\\f";
              break;
            case 11:
              C = "\\v";
              break;
            case 38:
              ne + Y + te === 0 && (ce = je = 1, C = "\f" + C);
              break;
            case 108:
              if (ne + Y + te + re === 0 && 0 < se) switch (Z - se) {
                case 2:
                  fe === 112 && N.charCodeAt(Z - 3) === 58 && (re = fe);
                case 8:
                  oe === 111 && (re = oe);
              }
              break;
            case 58:
              ne + Y + te === 0 && (se = Z);
              break;
            case 44:
              Y + K + ne + te === 0 && (ce = 1, C += "\r");
              break;
            case 34:
            case 39:
              Y === 0 && (ne = ne === g ? 0 : ne === 0 ? g : ne);
              break;
            case 91:
              ne + Y + K === 0 && te++;
              break;
            case 93:
              ne + Y + K === 0 && te--;
              break;
            case 41:
              ne + Y + te === 0 && K--;
              break;
            case 40:
              ne + Y + te === 0 && (I === 0 && (2 * fe + 3 * oe == 533 || (I = 1)), K++);
              break;
            case 64:
              Y + K + ne + te + se + M === 0 && (M = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + te + K)) switch (Y) {
                case 0:
                  switch (2 * g + 3 * N.charCodeAt(Z + 1)) {
                    case 235:
                      Y = 47;
                      break;
                    case 220:
                      H = Z, Y = 42;
                  }
                  break;
                case 42:
                  g === 47 && fe === 42 && H + 2 !== Z && (N.charCodeAt(H + 2) === 33 && (F += N.substring(H, Z + 1)), C = "", Y = 0);
              }
          }
          Y === 0 && (z += C);
      }
      oe = fe, fe = g, Z++;
    }
    if (0 < (H = F.length)) {
      if (ce = q, 0 < pe && (ie = s(2, F, ce, Q, ee, ae, H, _, y, _)) !== void 0 && (F = ie).length === 0) return Te + F + le;
      if (F = ce.join(",") + "{" + F + "}", X * re != 0) {
        switch (X !== 2 || i(F, 2) || (re = 0), re) {
          case 111:
            F = F.replace(D, ":-moz-$1") + F;
            break;
          case 112:
            F = F.replace(x, "::-webkit-input-$1") + F.replace(x, "::-moz-$1") + F.replace(x, ":-ms-input-$1") + F;
        }
        re = 0;
      }
    }
    return Te + F + le;
  }
  function r(Q, q, N) {
    var _ = q.trim().split(w);
    q = _;
    var y = _.length, I = Q.length;
    switch (I) {
      case 0:
      case 1:
        var g = 0;
        for (Q = I === 0 ? "" : Q[0] + " "; g < y; ++g) q[g] = n(Q, q[g], N).trim();
        break;
      default:
        var M = g = 0;
        for (q = []; g < y; ++g) for (var C = 0; C < I; ++C) q[M++] = n(Q[C] + " ", _[g], N).trim();
    }
    return q;
  }
  function n(Q, q, N) {
    var _ = q.charCodeAt(0);
    switch (33 > _ && (_ = (q = q.trim()).charCodeAt(0)), _) {
      case 38:
        return q.replace(E, "$1" + Q.trim());
      case 58:
        return Q.trim() + q.replace(E, "$1" + Q.trim());
      default:
        if (0 < 1 * N && 0 < q.indexOf("\f")) return q.replace(E, (Q.charCodeAt(0) === 58 ? "" : "$1") + Q.trim());
    }
    return Q + q;
  }
  function a(Q, q, N, _) {
    var y = Q + ";", I = 2 * q + 3 * N + 4 * _;
    if (I === 944) {
      Q = y.indexOf(":", 9) + 1;
      var g = y.substring(Q, y.length - 1).trim();
      return g = y.substring(0, Q).trim() + g + ";", X === 1 || X === 2 && i(g, 1) ? "-webkit-" + g + g : g;
    }
    if (X === 0 || X === 2 && !i(y, 1)) return y;
    switch (I) {
      case 1015:
        return y.charCodeAt(10) === 97 ? "-webkit-" + y + y : y;
      case 951:
        return y.charCodeAt(3) === 116 ? "-webkit-" + y + y : y;
      case 963:
        return y.charCodeAt(5) === 110 ? "-webkit-" + y + y : y;
      case 1009:
        if (y.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + y + y;
      case 978:
        return "-webkit-" + y + "-moz-" + y + y;
      case 1019:
      case 983:
        return "-webkit-" + y + "-moz-" + y + "-ms-" + y + y;
      case 883:
        if (y.charCodeAt(8) === 45) return "-webkit-" + y + y;
        if (0 < y.indexOf("image-set(", 11)) return y.replace(we, "$1-webkit-$2") + y;
        break;
      case 932:
        if (y.charCodeAt(4) === 45) switch (y.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + y.replace("-grow", "") + "-webkit-" + y + "-ms-" + y.replace("grow", "positive") + y;
          case 115:
            return "-webkit-" + y + "-ms-" + y.replace("shrink", "negative") + y;
          case 98:
            return "-webkit-" + y + "-ms-" + y.replace("basis", "preferred-size") + y;
        }
        return "-webkit-" + y + "-ms-" + y + y;
      case 964:
        return "-webkit-" + y + "-ms-flex-" + y + y;
      case 1023:
        if (y.charCodeAt(8) !== 99) break;
        return "-webkit-box-pack" + (g = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + y + "-ms-flex-pack" + g + y;
      case 1005:
        return T.test(y) ? y.replace(h, ":-webkit-") + y.replace(h, ":-moz-") + y : y;
      case 1e3:
        switch (q = (g = y.substring(13).trim()).indexOf("-") + 1, g.charCodeAt(0) + g.charCodeAt(q)) {
          case 226:
            g = y.replace(P, "tb");
            break;
          case 232:
            g = y.replace(P, "tb-rl");
            break;
          case 220:
            g = y.replace(P, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + g + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (q = (y = Q).length - 10, I = (g = (y.charCodeAt(q) === 33 ? y.substring(0, q) : y).substring(Q.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | g.charCodeAt(7))) {
          case 203:
            if (111 > g.charCodeAt(8)) break;
          case 115:
            y = y.replace(g, "-webkit-" + g) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(g, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + y.replace(g, "-webkit-" + g) + ";" + y.replace(g, "-ms-" + g + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return g = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + g + "-ms-flex-" + g + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(O, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(O, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (de.test(Q) === !0) return (g = Q.substring(Q.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(Q.replace("stretch", "fill-available"), q, N, _).replace(":fill-available", ":stretch") : y.replace(g, "-webkit-" + g) + y.replace(g, "-moz-" + g.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, N + _ === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + y;
    }
    return y;
  }
  function i(Q, q) {
    var N = Q.indexOf(q === 1 ? ":" : "{"), _ = Q.substring(0, q !== 3 ? N : 10);
    return N = Q.substring(N + 1, Q.length - 1), ke(q !== 2 ? _ : _.replace(W, "$1"), N, q);
  }
  function o(Q, q) {
    var N = a(q, q.charCodeAt(0), q.charCodeAt(1), q.charCodeAt(2));
    return N !== q + ";" ? N.replace(R, " or ($1)").substring(4) : "(" + q + ")";
  }
  function s(Q, q, N, _, y, I, g, M, C, ie) {
    for (var te, Y = 0, K = q; Y < pe; ++Y) switch (te = De[Y].call(d, Q, K, N, _, y, I, g, M, C, ie)) {
      case void 0:
      case !1:
      case !0:
      case null:
        break;
      default:
        K = te;
    }
    if (K !== q) return K;
  }
  function l(Q) {
    return (Q = Q.prefix) !== void 0 && (ke = null, Q ? typeof Q != "function" ? X = 1 : (X = 2, ke = Q) : X = 0), l;
  }
  function d(Q, q) {
    var N = Q;
    if (33 > N.charCodeAt(0) && (N = N.trim()), N = [N], 0 < pe) {
      var _ = s(-1, q, N, N, ee, ae, 0, 0, 0, 0);
      _ !== void 0 && typeof _ == "string" && (q = _);
    }
    var y = t(he, N, q, 0, 0);
    return 0 < pe && (_ = s(-2, y, N, N, ee, ae, y.length, 0, 0, 0)) !== void 0 && (y = _), re = 0, ae = ee = 1, y;
  }
  var m = /^\0+/g, f = /[\0\r\f]/g, h = /: */g, T = /zoo|gra/, k = /([,: ])(transform)/g, w = /,\r+?/g, E = /([\t\r\n ])*\f?&/g, A = /@(k\w+)\s*(\S*)\s*/, x = /::(place)/g, D = /:(read-only)/g, P = /[svh]\w+-[tblr]{2}/, S = /\(\s*(.*)\s*\)/g, R = /([\s\S]*?);/g, O = /-self|flex-/g, W = /[^]*?(:[rp][el]a[\w-]+)[^]*/, de = /stretch|:\s*\w+\-(?:conte|avail)/, we = /([^-])(image-set\()/, ae = 1, ee = 1, re = 0, X = 1, he = [], De = [], pe = 0, ke = null, qe = 0;
  return d.use = function Q(q) {
    switch (q) {
      case void 0:
      case null:
        pe = De.length = 0;
        break;
      default:
        if (typeof q == "function") De[pe++] = q;
        else if (typeof q == "object") for (var N = 0, _ = q.length; N < _; ++N) Q(q[N]);
        else qe = 0 | !!q;
    }
    return Q;
  }, d.set = l, e !== void 0 && l(e), d;
}, Ys = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function Gs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yi = Gs(function(e) {
  return Xs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), Ks = Re(985), Zs = Re.n(Ks);
function vt() {
  return (vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var bi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Jn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !(0, yo.typeOf)(e);
}, un = Object.freeze([]), Nt = Object.freeze({});
function _r(e) {
  return typeof e == "function";
}
function wi(e) {
  return e.displayName || e.name || "Component";
}
function _a(e) {
  return e && typeof e.styledComponentId == "string";
}
var Qt = typeof Ke < "u" && Ke.env !== void 0 && (Ke.env.REACT_APP_SC_ATTR || Ke.env.SC_ATTR) || "data-styled", Oa = typeof window < "u" && "HTMLElement" in window, Qs = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ke < "u" && Ke.env !== void 0 && (Ke.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ke.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ke.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ke.env.REACT_APP_SC_DISABLE_SPEEDY : Ke.env.SC_DISABLE_SPEEDY !== void 0 && Ke.env.SC_DISABLE_SPEEDY !== "" && Ke.env.SC_DISABLE_SPEEDY !== "false" && Ke.env.SC_DISABLE_SPEEDY));
function Pr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Js = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, o = i; r >= o; ) (o <<= 1) < 0 && Pr(16, "" + r);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(a), this.length = o;
      for (var s = i; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), d = 0, m = n.length; d < m; d++) this.tag.insertRule(l, n[d]) && (this.groupSizes[r]++, l++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var o = a; o < i; o++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), o = i + a, s = i; s < o; s++) n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), rn = /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ new Map(), Tr = 1, Wr = function(e) {
  if (rn.has(e)) return rn.get(e);
  for (; dn.has(Tr); ) Tr++;
  var t = Tr++;
  return rn.set(e, t), dn.set(t, e), t;
}, el = function(e) {
  return dn.get(e);
}, tl = function(e, t) {
  t >= Tr && (Tr = t + 1), rn.set(e, t), dn.set(t, e);
}, rl = "style[" + Qt + '][data-styled-version="5.3.11"]', nl = new RegExp("^" + Qt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), al = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++) (n = a[i]) && e.registerName(t, n);
}, il = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var o = r[a].trim();
    if (o) {
      var s = o.match(nl);
      if (s) {
        var l = 0 | parseInt(s[1], 10), d = s[2];
        l !== 0 && (tl(d, l), al(e, d, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(o);
    }
  }
}, ol = function() {
  return Re.nc;
}, bo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(s) {
    for (var l = s.childNodes, d = l.length; d >= 0; d--) {
      var m = l[d];
      if (m && m.nodeType === 1 && m.hasAttribute(Qt)) return m;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Qt, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = ol();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
}, sl = function() {
  function e(r) {
    var n = this.element = bo(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, o = 0, s = i.length; o < s; o++) {
        var l = i[o];
        if (l.ownerNode === a) return l;
      }
      Pr(17);
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
}(), ll = function() {
  function e(r) {
    var n = this.element = bo(r);
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
}(), cl = function() {
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
}(), ki = Oa, ul = { isServer: !Oa, useCSSOMInjection: !Qs }, fn = function() {
  function e(r, n, a) {
    r === void 0 && (r = Nt), n === void 0 && (n = {}), this.options = vt({}, ul, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Oa && ki && (ki = !1, function(i) {
      for (var o = document.querySelectorAll(rl), s = 0, l = o.length; s < l; s++) {
        var d = o[s];
        d && d.getAttribute(Qt) !== "active" && (il(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Wr(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(vt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, o = n.target, r = a ? new cl(o) : i ? new sl(o) : new ll(o), new Js(r)));
    var r, n, a, i, o;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Wr(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Wr(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Wr(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", o = 0; o < a; o++) {
        var s = el(o);
        if (s !== void 0) {
          var l = r.names.get(s), d = n.getGroup(o);
          if (l && d && l.size) {
            var m = Qt + ".g" + o + '[id="' + s + '"]', f = "";
            l !== void 0 && l.forEach(function(h) {
              h.length > 0 && (f += h + ",");
            }), i += "" + d + m + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), dl = /(a)(d)/gi, Ei = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ea(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ei(t % 52) + r;
  return (Ei(t % 52) + r).replace(dl, "$1-$2");
}
var Kt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, wo = function(e) {
  return Kt(5381, e);
};
function ko(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (_r(r) && !_a(r)) return !1;
  }
  return !0;
}
var fl = wo("5.3.11"), pl = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && ko(t), this.componentId = r, this.baseHash = Kt(fl, r), this.baseStyle = n, fn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var o = Ht(this.rules, t, r, n).join(""), s = ea(Kt(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(a, s)) {
        var l = n(o, "." + s, void 0, a);
        r.insertRules(a, s, l);
      }
      i.push(s), this.staticRulesId = s;
    }
    else {
      for (var d = this.rules.length, m = Kt(this.baseHash, n.hash), f = "", h = 0; h < d; h++) {
        var T = this.rules[h];
        if (typeof T == "string") f += T;
        else if (T) {
          var k = Ht(T, t, r, n), w = Array.isArray(k) ? k.join("") : k;
          m = Kt(m, w + h), f += w;
        }
      }
      if (f) {
        var E = ea(m >>> 0);
        if (!r.hasNameForId(a, E)) {
          var A = n(f, "." + E, void 0, a);
          r.insertRules(a, E, A);
        }
        i.push(E);
      }
    }
    return i.join(" ");
  }, e;
}(), ml = /^\s*\/\/.*$/gm, hl = [":", "[", ".", "#"];
function gl(e) {
  var t, r, n, a, i = Nt, o = i.options, s = o === void 0 ? Nt : o, l = i.plugins, d = l === void 0 ? un : l, m = new Vs(s), f = [], h = /* @__PURE__ */ function(w) {
    function E(A) {
      if (A) try {
        w(A + "}");
      } catch {
      }
    }
    return function(A, x, D, P, S, R, O, W, de, we) {
      switch (A) {
        case 1:
          if (de === 0 && x.charCodeAt(0) === 64) return w(x + ";"), "";
          break;
        case 2:
          if (W === 0) return x + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return w(D[0] + x), "";
            default:
              return x + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(E);
      }
    };
  }(function(w) {
    f.push(w);
  }), T = function(w, E, A) {
    return E === 0 && hl.indexOf(A[r.length]) !== -1 || A.match(a) ? w : "." + t;
  };
  function k(w, E, A, x) {
    x === void 0 && (x = "&");
    var D = w.replace(ml, ""), P = E && A ? A + " " + E + " { " + D + " }" : D;
    return t = x, r = E, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), m(A || !E ? "" : E, P);
  }
  return m.use([].concat(d, [function(w, E, A) {
    w === 2 && A.length && A[0].lastIndexOf(r) > 0 && (A[0] = A[0].replace(n, T));
  }, h, function(w) {
    if (w === -2) {
      var E = f;
      return f = [], E;
    }
  }])), k.hash = d.length ? d.reduce(function(w, E) {
    return E.name || Pr(15), Kt(w, E.name);
  }, 5381).toString() : "", k;
}
var Eo = u.default.createContext(), So = (Eo.Consumer, u.default.createContext()), vl = (So.Consumer, new fn()), ta = gl();
function yl() {
  return (0, u.useContext)(Eo) || vl;
}
var bl = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = ta);
      var o = n.name + i.hash;
      a.hasNameForId(n.id, o) || a.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return Pr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ta), this.name + t.hash;
  }, e;
}(), wl = /([A-Z])/, kl = /([A-Z])/g, El = /^ms-/, Sl = function(e) {
  return "-" + e.toLowerCase();
};
function Si(e) {
  return wl.test(e) ? e.replace(kl, Sl).replace(El, "-ms-") : e;
}
var Ti = function(e) {
  return e == null || e === !1 || e === "";
};
function Ht(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], o = 0, s = e.length; o < s; o += 1) (a = Ht(e[o], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  return Ti(e) ? "" : _a(e) ? "." + e.styledComponentId : _r(e) ? typeof (l = e) != "function" || l.prototype && l.prototype.isReactComponent || !t ? e : Ht(e(t), t, r, n) : e instanceof bl ? r ? (e.inject(r, n), e.getName(n)) : e : Jn(e) ? function d(m, f) {
    var h, T, k = [];
    for (var w in m) m.hasOwnProperty(w) && !Ti(m[w]) && (Array.isArray(m[w]) && m[w].isCss || _r(m[w]) ? k.push(Si(w) + ":", m[w], ";") : Jn(m[w]) ? k.push.apply(k, d(m[w], w)) : k.push(Si(w) + ": " + (h = w, ((T = m[w]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || h in Ys || h.startsWith("--") ? String(T).trim() : T + "px") + ";")));
    return f ? [f + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
  var l;
}
var xi = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Tl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return _r(e) || Jn(e) ? xi(Ht(bi(un, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : xi(Ht(bi(e, r)));
}
var xl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Al = /(^-|-$)/g;
function Fn(e) {
  return e.replace(xl, "-").replace(Al, "");
}
function qr(e) {
  return typeof e == "string" && !0;
}
var ra = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, _l = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ol(e, t, r) {
  var n = e[r];
  ra(t) && ra(n) ? To(n, t) : e[r] = t;
}
function To(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    if (ra(o)) for (var s in o) _l(s) && Ol(e, o[s], s);
  }
  return e;
}
var xo = u.default.createContext();
xo.Consumer;
var zn = {};
function Ao(e, t, r) {
  var n = _a(e), a = !qr(e), i = t.attrs, o = i === void 0 ? un : i, s = t.componentId, l = s === void 0 ? function(x, D) {
    var P = typeof x != "string" ? "sc" : Fn(x);
    zn[P] = (zn[P] || 0) + 1;
    var S = P + "-" + function(R) {
      return ea(wo(R) >>> 0);
    }("5.3.11" + P + zn[P]);
    return D ? D + "-" + S : S;
  }(t.displayName, t.parentComponentId) : s, d = t.displayName, m = d === void 0 ? function(x) {
    return qr(x) ? "styled." + x : "Styled(" + wi(x) + ")";
  }(e) : d, f = t.displayName && t.componentId ? Fn(t.displayName) + "-" + t.componentId : t.componentId || l, h = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, T = t.shouldForwardProp;
  n && e.shouldForwardProp && (T = t.shouldForwardProp ? function(x, D, P) {
    return e.shouldForwardProp(x, D, P) && t.shouldForwardProp(x, D, P);
  } : e.shouldForwardProp);
  var k, w = new pl(r, f, n ? e.componentStyle : void 0), E = w.isStatic && o.length === 0, A = function(x, D) {
    return function(P, S, R, O) {
      var W = P.attrs, de = P.componentStyle, we = P.defaultProps, ae = P.foldedComponentIds, ee = P.shouldForwardProp, re = P.styledComponentId, X = P.target, he = function(I, g, M) {
        I === void 0 && (I = Nt);
        var C = vt({}, g, { theme: I }), ie = {};
        return M.forEach(function(te) {
          var Y, K, ne, fe = te;
          for (Y in _r(fe) && (fe = fe(C)), fe) C[Y] = ie[Y] = Y === "className" ? (K = ie[Y], ne = fe[Y], K && ne ? K + " " + ne : K || ne) : fe[Y];
        }), [C, ie];
      }(function(I, g, M) {
        return M === void 0 && (M = Nt), I.theme !== M.theme && I.theme || g || M.theme;
      }(S, (0, u.useContext)(xo), we) || Nt, S, W), De = he[0], pe = he[1], ke = function(I, g, M) {
        var C = yl(), ie = (0, u.useContext)(So) || ta;
        return g ? I.generateAndInjectStyles(Nt, C, ie) : I.generateAndInjectStyles(M, C, ie);
      }(de, O, De), qe = R, Q = pe.$as || S.$as || pe.as || S.as || X, q = qr(Q), N = pe !== S ? vt({}, S, {}, pe) : S, _ = {};
      for (var y in N) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? _.as = N[y] : (ee ? ee(y, yi, Q) : !q || yi(y)) && (_[y] = N[y]));
      return S.style && pe.style !== S.style && (_.style = vt({}, S.style, {}, pe.style)), _.className = Array.prototype.concat(ae, re, ke !== re ? ke : null, S.className, pe.className).filter(Boolean).join(" "), _.ref = qe, (0, u.createElement)(Q, _);
    }(k, x, D, E);
  };
  return A.displayName = m, (k = u.default.forwardRef(A)).attrs = h, k.componentStyle = w, k.displayName = m, k.shouldForwardProp = T, k.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : un, k.styledComponentId = f, k.target = n ? e.target : e, k.withComponent = function(x) {
    var D = t.componentId, P = function(R, O) {
      if (R == null) return {};
      var W, de, we = {}, ae = Object.keys(R);
      for (de = 0; de < ae.length; de++) W = ae[de], O.indexOf(W) >= 0 || (we[W] = R[W]);
      return we;
    }(t, ["componentId"]), S = D && D + "-" + (qr(x) ? x : Fn(wi(x)));
    return Ao(x, vt({}, P, { attrs: h, componentId: S }), r);
  }, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? To({}, e.defaultProps, x) : x;
  } }), Object.defineProperty(k, "toString", { value: function() {
    return "." + k.styledComponentId;
  } }), a && Zs()(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), k;
}
var Hn, na = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Nt), !(0, yo.isValidElementType)(n)) return Pr(1, String(n));
    var i = function() {
      return r(n, a, Tl.apply(void 0, arguments));
    };
    return i.withConfig = function(o) {
      return t(r, n, vt({}, a, {}, o));
    }, i.attrs = function(o) {
      return t(r, n, vt({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, i;
  }(Ao, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  na[e] = na(e);
}), (Hn = (function(e, t) {
  this.rules = e, this.componentId = t, this.isStatic = ko(e), fn.registerId(this.componentId + 1);
}).prototype).createStyles = function(e, t, r, n) {
  var a = n(Ht(this.rules, t, r, n).join(""), ""), i = this.componentId + e;
  r.insertRules(i, i, a);
}, Hn.removeStyles = function(e, t) {
  t.clearRules(this.componentId + e);
}, Hn.renderStyles = function(e, t, r, n) {
  e > 2 && fn.registerId(this.componentId + e), this.removeStyles(e, r), this.createStyles(e, t, r, n);
};
const kt = na, Nl = kt.div`
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
`, nn = "On This Page", Cl = { event: "collapse", name: "onclick", type: "click", text: nn }, Na = ({ items: e, firstElementId: t, focusFirstFocusableElement: r = !1 }) => {
  const n = (0, u.useRef)(null), a = function(f) {
    const [h, T] = (0, u.useState)(!1);
    return (0, u.useEffect)(() => {
      const k = window.matchMedia(f);
      k.matches !== h && T(k.matches);
      const w = () => {
        T(k.matches);
      };
      return k.addEventListener("change", w), () => k.removeEventListener("change", w);
    }, [h, f]), h;
  }("(max-width: 991px)"), [i, o] = (0, u.useState)({ hasHeader: !1, hasAltMenuSpacing: !1, containerClass: "container-xl", activeContainer: "", showMenu: !1, sticky: !1 }), s = a ? 110 : 142, l = () => {
    var w;
    const f = {}, h = window.scrollY;
    ((w = document.getElementById(t)) == null ? void 0 : w.getBoundingClientRect().top) >= 0 && (f.sticky = !1, f.activeContainer = ""), h > n.current.getBoundingClientRect().top && (f.sticky = !0);
    const k = i.hasHeader ? s + 103 : 103;
    e == null || e.forEach(({ targetIdName: E }) => {
      const A = document.getElementById(E), x = (A == null ? void 0 : A.getBoundingClientRect().top) - k, D = (A == null ? void 0 : A.getBoundingClientRect().bottom) - k;
      x < 0 && D > 0 && (f.activeContainer = E);
    }), o((E) => ({ ...E, ...f }));
  }, d = () => {
    var f;
    f = l, jn || (jn = !0, setTimeout(() => {
      f(), jn = !1;
    }, 150)), ((h) => {
      window.clearTimeout(vi), vi = window.setTimeout(h, 150);
    })(l);
  };
  function m(f = null) {
    if (f === null) return i.containerClass;
    const h = Object.values(f.classList).filter((T) => ["container-sm", "container-md", "container", "container-lg", "container-xl", "container-fluid"].includes(T));
    return h.length > 0 ? h.join(" ") : m(f.parentElement);
  }
  return (0, u.useEffect)(() => {
    const f = document.getElementById(t) || null, h = { hasHeader: !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), hasAltMenuSpacing: !!document.getElementById("degreeDetailPageContainer"), containerClass: m(f) };
    o((T) => ({ ...T, ...h }));
  }, []), (0, u.useEffect)(() => (window == null || window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d)), [i.hasHeader]), (e == null ? void 0 : e.length) > 0 && u.default.createElement(Nl, { requiresAltMenuSpacing: i.hasAltMenuSpacing, ref: n, className: be()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: i.sticky, "with-header": i.hasHeader }), style: i.showMenu ? { borderBottom: 0 } : {} }, u.default.createElement("div", { className: `${i.containerClass} uds-anchor-menu-wrapper` }, a ? u.default.createElement("button", { className: be()("mobile-menu-toggler", { "show-menu": i.showMenu }), type: "button", onClick: () => {
    et({ ...Cl, action: i.showMenu ? "close" : "open" }), o((f) => ({ ...f, showMenu: !f.showMenu }));
  }, "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, u.default.createElement("h4", null, nn, ":", u.default.createElement("i", { className: "fas fa-chevron-down" }))) : u.default.createElement("h4", null, nn, ":"), u.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: be()("card", "card-body", "collapse", { show: i.showMenu }) }, u.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": nn }, e == null ? void 0 : e.map((f) => u.default.createElement(bt, { "data-testid": `anchor-item-${f.targetIdName}`, key: f.targetIdName, classes: be()("nav-link", { active: i.activeContainer === f.targetIdName }).split(" "), ariaLabel: f.text, label: f.text, icon: f.icon, onClick: () => ((h) => {
    var A, x;
    const T = window.scrollY - (i.hasHeader ? s + 100 : 100), k = a ? 410 : 90;
    let w = ((A = document.getElementById(h)) == null ? void 0 : A.getBoundingClientRect().top) + T;
    var E;
    n.current.classList.contains("sticky") || (w -= k), r && ((x = (E = `#${h}`, (E ? document.querySelector(E) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null || x.focus()), window.scrollTo({ top: w, behavior: "smooth" });
  })(f.targetIdName) }))))));
};
Na.propTypes = { items: c().arrayOf(c().shape({ text: c().string.isRequired, targetIdName: c().string.isRequired, icon: c().arrayOf(c().string) })).isRequired, firstElementId: c().string.isRequired, focusFirstFocusableElement: c().bool };
var Vr, Rl = (Vr = function(e, t) {
  return Vr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Vr(e, t);
}, function(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  Vr(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}), Ll = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.name = "AssertionError", n;
  }
  return Rl(t, e), t;
}(Error);
function xr(e, t) {
  if (!e) throw new Ll(t);
}
function Tn(e) {
  var t = Object.entries(e).filter(function(r) {
    return r[1] != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Pl = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function n() {
      this.constructor = t;
    }
    e(t, r), t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), $t = function() {
  return $t = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, $t.apply(this, arguments);
}, Ai = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  }
  return r;
};
const Il = function(e) {
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.openShareDialog = function(n) {
      var a, i, o = r.props, s = o.onShareWindowClose, l = o.windowHeight, d = l === void 0 ? 400 : l, m = o.windowPosition, f = m === void 0 ? "windowCenter" : m, h = o.windowWidth, T = h === void 0 ? 550 : h;
      (function(k, w, E) {
        var A = w.height, x = w.width, D = Ai(w, ["height", "width"]), P = $t({ height: A, width: x, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, D), S = window.open(k, "", Object.keys(P).map(function(O) {
          return "".concat(O, "=").concat(P[O]);
        }).join(", "));
        if (E) var R = window.setInterval(function() {
          try {
            (S === null || S.closed) && (window.clearInterval(R), E(S));
          } catch (O) {
            console.error(O);
          }
        }, 1e3);
      })(n, $t({ height: d, width: T }, f === "windowCenter" ? (a = T, i = d, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - a / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - i / 2 }) : function(k, w) {
        return { top: (window.screen.height - w) / 2, left: (window.screen.width - k) / 2 };
      }(T, d)), s);
    }, r.handleClick = function(n) {
      return a = r, i = void 0, s = function() {
        var l, d, m, f, h, T, k, w, E, A;
        return function(x, D) {
          var P, S, R, O, W = { label: 0, sent: function() {
            if (1 & R[0]) throw R[1];
            return R[1];
          }, trys: [], ops: [] };
          return O = { next: de(0), throw: de(1), return: de(2) }, typeof Symbol == "function" && (O[Symbol.iterator] = function() {
            return this;
          }), O;
          function de(we) {
            return function(ae) {
              return function(ee) {
                if (P) throw new TypeError("Generator is already executing.");
                for (; W; ) try {
                  if (P = 1, S && (R = 2 & ee[0] ? S.return : ee[0] ? S.throw || ((R = S.return) && R.call(S), 0) : S.next) && !(R = R.call(S, ee[1])).done) return R;
                  switch (S = 0, R && (ee = [2 & ee[0], R.value]), ee[0]) {
                    case 0:
                    case 1:
                      R = ee;
                      break;
                    case 4:
                      return W.label++, { value: ee[1], done: !1 };
                    case 5:
                      W.label++, S = ee[1], ee = [0];
                      continue;
                    case 7:
                      ee = W.ops.pop(), W.trys.pop();
                      continue;
                    default:
                      if (!((R = (R = W.trys).length > 0 && R[R.length - 1]) || ee[0] !== 6 && ee[0] !== 2)) {
                        W = 0;
                        continue;
                      }
                      if (ee[0] === 3 && (!R || ee[1] > R[0] && ee[1] < R[3])) {
                        W.label = ee[1];
                        break;
                      }
                      if (ee[0] === 6 && W.label < R[1]) {
                        W.label = R[1], R = ee;
                        break;
                      }
                      if (R && W.label < R[2]) {
                        W.label = R[2], W.ops.push(ee);
                        break;
                      }
                      R[2] && W.ops.pop(), W.trys.pop();
                      continue;
                  }
                  ee = D.call(x, W);
                } catch (re) {
                  ee = [6, re], S = 0;
                } finally {
                  P = R = 0;
                }
                if (5 & ee[0]) throw ee[1];
                return { value: ee[0] ? ee[1] : void 0, done: !0 };
              }([we, ae]);
            };
          }
        }(this, function(x) {
          switch (x.label) {
            case 0:
              return l = this.props, d = l.beforeOnClick, m = l.disabled, f = l.networkLink, h = l.onClick, T = l.url, k = l.openShareDialogOnClick, w = l.opts, E = f(T, w), m ? [2] : (n.preventDefault(), d ? !(D = A = d()) || typeof D != "object" && typeof D != "function" || typeof D.then != "function" ? [3, 2] : [4, A] : [3, 2]);
            case 1:
              x.sent(), x.label = 2;
            case 2:
              return k && this.openShareDialog(E), h && h(n, E), [2];
          }
          var D;
        });
      }, new ((o = void 0) || (o = Promise))(function(l, d) {
        function m(T) {
          try {
            h(s.next(T));
          } catch (k) {
            d(k);
          }
        }
        function f(T) {
          try {
            h(s.throw(T));
          } catch (k) {
            d(k);
          }
        }
        function h(T) {
          var k;
          T.done ? l(T.value) : (k = T.value, k instanceof o ? k : new o(function(w) {
            w(k);
          })).then(m, f);
        }
        h((s = s.apply(a, i || [])).next());
      });
      var a, i, o, s;
    }, r;
  }
  return Pl(t, e), t.prototype.render = function() {
    var r = this.props, n = (r.beforeOnClick, r.children), a = r.className, i = r.disabled, o = r.disabledStyle, s = r.forwardedRef, l = (r.networkLink, r.networkName), d = (r.onShareWindowClose, r.openShareDialogOnClick, r.opts, r.resetButtonStyle), m = r.style, f = (r.url, r.windowHeight, r.windowPosition, r.windowWidth, Ai(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), h = be()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!i, disabled: !!i }, a), T = $t($t(d ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, m), i && o);
    return u.default.createElement("button", $t({}, f, { "aria-label": f["aria-label"] || l, className: h, onClick: this.handleClick, ref: s, style: T }), n);
  }, t.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: !0, resetButtonStyle: !0 }, t;
}(u.Component);
var pn = function() {
  return pn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, pn.apply(this, arguments);
};
const xn = function(e, t, r, n) {
  function a(i, o) {
    var s = r(i), l = pn({}, i);
    return Object.keys(s).forEach(function(d) {
      delete l[d];
    }), u.default.createElement(Il, pn({}, n, l, { forwardedRef: o, networkName: e, networkLink: t, opts: r(i) }));
  }
  return a.displayName = "ShareButton-".concat(e), (0, u.forwardRef)(a);
}, _i = xn("facebook", function(e, t) {
  var r = t.quote, n = t.hashtag;
  return xr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Tn({ u: e, quote: r, hashtag: n });
}, function(e) {
  return { quote: e.quote, hashtag: e.hashtag };
}, { windowWidth: 550, windowHeight: 400 });
var aa = function() {
  return aa = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, aa.apply(this, arguments);
};
function An(e) {
  var t = function(r) {
    var n = r.bgStyle, a = r.borderRadius, i = r.iconFillColor, o = r.round, s = r.size, l = function(d, m) {
      var f = {};
      for (var h in d) Object.prototype.hasOwnProperty.call(d, h) && m.indexOf(h) < 0 && (f[h] = d[h]);
      if (d != null && typeof Object.getOwnPropertySymbols == "function") {
        var T = 0;
        for (h = Object.getOwnPropertySymbols(d); T < h.length; T++) m.indexOf(h[T]) < 0 && Object.prototype.propertyIsEnumerable.call(d, h[T]) && (f[h[T]] = d[h[T]]);
      }
      return f;
    }(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return u.default.createElement("svg", aa({ viewBox: "0 0 64 64", width: s, height: s }, l), o ? u.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : u.default.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: n }), u.default.createElement("path", { d: e.path, fill: i }));
  };
  return t.defaultProps = { bgStyle: {}, borderRadius: 0, iconFillColor: "white", size: 64 }, t;
}
const Oi = An({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), Ni = xn("twitter", function(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, i = a === void 0 ? [] : a, o = t.related, s = o === void 0 ? [] : o;
  return xr(e, "twitter.url"), xr(Array.isArray(i), "twitter.hashtags is not an array"), xr(Array.isArray(s), "twitter.related is not an array"), "https://twitter.com/share" + Tn({ url: e, text: r, via: n, hashtags: i.length > 0 ? i.join(",") : void 0, related: s.length > 0 ? s.join(",") : void 0 });
}, function(e) {
  return { hashtags: e.hashtags, title: e.title, via: e.via, related: e.related };
}, { windowWidth: 550, windowHeight: 400 }), Ci = An({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), Ml = xn("email", function(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Tn({ subject: r, body: n ? n + a + e : e });
}, function(e) {
  return { subject: e.subject, body: e.body, separator: e.separator || " " };
}, { openShareDialogOnClick: !1, onClick: function(e, t) {
  window.location.href = t;
} }), Dl = An({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), Ri = xn("linkedin", function(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return xr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Tn({ url: e, mini: "true", title: r, summary: n, source: a });
}, function(e) {
  return { title: e.title, summary: e.summary, source: e.source };
}, { windowWidth: 750, windowHeight: 600 }), Li = An({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
function _o(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function ia(e, t) {
  return e === void 0 && (e = ""), t === void 0 && (t = void 0), t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var jl = typeof window == "object" && window.Element || function() {
};
c().oneOfType([c().string, c().func, function(e, t, r) {
  if (!(e[t] instanceof jl)) return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}, c().shape({ current: c().any })]);
var oa = c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), $l = ["className", "cssModule", "active", "tag"], Fl = { tag: oa, active: c().bool, className: c().string, cssModule: c().object }, sa = function(e) {
  var t = e.className, r = e.cssModule, n = e.active, a = e.tag, i = _o(e, $l), o = ia(be()(t, !!n && "active", "breadcrumb-item"), r);
  return u.default.createElement(a, Rt({}, i, { className: o, "aria-current": n ? "page" : void 0 }));
};
sa.propTypes = Fl, sa.defaultProps = { tag: "li" };
const Yr = sa;
var zl = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"], Hl = { tag: oa, listTag: oa, className: c().string, listClassName: c().string, cssModule: c().object, children: c().node, "aria-label": c().string }, la = function(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, a = e.children, i = e.tag, o = e.listTag, s = e["aria-label"], l = _o(e, zl), d = ia(be()(t), n), m = ia(be()("breadcrumb", r), n);
  return u.default.createElement(i, Rt({}, l, { className: d, "aria-label": s }), u.default.createElement(o, { className: m }, a));
};
la.propTypes = Hl, la.defaultProps = { tag: "nav", listTag: "ol", "aria-label": "breadcrumb" };
const Ul = la, Bl = kt.div`
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
`, Wl = kt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, mn = ({ type: e, articleUrl: t, publicationDate: r, title: n, body: a, authorEmail: i, authorName: o, authorPhone: s, authorTitle: l, breadcrumbs: d, calendarUrl: m, eventLocation: f, eventTime: h, headerImageUrl: T, registrationUrl: k, zoomUrl: w }) => {
  const E = be()("col", "col-12", { "col-lg-8": e === "event" && (k || w || m) });
  return u.default.createElement(u.default.Fragment, null, T && e !== "event" && u.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${T})` } }), u.default.createElement(Bl, { className: `container ${e}-container wrapper-container` }, d && u.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement(Ul, { listClassName: "breadcrumb" }, d.map((A) => ((x) => x.active ? u.default.createElement(Yr, { active: !0, tag: "li", className: "breadcrumb-item" }, u.default.createElement(Yr, { tag: "a", href: x.url }, x.title)) : u.default.createElement(Yr, { tag: "li", className: "breadcrumb-item" }, u.default.createElement(Yr, { tag: "a", href: x.url }, x.title)))(A))))), u.default.createElement("div", { className: "row pb-2 pt-3" }, u.default.createElement("div", { className: E }, u.default.createElement("h2", { "data-testid": "title" }, n)), e === "event" && u.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (k || w) && (k ? u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(bt, { color: "maroon", href: k, label: "Register" })) : u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(bt, { color: "maroon", href: w, label: "Attend on Zoom" }))), m && u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(bt, { color: "gray", size: "small", href: m, label: "Add to calendar" })))), e === "event" ? u.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, h && u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), u.default.createElement("div", { dangerouslySetInnerHTML: at(h) })), (k && w || f) && u.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), u.default.createElement("div", { dangerouslySetInnerHTML: at(f) }), k && w && u.default.createElement("a", { href: w }, "Attend on Zoom"))) : u.default.createElement("div", { className: "row row-spaced pt-2" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(_i, { url: t, quote: n }, u.default.createElement(Oi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ni, { url: t, quote: n }, u.default.createElement(Ci, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ri, { url: t, quote: n }, u.default.createElement(Li, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), r && u.default.createElement("i", { className: "news-date" }, r))), u.default.createElement("div", { className: "row" }, u.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: at(a), "data-testid": "body" })), e === "news" && u.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "author highlight-gold" }, o), l && u.default.createElement("div", { className: "author-title" }, l), i && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-envelope" })), u.default.createElement("a", { href: `mailto: ${i}` }, i)), s && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-phone" })), u.default.createElement("a", { href: `tel: ${s}` }, s)))), e === "event" && u.default.createElement(Wl, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "For more information contact:"), u.default.createElement("div", { className: "event-author" }, o), u.default.createElement("div", { className: "event-author-title" }, l), (i || s) && u.default.createElement("div", { className: "event-author-info" }, i && u.default.createElement("div", null, u.default.createElement("a", { href: `mailto: ${i}` }, i)), s && u.default.createElement("div", null, u.default.createElement("a", { href: `tel: ${s}` }, s)))), u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "Share this event:"), u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(_i, { url: t, quote: n }, u.default.createElement(Oi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ni, { url: t, quote: n }, u.default.createElement(Ci, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ml, { url: i, quote: n }, u.default.createElement(Dl, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ri, { url: t, quote: n }, u.default.createElement(Li, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
};
mn.propTypes = { type: c().oneOf(["event", "news"]), articleUrl: c().string.isRequired, publicationDate: c().string.isRequired, title: c().string.isRequired, body: c().string.isRequired, authorEmail: c().string, authorName: c().string.isRequired, authorPhone: c().string, authorTitle: c().string, breadcrumbs: c().arrayOf(c().shape({ title: c().string, url: c().string, active: c().bool })), calendarUrl: c().string, headerImageUrl: c().string, eventLocation: c().string, eventTime: c().string, registrationUrl: c().string, zoomUrl: c().string }, mn.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
const ql = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, hn = ({ color: e, icon: t, innerRef: r, onClick: n, size: a, cardTitle: i }) => u.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"}`, ref: r, onClick: () => (et({ ...ql, text: `${t == null ? void 0 : t[1]} icon`, section: i }), void (n == null ? void 0 : n())), "aria-label": "Close" }, u.default.createElement("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` }));
hn.propTypes = { color: c().oneOf(["white", "gray", "black"]), icon: c().arrayOf(c().string), innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func, cardTitle: c().string, size: c().oneOf(["large", "small"]) }, hn.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
const Vl = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Or = ({ label: e, cardTitle: t, ariaLabel: r, color: n, disabled: a, element: i, innerRef: o, href: s, onClick: l, ...d }) => {
  const m = be()("btn", "btn-tag", { "btn-tag-alt-white": n === "white", "btn-tag-alt-gray": n === "gray", "btn-tag-alt-dark": n === "dark", disabled: a });
  let f = i;
  return s && i === "button" && (f = "a"), u.default.createElement(f, Rt({ type: f === "button" && l ? "button" : void 0 }, d, { className: m, href: s, ref: o, onClick: () => (et({ ...Vl, text: e, section: t }), void (l == null ? void 0 : l())), "aria-label": r }), e);
};
Or.propTypes = { label: c().string, cardTitle: c().string, ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), disabled: c().bool, element: c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), href: c().string, innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func }, Or.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
const Ut = ({ src: e, alt: t, cssClasses: r, loading: n = "lazy", decoding: a = "async", dataTestId: i, fetchPriority: o = "auto", width: s, height: l, cardLink: d, title: m, caption: f, captionTitle: h, border: T, dropShadow: k }) => {
  const w = { src: e, alt: t, loading: n, decoding: a, fetchpriority: o, ...(r == null ? void 0 : r.length) > 0 && { className: tn(r) }, ...i && { "data-testid": i }, ...s && { width: s }, ...l && { height: l } }, E = be()("uds-img", { borderless: !T, "uds-img-drop-shadow": k }), A = (x) => {
    const D = x ? `${w.className} ${x}` : w.className;
    return d ? u.default.createElement("a", { href: d }, u.default.createElement("img", Rt({}, w, { className: D })), u.default.createElement("span", { className: "visually-hidden" }, m)) : u.default.createElement("img", Rt({}, w, { className: D }));
  };
  return u.default.createElement(u.default.Fragment, null, f ? u.default.createElement("div", { className: E }, u.default.createElement("figure", { className: "figure uds-figure" }, A(), f && u.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, h && u.default.createElement("h3", null, h), u.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: at(f) })))) : A(E));
};
Ut.propTypes = { src: c().string.isRequired, alt: c().string.isRequired, cssClasses: c().arrayOf(c().string), loading: c().oneOf(["lazy", "eager"]), decoding: c().oneOf(["sync", "async", "auto"]), fetchPriority: c().oneOf(["auto", "high", "low"]), width: c().string, height: c().string, dataTestId: c().string, cardLink: c().string, title: c().string, caption: c().string, captionTitle: c().string, border: c().bool, dropShadow: c().bool };
const Yl = kt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Gl = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, gn = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: m, buttons: f, linkLabel: h, linkUrl: T, tags: k, showBorders: w, cardLink: E }) => u.default.createElement(ca, { type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: m, buttons: f, linkLabel: h, linkUrl: T, tags: k, showBorders: w, cardLink: E });
gn.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), width: c().oneOf(["25%", "50%", "75%", "100%"]), horizontal: c().bool, title: c().string.isRequired, icon: c().arrayOf(c().string), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, image: c().string, imageAltText: c().string, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), showBorders: c().bool, cardLink: c().string }, gn.defaultProps = { type: "default", width: "100%", horizontal: !1, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const ca = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: m, buttons: f, linkLabel: h, linkUrl: T, tags: k, showBorders: w, cardLink: E }) => {
  const A = be()("card", "cards-components", { "card-degree": e === "degree", "card-event": e === "event", "card-story": e === "story", [`w-${t.replace("%", "")}`]: t !== "100%", "card-horizontal": r, borderless: !w });
  return u.default.createElement(u.default.Fragment, null, u.default.createElement(Yl, { className: A, "data-testid": "card-container" }, !!n && u.default.createElement(Ut, { src: n, alt: a, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: E, title: i }), !n && o && u.default.createElement("i", { className: `${o == null ? void 0 : o[0]} fa-${o == null ? void 0 : o[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), r ? u.default.createElement("div", { className: "card-content-wrapper" }, u.default.createElement(vn, { type: e, body: s, eventFormat: l, eventLocation: d, eventTime: m, title: i, buttons: f, linkLabel: h, linkUrl: T, tags: k, cardLink: E })) : u.default.createElement(vn, { type: e, body: s, eventFormat: l, eventLocation: d, eventTime: m, title: i, buttons: f, linkLabel: h, linkUrl: T, tags: k, cardLink: E })));
};
ca.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), width: c().oneOf(["25%", "50%", "75%", "100%"]), horizontal: c().bool, title: c().string.isRequired, icon: c().arrayOf(c().string), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, image: c().string, imageAltText: c().string, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), showBorders: c().bool, cardLink: c().string }, ca.defaultProps = { type: "default", width: "100%", horizontal: !1, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const vn = ({ type: e, body: t, eventFormat: r, eventLocation: n, eventTime: a, title: i, buttons: o, linkLabel: s, linkUrl: l, tags: d, cardLink: m }) => {
  return u.default.createElement(u.default.Fragment, null, !!i && u.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, u.default.createElement("h3", { className: "card-title" }, m ? u.default.createElement("a", { href: m }, i) : i)), !!t && u.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, u.default.createElement("div", { dangerouslySetInnerHTML: at(t) })), e === "event" && (a || n) && u.default.createElement(ua, { eventFormat: r, eventTime: a, eventLocation: n }), o && u.default.createElement("div", { className: "card-buttons" }, o.map((h) => u.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${h.label}-${h.href}` }, u.default.createElement(bt, { ariaLabel: h.ariaLabel, color: h.color, icon: h.icon, href: h.href, label: h.label, onClick: h.onClick, size: h.size, target: h.target, cardTitle: i })))), l && s && u.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, u.default.createElement("a", { href: (f = l, f.startsWith("https://") || f.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(f) ? f : `mailto:${f}`), onClick: () => et({ ...Gl, section: i, text: s }) }, s)), d && u.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, d.map((h) => u.default.createElement(Or, { key: `${h.label}-${h.href}`, ariaLabel: h.ariaLabel, color: h.color, href: h.href, label: h.label, onClick: h.onClick, cardTitle: i }))));
  var f;
};
vn.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, title: c().string.isRequired, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), cardLink: c().string }, vn.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
const ua = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? u.default.createElement("div", { className: "card-event-details" }, t && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(t) })), r && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(r) }))) : u.default.createElement(u.default.Fragment, null, t && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(t) }))), r && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("span", null, u.default.createElement("div", { dangerouslySetInnerHTML: at(r) })))));
ua.propTypes = { eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string }, ua.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
const Xl = kt.div`
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
`, Kl = () => u.default.createElement(Xl, null, u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null)), Zl = kt.section``, Oo = (0, u.createContext)(null), No = ({ defaultProps: e, dataSource: t, noFeedText: r, renderHeader: n, renderBody: a, dataTransformer: i = (l) => l, dataFilter: o = (l) => l, maxItems: s }) => {
  const [{ data: l, loading: d, error: m }, f] = (() => {
    const [w, E] = (0, u.useState)(), [A, x] = (0, u.useState)(!1), [D, P] = (0, u.useState)(!1), [S, R] = (0, u.useState)("");
    return (0, u.useEffect)(() => {
      S && (() => {
        P(null), x(!0);
        try {
          fetch(S).then((O) => O.json()).then((O) => {
            E(O), x(!1);
          }).catch((O) => {
            P(O), x(!1);
          });
        } catch (O) {
          P(O);
        }
      })();
    }, [S]), [{ data: w, loading: A, error: D }, R];
  })(), [h, T] = (0, u.useState)([]), k = { ...e.dataSource, ...t };
  return (0, u.useEffect)(() => {
    f(k == null ? void 0 : k.url);
  }, [k == null ? void 0 : k.url]), (0, u.useEffect)(() => {
    const w = l == null ? void 0 : l.nodes.map(i), E = w == null ? void 0 : w.filter((A) => o(A, t == null ? void 0 : t.filters));
    T(s ? E == null ? void 0 : E.slice(0, s) : E);
  }, [l]), u.default.createElement(Oo.Provider, { value: { feeds: h } }, u.default.createElement(Zl, null, n, m ? u.default.createElement("span", null, "Error, try again!") : u.default.createElement(u.default.Fragment, null, d && !(h != null && h.length) && u.default.createElement("div", { className: "text-center mt-4" }, u.default.createElement(Kl, null)), h != null && h.length ? a : !d && u.default.createElement("p", { className: "text-center" }, r))));
};
No.propTypes = { renderHeader: c().element, renderBody: c().element, maxItems: c().number, dataTransformer: c().func, dataFilter: c().func, noFeedText: c().string };
const Ca = c().shape({ color: c().oneOf(["white", "dark"]), text: c().string }), Ra = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), text: c().string }), Ql = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), text: c().string, size: c().string }), Co = c().shape({ url: c().string, filters: c().string }), Ro = c().shape({ header: Ca, ctaButton: Ra, dataSource: Co, maxItems: c().number }), Jl = kt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Lo = ({ defaultProps: e, header: t, ctaButton: r }) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return u.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, u.default.createElement("div", { className: "col-sm-12 col-md-9" }, u.default.createElement("h2", { className: `text-${n.color}` }, n.text)), u.default.createElement(Jl, { className: "col-sm-12 col-md-3" }, u.default.createElement("a", { className: `btn btn-${a.color}`, href: a.url, onClick: () => et({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: n.text, text: a.text }) }, a.text)));
};
Lo.propTypes = { defaultProps: Ro, header: Ca, ctaButton: Ra };
const Po = ({ children: e }) => u.default.createElement("div", { className: "row", "data-testid": "feed-body" }, u.default.createElement("div", { className: "col" }, e));
Po.propTypes = { children: c().element };
const ec = kt.img`
  width: 100%;
`, La = (e) => {
  const t = e.type || "heading-hero";
  return { "heading-hero": () => function({ image: r, subTitle: n, title: a, contents: i, contentsColor: o }) {
    const s = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, l = { black: "text-dark", white: "text-white", undefined: "" };
    let d = u.default.createElement(u.default.Fragment, null);
    return a && (d = u.default.createElement("h1", { style: { maxWidth: a.maxWidth || "" }, "data-testid": "hero-title" }, u.default.createElement("span", { className: be()({ [l[a.color]]: a.color, [s[a.highlightColor]]: a.highlightColor }) }, a.text))), a && n && (d = u.default.createElement("header", null, u.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, u.default.createElement("span", { className: be()({ [l[n.color]]: n.color, [s[n.highlightColor]]: n.highlightColor }) }, n.text)), d)), u.default.createElement("div", { className: be()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[r == null ? void 0 : r.size]]: r == null ? void 0 : r.size }) }, u.default.createElement("div", { className: "hero-overlay" }), u.default.createElement(ec, { className: "hero", src: r == null ? void 0 : r.url, alt: r == null ? void 0 : r.altText, "data-testid": "hero-image" }), d, i && u.default.createElement("div", { "data-testid": "hero-content", className: be()("content", { [l[o]]: o }) }, i.map((m, f) => u.default.createElement("p", { key: `content-${f}` }, m.text))));
  }(e), "story-hero": () => function({ image: r, title: n, contents: a }) {
    return console.log({ image: r, title: n, contents: a }), u.default.createElement("div", null, "TODO: to be implemented");
  }(e), undefined: () => (console.error(`the type '${t}' is not supported by the 'Hero' component.`), null) }[t]();
};
La.propTypes = { type: c().oneOf(["heading-hero", "story-hero"]), image: Hs, title: $n, subTitle: $n, contents: c().arrayOf($n), contentsColor: c().string };
const gt = ({ dataId: e, isClickeable: t, disabled: r, pageLinkIcon: n, selectedPage: a, onClick: i, ellipses: o, ariaLabel: s, children: l, ariaDisabled: d }) => u.default.createElement("li", { className: be()("page-item", { disabled: r, active: a, elipses: o }) }, t ? u.default.createElement("button", { type: "button", "aria-label": s, className: be()("page-link", { "page-link-icon": n }), onClick: i, "data-testid": "page-link", "data-id": e, "aria-current": a ? "page" : null, "aria-disabled": d }, l, a && u.default.createElement("span", { className: "visually-hidden" }, "(current)")) : u.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, l));
gt.propTypes = { isClickeable: c().bool, disabled: c().bool, pageLinkIcon: c().bool, selectedPage: c().bool, dataId: c().string, onClick: c().func, children: c().node, ellipses: c().bool, ariaLabel: c().string, ariaDisabled: c().bool }, gt.defaultProps = { isClickeable: !1, disabled: !1, pageLinkIcon: !1, selectedPage: !1, onClick: () => {
} };
const tc = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, yn = ({ type: e, background: t, currentPage: r, totalPages: n, onChange: a }) => {
  const [i, o] = (0, u.useState)(null);
  (0, u.useEffect)(() => {
    o(r);
  }, [r]);
  const s = (l, d) => {
    const m = { first: 1, prev: i === 1 ? 1 : i - 1, next: i === n ? n : i + 1, last: n }[d] ?? d;
    o(m), ((f) => {
      et({ ...tc, text: `page ${f}` });
    })(m), a == null || a(l, m);
  };
  return u.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, u.default.createElement("ul", { className: be()("pagination", "justify-content-center", "pt-2", "pb-2", { border: e === "bordered", "uds-bg-gray1": t === "gray1", "uds-bg-gray": t === "gray2", "uds-bg-dark": t === "gray7" }) }, u.default.createElement(gt, { dataId: "prev", isClickeable: !0, disabled: i === 1, pageLinkIcon: !0, onClick: (l) => s(l, "prev"), ariaDisabled: i === 1, ariaLabel: "Previous Page" }), (() => {
    const l = hi(i === n - 1, 2, i === n ? 3 : 1), d = hi(i === 1, 3, i === 2 ? 2 : 1), m = [...gi(i - l, i, n), ...gi(i, i + 1 + d, n)];
    return u.default.createElement(u.default.Fragment, null, m[0] !== 1 && u.default.createElement(gt, { ariaLabel: `Page 1 of ${n}`, isClickeable: !0, selectedPage: i === 1, onClick: (f) => s(f, "first") }, "1"), m[0] > 2 && u.default.createElement(gt, { ellipses: !0 }, "..."), m.map((f) => u.default.createElement(gt, { ariaLabel: `Page ${f} of ${n}`, isClickeable: !0, key: f, selectedPage: i === f, onClick: (h) => s(h, f) }, f)), m[m.length - 1] < n - 1 && u.default.createElement(gt, { ellipses: !0 }, "..."), m[m.length - 1] !== n && u.default.createElement(gt, { isClickeable: !0, ariaLabel: `Page ${n} of ${n}`, selectedPage: i === n, onClick: (f) => s(f, "last") }, n));
  })(), u.default.createElement(gt, { dataId: "next", isClickeable: !0, ariaDisabled: i === n, disabled: i === n, pageLinkIcon: !0, onClick: (l) => s(l, "next"), ariaLabel: "Next Page" })));
};
yn.propTypes = { type: c().oneOf(["default", "bordered"]).isRequired, background: c().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: c().number, totalPages: c().number, onChange: c().func.isRequired }, yn.defaultProps = { currentPage: 1, totalPages: 10 };
const Pi = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Ft = (e) => e === "small", Io = ({ size: e, image: t, imageAlt: r }) => Ft(e) ? u.default.createElement("div", { className: "image-wrapper" }, u.default.createElement(Ut, { src: t, alt: r, fetchPriority: "high" })) : u.default.createElement(Ut, { src: t, alt: r, fetchPriority: "high" });
Io.propTypes = { size: c().oneOf(["small", "large"]), image: c().string.isRequired, imageAlt: c().string.isRequired };
const Mo = ({ heading: e, citation: t }) => u.default.createElement("div", { className: "citation" }, u.default.createElement("h4", null, e), u.default.createElement("p", null, "— ", t));
Mo.propTypes = { heading: c().string.isRequired, citation: c().string.isRequired };
const Do = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [a, i] = (0, u.useState)(!1), o = `info-layer-${Math.floor(1e5 * Math.random())}`, s = (l) => {
    l.type !== "click" && l.key !== "Enter" && l.key !== " " || (i(!a), et({ ...Pi, text: "Expand ranking", action: a ? "open" : "close", section: r }));
  };
  return u.default.createElement("div", { className: be()("info-layer", { active: a }), "data-testid": "info-layer", id: o }, u.default.createElement("div", { className: "content" }, u.default.createElement("div", { className: be()("header", { closed: Ft(e) && !a }) }, Ft(e) && u.default.createElement("p", { dangerouslySetInnerHTML: at(t) }), !Ft(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: s, className: "btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": o }, u.default.createElement("h4", null, r), u.default.createElement("i", { className: "fas fa-chevron-up" }))), Ft(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: s, className: "btn btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": o }, u.default.createElement("i", { className: "fas fa-chevron-up" })))), !Ft(e) && u.default.createElement("p", { dangerouslySetInnerHTML: at(t) }), n && u.default.createElement("a", { href: n, "aria-label": "Read more", className: "read-more", onClick: () => {
    et({ ...Pi, section: r, text: "read more" });
  } }, "Read more ", u.default.createElement("span", { className: "visually-hidden" }, r), u.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
};
Do.propTypes = { imageSize: c().oneOf(["small", "large"]), body: c().string.isRequired, heading: c().string.isRequired, readMoreLink: c().string };
const Pa = ({ imageSize: e = "large", image: t, imageAlt: r, heading: n, body: a, readMoreLink: i = "", citation: o }) => u.default.createElement("div", { className: be()("card-ranking", { "large-image": e === "large", "small-image": e === "small" }) }, u.default.createElement(Io, { size: e, image: t, imageAlt: r }), Ft(e) && u.default.createElement(Mo, { heading: n, citation: o }), u.default.createElement(Do, { imageSize: e, body: a, heading: n, readMoreLink: i }));
Pa.propTypes = { imageSize: c().oneOf(["small", "large"]).isRequired, image: c().string.isRequired, imageAlt: c().string.isRequired, heading: c().string.isRequired, body: c().string.isRequired, readMoreLink: c().string, citation: c().string };
const rc = kt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, jo = ({ hidePrev: e, hideNext: t, clickPrev: r, clickNext: n }) => u.default.createElement(rc, null, !e && u.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: r, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Previous")), !t && u.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: n, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Next")));
jo.propTypes = { hidePrev: c().bool, hideNext: c().bool, clickPrev: c().func.isRequired, clickNext: c().func.isRequired };
const $o = (0, u.forwardRef)(function(e, t) {
  const { id: r, selected: n, title: a, selectTab: i, leftKeyPressed: o, rightKeyPressed: s, icon: l } = e, d = (0, u.useRef)(null);
  return (0, u.useImperativeHandle)(t, () => ({ focus() {
    d.current.focus();
  }, scrollIntoView() {
    var h, T, k, w, E, A, x;
    const m = ((h = d.current) == null ? void 0 : h.offsetWidth) / 2 + d.current.offsetLeft, f = ((k = (T = d.current) == null ? void 0 : T.offsetParent) == null ? void 0 : k.scrollLeft) + ((E = (w = d.current) == null ? void 0 : w.offsetParent) == null ? void 0 : E.offsetWidth) / 2;
    (x = (A = d.current) == null ? void 0 : A.offsetParent) == null || x.scrollBy({ left: m - f });
  } }), []), u.default.createElement("a", { ref: d, className: "nav-item nav-link " + (n ? "active" : ""), id: r, href: `#nav-${r}`, role: "tab", "aria-controls": `nav-${r}`, "aria-selected": n, onClick: (m) => i(m, r, a), onKeyDown: (m) => {
    m.keyCode === 37 ? (m.preventDefault(), o()) : m.keyCode === 39 && (m.preventDefault(), s());
  }, tabIndex: n ? "" : "-1" }, a, " ", l && u.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }));
});
$o.propTypes = { id: c().string.isRequired, selected: c().bool.isRequired, title: c().string.isRequired, selectTab: c().func.isRequired, leftKeyPressed: c().func.isRequired, rightKeyPressed: c().func.isRequired, icon: c().arrayOf(c().string) };
const Fo = ({ id: e, bgColor: t, selected: r, children: n }) => r && u.default.createElement("div", { className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`, id: `nav-${e}`, role: "tabpanel", "aria-labelledby": `nav-${e}-tab` }, n);
Fo.propTypes = { id: c().string.isRequired, bgColor: c().string, selected: c().bool, children: c().oneOfType([c().array, c().element]) };
const zo = ({ initialTab: e = "", children: t, bgColor: r = "", onTabChange: n = () => {
} }) => {
  const a = u.default.Children.toArray(t), i = (0, u.useRef)(!1), [o, s] = (0, u.useState)(e && e !== "null" ? e : a[0].props.id), l = (0, u.useRef)(null), [d, m] = function() {
    const R = (0, u.useRef)({}), O = (0, u.useCallback)((W) => (de) => {
      R.current[W] = de;
    }, []);
    return [R, O];
  }(), f = (R) => {
    var O;
    n(R), (O = d.current[R]) == null || O.focus(), s(R);
  }, [h, T] = (0, u.useState)(0), [k, w] = (0, u.useState)();
  (0, u.useEffect)(() => {
    const R = () => {
      T(l.current.scrollLeft);
    };
    return l.current.addEventListener("scroll", R), R(), () => {
      l.current && l.current.removeEventListener("scroll", R);
    };
  }, [k]), (0, u.useEffect)(() => {
    const R = () => {
      w(l.current.scrollWidth - l.current.offsetWidth);
    };
    return window.addEventListener("resize", R), R(), () => {
      l.current && window.removeEventListener("resize", R);
    };
  }, []), (0, u.useEffect)(() => {
    var R;
    (R = d.current[o]) == null || R.scrollIntoView();
  }, [o]), (0, u.useEffect)(() => {
    i.current && e && e !== "null" && o !== e && s(e);
  }, [e]), (0, u.useEffect)(() => {
    i.current = !0;
  }, []);
  const E = (R) => {
    et({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: R });
  }, A = a.map((R) => u.default.cloneElement(R, { bgColor: r, selected: o === R.props.id })), x = (R) => {
    const O = l.current, W = O.scrollWidth - O.clientWidth;
    let de = O.scrollLeft + 200 * R;
    de = Math.max(0, Math.min(W, de)), O.scrollTo({ left: de, behavior: "smooth" });
  }, D = (R, O, W) => {
    et({ event: "link", action: "click", name: "onclick", type: "internal link", text: W }), R.preventDefault(), f(O);
  }, P = (R = !0) => {
    const O = a.length, W = R ? 1 : -1, de = a.findIndex((ae) => ae.props.id === o), we = a[(O + de + W) % O].props.id;
    f(we);
  };
  let S = "uds-tabbed-panels";
  return r === "bg-dark" && (S += " uds-tabbed-panels-dark"), u.default.createElement("div", { className: r }, u.default.createElement("nav", { className: S }, u.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: l }, a.map((R, O) => u.default.createElement($o, { ref: m(R.props.id), id: R.props.id, title: R.props.title, selected: o === R.props.id, selectTab: D, key: R.props.id, leftKeyPressed: () => P(!1), rightKeyPressed: () => P(), icon: R.props.icon, index: O }))), u.default.createElement(jo, { hidePrev: h <= 0, hideNext: h >= k, clickPrev: () => {
    x(-1), E("left chevron");
  }, clickNext: () => {
    x(1), E("right chevron");
  } })), u.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, A));
};
zo.propTypes = { initialTab: c().string, children: c().arrayOf(c().element).isRequired, bgColor: c().string, onTabChange: c().func };
const Ia = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, i;
  return u.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${tn(n.containerCssClass)}` }, e && u.default.createElement(Ut, { src: e, alt: t, dataTestId: "testimonial-image", fetchPriority: "high" }), u.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, u.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), u.default.createElement("blockquote", { style: { paddingLeft: 0 } }, r.title && u.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, u.default.createElement("span", { className: tn(n.titleCssClass) }, r.title)), r.content && u.default.createElement("p", { className: tn(n.contentCssClass), "data-testid": "testimonial-content" }, r.content), (!!((a = r.cite) != null && a.name) || !!((i = r.cite) != null && i.description)) && u.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, u.default.createElement("cite", { className: "name" }, r.cite.name), r.cite && u.default.createElement("cite", { className: "description" }, r.cite.description))));
};
Ia.propTypes = { quote: c().shape({ title: c().string, content: c().string, cite: c().shape({ name: c().string, description: c().string }) }).isRequired, imageSource: c().string, imageAltText: c().string, itemStyle: c().shape({ containerCssClass: c().arrayOf(c().string), titleCssClass: c().arrayOf(c().string), contentCssClass: c().arrayOf(c().string) }) };
const nc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, Ma = (e) => {
  const { type: t = "video", url: r = "", vttUrl: n, title: a = "", caption: i, className: o, controls: s = !0 } = e;
  return t === "youtube" ? (({ title: l = "", caption: d, url: m = "", className: f }) => u.default.createElement("div", { className: be()(`uds-video-container ${f}`, { "uds-video-with-caption": d }) }, u.default.createElement("div", { className: "uds-video-player youtube-video" }, u.default.createElement("iframe", { title: l, src: m })), d && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, d))))({ url: r, title: a, caption: i, className: o }) : (({ url: l = "", vttUrl: d, caption: m, title: f = "", className: h, controls: T = !0 }) => {
    const k = (0, u.useRef)(null);
    return u.default.createElement("div", { className: be()(`uds-video-container ${h}`, { "uds-video-with-caption": m }) }, u.default.createElement("div", { className: "uds-video-player" }, u.default.createElement("video", { ref: k, title: f, onClick: () => {
      et({ ...nc, section: f });
    }, playsInline: !0, controls: T || !0 }, u.default.createElement("source", { src: l }), u.default.createElement("track", { src: d, kind: "captions", srcLang: "en", label: "english_captions" }))), m && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, m)));
  })({ url: r, vttUrl: n, title: a, caption: i, className: o, controls: s });
};
Ma.propTypes = { type: c().oneOf(["video", "youtube"]), url: c().string, vttUrl: c().string, title: c().string, className: c().string, caption: c().string, controls: c().bool };
const ac = ((e) => {
  var t = {};
  return Re.d(t, e), t;
})({ default: () => Ms.default }), tt = (e, t, r) => {
  ac.default.render(u.default.createElement(e, t), r);
}, ic = ({ targetSelector: e, props: t }) => tt(Aa, t, document.querySelector(e)), oc = ({ targetSelector: e, props: t }) => tt(Na, t, document.querySelector(e)), sc = ({ targetSelector: e, props: t }) => tt(mn, t, document.querySelector(e)), lc = ({ targetSelector: e, props: t }) => tt(bt, t, document.querySelector(e)), cc = ({ targetSelector: e, props: t }) => tt(hn, t, document.querySelector(e)), uc = ({ targetSelector: e, props: t }) => tt(Or, t, document.querySelector(e)), dc = ({ targetSelector: e, props: t }) => tt(gn, t, document.querySelector(e)), fc = ({ targetSelector: e, props: t }) => tt(La, t, document.querySelector(e)), pc = ({ targetSelector: e, props: t }) => tt(Ut, t, document.querySelector(e)), mc = ({ targetSelector: e, props: t }) => tt(Pa, t, document.querySelector(e)), hc = ({ targetSelector: e, props: t }) => tt(yn, t, document.querySelector(e)), gc = ({ targetSelector: e, props: t }) => tt(Ia, t, document.querySelector(e)), vc = ({ targetSelector: e, props: t }) => tt(Ma, t, document.querySelector(e));
var Ho = or.Zp, yc = or.TR, bc = or.Pb, Da = or.Ur, wc = or._Q;
function ja({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: n = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: n
  };
}
var Uo = { exports: {} }, Un = { exports: {} }, ve = {};
var Ii;
function kc() {
  if (Ii) return ve;
  Ii = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, k = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function D(S) {
    if (typeof S == "object" && S !== null) {
      var R = S.$$typeof;
      switch (R) {
        case t:
          switch (S = S.type, S) {
            case l:
            case d:
            case n:
            case i:
            case a:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case m:
                case k:
                case T:
                case o:
                  return S;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function P(S) {
    return D(S) === d;
  }
  return ve.AsyncMode = l, ve.ConcurrentMode = d, ve.ContextConsumer = s, ve.ContextProvider = o, ve.Element = t, ve.ForwardRef = m, ve.Fragment = n, ve.Lazy = k, ve.Memo = T, ve.Portal = r, ve.Profiler = i, ve.StrictMode = a, ve.Suspense = f, ve.isAsyncMode = function(S) {
    return P(S) || D(S) === l;
  }, ve.isConcurrentMode = P, ve.isContextConsumer = function(S) {
    return D(S) === s;
  }, ve.isContextProvider = function(S) {
    return D(S) === o;
  }, ve.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ve.isForwardRef = function(S) {
    return D(S) === m;
  }, ve.isFragment = function(S) {
    return D(S) === n;
  }, ve.isLazy = function(S) {
    return D(S) === k;
  }, ve.isMemo = function(S) {
    return D(S) === T;
  }, ve.isPortal = function(S) {
    return D(S) === r;
  }, ve.isProfiler = function(S) {
    return D(S) === i;
  }, ve.isStrictMode = function(S) {
    return D(S) === a;
  }, ve.isSuspense = function(S) {
    return D(S) === f;
  }, ve.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === d || S === i || S === a || S === f || S === h || typeof S == "object" && S !== null && (S.$$typeof === k || S.$$typeof === T || S.$$typeof === o || S.$$typeof === s || S.$$typeof === m || S.$$typeof === E || S.$$typeof === A || S.$$typeof === x || S.$$typeof === w);
  }, ve.typeOf = D, ve;
}
var Mi;
function Bo() {
  return Mi || (Mi = 1, Un.exports = kc()), Un.exports;
}
var Bn, Di;
function Ec() {
  if (Di) return Bn;
  Di = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bn = e, Bn;
}
var Wn, ji;
function Sc() {
  if (ji) return Wn;
  ji = 1;
  var e = Ec();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Wn = function() {
    function n(o, s, l, d, m, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, Wn;
}
Uo.exports = Sc()();
var Tc = Uo.exports;
const p = /* @__PURE__ */ xa(Tc);
var Wo = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (i = a(i, n(s)));
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
      var o = "";
      for (var s in i)
        t.call(i, s) && i[s] && (o = a(o, s));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Wo);
var xc = Wo.exports;
const Nr = /* @__PURE__ */ xa(xc), Ac = (e) => (e || []).join(" ");
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function da(e, t) {
  return da = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, da(e, t);
}
function _c() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function an(e, t, r) {
  return _c() ? an = Reflect.construct : an = function(a, i, o) {
    var s = [null];
    s.push.apply(s, i);
    var l = Function.bind.apply(a, s), d = new l();
    return o && da(d, o.prototype), d;
  }, an.apply(null, arguments);
}
function ct(e) {
  return Oc(e) || Nc(e) || Cc(e) || Rc();
}
function Oc(e) {
  if (Array.isArray(e)) return fa(e);
}
function Nc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Cc(e, t) {
  if (e) {
    if (typeof e == "string") return fa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fa(e, t);
  }
}
function fa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Lc = Object.hasOwnProperty, $i = Object.setPrototypeOf, Pc = Object.isFrozen, Ic = Object.getPrototypeOf, Mc = Object.getOwnPropertyDescriptor, Xe = Object.freeze, it = Object.seal, Dc = Object.create, qo = typeof Reflect < "u" && Reflect, bn = qo.apply, pa = qo.construct;
bn || (bn = function(t, r, n) {
  return t.apply(r, n);
});
Xe || (Xe = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
pa || (pa = function(t, r) {
  return an(t, ct(r));
});
var jc = ot(Array.prototype.forEach), Fi = ot(Array.prototype.pop), Sr = ot(Array.prototype.push), on = ot(String.prototype.toLowerCase), qn = ot(String.prototype.toString), zi = ot(String.prototype.match), lt = ot(String.prototype.replace), $c = ot(String.prototype.indexOf), Fc = ot(String.prototype.trim), Be = ot(RegExp.prototype.test), Vn = zc(TypeError);
function ot(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return bn(e, t, n);
  };
}
function zc(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return pa(e, r);
  };
}
function ue(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : on, $i && $i(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var o = r(i);
      o !== i && (Pc(t) || (t[a] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function jt(e) {
  var t = Dc(null), r;
  for (r in e)
    bn(Lc, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function Gr(e, t) {
  for (; e !== null; ) {
    var r = Mc(e, t);
    if (r) {
      if (r.get)
        return ot(r.get);
      if (typeof r.value == "function")
        return ot(r.value);
    }
    e = Ic(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Hi = Xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Yn = Xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Gn = Xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Hc = Xe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Xn = Xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Uc = Xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ui = Xe(["#text"]), Bi = Xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Kn = Xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Wi = Xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xr = Xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bc = it(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Wc = it(/<%[\w\W]*|[\w\W]*%>/gm), qc = it(/\${[\w\W]*}/gm), Vc = it(/^data-[\-\w.\u00B7-\uFFFF]/), Yc = it(/^aria-[\-\w]+$/), Gc = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Xc = it(/^(?:\w+script|data):/i), Kc = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Zc = it(/^html$/i), Qc = it(/^[a-z][.\w]*(-[.\w]+)+$/i), Jc = function() {
  return typeof window > "u" ? null : window;
}, eu = function(t, r) {
  if (_t(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML: function(s) {
        return s;
      },
      createScriptURL: function(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Vo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jc(), t = function(b) {
    return Vo(b);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, o = e.Node, s = e.Element, l = e.NodeFilter, d = e.NamedNodeMap, m = d === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : d, f = e.HTMLFormElement, h = e.DOMParser, T = e.trustedTypes, k = s.prototype, w = Gr(k, "cloneNode"), E = Gr(k, "nextSibling"), A = Gr(k, "childNodes"), x = Gr(k, "parentNode");
  if (typeof i == "function") {
    var D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  var P = eu(T, r), S = P ? P.createHTML("") : "", R = n, O = R.implementation, W = R.createNodeIterator, de = R.createDocumentFragment, we = R.getElementsByTagName, ae = r.importNode, ee = {};
  try {
    ee = jt(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var re = {};
  t.isSupported = typeof x == "function" && O && O.createHTMLDocument !== void 0 && ee !== 9;
  var X = Bc, he = Wc, De = qc, pe = Vc, ke = Yc, qe = Xc, Q = Kc, q = Qc, N = Gc, _ = null, y = ue({}, [].concat(ct(Hi), ct(Yn), ct(Gn), ct(Xn), ct(Ui))), I = null, g = ue({}, [].concat(ct(Bi), ct(Kn), ct(Wi), ct(Xr))), M = Object.seal(Object.create(null, {
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
  })), C = null, ie = null, te = !0, Y = !0, K = !1, ne = !0, fe = !1, oe = !0, se = !1, Z = !1, ce = !1, je = !1, H = !1, $ = !1, V = !0, z = !1, F = "user-content-", le = !0, Te = !1, He = {}, ze = null, Et = ue({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), lr = null, Ir = ue({}, ["audio", "video", "img", "source", "image", "track"]), cr = null, Mr = ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), dt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml", St = st, ur = !1, Pt = null, dr = ue({}, [dt, ft, st], qn), $e, fr = ["application/xhtml+xml", "text/html"], Wt = "text/html", Ce, Tt = null, Cn = n.createElement("form"), Dr = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, pr = function(b) {
    Tt && Tt === b || ((!b || _t(b) !== "object") && (b = {}), b = jt(b), $e = // eslint-disable-next-line unicorn/prefer-includes
    fr.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? $e = Wt : $e = b.PARSER_MEDIA_TYPE, Ce = $e === "application/xhtml+xml" ? qn : on, _ = "ALLOWED_TAGS" in b ? ue({}, b.ALLOWED_TAGS, Ce) : y, I = "ALLOWED_ATTR" in b ? ue({}, b.ALLOWED_ATTR, Ce) : g, Pt = "ALLOWED_NAMESPACES" in b ? ue({}, b.ALLOWED_NAMESPACES, qn) : dr, cr = "ADD_URI_SAFE_ATTR" in b ? ue(
      jt(Mr),
      // eslint-disable-line indent
      b.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ce
      // eslint-disable-line indent
    ) : Mr, lr = "ADD_DATA_URI_TAGS" in b ? ue(
      jt(Ir),
      // eslint-disable-line indent
      b.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ce
      // eslint-disable-line indent
    ) : Ir, ze = "FORBID_CONTENTS" in b ? ue({}, b.FORBID_CONTENTS, Ce) : Et, C = "FORBID_TAGS" in b ? ue({}, b.FORBID_TAGS, Ce) : {}, ie = "FORBID_ATTR" in b ? ue({}, b.FORBID_ATTR, Ce) : {}, He = "USE_PROFILES" in b ? b.USE_PROFILES : !1, te = b.ALLOW_ARIA_ATTR !== !1, Y = b.ALLOW_DATA_ATTR !== !1, K = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = b.SAFE_FOR_TEMPLATES || !1, oe = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, je = b.RETURN_DOM || !1, H = b.RETURN_DOM_FRAGMENT || !1, $ = b.RETURN_TRUSTED_TYPE || !1, ce = b.FORCE_BODY || !1, V = b.SANITIZE_DOM !== !1, z = b.SANITIZE_NAMED_PROPS || !1, le = b.KEEP_CONTENT !== !1, Te = b.IN_PLACE || !1, N = b.ALLOWED_URI_REGEXP || N, St = b.NAMESPACE || st, M = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && Dr(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && Dr(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), fe && (Y = !1), H && (je = !0), He && (_ = ue({}, ct(Ui)), I = [], He.html === !0 && (ue(_, Hi), ue(I, Bi)), He.svg === !0 && (ue(_, Yn), ue(I, Kn), ue(I, Xr)), He.svgFilters === !0 && (ue(_, Gn), ue(I, Kn), ue(I, Xr)), He.mathMl === !0 && (ue(_, Xn), ue(I, Wi), ue(I, Xr))), b.ADD_TAGS && (_ === y && (_ = jt(_)), ue(_, b.ADD_TAGS, Ce)), b.ADD_ATTR && (I === g && (I = jt(I)), ue(I, b.ADD_ATTR, Ce)), b.ADD_URI_SAFE_ATTR && ue(cr, b.ADD_URI_SAFE_ATTR, Ce), b.FORBID_CONTENTS && (ze === Et && (ze = jt(ze)), ue(ze, b.FORBID_CONTENTS, Ce)), le && (_["#text"] = !0), se && ue(_, ["html", "head", "body"]), _.table && (ue(_, ["tbody"]), delete C.tbody), Xe && Xe(b), Tt = b);
  }, mr = ue({}, ["mi", "mo", "mn", "ms", "mtext"]), Ze = ue({}, ["annotation-xml"]), xt = ue({}, ["title", "style", "font", "a", "script"]), xe = ue({}, Yn);
  ue(xe, Gn), ue(xe, Hc);
  var It = ue({}, Xn);
  ue(It, Uc);
  var hr = function(b) {
    var j = x(b);
    (!j || !j.tagName) && (j = {
      namespaceURI: St,
      tagName: "template"
    });
    var B = on(b.tagName), me = on(j.tagName);
    return Pt[b.namespaceURI] ? b.namespaceURI === ft ? j.namespaceURI === st ? B === "svg" : j.namespaceURI === dt ? B === "svg" && (me === "annotation-xml" || mr[me]) : !!xe[B] : b.namespaceURI === dt ? j.namespaceURI === st ? B === "math" : j.namespaceURI === ft ? B === "math" && Ze[me] : !!It[B] : b.namespaceURI === st ? j.namespaceURI === ft && !Ze[me] || j.namespaceURI === dt && !mr[me] ? !1 : !It[B] && (xt[B] || !xe[B]) : !!($e === "application/xhtml+xml" && Pt[b.namespaceURI]) : !1;
  }, Ve = function(b) {
    Sr(t.removed, {
      element: b
    });
    try {
      b.parentNode.removeChild(b);
    } catch {
      try {
        b.outerHTML = S;
      } catch {
        b.remove();
      }
    }
  }, qt = function(b, j) {
    try {
      Sr(t.removed, {
        attribute: j.getAttributeNode(b),
        from: j
      });
    } catch {
      Sr(t.removed, {
        attribute: null,
        from: j
      });
    }
    if (j.removeAttribute(b), b === "is" && !I[b])
      if (je || H)
        try {
          Ve(j);
        } catch {
        }
      else
        try {
          j.setAttribute(b, "");
        } catch {
        }
  }, jr = function(b) {
    var j, B;
    if (ce)
      b = "<remove></remove>" + b;
    else {
      var me = zi(b, /^[\r\n\t ]+/);
      B = me && me[0];
    }
    $e === "application/xhtml+xml" && St === st && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    var Ue = P ? P.createHTML(b) : b;
    if (St === st)
      try {
        j = new h().parseFromString(Ue, $e);
      } catch {
      }
    if (!j || !j.documentElement) {
      j = O.createDocument(St, "template", null);
      try {
        j.documentElement.innerHTML = ur ? S : Ue;
      } catch {
      }
    }
    var _e = j.body || j.documentElement;
    return b && B && _e.insertBefore(n.createTextNode(B), _e.childNodes[0] || null), St === st ? we.call(j, se ? "html" : "body")[0] : se ? j.documentElement : _e;
  }, $r = function(b) {
    return W.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, gr = function(b) {
    return b instanceof f && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof m) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, Mt = function(b) {
    return _t(o) === "object" ? b instanceof o : b && _t(b) === "object" && typeof b.nodeType == "number" && typeof b.nodeName == "string";
  }, Qe = function(b, j, B) {
    re[b] && jc(re[b], function(me) {
      me.call(t, j, B, Tt);
    });
  }, Le = function(b) {
    var j;
    if (Qe("beforeSanitizeElements", b, null), gr(b) || Be(/[\u0080-\uFFFF]/, b.nodeName))
      return Ve(b), !0;
    var B = Ce(b.nodeName);
    if (Qe("uponSanitizeElement", b, {
      tagName: B,
      allowedTags: _
    }), b.hasChildNodes() && !Mt(b.firstElementChild) && (!Mt(b.content) || !Mt(b.content.firstElementChild)) && Be(/<[/\w]/g, b.innerHTML) && Be(/<[/\w]/g, b.textContent) || B === "select" && Be(/<template/i, b.innerHTML) || b.nodeType === 7 || oe && b.nodeType === 8 && Be(/<[/\w]/g, b.data))
      return Ve(b), !0;
    if (!_[B] || C[B]) {
      if (!C[B] && Pe(B) && (M.tagNameCheck instanceof RegExp && Be(M.tagNameCheck, B) || M.tagNameCheck instanceof Function && M.tagNameCheck(B)))
        return !1;
      if (le && !ze[B]) {
        var me = x(b) || b.parentNode, Ue = A(b) || b.childNodes;
        if (Ue && me)
          for (var _e = Ue.length, Ie = _e - 1; Ie >= 0; --Ie) {
            var Ye = w(Ue[Ie], !0);
            Ye.__removalCount = (b.__removalCount || 0) + 1, me.insertBefore(Ye, E(b));
          }
      }
      return Ve(b), !0;
    }
    return b instanceof s && !hr(b) || (B === "noscript" || B === "noembed" || B === "noframes") && Be(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Ve(b), !0) : (fe && b.nodeType === 3 && (j = b.textContent, j = lt(j, X, " "), j = lt(j, he, " "), j = lt(j, De, " "), b.textContent !== j && (Sr(t.removed, {
      element: b.cloneNode()
    }), b.textContent = j)), Qe("afterSanitizeElements", b, null), !1);
  }, vr = function(b, j, B) {
    if (V && (j === "id" || j === "name") && (B in n || B in Cn))
      return !1;
    if (!(Y && !ie[j] && Be(pe, j))) {
      if (!(te && Be(ke, j))) {
        if (!I[j] || ie[j]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Pe(b) && (M.tagNameCheck instanceof RegExp && Be(M.tagNameCheck, b) || M.tagNameCheck instanceof Function && M.tagNameCheck(b)) && (M.attributeNameCheck instanceof RegExp && Be(M.attributeNameCheck, j) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(j)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            j === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && Be(M.tagNameCheck, B) || M.tagNameCheck instanceof Function && M.tagNameCheck(B)))
          ) return !1;
        } else if (!cr[j]) {
          if (!Be(N, lt(B, Q, ""))) {
            if (!((j === "src" || j === "xlink:href" || j === "href") && b !== "script" && $c(B, "data:") === 0 && lr[b])) {
              if (!(K && !Be(qe, lt(B, Q, "")))) {
                if (B)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Pe = function(b) {
    return b !== "annotation-xml" && zi(b, q);
  }, yr = function(b) {
    var j, B, me, Ue;
    Qe("beforeSanitizeAttributes", b, null);
    var _e = b.attributes;
    if (_e) {
      var Ie = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: I
      };
      for (Ue = _e.length; Ue--; ) {
        j = _e[Ue];
        var Ye = j, Oe = Ye.name, Dt = Ye.namespaceURI;
        if (B = Oe === "value" ? j.value : Fc(j.value), me = Ce(Oe), Ie.attrName = me, Ie.attrValue = B, Ie.keepAttr = !0, Ie.forceKeepAttr = void 0, Qe("uponSanitizeAttribute", b, Ie), B = Ie.attrValue, !Ie.forceKeepAttr && (qt(Oe, b), !!Ie.keepAttr)) {
          if (!ne && Be(/\/>/i, B)) {
            qt(Oe, b);
            continue;
          }
          fe && (B = lt(B, X, " "), B = lt(B, he, " "), B = lt(B, De, " "));
          var pt = Ce(b.nodeName);
          if (vr(pt, me, B)) {
            if (z && (me === "id" || me === "name") && (qt(Oe, b), B = F + B), oe && Be(/((--!?|])>)|<\/(style|title)/i, B)) {
              qt(Oe, b);
              continue;
            }
            if (P && _t(T) === "object" && typeof T.getAttributeType == "function" && !Dt)
              switch (T.getAttributeType(pt, me)) {
                case "TrustedHTML": {
                  B = P.createHTML(B);
                  break;
                }
                case "TrustedScriptURL": {
                  B = P.createScriptURL(B);
                  break;
                }
              }
            try {
              Dt ? b.setAttributeNS(Dt, Oe, B) : b.setAttribute(Oe, B), gr(b) ? Ve(b) : Fi(t.removed);
            } catch {
            }
          }
        }
      }
      Qe("afterSanitizeAttributes", b, null);
    }
  }, Ae = function J(b) {
    var j, B = $r(b);
    for (Qe("beforeSanitizeShadowDOM", b, null); j = B.nextNode(); )
      Qe("uponSanitizeShadowNode", j, null), !Le(j) && (j.content instanceof a && J(j.content), yr(j));
    Qe("afterSanitizeShadowDOM", b, null);
  };
  return t.sanitize = function(J) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j, B, me, Ue, _e;
    if (ur = !J, ur && (J = "<!-->"), typeof J != "string" && !Mt(J))
      if (typeof J.toString == "function") {
        if (J = J.toString(), typeof J != "string")
          throw Vn("dirty is not a string, aborting");
      } else
        throw Vn("toString is not a function");
    if (!t.isSupported) {
      if (_t(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof J == "string")
          return e.toStaticHTML(J);
        if (Mt(J))
          return e.toStaticHTML(J.outerHTML);
      }
      return J;
    }
    if (Z || pr(b), t.removed = [], typeof J == "string" && (Te = !1), Te) {
      if (J.nodeName) {
        var Ie = Ce(J.nodeName);
        if (!_[Ie] || C[Ie])
          throw Vn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (J instanceof o)
      j = jr("<!---->"), B = j.ownerDocument.importNode(J, !0), B.nodeType === 1 && B.nodeName === "BODY" || B.nodeName === "HTML" ? j = B : j.appendChild(B);
    else {
      if (!je && !fe && !se && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return P && $ ? P.createHTML(J) : J;
      if (j = jr(J), !j)
        return je ? null : $ ? S : "";
    }
    j && ce && Ve(j.firstChild);
    for (var Ye = $r(Te ? J : j); me = Ye.nextNode(); )
      me.nodeType === 3 && me === Ue || Le(me) || (me.content instanceof a && Ae(me.content), yr(me), Ue = me);
    if (Ue = null, Te)
      return J;
    if (je) {
      if (H)
        for (_e = de.call(j.ownerDocument); j.firstChild; )
          _e.appendChild(j.firstChild);
      else
        _e = j;
      return (I.shadowroot || I.shadowrootmod) && (_e = ae.call(r, _e, !0)), _e;
    }
    var Oe = se ? j.outerHTML : j.innerHTML;
    return se && _["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && Be(Zc, j.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + Oe), fe && (Oe = lt(Oe, X, " "), Oe = lt(Oe, he, " "), Oe = lt(Oe, De, " ")), P && $ ? P.createHTML(Oe) : Oe;
  }, t.setConfig = function(J) {
    pr(J), Z = !0;
  }, t.clearConfig = function() {
    Tt = null, Z = !1;
  }, t.isValidAttribute = function(J, b, j) {
    Tt || pr({});
    var B = Ce(J), me = Ce(b);
    return vr(B, me, j);
  }, t.addHook = function(J, b) {
    typeof b == "function" && (re[J] = re[J] || [], Sr(re[J], b));
  }, t.removeHook = function(J) {
    if (re[J])
      return Fi(re[J]);
  }, t.removeHooks = function(J) {
    re[J] && (re[J] = []);
  }, t.removeAllHooks = function() {
    re = {};
  }, t;
}
var tu = Vo();
const Zt = (e) => ({ __html: tu.sanitize(e) });
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
const ru = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: i = "",
  region: o = "",
  component: s = ""
}) => {
  const { dataLayer: l } = window, d = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: o.toLowerCase(),
    section: a.toLowerCase(),
    text: i.toLowerCase(),
    component: s.toLowerCase()
  };
  l && l.push(d);
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
const Yo = p.shape({
  text: p.string,
  name: p.string,
  event: p.string,
  action: p.string,
  type: p.string,
  region: p.string,
  section: p.string,
  component: p.string
}), nu = "staticMarkup";
function au() {
  const t = Rs().indexOf(nu) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const Jt = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = au(), { onClick: a, ...i } = r.props;
  if (n)
    return ut.cloneElement(r, {
      ...i,
      onClick: (l) => (ru(e), a ? a(l) : !0)
    });
  let o = "";
  ["input", "header", "header-input"].includes(t) && (o = `-${t}`);
  const s = {
    [`data-ga${o}`]: e.text,
    [`data-ga${o}-name`]: e.name,
    [`data-ga${o}-event`]: e.event,
    [`data-ga${o}-action`]: e.action,
    [`data-ga${o}-type`]: e.type,
    [`data-ga${o}-region`]: e.region,
    [`data-ga${o}-section`]: e.section,
    [`data-ga${o}-component`]: e.component
  };
  return ut.cloneElement(r, {
    ...i,
    onClick: a,
    ...s
  });
}, iu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, $a = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: a,
  color: i,
  disabled: o,
  element: s,
  href: l,
  icon: d,
  innerRef: m,
  onClick: f,
  size: h,
  classes: T,
  target: k,
  ...w
}) => {
  const E = Nr("btn", {
    [`btn-${i}`]: !0,
    "btn-md": h === "small",
    "btn-sm": h === "xsmall",
    "btn-block": a,
    disabled: o
  });
  let A = s;
  return l && s === "button" && (A = "a"), /* @__PURE__ */ L.jsx(
    Jt,
    {
      gaData: {
        ...iu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ L.jsxs(
        A,
        {
          type: A === "button" && f ? "button" : void 0,
          ...w,
          className: Nr(T) || E,
          href: l,
          ref: m,
          onClick: f,
          "aria-label": n,
          target: A === "a" ? k : null,
          children: [
            d && /* @__PURE__ */ L.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
$a.propTypes = {
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
  gaData: Yo,
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
$a.defaultProps = {
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
const ou = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Fa = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: i,
  element: o,
  innerRef: s,
  href: l,
  onClick: d,
  ...m
}) => {
  const f = Nr("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: i
  });
  let h = o;
  return l && o === "button" && (h = "a"), /* @__PURE__ */ L.jsx(
    Jt,
    {
      gaData: {
        ...ou,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ L.jsx(
        h,
        {
          type: h === "button" && d ? "button" : void 0,
          ...m,
          className: f,
          href: l,
          ref: s,
          onClick: d,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Fa.propTypes = {
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
  gaData: Yo,
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
Fa.defaultProps = {
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
const Go = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: i,
  fetchPriority: o = "auto",
  width: s,
  height: l,
  cardLink: d,
  title: m,
  caption: f,
  captionTitle: h,
  border: T,
  dropShadow: k
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: o,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Ac(r) },
    ...i && { "data-testid": i },
    ...s && { width: s },
    ...l && { height: l }
  }, E = Nr("uds-img", {
    borderless: !T,
    "uds-img-drop-shadow": k
  }), A = (D) => {
    const P = D ? `${w.className} ${D}` : w.className;
    return d ? /* @__PURE__ */ L.jsxs("a", { href: d, children: [
      /* @__PURE__ */ L.jsx("img", { ...w, className: P }),
      /* @__PURE__ */ L.jsx("span", { className: "visually-hidden", children: m })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ L.jsx("img", { ...w, className: P })
    );
  }, x = () => /* @__PURE__ */ L.jsx("div", { className: E, children: /* @__PURE__ */ L.jsxs("figure", { className: "figure uds-figure", children: [
    A(),
    f && /* @__PURE__ */ L.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      h && /* @__PURE__ */ L.jsx("h3", { children: h }),
      /* @__PURE__ */ L.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Zt(f)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ L.jsx(L.Fragment, { children: f ? x() : A(E) });
};
Go.propTypes = {
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
var za = Bo();
function su(e) {
  function t(N, _, y, I, g) {
    for (var M = 0, C = 0, ie = 0, te = 0, Y, K, ne = 0, fe = 0, oe, se = oe = Y = 0, Z = 0, ce = 0, je = 0, H = 0, $ = y.length, V = $ - 1, z, F = "", le = "", Te = "", He = "", ze; Z < $; ) {
      if (K = y.charCodeAt(Z), Z === V && C + te + ie + M !== 0 && (C !== 0 && (K = C === 47 ? 10 : 47), te = ie = M = 0, $++, V++), C + te + ie + M === 0) {
        if (Z === V && (0 < ce && (F = F.replace(h, "")), 0 < F.trim().length)) {
          switch (K) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              F += y.charAt(Z);
          }
          K = 59;
        }
        switch (K) {
          case 123:
            for (F = F.trim(), Y = F.charCodeAt(0), oe = 1, H = ++Z; Z < $; ) {
              switch (K = y.charCodeAt(Z)) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch (K = y.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = Z + 1; se < V; ++se)
                          switch (y.charCodeAt(se)) {
                            case 47:
                              if (K === 42 && y.charCodeAt(se - 1) === 42 && Z + 2 !== se) {
                                Z = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (K === 47) {
                                Z = se + 1;
                                break e;
                              }
                          }
                        Z = se;
                      }
                  }
                  break;
                case 91:
                  K++;
                case 40:
                  K++;
                case 34:
                case 39:
                  for (; Z++ < V && y.charCodeAt(Z) !== K; )
                    ;
              }
              if (oe === 0) break;
              Z++;
            }
            switch (oe = y.substring(H, Z), Y === 0 && (Y = (F = F.replace(f, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < ce && (F = F.replace(h, "")), K = F.charCodeAt(1), K) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = _;
                    break;
                  default:
                    ce = De;
                }
                if (oe = t(_, ce, oe, K, g + 1), H = oe.length, 0 < ke && (ce = r(De, F, je), ze = s(3, oe, ce, _, re, ee, H, K, g, I), F = ce.join(""), ze !== void 0 && (H = (oe = ze.trim()).length) === 0 && (K = 0, oe = "")), 0 < H) switch (K) {
                  case 115:
                    F = F.replace(R, o);
                  case 100:
                  case 109:
                  case 45:
                    oe = F + "{" + oe + "}";
                    break;
                  case 107:
                    F = F.replace(x, "$1 $2"), oe = F + "{" + oe + "}", oe = he === 1 || he === 2 && i("@" + oe, 3) ? "@-webkit-" + oe + "@" + oe : "@" + oe;
                    break;
                  default:
                    oe = F + oe, I === 112 && (oe = (le += oe, ""));
                }
                else oe = "";
                break;
              default:
                oe = t(_, r(_, F, je), oe, I, g + 1);
            }
            Te += oe, oe = je = ce = se = Y = 0, F = "", K = y.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (F = (0 < ce ? F.replace(h, "") : F).trim(), 1 < (H = F.length)) switch (se === 0 && (Y = F.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (H = (F = F.replace(" ", ":")).length), 0 < ke && (ze = s(1, F, _, N, re, ee, le.length, I, g, I)) !== void 0 && (H = (F = ze.trim()).length) === 0 && (F = "\0\0"), Y = F.charCodeAt(0), K = F.charCodeAt(1), Y) {
              case 0:
                break;
              case 64:
                if (K === 105 || K === 99) {
                  He += F + y.charAt(Z);
                  break;
                }
              default:
                F.charCodeAt(H - 1) !== 58 && (le += a(F, Y, K, F.charCodeAt(2)));
            }
            je = ce = se = Y = 0, F = "", K = y.charCodeAt(++Z);
        }
      }
      switch (K) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + Y === 0 && I !== 107 && 0 < F.length && (ce = 1, F += "\0"), 0 < ke * Q && s(0, F, _, N, re, ee, le.length, I, g, I), ee = 1, re++;
          break;
        case 59:
        case 125:
          if (C + te + ie + M === 0) {
            ee++;
            break;
          }
        default:
          switch (ee++, z = y.charAt(Z), K) {
            case 9:
            case 32:
              if (te + M + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  z = "";
                  break;
                default:
                  K !== 32 && (z = " ");
              }
              break;
            case 0:
              z = "\\0";
              break;
            case 12:
              z = "\\f";
              break;
            case 11:
              z = "\\v";
              break;
            case 38:
              te + C + M === 0 && (ce = je = 1, z = "\f" + z);
              break;
            case 108:
              if (te + C + M + X === 0 && 0 < se) switch (Z - se) {
                case 2:
                  ne === 112 && y.charCodeAt(Z - 3) === 58 && (X = ne);
                case 8:
                  fe === 111 && (X = fe);
              }
              break;
            case 58:
              te + C + M === 0 && (se = Z);
              break;
            case 44:
              C + ie + te + M === 0 && (ce = 1, z += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (te = te === K ? 0 : te === 0 ? K : te);
              break;
            case 91:
              te + C + ie === 0 && M++;
              break;
            case 93:
              te + C + ie === 0 && M--;
              break;
            case 41:
              te + C + M === 0 && ie--;
              break;
            case 40:
              if (te + C + M === 0) {
                if (Y === 0) switch (2 * ne + 3 * fe) {
                  case 533:
                    break;
                  default:
                    Y = 1;
                }
                ie++;
              }
              break;
            case 64:
              C + ie + te + M + se + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + M + ie)) switch (C) {
                case 0:
                  switch (2 * K + 3 * y.charCodeAt(Z + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      H = Z, C = 42;
                  }
                  break;
                case 42:
                  K === 47 && ne === 42 && H + 2 !== Z && (y.charCodeAt(H + 2) === 33 && (le += y.substring(H, Z + 1)), z = "", C = 0);
              }
          }
          C === 0 && (F += z);
      }
      fe = ne, ne = K, Z++;
    }
    if (H = le.length, 0 < H) {
      if (ce = _, 0 < ke && (ze = s(2, le, ce, N, re, ee, H, I, g, I), ze !== void 0 && (le = ze).length === 0)) return He + le + Te;
      if (le = ce.join(",") + "{" + le + "}", he * X !== 0) {
        switch (he !== 2 || i(le, 2) || (X = 0), X) {
          case 111:
            le = le.replace(P, ":-moz-$1") + le;
            break;
          case 112:
            le = le.replace(D, "::-webkit-input-$1") + le.replace(D, "::-moz-$1") + le.replace(D, ":-ms-input-$1") + le;
        }
        X = 0;
      }
    }
    return He + le + Te;
  }
  function r(N, _, y) {
    var I = _.trim().split(E);
    _ = I;
    var g = I.length, M = N.length;
    switch (M) {
      case 0:
      case 1:
        var C = 0;
        for (N = M === 0 ? "" : N[0] + " "; C < g; ++C)
          _[C] = n(N, _[C], y).trim();
        break;
      default:
        var ie = C = 0;
        for (_ = []; C < g; ++C)
          for (var te = 0; te < M; ++te)
            _[ie++] = n(N[te] + " ", I[C], y).trim();
    }
    return _;
  }
  function n(N, _, y) {
    var I = _.charCodeAt(0);
    switch (33 > I && (I = (_ = _.trim()).charCodeAt(0)), I) {
      case 38:
        return _.replace(A, "$1" + N.trim());
      case 58:
        return N.trim() + _.replace(A, "$1" + N.trim());
      default:
        if (0 < 1 * y && 0 < _.indexOf("\f")) return _.replace(A, (N.charCodeAt(0) === 58 ? "" : "$1") + N.trim());
    }
    return N + _;
  }
  function a(N, _, y, I) {
    var g = N + ";", M = 2 * _ + 3 * y + 4 * I;
    if (M === 944) {
      N = g.indexOf(":", 9) + 1;
      var C = g.substring(N, g.length - 1).trim();
      return C = g.substring(0, N).trim() + C + ";", he === 1 || he === 2 && i(C, 1) ? "-webkit-" + C + C : C;
    }
    if (he === 0 || he === 2 && !i(g, 1)) return g;
    switch (M) {
      case 1015:
        return g.charCodeAt(10) === 97 ? "-webkit-" + g + g : g;
      case 951:
        return g.charCodeAt(3) === 116 ? "-webkit-" + g + g : g;
      case 963:
        return g.charCodeAt(5) === 110 ? "-webkit-" + g + g : g;
      case 1009:
        if (g.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + g + g;
      case 978:
        return "-webkit-" + g + "-moz-" + g + g;
      case 1019:
      case 983:
        return "-webkit-" + g + "-moz-" + g + "-ms-" + g + g;
      case 883:
        if (g.charCodeAt(8) === 45) return "-webkit-" + g + g;
        if (0 < g.indexOf("image-set(", 11)) return g.replace(ae, "$1-webkit-$2") + g;
        break;
      case 932:
        if (g.charCodeAt(4) === 45) switch (g.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + g.replace("-grow", "") + "-webkit-" + g + "-ms-" + g.replace("grow", "positive") + g;
          case 115:
            return "-webkit-" + g + "-ms-" + g.replace("shrink", "negative") + g;
          case 98:
            return "-webkit-" + g + "-ms-" + g.replace("basis", "preferred-size") + g;
        }
        return "-webkit-" + g + "-ms-" + g + g;
      case 964:
        return "-webkit-" + g + "-ms-flex-" + g + g;
      case 1023:
        if (g.charCodeAt(8) !== 99) break;
        return C = g.substring(g.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + g + "-ms-flex-pack" + C + g;
      case 1005:
        return k.test(g) ? g.replace(T, ":-webkit-") + g.replace(T, ":-moz-") + g : g;
      case 1e3:
        switch (C = g.substring(13).trim(), _ = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(_)) {
          case 226:
            C = g.replace(S, "tb");
            break;
          case 232:
            C = g.replace(S, "tb-rl");
            break;
          case 220:
            C = g.replace(S, "lr");
            break;
          default:
            return g;
        }
        return "-webkit-" + g + "-ms-" + C + g;
      case 1017:
        if (g.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (_ = (g = N).length - 10, C = (g.charCodeAt(_) === 33 ? g.substring(0, _) : g).substring(N.indexOf(":", 7) + 1).trim(), M = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            g = g.replace(C, "-webkit-" + C) + ";" + g;
            break;
          case 207:
          case 102:
            g = g.replace(C, "-webkit-" + (102 < M ? "inline-" : "") + "box") + ";" + g.replace(C, "-webkit-" + C) + ";" + g.replace(C, "-ms-" + C + "box") + ";" + g;
        }
        return g + ";";
      case 938:
        if (g.charCodeAt(5) === 45) switch (g.charCodeAt(6)) {
          case 105:
            return C = g.replace("-items", ""), "-webkit-" + g + "-webkit-box-" + C + "-ms-flex-" + C + g;
          case 115:
            return "-webkit-" + g + "-ms-flex-item-" + g.replace(W, "") + g;
          default:
            return "-webkit-" + g + "-ms-flex-line-pack" + g.replace("align-content", "").replace(W, "") + g;
        }
        break;
      case 973:
      case 989:
        if (g.charCodeAt(3) !== 45 || g.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (we.test(N) === !0) return (C = N.substring(N.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(N.replace("stretch", "fill-available"), _, y, I).replace(":fill-available", ":stretch") : g.replace(C, "-webkit-" + C) + g.replace(C, "-moz-" + C.replace("fill-", "")) + g;
        break;
      case 962:
        if (g = "-webkit-" + g + (g.charCodeAt(5) === 102 ? "-ms-" + g : "") + g, y + I === 211 && g.charCodeAt(13) === 105 && 0 < g.indexOf("transform", 10)) return g.substring(0, g.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + g;
    }
    return g;
  }
  function i(N, _) {
    var y = N.indexOf(_ === 1 ? ":" : "{"), I = N.substring(0, _ !== 3 ? y : 10);
    return y = N.substring(y + 1, N.length - 1), qe(_ !== 2 ? I : I.replace(de, "$1"), y, _);
  }
  function o(N, _) {
    var y = a(_, _.charCodeAt(0), _.charCodeAt(1), _.charCodeAt(2));
    return y !== _ + ";" ? y.replace(O, " or ($1)").substring(4) : "(" + _ + ")";
  }
  function s(N, _, y, I, g, M, C, ie, te, Y) {
    for (var K = 0, ne = _, fe; K < ke; ++K)
      switch (fe = pe[K].call(m, N, ne, y, I, g, M, C, ie, te, Y)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = fe;
      }
    if (ne !== _) return ne;
  }
  function l(N) {
    switch (N) {
      case void 0:
      case null:
        ke = pe.length = 0;
        break;
      default:
        if (typeof N == "function") pe[ke++] = N;
        else if (typeof N == "object") for (var _ = 0, y = N.length; _ < y; ++_)
          l(N[_]);
        else Q = !!N | 0;
    }
    return l;
  }
  function d(N) {
    return N = N.prefix, N !== void 0 && (qe = null, N ? typeof N != "function" ? he = 1 : (he = 2, qe = N) : he = 0), d;
  }
  function m(N, _) {
    var y = N;
    if (33 > y.charCodeAt(0) && (y = y.trim()), q = y, y = [q], 0 < ke) {
      var I = s(-1, _, y, y, re, ee, 0, 0, 0, 0);
      I !== void 0 && typeof I == "string" && (_ = I);
    }
    var g = t(De, y, _, 0, 0);
    return 0 < ke && (I = s(-2, g, y, y, re, ee, g.length, 0, 0, 0), I !== void 0 && (g = I)), q = "", X = 0, ee = re = 1, g;
  }
  var f = /^\0+/g, h = /[\0\r\f]/g, T = /: */g, k = /zoo|gra/, w = /([,: ])(transform)/g, E = /,\r+?/g, A = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, D = /::(place)/g, P = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, R = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, W = /-self|flex-/g, de = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, ae = /([^-])(image-set\()/, ee = 1, re = 1, X = 0, he = 1, De = [], pe = [], ke = 0, qe = null, Q = 0, q = "";
  return m.use = l, m.set = d, e !== void 0 && d(e), m;
}
var lu = {
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
function cu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var uu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qi = /* @__PURE__ */ cu(
  function(e) {
    return uu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ha = Bo(), du = {
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
}, fu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, pu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ua = {};
Ua[Ha.ForwardRef] = pu;
Ua[Ha.Memo] = Xo;
function Vi(e) {
  return Ha.isMemo(e) ? Xo : Ua[e.$$typeof] || du;
}
var mu = Object.defineProperty, hu = Object.getOwnPropertyNames, Yi = Object.getOwnPropertySymbols, gu = Object.getOwnPropertyDescriptor, vu = Object.getPrototypeOf, Gi = Object.prototype;
function Ko(e, t, r) {
  if (typeof t != "string") {
    if (Gi) {
      var n = vu(t);
      n && n !== Gi && Ko(e, n, r);
    }
    var a = hu(t);
    Yi && (a = a.concat(Yi(t)));
    for (var i = Vi(e), o = Vi(t), s = 0; s < a.length; ++s) {
      var l = a[s];
      if (!fu[l] && !(r && r[l]) && !(o && o[l]) && !(i && i[l])) {
        var d = gu(t, l);
        try {
          mu(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var yu = Ko;
const bu = /* @__PURE__ */ xa(yu);
var ye = { env: { NODE_ENV: "production" } };
function yt() {
  return (yt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Xi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ma = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !za.typeOf(e);
}, wn = Object.freeze([]), Ct = Object.freeze({});
function Cr(e) {
  return typeof e == "function";
}
function ha(e) {
  return ye.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ba(e) {
  return e && typeof e.styledComponentId == "string";
}
var er = typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_ATTR || ye.env.SC_ATTR) || "data-styled", Wa = typeof window < "u" && "HTMLElement" in window, wu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ye.env.REACT_APP_SC_DISABLE_SPEEDY : ye.env.SC_DISABLE_SPEEDY !== void 0 && ye.env.SC_DISABLE_SPEEDY !== "" ? ye.env.SC_DISABLE_SPEEDY !== "false" && ye.env.SC_DISABLE_SPEEDY : ye.env.NODE_ENV !== "production")), ku = ye.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Eu() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function sr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw ye.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Eu.apply(void 0, [ku[e]].concat(r)).trim());
}
var Su = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, o = i; r >= o; ) (o <<= 1) < 0 && sr(16, "" + r);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(a), this.length = o;
      for (var s = i; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), d = 0, m = n.length; d < m; d++) this.tag.insertRule(l, n[d]) && (this.groupSizes[r]++, l++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var o = a; o < i; o++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), o = i + a, s = i; s < o; s++) n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), sn = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), Ar = 1, Kr = function(e) {
  if (sn.has(e)) return sn.get(e);
  for (; kn.has(Ar); ) Ar++;
  var t = Ar++;
  return ye.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && sr(16, "" + t), sn.set(e, t), kn.set(t, e), t;
}, Tu = function(e) {
  return kn.get(e);
}, xu = function(e, t) {
  t >= Ar && (Ar = t + 1), sn.set(e, t), kn.set(t, e);
}, Au = "style[" + er + '][data-styled-version="5.3.11"]', _u = new RegExp("^" + er + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ou = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++) (n = a[i]) && e.registerName(t, n);
}, Nu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var o = r[a].trim();
    if (o) {
      var s = o.match(_u);
      if (s) {
        var l = 0 | parseInt(s[1], 10), d = s[2];
        l !== 0 && (xu(d, l), Ou(e, d, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(o);
    }
  }
}, Cu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Zo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(s) {
    for (var l = s.childNodes, d = l.length; d >= 0; d--) {
      var m = l[d];
      if (m && m.nodeType === 1 && m.hasAttribute(er)) return m;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(er, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = Cu();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
}, Ru = function() {
  function e(r) {
    var n = this.element = Zo(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, o = 0, s = i.length; o < s; o++) {
        var l = i[o];
        if (l.ownerNode === a) return l;
      }
      sr(17);
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
}(), Lu = function() {
  function e(r) {
    var n = this.element = Zo(r);
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
}(), Pu = function() {
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
}(), Ki = Wa, Iu = { isServer: !Wa, useCSSOMInjection: !wu }, Qo = function() {
  function e(r, n, a) {
    r === void 0 && (r = Ct), n === void 0 && (n = {}), this.options = yt({}, Iu, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Wa && Ki && (Ki = !1, function(i) {
      for (var o = document.querySelectorAll(Au), s = 0, l = o.length; s < l; s++) {
        var d = o[s];
        d && d.getAttribute(er) !== "active" && (Nu(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Kr(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(yt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, o = n.target, r = a ? new Pu(o) : i ? new Ru(o) : new Lu(o), new Su(r)));
    var r, n, a, i, o;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Kr(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Kr(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Kr(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", o = 0; o < a; o++) {
        var s = Tu(o);
        if (s !== void 0) {
          var l = r.names.get(s), d = n.getGroup(o);
          if (l && d && l.size) {
            var m = er + ".g" + o + '[id="' + s + '"]', f = "";
            l !== void 0 && l.forEach(function(h) {
              h.length > 0 && (f += h + ",");
            }), i += "" + d + m + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Mu = /(a)(d)/gi, Zi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ga(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Zi(t % 52) + r;
  return (Zi(t % 52) + r).replace(Mu, "$1-$2");
}
var zt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Jo = function(e) {
  return zt(5381, e);
};
function Du(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Cr(r) && !Ba(r)) return !1;
  }
  return !0;
}
var ju = Jo("5.3.11"), $u = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = ye.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Du(t), this.componentId = r, this.baseHash = zt(ju, r), this.baseStyle = n, Qo.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var o = tr(this.rules, t, r, n).join(""), s = ga(zt(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(a, s)) {
        var l = n(o, "." + s, void 0, a);
        r.insertRules(a, s, l);
      }
      i.push(s), this.staticRulesId = s;
    }
    else {
      for (var d = this.rules.length, m = zt(this.baseHash, n.hash), f = "", h = 0; h < d; h++) {
        var T = this.rules[h];
        if (typeof T == "string") f += T, ye.env.NODE_ENV !== "production" && (m = zt(m, T + h));
        else if (T) {
          var k = tr(T, t, r, n), w = Array.isArray(k) ? k.join("") : k;
          m = zt(m, w + h), f += w;
        }
      }
      if (f) {
        var E = ga(m >>> 0);
        if (!r.hasNameForId(a, E)) {
          var A = n(f, "." + E, void 0, a);
          r.insertRules(a, E, A);
        }
        i.push(E);
      }
    }
    return i.join(" ");
  }, e;
}(), Fu = /^\s*\/\/.*$/gm, zu = [":", "[", ".", "#"];
function Hu(e) {
  var t, r, n, a, i = Ct, o = i.options, s = o === void 0 ? Ct : o, l = i.plugins, d = l === void 0 ? wn : l, m = new su(s), f = [], h = /* @__PURE__ */ function(w) {
    function E(A) {
      if (A) try {
        w(A + "}");
      } catch {
      }
    }
    return function(A, x, D, P, S, R, O, W, de, we) {
      switch (A) {
        case 1:
          if (de === 0 && x.charCodeAt(0) === 64) return w(x + ";"), "";
          break;
        case 2:
          if (W === 0) return x + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return w(D[0] + x), "";
            default:
              return x + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(E);
      }
    };
  }(function(w) {
    f.push(w);
  }), T = function(w, E, A) {
    return E === 0 && zu.indexOf(A[r.length]) !== -1 || A.match(a) ? w : "." + t;
  };
  function k(w, E, A, x) {
    x === void 0 && (x = "&");
    var D = w.replace(Fu, ""), P = E && A ? A + " " + E + " { " + D + " }" : D;
    return t = x, r = E, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), m(A || !E ? "" : E, P);
  }
  return m.use([].concat(d, [function(w, E, A) {
    w === 2 && A.length && A[0].lastIndexOf(r) > 0 && (A[0] = A[0].replace(n, T));
  }, h, function(w) {
    if (w === -2) {
      var E = f;
      return f = [], E;
    }
  }])), k.hash = d.length ? d.reduce(function(w, E) {
    return E.name || sr(15), zt(w, E.name);
  }, 5381).toString() : "", k;
}
var es = ut.createContext();
es.Consumer;
var ts = ut.createContext(), Uu = (ts.Consumer, new Qo()), va = Hu();
function Bu() {
  return ir(es) || Uu;
}
function Wu() {
  return ir(ts) || va;
}
var qu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = va);
      var o = n.name + i.hash;
      a.hasNameForId(n.id, o) || a.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return sr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = va), this.name + t.hash;
  }, e;
}(), Vu = /([A-Z])/, Yu = /([A-Z])/g, Gu = /^ms-/, Xu = function(e) {
  return "-" + e.toLowerCase();
};
function Qi(e) {
  return Vu.test(e) ? e.replace(Yu, Xu).replace(Gu, "-ms-") : e;
}
var Ji = function(e) {
  return e == null || e === !1 || e === "";
};
function tr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], o = 0, s = e.length; o < s; o += 1) (a = tr(e[o], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (Ji(e)) return "";
  if (Ba(e)) return "." + e.styledComponentId;
  if (Cr(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var l = e(t);
    return ye.env.NODE_ENV !== "production" && za.isElement(l) && console.warn(ha(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), tr(l, t, r, n);
  }
  var d;
  return e instanceof qu ? r ? (e.inject(r, n), e.getName(n)) : e : ma(e) ? function m(f, h) {
    var T, k, w = [];
    for (var E in f) f.hasOwnProperty(E) && !Ji(f[E]) && (Array.isArray(f[E]) && f[E].isCss || Cr(f[E]) ? w.push(Qi(E) + ":", f[E], ";") : ma(f[E]) ? w.push.apply(w, m(f[E], E)) : w.push(Qi(E) + ": " + (T = E, (k = f[E]) == null || typeof k == "boolean" || k === "" ? "" : typeof k != "number" || k === 0 || T in lu || T.startsWith("--") ? String(k).trim() : k + "px") + ";"));
    return h ? [h + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var eo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ku(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Cr(e) || ma(e) ? eo(tr(Xi(wn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : eo(tr(Xi(e, r)));
}
var to = /invalid hook call/i, Zr = /* @__PURE__ */ new Set(), Zu = function(e, t) {
  if (ye.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (to.test(i)) a = !1, Zr.delete(r);
        else {
          for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) s[l - 1] = arguments[l];
          n.apply(void 0, [i].concat(s));
        }
      }, Ls(), a && !Zr.has(r) && (console.warn(r), Zr.add(r));
    } catch (i) {
      to.test(i.message) && Zr.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Qu = function(e, t, r) {
  return r === void 0 && (r = Ct), e.theme !== r.theme && e.theme || t || r.theme;
}, Ju = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ed = /(^-|-$)/g;
function Zn(e) {
  return e.replace(Ju, "-").replace(ed, "");
}
var td = function(e) {
  return ga(Jo(e) >>> 0);
};
function Qr(e) {
  return typeof e == "string" && (ye.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ya = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, rd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function nd(e, t, r) {
  var n = e[r];
  ya(t) && ya(n) ? rs(n, t) : e[r] = t;
}
function rs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    if (ya(o)) for (var s in o) rd(s) && nd(e, o[s], s);
  }
  return e;
}
var ns = ut.createContext();
ns.Consumer;
var Qn = {};
function as(e, t, r) {
  var n = Ba(e), a = !Qr(e), i = t.attrs, o = i === void 0 ? wn : i, s = t.componentId, l = s === void 0 ? function(x, D) {
    var P = typeof x != "string" ? "sc" : Zn(x);
    Qn[P] = (Qn[P] || 0) + 1;
    var S = P + "-" + td("5.3.11" + P + Qn[P]);
    return D ? D + "-" + S : S;
  }(t.displayName, t.parentComponentId) : s, d = t.displayName, m = d === void 0 ? function(x) {
    return Qr(x) ? "styled." + x : "Styled(" + ha(x) + ")";
  }(e) : d, f = t.displayName && t.componentId ? Zn(t.displayName) + "-" + t.componentId : t.componentId || l, h = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, T = t.shouldForwardProp;
  n && e.shouldForwardProp && (T = t.shouldForwardProp ? function(x, D, P) {
    return e.shouldForwardProp(x, D, P) && t.shouldForwardProp(x, D, P);
  } : e.shouldForwardProp);
  var k, w = new $u(r, f, n ? e.componentStyle : void 0), E = w.isStatic && o.length === 0, A = function(x, D) {
    return function(P, S, R, O) {
      var W = P.attrs, de = P.componentStyle, we = P.defaultProps, ae = P.foldedComponentIds, ee = P.shouldForwardProp, re = P.styledComponentId, X = P.target, he = function(I, g, M) {
        I === void 0 && (I = Ct);
        var C = yt({}, g, { theme: I }), ie = {};
        return M.forEach(function(te) {
          var Y, K, ne, fe = te;
          for (Y in Cr(fe) && (fe = fe(C)), fe) C[Y] = ie[Y] = Y === "className" ? (K = ie[Y], ne = fe[Y], K && ne ? K + " " + ne : K || ne) : fe[Y];
        }), [C, ie];
      }(Qu(S, ir(ns), we) || Ct, S, W), De = he[0], pe = he[1], ke = function(I, g, M, C) {
        var ie = Bu(), te = Wu(), Y = g ? I.generateAndInjectStyles(Ct, ie, te) : I.generateAndInjectStyles(M, ie, te);
        return ye.env.NODE_ENV !== "production" && !g && C && C(Y), Y;
      }(de, O, De, ye.env.NODE_ENV !== "production" ? P.warnTooManyClasses : void 0), qe = R, Q = pe.$as || S.$as || pe.as || S.as || X, q = Qr(Q), N = pe !== S ? yt({}, S, {}, pe) : S, _ = {};
      for (var y in N) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? _.as = N[y] : (ee ? ee(y, qi, Q) : !q || qi(y)) && (_[y] = N[y]));
      return S.style && pe.style !== S.style && (_.style = yt({}, S.style, {}, pe.style)), _.className = Array.prototype.concat(ae, re, ke !== re ? ke : null, S.className, pe.className).filter(Boolean).join(" "), _.ref = qe, Ps(Q, _);
    }(k, x, D, E);
  };
  return A.displayName = m, (k = ut.forwardRef(A)).attrs = h, k.componentStyle = w, k.displayName = m, k.shouldForwardProp = T, k.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : wn, k.styledComponentId = f, k.target = n ? e.target : e, k.withComponent = function(x) {
    var D = t.componentId, P = function(R, O) {
      if (R == null) return {};
      var W, de, we = {}, ae = Object.keys(R);
      for (de = 0; de < ae.length; de++) W = ae[de], O.indexOf(W) >= 0 || (we[W] = R[W]);
      return we;
    }(t, ["componentId"]), S = D && D + "-" + (Qr(x) ? x : Zn(ha(x)));
    return as(x, yt({}, P, { attrs: h, componentId: S }), r);
  }, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? rs({}, e.defaultProps, x) : x;
  } }), ye.env.NODE_ENV !== "production" && (Zu(m, f), k.warnTooManyClasses = /* @__PURE__ */ function(x, D) {
    var P = {}, S = !1;
    return function(R) {
      if (!S && (P[R] = !0, Object.keys(P).length >= 200)) {
        var O = D ? ' with the id of "' + D + '"' : "";
        console.warn("Over 200 classes were generated for component " + x + O + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, P = {};
      }
    };
  }(m, f)), Object.defineProperty(k, "toString", { value: function() {
    return "." + k.styledComponentId;
  } }), a && bu(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), k;
}
var rr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Ct), !za.isValidElementType(n)) return sr(1, String(n));
    var i = function() {
      return r(n, a, Ku.apply(void 0, arguments));
    };
    return i.withConfig = function(o) {
      return t(r, n, yt({}, a, {}, o));
    }, i.attrs = function(o) {
      return t(r, n, yt({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, i;
  }(as, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rr[e] = rr(e);
});
ye.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ye.env.NODE_ENV !== "production" && ye.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const ad = rr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, id = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), od = (e) => !e.startsWith("https://") && !e.startsWith("http://") && id(e) ? `mailto:${e}` : e, sd = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ot = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: o,
  body: s,
  eventFormat: l,
  eventLocation: d,
  eventTime: m,
  buttons: f,
  linkLabel: h,
  linkUrl: T,
  tags: k,
  showBorders: w,
  cardLink: E
}) => /* @__PURE__ */ L.jsx(
  qa,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: i,
    icon: o,
    body: s,
    eventFormat: l,
    eventLocation: d,
    eventTime: m,
    buttons: f,
    linkLabel: h,
    linkUrl: T,
    tags: k,
    showBorders: w,
    cardLink: E
  }
);
Ot.propTypes = {
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
Ot.defaultProps = {
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
const qa = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: o,
  body: s,
  eventFormat: l,
  eventLocation: d,
  eventTime: m,
  buttons: f,
  linkLabel: h,
  linkUrl: T,
  tags: k,
  showBorders: w,
  cardLink: E
}) => {
  const A = Nr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ L.jsx(L.Fragment, { children: /* @__PURE__ */ L.jsxs(ad, { className: A, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ L.jsx(
      Go,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: E,
        title: i
      }
    ),
    !n && o && /* @__PURE__ */ L.jsx(
      "i",
      {
        className: `${o == null ? void 0 : o[0]} fa-${o == null ? void 0 : o[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ L.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ L.jsx(
      En,
      {
        type: e,
        body: s,
        eventFormat: l,
        eventLocation: d,
        eventTime: m,
        title: i,
        buttons: f,
        linkLabel: h,
        linkUrl: T,
        tags: k,
        cardLink: E
      }
    ) }) : /* @__PURE__ */ L.jsx(
      En,
      {
        type: e,
        body: s,
        eventFormat: l,
        eventLocation: d,
        eventTime: m,
        title: i,
        buttons: f,
        linkLabel: h,
        linkUrl: T,
        tags: k,
        cardLink: E
      }
    )
  ] }) });
};
qa.propTypes = {
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
qa.defaultProps = {
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
const En = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: i,
  buttons: o,
  linkLabel: s,
  linkUrl: l,
  tags: d,
  cardLink: m
}) => /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
  !!i && /* @__PURE__ */ L.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ L.jsx("h3", { className: "card-title", children: m ? /* @__PURE__ */ L.jsx("a", { href: m, children: i }) : i }) }),
  !!t && /* @__PURE__ */ L.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ L.jsx("div", { dangerouslySetInnerHTML: Zt(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ L.jsx(
    Va,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  o && /* @__PURE__ */ L.jsx("div", { className: "card-buttons", children: o.map((f) => /* @__PURE__ */ L.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ L.jsx(
        $a,
        {
          ariaLabel: f.ariaLabel,
          color: f.color,
          icon: f.icon,
          href: f.href,
          label: f.label,
          onClick: f.onClick,
          size: f.size,
          target: f.target,
          cardTitle: i
        }
      )
    },
    `${f.label}-${f.href}`
  )) }),
  l && s && /* @__PURE__ */ L.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ L.jsx(
    Jt,
    {
      gaData: {
        ...sd,
        section: i,
        text: s
      },
      children: /* @__PURE__ */ L.jsx("a", { href: od(l), children: s })
    }
  ) }),
  d && /* @__PURE__ */ L.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: d.map((f) => (
    // @ts-ignore
    /* @__PURE__ */ L.jsx(
      Fa,
      {
        ariaLabel: f.ariaLabel,
        color: f.color,
        href: f.href,
        label: f.label,
        onClick: f.onClick,
        cardTitle: i
      },
      `${f.label}-${f.href}`
    )
  )) })
] });
En.propTypes = {
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
En.defaultProps = {
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
const Va = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ L.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ L.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ L.jsx("div", { children: /* @__PURE__ */ L.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ L.jsx("div", { dangerouslySetInnerHTML: Zt(t) })
  ] }),
  r && /* @__PURE__ */ L.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ L.jsx("div", { children: /* @__PURE__ */ L.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ L.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Zt(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
  t && /* @__PURE__ */ L.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ L.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ L.jsx("div", { children: /* @__PURE__ */ L.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ L.jsx("div", { dangerouslySetInnerHTML: Zt(t) })
  ] }) }),
  r && /* @__PURE__ */ L.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ L.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ L.jsx("div", { children: /* @__PURE__ */ L.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ L.jsx("span", { children: /* @__PURE__ */ L.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Zt(r)
      }
    ) })
  ] }) })
] });
Va.propTypes = {
  eventFormat: p.oneOf(["stack", "inline"]),
  eventLocation: p.string,
  eventTime: p.string
};
Va.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const ld = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, is = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ L.jsx(
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
is.propTypes = {
  children: p.oneOfType([
    p.element,
    p.arrayOf(p.element)
  ]).isRequired
};
const os = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ L.jsx(Jt, { gaData: ld, children: /* @__PURE__ */ L.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ L.jsx(is, { children: t });
};
os.propTypes = {
  buttonCount: p.number.isRequired
};
p.arrayOf(p.string).isRequired, p.func;
const ss = ({ onClick: e = () => null }) => /* @__PURE__ */ L.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ L.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
ss.propTypes = {
  onClick: p.func
};
const ls = ({ onClick: e = () => null }) => /* @__PURE__ */ L.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ L.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
ls.propTypes = {
  onClick: p.func
};
const ro = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, cs = ({ children: e = null }) => /* @__PURE__ */ L.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
cs.propTypes = {
  children: p.arrayOf(p.element)
};
const us = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ L.jsxs(cs, { children: [
  /* @__PURE__ */ L.jsx(Jt, { gaData: { ...ro, text: "left chevron" }, children: /* @__PURE__ */ L.jsx(ls, { onClick: e }) }),
  t,
  /* @__PURE__ */ L.jsx(Jt, { gaData: { ...ro, text: "right chevron" }, children: /* @__PURE__ */ L.jsx(ss, { onClick: e }) })
] });
us.propTypes = {
  children: p.element,
  onClick: p.func
};
const ds = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ L.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ L.jsx("ul", { className: "glide__slides", children: t });
};
ds.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: p.arrayOf(p.object)
};
function no(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? no(Object(r), !0).forEach(function(n) {
      ud(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ln(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ln = function(t) {
    return typeof t;
  } : ln = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
function _n(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function On(e, t, r) {
  return t && cd(e.prototype, t), e;
}
function ud(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function dd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && ba(e, t);
}
function nr(e) {
  return nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nr(e);
}
function ba(e, t) {
  return ba = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, ba(e, t);
}
function fd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function md(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pd(e);
}
function hd(e) {
  var t = fd();
  return function() {
    var n = nr(e), a;
    if (t) {
      var i = nr(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return md(this, a);
  };
}
function gd(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = nr(e), e !== null); )
    ;
  return e;
}
function cn() {
  return typeof Reflect < "u" && Reflect.get ? cn = Reflect.get : cn = function(t, r, n) {
    var a = gd(t, r);
    if (a) {
      var i = Object.getOwnPropertyDescriptor(a, r);
      return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
    }
  }, cn.apply(this, arguments);
}
var vd = {
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
function wt(e) {
  console.error("[Glide warn]: ".concat(e));
}
function We(e) {
  return parseInt(e);
}
function yd(e) {
  return parseFloat(e);
}
function wa(e) {
  return typeof e == "string";
}
function ar(e) {
  var t = ln(e);
  return t === "function" || t === "object" && !!e;
}
function Sn(e) {
  return typeof e == "function";
}
function fs(e) {
  return typeof e > "u";
}
function ka(e) {
  return e.constructor === Array;
}
function bd(e, t, r) {
  var n = {};
  for (var a in t)
    Sn(t[a]) ? n[a] = t[a](e, n, r) : wt("Extension must be a function");
  for (var i in n)
    Sn(n[i].mount) && n[i].mount();
  return n;
}
function Se(e, t, r) {
  Object.defineProperty(e, t, r);
}
function wd(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Ea(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = ao(ao({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var kd = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _n(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return On(e, [{
    key: "on",
    value: function(r, n) {
      if (ka(r)) {
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
      if (ka(r)) {
        for (var a = 0; a < r.length; a++)
          this.emit(r[a], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(i) {
        i(n || {});
      });
    }
  }]), e;
}(), Ed = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _n(this, e), this._c = {}, this._t = [], this._e = new kd(), this.disabled = !1, this.selector = t, this.settings = Ea(vd, r), this.index = this.settings.startAt;
  }
  return On(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), ar(r) ? this._c = bd(this, r, this._e) : wt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return ka(r) ? this._t = r : wt("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Ea(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
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
      ar(r) ? this._o = r : wt("Options must be an `object` instance.");
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
      this._i = We(r);
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
function Sd(e, t, r) {
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
      var m = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = d, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        m.isStart() && r.emit("run.start", m.move), m.isEnd() && r.emit("run.end", m.move), m.isOffset() && (m._o = !1, r.emit("run.offset", m.move)), r.emit("run.after", m.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var d = this.move, m = this.length, f = d.steps, h = d.direction, T = 1;
      if (h === "=") {
        if (e.settings.bound && We(f) > m) {
          e.index = m;
          return;
        }
        e.index = f;
        return;
      }
      if (h === ">" && f === ">") {
        e.index = m;
        return;
      }
      if (h === "<" && f === "<") {
        e.index = 0;
        return;
      }
      if (h === "|" && (T = e.settings.perView || 1), h === ">" || h === "|" && f === ">") {
        var k = a(T);
        k > m && (this._o = !0), e.index = i(k, T);
        return;
      }
      if (h === "<" || h === "|" && f === "<") {
        var w = o(T);
        w < 0 && (this._o = !0), e.index = s(w, T);
        return;
      }
      wt("Invalid direction pattern [".concat(h).concat(f, "] has been used"));
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
  function a(l) {
    var d = e.index;
    return e.isType("carousel") ? d + l : d + (l - d % l);
  }
  function i(l, d) {
    var m = n.length;
    return l <= m ? l : e.isType("carousel") ? l - (m + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? m : 0 : n.isBound() ? m : Math.floor(m / d) * d;
  }
  function o(l) {
    var d = e.index;
    if (e.isType("carousel"))
      return d - l;
    var m = Math.ceil(d / l);
    return (m - 1) * l;
  }
  function s(l, d) {
    var m = n.length;
    return l >= 0 ? l : e.isType("carousel") ? l + (m + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? m : Math.floor(m / d) * d : 0;
  }
  return Se(n, "move", {
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
      var m = d.substr(1);
      this._m = {
        direction: d.substr(0, 1),
        steps: m ? We(m) ? We(m) : m : 0
      };
    }
  }), Se(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var d = e.settings, m = t.Html.slides.length;
      return this.isBound() ? m - 1 - (We(d.perView) - 1) + We(d.focusAt) : m - 1;
    }
  }), Se(n, "offset", {
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
function io() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Nn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, i, o, s = 0, l = function() {
    s = r.leading === !1 ? 0 : io(), n = null, o = e.apply(a, i), n || (a = i = null);
  }, d = function() {
    var f = io();
    !s && r.leading === !1 && (s = f);
    var h = t - (f - s);
    return a = this, i = arguments, h <= 0 || h > t ? (n && (clearTimeout(n), n = null), s = f, o = e.apply(a, i), n || (a = i = null)) : !n && r.trailing !== !1 && (n = setTimeout(l, h)), o;
  };
  return d.cancel = function() {
    clearTimeout(n), s = 0, n = a = i = null;
  }, d;
}
var Jr = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Td(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(i) {
      for (var o = 0, s = i.length; o < s; o++) {
        var l = i[o].style, d = t.Direction.value;
        o !== 0 ? l[Jr[d][0]] = "".concat(this.value / 2, "px") : l[Jr[d][0]] = "", o !== i.length - 1 ? l[Jr[d][1]] = "".concat(this.value / 2, "px") : l[Jr[d][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(i) {
      for (var o = 0, s = i.length; o < s; o++) {
        var l = i[o].style;
        l.marginLeft = "", l.marginRight = "";
      }
    }
  };
  return Se(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return We(e.settings.gap);
    }
  }), Se(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), Se(n, "reductor", {
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
  }), r.on(["build.after", "update"], Nn(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function ps(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Sa(e) {
  return Array.prototype.slice.call(e);
}
var xd = '[data-glide-el="track"]';
function Ad(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(xd), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Sa(this.wrapper.children).filter(function(i) {
        return !i.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Se(n, "root", {
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
      wa(i) && (i = document.querySelector(i)), i !== null ? n._r = i : wt("Root element must be a existing Html node");
    }
  }), Se(n, "track", {
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
  }), Se(n, "wrapper", {
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
function _d(e, t, r) {
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
  return Se(n, "value", {
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
      ar(i) ? (i.before = We(i.before), i.after = We(i.after)) : i = We(i), n._v = i;
    }
  }), Se(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var i = n.value, o = e.settings.perView;
      return ar(i) ? i.before / o + i.after / o : i * 2 / o;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Od(e, t, r) {
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
      var i = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = o, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: i.value
        });
      });
    }
  };
  return Se(n, "offset", {
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
      n._o = fs(i) ? 0 : We(i);
    }
  }), Se(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Se(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var i = this.offset, o = this.translate;
      return t.Direction.is("rtl") ? o + i : o - i;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Nd(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var i = "".concat(this.slideWidth, "px"), o = t.Html.slides, s = 0; s < o.length; s++)
        o[s].style.width = i;
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
      for (var i = t.Html.slides, o = 0; o < i.length; o++)
        i[o].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Se(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Se(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Se(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Se(n, "slideWidth", {
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
function Cd(e, t, r) {
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
      var i = e.settings.classes, o = t.Html.slides[e.index];
      o && (o.classList.add(i.slide.active), ps(o).forEach(function(s) {
        s.classList.remove(i.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var i = e.settings.classes, o = i.type, s = i.slide;
      t.Html.root.classList.remove(o[e.settings.type]), t.Html.slides.forEach(function(l) {
        l.classList.remove(s.active);
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
function Rd(e, t, r) {
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
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = t.Html.slides, s = e.settings, l = s.perView, d = s.classes, m = s.cloningRatio;
      if (o.length > 0)
        for (var f = +!!e.settings.peek, h = l + f + Math.round(l / 2), T = o.slice(0, h).reverse(), k = o.slice(h * -1), w = 0; w < Math.max(m, Math.floor(l / o.length)); w++) {
          for (var E = 0; E < T.length; E++) {
            var A = T[E].cloneNode(!0);
            A.classList.add(d.slide.clone), i.push(A);
          }
          for (var x = 0; x < k.length; x++) {
            var D = k[x].cloneNode(!0);
            D.classList.add(d.slide.clone), i.unshift(D);
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
      for (var i = this.items, o = t.Html, s = o.wrapper, l = o.slides, d = Math.floor(i.length / 2), m = i.slice(0, d).reverse(), f = i.slice(d * -1).reverse(), h = "".concat(t.Sizes.slideWidth, "px"), T = 0; T < f.length; T++)
        s.appendChild(f[T]);
      for (var k = 0; k < m.length; k++)
        s.insertBefore(m[k], l[0]);
      for (var w = 0; w < i.length; w++)
        i[w].style.width = h;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var i = this.items, o = 0; o < i.length; o++)
        t.Html.wrapper.removeChild(i[o]);
    }
  };
  return Se(n, "grow", {
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
var Lt = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _n(this, e), this.listeners = t;
  }
  return On(e, [{
    key: "on",
    value: function(r, n, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      wa(r) && (r = [r]);
      for (var o = 0; o < r.length; o++)
        this.listeners[r[o]] = a, n.addEventListener(r[o], this.listeners[r[o]], i);
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
      wa(r) && (r = [r]);
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
function Ld(e, t, r) {
  var n = new Lt(), a = {
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
      n.on("resize", window, Nn(function() {
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
var Pd = ["ltr", "rtl"], Id = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Md(e, t, r) {
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
      var o = i.slice(0, 1);
      return this.is("rtl") ? i.split(o).join(Id[o]) : i;
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
  return Se(n, "value", {
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
      Pd.indexOf(i) > -1 ? n._v = i : wt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Dd(e, t) {
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
function jd(e, t) {
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
function $d(e, t) {
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
function Fd(e, t) {
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
        return ar(a) ? n - a.before : n - a;
      }
      return n;
    }
  };
}
function zd(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = t.Gaps.value, i = t.Sizes.width, o = e.settings.focusAt, s = t.Sizes.slideWidth;
      return o === "center" ? n - (i / 2 - s / 2) : n - s * o - a * o;
    }
  };
}
function Hd(e, t, r) {
  var n = [jd, $d, Fd, zd].concat(e._t, [Dd]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(i) {
      for (var o = 0; o < n.length; o++) {
        var s = n[o];
        Sn(s) && Sn(s().modify) ? i = s(e, t, r).modify(i) : wt("Transformer should be a function that returns an object with `modify()` method");
      }
      return i;
    }
  };
}
function Ud(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var o = Hd(e, t).mutate(i), s = "translate3d(".concat(-1 * o, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = s, t.Html.wrapper.style.webkitTransform = s, t.Html.wrapper.style.transform = s;
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
      var i = t.Sizes.length, o = e.index, s = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (o - s) : (o + s) % i;
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
function Bd(e, t, r) {
  var n = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(o) {
      var s = e.settings;
      return n ? "".concat(o, " 0ms ").concat(s.animationTimingFunc) : "".concat(o, " ").concat(this.duration, "ms ").concat(s.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(o);
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
    after: function(o) {
      setTimeout(function() {
        o();
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
  return Se(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var o = e.settings;
      return e.isType("slider") && t.Run.offset ? o.rewindDuration : o.animationDuration;
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
var ms = !1;
try {
  var oo = Object.defineProperty({}, "passive", {
    get: function() {
      ms = !0;
    }
  });
  window.addEventListener("testPassive", null, oo), window.removeEventListener("testPassive", null, oo);
} catch {
}
var Ta = ms, en = ["touchstart", "mousedown"], so = ["touchmove", "mousemove"], lo = ["touchend", "touchcancel", "mouseup", "mouseleave"], co = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Wd(e, t, r) {
  var n = new Lt(), a = 0, i = 0, o = 0, s = !1, l = Ta ? {
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
    start: function(f) {
      if (!s && !e.disabled) {
        this.disable();
        var h = this.touches(f);
        a = null, i = We(h.pageX), o = We(h.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(f) {
      if (!e.disabled) {
        var h = e.settings, T = h.touchAngle, k = h.touchRatio, w = h.classes, E = this.touches(f), A = We(E.pageX) - i, x = We(E.pageY) - o, D = Math.abs(A << 2), P = Math.abs(x << 2), S = Math.sqrt(D + P), R = Math.sqrt(P);
        if (a = Math.asin(R / S), a * 180 / Math.PI < T)
          f.stopPropagation(), t.Move.make(A * yd(k)), t.Html.root.classList.add(w.dragging), r.emit("swipe.move");
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
    end: function(f) {
      if (!e.disabled) {
        var h = e.settings, T = h.perSwipe, k = h.touchAngle, w = h.classes, E = this.touches(f), A = this.threshold(f), x = E.pageX - i, D = a * 180 / Math.PI;
        this.enable(), x > A && D < k ? t.Run.make(t.Direction.resolve("".concat(T, "<"))) : x < -A && D < k ? t.Run.make(t.Direction.resolve("".concat(T, ">"))) : t.Move.make(), t.Html.root.classList.remove(w.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var f = this, h = e.settings, T = h.swipeThreshold, k = h.dragThreshold;
      T && n.on(en[0], t.Html.wrapper, function(w) {
        f.start(w);
      }, l), k && n.on(en[1], t.Html.wrapper, function(w) {
        f.start(w);
      }, l);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(en[0], t.Html.wrapper, l), n.off(en[1], t.Html.wrapper, l);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var f = this;
      n.on(so, t.Html.wrapper, Nn(function(h) {
        f.move(h);
      }, e.settings.throttle), l);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(so, t.Html.wrapper, l);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var f = this;
      n.on(lo, t.Html.wrapper, function(h) {
        f.end(h);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(lo, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(f) {
      return co.indexOf(f.type) > -1 ? f : f.touches[0] || f.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(f) {
      var h = e.settings;
      return co.indexOf(f.type) > -1 ? h.dragThreshold : h.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return s = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return s = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    d.unbindSwipeStart(), d.unbindSwipeMove(), d.unbindSwipeEnd(), n.destroy();
  }), d;
}
function qd(e, t, r) {
  var n = new Lt(), a = {
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
    dragstart: function(o) {
      o.preventDefault();
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
function Vd(e, t, r) {
  var n = new Lt(), a = !1, i = !1, o = {
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
    click: function(l) {
      i && (l.stopPropagation(), l.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (i = !0, !a) {
        for (var l = 0; l < this.items.length; l++)
          this.items[l].draggable = !1;
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
        for (var l = 0; l < this.items.length; l++)
          this.items[l].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return Se(o, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return o._a;
    }
  }), r.on("swipe.move", function() {
    o.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      o.attach();
    });
  }), r.on("destroy", function() {
    o.attach(), o.unbind(), n.destroy();
  }), o;
}
var Yd = '[data-glide-el="controls[nav]"]', Ya = '[data-glide-el^="controls"]', Gd = "".concat(Ya, ' [data-glide-dir*="<"]'), Xd = "".concat(Ya, ' [data-glide-dir*=">"]');
function Kd(e, t, r) {
  var n = new Lt(), a = Ta ? {
    passive: !0
  } : !1, i = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Yd), this._c = t.Html.root.querySelectorAll(Ya), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Gd),
        next: t.Html.root.querySelectorAll(Xd)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var s = 0; s < this._n.length; s++)
        this.addClass(this._n[s].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var s = 0; s < this._n.length; s++)
        this.removeClass(this._n[s].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(s) {
      var l = e.settings, d = s[e.index];
      d && (d.classList.add(l.classes.nav.active), ps(d).forEach(function(m) {
        m.classList.remove(l.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(s) {
      var l = s[e.index];
      l == null || l.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var s = i._arrowControls.next, l = i._arrowControls.previous;
        this.resetArrowState(s, l), e.index === 0 && this.disableArrow(l), e.index === t.Run.length && this.disableArrow(s);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var s = e.settings, l = arguments.length, d = new Array(l), m = 0; m < l; m++)
        d[m] = arguments[m];
      d.forEach(function(f) {
        Sa(f).forEach(function(h) {
          h.classList.remove(s.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var s = e.settings, l = arguments.length, d = new Array(l), m = 0; m < l; m++)
        d[m] = arguments[m];
      d.forEach(function(f) {
        Sa(f).forEach(function(h) {
          h.classList.add(s.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var s = 0; s < this._c.length; s++)
        this.bind(this._c[s].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var s = 0; s < this._c.length; s++)
        this.unbind(this._c[s].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(s) {
      for (var l = 0; l < s.length; l++)
        n.on("click", s[l], this.click), n.on("touchstart", s[l], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(s) {
      for (var l = 0; l < s.length; l++)
        n.off(["click", "touchstart"], s[l]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(s) {
      !Ta && s.type === "touchstart" && s.preventDefault();
      var l = s.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(l));
    }
  };
  return Se(i, "items", {
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
function Zd(e, t, r) {
  var n = new Lt(), a = {
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
    press: function(o) {
      var s = e.settings.perSwipe, l = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(o.code) && t.Run.make(t.Direction.resolve("".concat(s).concat(l[o.code])));
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
function Qd(e, t, r) {
  var n = new Lt(), a = {
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
      var o = this;
      this._e && (this.enable(), e.settings.autoplay && fs(this._i) && (this._i = setInterval(function() {
        o.stop(), t.Run.make(">"), o.start(), r.emit("autoplay");
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
      var o = this;
      n.on("mouseover", t.Html.root, function() {
        o._e && o.stop();
      }), n.on("mouseout", t.Html.root, function() {
        o._e && o.start();
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
  return Se(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var o = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return We(o || e.settings.autoplay);
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
function uo(e) {
  return ar(e) ? wd(e) : (wt("Breakpoints option must be an object"), {});
}
function Jd(e, t, r) {
  var n = new Lt(), a = e.settings, i = uo(a.breakpoints), o = Object.assign({}, a), s = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(d) {
      if (typeof window.matchMedia < "u") {
        for (var m in d)
          if (d.hasOwnProperty(m) && window.matchMedia("(max-width: ".concat(m, "px)")).matches)
            return d[m];
      }
      return o;
    }
  };
  return Object.assign(a, s.match(i)), n.on("resize", window, Nn(function() {
    e.settings = Ea(a, s.match(i));
  }, e.settings.throttle)), r.on("update", function() {
    i = uo(i), o = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), s;
}
var ef = {
  // Required
  Html: Ad,
  Translate: Ud,
  Transition: Bd,
  Direction: Md,
  Peek: _d,
  Sizes: Nd,
  Gaps: Td,
  Move: Od,
  Clones: Rd,
  Resize: Ld,
  Build: Cd,
  Run: Sd,
  // Optional
  Swipe: Wd,
  Images: qd,
  Anchors: Vd,
  Controls: Kd,
  Keyboard: Zd,
  Autoplay: Qd,
  Breakpoints: Jd
}, tf = /* @__PURE__ */ function(e) {
  dd(r, e);
  var t = hd(r);
  function r() {
    return _n(this, r), t.apply(this, arguments);
  }
  return On(r, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return cn(nr(r.prototype), "mount", this).call(this, Object.assign({}, ef, a));
    }
  }]), r;
}(Ed);
function rf(e) {
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
function nf(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: i, perViewLg: o } = rf(e), s = r ? 24 : 0, l = r ? { before: 48, after: 48 } : 0, d = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: s,
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
    perView: o,
    // Can be overwritten at breakpoints
    peek: d,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: l
      },
      768: {
        // BS4 md
        perView: i,
        peek: l
      },
      992: {
        // BS4 lg
        perView: o,
        peek: l
      },
      1260: {
        // BS4 xl
        perView: o,
        peek: l
      },
      1400: {
        perView: o,
        peek: d
      },
      1920: {
        perView: o,
        peek: d
      }
    }
  };
}
function af(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), i = e.querySelector(".glide__track"), o = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const s = ["slider-start", "slider-mid", "slider-end"], l = "glide__arrow--disabled";
  i == null || i.classList.remove(...s), o == null || o.classList.remove(...s), t === 0 ? (i == null || i.classList.add("slider-start"), o == null || o.classList.add("slider-start"), n.classList.add(l), a.classList.remove(l)) : t >= r - 1 ? (i == null || i.classList.add("slider-end"), o == null || o.classList.add("slider-end"), n.classList.remove(l), a.classList.add(l)) : (i == null || i.classList.add("slider-mid"), o == null || o.classList.add("slider-mid"), n.classList.remove(l), a.classList.remove(l));
}
function of(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, i = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((o, s) => {
    s < a || s > i ? (o.setAttribute("aria-hidden", "true"), o.setAttribute("tabindex", "-1"), o.setAttribute("inert", "")) : (o.setAttribute("aria-hidden", "false"), o.removeAttribute("tabindex"), o.removeAttribute("inert"));
  });
}
function sf({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: i = !0,
  isDraggable: o
}) {
  const s = nf(t, n, i, o), l = new tf(`#${e}`, s);
  let d = document.querySelector(`#${e}`);
  return d.addEventListener("keyup", (m) => {
    const f = m;
    f.keyCode === 39 ? l.go(">") : f.keyCode === 37 ? l.go("<") : f.keyCode === 13 && l.go(document.activeElement.dataset.glideDir);
  }), l.on("build.before", () => {
    d = document.querySelector(`#${e}`), d && d.classList.add("slider-start");
  }), l.on("move", () => {
    if (d = document.querySelector(`#${e}`), !d) return;
    const m = l.index;
    of(d, m, t);
    const f = d.querySelector(".navigation-slider"), h = d.querySelector(".image-navigator-images");
    if (f && h) {
      const T = f.querySelectorAll(
        ".bullet-image-container"
      ), k = f.clientWidth, w = 82, E = T[m], A = h.getBoundingClientRect().x, x = f.getBoundingClientRect().x - A, D = E.getBoundingClientRect().x - A, P = E.getBoundingClientRect().x + E.getBoundingClientRect().width - A;
      if (m === 0 || D <= 0 + w)
        f.style.left = `${x - D + w}px`;
      else if (P >= k - w) {
        const S = P - k;
        f.style.left = `${x - S - w}px`;
      }
    }
    af(d, m, r), d.setAttribute("data-current-index", m), a && a(m);
  }), l.mount(), l;
}
function lf(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const hs = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: i,
  role: o,
  ariaLabelledBy: s,
  isFullWidth: l,
  removeSideBackground: d = !1,
  hasNavButtons: m = !0,
  hasPositionIndicators: f = !0,
  imageAutoSize: h = !0,
  onItemClick: T = () => null,
  hasPeek: k = !0,
  isDraggable: w = !0,
  hasShadow: E = !0
}) => {
  const A = `glide-${Math.ceil(Math.random() * 1e4)}`, x = lf(n.length, e);
  return Lr(() => {
    sf({
      instanceName: A,
      perView: e,
      buttonCount: x,
      isFullWidth: l,
      onItemClick: T,
      hasPeek: k,
      isDraggable: w
    });
  }, [
    A,
    e,
    x,
    l,
    T,
    k,
    w
  ]), /* @__PURE__ */ L.jsxs(
    "div",
    {
      role: o,
      "aria-labelledby": s,
      className: `glide ${a}`,
      id: A,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": d,
      "data-image-auto-size": h,
      "data-has-shadow": E,
      children: [
        /* @__PURE__ */ L.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ L.jsx(ds, { carouselItems: n }) }),
        i ? (
          // @ts-ignore
          /* @__PURE__ */ L.jsx(i, { instanceName: A })
        ) : /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
          f && /* @__PURE__ */ L.jsx(os, { buttonCount: x }),
          m && /* @__PURE__ */ L.jsx(us, {})
        ] })
      ]
    }
  );
};
hs.propTypes = {
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
const cf = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: i,
  eventTime: o,
  buttons: s,
  linkLabel: l,
  linkUrl: d,
  tags: m
}, f, h, T) => {
  var k;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ L.jsx(
      Ot,
      {
        type: f,
        horizontal: h,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: T,
        eventLocation: i,
        eventTime: o,
        buttons: s,
        linkLabel: l,
        linkUrl: d || ((k = s == null ? void 0 : s[0]) == null ? void 0 : k.href),
        tags: m
      }
    )
  };
}, gs = ({
  perView: e = 0,
  cardItems: t,
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: i = void 0,
  maxWidth: o = void 0,
  imageAutoSize: s = !0
}) => {
  const l = parseInt(`${e}`, 10), [d, m] = Is(l), f = 1024, h = 768;
  Lr(() => {
    const w = () => {
      const E = window.innerWidth;
      let A;
      switch (l) {
        case 3:
          E > f ? A = 3 : E > h ? A = 2 : A = 1;
          break;
        case 2:
          A = E < h ? 1 : 2;
          break;
        default:
          A = 1;
          break;
      }
      m(A);
    };
    return w(), window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [l]);
  const T = t.map(
    (w) => cf(w, r, a, n)
  ), k = t.length > d;
  return /* @__PURE__ */ L.jsx(
    hs,
    {
      perView: +d,
      maxWidth: o,
      width: i,
      carouselItems: T,
      cssClass: "aligned-carousel",
      imageAutoSize: s,
      removeSideBackground: t.length <= d,
      hasPositionIndicators: k,
      hasNavButtons: k,
      isDraggable: k,
      hasShadow: !0
    }
  );
};
gs.propTypes = {
  perView: p.string.isRequired,
  cardItems: p.arrayOf(
    p.shape({
      title: p.string.isRequired,
      content: p.string,
      eventLocation: p.string,
      eventTime: p.string,
      image: p.string,
      imageAltText: p.string,
      buttons: Ot.propTypes.buttons,
      linkLabel: p.string,
      linkUrl: p.string,
      tags: Ot.propTypes.tags
    })
  ).isRequired,
  cardType: Ot.propTypes.type,
  cardEventFormat: Ot.propTypes.eventFormat,
  cardHorizontal: Ot.propTypes.horizontal,
  width: p.string,
  maxWidth: p.string,
  imageAutoSize: p.bool
};
const vs = p.shape({
  color: p.oneOf(["white", "dark"]),
  text: p.string
}), ys = p.shape({
  color: p.oneOf(["gold", "maroon", "gray", "dark"]),
  text: p.string
}), bs = p.shape({
  color: p.oneOf(["gold", "maroon", "gray", "dark"]),
  text: p.string,
  size: p.string
}), ws = p.shape({
  url: p.string,
  filters: p.string
});
p.shape({
  header: vs,
  ctaButton: ys,
  dataSource: ws,
  maxItems: p.number
});
const Rr = {
  header: {
    color: "dark",
    text: ""
  },
  ctaButton: {
    color: "gold",
    text: "More stories and videos",
    url: "https://news.asu.edu"
  },
  cardButton: {
    color: "maroon",
    text: "Read at ASU News",
    size: "default"
  },
  dataSource: {
    url: "https://asunow.asu.edu/feeds-json"
  }
}, fo = ["newsUnits", "interests", "audiences", "eventTypes"], uf = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < fo.length; n += 1) {
    const a = fo[n];
    for (let i = 0; i < r.length; i += 1) {
      const o = r[i], l = (e[a] || "").match(new RegExp(o, "gi"));
      if ((l == null ? void 0 : l.length) > 0) return !0;
    }
  }
  return !1;
}, po = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, df = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_url,
  title: po(e.title, 80),
  content: po(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), Bt = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: a
}) => {
  var s;
  const i = (s = n.filters) == null ? void 0 : s.replace(/_/g, " "), o = { ...n, filters: i };
  return /* @__PURE__ */ L.jsx(
    bc,
    {
      renderHeader: t && r ? /* @__PURE__ */ L.jsx(
        wc,
        {
          header: t,
          ctaButton: r,
          defaultProps: Rr
        }
      ) : null,
      renderBody: /* @__PURE__ */ L.jsx(yc, { children: e }),
      dataTransformer: df,
      dataFilter: uf,
      dataSource: o,
      defaultProps: Rr,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Bt.propTypes = {
  header: vs,
  ctaButton: ys,
  dataSource: ws,
  maxItems: p.number,
  children: p.element
};
const ff = rr.section``, pf = (e, t, r) => ({
  id: t,
  imageSource: e.imageUrl,
  imageAltText: e.imageAltText,
  title: e.title,
  content: e.content,
  buttons: [
    {
      ariaLabel: r.text,
      color: r.color,
      label: r.text,
      size: r.size,
      href: e.buttonLink
    }
  ]
}), mf = ({ cardButton: e }) => {
  const { feeds: t } = ir(Da), r = t == null ? void 0 : t.map(
    (n, a) => pf(n, a, e)
  );
  return /* @__PURE__ */ L.jsx(ff, { children: /* @__PURE__ */ L.jsx(
    gs,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, ks = ({ cardButton: e, ...t }) => (Lr(() => {
  typeof window < "u" && ja({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ L.jsx(Bt, { ...t, children: /* @__PURE__ */ L.jsx(
  mf,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
ks.propTypes = Bt.propTypes;
const Es = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), hf = rr.section`
  .c-card {
    height: 100%;
  }
`, gf = (e, t) => /* @__PURE__ */ L.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ L.jsx(
      Ho,
      {
        type: "default",
        eventFormat: "inline",
        eventLocation: e.location,
        clickable: !!e.buttonLink,
        cardLink: e.alias,
        clickHref: e.buttonLink,
        title: e.title,
        body: `<p class="card-text text-dark">${e.content}</p>`,
        image: e.imageUrl,
        imageAltText: e.title,
        linkLabel: e.eventButtonText,
        linkUrl: e.eventButtonUrl || e.buttonLink,
        buttons: [
          {
            ariaLabel: t.text,
            color: t.color,
            label: t.text,
            size: t.size,
            href: e.buttonLink
          }
        ],
        tags: Es(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), vf = ({ cardButton: e }) => {
  const { feeds: t } = ir(Da);
  return /* @__PURE__ */ L.jsx(hf, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ L.jsx(ut.Fragment, { children: gf(r, e) }, n)
  )) });
}, Ss = ({ cardButton: e, ...t }) => (Lr(() => {
  typeof window < "u" && ja({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ L.jsx(Bt, { ...t, children: /* @__PURE__ */ L.jsx(
  vf,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
Ss.propTypes = {
  ...Bt.propTypes,
  cardButton: bs
};
const yf = rr.section``, bf = (e, t) => /* @__PURE__ */ L.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ L.jsx(
  Ho,
  {
    type: "story",
    horizontal: !0,
    eventFormat: "inline",
    eventLocation: e.location,
    clickable: !!e.buttonLink,
    cardLink: e.alias,
    clickHref: e.buttonLink,
    title: e.title,
    body: `<p class="card-text text-dark">${e.content}</p>`,
    image: e.imageUrl,
    imageAltText: e.title,
    linkLabel: e.eventButtonText,
    linkUrl: e.eventButtonUrl || (e == null ? void 0 : e.buttonLink),
    buttons: [
      {
        ariaLabel: t.text,
        color: t.color,
        label: t.text,
        size: t.size,
        href: e.buttonLink
      }
    ],
    tags: Es(e == null ? void 0 : e.interests)
  }
) }, e.id), wf = ({ cardButton: e }) => {
  const { feeds: t } = ir(Da);
  return /* @__PURE__ */ L.jsx(yf, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ L.jsx(ut.Fragment, { children: bf(r, e) }, n)
  )) });
}, Ts = ({ cardButton: e, ...t }) => (Lr(() => {
  typeof window < "u" && ja({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ L.jsx(Bt, { ...t, children: /* @__PURE__ */ L.jsx(
  wf,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
Ts.propTypes = { ...Bt.propTypes, feedCardButtonShape: bs };
var xs, mo = Ds;
xs = mo.createRoot, mo.hydrateRoot;
const Ga = (e, t, r) => {
  xs(r).render(ut.createElement(e, t));
}, Tf = ({ targetSelector: e, props: t }) => {
  Ga(Ss, t, document.querySelector(e));
}, xf = ({ targetSelector: e, props: t }) => {
  Ga(Ts, t, document.querySelector(e));
}, Af = ({ targetSelector: e, props: t }) => {
  Ga(ks, t, document.querySelector(e));
};
export {
  ks as CardCarouselNews,
  Ss as CardGridNews,
  Ts as CardListlNews,
  Af as initCardCarouselNewsComponent,
  Tf as initCardGridNewsComponent,
  xf as initCardListNewsComponent
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
