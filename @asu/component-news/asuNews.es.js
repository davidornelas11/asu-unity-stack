import * as rr from "react";
import ar, { useId as Pl, useRef as Il, useContext as yn, createElement as Ml, useEffect as In, useState as Dl } from "react";
import * as Fl from "react-dom";
import jl from "react-dom";
function Oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vs = { exports: {} }, En = {};
var pi;
function $l() {
  if (pi) return En;
  pi = 1;
  var e = ar, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, c, p) {
    var b, y = {}, x = null, I = null;
    p !== void 0 && (x = "" + p), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (I = c.ref);
    for (b in c) n.call(c, b) && !s.hasOwnProperty(b) && (y[b] = c[b]);
    if (f && f.defaultProps) for (b in c = f.defaultProps, c) y[b] === void 0 && (y[b] = c[b]);
    return { $$typeof: t, type: f, key: x, ref: I, props: y, _owner: a.current };
  }
  return En.Fragment = r, En.jsx = l, En.jsxs = l, En;
}
vs.exports = $l();
var Y = vs.exports, Ft = { env: { NODE_ENV: "production" } }, zl = { 651: function(e) {
  e.exports = function() {
    function t(re) {
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Q) {
        return typeof Q;
      } : function(Q) {
        return Q && typeof Symbol == "function" && Q.constructor === Symbol && Q !== Symbol.prototype ? "symbol" : typeof Q;
      }, t(re);
    }
    function r(re, Q) {
      return r = Object.setPrototypeOf || function(oe, K) {
        return oe.__proto__ = K, oe;
      }, r(re, Q);
    }
    function n(re, Q, oe) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct : function(K, ee, Oe) {
        var Qe = [null];
        Qe.push.apply(Qe, ee);
        var mt = new (Function.bind.apply(K, Qe))();
        return Oe && r(mt, Oe.prototype), mt;
      }, n.apply(null, arguments);
    }
    function a(re) {
      return function(Q) {
        if (Array.isArray(Q)) return s(Q);
      }(re) || function(Q) {
        if (typeof Symbol < "u" && Q[Symbol.iterator] != null || Q["@@iterator"] != null) return Array.from(Q);
      }(re) || function(Q, oe) {
        if (Q) {
          if (typeof Q == "string") return s(Q, oe);
          var K = Object.prototype.toString.call(Q).slice(8, -1);
          return K === "Object" && Q.constructor && (K = Q.constructor.name), K === "Map" || K === "Set" ? Array.from(Q) : K === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K) ? s(Q, oe) : void 0;
        }
      }(re) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function s(re, Q) {
      (Q == null || Q > re.length) && (Q = re.length);
      for (var oe = 0, K = new Array(Q); oe < Q; oe++) K[oe] = re[oe];
      return K;
    }
    var l = Object.hasOwnProperty, f = Object.setPrototypeOf, c = Object.isFrozen, p = Object.getPrototypeOf, b = Object.getOwnPropertyDescriptor, y = Object.freeze, x = Object.seal, I = Object.create, A = typeof Reflect < "u" && Reflect, O = A.apply, R = A.construct;
    O || (O = function(re, Q, oe) {
      return re.apply(Q, oe);
    }), y || (y = function(re) {
      return re;
    }), x || (x = function(re) {
      return re;
    }), R || (R = function(re, Q) {
      return n(re, a(Q));
    });
    var D, j = we(Array.prototype.forEach), Z = we(Array.prototype.pop), q = we(Array.prototype.push), L = we(String.prototype.toLowerCase), B = we(String.prototype.toString), $ = we(String.prototype.match), ue = we(String.prototype.replace), Re = we(String.prototype.indexOf), He = we(String.prototype.trim), Se = we(RegExp.prototype.test), pe = (D = TypeError, function() {
      for (var re = arguments.length, Q = new Array(re), oe = 0; oe < re; oe++) Q[oe] = arguments[oe];
      return R(D, Q);
    });
    function we(re) {
      return function(Q) {
        for (var oe = arguments.length, K = new Array(oe > 1 ? oe - 1 : 0), ee = 1; ee < oe; ee++) K[ee - 1] = arguments[ee];
        return O(re, Q, K);
      };
    }
    function de(re, Q, oe) {
      var K;
      oe = (K = oe) !== null && K !== void 0 ? K : L, f && f(re, null);
      for (var ee = Q.length; ee--; ) {
        var Oe = Q[ee];
        if (typeof Oe == "string") {
          var Qe = oe(Oe);
          Qe !== Oe && (c(Q) || (Q[ee] = Qe), Oe = Qe);
        }
        re[Oe] = !0;
      }
      return re;
    }
    function De(re) {
      var Q, oe = I(null);
      for (Q in re) O(l, re, [Q]) === !0 && (oe[Q] = re[Q]);
      return oe;
    }
    function dt(re, Q) {
      for (; re !== null; ) {
        var oe = b(re, Q);
        if (oe) {
          if (oe.get) return we(oe.get);
          if (typeof oe.value == "function") return we(oe.value);
        }
        re = p(re);
      }
      return function(K) {
        return console.warn("fallback value for", K), null;
      };
    }
    var Fe = y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ge = y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ge = y(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), le = y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), U = y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), z = y(["#text"]), C = y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), G = y(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), E = y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), X = y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), V = x(/\{\{[\w\W]*|[\w\W]*\}\}/gm), be = x(/<%[\w\W]*|[\w\W]*%>/gm), ve = x(/\${[\w\W]*}/gm), ie = x(/^data-[\-\w.\u00B7-\uFFFF]/), fe = x(/^aria-[\-\w]+$/), ye = x(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ee = x(/^(?:\w+script|data):/i), _e = x(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), xe = x(/^html$/i), me = x(/^[a-z][.\w]*(-[.\w]+)+$/i), Ae = function() {
      return typeof window > "u" ? null : window;
    }, Je = function re() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ae(), oe = function(T) {
        return re(T);
      };
      if (oe.version = "2.5.6", oe.removed = [], !Q || !Q.document || Q.document.nodeType !== 9) return oe.isSupported = !1, oe;
      var K = Q.document, ee = Q.document, Oe = Q.DocumentFragment, Qe = Q.HTMLTemplateElement, mt = Q.Node, ct = Q.Element, jt = Q.NodeFilter, wr = Q.NamedNodeMap, jr = wr === void 0 ? Q.NamedNodeMap || Q.MozNamedAttrMap : wr, sr = Q.HTMLFormElement, lr = Q.DOMParser, $t = Q.trustedTypes, zt = ct.prototype, Rt = dt(zt, "cloneNode"), Yt = dt(zt, "nextSibling"), _r = dt(zt, "childNodes"), yt = dt(zt, "parentNode");
      if (typeof Qe == "function") {
        var cr = ee.createElement("template");
        cr.content && cr.content.ownerDocument && (ee = cr.content.ownerDocument);
      }
      var st = function(T, ae) {
        if (t(T) !== "object" || typeof T.createPolicy != "function") return null;
        var ce = null, je = "data-tt-policy-suffix";
        ae.currentScript && ae.currentScript.hasAttribute(je) && (ce = ae.currentScript.getAttribute(je));
        var ot = "dompurify" + (ce ? "#" + ce : "");
        try {
          return T.createPolicy(ot, { createHTML: function(lt) {
            return lt;
          }, createScriptURL: function(lt) {
            return lt;
          } });
        } catch {
          return console.warn("TrustedTypes policy " + ot + " could not be created."), null;
        }
      }($t, K), $e = st ? st.createHTML("") : "", Pt = ee, Ye = Pt.implementation, At = Pt.createNodeIterator, It = Pt.createDocumentFragment, ur = Pt.getElementsByTagName, Nt = K.importNode, kr = {};
      try {
        kr = De(ee).documentMode ? ee.documentMode : {};
      } catch {
      }
      var wt = {};
      oe.isSupported = typeof yt == "function" && Ye && Ye.createHTMLDocument !== void 0 && kr !== 9;
      var Mt, et, Xt = V, Sr = be, bt = ve, xr = ie, dr = fe, Ar = Ee, Zt = _e, Ht = me, xt = ye, Xe = null, Or = de({}, [].concat(a(Fe), a(Be), a(Ge), a(le), a(z))), nt = null, Kt = de({}, [].concat(a(C), a(G), a(E), a(X))), Ue = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), he = null, _ = null, J = !0, se = !0, Pe = !1, ze = !0, tt = !1, at = !0, gt = !1, rt = !1, Ot = !1, St = !1, Er = !1, Jt = !1, Tr = !0, $r = !1, Rr = !0, fr = !1, Bt = {}, pr = null, Yr = de({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), zr = null, o = de({}, ["audio", "video", "img", "source", "image", "track"]), d = null, g = de({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), k = "http://www.w3.org/1998/Math/MathML", M = "http://www.w3.org/2000/svg", N = "http://www.w3.org/1999/xhtml", H = N, ne = !1, ke = null, Te = de({}, [k, M, N], B), Ne = ["application/xhtml+xml", "text/html"], We = null, Ut = ee.createElement("form"), Dt = function(T) {
        return T instanceof RegExp || T instanceof Function;
      }, Et = function(T) {
        We && We === T || (T && t(T) === "object" || (T = {}), T = De(T), Mt = Mt = Ne.indexOf(T.PARSER_MEDIA_TYPE) === -1 ? "text/html" : T.PARSER_MEDIA_TYPE, et = Mt === "application/xhtml+xml" ? B : L, Xe = "ALLOWED_TAGS" in T ? de({}, T.ALLOWED_TAGS, et) : Or, nt = "ALLOWED_ATTR" in T ? de({}, T.ALLOWED_ATTR, et) : Kt, ke = "ALLOWED_NAMESPACES" in T ? de({}, T.ALLOWED_NAMESPACES, B) : Te, d = "ADD_URI_SAFE_ATTR" in T ? de(De(g), T.ADD_URI_SAFE_ATTR, et) : g, zr = "ADD_DATA_URI_TAGS" in T ? de(De(o), T.ADD_DATA_URI_TAGS, et) : o, pr = "FORBID_CONTENTS" in T ? de({}, T.FORBID_CONTENTS, et) : Yr, he = "FORBID_TAGS" in T ? de({}, T.FORBID_TAGS, et) : {}, _ = "FORBID_ATTR" in T ? de({}, T.FORBID_ATTR, et) : {}, Bt = "USE_PROFILES" in T && T.USE_PROFILES, J = T.ALLOW_ARIA_ATTR !== !1, se = T.ALLOW_DATA_ATTR !== !1, Pe = T.ALLOW_UNKNOWN_PROTOCOLS || !1, ze = T.ALLOW_SELF_CLOSE_IN_ATTR !== !1, tt = T.SAFE_FOR_TEMPLATES || !1, at = T.SAFE_FOR_XML !== !1, gt = T.WHOLE_DOCUMENT || !1, St = T.RETURN_DOM || !1, Er = T.RETURN_DOM_FRAGMENT || !1, Jt = T.RETURN_TRUSTED_TYPE || !1, Ot = T.FORCE_BODY || !1, Tr = T.SANITIZE_DOM !== !1, $r = T.SANITIZE_NAMED_PROPS || !1, Rr = T.KEEP_CONTENT !== !1, fr = T.IN_PLACE || !1, xt = T.ALLOWED_URI_REGEXP || xt, H = T.NAMESPACE || N, Ue = T.CUSTOM_ELEMENT_HANDLING || {}, T.CUSTOM_ELEMENT_HANDLING && Dt(T.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ue.tagNameCheck = T.CUSTOM_ELEMENT_HANDLING.tagNameCheck), T.CUSTOM_ELEMENT_HANDLING && Dt(T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ue.attributeNameCheck = T.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), T.CUSTOM_ELEMENT_HANDLING && typeof T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Ue.allowCustomizedBuiltInElements = T.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), tt && (se = !1), Er && (St = !0), Bt && (Xe = de({}, a(z)), nt = [], Bt.html === !0 && (de(Xe, Fe), de(nt, C)), Bt.svg === !0 && (de(Xe, Be), de(nt, G), de(nt, X)), Bt.svgFilters === !0 && (de(Xe, Ge), de(nt, G), de(nt, X)), Bt.mathMl === !0 && (de(Xe, le), de(nt, E), de(nt, X))), T.ADD_TAGS && (Xe === Or && (Xe = De(Xe)), de(Xe, T.ADD_TAGS, et)), T.ADD_ATTR && (nt === Kt && (nt = De(nt)), de(nt, T.ADD_ATTR, et)), T.ADD_URI_SAFE_ATTR && de(d, T.ADD_URI_SAFE_ATTR, et), T.FORBID_CONTENTS && (pr === Yr && (pr = De(pr)), de(pr, T.FORBID_CONTENTS, et)), Rr && (Xe["#text"] = !0), gt && de(Xe, ["html", "head", "body"]), Xe.table && (de(Xe, ["tbody"]), delete he.tbody), y && y(T), We = T);
      }, Cr = de({}, ["mi", "mo", "mn", "ms", "mtext"]), Qt = de({}, ["foreignobject", "annotation-xml"]), Xr = de({}, ["title", "style", "font", "a", "script"]), er = de({}, Be);
      de(er, Ge), de(er, ge);
      var Hr = de({}, le);
      de(Hr, U);
      var vt = function(T) {
        q(oe.removed, { element: T });
        try {
          T.parentNode.removeChild(T);
        } catch {
          try {
            T.outerHTML = $e;
          } catch {
            T.remove();
          }
        }
      }, Nr = function(T, ae) {
        try {
          q(oe.removed, { attribute: ae.getAttributeNode(T), from: ae });
        } catch {
          q(oe.removed, { attribute: null, from: ae });
        }
        if (ae.removeAttribute(T), T === "is" && !nt[T]) if (St || Er) try {
          vt(ae);
        } catch {
        }
        else try {
          ae.setAttribute(T, "");
        } catch {
        }
      }, Dn = function(T) {
        var ae, ce;
        if (Ot) T = "<remove></remove>" + T;
        else {
          var je = $(T, /^[\r\n\t ]+/);
          ce = je && je[0];
        }
        Mt === "application/xhtml+xml" && H === N && (T = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + T + "</body></html>");
        var ot = st ? st.createHTML(T) : T;
        if (H === N) try {
          ae = new lr().parseFromString(ot, Mt);
        } catch {
        }
        if (!ae || !ae.documentElement) {
          ae = Ye.createDocument(H, "template", null);
          try {
            ae.documentElement.innerHTML = ne ? $e : ot;
          } catch {
          }
        }
        var lt = ae.body || ae.documentElement;
        return T && ce && lt.insertBefore(ee.createTextNode(ce), lt.childNodes[0] || null), H === N ? ur.call(ae, gt ? "html" : "body")[0] : gt ? ae.documentElement : lt;
      }, Fn = function(T) {
        return At.call(T.ownerDocument || T, T, jt.SHOW_ELEMENT | jt.SHOW_COMMENT | jt.SHOW_TEXT | jt.SHOW_PROCESSING_INSTRUCTION | jt.SHOW_CDATA_SECTION, null, !1);
      }, jn = function(T) {
        return T instanceof sr && (typeof T.nodeName != "string" || typeof T.textContent != "string" || typeof T.removeChild != "function" || !(T.attributes instanceof jr) || typeof T.removeAttribute != "function" || typeof T.setAttribute != "function" || typeof T.namespaceURI != "string" || typeof T.insertBefore != "function" || typeof T.hasChildNodes != "function");
      }, Zr = function(T) {
        return t(mt) === "object" ? T instanceof mt : T && t(T) === "object" && typeof T.nodeType == "number" && typeof T.nodeName == "string";
      }, mr = function(T, ae, ce) {
        wt[T] && j(wt[T], function(je) {
          je.call(oe, ae, ce, We);
        });
      }, tr = function(T) {
        var ae;
        if (mr("beforeSanitizeElements", T, null), jn(T) || Se(/[\u0080-\uFFFF]/, T.nodeName)) return vt(T), !0;
        var ce = et(T.nodeName);
        if (mr("uponSanitizeElement", T, { tagName: ce, allowedTags: Xe }), T.hasChildNodes() && !Zr(T.firstElementChild) && (!Zr(T.content) || !Zr(T.content.firstElementChild)) && Se(/<[/\w]/g, T.innerHTML) && Se(/<[/\w]/g, T.textContent) || ce === "select" && Se(/<template/i, T.innerHTML) || T.nodeType === 7 || at && T.nodeType === 8 && Se(/<[/\w]/g, T.data)) return vt(T), !0;
        if (!Xe[ce] || he[ce]) {
          if (!he[ce] && Kr(ce) && (Ue.tagNameCheck instanceof RegExp && Se(Ue.tagNameCheck, ce) || Ue.tagNameCheck instanceof Function && Ue.tagNameCheck(ce)))
            return !1;
          if (Rr && !pr[ce]) {
            var je = yt(T) || T.parentNode, ot = _r(T) || T.childNodes;
            if (ot && je) for (var lt = ot.length - 1; lt >= 0; --lt) {
              var kt = Rt(ot[lt], !0);
              kt.__removalCount = (T.__removalCount || 0) + 1, je.insertBefore(kt, Yt(T));
            }
          }
          return vt(T), !0;
        }
        return T instanceof ct && !function(Tt) {
          var ft = yt(Tt);
          ft && ft.tagName || (ft = { namespaceURI: H, tagName: "template" });
          var it = L(Tt.tagName), hr = L(ft.tagName);
          return !!ke[Tt.namespaceURI] && (Tt.namespaceURI === M ? ft.namespaceURI === N ? it === "svg" : ft.namespaceURI === k ? it === "svg" && (hr === "annotation-xml" || Cr[hr]) : !!er[it] : Tt.namespaceURI === k ? ft.namespaceURI === N ? it === "math" : ft.namespaceURI === M ? it === "math" && Qt[hr] : !!Hr[it] : Tt.namespaceURI === N ? !(ft.namespaceURI === M && !Qt[hr]) && !(ft.namespaceURI === k && !Cr[hr]) && !Hr[it] && (Xr[it] || !er[it]) : !(Mt !== "application/xhtml+xml" || !ke[Tt.namespaceURI]));
        }(T) ? (vt(T), !0) : ce !== "noscript" && ce !== "noembed" && ce !== "noframes" || !Se(/<\/no(script|embed|frames)/i, T.innerHTML) ? (tt && T.nodeType === 3 && (ae = T.textContent, ae = ue(ae, Xt, " "), ae = ue(ae, Sr, " "), ae = ue(ae, bt, " "), T.textContent !== ae && (q(oe.removed, { element: T.cloneNode() }), T.textContent = ae)), mr("afterSanitizeElements", T, null), !1) : (vt(T), !0);
      }, ln = function(T, ae, ce) {
        if (Tr && (ae === "id" || ae === "name") && (ce in ee || ce in Ut)) return !1;
        if (!(se && !_[ae] && Se(xr, ae))) {
          if (!(J && Se(dr, ae))) {
            if (!nt[ae] || _[ae]) {
              if (!(Kr(T) && (Ue.tagNameCheck instanceof RegExp && Se(Ue.tagNameCheck, T) || Ue.tagNameCheck instanceof Function && Ue.tagNameCheck(T)) && (Ue.attributeNameCheck instanceof RegExp && Se(Ue.attributeNameCheck, ae) || Ue.attributeNameCheck instanceof Function && Ue.attributeNameCheck(ae)) || ae === "is" && Ue.allowCustomizedBuiltInElements && (Ue.tagNameCheck instanceof RegExp && Se(Ue.tagNameCheck, ce) || Ue.tagNameCheck instanceof Function && Ue.tagNameCheck(ce)))) return !1;
            } else if (!d[ae]) {
              if (!Se(xt, ue(ce, Zt, ""))) {
                if ((ae !== "src" && ae !== "xlink:href" && ae !== "href" || T === "script" || Re(ce, "data:") !== 0 || !zr[T]) && !(Pe && !Se(Ar, ue(ce, Zt, "")))) {
                  if (ce) return !1;
                }
              }
            }
          }
        }
        return !0;
      }, Kr = function(T) {
        return T !== "annotation-xml" && $(T, Ht);
      }, Ze = function(T) {
        var ae, ce, je, ot;
        mr("beforeSanitizeAttributes", T, null);
        var lt = T.attributes;
        if (lt) {
          var kt = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: nt };
          for (ot = lt.length; ot--; ) {
            var Tt = ae = lt[ot], ft = Tt.name, it = Tt.namespaceURI;
            if (ce = ft === "value" ? ae.value : He(ae.value), je = et(ft), kt.attrName = je, kt.attrValue = ce, kt.keepAttr = !0, kt.forceKeepAttr = void 0, mr("uponSanitizeAttribute", T, kt), ce = kt.attrValue, at && Se(/((--!?|])>)|<\/(style|title)/i, ce)) Nr(ft, T);
            else if (!kt.forceKeepAttr && (Nr(ft, T), kt.keepAttr)) if (ze || !Se(/\/>/i, ce)) {
              tt && (ce = ue(ce, Xt, " "), ce = ue(ce, Sr, " "), ce = ue(ce, bt, " "));
              var hr = et(T.nodeName);
              if (ln(hr, je, ce)) {
                if (!$r || je !== "id" && je !== "name" || (Nr(ft, T), ce = "user-content-" + ce), st && t($t) === "object" && typeof $t.getAttributeType == "function" && !it) switch ($t.getAttributeType(hr, je)) {
                  case "TrustedHTML":
                    ce = st.createHTML(ce);
                    break;
                  case "TrustedScriptURL":
                    ce = st.createScriptURL(ce);
                }
                try {
                  it ? T.setAttributeNS(it, ft, ce) : T.setAttribute(ft, ce), jn(T) ? vt(T) : Z(oe.removed);
                } catch {
                }
              }
            } else Nr(ft, T);
          }
          mr("afterSanitizeAttributes", T, null);
        }
      }, Jr = function T(ae) {
        var ce, je = Fn(ae);
        for (mr("beforeSanitizeShadowDOM", ae, null); ce = je.nextNode(); ) mr("uponSanitizeShadowNode", ce, null), tr(ce) || (ce.content instanceof Oe && T(ce.content), Ze(ce));
        mr("afterSanitizeShadowDOM", ae, null);
      };
      return oe.sanitize = function(T) {
        var ae, ce, je, ot, lt, kt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((ne = !T) && (T = "<!-->"), typeof T != "string" && !Zr(T)) {
          if (typeof T.toString != "function") throw pe("toString is not a function");
          if (typeof (T = T.toString()) != "string") throw pe("dirty is not a string, aborting");
        }
        if (!oe.isSupported) {
          if (t(Q.toStaticHTML) === "object" || typeof Q.toStaticHTML == "function") {
            if (typeof T == "string") return Q.toStaticHTML(T);
            if (Zr(T)) return Q.toStaticHTML(T.outerHTML);
          }
          return T;
        }
        if (rt || Et(kt), oe.removed = [], typeof T == "string" && (fr = !1), fr) {
          if (T.nodeName) {
            var Tt = et(T.nodeName);
            if (!Xe[Tt] || he[Tt]) throw pe("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (T instanceof mt) (ce = (ae = Dn("<!---->")).ownerDocument.importNode(T, !0)).nodeType === 1 && ce.nodeName === "BODY" || ce.nodeName === "HTML" ? ae = ce : ae.appendChild(ce);
        else {
          if (!St && !tt && !gt && T.indexOf("<") === -1) return st && Jt ? st.createHTML(T) : T;
          if (!(ae = Dn(T))) return St ? null : Jt ? $e : "";
        }
        ae && Ot && vt(ae.firstChild);
        for (var ft = Fn(fr ? T : ae); je = ft.nextNode(); ) je.nodeType === 3 && je === ot || tr(je) || (je.content instanceof Oe && Jr(je.content), Ze(je), ot = je);
        if (ot = null, fr) return T;
        if (St) {
          if (Er) for (lt = It.call(ae.ownerDocument); ae.firstChild; ) lt.appendChild(ae.firstChild);
          else lt = ae;
          return (nt.shadowroot || nt.shadowrootmod) && (lt = Nt.call(K, lt, !0)), lt;
        }
        var it = gt ? ae.outerHTML : ae.innerHTML;
        return gt && Xe["!doctype"] && ae.ownerDocument && ae.ownerDocument.doctype && ae.ownerDocument.doctype.name && Se(xe, ae.ownerDocument.doctype.name) && (it = "<!DOCTYPE " + ae.ownerDocument.doctype.name + `>
` + it), tt && (it = ue(it, Xt, " "), it = ue(it, Sr, " "), it = ue(it, bt, " ")), st && Jt ? st.createHTML(it) : it;
      }, oe.setConfig = function(T) {
        Et(T), rt = !0;
      }, oe.clearConfig = function() {
        We = null, rt = !1;
      }, oe.isValidAttribute = function(T, ae, ce) {
        We || Et({});
        var je = et(T), ot = et(ae);
        return ln(je, ot, ce);
      }, oe.addHook = function(T, ae) {
        typeof ae == "function" && (wt[T] = wt[T] || [], q(wt[T], ae));
      }, oe.removeHook = function(T) {
        if (wt[T]) return Z(wt[T]);
      }, oe.removeHooks = function(T) {
        wt[T] && (wt[T] = []);
      }, oe.removeAllHooks = function() {
        wt = {};
      }, oe;
    }();
    return Je;
  }();
}, 985: (e, t, r) => {
  var n = r(524), a = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, s = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, l = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, f = {};
  function c(O) {
    return n.isMemo(O) ? l : f[O.$$typeof] || a;
  }
  f[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, f[n.Memo] = l;
  var p = Object.defineProperty, b = Object.getOwnPropertyNames, y = Object.getOwnPropertySymbols, x = Object.getOwnPropertyDescriptor, I = Object.getPrototypeOf, A = Object.prototype;
  e.exports = function O(R, D, j) {
    if (typeof D != "string") {
      if (A) {
        var Z = I(D);
        Z && Z !== A && O(R, Z, j);
      }
      var q = b(D);
      y && (q = q.concat(y(D)));
      for (var L = c(R), B = c(D), $ = 0; $ < q.length; ++$) {
        var ue = q[$];
        if (!(s[ue] || j && j[ue] || B && B[ue] || L && L[ue])) {
          var Re = x(D, ue);
          try {
            p(R, ue, Re);
          } catch {
          }
        }
      }
    }
    return R;
  };
}, 999: (e, t, r) => {
  var n = r(848);
  function a() {
  }
  function s() {
  }
  s.resetWarningCache = a, e.exports = function() {
    function l(p, b, y, x, I, A) {
      if (A !== n) {
        var O = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw O.name = "Invariant Violation", O;
      }
    }
    function f() {
      return l;
    }
    l.isRequired = l;
    var c = { array: l, bigint: l, bool: l, func: l, number: l, object: l, string: l, symbol: l, any: l, arrayOf: f, element: l, elementType: l, instanceOf: f, node: l, objectOf: f, oneOf: f, oneOfType: f, shape: f, exact: f, checkPropTypes: s, resetWarningCache: a };
    return c.PropTypes = c, c;
  };
}, 67: (e, t, r) => {
  e.exports = r(999)();
}, 848: (e) => {
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 320: (e, t) => {
  var r = typeof Symbol == "function" && Symbol.for, n = r ? Symbol.for("react.element") : 60103, a = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, l = r ? Symbol.for("react.strict_mode") : 60108, f = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, b = r ? Symbol.for("react.async_mode") : 60111, y = r ? Symbol.for("react.concurrent_mode") : 60111, x = r ? Symbol.for("react.forward_ref") : 60112, I = r ? Symbol.for("react.suspense") : 60113, A = r ? Symbol.for("react.suspense_list") : 60120, O = r ? Symbol.for("react.memo") : 60115, R = r ? Symbol.for("react.lazy") : 60116, D = r ? Symbol.for("react.block") : 60121, j = r ? Symbol.for("react.fundamental") : 60117, Z = r ? Symbol.for("react.responder") : 60118, q = r ? Symbol.for("react.scope") : 60119;
  function L($) {
    if (typeof $ == "object" && $ !== null) {
      var ue = $.$$typeof;
      switch (ue) {
        case n:
          switch ($ = $.type) {
            case b:
            case y:
            case s:
            case f:
            case l:
            case I:
              return $;
            default:
              switch ($ = $ && $.$$typeof) {
                case p:
                case x:
                case R:
                case O:
                case c:
                  return $;
                default:
                  return ue;
              }
          }
        case a:
          return ue;
      }
    }
  }
  function B($) {
    return L($) === y;
  }
  t.AsyncMode = b, t.ConcurrentMode = y, t.ContextConsumer = p, t.ContextProvider = c, t.Element = n, t.ForwardRef = x, t.Fragment = s, t.Lazy = R, t.Memo = O, t.Portal = a, t.Profiler = f, t.StrictMode = l, t.Suspense = I, t.isAsyncMode = function($) {
    return B($) || L($) === b;
  }, t.isConcurrentMode = B, t.isContextConsumer = function($) {
    return L($) === p;
  }, t.isContextProvider = function($) {
    return L($) === c;
  }, t.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === n;
  }, t.isForwardRef = function($) {
    return L($) === x;
  }, t.isFragment = function($) {
    return L($) === s;
  }, t.isLazy = function($) {
    return L($) === R;
  }, t.isMemo = function($) {
    return L($) === O;
  }, t.isPortal = function($) {
    return L($) === a;
  }, t.isProfiler = function($) {
    return L($) === f;
  }, t.isStrictMode = function($) {
    return L($) === l;
  }, t.isSuspense = function($) {
    return L($) === I;
  }, t.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === s || $ === y || $ === f || $ === l || $ === I || $ === A || typeof $ == "object" && $ !== null && ($.$$typeof === R || $.$$typeof === O || $.$$typeof === c || $.$$typeof === p || $.$$typeof === x || $.$$typeof === j || $.$$typeof === Z || $.$$typeof === q || $.$$typeof === D);
  }, t.typeOf = L;
}, 524: (e, t, r) => {
  e.exports = r(320);
}, 146: (e) => {
  e.exports = function(t, r, n, a) {
    var s = n ? n.call(a, t, r) : void 0;
    if (s !== void 0) return !!s;
    if (t === r) return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r) return !1;
    var l = Object.keys(t), f = Object.keys(r);
    if (l.length !== f.length) return !1;
    for (var c = Object.prototype.hasOwnProperty.bind(r), p = 0; p < l.length; p++) {
      var b = l[p];
      if (!c(b)) return !1;
      var y = t[b], x = r[b];
      if ((s = n ? n.call(a, y, x, b) : void 0) === !1 || s === void 0 && y !== x) return !1;
    }
    return !0;
  };
}, 373: (e, t) => {
  var r;
  (function() {
    var n = {}.hasOwnProperty;
    function a() {
      for (var f = "", c = 0; c < arguments.length; c++) {
        var p = arguments[c];
        p && (f = l(f, s(p)));
      }
      return f;
    }
    function s(f) {
      if (typeof f == "string" || typeof f == "number") return f;
      if (typeof f != "object") return "";
      if (Array.isArray(f)) return a.apply(null, f);
      if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]")) return f.toString();
      var c = "";
      for (var p in f) n.call(f, p) && f[p] && (c = l(c, p));
      return c;
    }
    function l(f, c) {
      return c ? f ? f + " " + c : f + c : f;
    }
    e.exports ? (a.default = a, e.exports = a) : (r = (function() {
      return a;
    }).apply(t, [])) === void 0 || (e.exports = r);
  })();
} }, mi = {};
function ht(e) {
  var t = mi[e];
  if (t !== void 0) return t.exports;
  var r = mi[e] = { exports: {} };
  return zl[e].call(r.exports, r, r.exports, ht), r.exports;
}
ht.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return ht.d(t, { a: t }), t;
}, ht.d = (e, t) => {
  for (var r in t) ht.o(t, r) && !ht.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
}, ht.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), ht.nc = void 0;
var bn = {};
ht.d(bn, { nD: () => Ro, n_: () => Po, n9: () => va, $n: () => Mr, ef: () => ya, fy: () => Rn, Zp: () => ba, TR: () => Ms, Pb: () => Ns, Ur: () => Rs, _Q: () => Is, lq: () => Do, _V: () => on, dK: () => ka, Fx: () => Fo, oz: () => Hs, YT: () => Bs, Gm: () => jo, Ce: () => $o, qm: () => eu, fh: () => Ps, Od: () => Mo, fZ: () => Ls, RE: () => Io, hZ: () => su, Nq: () => lu, NJ: () => cu, bO: () => uu, oP: () => du, jl: () => fu, PP: () => pu, BB: () => mu, Q9: () => hu, vW: () => vu, VE: () => gu, _v: () => yu, uP: () => bu });
var Hl = ht(67), m = ht.n(Hl);
const v = (hi = { Component: () => rr.Component, createContext: () => rr.createContext, createElement: () => rr.createElement, default: () => rr.default, forwardRef: () => rr.forwardRef, useCallback: () => rr.useCallback, useContext: () => rr.useContext, useEffect: () => rr.useEffect, useImperativeHandle: () => rr.useImperativeHandle, useMemo: () => rr.useMemo, useRef: () => rr.useRef, useState: () => rr.useState }, $a = {}, ht.d($a, hi), $a);
var hi, $a;
const gi = (e, t, r) => e ? t : r, oa = (e) => (e || []).join(" ");
var Bl = ht(651);
const nr = (e) => ({ __html: (0, Bl.sanitize)(e) }), vi = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; ) n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let yi, za = !1;
m().shape({ event: m().string, action: m().string, name: m().string, region: m().string, section: m().string, component: m().string, type: m().string, text: m().string });
const qt = ({ event: e = "", action: t = "", name: r = "", type: n = "", section: a = "", text: s = "", region: l = "", component: f = "" }) => {
  const { dataLayer: c } = window, p = { event: e.toLowerCase(), action: t.toLowerCase(), name: r.toLowerCase(), type: n.toLowerCase(), region: l.toLowerCase(), section: a.toLowerCase(), text: s.toLowerCase(), component: f.toLowerCase() };
  c && c.push(p);
}, Ul = m().shape({ url: m().string, altText: m().string, cssClass: m().arrayOf(m().string), size: m().oneOf(["small", "medium", "large"]) }), Ha = m().shape({ text: m().string, maxWidth: m().string, cssClass: m().arrayOf(m().string), highlightColor: m().oneOf(["gold", "black"]) }), ys = m().shape({ color: m().oneOf(["gold", "maroon", "gray", "dark"]), content: m().shape({ icon: m().string, header: m().string, body: m().string }) });
var Wl = ht(373), Ke = ht.n(Wl);
const bs = ({ id: e, item: t, openCard: r, onClick: n }) => {
  var a, s, l, f, c, p;
  return v.default.createElement("div", { className: Ke()("accordion-item", "mt-3", { [`accordion-item-${t.color}`]: t.color, "accordion-header-icon": (a = t.content) == null ? void 0 : a.icon }) }, v.default.createElement("div", { className: "accordion-header" }, v.default.createElement("h4", null, v.default.createElement("a", { "data-testid": "accordion-opener", className: Ke()({ collapsed: e !== r }), "data-bs-toggle": "collapse", href: `#card-body-${e}`, role: "button", "aria-expanded": e === r, "aria-controls": `card-body-${e}`, onClick: (b) => {
    var y;
    return n(b, e, (y = t.content) == null ? void 0 : y.header);
  } }, (s = t.content) != null && s.icon ? v.default.createElement("span", { className: "accordion-icon" }, v.default.createElement("i", { className: `${(l = t.content.icon) == null ? void 0 : l[0]} fa-${(f = t.content.icon) == null ? void 0 : f[1]} me-2` }), t.content.header) : (c = t.content) == null ? void 0 : c.header, v.default.createElement("i", { className: "fas fa-chevron-up" })))), ((p = t.content) == null ? void 0 : p.body) && v.default.createElement("div", { id: `card-body-${e}`, className: Ke()("collapse") }, v.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: nr(t.content.body) })));
};
bs.propTypes = { id: m().number, item: ys, openCard: m().number, onClick: m().func };
const Vl = { event: "collapse", name: "onclick", type: "click", region: "main content" }, Ro = ({ cards: e, openedCard: t }) => {
  const [r, n] = (0, v.useState)(t), a = (l, f) => {
    qt({ ...Vl, action: f, text: l });
  }, s = (l, f, c) => {
    l.preventDefault(), (r === f || r) && a(e[r - 1].content.header, "close"), r !== f ? (n(f), a(c, "open")) : n(null);
  };
  return v.default.createElement("div", { className: "accordion" }, e == null ? void 0 : e.map((l, f) => l.content.body && l.content.header && v.default.createElement(bs, { key: f + 1, id: f + 1, item: l, openCard: r, onClick: s })));
};
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qr.apply(null, arguments);
}
Ro.propTypes = { cards: m().arrayOf(ys).isRequired, openedCard: m().number };
const ql = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Mr = ({ label: e, cardTitle: t, ariaLabel: r, block: n, color: a, disabled: s, element: l, href: f, icon: c, innerRef: p, onClick: b, size: y, classes: x, target: I, ...A }) => {
  const O = Ke()("btn", { [`btn-${a}`]: !0, "btn-md": y === "small", "btn-sm": y === "xsmall", "btn-block": n, disabled: s });
  let R = l;
  return f && l === "button" && (R = "a"), v.default.createElement(R, qr({ type: R === "button" && b ? "button" : void 0 }, A, { className: Ke()(x) || O, href: f, ref: p, onClick: () => (qt({ ...ql, text: e, section: t }), void (b == null ? void 0 : b())), "aria-label": r, target: R === "a" ? I : null }), c && v.default.createElement("i", { className: `${c == null ? void 0 : c[0]} fa-${c == null ? void 0 : c[1]} me-1` }), e);
};
Mr.propTypes = { label: m().string, cardTitle: m().string, ariaLabel: m().string, block: m().bool, color: m().oneOf(["gold", "maroon", "gray", "dark"]), disabled: m().bool, element: m().oneOfType([m().func, m().string, m().shape({ $$typeof: m().symbol, render: m().func }), m().arrayOf(m().oneOfType([m().func, m().string, m().shape({ $$typeof: m().symbol, render: m().func })]))]), href: m().string, icon: m().arrayOf(m().string), innerRef: m().oneOfType([m().object, m().func, m().string]), onClick: m().func, size: m().oneOf(["default", "small", "xsmall"]), classes: m().arrayOf(m().string), target: m().oneOf(["_blank", "_self", "_top", "_parent"]) }, Mr.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
var ws = ht(524), Gl = ht(146);
ht.n(Gl);
const Yl = function(e) {
  function t(ge, le, U, z, C) {
    for (var G, E, X, V, be, ve = 0, ie = 0, fe = 0, ye = 0, Ee = 0, _e = 0, xe = X = G = 0, me = 0, Ae = 0, Je = 0, re = 0, Q = U.length, oe = Q - 1, K = "", ee = "", Oe = "", Qe = ""; me < Q; ) {
      if (E = U.charCodeAt(me), me === oe && ie + ye + fe + ve !== 0 && (ie !== 0 && (E = ie === 47 ? 10 : 47), ye = fe = ve = 0, Q++, oe++), ie + ye + fe + ve === 0) {
        if (me === oe && (0 < Ae && (K = K.replace(y, "")), 0 < K.trim().length)) {
          switch (E) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              K += U.charAt(me);
          }
          E = 59;
        }
        switch (E) {
          case 123:
            for (G = (K = K.trim()).charCodeAt(0), X = 1, re = ++me; me < Q; ) {
              switch (E = U.charCodeAt(me)) {
                case 123:
                  X++;
                  break;
                case 125:
                  X--;
                  break;
                case 47:
                  switch (E = U.charCodeAt(me + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (xe = me + 1; xe < oe; ++xe) switch (U.charCodeAt(xe)) {
                          case 47:
                            if (E === 42 && U.charCodeAt(xe - 1) === 42 && me + 2 !== xe) {
                              me = xe + 1;
                              break e;
                            }
                            break;
                          case 10:
                            if (E === 47) {
                              me = xe + 1;
                              break e;
                            }
                        }
                        me = xe;
                      }
                  }
                  break;
                case 91:
                  E++;
                case 40:
                  E++;
                case 34:
                case 39:
                  for (; me++ < oe && U.charCodeAt(me) !== E; ) ;
              }
              if (X === 0) break;
              me++;
            }
            if (X = U.substring(re, me), G === 0 && (G = (K = K.replace(b, "").trim()).charCodeAt(0)), G === 64) {
              switch (0 < Ae && (K = K.replace(y, "")), E = K.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  Ae = le;
                  break;
                default:
                  Ae = De;
              }
              if (re = (X = t(le, Ae, X, E, C + 1)).length, 0 < Fe && (be = f(3, X, Ae = r(De, K, Je), le, pe, Se, re, E, C, z), K = Ae.join(""), be !== void 0 && (re = (X = be.trim()).length) === 0 && (E = 0, X = "")), 0 < re) switch (E) {
                case 115:
                  K = K.replace(L, l);
                case 100:
                case 109:
                case 45:
                  X = K + "{" + X + "}";
                  break;
                case 107:
                  X = (K = K.replace(D, "$1 $2")) + "{" + X + "}", X = de === 1 || de === 2 && s("@" + X, 3) ? "@-webkit-" + X + "@" + X : "@" + X;
                  break;
                default:
                  X = K + X, z === 112 && (ee += X, X = "");
              }
              else X = "";
            } else X = t(le, r(le, K, Je), X, z, C + 1);
            Oe += X, X = Je = Ae = xe = G = 0, K = "", E = U.charCodeAt(++me);
            break;
          case 125:
          case 59:
            if (1 < (re = (K = (0 < Ae ? K.replace(y, "") : K).trim()).length)) switch (xe === 0 && (G = K.charCodeAt(0), G === 45 || 96 < G && 123 > G) && (re = (K = K.replace(" ", ":")).length), 0 < Fe && (be = f(1, K, le, ge, pe, Se, ee.length, z, C, z)) !== void 0 && (re = (K = be.trim()).length) === 0 && (K = "\0\0"), G = K.charCodeAt(0), E = K.charCodeAt(1), G) {
              case 0:
                break;
              case 64:
                if (E === 105 || E === 99) {
                  Qe += K + U.charAt(me);
                  break;
                }
              default:
                K.charCodeAt(re - 1) !== 58 && (ee += a(K, G, E, K.charCodeAt(2)));
            }
            Je = Ae = xe = G = 0, K = "", E = U.charCodeAt(++me);
        }
      }
      switch (E) {
        case 13:
        case 10:
          ie === 47 ? ie = 0 : 1 + G === 0 && z !== 107 && 0 < K.length && (Ae = 1, K += "\0"), 0 < Fe * Ge && f(0, K, le, ge, pe, Se, ee.length, z, C, z), Se = 1, pe++;
          break;
        case 59:
        case 125:
          if (ie + ye + fe + ve === 0) {
            Se++;
            break;
          }
        default:
          switch (Se++, V = U.charAt(me), E) {
            case 9:
            case 32:
              if (ye + ve + ie === 0) switch (Ee) {
                case 44:
                case 58:
                case 9:
                case 32:
                  V = "";
                  break;
                default:
                  E !== 32 && (V = " ");
              }
              break;
            case 0:
              V = "\\0";
              break;
            case 12:
              V = "\\f";
              break;
            case 11:
              V = "\\v";
              break;
            case 38:
              ye + ie + ve === 0 && (Ae = Je = 1, V = "\f" + V);
              break;
            case 108:
              if (ye + ie + ve + we === 0 && 0 < xe) switch (me - xe) {
                case 2:
                  Ee === 112 && U.charCodeAt(me - 3) === 58 && (we = Ee);
                case 8:
                  _e === 111 && (we = _e);
              }
              break;
            case 58:
              ye + ie + ve === 0 && (xe = me);
              break;
            case 44:
              ie + fe + ye + ve === 0 && (Ae = 1, V += "\r");
              break;
            case 34:
            case 39:
              ie === 0 && (ye = ye === E ? 0 : ye === 0 ? E : ye);
              break;
            case 91:
              ye + ie + fe === 0 && ve++;
              break;
            case 93:
              ye + ie + fe === 0 && ve--;
              break;
            case 41:
              ye + ie + ve === 0 && fe--;
              break;
            case 40:
              ye + ie + ve === 0 && (G === 0 && (2 * Ee + 3 * _e == 533 || (G = 1)), fe++);
              break;
            case 64:
              ie + fe + ye + ve + xe + X === 0 && (X = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ye + ve + fe)) switch (ie) {
                case 0:
                  switch (2 * E + 3 * U.charCodeAt(me + 1)) {
                    case 235:
                      ie = 47;
                      break;
                    case 220:
                      re = me, ie = 42;
                  }
                  break;
                case 42:
                  E === 47 && Ee === 42 && re + 2 !== me && (U.charCodeAt(re + 2) === 33 && (ee += U.substring(re, me + 1)), V = "", ie = 0);
              }
          }
          ie === 0 && (K += V);
      }
      _e = Ee, Ee = E, me++;
    }
    if (0 < (re = ee.length)) {
      if (Ae = le, 0 < Fe && (be = f(2, ee, Ae, ge, pe, Se, re, z, C, z)) !== void 0 && (ee = be).length === 0) return Qe + ee + Oe;
      if (ee = Ae.join(",") + "{" + ee + "}", de * we != 0) {
        switch (de !== 2 || s(ee, 2) || (we = 0), we) {
          case 111:
            ee = ee.replace(Z, ":-moz-$1") + ee;
            break;
          case 112:
            ee = ee.replace(j, "::-webkit-input-$1") + ee.replace(j, "::-moz-$1") + ee.replace(j, ":-ms-input-$1") + ee;
        }
        we = 0;
      }
    }
    return Qe + ee + Oe;
  }
  function r(ge, le, U) {
    var z = le.trim().split(O);
    le = z;
    var C = z.length, G = ge.length;
    switch (G) {
      case 0:
      case 1:
        var E = 0;
        for (ge = G === 0 ? "" : ge[0] + " "; E < C; ++E) le[E] = n(ge, le[E], U).trim();
        break;
      default:
        var X = E = 0;
        for (le = []; E < C; ++E) for (var V = 0; V < G; ++V) le[X++] = n(ge[V] + " ", z[E], U).trim();
    }
    return le;
  }
  function n(ge, le, U) {
    var z = le.charCodeAt(0);
    switch (33 > z && (z = (le = le.trim()).charCodeAt(0)), z) {
      case 38:
        return le.replace(R, "$1" + ge.trim());
      case 58:
        return ge.trim() + le.replace(R, "$1" + ge.trim());
      default:
        if (0 < 1 * U && 0 < le.indexOf("\f")) return le.replace(R, (ge.charCodeAt(0) === 58 ? "" : "$1") + ge.trim());
    }
    return ge + le;
  }
  function a(ge, le, U, z) {
    var C = ge + ";", G = 2 * le + 3 * U + 4 * z;
    if (G === 944) {
      ge = C.indexOf(":", 9) + 1;
      var E = C.substring(ge, C.length - 1).trim();
      return E = C.substring(0, ge).trim() + E + ";", de === 1 || de === 2 && s(E, 1) ? "-webkit-" + E + E : E;
    }
    if (de === 0 || de === 2 && !s(C, 1)) return C;
    switch (G) {
      case 1015:
        return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + C + C;
      case 978:
        return "-webkit-" + C + "-moz-" + C + C;
      case 1019:
      case 983:
        return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
      case 883:
        if (C.charCodeAt(8) === 45) return "-webkit-" + C + C;
        if (0 < C.indexOf("image-set(", 11)) return C.replace(He, "$1-webkit-$2") + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45) switch (C.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + C.replace("-grow", "") + "-webkit-" + C + "-ms-" + C.replace("grow", "positive") + C;
          case 115:
            return "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C;
          case 98:
            return "-webkit-" + C + "-ms-" + C.replace("basis", "preferred-size") + C;
        }
        return "-webkit-" + C + "-ms-" + C + C;
      case 964:
        return "-webkit-" + C + "-ms-flex-" + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99) break;
        return "-webkit-box-pack" + (E = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + C + "-ms-flex-pack" + E + C;
      case 1005:
        return I.test(C) ? C.replace(x, ":-webkit-") + C.replace(x, ":-moz-") + C : C;
      case 1e3:
        switch (le = (E = C.substring(13).trim()).indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(le)) {
          case 226:
            E = C.replace(q, "tb");
            break;
          case 232:
            E = C.replace(q, "tb-rl");
            break;
          case 220:
            E = C.replace(q, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + E + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (le = (C = ge).length - 10, G = (E = (C.charCodeAt(le) === 33 ? C.substring(0, le) : C).substring(ge.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | E.charCodeAt(7))) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            C = C.replace(E, "-webkit-" + E) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(E, "-webkit-" + (102 < G ? "inline-" : "") + "box") + ";" + C.replace(E, "-webkit-" + E) + ";" + C.replace(E, "-ms-" + E + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45) switch (C.charCodeAt(6)) {
          case 105:
            return E = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + E + "-ms-flex-" + E + C;
          case 115:
            return "-webkit-" + C + "-ms-flex-item-" + C.replace($, "") + C;
          default:
            return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace($, "") + C;
        }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Re.test(ge) === !0) return (E = ge.substring(ge.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(ge.replace("stretch", "fill-available"), le, U, z).replace(":fill-available", ":stretch") : C.replace(E, "-webkit-" + E) + C.replace(E, "-moz-" + E.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, U + z === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10)) return C.substring(0, C.indexOf(";", 27) + 1).replace(A, "$1-webkit-$2") + C;
    }
    return C;
  }
  function s(ge, le) {
    var U = ge.indexOf(le === 1 ? ":" : "{"), z = ge.substring(0, le !== 3 ? U : 10);
    return U = ge.substring(U + 1, ge.length - 1), Be(le !== 2 ? z : z.replace(ue, "$1"), U, le);
  }
  function l(ge, le) {
    var U = a(le, le.charCodeAt(0), le.charCodeAt(1), le.charCodeAt(2));
    return U !== le + ";" ? U.replace(B, " or ($1)").substring(4) : "(" + le + ")";
  }
  function f(ge, le, U, z, C, G, E, X, V, be) {
    for (var ve, ie = 0, fe = le; ie < Fe; ++ie) switch (ve = dt[ie].call(p, ge, fe, U, z, C, G, E, X, V, be)) {
      case void 0:
      case !1:
      case !0:
      case null:
        break;
      default:
        fe = ve;
    }
    if (fe !== le) return fe;
  }
  function c(ge) {
    return (ge = ge.prefix) !== void 0 && (Be = null, ge ? typeof ge != "function" ? de = 1 : (de = 2, Be = ge) : de = 0), c;
  }
  function p(ge, le) {
    var U = ge;
    if (33 > U.charCodeAt(0) && (U = U.trim()), U = [U], 0 < Fe) {
      var z = f(-1, le, U, U, pe, Se, 0, 0, 0, 0);
      z !== void 0 && typeof z == "string" && (le = z);
    }
    var C = t(De, U, le, 0, 0);
    return 0 < Fe && (z = f(-2, C, U, U, pe, Se, C.length, 0, 0, 0)) !== void 0 && (C = z), we = 0, Se = pe = 1, C;
  }
  var b = /^\0+/g, y = /[\0\r\f]/g, x = /: */g, I = /zoo|gra/, A = /([,: ])(transform)/g, O = /,\r+?/g, R = /([\t\r\n ])*\f?&/g, D = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, Z = /:(read-only)/g, q = /[svh]\w+-[tblr]{2}/, L = /\(\s*(.*)\s*\)/g, B = /([\s\S]*?);/g, $ = /-self|flex-/g, ue = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Re = /stretch|:\s*\w+\-(?:conte|avail)/, He = /([^-])(image-set\()/, Se = 1, pe = 1, we = 0, de = 1, De = [], dt = [], Fe = 0, Be = null, Ge = 0;
  return p.use = function ge(le) {
    switch (le) {
      case void 0:
      case null:
        Fe = dt.length = 0;
        break;
      default:
        if (typeof le == "function") dt[Fe++] = le;
        else if (typeof le == "object") for (var U = 0, z = le.length; U < z; ++U) ge(le[U]);
        else Ge = 0 | !!le;
    }
    return ge;
  }, p.set = c, e !== void 0 && c(e), p;
}, Xl = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function Zl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Kl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bi = Zl(function(e) {
  return Kl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), Jl = ht(985), Ql = ht.n(Jl);
function Pr() {
  return (Pr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var wi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ro = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !(0, ws.typeOf)(e);
}, pa = Object.freeze([]), Wr = Object.freeze({});
function On(e) {
  return typeof e == "function";
}
function ki(e) {
  return e.displayName || e.name || "Component";
}
function No(e) {
  return e && typeof e.styledComponentId == "string";
}
var dn = typeof Ft < "u" && Ft.env !== void 0 && (Ft.env.REACT_APP_SC_ATTR || Ft.env.SC_ATTR) || "data-styled", Lo = typeof window < "u" && "HTMLElement" in window, ec = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ft < "u" && Ft.env !== void 0 && (Ft.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ft.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ft.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ft.env.REACT_APP_SC_DISABLE_SPEEDY : Ft.env.SC_DISABLE_SPEEDY !== void 0 && Ft.env.SC_DISABLE_SPEEDY !== "" && Ft.env.SC_DISABLE_SPEEDY !== "false" && Ft.env.SC_DISABLE_SPEEDY));
function Mn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var tc = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, l = s; r >= l; ) (l <<= 1) < 0 && Mn(16, "" + r);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var f = s; f < l; f++) this.groupSizes[f] = 0;
    }
    for (var c = this.indexOfGroup(r + 1), p = 0, b = n.length; p < b; p++) this.tag.insertRule(c, n[p]) && (this.groupSizes[r]++, c++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var l = a; l < s; l++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), l = s + a, f = s; f < l; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), ia = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Map(), Cn = 1, Gn = function(e) {
  if (ia.has(e)) return ia.get(e);
  for (; ma.has(Cn); ) Cn++;
  var t = Cn++;
  return ia.set(e, t), ma.set(t, e), t;
}, rc = function(e) {
  return ma.get(e);
}, nc = function(e, t) {
  t >= Cn && (Cn = t + 1), ia.set(e, t), ma.set(t, e);
}, ac = "style[" + dn + '][data-styled-version="5.3.11"]', oc = new RegExp("^" + dn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ic = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, l = a.length; s < l; s++) (n = a[s]) && e.registerName(t, n);
}, sc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var l = r[a].trim();
    if (l) {
      var f = l.match(oc);
      if (f) {
        var c = 0 | parseInt(f[1], 10), p = f[2];
        c !== 0 && (nc(p, c), ic(e, p, f[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, lc = function() {
  return ht.nc;
}, ks = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(f) {
    for (var c = f.childNodes, p = c.length; p >= 0; p--) {
      var b = c[p];
      if (b && b.nodeType === 1 && b.hasAttribute(dn)) return b;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(dn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = lc();
  return l && n.setAttribute("nonce", l), r.insertBefore(n, s), n;
}, cc = function() {
  function e(r) {
    var n = this.element = ks(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, l = 0, f = s.length; l < f; l++) {
        var c = s[l];
        if (c.ownerNode === a) return c;
      }
      Mn(17);
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
}(), uc = function() {
  function e(r) {
    var n = this.element = ks(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(a, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), dc = function() {
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
}(), Si = Lo, fc = { isServer: !Lo, useCSSOMInjection: !ec }, ha = function() {
  function e(r, n, a) {
    r === void 0 && (r = Wr), n === void 0 && (n = {}), this.options = Pr({}, fc, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Lo && Si && (Si = !1, function(s) {
      for (var l = document.querySelectorAll(ac), f = 0, c = l.length; f < c; f++) {
        var p = l[f];
        p && p.getAttribute(dn) !== "active" && (sc(s, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Gn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Pr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, r = a ? new dc(l) : s ? new cc(l) : new uc(l), new tc(r)));
    var r, n, a, s, l;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Gn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Gn(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Gn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", l = 0; l < a; l++) {
        var f = rc(l);
        if (f !== void 0) {
          var c = r.names.get(f), p = n.getGroup(l);
          if (c && p && c.size) {
            var b = dn + ".g" + l + '[id="' + f + '"]', y = "";
            c !== void 0 && c.forEach(function(x) {
              x.length > 0 && (y += x + ",");
            }), s += "" + p + b + '{content:"' + y + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), pc = /(a)(d)/gi, xi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function no(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = xi(t % 52) + r;
  return (xi(t % 52) + r).replace(pc, "$1-$2");
}
var cn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ss = function(e) {
  return cn(5381, e);
};
function xs(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (On(r) && !No(r)) return !1;
  }
  return !0;
}
var mc = Ss("5.3.11"), hc = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && xs(t), this.componentId = r, this.baseHash = cn(mc, r), this.baseStyle = n, ha.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = an(this.rules, t, r, n).join(""), f = no(cn(this.baseHash, l) >>> 0);
      if (!r.hasNameForId(a, f)) {
        var c = n(l, "." + f, void 0, a);
        r.insertRules(a, f, c);
      }
      s.push(f), this.staticRulesId = f;
    }
    else {
      for (var p = this.rules.length, b = cn(this.baseHash, n.hash), y = "", x = 0; x < p; x++) {
        var I = this.rules[x];
        if (typeof I == "string") y += I;
        else if (I) {
          var A = an(I, t, r, n), O = Array.isArray(A) ? A.join("") : A;
          b = cn(b, O + x), y += O;
        }
      }
      if (y) {
        var R = no(b >>> 0);
        if (!r.hasNameForId(a, R)) {
          var D = n(y, "." + R, void 0, a);
          r.insertRules(a, R, D);
        }
        s.push(R);
      }
    }
    return s.join(" ");
  }, e;
}(), gc = /^\s*\/\/.*$/gm, vc = [":", "[", ".", "#"];
function yc(e) {
  var t, r, n, a, s = Wr, l = s.options, f = l === void 0 ? Wr : l, c = s.plugins, p = c === void 0 ? pa : c, b = new Yl(f), y = [], x = /* @__PURE__ */ function(O) {
    function R(D) {
      if (D) try {
        O(D + "}");
      } catch {
      }
    }
    return function(D, j, Z, q, L, B, $, ue, Re, He) {
      switch (D) {
        case 1:
          if (Re === 0 && j.charCodeAt(0) === 64) return O(j + ";"), "";
          break;
        case 2:
          if (ue === 0) return j + "/*|*/";
          break;
        case 3:
          switch (ue) {
            case 102:
            case 112:
              return O(Z[0] + j), "";
            default:
              return j + (He === 0 ? "/*|*/" : "");
          }
        case -2:
          j.split("/*|*/}").forEach(R);
      }
    };
  }(function(O) {
    y.push(O);
  }), I = function(O, R, D) {
    return R === 0 && vc.indexOf(D[r.length]) !== -1 || D.match(a) ? O : "." + t;
  };
  function A(O, R, D, j) {
    j === void 0 && (j = "&");
    var Z = O.replace(gc, ""), q = R && D ? D + " " + R + " { " + Z + " }" : Z;
    return t = j, r = R, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), b(D || !R ? "" : R, q);
  }
  return b.use([].concat(p, [function(O, R, D) {
    O === 2 && D.length && D[0].lastIndexOf(r) > 0 && (D[0] = D[0].replace(n, I));
  }, x, function(O) {
    if (O === -2) {
      var R = y;
      return y = [], R;
    }
  }])), A.hash = p.length ? p.reduce(function(O, R) {
    return R.name || Mn(15), cn(O, R.name);
  }, 5381).toString() : "", A;
}
var Es = v.default.createContext(), Ts = (Es.Consumer, v.default.createContext()), bc = (Ts.Consumer, new ha()), ao = yc();
function wc() {
  return (0, v.useContext)(Es) || bc;
}
var kc = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = ao);
      var l = n.name + s.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Mn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ao), this.name + t.hash;
  }, e;
}(), Sc = /([A-Z])/, xc = /([A-Z])/g, Ec = /^ms-/, Tc = function(e) {
  return "-" + e.toLowerCase();
};
function Ei(e) {
  return Sc.test(e) ? e.replace(xc, Tc).replace(Ec, "-ms-") : e;
}
var Ti = function(e) {
  return e == null || e === !1 || e === "";
};
function an(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], l = 0, f = e.length; l < f; l += 1) (a = an(e[l], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  return Ti(e) ? "" : No(e) ? "." + e.styledComponentId : On(e) ? typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t ? e : an(e(t), t, r, n) : e instanceof kc ? r ? (e.inject(r, n), e.getName(n)) : e : ro(e) ? function p(b, y) {
    var x, I, A = [];
    for (var O in b) b.hasOwnProperty(O) && !Ti(b[O]) && (Array.isArray(b[O]) && b[O].isCss || On(b[O]) ? A.push(Ei(O) + ":", b[O], ";") : ro(b[O]) ? A.push.apply(A, p(b[O], O)) : A.push(Ei(O) + ": " + (x = O, ((I = b[O]) == null || typeof I == "boolean" || I === "" ? "" : typeof I != "number" || I === 0 || x in Xl || x.startsWith("--") ? String(I).trim() : I + "px") + ";")));
    return y ? [y + " {"].concat(A, ["}"]) : A;
  }(e) : e.toString();
  var c;
}
var Ci = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Cc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return On(e) || ro(e) ? Ci(an(wi(pa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ci(an(wi(e, r)));
}
var _c = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ac = /(^-|-$)/g;
function Ba(e) {
  return e.replace(_c, "-").replace(Ac, "");
}
function Yn(e) {
  return typeof e == "string" && !0;
}
var oo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Oc = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Rc(e, t, r) {
  var n = e[r];
  oo(t) && oo(n) ? Cs(n, t) : e[r] = t;
}
function Cs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var l = s[a];
    if (oo(l)) for (var f in l) Oc(f) && Rc(e, l[f], f);
  }
  return e;
}
var _s = v.default.createContext();
_s.Consumer;
var Ua = {};
function As(e, t, r) {
  var n = No(e), a = !Yn(e), s = t.attrs, l = s === void 0 ? pa : s, f = t.componentId, c = f === void 0 ? function(j, Z) {
    var q = typeof j != "string" ? "sc" : Ba(j);
    Ua[q] = (Ua[q] || 0) + 1;
    var L = q + "-" + function(B) {
      return no(Ss(B) >>> 0);
    }("5.3.11" + q + Ua[q]);
    return Z ? Z + "-" + L : L;
  }(t.displayName, t.parentComponentId) : f, p = t.displayName, b = p === void 0 ? function(j) {
    return Yn(j) ? "styled." + j : "Styled(" + ki(j) + ")";
  }(e) : p, y = t.displayName && t.componentId ? Ba(t.displayName) + "-" + t.componentId : t.componentId || c, x = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, I = t.shouldForwardProp;
  n && e.shouldForwardProp && (I = t.shouldForwardProp ? function(j, Z, q) {
    return e.shouldForwardProp(j, Z, q) && t.shouldForwardProp(j, Z, q);
  } : e.shouldForwardProp);
  var A, O = new hc(r, y, n ? e.componentStyle : void 0), R = O.isStatic && l.length === 0, D = function(j, Z) {
    return function(q, L, B, $) {
      var ue = q.attrs, Re = q.componentStyle, He = q.defaultProps, Se = q.foldedComponentIds, pe = q.shouldForwardProp, we = q.styledComponentId, de = q.target, De = function(G, E, X) {
        G === void 0 && (G = Wr);
        var V = Pr({}, E, { theme: G }), be = {};
        return X.forEach(function(ve) {
          var ie, fe, ye, Ee = ve;
          for (ie in On(Ee) && (Ee = Ee(V)), Ee) V[ie] = be[ie] = ie === "className" ? (fe = be[ie], ye = Ee[ie], fe && ye ? fe + " " + ye : fe || ye) : Ee[ie];
        }), [V, be];
      }(function(G, E, X) {
        return X === void 0 && (X = Wr), G.theme !== X.theme && G.theme || E || X.theme;
      }(L, (0, v.useContext)(_s), He) || Wr, L, ue), dt = De[0], Fe = De[1], Be = function(G, E, X) {
        var V = wc(), be = (0, v.useContext)(Ts) || ao;
        return E ? G.generateAndInjectStyles(Wr, V, be) : G.generateAndInjectStyles(X, V, be);
      }(Re, $, dt), Ge = B, ge = Fe.$as || L.$as || Fe.as || L.as || de, le = Yn(ge), U = Fe !== L ? Pr({}, L, {}, Fe) : L, z = {};
      for (var C in U) C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? z.as = U[C] : (pe ? pe(C, bi, ge) : !le || bi(C)) && (z[C] = U[C]));
      return L.style && Fe.style !== L.style && (z.style = Pr({}, L.style, {}, Fe.style)), z.className = Array.prototype.concat(Se, we, Be !== we ? Be : null, L.className, Fe.className).filter(Boolean).join(" "), z.ref = Ge, (0, v.createElement)(ge, z);
    }(A, j, Z, R);
  };
  return D.displayName = b, (A = v.default.forwardRef(D)).attrs = x, A.componentStyle = O, A.displayName = b, A.shouldForwardProp = I, A.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : pa, A.styledComponentId = y, A.target = n ? e.target : e, A.withComponent = function(j) {
    var Z = t.componentId, q = function(B, $) {
      if (B == null) return {};
      var ue, Re, He = {}, Se = Object.keys(B);
      for (Re = 0; Re < Se.length; Re++) ue = Se[Re], $.indexOf(ue) >= 0 || (He[ue] = B[ue]);
      return He;
    }(t, ["componentId"]), L = Z && Z + "-" + (Yn(j) ? j : Ba(ki(j)));
    return As(j, Pr({}, q, { attrs: x, componentId: L }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = n ? Cs({}, e.defaultProps, j) : j;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), a && Ql()(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Wa, io = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Wr), !(0, ws.isValidElementType)(n)) return Mn(1, String(n));
    var s = function() {
      return r(n, a, Cc.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return t(r, n, Pr({}, a, {}, l));
    }, s.attrs = function(l) {
      return t(r, n, Pr({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, s;
  }(As, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  io[e] = io(e);
}), (Wa = (function(e, t) {
  this.rules = e, this.componentId = t, this.isStatic = xs(e), ha.registerId(this.componentId + 1);
}).prototype).createStyles = function(e, t, r, n) {
  var a = n(an(this.rules, t, r, n).join(""), ""), s = this.componentId + e;
  r.insertRules(s, s, a);
}, Wa.removeStyles = function(e, t) {
  t.clearRules(this.componentId + e);
}, Wa.renderStyles = function(e, t, r, n) {
  e > 2 && ha.registerId(this.componentId + e), this.removeStyles(e, r), this.createStyles(e, t, r, n);
};
const Fr = io, Nc = Fr.div`
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
`, sa = "On This Page", Lc = { event: "collapse", name: "onclick", type: "click", text: sa }, Po = ({ items: e, firstElementId: t, focusFirstFocusableElement: r = !1 }) => {
  const n = (0, v.useRef)(null), a = function(y) {
    const [x, I] = (0, v.useState)(!1);
    return (0, v.useEffect)(() => {
      const A = window.matchMedia(y);
      A.matches !== x && I(A.matches);
      const O = () => {
        I(A.matches);
      };
      return A.addEventListener("change", O), () => A.removeEventListener("change", O);
    }, [x, y]), x;
  }("(max-width: 991px)"), [s, l] = (0, v.useState)({ hasHeader: !1, hasAltMenuSpacing: !1, containerClass: "container-xl", activeContainer: "", showMenu: !1, sticky: !1 }), f = a ? 110 : 142, c = () => {
    var O;
    const y = {}, x = window.scrollY;
    ((O = document.getElementById(t)) == null ? void 0 : O.getBoundingClientRect().top) >= 0 && (y.sticky = !1, y.activeContainer = ""), x > n.current.getBoundingClientRect().top && (y.sticky = !0);
    const A = s.hasHeader ? f + 103 : 103;
    e == null || e.forEach(({ targetIdName: R }) => {
      const D = document.getElementById(R), j = (D == null ? void 0 : D.getBoundingClientRect().top) - A, Z = (D == null ? void 0 : D.getBoundingClientRect().bottom) - A;
      j < 0 && Z > 0 && (y.activeContainer = R);
    }), l((R) => ({ ...R, ...y }));
  }, p = () => {
    var y;
    y = c, za || (za = !0, setTimeout(() => {
      y(), za = !1;
    }, 150)), ((x) => {
      window.clearTimeout(yi), yi = window.setTimeout(x, 150);
    })(c);
  };
  function b(y = null) {
    if (y === null) return s.containerClass;
    const x = Object.values(y.classList).filter((I) => ["container-sm", "container-md", "container", "container-lg", "container-xl", "container-fluid"].includes(I));
    return x.length > 0 ? x.join(" ") : b(y.parentElement);
  }
  return (0, v.useEffect)(() => {
    const y = document.getElementById(t) || null, x = { hasHeader: !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), hasAltMenuSpacing: !!document.getElementById("degreeDetailPageContainer"), containerClass: b(y) };
    l((I) => ({ ...I, ...x }));
  }, []), (0, v.useEffect)(() => (window == null || window.addEventListener("scroll", p), () => window.removeEventListener("scroll", p)), [s.hasHeader]), (e == null ? void 0 : e.length) > 0 && v.default.createElement(Nc, { requiresAltMenuSpacing: s.hasAltMenuSpacing, ref: n, className: Ke()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: s.sticky, "with-header": s.hasHeader }), style: s.showMenu ? { borderBottom: 0 } : {} }, v.default.createElement("div", { className: `${s.containerClass} uds-anchor-menu-wrapper` }, a ? v.default.createElement("button", { className: Ke()("mobile-menu-toggler", { "show-menu": s.showMenu }), type: "button", onClick: () => {
    qt({ ...Lc, action: s.showMenu ? "close" : "open" }), l((y) => ({ ...y, showMenu: !y.showMenu }));
  }, "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, v.default.createElement("h4", null, sa, ":", v.default.createElement("i", { className: "fas fa-chevron-down" }))) : v.default.createElement("h4", null, sa, ":"), v.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: Ke()("card", "card-body", "collapse", { show: s.showMenu }) }, v.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": sa }, e == null ? void 0 : e.map((y) => v.default.createElement(Mr, { "data-testid": `anchor-item-${y.targetIdName}`, key: y.targetIdName, classes: Ke()("nav-link", { active: s.activeContainer === y.targetIdName }).split(" "), ariaLabel: y.text, label: y.text, icon: y.icon, onClick: () => ((x) => {
    var D, j;
    const I = window.scrollY - (s.hasHeader ? f + 100 : 100), A = a ? 410 : 90;
    let O = ((D = document.getElementById(x)) == null ? void 0 : D.getBoundingClientRect().top) + I;
    var R;
    n.current.classList.contains("sticky") || (O -= A), r && ((j = (R = `#${x}`, (R ? document.querySelector(R) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null || j.focus()), window.scrollTo({ top: O, behavior: "smooth" });
  })(y.targetIdName) }))))));
};
Po.propTypes = { items: m().arrayOf(m().shape({ text: m().string.isRequired, targetIdName: m().string.isRequired, icon: m().arrayOf(m().string) })).isRequired, firstElementId: m().string.isRequired, focusFirstFocusableElement: m().bool };
var Xn, Pc = (Xn = function(e, t) {
  return Xn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Xn(e, t);
}, function(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  Xn(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}), Ic = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.name = "AssertionError", n;
  }
  return Pc(t, e), t;
}(Error);
function _n(e, t) {
  if (!e) throw new Ic(t);
}
function _a(e) {
  var t = Object.entries(e).filter(function(r) {
    return r[1] != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Mc = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function n() {
      this.constructor = t;
    }
    e(t, r), t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), tn = function() {
  return tn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, tn.apply(this, arguments);
}, _i = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  }
  return r;
};
const Dc = function(e) {
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.openShareDialog = function(n) {
      var a, s, l = r.props, f = l.onShareWindowClose, c = l.windowHeight, p = c === void 0 ? 400 : c, b = l.windowPosition, y = b === void 0 ? "windowCenter" : b, x = l.windowWidth, I = x === void 0 ? 550 : x;
      (function(A, O, R) {
        var D = O.height, j = O.width, Z = _i(O, ["height", "width"]), q = tn({ height: D, width: j, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, Z), L = window.open(A, "", Object.keys(q).map(function($) {
          return "".concat($, "=").concat(q[$]);
        }).join(", "));
        if (R) var B = window.setInterval(function() {
          try {
            (L === null || L.closed) && (window.clearInterval(B), R(L));
          } catch ($) {
            console.error($);
          }
        }, 1e3);
      })(n, tn({ height: p, width: I }, y === "windowCenter" ? (a = I, s = p, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - a / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - s / 2 }) : function(A, O) {
        return { top: (window.screen.height - O) / 2, left: (window.screen.width - A) / 2 };
      }(I, p)), f);
    }, r.handleClick = function(n) {
      return a = r, s = void 0, f = function() {
        var c, p, b, y, x, I, A, O, R, D;
        return function(j, Z) {
          var q, L, B, $, ue = { label: 0, sent: function() {
            if (1 & B[0]) throw B[1];
            return B[1];
          }, trys: [], ops: [] };
          return $ = { next: Re(0), throw: Re(1), return: Re(2) }, typeof Symbol == "function" && ($[Symbol.iterator] = function() {
            return this;
          }), $;
          function Re(He) {
            return function(Se) {
              return function(pe) {
                if (q) throw new TypeError("Generator is already executing.");
                for (; ue; ) try {
                  if (q = 1, L && (B = 2 & pe[0] ? L.return : pe[0] ? L.throw || ((B = L.return) && B.call(L), 0) : L.next) && !(B = B.call(L, pe[1])).done) return B;
                  switch (L = 0, B && (pe = [2 & pe[0], B.value]), pe[0]) {
                    case 0:
                    case 1:
                      B = pe;
                      break;
                    case 4:
                      return ue.label++, { value: pe[1], done: !1 };
                    case 5:
                      ue.label++, L = pe[1], pe = [0];
                      continue;
                    case 7:
                      pe = ue.ops.pop(), ue.trys.pop();
                      continue;
                    default:
                      if (!((B = (B = ue.trys).length > 0 && B[B.length - 1]) || pe[0] !== 6 && pe[0] !== 2)) {
                        ue = 0;
                        continue;
                      }
                      if (pe[0] === 3 && (!B || pe[1] > B[0] && pe[1] < B[3])) {
                        ue.label = pe[1];
                        break;
                      }
                      if (pe[0] === 6 && ue.label < B[1]) {
                        ue.label = B[1], B = pe;
                        break;
                      }
                      if (B && ue.label < B[2]) {
                        ue.label = B[2], ue.ops.push(pe);
                        break;
                      }
                      B[2] && ue.ops.pop(), ue.trys.pop();
                      continue;
                  }
                  pe = Z.call(j, ue);
                } catch (we) {
                  pe = [6, we], L = 0;
                } finally {
                  q = B = 0;
                }
                if (5 & pe[0]) throw pe[1];
                return { value: pe[0] ? pe[1] : void 0, done: !0 };
              }([He, Se]);
            };
          }
        }(this, function(j) {
          switch (j.label) {
            case 0:
              return c = this.props, p = c.beforeOnClick, b = c.disabled, y = c.networkLink, x = c.onClick, I = c.url, A = c.openShareDialogOnClick, O = c.opts, R = y(I, O), b ? [2] : (n.preventDefault(), p ? !(Z = D = p()) || typeof Z != "object" && typeof Z != "function" || typeof Z.then != "function" ? [3, 2] : [4, D] : [3, 2]);
            case 1:
              j.sent(), j.label = 2;
            case 2:
              return A && this.openShareDialog(R), x && x(n, R), [2];
          }
          var Z;
        });
      }, new ((l = void 0) || (l = Promise))(function(c, p) {
        function b(I) {
          try {
            x(f.next(I));
          } catch (A) {
            p(A);
          }
        }
        function y(I) {
          try {
            x(f.throw(I));
          } catch (A) {
            p(A);
          }
        }
        function x(I) {
          var A;
          I.done ? c(I.value) : (A = I.value, A instanceof l ? A : new l(function(O) {
            O(A);
          })).then(b, y);
        }
        x((f = f.apply(a, s || [])).next());
      });
      var a, s, l, f;
    }, r;
  }
  return Mc(t, e), t.prototype.render = function() {
    var r = this.props, n = (r.beforeOnClick, r.children), a = r.className, s = r.disabled, l = r.disabledStyle, f = r.forwardedRef, c = (r.networkLink, r.networkName), p = (r.onShareWindowClose, r.openShareDialogOnClick, r.opts, r.resetButtonStyle), b = r.style, y = (r.url, r.windowHeight, r.windowPosition, r.windowWidth, _i(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), x = Ke()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!s, disabled: !!s }, a), I = tn(tn(p ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, b), s && l);
    return v.default.createElement("button", tn({}, y, { "aria-label": y["aria-label"] || c, className: x, onClick: this.handleClick, ref: f, style: I }), n);
  }, t.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: !0, resetButtonStyle: !0 }, t;
}(v.Component);
var ga = function() {
  return ga = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, ga.apply(this, arguments);
};
const Aa = function(e, t, r, n) {
  function a(s, l) {
    var f = r(s), c = ga({}, s);
    return Object.keys(f).forEach(function(p) {
      delete c[p];
    }), v.default.createElement(Dc, ga({}, n, c, { forwardedRef: l, networkName: e, networkLink: t, opts: r(s) }));
  }
  return a.displayName = "ShareButton-".concat(e), (0, v.forwardRef)(a);
}, Ai = Aa("facebook", function(e, t) {
  var r = t.quote, n = t.hashtag;
  return _n(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + _a({ u: e, quote: r, hashtag: n });
}, function(e) {
  return { quote: e.quote, hashtag: e.hashtag };
}, { windowWidth: 550, windowHeight: 400 });
var so = function() {
  return so = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, so.apply(this, arguments);
};
function Oa(e) {
  var t = function(r) {
    var n = r.bgStyle, a = r.borderRadius, s = r.iconFillColor, l = r.round, f = r.size, c = function(p, b) {
      var y = {};
      for (var x in p) Object.prototype.hasOwnProperty.call(p, x) && b.indexOf(x) < 0 && (y[x] = p[x]);
      if (p != null && typeof Object.getOwnPropertySymbols == "function") {
        var I = 0;
        for (x = Object.getOwnPropertySymbols(p); I < x.length; I++) b.indexOf(x[I]) < 0 && Object.prototype.propertyIsEnumerable.call(p, x[I]) && (y[x[I]] = p[x[I]]);
      }
      return y;
    }(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return v.default.createElement("svg", so({ viewBox: "0 0 64 64", width: f, height: f }, c), l ? v.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : v.default.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: n }), v.default.createElement("path", { d: e.path, fill: s }));
  };
  return t.defaultProps = { bgStyle: {}, borderRadius: 0, iconFillColor: "white", size: 64 }, t;
}
const Oi = Oa({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), Ri = Aa("twitter", function(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, s = a === void 0 ? [] : a, l = t.related, f = l === void 0 ? [] : l;
  return _n(e, "twitter.url"), _n(Array.isArray(s), "twitter.hashtags is not an array"), _n(Array.isArray(f), "twitter.related is not an array"), "https://twitter.com/share" + _a({ url: e, text: r, via: n, hashtags: s.length > 0 ? s.join(",") : void 0, related: f.length > 0 ? f.join(",") : void 0 });
}, function(e) {
  return { hashtags: e.hashtags, title: e.title, via: e.via, related: e.related };
}, { windowWidth: 550, windowHeight: 400 }), Ni = Oa({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), Fc = Aa("email", function(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + _a({ subject: r, body: n ? n + a + e : e });
}, function(e) {
  return { subject: e.subject, body: e.body, separator: e.separator || " " };
}, { openShareDialogOnClick: !1, onClick: function(e, t) {
  window.location.href = t;
} }), jc = Oa({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), Li = Aa("linkedin", function(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return _n(e, "linkedin.url"), "https://linkedin.com/shareArticle" + _a({ url: e, mini: "true", title: r, summary: n, source: a });
}, function(e) {
  return { title: e.title, summary: e.summary, source: e.source };
}, { windowWidth: 750, windowHeight: 600 }), Pi = Oa({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
function Os(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function lo(e, t) {
  return e === void 0 && (e = ""), t === void 0 && (t = void 0), t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var $c = typeof window == "object" && window.Element || function() {
};
m().oneOfType([m().string, m().func, function(e, t, r) {
  if (!(e[t] instanceof $c)) return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}, m().shape({ current: m().any })]);
var co = m().oneOfType([m().func, m().string, m().shape({ $$typeof: m().symbol, render: m().func }), m().arrayOf(m().oneOfType([m().func, m().string, m().shape({ $$typeof: m().symbol, render: m().func })]))]), zc = ["className", "cssModule", "active", "tag"], Hc = { tag: co, active: m().bool, className: m().string, cssModule: m().object }, uo = function(e) {
  var t = e.className, r = e.cssModule, n = e.active, a = e.tag, s = Os(e, zc), l = lo(Ke()(t, !!n && "active", "breadcrumb-item"), r);
  return v.default.createElement(a, qr({}, s, { className: l, "aria-current": n ? "page" : void 0 }));
};
uo.propTypes = Hc, uo.defaultProps = { tag: "li" };
const Zn = uo;
var Bc = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"], Uc = { tag: co, listTag: co, className: m().string, listClassName: m().string, cssModule: m().object, children: m().node, "aria-label": m().string }, fo = function(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, a = e.children, s = e.tag, l = e.listTag, f = e["aria-label"], c = Os(e, Bc), p = lo(Ke()(t), n), b = lo(Ke()("breadcrumb", r), n);
  return v.default.createElement(s, qr({}, c, { className: p, "aria-label": f }), v.default.createElement(l, { className: b }, a));
};
fo.propTypes = Uc, fo.defaultProps = { tag: "nav", listTag: "ol", "aria-label": "breadcrumb" };
const Wc = fo, Vc = Fr.div`
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
`, qc = Fr.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, va = ({ type: e, articleUrl: t, publicationDate: r, title: n, body: a, authorEmail: s, authorName: l, authorPhone: f, authorTitle: c, breadcrumbs: p, calendarUrl: b, eventLocation: y, eventTime: x, headerImageUrl: I, registrationUrl: A, zoomUrl: O }) => {
  const R = Ke()("col", "col-12", { "col-lg-8": e === "event" && (A || O || b) });
  return v.default.createElement(v.default.Fragment, null, I && e !== "event" && v.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${I})` } }), v.default.createElement(Vc, { className: `container ${e}-container wrapper-container` }, p && v.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, v.default.createElement("div", { className: "col col-12" }, v.default.createElement(Wc, { listClassName: "breadcrumb" }, p.map((D) => ((j) => j.active ? v.default.createElement(Zn, { active: !0, tag: "li", className: "breadcrumb-item" }, v.default.createElement(Zn, { tag: "a", href: j.url }, j.title)) : v.default.createElement(Zn, { tag: "li", className: "breadcrumb-item" }, v.default.createElement(Zn, { tag: "a", href: j.url }, j.title)))(D))))), v.default.createElement("div", { className: "row pb-2 pt-3" }, v.default.createElement("div", { className: R }, v.default.createElement("h2", { "data-testid": "title" }, n)), e === "event" && v.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (A || O) && (A ? v.default.createElement("div", { className: "card-button uds-button" }, v.default.createElement(Mr, { color: "maroon", href: A, label: "Register" })) : v.default.createElement("div", { className: "card-button uds-button" }, v.default.createElement(Mr, { color: "maroon", href: O, label: "Attend on Zoom" }))), b && v.default.createElement("div", { className: "card-button uds-button" }, v.default.createElement(Mr, { color: "gray", size: "small", href: b, label: "Add to calendar" })))), e === "event" ? v.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, x && v.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, v.default.createElement("h4", null, v.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), v.default.createElement("div", { dangerouslySetInnerHTML: nr(x) })), (A && O || y) && v.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, v.default.createElement("h4", null, v.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), v.default.createElement("div", { dangerouslySetInnerHTML: nr(y) }), A && O && v.default.createElement("a", { href: O }, "Attend on Zoom"))) : v.default.createElement("div", { className: "row row-spaced pt-2" }, v.default.createElement("div", { className: "col col-12" }, v.default.createElement("div", { className: "article-social-media" }, v.default.createElement(Ai, { url: t, quote: n }, v.default.createElement(Oi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), v.default.createElement(Ri, { url: t, quote: n }, v.default.createElement(Ni, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), v.default.createElement(Li, { url: t, quote: n }, v.default.createElement(Pi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), r && v.default.createElement("i", { className: "news-date" }, r))), v.default.createElement("div", { className: "row" }, v.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: nr(a), "data-testid": "body" })), e === "news" && v.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, v.default.createElement("div", { className: "col col-12" }, v.default.createElement("div", { className: "author highlight-gold" }, l), c && v.default.createElement("div", { className: "author-title" }, c), s && v.default.createElement("div", { className: "author-contact" }, v.default.createElement("span", { className: "icon-bg" }, v.default.createElement("i", { className: "fas fa-envelope" })), v.default.createElement("a", { href: `mailto: ${s}` }, s)), f && v.default.createElement("div", { className: "author-contact" }, v.default.createElement("span", { className: "icon-bg" }, v.default.createElement("i", { className: "fas fa-phone" })), v.default.createElement("a", { href: `tel: ${f}` }, f)))), e === "event" && v.default.createElement(qc, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, v.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, v.default.createElement("h4", null, "For more information contact:"), v.default.createElement("div", { className: "event-author" }, l), v.default.createElement("div", { className: "event-author-title" }, c), (s || f) && v.default.createElement("div", { className: "event-author-info" }, s && v.default.createElement("div", null, v.default.createElement("a", { href: `mailto: ${s}` }, s)), f && v.default.createElement("div", null, v.default.createElement("a", { href: `tel: ${f}` }, f)))), v.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, v.default.createElement("h4", null, "Share this event:"), v.default.createElement("div", { className: "article-social-media" }, v.default.createElement(Ai, { url: t, quote: n }, v.default.createElement(Oi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), v.default.createElement(Ri, { url: t, quote: n }, v.default.createElement(Ni, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), v.default.createElement(Fc, { url: s, quote: n }, v.default.createElement(jc, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), v.default.createElement(Li, { url: t, quote: n }, v.default.createElement(Pi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
};
va.propTypes = { type: m().oneOf(["event", "news"]), articleUrl: m().string.isRequired, publicationDate: m().string.isRequired, title: m().string.isRequired, body: m().string.isRequired, authorEmail: m().string, authorName: m().string.isRequired, authorPhone: m().string, authorTitle: m().string, breadcrumbs: m().arrayOf(m().shape({ title: m().string, url: m().string, active: m().bool })), calendarUrl: m().string, headerImageUrl: m().string, eventLocation: m().string, eventTime: m().string, registrationUrl: m().string, zoomUrl: m().string }, va.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
const Gc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, ya = ({ color: e, icon: t, innerRef: r, onClick: n, size: a, cardTitle: s }) => v.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"}`, ref: r, onClick: () => (qt({ ...Gc, text: `${t == null ? void 0 : t[1]} icon`, section: s }), void (n == null ? void 0 : n())), "aria-label": "Close" }, v.default.createElement("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` }));
ya.propTypes = { color: m().oneOf(["white", "gray", "black"]), icon: m().arrayOf(m().string), innerRef: m().oneOfType([m().object, m().func, m().string]), onClick: m().func, cardTitle: m().string, size: m().oneOf(["large", "small"]) }, ya.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
const Yc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Rn = ({ label: e, cardTitle: t, ariaLabel: r, color: n, disabled: a, element: s, innerRef: l, href: f, onClick: c, ...p }) => {
  const b = Ke()("btn", "btn-tag", { "btn-tag-alt-white": n === "white", "btn-tag-alt-gray": n === "gray", "btn-tag-alt-dark": n === "dark", disabled: a });
  let y = s;
  return f && s === "button" && (y = "a"), v.default.createElement(y, qr({ type: y === "button" && c ? "button" : void 0 }, p, { className: b, href: f, ref: l, onClick: () => (qt({ ...Yc, text: e, section: t }), void (c == null ? void 0 : c())), "aria-label": r }), e);
};
Rn.propTypes = { label: m().string, cardTitle: m().string, ariaLabel: m().string, color: m().oneOf(["white", "gray", "dark"]), disabled: m().bool, element: m().oneOfType([m().func, m().string, m().shape({ $$typeof: m().symbol, render: m().func }), m().arrayOf(m().oneOfType([m().func, m().string, m().shape({ $$typeof: m().symbol, render: m().func })]))]), href: m().string, innerRef: m().oneOfType([m().object, m().func, m().string]), onClick: m().func }, Rn.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
const on = ({ src: e, alt: t, cssClasses: r, loading: n = "lazy", decoding: a = "async", dataTestId: s, fetchPriority: l = "auto", width: f, height: c, cardLink: p, title: b, caption: y, captionTitle: x, border: I, dropShadow: A }) => {
  const O = { src: e, alt: t, loading: n, decoding: a, fetchpriority: l, ...(r == null ? void 0 : r.length) > 0 && { className: oa(r) }, ...s && { "data-testid": s }, ...f && { width: f }, ...c && { height: c } }, R = Ke()("uds-img", { borderless: !I, "uds-img-drop-shadow": A }), D = (j) => {
    const Z = j ? `${O.className} ${j}` : O.className;
    return p ? v.default.createElement("a", { href: p }, v.default.createElement("img", qr({}, O, { className: Z })), v.default.createElement("span", { className: "visually-hidden" }, b)) : v.default.createElement("img", qr({}, O, { className: Z }));
  };
  return v.default.createElement(v.default.Fragment, null, y ? v.default.createElement("div", { className: R }, v.default.createElement("figure", { className: "figure uds-figure" }, D(), y && v.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, x && v.default.createElement("h3", null, x), v.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: nr(y) })))) : D(R));
};
on.propTypes = { src: m().string.isRequired, alt: m().string.isRequired, cssClasses: m().arrayOf(m().string), loading: m().oneOf(["lazy", "eager"]), decoding: m().oneOf(["sync", "async", "auto"]), fetchPriority: m().oneOf(["auto", "high", "low"]), width: m().string, height: m().string, dataTestId: m().string, cardLink: m().string, title: m().string, caption: m().string, captionTitle: m().string, border: m().bool, dropShadow: m().bool };
const Xc = Fr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Zc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, ba = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: s, icon: l, body: f, eventFormat: c, eventLocation: p, eventTime: b, buttons: y, linkLabel: x, linkUrl: I, tags: A, showBorders: O, cardLink: R }) => v.default.createElement(po, { type: e, width: t, horizontal: r, image: n, imageAltText: a, title: s, icon: l, body: f, eventFormat: c, eventLocation: p, eventTime: b, buttons: y, linkLabel: x, linkUrl: I, tags: A, showBorders: O, cardLink: R });
ba.propTypes = { type: m().oneOf(["default", "degree", "event", "news", "story"]), width: m().oneOf(["25%", "50%", "75%", "100%"]), horizontal: m().bool, title: m().string.isRequired, icon: m().arrayOf(m().string), body: m().string, eventFormat: m().oneOf(["stack", "inline"]), eventLocation: m().string, eventTime: m().string, image: m().string, imageAltText: m().string, buttons: m().arrayOf(m().shape({ ariaLabel: m().string, color: m().oneOf(["gold", "maroon", "gray", "dark"]), icon: m().arrayOf(m().string), href: m().string, label: m().string, onClick: m().func, size: m().oneOf(["default", "small", "xsmall"]), target: m().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: m().string, linkUrl: m().string, tags: m().arrayOf(m().shape({ ariaLabel: m().string, color: m().oneOf(["white", "gray", "dark"]), href: m().string, label: m().string, onClick: m().func })), showBorders: m().bool, cardLink: m().string }, ba.defaultProps = { type: "default", width: "100%", horizontal: !1, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const po = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: s, icon: l, body: f, eventFormat: c, eventLocation: p, eventTime: b, buttons: y, linkLabel: x, linkUrl: I, tags: A, showBorders: O, cardLink: R }) => {
  const D = Ke()("card", "cards-components", { "card-degree": e === "degree", "card-event": e === "event", "card-story": e === "story", [`w-${t.replace("%", "")}`]: t !== "100%", "card-horizontal": r, borderless: !O });
  return v.default.createElement(v.default.Fragment, null, v.default.createElement(Xc, { className: D, "data-testid": "card-container" }, !!n && v.default.createElement(on, { src: n, alt: a, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: R, title: s }), !n && l && v.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), r ? v.default.createElement("div", { className: "card-content-wrapper" }, v.default.createElement(wa, { type: e, body: f, eventFormat: c, eventLocation: p, eventTime: b, title: s, buttons: y, linkLabel: x, linkUrl: I, tags: A, cardLink: R })) : v.default.createElement(wa, { type: e, body: f, eventFormat: c, eventLocation: p, eventTime: b, title: s, buttons: y, linkLabel: x, linkUrl: I, tags: A, cardLink: R })));
};
po.propTypes = { type: m().oneOf(["default", "degree", "event", "news", "story"]), width: m().oneOf(["25%", "50%", "75%", "100%"]), horizontal: m().bool, title: m().string.isRequired, icon: m().arrayOf(m().string), body: m().string, eventFormat: m().oneOf(["stack", "inline"]), eventLocation: m().string, eventTime: m().string, image: m().string, imageAltText: m().string, buttons: m().arrayOf(m().shape({ ariaLabel: m().string, color: m().oneOf(["gold", "maroon", "gray", "dark"]), icon: m().arrayOf(m().string), href: m().string, label: m().string, onClick: m().func, size: m().oneOf(["default", "small", "xsmall"]), target: m().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: m().string, linkUrl: m().string, tags: m().arrayOf(m().shape({ ariaLabel: m().string, color: m().oneOf(["white", "gray", "dark"]), href: m().string, label: m().string, onClick: m().func })), showBorders: m().bool, cardLink: m().string }, po.defaultProps = { type: "default", width: "100%", horizontal: !1, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const wa = ({ type: e, body: t, eventFormat: r, eventLocation: n, eventTime: a, title: s, buttons: l, linkLabel: f, linkUrl: c, tags: p, cardLink: b }) => {
  return v.default.createElement(v.default.Fragment, null, !!s && v.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, v.default.createElement("h3", { className: "card-title" }, b ? v.default.createElement("a", { href: b }, s) : s)), !!t && v.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, v.default.createElement("div", { dangerouslySetInnerHTML: nr(t) })), e === "event" && (a || n) && v.default.createElement(mo, { eventFormat: r, eventTime: a, eventLocation: n }), l && v.default.createElement("div", { className: "card-buttons" }, l.map((x) => v.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${x.label}-${x.href}` }, v.default.createElement(Mr, { ariaLabel: x.ariaLabel, color: x.color, icon: x.icon, href: x.href, label: x.label, onClick: x.onClick, size: x.size, target: x.target, cardTitle: s })))), c && f && v.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, v.default.createElement("a", { href: (y = c, y.startsWith("https://") || y.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(y) ? y : `mailto:${y}`), onClick: () => qt({ ...Zc, section: s, text: f }) }, f)), p && v.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, p.map((x) => v.default.createElement(Rn, { key: `${x.label}-${x.href}`, ariaLabel: x.ariaLabel, color: x.color, href: x.href, label: x.label, onClick: x.onClick, cardTitle: s }))));
  var y;
};
wa.propTypes = { type: m().oneOf(["default", "degree", "event", "news", "story"]), body: m().string, eventFormat: m().oneOf(["stack", "inline"]), eventLocation: m().string, eventTime: m().string, title: m().string.isRequired, buttons: m().arrayOf(m().shape({ ariaLabel: m().string, color: m().oneOf(["gold", "maroon", "gray", "dark"]), icon: m().arrayOf(m().string), href: m().string, label: m().string, onClick: m().func, size: m().oneOf(["default", "small", "xsmall"]), target: m().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: m().string, linkUrl: m().string, tags: m().arrayOf(m().shape({ ariaLabel: m().string, color: m().oneOf(["white", "gray", "dark"]), href: m().string, label: m().string, onClick: m().func })), cardLink: m().string }, wa.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
const mo = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? v.default.createElement("div", { className: "card-event-details" }, t && v.default.createElement("div", { className: "card-event-icons" }, v.default.createElement("div", null, v.default.createElement("i", { className: "far fa-calendar" })), v.default.createElement("div", { dangerouslySetInnerHTML: nr(t) })), r && v.default.createElement("div", { className: "card-event-icons" }, v.default.createElement("div", null, v.default.createElement("i", { className: "fas fa-map-marker-alt" })), v.default.createElement("div", { dangerouslySetInnerHTML: nr(r) }))) : v.default.createElement(v.default.Fragment, null, t && v.default.createElement("div", { className: "card-event-details" }, v.default.createElement("div", { className: "card-event-icons" }, v.default.createElement("div", null, v.default.createElement("i", { className: "far fa-calendar" })), v.default.createElement("div", { dangerouslySetInnerHTML: nr(t) }))), r && v.default.createElement("div", { className: "card-event-details" }, v.default.createElement("div", { className: "card-event-icons" }, v.default.createElement("div", null, v.default.createElement("i", { className: "fas fa-map-marker-alt" })), v.default.createElement("span", null, v.default.createElement("div", { dangerouslySetInnerHTML: nr(r) })))));
mo.propTypes = { eventFormat: m().oneOf(["stack", "inline"]), eventLocation: m().string, eventTime: m().string }, mo.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
const Kc = Fr.div`
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
`, Jc = () => v.default.createElement(Kc, null, v.default.createElement("div", null), v.default.createElement("div", null), v.default.createElement("div", null), v.default.createElement("div", null)), Qc = Fr.section``, Rs = (0, v.createContext)(null), Ns = ({ defaultProps: e, dataSource: t, noFeedText: r, renderHeader: n, renderBody: a, dataTransformer: s = (c) => c, dataFilter: l = (c) => c, maxItems: f }) => {
  const [{ data: c, loading: p, error: b }, y] = (() => {
    const [O, R] = (0, v.useState)(), [D, j] = (0, v.useState)(!1), [Z, q] = (0, v.useState)(!1), [L, B] = (0, v.useState)("");
    return (0, v.useEffect)(() => {
      L && (() => {
        q(null), j(!0);
        try {
          fetch(L).then(($) => $.json()).then(($) => {
            R($), j(!1);
          }).catch(($) => {
            q($), j(!1);
          });
        } catch ($) {
          q($);
        }
      })();
    }, [L]), [{ data: O, loading: D, error: Z }, B];
  })(), [x, I] = (0, v.useState)([]), A = { ...e.dataSource, ...t };
  return (0, v.useEffect)(() => {
    y(A == null ? void 0 : A.url);
  }, [A == null ? void 0 : A.url]), (0, v.useEffect)(() => {
    const O = c == null ? void 0 : c.nodes.map(s), R = O == null ? void 0 : O.filter((D) => l(D, t == null ? void 0 : t.filters));
    I(f ? R == null ? void 0 : R.slice(0, f) : R);
  }, [c]), v.default.createElement(Rs.Provider, { value: { feeds: x } }, v.default.createElement(Qc, null, n, b ? v.default.createElement("span", null, "Error, try again!") : v.default.createElement(v.default.Fragment, null, p && !(x != null && x.length) && v.default.createElement("div", { className: "text-center mt-4" }, v.default.createElement(Jc, null)), x != null && x.length ? a : !p && v.default.createElement("p", { className: "text-center" }, r))));
};
Ns.propTypes = { renderHeader: m().element, renderBody: m().element, maxItems: m().number, dataTransformer: m().func, dataFilter: m().func, noFeedText: m().string };
const Io = m().shape({ color: m().oneOf(["white", "dark"]), text: m().string }), Mo = m().shape({ color: m().oneOf(["gold", "maroon", "gray", "dark"]), text: m().string }), eu = m().shape({ color: m().oneOf(["gold", "maroon", "gray", "dark"]), text: m().string, size: m().string }), Ls = m().shape({ url: m().string, filters: m().string }), Ps = m().shape({ header: Io, ctaButton: Mo, dataSource: Ls, maxItems: m().number }), tu = Fr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Is = ({ defaultProps: e, header: t, ctaButton: r }) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return v.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, v.default.createElement("div", { className: "col-sm-12 col-md-9" }, v.default.createElement("h2", { className: `text-${n.color}` }, n.text)), v.default.createElement(tu, { className: "col-sm-12 col-md-3" }, v.default.createElement("a", { className: `btn btn-${a.color}`, href: a.url, onClick: () => qt({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: n.text, text: a.text }) }, a.text)));
};
Is.propTypes = { defaultProps: Ps, header: Io, ctaButton: Mo };
const Ms = ({ children: e }) => v.default.createElement("div", { className: "row", "data-testid": "feed-body" }, v.default.createElement("div", { className: "col" }, e));
Ms.propTypes = { children: m().element };
const ru = Fr.img`
  width: 100%;
`, Do = (e) => {
  const t = e.type || "heading-hero";
  return { "heading-hero": () => function({ image: r, subTitle: n, title: a, contents: s, contentsColor: l }) {
    const f = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, c = { black: "text-dark", white: "text-white", undefined: "" };
    let p = v.default.createElement(v.default.Fragment, null);
    return a && (p = v.default.createElement("h1", { style: { maxWidth: a.maxWidth || "" }, "data-testid": "hero-title" }, v.default.createElement("span", { className: Ke()({ [c[a.color]]: a.color, [f[a.highlightColor]]: a.highlightColor }) }, a.text))), a && n && (p = v.default.createElement("header", null, v.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, v.default.createElement("span", { className: Ke()({ [c[n.color]]: n.color, [f[n.highlightColor]]: n.highlightColor }) }, n.text)), p)), v.default.createElement("div", { className: Ke()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[r == null ? void 0 : r.size]]: r == null ? void 0 : r.size }) }, v.default.createElement("div", { className: "hero-overlay" }), v.default.createElement(ru, { className: "hero", src: r == null ? void 0 : r.url, alt: r == null ? void 0 : r.altText, "data-testid": "hero-image" }), p, s && v.default.createElement("div", { "data-testid": "hero-content", className: Ke()("content", { [c[l]]: l }) }, s.map((b, y) => v.default.createElement("p", { key: `content-${y}` }, b.text))));
  }(e), "story-hero": () => function({ image: r, title: n, contents: a }) {
    return console.log({ image: r, title: n, contents: a }), v.default.createElement("div", null, "TODO: to be implemented");
  }(e), undefined: () => (console.error(`the type '${t}' is not supported by the 'Hero' component.`), null) }[t]();
};
Do.propTypes = { type: m().oneOf(["heading-hero", "story-hero"]), image: Ul, title: Ha, subTitle: Ha, contents: m().arrayOf(Ha), contentsColor: m().string };
const Lr = ({ dataId: e, isClickeable: t, disabled: r, pageLinkIcon: n, selectedPage: a, onClick: s, ellipses: l, ariaLabel: f, children: c, ariaDisabled: p }) => v.default.createElement("li", { className: Ke()("page-item", { disabled: r, active: a, elipses: l }) }, t ? v.default.createElement("button", { type: "button", "aria-label": f, className: Ke()("page-link", { "page-link-icon": n }), onClick: s, "data-testid": "page-link", "data-id": e, "aria-current": a ? "page" : null, "aria-disabled": p }, c, a && v.default.createElement("span", { className: "visually-hidden" }, "(current)")) : v.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, c));
Lr.propTypes = { isClickeable: m().bool, disabled: m().bool, pageLinkIcon: m().bool, selectedPage: m().bool, dataId: m().string, onClick: m().func, children: m().node, ellipses: m().bool, ariaLabel: m().string, ariaDisabled: m().bool }, Lr.defaultProps = { isClickeable: !1, disabled: !1, pageLinkIcon: !1, selectedPage: !1, onClick: () => {
} };
const nu = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, ka = ({ type: e, background: t, currentPage: r, totalPages: n, onChange: a }) => {
  const [s, l] = (0, v.useState)(null);
  (0, v.useEffect)(() => {
    l(r);
  }, [r]);
  const f = (c, p) => {
    const b = { first: 1, prev: s === 1 ? 1 : s - 1, next: s === n ? n : s + 1, last: n }[p] ?? p;
    l(b), ((y) => {
      qt({ ...nu, text: `page ${y}` });
    })(b), a == null || a(c, b);
  };
  return v.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, v.default.createElement("ul", { className: Ke()("pagination", "justify-content-center", "pt-2", "pb-2", { border: e === "bordered", "uds-bg-gray1": t === "gray1", "uds-bg-gray": t === "gray2", "uds-bg-dark": t === "gray7" }) }, v.default.createElement(Lr, { dataId: "prev", isClickeable: !0, disabled: s === 1, pageLinkIcon: !0, onClick: (c) => f(c, "prev"), ariaDisabled: s === 1, ariaLabel: "Previous Page" }), (() => {
    const c = gi(s === n - 1, 2, s === n ? 3 : 1), p = gi(s === 1, 3, s === 2 ? 2 : 1), b = [...vi(s - c, s, n), ...vi(s, s + 1 + p, n)];
    return v.default.createElement(v.default.Fragment, null, b[0] !== 1 && v.default.createElement(Lr, { ariaLabel: `Page 1 of ${n}`, isClickeable: !0, selectedPage: s === 1, onClick: (y) => f(y, "first") }, "1"), b[0] > 2 && v.default.createElement(Lr, { ellipses: !0 }, "..."), b.map((y) => v.default.createElement(Lr, { ariaLabel: `Page ${y} of ${n}`, isClickeable: !0, key: y, selectedPage: s === y, onClick: (x) => f(x, y) }, y)), b[b.length - 1] < n - 1 && v.default.createElement(Lr, { ellipses: !0 }, "..."), b[b.length - 1] !== n && v.default.createElement(Lr, { isClickeable: !0, ariaLabel: `Page ${n} of ${n}`, selectedPage: s === n, onClick: (y) => f(y, "last") }, n));
  })(), v.default.createElement(Lr, { dataId: "next", isClickeable: !0, ariaDisabled: s === n, disabled: s === n, pageLinkIcon: !0, onClick: (c) => f(c, "next"), ariaLabel: "Next Page" })));
};
ka.propTypes = { type: m().oneOf(["default", "bordered"]).isRequired, background: m().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: m().number, totalPages: m().number, onChange: m().func.isRequired }, ka.defaultProps = { currentPage: 1, totalPages: 10 };
const Ii = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, rn = (e) => e === "small", Ds = ({ size: e, image: t, imageAlt: r }) => rn(e) ? v.default.createElement("div", { className: "image-wrapper" }, v.default.createElement(on, { src: t, alt: r, fetchPriority: "high" })) : v.default.createElement(on, { src: t, alt: r, fetchPriority: "high" });
Ds.propTypes = { size: m().oneOf(["small", "large"]), image: m().string.isRequired, imageAlt: m().string.isRequired };
const Fs = ({ heading: e, citation: t }) => v.default.createElement("div", { className: "citation" }, v.default.createElement("h4", null, e), v.default.createElement("p", null, "— ", t));
Fs.propTypes = { heading: m().string.isRequired, citation: m().string.isRequired };
const js = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [a, s] = (0, v.useState)(!1), l = `info-layer-${Math.floor(1e5 * Math.random())}`, f = (c) => {
    c.type !== "click" && c.key !== "Enter" && c.key !== " " || (s(!a), qt({ ...Ii, text: "Expand ranking", action: a ? "open" : "close", section: r }));
  };
  return v.default.createElement("div", { className: Ke()("info-layer", { active: a }), "data-testid": "info-layer", id: l }, v.default.createElement("div", { className: "content" }, v.default.createElement("div", { className: Ke()("header", { closed: rn(e) && !a }) }, rn(e) && v.default.createElement("p", { dangerouslySetInnerHTML: nr(t) }), !rn(e) && v.default.createElement(v.default.Fragment, null, v.default.createElement("button", { onClick: f, className: "btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": l }, v.default.createElement("h4", null, r), v.default.createElement("i", { className: "fas fa-chevron-up" }))), rn(e) && v.default.createElement(v.default.Fragment, null, v.default.createElement("button", { onClick: f, className: "btn btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": l }, v.default.createElement("i", { className: "fas fa-chevron-up" })))), !rn(e) && v.default.createElement("p", { dangerouslySetInnerHTML: nr(t) }), n && v.default.createElement("a", { href: n, "aria-label": "Read more", className: "read-more", onClick: () => {
    qt({ ...Ii, section: r, text: "read more" });
  } }, "Read more ", v.default.createElement("span", { className: "visually-hidden" }, r), v.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
};
js.propTypes = { imageSize: m().oneOf(["small", "large"]), body: m().string.isRequired, heading: m().string.isRequired, readMoreLink: m().string };
const Fo = ({ imageSize: e = "large", image: t, imageAlt: r, heading: n, body: a, readMoreLink: s = "", citation: l }) => v.default.createElement("div", { className: Ke()("card-ranking", { "large-image": e === "large", "small-image": e === "small" }) }, v.default.createElement(Ds, { size: e, image: t, imageAlt: r }), rn(e) && v.default.createElement(Fs, { heading: n, citation: l }), v.default.createElement(js, { imageSize: e, body: a, heading: n, readMoreLink: s }));
Fo.propTypes = { imageSize: m().oneOf(["small", "large"]).isRequired, image: m().string.isRequired, imageAlt: m().string.isRequired, heading: m().string.isRequired, body: m().string.isRequired, readMoreLink: m().string, citation: m().string };
const au = Fr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, $s = ({ hidePrev: e, hideNext: t, clickPrev: r, clickNext: n }) => v.default.createElement(au, null, !e && v.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: r, tabIndex: -1 }, v.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), v.default.createElement("span", { className: "visually-hidden" }, "Previous")), !t && v.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: n, tabIndex: -1 }, v.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), v.default.createElement("span", { className: "visually-hidden" }, "Next")));
$s.propTypes = { hidePrev: m().bool, hideNext: m().bool, clickPrev: m().func.isRequired, clickNext: m().func.isRequired };
const zs = (0, v.forwardRef)(function(e, t) {
  const { id: r, selected: n, title: a, selectTab: s, leftKeyPressed: l, rightKeyPressed: f, icon: c } = e, p = (0, v.useRef)(null);
  return (0, v.useImperativeHandle)(t, () => ({ focus() {
    p.current.focus();
  }, scrollIntoView() {
    var x, I, A, O, R, D, j;
    const b = ((x = p.current) == null ? void 0 : x.offsetWidth) / 2 + p.current.offsetLeft, y = ((A = (I = p.current) == null ? void 0 : I.offsetParent) == null ? void 0 : A.scrollLeft) + ((R = (O = p.current) == null ? void 0 : O.offsetParent) == null ? void 0 : R.offsetWidth) / 2;
    (j = (D = p.current) == null ? void 0 : D.offsetParent) == null || j.scrollBy({ left: b - y });
  } }), []), v.default.createElement("a", { ref: p, className: "nav-item nav-link " + (n ? "active" : ""), id: r, href: `#nav-${r}`, role: "tab", "aria-controls": `nav-${r}`, "aria-selected": n, onClick: (b) => s(b, r, a), onKeyDown: (b) => {
    b.keyCode === 37 ? (b.preventDefault(), l()) : b.keyCode === 39 && (b.preventDefault(), f());
  }, tabIndex: n ? "" : "-1" }, a, " ", c && v.default.createElement("i", { className: `${c == null ? void 0 : c[0]} fa-${c == null ? void 0 : c[1]} me-1` }));
});
zs.propTypes = { id: m().string.isRequired, selected: m().bool.isRequired, title: m().string.isRequired, selectTab: m().func.isRequired, leftKeyPressed: m().func.isRequired, rightKeyPressed: m().func.isRequired, icon: m().arrayOf(m().string) };
const Hs = ({ id: e, bgColor: t, selected: r, children: n }) => r && v.default.createElement("div", { className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`, id: `nav-${e}`, role: "tabpanel", "aria-labelledby": `nav-${e}-tab` }, n);
Hs.propTypes = { id: m().string.isRequired, bgColor: m().string, selected: m().bool, children: m().oneOfType([m().array, m().element]) };
const Bs = ({ initialTab: e = "", children: t, bgColor: r = "", onTabChange: n = () => {
} }) => {
  const a = v.default.Children.toArray(t), s = (0, v.useRef)(!1), [l, f] = (0, v.useState)(e && e !== "null" ? e : a[0].props.id), c = (0, v.useRef)(null), [p, b] = function() {
    const B = (0, v.useRef)({}), $ = (0, v.useCallback)((ue) => (Re) => {
      B.current[ue] = Re;
    }, []);
    return [B, $];
  }(), y = (B) => {
    var $;
    n(B), ($ = p.current[B]) == null || $.focus(), f(B);
  }, [x, I] = (0, v.useState)(0), [A, O] = (0, v.useState)();
  (0, v.useEffect)(() => {
    const B = () => {
      I(c.current.scrollLeft);
    };
    return c.current.addEventListener("scroll", B), B(), () => {
      c.current && c.current.removeEventListener("scroll", B);
    };
  }, [A]), (0, v.useEffect)(() => {
    const B = () => {
      O(c.current.scrollWidth - c.current.offsetWidth);
    };
    return window.addEventListener("resize", B), B(), () => {
      c.current && window.removeEventListener("resize", B);
    };
  }, []), (0, v.useEffect)(() => {
    var B;
    (B = p.current[l]) == null || B.scrollIntoView();
  }, [l]), (0, v.useEffect)(() => {
    s.current && e && e !== "null" && l !== e && f(e);
  }, [e]), (0, v.useEffect)(() => {
    s.current = !0;
  }, []);
  const R = (B) => {
    qt({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: B });
  }, D = a.map((B) => v.default.cloneElement(B, { bgColor: r, selected: l === B.props.id })), j = (B) => {
    const $ = c.current, ue = $.scrollWidth - $.clientWidth;
    let Re = $.scrollLeft + 200 * B;
    Re = Math.max(0, Math.min(ue, Re)), $.scrollTo({ left: Re, behavior: "smooth" });
  }, Z = (B, $, ue) => {
    qt({ event: "link", action: "click", name: "onclick", type: "internal link", text: ue }), B.preventDefault(), y($);
  }, q = (B = !0) => {
    const $ = a.length, ue = B ? 1 : -1, Re = a.findIndex((Se) => Se.props.id === l), He = a[($ + Re + ue) % $].props.id;
    y(He);
  };
  let L = "uds-tabbed-panels";
  return r === "bg-dark" && (L += " uds-tabbed-panels-dark"), v.default.createElement("div", { className: r }, v.default.createElement("nav", { className: L }, v.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: c }, a.map((B, $) => v.default.createElement(zs, { ref: b(B.props.id), id: B.props.id, title: B.props.title, selected: l === B.props.id, selectTab: Z, key: B.props.id, leftKeyPressed: () => q(!1), rightKeyPressed: () => q(), icon: B.props.icon, index: $ }))), v.default.createElement($s, { hidePrev: x <= 0, hideNext: x >= A, clickPrev: () => {
    j(-1), R("left chevron");
  }, clickNext: () => {
    j(1), R("right chevron");
  } })), v.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, D));
};
Bs.propTypes = { initialTab: m().string, children: m().arrayOf(m().element).isRequired, bgColor: m().string, onTabChange: m().func };
const jo = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, s;
  return v.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${oa(n.containerCssClass)}` }, e && v.default.createElement(on, { src: e, alt: t, dataTestId: "testimonial-image", fetchPriority: "high" }), v.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, v.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), v.default.createElement("blockquote", { style: { paddingLeft: 0 } }, r.title && v.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, v.default.createElement("span", { className: oa(n.titleCssClass) }, r.title)), r.content && v.default.createElement("p", { className: oa(n.contentCssClass), "data-testid": "testimonial-content" }, r.content), (!!((a = r.cite) != null && a.name) || !!((s = r.cite) != null && s.description)) && v.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, v.default.createElement("cite", { className: "name" }, r.cite.name), r.cite && v.default.createElement("cite", { className: "description" }, r.cite.description))));
};
jo.propTypes = { quote: m().shape({ title: m().string, content: m().string, cite: m().shape({ name: m().string, description: m().string }) }).isRequired, imageSource: m().string, imageAltText: m().string, itemStyle: m().shape({ containerCssClass: m().arrayOf(m().string), titleCssClass: m().arrayOf(m().string), contentCssClass: m().arrayOf(m().string) }) };
const ou = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, $o = (e) => {
  const { type: t = "video", url: r = "", vttUrl: n, title: a = "", caption: s, className: l, controls: f = !0 } = e;
  return t === "youtube" ? (({ title: c = "", caption: p, url: b = "", className: y }) => v.default.createElement("div", { className: Ke()(`uds-video-container ${y}`, { "uds-video-with-caption": p }) }, v.default.createElement("div", { className: "uds-video-player youtube-video" }, v.default.createElement("iframe", { title: c, src: b })), p && v.default.createElement("figure", { "data-testid": "video-caption" }, v.default.createElement("figcaption", null, p))))({ url: r, title: a, caption: s, className: l }) : (({ url: c = "", vttUrl: p, caption: b, title: y = "", className: x, controls: I = !0 }) => {
    const A = (0, v.useRef)(null);
    return v.default.createElement("div", { className: Ke()(`uds-video-container ${x}`, { "uds-video-with-caption": b }) }, v.default.createElement("div", { className: "uds-video-player" }, v.default.createElement("video", { ref: A, title: y, onClick: () => {
      qt({ ...ou, section: y });
    }, playsInline: !0, controls: I || !0 }, v.default.createElement("source", { src: c }), v.default.createElement("track", { src: p, kind: "captions", srcLang: "en", label: "english_captions" }))), b && v.default.createElement("figure", { "data-testid": "video-caption" }, v.default.createElement("figcaption", null, b)));
  })({ url: r, vttUrl: n, title: a, caption: s, className: l, controls: f });
};
$o.propTypes = { type: m().oneOf(["video", "youtube"]), url: m().string, vttUrl: m().string, title: m().string, className: m().string, caption: m().string, controls: m().bool };
const iu = ((e) => {
  var t = {};
  return ht.d(t, e), t;
})({ default: () => Fl.default }), Gt = (e, t, r) => {
  iu.default.render(v.default.createElement(e, t), r);
}, su = ({ targetSelector: e, props: t }) => Gt(Ro, t, document.querySelector(e)), lu = ({ targetSelector: e, props: t }) => Gt(Po, t, document.querySelector(e)), cu = ({ targetSelector: e, props: t }) => Gt(va, t, document.querySelector(e)), uu = ({ targetSelector: e, props: t }) => Gt(Mr, t, document.querySelector(e)), du = ({ targetSelector: e, props: t }) => Gt(ya, t, document.querySelector(e)), fu = ({ targetSelector: e, props: t }) => Gt(Rn, t, document.querySelector(e)), pu = ({ targetSelector: e, props: t }) => Gt(ba, t, document.querySelector(e)), mu = ({ targetSelector: e, props: t }) => Gt(Do, t, document.querySelector(e)), hu = ({ targetSelector: e, props: t }) => Gt(on, t, document.querySelector(e)), gu = ({ targetSelector: e, props: t }) => Gt(Fo, t, document.querySelector(e)), vu = ({ targetSelector: e, props: t }) => Gt(ka, t, document.querySelector(e)), yu = ({ targetSelector: e, props: t }) => Gt(jo, t, document.querySelector(e)), bu = ({ targetSelector: e, props: t }) => Gt($o, t, document.querySelector(e));
var Us = bn.Zp, wu = bn.TR, ku = bn.Pb, zo = bn.Ur, Su = bn._Q;
function Ho({
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
var Ws = { exports: {} }, Va = { exports: {} }, Ve = {};
var Mi;
function xu() {
  if (Mi) return Ve;
  Mi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function Z(L) {
    if (typeof L == "object" && L !== null) {
      var B = L.$$typeof;
      switch (B) {
        case t:
          switch (L = L.type, L) {
            case c:
            case p:
            case n:
            case s:
            case a:
            case y:
              return L;
            default:
              switch (L = L && L.$$typeof, L) {
                case f:
                case b:
                case A:
                case I:
                case l:
                  return L;
                default:
                  return B;
              }
          }
        case r:
          return B;
      }
    }
  }
  function q(L) {
    return Z(L) === p;
  }
  return Ve.AsyncMode = c, Ve.ConcurrentMode = p, Ve.ContextConsumer = f, Ve.ContextProvider = l, Ve.Element = t, Ve.ForwardRef = b, Ve.Fragment = n, Ve.Lazy = A, Ve.Memo = I, Ve.Portal = r, Ve.Profiler = s, Ve.StrictMode = a, Ve.Suspense = y, Ve.isAsyncMode = function(L) {
    return q(L) || Z(L) === c;
  }, Ve.isConcurrentMode = q, Ve.isContextConsumer = function(L) {
    return Z(L) === f;
  }, Ve.isContextProvider = function(L) {
    return Z(L) === l;
  }, Ve.isElement = function(L) {
    return typeof L == "object" && L !== null && L.$$typeof === t;
  }, Ve.isForwardRef = function(L) {
    return Z(L) === b;
  }, Ve.isFragment = function(L) {
    return Z(L) === n;
  }, Ve.isLazy = function(L) {
    return Z(L) === A;
  }, Ve.isMemo = function(L) {
    return Z(L) === I;
  }, Ve.isPortal = function(L) {
    return Z(L) === r;
  }, Ve.isProfiler = function(L) {
    return Z(L) === s;
  }, Ve.isStrictMode = function(L) {
    return Z(L) === a;
  }, Ve.isSuspense = function(L) {
    return Z(L) === y;
  }, Ve.isValidElementType = function(L) {
    return typeof L == "string" || typeof L == "function" || L === n || L === p || L === s || L === a || L === y || L === x || typeof L == "object" && L !== null && (L.$$typeof === A || L.$$typeof === I || L.$$typeof === l || L.$$typeof === f || L.$$typeof === b || L.$$typeof === R || L.$$typeof === D || L.$$typeof === j || L.$$typeof === O);
  }, Ve.typeOf = Z, Ve;
}
var Di;
function Vs() {
  return Di || (Di = 1, Va.exports = xu()), Va.exports;
}
var qa, Fi;
function Eu() {
  if (Fi) return qa;
  Fi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qa = e, qa;
}
var Ga, ji;
function Tu() {
  if (ji) return Ga;
  ji = 1;
  var e = Eu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ga = function() {
    function n(l, f, c, p, b, y) {
      if (y !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var s = {
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
    return s.PropTypes = s, s;
  }, Ga;
}
Ws.exports = Tu()();
var Cu = Ws.exports;
const S = /* @__PURE__ */ Oo(Cu);
var qs = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", l = 0; l < arguments.length; l++) {
        var f = arguments[l];
        f && (s = a(s, n(f)));
      }
      return s;
    }
    function n(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return r.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var l = "";
      for (var f in s)
        t.call(s, f) && s[f] && (l = a(l, f));
      return l;
    }
    function a(s, l) {
      return l ? s ? s + " " + l : s + l : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(qs);
var _u = qs.exports;
const Nn = /* @__PURE__ */ Oo(_u), Au = (e) => (e || []).join(" ");
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function ho(e, t) {
  return ho = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, ho(e, t);
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
function la(e, t, r) {
  return Ou() ? la = Reflect.construct : la = function(a, s, l) {
    var f = [null];
    f.push.apply(f, s);
    var c = Function.bind.apply(a, f), p = new c();
    return l && ho(p, l.prototype), p;
  }, la.apply(null, arguments);
}
function br(e) {
  return Ru(e) || Nu(e) || Lu(e) || Pu();
}
function Ru(e) {
  if (Array.isArray(e)) return go(e);
}
function Nu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lu(e, t) {
  if (e) {
    if (typeof e == "string") return go(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return go(e, t);
  }
}
function go(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Iu = Object.hasOwnProperty, $i = Object.setPrototypeOf, Mu = Object.isFrozen, Du = Object.getPrototypeOf, Fu = Object.getOwnPropertyDescriptor, Lt = Object.freeze, or = Object.seal, ju = Object.create, Gs = typeof Reflect < "u" && Reflect, Sa = Gs.apply, vo = Gs.construct;
Sa || (Sa = function(t, r, n) {
  return t.apply(r, n);
});
Lt || (Lt = function(t) {
  return t;
});
or || (or = function(t) {
  return t;
});
vo || (vo = function(t, r) {
  return la(t, br(r));
});
var $u = ir(Array.prototype.forEach), zi = ir(Array.prototype.pop), Tn = ir(Array.prototype.push), ca = ir(String.prototype.toLowerCase), Ya = ir(String.prototype.toString), Hi = ir(String.prototype.match), yr = ir(String.prototype.replace), zu = ir(String.prototype.indexOf), Hu = ir(String.prototype.trim), Ct = ir(RegExp.prototype.test), Xa = Bu(TypeError);
function ir(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Sa(e, t, n);
  };
}
function Bu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return vo(e, r);
  };
}
function Ie(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : ca, $i && $i(e, null);
  for (var a = t.length; a--; ) {
    var s = t[a];
    if (typeof s == "string") {
      var l = r(s);
      l !== s && (Mu(t) || (t[a] = l), s = l);
    }
    e[s] = !0;
  }
  return e;
}
function Qr(e) {
  var t = ju(null), r;
  for (r in e)
    Sa(Iu, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function Kn(e, t) {
  for (; e !== null; ) {
    var r = Fu(e, t);
    if (r) {
      if (r.get)
        return ir(r.get);
      if (typeof r.value == "function")
        return ir(r.value);
    }
    e = Du(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Bi = Lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Za = Lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ka = Lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Uu = Lt(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ja = Lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Wu = Lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ui = Lt(["#text"]), Wi = Lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Qa = Lt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vi = Lt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Jn = Lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vu = or(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qu = or(/<%[\w\W]*|[\w\W]*%>/gm), Gu = or(/\${[\w\W]*}/gm), Yu = or(/^data-[\-\w.\u00B7-\uFFFF]/), Xu = or(/^aria-[\-\w]+$/), Zu = or(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ku = or(/^(?:\w+script|data):/i), Ju = or(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qu = or(/^html$/i), ed = or(/^[a-z][.\w]*(-[.\w]+)+$/i), td = function() {
  return typeof window > "u" ? null : window;
}, rd = function(t, r) {
  if (Br(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML: function(f) {
        return f;
      },
      createScriptURL: function(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function Ys() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : td(), t = function(_) {
    return Ys(_);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, s = e.HTMLTemplateElement, l = e.Node, f = e.Element, c = e.NodeFilter, p = e.NamedNodeMap, b = p === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : p, y = e.HTMLFormElement, x = e.DOMParser, I = e.trustedTypes, A = f.prototype, O = Kn(A, "cloneNode"), R = Kn(A, "nextSibling"), D = Kn(A, "childNodes"), j = Kn(A, "parentNode");
  if (typeof s == "function") {
    var Z = n.createElement("template");
    Z.content && Z.content.ownerDocument && (n = Z.content.ownerDocument);
  }
  var q = rd(I, r), L = q ? q.createHTML("") : "", B = n, $ = B.implementation, ue = B.createNodeIterator, Re = B.createDocumentFragment, He = B.getElementsByTagName, Se = r.importNode, pe = {};
  try {
    pe = Qr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var we = {};
  t.isSupported = typeof j == "function" && $ && $.createHTMLDocument !== void 0 && pe !== 9;
  var de = Vu, De = qu, dt = Gu, Fe = Yu, Be = Xu, Ge = Ku, ge = Ju, le = ed, U = Zu, z = null, C = Ie({}, [].concat(br(Bi), br(Za), br(Ka), br(Ja), br(Ui))), G = null, E = Ie({}, [].concat(br(Wi), br(Qa), br(Vi), br(Jn))), X = Object.seal(Object.create(null, {
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
  })), V = null, be = null, ve = !0, ie = !0, fe = !1, ye = !0, Ee = !1, _e = !0, xe = !1, me = !1, Ae = !1, Je = !1, re = !1, Q = !1, oe = !0, K = !1, ee = "user-content-", Oe = !0, Qe = !1, mt = {}, ct = null, jt = Ie({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), wr = null, jr = Ie({}, ["audio", "video", "img", "source", "image", "track"]), sr = null, lr = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), $t = "http://www.w3.org/1998/Math/MathML", zt = "http://www.w3.org/2000/svg", Rt = "http://www.w3.org/1999/xhtml", Yt = Rt, _r = !1, yt = null, cr = Ie({}, [$t, zt, Rt], Ya), st, $e = ["application/xhtml+xml", "text/html"], Pt = "text/html", Ye, At = null, It = n.createElement("form"), ur = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Nt = function(_) {
    At && At === _ || ((!_ || Br(_) !== "object") && (_ = {}), _ = Qr(_), st = // eslint-disable-next-line unicorn/prefer-includes
    $e.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? st = Pt : st = _.PARSER_MEDIA_TYPE, Ye = st === "application/xhtml+xml" ? Ya : ca, z = "ALLOWED_TAGS" in _ ? Ie({}, _.ALLOWED_TAGS, Ye) : C, G = "ALLOWED_ATTR" in _ ? Ie({}, _.ALLOWED_ATTR, Ye) : E, yt = "ALLOWED_NAMESPACES" in _ ? Ie({}, _.ALLOWED_NAMESPACES, Ya) : cr, sr = "ADD_URI_SAFE_ATTR" in _ ? Ie(
      Qr(lr),
      // eslint-disable-line indent
      _.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ye
      // eslint-disable-line indent
    ) : lr, wr = "ADD_DATA_URI_TAGS" in _ ? Ie(
      Qr(jr),
      // eslint-disable-line indent
      _.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ye
      // eslint-disable-line indent
    ) : jr, ct = "FORBID_CONTENTS" in _ ? Ie({}, _.FORBID_CONTENTS, Ye) : jt, V = "FORBID_TAGS" in _ ? Ie({}, _.FORBID_TAGS, Ye) : {}, be = "FORBID_ATTR" in _ ? Ie({}, _.FORBID_ATTR, Ye) : {}, mt = "USE_PROFILES" in _ ? _.USE_PROFILES : !1, ve = _.ALLOW_ARIA_ATTR !== !1, ie = _.ALLOW_DATA_ATTR !== !1, fe = _.ALLOW_UNKNOWN_PROTOCOLS || !1, ye = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ee = _.SAFE_FOR_TEMPLATES || !1, _e = _.SAFE_FOR_XML !== !1, xe = _.WHOLE_DOCUMENT || !1, Je = _.RETURN_DOM || !1, re = _.RETURN_DOM_FRAGMENT || !1, Q = _.RETURN_TRUSTED_TYPE || !1, Ae = _.FORCE_BODY || !1, oe = _.SANITIZE_DOM !== !1, K = _.SANITIZE_NAMED_PROPS || !1, Oe = _.KEEP_CONTENT !== !1, Qe = _.IN_PLACE || !1, U = _.ALLOWED_URI_REGEXP || U, Yt = _.NAMESPACE || Rt, X = _.CUSTOM_ELEMENT_HANDLING || {}, _.CUSTOM_ELEMENT_HANDLING && ur(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (X.tagNameCheck = _.CUSTOM_ELEMENT_HANDLING.tagNameCheck), _.CUSTOM_ELEMENT_HANDLING && ur(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (X.attributeNameCheck = _.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (X.allowCustomizedBuiltInElements = _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ee && (ie = !1), re && (Je = !0), mt && (z = Ie({}, br(Ui)), G = [], mt.html === !0 && (Ie(z, Bi), Ie(G, Wi)), mt.svg === !0 && (Ie(z, Za), Ie(G, Qa), Ie(G, Jn)), mt.svgFilters === !0 && (Ie(z, Ka), Ie(G, Qa), Ie(G, Jn)), mt.mathMl === !0 && (Ie(z, Ja), Ie(G, Vi), Ie(G, Jn))), _.ADD_TAGS && (z === C && (z = Qr(z)), Ie(z, _.ADD_TAGS, Ye)), _.ADD_ATTR && (G === E && (G = Qr(G)), Ie(G, _.ADD_ATTR, Ye)), _.ADD_URI_SAFE_ATTR && Ie(sr, _.ADD_URI_SAFE_ATTR, Ye), _.FORBID_CONTENTS && (ct === jt && (ct = Qr(ct)), Ie(ct, _.FORBID_CONTENTS, Ye)), Oe && (z["#text"] = !0), xe && Ie(z, ["html", "head", "body"]), z.table && (Ie(z, ["tbody"]), delete V.tbody), Lt && Lt(_), At = _);
  }, kr = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]), wt = Ie({}, ["annotation-xml"]), Mt = Ie({}, ["title", "style", "font", "a", "script"]), et = Ie({}, Za);
  Ie(et, Ka), Ie(et, Uu);
  var Xt = Ie({}, Ja);
  Ie(Xt, Wu);
  var Sr = function(_) {
    var J = j(_);
    (!J || !J.tagName) && (J = {
      namespaceURI: Yt,
      tagName: "template"
    });
    var se = ca(_.tagName), Pe = ca(J.tagName);
    return yt[_.namespaceURI] ? _.namespaceURI === zt ? J.namespaceURI === Rt ? se === "svg" : J.namespaceURI === $t ? se === "svg" && (Pe === "annotation-xml" || kr[Pe]) : !!et[se] : _.namespaceURI === $t ? J.namespaceURI === Rt ? se === "math" : J.namespaceURI === zt ? se === "math" && wt[Pe] : !!Xt[se] : _.namespaceURI === Rt ? J.namespaceURI === zt && !wt[Pe] || J.namespaceURI === $t && !kr[Pe] ? !1 : !Xt[se] && (Mt[se] || !et[se]) : !!(st === "application/xhtml+xml" && yt[_.namespaceURI]) : !1;
  }, bt = function(_) {
    Tn(t.removed, {
      element: _
    });
    try {
      _.parentNode.removeChild(_);
    } catch {
      try {
        _.outerHTML = L;
      } catch {
        _.remove();
      }
    }
  }, xr = function(_, J) {
    try {
      Tn(t.removed, {
        attribute: J.getAttributeNode(_),
        from: J
      });
    } catch {
      Tn(t.removed, {
        attribute: null,
        from: J
      });
    }
    if (J.removeAttribute(_), _ === "is" && !G[_])
      if (Je || re)
        try {
          bt(J);
        } catch {
        }
      else
        try {
          J.setAttribute(_, "");
        } catch {
        }
  }, dr = function(_) {
    var J, se;
    if (Ae)
      _ = "<remove></remove>" + _;
    else {
      var Pe = Hi(_, /^[\r\n\t ]+/);
      se = Pe && Pe[0];
    }
    st === "application/xhtml+xml" && Yt === Rt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    var ze = q ? q.createHTML(_) : _;
    if (Yt === Rt)
      try {
        J = new x().parseFromString(ze, st);
      } catch {
      }
    if (!J || !J.documentElement) {
      J = $.createDocument(Yt, "template", null);
      try {
        J.documentElement.innerHTML = _r ? L : ze;
      } catch {
      }
    }
    var tt = J.body || J.documentElement;
    return _ && se && tt.insertBefore(n.createTextNode(se), tt.childNodes[0] || null), Yt === Rt ? He.call(J, xe ? "html" : "body")[0] : xe ? J.documentElement : tt;
  }, Ar = function(_) {
    return ue.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Zt = function(_) {
    return _ instanceof y && (typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || !(_.attributes instanceof b) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function");
  }, Ht = function(_) {
    return Br(l) === "object" ? _ instanceof l : _ && Br(_) === "object" && typeof _.nodeType == "number" && typeof _.nodeName == "string";
  }, xt = function(_, J, se) {
    we[_] && $u(we[_], function(Pe) {
      Pe.call(t, J, se, At);
    });
  }, Xe = function(_) {
    var J;
    if (xt("beforeSanitizeElements", _, null), Zt(_) || Ct(/[\u0080-\uFFFF]/, _.nodeName))
      return bt(_), !0;
    var se = Ye(_.nodeName);
    if (xt("uponSanitizeElement", _, {
      tagName: se,
      allowedTags: z
    }), _.hasChildNodes() && !Ht(_.firstElementChild) && (!Ht(_.content) || !Ht(_.content.firstElementChild)) && Ct(/<[/\w]/g, _.innerHTML) && Ct(/<[/\w]/g, _.textContent) || se === "select" && Ct(/<template/i, _.innerHTML) || _.nodeType === 7 || _e && _.nodeType === 8 && Ct(/<[/\w]/g, _.data))
      return bt(_), !0;
    if (!z[se] || V[se]) {
      if (!V[se] && nt(se) && (X.tagNameCheck instanceof RegExp && Ct(X.tagNameCheck, se) || X.tagNameCheck instanceof Function && X.tagNameCheck(se)))
        return !1;
      if (Oe && !ct[se]) {
        var Pe = j(_) || _.parentNode, ze = D(_) || _.childNodes;
        if (ze && Pe)
          for (var tt = ze.length, at = tt - 1; at >= 0; --at) {
            var gt = O(ze[at], !0);
            gt.__removalCount = (_.__removalCount || 0) + 1, Pe.insertBefore(gt, R(_));
          }
      }
      return bt(_), !0;
    }
    return _ instanceof f && !Sr(_) || (se === "noscript" || se === "noembed" || se === "noframes") && Ct(/<\/no(script|embed|frames)/i, _.innerHTML) ? (bt(_), !0) : (Ee && _.nodeType === 3 && (J = _.textContent, J = yr(J, de, " "), J = yr(J, De, " "), J = yr(J, dt, " "), _.textContent !== J && (Tn(t.removed, {
      element: _.cloneNode()
    }), _.textContent = J)), xt("afterSanitizeElements", _, null), !1);
  }, Or = function(_, J, se) {
    if (oe && (J === "id" || J === "name") && (se in n || se in It))
      return !1;
    if (!(ie && !be[J] && Ct(Fe, J))) {
      if (!(ve && Ct(Be, J))) {
        if (!G[J] || be[J]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(nt(_) && (X.tagNameCheck instanceof RegExp && Ct(X.tagNameCheck, _) || X.tagNameCheck instanceof Function && X.tagNameCheck(_)) && (X.attributeNameCheck instanceof RegExp && Ct(X.attributeNameCheck, J) || X.attributeNameCheck instanceof Function && X.attributeNameCheck(J)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            J === "is" && X.allowCustomizedBuiltInElements && (X.tagNameCheck instanceof RegExp && Ct(X.tagNameCheck, se) || X.tagNameCheck instanceof Function && X.tagNameCheck(se)))
          ) return !1;
        } else if (!sr[J]) {
          if (!Ct(U, yr(se, ge, ""))) {
            if (!((J === "src" || J === "xlink:href" || J === "href") && _ !== "script" && zu(se, "data:") === 0 && wr[_])) {
              if (!(fe && !Ct(Ge, yr(se, ge, "")))) {
                if (se)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, nt = function(_) {
    return _ !== "annotation-xml" && Hi(_, le);
  }, Kt = function(_) {
    var J, se, Pe, ze;
    xt("beforeSanitizeAttributes", _, null);
    var tt = _.attributes;
    if (tt) {
      var at = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: G
      };
      for (ze = tt.length; ze--; ) {
        J = tt[ze];
        var gt = J, rt = gt.name, Ot = gt.namespaceURI;
        if (se = rt === "value" ? J.value : Hu(J.value), Pe = Ye(rt), at.attrName = Pe, at.attrValue = se, at.keepAttr = !0, at.forceKeepAttr = void 0, xt("uponSanitizeAttribute", _, at), se = at.attrValue, !at.forceKeepAttr && (xr(rt, _), !!at.keepAttr)) {
          if (!ye && Ct(/\/>/i, se)) {
            xr(rt, _);
            continue;
          }
          Ee && (se = yr(se, de, " "), se = yr(se, De, " "), se = yr(se, dt, " "));
          var St = Ye(_.nodeName);
          if (Or(St, Pe, se)) {
            if (K && (Pe === "id" || Pe === "name") && (xr(rt, _), se = ee + se), _e && Ct(/((--!?|])>)|<\/(style|title)/i, se)) {
              xr(rt, _);
              continue;
            }
            if (q && Br(I) === "object" && typeof I.getAttributeType == "function" && !Ot)
              switch (I.getAttributeType(St, Pe)) {
                case "TrustedHTML": {
                  se = q.createHTML(se);
                  break;
                }
                case "TrustedScriptURL": {
                  se = q.createScriptURL(se);
                  break;
                }
              }
            try {
              Ot ? _.setAttributeNS(Ot, rt, se) : _.setAttribute(rt, se), Zt(_) ? bt(_) : zi(t.removed);
            } catch {
            }
          }
        }
      }
      xt("afterSanitizeAttributes", _, null);
    }
  }, Ue = function he(_) {
    var J, se = Ar(_);
    for (xt("beforeSanitizeShadowDOM", _, null); J = se.nextNode(); )
      xt("uponSanitizeShadowNode", J, null), !Xe(J) && (J.content instanceof a && he(J.content), Kt(J));
    xt("afterSanitizeShadowDOM", _, null);
  };
  return t.sanitize = function(he) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, J, se, Pe, ze, tt;
    if (_r = !he, _r && (he = "<!-->"), typeof he != "string" && !Ht(he))
      if (typeof he.toString == "function") {
        if (he = he.toString(), typeof he != "string")
          throw Xa("dirty is not a string, aborting");
      } else
        throw Xa("toString is not a function");
    if (!t.isSupported) {
      if (Br(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof he == "string")
          return e.toStaticHTML(he);
        if (Ht(he))
          return e.toStaticHTML(he.outerHTML);
      }
      return he;
    }
    if (me || Nt(_), t.removed = [], typeof he == "string" && (Qe = !1), Qe) {
      if (he.nodeName) {
        var at = Ye(he.nodeName);
        if (!z[at] || V[at])
          throw Xa("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (he instanceof l)
      J = dr("<!---->"), se = J.ownerDocument.importNode(he, !0), se.nodeType === 1 && se.nodeName === "BODY" || se.nodeName === "HTML" ? J = se : J.appendChild(se);
    else {
      if (!Je && !Ee && !xe && // eslint-disable-next-line unicorn/prefer-includes
      he.indexOf("<") === -1)
        return q && Q ? q.createHTML(he) : he;
      if (J = dr(he), !J)
        return Je ? null : Q ? L : "";
    }
    J && Ae && bt(J.firstChild);
    for (var gt = Ar(Qe ? he : J); Pe = gt.nextNode(); )
      Pe.nodeType === 3 && Pe === ze || Xe(Pe) || (Pe.content instanceof a && Ue(Pe.content), Kt(Pe), ze = Pe);
    if (ze = null, Qe)
      return he;
    if (Je) {
      if (re)
        for (tt = Re.call(J.ownerDocument); J.firstChild; )
          tt.appendChild(J.firstChild);
      else
        tt = J;
      return (G.shadowroot || G.shadowrootmod) && (tt = Se.call(r, tt, !0)), tt;
    }
    var rt = xe ? J.outerHTML : J.innerHTML;
    return xe && z["!doctype"] && J.ownerDocument && J.ownerDocument.doctype && J.ownerDocument.doctype.name && Ct(Qu, J.ownerDocument.doctype.name) && (rt = "<!DOCTYPE " + J.ownerDocument.doctype.name + `>
` + rt), Ee && (rt = yr(rt, de, " "), rt = yr(rt, De, " "), rt = yr(rt, dt, " ")), q && Q ? q.createHTML(rt) : rt;
  }, t.setConfig = function(he) {
    Nt(he), me = !0;
  }, t.clearConfig = function() {
    At = null, me = !1;
  }, t.isValidAttribute = function(he, _, J) {
    At || Nt({});
    var se = Ye(he), Pe = Ye(_);
    return Or(se, Pe, J);
  }, t.addHook = function(he, _) {
    typeof _ == "function" && (we[he] = we[he] || [], Tn(we[he], _));
  }, t.removeHook = function(he) {
    if (we[he])
      return zi(we[he]);
  }, t.removeHooks = function(he) {
    we[he] && (we[he] = []);
  }, t.removeAllHooks = function() {
    we = {};
  }, t;
}
var nd = Ys();
const un = (e) => ({ __html: nd.sanitize(e) });
S.shape({
  event: S.string,
  action: S.string,
  name: S.string,
  region: S.string,
  section: S.string,
  component: S.string,
  type: S.string,
  text: S.string
});
const ad = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: s = "",
  region: l = "",
  component: f = ""
}) => {
  const { dataLayer: c } = window, p = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: a.toLowerCase(),
    text: s.toLowerCase(),
    component: f.toLowerCase()
  };
  c && c.push(p);
};
S.shape({
  url: S.string,
  altText: S.string,
  cssClass: S.arrayOf(S.string),
  size: S.oneOf(["small", "medium", "large"])
});
S.shape({
  text: S.string,
  maxWidth: S.string,
  cssClass: S.arrayOf(S.string),
  highlightColor: S.oneOf(["gold", "black"])
});
S.shape({
  color: S.oneOf(["gold", "maroon", "gray", "dark"]),
  content: S.shape({
    icon: S.string,
    header: S.string,
    body: S.string
  })
});
const Xs = S.shape({
  text: S.string,
  name: S.string,
  event: S.string,
  action: S.string,
  type: S.string,
  region: S.string,
  section: S.string,
  component: S.string
});
var en = {};
var qi;
function od() {
  if (qi) return en;
  qi = 1;
  var e = ar;
  function t(o) {
    for (var d = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, g = 1; g < arguments.length; g++) d += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + o + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, s = {};
  function l(o) {
    return r.call(s, o) ? !0 : r.call(a, o) ? !1 : n.test(o) ? s[o] = !0 : (a[o] = !0, !1);
  }
  function f(o, d, g, k, M, N, H) {
    this.acceptsBooleans = d === 2 || d === 3 || d === 4, this.attributeName = k, this.attributeNamespace = M, this.mustUseProperty = g, this.propertyName = o, this.type = d, this.sanitizeURL = N, this.removeEmptyString = H;
  }
  var c = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    c[o] = new f(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var d = o[0];
    c[d] = new f(d, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    c[o] = new f(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    c[o] = new f(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    c[o] = new f(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    c[o] = new f(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    c[o] = new f(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    c[o] = new f(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    c[o] = new f(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var p = /[\-:]([a-z])/g;
  function b(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var d = o.replace(
      p,
      b
    );
    c[d] = new f(d, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var d = o.replace(p, b);
    c[d] = new f(d, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var d = o.replace(p, b);
    c[d] = new f(d, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    c[o] = new f(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), c.xlinkHref = new f("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    c[o] = new f(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var y = {
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
  }, x = ["Webkit", "ms", "Moz", "O"];
  Object.keys(y).forEach(function(o) {
    x.forEach(function(d) {
      d = d + o.charAt(0).toUpperCase() + o.substring(1), y[d] = y[o];
    });
  });
  var I = /["'&<>]/;
  function A(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var d = I.exec(o);
    if (d) {
      var g = "", k, M = 0;
      for (k = d.index; k < o.length; k++) {
        switch (o.charCodeAt(k)) {
          case 34:
            d = "&quot;";
            break;
          case 38:
            d = "&amp;";
            break;
          case 39:
            d = "&#x27;";
            break;
          case 60:
            d = "&lt;";
            break;
          case 62:
            d = "&gt;";
            break;
          default:
            continue;
        }
        M !== k && (g += o.substring(M, k)), M = k + 1, g += d;
      }
      o = M !== k ? g + o.substring(M, k) : g;
    }
    return o;
  }
  var O = /([A-Z])/g, R = /^ms-/, D = Array.isArray;
  function j(o, d) {
    return { insertionMode: o, selectedValue: d };
  }
  function Z(o, d, g) {
    switch (d) {
      case "select":
        return j(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return j(2, null);
      case "math":
        return j(3, null);
      case "foreignObject":
        return j(1, null);
      case "table":
        return j(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return j(5, null);
      case "colgroup":
        return j(7, null);
      case "tr":
        return j(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? j(1, null) : o;
  }
  var q = /* @__PURE__ */ new Map();
  function L(o, d, g) {
    if (typeof g != "object") throw Error(t(62));
    d = !0;
    for (var k in g) if (r.call(g, k)) {
      var M = g[k];
      if (M != null && typeof M != "boolean" && M !== "") {
        if (k.indexOf("--") === 0) {
          var N = A(k);
          M = A(("" + M).trim());
        } else {
          N = k;
          var H = q.get(N);
          H !== void 0 || (H = A(N.replace(O, "-$1").toLowerCase().replace(R, "-ms-")), q.set(N, H)), N = H, M = typeof M == "number" ? M === 0 || r.call(y, k) ? "" + M : M + "px" : A(("" + M).trim());
        }
        d ? (d = !1, o.push(' style="', N, ":", M)) : o.push(";", N, ":", M);
      }
    }
    d || o.push('"');
  }
  function B(o, d, g, k) {
    switch (g) {
      case "style":
        L(o, d, k);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (d = c.hasOwnProperty(g) ? c[g] : null, d !== null) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!d.acceptsBooleans) return;
        }
        switch (g = d.attributeName, d.type) {
          case 3:
            k && o.push(" ", g, '=""');
            break;
          case 4:
            k === !0 ? o.push(" ", g, '=""') : k !== !1 && o.push(" ", g, '="', A(k), '"');
            break;
          case 5:
            isNaN(k) || o.push(" ", g, '="', A(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && o.push(" ", g, '="', A(k), '"');
            break;
          default:
            d.sanitizeURL && (k = "" + k), o.push(" ", g, '="', A(k), '"');
        }
      } else if (l(g)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (d = g.toLowerCase().slice(0, 5), d !== "data-" && d !== "aria-") return;
        }
        o.push(" ", g, '="', A(k), '"');
      }
    }
  }
  function $(o, d, g) {
    if (d != null) {
      if (g != null) throw Error(t(60));
      if (typeof d != "object" || !("__html" in d)) throw Error(t(61));
      d = d.__html, d != null && o.push("" + d);
    }
  }
  function ue(o) {
    var d = "";
    return e.Children.forEach(o, function(g) {
      g != null && (d += g);
    }), d;
  }
  function Re(o, d, g, k) {
    o.push(pe(g));
    var M = g = null, N;
    for (N in d) if (r.call(d, N)) {
      var H = d[N];
      if (H != null) switch (N) {
        case "children":
          g = H;
          break;
        case "dangerouslySetInnerHTML":
          M = H;
          break;
        default:
          B(o, k, N, H);
      }
    }
    return o.push(">"), $(o, M, g), typeof g == "string" ? (o.push(A(g)), null) : g;
  }
  var He = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Se = /* @__PURE__ */ new Map();
  function pe(o) {
    var d = Se.get(o);
    if (d === void 0) {
      if (!He.test(o)) throw Error(t(65, o));
      d = "<" + o, Se.set(o, d);
    }
    return d;
  }
  function we(o, d, g, k, M) {
    switch (d) {
      case "select":
        o.push(pe("select"));
        var N = null, H = null;
        for (Ne in g) if (r.call(g, Ne)) {
          var ne = g[Ne];
          if (ne != null) switch (Ne) {
            case "children":
              N = ne;
              break;
            case "dangerouslySetInnerHTML":
              H = ne;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              B(o, k, Ne, ne);
          }
        }
        return o.push(">"), $(o, H, N), N;
      case "option":
        H = M.selectedValue, o.push(pe("option"));
        var ke = ne = null, Te = null, Ne = null;
        for (N in g) if (r.call(g, N)) {
          var We = g[N];
          if (We != null) switch (N) {
            case "children":
              ne = We;
              break;
            case "selected":
              Te = We;
              break;
            case "dangerouslySetInnerHTML":
              Ne = We;
              break;
            case "value":
              ke = We;
            default:
              B(o, k, N, We);
          }
        }
        if (H != null) if (g = ke !== null ? "" + ke : ue(ne), D(H)) {
          for (k = 0; k < H.length; k++)
            if ("" + H[k] === g) {
              o.push(' selected=""');
              break;
            }
        } else "" + H === g && o.push(' selected=""');
        else Te && o.push(' selected=""');
        return o.push(">"), $(o, Ne, ne), ne;
      case "textarea":
        o.push(pe("textarea")), Ne = H = N = null;
        for (ne in g) if (r.call(g, ne) && (ke = g[ne], ke != null)) switch (ne) {
          case "children":
            Ne = ke;
            break;
          case "value":
            N = ke;
            break;
          case "defaultValue":
            H = ke;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            B(
              o,
              k,
              ne,
              ke
            );
        }
        if (N === null && H !== null && (N = H), o.push(">"), Ne != null) {
          if (N != null) throw Error(t(92));
          if (D(Ne) && 1 < Ne.length) throw Error(t(93));
          N = "" + Ne;
        }
        return typeof N == "string" && N[0] === `
` && o.push(`
`), N !== null && o.push(A("" + N)), null;
      case "input":
        o.push(pe("input")), ke = Ne = ne = N = null;
        for (H in g) if (r.call(g, H) && (Te = g[H], Te != null)) switch (H) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ke = Te;
            break;
          case "defaultValue":
            ne = Te;
            break;
          case "checked":
            Ne = Te;
            break;
          case "value":
            N = Te;
            break;
          default:
            B(o, k, H, Te);
        }
        return Ne !== null ? B(o, k, "checked", Ne) : ke !== null && B(o, k, "checked", ke), N !== null ? B(o, k, "value", N) : ne !== null && B(o, k, "value", ne), o.push("/>"), null;
      case "menuitem":
        o.push(pe("menuitem"));
        for (var Ut in g) if (r.call(g, Ut) && (N = g[Ut], N != null)) switch (Ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            B(o, k, Ut, N);
        }
        return o.push(">"), null;
      case "title":
        o.push(pe("title")), N = null;
        for (We in g) if (r.call(g, We) && (H = g[We], H != null)) switch (We) {
          case "children":
            N = H;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            B(o, k, We, H);
        }
        return o.push(">"), N;
      case "listing":
      case "pre":
        o.push(pe(d)), H = N = null;
        for (ke in g) if (r.call(g, ke) && (ne = g[ke], ne != null)) switch (ke) {
          case "children":
            N = ne;
            break;
          case "dangerouslySetInnerHTML":
            H = ne;
            break;
          default:
            B(o, k, ke, ne);
        }
        if (o.push(">"), H != null) {
          if (N != null) throw Error(t(60));
          if (typeof H != "object" || !("__html" in H)) throw Error(t(61));
          g = H.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? o.push(`
`, g) : o.push("" + g));
        }
        return typeof N == "string" && N[0] === `
` && o.push(`
`), N;
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
        o.push(pe(d));
        for (var Dt in g) if (r.call(g, Dt) && (N = g[Dt], N != null)) switch (Dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, d));
          default:
            B(o, k, Dt, N);
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
        return Re(
          o,
          g,
          d,
          k
        );
      case "html":
        return M.insertionMode === 0 && o.push("<!DOCTYPE html>"), Re(o, g, d, k);
      default:
        if (d.indexOf("-") === -1 && typeof g.is != "string") return Re(o, g, d, k);
        o.push(pe(d)), H = N = null;
        for (Te in g) if (r.call(g, Te) && (ne = g[Te], ne != null)) switch (Te) {
          case "children":
            N = ne;
            break;
          case "dangerouslySetInnerHTML":
            H = ne;
            break;
          case "style":
            L(o, k, ne);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            l(Te) && typeof ne != "function" && typeof ne != "symbol" && o.push(" ", Te, '="', A(ne), '"');
        }
        return o.push(">"), $(o, H, N), N;
    }
  }
  function de(o, d, g) {
    if (o.push('<!--$?--><template id="'), g === null) throw Error(t(395));
    return o.push(g), o.push('"></template>');
  }
  function De(o, d, g, k) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(d.segmentPrefix), d = k.toString(16), o.push(d), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(d.segmentPrefix), d = k.toString(16), o.push(d), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(d.segmentPrefix), d = k.toString(16), o.push(d), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(d.segmentPrefix), d = k.toString(16), o.push(d), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(d.segmentPrefix), d = k.toString(16), o.push(d), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(d.segmentPrefix), d = k.toString(16), o.push(d), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(d.segmentPrefix), d = k.toString(16), o.push(d), o.push('">');
      default:
        throw Error(t(397));
    }
  }
  function dt(o, d) {
    switch (d.insertionMode) {
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
  var Fe = /[<\u2028\u2029]/g;
  function Be(o) {
    return JSON.stringify(o).replace(Fe, function(d) {
      switch (d) {
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
  function Ge(o, d) {
    return d = d === void 0 ? "" : d, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: d + "P:", segmentPrefix: d + "S:", boundaryPrefix: d + "B:", idPrefix: d, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function ge(o, d, g, k) {
    return g.generateStaticMarkup ? (o.push(A(d)), !1) : (d === "" ? o = k : (k && o.push("<!-- -->"), o.push(A(d)), o = !0), o);
  }
  var le = Object.assign, U = Symbol.for("react.element"), z = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), V = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), Ee = Symbol.for("react.scope"), _e = Symbol.for("react.debug_trace_mode"), xe = Symbol.for("react.legacy_hidden"), me = Symbol.for("react.default_value"), Ae = Symbol.iterator;
  function Je(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case C:
        return "Fragment";
      case z:
        return "Portal";
      case E:
        return "Profiler";
      case G:
        return "StrictMode";
      case ve:
        return "Suspense";
      case ie:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case V:
        return (o.displayName || "Context") + ".Consumer";
      case X:
        return (o._context.displayName || "Context") + ".Provider";
      case be:
        var d = o.render;
        return o = o.displayName, o || (o = d.displayName || d.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case fe:
        return d = o.displayName || null, d !== null ? d : Je(o.type) || "Memo";
      case ye:
        d = o._payload, o = o._init;
        try {
          return Je(o(d));
        } catch {
        }
    }
    return null;
  }
  var re = {};
  function Q(o, d) {
    if (o = o.contextTypes, !o) return re;
    var g = {}, k;
    for (k in o) g[k] = d[k];
    return g;
  }
  var oe = null;
  function K(o, d) {
    if (o !== d) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var g = d.parent;
      if (o === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        K(o, g);
      }
      d.context._currentValue2 = d.value;
    }
  }
  function ee(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && ee(o);
  }
  function Oe(o) {
    var d = o.parent;
    d !== null && Oe(d), o.context._currentValue2 = o.value;
  }
  function Qe(o, d) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === d.depth ? K(o, d) : Qe(o, d);
  }
  function mt(o, d) {
    var g = d.parent;
    if (g === null) throw Error(t(402));
    o.depth === g.depth ? K(o, g) : mt(o, g), d.context._currentValue2 = d.value;
  }
  function ct(o) {
    var d = oe;
    d !== o && (d === null ? Oe(o) : o === null ? ee(d) : d.depth === o.depth ? K(d, o) : d.depth > o.depth ? Qe(d, o) : mt(d, o), oe = o);
  }
  var jt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, d) {
    o = o._reactInternals, o.queue !== null && o.queue.push(d);
  }, enqueueReplaceState: function(o, d) {
    o = o._reactInternals, o.replace = !0, o.queue = [d];
  }, enqueueForceUpdate: function() {
  } };
  function wr(o, d, g, k) {
    var M = o.state !== void 0 ? o.state : null;
    o.updater = jt, o.props = g, o.state = M;
    var N = { queue: [], replace: !1 };
    o._reactInternals = N;
    var H = d.contextType;
    if (o.context = typeof H == "object" && H !== null ? H._currentValue2 : k, H = d.getDerivedStateFromProps, typeof H == "function" && (H = H(g, M), M = H == null ? M : le({}, M, H), o.state = M), typeof d.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (d = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), d !== o.state && jt.enqueueReplaceState(o, o.state, null), N.queue !== null && 0 < N.queue.length) if (d = N.queue, H = N.replace, N.queue = null, N.replace = !1, H && d.length === 1) o.state = d[0];
    else {
      for (N = H ? d[0] : o.state, M = !0, H = H ? 1 : 0; H < d.length; H++) {
        var ne = d[H];
        ne = typeof ne == "function" ? ne.call(o, N, g, k) : ne, ne != null && (M ? (M = !1, N = le({}, N, ne)) : le(N, ne));
      }
      o.state = N;
    }
    else N.queue = null;
  }
  var jr = { id: 1, overflow: "" };
  function sr(o, d, g) {
    var k = o.id;
    o = o.overflow;
    var M = 32 - lr(k) - 1;
    k &= ~(1 << M), g += 1;
    var N = 32 - lr(d) + M;
    if (30 < N) {
      var H = M - M % 5;
      return N = (k & (1 << H) - 1).toString(32), k >>= H, M -= H, { id: 1 << 32 - lr(d) + M | g << M | k, overflow: N + o };
    }
    return { id: 1 << N | g << M | k, overflow: o };
  }
  var lr = Math.clz32 ? Math.clz32 : Rt, $t = Math.log, zt = Math.LN2;
  function Rt(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - ($t(o) / zt | 0) | 0;
  }
  function Yt(o, d) {
    return o === d && (o !== 0 || 1 / o === 1 / d) || o !== o && d !== d;
  }
  var _r = typeof Object.is == "function" ? Object.is : Yt, yt = null, cr = null, st = null, $e = null, Pt = !1, Ye = !1, At = 0, It = null, ur = 0;
  function Nt() {
    if (yt === null) throw Error(t(321));
    return yt;
  }
  function kr() {
    if (0 < ur) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function wt() {
    return $e === null ? st === null ? (Pt = !1, st = $e = kr()) : (Pt = !0, $e = st) : $e.next === null ? (Pt = !1, $e = $e.next = kr()) : (Pt = !0, $e = $e.next), $e;
  }
  function Mt() {
    cr = yt = null, Ye = !1, st = null, ur = 0, $e = It = null;
  }
  function et(o, d) {
    return typeof d == "function" ? d(o) : d;
  }
  function Xt(o, d, g) {
    if (yt = Nt(), $e = wt(), Pt) {
      var k = $e.queue;
      if (d = k.dispatch, It !== null && (g = It.get(k), g !== void 0)) {
        It.delete(k), k = $e.memoizedState;
        do
          k = o(k, g.action), g = g.next;
        while (g !== null);
        return $e.memoizedState = k, [k, d];
      }
      return [$e.memoizedState, d];
    }
    return o = o === et ? typeof d == "function" ? d() : d : g !== void 0 ? g(d) : d, $e.memoizedState = o, o = $e.queue = { last: null, dispatch: null }, o = o.dispatch = bt.bind(null, yt, o), [$e.memoizedState, o];
  }
  function Sr(o, d) {
    if (yt = Nt(), $e = wt(), d = d === void 0 ? null : d, $e !== null) {
      var g = $e.memoizedState;
      if (g !== null && d !== null) {
        var k = g[1];
        e: if (k === null) k = !1;
        else {
          for (var M = 0; M < k.length && M < d.length; M++) if (!_r(d[M], k[M])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return g[0];
      }
    }
    return o = o(), $e.memoizedState = [o, d], o;
  }
  function bt(o, d, g) {
    if (25 <= ur) throw Error(t(301));
    if (o === yt) if (Ye = !0, o = { action: g, next: null }, It === null && (It = /* @__PURE__ */ new Map()), g = It.get(d), g === void 0) It.set(d, o);
    else {
      for (d = g; d.next !== null; ) d = d.next;
      d.next = o;
    }
  }
  function xr() {
    throw Error(t(394));
  }
  function dr() {
  }
  var Ar = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return Nt(), o._currentValue2;
  }, useMemo: Sr, useReducer: Xt, useRef: function(o) {
    yt = Nt(), $e = wt();
    var d = $e.memoizedState;
    return d === null ? (o = { current: o }, $e.memoizedState = o) : d;
  }, useState: function(o) {
    return Xt(et, o);
  }, useInsertionEffect: dr, useLayoutEffect: function() {
  }, useCallback: function(o, d) {
    return Sr(function() {
      return o;
    }, d);
  }, useImperativeHandle: dr, useEffect: dr, useDebugValue: dr, useDeferredValue: function(o) {
    return Nt(), o;
  }, useTransition: function() {
    return Nt(), [
      !1,
      xr
    ];
  }, useId: function() {
    var o = cr.treeContext, d = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - lr(o) - 1)).toString(32) + d;
    var g = Zt;
    if (g === null) throw Error(t(404));
    return d = At++, o = ":" + g.idPrefix + "R" + o, 0 < d && (o += "H" + d.toString(32)), o + ":";
  }, useMutableSource: function(o, d) {
    return Nt(), d(o._source);
  }, useSyncExternalStore: function(o, d, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Zt = null, Ht = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function xt(o) {
    return console.error(o), null;
  }
  function Xe() {
  }
  function Or(o, d, g, k, M, N, H, ne, ke) {
    var Te = [], Ne = /* @__PURE__ */ new Set();
    return d = { destination: null, responseState: d, progressiveChunkSize: k === void 0 ? 12800 : k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ne, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: M === void 0 ? xt : M, onAllReady: Xe, onShellReady: H === void 0 ? Xe : H, onShellError: Xe, onFatalError: Xe }, g = Kt(d, 0, null, g, !1, !1), g.parentFlushed = !0, o = nt(d, o, null, g, Ne, re, null, jr), Te.push(o), d;
  }
  function nt(o, d, g, k, M, N, H, ne) {
    o.allPendingTasks++, g === null ? o.pendingRootTasks++ : g.pendingTasks++;
    var ke = { node: d, ping: function() {
      var Te = o.pingedTasks;
      Te.push(ke), Te.length === 1 && Er(o);
    }, blockedBoundary: g, blockedSegment: k, abortSet: M, legacyContext: N, context: H, treeContext: ne };
    return M.add(ke), ke;
  }
  function Kt(o, d, g, k, M, N) {
    return { status: 0, id: -1, index: d, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: g, lastPushedText: M, textEmbedded: N };
  }
  function Ue(o, d) {
    if (o = o.onError(d), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function he(o, d) {
    var g = o.onShellError;
    g(d), g = o.onFatalError, g(d), o.destination !== null ? (o.status = 2, o.destination.destroy(d)) : (o.status = 1, o.fatalError = d);
  }
  function _(o, d, g, k, M) {
    for (yt = {}, cr = d, At = 0, o = g(k, M); Ye; ) Ye = !1, At = 0, ur += 1, $e = null, o = g(k, M);
    return Mt(), o;
  }
  function J(o, d, g, k) {
    var M = g.render(), N = k.childContextTypes;
    if (N != null) {
      var H = d.legacyContext;
      if (typeof g.getChildContext != "function") k = H;
      else {
        g = g.getChildContext();
        for (var ne in g) if (!(ne in N)) throw Error(t(108, Je(k) || "Unknown", ne));
        k = le({}, H, g);
      }
      d.legacyContext = k, ze(o, d, M), d.legacyContext = H;
    } else ze(o, d, M);
  }
  function se(o, d) {
    if (o && o.defaultProps) {
      d = le({}, d), o = o.defaultProps;
      for (var g in o) d[g] === void 0 && (d[g] = o[g]);
      return d;
    }
    return d;
  }
  function Pe(o, d, g, k, M) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      M = Q(g, d.legacyContext);
      var N = g.contextType;
      N = new g(k, typeof N == "object" && N !== null ? N._currentValue2 : M), wr(N, g, k, M), J(o, d, N, g);
    } else {
      N = Q(g, d.legacyContext), M = _(o, d, g, k, N);
      var H = At !== 0;
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) wr(M, g, k, N), J(o, d, M, g);
      else if (H) {
        k = d.treeContext, d.treeContext = sr(k, 1, 0);
        try {
          ze(o, d, M);
        } finally {
          d.treeContext = k;
        }
      } else ze(o, d, M);
    }
    else if (typeof g == "string") {
      switch (M = d.blockedSegment, N = we(M.chunks, g, k, o.responseState, M.formatContext), M.lastPushedText = !1, H = M.formatContext, M.formatContext = Z(H, g, k), at(o, d, N), M.formatContext = H, g) {
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
          M.chunks.push("</", g, ">");
      }
      M.lastPushedText = !1;
    } else {
      switch (g) {
        case xe:
        case _e:
        case G:
        case E:
        case C:
          ze(o, d, k.children);
          return;
        case ie:
          ze(o, d, k.children);
          return;
        case Ee:
          throw Error(t(343));
        case ve:
          e: {
            g = d.blockedBoundary, M = d.blockedSegment, N = k.fallback, k = k.children, H = /* @__PURE__ */ new Set();
            var ne = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: H, errorDigest: null }, ke = Kt(o, M.chunks.length, ne, M.formatContext, !1, !1);
            M.children.push(ke), M.lastPushedText = !1;
            var Te = Kt(o, 0, null, M.formatContext, !1, !1);
            Te.parentFlushed = !0, d.blockedBoundary = ne, d.blockedSegment = Te;
            try {
              if (at(
                o,
                d,
                k
              ), o.responseState.generateStaticMarkup || Te.lastPushedText && Te.textEmbedded && Te.chunks.push("<!-- -->"), Te.status = 1, Ot(ne, Te), ne.pendingTasks === 0) break e;
            } catch (Ne) {
              Te.status = 4, ne.forceClientRender = !0, ne.errorDigest = Ue(o, Ne);
            } finally {
              d.blockedBoundary = g, d.blockedSegment = M;
            }
            d = nt(o, N, g, ke, H, d.legacyContext, d.context, d.treeContext), o.pingedTasks.push(d);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case be:
          if (k = _(o, d, g.render, k, M), At !== 0) {
            g = d.treeContext, d.treeContext = sr(g, 1, 0);
            try {
              ze(o, d, k);
            } finally {
              d.treeContext = g;
            }
          } else ze(o, d, k);
          return;
        case fe:
          g = g.type, k = se(g, k), Pe(o, d, g, k, M);
          return;
        case X:
          if (M = k.children, g = g._context, k = k.value, N = g._currentValue2, g._currentValue2 = k, H = oe, oe = k = { parent: H, depth: H === null ? 0 : H.depth + 1, context: g, parentValue: N, value: k }, d.context = k, ze(o, d, M), o = oe, o === null) throw Error(t(403));
          k = o.parentValue, o.context._currentValue2 = k === me ? o.context._defaultValue : k, o = oe = o.parent, d.context = o;
          return;
        case V:
          k = k.children, k = k(g._currentValue2), ze(o, d, k);
          return;
        case ye:
          M = g._init, g = M(g._payload), k = se(g, k), Pe(
            o,
            d,
            g,
            k,
            void 0
          );
          return;
      }
      throw Error(t(130, g == null ? g : typeof g, ""));
    }
  }
  function ze(o, d, g) {
    if (d.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case U:
          Pe(o, d, g.type, g.props, g.ref);
          return;
        case z:
          throw Error(t(257));
        case ye:
          var k = g._init;
          g = k(g._payload), ze(o, d, g);
          return;
      }
      if (D(g)) {
        tt(o, d, g);
        return;
      }
      if (g === null || typeof g != "object" ? k = null : (k = Ae && g[Ae] || g["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(g))) {
        if (g = k.next(), !g.done) {
          var M = [];
          do
            M.push(g.value), g = k.next();
          while (!g.done);
          tt(o, d, M);
        }
        return;
      }
      throw o = Object.prototype.toString.call(g), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : o));
    }
    typeof g == "string" ? (k = d.blockedSegment, k.lastPushedText = ge(d.blockedSegment.chunks, g, o.responseState, k.lastPushedText)) : typeof g == "number" && (k = d.blockedSegment, k.lastPushedText = ge(d.blockedSegment.chunks, "" + g, o.responseState, k.lastPushedText));
  }
  function tt(o, d, g) {
    for (var k = g.length, M = 0; M < k; M++) {
      var N = d.treeContext;
      d.treeContext = sr(N, k, M);
      try {
        at(o, d, g[M]);
      } finally {
        d.treeContext = N;
      }
    }
  }
  function at(o, d, g) {
    var k = d.blockedSegment.formatContext, M = d.legacyContext, N = d.context;
    try {
      return ze(o, d, g);
    } catch (ke) {
      if (Mt(), typeof ke == "object" && ke !== null && typeof ke.then == "function") {
        g = ke;
        var H = d.blockedSegment, ne = Kt(o, H.chunks.length, null, H.formatContext, H.lastPushedText, !0);
        H.children.push(ne), H.lastPushedText = !1, o = nt(o, d.node, d.blockedBoundary, ne, d.abortSet, d.legacyContext, d.context, d.treeContext).ping, g.then(o, o), d.blockedSegment.formatContext = k, d.legacyContext = M, d.context = N, ct(N);
      } else throw d.blockedSegment.formatContext = k, d.legacyContext = M, d.context = N, ct(N), ke;
    }
  }
  function gt(o) {
    var d = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, St(this, d, o);
  }
  function rt(o, d, g) {
    var k = o.blockedBoundary;
    o.blockedSegment.status = 3, k === null ? (d.allPendingTasks--, d.status !== 2 && (d.status = 2, d.destination !== null && d.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, o = g === void 0 ? Error(t(432)) : g, k.errorDigest = d.onError(o), k.parentFlushed && d.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(M) {
      return rt(M, d, g);
    }), k.fallbackAbortableTasks.clear(), d.allPendingTasks--, d.allPendingTasks === 0 && (k = d.onAllReady, k()));
  }
  function Ot(o, d) {
    if (d.chunks.length === 0 && d.children.length === 1 && d.children[0].boundary === null) {
      var g = d.children[0];
      g.id = d.id, g.parentFlushed = !0, g.status === 1 && Ot(o, g);
    } else o.completedSegments.push(d);
  }
  function St(o, d, g) {
    if (d === null) {
      if (g.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = g;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = Xe, d = o.onShellReady, d());
    } else d.pendingTasks--, d.forceClientRender || (d.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Ot(d, g), d.parentFlushed && o.completedBoundaries.push(d), d.fallbackAbortableTasks.forEach(gt, o), d.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Ot(d, g), d.completedSegments.length === 1 && d.parentFlushed && o.partialBoundaries.push(d)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Er(o) {
    if (o.status !== 2) {
      var d = oe, g = Ht.current;
      Ht.current = Ar;
      var k = Zt;
      Zt = o.responseState;
      try {
        var M = o.pingedTasks, N;
        for (N = 0; N < M.length; N++) {
          var H = M[N], ne = o, ke = H.blockedSegment;
          if (ke.status === 0) {
            ct(H.context);
            try {
              ze(ne, H, H.node), ne.responseState.generateStaticMarkup || ke.lastPushedText && ke.textEmbedded && ke.chunks.push("<!-- -->"), H.abortSet.delete(H), ke.status = 1, St(ne, H.blockedBoundary, ke);
            } catch (Et) {
              if (Mt(), typeof Et == "object" && Et !== null && typeof Et.then == "function") {
                var Te = H.ping;
                Et.then(Te, Te);
              } else {
                H.abortSet.delete(H), ke.status = 4;
                var Ne = H.blockedBoundary, We = Et, Ut = Ue(ne, We);
                if (Ne === null ? he(ne, We) : (Ne.pendingTasks--, Ne.forceClientRender || (Ne.forceClientRender = !0, Ne.errorDigest = Ut, Ne.parentFlushed && ne.clientRenderedBoundaries.push(Ne))), ne.allPendingTasks--, ne.allPendingTasks === 0) {
                  var Dt = ne.onAllReady;
                  Dt();
                }
              }
            } finally {
            }
          }
        }
        M.splice(0, N), o.destination !== null && Bt(o, o.destination);
      } catch (Et) {
        Ue(o, Et), he(o, Et);
      } finally {
        Zt = k, Ht.current = g, g === Ar && ct(d);
      }
    }
  }
  function Jt(o, d, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var k = g.id = o.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, o = o.responseState, d.push('<template id="'), d.push(o.placeholderPrefix), o = k.toString(16), d.push(o), d.push('"></template>');
      case 1:
        g.status = 2;
        var M = !0;
        k = g.chunks;
        var N = 0;
        g = g.children;
        for (var H = 0; H < g.length; H++) {
          for (M = g[H]; N < M.index; N++) d.push(k[N]);
          M = Tr(o, d, M);
        }
        for (; N < k.length - 1; N++) d.push(k[N]);
        return N < k.length && (M = d.push(k[N])), M;
      default:
        throw Error(t(390));
    }
  }
  function Tr(o, d, g) {
    var k = g.boundary;
    if (k === null) return Jt(o, d, g);
    if (k.parentFlushed = !0, k.forceClientRender) return o.responseState.generateStaticMarkup || (k = k.errorDigest, d.push("<!--$!-->"), d.push("<template"), k && (d.push(' data-dgst="'), k = A(k), d.push(k), d.push('"')), d.push("></template>")), Jt(o, d, g), o = o.responseState.generateStaticMarkup ? !0 : d.push("<!--/$-->"), o;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = o.nextSegmentId++, 0 < k.completedSegments.length && o.partialBoundaries.push(k);
      var M = o.responseState, N = M.nextSuspenseID++;
      return M = M.boundaryPrefix + N.toString(16), k = k.id = M, de(d, o.responseState, k), Jt(o, d, g), d.push("<!--/$-->");
    }
    if (k.byteSize > o.progressiveChunkSize) return k.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(k), de(d, o.responseState, k.id), Jt(o, d, g), d.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || d.push("<!--$-->"), g = k.completedSegments, g.length !== 1) throw Error(t(391));
    return Tr(o, d, g[0]), o = o.responseState.generateStaticMarkup ? !0 : d.push("<!--/$-->"), o;
  }
  function $r(o, d, g) {
    return De(d, o.responseState, g.formatContext, g.id), Tr(o, d, g), dt(d, g.formatContext);
  }
  function Rr(o, d, g) {
    for (var k = g.completedSegments, M = 0; M < k.length; M++) fr(o, d, g, k[M]);
    if (k.length = 0, o = o.responseState, k = g.id, g = g.rootSegmentID, d.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? d.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, d.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return g = g.toString(16), d.push(k), d.push('","'), d.push(o.segmentPrefix), d.push(g), d.push('")<\/script>');
  }
  function fr(o, d, g, k) {
    if (k.status === 2) return !0;
    var M = k.id;
    if (M === -1) {
      if ((k.id = g.rootSegmentID) === -1) throw Error(t(392));
      return $r(o, d, k);
    }
    return $r(o, d, k), o = o.responseState, d.push(o.startInlineScript), o.sentCompleteSegmentFunction ? d.push('$RS("') : (o.sentCompleteSegmentFunction = !0, d.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), d.push(o.segmentPrefix), M = M.toString(16), d.push(M), d.push('","'), d.push(o.placeholderPrefix), d.push(M), d.push('")<\/script>');
  }
  function Bt(o, d) {
    try {
      var g = o.completedRootSegment;
      if (g !== null && o.pendingRootTasks === 0) {
        Tr(o, d, g), o.completedRootSegment = null;
        var k = o.responseState.bootstrapChunks;
        for (g = 0; g < k.length - 1; g++) d.push(k[g]);
        g < k.length && d.push(k[g]);
      }
      var M = o.clientRenderedBoundaries, N;
      for (N = 0; N < M.length; N++) {
        var H = M[N];
        k = d;
        var ne = o.responseState, ke = H.id, Te = H.errorDigest, Ne = H.errorMessage, We = H.errorComponentStack;
        if (k.push(ne.startInlineScript), ne.sentClientRenderFunction ? k.push('$RX("') : (ne.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ke === null) throw Error(t(395));
        if (k.push(ke), k.push('"'), Te || Ne || We) {
          k.push(",");
          var Ut = Be(Te || "");
          k.push(Ut);
        }
        if (Ne || We) {
          k.push(",");
          var Dt = Be(Ne || "");
          k.push(Dt);
        }
        if (We) {
          k.push(",");
          var Et = Be(We);
          k.push(Et);
        }
        if (!k.push(")<\/script>")) {
          o.destination = null, N++, M.splice(0, N);
          return;
        }
      }
      M.splice(0, N);
      var Cr = o.completedBoundaries;
      for (N = 0; N < Cr.length; N++) if (!Rr(o, d, Cr[N])) {
        o.destination = null, N++, Cr.splice(0, N);
        return;
      }
      Cr.splice(0, N);
      var Qt = o.partialBoundaries;
      for (N = 0; N < Qt.length; N++) {
        var Xr = Qt[N];
        e: {
          M = o, H = d;
          var er = Xr.completedSegments;
          for (ne = 0; ne < er.length; ne++) if (!fr(M, H, Xr, er[ne])) {
            ne++, er.splice(0, ne);
            var Hr = !1;
            break e;
          }
          er.splice(0, ne), Hr = !0;
        }
        if (!Hr) {
          o.destination = null, N++, Qt.splice(0, N);
          return;
        }
      }
      Qt.splice(0, N);
      var vt = o.completedBoundaries;
      for (N = 0; N < vt.length; N++) if (!Rr(o, d, vt[N])) {
        o.destination = null, N++, vt.splice(0, N);
        return;
      }
      vt.splice(0, N);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && d.push(null);
    }
  }
  function pr(o, d) {
    try {
      var g = o.abortableTasks;
      g.forEach(function(k) {
        return rt(k, o, d);
      }), g.clear(), o.destination !== null && Bt(o, o.destination);
    } catch (k) {
      Ue(o, k), he(o, k);
    }
  }
  function Yr() {
  }
  function zr(o, d, g, k) {
    var M = !1, N = null, H = "", ne = { push: function(Te) {
      return Te !== null && (H += Te), !0;
    }, destroy: function(Te) {
      M = !0, N = Te;
    } }, ke = !1;
    if (o = Or(o, Ge(g, d ? d.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Yr, void 0, function() {
      ke = !0;
    }), Er(o), pr(o, k), o.status === 1) o.status = 2, ne.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = ne;
      try {
        Bt(o, ne);
      } catch (Te) {
        Ue(o, Te), he(o, Te);
      }
    }
    if (M) throw N;
    if (!ke) throw Error(t(426));
    return H;
  }
  return en.renderToNodeStream = function() {
    throw Error(t(207));
  }, en.renderToStaticMarkup = function(o, d) {
    return zr(o, d, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, en.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, en.renderToString = function(o, d) {
    return zr(o, d, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, en.version = "18.3.1", en;
}
var Qn = {};
var Gi;
function id() {
  if (Gi) return Qn;
  Gi = 1;
  var e = ar;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, h = 1; h < arguments.length; h++) u += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(i, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), i.enqueue(u);
    else {
      var h = r.length - n;
      h < u.length && (h === 0 ? i.enqueue(r) : (r.set(u.subarray(0, h), n), i.enqueue(r), u = u.subarray(h)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function s(i, u) {
    return a(i, u), !0;
  }
  function l(i) {
    r && 0 < n && (i.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var f = new TextEncoder();
  function c(i) {
    return f.encode(i);
  }
  function p(i) {
    return f.encode(i);
  }
  function b(i, u) {
    typeof i.error == "function" ? i.error(u) : i.close();
  }
  var y = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, I = {}, A = {};
  function O(i) {
    return y.call(A, i) ? !0 : y.call(I, i) ? !1 : x.test(i) ? A[i] = !0 : (I[i] = !0, !1);
  }
  function R(i, u, h, w, F, P, W) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = w, this.attributeNamespace = F, this.mustUseProperty = h, this.propertyName = i, this.type = u, this.sanitizeURL = P, this.removeEmptyString = W;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    D[i] = new R(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    D[u] = new R(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    D[i] = new R(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    D[i] = new R(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    D[i] = new R(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    D[i] = new R(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    D[i] = new R(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    D[i] = new R(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    D[i] = new R(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function Z(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      j,
      Z
    );
    D[u] = new R(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(j, Z);
    D[u] = new R(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(j, Z);
    D[u] = new R(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    D[i] = new R(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    D[i] = new R(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var q = {
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
  }, L = ["Webkit", "ms", "Moz", "O"];
  Object.keys(q).forEach(function(i) {
    L.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), q[u] = q[i];
    });
  });
  var B = /["'&<>]/;
  function $(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = B.exec(i);
    if (u) {
      var h = "", w, F = 0;
      for (w = u.index; w < i.length; w++) {
        switch (i.charCodeAt(w)) {
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
        F !== w && (h += i.substring(F, w)), F = w + 1, h += u;
      }
      i = F !== w ? h + i.substring(F, w) : h;
    }
    return i;
  }
  var ue = /([A-Z])/g, Re = /^ms-/, He = Array.isArray, Se = p("<script>"), pe = p("<\/script>"), we = p('<script src="'), de = p('<script type="module" src="'), De = p('" async=""><\/script>'), dt = /(<\/|<)(s)(cript)/gi;
  function Fe(i, u, h, w) {
    return "" + u + (h === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function Be(i, u, h, w, F) {
    i = i === void 0 ? "" : i, u = u === void 0 ? Se : p('<script nonce="' + $(u) + '">');
    var P = [];
    if (h !== void 0 && P.push(u, c(("" + h).replace(dt, Fe)), pe), w !== void 0) for (h = 0; h < w.length; h++) P.push(we, c($(w[h])), De);
    if (F !== void 0) for (w = 0; w < F.length; w++) P.push(de, c($(F[w])), De);
    return { bootstrapChunks: P, startInlineScript: u, placeholderPrefix: p(i + "P:"), segmentPrefix: p(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ge(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function ge(i) {
    return Ge(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function le(i, u, h) {
    switch (u) {
      case "select":
        return Ge(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return Ge(2, null);
      case "math":
        return Ge(3, null);
      case "foreignObject":
        return Ge(1, null);
      case "table":
        return Ge(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ge(5, null);
      case "colgroup":
        return Ge(7, null);
      case "tr":
        return Ge(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Ge(1, null) : i;
  }
  var U = p("<!-- -->");
  function z(i, u, h, w) {
    return u === "" ? w : (w && i.push(U), i.push(c($(u))), !0);
  }
  var C = /* @__PURE__ */ new Map(), G = p(' style="'), E = p(":"), X = p(";");
  function V(i, u, h) {
    if (typeof h != "object") throw Error(t(62));
    u = !0;
    for (var w in h) if (y.call(h, w)) {
      var F = h[w];
      if (F != null && typeof F != "boolean" && F !== "") {
        if (w.indexOf("--") === 0) {
          var P = c($(w));
          F = c($(("" + F).trim()));
        } else {
          P = w;
          var W = C.get(P);
          W !== void 0 || (W = p($(P.replace(ue, "-$1").toLowerCase().replace(Re, "-ms-"))), C.set(P, W)), P = W, F = typeof F == "number" ? F === 0 || y.call(q, w) ? c("" + F) : c(F + "px") : c($(("" + F).trim()));
        }
        u ? (u = !1, i.push(G, P, E, F)) : i.push(X, P, E, F);
      }
    }
    u || i.push(ie);
  }
  var be = p(" "), ve = p('="'), ie = p('"'), fe = p('=""');
  function ye(i, u, h, w) {
    switch (h) {
      case "style":
        V(i, u, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (u = D.hasOwnProperty(h) ? D[h] : null, u !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (h = c(u.attributeName), u.type) {
          case 3:
            w && i.push(be, h, fe);
            break;
          case 4:
            w === !0 ? i.push(be, h, fe) : w !== !1 && i.push(be, h, ve, c($(w)), ie);
            break;
          case 5:
            isNaN(w) || i.push(be, h, ve, c($(w)), ie);
            break;
          case 6:
            !isNaN(w) && 1 <= w && i.push(be, h, ve, c($(w)), ie);
            break;
          default:
            u.sanitizeURL && (w = "" + w), i.push(be, h, ve, c($(w)), ie);
        }
      } else if (O(h)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = h.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(be, c(h), ve, c($(w)), ie);
      }
    }
  }
  var Ee = p(">"), _e = p("/>");
  function xe(i, u, h) {
    if (u != null) {
      if (h != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push(c("" + u));
    }
  }
  function me(i) {
    var u = "";
    return e.Children.forEach(i, function(h) {
      h != null && (u += h);
    }), u;
  }
  var Ae = p(' selected=""');
  function Je(i, u, h, w) {
    i.push(K(h));
    var F = h = null, P;
    for (P in u) if (y.call(u, P)) {
      var W = u[P];
      if (W != null) switch (P) {
        case "children":
          h = W;
          break;
        case "dangerouslySetInnerHTML":
          F = W;
          break;
        default:
          ye(i, w, P, W);
      }
    }
    return i.push(Ee), xe(i, F, h), typeof h == "string" ? (i.push(c($(h))), null) : h;
  }
  var re = p(`
`), Q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, oe = /* @__PURE__ */ new Map();
  function K(i) {
    var u = oe.get(i);
    if (u === void 0) {
      if (!Q.test(i)) throw Error(t(65, i));
      u = p("<" + i), oe.set(i, u);
    }
    return u;
  }
  var ee = p("<!DOCTYPE html>");
  function Oe(i, u, h, w, F) {
    switch (u) {
      case "select":
        i.push(K("select"));
        var P = null, W = null;
        for (Le in h) if (y.call(h, Le)) {
          var te = h[Le];
          if (te != null) switch (Le) {
            case "children":
              P = te;
              break;
            case "dangerouslySetInnerHTML":
              W = te;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ye(i, w, Le, te);
          }
        }
        return i.push(Ee), xe(i, W, P), P;
      case "option":
        W = F.selectedValue, i.push(K("option"));
        var Ce = te = null, Me = null, Le = null;
        for (P in h) if (y.call(h, P)) {
          var ut = h[P];
          if (ut != null) switch (P) {
            case "children":
              te = ut;
              break;
            case "selected":
              Me = ut;
              break;
            case "dangerouslySetInnerHTML":
              Le = ut;
              break;
            case "value":
              Ce = ut;
            default:
              ye(i, w, P, ut);
          }
        }
        if (W != null) if (h = Ce !== null ? "" + Ce : me(te), He(W)) {
          for (w = 0; w < W.length; w++)
            if ("" + W[w] === h) {
              i.push(Ae);
              break;
            }
        } else "" + W === h && i.push(Ae);
        else Me && i.push(Ae);
        return i.push(Ee), xe(i, Le, te), te;
      case "textarea":
        i.push(K("textarea")), Le = W = P = null;
        for (te in h) if (y.call(h, te) && (Ce = h[te], Ce != null)) switch (te) {
          case "children":
            Le = Ce;
            break;
          case "value":
            P = Ce;
            break;
          case "defaultValue":
            W = Ce;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ye(i, w, te, Ce);
        }
        if (P === null && W !== null && (P = W), i.push(Ee), Le != null) {
          if (P != null) throw Error(t(92));
          if (He(Le) && 1 < Le.length) throw Error(t(93));
          P = "" + Le;
        }
        return typeof P == "string" && P[0] === `
` && i.push(re), P !== null && i.push(c($("" + P))), null;
      case "input":
        i.push(K("input")), Ce = Le = te = P = null;
        for (W in h) if (y.call(h, W) && (Me = h[W], Me != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            Ce = Me;
            break;
          case "defaultValue":
            te = Me;
            break;
          case "checked":
            Le = Me;
            break;
          case "value":
            P = Me;
            break;
          default:
            ye(i, w, W, Me);
        }
        return Le !== null ? ye(
          i,
          w,
          "checked",
          Le
        ) : Ce !== null && ye(i, w, "checked", Ce), P !== null ? ye(i, w, "value", P) : te !== null && ye(i, w, "value", te), i.push(_e), null;
      case "menuitem":
        i.push(K("menuitem"));
        for (var Vt in h) if (y.call(h, Vt) && (P = h[Vt], P != null)) switch (Vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ye(i, w, Vt, P);
        }
        return i.push(Ee), null;
      case "title":
        i.push(K("title")), P = null;
        for (ut in h) if (y.call(h, ut) && (W = h[ut], W != null)) switch (ut) {
          case "children":
            P = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ye(i, w, ut, W);
        }
        return i.push(Ee), P;
      case "listing":
      case "pre":
        i.push(K(u)), W = P = null;
        for (Ce in h) if (y.call(h, Ce) && (te = h[Ce], te != null)) switch (Ce) {
          case "children":
            P = te;
            break;
          case "dangerouslySetInnerHTML":
            W = te;
            break;
          default:
            ye(i, w, Ce, te);
        }
        if (i.push(Ee), W != null) {
          if (P != null) throw Error(t(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(t(61));
          h = W.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? i.push(re, c(h)) : i.push(c("" + h)));
        }
        return typeof P == "string" && P[0] === `
` && i.push(re), P;
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
        i.push(K(u));
        for (var gr in h) if (y.call(h, gr) && (P = h[gr], P != null)) switch (gr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            ye(i, w, gr, P);
        }
        return i.push(_e), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Je(i, h, u, w);
      case "html":
        return F.insertionMode === 0 && i.push(ee), Je(i, h, u, w);
      default:
        if (u.indexOf("-") === -1 && typeof h.is != "string") return Je(i, h, u, w);
        i.push(K(u)), W = P = null;
        for (Me in h) if (y.call(h, Me) && (te = h[Me], te != null)) switch (Me) {
          case "children":
            P = te;
            break;
          case "dangerouslySetInnerHTML":
            W = te;
            break;
          case "style":
            V(i, w, te);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            O(Me) && typeof te != "function" && typeof te != "symbol" && i.push(be, c(Me), ve, c($(te)), ie);
        }
        return i.push(Ee), xe(i, W, P), P;
    }
  }
  var Qe = p("</"), mt = p(">"), ct = p('<template id="'), jt = p('"></template>'), wr = p("<!--$-->"), jr = p('<!--$?--><template id="'), sr = p('"></template>'), lr = p("<!--$!-->"), $t = p("<!--/$-->"), zt = p("<template"), Rt = p('"'), Yt = p(' data-dgst="');
  p(' data-msg="'), p(' data-stck="');
  var _r = p("></template>");
  function yt(i, u, h) {
    if (a(i, jr), h === null) throw Error(t(395));
    return a(i, h), s(i, sr);
  }
  var cr = p('<div hidden id="'), st = p('">'), $e = p("</div>"), Pt = p('<svg aria-hidden="true" style="display:none" id="'), Ye = p('">'), At = p("</svg>"), It = p('<math aria-hidden="true" style="display:none" id="'), ur = p('">'), Nt = p("</math>"), kr = p('<table hidden id="'), wt = p('">'), Mt = p("</table>"), et = p('<table hidden><tbody id="'), Xt = p('">'), Sr = p("</tbody></table>"), bt = p('<table hidden><tr id="'), xr = p('">'), dr = p("</tr></table>"), Ar = p('<table hidden><colgroup id="'), Zt = p('">'), Ht = p("</colgroup></table>");
  function xt(i, u, h, w) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return a(i, cr), a(i, u.segmentPrefix), a(i, c(w.toString(16))), s(i, st);
      case 2:
        return a(i, Pt), a(i, u.segmentPrefix), a(i, c(w.toString(16))), s(i, Ye);
      case 3:
        return a(i, It), a(i, u.segmentPrefix), a(i, c(w.toString(16))), s(i, ur);
      case 4:
        return a(i, kr), a(i, u.segmentPrefix), a(i, c(w.toString(16))), s(i, wt);
      case 5:
        return a(i, et), a(i, u.segmentPrefix), a(i, c(w.toString(16))), s(i, Xt);
      case 6:
        return a(i, bt), a(i, u.segmentPrefix), a(i, c(w.toString(16))), s(i, xr);
      case 7:
        return a(
          i,
          Ar
        ), a(i, u.segmentPrefix), a(i, c(w.toString(16))), s(i, Zt);
      default:
        throw Error(t(397));
    }
  }
  function Xe(i, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(i, $e);
      case 2:
        return s(i, At);
      case 3:
        return s(i, Nt);
      case 4:
        return s(i, Mt);
      case 5:
        return s(i, Sr);
      case 6:
        return s(i, dr);
      case 7:
        return s(i, Ht);
      default:
        throw Error(t(397));
    }
  }
  var Or = p('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), nt = p('$RS("'), Kt = p('","'), Ue = p('")<\/script>'), he = p('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _ = p('$RC("'), J = p('","'), se = p('")<\/script>'), Pe = p('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ze = p('$RX("'), tt = p('"'), at = p(")<\/script>"), gt = p(","), rt = /[<\u2028\u2029]/g;
  function Ot(i) {
    return JSON.stringify(i).replace(rt, function(u) {
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
  var St = Object.assign, Er = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Rr = Symbol.for("react.profiler"), fr = Symbol.for("react.provider"), Bt = Symbol.for("react.context"), pr = Symbol.for("react.forward_ref"), Yr = Symbol.for("react.suspense"), zr = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), M = Symbol.for("react.legacy_hidden"), N = Symbol.for("react.default_value"), H = Symbol.iterator;
  function ne(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Tr:
        return "Fragment";
      case Jt:
        return "Portal";
      case Rr:
        return "Profiler";
      case $r:
        return "StrictMode";
      case Yr:
        return "Suspense";
      case zr:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Bt:
        return (i.displayName || "Context") + ".Consumer";
      case fr:
        return (i._context.displayName || "Context") + ".Provider";
      case pr:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case o:
        return u = i.displayName || null, u !== null ? u : ne(i.type) || "Memo";
      case d:
        u = i._payload, i = i._init;
        try {
          return ne(i(u));
        } catch {
        }
    }
    return null;
  }
  var ke = {};
  function Te(i, u) {
    if (i = i.contextTypes, !i) return ke;
    var h = {}, w;
    for (w in i) h[w] = u[w];
    return h;
  }
  var Ne = null;
  function We(i, u) {
    if (i !== u) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var h = u.parent;
      if (i === null) {
        if (h !== null) throw Error(t(401));
      } else {
        if (h === null) throw Error(t(401));
        We(i, h);
      }
      u.context._currentValue = u.value;
    }
  }
  function Ut(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Ut(i);
  }
  function Dt(i) {
    var u = i.parent;
    u !== null && Dt(u), i.context._currentValue = i.value;
  }
  function Et(i, u) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? We(i, u) : Et(i, u);
  }
  function Cr(i, u) {
    var h = u.parent;
    if (h === null) throw Error(t(402));
    i.depth === h.depth ? We(i, h) : Cr(i, h), u.context._currentValue = u.value;
  }
  function Qt(i) {
    var u = Ne;
    u !== i && (u === null ? Dt(i) : i === null ? Ut(u) : u.depth === i.depth ? We(u, i) : u.depth > i.depth ? Et(u, i) : Cr(u, i), Ne = i);
  }
  var Xr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function er(i, u, h, w) {
    var F = i.state !== void 0 ? i.state : null;
    i.updater = Xr, i.props = h, i.state = F;
    var P = { queue: [], replace: !1 };
    i._reactInternals = P;
    var W = u.contextType;
    if (i.context = typeof W == "object" && W !== null ? W._currentValue : w, W = u.getDerivedStateFromProps, typeof W == "function" && (W = W(h, F), F = W == null ? F : St({}, F, W), i.state = F), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Xr.enqueueReplaceState(i, i.state, null), P.queue !== null && 0 < P.queue.length) if (u = P.queue, W = P.replace, P.queue = null, P.replace = !1, W && u.length === 1) i.state = u[0];
    else {
      for (P = W ? u[0] : i.state, F = !0, W = W ? 1 : 0; W < u.length; W++) {
        var te = u[W];
        te = typeof te == "function" ? te.call(i, P, h, w) : te, te != null && (F ? (F = !1, P = St({}, P, te)) : St(P, te));
      }
      i.state = P;
    }
    else P.queue = null;
  }
  var Hr = { id: 1, overflow: "" };
  function vt(i, u, h) {
    var w = i.id;
    i = i.overflow;
    var F = 32 - Nr(w) - 1;
    w &= ~(1 << F), h += 1;
    var P = 32 - Nr(u) + F;
    if (30 < P) {
      var W = F - F % 5;
      return P = (w & (1 << W) - 1).toString(32), w >>= W, F -= W, { id: 1 << 32 - Nr(u) + F | h << F | w, overflow: P + i };
    }
    return { id: 1 << P | h << F | w, overflow: i };
  }
  var Nr = Math.clz32 ? Math.clz32 : jn, Dn = Math.log, Fn = Math.LN2;
  function jn(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Dn(i) / Fn | 0) | 0;
  }
  function Zr(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var mr = typeof Object.is == "function" ? Object.is : Zr, tr = null, ln = null, Kr = null, Ze = null, Jr = !1, T = !1, ae = 0, ce = null, je = 0;
  function ot() {
    if (tr === null) throw Error(t(321));
    return tr;
  }
  function lt() {
    if (0 < je) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function kt() {
    return Ze === null ? Kr === null ? (Jr = !1, Kr = Ze = lt()) : (Jr = !0, Ze = Kr) : Ze.next === null ? (Jr = !1, Ze = Ze.next = lt()) : (Jr = !0, Ze = Ze.next), Ze;
  }
  function Tt() {
    ln = tr = null, T = !1, Kr = null, je = 0, Ze = ce = null;
  }
  function ft(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function it(i, u, h) {
    if (tr = ot(), Ze = kt(), Jr) {
      var w = Ze.queue;
      if (u = w.dispatch, ce !== null && (h = ce.get(w), h !== void 0)) {
        ce.delete(w), w = Ze.memoizedState;
        do
          w = i(w, h.action), h = h.next;
        while (h !== null);
        return Ze.memoizedState = w, [w, u];
      }
      return [Ze.memoizedState, u];
    }
    return i = i === ft ? typeof u == "function" ? u() : u : h !== void 0 ? h(u) : u, Ze.memoizedState = i, i = Ze.queue = { last: null, dispatch: null }, i = i.dispatch = Qo.bind(null, tr, i), [Ze.memoizedState, i];
  }
  function hr(i, u) {
    if (tr = ot(), Ze = kt(), u = u === void 0 ? null : u, Ze !== null) {
      var h = Ze.memoizedState;
      if (h !== null && u !== null) {
        var w = h[1];
        e: if (w === null) w = !1;
        else {
          for (var F = 0; F < w.length && F < u.length; F++) if (!mr(u[F], w[F])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return h[0];
      }
    }
    return i = i(), Ze.memoizedState = [i, u], i;
  }
  function Qo(i, u, h) {
    if (25 <= je) throw Error(t(301));
    if (i === tr) if (T = !0, i = { action: h, next: null }, ce === null && (ce = /* @__PURE__ */ new Map()), h = ce.get(u), h === void 0) ce.set(u, i);
    else {
      for (u = h; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function Ol() {
    throw Error(t(394));
  }
  function $n() {
  }
  var ei = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return ot(), i._currentValue;
  }, useMemo: hr, useReducer: it, useRef: function(i) {
    tr = ot(), Ze = kt();
    var u = Ze.memoizedState;
    return u === null ? (i = { current: i }, Ze.memoizedState = i) : u;
  }, useState: function(i) {
    return it(ft, i);
  }, useInsertionEffect: $n, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return hr(function() {
      return i;
    }, u);
  }, useImperativeHandle: $n, useEffect: $n, useDebugValue: $n, useDeferredValue: function(i) {
    return ot(), i;
  }, useTransition: function() {
    return ot(), [!1, Ol];
  }, useId: function() {
    var i = ln.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Nr(i) - 1)).toString(32) + u;
    var h = zn;
    if (h === null) throw Error(t(404));
    return u = ae++, i = ":" + h.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return ot(), u(i._source);
  }, useSyncExternalStore: function(i, u, h) {
    if (h === void 0) throw Error(t(407));
    return h();
  } }, zn = null, Pa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Rl(i) {
    return console.error(i), null;
  }
  function Sn() {
  }
  function Nl(i, u, h, w, F, P, W, te, Ce) {
    var Me = [], Le = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Le, pingedTasks: Me, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: F === void 0 ? Rl : F, onAllReady: P === void 0 ? Sn : P, onShellReady: W === void 0 ? Sn : W, onShellError: te === void 0 ? Sn : te, onFatalError: Ce === void 0 ? Sn : Ce }, h = Hn(u, 0, null, h, !1, !1), h.parentFlushed = !0, i = Ia(u, i, null, h, Le, ke, null, Hr), Me.push(i), u;
  }
  function Ia(i, u, h, w, F, P, W, te) {
    i.allPendingTasks++, h === null ? i.pendingRootTasks++ : h.pendingTasks++;
    var Ce = { node: u, ping: function() {
      var Me = i.pingedTasks;
      Me.push(Ce), Me.length === 1 && si(i);
    }, blockedBoundary: h, blockedSegment: w, abortSet: F, legacyContext: P, context: W, treeContext: te };
    return F.add(Ce), Ce;
  }
  function Hn(i, u, h, w, F, P) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: h, lastPushedText: F, textEmbedded: P };
  }
  function xn(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Bn(i, u) {
    var h = i.onShellError;
    h(u), h = i.onFatalError, h(u), i.destination !== null ? (i.status = 2, b(i.destination, u)) : (i.status = 1, i.fatalError = u);
  }
  function ti(i, u, h, w, F) {
    for (tr = {}, ln = u, ae = 0, i = h(w, F); T; ) T = !1, ae = 0, je += 1, Ze = null, i = h(w, F);
    return Tt(), i;
  }
  function ri(i, u, h, w) {
    var F = h.render(), P = w.childContextTypes;
    if (P != null) {
      var W = u.legacyContext;
      if (typeof h.getChildContext != "function") w = W;
      else {
        h = h.getChildContext();
        for (var te in h) if (!(te in P)) throw Error(t(108, ne(w) || "Unknown", te));
        w = St({}, W, h);
      }
      u.legacyContext = w, Wt(i, u, F), u.legacyContext = W;
    } else Wt(i, u, F);
  }
  function ni(i, u) {
    if (i && i.defaultProps) {
      u = St({}, u), i = i.defaultProps;
      for (var h in i) u[h] === void 0 && (u[h] = i[h]);
      return u;
    }
    return u;
  }
  function Ma(i, u, h, w, F) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      F = Te(h, u.legacyContext);
      var P = h.contextType;
      P = new h(w, typeof P == "object" && P !== null ? P._currentValue : F), er(P, h, w, F), ri(i, u, P, h);
    } else {
      P = Te(h, u.legacyContext), F = ti(i, u, h, w, P);
      var W = ae !== 0;
      if (typeof F == "object" && F !== null && typeof F.render == "function" && F.$$typeof === void 0) er(F, h, w, P), ri(i, u, F, h);
      else if (W) {
        w = u.treeContext, u.treeContext = vt(w, 1, 0);
        try {
          Wt(i, u, F);
        } finally {
          u.treeContext = w;
        }
      } else Wt(i, u, F);
    }
    else if (typeof h == "string") {
      switch (F = u.blockedSegment, P = Oe(F.chunks, h, w, i.responseState, F.formatContext), F.lastPushedText = !1, W = F.formatContext, F.formatContext = le(W, h, w), Da(i, u, P), F.formatContext = W, h) {
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
          F.chunks.push(Qe, c(h), mt);
      }
      F.lastPushedText = !1;
    } else {
      switch (h) {
        case M:
        case k:
        case $r:
        case Rr:
        case Tr:
          Wt(i, u, w.children);
          return;
        case zr:
          Wt(i, u, w.children);
          return;
        case g:
          throw Error(t(343));
        case Yr:
          e: {
            h = u.blockedBoundary, F = u.blockedSegment, P = w.fallback, w = w.children, W = /* @__PURE__ */ new Set();
            var te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, Ce = Hn(i, F.chunks.length, te, F.formatContext, !1, !1);
            F.children.push(Ce), F.lastPushedText = !1;
            var Me = Hn(i, 0, null, F.formatContext, !1, !1);
            Me.parentFlushed = !0, u.blockedBoundary = te, u.blockedSegment = Me;
            try {
              if (Da(
                i,
                u,
                w
              ), Me.lastPushedText && Me.textEmbedded && Me.chunks.push(U), Me.status = 1, Un(te, Me), te.pendingTasks === 0) break e;
            } catch (Le) {
              Me.status = 4, te.forceClientRender = !0, te.errorDigest = xn(i, Le);
            } finally {
              u.blockedBoundary = h, u.blockedSegment = F;
            }
            u = Ia(i, P, h, Ce, W, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case pr:
          if (w = ti(i, u, h.render, w, F), ae !== 0) {
            h = u.treeContext, u.treeContext = vt(h, 1, 0);
            try {
              Wt(i, u, w);
            } finally {
              u.treeContext = h;
            }
          } else Wt(i, u, w);
          return;
        case o:
          h = h.type, w = ni(h, w), Ma(i, u, h, w, F);
          return;
        case fr:
          if (F = w.children, h = h._context, w = w.value, P = h._currentValue, h._currentValue = w, W = Ne, Ne = w = { parent: W, depth: W === null ? 0 : W.depth + 1, context: h, parentValue: P, value: w }, u.context = w, Wt(i, u, F), i = Ne, i === null) throw Error(t(403));
          w = i.parentValue, i.context._currentValue = w === N ? i.context._defaultValue : w, i = Ne = i.parent, u.context = i;
          return;
        case Bt:
          w = w.children, w = w(h._currentValue), Wt(i, u, w);
          return;
        case d:
          F = h._init, h = F(h._payload), w = ni(h, w), Ma(i, u, h, w, void 0);
          return;
      }
      throw Error(t(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function Wt(i, u, h) {
    if (u.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Er:
          Ma(i, u, h.type, h.props, h.ref);
          return;
        case Jt:
          throw Error(t(257));
        case d:
          var w = h._init;
          h = w(h._payload), Wt(i, u, h);
          return;
      }
      if (He(h)) {
        ai(i, u, h);
        return;
      }
      if (h === null || typeof h != "object" ? w = null : (w = H && h[H] || h["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(h))) {
        if (h = w.next(), !h.done) {
          var F = [];
          do
            F.push(h.value), h = w.next();
          while (!h.done);
          ai(i, u, F);
        }
        return;
      }
      throw i = Object.prototype.toString.call(h), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : i));
    }
    typeof h == "string" ? (w = u.blockedSegment, w.lastPushedText = z(u.blockedSegment.chunks, h, i.responseState, w.lastPushedText)) : typeof h == "number" && (w = u.blockedSegment, w.lastPushedText = z(u.blockedSegment.chunks, "" + h, i.responseState, w.lastPushedText));
  }
  function ai(i, u, h) {
    for (var w = h.length, F = 0; F < w; F++) {
      var P = u.treeContext;
      u.treeContext = vt(P, w, F);
      try {
        Da(i, u, h[F]);
      } finally {
        u.treeContext = P;
      }
    }
  }
  function Da(i, u, h) {
    var w = u.blockedSegment.formatContext, F = u.legacyContext, P = u.context;
    try {
      return Wt(i, u, h);
    } catch (Ce) {
      if (Tt(), typeof Ce == "object" && Ce !== null && typeof Ce.then == "function") {
        h = Ce;
        var W = u.blockedSegment, te = Hn(i, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(te), W.lastPushedText = !1, i = Ia(i, u.node, u.blockedBoundary, te, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, h.then(i, i), u.blockedSegment.formatContext = w, u.legacyContext = F, u.context = P, Qt(P);
      } else throw u.blockedSegment.formatContext = w, u.legacyContext = F, u.context = P, Qt(P), Ce;
    }
  }
  function Ll(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, ii(this, u, i);
  }
  function oi(i, u, h) {
    var w = i.blockedBoundary;
    i.blockedSegment.status = 3, w === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, i = h === void 0 ? Error(t(432)) : h, w.errorDigest = u.onError(i), w.parentFlushed && u.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(F) {
      return oi(F, u, h);
    }), w.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (w = u.onAllReady, w()));
  }
  function Un(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var h = u.children[0];
      h.id = u.id, h.parentFlushed = !0, h.status === 1 && Un(i, h);
    } else i.completedSegments.push(u);
  }
  function ii(i, u, h) {
    if (u === null) {
      if (h.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = h;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Sn, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Un(u, h), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Ll, i), u.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Un(u, h), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function si(i) {
    if (i.status !== 2) {
      var u = Ne, h = Pa.current;
      Pa.current = ei;
      var w = zn;
      zn = i.responseState;
      try {
        var F = i.pingedTasks, P;
        for (P = 0; P < F.length; P++) {
          var W = F[P], te = i, Ce = W.blockedSegment;
          if (Ce.status === 0) {
            Qt(W.context);
            try {
              Wt(te, W, W.node), Ce.lastPushedText && Ce.textEmbedded && Ce.chunks.push(U), W.abortSet.delete(W), Ce.status = 1, ii(te, W.blockedBoundary, Ce);
            } catch (vr) {
              if (Tt(), typeof vr == "object" && vr !== null && typeof vr.then == "function") {
                var Me = W.ping;
                vr.then(Me, Me);
              } else {
                W.abortSet.delete(W), Ce.status = 4;
                var Le = W.blockedBoundary, ut = vr, Vt = xn(te, ut);
                if (Le === null ? Bn(te, ut) : (Le.pendingTasks--, Le.forceClientRender || (Le.forceClientRender = !0, Le.errorDigest = Vt, Le.parentFlushed && te.clientRenderedBoundaries.push(Le))), te.allPendingTasks--, te.allPendingTasks === 0) {
                  var gr = te.onAllReady;
                  gr();
                }
              }
            } finally {
            }
          }
        }
        F.splice(0, P), i.destination !== null && Fa(i, i.destination);
      } catch (vr) {
        xn(i, vr), Bn(i, vr);
      } finally {
        zn = w, Pa.current = h, h === ei && Qt(u);
      }
    }
  }
  function Wn(i, u, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var w = h.id = i.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, i = i.responseState, a(u, ct), a(u, i.placeholderPrefix), i = c(w.toString(16)), a(u, i), s(u, jt);
      case 1:
        h.status = 2;
        var F = !0;
        w = h.chunks;
        var P = 0;
        h = h.children;
        for (var W = 0; W < h.length; W++) {
          for (F = h[W]; P < F.index; P++) a(u, w[P]);
          F = Vn(i, u, F);
        }
        for (; P < w.length - 1; P++) a(u, w[P]);
        return P < w.length && (F = s(u, w[P])), F;
      default:
        throw Error(t(390));
    }
  }
  function Vn(i, u, h) {
    var w = h.boundary;
    if (w === null) return Wn(i, u, h);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, s(u, lr), a(u, zt), w && (a(u, Yt), a(u, c($(w))), a(u, Rt)), s(u, _r), Wn(i, u, h);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = i.nextSegmentId++, 0 < w.completedSegments.length && i.partialBoundaries.push(w);
      var F = i.responseState, P = F.nextSuspenseID++;
      F = p(F.boundaryPrefix + P.toString(16)), w = w.id = F, yt(u, i.responseState, w), Wn(i, u, h);
    } else if (w.byteSize > i.progressiveChunkSize) w.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(w), yt(u, i.responseState, w.id), Wn(i, u, h);
    else {
      if (s(u, wr), h = w.completedSegments, h.length !== 1) throw Error(t(391));
      Vn(i, u, h[0]);
    }
    return s(u, $t);
  }
  function li(i, u, h) {
    return xt(u, i.responseState, h.formatContext, h.id), Vn(i, u, h), Xe(u, h.formatContext);
  }
  function ci(i, u, h) {
    for (var w = h.completedSegments, F = 0; F < w.length; F++) ui(i, u, h, w[F]);
    if (w.length = 0, i = i.responseState, w = h.id, h = h.rootSegmentID, a(u, i.startInlineScript), i.sentCompleteBoundaryFunction ? a(u, _) : (i.sentCompleteBoundaryFunction = !0, a(u, he)), w === null) throw Error(t(395));
    return h = c(h.toString(16)), a(u, w), a(u, J), a(u, i.segmentPrefix), a(u, h), s(u, se);
  }
  function ui(i, u, h, w) {
    if (w.status === 2) return !0;
    var F = w.id;
    if (F === -1) {
      if ((w.id = h.rootSegmentID) === -1) throw Error(t(392));
      return li(i, u, w);
    }
    return li(i, u, w), i = i.responseState, a(u, i.startInlineScript), i.sentCompleteSegmentFunction ? a(u, nt) : (i.sentCompleteSegmentFunction = !0, a(u, Or)), a(u, i.segmentPrefix), F = c(F.toString(16)), a(u, F), a(u, Kt), a(u, i.placeholderPrefix), a(u, F), s(u, Ue);
  }
  function Fa(i, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var h = i.completedRootSegment;
      if (h !== null && i.pendingRootTasks === 0) {
        Vn(i, u, h), i.completedRootSegment = null;
        var w = i.responseState.bootstrapChunks;
        for (h = 0; h < w.length - 1; h++) a(u, w[h]);
        h < w.length && s(u, w[h]);
      }
      var F = i.clientRenderedBoundaries, P;
      for (P = 0; P < F.length; P++) {
        var W = F[P];
        w = u;
        var te = i.responseState, Ce = W.id, Me = W.errorDigest, Le = W.errorMessage, ut = W.errorComponentStack;
        if (a(w, te.startInlineScript), te.sentClientRenderFunction ? a(w, ze) : (te.sentClientRenderFunction = !0, a(
          w,
          Pe
        )), Ce === null) throw Error(t(395));
        a(w, Ce), a(w, tt), (Me || Le || ut) && (a(w, gt), a(w, c(Ot(Me || "")))), (Le || ut) && (a(w, gt), a(w, c(Ot(Le || "")))), ut && (a(w, gt), a(w, c(Ot(ut)))), s(w, at);
      }
      F.splice(0, P);
      var Vt = i.completedBoundaries;
      for (P = 0; P < Vt.length; P++) ci(i, u, Vt[P]);
      Vt.splice(0, P), l(u), r = new Uint8Array(512), n = 0;
      var gr = i.partialBoundaries;
      for (P = 0; P < gr.length; P++) {
        var vr = gr[P];
        e: {
          F = i, W = u;
          var qn = vr.completedSegments;
          for (te = 0; te < qn.length; te++) if (!ui(
            F,
            W,
            vr,
            qn[te]
          )) {
            te++, qn.splice(0, te);
            var fi = !1;
            break e;
          }
          qn.splice(0, te), fi = !0;
        }
        if (!fi) {
          i.destination = null, P++, gr.splice(0, P);
          return;
        }
      }
      gr.splice(0, P);
      var ja = i.completedBoundaries;
      for (P = 0; P < ja.length; P++) ci(i, u, ja[P]);
      ja.splice(0, P);
    } finally {
      l(u), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.close();
    }
  }
  function di(i, u) {
    try {
      var h = i.abortableTasks;
      h.forEach(function(w) {
        return oi(w, i, u);
      }), h.clear(), i.destination !== null && Fa(i, i.destination);
    } catch (w) {
      xn(i, w), Bn(i, w);
    }
  }
  return Qn.renderToReadableStream = function(i, u) {
    return new Promise(function(h, w) {
      var F, P, W = new Promise(function(Le, ut) {
        P = Le, F = ut;
      }), te = Nl(i, Be(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), ge(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, P, function() {
        var Le = new ReadableStream({ type: "bytes", pull: function(ut) {
          if (te.status === 1) te.status = 2, b(ut, te.fatalError);
          else if (te.status !== 2 && te.destination === null) {
            te.destination = ut;
            try {
              Fa(te, ut);
            } catch (Vt) {
              xn(te, Vt), Bn(te, Vt);
            }
          }
        }, cancel: function() {
          di(te);
        } }, { highWaterMark: 0 });
        Le.allReady = W, h(Le);
      }, function(Le) {
        W.catch(function() {
        }), w(Le);
      }, F);
      if (u && u.signal) {
        var Ce = u.signal, Me = function() {
          di(te, Ce.reason), Ce.removeEventListener("abort", Me);
        };
        Ce.addEventListener("abort", Me);
      }
      si(te);
    });
  }, Qn.version = "18.3.1", Qn;
}
var wn, Zs;
wn = od(), Zs = id();
wn.version;
wn.renderToString;
wn.renderToStaticMarkup;
wn.renderToNodeStream;
wn.renderToStaticNodeStream;
Zs.renderToReadableStream;
const sd = "staticMarkup";
function ld() {
  const t = Pl().indexOf(sd) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const fn = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = ld(), { onClick: a, ...s } = r.props;
  if (n)
    return ar.cloneElement(r, {
      ...s,
      onClick: (c) => (ad(e), a ? a(c) : !0)
    });
  let l = "";
  ["input", "header", "header-input"].includes(t) && (l = `-${t}`);
  const f = {
    [`data-ga${l}`]: e.text,
    [`data-ga${l}-name`]: e.name,
    [`data-ga${l}-event`]: e.event,
    [`data-ga${l}-action`]: e.action,
    [`data-ga${l}-type`]: e.type,
    [`data-ga${l}-region`]: e.region,
    [`data-ga${l}-section`]: e.section,
    [`data-ga${l}-component`]: e.component
  };
  return ar.cloneElement(r, {
    ...s,
    onClick: a,
    ...f
  });
}, cd = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Bo = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: a,
  color: s,
  disabled: l,
  element: f,
  href: c,
  icon: p,
  innerRef: b,
  onClick: y,
  size: x,
  classes: I,
  target: A,
  ...O
}) => {
  const R = Nn("btn", {
    [`btn-${s}`]: !0,
    "btn-md": x === "small",
    "btn-sm": x === "xsmall",
    "btn-block": a,
    disabled: l
  });
  let D = f;
  return c && f === "button" && (D = "a"), /* @__PURE__ */ Y.jsx(
    fn,
    {
      gaData: {
        ...cd,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ Y.jsxs(
        D,
        {
          type: D === "button" && y ? "button" : void 0,
          ...O,
          className: Nn(I) || R,
          href: c,
          ref: b,
          onClick: y,
          "aria-label": n,
          target: D === "a" ? A : null,
          children: [
            p && /* @__PURE__ */ Y.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Bo.propTypes = {
  /**
   * Button label
   */
  label: S.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: S.string,
  /**
   * Google Analytics event data
   */
  gaData: Xs,
  /**
    ARIA label for accessibility
  */
  ariaLabel: S.string,
  /**
    Render button as a block-button?
  */
  block: S.bool,
  /**
    Button background color
  */
  color: S.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: S.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: S.oneOfType([
    S.func,
    S.string,
    S.shape({ $$typeof: S.symbol, render: S.func }),
    S.arrayOf(
      S.oneOfType([
        S.func,
        S.string,
        S.shape({ $$typeof: S.symbol, render: S.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: S.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: S.arrayOf(S.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: S.oneOfType([
    S.object,
    S.func,
    S.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: S.func,
  /**
    Button size
  */
  size: S.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: S.arrayOf(S.string),
  /**
   Link target type
   */
  target: S.oneOf(["_blank", "_self", "_top", "_parent"])
};
Bo.defaultProps = {
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
const ud = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Uo = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: s,
  element: l = "button",
  innerRef: f,
  href: c,
  onClick: p,
  ...b
}) => {
  const y = Nn("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: s
  });
  let x = l;
  return c && l === "button" && (x = "a"), /* @__PURE__ */ Y.jsx(
    fn,
    {
      gaData: {
        ...ud,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ Y.jsx(
        x,
        {
          type: x === "button" && p ? "button" : void 0,
          ...b,
          className: y,
          href: c,
          ref: f,
          onClick: p,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Uo.propTypes = {
  /**
    Button tag label
  */
  label: S.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: S.string,
  /**
   * Google Analytics event data
   */
  gaData: Xs,
  /**
    ARIA label for accessibility
  */
  ariaLabel: S.string,
  /**
    Button background color
  */
  color: S.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: S.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: S.oneOfType([
    S.func,
    S.string,
    S.shape({ $$typeof: S.symbol, render: S.func }),
    S.arrayOf(
      S.oneOfType([
        S.func,
        S.string,
        S.shape({ $$typeof: S.symbol, render: S.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: S.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: S.oneOfType([
    S.object,
    S.func,
    S.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: S.func
};
Uo.defaultProps = {
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
const Ks = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: s,
  fetchPriority: l = "auto",
  width: f,
  height: c,
  cardLink: p,
  title: b,
  caption: y,
  captionTitle: x,
  border: I,
  dropShadow: A
}) => {
  const O = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: l,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Au(r) },
    ...s && { "data-testid": s },
    ...f && { width: f },
    ...c && { height: c }
  }, R = Nn("uds-img", {
    borderless: !I,
    "uds-img-drop-shadow": A
  }), D = (Z) => {
    const q = Z ? `${O.className} ${Z}` : O.className;
    return p ? /* @__PURE__ */ Y.jsxs("a", { href: p, children: [
      /* @__PURE__ */ Y.jsx("img", { ...O, className: q }),
      /* @__PURE__ */ Y.jsx("span", { className: "visually-hidden", children: b })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ Y.jsx("img", { ...O, className: q })
    );
  }, j = () => /* @__PURE__ */ Y.jsx("div", { className: R, children: /* @__PURE__ */ Y.jsxs("figure", { className: "figure uds-figure", children: [
    D(),
    y && /* @__PURE__ */ Y.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      x && /* @__PURE__ */ Y.jsx("h3", { children: x }),
      /* @__PURE__ */ Y.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: un(y)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: y ? j() : D(R) });
};
Ks.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: S.string.isRequired,
  /**
   * Image alt text
   */
  alt: S.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: S.arrayOf(S.string),
  /**
   * Image loading mode
   */
  loading: S.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: S.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: S.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: S.string,
  /**
   * Height of the image
   */
  height: S.string,
  dataTestId: S.string,
  cardLink: S.string,
  title: S.string,
  caption: S.string,
  captionTitle: S.string,
  border: S.bool,
  dropShadow: S.bool
};
var Wo = Vs();
function dd(e) {
  function t(U, z, C, G, E) {
    for (var X = 0, V = 0, be = 0, ve = 0, ie, fe, ye = 0, Ee = 0, _e, xe = _e = ie = 0, me = 0, Ae = 0, Je = 0, re = 0, Q = C.length, oe = Q - 1, K, ee = "", Oe = "", Qe = "", mt = "", ct; me < Q; ) {
      if (fe = C.charCodeAt(me), me === oe && V + ve + be + X !== 0 && (V !== 0 && (fe = V === 47 ? 10 : 47), ve = be = X = 0, Q++, oe++), V + ve + be + X === 0) {
        if (me === oe && (0 < Ae && (ee = ee.replace(x, "")), 0 < ee.trim().length)) {
          switch (fe) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ee += C.charAt(me);
          }
          fe = 59;
        }
        switch (fe) {
          case 123:
            for (ee = ee.trim(), ie = ee.charCodeAt(0), _e = 1, re = ++me; me < Q; ) {
              switch (fe = C.charCodeAt(me)) {
                case 123:
                  _e++;
                  break;
                case 125:
                  _e--;
                  break;
                case 47:
                  switch (fe = C.charCodeAt(me + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (xe = me + 1; xe < oe; ++xe)
                          switch (C.charCodeAt(xe)) {
                            case 47:
                              if (fe === 42 && C.charCodeAt(xe - 1) === 42 && me + 2 !== xe) {
                                me = xe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (fe === 47) {
                                me = xe + 1;
                                break e;
                              }
                          }
                        me = xe;
                      }
                  }
                  break;
                case 91:
                  fe++;
                case 40:
                  fe++;
                case 34:
                case 39:
                  for (; me++ < oe && C.charCodeAt(me) !== fe; )
                    ;
              }
              if (_e === 0) break;
              me++;
            }
            switch (_e = C.substring(re, me), ie === 0 && (ie = (ee = ee.replace(y, "").trim()).charCodeAt(0)), ie) {
              case 64:
                switch (0 < Ae && (ee = ee.replace(x, "")), fe = ee.charCodeAt(1), fe) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ae = z;
                    break;
                  default:
                    Ae = dt;
                }
                if (_e = t(z, Ae, _e, fe, E + 1), re = _e.length, 0 < Be && (Ae = r(dt, ee, Je), ct = f(3, _e, Ae, z, we, pe, re, fe, E, G), ee = Ae.join(""), ct !== void 0 && (re = (_e = ct.trim()).length) === 0 && (fe = 0, _e = "")), 0 < re) switch (fe) {
                  case 115:
                    ee = ee.replace(B, l);
                  case 100:
                  case 109:
                  case 45:
                    _e = ee + "{" + _e + "}";
                    break;
                  case 107:
                    ee = ee.replace(j, "$1 $2"), _e = ee + "{" + _e + "}", _e = De === 1 || De === 2 && s("@" + _e, 3) ? "@-webkit-" + _e + "@" + _e : "@" + _e;
                    break;
                  default:
                    _e = ee + _e, G === 112 && (_e = (Oe += _e, ""));
                }
                else _e = "";
                break;
              default:
                _e = t(z, r(z, ee, Je), _e, G, E + 1);
            }
            Qe += _e, _e = Je = Ae = xe = ie = 0, ee = "", fe = C.charCodeAt(++me);
            break;
          case 125:
          case 59:
            if (ee = (0 < Ae ? ee.replace(x, "") : ee).trim(), 1 < (re = ee.length)) switch (xe === 0 && (ie = ee.charCodeAt(0), ie === 45 || 96 < ie && 123 > ie) && (re = (ee = ee.replace(" ", ":")).length), 0 < Be && (ct = f(1, ee, z, U, we, pe, Oe.length, G, E, G)) !== void 0 && (re = (ee = ct.trim()).length) === 0 && (ee = "\0\0"), ie = ee.charCodeAt(0), fe = ee.charCodeAt(1), ie) {
              case 0:
                break;
              case 64:
                if (fe === 105 || fe === 99) {
                  mt += ee + C.charAt(me);
                  break;
                }
              default:
                ee.charCodeAt(re - 1) !== 58 && (Oe += a(ee, ie, fe, ee.charCodeAt(2)));
            }
            Je = Ae = xe = ie = 0, ee = "", fe = C.charCodeAt(++me);
        }
      }
      switch (fe) {
        case 13:
        case 10:
          V === 47 ? V = 0 : 1 + ie === 0 && G !== 107 && 0 < ee.length && (Ae = 1, ee += "\0"), 0 < Be * ge && f(0, ee, z, U, we, pe, Oe.length, G, E, G), pe = 1, we++;
          break;
        case 59:
        case 125:
          if (V + ve + be + X === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, K = C.charAt(me), fe) {
            case 9:
            case 32:
              if (ve + X + V === 0) switch (ye) {
                case 44:
                case 58:
                case 9:
                case 32:
                  K = "";
                  break;
                default:
                  fe !== 32 && (K = " ");
              }
              break;
            case 0:
              K = "\\0";
              break;
            case 12:
              K = "\\f";
              break;
            case 11:
              K = "\\v";
              break;
            case 38:
              ve + V + X === 0 && (Ae = Je = 1, K = "\f" + K);
              break;
            case 108:
              if (ve + V + X + de === 0 && 0 < xe) switch (me - xe) {
                case 2:
                  ye === 112 && C.charCodeAt(me - 3) === 58 && (de = ye);
                case 8:
                  Ee === 111 && (de = Ee);
              }
              break;
            case 58:
              ve + V + X === 0 && (xe = me);
              break;
            case 44:
              V + be + ve + X === 0 && (Ae = 1, K += "\r");
              break;
            case 34:
            case 39:
              V === 0 && (ve = ve === fe ? 0 : ve === 0 ? fe : ve);
              break;
            case 91:
              ve + V + be === 0 && X++;
              break;
            case 93:
              ve + V + be === 0 && X--;
              break;
            case 41:
              ve + V + X === 0 && be--;
              break;
            case 40:
              if (ve + V + X === 0) {
                if (ie === 0) switch (2 * ye + 3 * Ee) {
                  case 533:
                    break;
                  default:
                    ie = 1;
                }
                be++;
              }
              break;
            case 64:
              V + be + ve + X + xe + _e === 0 && (_e = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ve + X + be)) switch (V) {
                case 0:
                  switch (2 * fe + 3 * C.charCodeAt(me + 1)) {
                    case 235:
                      V = 47;
                      break;
                    case 220:
                      re = me, V = 42;
                  }
                  break;
                case 42:
                  fe === 47 && ye === 42 && re + 2 !== me && (C.charCodeAt(re + 2) === 33 && (Oe += C.substring(re, me + 1)), K = "", V = 0);
              }
          }
          V === 0 && (ee += K);
      }
      Ee = ye, ye = fe, me++;
    }
    if (re = Oe.length, 0 < re) {
      if (Ae = z, 0 < Be && (ct = f(2, Oe, Ae, U, we, pe, re, G, E, G), ct !== void 0 && (Oe = ct).length === 0)) return mt + Oe + Qe;
      if (Oe = Ae.join(",") + "{" + Oe + "}", De * de !== 0) {
        switch (De !== 2 || s(Oe, 2) || (de = 0), de) {
          case 111:
            Oe = Oe.replace(q, ":-moz-$1") + Oe;
            break;
          case 112:
            Oe = Oe.replace(Z, "::-webkit-input-$1") + Oe.replace(Z, "::-moz-$1") + Oe.replace(Z, ":-ms-input-$1") + Oe;
        }
        de = 0;
      }
    }
    return mt + Oe + Qe;
  }
  function r(U, z, C) {
    var G = z.trim().split(R);
    z = G;
    var E = G.length, X = U.length;
    switch (X) {
      case 0:
      case 1:
        var V = 0;
        for (U = X === 0 ? "" : U[0] + " "; V < E; ++V)
          z[V] = n(U, z[V], C).trim();
        break;
      default:
        var be = V = 0;
        for (z = []; V < E; ++V)
          for (var ve = 0; ve < X; ++ve)
            z[be++] = n(U[ve] + " ", G[V], C).trim();
    }
    return z;
  }
  function n(U, z, C) {
    var G = z.charCodeAt(0);
    switch (33 > G && (G = (z = z.trim()).charCodeAt(0)), G) {
      case 38:
        return z.replace(D, "$1" + U.trim());
      case 58:
        return U.trim() + z.replace(D, "$1" + U.trim());
      default:
        if (0 < 1 * C && 0 < z.indexOf("\f")) return z.replace(D, (U.charCodeAt(0) === 58 ? "" : "$1") + U.trim());
    }
    return U + z;
  }
  function a(U, z, C, G) {
    var E = U + ";", X = 2 * z + 3 * C + 4 * G;
    if (X === 944) {
      U = E.indexOf(":", 9) + 1;
      var V = E.substring(U, E.length - 1).trim();
      return V = E.substring(0, U).trim() + V + ";", De === 1 || De === 2 && s(V, 1) ? "-webkit-" + V + V : V;
    }
    if (De === 0 || De === 2 && !s(E, 1)) return E;
    switch (X) {
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
        if (0 < E.indexOf("image-set(", 11)) return E.replace(Se, "$1-webkit-$2") + E;
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
        return V = E.substring(E.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + V + "-webkit-" + E + "-ms-flex-pack" + V + E;
      case 1005:
        return A.test(E) ? E.replace(I, ":-webkit-") + E.replace(I, ":-moz-") + E : E;
      case 1e3:
        switch (V = E.substring(13).trim(), z = V.indexOf("-") + 1, V.charCodeAt(0) + V.charCodeAt(z)) {
          case 226:
            V = E.replace(L, "tb");
            break;
          case 232:
            V = E.replace(L, "tb-rl");
            break;
          case 220:
            V = E.replace(L, "lr");
            break;
          default:
            return E;
        }
        return "-webkit-" + E + "-ms-" + V + E;
      case 1017:
        if (E.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (z = (E = U).length - 10, V = (E.charCodeAt(z) === 33 ? E.substring(0, z) : E).substring(U.indexOf(":", 7) + 1).trim(), X = V.charCodeAt(0) + (V.charCodeAt(7) | 0)) {
          case 203:
            if (111 > V.charCodeAt(8)) break;
          case 115:
            E = E.replace(V, "-webkit-" + V) + ";" + E;
            break;
          case 207:
          case 102:
            E = E.replace(V, "-webkit-" + (102 < X ? "inline-" : "") + "box") + ";" + E.replace(V, "-webkit-" + V) + ";" + E.replace(V, "-ms-" + V + "box") + ";" + E;
        }
        return E + ";";
      case 938:
        if (E.charCodeAt(5) === 45) switch (E.charCodeAt(6)) {
          case 105:
            return V = E.replace("-items", ""), "-webkit-" + E + "-webkit-box-" + V + "-ms-flex-" + V + E;
          case 115:
            return "-webkit-" + E + "-ms-flex-item-" + E.replace(ue, "") + E;
          default:
            return "-webkit-" + E + "-ms-flex-line-pack" + E.replace("align-content", "").replace(ue, "") + E;
        }
        break;
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (He.test(U) === !0) return (V = U.substring(U.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(U.replace("stretch", "fill-available"), z, C, G).replace(":fill-available", ":stretch") : E.replace(V, "-webkit-" + V) + E.replace(V, "-moz-" + V.replace("fill-", "")) + E;
        break;
      case 962:
        if (E = "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E, C + G === 211 && E.charCodeAt(13) === 105 && 0 < E.indexOf("transform", 10)) return E.substring(0, E.indexOf(";", 27) + 1).replace(O, "$1-webkit-$2") + E;
    }
    return E;
  }
  function s(U, z) {
    var C = U.indexOf(z === 1 ? ":" : "{"), G = U.substring(0, z !== 3 ? C : 10);
    return C = U.substring(C + 1, U.length - 1), Ge(z !== 2 ? G : G.replace(Re, "$1"), C, z);
  }
  function l(U, z) {
    var C = a(z, z.charCodeAt(0), z.charCodeAt(1), z.charCodeAt(2));
    return C !== z + ";" ? C.replace($, " or ($1)").substring(4) : "(" + z + ")";
  }
  function f(U, z, C, G, E, X, V, be, ve, ie) {
    for (var fe = 0, ye = z, Ee; fe < Be; ++fe)
      switch (Ee = Fe[fe].call(b, U, ye, C, G, E, X, V, be, ve, ie)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ye = Ee;
      }
    if (ye !== z) return ye;
  }
  function c(U) {
    switch (U) {
      case void 0:
      case null:
        Be = Fe.length = 0;
        break;
      default:
        if (typeof U == "function") Fe[Be++] = U;
        else if (typeof U == "object") for (var z = 0, C = U.length; z < C; ++z)
          c(U[z]);
        else ge = !!U | 0;
    }
    return c;
  }
  function p(U) {
    return U = U.prefix, U !== void 0 && (Ge = null, U ? typeof U != "function" ? De = 1 : (De = 2, Ge = U) : De = 0), p;
  }
  function b(U, z) {
    var C = U;
    if (33 > C.charCodeAt(0) && (C = C.trim()), le = C, C = [le], 0 < Be) {
      var G = f(-1, z, C, C, we, pe, 0, 0, 0, 0);
      G !== void 0 && typeof G == "string" && (z = G);
    }
    var E = t(dt, C, z, 0, 0);
    return 0 < Be && (G = f(-2, E, C, C, we, pe, E.length, 0, 0, 0), G !== void 0 && (E = G)), le = "", de = 0, pe = we = 1, E;
  }
  var y = /^\0+/g, x = /[\0\r\f]/g, I = /: */g, A = /zoo|gra/, O = /([,: ])(transform)/g, R = /,\r+?/g, D = /([\t\r\n ])*\f?&/g, j = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, q = /:(read-only)/g, L = /[svh]\w+-[tblr]{2}/, B = /\(\s*(.*)\s*\)/g, $ = /([\s\S]*?);/g, ue = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, He = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, pe = 1, we = 1, de = 0, De = 1, dt = [], Fe = [], Be = 0, Ge = null, ge = 0, le = "";
  return b.use = c, b.set = p, e !== void 0 && p(e), b;
}
var fd = {
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
function pd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var md = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yi = /* @__PURE__ */ pd(
  function(e) {
    return md.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vo = Vs(), hd = {
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
}, gd = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, vd = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Js = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qo = {};
qo[Vo.ForwardRef] = vd;
qo[Vo.Memo] = Js;
function Xi(e) {
  return Vo.isMemo(e) ? Js : qo[e.$$typeof] || hd;
}
var yd = Object.defineProperty, bd = Object.getOwnPropertyNames, Zi = Object.getOwnPropertySymbols, wd = Object.getOwnPropertyDescriptor, kd = Object.getPrototypeOf, Ki = Object.prototype;
function Qs(e, t, r) {
  if (typeof t != "string") {
    if (Ki) {
      var n = kd(t);
      n && n !== Ki && Qs(e, n, r);
    }
    var a = bd(t);
    Zi && (a = a.concat(Zi(t)));
    for (var s = Xi(e), l = Xi(t), f = 0; f < a.length; ++f) {
      var c = a[f];
      if (!gd[c] && !(r && r[c]) && !(l && l[c]) && !(s && s[c])) {
        var p = wd(t, c);
        try {
          yd(e, c, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var Sd = Qs;
const xd = /* @__PURE__ */ Oo(Sd);
var qe = { env: { NODE_ENV: "production" } };
function Ir() {
  return (Ir = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ji = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, yo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Wo.typeOf(e);
}, xa = Object.freeze([]), Vr = Object.freeze({});
function Ln(e) {
  return typeof e == "function";
}
function bo(e) {
  return qe.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Go(e) {
  return e && typeof e.styledComponentId == "string";
}
var pn = typeof qe < "u" && qe.env !== void 0 && (qe.env.REACT_APP_SC_ATTR || qe.env.SC_ATTR) || "data-styled", Yo = typeof window < "u" && "HTMLElement" in window, Ed = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof qe < "u" && qe.env !== void 0 && (qe.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && qe.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? qe.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && qe.env.REACT_APP_SC_DISABLE_SPEEDY : qe.env.SC_DISABLE_SPEEDY !== void 0 && qe.env.SC_DISABLE_SPEEDY !== "" ? qe.env.SC_DISABLE_SPEEDY !== "false" && qe.env.SC_DISABLE_SPEEDY : qe.env.NODE_ENV !== "production")), Td = qe.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Cd() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function kn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw qe.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Cd.apply(void 0, [Td[e]].concat(r)).trim());
}
var _d = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, s = a.length, l = s; r >= l; ) (l <<= 1) < 0 && kn(16, "" + r);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var f = s; f < l; f++) this.groupSizes[f] = 0;
    }
    for (var c = this.indexOfGroup(r + 1), p = 0, b = n.length; p < b; p++) this.tag.insertRule(c, n[p]) && (this.groupSizes[r]++, c++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), s = a + n;
      this.groupSizes[r] = 0;
      for (var l = a; l < s; l++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], s = this.indexOfGroup(r), l = s + a, f = s; f < l; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), ua = /* @__PURE__ */ new Map(), Ea = /* @__PURE__ */ new Map(), An = 1, ea = function(e) {
  if (ua.has(e)) return ua.get(e);
  for (; Ea.has(An); ) An++;
  var t = An++;
  return qe.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && kn(16, "" + t), ua.set(e, t), Ea.set(t, e), t;
}, Ad = function(e) {
  return Ea.get(e);
}, Od = function(e, t) {
  t >= An && (An = t + 1), ua.set(e, t), Ea.set(t, e);
}, Rd = "style[" + pn + '][data-styled-version="5.3.11"]', Nd = new RegExp("^" + pn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ld = function(e, t, r) {
  for (var n, a = r.split(","), s = 0, l = a.length; s < l; s++) (n = a[s]) && e.registerName(t, n);
}, Pd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, s = r.length; a < s; a++) {
    var l = r[a].trim();
    if (l) {
      var f = l.match(Nd);
      if (f) {
        var c = 0 | parseInt(f[1], 10), p = f[2];
        c !== 0 && (Od(p, c), Ld(e, p, f[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, Id = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, el = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(f) {
    for (var c = f.childNodes, p = c.length; p >= 0; p--) {
      var b = c[p];
      if (b && b.nodeType === 1 && b.hasAttribute(pn)) return b;
    }
  }(r), s = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(pn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = Id();
  return l && n.setAttribute("nonce", l), r.insertBefore(n, s), n;
}, Md = function() {
  function e(r) {
    var n = this.element = el(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var s = document.styleSheets, l = 0, f = s.length; l < f; l++) {
        var c = s[l];
        if (c.ownerNode === a) return c;
      }
      kn(17);
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
}(), Dd = function() {
  function e(r) {
    var n = this.element = el(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(a, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Fd = function() {
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
}(), Qi = Yo, jd = { isServer: !Yo, useCSSOMInjection: !Ed }, tl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Vr), n === void 0 && (n = {}), this.options = Ir({}, jd, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Yo && Qi && (Qi = !1, function(s) {
      for (var l = document.querySelectorAll(Rd), f = 0, c = l.length; f < c; f++) {
        var p = l[f];
        p && p.getAttribute(pn) !== "active" && (Pd(s, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ea(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Ir({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, r = a ? new Fd(l) : s ? new Md(l) : new Dd(l), new _d(r)));
    var r, n, a, s, l;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ea(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ea(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ea(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, s = "", l = 0; l < a; l++) {
        var f = Ad(l);
        if (f !== void 0) {
          var c = r.names.get(f), p = n.getGroup(l);
          if (c && p && c.size) {
            var b = pn + ".g" + l + '[id="' + f + '"]', y = "";
            c !== void 0 && c.forEach(function(x) {
              x.length > 0 && (y += x + ",");
            }), s += "" + p + b + '{content:"' + y + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), $d = /(a)(d)/gi, es = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function wo(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = es(t % 52) + r;
  return (es(t % 52) + r).replace($d, "$1-$2");
}
var nn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, rl = function(e) {
  return nn(5381, e);
};
function zd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ln(r) && !Go(r)) return !1;
  }
  return !0;
}
var Hd = rl("5.3.11"), Bd = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = qe.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && zd(t), this.componentId = r, this.baseHash = nn(Hd, r), this.baseStyle = n, tl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = mn(this.rules, t, r, n).join(""), f = wo(nn(this.baseHash, l) >>> 0);
      if (!r.hasNameForId(a, f)) {
        var c = n(l, "." + f, void 0, a);
        r.insertRules(a, f, c);
      }
      s.push(f), this.staticRulesId = f;
    }
    else {
      for (var p = this.rules.length, b = nn(this.baseHash, n.hash), y = "", x = 0; x < p; x++) {
        var I = this.rules[x];
        if (typeof I == "string") y += I, qe.env.NODE_ENV !== "production" && (b = nn(b, I + x));
        else if (I) {
          var A = mn(I, t, r, n), O = Array.isArray(A) ? A.join("") : A;
          b = nn(b, O + x), y += O;
        }
      }
      if (y) {
        var R = wo(b >>> 0);
        if (!r.hasNameForId(a, R)) {
          var D = n(y, "." + R, void 0, a);
          r.insertRules(a, R, D);
        }
        s.push(R);
      }
    }
    return s.join(" ");
  }, e;
}(), Ud = /^\s*\/\/.*$/gm, Wd = [":", "[", ".", "#"];
function Vd(e) {
  var t, r, n, a, s = Vr, l = s.options, f = l === void 0 ? Vr : l, c = s.plugins, p = c === void 0 ? xa : c, b = new dd(f), y = [], x = /* @__PURE__ */ function(O) {
    function R(D) {
      if (D) try {
        O(D + "}");
      } catch {
      }
    }
    return function(D, j, Z, q, L, B, $, ue, Re, He) {
      switch (D) {
        case 1:
          if (Re === 0 && j.charCodeAt(0) === 64) return O(j + ";"), "";
          break;
        case 2:
          if (ue === 0) return j + "/*|*/";
          break;
        case 3:
          switch (ue) {
            case 102:
            case 112:
              return O(Z[0] + j), "";
            default:
              return j + (He === 0 ? "/*|*/" : "");
          }
        case -2:
          j.split("/*|*/}").forEach(R);
      }
    };
  }(function(O) {
    y.push(O);
  }), I = function(O, R, D) {
    return R === 0 && Wd.indexOf(D[r.length]) !== -1 || D.match(a) ? O : "." + t;
  };
  function A(O, R, D, j) {
    j === void 0 && (j = "&");
    var Z = O.replace(Ud, ""), q = R && D ? D + " " + R + " { " + Z + " }" : Z;
    return t = j, r = R, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), b(D || !R ? "" : R, q);
  }
  return b.use([].concat(p, [function(O, R, D) {
    O === 2 && D.length && D[0].lastIndexOf(r) > 0 && (D[0] = D[0].replace(n, I));
  }, x, function(O) {
    if (O === -2) {
      var R = y;
      return y = [], R;
    }
  }])), A.hash = p.length ? p.reduce(function(O, R) {
    return R.name || kn(15), nn(O, R.name);
  }, 5381).toString() : "", A;
}
var nl = ar.createContext();
nl.Consumer;
var al = ar.createContext(), qd = (al.Consumer, new tl()), ko = Vd();
function Gd() {
  return yn(nl) || qd;
}
function Yd() {
  return yn(al) || ko;
}
var Xd = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, s) {
      s === void 0 && (s = ko);
      var l = n.name + s.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return kn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ko), this.name + t.hash;
  }, e;
}(), Zd = /([A-Z])/, Kd = /([A-Z])/g, Jd = /^ms-/, Qd = function(e) {
  return "-" + e.toLowerCase();
};
function ts(e) {
  return Zd.test(e) ? e.replace(Kd, Qd).replace(Jd, "-ms-") : e;
}
var rs = function(e) {
  return e == null || e === !1 || e === "";
};
function mn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, s = [], l = 0, f = e.length; l < f; l += 1) (a = mn(e[l], t, r, n)) !== "" && (Array.isArray(a) ? s.push.apply(s, a) : s.push(a));
    return s;
  }
  if (rs(e)) return "";
  if (Go(e)) return "." + e.styledComponentId;
  if (Ln(e)) {
    if (typeof (p = e) != "function" || p.prototype && p.prototype.isReactComponent || !t) return e;
    var c = e(t);
    return qe.env.NODE_ENV !== "production" && Wo.isElement(c) && console.warn(bo(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), mn(c, t, r, n);
  }
  var p;
  return e instanceof Xd ? r ? (e.inject(r, n), e.getName(n)) : e : yo(e) ? function b(y, x) {
    var I, A, O = [];
    for (var R in y) y.hasOwnProperty(R) && !rs(y[R]) && (Array.isArray(y[R]) && y[R].isCss || Ln(y[R]) ? O.push(ts(R) + ":", y[R], ";") : yo(y[R]) ? O.push.apply(O, b(y[R], R)) : O.push(ts(R) + ": " + (I = R, (A = y[R]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || I in fd || I.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return x ? [x + " {"].concat(O, ["}"]) : O;
  }(e) : e.toString();
}
var ns = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ef(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Ln(e) || yo(e) ? ns(mn(Ji(xa, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ns(mn(Ji(e, r)));
}
var as = /invalid hook call/i, ta = /* @__PURE__ */ new Set(), tf = function(e, t) {
  if (qe.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        if (as.test(s)) a = !1, ta.delete(r);
        else {
          for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++) f[c - 1] = arguments[c];
          n.apply(void 0, [s].concat(f));
        }
      }, Il(), a && !ta.has(r) && (console.warn(r), ta.add(r));
    } catch (s) {
      as.test(s.message) && ta.delete(r);
    } finally {
      console.error = n;
    }
  }
}, rf = function(e, t, r) {
  return r === void 0 && (r = Vr), e.theme !== r.theme && e.theme || t || r.theme;
}, nf = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, af = /(^-|-$)/g;
function eo(e) {
  return e.replace(nf, "-").replace(af, "");
}
var of = function(e) {
  return wo(rl(e) >>> 0);
};
function ra(e) {
  return typeof e == "string" && (qe.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var So = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, sf = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function lf(e, t, r) {
  var n = e[r];
  So(t) && So(n) ? ol(n, t) : e[r] = t;
}
function ol(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, s = r; a < s.length; a++) {
    var l = s[a];
    if (So(l)) for (var f in l) sf(f) && lf(e, l[f], f);
  }
  return e;
}
var il = ar.createContext();
il.Consumer;
var to = {};
function sl(e, t, r) {
  var n = Go(e), a = !ra(e), s = t.attrs, l = s === void 0 ? xa : s, f = t.componentId, c = f === void 0 ? function(j, Z) {
    var q = typeof j != "string" ? "sc" : eo(j);
    to[q] = (to[q] || 0) + 1;
    var L = q + "-" + of("5.3.11" + q + to[q]);
    return Z ? Z + "-" + L : L;
  }(t.displayName, t.parentComponentId) : f, p = t.displayName, b = p === void 0 ? function(j) {
    return ra(j) ? "styled." + j : "Styled(" + bo(j) + ")";
  }(e) : p, y = t.displayName && t.componentId ? eo(t.displayName) + "-" + t.componentId : t.componentId || c, x = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, I = t.shouldForwardProp;
  n && e.shouldForwardProp && (I = t.shouldForwardProp ? function(j, Z, q) {
    return e.shouldForwardProp(j, Z, q) && t.shouldForwardProp(j, Z, q);
  } : e.shouldForwardProp);
  var A, O = new Bd(r, y, n ? e.componentStyle : void 0), R = O.isStatic && l.length === 0, D = function(j, Z) {
    return function(q, L, B, $) {
      var ue = q.attrs, Re = q.componentStyle, He = q.defaultProps, Se = q.foldedComponentIds, pe = q.shouldForwardProp, we = q.styledComponentId, de = q.target, De = function(G, E, X) {
        G === void 0 && (G = Vr);
        var V = Ir({}, E, { theme: G }), be = {};
        return X.forEach(function(ve) {
          var ie, fe, ye, Ee = ve;
          for (ie in Ln(Ee) && (Ee = Ee(V)), Ee) V[ie] = be[ie] = ie === "className" ? (fe = be[ie], ye = Ee[ie], fe && ye ? fe + " " + ye : fe || ye) : Ee[ie];
        }), [V, be];
      }(rf(L, yn(il), He) || Vr, L, ue), dt = De[0], Fe = De[1], Be = function(G, E, X, V) {
        var be = Gd(), ve = Yd(), ie = E ? G.generateAndInjectStyles(Vr, be, ve) : G.generateAndInjectStyles(X, be, ve);
        return qe.env.NODE_ENV !== "production" && !E && V && V(ie), ie;
      }(Re, $, dt, qe.env.NODE_ENV !== "production" ? q.warnTooManyClasses : void 0), Ge = B, ge = Fe.$as || L.$as || Fe.as || L.as || de, le = ra(ge), U = Fe !== L ? Ir({}, L, {}, Fe) : L, z = {};
      for (var C in U) C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? z.as = U[C] : (pe ? pe(C, Yi, ge) : !le || Yi(C)) && (z[C] = U[C]));
      return L.style && Fe.style !== L.style && (z.style = Ir({}, L.style, {}, Fe.style)), z.className = Array.prototype.concat(Se, we, Be !== we ? Be : null, L.className, Fe.className).filter(Boolean).join(" "), z.ref = Ge, Ml(ge, z);
    }(A, j, Z, R);
  };
  return D.displayName = b, (A = ar.forwardRef(D)).attrs = x, A.componentStyle = O, A.displayName = b, A.shouldForwardProp = I, A.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : xa, A.styledComponentId = y, A.target = n ? e.target : e, A.withComponent = function(j) {
    var Z = t.componentId, q = function(B, $) {
      if (B == null) return {};
      var ue, Re, He = {}, Se = Object.keys(B);
      for (Re = 0; Re < Se.length; Re++) ue = Se[Re], $.indexOf(ue) >= 0 || (He[ue] = B[ue]);
      return He;
    }(t, ["componentId"]), L = Z && Z + "-" + (ra(j) ? j : eo(bo(j)));
    return sl(j, Ir({}, q, { attrs: x, componentId: L }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = n ? ol({}, e.defaultProps, j) : j;
  } }), qe.env.NODE_ENV !== "production" && (tf(b, y), A.warnTooManyClasses = /* @__PURE__ */ function(j, Z) {
    var q = {}, L = !1;
    return function(B) {
      if (!L && (q[B] = !0, Object.keys(q).length >= 200)) {
        var $ = Z ? ' with the id of "' + Z + '"' : "";
        console.warn("Over 200 classes were generated for component " + j + $ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), L = !0, q = {};
      }
    };
  }(b, y)), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), a && xd(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var hn = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Vr), !Wo.isValidElementType(n)) return kn(1, String(n));
    var s = function() {
      return r(n, a, ef.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return t(r, n, Ir({}, a, {}, l));
    }, s.attrs = function(l) {
      return t(r, n, Ir({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, s;
  }(sl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  hn[e] = hn(e);
});
qe.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), qe.env.NODE_ENV !== "production" && qe.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const cf = hn.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, uf = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), df = (e) => !e.startsWith("https://") && !e.startsWith("http://") && uf(e) ? `mailto:${e}` : e, ff = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ur = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: s,
  icon: l,
  body: f,
  eventFormat: c,
  eventLocation: p,
  eventTime: b,
  buttons: y,
  linkLabel: x,
  linkUrl: I,
  tags: A,
  showBorders: O,
  cardLink: R
}) => /* @__PURE__ */ Y.jsx(
  Xo,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: s,
    icon: l,
    body: f,
    eventFormat: c,
    eventLocation: p,
    eventTime: b,
    buttons: y,
    linkLabel: x,
    linkUrl: I,
    tags: A,
    showBorders: O,
    cardLink: R
  }
);
Ur.propTypes = {
  /**
   * Type of card
   */
  type: S.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: S.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: S.bool,
  /**
   * Card title
   */
  title: S.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: S.arrayOf(S.string),
  /**
   * Card body content
   */
  body: S.string,
  /**
   * Event info format
   */
  eventFormat: S.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: S.string,
  /**
   * Event start time
   */
  eventTime: S.string,
  /**
   * Card header image
   */
  image: S.string,
  /**
   * Card header image alt text
   */
  imageAltText: S.string,
  /**
   * Buttons
   */
  buttons: S.arrayOf(
    S.shape({
      ariaLabel: S.string,
      color: S.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: S.arrayOf(S.string),
      href: S.string,
      label: S.string,
      onClick: S.func,
      size: S.oneOf(["default", "small", "xsmall"]),
      target: S.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: S.string,
  linkUrl: S.string,
  /**
   * Tags
   */
  tags: S.arrayOf(
    S.shape({
      ariaLabel: S.string,
      color: S.oneOf(["white", "gray", "dark"]),
      href: S.string,
      label: S.string,
      onClick: S.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: S.bool,
  /**
   * Card link
   */
  cardLink: S.string
};
Ur.defaultProps = {
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
const Xo = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: s,
  icon: l,
  body: f,
  eventFormat: c,
  eventLocation: p,
  eventTime: b,
  buttons: y,
  linkLabel: x,
  linkUrl: I,
  tags: A,
  showBorders: O,
  cardLink: R
}) => {
  const D = Nn("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !O
  });
  return /* @__PURE__ */ Y.jsx(Y.Fragment, { children: /* @__PURE__ */ Y.jsxs(cf, { className: D, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ Y.jsx(
      Ks,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: R,
        title: s
      }
    ),
    !n && l && /* @__PURE__ */ Y.jsx(
      "i",
      {
        className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ Y.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ Y.jsx(
      Ta,
      {
        type: e,
        body: f,
        eventFormat: c,
        eventLocation: p,
        eventTime: b,
        title: s,
        buttons: y,
        linkLabel: x,
        linkUrl: I,
        tags: A,
        cardLink: R
      }
    ) }) : /* @__PURE__ */ Y.jsx(
      Ta,
      {
        type: e,
        body: f,
        eventFormat: c,
        eventLocation: p,
        eventTime: b,
        title: s,
        buttons: y,
        linkLabel: x,
        linkUrl: I,
        tags: A,
        cardLink: R
      }
    )
  ] }) });
};
Xo.propTypes = {
  type: S.oneOf(["default", "degree", "event", "news", "story"]),
  width: S.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: S.bool,
  title: S.string.isRequired,
  icon: S.arrayOf(S.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: S.string,
  eventFormat: S.oneOf(["stack", "inline"]),
  eventLocation: S.string,
  eventTime: S.string,
  image: S.string,
  imageAltText: S.string,
  buttons: S.arrayOf(
    S.shape({
      ariaLabel: S.string,
      color: S.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: S.arrayOf(S.string),
      href: S.string,
      label: S.string,
      onClick: S.func,
      size: S.oneOf(["default", "small", "xsmall"]),
      target: S.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: S.string,
  linkUrl: S.string,
  tags: S.arrayOf(
    S.shape({
      ariaLabel: S.string,
      color: S.oneOf(["white", "gray", "dark"]),
      href: S.string,
      label: S.string,
      onClick: S.func
    })
  ),
  showBorders: S.bool,
  cardLink: S.string
};
Xo.defaultProps = {
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
const Ta = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: s,
  buttons: l,
  linkLabel: f,
  linkUrl: c,
  tags: p,
  cardLink: b
}) => /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
  !!s && /* @__PURE__ */ Y.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ Y.jsx("h3", { className: "card-title", children: b ? /* @__PURE__ */ Y.jsx("a", { href: b, children: s }) : s }) }),
  !!t && /* @__PURE__ */ Y.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: un(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ Y.jsx(
    Zo,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  l && /* @__PURE__ */ Y.jsx("div", { className: "card-buttons", children: l.map((y) => /* @__PURE__ */ Y.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ Y.jsx(
        Bo,
        {
          ariaLabel: y.ariaLabel,
          color: y.color,
          icon: y.icon,
          href: y.href,
          label: y.label,
          onClick: y.onClick,
          size: y.size,
          target: y.target,
          cardTitle: s
        }
      )
    },
    `${y.label}-${y.href}`
  )) }),
  c && f && /* @__PURE__ */ Y.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ Y.jsx(
    fn,
    {
      gaData: {
        ...ff,
        section: s,
        text: f
      },
      children: /* @__PURE__ */ Y.jsx("a", { href: df(c), children: f })
    }
  ) }),
  p && /* @__PURE__ */ Y.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: p.map((y) => (
    // @ts-ignore
    /* @__PURE__ */ Y.jsx(
      Uo,
      {
        ariaLabel: y.ariaLabel,
        color: y.color,
        href: y.href,
        label: y.label,
        onClick: y.onClick,
        cardTitle: s
      },
      `${y.label}-${y.href}`
    )
  )) })
] });
Ta.propTypes = {
  type: S.oneOf(["default", "degree", "event", "news", "story"]),
  body: S.string,
  eventFormat: S.oneOf(["stack", "inline"]),
  eventLocation: S.string,
  eventTime: S.string,
  title: S.string.isRequired,
  buttons: S.arrayOf(
    S.shape({
      ariaLabel: S.string,
      color: S.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: S.arrayOf(S.string),
      href: S.string,
      label: S.string,
      onClick: S.func,
      size: S.oneOf(["default", "small", "xsmall"]),
      target: S.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: S.string,
  linkUrl: S.string,
  tags: S.arrayOf(
    S.shape({
      ariaLabel: S.string,
      color: S.oneOf(["white", "gray", "dark"]),
      href: S.string,
      label: S.string,
      onClick: S.func
    })
  ),
  cardLink: S.string
};
Ta.defaultProps = {
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
const Zo = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ Y.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: un(t) })
  ] }),
  r && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: un(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
  t && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: un(t) })
  ] }) }),
  r && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx("span", { children: /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: un(r)
      }
    ) })
  ] }) })
] });
Zo.propTypes = {
  eventFormat: S.oneOf(["stack", "inline"]),
  eventLocation: S.string,
  eventTime: S.string
};
Zo.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const pf = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, ll = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ Y.jsx(
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
ll.propTypes = {
  children: S.oneOfType([
    S.element,
    S.arrayOf(S.element)
  ]).isRequired
};
const cl = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ Y.jsx(fn, { gaData: pf, children: /* @__PURE__ */ Y.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ Y.jsx(ll, { children: t });
};
cl.propTypes = {
  buttonCount: S.number.isRequired
};
S.arrayOf(S.string).isRequired, S.func;
const ul = ({ onClick: e = () => null }) => /* @__PURE__ */ Y.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
ul.propTypes = {
  onClick: S.func
};
const dl = ({ onClick: e = () => null }) => /* @__PURE__ */ Y.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ Y.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
dl.propTypes = {
  onClick: S.func
};
const os = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, fl = ({ children: e = null }) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
fl.propTypes = {
  children: S.arrayOf(S.element)
};
const pl = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ Y.jsxs(fl, { children: [
  /* @__PURE__ */ Y.jsx(fn, { gaData: { ...os, text: "left chevron" }, children: /* @__PURE__ */ Y.jsx(dl, { onClick: e }) }),
  t,
  /* @__PURE__ */ Y.jsx(fn, { gaData: { ...os, text: "right chevron" }, children: /* @__PURE__ */ Y.jsx(ul, { onClick: e }) })
] });
pl.propTypes = {
  children: S.element,
  onClick: S.func
};
const ml = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ Y.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ Y.jsx("ul", { className: "glide__slides", children: t });
};
ml.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: S.arrayOf(S.object)
};
function is(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? is(Object(r), !0).forEach(function(n) {
      hf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : is(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function da(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? da = function(t) {
    return typeof t;
  } : da = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, da(e);
}
function Ra(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Na(e, t, r) {
  return t && mf(e.prototype, t), e;
}
function hf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && xo(e, t);
}
function gn(e) {
  return gn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gn(e);
}
function xo(e, t) {
  return xo = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, xo(e, t);
}
function vf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bf(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yf(e);
}
function wf(e) {
  var t = vf();
  return function() {
    var n = gn(e), a;
    if (t) {
      var s = gn(this).constructor;
      a = Reflect.construct(n, arguments, s);
    } else
      a = n.apply(this, arguments);
    return bf(this, a);
  };
}
function kf(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = gn(e), e !== null); )
    ;
  return e;
}
function fa() {
  return typeof Reflect < "u" && Reflect.get ? fa = Reflect.get : fa = function(t, r, n) {
    var a = kf(t, r);
    if (a) {
      var s = Object.getOwnPropertyDescriptor(a, r);
      return s.get ? s.get.call(arguments.length < 3 ? t : n) : s.value;
    }
  }, fa.apply(this, arguments);
}
var Sf = {
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
function Dr(e) {
  console.error("[Glide warn]: ".concat(e));
}
function _t(e) {
  return parseInt(e);
}
function xf(e) {
  return parseFloat(e);
}
function Eo(e) {
  return typeof e == "string";
}
function vn(e) {
  var t = da(e);
  return t === "function" || t === "object" && !!e;
}
function Ca(e) {
  return typeof e == "function";
}
function hl(e) {
  return typeof e > "u";
}
function To(e) {
  return e.constructor === Array;
}
function Ef(e, t, r) {
  var n = {};
  for (var a in t)
    Ca(t[a]) ? n[a] = t[a](e, n, r) : Dr("Extension must be a function");
  for (var s in n)
    Ca(n[s].mount) && n[s].mount();
  return n;
}
function pt(e, t, r) {
  Object.defineProperty(e, t, r);
}
function Tf(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Co(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = ss(ss({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var Cf = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ra(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return Na(e, [{
    key: "on",
    value: function(r, n) {
      if (To(r)) {
        for (var a = 0; a < r.length; a++)
          this.on(r[a], n);
        return;
      }
      this.hop.call(this.events, r) || (this.events[r] = []);
      var s = this.events[r].push(n) - 1;
      return {
        remove: function() {
          delete this.events[r][s];
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
      if (To(r)) {
        for (var a = 0; a < r.length; a++)
          this.emit(r[a], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(s) {
        s(n || {});
      });
    }
  }]), e;
}(), _f = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Ra(this, e), this._c = {}, this._t = [], this._e = new Cf(), this.disabled = !1, this.selector = t, this.settings = Co(Sf, r), this.index = this.settings.startAt;
  }
  return Na(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), vn(r) ? this._c = Ef(this, r, this._e) : Dr("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return To(r) ? this._t = r : Dr("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Co(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
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
      vn(r) ? this._o = r : Dr("Options must be an `object` instance.");
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
      this._i = _t(r);
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
function Af(e, t, r) {
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
    make: function(p) {
      var b = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = p, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        b.isStart() && r.emit("run.start", b.move), b.isEnd() && r.emit("run.end", b.move), b.isOffset() && (b._o = !1, r.emit("run.offset", b.move)), r.emit("run.after", b.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var p = this.move, b = this.length, y = p.steps, x = p.direction, I = 1;
      if (x === "=") {
        if (e.settings.bound && _t(y) > b) {
          e.index = b;
          return;
        }
        e.index = y;
        return;
      }
      if (x === ">" && y === ">") {
        e.index = b;
        return;
      }
      if (x === "<" && y === "<") {
        e.index = 0;
        return;
      }
      if (x === "|" && (I = e.settings.perView || 1), x === ">" || x === "|" && y === ">") {
        var A = a(I);
        A > b && (this._o = !0), e.index = s(A, I);
        return;
      }
      if (x === "<" || x === "|" && y === "<") {
        var O = l(I);
        O < 0 && (this._o = !0), e.index = f(O, I);
        return;
      }
      Dr("Invalid direction pattern [".concat(x).concat(y, "] has been used"));
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
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return p ? this._o ? p === "|>" ? this.move.direction === "|" && this.move.steps === ">" : p === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === p : !1 : this._o;
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
  function a(c) {
    var p = e.index;
    return e.isType("carousel") ? p + c : p + (c - p % c);
  }
  function s(c, p) {
    var b = n.length;
    return c <= b ? c : e.isType("carousel") ? c - (b + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? b : 0 : n.isBound() ? b : Math.floor(b / p) * p;
  }
  function l(c) {
    var p = e.index;
    if (e.isType("carousel"))
      return p - c;
    var b = Math.ceil(p / c);
    return (b - 1) * c;
  }
  function f(c, p) {
    var b = n.length;
    return c >= 0 ? c : e.isType("carousel") ? c + (b + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? b : Math.floor(b / p) * p : 0;
  }
  return pt(n, "move", {
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
    set: function(p) {
      var b = p.substr(1);
      this._m = {
        direction: p.substr(0, 1),
        steps: b ? _t(b) ? _t(b) : b : 0
      };
    }
  }), pt(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var p = e.settings, b = t.Html.slides.length;
      return this.isBound() ? b - 1 - (_t(p.perView) - 1) + _t(p.focusAt) : b - 1;
    }
  }), pt(n, "offset", {
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
function ls() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function La(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, s, l, f = 0, c = function() {
    f = r.leading === !1 ? 0 : ls(), n = null, l = e.apply(a, s), n || (a = s = null);
  }, p = function() {
    var y = ls();
    !f && r.leading === !1 && (f = y);
    var x = t - (y - f);
    return a = this, s = arguments, x <= 0 || x > t ? (n && (clearTimeout(n), n = null), f = y, l = e.apply(a, s), n || (a = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(c, x)), l;
  };
  return p.cancel = function() {
    clearTimeout(n), f = 0, n = a = s = null;
  }, p;
}
var na = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Of(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(s) {
      for (var l = 0, f = s.length; l < f; l++) {
        var c = s[l].style, p = t.Direction.value;
        l !== 0 ? c[na[p][0]] = "".concat(this.value / 2, "px") : c[na[p][0]] = "", l !== s.length - 1 ? c[na[p][1]] = "".concat(this.value / 2, "px") : c[na[p][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(s) {
      for (var l = 0, f = s.length; l < f; l++) {
        var c = s[l].style;
        c.marginLeft = "", c.marginRight = "";
      }
    }
  };
  return pt(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return _t(e.settings.gap);
    }
  }), pt(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), pt(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var s = e.settings.perView;
      return n.value * (s - 1) / s;
    }
  }), r.on(["build.after", "update"], La(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function gl(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function _o(e) {
  return Array.prototype.slice.call(e);
}
var Rf = '[data-glide-el="track"]';
function Nf(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Rf), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = _o(this.wrapper.children).filter(function(s) {
        return !s.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return pt(n, "root", {
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
    set: function(s) {
      Eo(s) && (s = document.querySelector(s)), s !== null ? n._r = s : Dr("Root element must be a existing Html node");
    }
  }), pt(n, "track", {
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
    set: function(s) {
      n._t = s;
    }
  }), pt(n, "wrapper", {
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
function Lf(e, t, r) {
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
  return pt(n, "value", {
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
    set: function(s) {
      vn(s) ? (s.before = _t(s.before), s.after = _t(s.after)) : s = _t(s), n._v = s;
    }
  }), pt(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var s = n.value, l = e.settings.perView;
      return vn(s) ? s.before / l + s.after / l : s * 2 / l;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Pf(e, t, r) {
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
      var s = this, l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = l, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: s.value
        });
      });
    }
  };
  return pt(n, "offset", {
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
    set: function(s) {
      n._o = hl(s) ? 0 : _t(s);
    }
  }), pt(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), pt(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var s = this.offset, l = this.translate;
      return t.Direction.is("rtl") ? l + s : l - s;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function If(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var s = "".concat(this.slideWidth, "px"), l = t.Html.slides, f = 0; f < l.length; f++)
        l[f].style.width = s;
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
      for (var s = t.Html.slides, l = 0; l < s.length; l++)
        s[l].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return pt(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), pt(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), pt(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), pt(n, "slideWidth", {
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
function Mf(e, t, r) {
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
      var s = e.settings.classes, l = t.Html.slides[e.index];
      l && (l.classList.add(s.slide.active), gl(l).forEach(function(f) {
        f.classList.remove(s.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var s = e.settings.classes, l = s.type, f = s.slide;
      t.Html.root.classList.remove(l[e.settings.type]), t.Html.slides.forEach(function(c) {
        c.classList.remove(f.active);
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
function Df(e, t, r) {
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
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = t.Html.slides, f = e.settings, c = f.perView, p = f.classes, b = f.cloningRatio;
      if (l.length > 0)
        for (var y = +!!e.settings.peek, x = c + y + Math.round(c / 2), I = l.slice(0, x).reverse(), A = l.slice(x * -1), O = 0; O < Math.max(b, Math.floor(c / l.length)); O++) {
          for (var R = 0; R < I.length; R++) {
            var D = I[R].cloneNode(!0);
            D.classList.add(p.slide.clone), s.push(D);
          }
          for (var j = 0; j < A.length; j++) {
            var Z = A[j].cloneNode(!0);
            Z.classList.add(p.slide.clone), s.unshift(Z);
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
      for (var s = this.items, l = t.Html, f = l.wrapper, c = l.slides, p = Math.floor(s.length / 2), b = s.slice(0, p).reverse(), y = s.slice(p * -1).reverse(), x = "".concat(t.Sizes.slideWidth, "px"), I = 0; I < y.length; I++)
        f.appendChild(y[I]);
      for (var A = 0; A < b.length; A++)
        f.insertBefore(b[A], c[0]);
      for (var O = 0; O < s.length; O++)
        s[O].style.width = x;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var s = this.items, l = 0; l < s.length; l++)
        t.Html.wrapper.removeChild(s[l]);
    }
  };
  return pt(n, "grow", {
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
var Gr = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ra(this, e), this.listeners = t;
  }
  return Na(e, [{
    key: "on",
    value: function(r, n, a) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Eo(r) && (r = [r]);
      for (var l = 0; l < r.length; l++)
        this.listeners[r[l]] = a, n.addEventListener(r[l], this.listeners[r[l]], s);
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
      Eo(r) && (r = [r]);
      for (var s = 0; s < r.length; s++)
        n.removeEventListener(r[s], this.listeners[r[s]], a);
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
function Ff(e, t, r) {
  var n = new Gr(), a = {
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
      n.on("resize", window, La(function() {
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
var jf = ["ltr", "rtl"], $f = {
  ">": "<",
  "<": ">",
  "=": "="
};
function zf(e, t, r) {
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
    resolve: function(s) {
      var l = s.slice(0, 1);
      return this.is("rtl") ? s.split(l).join($f[l]) : s;
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
  return pt(n, "value", {
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
    set: function(s) {
      jf.indexOf(s) > -1 ? n._v = s : Dr("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Hf(e, t) {
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
function Bf(e, t) {
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
function Uf(e, t) {
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
function Wf(e, t) {
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
        return vn(a) ? n - a.before : n - a;
      }
      return n;
    }
  };
}
function Vf(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = t.Gaps.value, s = t.Sizes.width, l = e.settings.focusAt, f = t.Sizes.slideWidth;
      return l === "center" ? n - (s / 2 - f / 2) : n - f * l - a * l;
    }
  };
}
function qf(e, t, r) {
  var n = [Bf, Uf, Wf, Vf].concat(e._t, [Hf]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(s) {
      for (var l = 0; l < n.length; l++) {
        var f = n[l];
        Ca(f) && Ca(f().modify) ? s = f(e, t, r).modify(s) : Dr("Transformer should be a function that returns an object with `modify()` method");
      }
      return s;
    }
  };
}
function Gf(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(s) {
      var l = qf(e, t).mutate(s), f = "translate3d(".concat(-1 * l, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = f, t.Html.wrapper.style.webkitTransform = f, t.Html.wrapper.style.transform = f;
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
      var s = t.Sizes.length, l = e.index, f = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? s + (l - f) : (l + f) % s;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var s = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? s * -1 : s;
    }
  };
  return r.on("move", function(a) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(a.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(s - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function Yf(e, t, r) {
  var n = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(l) {
      var f = e.settings;
      return n ? "".concat(l, " 0ms ").concat(f.animationTimingFunc) : "".concat(l, " ").concat(this.duration, "ms ").concat(f.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(l);
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
    after: function(l) {
      setTimeout(function() {
        l();
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
  return pt(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var l = e.settings;
      return e.isType("slider") && t.Run.offset ? l.rewindDuration : l.animationDuration;
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
var vl = !1;
try {
  var cs = Object.defineProperty({}, "passive", {
    get: function() {
      vl = !0;
    }
  });
  window.addEventListener("testPassive", null, cs), window.removeEventListener("testPassive", null, cs);
} catch {
}
var Ao = vl, aa = ["touchstart", "mousedown"], us = ["touchmove", "mousemove"], ds = ["touchend", "touchcancel", "mouseup", "mouseleave"], fs = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Xf(e, t, r) {
  var n = new Gr(), a = 0, s = 0, l = 0, f = !1, c = Ao ? {
    passive: !0
  } : !1, p = {
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
    start: function(y) {
      if (!f && !e.disabled) {
        this.disable();
        var x = this.touches(y);
        a = null, s = _t(x.pageX), l = _t(x.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(y) {
      if (!e.disabled) {
        var x = e.settings, I = x.touchAngle, A = x.touchRatio, O = x.classes, R = this.touches(y), D = _t(R.pageX) - s, j = _t(R.pageY) - l, Z = Math.abs(D << 2), q = Math.abs(j << 2), L = Math.sqrt(Z + q), B = Math.sqrt(q);
        if (a = Math.asin(B / L), a * 180 / Math.PI < I)
          y.stopPropagation(), t.Move.make(D * xf(A)), t.Html.root.classList.add(O.dragging), r.emit("swipe.move");
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
    end: function(y) {
      if (!e.disabled) {
        var x = e.settings, I = x.perSwipe, A = x.touchAngle, O = x.classes, R = this.touches(y), D = this.threshold(y), j = R.pageX - s, Z = a * 180 / Math.PI;
        this.enable(), j > D && Z < A ? t.Run.make(t.Direction.resolve("".concat(I, "<"))) : j < -D && Z < A ? t.Run.make(t.Direction.resolve("".concat(I, ">"))) : t.Move.make(), t.Html.root.classList.remove(O.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var y = this, x = e.settings, I = x.swipeThreshold, A = x.dragThreshold;
      I && n.on(aa[0], t.Html.wrapper, function(O) {
        y.start(O);
      }, c), A && n.on(aa[1], t.Html.wrapper, function(O) {
        y.start(O);
      }, c);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(aa[0], t.Html.wrapper, c), n.off(aa[1], t.Html.wrapper, c);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var y = this;
      n.on(us, t.Html.wrapper, La(function(x) {
        y.move(x);
      }, e.settings.throttle), c);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(us, t.Html.wrapper, c);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var y = this;
      n.on(ds, t.Html.wrapper, function(x) {
        y.end(x);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(ds, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(y) {
      return fs.indexOf(y.type) > -1 ? y : y.touches[0] || y.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(y) {
      var x = e.settings;
      return fs.indexOf(y.type) > -1 ? x.dragThreshold : x.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return f = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return f = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    p.unbindSwipeStart(), p.unbindSwipeMove(), p.unbindSwipeEnd(), n.destroy();
  }), p;
}
function Zf(e, t, r) {
  var n = new Gr(), a = {
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
    dragstart: function(l) {
      l.preventDefault();
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
function Kf(e, t, r) {
  var n = new Gr(), a = !1, s = !1, l = {
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
    click: function(c) {
      s && (c.stopPropagation(), c.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (s = !0, !a) {
        for (var c = 0; c < this.items.length; c++)
          this.items[c].draggable = !1;
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
        for (var c = 0; c < this.items.length; c++)
          this.items[c].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return pt(l, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return l._a;
    }
  }), r.on("swipe.move", function() {
    l.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      l.attach();
    });
  }), r.on("destroy", function() {
    l.attach(), l.unbind(), n.destroy();
  }), l;
}
var Jf = '[data-glide-el="controls[nav]"]', Ko = '[data-glide-el^="controls"]', Qf = "".concat(Ko, ' [data-glide-dir*="<"]'), ep = "".concat(Ko, ' [data-glide-dir*=">"]');
function tp(e, t, r) {
  var n = new Gr(), a = Ao ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Jf), this._c = t.Html.root.querySelectorAll(Ko), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Qf),
        next: t.Html.root.querySelectorAll(ep)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var f = 0; f < this._n.length; f++)
        this.addClass(this._n[f].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var f = 0; f < this._n.length; f++)
        this.removeClass(this._n[f].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(f) {
      var c = e.settings, p = f[e.index];
      p && (p.classList.add(c.classes.nav.active), gl(p).forEach(function(b) {
        b.classList.remove(c.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(f) {
      var c = f[e.index];
      c == null || c.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var f = s._arrowControls.next, c = s._arrowControls.previous;
        this.resetArrowState(f, c), e.index === 0 && this.disableArrow(c), e.index === t.Run.length && this.disableArrow(f);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var f = e.settings, c = arguments.length, p = new Array(c), b = 0; b < c; b++)
        p[b] = arguments[b];
      p.forEach(function(y) {
        _o(y).forEach(function(x) {
          x.classList.remove(f.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var f = e.settings, c = arguments.length, p = new Array(c), b = 0; b < c; b++)
        p[b] = arguments[b];
      p.forEach(function(y) {
        _o(y).forEach(function(x) {
          x.classList.add(f.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var f = 0; f < this._c.length; f++)
        this.bind(this._c[f].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var f = 0; f < this._c.length; f++)
        this.unbind(this._c[f].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(f) {
      for (var c = 0; c < f.length; c++)
        n.on("click", f[c], this.click), n.on("touchstart", f[c], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(f) {
      for (var c = 0; c < f.length; c++)
        n.off(["click", "touchstart"], f[c]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(f) {
      !Ao && f.type === "touchstart" && f.preventDefault();
      var c = f.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(c));
    }
  };
  return pt(s, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return s._c;
    }
  }), r.on(["mount.after", "move.after"], function() {
    s.setActive();
  }), r.on(["mount.after", "run"], function() {
    s.setArrowState();
  }), r.on("destroy", function() {
    s.removeBindings(), s.removeActive(), n.destroy();
  }), s;
}
function rp(e, t, r) {
  var n = new Gr(), a = {
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
    press: function(l) {
      var f = e.settings.perSwipe, c = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(l.code) && t.Run.make(t.Direction.resolve("".concat(f).concat(c[l.code])));
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
function np(e, t, r) {
  var n = new Gr(), a = {
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
      var l = this;
      this._e && (this.enable(), e.settings.autoplay && hl(this._i) && (this._i = setInterval(function() {
        l.stop(), t.Run.make(">"), l.start(), r.emit("autoplay");
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
      var l = this;
      n.on("mouseover", t.Html.root, function() {
        l._e && l.stop();
      }), n.on("mouseout", t.Html.root, function() {
        l._e && l.start();
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
  return pt(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var l = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return _t(l || e.settings.autoplay);
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
function ps(e) {
  return vn(e) ? Tf(e) : (Dr("Breakpoints option must be an object"), {});
}
function ap(e, t, r) {
  var n = new Gr(), a = e.settings, s = ps(a.breakpoints), l = Object.assign({}, a), f = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(p) {
      if (typeof window.matchMedia < "u") {
        for (var b in p)
          if (p.hasOwnProperty(b) && window.matchMedia("(max-width: ".concat(b, "px)")).matches)
            return p[b];
      }
      return l;
    }
  };
  return Object.assign(a, f.match(s)), n.on("resize", window, La(function() {
    e.settings = Co(a, f.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = ps(s), l = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), f;
}
var op = {
  // Required
  Html: Nf,
  Translate: Gf,
  Transition: Yf,
  Direction: zf,
  Peek: Lf,
  Sizes: If,
  Gaps: Of,
  Move: Pf,
  Clones: Df,
  Resize: Ff,
  Build: Mf,
  Run: Af,
  // Optional
  Swipe: Xf,
  Images: Zf,
  Anchors: Kf,
  Controls: tp,
  Keyboard: rp,
  Autoplay: np,
  Breakpoints: ap
}, ip = /* @__PURE__ */ function(e) {
  gf(r, e);
  var t = wf(r);
  function r() {
    return Ra(this, r), t.apply(this, arguments);
  }
  return Na(r, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return fa(gn(r.prototype), "mount", this).call(this, Object.assign({}, op, a));
    }
  }]), r;
}(_f);
function sp(e) {
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
function lp(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: s, perViewLg: l } = sp(e), f = r ? 24 : 0, c = r ? { before: 48, after: 48 } : 0, p = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: f,
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
    perView: l,
    // Can be overwritten at breakpoints
    peek: p,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: c
      },
      768: {
        // BS4 md
        perView: s,
        peek: c
      },
      992: {
        // BS4 lg
        perView: l,
        peek: c
      },
      1260: {
        // BS4 xl
        perView: l,
        peek: c
      },
      1400: {
        perView: l,
        peek: p
      },
      1920: {
        perView: l,
        peek: p
      }
    }
  };
}
function cp(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), l = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const f = ["slider-start", "slider-mid", "slider-end"], c = "glide__arrow--disabled";
  s == null || s.classList.remove(...f), l == null || l.classList.remove(...f), t === 0 ? (s == null || s.classList.add("slider-start"), l == null || l.classList.add("slider-start"), n.classList.add(c), a.classList.remove(c)) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), l == null || l.classList.add("slider-end"), n.classList.remove(c), a.classList.add(c)) : (s == null || s.classList.add("slider-mid"), l == null || l.classList.add("slider-mid"), n.classList.remove(c), a.classList.remove(c));
}
function up(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((l, f) => {
    f < a || f > s ? (l.setAttribute("aria-hidden", "true"), l.setAttribute("tabindex", "-1"), l.setAttribute("inert", "")) : (l.setAttribute("aria-hidden", "false"), l.removeAttribute("tabindex"), l.removeAttribute("inert"));
  });
}
function dp({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: s = !0,
  isDraggable: l
}) {
  const f = lp(t, n, s, l), c = new ip(`#${e}`, f);
  let p = document.querySelector(`#${e}`);
  return p.addEventListener("keyup", (b) => {
    const y = b;
    y.keyCode === 39 ? c.go(">") : y.keyCode === 37 ? c.go("<") : y.keyCode === 13 && c.go(document.activeElement.dataset.glideDir);
  }), c.on("build.before", () => {
    p = document.querySelector(`#${e}`), p && p.classList.add("slider-start");
  }), c.on("move", () => {
    if (p = document.querySelector(`#${e}`), !p) return;
    const b = c.index;
    up(p, b, t);
    const y = p.querySelector(".navigation-slider"), x = p.querySelector(".image-navigator-images");
    if (y && x) {
      const I = y.querySelectorAll(
        ".bullet-image-container"
      ), A = y.clientWidth, O = 82, R = I[b], D = x.getBoundingClientRect().x, j = y.getBoundingClientRect().x - D, Z = R.getBoundingClientRect().x - D, q = R.getBoundingClientRect().x + R.getBoundingClientRect().width - D;
      if (b === 0 || Z <= 0 + O)
        y.style.left = `${j - Z + O}px`;
      else if (q >= A - O) {
        const L = q - A;
        y.style.left = `${j - L - O}px`;
      }
    }
    cp(p, b, r), p.setAttribute("data-current-index", b), a && a(b);
  }), c.mount(), c;
}
function fp(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const yl = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: s,
  role: l,
  ariaLabelledBy: f,
  isFullWidth: c,
  removeSideBackground: p = !1,
  hasNavButtons: b = !0,
  hasPositionIndicators: y = !0,
  imageAutoSize: x = !0,
  onItemClick: I = () => null,
  hasPeek: A = !0,
  isDraggable: O = !0,
  hasShadow: R = !0
}) => {
  const D = `glide-${Math.ceil(Math.random() * 1e4)}`, j = fp(n.length, e);
  return In(() => {
    dp({
      instanceName: D,
      perView: e,
      buttonCount: j,
      isFullWidth: c,
      onItemClick: I,
      hasPeek: A,
      isDraggable: O
    });
  }, [
    D,
    e,
    j,
    c,
    I,
    A,
    O
  ]), /* @__PURE__ */ Y.jsxs(
    "div",
    {
      role: l,
      "aria-labelledby": f,
      className: `glide ${a}`,
      id: D,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": p,
      "data-image-auto-size": x,
      "data-has-shadow": R,
      children: [
        /* @__PURE__ */ Y.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ Y.jsx(ml, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ Y.jsx(s, { instanceName: D })
        ) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
          y && /* @__PURE__ */ Y.jsx(cl, { buttonCount: j }),
          b && /* @__PURE__ */ Y.jsx(pl, {})
        ] })
      ]
    }
  );
};
yl.propTypes = {
  perView: S.number,
  width: S.string,
  maxWidth: S.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: S.arrayOf(S.object).isRequired,
  cssClass: S.string,
  CustomNavComponent: S.func,
  role: S.string,
  ariaLabelledBy: S.string,
  onItemClick: S.func,
  isFullWidth: S.bool,
  removeSideBackground: S.bool,
  hasNavButtons: S.bool,
  hasPositionIndicators: S.bool,
  imageAutoSize: S.bool,
  hasPeek: S.bool,
  isDraggable: S.bool,
  hasShadow: S.bool
};
const pp = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: s,
  eventTime: l,
  buttons: f,
  linkLabel: c,
  linkUrl: p,
  tags: b
}, y, x, I) => {
  var A;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ Y.jsx(
      Ur,
      {
        type: y,
        horizontal: x,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: I,
        eventLocation: s,
        eventTime: l,
        buttons: f,
        linkLabel: c,
        linkUrl: p || ((A = f == null ? void 0 : f[0]) == null ? void 0 : A.href),
        tags: b
      }
    )
  };
}, bl = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: s = void 0,
  maxWidth: l = void 0,
  imageAutoSize: f = !0
}) => {
  const c = parseInt(`${e}`, 10), [p, b] = Dl(c), y = 1024, x = 768;
  In(() => {
    const O = () => {
      const R = window.innerWidth;
      let D;
      switch (c) {
        case 3:
          R > y ? D = 3 : R > x ? D = 2 : D = 1;
          break;
        case 2:
          D = R < x ? 1 : 2;
          break;
        default:
          D = 1;
          break;
      }
      b(D);
    };
    return O(), window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, [c]);
  const I = t.map(
    (O) => pp(O, r, a, n)
  ), A = t.length > p;
  return /* @__PURE__ */ Y.jsx(
    yl,
    {
      perView: +p,
      maxWidth: l,
      width: s,
      carouselItems: I,
      cssClass: "aligned-carousel",
      imageAutoSize: f,
      removeSideBackground: t.length <= p,
      hasPositionIndicators: A,
      hasNavButtons: A,
      isDraggable: A,
      hasShadow: !0
    }
  );
};
bl.propTypes = {
  perView: S.string.isRequired,
  cardItems: S.arrayOf(
    S.shape({
      title: S.string.isRequired,
      content: S.string,
      eventLocation: S.string,
      eventTime: S.string,
      image: S.string,
      imageAltText: S.string,
      buttons: Ur.propTypes.buttons,
      linkLabel: S.string,
      linkUrl: S.string,
      tags: Ur.propTypes.tags
    })
  ).isRequired,
  cardType: Ur.propTypes.type,
  cardEventFormat: Ur.propTypes.eventFormat,
  cardHorizontal: Ur.propTypes.horizontal,
  width: S.string,
  maxWidth: S.string,
  imageAutoSize: S.bool
};
const wl = S.shape({
  color: S.oneOf(["white", "dark"]),
  text: S.string
}), kl = S.shape({
  color: S.oneOf(["gold", "maroon", "gray", "dark"]),
  text: S.string
}), Sl = S.shape({
  color: S.oneOf(["gold", "maroon", "gray", "dark"]),
  text: S.string,
  size: S.string
}), xl = S.shape({
  url: S.string,
  filters: S.string
});
S.shape({
  header: wl,
  ctaButton: kl,
  dataSource: xl,
  maxItems: S.number
});
const Pn = {
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
}, ms = ["newsUnits", "interests", "audiences", "eventTypes"], mp = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < ms.length; n += 1) {
    const a = ms[n];
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], c = (e[a] || "").match(new RegExp(l, "gi"));
      if ((c == null ? void 0 : c.length) > 0) return !0;
    }
  }
  return !1;
}, hs = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, hp = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_url,
  title: hs(e.title, 80),
  content: hs(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), sn = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: a
}) => {
  var f;
  const s = (f = n.filters) == null ? void 0 : f.replace(/_/g, " "), l = { ...n, filters: s };
  return /* @__PURE__ */ Y.jsx(
    ku,
    {
      renderHeader: t && r ? /* @__PURE__ */ Y.jsx(
        Su,
        {
          header: t,
          ctaButton: r,
          defaultProps: Pn
        }
      ) : null,
      renderBody: /* @__PURE__ */ Y.jsx(wu, { children: e }),
      dataTransformer: hp,
      dataFilter: mp,
      dataSource: l,
      defaultProps: Pn,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
sn.propTypes = {
  header: wl,
  ctaButton: kl,
  dataSource: xl,
  maxItems: S.number,
  children: S.element
};
const gp = hn.section``, vp = (e, t, r) => ({
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
}), yp = ({ cardButton: e }) => {
  const { feeds: t } = yn(zo), r = t == null ? void 0 : t.map(
    (n, a) => vp(n, a, e)
  );
  return /* @__PURE__ */ Y.jsx(gp, { children: /* @__PURE__ */ Y.jsx(
    bl,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, El = ({ cardButton: e, ...t }) => (In(() => {
  typeof window < "u" && Ho({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ Y.jsx(sn, { ...t, children: /* @__PURE__ */ Y.jsx(
  yp,
  {
    cardButton: { ...Pn.cardButton, ...e }
  }
) }));
El.propTypes = sn.propTypes;
const Tl = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), bp = hn.section`
  .c-card {
    height: 100%;
  }
`, wp = (e, t) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ Y.jsx(
      Us,
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
        tags: Tl(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), kp = ({ cardButton: e }) => {
  const { feeds: t } = yn(zo);
  return /* @__PURE__ */ Y.jsx(bp, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Y.jsx(ar.Fragment, { children: wp(r, e) }, n)
  )) });
}, Cl = ({ cardButton: e, ...t }) => (In(() => {
  typeof window < "u" && Ho({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Y.jsx(sn, { ...t, children: /* @__PURE__ */ Y.jsx(
  kp,
  {
    cardButton: { ...Pn.cardButton, ...e }
  }
) }));
Cl.propTypes = {
  ...sn.propTypes,
  cardButton: Sl
};
const Sp = hn.section``, xp = (e, t) => /* @__PURE__ */ Y.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ Y.jsx(
  Us,
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
    tags: Tl(e == null ? void 0 : e.interests)
  }
) }, e.id), Ep = ({ cardButton: e }) => {
  const { feeds: t } = yn(zo);
  return /* @__PURE__ */ Y.jsx(Sp, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ Y.jsx(ar.Fragment, { children: xp(r, e) }, n)
  )) });
}, _l = ({ cardButton: e, ...t }) => (In(() => {
  typeof window < "u" && Ho({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Y.jsx(sn, { ...t, children: /* @__PURE__ */ Y.jsx(
  Ep,
  {
    cardButton: { ...Pn.cardButton, ...e }
  }
) }));
_l.propTypes = { ...sn.propTypes, feedCardButtonShape: Sl };
var Al, gs = jl;
Al = gs.createRoot, gs.hydrateRoot;
const Jo = (e, t, r) => {
  Al(r).render(ar.createElement(e, t));
}, _p = ({ targetSelector: e, props: t }) => {
  Jo(Cl, t, document.querySelector(e));
}, Ap = ({ targetSelector: e, props: t }) => {
  Jo(_l, t, document.querySelector(e));
}, Op = ({ targetSelector: e, props: t }) => {
  Jo(El, t, document.querySelector(e));
};
export {
  El as CardCarouselNews,
  Cl as CardGridNews,
  _l as CardListlNews,
  Op as initCardCarouselNewsComponent,
  _p as initCardGridNewsComponent,
  Ap as initCardListNewsComponent
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
