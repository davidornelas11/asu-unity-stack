(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "react", "react-dom"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.AsuDegreePages = {}, global.React, global.ReactDOM));
})(this, function(exports2, r$1, t) {
  "use strict";var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  function _interopNamespaceDefault(e) {
    const n2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k2 in e) {
        if (k2 !== "default") {
          const d2 = Object.getOwnPropertyDescriptor(e, k2);
          Object.defineProperty(n2, k2, d2.get ? d2 : {
            enumerable: true,
            get: /* @__PURE__ */ __name(() => e[k2], "get")
          });
        }
      }
    }
    n2.default = e;
    return Object.freeze(n2);
  }
  __name(_interopNamespaceDefault, "_interopNamespaceDefault");
  const r__namespace = /* @__PURE__ */ _interopNamespaceDefault(r$1);
  const t__namespace = /* @__PURE__ */ _interopNamespaceDefault(t);
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  __name(getDefaultExportFromCjs, "getDefaultExportFromCjs");
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f2 = r$1, k2 = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
    function q2(c2, a2, g2) {
      var b2, d2 = {}, e = null, h2 = null;
      void 0 !== g2 && (e = "" + g2);
      void 0 !== a2.key && (e = "" + a2.key);
      void 0 !== a2.ref && (h2 = a2.ref);
      for (b2 in a2) m2.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
      if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
      return { $$typeof: k2, type: c2, key: e, ref: h2, props: d2, _owner: n2.current };
    }
    __name(q2, "q");
    reactJsxRuntime_production_min.Fragment = l2;
    reactJsxRuntime_production_min.jsx = q2;
    reactJsxRuntime_production_min.jsxs = q2;
    return reactJsxRuntime_production_min;
  }
  __name(requireReactJsxRuntime_production_min, "requireReactJsxRuntime_production_min");
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var define_process_default$1 = { env: { NODE_ENV: "production" } };
  var n = { 651: function(e2) {
    e2.exports = function() {
      function e3(t3) {
        return e3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
          return typeof e4;
        } : function(e4) {
          return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        }, e3(t3);
      }
      __name(e3, "e3");
      function t2(e4, n3) {
        return t2 = Object.setPrototypeOf || function(e5, t3) {
          return e5.__proto__ = t3, e5;
        }, t2(e4, n3);
      }
      __name(t2, "t2");
      function n2(e4, r3, a3) {
        return n2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e5) {
            return false;
          }
        }() ? Reflect.construct : function(e5, n3, r4) {
          var a4 = [null];
          a4.push.apply(a4, n3);
          var o3 = new (Function.bind.apply(e5, a4))();
          return r4 && t2(o3, r4.prototype), o3;
        }, n2.apply(null, arguments);
      }
      __name(n2, "n2");
      function r2(e4) {
        return function(e5) {
          if (Array.isArray(e5)) return a2(e5);
        }(e4) || function(e5) {
          if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"]) return Array.from(e5);
        }(e4) || function(e5, t3) {
          if (e5) {
            if ("string" == typeof e5) return a2(e5, t3);
            var n3 = Object.prototype.toString.call(e5).slice(8, -1);
            return "Object" === n3 && e5.constructor && (n3 = e5.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e5) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? a2(e5, t3) : void 0;
          }
        }(e4) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      __name(r2, "r2");
      function a2(e4, t3) {
        (null == t3 || t3 > e4.length) && (t3 = e4.length);
        for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++) r3[n3] = e4[n3];
        return r3;
      }
      __name(a2, "a2");
      var o2 = Object.hasOwnProperty, i2 = Object.setPrototypeOf, l2 = Object.isFrozen, s2 = Object.getPrototypeOf, c2 = Object.getOwnPropertyDescriptor, d2 = Object.freeze, u2 = Object.seal, f2 = Object.create, m2 = "undefined" != typeof Reflect && Reflect, p2 = m2.apply, h2 = m2.construct;
      p2 || (p2 = /* @__PURE__ */ __name(function(e4, t3, n3) {
        return e4.apply(t3, n3);
      }, "p2")), d2 || (d2 = /* @__PURE__ */ __name(function(e4) {
        return e4;
      }, "d2")), u2 || (u2 = /* @__PURE__ */ __name(function(e4) {
        return e4;
      }, "u2")), h2 || (h2 = /* @__PURE__ */ __name(function(e4, t3) {
        return n2(e4, r2(t3));
      }, "h2"));
      var g2, y2 = O2(Array.prototype.forEach), b2 = O2(Array.prototype.pop), v2 = O2(Array.prototype.push), k2 = O2(String.prototype.toLowerCase), w2 = O2(String.prototype.toString), E2 = O2(String.prototype.match), C2 = O2(String.prototype.replace), S2 = O2(String.prototype.indexOf), x2 = O2(String.prototype.trim), N2 = O2(RegExp.prototype.test), T2 = (g2 = TypeError, function() {
        for (var e4 = arguments.length, t3 = new Array(e4), n3 = 0; n3 < e4; n3++) t3[n3] = arguments[n3];
        return h2(g2, t3);
      });
      function O2(e4) {
        return function(t3) {
          for (var n3 = arguments.length, r3 = new Array(n3 > 1 ? n3 - 1 : 0), a3 = 1; a3 < n3; a3++) r3[a3 - 1] = arguments[a3];
          return p2(e4, t3, r3);
        };
      }
      __name(O2, "O2");
      function A2(e4, t3, n3) {
        var r3;
        n3 = null !== (r3 = n3) && void 0 !== r3 ? r3 : k2, i2 && i2(e4, null);
        for (var a3 = t3.length; a3--; ) {
          var o3 = t3[a3];
          if ("string" == typeof o3) {
            var s3 = n3(o3);
            s3 !== o3 && (l2(t3) || (t3[a3] = s3), o3 = s3);
          }
          e4[o3] = true;
        }
        return e4;
      }
      __name(A2, "A2");
      function R2(e4) {
        var t3, n3 = f2(null);
        for (t3 in e4) true === p2(o2, e4, [t3]) && (n3[t3] = e4[t3]);
        return n3;
      }
      __name(R2, "R2");
      function L2(e4, t3) {
        for (; null !== e4; ) {
          var n3 = c2(e4, t3);
          if (n3) {
            if (n3.get) return O2(n3.get);
            if ("function" == typeof n3.value) return O2(n3.value);
          }
          e4 = s2(e4);
        }
        return function(e5) {
          return console.warn("fallback value for", e5), null;
        };
      }
      __name(L2, "L2");
      var I2 = d2(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), P2 = d2(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _2 = d2(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), M2 = d2(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), z2 = d2(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), D2 = d2(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), j2 = d2(["#text"]), $2 = d2(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), F2 = d2(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), H2 = d2(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), B2 = d2(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), q2 = u2(/\{\{[\w\W]*|[\w\W]*\}\}/gm), U2 = u2(/<%[\w\W]*|[\w\W]*%>/gm), W2 = u2(/\${[\w\W]*}/gm), G2 = u2(/^data-[\-\w.\u00B7-\uFFFF]/), V2 = u2(/^aria-[\-\w]+$/), Y2 = u2(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Z2 = u2(/^(?:\w+script|data):/i), K2 = u2(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), X2 = u2(/^html$/i), Q2 = u2(/^[a-z][.\w]*(-[.\w]+)+$/i), J2 = /* @__PURE__ */ __name(function() {
        return "undefined" == typeof window ? null : window;
      }, "J2");
      var ee2 = (/* @__PURE__ */ __name(function t3() {
        var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J2(), a3 = /* @__PURE__ */ __name(function(e4) {
          return t3(e4);
        }, "a3");
        if (a3.version = "2.5.6", a3.removed = [], !n3 || !n3.document || 9 !== n3.document.nodeType) return a3.isSupported = false, a3;
        var o3 = n3.document, i3 = n3.document, l3 = n3.DocumentFragment, s3 = n3.HTMLTemplateElement, c3 = n3.Node, u3 = n3.Element, f3 = n3.NodeFilter, m3 = n3.NamedNodeMap, p3 = void 0 === m3 ? n3.NamedNodeMap || n3.MozNamedAttrMap : m3, h3 = n3.HTMLFormElement, g3 = n3.DOMParser, O3 = n3.trustedTypes, ee3 = u3.prototype, te2 = L2(ee3, "cloneNode"), ne2 = L2(ee3, "nextSibling"), re2 = L2(ee3, "childNodes"), ae2 = L2(ee3, "parentNode");
        if ("function" == typeof s3) {
          var oe2 = i3.createElement("template");
          oe2.content && oe2.content.ownerDocument && (i3 = oe2.content.ownerDocument);
        }
        var ie2 = function(t4, n4) {
          if ("object" !== e3(t4) || "function" != typeof t4.createPolicy) return null;
          var r3 = null, a4 = "data-tt-policy-suffix";
          n4.currentScript && n4.currentScript.hasAttribute(a4) && (r3 = n4.currentScript.getAttribute(a4));
          var o4 = "dompurify" + (r3 ? "#" + r3 : "");
          try {
            return t4.createPolicy(o4, { createHTML: /* @__PURE__ */ __name(function(e4) {
              return e4;
            }, "createHTML"), createScriptURL: /* @__PURE__ */ __name(function(e4) {
              return e4;
            }, "createScriptURL") });
          } catch (e4) {
            return console.warn("TrustedTypes policy " + o4 + " could not be created."), null;
          }
        }(O3, o3), le2 = ie2 ? ie2.createHTML("") : "", se2 = i3, ce2 = se2.implementation, de2 = se2.createNodeIterator, ue2 = se2.createDocumentFragment, fe2 = se2.getElementsByTagName, me2 = o3.importNode, pe2 = {};
        try {
          pe2 = R2(i3).documentMode ? i3.documentMode : {};
        } catch (e4) {
        }
        var he2 = {};
        a3.isSupported = "function" == typeof ae2 && ce2 && void 0 !== ce2.createHTMLDocument && 9 !== pe2;
        var ge2, ye2, be2 = q2, ve2 = U2, ke2 = W2, we2 = G2, Ee2 = V2, Ce2 = Z2, Se2 = K2, xe2 = Q2, Ne2 = Y2, Te2 = null, Oe2 = A2({}, [].concat(r2(I2), r2(P2), r2(_2), r2(z2), r2(j2))), Ae2 = null, Re2 = A2({}, [].concat(r2($2), r2(F2), r2(H2), r2(B2))), Le2 = Object.seal(Object.create(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), Ie2 = null, Pe2 = null, _e2 = true, Me2 = true, ze2 = false, De2 = true, je2 = false, $e2 = true, Fe2 = false, He2 = false, Be2 = false, qe2 = false, Ue2 = false, We2 = false, Ge2 = true, Ve2 = false, Ye2 = true, Ze2 = false, Ke2 = {}, Xe2 = null, Qe2 = A2({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Je2 = null, et2 = A2({}, ["audio", "video", "img", "source", "image", "track"]), tt2 = null, nt2 = A2({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), rt2 = "http://www.w3.org/1998/Math/MathML", at2 = "http://www.w3.org/2000/svg", ot2 = "http://www.w3.org/1999/xhtml", it2 = ot2, lt2 = false, st2 = null, ct2 = A2({}, [rt2, at2, ot2], w2), dt2 = ["application/xhtml+xml", "text/html"], ut2 = null, ft2 = i3.createElement("form"), mt2 = /* @__PURE__ */ __name(function(e4) {
          return e4 instanceof RegExp || e4 instanceof Function;
        }, "mt2"), pt2 = /* @__PURE__ */ __name(function(t4) {
          ut2 && ut2 === t4 || (t4 && "object" === e3(t4) || (t4 = {}), t4 = R2(t4), ge2 = ge2 = -1 === dt2.indexOf(t4.PARSER_MEDIA_TYPE) ? "text/html" : t4.PARSER_MEDIA_TYPE, ye2 = "application/xhtml+xml" === ge2 ? w2 : k2, Te2 = "ALLOWED_TAGS" in t4 ? A2({}, t4.ALLOWED_TAGS, ye2) : Oe2, Ae2 = "ALLOWED_ATTR" in t4 ? A2({}, t4.ALLOWED_ATTR, ye2) : Re2, st2 = "ALLOWED_NAMESPACES" in t4 ? A2({}, t4.ALLOWED_NAMESPACES, w2) : ct2, tt2 = "ADD_URI_SAFE_ATTR" in t4 ? A2(R2(nt2), t4.ADD_URI_SAFE_ATTR, ye2) : nt2, Je2 = "ADD_DATA_URI_TAGS" in t4 ? A2(R2(et2), t4.ADD_DATA_URI_TAGS, ye2) : et2, Xe2 = "FORBID_CONTENTS" in t4 ? A2({}, t4.FORBID_CONTENTS, ye2) : Qe2, Ie2 = "FORBID_TAGS" in t4 ? A2({}, t4.FORBID_TAGS, ye2) : {}, Pe2 = "FORBID_ATTR" in t4 ? A2({}, t4.FORBID_ATTR, ye2) : {}, Ke2 = "USE_PROFILES" in t4 && t4.USE_PROFILES, _e2 = false !== t4.ALLOW_ARIA_ATTR, Me2 = false !== t4.ALLOW_DATA_ATTR, ze2 = t4.ALLOW_UNKNOWN_PROTOCOLS || false, De2 = false !== t4.ALLOW_SELF_CLOSE_IN_ATTR, je2 = t4.SAFE_FOR_TEMPLATES || false, $e2 = false !== t4.SAFE_FOR_XML, Fe2 = t4.WHOLE_DOCUMENT || false, qe2 = t4.RETURN_DOM || false, Ue2 = t4.RETURN_DOM_FRAGMENT || false, We2 = t4.RETURN_TRUSTED_TYPE || false, Be2 = t4.FORCE_BODY || false, Ge2 = false !== t4.SANITIZE_DOM, Ve2 = t4.SANITIZE_NAMED_PROPS || false, Ye2 = false !== t4.KEEP_CONTENT, Ze2 = t4.IN_PLACE || false, Ne2 = t4.ALLOWED_URI_REGEXP || Ne2, it2 = t4.NAMESPACE || ot2, Le2 = t4.CUSTOM_ELEMENT_HANDLING || {}, t4.CUSTOM_ELEMENT_HANDLING && mt2(t4.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Le2.tagNameCheck = t4.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t4.CUSTOM_ELEMENT_HANDLING && mt2(t4.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Le2.attributeNameCheck = t4.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t4.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t4.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Le2.allowCustomizedBuiltInElements = t4.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), je2 && (Me2 = false), Ue2 && (qe2 = true), Ke2 && (Te2 = A2({}, r2(j2)), Ae2 = [], true === Ke2.html && (A2(Te2, I2), A2(Ae2, $2)), true === Ke2.svg && (A2(Te2, P2), A2(Ae2, F2), A2(Ae2, B2)), true === Ke2.svgFilters && (A2(Te2, _2), A2(Ae2, F2), A2(Ae2, B2)), true === Ke2.mathMl && (A2(Te2, z2), A2(Ae2, H2), A2(Ae2, B2))), t4.ADD_TAGS && (Te2 === Oe2 && (Te2 = R2(Te2)), A2(Te2, t4.ADD_TAGS, ye2)), t4.ADD_ATTR && (Ae2 === Re2 && (Ae2 = R2(Ae2)), A2(Ae2, t4.ADD_ATTR, ye2)), t4.ADD_URI_SAFE_ATTR && A2(tt2, t4.ADD_URI_SAFE_ATTR, ye2), t4.FORBID_CONTENTS && (Xe2 === Qe2 && (Xe2 = R2(Xe2)), A2(Xe2, t4.FORBID_CONTENTS, ye2)), Ye2 && (Te2["#text"] = true), Fe2 && A2(Te2, ["html", "head", "body"]), Te2.table && (A2(Te2, ["tbody"]), delete Ie2.tbody), d2 && d2(t4), ut2 = t4);
        }, "pt2"), ht2 = A2({}, ["mi", "mo", "mn", "ms", "mtext"]), gt2 = A2({}, ["foreignobject", "annotation-xml"]), yt2 = A2({}, ["title", "style", "font", "a", "script"]), bt2 = A2({}, P2);
        A2(bt2, _2), A2(bt2, M2);
        var vt2 = A2({}, z2);
        A2(vt2, D2);
        var kt2 = /* @__PURE__ */ __name(function(e4) {
          v2(a3.removed, { element: e4 });
          try {
            e4.parentNode.removeChild(e4);
          } catch (t4) {
            try {
              e4.outerHTML = le2;
            } catch (t5) {
              e4.remove();
            }
          }
        }, "kt2"), wt2 = /* @__PURE__ */ __name(function(e4, t4) {
          try {
            v2(a3.removed, { attribute: t4.getAttributeNode(e4), from: t4 });
          } catch (e5) {
            v2(a3.removed, { attribute: null, from: t4 });
          }
          if (t4.removeAttribute(e4), "is" === e4 && !Ae2[e4]) if (qe2 || Ue2) try {
            kt2(t4);
          } catch (e5) {
          }
          else try {
            t4.setAttribute(e4, "");
          } catch (e5) {
          }
        }, "wt2"), Et2 = /* @__PURE__ */ __name(function(e4) {
          var t4, n4;
          if (Be2) e4 = "<remove></remove>" + e4;
          else {
            var r3 = E2(e4, /^[\r\n\t ]+/);
            n4 = r3 && r3[0];
          }
          "application/xhtml+xml" === ge2 && it2 === ot2 && (e4 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e4 + "</body></html>");
          var a4 = ie2 ? ie2.createHTML(e4) : e4;
          if (it2 === ot2) try {
            t4 = new g3().parseFromString(a4, ge2);
          } catch (e5) {
          }
          if (!t4 || !t4.documentElement) {
            t4 = ce2.createDocument(it2, "template", null);
            try {
              t4.documentElement.innerHTML = lt2 ? le2 : a4;
            } catch (e5) {
            }
          }
          var o4 = t4.body || t4.documentElement;
          return e4 && n4 && o4.insertBefore(i3.createTextNode(n4), o4.childNodes[0] || null), it2 === ot2 ? fe2.call(t4, Fe2 ? "html" : "body")[0] : Fe2 ? t4.documentElement : o4;
        }, "Et2"), Ct2 = /* @__PURE__ */ __name(function(e4) {
          return de2.call(e4.ownerDocument || e4, e4, f3.SHOW_ELEMENT | f3.SHOW_COMMENT | f3.SHOW_TEXT | f3.SHOW_PROCESSING_INSTRUCTION | f3.SHOW_CDATA_SECTION, null, false);
        }, "Ct2"), St2 = /* @__PURE__ */ __name(function(e4) {
          return e4 instanceof h3 && ("string" != typeof e4.nodeName || "string" != typeof e4.textContent || "function" != typeof e4.removeChild || !(e4.attributes instanceof p3) || "function" != typeof e4.removeAttribute || "function" != typeof e4.setAttribute || "string" != typeof e4.namespaceURI || "function" != typeof e4.insertBefore || "function" != typeof e4.hasChildNodes);
        }, "St2"), xt2 = /* @__PURE__ */ __name(function(t4) {
          return "object" === e3(c3) ? t4 instanceof c3 : t4 && "object" === e3(t4) && "number" == typeof t4.nodeType && "string" == typeof t4.nodeName;
        }, "xt2"), Nt2 = /* @__PURE__ */ __name(function(e4, t4, n4) {
          he2[e4] && y2(he2[e4], function(e5) {
            e5.call(a3, t4, n4, ut2);
          });
        }, "Nt2"), Tt2 = /* @__PURE__ */ __name(function(e4) {
          var t4;
          if (Nt2("beforeSanitizeElements", e4, null), St2(e4)) return kt2(e4), true;
          if (N2(/[\u0080-\uFFFF]/, e4.nodeName)) return kt2(e4), true;
          var n4 = ye2(e4.nodeName);
          if (Nt2("uponSanitizeElement", e4, { tagName: n4, allowedTags: Te2 }), e4.hasChildNodes() && !xt2(e4.firstElementChild) && (!xt2(e4.content) || !xt2(e4.content.firstElementChild)) && N2(/<[/\w]/g, e4.innerHTML) && N2(/<[/\w]/g, e4.textContent)) return kt2(e4), true;
          if ("select" === n4 && N2(/<template/i, e4.innerHTML)) return kt2(e4), true;
          if (7 === e4.nodeType) return kt2(e4), true;
          if ($e2 && 8 === e4.nodeType && N2(/<[/\w]/g, e4.data)) return kt2(e4), true;
          if (!Te2[n4] || Ie2[n4]) {
            if (!Ie2[n4] && At2(n4)) {
              if (Le2.tagNameCheck instanceof RegExp && N2(Le2.tagNameCheck, n4)) return false;
              if (Le2.tagNameCheck instanceof Function && Le2.tagNameCheck(n4)) return false;
            }
            if (Ye2 && !Xe2[n4]) {
              var r3 = ae2(e4) || e4.parentNode, o4 = re2(e4) || e4.childNodes;
              if (o4 && r3) for (var i4 = o4.length - 1; i4 >= 0; --i4) {
                var l4 = te2(o4[i4], true);
                l4.__removalCount = (e4.__removalCount || 0) + 1, r3.insertBefore(l4, ne2(e4));
              }
            }
            return kt2(e4), true;
          }
          return e4 instanceof u3 && !function(e5) {
            var t5 = ae2(e5);
            t5 && t5.tagName || (t5 = { namespaceURI: it2, tagName: "template" });
            var n5 = k2(e5.tagName), r4 = k2(t5.tagName);
            return !!st2[e5.namespaceURI] && (e5.namespaceURI === at2 ? t5.namespaceURI === ot2 ? "svg" === n5 : t5.namespaceURI === rt2 ? "svg" === n5 && ("annotation-xml" === r4 || ht2[r4]) : Boolean(bt2[n5]) : e5.namespaceURI === rt2 ? t5.namespaceURI === ot2 ? "math" === n5 : t5.namespaceURI === at2 ? "math" === n5 && gt2[r4] : Boolean(vt2[n5]) : e5.namespaceURI === ot2 ? !(t5.namespaceURI === at2 && !gt2[r4]) && !(t5.namespaceURI === rt2 && !ht2[r4]) && !vt2[n5] && (yt2[n5] || !bt2[n5]) : !("application/xhtml+xml" !== ge2 || !st2[e5.namespaceURI]));
          }(e4) ? (kt2(e4), true) : "noscript" !== n4 && "noembed" !== n4 && "noframes" !== n4 || !N2(/<\/no(script|embed|frames)/i, e4.innerHTML) ? (je2 && 3 === e4.nodeType && (t4 = e4.textContent, t4 = C2(t4, be2, " "), t4 = C2(t4, ve2, " "), t4 = C2(t4, ke2, " "), e4.textContent !== t4 && (v2(a3.removed, { element: e4.cloneNode() }), e4.textContent = t4)), Nt2("afterSanitizeElements", e4, null), false) : (kt2(e4), true);
        }, "Tt2"), Ot2 = /* @__PURE__ */ __name(function(e4, t4, n4) {
          if (Ge2 && ("id" === t4 || "name" === t4) && (n4 in i3 || n4 in ft2)) return false;
          if (Me2 && !Pe2[t4] && N2(we2, t4)) ;
          else if (_e2 && N2(Ee2, t4)) ;
          else if (!Ae2[t4] || Pe2[t4]) {
            if (!(At2(e4) && (Le2.tagNameCheck instanceof RegExp && N2(Le2.tagNameCheck, e4) || Le2.tagNameCheck instanceof Function && Le2.tagNameCheck(e4)) && (Le2.attributeNameCheck instanceof RegExp && N2(Le2.attributeNameCheck, t4) || Le2.attributeNameCheck instanceof Function && Le2.attributeNameCheck(t4)) || "is" === t4 && Le2.allowCustomizedBuiltInElements && (Le2.tagNameCheck instanceof RegExp && N2(Le2.tagNameCheck, n4) || Le2.tagNameCheck instanceof Function && Le2.tagNameCheck(n4)))) return false;
          } else if (tt2[t4]) ;
          else if (N2(Ne2, C2(n4, Se2, ""))) ;
          else if ("src" !== t4 && "xlink:href" !== t4 && "href" !== t4 || "script" === e4 || 0 !== S2(n4, "data:") || !Je2[e4]) {
            if (ze2 && !N2(Ce2, C2(n4, Se2, ""))) ;
            else if (n4) return false;
          }
          return true;
        }, "Ot2"), At2 = /* @__PURE__ */ __name(function(e4) {
          return "annotation-xml" !== e4 && E2(e4, xe2);
        }, "At2"), Rt2 = /* @__PURE__ */ __name(function(t4) {
          var n4, r3, o4, i4;
          Nt2("beforeSanitizeAttributes", t4, null);
          var l4 = t4.attributes;
          if (l4) {
            var s4 = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: Ae2 };
            for (i4 = l4.length; i4--; ) {
              var c4 = n4 = l4[i4], d3 = c4.name, u4 = c4.namespaceURI;
              if (r3 = "value" === d3 ? n4.value : x2(n4.value), o4 = ye2(d3), s4.attrName = o4, s4.attrValue = r3, s4.keepAttr = true, s4.forceKeepAttr = void 0, Nt2("uponSanitizeAttribute", t4, s4), r3 = s4.attrValue, $e2 && N2(/((--!?|])>)|<\/(style|title)/i, r3)) wt2(d3, t4);
              else if (!s4.forceKeepAttr && (wt2(d3, t4), s4.keepAttr)) if (De2 || !N2(/\/>/i, r3)) {
                je2 && (r3 = C2(r3, be2, " "), r3 = C2(r3, ve2, " "), r3 = C2(r3, ke2, " "));
                var f4 = ye2(t4.nodeName);
                if (Ot2(f4, o4, r3)) {
                  if (!Ve2 || "id" !== o4 && "name" !== o4 || (wt2(d3, t4), r3 = "user-content-" + r3), ie2 && "object" === e3(O3) && "function" == typeof O3.getAttributeType) if (u4) ;
                  else switch (O3.getAttributeType(f4, o4)) {
                    case "TrustedHTML":
                      r3 = ie2.createHTML(r3);
                      break;
                    case "TrustedScriptURL":
                      r3 = ie2.createScriptURL(r3);
                  }
                  try {
                    u4 ? t4.setAttributeNS(u4, d3, r3) : t4.setAttribute(d3, r3), St2(t4) ? kt2(t4) : b2(a3.removed);
                  } catch (e4) {
                  }
                }
              } else wt2(d3, t4);
            }
            Nt2("afterSanitizeAttributes", t4, null);
          }
        }, "Rt2"), Lt2 = /* @__PURE__ */ __name(function e4(t4) {
          var n4, r3 = Ct2(t4);
          for (Nt2("beforeSanitizeShadowDOM", t4, null); n4 = r3.nextNode(); ) Nt2("uponSanitizeShadowNode", n4, null), Tt2(n4) || (n4.content instanceof l3 && e4(n4.content), Rt2(n4));
          Nt2("afterSanitizeShadowDOM", t4, null);
        }, "e4");
        return a3.sanitize = function(t4) {
          var r3, i4, s4, d3, u4, f4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ((lt2 = !t4) && (t4 = "<!-->"), "string" != typeof t4 && !xt2(t4)) {
            if ("function" != typeof t4.toString) throw T2("toString is not a function");
            if ("string" != typeof (t4 = t4.toString())) throw T2("dirty is not a string, aborting");
          }
          if (!a3.isSupported) {
            if ("object" === e3(n3.toStaticHTML) || "function" == typeof n3.toStaticHTML) {
              if ("string" == typeof t4) return n3.toStaticHTML(t4);
              if (xt2(t4)) return n3.toStaticHTML(t4.outerHTML);
            }
            return t4;
          }
          if (He2 || pt2(f4), a3.removed = [], "string" == typeof t4 && (Ze2 = false), Ze2) {
            if (t4.nodeName) {
              var m4 = ye2(t4.nodeName);
              if (!Te2[m4] || Ie2[m4]) throw T2("root node is forbidden and cannot be sanitized in-place");
            }
          } else if (t4 instanceof c3) 1 === (i4 = (r3 = Et2("<!---->")).ownerDocument.importNode(t4, true)).nodeType && "BODY" === i4.nodeName || "HTML" === i4.nodeName ? r3 = i4 : r3.appendChild(i4);
          else {
            if (!qe2 && !je2 && !Fe2 && -1 === t4.indexOf("<")) return ie2 && We2 ? ie2.createHTML(t4) : t4;
            if (!(r3 = Et2(t4))) return qe2 ? null : We2 ? le2 : "";
          }
          r3 && Be2 && kt2(r3.firstChild);
          for (var p4 = Ct2(Ze2 ? t4 : r3); s4 = p4.nextNode(); ) 3 === s4.nodeType && s4 === d3 || Tt2(s4) || (s4.content instanceof l3 && Lt2(s4.content), Rt2(s4), d3 = s4);
          if (d3 = null, Ze2) return t4;
          if (qe2) {
            if (Ue2) for (u4 = ue2.call(r3.ownerDocument); r3.firstChild; ) u4.appendChild(r3.firstChild);
            else u4 = r3;
            return (Ae2.shadowroot || Ae2.shadowrootmod) && (u4 = me2.call(o3, u4, true)), u4;
          }
          var h4 = Fe2 ? r3.outerHTML : r3.innerHTML;
          return Fe2 && Te2["!doctype"] && r3.ownerDocument && r3.ownerDocument.doctype && r3.ownerDocument.doctype.name && N2(X2, r3.ownerDocument.doctype.name) && (h4 = "<!DOCTYPE " + r3.ownerDocument.doctype.name + ">\n" + h4), je2 && (h4 = C2(h4, be2, " "), h4 = C2(h4, ve2, " "), h4 = C2(h4, ke2, " ")), ie2 && We2 ? ie2.createHTML(h4) : h4;
        }, a3.setConfig = function(e4) {
          pt2(e4), He2 = true;
        }, a3.clearConfig = function() {
          ut2 = null, He2 = false;
        }, a3.isValidAttribute = function(e4, t4, n4) {
          ut2 || pt2({});
          var r3 = ye2(e4), a4 = ye2(t4);
          return Ot2(r3, a4, n4);
        }, a3.addHook = function(e4, t4) {
          "function" == typeof t4 && (he2[e4] = he2[e4] || [], v2(he2[e4], t4));
        }, a3.removeHook = function(e4) {
          if (he2[e4]) return b2(he2[e4]);
        }, a3.removeHooks = function(e4) {
          he2[e4] && (he2[e4] = []);
        }, a3.removeAllHooks = function() {
          he2 = {};
        }, a3;
      }, "t3"))();
      return ee2;
    }();
  }, 985: (e2, t2, n2) => {
    var r2 = n2(524), a2 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, o2 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, i2 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, l2 = {};
    function s2(e3) {
      return r2.isMemo(e3) ? i2 : l2[e3.$$typeof] || a2;
    }
    __name(s2, "s2");
    l2[r2.ForwardRef] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, l2[r2.Memo] = i2;
    var c2 = Object.defineProperty, d2 = Object.getOwnPropertyNames, u2 = Object.getOwnPropertySymbols, f2 = Object.getOwnPropertyDescriptor, m2 = Object.getPrototypeOf, p2 = Object.prototype;
    e2.exports = /* @__PURE__ */ __name(function e3(t3, n3, r3) {
      if ("string" != typeof n3) {
        if (p2) {
          var a3 = m2(n3);
          a3 && a3 !== p2 && e3(t3, a3, r3);
        }
        var i3 = d2(n3);
        u2 && (i3 = i3.concat(u2(n3)));
        for (var l3 = s2(t3), h2 = s2(n3), g2 = 0; g2 < i3.length; ++g2) {
          var y2 = i3[g2];
          if (!(o2[y2] || r3 && r3[y2] || h2 && h2[y2] || l3 && l3[y2])) {
            var b2 = f2(n3, y2);
            try {
              c2(t3, y2, b2);
            } catch (e4) {
            }
          }
        }
      }
      return t3;
    }, "e3");
  }, 999: (e2, t2, n2) => {
    var r2 = n2(848);
    function a2() {
    }
    __name(a2, "a2");
    function o2() {
    }
    __name(o2, "o2");
    o2.resetWarningCache = a2, e2.exports = function() {
      function e3(e4, t4, n4, a3, o3, i2) {
        if (i2 !== r2) {
          var l2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw l2.name = "Invariant Violation", l2;
        }
      }
      __name(e3, "e3");
      function t3() {
        return e3;
      }
      __name(t3, "t3");
      e3.isRequired = e3;
      var n3 = { array: e3, bigint: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: o2, resetWarningCache: a2 };
      return n3.PropTypes = n3, n3;
    };
  }, 67: (e2, t2, n2) => {
    e2.exports = n2(999)();
  }, 848: (e2) => {
    e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, 320: (e2, t2) => {
    var n2 = "function" == typeof Symbol && Symbol.for, r2 = n2 ? Symbol.for("react.element") : 60103, a2 = n2 ? Symbol.for("react.portal") : 60106, o2 = n2 ? Symbol.for("react.fragment") : 60107, i2 = n2 ? Symbol.for("react.strict_mode") : 60108, l2 = n2 ? Symbol.for("react.profiler") : 60114, s2 = n2 ? Symbol.for("react.provider") : 60109, c2 = n2 ? Symbol.for("react.context") : 60110, d2 = n2 ? Symbol.for("react.async_mode") : 60111, u2 = n2 ? Symbol.for("react.concurrent_mode") : 60111, f2 = n2 ? Symbol.for("react.forward_ref") : 60112, m2 = n2 ? Symbol.for("react.suspense") : 60113, p2 = n2 ? Symbol.for("react.suspense_list") : 60120, h2 = n2 ? Symbol.for("react.memo") : 60115, g2 = n2 ? Symbol.for("react.lazy") : 60116, y2 = n2 ? Symbol.for("react.block") : 60121, b2 = n2 ? Symbol.for("react.fundamental") : 60117, v2 = n2 ? Symbol.for("react.responder") : 60118, k2 = n2 ? Symbol.for("react.scope") : 60119;
    function w2(e3) {
      if ("object" == typeof e3 && null !== e3) {
        var t3 = e3.$$typeof;
        switch (t3) {
          case r2:
            switch (e3 = e3.type) {
              case d2:
              case u2:
              case o2:
              case l2:
              case i2:
              case m2:
                return e3;
              default:
                switch (e3 = e3 && e3.$$typeof) {
                  case c2:
                  case f2:
                  case g2:
                  case h2:
                  case s2:
                    return e3;
                  default:
                    return t3;
                }
            }
          case a2:
            return t3;
        }
      }
    }
    __name(w2, "w2");
    function E2(e3) {
      return w2(e3) === u2;
    }
    __name(E2, "E2");
    t2.AsyncMode = d2, t2.ConcurrentMode = u2, t2.ContextConsumer = c2, t2.ContextProvider = s2, t2.Element = r2, t2.ForwardRef = f2, t2.Fragment = o2, t2.Lazy = g2, t2.Memo = h2, t2.Portal = a2, t2.Profiler = l2, t2.StrictMode = i2, t2.Suspense = m2, t2.isAsyncMode = function(e3) {
      return E2(e3) || w2(e3) === d2;
    }, t2.isConcurrentMode = E2, t2.isContextConsumer = function(e3) {
      return w2(e3) === c2;
    }, t2.isContextProvider = function(e3) {
      return w2(e3) === s2;
    }, t2.isElement = function(e3) {
      return "object" == typeof e3 && null !== e3 && e3.$$typeof === r2;
    }, t2.isForwardRef = function(e3) {
      return w2(e3) === f2;
    }, t2.isFragment = function(e3) {
      return w2(e3) === o2;
    }, t2.isLazy = function(e3) {
      return w2(e3) === g2;
    }, t2.isMemo = function(e3) {
      return w2(e3) === h2;
    }, t2.isPortal = function(e3) {
      return w2(e3) === a2;
    }, t2.isProfiler = function(e3) {
      return w2(e3) === l2;
    }, t2.isStrictMode = function(e3) {
      return w2(e3) === i2;
    }, t2.isSuspense = function(e3) {
      return w2(e3) === m2;
    }, t2.isValidElementType = function(e3) {
      return "string" == typeof e3 || "function" == typeof e3 || e3 === o2 || e3 === u2 || e3 === l2 || e3 === i2 || e3 === m2 || e3 === p2 || "object" == typeof e3 && null !== e3 && (e3.$$typeof === g2 || e3.$$typeof === h2 || e3.$$typeof === s2 || e3.$$typeof === c2 || e3.$$typeof === f2 || e3.$$typeof === b2 || e3.$$typeof === v2 || e3.$$typeof === k2 || e3.$$typeof === y2);
    }, t2.typeOf = w2;
  }, 524: (e2, t2, n2) => {
    e2.exports = n2(320);
  }, 146: (e2) => {
    e2.exports = function(e3, t2, n2, r2) {
      var a2 = n2 ? n2.call(r2, e3, t2) : void 0;
      if (void 0 !== a2) return !!a2;
      if (e3 === t2) return true;
      if ("object" != typeof e3 || !e3 || "object" != typeof t2 || !t2) return false;
      var o2 = Object.keys(e3), i2 = Object.keys(t2);
      if (o2.length !== i2.length) return false;
      for (var l2 = Object.prototype.hasOwnProperty.bind(t2), s2 = 0; s2 < o2.length; s2++) {
        var c2 = o2[s2];
        if (!l2(c2)) return false;
        var d2 = e3[c2], u2 = t2[c2];
        if (false === (a2 = n2 ? n2.call(r2, d2, u2, c2) : void 0) || void 0 === a2 && d2 !== u2) return false;
      }
      return true;
    };
  }, 373: (e2, t2) => {
    var n2;
    !function() {
      var r2 = {}.hasOwnProperty;
      function a2() {
        for (var e3 = "", t3 = 0; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          n3 && (e3 = i2(e3, o2(n3)));
        }
        return e3;
      }
      __name(a2, "a2");
      function o2(e3) {
        if ("string" == typeof e3 || "number" == typeof e3) return e3;
        if ("object" != typeof e3) return "";
        if (Array.isArray(e3)) return a2.apply(null, e3);
        if (e3.toString !== Object.prototype.toString && !e3.toString.toString().includes("[native code]")) return e3.toString();
        var t3 = "";
        for (var n3 in e3) r2.call(e3, n3) && e3[n3] && (t3 = i2(t3, n3));
        return t3;
      }
      __name(o2, "o2");
      function i2(e3, t3) {
        return t3 ? e3 ? e3 + " " + t3 : e3 + t3 : e3;
      }
      __name(i2, "i2");
      e2.exports ? (a2.default = a2, e2.exports = a2) : void 0 === (n2 = (function() {
        return a2;
      }).apply(t2, [])) || (e2.exports = n2);
    }();
  } }, r = {};
  function a(e2) {
    var t2 = r[e2];
    if (void 0 !== t2) return t2.exports;
    var o2 = r[e2] = { exports: {} };
    return n[e2].call(o2.exports, o2, o2.exports, a), o2.exports;
  }
  __name(a, "a");
  a.n = (e2) => {
    var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return a.d(t2, { a: t2 }), t2;
  }, a.d = (e2, t2) => {
    for (var n2 in t2) a.o(t2, n2) && !a.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
  }, a.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), a.nc = void 0;
  var o = {};
  a.d(o, { nD: /* @__PURE__ */ __name(() => N$1, "nD"), n_: /* @__PURE__ */ __name(() => lt, "n_"), n9: /* @__PURE__ */ __name(() => qt, "n9"), $n: /* @__PURE__ */ __name(() => A, "$n"), ef: /* @__PURE__ */ __name(() => Wt, "ef"), fy: /* @__PURE__ */ __name(() => Vt, "fy"), Zp: /* @__PURE__ */ __name(() => Xt, "Zp"), TR: /* @__PURE__ */ __name(() => pn, "TR"), Pb: /* @__PURE__ */ __name(() => on, "Pb"), Ur: /* @__PURE__ */ __name(() => an, "Ur"), _Q: /* @__PURE__ */ __name(() => mn, "_Q"), lq: /* @__PURE__ */ __name(() => gn, "lq"), _V: /* @__PURE__ */ __name(() => Yt, "_V"), dK: /* @__PURE__ */ __name(() => vn, "dK"), Fx: /* @__PURE__ */ __name(() => xn, "Fx"), oz: /* @__PURE__ */ __name(() => An, "oz"), YT: /* @__PURE__ */ __name(() => Rn, "YT"), Gm: /* @__PURE__ */ __name(() => Ln, "Gm"), Ce: /* @__PURE__ */ __name(() => Pn, "Ce"), qm: /* @__PURE__ */ __name(() => cn, "qm"), fh: /* @__PURE__ */ __name(() => un, "fh"), Od: /* @__PURE__ */ __name(() => sn, "Od"), fZ: /* @__PURE__ */ __name(() => dn, "fZ"), RE: /* @__PURE__ */ __name(() => ln, "RE"), hZ: /* @__PURE__ */ __name(() => zn, "hZ"), Nq: /* @__PURE__ */ __name(() => Dn, "Nq"), NJ: /* @__PURE__ */ __name(() => jn, "NJ"), bO: /* @__PURE__ */ __name(() => $n, "bO"), oP: /* @__PURE__ */ __name(() => Fn, "oP"), jl: /* @__PURE__ */ __name(() => Hn, "jl"), PP: /* @__PURE__ */ __name(() => Bn, "PP"), BB: /* @__PURE__ */ __name(() => qn, "BB"), Q9: /* @__PURE__ */ __name(() => Un, "Q9"), vW: /* @__PURE__ */ __name(() => Gn, "vW"), VE: /* @__PURE__ */ __name(() => Wn, "VE"), _v: /* @__PURE__ */ __name(() => Vn, "_v"), uP: /* @__PURE__ */ __name(() => Yn, "uP") });
  var i = a(67), l = a.n(i);
  const s = (c = { Component: /* @__PURE__ */ __name(() => r__namespace.Component, "Component"), createContext: /* @__PURE__ */ __name(() => r__namespace.createContext, "createContext"), createElement: /* @__PURE__ */ __name(() => r__namespace.createElement, "createElement"), default: /* @__PURE__ */ __name(() => r__namespace.default, "default"), forwardRef: /* @__PURE__ */ __name(() => r__namespace.forwardRef, "forwardRef"), useCallback: /* @__PURE__ */ __name(() => r__namespace.useCallback, "useCallback"), useContext: /* @__PURE__ */ __name(() => r__namespace.useContext, "useContext"), useEffect: /* @__PURE__ */ __name(() => r__namespace.useEffect, "useEffect"), useImperativeHandle: /* @__PURE__ */ __name(() => r__namespace.useImperativeHandle, "useImperativeHandle"), useMemo: /* @__PURE__ */ __name(() => r__namespace.useMemo, "useMemo"), useRef: /* @__PURE__ */ __name(() => r__namespace.useRef, "useRef"), useState: /* @__PURE__ */ __name(() => r__namespace.useState, "useState") }, d = {}, a.d(d, c), d);
  var c, d;
  const u = /* @__PURE__ */ __name((e2, t2, n2) => e2 ? t2 : n2, "u"), f = /* @__PURE__ */ __name((e2) => (e2 || []).join(" "), "f");
  var m$2 = a(651);
  const p = /* @__PURE__ */ __name((e2) => ({ __html: (0, m$2.sanitize)(e2) }), "p"), h = /* @__PURE__ */ __name((e2, t2, n2) => {
    let r2 = e2;
    const a2 = [];
    for (; r2 < t2; ) r2 > 0 && r2 <= n2 && a2.push(r2), r2 += 1;
    return a2;
  }, "h");
  let g$1, y$1 = false;
  l().shape({ event: l().string, action: l().string, name: l().string, region: l().string, section: l().string, component: l().string, type: l().string, text: l().string });
  const b$1 = /* @__PURE__ */ __name(({ event: e2 = "", action: t2 = "", name: n2 = "", type: r2 = "", section: a2 = "", text: o2 = "", region: i2 = "", component: l2 = "" }) => {
    const { dataLayer: s2 } = window, c2 = { event: e2.toLowerCase(), action: t2.toLowerCase(), name: n2.toLowerCase(), type: r2.toLowerCase(), region: i2.toLowerCase(), section: a2.toLowerCase(), text: o2.toLowerCase(), component: l2.toLowerCase() };
    s2 && s2.push(c2);
  }, "b$1"), v$1 = l().shape({ url: l().string, altText: l().string, cssClass: l().arrayOf(l().string), size: l().oneOf(["small", "medium", "large"]) }), k$1 = l().shape({ text: l().string, maxWidth: l().string, cssClass: l().arrayOf(l().string), highlightColor: l().oneOf(["gold", "black"]) }), w$1 = l().shape({ color: l().oneOf(["gold", "maroon", "gray", "dark"]), content: l().shape({ icon: l().string, header: l().string, body: l().string }) });
  var E$1 = a(373), C$1 = a.n(E$1);
  const S$1 = /* @__PURE__ */ __name(({ id: e2, item: t2, openCard: n2, onClick: r2 }) => {
    var _a, _b, _c, _d, _e2, _f;
    return s.default.createElement("div", { className: C$1()("accordion-item", "mt-3", { [`accordion-item-${t2.color}`]: t2.color, "accordion-header-icon": (_a = t2.content) == null ? void 0 : _a.icon }) }, s.default.createElement("div", { className: "accordion-header" }, s.default.createElement("h4", null, s.default.createElement("a", { "data-testid": "accordion-opener", className: C$1()({ collapsed: e2 !== n2 }), "data-bs-toggle": "collapse", href: `#card-body-${e2}`, role: "button", "aria-expanded": e2 === n2, "aria-controls": `card-body-${e2}`, onClick: /* @__PURE__ */ __name((n3) => {
      var _a2;
      return r2(n3, e2, (_a2 = t2.content) == null ? void 0 : _a2.header);
    }, "onClick") }, ((_b = t2.content) == null ? void 0 : _b.icon) ? s.default.createElement("span", { className: "accordion-icon" }, s.default.createElement("i", { className: `${(_c = t2.content.icon) == null ? void 0 : _c[0]} fa-${(_d = t2.content.icon) == null ? void 0 : _d[1]} me-2` }), t2.content.header) : (_e2 = t2.content) == null ? void 0 : _e2.header, s.default.createElement("i", { className: "fas fa-chevron-up" })))), ((_f = t2.content) == null ? void 0 : _f.body) && s.default.createElement("div", { id: `card-body-${e2}`, className: C$1()("collapse") }, s.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: p(t2.content.body) })));
  }, "S$1");
  S$1.propTypes = { id: l().number, item: w$1, openCard: l().number, onClick: l().func };
  const x$1 = { event: "collapse", name: "onclick", type: "click", region: "main content" }, N$1 = /* @__PURE__ */ __name(({ cards: e2, openedCard: t2 }) => {
    const [n2, r2] = (0, s.useState)(t2), a2 = /* @__PURE__ */ __name((e3, t3) => {
      b$1({ ...x$1, action: t3, text: e3 });
    }, "a2"), o2 = /* @__PURE__ */ __name((t3, o3, i2) => {
      t3.preventDefault(), (n2 === o3 || n2) && a2(e2[n2 - 1].content.header, "close"), n2 !== o3 ? (r2(o3), a2(i2, "open")) : r2(null);
    }, "o2");
    return s.default.createElement("div", { className: "accordion" }, e2 == null ? void 0 : e2.map((e3, t3) => e3.content.body && e3.content.header && s.default.createElement(S$1, { key: t3 + 1, id: t3 + 1, item: e3, openCard: n2, onClick: o2 })));
  }, "N$1");
  function T$1() {
    return T$1 = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, T$1.apply(null, arguments);
  }
  __name(T$1, "T$1");
  N$1.propTypes = { cards: l().arrayOf(w$1).isRequired, openedCard: l().number };
  const O$1 = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, A = /* @__PURE__ */ __name(({ label: e2, cardTitle: t2, ariaLabel: n2, block: r2, color: a2, disabled: o2, element: i2, href: l2, icon: c2, innerRef: d2, onClick: u2, size: f2, classes: m2, target: p2, ...h2 }) => {
    const g2 = C$1()("btn", { [`btn-${a2}`]: true, "btn-md": "small" === f2, "btn-sm": "xsmall" === f2, "btn-block": r2, disabled: o2 });
    let y2 = i2;
    return l2 && "button" === i2 && (y2 = "a"), s.default.createElement(y2, T$1({ type: "button" === y2 && u2 ? "button" : void 0 }, h2, { className: C$1()(m2) || g2, href: l2, ref: d2, onClick: /* @__PURE__ */ __name(() => (b$1({ ...O$1, text: e2, section: t2 }), void (u2 == null ? void 0 : u2())), "onClick"), "aria-label": n2, target: "a" === y2 ? p2 : null }), c2 && s.default.createElement("i", { className: `${c2 == null ? void 0 : c2[0]} fa-${c2 == null ? void 0 : c2[1]} me-1` }), e2);
  }, "A");
  A.propTypes = { label: l().string, cardTitle: l().string, ariaLabel: l().string, block: l().bool, color: l().oneOf(["gold", "maroon", "gray", "dark"]), disabled: l().bool, element: l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func }), l().arrayOf(l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func })]))]), href: l().string, icon: l().arrayOf(l().string), innerRef: l().oneOfType([l().object, l().func, l().string]), onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), classes: l().arrayOf(l().string), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) }, A.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
  var R$1 = a(524), L$1 = a(146);
  a.n(L$1);
  const P$1 = /* @__PURE__ */ __name(function(e2) {
    function t2(e3, r3, s3, c3, f3) {
      for (var m3, p3, h3, g3, k3, E3 = 0, C3 = 0, S3 = 0, x3 = 0, N3 = 0, I3 = 0, _3 = h3 = m3 = 0, z2 = 0, D2 = 0, j2 = 0, $2 = 0, F2 = s3.length, H2 = F2 - 1, B2 = "", q2 = "", U2 = "", W2 = ""; z2 < F2; ) {
        if (p3 = s3.charCodeAt(z2), z2 === H2 && 0 !== C3 + x3 + S3 + E3 && (0 !== C3 && (p3 = 47 === C3 ? 10 : 47), x3 = S3 = E3 = 0, F2++, H2++), 0 === C3 + x3 + S3 + E3) {
          if (z2 === H2 && (0 < D2 && (B2 = B2.replace(u2, "")), 0 < B2.trim().length)) {
            switch (p3) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                B2 += s3.charAt(z2);
            }
            p3 = 59;
          }
          switch (p3) {
            case 123:
              for (m3 = (B2 = B2.trim()).charCodeAt(0), h3 = 1, $2 = ++z2; z2 < F2; ) {
                switch (p3 = s3.charCodeAt(z2)) {
                  case 123:
                    h3++;
                    break;
                  case 125:
                    h3--;
                    break;
                  case 47:
                    switch (p3 = s3.charCodeAt(z2 + 1)) {
                      case 42:
                      case 47:
                        e: {
                          for (_3 = z2 + 1; _3 < H2; ++_3) switch (s3.charCodeAt(_3)) {
                            case 47:
                              if (42 === p3 && 42 === s3.charCodeAt(_3 - 1) && z2 + 2 !== _3) {
                                z2 = _3 + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (47 === p3) {
                                z2 = _3 + 1;
                                break e;
                              }
                          }
                          z2 = _3;
                        }
                    }
                    break;
                  case 91:
                    p3++;
                  case 40:
                    p3++;
                  case 34:
                  case 39:
                    for (; z2++ < H2 && s3.charCodeAt(z2) !== p3; ) ;
                }
                if (0 === h3) break;
                z2++;
              }
              if (h3 = s3.substring($2, z2), 0 === m3 && (m3 = (B2 = B2.replace(d2, "").trim()).charCodeAt(0)), 64 === m3) {
                switch (0 < D2 && (B2 = B2.replace(u2, "")), p3 = B2.charCodeAt(1)) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    D2 = r3;
                    break;
                  default:
                    D2 = L2;
                }
                if ($2 = (h3 = t2(r3, D2, h3, p3, f3 + 1)).length, 0 < P2 && (k3 = l2(3, h3, D2 = n2(L2, B2, j2), r3, O2, T2, $2, p3, f3, c3), B2 = D2.join(""), void 0 !== k3 && 0 === ($2 = (h3 = k3.trim()).length) && (p3 = 0, h3 = "")), 0 < $2) switch (p3) {
                  case 115:
                    B2 = B2.replace(w2, i2);
                  case 100:
                  case 109:
                  case 45:
                    h3 = B2 + "{" + h3 + "}";
                    break;
                  case 107:
                    h3 = (B2 = B2.replace(y2, "$1 $2")) + "{" + h3 + "}", h3 = 1 === R2 || 2 === R2 && o2("@" + h3, 3) ? "@-webkit-" + h3 + "@" + h3 : "@" + h3;
                    break;
                  default:
                    h3 = B2 + h3, 112 === c3 && (q2 += h3, h3 = "");
                }
                else h3 = "";
              } else h3 = t2(r3, n2(r3, B2, j2), h3, c3, f3 + 1);
              U2 += h3, h3 = j2 = D2 = _3 = m3 = 0, B2 = "", p3 = s3.charCodeAt(++z2);
              break;
            case 125:
            case 59:
              if (1 < ($2 = (B2 = (0 < D2 ? B2.replace(u2, "") : B2).trim()).length)) switch (0 === _3 && (m3 = B2.charCodeAt(0), 45 === m3 || 96 < m3 && 123 > m3) && ($2 = (B2 = B2.replace(" ", ":")).length), 0 < P2 && void 0 !== (k3 = l2(1, B2, r3, e3, O2, T2, q2.length, c3, f3, c3)) && 0 === ($2 = (B2 = k3.trim()).length) && (B2 = "\0\0"), m3 = B2.charCodeAt(0), p3 = B2.charCodeAt(1), m3) {
                case 0:
                  break;
                case 64:
                  if (105 === p3 || 99 === p3) {
                    W2 += B2 + s3.charAt(z2);
                    break;
                  }
                default:
                  58 !== B2.charCodeAt($2 - 1) && (q2 += a2(B2, m3, p3, B2.charCodeAt(2)));
              }
              j2 = D2 = _3 = m3 = 0, B2 = "", p3 = s3.charCodeAt(++z2);
          }
        }
        switch (p3) {
          case 13:
          case 10:
            47 === C3 ? C3 = 0 : 0 === 1 + m3 && 107 !== c3 && 0 < B2.length && (D2 = 1, B2 += "\0"), 0 < P2 * M2 && l2(0, B2, r3, e3, O2, T2, q2.length, c3, f3, c3), T2 = 1, O2++;
            break;
          case 59:
          case 125:
            if (0 === C3 + x3 + S3 + E3) {
              T2++;
              break;
            }
          default:
            switch (T2++, g3 = s3.charAt(z2), p3) {
              case 9:
              case 32:
                if (0 === x3 + E3 + C3) switch (N3) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    g3 = "";
                    break;
                  default:
                    32 !== p3 && (g3 = " ");
                }
                break;
              case 0:
                g3 = "\\0";
                break;
              case 12:
                g3 = "\\f";
                break;
              case 11:
                g3 = "\\v";
                break;
              case 38:
                0 === x3 + C3 + E3 && (D2 = j2 = 1, g3 = "\f" + g3);
                break;
              case 108:
                if (0 === x3 + C3 + E3 + A2 && 0 < _3) switch (z2 - _3) {
                  case 2:
                    112 === N3 && 58 === s3.charCodeAt(z2 - 3) && (A2 = N3);
                  case 8:
                    111 === I3 && (A2 = I3);
                }
                break;
              case 58:
                0 === x3 + C3 + E3 && (_3 = z2);
                break;
              case 44:
                0 === C3 + S3 + x3 + E3 && (D2 = 1, g3 += "\r");
                break;
              case 34:
              case 39:
                0 === C3 && (x3 = x3 === p3 ? 0 : 0 === x3 ? p3 : x3);
                break;
              case 91:
                0 === x3 + C3 + S3 && E3++;
                break;
              case 93:
                0 === x3 + C3 + S3 && E3--;
                break;
              case 41:
                0 === x3 + C3 + E3 && S3--;
                break;
              case 40:
                0 === x3 + C3 + E3 && (0 === m3 && (2 * N3 + 3 * I3 == 533 || (m3 = 1)), S3++);
                break;
              case 64:
                0 === C3 + S3 + x3 + E3 + _3 + h3 && (h3 = 1);
                break;
              case 42:
              case 47:
                if (!(0 < x3 + E3 + S3)) switch (C3) {
                  case 0:
                    switch (2 * p3 + 3 * s3.charCodeAt(z2 + 1)) {
                      case 235:
                        C3 = 47;
                        break;
                      case 220:
                        $2 = z2, C3 = 42;
                    }
                    break;
                  case 42:
                    47 === p3 && 42 === N3 && $2 + 2 !== z2 && (33 === s3.charCodeAt($2 + 2) && (q2 += s3.substring($2, z2 + 1)), g3 = "", C3 = 0);
                }
            }
            0 === C3 && (B2 += g3);
        }
        I3 = N3, N3 = p3, z2++;
      }
      if (0 < ($2 = q2.length)) {
        if (D2 = r3, 0 < P2 && void 0 !== (k3 = l2(2, q2, D2, e3, O2, T2, $2, c3, f3, c3)) && 0 === (q2 = k3).length) return W2 + q2 + U2;
        if (q2 = D2.join(",") + "{" + q2 + "}", 0 != R2 * A2) {
          switch (2 !== R2 || o2(q2, 2) || (A2 = 0), A2) {
            case 111:
              q2 = q2.replace(v2, ":-moz-$1") + q2;
              break;
            case 112:
              q2 = q2.replace(b2, "::-webkit-input-$1") + q2.replace(b2, "::-moz-$1") + q2.replace(b2, ":-ms-input-$1") + q2;
          }
          A2 = 0;
        }
      }
      return W2 + q2 + U2;
    }
    __name(t2, "t2");
    function n2(e3, t3, n3) {
      var a3 = t3.trim().split(h2);
      t3 = a3;
      var o3 = a3.length, i3 = e3.length;
      switch (i3) {
        case 0:
        case 1:
          var l3 = 0;
          for (e3 = 0 === i3 ? "" : e3[0] + " "; l3 < o3; ++l3) t3[l3] = r2(e3, t3[l3], n3).trim();
          break;
        default:
          var s3 = l3 = 0;
          for (t3 = []; l3 < o3; ++l3) for (var c3 = 0; c3 < i3; ++c3) t3[s3++] = r2(e3[c3] + " ", a3[l3], n3).trim();
      }
      return t3;
    }
    __name(n2, "n2");
    function r2(e3, t3, n3) {
      var r3 = t3.charCodeAt(0);
      switch (33 > r3 && (r3 = (t3 = t3.trim()).charCodeAt(0)), r3) {
        case 38:
          return t3.replace(g2, "$1" + e3.trim());
        case 58:
          return e3.trim() + t3.replace(g2, "$1" + e3.trim());
        default:
          if (0 < 1 * n3 && 0 < t3.indexOf("\f")) return t3.replace(g2, (58 === e3.charCodeAt(0) ? "" : "$1") + e3.trim());
      }
      return e3 + t3;
    }
    __name(r2, "r2");
    function a2(e3, t3, n3, r3) {
      var i3 = e3 + ";", l3 = 2 * t3 + 3 * n3 + 4 * r3;
      if (944 === l3) {
        e3 = i3.indexOf(":", 9) + 1;
        var s3 = i3.substring(e3, i3.length - 1).trim();
        return s3 = i3.substring(0, e3).trim() + s3 + ";", 1 === R2 || 2 === R2 && o2(s3, 1) ? "-webkit-" + s3 + s3 : s3;
      }
      if (0 === R2 || 2 === R2 && !o2(i3, 1)) return i3;
      switch (l3) {
        case 1015:
          return 97 === i3.charCodeAt(10) ? "-webkit-" + i3 + i3 : i3;
        case 951:
          return 116 === i3.charCodeAt(3) ? "-webkit-" + i3 + i3 : i3;
        case 963:
          return 110 === i3.charCodeAt(5) ? "-webkit-" + i3 + i3 : i3;
        case 1009:
          if (100 !== i3.charCodeAt(4)) break;
        case 969:
        case 942:
          return "-webkit-" + i3 + i3;
        case 978:
          return "-webkit-" + i3 + "-moz-" + i3 + i3;
        case 1019:
        case 983:
          return "-webkit-" + i3 + "-moz-" + i3 + "-ms-" + i3 + i3;
        case 883:
          if (45 === i3.charCodeAt(8)) return "-webkit-" + i3 + i3;
          if (0 < i3.indexOf("image-set(", 11)) return i3.replace(N2, "$1-webkit-$2") + i3;
          break;
        case 932:
          if (45 === i3.charCodeAt(4)) switch (i3.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + i3.replace("-grow", "") + "-webkit-" + i3 + "-ms-" + i3.replace("grow", "positive") + i3;
            case 115:
              return "-webkit-" + i3 + "-ms-" + i3.replace("shrink", "negative") + i3;
            case 98:
              return "-webkit-" + i3 + "-ms-" + i3.replace("basis", "preferred-size") + i3;
          }
          return "-webkit-" + i3 + "-ms-" + i3 + i3;
        case 964:
          return "-webkit-" + i3 + "-ms-flex-" + i3 + i3;
        case 1023:
          if (99 !== i3.charCodeAt(8)) break;
          return "-webkit-box-pack" + (s3 = i3.substring(i3.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i3 + "-ms-flex-pack" + s3 + i3;
        case 1005:
          return m2.test(i3) ? i3.replace(f2, ":-webkit-") + i3.replace(f2, ":-moz-") + i3 : i3;
        case 1e3:
          switch (t3 = (s3 = i3.substring(13).trim()).indexOf("-") + 1, s3.charCodeAt(0) + s3.charCodeAt(t3)) {
            case 226:
              s3 = i3.replace(k2, "tb");
              break;
            case 232:
              s3 = i3.replace(k2, "tb-rl");
              break;
            case 220:
              s3 = i3.replace(k2, "lr");
              break;
            default:
              return i3;
          }
          return "-webkit-" + i3 + "-ms-" + s3 + i3;
        case 1017:
          if (-1 === i3.indexOf("sticky", 9)) break;
        case 975:
          switch (t3 = (i3 = e3).length - 10, l3 = (s3 = (33 === i3.charCodeAt(t3) ? i3.substring(0, t3) : i3).substring(e3.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | s3.charCodeAt(7))) {
            case 203:
              if (111 > s3.charCodeAt(8)) break;
            case 115:
              i3 = i3.replace(s3, "-webkit-" + s3) + ";" + i3;
              break;
            case 207:
            case 102:
              i3 = i3.replace(s3, "-webkit-" + (102 < l3 ? "inline-" : "") + "box") + ";" + i3.replace(s3, "-webkit-" + s3) + ";" + i3.replace(s3, "-ms-" + s3 + "box") + ";" + i3;
          }
          return i3 + ";";
        case 938:
          if (45 === i3.charCodeAt(5)) switch (i3.charCodeAt(6)) {
            case 105:
              return s3 = i3.replace("-items", ""), "-webkit-" + i3 + "-webkit-box-" + s3 + "-ms-flex-" + s3 + i3;
            case 115:
              return "-webkit-" + i3 + "-ms-flex-item-" + i3.replace(C2, "") + i3;
            default:
              return "-webkit-" + i3 + "-ms-flex-line-pack" + i3.replace("align-content", "").replace(C2, "") + i3;
          }
          break;
        case 973:
        case 989:
          if (45 !== i3.charCodeAt(3) || 122 === i3.charCodeAt(4)) break;
        case 931:
        case 953:
          if (true === x2.test(e3)) return 115 === (s3 = e3.substring(e3.indexOf(":") + 1)).charCodeAt(0) ? a2(e3.replace("stretch", "fill-available"), t3, n3, r3).replace(":fill-available", ":stretch") : i3.replace(s3, "-webkit-" + s3) + i3.replace(s3, "-moz-" + s3.replace("fill-", "")) + i3;
          break;
        case 962:
          if (i3 = "-webkit-" + i3 + (102 === i3.charCodeAt(5) ? "-ms-" + i3 : "") + i3, 211 === n3 + r3 && 105 === i3.charCodeAt(13) && 0 < i3.indexOf("transform", 10)) return i3.substring(0, i3.indexOf(";", 27) + 1).replace(p2, "$1-webkit-$2") + i3;
      }
      return i3;
    }
    __name(a2, "a2");
    function o2(e3, t3) {
      var n3 = e3.indexOf(1 === t3 ? ":" : "{"), r3 = e3.substring(0, 3 !== t3 ? n3 : 10);
      return n3 = e3.substring(n3 + 1, e3.length - 1), _2(2 !== t3 ? r3 : r3.replace(S2, "$1"), n3, t3);
    }
    __name(o2, "o2");
    function i2(e3, t3) {
      var n3 = a2(t3, t3.charCodeAt(0), t3.charCodeAt(1), t3.charCodeAt(2));
      return n3 !== t3 + ";" ? n3.replace(E2, " or ($1)").substring(4) : "(" + t3 + ")";
    }
    __name(i2, "i2");
    function l2(e3, t3, n3, r3, a3, o3, i3, l3, s3, d3) {
      for (var u3, f3 = 0, m3 = t3; f3 < P2; ++f3) switch (u3 = I2[f3].call(c2, e3, m3, n3, r3, a3, o3, i3, l3, s3, d3)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          m3 = u3;
      }
      if (m3 !== t3) return m3;
    }
    __name(l2, "l2");
    function s2(e3) {
      return void 0 !== (e3 = e3.prefix) && (_2 = null, e3 ? "function" != typeof e3 ? R2 = 1 : (R2 = 2, _2 = e3) : R2 = 0), s2;
    }
    __name(s2, "s2");
    function c2(e3, n3) {
      var r3 = e3;
      if (33 > r3.charCodeAt(0) && (r3 = r3.trim()), r3 = [r3], 0 < P2) {
        var a3 = l2(-1, n3, r3, r3, O2, T2, 0, 0, 0, 0);
        void 0 !== a3 && "string" == typeof a3 && (n3 = a3);
      }
      var o3 = t2(L2, r3, n3, 0, 0);
      return 0 < P2 && void 0 !== (a3 = l2(-2, o3, r3, r3, O2, T2, o3.length, 0, 0, 0)) && (o3 = a3), A2 = 0, T2 = O2 = 1, o3;
    }
    __name(c2, "c2");
    var d2 = /^\0+/g, u2 = /[\0\r\f]/g, f2 = /: */g, m2 = /zoo|gra/, p2 = /([,: ])(transform)/g, h2 = /,\r+?/g, g2 = /([\t\r\n ])*\f?&/g, y2 = /@(k\w+)\s*(\S*)\s*/, b2 = /::(place)/g, v2 = /:(read-only)/g, k2 = /[svh]\w+-[tblr]{2}/, w2 = /\(\s*(.*)\s*\)/g, E2 = /([\s\S]*?);/g, C2 = /-self|flex-/g, S2 = /[^]*?(:[rp][el]a[\w-]+)[^]*/, x2 = /stretch|:\s*\w+\-(?:conte|avail)/, N2 = /([^-])(image-set\()/, T2 = 1, O2 = 1, A2 = 0, R2 = 1, L2 = [], I2 = [], P2 = 0, _2 = null, M2 = 0;
    return c2.use = /* @__PURE__ */ __name(function e3(t3) {
      switch (t3) {
        case void 0:
        case null:
          P2 = I2.length = 0;
          break;
        default:
          if ("function" == typeof t3) I2[P2++] = t3;
          else if ("object" == typeof t3) for (var n3 = 0, r3 = t3.length; n3 < r3; ++n3) e3(t3[n3]);
          else M2 = 0 | !!t3;
      }
      return e3;
    }, "e3"), c2.set = s2, void 0 !== e2 && s2(e2), c2;
  }, "P$1"), _$1 = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
  function M$1(e2) {
    var t2 = /* @__PURE__ */ Object.create(null);
    return function(n2) {
      return void 0 === t2[n2] && (t2[n2] = e2(n2)), t2[n2];
    };
  }
  __name(M$1, "M$1");
  var z$1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, D$1 = M$1(function(e2) {
    return z$1.test(e2) || 111 === e2.charCodeAt(0) && 110 === e2.charCodeAt(1) && e2.charCodeAt(2) < 91;
  }), j$1 = a(985), $$1 = a.n(j$1);
  function F$1() {
    return (F$1 = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }).apply(this, arguments);
  }
  __name(F$1, "F$1");
  var H$1 = /* @__PURE__ */ __name(function(e2, t2) {
    for (var n2 = [e2[0]], r2 = 0, a2 = t2.length; r2 < a2; r2 += 1) n2.push(t2[r2], e2[r2 + 1]);
    return n2;
  }, "H$1"), B$1 = /* @__PURE__ */ __name(function(e2) {
    return null !== e2 && "object" == typeof e2 && "[object Object]" === (e2.toString ? e2.toString() : Object.prototype.toString.call(e2)) && !(0, R$1.typeOf)(e2);
  }, "B$1"), q$1 = Object.freeze([]), U$1 = Object.freeze({});
  function W$1(e2) {
    return "function" == typeof e2;
  }
  __name(W$1, "W$1");
  function G$1(e2) {
    return e2.displayName || e2.name || "Component";
  }
  __name(G$1, "G$1");
  function V$1(e2) {
    return e2 && "string" == typeof e2.styledComponentId;
  }
  __name(V$1, "V$1");
  var Y$1 = "undefined" != typeof define_process_default$1 && void 0 !== define_process_default$1.env && (define_process_default$1.env.REACT_APP_SC_ATTR || define_process_default$1.env.SC_ATTR) || "data-styled", Z$1 = "undefined" != typeof window && "HTMLElement" in window, K$1 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof define_process_default$1 && void 0 !== define_process_default$1.env && (void 0 !== define_process_default$1.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_default$1.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_default$1.env.REACT_APP_SC_DISABLE_SPEEDY && define_process_default$1.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== define_process_default$1.env.SC_DISABLE_SPEEDY && "" !== define_process_default$1.env.SC_DISABLE_SPEEDY && "false" !== define_process_default$1.env.SC_DISABLE_SPEEDY && define_process_default$1.env.SC_DISABLE_SPEEDY));
  function X$1(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : ""));
  }
  __name(X$1, "X$1");
  var Q$1 = function() {
    function e2(e3) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.indexOfGroup = function(e3) {
      for (var t3 = 0, n2 = 0; n2 < e3; n2++) t3 += this.groupSizes[n2];
      return t3;
    }, t2.insertRules = function(e3, t3) {
      if (e3 >= this.groupSizes.length) {
        for (var n2 = this.groupSizes, r2 = n2.length, a2 = r2; e3 >= a2; ) (a2 <<= 1) < 0 && X$1(16, "" + e3);
        this.groupSizes = new Uint32Array(a2), this.groupSizes.set(n2), this.length = a2;
        for (var o2 = r2; o2 < a2; o2++) this.groupSizes[o2] = 0;
      }
      for (var i2 = this.indexOfGroup(e3 + 1), l2 = 0, s2 = t3.length; l2 < s2; l2++) this.tag.insertRule(i2, t3[l2]) && (this.groupSizes[e3]++, i2++);
    }, t2.clearGroup = function(e3) {
      if (e3 < this.length) {
        var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
        this.groupSizes[e3] = 0;
        for (var a2 = n2; a2 < r2; a2++) this.tag.deleteRule(n2);
      }
    }, t2.getGroup = function(e3) {
      var t3 = "";
      if (e3 >= this.length || 0 === this.groupSizes[e3]) return t3;
      for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), a2 = r2 + n2, o2 = r2; o2 < a2; o2++) t3 += this.tag.getRule(o2) + "/*!sc*/\n";
      return t3;
    }, e2;
  }(), J$1 = /* @__PURE__ */ new Map(), ee$1 = /* @__PURE__ */ new Map(), te$1 = 1, ne$1 = /* @__PURE__ */ __name(function(e2) {
    if (J$1.has(e2)) return J$1.get(e2);
    for (; ee$1.has(te$1); ) te$1++;
    var t2 = te$1++;
    return J$1.set(e2, t2), ee$1.set(t2, e2), t2;
  }, "ne$1"), re$1 = /* @__PURE__ */ __name(function(e2) {
    return ee$1.get(e2);
  }, "re$1"), ae$1 = /* @__PURE__ */ __name(function(e2, t2) {
    t2 >= te$1 && (te$1 = t2 + 1), J$1.set(e2, t2), ee$1.set(t2, e2);
  }, "ae$1"), oe$1 = "style[" + Y$1 + '][data-styled-version="5.3.11"]', ie$1 = new RegExp("^" + Y$1 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), le$1 = /* @__PURE__ */ __name(function(e2, t2, n2) {
    for (var r2, a2 = n2.split(","), o2 = 0, i2 = a2.length; o2 < i2; o2++) (r2 = a2[o2]) && e2.registerName(t2, r2);
  }, "le$1"), se$1 = /* @__PURE__ */ __name(function(e2, t2) {
    for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], a2 = 0, o2 = n2.length; a2 < o2; a2++) {
      var i2 = n2[a2].trim();
      if (i2) {
        var l2 = i2.match(ie$1);
        if (l2) {
          var s2 = 0 | parseInt(l2[1], 10), c2 = l2[2];
          0 !== s2 && (ae$1(c2, s2), le$1(e2, c2, l2[3]), e2.getTag().insertRules(s2, r2)), r2.length = 0;
        } else r2.push(i2);
      }
    }
  }, "se$1"), ce$1 = /* @__PURE__ */ __name(function() {
    return a.nc;
  }, "ce$1"), de$1 = /* @__PURE__ */ __name(function(e2) {
    var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), a2 = function(e3) {
      for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
        var r3 = t3[n3];
        if (r3 && 1 === r3.nodeType && r3.hasAttribute(Y$1)) return r3;
      }
    }(n2), o2 = void 0 !== a2 ? a2.nextSibling : null;
    r2.setAttribute(Y$1, "active"), r2.setAttribute("data-styled-version", "5.3.11");
    var i2 = ce$1();
    return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, o2), r2;
  }, "de$1"), ue = function() {
    function e2(e3) {
      var t3 = this.element = de$1(e3);
      t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
        if (e4.sheet) return e4.sheet;
        for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
          var a2 = t4[n2];
          if (a2.ownerNode === e4) return a2;
        }
        X$1(17);
      }(t3), this.length = 0;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.insertRule = function(e3, t3) {
      try {
        return this.sheet.insertRule(t3, e3), this.length++, true;
      } catch (e4) {
        return false;
      }
    }, t2.deleteRule = function(e3) {
      this.sheet.deleteRule(e3), this.length--;
    }, t2.getRule = function(e3) {
      var t3 = this.sheet.cssRules[e3];
      return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
    }, e2;
  }(), fe$1 = function() {
    function e2(e3) {
      var t3 = this.element = de$1(e3);
      this.nodes = t3.childNodes, this.length = 0;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.insertRule = function(e3, t3) {
      if (e3 <= this.length && e3 >= 0) {
        var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
        return this.element.insertBefore(n2, r2 || null), this.length++, true;
      }
      return false;
    }, t2.deleteRule = function(e3) {
      this.element.removeChild(this.nodes[e3]), this.length--;
    }, t2.getRule = function(e3) {
      return e3 < this.length ? this.nodes[e3].textContent : "";
    }, e2;
  }(), me = function() {
    function e2(e3) {
      this.rules = [], this.length = 0;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.insertRule = function(e3, t3) {
      return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
    }, t2.deleteRule = function(e3) {
      this.rules.splice(e3, 1), this.length--;
    }, t2.getRule = function(e3) {
      return e3 < this.length ? this.rules[e3] : "";
    }, e2;
  }(), pe$1 = Z$1, he$1 = { isServer: !Z$1, useCSSOMInjection: !K$1 }, ge$1 = function() {
    function e2(e3, t3, n2) {
      void 0 === e3 && (e3 = U$1), void 0 === t3 && (t3 = {}), this.options = F$1({}, he$1, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && Z$1 && pe$1 && (pe$1 = false, function(e4) {
        for (var t4 = document.querySelectorAll(oe$1), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
          var a2 = t4[n3];
          a2 && "active" !== a2.getAttribute(Y$1) && (se$1(e4, a2), a2.parentNode && a2.parentNode.removeChild(a2));
        }
      }(this));
    }
    __name(e2, "e2");
    e2.registerId = function(e3) {
      return ne$1(e3);
    };
    var t2 = e2.prototype;
    return t2.reconstructWithOptions = function(t3, n2) {
      return void 0 === n2 && (n2 = true), new e2(F$1({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
    }, t2.allocateGSInstance = function(e3) {
      return this.gs[e3] = (this.gs[e3] || 0) + 1;
    }, t2.getTag = function() {
      return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, a2 = t3.target, e3 = n2 ? new me(a2) : r2 ? new ue(a2) : new fe$1(a2), new Q$1(e3)));
      var e3, t3, n2, r2, a2;
    }, t2.hasNameForId = function(e3, t3) {
      return this.names.has(e3) && this.names.get(e3).has(t3);
    }, t2.registerName = function(e3, t3) {
      if (ne$1(e3), this.names.has(e3)) this.names.get(e3).add(t3);
      else {
        var n2 = /* @__PURE__ */ new Set();
        n2.add(t3), this.names.set(e3, n2);
      }
    }, t2.insertRules = function(e3, t3, n2) {
      this.registerName(e3, t3), this.getTag().insertRules(ne$1(e3), n2);
    }, t2.clearNames = function(e3) {
      this.names.has(e3) && this.names.get(e3).clear();
    }, t2.clearRules = function(e3) {
      this.getTag().clearGroup(ne$1(e3)), this.clearNames(e3);
    }, t2.clearTag = function() {
      this.tag = void 0;
    }, t2.toString = function() {
      return function(e3) {
        for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", a2 = 0; a2 < n2; a2++) {
          var o2 = re$1(a2);
          if (void 0 !== o2) {
            var i2 = e3.names.get(o2), l2 = t3.getGroup(a2);
            if (i2 && l2 && i2.size) {
              var s2 = Y$1 + ".g" + a2 + '[id="' + o2 + '"]', c2 = "";
              void 0 !== i2 && i2.forEach(function(e4) {
                e4.length > 0 && (c2 += e4 + ",");
              }), r2 += "" + l2 + s2 + '{content:"' + c2 + '"}/*!sc*/\n';
            }
          }
        }
        return r2;
      }(this);
    }, e2;
  }(), ye$1 = /(a)(d)/gi, be$1 = /* @__PURE__ */ __name(function(e2) {
    return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
  }, "be$1");
  function ve$1(e2) {
    var t2, n2 = "";
    for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = be$1(t2 % 52) + n2;
    return (be$1(t2 % 52) + n2).replace(ye$1, "$1-$2");
  }
  __name(ve$1, "ve$1");
  var ke$1 = /* @__PURE__ */ __name(function(e2, t2) {
    for (var n2 = t2.length; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
    return e2;
  }, "ke$1"), we$1 = /* @__PURE__ */ __name(function(e2) {
    return ke$1(5381, e2);
  }, "we$1");
  function Ee$1(e2) {
    for (var t2 = 0; t2 < e2.length; t2 += 1) {
      var n2 = e2[t2];
      if (W$1(n2) && !V$1(n2)) return false;
    }
    return true;
  }
  __name(Ee$1, "Ee$1");
  var Ce$1 = we$1("5.3.11"), Se$1 = function() {
    function e2(e3, t2, n2) {
      this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && Ee$1(e3), this.componentId = t2, this.baseHash = ke$1(Ce$1, t2), this.baseStyle = n2, ge$1.registerId(t2);
    }
    __name(e2, "e2");
    return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
      var r2 = this.componentId, a2 = [];
      if (this.baseStyle && a2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash) if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId)) a2.push(this.staticRulesId);
      else {
        var o2 = He$1(this.rules, e3, t2, n2).join(""), i2 = ve$1(ke$1(this.baseHash, o2) >>> 0);
        if (!t2.hasNameForId(r2, i2)) {
          var l2 = n2(o2, "." + i2, void 0, r2);
          t2.insertRules(r2, i2, l2);
        }
        a2.push(i2), this.staticRulesId = i2;
      }
      else {
        for (var s2 = this.rules.length, c2 = ke$1(this.baseHash, n2.hash), d2 = "", u2 = 0; u2 < s2; u2++) {
          var f2 = this.rules[u2];
          if ("string" == typeof f2) d2 += f2;
          else if (f2) {
            var m2 = He$1(f2, e3, t2, n2), p2 = Array.isArray(m2) ? m2.join("") : m2;
            c2 = ke$1(c2, p2 + u2), d2 += p2;
          }
        }
        if (d2) {
          var h2 = ve$1(c2 >>> 0);
          if (!t2.hasNameForId(r2, h2)) {
            var g2 = n2(d2, "." + h2, void 0, r2);
            t2.insertRules(r2, h2, g2);
          }
          a2.push(h2);
        }
      }
      return a2.join(" ");
    }, e2;
  }(), xe$1 = /^\s*\/\/.*$/gm, Ne$1 = [":", "[", ".", "#"];
  function Te$1(e2) {
    var t2, n2, r2, a2, o2 = U$1, i2 = o2.options, l2 = void 0 === i2 ? U$1 : i2, s2 = o2.plugins, c2 = void 0 === s2 ? q$1 : s2, d2 = new P$1(l2), u2 = [], f2 = /* @__PURE__ */ function(e3) {
      function t3(t4) {
        if (t4) try {
          e3(t4 + "}");
        } catch (e4) {
        }
      }
      __name(t3, "t3");
      return function(n3, r3, a3, o3, i3, l3, s3, c3, d3, u3) {
        switch (n3) {
          case 1:
            if (0 === d3 && 64 === r3.charCodeAt(0)) return e3(r3 + ";"), "";
            break;
          case 2:
            if (0 === c3) return r3 + "/*|*/";
            break;
          case 3:
            switch (c3) {
              case 102:
              case 112:
                return e3(a3[0] + r3), "";
              default:
                return r3 + (0 === u3 ? "/*|*/" : "");
            }
          case -2:
            r3.split("/*|*/}").forEach(t3);
        }
      };
    }(function(e3) {
      u2.push(e3);
    }), m2 = /* @__PURE__ */ __name(function(e3, r3, o3) {
      return 0 === r3 && -1 !== Ne$1.indexOf(o3[n2.length]) || o3.match(a2) ? e3 : "." + t2;
    }, "m2");
    function p2(e3, o3, i3, l3) {
      void 0 === l3 && (l3 = "&");
      var s3 = e3.replace(xe$1, ""), c3 = o3 && i3 ? i3 + " " + o3 + " { " + s3 + " }" : s3;
      return t2 = l3, n2 = o3, r2 = new RegExp("\\" + n2 + "\\b", "g"), a2 = new RegExp("(\\" + n2 + "\\b){2,}"), d2(i3 || !o3 ? "" : o3, c3);
    }
    __name(p2, "p2");
    return d2.use([].concat(c2, [function(e3, t3, a3) {
      2 === e3 && a3.length && a3[0].lastIndexOf(n2) > 0 && (a3[0] = a3[0].replace(r2, m2));
    }, f2, function(e3) {
      if (-2 === e3) {
        var t3 = u2;
        return u2 = [], t3;
      }
    }])), p2.hash = c2.length ? c2.reduce(function(e3, t3) {
      return t3.name || X$1(15), ke$1(e3, t3.name);
    }, 5381).toString() : "", p2;
  }
  __name(Te$1, "Te$1");
  var Oe$1 = s.default.createContext(), Ae$1 = (Oe$1.Consumer, s.default.createContext()), Re$1 = (Ae$1.Consumer, new ge$1()), Le = Te$1();
  function Ie$1() {
    return (0, s.useContext)(Oe$1) || Re$1;
  }
  __name(Ie$1, "Ie$1");
  var _e$1 = function() {
    function e2(e3, t2) {
      var n2 = this;
      this.inject = function(e4, t3) {
        void 0 === t3 && (t3 = Le);
        var r2 = n2.name + t3.hash;
        e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
      }, this.toString = function() {
        return X$1(12, String(n2.name));
      }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
    }
    __name(e2, "e2");
    return e2.prototype.getName = function(e3) {
      return void 0 === e3 && (e3 = Le), this.name + e3.hash;
    }, e2;
  }(), Me$1 = /([A-Z])/, ze$1 = /([A-Z])/g, De$1 = /^ms-/, je$1 = /* @__PURE__ */ __name(function(e2) {
    return "-" + e2.toLowerCase();
  }, "je$1");
  function $e$1(e2) {
    return Me$1.test(e2) ? e2.replace(ze$1, je$1).replace(De$1, "-ms-") : e2;
  }
  __name($e$1, "$e$1");
  var Fe$1 = /* @__PURE__ */ __name(function(e2) {
    return null == e2 || false === e2 || "" === e2;
  }, "Fe$1");
  function He$1(e2, t2, n2, r2) {
    if (Array.isArray(e2)) {
      for (var a2, o2 = [], i2 = 0, l2 = e2.length; i2 < l2; i2 += 1) "" !== (a2 = He$1(e2[i2], t2, n2, r2)) && (Array.isArray(a2) ? o2.push.apply(o2, a2) : o2.push(a2));
      return o2;
    }
    return Fe$1(e2) ? "" : V$1(e2) ? "." + e2.styledComponentId : W$1(e2) ? "function" != typeof (s2 = e2) || s2.prototype && s2.prototype.isReactComponent || !t2 ? e2 : He$1(e2(t2), t2, n2, r2) : e2 instanceof _e$1 ? n2 ? (e2.inject(n2, r2), e2.getName(r2)) : e2 : B$1(e2) ? (/* @__PURE__ */ __name(function e3(t3, n3) {
      var r3, a3, o3 = [];
      for (var i3 in t3) t3.hasOwnProperty(i3) && !Fe$1(t3[i3]) && (Array.isArray(t3[i3]) && t3[i3].isCss || W$1(t3[i3]) ? o3.push($e$1(i3) + ":", t3[i3], ";") : B$1(t3[i3]) ? o3.push.apply(o3, e3(t3[i3], i3)) : o3.push($e$1(i3) + ": " + (r3 = i3, (null == (a3 = t3[i3]) || "boolean" == typeof a3 || "" === a3 ? "" : "number" != typeof a3 || 0 === a3 || r3 in _$1 || r3.startsWith("--") ? String(a3).trim() : a3 + "px") + ";")));
      return n3 ? [n3 + " {"].concat(o3, ["}"]) : o3;
    }, "e3"))(e2) : e2.toString();
    var s2;
  }
  __name(He$1, "He$1");
  var Be$1 = /* @__PURE__ */ __name(function(e2) {
    return Array.isArray(e2) && (e2.isCss = true), e2;
  }, "Be$1");
  function qe$1(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    return W$1(e2) || B$1(e2) ? Be$1(He$1(H$1(q$1, [e2].concat(n2)))) : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0] ? e2 : Be$1(He$1(H$1(e2, n2)));
  }
  __name(qe$1, "qe$1");
  var Ue = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, We = /(^-|-$)/g;
  function Ge(e2) {
    return e2.replace(Ue, "-").replace(We, "");
  }
  __name(Ge, "Ge");
  function Ve$1(e2) {
    return "string" == typeof e2 && true;
  }
  __name(Ve$1, "Ve$1");
  var Ye$1 = /* @__PURE__ */ __name(function(e2) {
    return "function" == typeof e2 || "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
  }, "Ye$1"), Ze = /* @__PURE__ */ __name(function(e2) {
    return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
  }, "Ze");
  function Ke(e2, t2, n2) {
    var r2 = e2[n2];
    Ye$1(t2) && Ye$1(r2) ? Xe(r2, t2) : e2[n2] = t2;
  }
  __name(Ke, "Ke");
  function Xe(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    for (var a2 = 0, o2 = n2; a2 < o2.length; a2++) {
      var i2 = o2[a2];
      if (Ye$1(i2)) for (var l2 in i2) Ze(l2) && Ke(e2, i2[l2], l2);
    }
    return e2;
  }
  __name(Xe, "Xe");
  var Qe = s.default.createContext();
  Qe.Consumer;
  var Je = {};
  function et(e2, t2, n2) {
    var r2 = V$1(e2), a2 = !Ve$1(e2), o2 = t2.attrs, i2 = void 0 === o2 ? q$1 : o2, l2 = t2.componentId, c2 = void 0 === l2 ? function(e3, t3) {
      var n3 = "string" != typeof e3 ? "sc" : Ge(e3);
      Je[n3] = (Je[n3] || 0) + 1;
      var r3 = n3 + "-" + function(e4) {
        return ve$1(we$1(e4) >>> 0);
      }("5.3.11" + n3 + Je[n3]);
      return t3 ? t3 + "-" + r3 : r3;
    }(t2.displayName, t2.parentComponentId) : l2, d2 = t2.displayName, u2 = void 0 === d2 ? function(e3) {
      return Ve$1(e3) ? "styled." + e3 : "Styled(" + G$1(e3) + ")";
    }(e2) : d2, f2 = t2.displayName && t2.componentId ? Ge(t2.displayName) + "-" + t2.componentId : t2.componentId || c2, m2 = r2 && e2.attrs ? Array.prototype.concat(e2.attrs, i2).filter(Boolean) : i2, p2 = t2.shouldForwardProp;
    r2 && e2.shouldForwardProp && (p2 = t2.shouldForwardProp ? function(n3, r3, a3) {
      return e2.shouldForwardProp(n3, r3, a3) && t2.shouldForwardProp(n3, r3, a3);
    } : e2.shouldForwardProp);
    var h2, g2 = new Se$1(n2, f2, r2 ? e2.componentStyle : void 0), y2 = g2.isStatic && 0 === i2.length, b2 = /* @__PURE__ */ __name(function(e3, t3) {
      return function(e4, t4, n3, r3) {
        var a3 = e4.attrs, o3 = e4.componentStyle, i3 = e4.defaultProps, l3 = e4.foldedComponentIds, c3 = e4.shouldForwardProp, d3 = e4.styledComponentId, u3 = e4.target, f3 = function(e5, t5, n4) {
          void 0 === e5 && (e5 = U$1);
          var r4 = F$1({}, t5, { theme: e5 }), a4 = {};
          return n4.forEach(function(e6) {
            var t6, n5, o4, i4 = e6;
            for (t6 in W$1(i4) && (i4 = i4(r4)), i4) r4[t6] = a4[t6] = "className" === t6 ? (n5 = a4[t6], o4 = i4[t6], n5 && o4 ? n5 + " " + o4 : n5 || o4) : i4[t6];
          }), [r4, a4];
        }(function(e5, t5, n4) {
          return void 0 === n4 && (n4 = U$1), e5.theme !== n4.theme && e5.theme || t5 || n4.theme;
        }(t4, (0, s.useContext)(Qe), i3) || U$1, t4, a3), m3 = f3[0], p3 = f3[1], h3 = function(e5, t5, n4) {
          var r4 = Ie$1(), a4 = (0, s.useContext)(Ae$1) || Le;
          return t5 ? e5.generateAndInjectStyles(U$1, r4, a4) : e5.generateAndInjectStyles(n4, r4, a4);
        }(o3, r3, m3), g3 = n3, y3 = p3.$as || t4.$as || p3.as || t4.as || u3, b3 = Ve$1(y3), v2 = p3 !== t4 ? F$1({}, t4, {}, p3) : t4, k2 = {};
        for (var w2 in v2) "$" !== w2[0] && "as" !== w2 && ("forwardedAs" === w2 ? k2.as = v2[w2] : (c3 ? c3(w2, D$1, y3) : !b3 || D$1(w2)) && (k2[w2] = v2[w2]));
        return t4.style && p3.style !== t4.style && (k2.style = F$1({}, t4.style, {}, p3.style)), k2.className = Array.prototype.concat(l3, d3, h3 !== d3 ? h3 : null, t4.className, p3.className).filter(Boolean).join(" "), k2.ref = g3, (0, s.createElement)(y3, k2);
      }(h2, e3, t3, y2);
    }, "b2");
    return b2.displayName = u2, (h2 = s.default.forwardRef(b2)).attrs = m2, h2.componentStyle = g2, h2.displayName = u2, h2.shouldForwardProp = p2, h2.foldedComponentIds = r2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : q$1, h2.styledComponentId = f2, h2.target = r2 ? e2.target : e2, h2.withComponent = function(e3) {
      var r3 = t2.componentId, a3 = function(e4, t3) {
        if (null == e4) return {};
        var n3, r4, a4 = {}, o4 = Object.keys(e4);
        for (r4 = 0; r4 < o4.length; r4++) n3 = o4[r4], t3.indexOf(n3) >= 0 || (a4[n3] = e4[n3]);
        return a4;
      }(t2, ["componentId"]), o3 = r3 && r3 + "-" + (Ve$1(e3) ? e3 : Ge(G$1(e3)));
      return et(e3, F$1({}, a3, { attrs: m2, componentId: o3 }), n2);
    }, Object.defineProperty(h2, "defaultProps", { get: /* @__PURE__ */ __name(function() {
      return this._foldedDefaultProps;
    }, "get"), set: /* @__PURE__ */ __name(function(t3) {
      this._foldedDefaultProps = r2 ? Xe({}, e2.defaultProps, t3) : t3;
    }, "set") }), Object.defineProperty(h2, "toString", { value: /* @__PURE__ */ __name(function() {
      return "." + h2.styledComponentId;
    }, "value") }), a2 && $$1()(h2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), h2;
  }
  __name(et, "et");
  var tt, nt = /* @__PURE__ */ __name(function(e2) {
    return (/* @__PURE__ */ __name(function e3(t2, n2, r2) {
      if (void 0 === r2 && (r2 = U$1), !(0, R$1.isValidElementType)(n2)) return X$1(1, String(n2));
      var a2 = /* @__PURE__ */ __name(function() {
        return t2(n2, r2, qe$1.apply(void 0, arguments));
      }, "a2");
      return a2.withConfig = function(a3) {
        return e3(t2, n2, F$1({}, r2, {}, a3));
      }, a2.attrs = function(a3) {
        return e3(t2, n2, F$1({}, r2, { attrs: Array.prototype.concat(r2.attrs, a3).filter(Boolean) }));
      }, a2;
    }, "e3"))(et, e2);
  }, "nt");
  ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
    nt[e2] = nt(e2);
  }), (tt = (function(e2, t2) {
    this.rules = e2, this.componentId = t2, this.isStatic = Ee$1(e2), ge$1.registerId(this.componentId + 1);
  }).prototype).createStyles = function(e2, t2, n2, r2) {
    var a2 = r2(He$1(this.rules, t2, n2, r2).join(""), ""), o2 = this.componentId + e2;
    n2.insertRules(o2, o2, a2);
  }, tt.removeStyles = function(e2, t2) {
    t2.clearRules(this.componentId + e2);
  }, tt.renderStyles = function(e2, t2, n2, r2) {
    e2 > 2 && ge$1.registerId(this.componentId + e2), this.removeStyles(e2, n2), this.createStyles(e2, t2, n2, r2);
  };
  const rt = nt, at = rt.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: e2 }) => e2 ? "112px" : "142px"};
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
`, ot = "On This Page", it = { event: "collapse", name: "onclick", type: "click", text: ot }, lt = /* @__PURE__ */ __name(({ items: e2, firstElementId: t2, focusFirstFocusableElement: n2 = false }) => {
    const r2 = (0, s.useRef)(null), a2 = function(e3) {
      const [t3, n3] = (0, s.useState)(false);
      return (0, s.useEffect)(() => {
        const r3 = window.matchMedia(e3);
        r3.matches !== t3 && n3(r3.matches);
        const a3 = /* @__PURE__ */ __name(() => {
          n3(r3.matches);
        }, "a3");
        return r3.addEventListener("change", a3), () => r3.removeEventListener("change", a3);
      }, [t3, e3]), t3;
    }("(max-width: 991px)"), [o2, i2] = (0, s.useState)({ hasHeader: false, hasAltMenuSpacing: false, containerClass: "container-xl", activeContainer: "", showMenu: false, sticky: false }), l2 = a2 ? 110 : 142, c2 = /* @__PURE__ */ __name(() => {
      var _a;
      const n3 = {}, a3 = window.scrollY, s2 = (_a = document.getElementById(t2)) == null ? void 0 : _a.getBoundingClientRect().top;
      s2 >= 0 && (n3.sticky = false, n3.activeContainer = ""), a3 > r2.current.getBoundingClientRect().top && (n3.sticky = true);
      const c3 = o2.hasHeader ? l2 + 103 : 103;
      e2 == null ? void 0 : e2.forEach(({ targetIdName: e3 }) => {
        const t3 = document.getElementById(e3), r3 = (t3 == null ? void 0 : t3.getBoundingClientRect().top) - c3, a4 = (t3 == null ? void 0 : t3.getBoundingClientRect().bottom) - c3;
        r3 < 0 && a4 > 0 && (n3.activeContainer = e3);
      }), i2((e3) => ({ ...e3, ...n3 }));
    }, "c2"), d2 = /* @__PURE__ */ __name(() => {
      var e3;
      e3 = c2, y$1 || (y$1 = true, setTimeout(() => {
        e3(), y$1 = false;
      }, 150)), ((e4) => {
        window.clearTimeout(g$1), g$1 = window.setTimeout(e4, 150);
      })(c2);
    }, "d2");
    function u2(e3 = null) {
      if (null === e3) return o2.containerClass;
      const t3 = Object.values(e3.classList).filter((e4) => ["container-sm", "container-md", "container", "container-lg", "container-xl", "container-fluid"].includes(e4));
      return t3.length > 0 ? t3.join(" ") : u2(e3.parentElement);
    }
    __name(u2, "u2");
    (0, s.useEffect)(() => {
      const e3 = document.getElementById(t2) || null, n3 = { hasHeader: !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), hasAltMenuSpacing: !!document.getElementById("degreeDetailPageContainer"), containerClass: u2(e3) };
      i2((e4) => ({ ...e4, ...n3 }));
    }, []), (0, s.useEffect)(() => (window == null ? void 0 : window.addEventListener("scroll", d2), () => window.removeEventListener("scroll", d2)), [o2.hasHeader]);
    return (e2 == null ? void 0 : e2.length) > 0 && s.default.createElement(at, { requiresAltMenuSpacing: o2.hasAltMenuSpacing, ref: r2, className: C$1()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: o2.sticky, "with-header": o2.hasHeader }), style: o2.showMenu ? { borderBottom: 0 } : {} }, s.default.createElement("div", { className: `${o2.containerClass} uds-anchor-menu-wrapper` }, a2 ? s.default.createElement("button", { className: C$1()("mobile-menu-toggler", { "show-menu": o2.showMenu }), type: "button", onClick: /* @__PURE__ */ __name(() => {
      b$1({ ...it, action: o2.showMenu ? "close" : "open" }), i2((e3) => ({ ...e3, showMenu: !e3.showMenu }));
    }, "onClick"), "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, s.default.createElement("h4", null, ot, ":", s.default.createElement("i", { className: "fas fa-chevron-down" }))) : s.default.createElement("h4", null, ot, ":"), s.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: C$1()("card", "card-body", "collapse", { show: o2.showMenu }) }, s.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": ot }, e2 == null ? void 0 : e2.map((e3) => s.default.createElement(A, { "data-testid": `anchor-item-${e3.targetIdName}`, key: e3.targetIdName, classes: C$1()("nav-link", { active: o2.activeContainer === e3.targetIdName }).split(" "), ariaLabel: e3.text, label: e3.text, icon: e3.icon, onClick: /* @__PURE__ */ __name(() => ((e4) => {
      var _a, _b;
      const t3 = window.scrollY - (o2.hasHeader ? l2 + 100 : 100), i3 = a2 ? 410 : 90;
      let s2 = ((_a = document.getElementById(e4)) == null ? void 0 : _a.getBoundingClientRect().top) + t3;
      var c3;
      r2.current.classList.contains("sticky") || (s2 -= i3), n2 && ((_b = (c3 = `#${e4}`, (c3 ? document.querySelector(c3) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null ? void 0 : _b.focus()), window.scrollTo({ top: s2, behavior: "smooth" });
    })(e3.targetIdName), "onClick") }))))));
  }, "lt");
  lt.propTypes = { items: l().arrayOf(l().shape({ text: l().string.isRequired, targetIdName: l().string.isRequired, icon: l().arrayOf(l().string) })).isRequired, firstElementId: l().string.isRequired, focusFirstFocusableElement: l().bool };
  var st, ct = (st = /* @__PURE__ */ __name(function(e2, t2) {
    return st = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
      e3.__proto__ = t3;
    } || function(e3, t3) {
      for (var n2 in t3) Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
    }, st(e2, t2);
  }, "st"), function(e2, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Class extends value " + String(t2) + " is not a constructor or null");
    function n2() {
      this.constructor = e2;
    }
    __name(n2, "n2");
    st(e2, t2), e2.prototype = null === t2 ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
  }), dt = function(e2) {
    function t2(t3) {
      var n2 = e2.call(this, t3) || this;
      return n2.name = "AssertionError", n2;
    }
    __name(t2, "t2");
    return ct(t2, e2), t2;
  }(Error);
  function ut(e2, t2) {
    if (!e2) throw new dt(t2);
  }
  __name(ut, "ut");
  function ft(e2) {
    var t2 = Object.entries(e2).filter(function(e3) {
      return null != e3[1];
    }).map(function(e3) {
      var t3 = e3[0], n2 = e3[1];
      return "".concat(encodeURIComponent(t3), "=").concat(encodeURIComponent(String(n2)));
    });
    return t2.length > 0 ? "?".concat(t2.join("&")) : "";
  }
  __name(ft, "ft");
  var mt = /* @__PURE__ */ function() {
    var e2 = /* @__PURE__ */ __name(function(t2, n2) {
      return e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
        e3.__proto__ = t3;
      } || function(e3, t3) {
        for (var n3 in t3) Object.prototype.hasOwnProperty.call(t3, n3) && (e3[n3] = t3[n3]);
      }, e2(t2, n2);
    }, "e2");
    return function(t2, n2) {
      if ("function" != typeof n2 && null !== n2) throw new TypeError("Class extends value " + String(n2) + " is not a constructor or null");
      function r2() {
        this.constructor = t2;
      }
      __name(r2, "r2");
      e2(t2, n2), t2.prototype = null === n2 ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
    };
  }(), pt = /* @__PURE__ */ __name(function() {
    return pt = Object.assign || function(e2) {
      for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var a2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
      return e2;
    }, pt.apply(this, arguments);
  }, "pt"), ht = /* @__PURE__ */ __name(function(e2, t2) {
    var n2 = {};
    for (var r2 in e2) Object.prototype.hasOwnProperty.call(e2, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e2[r2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var a2 = 0;
      for (r2 = Object.getOwnPropertySymbols(e2); a2 < r2.length; a2++) t2.indexOf(r2[a2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[a2]) && (n2[r2[a2]] = e2[r2[a2]]);
    }
    return n2;
  }, "ht");
  const gt = function(e2) {
    function t2() {
      var t3 = null !== e2 && e2.apply(this, arguments) || this;
      return t3.openShareDialog = function(e3) {
        var n2, r2, a2 = t3.props, o2 = a2.onShareWindowClose, i2 = a2.windowHeight, l2 = void 0 === i2 ? 400 : i2, s2 = a2.windowPosition, c2 = void 0 === s2 ? "windowCenter" : s2, d2 = a2.windowWidth, u2 = void 0 === d2 ? 550 : d2;
        !function(e4, t4, n3) {
          var r3 = t4.height, a3 = t4.width, o3 = ht(t4, ["height", "width"]), i3 = pt({ height: r3, width: a3, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, o3), l3 = window.open(e4, "", Object.keys(i3).map(function(e5) {
            return "".concat(e5, "=").concat(i3[e5]);
          }).join(", "));
          if (n3) var s3 = window.setInterval(function() {
            try {
              (null === l3 || l3.closed) && (window.clearInterval(s3), n3(l3));
            } catch (e5) {
              console.error(e5);
            }
          }, 1e3);
        }(e3, pt({ height: l2, width: u2 }, "windowCenter" === c2 ? (n2 = u2, r2 = l2, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - n2 / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - r2 / 2 }) : function(e4, t4) {
          return { top: (window.screen.height - t4) / 2, left: (window.screen.width - e4) / 2 };
        }(u2, l2)), o2);
      }, t3.handleClick = function(e3) {
        return n2 = t3, r2 = void 0, o2 = /* @__PURE__ */ __name(function() {
          var t4, n3, r3, a3, o3, i2, l2, s2, c2, d2;
          return function(e4, t5) {
            var n4, r4, a4, o4, i3 = { label: 0, sent: /* @__PURE__ */ __name(function() {
              if (1 & a4[0]) throw a4[1];
              return a4[1];
            }, "sent"), trys: [], ops: [] };
            return o4 = { next: l3(0), throw: l3(1), return: l3(2) }, "function" == typeof Symbol && (o4[Symbol.iterator] = function() {
              return this;
            }), o4;
            function l3(o5) {
              return function(l4) {
                return function(o6) {
                  if (n4) throw new TypeError("Generator is already executing.");
                  for (; i3; ) try {
                    if (n4 = 1, r4 && (a4 = 2 & o6[0] ? r4.return : o6[0] ? r4.throw || ((a4 = r4.return) && a4.call(r4), 0) : r4.next) && !(a4 = a4.call(r4, o6[1])).done) return a4;
                    switch (r4 = 0, a4 && (o6 = [2 & o6[0], a4.value]), o6[0]) {
                      case 0:
                      case 1:
                        a4 = o6;
                        break;
                      case 4:
                        return i3.label++, { value: o6[1], done: false };
                      case 5:
                        i3.label++, r4 = o6[1], o6 = [0];
                        continue;
                      case 7:
                        o6 = i3.ops.pop(), i3.trys.pop();
                        continue;
                      default:
                        if (!((a4 = (a4 = i3.trys).length > 0 && a4[a4.length - 1]) || 6 !== o6[0] && 2 !== o6[0])) {
                          i3 = 0;
                          continue;
                        }
                        if (3 === o6[0] && (!a4 || o6[1] > a4[0] && o6[1] < a4[3])) {
                          i3.label = o6[1];
                          break;
                        }
                        if (6 === o6[0] && i3.label < a4[1]) {
                          i3.label = a4[1], a4 = o6;
                          break;
                        }
                        if (a4 && i3.label < a4[2]) {
                          i3.label = a4[2], i3.ops.push(o6);
                          break;
                        }
                        a4[2] && i3.ops.pop(), i3.trys.pop();
                        continue;
                    }
                    o6 = t5.call(e4, i3);
                  } catch (e5) {
                    o6 = [6, e5], r4 = 0;
                  } finally {
                    n4 = a4 = 0;
                  }
                  if (5 & o6[0]) throw o6[1];
                  return { value: o6[0] ? o6[1] : void 0, done: true };
                }([o5, l4]);
              };
            }
            __name(l3, "l3");
          }(this, function(u2) {
            switch (u2.label) {
              case 0:
                return t4 = this.props, n3 = t4.beforeOnClick, r3 = t4.disabled, a3 = t4.networkLink, o3 = t4.onClick, i2 = t4.url, l2 = t4.openShareDialogOnClick, s2 = t4.opts, c2 = a3(i2, s2), r3 ? [2] : (e3.preventDefault(), n3 ? !(f2 = d2 = n3()) || "object" != typeof f2 && "function" != typeof f2 || "function" != typeof f2.then ? [3, 2] : [4, d2] : [3, 2]);
              case 1:
                u2.sent(), u2.label = 2;
              case 2:
                return l2 && this.openShareDialog(c2), o3 && o3(e3, c2), [2];
            }
            var f2;
          });
        }, "o2"), new ((a2 = void 0) || (a2 = Promise))(function(e4, t4) {
          function i2(e5) {
            try {
              s2(o2.next(e5));
            } catch (e6) {
              t4(e6);
            }
          }
          __name(i2, "i2");
          function l2(e5) {
            try {
              s2(o2.throw(e5));
            } catch (e6) {
              t4(e6);
            }
          }
          __name(l2, "l2");
          function s2(t5) {
            var n3;
            t5.done ? e4(t5.value) : (n3 = t5.value, n3 instanceof a2 ? n3 : new a2(function(e5) {
              e5(n3);
            })).then(i2, l2);
          }
          __name(s2, "s2");
          s2((o2 = o2.apply(n2, r2 || [])).next());
        });
        var n2, r2, a2, o2;
      }, t3;
    }
    __name(t2, "t2");
    return mt(t2, e2), t2.prototype.render = function() {
      var e3 = this.props, t3 = (e3.beforeOnClick, e3.children), n2 = e3.className, r2 = e3.disabled, a2 = e3.disabledStyle, o2 = e3.forwardedRef, i2 = (e3.networkLink, e3.networkName), l2 = (e3.onShareWindowClose, e3.openShareDialogOnClick, e3.opts, e3.resetButtonStyle), c2 = e3.style, d2 = (e3.url, e3.windowHeight, e3.windowPosition, e3.windowWidth, ht(e3, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), u2 = C$1()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!r2, disabled: !!r2 }, n2), f2 = pt(pt(l2 ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, c2), r2 && a2);
      return s.default.createElement("button", pt({}, d2, { "aria-label": d2["aria-label"] || i2, className: u2, onClick: this.handleClick, ref: o2, style: f2 }), t3);
    }, t2.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: true, resetButtonStyle: true }, t2;
  }(s.Component);
  var yt = /* @__PURE__ */ __name(function() {
    return yt = Object.assign || function(e2) {
      for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var a2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
      return e2;
    }, yt.apply(this, arguments);
  }, "yt");
  const bt = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
    function a2(a3, o2) {
      var i2 = n2(a3), l2 = yt({}, a3);
      return Object.keys(i2).forEach(function(e3) {
        delete l2[e3];
      }), s.default.createElement(gt, yt({}, r2, l2, { forwardedRef: o2, networkName: e2, networkLink: t2, opts: n2(a3) }));
    }
    __name(a2, "a2");
    return a2.displayName = "ShareButton-".concat(e2), (0, s.forwardRef)(a2);
  }, "bt"), vt = bt("facebook", function(e2, t2) {
    var n2 = t2.quote, r2 = t2.hashtag;
    return ut(e2, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ft({ u: e2, quote: n2, hashtag: r2 });
  }, function(e2) {
    return { quote: e2.quote, hashtag: e2.hashtag };
  }, { windowWidth: 550, windowHeight: 400 });
  var kt = /* @__PURE__ */ __name(function() {
    return kt = Object.assign || function(e2) {
      for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var a2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
      return e2;
    }, kt.apply(this, arguments);
  }, "kt");
  function wt(e2) {
    var t2 = /* @__PURE__ */ __name(function(t3) {
      var n2 = t3.bgStyle, r2 = t3.borderRadius, a2 = t3.iconFillColor, o2 = t3.round, i2 = t3.size, l2 = function(e3, t4) {
        var n3 = {};
        for (var r3 in e3) Object.prototype.hasOwnProperty.call(e3, r3) && t4.indexOf(r3) < 0 && (n3[r3] = e3[r3]);
        if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
          var a3 = 0;
          for (r3 = Object.getOwnPropertySymbols(e3); a3 < r3.length; a3++) t4.indexOf(r3[a3]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, r3[a3]) && (n3[r3[a3]] = e3[r3[a3]]);
        }
        return n3;
      }(t3, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
      return s.default.createElement("svg", kt({ viewBox: "0 0 64 64", width: i2, height: i2 }, l2), o2 ? s.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e2.color, style: n2 }) : s.default.createElement("rect", { width: "64", height: "64", rx: r2, ry: r2, fill: e2.color, style: n2 }), s.default.createElement("path", { d: e2.path, fill: a2 }));
    }, "t2");
    return t2.defaultProps = { bgStyle: {}, borderRadius: 0, iconFillColor: "white", size: 64 }, t2;
  }
  __name(wt, "wt");
  const Et = wt({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), Ct = bt("twitter", function(e2, t2) {
    var n2 = t2.title, r2 = t2.via, a2 = t2.hashtags, o2 = void 0 === a2 ? [] : a2, i2 = t2.related, l2 = void 0 === i2 ? [] : i2;
    return ut(e2, "twitter.url"), ut(Array.isArray(o2), "twitter.hashtags is not an array"), ut(Array.isArray(l2), "twitter.related is not an array"), "https://twitter.com/share" + ft({ url: e2, text: n2, via: r2, hashtags: o2.length > 0 ? o2.join(",") : void 0, related: l2.length > 0 ? l2.join(",") : void 0 });
  }, function(e2) {
    return { hashtags: e2.hashtags, title: e2.title, via: e2.via, related: e2.related };
  }, { windowWidth: 550, windowHeight: 400 }), St = wt({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), xt = bt("email", function(e2, t2) {
    var n2 = t2.subject, r2 = t2.body, a2 = t2.separator;
    return "mailto:" + ft({ subject: n2, body: r2 ? r2 + a2 + e2 : e2 });
  }, function(e2) {
    return { subject: e2.subject, body: e2.body, separator: e2.separator || " " };
  }, { openShareDialogOnClick: false, onClick: /* @__PURE__ */ __name(function(e2, t2) {
    window.location.href = t2;
  }, "onClick") }), Nt = wt({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), Tt = bt("linkedin", function(e2, t2) {
    var n2 = t2.title, r2 = t2.summary, a2 = t2.source;
    return ut(e2, "linkedin.url"), "https://linkedin.com/shareArticle" + ft({ url: e2, mini: "true", title: n2, summary: r2, source: a2 });
  }, function(e2) {
    return { title: e2.title, summary: e2.summary, source: e2.source };
  }, { windowWidth: 750, windowHeight: 600 }), Ot = wt({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
  function At(e2, t2) {
    if (null == e2) return {};
    var n2 = {};
    for (var r2 in e2) if ({}.hasOwnProperty.call(e2, r2)) {
      if (t2.includes(r2)) continue;
      n2[r2] = e2[r2];
    }
    return n2;
  }
  __name(At, "At");
  function Rt(e2, t2) {
    return void 0 === e2 && (e2 = ""), void 0 === t2 && (t2 = void 0), t2 ? e2.split(" ").map(function(e3) {
      return t2[e3] || e3;
    }).join(" ") : e2;
  }
  __name(Rt, "Rt");
  var Lt = "object" == typeof window && window.Element || function() {
  };
  l().oneOfType([l().string, l().func, function(e2, t2, n2) {
    if (!(e2[t2] instanceof Lt)) return new Error("Invalid prop `" + t2 + "` supplied to `" + n2 + "`. Expected prop to be an instance of Element. Validation failed.");
  }, l().shape({ current: l().any })]);
  var It = l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func }), l().arrayOf(l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func })]))]);
  var Pt = ["className", "cssModule", "active", "tag"], _t = { tag: It, active: l().bool, className: l().string, cssModule: l().object }, Mt = /* @__PURE__ */ __name(function(e2) {
    var t2 = e2.className, n2 = e2.cssModule, r2 = e2.active, a2 = e2.tag, o2 = At(e2, Pt), i2 = Rt(C$1()(t2, !!r2 && "active", "breadcrumb-item"), n2);
    return s.default.createElement(a2, T$1({}, o2, { className: i2, "aria-current": r2 ? "page" : void 0 }));
  }, "Mt");
  Mt.propTypes = _t, Mt.defaultProps = { tag: "li" };
  const zt = Mt;
  var Dt = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"], jt = { tag: It, listTag: It, className: l().string, listClassName: l().string, cssModule: l().object, children: l().node, "aria-label": l().string }, $t = /* @__PURE__ */ __name(function(e2) {
    var t2 = e2.className, n2 = e2.listClassName, r2 = e2.cssModule, a2 = e2.children, o2 = e2.tag, i2 = e2.listTag, l2 = e2["aria-label"], c2 = At(e2, Dt), d2 = Rt(C$1()(t2), r2), u2 = Rt(C$1()("breadcrumb", n2), r2);
    return s.default.createElement(o2, T$1({}, c2, { className: d2, "aria-label": l2 }), s.default.createElement(i2, { className: u2 }, a2));
  }, "$t");
  $t.propTypes = jt, $t.defaultProps = { tag: "nav", listTag: "ol", "aria-label": "breadcrumb" };
  const Ft = $t, Ht = rt.div`
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
`, Bt = rt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, qt = /* @__PURE__ */ __name(({ type: e2, articleUrl: t2, publicationDate: n2, title: r2, body: a2, authorEmail: o2, authorName: i2, authorPhone: l2, authorTitle: c2, breadcrumbs: d2, calendarUrl: u2, eventLocation: f2, eventTime: m2, headerImageUrl: h2, registrationUrl: g2, zoomUrl: y2 }) => {
    const b2 = C$1()("col", "col-12", { "col-lg-8": "event" === e2 && (g2 || y2 || u2) });
    return s.default.createElement(s.default.Fragment, null, h2 && "event" !== e2 && s.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${h2})` } }), s.default.createElement(Ht, { className: `container ${e2}-container wrapper-container` }, d2 && s.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, s.default.createElement("div", { className: "col col-12" }, s.default.createElement(Ft, { listClassName: "breadcrumb" }, d2.map((e3) => ((e4) => e4.active ? s.default.createElement(zt, { active: true, tag: "li", className: "breadcrumb-item" }, s.default.createElement(zt, { tag: "a", href: e4.url }, e4.title)) : s.default.createElement(zt, { tag: "li", className: "breadcrumb-item" }, s.default.createElement(zt, { tag: "a", href: e4.url }, e4.title)))(e3))))), s.default.createElement("div", { className: "row pb-2 pt-3" }, s.default.createElement("div", { className: b2 }, s.default.createElement("h2", { "data-testid": "title" }, r2)), "event" === e2 && s.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (g2 || y2) && (g2 ? s.default.createElement("div", { className: "card-button uds-button" }, s.default.createElement(A, { color: "maroon", href: g2, label: "Register" })) : s.default.createElement("div", { className: "card-button uds-button" }, s.default.createElement(A, { color: "maroon", href: y2, label: "Attend on Zoom" }))), u2 && s.default.createElement("div", { className: "card-button uds-button" }, s.default.createElement(A, { color: "gray", size: "small", href: u2, label: "Add to calendar" })))), "event" === e2 ? s.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, m2 && s.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, s.default.createElement("h4", null, s.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), s.default.createElement("div", { dangerouslySetInnerHTML: p(m2) })), (g2 && y2 || f2) && s.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, s.default.createElement("h4", null, s.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), s.default.createElement("div", { dangerouslySetInnerHTML: p(f2) }), g2 && y2 && s.default.createElement("a", { href: y2 }, "Attend on Zoom"))) : s.default.createElement("div", { className: "row row-spaced pt-2" }, s.default.createElement("div", { className: "col col-12" }, s.default.createElement("div", { className: "article-social-media" }, s.default.createElement(vt, { url: t2, quote: r2 }, s.default.createElement(Et, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), s.default.createElement(Ct, { url: t2, quote: r2 }, s.default.createElement(St, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), s.default.createElement(Tt, { url: t2, quote: r2 }, s.default.createElement(Ot, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), n2 && s.default.createElement("i", { className: "news-date" }, n2))), s.default.createElement("div", { className: "row" }, s.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: p(a2), "data-testid": "body" })), "news" === e2 && s.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, s.default.createElement("div", { className: "col col-12" }, s.default.createElement("div", { className: "author highlight-gold" }, i2), c2 && s.default.createElement("div", { className: "author-title" }, c2), o2 && s.default.createElement("div", { className: "author-contact" }, s.default.createElement("span", { className: "icon-bg" }, s.default.createElement("i", { className: "fas fa-envelope" })), s.default.createElement("a", { href: `mailto: ${o2}` }, o2)), l2 && s.default.createElement("div", { className: "author-contact" }, s.default.createElement("span", { className: "icon-bg" }, s.default.createElement("i", { className: "fas fa-phone" })), s.default.createElement("a", { href: `tel: ${l2}` }, l2)))), "event" === e2 && s.default.createElement(Bt, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, s.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, s.default.createElement("h4", null, "For more information contact:"), s.default.createElement("div", { className: "event-author" }, i2), s.default.createElement("div", { className: "event-author-title" }, c2), (o2 || l2) && s.default.createElement("div", { className: "event-author-info" }, o2 && s.default.createElement("div", null, s.default.createElement("a", { href: `mailto: ${o2}` }, o2)), l2 && s.default.createElement("div", null, s.default.createElement("a", { href: `tel: ${l2}` }, l2)))), s.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, s.default.createElement("h4", null, "Share this event:"), s.default.createElement("div", { className: "article-social-media" }, s.default.createElement(vt, { url: t2, quote: r2 }, s.default.createElement(Et, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), s.default.createElement(Ct, { url: t2, quote: r2 }, s.default.createElement(St, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), s.default.createElement(xt, { url: o2, quote: r2 }, s.default.createElement(Nt, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), s.default.createElement(Tt, { url: t2, quote: r2 }, s.default.createElement(Ot, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
  }, "qt");
  qt.propTypes = { type: l().oneOf(["event", "news"]), articleUrl: l().string.isRequired, publicationDate: l().string.isRequired, title: l().string.isRequired, body: l().string.isRequired, authorEmail: l().string, authorName: l().string.isRequired, authorPhone: l().string, authorTitle: l().string, breadcrumbs: l().arrayOf(l().shape({ title: l().string, url: l().string, active: l().bool })), calendarUrl: l().string, headerImageUrl: l().string, eventLocation: l().string, eventTime: l().string, registrationUrl: l().string, zoomUrl: l().string }, qt.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
  const Ut = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Wt = /* @__PURE__ */ __name(({ color: e2, icon: t2, innerRef: n2, onClick: r2, size: a2, cardTitle: o2 }) => s.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e2} ${"large" === a2 && "btn-circle-large"}`, ref: n2, onClick: /* @__PURE__ */ __name(() => (b$1({ ...Ut, text: `${t2 == null ? void 0 : t2[1]} icon`, section: o2 }), void (r2 == null ? void 0 : r2())), "onClick"), "aria-label": "Close" }, s.default.createElement("i", { className: `${t2 == null ? void 0 : t2[0]} fa-${t2 == null ? void 0 : t2[1]}` })), "Wt");
  Wt.propTypes = { color: l().oneOf(["white", "gray", "black"]), icon: l().arrayOf(l().string), innerRef: l().oneOfType([l().object, l().func, l().string]), onClick: l().func, cardTitle: l().string, size: l().oneOf(["large", "small"]) }, Wt.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
  const Gt = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Vt = /* @__PURE__ */ __name(({ label: e2, cardTitle: t2, ariaLabel: n2, color: r2, disabled: a2, element: o2, innerRef: i2, href: l2, onClick: c2, ...d2 }) => {
    const u2 = C$1()("btn", "btn-tag", { "btn-tag-alt-white": "white" === r2, "btn-tag-alt-gray": "gray" === r2, "btn-tag-alt-dark": "dark" === r2, disabled: a2 });
    let f2 = o2;
    return l2 && "button" === o2 && (f2 = "a"), s.default.createElement(f2, T$1({ type: "button" === f2 && c2 ? "button" : void 0 }, d2, { className: u2, href: l2, ref: i2, onClick: /* @__PURE__ */ __name(() => (b$1({ ...Gt, text: e2, section: t2 }), void (c2 == null ? void 0 : c2())), "onClick"), "aria-label": n2 }), e2);
  }, "Vt");
  Vt.propTypes = { label: l().string, cardTitle: l().string, ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), disabled: l().bool, element: l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func }), l().arrayOf(l().oneOfType([l().func, l().string, l().shape({ $$typeof: l().symbol, render: l().func })]))]), href: l().string, innerRef: l().oneOfType([l().object, l().func, l().string]), onClick: l().func }, Vt.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
  const Yt = /* @__PURE__ */ __name(({ src: e2, alt: t2, cssClasses: n2, loading: r2 = "lazy", decoding: a2 = "async", dataTestId: o2, fetchPriority: i2 = "auto", width: l2, height: c2, cardLink: d2, title: u2, caption: m2, captionTitle: h2, border: g2, dropShadow: y2 }) => {
    const b2 = { src: e2, alt: t2, loading: r2, decoding: a2, fetchpriority: i2, ...(n2 == null ? void 0 : n2.length) > 0 && { className: f(n2) }, ...o2 && { "data-testid": o2 }, ...l2 && { width: l2 }, ...c2 && { height: c2 } }, v2 = C$1()("uds-img", { borderless: !g2, "uds-img-drop-shadow": y2 }), k2 = /* @__PURE__ */ __name((e3) => {
      const t3 = e3 ? `${b2.className} ${e3}` : b2.className;
      return d2 ? s.default.createElement("a", { href: d2 }, s.default.createElement("img", T$1({}, b2, { className: t3 })), s.default.createElement("span", { className: "visually-hidden" }, u2)) : s.default.createElement("img", T$1({}, b2, { className: t3 }));
    }, "k2");
    return s.default.createElement(s.default.Fragment, null, m2 ? s.default.createElement("div", { className: v2 }, s.default.createElement("figure", { className: "figure uds-figure" }, k2(), m2 && s.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, h2 && s.default.createElement("h3", null, h2), s.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: p(m2) })))) : k2(v2));
  }, "Yt");
  Yt.propTypes = { src: l().string.isRequired, alt: l().string.isRequired, cssClasses: l().arrayOf(l().string), loading: l().oneOf(["lazy", "eager"]), decoding: l().oneOf(["sync", "async", "auto"]), fetchPriority: l().oneOf(["auto", "high", "low"]), width: l().string, height: l().string, dataTestId: l().string, cardLink: l().string, title: l().string, caption: l().string, captionTitle: l().string, border: l().bool, dropShadow: l().bool };
  const Zt = rt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Kt = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Xt = /* @__PURE__ */ __name(({ type: e2, width: t2, horizontal: n2, image: r2, imageAltText: a2, title: o2, icon: i2, body: l2, eventFormat: c2, eventLocation: d2, eventTime: u2, buttons: f2, linkLabel: m2, linkUrl: p2, tags: h2, showBorders: g2, cardLink: y2 }) => s.default.createElement(Qt, { type: e2, width: t2, horizontal: n2, image: r2, imageAltText: a2, title: o2, icon: i2, body: l2, eventFormat: c2, eventLocation: d2, eventTime: u2, buttons: f2, linkLabel: m2, linkUrl: p2, tags: h2, showBorders: g2, cardLink: y2 }), "Xt");
  Xt.propTypes = { type: l().oneOf(["default", "degree", "event", "news", "story"]), width: l().oneOf(["25%", "50%", "75%", "100%"]), horizontal: l().bool, title: l().string.isRequired, icon: l().arrayOf(l().string), body: l().string, eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string, image: l().string, imageAltText: l().string, buttons: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["gold", "maroon", "gray", "dark"]), icon: l().arrayOf(l().string), href: l().string, label: l().string, onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: l().string, linkUrl: l().string, tags: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), href: l().string, label: l().string, onClick: l().func })), showBorders: l().bool, cardLink: l().string }, Xt.defaultProps = { type: "default", width: "100%", horizontal: false, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: true };
  const Qt = /* @__PURE__ */ __name(({ type: e2, width: t2, horizontal: n2, image: r2, imageAltText: a2, title: o2, icon: i2, body: l2, eventFormat: c2, eventLocation: d2, eventTime: u2, buttons: f2, linkLabel: m2, linkUrl: p2, tags: h2, showBorders: g2, cardLink: y2 }) => {
    const b2 = C$1()("card", "cards-components", { "card-degree": "degree" === e2, "card-event": "event" === e2, "card-story": "story" === e2, [`w-${t2.replace("%", "")}`]: "100%" !== t2, "card-horizontal": n2, borderless: !g2 });
    return s.default.createElement(s.default.Fragment, null, s.default.createElement(Zt, { className: b2, "data-testid": "card-container" }, !!r2 && s.default.createElement(Yt, { src: r2, alt: a2, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: y2, title: o2 }), !r2 && i2 && s.default.createElement("i", { className: `${i2 == null ? void 0 : i2[0]} fa-${i2 == null ? void 0 : i2[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), n2 ? s.default.createElement("div", { className: "card-content-wrapper" }, s.default.createElement(Jt, { type: e2, body: l2, eventFormat: c2, eventLocation: d2, eventTime: u2, title: o2, buttons: f2, linkLabel: m2, linkUrl: p2, tags: h2, cardLink: y2 })) : s.default.createElement(Jt, { type: e2, body: l2, eventFormat: c2, eventLocation: d2, eventTime: u2, title: o2, buttons: f2, linkLabel: m2, linkUrl: p2, tags: h2, cardLink: y2 })));
  }, "Qt");
  Qt.propTypes = { type: l().oneOf(["default", "degree", "event", "news", "story"]), width: l().oneOf(["25%", "50%", "75%", "100%"]), horizontal: l().bool, title: l().string.isRequired, icon: l().arrayOf(l().string), body: l().string, eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string, image: l().string, imageAltText: l().string, buttons: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["gold", "maroon", "gray", "dark"]), icon: l().arrayOf(l().string), href: l().string, label: l().string, onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: l().string, linkUrl: l().string, tags: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), href: l().string, label: l().string, onClick: l().func })), showBorders: l().bool, cardLink: l().string }, Qt.defaultProps = { type: "default", width: "100%", horizontal: false, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: true };
  const Jt = /* @__PURE__ */ __name(({ type: e2, body: t2, eventFormat: n2, eventLocation: r2, eventTime: a2, title: o2, buttons: i2, linkLabel: l2, linkUrl: c2, tags: d2, cardLink: u2 }) => {
    return s.default.createElement(s.default.Fragment, null, !!o2 && s.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, s.default.createElement("h3", { className: "card-title" }, u2 ? s.default.createElement("a", { href: u2 }, o2) : o2)), !!t2 && s.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, s.default.createElement("div", { dangerouslySetInnerHTML: p(t2) })), "event" === e2 && (a2 || r2) && s.default.createElement(en, { eventFormat: n2, eventTime: a2, eventLocation: r2 }), i2 && s.default.createElement("div", { className: "card-buttons" }, i2.map((e3) => s.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${e3.label}-${e3.href}` }, s.default.createElement(A, { ariaLabel: e3.ariaLabel, color: e3.color, icon: e3.icon, href: e3.href, label: e3.label, onClick: e3.onClick, size: e3.size, target: e3.target, cardTitle: o2 })))), c2 && l2 && s.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, s.default.createElement("a", { href: (f2 = c2, f2.startsWith("https://") || f2.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(f2) ? f2 : `mailto:${f2}`), onClick: /* @__PURE__ */ __name(() => b$1({ ...Kt, section: o2, text: l2 }), "onClick") }, l2)), d2 && s.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, d2.map((e3) => s.default.createElement(Vt, { key: `${e3.label}-${e3.href}`, ariaLabel: e3.ariaLabel, color: e3.color, href: e3.href, label: e3.label, onClick: e3.onClick, cardTitle: o2 }))));
    var f2;
  }, "Jt");
  Jt.propTypes = { type: l().oneOf(["default", "degree", "event", "news", "story"]), body: l().string, eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string, title: l().string.isRequired, buttons: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["gold", "maroon", "gray", "dark"]), icon: l().arrayOf(l().string), href: l().string, label: l().string, onClick: l().func, size: l().oneOf(["default", "small", "xsmall"]), target: l().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: l().string, linkUrl: l().string, tags: l().arrayOf(l().shape({ ariaLabel: l().string, color: l().oneOf(["white", "gray", "dark"]), href: l().string, label: l().string, onClick: l().func })), cardLink: l().string }, Jt.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
  const en = /* @__PURE__ */ __name(({ eventFormat: e2, eventTime: t2, eventLocation: n2 }) => "inline" === e2 ? s.default.createElement("div", { className: "card-event-details" }, t2 && s.default.createElement("div", { className: "card-event-icons" }, s.default.createElement("div", null, s.default.createElement("i", { className: "far fa-calendar" })), s.default.createElement("div", { dangerouslySetInnerHTML: p(t2) })), n2 && s.default.createElement("div", { className: "card-event-icons" }, s.default.createElement("div", null, s.default.createElement("i", { className: "fas fa-map-marker-alt" })), s.default.createElement("div", { dangerouslySetInnerHTML: p(n2) }))) : s.default.createElement(s.default.Fragment, null, t2 && s.default.createElement("div", { className: "card-event-details" }, s.default.createElement("div", { className: "card-event-icons" }, s.default.createElement("div", null, s.default.createElement("i", { className: "far fa-calendar" })), s.default.createElement("div", { dangerouslySetInnerHTML: p(t2) }))), n2 && s.default.createElement("div", { className: "card-event-details" }, s.default.createElement("div", { className: "card-event-icons" }, s.default.createElement("div", null, s.default.createElement("i", { className: "fas fa-map-marker-alt" })), s.default.createElement("span", null, s.default.createElement("div", { dangerouslySetInnerHTML: p(n2) }))))), "en");
  en.propTypes = { eventFormat: l().oneOf(["stack", "inline"]), eventLocation: l().string, eventTime: l().string }, en.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
  const tn = rt.div`
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
`, nn = /* @__PURE__ */ __name(() => s.default.createElement(tn, null, s.default.createElement("div", null), s.default.createElement("div", null), s.default.createElement("div", null), s.default.createElement("div", null)), "nn"), rn = rt.section``, an = (0, s.createContext)(null), on = /* @__PURE__ */ __name(({ defaultProps: e2, dataSource: t2, noFeedText: n2, renderHeader: r2, renderBody: a2, dataTransformer: o2 = /* @__PURE__ */ __name((e3) => e3, "o2"), dataFilter: i2 = /* @__PURE__ */ __name((e3) => e3, "i2"), maxItems: l2 }) => {
    const [{ data: c2, loading: d2, error: u2 }, f2] = (() => {
      const [e3, t3] = (0, s.useState)(), [n3, r3] = (0, s.useState)(false), [a3, o3] = (0, s.useState)(false), [i3, l3] = (0, s.useState)("");
      return (0, s.useEffect)(() => {
        i3 && (() => {
          o3(null), r3(true);
          try {
            fetch(i3).then((e4) => e4.json()).then((e4) => {
              t3(e4), r3(false);
            }).catch((e4) => {
              o3(e4), r3(false);
            });
          } catch (e4) {
            o3(e4);
          }
        })();
      }, [i3]), [{ data: e3, loading: n3, error: a3 }, l3];
    })(), [m2, p2] = (0, s.useState)([]), h2 = { ...e2.dataSource, ...t2 };
    return (0, s.useEffect)(() => {
      f2(h2 == null ? void 0 : h2.url);
    }, [h2 == null ? void 0 : h2.url]), (0, s.useEffect)(() => {
      const e3 = c2 == null ? void 0 : c2.nodes.map(o2), n3 = e3 == null ? void 0 : e3.filter((e4) => i2(e4, t2 == null ? void 0 : t2.filters));
      p2(l2 ? n3 == null ? void 0 : n3.slice(0, l2) : n3);
    }, [c2]), s.default.createElement(an.Provider, { value: { feeds: m2 } }, s.default.createElement(rn, null, r2, u2 ? s.default.createElement("span", null, "Error, try again!") : s.default.createElement(s.default.Fragment, null, d2 && !(m2 == null ? void 0 : m2.length) && s.default.createElement("div", { className: "text-center mt-4" }, s.default.createElement(nn, null)), (m2 == null ? void 0 : m2.length) ? a2 : !d2 && s.default.createElement("p", { className: "text-center" }, n2))));
  }, "on");
  on.propTypes = { renderHeader: l().element, renderBody: l().element, maxItems: l().number, dataTransformer: l().func, dataFilter: l().func, noFeedText: l().string };
  const ln = l().shape({ color: l().oneOf(["white", "dark"]), text: l().string }), sn = l().shape({ color: l().oneOf(["gold", "maroon", "gray", "dark"]), text: l().string }), cn = l().shape({ color: l().oneOf(["gold", "maroon", "gray", "dark"]), text: l().string, size: l().string }), dn = l().shape({ url: l().string, filters: l().string }), un = l().shape({ header: ln, ctaButton: sn, dataSource: dn, maxItems: l().number }), fn = rt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, mn = /* @__PURE__ */ __name(({ defaultProps: e2, header: t2, ctaButton: n2 }) => {
    const r2 = { ...e2.header, ...t2 }, a2 = { ...e2.ctaButton, ...n2 };
    return s.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, s.default.createElement("div", { className: "col-sm-12 col-md-9" }, s.default.createElement("h2", { className: `text-${r2.color}` }, r2.text)), s.default.createElement(fn, { className: "col-sm-12 col-md-3" }, s.default.createElement("a", { className: `btn btn-${a2.color}`, href: a2.url, onClick: /* @__PURE__ */ __name(() => b$1({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: r2.text, text: a2.text }), "onClick") }, a2.text)));
  }, "mn");
  mn.propTypes = { defaultProps: un, header: ln, ctaButton: sn };
  const pn = /* @__PURE__ */ __name(({ children: e2 }) => s.default.createElement("div", { className: "row", "data-testid": "feed-body" }, s.default.createElement("div", { className: "col" }, e2)), "pn");
  pn.propTypes = { children: l().element };
  const hn = rt.img`
  width: 100%;
`, gn = /* @__PURE__ */ __name((e2) => {
    const t2 = e2.type || "heading-hero";
    return { "heading-hero": /* @__PURE__ */ __name(() => function({ image: e3, subTitle: t3, title: n2, contents: r2, contentsColor: a2 }) {
      const o2 = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, i2 = { black: "text-dark", white: "text-white", undefined: "" };
      let l2 = s.default.createElement(s.default.Fragment, null);
      return n2 && (l2 = s.default.createElement("h1", { style: { maxWidth: n2.maxWidth || "" }, "data-testid": "hero-title" }, s.default.createElement("span", { className: C$1()({ [i2[n2.color]]: n2.color, [o2[n2.highlightColor]]: n2.highlightColor }) }, n2.text))), n2 && t3 && (l2 = s.default.createElement("header", null, s.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, s.default.createElement("span", { className: C$1()({ [i2[t3.color]]: t3.color, [o2[t3.highlightColor]]: t3.highlightColor }) }, t3.text)), l2)), s.default.createElement("div", { className: C$1()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[e3 == null ? void 0 : e3.size]]: e3 == null ? void 0 : e3.size }) }, s.default.createElement("div", { className: "hero-overlay" }), s.default.createElement(hn, { className: "hero", src: e3 == null ? void 0 : e3.url, alt: e3 == null ? void 0 : e3.altText, "data-testid": "hero-image" }), l2, r2 && s.default.createElement("div", { "data-testid": "hero-content", className: C$1()("content", { [i2[a2]]: a2 }) }, r2.map((e4, t4) => s.default.createElement("p", { key: `content-${t4}` }, e4.text))));
    }(e2), "heading-hero"), "story-hero": /* @__PURE__ */ __name(() => function({ image: e3, title: t3, contents: n2 }) {
      return console.log({ image: e3, title: t3, contents: n2 }), s.default.createElement("div", null, "TODO: to be implemented");
    }(e2), "story-hero"), undefined: /* @__PURE__ */ __name(() => (console.error(`the type '${t2}' is not supported by the 'Hero' component.`), null), "undefined") }[t2]();
  }, "gn");
  gn.propTypes = { type: l().oneOf(["heading-hero", "story-hero"]), image: v$1, title: k$1, subTitle: k$1, contents: l().arrayOf(k$1), contentsColor: l().string };
  const yn = /* @__PURE__ */ __name(({ dataId: e2, isClickeable: t2, disabled: n2, pageLinkIcon: r2, selectedPage: a2, onClick: o2, ellipses: i2, ariaLabel: l2, children: c2, ariaDisabled: d2 }) => s.default.createElement("li", { className: C$1()("page-item", { disabled: n2, active: a2, elipses: i2 }) }, t2 ? s.default.createElement("button", { type: "button", "aria-label": l2, className: C$1()("page-link", { "page-link-icon": r2 }), onClick: o2, "data-testid": "page-link", "data-id": e2, "aria-current": a2 ? "page" : null, "aria-disabled": d2 }, c2, a2 && s.default.createElement("span", { className: "visually-hidden" }, "(current)")) : s.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, c2)), "yn");
  yn.propTypes = { isClickeable: l().bool, disabled: l().bool, pageLinkIcon: l().bool, selectedPage: l().bool, dataId: l().string, onClick: l().func, children: l().node, ellipses: l().bool, ariaLabel: l().string, ariaDisabled: l().bool }, yn.defaultProps = { isClickeable: false, disabled: false, pageLinkIcon: false, selectedPage: false, onClick: /* @__PURE__ */ __name(() => {
  }, "onClick") };
  const bn = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, vn = /* @__PURE__ */ __name(({ type: e2, background: t2, currentPage: n2, totalPages: r2, onChange: a2 }) => {
    const [o2, i2] = (0, s.useState)(null);
    (0, s.useEffect)(() => {
      i2(n2);
    }, [n2]);
    const l2 = /* @__PURE__ */ __name((e3, t3) => {
      const n3 = { first: 1, prev: 1 === o2 ? 1 : o2 - 1, next: o2 === r2 ? r2 : o2 + 1, last: r2 }[t3] ?? t3;
      i2(n3), ((e4) => {
        b$1({ ...bn, text: `page ${e4}` });
      })(n3), a2 == null ? void 0 : a2(e3, n3);
    }, "l2");
    return s.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, s.default.createElement("ul", { className: C$1()("pagination", "justify-content-center", "pt-2", "pb-2", { border: "bordered" === e2, "uds-bg-gray1": "gray1" === t2, "uds-bg-gray": "gray2" === t2, "uds-bg-dark": "gray7" === t2 }) }, s.default.createElement(yn, { dataId: "prev", isClickeable: true, disabled: 1 === o2, pageLinkIcon: true, onClick: /* @__PURE__ */ __name((e3) => l2(e3, "prev"), "onClick"), ariaDisabled: 1 === o2, ariaLabel: "Previous Page" }), (() => {
      const e3 = u(o2 === r2 - 1, 2, o2 === r2 ? 3 : 1), t3 = u(1 === o2, 3, 2 === o2 ? 2 : 1), n3 = [...h(o2 - e3, o2, r2), ...h(o2, o2 + 1 + t3, r2)];
      return s.default.createElement(s.default.Fragment, null, 1 !== n3[0] && s.default.createElement(yn, { ariaLabel: `Page 1 of ${r2}`, isClickeable: true, selectedPage: 1 === o2, onClick: /* @__PURE__ */ __name((e4) => l2(e4, "first"), "onClick") }, "1"), n3[0] > 2 && s.default.createElement(yn, { ellipses: true }, "..."), n3.map((e4) => s.default.createElement(yn, { ariaLabel: `Page ${e4} of ${r2}`, isClickeable: true, key: e4, selectedPage: o2 === e4, onClick: /* @__PURE__ */ __name((t4) => l2(t4, e4), "onClick") }, e4)), n3[n3.length - 1] < r2 - 1 && s.default.createElement(yn, { ellipses: true }, "..."), n3[n3.length - 1] !== r2 && s.default.createElement(yn, { isClickeable: true, ariaLabel: `Page ${r2} of ${r2}`, selectedPage: o2 === r2, onClick: /* @__PURE__ */ __name((e4) => l2(e4, "last"), "onClick") }, r2));
    })(), s.default.createElement(yn, { dataId: "next", isClickeable: true, ariaDisabled: o2 === r2, disabled: o2 === r2, pageLinkIcon: true, onClick: /* @__PURE__ */ __name((e3) => l2(e3, "next"), "onClick"), ariaLabel: "Next Page" })));
  }, "vn");
  vn.propTypes = { type: l().oneOf(["default", "bordered"]).isRequired, background: l().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: l().number, totalPages: l().number, onChange: l().func.isRequired }, vn.defaultProps = { currentPage: 1, totalPages: 10 };
  const kn = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, wn = /* @__PURE__ */ __name((e2) => "small" === e2, "wn"), En = /* @__PURE__ */ __name(({ size: e2, image: t2, imageAlt: n2 }) => wn(e2) ? s.default.createElement("div", { className: "image-wrapper" }, s.default.createElement(Yt, { src: t2, alt: n2, fetchPriority: "high" })) : s.default.createElement(Yt, { src: t2, alt: n2, fetchPriority: "high" }), "En");
  En.propTypes = { size: l().oneOf(["small", "large"]), image: l().string.isRequired, imageAlt: l().string.isRequired };
  const Cn = /* @__PURE__ */ __name(({ heading: e2, citation: t2 }) => s.default.createElement("div", { className: "citation" }, s.default.createElement("h4", null, e2), s.default.createElement("p", null, "— ", t2)), "Cn");
  Cn.propTypes = { heading: l().string.isRequired, citation: l().string.isRequired };
  const Sn = /* @__PURE__ */ __name(({ imageSize: e2, body: t2, heading: n2, readMoreLink: r2 }) => {
    const [a2, o2] = (0, s.useState)(false), i2 = `info-layer-${Math.floor(1e5 * Math.random())}`, l2 = /* @__PURE__ */ __name((e3) => {
      "click" !== e3.type && "Enter" !== e3.key && " " !== e3.key || (o2(!a2), b$1({ ...kn, text: "Expand ranking", action: a2 ? "open" : "close", section: n2 }));
    }, "l2");
    return s.default.createElement("div", { className: C$1()("info-layer", { active: a2 }), "data-testid": "info-layer", id: i2 }, s.default.createElement("div", { className: "content" }, s.default.createElement("div", { className: C$1()("header", { closed: wn(e2) && !a2 }) }, wn(e2) && s.default.createElement("p", { dangerouslySetInnerHTML: p(t2) }), !wn(e2) && s.default.createElement(s.default.Fragment, null, s.default.createElement("button", { onClick: l2, className: "btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a2, "aria-controls": i2 }, s.default.createElement("h4", null, n2), s.default.createElement("i", { className: "fas fa-chevron-up" }))), wn(e2) && s.default.createElement(s.default.Fragment, null, s.default.createElement("button", { onClick: l2, className: "btn btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a2, "aria-controls": i2 }, s.default.createElement("i", { className: "fas fa-chevron-up" })))), !wn(e2) && s.default.createElement("p", { dangerouslySetInnerHTML: p(t2) }), r2 && s.default.createElement("a", { href: r2, "aria-label": "Read more", className: "read-more", onClick: /* @__PURE__ */ __name(() => {
      b$1({ ...kn, section: n2, text: "read more" });
    }, "onClick") }, "Read more ", s.default.createElement("span", { className: "visually-hidden" }, n2), s.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
  }, "Sn");
  Sn.propTypes = { imageSize: l().oneOf(["small", "large"]), body: l().string.isRequired, heading: l().string.isRequired, readMoreLink: l().string };
  const xn = /* @__PURE__ */ __name(({ imageSize: e2 = "large", image: t2, imageAlt: n2, heading: r2, body: a2, readMoreLink: o2 = "", citation: i2 }) => s.default.createElement("div", { className: C$1()("card-ranking", { "large-image": "large" === e2, "small-image": "small" === e2 }) }, s.default.createElement(En, { size: e2, image: t2, imageAlt: n2 }), wn(e2) && s.default.createElement(Cn, { heading: r2, citation: i2 }), s.default.createElement(Sn, { imageSize: e2, body: a2, heading: r2, readMoreLink: o2 })), "xn");
  xn.propTypes = { imageSize: l().oneOf(["small", "large"]).isRequired, image: l().string.isRequired, imageAlt: l().string.isRequired, heading: l().string.isRequired, body: l().string.isRequired, readMoreLink: l().string, citation: l().string };
  const Nn = rt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Tn = /* @__PURE__ */ __name(({ hidePrev: e2, hideNext: t2, clickPrev: n2, clickNext: r2 }) => s.default.createElement(Nn, null, !e2 && s.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: n2, tabIndex: -1 }, s.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), s.default.createElement("span", { className: "visually-hidden" }, "Previous")), !t2 && s.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: r2, tabIndex: -1 }, s.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), s.default.createElement("span", { className: "visually-hidden" }, "Next"))), "Tn");
  Tn.propTypes = { hidePrev: l().bool, hideNext: l().bool, clickPrev: l().func.isRequired, clickNext: l().func.isRequired };
  const On = (0, s.forwardRef)(function(e2, t2) {
    const { id: n2, selected: r2, title: a2, selectTab: o2, leftKeyPressed: i2, rightKeyPressed: l2, icon: c2 } = e2, d2 = (0, s.useRef)(null);
    return (0, s.useImperativeHandle)(t2, () => ({ focus() {
      d2.current.focus();
    }, scrollIntoView() {
      var _a, _b, _c, _d, _e2, _f, _g;
      const e3 = ((_a = d2.current) == null ? void 0 : _a.offsetWidth) / 2 + d2.current.offsetLeft, t3 = ((_c = (_b = d2.current) == null ? void 0 : _b.offsetParent) == null ? void 0 : _c.scrollLeft) + ((_e2 = (_d = d2.current) == null ? void 0 : _d.offsetParent) == null ? void 0 : _e2.offsetWidth) / 2;
      (_g = (_f = d2.current) == null ? void 0 : _f.offsetParent) == null ? void 0 : _g.scrollBy({ left: e3 - t3 });
    } }), []), s.default.createElement("a", { ref: d2, className: "nav-item nav-link " + (r2 ? "active" : ""), id: n2, href: `#nav-${n2}`, role: "tab", "aria-controls": `nav-${n2}`, "aria-selected": r2, onClick: /* @__PURE__ */ __name((e3) => o2(e3, n2, a2), "onClick"), onKeyDown: /* @__PURE__ */ __name((e3) => {
      37 === e3.keyCode ? (e3.preventDefault(), i2()) : 39 === e3.keyCode && (e3.preventDefault(), l2());
    }, "onKeyDown"), tabIndex: r2 ? "" : "-1" }, a2, " ", c2 && s.default.createElement("i", { className: `${c2 == null ? void 0 : c2[0]} fa-${c2 == null ? void 0 : c2[1]} me-1` }));
  });
  On.propTypes = { id: l().string.isRequired, selected: l().bool.isRequired, title: l().string.isRequired, selectTab: l().func.isRequired, leftKeyPressed: l().func.isRequired, rightKeyPressed: l().func.isRequired, icon: l().arrayOf(l().string) };
  const An = /* @__PURE__ */ __name(({ id: e2, bgColor: t2, selected: n2, children: r2 }) => n2 && s.default.createElement("div", { className: `tab-pane fade show ${n2 ? "show active" : ""} ${"bg-dark" === t2 ? "text-white" : ""}`, id: `nav-${e2}`, role: "tabpanel", "aria-labelledby": `nav-${e2}-tab` }, r2), "An");
  An.propTypes = { id: l().string.isRequired, bgColor: l().string, selected: l().bool, children: l().oneOfType([l().array, l().element]) };
  const Rn = /* @__PURE__ */ __name(({ initialTab: e2 = "", children: t2, bgColor: n2 = "", onTabChange: r2 = /* @__PURE__ */ __name(() => {
  }, "r2") }) => {
    const a2 = s.default.Children.toArray(t2), o2 = (0, s.useRef)(false), [i2, l2] = (0, s.useState)(e2 && "null" !== e2 ? e2 : a2[0].props.id), c2 = (0, s.useRef)(null), [d2, u2] = function() {
      const e3 = (0, s.useRef)({}), t3 = (0, s.useCallback)((t4) => (n3) => {
        e3.current[t4] = n3;
      }, []);
      return [e3, t3];
    }(), f2 = /* @__PURE__ */ __name((e3) => {
      var _a;
      r2(e3), (_a = d2.current[e3]) == null ? void 0 : _a.focus(), l2(e3);
    }, "f2"), [m2, p2] = (0, s.useState)(0), [h2, g2] = (0, s.useState)();
    (0, s.useEffect)(() => {
      const e3 = /* @__PURE__ */ __name(() => {
        p2(c2.current.scrollLeft);
      }, "e3");
      return c2.current.addEventListener("scroll", e3), e3(), () => {
        c2.current && c2.current.removeEventListener("scroll", e3);
      };
    }, [h2]), (0, s.useEffect)(() => {
      const e3 = /* @__PURE__ */ __name(() => {
        g2(c2.current.scrollWidth - c2.current.offsetWidth);
      }, "e3");
      return window.addEventListener("resize", e3), e3(), () => {
        c2.current && window.removeEventListener("resize", e3);
      };
    }, []), (0, s.useEffect)(() => {
      var _a;
      (_a = d2.current[i2]) == null ? void 0 : _a.scrollIntoView();
    }, [i2]), (0, s.useEffect)(() => {
      o2.current && e2 && "null" !== e2 && i2 !== e2 && l2(e2);
    }, [e2]), (0, s.useEffect)(() => {
      o2.current = true;
    }, []);
    const y2 = /* @__PURE__ */ __name((e3) => {
      b$1({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: e3 });
    }, "y2"), v2 = a2.map((e3) => s.default.cloneElement(e3, { bgColor: n2, selected: i2 === e3.props.id })), k2 = /* @__PURE__ */ __name((e3) => {
      const t3 = c2.current, n3 = t3.scrollWidth - t3.clientWidth;
      let r3 = t3.scrollLeft + 200 * e3;
      r3 = Math.max(0, Math.min(n3, r3)), t3.scrollTo({ left: r3, behavior: "smooth" });
    }, "k2"), w2 = /* @__PURE__ */ __name((e3, t3, n3) => {
      b$1({ event: "link", action: "click", name: "onclick", type: "internal link", text: n3 }), e3.preventDefault(), f2(t3);
    }, "w2"), E2 = /* @__PURE__ */ __name((e3 = true) => {
      const t3 = a2.length, n3 = e3 ? 1 : -1, r3 = a2.findIndex((e4) => e4.props.id === i2), o3 = a2[(t3 + r3 + n3) % t3].props.id;
      f2(o3);
    }, "E2");
    let C2 = "uds-tabbed-panels";
    return "bg-dark" === n2 && (C2 += " uds-tabbed-panels-dark"), s.default.createElement("div", { className: n2 }, s.default.createElement("nav", { className: C2 }, s.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: c2 }, a2.map((e3, t3) => s.default.createElement(On, { ref: u2(e3.props.id), id: e3.props.id, title: e3.props.title, selected: i2 === e3.props.id, selectTab: w2, key: e3.props.id, leftKeyPressed: /* @__PURE__ */ __name(() => E2(false), "leftKeyPressed"), rightKeyPressed: /* @__PURE__ */ __name(() => E2(), "rightKeyPressed"), icon: e3.props.icon, index: t3 }))), s.default.createElement(Tn, { hidePrev: m2 <= 0, hideNext: m2 >= h2, clickPrev: /* @__PURE__ */ __name(() => {
      k2(-1), y2("left chevron");
    }, "clickPrev"), clickNext: /* @__PURE__ */ __name(() => {
      k2(1), y2("right chevron");
    }, "clickNext") })), s.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, v2));
  }, "Rn");
  Rn.propTypes = { initialTab: l().string, children: l().arrayOf(l().element).isRequired, bgColor: l().string, onTabChange: l().func };
  const Ln = /* @__PURE__ */ __name(({ imageSource: e2, imageAltText: t2, quote: n2, itemStyle: r2 = {} }) => {
    var _a, _b;
    return s.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e2 ? "with-image" : ""} ${f(r2.containerCssClass)}` }, e2 && s.default.createElement(Yt, { src: e2, alt: t2, dataTestId: "testimonial-image", fetchPriority: "high" }), s.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, s.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), s.default.createElement("blockquote", { style: { paddingLeft: 0 } }, n2.title && s.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, s.default.createElement("span", { className: f(r2.titleCssClass) }, n2.title)), n2.content && s.default.createElement("p", { className: f(r2.contentCssClass), "data-testid": "testimonial-content" }, n2.content), (!!((_a = n2.cite) == null ? void 0 : _a.name) || !!((_b = n2.cite) == null ? void 0 : _b.description)) && s.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, s.default.createElement("cite", { className: "name" }, n2.cite.name), n2.cite && s.default.createElement("cite", { className: "description" }, n2.cite.description))));
  }, "Ln");
  Ln.propTypes = { quote: l().shape({ title: l().string, content: l().string, cite: l().shape({ name: l().string, description: l().string }) }).isRequired, imageSource: l().string, imageAltText: l().string, itemStyle: l().shape({ containerCssClass: l().arrayOf(l().string), titleCssClass: l().arrayOf(l().string), contentCssClass: l().arrayOf(l().string) }) };
  const In = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, Pn = /* @__PURE__ */ __name((e2) => {
    const { type: t2 = "video", url: n2 = "", vttUrl: r2, title: a2 = "", caption: o2, className: i2, controls: l2 = true } = e2;
    return "youtube" === t2 ? (({ title: e3 = "", caption: t3, url: n3 = "", className: r3 }) => s.default.createElement("div", { className: C$1()(`uds-video-container ${r3}`, { "uds-video-with-caption": t3 }) }, s.default.createElement("div", { className: "uds-video-player youtube-video" }, s.default.createElement("iframe", { title: e3, src: n3 })), t3 && s.default.createElement("figure", { "data-testid": "video-caption" }, s.default.createElement("figcaption", null, t3))))({ url: n2, title: a2, caption: o2, className: i2 }) : (({ url: e3 = "", vttUrl: t3, caption: n3, title: r3 = "", className: a3, controls: o3 = true }) => {
      const i3 = (0, s.useRef)(null);
      return s.default.createElement("div", { className: C$1()(`uds-video-container ${a3}`, { "uds-video-with-caption": n3 }) }, s.default.createElement("div", { className: "uds-video-player" }, s.default.createElement("video", { ref: i3, title: r3, onClick: /* @__PURE__ */ __name(() => {
        b$1({ ...In, section: r3 });
      }, "onClick"), playsInline: true, controls: o3 || true }, s.default.createElement("source", { src: e3 }), s.default.createElement("track", { src: t3, kind: "captions", srcLang: "en", label: "english_captions" }))), n3 && s.default.createElement("figure", { "data-testid": "video-caption" }, s.default.createElement("figcaption", null, n3)));
    })({ url: n2, vttUrl: r2, title: a2, caption: o2, className: i2, controls: l2 });
  }, "Pn");
  Pn.propTypes = { type: l().oneOf(["video", "youtube"]), url: l().string, vttUrl: l().string, title: l().string, className: l().string, caption: l().string, controls: l().bool };
  const _n = ((e2) => {
    var t2 = {};
    return a.d(t2, e2), t2;
  })({ default: /* @__PURE__ */ __name(() => t__namespace.default, "default") }), Mn = /* @__PURE__ */ __name((e2, t2, n2) => {
    _n.default.render(s.default.createElement(e2, t2), n2);
  }, "Mn"), zn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(N$1, t2, document.querySelector(e2)), "zn"), Dn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(lt, t2, document.querySelector(e2)), "Dn"), jn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(qt, t2, document.querySelector(e2)), "jn"), $n = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(A, t2, document.querySelector(e2)), "$n"), Fn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(Wt, t2, document.querySelector(e2)), "Fn"), Hn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(Vt, t2, document.querySelector(e2)), "Hn"), Bn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(Xt, t2, document.querySelector(e2)), "Bn"), qn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(gn, t2, document.querySelector(e2)), "qn"), Un = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(Yt, t2, document.querySelector(e2)), "Un"), Wn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(xn, t2, document.querySelector(e2)), "Wn"), Gn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(vn, t2, document.querySelector(e2)), "Gn"), Vn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(Ln, t2, document.querySelector(e2)), "Vn"), Yn = /* @__PURE__ */ __name(({ targetSelector: e2, props: t2 }) => Mn(Pn, t2, document.querySelector(e2)), "Yn");
  var Zn = o.nD, Kn = o.n_, Qn = o.$n, tr = o.Zp, ir = o.lq, sr = o.dK, mr = o.Ce;
  var propTypes = { exports: {} };
  var reactIs$1 = { exports: {} };
  var reactIs_production_min = {};
  var hasRequiredReactIs_production_min;
  function requireReactIs_production_min() {
    if (hasRequiredReactIs_production_min) return reactIs_production_min;
    hasRequiredReactIs_production_min = 1;
    var b2 = "function" === typeof Symbol && Symbol.for, c2 = b2 ? Symbol.for("react.element") : 60103, d2 = b2 ? Symbol.for("react.portal") : 60106, e = b2 ? Symbol.for("react.fragment") : 60107, f2 = b2 ? Symbol.for("react.strict_mode") : 60108, g2 = b2 ? Symbol.for("react.profiler") : 60114, h2 = b2 ? Symbol.for("react.provider") : 60109, k2 = b2 ? Symbol.for("react.context") : 60110, l2 = b2 ? Symbol.for("react.async_mode") : 60111, m2 = b2 ? Symbol.for("react.concurrent_mode") : 60111, n2 = b2 ? Symbol.for("react.forward_ref") : 60112, p2 = b2 ? Symbol.for("react.suspense") : 60113, q2 = b2 ? Symbol.for("react.suspense_list") : 60120, r2 = b2 ? Symbol.for("react.memo") : 60115, t2 = b2 ? Symbol.for("react.lazy") : 60116, v2 = b2 ? Symbol.for("react.block") : 60121, w2 = b2 ? Symbol.for("react.fundamental") : 60117, x2 = b2 ? Symbol.for("react.responder") : 60118, y2 = b2 ? Symbol.for("react.scope") : 60119;
    function z2(a2) {
      if ("object" === typeof a2 && null !== a2) {
        var u2 = a2.$$typeof;
        switch (u2) {
          case c2:
            switch (a2 = a2.type, a2) {
              case l2:
              case m2:
              case e:
              case g2:
              case f2:
              case p2:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case k2:
                  case n2:
                  case t2:
                  case r2:
                  case h2:
                    return a2;
                  default:
                    return u2;
                }
            }
          case d2:
            return u2;
        }
      }
    }
    __name(z2, "z");
    function A2(a2) {
      return z2(a2) === m2;
    }
    __name(A2, "A");
    reactIs_production_min.AsyncMode = l2;
    reactIs_production_min.ConcurrentMode = m2;
    reactIs_production_min.ContextConsumer = k2;
    reactIs_production_min.ContextProvider = h2;
    reactIs_production_min.Element = c2;
    reactIs_production_min.ForwardRef = n2;
    reactIs_production_min.Fragment = e;
    reactIs_production_min.Lazy = t2;
    reactIs_production_min.Memo = r2;
    reactIs_production_min.Portal = d2;
    reactIs_production_min.Profiler = g2;
    reactIs_production_min.StrictMode = f2;
    reactIs_production_min.Suspense = p2;
    reactIs_production_min.isAsyncMode = function(a2) {
      return A2(a2) || z2(a2) === l2;
    };
    reactIs_production_min.isConcurrentMode = A2;
    reactIs_production_min.isContextConsumer = function(a2) {
      return z2(a2) === k2;
    };
    reactIs_production_min.isContextProvider = function(a2) {
      return z2(a2) === h2;
    };
    reactIs_production_min.isElement = function(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === c2;
    };
    reactIs_production_min.isForwardRef = function(a2) {
      return z2(a2) === n2;
    };
    reactIs_production_min.isFragment = function(a2) {
      return z2(a2) === e;
    };
    reactIs_production_min.isLazy = function(a2) {
      return z2(a2) === t2;
    };
    reactIs_production_min.isMemo = function(a2) {
      return z2(a2) === r2;
    };
    reactIs_production_min.isPortal = function(a2) {
      return z2(a2) === d2;
    };
    reactIs_production_min.isProfiler = function(a2) {
      return z2(a2) === g2;
    };
    reactIs_production_min.isStrictMode = function(a2) {
      return z2(a2) === f2;
    };
    reactIs_production_min.isSuspense = function(a2) {
      return z2(a2) === p2;
    };
    reactIs_production_min.isValidElementType = function(a2) {
      return "string" === typeof a2 || "function" === typeof a2 || a2 === e || a2 === m2 || a2 === g2 || a2 === f2 || a2 === p2 || a2 === q2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t2 || a2.$$typeof === r2 || a2.$$typeof === h2 || a2.$$typeof === k2 || a2.$$typeof === n2 || a2.$$typeof === w2 || a2.$$typeof === x2 || a2.$$typeof === y2 || a2.$$typeof === v2);
    };
    reactIs_production_min.typeOf = z2;
    return reactIs_production_min;
  }
  __name(requireReactIs_production_min, "requireReactIs_production_min");
  {
    reactIs$1.exports = requireReactIs_production_min();
  }
  var reactIsExports = reactIs$1.exports;
  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;
  function requireReactPropTypesSecret() {
    if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
    hasRequiredReactPropTypesSecret = 1;
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    ReactPropTypesSecret_1 = ReactPropTypesSecret;
    return ReactPropTypesSecret_1;
  }
  __name(requireReactPropTypesSecret, "requireReactPropTypesSecret");
  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;
  function requireFactoryWithThrowingShims() {
    if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
    hasRequiredFactoryWithThrowingShims = 1;
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    function emptyFunction() {
    }
    __name(emptyFunction, "emptyFunction");
    function emptyFunctionWithReset() {
    }
    __name(emptyFunctionWithReset, "emptyFunctionWithReset");
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    factoryWithThrowingShims = /* @__PURE__ */ __name(function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      __name(shim, "shim");
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      __name(getShim, "getShim");
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    }, "factoryWithThrowingShims");
    return factoryWithThrowingShims;
  }
  __name(requireFactoryWithThrowingShims, "requireFactoryWithThrowingShims");
  {
    propTypes.exports = requireFactoryWithThrowingShims()();
  }
  var propTypesExports = propTypes.exports;
  const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
  function stylis_min(W2) {
    function M2(d2, c2, e, h2, a2) {
      for (var m2 = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e.length, J2 = B3 - 1, y2, f2 = "", p2 = "", F3 = "", G3 = "", C2; l2 < B3; ) {
        g2 = e.charCodeAt(l2);
        l2 === J2 && 0 !== b2 + n2 + v2 + m2 && (0 !== b2 && (g2 = 47 === b2 ? 10 : 47), n2 = v2 = m2 = 0, B3++, J2++);
        if (0 === b2 + n2 + v2 + m2) {
          if (l2 === J2 && (0 < r2 && (f2 = f2.replace(N2, "")), 0 < f2.trim().length)) {
            switch (g2) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                f2 += e.charAt(l2);
            }
            g2 = 59;
          }
          switch (g2) {
            case 123:
              f2 = f2.trim();
              q2 = f2.charCodeAt(0);
              k2 = 1;
              for (t2 = ++l2; l2 < B3; ) {
                switch (g2 = e.charCodeAt(l2)) {
                  case 123:
                    k2++;
                    break;
                  case 125:
                    k2--;
                    break;
                  case 47:
                    switch (g2 = e.charCodeAt(l2 + 1)) {
                      case 42:
                      case 47:
                        a: {
                          for (u2 = l2 + 1; u2 < J2; ++u2) {
                            switch (e.charCodeAt(u2)) {
                              case 47:
                                if (42 === g2 && 42 === e.charCodeAt(u2 - 1) && l2 + 2 !== u2) {
                                  l2 = u2 + 1;
                                  break a;
                                }
                                break;
                              case 10:
                                if (47 === g2) {
                                  l2 = u2 + 1;
                                  break a;
                                }
                            }
                          }
                          l2 = u2;
                        }
                    }
                    break;
                  case 91:
                    g2++;
                  case 40:
                    g2++;
                  case 34:
                  case 39:
                    for (; l2++ < J2 && e.charCodeAt(l2) !== g2; ) {
                    }
                }
                if (0 === k2) break;
                l2++;
              }
              k2 = e.substring(t2, l2);
              0 === q2 && (q2 = (f2 = f2.replace(ca, "").trim()).charCodeAt(0));
              switch (q2) {
                case 64:
                  0 < r2 && (f2 = f2.replace(N2, ""));
                  g2 = f2.charCodeAt(1);
                  switch (g2) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      r2 = c2;
                      break;
                    default:
                      r2 = O2;
                  }
                  k2 = M2(c2, r2, k2, g2, a2 + 1);
                  t2 = k2.length;
                  0 < A2 && (r2 = X2(O2, f2, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h2), f2 = r2.join(""), void 0 !== C2 && 0 === (t2 = (k2 = C2.trim()).length) && (g2 = 0, k2 = ""));
                  if (0 < t2) switch (g2) {
                    case 115:
                      f2 = f2.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f2 + "{" + k2 + "}";
                      break;
                    case 107:
                      f2 = f2.replace(fa, "$1 $2");
                      k2 = f2 + "{" + k2 + "}";
                      k2 = 1 === w2 || 2 === w2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f2 + k2, 112 === h2 && (k2 = (p2 += k2, ""));
                  }
                  else k2 = "";
                  break;
                default:
                  k2 = M2(c2, X2(c2, f2, I2), k2, h2, a2 + 1);
              }
              F3 += k2;
              k2 = I2 = r2 = u2 = q2 = 0;
              f2 = "";
              g2 = e.charCodeAt(++l2);
              break;
            case 125:
            case 59:
              f2 = (0 < r2 ? f2.replace(N2, "") : f2).trim();
              if (1 < (t2 = f2.length)) switch (0 === u2 && (q2 = f2.charCodeAt(0), 45 === q2 || 96 < q2 && 123 > q2) && (t2 = (f2 = f2.replace(" ", ":")).length), 0 < A2 && void 0 !== (C2 = H2(1, f2, c2, d2, D2, z2, p2.length, h2, a2, h2)) && 0 === (t2 = (f2 = C2.trim()).length) && (f2 = "\0\0"), q2 = f2.charCodeAt(0), g2 = f2.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (105 === g2 || 99 === g2) {
                    G3 += f2 + e.charAt(l2);
                    break;
                  }
                default:
                  58 !== f2.charCodeAt(t2 - 1) && (p2 += P2(f2, q2, g2, f2.charCodeAt(2)));
              }
              I2 = r2 = u2 = q2 = 0;
              f2 = "";
              g2 = e.charCodeAt(++l2);
          }
        }
        switch (g2) {
          case 13:
          case 10:
            47 === b2 ? b2 = 0 : 0 === 1 + q2 && 107 !== h2 && 0 < f2.length && (r2 = 1, f2 += "\0");
            0 < A2 * Y2 && H2(0, f2, c2, d2, D2, z2, p2.length, h2, a2, h2);
            z2 = 1;
            D2++;
            break;
          case 59:
          case 125:
            if (0 === b2 + n2 + v2 + m2) {
              z2++;
              break;
            }
          default:
            z2++;
            y2 = e.charAt(l2);
            switch (g2) {
              case 9:
              case 32:
                if (0 === n2 + m2 + b2) switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    32 !== g2 && (y2 = " ");
                }
                break;
              case 0:
                y2 = "\\0";
                break;
              case 12:
                y2 = "\\f";
                break;
              case 11:
                y2 = "\\v";
                break;
              case 38:
                0 === n2 + b2 + m2 && (r2 = I2 = 1, y2 = "\f" + y2);
                break;
              case 108:
                if (0 === n2 + b2 + m2 + E2 && 0 < u2) switch (l2 - u2) {
                  case 2:
                    112 === x2 && 58 === e.charCodeAt(l2 - 3) && (E2 = x2);
                  case 8:
                    111 === K2 && (E2 = K2);
                }
                break;
              case 58:
                0 === n2 + b2 + m2 && (u2 = l2);
                break;
              case 44:
                0 === b2 + v2 + n2 + m2 && (r2 = 1, y2 += "\r");
                break;
              case 34:
              case 39:
                0 === b2 && (n2 = n2 === g2 ? 0 : 0 === n2 ? g2 : n2);
                break;
              case 91:
                0 === n2 + b2 + v2 && m2++;
                break;
              case 93:
                0 === n2 + b2 + v2 && m2--;
                break;
              case 41:
                0 === n2 + b2 + m2 && v2--;
                break;
              case 40:
                if (0 === n2 + b2 + m2) {
                  if (0 === q2) switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                  v2++;
                }
                break;
              case 64:
                0 === b2 + v2 + n2 + m2 + u2 + k2 && (k2 = 1);
                break;
              case 42:
              case 47:
                if (!(0 < n2 + m2 + v2)) switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    47 === g2 && 42 === x2 && t2 + 2 !== l2 && (33 === e.charCodeAt(t2 + 2) && (p2 += e.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
            }
            0 === b2 && (f2 += y2);
        }
        K2 = x2;
        x2 = g2;
        l2++;
      }
      t2 = p2.length;
      if (0 < t2) {
        r2 = c2;
        if (0 < A2 && (C2 = H2(2, p2, r2, d2, D2, z2, t2, h2, a2, h2), void 0 !== C2 && 0 === (p2 = C2).length)) return G3 + p2 + F3;
        p2 = r2.join(",") + "{" + p2 + "}";
        if (0 !== w2 * E2) {
          2 !== w2 || L2(p2, 2) || (E2 = 0);
          switch (E2) {
            case 111:
              p2 = p2.replace(ha, ":-moz-$1") + p2;
              break;
            case 112:
              p2 = p2.replace(Q2, "::-webkit-input-$1") + p2.replace(Q2, "::-moz-$1") + p2.replace(Q2, ":-ms-input-$1") + p2;
          }
          E2 = 0;
        }
      }
      return G3 + p2 + F3;
    }
    __name(M2, "M");
    function X2(d2, c2, e) {
      var h2 = c2.trim().split(ia);
      c2 = h2;
      var a2 = h2.length, m2 = d2.length;
      switch (m2) {
        case 0:
        case 1:
          var b2 = 0;
          for (d2 = 0 === m2 ? "" : d2[0] + " "; b2 < a2; ++b2) {
            c2[b2] = Z2(d2, c2[b2], e).trim();
          }
          break;
        default:
          var v2 = b2 = 0;
          for (c2 = []; b2 < a2; ++b2) {
            for (var n2 = 0; n2 < m2; ++n2) {
              c2[v2++] = Z2(d2[n2] + " ", h2[b2], e).trim();
            }
          }
      }
      return c2;
    }
    __name(X2, "X");
    function Z2(d2, c2, e) {
      var h2 = c2.charCodeAt(0);
      33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
      switch (h2) {
        case 38:
          return c2.replace(F2, "$1" + d2.trim());
        case 58:
          return d2.trim() + c2.replace(F2, "$1" + d2.trim());
        default:
          if (0 < 1 * e && 0 < c2.indexOf("\f")) return c2.replace(F2, (58 === d2.charCodeAt(0) ? "" : "$1") + d2.trim());
      }
      return d2 + c2;
    }
    __name(Z2, "Z");
    function P2(d2, c2, e, h2) {
      var a2 = d2 + ";", m2 = 2 * c2 + 3 * e + 4 * h2;
      if (944 === m2) {
        d2 = a2.indexOf(":", 9) + 1;
        var b2 = a2.substring(d2, a2.length - 1).trim();
        b2 = a2.substring(0, d2).trim() + b2 + ";";
        return 1 === w2 || 2 === w2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
      }
      if (0 === w2 || 2 === w2 && !L2(a2, 1)) return a2;
      switch (m2) {
        case 1015:
          return 97 === a2.charCodeAt(10) ? "-webkit-" + a2 + a2 : a2;
        case 951:
          return 116 === a2.charCodeAt(3) ? "-webkit-" + a2 + a2 : a2;
        case 963:
          return 110 === a2.charCodeAt(5) ? "-webkit-" + a2 + a2 : a2;
        case 1009:
          if (100 !== a2.charCodeAt(4)) break;
        case 969:
        case 942:
          return "-webkit-" + a2 + a2;
        case 978:
          return "-webkit-" + a2 + "-moz-" + a2 + a2;
        case 1019:
        case 983:
          return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
        case 883:
          if (45 === a2.charCodeAt(8)) return "-webkit-" + a2 + a2;
          if (0 < a2.indexOf("image-set(", 11)) return a2.replace(ja, "$1-webkit-$2") + a2;
          break;
        case 932:
          if (45 === a2.charCodeAt(4)) switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
          return "-webkit-" + a2 + "-ms-" + a2 + a2;
        case 964:
          return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
        case 1023:
          if (99 !== a2.charCodeAt(8)) break;
          b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
          return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
        case 1005:
          return ka.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
        case 1e3:
          b2 = a2.substring(13).trim();
          c2 = b2.indexOf("-") + 1;
          switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
            case 226:
              b2 = a2.replace(G2, "tb");
              break;
            case 232:
              b2 = a2.replace(G2, "tb-rl");
              break;
            case 220:
              b2 = a2.replace(G2, "lr");
              break;
            default:
              return a2;
          }
          return "-webkit-" + a2 + "-ms-" + b2 + a2;
        case 1017:
          if (-1 === a2.indexOf("sticky", 9)) break;
        case 975:
          c2 = (a2 = d2).length - 10;
          b2 = (33 === a2.charCodeAt(c2) ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
          switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
            case 203:
              if (111 > b2.charCodeAt(8)) break;
            case 115:
              a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
              break;
            case 207:
            case 102:
              a2 = a2.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
          }
          return a2 + ";";
        case 938:
          if (45 === a2.charCodeAt(5)) switch (a2.charCodeAt(6)) {
            case 105:
              return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
          }
          break;
        case 973:
        case 989:
          if (45 !== a2.charCodeAt(3) || 122 === a2.charCodeAt(4)) break;
        case 931:
        case 953:
          if (true === la.test(d2)) return 115 === (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) ? P2(d2.replace("stretch", "fill-available"), c2, e, h2).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
          break;
        case 962:
          if (a2 = "-webkit-" + a2 + (102 === a2.charCodeAt(5) ? "-ms-" + a2 : "") + a2, 211 === e + h2 && 105 === a2.charCodeAt(13) && 0 < a2.indexOf("transform", 10)) return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a2;
      }
      return a2;
    }
    __name(P2, "P");
    function L2(d2, c2) {
      var e = d2.indexOf(1 === c2 ? ":" : "{"), h2 = d2.substring(0, 3 !== c2 ? e : 10);
      e = d2.substring(e + 1, d2.length - 1);
      return R2(2 !== c2 ? h2 : h2.replace(na, "$1"), e, c2);
    }
    __name(L2, "L");
    function ea(d2, c2) {
      var e = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
      return e !== c2 + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c2 + ")";
    }
    __name(ea, "ea");
    function H2(d2, c2, e, h2, a2, m2, b2, v2, n2, q2) {
      for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
        switch (w3 = S2[g2].call(B2, d2, x2, e, h2, a2, m2, b2, v2, n2, q2)) {
          case void 0:
          case false:
          case true:
          case null:
            break;
          default:
            x2 = w3;
        }
      }
      if (x2 !== c2) return x2;
    }
    __name(H2, "H");
    function T2(d2) {
      switch (d2) {
        case void 0:
        case null:
          A2 = S2.length = 0;
          break;
        default:
          if ("function" === typeof d2) S2[A2++] = d2;
          else if ("object" === typeof d2) for (var c2 = 0, e = d2.length; c2 < e; ++c2) {
            T2(d2[c2]);
          }
          else Y2 = !!d2 | 0;
      }
      return T2;
    }
    __name(T2, "T");
    function U2(d2) {
      d2 = d2.prefix;
      void 0 !== d2 && (R2 = null, d2 ? "function" !== typeof d2 ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
      return U2;
    }
    __name(U2, "U");
    function B2(d2, c2) {
      var e = d2;
      33 > e.charCodeAt(0) && (e = e.trim());
      V2 = e;
      e = [V2];
      if (0 < A2) {
        var h2 = H2(-1, c2, e, e, D2, z2, 0, 0, 0, 0);
        void 0 !== h2 && "string" === typeof h2 && (c2 = h2);
      }
      var a2 = M2(O2, e, c2, 0, 0);
      0 < A2 && (h2 = H2(-2, a2, e, e, D2, z2, a2.length, 0, 0, 0), void 0 !== h2 && (a2 = h2));
      V2 = "";
      E2 = 0;
      z2 = D2 = 1;
      return a2;
    }
    __name(B2, "B");
    var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
    B2.use = T2;
    B2.set = U2;
    void 0 !== W2 && U2(W2);
    return B2;
  }
  __name(stylis_min, "stylis_min");
  var unitlessKeys = {
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
  function memoize(fn2) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache[arg] === void 0) cache[arg] = fn2(arg);
      return cache[arg];
    };
  }
  __name(memoize, "memoize");
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var isPropValid = /* @__PURE__ */ memoize(
    function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
  );
  var reactIs = reactIsExports;
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    "$$typeof": true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    "$$typeof": true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
  function getStatics(component) {
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
  }
  __name(getStatics, "getStatics");
  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var getPrototypeOf$1 = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== "string") {
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf$1(sourceComponent);
        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }
      var keys = getOwnPropertyNames(sourceComponent);
      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }
      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);
      for (var i2 = 0; i2 < keys.length; ++i2) {
        var key = keys[i2];
        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor$1(sourceComponent, key);
          try {
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {
          }
        }
      }
    }
    return targetComponent;
  }
  __name(hoistNonReactStatics, "hoistNonReactStatics");
  var hoistNonReactStatics_cjs = hoistNonReactStatics;
  const m$1 = /* @__PURE__ */ getDefaultExportFromCjs(hoistNonReactStatics_cjs);
  var define_process_default = { env: { NODE_ENV: "production" } };
  function y() {
    return (y = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }).apply(this, arguments);
  }
  __name(y, "y");
  var v = /* @__PURE__ */ __name(function(e2, t2) {
    for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1) n2.push(t2[r2], e2[r2 + 1]);
    return n2;
  }, "v"), g = /* @__PURE__ */ __name(function(t2) {
    return null !== t2 && "object" == typeof t2 && "[object Object]" === (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) && !reactIsExports.typeOf(t2);
  }, "g"), S = Object.freeze([]), w = Object.freeze({});
  function E(e2) {
    return "function" == typeof e2;
  }
  __name(E, "E");
  function b(e2) {
    return "production" !== define_process_default.env.NODE_ENV && "string" == typeof e2 && e2 || e2.displayName || e2.name || "Component";
  }
  __name(b, "b");
  function _(e2) {
    return e2 && "string" == typeof e2.styledComponentId;
  }
  __name(_, "_");
  var N = "undefined" != typeof define_process_default && void 0 !== define_process_default.env && (define_process_default.env.REACT_APP_SC_ATTR || define_process_default.env.SC_ATTR) || "data-styled", C = "undefined" != typeof window && "HTMLElement" in window, I = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof define_process_default && void 0 !== define_process_default.env && (void 0 !== define_process_default.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_default.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_default.env.REACT_APP_SC_DISABLE_SPEEDY && define_process_default.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== define_process_default.env.SC_DISABLE_SPEEDY && "" !== define_process_default.env.SC_DISABLE_SPEEDY ? "false" !== define_process_default.env.SC_DISABLE_SPEEDY && define_process_default.env.SC_DISABLE_SPEEDY : "production" !== define_process_default.env.NODE_ENV)), P = {}, O = "production" !== define_process_default.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
  function R() {
    for (var e2 = arguments.length <= 0 ? void 0 : arguments[0], t2 = [], n2 = 1, r2 = arguments.length; n2 < r2; n2 += 1) t2.push(n2 < 0 || arguments.length <= n2 ? void 0 : arguments[n2]);
    return t2.forEach(function(t3) {
      e2 = e2.replace(/%[a-z]/, t3);
    }), e2;
  }
  __name(R, "R");
  function D(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    throw "production" === define_process_default.env.NODE_ENV ? new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : "")) : new Error(R.apply(void 0, [O[e2]].concat(n2)).trim());
  }
  __name(D, "D");
  var j = function() {
    function e2(e3) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.indexOfGroup = function(e3) {
      for (var t3 = 0, n2 = 0; n2 < e3; n2++) t3 += this.groupSizes[n2];
      return t3;
    }, t2.insertRules = function(e3, t3) {
      if (e3 >= this.groupSizes.length) {
        for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; ) (o2 <<= 1) < 0 && D(16, "" + e3);
        this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
        for (var s2 = r2; s2 < o2; s2++) this.groupSizes[s2] = 0;
      }
      for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++) this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
    }, t2.clearGroup = function(e3) {
      if (e3 < this.length) {
        var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
        this.groupSizes[e3] = 0;
        for (var o2 = n2; o2 < r2; o2++) this.tag.deleteRule(n2);
      }
    }, t2.getGroup = function(e3) {
      var t3 = "";
      if (e3 >= this.length || 0 === this.groupSizes[e3]) return t3;
      for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++) t3 += this.tag.getRule(s2) + "/*!sc*/\n";
      return t3;
    }, e2;
  }(), T = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), k = 1, V = /* @__PURE__ */ __name(function(e2) {
    if (T.has(e2)) return T.get(e2);
    for (; x.has(k); ) k++;
    var t2 = k++;
    return "production" !== define_process_default.env.NODE_ENV && ((0 | t2) < 0 || t2 > 1 << 30) && D(16, "" + t2), T.set(e2, t2), x.set(t2, e2), t2;
  }, "V"), B = /* @__PURE__ */ __name(function(e2) {
    return x.get(e2);
  }, "B"), z = /* @__PURE__ */ __name(function(e2, t2) {
    t2 >= k && (k = t2 + 1), T.set(e2, t2), x.set(t2, e2);
  }, "z"), M = "style[" + N + '][data-styled-version="5.3.11"]', G = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), L = /* @__PURE__ */ __name(function(e2, t2, n2) {
    for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++) (r2 = o2[s2]) && e2.registerName(t2, r2);
  }, "L"), F = /* @__PURE__ */ __name(function(e2, t2) {
    for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
      var i2 = n2[o2].trim();
      if (i2) {
        var a2 = i2.match(G);
        if (a2) {
          var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
          0 !== c2 && (z(u2, c2), L(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
        } else r2.push(i2);
      }
    }
  }, "F"), Y = /* @__PURE__ */ __name(function() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  }, "Y"), q = /* @__PURE__ */ __name(function(e2) {
    var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
      for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
        var r3 = t3[n3];
        if (r3 && 1 === r3.nodeType && r3.hasAttribute(N)) return r3;
      }
    }(n2), s2 = void 0 !== o2 ? o2.nextSibling : null;
    r2.setAttribute(N, "active"), r2.setAttribute("data-styled-version", "5.3.11");
    var i2 = Y();
    return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
  }, "q"), H = function() {
    function e2(e3) {
      var t3 = this.element = q(e3);
      t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
        if (e4.sheet) return e4.sheet;
        for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
          var o2 = t4[n2];
          if (o2.ownerNode === e4) return o2;
        }
        D(17);
      }(t3), this.length = 0;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.insertRule = function(e3, t3) {
      try {
        return this.sheet.insertRule(t3, e3), this.length++, true;
      } catch (e4) {
        return false;
      }
    }, t2.deleteRule = function(e3) {
      this.sheet.deleteRule(e3), this.length--;
    }, t2.getRule = function(e3) {
      var t3 = this.sheet.cssRules[e3];
      return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
    }, e2;
  }(), $ = function() {
    function e2(e3) {
      var t3 = this.element = q(e3);
      this.nodes = t3.childNodes, this.length = 0;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.insertRule = function(e3, t3) {
      if (e3 <= this.length && e3 >= 0) {
        var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
        return this.element.insertBefore(n2, r2 || null), this.length++, true;
      }
      return false;
    }, t2.deleteRule = function(e3) {
      this.element.removeChild(this.nodes[e3]), this.length--;
    }, t2.getRule = function(e3) {
      return e3 < this.length ? this.nodes[e3].textContent : "";
    }, e2;
  }(), W = function() {
    function e2(e3) {
      this.rules = [], this.length = 0;
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.insertRule = function(e3, t3) {
      return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
    }, t2.deleteRule = function(e3) {
      this.rules.splice(e3, 1), this.length--;
    }, t2.getRule = function(e3) {
      return e3 < this.length ? this.rules[e3] : "";
    }, e2;
  }(), U = C, J = { isServer: !C, useCSSOMInjection: !I }, X = function() {
    function e2(e3, t3, n2) {
      void 0 === e3 && (e3 = w), void 0 === t3 && (t3 = {}), this.options = y({}, J, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && C && U && (U = false, function(e4) {
        for (var t4 = document.querySelectorAll(M), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
          var o2 = t4[n3];
          o2 && "active" !== o2.getAttribute(N) && (F(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
        }
      }(this));
    }
    __name(e2, "e2");
    e2.registerId = function(e3) {
      return V(e3);
    };
    var t2 = e2.prototype;
    return t2.reconstructWithOptions = function(t3, n2) {
      return void 0 === n2 && (n2 = true), new e2(y({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
    }, t2.allocateGSInstance = function(e3) {
      return this.gs[e3] = (this.gs[e3] || 0) + 1;
    }, t2.getTag = function() {
      return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new W(o2) : r2 ? new H(o2) : new $(o2), new j(e3)));
      var e3, t3, n2, r2, o2;
    }, t2.hasNameForId = function(e3, t3) {
      return this.names.has(e3) && this.names.get(e3).has(t3);
    }, t2.registerName = function(e3, t3) {
      if (V(e3), this.names.has(e3)) this.names.get(e3).add(t3);
      else {
        var n2 = /* @__PURE__ */ new Set();
        n2.add(t3), this.names.set(e3, n2);
      }
    }, t2.insertRules = function(e3, t3, n2) {
      this.registerName(e3, t3), this.getTag().insertRules(V(e3), n2);
    }, t2.clearNames = function(e3) {
      this.names.has(e3) && this.names.get(e3).clear();
    }, t2.clearRules = function(e3) {
      this.getTag().clearGroup(V(e3)), this.clearNames(e3);
    }, t2.clearTag = function() {
      this.tag = void 0;
    }, t2.toString = function() {
      return function(e3) {
        for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
          var s2 = B(o2);
          if (void 0 !== s2) {
            var i2 = e3.names.get(s2), a2 = t3.getGroup(o2);
            if (i2 && a2 && i2.size) {
              var c2 = N + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
              void 0 !== i2 && i2.forEach(function(e4) {
                e4.length > 0 && (u2 += e4 + ",");
              }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
            }
          }
        }
        return r2;
      }(this);
    }, e2;
  }(), Z = /(a)(d)/gi, K = /* @__PURE__ */ __name(function(e2) {
    return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
  }, "K");
  function Q(e2) {
    var t2, n2 = "";
    for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = K(t2 % 52) + n2;
    return (K(t2 % 52) + n2).replace(Z, "$1-$2");
  }
  __name(Q, "Q");
  var ee = /* @__PURE__ */ __name(function(e2, t2) {
    for (var n2 = t2.length; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
    return e2;
  }, "ee"), te = /* @__PURE__ */ __name(function(e2) {
    return ee(5381, e2);
  }, "te");
  function ne(e2) {
    for (var t2 = 0; t2 < e2.length; t2 += 1) {
      var n2 = e2[t2];
      if (E(n2) && !_(n2)) return false;
    }
    return true;
  }
  __name(ne, "ne");
  var re = te("5.3.11"), oe = function() {
    function e2(e3, t2, n2) {
      this.rules = e3, this.staticRulesId = "", this.isStatic = "production" === define_process_default.env.NODE_ENV && (void 0 === n2 || n2.isStatic) && ne(e3), this.componentId = t2, this.baseHash = ee(re, t2), this.baseStyle = n2, X.registerId(t2);
    }
    __name(e2, "e2");
    return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
      var r2 = this.componentId, o2 = [];
      if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash) if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId)) o2.push(this.staticRulesId);
      else {
        var s2 = _e(this.rules, e3, t2, n2).join(""), i2 = Q(ee(this.baseHash, s2) >>> 0);
        if (!t2.hasNameForId(r2, i2)) {
          var a2 = n2(s2, "." + i2, void 0, r2);
          t2.insertRules(r2, i2, a2);
        }
        o2.push(i2), this.staticRulesId = i2;
      }
      else {
        for (var c2 = this.rules.length, u2 = ee(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
          var h2 = this.rules[d2];
          if ("string" == typeof h2) l2 += h2, "production" !== define_process_default.env.NODE_ENV && (u2 = ee(u2, h2 + d2));
          else if (h2) {
            var p2 = _e(h2, e3, t2, n2), f2 = Array.isArray(p2) ? p2.join("") : p2;
            u2 = ee(u2, f2 + d2), l2 += f2;
          }
        }
        if (l2) {
          var m2 = Q(u2 >>> 0);
          if (!t2.hasNameForId(r2, m2)) {
            var y2 = n2(l2, "." + m2, void 0, r2);
            t2.insertRules(r2, m2, y2);
          }
          o2.push(m2);
        }
      }
      return o2.join(" ");
    }, e2;
  }(), se = /^\s*\/\/.*$/gm, ie = [":", "[", ".", "#"];
  function ae(e2) {
    var t2, n2, r2, o2, s2 = w, i2 = s2.options, a2 = void 0 === i2 ? w : i2, c2 = s2.plugins, u2 = void 0 === c2 ? S : c2, l2 = new stylis_min(a2), d2 = [], p2 = /* @__PURE__ */ function(e3) {
      function t3(t4) {
        if (t4) try {
          e3(t4 + "}");
        } catch (e4) {
        }
      }
      __name(t3, "t3");
      return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
        switch (n3) {
          case 1:
            if (0 === l3 && 64 === r3.charCodeAt(0)) return e3(r3 + ";"), "";
            break;
          case 2:
            if (0 === u3) return r3 + "/*|*/";
            break;
          case 3:
            switch (u3) {
              case 102:
              case 112:
                return e3(o3[0] + r3), "";
              default:
                return r3 + (0 === d3 ? "/*|*/" : "");
            }
          case -2:
            r3.split("/*|*/}").forEach(t3);
        }
      };
    }(function(e3) {
      d2.push(e3);
    }), f2 = /* @__PURE__ */ __name(function(e3, r3, s3) {
      return 0 === r3 && -1 !== ie.indexOf(s3[n2.length]) || s3.match(o2) ? e3 : "." + t2;
    }, "f2");
    function m2(e3, s3, i3, a3) {
      void 0 === a3 && (a3 = "&");
      var c3 = e3.replace(se, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
      return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
    }
    __name(m2, "m2");
    return l2.use([].concat(u2, [function(e3, t3, o3) {
      2 === e3 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f2));
    }, p2, function(e3) {
      if (-2 === e3) {
        var t3 = d2;
        return d2 = [], t3;
      }
    }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
      return t3.name || D(15), ee(e3, t3.name);
    }, 5381).toString() : "", m2;
  }
  __name(ae, "ae");
  var ce = r$1.createContext();
  ce.Consumer;
  var le = r$1.createContext(), de = (le.Consumer, new X()), he = ae();
  function pe() {
    return r$1.useContext(ce) || de;
  }
  __name(pe, "pe");
  function fe() {
    return r$1.useContext(le) || he;
  }
  __name(fe, "fe");
  var ye = function() {
    function e2(e3, t2) {
      var n2 = this;
      this.inject = function(e4, t3) {
        void 0 === t3 && (t3 = he);
        var r2 = n2.name + t3.hash;
        e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
      }, this.toString = function() {
        return D(12, String(n2.name));
      }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
    }
    __name(e2, "e2");
    return e2.prototype.getName = function(e3) {
      return void 0 === e3 && (e3 = he), this.name + e3.hash;
    }, e2;
  }(), ve = /([A-Z])/, ge = /([A-Z])/g, Se = /^ms-/, we = /* @__PURE__ */ __name(function(e2) {
    return "-" + e2.toLowerCase();
  }, "we");
  function Ee(e2) {
    return ve.test(e2) ? e2.replace(ge, we).replace(Se, "-ms-") : e2;
  }
  __name(Ee, "Ee");
  var be = /* @__PURE__ */ __name(function(e2) {
    return null == e2 || false === e2 || "" === e2;
  }, "be");
  function _e(e2, n2, r2, o2) {
    if (Array.isArray(e2)) {
      for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1) "" !== (s2 = _e(e2[a2], n2, r2, o2)) && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
      return i2;
    }
    if (be(e2)) return "";
    if (_(e2)) return "." + e2.styledComponentId;
    if (E(e2)) {
      if ("function" != typeof (l2 = e2) || l2.prototype && l2.prototype.isReactComponent || !n2) return e2;
      var u2 = e2(n2);
      return "production" !== define_process_default.env.NODE_ENV && reactIsExports.isElement(u2) && console.warn(b(e2) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _e(u2, n2, r2, o2);
    }
    var l2;
    return e2 instanceof ye ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : g(e2) ? (/* @__PURE__ */ __name(function e3(t2, n3) {
      var r3, o3, s3 = [];
      for (var i3 in t2) t2.hasOwnProperty(i3) && !be(t2[i3]) && (Array.isArray(t2[i3]) && t2[i3].isCss || E(t2[i3]) ? s3.push(Ee(i3) + ":", t2[i3], ";") : g(t2[i3]) ? s3.push.apply(s3, e3(t2[i3], i3)) : s3.push(Ee(i3) + ": " + (r3 = i3, null == (o3 = t2[i3]) || "boolean" == typeof o3 || "" === o3 ? "" : "number" != typeof o3 || 0 === o3 || r3 in unitlessKeys || r3.startsWith("--") ? String(o3).trim() : o3 + "px") + ";"));
      return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
    }, "e3"))(e2) : e2.toString();
  }
  __name(_e, "_e");
  var Ne = /* @__PURE__ */ __name(function(e2) {
    return Array.isArray(e2) && (e2.isCss = true), e2;
  }, "Ne");
  function Ae(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    return E(e2) || g(e2) ? Ne(_e(v(S, [e2].concat(n2)))) : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0] ? e2 : Ne(_e(v(e2, n2)));
  }
  __name(Ae, "Ae");
  var Ce = /invalid hook call/i, Ie = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ __name(function(e2, t2) {
    if ("production" !== define_process_default.env.NODE_ENV) {
      var n2 = "The component " + e2 + (t2 ? ' with the id of "' + t2 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", r2 = console.error;
      try {
        var o2 = true;
        console.error = function(e3) {
          if (Ce.test(e3)) o2 = false, Ie.delete(n2);
          else {
            for (var t3 = arguments.length, s2 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++) s2[i2 - 1] = arguments[i2];
            r2.apply(void 0, [e3].concat(s2));
          }
        }, r$1.useRef(), o2 && !Ie.has(n2) && (console.warn(n2), Ie.add(n2));
      } catch (e3) {
        Ce.test(e3.message) && Ie.delete(n2);
      } finally {
        console.error = r2;
      }
    }
  }, "Pe"), Oe = /* @__PURE__ */ __name(function(e2, t2, n2) {
    return void 0 === n2 && (n2 = w), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
  }, "Oe"), Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, De = /(^-|-$)/g;
  function je(e2) {
    return e2.replace(Re, "-").replace(De, "");
  }
  __name(je, "je");
  var Te = /* @__PURE__ */ __name(function(e2) {
    return Q(te(e2) >>> 0);
  }, "Te");
  function xe(e2) {
    return "string" == typeof e2 && ("production" === define_process_default.env.NODE_ENV || e2.charAt(0) === e2.charAt(0).toLowerCase());
  }
  __name(xe, "xe");
  var ke = /* @__PURE__ */ __name(function(e2) {
    return "function" == typeof e2 || "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
  }, "ke"), Ve = /* @__PURE__ */ __name(function(e2) {
    return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
  }, "Ve");
  function Be(e2, t2, n2) {
    var r2 = e2[n2];
    ke(t2) && ke(r2) ? ze(r2, t2) : e2[n2] = t2;
  }
  __name(Be, "Be");
  function ze(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
    for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
      var i2 = s2[o2];
      if (ke(i2)) for (var a2 in i2) Ve(a2) && Be(e2, i2[a2], a2);
    }
    return e2;
  }
  __name(ze, "ze");
  var Me = r$1.createContext();
  Me.Consumer;
  var Fe = {};
  function Ye(e2, t2, n2) {
    var o2 = _(e2), i2 = !xe(e2), a2 = t2.attrs, c2 = void 0 === a2 ? S : a2, l2 = t2.componentId, d2 = void 0 === l2 ? function(e3, t3) {
      var n3 = "string" != typeof e3 ? "sc" : je(e3);
      Fe[n3] = (Fe[n3] || 0) + 1;
      var r2 = n3 + "-" + Te("5.3.11" + n3 + Fe[n3]);
      return t3 ? t3 + "-" + r2 : r2;
    }(t2.displayName, t2.parentComponentId) : l2, h2 = t2.displayName, p2 = void 0 === h2 ? function(e3) {
      return xe(e3) ? "styled." + e3 : "Styled(" + b(e3) + ")";
    }(e2) : h2, v2 = t2.displayName && t2.componentId ? je(t2.displayName) + "-" + t2.componentId : t2.componentId || d2, g2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, N2 = t2.shouldForwardProp;
    o2 && e2.shouldForwardProp && (N2 = t2.shouldForwardProp ? function(n3, r2, o3) {
      return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
    } : e2.shouldForwardProp);
    var A2, C2 = new oe(n2, v2, o2 ? e2.componentStyle : void 0), I2 = C2.isStatic && 0 === c2.length, P2 = /* @__PURE__ */ __name(function(e3, t3) {
      return function(e4, t4, n3, r2) {
        var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, l3 = e4.shouldForwardProp, d3 = e4.styledComponentId, h3 = e4.target, p3 = function(e5, t5, n4) {
          void 0 === e5 && (e5 = w);
          var r3 = y({}, t5, { theme: e5 }), o4 = {};
          return n4.forEach(function(e6) {
            var t6, n5, s2, i4 = e6;
            for (t6 in E(i4) && (i4 = i4(r3)), i4) r3[t6] = o4[t6] = "className" === t6 ? (n5 = o4[t6], s2 = i4[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i4[t6];
          }), [r3, o4];
        }(Oe(t4, r$1.useContext(Me), a3) || w, t4, o3), m2 = p3[0], v3 = p3[1], g3 = function(e5, t5, n4, r3) {
          var o4 = pe(), s2 = fe(), i4 = t5 ? e5.generateAndInjectStyles(w, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
          return "production" !== define_process_default.env.NODE_ENV && !t5 && r3 && r3(i4), i4;
        }(i3, r2, m2, "production" !== define_process_default.env.NODE_ENV ? e4.warnTooManyClasses : void 0), S2 = n3, b2 = v3.$as || t4.$as || v3.as || t4.as || h3, _2 = xe(b2), N3 = v3 !== t4 ? y({}, t4, {}, v3) : t4, A3 = {};
        for (var C3 in N3) "$" !== C3[0] && "as" !== C3 && ("forwardedAs" === C3 ? A3.as = N3[C3] : (l3 ? l3(C3, isPropValid, b2) : !_2 || isPropValid(C3)) && (A3[C3] = N3[C3]));
        return t4.style && v3.style !== t4.style && (A3.style = y({}, t4.style, {}, v3.style)), A3.className = Array.prototype.concat(c3, d3, g3 !== d3 ? g3 : null, t4.className, v3.className).filter(Boolean).join(" "), A3.ref = S2, r$1.createElement(b2, A3);
      }(A2, e3, t3, I2);
    }, "P2");
    return P2.displayName = p2, (A2 = r$1.forwardRef(P2)).attrs = g2, A2.componentStyle = C2, A2.displayName = p2, A2.shouldForwardProp = N2, A2.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : S, A2.styledComponentId = v2, A2.target = o2 ? e2.target : e2, A2.withComponent = function(e3) {
      var r2 = t2.componentId, o3 = function(e4, t3) {
        if (null == e4) return {};
        var n3, r3, o4 = {}, s3 = Object.keys(e4);
        for (r3 = 0; r3 < s3.length; r3++) n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
        return o4;
      }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (xe(e3) ? e3 : je(b(e3)));
      return Ye(e3, y({}, o3, { attrs: g2, componentId: s2 }), n2);
    }, Object.defineProperty(A2, "defaultProps", { get: /* @__PURE__ */ __name(function() {
      return this._foldedDefaultProps;
    }, "get"), set: /* @__PURE__ */ __name(function(t3) {
      this._foldedDefaultProps = o2 ? ze({}, e2.defaultProps, t3) : t3;
    }, "set") }), "production" !== define_process_default.env.NODE_ENV && (Pe(p2, v2), A2.warnTooManyClasses = /* @__PURE__ */ function(e3, t3) {
      var n3 = {}, r2 = false;
      return function(o3) {
        if (!r2 && (n3[o3] = true, Object.keys(n3).length >= 200)) {
          var s2 = t3 ? ' with the id of "' + t3 + '"' : "";
          console.warn("Over 200 classes were generated for component " + e3 + s2 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r2 = true, n3 = {};
        }
      };
    }(p2, v2)), Object.defineProperty(A2, "toString", { value: /* @__PURE__ */ __name(function() {
      return "." + A2.styledComponentId;
    }, "value") }), i2 && m$1(A2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), A2;
  }
  __name(Ye, "Ye");
  var qe = /* @__PURE__ */ __name(function(e2) {
    return (/* @__PURE__ */ __name(function e3(t2, r2, o2) {
      if (void 0 === o2 && (o2 = w), !reactIsExports.isValidElementType(r2)) return D(1, String(r2));
      var s2 = /* @__PURE__ */ __name(function() {
        return t2(r2, o2, Ae.apply(void 0, arguments));
      }, "s2");
      return s2.withConfig = function(n2) {
        return e3(t2, r2, y({}, o2, {}, n2));
      }, s2.attrs = function(n2) {
        return e3(t2, r2, y({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
      }, s2;
    }, "e3"))(Ye, e2);
  }, "qe");
  ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
    qe[e2] = qe(e2);
  });
  var He = function() {
    function e2(e3, t3) {
      this.rules = e3, this.componentId = t3, this.isStatic = ne(e3), X.registerId(this.componentId + 1);
    }
    __name(e2, "e2");
    var t2 = e2.prototype;
    return t2.createStyles = function(e3, t3, n2, r2) {
      var o2 = r2(_e(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
      n2.insertRules(s2, s2, o2);
    }, t2.removeStyles = function(e3, t3) {
      t3.clearRules(this.componentId + e3);
    }, t2.renderStyles = function(e3, t3, n2, r2) {
      e3 > 2 && X.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
    }, e2;
  }();
  function $e(e2) {
    for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o2 = 1; o2 < t2; o2++) n2[o2 - 1] = arguments[o2];
    var i2 = Ae.apply(void 0, [e2].concat(n2)), a2 = "sc-global-" + Te(JSON.stringify(i2)), u2 = new He(i2, a2);
    function d2(e3) {
      var t3 = pe(), n3 = fe(), o3 = r$1.useContext(Me), d3 = r$1.useRef(t3.allocateGSInstance(a2)).current;
      return "production" !== define_process_default.env.NODE_ENV && r$1.Children.count(e3.children) && console.warn("The global style component " + a2 + " was given child JSX. createGlobalStyle does not render children."), "production" !== define_process_default.env.NODE_ENV && i2.some(function(e4) {
        return "string" == typeof e4 && -1 !== e4.indexOf("@import");
      }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t3.server && h2(d3, e3, t3, o3, n3), r$1.useLayoutEffect(function() {
        if (!t3.server) return h2(d3, e3, t3, o3, n3), function() {
          return u2.removeStyles(d3, t3);
        };
      }, [d3, e3, t3, o3, n3]), null;
    }
    __name(d2, "d2");
    function h2(e3, t3, n3, r2, o3) {
      if (u2.isStatic) u2.renderStyles(e3, P, n3, o3);
      else {
        var s2 = y({}, t3, { theme: Oe(t3, r2, d2.defaultProps) });
        u2.renderStyles(e3, s2, n3, o3);
      }
    }
    __name(h2, "h2");
    return "production" !== define_process_default.env.NODE_ENV && Pe(a2), r$1.memo(d2);
  }
  __name($e, "$e");
  "production" !== define_process_default.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "production" !== define_process_default.env.NODE_ENV && "test" !== define_process_default.env.NODE_ENV && "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
  const useFetch = /* @__PURE__ */ __name(() => {
    const [data, setData] = r$1.useState();
    const [loading, setLoading] = r$1.useState(false);
    const [error, setError] = r$1.useState(false);
    const [url, setUrl] = r$1.useState("");
    r$1.useEffect(() => {
      if (!url) return;
      const fetchData = /* @__PURE__ */ __name(() => {
        setError(null);
        setLoading(true);
        try {
          fetch(url).then((res) => res.json()).then((result) => {
            setData(result);
            setLoading(false);
          }).catch((err) => {
            setError(err);
            setLoading(false);
          });
        } catch (err) {
          setError(err);
        }
      }, "fetchData");
      fetchData();
    }, [url]);
    return [{ data, loading, error }, setUrl];
  }, "useFetch");
  const spreadClasses = /* @__PURE__ */ __name((classes) => (classes || []).join(" "), "spreadClasses");
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  __name(_typeof, "_typeof");
  function _setPrototypeOf(o2, p2) {
    _setPrototypeOf = Object.setPrototypeOf || /* @__PURE__ */ __name(function _setPrototypeOf2(o22, p22) {
      o22.__proto__ = p22;
      return o22;
    }, "_setPrototypeOf2");
    return _setPrototypeOf(o2, p2);
  }
  __name(_setPrototypeOf, "_setPrototypeOf");
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  __name(_isNativeReflectConstruct, "_isNativeReflectConstruct");
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = /* @__PURE__ */ __name(function _construct2(Parent2, args2, Class2) {
        var a2 = [null];
        a2.push.apply(a2, args2);
        var Constructor = Function.bind.apply(Parent2, a2);
        var instance = new Constructor();
        if (Class2) _setPrototypeOf(instance, Class2.prototype);
        return instance;
      }, "_construct2");
    }
    return _construct.apply(null, arguments);
  }
  __name(_construct, "_construct");
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  __name(_toConsumableArray, "_toConsumableArray");
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  __name(_arrayWithoutHoles, "_arrayWithoutHoles");
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  __name(_iterableToArray, "_iterableToArray");
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2) return;
    if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set") return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
  }
  __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
    return arr2;
  }
  __name(_arrayLikeToArray, "_arrayLikeToArray");
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  __name(_nonIterableSpread, "_nonIterableSpread");
  var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze, seal = Object.seal, create = Object.create;
  var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
  if (!apply) {
    apply = /* @__PURE__ */ __name(function apply2(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    }, "apply2");
  }
  if (!freeze) {
    freeze = /* @__PURE__ */ __name(function freeze2(x2) {
      return x2;
    }, "freeze2");
  }
  if (!seal) {
    seal = /* @__PURE__ */ __name(function seal2(x2) {
      return x2;
    }, "seal2");
  }
  if (!construct) {
    construct = /* @__PURE__ */ __name(function construct2(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    }, "construct2");
  }
  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function(thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }
  __name(unapply, "unapply");
  function unconstruct(func) {
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }
  __name(unconstruct, "unconstruct");
  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;
    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
    if (setPrototypeOf) {
      setPrototypeOf(set, null);
    }
    var l2 = array.length;
    while (l2--) {
      var element = array[l2];
      if (typeof element === "string") {
        var lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          if (!isFrozen(array)) {
            array[l2] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }
  __name(addToSet, "addToSet");
  function clone(object) {
    var newObject = create(null);
    var property;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }
    return newObject;
  }
  __name(clone, "clone");
  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === "function") {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue(element) {
      console.warn("fallback value for", element);
      return null;
    }
    __name(fallbackValue, "fallbackValue");
    return fallbackValue;
  }
  __name(lookupGetter, "lookupGetter");
  var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
  var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  var text = freeze(["#text"]);
  var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
  var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
  var IS_ALLOWED_URI = seal(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(
    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
    // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);
  var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var getGlobal = /* @__PURE__ */ __name(function getGlobal2() {
    return typeof window === "undefined" ? null : window;
  }, "getGlobal2");
  var _createTrustedTypesPolicy = /* @__PURE__ */ __name(function _createTrustedTypesPolicy2(trustedTypes, document2) {
    if (_typeof(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") {
      return null;
    }
    var suffix = null;
    var ATTR_NAME = "data-tt-policy-suffix";
    if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document2.currentScript.getAttribute(ATTR_NAME);
    }
    var policyName = "dompurify" + (suffix ? "#" + suffix : "");
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: /* @__PURE__ */ __name(function createHTML(html2) {
          return html2;
        }, "createHTML"),
        createScriptURL: /* @__PURE__ */ __name(function createScriptURL(scriptUrl) {
          return scriptUrl;
        }, "createScriptURL")
      });
    } catch (_2) {
      console.warn("TrustedTypes policy " + policyName + " could not be created.");
      return null;
    }
  }, "_createTrustedTypesPolicy2");
  function createDOMPurify() {
    var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
    var DOMPurify = /* @__PURE__ */ __name(function DOMPurify2(root) {
      return createDOMPurify(root);
    }, "DOMPurify2");
    DOMPurify.version = "2.5.7";
    DOMPurify.removed = [];
    if (!window2 || !window2.document || window2.document.nodeType !== 9) {
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    var originalDocument = window2.document;
    var document2 = window2.document;
    var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window2.HTMLFormElement, DOMParser2 = window2.DOMParser, trustedTypes = window2.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
    var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
    var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
    var getParentNode = lookupGetter(ElementPrototype, "parentNode");
    if (typeof HTMLTemplateElement === "function") {
      var template = document2.createElement("template");
      if (template.content && template.content.ownerDocument) {
        document2 = template.content.ownerDocument;
      }
    }
    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
    var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};
    try {
      documentMode = clone(document2).documentMode ? document2.documentMode : {};
    } catch (_2) {
    }
    var hooks = {};
    DOMPurify.isSupported = typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0 && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    var FORBID_TAGS = null;
    var FORBID_ATTR = null;
    var ALLOW_ARIA_ATTR = true;
    var ALLOW_DATA_ATTR = true;
    var ALLOW_UNKNOWN_PROTOCOLS = false;
    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    var SAFE_FOR_TEMPLATES = false;
    var SAFE_FOR_XML = true;
    var WHOLE_DOCUMENT = false;
    var SET_CONFIG = false;
    var FORCE_BODY = false;
    var RETURN_DOM = false;
    var RETURN_DOM_FRAGMENT = false;
    var RETURN_TRUSTED_TYPE = false;
    var SANITIZE_DOM = true;
    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
    var KEEP_CONTENT = true;
    var IN_PLACE = false;
    var USE_PROFILES = {};
    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
    var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
    var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
    var transformCaseFunc;
    var CONFIG = null;
    var formElement = document2.createElement("form");
    var isRegexOrFunction = /* @__PURE__ */ __name(function isRegexOrFunction2(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    }, "isRegexOrFunction2");
    var _parseConfig = /* @__PURE__ */ __name(function _parseConfig2(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      if (!cfg || _typeof(cfg) !== "object") {
        cfg = {};
      }
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
      transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
      ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
        clone(DEFAULT_URI_SAFE_ATTRIBUTES),
        // eslint-disable-line indent
        cfg.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        transformCaseFunc
        // eslint-disable-line indent
      ) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
        clone(DEFAULT_DATA_URI_TAGS),
        // eslint-disable-line indent
        cfg.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        transformCaseFunc
        // eslint-disable-line indent
      ) : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
      RETURN_DOM = cfg.RETURN_DOM || false;
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
      FORCE_BODY = cfg.FORCE_BODY || false;
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
      IN_PLACE = cfg.IN_PLACE || false;
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      if (KEEP_CONTENT) {
        ALLOWED_TAGS["#text"] = true;
      }
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
      }
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ["tbody"]);
        delete FORBID_TAGS.tbody;
      }
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    }, "_parseConfig2");
    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
    var HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    var _checkValidNamespace = /* @__PURE__ */ __name(function _checkValidNamespace2(element) {
      var parent = getParentNode(element);
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: "template"
        };
      }
      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "svg";
        }
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === "math";
        }
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
        }
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }
      if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }
      return false;
    }, "_checkValidNamespace2");
    var _forceRemove = /* @__PURE__ */ __name(function _forceRemove2(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        node.parentNode.removeChild(node);
      } catch (_2) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_22) {
          node.remove();
        }
      }
    }, "_forceRemove2");
    var _removeAttribute = /* @__PURE__ */ __name(function _removeAttribute2(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_2) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name);
      if (name === "is" && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_2) {
          }
        } else {
          try {
            node.setAttribute(name, "");
          } catch (_2) {
          }
        }
      }
    }, "_removeAttribute2");
    var _initDocument = /* @__PURE__ */ __name(function _initDocument2(dirty) {
      var doc;
      var leadingWhitespace;
      if (FORCE_BODY) {
        dirty = "<remove></remove>" + dirty;
      } else {
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
      }
      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser2().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_2) {
        }
      }
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, "template", null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_2) {
        }
      }
      var body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    }, "_initDocument2");
    var _createIterator = /* @__PURE__ */ __name(function _createIterator2(root) {
      return createNodeIterator.call(
        root.ownerDocument || root,
        root,
        // eslint-disable-next-line no-bitwise
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
        null,
        false
      );
    }, "_createIterator2");
    var _isClobbered = /* @__PURE__ */ __name(function _isClobbered2(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
    }, "_isClobbered2");
    var _isNode = /* @__PURE__ */ __name(function _isNode2(object) {
      return _typeof(Node) === "object" ? object instanceof Node : object && _typeof(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
    }, "_isNode2");
    var _executeHook = /* @__PURE__ */ __name(function _executeHook2(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], function(hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    }, "_executeHook2");
    var _sanitizeElements = /* @__PURE__ */ __name(function _sanitizeElements2(currentNode) {
      var content;
      _executeHook("beforeSanitizeElements", currentNode, null);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);
        return true;
      }
      var tagName = transformCaseFunc(currentNode.nodeName);
      _executeHook("uponSanitizeElement", currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });
      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      if (currentNode.nodeType === 7) {
        _forceRemove(currentNode);
        return true;
      }
      if (SAFE_FOR_XML && currentNode.nodeType === 8 && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            var childCount = childNodes.length;
            for (var i2 = childCount - 1; i2 >= 0; --i2) {
              var childClone = cloneNode(childNodes[i2], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, " ");
        content = stringReplace(content, ERB_EXPR$1, " ");
        content = stringReplace(content, TMPLIT_EXPR$1, " ");
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      _executeHook("afterSanitizeElements", currentNode, null);
      return false;
    }, "_sanitizeElements2");
    var _isValidAttribute = /* @__PURE__ */ __name(function _isValidAttribute2(lcTag, lcName, value) {
      if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
        return false;
      }
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ;
      else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;
      else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
        ) ;
        else {
          return false;
        }
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
      else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
      else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
      else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
      else if (value) {
        return false;
      } else ;
      return true;
    }, "_isValidAttribute2");
    var _basicCustomElementTest = /* @__PURE__ */ __name(function _basicCustomElementTest2(tagName) {
      return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT$1);
    }, "_basicCustomElementTest2");
    var _sanitizeAttributes = /* @__PURE__ */ __name(function _sanitizeAttributes2(currentNode) {
      var attr;
      var value;
      var lcName;
      var l2;
      _executeHook("beforeSanitizeAttributes", currentNode, null);
      var attributes = currentNode.attributes;
      if (!attributes) {
        return;
      }
      var hookEvent = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l2 = attributes.length;
      while (l2--) {
        attr = attributes[l2];
        var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
        value = name === "value" ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = void 0;
        _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
        value = hookEvent.attrValue;
        if (hookEvent.forceKeepAttr) {
          continue;
        }
        _removeAttribute(name, currentNode);
        if (!hookEvent.keepAttr) {
          continue;
        }
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, " ");
          value = stringReplace(value, ERB_EXPR$1, " ");
          value = stringReplace(value, TMPLIT_EXPR$1, " ");
        }
        var lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
          _removeAttribute(name, currentNode);
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        if (trustedTypesPolicy && _typeof(trustedTypes) === "object" && typeof trustedTypes.getAttributeType === "function") {
          if (namespaceURI) ;
          else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case "TrustedHTML": {
                value = trustedTypesPolicy.createHTML(value);
                break;
              }
              case "TrustedScriptURL": {
                value = trustedTypesPolicy.createScriptURL(value);
                break;
              }
            }
          }
        }
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_2) {
        }
      }
      _executeHook("afterSanitizeAttributes", currentNode, null);
    }, "_sanitizeAttributes2");
    var _sanitizeShadowDOM = /* @__PURE__ */ __name(function _sanitizeShadowDOM2(fragment) {
      var shadowNode;
      var shadowIterator = _createIterator(fragment);
      _executeHook("beforeSanitizeShadowDOM", fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        _executeHook("uponSanitizeShadowNode", shadowNode, null);
        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM2(shadowNode.content);
        }
        _sanitizeAttributes(shadowNode);
      }
      _executeHook("afterSanitizeShadowDOM", fragment, null);
    }, "_sanitizeShadowDOM2");
    DOMPurify.sanitize = function(dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = "<!-->";
      }
      if (typeof dirty !== "string" && !_isNode(dirty)) {
        if (typeof dirty.toString === "function") {
          dirty = dirty.toString();
          if (typeof dirty !== "string") {
            throw typeErrorCreate("dirty is not a string, aborting");
          }
        } else {
          throw typeErrorCreate("toString is not a function");
        }
      }
      if (!DOMPurify.isSupported) {
        if (_typeof(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
          if (typeof dirty === "string") {
            return window2.toStaticHTML(dirty);
          }
          if (_isNode(dirty)) {
            return window2.toStaticHTML(dirty.outerHTML);
          }
        }
        return dirty;
      }
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      DOMPurify.removed = [];
      if (typeof dirty === "string") {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
          }
        }
      } else if (dirty instanceof Node) {
        body = _initDocument("<!---->");
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
          body = importedNode;
        } else if (importedNode.nodeName === "HTML") {
          body = importedNode;
        } else {
          body.appendChild(importedNode);
        }
      } else {
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf("<") === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        body = _initDocument(dirty);
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
        }
      }
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      while (currentNode = nodeIterator.nextNode()) {
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        if (_sanitizeElements(currentNode)) {
          continue;
        }
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        _sanitizeAttributes(currentNode);
        oldNode = currentNode;
      }
      oldNode = null;
      if (IN_PLACE) {
        return dirty;
      }
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
      }
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, " ");
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify.setConfig = function(cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    DOMPurify.clearConfig = function() {
      CONFIG = null;
      SET_CONFIG = false;
    };
    DOMPurify.isValidAttribute = function(tag, attr, value) {
      if (!CONFIG) {
        _parseConfig({});
      }
      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify.addHook = function(entryPoint, hookFunction) {
      if (typeof hookFunction !== "function") {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify.removeHook = function(entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    DOMPurify.removeHooks = function(entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    DOMPurify.removeAllHooks = function() {
      hooks = {};
    };
    return DOMPurify;
  }
  __name(createDOMPurify, "createDOMPurify");
  var purify = createDOMPurify();
  const sanitizeDangerousMarkup = /* @__PURE__ */ __name((content) => {
    return { __html: purify.sanitize(content) };
  }, "sanitizeDangerousMarkup");
  function* idGenerator(key = "id-", startIndex = 0) {
    let i2 = startIndex;
    while (true) {
      i2 += 1;
      yield key + i2;
    }
  }
  __name(idGenerator, "idGenerator");
  function getCurrentScriptPath() {
    const match = (
      // @ts-ignore
      (document.currentScript && document.currentScript.src || "").match(/(.*\/)/)
    );
    return match && match.length > 0 ? match[0].substr(0, match[0].length - 1) : "./";
  }
  __name(getCurrentScriptPath, "getCurrentScriptPath");
  PropTypes.shape({
    event: PropTypes.string,
    action: PropTypes.string,
    name: PropTypes.string,
    region: PropTypes.string,
    section: PropTypes.string,
    component: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string
  });
  function trackReactComponent({
    packageName = "",
    component = "",
    type = "",
    configuration = {}
  }) {
    if (!packageName || !component) {
      console.error("trackReactComponent: Missing required arguments.");
      return;
    }
    window.uds = window.uds || {};
    window.uds.package = window.uds.package || {};
    window.uds.package[packageName] = {
      component,
      type,
      configuration
    };
  }
  __name(trackReactComponent, "trackReactComponent");
  const ApplyNow = /* @__PURE__ */ __name(({ href = null }) => (
    // @ts-ignore
    /* @__PURE__ */ jsxRuntimeExports.jsx(Qn, { label: "Apply now", ariaLabel: "Apply now", href, color: "gold" })
  ), "ApplyNow");
  ApplyNow.propTypes = {
    href: PropTypes.string
  };
  ({
    href: PropTypes.string
  });
  function MessageAlert({ message, type }) {
    const [closed, setClosed] = r$1.useState("");
    const alerts = {
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
    };
    const alert = alerts[type];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-testid": "message-alert",
        className: `alert ${alert.className}`,
        role: "alert",
        style: {
          display: closed,
          position: "sticky",
          top: 0,
          zIndex: 100
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-label": alert.ariaLabel,
              className: `fa fa-icon ${alert.icon}`
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert-content", children: message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert-close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "btn btn-circle btn-circle-alt-black close",
              "aria-label": "Close",
              onClick: /* @__PURE__ */ __name(() => setClosed("none"), "onClick"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-times" })
            }
          ) })
        ]
      }
    );
  }
  __name(MessageAlert, "MessageAlert");
  MessageAlert.propTypes = {
    type: PropTypes.oneOf(["error", "info"]).isRequired,
    message: PropTypes.string.isRequired
  };
  function ErrorAlert({ message }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MessageAlert, { message, type: "error" });
  }
  __name(ErrorAlert, "ErrorAlert");
  function InfoAlert({ message }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MessageAlert, { message, type: "info" });
  }
  __name(InfoAlert, "InfoAlert");
  const Container = qe.div`
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
  function Loader() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { "data-testid": "loader", className: "container ball-loader mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ball-loader-ball ball1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ball-loader-ball ball2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ball-loader-ball ball3" })
    ] });
  }
  __name(Loader, "Loader");
  PropTypes.shape({
    color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
    content: PropTypes.shape({
      icon: PropTypes.string,
      header: PropTypes.string,
      body: PropTypes.string
    })
  });
  const buttonPropShape = PropTypes.shape({
    ariaLabel: PropTypes.string,
    color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
    icon: PropTypes.string,
    href: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(["default", "small", "xsmall"])
  });
  const imagePropType = {
    url: PropTypes.string,
    altText: PropTypes.string,
    cssClass: PropTypes.arrayOf(PropTypes.string)
  };
  const contentPropType = {
    text: PropTypes.string,
    cssClass: PropTypes.arrayOf(PropTypes.string)
  };
  const videoPropType = {
    type: PropTypes.oneOf(["video", "youtube"]),
    url: PropTypes.string,
    altText: PropTypes.string,
    vttUrl: PropTypes.string,
    title: PropTypes.string
  };
  const linkPropType = {
    url: PropTypes.string,
    text: PropTypes.string,
    isActive: PropTypes.bool
  };
  const imagePropShape = PropTypes.shape({
    ...imagePropType
  });
  const contentPropShape = PropTypes.shape({
    ...contentPropType
  });
  const videoPropShape = PropTypes.shape({
    ...videoPropType
  });
  const linkPropShape = PropTypes.shape({
    ...linkPropType
  });
  const dataSourcePropShape = PropTypes.shape({
    id: PropTypes.string,
    sourceType: PropTypes.oneOf(["api", "shared-data-source", "static-json"]),
    // default `api`
    sharedDataSourceId: PropTypes.string,
    // only if `dataSourceType == "shared-data-source"``
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.arrayOf(PropTypes.object),
    // only if `dataSourceType == "static-json"``
    apiUrl: PropTypes.string
    // only if `dataSourceType == "api"``
  });
  const glanceItemPropShape = PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  });
  const cardPropShape = PropTypes.shape({
    icon: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    content: PropTypes.string,
    buttonLink: buttonPropShape
  });
  const flexibleDegreeOptionsLinks = PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  );
  const exampleCareersTableDataPropShape = PropTypes.shape({
    career: linkPropShape,
    growth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    medianSalary: PropTypes.string,
    brightOutlook: PropTypes.bool,
    greenOccupation: PropTypes.bool
  });
  const columSettingsPropType = {
    hideCollegeSchool: PropTypes.bool,
    defaultView: PropTypes.oneOf(["list-view", "grid-view"]),
    cardDefaultImage: imagePropShape
  };
  const columSettingsPropShape = PropTypes.shape({
    ...columSettingsPropType
  });
  const anchorMenuPropType = {
    atAGlance: PropTypes.bool,
    applicationRequirements: PropTypes.bool,
    changeMajorRequirements: PropTypes.bool,
    nextSteps: PropTypes.bool,
    affordingCollege: PropTypes.bool,
    flexibleDegreeOptions: PropTypes.bool,
    careerOutlook: PropTypes.bool,
    exampleCareers: PropTypes.bool,
    customizeYourCollegeExperience: PropTypes.bool,
    globalOpportunity: PropTypes.bool,
    attendOnline: PropTypes.bool,
    whyChooseAsu: PropTypes.bool,
    programContactInfo: PropTypes.bool,
    externalAnchors: PropTypes.arrayOf(
      PropTypes.shape({
        targetIdName: PropTypes.string,
        text: PropTypes.string
      })
    )
  };
  const whyChooseAsuCardShape = PropTypes.shape({
    image: imagePropShape,
    title: PropTypes.string,
    text: PropTypes.string,
    button: buttonPropShape
  });
  const whyChooseAsuCardsShape = PropTypes.shape({
    faculty: whyChooseAsuCardShape,
    programs: whyChooseAsuCardShape,
    research: whyChooseAsuCardShape,
    inclusion: whyChooseAsuCardShape,
    mentors: whyChooseAsuCardShape,
    honors: whyChooseAsuCardShape
  });
  const whyChooseAsuShape = {
    hide: PropTypes.bool,
    sectionIntroText: PropTypes.string,
    cards: whyChooseAsuCardsShape,
    defaultCards: whyChooseAsuCardsShape
  };
  PropTypes.shape({
    ...anchorMenuPropType
  });
  const optionItemShape = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.string
  });
  const filterValueShape = PropTypes.shape({
    locations: PropTypes.arrayOf(optionItemShape),
    asuLocals: PropTypes.arrayOf(optionItemShape),
    acceleratedConcurrent: optionItemShape
  });
  const tagHeadings = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
  };
  const tagHeadingList = Object.values(tagHeadings);
  const glanceItemsMap = {
    offeredBy: { icon: "university", title: "Offered by" },
    locations: { icon: "map-marker-alt", title: "Location" },
    firstRequirementMathCourse: {
      icon: "pencil-alt",
      title: "First Required math Course"
    },
    mathIntensity: { icon: "calculator", title: "Math intensity" },
    timeCommitment: { icon: "calendar-alt", title: "Time commitment" }
  };
  const GRID_VIEW_ID = "grid-view";
  const LIST_VIEW_ID = "list-view";
  const GRID_PROGRAMS_ID = "degree-list-programs";
  const ERROR_MESSAGE = "Sorry, Something went wrong.";
  const STEM_OPT_HEADER_TEXT = "STEM-OPT for international students on F-1 visas";
  const PROGRAM_NOT_FOUND_TEXT = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`;
  const currentScriptPath = getCurrentScriptPath();
  const resolveDefaultProps = /* @__PURE__ */ __name((appPathFolder) => {
    const scriptPath = appPathFolder || currentScriptPath;
    const detailImageFolder = `${scriptPath}/assets/img/detail-page`;
    const listingImageFolder = `${scriptPath}/assets/img/listing-page`;
    const detailPageDefault = {
      dataSource: void 0,
      introContent: {
        image: {
          url: `${detailImageFolder}/intro.jpg`,
          altText: "Detail Page Degree"
        }
      },
      hero: {
        image: {
          url: `${detailImageFolder}/hero.jpg`,
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
              url: `${detailImageFolder}/customize-faculty-600.jpg`,
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
              url: `${detailImageFolder}/customize-programs-600.jpg`,
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
              url: `${detailImageFolder}/customize-research-600.jpg`,
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
              url: `${detailImageFolder}/customize-inclusion-600.jpg`,
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
              url: `${detailImageFolder}/customize-mentor-600.jpg`,
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
              url: `${detailImageFolder}/customize-honors-600.jpg`,
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
          url: `${detailImageFolder}/global-opportunity.jpg`,
          altText: "Global opportunity"
        }
      },
      careerOutlook: {
        image: {
          url: `${detailImageFolder}/career-outlook.jpg`,
          altText: "Career Outlook"
        }
      },
      attendOnline: {
        image: {
          url: `${detailImageFolder}/attend-online.jpg`,
          altText: "Attend online"
        }
      }
    };
    const listingPageDefault = {
      actionUrls: {
        applyNowUrl: "https://admission.asu.edu/apply"
      },
      hero: {
        image: {
          url: `${listingImageFolder}/hero.jpg`,
          altText: "Listing Page Degree",
          size: "medium"
        }
      },
      programList: void 0
    };
    return {
      detailPageDefault,
      listingPageDefault
    };
  }, "resolveDefaultProps");
  const resolveListingHeroTitle = /* @__PURE__ */ __name((dataSource) => {
    if (typeof dataSource === "string") return "Degrees";
    const { program, cert } = dataSource;
    if (program === "undergrad" && cert === "true")
      return "Undergraduate Minors and Certificates";
    if (program === "undergrad") return "Undergraduate Degrees";
    if (program === "graduate" && cert === "true") return "Graduate Certificates";
    if (program === "graduate") return "Graduate Degrees";
    return "Degrees";
  }, "resolveListingHeroTitle");
  const locationOptions = [
    { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
    { id: 1, value: "POLY", text: "Polytechnic campus" },
    { id: 2, value: "TEMPE", text: "Tempe campus" },
    { id: 3, value: "WEST", text: "West Valley campus" },
    { id: 4, value: "ONLNE", text: "ASU Online" }
  ];
  const onlneOption = locationOptions[4];
  const asuLocalOptions = [
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
  ];
  const acceleratedConcurrentOptions = [
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
  ];
  const defaultAccelConcOption = acceleratedConcurrentOptions[0];
  const isAccelConcValid = /* @__PURE__ */ __name((opt) => (opt == null ? void 0 : opt.value) && (opt == null ? void 0 : opt.value) !== "all", "isAccelConcValid");
  const getFullCampusLocalText = /* @__PURE__ */ __name((opt) => {
    var _a;
    return ((_a = [
      ...locationOptions,
      ...asuLocalOptions,
      ...acceleratedConcurrentOptions
    ].find(({ value }) => value === opt)) == null ? void 0 : _a.text) || opt;
  }, "getFullCampusLocalText");
  const progDetailSectionIds = {
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
  };
  const campusDefinitions = {
    "TEMPE": {
      text: "Tempe campus",
      url: "https://campus.asu.edu/tempe"
    },
    "POLY": {
      text: "Polytechnic campus",
      url: "https://campus.asu.edu/polytechnic"
    },
    "WEST": {
      text: "West Valley campus",
      url: "https://campus.asu.edu/west"
    },
    "DTPHX": {
      text: "Downtown Phoenix campus",
      url: "https://campus.asu.edu/downtown-phoenix"
    },
    "EAC": {
      text: "",
      url: "https://admission.asu.edu/transfer/thegilavalley"
    },
    "CAC": {
      text: "",
      url: "https://admission.asu.edu/transfer/pinal"
    },
    "ONLNE": {
      text: "Online",
      url: "https://asuonline.asu.edu"
    },
    "CALHC": {
      text: "Lake Havasu",
      url: "https://havasu.asu.edu"
    },
    "COCHS": {
      text: "",
      url: "https://admission.asu.edu/transfer/asu-cochise"
    },
    "WASHD": {
      text: "",
      url: "https://washingtondc.asu.edu"
    },
    "YAVAP": {
      text: "",
      url: "https://admission.asu.edu/transfer/asuyavapai"
    },
    "PIMA": {
      text: "",
      url: "https://admission.asu.edu/transfer/pima"
    },
    "NEAZ": {
      text: "",
      url: "https://admission.asu.edu/transfer/asu-northeastern-arizona"
    },
    "LOSAN": {
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
    "MXCTY": {
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
  };
  const findCampusDefinition = /* @__PURE__ */ __name((campus, program) => {
    const specialCases = ["TUCSN", "AWC"];
    const campusKey = campus.toUpperCase();
    const searchKey = specialCases.includes(campusKey) ? `${campusKey}-${program}` : campusKey;
    return campusDefinitions[searchKey];
  }, "findCampusDefinition");
  function OnThisPageAnchorMenu({ anchorMenu }) {
    var _a, _b;
    const externalAnchors = (_a = anchorMenu == null ? void 0 : anchorMenu.externalAnchors) == null ? void 0 : _a.map((anchorItem) => {
      const { targetIdName, text: text2 } = anchorItem;
      return {
        targetIdName: targetIdName.startsWith("#") ? targetIdName.substring(1) : targetIdName,
        text: text2,
        icon: null
      };
    });
    const anchorList = Object.keys(progDetailSectionIds).filter((key) => anchorMenu[key]).map((key) => progDetailSectionIds[key]).concat(externalAnchors || []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Kn,
      {
        items: anchorList,
        firstElementId: (_b = anchorList[0]) == null ? void 0 : _b.targetIdName,
        focusFirstFocusableElement: false
      }
    );
  }
  __name(OnThisPageAnchorMenu, "OnThisPageAnchorMenu");
  OnThisPageAnchorMenu.propTypes = {
    anchorMenu: PropTypes.shape(anchorMenuPropType)
  };
  function computePages(records, pages) {
    const quotient = Math.floor(records / pages);
    const remainder = records % pages;
    return quotient + (remainder > 0 ? 1 : 0);
  }
  __name(computePages, "computePages");
  const DOMAIN_URL = "https://degrees.apps.asu.edu";
  const ACAD_PLAN_ENDPOINT = "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/";
  const listingPageDefaultDataSource = {
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
  };
  const detailPageDefaultDataSource = {
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
  };
  const formatAcceleratedConcurrentLinks = /* @__PURE__ */ __name((links) => {
    return links.map((link) => ({
      title: link.acadPlanDescription,
      url: link.academicOfficeUrl
    })).sort((a2, b2) => a2.title.localeCompare(b2.title));
  }, "formatAcceleratedConcurrentLinks");
  const formatCareerData = /* @__PURE__ */ __name((careerData) => careerData == null ? void 0 : careerData.map((data) => ({
    career: {
      text: data.alternateTitle,
      url: `${DOMAIN_URL}/career-details/${data.onetCode}`
    },
    growth: data.growth,
    medianSalary: data.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }),
    brightOutlook: !!data.brightOutlook,
    greenOccupation: !!data.green
  })), "formatCareerData");
  function urlResolver(dataSource, defaultDataSource) {
    const httpParameters = { ...defaultDataSource, ...dataSource };
    if (httpParameters.collegeAcadOrg) {
      httpParameters["collegeOrg"] = httpParameters["collegeAcadOrg"];
      delete httpParameters["collegeAcadOrg"];
    }
    if (httpParameters.program) {
      const { program } = httpParameters;
      if (httpParameters.cert === "true" && program === "undergrad") {
        httpParameters["degreeType"] = "UGCM";
      } else if (program === "graduate") {
        httpParameters["degreeType"] = "GR";
      } else {
        httpParameters["degreeType"] = "UG";
      }
      delete httpParameters["program"];
    }
    if (httpParameters.acadPlan) {
      httpParameters.endpoint += `/${httpParameters.acadPlan}`;
      delete httpParameters["acadPlan"];
    }
    const { endpoint, include, ...keyValues } = httpParameters;
    const formattedIncludes = include.split(",").map((item) => `include=${item.trim()}`).join("&");
    const params = Object.keys(keyValues).reduce(
      (accumulator, paramName) => `${accumulator}&${paramName}=${httpParameters[paramName]}`,
      ""
    );
    return `${endpoint}?${params}&${formattedIncludes}`;
  }
  __name(urlResolver, "urlResolver");
  function parseHeading(title, defaultHeading = "h2") {
    return (
      /** @type {keyof JSX.IntrinsicElements} */
      tagHeadingList.includes(title.component) ? title.component : defaultHeading
    );
  }
  __name(parseHeading, "parseHeading");
  function toTitleCase(str) {
    if (typeof str !== "string") return console.error("Invalid string", str);
    return str == null ? void 0 : str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }
  __name(toTitleCase, "toTitleCase");
  function isHtml(text2) {
    return /<\/?[a-z][\s\S]*>/i.test(text2);
  }
  __name(isHtml, "isHtml");
  const KEY = "AsuDevTools";
  const devTools = {
    isDebug: false
  };
  function isDebugActive() {
    const settings = JSON.parse(localStorage.getItem(KEY));
    return settings == null ? void 0 : settings.isDebug;
  }
  __name(isDebugActive, "isDebugActive");
  window.__AsuDevTools = {
    enableDebug(isDebug) {
      const settings = JSON.stringify({
        ...devTools,
        isDebug
      });
      localStorage.setItem(KEY, settings);
    }
  };
  async function fetchAcademicPlans(acadPlanCodes) {
    if (acadPlanCodes == null ? void 0 : acadPlanCodes.length) {
      const results = await Promise.all(
        acadPlanCodes.map(async (code) => {
          try {
            const response = await Promise.race([
              fetch(
                `${ACAD_PLAN_ENDPOINT}${code}?include=academicOfficeUrl&include=acadPlanDescription`
              ),
              // Timeout after 5 seconds
              new Promise(
                (_2, reject) => setTimeout(() => reject(new Error("timeout")), 1e4)
              )
            ]);
            const data = await response.json();
            return data;
          } catch (error) {
            console.error(
              `Error fetching academic plan for code ${code}:`,
              error
            );
            return null;
          }
        })
      );
      return results.filter((result) => result !== null);
    }
    return [];
  }
  __name(fetchAcademicPlans, "fetchAcademicPlans");
  function executePromisesAndUpdateState(promises, stateUpdateFunction) {
    Promise.all(promises).then((results) => {
      const accelerateData = results[0];
      const concurrentData = results[1];
      stateUpdateFunction({ accelerateData, concurrentData });
    }).catch(() => {
      stateUpdateFunction({ accelerateData: [], concurrentData: [] });
    });
  }
  __name(executePromisesAndUpdateState, "executePromisesAndUpdateState");
  function ParagrapList({ contents = [] }) {
    const genId = idGenerator("paragrap-");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: contents.map(
      (content) => isHtml(content.text) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          dangerouslySetInnerHTML: sanitizeDangerousMarkup(content.text)
        },
        genId.next().value
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: `${spreadClasses(content.cssClass)}`,
          children: content.text
        },
        genId.next().value
      )
    ) });
  }
  __name(ParagrapList, "ParagrapList");
  ParagrapList.propTypes = {
    contents: PropTypes.arrayOf(contentPropShape)
  };
  const GlobalStyle$1 = $e`
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
`;
  const ContentWrapper = qe.div`
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
`;
  const OverlapImage = qe.img`
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
  function OverlapContentImage({
    title,
    image,
    contentDirection = "left",
    contents = [],
    contentChildren = null,
    headingTag = "H3"
  }) {
    const textAreaRef = r$1.useRef();
    const imgRef = r$1.useRef();
    const Heading = parseHeading(headingTag);
    function computeImageHeight() {
      const PERCENTAGE_INCREASE = 1.2;
      const textAreaHeight = textAreaRef.current.offsetHeight;
      imgRef.current.style.height = `${textAreaHeight * PERCENTAGE_INCREASE}px`;
    }
    __name(computeImageHeight, "computeImageHeight");
    r$1.useEffect(() => {
      computeImageHeight();
      let timeoutId;
      const resizeListener = /* @__PURE__ */ __name(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => computeImageHeight(), 150);
      }, "resizeListener");
      window.addEventListener("resize", resizeListener);
      return () => window.removeEventListener("resize", resizeListener);
    }, [imgRef, textAreaRef]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `uds-image-overlap content-${contentDirection}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyle$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        OverlapImage,
        {
          ref: imgRef,
          className: "img-fluid",
          src: image == null ? void 0 : image.url,
          alt: image == null ? void 0 : image.altText,
          onError: /* @__PURE__ */ __name((e) => {
            e.currentTarget.style.display = "none";
          }, "onError")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ContentWrapper, { ref: textAreaRef, className: "content-wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ParagrapList, { contents }),
        contentChildren
      ] })
    ] });
  }
  __name(OverlapContentImage, "OverlapContentImage");
  OverlapContentImage.propTypes = {
    headingTag: PropTypes.string,
    title: PropTypes.string,
    contentDirection: PropTypes.oneOf(["left", "right"]),
    contents: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    image: imagePropShape,
    contentChildren: PropTypes.element
  };
  const ThemeStyle = $e`
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
`;
  const Main$1 = qe.main`
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
  function BaseStateIconButton({
    baseIconClassName1,
    baseIconAriaLabel1,
    baseIconStyle1,
    baseIconAriaLabel2,
    baseIconClassName2,
    baseIconStyle2,
    ariaLabel,
    ariaControls,
    dataId,
    onClick = /* @__PURE__ */ __name(() => null, "onClick")
  }) {
    const [selected, setSelected] = r$1.useState(false);
    const baseIcon = /* @__PURE__ */ __name((iconClassName, display, icoAriaLabel, style) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        style: {
          cursor: "pointer",
          display
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "i",
          {
            className: `${iconClassName}`,
            "aria-label": icoAriaLabel,
            title: icoAriaLabel,
            style
          }
        )
      }
    ), "baseIcon");
    const onClickButton = /* @__PURE__ */ __name(() => {
      setSelected(!selected);
      onClick(!selected);
    }, "onClickButton");
    const res = /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        "data-testid": dataId,
        role: "button",
        className: "element-focus",
        tabIndex: 0,
        onKeyDown: /* @__PURE__ */ __name((e) => e.key === "Enter" && onClickButton(), "onKeyDown"),
        onClick: onClickButton,
        "aria-label": ariaLabel,
        "aria-expanded": selected,
        "aria-controls": ariaControls,
        children: [
          baseIcon(
            baseIconClassName1,
            selected ? "" : "none",
            baseIconAriaLabel1,
            baseIconStyle1
          ),
          baseIcon(
            baseIconClassName2,
            selected ? "none" : "",
            baseIconAriaLabel2,
            baseIconStyle2
          )
        ]
      }
    );
    return r$1.useMemo(() => res, [selected]);
  }
  __name(BaseStateIconButton, "BaseStateIconButton");
  qe.div`
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
  const InfoButtonIcon = /* @__PURE__ */ __name((_2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}), "InfoButtonIcon");
  const ChevronIconButton = /* @__PURE__ */ __name(({
    onClick = /* @__PURE__ */ __name(() => null, "onClick"),
    ariaLabel,
    ariaControls,
    dataId
  }) => BaseStateIconButton({
    dataId,
    baseIconClassName1: "fas fa-chevron-up",
    baseIconClassName2: "fas fa-chevron-down",
    onClick,
    ariaLabel,
    ariaControls
  }), "ChevronIconButton");
  const AppContext = r$1.createContext(null);
  const AppProvider = /* @__PURE__ */ __name(({ listPageProps, detailPageProps, children }) => {
    const { detailPageDefault, listingPageDefault } = r$1.useMemo(
      () => resolveDefaultProps((listPageProps || detailPageProps).appPathFolder),
      []
    );
    const defaultState = {
      detailPageDefault,
      listingPageDefault
    };
    const state = {
      listPageProps,
      detailPageProps
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppContext.Provider,
      {
        value: {
          state,
          defaultState
        },
        children
      }
    );
  }, "AppProvider");
  AppProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]),
    listPageProps: PropTypes.shape({}),
    detailPageProps: PropTypes.shape({})
  };
  const useListingPageLogger = /* @__PURE__ */ __name(({
    dataSource,
    tableView = [],
    programs,
    stateFilters
  }) => {
    const { collegeAcadOrg, departmentCode } = dataSource;
    r$1.useEffect(() => {
      if (!programs || !isDebugActive()) return;
      const sharedStyle = "background:#eee; -webkit-text-stroke: 1px black; color: tomato; padding-left: 0.5rem;";
      const titleStyle = "font-size:30px;";
      const titleStyle2 = "font-size:24px;";
      const bodyStyle = "font-size: 18px; margin-left: 0.5rem;";
      console.group("<< ASU Degree Page >>");
      console.log("%c🏫 Listing Page Programs 📚", sharedStyle + titleStyle);
      console.log(
        `%cTotal programs found: ${programs.length}`,
        sharedStyle + bodyStyle
      );
      console.log(`%cPrograms found`, sharedStyle + bodyStyle);
      console.log(programs);
      console.log(
        `%cTotal programs loaded: ${tableView.length}`,
        sharedStyle + bodyStyle
      );
      console.log(`%cPrograms loaded`, sharedStyle + bodyStyle);
      console.log(tableView);
      console.log(`%cPage Filters`, sharedStyle + titleStyle2);
      console.log(
        `%c- collegeAcadOrg:${collegeAcadOrg}`,
        sharedStyle + bodyStyle
      );
      console.log(
        `%c- departmentCode:${departmentCode}`,
        sharedStyle + bodyStyle
      );
      console.log(`%cSearch Filters`, sharedStyle + titleStyle2);
      console.log(stateFilters);
      console.groupEnd();
    });
  }, "useListingPageLogger");
  const isUndergradProgram = /* @__PURE__ */ __name((row) => row["degreeType"] === "UG", "isUndergradProgram");
  const hasGraduateApplyDates = /* @__PURE__ */ __name((row) => {
    var _a;
    return ((_a = row["applicationDeadlines"]) == null ? void 0 : _a.length) > 0;
  }, "hasGraduateApplyDates");
  const hasPlanDeadlines = /* @__PURE__ */ __name((row) => {
    var _a;
    return ((_a = row["applicationDeadlines"]) == null ? void 0 : _a.length) > 0;
  }, "hasPlanDeadlines");
  const isValidActiveProgram = /* @__PURE__ */ __name((row) => Object.keys(row).length > 0 ? hasPlanDeadlines(row) || hasGraduateApplyDates(row) : true, "isValidActiveProgram");
  const getMajorityOwner = /* @__PURE__ */ __name((row) => {
    const { owners } = row;
    if (!owners) return null;
    const majorityOwner = owners.reduce(
      (prev, curr) => prev.percentOwned > curr.percentOwned ? prev : curr
    );
    return majorityOwner;
  }, "getMajorityOwner");
  function degreeDataPropResolverService(row = {}) {
    return {
      getMajorDesc: /* @__PURE__ */ __name(() => row["acadPlanMarketingDescription"], "getMajorDesc"),
      getInstitution: /* @__PURE__ */ __name(() => "ASU00", "getInstitution"),
      getAcadPlan: /* @__PURE__ */ __name(() => row["acadPlanCode"], "getAcadPlan"),
      /** @returns {string} */
      getDegree: /* @__PURE__ */ __name(() => {
        let degree = row["degreeDescriptionShort"] || row["acadPlanTypeDescription"];
        if (degree === "CERT") {
          degree = "Certificate";
        }
        return degree;
      }, "getDegree"),
      /** @returns {string} */
      getGeneralDegreeMajorMap: /* @__PURE__ */ __name(() => {
        const { majorMapGeneral } = row;
        const mostRecentMajorMap = majorMapGeneral == null ? void 0 : majorMapGeneral.find(
          (obj) => obj.defaultFlag === true
        );
        return (mostRecentMajorMap == null ? void 0 : mostRecentMajorMap.url) || "";
      }, "getGeneralDegreeMajorMap"),
      isUndergradProgram: /* @__PURE__ */ __name(() => isUndergradProgram(row), "isUndergradProgram"),
      isPhdOrMasters: /* @__PURE__ */ __name(() => row["degreeDescriptionShort"] !== "CERT", "isPhdOrMasters"),
      // Only called in functions that already checked if its a grad program
      isGradProgram: /* @__PURE__ */ __name(() => row["degreeType"] === "GR", "isGradProgram"),
      // GR is present for grad degrees and grad certificates
      isMinorOrCertificate: /* @__PURE__ */ __name(() => row["degreeType"] === "UGCM" || row["degreeType"] === "GR" && row["acadPlanTypeDescription"] === "Certificate", "isMinorOrCertificate"),
      /** @returns {"undergrad" |  "graduate"} */
      getProgramType: /* @__PURE__ */ __name(() => isUndergradProgram(row) ? "undergrad" : "graduate", "getProgramType"),
      getDegreeDesc: /* @__PURE__ */ __name(() => row["degreeDescriptionLong"], "getDegreeDesc"),
      getDegreeDescLong: /* @__PURE__ */ __name(() => row["degreeDescriptionText"], "getDegreeDescLong"),
      getFullDescription: /* @__PURE__ */ __name(() => row["fullDescription"], "getFullDescription"),
      getCurriculumUrl: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = row["asuOnlineAcadPlanUrl"]) == null ? void 0 : _a.trim();
      }, "getCurriculumUrl"),
      getAdmissionsRequirementsText: /* @__PURE__ */ __name(() => row["admissionsRequirementsText"], "getAdmissionsRequirementsText"),
      getMinorCourseRequirements: /* @__PURE__ */ __name(() => row["minorCourseRequirements"], "getMinorCourseRequirements"),
      getTransferAdmission: /* @__PURE__ */ __name(() => row["transferAdmissionRequirementsText"], "getTransferAdmission"),
      getGraduateRequirements: /* @__PURE__ */ __name(() => {
        const rawRequirement1 = row["graduateDegreeAdditionalRequirements"];
        let gradRequirement1 = "";
        if ((rawRequirement1 == null ? void 0 : rawRequirement1.length) > 0) {
          const flatRequirement1 = rawRequirement1.join(", or<br />");
          gradRequirement1 = flatRequirement1 ? `<p>${flatRequirement1}</p>` : "";
        } else {
          gradRequirement1 = row["degreeMajorMap"];
          return `${gradRequirement1}`;
        }
        const gradRequirement2 = row["degreeRequirements"];
        return `${gradRequirement1}${gradRequirement2}`;
      }, "getGraduateRequirements"),
      isOnline: /* @__PURE__ */ __name(() => row["asuOnlineAcadPlanUrl"], "isOnline"),
      // Returns null if online url is not available
      // See getGeneralDegreeMajorMap for more info
      getOnlineMajorMapURL: /* @__PURE__ */ __name(() => {
        var _a;
        const onlineMajorMaps = row["majorMapOnline"];
        const mostRecentOnlineMajorMap = onlineMajorMaps == null ? void 0 : onlineMajorMaps.find(
          (obj) => obj.defaultFlag === true
        );
        if (!mostRecentOnlineMajorMap)
          return (_a = onlineMajorMaps == null ? void 0 : onlineMajorMaps[onlineMajorMaps.length - 1]) == null ? void 0 : _a.url;
        return (mostRecentOnlineMajorMap == null ? void 0 : mostRecentOnlineMajorMap.url) || "";
      }, "getOnlineMajorMapURL"),
      hasCareerData: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = row["careerData"]) == null ? void 0 : _a.length;
      }, "hasCareerData"),
      getCareerData: /* @__PURE__ */ __name(() => row["careerData"] || [], "getCareerData"),
      /** @return {Object[]} */
      getCampusList: /* @__PURE__ */ __name(() => row["campusesOffered"] || [], "getCampusList"),
      hasConcurrentOrAccelerateDegrees: /* @__PURE__ */ __name(() => {
        var _a, _b;
        return ((_a = row["acceleratedAcadPlanCodes"]) == null ? void 0 : _a.length) || ((_b = row["concurrentAcadPlanCodes"]) == null ? void 0 : _b.length);
      }, "hasConcurrentOrAccelerateDegrees"),
      hasAccelerateDegrees: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = row["acceleratedAcadPlanCodes"]) == null ? void 0 : _a.length;
      }, "hasAccelerateDegrees"),
      hasConcurrentDegrees: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = row["concurrentAcadPlanCodes"]) == null ? void 0 : _a.length;
      }, "hasConcurrentDegrees"),
      getAccelerateDegrees: /* @__PURE__ */ __name(async () => {
        if (!row["acceleratedAcadPlanCodes"]) return [];
        return fetchAcademicPlans(row["acceleratedAcadPlanCodes"]);
      }, "getAccelerateDegrees"),
      getConcurrentDegrees: /* @__PURE__ */ __name(async () => {
        if (!row["concurrentAcadPlanCodes"]) return [];
        return fetchAcademicPlans(row["concurrentAcadPlanCodes"]);
      }, "getConcurrentDegrees"),
      getCollegeDesc: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = getMajorityOwner(row)) == null ? void 0 : _a.collegeDescription;
      }, "getCollegeDesc"),
      getCollegeUrl: /* @__PURE__ */ __name(() => {
        var _a;
        return ((_a = getMajorityOwner(row)) == null ? void 0 : _a.collegeUrl) || "";
      }, "getCollegeUrl"),
      /** @return {string} */
      getEmailAddress: /* @__PURE__ */ __name(() => row["emailAddr"], "getEmailAddress"),
      /** @return {string} */
      getPhone: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = row["phoneNumber"]) == null ? void 0 : _a.replace("/", "-");
      }, "getPhone"),
      /** @return {string} */
      getProfessionalLicensureText() {
        const standardText = row["professionalLicensureStandardText"] || "";
        const additionalText = row["professionalLicensureAdditionalText"] || "";
        const combinedText = `${standardText}${additionalText}`;
        try {
          const doc = new DOMParser().parseFromString(combinedText, "text/html");
          if (doc.querySelector("parsererror")) {
            return "";
          }
        } catch (error) {
          console.error("Error parsing HTML: ", error.message);
          return "";
        }
        return combinedText;
      },
      /** @return {string} */
      getDepartmentName: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = getMajorityOwner(row)) == null ? void 0 : _a.departmentDescription;
      }, "getDepartmentName"),
      /** @return {string} */
      getPlanUrl: /* @__PURE__ */ __name(() => row["academicOfficeUrl"], "getPlanUrl"),
      // AsuProgramFee
      hasAsuProgramFee: /* @__PURE__ */ __name(() => row["additionalFee"], "hasAsuProgramFee"),
      // AsuLangReqFlag
      getAsuLangReqFlag: /* @__PURE__ */ __name(() => row["languageRequired"], "getAsuLangReqFlag"),
      hasAsuLangReqFlag: /* @__PURE__ */ __name(() => row["languageRequired"], "hasAsuLangReqFlag"),
      // asuMathReqFlag
      hasMathReqFlag: /* @__PURE__ */ __name(() => row["mathRequired"], "hasMathReqFlag"),
      getOtherMathReqCourse: /* @__PURE__ */ __name(() => row["firstMathCourseRequiredSupplementalText"], "getOtherMathReqCourse"),
      getMathIntensity: /* @__PURE__ */ __name(() => row["mathIntensityDescription"], "getMathIntensity"),
      /** @return {string} */
      getMinMathReq: /* @__PURE__ */ __name(() => {
        const mathInfoObject = row["firstMathCourseRequired"];
        if (!mathInfoObject) return "";
        const { subject, catalogNumber, description } = mathInfoObject;
        return `${subject} ${catalogNumber} - ${description}`;
      }, "getMinMathReq"),
      /** @return {string} */
      getMarketText: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = row["marketingText"]) == null ? void 0 : _a.trim();
      }, "getMarketText"),
      /** @return {string} */
      getAsuOfficeLoc: /* @__PURE__ */ __name(() => row["academicOfficeLocation"] || "", "getAsuOfficeLoc"),
      /** @return {string} */
      getCampusWue: /* @__PURE__ */ __name(() => {
        var _a;
        const campusList = row["campusesOffered"];
        if (!campusList) return null;
        return (_a = campusList == null ? void 0 : campusList.find((campus) => campus.wue === true)) == null ? void 0 : _a.campusCode;
      }, "getCampusWue"),
      getConcurrentDegreeMajorMaps: /* @__PURE__ */ __name(() => fetchAcademicPlans(row["concurrentAcadPlanCodes"]), "getConcurrentDegreeMajorMaps"),
      getChangeMajor: /* @__PURE__ */ __name(() => row["changeMajorRequirementsText"], "getChangeMajor"),
      getAsuCareerOpportunity: /* @__PURE__ */ __name(() => row["careerOpportunities"], "getAsuCareerOpportunity"),
      getGlobalExp: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = row["globalExperienceText"]) == null ? void 0 : _a.trim();
      }, "getGlobalExp"),
      /** @return {string} */
      getCollegeAcadOrg: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = getMajorityOwner(row)) == null ? void 0 : _a.collegeAcadOrg;
      }, "getCollegeAcadOrg"),
      /** @return {Array} */
      getCollegeAcadOrgJoint: /* @__PURE__ */ __name(() => {
        const { owners } = row;
        if (!owners) return [];
        const allCollegeAcadOrgs = owners.map((owner) => owner.collegeAcadOrg);
        return allCollegeAcadOrgs;
      }, "getCollegeAcadOrgJoint"),
      /** @return {string} */
      getDepartmentCode: /* @__PURE__ */ __name(() => {
        var _a;
        return (_a = getMajorityOwner(row)) == null ? void 0 : _a.departmentAcadOrg;
      }, "getDepartmentCode"),
      /** @return {Object.<string, string>} */
      getGraduateApplyDates: /* @__PURE__ */ __name(() => row["applicationDeadlines"], "getGraduateApplyDates"),
      hasGraduateApplyDates: /* @__PURE__ */ __name(() => hasGraduateApplyDates(row), "hasGraduateApplyDates"),
      /** @return {Object.<string, string>} */
      getPlanDeadlines: /* @__PURE__ */ __name(() => row["applicationDeadlines"], "getPlanDeadlines"),
      hasPlanDeadlines: /* @__PURE__ */ __name(() => hasPlanDeadlines(row), "hasPlanDeadlines"),
      isValidActiveProgram: /* @__PURE__ */ __name(() => isValidActiveProgram(row), "isValidActiveProgram"),
      /** @return {boolean} */
      getAsuDegSrchFlg: /* @__PURE__ */ __name(() => row["activeInDegreeSearch"], "getAsuDegSrchFlg"),
      getAsuCustomText: /* @__PURE__ */ __name(() => row["customText"], "getAsuCustomText"),
      getRequiredCoursesLabel: /* @__PURE__ */ __name(() => {
        if (row["acadPlanTypeDescription"] === "Minor") return "Minor";
        if (row["acadPlanTypeDescription"] === "Certificate")
          return "Certificate";
        return "Major";
      }, "getRequiredCoursesLabel"),
      getStemOptText: /* @__PURE__ */ __name(() => row["stemOptText"], "getStemOptText"),
      getSubPlnMajorMaps: /* @__PURE__ */ __name(() => {
        var _a;
        if (!row["subplans"] || !row["majorMapSubplans"]) return [];
        let subplans = (_a = [...row["subplans"]]) == null ? void 0 : _a.filter(
          (subpln) => subpln.campusesOffered
        );
        const majorMapSubplans = [...row["majorMapSubplans"]];
        const filterSubplans = /* @__PURE__ */ __name((subplansArr, acadSubPlanCode) => {
          return subplansArr.filter(
            (subplan) => subplan.acadSubPlanCode !== acadSubPlanCode
          );
        }, "filterSubplans");
        const isDifferentSubplanExists = /* @__PURE__ */ __name((subplansArr, acadSubPlanCode) => {
          return subplansArr.some(
            (subplan) => subplan.acadSubPlanCode !== acadSubPlanCode
          );
        }, "isDifferentSubplanExists");
        const filteredMajorMapSubplans = [];
        for (let i2 = majorMapSubplans.length - 1; i2 >= 0; i2 -= 1) {
          if (subplans.length === 0) break;
          const currentMajorMapSubplan = majorMapSubplans[i2];
          if (currentMajorMapSubplan.defaultFlag) {
            subplans = filterSubplans(
              subplans,
              currentMajorMapSubplan.acadSubPlanCode
            );
            filteredMajorMapSubplans.push(currentMajorMapSubplan);
          } else if (isDifferentSubplanExists(
            subplans,
            currentMajorMapSubplan.acadSubPlanCode
          )) {
            subplans = filterSubplans(
              subplans,
              currentMajorMapSubplan.acadSubPlanCode
            );
            filteredMajorMapSubplans.push(currentMajorMapSubplan);
          }
        }
        return filteredMajorMapSubplans;
      }, "getSubPlnMajorMaps"),
      getSubPln: /* @__PURE__ */ __name(() => row["subplans"], "getSubPln")
    };
  }
  __name(degreeDataPropResolverService, "degreeDataPropResolverService");
  function getCampusLocations(resolver) {
    const program = resolver.getProgramType();
    const locations = [];
    const getDefaultLocation = /* @__PURE__ */ __name((location) => ({
      text: location,
      url: ""
    }), "getDefaultLocation");
    const getOnlineLocation = /* @__PURE__ */ __name((url) => ({
      text: "Online",
      url
    }), "getOnlineLocation");
    const campusList = resolver.getCampusList().map((campus) => campus.campusCode);
    if (campusList.length > 0) {
      locations.push(
        ...campusList.map(
          (location) => location === "ONLNE" && getOnlineLocation(resolver.getCurriculumUrl()) || findCampusDefinition(location, program) || getDefaultLocation(location)
        )
      );
    }
    const campusWueLocation = resolver.getCampusWue();
    if (campusWueLocation) {
      locations.push(
        findCampusDefinition(campusWueLocation, program) || getDefaultLocation(campusWueLocation)
      );
    }
    return locations;
  }
  __name(getCampusLocations, "getCampusLocations");
  const filterAnchorMenu = /* @__PURE__ */ __name((anchorMenu, resolver) => {
    const validAnchors = { ...anchorMenu };
    if (validAnchors.globalOpportunity && !resolver.getGlobalExp()) {
      validAnchors.globalOpportunity = false;
    }
    if (validAnchors.careerOutlook && !resolver.getAsuCareerOpportunity()) {
      validAnchors.careerOutlook = false;
    }
    if (validAnchors.attendOnline && !resolver.getCurriculumUrl()) {
      validAnchors.attendOnline = false;
    }
    return validAnchors;
  }, "filterAnchorMenu");
  const hasValidAnchorMenu = /* @__PURE__ */ __name((anchorMenu) => {
    var _a;
    const validItemsInAnchorMenu = Object.values(anchorMenu).filter(
      (key) => key === true
    );
    const hasExternalAnchors = ((_a = anchorMenu == null ? void 0 : anchorMenu.externalAnchors) == null ? void 0 : _a.length) > 0;
    const res = hasExternalAnchors || validItemsInAnchorMenu.length > 0;
    return res;
  }, "hasValidAnchorMenu");
  function mapTooltipLink(_2) {
    return "";
  }
  __name(mapTooltipLink, "mapTooltipLink");
  function accellerateDegreeTooltipLink(_2) {
    return "";
  }
  __name(accellerateDegreeTooltipLink, "accellerateDegreeTooltipLink");
  function requestInfoLink() {
    return "";
  }
  __name(requestInfoLink, "requestInfoLink");
  function parseMajorInfoLink(resolver, majorInfoUrl) {
    let res = majorInfoUrl || "";
    res = res.replaceAll("{INSTITUTION_CODE}", resolver.getInstitution()).replaceAll("{ACAD_PLAN_CODE}", resolver.getAcadPlan());
    return res;
  }
  __name(parseMajorInfoLink, "parseMajorInfoLink");
  function accellerateDegreeLink(resolver, majorInfoUrl) {
    const res = parseMajorInfoLink(resolver, majorInfoUrl);
    return `${res}#${progDetailSectionIds.flexibleDegreeOptions.acceleratedId}`;
  }
  __name(accellerateDegreeLink, "accellerateDegreeLink");
  function filterData({
    programs = [],
    filters: {
      collegeAcadOrg,
      departmentCode,
      acceleratedConcurrent,
      locations = [],
      keyword,
      blacklistAcadPlans,
      program,
      showCerts
    }
  }) {
    const filterByCollegeAcadOrg = /* @__PURE__ */ __name((resolver) => !collegeAcadOrg || resolver.getCollegeAcadOrgJoint().includes(collegeAcadOrg), "filterByCollegeAcadOrg");
    const filterByDepartmentCode = /* @__PURE__ */ __name((resolver) => !departmentCode || resolver.getDepartmentCode().includes(departmentCode), "filterByDepartmentCode");
    const filterByCampus = /* @__PURE__ */ __name((resolver) => {
      var _a;
      return !locations.length || ((_a = resolver.getCampusList()) == null ? void 0 : _a.some((campus) => locations.some((loc) => loc.value === campus.campusCode)));
    }, "filterByCampus");
    const filterByAcceleratedConcurrent = /* @__PURE__ */ __name((row = {}) => {
      var _a;
      return !isAccelConcValid(acceleratedConcurrent) || ((_a = row[acceleratedConcurrent.value]) == null ? void 0 : _a.length) > 0;
    }, "filterByAcceleratedConcurrent");
    const filterByKeyword = /* @__PURE__ */ __name((resolver, searchTerm) => {
      if (!searchTerm) return true;
      const regex = new RegExp(searchTerm, "i");
      return regex.test(resolver.getFullDescription());
    }, "filterByKeyword");
    const filterByBlacklist = /* @__PURE__ */ __name((resolver) => !(blacklistAcadPlans == null ? void 0 : blacklistAcadPlans.includes(resolver.getAcadPlan())), "filterByBlacklist");
    const filterGraduateCerts = /* @__PURE__ */ __name((resolver) => {
      if (program === "undergrad") return true;
      if (showCerts === "true" && program === "graduate") {
        return resolver.isMinorOrCertificate();
      }
      return resolver.isPhdOrMasters();
    }, "filterGraduateCerts");
    const applyFilters = /* @__PURE__ */ __name((row) => {
      const resolver = degreeDataPropResolverService(row);
      return filterByCollegeAcadOrg(resolver) && filterByDepartmentCode(resolver) && filterByCampus(resolver) && filterByAcceleratedConcurrent(row) && filterByKeyword(resolver, keyword) && filterByBlacklist(resolver) && filterGraduateCerts(resolver);
    }, "applyFilters");
    return programs.filter(applyFilters);
  }
  __name(filterData, "filterData");
  const sortPrograms = /* @__PURE__ */ __name((programs) => {
    const sortedPrograms = programs.sort(
      (p1, p2) => p1.acadPlanMarketingDescription.localeCompare(
        p2.acadPlanMarketingDescription
      )
    );
    return sortedPrograms;
  }, "sortPrograms");
  const trackGAEvent = /* @__PURE__ */ __name(({
    event = "",
    action = "",
    name = "",
    type = "",
    section = "",
    text: text2 = "",
    region = "",
    component = ""
  }) => {
    const { dataLayer } = window;
    const e = {
      event: event.toLowerCase(),
      action: action.toLowerCase(),
      name: name.toLowerCase(),
      type: type.toLowerCase(),
      region: region.toLowerCase(),
      section: section.toLowerCase(),
      text: text2.toLowerCase(),
      component: component.toLowerCase()
    };
    if (dataLayer) dataLayer.push(e);
  }, "trackGAEvent");
  function Breadcrumbs({ breadcrumbs, section }) {
    const genId = idGenerator("breadcrumb-");
    return breadcrumbs && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "breadcrumbs", "data-testid": "breadcrumbs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "breadcrumb bg-white", children: breadcrumbs.map(
      (bread) => (bread == null ? void 0 : bread.isActive) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "breadcrumb-item active",
          "aria-current": "page",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: bread == null ? void 0 : bread.url,
              onClick: /* @__PURE__ */ __name(() => trackGAEvent({
                event: "link",
                action: "click",
                name: "onclick",
                type: "internal link",
                region: "main content",
                section,
                text: bread.text
              }), "onClick"),
              children: bread.text
            }
          )
        },
        genId.next().value
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: bread == null ? void 0 : bread.url,
          onClick: /* @__PURE__ */ __name(() => trackGAEvent({
            event: "link",
            action: "click",
            name: "onclick",
            type: "internal link",
            region: "main content",
            section,
            text: bread.text
          }), "onClick"),
          children: bread.text
        }
      ) }, genId.next().value)
    ) }) });
  }
  __name(Breadcrumbs, "Breadcrumbs");
  Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.arrayOf(linkPropShape),
    section: PropTypes.string
  };
  const BrowseTitle = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", "data-testid": "browse-title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: "Browse degrees" }) }) }), "BrowseTitle");
  const SelectFormGroup = /* @__PURE__ */ __name(({
    id,
    label,
    selected,
    multiple,
    options,
    onChange
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        className: "form-select",
        id,
        "data-testid": id,
        multiple,
        onChange: /* @__PURE__ */ __name((event) => onChange(id, event), "onChange"),
        value: selected,
        children: options == null ? void 0 : options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { id: option.id, value: option.value, children: option.text }, option.id))
      }
    )
  ] }), "SelectFormGroup");
  const Section$2 = qe.div`
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
`;
  const ButtonLink = qe.button`
  font-weight: 400;
  text-decoration: underline;
`;
  const inputsDefaultGAEvent = {
    event: "select",
    action: "click",
    name: "onclick"
  };
  const buttonsDefaultGAEvent = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link"
  };
  const INITIAL_FILTER_STATE = {
    isActive: false,
    locations: [],
    asuLocals: [],
    acceleratedConcurrent: { value: "all", text: "" },
    keyword: null,
    blacklistAcadPlans: []
  };
  const getOptionProps = /* @__PURE__ */ __name((option) => ({
    id: option.id,
    value: option.value,
    text: option.text
  }), "getOptionProps");
  const formatOptions = /* @__PURE__ */ __name((options) => options.map((option) => option.text).join(", "), "formatOptions");
  const trackInputEvent = /* @__PURE__ */ __name((type, text2) => {
    trackGAEvent({ ...inputsDefaultGAEvent, type, text: text2 });
  }, "trackInputEvent");
  const trackButtonEvent = /* @__PURE__ */ __name((text2) => {
    trackGAEvent({ ...buttonsDefaultGAEvent, text: text2 });
  }, "trackButtonEvent");
  const Filters = /* @__PURE__ */ __name(({ value, onChange, onApply, onClean }) => {
    const changeLocationField = (
      /**
      * @param {string} targetId
      * @param {{ target: HTMLSelectElement}} event
      */
      /* @__PURE__ */ __name((targetId, { target: { selectedOptions } }) => {
        let newLocations = [];
        let newAsuLocals = [];
        const selectedItems = Array.from(selectedOptions, getOptionProps);
        const { locations: cachedLocations, asuLocals: cachedAsuLocals } = value;
        const mapValueFor = {
          locationsRender: /* @__PURE__ */ __name(() => {
            newLocations = selectedItems;
            newAsuLocals = cachedAsuLocals;
          }, "locationsRender"),
          asuLocalsRender: /* @__PURE__ */ __name(() => {
            newAsuLocals = selectedItems;
            newLocations = cachedLocations;
          }, "asuLocalsRender")
        };
        mapValueFor[`${targetId}Render`]();
        onChange({
          ...value,
          locations: newLocations,
          asuLocals: newAsuLocals
        });
        const mapField = {
          locations: "location or online",
          asuLocals: "as local"
        };
        trackInputEvent(mapField[targetId], formatOptions(selectedItems));
      }, "changeLocationField")
    );
    const changeAcceleratedConcurrentField = (
      /**
      * @param {string} targetId
      * @param {{ target: HTMLSelectElement}} event
      */
      /* @__PURE__ */ __name((targetId, { target: { selectedOptions } }) => {
        onChange({ ...value, [targetId]: getOptionProps(selectedOptions[0]) });
        trackInputEvent(
          "accelerated/concurrent",
          getOptionProps(selectedOptions[0]).text
        );
      }, "changeAcceleratedConcurrentField")
    );
    const applyFilters = /* @__PURE__ */ __name(() => {
      onApply == null ? void 0 : onApply({
        ...value,
        isActive: true
      });
    }, "applyFilters");
    const cleanFilters = /* @__PURE__ */ __name(() => {
      onChange(INITIAL_FILTER_STATE);
      onClean == null ? void 0 : onClean();
    }, "cleanFilters");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$2, { className: "container", "data-testid": "filters", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Filter your results" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-3 uds-form row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectFormGroup,
          {
            multiple: true,
            id: "locations",
            label: "Campuses or online",
            selected: value.locations.map((item) => item.value),
            options: locationOptions,
            onChange: changeLocationField
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectFormGroup,
          {
            multiple: true,
            id: "asuLocals",
            label: "ASU location, ASU Local",
            selected: value.asuLocals.map((item) => item.value),
            options: asuLocalOptions,
            onChange: changeLocationField
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4 col-md-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectFormGroup,
          {
            id: "acceleratedConcurrent",
            label: "Accelerated, Concurrent",
            selected: value.acceleratedConcurrent.value,
            options: acceleratedConcurrentOptions,
            onChange: changeAcceleratedConcurrentField
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hint-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "*CTRL + Click to select multiple" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-action-buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Qn,
          {
            "data-testid": "btn-apply-filter",
            color: "maroon",
            label: "Apply filters",
            ariaLabel: "Apply filters",
            size: "default",
            onClick: /* @__PURE__ */ __name(() => {
              applyFilters();
              trackButtonEvent("apply filters");
            }, "onClick")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ButtonLink,
          {
            "data-testid": "btn-clear-filters",
            className: "btn btn-link",
            onClick: /* @__PURE__ */ __name(() => {
              cleanFilters();
              trackButtonEvent("clean filters");
            }, "onClick"),
            children: "Clear filters"
          }
        )
      ] })
    ] });
  }, "Filters");
  Filters.propTypes = {
    value: filterValueShape,
    onChange: PropTypes.func,
    onApply: PropTypes.func,
    onClean: PropTypes.func
  };
  function FiltersSummary({
    value: { isActive, locations, asuLocals, acceleratedConcurrent } = {},
    onRemove
  }) {
    const genFilterId = idGenerator("filter-");
    const filterCount = (locations == null ? void 0 : locations.length) + (asuLocals == null ? void 0 : asuLocals.length) + (isAccelConcValid(acceleratedConcurrent) ? 1 : 0);
    const SummaryItem = /* @__PURE__ */ __name((filterName, filter) => {
      const { text: text2 } = filter;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          tabIndex: -1,
          role: "button",
          "aria-label": `Remove filter ${text2}`,
          "data-filter-id": filterName,
          onKeyDown: /* @__PURE__ */ __name(() => onRemove(filterName, filter), "onKeyDown"),
          onClick: /* @__PURE__ */ __name(() => onRemove(filterName, filter), "onClick"),
          className: "btn btn-tag btn-tag-alt-white d-inline-flex align-items-center me-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pe-1", children: text2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-times" })
          ]
        },
        genFilterId.next().value
      );
    }, "SummaryItem");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "filters-summary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Applied filters" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "summary-filter-tags", children: !isActive || filterCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No filters applied" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        locations.map((loc) => SummaryItem("locations", loc)),
        asuLocals.map((loc) => SummaryItem("asuLocals", loc)),
        (isAccelConcValid(acceleratedConcurrent) ? [acceleratedConcurrent] : []).map((acValue) => SummaryItem("acceleratedConcurrent", acValue))
      ] }) })
    ] });
  }
  __name(FiltersSummary, "FiltersSummary");
  FiltersSummary.propTypes = {
    value: filterValueShape,
    onRemove: PropTypes.func
  };
  const PhotoGrid = qe.div`
  .photo-item {
    padding-bottom: 1.25rem;
  }
`;
  const SectionWrapper = qe.section`
  @media (max-width: 480px) {
    .uds-img,
    .uds-video-container {
      margin: 0;
    }
  }
`;
  function textPhotoGridTypeHtmlTemplate({
    applyNowUrl,
    title,
    contents,
    photoGrid
  }) {
    const Heading = parseHeading(title);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "container",
        "data-type": "text-photo-grid",
        "data-testid": "intro-content",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-sm-12 col-md-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${spreadClasses(title.cssClass)}`, children: title.text }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ParagrapList, { contents }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ApplyNow, { href: applyNowUrl })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-md-7 d-none d-sm-none d-md-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoGrid, { className: "row", children: photoGrid.images.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "photo-item col-sm-12 col-md-6 col-lg-6",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  className: `mg-fluid ${spreadClasses(image.cssClass)}`,
                  src: image.url,
                  alt: image.altText,
                  style: { maxWidth: "100%" }
                }
              )
            },
            `img-${index + 1}`
          )) }) })
        ] })
      }
    );
  }
  __name(textPhotoGridTypeHtmlTemplate, "textPhotoGridTypeHtmlTemplate");
  function textTextMediaTypeHtmlTemplate({
    applyNowUrl,
    title,
    contents,
    image,
    video
  }) {
    const Heading = parseHeading(title);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionWrapper,
      {
        className: "container",
        "data-type": "text-media",
        "data-testid": "intro-content",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row gy-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-sm-12 col-md-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${spreadClasses(title.cssClass)}`, children: title.text }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ParagrapList, { contents }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ApplyNow, { href: applyNowUrl })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-sm-12 col-md-7 mt-2 mt-sm-0", children: [
            video && /* @__PURE__ */ jsxRuntimeExports.jsx(
              mr,
              {
                type: video.type,
                url: video.url,
                vttUrl: video.vttUrl,
                title: video.title,
                className: "mt-0"
              }
            ),
            image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uds-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.url, className: "img-fluid", alt: image.altText }) })
          ] })
        ] })
      }
    );
  }
  __name(textTextMediaTypeHtmlTemplate, "textTextMediaTypeHtmlTemplate");
  function textImageOverlapTypeHtmlTemplate({
    applyNowUrl,
    title,
    contents,
    image
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "container",
        "data-type": "text-image-overlay",
        "data-testid": "intro-content",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          OverlapContentImage,
          {
            title: title.text,
            contents,
            image,
            contentDirection: "right",
            contentChildren: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApplyNow, { href: applyNowUrl }) })
          }
        ) }) })
      }
    );
  }
  __name(textImageOverlapTypeHtmlTemplate, "textImageOverlapTypeHtmlTemplate");
  const textTypeHtmlTemplate = /* @__PURE__ */ __name(({ applyNowUrl, title, contents }) => {
    const Heading = parseHeading(title);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container", "data-type": "text", "data-testid": "intro-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-md-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${spreadClasses(title.cssClass)}`, children: title.text }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-sm-12 col-md-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ParagrapList, { contents }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ApplyNow, { href: applyNowUrl })
      ] })
    ] }) });
  }, "textTypeHtmlTemplate");
  const IntroContent = /* @__PURE__ */ __name(({
    applyNowUrl,
    type,
    title,
    contents,
    image,
    video,
    photoGrid
  }) => {
    const templateTypes = {
      "text": /* @__PURE__ */ __name(() => textTypeHtmlTemplate({ applyNowUrl, title, contents }), "text"),
      "text-media": /* @__PURE__ */ __name(() => textTextMediaTypeHtmlTemplate({
        applyNowUrl,
        title,
        contents,
        image,
        video
      }), "text-media"),
      "text-image-overlay": /* @__PURE__ */ __name(() => textImageOverlapTypeHtmlTemplate({ applyNowUrl, title, contents, image }), "text-image-overlay"),
      "text-photo-grid": /* @__PURE__ */ __name(() => textPhotoGridTypeHtmlTemplate({
        applyNowUrl,
        title,
        contents,
        image,
        photoGrid
      }), "text-photo-grid"),
      "undefined": /* @__PURE__ */ __name(() => {
        console.error(
          `the type '${type}' is not supported by the 'IntroContent' component.`
        );
        return null;
      }, "undefined")
    };
    return templateTypes[type]();
  }, "IntroContent");
  IntroContent.propTypes = {
    applyNowUrl: PropTypes.string,
    type: PropTypes.oneOf([
      "text",
      "text-media",
      "text-image-overlay",
      "text-photo-grid"
    ]).isRequired,
    video: PropTypes.shape({ ...videoPropType }),
    image: PropTypes.shape({ ...imagePropType }),
    header: contentPropShape,
    title: PropTypes.shape({
      ...contentPropType,
      component: PropTypes.oneOf(tagHeadingList)
    }),
    contents: PropTypes.arrayOf(contentPropShape),
    photoGrid: PropTypes.shape({
      images: PropTypes.arrayOf(imagePropShape)
    })
  };
  const degreeListPropTypes = {
    programs: PropTypes.arrayOf(PropTypes.object),
    totalRows: PropTypes.number,
    loading: PropTypes.bool,
    actionUrls: PropTypes.shape({
      applyNowUrl: PropTypes.string,
      majorInfoUrl: PropTypes.string,
      majorInfoOnlineUrl: PropTypes.string
    }),
    degreesPerPage: PropTypes.number
  };
  const WrapperSection = qe.div`
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
`;
  const AccordionView = /* @__PURE__ */ __name(({ programs, actionUrls }) => {
    var _a, _b, _c, _d, _e2;
    const { state } = r$1.useContext(AppContext);
    const columSettings = (_b = (_a = state == null ? void 0 : state.listPageProps) == null ? void 0 : _a.programList) == null ? void 0 : _b.settings;
    const hideRequiredCoursesSection = ((_e2 = (_d = (_c = state == null ? void 0 : state.listPageProps) == null ? void 0 : _c.programList) == null ? void 0 : _d.dataSource) == null ? void 0 : _e2.program) === "graduate";
    const cards = programs.map((row) => {
      const resolver = degreeDataPropResolverService(row);
      const getRequiredCourses = /* @__PURE__ */ __name(() => {
        var _a2;
        const isOnline = resolver.isOnline();
        const directUrl = isOnline ? resolver.getOnlineMajorMapURL() : resolver.getGeneralDegreeMajorMap();
        let directMapLink;
        try {
          const url = (_a2 = new URL(directUrl)) == null ? void 0 : _a2.toString();
          directMapLink = `<a href=${url}>${resolver.getRequiredCoursesLabel()} Map</a>`;
        } catch (error) {
          return "";
        }
        return directMapLink;
      }, "getRequiredCourses");
      const getAcceleratedConcurrent = /* @__PURE__ */ __name(() => `<div>
        ${resolver.hasConcurrentDegrees() ? "<div className='cell-container'>concurrent</div>" : ""}
        ${resolver.hasAccelerateDegrees() ? `<div className="cell-container">
                <a href=${accellerateDegreeLink(
        resolver,
        actionUrls.majorInfoUrl
      )}>
                  4+1 years
                </a>
              </div>` : ""}
    </div>`, "getAcceleratedConcurrent");
      return {
        content: {
          header: resolver.getMajorDesc(),
          body: `<ul>
        <li>
          <strong>Major:</strong>
          <br />
            <a href=${parseMajorInfoLink(resolver, actionUrls.majorInfoUrl)}>
              ${resolver.getMajorDesc()}
            </a>
        </li>
        <li>
          <strong>Degree:</strong>
          <br />${resolver.getDegree()}
        </li>
        ${!hideRequiredCoursesSection ? `<li>
              <strong>Required Courses:</strong>
              <br />${getRequiredCourses()}
            </li>` : ""}
        <li>
          <strong>Campus or location:</strong>
          <br />${resolver.getCampusList().map((item) => toTitleCase(item.campusCode)).join(", ")}
        </li>
        <li>
          <strong>Accelerated/Concurrent:</strong>
          <br />${getAcceleratedConcurrent() || "-"}
        </li>
        ${!(columSettings == null ? void 0 : columSettings.hideCollegeSchool) ? ` <li>
                  <strong>College/School:</strong>
                  <br />
                  <a href=${resolver.getCollegeUrl()}>
                    ${resolver.getCollegeDesc()}
                  </a>
                </li>` : ""}
      </ul>`
        }
      };
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(WrapperSection, { "data-testid": "accordion-view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zn, { cards }) });
  }, "AccordionView");
  AccordionView.propTypes = {
    ...degreeListPropTypes
  };
  const SectionCard = qe.section`
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
  function GridView({ programs, loading, actionUrls }) {
    var _a, _b, _c, _d;
    const { defaultState, state } = r$1.useContext(AppContext);
    const propImage = (_d = (_c = (_b = (_a = state == null ? void 0 : state.listPageProps) == null ? void 0 : _a.programList) == null ? void 0 : _b.settings) == null ? void 0 : _c.cardDefaultImage) == null ? void 0 : _d.url;
    const defaultImage = defaultState.detailPageDefault.hero.image.url;
    const imageUrl = propImage || defaultImage;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        id: GRID_PROGRAMS_ID,
        className: "container row",
        "data-loading": loading,
        "data-testid": "grid-view",
        children: programs.map((row) => {
          const resolver = degreeDataPropResolverService(row);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col col-sm-12 col-md-4 col-lg-3 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            tr,
            {
              type: "degree",
              horizontal: false,
              clickable: false,
              image: imageUrl,
              imageAltText: "An example image",
              title: resolver.getMajorDesc(),
              linkLabel: "View Program Details",
              linkUrl: parseMajorInfoLink(resolver, actionUrls.majorInfoUrl),
              buttons: [
                {
                  color: "maroon",
                  size: "small",
                  label: "Reqeuest Info",
                  href: requestInfoLink()
                },
                {
                  color: "gold",
                  size: "small",
                  label: "Apply",
                  href: actionUrls.applyNowUrl
                }
              ]
            }
          ) });
        })
      }
    );
  }
  __name(GridView, "GridView");
  GridView.propTypes = {
    ...degreeListPropTypes
  };
  const columns = [
    {
      dataKey: "Major",
      label: "Major",
      className: "major",
      sortable: true,
      contentTemplate: /* @__PURE__ */ __name(({ resolver, rowIndex, actionUrls, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: parseMajorInfoLink(resolver, actionUrls == null ? void 0 : actionUrls.majorInfoUrl), children: resolver.getMajorDesc() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChevronIconButton,
          {
            dataId: "show-row-detail",
            ariaLabel: `${resolver.getMajorDesc()} arrow`,
            ariaControls: `row-info-${rowIndex}`,
            onClick: /* @__PURE__ */ __name((selected) => onClick(rowIndex, selected), "onClick")
          }
        )
      ] }), "contentTemplate")
    },
    {
      dataKey: "Degree",
      label: "Degree",
      className: "degree",
      contentTemplate: /* @__PURE__ */ __name(({ resolver }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cell-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: resolver.getDegree() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InfoButtonIcon,
          {
            popover: {
              title: resolver.getDegreeDesc(),
              body: resolver.getDegreeDescLong(),
              withAuto: false
            }
          }
        )
      ] }), "contentTemplate")
    },
    {
      dataKey: "RequiredCourses",
      label: "Required Courses",
      className: "required-course",
      contentTemplate: /* @__PURE__ */ __name(({ resolver }) => {
        var _a;
        const isOnline = resolver.isOnline();
        const directUrl = isOnline ? resolver.getOnlineMajorMapURL() : resolver.getGeneralDegreeMajorMap();
        let directMapLink;
        try {
          const url = (_a = new URL(directUrl)) == null ? void 0 : _a.toString();
          directMapLink = /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: url, children: [
            resolver.getRequiredCoursesLabel(),
            " Map"
          ] });
        } catch (error) {
          return "";
        }
        return directMapLink;
      }, "contentTemplate")
    },
    {
      dataKey: "Location",
      label: "Campus or location",
      className: "campus-location",
      sortable: true,
      contentTemplate: /* @__PURE__ */ __name(({ resolver }) => {
        const genCampusId = idGenerator(`campus-`);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: resolver.getCampusList().map((location, index, campusList) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cell-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `${toTitleCase(
            getFullCampusLocalText(location.campusCode)
          )}${index < campusList.length - 1 ? ", " : ""}` }, location.campusCode),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            InfoButtonIcon,
            {
              popover: {
                title: toTitleCase(location.campusCode),
                body: /* @__PURE__ */ __name(() => fetch(mapTooltipLink(location.campusCode)), "body"),
                withAuto: true
              }
            }
          ) })
        ] }, genCampusId.next().value)) });
      }, "contentTemplate")
    },
    // TODO: THIS COMPONENT IS CURRENTLY DEFERRED
    {
      dataKey: "AcceleratedConcurrent",
      label: "Accelerated/ Concurrent",
      className: "accelerated-concurrent",
      sortable: true,
      contentTemplate: /* @__PURE__ */ __name(({ resolver, actionUrls }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        resolver.getConcurrentDegrees().then((data) => data).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cell-container", children: "concurrent" }),
        resolver.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cell-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: accellerateDegreeLink(resolver, actionUrls.majorInfoUrl), children: "4+1 years" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            InfoButtonIcon,
            {
              popover: {
                title: "4+1 years",
                body: /* @__PURE__ */ __name(() => fetch(accellerateDegreeTooltipLink(resolver.getAcadPlan())), "body"),
                withAuto: false
              }
            }
          )
        ] })
      ] }), "contentTemplate")
    },
    {
      dataKey: "CollegeSchool",
      label: "College/School",
      className: "college",
      sortable: true,
      contentTemplate: /* @__PURE__ */ __name(({ resolver }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: resolver.getCollegeUrl(), children: resolver.getCollegeDesc() }), "contentTemplate")
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
  ];
  const tableLoader = Ae`
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
`;
  const Table$1 = qe.table`
  ${tableLoader}
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
`;
  const renderInfo = /* @__PURE__ */ __name(({ resolver, id }) => {
    const labelRef = r$1.createRef();
    const triggerDescription = /* @__PURE__ */ __name((e) => {
      if (e.key === "Enter") labelRef == null ? void 0 : labelRef.current.click();
    }, "triggerDescription");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Program Description:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "togle-more-text", type: "checkbox", id: `#${id}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "desc-long",
          id,
          dangerouslySetInnerHTML: sanitizeDangerousMarkup(
            resolver.getFullDescription()
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          ref: labelRef,
          className: "label-more-less element-focus",
          htmlFor: `#${id}`,
          role: "button",
          tabIndex: 0,
          onKeyDown: triggerDescription,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "more-text", className: "label-more", children: "[...more]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "less-text", className: "label-less", children: "[...less]" })
          ]
        }
      )
    ] });
  }, "renderInfo");
  const renderExtraInfo = /* @__PURE__ */ __name(({ resolver }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Additional Program Fee: " }),
      resolver.hasAsuProgramFee() ? "Yes" : "No"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Second Language Requirement: " }),
      resolver.hasAsuLangReqFlag() ? "Yes" : "No"
    ] }),
    resolver.hasMathReqFlag() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "First Required Math Course:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: resolver.getMinMathReq() }),
      resolver.getOtherMathReqCourse() && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          dangerouslySetInnerHTML: sanitizeDangerousMarkup(
            resolver.getOtherMathReqCourse()
          )
        }
      )
    ] }) }),
    resolver.getMathIntensity() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Math Intensity:" }),
      resolver.getMathIntensity()
    ] })
  ] }), "renderExtraInfo");
  const genRowId = idGenerator(`row-`);
  const ListView = /* @__PURE__ */ __name(({ programs, totalRows, loading, actionUrls }) => {
    var _a, _b;
    const tableRef = r$1.useRef(null);
    const tbodyRef = r$1.useRef(null);
    const { state } = r$1.useContext(AppContext);
    const columSettings = (_b = (_a = state == null ? void 0 : state.listPageProps) == null ? void 0 : _a.programList) == null ? void 0 : _b.settings;
    let columns$1 = columns;
    if (state.listPageProps.programList.dataSource.program === "graduate") {
      columns$1 = columns$1.filter((c2) => c2.dataKey !== "RequiredCourses");
    }
    if (columSettings == null ? void 0 : columSettings.hideCollegeSchool) {
      columns$1 = columns$1.filter((c2) => c2.dataKey !== "CollegeSchool");
    }
    const setOpenRowIndex = /* @__PURE__ */ __name((rowIndex, selected) => {
      const rows = tbodyRef.current.children;
      Array.prototype.forEach.call(
        rows,
        (r2, i2) => i2 !== rowIndex && r2.setAttribute("data-is-open", "false")
      );
      const currentRow = tbodyRef.current.children[rowIndex];
      currentRow.setAttribute("data-is-open", String(selected));
    }, "setOpenRowIndex");
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mb-4", "data-testid": "list-view", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Table$1,
      {
        id: GRID_PROGRAMS_ID,
        ref: tableRef,
        "data-loading": loading,
        title: `${totalRows} program found`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { role: "row", children: columns$1.map((col) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                tabIndex: 0,
                className: `${col.className}`,
                scope: "col",
                "aria-label": col.ariaLabel,
                children: ((_a2 = col.headerTemplate) == null ? void 0 : _a2.call(col)) || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: col.label })
              },
              col.dataKey
            );
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { ref: tbodyRef, "data-testid": "program-rows", children: [
            programs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { role: "presentation", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "td",
              {
                colSpan: columns$1.length,
                "aria-label": "No result found for the filters applied",
                children: " "
              }
            ) }) : null,
            // programs
            programs.map((row, rowCurrentIndex) => {
              const rowId = genRowId.next().value;
              const rowIndex = rowCurrentIndex * 2;
              const resolver = degreeDataPropResolverService(row);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(r$1.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { role: "row", children: columns$1.map((col) => {
                  var _a2;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `${col.className}`,
                      children: (_a2 = col.contentTemplate) == null ? void 0 : _a2.call(col, {
                        resolver,
                        col,
                        row,
                        rowIndex,
                        onClick: setOpenRowIndex,
                        actionUrls
                      })
                    },
                    `${rowId}-${col.dataKey}`
                  );
                }) }, rowId),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    id: `row-info-${rowIndex}`,
                    className: "row-info",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3, children: renderInfo({ resolver, id: `${rowId}-more-text` }) }, `${rowId}-info`),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 2, children: renderExtraInfo({ resolver }) }, `${rowId}-extra-info`)
                    ]
                  },
                  `${rowId}-row-info`
                )
              ] }, rowId);
            })
          ] })
        ]
      }
    ) });
  }, "ListView");
  ListView.propTypes = {
    ...degreeListPropTypes
  };
  const GlobalStyle = $e`

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
`;
  const programViewer = {
    [GRID_VIEW_ID]: GridView,
    [LIST_VIEW_ID]: ListView
  };
  function ProgramList({
    dataViewComponent,
    loading,
    programs,
    actionUrls,
    degreesPerPage
  }) {
    let defaultDegreesPerPage;
    if (!degreesPerPage) {
      defaultDegreesPerPage = 8;
    } else if (typeof degreesPerPage !== "number") {
      defaultDegreesPerPage = parseInt(degreesPerPage, 10);
    }
    const ROW_PAGES = degreesPerPage || defaultDegreesPerPage;
    const TOTAL_PAGES = computePages(programs.length, ROW_PAGES);
    const ProgramsViewer = programViewer[dataViewComponent];
    const [tableView, setTableView] = r$1.useState([]);
    const onPageChange = /* @__PURE__ */ __name((_2, newPage) => {
      const fromRecord = (newPage - 1) * ROW_PAGES;
      const toRecord = fromRecord + ROW_PAGES;
      setTableView(programs.slice(fromRecord, toRecord));
    }, "onPageChange");
    r$1.useEffect(() => {
      setTableView(programs.slice(0, ROW_PAGES));
    }, [programs]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-testid": "program-list", "data-view-type": dataViewComponent, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyle, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "desktop-view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProgramsViewer,
        {
          loading,
          programs: tableView,
          totalRows: programs == null ? void 0 : programs.length,
          actionUrls,
          degreesPerPage: degreesPerPage || defaultDegreesPerPage
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-view mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AccordionView,
        {
          loading,
          programs: tableView,
          totalRows: programs == null ? void 0 : programs.length,
          actionUrls,
          degreesPerPage: degreesPerPage || defaultDegreesPerPage
        }
      ) }),
      programs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        sr,
        {
          totalNumbers: 7,
          type: "default",
          background: "white",
          totalPages: TOTAL_PAGES,
          onChange: onPageChange,
          showFirstButton: true,
          showLastButton: true
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container no-space", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoAlert, { message: "No result found for the filters applied" }) })
    ] });
  }
  __name(ProgramList, "ProgramList");
  ProgramList.propTypes = {
    dataViewComponent: PropTypes.string,
    ...degreeListPropTypes,
    degreesPerPage: PropTypes.number
  };
  const Section$1 = qe.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`;
  const SearchBar = /* @__PURE__ */ __name(({ value, onChange, onSearch }) => {
    const [searching, setSearching] = r$1.useState(false);
    let timeoutId;
    r$1.useEffect(() => () => clearTimeout(timeoutId), []);
    const trackSearchEvent = /* @__PURE__ */ __name((text2) => {
      trackGAEvent({
        event: "search",
        action: "type",
        name: "onenter",
        type: "search degree programs",
        text: text2
      });
    }, "trackSearchEvent");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Section$1,
      {
        className: "container mt-5",
        "data-searching": searching,
        "data-testid": "search-bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "form",
          {
            "data-testid": "search-bar-form",
            className: "uds-form p-0 col-md-6 col-sm-12",
            onSubmit: /* @__PURE__ */ __name((e) => {
              e.preventDefault();
              onSearch();
              setSearching(true);
              timeoutId = setTimeout(() => setSearching(false), 500);
              clearTimeout(timeoutId);
            }, "onSubmit"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group mb-0 me-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "search-field", children: "Search" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex row align-items-baseline g-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-md-6 align-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    "data-testid": "search-field",
                    id: "search-field",
                    value,
                    type: "text",
                    className: "form-control",
                    placeholder: "Search degree programs",
                    onChange: /* @__PURE__ */ __name((e) => {
                      onChange(e.target.value);
                      trackSearchEvent(e.target.value);
                    }, "onChange")
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-12 col-md-6 mt-2 mt-sm-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Qn,
                  {
                    "data-testid": "search-button",
                    color: "maroon",
                    label: "Search now",
                    ariaLabel: "Search now",
                    size: "default",
                    onClick: onSearch
                  }
                ) })
              ] })
            ] })
          }
        )
      }
    );
  }, "SearchBar");
  SearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func
  };
  const Main = qe(Main$1)`
  .filter-switch-container {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    & {
      font-size: 0.9rem;
    }
  }
`;
  const ListingStyle = $e`
  @media (max-width: 480px) {
      div[class^=uds-hero] {
        grid-template-rows: 1fr auto auto 1.5rem auto;
    }
  }
`;
  const FilterSeparator = qe.div.attrs({ className: "container" })`
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: calc(var(--uds-dp-section-margin) / 2);
  padding-bottom: calc(var(--uds-dp-section-margin) / 2);
`;
  const ListingPage = /* @__PURE__ */ __name(({
    appPathFolder: _2,
    actionUrls,
    hasSearchBar = true,
    hasFilters = true,
    hero,
    introContent,
    programList,
    degreesPerPage
  }) => {
    var _a;
    const [{ data, loading, error }, doFetchPrograms] = useFetch();
    const [searchLoading, setSearchLoading] = r$1.useState(false);
    const [tableView, setTableView] = r$1.useState([]);
    const [dataInitView, setDataInitView] = r$1.useState([]);
    const [searchKeyword, setSearchKeyword] = r$1.useState("");
    const settingDefaultView = (_a = programList.settings) == null ? void 0 : _a.defaultView;
    const defaultView = [LIST_VIEW_ID, GRID_VIEW_ID].includes(settingDefaultView) ? settingDefaultView : LIST_VIEW_ID;
    const [dataViewComponent, setDataViewComponent] = r$1.useState(defaultView);
    const url = urlResolver(programList.dataSource, listingPageDefaultDataSource);
    const { defaultState } = r$1.useContext(AppContext);
    const { listingPageDefault } = defaultState;
    const {
      collegeAcadOrg,
      departmentCode,
      showInactivePrograms,
      blacklistAcadPlans,
      program,
      cert: showCerts
    } = programList.dataSource;
    const [stateFilters, setStateFilters] = r$1.useState({
      ...INITIAL_FILTER_STATE
    });
    const [appliedFilters, setAppliedFilters] = r$1.useState({
      ...INITIAL_FILTER_STATE
    });
    useListingPageLogger({
      dataSource: programList.dataSource,
      tableView,
      programs: data,
      stateFilters
    });
    r$1.useEffect(() => {
      if (typeof window !== "undefined") {
        trackReactComponent({
          packageName: "app-degree-pages",
          component: "ListingPage",
          type: "NA",
          configuration: {
            programList,
            degreesPerPage
          }
        });
      }
    }, []);
    r$1.useEffect(() => {
      doFetchPrograms(url);
    }, [url]);
    r$1.useEffect(() => {
      let dataInit = sortPrograms(data || []);
      dataInit = filterData({
        programs: dataInit,
        filters: {
          collegeAcadOrg,
          departmentCode,
          blacklistAcadPlans,
          program,
          showCerts
        }
      });
      setDataInitView(dataInit);
      setTableView(dataInit);
    }, [data, degreesPerPage]);
    const applyFilters = /* @__PURE__ */ __name(async (activeFilters) => {
      const { acceleratedConcurrent, locations, asuLocals, keyword } = activeFilters;
      setSearchLoading(true);
      doFetchPrograms(url);
      const filteredPrograms = filterData({
        programs: dataInitView,
        filters: {
          collegeAcadOrg,
          departmentCode,
          acceleratedConcurrent,
          locations: asuLocals.length > 0 ? locations.concat(onlneOption) : locations,
          keyword,
          showInactivePrograms: showInactivePrograms ?? false,
          blacklistAcadPlans,
          program
        }
      });
      setStateFilters({ ...activeFilters });
      setAppliedFilters({ ...activeFilters });
      setTableView(filteredPrograms);
      setSearchLoading(false);
    }, "applyFilters");
    const onSearchByKeyword = /* @__PURE__ */ __name(async () => {
      const newFilters = {
        ...appliedFilters,
        keyword: searchKeyword
      };
      applyFilters(newFilters);
    }, "onSearchByKeyword");
    const onFilterApply = /* @__PURE__ */ __name((activeFilters) => {
      if (loading || searchLoading) return;
      applyFilters(activeFilters);
    }, "onFilterApply");
    const onFilterChange = /* @__PURE__ */ __name(async (filters) => {
      setStateFilters(filters);
    }, "onFilterChange");
    const onFilterClean = /* @__PURE__ */ __name(() => {
      setStateFilters(INITIAL_FILTER_STATE);
      setAppliedFilters(INITIAL_FILTER_STATE);
      setTableView(dataInitView);
      setSearchKeyword("");
    }, "onFilterClean");
    const onFilterSummaryRemove = /* @__PURE__ */ __name((filterName, { value }) => {
      const updatedFilters = filterName === "acceleratedConcurrent" ? defaultAccelConcOption : appliedFilters[filterName].filter((f2) => f2.value !== value);
      const newFilters = {
        ...appliedFilters,
        [filterName]: updatedFilters
      };
      applyFilters(newFilters);
    }, "onFilterSummaryRemove");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeStyle, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ListingStyle, {}),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorAlert, { message: ERROR_MESSAGE }),
      !(hero == null ? void 0 : hero.hide) ? /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-testid": "hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ir,
        {
          image: (hero == null ? void 0 : hero.image) || listingPageDefault.hero.image,
          title: {
            text: resolveListingHeroTitle(programList.dataSource),
            highlightColor: "gold",
            ...hero == null ? void 0 : hero.title,
            maxWidth: "100%"
          },
          contents: hero == null ? void 0 : hero.contents
        }
      ) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Main, { "data-is-loading": loading, className: "main-section dg-margin-top", children: [
        (introContent == null ? void 0 : introContent.breadcrumbs) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mt-4 mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Breadcrumbs,
          {
            breadcrumbs: introContent.breadcrumbs,
            section: hero ? hero.title.text : ""
          }
        ) }),
        introContent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          IntroContent,
          {
            applyNowUrl: (actionUrls == null ? void 0 : actionUrls.applyNowUrl) || listingPageDefault.actionUrls.applyNowUrl,
            type: introContent.type,
            header: introContent.header,
            title: introContent.title,
            contents: introContent.contents,
            image: introContent.image,
            video: introContent.video,
            photoGrid: introContent.photoGrid
          }
        ) : null,
        hasSearchBar || hasFilters ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "no-space", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrowseTitle, {}),
          hasSearchBar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            SearchBar,
            {
              value: searchKeyword,
              onChange: setSearchKeyword,
              onSearch: onSearchByKeyword
            }
          ) : null,
          hasFilters ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Filters,
            {
              value: stateFilters,
              onChange: onFilterChange,
              onApply: onFilterApply,
              onClean: onFilterClean
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSeparator, {})
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex justify-content-between filter-switch-container", children: hasFilters ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          FiltersSummary,
          {
            value: appliedFilters,
            onRemove: onFilterSummaryRemove
          }
        ) : null }) }),
        loading || searchLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProgramList,
          {
            dataViewComponent,
            loading: loading || searchLoading,
            programs: tableView,
            actionUrls,
            degreesPerPage
          }
        )
      ] })
    ] });
  }, "ListingPage");
  ListingPage.propTypes = {
    appPathFolder: PropTypes.string,
    actionUrls: PropTypes.shape({
      applyNowUrl: PropTypes.string
    }),
    hasSearchBar: PropTypes.bool,
    hasFilters: PropTypes.bool,
    hero: PropTypes.shape(ir.propTypes),
    introContent: PropTypes.shape(IntroContent.propTypes),
    programList: PropTypes.shape({
      dataSource: dataSourcePropShape,
      settings: columSettingsPropShape
    }),
    degreesPerPage: PropTypes.number
  };
  const AppComponent$1 = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AppProvider, { listPageProps: props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListingPage, { ...props }) }), "AppComponent$1");
  AppComponent$1.propTypes = ListingPage.propTypes;
  const Section = qe.section`
  position: relative;
  padding-top: var(--uds-dp-section-margin);
  padding-bottom: var(--uds-dp-section-margin);
`;
  const Background = qe.div`
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
  function AffordingCollege() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Section,
      {
        className: "container",
        id: progDetailSectionIds.affordingCollege.targetIdName,
        "data-testid": "affording-college",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Background, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: "Affording college" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
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
  __name(AffordingCollege, "AffordingCollege");
  var classnames = { exports: {} };
  (function(module2) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = "";
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      __name(classNames2, "classNames");
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames2.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      __name(parseValue, "parseValue");
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      __name(appendClass, "appendClass");
      if (module2.exports) {
        classNames2.default = classNames2;
        module2.exports = classNames2;
      } else {
        window.classNames = classNames2;
      }
    })();
  })(classnames);
  var classnamesExports = classnames.exports;
  const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
  const ButtonList = qe.ul`
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
`;
  const undergraduateTemplate = /* @__PURE__ */ __name(({
    transferRequirements = "",
    additionalRequirements = ""
  }) => {
    const generalRequirements = [
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
    ];
    const undergradRequirements = [];
    if (additionalRequirements == null ? void 0 : additionalRequirements.trim())
      undergradRequirements.push({
        content: {
          header: "Additional Requirements",
          body: additionalRequirements
        }
      });
    if (transferRequirements == null ? void 0 : transferRequirements.trim())
      undergradRequirements.push({
        content: {
          header: "Transfer Admission Requirements",
          body: transferRequirements
        }
      });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "All students are required to meet general university admission requirements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ButtonList,
        {
          className: classNames("", {
            "mb-0": undergradRequirements.length === 0
          }),
          children: generalRequirements.map(({ label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Qn,
            {
              ariaLabel: label,
              color: "maroon",
              href,
              label,
              size: "small"
            }
          ) }, label))
        }
      ),
      undergradRequirements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zn, { cards: undergradRequirements, openedCard: 1 }) })
    ] });
  }, "undergraduateTemplate");
  function ApplicationRequirements({
    graduateRequirements,
    transferRequirements,
    isMinorOrCertificate,
    additionalRequirements,
    minorRequirements
  }) {
    let reqsLabel;
    if (graduateRequirements || isMinorOrCertificate) {
      reqsLabel = !isMinorOrCertificate ? "Degree requirements" : "Program requirements";
    } else {
      reqsLabel = !isMinorOrCertificate ? "Admission requirements" : "Program requirements";
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          id: progDetailSectionIds.applicationRequirements.targetIdName,
          "data-testid": "application-requirements",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: reqsLabel }) }),
            graduateRequirements || isMinorOrCertificate ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                dangerouslySetInnerHTML: sanitizeDangerousMarkup(
                  graduateRequirements || minorRequirements
                )
              }
            ) : undergraduateTemplate({
              transferRequirements,
              additionalRequirements
            })
          ]
        }
      ),
      graduateRequirements || isMinorOrCertificate ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          id: progDetailSectionIds.degreeRequirements.targetIdName,
          "data-testid": "degree-requirements",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: "Admission requirements" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                dangerouslySetInnerHTML: sanitizeDangerousMarkup(
                  additionalRequirements
                )
              }
            )
          ]
        }
      ) : null
    ] });
  }
  __name(ApplicationRequirements, "ApplicationRequirements");
  ApplicationRequirements.propTypes = {
    graduateRequirements: PropTypes.string,
    transferRequirements: PropTypes.string,
    isMinorOrCertificate: PropTypes.bool,
    additionalRequirements: PropTypes.string,
    minorRequirements: PropTypes.string
  };
  const GlanceItem = /* @__PURE__ */ __name(({ item, type }) => {
    const genId = idGenerator("glance-");
    const renderContent = /* @__PURE__ */ __name(() => {
      if (typeof item === "object") {
        return item.map((loc, index) => {
          const url = ["", "#"].includes(loc.url) ? null : loc.url;
          let separator = "";
          if (index > 0 && index < item.length - 1) {
            separator = ", ";
          }
          if (index === item.length - 1 && item.length > 1) {
            separator = " or ";
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(r$1.Fragment, { children: [
            separator,
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: url, rel: "noreferrer", target: "_blank", children: loc.text })
          ] }, genId.next().value);
        });
      }
      return item;
    }, "renderContent");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas fa-${glanceItemsMap[type].icon} fa-li` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
        glanceItemsMap[type].title,
        ": "
      ] }),
      renderContent()
    ] });
  }, "GlanceItem");
  GlanceItem.propTypes = {
    item: PropTypes.oneOfType([
      PropTypes.arrayOf(glanceItemPropShape),
      PropTypes.string
    ]),
    type: PropTypes.string
  };
  const AtAGlance = /* @__PURE__ */ __name(({
    offeredBy,
    locations,
    firstRequirementMathCourse,
    mathIntensity,
    timeCommitment
  }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: progDetailSectionIds.atAGlance.targetIdName,
        "data-testid": "at-aglance",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: "At a glance: program details" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "uds-list fa-ul maroon pt-2 pb-0 pe-0", children: [
            offeredBy && /* @__PURE__ */ jsxRuntimeExports.jsx(GlanceItem, { item: [offeredBy], type: "offeredBy" }),
            locations && /* @__PURE__ */ jsxRuntimeExports.jsx(GlanceItem, { item: locations, type: "locations" }),
            firstRequirementMathCourse && /* @__PURE__ */ jsxRuntimeExports.jsx(
              GlanceItem,
              {
                item: firstRequirementMathCourse,
                type: "firstRequirementMathCourse"
              }
            ),
            mathIntensity && /* @__PURE__ */ jsxRuntimeExports.jsx(GlanceItem, { item: mathIntensity, type: "mathIntensity" }),
            timeCommitment && /* @__PURE__ */ jsxRuntimeExports.jsx(GlanceItem, { item: timeCommitment, type: "timeCommitment" })
          ] })
        ]
      }
    );
  }, "AtAGlance");
  AtAGlance.propTypes = {
    offeredBy: glanceItemPropShape.isRequired,
    locations: PropTypes.arrayOf(glanceItemPropShape).isRequired,
    firstRequirementMathCourse: PropTypes.string.isRequired,
    mathIntensity: PropTypes.string,
    timeCommitment: PropTypes.string
  };
  const defaultText = `
ASU offers this program in an online format
 with multiple enrollment sessions throughout
  the year. Applicants may view the program
   description and request more information.`;
  function AttendOnline({ image, learnMoreLink, contents }) {
    const backgroundImage = `linear-gradient(180deg, #19191900 0%, #191919c9 100%),url('${image.url}')`;
    const genId = idGenerator("attend-online-");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: progDetailSectionIds.attendOnline.targetIdName,
        className: "uds-card-and-image",
        style: {
          backgroundImage
        },
        "data-testid": "attend-online",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uds-card-and-image-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card card-centered", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-wifi fa-2x card-icon-top" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: "Attend online" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body", children: contents ? contents.map((content) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: content }, genId.next().value)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: defaultText }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Qn,
            {
              label: "Learn about online options",
              ariaLabel: "Learn about online options",
              href: learnMoreLink,
              color: "maroon",
              size: "small"
            }
          ) })
        ] }) })
      }
    );
  }
  __name(AttendOnline, "AttendOnline");
  AttendOnline.propTypes = {
    learnMoreLink: PropTypes.string,
    image: imagePropShape,
    contents: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    )
  };
  const WrapperContainer$2 = qe.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`;
  const CareerOutlook = /* @__PURE__ */ __name(({ contents, image }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    WrapperContainer$2,
    {
      id: progDetailSectionIds.careerOutlook.targetIdName,
      "data-testid": "career-outlook",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        OverlapContentImage,
        {
          headingTag: "H2",
          title: progDetailSectionIds.careerOutlook.text,
          contents,
          image
        }
      )
    }
  ), "CareerOutlook");
  CareerOutlook.propTypes = OverlapContentImage.propTypes;
  const WrapperContainer$1 = qe.div`
  & p:last-of-type {
    margin-bottom: 0;
  }

  & a {
    word-break: break-word;
  }
`;
  function ChangeYourMajor({ content }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: progDetailSectionIds.changeMajorRequirements.targetIdName,
        className: "change-your-major",
        "data-testid": "change-your-major",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: "Change your major requirements for current students" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            WrapperContainer$1,
            {
              dangerouslySetInnerHTML: sanitizeDangerousMarkup(content)
            }
          )
        ]
      }
    );
  }
  __name(ChangeYourMajor, "ChangeYourMajor");
  ChangeYourMajor.propTypes = {
    content: PropTypes.string
  };
  function CustomText({ content = "" }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-testid": "custom-text",
        className: "mt-3",
        dangerouslySetInnerHTML: sanitizeDangerousMarkup(content)
      }
    );
  }
  __name(CustomText, "CustomText");
  CustomText.propTypes = {
    content: PropTypes.string
  };
  const widthSetUp = `
  width: unset !important;
  min-width: unset !important;
`;
  const SunIcon = qe.i`
  color: #fecc41;
  font-size: 1.2rem;
  ${widthSetUp}
`;
  const LeafIcon = qe.i`
  color: #78be21;
  ${widthSetUp}
`;
  function Table({ data }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uds-table mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", children: "Career" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "text-end", children: "Growth*" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "text-end", children: "Median Salary*" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: data == null ? void 0 : data.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { scope: "row", style: { fontWeight: "normal" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: field.career.url, target: "_blank", rel: "noreferrer", children: field.career.text }),
          field.greenOccupation && /* @__PURE__ */ jsxRuntimeExports.jsx(LeafIcon, { className: "fas fa-leaf ms-1" }),
          field.brightOutlook && /* @__PURE__ */ jsxRuntimeExports.jsx(SunIcon, { className: "fas fa-sun ms-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-end", children: [
          +field.growth,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-end", children: field.medianSalary || 0 })
      ] }, field.career.url)) })
    ] }) });
  }
  __name(Table, "Table");
  Table.propTypes = {
    data: PropTypes.arrayOf(exampleCareersTableDataPropShape)
  };
  function ExampleCareers({ tableData }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: progDetailSectionIds.exampleCareers.targetIdName,
        className: "container",
        "data-testid": "example-careers",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Example careers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Example job titles and salaries listed below are not necessarily entry level, and students should take into consideration how years of experience and geographical location may affect pay scales. Some jobs also may require advanced degrees, certifications or state-specific licensure." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { data: tableData }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "* Data obtained from the Occupational Information Network (O*NET) under sponsorship of the U.S. Department of Labor/Employment and Training Administration (USDOL/ETA)." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "me-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SunIcon, { className: "fas fa-sun me-1" }),
              "Bright outlook"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LeafIcon, { className: "fas fa-leaf me-1" }),
              "Green occupation"
            ] })
          ] })
        ]
      }
    );
  }
  __name(ExampleCareers, "ExampleCareers");
  ExampleCareers.propTypes = {
    tableData: PropTypes.arrayOf(exampleCareersTableDataPropShape)
  };
  const List = qe.ul`
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
`;
  const ContentBlock = /* @__PURE__ */ __name(({ id, title, links }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id, className: "mt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This program allows students to obtain both a bachelor's and master's degree in as little as five years. It is offered as an accelerated bachelor's and master's degree with:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "mt-3 mb-3", children: links.map((link, index) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.url, target: "_blank", rel: "noreferrer", children: link.title }) }, `${link.title}-${index}`)
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Acceptance to the graduate program requires a separate application. During their junior year, eligible students will be advised by their academic departments to apply." })
  ] }), "ContentBlock");
  ContentBlock.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    links: flexibleDegreeOptionsLinks
  };
  function FlexibleDegreeOptions({ acceleratedLinks, concurrentLinks }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: progDetailSectionIds.flexibleDegreeOptions.targetIdName,
        className: "container",
        "data-testid": "flexible-degree-options",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: "Flexible degree options" }) }),
          !!acceleratedLinks.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContentBlock,
            {
              id: progDetailSectionIds.flexibleDegreeOptions.acceleratedId,
              title: "Accelerated program options",
              links: acceleratedLinks
            }
          ),
          !!concurrentLinks.length && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContentBlock,
            {
              id: progDetailSectionIds.flexibleDegreeOptions.concurrentId,
              title: "Concurrent degree program",
              links: concurrentLinks
            }
          )
        ]
      }
    );
  }
  __name(FlexibleDegreeOptions, "FlexibleDegreeOptions");
  FlexibleDegreeOptions.propTypes = {
    acceleratedLinks: flexibleDegreeOptionsLinks,
    concurrentLinks: flexibleDegreeOptionsLinks
  };
  const WrapperContainer = qe.section`
  width: 100%;
  & a {
    word-break: break-word;
  }
`;
  const GlobalOpportunity = /* @__PURE__ */ __name(({ contents, image }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    WrapperContainer,
    {
      id: progDetailSectionIds.globalOpportunity.targetIdName,
      "data-testid": "global-opportunity",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        OverlapContentImage,
        {
          headingTag: "H2",
          title: progDetailSectionIds.globalOpportunity.text,
          contents,
          image
        }
      )
    }
  ), "GlobalOpportunity");
  GlobalOpportunity.propTypes = OverlapContentImage.propTypes;
  const IntroImage = /* @__PURE__ */ __name(({ url, altText }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uds-img pt-3 pb-3", "data-testid": "intro-image", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: url, className: "img-fluid", alt: altText }) }), "IntroImage");
  IntroImage.propTypes = { ...imagePropType };
  const youtubeURLParser = /* @__PURE__ */ __name((type, url) => {
    if (type !== "youtube") {
      return url;
    }
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? `https://www.youtube.com/embed/${match[7]}` : url;
  }, "youtubeURLParser");
  const VideoWrapper = qe.div`
  .uds-video-container {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
  const IntroVideo = /* @__PURE__ */ __name(({ type, url, vttUrl, title }) => /* @__PURE__ */ jsxRuntimeExports.jsx(VideoWrapper, { "data-testid": "intro-video", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    mr,
    {
      type,
      url: youtubeURLParser(type, url),
      vttUrl,
      title,
      controls: true
    }
  ) }), "IntroVideo");
  IntroVideo.propTypes = { ...videoPropType };
  function MarketText({ contents = [] }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "market-text", children: contents.map((content, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `mt-3 ${spreadClasses(content.cssClass)}`,
        dangerouslySetInnerHTML: sanitizeDangerousMarkup(content.text)
      },
      `content-${index + 1}`
    )) });
  }
  __name(MarketText, "MarketText");
  MarketText.propTypes = {
    contents: PropTypes.arrayOf(contentPropShape)
  };
  function NextSteps({ cards, defaultCards }) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "container",
        id: progDetailSectionIds.nextSteps.targetIdName,
        "data-testid": "next-steps",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Next steps to attend ASU" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                icon: ((_a = cards == null ? void 0 : cards.learnMore) == null ? void 0 : _a.icon) ?? defaultCards.learnMore.icon,
                title: ((_b = cards == null ? void 0 : cards.learnMore) == null ? void 0 : _b.title) ?? defaultCards.learnMore.title,
                body: ((_c = cards == null ? void 0 : cards.learnMore) == null ? void 0 : _c.content) ?? defaultCards.learnMore.content,
                buttons: [
                  ((_d = cards == null ? void 0 : cards.learnMore) == null ? void 0 : _d.buttonLink) ?? defaultCards.learnMore.buttonLink
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                icon: ((_e2 = cards == null ? void 0 : cards.apply) == null ? void 0 : _e2.icon) ?? defaultCards.apply.icon,
                title: ((_f = cards == null ? void 0 : cards.apply) == null ? void 0 : _f.title) ?? defaultCards.apply.title,
                body: ((_g = cards == null ? void 0 : cards.apply) == null ? void 0 : _g.content) ?? defaultCards.apply.content,
                buttons: [
                  ((_h = cards == null ? void 0 : cards.apply) == null ? void 0 : _h.buttonLink) ?? defaultCards.apply.buttonLink
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                icon: ((_i = cards == null ? void 0 : cards.visit) == null ? void 0 : _i.icon) ?? defaultCards.visit.icon,
                title: ((_j = cards == null ? void 0 : cards.visit) == null ? void 0 : _j.title) ?? defaultCards.visit.title,
                body: ((_k = cards == null ? void 0 : cards.visit) == null ? void 0 : _k.content) ?? defaultCards.visit.content,
                buttons: [
                  ((_l = cards == null ? void 0 : cards.visit) == null ? void 0 : _l.buttonLink) ?? defaultCards.visit.buttonLink
                ]
              }
            ) })
          ] })
        ]
      }
    );
  }
  __name(NextSteps, "NextSteps");
  NextSteps.propTypes = {
    cards: PropTypes.shape({
      learnMore: cardPropShape,
      apply: cardPropShape,
      visit: cardPropShape
    }),
    defaultCards: PropTypes.shape({
      learnMore: cardPropShape,
      apply: cardPropShape,
      visit: cardPropShape
    })
  };
  function ProfessionalLicensure({ content = "" }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container", "data-testid": "professional-licensure", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Professional licensure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { dangerouslySetInnerHTML: sanitizeDangerousMarkup(content) })
    ] });
  }
  __name(ProfessionalLicensure, "ProfessionalLicensure");
  ProfessionalLicensure.propTypes = {
    content: PropTypes.node
  };
  const defaultGAEvent = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    region: "main content",
    section: "Program contact information"
  };
  const ListContainer = qe.ul`
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
  function ProgramContactInfo({ department, asuOfficeLoc, email, phone }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: progDetailSectionIds.programContactInfo.targetIdName,
        "data-testid": "program-contact-info",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "highlight-gold", children: "Program contact information" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have questions related to admission, please fill out the request information form above and an admission specialist will contact you directly. For questions regarding faculty or courses, please use the contact information below." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ListContainer, { className: "text-maroon", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "i",
                {
                  className: "c-icon fas icon-small fa-map-marker-alt",
                  title: "Department  Address"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: department.url,
                  onClick: /* @__PURE__ */ __name(() => trackGAEvent({ ...defaultGAEvent, text: department.text }), "onClick"),
                  children: department.text
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "c-icon text-dark office-loc", children: asuOfficeLoc }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "c-icon fas icon-small fa-envelope", title: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `mailto:${email.url || email.text}`,
                  onClick: /* @__PURE__ */ __name(() => trackGAEvent({ ...defaultGAEvent, text: email.text }), "onClick"),
                  children: email.text
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "c-icon fas icon-small fa-phone", title: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `tel:${phone}`,
                  onClick: /* @__PURE__ */ __name(() => trackGAEvent({ ...defaultGAEvent, text: phone }), "onClick"),
                  children: phone
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
  __name(ProgramContactInfo, "ProgramContactInfo");
  ProgramContactInfo.propTypes = {
    department: linkPropShape,
    asuOfficeLoc: PropTypes.string,
    email: linkPropShape,
    phone: PropTypes.string
  };
  function ProgramDescription({ content, stemOptText, programNotFound }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "program-description", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: programNotFound ? `Program not found` : `Program description` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-testid": "program-description-body",
          dangerouslySetInnerHTML: sanitizeDangerousMarkup(content)
        }
      ),
      stemOptText && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: STEM_OPT_HEADER_TEXT }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-testid": "stem-opt-text",
            dangerouslySetInnerHTML: sanitizeDangerousMarkup(stemOptText)
          }
        )
      ] })
    ] });
  }
  __name(ProgramDescription, "ProgramDescription");
  ProgramDescription.propTypes = {
    content: PropTypes.string,
    stemOptText: PropTypes.string,
    programNotFound: PropTypes.bool
  };
  const CHANGEMAJOR_URL = "https://changemajor.apps.asu.edu/";
  const ONCAMPUS_TITLE = "On-campus students";
  const ONLINE_TITLE = "Online students";
  const VIEW_MAJOR_MAP_WITH_SLASH = "View major map -";
  const VIEW_MAJOR_MAP = "View major map";
  function RequiredCourse({
    onlineMajorMapURL = "",
    majorMapOnCampusURL = "",
    subPlnMajorMaps = [],
    subPlns = []
  }) {
    const getSubPlnDescription = /* @__PURE__ */ __name((subPlnCode) => {
      const matchingSubPln = subPlns.find(
        (subPln) => subPln.acadSubPlanCode === subPlnCode
      );
      return matchingSubPln ? matchingSubPln.description : "";
    }, "getSubPlnDescription");
    const addLink = /* @__PURE__ */ __name((url, text2, arr) => {
      if (url) {
        arr.push({
          href: url,
          text: text2
        });
      }
    }, "addLink");
    const oncampusLinks = [];
    const onlineLinks = [];
    subPlnMajorMaps.forEach((item) => {
      const planDescription = getSubPlnDescription(item.acadSubPlanCode);
      const bulletText = `${VIEW_MAJOR_MAP_WITH_SLASH} ${planDescription}`;
      addLink(item.url, bulletText, oncampusLinks);
    });
    if (majorMapOnCampusURL) {
      addLink(majorMapOnCampusURL, VIEW_MAJOR_MAP, oncampusLinks);
    }
    if (onlineMajorMapURL) {
      addLink(onlineMajorMapURL, VIEW_MAJOR_MAP, onlineLinks);
    }
    const renderLinks = /* @__PURE__ */ __name((title, links) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-3", children: links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, children: link.text }) }, link.href)) })
      ] });
    }, "renderLinks");
    const RequiredCourseSection = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container ps-0", "data-testid": "required-course", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Required courses (major map)" }),
      oncampusLinks.length > 0 && renderLinks(ONCAMPUS_TITLE, oncampusLinks),
      onlineLinks.length > 0 && renderLinks(ONLINE_TITLE, onlineLinks),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What if:" }),
        " See how your courses can be applied to another major and find out how to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: CHANGEMAJOR_URL, children: "change your major" })
      ] })
    ] }), "RequiredCourseSection");
    return !(subPlnMajorMaps == null ? void 0 : subPlnMajorMaps.length) && !onlineMajorMapURL && !majorMapOnCampusURL ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}) : RequiredCourseSection();
  }
  __name(RequiredCourse, "RequiredCourse");
  RequiredCourse.propTypes = {
    onlineMajorMapURL: PropTypes.string,
    majorMapOnCampusURL: PropTypes.string,
    subPlnMajorMaps: PropTypes.arrayOf(
      PropTypes.shape({
        campus: PropTypes.string,
        acadSubPlanCode: PropTypes.string,
        defaultFlag: PropTypes.bool,
        url: PropTypes.string
      })
    ),
    subPlns: PropTypes.arrayOf(
      PropTypes.shape({
        acadSubPlanCode: PropTypes.string,
        description: PropTypes.string
      })
    )
  };
  const WhyChooseAsu = /* @__PURE__ */ __name(({ sectionIntroText, cards, defaultCards }) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: progDetailSectionIds.whyChooseAsu.targetIdName,
        className: "container",
        "data-testid": "why-choose-asu",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Why choose ASU" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              dangerouslySetInnerHTML: sanitizeDangerousMarkup(sectionIntroText)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                image: ((_b = (_a = cards == null ? void 0 : cards.faculty) == null ? void 0 : _a.image) == null ? void 0 : _b.url) ?? defaultCards.faculty.image.url,
                imageAltText: ((_d = (_c = cards == null ? void 0 : cards.faculty) == null ? void 0 : _c.image) == null ? void 0 : _d.altText) ?? defaultCards.faculty.image.altText,
                title: ((_e2 = cards == null ? void 0 : cards.faculty) == null ? void 0 : _e2.title) ?? defaultCards.faculty.title,
                body: ((_f = cards == null ? void 0 : cards.faculty) == null ? void 0 : _f.text) ?? defaultCards.faculty.text,
                buttons: [((_g = cards == null ? void 0 : cards.faculty) == null ? void 0 : _g.button) ?? defaultCards.faculty.button]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                image: ((_i = (_h = cards == null ? void 0 : cards.programs) == null ? void 0 : _h.image) == null ? void 0 : _i.url) ?? defaultCards.programs.image.url,
                imageAltText: ((_k = (_j = cards == null ? void 0 : cards.programs) == null ? void 0 : _j.image) == null ? void 0 : _k.altText) ?? defaultCards.programs.image.altText,
                title: ((_l = cards == null ? void 0 : cards.programs) == null ? void 0 : _l.title) ?? defaultCards.programs.title,
                body: ((_m = cards == null ? void 0 : cards.programs) == null ? void 0 : _m.text) ?? defaultCards.programs.text,
                buttons: [((_n2 = cards == null ? void 0 : cards.programs) == null ? void 0 : _n2.button) ?? defaultCards.programs.button]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                image: ((_p = (_o = cards == null ? void 0 : cards.research) == null ? void 0 : _o.image) == null ? void 0 : _p.url) ?? defaultCards.research.image.url,
                imageAltText: ((_r = (_q = cards == null ? void 0 : cards.research) == null ? void 0 : _q.image) == null ? void 0 : _r.altText) ?? defaultCards.research.image.altText,
                title: ((_s = cards == null ? void 0 : cards.research) == null ? void 0 : _s.title) ?? defaultCards.research.title,
                body: ((_t2 = cards == null ? void 0 : cards.research) == null ? void 0 : _t2.text) ?? defaultCards.research.text,
                buttons: [((_u = cards == null ? void 0 : cards.research) == null ? void 0 : _u.button) ?? defaultCards.research.button]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                image: ((_w = (_v = cards == null ? void 0 : cards.inclusion) == null ? void 0 : _v.image) == null ? void 0 : _w.url) ?? defaultCards.inclusion.image.url,
                imageAltText: ((_y = (_x = cards == null ? void 0 : cards.inclusion) == null ? void 0 : _x.image) == null ? void 0 : _y.altText) ?? defaultCards.inclusion.image.altText,
                title: ((_z = cards == null ? void 0 : cards.inclusion) == null ? void 0 : _z.title) ?? defaultCards.inclusion.title,
                body: ((_A = cards == null ? void 0 : cards.inclusion) == null ? void 0 : _A.text) ?? defaultCards.inclusion.text,
                buttons: [
                  ((_B = cards == null ? void 0 : cards.inclusion) == null ? void 0 : _B.button) ?? defaultCards.inclusion.button
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                image: ((_D = (_C = cards == null ? void 0 : cards.mentors) == null ? void 0 : _C.image) == null ? void 0 : _D.url) ?? defaultCards.mentors.image.url,
                imageAltText: ((_F = (_E = cards == null ? void 0 : cards.mentors) == null ? void 0 : _E.image) == null ? void 0 : _F.altText) ?? defaultCards.mentors.image.altText,
                title: ((_G = cards == null ? void 0 : cards.mentors) == null ? void 0 : _G.title) ?? defaultCards.mentors.title,
                body: ((_H = cards == null ? void 0 : cards.mentors) == null ? void 0 : _H.text) ?? defaultCards.mentors.text,
                buttons: [((_I = cards == null ? void 0 : cards.mentors) == null ? void 0 : _I.button) ?? defaultCards.mentors.button]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 col-12 col-md-6 col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              tr,
              {
                image: ((_K = (_J = cards == null ? void 0 : cards.honors) == null ? void 0 : _J.image) == null ? void 0 : _K.url) ?? defaultCards.honors.image.url,
                imageAltText: ((_M = (_L = cards == null ? void 0 : cards.honors) == null ? void 0 : _L.image) == null ? void 0 : _M.altText) ?? defaultCards.honors.image.altText,
                title: ((_N = cards == null ? void 0 : cards.honors) == null ? void 0 : _N.title) ?? defaultCards.honors.title,
                body: ((_O = cards == null ? void 0 : cards.honors) == null ? void 0 : _O.text) ?? defaultCards.honors.text,
                buttons: [((_P = cards == null ? void 0 : cards.honors) == null ? void 0 : _P.button) ?? defaultCards.honors.button]
              }
            ) })
          ] })
        ]
      }
    );
  }, "WhyChooseAsu");
  WhyChooseAsu.propTypes = whyChooseAsuShape;
  const DetailPage = /* @__PURE__ */ __name(({
    appPathFolder: _2,
    dataSource,
    anchorMenu,
    hero,
    introContent,
    atAGlance,
    applicationRequirements,
    changeMajorRequirements,
    affordingCollege,
    flexibleDegreeOptions,
    careerOutlook,
    exampleCareers,
    globalOpportunity,
    attendOnline,
    programContactInfo,
    nextSteps,
    whyChooseAsu
  }) => {
    var _a, _b, _c, _d;
    const [{ data, loading, error }, doFetchPrograms] = useFetch();
    const [resolver, setResolver] = r$1.useState(degreeDataPropResolverService({}));
    const [acceleratedAndConcurrentDegrees, setAcceleratedAndConcurrentDegrees] = r$1.useState({ accelerateData: [], concurrentData: [] });
    const url = urlResolver(dataSource, detailPageDefaultDataSource);
    const { defaultState } = r$1.useContext(AppContext);
    const { detailPageDefault } = defaultState;
    r$1.useEffect(() => {
      if (typeof window !== "undefined") {
        trackReactComponent({
          packageName: "app-degree-pages",
          component: "DetailPage",
          type: "NA",
          configuration: {
            dataSource
          }
        });
      }
    }, []);
    r$1.useEffect(() => {
      doFetchPrograms(url);
    }, [url]);
    r$1.useEffect(() => {
      if (data) {
        const newResolver = degreeDataPropResolverService(data);
        setResolver(newResolver);
        if (newResolver.hasConcurrentOrAccelerateDegrees()) {
          executePromisesAndUpdateState(
            [
              newResolver.getAccelerateDegrees(),
              newResolver.getConcurrentDegrees()
            ],
            setAcceleratedAndConcurrentDegrees
          );
        }
      }
    }, [data]);
    const filteredAnchorMenu = filterAnchorMenu(anchorMenu, resolver);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeStyle, {}),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorAlert, { message: ERROR_MESSAGE }),
      !(hero == null ? void 0 : hero.hide) && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ir,
        {
          image: (hero == null ? void 0 : hero.image) || detailPageDefault.hero.image,
          title: {
            ...detailPageDefault.hero.title,
            text: resolver.getMajorDesc(),
            ...hero == null ? void 0 : hero.title
          },
          contents: hero == null ? void 0 : hero.contents
        }
      ) }),
      !loading && hasValidAnchorMenu(filteredAnchorMenu) && /* @__PURE__ */ jsxRuntimeExports.jsx(OnThisPageAnchorMenu, { anchorMenu: filteredAnchorMenu }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Main$1, { as: "div", "data-is-loading": loading, className: "main-section", children: [
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
        !loading && ((data == null ? void 0 : data.error) ? /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mt-4 mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProgramDescription,
          {
            content: PROGRAM_NOT_FOUND_TEXT,
            programNotFound: true
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mt-4 mb-0", children: [
          (introContent == null ? void 0 : introContent.breadcrumbs) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Breadcrumbs,
            {
              breadcrumbs: introContent.breadcrumbs,
              section: hero ? hero.title.text : resolver.getMajorDesc()
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row flex-column-reverse flex-sm-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col col-sm-12 col-md-7 col-lg-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "intro", children: [
                !resolver.isValidActiveProgram() && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomText, { content: resolver.getAsuCustomText() }),
                !(introContent == null ? void 0 : introContent.hideMarketText) && ((introContent == null ? void 0 : introContent.contents) || resolver.getMarketText()) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MarketText,
                  {
                    contents: (introContent == null ? void 0 : introContent.contents) || [
                      { text: resolver.getMarketText() }
                    ]
                  }
                ),
                !(introContent == null ? void 0 : introContent.hideProgramDesc) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProgramDescription,
                  {
                    content: resolver.getFullDescription(),
                    stemOptText: resolver.getStemOptText()
                  }
                )
              ] }),
              !(atAGlance == null ? void 0 : atAGlance.hide) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                AtAGlance,
                {
                  offeredBy: (atAGlance == null ? void 0 : atAGlance.offeredBy) || {
                    text: resolver.getCollegeDesc(),
                    url: resolver.getCollegeUrl()
                  },
                  locations: (atAGlance == null ? void 0 : atAGlance.locations) || getCampusLocations(resolver),
                  firstRequirementMathCourse: (atAGlance == null ? void 0 : atAGlance.firstRequirementMathCourse) || resolver.getMinMathReq(),
                  mathIntensity: (atAGlance == null ? void 0 : atAGlance.mathIntensity) || resolver.getMathIntensity()
                }
              ),
              !(introContent == null ? void 0 : introContent.hideRequiredCourses) && !resolver.isMinorOrCertificate() && /* @__PURE__ */ jsxRuntimeExports.jsx(
                RequiredCourse,
                {
                  onlineMajorMapURL: resolver.getOnlineMajorMapURL(),
                  majorMapOnCampusURL: resolver.getGeneralDegreeMajorMap(),
                  subPlnMajorMaps: resolver.getSubPlnMajorMaps(),
                  subPlns: resolver.getSubPln()
                }
              ),
              !(applicationRequirements == null ? void 0 : applicationRequirements.hide) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                ApplicationRequirements,
                {
                  graduateRequirements: resolver.isGradProgram() ? resolver.getGraduateRequirements() : null,
                  isMinorOrCertificate: resolver.isMinorOrCertificate(),
                  minorRequirements: resolver.getMinorCourseRequirements(),
                  additionalRequirements: resolver.getAdmissionsRequirementsText(),
                  transferRequirements: resolver.getTransferAdmission()
                }
              ),
              !(changeMajorRequirements == null ? void 0 : changeMajorRequirements.hide) && !resolver.isMinorOrCertificate() && !resolver.isGradProgram() && /* @__PURE__ */ jsxRuntimeExports.jsx(ChangeYourMajor, { content: resolver.getChangeMajor() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col col-sm-12 col-md-5 col-lg-5", children: [
              (introContent == null ? void 0 : introContent.video) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                IntroVideo,
                {
                  type: introContent.video.type,
                  url: introContent.video.url,
                  vttUrl: introContent.video.vttUrl,
                  title: introContent.video.title
                }
              ),
              !(introContent == null ? void 0 : introContent.video) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                IntroImage,
                {
                  url: ((_a = introContent == null ? void 0 : introContent.image) == null ? void 0 : _a.url) || detailPageDefault.introContent.image.url,
                  altText: ((_b = introContent == null ? void 0 : introContent.image) == null ? void 0 : _b.altText) || detailPageDefault.introContent.image.altText
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
            !(nextSteps == null ? void 0 : nextSteps.hide) && !resolver.isMinorOrCertificate() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              NextSteps,
              {
                cards: nextSteps == null ? void 0 : nextSteps.cards,
                defaultCards: detailPageDefault.nextSteps.cards
              }
            ),
            !(affordingCollege == null ? void 0 : affordingCollege.hide) && /* @__PURE__ */ jsxRuntimeExports.jsx(AffordingCollege, {}),
            !(flexibleDegreeOptions == null ? void 0 : flexibleDegreeOptions.hide) && resolver.hasConcurrentOrAccelerateDegrees() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              FlexibleDegreeOptions,
              {
                acceleratedLinks: formatAcceleratedConcurrentLinks(
                  acceleratedAndConcurrentDegrees.accelerateData
                ),
                concurrentLinks: formatAcceleratedConcurrentLinks(
                  acceleratedAndConcurrentDegrees.concurrentData
                )
              }
            ),
            !(careerOutlook == null ? void 0 : careerOutlook.hide) && resolver.getAsuCareerOpportunity() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              CareerOutlook,
              {
                image: (careerOutlook == null ? void 0 : careerOutlook.image) || detailPageDefault.careerOutlook.image,
                contents: [{ text: resolver.getAsuCareerOpportunity() }]
              }
            ),
            !(exampleCareers == null ? void 0 : exampleCareers.hide) && resolver.hasCareerData() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExampleCareers,
              {
                tableData: formatCareerData(resolver.getCareerData())
              }
            ),
            resolver.getProfessionalLicensureText() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProfessionalLicensure,
              {
                content: resolver.getProfessionalLicensureText()
              }
            ),
            !(globalOpportunity == null ? void 0 : globalOpportunity.hide) && resolver.getGlobalExp() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              GlobalOpportunity,
              {
                contents: [{ text: resolver.getGlobalExp() }],
                image: (globalOpportunity == null ? void 0 : globalOpportunity.image) || detailPageDefault.globalOpportunity.image
              }
            ),
            !(whyChooseAsu == null ? void 0 : whyChooseAsu.hide) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              WhyChooseAsu,
              {
                sectionIntroText: (whyChooseAsu == null ? void 0 : whyChooseAsu.sectionIntroText) || detailPageDefault.whyChooseAsu.sectionIntroText,
                cards: whyChooseAsu == null ? void 0 : whyChooseAsu.cards,
                defaultCards: detailPageDefault.whyChooseAsu.cards
              }
            ),
            !(attendOnline == null ? void 0 : attendOnline.hide) && resolver.isOnline() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              AttendOnline,
              {
                learnMoreLink: resolver.getCurriculumUrl(),
                image: (attendOnline == null ? void 0 : attendOnline.image) || detailPageDefault.attendOnline.image
              }
            )
          ] }),
          !(programContactInfo == null ? void 0 : programContactInfo.hide) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col col-sm-12 col-md-6 col-lg-6 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProgramContactInfo,
            {
              department: {
                text: resolver.getDepartmentName(),
                url: ((_c = programContactInfo == null ? void 0 : programContactInfo.department) == null ? void 0 : _c.url) || resolver.getPlanUrl()
              },
              email: {
                text: resolver.getEmailAddress(),
                url: ((_d = programContactInfo == null ? void 0 : programContactInfo.email) == null ? void 0 : _d.url) || resolver.getEmailAddress()
              },
              asuOfficeLoc: resolver.getAsuOfficeLoc(),
              phone: resolver.getPhone()
            }
          ) }) })
        ] }))
      ] })
    ] });
  }, "DetailPage");
  DetailPage.propTypes = {
    appPathFolder: PropTypes.string,
    dataSource: dataSourcePropShape,
    anchorMenu: PropTypes.shape(anchorMenuPropType),
    hero: PropTypes.shape(ir.propTypes),
    introContent: PropTypes.shape({
      hideMarketText: PropTypes.bool,
      hideProgramDesc: PropTypes.bool,
      hideRequiredCourses: PropTypes.bool,
      breadcrumbs: propTypesExports.arrayOf(linkPropShape),
      // eslint-disable-next-line react/forbid-prop-types
      contents: propTypesExports.arrayOf(PropTypes.object),
      video: videoPropShape,
      image: imagePropShape
    }),
    atAGlance: PropTypes.shape({
      hide: PropTypes.bool,
      offeredBy: linkPropShape,
      locations: propTypesExports.arrayOf(linkPropShape),
      firstRequirementMathCourse: PropTypes.string,
      mathIntensity: PropTypes.string,
      timeCommitment: PropTypes.string
    }),
    applicationRequirements: PropTypes.shape({ hide: PropTypes.bool }),
    changeMajorRequirements: PropTypes.shape({ hide: PropTypes.bool }),
    affordingCollege: PropTypes.shape({ hide: PropTypes.bool }),
    flexibleDegreeOptions: PropTypes.shape({ hide: PropTypes.bool }),
    careerOutlook: PropTypes.shape({
      hide: PropTypes.bool,
      image: imagePropShape
    }),
    exampleCareers: PropTypes.shape({ hide: PropTypes.bool }),
    globalOpportunity: PropTypes.shape({
      hide: PropTypes.bool,
      image: imagePropShape
    }),
    attendOnline: PropTypes.shape({
      hide: PropTypes.bool,
      image: imagePropShape
    }),
    programContactInfo: PropTypes.shape({
      hide: PropTypes.bool,
      department: PropTypes.string,
      email: PropTypes.string
    }),
    nextSteps: PropTypes.shape({
      hide: PropTypes.bool,
      cards: PropTypes.arrayOf(cardPropShape)
    }),
    whyChooseAsu: PropTypes.shape(whyChooseAsuShape)
  };
  const AppComponent = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsxRuntimeExports.jsx(AppProvider, { detailPageProps: props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailPage, { ...props }) }), "AppComponent");
  AppComponent.propTypes = DetailPage.propTypes;
  var createRoot;
  var m = t;
  {
    createRoot = m.createRoot;
    m.hydrateRoot;
  }
  const RenderReact = /* @__PURE__ */ __name((component, props, targetSelector) => {
    const target = document.querySelector(targetSelector);
    const root = createRoot(target);
    root.render(r$1.createElement(component, props));
  }, "RenderReact");
  const initListingPage = /* @__PURE__ */ __name(({ targetSelector, props }) => {
    RenderReact(AppComponent$1, props, targetSelector);
  }, "initListingPage");
  const initProgramDetailPage = /* @__PURE__ */ __name(({ targetSelector, props }) => {
    RenderReact(AppComponent, props, targetSelector);
  }, "initProgramDetailPage");
  exports2.DetailPage = AppComponent;
  exports2.ListingPage = AppComponent$1;
  exports2.initListingPage = initListingPage;
  exports2.initProgramDetailPage = initProgramDetailPage;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
