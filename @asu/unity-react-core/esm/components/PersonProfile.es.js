import xr, { useId as to } from "react";
function ro(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Un = { exports: {} }, gr = {};
var An;
function no() {
  if (An) return gr;
  An = 1;
  var v = xr, u = Symbol.for("react.element"), S = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, y = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(O, k, w) {
    var ne, H = {}, Me = null, Oe = null;
    w !== void 0 && (Me = "" + w), k.key !== void 0 && (Me = "" + k.key), k.ref !== void 0 && (Oe = k.ref);
    for (ne in k) _.call(k, ne) && !R.hasOwnProperty(ne) && (H[ne] = k[ne]);
    if (O && O.defaultProps) for (ne in k = O.defaultProps, k) H[ne] === void 0 && (H[ne] = k[ne]);
    return { $$typeof: u, type: O, key: Me, ref: Oe, props: H, _owner: y.current };
  }
  return gr.Fragment = S, gr.jsx = P, gr.jsxs = P, gr;
}
Un.exports = no();
var U = Un.exports;
function Mt(v) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, Mt(v);
}
function sn(v, u) {
  return sn = Object.setPrototypeOf || function(_, y) {
    return _.__proto__ = y, _;
  }, sn(v, u);
}
function oo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zr(v, u, S) {
  return oo() ? zr = Reflect.construct : zr = function(y, R, P) {
    var O = [null];
    O.push.apply(O, R);
    var k = Function.bind.apply(y, O), w = new k();
    return P && sn(w, P.prototype), w;
  }, zr.apply(null, arguments);
}
function Xe(v) {
  return io(v) || lo(v) || ao(v) || so();
}
function io(v) {
  if (Array.isArray(v)) return un(v);
}
function lo(v) {
  if (typeof Symbol < "u" && v[Symbol.iterator] != null || v["@@iterator"] != null) return Array.from(v);
}
function ao(v, u) {
  if (v) {
    if (typeof v == "string") return un(v, u);
    var S = Object.prototype.toString.call(v).slice(8, -1);
    if (S === "Object" && v.constructor && (S = v.constructor.name), S === "Map" || S === "Set") return Array.from(v);
    if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return un(v, u);
  }
}
function un(v, u) {
  (u == null || u > v.length) && (u = v.length);
  for (var S = 0, _ = new Array(u); S < u; S++) _[S] = v[S];
  return _;
}
function so() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var uo = Object.hasOwnProperty, Fn = Object.setPrototypeOf, co = Object.isFrozen, po = Object.getPrototypeOf, fo = Object.getOwnPropertyDescriptor, he = Object.freeze, Ne = Object.seal, ho = Object.create, Hn = typeof Reflect < "u" && Reflect, Hr = Hn.apply, cn = Hn.construct;
Hr || (Hr = function(u, S, _) {
  return u.apply(S, _);
});
he || (he = function(u) {
  return u;
});
Ne || (Ne = function(u) {
  return u;
});
cn || (cn = function(u, S) {
  return zr(u, Xe(S));
});
var mo = De(Array.prototype.forEach), bn = De(Array.prototype.pop), Sr = De(Array.prototype.push), Ur = De(String.prototype.toLowerCase), Jr = De(String.prototype.toString), Mn = De(String.prototype.match), qe = De(String.prototype.replace), vo = De(String.prototype.indexOf), yo = De(String.prototype.trim), ue = De(RegExp.prototype.test), Kr = go(TypeError);
function De(v) {
  return function(u) {
    for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), y = 1; y < S; y++)
      _[y - 1] = arguments[y];
    return Hr(v, u, _);
  };
}
function go(v) {
  return function() {
    for (var u = arguments.length, S = new Array(u), _ = 0; _ < u; _++)
      S[_] = arguments[_];
    return cn(v, S);
  };
}
function L(v, u, S) {
  var _;
  S = (_ = S) !== null && _ !== void 0 ? _ : Ur, Fn && Fn(v, null);
  for (var y = u.length; y--; ) {
    var R = u[y];
    if (typeof R == "string") {
      var P = S(R);
      P !== R && (co(u) || (u[y] = P), R = P);
    }
    v[R] = !0;
  }
  return v;
}
function Zt(v) {
  var u = ho(null), S;
  for (S in v)
    Hr(uo, v, [S]) === !0 && (u[S] = v[S]);
  return u;
}
function Nr(v, u) {
  for (; v !== null; ) {
    var S = fo(v, u);
    if (S) {
      if (S.get)
        return De(S.get);
      if (typeof S.value == "function")
        return De(S.value);
    }
    v = po(v);
  }
  function _(y) {
    return console.warn("fallback value for", y), null;
  }
  return _;
}
var On = he(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Qr = he(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), en = he(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), So = he(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), tn = he(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), xo = he(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), In = he(["#text"]), Ln = he(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), rn = he(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Pn = he(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dr = he(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), wo = Ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Eo = Ne(/<%[\w\W]*|[\w\W]*%>/gm), ko = Ne(/\${[\w\W]*}/gm), To = Ne(/^data-[\-\w.\u00B7-\uFFFF]/), _o = Ne(/^aria-[\-\w]+$/), Co = Ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ro = Ne(/^(?:\w+script|data):/i), Ao = Ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fo = Ne(/^html$/i), bo = Ne(/^[a-z][.\w]*(-[.\w]+)+$/i), Mo = function() {
  return typeof window > "u" ? null : window;
}, Oo = function(u, S) {
  if (Mt(u) !== "object" || typeof u.createPolicy != "function")
    return null;
  var _ = null, y = "data-tt-policy-suffix";
  S.currentScript && S.currentScript.hasAttribute(y) && (_ = S.currentScript.getAttribute(y));
  var R = "dompurify" + (_ ? "#" + _ : "");
  try {
    return u.createPolicy(R, {
      createHTML: function(O) {
        return O;
      },
      createScriptURL: function(O) {
        return O;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + R + " could not be created."), null;
  }
};
function jn() {
  var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mo(), u = function(s) {
    return jn(s);
  };
  if (u.version = "2.5.7", u.removed = [], !v || !v.document || v.document.nodeType !== 9)
    return u.isSupported = !1, u;
  var S = v.document, _ = v.document, y = v.DocumentFragment, R = v.HTMLTemplateElement, P = v.Node, O = v.Element, k = v.NodeFilter, w = v.NamedNodeMap, ne = w === void 0 ? v.NamedNodeMap || v.MozNamedAttrMap : w, H = v.HTMLFormElement, Me = v.DOMParser, Oe = v.trustedTypes, Z = O.prototype, Kt = Nr(Z, "cloneNode"), oe = Nr(Z, "nextSibling"), J = Nr(Z, "childNodes"), ae = Nr(Z, "parentNode");
  if (typeof R == "function") {
    var Qe = _.createElement("template");
    Qe.content && Qe.content.ownerDocument && (_ = Qe.content.ownerDocument);
  }
  var ie = Oo(Oe, S), mt = ie ? ie.createHTML("") : "", te = _, j = te.implementation, lr = te.createNodeIterator, Ot = te.createDocumentFragment, It = te.getElementsByTagName, Qt = S.importNode, fe = {};
  try {
    fe = Zt(_).documentMode ? _.documentMode : {};
  } catch {
  }
  var me = {};
  u.isSupported = typeof ae == "function" && j && j.createHTMLDocument !== void 0 && fe !== 9;
  var vt = wo, yt = Eo, Lt = ko, ar = To, Pt = _o, ve = Ro, Nt = Ao, et = bo, tt = Co, q = null, gt = L({}, [].concat(Xe(On), Xe(Qr), Xe(en), Xe(tn), Xe(In))), K = null, St = L({}, [].concat(Xe(Ln), Xe(rn), Xe(Pn), Xe(Dr))), $ = Object.seal(Object.create(null, {
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
  })), Be = null, de = null, Ie = !0, ye = !0, xt = !1, re = !0, se = !1, wt = !0, ge = !1, Dt = !1, Ye = !1, Se = !1, ze = !1, rt = !1, Ee = !0, le = !1, er = "user-content-", Et = !0, Ze = !1, Ue = {}, ke = null, Bt = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), zt = null, tr = L({}, ["audio", "video", "img", "source", "image", "track"]), nt = null, ot = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), kt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", Te = "http://www.w3.org/1999/xhtml", Je = Te, Ut = !1, ce = null, Ht = L({}, [kt, Tt, Te], Jr), xe, B = ["application/xhtml+xml", "text/html"], it = "text/html", V, we = null, Le = _.createElement("form"), lt = function(s) {
    return s instanceof RegExp || s instanceof Function;
  }, _e = function(s) {
    we && we === s || ((!s || Mt(s) !== "object") && (s = {}), s = Zt(s), xe = // eslint-disable-next-line unicorn/prefer-includes
    B.indexOf(s.PARSER_MEDIA_TYPE) === -1 ? xe = it : xe = s.PARSER_MEDIA_TYPE, V = xe === "application/xhtml+xml" ? Jr : Ur, q = "ALLOWED_TAGS" in s ? L({}, s.ALLOWED_TAGS, V) : gt, K = "ALLOWED_ATTR" in s ? L({}, s.ALLOWED_ATTR, V) : St, ce = "ALLOWED_NAMESPACES" in s ? L({}, s.ALLOWED_NAMESPACES, Jr) : Ht, nt = "ADD_URI_SAFE_ATTR" in s ? L(
      Zt(ot),
      // eslint-disable-line indent
      s.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : ot, zt = "ADD_DATA_URI_TAGS" in s ? L(
      Zt(tr),
      // eslint-disable-line indent
      s.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      V
      // eslint-disable-line indent
    ) : tr, ke = "FORBID_CONTENTS" in s ? L({}, s.FORBID_CONTENTS, V) : Bt, Be = "FORBID_TAGS" in s ? L({}, s.FORBID_TAGS, V) : {}, de = "FORBID_ATTR" in s ? L({}, s.FORBID_ATTR, V) : {}, Ue = "USE_PROFILES" in s ? s.USE_PROFILES : !1, Ie = s.ALLOW_ARIA_ATTR !== !1, ye = s.ALLOW_DATA_ATTR !== !1, xt = s.ALLOW_UNKNOWN_PROTOCOLS || !1, re = s.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = s.SAFE_FOR_TEMPLATES || !1, wt = s.SAFE_FOR_XML !== !1, ge = s.WHOLE_DOCUMENT || !1, Se = s.RETURN_DOM || !1, ze = s.RETURN_DOM_FRAGMENT || !1, rt = s.RETURN_TRUSTED_TYPE || !1, Ye = s.FORCE_BODY || !1, Ee = s.SANITIZE_DOM !== !1, le = s.SANITIZE_NAMED_PROPS || !1, Et = s.KEEP_CONTENT !== !1, Ze = s.IN_PLACE || !1, tt = s.ALLOWED_URI_REGEXP || tt, Je = s.NAMESPACE || Te, $ = s.CUSTOM_ELEMENT_HANDLING || {}, s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = s.CUSTOM_ELEMENT_HANDLING.tagNameCheck), s.CUSTOM_ELEMENT_HANDLING && lt(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), s.CUSTOM_ELEMENT_HANDLING && typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && ($.allowCustomizedBuiltInElements = s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), se && (ye = !1), ze && (Se = !0), Ue && (q = L({}, Xe(In)), K = [], Ue.html === !0 && (L(q, On), L(K, Ln)), Ue.svg === !0 && (L(q, Qr), L(K, rn), L(K, Dr)), Ue.svgFilters === !0 && (L(q, en), L(K, rn), L(K, Dr)), Ue.mathMl === !0 && (L(q, tn), L(K, Pn), L(K, Dr))), s.ADD_TAGS && (q === gt && (q = Zt(q)), L(q, s.ADD_TAGS, V)), s.ADD_ATTR && (K === St && (K = Zt(K)), L(K, s.ADD_ATTR, V)), s.ADD_URI_SAFE_ATTR && L(nt, s.ADD_URI_SAFE_ATTR, V), s.FORBID_CONTENTS && (ke === Bt && (ke = Zt(ke)), L(ke, s.FORBID_CONTENTS, V)), Et && (q["#text"] = !0), ge && L(q, ["html", "head", "body"]), q.table && (L(q, ["tbody"]), delete Be.tbody), he && he(s), we = s);
  }, jt = L({}, ["mi", "mo", "mn", "ms", "mtext"]), _t = L({}, ["annotation-xml"]), $t = L({}, ["title", "style", "font", "a", "script"]), at = L({}, Qr);
  L(at, en), L(at, So);
  var Ct = L({}, tn);
  L(Ct, xo);
  var rr = function(s) {
    var g = ae(s);
    (!g || !g.tagName) && (g = {
      namespaceURI: Je,
      tagName: "template"
    });
    var T = Ur(s.tagName), D = Ur(g.tagName);
    return ce[s.namespaceURI] ? s.namespaceURI === Tt ? g.namespaceURI === Te ? T === "svg" : g.namespaceURI === kt ? T === "svg" && (D === "annotation-xml" || jt[D]) : !!at[T] : s.namespaceURI === kt ? g.namespaceURI === Te ? T === "math" : g.namespaceURI === Tt ? T === "math" && _t[D] : !!Ct[T] : s.namespaceURI === Te ? g.namespaceURI === Tt && !_t[D] || g.namespaceURI === kt && !jt[D] ? !1 : !Ct[T] && ($t[T] || !at[T]) : !!(xe === "application/xhtml+xml" && ce[s.namespaceURI]) : !1;
  }, pe = function(s) {
    Sr(u.removed, {
      element: s
    });
    try {
      s.parentNode.removeChild(s);
    } catch {
      try {
        s.outerHTML = mt;
      } catch {
        s.remove();
      }
    }
  }, Rt = function(s, g) {
    try {
      Sr(u.removed, {
        attribute: g.getAttributeNode(s),
        from: g
      });
    } catch {
      Sr(u.removed, {
        attribute: null,
        from: g
      });
    }
    if (g.removeAttribute(s), s === "is" && !K[s])
      if (Se || ze)
        try {
          pe(g);
        } catch {
        }
      else
        try {
          g.setAttribute(s, "");
        } catch {
        }
  }, st = function(s) {
    var g, T;
    if (Ye)
      s = "<remove></remove>" + s;
    else {
      var D = Mn(s, /^[\r\n\t ]+/);
      T = D && D[0];
    }
    xe === "application/xhtml+xml" && Je === Te && (s = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + s + "</body></html>");
    var z = ie ? ie.createHTML(s) : s;
    if (Je === Te)
      try {
        g = new Me().parseFromString(z, xe);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = j.createDocument(Je, "template", null);
      try {
        g.documentElement.innerHTML = Ut ? mt : z;
      } catch {
      }
    }
    var ee = g.body || g.documentElement;
    return s && T && ee.insertBefore(_.createTextNode(T), ee.childNodes[0] || null), Je === Te ? It.call(g, ge ? "html" : "body")[0] : ge ? g.documentElement : ee;
  }, Wt = function(s) {
    return lr.call(
      s.ownerDocument || s,
      s,
      // eslint-disable-next-line no-bitwise
      k.SHOW_ELEMENT | k.SHOW_COMMENT | k.SHOW_TEXT | k.SHOW_PROCESSING_INSTRUCTION | k.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ut = function(s) {
    return s instanceof H && (typeof s.nodeName != "string" || typeof s.textContent != "string" || typeof s.removeChild != "function" || !(s.attributes instanceof ne) || typeof s.removeAttribute != "function" || typeof s.setAttribute != "function" || typeof s.namespaceURI != "string" || typeof s.insertBefore != "function" || typeof s.hasChildNodes != "function");
  }, He = function(s) {
    return Mt(P) === "object" ? s instanceof P : s && Mt(s) === "object" && typeof s.nodeType == "number" && typeof s.nodeName == "string";
  }, Ce = function(s, g, T) {
    me[s] && mo(me[s], function(D) {
      D.call(u, g, T, we);
    });
  }, Ke = function(s) {
    var g;
    if (Ce("beforeSanitizeElements", s, null), ut(s) || ue(/[\u0080-\uFFFF]/, s.nodeName))
      return pe(s), !0;
    var T = V(s.nodeName);
    if (Ce("uponSanitizeElement", s, {
      tagName: T,
      allowedTags: q
    }), s.hasChildNodes() && !He(s.firstElementChild) && (!He(s.content) || !He(s.content.firstElementChild)) && ue(/<[/\w]/g, s.innerHTML) && ue(/<[/\w]/g, s.textContent) || T === "select" && ue(/<template/i, s.innerHTML) || s.nodeType === 7 || wt && s.nodeType === 8 && ue(/<[/\w]/g, s.data))
      return pe(s), !0;
    if (!q[T] || Be[T]) {
      if (!Be[T] && At(T) && ($.tagNameCheck instanceof RegExp && ue($.tagNameCheck, T) || $.tagNameCheck instanceof Function && $.tagNameCheck(T)))
        return !1;
      if (Et && !ke[T]) {
        var D = ae(s) || s.parentNode, z = J(s) || s.childNodes;
        if (z && D)
          for (var ee = z.length, Q = ee - 1; Q >= 0; --Q) {
            var Re = Kt(z[Q], !0);
            Re.__removalCount = (s.__removalCount || 0) + 1, D.insertBefore(Re, oe(s));
          }
      }
      return pe(s), !0;
    }
    return s instanceof O && !rr(s) || (T === "noscript" || T === "noembed" || T === "noframes") && ue(/<\/no(script|embed|frames)/i, s.innerHTML) ? (pe(s), !0) : (se && s.nodeType === 3 && (g = s.textContent, g = qe(g, vt, " "), g = qe(g, yt, " "), g = qe(g, Lt, " "), s.textContent !== g && (Sr(u.removed, {
      element: s.cloneNode()
    }), s.textContent = g)), Ce("afterSanitizeElements", s, null), !1);
  }, nr = function(s, g, T) {
    if (Ee && (g === "id" || g === "name") && (T in _ || T in Le))
      return !1;
    if (!(ye && !de[g] && ue(ar, g))) {
      if (!(Ie && ue(Pt, g))) {
        if (!K[g] || de[g]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(s) && ($.tagNameCheck instanceof RegExp && ue($.tagNameCheck, s) || $.tagNameCheck instanceof Function && $.tagNameCheck(s)) && ($.attributeNameCheck instanceof RegExp && ue($.attributeNameCheck, g) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            g === "is" && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && ue($.tagNameCheck, T) || $.tagNameCheck instanceof Function && $.tagNameCheck(T)))
          ) return !1;
        } else if (!nt[g]) {
          if (!ue(tt, qe(T, Nt, ""))) {
            if (!((g === "src" || g === "xlink:href" || g === "href") && s !== "script" && vo(T, "data:") === 0 && zt[s])) {
              if (!(xt && !ue(ve, qe(T, Nt, "")))) {
                if (T)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, At = function(s) {
    return s !== "annotation-xml" && Mn(s, et);
  }, ct = function(s) {
    var g, T, D, z;
    Ce("beforeSanitizeAttributes", s, null);
    var ee = s.attributes;
    if (ee) {
      var Q = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: K
      };
      for (z = ee.length; z--; ) {
        g = ee[z];
        var Re = g, X = Re.name, Pe = Re.namespaceURI;
        if (T = X === "value" ? g.value : yo(g.value), D = V(X), Q.attrName = D, Q.attrValue = T, Q.keepAttr = !0, Q.forceKeepAttr = void 0, Ce("uponSanitizeAttribute", s, Q), T = Q.attrValue, !Q.forceKeepAttr && (Rt(X, s), !!Q.keepAttr)) {
          if (!re && ue(/\/>/i, T)) {
            Rt(X, s);
            continue;
          }
          se && (T = qe(T, vt, " "), T = qe(T, yt, " "), T = qe(T, Lt, " "));
          var je = V(s.nodeName);
          if (nr(je, D, T)) {
            if (le && (D === "id" || D === "name") && (Rt(X, s), T = er + T), wt && ue(/((--!?|])>)|<\/(style|title)/i, T)) {
              Rt(X, s);
              continue;
            }
            if (ie && Mt(Oe) === "object" && typeof Oe.getAttributeType == "function" && !Pe)
              switch (Oe.getAttributeType(je, D)) {
                case "TrustedHTML": {
                  T = ie.createHTML(T);
                  break;
                }
                case "TrustedScriptURL": {
                  T = ie.createScriptURL(T);
                  break;
                }
              }
            try {
              Pe ? s.setAttributeNS(Pe, X, T) : s.setAttribute(X, T), ut(s) ? pe(s) : bn(u.removed);
            } catch {
            }
          }
        }
      }
      Ce("afterSanitizeAttributes", s, null);
    }
  }, pt = function C(s) {
    var g, T = Wt(s);
    for (Ce("beforeSanitizeShadowDOM", s, null); g = T.nextNode(); )
      Ce("uponSanitizeShadowNode", g, null), !Ke(g) && (g.content instanceof y && C(g.content), ct(g));
    Ce("afterSanitizeShadowDOM", s, null);
  };
  return u.sanitize = function(C) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g, T, D, z, ee;
    if (Ut = !C, Ut && (C = "<!-->"), typeof C != "string" && !He(C))
      if (typeof C.toString == "function") {
        if (C = C.toString(), typeof C != "string")
          throw Kr("dirty is not a string, aborting");
      } else
        throw Kr("toString is not a function");
    if (!u.isSupported) {
      if (Mt(v.toStaticHTML) === "object" || typeof v.toStaticHTML == "function") {
        if (typeof C == "string")
          return v.toStaticHTML(C);
        if (He(C))
          return v.toStaticHTML(C.outerHTML);
      }
      return C;
    }
    if (Dt || _e(s), u.removed = [], typeof C == "string" && (Ze = !1), Ze) {
      if (C.nodeName) {
        var Q = V(C.nodeName);
        if (!q[Q] || Be[Q])
          throw Kr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (C instanceof P)
      g = st("<!---->"), T = g.ownerDocument.importNode(C, !0), T.nodeType === 1 && T.nodeName === "BODY" || T.nodeName === "HTML" ? g = T : g.appendChild(T);
    else {
      if (!Se && !se && !ge && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return ie && rt ? ie.createHTML(C) : C;
      if (g = st(C), !g)
        return Se ? null : rt ? mt : "";
    }
    g && Ye && pe(g.firstChild);
    for (var Re = Wt(Ze ? C : g); D = Re.nextNode(); )
      D.nodeType === 3 && D === z || Ke(D) || (D.content instanceof y && pt(D.content), ct(D), z = D);
    if (z = null, Ze)
      return C;
    if (Se) {
      if (ze)
        for (ee = Ot.call(g.ownerDocument); g.firstChild; )
          ee.appendChild(g.firstChild);
      else
        ee = g;
      return (K.shadowroot || K.shadowrootmod) && (ee = Qt.call(S, ee, !0)), ee;
    }
    var X = ge ? g.outerHTML : g.innerHTML;
    return ge && q["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && ue(Fo, g.ownerDocument.doctype.name) && (X = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + X), se && (X = qe(X, vt, " "), X = qe(X, yt, " "), X = qe(X, Lt, " ")), ie && rt ? ie.createHTML(X) : X;
  }, u.setConfig = function(C) {
    _e(C), Dt = !0;
  }, u.clearConfig = function() {
    we = null, Dt = !1;
  }, u.isValidAttribute = function(C, s, g) {
    we || _e({});
    var T = V(C), D = V(s);
    return nr(T, D, g);
  }, u.addHook = function(C, s) {
    typeof s == "function" && (me[C] = me[C] || [], Sr(me[C], s));
  }, u.removeHook = function(C) {
    if (me[C])
      return bn(me[C]);
  }, u.removeHooks = function(C) {
    me[C] && (me[C] = []);
  }, u.removeAllHooks = function() {
    me = {};
  }, u;
}
jn();
var $n = { exports: {} }, nn, Nn;
function Io() {
  if (Nn) return nn;
  Nn = 1;
  var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nn = v, nn;
}
var on, Dn;
function Lo() {
  if (Dn) return on;
  Dn = 1;
  var v = Io();
  function u() {
  }
  function S() {
  }
  return S.resetWarningCache = u, on = function() {
    function _(P, O, k, w, ne, H) {
      if (H !== v) {
        var Me = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Me.name = "Invariant Violation", Me;
      }
    }
    _.isRequired = _;
    function y() {
      return _;
    }
    var R = {
      array: _,
      bigint: _,
      bool: _,
      func: _,
      number: _,
      object: _,
      string: _,
      symbol: _,
      any: _,
      arrayOf: y,
      element: _,
      elementType: _,
      instanceOf: y,
      node: _,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: S,
      resetWarningCache: u
    };
    return R.PropTypes = R, R;
  }, on;
}
$n.exports = Lo()();
var Po = $n.exports;
const ht = /* @__PURE__ */ ro(Po);
ht.shape({
  event: ht.string,
  action: ht.string,
  name: ht.string,
  region: ht.string,
  section: ht.string,
  component: ht.string,
  type: ht.string,
  text: ht.string
});
const No = ({
  event: v = "",
  action: u = "",
  name: S = "",
  type: _ = "",
  section: y = "",
  text: R = "",
  region: P = "",
  component: O = ""
}) => {
  const { dataLayer: k } = window, w = {
    event: v.toLowerCase(),
    action: u.toLowerCase(),
    name: S.toLowerCase(),
    type: _.toLowerCase(),
    region: P.toLowerCase(),
    section: y.toLowerCase(),
    text: R.toLowerCase(),
    component: O.toLowerCase()
  };
  k && k.push(w);
};
var Jt = {};
var Bn;
function Do() {
  if (Bn) return Jt;
  Bn = 1;
  var v = xr;
  function u(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, R = {};
  function P(e) {
    return S.call(R, e) ? !0 : S.call(y, e) ? !1 : _.test(e) ? R[e] = !0 : (y[e] = !0, !1);
  }
  function O(e, n, i, a, d, c, h) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = d, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = h;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    k[e] = new O(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    k[n] = new O(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    k[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    k[e] = new O(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    k[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    k[e] = new O(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    k[e] = new O(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    k[e] = new O(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    k[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var w = /[\-:]([a-z])/g;
  function ne(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      w,
      ne
    );
    k[n] = new O(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(w, ne);
    k[n] = new O(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(w, ne);
    k[n] = new O(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var H = {
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
  }, Me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(H).forEach(function(e) {
    Me.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), H[n] = H[e];
    });
  });
  var Oe = /["'&<>]/;
  function Z(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var n = Oe.exec(e);
    if (n) {
      var i = "", a, d = 0;
      for (a = n.index; a < e.length; a++) {
        switch (e.charCodeAt(a)) {
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
        d !== a && (i += e.substring(d, a)), d = a + 1, i += n;
      }
      e = d !== a ? i + e.substring(d, a) : i;
    }
    return e;
  }
  var Kt = /([A-Z])/g, oe = /^ms-/, J = Array.isArray;
  function ae(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function Qe(e, n, i) {
    switch (n) {
      case "select":
        return ae(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return ae(2, null);
      case "math":
        return ae(3, null);
      case "foreignObject":
        return ae(1, null);
      case "table":
        return ae(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ae(5, null);
      case "colgroup":
        return ae(7, null);
      case "tr":
        return ae(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? ae(1, null) : e;
  }
  var ie = /* @__PURE__ */ new Map();
  function mt(e, n, i) {
    if (typeof i != "object") throw Error(u(62));
    n = !0;
    for (var a in i) if (S.call(i, a)) {
      var d = i[a];
      if (d != null && typeof d != "boolean" && d !== "") {
        if (a.indexOf("--") === 0) {
          var c = Z(a);
          d = Z(("" + d).trim());
        } else {
          c = a;
          var h = ie.get(c);
          h !== void 0 || (h = Z(c.replace(Kt, "-$1").toLowerCase().replace(oe, "-ms-")), ie.set(c, h)), c = h, d = typeof d == "number" ? d === 0 || S.call(H, a) ? "" + d : d + "px" : Z(("" + d).trim());
        }
        n ? (n = !1, e.push(' style="', c, ":", d)) : e.push(";", c, ":", d);
      }
    }
    n || e.push('"');
  }
  function te(e, n, i, a) {
    switch (i) {
      case "style":
        mt(e, n, a);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") {
      if (n = k.hasOwnProperty(i) ? k[i] : null, n !== null) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!n.acceptsBooleans) return;
        }
        switch (i = n.attributeName, n.type) {
          case 3:
            a && e.push(" ", i, '=""');
            break;
          case 4:
            a === !0 ? e.push(" ", i, '=""') : a !== !1 && e.push(" ", i, '="', Z(a), '"');
            break;
          case 5:
            isNaN(a) || e.push(" ", i, '="', Z(a), '"');
            break;
          case 6:
            !isNaN(a) && 1 <= a && e.push(" ", i, '="', Z(a), '"');
            break;
          default:
            n.sanitizeURL && (a = "" + a), e.push(" ", i, '="', Z(a), '"');
        }
      } else if (P(i)) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (n = i.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-") return;
        }
        e.push(" ", i, '="', Z(a), '"');
      }
    }
  }
  function j(e, n, i) {
    if (n != null) {
      if (i != null) throw Error(u(60));
      if (typeof n != "object" || !("__html" in n)) throw Error(u(61));
      n = n.__html, n != null && e.push("" + n);
    }
  }
  function lr(e) {
    var n = "";
    return v.Children.forEach(e, function(i) {
      i != null && (n += i);
    }), n;
  }
  function Ot(e, n, i, a) {
    e.push(fe(i));
    var d = i = null, c;
    for (c in n) if (S.call(n, c)) {
      var h = n[c];
      if (h != null) switch (c) {
        case "children":
          i = h;
          break;
        case "dangerouslySetInnerHTML":
          d = h;
          break;
        default:
          te(e, a, c, h);
      }
    }
    return e.push(">"), j(e, d, i), typeof i == "string" ? (e.push(Z(i)), null) : i;
  }
  var It = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qt = /* @__PURE__ */ new Map();
  function fe(e) {
    var n = Qt.get(e);
    if (n === void 0) {
      if (!It.test(e)) throw Error(u(65, e));
      n = "<" + e, Qt.set(e, n);
    }
    return n;
  }
  function me(e, n, i, a, d) {
    switch (n) {
      case "select":
        e.push(fe("select"));
        var c = null, h = null;
        for (M in i) if (S.call(i, M)) {
          var E = i[M];
          if (E != null) switch (M) {
            case "children":
              c = E;
              break;
            case "dangerouslySetInnerHTML":
              h = E;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              te(e, a, M, E);
          }
        }
        return e.push(">"), j(e, h, c), c;
      case "option":
        h = d.selectedValue, e.push(fe("option"));
        var A = E = null, b = null, M = null;
        for (c in i) if (S.call(i, c)) {
          var Y = i[c];
          if (Y != null) switch (c) {
            case "children":
              E = Y;
              break;
            case "selected":
              b = Y;
              break;
            case "dangerouslySetInnerHTML":
              M = Y;
              break;
            case "value":
              A = Y;
            default:
              te(e, a, c, Y);
          }
        }
        if (h != null) if (i = A !== null ? "" + A : lr(E), J(h)) {
          for (a = 0; a < h.length; a++)
            if ("" + h[a] === i) {
              e.push(' selected=""');
              break;
            }
        } else "" + h === i && e.push(' selected=""');
        else b && e.push(' selected=""');
        return e.push(">"), j(e, M, E), E;
      case "textarea":
        e.push(fe("textarea")), M = h = c = null;
        for (E in i) if (S.call(i, E) && (A = i[E], A != null)) switch (E) {
          case "children":
            M = A;
            break;
          case "value":
            c = A;
            break;
          case "defaultValue":
            h = A;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            te(
              e,
              a,
              E,
              A
            );
        }
        if (c === null && h !== null && (c = h), e.push(">"), M != null) {
          if (c != null) throw Error(u(92));
          if (J(M) && 1 < M.length) throw Error(u(93));
          c = "" + M;
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c !== null && e.push(Z("" + c)), null;
      case "input":
        e.push(fe("input")), A = M = E = c = null;
        for (h in i) if (S.call(i, h) && (b = i[h], b != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            A = b;
            break;
          case "defaultValue":
            E = b;
            break;
          case "checked":
            M = b;
            break;
          case "value":
            c = b;
            break;
          default:
            te(e, a, h, b);
        }
        return M !== null ? te(e, a, "checked", M) : A !== null && te(e, a, "checked", A), c !== null ? te(e, a, "value", c) : E !== null && te(e, a, "value", E), e.push("/>"), null;
      case "menuitem":
        e.push(fe("menuitem"));
        for (var $e in i) if (S.call(i, $e) && (c = i[$e], c != null)) switch ($e) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            te(e, a, $e, c);
        }
        return e.push(">"), null;
      case "title":
        e.push(fe("title")), c = null;
        for (Y in i) if (S.call(i, Y) && (h = i[Y], h != null)) switch (Y) {
          case "children":
            c = h;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            te(e, a, Y, h);
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(fe(n)), h = c = null;
        for (A in i) if (S.call(i, A) && (E = i[A], E != null)) switch (A) {
          case "children":
            c = E;
            break;
          case "dangerouslySetInnerHTML":
            h = E;
            break;
          default:
            te(e, a, A, E);
        }
        if (e.push(">"), h != null) {
          if (c != null) throw Error(u(60));
          if (typeof h != "object" || !("__html" in h)) throw Error(u(61));
          i = h.__html, i != null && (typeof i == "string" && 0 < i.length && i[0] === `
` ? e.push(`
`, i) : e.push("" + i));
        }
        return typeof c == "string" && c[0] === `
` && e.push(`
`), c;
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
        e.push(fe(n));
        for (var We in i) if (S.call(i, We) && (c = i[We], c != null)) switch (We) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, n));
          default:
            te(e, a, We, c);
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
        return Ot(
          e,
          i,
          n,
          a
        );
      case "html":
        return d.insertionMode === 0 && e.push("<!DOCTYPE html>"), Ot(e, i, n, a);
      default:
        if (n.indexOf("-") === -1 && typeof i.is != "string") return Ot(e, i, n, a);
        e.push(fe(n)), h = c = null;
        for (b in i) if (S.call(i, b) && (E = i[b], E != null)) switch (b) {
          case "children":
            c = E;
            break;
          case "dangerouslySetInnerHTML":
            h = E;
            break;
          case "style":
            mt(e, a, E);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            P(b) && typeof E != "function" && typeof E != "symbol" && e.push(" ", b, '="', Z(E), '"');
        }
        return e.push(">"), j(e, h, c), c;
    }
  }
  function vt(e, n, i) {
    if (e.push('<!--$?--><template id="'), i === null) throw Error(u(395));
    return e.push(i), e.push('"></template>');
  }
  function yt(e, n, i, a) {
    switch (i.insertionMode) {
      case 0:
      case 1:
        return e.push('<div hidden id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 2:
        return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 3:
        return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 4:
        return e.push('<table hidden id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 5:
        return e.push('<table hidden><tbody id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 6:
        return e.push('<table hidden><tr id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      case 7:
        return e.push('<table hidden><colgroup id="'), e.push(n.segmentPrefix), n = a.toString(16), e.push(n), e.push('">');
      default:
        throw Error(u(397));
    }
  }
  function Lt(e, n) {
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
        throw Error(u(397));
    }
  }
  var ar = /[<\u2028\u2029]/g;
  function Pt(e) {
    return JSON.stringify(e).replace(ar, function(n) {
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
  function ve(e, n) {
    return n = n === void 0 ? "" : n, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: n + "P:", segmentPrefix: n + "S:", boundaryPrefix: n + "B:", idPrefix: n, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
  }
  function Nt(e, n, i, a) {
    return i.generateStaticMarkup ? (e.push(Z(n)), !1) : (n === "" ? e = a : (a && e.push("<!-- -->"), e.push(Z(n)), e = !0), e);
  }
  var et = Object.assign, tt = Symbol.for("react.element"), q = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), Be = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), wt = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), Dt = Symbol.for("react.default_value"), Ye = Symbol.iterator;
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case gt:
        return "Fragment";
      case q:
        return "Portal";
      case St:
        return "Profiler";
      case K:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case $:
        return (e._context.displayName || "Context") + ".Provider";
      case de:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xt:
        return n = e.displayName || null, n !== null ? n : Se(e.type) || "Memo";
      case re:
        n = e._payload, e = e._init;
        try {
          return Se(e(n));
        } catch {
        }
    }
    return null;
  }
  var ze = {};
  function rt(e, n) {
    if (e = e.contextTypes, !e) return ze;
    var i = {}, a;
    for (a in e) i[a] = n[a];
    return i;
  }
  var Ee = null;
  function le(e, n) {
    if (e !== n) {
      e.context._currentValue2 = e.parentValue, e = e.parent;
      var i = n.parent;
      if (e === null) {
        if (i !== null) throw Error(u(401));
      } else {
        if (i === null) throw Error(u(401));
        le(e, i);
      }
      n.context._currentValue2 = n.value;
    }
  }
  function er(e) {
    e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && er(e);
  }
  function Et(e) {
    var n = e.parent;
    n !== null && Et(n), e.context._currentValue2 = e.value;
  }
  function Ze(e, n) {
    if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(u(402));
    e.depth === n.depth ? le(e, n) : Ze(e, n);
  }
  function Ue(e, n) {
    var i = n.parent;
    if (i === null) throw Error(u(402));
    e.depth === i.depth ? le(e, i) : Ue(e, i), n.context._currentValue2 = n.value;
  }
  function ke(e) {
    var n = Ee;
    n !== e && (n === null ? Et(e) : e === null ? er(n) : n.depth === e.depth ? le(n, e) : n.depth > e.depth ? Ze(n, e) : Ue(n, e), Ee = e);
  }
  var Bt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(e, n) {
    e = e._reactInternals, e.queue !== null && e.queue.push(n);
  }, enqueueReplaceState: function(e, n) {
    e = e._reactInternals, e.replace = !0, e.queue = [n];
  }, enqueueForceUpdate: function() {
  } };
  function zt(e, n, i, a) {
    var d = e.state !== void 0 ? e.state : null;
    e.updater = Bt, e.props = i, e.state = d;
    var c = { queue: [], replace: !1 };
    e._reactInternals = c;
    var h = n.contextType;
    if (e.context = typeof h == "object" && h !== null ? h._currentValue2 : a, h = n.getDerivedStateFromProps, typeof h == "function" && (h = h(i, d), d = h == null ? d : et({}, d, h), e.state = d), typeof n.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (n = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), n !== e.state && Bt.enqueueReplaceState(e, e.state, null), c.queue !== null && 0 < c.queue.length) if (n = c.queue, h = c.replace, c.queue = null, c.replace = !1, h && n.length === 1) e.state = n[0];
    else {
      for (c = h ? n[0] : e.state, d = !0, h = h ? 1 : 0; h < n.length; h++) {
        var E = n[h];
        E = typeof E == "function" ? E.call(e, c, i, a) : E, E != null && (d ? (d = !1, c = et({}, c, E)) : et(c, E));
      }
      e.state = c;
    }
    else c.queue = null;
  }
  var tr = { id: 1, overflow: "" };
  function nt(e, n, i) {
    var a = e.id;
    e = e.overflow;
    var d = 32 - ot(a) - 1;
    a &= ~(1 << d), i += 1;
    var c = 32 - ot(n) + d;
    if (30 < c) {
      var h = d - d % 5;
      return c = (a & (1 << h) - 1).toString(32), a >>= h, d -= h, { id: 1 << 32 - ot(n) + d | i << d | a, overflow: c + e };
    }
    return { id: 1 << c | i << d | a, overflow: e };
  }
  var ot = Math.clz32 ? Math.clz32 : Te, kt = Math.log, Tt = Math.LN2;
  function Te(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (kt(e) / Tt | 0) | 0;
  }
  function Je(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Ut = typeof Object.is == "function" ? Object.is : Je, ce = null, Ht = null, xe = null, B = null, it = !1, V = !1, we = 0, Le = null, lt = 0;
  function _e() {
    if (ce === null) throw Error(u(321));
    return ce;
  }
  function jt() {
    if (0 < lt) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _t() {
    return B === null ? xe === null ? (it = !1, xe = B = jt()) : (it = !0, B = xe) : B.next === null ? (it = !1, B = B.next = jt()) : (it = !0, B = B.next), B;
  }
  function $t() {
    Ht = ce = null, V = !1, xe = null, lt = 0, B = Le = null;
  }
  function at(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ct(e, n, i) {
    if (ce = _e(), B = _t(), it) {
      var a = B.queue;
      if (n = a.dispatch, Le !== null && (i = Le.get(a), i !== void 0)) {
        Le.delete(a), a = B.memoizedState;
        do
          a = e(a, i.action), i = i.next;
        while (i !== null);
        return B.memoizedState = a, [a, n];
      }
      return [B.memoizedState, n];
    }
    return e = e === at ? typeof n == "function" ? n() : n : i !== void 0 ? i(n) : n, B.memoizedState = e, e = B.queue = { last: null, dispatch: null }, e = e.dispatch = pe.bind(null, ce, e), [B.memoizedState, e];
  }
  function rr(e, n) {
    if (ce = _e(), B = _t(), n = n === void 0 ? null : n, B !== null) {
      var i = B.memoizedState;
      if (i !== null && n !== null) {
        var a = i[1];
        e: if (a === null) a = !1;
        else {
          for (var d = 0; d < a.length && d < n.length; d++) if (!Ut(n[d], a[d])) {
            a = !1;
            break e;
          }
          a = !0;
        }
        if (a) return i[0];
      }
    }
    return e = e(), B.memoizedState = [e, n], e;
  }
  function pe(e, n, i) {
    if (25 <= lt) throw Error(u(301));
    if (e === ce) if (V = !0, e = { action: i, next: null }, Le === null && (Le = /* @__PURE__ */ new Map()), i = Le.get(n), i === void 0) Le.set(n, e);
    else {
      for (n = i; n.next !== null; ) n = n.next;
      n.next = e;
    }
  }
  function Rt() {
    throw Error(u(394));
  }
  function st() {
  }
  var Wt = { readContext: function(e) {
    return e._currentValue2;
  }, useContext: function(e) {
    return _e(), e._currentValue2;
  }, useMemo: rr, useReducer: Ct, useRef: function(e) {
    ce = _e(), B = _t();
    var n = B.memoizedState;
    return n === null ? (e = { current: e }, B.memoizedState = e) : n;
  }, useState: function(e) {
    return Ct(at, e);
  }, useInsertionEffect: st, useLayoutEffect: function() {
  }, useCallback: function(e, n) {
    return rr(function() {
      return e;
    }, n);
  }, useImperativeHandle: st, useEffect: st, useDebugValue: st, useDeferredValue: function(e) {
    return _e(), e;
  }, useTransition: function() {
    return _e(), [
      !1,
      Rt
    ];
  }, useId: function() {
    var e = Ht.treeContext, n = e.overflow;
    e = e.id, e = (e & ~(1 << 32 - ot(e) - 1)).toString(32) + n;
    var i = ut;
    if (i === null) throw Error(u(404));
    return n = we++, e = ":" + i.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + ":";
  }, useMutableSource: function(e, n) {
    return _e(), n(e._source);
  }, useSyncExternalStore: function(e, n, i) {
    if (i === void 0) throw Error(u(407));
    return i();
  } }, ut = null, He = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ce(e) {
    return console.error(e), null;
  }
  function Ke() {
  }
  function nr(e, n, i, a, d, c, h, E, A) {
    var b = [], M = /* @__PURE__ */ new Set();
    return n = { destination: null, responseState: n, progressiveChunkSize: a === void 0 ? 12800 : a, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: M, pingedTasks: b, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: d === void 0 ? Ce : d, onAllReady: Ke, onShellReady: h === void 0 ? Ke : h, onShellError: Ke, onFatalError: Ke }, i = ct(n, 0, null, i, !1, !1), i.parentFlushed = !0, e = At(n, e, null, i, M, ze, null, tr), b.push(e), n;
  }
  function At(e, n, i, a, d, c, h, E) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var A = { node: n, ping: function() {
      var b = e.pingedTasks;
      b.push(A), b.length === 1 && sr(e);
    }, blockedBoundary: i, blockedSegment: a, abortSet: d, legacyContext: c, context: h, treeContext: E };
    return d.add(A), A;
  }
  function ct(e, n, i, a, d, c) {
    return { status: 0, id: -1, index: n, parentFlushed: !1, chunks: [], children: [], formatContext: a, boundary: i, lastPushedText: d, textEmbedded: c };
  }
  function pt(e, n) {
    if (e = e.onError(n), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
    return e;
  }
  function C(e, n) {
    var i = e.onShellError;
    i(n), i = e.onFatalError, i(n), e.destination !== null ? (e.status = 2, e.destination.destroy(n)) : (e.status = 1, e.fatalError = n);
  }
  function s(e, n, i, a, d) {
    for (ce = {}, Ht = n, we = 0, e = i(a, d); V; ) V = !1, we = 0, lt += 1, B = null, e = i(a, d);
    return $t(), e;
  }
  function g(e, n, i, a) {
    var d = i.render(), c = a.childContextTypes;
    if (c != null) {
      var h = n.legacyContext;
      if (typeof i.getChildContext != "function") a = h;
      else {
        i = i.getChildContext();
        for (var E in i) if (!(E in c)) throw Error(u(108, Se(a) || "Unknown", E));
        a = et({}, h, i);
      }
      n.legacyContext = a, z(e, n, d), n.legacyContext = h;
    } else z(e, n, d);
  }
  function T(e, n) {
    if (e && e.defaultProps) {
      n = et({}, n), e = e.defaultProps;
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function D(e, n, i, a, d) {
    if (typeof i == "function") if (i.prototype && i.prototype.isReactComponent) {
      d = rt(i, n.legacyContext);
      var c = i.contextType;
      c = new i(a, typeof c == "object" && c !== null ? c._currentValue2 : d), zt(c, i, a, d), g(e, n, c, i);
    } else {
      c = rt(i, n.legacyContext), d = s(e, n, i, a, c);
      var h = we !== 0;
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) zt(d, i, a, c), g(e, n, d, i);
      else if (h) {
        a = n.treeContext, n.treeContext = nt(a, 1, 0);
        try {
          z(e, n, d);
        } finally {
          n.treeContext = a;
        }
      } else z(e, n, d);
    }
    else if (typeof i == "string") {
      switch (d = n.blockedSegment, c = me(d.chunks, i, a, e.responseState, d.formatContext), d.lastPushedText = !1, h = d.formatContext, d.formatContext = Qe(h, i, a), Q(e, n, c), d.formatContext = h, i) {
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
          d.chunks.push("</", i, ">");
      }
      d.lastPushedText = !1;
    } else {
      switch (i) {
        case ge:
        case wt:
        case K:
        case St:
        case gt:
          z(e, n, a.children);
          return;
        case ye:
          z(e, n, a.children);
          return;
        case se:
          throw Error(u(343));
        case Ie:
          e: {
            i = n.blockedBoundary, d = n.blockedSegment, c = a.fallback, a = a.children, h = /* @__PURE__ */ new Set();
            var E = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: h, errorDigest: null }, A = ct(e, d.chunks.length, E, d.formatContext, !1, !1);
            d.children.push(A), d.lastPushedText = !1;
            var b = ct(e, 0, null, d.formatContext, !1, !1);
            b.parentFlushed = !0, n.blockedBoundary = E, n.blockedSegment = b;
            try {
              if (Q(
                e,
                n,
                a
              ), e.responseState.generateStaticMarkup || b.lastPushedText && b.textEmbedded && b.chunks.push("<!-- -->"), b.status = 1, Pe(E, b), E.pendingTasks === 0) break e;
            } catch (M) {
              b.status = 4, E.forceClientRender = !0, E.errorDigest = pt(e, M);
            } finally {
              n.blockedBoundary = i, n.blockedSegment = d;
            }
            n = At(e, c, i, A, h, n.legacyContext, n.context, n.treeContext), e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i == "object" && i !== null) switch (i.$$typeof) {
        case de:
          if (a = s(e, n, i.render, a, d), we !== 0) {
            i = n.treeContext, n.treeContext = nt(i, 1, 0);
            try {
              z(e, n, a);
            } finally {
              n.treeContext = i;
            }
          } else z(e, n, a);
          return;
        case xt:
          i = i.type, a = T(i, a), D(e, n, i, a, d);
          return;
        case $:
          if (d = a.children, i = i._context, a = a.value, c = i._currentValue2, i._currentValue2 = a, h = Ee, Ee = a = { parent: h, depth: h === null ? 0 : h.depth + 1, context: i, parentValue: c, value: a }, n.context = a, z(e, n, d), e = Ee, e === null) throw Error(u(403));
          a = e.parentValue, e.context._currentValue2 = a === Dt ? e.context._defaultValue : a, e = Ee = e.parent, n.context = e;
          return;
        case Be:
          a = a.children, a = a(i._currentValue2), z(e, n, a);
          return;
        case re:
          d = i._init, i = d(i._payload), a = T(i, a), D(
            e,
            n,
            i,
            a,
            void 0
          );
          return;
      }
      throw Error(u(130, i == null ? i : typeof i, ""));
    }
  }
  function z(e, n, i) {
    if (n.node = i, typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case tt:
          D(e, n, i.type, i.props, i.ref);
          return;
        case q:
          throw Error(u(257));
        case re:
          var a = i._init;
          i = a(i._payload), z(e, n, i);
          return;
      }
      if (J(i)) {
        ee(e, n, i);
        return;
      }
      if (i === null || typeof i != "object" ? a = null : (a = Ye && i[Ye] || i["@@iterator"], a = typeof a == "function" ? a : null), a && (a = a.call(i))) {
        if (i = a.next(), !i.done) {
          var d = [];
          do
            d.push(i.value), i = a.next();
          while (!i.done);
          ee(e, n, d);
        }
        return;
      }
      throw e = Object.prototype.toString.call(i), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : e));
    }
    typeof i == "string" ? (a = n.blockedSegment, a.lastPushedText = Nt(n.blockedSegment.chunks, i, e.responseState, a.lastPushedText)) : typeof i == "number" && (a = n.blockedSegment, a.lastPushedText = Nt(n.blockedSegment.chunks, "" + i, e.responseState, a.lastPushedText));
  }
  function ee(e, n, i) {
    for (var a = i.length, d = 0; d < a; d++) {
      var c = n.treeContext;
      n.treeContext = nt(c, a, d);
      try {
        Q(e, n, i[d]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function Q(e, n, i) {
    var a = n.blockedSegment.formatContext, d = n.legacyContext, c = n.context;
    try {
      return z(e, n, i);
    } catch (A) {
      if ($t(), typeof A == "object" && A !== null && typeof A.then == "function") {
        i = A;
        var h = n.blockedSegment, E = ct(e, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
        h.children.push(E), h.lastPushedText = !1, e = At(e, n.node, n.blockedBoundary, E, n.abortSet, n.legacyContext, n.context, n.treeContext).ping, i.then(e, e), n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, ke(c);
      } else throw n.blockedSegment.formatContext = a, n.legacyContext = d, n.context = c, ke(c), A;
    }
  }
  function Re(e) {
    var n = e.blockedBoundary;
    e = e.blockedSegment, e.status = 3, je(this, n, e);
  }
  function X(e, n, i) {
    var a = e.blockedBoundary;
    e.blockedSegment.status = 3, a === null ? (n.allPendingTasks--, n.status !== 2 && (n.status = 2, n.destination !== null && n.destination.push(null))) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, e = i === void 0 ? Error(u(432)) : i, a.errorDigest = n.onError(e), a.parentFlushed && n.clientRenderedBoundaries.push(a)), a.fallbackAbortableTasks.forEach(function(d) {
      return X(d, n, i);
    }), a.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0 && (a = n.onAllReady, a()));
  }
  function Pe(e, n) {
    if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
      var i = n.children[0];
      i.id = n.id, i.parentFlushed = !0, i.status === 1 && Pe(e, i);
    } else e.completedSegments.push(n);
  }
  function je(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) throw Error(u(389));
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Ke, n = e.onShellReady, n());
    } else n.pendingTasks--, n.forceClientRender || (n.pendingTasks === 0 ? (i.parentFlushed && i.status === 1 && Pe(n, i), n.parentFlushed && e.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Re, e), n.fallbackAbortableTasks.clear()) : i.parentFlushed && i.status === 1 && (Pe(n, i), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
    e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
  }
  function sr(e) {
    if (e.status !== 2) {
      var n = Ee, i = He.current;
      He.current = Wt;
      var a = ut;
      ut = e.responseState;
      try {
        var d = e.pingedTasks, c;
        for (c = 0; c < d.length; c++) {
          var h = d[c], E = e, A = h.blockedSegment;
          if (A.status === 0) {
            ke(h.context);
            try {
              z(E, h, h.node), E.responseState.generateStaticMarkup || A.lastPushedText && A.textEmbedded && A.chunks.push("<!-- -->"), h.abortSet.delete(h), A.status = 1, je(E, h.blockedBoundary, A);
            } catch (Ae) {
              if ($t(), typeof Ae == "object" && Ae !== null && typeof Ae.then == "function") {
                var b = h.ping;
                Ae.then(b, b);
              } else {
                h.abortSet.delete(h), A.status = 4;
                var M = h.blockedBoundary, Y = Ae, $e = pt(E, Y);
                if (M === null ? C(E, Y) : (M.pendingTasks--, M.forceClientRender || (M.forceClientRender = !0, M.errorDigest = $e, M.parentFlushed && E.clientRenderedBoundaries.push(M))), E.allPendingTasks--, E.allPendingTasks === 0) {
                  var We = E.onAllReady;
                  We();
                }
              }
            } finally {
            }
          }
        }
        d.splice(0, c), e.destination !== null && or(e, e.destination);
      } catch (Ae) {
        pt(e, Ae), C(e, Ae);
      } finally {
        ut = a, He.current = i, i === Wt && ke(n);
      }
    }
  }
  function Vt(e, n, i) {
    switch (i.parentFlushed = !0, i.status) {
      case 0:
        var a = i.id = e.nextSegmentId++;
        return i.lastPushedText = !1, i.textEmbedded = !1, e = e.responseState, n.push('<template id="'), n.push(e.placeholderPrefix), e = a.toString(16), n.push(e), n.push('"></template>');
      case 1:
        i.status = 2;
        var d = !0;
        a = i.chunks;
        var c = 0;
        i = i.children;
        for (var h = 0; h < i.length; h++) {
          for (d = i[h]; c < d.index; c++) n.push(a[c]);
          d = Gt(e, n, d);
        }
        for (; c < a.length - 1; c++) n.push(a[c]);
        return c < a.length && (d = n.push(a[c])), d;
      default:
        throw Error(u(390));
    }
  }
  function Gt(e, n, i) {
    var a = i.boundary;
    if (a === null) return Vt(e, n, i);
    if (a.parentFlushed = !0, a.forceClientRender) return e.responseState.generateStaticMarkup || (a = a.errorDigest, n.push("<!--$!-->"), n.push("<template"), a && (n.push(' data-dgst="'), a = Z(a), n.push(a), n.push('"')), n.push("></template>")), Vt(e, n, i), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
    if (0 < a.pendingTasks) {
      a.rootSegmentID = e.nextSegmentId++, 0 < a.completedSegments.length && e.partialBoundaries.push(a);
      var d = e.responseState, c = d.nextSuspenseID++;
      return d = d.boundaryPrefix + c.toString(16), a = a.id = d, vt(n, e.responseState, a), Vt(e, n, i), n.push("<!--/$-->");
    }
    if (a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), vt(n, e.responseState, a.id), Vt(e, n, i), n.push("<!--/$-->");
    if (e.responseState.generateStaticMarkup || n.push("<!--$-->"), i = a.completedSegments, i.length !== 1) throw Error(u(391));
    return Gt(e, n, i[0]), e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->"), e;
  }
  function ur(e, n, i) {
    return yt(n, e.responseState, i.formatContext, i.id), Gt(e, n, i), Lt(n, i.formatContext);
  }
  function cr(e, n, i) {
    for (var a = i.completedSegments, d = 0; d < a.length; d++) pr(e, n, i, a[d]);
    if (a.length = 0, e = e.responseState, a = i.id, i = i.rootSegmentID, n.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? n.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), a === null) throw Error(u(395));
    return i = i.toString(16), n.push(a), n.push('","'), n.push(e.segmentPrefix), n.push(i), n.push('")<\/script>');
  }
  function pr(e, n, i, a) {
    if (a.status === 2) return !0;
    var d = a.id;
    if (d === -1) {
      if ((a.id = i.rootSegmentID) === -1) throw Error(u(392));
      return ur(e, n, a);
    }
    return ur(e, n, a), e = e.responseState, n.push(e.startInlineScript), e.sentCompleteSegmentFunction ? n.push('$RS("') : (e.sentCompleteSegmentFunction = !0, n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), n.push(e.segmentPrefix), d = d.toString(16), n.push(d), n.push('","'), n.push(e.placeholderPrefix), n.push(d), n.push('")<\/script>');
  }
  function or(e, n) {
    try {
      var i = e.completedRootSegment;
      if (i !== null && e.pendingRootTasks === 0) {
        Gt(e, n, i), e.completedRootSegment = null;
        var a = e.responseState.bootstrapChunks;
        for (i = 0; i < a.length - 1; i++) n.push(a[i]);
        i < a.length && n.push(a[i]);
      }
      var d = e.clientRenderedBoundaries, c;
      for (c = 0; c < d.length; c++) {
        var h = d[c];
        a = n;
        var E = e.responseState, A = h.id, b = h.errorDigest, M = h.errorMessage, Y = h.errorComponentStack;
        if (a.push(E.startInlineScript), E.sentClientRenderFunction ? a.push('$RX("') : (E.sentClientRenderFunction = !0, a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), A === null) throw Error(u(395));
        if (a.push(A), a.push('"'), b || M || Y) {
          a.push(",");
          var $e = Pt(b || "");
          a.push($e);
        }
        if (M || Y) {
          a.push(",");
          var We = Pt(M || "");
          a.push(We);
        }
        if (Y) {
          a.push(",");
          var Ae = Pt(Y);
          a.push(Ae);
        }
        if (!a.push(")<\/script>")) {
          e.destination = null, c++, d.splice(0, c);
          return;
        }
      }
      d.splice(0, c);
      var qt = e.completedBoundaries;
      for (c = 0; c < qt.length; c++) if (!cr(e, n, qt[c])) {
        e.destination = null, c++, qt.splice(0, c);
        return;
      }
      qt.splice(0, c);
      var ft = e.partialBoundaries;
      for (c = 0; c < ft.length; c++) {
        var dr = ft[c];
        e: {
          d = e, h = n;
          var Xt = dr.completedSegments;
          for (E = 0; E < Xt.length; E++) if (!pr(d, h, dr, Xt[E])) {
            E++, Xt.splice(0, E);
            var kr = !1;
            break e;
          }
          Xt.splice(0, E), kr = !0;
        }
        if (!kr) {
          e.destination = null, c++, ft.splice(0, c);
          return;
        }
      }
      ft.splice(0, c);
      var Ft = e.completedBoundaries;
      for (c = 0; c < Ft.length; c++) if (!cr(e, n, Ft[c])) {
        e.destination = null, c++, Ft.splice(0, c);
        return;
      }
      Ft.splice(0, c);
    } finally {
      e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && n.push(null);
    }
  }
  function wr(e, n) {
    try {
      var i = e.abortableTasks;
      i.forEach(function(a) {
        return X(a, e, n);
      }), i.clear(), e.destination !== null && or(e, e.destination);
    } catch (a) {
      pt(e, a), C(e, a);
    }
  }
  function Er() {
  }
  function fr(e, n, i, a) {
    var d = !1, c = null, h = "", E = { push: function(b) {
      return b !== null && (h += b), !0;
    }, destroy: function(b) {
      d = !0, c = b;
    } }, A = !1;
    if (e = nr(e, ve(i, n ? n.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Er, void 0, function() {
      A = !0;
    }), sr(e), wr(e, a), e.status === 1) e.status = 2, E.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = E;
      try {
        or(e, E);
      } catch (b) {
        pt(e, b), C(e, b);
      }
    }
    if (d) throw c;
    if (!A) throw Error(u(426));
    return h;
  }
  return Jt.renderToNodeStream = function() {
    throw Error(u(207));
  }, Jt.renderToStaticMarkup = function(e, n) {
    return fr(e, n, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.renderToStaticNodeStream = function() {
    throw Error(u(208));
  }, Jt.renderToString = function(e, n) {
    return fr(e, n, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Jt.version = "18.3.1", Jt;
}
var Br = {};
var zn;
function Bo() {
  if (zn) return Br;
  zn = 1;
  var v = xr;
  function u(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = null, _ = 0;
  function y(t, r) {
    if (r.length !== 0) if (512 < r.length) 0 < _ && (t.enqueue(new Uint8Array(S.buffer, 0, _)), S = new Uint8Array(512), _ = 0), t.enqueue(r);
    else {
      var o = S.length - _;
      o < r.length && (o === 0 ? t.enqueue(S) : (S.set(r.subarray(0, o), _), t.enqueue(S), r = r.subarray(o)), S = new Uint8Array(512), _ = 0), S.set(r, _), _ += r.length;
    }
  }
  function R(t, r) {
    return y(t, r), !0;
  }
  function P(t) {
    S && 0 < _ && (t.enqueue(new Uint8Array(S.buffer, 0, _)), S = null, _ = 0);
  }
  var O = new TextEncoder();
  function k(t) {
    return O.encode(t);
  }
  function w(t) {
    return O.encode(t);
  }
  function ne(t, r) {
    typeof t.error == "function" ? t.error(r) : t.close();
  }
  var H = Object.prototype.hasOwnProperty, Me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oe = {}, Z = {};
  function Kt(t) {
    return H.call(Z, t) ? !0 : H.call(Oe, t) ? !1 : Me.test(t) ? Z[t] = !0 : (Oe[t] = !0, !1);
  }
  function oe(t, r, o, l, f, p, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = p, this.removeEmptyString = m;
  }
  var J = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    J[t] = new oe(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    J[r] = new oe(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    J[t] = new oe(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    J[t] = new oe(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    J[t] = new oe(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    J[t] = new oe(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    J[t] = new oe(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    J[t] = new oe(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    J[t] = new oe(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var ae = /[\-:]([a-z])/g;
  function Qe(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      ae,
      Qe
    );
    J[r] = new oe(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(ae, Qe);
    J[r] = new oe(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(ae, Qe);
    J[r] = new oe(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    J[t] = new oe(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), J.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    J[t] = new oe(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var ie = {
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
  }, mt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function(t) {
    mt.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), ie[r] = ie[t];
    });
  });
  var te = /["'&<>]/;
  function j(t) {
    if (typeof t == "boolean" || typeof t == "number") return "" + t;
    t = "" + t;
    var r = te.exec(t);
    if (r) {
      var o = "", l, f = 0;
      for (l = r.index; l < t.length; l++) {
        switch (t.charCodeAt(l)) {
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
        f !== l && (o += t.substring(f, l)), f = l + 1, o += r;
      }
      t = f !== l ? o + t.substring(f, l) : o;
    }
    return t;
  }
  var lr = /([A-Z])/g, Ot = /^ms-/, It = Array.isArray, Qt = w("<script>"), fe = w("<\/script>"), me = w('<script src="'), vt = w('<script type="module" src="'), yt = w('" async=""><\/script>'), Lt = /(<\/|<)(s)(cript)/gi;
  function ar(t, r, o, l) {
    return "" + r + (o === "s" ? "\\u0073" : "\\u0053") + l;
  }
  function Pt(t, r, o, l, f) {
    t = t === void 0 ? "" : t, r = r === void 0 ? Qt : w('<script nonce="' + j(r) + '">');
    var p = [];
    if (o !== void 0 && p.push(r, k(("" + o).replace(Lt, ar)), fe), l !== void 0) for (o = 0; o < l.length; o++) p.push(me, k(j(l[o])), yt);
    if (f !== void 0) for (l = 0; l < f.length; l++) p.push(vt, k(j(f[l])), yt);
    return { bootstrapChunks: p, startInlineScript: r, placeholderPrefix: w(t + "P:"), segmentPrefix: w(t + "S:"), boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ve(t, r) {
    return { insertionMode: t, selectedValue: r };
  }
  function Nt(t) {
    return ve(t === "http://www.w3.org/2000/svg" ? 2 : t === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function et(t, r, o) {
    switch (r) {
      case "select":
        return ve(1, o.value != null ? o.value : o.defaultValue);
      case "svg":
        return ve(2, null);
      case "math":
        return ve(3, null);
      case "foreignObject":
        return ve(1, null);
      case "table":
        return ve(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ve(5, null);
      case "colgroup":
        return ve(7, null);
      case "tr":
        return ve(6, null);
    }
    return 4 <= t.insertionMode || t.insertionMode === 0 ? ve(1, null) : t;
  }
  var tt = w("<!-- -->");
  function q(t, r, o, l) {
    return r === "" ? l : (l && t.push(tt), t.push(k(j(r))), !0);
  }
  var gt = /* @__PURE__ */ new Map(), K = w(' style="'), St = w(":"), $ = w(";");
  function Be(t, r, o) {
    if (typeof o != "object") throw Error(u(62));
    r = !0;
    for (var l in o) if (H.call(o, l)) {
      var f = o[l];
      if (f != null && typeof f != "boolean" && f !== "") {
        if (l.indexOf("--") === 0) {
          var p = k(j(l));
          f = k(j(("" + f).trim()));
        } else {
          p = l;
          var m = gt.get(p);
          m !== void 0 || (m = w(j(p.replace(lr, "-$1").toLowerCase().replace(Ot, "-ms-"))), gt.set(p, m)), p = m, f = typeof f == "number" ? f === 0 || H.call(ie, l) ? k("" + f) : k(f + "px") : k(j(("" + f).trim()));
        }
        r ? (r = !1, t.push(K, p, St, f)) : t.push($, p, St, f);
      }
    }
    r || t.push(ye);
  }
  var de = w(" "), Ie = w('="'), ye = w('"'), xt = w('=""');
  function re(t, r, o, l) {
    switch (o) {
      case "style":
        Be(t, r, l);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") {
      if (r = J.hasOwnProperty(o) ? J[o] : null, r !== null) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!r.acceptsBooleans) return;
        }
        switch (o = k(r.attributeName), r.type) {
          case 3:
            l && t.push(de, o, xt);
            break;
          case 4:
            l === !0 ? t.push(de, o, xt) : l !== !1 && t.push(de, o, Ie, k(j(l)), ye);
            break;
          case 5:
            isNaN(l) || t.push(de, o, Ie, k(j(l)), ye);
            break;
          case 6:
            !isNaN(l) && 1 <= l && t.push(de, o, Ie, k(j(l)), ye);
            break;
          default:
            r.sanitizeURL && (l = "" + l), t.push(de, o, Ie, k(j(l)), ye);
        }
      } else if (Kt(o)) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (r = o.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-") return;
        }
        t.push(de, k(o), Ie, k(j(l)), ye);
      }
    }
  }
  var se = w(">"), wt = w("/>");
  function ge(t, r, o) {
    if (r != null) {
      if (o != null) throw Error(u(60));
      if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
      r = r.__html, r != null && t.push(k("" + r));
    }
  }
  function Dt(t) {
    var r = "";
    return v.Children.forEach(t, function(o) {
      o != null && (r += o);
    }), r;
  }
  var Ye = w(' selected=""');
  function Se(t, r, o, l) {
    t.push(le(o));
    var f = o = null, p;
    for (p in r) if (H.call(r, p)) {
      var m = r[p];
      if (m != null) switch (p) {
        case "children":
          o = m;
          break;
        case "dangerouslySetInnerHTML":
          f = m;
          break;
        default:
          re(t, l, p, m);
      }
    }
    return t.push(se), ge(t, f, o), typeof o == "string" ? (t.push(k(j(o))), null) : o;
  }
  var ze = w(`
`), rt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ee = /* @__PURE__ */ new Map();
  function le(t) {
    var r = Ee.get(t);
    if (r === void 0) {
      if (!rt.test(t)) throw Error(u(65, t));
      r = w("<" + t), Ee.set(t, r);
    }
    return r;
  }
  var er = w("<!DOCTYPE html>");
  function Et(t, r, o, l, f) {
    switch (r) {
      case "select":
        t.push(le("select"));
        var p = null, m = null;
        for (I in o) if (H.call(o, I)) {
          var x = o[I];
          if (x != null) switch (I) {
            case "children":
              p = x;
              break;
            case "dangerouslySetInnerHTML":
              m = x;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              re(t, l, I, x);
          }
        }
        return t.push(se), ge(t, m, p), p;
      case "option":
        m = f.selectedValue, t.push(le("option"));
        var F = x = null, N = null, I = null;
        for (p in o) if (H.call(o, p)) {
          var G = o[p];
          if (G != null) switch (p) {
            case "children":
              x = G;
              break;
            case "selected":
              N = G;
              break;
            case "dangerouslySetInnerHTML":
              I = G;
              break;
            case "value":
              F = G;
            default:
              re(t, l, p, G);
          }
        }
        if (m != null) if (o = F !== null ? "" + F : Dt(x), It(m)) {
          for (l = 0; l < m.length; l++)
            if ("" + m[l] === o) {
              t.push(Ye);
              break;
            }
        } else "" + m === o && t.push(Ye);
        else N && t.push(Ye);
        return t.push(se), ge(t, I, x), x;
      case "textarea":
        t.push(le("textarea")), I = m = p = null;
        for (x in o) if (H.call(o, x) && (F = o[x], F != null)) switch (x) {
          case "children":
            I = F;
            break;
          case "value":
            p = F;
            break;
          case "defaultValue":
            m = F;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(91));
          default:
            re(t, l, x, F);
        }
        if (p === null && m !== null && (p = m), t.push(se), I != null) {
          if (p != null) throw Error(u(92));
          if (It(I) && 1 < I.length) throw Error(u(93));
          p = "" + I;
        }
        return typeof p == "string" && p[0] === `
` && t.push(ze), p !== null && t.push(k(j("" + p))), null;
      case "input":
        t.push(le("input")), F = I = x = p = null;
        for (m in o) if (H.call(o, m) && (N = o[m], N != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, "input"));
          case "defaultChecked":
            F = N;
            break;
          case "defaultValue":
            x = N;
            break;
          case "checked":
            I = N;
            break;
          case "value":
            p = N;
            break;
          default:
            re(t, l, m, N);
        }
        return I !== null ? re(
          t,
          l,
          "checked",
          I
        ) : F !== null && re(t, l, "checked", F), p !== null ? re(t, l, "value", p) : x !== null && re(t, l, "value", x), t.push(wt), null;
      case "menuitem":
        t.push(le("menuitem"));
        for (var be in o) if (H.call(o, be) && (p = o[be], p != null)) switch (be) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(400));
          default:
            re(t, l, be, p);
        }
        return t.push(se), null;
      case "title":
        t.push(le("title")), p = null;
        for (G in o) if (H.call(o, G) && (m = o[G], m != null)) switch (G) {
          case "children":
            p = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(u(434));
          default:
            re(t, l, G, m);
        }
        return t.push(se), p;
      case "listing":
      case "pre":
        t.push(le(r)), m = p = null;
        for (F in o) if (H.call(o, F) && (x = o[F], x != null)) switch (F) {
          case "children":
            p = x;
            break;
          case "dangerouslySetInnerHTML":
            m = x;
            break;
          default:
            re(t, l, F, x);
        }
        if (t.push(se), m != null) {
          if (p != null) throw Error(u(60));
          if (typeof m != "object" || !("__html" in m)) throw Error(u(61));
          o = m.__html, o != null && (typeof o == "string" && 0 < o.length && o[0] === `
` ? t.push(ze, k(o)) : t.push(k("" + o)));
        }
        return typeof p == "string" && p[0] === `
` && t.push(ze), p;
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
        t.push(le(r));
        for (var Ve in o) if (H.call(o, Ve) && (p = o[Ve], p != null)) switch (Ve) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(399, r));
          default:
            re(t, l, Ve, p);
        }
        return t.push(wt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Se(t, o, r, l);
      case "html":
        return f.insertionMode === 0 && t.push(er), Se(t, o, r, l);
      default:
        if (r.indexOf("-") === -1 && typeof o.is != "string") return Se(t, o, r, l);
        t.push(le(r)), m = p = null;
        for (N in o) if (H.call(o, N) && (x = o[N], x != null)) switch (N) {
          case "children":
            p = x;
            break;
          case "dangerouslySetInnerHTML":
            m = x;
            break;
          case "style":
            Be(t, l, x);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            Kt(N) && typeof x != "function" && typeof x != "symbol" && t.push(de, k(N), Ie, k(j(x)), ye);
        }
        return t.push(se), ge(t, m, p), p;
    }
  }
  var Ze = w("</"), Ue = w(">"), ke = w('<template id="'), Bt = w('"></template>'), zt = w("<!--$-->"), tr = w('<!--$?--><template id="'), nt = w('"></template>'), ot = w("<!--$!-->"), kt = w("<!--/$-->"), Tt = w("<template"), Te = w('"'), Je = w(' data-dgst="');
  w(' data-msg="'), w(' data-stck="');
  var Ut = w("></template>");
  function ce(t, r, o) {
    if (y(t, tr), o === null) throw Error(u(395));
    return y(t, o), R(t, nt);
  }
  var Ht = w('<div hidden id="'), xe = w('">'), B = w("</div>"), it = w('<svg aria-hidden="true" style="display:none" id="'), V = w('">'), we = w("</svg>"), Le = w('<math aria-hidden="true" style="display:none" id="'), lt = w('">'), _e = w("</math>"), jt = w('<table hidden id="'), _t = w('">'), $t = w("</table>"), at = w('<table hidden><tbody id="'), Ct = w('">'), rr = w("</tbody></table>"), pe = w('<table hidden><tr id="'), Rt = w('">'), st = w("</tr></table>"), Wt = w('<table hidden><colgroup id="'), ut = w('">'), He = w("</colgroup></table>");
  function Ce(t, r, o, l) {
    switch (o.insertionMode) {
      case 0:
      case 1:
        return y(t, Ht), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, xe);
      case 2:
        return y(t, it), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, V);
      case 3:
        return y(t, Le), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, lt);
      case 4:
        return y(t, jt), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, _t);
      case 5:
        return y(t, at), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, Ct);
      case 6:
        return y(t, pe), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, Rt);
      case 7:
        return y(
          t,
          Wt
        ), y(t, r.segmentPrefix), y(t, k(l.toString(16))), R(t, ut);
      default:
        throw Error(u(397));
    }
  }
  function Ke(t, r) {
    switch (r.insertionMode) {
      case 0:
      case 1:
        return R(t, B);
      case 2:
        return R(t, we);
      case 3:
        return R(t, _e);
      case 4:
        return R(t, $t);
      case 5:
        return R(t, rr);
      case 6:
        return R(t, st);
      case 7:
        return R(t, He);
      default:
        throw Error(u(397));
    }
  }
  var nr = w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), At = w('$RS("'), ct = w('","'), pt = w('")<\/script>'), C = w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), s = w('$RC("'), g = w('","'), T = w('")<\/script>'), D = w('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), z = w('$RX("'), ee = w('"'), Q = w(")<\/script>"), Re = w(","), X = /[<\u2028\u2029]/g;
  function Pe(t) {
    return JSON.stringify(t).replace(X, function(r) {
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
  var je = Object.assign, sr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), ur = Symbol.for("react.strict_mode"), cr = Symbol.for("react.profiler"), pr = Symbol.for("react.provider"), or = Symbol.for("react.context"), wr = Symbol.for("react.forward_ref"), Er = Symbol.for("react.suspense"), fr = Symbol.for("react.suspense_list"), e = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.scope"), a = Symbol.for("react.debug_trace_mode"), d = Symbol.for("react.legacy_hidden"), c = Symbol.for("react.default_value"), h = Symbol.iterator;
  function E(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Gt:
        return "Fragment";
      case Vt:
        return "Portal";
      case cr:
        return "Profiler";
      case ur:
        return "StrictMode";
      case Er:
        return "Suspense";
      case fr:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case or:
        return (t.displayName || "Context") + ".Consumer";
      case pr:
        return (t._context.displayName || "Context") + ".Provider";
      case wr:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case e:
        return r = t.displayName || null, r !== null ? r : E(t.type) || "Memo";
      case n:
        r = t._payload, t = t._init;
        try {
          return E(t(r));
        } catch {
        }
    }
    return null;
  }
  var A = {};
  function b(t, r) {
    if (t = t.contextTypes, !t) return A;
    var o = {}, l;
    for (l in t) o[l] = r[l];
    return o;
  }
  var M = null;
  function Y(t, r) {
    if (t !== r) {
      t.context._currentValue = t.parentValue, t = t.parent;
      var o = r.parent;
      if (t === null) {
        if (o !== null) throw Error(u(401));
      } else {
        if (o === null) throw Error(u(401));
        Y(t, o);
      }
      r.context._currentValue = r.value;
    }
  }
  function $e(t) {
    t.context._currentValue = t.parentValue, t = t.parent, t !== null && $e(t);
  }
  function We(t) {
    var r = t.parent;
    r !== null && We(r), t.context._currentValue = t.value;
  }
  function Ae(t, r) {
    if (t.context._currentValue = t.parentValue, t = t.parent, t === null) throw Error(u(402));
    t.depth === r.depth ? Y(t, r) : Ae(t, r);
  }
  function qt(t, r) {
    var o = r.parent;
    if (o === null) throw Error(u(402));
    t.depth === o.depth ? Y(t, o) : qt(t, o), r.context._currentValue = r.value;
  }
  function ft(t) {
    var r = M;
    r !== t && (r === null ? We(t) : t === null ? $e(r) : r.depth === t.depth ? Y(r, t) : r.depth > t.depth ? Ae(r, t) : qt(r, t), M = t);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(t, r) {
    t = t._reactInternals, t.queue !== null && t.queue.push(r);
  }, enqueueReplaceState: function(t, r) {
    t = t._reactInternals, t.replace = !0, t.queue = [r];
  }, enqueueForceUpdate: function() {
  } };
  function Xt(t, r, o, l) {
    var f = t.state !== void 0 ? t.state : null;
    t.updater = dr, t.props = o, t.state = f;
    var p = { queue: [], replace: !1 };
    t._reactInternals = p;
    var m = r.contextType;
    if (t.context = typeof m == "object" && m !== null ? m._currentValue : l, m = r.getDerivedStateFromProps, typeof m == "function" && (m = m(o, f), f = m == null ? f : je({}, f, m), t.state = f), typeof r.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function")) if (r = t.state, typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && dr.enqueueReplaceState(t, t.state, null), p.queue !== null && 0 < p.queue.length) if (r = p.queue, m = p.replace, p.queue = null, p.replace = !1, m && r.length === 1) t.state = r[0];
    else {
      for (p = m ? r[0] : t.state, f = !0, m = m ? 1 : 0; m < r.length; m++) {
        var x = r[m];
        x = typeof x == "function" ? x.call(t, p, o, l) : x, x != null && (f ? (f = !1, p = je({}, p, x)) : je(p, x));
      }
      t.state = p;
    }
    else p.queue = null;
  }
  var kr = { id: 1, overflow: "" };
  function Ft(t, r, o) {
    var l = t.id;
    t = t.overflow;
    var f = 32 - Tr(l) - 1;
    l &= ~(1 << f), o += 1;
    var p = 32 - Tr(r) + f;
    if (30 < p) {
      var m = f - f % 5;
      return p = (l & (1 << m) - 1).toString(32), l >>= m, f -= m, { id: 1 << 32 - Tr(r) + f | o << f | l, overflow: p + t };
    }
    return { id: 1 << p | o << f | l, overflow: t };
  }
  var Tr = Math.clz32 ? Math.clz32 : qn, Vn = Math.log, Gn = Math.LN2;
  function qn(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Vn(t) / Gn | 0) | 0;
  }
  function Xn(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Yn = typeof Object.is == "function" ? Object.is : Xn, dt = null, jr = null, _r = null, W = null, hr = !1, Cr = !1, mr = 0, bt = null, Rr = 0;
  function Yt() {
    if (dt === null) throw Error(u(321));
    return dt;
  }
  function pn() {
    if (0 < Rr) throw Error(u(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $r() {
    return W === null ? _r === null ? (hr = !1, _r = W = pn()) : (hr = !0, W = _r) : W.next === null ? (hr = !1, W = W.next = pn()) : (hr = !0, W = W.next), W;
  }
  function Wr() {
    jr = dt = null, Cr = !1, _r = null, Rr = 0, W = bt = null;
  }
  function fn(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function dn(t, r, o) {
    if (dt = Yt(), W = $r(), hr) {
      var l = W.queue;
      if (r = l.dispatch, bt !== null && (o = bt.get(l), o !== void 0)) {
        bt.delete(l), l = W.memoizedState;
        do
          l = t(l, o.action), o = o.next;
        while (o !== null);
        return W.memoizedState = l, [l, r];
      }
      return [W.memoizedState, r];
    }
    return t = t === fn ? typeof r == "function" ? r() : r : o !== void 0 ? o(r) : r, W.memoizedState = t, t = W.queue = { last: null, dispatch: null }, t = t.dispatch = Zn.bind(null, dt, t), [W.memoizedState, t];
  }
  function hn(t, r) {
    if (dt = Yt(), W = $r(), r = r === void 0 ? null : r, W !== null) {
      var o = W.memoizedState;
      if (o !== null && r !== null) {
        var l = o[1];
        e: if (l === null) l = !1;
        else {
          for (var f = 0; f < l.length && f < r.length; f++) if (!Yn(r[f], l[f])) {
            l = !1;
            break e;
          }
          l = !0;
        }
        if (l) return o[0];
      }
    }
    return t = t(), W.memoizedState = [t, r], t;
  }
  function Zn(t, r, o) {
    if (25 <= Rr) throw Error(u(301));
    if (t === dt) if (Cr = !0, t = { action: o, next: null }, bt === null && (bt = /* @__PURE__ */ new Map()), o = bt.get(r), o === void 0) bt.set(r, t);
    else {
      for (r = o; r.next !== null; ) r = r.next;
      r.next = t;
    }
  }
  function Jn() {
    throw Error(u(394));
  }
  function Ar() {
  }
  var mn = { readContext: function(t) {
    return t._currentValue;
  }, useContext: function(t) {
    return Yt(), t._currentValue;
  }, useMemo: hn, useReducer: dn, useRef: function(t) {
    dt = Yt(), W = $r();
    var r = W.memoizedState;
    return r === null ? (t = { current: t }, W.memoizedState = t) : r;
  }, useState: function(t) {
    return dn(fn, t);
  }, useInsertionEffect: Ar, useLayoutEffect: function() {
  }, useCallback: function(t, r) {
    return hn(function() {
      return t;
    }, r);
  }, useImperativeHandle: Ar, useEffect: Ar, useDebugValue: Ar, useDeferredValue: function(t) {
    return Yt(), t;
  }, useTransition: function() {
    return Yt(), [!1, Jn];
  }, useId: function() {
    var t = jr.treeContext, r = t.overflow;
    t = t.id, t = (t & ~(1 << 32 - Tr(t) - 1)).toString(32) + r;
    var o = Fr;
    if (o === null) throw Error(u(404));
    return r = mr++, t = ":" + o.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + ":";
  }, useMutableSource: function(t, r) {
    return Yt(), r(t._source);
  }, useSyncExternalStore: function(t, r, o) {
    if (o === void 0) throw Error(u(407));
    return o();
  } }, Fr = null, Vr = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Kn(t) {
    return console.error(t), null;
  }
  function vr() {
  }
  function Qn(t, r, o, l, f, p, m, x, F) {
    var N = [], I = /* @__PURE__ */ new Set();
    return r = { destination: null, responseState: r, progressiveChunkSize: l === void 0 ? 12800 : l, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: I, pingedTasks: N, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Kn : f, onAllReady: p === void 0 ? vr : p, onShellReady: m === void 0 ? vr : m, onShellError: x === void 0 ? vr : x, onFatalError: F === void 0 ? vr : F }, o = br(r, 0, null, o, !1, !1), o.parentFlushed = !0, t = Gr(r, t, null, o, I, A, null, kr), N.push(t), r;
  }
  function Gr(t, r, o, l, f, p, m, x) {
    t.allPendingTasks++, o === null ? t.pendingRootTasks++ : o.pendingTasks++;
    var F = { node: r, ping: function() {
      var N = t.pingedTasks;
      N.push(F), N.length === 1 && En(t);
    }, blockedBoundary: o, blockedSegment: l, abortSet: f, legacyContext: p, context: m, treeContext: x };
    return f.add(F), F;
  }
  function br(t, r, o, l, f, p) {
    return { status: 0, id: -1, index: r, parentFlushed: !1, chunks: [], children: [], formatContext: l, boundary: o, lastPushedText: f, textEmbedded: p };
  }
  function yr(t, r) {
    if (t = t.onError(r), t != null && typeof t != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
    return t;
  }
  function Mr(t, r) {
    var o = t.onShellError;
    o(r), o = t.onFatalError, o(r), t.destination !== null ? (t.status = 2, ne(t.destination, r)) : (t.status = 1, t.fatalError = r);
  }
  function vn(t, r, o, l, f) {
    for (dt = {}, jr = r, mr = 0, t = o(l, f); Cr; ) Cr = !1, mr = 0, Rr += 1, W = null, t = o(l, f);
    return Wr(), t;
  }
  function yn(t, r, o, l) {
    var f = o.render(), p = l.childContextTypes;
    if (p != null) {
      var m = r.legacyContext;
      if (typeof o.getChildContext != "function") l = m;
      else {
        o = o.getChildContext();
        for (var x in o) if (!(x in p)) throw Error(u(108, E(l) || "Unknown", x));
        l = je({}, m, o);
      }
      r.legacyContext = l, Fe(t, r, f), r.legacyContext = m;
    } else Fe(t, r, f);
  }
  function gn(t, r) {
    if (t && t.defaultProps) {
      r = je({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function qr(t, r, o, l, f) {
    if (typeof o == "function") if (o.prototype && o.prototype.isReactComponent) {
      f = b(o, r.legacyContext);
      var p = o.contextType;
      p = new o(l, typeof p == "object" && p !== null ? p._currentValue : f), Xt(p, o, l, f), yn(t, r, p, o);
    } else {
      p = b(o, r.legacyContext), f = vn(t, r, o, l, p);
      var m = mr !== 0;
      if (typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) Xt(f, o, l, p), yn(t, r, f, o);
      else if (m) {
        l = r.treeContext, r.treeContext = Ft(l, 1, 0);
        try {
          Fe(t, r, f);
        } finally {
          r.treeContext = l;
        }
      } else Fe(t, r, f);
    }
    else if (typeof o == "string") {
      switch (f = r.blockedSegment, p = Et(f.chunks, o, l, t.responseState, f.formatContext), f.lastPushedText = !1, m = f.formatContext, f.formatContext = et(m, o, l), Xr(t, r, p), f.formatContext = m, o) {
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
          f.chunks.push(Ze, k(o), Ue);
      }
      f.lastPushedText = !1;
    } else {
      switch (o) {
        case d:
        case a:
        case ur:
        case cr:
        case Gt:
          Fe(t, r, l.children);
          return;
        case fr:
          Fe(t, r, l.children);
          return;
        case i:
          throw Error(u(343));
        case Er:
          e: {
            o = r.blockedBoundary, f = r.blockedSegment, p = l.fallback, l = l.children, m = /* @__PURE__ */ new Set();
            var x = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: m, errorDigest: null }, F = br(t, f.chunks.length, x, f.formatContext, !1, !1);
            f.children.push(F), f.lastPushedText = !1;
            var N = br(t, 0, null, f.formatContext, !1, !1);
            N.parentFlushed = !0, r.blockedBoundary = x, r.blockedSegment = N;
            try {
              if (Xr(
                t,
                r,
                l
              ), N.lastPushedText && N.textEmbedded && N.chunks.push(tt), N.status = 1, Or(x, N), x.pendingTasks === 0) break e;
            } catch (I) {
              N.status = 4, x.forceClientRender = !0, x.errorDigest = yr(t, I);
            } finally {
              r.blockedBoundary = o, r.blockedSegment = f;
            }
            r = Gr(t, p, o, F, m, r.legacyContext, r.context, r.treeContext), t.pingedTasks.push(r);
          }
          return;
      }
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case wr:
          if (l = vn(t, r, o.render, l, f), mr !== 0) {
            o = r.treeContext, r.treeContext = Ft(o, 1, 0);
            try {
              Fe(t, r, l);
            } finally {
              r.treeContext = o;
            }
          } else Fe(t, r, l);
          return;
        case e:
          o = o.type, l = gn(o, l), qr(t, r, o, l, f);
          return;
        case pr:
          if (f = l.children, o = o._context, l = l.value, p = o._currentValue, o._currentValue = l, m = M, M = l = { parent: m, depth: m === null ? 0 : m.depth + 1, context: o, parentValue: p, value: l }, r.context = l, Fe(t, r, f), t = M, t === null) throw Error(u(403));
          l = t.parentValue, t.context._currentValue = l === c ? t.context._defaultValue : l, t = M = t.parent, r.context = t;
          return;
        case or:
          l = l.children, l = l(o._currentValue), Fe(t, r, l);
          return;
        case n:
          f = o._init, o = f(o._payload), l = gn(o, l), qr(t, r, o, l, void 0);
          return;
      }
      throw Error(u(
        130,
        o == null ? o : typeof o,
        ""
      ));
    }
  }
  function Fe(t, r, o) {
    if (r.node = o, typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case sr:
          qr(t, r, o.type, o.props, o.ref);
          return;
        case Vt:
          throw Error(u(257));
        case n:
          var l = o._init;
          o = l(o._payload), Fe(t, r, o);
          return;
      }
      if (It(o)) {
        Sn(t, r, o);
        return;
      }
      if (o === null || typeof o != "object" ? l = null : (l = h && o[h] || o["@@iterator"], l = typeof l == "function" ? l : null), l && (l = l.call(o))) {
        if (o = l.next(), !o.done) {
          var f = [];
          do
            f.push(o.value), o = l.next();
          while (!o.done);
          Sn(t, r, f);
        }
        return;
      }
      throw t = Object.prototype.toString.call(o), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : t));
    }
    typeof o == "string" ? (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, o, t.responseState, l.lastPushedText)) : typeof o == "number" && (l = r.blockedSegment, l.lastPushedText = q(r.blockedSegment.chunks, "" + o, t.responseState, l.lastPushedText));
  }
  function Sn(t, r, o) {
    for (var l = o.length, f = 0; f < l; f++) {
      var p = r.treeContext;
      r.treeContext = Ft(p, l, f);
      try {
        Xr(t, r, o[f]);
      } finally {
        r.treeContext = p;
      }
    }
  }
  function Xr(t, r, o) {
    var l = r.blockedSegment.formatContext, f = r.legacyContext, p = r.context;
    try {
      return Fe(t, r, o);
    } catch (F) {
      if (Wr(), typeof F == "object" && F !== null && typeof F.then == "function") {
        o = F;
        var m = r.blockedSegment, x = br(t, m.chunks.length, null, m.formatContext, m.lastPushedText, !0);
        m.children.push(x), m.lastPushedText = !1, t = Gr(t, r.node, r.blockedBoundary, x, r.abortSet, r.legacyContext, r.context, r.treeContext).ping, o.then(t, t), r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p);
      } else throw r.blockedSegment.formatContext = l, r.legacyContext = f, r.context = p, ft(p), F;
    }
  }
  function eo(t) {
    var r = t.blockedBoundary;
    t = t.blockedSegment, t.status = 3, wn(this, r, t);
  }
  function xn(t, r, o) {
    var l = t.blockedBoundary;
    t.blockedSegment.status = 3, l === null ? (r.allPendingTasks--, r.status !== 2 && (r.status = 2, r.destination !== null && r.destination.close())) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = !0, t = o === void 0 ? Error(u(432)) : o, l.errorDigest = r.onError(t), l.parentFlushed && r.clientRenderedBoundaries.push(l)), l.fallbackAbortableTasks.forEach(function(f) {
      return xn(f, r, o);
    }), l.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0 && (l = r.onAllReady, l()));
  }
  function Or(t, r) {
    if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
      var o = r.children[0];
      o.id = r.id, o.parentFlushed = !0, o.status === 1 && Or(t, o);
    } else t.completedSegments.push(r);
  }
  function wn(t, r, o) {
    if (r === null) {
      if (o.parentFlushed) {
        if (t.completedRootSegment !== null) throw Error(u(389));
        t.completedRootSegment = o;
      }
      t.pendingRootTasks--, t.pendingRootTasks === 0 && (t.onShellError = vr, r = t.onShellReady, r());
    } else r.pendingTasks--, r.forceClientRender || (r.pendingTasks === 0 ? (o.parentFlushed && o.status === 1 && Or(r, o), r.parentFlushed && t.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(eo, t), r.fallbackAbortableTasks.clear()) : o.parentFlushed && o.status === 1 && (Or(r, o), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
    t.allPendingTasks--, t.allPendingTasks === 0 && (t = t.onAllReady, t());
  }
  function En(t) {
    if (t.status !== 2) {
      var r = M, o = Vr.current;
      Vr.current = mn;
      var l = Fr;
      Fr = t.responseState;
      try {
        var f = t.pingedTasks, p;
        for (p = 0; p < f.length; p++) {
          var m = f[p], x = t, F = m.blockedSegment;
          if (F.status === 0) {
            ft(m.context);
            try {
              Fe(x, m, m.node), F.lastPushedText && F.textEmbedded && F.chunks.push(tt), m.abortSet.delete(m), F.status = 1, wn(x, m.blockedBoundary, F);
            } catch (Ge) {
              if (Wr(), typeof Ge == "object" && Ge !== null && typeof Ge.then == "function") {
                var N = m.ping;
                Ge.then(N, N);
              } else {
                m.abortSet.delete(m), F.status = 4;
                var I = m.blockedBoundary, G = Ge, be = yr(x, G);
                if (I === null ? Mr(x, G) : (I.pendingTasks--, I.forceClientRender || (I.forceClientRender = !0, I.errorDigest = be, I.parentFlushed && x.clientRenderedBoundaries.push(I))), x.allPendingTasks--, x.allPendingTasks === 0) {
                  var Ve = x.onAllReady;
                  Ve();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, p), t.destination !== null && Yr(t, t.destination);
      } catch (Ge) {
        yr(t, Ge), Mr(t, Ge);
      } finally {
        Fr = l, Vr.current = o, o === mn && ft(r);
      }
    }
  }
  function Ir(t, r, o) {
    switch (o.parentFlushed = !0, o.status) {
      case 0:
        var l = o.id = t.nextSegmentId++;
        return o.lastPushedText = !1, o.textEmbedded = !1, t = t.responseState, y(r, ke), y(r, t.placeholderPrefix), t = k(l.toString(16)), y(r, t), R(r, Bt);
      case 1:
        o.status = 2;
        var f = !0;
        l = o.chunks;
        var p = 0;
        o = o.children;
        for (var m = 0; m < o.length; m++) {
          for (f = o[m]; p < f.index; p++) y(r, l[p]);
          f = Lr(t, r, f);
        }
        for (; p < l.length - 1; p++) y(r, l[p]);
        return p < l.length && (f = R(r, l[p])), f;
      default:
        throw Error(u(390));
    }
  }
  function Lr(t, r, o) {
    var l = o.boundary;
    if (l === null) return Ir(t, r, o);
    if (l.parentFlushed = !0, l.forceClientRender) l = l.errorDigest, R(r, ot), y(r, Tt), l && (y(r, Je), y(r, k(j(l))), y(r, Te)), R(r, Ut), Ir(t, r, o);
    else if (0 < l.pendingTasks) {
      l.rootSegmentID = t.nextSegmentId++, 0 < l.completedSegments.length && t.partialBoundaries.push(l);
      var f = t.responseState, p = f.nextSuspenseID++;
      f = w(f.boundaryPrefix + p.toString(16)), l = l.id = f, ce(r, t.responseState, l), Ir(t, r, o);
    } else if (l.byteSize > t.progressiveChunkSize) l.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(l), ce(r, t.responseState, l.id), Ir(t, r, o);
    else {
      if (R(r, zt), o = l.completedSegments, o.length !== 1) throw Error(u(391));
      Lr(t, r, o[0]);
    }
    return R(r, kt);
  }
  function kn(t, r, o) {
    return Ce(r, t.responseState, o.formatContext, o.id), Lr(t, r, o), Ke(r, o.formatContext);
  }
  function Tn(t, r, o) {
    for (var l = o.completedSegments, f = 0; f < l.length; f++) _n(t, r, o, l[f]);
    if (l.length = 0, t = t.responseState, l = o.id, o = o.rootSegmentID, y(r, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(r, s) : (t.sentCompleteBoundaryFunction = !0, y(r, C)), l === null) throw Error(u(395));
    return o = k(o.toString(16)), y(r, l), y(r, g), y(r, t.segmentPrefix), y(r, o), R(r, T);
  }
  function _n(t, r, o, l) {
    if (l.status === 2) return !0;
    var f = l.id;
    if (f === -1) {
      if ((l.id = o.rootSegmentID) === -1) throw Error(u(392));
      return kn(t, r, l);
    }
    return kn(t, r, l), t = t.responseState, y(r, t.startInlineScript), t.sentCompleteSegmentFunction ? y(r, At) : (t.sentCompleteSegmentFunction = !0, y(r, nr)), y(r, t.segmentPrefix), f = k(f.toString(16)), y(r, f), y(r, ct), y(r, t.placeholderPrefix), y(r, f), R(r, pt);
  }
  function Yr(t, r) {
    S = new Uint8Array(512), _ = 0;
    try {
      var o = t.completedRootSegment;
      if (o !== null && t.pendingRootTasks === 0) {
        Lr(t, r, o), t.completedRootSegment = null;
        var l = t.responseState.bootstrapChunks;
        for (o = 0; o < l.length - 1; o++) y(r, l[o]);
        o < l.length && R(r, l[o]);
      }
      var f = t.clientRenderedBoundaries, p;
      for (p = 0; p < f.length; p++) {
        var m = f[p];
        l = r;
        var x = t.responseState, F = m.id, N = m.errorDigest, I = m.errorMessage, G = m.errorComponentStack;
        if (y(l, x.startInlineScript), x.sentClientRenderFunction ? y(l, z) : (x.sentClientRenderFunction = !0, y(
          l,
          D
        )), F === null) throw Error(u(395));
        y(l, F), y(l, ee), (N || I || G) && (y(l, Re), y(l, k(Pe(N || "")))), (I || G) && (y(l, Re), y(l, k(Pe(I || "")))), G && (y(l, Re), y(l, k(Pe(G)))), R(l, Q);
      }
      f.splice(0, p);
      var be = t.completedBoundaries;
      for (p = 0; p < be.length; p++) Tn(t, r, be[p]);
      be.splice(0, p), P(r), S = new Uint8Array(512), _ = 0;
      var Ve = t.partialBoundaries;
      for (p = 0; p < Ve.length; p++) {
        var Ge = Ve[p];
        e: {
          f = t, m = r;
          var Pr = Ge.completedSegments;
          for (x = 0; x < Pr.length; x++) if (!_n(
            f,
            m,
            Ge,
            Pr[x]
          )) {
            x++, Pr.splice(0, x);
            var Rn = !1;
            break e;
          }
          Pr.splice(0, x), Rn = !0;
        }
        if (!Rn) {
          t.destination = null, p++, Ve.splice(0, p);
          return;
        }
      }
      Ve.splice(0, p);
      var Zr = t.completedBoundaries;
      for (p = 0; p < Zr.length; p++) Tn(t, r, Zr[p]);
      Zr.splice(0, p);
    } finally {
      P(r), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && r.close();
    }
  }
  function Cn(t, r) {
    try {
      var o = t.abortableTasks;
      o.forEach(function(l) {
        return xn(l, t, r);
      }), o.clear(), t.destination !== null && Yr(t, t.destination);
    } catch (l) {
      yr(t, l), Mr(t, l);
    }
  }
  return Br.renderToReadableStream = function(t, r) {
    return new Promise(function(o, l) {
      var f, p, m = new Promise(function(I, G) {
        p = I, f = G;
      }), x = Qn(t, Pt(r ? r.identifierPrefix : void 0, r ? r.nonce : void 0, r ? r.bootstrapScriptContent : void 0, r ? r.bootstrapScripts : void 0, r ? r.bootstrapModules : void 0), Nt(r ? r.namespaceURI : void 0), r ? r.progressiveChunkSize : void 0, r ? r.onError : void 0, p, function() {
        var I = new ReadableStream({ type: "bytes", pull: function(G) {
          if (x.status === 1) x.status = 2, ne(G, x.fatalError);
          else if (x.status !== 2 && x.destination === null) {
            x.destination = G;
            try {
              Yr(x, G);
            } catch (be) {
              yr(x, be), Mr(x, be);
            }
          }
        }, cancel: function() {
          Cn(x);
        } }, { highWaterMark: 0 });
        I.allReady = m, o(I);
      }, function(I) {
        m.catch(function() {
        }), l(I);
      }, f);
      if (r && r.signal) {
        var F = r.signal, N = function() {
          Cn(x, F.reason), F.removeEventListener("abort", N);
        };
        F.addEventListener("abort", N);
      }
      En(x);
    });
  }, Br.version = "18.3.1", Br;
}
var ir, Wn;
ir = Do(), Wn = Bo();
ir.version;
ir.renderToString;
ir.renderToStaticMarkup;
ir.renderToNodeStream;
ir.renderToStaticNodeStream;
Wn.renderToReadableStream;
const zo = "staticMarkup";
function Uo() {
  const u = to().indexOf(zo) > -1 ? !0 : void 0;
  return {
    isBootstrap: u,
    isReact: u ? void 0 : !0
  };
}
const ln = ({ gaData: v, prefix: u = "", children: S }) => {
  const { isReact: _ } = Uo(), { onClick: y, ...R } = S.props;
  if (_)
    return xr.cloneElement(S, {
      ...R,
      onClick: (k) => (No(v), y ? y(k) : !0)
    });
  let P = "";
  ["input", "header", "header-input"].includes(u) && (P = `-${u}`);
  const O = {
    [`data-ga${P}`]: v.text,
    [`data-ga${P}-name`]: v.name,
    [`data-ga${P}-event`]: v.event,
    [`data-ga${P}-action`]: v.action,
    [`data-ga${P}-type`]: v.type,
    [`data-ga${P}-region`]: v.region,
    [`data-ga${P}-section`]: v.section,
    [`data-ga${P}-component`]: v.component
  };
  return xr.cloneElement(S, {
    ...R,
    onClick: y,
    ...O
  });
};
var Ho = /* @__PURE__ */ ((v) => (v.Facebook = "facebook", v.LinkedIn = "linkedin", v.Twitter = "twitter", v))(Ho || {});
const an = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content"
}, jo = (v) => {
  switch (v) {
    case "facebook":
      return "fab fa-facebook-square";
    case "linkedin":
      return "fab fa-linkedin";
    case "twitter":
      return "fab fa-square-x-twitter";
    default:
      return "";
  }
}, Wo = ({
  name: v,
  profession: u,
  contactInfo: S,
  description: _,
  socialMedia: y,
  imageUrl: R
}) => /* @__PURE__ */ U.jsxs("div", { className: "uds-person-profile", children: [
  /* @__PURE__ */ U.jsx("div", { className: "profile-img-container", children: /* @__PURE__ */ U.jsx("div", { className: "profile-img-placeholder", children: /* @__PURE__ */ U.jsx(
    "img",
    {
      className: "profile-img",
      src: R,
      alt: v,
      width: 300,
      height: 300,
      decoding: "async",
      loading: "lazy",
      fetchPriority: "high"
    }
  ) }) }),
  /* @__PURE__ */ U.jsxs("div", { className: "person", children: [
    /* @__PURE__ */ U.jsx("h3", { className: "person-name", children: v }),
    /* @__PURE__ */ U.jsxs("div", { className: "person-profession", children: [
      /* @__PURE__ */ U.jsx("h4", { children: /* @__PURE__ */ U.jsx("span", { children: u.title }) }),
      /* @__PURE__ */ U.jsx("h4", { children: /* @__PURE__ */ U.jsx("span", { children: u.department }) })
    ] }),
    /* @__PURE__ */ U.jsxs("ul", { className: "person-contact-info", children: [
      /* @__PURE__ */ U.jsx("li", { children: /* @__PURE__ */ U.jsx(
        ln,
        {
          gaData: { ...an, section: v.toLowerCase() },
          children: /* @__PURE__ */ U.jsx("a", { href: `mailto:${S.email}`, "aria-label": "Email user", children: S.email })
        }
      ) }),
      /* @__PURE__ */ U.jsx("li", { children: /* @__PURE__ */ U.jsx(ln, { gaData: { ...an, section: v.toLowerCase() }, children: /* @__PURE__ */ U.jsx("a", { href: `tel:${S.phone}`, "aria-label": "Call user", children: S.phone }) }) }),
      /* @__PURE__ */ U.jsx("li", { children: /* @__PURE__ */ U.jsxs("address", { className: "person-address", children: [
        /* @__PURE__ */ U.jsx("span", { className: "person-street", children: S.address.street }),
        /* @__PURE__ */ U.jsx("span", { className: "person-city", children: S.address.cityStateZip })
      ] }) })
    ] }),
    /* @__PURE__ */ U.jsxs("div", { children: [
      /* @__PURE__ */ U.jsx("p", { className: "person-description", children: _ }),
      /* @__PURE__ */ U.jsx("ul", { className: "person-social-medias", children: y.map((P, O) => /* @__PURE__ */ U.jsx("li", { children: /* @__PURE__ */ U.jsx(
        ln,
        {
          gaData: { ...an, section: v.toLowerCase() },
          children: /* @__PURE__ */ U.jsx(
            "a",
            {
              href: P.url,
              "aria-label": `Go to user ${P.platform} profile`,
              children: /* @__PURE__ */ U.jsx(
                "span",
                {
                  className: jo(P.platform)
                }
              )
            }
          )
        }
      ) }, O)) })
    ] })
  ] })
] });
export {
  Wo as PersonProfile,
  Ho as SocialMediaPlatform
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
