import * as ot from "react";
import ht, { useContext as kt, useRef as hn, useLayoutEffect as _l, createElement as Pl, useState as Be, useEffect as mt, useMemo as Ri, createContext as Ll, Fragment as _i, createRef as Il } from "react";
import * as Dl from "react-dom";
import Ml from "react-dom";
function Ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pi = { exports: {} }, Cr = {};
var _o;
function $l() {
  if (_o) return Cr;
  _o = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, d, p) {
    var g, m = {}, f = null, E = null;
    p !== void 0 && (f = "" + p), d.key !== void 0 && (f = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (g in d) n.call(d, g) && !o.hasOwnProperty(g) && (m[g] = d[g]);
    if (c && c.defaultProps) for (g in d = c.defaultProps, d) m[g] === void 0 && (m[g] = d[g]);
    return { $$typeof: t, type: c, key: f, ref: E, props: m, _owner: a.current };
  }
  return Cr.Fragment = r, Cr.jsx = s, Cr.jsxs = s, Cr;
}
Pi.exports = $l();
var i = Pi.exports, Ze = { env: { NODE_ENV: "production" } }, Fl = { 651: function(e) {
  e.exports = function() {
    function t(q) {
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function($) {
        return typeof $;
      } : function($) {
        return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
      }, t(q);
    }
    function r(q, $) {
      return r = Object.setPrototypeOf || function(Y, U) {
        return Y.__proto__ = U, Y;
      }, r(q, $);
    }
    function n(q, $, Y) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct : function(U, F, de) {
        var Ae = [null];
        Ae.push.apply(Ae, F);
        var qe = new (Function.bind.apply(U, Ae))();
        return de && r(qe, de.prototype), qe;
      }, n.apply(null, arguments);
    }
    function a(q) {
      return function($) {
        if (Array.isArray($)) return o($);
      }(q) || function($) {
        if (typeof Symbol < "u" && $[Symbol.iterator] != null || $["@@iterator"] != null) return Array.from($);
      }(q) || function($, Y) {
        if ($) {
          if (typeof $ == "string") return o($, Y);
          var U = Object.prototype.toString.call($).slice(8, -1);
          return U === "Object" && $.constructor && (U = $.constructor.name), U === "Map" || U === "Set" ? Array.from($) : U === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U) ? o($, Y) : void 0;
        }
      }(q) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function o(q, $) {
      ($ == null || $ > q.length) && ($ = q.length);
      for (var Y = 0, U = new Array($); Y < $; Y++) U[Y] = q[Y];
      return U;
    }
    var s = Object.hasOwnProperty, c = Object.setPrototypeOf, d = Object.isFrozen, p = Object.getPrototypeOf, g = Object.getOwnPropertyDescriptor, m = Object.freeze, f = Object.seal, E = Object.create, S = typeof Reflect < "u" && Reflect, T = S.apply, k = S.construct;
    T || (T = function(q, $, Y) {
      return q.apply($, Y);
    }), m || (m = function(q) {
      return q;
    }), f || (f = function(q) {
      return q;
    }), k || (k = function(q, $) {
      return n(q, a($));
    });
    var N, A = ne(Array.prototype.forEach), D = ne(Array.prototype.pop), I = ne(Array.prototype.push), v = ne(String.prototype.toLowerCase), _ = ne(String.prototype.toString), j = ne(String.prototype.match), z = ne(String.prototype.replace), ie = ne(String.prototype.indexOf), he = ne(String.prototype.trim), ee = ne(RegExp.prototype.test), Z = (N = TypeError, function() {
      for (var q = arguments.length, $ = new Array(q), Y = 0; Y < q; Y++) $[Y] = arguments[Y];
      return k(N, $);
    });
    function ne(q) {
      return function($) {
        for (var Y = arguments.length, U = new Array(Y > 1 ? Y - 1 : 0), F = 1; F < Y; F++) U[F - 1] = arguments[F];
        return T(q, $, U);
      };
    }
    function G(q, $, Y) {
      var U;
      Y = (U = Y) !== null && U !== void 0 ? U : v, c && c(q, null);
      for (var F = $.length; F--; ) {
        var de = $[F];
        if (typeof de == "string") {
          var Ae = Y(de);
          Ae !== de && (d($) || ($[F] = Ae), de = Ae);
        }
        q[de] = !0;
      }
      return q;
    }
    function ue(q) {
      var $, Y = E(null);
      for ($ in q) T(s, q, [$]) === !0 && (Y[$] = q[$]);
      return Y;
    }
    function Se(q, $) {
      for (; q !== null; ) {
        var Y = g(q, $);
        if (Y) {
          if (Y.get) return ne(Y.get);
          if (typeof Y.value == "function") return ne(Y.value);
        }
        q = p(q);
      }
      return function(U) {
        return console.warn("fallback value for", U), null;
      };
    }
    var se = m(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), be = m(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ee = m(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), J = m(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), H = m(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), R = m(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), C = m(["#text"]), x = m(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), P = m(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), y = m(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), L = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), O = f(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ae = f(/<%[\w\W]*|[\w\W]*%>/gm), re = f(/\${[\w\W]*}/gm), V = f(/^data-[\-\w.\u00B7-\uFFFF]/), K = f(/^aria-[\-\w]+$/), oe = f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), fe = f(/^(?:\w+script|data):/i), le = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), ce = f(/^html$/i), Q = f(/^[a-z][.\w]*(-[.\w]+)+$/i), pe = function() {
      return typeof window > "u" ? null : window;
    }, $e = function q() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pe(), Y = function(b) {
        return q(b);
      };
      if (Y.version = "2.5.6", Y.removed = [], !$ || !$.document || $.document.nodeType !== 9) return Y.isSupported = !1, Y;
      var U = $.document, F = $.document, de = $.DocumentFragment, Ae = $.HTMLTemplateElement, qe = $.Node, He = $.Element, Nt = $.NodeFilter, fr = $.NamedNodeMap, Hr = fr === void 0 ? $.NamedNodeMap || $.MozNamedAttrMap : fr, hr = $.HTMLFormElement, qr = $.DOMParser, gt = $.trustedTypes, yt = He.prototype, ut = Se(yt, "cloneNode"), Ct = Se(yt, "nextSibling"), gr = Se(yt, "childNodes"), $t = Se(yt, "parentNode");
      if (typeof Ae == "function") {
        var yr = F.createElement("template");
        yr.content && yr.content.ownerDocument && (F = yr.content.ownerDocument);
      }
      var Ue = function(b, W) {
        if (t(b) !== "object" || typeof b.createPolicy != "function") return null;
        var X = null, ve = "data-tt-policy-suffix";
        W.currentScript && W.currentScript.hasAttribute(ve) && (X = W.currentScript.getAttribute(ve));
        var ze = "dompurify" + (X ? "#" + X : "");
        try {
          return b.createPolicy(ze, { createHTML: function(Re) {
            return Re;
          }, createScriptURL: function(Re) {
            return Re;
          } });
        } catch {
          return console.warn("TrustedTypes policy " + ze + " could not be created."), null;
        }
      }(gt, U), br = Ue ? Ue.createHTML("") : "", Jt = F, _e = Jt.implementation, Ot = Jt.createNodeIterator, Fn = Jt.createDocumentFragment, Wr = Jt.getElementsByTagName, vr = U.importNode, xr = {};
      try {
        xr = ue(F).documentMode ? F.documentMode : {};
      } catch {
      }
      var Je = {};
      Y.isSupported = typeof $t == "function" && _e && _e.createHTMLDocument !== void 0 && xr !== 9;
      var jt, Ne, Ft = O, wr = ae, Ve = re, Qt = V, Gr = K, Br = fe, Sr = le, Ut = Q, Qe = oe, Le = null, Tr = G({}, [].concat(a(se), a(be), a(Ee), a(H), a(C))), Ie = null, Er = G({}, [].concat(a(x), a(P), a(y), a(L))), Ce = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), te = null, w = null, M = !0, B = !0, ge = !1, We = !0, Oe = !1, De = !0, Ye = !1, je = !1, zt = !1, bt = !1, kr = !1, Vr = !1, ho = !0, go = !1, Un = !0, Ar = !1, er = {}, tr = null, yo = G({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), bo = null, vo = G({}, ["audio", "video", "img", "source", "image", "track"]), zn = null, xo = G({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Yr = "http://www.w3.org/1998/Math/MathML", Kr = "http://www.w3.org/2000/svg", vt = "http://www.w3.org/1999/xhtml", rr = vt, wo = !1, Hn = null, Nl = G({}, [Yr, Kr, vt], _), Cl = ["application/xhtml+xml", "text/html"], nr = null, Ol = F.createElement("form"), So = function(b) {
        return b instanceof RegExp || b instanceof Function;
      }, qn = function(b) {
        nr && nr === b || (b && t(b) === "object" || (b = {}), b = ue(b), jt = jt = Cl.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? "text/html" : b.PARSER_MEDIA_TYPE, Ne = jt === "application/xhtml+xml" ? _ : v, Le = "ALLOWED_TAGS" in b ? G({}, b.ALLOWED_TAGS, Ne) : Tr, Ie = "ALLOWED_ATTR" in b ? G({}, b.ALLOWED_ATTR, Ne) : Er, Hn = "ALLOWED_NAMESPACES" in b ? G({}, b.ALLOWED_NAMESPACES, _) : Nl, zn = "ADD_URI_SAFE_ATTR" in b ? G(ue(xo), b.ADD_URI_SAFE_ATTR, Ne) : xo, bo = "ADD_DATA_URI_TAGS" in b ? G(ue(vo), b.ADD_DATA_URI_TAGS, Ne) : vo, tr = "FORBID_CONTENTS" in b ? G({}, b.FORBID_CONTENTS, Ne) : yo, te = "FORBID_TAGS" in b ? G({}, b.FORBID_TAGS, Ne) : {}, w = "FORBID_ATTR" in b ? G({}, b.FORBID_ATTR, Ne) : {}, er = "USE_PROFILES" in b && b.USE_PROFILES, M = b.ALLOW_ARIA_ATTR !== !1, B = b.ALLOW_DATA_ATTR !== !1, ge = b.ALLOW_UNKNOWN_PROTOCOLS || !1, We = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Oe = b.SAFE_FOR_TEMPLATES || !1, De = b.SAFE_FOR_XML !== !1, Ye = b.WHOLE_DOCUMENT || !1, bt = b.RETURN_DOM || !1, kr = b.RETURN_DOM_FRAGMENT || !1, Vr = b.RETURN_TRUSTED_TYPE || !1, zt = b.FORCE_BODY || !1, ho = b.SANITIZE_DOM !== !1, go = b.SANITIZE_NAMED_PROPS || !1, Un = b.KEEP_CONTENT !== !1, Ar = b.IN_PLACE || !1, Qe = b.ALLOWED_URI_REGEXP || Qe, rr = b.NAMESPACE || vt, Ce = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && So(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ce.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && So(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ce.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Ce.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Oe && (B = !1), kr && (bt = !0), er && (Le = G({}, a(C)), Ie = [], er.html === !0 && (G(Le, se), G(Ie, x)), er.svg === !0 && (G(Le, be), G(Ie, P), G(Ie, L)), er.svgFilters === !0 && (G(Le, Ee), G(Ie, P), G(Ie, L)), er.mathMl === !0 && (G(Le, H), G(Ie, y), G(Ie, L))), b.ADD_TAGS && (Le === Tr && (Le = ue(Le)), G(Le, b.ADD_TAGS, Ne)), b.ADD_ATTR && (Ie === Er && (Ie = ue(Ie)), G(Ie, b.ADD_ATTR, Ne)), b.ADD_URI_SAFE_ATTR && G(zn, b.ADD_URI_SAFE_ATTR, Ne), b.FORBID_CONTENTS && (tr === yo && (tr = ue(tr)), G(tr, b.FORBID_CONTENTS, Ne)), Un && (Le["#text"] = !0), Ye && G(Le, ["html", "head", "body"]), Le.table && (G(Le, ["tbody"]), delete te.tbody), m && m(b), nr = b);
      }, To = G({}, ["mi", "mo", "mn", "ms", "mtext"]), Eo = G({}, ["foreignobject", "annotation-xml"]), jl = G({}, ["title", "style", "font", "a", "script"]), Xr = G({}, be);
      G(Xr, Ee), G(Xr, J);
      var Wn = G({}, H);
      G(Wn, R);
      var at = function(b) {
        I(Y.removed, { element: b });
        try {
          b.parentNode.removeChild(b);
        } catch {
          try {
            b.outerHTML = br;
          } catch {
            b.remove();
          }
        }
      }, Zr = function(b, W) {
        try {
          I(Y.removed, { attribute: W.getAttributeNode(b), from: W });
        } catch {
          I(Y.removed, { attribute: null, from: W });
        }
        if (W.removeAttribute(b), b === "is" && !Ie[b]) if (bt || kr) try {
          at(W);
        } catch {
        }
        else try {
          W.setAttribute(b, "");
        } catch {
        }
      }, ko = function(b) {
        var W, X;
        if (zt) b = "<remove></remove>" + b;
        else {
          var ve = j(b, /^[\r\n\t ]+/);
          X = ve && ve[0];
        }
        jt === "application/xhtml+xml" && rr === vt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
        var ze = Ue ? Ue.createHTML(b) : b;
        if (rr === vt) try {
          W = new qr().parseFromString(ze, jt);
        } catch {
        }
        if (!W || !W.documentElement) {
          W = _e.createDocument(rr, "template", null);
          try {
            W.documentElement.innerHTML = wo ? br : ze;
          } catch {
          }
        }
        var Re = W.body || W.documentElement;
        return b && X && Re.insertBefore(F.createTextNode(X), Re.childNodes[0] || null), rr === vt ? Wr.call(W, Ye ? "html" : "body")[0] : Ye ? W.documentElement : Re;
      }, Ao = function(b) {
        return Ot.call(b.ownerDocument || b, b, Nt.SHOW_ELEMENT | Nt.SHOW_COMMENT | Nt.SHOW_TEXT | Nt.SHOW_PROCESSING_INSTRUCTION | Nt.SHOW_CDATA_SECTION, null, !1);
      }, No = function(b) {
        return b instanceof hr && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof Hr) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
      }, Nr = function(b) {
        return t(qe) === "object" ? b instanceof qe : b && t(b) === "object" && typeof b.nodeType == "number" && typeof b.nodeName == "string";
      }, xt = function(b, W, X) {
        Je[b] && A(Je[b], function(ve) {
          ve.call(Y, W, X, nr);
        });
      }, Co = function(b) {
        var W;
        if (xt("beforeSanitizeElements", b, null), No(b) || ee(/[\u0080-\uFFFF]/, b.nodeName)) return at(b), !0;
        var X = Ne(b.nodeName);
        if (xt("uponSanitizeElement", b, { tagName: X, allowedTags: Le }), b.hasChildNodes() && !Nr(b.firstElementChild) && (!Nr(b.content) || !Nr(b.content.firstElementChild)) && ee(/<[/\w]/g, b.innerHTML) && ee(/<[/\w]/g, b.textContent) || X === "select" && ee(/<template/i, b.innerHTML) || b.nodeType === 7 || De && b.nodeType === 8 && ee(/<[/\w]/g, b.data)) return at(b), !0;
        if (!Le[X] || te[X]) {
          if (!te[X] && jo(X) && (Ce.tagNameCheck instanceof RegExp && ee(Ce.tagNameCheck, X) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(X)))
            return !1;
          if (Un && !tr[X]) {
            var ve = $t(b) || b.parentNode, ze = gr(b) || b.childNodes;
            if (ze && ve) for (var Re = ze.length - 1; Re >= 0; --Re) {
              var Ke = ut(ze[Re], !0);
              Ke.__removalCount = (b.__removalCount || 0) + 1, ve.insertBefore(Ke, Ct(b));
            }
          }
          return at(b), !0;
        }
        return b instanceof He && !function(et) {
          var Me = $t(et);
          Me && Me.tagName || (Me = { namespaceURI: rr, tagName: "template" });
          var ke = v(et.tagName), Rt = v(Me.tagName);
          return !!Hn[et.namespaceURI] && (et.namespaceURI === Kr ? Me.namespaceURI === vt ? ke === "svg" : Me.namespaceURI === Yr ? ke === "svg" && (Rt === "annotation-xml" || To[Rt]) : !!Xr[ke] : et.namespaceURI === Yr ? Me.namespaceURI === vt ? ke === "math" : Me.namespaceURI === Kr ? ke === "math" && Eo[Rt] : !!Wn[ke] : et.namespaceURI === vt ? !(Me.namespaceURI === Kr && !Eo[Rt]) && !(Me.namespaceURI === Yr && !To[Rt]) && !Wn[ke] && (jl[ke] || !Xr[ke]) : !(jt !== "application/xhtml+xml" || !Hn[et.namespaceURI]));
        }(b) ? (at(b), !0) : X !== "noscript" && X !== "noembed" && X !== "noframes" || !ee(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Oe && b.nodeType === 3 && (W = b.textContent, W = z(W, Ft, " "), W = z(W, wr, " "), W = z(W, Ve, " "), b.textContent !== W && (I(Y.removed, { element: b.cloneNode() }), b.textContent = W)), xt("afterSanitizeElements", b, null), !1) : (at(b), !0);
      }, Oo = function(b, W, X) {
        if (ho && (W === "id" || W === "name") && (X in F || X in Ol)) return !1;
        if (!(B && !w[W] && ee(Qt, W))) {
          if (!(M && ee(Gr, W))) {
            if (!Ie[W] || w[W]) {
              if (!(jo(b) && (Ce.tagNameCheck instanceof RegExp && ee(Ce.tagNameCheck, b) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(b)) && (Ce.attributeNameCheck instanceof RegExp && ee(Ce.attributeNameCheck, W) || Ce.attributeNameCheck instanceof Function && Ce.attributeNameCheck(W)) || W === "is" && Ce.allowCustomizedBuiltInElements && (Ce.tagNameCheck instanceof RegExp && ee(Ce.tagNameCheck, X) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(X)))) return !1;
            } else if (!zn[W]) {
              if (!ee(Qe, z(X, Sr, ""))) {
                if ((W !== "src" && W !== "xlink:href" && W !== "href" || b === "script" || ie(X, "data:") !== 0 || !bo[b]) && !(ge && !ee(Br, z(X, Sr, "")))) {
                  if (X) return !1;
                }
              }
            }
          }
        }
        return !0;
      }, jo = function(b) {
        return b !== "annotation-xml" && j(b, Ut);
      }, Ro = function(b) {
        var W, X, ve, ze;
        xt("beforeSanitizeAttributes", b, null);
        var Re = b.attributes;
        if (Re) {
          var Ke = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Ie };
          for (ze = Re.length; ze--; ) {
            var et = W = Re[ze], Me = et.name, ke = et.namespaceURI;
            if (X = Me === "value" ? W.value : he(W.value), ve = Ne(Me), Ke.attrName = ve, Ke.attrValue = X, Ke.keepAttr = !0, Ke.forceKeepAttr = void 0, xt("uponSanitizeAttribute", b, Ke), X = Ke.attrValue, De && ee(/((--!?|])>)|<\/(style|title)/i, X)) Zr(Me, b);
            else if (!Ke.forceKeepAttr && (Zr(Me, b), Ke.keepAttr)) if (We || !ee(/\/>/i, X)) {
              Oe && (X = z(X, Ft, " "), X = z(X, wr, " "), X = z(X, Ve, " "));
              var Rt = Ne(b.nodeName);
              if (Oo(Rt, ve, X)) {
                if (!go || ve !== "id" && ve !== "name" || (Zr(Me, b), X = "user-content-" + X), Ue && t(gt) === "object" && typeof gt.getAttributeType == "function" && !ke) switch (gt.getAttributeType(Rt, ve)) {
                  case "TrustedHTML":
                    X = Ue.createHTML(X);
                    break;
                  case "TrustedScriptURL":
                    X = Ue.createScriptURL(X);
                }
                try {
                  ke ? b.setAttributeNS(ke, Me, X) : b.setAttribute(Me, X), No(b) ? at(b) : D(Y.removed);
                } catch {
                }
              }
            } else Zr(Me, b);
          }
          xt("afterSanitizeAttributes", b, null);
        }
      }, Rl = function b(W) {
        var X, ve = Ao(W);
        for (xt("beforeSanitizeShadowDOM", W, null); X = ve.nextNode(); ) xt("uponSanitizeShadowNode", X, null), Co(X) || (X.content instanceof de && b(X.content), Ro(X));
        xt("afterSanitizeShadowDOM", W, null);
      };
      return Y.sanitize = function(b) {
        var W, X, ve, ze, Re, Ke = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((wo = !b) && (b = "<!-->"), typeof b != "string" && !Nr(b)) {
          if (typeof b.toString != "function") throw Z("toString is not a function");
          if (typeof (b = b.toString()) != "string") throw Z("dirty is not a string, aborting");
        }
        if (!Y.isSupported) {
          if (t($.toStaticHTML) === "object" || typeof $.toStaticHTML == "function") {
            if (typeof b == "string") return $.toStaticHTML(b);
            if (Nr(b)) return $.toStaticHTML(b.outerHTML);
          }
          return b;
        }
        if (je || qn(Ke), Y.removed = [], typeof b == "string" && (Ar = !1), Ar) {
          if (b.nodeName) {
            var et = Ne(b.nodeName);
            if (!Le[et] || te[et]) throw Z("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (b instanceof qe) (X = (W = ko("<!---->")).ownerDocument.importNode(b, !0)).nodeType === 1 && X.nodeName === "BODY" || X.nodeName === "HTML" ? W = X : W.appendChild(X);
        else {
          if (!bt && !Oe && !Ye && b.indexOf("<") === -1) return Ue && Vr ? Ue.createHTML(b) : b;
          if (!(W = ko(b))) return bt ? null : Vr ? br : "";
        }
        W && zt && at(W.firstChild);
        for (var Me = Ao(Ar ? b : W); ve = Me.nextNode(); ) ve.nodeType === 3 && ve === ze || Co(ve) || (ve.content instanceof de && Rl(ve.content), Ro(ve), ze = ve);
        if (ze = null, Ar) return b;
        if (bt) {
          if (kr) for (Re = Fn.call(W.ownerDocument); W.firstChild; ) Re.appendChild(W.firstChild);
          else Re = W;
          return (Ie.shadowroot || Ie.shadowrootmod) && (Re = vr.call(U, Re, !0)), Re;
        }
        var ke = Ye ? W.outerHTML : W.innerHTML;
        return Ye && Le["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && ee(ce, W.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + ke), Oe && (ke = z(ke, Ft, " "), ke = z(ke, wr, " "), ke = z(ke, Ve, " ")), Ue && Vr ? Ue.createHTML(ke) : ke;
      }, Y.setConfig = function(b) {
        qn(b), je = !0;
      }, Y.clearConfig = function() {
        nr = null, je = !1;
      }, Y.isValidAttribute = function(b, W, X) {
        nr || qn({});
        var ve = Ne(b), ze = Ne(W);
        return Oo(ve, ze, X);
      }, Y.addHook = function(b, W) {
        typeof W == "function" && (Je[b] = Je[b] || [], I(Je[b], W));
      }, Y.removeHook = function(b) {
        if (Je[b]) return D(Je[b]);
      }, Y.removeHooks = function(b) {
        Je[b] && (Je[b] = []);
      }, Y.removeAllHooks = function() {
        Je = {};
      }, Y;
    }();
    return $e;
  }();
}, 985: (e, t, r) => {
  var n = r(524), a = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, s = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, c = {};
  function d(T) {
    return n.isMemo(T) ? s : c[T.$$typeof] || a;
  }
  c[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, c[n.Memo] = s;
  var p = Object.defineProperty, g = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, E = Object.getPrototypeOf, S = Object.prototype;
  e.exports = function T(k, N, A) {
    if (typeof N != "string") {
      if (S) {
        var D = E(N);
        D && D !== S && T(k, D, A);
      }
      var I = g(N);
      m && (I = I.concat(m(N)));
      for (var v = d(k), _ = d(N), j = 0; j < I.length; ++j) {
        var z = I[j];
        if (!(o[z] || A && A[z] || _ && _[z] || v && v[z])) {
          var ie = f(N, z);
          try {
            p(k, z, ie);
          } catch {
          }
        }
      }
    }
    return k;
  };
}, 999: (e, t, r) => {
  var n = r(848);
  function a() {
  }
  function o() {
  }
  o.resetWarningCache = a, e.exports = function() {
    function s(p, g, m, f, E, S) {
      if (S !== n) {
        var T = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw T.name = "Invariant Violation", T;
      }
    }
    function c() {
      return s;
    }
    s.isRequired = s;
    var d = { array: s, bigint: s, bool: s, func: s, number: s, object: s, string: s, symbol: s, any: s, arrayOf: c, element: s, elementType: s, instanceOf: c, node: s, objectOf: c, oneOf: c, oneOfType: c, shape: c, exact: c, checkPropTypes: o, resetWarningCache: a };
    return d.PropTypes = d, d;
  };
}, 67: (e, t, r) => {
  e.exports = r(999)();
}, 848: (e) => {
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 320: (e, t) => {
  var r = typeof Symbol == "function" && Symbol.for, n = r ? Symbol.for("react.element") : 60103, a = r ? Symbol.for("react.portal") : 60106, o = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, d = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, g = r ? Symbol.for("react.async_mode") : 60111, m = r ? Symbol.for("react.concurrent_mode") : 60111, f = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, S = r ? Symbol.for("react.suspense_list") : 60120, T = r ? Symbol.for("react.memo") : 60115, k = r ? Symbol.for("react.lazy") : 60116, N = r ? Symbol.for("react.block") : 60121, A = r ? Symbol.for("react.fundamental") : 60117, D = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
  function v(j) {
    if (typeof j == "object" && j !== null) {
      var z = j.$$typeof;
      switch (z) {
        case n:
          switch (j = j.type) {
            case g:
            case m:
            case o:
            case c:
            case s:
            case E:
              return j;
            default:
              switch (j = j && j.$$typeof) {
                case p:
                case f:
                case k:
                case T:
                case d:
                  return j;
                default:
                  return z;
              }
          }
        case a:
          return z;
      }
    }
  }
  function _(j) {
    return v(j) === m;
  }
  t.AsyncMode = g, t.ConcurrentMode = m, t.ContextConsumer = p, t.ContextProvider = d, t.Element = n, t.ForwardRef = f, t.Fragment = o, t.Lazy = k, t.Memo = T, t.Portal = a, t.Profiler = c, t.StrictMode = s, t.Suspense = E, t.isAsyncMode = function(j) {
    return _(j) || v(j) === g;
  }, t.isConcurrentMode = _, t.isContextConsumer = function(j) {
    return v(j) === p;
  }, t.isContextProvider = function(j) {
    return v(j) === d;
  }, t.isElement = function(j) {
    return typeof j == "object" && j !== null && j.$$typeof === n;
  }, t.isForwardRef = function(j) {
    return v(j) === f;
  }, t.isFragment = function(j) {
    return v(j) === o;
  }, t.isLazy = function(j) {
    return v(j) === k;
  }, t.isMemo = function(j) {
    return v(j) === T;
  }, t.isPortal = function(j) {
    return v(j) === a;
  }, t.isProfiler = function(j) {
    return v(j) === c;
  }, t.isStrictMode = function(j) {
    return v(j) === s;
  }, t.isSuspense = function(j) {
    return v(j) === E;
  }, t.isValidElementType = function(j) {
    return typeof j == "string" || typeof j == "function" || j === o || j === m || j === c || j === s || j === E || j === S || typeof j == "object" && j !== null && (j.$$typeof === k || j.$$typeof === T || j.$$typeof === d || j.$$typeof === p || j.$$typeof === f || j.$$typeof === A || j.$$typeof === D || j.$$typeof === I || j.$$typeof === N);
  }, t.typeOf = v;
}, 524: (e, t, r) => {
  e.exports = r(320);
}, 146: (e) => {
  e.exports = function(t, r, n, a) {
    var o = n ? n.call(a, t, r) : void 0;
    if (o !== void 0) return !!o;
    if (t === r) return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r) return !1;
    var s = Object.keys(t), c = Object.keys(r);
    if (s.length !== c.length) return !1;
    for (var d = Object.prototype.hasOwnProperty.bind(r), p = 0; p < s.length; p++) {
      var g = s[p];
      if (!d(g)) return !1;
      var m = t[g], f = r[g];
      if ((o = n ? n.call(a, m, f, g) : void 0) === !1 || o === void 0 && m !== f) return !1;
    }
    return !0;
  };
}, 373: (e, t) => {
  var r;
  (function() {
    var n = {}.hasOwnProperty;
    function a() {
      for (var c = "", d = 0; d < arguments.length; d++) {
        var p = arguments[d];
        p && (c = s(c, o(p)));
      }
      return c;
    }
    function o(c) {
      if (typeof c == "string" || typeof c == "number") return c;
      if (typeof c != "object") return "";
      if (Array.isArray(c)) return a.apply(null, c);
      if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) return c.toString();
      var d = "";
      for (var p in c) n.call(c, p) && c[p] && (d = s(d, p));
      return d;
    }
    function s(c, d) {
      return d ? c ? c + " " + d : c + d : c;
    }
    e.exports ? (a.default = a, e.exports = a) : (r = (function() {
      return a;
    }).apply(t, [])) === void 0 || (e.exports = r);
  })();
} }, Po = {};
function Pe(e) {
  var t = Po[e];
  if (t !== void 0) return t.exports;
  var r = Po[e] = { exports: {} };
  return Fl[e].call(r.exports, r, r.exports, Pe), r.exports;
}
Pe.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return Pe.d(t, { a: t }), t;
}, Pe.d = (e, t) => {
  for (var r in t) Pe.o(t, r) && !Pe.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
}, Pe.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Pe.nc = void 0;
var Mt = {};
Pe.d(Mt, { nD: () => za, n_: () => Wa, n9: () => xn, $n: () => Et, ef: () => wn, fy: () => Dr, Zp: () => Sn, TR: () => Zi, Pb: () => Vi, Ur: () => Bi, _Q: () => Xi, lq: () => Va, _V: () => Kt, dK: () => En, Fx: () => Ya, oz: () => ns, YT: () => as, Gm: () => Ka, Ce: () => Xa, qm: () => Qc, fh: () => Ki, Od: () => Ba, fZ: () => Yi, RE: () => Ga, hZ: () => iu, Nq: () => su, NJ: () => lu, bO: () => cu, oP: () => uu, jl: () => du, PP: () => pu, BB: () => mu, Q9: () => fu, vW: () => gu, VE: () => hu, _v: () => yu, uP: () => bu });
var Ul = Pe(67), l = Pe.n(Ul);
const u = (Lo = { Component: () => ot.Component, createContext: () => ot.createContext, createElement: () => ot.createElement, default: () => ot.default, forwardRef: () => ot.forwardRef, useCallback: () => ot.useCallback, useContext: () => ot.useContext, useEffect: () => ot.useEffect, useImperativeHandle: () => ot.useImperativeHandle, useMemo: () => ot.useMemo, useRef: () => ot.useRef, useState: () => ot.useState }, Gn = {}, Pe.d(Gn, Lo), Gn);
var Lo, Gn;
const Io = (e, t, r) => e ? t : r, ln = (e) => (e || []).join(" ");
var zl = Pe(651);
const it = (e) => ({ __html: (0, zl.sanitize)(e) }), Do = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; ) n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let Mo, Bn = !1;
l().shape({ event: l().string, action: l().string, name: l().string, region: l().string, section: l().string, component: l().string, type: l().string, text: l().string });
const rt = ({ event: e = "", action: t = "", name: r = "", type: n = "", section: a = "", text: o = "", region: s = "", component: c = "" }) => {
  const { dataLayer: d } = window, p = { event: e.toLowerCase(), action: t.toLowerCase(), name: r.toLowerCase(), type: n.toLowerCase(), region: s.toLowerCase(), section: a.toLowerCase(), text: o.toLowerCase(), component: c.toLowerCase() };
  d && d.push(p);
}, Hl = l().shape({ url: l().string, altText: l().string, cssClass: l().arrayOf(l().string), size: l().oneOf(["small", "medium", "large"]) }), Vn = l().shape({ text: l().string, maxWidth: l().string, cssClass: l().arrayOf(l().string), highlightColor: l().oneOf(["gold", "black"]) }), Li = l().shape({ color: l().oneOf(["gold", "maroon", "gray", "dark"]), content: l().shape({ icon: l().string, header: l().string, body: l().string }) });
var ql = Pe(373), we = Pe.n(ql);
const Ii = ({ id: e, item: t, openCard: r, onClick: n }) => {
  var a, o, s, c, d, p;
  return u.default.createElement("div", { className: we()("accordion-item", "mt-3", { [`accordion-item-${t.color}`]: t.color, "accordion-header-icon": (a = t.content) == null ? void 0 : a.icon }) }, u.default.createElement("div", { className: "accordion-header" }, u.default.createElement("h4", null, u.default.createElement("a", { "data-testid": "accordion-opener", className: we()({ collapsed: e !== r }), "data-bs-toggle": "collapse", href: `#card-body-${e}`, role: "button", "aria-expanded": e === r, "aria-controls": `card-body-${e}`, onClick: (g) => {
    var m;
    return n(g, e, (m = t.content) == null ? void 0 : m.header);
  } }, (o = t.content) != null && o.icon ? u.default.createElement("span", { className: "accordion-icon" }, u.default.createElement("i", { className: `${(s = t.content.icon) == null ? void 0 : s[0]} fa-${(c = t.content.icon) == null ? void 0 : c[1]} me-2` }), t.content.header) : (d = t.content) == null ? void 0 : d.header, u.default.createElement("i", { className: "fas fa-chevron-up" })))), ((p = t.content) == null ? void 0 : p.body) && u.default.createElement("div", { id: `card-body-${e}`, className: we()("collapse") }, u.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: it(t.content.body) })));
};
Ii.propTypes = { id: l().number, item: Li, openCard: l().number, onClick: l().func };
const Wl = { event: "collapse", name: "onclick", type: "click", region: "main content" }, za = ({ cards: e, openedCard: t }) => {
  const [r, n] = (0, u.useState)(t), a = (s, c) => {
    rt({ ...Wl, action: c, text: s });
  }, o = (s, c, d) => {
    s.preventDefault(), (r === c || r) && a(e[r - 1].content.header, "close"), r !== c ? (n(c), a(d, "open")) : n(null);
  };
  return u.default.createElement("div", { className: "accordion" }, e == null ? void 0 : e.map((s, c) => s.content.body && s.content.header && u.default.createElement(Ii, { key: c + 1, id: c + 1, item: s, openCard: r, onClick: o })));
};
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dt.apply(null, arguments);
}
za.propTypes = { cards: l().arrayOf(Li).isRequired, openedCard: l().number };
const Gl = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Et = ({ label: e, cardTitle: t, ariaLabel: r, block: n, color: a, disabled: o, element: s, href: c, icon: d, innerRef: p, onClick: g, size: m, classes: f, target: E, ...S }) => {
  const T = we()("btn", { [`btn-${a}`]: !0, "btn-md": m === "small", "btn-sm": m === "xsmall", "btn-block": n, disabled: o });
  let k = s;
  return c && s === "button" && (k = "a"), u.default.createElement(k, Dt({ type: k === "button" && g ? "button" : void 0 }, S, { className: we()(f) || T, href: c, ref: p, onClick: () => (rt({ ...Gl, text: e, section: t }), void (g == null ? void 0 : g())), "aria-label": r, target: k === "a" ? E : null }), d && u.default.createElement("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }), e);
};
Et.propTypes = { label: l().string, cardTitle: l().string, ariaLabel: l().string, block: l().bool, color: l().oneOf(["gold", "maroon", "gray", "dark"]), disabled: l().bool, element: l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func }), l().arrayOf(l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func })]))]), href: l().string, icon: l().arrayOf(l().string), innerRef: l().oneOfType([l().object, l().func, l().string]), onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), classes: l().arrayOf(l().string), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) }, Et.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
var Di = Pe(524), Bl = Pe(146);
Pe.n(Bl);
const Vl = function(e) {
  function t(J, H, R, C, x) {
    for (var P, y, L, O, ae, re = 0, V = 0, K = 0, oe = 0, fe = 0, le = 0, ce = L = P = 0, Q = 0, pe = 0, $e = 0, q = 0, $ = R.length, Y = $ - 1, U = "", F = "", de = "", Ae = ""; Q < $; ) {
      if (y = R.charCodeAt(Q), Q === Y && V + oe + K + re !== 0 && (V !== 0 && (y = V === 47 ? 10 : 47), oe = K = re = 0, $++, Y++), V + oe + K + re === 0) {
        if (Q === Y && (0 < pe && (U = U.replace(m, "")), 0 < U.trim().length)) {
          switch (y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += R.charAt(Q);
          }
          y = 59;
        }
        switch (y) {
          case 123:
            for (P = (U = U.trim()).charCodeAt(0), L = 1, q = ++Q; Q < $; ) {
              switch (y = R.charCodeAt(Q)) {
                case 123:
                  L++;
                  break;
                case 125:
                  L--;
                  break;
                case 47:
                  switch (y = R.charCodeAt(Q + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ce = Q + 1; ce < Y; ++ce) switch (R.charCodeAt(ce)) {
                          case 47:
                            if (y === 42 && R.charCodeAt(ce - 1) === 42 && Q + 2 !== ce) {
                              Q = ce + 1;
                              break e;
                            }
                            break;
                          case 10:
                            if (y === 47) {
                              Q = ce + 1;
                              break e;
                            }
                        }
                        Q = ce;
                      }
                  }
                  break;
                case 91:
                  y++;
                case 40:
                  y++;
                case 34:
                case 39:
                  for (; Q++ < Y && R.charCodeAt(Q) !== y; ) ;
              }
              if (L === 0) break;
              Q++;
            }
            if (L = R.substring(q, Q), P === 0 && (P = (U = U.replace(g, "").trim()).charCodeAt(0)), P === 64) {
              switch (0 < pe && (U = U.replace(m, "")), y = U.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  pe = H;
                  break;
                default:
                  pe = ue;
              }
              if (q = (L = t(H, pe, L, y, x + 1)).length, 0 < se && (ae = c(3, L, pe = r(ue, U, $e), H, Z, ee, q, y, x, C), U = pe.join(""), ae !== void 0 && (q = (L = ae.trim()).length) === 0 && (y = 0, L = "")), 0 < q) switch (y) {
                case 115:
                  U = U.replace(v, s);
                case 100:
                case 109:
                case 45:
                  L = U + "{" + L + "}";
                  break;
                case 107:
                  L = (U = U.replace(N, "$1 $2")) + "{" + L + "}", L = G === 1 || G === 2 && o("@" + L, 3) ? "@-webkit-" + L + "@" + L : "@" + L;
                  break;
                default:
                  L = U + L, C === 112 && (F += L, L = "");
              }
              else L = "";
            } else L = t(H, r(H, U, $e), L, C, x + 1);
            de += L, L = $e = pe = ce = P = 0, U = "", y = R.charCodeAt(++Q);
            break;
          case 125:
          case 59:
            if (1 < (q = (U = (0 < pe ? U.replace(m, "") : U).trim()).length)) switch (ce === 0 && (P = U.charCodeAt(0), P === 45 || 96 < P && 123 > P) && (q = (U = U.replace(" ", ":")).length), 0 < se && (ae = c(1, U, H, J, Z, ee, F.length, C, x, C)) !== void 0 && (q = (U = ae.trim()).length) === 0 && (U = "\0\0"), P = U.charCodeAt(0), y = U.charCodeAt(1), P) {
              case 0:
                break;
              case 64:
                if (y === 105 || y === 99) {
                  Ae += U + R.charAt(Q);
                  break;
                }
              default:
                U.charCodeAt(q - 1) !== 58 && (F += a(U, P, y, U.charCodeAt(2)));
            }
            $e = pe = ce = P = 0, U = "", y = R.charCodeAt(++Q);
        }
      }
      switch (y) {
        case 13:
        case 10:
          V === 47 ? V = 0 : 1 + P === 0 && C !== 107 && 0 < U.length && (pe = 1, U += "\0"), 0 < se * Ee && c(0, U, H, J, Z, ee, F.length, C, x, C), ee = 1, Z++;
          break;
        case 59:
        case 125:
          if (V + oe + K + re === 0) {
            ee++;
            break;
          }
        default:
          switch (ee++, O = R.charAt(Q), y) {
            case 9:
            case 32:
              if (oe + re + V === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  O = "";
                  break;
                default:
                  y !== 32 && (O = " ");
              }
              break;
            case 0:
              O = "\\0";
              break;
            case 12:
              O = "\\f";
              break;
            case 11:
              O = "\\v";
              break;
            case 38:
              oe + V + re === 0 && (pe = $e = 1, O = "\f" + O);
              break;
            case 108:
              if (oe + V + re + ne === 0 && 0 < ce) switch (Q - ce) {
                case 2:
                  fe === 112 && R.charCodeAt(Q - 3) === 58 && (ne = fe);
                case 8:
                  le === 111 && (ne = le);
              }
              break;
            case 58:
              oe + V + re === 0 && (ce = Q);
              break;
            case 44:
              V + K + oe + re === 0 && (pe = 1, O += "\r");
              break;
            case 34:
            case 39:
              V === 0 && (oe = oe === y ? 0 : oe === 0 ? y : oe);
              break;
            case 91:
              oe + V + K === 0 && re++;
              break;
            case 93:
              oe + V + K === 0 && re--;
              break;
            case 41:
              oe + V + re === 0 && K--;
              break;
            case 40:
              oe + V + re === 0 && (P === 0 && (2 * fe + 3 * le == 533 || (P = 1)), K++);
              break;
            case 64:
              V + K + oe + re + ce + L === 0 && (L = 1);
              break;
            case 42:
            case 47:
              if (!(0 < oe + re + K)) switch (V) {
                case 0:
                  switch (2 * y + 3 * R.charCodeAt(Q + 1)) {
                    case 235:
                      V = 47;
                      break;
                    case 220:
                      q = Q, V = 42;
                  }
                  break;
                case 42:
                  y === 47 && fe === 42 && q + 2 !== Q && (R.charCodeAt(q + 2) === 33 && (F += R.substring(q, Q + 1)), O = "", V = 0);
              }
          }
          V === 0 && (U += O);
      }
      le = fe, fe = y, Q++;
    }
    if (0 < (q = F.length)) {
      if (pe = H, 0 < se && (ae = c(2, F, pe, J, Z, ee, q, C, x, C)) !== void 0 && (F = ae).length === 0) return Ae + F + de;
      if (F = pe.join(",") + "{" + F + "}", G * ne != 0) {
        switch (G !== 2 || o(F, 2) || (ne = 0), ne) {
          case 111:
            F = F.replace(D, ":-moz-$1") + F;
            break;
          case 112:
            F = F.replace(A, "::-webkit-input-$1") + F.replace(A, "::-moz-$1") + F.replace(A, ":-ms-input-$1") + F;
        }
        ne = 0;
      }
    }
    return Ae + F + de;
  }
  function r(J, H, R) {
    var C = H.trim().split(T);
    H = C;
    var x = C.length, P = J.length;
    switch (P) {
      case 0:
      case 1:
        var y = 0;
        for (J = P === 0 ? "" : J[0] + " "; y < x; ++y) H[y] = n(J, H[y], R).trim();
        break;
      default:
        var L = y = 0;
        for (H = []; y < x; ++y) for (var O = 0; O < P; ++O) H[L++] = n(J[O] + " ", C[y], R).trim();
    }
    return H;
  }
  function n(J, H, R) {
    var C = H.charCodeAt(0);
    switch (33 > C && (C = (H = H.trim()).charCodeAt(0)), C) {
      case 38:
        return H.replace(k, "$1" + J.trim());
      case 58:
        return J.trim() + H.replace(k, "$1" + J.trim());
      default:
        if (0 < 1 * R && 0 < H.indexOf("\f")) return H.replace(k, (J.charCodeAt(0) === 58 ? "" : "$1") + J.trim());
    }
    return J + H;
  }
  function a(J, H, R, C) {
    var x = J + ";", P = 2 * H + 3 * R + 4 * C;
    if (P === 944) {
      J = x.indexOf(":", 9) + 1;
      var y = x.substring(J, x.length - 1).trim();
      return y = x.substring(0, J).trim() + y + ";", G === 1 || G === 2 && o(y, 1) ? "-webkit-" + y + y : y;
    }
    if (G === 0 || G === 2 && !o(x, 1)) return x;
    switch (P) {
      case 1015:
        return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
      case 951:
        return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
      case 963:
        return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
      case 1009:
        if (x.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + x + x;
      case 978:
        return "-webkit-" + x + "-moz-" + x + x;
      case 1019:
      case 983:
        return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
      case 883:
        if (x.charCodeAt(8) === 45) return "-webkit-" + x + x;
        if (0 < x.indexOf("image-set(", 11)) return x.replace(he, "$1-webkit-$2") + x;
        break;
      case 932:
        if (x.charCodeAt(4) === 45) switch (x.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
          case 115:
            return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
          case 98:
            return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x;
        }
        return "-webkit-" + x + "-ms-" + x + x;
      case 964:
        return "-webkit-" + x + "-ms-flex-" + x + x;
      case 1023:
        if (x.charCodeAt(8) !== 99) break;
        return "-webkit-box-pack" + (y = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + x + "-ms-flex-pack" + y + x;
      case 1005:
        return E.test(x) ? x.replace(f, ":-webkit-") + x.replace(f, ":-moz-") + x : x;
      case 1e3:
        switch (H = (y = x.substring(13).trim()).indexOf("-") + 1, y.charCodeAt(0) + y.charCodeAt(H)) {
          case 226:
            y = x.replace(I, "tb");
            break;
          case 232:
            y = x.replace(I, "tb-rl");
            break;
          case 220:
            y = x.replace(I, "lr");
            break;
          default:
            return x;
        }
        return "-webkit-" + x + "-ms-" + y + x;
      case 1017:
        if (x.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (H = (x = J).length - 10, P = (y = (x.charCodeAt(H) === 33 ? x.substring(0, H) : x).substring(J.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | y.charCodeAt(7))) {
          case 203:
            if (111 > y.charCodeAt(8)) break;
          case 115:
            x = x.replace(y, "-webkit-" + y) + ";" + x;
            break;
          case 207:
          case 102:
            x = x.replace(y, "-webkit-" + (102 < P ? "inline-" : "") + "box") + ";" + x.replace(y, "-webkit-" + y) + ";" + x.replace(y, "-ms-" + y + "box") + ";" + x;
        }
        return x + ";";
      case 938:
        if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
          case 105:
            return y = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + y + "-ms-flex-" + y + x;
          case 115:
            return "-webkit-" + x + "-ms-flex-item-" + x.replace(j, "") + x;
          default:
            return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(j, "") + x;
        }
        break;
      case 973:
      case 989:
        if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ie.test(J) === !0) return (y = J.substring(J.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(J.replace("stretch", "fill-available"), H, R, C).replace(":fill-available", ":stretch") : x.replace(y, "-webkit-" + y) + x.replace(y, "-moz-" + y.replace("fill-", "")) + x;
        break;
      case 962:
        if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, R + C === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + x;
    }
    return x;
  }
  function o(J, H) {
    var R = J.indexOf(H === 1 ? ":" : "{"), C = J.substring(0, H !== 3 ? R : 10);
    return R = J.substring(R + 1, J.length - 1), be(H !== 2 ? C : C.replace(z, "$1"), R, H);
  }
  function s(J, H) {
    var R = a(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return R !== H + ";" ? R.replace(_, " or ($1)").substring(4) : "(" + H + ")";
  }
  function c(J, H, R, C, x, P, y, L, O, ae) {
    for (var re, V = 0, K = H; V < se; ++V) switch (re = Se[V].call(p, J, K, R, C, x, P, y, L, O, ae)) {
      case void 0:
      case !1:
      case !0:
      case null:
        break;
      default:
        K = re;
    }
    if (K !== H) return K;
  }
  function d(J) {
    return (J = J.prefix) !== void 0 && (be = null, J ? typeof J != "function" ? G = 1 : (G = 2, be = J) : G = 0), d;
  }
  function p(J, H) {
    var R = J;
    if (33 > R.charCodeAt(0) && (R = R.trim()), R = [R], 0 < se) {
      var C = c(-1, H, R, R, Z, ee, 0, 0, 0, 0);
      C !== void 0 && typeof C == "string" && (H = C);
    }
    var x = t(ue, R, H, 0, 0);
    return 0 < se && (C = c(-2, x, R, R, Z, ee, x.length, 0, 0, 0)) !== void 0 && (x = C), ne = 0, ee = Z = 1, x;
  }
  var g = /^\0+/g, m = /[\0\r\f]/g, f = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, T = /,\r+?/g, k = /([\t\r\n ])*\f?&/g, N = /@(k\w+)\s*(\S*)\s*/, A = /::(place)/g, D = /:(read-only)/g, I = /[svh]\w+-[tblr]{2}/, v = /\(\s*(.*)\s*\)/g, _ = /([\s\S]*?);/g, j = /-self|flex-/g, z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ie = /stretch|:\s*\w+\-(?:conte|avail)/, he = /([^-])(image-set\()/, ee = 1, Z = 1, ne = 0, G = 1, ue = [], Se = [], se = 0, be = null, Ee = 0;
  return p.use = function J(H) {
    switch (H) {
      case void 0:
      case null:
        se = Se.length = 0;
        break;
      default:
        if (typeof H == "function") Se[se++] = H;
        else if (typeof H == "object") for (var R = 0, C = H.length; R < C; ++R) J(H[R]);
        else Ee = 0 | !!H;
    }
    return J;
  }, p.set = d, e !== void 0 && d(e), p;
}, Yl = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function Kl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $o = Kl(function(e) {
  return Xl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), Zl = Pe(985), Jl = Pe.n(Zl);
function St() {
  return (St = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Fo = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ma = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !(0, Di.typeOf)(e);
}, gn = Object.freeze([]), Pt = Object.freeze({});
function Ir(e) {
  return typeof e == "function";
}
function Uo(e) {
  return e.displayName || e.name || "Component";
}
function Ha(e) {
  return e && typeof e.styledComponentId == "string";
}
var sr = typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_ATTR || Ze.env.SC_ATTR) || "data-styled", qa = typeof window < "u" && "HTMLElement" in window, Ql = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ze.env.REACT_APP_SC_DISABLE_SPEEDY : Ze.env.SC_DISABLE_SPEEDY !== void 0 && Ze.env.SC_DISABLE_SPEEDY !== "" && Ze.env.SC_DISABLE_SPEEDY !== "false" && Ze.env.SC_DISABLE_SPEEDY));
function $r(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var ec = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, s = o; r >= s; ) (s <<= 1) < 0 && $r(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = o; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(r + 1), p = 0, g = n.length; p < g; p++) this.tag.insertRule(d, n[p]) && (this.groupSizes[r]++, d++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), o = a + n;
      this.groupSizes[r] = 0;
      for (var s = a; s < o; s++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], o = this.indexOfGroup(r), s = o + a, c = o; c < s; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), cn = /* @__PURE__ */ new Map(), yn = /* @__PURE__ */ new Map(), _r = 1, Jr = function(e) {
  if (cn.has(e)) return cn.get(e);
  for (; yn.has(_r); ) _r++;
  var t = _r++;
  return cn.set(e, t), yn.set(t, e), t;
}, tc = function(e) {
  return yn.get(e);
}, rc = function(e, t) {
  t >= _r && (_r = t + 1), cn.set(e, t), yn.set(t, e);
}, nc = "style[" + sr + '][data-styled-version="5.3.11"]', ac = new RegExp("^" + sr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), oc = function(e, t, r) {
  for (var n, a = r.split(","), o = 0, s = a.length; o < s; o++) (n = a[o]) && e.registerName(t, n);
}, ic = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, o = r.length; a < o; a++) {
    var s = r[a].trim();
    if (s) {
      var c = s.match(ac);
      if (c) {
        var d = 0 | parseInt(c[1], 10), p = c[2];
        d !== 0 && (rc(p, d), oc(e, p, c[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, sc = function() {
  return Pe.nc;
}, Mi = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(c) {
    for (var d = c.childNodes, p = d.length; p >= 0; p--) {
      var g = d[p];
      if (g && g.nodeType === 1 && g.hasAttribute(sr)) return g;
    }
  }(r), o = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(sr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = sc();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, o), n;
}, lc = function() {
  function e(r) {
    var n = this.element = Mi(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var o = document.styleSheets, s = 0, c = o.length; s < c; s++) {
        var d = o[s];
        if (d.ownerNode === a) return d;
      }
      $r(17);
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
}(), cc = function() {
  function e(r) {
    var n = this.element = Mi(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(a, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), uc = function() {
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
}(), zo = qa, dc = { isServer: !qa, useCSSOMInjection: !Ql }, bn = function() {
  function e(r, n, a) {
    r === void 0 && (r = Pt), n === void 0 && (n = {}), this.options = St({}, dc, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && qa && zo && (zo = !1, function(o) {
      for (var s = document.querySelectorAll(nc), c = 0, d = s.length; c < d; c++) {
        var p = s[c];
        p && p.getAttribute(sr) !== "active" && (ic(o, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Jr(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(St({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, o = n.useCSSOMInjection, s = n.target, r = a ? new uc(s) : o ? new lc(s) : new cc(s), new ec(r)));
    var r, n, a, o, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Jr(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Jr(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Jr(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, o = "", s = 0; s < a; s++) {
        var c = tc(s);
        if (c !== void 0) {
          var d = r.names.get(c), p = n.getGroup(s);
          if (d && p && d.size) {
            var g = sr + ".g" + s + '[id="' + c + '"]', m = "";
            d !== void 0 && d.forEach(function(f) {
              f.length > 0 && (m += f + ",");
            }), o += "" + p + g + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), pc = /(a)(d)/gi, Ho = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function fa(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ho(t % 52) + r;
  return (Ho(t % 52) + r).replace(pc, "$1-$2");
}
var ir = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, $i = function(e) {
  return ir(5381, e);
};
function Fi(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ir(r) && !Ha(r)) return !1;
  }
  return !0;
}
var mc = $i("5.3.11"), fc = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Fi(t), this.componentId = r, this.baseHash = ir(mc, r), this.baseStyle = n, bn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) o.push(this.staticRulesId);
    else {
      var s = Yt(this.rules, t, r, n).join(""), c = fa(ir(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(a, c)) {
        var d = n(s, "." + c, void 0, a);
        r.insertRules(a, c, d);
      }
      o.push(c), this.staticRulesId = c;
    }
    else {
      for (var p = this.rules.length, g = ir(this.baseHash, n.hash), m = "", f = 0; f < p; f++) {
        var E = this.rules[f];
        if (typeof E == "string") m += E;
        else if (E) {
          var S = Yt(E, t, r, n), T = Array.isArray(S) ? S.join("") : S;
          g = ir(g, T + f), m += T;
        }
      }
      if (m) {
        var k = fa(g >>> 0);
        if (!r.hasNameForId(a, k)) {
          var N = n(m, "." + k, void 0, a);
          r.insertRules(a, k, N);
        }
        o.push(k);
      }
    }
    return o.join(" ");
  }, e;
}(), hc = /^\s*\/\/.*$/gm, gc = [":", "[", ".", "#"];
function yc(e) {
  var t, r, n, a, o = Pt, s = o.options, c = s === void 0 ? Pt : s, d = o.plugins, p = d === void 0 ? gn : d, g = new Vl(c), m = [], f = /* @__PURE__ */ function(T) {
    function k(N) {
      if (N) try {
        T(N + "}");
      } catch {
      }
    }
    return function(N, A, D, I, v, _, j, z, ie, he) {
      switch (N) {
        case 1:
          if (ie === 0 && A.charCodeAt(0) === 64) return T(A + ";"), "";
          break;
        case 2:
          if (z === 0) return A + "/*|*/";
          break;
        case 3:
          switch (z) {
            case 102:
            case 112:
              return T(D[0] + A), "";
            default:
              return A + (he === 0 ? "/*|*/" : "");
          }
        case -2:
          A.split("/*|*/}").forEach(k);
      }
    };
  }(function(T) {
    m.push(T);
  }), E = function(T, k, N) {
    return k === 0 && gc.indexOf(N[r.length]) !== -1 || N.match(a) ? T : "." + t;
  };
  function S(T, k, N, A) {
    A === void 0 && (A = "&");
    var D = T.replace(hc, ""), I = k && N ? N + " " + k + " { " + D + " }" : D;
    return t = A, r = k, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), g(N || !k ? "" : k, I);
  }
  return g.use([].concat(p, [function(T, k, N) {
    T === 2 && N.length && N[0].lastIndexOf(r) > 0 && (N[0] = N[0].replace(n, E));
  }, f, function(T) {
    if (T === -2) {
      var k = m;
      return m = [], k;
    }
  }])), S.hash = p.length ? p.reduce(function(T, k) {
    return k.name || $r(15), ir(T, k.name);
  }, 5381).toString() : "", S;
}
var Ui = u.default.createContext(), zi = (Ui.Consumer, u.default.createContext()), bc = (zi.Consumer, new bn()), ha = yc();
function vc() {
  return (0, u.useContext)(Ui) || bc;
}
var xc = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, o) {
      o === void 0 && (o = ha);
      var s = n.name + o.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, o(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return $r(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ha), this.name + t.hash;
  }, e;
}(), wc = /([A-Z])/, Sc = /([A-Z])/g, Tc = /^ms-/, Ec = function(e) {
  return "-" + e.toLowerCase();
};
function qo(e) {
  return wc.test(e) ? e.replace(Sc, Ec).replace(Tc, "-ms-") : e;
}
var Wo = function(e) {
  return e == null || e === !1 || e === "";
};
function Yt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, o = [], s = 0, c = e.length; s < c; s += 1) (a = Yt(e[s], t, r, n)) !== "" && (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
    return o;
  }
  return Wo(e) ? "" : Ha(e) ? "." + e.styledComponentId : Ir(e) ? typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t ? e : Yt(e(t), t, r, n) : e instanceof xc ? r ? (e.inject(r, n), e.getName(n)) : e : ma(e) ? function p(g, m) {
    var f, E, S = [];
    for (var T in g) g.hasOwnProperty(T) && !Wo(g[T]) && (Array.isArray(g[T]) && g[T].isCss || Ir(g[T]) ? S.push(qo(T) + ":", g[T], ";") : ma(g[T]) ? S.push.apply(S, p(g[T], T)) : S.push(qo(T) + ": " + (f = T, ((E = g[T]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || f in Yl || f.startsWith("--") ? String(E).trim() : E + "px") + ";")));
    return m ? [m + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
  var d;
}
var Go = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function kc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Ir(e) || ma(e) ? Go(Yt(Fo(gn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Go(Yt(Fo(e, r)));
}
var Ac = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Nc = /(^-|-$)/g;
function Yn(e) {
  return e.replace(Ac, "-").replace(Nc, "");
}
function Qr(e) {
  return typeof e == "string" && !0;
}
var ga = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Cc = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Oc(e, t, r) {
  var n = e[r];
  ga(t) && ga(n) ? Hi(n, t) : e[r] = t;
}
function Hi(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, o = r; a < o.length; a++) {
    var s = o[a];
    if (ga(s)) for (var c in s) Cc(c) && Oc(e, s[c], c);
  }
  return e;
}
var qi = u.default.createContext();
qi.Consumer;
var Kn = {};
function Wi(e, t, r) {
  var n = Ha(e), a = !Qr(e), o = t.attrs, s = o === void 0 ? gn : o, c = t.componentId, d = c === void 0 ? function(A, D) {
    var I = typeof A != "string" ? "sc" : Yn(A);
    Kn[I] = (Kn[I] || 0) + 1;
    var v = I + "-" + function(_) {
      return fa($i(_) >>> 0);
    }("5.3.11" + I + Kn[I]);
    return D ? D + "-" + v : v;
  }(t.displayName, t.parentComponentId) : c, p = t.displayName, g = p === void 0 ? function(A) {
    return Qr(A) ? "styled." + A : "Styled(" + Uo(A) + ")";
  }(e) : p, m = t.displayName && t.componentId ? Yn(t.displayName) + "-" + t.componentId : t.componentId || d, f = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, E = t.shouldForwardProp;
  n && e.shouldForwardProp && (E = t.shouldForwardProp ? function(A, D, I) {
    return e.shouldForwardProp(A, D, I) && t.shouldForwardProp(A, D, I);
  } : e.shouldForwardProp);
  var S, T = new fc(r, m, n ? e.componentStyle : void 0), k = T.isStatic && s.length === 0, N = function(A, D) {
    return function(I, v, _, j) {
      var z = I.attrs, ie = I.componentStyle, he = I.defaultProps, ee = I.foldedComponentIds, Z = I.shouldForwardProp, ne = I.styledComponentId, G = I.target, ue = function(P, y, L) {
        P === void 0 && (P = Pt);
        var O = St({}, y, { theme: P }), ae = {};
        return L.forEach(function(re) {
          var V, K, oe, fe = re;
          for (V in Ir(fe) && (fe = fe(O)), fe) O[V] = ae[V] = V === "className" ? (K = ae[V], oe = fe[V], K && oe ? K + " " + oe : K || oe) : fe[V];
        }), [O, ae];
      }(function(P, y, L) {
        return L === void 0 && (L = Pt), P.theme !== L.theme && P.theme || y || L.theme;
      }(v, (0, u.useContext)(qi), he) || Pt, v, z), Se = ue[0], se = ue[1], be = function(P, y, L) {
        var O = vc(), ae = (0, u.useContext)(zi) || ha;
        return y ? P.generateAndInjectStyles(Pt, O, ae) : P.generateAndInjectStyles(L, O, ae);
      }(ie, j, Se), Ee = _, J = se.$as || v.$as || se.as || v.as || G, H = Qr(J), R = se !== v ? St({}, v, {}, se) : v, C = {};
      for (var x in R) x[0] !== "$" && x !== "as" && (x === "forwardedAs" ? C.as = R[x] : (Z ? Z(x, $o, J) : !H || $o(x)) && (C[x] = R[x]));
      return v.style && se.style !== v.style && (C.style = St({}, v.style, {}, se.style)), C.className = Array.prototype.concat(ee, ne, be !== ne ? be : null, v.className, se.className).filter(Boolean).join(" "), C.ref = Ee, (0, u.createElement)(J, C);
    }(S, A, D, k);
  };
  return N.displayName = g, (S = u.default.forwardRef(N)).attrs = f, S.componentStyle = T, S.displayName = g, S.shouldForwardProp = E, S.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : gn, S.styledComponentId = m, S.target = n ? e.target : e, S.withComponent = function(A) {
    var D = t.componentId, I = function(_, j) {
      if (_ == null) return {};
      var z, ie, he = {}, ee = Object.keys(_);
      for (ie = 0; ie < ee.length; ie++) z = ee[ie], j.indexOf(z) >= 0 || (he[z] = _[z]);
      return he;
    }(t, ["componentId"]), v = D && D + "-" + (Qr(A) ? A : Yn(Uo(A)));
    return Wi(A, St({}, I, { attrs: f, componentId: v }), r);
  }, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = n ? Hi({}, e.defaultProps, A) : A;
  } }), Object.defineProperty(S, "toString", { value: function() {
    return "." + S.styledComponentId;
  } }), a && Jl()(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), S;
}
var Xn, ya = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Pt), !(0, Di.isValidElementType)(n)) return $r(1, String(n));
    var o = function() {
      return r(n, a, kc.apply(void 0, arguments));
    };
    return o.withConfig = function(s) {
      return t(r, n, St({}, a, {}, s));
    }, o.attrs = function(s) {
      return t(r, n, St({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, o;
  }(Wi, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ya[e] = ya(e);
}), (Xn = (function(e, t) {
  this.rules = e, this.componentId = t, this.isStatic = Fi(e), bn.registerId(this.componentId + 1);
}).prototype).createStyles = function(e, t, r, n) {
  var a = n(Yt(this.rules, t, r, n).join(""), ""), o = this.componentId + e;
  r.insertRules(o, o, a);
}, Xn.removeStyles = function(e, t) {
  t.clearRules(this.componentId + e);
}, Xn.renderStyles = function(e, t, r, n) {
  e > 2 && bn.registerId(this.componentId + e), this.removeStyles(e, r), this.createStyles(e, t, r, n);
};
const At = ya, jc = At.div`
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
`, un = "On This Page", Rc = { event: "collapse", name: "onclick", type: "click", text: un }, Wa = ({ items: e, firstElementId: t, focusFirstFocusableElement: r = !1 }) => {
  const n = (0, u.useRef)(null), a = function(m) {
    const [f, E] = (0, u.useState)(!1);
    return (0, u.useEffect)(() => {
      const S = window.matchMedia(m);
      S.matches !== f && E(S.matches);
      const T = () => {
        E(S.matches);
      };
      return S.addEventListener("change", T), () => S.removeEventListener("change", T);
    }, [f, m]), f;
  }("(max-width: 991px)"), [o, s] = (0, u.useState)({ hasHeader: !1, hasAltMenuSpacing: !1, containerClass: "container-xl", activeContainer: "", showMenu: !1, sticky: !1 }), c = a ? 110 : 142, d = () => {
    var T;
    const m = {}, f = window.scrollY;
    ((T = document.getElementById(t)) == null ? void 0 : T.getBoundingClientRect().top) >= 0 && (m.sticky = !1, m.activeContainer = ""), f > n.current.getBoundingClientRect().top && (m.sticky = !0);
    const S = o.hasHeader ? c + 103 : 103;
    e == null || e.forEach(({ targetIdName: k }) => {
      const N = document.getElementById(k), A = (N == null ? void 0 : N.getBoundingClientRect().top) - S, D = (N == null ? void 0 : N.getBoundingClientRect().bottom) - S;
      A < 0 && D > 0 && (m.activeContainer = k);
    }), s((k) => ({ ...k, ...m }));
  }, p = () => {
    var m;
    m = d, Bn || (Bn = !0, setTimeout(() => {
      m(), Bn = !1;
    }, 150)), ((f) => {
      window.clearTimeout(Mo), Mo = window.setTimeout(f, 150);
    })(d);
  };
  function g(m = null) {
    if (m === null) return o.containerClass;
    const f = Object.values(m.classList).filter((E) => ["container-sm", "container-md", "container", "container-lg", "container-xl", "container-fluid"].includes(E));
    return f.length > 0 ? f.join(" ") : g(m.parentElement);
  }
  return (0, u.useEffect)(() => {
    const m = document.getElementById(t) || null, f = { hasHeader: !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), hasAltMenuSpacing: !!document.getElementById("degreeDetailPageContainer"), containerClass: g(m) };
    s((E) => ({ ...E, ...f }));
  }, []), (0, u.useEffect)(() => (window == null || window.addEventListener("scroll", p), () => window.removeEventListener("scroll", p)), [o.hasHeader]), (e == null ? void 0 : e.length) > 0 && u.default.createElement(jc, { requiresAltMenuSpacing: o.hasAltMenuSpacing, ref: n, className: we()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: o.sticky, "with-header": o.hasHeader }), style: o.showMenu ? { borderBottom: 0 } : {} }, u.default.createElement("div", { className: `${o.containerClass} uds-anchor-menu-wrapper` }, a ? u.default.createElement("button", { className: we()("mobile-menu-toggler", { "show-menu": o.showMenu }), type: "button", onClick: () => {
    rt({ ...Rc, action: o.showMenu ? "close" : "open" }), s((m) => ({ ...m, showMenu: !m.showMenu }));
  }, "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, u.default.createElement("h4", null, un, ":", u.default.createElement("i", { className: "fas fa-chevron-down" }))) : u.default.createElement("h4", null, un, ":"), u.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: we()("card", "card-body", "collapse", { show: o.showMenu }) }, u.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": un }, e == null ? void 0 : e.map((m) => u.default.createElement(Et, { "data-testid": `anchor-item-${m.targetIdName}`, key: m.targetIdName, classes: we()("nav-link", { active: o.activeContainer === m.targetIdName }).split(" "), ariaLabel: m.text, label: m.text, icon: m.icon, onClick: () => ((f) => {
    var N, A;
    const E = window.scrollY - (o.hasHeader ? c + 100 : 100), S = a ? 410 : 90;
    let T = ((N = document.getElementById(f)) == null ? void 0 : N.getBoundingClientRect().top) + E;
    var k;
    n.current.classList.contains("sticky") || (T -= S), r && ((A = (k = `#${f}`, (k ? document.querySelector(k) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null || A.focus()), window.scrollTo({ top: T, behavior: "smooth" });
  })(m.targetIdName) }))))));
};
Wa.propTypes = { items: l().arrayOf(l().shape({ text: l().string.isRequired, targetIdName: l().string.isRequired, icon: l().arrayOf(l().string) })).isRequired, firstElementId: l().string.isRequired, focusFirstFocusableElement: l().bool };
var en, _c = (en = function(e, t) {
  return en = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, en(e, t);
}, function(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  en(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}), Pc = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.name = "AssertionError", n;
  }
  return _c(t, e), t;
}(Error);
function Pr(e, t) {
  if (!e) throw new Pc(t);
}
function jn(e) {
  var t = Object.entries(e).filter(function(r) {
    return r[1] != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Lc = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function n() {
      this.constructor = t;
    }
    e(t, r), t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Wt = function() {
  return Wt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, Wt.apply(this, arguments);
}, Bo = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  }
  return r;
};
const Ic = function(e) {
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.openShareDialog = function(n) {
      var a, o, s = r.props, c = s.onShareWindowClose, d = s.windowHeight, p = d === void 0 ? 400 : d, g = s.windowPosition, m = g === void 0 ? "windowCenter" : g, f = s.windowWidth, E = f === void 0 ? 550 : f;
      (function(S, T, k) {
        var N = T.height, A = T.width, D = Bo(T, ["height", "width"]), I = Wt({ height: N, width: A, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, D), v = window.open(S, "", Object.keys(I).map(function(j) {
          return "".concat(j, "=").concat(I[j]);
        }).join(", "));
        if (k) var _ = window.setInterval(function() {
          try {
            (v === null || v.closed) && (window.clearInterval(_), k(v));
          } catch (j) {
            console.error(j);
          }
        }, 1e3);
      })(n, Wt({ height: p, width: E }, m === "windowCenter" ? (a = E, o = p, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - a / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2 }) : function(S, T) {
        return { top: (window.screen.height - T) / 2, left: (window.screen.width - S) / 2 };
      }(E, p)), c);
    }, r.handleClick = function(n) {
      return a = r, o = void 0, c = function() {
        var d, p, g, m, f, E, S, T, k, N;
        return function(A, D) {
          var I, v, _, j, z = { label: 0, sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1];
          }, trys: [], ops: [] };
          return j = { next: ie(0), throw: ie(1), return: ie(2) }, typeof Symbol == "function" && (j[Symbol.iterator] = function() {
            return this;
          }), j;
          function ie(he) {
            return function(ee) {
              return function(Z) {
                if (I) throw new TypeError("Generator is already executing.");
                for (; z; ) try {
                  if (I = 1, v && (_ = 2 & Z[0] ? v.return : Z[0] ? v.throw || ((_ = v.return) && _.call(v), 0) : v.next) && !(_ = _.call(v, Z[1])).done) return _;
                  switch (v = 0, _ && (Z = [2 & Z[0], _.value]), Z[0]) {
                    case 0:
                    case 1:
                      _ = Z;
                      break;
                    case 4:
                      return z.label++, { value: Z[1], done: !1 };
                    case 5:
                      z.label++, v = Z[1], Z = [0];
                      continue;
                    case 7:
                      Z = z.ops.pop(), z.trys.pop();
                      continue;
                    default:
                      if (!((_ = (_ = z.trys).length > 0 && _[_.length - 1]) || Z[0] !== 6 && Z[0] !== 2)) {
                        z = 0;
                        continue;
                      }
                      if (Z[0] === 3 && (!_ || Z[1] > _[0] && Z[1] < _[3])) {
                        z.label = Z[1];
                        break;
                      }
                      if (Z[0] === 6 && z.label < _[1]) {
                        z.label = _[1], _ = Z;
                        break;
                      }
                      if (_ && z.label < _[2]) {
                        z.label = _[2], z.ops.push(Z);
                        break;
                      }
                      _[2] && z.ops.pop(), z.trys.pop();
                      continue;
                  }
                  Z = D.call(A, z);
                } catch (ne) {
                  Z = [6, ne], v = 0;
                } finally {
                  I = _ = 0;
                }
                if (5 & Z[0]) throw Z[1];
                return { value: Z[0] ? Z[1] : void 0, done: !0 };
              }([he, ee]);
            };
          }
        }(this, function(A) {
          switch (A.label) {
            case 0:
              return d = this.props, p = d.beforeOnClick, g = d.disabled, m = d.networkLink, f = d.onClick, E = d.url, S = d.openShareDialogOnClick, T = d.opts, k = m(E, T), g ? [2] : (n.preventDefault(), p ? !(D = N = p()) || typeof D != "object" && typeof D != "function" || typeof D.then != "function" ? [3, 2] : [4, N] : [3, 2]);
            case 1:
              A.sent(), A.label = 2;
            case 2:
              return S && this.openShareDialog(k), f && f(n, k), [2];
          }
          var D;
        });
      }, new ((s = void 0) || (s = Promise))(function(d, p) {
        function g(E) {
          try {
            f(c.next(E));
          } catch (S) {
            p(S);
          }
        }
        function m(E) {
          try {
            f(c.throw(E));
          } catch (S) {
            p(S);
          }
        }
        function f(E) {
          var S;
          E.done ? d(E.value) : (S = E.value, S instanceof s ? S : new s(function(T) {
            T(S);
          })).then(g, m);
        }
        f((c = c.apply(a, o || [])).next());
      });
      var a, o, s, c;
    }, r;
  }
  return Lc(t, e), t.prototype.render = function() {
    var r = this.props, n = (r.beforeOnClick, r.children), a = r.className, o = r.disabled, s = r.disabledStyle, c = r.forwardedRef, d = (r.networkLink, r.networkName), p = (r.onShareWindowClose, r.openShareDialogOnClick, r.opts, r.resetButtonStyle), g = r.style, m = (r.url, r.windowHeight, r.windowPosition, r.windowWidth, Bo(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), f = we()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!o, disabled: !!o }, a), E = Wt(Wt(p ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, g), o && s);
    return u.default.createElement("button", Wt({}, m, { "aria-label": m["aria-label"] || d, className: f, onClick: this.handleClick, ref: c, style: E }), n);
  }, t.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: !0, resetButtonStyle: !0 }, t;
}(u.Component);
var vn = function() {
  return vn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, vn.apply(this, arguments);
};
const Rn = function(e, t, r, n) {
  function a(o, s) {
    var c = r(o), d = vn({}, o);
    return Object.keys(c).forEach(function(p) {
      delete d[p];
    }), u.default.createElement(Ic, vn({}, n, d, { forwardedRef: s, networkName: e, networkLink: t, opts: r(o) }));
  }
  return a.displayName = "ShareButton-".concat(e), (0, u.forwardRef)(a);
}, Vo = Rn("facebook", function(e, t) {
  var r = t.quote, n = t.hashtag;
  return Pr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + jn({ u: e, quote: r, hashtag: n });
}, function(e) {
  return { quote: e.quote, hashtag: e.hashtag };
}, { windowWidth: 550, windowHeight: 400 });
var ba = function() {
  return ba = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, ba.apply(this, arguments);
};
function _n(e) {
  var t = function(r) {
    var n = r.bgStyle, a = r.borderRadius, o = r.iconFillColor, s = r.round, c = r.size, d = function(p, g) {
      var m = {};
      for (var f in p) Object.prototype.hasOwnProperty.call(p, f) && g.indexOf(f) < 0 && (m[f] = p[f]);
      if (p != null && typeof Object.getOwnPropertySymbols == "function") {
        var E = 0;
        for (f = Object.getOwnPropertySymbols(p); E < f.length; E++) g.indexOf(f[E]) < 0 && Object.prototype.propertyIsEnumerable.call(p, f[E]) && (m[f[E]] = p[f[E]]);
      }
      return m;
    }(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return u.default.createElement("svg", ba({ viewBox: "0 0 64 64", width: c, height: c }, d), s ? u.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : u.default.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: n }), u.default.createElement("path", { d: e.path, fill: o }));
  };
  return t.defaultProps = { bgStyle: {}, borderRadius: 0, iconFillColor: "white", size: 64 }, t;
}
const Yo = _n({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), Ko = Rn("twitter", function(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, o = a === void 0 ? [] : a, s = t.related, c = s === void 0 ? [] : s;
  return Pr(e, "twitter.url"), Pr(Array.isArray(o), "twitter.hashtags is not an array"), Pr(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + jn({ url: e, text: r, via: n, hashtags: o.length > 0 ? o.join(",") : void 0, related: c.length > 0 ? c.join(",") : void 0 });
}, function(e) {
  return { hashtags: e.hashtags, title: e.title, via: e.via, related: e.related };
}, { windowWidth: 550, windowHeight: 400 }), Xo = _n({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), Dc = Rn("email", function(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + jn({ subject: r, body: n ? n + a + e : e });
}, function(e) {
  return { subject: e.subject, body: e.body, separator: e.separator || " " };
}, { openShareDialogOnClick: !1, onClick: function(e, t) {
  window.location.href = t;
} }), Mc = _n({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), Zo = Rn("linkedin", function(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return Pr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + jn({ url: e, mini: "true", title: r, summary: n, source: a });
}, function(e) {
  return { title: e.title, summary: e.summary, source: e.source };
}, { windowWidth: 750, windowHeight: 600 }), Jo = _n({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
function Gi(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function va(e, t) {
  return e === void 0 && (e = ""), t === void 0 && (t = void 0), t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var $c = typeof window == "object" && window.Element || function() {
};
l().oneOfType([l().string, l().func, function(e, t, r) {
  if (!(e[t] instanceof $c)) return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}, l().shape({ current: l().any })]);
var xa = l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func }), l().arrayOf(l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func })]))]), Fc = ["className", "cssModule", "active", "tag"], Uc = { tag: xa, active: l().bool, className: l().string, cssModule: l().object }, wa = function(e) {
  var t = e.className, r = e.cssModule, n = e.active, a = e.tag, o = Gi(e, Fc), s = va(we()(t, !!n && "active", "breadcrumb-item"), r);
  return u.default.createElement(a, Dt({}, o, { className: s, "aria-current": n ? "page" : void 0 }));
};
wa.propTypes = Uc, wa.defaultProps = { tag: "li" };
const tn = wa;
var zc = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"], Hc = { tag: xa, listTag: xa, className: l().string, listClassName: l().string, cssModule: l().object, children: l().node, "aria-label": l().string }, Sa = function(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, a = e.children, o = e.tag, s = e.listTag, c = e["aria-label"], d = Gi(e, zc), p = va(we()(t), n), g = va(we()("breadcrumb", r), n);
  return u.default.createElement(o, Dt({}, d, { className: p, "aria-label": c }), u.default.createElement(s, { className: g }, a));
};
Sa.propTypes = Hc, Sa.defaultProps = { tag: "nav", listTag: "ol", "aria-label": "breadcrumb" };
const qc = Sa, Wc = At.div`
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
`, Gc = At.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, xn = ({ type: e, articleUrl: t, publicationDate: r, title: n, body: a, authorEmail: o, authorName: s, authorPhone: c, authorTitle: d, breadcrumbs: p, calendarUrl: g, eventLocation: m, eventTime: f, headerImageUrl: E, registrationUrl: S, zoomUrl: T }) => {
  const k = we()("col", "col-12", { "col-lg-8": e === "event" && (S || T || g) });
  return u.default.createElement(u.default.Fragment, null, E && e !== "event" && u.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${E})` } }), u.default.createElement(Wc, { className: `container ${e}-container wrapper-container` }, p && u.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement(qc, { listClassName: "breadcrumb" }, p.map((N) => ((A) => A.active ? u.default.createElement(tn, { active: !0, tag: "li", className: "breadcrumb-item" }, u.default.createElement(tn, { tag: "a", href: A.url }, A.title)) : u.default.createElement(tn, { tag: "li", className: "breadcrumb-item" }, u.default.createElement(tn, { tag: "a", href: A.url }, A.title)))(N))))), u.default.createElement("div", { className: "row pb-2 pt-3" }, u.default.createElement("div", { className: k }, u.default.createElement("h2", { "data-testid": "title" }, n)), e === "event" && u.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (S || T) && (S ? u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(Et, { color: "maroon", href: S, label: "Register" })) : u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(Et, { color: "maroon", href: T, label: "Attend on Zoom" }))), g && u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(Et, { color: "gray", size: "small", href: g, label: "Add to calendar" })))), e === "event" ? u.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, f && u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), u.default.createElement("div", { dangerouslySetInnerHTML: it(f) })), (S && T || m) && u.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), u.default.createElement("div", { dangerouslySetInnerHTML: it(m) }), S && T && u.default.createElement("a", { href: T }, "Attend on Zoom"))) : u.default.createElement("div", { className: "row row-spaced pt-2" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(Vo, { url: t, quote: n }, u.default.createElement(Yo, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ko, { url: t, quote: n }, u.default.createElement(Xo, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Zo, { url: t, quote: n }, u.default.createElement(Jo, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), r && u.default.createElement("i", { className: "news-date" }, r))), u.default.createElement("div", { className: "row" }, u.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: it(a), "data-testid": "body" })), e === "news" && u.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "author highlight-gold" }, s), d && u.default.createElement("div", { className: "author-title" }, d), o && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-envelope" })), u.default.createElement("a", { href: `mailto: ${o}` }, o)), c && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-phone" })), u.default.createElement("a", { href: `tel: ${c}` }, c)))), e === "event" && u.default.createElement(Gc, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "For more information contact:"), u.default.createElement("div", { className: "event-author" }, s), u.default.createElement("div", { className: "event-author-title" }, d), (o || c) && u.default.createElement("div", { className: "event-author-info" }, o && u.default.createElement("div", null, u.default.createElement("a", { href: `mailto: ${o}` }, o)), c && u.default.createElement("div", null, u.default.createElement("a", { href: `tel: ${c}` }, c)))), u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "Share this event:"), u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(Vo, { url: t, quote: n }, u.default.createElement(Yo, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ko, { url: t, quote: n }, u.default.createElement(Xo, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Dc, { url: o, quote: n }, u.default.createElement(Mc, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Zo, { url: t, quote: n }, u.default.createElement(Jo, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
};
xn.propTypes = { type: l().oneOf(["event", "news"]), articleUrl: l().string.isRequired, publicationDate: l().string.isRequired, title: l().string.isRequired, body: l().string.isRequired, authorEmail: l().string, authorName: l().string.isRequired, authorPhone: l().string, authorTitle: l().string, breadcrumbs: l().arrayOf(l().shape({ title: l().string, url: l().string, active: l().bool })), calendarUrl: l().string, headerImageUrl: l().string, eventLocation: l().string, eventTime: l().string, registrationUrl: l().string, zoomUrl: l().string }, xn.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
const Bc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, wn = ({ color: e, icon: t, innerRef: r, onClick: n, size: a, cardTitle: o }) => u.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"}`, ref: r, onClick: () => (rt({ ...Bc, text: `${t == null ? void 0 : t[1]} icon`, section: o }), void (n == null ? void 0 : n())), "aria-label": "Close" }, u.default.createElement("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` }));
wn.propTypes = { color: l().oneOf(["white", "gray", "black"]), icon: l().arrayOf(l().string), innerRef: l().oneOfType([l().object, l().func, l().string]), onClick: l().func, cardTitle: l().string, size: l().oneOf(["large", "small"]) }, wn.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
const Vc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Dr = ({ label: e, cardTitle: t, ariaLabel: r, color: n, disabled: a, element: o, innerRef: s, href: c, onClick: d, ...p }) => {
  const g = we()("btn", "btn-tag", { "btn-tag-alt-white": n === "white", "btn-tag-alt-gray": n === "gray", "btn-tag-alt-dark": n === "dark", disabled: a });
  let m = o;
  return c && o === "button" && (m = "a"), u.default.createElement(m, Dt({ type: m === "button" && d ? "button" : void 0 }, p, { className: g, href: c, ref: s, onClick: () => (rt({ ...Vc, text: e, section: t }), void (d == null ? void 0 : d())), "aria-label": r }), e);
};
Dr.propTypes = { label: l().string, cardTitle: l().string, ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), disabled: l().bool, element: l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func }), l().arrayOf(l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func })]))]), href: l().string, innerRef: l().oneOfType([l().object, l().func, l().string]), onClick: l().func }, Dr.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
const Kt = ({ src: e, alt: t, cssClasses: r, loading: n = "lazy", decoding: a = "async", dataTestId: o, fetchPriority: s = "auto", width: c, height: d, cardLink: p, title: g, caption: m, captionTitle: f, border: E, dropShadow: S }) => {
  const T = { src: e, alt: t, loading: n, decoding: a, fetchpriority: s, ...(r == null ? void 0 : r.length) > 0 && { className: ln(r) }, ...o && { "data-testid": o }, ...c && { width: c }, ...d && { height: d } }, k = we()("uds-img", { borderless: !E, "uds-img-drop-shadow": S }), N = (A) => {
    const D = A ? `${T.className} ${A}` : T.className;
    return p ? u.default.createElement("a", { href: p }, u.default.createElement("img", Dt({}, T, { className: D })), u.default.createElement("span", { className: "visually-hidden" }, g)) : u.default.createElement("img", Dt({}, T, { className: D }));
  };
  return u.default.createElement(u.default.Fragment, null, m ? u.default.createElement("div", { className: k }, u.default.createElement("figure", { className: "figure uds-figure" }, N(), m && u.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, f && u.default.createElement("h3", null, f), u.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: it(m) })))) : N(k));
};
Kt.propTypes = { src: l().string.isRequired, alt: l().string.isRequired, cssClasses: l().arrayOf(l().string), loading: l().oneOf(["lazy", "eager"]), decoding: l().oneOf(["sync", "async", "auto"]), fetchPriority: l().oneOf(["auto", "high", "low"]), width: l().string, height: l().string, dataTestId: l().string, cardLink: l().string, title: l().string, caption: l().string, captionTitle: l().string, border: l().bool, dropShadow: l().bool };
const Yc = At.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Kc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Sn = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: o, icon: s, body: c, eventFormat: d, eventLocation: p, eventTime: g, buttons: m, linkLabel: f, linkUrl: E, tags: S, showBorders: T, cardLink: k }) => u.default.createElement(Ta, { type: e, width: t, horizontal: r, image: n, imageAltText: a, title: o, icon: s, body: c, eventFormat: d, eventLocation: p, eventTime: g, buttons: m, linkLabel: f, linkUrl: E, tags: S, showBorders: T, cardLink: k });
Sn.propTypes = { type: l().oneOf(["default", "degree", "event", "news", "story"]), width: l().oneOf(["25%", "50%", "75%", "100%"]), horizontal: l().bool, title: l().string.isRequired, icon: l().arrayOf(l().string), body: l().string, eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string, image: l().string, imageAltText: l().string, buttons: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["gold", "maroon", "gray", "dark"]), icon: l().arrayOf(l().string), href: l().string, label: l().string, onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: l().string, linkUrl: l().string, tags: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), href: l().string, label: l().string, onClick: l().func })), showBorders: l().bool, cardLink: l().string }, Sn.defaultProps = { type: "default", width: "100%", horizontal: !1, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const Ta = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: o, icon: s, body: c, eventFormat: d, eventLocation: p, eventTime: g, buttons: m, linkLabel: f, linkUrl: E, tags: S, showBorders: T, cardLink: k }) => {
  const N = we()("card", "cards-components", { "card-degree": e === "degree", "card-event": e === "event", "card-story": e === "story", [`w-${t.replace("%", "")}`]: t !== "100%", "card-horizontal": r, borderless: !T });
  return u.default.createElement(u.default.Fragment, null, u.default.createElement(Yc, { className: N, "data-testid": "card-container" }, !!n && u.default.createElement(Kt, { src: n, alt: a, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: k, title: o }), !n && s && u.default.createElement("i", { className: `${s == null ? void 0 : s[0]} fa-${s == null ? void 0 : s[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), r ? u.default.createElement("div", { className: "card-content-wrapper" }, u.default.createElement(Tn, { type: e, body: c, eventFormat: d, eventLocation: p, eventTime: g, title: o, buttons: m, linkLabel: f, linkUrl: E, tags: S, cardLink: k })) : u.default.createElement(Tn, { type: e, body: c, eventFormat: d, eventLocation: p, eventTime: g, title: o, buttons: m, linkLabel: f, linkUrl: E, tags: S, cardLink: k })));
};
Ta.propTypes = { type: l().oneOf(["default", "degree", "event", "news", "story"]), width: l().oneOf(["25%", "50%", "75%", "100%"]), horizontal: l().bool, title: l().string.isRequired, icon: l().arrayOf(l().string), body: l().string, eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string, image: l().string, imageAltText: l().string, buttons: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["gold", "maroon", "gray", "dark"]), icon: l().arrayOf(l().string), href: l().string, label: l().string, onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: l().string, linkUrl: l().string, tags: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), href: l().string, label: l().string, onClick: l().func })), showBorders: l().bool, cardLink: l().string }, Ta.defaultProps = { type: "default", width: "100%", horizontal: !1, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const Tn = ({ type: e, body: t, eventFormat: r, eventLocation: n, eventTime: a, title: o, buttons: s, linkLabel: c, linkUrl: d, tags: p, cardLink: g }) => {
  return u.default.createElement(u.default.Fragment, null, !!o && u.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, u.default.createElement("h3", { className: "card-title" }, g ? u.default.createElement("a", { href: g }, o) : o)), !!t && u.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, u.default.createElement("div", { dangerouslySetInnerHTML: it(t) })), e === "event" && (a || n) && u.default.createElement(Ea, { eventFormat: r, eventTime: a, eventLocation: n }), s && u.default.createElement("div", { className: "card-buttons" }, s.map((f) => u.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${f.label}-${f.href}` }, u.default.createElement(Et, { ariaLabel: f.ariaLabel, color: f.color, icon: f.icon, href: f.href, label: f.label, onClick: f.onClick, size: f.size, target: f.target, cardTitle: o })))), d && c && u.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, u.default.createElement("a", { href: (m = d, m.startsWith("https://") || m.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(m) ? m : `mailto:${m}`), onClick: () => rt({ ...Kc, section: o, text: c }) }, c)), p && u.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, p.map((f) => u.default.createElement(Dr, { key: `${f.label}-${f.href}`, ariaLabel: f.ariaLabel, color: f.color, href: f.href, label: f.label, onClick: f.onClick, cardTitle: o }))));
  var m;
};
Tn.propTypes = { type: l().oneOf(["default", "degree", "event", "news", "story"]), body: l().string, eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string, title: l().string.isRequired, buttons: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["gold", "maroon", "gray", "dark"]), icon: l().arrayOf(l().string), href: l().string, label: l().string, onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: l().string, linkUrl: l().string, tags: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), href: l().string, label: l().string, onClick: l().func })), cardLink: l().string }, Tn.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
const Ea = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? u.default.createElement("div", { className: "card-event-details" }, t && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: it(t) })), r && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("div", { dangerouslySetInnerHTML: it(r) }))) : u.default.createElement(u.default.Fragment, null, t && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: it(t) }))), r && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("span", null, u.default.createElement("div", { dangerouslySetInnerHTML: it(r) })))));
Ea.propTypes = { eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string }, Ea.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
const Xc = At.div`
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
`, Zc = () => u.default.createElement(Xc, null, u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null)), Jc = At.section``, Bi = (0, u.createContext)(null), Vi = ({ defaultProps: e, dataSource: t, noFeedText: r, renderHeader: n, renderBody: a, dataTransformer: o = (d) => d, dataFilter: s = (d) => d, maxItems: c }) => {
  const [{ data: d, loading: p, error: g }, m] = (() => {
    const [T, k] = (0, u.useState)(), [N, A] = (0, u.useState)(!1), [D, I] = (0, u.useState)(!1), [v, _] = (0, u.useState)("");
    return (0, u.useEffect)(() => {
      v && (() => {
        I(null), A(!0);
        try {
          fetch(v).then((j) => j.json()).then((j) => {
            k(j), A(!1);
          }).catch((j) => {
            I(j), A(!1);
          });
        } catch (j) {
          I(j);
        }
      })();
    }, [v]), [{ data: T, loading: N, error: D }, _];
  })(), [f, E] = (0, u.useState)([]), S = { ...e.dataSource, ...t };
  return (0, u.useEffect)(() => {
    m(S == null ? void 0 : S.url);
  }, [S == null ? void 0 : S.url]), (0, u.useEffect)(() => {
    const T = d == null ? void 0 : d.nodes.map(o), k = T == null ? void 0 : T.filter((N) => s(N, t == null ? void 0 : t.filters));
    E(c ? k == null ? void 0 : k.slice(0, c) : k);
  }, [d]), u.default.createElement(Bi.Provider, { value: { feeds: f } }, u.default.createElement(Jc, null, n, g ? u.default.createElement("span", null, "Error, try again!") : u.default.createElement(u.default.Fragment, null, p && !(f != null && f.length) && u.default.createElement("div", { className: "text-center mt-4" }, u.default.createElement(Zc, null)), f != null && f.length ? a : !p && u.default.createElement("p", { className: "text-center" }, r))));
};
Vi.propTypes = { renderHeader: l().element, renderBody: l().element, maxItems: l().number, dataTransformer: l().func, dataFilter: l().func, noFeedText: l().string };
const Ga = l().shape({ color: l().oneOf(["white", "dark"]), text: l().string }), Ba = l().shape({ color: l().oneOf(["gold", "maroon", "gray", "dark"]), text: l().string }), Qc = l().shape({ color: l().oneOf(["gold", "maroon", "gray", "dark"]), text: l().string, size: l().string }), Yi = l().shape({ url: l().string, filters: l().string }), Ki = l().shape({ header: Ga, ctaButton: Ba, dataSource: Yi, maxItems: l().number }), eu = At.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Xi = ({ defaultProps: e, header: t, ctaButton: r }) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return u.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, u.default.createElement("div", { className: "col-sm-12 col-md-9" }, u.default.createElement("h2", { className: `text-${n.color}` }, n.text)), u.default.createElement(eu, { className: "col-sm-12 col-md-3" }, u.default.createElement("a", { className: `btn btn-${a.color}`, href: a.url, onClick: () => rt({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: n.text, text: a.text }) }, a.text)));
};
Xi.propTypes = { defaultProps: Ki, header: Ga, ctaButton: Ba };
const Zi = ({ children: e }) => u.default.createElement("div", { className: "row", "data-testid": "feed-body" }, u.default.createElement("div", { className: "col" }, e));
Zi.propTypes = { children: l().element };
const tu = At.img`
  width: 100%;
`, Va = (e) => {
  const t = e.type || "heading-hero";
  return { "heading-hero": () => function({ image: r, subTitle: n, title: a, contents: o, contentsColor: s }) {
    const c = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, d = { black: "text-dark", white: "text-white", undefined: "" };
    let p = u.default.createElement(u.default.Fragment, null);
    return a && (p = u.default.createElement("h1", { style: { maxWidth: a.maxWidth || "" }, "data-testid": "hero-title" }, u.default.createElement("span", { className: we()({ [d[a.color]]: a.color, [c[a.highlightColor]]: a.highlightColor }) }, a.text))), a && n && (p = u.default.createElement("header", null, u.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, u.default.createElement("span", { className: we()({ [d[n.color]]: n.color, [c[n.highlightColor]]: n.highlightColor }) }, n.text)), p)), u.default.createElement("div", { className: we()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[r == null ? void 0 : r.size]]: r == null ? void 0 : r.size }) }, u.default.createElement("div", { className: "hero-overlay" }), u.default.createElement(tu, { className: "hero", src: r == null ? void 0 : r.url, alt: r == null ? void 0 : r.altText, "data-testid": "hero-image" }), p, o && u.default.createElement("div", { "data-testid": "hero-content", className: we()("content", { [d[s]]: s }) }, o.map((g, m) => u.default.createElement("p", { key: `content-${m}` }, g.text))));
  }(e), "story-hero": () => function({ image: r, title: n, contents: a }) {
    return console.log({ image: r, title: n, contents: a }), u.default.createElement("div", null, "TODO: to be implemented");
  }(e), undefined: () => (console.error(`the type '${t}' is not supported by the 'Hero' component.`), null) }[t]();
};
Va.propTypes = { type: l().oneOf(["heading-hero", "story-hero"]), image: Hl, title: Vn, subTitle: Vn, contents: l().arrayOf(Vn), contentsColor: l().string };
const wt = ({ dataId: e, isClickeable: t, disabled: r, pageLinkIcon: n, selectedPage: a, onClick: o, ellipses: s, ariaLabel: c, children: d, ariaDisabled: p }) => u.default.createElement("li", { className: we()("page-item", { disabled: r, active: a, elipses: s }) }, t ? u.default.createElement("button", { type: "button", "aria-label": c, className: we()("page-link", { "page-link-icon": n }), onClick: o, "data-testid": "page-link", "data-id": e, "aria-current": a ? "page" : null, "aria-disabled": p }, d, a && u.default.createElement("span", { className: "visually-hidden" }, "(current)")) : u.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, d));
wt.propTypes = { isClickeable: l().bool, disabled: l().bool, pageLinkIcon: l().bool, selectedPage: l().bool, dataId: l().string, onClick: l().func, children: l().node, ellipses: l().bool, ariaLabel: l().string, ariaDisabled: l().bool }, wt.defaultProps = { isClickeable: !1, disabled: !1, pageLinkIcon: !1, selectedPage: !1, onClick: () => {
} };
const ru = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, En = ({ type: e, background: t, currentPage: r, totalPages: n, onChange: a }) => {
  const [o, s] = (0, u.useState)(null);
  (0, u.useEffect)(() => {
    s(r);
  }, [r]);
  const c = (d, p) => {
    const g = { first: 1, prev: o === 1 ? 1 : o - 1, next: o === n ? n : o + 1, last: n }[p] ?? p;
    s(g), ((m) => {
      rt({ ...ru, text: `page ${m}` });
    })(g), a == null || a(d, g);
  };
  return u.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, u.default.createElement("ul", { className: we()("pagination", "justify-content-center", "pt-2", "pb-2", { border: e === "bordered", "uds-bg-gray1": t === "gray1", "uds-bg-gray": t === "gray2", "uds-bg-dark": t === "gray7" }) }, u.default.createElement(wt, { dataId: "prev", isClickeable: !0, disabled: o === 1, pageLinkIcon: !0, onClick: (d) => c(d, "prev"), ariaDisabled: o === 1, ariaLabel: "Previous Page" }), (() => {
    const d = Io(o === n - 1, 2, o === n ? 3 : 1), p = Io(o === 1, 3, o === 2 ? 2 : 1), g = [...Do(o - d, o, n), ...Do(o, o + 1 + p, n)];
    return u.default.createElement(u.default.Fragment, null, g[0] !== 1 && u.default.createElement(wt, { ariaLabel: `Page 1 of ${n}`, isClickeable: !0, selectedPage: o === 1, onClick: (m) => c(m, "first") }, "1"), g[0] > 2 && u.default.createElement(wt, { ellipses: !0 }, "..."), g.map((m) => u.default.createElement(wt, { ariaLabel: `Page ${m} of ${n}`, isClickeable: !0, key: m, selectedPage: o === m, onClick: (f) => c(f, m) }, m)), g[g.length - 1] < n - 1 && u.default.createElement(wt, { ellipses: !0 }, "..."), g[g.length - 1] !== n && u.default.createElement(wt, { isClickeable: !0, ariaLabel: `Page ${n} of ${n}`, selectedPage: o === n, onClick: (m) => c(m, "last") }, n));
  })(), u.default.createElement(wt, { dataId: "next", isClickeable: !0, ariaDisabled: o === n, disabled: o === n, pageLinkIcon: !0, onClick: (d) => c(d, "next"), ariaLabel: "Next Page" })));
};
En.propTypes = { type: l().oneOf(["default", "bordered"]).isRequired, background: l().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: l().number, totalPages: l().number, onChange: l().func.isRequired }, En.defaultProps = { currentPage: 1, totalPages: 10 };
const Qo = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Gt = (e) => e === "small", Ji = ({ size: e, image: t, imageAlt: r }) => Gt(e) ? u.default.createElement("div", { className: "image-wrapper" }, u.default.createElement(Kt, { src: t, alt: r, fetchPriority: "high" })) : u.default.createElement(Kt, { src: t, alt: r, fetchPriority: "high" });
Ji.propTypes = { size: l().oneOf(["small", "large"]), image: l().string.isRequired, imageAlt: l().string.isRequired };
const Qi = ({ heading: e, citation: t }) => u.default.createElement("div", { className: "citation" }, u.default.createElement("h4", null, e), u.default.createElement("p", null, "— ", t));
Qi.propTypes = { heading: l().string.isRequired, citation: l().string.isRequired };
const es = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [a, o] = (0, u.useState)(!1), s = `info-layer-${Math.floor(1e5 * Math.random())}`, c = (d) => {
    d.type !== "click" && d.key !== "Enter" && d.key !== " " || (o(!a), rt({ ...Qo, text: "Expand ranking", action: a ? "open" : "close", section: r }));
  };
  return u.default.createElement("div", { className: we()("info-layer", { active: a }), "data-testid": "info-layer", id: s }, u.default.createElement("div", { className: "content" }, u.default.createElement("div", { className: we()("header", { closed: Gt(e) && !a }) }, Gt(e) && u.default.createElement("p", { dangerouslySetInnerHTML: it(t) }), !Gt(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: c, className: "btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": s }, u.default.createElement("h4", null, r), u.default.createElement("i", { className: "fas fa-chevron-up" }))), Gt(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: c, className: "btn btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": s }, u.default.createElement("i", { className: "fas fa-chevron-up" })))), !Gt(e) && u.default.createElement("p", { dangerouslySetInnerHTML: it(t) }), n && u.default.createElement("a", { href: n, "aria-label": "Read more", className: "read-more", onClick: () => {
    rt({ ...Qo, section: r, text: "read more" });
  } }, "Read more ", u.default.createElement("span", { className: "visually-hidden" }, r), u.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
};
es.propTypes = { imageSize: l().oneOf(["small", "large"]), body: l().string.isRequired, heading: l().string.isRequired, readMoreLink: l().string };
const Ya = ({ imageSize: e = "large", image: t, imageAlt: r, heading: n, body: a, readMoreLink: o = "", citation: s }) => u.default.createElement("div", { className: we()("card-ranking", { "large-image": e === "large", "small-image": e === "small" }) }, u.default.createElement(Ji, { size: e, image: t, imageAlt: r }), Gt(e) && u.default.createElement(Qi, { heading: n, citation: s }), u.default.createElement(es, { imageSize: e, body: a, heading: n, readMoreLink: o }));
Ya.propTypes = { imageSize: l().oneOf(["small", "large"]).isRequired, image: l().string.isRequired, imageAlt: l().string.isRequired, heading: l().string.isRequired, body: l().string.isRequired, readMoreLink: l().string, citation: l().string };
const nu = At.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, ts = ({ hidePrev: e, hideNext: t, clickPrev: r, clickNext: n }) => u.default.createElement(nu, null, !e && u.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: r, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Previous")), !t && u.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: n, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Next")));
ts.propTypes = { hidePrev: l().bool, hideNext: l().bool, clickPrev: l().func.isRequired, clickNext: l().func.isRequired };
const rs = (0, u.forwardRef)(function(e, t) {
  const { id: r, selected: n, title: a, selectTab: o, leftKeyPressed: s, rightKeyPressed: c, icon: d } = e, p = (0, u.useRef)(null);
  return (0, u.useImperativeHandle)(t, () => ({ focus() {
    p.current.focus();
  }, scrollIntoView() {
    var f, E, S, T, k, N, A;
    const g = ((f = p.current) == null ? void 0 : f.offsetWidth) / 2 + p.current.offsetLeft, m = ((S = (E = p.current) == null ? void 0 : E.offsetParent) == null ? void 0 : S.scrollLeft) + ((k = (T = p.current) == null ? void 0 : T.offsetParent) == null ? void 0 : k.offsetWidth) / 2;
    (A = (N = p.current) == null ? void 0 : N.offsetParent) == null || A.scrollBy({ left: g - m });
  } }), []), u.default.createElement("a", { ref: p, className: "nav-item nav-link " + (n ? "active" : ""), id: r, href: `#nav-${r}`, role: "tab", "aria-controls": `nav-${r}`, "aria-selected": n, onClick: (g) => o(g, r, a), onKeyDown: (g) => {
    g.keyCode === 37 ? (g.preventDefault(), s()) : g.keyCode === 39 && (g.preventDefault(), c());
  }, tabIndex: n ? "" : "-1" }, a, " ", d && u.default.createElement("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }));
});
rs.propTypes = { id: l().string.isRequired, selected: l().bool.isRequired, title: l().string.isRequired, selectTab: l().func.isRequired, leftKeyPressed: l().func.isRequired, rightKeyPressed: l().func.isRequired, icon: l().arrayOf(l().string) };
const ns = ({ id: e, bgColor: t, selected: r, children: n }) => r && u.default.createElement("div", { className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`, id: `nav-${e}`, role: "tabpanel", "aria-labelledby": `nav-${e}-tab` }, n);
ns.propTypes = { id: l().string.isRequired, bgColor: l().string, selected: l().bool, children: l().oneOfType([l().array, l().element]) };
const as = ({ initialTab: e = "", children: t, bgColor: r = "", onTabChange: n = () => {
} }) => {
  const a = u.default.Children.toArray(t), o = (0, u.useRef)(!1), [s, c] = (0, u.useState)(e && e !== "null" ? e : a[0].props.id), d = (0, u.useRef)(null), [p, g] = function() {
    const _ = (0, u.useRef)({}), j = (0, u.useCallback)((z) => (ie) => {
      _.current[z] = ie;
    }, []);
    return [_, j];
  }(), m = (_) => {
    var j;
    n(_), (j = p.current[_]) == null || j.focus(), c(_);
  }, [f, E] = (0, u.useState)(0), [S, T] = (0, u.useState)();
  (0, u.useEffect)(() => {
    const _ = () => {
      E(d.current.scrollLeft);
    };
    return d.current.addEventListener("scroll", _), _(), () => {
      d.current && d.current.removeEventListener("scroll", _);
    };
  }, [S]), (0, u.useEffect)(() => {
    const _ = () => {
      T(d.current.scrollWidth - d.current.offsetWidth);
    };
    return window.addEventListener("resize", _), _(), () => {
      d.current && window.removeEventListener("resize", _);
    };
  }, []), (0, u.useEffect)(() => {
    var _;
    (_ = p.current[s]) == null || _.scrollIntoView();
  }, [s]), (0, u.useEffect)(() => {
    o.current && e && e !== "null" && s !== e && c(e);
  }, [e]), (0, u.useEffect)(() => {
    o.current = !0;
  }, []);
  const k = (_) => {
    rt({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: _ });
  }, N = a.map((_) => u.default.cloneElement(_, { bgColor: r, selected: s === _.props.id })), A = (_) => {
    const j = d.current, z = j.scrollWidth - j.clientWidth;
    let ie = j.scrollLeft + 200 * _;
    ie = Math.max(0, Math.min(z, ie)), j.scrollTo({ left: ie, behavior: "smooth" });
  }, D = (_, j, z) => {
    rt({ event: "link", action: "click", name: "onclick", type: "internal link", text: z }), _.preventDefault(), m(j);
  }, I = (_ = !0) => {
    const j = a.length, z = _ ? 1 : -1, ie = a.findIndex((ee) => ee.props.id === s), he = a[(j + ie + z) % j].props.id;
    m(he);
  };
  let v = "uds-tabbed-panels";
  return r === "bg-dark" && (v += " uds-tabbed-panels-dark"), u.default.createElement("div", { className: r }, u.default.createElement("nav", { className: v }, u.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: d }, a.map((_, j) => u.default.createElement(rs, { ref: g(_.props.id), id: _.props.id, title: _.props.title, selected: s === _.props.id, selectTab: D, key: _.props.id, leftKeyPressed: () => I(!1), rightKeyPressed: () => I(), icon: _.props.icon, index: j }))), u.default.createElement(ts, { hidePrev: f <= 0, hideNext: f >= S, clickPrev: () => {
    A(-1), k("left chevron");
  }, clickNext: () => {
    A(1), k("right chevron");
  } })), u.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, N));
};
as.propTypes = { initialTab: l().string, children: l().arrayOf(l().element).isRequired, bgColor: l().string, onTabChange: l().func };
const Ka = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, o;
  return u.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${ln(n.containerCssClass)}` }, e && u.default.createElement(Kt, { src: e, alt: t, dataTestId: "testimonial-image", fetchPriority: "high" }), u.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, u.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), u.default.createElement("blockquote", { style: { paddingLeft: 0 } }, r.title && u.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, u.default.createElement("span", { className: ln(n.titleCssClass) }, r.title)), r.content && u.default.createElement("p", { className: ln(n.contentCssClass), "data-testid": "testimonial-content" }, r.content), (!!((a = r.cite) != null && a.name) || !!((o = r.cite) != null && o.description)) && u.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, u.default.createElement("cite", { className: "name" }, r.cite.name), r.cite && u.default.createElement("cite", { className: "description" }, r.cite.description))));
};
Ka.propTypes = { quote: l().shape({ title: l().string, content: l().string, cite: l().shape({ name: l().string, description: l().string }) }).isRequired, imageSource: l().string, imageAltText: l().string, itemStyle: l().shape({ containerCssClass: l().arrayOf(l().string), titleCssClass: l().arrayOf(l().string), contentCssClass: l().arrayOf(l().string) }) };
const au = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, Xa = (e) => {
  const { type: t = "video", url: r = "", vttUrl: n, title: a = "", caption: o, className: s, controls: c = !0 } = e;
  return t === "youtube" ? (({ title: d = "", caption: p, url: g = "", className: m }) => u.default.createElement("div", { className: we()(`uds-video-container ${m}`, { "uds-video-with-caption": p }) }, u.default.createElement("div", { className: "uds-video-player youtube-video" }, u.default.createElement("iframe", { title: d, src: g })), p && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, p))))({ url: r, title: a, caption: o, className: s }) : (({ url: d = "", vttUrl: p, caption: g, title: m = "", className: f, controls: E = !0 }) => {
    const S = (0, u.useRef)(null);
    return u.default.createElement("div", { className: we()(`uds-video-container ${f}`, { "uds-video-with-caption": g }) }, u.default.createElement("div", { className: "uds-video-player" }, u.default.createElement("video", { ref: S, title: m, onClick: () => {
      rt({ ...au, section: m });
    }, playsInline: !0, controls: E || !0 }, u.default.createElement("source", { src: d }), u.default.createElement("track", { src: p, kind: "captions", srcLang: "en", label: "english_captions" }))), g && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, g)));
  })({ url: r, vttUrl: n, title: a, caption: o, className: s, controls: c });
};
Xa.propTypes = { type: l().oneOf(["video", "youtube"]), url: l().string, vttUrl: l().string, title: l().string, className: l().string, caption: l().string, controls: l().bool };
const ou = ((e) => {
  var t = {};
  return Pe.d(t, e), t;
})({ default: () => Dl.default }), nt = (e, t, r) => {
  ou.default.render(u.default.createElement(e, t), r);
}, iu = ({ targetSelector: e, props: t }) => nt(za, t, document.querySelector(e)), su = ({ targetSelector: e, props: t }) => nt(Wa, t, document.querySelector(e)), lu = ({ targetSelector: e, props: t }) => nt(xn, t, document.querySelector(e)), cu = ({ targetSelector: e, props: t }) => nt(Et, t, document.querySelector(e)), uu = ({ targetSelector: e, props: t }) => nt(wn, t, document.querySelector(e)), du = ({ targetSelector: e, props: t }) => nt(Dr, t, document.querySelector(e)), pu = ({ targetSelector: e, props: t }) => nt(Sn, t, document.querySelector(e)), mu = ({ targetSelector: e, props: t }) => nt(Va, t, document.querySelector(e)), fu = ({ targetSelector: e, props: t }) => nt(Kt, t, document.querySelector(e)), hu = ({ targetSelector: e, props: t }) => nt(Ya, t, document.querySelector(e)), gu = ({ targetSelector: e, props: t }) => nt(En, t, document.querySelector(e)), yu = ({ targetSelector: e, props: t }) => nt(Ka, t, document.querySelector(e)), bu = ({ targetSelector: e, props: t }) => nt(Xa, t, document.querySelector(e));
var os = Mt.nD, vu = Mt.n_, Fr = Mt.$n, tt = Mt.Zp, Pn = Mt.lq, xu = Mt.dK, is = Mt.Ce, ss = { exports: {} }, ls = { exports: {} }, xe = {};
var ei;
function wu() {
  if (ei) return xe;
  ei = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function D(v) {
    if (typeof v == "object" && v !== null) {
      var _ = v.$$typeof;
      switch (_) {
        case t:
          switch (v = v.type, v) {
            case d:
            case p:
            case n:
            case o:
            case a:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case g:
                case S:
                case E:
                case s:
                  return v;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function I(v) {
    return D(v) === p;
  }
  return xe.AsyncMode = d, xe.ConcurrentMode = p, xe.ContextConsumer = c, xe.ContextProvider = s, xe.Element = t, xe.ForwardRef = g, xe.Fragment = n, xe.Lazy = S, xe.Memo = E, xe.Portal = r, xe.Profiler = o, xe.StrictMode = a, xe.Suspense = m, xe.isAsyncMode = function(v) {
    return I(v) || D(v) === d;
  }, xe.isConcurrentMode = I, xe.isContextConsumer = function(v) {
    return D(v) === c;
  }, xe.isContextProvider = function(v) {
    return D(v) === s;
  }, xe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, xe.isForwardRef = function(v) {
    return D(v) === g;
  }, xe.isFragment = function(v) {
    return D(v) === n;
  }, xe.isLazy = function(v) {
    return D(v) === S;
  }, xe.isMemo = function(v) {
    return D(v) === E;
  }, xe.isPortal = function(v) {
    return D(v) === r;
  }, xe.isProfiler = function(v) {
    return D(v) === o;
  }, xe.isStrictMode = function(v) {
    return D(v) === a;
  }, xe.isSuspense = function(v) {
    return D(v) === m;
  }, xe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === p || v === o || v === a || v === m || v === f || typeof v == "object" && v !== null && (v.$$typeof === S || v.$$typeof === E || v.$$typeof === s || v.$$typeof === c || v.$$typeof === g || v.$$typeof === k || v.$$typeof === N || v.$$typeof === A || v.$$typeof === T);
  }, xe.typeOf = D, xe;
}
ls.exports = wu();
var Ln = ls.exports, Zn, ti;
function Su() {
  if (ti) return Zn;
  ti = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zn = e, Zn;
}
var Jn, ri;
function Tu() {
  if (ri) return Jn;
  ri = 1;
  var e = Su();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Jn = function() {
    function n(s, c, d, p, g, m) {
      if (m !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
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
    return o.PropTypes = o, o;
  }, Jn;
}
ss.exports = Tu()();
var dn = ss.exports;
const h = /* @__PURE__ */ Ua(dn);
function Eu(e) {
  function t(R, C, x, P, y) {
    for (var L = 0, O = 0, ae = 0, re = 0, V, K, oe = 0, fe = 0, le, ce = le = V = 0, Q = 0, pe = 0, $e = 0, q = 0, $ = x.length, Y = $ - 1, U, F = "", de = "", Ae = "", qe = "", He; Q < $; ) {
      if (K = x.charCodeAt(Q), Q === Y && O + re + ae + L !== 0 && (O !== 0 && (K = O === 47 ? 10 : 47), re = ae = L = 0, $++, Y++), O + re + ae + L === 0) {
        if (Q === Y && (0 < pe && (F = F.replace(f, "")), 0 < F.trim().length)) {
          switch (K) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              F += x.charAt(Q);
          }
          K = 59;
        }
        switch (K) {
          case 123:
            for (F = F.trim(), V = F.charCodeAt(0), le = 1, q = ++Q; Q < $; ) {
              switch (K = x.charCodeAt(Q)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch (K = x.charCodeAt(Q + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ce = Q + 1; ce < Y; ++ce)
                          switch (x.charCodeAt(ce)) {
                            case 47:
                              if (K === 42 && x.charCodeAt(ce - 1) === 42 && Q + 2 !== ce) {
                                Q = ce + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (K === 47) {
                                Q = ce + 1;
                                break e;
                              }
                          }
                        Q = ce;
                      }
                  }
                  break;
                case 91:
                  K++;
                case 40:
                  K++;
                case 34:
                case 39:
                  for (; Q++ < Y && x.charCodeAt(Q) !== K; )
                    ;
              }
              if (le === 0) break;
              Q++;
            }
            switch (le = x.substring(q, Q), V === 0 && (V = (F = F.replace(m, "").trim()).charCodeAt(0)), V) {
              case 64:
                switch (0 < pe && (F = F.replace(f, "")), K = F.charCodeAt(1), K) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    pe = C;
                    break;
                  default:
                    pe = Se;
                }
                if (le = t(C, pe, le, K, y + 1), q = le.length, 0 < be && (pe = r(Se, F, $e), He = c(3, le, pe, C, ne, Z, q, K, y, P), F = pe.join(""), He !== void 0 && (q = (le = He.trim()).length) === 0 && (K = 0, le = "")), 0 < q) switch (K) {
                  case 115:
                    F = F.replace(_, s);
                  case 100:
                  case 109:
                  case 45:
                    le = F + "{" + le + "}";
                    break;
                  case 107:
                    F = F.replace(A, "$1 $2"), le = F + "{" + le + "}", le = ue === 1 || ue === 2 && o("@" + le, 3) ? "@-webkit-" + le + "@" + le : "@" + le;
                    break;
                  default:
                    le = F + le, P === 112 && (le = (de += le, ""));
                }
                else le = "";
                break;
              default:
                le = t(C, r(C, F, $e), le, P, y + 1);
            }
            Ae += le, le = $e = pe = ce = V = 0, F = "", K = x.charCodeAt(++Q);
            break;
          case 125:
          case 59:
            if (F = (0 < pe ? F.replace(f, "") : F).trim(), 1 < (q = F.length)) switch (ce === 0 && (V = F.charCodeAt(0), V === 45 || 96 < V && 123 > V) && (q = (F = F.replace(" ", ":")).length), 0 < be && (He = c(1, F, C, R, ne, Z, de.length, P, y, P)) !== void 0 && (q = (F = He.trim()).length) === 0 && (F = "\0\0"), V = F.charCodeAt(0), K = F.charCodeAt(1), V) {
              case 0:
                break;
              case 64:
                if (K === 105 || K === 99) {
                  qe += F + x.charAt(Q);
                  break;
                }
              default:
                F.charCodeAt(q - 1) !== 58 && (de += a(F, V, K, F.charCodeAt(2)));
            }
            $e = pe = ce = V = 0, F = "", K = x.charCodeAt(++Q);
        }
      }
      switch (K) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + V === 0 && P !== 107 && 0 < F.length && (pe = 1, F += "\0"), 0 < be * J && c(0, F, C, R, ne, Z, de.length, P, y, P), Z = 1, ne++;
          break;
        case 59:
        case 125:
          if (O + re + ae + L === 0) {
            Z++;
            break;
          }
        default:
          switch (Z++, U = x.charAt(Q), K) {
            case 9:
            case 32:
              if (re + L + O === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  U = "";
                  break;
                default:
                  K !== 32 && (U = " ");
              }
              break;
            case 0:
              U = "\\0";
              break;
            case 12:
              U = "\\f";
              break;
            case 11:
              U = "\\v";
              break;
            case 38:
              re + O + L === 0 && (pe = $e = 1, U = "\f" + U);
              break;
            case 108:
              if (re + O + L + G === 0 && 0 < ce) switch (Q - ce) {
                case 2:
                  oe === 112 && x.charCodeAt(Q - 3) === 58 && (G = oe);
                case 8:
                  fe === 111 && (G = fe);
              }
              break;
            case 58:
              re + O + L === 0 && (ce = Q);
              break;
            case 44:
              O + ae + re + L === 0 && (pe = 1, U += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (re = re === K ? 0 : re === 0 ? K : re);
              break;
            case 91:
              re + O + ae === 0 && L++;
              break;
            case 93:
              re + O + ae === 0 && L--;
              break;
            case 41:
              re + O + L === 0 && ae--;
              break;
            case 40:
              if (re + O + L === 0) {
                if (V === 0) switch (2 * oe + 3 * fe) {
                  case 533:
                    break;
                  default:
                    V = 1;
                }
                ae++;
              }
              break;
            case 64:
              O + ae + re + L + ce + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + L + ae)) switch (O) {
                case 0:
                  switch (2 * K + 3 * x.charCodeAt(Q + 1)) {
                    case 235:
                      O = 47;
                      break;
                    case 220:
                      q = Q, O = 42;
                  }
                  break;
                case 42:
                  K === 47 && oe === 42 && q + 2 !== Q && (x.charCodeAt(q + 2) === 33 && (de += x.substring(q, Q + 1)), U = "", O = 0);
              }
          }
          O === 0 && (F += U);
      }
      fe = oe, oe = K, Q++;
    }
    if (q = de.length, 0 < q) {
      if (pe = C, 0 < be && (He = c(2, de, pe, R, ne, Z, q, P, y, P), He !== void 0 && (de = He).length === 0)) return qe + de + Ae;
      if (de = pe.join(",") + "{" + de + "}", ue * G !== 0) {
        switch (ue !== 2 || o(de, 2) || (G = 0), G) {
          case 111:
            de = de.replace(I, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(D, "::-webkit-input-$1") + de.replace(D, "::-moz-$1") + de.replace(D, ":-ms-input-$1") + de;
        }
        G = 0;
      }
    }
    return qe + de + Ae;
  }
  function r(R, C, x) {
    var P = C.trim().split(k);
    C = P;
    var y = P.length, L = R.length;
    switch (L) {
      case 0:
      case 1:
        var O = 0;
        for (R = L === 0 ? "" : R[0] + " "; O < y; ++O)
          C[O] = n(R, C[O], x).trim();
        break;
      default:
        var ae = O = 0;
        for (C = []; O < y; ++O)
          for (var re = 0; re < L; ++re)
            C[ae++] = n(R[re] + " ", P[O], x).trim();
    }
    return C;
  }
  function n(R, C, x) {
    var P = C.charCodeAt(0);
    switch (33 > P && (P = (C = C.trim()).charCodeAt(0)), P) {
      case 38:
        return C.replace(N, "$1" + R.trim());
      case 58:
        return R.trim() + C.replace(N, "$1" + R.trim());
      default:
        if (0 < 1 * x && 0 < C.indexOf("\f")) return C.replace(N, (R.charCodeAt(0) === 58 ? "" : "$1") + R.trim());
    }
    return R + C;
  }
  function a(R, C, x, P) {
    var y = R + ";", L = 2 * C + 3 * x + 4 * P;
    if (L === 944) {
      R = y.indexOf(":", 9) + 1;
      var O = y.substring(R, y.length - 1).trim();
      return O = y.substring(0, R).trim() + O + ";", ue === 1 || ue === 2 && o(O, 1) ? "-webkit-" + O + O : O;
    }
    if (ue === 0 || ue === 2 && !o(y, 1)) return y;
    switch (L) {
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
        if (0 < y.indexOf("image-set(", 11)) return y.replace(ee, "$1-webkit-$2") + y;
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
        return O = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + y + "-ms-flex-pack" + O + y;
      case 1005:
        return S.test(y) ? y.replace(E, ":-webkit-") + y.replace(E, ":-moz-") + y : y;
      case 1e3:
        switch (O = y.substring(13).trim(), C = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(C)) {
          case 226:
            O = y.replace(v, "tb");
            break;
          case 232:
            O = y.replace(v, "tb-rl");
            break;
          case 220:
            O = y.replace(v, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + O + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (y = R).length - 10, O = (y.charCodeAt(C) === 33 ? y.substring(0, C) : y).substring(R.indexOf(":", 7) + 1).trim(), L = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8)) break;
          case 115:
            y = y.replace(O, "-webkit-" + O) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(O, "-webkit-" + (102 < L ? "inline-" : "") + "box") + ";" + y.replace(O, "-webkit-" + O) + ";" + y.replace(O, "-ms-" + O + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return O = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + O + "-ms-flex-" + O + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(z, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(z, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (he.test(R) === !0) return (O = R.substring(R.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(R.replace("stretch", "fill-available"), C, x, P).replace(":fill-available", ":stretch") : y.replace(O, "-webkit-" + O) + y.replace(O, "-moz-" + O.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, x + P === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(T, "$1-webkit-$2") + y;
    }
    return y;
  }
  function o(R, C) {
    var x = R.indexOf(C === 1 ? ":" : "{"), P = R.substring(0, C !== 3 ? x : 10);
    return x = R.substring(x + 1, R.length - 1), Ee(C !== 2 ? P : P.replace(ie, "$1"), x, C);
  }
  function s(R, C) {
    var x = a(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return x !== C + ";" ? x.replace(j, " or ($1)").substring(4) : "(" + C + ")";
  }
  function c(R, C, x, P, y, L, O, ae, re, V) {
    for (var K = 0, oe = C, fe; K < be; ++K)
      switch (fe = se[K].call(g, R, oe, x, P, y, L, O, ae, re, V)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = fe;
      }
    if (oe !== C) return oe;
  }
  function d(R) {
    switch (R) {
      case void 0:
      case null:
        be = se.length = 0;
        break;
      default:
        if (typeof R == "function") se[be++] = R;
        else if (typeof R == "object") for (var C = 0, x = R.length; C < x; ++C)
          d(R[C]);
        else J = !!R | 0;
    }
    return d;
  }
  function p(R) {
    return R = R.prefix, R !== void 0 && (Ee = null, R ? typeof R != "function" ? ue = 1 : (ue = 2, Ee = R) : ue = 0), p;
  }
  function g(R, C) {
    var x = R;
    if (33 > x.charCodeAt(0) && (x = x.trim()), H = x, x = [H], 0 < be) {
      var P = c(-1, C, x, x, ne, Z, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (C = P);
    }
    var y = t(Se, x, C, 0, 0);
    return 0 < be && (P = c(-2, y, x, x, ne, Z, y.length, 0, 0, 0), P !== void 0 && (y = P)), H = "", G = 0, Z = ne = 1, y;
  }
  var m = /^\0+/g, f = /[\0\r\f]/g, E = /: */g, S = /zoo|gra/, T = /([,: ])(transform)/g, k = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, A = /@(k\w+)\s*(\S*)\s*/, D = /::(place)/g, I = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, _ = /\(\s*(.*)\s*\)/g, j = /([\s\S]*?);/g, z = /-self|flex-/g, ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, he = /stretch|:\s*\w+\-(?:conte|avail)/, ee = /([^-])(image-set\()/, Z = 1, ne = 1, G = 0, ue = 1, Se = [], se = [], be = 0, Ee = null, J = 0, H = "";
  return g.use = d, g.set = p, e !== void 0 && p(e), g;
}
var ku = {
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
function Au(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Nu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ni = /* @__PURE__ */ Au(
  function(e) {
    return Nu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Za = Ln, Cu = {
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
}, Ou = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ju = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, cs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ja = {};
Ja[Za.ForwardRef] = ju;
Ja[Za.Memo] = cs;
function ai(e) {
  return Za.isMemo(e) ? cs : Ja[e.$$typeof] || Cu;
}
var Ru = Object.defineProperty, _u = Object.getOwnPropertyNames, oi = Object.getOwnPropertySymbols, Pu = Object.getOwnPropertyDescriptor, Lu = Object.getPrototypeOf, ii = Object.prototype;
function us(e, t, r) {
  if (typeof t != "string") {
    if (ii) {
      var n = Lu(t);
      n && n !== ii && us(e, n, r);
    }
    var a = _u(t);
    oi && (a = a.concat(oi(t)));
    for (var o = ai(e), s = ai(t), c = 0; c < a.length; ++c) {
      var d = a[c];
      if (!Ou[d] && !(r && r[d]) && !(s && s[d]) && !(o && o[d])) {
        var p = Pu(t, d);
        try {
          Ru(e, d, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var Iu = us;
const Du = /* @__PURE__ */ Ua(Iu);
var ye = { env: { NODE_ENV: "production" } };
function ft() {
  return (ft = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var si = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ka = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ln.typeOf(e);
}, kn = Object.freeze([]), Lt = Object.freeze({});
function Mr(e) {
  return typeof e == "function";
}
function Aa(e) {
  return ye.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Qa(e) {
  return e && typeof e.styledComponentId == "string";
}
var lr = typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_ATTR || ye.env.SC_ATTR) || "data-styled", eo = typeof window < "u" && "HTMLElement" in window, Mu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ye.env.REACT_APP_SC_DISABLE_SPEEDY : ye.env.SC_DISABLE_SPEEDY !== void 0 && ye.env.SC_DISABLE_SPEEDY !== "" ? ye.env.SC_DISABLE_SPEEDY !== "false" && ye.env.SC_DISABLE_SPEEDY : ye.env.NODE_ENV !== "production")), $u = {}, Fu = ye.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Uu() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function dr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw ye.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Uu.apply(void 0, [Fu[e]].concat(r)).trim());
}
var zu = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, s = o; r >= s; ) (s <<= 1) < 0 && dr(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = o; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(r + 1), p = 0, g = n.length; p < g; p++) this.tag.insertRule(d, n[p]) && (this.groupSizes[r]++, d++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), o = a + n;
      this.groupSizes[r] = 0;
      for (var s = a; s < o; s++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], o = this.indexOfGroup(r), s = o + a, c = o; c < s; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), pn = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), Lr = 1, rn = function(e) {
  if (pn.has(e)) return pn.get(e);
  for (; An.has(Lr); ) Lr++;
  var t = Lr++;
  return ye.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && dr(16, "" + t), pn.set(e, t), An.set(t, e), t;
}, Hu = function(e) {
  return An.get(e);
}, qu = function(e, t) {
  t >= Lr && (Lr = t + 1), pn.set(e, t), An.set(t, e);
}, Wu = "style[" + lr + '][data-styled-version="5.3.11"]', Gu = new RegExp("^" + lr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Bu = function(e, t, r) {
  for (var n, a = r.split(","), o = 0, s = a.length; o < s; o++) (n = a[o]) && e.registerName(t, n);
}, Vu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, o = r.length; a < o; a++) {
    var s = r[a].trim();
    if (s) {
      var c = s.match(Gu);
      if (c) {
        var d = 0 | parseInt(c[1], 10), p = c[2];
        d !== 0 && (qu(p, d), Bu(e, p, c[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, Yu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ds = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(c) {
    for (var d = c.childNodes, p = d.length; p >= 0; p--) {
      var g = d[p];
      if (g && g.nodeType === 1 && g.hasAttribute(lr)) return g;
    }
  }(r), o = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(lr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = Yu();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, o), n;
}, Ku = function() {
  function e(r) {
    var n = this.element = ds(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var o = document.styleSheets, s = 0, c = o.length; s < c; s++) {
        var d = o[s];
        if (d.ownerNode === a) return d;
      }
      dr(17);
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
}(), Xu = function() {
  function e(r) {
    var n = this.element = ds(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(a, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Zu = function() {
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
}(), li = eo, Ju = { isServer: !eo, useCSSOMInjection: !Mu }, Nn = function() {
  function e(r, n, a) {
    r === void 0 && (r = Lt), n === void 0 && (n = {}), this.options = ft({}, Ju, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && eo && li && (li = !1, function(o) {
      for (var s = document.querySelectorAll(Wu), c = 0, d = s.length; c < d; c++) {
        var p = s[c];
        p && p.getAttribute(lr) !== "active" && (Vu(o, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return rn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(ft({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, o = n.useCSSOMInjection, s = n.target, r = a ? new Zu(s) : o ? new Ku(s) : new Xu(s), new zu(r)));
    var r, n, a, o, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (rn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(rn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(rn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, o = "", s = 0; s < a; s++) {
        var c = Hu(s);
        if (c !== void 0) {
          var d = r.names.get(c), p = n.getGroup(s);
          if (d && p && d.size) {
            var g = lr + ".g" + s + '[id="' + c + '"]', m = "";
            d !== void 0 && d.forEach(function(f) {
              f.length > 0 && (m += f + ",");
            }), o += "" + p + g + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), Qu = /(a)(d)/gi, ci = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Na(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ci(t % 52) + r;
  return (ci(t % 52) + r).replace(Qu, "$1-$2");
}
var Bt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, ps = function(e) {
  return Bt(5381, e);
};
function ms(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Mr(r) && !Qa(r)) return !1;
  }
  return !0;
}
var ed = ps("5.3.11"), td = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = ye.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && ms(t), this.componentId = r, this.baseHash = Bt(ed, r), this.baseStyle = n, Nn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) o.push(this.staticRulesId);
    else {
      var s = Xt(this.rules, t, r, n).join(""), c = Na(Bt(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(a, c)) {
        var d = n(s, "." + c, void 0, a);
        r.insertRules(a, c, d);
      }
      o.push(c), this.staticRulesId = c;
    }
    else {
      for (var p = this.rules.length, g = Bt(this.baseHash, n.hash), m = "", f = 0; f < p; f++) {
        var E = this.rules[f];
        if (typeof E == "string") m += E, ye.env.NODE_ENV !== "production" && (g = Bt(g, E + f));
        else if (E) {
          var S = Xt(E, t, r, n), T = Array.isArray(S) ? S.join("") : S;
          g = Bt(g, T + f), m += T;
        }
      }
      if (m) {
        var k = Na(g >>> 0);
        if (!r.hasNameForId(a, k)) {
          var N = n(m, "." + k, void 0, a);
          r.insertRules(a, k, N);
        }
        o.push(k);
      }
    }
    return o.join(" ");
  }, e;
}(), rd = /^\s*\/\/.*$/gm, nd = [":", "[", ".", "#"];
function ad(e) {
  var t, r, n, a, o = Lt, s = o.options, c = s === void 0 ? Lt : s, d = o.plugins, p = d === void 0 ? kn : d, g = new Eu(c), m = [], f = /* @__PURE__ */ function(T) {
    function k(N) {
      if (N) try {
        T(N + "}");
      } catch {
      }
    }
    return function(N, A, D, I, v, _, j, z, ie, he) {
      switch (N) {
        case 1:
          if (ie === 0 && A.charCodeAt(0) === 64) return T(A + ";"), "";
          break;
        case 2:
          if (z === 0) return A + "/*|*/";
          break;
        case 3:
          switch (z) {
            case 102:
            case 112:
              return T(D[0] + A), "";
            default:
              return A + (he === 0 ? "/*|*/" : "");
          }
        case -2:
          A.split("/*|*/}").forEach(k);
      }
    };
  }(function(T) {
    m.push(T);
  }), E = function(T, k, N) {
    return k === 0 && nd.indexOf(N[r.length]) !== -1 || N.match(a) ? T : "." + t;
  };
  function S(T, k, N, A) {
    A === void 0 && (A = "&");
    var D = T.replace(rd, ""), I = k && N ? N + " " + k + " { " + D + " }" : D;
    return t = A, r = k, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), g(N || !k ? "" : k, I);
  }
  return g.use([].concat(p, [function(T, k, N) {
    T === 2 && N.length && N[0].lastIndexOf(r) > 0 && (N[0] = N[0].replace(n, E));
  }, f, function(T) {
    if (T === -2) {
      var k = m;
      return m = [], k;
    }
  }])), S.hash = p.length ? p.reduce(function(T, k) {
    return k.name || dr(15), Bt(T, k.name);
  }, 5381).toString() : "", S;
}
var fs = ht.createContext();
fs.Consumer;
var hs = ht.createContext(), od = (hs.Consumer, new Nn()), Ca = ad();
function gs() {
  return kt(fs) || od;
}
function ys() {
  return kt(hs) || Ca;
}
var id = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, o) {
      o === void 0 && (o = Ca);
      var s = n.name + o.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, o(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return dr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ca), this.name + t.hash;
  }, e;
}(), sd = /([A-Z])/, ld = /([A-Z])/g, cd = /^ms-/, ud = function(e) {
  return "-" + e.toLowerCase();
};
function ui(e) {
  return sd.test(e) ? e.replace(ld, ud).replace(cd, "-ms-") : e;
}
var di = function(e) {
  return e == null || e === !1 || e === "";
};
function Xt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, o = [], s = 0, c = e.length; s < c; s += 1) (a = Xt(e[s], t, r, n)) !== "" && (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
    return o;
  }
  if (di(e)) return "";
  if (Qa(e)) return "." + e.styledComponentId;
  if (Mr(e)) {
    if (typeof (p = e) != "function" || p.prototype && p.prototype.isReactComponent || !t) return e;
    var d = e(t);
    return ye.env.NODE_ENV !== "production" && Ln.isElement(d) && console.warn(Aa(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Xt(d, t, r, n);
  }
  var p;
  return e instanceof id ? r ? (e.inject(r, n), e.getName(n)) : e : ka(e) ? function g(m, f) {
    var E, S, T = [];
    for (var k in m) m.hasOwnProperty(k) && !di(m[k]) && (Array.isArray(m[k]) && m[k].isCss || Mr(m[k]) ? T.push(ui(k) + ":", m[k], ";") : ka(m[k]) ? T.push.apply(T, g(m[k], k)) : T.push(ui(k) + ": " + (E = k, (S = m[k]) == null || typeof S == "boolean" || S === "" ? "" : typeof S != "number" || S === 0 || E in ku || E.startsWith("--") ? String(S).trim() : S + "px") + ";"));
    return f ? [f + " {"].concat(T, ["}"]) : T;
  }(e) : e.toString();
}
var pi = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function to(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Mr(e) || ka(e) ? pi(Xt(si(kn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : pi(Xt(si(e, r)));
}
var mi = /invalid hook call/i, nn = /* @__PURE__ */ new Set(), bs = function(e, t) {
  if (ye.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(o) {
        if (mi.test(o)) a = !1, nn.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++) c[d - 1] = arguments[d];
          n.apply(void 0, [o].concat(c));
        }
      }, hn(), a && !nn.has(r) && (console.warn(r), nn.add(r));
    } catch (o) {
      mi.test(o.message) && nn.delete(r);
    } finally {
      console.error = n;
    }
  }
}, vs = function(e, t, r) {
  return r === void 0 && (r = Lt), e.theme !== r.theme && e.theme || t || r.theme;
}, dd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, pd = /(^-|-$)/g;
function Qn(e) {
  return e.replace(dd, "-").replace(pd, "");
}
var xs = function(e) {
  return Na(ps(e) >>> 0);
};
function an(e) {
  return typeof e == "string" && (ye.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Oa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, md = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function fd(e, t, r) {
  var n = e[r];
  Oa(t) && Oa(n) ? ws(n, t) : e[r] = t;
}
function ws(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, o = r; a < o.length; a++) {
    var s = o[a];
    if (Oa(s)) for (var c in s) md(c) && fd(e, s[c], c);
  }
  return e;
}
var ro = ht.createContext();
ro.Consumer;
var ea = {};
function Ss(e, t, r) {
  var n = Qa(e), a = !an(e), o = t.attrs, s = o === void 0 ? kn : o, c = t.componentId, d = c === void 0 ? function(A, D) {
    var I = typeof A != "string" ? "sc" : Qn(A);
    ea[I] = (ea[I] || 0) + 1;
    var v = I + "-" + xs("5.3.11" + I + ea[I]);
    return D ? D + "-" + v : v;
  }(t.displayName, t.parentComponentId) : c, p = t.displayName, g = p === void 0 ? function(A) {
    return an(A) ? "styled." + A : "Styled(" + Aa(A) + ")";
  }(e) : p, m = t.displayName && t.componentId ? Qn(t.displayName) + "-" + t.componentId : t.componentId || d, f = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, E = t.shouldForwardProp;
  n && e.shouldForwardProp && (E = t.shouldForwardProp ? function(A, D, I) {
    return e.shouldForwardProp(A, D, I) && t.shouldForwardProp(A, D, I);
  } : e.shouldForwardProp);
  var S, T = new td(r, m, n ? e.componentStyle : void 0), k = T.isStatic && s.length === 0, N = function(A, D) {
    return function(I, v, _, j) {
      var z = I.attrs, ie = I.componentStyle, he = I.defaultProps, ee = I.foldedComponentIds, Z = I.shouldForwardProp, ne = I.styledComponentId, G = I.target, ue = function(P, y, L) {
        P === void 0 && (P = Lt);
        var O = ft({}, y, { theme: P }), ae = {};
        return L.forEach(function(re) {
          var V, K, oe, fe = re;
          for (V in Mr(fe) && (fe = fe(O)), fe) O[V] = ae[V] = V === "className" ? (K = ae[V], oe = fe[V], K && oe ? K + " " + oe : K || oe) : fe[V];
        }), [O, ae];
      }(vs(v, kt(ro), he) || Lt, v, z), Se = ue[0], se = ue[1], be = function(P, y, L, O) {
        var ae = gs(), re = ys(), V = y ? P.generateAndInjectStyles(Lt, ae, re) : P.generateAndInjectStyles(L, ae, re);
        return ye.env.NODE_ENV !== "production" && !y && O && O(V), V;
      }(ie, j, Se, ye.env.NODE_ENV !== "production" ? I.warnTooManyClasses : void 0), Ee = _, J = se.$as || v.$as || se.as || v.as || G, H = an(J), R = se !== v ? ft({}, v, {}, se) : v, C = {};
      for (var x in R) x[0] !== "$" && x !== "as" && (x === "forwardedAs" ? C.as = R[x] : (Z ? Z(x, ni, J) : !H || ni(x)) && (C[x] = R[x]));
      return v.style && se.style !== v.style && (C.style = ft({}, v.style, {}, se.style)), C.className = Array.prototype.concat(ee, ne, be !== ne ? be : null, v.className, se.className).filter(Boolean).join(" "), C.ref = Ee, Pl(J, C);
    }(S, A, D, k);
  };
  return N.displayName = g, (S = ht.forwardRef(N)).attrs = f, S.componentStyle = T, S.displayName = g, S.shouldForwardProp = E, S.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : kn, S.styledComponentId = m, S.target = n ? e.target : e, S.withComponent = function(A) {
    var D = t.componentId, I = function(_, j) {
      if (_ == null) return {};
      var z, ie, he = {}, ee = Object.keys(_);
      for (ie = 0; ie < ee.length; ie++) z = ee[ie], j.indexOf(z) >= 0 || (he[z] = _[z]);
      return he;
    }(t, ["componentId"]), v = D && D + "-" + (an(A) ? A : Qn(Aa(A)));
    return Ss(A, ft({}, I, { attrs: f, componentId: v }), r);
  }, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = n ? ws({}, e.defaultProps, A) : A;
  } }), ye.env.NODE_ENV !== "production" && (bs(g, m), S.warnTooManyClasses = /* @__PURE__ */ function(A, D) {
    var I = {}, v = !1;
    return function(_) {
      if (!v && (I[_] = !0, Object.keys(I).length >= 200)) {
        var j = D ? ' with the id of "' + D + '"' : "";
        console.warn("Over 200 classes were generated for component " + A + j + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, I = {};
      }
    };
  }(g, m)), Object.defineProperty(S, "toString", { value: function() {
    return "." + S.styledComponentId;
  } }), a && Du(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), S;
}
var Te = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Lt), !Ln.isValidElementType(n)) return dr(1, String(n));
    var o = function() {
      return r(n, a, to.apply(void 0, arguments));
    };
    return o.withConfig = function(s) {
      return t(r, n, ft({}, a, {}, s));
    }, o.attrs = function(s) {
      return t(r, n, ft({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, o;
  }(Ss, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Te[e] = Te(e);
});
var hd = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = ms(r), Nn.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, a, o) {
    var s = o(Xt(this.rules, n, a, o).join(""), ""), c = this.componentId + r;
    a.insertRules(c, c, s);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, a, o) {
    r > 2 && Nn.registerId(this.componentId + r), this.removeStyles(r, a), this.createStyles(r, n, a, o);
  }, e;
}();
function In(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var a = to.apply(void 0, [e].concat(r)), o = "sc-global-" + xs(JSON.stringify(a)), s = new hd(a, o);
  function c(p) {
    var g = gs(), m = ys(), f = kt(ro), E = hn(g.allocateGSInstance(o)).current;
    return ye.env.NODE_ENV !== "production" && ht.Children.count(p.children) && console.warn("The global style component " + o + " was given child JSX. createGlobalStyle does not render children."), ye.env.NODE_ENV !== "production" && a.some(function(S) {
      return typeof S == "string" && S.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), g.server && d(E, p, g, f, m), _l(function() {
      if (!g.server) return d(E, p, g, f, m), function() {
        return s.removeStyles(E, g);
      };
    }, [E, p, g, f, m]), null;
  }
  function d(p, g, m, f, E) {
    if (s.isStatic) s.renderStyles(p, $u, m, E);
    else {
      var S = ft({}, g, { theme: vs(g, f, c.defaultProps) });
      s.renderStyles(p, S, m, E);
    }
  }
  return ye.env.NODE_ENV !== "production" && bs(o), ht.memo(c);
}
ye.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ye.env.NODE_ENV !== "production" && ye.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ts = () => {
  const [e, t] = Be(), [r, n] = Be(!1), [a, o] = Be(!1), [s, c] = Be("");
  return mt(() => {
    if (!s) return;
    (() => {
      o(null), n(!0);
      try {
        fetch(s).then((p) => p.json()).then((p) => {
          t(p), n(!1);
        }).catch((p) => {
          o(p), n(!1);
        });
      } catch (p) {
        o(p);
      }
    })();
  }, [s]), [{ data: e, loading: r, error: a }, c];
}, cr = (e) => (e || []).join(" ");
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, ja(e, t);
}
function gd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function mn(e, t, r) {
  return gd() ? mn = Reflect.construct : mn = function(a, o, s) {
    var c = [null];
    c.push.apply(c, o);
    var d = Function.bind.apply(a, c), p = new d();
    return s && ja(p, s.prototype), p;
  }, mn.apply(null, arguments);
}
function pt(e) {
  return yd(e) || bd(e) || vd(e) || xd();
}
function yd(e) {
  if (Array.isArray(e)) return Ra(e);
}
function bd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vd(e, t) {
  if (e) {
    if (typeof e == "string") return Ra(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ra(e, t);
  }
}
function Ra(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wd = Object.hasOwnProperty, fi = Object.setPrototypeOf, Sd = Object.isFrozen, Td = Object.getPrototypeOf, Ed = Object.getOwnPropertyDescriptor, Xe = Object.freeze, st = Object.seal, kd = Object.create, Es = typeof Reflect < "u" && Reflect, Cn = Es.apply, _a = Es.construct;
Cn || (Cn = function(t, r, n) {
  return t.apply(r, n);
});
Xe || (Xe = function(t) {
  return t;
});
st || (st = function(t) {
  return t;
});
_a || (_a = function(t, r) {
  return mn(t, pt(r));
});
var Ad = lt(Array.prototype.forEach), hi = lt(Array.prototype.pop), Or = lt(Array.prototype.push), fn = lt(String.prototype.toLowerCase), ta = lt(String.prototype.toString), gi = lt(String.prototype.match), dt = lt(String.prototype.replace), Nd = lt(String.prototype.indexOf), Cd = lt(String.prototype.trim), Ge = lt(RegExp.prototype.test), ra = Od(TypeError);
function lt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Cn(e, t, n);
  };
}
function Od(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return _a(e, r);
  };
}
function me(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : fn, fi && fi(e, null);
  for (var a = t.length; a--; ) {
    var o = t[a];
    if (typeof o == "string") {
      var s = r(o);
      s !== o && (Sd(t) || (t[a] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function Ht(e) {
  var t = kd(null), r;
  for (r in e)
    Cn(wd, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function on(e, t) {
  for (; e !== null; ) {
    var r = Ed(e, t);
    if (r) {
      if (r.get)
        return lt(r.get);
      if (typeof r.value == "function")
        return lt(r.value);
    }
    e = Td(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var yi = Xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), na = Xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), aa = Xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jd = Xe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), oa = Xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Rd = Xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bi = Xe(["#text"]), vi = Xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ia = Xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xi = Xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), sn = Xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), _d = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Pd = st(/<%[\w\W]*|[\w\W]*%>/gm), Ld = st(/\${[\w\W]*}/gm), Id = st(/^data-[\-\w.\u00B7-\uFFFF]/), Dd = st(/^aria-[\-\w]+$/), Md = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), $d = st(/^(?:\w+script|data):/i), Fd = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ud = st(/^html$/i), zd = st(/^[a-z][.\w]*(-[.\w]+)+$/i), Hd = function() {
  return typeof window > "u" ? null : window;
}, qd = function(t, r) {
  if (_t(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var o = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(o, {
      createHTML: function(c) {
        return c;
      },
      createScriptURL: function(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function ks() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hd(), t = function(w) {
    return ks(w);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, o = e.HTMLTemplateElement, s = e.Node, c = e.Element, d = e.NodeFilter, p = e.NamedNodeMap, g = p === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : p, m = e.HTMLFormElement, f = e.DOMParser, E = e.trustedTypes, S = c.prototype, T = on(S, "cloneNode"), k = on(S, "nextSibling"), N = on(S, "childNodes"), A = on(S, "parentNode");
  if (typeof o == "function") {
    var D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  var I = qd(E, r), v = I ? I.createHTML("") : "", _ = n, j = _.implementation, z = _.createNodeIterator, ie = _.createDocumentFragment, he = _.getElementsByTagName, ee = r.importNode, Z = {};
  try {
    Z = Ht(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var ne = {};
  t.isSupported = typeof A == "function" && j && j.createHTMLDocument !== void 0 && Z !== 9;
  var G = _d, ue = Pd, Se = Ld, se = Id, be = Dd, Ee = $d, J = Fd, H = zd, R = Md, C = null, x = me({}, [].concat(pt(yi), pt(na), pt(aa), pt(oa), pt(bi))), P = null, y = me({}, [].concat(pt(vi), pt(ia), pt(xi), pt(sn))), L = Object.seal(Object.create(null, {
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
  })), O = null, ae = null, re = !0, V = !0, K = !1, oe = !0, fe = !1, le = !0, ce = !1, Q = !1, pe = !1, $e = !1, q = !1, $ = !1, Y = !0, U = !1, F = "user-content-", de = !0, Ae = !1, qe = {}, He = null, Nt = me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), fr = null, Hr = me({}, ["audio", "video", "img", "source", "image", "track"]), hr = null, qr = me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gt = "http://www.w3.org/1998/Math/MathML", yt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml", Ct = ut, gr = !1, $t = null, yr = me({}, [gt, yt, ut], ta), Ue, br = ["application/xhtml+xml", "text/html"], Jt = "text/html", _e, Ot = null, Fn = n.createElement("form"), Wr = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, vr = function(w) {
    Ot && Ot === w || ((!w || _t(w) !== "object") && (w = {}), w = Ht(w), Ue = // eslint-disable-next-line unicorn/prefer-includes
    br.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Ue = Jt : Ue = w.PARSER_MEDIA_TYPE, _e = Ue === "application/xhtml+xml" ? ta : fn, C = "ALLOWED_TAGS" in w ? me({}, w.ALLOWED_TAGS, _e) : x, P = "ALLOWED_ATTR" in w ? me({}, w.ALLOWED_ATTR, _e) : y, $t = "ALLOWED_NAMESPACES" in w ? me({}, w.ALLOWED_NAMESPACES, ta) : yr, hr = "ADD_URI_SAFE_ATTR" in w ? me(
      Ht(qr),
      // eslint-disable-line indent
      w.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      _e
      // eslint-disable-line indent
    ) : qr, fr = "ADD_DATA_URI_TAGS" in w ? me(
      Ht(Hr),
      // eslint-disable-line indent
      w.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      _e
      // eslint-disable-line indent
    ) : Hr, He = "FORBID_CONTENTS" in w ? me({}, w.FORBID_CONTENTS, _e) : Nt, O = "FORBID_TAGS" in w ? me({}, w.FORBID_TAGS, _e) : {}, ae = "FORBID_ATTR" in w ? me({}, w.FORBID_ATTR, _e) : {}, qe = "USE_PROFILES" in w ? w.USE_PROFILES : !1, re = w.ALLOW_ARIA_ATTR !== !1, V = w.ALLOW_DATA_ATTR !== !1, K = w.ALLOW_UNKNOWN_PROTOCOLS || !1, oe = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = w.SAFE_FOR_TEMPLATES || !1, le = w.SAFE_FOR_XML !== !1, ce = w.WHOLE_DOCUMENT || !1, $e = w.RETURN_DOM || !1, q = w.RETURN_DOM_FRAGMENT || !1, $ = w.RETURN_TRUSTED_TYPE || !1, pe = w.FORCE_BODY || !1, Y = w.SANITIZE_DOM !== !1, U = w.SANITIZE_NAMED_PROPS || !1, de = w.KEEP_CONTENT !== !1, Ae = w.IN_PLACE || !1, R = w.ALLOWED_URI_REGEXP || R, Ct = w.NAMESPACE || ut, L = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && Wr(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && Wr(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), fe && (V = !1), q && ($e = !0), qe && (C = me({}, pt(bi)), P = [], qe.html === !0 && (me(C, yi), me(P, vi)), qe.svg === !0 && (me(C, na), me(P, ia), me(P, sn)), qe.svgFilters === !0 && (me(C, aa), me(P, ia), me(P, sn)), qe.mathMl === !0 && (me(C, oa), me(P, xi), me(P, sn))), w.ADD_TAGS && (C === x && (C = Ht(C)), me(C, w.ADD_TAGS, _e)), w.ADD_ATTR && (P === y && (P = Ht(P)), me(P, w.ADD_ATTR, _e)), w.ADD_URI_SAFE_ATTR && me(hr, w.ADD_URI_SAFE_ATTR, _e), w.FORBID_CONTENTS && (He === Nt && (He = Ht(He)), me(He, w.FORBID_CONTENTS, _e)), de && (C["#text"] = !0), ce && me(C, ["html", "head", "body"]), C.table && (me(C, ["tbody"]), delete O.tbody), Xe && Xe(w), Ot = w);
  }, xr = me({}, ["mi", "mo", "mn", "ms", "mtext"]), Je = me({}, ["annotation-xml"]), jt = me({}, ["title", "style", "font", "a", "script"]), Ne = me({}, na);
  me(Ne, aa), me(Ne, jd);
  var Ft = me({}, oa);
  me(Ft, Rd);
  var wr = function(w) {
    var M = A(w);
    (!M || !M.tagName) && (M = {
      namespaceURI: Ct,
      tagName: "template"
    });
    var B = fn(w.tagName), ge = fn(M.tagName);
    return $t[w.namespaceURI] ? w.namespaceURI === yt ? M.namespaceURI === ut ? B === "svg" : M.namespaceURI === gt ? B === "svg" && (ge === "annotation-xml" || xr[ge]) : !!Ne[B] : w.namespaceURI === gt ? M.namespaceURI === ut ? B === "math" : M.namespaceURI === yt ? B === "math" && Je[ge] : !!Ft[B] : w.namespaceURI === ut ? M.namespaceURI === yt && !Je[ge] || M.namespaceURI === gt && !xr[ge] ? !1 : !Ft[B] && (jt[B] || !Ne[B]) : !!(Ue === "application/xhtml+xml" && $t[w.namespaceURI]) : !1;
  }, Ve = function(w) {
    Or(t.removed, {
      element: w
    });
    try {
      w.parentNode.removeChild(w);
    } catch {
      try {
        w.outerHTML = v;
      } catch {
        w.remove();
      }
    }
  }, Qt = function(w, M) {
    try {
      Or(t.removed, {
        attribute: M.getAttributeNode(w),
        from: M
      });
    } catch {
      Or(t.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(w), w === "is" && !P[w])
      if ($e || q)
        try {
          Ve(M);
        } catch {
        }
      else
        try {
          M.setAttribute(w, "");
        } catch {
        }
  }, Gr = function(w) {
    var M, B;
    if (pe)
      w = "<remove></remove>" + w;
    else {
      var ge = gi(w, /^[\r\n\t ]+/);
      B = ge && ge[0];
    }
    Ue === "application/xhtml+xml" && Ct === ut && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    var We = I ? I.createHTML(w) : w;
    if (Ct === ut)
      try {
        M = new f().parseFromString(We, Ue);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = j.createDocument(Ct, "template", null);
      try {
        M.documentElement.innerHTML = gr ? v : We;
      } catch {
      }
    }
    var Oe = M.body || M.documentElement;
    return w && B && Oe.insertBefore(n.createTextNode(B), Oe.childNodes[0] || null), Ct === ut ? he.call(M, ce ? "html" : "body")[0] : ce ? M.documentElement : Oe;
  }, Br = function(w) {
    return z.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Sr = function(w) {
    return w instanceof m && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof g) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, Ut = function(w) {
    return _t(s) === "object" ? w instanceof s : w && _t(w) === "object" && typeof w.nodeType == "number" && typeof w.nodeName == "string";
  }, Qe = function(w, M, B) {
    ne[w] && Ad(ne[w], function(ge) {
      ge.call(t, M, B, Ot);
    });
  }, Le = function(w) {
    var M;
    if (Qe("beforeSanitizeElements", w, null), Sr(w) || Ge(/[\u0080-\uFFFF]/, w.nodeName))
      return Ve(w), !0;
    var B = _e(w.nodeName);
    if (Qe("uponSanitizeElement", w, {
      tagName: B,
      allowedTags: C
    }), w.hasChildNodes() && !Ut(w.firstElementChild) && (!Ut(w.content) || !Ut(w.content.firstElementChild)) && Ge(/<[/\w]/g, w.innerHTML) && Ge(/<[/\w]/g, w.textContent) || B === "select" && Ge(/<template/i, w.innerHTML) || w.nodeType === 7 || le && w.nodeType === 8 && Ge(/<[/\w]/g, w.data))
      return Ve(w), !0;
    if (!C[B] || O[B]) {
      if (!O[B] && Ie(B) && (L.tagNameCheck instanceof RegExp && Ge(L.tagNameCheck, B) || L.tagNameCheck instanceof Function && L.tagNameCheck(B)))
        return !1;
      if (de && !He[B]) {
        var ge = A(w) || w.parentNode, We = N(w) || w.childNodes;
        if (We && ge)
          for (var Oe = We.length, De = Oe - 1; De >= 0; --De) {
            var Ye = T(We[De], !0);
            Ye.__removalCount = (w.__removalCount || 0) + 1, ge.insertBefore(Ye, k(w));
          }
      }
      return Ve(w), !0;
    }
    return w instanceof c && !wr(w) || (B === "noscript" || B === "noembed" || B === "noframes") && Ge(/<\/no(script|embed|frames)/i, w.innerHTML) ? (Ve(w), !0) : (fe && w.nodeType === 3 && (M = w.textContent, M = dt(M, G, " "), M = dt(M, ue, " "), M = dt(M, Se, " "), w.textContent !== M && (Or(t.removed, {
      element: w.cloneNode()
    }), w.textContent = M)), Qe("afterSanitizeElements", w, null), !1);
  }, Tr = function(w, M, B) {
    if (Y && (M === "id" || M === "name") && (B in n || B in Fn))
      return !1;
    if (!(V && !ae[M] && Ge(se, M))) {
      if (!(re && Ge(be, M))) {
        if (!P[M] || ae[M]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ie(w) && (L.tagNameCheck instanceof RegExp && Ge(L.tagNameCheck, w) || L.tagNameCheck instanceof Function && L.tagNameCheck(w)) && (L.attributeNameCheck instanceof RegExp && Ge(L.attributeNameCheck, M) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(M)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            M === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && Ge(L.tagNameCheck, B) || L.tagNameCheck instanceof Function && L.tagNameCheck(B)))
          ) return !1;
        } else if (!hr[M]) {
          if (!Ge(R, dt(B, J, ""))) {
            if (!((M === "src" || M === "xlink:href" || M === "href") && w !== "script" && Nd(B, "data:") === 0 && fr[w])) {
              if (!(K && !Ge(Ee, dt(B, J, "")))) {
                if (B)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ie = function(w) {
    return w !== "annotation-xml" && gi(w, H);
  }, Er = function(w) {
    var M, B, ge, We;
    Qe("beforeSanitizeAttributes", w, null);
    var Oe = w.attributes;
    if (Oe) {
      var De = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: P
      };
      for (We = Oe.length; We--; ) {
        M = Oe[We];
        var Ye = M, je = Ye.name, zt = Ye.namespaceURI;
        if (B = je === "value" ? M.value : Cd(M.value), ge = _e(je), De.attrName = ge, De.attrValue = B, De.keepAttr = !0, De.forceKeepAttr = void 0, Qe("uponSanitizeAttribute", w, De), B = De.attrValue, !De.forceKeepAttr && (Qt(je, w), !!De.keepAttr)) {
          if (!oe && Ge(/\/>/i, B)) {
            Qt(je, w);
            continue;
          }
          fe && (B = dt(B, G, " "), B = dt(B, ue, " "), B = dt(B, Se, " "));
          var bt = _e(w.nodeName);
          if (Tr(bt, ge, B)) {
            if (U && (ge === "id" || ge === "name") && (Qt(je, w), B = F + B), le && Ge(/((--!?|])>)|<\/(style|title)/i, B)) {
              Qt(je, w);
              continue;
            }
            if (I && _t(E) === "object" && typeof E.getAttributeType == "function" && !zt)
              switch (E.getAttributeType(bt, ge)) {
                case "TrustedHTML": {
                  B = I.createHTML(B);
                  break;
                }
                case "TrustedScriptURL": {
                  B = I.createScriptURL(B);
                  break;
                }
              }
            try {
              zt ? w.setAttributeNS(zt, je, B) : w.setAttribute(je, B), Sr(w) ? Ve(w) : hi(t.removed);
            } catch {
            }
          }
        }
      }
      Qe("afterSanitizeAttributes", w, null);
    }
  }, Ce = function te(w) {
    var M, B = Br(w);
    for (Qe("beforeSanitizeShadowDOM", w, null); M = B.nextNode(); )
      Qe("uponSanitizeShadowNode", M, null), !Le(M) && (M.content instanceof a && te(M.content), Er(M));
    Qe("afterSanitizeShadowDOM", w, null);
  };
  return t.sanitize = function(te) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M, B, ge, We, Oe;
    if (gr = !te, gr && (te = "<!-->"), typeof te != "string" && !Ut(te))
      if (typeof te.toString == "function") {
        if (te = te.toString(), typeof te != "string")
          throw ra("dirty is not a string, aborting");
      } else
        throw ra("toString is not a function");
    if (!t.isSupported) {
      if (_t(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof te == "string")
          return e.toStaticHTML(te);
        if (Ut(te))
          return e.toStaticHTML(te.outerHTML);
      }
      return te;
    }
    if (Q || vr(w), t.removed = [], typeof te == "string" && (Ae = !1), Ae) {
      if (te.nodeName) {
        var De = _e(te.nodeName);
        if (!C[De] || O[De])
          throw ra("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (te instanceof s)
      M = Gr("<!---->"), B = M.ownerDocument.importNode(te, !0), B.nodeType === 1 && B.nodeName === "BODY" || B.nodeName === "HTML" ? M = B : M.appendChild(B);
    else {
      if (!$e && !fe && !ce && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return I && $ ? I.createHTML(te) : te;
      if (M = Gr(te), !M)
        return $e ? null : $ ? v : "";
    }
    M && pe && Ve(M.firstChild);
    for (var Ye = Br(Ae ? te : M); ge = Ye.nextNode(); )
      ge.nodeType === 3 && ge === We || Le(ge) || (ge.content instanceof a && Ce(ge.content), Er(ge), We = ge);
    if (We = null, Ae)
      return te;
    if ($e) {
      if (q)
        for (Oe = ie.call(M.ownerDocument); M.firstChild; )
          Oe.appendChild(M.firstChild);
      else
        Oe = M;
      return (P.shadowroot || P.shadowrootmod) && (Oe = ee.call(r, Oe, !0)), Oe;
    }
    var je = ce ? M.outerHTML : M.innerHTML;
    return ce && C["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Ge(Ud, M.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + je), fe && (je = dt(je, G, " "), je = dt(je, ue, " "), je = dt(je, Se, " ")), I && $ ? I.createHTML(je) : je;
  }, t.setConfig = function(te) {
    vr(te), Q = !0;
  }, t.clearConfig = function() {
    Ot = null, Q = !1;
  }, t.isValidAttribute = function(te, w, M) {
    Ot || vr({});
    var B = _e(te), ge = _e(w);
    return Tr(B, ge, M);
  }, t.addHook = function(te, w) {
    typeof w == "function" && (ne[te] = ne[te] || [], Or(ne[te], w));
  }, t.removeHook = function(te) {
    if (ne[te])
      return hi(ne[te]);
  }, t.removeHooks = function(te) {
    ne[te] && (ne[te] = []);
  }, t.removeAllHooks = function() {
    ne = {};
  }, t;
}
var Wd = ks();
const ct = (e) => ({ __html: Wd.sanitize(e) });
function* Zt(e = "id-", t = 0) {
  let r = t;
  for (; ; )
    r += 1, yield e + r;
}
function Gd() {
  const e = (
    // @ts-ignore
    (document.currentScript && document.currentScript.src || "").match(/(.*\/)/)
  );
  return e && e.length > 0 ? e[0].substr(0, e[0].length - 1) : "./";
}
h.shape({
  event: h.string,
  action: h.string,
  name: h.string,
  region: h.string,
  section: h.string,
  component: h.string,
  type: h.string,
  text: h.string
});
function As({
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
const Ur = ({ href: e = null }) => (
  // @ts-ignore
  /* @__PURE__ */ i.jsx(Fr, { label: "Apply now", ariaLabel: "Apply now", href: e, color: "gold" })
);
Ur.propTypes = {
  href: h.string
};
h.string;
function no({ message: e, type: t }) {
  const [r, n] = Be(""), o = {
    error: {
      className: "alert-danger",
      icon: "fa-exclamation-triangle",
      ariaLabel: "Error"
    },
    info: {
      className: "alert-info",
      icon: "fa-info-circle",
      ariaLabel: "Information"
    }
  }[t];
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      "data-testid": "message-alert",
      className: `alert ${o.className}`,
      role: "alert",
      style: {
        display: r,
        position: "sticky",
        top: 0,
        zIndex: 100
      },
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ i.jsx(
          "span",
          {
            "aria-label": o.ariaLabel,
            className: `fa fa-icon ${o.icon}`
          }
        ) }),
        /* @__PURE__ */ i.jsx("div", { className: "alert-content", children: e }),
        /* @__PURE__ */ i.jsx("div", { className: "alert-close", children: /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-circle btn-circle-alt-black close",
            "aria-label": "Close",
            onClick: () => n("none"),
            children: /* @__PURE__ */ i.jsx("i", { className: "fas fa-times" })
          }
        ) })
      ]
    }
  );
}
no.propTypes = {
  type: h.oneOf(["error", "info"]).isRequired,
  message: h.string.isRequired
};
function Ns({ message: e }) {
  return /* @__PURE__ */ i.jsx(no, { message: e, type: "error" });
}
function Bd({ message: e }) {
  return /* @__PURE__ */ i.jsx(no, { message: e, type: "info" });
}
const Vd = Te.div`
  --width: 100px;
  --color: red;

  width: calc(var(--width) + 0px);
  height: calc((var(--width) / 3) - 10px);
  // position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translateX(-50%) translateY(-50%);

  .ball-loader-ball {
    will-change: transform;

    height: calc((var(--width) / 3) - 10px);
    width: calc((var(--width) / 3) - 10px);

    border-radius: 50%;
    background-color: lightBlue;
    position: absolute;
    -webkit-animation: grow 1s ease-in-out infinite alternate;
    animation: grow 1s ease-in-out infinite alternate;

    &.ball1 {
      left: 0;
      transform-origin: 100% 50%;
    }
    &.ball2 {
      left: 50%;
      transform: translateX(-50%) scale(1);
      animation-delay: 0.33s;
    }
    &.ball3 {
      right: 0;
      animation-delay: 0.66s;
    }
  }

  @keyframes grow {
    to {
      transform: translateX(-50%) scale(0);
    }
  }
`;
function Cs() {
  return /* @__PURE__ */ i.jsxs(Vd, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
    /* @__PURE__ */ i.jsx("div", { className: "ball-loader-ball ball1" }),
    /* @__PURE__ */ i.jsx("div", { className: "ball-loader-ball ball2" }),
    /* @__PURE__ */ i.jsx("div", { className: "ball-loader-ball ball3" })
  ] });
}
h.shape({
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  content: h.shape({
    icon: h.string,
    header: h.string,
    body: h.string
  })
});
const Os = h.shape({
  ariaLabel: h.string,
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: h.string,
  href: h.string,
  label: h.string,
  onClick: h.func,
  size: h.oneOf(["default", "small", "xsmall"])
}), ao = {
  url: h.string,
  altText: h.string,
  cssClass: h.arrayOf(h.string)
}, js = {
  text: h.string,
  cssClass: h.arrayOf(h.string)
}, oo = {
  type: h.oneOf(["video", "youtube"]),
  url: h.string,
  altText: h.string,
  vttUrl: h.string,
  title: h.string
}, Yd = {
  url: h.string,
  text: h.string,
  isActive: h.bool
}, Tt = h.shape({
  ...ao
}), On = h.shape({
  ...js
}), Kd = h.shape({
  ...oo
}), Vt = h.shape({
  ...Yd
}), Rs = h.shape({
  id: h.string,
  sourceType: h.oneOf(["api", "shared-data-source", "static-json"]),
  // default `api`
  sharedDataSourceId: h.string,
  // only if `dataSourceType == "shared-data-source"``
  // eslint-disable-next-line react/forbid-prop-types
  data: h.arrayOf(h.object),
  // only if `dataSourceType == "static-json"``
  apiUrl: h.string
  // only if `dataSourceType == "api"``
}), Pa = h.shape({
  text: h.string,
  url: h.string
}), qt = h.shape({
  icon: h.arrayOf(h.string),
  title: h.string,
  content: h.string,
  buttonLink: Os
}), La = h.arrayOf(
  h.shape({
    title: h.string,
    url: h.string
  })
), _s = h.shape({
  career: Vt,
  growth: h.oneOfType([h.number, h.string]),
  medianSalary: h.string,
  brightOutlook: h.bool,
  greenOccupation: h.bool
}), Xd = {
  hideCollegeSchool: h.bool,
  defaultView: h.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: Tt
}, Zd = h.shape({
  ...Xd
}), io = {
  atAGlance: h.bool,
  applicationRequirements: h.bool,
  changeMajorRequirements: h.bool,
  nextSteps: h.bool,
  affordingCollege: h.bool,
  flexibleDegreeOptions: h.bool,
  careerOutlook: h.bool,
  exampleCareers: h.bool,
  customizeYourCollegeExperience: h.bool,
  globalOpportunity: h.bool,
  attendOnline: h.bool,
  whyChooseAsu: h.bool,
  programContactInfo: h.bool,
  externalAnchors: h.arrayOf(
    h.shape({
      targetIdName: h.string,
      text: h.string
    })
  )
}, ar = h.shape({
  image: Tt,
  title: h.string,
  text: h.string,
  button: Os
}), wi = h.shape({
  faculty: ar,
  programs: ar,
  research: ar,
  inclusion: ar,
  mentors: ar,
  honors: ar
}), Ps = {
  hide: h.bool,
  sectionIntroText: h.string,
  cards: wi,
  defaultCards: wi
};
h.shape({
  ...io
});
const sa = h.shape({
  id: h.oneOfType([h.string, h.number]),
  value: h.string
}), Ls = h.shape({
  locations: h.arrayOf(sa),
  asuLocals: h.arrayOf(sa),
  acceleratedConcurrent: sa
}), Jd = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, Is = Object.values(Jd), Si = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course"
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" }
}, Ds = "grid-view", Ia = "list-view", Ms = "degree-list-programs", $s = "Sorry, Something went wrong.", Qd = "STEM-OPT for international students on F-1 visas", ep = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`, tp = Gd(), rp = (e) => {
  const t = e || tp, r = `${t}/assets/img/detail-page`, n = `${t}/assets/img/listing-page`, a = {
    dataSource: void 0,
    introContent: {
      image: {
        url: `${r}/intro.jpg`,
        altText: "Detail Page Degree"
      }
    },
    hero: {
      image: {
        url: `${r}/hero.jpg`,
        altText: "Detail Page Degree",
        size: "medium"
      },
      title: {
        text: "Detail Page Degree",
        color: "black",
        highlightColor: "gold",
        maxWidth: "100%"
      }
    },
    nextSteps: {
      cards: {
        learnMore: {
          icon: ["fas", "info-circle"],
          title: "Learn more about our programs",
          content: "Tell us what type of student you are and we'll get you the information you need.",
          buttonLink: {
            label: "Request information",
            ariaLabel: "Request information",
            color: "maroon",
            href: "https://admission.asu.edu/contact/request-info"
          }
        },
        apply: {
          icon: ["fas", "file-alt"],
          title: "Apply to program",
          content: "Arizona State University invites first-year, transfer, international, graduate and online students to apply for admission using our online application.",
          buttonLink: {
            label: "Apply now",
            ariaLabel: "Apply now",
            color: "maroon",
            href: "https://admission.asu.edu/apply"
          }
        },
        visit: {
          icon: ["fas", "map-marker-alt"],
          title: "Visit our campus",
          content: "An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",
          buttonLink: {
            label: "Schedule a visit",
            ariaLabel: "Schedule a visit",
            color: "maroon",
            href: "https://visit.asu.edu/"
          }
        }
      }
    },
    whyChooseAsu: {
      sectionIntroText: "ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",
      cards: {
        faculty: {
          image: {
            url: `${r}/customize-faculty-600.jpg`,
            altText: "World-class faculty"
          },
          title: "World-class faculty",
          text: "The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",
          button: {
            label: "Faculty excellence",
            color: "maroon",
            href: "https://www.asu.edu/academics/faculty-excellence"
          }
        },
        programs: {
          image: {
            url: `${r}/customize-programs-600.jpg`,
            altText: "Highly ranked programs"
          },
          title: "Highly ranked programs",
          text: "A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",
          button: {
            label: "ASU rankings",
            color: "maroon",
            href: "https://www.asu.edu/rankings"
          }
        },
        research: {
          image: {
            url: `${r}/customize-research-600.jpg`,
            altText: "Research opportunities"
          },
          title: "Research opportunities",
          text: "Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",
          button: {
            label: "Research opportunities",
            color: "maroon",
            href: "https://provost.asu.edu/uresearch"
          }
        },
        inclusion: {
          image: {
            url: `${r}/customize-inclusion-600.jpg`,
            altText: "An inclusive environment"
          },
          title: "An inclusive environment",
          text: "ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",
          button: {
            label: "ASU Charter",
            color: "maroon",
            href: "https://www.asu.edu/about/charter-mission"
          }
        },
        mentors: {
          image: {
            url: `${r}/customize-mentor-600.jpg`,
            altText: "Career Services"
          },
          title: "Career Services",
          text: "All students have access to ASU’s full-service career resources center. Get help writing your cover letter and building your resume, learn job interview skills, land an internship, and connect with hundreds of employers who are actively recruiting ASU graduates.",
          button: {
            label: "ASU Career Services",
            color: "maroon",
            href: "https://career.eoss.asu.edu/"
          }
        },
        honors: {
          image: {
            url: `${r}/customize-honors-600.jpg`,
            altText: "Global education"
          },
          title: "Global education",
          text: "ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",
          button: {
            label: "Explore",
            color: "maroon",
            href: "https://goglobal.asu.edu"
          }
        }
      }
    },
    globalOpportunity: {
      image: {
        url: `${r}/global-opportunity.jpg`,
        altText: "Global opportunity"
      }
    },
    careerOutlook: {
      image: {
        url: `${r}/career-outlook.jpg`,
        altText: "Career Outlook"
      }
    },
    attendOnline: {
      image: {
        url: `${r}/attend-online.jpg`,
        altText: "Attend online"
      }
    }
  }, o = {
    actionUrls: {
      applyNowUrl: "https://admission.asu.edu/apply"
    },
    hero: {
      image: {
        url: `${n}/hero.jpg`,
        altText: "Listing Page Degree",
        size: "medium"
      }
    },
    programList: void 0
  };
  return {
    detailPageDefault: a,
    listingPageDefault: o
  };
}, np = (e) => {
  if (typeof e == "string") return "Degrees";
  const { program: t, cert: r } = e;
  return t === "undergrad" && r === "true" ? "Undergraduate Minors and Certificates" : t === "undergrad" ? "Undergraduate Degrees" : t === "graduate" && r === "true" ? "Graduate Certificates" : t === "graduate" ? "Graduate Degrees" : "Degrees";
}, so = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" }
], ap = so[4], Fs = [
  { id: 0, value: "COCHS", text: "ASU at Cochise" },
  { id: 1, value: "LOSAN", text: "ASU at Los Angeles" },
  { id: 2, value: "NEAZ", text: "ASU at Northeastern Arizona" },
  { id: 3, value: "PIMA", text: "ASU at Pima" },
  { id: 4, value: "CAC", text: "ASU at Pinal" },
  { id: 5, value: "EAC", text: "ASU at TheGilaValley" },
  { id: 6, value: "TUCSN", text: "ASU at Tucson" },
  { id: 7, value: "YAVAP", text: "ASU at Yavapai" },
  { id: 8, value: "AWC", text: "ASU at Yuma" },
  { id: 9, value: "MESACITYCR", text: "ASU at Mesa City Center" },
  { id: 10, value: "CALHC", text: "Colleges at Lake Havasu City" }
], lo = [
  {
    id: 0,
    value: "all",
    text: "All"
  },
  {
    id: 1,
    value: "acceleratedAcadPlanCodes",
    text: "Accelerated"
  },
  {
    id: 2,
    value: "concurrentAcadPlanCodes",
    text: "Concurrent"
  }
], op = lo[0], Da = (e) => (e == null ? void 0 : e.value) && (e == null ? void 0 : e.value) !== "all", ip = (e) => {
  var t;
  return ((t = [
    ...so,
    ...Fs,
    ...lo
  ].find(({ value: r }) => r === e)) == null ? void 0 : t.text) || e;
}, Fe = {
  atAGlance: {
    targetIdName: "at-a-glange",
    text: "At a glance"
  },
  applicationRequirements: {
    targetIdName: "application-requirements",
    text: "App. Requirements"
  },
  degreeRequirements: {
    targetIdName: "degree-requirements",
    text: "Degree Requirements"
  },
  changeMajorRequirements: {
    targetIdName: "change-major-requirements",
    text: "Change Major Requirement"
  },
  nextSteps: {
    targetIdName: "next-steps",
    text: "Next Steps"
  },
  affordingCollege: {
    targetIdName: "affording-college",
    text: "Affording College"
  },
  flexibleDegreeOptions: {
    targetIdName: "flexible-degree-options",
    text: "Flexible Degree Options",
    acceleratedId: "flexible-accelerated-options",
    concurrentId: "flexible-concurrent-options"
  },
  careerOutlook: {
    targetIdName: "career-outlook",
    text: "Career outlook"
  },
  exampleCareers: {
    targetIdName: "example-careers",
    text: "Example Careers"
  },
  // TODO: To be implemented
  // customizeYourCollegeExperience?: CustomizeYourCollegeExperienceProps
  globalOpportunity: {
    targetIdName: "global-opportunity",
    text: "Global opportunities"
  },
  attendOnline: {
    targetIdName: "attend-online",
    text: "Attend Online"
  },
  whyChooseAsu: {
    targetIdName: "why-choose-asu",
    text: "Why Choose ASU"
  },
  programContactInfo: {
    targetIdName: "program-contact-info",
    text: "Program Contact Information"
  }
}, sp = {
  TEMPE: {
    text: "Tempe campus",
    url: "https://campus.asu.edu/tempe"
  },
  POLY: {
    text: "Polytechnic campus",
    url: "https://campus.asu.edu/polytechnic"
  },
  WEST: {
    text: "West Valley campus",
    url: "https://campus.asu.edu/west"
  },
  DTPHX: {
    text: "Downtown Phoenix campus",
    url: "https://campus.asu.edu/downtown-phoenix"
  },
  EAC: {
    text: "",
    url: "https://admission.asu.edu/transfer/thegilavalley"
  },
  CAC: {
    text: "",
    url: "https://admission.asu.edu/transfer/pinal"
  },
  ONLNE: {
    text: "Online",
    url: "https://asuonline.asu.edu"
  },
  CALHC: {
    text: "Lake Havasu",
    url: "https://havasu.asu.edu"
  },
  COCHS: {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-cochise"
  },
  WASHD: {
    text: "",
    url: "https://washingtondc.asu.edu"
  },
  YAVAP: {
    text: "",
    url: "https://admission.asu.edu/transfer/asuyavapai"
  },
  PIMA: {
    text: "",
    url: "https://admission.asu.edu/transfer/pima"
  },
  NEAZ: {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-northeastern-arizona"
  },
  LOSAN: {
    text: "ASU@Los Angeles",
    url: "https://california.asu.edu"
  },
  "TUCSN-undergrad": {
    text: "",
    url: "https://transfer.asu.edu/tucson"
  },
  "TUCSN-graduate": {
    text: "",
    url: "https://admission.asu.edu/contact/graduate"
  },
  MXCTY: {
    text: "",
    url: "https://admission.asu.edu/contact/graduate"
  },
  "AWC-undergrad": {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-yuma"
  },
  "AWC-graduate": {
    text: "",
    url: "https://admission.asu.edu/contact/graduate"
  }
}, Ti = (e, t) => {
  const r = ["TUCSN", "AWC"], n = e.toUpperCase(), a = r.includes(n) ? `${n}-${t}` : n;
  return sp[a];
};
function Us({ anchorMenu: e }) {
  var n, a;
  const t = (n = e == null ? void 0 : e.externalAnchors) == null ? void 0 : n.map((o) => {
    const { targetIdName: s, text: c } = o;
    return {
      targetIdName: s.startsWith("#") ? s.substring(1) : s,
      text: c,
      icon: null
    };
  }), r = Object.keys(Fe).filter((o) => e[o]).map((o) => Fe[o]).concat(t || []);
  return /* @__PURE__ */ i.jsx(
    vu,
    {
      items: r,
      firstElementId: (a = r[0]) == null ? void 0 : a.targetIdName,
      focusFirstFocusableElement: !1
    }
  );
}
Us.propTypes = {
  anchorMenu: h.shape(io)
};
function lp(e, t) {
  const r = Math.floor(e / t), n = e % t;
  return r + (n > 0 ? 1 : 0);
}
const cp = "https://degrees.apps.asu.edu", up = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/", dp = {
  endpoint: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plans",
  filter: "activeInDegreeSearch",
  include: `applicationDeadlines,owners,acadPlanMarketingDescription,
    acadPlanCode,degreeDescriptionShort,acadPlanDescription,
    degreeDescriptionText,majorMapSubplans,majorMapOnline,majorMapGeneral,
    acceleratedAcadPlanCodes,concurrentAcadPlanCodes,academicOfficeUrl,
    academicOfficeLocation,marketingText,fullDescription,customText,
    mathIntensityCode,mathIntensityDescription,firstMathCourseRequired,
    mathRequired,emailAddr,campusesOffered,changeMajorRequirementsText,
    additionalFee,firstMathCourseRequiredSupplementalText,degreeType`,
  degreeType: "UG"
}, pp = {
  acadPlan: null,
  endpoint: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan",
  include: `applicationDeadlines,owners,acadPlanMarketingDescription,
  acadPlanCode,degreeDescriptionShort,acadPlanDescription,
  degreeDescriptionText,majorMapSubplans,majorMapOnline,majorMapGeneral,
  acceleratedAcadPlanCodes,concurrentAcadPlanCodes,academicOfficeUrl,
  academicOfficeLocation,marketingText,fullDescription,customText,
  mathIntensityCode,mathIntensityDescription,firstMathCourseRequired,
  mathRequired,emailAddr,campusesOffered,changeMajorRequirementsText,
  careerData,careerOpportunities,globalExperienceText,
  firstMathCourseRequiredSupplementalText,stemOptText,
  admissionsRequirementsText,transferAdmissionRequirementsText,
  asuOnlineAcadPlanUrl,degreeType,degreeRequirements,
  graduateDegreeAdditionalRequirements,minorCourseRequirements,subplans,
  professionalLicensureAdditionalText,professionalLicensureStandardText`
}, Ei = (e) => e.map((t) => ({
  title: t.acadPlanDescription,
  url: t.academicOfficeUrl
})).sort((t, r) => t.title.localeCompare(r.title)), mp = (e) => e == null ? void 0 : e.map((t) => ({
  career: {
    text: t.alternateTitle,
    url: `${cp}/career-details/${t.onetCode}`
  },
  growth: t.growth,
  medianSalary: t.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }),
  brightOutlook: !!t.brightOutlook,
  greenOccupation: !!t.green
}));
function zs(e, t) {
  const r = { ...t, ...e };
  if (r.collegeAcadOrg && (r.collegeOrg = r.collegeAcadOrg, delete r.collegeAcadOrg), r.program) {
    const { program: d } = r;
    r.cert === "true" && d === "undergrad" ? r.degreeType = "UGCM" : d === "graduate" ? r.degreeType = "GR" : r.degreeType = "UG", delete r.program;
  }
  r.acadPlan && (r.endpoint += `/${r.acadPlan}`, delete r.acadPlan);
  const { endpoint: n, include: a, ...o } = r, s = a.split(",").map((d) => `include=${d.trim()}`).join("&"), c = Object.keys(o).reduce(
    (d, p) => `${d}&${p}=${r[p]}`,
    ""
  );
  return `${n}?${c}&${s}`;
}
function Dn(e, t = "h2") {
  return (
    /** @type {keyof JSX.IntrinsicElements} */
    Is.includes(e.component) ? e.component : t
  );
}
function Ma(e) {
  return typeof e != "string" ? console.error("Invalid string", e) : e == null ? void 0 : e.replace(
    /\w\S*/g,
    (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );
}
function fp(e) {
  return /<\/?[a-z][\s\S]*>/i.test(e);
}
const Hs = "AsuDevTools", hp = {
  isDebug: !1
};
function gp() {
  const e = JSON.parse(localStorage.getItem(Hs));
  return e == null ? void 0 : e.isDebug;
}
window.__AsuDevTools = {
  enableDebug(e) {
    const t = JSON.stringify({
      ...hp,
      isDebug: e
    });
    localStorage.setItem(Hs, t);
  }
};
async function la(e) {
  return e != null && e.length ? (await Promise.all(
    e.map(async (r) => {
      try {
        return await (await Promise.race([
          fetch(
            `${up}${r}?include=academicOfficeUrl&include=acadPlanDescription`
          ),
          // Timeout after 5 seconds
          new Promise(
            (o, s) => setTimeout(() => s(new Error("timeout")), 1e4)
          )
        ])).json();
      } catch (n) {
        return console.error(
          `Error fetching academic plan for code ${r}:`,
          n
        ), null;
      }
    })
  )).filter((r) => r !== null) : [];
}
function yp(e, t) {
  Promise.all(e).then((r) => {
    const n = r[0], a = r[1];
    t({ accelerateData: n, concurrentData: a });
  }).catch(() => {
    t({ accelerateData: [], concurrentData: [] });
  });
}
function zr({ contents: e = [] }) {
  const t = Zt("paragrap-");
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: e.map(
    (r) => fp(r.text) ? /* @__PURE__ */ i.jsx(
      "div",
      {
        dangerouslySetInnerHTML: ct(r.text)
      },
      t.next().value
    ) : /* @__PURE__ */ i.jsx(
      "p",
      {
        className: `${cr(r.cssClass)}`,
        children: r.text
      },
      t.next().value
    )
  ) });
}
zr.propTypes = {
  contents: h.arrayOf(On)
};
const bp = In`
  .uds-image-overlap {
    padding-top: 0;
    width: auto;
    align-items: center;

    &:after{
      height: 100%;
    }
    @media (max-width: 768px) {
      padding-top: 1.5rem !important;
    }
  }
`, vp = Te.div`
  .uds-image-overlap.content-right &.content-wrapper,
  .uds-image-overlap.content-left &.content-wrapper {
    height: fit-content;
  }

  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 992px) {
    .uds-image-overlap.content-left &.content-wrapper {
      padding-left: 0;
    }

    .uds-image-overlap.content-right &.content-wrapper {
      padding: 2.5rem;

      h2 {
        margin-top: 0;
      }
    }
  }
`, xp = Te.img`
  .uds-image-overlap & {
    width: 100%;
    height: 100%;
    grid-row: 2/5;
    object-fit: cover;
  }

  .uds-image-overlap.content-right & {
    grid-row: 1 / span 3;
  }
`;
function pr({
  title: e,
  image: t,
  contentDirection: r = "left",
  contents: n = [],
  contentChildren: a = null,
  headingTag: o = "H3"
}) {
  const s = hn(), c = hn(), d = Dn(o);
  function p() {
    const m = s.current.offsetHeight;
    c.current.style.height = `${m * 1.2}px`;
  }
  return mt(() => {
    p();
    let g;
    const m = () => {
      clearTimeout(g), g = setTimeout(() => p(), 150);
    };
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [c, s]), /* @__PURE__ */ i.jsxs("div", { className: `uds-image-overlap content-${r}`, children: [
    /* @__PURE__ */ i.jsx(bp, {}),
    /* @__PURE__ */ i.jsx(
      xp,
      {
        ref: c,
        className: "img-fluid",
        src: t == null ? void 0 : t.url,
        alt: t == null ? void 0 : t.altText,
        onError: (g) => {
          g.currentTarget.style.display = "none";
        }
      }
    ),
    /* @__PURE__ */ i.jsxs(vp, { ref: s, className: "content-wrapper", children: [
      /* @__PURE__ */ i.jsx(d, { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: e }) }),
      /* @__PURE__ */ i.jsx(zr, { contents: n }),
      a
    ] })
  ] });
}
pr.propTypes = {
  headingTag: h.string,
  title: h.string,
  contentDirection: h.oneOf(["left", "right"]),
  contents: h.arrayOf(
    h.shape({
      text: h.string
    })
  ),
  image: Tt,
  contentChildren: h.element
};
const qs = In`
  :root {
    --uds-dp-section-margin: 96px;
  }

  @media (max-width: 768px) {
    :root {
      --uds-dp-section-margin: 48px;
    }
  }

  .element-focus:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
  }

  div[class^=uds-hero] h1 {
    margin-left: 0.15em;

    span {
      margin-left: 0;
    }
  }

  h1 span.highlight-gold,
  h2 span.highlight-gold{
    margin-left: 0.15em;
  }

  .card > .card-buttons {
    padding-bottom: 8px !important;
  }
`, Ws = Te.main`
  &.dg-margin-top {
    margin-top: var(--uds-dp-section-margin);
  }

  &.main-section > section:not(.no-space),
  & > section section:not(.no-space) {
    margin-bottom: var(--uds-dp-section-margin);

    & > * {
      margin-top: 0;
      padding-top: 0;
    }

    & h2 {
      line-height: 1;
    }
  }
`;
function wp({
  baseIconClassName1: e,
  baseIconAriaLabel1: t,
  baseIconStyle1: r,
  baseIconAriaLabel2: n,
  baseIconClassName2: a,
  baseIconStyle2: o,
  ariaLabel: s,
  ariaControls: c,
  dataId: d,
  onClick: p = () => null
}) {
  const [g, m] = Be(!1), f = (T, k, N, A) => /* @__PURE__ */ i.jsx(
    "span",
    {
      style: {
        cursor: "pointer",
        display: k
      },
      children: /* @__PURE__ */ i.jsx(
        "i",
        {
          className: `${T}`,
          "aria-label": N,
          title: N,
          style: A
        }
      )
    }
  ), E = () => {
    m(!g), p(!g);
  }, S = /* @__PURE__ */ i.jsxs(
    "span",
    {
      "data-testid": d,
      role: "button",
      className: "element-focus",
      tabIndex: 0,
      onKeyDown: (T) => T.key === "Enter" && E(),
      onClick: E,
      "aria-label": s,
      "aria-expanded": g,
      "aria-controls": c,
      children: [
        f(
          e,
          g ? "" : "none",
          t,
          r
        ),
        f(
          a,
          g ? "none" : "",
          n,
          o
        )
      ]
    }
  );
  return Ri(() => S, [g]);
}
Te.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1070;
  display: block;
  max-width: 276px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  display: none;

  &[data-width-auto="true"] {
    max-width: none;
  }

  &[data-show="true"] {
    display: block;
  }

  & .popover-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: #f0f0f0;
    border-bottom: 1px solid #d8d8d8;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }

  & .popover-body {
    padding: 1rem 1rem;
    color: #212529;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }

  &[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > #arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
  }
`;
const ca = (e) => /* @__PURE__ */ i.jsx("span", {}), Sp = ({
  onClick: e = () => null,
  ariaLabel: t,
  ariaControls: r,
  dataId: n
}) => wp({
  dataId: n,
  baseIconClassName1: "fas fa-chevron-up",
  baseIconClassName2: "fas fa-chevron-down",
  onClick: e,
  ariaLabel: t,
  ariaControls: r
}), mr = Ll(null), co = ({ listPageProps: e, detailPageProps: t, children: r }) => {
  const { detailPageDefault: n, listingPageDefault: a } = Ri(
    () => rp((e || t).appPathFolder),
    []
  ), o = {
    detailPageDefault: n,
    listingPageDefault: a
  }, s = {
    listPageProps: e,
    detailPageProps: t
  };
  return /* @__PURE__ */ i.jsx(
    mr.Provider,
    {
      value: {
        state: s,
        defaultState: o
      },
      children: r
    }
  );
};
co.propTypes = {
  children: h.oneOfType([
    h.arrayOf(h.element),
    h.element
  ]),
  listPageProps: h.shape({}),
  detailPageProps: h.shape({})
};
const Tp = ({
  dataSource: e,
  tableView: t = [],
  programs: r,
  stateFilters: n
}) => {
  const { collegeAcadOrg: a, departmentCode: o } = e;
  mt(() => {
    if (!r || !gp()) return;
    const s = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;", c = "font-size:30px;", d = "font-size:24px;", p = "font-size: 18px; margin-left: 0.5rem;";
    console.group("<< ASU Degree Page >>"), console.log("%c🏫 Listing Page Programs 📚", s + c), console.log(
      `%cTotal programs found: ${r.length}`,
      s + p
    ), console.log("%cPrograms found", s + p), console.log(r), console.log(
      `%cTotal programs loaded: ${t.length}`,
      s + p
    ), console.log("%cPrograms loaded", s + p), console.log(t), console.log("%cPage Filters", s + d), console.log(
      `%c- collegeAcadOrg:${a}`,
      s + p
    ), console.log(
      `%c- departmentCode:${o}`,
      s + p
    ), console.log("%cSearch Filters", s + d), console.log(n), console.groupEnd();
  });
}, ki = (e) => e.degreeType === "UG", Gs = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Bs = (e) => {
  var t;
  return ((t = e.applicationDeadlines) == null ? void 0 : t.length) > 0;
}, Ep = (e) => Object.keys(e).length > 0 ? Bs(e) || Gs(e) : !0, jr = (e) => {
  const { owners: t } = e;
  return t ? t.reduce(
    (n, a) => n.percentOwned > a.percentOwned ? n : a
  ) : null;
};
function ur(e = {}) {
  return {
    getMajorDesc: () => e.acadPlanMarketingDescription,
    getInstitution: () => "ASU00",
    getAcadPlan: () => e.acadPlanCode,
    /** @returns {string} */
    getDegree: () => {
      let t = e.degreeDescriptionShort || e.acadPlanTypeDescription;
      return t === "CERT" && (t = "Certificate"), t;
    },
    /** @returns {string} */
    getGeneralDegreeMajorMap: () => {
      const { majorMapGeneral: t } = e, r = t == null ? void 0 : t.find(
        (n) => n.defaultFlag === !0
      );
      return (r == null ? void 0 : r.url) || "";
    },
    isUndergradProgram: () => ki(e),
    isPhdOrMasters: () => e.degreeDescriptionShort !== "CERT",
    // Only called in functions that already checked if its a grad program
    isGradProgram: () => e.degreeType === "GR",
    // GR is present for grad degrees and grad certificates
    isMinorOrCertificate: () => e.degreeType === "UGCM" || e.degreeType === "GR" && e.acadPlanTypeDescription === "Certificate",
    /** @returns {"undergrad" |  "graduate"} */
    getProgramType: () => ki(e) ? "undergrad" : "graduate",
    getDegreeDesc: () => e.degreeDescriptionLong,
    getDegreeDescLong: () => e.degreeDescriptionText,
    getFullDescription: () => e.fullDescription,
    getCurriculumUrl: () => {
      var t;
      return (t = e.asuOnlineAcadPlanUrl) == null ? void 0 : t.trim();
    },
    getAdmissionsRequirementsText: () => e.admissionsRequirementsText,
    getMinorCourseRequirements: () => e.minorCourseRequirements,
    getTransferAdmission: () => e.transferAdmissionRequirementsText,
    getGraduateRequirements: () => {
      const t = e.graduateDegreeAdditionalRequirements;
      let r = "";
      if ((t == null ? void 0 : t.length) > 0) {
        const a = t.join(", or<br />");
        r = a ? `<p>${a}</p>` : "";
      } else
        return r = e.degreeMajorMap, `${r}`;
      const n = e.degreeRequirements;
      return `${r}${n}`;
    },
    isOnline: () => e.asuOnlineAcadPlanUrl,
    // Returns null if online url is not available
    // See getGeneralDegreeMajorMap for more info
    getOnlineMajorMapURL: () => {
      var n;
      const t = e.majorMapOnline, r = t == null ? void 0 : t.find(
        (a) => a.defaultFlag === !0
      );
      return r ? (r == null ? void 0 : r.url) || "" : (n = t == null ? void 0 : t[t.length - 1]) == null ? void 0 : n.url;
    },
    hasCareerData: () => {
      var t;
      return (t = e.careerData) == null ? void 0 : t.length;
    },
    getCareerData: () => e.careerData || [],
    /** @return {Object[]} */
    getCampusList: () => e.campusesOffered || [],
    hasConcurrentOrAccelerateDegrees: () => {
      var t, r;
      return ((t = e.acceleratedAcadPlanCodes) == null ? void 0 : t.length) || ((r = e.concurrentAcadPlanCodes) == null ? void 0 : r.length);
    },
    hasAccelerateDegrees: () => {
      var t;
      return (t = e.acceleratedAcadPlanCodes) == null ? void 0 : t.length;
    },
    hasConcurrentDegrees: () => {
      var t;
      return (t = e.concurrentAcadPlanCodes) == null ? void 0 : t.length;
    },
    getAccelerateDegrees: async () => e.acceleratedAcadPlanCodes ? la(e.acceleratedAcadPlanCodes) : [],
    getConcurrentDegrees: async () => e.concurrentAcadPlanCodes ? la(e.concurrentAcadPlanCodes) : [],
    getCollegeDesc: () => {
      var t;
      return (t = jr(e)) == null ? void 0 : t.collegeDescription;
    },
    getCollegeUrl: () => {
      var t;
      return ((t = jr(e)) == null ? void 0 : t.collegeUrl) || "";
    },
    /** @return {string} */
    getEmailAddress: () => e.emailAddr,
    /** @return {string} */
    getPhone: () => {
      var t;
      return (t = e.phoneNumber) == null ? void 0 : t.replace("/", "-");
    },
    /** @return {string} */
    getProfessionalLicensureText() {
      const t = e.professionalLicensureStandardText || "", r = e.professionalLicensureAdditionalText || "", n = `${t}${r}`;
      try {
        if (new DOMParser().parseFromString(n, "text/html").querySelector("parsererror"))
          return "";
      } catch (a) {
        return console.error("Error parsing HTML: ", a.message), "";
      }
      return n;
    },
    /** @return {string} */
    getDepartmentName: () => {
      var t;
      return (t = jr(e)) == null ? void 0 : t.departmentDescription;
    },
    /** @return {string} */
    getPlanUrl: () => e.academicOfficeUrl,
    // AsuProgramFee
    hasAsuProgramFee: () => e.additionalFee,
    // AsuLangReqFlag
    getAsuLangReqFlag: () => e.languageRequired,
    hasAsuLangReqFlag: () => e.languageRequired,
    // asuMathReqFlag
    hasMathReqFlag: () => e.mathRequired,
    getOtherMathReqCourse: () => e.firstMathCourseRequiredSupplementalText,
    getMathIntensity: () => e.mathIntensityDescription,
    /** @return {string} */
    getMinMathReq: () => {
      const t = e.firstMathCourseRequired;
      if (!t) return "";
      const { subject: r, catalogNumber: n, description: a } = t;
      return `${r} ${n} - ${a}`;
    },
    /** @return {string} */
    getMarketText: () => {
      var t;
      return (t = e.marketingText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getAsuOfficeLoc: () => e.academicOfficeLocation || "",
    /** @return {string} */
    getCampusWue: () => {
      var r;
      const t = e.campusesOffered;
      return t ? (r = t == null ? void 0 : t.find((n) => n.wue === !0)) == null ? void 0 : r.campusCode : null;
    },
    getConcurrentDegreeMajorMaps: () => la(e.concurrentAcadPlanCodes),
    getChangeMajor: () => e.changeMajorRequirementsText,
    getAsuCareerOpportunity: () => e.careerOpportunities,
    getGlobalExp: () => {
      var t;
      return (t = e.globalExperienceText) == null ? void 0 : t.trim();
    },
    /** @return {string} */
    getCollegeAcadOrg: () => {
      var t;
      return (t = jr(e)) == null ? void 0 : t.collegeAcadOrg;
    },
    /** @return {Array} */
    getCollegeAcadOrgJoint: () => {
      const { owners: t } = e;
      return t ? t.map((n) => n.collegeAcadOrg) : [];
    },
    /** @return {string} */
    getDepartmentCode: () => {
      var t;
      return (t = jr(e)) == null ? void 0 : t.departmentAcadOrg;
    },
    /** @return {Object.<string, string>} */
    getGraduateApplyDates: () => e.applicationDeadlines,
    hasGraduateApplyDates: () => Gs(e),
    /** @return {Object.<string, string>} */
    getPlanDeadlines: () => e.applicationDeadlines,
    hasPlanDeadlines: () => Bs(e),
    isValidActiveProgram: () => Ep(e),
    /** @return {boolean} */
    getAsuDegSrchFlg: () => e.activeInDegreeSearch,
    getAsuCustomText: () => e.customText,
    getRequiredCoursesLabel: () => e.acadPlanTypeDescription === "Minor" ? "Minor" : e.acadPlanTypeDescription === "Certificate" ? "Certificate" : "Major",
    getStemOptText: () => e.stemOptText,
    getSubPlnMajorMaps: () => {
      if (!e.subplans || !e.majorMapSubplans) return [];
      let t = [...e.subplans].filter(
        (s) => s.campusesOffered
      );
      const r = [...e.majorMapSubplans], n = (s, c) => s.filter(
        (d) => d.acadSubPlanCode !== c
      ), a = (s, c) => s.some(
        (d) => d.acadSubPlanCode !== c
      ), o = [];
      for (let s = r.length - 1; s >= 0 && t.length !== 0; s -= 1) {
        const c = r[s];
        (c.defaultFlag || a(
          t,
          c.acadSubPlanCode
        )) && (t = n(
          t,
          c.acadSubPlanCode
        ), o.push(c));
      }
      return o;
    },
    getSubPln: () => e.subplans
  };
}
function kp(e) {
  const t = e.getProgramType(), r = [], n = (c) => ({
    text: c,
    url: ""
  }), a = (c) => ({
    text: "Online",
    url: c
  }), o = e.getCampusList().map((c) => c.campusCode);
  o.length > 0 && r.push(
    ...o.map(
      (c) => c === "ONLNE" && a(e.getCurriculumUrl()) || Ti(c, t) || n(c)
    )
  );
  const s = e.getCampusWue();
  return s && r.push(
    Ti(s, t) || n(s)
  ), r;
}
const Ap = (e, t) => {
  const r = { ...e };
  return r.globalOpportunity && !t.getGlobalExp() && (r.globalOpportunity = !1), r.careerOutlook && !t.getAsuCareerOpportunity() && (r.careerOutlook = !1), r.attendOnline && !t.getCurriculumUrl() && (r.attendOnline = !1), r;
}, Np = (e) => {
  var a;
  const t = Object.values(e).filter(
    (o) => o === !0
  );
  return ((a = e == null ? void 0 : e.externalAnchors) == null ? void 0 : a.length) > 0 || t.length > 0;
};
function Cp(e) {
  return "";
}
function Op(e) {
  return "";
}
function jp() {
  return "";
}
function Mn(e, t) {
  let r = t || "";
  return r = r.replaceAll("{INSTITUTION_CODE}", e.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", e.getAcadPlan()), r;
}
function Vs(e, t) {
  return `${Mn(e, t)}#${Fe.flexibleDegreeOptions.acceleratedId}`;
}
function Ai({
  programs: e = [],
  filters: {
    collegeAcadOrg: t,
    departmentCode: r,
    acceleratedConcurrent: n,
    locations: a = [],
    keyword: o,
    blacklistAcadPlans: s,
    program: c,
    showCerts: d
  }
}) {
  const p = (N) => !t || N.getCollegeAcadOrgJoint().includes(t), g = (N) => !r || N.getDepartmentCode().includes(r), m = (N) => {
    var A;
    return !a.length || ((A = N.getCampusList()) == null ? void 0 : A.some((D) => a.some((I) => I.value === D.campusCode)));
  }, f = (N = {}) => {
    var A;
    return !Da(n) || ((A = N[n.value]) == null ? void 0 : A.length) > 0;
  }, E = (N, A) => A ? new RegExp(A, "i").test(N.getFullDescription()) : !0, S = (N) => !(s != null && s.includes(N.getAcadPlan())), T = (N) => c === "undergrad" ? !0 : d === "true" && c === "graduate" ? N.isMinorOrCertificate() : N.isPhdOrMasters(), k = (N) => {
    const A = ur(N);
    return p(A) && g(A) && m(A) && f(N) && E(A, o) && S(A) && T(A);
  };
  return e.filter(k);
}
const Rp = (e) => e.sort(
  (r, n) => r.acadPlanMarketingDescription.localeCompare(
    n.acadPlanMarketingDescription
  )
), It = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: o = "",
  region: s = "",
  component: c = ""
}) => {
  const { dataLayer: d } = window, p = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: s.toLowerCase(),
    section: a.toLowerCase(),
    text: o.toLowerCase(),
    component: c.toLowerCase()
  };
  d && d.push(p);
};
function uo({ breadcrumbs: e, section: t }) {
  const r = Zt("breadcrumb-");
  return e && /* @__PURE__ */ i.jsx("nav", { "aria-label": "breadcrumbs", "data-testid": "breadcrumbs", children: /* @__PURE__ */ i.jsx("ol", { className: "breadcrumb bg-white", children: e.map(
    (n) => n != null && n.isActive ? /* @__PURE__ */ i.jsx(
      "li",
      {
        className: "breadcrumb-item active",
        "aria-current": "page",
        children: /* @__PURE__ */ i.jsx(
          "a",
          {
            href: n == null ? void 0 : n.url,
            onClick: () => It({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: t,
              text: n.text
            }),
            children: n.text
          }
        )
      },
      r.next().value
    ) : /* @__PURE__ */ i.jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ i.jsx(
      "a",
      {
        href: n == null ? void 0 : n.url,
        onClick: () => It({
          event: "link",
          action: "click",
          name: "onclick",
          type: "internal link",
          region: "main content",
          section: t,
          text: n.text
        }),
        children: n.text
      }
    ) }, r.next().value)
  ) }) });
}
uo.propTypes = {
  breadcrumbs: h.arrayOf(Vt),
  section: h.string
};
const _p = () => /* @__PURE__ */ i.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), ua = ({
  id: e,
  label: t,
  selected: r,
  multiple: n,
  options: a,
  onChange: o
}) => /* @__PURE__ */ i.jsxs("div", { className: "form-group", children: [
  /* @__PURE__ */ i.jsx("label", { htmlFor: e, children: t }),
  /* @__PURE__ */ i.jsx(
    "select",
    {
      className: "form-select",
      id: e,
      "data-testid": e,
      multiple: n,
      onChange: (s) => o(e, s),
      value: r,
      children: a == null ? void 0 : a.map((s) => /* @__PURE__ */ i.jsx("option", { id: s.id, value: s.value, children: s.text }, s.id))
    }
  )
] }), Pp = Te.div`
  .hint-container {
    margin-top: -1.25rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .hint-container {
      display: none;
    }
    .filter-action-buttons {
      & {
        * {
          margin: 0;
        }
        .btn-link {
          padding: 1rem;
        }
      }
    }
  }
`, Lp = Te.button`
  font-weight: 400;
  text-decoration: underline;
`, Ip = {
  event: "select",
  action: "click",
  name: "onclick"
}, Dp = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link"
}, Rr = {
  isActive: !1,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: []
}, da = (e) => ({
  id: e.id,
  value: e.value,
  text: e.text
}), Mp = (e) => e.map((t) => t.text).join(", "), Ni = (e, t) => {
  It({ ...Ip, type: e, text: t });
}, Ci = (e) => {
  It({ ...Dp, text: e });
}, Ys = ({ value: e, onChange: t, onApply: r, onClean: n }) => {
  const a = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (d, { target: { selectedOptions: p } }) => {
      let g = [], m = [];
      const f = Array.from(p, da), { locations: E, asuLocals: S } = e;
      ({
        locationsRender: () => {
          g = f, m = S;
        },
        asuLocalsRender: () => {
          m = f, g = E;
        }
      })[`${d}Render`](), t({
        ...e,
        locations: g,
        asuLocals: m
      }), Ni({
        locations: "location or online",
        asuLocals: "as local"
      }[d], Mp(f));
    }
  ), o = (
    /**
    * @param {string} targetId
    * @param {{ target: HTMLSelectElement}} event
    */
    (d, { target: { selectedOptions: p } }) => {
      t({ ...e, [d]: da(p[0]) }), Ni(
        "accelerated/concurrent",
        da(p[0]).text
      );
    }
  ), s = () => {
    r == null || r({
      ...e,
      isActive: !0
    });
  }, c = () => {
    t(Rr), n == null || n();
  };
  return /* @__PURE__ */ i.jsxs(Pp, { className: "container", "data-testid": "filters", children: [
    /* @__PURE__ */ i.jsx("h4", { children: "Filter your results" }),
    /* @__PURE__ */ i.jsxs("form", { className: "mt-3 uds-form row", children: [
      /* @__PURE__ */ i.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ i.jsx(
        ua,
        {
          multiple: !0,
          id: "locations",
          label: "Campuses or online",
          selected: e.locations.map((d) => d.value),
          options: so,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ i.jsx(
        ua,
        {
          multiple: !0,
          id: "asuLocals",
          label: "ASU location, ASU Local",
          selected: e.asuLocals.map((d) => d.value),
          options: Fs,
          onChange: a
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ i.jsx(
        ua,
        {
          id: "acceleratedConcurrent",
          label: "Accelerated, Concurrent",
          selected: e.acceleratedConcurrent.value,
          options: lo,
          onChange: o
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "hint-container", children: /* @__PURE__ */ i.jsx("p", { children: /* @__PURE__ */ i.jsx("small", { children: "*CTRL + Click to select multiple" }) }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "filter-action-buttons", children: [
      /* @__PURE__ */ i.jsx(
        Fr,
        {
          "data-testid": "btn-apply-filter",
          color: "maroon",
          label: "Apply filters",
          ariaLabel: "Apply filters",
          size: "default",
          onClick: () => {
            s(), Ci("apply filters");
          }
        }
      ),
      /* @__PURE__ */ i.jsx(
        Lp,
        {
          "data-testid": "btn-clear-filters",
          className: "btn btn-link",
          onClick: () => {
            c(), Ci("clean filters");
          },
          children: "Clear filters"
        }
      )
    ] })
  ] });
};
Ys.propTypes = {
  value: Ls,
  onChange: h.func,
  onApply: h.func,
  onClean: h.func
};
function Ks({
  value: { isActive: e, locations: t, asuLocals: r, acceleratedConcurrent: n } = {},
  onRemove: a
}) {
  const o = Zt("filter-"), s = (t == null ? void 0 : t.length) + (r == null ? void 0 : r.length) + (Da(n) ? 1 : 0), c = (d, p) => {
    const { text: g } = p;
    return /* @__PURE__ */ i.jsxs(
      "span",
      {
        tabIndex: -1,
        role: "button",
        "aria-label": `Remove filter ${g}`,
        "data-filter-id": d,
        onKeyDown: () => a(d, p),
        onClick: () => a(d, p),
        className: "btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "pe-1", children: g }),
          /* @__PURE__ */ i.jsx("i", { className: "fas fa-times" })
        ]
      },
      o.next().value
    );
  };
  return /* @__PURE__ */ i.jsxs("div", { "data-testid": "filters-summary", children: [
    /* @__PURE__ */ i.jsx("header", { children: /* @__PURE__ */ i.jsx("strong", { children: "Applied filters" }) }),
    /* @__PURE__ */ i.jsx("div", { "data-testid": "summary-filter-tags", children: !e || s === 0 ? /* @__PURE__ */ i.jsx("span", { children: "No filters applied" }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      t.map((d) => c("locations", d)),
      r.map((d) => c("asuLocals", d)),
      (Da(n) ? [n] : []).map((d) => c("acceleratedConcurrent", d))
    ] }) })
  ] });
}
Ks.propTypes = {
  value: Ls,
  onRemove: h.func
};
const $p = Te.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`, Fp = Te.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
function Up({
  applyNowUrl: e,
  title: t,
  contents: r,
  photoGrid: n
}) {
  const a = Dn(t);
  return /* @__PURE__ */ i.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-photo-grid",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ i.jsx(a, { className: "mt-0", children: /* @__PURE__ */ i.jsx("span", { className: `${cr(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ i.jsx(zr, { contents: r }),
          /* @__PURE__ */ i.jsx(Ur, { href: e })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ i.jsx($p, { className: "row", children: n.images.map((o, s) => /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "photo-item col-sm-12 col-md-6 col-lg-6",
            children: /* @__PURE__ */ i.jsx(
              "img",
              {
                className: `mg-fluid ${cr(o.cssClass)}`,
                src: o.url,
                alt: o.altText,
                style: { maxWidth: "100%" }
              }
            )
          },
          `img-${s + 1}`
        )) }) })
      ] })
    }
  );
}
function zp({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n,
  video: a
}) {
  const o = Dn(t);
  return /* @__PURE__ */ i.jsx(
    Fp,
    {
      className: "container",
      "data-type": "text-media",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ i.jsxs("div", { className: "row gy-3", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "col-sm-12 col-md-5", children: [
          /* @__PURE__ */ i.jsx(o, { className: "mt-0", children: /* @__PURE__ */ i.jsx("span", { className: `${cr(t.cssClass)}`, children: t.text }) }),
          /* @__PURE__ */ i.jsx(zr, { contents: r }),
          /* @__PURE__ */ i.jsx(Ur, { href: e })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
          a && /* @__PURE__ */ i.jsx(
            is,
            {
              type: a.type,
              url: a.url,
              vttUrl: a.vttUrl,
              title: a.title,
              className: "mt-0"
            }
          ),
          n && /* @__PURE__ */ i.jsx("div", { className: "uds-img", children: /* @__PURE__ */ i.jsx("img", { src: n.url, className: "img-fluid", alt: n.altText }) })
        ] })
      ] })
    }
  );
}
function Hp({
  applyNowUrl: e,
  title: t,
  contents: r,
  image: n
}) {
  return /* @__PURE__ */ i.jsx(
    "section",
    {
      className: "container",
      "data-type": "text-image-overlay",
      "data-testid": "intro-content",
      children: /* @__PURE__ */ i.jsx("div", { className: "row", children: /* @__PURE__ */ i.jsx("div", { className: "col-md-12", children: /* @__PURE__ */ i.jsx(
        pr,
        {
          title: t.text,
          contents: r,
          image: n,
          contentDirection: "right",
          contentChildren: /* @__PURE__ */ i.jsx("div", { className: "mt-2", children: /* @__PURE__ */ i.jsx(Ur, { href: e }) })
        }
      ) }) })
    }
  );
}
const qp = ({ applyNowUrl: e, title: t, contents: r }) => {
  const n = Dn(t);
  return /* @__PURE__ */ i.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ i.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ i.jsx(n, { className: "mt-0", children: /* @__PURE__ */ i.jsx("span", { className: `${cr(t.cssClass)}`, children: t.text }) }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "col-sm-12 col-md-7", children: [
      /* @__PURE__ */ i.jsx(zr, { contents: r }),
      /* @__PURE__ */ i.jsx(Ur, { href: e })
    ] })
  ] }) });
}, po = ({
  applyNowUrl: e,
  type: t,
  title: r,
  contents: n,
  image: a,
  video: o,
  photoGrid: s
}) => ({
  text: () => qp({ applyNowUrl: e, title: r, contents: n }),
  "text-media": () => zp({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    video: o
  }),
  "text-image-overlay": () => Hp({ applyNowUrl: e, title: r, contents: n, image: a }),
  "text-photo-grid": () => Up({
    applyNowUrl: e,
    title: r,
    contents: n,
    image: a,
    photoGrid: s
  }),
  undefined: () => (console.error(
    `the type '${t}' is not supported by the 'IntroContent' component.`
  ), null)
})[t]();
po.propTypes = {
  applyNowUrl: h.string,
  type: h.oneOf([
    "text",
    "text-media",
    "text-image-overlay",
    "text-photo-grid"
  ]).isRequired,
  video: h.shape({ ...oo }),
  image: h.shape({ ...ao }),
  header: On,
  title: h.shape({
    ...js,
    component: h.oneOf(Is)
  }),
  contents: h.arrayOf(On),
  photoGrid: h.shape({
    images: h.arrayOf(Tt)
  })
};
const $n = {
  programs: h.arrayOf(h.object),
  totalRows: h.number,
  loading: h.bool,
  actionUrls: h.shape({
    applyNowUrl: h.string,
    majorInfoUrl: h.string,
    majorInfoOnlineUrl: h.string
  }),
  degreesPerPage: h.number
}, Wp = Te.div`
  & {
    ul {
      margin-top: 1.5rem;
      margin-bottom: 0;
      list-style: none;
      padding: 0;

      li:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  .accordion .card.card-foldable {
    border-bottom: 1px solid #d0d0d0;
  }
`, Xs = ({ programs: e, actionUrls: t }) => {
  var s, c, d, p, g;
  const { state: r } = kt(mr), n = (c = (s = r == null ? void 0 : r.listPageProps) == null ? void 0 : s.programList) == null ? void 0 : c.settings, a = ((g = (p = (d = r == null ? void 0 : r.listPageProps) == null ? void 0 : d.programList) == null ? void 0 : p.dataSource) == null ? void 0 : g.program) === "graduate", o = e.map((m) => {
    const f = ur(m), E = () => {
      var A;
      const k = f.isOnline() ? f.getOnlineMajorMapURL() : f.getGeneralDegreeMajorMap();
      let N;
      try {
        N = `<a href=${(A = new URL(k)) == null ? void 0 : A.toString()}>${f.getRequiredCoursesLabel()} Map</a>`;
      } catch {
        return "";
      }
      return N;
    }, S = () => `<div>
        ${f.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${f.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${Vs(
      f,
      t.majorInfoUrl
    )}>
                  4+1 years
                </a>
              </div>` : ""}
    </div>`;
    return {
      content: {
        header: f.getMajorDesc(),
        body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${Mn(f, t.majorInfoUrl)}>
              ${f.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${f.getDegree()}
        </li>
        ${a ? "" : `<li>
              <strong>Required Courses:</strong>
              <br />${E()}
            </li>`}
        <li>
          <strong>Campus or location:</strong>
          <br />${f.getCampusList().map((T) => Ma(T.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${S() || "-"}
        </li>
        ${n != null && n.hideCollegeSchool ? "" : ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${f.getCollegeUrl()}>
                    ${f.getCollegeDesc()}
                  </a>
                </li>`}
      </ul>`
      }
    };
  });
  return /* @__PURE__ */ i.jsx(Wp, { "data-testid": "accordion-view", children: /* @__PURE__ */ i.jsx(os, { cards: o }) });
};
Xs.propTypes = {
  ...$n
};
const Gp = Te.section`
  margin: auto;

  .card-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    order: 3;
    margin: 0 1rem 1rem;

    .card-button {
      column-gap: 0;
      padding: 0;
      width: fit-content;
    }
    .card-button .btn {
      margin: 0;
    }
  }
`;
function Zs({ programs: e, loading: t, actionUrls: r }) {
  var d, p, g, m;
  const { defaultState: n, state: a } = kt(mr), o = (m = (g = (p = (d = a == null ? void 0 : a.listPageProps) == null ? void 0 : d.programList) == null ? void 0 : p.settings) == null ? void 0 : g.cardDefaultImage) == null ? void 0 : m.url, s = n.detailPageDefault.hero.image.url, c = o || s;
  return /* @__PURE__ */ i.jsx(
    Gp,
    {
      id: Ms,
      className: "container row",
      "data-loading": t,
      "data-testid": "grid-view",
      children: e.map((f) => {
        const E = ur(f);
        return /* @__PURE__ */ i.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ i.jsx(
          tt,
          {
            type: "degree",
            horizontal: !1,
            clickable: !1,
            image: c,
            imageAltText: "An example image",
            title: E.getMajorDesc(),
            linkLabel: "View Program Details",
            linkUrl: Mn(E, r.majorInfoUrl),
            buttons: [
              {
                color: "maroon",
                size: "small",
                label: "Reqeuest Info",
                href: jp()
              },
              {
                color: "gold",
                size: "small",
                label: "Apply",
                href: r.applyNowUrl
              }
            ]
          }
        ) });
      })
    }
  );
}
Zs.propTypes = {
  ...$n
};
const Bp = [
  {
    dataKey: "Major",
    label: "Major",
    className: "major",
    sortable: !0,
    contentTemplate: ({ resolver: e, rowIndex: t, actionUrls: r, onClick: n }) => /* @__PURE__ */ i.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ i.jsx("a", { href: Mn(e, r == null ? void 0 : r.majorInfoUrl), children: e.getMajorDesc() }),
      /* @__PURE__ */ i.jsx(
        Sp,
        {
          dataId: "show-row-detail",
          ariaLabel: `${e.getMajorDesc()} arrow`,
          ariaControls: `row-info-${t}`,
          onClick: (a) => n(t, a)
        }
      )
    ] })
  },
  {
    dataKey: "Degree",
    label: "Degree",
    className: "degree",
    contentTemplate: ({ resolver: e }) => /* @__PURE__ */ i.jsxs("div", { className: "cell-container", children: [
      /* @__PURE__ */ i.jsx("span", { children: e.getDegree() }),
      /* @__PURE__ */ i.jsx(
        ca,
        {
          popover: {
            title: e.getDegreeDesc(),
            body: e.getDegreeDescLong(),
            withAuto: !1
          }
        }
      )
    ] })
  },
  {
    dataKey: "RequiredCourses",
    label: "Required Courses",
    className: "required-course",
    contentTemplate: ({ resolver: e }) => {
      var a;
      const r = e.isOnline() ? e.getOnlineMajorMapURL() : e.getGeneralDegreeMajorMap();
      let n;
      try {
        const o = (a = new URL(r)) == null ? void 0 : a.toString();
        n = /* @__PURE__ */ i.jsxs("a", { href: o, children: [
          e.getRequiredCoursesLabel(),
          " Map"
        ] });
      } catch {
        return "";
      }
      return n;
    }
  },
  {
    dataKey: "Location",
    label: "Campus or location",
    className: "campus-location",
    sortable: !0,
    contentTemplate: ({ resolver: e }) => {
      const t = Zt("campus-");
      return /* @__PURE__ */ i.jsx("div", { children: e.getCampusList().map((r, n, a) => /* @__PURE__ */ i.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ i.jsx("span", { children: `${Ma(
          ip(r.campusCode)
        )}${n < a.length - 1 ? ", " : ""}` }, r.campusCode),
        /* @__PURE__ */ i.jsx("span", { children: /* @__PURE__ */ i.jsx(
          ca,
          {
            popover: {
              title: Ma(r.campusCode),
              body: () => fetch(Cp(r.campusCode)),
              withAuto: !0
            }
          }
        ) })
      ] }, t.next().value)) });
    }
  },
  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  {
    dataKey: "AcceleratedConcurrent",
    label: "Accelerated/ Concurrent",
    className: "accelerated-concurrent",
    sortable: !0,
    contentTemplate: ({ resolver: e, actionUrls: t }) => /* @__PURE__ */ i.jsxs("div", { children: [
      e.getConcurrentDegrees().then((r) => r).length > 0 && /* @__PURE__ */ i.jsx("div", { className: "cell-container", children: "concurrent" }),
      e.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ i.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ i.jsx("a", { href: Vs(e, t.majorInfoUrl), children: "4+1 years" }),
        /* @__PURE__ */ i.jsx(
          ca,
          {
            popover: {
              title: "4+1 years",
              body: () => fetch(Op(e.getAcadPlan())),
              withAuto: !1
            }
          }
        )
      ] })
    ] })
  },
  {
    dataKey: "CollegeSchool",
    label: "College/School",
    className: "college",
    sortable: !0,
    contentTemplate: ({ resolver: e }) => /* @__PURE__ */ i.jsx("a", { href: e.getCollegeUrl(), children: e.getCollegeDesc() })
  }
  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  // {
  //   dataKey: "compare-fav",
  //   label: "Compare and favorite",
  //   className: "compare-fav",
  //   // todo: refactor this solution
  //   headerTemplate: () => (
  //     <div>
  //       <InfoButtonIcon
  //         onMouseOver={null}
  //         onClick={() => alert("Compare and favorite: info....")}
  //       />
  //     </div>
  //   ),
  //   contentTemplate: ({ row, rowIndex }) => (
  //     <form className="uds-form cell-container">
  //       <div className="form-check m-0">
  //         <input
  //           className="form-check-input"
  //           type="checkbox"
  //           id={`fav-button-${rowIndex}`}
  //           value="option1"
  //         />
  //         <label
  //           className="form-check-label"
  //           htmlFor={`fav-button-${rowIndex}`}
  //         >
  //           &nbsp;
  //         </label>
  //       </div>
  //       <FavButton onClick={() => saveFav(row["AcadPlan"])} />
  //     </form>
  //   ),
  // },
  // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
  // {
  //   dataKey: "compare-apply-info",
  //   label: "",
  //   hasInfo: true,
  //   ariaLabel: "Apply Now or Request Info",
  //   className: "apply-info",
  //   contentTemplate: ({ resolver }) => (
  //     <div className="row flex-column  align-items-end p-1">
  //       <ApplyNow
  //         onClick={() =>
  //           // todo: refactor this solution
  //           alert("APPLY NOW: TODO...")
  //         }
  //       />
  //       <RequestInfo
  //         href={requestInfoLink(
  //           resolver.getAcadPlan(),
  //           resolver.getMajorDesc(),
  //           resolver.getEmailAddress()
  //         )}
  //       />
  //     </div>
  //   ),
  // },
], Vp = to`
  @keyframes loading {
    40% {
      background-position: 100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  &[data-loading="true"] {
    td {
      position: relative;

      .bar {
        background-color: #e7e7e7;
        height: 14px;
        border-radius: 7px;
        width: 80%;
      }

      &:after {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        content: "";
        display: block;
        width: 100%;
        height: 24px;
        background-image: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5) 60%,
          rgba(255, 255, 255, 0) 80%
        );
        background-size: 200px 24px;
        background-position: -100px 0;
        background-repeat: no-repeat;
        animation: loading 1s infinite;
      }
    }
  }
`, Yp = Te.table`
  ${Vp}
  --table-border-color: #e5e5e5;

  background-color: #fafafa;
  border: 1px solid var(--table-border-color);
  border-collapse: collapse;
  padding: 5px;

  width: 100%;
  margin: 0 auto;
  clear: both;
  border-spacing: 0;

  a {
    text-decoration: none;
  }

  thead {
    background: #d0d0d0;
    th {
      outline: none;
      :focus {
        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
      }
    }
  }

  th,
  td {
    padding: 8px 12px;
    // display: inline-block;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    td {
      vertical-align: top;
    }

    .major {
      width: 250px;
      a {
        font-weight: 700;
      }
    }

    .degree {
      width: 75px;
    }

    .required-course {
      width: 100px;
    }

    .campus-location {
      width: 90px;
      & > div {
        width: fit-content;
      }
    }

    .accelerated-concurrent {
      width: 120px;
    }

    .college {
      width: 210px;
    }

    .compare-fav {
      // width: 180px;
    }

    .apply-info {
      width: 168px;
      & .btn {
        width: fit-content;
        :first-child {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  tbody {
    tr {
      border: 1px solid var(--table-border-color);
      border-top: 0;

      &:not(.row-info):hover {
        background-color: #e8e8e8;
      }

      .info-apply .cell-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
      }

      td .cell-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
      }
    }

    tr.row-info {
      td > div {
        position: relative;
      }

      input.togle-more-text {
        opacity: 0;
        position: absolute;
        pointer-events: none;

        &:checked + .desc-long {
          max-height: fit-content;
          overflow: auto;
        }

        &:not(:checked) + .desc-long::after {
          content: " ";
          height: 1rem;
          background: rgba(250, 250, 250, 0.9);
          box-shadow: -1px -2px 20px 15px #fafafa;
          width: 100%;
          position: absolute;
          bottom: 0;
        }

        &:checked + .desc-long + .label-more-less {
          .label-more {
            display: none;
          }
          .label-less {
            display: inline;
          }
        }

        &:not(:checked) + .desc-long + .label-more-less {
          .label-more {
            display: inline;
          }
          .label-less {
            display: none;
          }
        }
      }

      .desc-long {
        max-height: 200px;
        overflow: hidden;
        transform: max-width 0.6;
        p:last-child {
          margin-bottom: 0;
        }
      }

      label.label-more-less {
        cursor: pointer;
        line-height: normal;
        color: #8c1d40;
        text-align: right;
        border: 0;
        margin: 0;
        font-weight: 400;
        display: inline;
        position: absolute;
        bottom: 0.2rem;
        right: -2.5rem;
      }
    }

    tr.row-info {
      td:first-child {
        flex-basis: 55%;
      }

      td:last-child {
      }
    }

    tr:not([data-is-open="true"]) + tr.row-info {
      overflow: hidden;
      height: 0;
    }

    tr[data-is-open="true"] + tr.row-info {
      height: auto;
    }
  }
`, Kp = ({ resolver: e, id: t }) => {
  const r = Il(), n = (a) => {
    a.key === "Enter" && (r == null || r.current.click());
  };
  return /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("header", { children: /* @__PURE__ */ i.jsx("strong", { children: "Program Description:" }) }),
    /* @__PURE__ */ i.jsx("input", { className: "togle-more-text", type: "checkbox", id: `#${t}` }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "desc-long",
        id: t,
        dangerouslySetInnerHTML: ct(
          e.getFullDescription()
        )
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "label",
      {
        ref: r,
        className: "label-more-less element-focus",
        htmlFor: `#${t}`,
        role: "button",
        tabIndex: 0,
        onKeyDown: n,
        children: [
          /* @__PURE__ */ i.jsx("span", { "data-testid": "more-text", className: "label-more", children: "[...more]" }),
          /* @__PURE__ */ i.jsx("span", { "data-testid": "less-text", className: "label-less", children: "[...less]" })
        ]
      }
    )
  ] });
}, Xp = ({ resolver: e }) => /* @__PURE__ */ i.jsxs("div", { children: [
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("strong", { children: "Additional Program Fee: " }),
    e.hasAsuProgramFee() ? "Yes" : "No"
  ] }),
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("strong", { children: "Second Language Requirement: " }),
    e.hasAsuLangReqFlag() ? "Yes" : "No"
  ] }),
  e.hasMathReqFlag() && /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("strong", { children: "First Required Math Course:" }),
    /* @__PURE__ */ i.jsx("span", { children: e.getMinMathReq() }),
    e.getOtherMathReqCourse() && /* @__PURE__ */ i.jsx(
      "span",
      {
        dangerouslySetInnerHTML: ct(
          e.getOtherMathReqCourse()
        )
      }
    )
  ] }) }),
  e.getMathIntensity() && /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("strong", { children: "Math Intensity:" }),
    e.getMathIntensity()
  ] })
] }), Zp = Zt("row-"), Js = ({ programs: e, totalRows: t, loading: r, actionUrls: n }) => {
  var g, m;
  const a = ht.useRef(null), o = ht.useRef(null), { state: s } = kt(mr), c = (m = (g = s == null ? void 0 : s.listPageProps) == null ? void 0 : g.programList) == null ? void 0 : m.settings;
  let d = Bp;
  s.listPageProps.programList.dataSource.program === "graduate" && (d = d.filter((f) => f.dataKey !== "RequiredCourses")), c != null && c.hideCollegeSchool && (d = d.filter((f) => f.dataKey !== "CollegeSchool"));
  const p = (f, E) => {
    const S = o.current.children;
    Array.prototype.forEach.call(
      S,
      (k, N) => N !== f && k.setAttribute("data-is-open", "false")
    ), o.current.children[f].setAttribute("data-is-open", String(E));
  };
  return /* @__PURE__ */ i.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ i.jsxs(
    Yp,
    {
      id: Ms,
      ref: a,
      "data-loading": r,
      title: `${t} program found`,
      children: [
        /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsx("tr", { role: "row", children: d.map((f) => {
          var E;
          return /* @__PURE__ */ i.jsx(
            "th",
            {
              tabIndex: 0,
              className: `${f.className}`,
              scope: "col",
              "aria-label": f.ariaLabel,
              children: ((E = f.headerTemplate) == null ? void 0 : E.call(f)) || /* @__PURE__ */ i.jsx("span", { children: f.label })
            },
            f.dataKey
          );
        }) }) }),
        /* @__PURE__ */ i.jsxs("tbody", { ref: o, "data-testid": "program-rows", children: [
          e.length === 0 ? /* @__PURE__ */ i.jsx("tr", { role: "presentation", children: /* @__PURE__ */ i.jsx(
            "td",
            {
              colSpan: d.length,
              "aria-label": "No result found for the filters applied",
              children: " "
            }
          ) }) : null,
          // programs
          e.map((f, E) => {
            const S = Zp.next().value, T = E * 2, k = ur(f);
            return /* @__PURE__ */ i.jsxs(_i, { children: [
              /* @__PURE__ */ i.jsx("tr", { role: "row", children: d.map((N) => {
                var A;
                return /* @__PURE__ */ i.jsx(
                  "td",
                  {
                    className: `${N.className}`,
                    children: (A = N.contentTemplate) == null ? void 0 : A.call(N, {
                      resolver: k,
                      col: N,
                      row: f,
                      rowIndex: T,
                      onClick: p,
                      actionUrls: n
                    })
                  },
                  `${S}-${N.dataKey}`
                );
              }) }, S),
              /* @__PURE__ */ i.jsxs(
                "tr",
                {
                  id: `row-info-${T}`,
                  className: "row-info",
                  children: [
                    /* @__PURE__ */ i.jsx("td", { colSpan: 3, children: Kp({ resolver: k, id: `${S}-more-text` }) }, `${S}-info`),
                    /* @__PURE__ */ i.jsx("td", { colSpan: 2, children: Xp({ resolver: k }) }, `${S}-extra-info`)
                  ]
                },
                `${S}-row-info`
              )
            ] }, S);
          })
        ] })
      ]
    }
  ) });
};
Js.propTypes = {
  ...$n
};
const Jp = In`

  .mobile-view {
    display: none;
  }
  [data-view-type="list-view"] {
    @media (max-width: 768px) {
      .desktop-view {
        display: none;
      }
      .mobile-view {
        display: block;
        .card-foldable .card-header h4 a {
          color: #8c1d40;
        }
      }
    }
  }
`, Qp = {
  [Ds]: Zs,
  [Ia]: Js
};
function Qs({
  dataViewComponent: e,
  loading: t,
  programs: r,
  actionUrls: n,
  degreesPerPage: a
}) {
  let o;
  a ? typeof a != "number" && (o = parseInt(a, 10)) : o = 8;
  const s = a || o, c = lp(r.length, s), d = Qp[e], [p, g] = Be([]), m = (f, E) => {
    const S = (E - 1) * s, T = S + s;
    g(r.slice(S, T));
  };
  return mt(() => {
    g(r.slice(0, s));
  }, [r]), /* @__PURE__ */ i.jsxs("section", { "data-testid": "program-list", "data-view-type": e, children: [
    /* @__PURE__ */ i.jsx(Jp, {}),
    /* @__PURE__ */ i.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ i.jsx(
      d,
      {
        loading: t,
        programs: p,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || o
      }
    ) }),
    /* @__PURE__ */ i.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ i.jsx(
      Xs,
      {
        loading: t,
        programs: p,
        totalRows: r == null ? void 0 : r.length,
        actionUrls: n,
        degreesPerPage: a || o
      }
    ) }),
    r.length > 0 ? /* @__PURE__ */ i.jsx(
      xu,
      {
        totalNumbers: 7,
        type: "default",
        background: "white",
        totalPages: c,
        onChange: m,
        showFirstButton: !0,
        showLastButton: !0
      }
    ) : /* @__PURE__ */ i.jsx("section", { className: "container no-space", children: /* @__PURE__ */ i.jsx(Bd, { message: "No result found for the filters applied" }) })
  ] });
}
Qs.propTypes = {
  dataViewComponent: h.string,
  ...$n,
  degreesPerPage: h.number
};
const em = Te.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`, el = ({ value: e, onChange: t, onSearch: r }) => {
  const [n, a] = Be(!1);
  let o;
  mt(() => () => clearTimeout(o), []);
  const s = (c) => {
    It({
      event: "search",
      action: "type",
      name: "onenter",
      type: "search degree programs",
      text: c
    });
  };
  return /* @__PURE__ */ i.jsx(
    em,
    {
      className: "container mt-5",
      "data-searching": n,
      "data-testid": "search-bar",
      children: /* @__PURE__ */ i.jsx(
        "form",
        {
          "data-testid": "search-bar-form",
          className: "uds-form p-0 col-md-6 col-sm-12",
          onSubmit: (c) => {
            c.preventDefault(), r(), a(!0), o = setTimeout(() => a(!1), 500), clearTimeout(o);
          },
          children: /* @__PURE__ */ i.jsxs("div", { className: "form-group mb-0 me-2", children: [
            /* @__PURE__ */ i.jsx("label", { htmlFor: "search-field", children: "Search" }),
            /* @__PURE__ */ i.jsxs("div", { className: "d-flex row align-items-baseline g-3", children: [
              /* @__PURE__ */ i.jsx("div", { className: "col-sm-12 col-md-6 align-self-end", children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  "data-testid": "search-field",
                  id: "search-field",
                  value: e,
                  type: "text",
                  className: "form-control",
                  placeholder: "Search degree programs",
                  onChange: (c) => {
                    t(c.target.value), s(c.target.value);
                  }
                }
              ) }),
              /* @__PURE__ */ i.jsx("div", { className: "col-sm-12 col-md-6 mt-2 mt-sm-0", children: /* @__PURE__ */ i.jsx(
                Fr,
                {
                  "data-testid": "search-button",
                  color: "maroon",
                  label: "Search now",
                  ariaLabel: "Search now",
                  size: "default",
                  onClick: r
                }
              ) })
            ] })
          ] })
        }
      )
    }
  );
};
el.propTypes = {
  value: h.string,
  onChange: h.func,
  onSearch: h.func
};
const tm = Te(Ws)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`, rm = In`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`, nm = Te.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`, mo = ({
  appPathFolder: e,
  actionUrls: t,
  hasSearchBar: r = !0,
  hasFilters: n = !0,
  hero: a,
  introContent: o,
  programList: s,
  degreesPerPage: c
}) => {
  var L;
  const [{ data: d, loading: p, error: g }, m] = Ts(), [f, E] = Be(!1), [S, T] = Be([]), [k, N] = Be([]), [A, D] = Be(""), I = (L = s.settings) == null ? void 0 : L.defaultView, v = [Ia, Ds].includes(I) ? I : Ia, [_, j] = Be(v), z = zs(s.dataSource, dp), { defaultState: ie } = kt(mr), { listingPageDefault: he } = ie, {
    collegeAcadOrg: ee,
    departmentCode: Z,
    showInactivePrograms: ne,
    blacklistAcadPlans: G,
    program: ue,
    cert: Se
  } = s.dataSource, [se, be] = Be({
    ...Rr
  }), [Ee, J] = Be({
    ...Rr
  });
  Tp({
    dataSource: s.dataSource,
    tableView: S,
    programs: d,
    stateFilters: se
  }), mt(() => {
    typeof window < "u" && As({
      packageName: "app-degree-pages",
      component: "ListingPage",
      type: "NA",
      configuration: {
        programList: s,
        degreesPerPage: c
      }
    });
  }, []), mt(() => {
    m(z);
  }, [z]), mt(() => {
    let O = Rp(d || []);
    O = Ai({
      programs: O,
      filters: {
        collegeAcadOrg: ee,
        departmentCode: Z,
        blacklistAcadPlans: G,
        program: ue,
        showCerts: Se
      }
    }), N(O), T(O);
  }, [d, c]);
  const H = async (O) => {
    const { acceleratedConcurrent: ae, locations: re, asuLocals: V, keyword: K } = O;
    E(!0), m(z);
    const oe = Ai({
      programs: k,
      filters: {
        collegeAcadOrg: ee,
        departmentCode: Z,
        acceleratedConcurrent: ae,
        locations: V.length > 0 ? re.concat(ap) : re,
        keyword: K,
        showInactivePrograms: ne ?? !1,
        blacklistAcadPlans: G,
        program: ue
      }
    });
    be({ ...O }), J({ ...O }), T(oe), E(!1);
  }, R = async () => {
    const O = {
      ...Ee,
      keyword: A
    };
    H(O);
  }, C = (O) => {
    p || f || H(O);
  }, x = async (O) => {
    be(O);
  }, P = () => {
    be(Rr), J(Rr), T(k), D("");
  }, y = (O, { value: ae }) => {
    const re = O === "acceleratedConcurrent" ? op : Ee[O].filter((K) => K.value !== ae), V = {
      ...Ee,
      [O]: re
    };
    H(V);
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(qs, {}),
    /* @__PURE__ */ i.jsx(rm, {}),
    g && /* @__PURE__ */ i.jsx(Ns, { message: $s }),
    a != null && a.hide ? null : /* @__PURE__ */ i.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ i.jsx(
      Pn,
      {
        image: (a == null ? void 0 : a.image) || he.hero.image,
        title: {
          text: np(s.dataSource),
          highlightColor: "gold",
          ...a == null ? void 0 : a.title,
          maxWidth: "100%"
        },
        contents: a == null ? void 0 : a.contents
      }
    ) }),
    /* @__PURE__ */ i.jsxs(tm, { "data-is-loading": p, className: "main-section dg-margin-top", children: [
      (o == null ? void 0 : o.breadcrumbs) && /* @__PURE__ */ i.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ i.jsx(
        uo,
        {
          breadcrumbs: o.breadcrumbs,
          section: a ? a.title.text : ""
        }
      ) }),
      o ? /* @__PURE__ */ i.jsx(
        po,
        {
          applyNowUrl: (t == null ? void 0 : t.applyNowUrl) || he.actionUrls.applyNowUrl,
          type: o.type,
          header: o.header,
          title: o.title,
          contents: o.contents,
          image: o.image,
          video: o.video,
          photoGrid: o.photoGrid
        }
      ) : null,
      r || n ? /* @__PURE__ */ i.jsxs("section", { className: "no-space", children: [
        /* @__PURE__ */ i.jsx(_p, {}),
        r ? /* @__PURE__ */ i.jsx(
          el,
          {
            value: A,
            onChange: D,
            onSearch: R
          }
        ) : null,
        n ? /* @__PURE__ */ i.jsx(
          Ys,
          {
            value: se,
            onChange: x,
            onApply: C,
            onClean: P
          }
        ) : null,
        /* @__PURE__ */ i.jsx(nm, {})
      ] }) : null,
      /* @__PURE__ */ i.jsx("section", { className: "container", children: /* @__PURE__ */ i.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: n ? /* @__PURE__ */ i.jsx(
        Ks,
        {
          value: Ee,
          onRemove: y
        }
      ) : null }) }),
      p || f ? /* @__PURE__ */ i.jsx(Cs, {}) : /* @__PURE__ */ i.jsx(
        Qs,
        {
          dataViewComponent: _,
          loading: p || f,
          programs: S,
          actionUrls: t,
          degreesPerPage: c
        }
      )
    ] })
  ] });
};
mo.propTypes = {
  appPathFolder: h.string,
  actionUrls: h.shape({
    applyNowUrl: h.string
  }),
  hasSearchBar: h.bool,
  hasFilters: h.bool,
  hero: h.shape(Pn.propTypes),
  introContent: h.shape(po.propTypes),
  programList: h.shape({
    dataSource: Rs,
    settings: Zd
  }),
  degreesPerPage: h.number
};
const tl = (e) => /* @__PURE__ */ i.jsx(co, { listPageProps: e, children: /* @__PURE__ */ i.jsx(mo, { ...e }) });
tl.propTypes = mo.propTypes;
const am = Te.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`, om = Te.div`
  background-image: url("https://asu.github.io/asu-unity-stack/@asu/unity-bootstrap-theme/static/media/TopoPatternWhite.529b0b3d.png");
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1920px;
  height: 100%;
  z-index: -1;
`;
function im() {
  return /* @__PURE__ */ i.jsxs(
    am,
    {
      className: "container",
      id: Fe.affordingCollege.targetIdName,
      "data-testid": "affording-college",
      children: [
        /* @__PURE__ */ i.jsx(om, {}),
        /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
        /* @__PURE__ */ i.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              icon: ["fas", "calculator"],
              title: "Tuition estimator",
              body: "The tuition estimator shows the tuition and fee breakdown for your particular major, campus and residency status without financial aid.",
              buttons: [
                {
                  label: "Estimate tuition and fees",
                  ariaLabel: "Estimate tuition and fees",
                  color: "maroon",
                  href: "https://tuition.asu.edu/cost-calculator/tuition"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              icon: ["fas", "award"],
              title: "Scholarships",
              body: "Scholarships are a type of aid that does not need to be paid back. Some you apply for and some are automatic.",
              buttons: [
                {
                  label: "Learn about scholarships",
                  ariaLabel: "Learn about scholarships",
                  color: "maroon",
                  href: "https://scholarships.asu.edu/"
                }
              ]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              icon: ["fas", "hand-holding-usd"],
              title: "Financial aid",
              body: "There are many financial aid options available for students. In fact, more than 80 percent of all ASU students receive some form of financial assistance every year.",
              buttons: [
                {
                  label: "Explore financial aid",
                  ariaLabel: "Explore financial aid",
                  color: "maroon",
                  href: "https://tuition.asu.edu/financial-aid"
                }
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
var rl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var c = arguments[s];
        c && (o = a(o, n(c)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var c in o)
        t.call(o, c) && o[c] && (s = a(s, c));
      return s;
    }
    function a(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(rl);
var sm = rl.exports;
const lm = /* @__PURE__ */ Ua(sm), cm = Te.ul`
  display: inline-flex;
  list-style: none;
  padding: 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    .btn {
      width: max-content;
      margin-left: 0;
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
`, um = ({
  transferRequirements: e = "",
  additionalRequirements: t = ""
}) => {
  const r = [
    {
      label: "Freshman",
      href: "https://admission.asu.edu/freshman/apply"
    },
    { label: "Transfer", href: "https://admission.asu.edu/transfer/apply" },
    {
      label: "International",
      href: "https://admission.asu.edu/international/undergrad-apply"
    },
    {
      label: "Readmission",
      href: "https://admission.asu.edu/undergrad/readmission"
    }
  ], n = [];
  return t != null && t.trim() && n.push({
    content: {
      header: "Additional Requirements",
      body: t
    }
  }), e != null && e.trim() && n.push({
    content: {
      header: "Transfer Admission Requirements",
      body: e
    }
  }), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("p", { children: "All students are required to meet general university admission requirements" }),
    /* @__PURE__ */ i.jsx(
      cm,
      {
        className: lm("", {
          "mb-0": n.length === 0
        }),
        children: r.map(({ label: a, href: o }) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx(
          Fr,
          {
            ariaLabel: a,
            color: "maroon",
            href: o,
            label: a,
            size: "small"
          }
        ) }, a))
      }
    ),
    n.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ i.jsx(os, { cards: n, openedCard: 1 }) })
  ] });
};
function nl({
  graduateRequirements: e,
  transferRequirements: t,
  isMinorOrCertificate: r,
  additionalRequirements: n,
  minorRequirements: a
}) {
  let o;
  return e || r ? o = r ? "Program requirements" : "Degree requirements" : o = r ? "Program requirements" : "Admission requirements", /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs(
      "section",
      {
        id: Fe.applicationRequirements.targetIdName,
        "data-testid": "application-requirements",
        children: [
          /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: o }) }),
          e || r ? /* @__PURE__ */ i.jsx(
            "div",
            {
              dangerouslySetInnerHTML: ct(
                e || a
              )
            }
          ) : um({
            transferRequirements: t,
            additionalRequirements: n
          })
        ]
      }
    ),
    e || r ? /* @__PURE__ */ i.jsxs(
      "section",
      {
        id: Fe.degreeRequirements.targetIdName,
        "data-testid": "degree-requirements",
        children: [
          /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              dangerouslySetInnerHTML: ct(
                n
              )
            }
          )
        ]
      }
    ) : null
  ] });
}
nl.propTypes = {
  graduateRequirements: h.string,
  transferRequirements: h.string,
  isMinorOrCertificate: h.bool,
  additionalRequirements: h.string,
  minorRequirements: h.string
};
const or = ({ item: e, type: t }) => {
  const r = Zt("glance-"), n = () => typeof e == "object" ? e.map((a, o) => {
    const s = ["", "#"].includes(a.url) ? null : a.url;
    let c = "";
    return o > 0 && o < e.length - 1 && (c = ", "), o === e.length - 1 && e.length > 1 && (c = " or "), /* @__PURE__ */ i.jsxs(_i, { children: [
      c,
      /* @__PURE__ */ i.jsx("a", { href: s, rel: "noreferrer", target: "_blank", children: a.text })
    ] }, r.next().value);
  }) : e;
  return /* @__PURE__ */ i.jsxs("li", { children: [
    /* @__PURE__ */ i.jsx("i", { className: `fas fa-${Si[t].icon} fa-li` }),
    /* @__PURE__ */ i.jsxs("strong", { children: [
      Si[t].title,
      ": "
    ] }),
    n()
  ] });
};
or.propTypes = {
  item: h.oneOfType([
    h.arrayOf(Pa),
    h.string
  ]),
  type: h.string
};
const al = ({
  offeredBy: e,
  locations: t,
  firstRequirementMathCourse: r,
  mathIntensity: n,
  timeCommitment: a
}) => /* @__PURE__ */ i.jsxs(
  "section",
  {
    id: Fe.atAGlance.targetIdName,
    "data-testid": "at-aglance",
    children: [
      /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
      /* @__PURE__ */ i.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
        e && /* @__PURE__ */ i.jsx(or, { item: [e], type: "offeredBy" }),
        t && /* @__PURE__ */ i.jsx(or, { item: t, type: "locations" }),
        r && /* @__PURE__ */ i.jsx(
          or,
          {
            item: r,
            type: "firstRequirementMathCourse"
          }
        ),
        n && /* @__PURE__ */ i.jsx(or, { item: n, type: "mathIntensity" }),
        a && /* @__PURE__ */ i.jsx(or, { item: a, type: "timeCommitment" })
      ] })
    ]
  }
);
al.propTypes = {
  offeredBy: Pa.isRequired,
  locations: h.arrayOf(Pa).isRequired,
  firstRequirementMathCourse: h.string.isRequired,
  mathIntensity: h.string,
  timeCommitment: h.string
};
const dm = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
function ol({ image: e, learnMoreLink: t, contents: r }) {
  const n = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${e.url}')`, a = Zt("attend-online-");
  return /* @__PURE__ */ i.jsx(
    "section",
    {
      id: Fe.attendOnline.targetIdName,
      className: "uds-card-and-image",
      style: {
        backgroundImage: n
      },
      "data-testid": "attend-online",
      children: /* @__PURE__ */ i.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ i.jsxs("div", { className: "card card-centered", children: [
        /* @__PURE__ */ i.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
        /* @__PURE__ */ i.jsx("div", { className: "card-header", children: /* @__PURE__ */ i.jsx("h3", { className: "card-title", children: "Attend online" }) }),
        /* @__PURE__ */ i.jsx("div", { className: "card-body", children: r ? r.map((o) => /* @__PURE__ */ i.jsx("p", { children: o }, a.next().value)) : /* @__PURE__ */ i.jsx("p", { children: dm }) }),
        /* @__PURE__ */ i.jsx("div", { className: "card-button", children: /* @__PURE__ */ i.jsx(
          Fr,
          {
            label: "Learn about online options",
            ariaLabel: "Learn about online options",
            href: t,
            color: "maroon",
            size: "small"
          }
        ) })
      ] }) })
    }
  );
}
ol.propTypes = {
  learnMoreLink: h.string,
  image: Tt,
  contents: h.arrayOf(
    h.shape({
      text: h.string
    })
  )
};
const pm = Te.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, il = ({ contents: e, image: t }) => /* @__PURE__ */ i.jsx(
  pm,
  {
    id: Fe.careerOutlook.targetIdName,
    "data-testid": "career-outlook",
    children: /* @__PURE__ */ i.jsx(
      pr,
      {
        headingTag: "H2",
        title: Fe.careerOutlook.text,
        contents: e,
        image: t
      }
    )
  }
);
il.propTypes = pr.propTypes;
const mm = Te.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
function sl({ content: e }) {
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      id: Fe.changeMajorRequirements.targetIdName,
      className: "change-your-major",
      "data-testid": "change-your-major",
      children: [
        /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
        /* @__PURE__ */ i.jsx(
          mm,
          {
            dangerouslySetInnerHTML: ct(e)
          }
        )
      ]
    }
  );
}
sl.propTypes = {
  content: h.string
};
function ll({ content: e = "" }) {
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      "data-testid": "custom-text",
      className: "mt-3",
      dangerouslySetInnerHTML: ct(e)
    }
  );
}
ll.propTypes = {
  content: h.string
};
const cl = `
  width: unset !important;
  min-width: unset !important;
`, ul = Te.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${cl}
`, dl = Te.i`
  color: #78be21;
  ${cl}
`;
function pl({ data: e }) {
  return /* @__PURE__ */ i.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ i.jsxs("table", { children: [
    /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { children: [
      /* @__PURE__ */ i.jsx("th", { scope: "col", children: "Career" }),
      /* @__PURE__ */ i.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
      /* @__PURE__ */ i.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
    ] }) }),
    /* @__PURE__ */ i.jsx("tbody", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ i.jsxs("tr", { children: [
      /* @__PURE__ */ i.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
        /* @__PURE__ */ i.jsx("a", { href: t.career.url, target: "_blank", rel: "noreferrer", children: t.career.text }),
        t.greenOccupation && /* @__PURE__ */ i.jsx(dl, { className: "fas fa-leaf ms-1" }),
        t.brightOutlook && /* @__PURE__ */ i.jsx(ul, { className: "fas fa-sun ms-1" })
      ] }),
      /* @__PURE__ */ i.jsxs("td", { className: "text-end", children: [
        +t.growth,
        "%"
      ] }),
      /* @__PURE__ */ i.jsx("td", { className: "text-end", children: t.medianSalary || 0 })
    ] }, t.career.url)) })
  ] }) });
}
pl.propTypes = {
  data: h.arrayOf(_s)
};
function ml({ tableData: e }) {
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      id: Fe.exampleCareers.targetIdName,
      className: "container",
      "data-testid": "example-careers",
      children: [
        /* @__PURE__ */ i.jsx("h3", { children: "Example careers" }),
        /* @__PURE__ */ i.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
        /* @__PURE__ */ i.jsxs("div", { className: "mt-4 mb-4", children: [
          /* @__PURE__ */ i.jsx(pl, { data: e }),
          /* @__PURE__ */ i.jsx("p", { children: /* @__PURE__ */ i.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ i.jsxs("p", { className: "me-3", children: [
            /* @__PURE__ */ i.jsx(ul, { className: "fas fa-sun me-1" }),
            "Bright outlook"
          ] }),
          /* @__PURE__ */ i.jsxs("p", { children: [
            /* @__PURE__ */ i.jsx(dl, { className: "fas fa-leaf me-1" }),
            "Green occupation"
          ] })
        ] })
      ]
    }
  );
}
ml.propTypes = {
  tableData: h.arrayOf(_s)
};
const fm = Te.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 320px;
  li:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (max-width: 767px) {
    max-height: 100%;
  }
`, $a = ({ id: e, title: t, links: r }) => /* @__PURE__ */ i.jsxs("div", { id: e, className: "mt-4", children: [
  /* @__PURE__ */ i.jsx("h3", { children: t }),
  /* @__PURE__ */ i.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
  /* @__PURE__ */ i.jsx(fm, { className: "mt-3 mb-3", children: r.map((n, a) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx("a", { href: n.url, target: "_blank", rel: "noreferrer", children: n.title }) }, `${n.title}-${a}`)
  )) }),
  /* @__PURE__ */ i.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
] });
$a.propTypes = {
  id: h.string,
  title: h.string,
  links: La
};
function fl({ acceleratedLinks: e, concurrentLinks: t }) {
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      id: Fe.flexibleDegreeOptions.targetIdName,
      className: "container",
      "data-testid": "flexible-degree-options",
      children: [
        /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
        !!e.length && /* @__PURE__ */ i.jsx(
          $a,
          {
            id: Fe.flexibleDegreeOptions.acceleratedId,
            title: "Accelerated program options",
            links: e
          }
        ),
        !!t.length && /* @__PURE__ */ i.jsx(
          $a,
          {
            id: Fe.flexibleDegreeOptions.concurrentId,
            title: "Concurrent degree program",
            links: t
          }
        )
      ]
    }
  );
}
fl.propTypes = {
  acceleratedLinks: La,
  concurrentLinks: La
};
const hm = Te.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`, hl = ({ contents: e, image: t }) => /* @__PURE__ */ i.jsx(
  hm,
  {
    id: Fe.globalOpportunity.targetIdName,
    "data-testid": "global-opportunity",
    children: /* @__PURE__ */ i.jsx(
      pr,
      {
        headingTag: "H2",
        title: Fe.globalOpportunity.text,
        contents: e,
        image: t
      }
    )
  }
);
hl.propTypes = pr.propTypes;
const gl = ({ url: e, altText: t }) => /* @__PURE__ */ i.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ i.jsx("img", { src: e, className: "img-fluid", alt: t }) });
gl.propTypes = { ...ao };
const gm = (e, t) => {
  if (e !== "youtube")
    return t;
  const r = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = t.match(r);
  return n && n[7].length === 11 ? `https://www.youtube.com/embed/${n[7]}` : t;
}, ym = Te.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`, yl = ({ type: e, url: t, vttUrl: r, title: n }) => /* @__PURE__ */ i.jsx(ym, { "data-testid": "intro-video", children: /* @__PURE__ */ i.jsx(
  is,
  {
    type: e,
    url: gm(e, t),
    vttUrl: r,
    title: n,
    controls: !0
  }
) });
yl.propTypes = { ...oo };
function bl({ contents: e = [] }) {
  return /* @__PURE__ */ i.jsx("div", { "data-testid": "market-text", children: e.map((t, r) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `mt-3 ${cr(t.cssClass)}`,
      dangerouslySetInnerHTML: ct(t.text)
    },
    `content-${r + 1}`
  )) });
}
bl.propTypes = {
  contents: h.arrayOf(On)
};
function vl({ cards: e, defaultCards: t }) {
  var r, n, a, o, s, c, d, p, g, m, f, E;
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      className: "container",
      id: Fe.nextSteps.targetIdName,
      "data-testid": "next-steps",
      children: [
        /* @__PURE__ */ i.jsx("h2", { children: "Next steps to attend ASU" }),
        /* @__PURE__ */ i.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              icon: ((r = e == null ? void 0 : e.learnMore) == null ? void 0 : r.icon) ?? t.learnMore.icon,
              title: ((n = e == null ? void 0 : e.learnMore) == null ? void 0 : n.title) ?? t.learnMore.title,
              body: ((a = e == null ? void 0 : e.learnMore) == null ? void 0 : a.content) ?? t.learnMore.content,
              buttons: [
                ((o = e == null ? void 0 : e.learnMore) == null ? void 0 : o.buttonLink) ?? t.learnMore.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              icon: ((s = e == null ? void 0 : e.apply) == null ? void 0 : s.icon) ?? t.apply.icon,
              title: ((c = e == null ? void 0 : e.apply) == null ? void 0 : c.title) ?? t.apply.title,
              body: ((d = e == null ? void 0 : e.apply) == null ? void 0 : d.content) ?? t.apply.content,
              buttons: [
                ((p = e == null ? void 0 : e.apply) == null ? void 0 : p.buttonLink) ?? t.apply.buttonLink
              ]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              icon: ((g = e == null ? void 0 : e.visit) == null ? void 0 : g.icon) ?? t.visit.icon,
              title: ((m = e == null ? void 0 : e.visit) == null ? void 0 : m.title) ?? t.visit.title,
              body: ((f = e == null ? void 0 : e.visit) == null ? void 0 : f.content) ?? t.visit.content,
              buttons: [
                ((E = e == null ? void 0 : e.visit) == null ? void 0 : E.buttonLink) ?? t.visit.buttonLink
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
vl.propTypes = {
  cards: h.shape({
    learnMore: qt,
    apply: qt,
    visit: qt
  }),
  defaultCards: h.shape({
    learnMore: qt,
    apply: qt,
    visit: qt
  })
};
function xl({ content: e = "" }) {
  return /* @__PURE__ */ i.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
    /* @__PURE__ */ i.jsx("h3", { children: "Professional licensure" }),
    /* @__PURE__ */ i.jsx("p", { dangerouslySetInnerHTML: ct(e) })
  ] });
}
xl.propTypes = {
  content: h.node
};
const pa = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "Program contact information"
}, bm = Te.ul`
  list-style: none;
  margin-left: 0rem;
  padding-left: 0rem;

  & li {
    display: flex;
    align-items: center;
    :not(:first-child) {
      display: flex;
      padding-bottom: 0.5rem;
    }

    :first-child div {
      display: flex;
    }

    :nth-of-type(2) {
      padding-bottom: 2rem;
    }

    > div {
      display: flex;
      align-items: center;
    }

    .c-icon,
    i {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    .office-loc {
      margin-left: 1.5rem;
    }
  }
`;
function wl({ department: e, asuOfficeLoc: t, email: r, phone: n }) {
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      id: Fe.programContactInfo.targetIdName,
      "data-testid": "program-contact-info",
      children: [
        /* @__PURE__ */ i.jsx("h2", { children: /* @__PURE__ */ i.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
        /* @__PURE__ */ i.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
        /* @__PURE__ */ i.jsxs(bm, { className: "text-maroon", children: [
          /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx(
              "i",
              {
                className: "c-icon fas icon-small fa-map-marker-alt",
                title: "Department  Address"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "a",
              {
                href: e.url,
                onClick: () => It({ ...pa, text: e.text }),
                children: e.text
              }
            )
          ] }) }),
          /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx("div", { className: "c-icon text-dark office-loc", children: t }) }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("i", { className: "c-icon fas icon-small fa-envelope", title: "Email" }),
            /* @__PURE__ */ i.jsx(
              "a",
              {
                href: `mailto:${r.url || r.text}`,
                onClick: () => It({ ...pa, text: r.text }),
                children: r.text
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("i", { className: "c-icon fas icon-small fa-phone", title: "Phone" }),
            /* @__PURE__ */ i.jsx(
              "a",
              {
                href: `tel:${n}`,
                onClick: () => It({ ...pa, text: n }),
                children: n
              }
            )
          ] })
        ] })
      ]
    }
  );
}
wl.propTypes = {
  department: Vt,
  asuOfficeLoc: h.string,
  email: Vt,
  phone: h.string
};
function Fa({ content: e, stemOptText: t, programNotFound: r }) {
  return /* @__PURE__ */ i.jsxs("div", { "data-testid": "program-description", children: [
    /* @__PURE__ */ i.jsx("h2", { children: r ? "Program not found" : "Program description" }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        "data-testid": "program-description-body",
        dangerouslySetInnerHTML: ct(e)
      }
    ),
    t && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("p", { children: /* @__PURE__ */ i.jsx("strong", { children: Qd }) }),
      /* @__PURE__ */ i.jsx(
        "div",
        {
          "data-testid": "stem-opt-text",
          dangerouslySetInnerHTML: ct(t)
        }
      )
    ] })
  ] });
}
Fa.propTypes = {
  content: h.string,
  stemOptText: h.string,
  programNotFound: h.bool
};
const vm = "https://changemajor.apps.asu.edu/", xm = "On-campus students", wm = "Online students", Sm = "View major map -", Oi = "View major map";
function Sl({
  onlineMajorMapURL: e = "",
  majorMapOnCampusURL: t = "",
  subPlnMajorMaps: r = [],
  subPlns: n = []
}) {
  const a = (g) => {
    const m = n.find(
      (f) => f.acadSubPlanCode === g
    );
    return m ? m.description : "";
  }, o = (g, m, f) => {
    g && f.push({
      href: g,
      text: m
    });
  }, s = [], c = [];
  r.forEach((g) => {
    const m = a(g.acadSubPlanCode), f = `${Sm} ${m}`;
    o(g.url, f, s);
  }), t && o(t, Oi, s), e && o(e, Oi, c);
  const d = (g, m) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("h5", { children: g }),
    /* @__PURE__ */ i.jsx("ul", { className: "mb-3", children: m.map((f) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx("a", { href: f.href, children: f.text }) }, f.href)) })
  ] }), p = () => /* @__PURE__ */ i.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
    /* @__PURE__ */ i.jsx("h4", { children: "Required courses (major map)" }),
    s.length > 0 && d(xm, s),
    c.length > 0 && d(wm, c),
    /* @__PURE__ */ i.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "What if:" }),
      " See how your courses can be applied to another major and find out how to ",
      /* @__PURE__ */ i.jsx("a", { href: vm, children: "change your major" })
    ] })
  ] });
  return !(r != null && r.length) && !e && !t ? /* @__PURE__ */ i.jsx("div", {}) : p();
}
Sl.propTypes = {
  onlineMajorMapURL: h.string,
  majorMapOnCampusURL: h.string,
  subPlnMajorMaps: h.arrayOf(
    h.shape({
      campus: h.string,
      acadSubPlanCode: h.string,
      defaultFlag: h.bool,
      url: h.string
    })
  ),
  subPlns: h.arrayOf(
    h.shape({
      acadSubPlanCode: h.string,
      description: h.string
    })
  )
};
const Tl = ({ sectionIntroText: e, cards: t, defaultCards: r }) => {
  var n, a, o, s, c, d, p, g, m, f, E, S, T, k, N, A, D, I, v, _, j, z, ie, he, ee, Z, ne, G, ue, Se, se, be, Ee, J, H, R, C, x, P, y, L, O;
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      id: Fe.whyChooseAsu.targetIdName,
      className: "container",
      "data-testid": "why-choose-asu",
      children: [
        /* @__PURE__ */ i.jsx("h2", { children: "Why choose ASU" }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            dangerouslySetInnerHTML: ct(e)
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "mt-2 row", children: [
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              image: ((a = (n = t == null ? void 0 : t.faculty) == null ? void 0 : n.image) == null ? void 0 : a.url) ?? r.faculty.image.url,
              imageAltText: ((s = (o = t == null ? void 0 : t.faculty) == null ? void 0 : o.image) == null ? void 0 : s.altText) ?? r.faculty.image.altText,
              title: ((c = t == null ? void 0 : t.faculty) == null ? void 0 : c.title) ?? r.faculty.title,
              body: ((d = t == null ? void 0 : t.faculty) == null ? void 0 : d.text) ?? r.faculty.text,
              buttons: [((p = t == null ? void 0 : t.faculty) == null ? void 0 : p.button) ?? r.faculty.button]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              image: ((m = (g = t == null ? void 0 : t.programs) == null ? void 0 : g.image) == null ? void 0 : m.url) ?? r.programs.image.url,
              imageAltText: ((E = (f = t == null ? void 0 : t.programs) == null ? void 0 : f.image) == null ? void 0 : E.altText) ?? r.programs.image.altText,
              title: ((S = t == null ? void 0 : t.programs) == null ? void 0 : S.title) ?? r.programs.title,
              body: ((T = t == null ? void 0 : t.programs) == null ? void 0 : T.text) ?? r.programs.text,
              buttons: [((k = t == null ? void 0 : t.programs) == null ? void 0 : k.button) ?? r.programs.button]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              image: ((A = (N = t == null ? void 0 : t.research) == null ? void 0 : N.image) == null ? void 0 : A.url) ?? r.research.image.url,
              imageAltText: ((I = (D = t == null ? void 0 : t.research) == null ? void 0 : D.image) == null ? void 0 : I.altText) ?? r.research.image.altText,
              title: ((v = t == null ? void 0 : t.research) == null ? void 0 : v.title) ?? r.research.title,
              body: ((_ = t == null ? void 0 : t.research) == null ? void 0 : _.text) ?? r.research.text,
              buttons: [((j = t == null ? void 0 : t.research) == null ? void 0 : j.button) ?? r.research.button]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              image: ((ie = (z = t == null ? void 0 : t.inclusion) == null ? void 0 : z.image) == null ? void 0 : ie.url) ?? r.inclusion.image.url,
              imageAltText: ((ee = (he = t == null ? void 0 : t.inclusion) == null ? void 0 : he.image) == null ? void 0 : ee.altText) ?? r.inclusion.image.altText,
              title: ((Z = t == null ? void 0 : t.inclusion) == null ? void 0 : Z.title) ?? r.inclusion.title,
              body: ((ne = t == null ? void 0 : t.inclusion) == null ? void 0 : ne.text) ?? r.inclusion.text,
              buttons: [
                ((G = t == null ? void 0 : t.inclusion) == null ? void 0 : G.button) ?? r.inclusion.button
              ]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              image: ((Se = (ue = t == null ? void 0 : t.mentors) == null ? void 0 : ue.image) == null ? void 0 : Se.url) ?? r.mentors.image.url,
              imageAltText: ((be = (se = t == null ? void 0 : t.mentors) == null ? void 0 : se.image) == null ? void 0 : be.altText) ?? r.mentors.image.altText,
              title: ((Ee = t == null ? void 0 : t.mentors) == null ? void 0 : Ee.title) ?? r.mentors.title,
              body: ((J = t == null ? void 0 : t.mentors) == null ? void 0 : J.text) ?? r.mentors.text,
              buttons: [((H = t == null ? void 0 : t.mentors) == null ? void 0 : H.button) ?? r.mentors.button]
            }
          ) }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ i.jsx(
            tt,
            {
              image: ((C = (R = t == null ? void 0 : t.honors) == null ? void 0 : R.image) == null ? void 0 : C.url) ?? r.honors.image.url,
              imageAltText: ((P = (x = t == null ? void 0 : t.honors) == null ? void 0 : x.image) == null ? void 0 : P.altText) ?? r.honors.image.altText,
              title: ((y = t == null ? void 0 : t.honors) == null ? void 0 : y.title) ?? r.honors.title,
              body: ((L = t == null ? void 0 : t.honors) == null ? void 0 : L.text) ?? r.honors.text,
              buttons: [((O = t == null ? void 0 : t.honors) == null ? void 0 : O.button) ?? r.honors.button]
            }
          ) })
        ] })
      ]
    }
  );
};
Tl.propTypes = Ps;
const fo = ({
  appPathFolder: e,
  dataSource: t,
  anchorMenu: r,
  hero: n,
  introContent: a,
  atAGlance: o,
  applicationRequirements: s,
  changeMajorRequirements: c,
  affordingCollege: d,
  flexibleDegreeOptions: p,
  careerOutlook: g,
  exampleCareers: m,
  globalOpportunity: f,
  attendOnline: E,
  programContactInfo: S,
  nextSteps: T,
  whyChooseAsu: k
}) => {
  var ne, G, ue, Se;
  const [{ data: N, loading: A, error: D }, I] = Ts(), [v, _] = Be(ur({})), [j, z] = Be({ accelerateData: [], concurrentData: [] }), ie = zs(t, pp), { defaultState: he } = kt(mr), { detailPageDefault: ee } = he;
  mt(() => {
    typeof window < "u" && As({
      packageName: "app-degree-pages",
      component: "DetailPage",
      type: "NA",
      configuration: {
        dataSource: t
      }
    });
  }, []), mt(() => {
    I(ie);
  }, [ie]), mt(() => {
    if (N) {
      const se = ur(N);
      _(se), se.hasConcurrentOrAccelerateDegrees() && yp(
        [
          se.getAccelerateDegrees(),
          se.getConcurrentDegrees()
        ],
        z
      );
    }
  }, [N]);
  const Z = Ap(r, v);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(qs, {}),
    D && /* @__PURE__ */ i.jsx(Ns, { message: $s }),
    !(n != null && n.hide) && /* @__PURE__ */ i.jsx("section", { children: /* @__PURE__ */ i.jsx(
      Pn,
      {
        image: (n == null ? void 0 : n.image) || ee.hero.image,
        title: {
          ...ee.hero.title,
          text: v.getMajorDesc(),
          ...n == null ? void 0 : n.title
        },
        contents: n == null ? void 0 : n.contents
      }
    ) }),
    !A && Np(Z) && /* @__PURE__ */ i.jsx(Us, { anchorMenu: Z }),
    /* @__PURE__ */ i.jsxs(Ws, { as: "div", "data-is-loading": A, className: "main-section", children: [
      A && /* @__PURE__ */ i.jsx(Cs, {}),
      !A && (N != null && N.error ? /* @__PURE__ */ i.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ i.jsx(
        Fa,
        {
          content: ep,
          programNotFound: !0
        }
      ) }) : /* @__PURE__ */ i.jsxs("section", { className: "container mt-4 mb-0", children: [
        (a == null ? void 0 : a.breadcrumbs) && /* @__PURE__ */ i.jsx("div", { className: "row col-12", children: /* @__PURE__ */ i.jsx(
          uo,
          {
            breadcrumbs: a.breadcrumbs,
            section: n ? n.title.text : v.getMajorDesc()
          }
        ) }),
        /* @__PURE__ */ i.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
            /* @__PURE__ */ i.jsxs("section", { className: "intro", children: [
              !v.isValidActiveProgram() && /* @__PURE__ */ i.jsx(ll, { content: v.getAsuCustomText() }),
              !(a != null && a.hideMarketText) && ((a == null ? void 0 : a.contents) || v.getMarketText()) && /* @__PURE__ */ i.jsx(
                bl,
                {
                  contents: (a == null ? void 0 : a.contents) || [
                    { text: v.getMarketText() }
                  ]
                }
              ),
              !(a != null && a.hideProgramDesc) && /* @__PURE__ */ i.jsx(
                Fa,
                {
                  content: v.getFullDescription(),
                  stemOptText: v.getStemOptText()
                }
              )
            ] }),
            !(o != null && o.hide) && /* @__PURE__ */ i.jsx(
              al,
              {
                offeredBy: (o == null ? void 0 : o.offeredBy) || {
                  text: v.getCollegeDesc(),
                  url: v.getCollegeUrl()
                },
                locations: (o == null ? void 0 : o.locations) || kp(v),
                firstRequirementMathCourse: (o == null ? void 0 : o.firstRequirementMathCourse) || v.getMinMathReq(),
                mathIntensity: (o == null ? void 0 : o.mathIntensity) || v.getMathIntensity()
              }
            ),
            !(a != null && a.hideRequiredCourses) && !v.isMinorOrCertificate() && /* @__PURE__ */ i.jsx(
              Sl,
              {
                onlineMajorMapURL: v.getOnlineMajorMapURL(),
                majorMapOnCampusURL: v.getGeneralDegreeMajorMap(),
                subPlnMajorMaps: v.getSubPlnMajorMaps(),
                subPlns: v.getSubPln()
              }
            ),
            !(s != null && s.hide) && /* @__PURE__ */ i.jsx(
              nl,
              {
                graduateRequirements: v.isGradProgram() ? v.getGraduateRequirements() : null,
                isMinorOrCertificate: v.isMinorOrCertificate(),
                minorRequirements: v.getMinorCourseRequirements(),
                additionalRequirements: v.getAdmissionsRequirementsText(),
                transferRequirements: v.getTransferAdmission()
              }
            ),
            !(c != null && c.hide) && !v.isMinorOrCertificate() && !v.isGradProgram() && /* @__PURE__ */ i.jsx(sl, { content: v.getChangeMajor() })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
            (a == null ? void 0 : a.video) && /* @__PURE__ */ i.jsx(
              yl,
              {
                type: a.video.type,
                url: a.video.url,
                vttUrl: a.video.vttUrl,
                title: a.video.title
              }
            ),
            !(a != null && a.video) && /* @__PURE__ */ i.jsx(
              gl,
              {
                url: ((ne = a == null ? void 0 : a.image) == null ? void 0 : ne.url) || ee.introContent.image.url,
                altText: ((G = a == null ? void 0 : a.image) == null ? void 0 : G.altText) || ee.introContent.image.altText
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
          !(T != null && T.hide) && !v.isMinorOrCertificate() && /* @__PURE__ */ i.jsx(
            vl,
            {
              cards: T == null ? void 0 : T.cards,
              defaultCards: ee.nextSteps.cards
            }
          ),
          !(d != null && d.hide) && /* @__PURE__ */ i.jsx(im, {}),
          !(p != null && p.hide) && v.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ i.jsx(
            fl,
            {
              acceleratedLinks: Ei(
                j.accelerateData
              ),
              concurrentLinks: Ei(
                j.concurrentData
              )
            }
          ),
          !(g != null && g.hide) && v.getAsuCareerOpportunity() && /* @__PURE__ */ i.jsx(
            il,
            {
              image: (g == null ? void 0 : g.image) || ee.careerOutlook.image,
              contents: [{ text: v.getAsuCareerOpportunity() }]
            }
          ),
          !(m != null && m.hide) && v.hasCareerData() && /* @__PURE__ */ i.jsx(
            ml,
            {
              tableData: mp(v.getCareerData())
            }
          ),
          v.getProfessionalLicensureText() && /* @__PURE__ */ i.jsx(
            xl,
            {
              content: v.getProfessionalLicensureText()
            }
          ),
          !(f != null && f.hide) && v.getGlobalExp() && /* @__PURE__ */ i.jsx(
            hl,
            {
              contents: [{ text: v.getGlobalExp() }],
              image: (f == null ? void 0 : f.image) || ee.globalOpportunity.image
            }
          ),
          !(k != null && k.hide) && /* @__PURE__ */ i.jsx(
            Tl,
            {
              sectionIntroText: (k == null ? void 0 : k.sectionIntroText) || ee.whyChooseAsu.sectionIntroText,
              cards: k == null ? void 0 : k.cards,
              defaultCards: ee.whyChooseAsu.cards
            }
          ),
          !(E != null && E.hide) && v.isOnline() && /* @__PURE__ */ i.jsx(
            ol,
            {
              learnMoreLink: v.getCurriculumUrl(),
              image: (E == null ? void 0 : E.image) || ee.attendOnline.image
            }
          )
        ] }),
        !(S != null && S.hide) && /* @__PURE__ */ i.jsx("div", { className: "row", children: /* @__PURE__ */ i.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ i.jsx(
          wl,
          {
            department: {
              text: v.getDepartmentName(),
              url: ((ue = S == null ? void 0 : S.department) == null ? void 0 : ue.url) || v.getPlanUrl()
            },
            email: {
              text: v.getEmailAddress(),
              url: ((Se = S == null ? void 0 : S.email) == null ? void 0 : Se.url) || v.getEmailAddress()
            },
            asuOfficeLoc: v.getAsuOfficeLoc(),
            phone: v.getPhone()
          }
        ) }) })
      ] }))
    ] })
  ] });
};
fo.propTypes = {
  appPathFolder: h.string,
  dataSource: Rs,
  anchorMenu: h.shape(io),
  hero: h.shape(Pn.propTypes),
  introContent: h.shape({
    hideMarketText: h.bool,
    hideProgramDesc: h.bool,
    hideRequiredCourses: h.bool,
    breadcrumbs: dn.arrayOf(Vt),
    // eslint-disable-next-line react/forbid-prop-types
    contents: dn.arrayOf(h.object),
    video: Kd,
    image: Tt
  }),
  atAGlance: h.shape({
    hide: h.bool,
    offeredBy: Vt,
    locations: dn.arrayOf(Vt),
    firstRequirementMathCourse: h.string,
    mathIntensity: h.string,
    timeCommitment: h.string
  }),
  applicationRequirements: h.shape({ hide: h.bool }),
  changeMajorRequirements: h.shape({ hide: h.bool }),
  affordingCollege: h.shape({ hide: h.bool }),
  flexibleDegreeOptions: h.shape({ hide: h.bool }),
  careerOutlook: h.shape({
    hide: h.bool,
    image: Tt
  }),
  exampleCareers: h.shape({ hide: h.bool }),
  globalOpportunity: h.shape({
    hide: h.bool,
    image: Tt
  }),
  attendOnline: h.shape({
    hide: h.bool,
    image: Tt
  }),
  programContactInfo: h.shape({
    hide: h.bool,
    department: h.string,
    email: h.string
  }),
  nextSteps: h.shape({
    hide: h.bool,
    cards: h.arrayOf(qt)
  }),
  whyChooseAsu: h.shape(Ps)
};
const El = (e) => /* @__PURE__ */ i.jsx(co, { detailPageProps: e, children: /* @__PURE__ */ i.jsx(fo, { ...e }) });
El.propTypes = fo.propTypes;
var kl, ji = Ml;
kl = ji.createRoot, ji.hydrateRoot;
const Al = (e, t, r) => {
  const n = document.querySelector(r);
  kl(n).render(ht.createElement(e, t));
}, Am = ({ targetSelector: e, props: t }) => {
  Al(tl, t, e);
}, Nm = ({ targetSelector: e, props: t }) => {
  Al(El, t, e);
};
export {
  El as DetailPage,
  tl as ListingPage,
  Am as initListingPage,
  Nm as initProgramDetailPage
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
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
