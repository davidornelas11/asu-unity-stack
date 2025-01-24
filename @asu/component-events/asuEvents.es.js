import * as $e from "react";
import ht, { useRef as ti, useContext as Ot, createElement as ri, useEffect as Ma } from "react";
import * as ni from "react-dom";
import ai from "react-dom";
function ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var za = { exports: {} }, Et = {};
var Yn;
function oi() {
  if (Yn) return Et;
  Yn = 1;
  var e = ht, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, u, m) {
    var g, h = {}, y = null, C = null;
    m !== void 0 && (y = "" + m), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (C = u.ref);
    for (g in u) n.call(u, g) && !s.hasOwnProperty(g) && (h[g] = u[g]);
    if (c && c.defaultProps) for (g in u = c.defaultProps, u) h[g] === void 0 && (h[g] = u[g]);
    return { $$typeof: r, type: c, key: y, ref: C, props: h, _owner: o.current };
  }
  return Et.Fragment = t, Et.jsx = l, Et.jsxs = l, Et;
}
za.exports = oi();
var _e = za.exports;
function Fa({
  packageName: e = "",
  component: r = "",
  type: t = "",
  configuration: n = {}
}) {
  if (!e || !r) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: r,
    type: t,
    configuration: n
  };
}
var Ae = { env: { NODE_ENV: "production" } }, ii = { 651: function(e) {
  e.exports = function() {
    function r(j) {
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(I) {
        return typeof I;
      } : function(I) {
        return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I;
      }, r(j);
    }
    function t(j, I) {
      return t = Object.setPrototypeOf || function(H, $) {
        return H.__proto__ = $, H;
      }, t(j, I);
    }
    function n(j, I, H) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct : function($, R, re) {
        var xe = [null];
        xe.push.apply(xe, R);
        var ze = new (Function.bind.apply($, xe))();
        return re && t(ze, re.prototype), ze;
      }, n.apply(null, arguments);
    }
    function o(j) {
      return function(I) {
        if (Array.isArray(I)) return s(I);
      }(j) || function(I) {
        if (typeof Symbol < "u" && I[Symbol.iterator] != null || I["@@iterator"] != null) return Array.from(I);
      }(j) || function(I, H) {
        if (I) {
          if (typeof I == "string") return s(I, H);
          var $ = Object.prototype.toString.call(I).slice(8, -1);
          return $ === "Object" && I.constructor && ($ = I.constructor.name), $ === "Map" || $ === "Set" ? Array.from(I) : $ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($) ? s(I, H) : void 0;
        }
      }(j) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function s(j, I) {
      (I == null || I > j.length) && (I = j.length);
      for (var H = 0, $ = new Array(I); H < I; H++) $[H] = j[H];
      return $;
    }
    var l = Object.hasOwnProperty, c = Object.setPrototypeOf, u = Object.isFrozen, m = Object.getPrototypeOf, g = Object.getOwnPropertyDescriptor, h = Object.freeze, y = Object.seal, C = Object.create, w = typeof Reflect < "u" && Reflect, b = w.apply, k = w.construct;
    b || (b = function(j, I, H) {
      return j.apply(I, H);
    }), h || (h = function(j) {
      return j;
    }), y || (y = function(j) {
      return j;
    }), k || (k = function(j, I) {
      return n(j, o(I));
    });
    var O, x = ee(Array.prototype.forEach), L = ee(Array.prototype.pop), _ = ee(Array.prototype.push), v = ee(String.prototype.toLowerCase), A = ee(String.prototype.toString), E = ee(String.prototype.match), z = ee(String.prototype.replace), te = ee(String.prototype.indexOf), pe = ee(String.prototype.trim), X = ee(RegExp.prototype.test), Y = (O = TypeError, function() {
      for (var j = arguments.length, I = new Array(j), H = 0; H < j; H++) I[H] = arguments[H];
      return k(O, I);
    });
    function ee(j) {
      return function(I) {
        for (var H = arguments.length, $ = new Array(H > 1 ? H - 1 : 0), R = 1; R < H; R++) $[R - 1] = arguments[R];
        return b(j, I, $);
      };
    }
    function B(j, I, H) {
      var $;
      H = ($ = H) !== null && $ !== void 0 ? $ : v, c && c(j, null);
      for (var R = I.length; R--; ) {
        var re = I[R];
        if (typeof re == "string") {
          var xe = H(re);
          xe !== re && (u(I) || (I[R] = xe), re = xe);
        }
        j[re] = !0;
      }
      return j;
    }
    function ue(j) {
      var I, H = C(null);
      for (I in j) b(l, j, [I]) === !0 && (H[I] = j[I]);
      return H;
    }
    function Ce(j, I) {
      for (; j !== null; ) {
        var H = g(j, I);
        if (H) {
          if (H.get) return ee(H.get);
          if (typeof H.value == "function") return ee(H.value);
        }
        j = m(j);
      }
      return function($) {
        return console.warn("fallback value for", $), null;
      };
    }
    var oe = h(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), he = h(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ne = h(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), V = h(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), F = h(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), S = h(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), T = h(["#text"]), p = h(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), P = h(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), f = h(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), D = h(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), N = y(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Q = y(/<%[\w\W]*|[\w\W]*%>/gm), Z = y(/\${[\w\W]*}/gm), q = y(/^data-[\-\w.\u00B7-\uFFFF]/), W = y(/^aria-[\-\w]+$/), K = y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), ie = y(/^(?:\w+script|data):/i), J = y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), ae = y(/^html$/i), G = y(/^[a-z][.\w]*(-[.\w]+)+$/i), ne = function() {
      return typeof window > "u" ? null : window;
    }, Oe = function j() {
      var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ne(), H = function(d) {
        return j(d);
      };
      if (H.version = "2.5.6", H.removed = [], !I || !I.document || I.document.nodeType !== 9) return H.isSupported = !1, H;
      var $ = I.document, R = I.document, re = I.DocumentFragment, xe = I.HTMLTemplateElement, ze = I.Node, Me = I.Element, vt = I.NodeFilter, Sn = I.NamedNodeMap, Do = Sn === void 0 ? I.NamedNodeMap || I.MozNamedAttrMap : Sn, Mo = I.HTMLFormElement, jo = I.DOMParser, _t = I.trustedTypes, Pt = Me.prototype, zo = Ce(Pt, "cloneNode"), Fo = Ce(Pt, "nextSibling"), Uo = Ce(Pt, "childNodes"), pr = Ce(Pt, "parentNode");
      if (typeof xe == "function") {
        var mr = R.createElement("template");
        mr.content && mr.content.ownerDocument && (R = mr.content.ownerDocument);
      }
      var je = function(d, M) {
        if (r(d) !== "object" || typeof d.createPolicy != "function") return null;
        var U = null, se = "data-tt-policy-suffix";
        M.currentScript && M.currentScript.hasAttribute(se) && (U = M.currentScript.getAttribute(se));
        var we = "dompurify" + (U ? "#" + U : "");
        try {
          return d.createPolicy(we, { createHTML: function(ge) {
            return ge;
          }, createScriptURL: function(ge) {
            return ge;
          } });
        } catch {
          return console.warn("TrustedTypes policy " + we + " could not be created."), null;
        }
      }(_t, $), hr = je ? je.createHTML("") : "", It = R, gr = It.implementation, Ho = It.createNodeIterator, qo = It.createDocumentFragment, Bo = It.getElementsByTagName, Wo = $.importNode, xn = {};
      try {
        xn = ue(R).documentMode ? R.documentMode : {};
      } catch {
      }
      var Fe = {};
      H.isSupported = typeof pr == "function" && gr && gr.createHTMLDocument !== void 0 && xn !== 9;
      var at, ke, yr = N, vr = Q, br = Z, Go = q, Vo = W, Yo = ie, Cn = J, Zo = G, wr = K, Ee = null, Tn = B({}, [].concat(o(oe), o(he), o(Ne), o(F), o(T))), Se = null, Nn = B({}, [].concat(o(p), o(P), o(f), o(D))), ve = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), bt = null, kr = null, An = !0, Er = !0, On = !1, Rn = !0, ot = !1, Sr = !0, Qe = !1, xr = !1, Cr = !1, it = !1, Lt = !1, $t = !1, _n = !0, Pn = !1, Tr = !0, wt = !1, st = {}, lt = null, In = B({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Ln = null, $n = B({}, ["audio", "video", "img", "source", "image", "track"]), Nr = null, Dn = B({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Dt = "http://www.w3.org/1998/Math/MathML", Mt = "http://www.w3.org/2000/svg", Ue = "http://www.w3.org/1999/xhtml", ct = Ue, Mn = !1, Ar = null, Xo = B({}, [Dt, Mt, Ue], A), Ko = ["application/xhtml+xml", "text/html"], ut = null, Qo = R.createElement("form"), jn = function(d) {
        return d instanceof RegExp || d instanceof Function;
      }, Or = function(d) {
        ut && ut === d || (d && r(d) === "object" || (d = {}), d = ue(d), at = at = Ko.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? "text/html" : d.PARSER_MEDIA_TYPE, ke = at === "application/xhtml+xml" ? A : v, Ee = "ALLOWED_TAGS" in d ? B({}, d.ALLOWED_TAGS, ke) : Tn, Se = "ALLOWED_ATTR" in d ? B({}, d.ALLOWED_ATTR, ke) : Nn, Ar = "ALLOWED_NAMESPACES" in d ? B({}, d.ALLOWED_NAMESPACES, A) : Xo, Nr = "ADD_URI_SAFE_ATTR" in d ? B(ue(Dn), d.ADD_URI_SAFE_ATTR, ke) : Dn, Ln = "ADD_DATA_URI_TAGS" in d ? B(ue($n), d.ADD_DATA_URI_TAGS, ke) : $n, lt = "FORBID_CONTENTS" in d ? B({}, d.FORBID_CONTENTS, ke) : In, bt = "FORBID_TAGS" in d ? B({}, d.FORBID_TAGS, ke) : {}, kr = "FORBID_ATTR" in d ? B({}, d.FORBID_ATTR, ke) : {}, st = "USE_PROFILES" in d && d.USE_PROFILES, An = d.ALLOW_ARIA_ATTR !== !1, Er = d.ALLOW_DATA_ATTR !== !1, On = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Rn = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ot = d.SAFE_FOR_TEMPLATES || !1, Sr = d.SAFE_FOR_XML !== !1, Qe = d.WHOLE_DOCUMENT || !1, it = d.RETURN_DOM || !1, Lt = d.RETURN_DOM_FRAGMENT || !1, $t = d.RETURN_TRUSTED_TYPE || !1, Cr = d.FORCE_BODY || !1, _n = d.SANITIZE_DOM !== !1, Pn = d.SANITIZE_NAMED_PROPS || !1, Tr = d.KEEP_CONTENT !== !1, wt = d.IN_PLACE || !1, wr = d.ALLOWED_URI_REGEXP || wr, ct = d.NAMESPACE || Ue, ve = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && jn(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ve.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && jn(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ve.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ot && (Er = !1), Lt && (it = !0), st && (Ee = B({}, o(T)), Se = [], st.html === !0 && (B(Ee, oe), B(Se, p)), st.svg === !0 && (B(Ee, he), B(Se, P), B(Se, D)), st.svgFilters === !0 && (B(Ee, Ne), B(Se, P), B(Se, D)), st.mathMl === !0 && (B(Ee, F), B(Se, f), B(Se, D))), d.ADD_TAGS && (Ee === Tn && (Ee = ue(Ee)), B(Ee, d.ADD_TAGS, ke)), d.ADD_ATTR && (Se === Nn && (Se = ue(Se)), B(Se, d.ADD_ATTR, ke)), d.ADD_URI_SAFE_ATTR && B(Nr, d.ADD_URI_SAFE_ATTR, ke), d.FORBID_CONTENTS && (lt === In && (lt = ue(lt)), B(lt, d.FORBID_CONTENTS, ke)), Tr && (Ee["#text"] = !0), Qe && B(Ee, ["html", "head", "body"]), Ee.table && (B(Ee, ["tbody"]), delete bt.tbody), h && h(d), ut = d);
      }, zn = B({}, ["mi", "mo", "mn", "ms", "mtext"]), Fn = B({}, ["foreignobject", "annotation-xml"]), Jo = B({}, ["title", "style", "font", "a", "script"]), jt = B({}, he);
      B(jt, Ne), B(jt, V);
      var Rr = B({}, F);
      B(Rr, S);
      var Le = function(d) {
        _(H.removed, { element: d });
        try {
          d.parentNode.removeChild(d);
        } catch {
          try {
            d.outerHTML = hr;
          } catch {
            d.remove();
          }
        }
      }, zt = function(d, M) {
        try {
          _(H.removed, { attribute: M.getAttributeNode(d), from: M });
        } catch {
          _(H.removed, { attribute: null, from: M });
        }
        if (M.removeAttribute(d), d === "is" && !Se[d]) if (it || Lt) try {
          Le(M);
        } catch {
        }
        else try {
          M.setAttribute(d, "");
        } catch {
        }
      }, Un = function(d) {
        var M, U;
        if (Cr) d = "<remove></remove>" + d;
        else {
          var se = E(d, /^[\r\n\t ]+/);
          U = se && se[0];
        }
        at === "application/xhtml+xml" && ct === Ue && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
        var we = je ? je.createHTML(d) : d;
        if (ct === Ue) try {
          M = new jo().parseFromString(we, at);
        } catch {
        }
        if (!M || !M.documentElement) {
          M = gr.createDocument(ct, "template", null);
          try {
            M.documentElement.innerHTML = Mn ? hr : we;
          } catch {
          }
        }
        var ge = M.body || M.documentElement;
        return d && U && ge.insertBefore(R.createTextNode(U), ge.childNodes[0] || null), ct === Ue ? Bo.call(M, Qe ? "html" : "body")[0] : Qe ? M.documentElement : ge;
      }, Hn = function(d) {
        return Ho.call(d.ownerDocument || d, d, vt.SHOW_ELEMENT | vt.SHOW_COMMENT | vt.SHOW_TEXT | vt.SHOW_PROCESSING_INSTRUCTION | vt.SHOW_CDATA_SECTION, null, !1);
      }, qn = function(d) {
        return d instanceof Mo && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof Do) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
      }, kt = function(d) {
        return r(ze) === "object" ? d instanceof ze : d && r(d) === "object" && typeof d.nodeType == "number" && typeof d.nodeName == "string";
      }, He = function(d, M, U) {
        Fe[d] && x(Fe[d], function(se) {
          se.call(H, M, U, ut);
        });
      }, Bn = function(d) {
        var M;
        if (He("beforeSanitizeElements", d, null), qn(d) || X(/[\u0080-\uFFFF]/, d.nodeName)) return Le(d), !0;
        var U = ke(d.nodeName);
        if (He("uponSanitizeElement", d, { tagName: U, allowedTags: Ee }), d.hasChildNodes() && !kt(d.firstElementChild) && (!kt(d.content) || !kt(d.content.firstElementChild)) && X(/<[/\w]/g, d.innerHTML) && X(/<[/\w]/g, d.textContent) || U === "select" && X(/<template/i, d.innerHTML) || d.nodeType === 7 || Sr && d.nodeType === 8 && X(/<[/\w]/g, d.data)) return Le(d), !0;
        if (!Ee[U] || bt[U]) {
          if (!bt[U] && Gn(U) && (ve.tagNameCheck instanceof RegExp && X(ve.tagNameCheck, U) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(U)))
            return !1;
          if (Tr && !lt[U]) {
            var se = pr(d) || d.parentNode, we = Uo(d) || d.childNodes;
            if (we && se) for (var ge = we.length - 1; ge >= 0; --ge) {
              var Te = zo(we[ge], !0);
              Te.__removalCount = (d.__removalCount || 0) + 1, se.insertBefore(Te, Fo(d));
            }
          }
          return Le(d), !0;
        }
        return d instanceof Me && !function(Re) {
          var be = pr(Re);
          be && be.tagName || (be = { namespaceURI: ct, tagName: "template" });
          var me = v(Re.tagName), Ye = v(be.tagName);
          return !!Ar[Re.namespaceURI] && (Re.namespaceURI === Mt ? be.namespaceURI === Ue ? me === "svg" : be.namespaceURI === Dt ? me === "svg" && (Ye === "annotation-xml" || zn[Ye]) : !!jt[me] : Re.namespaceURI === Dt ? be.namespaceURI === Ue ? me === "math" : be.namespaceURI === Mt ? me === "math" && Fn[Ye] : !!Rr[me] : Re.namespaceURI === Ue ? !(be.namespaceURI === Mt && !Fn[Ye]) && !(be.namespaceURI === Dt && !zn[Ye]) && !Rr[me] && (Jo[me] || !jt[me]) : !(at !== "application/xhtml+xml" || !Ar[Re.namespaceURI]));
        }(d) ? (Le(d), !0) : U !== "noscript" && U !== "noembed" && U !== "noframes" || !X(/<\/no(script|embed|frames)/i, d.innerHTML) ? (ot && d.nodeType === 3 && (M = d.textContent, M = z(M, yr, " "), M = z(M, vr, " "), M = z(M, br, " "), d.textContent !== M && (_(H.removed, { element: d.cloneNode() }), d.textContent = M)), He("afterSanitizeElements", d, null), !1) : (Le(d), !0);
      }, Wn = function(d, M, U) {
        if (_n && (M === "id" || M === "name") && (U in R || U in Qo)) return !1;
        if (!(Er && !kr[M] && X(Go, M))) {
          if (!(An && X(Vo, M))) {
            if (!Se[M] || kr[M]) {
              if (!(Gn(d) && (ve.tagNameCheck instanceof RegExp && X(ve.tagNameCheck, d) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(d)) && (ve.attributeNameCheck instanceof RegExp && X(ve.attributeNameCheck, M) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(M)) || M === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && X(ve.tagNameCheck, U) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(U)))) return !1;
            } else if (!Nr[M]) {
              if (!X(wr, z(U, Cn, ""))) {
                if ((M !== "src" && M !== "xlink:href" && M !== "href" || d === "script" || te(U, "data:") !== 0 || !Ln[d]) && !(On && !X(Yo, z(U, Cn, "")))) {
                  if (U) return !1;
                }
              }
            }
          }
        }
        return !0;
      }, Gn = function(d) {
        return d !== "annotation-xml" && E(d, Zo);
      }, Vn = function(d) {
        var M, U, se, we;
        He("beforeSanitizeAttributes", d, null);
        var ge = d.attributes;
        if (ge) {
          var Te = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Se };
          for (we = ge.length; we--; ) {
            var Re = M = ge[we], be = Re.name, me = Re.namespaceURI;
            if (U = be === "value" ? M.value : pe(M.value), se = ke(be), Te.attrName = se, Te.attrValue = U, Te.keepAttr = !0, Te.forceKeepAttr = void 0, He("uponSanitizeAttribute", d, Te), U = Te.attrValue, Sr && X(/((--!?|])>)|<\/(style|title)/i, U)) zt(be, d);
            else if (!Te.forceKeepAttr && (zt(be, d), Te.keepAttr)) if (Rn || !X(/\/>/i, U)) {
              ot && (U = z(U, yr, " "), U = z(U, vr, " "), U = z(U, br, " "));
              var Ye = ke(d.nodeName);
              if (Wn(Ye, se, U)) {
                if (!Pn || se !== "id" && se !== "name" || (zt(be, d), U = "user-content-" + U), je && r(_t) === "object" && typeof _t.getAttributeType == "function" && !me) switch (_t.getAttributeType(Ye, se)) {
                  case "TrustedHTML":
                    U = je.createHTML(U);
                    break;
                  case "TrustedScriptURL":
                    U = je.createScriptURL(U);
                }
                try {
                  me ? d.setAttributeNS(me, be, U) : d.setAttribute(be, U), qn(d) ? Le(d) : L(H.removed);
                } catch {
                }
              }
            } else zt(be, d);
          }
          He("afterSanitizeAttributes", d, null);
        }
      }, ei = function d(M) {
        var U, se = Hn(M);
        for (He("beforeSanitizeShadowDOM", M, null); U = se.nextNode(); ) He("uponSanitizeShadowNode", U, null), Bn(U) || (U.content instanceof re && d(U.content), Vn(U));
        He("afterSanitizeShadowDOM", M, null);
      };
      return H.sanitize = function(d) {
        var M, U, se, we, ge, Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((Mn = !d) && (d = "<!-->"), typeof d != "string" && !kt(d)) {
          if (typeof d.toString != "function") throw Y("toString is not a function");
          if (typeof (d = d.toString()) != "string") throw Y("dirty is not a string, aborting");
        }
        if (!H.isSupported) {
          if (r(I.toStaticHTML) === "object" || typeof I.toStaticHTML == "function") {
            if (typeof d == "string") return I.toStaticHTML(d);
            if (kt(d)) return I.toStaticHTML(d.outerHTML);
          }
          return d;
        }
        if (xr || Or(Te), H.removed = [], typeof d == "string" && (wt = !1), wt) {
          if (d.nodeName) {
            var Re = ke(d.nodeName);
            if (!Ee[Re] || bt[Re]) throw Y("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (d instanceof ze) (U = (M = Un("<!---->")).ownerDocument.importNode(d, !0)).nodeType === 1 && U.nodeName === "BODY" || U.nodeName === "HTML" ? M = U : M.appendChild(U);
        else {
          if (!it && !ot && !Qe && d.indexOf("<") === -1) return je && $t ? je.createHTML(d) : d;
          if (!(M = Un(d))) return it ? null : $t ? hr : "";
        }
        M && Cr && Le(M.firstChild);
        for (var be = Hn(wt ? d : M); se = be.nextNode(); ) se.nodeType === 3 && se === we || Bn(se) || (se.content instanceof re && ei(se.content), Vn(se), we = se);
        if (we = null, wt) return d;
        if (it) {
          if (Lt) for (ge = qo.call(M.ownerDocument); M.firstChild; ) ge.appendChild(M.firstChild);
          else ge = M;
          return (Se.shadowroot || Se.shadowrootmod) && (ge = Wo.call($, ge, !0)), ge;
        }
        var me = Qe ? M.outerHTML : M.innerHTML;
        return Qe && Ee["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && X(ae, M.ownerDocument.doctype.name) && (me = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + me), ot && (me = z(me, yr, " "), me = z(me, vr, " "), me = z(me, br, " ")), je && $t ? je.createHTML(me) : me;
      }, H.setConfig = function(d) {
        Or(d), xr = !0;
      }, H.clearConfig = function() {
        ut = null, xr = !1;
      }, H.isValidAttribute = function(d, M, U) {
        ut || Or({});
        var se = ke(d), we = ke(M);
        return Wn(se, we, U);
      }, H.addHook = function(d, M) {
        typeof M == "function" && (Fe[d] = Fe[d] || [], _(Fe[d], M));
      }, H.removeHook = function(d) {
        if (Fe[d]) return L(Fe[d]);
      }, H.removeHooks = function(d) {
        Fe[d] && (Fe[d] = []);
      }, H.removeAllHooks = function() {
        Fe = {};
      }, H;
    }();
    return Oe;
  }();
}, 985: (e, r, t) => {
  var n = t(524), o = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, s = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, l = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, c = {};
  function u(b) {
    return n.isMemo(b) ? l : c[b.$$typeof] || o;
  }
  c[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, c[n.Memo] = l;
  var m = Object.defineProperty, g = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, C = Object.getPrototypeOf, w = Object.prototype;
  e.exports = function b(k, O, x) {
    if (typeof O != "string") {
      if (w) {
        var L = C(O);
        L && L !== w && b(k, L, x);
      }
      var _ = g(O);
      h && (_ = _.concat(h(O)));
      for (var v = u(k), A = u(O), E = 0; E < _.length; ++E) {
        var z = _[E];
        if (!(s[z] || x && x[z] || A && A[z] || v && v[z])) {
          var te = y(O, z);
          try {
            m(k, z, te);
          } catch {
          }
        }
      }
    }
    return k;
  };
}, 999: (e, r, t) => {
  var n = t(848);
  function o() {
  }
  function s() {
  }
  s.resetWarningCache = o, e.exports = function() {
    function l(m, g, h, y, C, w) {
      if (w !== n) {
        var b = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw b.name = "Invariant Violation", b;
      }
    }
    function c() {
      return l;
    }
    l.isRequired = l;
    var u = { array: l, bigint: l, bool: l, func: l, number: l, object: l, string: l, symbol: l, any: l, arrayOf: c, element: l, elementType: l, instanceOf: c, node: l, objectOf: c, oneOf: c, oneOfType: c, shape: c, exact: c, checkPropTypes: s, resetWarningCache: o };
    return u.PropTypes = u, u;
  };
}, 67: (e, r, t) => {
  e.exports = t(999)();
}, 848: (e) => {
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 320: (e, r) => {
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, m = t ? Symbol.for("react.context") : 60110, g = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, y = t ? Symbol.for("react.forward_ref") : 60112, C = t ? Symbol.for("react.suspense") : 60113, w = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, k = t ? Symbol.for("react.lazy") : 60116, O = t ? Symbol.for("react.block") : 60121, x = t ? Symbol.for("react.fundamental") : 60117, L = t ? Symbol.for("react.responder") : 60118, _ = t ? Symbol.for("react.scope") : 60119;
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var z = E.$$typeof;
      switch (z) {
        case n:
          switch (E = E.type) {
            case g:
            case h:
            case s:
            case c:
            case l:
            case C:
              return E;
            default:
              switch (E = E && E.$$typeof) {
                case m:
                case y:
                case k:
                case b:
                case u:
                  return E;
                default:
                  return z;
              }
          }
        case o:
          return z;
      }
    }
  }
  function A(E) {
    return v(E) === h;
  }
  r.AsyncMode = g, r.ConcurrentMode = h, r.ContextConsumer = m, r.ContextProvider = u, r.Element = n, r.ForwardRef = y, r.Fragment = s, r.Lazy = k, r.Memo = b, r.Portal = o, r.Profiler = c, r.StrictMode = l, r.Suspense = C, r.isAsyncMode = function(E) {
    return A(E) || v(E) === g;
  }, r.isConcurrentMode = A, r.isContextConsumer = function(E) {
    return v(E) === m;
  }, r.isContextProvider = function(E) {
    return v(E) === u;
  }, r.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }, r.isForwardRef = function(E) {
    return v(E) === y;
  }, r.isFragment = function(E) {
    return v(E) === s;
  }, r.isLazy = function(E) {
    return v(E) === k;
  }, r.isMemo = function(E) {
    return v(E) === b;
  }, r.isPortal = function(E) {
    return v(E) === o;
  }, r.isProfiler = function(E) {
    return v(E) === c;
  }, r.isStrictMode = function(E) {
    return v(E) === l;
  }, r.isSuspense = function(E) {
    return v(E) === C;
  }, r.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === s || E === h || E === c || E === l || E === C || E === w || typeof E == "object" && E !== null && (E.$$typeof === k || E.$$typeof === b || E.$$typeof === u || E.$$typeof === m || E.$$typeof === y || E.$$typeof === x || E.$$typeof === L || E.$$typeof === _ || E.$$typeof === O);
  }, r.typeOf = v;
}, 524: (e, r, t) => {
  e.exports = t(320);
}, 146: (e) => {
  e.exports = function(r, t, n, o) {
    var s = n ? n.call(o, r, t) : void 0;
    if (s !== void 0) return !!s;
    if (r === t) return !0;
    if (typeof r != "object" || !r || typeof t != "object" || !t) return !1;
    var l = Object.keys(r), c = Object.keys(t);
    if (l.length !== c.length) return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(t), m = 0; m < l.length; m++) {
      var g = l[m];
      if (!u(g)) return !1;
      var h = r[g], y = t[g];
      if ((s = n ? n.call(o, h, y, g) : void 0) === !1 || s === void 0 && h !== y) return !1;
    }
    return !0;
  };
}, 373: (e, r) => {
  var t;
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var c = "", u = 0; u < arguments.length; u++) {
        var m = arguments[u];
        m && (c = l(c, s(m)));
      }
      return c;
    }
    function s(c) {
      if (typeof c == "string" || typeof c == "number") return c;
      if (typeof c != "object") return "";
      if (Array.isArray(c)) return o.apply(null, c);
      if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) return c.toString();
      var u = "";
      for (var m in c) n.call(c, m) && c[m] && (u = l(u, m));
      return u;
    }
    function l(c, u) {
      return u ? c ? c + " " + u : c + u : c;
    }
    e.exports ? (o.default = o, e.exports = o) : (t = (function() {
      return o;
    }).apply(r, [])) === void 0 || (e.exports = t);
  })();
} }, Zn = {};
function ye(e) {
  var r = Zn[e];
  if (r !== void 0) return r.exports;
  var t = Zn[e] = { exports: {} };
  return ii[e].call(t.exports, t, t.exports, ye), t.exports;
}
ye.n = (e) => {
  var r = e && e.__esModule ? () => e.default : () => e;
  return ye.d(r, { a: r }), r;
}, ye.d = (e, r) => {
  for (var t in r) ye.o(r, t) && !ye.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
}, ye.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), ye.nc = void 0;
var gt = {};
ye.d(gt, { nD: () => sn, n_: () => un, n9: () => tr, $n: () => Ge, ef: () => rr, fy: () => Nt, Zp: () => nr, TR: () => ao, Pb: () => eo, Ur: () => Ja, _Q: () => no, lq: () => pn, _V: () => nt, dK: () => or, Fx: () => mn, oz: () => uo, YT: () => fo, Gm: () => hn, Ce: () => gn, qm: () => ws, fh: () => ro, Od: () => fn, fZ: () => to, RE: () => dn, hZ: () => Ns, Nq: () => As, NJ: () => Os, bO: () => Rs, oP: () => _s, jl: () => Ps, PP: () => Is, BB: () => Ls, Q9: () => $s, vW: () => Ms, VE: () => Ds, _v: () => js, uP: () => zs });
var si = ye(67), a = ye.n(si);
const i = (Xn = { Component: () => $e.Component, createContext: () => $e.createContext, createElement: () => $e.createElement, default: () => $e.default, forwardRef: () => $e.forwardRef, useCallback: () => $e.useCallback, useContext: () => $e.useContext, useEffect: () => $e.useEffect, useImperativeHandle: () => $e.useImperativeHandle, useMemo: () => $e.useMemo, useRef: () => $e.useRef, useState: () => $e.useState }, _r = {}, ye.d(_r, Xn), _r);
var Xn, _r;
const Kn = (e, r, t) => e ? r : t, Vt = (e) => (e || []).join(" ");
var li = ye(651);
const De = (e) => ({ __html: (0, li.sanitize)(e) }), Qn = (e, r, t) => {
  let n = e;
  const o = [];
  for (; n < r; ) n > 0 && n <= t && o.push(n), n += 1;
  return o;
};
let Jn, Pr = !1;
a().shape({ event: a().string, action: a().string, name: a().string, region: a().string, section: a().string, component: a().string, type: a().string, text: a().string });
const Pe = ({ event: e = "", action: r = "", name: t = "", type: n = "", section: o = "", text: s = "", region: l = "", component: c = "" }) => {
  const { dataLayer: u } = window, m = { event: e.toLowerCase(), action: r.toLowerCase(), name: t.toLowerCase(), type: n.toLowerCase(), region: l.toLowerCase(), section: o.toLowerCase(), text: s.toLowerCase(), component: c.toLowerCase() };
  u && u.push(m);
}, ci = a().shape({ url: a().string, altText: a().string, cssClass: a().arrayOf(a().string), size: a().oneOf(["small", "medium", "large"]) }), Ir = a().shape({ text: a().string, maxWidth: a().string, cssClass: a().arrayOf(a().string), highlightColor: a().oneOf(["gold", "black"]) }), Ua = a().shape({ color: a().oneOf(["gold", "maroon", "gray", "dark"]), content: a().shape({ icon: a().string, header: a().string, body: a().string }) });
var ui = ye(373), de = ye.n(ui);
const Ha = ({ id: e, item: r, openCard: t, onClick: n }) => {
  var o, s, l, c, u, m;
  return i.default.createElement("div", { className: de()("accordion-item", "mt-3", { [`accordion-item-${r.color}`]: r.color, "accordion-header-icon": (o = r.content) == null ? void 0 : o.icon }) }, i.default.createElement("div", { className: "accordion-header" }, i.default.createElement("h4", null, i.default.createElement("a", { "data-testid": "accordion-opener", className: de()({ collapsed: e !== t }), "data-bs-toggle": "collapse", href: `#card-body-${e}`, role: "button", "aria-expanded": e === t, "aria-controls": `card-body-${e}`, onClick: (g) => {
    var h;
    return n(g, e, (h = r.content) == null ? void 0 : h.header);
  } }, (s = r.content) != null && s.icon ? i.default.createElement("span", { className: "accordion-icon" }, i.default.createElement("i", { className: `${(l = r.content.icon) == null ? void 0 : l[0]} fa-${(c = r.content.icon) == null ? void 0 : c[1]} me-2` }), r.content.header) : (u = r.content) == null ? void 0 : u.header, i.default.createElement("i", { className: "fas fa-chevron-up" })))), ((m = r.content) == null ? void 0 : m.body) && i.default.createElement("div", { id: `card-body-${e}`, className: de()("collapse") }, i.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: De(r.content.body) })));
};
Ha.propTypes = { id: a().number, item: Ua, openCard: a().number, onClick: a().func };
const di = { event: "collapse", name: "onclick", type: "click", region: "main content" }, sn = ({ cards: e, openedCard: r }) => {
  const [t, n] = (0, i.useState)(r), o = (l, c) => {
    Pe({ ...di, action: c, text: l });
  }, s = (l, c, u) => {
    l.preventDefault(), (t === c || t) && o(e[t - 1].content.header, "close"), t !== c ? (n(c), o(u, "open")) : n(null);
  };
  return i.default.createElement("div", { className: "accordion" }, e == null ? void 0 : e.map((l, c) => l.content.body && l.content.header && i.default.createElement(Ha, { key: c + 1, id: c + 1, item: l, openCard: t, onClick: s })));
};
function Ke() {
  return Ke = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ke.apply(null, arguments);
}
sn.propTypes = { cards: a().arrayOf(Ua).isRequired, openedCard: a().number };
const fi = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Ge = ({ label: e, cardTitle: r, ariaLabel: t, block: n, color: o, disabled: s, element: l, href: c, icon: u, innerRef: m, onClick: g, size: h, classes: y, target: C, ...w }) => {
  const b = de()("btn", { [`btn-${o}`]: !0, "btn-md": h === "small", "btn-sm": h === "xsmall", "btn-block": n, disabled: s });
  let k = l;
  return c && l === "button" && (k = "a"), i.default.createElement(k, Ke({ type: k === "button" && g ? "button" : void 0 }, w, { className: de()(y) || b, href: c, ref: m, onClick: () => (Pe({ ...fi, text: e, section: r }), void (g == null ? void 0 : g())), "aria-label": t, target: k === "a" ? C : null }), u && i.default.createElement("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]} me-1` }), e);
};
Ge.propTypes = { label: a().string, cardTitle: a().string, ariaLabel: a().string, block: a().bool, color: a().oneOf(["gold", "maroon", "gray", "dark"]), disabled: a().bool, element: a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func }), a().arrayOf(a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func })]))]), href: a().string, icon: a().arrayOf(a().string), innerRef: a().oneOfType([a().object, a().func, a().string]), onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), classes: a().arrayOf(a().string), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) }, Ge.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
var qa = ye(524), pi = ye(146);
ye.n(pi);
const mi = function(e) {
  function r(V, F, S, T, p) {
    for (var P, f, D, N, Q, Z = 0, q = 0, W = 0, K = 0, ie = 0, J = 0, ae = D = P = 0, G = 0, ne = 0, Oe = 0, j = 0, I = S.length, H = I - 1, $ = "", R = "", re = "", xe = ""; G < I; ) {
      if (f = S.charCodeAt(G), G === H && q + K + W + Z !== 0 && (q !== 0 && (f = q === 47 ? 10 : 47), K = W = Z = 0, I++, H++), q + K + W + Z === 0) {
        if (G === H && (0 < ne && ($ = $.replace(h, "")), 0 < $.trim().length)) {
          switch (f) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += S.charAt(G);
          }
          f = 59;
        }
        switch (f) {
          case 123:
            for (P = ($ = $.trim()).charCodeAt(0), D = 1, j = ++G; G < I; ) {
              switch (f = S.charCodeAt(G)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (f = S.charCodeAt(G + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ae = G + 1; ae < H; ++ae) switch (S.charCodeAt(ae)) {
                          case 47:
                            if (f === 42 && S.charCodeAt(ae - 1) === 42 && G + 2 !== ae) {
                              G = ae + 1;
                              break e;
                            }
                            break;
                          case 10:
                            if (f === 47) {
                              G = ae + 1;
                              break e;
                            }
                        }
                        G = ae;
                      }
                  }
                  break;
                case 91:
                  f++;
                case 40:
                  f++;
                case 34:
                case 39:
                  for (; G++ < H && S.charCodeAt(G) !== f; ) ;
              }
              if (D === 0) break;
              G++;
            }
            if (D = S.substring(j, G), P === 0 && (P = ($ = $.replace(g, "").trim()).charCodeAt(0)), P === 64) {
              switch (0 < ne && ($ = $.replace(h, "")), f = $.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  ne = F;
                  break;
                default:
                  ne = ue;
              }
              if (j = (D = r(F, ne, D, f, p + 1)).length, 0 < oe && (Q = c(3, D, ne = t(ue, $, Oe), F, Y, X, j, f, p, T), $ = ne.join(""), Q !== void 0 && (j = (D = Q.trim()).length) === 0 && (f = 0, D = "")), 0 < j) switch (f) {
                case 115:
                  $ = $.replace(v, l);
                case 100:
                case 109:
                case 45:
                  D = $ + "{" + D + "}";
                  break;
                case 107:
                  D = ($ = $.replace(O, "$1 $2")) + "{" + D + "}", D = B === 1 || B === 2 && s("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                  break;
                default:
                  D = $ + D, T === 112 && (R += D, D = "");
              }
              else D = "";
            } else D = r(F, t(F, $, Oe), D, T, p + 1);
            re += D, D = Oe = ne = ae = P = 0, $ = "", f = S.charCodeAt(++G);
            break;
          case 125:
          case 59:
            if (1 < (j = ($ = (0 < ne ? $.replace(h, "") : $).trim()).length)) switch (ae === 0 && (P = $.charCodeAt(0), P === 45 || 96 < P && 123 > P) && (j = ($ = $.replace(" ", ":")).length), 0 < oe && (Q = c(1, $, F, V, Y, X, R.length, T, p, T)) !== void 0 && (j = ($ = Q.trim()).length) === 0 && ($ = "\0\0"), P = $.charCodeAt(0), f = $.charCodeAt(1), P) {
              case 0:
                break;
              case 64:
                if (f === 105 || f === 99) {
                  xe += $ + S.charAt(G);
                  break;
                }
              default:
                $.charCodeAt(j - 1) !== 58 && (R += o($, P, f, $.charCodeAt(2)));
            }
            Oe = ne = ae = P = 0, $ = "", f = S.charCodeAt(++G);
        }
      }
      switch (f) {
        case 13:
        case 10:
          q === 47 ? q = 0 : 1 + P === 0 && T !== 107 && 0 < $.length && (ne = 1, $ += "\0"), 0 < oe * Ne && c(0, $, F, V, Y, X, R.length, T, p, T), X = 1, Y++;
          break;
        case 59:
        case 125:
          if (q + K + W + Z === 0) {
            X++;
            break;
          }
        default:
          switch (X++, N = S.charAt(G), f) {
            case 9:
            case 32:
              if (K + Z + q === 0) switch (ie) {
                case 44:
                case 58:
                case 9:
                case 32:
                  N = "";
                  break;
                default:
                  f !== 32 && (N = " ");
              }
              break;
            case 0:
              N = "\\0";
              break;
            case 12:
              N = "\\f";
              break;
            case 11:
              N = "\\v";
              break;
            case 38:
              K + q + Z === 0 && (ne = Oe = 1, N = "\f" + N);
              break;
            case 108:
              if (K + q + Z + ee === 0 && 0 < ae) switch (G - ae) {
                case 2:
                  ie === 112 && S.charCodeAt(G - 3) === 58 && (ee = ie);
                case 8:
                  J === 111 && (ee = J);
              }
              break;
            case 58:
              K + q + Z === 0 && (ae = G);
              break;
            case 44:
              q + W + K + Z === 0 && (ne = 1, N += "\r");
              break;
            case 34:
            case 39:
              q === 0 && (K = K === f ? 0 : K === 0 ? f : K);
              break;
            case 91:
              K + q + W === 0 && Z++;
              break;
            case 93:
              K + q + W === 0 && Z--;
              break;
            case 41:
              K + q + Z === 0 && W--;
              break;
            case 40:
              K + q + Z === 0 && (P === 0 && (2 * ie + 3 * J == 533 || (P = 1)), W++);
              break;
            case 64:
              q + W + K + Z + ae + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + Z + W)) switch (q) {
                case 0:
                  switch (2 * f + 3 * S.charCodeAt(G + 1)) {
                    case 235:
                      q = 47;
                      break;
                    case 220:
                      j = G, q = 42;
                  }
                  break;
                case 42:
                  f === 47 && ie === 42 && j + 2 !== G && (S.charCodeAt(j + 2) === 33 && (R += S.substring(j, G + 1)), N = "", q = 0);
              }
          }
          q === 0 && ($ += N);
      }
      J = ie, ie = f, G++;
    }
    if (0 < (j = R.length)) {
      if (ne = F, 0 < oe && (Q = c(2, R, ne, V, Y, X, j, T, p, T)) !== void 0 && (R = Q).length === 0) return xe + R + re;
      if (R = ne.join(",") + "{" + R + "}", B * ee != 0) {
        switch (B !== 2 || s(R, 2) || (ee = 0), ee) {
          case 111:
            R = R.replace(L, ":-moz-$1") + R;
            break;
          case 112:
            R = R.replace(x, "::-webkit-input-$1") + R.replace(x, "::-moz-$1") + R.replace(x, ":-ms-input-$1") + R;
        }
        ee = 0;
      }
    }
    return xe + R + re;
  }
  function t(V, F, S) {
    var T = F.trim().split(b);
    F = T;
    var p = T.length, P = V.length;
    switch (P) {
      case 0:
      case 1:
        var f = 0;
        for (V = P === 0 ? "" : V[0] + " "; f < p; ++f) F[f] = n(V, F[f], S).trim();
        break;
      default:
        var D = f = 0;
        for (F = []; f < p; ++f) for (var N = 0; N < P; ++N) F[D++] = n(V[N] + " ", T[f], S).trim();
    }
    return F;
  }
  function n(V, F, S) {
    var T = F.charCodeAt(0);
    switch (33 > T && (T = (F = F.trim()).charCodeAt(0)), T) {
      case 38:
        return F.replace(k, "$1" + V.trim());
      case 58:
        return V.trim() + F.replace(k, "$1" + V.trim());
      default:
        if (0 < 1 * S && 0 < F.indexOf("\f")) return F.replace(k, (V.charCodeAt(0) === 58 ? "" : "$1") + V.trim());
    }
    return V + F;
  }
  function o(V, F, S, T) {
    var p = V + ";", P = 2 * F + 3 * S + 4 * T;
    if (P === 944) {
      V = p.indexOf(":", 9) + 1;
      var f = p.substring(V, p.length - 1).trim();
      return f = p.substring(0, V).trim() + f + ";", B === 1 || B === 2 && s(f, 1) ? "-webkit-" + f + f : f;
    }
    if (B === 0 || B === 2 && !s(p, 1)) return p;
    switch (P) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45) return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11)) return p.replace(pe, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45) switch (p.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
          case 115:
            return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
          case 98:
            return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
        }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99) break;
        return "-webkit-box-pack" + (f = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + p + "-ms-flex-pack" + f + p;
      case 1005:
        return C.test(p) ? p.replace(y, ":-webkit-") + p.replace(y, ":-moz-") + p : p;
      case 1e3:
        switch (F = (f = p.substring(13).trim()).indexOf("-") + 1, f.charCodeAt(0) + f.charCodeAt(F)) {
          case 226:
            f = p.replace(_, "tb");
            break;
          case 232:
            f = p.replace(_, "tb-rl");
            break;
          case 220:
            f = p.replace(_, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + f + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (F = (p = V).length - 10, P = (f = (p.charCodeAt(F) === 33 ? p.substring(0, F) : p).substring(V.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | f.charCodeAt(7))) {
          case 203:
            if (111 > f.charCodeAt(8)) break;
          case 115:
            p = p.replace(f, "-webkit-" + f) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(f, "-webkit-" + (102 < P ? "inline-" : "") + "box") + ";" + p.replace(f, "-webkit-" + f) + ";" + p.replace(f, "-ms-" + f + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return f = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + f + "-ms-flex-" + f + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(E, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(E, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (te.test(V) === !0) return (f = V.substring(V.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(V.replace("stretch", "fill-available"), F, S, T).replace(":fill-available", ":stretch") : p.replace(f, "-webkit-" + f) + p.replace(f, "-moz-" + f.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, S + T === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + p;
    }
    return p;
  }
  function s(V, F) {
    var S = V.indexOf(F === 1 ? ":" : "{"), T = V.substring(0, F !== 3 ? S : 10);
    return S = V.substring(S + 1, V.length - 1), he(F !== 2 ? T : T.replace(z, "$1"), S, F);
  }
  function l(V, F) {
    var S = o(F, F.charCodeAt(0), F.charCodeAt(1), F.charCodeAt(2));
    return S !== F + ";" ? S.replace(A, " or ($1)").substring(4) : "(" + F + ")";
  }
  function c(V, F, S, T, p, P, f, D, N, Q) {
    for (var Z, q = 0, W = F; q < oe; ++q) switch (Z = Ce[q].call(m, V, W, S, T, p, P, f, D, N, Q)) {
      case void 0:
      case !1:
      case !0:
      case null:
        break;
      default:
        W = Z;
    }
    if (W !== F) return W;
  }
  function u(V) {
    return (V = V.prefix) !== void 0 && (he = null, V ? typeof V != "function" ? B = 1 : (B = 2, he = V) : B = 0), u;
  }
  function m(V, F) {
    var S = V;
    if (33 > S.charCodeAt(0) && (S = S.trim()), S = [S], 0 < oe) {
      var T = c(-1, F, S, S, Y, X, 0, 0, 0, 0);
      T !== void 0 && typeof T == "string" && (F = T);
    }
    var p = r(ue, S, F, 0, 0);
    return 0 < oe && (T = c(-2, p, S, S, Y, X, p.length, 0, 0, 0)) !== void 0 && (p = T), ee = 0, X = Y = 1, p;
  }
  var g = /^\0+/g, h = /[\0\r\f]/g, y = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, b = /,\r+?/g, k = /([\t\r\n ])*\f?&/g, O = /@(k\w+)\s*(\S*)\s*/, x = /::(place)/g, L = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, v = /\(\s*(.*)\s*\)/g, A = /([\s\S]*?);/g, E = /-self|flex-/g, z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, te = /stretch|:\s*\w+\-(?:conte|avail)/, pe = /([^-])(image-set\()/, X = 1, Y = 1, ee = 0, B = 1, ue = [], Ce = [], oe = 0, he = null, Ne = 0;
  return m.use = function V(F) {
    switch (F) {
      case void 0:
      case null:
        oe = Ce.length = 0;
        break;
      default:
        if (typeof F == "function") Ce[oe++] = F;
        else if (typeof F == "object") for (var S = 0, T = F.length; S < T; ++S) V(F[S]);
        else Ne = 0 | !!F;
    }
    return V;
  }, m.set = u, e !== void 0 && u(e), m;
}, hi = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function gi(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var yi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ea = gi(function(e) {
  return yi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), vi = ye(985), bi = ye.n(vi);
function Be() {
  return (Be = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ta = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Hr = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !(0, qa.typeOf)(e);
}, Kt = Object.freeze([]), Ze = Object.freeze({});
function Tt(e) {
  return typeof e == "function";
}
function ra(e) {
  return e.displayName || e.name || "Component";
}
function ln(e) {
  return e && typeof e.styledComponentId == "string";
}
var ft = typeof Ae < "u" && Ae.env !== void 0 && (Ae.env.REACT_APP_SC_ATTR || Ae.env.SC_ATTR) || "data-styled", cn = typeof window < "u" && "HTMLElement" in window, wi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ae < "u" && Ae.env !== void 0 && (Ae.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ae.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ae.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ae.env.REACT_APP_SC_DISABLE_SPEEDY : Ae.env.SC_DISABLE_SPEEDY !== void 0 && Ae.env.SC_DISABLE_SPEEDY !== "" && Ae.env.SC_DISABLE_SPEEDY !== "false" && Ae.env.SC_DISABLE_SPEEDY));
function Rt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var ki = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, l = s; t >= l; ) (l <<= 1) < 0 && Rt(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var c = s; c < l; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), m = 0, g = n.length; m < g; m++) this.tag.insertRule(u, n[m]) && (this.groupSizes[t]++, u++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var l = o; l < s; l++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), l = s + o, c = s; c < l; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Yt = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), St = 1, Ft = function(e) {
  if (Yt.has(e)) return Yt.get(e);
  for (; Qt.has(St); ) St++;
  var r = St++;
  return Yt.set(e, r), Qt.set(r, e), r;
}, Ei = function(e) {
  return Qt.get(e);
}, Si = function(e, r) {
  r >= St && (St = r + 1), Yt.set(e, r), Qt.set(r, e);
}, xi = "style[" + ft + '][data-styled-version="5.3.11"]', Ci = new RegExp("^" + ft + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ti = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, l = o.length; s < l; s++) (n = o[s]) && e.registerName(r, n);
}, Ni = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var l = t[o].trim();
    if (l) {
      var c = l.match(Ci);
      if (c) {
        var u = 0 | parseInt(c[1], 10), m = c[2];
        u !== 0 && (Si(m, u), Ti(e, m, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, Ai = function() {
  return ye.nc;
}, Ba = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var u = c.childNodes, m = u.length; m >= 0; m--) {
      var g = u[m];
      if (g && g.nodeType === 1 && g.hasAttribute(ft)) return g;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ft, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = Ai();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, s), n;
}, Oi = function() {
  function e(t) {
    var n = this.element = Ba(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, l = 0, c = s.length; l < c; l++) {
        var u = s[l];
        if (u.ownerNode === o) return u;
      }
      Rt(17);
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
}(), Ri = function() {
  function e(t) {
    var n = this.element = Ba(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), _i = function() {
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
}(), na = cn, Pi = { isServer: !cn, useCSSOMInjection: !wi }, Jt = function() {
  function e(t, n, o) {
    t === void 0 && (t = Ze), n === void 0 && (n = {}), this.options = Be({}, Pi, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && cn && na && (na = !1, function(s) {
      for (var l = document.querySelectorAll(xi), c = 0, u = l.length; c < u; c++) {
        var m = l[c];
        m && m.getAttribute(ft) !== "active" && (Ni(s, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ft(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Be({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, t = o ? new _i(l) : s ? new Oi(l) : new Ri(l), new ki(t)));
    var t, n, o, s, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ft(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Ft(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ft(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", l = 0; l < o; l++) {
        var c = Ei(l);
        if (c !== void 0) {
          var u = t.names.get(c), m = n.getGroup(l);
          if (u && m && u.size) {
            var g = ft + ".g" + l + '[id="' + c + '"]', h = "";
            u !== void 0 && u.forEach(function(y) {
              y.length > 0 && (h += y + ",");
            }), s += "" + m + g + '{content:"' + h + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ii = /(a)(d)/gi, aa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = aa(r % 52) + t;
  return (aa(r % 52) + t).replace(Ii, "$1-$2");
}
var dt = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Wa = function(e) {
  return dt(5381, e);
};
function Ga(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Tt(t) && !ln(t)) return !1;
  }
  return !0;
}
var Li = Wa("5.3.11"), $i = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Ga(r), this.componentId = t, this.baseHash = dt(Li, t), this.baseStyle = n, Jt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = rt(this.rules, r, t, n).join(""), c = qr(dt(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(o, c)) {
        var u = n(l, "." + c, void 0, o);
        t.insertRules(o, c, u);
      }
      s.push(c), this.staticRulesId = c;
    }
    else {
      for (var m = this.rules.length, g = dt(this.baseHash, n.hash), h = "", y = 0; y < m; y++) {
        var C = this.rules[y];
        if (typeof C == "string") h += C;
        else if (C) {
          var w = rt(C, r, t, n), b = Array.isArray(w) ? w.join("") : w;
          g = dt(g, b + y), h += b;
        }
      }
      if (h) {
        var k = qr(g >>> 0);
        if (!t.hasNameForId(o, k)) {
          var O = n(h, "." + k, void 0, o);
          t.insertRules(o, k, O);
        }
        s.push(k);
      }
    }
    return s.join(" ");
  }, e;
}(), Di = /^\s*\/\/.*$/gm, Mi = [":", "[", ".", "#"];
function ji(e) {
  var r, t, n, o, s = Ze, l = s.options, c = l === void 0 ? Ze : l, u = s.plugins, m = u === void 0 ? Kt : u, g = new mi(c), h = [], y = /* @__PURE__ */ function(b) {
    function k(O) {
      if (O) try {
        b(O + "}");
      } catch {
      }
    }
    return function(O, x, L, _, v, A, E, z, te, pe) {
      switch (O) {
        case 1:
          if (te === 0 && x.charCodeAt(0) === 64) return b(x + ";"), "";
          break;
        case 2:
          if (z === 0) return x + "/*|*/";
          break;
        case 3:
          switch (z) {
            case 102:
            case 112:
              return b(L[0] + x), "";
            default:
              return x + (pe === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(k);
      }
    };
  }(function(b) {
    h.push(b);
  }), C = function(b, k, O) {
    return k === 0 && Mi.indexOf(O[t.length]) !== -1 || O.match(o) ? b : "." + r;
  };
  function w(b, k, O, x) {
    x === void 0 && (x = "&");
    var L = b.replace(Di, ""), _ = k && O ? O + " " + k + " { " + L + " }" : L;
    return r = x, t = k, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), g(O || !k ? "" : k, _);
  }
  return g.use([].concat(m, [function(b, k, O) {
    b === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(n, C));
  }, y, function(b) {
    if (b === -2) {
      var k = h;
      return h = [], k;
    }
  }])), w.hash = m.length ? m.reduce(function(b, k) {
    return k.name || Rt(15), dt(b, k.name);
  }, 5381).toString() : "", w;
}
var Va = i.default.createContext(), Ya = (Va.Consumer, i.default.createContext()), zi = (Ya.Consumer, new Jt()), Br = ji();
function Fi() {
  return (0, i.useContext)(Va) || zi;
}
var Ui = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Br);
      var l = n.name + s.hash;
      o.hasNameForId(n.id, l) || o.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Rt(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Br), this.name + r.hash;
  }, e;
}(), Hi = /([A-Z])/, qi = /([A-Z])/g, Bi = /^ms-/, Wi = function(e) {
  return "-" + e.toLowerCase();
};
function oa(e) {
  return Hi.test(e) ? e.replace(qi, Wi).replace(Bi, "-ms-") : e;
}
var ia = function(e) {
  return e == null || e === !1 || e === "";
};
function rt(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], l = 0, c = e.length; l < c; l += 1) (o = rt(e[l], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  return ia(e) ? "" : ln(e) ? "." + e.styledComponentId : Tt(e) ? typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !r ? e : rt(e(r), r, t, n) : e instanceof Ui ? t ? (e.inject(t, n), e.getName(n)) : e : Hr(e) ? function m(g, h) {
    var y, C, w = [];
    for (var b in g) g.hasOwnProperty(b) && !ia(g[b]) && (Array.isArray(g[b]) && g[b].isCss || Tt(g[b]) ? w.push(oa(b) + ":", g[b], ";") : Hr(g[b]) ? w.push.apply(w, m(g[b], b)) : w.push(oa(b) + ": " + (y = b, ((C = g[b]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || y in hi || y.startsWith("--") ? String(C).trim() : C + "px") + ";")));
    return h ? [h + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
  var u;
}
var sa = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Gi(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Tt(e) || Hr(e) ? sa(rt(ta(Kt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : sa(rt(ta(e, t)));
}
var Vi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Yi = /(^-|-$)/g;
function Lr(e) {
  return e.replace(Vi, "-").replace(Yi, "");
}
function Ut(e) {
  return typeof e == "string" && !0;
}
var Wr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Zi = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Xi(e, r, t) {
  var n = e[t];
  Wr(r) && Wr(n) ? Za(n, r) : e[t] = r;
}
function Za(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var l = s[o];
    if (Wr(l)) for (var c in l) Zi(c) && Xi(e, l[c], c);
  }
  return e;
}
var Xa = i.default.createContext();
Xa.Consumer;
var $r = {};
function Ka(e, r, t) {
  var n = ln(e), o = !Ut(e), s = r.attrs, l = s === void 0 ? Kt : s, c = r.componentId, u = c === void 0 ? function(x, L) {
    var _ = typeof x != "string" ? "sc" : Lr(x);
    $r[_] = ($r[_] || 0) + 1;
    var v = _ + "-" + function(A) {
      return qr(Wa(A) >>> 0);
    }("5.3.11" + _ + $r[_]);
    return L ? L + "-" + v : v;
  }(r.displayName, r.parentComponentId) : c, m = r.displayName, g = m === void 0 ? function(x) {
    return Ut(x) ? "styled." + x : "Styled(" + ra(x) + ")";
  }(e) : m, h = r.displayName && r.componentId ? Lr(r.displayName) + "-" + r.componentId : r.componentId || u, y = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, C = r.shouldForwardProp;
  n && e.shouldForwardProp && (C = r.shouldForwardProp ? function(x, L, _) {
    return e.shouldForwardProp(x, L, _) && r.shouldForwardProp(x, L, _);
  } : e.shouldForwardProp);
  var w, b = new $i(t, h, n ? e.componentStyle : void 0), k = b.isStatic && l.length === 0, O = function(x, L) {
    return function(_, v, A, E) {
      var z = _.attrs, te = _.componentStyle, pe = _.defaultProps, X = _.foldedComponentIds, Y = _.shouldForwardProp, ee = _.styledComponentId, B = _.target, ue = function(P, f, D) {
        P === void 0 && (P = Ze);
        var N = Be({}, f, { theme: P }), Q = {};
        return D.forEach(function(Z) {
          var q, W, K, ie = Z;
          for (q in Tt(ie) && (ie = ie(N)), ie) N[q] = Q[q] = q === "className" ? (W = Q[q], K = ie[q], W && K ? W + " " + K : W || K) : ie[q];
        }), [N, Q];
      }(function(P, f, D) {
        return D === void 0 && (D = Ze), P.theme !== D.theme && P.theme || f || D.theme;
      }(v, (0, i.useContext)(Xa), pe) || Ze, v, z), Ce = ue[0], oe = ue[1], he = function(P, f, D) {
        var N = Fi(), Q = (0, i.useContext)(Ya) || Br;
        return f ? P.generateAndInjectStyles(Ze, N, Q) : P.generateAndInjectStyles(D, N, Q);
      }(te, E, Ce), Ne = A, V = oe.$as || v.$as || oe.as || v.as || B, F = Ut(V), S = oe !== v ? Be({}, v, {}, oe) : v, T = {};
      for (var p in S) p[0] !== "$" && p !== "as" && (p === "forwardedAs" ? T.as = S[p] : (Y ? Y(p, ea, V) : !F || ea(p)) && (T[p] = S[p]));
      return v.style && oe.style !== v.style && (T.style = Be({}, v.style, {}, oe.style)), T.className = Array.prototype.concat(X, ee, he !== ee ? he : null, v.className, oe.className).filter(Boolean).join(" "), T.ref = Ne, (0, i.createElement)(V, T);
    }(w, x, L, k);
  };
  return O.displayName = g, (w = i.default.forwardRef(O)).attrs = y, w.componentStyle = b, w.displayName = g, w.shouldForwardProp = C, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Kt, w.styledComponentId = h, w.target = n ? e.target : e, w.withComponent = function(x) {
    var L = r.componentId, _ = function(A, E) {
      if (A == null) return {};
      var z, te, pe = {}, X = Object.keys(A);
      for (te = 0; te < X.length; te++) z = X[te], E.indexOf(z) >= 0 || (pe[z] = A[z]);
      return pe;
    }(r, ["componentId"]), v = L && L + "-" + (Ut(x) ? x : Lr(ra(x)));
    return Ka(x, Be({}, _, { attrs: y, componentId: v }), t);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? Za({}, e.defaultProps, x) : x;
  } }), Object.defineProperty(w, "toString", { value: function() {
    return "." + w.styledComponentId;
  } }), o && bi()(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var Dr, Gr = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Ze), !(0, qa.isValidElementType)(n)) return Rt(1, String(n));
    var s = function() {
      return t(n, o, Gi.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return r(t, n, Be({}, o, {}, l));
    }, s.attrs = function(l) {
      return r(t, n, Be({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, s;
  }(Ka, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Gr[e] = Gr(e);
}), (Dr = (function(e, r) {
  this.rules = e, this.componentId = r, this.isStatic = Ga(e), Jt.registerId(this.componentId + 1);
}).prototype).createStyles = function(e, r, t, n) {
  var o = n(rt(this.rules, r, t, n).join(""), ""), s = this.componentId + e;
  t.insertRules(s, s, o);
}, Dr.removeStyles = function(e, r) {
  r.clearRules(this.componentId + e);
}, Dr.renderStyles = function(e, r, t, n) {
  e > 2 && Jt.registerId(this.componentId + e), this.removeStyles(e, t), this.createStyles(e, r, t, n);
};
const Ve = Gr, Ki = Ve.div`
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
`, Zt = "On This Page", Qi = { event: "collapse", name: "onclick", type: "click", text: Zt }, un = ({ items: e, firstElementId: r, focusFirstFocusableElement: t = !1 }) => {
  const n = (0, i.useRef)(null), o = function(h) {
    const [y, C] = (0, i.useState)(!1);
    return (0, i.useEffect)(() => {
      const w = window.matchMedia(h);
      w.matches !== y && C(w.matches);
      const b = () => {
        C(w.matches);
      };
      return w.addEventListener("change", b), () => w.removeEventListener("change", b);
    }, [y, h]), y;
  }("(max-width: 991px)"), [s, l] = (0, i.useState)({ hasHeader: !1, hasAltMenuSpacing: !1, containerClass: "container-xl", activeContainer: "", showMenu: !1, sticky: !1 }), c = o ? 110 : 142, u = () => {
    var b;
    const h = {}, y = window.scrollY;
    ((b = document.getElementById(r)) == null ? void 0 : b.getBoundingClientRect().top) >= 0 && (h.sticky = !1, h.activeContainer = ""), y > n.current.getBoundingClientRect().top && (h.sticky = !0);
    const w = s.hasHeader ? c + 103 : 103;
    e == null || e.forEach(({ targetIdName: k }) => {
      const O = document.getElementById(k), x = (O == null ? void 0 : O.getBoundingClientRect().top) - w, L = (O == null ? void 0 : O.getBoundingClientRect().bottom) - w;
      x < 0 && L > 0 && (h.activeContainer = k);
    }), l((k) => ({ ...k, ...h }));
  }, m = () => {
    var h;
    h = u, Pr || (Pr = !0, setTimeout(() => {
      h(), Pr = !1;
    }, 150)), ((y) => {
      window.clearTimeout(Jn), Jn = window.setTimeout(y, 150);
    })(u);
  };
  function g(h = null) {
    if (h === null) return s.containerClass;
    const y = Object.values(h.classList).filter((C) => ["container-sm", "container-md", "container", "container-lg", "container-xl", "container-fluid"].includes(C));
    return y.length > 0 ? y.join(" ") : g(h.parentElement);
  }
  return (0, i.useEffect)(() => {
    const h = document.getElementById(r) || null, y = { hasHeader: !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), hasAltMenuSpacing: !!document.getElementById("degreeDetailPageContainer"), containerClass: g(h) };
    l((C) => ({ ...C, ...y }));
  }, []), (0, i.useEffect)(() => (window == null || window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m)), [s.hasHeader]), (e == null ? void 0 : e.length) > 0 && i.default.createElement(Ki, { requiresAltMenuSpacing: s.hasAltMenuSpacing, ref: n, className: de()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: s.sticky, "with-header": s.hasHeader }), style: s.showMenu ? { borderBottom: 0 } : {} }, i.default.createElement("div", { className: `${s.containerClass} uds-anchor-menu-wrapper` }, o ? i.default.createElement("button", { className: de()("mobile-menu-toggler", { "show-menu": s.showMenu }), type: "button", onClick: () => {
    Pe({ ...Qi, action: s.showMenu ? "close" : "open" }), l((h) => ({ ...h, showMenu: !h.showMenu }));
  }, "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, i.default.createElement("h4", null, Zt, ":", i.default.createElement("i", { className: "fas fa-chevron-down" }))) : i.default.createElement("h4", null, Zt, ":"), i.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: de()("card", "card-body", "collapse", { show: s.showMenu }) }, i.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": Zt }, e == null ? void 0 : e.map((h) => i.default.createElement(Ge, { "data-testid": `anchor-item-${h.targetIdName}`, key: h.targetIdName, classes: de()("nav-link", { active: s.activeContainer === h.targetIdName }).split(" "), ariaLabel: h.text, label: h.text, icon: h.icon, onClick: () => ((y) => {
    var O, x;
    const C = window.scrollY - (s.hasHeader ? c + 100 : 100), w = o ? 410 : 90;
    let b = ((O = document.getElementById(y)) == null ? void 0 : O.getBoundingClientRect().top) + C;
    var k;
    n.current.classList.contains("sticky") || (b -= w), t && ((x = (k = `#${y}`, (k ? document.querySelector(k) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null || x.focus()), window.scrollTo({ top: b, behavior: "smooth" });
  })(h.targetIdName) }))))));
};
un.propTypes = { items: a().arrayOf(a().shape({ text: a().string.isRequired, targetIdName: a().string.isRequired, icon: a().arrayOf(a().string) })).isRequired, firstElementId: a().string.isRequired, focusFirstFocusableElement: a().bool };
var Ht, Ji = (Ht = function(e, r) {
  return Ht = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, Ht(e, r);
}, function(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  function t() {
    this.constructor = e;
  }
  Ht(e, r), e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}), es = function(e) {
  function r(t) {
    var n = e.call(this, t) || this;
    return n.name = "AssertionError", n;
  }
  return Ji(r, e), r;
}(Error);
function xt(e, r) {
  if (!e) throw new es(r);
}
function ur(e) {
  var r = Object.entries(e).filter(function(t) {
    return t[1] != null;
  }).map(function(t) {
    var n = t[0], o = t[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return r.length > 0 ? "?".concat(r.join("&")) : "";
}
var ts = /* @__PURE__ */ function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
      this.constructor = r;
    }
    e(r, t), r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Je = function() {
  return Je = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    return e;
  }, Je.apply(this, arguments);
}, la = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  }
  return t;
};
const rs = function(e) {
  function r() {
    var t = e !== null && e.apply(this, arguments) || this;
    return t.openShareDialog = function(n) {
      var o, s, l = t.props, c = l.onShareWindowClose, u = l.windowHeight, m = u === void 0 ? 400 : u, g = l.windowPosition, h = g === void 0 ? "windowCenter" : g, y = l.windowWidth, C = y === void 0 ? 550 : y;
      (function(w, b, k) {
        var O = b.height, x = b.width, L = la(b, ["height", "width"]), _ = Je({ height: O, width: x, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, L), v = window.open(w, "", Object.keys(_).map(function(E) {
          return "".concat(E, "=").concat(_[E]);
        }).join(", "));
        if (k) var A = window.setInterval(function() {
          try {
            (v === null || v.closed) && (window.clearInterval(A), k(v));
          } catch (E) {
            console.error(E);
          }
        }, 1e3);
      })(n, Je({ height: m, width: C }, h === "windowCenter" ? (o = C, s = m, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - o / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - s / 2 }) : function(w, b) {
        return { top: (window.screen.height - b) / 2, left: (window.screen.width - w) / 2 };
      }(C, m)), c);
    }, t.handleClick = function(n) {
      return o = t, s = void 0, c = function() {
        var u, m, g, h, y, C, w, b, k, O;
        return function(x, L) {
          var _, v, A, E, z = { label: 0, sent: function() {
            if (1 & A[0]) throw A[1];
            return A[1];
          }, trys: [], ops: [] };
          return E = { next: te(0), throw: te(1), return: te(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function te(pe) {
            return function(X) {
              return function(Y) {
                if (_) throw new TypeError("Generator is already executing.");
                for (; z; ) try {
                  if (_ = 1, v && (A = 2 & Y[0] ? v.return : Y[0] ? v.throw || ((A = v.return) && A.call(v), 0) : v.next) && !(A = A.call(v, Y[1])).done) return A;
                  switch (v = 0, A && (Y = [2 & Y[0], A.value]), Y[0]) {
                    case 0:
                    case 1:
                      A = Y;
                      break;
                    case 4:
                      return z.label++, { value: Y[1], done: !1 };
                    case 5:
                      z.label++, v = Y[1], Y = [0];
                      continue;
                    case 7:
                      Y = z.ops.pop(), z.trys.pop();
                      continue;
                    default:
                      if (!((A = (A = z.trys).length > 0 && A[A.length - 1]) || Y[0] !== 6 && Y[0] !== 2)) {
                        z = 0;
                        continue;
                      }
                      if (Y[0] === 3 && (!A || Y[1] > A[0] && Y[1] < A[3])) {
                        z.label = Y[1];
                        break;
                      }
                      if (Y[0] === 6 && z.label < A[1]) {
                        z.label = A[1], A = Y;
                        break;
                      }
                      if (A && z.label < A[2]) {
                        z.label = A[2], z.ops.push(Y);
                        break;
                      }
                      A[2] && z.ops.pop(), z.trys.pop();
                      continue;
                  }
                  Y = L.call(x, z);
                } catch (ee) {
                  Y = [6, ee], v = 0;
                } finally {
                  _ = A = 0;
                }
                if (5 & Y[0]) throw Y[1];
                return { value: Y[0] ? Y[1] : void 0, done: !0 };
              }([pe, X]);
            };
          }
        }(this, function(x) {
          switch (x.label) {
            case 0:
              return u = this.props, m = u.beforeOnClick, g = u.disabled, h = u.networkLink, y = u.onClick, C = u.url, w = u.openShareDialogOnClick, b = u.opts, k = h(C, b), g ? [2] : (n.preventDefault(), m ? !(L = O = m()) || typeof L != "object" && typeof L != "function" || typeof L.then != "function" ? [3, 2] : [4, O] : [3, 2]);
            case 1:
              x.sent(), x.label = 2;
            case 2:
              return w && this.openShareDialog(k), y && y(n, k), [2];
          }
          var L;
        });
      }, new ((l = void 0) || (l = Promise))(function(u, m) {
        function g(C) {
          try {
            y(c.next(C));
          } catch (w) {
            m(w);
          }
        }
        function h(C) {
          try {
            y(c.throw(C));
          } catch (w) {
            m(w);
          }
        }
        function y(C) {
          var w;
          C.done ? u(C.value) : (w = C.value, w instanceof l ? w : new l(function(b) {
            b(w);
          })).then(g, h);
        }
        y((c = c.apply(o, s || [])).next());
      });
      var o, s, l, c;
    }, t;
  }
  return ts(r, e), r.prototype.render = function() {
    var t = this.props, n = (t.beforeOnClick, t.children), o = t.className, s = t.disabled, l = t.disabledStyle, c = t.forwardedRef, u = (t.networkLink, t.networkName), m = (t.onShareWindowClose, t.openShareDialogOnClick, t.opts, t.resetButtonStyle), g = t.style, h = (t.url, t.windowHeight, t.windowPosition, t.windowWidth, la(t, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), y = de()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!s, disabled: !!s }, o), C = Je(Je(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, g), s && l);
    return i.default.createElement("button", Je({}, h, { "aria-label": h["aria-label"] || u, className: y, onClick: this.handleClick, ref: c, style: C }), n);
  }, r.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: !0, resetButtonStyle: !0 }, r;
}(i.Component);
var er = function() {
  return er = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    return e;
  }, er.apply(this, arguments);
};
const dr = function(e, r, t, n) {
  function o(s, l) {
    var c = t(s), u = er({}, s);
    return Object.keys(c).forEach(function(m) {
      delete u[m];
    }), i.default.createElement(rs, er({}, n, u, { forwardedRef: l, networkName: e, networkLink: r, opts: t(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), (0, i.forwardRef)(o);
}, ca = dr("facebook", function(e, r) {
  var t = r.quote, n = r.hashtag;
  return xt(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ur({ u: e, quote: t, hashtag: n });
}, function(e) {
  return { quote: e.quote, hashtag: e.hashtag };
}, { windowWidth: 550, windowHeight: 400 });
var Vr = function() {
  return Vr = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    return e;
  }, Vr.apply(this, arguments);
};
function fr(e) {
  var r = function(t) {
    var n = t.bgStyle, o = t.borderRadius, s = t.iconFillColor, l = t.round, c = t.size, u = function(m, g) {
      var h = {};
      for (var y in m) Object.prototype.hasOwnProperty.call(m, y) && g.indexOf(y) < 0 && (h[y] = m[y]);
      if (m != null && typeof Object.getOwnPropertySymbols == "function") {
        var C = 0;
        for (y = Object.getOwnPropertySymbols(m); C < y.length; C++) g.indexOf(y[C]) < 0 && Object.prototype.propertyIsEnumerable.call(m, y[C]) && (h[y[C]] = m[y[C]]);
      }
      return h;
    }(t, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return i.default.createElement("svg", Vr({ viewBox: "0 0 64 64", width: c, height: c }, u), l ? i.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : i.default.createElement("rect", { width: "64", height: "64", rx: o, ry: o, fill: e.color, style: n }), i.default.createElement("path", { d: e.path, fill: s }));
  };
  return r.defaultProps = { bgStyle: {}, borderRadius: 0, iconFillColor: "white", size: 64 }, r;
}
const ua = fr({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), da = dr("twitter", function(e, r) {
  var t = r.title, n = r.via, o = r.hashtags, s = o === void 0 ? [] : o, l = r.related, c = l === void 0 ? [] : l;
  return xt(e, "twitter.url"), xt(Array.isArray(s), "twitter.hashtags is not an array"), xt(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + ur({ url: e, text: t, via: n, hashtags: s.length > 0 ? s.join(",") : void 0, related: c.length > 0 ? c.join(",") : void 0 });
}, function(e) {
  return { hashtags: e.hashtags, title: e.title, via: e.via, related: e.related };
}, { windowWidth: 550, windowHeight: 400 }), fa = fr({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), ns = dr("email", function(e, r) {
  var t = r.subject, n = r.body, o = r.separator;
  return "mailto:" + ur({ subject: t, body: n ? n + o + e : e });
}, function(e) {
  return { subject: e.subject, body: e.body, separator: e.separator || " " };
}, { openShareDialogOnClick: !1, onClick: function(e, r) {
  window.location.href = r;
} }), as = fr({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), pa = dr("linkedin", function(e, r) {
  var t = r.title, n = r.summary, o = r.source;
  return xt(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ur({ url: e, mini: "true", title: t, summary: n, source: o });
}, function(e) {
  return { title: e.title, summary: e.summary, source: e.source };
}, { windowWidth: 750, windowHeight: 600 }), ma = fr({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
function Qa(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function Yr(e, r) {
  return e === void 0 && (e = ""), r === void 0 && (r = void 0), r ? e.split(" ").map(function(t) {
    return r[t] || t;
  }).join(" ") : e;
}
var os = typeof window == "object" && window.Element || function() {
};
a().oneOfType([a().string, a().func, function(e, r, t) {
  if (!(e[r] instanceof os)) return new Error("Invalid prop `" + r + "` supplied to `" + t + "`. Expected prop to be an instance of Element. Validation failed.");
}, a().shape({ current: a().any })]);
var Zr = a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func }), a().arrayOf(a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func })]))]), is = ["className", "cssModule", "active", "tag"], ss = { tag: Zr, active: a().bool, className: a().string, cssModule: a().object }, Xr = function(e) {
  var r = e.className, t = e.cssModule, n = e.active, o = e.tag, s = Qa(e, is), l = Yr(de()(r, !!n && "active", "breadcrumb-item"), t);
  return i.default.createElement(o, Ke({}, s, { className: l, "aria-current": n ? "page" : void 0 }));
};
Xr.propTypes = ss, Xr.defaultProps = { tag: "li" };
const qt = Xr;
var ls = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"], cs = { tag: Zr, listTag: Zr, className: a().string, listClassName: a().string, cssModule: a().object, children: a().node, "aria-label": a().string }, Kr = function(e) {
  var r = e.className, t = e.listClassName, n = e.cssModule, o = e.children, s = e.tag, l = e.listTag, c = e["aria-label"], u = Qa(e, ls), m = Yr(de()(r), n), g = Yr(de()("breadcrumb", t), n);
  return i.default.createElement(s, Ke({}, u, { className: m, "aria-label": c }), i.default.createElement(l, { className: g }, o));
};
Kr.propTypes = cs, Kr.defaultProps = { tag: "nav", listTag: "ol", "aria-label": "breadcrumb" };
const us = Kr, ds = Ve.div`
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
`, fs = Ve.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, tr = ({ type: e, articleUrl: r, publicationDate: t, title: n, body: o, authorEmail: s, authorName: l, authorPhone: c, authorTitle: u, breadcrumbs: m, calendarUrl: g, eventLocation: h, eventTime: y, headerImageUrl: C, registrationUrl: w, zoomUrl: b }) => {
  const k = de()("col", "col-12", { "col-lg-8": e === "event" && (w || b || g) });
  return i.default.createElement(i.default.Fragment, null, C && e !== "event" && i.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${C})` } }), i.default.createElement(ds, { className: `container ${e}-container wrapper-container` }, m && i.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, i.default.createElement("div", { className: "col col-12" }, i.default.createElement(us, { listClassName: "breadcrumb" }, m.map((O) => ((x) => x.active ? i.default.createElement(qt, { active: !0, tag: "li", className: "breadcrumb-item" }, i.default.createElement(qt, { tag: "a", href: x.url }, x.title)) : i.default.createElement(qt, { tag: "li", className: "breadcrumb-item" }, i.default.createElement(qt, { tag: "a", href: x.url }, x.title)))(O))))), i.default.createElement("div", { className: "row pb-2 pt-3" }, i.default.createElement("div", { className: k }, i.default.createElement("h2", { "data-testid": "title" }, n)), e === "event" && i.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (w || b) && (w ? i.default.createElement("div", { className: "card-button uds-button" }, i.default.createElement(Ge, { color: "maroon", href: w, label: "Register" })) : i.default.createElement("div", { className: "card-button uds-button" }, i.default.createElement(Ge, { color: "maroon", href: b, label: "Attend on Zoom" }))), g && i.default.createElement("div", { className: "card-button uds-button" }, i.default.createElement(Ge, { color: "gray", size: "small", href: g, label: "Add to calendar" })))), e === "event" ? i.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, y && i.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, i.default.createElement("h4", null, i.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), i.default.createElement("div", { dangerouslySetInnerHTML: De(y) })), (w && b || h) && i.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, i.default.createElement("h4", null, i.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), i.default.createElement("div", { dangerouslySetInnerHTML: De(h) }), w && b && i.default.createElement("a", { href: b }, "Attend on Zoom"))) : i.default.createElement("div", { className: "row row-spaced pt-2" }, i.default.createElement("div", { className: "col col-12" }, i.default.createElement("div", { className: "article-social-media" }, i.default.createElement(ca, { url: r, quote: n }, i.default.createElement(ua, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(da, { url: r, quote: n }, i.default.createElement(fa, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(pa, { url: r, quote: n }, i.default.createElement(ma, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), t && i.default.createElement("i", { className: "news-date" }, t))), i.default.createElement("div", { className: "row" }, i.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: De(o), "data-testid": "body" })), e === "news" && i.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, i.default.createElement("div", { className: "col col-12" }, i.default.createElement("div", { className: "author highlight-gold" }, l), u && i.default.createElement("div", { className: "author-title" }, u), s && i.default.createElement("div", { className: "author-contact" }, i.default.createElement("span", { className: "icon-bg" }, i.default.createElement("i", { className: "fas fa-envelope" })), i.default.createElement("a", { href: `mailto: ${s}` }, s)), c && i.default.createElement("div", { className: "author-contact" }, i.default.createElement("span", { className: "icon-bg" }, i.default.createElement("i", { className: "fas fa-phone" })), i.default.createElement("a", { href: `tel: ${c}` }, c)))), e === "event" && i.default.createElement(fs, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, i.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, i.default.createElement("h4", null, "For more information contact:"), i.default.createElement("div", { className: "event-author" }, l), i.default.createElement("div", { className: "event-author-title" }, u), (s || c) && i.default.createElement("div", { className: "event-author-info" }, s && i.default.createElement("div", null, i.default.createElement("a", { href: `mailto: ${s}` }, s)), c && i.default.createElement("div", null, i.default.createElement("a", { href: `tel: ${c}` }, c)))), i.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, i.default.createElement("h4", null, "Share this event:"), i.default.createElement("div", { className: "article-social-media" }, i.default.createElement(ca, { url: r, quote: n }, i.default.createElement(ua, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(da, { url: r, quote: n }, i.default.createElement(fa, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(ns, { url: s, quote: n }, i.default.createElement(as, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(pa, { url: r, quote: n }, i.default.createElement(ma, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
};
tr.propTypes = { type: a().oneOf(["event", "news"]), articleUrl: a().string.isRequired, publicationDate: a().string.isRequired, title: a().string.isRequired, body: a().string.isRequired, authorEmail: a().string, authorName: a().string.isRequired, authorPhone: a().string, authorTitle: a().string, breadcrumbs: a().arrayOf(a().shape({ title: a().string, url: a().string, active: a().bool })), calendarUrl: a().string, headerImageUrl: a().string, eventLocation: a().string, eventTime: a().string, registrationUrl: a().string, zoomUrl: a().string }, tr.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
const ps = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, rr = ({ color: e, icon: r, innerRef: t, onClick: n, size: o, cardTitle: s }) => i.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e} ${o === "large" && "btn-circle-large"}`, ref: t, onClick: () => (Pe({ ...ps, text: `${r == null ? void 0 : r[1]} icon`, section: s }), void (n == null ? void 0 : n())), "aria-label": "Close" }, i.default.createElement("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` }));
rr.propTypes = { color: a().oneOf(["white", "gray", "black"]), icon: a().arrayOf(a().string), innerRef: a().oneOfType([a().object, a().func, a().string]), onClick: a().func, cardTitle: a().string, size: a().oneOf(["large", "small"]) }, rr.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
const ms = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Nt = ({ label: e, cardTitle: r, ariaLabel: t, color: n, disabled: o, element: s, innerRef: l, href: c, onClick: u, ...m }) => {
  const g = de()("btn", "btn-tag", { "btn-tag-alt-white": n === "white", "btn-tag-alt-gray": n === "gray", "btn-tag-alt-dark": n === "dark", disabled: o });
  let h = s;
  return c && s === "button" && (h = "a"), i.default.createElement(h, Ke({ type: h === "button" && u ? "button" : void 0 }, m, { className: g, href: c, ref: l, onClick: () => (Pe({ ...ms, text: e, section: r }), void (u == null ? void 0 : u())), "aria-label": t }), e);
};
Nt.propTypes = { label: a().string, cardTitle: a().string, ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), disabled: a().bool, element: a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func }), a().arrayOf(a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func })]))]), href: a().string, innerRef: a().oneOfType([a().object, a().func, a().string]), onClick: a().func }, Nt.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
const nt = ({ src: e, alt: r, cssClasses: t, loading: n = "lazy", decoding: o = "async", dataTestId: s, fetchPriority: l = "auto", width: c, height: u, cardLink: m, title: g, caption: h, captionTitle: y, border: C, dropShadow: w }) => {
  const b = { src: e, alt: r, loading: n, decoding: o, fetchpriority: l, ...(t == null ? void 0 : t.length) > 0 && { className: Vt(t) }, ...s && { "data-testid": s }, ...c && { width: c }, ...u && { height: u } }, k = de()("uds-img", { borderless: !C, "uds-img-drop-shadow": w }), O = (x) => {
    const L = x ? `${b.className} ${x}` : b.className;
    return m ? i.default.createElement("a", { href: m }, i.default.createElement("img", Ke({}, b, { className: L })), i.default.createElement("span", { className: "visually-hidden" }, g)) : i.default.createElement("img", Ke({}, b, { className: L }));
  };
  return i.default.createElement(i.default.Fragment, null, h ? i.default.createElement("div", { className: k }, i.default.createElement("figure", { className: "figure uds-figure" }, O(), h && i.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, y && i.default.createElement("h3", null, y), i.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: De(h) })))) : O(k));
};
nt.propTypes = { src: a().string.isRequired, alt: a().string.isRequired, cssClasses: a().arrayOf(a().string), loading: a().oneOf(["lazy", "eager"]), decoding: a().oneOf(["sync", "async", "auto"]), fetchPriority: a().oneOf(["auto", "high", "low"]), width: a().string, height: a().string, dataTestId: a().string, cardLink: a().string, title: a().string, caption: a().string, captionTitle: a().string, border: a().bool, dropShadow: a().bool };
const hs = Ve.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, gs = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, nr = ({ type: e, width: r, horizontal: t, image: n, imageAltText: o, title: s, icon: l, body: c, eventFormat: u, eventLocation: m, eventTime: g, buttons: h, linkLabel: y, linkUrl: C, tags: w, showBorders: b, cardLink: k }) => i.default.createElement(Qr, { type: e, width: r, horizontal: t, image: n, imageAltText: o, title: s, icon: l, body: c, eventFormat: u, eventLocation: m, eventTime: g, buttons: h, linkLabel: y, linkUrl: C, tags: w, showBorders: b, cardLink: k });
nr.propTypes = { type: a().oneOf(["default", "degree", "event", "news", "story"]), width: a().oneOf(["25%", "50%", "75%", "100%"]), horizontal: a().bool, title: a().string.isRequired, icon: a().arrayOf(a().string), body: a().string, eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string, image: a().string, imageAltText: a().string, buttons: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["gold", "maroon", "gray", "dark"]), icon: a().arrayOf(a().string), href: a().string, label: a().string, onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: a().string, linkUrl: a().string, tags: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), href: a().string, label: a().string, onClick: a().func })), showBorders: a().bool, cardLink: a().string }, nr.defaultProps = { type: "default", width: "100%", horizontal: !1, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const Qr = ({ type: e, width: r, horizontal: t, image: n, imageAltText: o, title: s, icon: l, body: c, eventFormat: u, eventLocation: m, eventTime: g, buttons: h, linkLabel: y, linkUrl: C, tags: w, showBorders: b, cardLink: k }) => {
  const O = de()("card", "cards-components", { "card-degree": e === "degree", "card-event": e === "event", "card-story": e === "story", [`w-${r.replace("%", "")}`]: r !== "100%", "card-horizontal": t, borderless: !b });
  return i.default.createElement(i.default.Fragment, null, i.default.createElement(hs, { className: O, "data-testid": "card-container" }, !!n && i.default.createElement(nt, { src: n, alt: o, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: k, title: s }), !n && l && i.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), t ? i.default.createElement("div", { className: "card-content-wrapper" }, i.default.createElement(ar, { type: e, body: c, eventFormat: u, eventLocation: m, eventTime: g, title: s, buttons: h, linkLabel: y, linkUrl: C, tags: w, cardLink: k })) : i.default.createElement(ar, { type: e, body: c, eventFormat: u, eventLocation: m, eventTime: g, title: s, buttons: h, linkLabel: y, linkUrl: C, tags: w, cardLink: k })));
};
Qr.propTypes = { type: a().oneOf(["default", "degree", "event", "news", "story"]), width: a().oneOf(["25%", "50%", "75%", "100%"]), horizontal: a().bool, title: a().string.isRequired, icon: a().arrayOf(a().string), body: a().string, eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string, image: a().string, imageAltText: a().string, buttons: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["gold", "maroon", "gray", "dark"]), icon: a().arrayOf(a().string), href: a().string, label: a().string, onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: a().string, linkUrl: a().string, tags: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), href: a().string, label: a().string, onClick: a().func })), showBorders: a().bool, cardLink: a().string }, Qr.defaultProps = { type: "default", width: "100%", horizontal: !1, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const ar = ({ type: e, body: r, eventFormat: t, eventLocation: n, eventTime: o, title: s, buttons: l, linkLabel: c, linkUrl: u, tags: m, cardLink: g }) => {
  return i.default.createElement(i.default.Fragment, null, !!s && i.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, i.default.createElement("h3", { className: "card-title" }, g ? i.default.createElement("a", { href: g }, s) : s)), !!r && i.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, i.default.createElement("div", { dangerouslySetInnerHTML: De(r) })), e === "event" && (o || n) && i.default.createElement(Jr, { eventFormat: t, eventTime: o, eventLocation: n }), l && i.default.createElement("div", { className: "card-buttons" }, l.map((y) => i.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${y.label}-${y.href}` }, i.default.createElement(Ge, { ariaLabel: y.ariaLabel, color: y.color, icon: y.icon, href: y.href, label: y.label, onClick: y.onClick, size: y.size, target: y.target, cardTitle: s })))), u && c && i.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, i.default.createElement("a", { href: (h = u, h.startsWith("https://") || h.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(h) ? h : `mailto:${h}`), onClick: () => Pe({ ...gs, section: s, text: c }) }, c)), m && i.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, m.map((y) => i.default.createElement(Nt, { key: `${y.label}-${y.href}`, ariaLabel: y.ariaLabel, color: y.color, href: y.href, label: y.label, onClick: y.onClick, cardTitle: s }))));
  var h;
};
ar.propTypes = { type: a().oneOf(["default", "degree", "event", "news", "story"]), body: a().string, eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string, title: a().string.isRequired, buttons: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["gold", "maroon", "gray", "dark"]), icon: a().arrayOf(a().string), href: a().string, label: a().string, onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: a().string, linkUrl: a().string, tags: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), href: a().string, label: a().string, onClick: a().func })), cardLink: a().string }, ar.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
const Jr = ({ eventFormat: e, eventTime: r, eventLocation: t }) => e === "inline" ? i.default.createElement("div", { className: "card-event-details" }, r && i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "far fa-calendar" })), i.default.createElement("div", { dangerouslySetInnerHTML: De(r) })), t && i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "fas fa-map-marker-alt" })), i.default.createElement("div", { dangerouslySetInnerHTML: De(t) }))) : i.default.createElement(i.default.Fragment, null, r && i.default.createElement("div", { className: "card-event-details" }, i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "far fa-calendar" })), i.default.createElement("div", { dangerouslySetInnerHTML: De(r) }))), t && i.default.createElement("div", { className: "card-event-details" }, i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "fas fa-map-marker-alt" })), i.default.createElement("span", null, i.default.createElement("div", { dangerouslySetInnerHTML: De(t) })))));
Jr.propTypes = { eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string }, Jr.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
const ys = Ve.div`
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
`, vs = () => i.default.createElement(ys, null, i.default.createElement("div", null), i.default.createElement("div", null), i.default.createElement("div", null), i.default.createElement("div", null)), bs = Ve.section``, Ja = (0, i.createContext)(null), eo = ({ defaultProps: e, dataSource: r, noFeedText: t, renderHeader: n, renderBody: o, dataTransformer: s = (u) => u, dataFilter: l = (u) => u, maxItems: c }) => {
  const [{ data: u, loading: m, error: g }, h] = (() => {
    const [b, k] = (0, i.useState)(), [O, x] = (0, i.useState)(!1), [L, _] = (0, i.useState)(!1), [v, A] = (0, i.useState)("");
    return (0, i.useEffect)(() => {
      v && (() => {
        _(null), x(!0);
        try {
          fetch(v).then((E) => E.json()).then((E) => {
            k(E), x(!1);
          }).catch((E) => {
            _(E), x(!1);
          });
        } catch (E) {
          _(E);
        }
      })();
    }, [v]), [{ data: b, loading: O, error: L }, A];
  })(), [y, C] = (0, i.useState)([]), w = { ...e.dataSource, ...r };
  return (0, i.useEffect)(() => {
    h(w == null ? void 0 : w.url);
  }, [w == null ? void 0 : w.url]), (0, i.useEffect)(() => {
    const b = u == null ? void 0 : u.nodes.map(s), k = b == null ? void 0 : b.filter((O) => l(O, r == null ? void 0 : r.filters));
    C(c ? k == null ? void 0 : k.slice(0, c) : k);
  }, [u]), i.default.createElement(Ja.Provider, { value: { feeds: y } }, i.default.createElement(bs, null, n, g ? i.default.createElement("span", null, "Error, try again!") : i.default.createElement(i.default.Fragment, null, m && !(y != null && y.length) && i.default.createElement("div", { className: "text-center mt-4" }, i.default.createElement(vs, null)), y != null && y.length ? o : !m && i.default.createElement("p", { className: "text-center" }, t))));
};
eo.propTypes = { renderHeader: a().element, renderBody: a().element, maxItems: a().number, dataTransformer: a().func, dataFilter: a().func, noFeedText: a().string };
const dn = a().shape({ color: a().oneOf(["white", "dark"]), text: a().string }), fn = a().shape({ color: a().oneOf(["gold", "maroon", "gray", "dark"]), text: a().string }), ws = a().shape({ color: a().oneOf(["gold", "maroon", "gray", "dark"]), text: a().string, size: a().string }), to = a().shape({ url: a().string, filters: a().string }), ro = a().shape({ header: dn, ctaButton: fn, dataSource: to, maxItems: a().number }), ks = Ve.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, no = ({ defaultProps: e, header: r, ctaButton: t }) => {
  const n = { ...e.header, ...r }, o = { ...e.ctaButton, ...t };
  return i.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, i.default.createElement("div", { className: "col-sm-12 col-md-9" }, i.default.createElement("h2", { className: `text-${n.color}` }, n.text)), i.default.createElement(ks, { className: "col-sm-12 col-md-3" }, i.default.createElement("a", { className: `btn btn-${o.color}`, href: o.url, onClick: () => Pe({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: n.text, text: o.text }) }, o.text)));
};
no.propTypes = { defaultProps: ro, header: dn, ctaButton: fn };
const ao = ({ children: e }) => i.default.createElement("div", { className: "row", "data-testid": "feed-body" }, i.default.createElement("div", { className: "col" }, e));
ao.propTypes = { children: a().element };
const Es = Ve.img`
  width: 100%;
`, pn = (e) => {
  const r = e.type || "heading-hero";
  return { "heading-hero": () => function({ image: t, subTitle: n, title: o, contents: s, contentsColor: l }) {
    const c = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, u = { black: "text-dark", white: "text-white", undefined: "" };
    let m = i.default.createElement(i.default.Fragment, null);
    return o && (m = i.default.createElement("h1", { style: { maxWidth: o.maxWidth || "" }, "data-testid": "hero-title" }, i.default.createElement("span", { className: de()({ [u[o.color]]: o.color, [c[o.highlightColor]]: o.highlightColor }) }, o.text))), o && n && (m = i.default.createElement("header", null, i.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, i.default.createElement("span", { className: de()({ [u[n.color]]: n.color, [c[n.highlightColor]]: n.highlightColor }) }, n.text)), m)), i.default.createElement("div", { className: de()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[t == null ? void 0 : t.size]]: t == null ? void 0 : t.size }) }, i.default.createElement("div", { className: "hero-overlay" }), i.default.createElement(Es, { className: "hero", src: t == null ? void 0 : t.url, alt: t == null ? void 0 : t.altText, "data-testid": "hero-image" }), m, s && i.default.createElement("div", { "data-testid": "hero-content", className: de()("content", { [u[l]]: l }) }, s.map((g, h) => i.default.createElement("p", { key: `content-${h}` }, g.text))));
  }(e), "story-hero": () => function({ image: t, title: n, contents: o }) {
    return console.log({ image: t, title: n, contents: o }), i.default.createElement("div", null, "TODO: to be implemented");
  }(e), undefined: () => (console.error(`the type '${r}' is not supported by the 'Hero' component.`), null) }[r]();
};
pn.propTypes = { type: a().oneOf(["heading-hero", "story-hero"]), image: ci, title: Ir, subTitle: Ir, contents: a().arrayOf(Ir), contentsColor: a().string };
const qe = ({ dataId: e, isClickeable: r, disabled: t, pageLinkIcon: n, selectedPage: o, onClick: s, ellipses: l, ariaLabel: c, children: u, ariaDisabled: m }) => i.default.createElement("li", { className: de()("page-item", { disabled: t, active: o, elipses: l }) }, r ? i.default.createElement("button", { type: "button", "aria-label": c, className: de()("page-link", { "page-link-icon": n }), onClick: s, "data-testid": "page-link", "data-id": e, "aria-current": o ? "page" : null, "aria-disabled": m }, u, o && i.default.createElement("span", { className: "visually-hidden" }, "(current)")) : i.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, u));
qe.propTypes = { isClickeable: a().bool, disabled: a().bool, pageLinkIcon: a().bool, selectedPage: a().bool, dataId: a().string, onClick: a().func, children: a().node, ellipses: a().bool, ariaLabel: a().string, ariaDisabled: a().bool }, qe.defaultProps = { isClickeable: !1, disabled: !1, pageLinkIcon: !1, selectedPage: !1, onClick: () => {
} };
const Ss = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, or = ({ type: e, background: r, currentPage: t, totalPages: n, onChange: o }) => {
  const [s, l] = (0, i.useState)(null);
  (0, i.useEffect)(() => {
    l(t);
  }, [t]);
  const c = (u, m) => {
    const g = { first: 1, prev: s === 1 ? 1 : s - 1, next: s === n ? n : s + 1, last: n }[m] ?? m;
    l(g), ((h) => {
      Pe({ ...Ss, text: `page ${h}` });
    })(g), o == null || o(u, g);
  };
  return i.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, i.default.createElement("ul", { className: de()("pagination", "justify-content-center", "pt-2", "pb-2", { border: e === "bordered", "uds-bg-gray1": r === "gray1", "uds-bg-gray": r === "gray2", "uds-bg-dark": r === "gray7" }) }, i.default.createElement(qe, { dataId: "prev", isClickeable: !0, disabled: s === 1, pageLinkIcon: !0, onClick: (u) => c(u, "prev"), ariaDisabled: s === 1, ariaLabel: "Previous Page" }), (() => {
    const u = Kn(s === n - 1, 2, s === n ? 3 : 1), m = Kn(s === 1, 3, s === 2 ? 2 : 1), g = [...Qn(s - u, s, n), ...Qn(s, s + 1 + m, n)];
    return i.default.createElement(i.default.Fragment, null, g[0] !== 1 && i.default.createElement(qe, { ariaLabel: `Page 1 of ${n}`, isClickeable: !0, selectedPage: s === 1, onClick: (h) => c(h, "first") }, "1"), g[0] > 2 && i.default.createElement(qe, { ellipses: !0 }, "..."), g.map((h) => i.default.createElement(qe, { ariaLabel: `Page ${h} of ${n}`, isClickeable: !0, key: h, selectedPage: s === h, onClick: (y) => c(y, h) }, h)), g[g.length - 1] < n - 1 && i.default.createElement(qe, { ellipses: !0 }, "..."), g[g.length - 1] !== n && i.default.createElement(qe, { isClickeable: !0, ariaLabel: `Page ${n} of ${n}`, selectedPage: s === n, onClick: (h) => c(h, "last") }, n));
  })(), i.default.createElement(qe, { dataId: "next", isClickeable: !0, ariaDisabled: s === n, disabled: s === n, pageLinkIcon: !0, onClick: (u) => c(u, "next"), ariaLabel: "Next Page" })));
};
or.propTypes = { type: a().oneOf(["default", "bordered"]).isRequired, background: a().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: a().number, totalPages: a().number, onChange: a().func.isRequired }, or.defaultProps = { currentPage: 1, totalPages: 10 };
const ha = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, et = (e) => e === "small", oo = ({ size: e, image: r, imageAlt: t }) => et(e) ? i.default.createElement("div", { className: "image-wrapper" }, i.default.createElement(nt, { src: r, alt: t, fetchPriority: "high" })) : i.default.createElement(nt, { src: r, alt: t, fetchPriority: "high" });
oo.propTypes = { size: a().oneOf(["small", "large"]), image: a().string.isRequired, imageAlt: a().string.isRequired };
const io = ({ heading: e, citation: r }) => i.default.createElement("div", { className: "citation" }, i.default.createElement("h4", null, e), i.default.createElement("p", null, "— ", r));
io.propTypes = { heading: a().string.isRequired, citation: a().string.isRequired };
const so = ({ imageSize: e, body: r, heading: t, readMoreLink: n }) => {
  const [o, s] = (0, i.useState)(!1), l = `info-layer-${Math.floor(1e5 * Math.random())}`, c = (u) => {
    u.type !== "click" && u.key !== "Enter" && u.key !== " " || (s(!o), Pe({ ...ha, text: "Expand ranking", action: o ? "open" : "close", section: t }));
  };
  return i.default.createElement("div", { className: de()("info-layer", { active: o }), "data-testid": "info-layer", id: l }, i.default.createElement("div", { className: "content" }, i.default.createElement("div", { className: de()("header", { closed: et(e) && !o }) }, et(e) && i.default.createElement("p", { dangerouslySetInnerHTML: De(r) }), !et(e) && i.default.createElement(i.default.Fragment, null, i.default.createElement("button", { onClick: c, className: "btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": o, "aria-controls": l }, i.default.createElement("h4", null, t), i.default.createElement("i", { className: "fas fa-chevron-up" }))), et(e) && i.default.createElement(i.default.Fragment, null, i.default.createElement("button", { onClick: c, className: "btn btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": o, "aria-controls": l }, i.default.createElement("i", { className: "fas fa-chevron-up" })))), !et(e) && i.default.createElement("p", { dangerouslySetInnerHTML: De(r) }), n && i.default.createElement("a", { href: n, "aria-label": "Read more", className: "read-more", onClick: () => {
    Pe({ ...ha, section: t, text: "read more" });
  } }, "Read more ", i.default.createElement("span", { className: "visually-hidden" }, t), i.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
};
so.propTypes = { imageSize: a().oneOf(["small", "large"]), body: a().string.isRequired, heading: a().string.isRequired, readMoreLink: a().string };
const mn = ({ imageSize: e = "large", image: r, imageAlt: t, heading: n, body: o, readMoreLink: s = "", citation: l }) => i.default.createElement("div", { className: de()("card-ranking", { "large-image": e === "large", "small-image": e === "small" }) }, i.default.createElement(oo, { size: e, image: r, imageAlt: t }), et(e) && i.default.createElement(io, { heading: n, citation: l }), i.default.createElement(so, { imageSize: e, body: o, heading: n, readMoreLink: s }));
mn.propTypes = { imageSize: a().oneOf(["small", "large"]).isRequired, image: a().string.isRequired, imageAlt: a().string.isRequired, heading: a().string.isRequired, body: a().string.isRequired, readMoreLink: a().string, citation: a().string };
const xs = Ve.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, lo = ({ hidePrev: e, hideNext: r, clickPrev: t, clickNext: n }) => i.default.createElement(xs, null, !e && i.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: t, tabIndex: -1 }, i.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), i.default.createElement("span", { className: "visually-hidden" }, "Previous")), !r && i.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: n, tabIndex: -1 }, i.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), i.default.createElement("span", { className: "visually-hidden" }, "Next")));
lo.propTypes = { hidePrev: a().bool, hideNext: a().bool, clickPrev: a().func.isRequired, clickNext: a().func.isRequired };
const co = (0, i.forwardRef)(function(e, r) {
  const { id: t, selected: n, title: o, selectTab: s, leftKeyPressed: l, rightKeyPressed: c, icon: u } = e, m = (0, i.useRef)(null);
  return (0, i.useImperativeHandle)(r, () => ({ focus() {
    m.current.focus();
  }, scrollIntoView() {
    var y, C, w, b, k, O, x;
    const g = ((y = m.current) == null ? void 0 : y.offsetWidth) / 2 + m.current.offsetLeft, h = ((w = (C = m.current) == null ? void 0 : C.offsetParent) == null ? void 0 : w.scrollLeft) + ((k = (b = m.current) == null ? void 0 : b.offsetParent) == null ? void 0 : k.offsetWidth) / 2;
    (x = (O = m.current) == null ? void 0 : O.offsetParent) == null || x.scrollBy({ left: g - h });
  } }), []), i.default.createElement("a", { ref: m, className: "nav-item nav-link " + (n ? "active" : ""), id: t, href: `#nav-${t}`, role: "tab", "aria-controls": `nav-${t}`, "aria-selected": n, onClick: (g) => s(g, t, o), onKeyDown: (g) => {
    g.keyCode === 37 ? (g.preventDefault(), l()) : g.keyCode === 39 && (g.preventDefault(), c());
  }, tabIndex: n ? "" : "-1" }, o, " ", u && i.default.createElement("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]} me-1` }));
});
co.propTypes = { id: a().string.isRequired, selected: a().bool.isRequired, title: a().string.isRequired, selectTab: a().func.isRequired, leftKeyPressed: a().func.isRequired, rightKeyPressed: a().func.isRequired, icon: a().arrayOf(a().string) };
const uo = ({ id: e, bgColor: r, selected: t, children: n }) => t && i.default.createElement("div", { className: `tab-pane fade show ${t ? "show active" : ""} ${r === "bg-dark" ? "text-white" : ""}`, id: `nav-${e}`, role: "tabpanel", "aria-labelledby": `nav-${e}-tab` }, n);
uo.propTypes = { id: a().string.isRequired, bgColor: a().string, selected: a().bool, children: a().oneOfType([a().array, a().element]) };
const fo = ({ initialTab: e = "", children: r, bgColor: t = "", onTabChange: n = () => {
} }) => {
  const o = i.default.Children.toArray(r), s = (0, i.useRef)(!1), [l, c] = (0, i.useState)(e && e !== "null" ? e : o[0].props.id), u = (0, i.useRef)(null), [m, g] = function() {
    const A = (0, i.useRef)({}), E = (0, i.useCallback)((z) => (te) => {
      A.current[z] = te;
    }, []);
    return [A, E];
  }(), h = (A) => {
    var E;
    n(A), (E = m.current[A]) == null || E.focus(), c(A);
  }, [y, C] = (0, i.useState)(0), [w, b] = (0, i.useState)();
  (0, i.useEffect)(() => {
    const A = () => {
      C(u.current.scrollLeft);
    };
    return u.current.addEventListener("scroll", A), A(), () => {
      u.current && u.current.removeEventListener("scroll", A);
    };
  }, [w]), (0, i.useEffect)(() => {
    const A = () => {
      b(u.current.scrollWidth - u.current.offsetWidth);
    };
    return window.addEventListener("resize", A), A(), () => {
      u.current && window.removeEventListener("resize", A);
    };
  }, []), (0, i.useEffect)(() => {
    var A;
    (A = m.current[l]) == null || A.scrollIntoView();
  }, [l]), (0, i.useEffect)(() => {
    s.current && e && e !== "null" && l !== e && c(e);
  }, [e]), (0, i.useEffect)(() => {
    s.current = !0;
  }, []);
  const k = (A) => {
    Pe({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: A });
  }, O = o.map((A) => i.default.cloneElement(A, { bgColor: t, selected: l === A.props.id })), x = (A) => {
    const E = u.current, z = E.scrollWidth - E.clientWidth;
    let te = E.scrollLeft + 200 * A;
    te = Math.max(0, Math.min(z, te)), E.scrollTo({ left: te, behavior: "smooth" });
  }, L = (A, E, z) => {
    Pe({ event: "link", action: "click", name: "onclick", type: "internal link", text: z }), A.preventDefault(), h(E);
  }, _ = (A = !0) => {
    const E = o.length, z = A ? 1 : -1, te = o.findIndex((X) => X.props.id === l), pe = o[(E + te + z) % E].props.id;
    h(pe);
  };
  let v = "uds-tabbed-panels";
  return t === "bg-dark" && (v += " uds-tabbed-panels-dark"), i.default.createElement("div", { className: t }, i.default.createElement("nav", { className: v }, i.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: u }, o.map((A, E) => i.default.createElement(co, { ref: g(A.props.id), id: A.props.id, title: A.props.title, selected: l === A.props.id, selectTab: L, key: A.props.id, leftKeyPressed: () => _(!1), rightKeyPressed: () => _(), icon: A.props.icon, index: E }))), i.default.createElement(lo, { hidePrev: y <= 0, hideNext: y >= w, clickPrev: () => {
    x(-1), k("left chevron");
  }, clickNext: () => {
    x(1), k("right chevron");
  } })), i.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, O));
};
fo.propTypes = { initialTab: a().string, children: a().arrayOf(a().element).isRequired, bgColor: a().string, onTabChange: a().func };
const hn = ({ imageSource: e, imageAltText: r, quote: t, itemStyle: n = {} }) => {
  var o, s;
  return i.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${Vt(n.containerCssClass)}` }, e && i.default.createElement(nt, { src: e, alt: r, dataTestId: "testimonial-image", fetchPriority: "high" }), i.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, i.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), i.default.createElement("blockquote", { style: { paddingLeft: 0 } }, t.title && i.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, i.default.createElement("span", { className: Vt(n.titleCssClass) }, t.title)), t.content && i.default.createElement("p", { className: Vt(n.contentCssClass), "data-testid": "testimonial-content" }, t.content), (!!((o = t.cite) != null && o.name) || !!((s = t.cite) != null && s.description)) && i.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, i.default.createElement("cite", { className: "name" }, t.cite.name), t.cite && i.default.createElement("cite", { className: "description" }, t.cite.description))));
};
hn.propTypes = { quote: a().shape({ title: a().string, content: a().string, cite: a().shape({ name: a().string, description: a().string }) }).isRequired, imageSource: a().string, imageAltText: a().string, itemStyle: a().shape({ containerCssClass: a().arrayOf(a().string), titleCssClass: a().arrayOf(a().string), contentCssClass: a().arrayOf(a().string) }) };
const Cs = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, gn = (e) => {
  const { type: r = "video", url: t = "", vttUrl: n, title: o = "", caption: s, className: l, controls: c = !0 } = e;
  return r === "youtube" ? (({ title: u = "", caption: m, url: g = "", className: h }) => i.default.createElement("div", { className: de()(`uds-video-container ${h}`, { "uds-video-with-caption": m }) }, i.default.createElement("div", { className: "uds-video-player youtube-video" }, i.default.createElement("iframe", { title: u, src: g })), m && i.default.createElement("figure", { "data-testid": "video-caption" }, i.default.createElement("figcaption", null, m))))({ url: t, title: o, caption: s, className: l }) : (({ url: u = "", vttUrl: m, caption: g, title: h = "", className: y, controls: C = !0 }) => {
    const w = (0, i.useRef)(null);
    return i.default.createElement("div", { className: de()(`uds-video-container ${y}`, { "uds-video-with-caption": g }) }, i.default.createElement("div", { className: "uds-video-player" }, i.default.createElement("video", { ref: w, title: h, onClick: () => {
      Pe({ ...Cs, section: h });
    }, playsInline: !0, controls: C || !0 }, i.default.createElement("source", { src: u }), i.default.createElement("track", { src: m, kind: "captions", srcLang: "en", label: "english_captions" }))), g && i.default.createElement("figure", { "data-testid": "video-caption" }, i.default.createElement("figcaption", null, g)));
  })({ url: t, vttUrl: n, title: o, caption: s, className: l, controls: c });
};
gn.propTypes = { type: a().oneOf(["video", "youtube"]), url: a().string, vttUrl: a().string, title: a().string, className: a().string, caption: a().string, controls: a().bool };
const Ts = ((e) => {
  var r = {};
  return ye.d(r, e), r;
})({ default: () => ni.default }), Ie = (e, r, t) => {
  Ts.default.render(i.default.createElement(e, r), t);
}, Ns = ({ targetSelector: e, props: r }) => Ie(sn, r, document.querySelector(e)), As = ({ targetSelector: e, props: r }) => Ie(un, r, document.querySelector(e)), Os = ({ targetSelector: e, props: r }) => Ie(tr, r, document.querySelector(e)), Rs = ({ targetSelector: e, props: r }) => Ie(Ge, r, document.querySelector(e)), _s = ({ targetSelector: e, props: r }) => Ie(rr, r, document.querySelector(e)), Ps = ({ targetSelector: e, props: r }) => Ie(Nt, r, document.querySelector(e)), Is = ({ targetSelector: e, props: r }) => Ie(nr, r, document.querySelector(e)), Ls = ({ targetSelector: e, props: r }) => Ie(pn, r, document.querySelector(e)), $s = ({ targetSelector: e, props: r }) => Ie(nt, r, document.querySelector(e)), Ds = ({ targetSelector: e, props: r }) => Ie(mn, r, document.querySelector(e)), Ms = ({ targetSelector: e, props: r }) => Ie(or, r, document.querySelector(e)), js = ({ targetSelector: e, props: r }) => Ie(hn, r, document.querySelector(e)), zs = ({ targetSelector: e, props: r }) => Ie(gn, r, document.querySelector(e));
var po = gt.Zp, Fs = gt.TR, Us = gt.Pb, mo = gt.Ur, Hs = gt._Q, ho = { exports: {} }, Mr = { exports: {} }, le = {};
var ga;
function qs() {
  if (ga) return le;
  ga = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function L(v) {
    if (typeof v == "object" && v !== null) {
      var A = v.$$typeof;
      switch (A) {
        case r:
          switch (v = v.type, v) {
            case u:
            case m:
            case n:
            case s:
            case o:
            case h:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case g:
                case w:
                case C:
                case l:
                  return v;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  function _(v) {
    return L(v) === m;
  }
  return le.AsyncMode = u, le.ConcurrentMode = m, le.ContextConsumer = c, le.ContextProvider = l, le.Element = r, le.ForwardRef = g, le.Fragment = n, le.Lazy = w, le.Memo = C, le.Portal = t, le.Profiler = s, le.StrictMode = o, le.Suspense = h, le.isAsyncMode = function(v) {
    return _(v) || L(v) === u;
  }, le.isConcurrentMode = _, le.isContextConsumer = function(v) {
    return L(v) === c;
  }, le.isContextProvider = function(v) {
    return L(v) === l;
  }, le.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }, le.isForwardRef = function(v) {
    return L(v) === g;
  }, le.isFragment = function(v) {
    return L(v) === n;
  }, le.isLazy = function(v) {
    return L(v) === w;
  }, le.isMemo = function(v) {
    return L(v) === C;
  }, le.isPortal = function(v) {
    return L(v) === t;
  }, le.isProfiler = function(v) {
    return L(v) === s;
  }, le.isStrictMode = function(v) {
    return L(v) === o;
  }, le.isSuspense = function(v) {
    return L(v) === h;
  }, le.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === m || v === s || v === o || v === h || v === y || typeof v == "object" && v !== null && (v.$$typeof === w || v.$$typeof === C || v.$$typeof === l || v.$$typeof === c || v.$$typeof === g || v.$$typeof === k || v.$$typeof === O || v.$$typeof === x || v.$$typeof === b);
  }, le.typeOf = L, le;
}
var ya;
function go() {
  return ya || (ya = 1, Mr.exports = qs()), Mr.exports;
}
var jr, va;
function Bs() {
  if (va) return jr;
  va = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jr = e, jr;
}
var zr, ba;
function Ws() {
  if (ba) return zr;
  ba = 1;
  var e = Bs();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, zr = function() {
    function n(l, c, u, m, g, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
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
    return s.PropTypes = s, s;
  }, zr;
}
ho.exports = Ws()();
var Gs = ho.exports;
const fe = /* @__PURE__ */ ja(Gs), yo = fe.shape({
  color: fe.oneOf(["white", "dark"]),
  text: fe.string
}), vo = fe.shape({
  color: fe.oneOf(["gold", "maroon", "gray", "dark"]),
  text: fe.string
});
fe.shape({
  color: fe.oneOf(["gold", "maroon", "gray", "dark"]),
  text: fe.string,
  size: fe.string
});
const bo = fe.shape({
  url: fe.string,
  filters: fe.string
});
fe.shape({
  header: yo,
  ctaButton: vo,
  dataSource: bo,
  maxItems: fe.number
});
const wa = {
  header: {
    color: "dark",
    text: "Events list"
  },
  ctaButton: {
    color: "gold",
    text: "Click to see more events",
    url: "https://asuevents.asu.edu/"
  },
  dataSource: {
    url: "https://asuevents.asu.edu/feed-json/"
  }
}, ka = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], Ea = (e) => e.toLowerCase().split(" ").join("_"), Vs = (e, r) => {
  if (!r) return !0;
  const t = r.split(",");
  for (let n = 0; n < t.length; n += 1) {
    const o = Ea(t[n]);
    for (let s = 0; s < ka.length; s += 1) {
      const l = ka[s];
      if (Ea(e[l] || "").includes(o)) return !0;
    }
  }
  return !1;
}, Ys = (e) => ({
  id: e.node.nid,
  title: e.node.title,
  imageUrl: e.node.image_url,
  location: (e.node.campus || "").trim(),
  interests: e.node.interests,
  startDate: e.node.very_start_date,
  endDate: e.node.very_end_date,
  alias: e.node.alias,
  // Also used for card link in title of card
  audiences: e.node.audiences,
  eventUnits: e.node.event_units,
  eventTopics: e.node.event_topics,
  eventTypes: e.node.event_types,
  collegeUnit: e.node.college_unit,
  eventButtonUrl: e.node.ticketing_rsvp_url,
  eventButtonText: e.node.ticketing_rsvp_txt
}), yn = ({ children: e, header: r, ctaButton: t, dataSource: n, maxItems: o }) => (
  // Calling the components-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the components-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ _e.jsx(
    Us,
    {
      renderHeader: r && t ? /* @__PURE__ */ _e.jsx(
        Hs,
        {
          header: r,
          ctaButton: t,
          defaultProps: wa
        }
      ) : null,
      renderBody: /* @__PURE__ */ _e.jsx(Fs, { children: e }),
      dataTransformer: Ys,
      dataFilter: Vs,
      dataSource: n,
      defaultProps: wa,
      noFeedText: "No events to show.",
      maxItems: o
    }
  )
);
yn.propTypes = {
  header: yo,
  ctaButton: vo,
  dataSource: bo,
  maxItems: fe.number,
  children: fe.element
};
const Zs = fe.shape({
  color: fe.oneOf(["white", "dark"]),
  text: fe.string
}), Xs = fe.shape({
  color: fe.oneOf(["gold", "maroon", "gray", "dark"]),
  text: fe.string,
  url: fe.string
}), Ks = fe.shape({
  url: fe.string.isRequired,
  filters: fe.string
}).isRequired, wo = {
  header: Zs,
  ctaButton: Xs,
  dataSource: Ks,
  maxItems: fe.number
}, Qs = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), Sa = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), en = (e) => {
  let r = e.split("T");
  return r = r.length > 1 ? r.join("T") : `${r[0].split(":")[0]}T00:00:00Z`, r;
}, xa = (e) => {
  let r = e.getHours(), t = e.getMinutes();
  const n = r >= 12 ? "p.m." : "a.m.";
  return r %= 12, r = r || 12, t = t < 10 ? `0${t}` : t, `${r}:${t} ${n}`;
}, ko = (e, r) => {
  const t = en(e), n = en(r);
  let o = Sa(new Date(t)), s = Sa(new Date(n));
  return o = xa(new Date(o)), s = xa(new Date(s)), e === r ? o : `${o} - ${s}`;
}, ir = (e, r) => {
  const t = en(e);
  return {
    ISO: t.split("T")[0],
    COMPLETE: Qs(new Date(t))
  }[r];
};
var vn = go();
function Js(e) {
  function r(S, T, p, P, f) {
    for (var D = 0, N = 0, Q = 0, Z = 0, q, W, K = 0, ie = 0, J, ae = J = q = 0, G = 0, ne = 0, Oe = 0, j = 0, I = p.length, H = I - 1, $, R = "", re = "", xe = "", ze = "", Me; G < I; ) {
      if (W = p.charCodeAt(G), G === H && N + Z + Q + D !== 0 && (N !== 0 && (W = N === 47 ? 10 : 47), Z = Q = D = 0, I++, H++), N + Z + Q + D === 0) {
        if (G === H && (0 < ne && (R = R.replace(y, "")), 0 < R.trim().length)) {
          switch (W) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              R += p.charAt(G);
          }
          W = 59;
        }
        switch (W) {
          case 123:
            for (R = R.trim(), q = R.charCodeAt(0), J = 1, j = ++G; G < I; ) {
              switch (W = p.charCodeAt(G)) {
                case 123:
                  J++;
                  break;
                case 125:
                  J--;
                  break;
                case 47:
                  switch (W = p.charCodeAt(G + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ae = G + 1; ae < H; ++ae)
                          switch (p.charCodeAt(ae)) {
                            case 47:
                              if (W === 42 && p.charCodeAt(ae - 1) === 42 && G + 2 !== ae) {
                                G = ae + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (W === 47) {
                                G = ae + 1;
                                break e;
                              }
                          }
                        G = ae;
                      }
                  }
                  break;
                case 91:
                  W++;
                case 40:
                  W++;
                case 34:
                case 39:
                  for (; G++ < H && p.charCodeAt(G) !== W; )
                    ;
              }
              if (J === 0) break;
              G++;
            }
            switch (J = p.substring(j, G), q === 0 && (q = (R = R.replace(h, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < ne && (R = R.replace(y, "")), W = R.charCodeAt(1), W) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ne = T;
                    break;
                  default:
                    ne = Ce;
                }
                if (J = r(T, ne, J, W, f + 1), j = J.length, 0 < he && (ne = t(Ce, R, Oe), Me = c(3, J, ne, T, ee, Y, j, W, f, P), R = ne.join(""), Me !== void 0 && (j = (J = Me.trim()).length) === 0 && (W = 0, J = "")), 0 < j) switch (W) {
                  case 115:
                    R = R.replace(A, l);
                  case 100:
                  case 109:
                  case 45:
                    J = R + "{" + J + "}";
                    break;
                  case 107:
                    R = R.replace(x, "$1 $2"), J = R + "{" + J + "}", J = ue === 1 || ue === 2 && s("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = R + J, P === 112 && (J = (re += J, ""));
                }
                else J = "";
                break;
              default:
                J = r(T, t(T, R, Oe), J, P, f + 1);
            }
            xe += J, J = Oe = ne = ae = q = 0, R = "", W = p.charCodeAt(++G);
            break;
          case 125:
          case 59:
            if (R = (0 < ne ? R.replace(y, "") : R).trim(), 1 < (j = R.length)) switch (ae === 0 && (q = R.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (j = (R = R.replace(" ", ":")).length), 0 < he && (Me = c(1, R, T, S, ee, Y, re.length, P, f, P)) !== void 0 && (j = (R = Me.trim()).length) === 0 && (R = "\0\0"), q = R.charCodeAt(0), W = R.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (W === 105 || W === 99) {
                  ze += R + p.charAt(G);
                  break;
                }
              default:
                R.charCodeAt(j - 1) !== 58 && (re += o(R, q, W, R.charCodeAt(2)));
            }
            Oe = ne = ae = q = 0, R = "", W = p.charCodeAt(++G);
        }
      }
      switch (W) {
        case 13:
        case 10:
          N === 47 ? N = 0 : 1 + q === 0 && P !== 107 && 0 < R.length && (ne = 1, R += "\0"), 0 < he * V && c(0, R, T, S, ee, Y, re.length, P, f, P), Y = 1, ee++;
          break;
        case 59:
        case 125:
          if (N + Z + Q + D === 0) {
            Y++;
            break;
          }
        default:
          switch (Y++, $ = p.charAt(G), W) {
            case 9:
            case 32:
              if (Z + D + N === 0) switch (K) {
                case 44:
                case 58:
                case 9:
                case 32:
                  $ = "";
                  break;
                default:
                  W !== 32 && ($ = " ");
              }
              break;
            case 0:
              $ = "\\0";
              break;
            case 12:
              $ = "\\f";
              break;
            case 11:
              $ = "\\v";
              break;
            case 38:
              Z + N + D === 0 && (ne = Oe = 1, $ = "\f" + $);
              break;
            case 108:
              if (Z + N + D + B === 0 && 0 < ae) switch (G - ae) {
                case 2:
                  K === 112 && p.charCodeAt(G - 3) === 58 && (B = K);
                case 8:
                  ie === 111 && (B = ie);
              }
              break;
            case 58:
              Z + N + D === 0 && (ae = G);
              break;
            case 44:
              N + Q + Z + D === 0 && (ne = 1, $ += "\r");
              break;
            case 34:
            case 39:
              N === 0 && (Z = Z === W ? 0 : Z === 0 ? W : Z);
              break;
            case 91:
              Z + N + Q === 0 && D++;
              break;
            case 93:
              Z + N + Q === 0 && D--;
              break;
            case 41:
              Z + N + D === 0 && Q--;
              break;
            case 40:
              if (Z + N + D === 0) {
                if (q === 0) switch (2 * K + 3 * ie) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                Q++;
              }
              break;
            case 64:
              N + Q + Z + D + ae + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + D + Q)) switch (N) {
                case 0:
                  switch (2 * W + 3 * p.charCodeAt(G + 1)) {
                    case 235:
                      N = 47;
                      break;
                    case 220:
                      j = G, N = 42;
                  }
                  break;
                case 42:
                  W === 47 && K === 42 && j + 2 !== G && (p.charCodeAt(j + 2) === 33 && (re += p.substring(j, G + 1)), $ = "", N = 0);
              }
          }
          N === 0 && (R += $);
      }
      ie = K, K = W, G++;
    }
    if (j = re.length, 0 < j) {
      if (ne = T, 0 < he && (Me = c(2, re, ne, S, ee, Y, j, P, f, P), Me !== void 0 && (re = Me).length === 0)) return ze + re + xe;
      if (re = ne.join(",") + "{" + re + "}", ue * B !== 0) {
        switch (ue !== 2 || s(re, 2) || (B = 0), B) {
          case 111:
            re = re.replace(_, ":-moz-$1") + re;
            break;
          case 112:
            re = re.replace(L, "::-webkit-input-$1") + re.replace(L, "::-moz-$1") + re.replace(L, ":-ms-input-$1") + re;
        }
        B = 0;
      }
    }
    return ze + re + xe;
  }
  function t(S, T, p) {
    var P = T.trim().split(k);
    T = P;
    var f = P.length, D = S.length;
    switch (D) {
      case 0:
      case 1:
        var N = 0;
        for (S = D === 0 ? "" : S[0] + " "; N < f; ++N)
          T[N] = n(S, T[N], p).trim();
        break;
      default:
        var Q = N = 0;
        for (T = []; N < f; ++N)
          for (var Z = 0; Z < D; ++Z)
            T[Q++] = n(S[Z] + " ", P[N], p).trim();
    }
    return T;
  }
  function n(S, T, p) {
    var P = T.charCodeAt(0);
    switch (33 > P && (P = (T = T.trim()).charCodeAt(0)), P) {
      case 38:
        return T.replace(O, "$1" + S.trim());
      case 58:
        return S.trim() + T.replace(O, "$1" + S.trim());
      default:
        if (0 < 1 * p && 0 < T.indexOf("\f")) return T.replace(O, (S.charCodeAt(0) === 58 ? "" : "$1") + S.trim());
    }
    return S + T;
  }
  function o(S, T, p, P) {
    var f = S + ";", D = 2 * T + 3 * p + 4 * P;
    if (D === 944) {
      S = f.indexOf(":", 9) + 1;
      var N = f.substring(S, f.length - 1).trim();
      return N = f.substring(0, S).trim() + N + ";", ue === 1 || ue === 2 && s(N, 1) ? "-webkit-" + N + N : N;
    }
    if (ue === 0 || ue === 2 && !s(f, 1)) return f;
    switch (D) {
      case 1015:
        return f.charCodeAt(10) === 97 ? "-webkit-" + f + f : f;
      case 951:
        return f.charCodeAt(3) === 116 ? "-webkit-" + f + f : f;
      case 963:
        return f.charCodeAt(5) === 110 ? "-webkit-" + f + f : f;
      case 1009:
        if (f.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + f + f;
      case 978:
        return "-webkit-" + f + "-moz-" + f + f;
      case 1019:
      case 983:
        return "-webkit-" + f + "-moz-" + f + "-ms-" + f + f;
      case 883:
        if (f.charCodeAt(8) === 45) return "-webkit-" + f + f;
        if (0 < f.indexOf("image-set(", 11)) return f.replace(X, "$1-webkit-$2") + f;
        break;
      case 932:
        if (f.charCodeAt(4) === 45) switch (f.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + f.replace("-grow", "") + "-webkit-" + f + "-ms-" + f.replace("grow", "positive") + f;
          case 115:
            return "-webkit-" + f + "-ms-" + f.replace("shrink", "negative") + f;
          case 98:
            return "-webkit-" + f + "-ms-" + f.replace("basis", "preferred-size") + f;
        }
        return "-webkit-" + f + "-ms-" + f + f;
      case 964:
        return "-webkit-" + f + "-ms-flex-" + f + f;
      case 1023:
        if (f.charCodeAt(8) !== 99) break;
        return N = f.substring(f.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + N + "-webkit-" + f + "-ms-flex-pack" + N + f;
      case 1005:
        return w.test(f) ? f.replace(C, ":-webkit-") + f.replace(C, ":-moz-") + f : f;
      case 1e3:
        switch (N = f.substring(13).trim(), T = N.indexOf("-") + 1, N.charCodeAt(0) + N.charCodeAt(T)) {
          case 226:
            N = f.replace(v, "tb");
            break;
          case 232:
            N = f.replace(v, "tb-rl");
            break;
          case 220:
            N = f.replace(v, "lr");
            break;
          default:
            return f;
        }
        return "-webkit-" + f + "-ms-" + N + f;
      case 1017:
        if (f.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (T = (f = S).length - 10, N = (f.charCodeAt(T) === 33 ? f.substring(0, T) : f).substring(S.indexOf(":", 7) + 1).trim(), D = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
          case 203:
            if (111 > N.charCodeAt(8)) break;
          case 115:
            f = f.replace(N, "-webkit-" + N) + ";" + f;
            break;
          case 207:
          case 102:
            f = f.replace(N, "-webkit-" + (102 < D ? "inline-" : "") + "box") + ";" + f.replace(N, "-webkit-" + N) + ";" + f.replace(N, "-ms-" + N + "box") + ";" + f;
        }
        return f + ";";
      case 938:
        if (f.charCodeAt(5) === 45) switch (f.charCodeAt(6)) {
          case 105:
            return N = f.replace("-items", ""), "-webkit-" + f + "-webkit-box-" + N + "-ms-flex-" + N + f;
          case 115:
            return "-webkit-" + f + "-ms-flex-item-" + f.replace(z, "") + f;
          default:
            return "-webkit-" + f + "-ms-flex-line-pack" + f.replace("align-content", "").replace(z, "") + f;
        }
        break;
      case 973:
      case 989:
        if (f.charCodeAt(3) !== 45 || f.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (pe.test(S) === !0) return (N = S.substring(S.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(S.replace("stretch", "fill-available"), T, p, P).replace(":fill-available", ":stretch") : f.replace(N, "-webkit-" + N) + f.replace(N, "-moz-" + N.replace("fill-", "")) + f;
        break;
      case 962:
        if (f = "-webkit-" + f + (f.charCodeAt(5) === 102 ? "-ms-" + f : "") + f, p + P === 211 && f.charCodeAt(13) === 105 && 0 < f.indexOf("transform", 10)) return f.substring(0, f.indexOf(";", 27) + 1).replace(b, "$1-webkit-$2") + f;
    }
    return f;
  }
  function s(S, T) {
    var p = S.indexOf(T === 1 ? ":" : "{"), P = S.substring(0, T !== 3 ? p : 10);
    return p = S.substring(p + 1, S.length - 1), Ne(T !== 2 ? P : P.replace(te, "$1"), p, T);
  }
  function l(S, T) {
    var p = o(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return p !== T + ";" ? p.replace(E, " or ($1)").substring(4) : "(" + T + ")";
  }
  function c(S, T, p, P, f, D, N, Q, Z, q) {
    for (var W = 0, K = T, ie; W < he; ++W)
      switch (ie = oe[W].call(g, S, K, p, P, f, D, N, Q, Z, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          K = ie;
      }
    if (K !== T) return K;
  }
  function u(S) {
    switch (S) {
      case void 0:
      case null:
        he = oe.length = 0;
        break;
      default:
        if (typeof S == "function") oe[he++] = S;
        else if (typeof S == "object") for (var T = 0, p = S.length; T < p; ++T)
          u(S[T]);
        else V = !!S | 0;
    }
    return u;
  }
  function m(S) {
    return S = S.prefix, S !== void 0 && (Ne = null, S ? typeof S != "function" ? ue = 1 : (ue = 2, Ne = S) : ue = 0), m;
  }
  function g(S, T) {
    var p = S;
    if (33 > p.charCodeAt(0) && (p = p.trim()), F = p, p = [F], 0 < he) {
      var P = c(-1, T, p, p, ee, Y, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (T = P);
    }
    var f = r(Ce, p, T, 0, 0);
    return 0 < he && (P = c(-2, f, p, p, ee, Y, f.length, 0, 0, 0), P !== void 0 && (f = P)), F = "", B = 0, Y = ee = 1, f;
  }
  var h = /^\0+/g, y = /[\0\r\f]/g, C = /: */g, w = /zoo|gra/, b = /([,: ])(transform)/g, k = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, L = /::(place)/g, _ = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, A = /\(\s*(.*)\s*\)/g, E = /([\s\S]*?);/g, z = /-self|flex-/g, te = /[^]*?(:[rp][el]a[\w-]+)[^]*/, pe = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, Y = 1, ee = 1, B = 0, ue = 1, Ce = [], oe = [], he = 0, Ne = null, V = 0, F = "";
  return g.use = u, g.set = m, e !== void 0 && m(e), g;
}
var el = {
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
function tl(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var rl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ca = /* @__PURE__ */ tl(
  function(e) {
    return rl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bn = go(), nl = {
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
}, al = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ol = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Eo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, wn = {};
wn[bn.ForwardRef] = ol;
wn[bn.Memo] = Eo;
function Ta(e) {
  return bn.isMemo(e) ? Eo : wn[e.$$typeof] || nl;
}
var il = Object.defineProperty, sl = Object.getOwnPropertyNames, Na = Object.getOwnPropertySymbols, ll = Object.getOwnPropertyDescriptor, cl = Object.getPrototypeOf, Aa = Object.prototype;
function So(e, r, t) {
  if (typeof r != "string") {
    if (Aa) {
      var n = cl(r);
      n && n !== Aa && So(e, n, t);
    }
    var o = sl(r);
    Na && (o = o.concat(Na(r)));
    for (var s = Ta(e), l = Ta(r), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!al[u] && !(t && t[u]) && !(l && l[u]) && !(s && s[u])) {
        var m = ll(r, u);
        try {
          il(e, u, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var ul = So;
const dl = /* @__PURE__ */ ja(ul);
var ce = { env: { NODE_ENV: "production" } };
function We() {
  return (We = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Oa = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, tn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !vn.typeOf(e);
}, sr = Object.freeze([]), Xe = Object.freeze({});
function At(e) {
  return typeof e == "function";
}
function rn(e) {
  return ce.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function kn(e) {
  return e && typeof e.styledComponentId == "string";
}
var pt = typeof ce < "u" && ce.env !== void 0 && (ce.env.REACT_APP_SC_ATTR || ce.env.SC_ATTR) || "data-styled", En = typeof window < "u" && "HTMLElement" in window, fl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ce < "u" && ce.env !== void 0 && (ce.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ce.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ce.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ce.env.REACT_APP_SC_DISABLE_SPEEDY : ce.env.SC_DISABLE_SPEEDY !== void 0 && ce.env.SC_DISABLE_SPEEDY !== "" ? ce.env.SC_DISABLE_SPEEDY !== "false" && ce.env.SC_DISABLE_SPEEDY : ce.env.NODE_ENV !== "production")), pl = ce.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ml() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function yt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw ce.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ml.apply(void 0, [pl[e]].concat(t)).trim());
}
var hl = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, l = s; t >= l; ) (l <<= 1) < 0 && yt(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var c = s; c < l; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), m = 0, g = n.length; m < g; m++) this.tag.insertRule(u, n[m]) && (this.groupSizes[t]++, u++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var l = o; l < s; l++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), l = s + o, c = s; c < l; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Xt = /* @__PURE__ */ new Map(), lr = /* @__PURE__ */ new Map(), Ct = 1, Bt = function(e) {
  if (Xt.has(e)) return Xt.get(e);
  for (; lr.has(Ct); ) Ct++;
  var r = Ct++;
  return ce.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && yt(16, "" + r), Xt.set(e, r), lr.set(r, e), r;
}, gl = function(e) {
  return lr.get(e);
}, yl = function(e, r) {
  r >= Ct && (Ct = r + 1), Xt.set(e, r), lr.set(r, e);
}, vl = "style[" + pt + '][data-styled-version="5.3.11"]', bl = new RegExp("^" + pt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), wl = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, l = o.length; s < l; s++) (n = o[s]) && e.registerName(r, n);
}, kl = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var l = t[o].trim();
    if (l) {
      var c = l.match(bl);
      if (c) {
        var u = 0 | parseInt(c[1], 10), m = c[2];
        u !== 0 && (yl(m, u), wl(e, m, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, El = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, xo = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var u = c.childNodes, m = u.length; m >= 0; m--) {
      var g = u[m];
      if (g && g.nodeType === 1 && g.hasAttribute(pt)) return g;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(pt, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = El();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, s), n;
}, Sl = function() {
  function e(t) {
    var n = this.element = xo(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, l = 0, c = s.length; l < c; l++) {
        var u = s[l];
        if (u.ownerNode === o) return u;
      }
      yt(17);
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
}(), xl = function() {
  function e(t) {
    var n = this.element = xo(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Cl = function() {
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
}(), Ra = En, Tl = { isServer: !En, useCSSOMInjection: !fl }, Co = function() {
  function e(t, n, o) {
    t === void 0 && (t = Xe), n === void 0 && (n = {}), this.options = We({}, Tl, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && En && Ra && (Ra = !1, function(s) {
      for (var l = document.querySelectorAll(vl), c = 0, u = l.length; c < u; c++) {
        var m = l[c];
        m && m.getAttribute(pt) !== "active" && (kl(s, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Bt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(We({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, t = o ? new Cl(l) : s ? new Sl(l) : new xl(l), new hl(t)));
    var t, n, o, s, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Bt(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Bt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Bt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", l = 0; l < o; l++) {
        var c = gl(l);
        if (c !== void 0) {
          var u = t.names.get(c), m = n.getGroup(l);
          if (u && m && u.size) {
            var g = pt + ".g" + l + '[id="' + c + '"]', h = "";
            u !== void 0 && u.forEach(function(y) {
              y.length > 0 && (h += y + ",");
            }), s += "" + m + g + '{content:"' + h + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Nl = /(a)(d)/gi, _a = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function nn(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = _a(r % 52) + t;
  return (_a(r % 52) + t).replace(Nl, "$1-$2");
}
var tt = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, To = function(e) {
  return tt(5381, e);
};
function Al(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (At(t) && !kn(t)) return !1;
  }
  return !0;
}
var Ol = To("5.3.11"), Rl = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = ce.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Al(r), this.componentId = t, this.baseHash = tt(Ol, t), this.baseStyle = n, Co.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = mt(this.rules, r, t, n).join(""), c = nn(tt(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(o, c)) {
        var u = n(l, "." + c, void 0, o);
        t.insertRules(o, c, u);
      }
      s.push(c), this.staticRulesId = c;
    }
    else {
      for (var m = this.rules.length, g = tt(this.baseHash, n.hash), h = "", y = 0; y < m; y++) {
        var C = this.rules[y];
        if (typeof C == "string") h += C, ce.env.NODE_ENV !== "production" && (g = tt(g, C + y));
        else if (C) {
          var w = mt(C, r, t, n), b = Array.isArray(w) ? w.join("") : w;
          g = tt(g, b + y), h += b;
        }
      }
      if (h) {
        var k = nn(g >>> 0);
        if (!t.hasNameForId(o, k)) {
          var O = n(h, "." + k, void 0, o);
          t.insertRules(o, k, O);
        }
        s.push(k);
      }
    }
    return s.join(" ");
  }, e;
}(), _l = /^\s*\/\/.*$/gm, Pl = [":", "[", ".", "#"];
function Il(e) {
  var r, t, n, o, s = Xe, l = s.options, c = l === void 0 ? Xe : l, u = s.plugins, m = u === void 0 ? sr : u, g = new Js(c), h = [], y = /* @__PURE__ */ function(b) {
    function k(O) {
      if (O) try {
        b(O + "}");
      } catch {
      }
    }
    return function(O, x, L, _, v, A, E, z, te, pe) {
      switch (O) {
        case 1:
          if (te === 0 && x.charCodeAt(0) === 64) return b(x + ";"), "";
          break;
        case 2:
          if (z === 0) return x + "/*|*/";
          break;
        case 3:
          switch (z) {
            case 102:
            case 112:
              return b(L[0] + x), "";
            default:
              return x + (pe === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(k);
      }
    };
  }(function(b) {
    h.push(b);
  }), C = function(b, k, O) {
    return k === 0 && Pl.indexOf(O[t.length]) !== -1 || O.match(o) ? b : "." + r;
  };
  function w(b, k, O, x) {
    x === void 0 && (x = "&");
    var L = b.replace(_l, ""), _ = k && O ? O + " " + k + " { " + L + " }" : L;
    return r = x, t = k, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), g(O || !k ? "" : k, _);
  }
  return g.use([].concat(m, [function(b, k, O) {
    b === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(n, C));
  }, y, function(b) {
    if (b === -2) {
      var k = h;
      return h = [], k;
    }
  }])), w.hash = m.length ? m.reduce(function(b, k) {
    return k.name || yt(15), tt(b, k.name);
  }, 5381).toString() : "", w;
}
var No = ht.createContext();
No.Consumer;
var Ao = ht.createContext(), Ll = (Ao.Consumer, new Co()), an = Il();
function $l() {
  return Ot(No) || Ll;
}
function Dl() {
  return Ot(Ao) || an;
}
var Ml = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = an);
      var l = n.name + s.hash;
      o.hasNameForId(n.id, l) || o.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return yt(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = an), this.name + r.hash;
  }, e;
}(), jl = /([A-Z])/, zl = /([A-Z])/g, Fl = /^ms-/, Ul = function(e) {
  return "-" + e.toLowerCase();
};
function Pa(e) {
  return jl.test(e) ? e.replace(zl, Ul).replace(Fl, "-ms-") : e;
}
var Ia = function(e) {
  return e == null || e === !1 || e === "";
};
function mt(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], l = 0, c = e.length; l < c; l += 1) (o = mt(e[l], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Ia(e)) return "";
  if (kn(e)) return "." + e.styledComponentId;
  if (At(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !r) return e;
    var u = e(r);
    return ce.env.NODE_ENV !== "production" && vn.isElement(u) && console.warn(rn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), mt(u, r, t, n);
  }
  var m;
  return e instanceof Ml ? t ? (e.inject(t, n), e.getName(n)) : e : tn(e) ? function g(h, y) {
    var C, w, b = [];
    for (var k in h) h.hasOwnProperty(k) && !Ia(h[k]) && (Array.isArray(h[k]) && h[k].isCss || At(h[k]) ? b.push(Pa(k) + ":", h[k], ";") : tn(h[k]) ? b.push.apply(b, g(h[k], k)) : b.push(Pa(k) + ": " + (C = k, (w = h[k]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || C in el || C.startsWith("--") ? String(w).trim() : w + "px") + ";"));
    return y ? [y + " {"].concat(b, ["}"]) : b;
  }(e) : e.toString();
}
var La = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Hl(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return At(e) || tn(e) ? La(mt(Oa(sr, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : La(mt(Oa(e, t)));
}
var $a = /invalid hook call/i, Wt = /* @__PURE__ */ new Set(), ql = function(e, r) {
  if (ce.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if ($a.test(s)) o = !1, Wt.delete(t);
        else {
          for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) c[u - 1] = arguments[u];
          n.apply(void 0, [s].concat(c));
        }
      }, ti(), o && !Wt.has(t) && (console.warn(t), Wt.add(t));
    } catch (s) {
      $a.test(s.message) && Wt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Bl = function(e, r, t) {
  return t === void 0 && (t = Xe), e.theme !== t.theme && e.theme || r || t.theme;
}, Wl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Gl = /(^-|-$)/g;
function Fr(e) {
  return e.replace(Wl, "-").replace(Gl, "");
}
var Vl = function(e) {
  return nn(To(e) >>> 0);
};
function Gt(e) {
  return typeof e == "string" && (ce.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var on = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Yl = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Zl(e, r, t) {
  var n = e[t];
  on(r) && on(n) ? Oo(n, r) : e[t] = r;
}
function Oo(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var l = s[o];
    if (on(l)) for (var c in l) Yl(c) && Zl(e, l[c], c);
  }
  return e;
}
var Ro = ht.createContext();
Ro.Consumer;
var Ur = {};
function _o(e, r, t) {
  var n = kn(e), o = !Gt(e), s = r.attrs, l = s === void 0 ? sr : s, c = r.componentId, u = c === void 0 ? function(x, L) {
    var _ = typeof x != "string" ? "sc" : Fr(x);
    Ur[_] = (Ur[_] || 0) + 1;
    var v = _ + "-" + Vl("5.3.11" + _ + Ur[_]);
    return L ? L + "-" + v : v;
  }(r.displayName, r.parentComponentId) : c, m = r.displayName, g = m === void 0 ? function(x) {
    return Gt(x) ? "styled." + x : "Styled(" + rn(x) + ")";
  }(e) : m, h = r.displayName && r.componentId ? Fr(r.displayName) + "-" + r.componentId : r.componentId || u, y = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, C = r.shouldForwardProp;
  n && e.shouldForwardProp && (C = r.shouldForwardProp ? function(x, L, _) {
    return e.shouldForwardProp(x, L, _) && r.shouldForwardProp(x, L, _);
  } : e.shouldForwardProp);
  var w, b = new Rl(t, h, n ? e.componentStyle : void 0), k = b.isStatic && l.length === 0, O = function(x, L) {
    return function(_, v, A, E) {
      var z = _.attrs, te = _.componentStyle, pe = _.defaultProps, X = _.foldedComponentIds, Y = _.shouldForwardProp, ee = _.styledComponentId, B = _.target, ue = function(P, f, D) {
        P === void 0 && (P = Xe);
        var N = We({}, f, { theme: P }), Q = {};
        return D.forEach(function(Z) {
          var q, W, K, ie = Z;
          for (q in At(ie) && (ie = ie(N)), ie) N[q] = Q[q] = q === "className" ? (W = Q[q], K = ie[q], W && K ? W + " " + K : W || K) : ie[q];
        }), [N, Q];
      }(Bl(v, Ot(Ro), pe) || Xe, v, z), Ce = ue[0], oe = ue[1], he = function(P, f, D, N) {
        var Q = $l(), Z = Dl(), q = f ? P.generateAndInjectStyles(Xe, Q, Z) : P.generateAndInjectStyles(D, Q, Z);
        return ce.env.NODE_ENV !== "production" && !f && N && N(q), q;
      }(te, E, Ce, ce.env.NODE_ENV !== "production" ? _.warnTooManyClasses : void 0), Ne = A, V = oe.$as || v.$as || oe.as || v.as || B, F = Gt(V), S = oe !== v ? We({}, v, {}, oe) : v, T = {};
      for (var p in S) p[0] !== "$" && p !== "as" && (p === "forwardedAs" ? T.as = S[p] : (Y ? Y(p, Ca, V) : !F || Ca(p)) && (T[p] = S[p]));
      return v.style && oe.style !== v.style && (T.style = We({}, v.style, {}, oe.style)), T.className = Array.prototype.concat(X, ee, he !== ee ? he : null, v.className, oe.className).filter(Boolean).join(" "), T.ref = Ne, ri(V, T);
    }(w, x, L, k);
  };
  return O.displayName = g, (w = ht.forwardRef(O)).attrs = y, w.componentStyle = b, w.displayName = g, w.shouldForwardProp = C, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : sr, w.styledComponentId = h, w.target = n ? e.target : e, w.withComponent = function(x) {
    var L = r.componentId, _ = function(A, E) {
      if (A == null) return {};
      var z, te, pe = {}, X = Object.keys(A);
      for (te = 0; te < X.length; te++) z = X[te], E.indexOf(z) >= 0 || (pe[z] = A[z]);
      return pe;
    }(r, ["componentId"]), v = L && L + "-" + (Gt(x) ? x : Fr(rn(x)));
    return _o(x, We({}, _, { attrs: y, componentId: v }), t);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? Oo({}, e.defaultProps, x) : x;
  } }), ce.env.NODE_ENV !== "production" && (ql(g, h), w.warnTooManyClasses = /* @__PURE__ */ function(x, L) {
    var _ = {}, v = !1;
    return function(A) {
      if (!v && (_[A] = !0, Object.keys(_).length >= 200)) {
        var E = L ? ' with the id of "' + L + '"' : "";
        console.warn("Over 200 classes were generated for component " + x + E + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, _ = {};
      }
    };
  }(g, h)), Object.defineProperty(w, "toString", { value: function() {
    return "." + w.styledComponentId;
  } }), o && dl(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var cr = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Xe), !vn.isValidElementType(n)) return yt(1, String(n));
    var s = function() {
      return t(n, o, Hl.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return r(t, n, We({}, o, {}, l));
    }, s.attrs = function(l) {
      return r(t, n, We({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, s;
  }(_o, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  cr[e] = cr(e);
});
ce.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ce.env.NODE_ENV !== "production" && ce.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Xl = cr.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  li {
    .card-img-top {
      border-radius: 0 !important;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .card-event-details {
      flex-direction: column;
      .card-event-icons {
        width: 100%;
        &:nth-child(1) {
          margin-bottom: 24px;
        }
      }
    }
  }
`, Kl = () => {
  const { feeds: e } = Ot(mo);
  return /* @__PURE__ */ _e.jsx(Xl, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((r) => /* @__PURE__ */ _e.jsx("li", { children: /* @__PURE__ */ _e.jsx(
    po,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${ir(r.startDate, "COMPLETE")} <br /> ${ko(
        r.startDate,
        r.endDate
      )}
              </span>`,
      eventLocation: r.location,
      clickable: !!r.alias,
      cardLink: `${r.alias}/?eventDate=${ir(
        r.startDate,
        "ISO"
      )}`,
      title: r.title,
      image: r.imageUrl,
      imageAltText: r.title,
      linkLabel: r.eventButtonText,
      linkUrl: r.eventButtonUrl
    }
  ) }, r.id)) });
}, Po = ({ header: e, ctaButton: r, dataSource: t, maxItems: n }) => (Ma(() => {
  typeof window < "u" && Fa({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: r,
      dataSource: t,
      maxItems: n
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ _e.jsx(yn, { header: e, ctaButton: r, dataSource: t, maxItems: n, children: /* @__PURE__ */ _e.jsx(Kl, {}) }));
Po.propTypes = wo;
const Ql = cr.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  li {
    max-width: 100%;
    width: 100%;
  }
  .card {
    height: 235px;
    .card-img-top {
      width: 235px;
      height: auto;
      border-radius: 0 !important;
    }
    .card-event-icons {
      &:nth-child(1) {
        width: 58%;
      }
      &:nth-child(2) {
        width: 42%;
      }
    }
  }
  @media (max-width: 992px) {
    .card {
      height: 100%;
      .card-event-details {
        flex-direction: column;
        .card-event-icons {
          width: 100%;
          &:nth-child(1) {
            margin-bottom: 24px;
          }
        }
      }
      .card-img-top {
        height: auto;
        width: auto;
      }
    }
  }
`, Jl = () => {
  const { feeds: e } = Ot(mo);
  return /* @__PURE__ */ _e.jsx(Ql, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((r) => /* @__PURE__ */ _e.jsx("li", { children: /* @__PURE__ */ _e.jsx(
    po,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${ir(r.startDate, "COMPLETE")} <br /> ${ko(
        r.startDate,
        r.endDate
      )}
              </span>`,
      eventLocation: r.location,
      clickable: !!r.alias,
      cardLink: `${r.alias}/?eventDate=${ir(
        r.startDate,
        "ISO"
      )}`,
      title: r.title,
      image: r.imageUrl,
      imageAltText: r.title,
      linkLabel: r.eventButtonText,
      linkUrl: r.eventButtonUrl
    }
  ) }, r.id)) });
}, Io = ({ header: e, ctaButton: r, dataSource: t, maxItems: n }) => (Ma(() => {
  typeof window < "u" && Fa({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: r,
      dataSource: t,
      maxItems: n
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ _e.jsx(yn, { header: e, ctaButton: r, dataSource: t, maxItems: n, children: /* @__PURE__ */ _e.jsx(Jl, {}) }));
Io.propTypes = wo;
var Lo, Da = ai;
Lo = Da.createRoot, Da.hydrateRoot;
const $o = (e, r, t) => {
  Lo(t).render(ht.createElement(e, r));
}, nc = ({ targetSelector: e, props: r }) => {
  $o(Po, r, document.querySelector(e));
}, ac = ({ targetSelector: e, props: r }) => {
  $o(Io, r, document.querySelector(e));
};
export {
  Po as CardsGridEvents,
  Io as CardsListEvents,
  nc as initCardsGridEventsComponent,
  ac as initCardsListEventsComponent
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
